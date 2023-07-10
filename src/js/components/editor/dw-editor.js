import { LitElement, html, css } from 'lit';
import { FormFieldMixin } from '../../mixins/form-field-mixin'
import {formStyles} from '../../styles/form-styles';
import './dw-editor-toolbar';
import '@dile/dile-toast/dile-toast'
//import '@intcreator/markdown-element';

/**
 * `dw-editor`
 * 
 *  basado en ace editor https://ace.c9.io/
 *
 */

class DwEditor extends FormFieldMixin(LitElement) {
  static get styles() {
    return [formStyles, css`
      :host {
        display: flex;
        width: 100%;
        flex-grow: 1;
        align-items: stretch;
        justify-content: stretch
      }
      div {
        display: flex;
        width: 100%;
        flex-direction: column;
        flex-grow: 1px;
        padding: 10px;
        border-radius: 6px;
        border: 1px solid var(--primary-color);
      }
      textarea {
        box-sizing: border-box;
        width: var(--dw-editor-width, 100%);
        height: var(--dw-editor-height, 350px);
        border: 1px solid var(--primary-color, #039be5);
        border-radius: 6px;
        padding: var(--dw-editor-padding, 15px);
        font-size: 0.9em;
        font-family: 'Courier New', Courier, monospace;
      }
      dw-editor-toolbar {
        margin-bottom: 10px;
        width: 100%;
      }
      ::slotted(*) {
        flex-grow: 1;
        height: 100%;
      }
    `];
  }
  render() {
    return html`
      <div>
        <dw-editor-toolbar @editor-action="${this.doAction}"></dw-editor-toolbar>
        <slot></slot>
      </div>
    `;
  }

  static get properties() {
    return {
      content: { type: String },
      name: { type: String },
    };
  }

  constructor() {
    super();
    this.content = '';
    this.name = '';
    this.changeHandler = this.changeHandler.bind(this);
    this.editor = window.dw.editor;
    this.editor.session.setMode("ace/mode/markdown");
    this.editor.on('change', this.changeHandler);
    this.addEditorKeybindings();
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('editor-change', this.changeHandler);
    //this.changeHandler();
    //console.log('dw-edtor', this.content)
    this.setText(this.content);
  }

  changeHandler() {
    let text = this.getText();
    //console.log('manejador editor-change', text)
    this.emmitChange(text)
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('editor-change', this.changeHandler)
  }

  doAction(e) {
    //this.shadowRoot.getElementById('editor').focus();
    switch(e.detail.actionName) {
      case 'bold':
        this.doWrap('**');
        break;
      case 'italic':
        this.doWrap('*');
        break;
      case 'heading':
        this.doHeading(1);
        break;
      case 'list':
        this.doLines('- ');
        break;
      case 'codeBlock':
        this.wrapLines('```');
        break;
      case 'code':
        this.doWrap('`');
        break;
      case 'link':
        this.doLink();
        break;
      case 'undo':
        this.undo();
        break;
      case 'redo':
        this.redo();
        break;
    }
    this.editor.focus();
  }

  
  getDocument() {
    return this.getSession().getDocument();
  }
  getSession() {
    return this.editor.getSession();
  }
  getRange(){
    return this.getSelection().getRange()
  }
  getSelection() {
    return this.getSession().getSelection();
  }
  getTextRange() {
    return this.getDocument().getTextRange(this.getRange());
  }
  getTextOtherRange(range) {
    return this.getDocument().getTextRange(range);
  }

  getText() {
    return this.getDocument().getValue()
  }
  setText(text) {
    return this.getDocument().setValue(text)
  }

  undo() {
    this.editor.undo();
  }

  redo() {
    this.editor.redo();
  }
  
  doLines(prefix) {
    var range = this.getRange();
    this.linesToList(range, prefix);
    this.getSelection().clearSelection();
  }

  doWrap(tag) {
    // console.log('dowrap');
    this.getDocument().replace(this.getRange(), tag + this.getTextRange() + tag );
  }

  doHeading(level = 1) {
    let heading = '';
    for(let i = 1; i <= level; i++) {
      heading += '#';
    }
    console.log(heading);
    var lineRange = this.getSelection().getLineRange();
    this.getDocument().replace(lineRange, heading + ' ' + this.getTextOtherRange(lineRange));        
  }

