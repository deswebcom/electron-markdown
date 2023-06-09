/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class n{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}}const o=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new n(s,t,i)},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t;var a;const d=window,l=d.trustedTypes,h=l?l.emptyScript:"",c=d.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},u=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:u};class m extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var i;const s=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{e?i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((e=>{const s=document.createElement("style"),n=t.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=e.cssText,i.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=g){var s;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=s.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=n,this[n]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var v;m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:m}),(null!==(a=d.reactiveElementVersions)&&void 0!==a?a:d.reactiveElementVersions=[]).push("1.6.1");const b=window,w=b.trustedTypes,f=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,$="$lit$",y=`lit$${(Math.random()+"").slice(9)}$`,_="?"+y,x=`<${_}>`,A=document,C=()=>A.createComment(""),S=t=>null===t||"object"!=typeof t&&"function"!=typeof t,E=Array.isArray,k="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,I=/>/g,M=RegExp(`>|${k}(?:([^\\s"'>=/]+)(${k}*=${k}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,N=/"/g,U=/^(?:script|style|textarea|title)$/i,P=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),L=P(1),R=(P(2),Symbol.for("lit-noChange")),O=Symbol.for("lit-nothing"),B=new WeakMap,D=A.createTreeWalker(A,129,null,!1),V=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":"",r=T;for(let e=0;e<i;e++){const i=t[e];let a,d,l=-1,h=0;for(;h<i.length&&(r.lastIndex=h,d=r.exec(i),null!==d);)h=r.lastIndex,r===T?"!--"===d[1]?r=H:void 0!==d[1]?r=I:void 0!==d[2]?(U.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=M):void 0!==d[3]&&(r=M):r===M?">"===d[0]?(r=null!=n?n:T,l=-1):void 0===d[1]?l=-2:(l=r.lastIndex-d[2].length,a=d[1],r=void 0===d[3]?M:'"'===d[3]?N:z):r===N||r===z?r=M:r===H||r===I?r=T:(r=M,n=void 0);const c=r===M&&t[e+1].startsWith("/>")?" ":"";o+=r===T?i+x:l>=0?(s.push(a),i.slice(0,l)+$+i.slice(l)+y+c):i+y+(-2===l?(s.push(void 0),e):c)}const a=o+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==f?f.createHTML(a):a,s]};class j{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[d,l]=V(t,e);if(this.el=j.createElement(d,i),D.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=D.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith($)||e.startsWith(y)){const i=l[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+$).split(y),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?Z:"?"===e[1]?Q:"@"===e[1]?G:W})}else a.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(U.test(s.tagName)){const t=s.textContent.split(y),e=t.length-1;if(e>0){s.textContent=w?w.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],C()),D.nextNode(),a.push({type:2,index:++n});s.append(t[e],C())}}}else if(8===s.nodeType)if(s.data===_)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(y,t+1));)a.push({type:7,index:n}),t+=y.length-1}n++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function F(t,e,i=t,s){var n,o,r,a;if(e===R)return e;let d=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl;const l=S(e)?void 0:e._$litDirective$;return(null==d?void 0:d.constructor)!==l&&(null===(o=null==d?void 0:d._$AO)||void 0===o||o.call(d,!1),void 0===l?d=void 0:(d=new l(t),d._$AT(t,i,s)),void 0!==s?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[s]=d:i._$Cl=d),void 0!==d&&(e=F(t,d._$AS(t,e.values),d,s)),e}class q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:A).importNode(i,!0);D.currentNode=n;let o=D.nextNode(),r=0,a=0,d=s[0];for(;void 0!==d;){if(r===d.index){let e;2===d.type?e=new K(o,o.nextSibling,this,t):1===d.type?e=new d.ctor(o,d.name,d.strings,this,t):6===d.type&&(e=new X(o,this,t)),this._$AV.push(e),d=s[++a]}r!==(null==d?void 0:d.index)&&(o=D.nextNode(),r++)}return D.currentNode=A,n}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class K{constructor(t,e,i,s){var n;this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=F(this,t,e),S(t)?t===O||null==t||""===t?(this._$AH!==O&&this._$AR(),this._$AH=O):t!==this._$AH&&t!==R&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>E(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==O&&S(this._$AH)?this._$AA.nextSibling.data=t:this.$(A.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=j.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{const t=new q(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new j(t)),e}T(t){E(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new K(this.k(C()),this.k(C()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class W{constructor(t,e,i,s,n){this.type=1,this._$AH=O,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=O}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=F(this,t,e,0),o=!S(t)||t!==this._$AH&&t!==R,o&&(this._$AH=t);else{const s=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=F(this,s[i+r],e,r),a===R&&(a=this._$AH[r]),o||(o=!S(a)||a!==this._$AH[r]),a===O?t=O:t!==O&&(t+=(null!=a?a:"")+n[r+1]),this._$AH[r]=a}o&&!s&&this.j(t)}j(t){t===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Z extends W{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===O?void 0:t}}const J=w?w.emptyScript:"";class Q extends W{constructor(){super(...arguments),this.type=4}j(t){t&&t!==O?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class G extends W{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=F(this,t,e,0))&&void 0!==i?i:O)===R)return;const s=this._$AH,n=t===O&&s!==O||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==O&&(s===O||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class X{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){F(this,t)}}const Y=b.litHtmlPolyfillSupport;var tt,et;null==Y||Y(j,K),(null!==(v=b.litHtmlVersions)&&void 0!==v?v:b.litHtmlVersions=[]).push("2.7.4");class it extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,n;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new K(e.insertBefore(C(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return R}}it.finalized=!0,it._$litElement$=!0,null===(tt=globalThis.litElementHydrateSupport)||void 0===tt||tt.call(globalThis,{LitElement:it});const st=globalThis.litElementPolyfillSupport;null==st||st({LitElement:it}),(null!==(et=globalThis.litElementVersions)&&void 0!==et?et:globalThis.litElementVersions=[]).push("3.3.2");const nt=t=>class extends t{static get properties(){return{selected:{type:String},attrForSelected:{type:String},selectorId:{type:String}}}constructor(){super(),this.selected=0,this._items=[],this.itemSelectedChangedHandler=this._itemSelectedChanged.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("dile-item-selected",this.itemSelectedChangedHandler)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("dile-item-selected",this.itemSelectedChangedHandler)}firstUpdated(){super.firstUpdated(),this._items=this.shadowRoot.querySelector("slot").assignedElements({flatten:!0});let t=0;this._items.forEach((e=>{e._assignedIndex=t,t++})),this.setSelectedItem()}render(){return L`
        <slot></slot>
      `}setSelectedItem(){if(this.attrForSelected)this._items.forEach((t=>{t.getAttribute(this.attrForSelected)==this.selected?t.selected=!0:t.selected=!1}));else{let t=parseInt(this.selected);!isNaN(t)&&this._items[t]&&this._items.forEach(((e,i)=>{e.selected=i==t}))}}_itemSelectedChanged(t){this.attrForSelected?this.selected=t.detail.getAttribute(this.attrForSelected):this.selected=t.detail._assignedIndex,this.dispatchSelectedChanged()}dispatchSelectedChanged(){this.dispatchEvent(new CustomEvent("dile-selected-changed",{bubbles:!0,composed:!0,detail:{selected:this.selected,selectorId:this.selectorId}}))}updated(t){this.setSelectedItem()}},ot=t=>class extends t{static get properties(){return{selected:{type:Boolean,reflect:!0},index:{type:Number}}}constructor(){super(),this.selected=!1}select(){this.dispatchEvent(new CustomEvent("dile-item-selected",{bubbles:!0,composed:!0,detail:this}))}};class rt extends(ot(it)){static get styles(){return o`
      :host {
        display: inline-block;
        margin: 0 3px;
      }
      article {
        border-top-left-radius: var(--dile-tab-border-radius, 4px);
        border-top-right-radius: var(--dile-tab-border-radius, 4px);
        transition: all 0.3s ease;
        color: var(--dile-tab-text-color, #666);
        background-color: var(--dile-tab-background-color, transparent);
        cursor: pointer;
        border: var(--dile-tab-border, none);
        font-weight: var(--dile-tab-font-weight, normal);
        font-size: var(--dile-tab-font-size, 1rem);
      }
      div.label {
        padding: var(--dile-label-padding, 8px 12px 6px 12px);
        text-transform: var(--dile-tab-text-transform, uppercase);
        white-space: nowrap;
      }
      .selected {
        background-color: var(--dile-tab-selected-background-color, #039be5);
        color: var(--dile-tab-selected-text-color, #fff);
        border: var(--dile-tab-selected-border, none);
      }
      span {
        display: block;
        height: var(--dile-tab-selected-line-height, 5px);
        width: 0;
        background-color: var(--dile-tab-selected-line-color, #0070c0);
        transition: width 0.3s ease;
      }
      .markselected {
        width: 100%;
      }
      .line {
        display: flex;
        justify-content: center;
      }
    `}render(){return L`
      <article @click='${this.select}' class="${this.selected?"selected":""}">
        <div class="label"><slot></slot></div>
        <div class="line">
          <span class="${this.selected?"markselected":""}"></span>
        </div>
      </article>
    `}}window.customElements.define("dile-tab",rt);class at extends(nt(it)){static get styles(){return o`
      :host {
        display: flex;
      }
    `}}window.customElements.define("dile-tabs",at),window.customElements.define("dile-pages",class extends it{static get properties(){return{attrForSelected:{type:String},selected:{type:String},selectorId:{type:String},showDisplay:{type:String}}}render(){return L`
    <slot></slot>
    `}constructor(){super(),this.transitionTime=1e3,this.selected=0,this._pageInitialization(),this._onSelectorIdChangedHandler=this._onSelectorIdChanged.bind(this),this.showDisplay="block"}static get styles(){return o`
      :host {
        display: block;
      }
    `}_pageInitialization(){this.pages=[];let t=this.children;for(let e of t)e.style.display="none",e.style.transition=`opacity ${this.transitionTime}ms`,e.style.opacity="0",this.pages.push(e)}initializeExternalPages(t){this.innerHTML=t,this._pageInitialization()}firstUpdated(){let t=this._selectPage(this.selected,this.attrForSelected);t&&(t.style.display=this.showDisplay),this.selectorId&&document.addEventListener("dile-selected-changed",this._onSelectorIdChangedHandler)}disconnectedCallback(){super.disconnectedCallback(),this.selectorId&&document.removeEventListener("dile-selected-changed",this._onSelectorIdChangedHandler)}updated(t){if(this._updatedAndNotUndefined(t,"selected")||this._updatedAndNotUndefined(t,"attrForSelected")){let e=this._getLastValueProperty(t,"selected"),i=this._getLastValueProperty(t,"attrForSelected");this.hidePage(e,i)}this._showCurrentPage()}_selectPage(t,e){let i;if(e){for(let s of this.pages)if(s.getAttribute(e)==t){i=s;break}}else i=this.pages[t];return i}_showCurrentPage(){let t=this._selectPage(this.selected,this.attrForSelected);t&&(t.style.display=this.showDisplay,setTimeout((()=>{t.style.opacity="1"}),50))}hidePage(t,e){let i=this._selectPage(t,e);i&&(i.style.display="none",i.style.opacity="0")}_updatedAndNotUndefined(t,e){return t.has(e)&&null!=t.get(e)}_getLastValueProperty(t,e){return t.has(e)?t.get(e):this[e]}_onSelectorIdChanged(t){t.detail.selectorId==this.selectorId&&(this.selected=t.detail.selected)}});const dt=t=>class extends t{valueChangedListener(t){this.emmitChange(t.target.value)}emmitChange(t){this.dispatchEvent(new CustomEvent("new-input",{detail:{value:t,name:this.name}}))}},lt=o`
  * {
    box-sizing: border-box;
  }
  .label {
    color: #888;
    display: inline-block;
    margin-bottom: 5px;
    font-weight: 200;
    font-size: var(--dw-form-label-font-size, 1.2em);
  }
  textarea.txt, input.txt {
    box-sizing: border-box;
    width: 100%;
    border: 1px solid var(--primary-color, #303030);
    border-radius: 6px;
    padding: 7px 10px;
    font-size: 0.9em;
  }
`;customElements.define("dw-editor-button",class extends it{static get properties(){return{label:{type:String},actionName:{type:String},iconTemplate:{type:Object}}}static get styles(){return o`
      :host {
        display: inline-block;
      }
      a {
        color: red;
      }
    `}render(){return L`
      <a @click="${this.doClick}" href="#" title="${this.label}">${this.iconTemplate}</a>
    `}doClick(t){t.preventDefault(),t.stopPropagation(),this.dispatchEvent(new CustomEvent("editor-action",{bubbles:!0,composed:!0,detail:{actionName:this.actionName}}))}}),customElements.define("dw-editor-toolbar",class extends it{static get styles(){return o`
      :host {
        display: block;
        font-size: 0.8em;
      }
      dw-editor-button {
        margin-right: 10px;
      }
    `}get boldIcon(){return L`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>`}get italicIcon(){return L`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"/></svg>`}get headingIcon(){return L`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 4v3h5.5v12h3V7H19V4z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>`}get listIcon(){return L`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>`}get codeIcon(){return L`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>`}get redoIcon(){return L`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/></svg>`}get undoIcon(){return L`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/></svg>`}get codeBlockIcon(){return L`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m379-343 44-44-93-93 92-92-44-44-136 136 137 137Zm202 0 137-137-137-137-44 44 93 93-93 93 44 44ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0-600v600-600Z"/></svg>`}get linkIcon(){return L`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M450-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h170v60H280q-58.333 0-99.167 40.765-40.833 40.764-40.833 99Q140-422 180.833-381q40.834 41 99.167 41h170v60ZM325-450v-60h310v60H325Zm185 170v-60h170q58.333 0 99.167-40.765 40.833-40.764 40.833-99Q820-538 779.167-579 738.333-620 680-620H510v-60h170q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H510Z"/></svg>`}render(){return L`
      <dw-editor-button label="Bold" actionName="bold" .iconTemplate=${this.boldIcon}></dw-editor-button>
      <dw-editor-button label="Italic" actionName="italic" .iconTemplate=${this.italicIcon}></dw-editor-button>
      <dw-editor-button label="Heading" actionName="heading" .iconTemplate=${this.headingIcon}></dw-editor-button>
      <dw-editor-button label="Link" actionName="link" .iconTemplate=${this.linkIcon}></dw-editor-button>
      <dw-editor-button label="List" actionName="list" .iconTemplate=${this.listIcon}></dw-editor-button>
      <dw-editor-button label="Code" actionName="code" .iconTemplate=${this.codeIcon}></dw-editor-button>
      <dw-editor-button label="Code" actionName="codeBlock" .iconTemplate=${this.codeBlockIcon}></dw-editor-button>
      <dw-editor-button label="Undo" actionName="undo" .iconTemplate=${this.undoIcon}></dw-editor-button>
      <dw-editor-button label="Redo" actionName="redo" .iconTemplate=${this.redoIcon}></dw-editor-button>
    `}}),window.customElements.define("dile-toast-item",class extends it{static get properties(){return{msg:{type:Object}}}constructor(){super(),this.msg={msg:"",toastType:"neutral",hidden:!1,opening:!0}}static get styles(){return o`
      * {
        box-sizing: border-box;
      }
      :host {
        display: block;
      }
      div {
        color: var(--dile-toast-text-color, #fff);
        padding: var(--dile-toast-padding, 10px 15px);
        margin-top: 10px;
        position: relative;
        top: 0;
        opacity: 1;
        width: var(--dile-toast-width, 280px);
        overflow: hidden;
        transition: all 0.4s ease;
        z-index: var(--dile-toast-z-index, 1001);
        font-size: var(--dile-toast-font-size, 1em);
        font-weight: var(--dile-toast-font-weight, normal);
        border-radius: var(--dile-toast-border-radius, 0);
      }
      .hidden {
        top: 20px;
        opacity: 0;
        height: 0;
        padding: 0;
      }
      .error {
        background-color: var(--dile-toast-error-color, #e74c3c);
      }
      .success {
        background-color: var(--dile-toast-success-color, #27ae60);
      }
      .neutral {
        background-color: var(--dile-toast-neutral-color, #303030);
      }
      .opening {
        top: -20px;
      }
    `}render(){return L`
      <div
        class="${this.msg.hidden?"hidden":""} ${this.msg.opening?"opening":""} ${this.getClassType(this.msg.toastType)}"
      >
        ${this.msg.text}
      </div>
    `}firstUpdated(){setTimeout((()=>{this.msg.opening=!1,this.requestUpdate()}),20)}getClassType(t){switch(t){case"error":case"success":return t;default:return"neutral"}}}),window.customElements.define("dile-toast",class extends it{static get properties(){return{messages:{type:Array},duration:{type:Number}}}constructor(){super(),this.messages=[],this.duration=3e3,this.cleanTimeout=!1}static get styles(){return o`
      :host {
        display: flex;
        flex-direction: column-reverse;
        position: fixed;
        bottom: 20px;
        left: 15px;
      }
    `}render(){return L`
      ${this.messages.map((t=>L`
          <dile-toast-item
            .msg="${t}"
            duration="${this.duration}"
          ></dile-toast-item>
        `))}
    `}open(t,e="neutral"){this.messages=[...this.messages,{text:t,toastType:e,hidden:!1,opening:!0}],this._programMessageClean(),this._programMessageHide()}_programMessageHide(){setTimeout((()=>{let t=!1;this.messages=this.messages.map((e=>t||e.hidden?e:(t=!0,{...e,hidden:!0})))}),this.duration)}_programMessageClean(){this.cleanTimeout&&clearTimeout(this.cleanTimeout),this.cleanTimeout=setTimeout((()=>{this.messages=this.messages.filter((t=>!t.hidden))}),this.duration+1e3)}});class ht extends(dt(it)){static get styles(){return[lt,o`
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
    `]}render(){return L`
      <div>
        <dw-editor-toolbar @editor-action="${this.doAction}"></dw-editor-toolbar>
        <slot></slot>
      </div>
    `}static get properties(){return{content:{type:String},name:{type:String}}}constructor(){super(),this.content="",this.name="",this.changeHandler=this.changeHandler.bind(this),this.editor=window.dw.editor,this.editor.session.setMode("ace/mode/markdown"),this.editor.on("change",this.changeHandler),this.addEditorKeybindings()}connectedCallback(){super.connectedCallback(),document.addEventListener("editor-change",this.changeHandler),this.setText(this.content)}changeHandler(){let t=this.getText();this.emmitChange(t)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("editor-change",this.changeHandler)}doAction(t){switch(t.detail.actionName){case"bold":this.doWrap("**");break;case"italic":this.doWrap("*");break;case"heading":this.doHeading(1);break;case"list":this.doLines("- ");break;case"codeBlock":this.wrapLines("```");break;case"code":this.doWrap("`");break;case"link":this.doLink();break;case"undo":this.undo();break;case"redo":this.redo()}this.editor.focus()}getDocument(){return this.getSession().getDocument()}getSession(){return this.editor.getSession()}getRange(){return this.getSelection().getRange()}getSelection(){return this.getSession().getSelection()}getTextRange(){return this.getDocument().getTextRange(this.getRange())}getTextOtherRange(t){return this.getDocument().getTextRange(t)}getText(){return this.getDocument().getValue()}setText(t){return this.getDocument().setValue(t)}undo(){this.editor.undo()}redo(){this.editor.redo()}doLines(t){var e=this.getRange();this.linesToList(e,t),this.getSelection().clearSelection()}doWrap(t){this.getDocument().replace(this.getRange(),t+this.getTextRange()+t)}doHeading(t=1){let e="";for(let i=1;i<=t;i++)e+="#";console.log(e);var i=this.getSelection().getLineRange();this.getDocument().replace(i,e+" "+this.getTextOtherRange(i))}wrapLines(t){var e=this.getRange(),i=this.getSession(),s=e.start.row,n=e.end.row,o=i.getLines(s,n),r=this.getDocument();o.forEach(((t,i)=>{var n=s+i;i>0&&n++,e.setStart(n,0),e.setEnd(n,t.length);var a=0==i?"```\n":"",d=i==o.length-1?"\n```":"";r.replace(e,a+t+d)})),this.getSelection().clearSelection()}linesToList(t,e){var i=this.getSession(),s=t.start.row,n=t.end.row,o=i.getLines(s,n),r=this.getDocument();o.forEach((function(i,n){var o=s+n;t.setStart(o,0),t.setEnd(o,i.length),r.replace(t,e+i)}),this)}doLink(){var t=this.getDocument(),e=this.getRange();t.replace(e,"["+this.getTextRange()+"]()")}addEditorKeybindings(){this.editor.commands.addCommand({name:"bold",bindKey:{win:"Ctrl-b",mac:"Command-b"},exec:t=>{this.doWrap("**")},readOnly:!1}),this.editor.commands.addCommand({name:"italic",bindKey:{win:"Ctrl-i",mac:"Command-i"},exec:t=>{this.doWrap("*")},readOnly:!1}),this.editor.commands.addCommand({name:"h1",bindKey:{win:"Ctrl-1",mac:"Command-1"},exec:t=>{this.doHeading(1)},readOnly:!1}),this.editor.commands.addCommand({name:"h2",bindKey:{win:"Ctrl-2",mac:"Command-2"},exec:t=>{this.doHeading(2)},readOnly:!1}),this.editor.commands.addCommand({name:"h3",bindKey:{win:"Ctrl-3",mac:"Command-3"},exec:t=>{this.doHeading(3)},readOnly:!1}),this.editor.commands.addCommand({name:"h4",bindKey:{win:"Ctrl-4",mac:"Command-4"},exec:t=>{this.doHeading(4)},readOnly:!1}),this.editor.commands.addCommand({name:"link",bindKey:{win:"Ctrl-l",mac:"Command-l"},exec:t=>{this.doLink()},readOnly:!1}),this.editor.commands.addCommand({name:"list",bindKey:{win:"Ctrl-u",mac:"Command-u"},exec:t=>{this.this.doLines("- ")},readOnly:!1}),this.editor.commands.addCommand({name:"code block",bindKey:{win:"Ctrl-Shift-k",mac:"Command-Shift-k"},exec:t=>{this.wrapLines("```")},readOnly:!1}),this.editor.commands.addCommand({name:"code inline",bindKey:{win:"Ctrl-k",mac:"Command-k"},exec:t=>{this.doWrap("`")},readOnly:!1})}}window.customElements.define("dw-editor",ht);const ct=t=>class extends t{inputUpdated(t){let e={...this.data};e[t.detail.name]=t.detail.value,this.data=e,this.dispatchEvent(new CustomEvent("new-input",{bubbles:!0,composed:!0,detail:e}))}};class pt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}class ut extends pt{constructor(t){if(super(t),this.et=O,2!==t.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===O||null==t)return this.ft=void 0,this.et=t;if(t===R)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}ut.directiveName="unsafeHTML",ut.resultType=1;const gt=(mt=ut,(...t)=>({_$litDirective$:mt,values:t}));var mt;class vt extends(ct(it)){static styles=[o`
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
      
      
    `];static get properties(){return{data:{type:Object},html:{type:String}}}constructor(){super(),this.data={markdown:""}}firstUpdated(){console.log("startonmg"),this.myToast=this.shadowRoot.getElementById("myToast"),this.editor=this.shadowRoot.getElementById("editor"),this.saveInterval=window.setInterval(this.saveToFile.bind(this),1e4),getMarkdown().then((t=>{console.log("text es",t),this.editor.setText(t)})).catch((t=>{this.errorFeedback(t)}))}render(){return L`
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
            ${gt(this.html)}
          </div>
        </section>
      </dile-pages>
      <dile-toast id="myToast" duration="5000"></dile-toast>
    `}tabSelectedChange(t){console.log(`tab to ${t.detail.selected}`),console.log(this.data),doConvertToHTML(this.data.markdown).then((t=>this.html=t))}saveToFile(){console.log("hola"),saveToFile(this.data.markdown)}errorFeedback(t){this.myToast.open(t,"error")}}customElements.define("electron-markdown",vt)})();