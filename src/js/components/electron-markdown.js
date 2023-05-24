import { LitElement, html, css } from 'lit';
import '@dile/dile-tabs/dile-tabs';
import '@dile/dile-tabs/dile-tab';
import '@dile/dile-pages/dile-pages';
import './editor/dw-editor';
import { FormMixin } from '../mixins/form-mixin';

export class ElectronMarkdown extends FormMixin(LitElement) {
  static styles = [
    css`
      :host {
        display: block;
        --dile-tab-text-color: #404040;
        --dile-tab-background-color: transparent;
        --dile-tab-selected-text-color: #396;
        --dile-tab-selected-background-color: transparent;
        --dile-tab-selected-line-color: #396;

        --primary-color: #396;
      }

      textarea {
        margin-top: 1rem;
        border: 1px solid var(--primary-color);
        border-radius: 0.5rem;
        width: 100%;
        height: 300px;
      }
    `
  ];

  static get properties() {
    return {
      data: { type: Object },
      html: { type: String },
    };
  }

  constructor() {
    super();
    this.data = {
      markdown: '',
    }
  }

  firstUpdated() {
    this.editor = this.shadowRoot.getElementById('editor');
  }

  render() {
    return html`
      <dile-tabs 
        selected="markdown" 
        selectorId="selector" 
        attrForSelected="name"
        @dile-selected-changed=${this.tabSelectedChange}
      >
        <dile-tab name="markdown">Markdown</dile-tab>
        <dile-tab name="html">HTML</dile-tab>
        <dile-tab name="preview">Preview</dile-tab>
      </dile-tabs>
      <dile-pages selected="markdown" selectorId="selector" attrForSelected="name">
        <section name="markdown">
          <dw-editor
            id="editor"
            name="markdown"
            @new-input="${this.inputUpdated}"
          ><slot></slot></dw-editor>
        </section>
        <section name="html">
          <textarea>${this.html}</textarea>
          
        </section>
        <section name="preview">
          <p>
            Page preview...
          </p>
          Other page...
        </section>
      </dile-pages>
    `;
  }

  tabSelectedChange(e) {
    console.log(`tab to ${e.detail.selected}`);
    console.log(this.data);
    doConvertToHTML(this.data.markdown).then(result => this.html = result);
  }
  
}
customElements.define('electron-markdown', ElectronMarkdown);
