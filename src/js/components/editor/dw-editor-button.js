import { LitElement, html, css } from 'lit';

class DwEditorButton extends LitElement {
  static get properties() {
    return {
      label: {type: String },
      actionName: {type: String },
      iconTemplate: { type: Object },
    }
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
      }
      a {
        color: red;
      }
    `
  }

  render() {
    return html`
      <a @click="${this.doClick}" href="#" title="${this.label}">${this.iconTemplate}</a>
    `;
  }

  doClick(e) {
    e.preventDefault();
    e.stopPropagation();
    //console.log('doclick', this.actionName);
    this.dispatchEvent(new CustomEvent('editor-action', {
      bubbles: true,
      composed: true,
      detail: {
        actionName: this.actionName
      }
    }));
  }
}

customElements.define('dw-editor-button', DwEditorButton);