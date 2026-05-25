import { LitElement, html, nothing, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { cardStyles } from "./styles";
import "./editor";

const DAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const DAY_CODES = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

interface CardConfig {
  entity: string;
  time_size?: string;
  day_size?: string;
  show_details?: boolean;
}

interface HassEntity {
  state: string;
  attributes: Record<string, any>;
  last_changed: string;
}

@customElement("chromecast-alarm-card")
export class ChromecastAlarmCard extends LitElement {
  static styles = cardStyles;

  @property({ attribute: false }) public hass!: any;
  @state() private _config!: CardConfig;
  @state() private _firing = false;
  private _firingTimeout?: ReturnType<typeof setTimeout>;

  // -- HA card lifecycle --------------------------------------------------

  public static getConfigElement() {
    return document.createElement("chromecast-alarm-card-editor");
  }

  public static getStubConfig() {
    return { entity: "", show_details: true };
  }

  public setConfig(config: CardConfig): void {
    if (!config.entity) {
      throw new Error("Please select an alarm entity");
    }
    this._config = config;
  }

  public getCardSize(): number {
    return 3;
  }

  // -- Derived entity IDs ------------------------------------------------

  private get _switchEntity(): string {
    return this._config.entity;
  }

  private get _baseId(): string {
    // switch.williams_wakeup_alarm → williams_wakeup_alarm
    return this._config.entity.replace("switch.", "");
  }

  private get _sensorEntity(): string {
    return `sensor.${this._baseId}_next_fire`;
  }

  private get _snoozeEntity(): string {
    return `button.${this._baseId}_snooze`;
  }

  private get _dismissEntity(): string {
    return `button.${this._baseId}_dismiss`;
  }

  private get _eventEntity(): string {
    return `event.${this._baseId}_event`;
  }

  // -- State helpers ------------------------------------------------------

  private _getState(entityId: string): HassEntity | undefined {
    return this.hass?.states?.[entityId];
  }

  private get _switchState(): HassEntity | undefined {
    return this._getState(this._switchEntity);
  }

  private get _isEnabled(): boolean {
    return this._switchState?.state === "on";
  }

  private get _attrs(): Record<string, any> {
    return this._switchState?.attributes || {};
  }

  // -- Detect alarm firing ------------------------------------------------

  protected updated(changedProps: PropertyValues): void {
    super.updated(changedProps);
    if (!changedProps.has("hass")) return;

    const eventState = this._getState(this._eventEntity);
    if (!eventState) return;

    const oldHass = changedProps.get("hass") as any;
    const oldEvent = oldHass?.states?.[this._eventEntity];
    if (
      eventState.state !== oldEvent?.state &&
      eventState.attributes?.event_type === "alarm_fired"
    ) {
      this._firing = true;
      if (this._firingTimeout) clearTimeout(this._firingTimeout);
      this._firingTimeout = setTimeout(() => {
        this._firing = false;
      }, 10000);
    }
  }

  // -- Actions ------------------------------------------------------------

  private _toggleAlarm(): void {
    this.hass.callService(
      "switch",
      this._isEnabled ? "turn_off" : "turn_on",
      { entity_id: this._switchEntity }
    );
  }

  private _pressSnooze(): void {
    this.hass.callService("button", "press", {
      entity_id: this._snoozeEntity,
    });
  }

  private _pressDismiss(): void {
    this.hass.callService("button", "press", {
      entity_id: this._dismissEntity,
    });
  }

  private _fireAlarm(): void {
    this.hass.callService("chromecast_alarm", "fire", {
      entity_id: this._switchEntity,
    });
  }

  private _stopAlarm(): void {
    this.hass.callService("chromecast_alarm", "stop", {
      entity_id: this._switchEntity,
    });
  }

  // -- Time formatting ----------------------------------------------------

  private _formatNextFire(): { time: string; label: string } {
    if (!this._isEnabled) {
      return { time: "Off", label: "Alarm disabled" };
    }

    const attrs = this._attrs;
    if (attrs.is_dismissed_today) {
      return { time: "Dismissed", label: "Until tomorrow" };
    }

    const nextFire = attrs.next_fire;
    if (!nextFire) {
      return { time: "--:--", label: "No upcoming alarm" };
    }

    const dt = new Date(nextFire);
    const now = new Date();
    const hours = dt.getHours().toString().padStart(2, "0");
    const minutes = dt.getMinutes().toString().padStart(2, "0");
    const timeStr = `${hours}:${minutes}`;

    // Is it today or tomorrow?
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const target = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate());
    const diffDays = Math.round(
      (target.getTime() - today.getTime()) / 86400000
    );

    let label: string;
    if (diffDays === 0) {
      label = "Today";
    } else if (diffDays === 1) {
      label = "Tomorrow";
    } else {
      label = dt.toLocaleDateString(undefined, {
        weekday: "short",
        month: "short",
        day: "numeric",
      });
    }

    return { time: timeStr, label };
  }

  // -- Render -------------------------------------------------------------

  protected render() {
    if (!this._config || !this.hass) return nothing;

    const sw = this._switchState;
    if (!sw) {
      return html`<ha-card>
        <div style="padding:16px">Entity not found: ${this._config.entity}</div>
      </ha-card>`;
    }

    const attrs = this._attrs;
    const enabled = this._isEnabled;
    const { time, label } = this._formatNextFire();
    const days: string[] = attrs.days || [];
    const showDetails = this._config.show_details !== false;

    const timeSize = this._config.time_size || "28px";
    const daySize = this._config.day_size || "32px";

    return html`
      <ha-card>
        <div class="alarm-container">
          <!-- Header -->
          <div class="header">
            <ha-icon
              class="header-icon ${this._firing
                ? "firing"
                : enabled
                ? ""
                : "disabled"}"
              icon=${this._firing ? "mdi:alarm-bell" : "mdi:alarm"}
            ></ha-icon>
            <span class="header-name">
              ${attrs.friendly_name || this._config.entity}
            </span>
            <ha-switch
              class="header-toggle"
              .checked=${enabled}
              @change=${this._toggleAlarm}
            ></ha-switch>
          </div>

          <!-- Firing banner -->
          ${this._firing
            ? html`
                <div class="firing-banner">
                  <ha-icon icon="mdi:alarm-bell"></ha-icon>
                  ALARM FIRING
                  <button
                    class="chip-btn"
                    style="background:rgba(255,255,255,0.25);color:#fff;margin-left:8px"
                    @click=${this._stopAlarm}
                  >
                    <ha-icon icon="mdi:stop"></ha-icon>
                    Stop
                  </button>
                </div>
              `
            : nothing}

          <!-- Primary time display -->
          <div>
            <div
              class="primary-time ${this._firing
                ? "firing"
                : enabled
                ? ""
                : "disabled"}"
              style="--alarm-time-size:${timeSize};font-size:${timeSize}"
            >
              ${time}
            </div>
            <div class="primary-label">${label}</div>
          </div>

          <!-- Day chips -->
          <div class="days-row">
            ${DAY_CODES.map(
              (code, i) => html`
                <div
                  class="day-chip ${days.includes(code)
                    ? "active"
                    : "inactive"}"
                  style="min-width:${daySize};height:${daySize}"
                >
                  ${DAY_LABELS[i]}
                </div>
              `
            )}
          </div>

          <!-- Controls -->
          ${enabled
            ? html`
                <div class="controls">
                  <button class="chip-btn snooze" @click=${this._pressSnooze}>
                    <ha-icon icon="mdi:alarm-snooze"></ha-icon>
                    Snooze
                  </button>
                  <button class="chip-btn dismiss" @click=${this._pressDismiss}>
                    <ha-icon icon="mdi:alarm-off"></ha-icon>
                    Dismiss
                  </button>
                  <button class="chip-btn" @click=${this._fireAlarm}>
                    <ha-icon icon="mdi:play"></ha-icon>
                    Test
                  </button>
                </div>
              `
            : nothing}

          <!-- Details -->
          ${showDetails && enabled
            ? html`
                <div class="details">
                  <span class="detail-item">
                    <ha-icon icon="mdi:volume-medium"></ha-icon>
                    ${Math.round((attrs.volume || 0) * 100)}%
                  </span>
                  <span class="detail-item">
                    <ha-icon icon="mdi:cast-audio"></ha-icon>
                    ${(attrs.target || "").replace("media_player.", "")}
                  </span>
                  ${attrs.skip_holidays
                    ? html`
                        <span class="detail-item">
                          <ha-icon icon="mdi:calendar-remove"></ha-icon>
                          Holidays off (${attrs.holiday_country || "NO"})
                        </span>
                      `
                    : nothing}
                  ${attrs.library_count
                    ? html`
                        <span class="detail-item">
                          <ha-icon icon="mdi:music-note-outline"></ha-icon>
                          ${attrs.library_count} tracks
                        </span>
                      `
                    : nothing}
                </div>
              `
            : nothing}
        </div>
      </ha-card>
    `;
  }
}

// Register card in HA
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: "chromecast-alarm-card",
  name: "Chromecast Alarm Card",
  description: "Mushroom-style card for the Chromecast Alarm integration",
  preview: true,
});
