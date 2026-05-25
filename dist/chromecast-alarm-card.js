function t(t,e,i,s){var r,a=arguments.length,o=a<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var n=t.length-1;n>=0;n--)(r=t[n])&&(o=(a<3?r(o):a>3?r(e,i,o):r(e,i))||o);return a>3&&o&&Object.defineProperty(e,i,o),o}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),r=new WeakMap;let a=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}};const o=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new a(i,t,s)},n=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,m=globalThis,g=m.trustedTypes,_=g?g.emptyScript:"",f=m.reactiveElementPolyfillSupport,y=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>!l(t,e),b={attribute:!0,type:String,converter:$,reflect:!1,useDefault:!1,hasChanged:v};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const a=s?.call(this);r?.call(this,e),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),r=e.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:$).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=s;const a=r.fromAttribute(e,t.type);this[s]=a??this._$Ej?.get(s)??a,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(void 0!==t){const a=this.constructor;if(!1===s&&(r=this[t]),i??=a.getPropertyOptions(t),!((i.hasChanged??v)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},a){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),!0!==r||void 0!==a)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[y("elementProperties")]=new Map,x[y("finalized")]=new Map,f?.({ReactiveElement:x}),(m.reactiveElementVersions??=[]).push("2.1.2");const A=globalThis,w=t=>t,E=A.trustedTypes,S=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,T="?"+k,P=`<${T}>`,z=document,M=()=>z.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,H="[ \t\n\f\r]",D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,R=/>/g,j=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,I=/"/g,L=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),F=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),q=new WeakMap,J=z.createTreeWalker(z,129);function K(t,e){if(!U(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const Y=(t,e)=>{const i=t.length-1,s=[];let r,a=2===e?"<svg>":3===e?"<math>":"",o=D;for(let e=0;e<i;e++){const i=t[e];let n,l,c=-1,h=0;for(;h<i.length&&(o.lastIndex=h,l=o.exec(i),null!==l);)h=o.lastIndex,o===D?"!--"===l[1]?o=N:void 0!==l[1]?o=R:void 0!==l[2]?(L.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=j):void 0!==l[3]&&(o=j):o===j?">"===l[0]?(o=r??D,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,n=l[1],o=void 0===l[3]?j:'"'===l[3]?I:V):o===I||o===V?o=j:o===N||o===R?o=D:(o=j,r=void 0);const d=o===j&&t[e+1].startsWith("/>")?" ":"";a+=o===D?i+P:c>=0?(s.push(n),i.slice(0,c)+C+i.slice(c)+k+d):i+k+(-2===c?e:d)}return[K(t,a+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class Z{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,a=0;const o=t.length-1,n=this.parts,[l,c]=Y(t,e);if(this.el=Z.createElement(l,i),J.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=J.nextNode())&&n.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(C)){const e=c[a++],i=s.getAttribute(t).split(k),o=/([.?@])?(.*)/.exec(e);n.push({type:1,index:r,name:o[2],strings:i,ctor:"."===o[1]?et:"?"===o[1]?it:"@"===o[1]?st:tt}),s.removeAttribute(t)}else t.startsWith(k)&&(n.push({type:6,index:r}),s.removeAttribute(t));if(L.test(s.tagName)){const t=s.textContent.split(k),e=t.length-1;if(e>0){s.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],M()),J.nextNode(),n.push({type:2,index:++r});s.append(t[e],M())}}}else if(8===s.nodeType)if(s.data===T)n.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(k,t+1));)n.push({type:7,index:r}),t+=k.length-1}r++}}static createElement(t,e){const i=z.createElement("template");return i.innerHTML=t,i}}function G(t,e,i=t,s){if(e===F)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const a=O(e)?void 0:e._$litDirective$;return r?.constructor!==a&&(r?._$AO?.(!1),void 0===a?r=void 0:(r=new a(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=G(t,r._$AS(t,e.values),r,s)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??z).importNode(e,!0);J.currentNode=s;let r=J.nextNode(),a=0,o=0,n=i[0];for(;void 0!==n;){if(a===n.index){let e;2===n.type?e=new X(r,r.nextSibling,this,t):1===n.type?e=new n.ctor(r,n.name,n.strings,this,t):6===n.type&&(e=new rt(r,this,t)),this._$AV.push(e),n=i[++o]}a!==n?.index&&(r=J.nextNode(),a++)}return J.currentNode=z,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),O(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>U(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(z.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Z.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Q(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new Z(t)),e}k(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new X(this.O(M()),this.O(M()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=w(t).nextSibling;w(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(t,e=this,i,s){const r=this.strings;let a=!1;if(void 0===r)t=G(this,t,e,0),a=!O(t)||t!==this._$AH&&t!==F,a&&(this._$AH=t);else{const s=t;let o,n;for(t=r[0],o=0;o<r.length-1;o++)n=G(this,s[i+o],e,o),n===F&&(n=this._$AH[o]),a||=!O(n)||n!==this._$AH[o],n===W?t=W:t!==W&&(t+=(n??"")+r[o+1]),this._$AH[o]=n}a&&!s&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class st extends tt{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??W)===F)return;const i=this._$AH,s=t===W&&i!==W||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==W&&(i===W||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const at=A.litHtmlPolyfillSupport;at?.(Z,X),(A.litHtmlVersions??=[]).push("3.3.3");const ot=globalThis;class nt extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new X(e.insertBefore(M(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}}nt._$litElement$=!0,nt.finalized=!0,ot.litElementHydrateSupport?.({LitElement:nt});const lt=ot.litElementPolyfillSupport;lt?.({LitElement:nt}),(ot.litElementVersions??=[]).push("4.2.2");const ct=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ht={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:v},dt=(t=ht,e,i)=>{const{kind:s,metadata:r}=i;let a=globalThis.litPropertyMetadata.get(r);if(void 0===a&&globalThis.litPropertyMetadata.set(r,a=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),a.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};function pt(t){return(e,i)=>"object"==typeof i?dt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function ut(t){return pt({...t,state:!0,attribute:!1})}const mt=o`
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
  .time-edit-input {
    font-weight: 600;
    color: var(--alarm-text);
    line-height: 1.2;
    background: transparent;
    border: none;
    border-bottom: 2px solid var(--alarm-primary);
    outline: none;
    padding: 0;
    font-family: inherit;
    color-scheme: dark light;
  }

  .primary-time {
    font-size: var(--alarm-time-size, 28px);
    font-weight: 600;
    color: var(--alarm-text);
    line-height: 1.2;
    transition: opacity 0.2s;
    cursor: pointer;
  }

  .primary-time:hover:not(.disabled) {
    opacity: 0.7;
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
    cursor: pointer;
    user-select: none;
    transition: background-color 0.2s, color 0.2s, transform 0.1s;
    -webkit-tap-highlight-color: transparent;
  }

  .day-chip:active {
    transform: scale(0.9);
  }

  .day-chip:hover {
    opacity: 0.85;
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

  .detail-item.clickable {
    cursor: pointer;
    border-radius: 8px;
    padding: 2px 6px;
    margin: -2px -6px;
    transition: background-color 0.2s;
  }

  .detail-item.clickable:hover {
    background: var(--alarm-chip-bg);
  }

  /* Volume slider */
  .volume-edit {
    gap: 8px;
  }

  .volume-slider {
    width: 100px;
    height: 4px;
    cursor: pointer;
    accent-color: var(--alarm-primary);
  }

  .volume-label {
    min-width: 32px;
    text-align: right;
  }

  /* Target dropdown */
  .target-edit {
    gap: 6px;
  }

  .target-select {
    font-size: 12px;
    font-family: inherit;
    color: var(--alarm-text);
    background: var(--alarm-chip-bg);
    border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
    border-radius: 8px;
    padding: 4px 8px;
    outline: none;
    cursor: pointer;
    max-width: 180px;
  }

  .target-select:focus {
    border-color: var(--alarm-primary);
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
`;let gt=class extends nt{constructor(){super(...arguments),this._config={}}setConfig(t){this._config=t}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target,i={...this._config,[e.configValue]:e.value},s=new CustomEvent("config-changed",{detail:{config:i},bubbles:!0,composed:!0});this.dispatchEvent(s)}_entityChanged(t){const e={...this._config,entity:t.target.value};this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0}))}render(){if(!this.hass)return W;const t=Object.keys(this.hass.states).filter(t=>t.startsWith("switch.")&&void 0!==this.hass.states[t]?.attributes?.alarm_time);return B`
      <div class="editor">
        <label>Alarm entity</label>
        <select
          .value=${this._config.entity||""}
          @change=${this._entityChanged}
        >
          <option value="">Select alarm...</option>
          ${t.map(t=>B`<option value=${t} ?selected=${t===this._config.entity}>
                ${this.hass.states[t]?.attributes?.friendly_name||t}
              </option>`)}
        </select>

        <label>Time display size</label>
        <select
          .configValue=${"time_size"}
          .value=${this._config.time_size||"28px"}
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
          .value=${this._config.day_size||"32px"}
          @change=${this._valueChanged}
        >
          <option value="26px">Small</option>
          <option value="32px">Medium (default)</option>
          <option value="40px">Large</option>
        </select>

        <label>
          <input
            type="checkbox"
            .checked=${!1!==this._config.show_details}
            .configValue=${"show_details"}
            @change=${t=>{const e=t.target.checked;this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:{...this._config,show_details:e}},bubbles:!0,composed:!0}))}}
          />
          Show details (volume, speaker, holidays)
        </label>
      </div>
    `}};gt.styles=o`
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
  `,t([pt({attribute:!1})],gt.prototype,"hass",void 0),t([ut()],gt.prototype,"_config",void 0),gt=t([ct("chromecast-alarm-card-editor")],gt);const _t=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],ft=["mon","tue","wed","thu","fri","sat","sun"];let yt=class extends nt{constructor(){super(...arguments),this._editingTime=!1,this._editingVolume=!1,this._editingTarget=!1}static getConfigElement(){return document.createElement("chromecast-alarm-card-editor")}static getStubConfig(){return{entity:"",show_details:!0}}setConfig(t){if(!t.entity)throw new Error("Please select an alarm entity");this._config=t}getCardSize(){return 3}get _switchEntity(){return this._config.entity}get _baseId(){return this._config.entity.replace("switch.","")}get _sensorEntity(){return`sensor.${this._baseId}_next_fire`}get _snoozeEntity(){return`button.${this._baseId}_snooze`}get _dismissEntity(){return`button.${this._baseId}_dismiss`}get _eventEntity(){return`event.${this._baseId}_event`}_getState(t){return this.hass?.states?.[t]}get _switchState(){return this._getState(this._switchEntity)}get _isEnabled(){return"on"===this._switchState?.state}get _attrs(){return this._switchState?.attributes||{}}get _isFiring(){return!!this._attrs.is_firing}_toggleAlarm(){this.hass.callService("switch",this._isEnabled?"turn_off":"turn_on",{entity_id:this._switchEntity})}_pressSnooze(){this.hass.callService("button","press",{entity_id:this._snoozeEntity})}_pressDismiss(){this.hass.callService("button","press",{entity_id:this._dismissEntity})}_fireAlarm(){this.hass.callService("chromecast_alarm","fire",{entity_id:this._switchEntity})}_stopAlarm(){this.hass.callService("chromecast_alarm","stop",{entity_id:this._switchEntity})}_startEditTime(){this._editingTime=!0,this.updateComplete.then(()=>{const t=this.shadowRoot?.querySelector(".time-edit-input");t&&(t.focus(),t.showPicker?.())})}_onTimeChange(t){const e=t.target.value;this._editingTime=!1,e&&this.hass.callService("chromecast_alarm","set_time",{entity_id:this._switchEntity,time:e})}_onTimeBlur(){this._editingTime=!1}_startEditVolume(){this._editingVolume=!0}_onVolumeChange(t){const e=t.target,i=parseFloat(e.value)/100;this.hass.callService("chromecast_alarm","set_volume",{entity_id:this._switchEntity,volume:Math.round(100*i)/100})}_onVolumeDone(){this._editingVolume=!1}_startEditTarget(){this._editingTarget=!0}_onTargetChange(t){const e=t.target.value;this._editingTarget=!1,e&&this.hass.callService("chromecast_alarm","set_target",{entity_id:this._switchEntity,target:e})}_onTargetBlur(){this._editingTarget=!1}get _mediaPlayers(){return this.hass?Object.keys(this.hass.states).filter(t=>t.startsWith("media_player.")).map(t=>({id:t,name:this.hass.states[t].attributes.friendly_name||t.replace("media_player.","")})).sort((t,e)=>t.name.localeCompare(e.name)):[]}_toggleDay(t){const e=this._attrs.days||[];let i;i=e.includes(t)?e.filter(e=>e!==t):[...e,t],0!==i.length&&this.hass.callService("chromecast_alarm","set_days",{entity_id:this._switchEntity,days:i})}_formatNextFire(){if(!this._isEnabled)return{time:"Off",label:"Alarm disabled"};const t=this._attrs;if(t.is_dismissed_today)return{time:"Dismissed",label:"Until tomorrow"};const e=t.next_fire;if(!e)return{time:"--:--",label:"No upcoming alarm"};const i=new Date(e),s=new Date,r=`${i.getHours().toString().padStart(2,"0")}:${i.getMinutes().toString().padStart(2,"0")}`,a=new Date(s.getFullYear(),s.getMonth(),s.getDate()),o=new Date(i.getFullYear(),i.getMonth(),i.getDate()),n=Math.round((o.getTime()-a.getTime())/864e5);let l;return l=0===n?"Today":1===n?"Tomorrow":i.toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"}),{time:r,label:l}}render(){if(!this._config||!this.hass)return W;if(!this._switchState)return B`<ha-card>
        <div style="padding:16px">Entity not found: ${this._config.entity}</div>
      </ha-card>`;const t=this._attrs,e=this._isEnabled,{time:i,label:s}=this._formatNextFire(),r=t.days||[],a=!1!==this._config.show_details,o=this._config.time_size||"28px",n=this._config.day_size||"32px";return B`
      <ha-card>
        <div class="alarm-container">
          <!-- Header -->
          <div class="header">
            <ha-icon
              class="header-icon ${this._isFiring?"firing":e?"":"disabled"}"
              icon=${this._isFiring?"mdi:bell-ring":"mdi:alarm"}
            ></ha-icon>
            <span class="header-name">
              ${t.friendly_name||this._config.entity}
            </span>
            <ha-switch
              class="header-toggle"
              .checked=${e}
              @change=${this._toggleAlarm}
            ></ha-switch>
          </div>

          <!-- Firing banner -->
          ${this._isFiring?B`
                <div class="firing-banner">
                  <ha-icon icon="mdi:bell-ring"></ha-icon>
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
              `:W}

          <!-- Primary time display (click to edit) -->
          <div>
            ${this._editingTime?B`
                  <input
                    type="time"
                    class="time-edit-input"
                    style="font-size:${o}"
                    .value=${(t.alarm_time||"07:00").substring(0,5)}
                    @change=${this._onTimeChange}
                    @blur=${this._onTimeBlur}
                  />
                `:B`
                  <div
                    class="primary-time ${this._isFiring?"firing":e?"":"disabled"}"
                    style="font-size:${o}"
                    @click=${e?()=>this._startEditTime():W}
                    title=${e?"Click to change time":""}
                  >
                    ${i}
                  </div>
                `}
            <div class="primary-label">${s}</div>
          </div>

          <!-- Day chips (clickable to toggle) -->
          <div class="days-row">
            ${ft.map((t,e)=>B`
                <div
                  class="day-chip ${r.includes(t)?"active":"inactive"}"
                  style="min-width:${n};height:${n}"
                  @click=${()=>this._toggleDay(t)}
                  title="Toggle ${_t[e]}"
                >
                  ${_t[e]}
                </div>
              `)}
          </div>

          <!-- Controls -->
          ${e?B`
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
              `:W}

          <!-- Details -->
          ${a&&e?B`
                <div class="details">
                  ${this._editingVolume?B`
                        <span class="detail-item volume-edit">
                          <ha-icon icon="mdi:volume-medium"></ha-icon>
                          <input
                            type="range"
                            class="volume-slider"
                            min="0"
                            max="100"
                            step="5"
                            .value=${String(Math.round(100*(t.volume||0)))}
                            @input=${this._onVolumeChange}
                            @change=${this._onVolumeDone}
                          />
                          <span class="volume-label">${Math.round(100*(t.volume||0))}%</span>
                        </span>
                      `:B`
                        <span
                          class="detail-item clickable"
                          @click=${()=>this._startEditVolume()}
                          title="Click to change volume"
                        >
                          <ha-icon icon="mdi:volume-medium"></ha-icon>
                          ${Math.round(100*(t.volume||0))}%
                        </span>
                      `}
                  ${this._editingTarget?B`
                        <span class="detail-item target-edit">
                          <ha-icon icon="mdi:cast-audio"></ha-icon>
                          <select
                            class="target-select"
                            @change=${this._onTargetChange}
                            @blur=${this._onTargetBlur}
                          >
                            ${this._mediaPlayers.map(e=>B`
                                <option
                                  value=${e.id}
                                  ?selected=${e.id===t.target}
                                >
                                  ${e.name}
                                </option>
                              `)}
                          </select>
                        </span>
                      `:B`
                        <span
                          class="detail-item clickable"
                          @click=${()=>this._startEditTarget()}
                          title="Click to change speaker"
                        >
                          <ha-icon icon="mdi:cast-audio"></ha-icon>
                          ${(t.target||"").replace("media_player.","")}
                        </span>
                      `}
                  ${t.skip_holidays?B`
                        <span class="detail-item">
                          <ha-icon icon="mdi:calendar-remove"></ha-icon>
                          Holidays off (${t.holiday_country||"NO"})
                        </span>
                      `:W}
                  ${t.library_count?B`
                        <span class="detail-item">
                          <ha-icon icon="mdi:music-note-outline"></ha-icon>
                          ${t.library_count} tracks
                        </span>
                      `:W}
                </div>
              `:W}
        </div>
      </ha-card>
    `}};yt.styles=mt,t([pt({attribute:!1})],yt.prototype,"hass",void 0),t([ut()],yt.prototype,"_config",void 0),t([ut()],yt.prototype,"_editingTime",void 0),t([ut()],yt.prototype,"_editingVolume",void 0),t([ut()],yt.prototype,"_editingTarget",void 0),yt=t([ct("chromecast-alarm-card")],yt),window.customCards=window.customCards||[],window.customCards.push({type:"chromecast-alarm-card",name:"Chromecast Alarm Card",description:"Mushroom-style card for the Chromecast Alarm integration",preview:!0});export{yt as ChromecastAlarmCard};
