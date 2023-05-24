import { LitElement, html, css } from 'lit';
import '@dile/dile-tabs/dile-tabs';
import '@dile/dile-tabs/dile-tab';
import '@dile/dile-pages/dile-pages';
import './editor/dw-editor';

export class ElectronMarkdown extends LitElement {
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
    `
  ];

  render() {
    return html`
      <dile-tabs selected="markdown" selectorId="selector" attrForSelected="name">
        <dile-tab name="markdown">Markdown</dile-tab>
        <dile-tab name="html">HTML</dile-tab>
        <dile-tab name="preview">Preview</dile-tab>
      </dile-tabs>
      <dile-pages selected="markdown" selectorId="selector" attrForSelected="name">
        <section name="markdown">
          <dw-editor
            name="markdown"
            @new-input="${this.inputUpdated}"
          ><slot></slot></dw-editor>
        </section>
        <section name="html">
          <p>
            Page two...
          </p>
          Other page...
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
}
customElements.define('electron-markdown', ElectronMarkdown);
