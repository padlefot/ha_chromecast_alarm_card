import { LitElement, html, css, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";

interface EditorConfig {
  entity?: string;
  time_size?: string;
  day_size?: string;
  show_details?: boolean;
}

@customElement("chromecast-alarm-card-editor")
export class ChromecastAlarmCardEditor extends LitElement {
  @property({ attribute: false }) public hass: any;
  @state() private _config: EditorConfig = {};

  public setConfig(config: EditorConfig): void {
    this._config = config;
  }

  private _valueChanged(ev: CustomEvent): void {
    if (!this._config || !this.hass) return;
    const target = ev.target as any;
    const newConfig = { ...this._config, [target.configValue]: target.value };
    const event = new CustomEvent("config-changed", {
      detail: { config: newConfig },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  private _entityChanged(ev: CustomEvent): void {
    const newConfig = { ...this._config, entity: (ev.target as any).value };
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: newConfig },
        bubbles: true,
        composed: true,
      })
    );
  }

  protected render() {
    if (!this.hass) return nothing;

    // Filter to only chromecast_alarm switch entities
    const entities = Object.keys(this.hass.states).filter(
      (eid: string) =>
        eid.startsWith("switch.") &&
        this.hass.states[eid]?.attributes?.alarm_time !== undefined
    );

    return html`
      <div class="editor">
        <label>Alarm entity</label>
        <select
          .value=${this._config.entity || ""}
          @change=${this._entityChanged}
        >
          <option value="">Select alarm...</option>
          ${entities.map(
            (eid: string) =>
              html`<option value=${eid} ?selected=${eid === this._config.entity}>
                ${this.hass.states[eid]?.attributes?.friendly_name || eid}
              </option>`
          )}
        </select>

        <label>Time display size</label>
        <select
          .configValue=${"time_size"}
          .value=${this._config.time_size || "28px"}
          @change=${this._valueChanged}
        >
          <option value="22px">Small</option>
          <option value="28px">Medium (default)</option>
          <option value="36px">Large</option>
          <option value="44px">Extra large</option>
        </select>

        <label>Day chip size</label>
        <select
          .configValue=${"day_size"}
          .value=${this._config.day_size || "32px"}
          @change=${this._valueChanged}
        >
          <option value="26px">Small</option>
          <option value="32px">Medium (default)</option>
          <option value="40px">Large</option>
        </select>

        <label>
          <input
            type="checkbox"
            .checked=${this._config.show_details !== false}
            .configValue=${"show_details"}
            @change=${(ev: Event) => {
              const checked = (ev.target as HTMLInputElement).checked;
              this.dispatchEvent(
                new CustomEvent("config-changed", {
                  detail: {
                    config: { ...this._config, show_details: checked },
                  },
                  bubbles: true,
                  composed: true,
                })
              );
            }}
          />
          Show details (volume, speaker, holidays)
        </label>
      </div>
    `;
  }

  static styles = css`
    .editor {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
    }
    label {
      font-size: 14px;
      font-weight: 500;
    }
    select {
      padding: 8px;
      border-radius: 8px;
      border: 1px solid var(--divider-color, #e0e0e0);
      font-size: 14px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color, #212121);
    }
  `;
}
