import './dw-editor';
import { FormMixin } from '../../mixins/form-mixin';

import { LitElement, html, css } from 'lit';

class DwMarkdownToHtmlEditor extends FormMixin(LitElement) {

  static get styles() {
    return css`
      :host {
        display: block;
      }
      textarea {
        width: 100%;
        height: 500px;
      }
    `;
  }

  static get properties() {
    return {
      data: { type: Object },
    };
  }

  constructor() {
    super();
  }

  firstUpdated() {
    this.elajax = this.shadowRoot.getElementById('elajax');
    this.elconverted = this.shadowRoot.getElementById('converted');
  }

  render() {
    return html`
      <dw-ajax
        id="elajax"
        method="post"
        url="/DW-admin/markdown-convert"
        @ajax-success="${this.doSuccessConvert}"
        @ajax-error="${this.doErrorConvert}"
      ></dw-ajax>
      <p>
        <dw-editor
          name="markdown"
          @new-input="${this.inputUpdated}"
          label="Markdown"
        ><slot></slot></dw-editor>
      </p>
      <p>
        <dw-button @click="${this.doConvert}">Convertir</dw-button>
      </p>
      <div>
      <h2>Conversión</h2> 
      <textarea id="converted"></textarea>
      </div>
    `;
  }
  doConvert() {
    this.elajax.data = this.data;
    this.elajax.generateRequest();
  }

  doSuccessConvert(e) {
    this.elconverted.value = e.detail.html;
  }
}

customElements.define('dw-markdown-to-html-editor', DwMarkdownToHtmlEditor);