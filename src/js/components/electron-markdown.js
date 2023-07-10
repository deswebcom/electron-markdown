import { LitElement, html, css } from 'lit';
import '@dile/dile-tabs/dile-tabs';
import '@dile/dile-tabs/dile-tab';
import '@dile/dile-pages/dile-pages';
import './editor/dw-editor';
import { FormMixin } from '../mixins/form-mixin';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

export class ElectronMarkdown extends FormMixin(LitElement) {
  static styles = [
    css`
      * {
        box-sizing: border-box;
      }
      :host {
        --dile-tab-text-color: #404040;
        --dile-tab-background-color: transparent;
        --dile-tab-selected-text-color: #396;
        --dile-tab-selected-background-color: transparent;
        --dile-tab-selected-line-color: #396;

        --primary-color: #396;
        display: flex;
        flex-direction: column;
        padding: 0 1rem 0.5rem;
      }
      dile-pages {
        flex-grow: 1;
        display: flex;
      }
      section {
        flex-grow: 1;
        display: flex;
      }
      dw-editor {
        flex-grow: 1;
      }
      textarea {
        border: 1px solid var(--primary-color);
        border-radius: 0.5rem;
        width: 100%;
        flex-grow: 1;
      }
      nav {
        margin-bottom: 0.75rem;
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
    console.log('startonmg');
    this.editor = this.shadowRoot.getElementById('editor');
    this.saveInterval = window.setInterval(this.saveToFile.bind(this), 10000);
    getMarkdown()
      .then( text => {
        console.log('text es', text);
        this.editor.setText(text);
      })
      .catch(filepath => {
        let el = document.createElement('p');
        el.textContent = filepath;
        document.body.append(el);
      }) ;
  }

  render() {
    return html`
      <nav>
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
      </nav>
      <dile-pages selected="markdown" selectorId="selector" attrForSelected="name" showDisplay="flex">
        <section class="editor" name="markdown">
          <dw-editor
            id="editor"
            name="markdown"
            @new-input="${this.inputUpdated}"
          ><slot></slot></dw-editor>
        </section>
        <section name="html">
          <textarea>${this.html}</textarea>
        </section>
        <section name="preview" class="preview-container">
          <div>
            ${unsafeHTML(this.html)}
          </div>
        </section>
      </dile-pages>
    `;
  }

  tabSelectedChange(e) {
    console.log(`tab to ${e.detail.selected}`);
    console.log(this.data);
    doConvertToHTML(this.data.markdown).then(result => this.html = result);
  }
  
  saveToFile() {
    console.log('hola');
    saveToFile(this.data.markdown)
  }
}
customElements.define('electron-markdown', ElectronMarkdown);
