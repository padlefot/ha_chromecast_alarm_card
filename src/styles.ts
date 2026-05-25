import { css } from "lit";

export const cardStyles = css`
  :host {
    --alarm-radius: 12px;
    --alarm-padding: 16px;
    --alarm-gap: 12px;
    --alarm-primary: var(--primary-color, #03a9f4);
    --alarm-accent: var(--accent-color, #ff9800);
    --alarm-bg: var(--ha-card-background, var(--card-background-color, #fff));
    --alarm-text: var(--primary-text-color, #212121);
    --alarm-text-secondary: var(--secondary-text-color, #727272);
    --alarm-disabled: var(--disabled-text-color, #bdbdbd);
    --alarm-chip-bg: var(--ha-chip-background-color, rgba(0, 0, 0, 0.07));
    --alarm-firing-color: #ef5350;
  }

  ha-card {
    border-radius: var(--alarm-radius);
    padding: var(--alarm-padding);
    overflow: hidden;
  }

  .alarm-container {
    display: flex;
    flex-direction: column;
    gap: var(--alarm-gap);
  }

  /* Header: icon + name + toggle */
  .header {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .header-icon {
    --mdc-icon-size: 24px;
    color: var(--alarm-primary);
    flex-shrink: 0;
  }

  .header-icon.disabled {
    color: var(--alarm-disabled);
  }

  .header-icon.firing {
    color: var(--alarm-firing-color);
    animation: pulse 1s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }

  .header-name {
    flex: 1;
    font-size: 14px;
    font-weight: 500;
    color: var(--alarm-text);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .header-toggle {
    flex-shrink: 0;
  }

  /* Primary: next fire time */
  .primary-time {
    font-size: var(--alarm-time-size, 28px);
    font-weight: 600;
    color: var(--alarm-text);
    line-height: 1.2;
  }

  .primary-time.disabled {
    color: var(--alarm-disabled);
  }

  .primary-time.firing {
    color: var(--alarm-firing-color);
  }

  .primary-label {
    font-size: 13px;
    color: var(--alarm-text-secondary);
    margin-top: 2px;
  }

  /* Day chips */
  .days-row {
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
  }

  .day-chip {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: var(--alarm-day-size, 32px);
    height: var(--alarm-day-size, 32px);
    border-radius: 50%;
    font-size: 11px;
    font-weight: 500;
    cursor: default;
    user-select: none;
    transition: background-color 0.2s, color 0.2s;
  }

  .day-chip.active {
    background-color: var(--alarm-primary);
    color: #fff;
  }

  .day-chip.inactive {
    background-color: var(--alarm-chip-bg);
    color: var(--alarm-disabled);
  }

  /* Controls row */
  .controls {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .chip-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    border: none;
    border-radius: 18px;
    background: var(--alarm-chip-bg);
    color: var(--alarm-text);
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s, transform 0.1s;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  .chip-btn:active {
    transform: scale(0.95);
  }

  .chip-btn:hover {
    background: rgba(0, 0, 0, 0.12);
  }

  .chip-btn ha-icon {
    --mdc-icon-size: 16px;
  }

  .chip-btn.snooze {
    color: var(--alarm-accent);
  }

  .chip-btn.dismiss {
    color: var(--alarm-primary);
  }

  /* Details row */
  .details {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    font-size: 12px;
    color: var(--alarm-text-secondary);
  }

  .detail-item {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .detail-item ha-icon {
    --mdc-icon-size: 14px;
  }

  /* Firing banner */
  .firing-banner {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 8px 16px;
    border-radius: 8px;
    background: var(--alarm-firing-color);
    color: #fff;
    font-size: 13px;
    font-weight: 600;
    animation: pulse 1s ease-in-out infinite;
  }

  .firing-banner ha-icon {
    --mdc-icon-size: 18px;
  }
`;