  wrapLines(tag) {
    var range = this.getRange();
    var session = this.getSession();
    var firstLineNumber = range.start.row;
    var lastLineNumber = range.end.row;
    var lineas = session.getLines(firstLineNumber, lastLineNumber);
    var document = this.getDocument();
    lineas.forEach((linea, index) => {
      // console.log(linea);
      var startRow = firstLineNumber + index;
      if(index > 0) {
        startRow++;
      }
      range.setStart(startRow, 0);
      range.setEnd(startRow, linea.length);
      var inicio = (index == 0)? '```\n' : '';
      var fin = (index == lineas.length - 1)? '\n```' : '';
      document.replace(range, inicio + linea + fin);
    });
    this.getSelection().clearSelection();
  }

  linesToList(range, prefix) {
    //console.log('range de get range:', range)
    var session = this.getSession();
    var firstLineNumber = range.start.row;
    var lastLineNumber = range.end.row;
    var lineas = session.getLines(firstLineNumber, lastLineNumber);
    var document = this.getDocument();
    lineas.forEach(function(linea, index) {
      // console.log(linea);
      var startRow = firstLineNumber + index;
      // if(index > 0) {
      //   startRow++;
      // }
      range.setStart(startRow, 0);
      range.setEnd(startRow, linea.length);
      // var ulInicio = (index == 0)? '<' + list + '>\n' : '';
      // var ulFin = (index == lineas.length - 1)? '\n</' + list + '>' : '';
      document.replace(range, prefix + linea);
    }, this);
  }

  doLink() {
    var document = this.getDocument();
    var range = this.getRange();
    document.replace(range, `[` + this.getTextRange() +`]()`);
  }

  addEditorKeybindings() {
    this.editor.commands.addCommand({
        name: 'bold',
        bindKey: {win: 'Ctrl-b',  mac: 'Command-b'},
        exec: (editor) => {
            this.doWrap('**');
        },
        readOnly: false,
    });
    this.editor.commands.addCommand({
        name: 'italic',
        bindKey: {win: 'Ctrl-i',  mac: 'Command-i'},
        exec: (editor) => {
            this.doWrap('*');
        },
        readOnly: false,
    });
    this.editor.commands.addCommand({
        name: 'h1',
        bindKey: {win: 'Ctrl-1',  mac: 'Command-1'},
        exec: (editor) => {
            this.doHeading(1);
        },
        readOnly: false,
    });
    this.editor.commands.addCommand({
        name: 'h2',
        bindKey: {win: 'Ctrl-2',  mac: 'Command-2'},
        exec: (editor) => {
            this.doHeading(2);
        },
        readOnly: false,
    });
    this.editor.commands.addCommand({
        name: 'h3',
        bindKey: {win: 'Ctrl-3',  mac: 'Command-3'},
        exec: (editor) => {
            this.doHeading(3);
        },
        readOnly: false,
    });
    this.editor.commands.addCommand({
        name: 'h4',
        bindKey: {win: 'Ctrl-4',  mac: 'Command-4'},
        exec: (editor) => {
            this.doHeading(4);
        },
        readOnly: false,
    });
    this.editor.commands.addCommand({
        name: 'link',
        bindKey: {win: 'Ctrl-l',  mac: 'Command-l'},
        exec: (editor) => {
            this.doLink();
        },
        readOnly: false,
    });
    this.editor.commands.addCommand({
        name: 'list',
        bindKey: {win: 'Ctrl-u',  mac: 'Command-u'},
        exec: (editor) => {
            this.this.doLines('- ');
        },
        readOnly: false,
    });
    this.editor.commands.addCommand({
        name: 'code block',
        bindKey: {win: 'Ctrl-Shift-k',  mac: 'Command-Shift-k'},
        exec: (editor) => {
            this.wrapLines('```');
        },
        readOnly: false,
    });
    this.editor.commands.addCommand({
        name: 'code inline',
        bindKey: {win: 'Ctrl-k',  mac: 'Command-k'},
        exec: (editor) => {
            this.doWrap('`');
        },
        readOnly: false,
    });
  }
}

window.customElements.define('dw-editor', DwEditor);
