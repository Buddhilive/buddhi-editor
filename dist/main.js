!function(A){var t={};function e(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return A[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=A,e.c=t,e.d=function(A,t,n){e.o(A,t)||Object.defineProperty(A,t,{enumerable:!0,get:n})},e.r=function(A){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},e.t=function(A,t){if(1&t&&(A=e(A)),8&t)return A;if(4&t&&"object"==typeof A&&A&&A.__esModule)return A;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:A}),2&t&&"string"!=typeof A)for(var o in A)e.d(n,o,function(t){return A[t]}.bind(null,o));return n},e.n=function(A){var t=A&&A.__esModule?function(){return A.default}:function(){return A};return e.d(t,"a",t),t},e.o=function(A,t){return Object.prototype.hasOwnProperty.call(A,t)},e.p="",e(e.s=1)}([function(A,t){const e=document.createElement("style");e.innerHTML="\n\nbody {\n    font-family: sans-serif;\n    margin: 0;\n}\n  \n  buddhi-editor button {\n      background: #ccc;\n      border: none;\n      padding: 0.2rem;\n      border-radius: 5px;\n      cursor: pointer;\n  }\n\n  buddhi-editor button:hover {\n    background: #039be5;\n  }\n\n  buddhi-editor .tool--on {\n    background: #039be5;\n  }\n\n  .material-icons {\n      font-size: 18px;\n  }\n\n  .buddhi--editor {\n    border: 1px solid #039be5;\n    margin-top: 13px;\n    border-radius: 5px;\n    padding: 12px;\n    height: 70vh;\n    overflow-y: scroll;\n    overflow-x: hidden;\n    overflow-wrap: break-word;\n  word-wrap: break-word;\n  hyphens: auto;\n}\n\n.buddhi--editor:focus {\n    outline: none;\n}\n\n.buddhi--editor img {\n    display: block;\n    margin: auto;\n    width: 50%;\n    height: auto;\n}\n\n.buddhi--editor-tools {\n    padding: 5px 5px 5px 5px;\n    border: 2px solid #dfdfdf;\n    border-radius: 5px;\n    background: #dfdfdf;\n}\n\n.buddhi--toolbar-seperator {\n    border-right: 1px solid #444;\n    margin-right: 4px;\n    margin-left: 4px;\n    padding-top: 1rem;\n    display: inline-flex;\n}\n\n.buddhi--toolbar-label {\n    background: #dfdfdf;\n}\n\n.buddhi--toolbar-label:hover {\n    background: #dfdfdf;\n}\n\n.buddhi--post-title-input {\n    border: 3px solid #dfdfdf;\n    border-radius: 5px;\n    padding: 5px;\n    margin-bottom: 12px;\n    width: 98.5%;\n    height: 1rem;\n}\n\n.buddhi--post-title-input:focus {\n    outline:none;\n}\n\n.buddhi--image-uploader-overlay{\n    cursor:pointer;\n    display:none;\n    height:100%;\n    position:fixed;\n    text-align:center;\n    top:0;\n    width:100%;\n    z-index:10000;\n}\n\n.buddhi--image-uploader-popup {\n    background: #e5e5e5;\n    width: 60%;\n    max-width: 360px;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 50px;\n    padding: 1rem;\n    border-radius: 10px;\n}\n\n.buddhi--image-uploader-preview {\n    display: block;\n    margin: 12px auto;\n}\n\n.buddhi--upload-file {\n    display: block;\n    margin: 10px auto;\n}\n\n#buddhi--cancel-btn a {\n    background: #dfdfdf;\n    color: #000;\n}\n\nvaadin-button {\n    cursor: pointer;\n}\n\n",document.head.appendChild(e)},function(A,t,e){"use strict";e.r(t);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const n=new WeakMap,o=A=>"function"==typeof A&&n.has(A),i=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,r=(A,t,e=null)=>{for(;t!==e;){const e=t.nextSibling;A.removeChild(t),t=e}},s={},a={},l=`{{lit-${String(Math.random()).slice(2)}}}`,c=`\x3c!--${l}--\x3e`,d=new RegExp(`${l}|${c}`),u="$lit$";class h{constructor(A,t){this.parts=[],this.element=t;const e=[],n=[],o=document.createTreeWalker(t.content,133,null,!1);let i=0,r=-1,s=0;const{strings:a,values:{length:c}}=A;for(;s<c;){const A=o.nextNode();if(null!==A){if(r++,1===A.nodeType){if(A.hasAttributes()){const t=A.attributes,{length:e}=t;let n=0;for(let A=0;A<e;A++)p(t[A].name,u)&&n++;for(;n-- >0;){const t=a[s],e=_.exec(t)[2],n=e.toLowerCase()+u,o=A.getAttribute(n);A.removeAttribute(n);const i=o.split(d);this.parts.push({type:"attribute",index:r,name:e,strings:i}),s+=i.length-1}}"TEMPLATE"===A.tagName&&(n.push(A),o.currentNode=A.content)}else if(3===A.nodeType){const t=A.data;if(t.indexOf(l)>=0){const n=A.parentNode,o=t.split(d),i=o.length-1;for(let t=0;t<i;t++){let e,i=o[t];if(""===i)e=f();else{const A=_.exec(i);null!==A&&p(A[2],u)&&(i=i.slice(0,A.index)+A[1]+A[2].slice(0,-u.length)+A[3]),e=document.createTextNode(i)}n.insertBefore(e,A),this.parts.push({type:"node",index:++r})}""===o[i]?(n.insertBefore(f(),A),e.push(A)):A.data=o[i],s+=i}}else if(8===A.nodeType)if(A.data===l){const t=A.parentNode;null!==A.previousSibling&&r!==i||(r++,t.insertBefore(f(),A)),i=r,this.parts.push({type:"node",index:r}),null===A.nextSibling?A.data="":(e.push(A),r--),s++}else{let t=-1;for(;-1!==(t=A.data.indexOf(l,t+1));)this.parts.push({type:"node",index:-1}),s++}}else o.currentNode=n.pop()}for(const A of e)A.parentNode.removeChild(A)}}const p=(A,t)=>{const e=A.length-t.length;return e>=0&&A.slice(e)===t},m=A=>-1!==A.index,f=()=>document.createComment(""),_=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class y{constructor(A,t,e){this.__parts=[],this.template=A,this.processor=t,this.options=e}update(A){let t=0;for(const e of this.__parts)void 0!==e&&e.setValue(A[t]),t++;for(const A of this.__parts)void 0!==A&&A.commit()}_clone(){const A=i?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],e=this.template.parts,n=document.createTreeWalker(A,133,null,!1);let o,r=0,s=0,a=n.nextNode();for(;r<e.length;)if(o=e[r],m(o)){for(;s<o.index;)s++,"TEMPLATE"===a.nodeName&&(t.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=t.pop(),a=n.nextNode());if("node"===o.type){const A=this.processor.handleTextExpression(this.options);A.insertAfterNode(a.previousSibling),this.__parts.push(A)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,o.name,o.strings,this.options));r++}else this.__parts.push(void 0),r++;return i&&(document.adoptNode(A),customElements.upgrade(A)),A}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const b=` ${l} `;class g{constructor(A,t,e,n){this.strings=A,this.values=t,this.type=e,this.processor=n}getHTML(){const A=this.strings.length-1;let t="",e=!1;for(let n=0;n<A;n++){const A=this.strings[n],o=A.lastIndexOf("\x3c!--");e=(o>-1||e)&&-1===A.indexOf("--\x3e",o+1);const i=_.exec(A);t+=null===i?A+(e?b:c):A.substr(0,i.index)+i[1]+i[2]+u+i[3]+l}return t+=this.strings[A]}getTemplateElement(){const A=document.createElement("template");return A.innerHTML=this.getHTML(),A}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const v=A=>null===A||!("object"==typeof A||"function"==typeof A),w=A=>Array.isArray(A)||!(!A||!A[Symbol.iterator]);class P{constructor(A,t,e){this.dirty=!0,this.element=A,this.name=t,this.strings=e,this.parts=[];for(let A=0;A<e.length-1;A++)this.parts[A]=this._createPart()}_createPart(){return new x(this)}_getValue(){const A=this.strings,t=A.length-1;let e="";for(let n=0;n<t;n++){e+=A[n];const t=this.parts[n];if(void 0!==t){const A=t.value;if(v(A)||!w(A))e+="string"==typeof A?A:String(A);else for(const t of A)e+="string"==typeof t?t:String(t)}}return e+=A[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class x{constructor(A){this.value=void 0,this.committer=A}setValue(A){A===s||v(A)&&A===this.value||(this.value=A,o(A)||(this.committer.dirty=!0))}commit(){for(;o(this.value);){const A=this.value;this.value=s,A(this)}this.value!==s&&this.committer.commit()}}class S{constructor(A){this.value=void 0,this.__pendingValue=void 0,this.options=A}appendInto(A){this.startNode=A.appendChild(f()),this.endNode=A.appendChild(f())}insertAfterNode(A){this.startNode=A,this.endNode=A.nextSibling}appendIntoPart(A){A.__insert(this.startNode=f()),A.__insert(this.endNode=f())}insertAfterPart(A){A.__insert(this.startNode=f()),this.endNode=A.endNode,A.endNode=this.startNode}setValue(A){this.__pendingValue=A}commit(){for(;o(this.__pendingValue);){const A=this.__pendingValue;this.__pendingValue=s,A(this)}const A=this.__pendingValue;A!==s&&(v(A)?A!==this.value&&this.__commitText(A):A instanceof g?this.__commitTemplateResult(A):A instanceof Node?this.__commitNode(A):w(A)?this.__commitIterable(A):A===a?(this.value=a,this.clear()):this.__commitText(A))}__insert(A){this.endNode.parentNode.insertBefore(A,this.endNode)}__commitNode(A){this.value!==A&&(this.clear(),this.__insert(A),this.value=A)}__commitText(A){const t=this.startNode.nextSibling,e="string"==typeof(A=null==A?"":A)?A:String(A);t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this.__commitNode(document.createTextNode(e)),this.value=A}__commitTemplateResult(A){const t=this.options.templateFactory(A);if(this.value instanceof y&&this.value.template===t)this.value.update(A.values);else{const e=new y(t,A.processor,this.options),n=e._clone();e.update(A.values),this.__commitNode(n),this.value=e}}__commitIterable(A){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let e,n=0;for(const o of A)void 0===(e=t[n])&&(e=new S(this.options),t.push(e),0===n?e.appendIntoPart(this):e.insertAfterPart(t[n-1])),e.setValue(o),e.commit(),n++;n<t.length&&(t.length=n,this.clear(e&&e.endNode))}clear(A=this.startNode){r(this.startNode.parentNode,A.nextSibling,this.endNode)}}class E{constructor(A,t,e){if(this.value=void 0,this.__pendingValue=void 0,2!==e.length||""!==e[0]||""!==e[1])throw new Error("Boolean attributes can only contain a single expression");this.element=A,this.name=t,this.strings=e}setValue(A){this.__pendingValue=A}commit(){for(;o(this.__pendingValue);){const A=this.__pendingValue;this.__pendingValue=s,A(this)}if(this.__pendingValue===s)return;const A=!!this.__pendingValue;this.value!==A&&(A?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=A),this.__pendingValue=s}}class C extends P{constructor(A,t,e){super(A,t,e),this.single=2===e.length&&""===e[0]&&""===e[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends x{}let N=!1;try{const A={get capture(){return N=!0,!1}};window.addEventListener("test",A,A),window.removeEventListener("test",A,A)}catch(A){}class O{constructor(A,t,e){this.value=void 0,this.__pendingValue=void 0,this.element=A,this.eventName=t,this.eventContext=e,this.__boundHandleEvent=A=>this.handleEvent(A)}setValue(A){this.__pendingValue=A}commit(){for(;o(this.__pendingValue);){const A=this.__pendingValue;this.__pendingValue=s,A(this)}if(this.__pendingValue===s)return;const A=this.__pendingValue,t=this.value,e=null==A||null!=t&&(A.capture!==t.capture||A.once!==t.once||A.passive!==t.passive),n=null!=A&&(null==t||e);e&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=k(A),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=A,this.__pendingValue=s}handleEvent(A){"function"==typeof this.value?this.value.call(this.eventContext||this.element,A):this.value.handleEvent(A)}}const k=A=>A&&(N?{capture:A.capture,passive:A.passive,once:A.once}:A.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const L=new class{handleAttributeExpressions(A,t,e,n){const o=t[0];if("."===o){return new C(A,t.slice(1),e).parts}return"@"===o?[new O(A,t.slice(1),n.eventContext)]:"?"===o?[new E(A,t.slice(1),e)]:new P(A,t,e).parts}handleTextExpression(A){return new S(A)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function I(A){let t=M.get(A.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},M.set(A.type,t));let e=t.stringsArray.get(A.strings);if(void 0!==e)return e;const n=A.strings.join(l);return void 0===(e=t.keyString.get(n))&&(e=new h(A,A.getTemplateElement()),t.keyString.set(n,e)),t.stringsArray.set(A.strings,e),e}const M=new Map,z=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const D=(A,...t)=>new g(A,t,"html",L),R=133;function H(A,t){const{element:{content:e},parts:n}=A,o=document.createTreeWalker(e,R,null,!1);let i=F(n),r=n[i],s=-1,a=0;const l=[];let c=null;for(;o.nextNode();){s++;const A=o.currentNode;for(A.previousSibling===c&&(c=null),t.has(A)&&(l.push(A),null===c&&(c=A)),null!==c&&a++;void 0!==r&&r.index===s;)r.index=null!==c?-1:r.index-a,r=n[i=F(n,i)]}l.forEach(A=>A.parentNode.removeChild(A))}const B=A=>{let t=11===A.nodeType?0:1;const e=document.createTreeWalker(A,R,null,!1);for(;e.nextNode();)t++;return t},F=(A,t=-1)=>{for(let e=t+1;e<A.length;e++){const t=A[e];if(m(t))return e}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const j=(A,t)=>`${A}--${t}`;let Y=!0;void 0===window.ShadyCSS?Y=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Y=!1);const V=A=>t=>{const e=j(t.type,A);let n=M.get(e);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},M.set(e,n));let o=n.stringsArray.get(t.strings);if(void 0!==o)return o;const i=t.strings.join(l);if(void 0===(o=n.keyString.get(i))){const e=t.getTemplateElement();Y&&window.ShadyCSS.prepareTemplateDom(e,A),o=new h(t,e),n.keyString.set(i,o)}return n.stringsArray.set(t.strings,o),o},W=["html","svg"],q=new Set,J=(A,t,e)=>{q.add(A);const n=e?e.element:document.createElement("template"),o=t.querySelectorAll("style"),{length:i}=o;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(n,A);const r=document.createElement("style");for(let A=0;A<i;A++){const t=o[A];t.parentNode.removeChild(t),r.textContent+=t.textContent}(A=>{W.forEach(t=>{const e=M.get(j(t,A));void 0!==e&&e.keyString.forEach(A=>{const{element:{content:t}}=A,e=new Set;Array.from(t.querySelectorAll("style")).forEach(A=>{e.add(A)}),H(A,e)})})})(A);const s=n.content;e?function(A,t,e=null){const{element:{content:n},parts:o}=A;if(null==e)return void n.appendChild(t);const i=document.createTreeWalker(n,R,null,!1);let r=F(o),s=0,a=-1;for(;i.nextNode();){for(a++,i.currentNode===e&&(s=B(t),e.parentNode.insertBefore(t,e));-1!==r&&o[r].index===a;){if(s>0){for(;-1!==r;)o[r].index+=s,r=F(o,r);return}r=F(o,r)}}}(e,r,s.firstChild):s.insertBefore(r,s.firstChild),window.ShadyCSS.prepareTemplateStyles(n,A);const a=s.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==a)t.insertBefore(a.cloneNode(!0),t.firstChild);else if(e){s.insertBefore(r,s.firstChild);const A=new Set;A.add(r),H(e,A)}};window.JSCompiler_renameProperty=(A,t)=>A;const Z={toAttribute(A,t){switch(t){case Boolean:return A?"":null;case Object:case Array:return null==A?A:JSON.stringify(A)}return A},fromAttribute(A,t){switch(t){case Boolean:return null!==A;case Number:return null===A?null:Number(A);case Object:case Array:return JSON.parse(A)}return A}},U=(A,t)=>t!==A&&(t==t||A==A),Q={attribute:!0,type:String,converter:Z,reflect:!1,hasChanged:U},X=Promise.resolve(!0),G=1,$=4,K=8,AA=16,tA=32,eA="finalized";class nA extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=X,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const A=[];return this._classProperties.forEach((t,e)=>{const n=this._attributeNameForProperty(e,t);void 0!==n&&(this._attributeToPropertyMap.set(n,e),A.push(n))}),A}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const A=Object.getPrototypeOf(this)._classProperties;void 0!==A&&A.forEach((A,t)=>this._classProperties.set(t,A))}}static createProperty(A,t=Q){if(this._ensureClassProperties(),this._classProperties.set(A,t),t.noAccessor||this.prototype.hasOwnProperty(A))return;const e="symbol"==typeof A?Symbol():`__${A}`;Object.defineProperty(this.prototype,A,{get(){return this[e]},set(t){const n=this[A];this[e]=t,this._requestUpdate(A,n)},configurable:!0,enumerable:!0})}static finalize(){const A=Object.getPrototypeOf(this);if(A.hasOwnProperty(eA)||A.finalize(),this[eA]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const A=this.properties,t=[...Object.getOwnPropertyNames(A),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(A):[]];for(const e of t)this.createProperty(e,A[e])}}static _attributeNameForProperty(A,t){const e=t.attribute;return!1===e?void 0:"string"==typeof e?e:"string"==typeof A?A.toLowerCase():void 0}static _valueHasChanged(A,t,e=U){return e(A,t)}static _propertyValueFromAttribute(A,t){const e=t.type,n=t.converter||Z,o="function"==typeof n?n:n.fromAttribute;return o?o(A,e):A}static _propertyValueToAttribute(A,t){if(void 0===t.reflect)return;const e=t.type,n=t.converter;return(n&&n.toAttribute||Z.toAttribute)(A,e)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((A,t)=>{if(this.hasOwnProperty(t)){const A=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,A)}})}_applyInstanceProperties(){this._instanceProperties.forEach((A,t)=>this[t]=A),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|tA,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(A,t,e){t!==e&&this._attributeToProperty(A,e)}_propertyToAttribute(A,t,e=Q){const n=this.constructor,o=n._attributeNameForProperty(A,e);if(void 0!==o){const A=n._propertyValueToAttribute(t,e);if(void 0===A)return;this._updateState=this._updateState|K,null==A?this.removeAttribute(o):this.setAttribute(o,A),this._updateState=this._updateState&~K}}_attributeToProperty(A,t){if(this._updateState&K)return;const e=this.constructor,n=e._attributeToPropertyMap.get(A);if(void 0!==n){const A=e._classProperties.get(n)||Q;this._updateState=this._updateState|AA,this[n]=e._propertyValueFromAttribute(t,A),this._updateState=this._updateState&~AA}}_requestUpdate(A,t){let e=!0;if(void 0!==A){const n=this.constructor,o=n._classProperties.get(A)||Q;n._valueHasChanged(this[A],t,o.hasChanged)?(this._changedProperties.has(A)||this._changedProperties.set(A,t),!0!==o.reflect||this._updateState&AA||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(A,o))):e=!1}!this._hasRequestedUpdate&&e&&this._enqueueUpdate()}requestUpdate(A,t){return this._requestUpdate(A,t),this.updateComplete}async _enqueueUpdate(){let A,t;this._updateState=this._updateState|$;const e=this._updatePromise;this._updatePromise=new Promise((e,n)=>{A=e,t=n});try{await e}catch(A){}this._hasConnected||await new Promise(A=>this._hasConnectedResolver=A);try{const A=this.performUpdate();null!=A&&await A}catch(A){t(A)}A(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&tA}get _hasRequestedUpdate(){return this._updateState&$}get hasUpdated(){return this._updateState&G}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let A=!1;const t=this._changedProperties;try{(A=this.shouldUpdate(t))&&this.update(t)}catch(t){throw A=!1,t}finally{this._markUpdated()}A&&(this._updateState&G||(this._updateState=this._updateState|G,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~$}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(A){return!0}update(A){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((A,t)=>this._propertyToAttribute(t,this[t],A)),this._reflectingProperties=void 0)}updated(A){}firstUpdated(A){}}nA[eA]=!0;const oA="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;Symbol();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const iA=A=>A.flat?A.flat(1/0):function A(t,e=[]){for(let n=0,o=t.length;n<o;n++){const o=t[n];Array.isArray(o)?A(o,e):e.push(o)}return e}(A);class rA extends nA{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const A=this.styles,t=[];if(Array.isArray(A)){iA(A).reduceRight((A,t)=>(A.add(t),A),new Set).forEach(A=>t.unshift(A))}else A&&t.push(A);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const A=this.constructor._styles;0!==A.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?oA?this.renderRoot.adoptedStyleSheets=A.map(A=>A.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(A.map(A=>A.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(A){super.update(A);const t=this.render();t instanceof g&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(A=>{const t=document.createElement("style");t.textContent=A.cssText,this.renderRoot.appendChild(t)}))}render(){}}rA.finalized=!0,rA.render=(A,t,e)=>{if(!e||"object"!=typeof e||!e.scopeName)throw new Error("The `scopeName` option is required.");const n=e.scopeName,o=z.has(t),i=Y&&11===t.nodeType&&!!t.host,s=i&&!q.has(n),a=s?document.createDocumentFragment():t;if(((A,t,e)=>{let n=z.get(t);void 0===n&&(r(t,t.firstChild),z.set(t,n=new S(Object.assign({templateFactory:I},e))),n.appendInto(t)),n.setValue(A),n.commit()})(A,a,Object.assign({templateFactory:V(n)},e)),s){const A=z.get(a);z.delete(a);const e=A.value instanceof y?A.value.template:void 0;J(n,a,e),r(t,t.firstChild),t.appendChild(a),z.set(t,A)}!o&&i&&window.ShadyCSS.styleElement(t.host)};const sA="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMfaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzAxNCA3OS4xNTY3OTcsIDIwMTQvMDgvMjAtMDk6NTM6MDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY3Q0U4QUZBRTM5ODExRTRBNzYyRkNCRTU1REI1ODJGIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY3Q0U4QUY5RTM5ODExRTRBNzYyRkNCRTU1REI1ODJGIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE0IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSIyRUFDNTU4MTU3RjBDMUE5QzE4NTVGODVEMzcwMUQyRCIgc3RSZWY6ZG9jdW1lbnRJRD0iMkVBQzU1ODE1N0YwQzFBOUMxODU1Rjg1RDM3MDFEMkQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCAMgAyADAREAAhEBAxEB/8QAfAABAQEBAQEBAQAAAAAAAAAAAAUGBAEDAggBAQAAAAAAAAAAAAAAAAAAAAAQAQACAAIDCwoFBAIDAQAAAAABAgMEEVMFMZHRgpLCFEQ1BhYhQVFxsVKy0lQVYYESIhOhweFyMkJiI2MkEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD+mwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//2Q==";class aA extends HTMLElement{static get version(){return"1.5.0"}}customElements.define("vaadin-lumo-styles",aA);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let lA,cA=null,dA=window.HTMLImports&&window.HTMLImports.whenReady||null;function uA(A){requestAnimationFrame((function(){dA?dA(A):(cA||(cA=new Promise(A=>{lA=A}),"complete"===document.readyState?lA():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&lA()})),cA.then((function(){A&&A()})))}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const hA="__seenByShadyCSS",pA="__shadyCSSCachedStyle";let mA=null,fA=null;class _A{constructor(){this.customStyles=[],this.enqueued=!1,uA(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&fA&&(this.enqueued=!0,uA(fA))}addCustomStyle(A){A[hA]||(A[hA]=!0,this.customStyles.push(A),this.enqueueDocumentValidation())}getStyleForCustomStyle(A){if(A[pA])return A[pA];let t;return t=A.getStyle?A.getStyle():A}processStyles(){const A=this.customStyles;for(let t=0;t<A.length;t++){const e=A[t];if(e[pA])continue;const n=this.getStyleForCustomStyle(e);if(n){const A=n.__appliedElement||n;mA&&mA(A),e[pA]=A}}return A}}_A.prototype.addCustomStyle=_A.prototype.addCustomStyle,_A.prototype.getStyleForCustomStyle=_A.prototype.getStyleForCustomStyle,_A.prototype.processStyles=_A.prototype.processStyles,Object.defineProperties(_A.prototype,{transformCallback:{get:()=>mA,set(A){mA=A}},validateCallback:{get:()=>fA,set(A){let t=!1;fA||(t=!0),fA=A,t&&this.enqueueDocumentValidation()}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function yA(A,t){for(let e in t)null===e?A.style.removeProperty(e):A.style.setProperty(e,t[e])}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const bA=!(window.ShadyDOM&&window.ShadyDOM.inUse);let gA,vA;function wA(A){gA=(!A||!A.shimcssproperties)&&(bA||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(vA=window.ShadyCSS.cssBuild);const PA=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?gA=window.ShadyCSS.nativeCss:window.ShadyCSS?(wA(window.ShadyCSS),window.ShadyCSS=void 0):wA(window.WebComponents&&window.WebComponents.flags);const xA=gA,SA=new _A;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.ShadyCSS||(window.ShadyCSS={prepareTemplate(A,t,e){},prepareTemplateDom(A,t){},prepareTemplateStyles(A,t,e){},styleSubtree(A,t){SA.processStyles(),yA(A,t)},styleElement(A){SA.processStyles()},styleDocument(A){SA.processStyles(),yA(document.body,A)},getComputedStyleValue:(A,t)=>(function(A,t){const e=window.getComputedStyle(A).getPropertyValue(t);return e?e.trim():""})(A,t),flushCustomStyles(){},nativeCss:xA,nativeShadow:bA,cssBuild:vA,disableRuntime:PA}),window.ShadyCSS.CustomStyleInterface=SA,
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.JSCompiler_renameProperty=function(A,t){return A};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let EA,CA,TA=/(url\()([^)]*)(\))/g,NA=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function OA(A,t){if(A&&NA.test(A))return A;if("//"===A)return A;if(void 0===EA){EA=!1;try{const A=new URL("b","http://a");A.pathname="c%20d",EA="http://a/c%20d"===A.href}catch(A){}}if(t||(t=document.baseURI||window.location.href),EA)try{return new URL(A,t).href}catch(t){return A}return CA||((CA=document.implementation.createHTMLDocument("temp")).base=CA.createElement("base"),CA.head.appendChild(CA.base),CA.anchor=CA.createElement("a"),CA.body.appendChild(CA.anchor)),CA.base.href=t,CA.anchor.href=A,CA.anchor.href||A}function kA(A,t){return A.replace(TA,(function(A,e,n,o){return e+"'"+OA(n.replace(/["']/g,""),t)+"'"+o}))}function LA(A){return A.substring(0,A.lastIndexOf("/")+1)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.ShadyDOM,Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback;let IA=LA(document.baseURI||window.location.href);let MA=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;let zA=!1;let DA=!1;let RA=!1;let HA=!1;let BA=!1;let FA=!0;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let jA={},YA={};function VA(A,t){jA[A]=YA[A.toLowerCase()]=t}function WA(A){return jA[A]||YA[A.toLowerCase()]}class qA extends HTMLElement{static get observedAttributes(){return["id"]}static import(A,t){if(A){let e=WA(A);return e&&t?e.querySelector(t):e}return null}attributeChangedCallback(A,t,e,n){t!==e&&this.register()}get assetpath(){if(!this.__assetpath){const A=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=OA(this.getAttribute("assetpath")||"",A.baseURI);this.__assetpath=LA(t)}return this.__assetpath}register(A){if(A=A||this.id){if(DA&&void 0!==WA(A))throw VA(A,null),new Error(`strictTemplatePolicy: dom-module ${A} re-registered`);this.id=A,VA(A,this),(t=this).querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}var t}}qA.prototype.modules=jA,customElements.define("dom-module",qA);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const JA="link[rel=import][type~=css]",ZA="include",UA="shady-unscoped";function QA(A){return qA.import(A)}function XA(A){const t=kA((A.body?A.body:A).textContent,A.baseURI),e=document.createElement("style");return e.textContent=t,e}function GA(A){const t=A.trim().split(/\s+/),e=[];for(let A=0;A<t.length;A++)e.push(...$A(t[A]));return e}function $A(A){const t=QA(A);if(!t)return console.warn("Could not find style data in module named",A),[];if(void 0===t._styles){const A=[];A.push(...At(t));const e=t.querySelector("template");e&&A.push(...KA(e,t.assetpath)),t._styles=A}return t._styles}function KA(A,t){if(!A._styles){const e=[],n=A.content.querySelectorAll("style");for(let A=0;A<n.length;A++){let o=n[A],i=o.getAttribute(ZA);i&&e.push(...GA(i).filter((function(A,t,e){return e.indexOf(A)===t}))),t&&(o.textContent=kA(o.textContent,t)),e.push(o)}A._styles=e}return A._styles}function At(A){const t=[],e=A.querySelectorAll(JA);for(let A=0;A<e.length;A++){let n=e[A];if(n.import){const A=n.import,e=n.hasAttribute(UA);if(e&&!A._unscopedStyle){const t=XA(A);t.setAttribute(UA,""),A._unscopedStyle=t}else A._style||(A._style=XA(A));t.push(e?A._unscopedStyle:A._style)}}return t}function tt(A){let t=QA(A);if(t&&void 0===t._cssText){let A=et(t),e=t.querySelector("template");e&&(A+=function(A,t){let e="";const n=KA(A,t);for(let A=0;A<n.length;A++){let t=n[A];t.parentNode&&t.parentNode.removeChild(t),e+=t.textContent}return e}(e,t.assetpath)),t._cssText=A||null}return t||console.warn("Could not find style data in module named",A),t&&t._cssText||""}function et(A){let t="",e=At(A);for(let A=0;A<e.length;A++)t+=e[A].textContent;return t}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const nt="include",ot=window.ShadyCSS.CustomStyleInterface;class it extends HTMLElement{constructor(){super(),this._style=null,ot.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const A=this.querySelector("style");if(!A)return null;this._style=A;const t=A.getAttribute(nt);return t&&(A.removeAttribute(nt),A.textContent=function(A){let t=A.trim().split(/\s+/),e="";for(let A=0;A<t.length;A++)e+=tt(t[A]);return e}(t)+A.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",it);const rt=document.createElement("template");rt.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Base (background) */\n      --lumo-base-color: #FFF;\n\n      /* Tint */\n      --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);\n      --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);\n      --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);\n      --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);\n      --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);\n      --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);\n      --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);\n      --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);\n      --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);\n      --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);\n      --lumo-tint: #FFF;\n\n      /* Shade */\n      --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);\n      --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);\n      --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);\n      --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);\n      --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);\n      --lumo-shade-50pct: hsla(214, 45%, 20%, 0.5);\n      --lumo-shade-60pct: hsla(214, 43%, 19%, 0.61);\n      --lumo-shade-70pct: hsla(214, 42%, 18%, 0.72);\n      --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);\n      --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);\n      --lumo-shade: hsl(214, 35%, 15%);\n\n      /* Contrast */\n      --lumo-contrast-5pct: var(--lumo-shade-5pct);\n      --lumo-contrast-10pct: var(--lumo-shade-10pct);\n      --lumo-contrast-20pct: var(--lumo-shade-20pct);\n      --lumo-contrast-30pct: var(--lumo-shade-30pct);\n      --lumo-contrast-40pct: var(--lumo-shade-40pct);\n      --lumo-contrast-50pct: var(--lumo-shade-50pct);\n      --lumo-contrast-60pct: var(--lumo-shade-60pct);\n      --lumo-contrast-70pct: var(--lumo-shade-70pct);\n      --lumo-contrast-80pct: var(--lumo-shade-80pct);\n      --lumo-contrast-90pct: var(--lumo-shade-90pct);\n      --lumo-contrast: var(--lumo-shade);\n\n      /* Text */\n      --lumo-header-text-color: var(--lumo-contrast);\n      --lumo-body-text-color: var(--lumo-contrast-90pct);\n      --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n      --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n      --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n      /* Primary */\n      --lumo-primary-color: hsl(214, 90%, 52%);\n      --lumo-primary-color-50pct: hsla(214, 90%, 52%, 0.5);\n      --lumo-primary-color-10pct: hsla(214, 90%, 52%, 0.1);\n      --lumo-primary-text-color: var(--lumo-primary-color);\n      --lumo-primary-contrast-color: #FFF;\n\n      /* Error */\n      --lumo-error-color: hsl(3, 100%, 61%);\n      --lumo-error-color-50pct: hsla(3, 100%, 60%, 0.5);\n      --lumo-error-color-10pct: hsla(3, 100%, 60%, 0.1);\n      --lumo-error-text-color: hsl(3, 92%, 53%);\n      --lumo-error-contrast-color: #FFF;\n\n      /* Success */\n      --lumo-success-color: hsl(145, 80%, 42%); /* hsl(144,82%,37%); */\n      --lumo-success-color-50pct: hsla(145, 76%, 44%, 0.55);\n      --lumo-success-color-10pct: hsla(145, 76%, 44%, 0.12);\n      --lumo-success-text-color: hsl(145, 100%, 32%);\n      --lumo-success-contrast-color: #FFF;\n    }\n  </style>\n</custom-style><dom-module id="lumo-color">\n  <template>\n    <style>\n      [theme~="dark"] {\n        /* Base (background) */\n        --lumo-base-color: hsl(214, 35%, 21%);\n\n        /* Tint */\n        --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);\n        --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);\n        --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);\n        --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);\n        --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);\n        --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);\n        --lumo-tint-60pct: hsla(214, 82%, 90%, 0.6);\n        --lumo-tint-70pct: hsla(214, 87%, 92%, 0.7);\n        --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);\n        --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);\n        --lumo-tint: hsl(214, 100%, 98%);\n\n        /* Shade */\n        --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);\n        --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);\n        --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);\n        --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);\n        --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);\n        --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);\n        --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);\n        --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);\n        --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);\n        --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);\n        --lumo-shade: hsl(214, 33%, 13%);\n\n        /* Contrast */\n        --lumo-contrast-5pct: var(--lumo-tint-5pct);\n        --lumo-contrast-10pct: var(--lumo-tint-10pct);\n        --lumo-contrast-20pct: var(--lumo-tint-20pct);\n        --lumo-contrast-30pct: var(--lumo-tint-30pct);\n        --lumo-contrast-40pct: var(--lumo-tint-40pct);\n        --lumo-contrast-50pct: var(--lumo-tint-50pct);\n        --lumo-contrast-60pct: var(--lumo-tint-60pct);\n        --lumo-contrast-70pct: var(--lumo-tint-70pct);\n        --lumo-contrast-80pct: var(--lumo-tint-80pct);\n        --lumo-contrast-90pct: var(--lumo-tint-90pct);\n        --lumo-contrast: var(--lumo-tint);\n\n        /* Text */\n        --lumo-header-text-color: var(--lumo-contrast);\n        --lumo-body-text-color: var(--lumo-contrast-90pct);\n        --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n        --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n        --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n        /* Primary */\n        --lumo-primary-color: hsl(214, 86%, 55%);\n        --lumo-primary-color-50pct: hsla(214, 86%, 55%, 0.5);\n        --lumo-primary-color-10pct: hsla(214, 90%, 63%, 0.1);\n        --lumo-primary-text-color: hsl(214, 100%, 70%);\n        --lumo-primary-contrast-color: #FFF;\n\n        /* Error */\n        --lumo-error-color: hsl(3, 90%, 63%);\n        --lumo-error-color-50pct: hsla(3, 90%, 63%, 0.5);\n        --lumo-error-color-10pct: hsla(3, 90%, 63%, 0.1);\n        --lumo-error-text-color: hsl(3, 100%, 67%);\n\n        /* Success */\n        --lumo-success-color: hsl(145, 65%, 42%);\n        --lumo-success-color-50pct: hsla(145, 65%, 42%, 0.5);\n        --lumo-success-color-10pct: hsla(145, 65%, 42%, 0.1);\n        --lumo-success-text-color: hsl(145, 85%, 47%);\n      }\n\n      html {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      [theme~="dark"] {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        color: var(--lumo-header-text-color);\n      }\n\n      a {\n        color: var(--lumo-primary-text-color);\n      }\n\n      blockquote {\n        color: var(--lumo-secondary-text-color);\n      }\n\n      code,\n      pre {\n        background-color: var(--lumo-contrast-10pct);\n        border-radius: var(--lumo-border-radius-m);\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="lumo-color-legacy">\n  <template>\n    <style include="lumo-color">\n      :host {\n        color: var(--lumo-body-text-color) !important;\n        background-color: var(--lumo-base-color) !important;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(rt.content);const st=document.createElement("template");st.innerHTML="<custom-style>\n  <style>\n    html {\n      --lumo-size-xs: 1.625rem;\n      --lumo-size-s: 1.875rem;\n      --lumo-size-m: 2.25rem;\n      --lumo-size-l: 2.75rem;\n      --lumo-size-xl: 3.5rem;\n\n      /* Icons */\n      --lumo-icon-size-s: 1.25em;\n      --lumo-icon-size-m: 1.5em;\n      --lumo-icon-size-l: 2.25em;\n      /* For backwards compatibility */\n      --lumo-icon-size: var(--lumo-icon-size-m);\n    }\n  </style>\n</custom-style>",document.head.appendChild(st.content);const at=document.createElement("template");at.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Square */\n      --lumo-space-xs: 0.25rem;\n      --lumo-space-s: 0.5rem;\n      --lumo-space-m: 1rem;\n      --lumo-space-l: 1.5rem;\n      --lumo-space-xl: 2.5rem;\n\n      /* Wide */\n      --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);\n      --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);\n      --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);\n      --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);\n      --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);\n\n      /* Tall */\n      --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);\n      --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);\n      --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);\n      --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);\n      --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);\n    }\n  </style>\n</custom-style>",document.head.appendChild(at.content);const lt=document.createElement("template");lt.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Border radius */\n      --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */\n      --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */\n      --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */\n      --lumo-border-radius: 0.25em; /* Deprecated */\n\n      /* Shadow */\n      --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);\n      --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);\n      --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);\n      --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);\n      --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);\n\n      /* Clickable element cursor */\n      --lumo-clickable-cursor: default;\n    }\n  </style>\n</custom-style>",document.head.appendChild(lt.content);const ct=document.createElement("template");ct.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Font families */\n      --lumo-font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n      /* Font sizes */\n      --lumo-font-size-xxs: .75rem;\n      --lumo-font-size-xs: .8125rem;\n      --lumo-font-size-s: .875rem;\n      --lumo-font-size-m: 1rem;\n      --lumo-font-size-l: 1.125rem;\n      --lumo-font-size-xl: 1.375rem;\n      --lumo-font-size-xxl: 1.75rem;\n      --lumo-font-size-xxxl: 2.5rem;\n\n      /* Line heights */\n      --lumo-line-height-xs: 1.25;\n      --lumo-line-height-s: 1.375;\n      --lumo-line-height-m: 1.625;\n    }\n\n  </style>\n</custom-style><dom-module id="lumo-typography">\n  <template>\n    <style>\n      html {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      /* Can’t combine with the above selector because that doesn’t work in browsers without native shadow dom */\n      :host {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      small,\n      [theme~="font-size-s"] {\n        font-size: var(--lumo-font-size-s);\n        line-height: var(--lumo-line-height-s);\n      }\n\n      [theme~="font-size-xs"] {\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        font-weight: 600;\n        line-height: var(--lumo-line-height-xs);\n        margin-top: 1.25em;\n      }\n\n      h1 {\n        font-size: var(--lumo-font-size-xxxl);\n        margin-bottom: 0.75em;\n      }\n\n      h2 {\n        font-size: var(--lumo-font-size-xxl);\n        margin-bottom: 0.5em;\n      }\n\n      h3 {\n        font-size: var(--lumo-font-size-xl);\n        margin-bottom: 0.5em;\n      }\n\n      h4 {\n        font-size: var(--lumo-font-size-l);\n        margin-bottom: 0.5em;\n      }\n\n      h5 {\n        font-size: var(--lumo-font-size-m);\n        margin-bottom: 0.25em;\n      }\n\n      h6 {\n        font-size: var(--lumo-font-size-xs);\n        margin-bottom: 0;\n        text-transform: uppercase;\n        letter-spacing: 0.03em;\n      }\n\n      p,\n      blockquote {\n        margin-top: 0.5em;\n        margin-bottom: 0.75em;\n      }\n\n      a {\n        text-decoration: none;\n      }\n\n      a:hover {\n        text-decoration: underline;\n      }\n\n      hr {\n        display: block;\n        align-self: stretch;\n        height: 1px;\n        border: 0;\n        padding: 0;\n        margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);\n        background-color: var(--lumo-contrast-10pct);\n      }\n\n      blockquote {\n        border-left: 2px solid var(--lumo-contrast-30pct);\n      }\n\n      b,\n      strong {\n        font-weight: 600;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(ct.content);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class dt{constructor(A){this.value=A.toString()}toString(){return this.value}}function ut(A){if(A instanceof dt)return A.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${A}`)}const ht=function(A,...t){const e=document.createElement("template");return e.innerHTML=t.reduce((t,e,n)=>t+function(A){if(A instanceof HTMLTemplateElement)return A.innerHTML;if(A instanceof dt)return ut(A);throw new Error(`non-template value passed to Polymer's html function: ${A}`)}(e)+A[n+1],A[0]),e},pt=ht`<dom-module id="lumo-button" theme-for="vaadin-button">
  <template>
    <style>
      :host {
        /* Sizing */
        --lumo-button-size: var(--lumo-size-m);
        min-width: calc(var(--lumo-button-size) * 2);
        height: var(--lumo-button-size);
        padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius) / 2);
        margin: var(--lumo-space-xs) 0;
        box-sizing: border-box;
        /* Style */
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        font-weight: 500;
        color: var(--_lumo-button-color, var(--lumo-primary-text-color));
        background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
        border-radius: var(--lumo-border-radius);
        cursor: default;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* Set only for the internal parts so we don’t affect the host vertical alignment */
      [part="label"],
      [part="prefix"],
      [part="suffix"] {
        line-height: var(--lumo-line-height-xs);
      }

      [part="label"] {
        padding: calc(var(--lumo-button-size) / 6) 0;
      }

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-button-size: var(--lumo-size-s);
      }

      :host([theme~="large"]) {
        font-size: var(--lumo-font-size-l);
        --lumo-button-size: var(--lumo-size-l);
      }

      /* This needs to be the last selector for it to take priority */
      :host([disabled][disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
        background-color: var(--lumo-contrast-5pct);
      }

      /* For interaction states */
      :host::before,
      :host::after {
        content: "";
        /* We rely on the host always being relative */
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: currentColor;
        border-radius: inherit;
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
      }

      /* Hover */

      :host(:hover)::before {
        opacity: 0.05;
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([active]):hover)::before {
          opacity: 0;
        }
      }

      /* Active */

      :host::after {
        transition: opacity 1.4s, transform 0.1s;
        filter: blur(8px);
      }

      :host([active])::before {
        opacity: 0.1;
        transition-duration: 0s;
      }

      :host([active])::after {
        opacity: 0.1;
        transition-duration: 0s, 0s;
        transform: scale(0);
      }

      /* Keyboard focus */

      :host([focus-ring]) {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Types (primary, tertiary, tertiary-inline */

      :host([theme~="tertiary"]),
      :host([theme~="tertiary-inline"]) {
        background-color: transparent !important;
        transition: opacity 0.2s;
        min-width: 0;
      }

      :host([theme~="tertiary"])::before,
      :host([theme~="tertiary-inline"])::before {
        display: none;
      }

      :host([theme~="tertiary"]) {
        padding: 0 calc(var(--lumo-button-size) / 6);
      }

      @media (hover: hover) {
        :host([theme*="tertiary"]:not([active]):hover) {
          opacity: 0.8;
        }
      }

      :host([theme~="tertiary"][active]),
      :host([theme~="tertiary-inline"][active]) {
        opacity: 0.5;
        transition-duration: 0s;
      }

      :host([theme~="tertiary-inline"]) {
        margin: 0;
        height: auto;
        padding: 0;
        line-height: inherit;
        font-size: inherit;
      }

      :host([theme~="tertiary-inline"]) [part="label"] {
        padding: 0;
        overflow: visible;
        line-height: inherit;
      }

      :host([theme~="primary"]) {
        background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
        color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
        font-weight: 600;
        min-width: calc(var(--lumo-button-size) * 2.5);
      }

      :host([theme~="primary"][disabled]) {
        background-color: var(--lumo-primary-color-50pct);
        color: var(--lumo-primary-contrast-color);
      }

      :host([theme~="primary"]:hover)::before {
        opacity: 0.1;
      }

      :host([theme~="primary"][active])::before {
        background-color: var(--lumo-shade-20pct);
      }

      @media (pointer: coarse) {
        :host([theme~="primary"][active])::before {
          background-color: var(--lumo-shade-60pct);
        }

        :host([theme~="primary"]:not([active]):hover)::before {
          opacity: 0;
        }
      }

      :host([theme~="primary"][active])::after {
        opacity: 0.2;
      }

      /* Colors (success, error, contrast) */

      :host([theme~="success"]) {
        color: var(--lumo-success-text-color);
      }

      :host([theme~="success"][theme~="primary"]) {
        background-color: var(--lumo-success-color);
        color: var(--lumo-success-contrast-color);
      }

      :host([theme~="success"][theme~="primary"][disabled]) {
        background-color: var(--lumo-success-color-50pct);
      }

      :host([theme~="error"]) {
        color: var(--lumo-error-text-color);
      }

      :host([theme~="error"][theme~="primary"]) {
        background-color: var(--lumo-error-color);
        color: var(--lumo-error-contrast-color);
      }

      :host([theme~="error"][theme~="primary"][disabled]) {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([theme~="contrast"]) {
        color: var(--lumo-contrast);
      }

      :host([theme~="contrast"][theme~="primary"]) {
        background-color: var(--lumo-contrast);
        color: var(--lumo-base-color);
      }

      :host([theme~="contrast"][theme~="primary"][disabled]) {
        background-color: var(--lumo-contrast-50pct);
      }

      /* Icons */

      [part] ::slotted(iron-icon) {
        display: inline-block;
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="prefix"] {
        margin-left: -0.25em;
        margin-right: 0.25em;
      }

      [part="suffix"] {
        margin-left: 0.25em;
        margin-right: -0.25em;
      }

      /* Icon-only */

      :host([theme~="icon"]:not([theme~="tertiary-inline"])) {
        min-width: var(--lumo-button-size);
        padding-left: calc(var(--lumo-button-size) / 4);
        padding-right: calc(var(--lumo-button-size) / 4);
      }

      :host([theme~="icon"]) [part="prefix"],
      :host([theme~="icon"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(pt.content);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let mt=0;function ft(){}ft.prototype.__mixinApplications,ft.prototype.__mixinSet;const _t=function(A){let t=A.__mixinApplications;t||(t=new WeakMap,A.__mixinApplications=t);let e=mt++;return function(n){let o=n.__mixinSet;if(o&&o[e])return n;let i=t,r=i.get(n);r||(r=A(n),i.set(n,r));let s=Object.create(r.__mixinSet||o||null);return s[e]=!0,r.__mixinSet=s,r}},yt=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?A=>ShadyDOM.patch(A):A=>A;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function bt(A){return A.indexOf(".")>=0}function gt(A){let t=A.indexOf(".");return-1===t?A:A.slice(0,t)}function vt(A,t){return 0===A.indexOf(t+".")}function wt(A,t){return 0===t.indexOf(A+".")}function Pt(A,t,e){return t+e.slice(A.length)}function xt(A){if(Array.isArray(A)){let t=[];for(let e=0;e<A.length;e++){let n=A[e].toString().split(".");for(let A=0;A<n.length;A++)t.push(n[A])}return t.join(".")}return A}function St(A){return Array.isArray(A)?xt(A).split("."):A.toString().split(".")}function Et(A,t,e){let n=A,o=St(t);for(let A=0;A<o.length;A++){if(!n)return;n=n[o[A]]}return e&&(e.path=o.join(".")),n}function Ct(A,t,e){let n=A,o=St(t),i=o[o.length-1];if(o.length>1){for(let A=0;A<o.length-1;A++){if(!(n=n[o[A]]))return}n[i]=e}else n[t]=e;return o.join(".")}const Tt={},Nt=/-[a-z]/g,Ot=/([A-Z])/g;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function kt(A){return Tt[A]||(Tt[A]=A.indexOf("-")<0?A:A.replace(Nt,A=>A[1].toUpperCase()))}function Lt(A){return Tt[A]||(Tt[A]=A.replace(Ot,"-$1").toLowerCase())}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let It=0,Mt=0,zt=[],Dt=0,Rt=document.createTextNode("");new window.MutationObserver((function(){const A=zt.length;for(let t=0;t<A;t++){let A=zt[t];if(A)try{A()}catch(A){setTimeout(()=>{throw A})}}zt.splice(0,A),Mt+=A})).observe(Rt,{characterData:!0});const Ht={after:A=>({run:t=>window.setTimeout(t,A),cancel(A){window.clearTimeout(A)}}),run:(A,t)=>window.setTimeout(A,t),cancel(A){window.clearTimeout(A)}},Bt={run:A=>window.requestIdleCallback?window.requestIdleCallback(A):window.setTimeout(A,16),cancel(A){window.cancelIdleCallback?window.cancelIdleCallback(A):window.clearTimeout(A)}},Ft={run:A=>(Rt.textContent=Dt++,zt.push(A),It++),cancel(A){const t=A-Mt;if(t>=0){if(!zt[t])throw new Error("invalid async handle: "+A);zt[t]=null}}},jt=Ft,Yt=_t(A=>{return class extends A{static createProperties(A){const t=this.prototype;for(let e in A)e in t||t._createPropertyAccessor(e)}static attributeNameForProperty(A){return A.toLowerCase()}static typeForProperty(A){}_createPropertyAccessor(A,t){this._addPropertyToAttributeMap(A),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[A]||(this.__dataHasAccessor[A]=!0,this._definePropertyAccessor(A,t))}_addPropertyToAttributeMap(A){if(this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[A]){const t=this.constructor.attributeNameForProperty(A);this.__dataAttributes[t]=A}}_definePropertyAccessor(A,t){Object.defineProperty(this,A,{get(){return this._getProperty(A)},set:t?function(){}:function(t){this._setProperty(A,t)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let A in this.__dataHasAccessor)this.hasOwnProperty(A)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[A]=this[A],delete this[A])}_initializeInstanceProperties(A){Object.assign(this,A)}_setProperty(A,t){this._setPendingProperty(A,t)&&this._invalidateProperties()}_getProperty(A){return this.__data[A]}_setPendingProperty(A,t,e){let n=this.__data[A],o=this._shouldPropertyChange(A,t,n);return o&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),!this.__dataOld||A in this.__dataOld||(this.__dataOld[A]=n),this.__data[A]=t,this.__dataPending[A]=t),o}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,jt.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){const A=this.__data,t=this.__dataPending,e=this.__dataOld;this._shouldPropertiesChange(A,t,e)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(A,t,e))}_shouldPropertiesChange(A,t,e){return Boolean(t)}_propertiesChanged(A,t,e){}_shouldPropertyChange(A,t,e){return e!==t&&(e==e||t==t)}attributeChangedCallback(A,t,e,n){t!==e&&this._attributeToProperty(A,e),super.attributeChangedCallback&&super.attributeChangedCallback(A,t,e,n)}_attributeToProperty(A,t,e){if(!this.__serializing){const n=this.__dataAttributes,o=n&&n[A]||A;this[o]=this._deserializeValue(t,e||this.constructor.typeForProperty(o))}}_propertyToAttribute(A,t,e){this.__serializing=!0,e=arguments.length<3?this[A]:e,this._valueToNodeAttribute(this,e,t||this.constructor.attributeNameForProperty(A)),this.__serializing=!1}_valueToNodeAttribute(A,t,e){const n=this._serializeValue(t);"class"!==e&&"name"!==e&&"slot"!==e||(A=yt(A)),void 0===n?A.removeAttribute(e):A.setAttribute(e,n)}_serializeValue(A){switch(typeof A){case"boolean":return A?"":void 0;default:return null!=A?A.toString():void 0}}_deserializeValue(A,t){switch(t){case Boolean:return null!==A;case Number:return Number(A);default:return A}}}}),Vt={};let Wt=HTMLElement.prototype;for(;Wt;){let A=Object.getOwnPropertyNames(Wt);for(let t=0;t<A.length;t++)Vt[A[t]]=!0;Wt=Object.getPrototypeOf(Wt)}const qt=_t(A=>{const t=Yt(A);return class extends t{static createPropertiesForAttributes(){let A=this.observedAttributes;for(let t=0;t<A.length;t++)this.prototype._createPropertyAccessor(kt(A[t]))}static attributeNameForProperty(A){return Lt(A)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(A){for(let t in A)this._setProperty(t,A[t])}_ensureAttribute(A,t){const e=this;e.hasAttribute(A)||this._valueToNodeAttribute(e,t,A)}_serializeValue(A){switch(typeof A){case"object":if(A instanceof Date)return A.toString();if(A)try{return JSON.stringify(A)}catch(A){return""}default:return super._serializeValue(A)}}_deserializeValue(A,t){let e;switch(t){case Object:try{e=JSON.parse(A)}catch(t){e=A}break;case Array:try{e=JSON.parse(A)}catch(t){e=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${A}`)}break;case Date:e=isNaN(A)?String(A):Number(A),e=new Date(e);break;default:e=super._deserializeValue(A,t)}return e}_definePropertyAccessor(A,t){!function(A,t){if(!Vt[t]){let e=A[t];void 0!==e&&(A.__data?A._setPendingProperty(t,e):(A.__dataProto?A.hasOwnProperty(JSCompiler_renameProperty("__dataProto",A))||(A.__dataProto=Object.create(A.__dataProto)):A.__dataProto={},A.__dataProto[t]=e))}}(this,A),super._definePropertyAccessor(A,t)}_hasAccessor(A){return this.__dataHasAccessor&&this.__dataHasAccessor[A]}_isPropertyPending(A){return Boolean(this.__dataPending&&A in this.__dataPending)}}}),Jt={"dom-if":!0,"dom-repeat":!0};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Zt=!1,Ut=!1;function Qt(A){(function(){if(!Zt){Zt=!0;const A=document.createElement("textarea");A.placeholder="a",Ut=A.placeholder===A.textContent}return Ut})()&&"textarea"===A.localName&&A.placeholder&&A.placeholder===A.textContent&&(A.textContent=null)}function Xt(A){let t=A.getAttribute("is");if(t&&Jt[t]){let e=A;for(e.removeAttribute("is"),A=e.ownerDocument.createElement(t),e.parentNode.replaceChild(A,e),A.appendChild(e);e.attributes.length;)A.setAttribute(e.attributes[0].name,e.attributes[0].value),e.removeAttribute(e.attributes[0].name)}return A}function Gt(A,t){let e=t.parentInfo&&Gt(A,t.parentInfo);if(!e)return A;for(let A=e.firstChild,n=0;A;A=A.nextSibling)if(t.parentIndex===n++)return A}function $t(A,t,e,n){n.id&&(t[n.id]=e)}function Kt(A,t,e){if(e.events&&e.events.length)for(let n,o=0,i=e.events;o<i.length&&(n=i[o]);o++)A._addMethodEventListenerToNode(t,n.name,n.value,A)}function Ae(A,t,e){e.templateInfo&&(t._templateInfo=e.templateInfo)}const te=_t(A=>{return class extends A{static _parseTemplate(A,t){if(!A._templateInfo){let e=A._templateInfo={};e.nodeInfoList=[],e.stripWhiteSpace=t&&t.stripWhiteSpace||A.hasAttribute("strip-whitespace"),this._parseTemplateContent(A,e,{parent:null})}return A._templateInfo}static _parseTemplateContent(A,t,e){return this._parseTemplateNode(A.content,t,e)}static _parseTemplateNode(A,t,e){let n=!1,o=A;return"template"!=o.localName||o.hasAttribute("preserve-content")?"slot"===o.localName&&(t.hasInsertionPoint=!0):n=this._parseTemplateNestedTemplate(o,t,e)||n,Qt(o),o.firstChild&&this._parseTemplateChildNodes(o,t,e),o.hasAttributes&&o.hasAttributes()&&(n=this._parseTemplateNodeAttributes(o,t,e)||n),n}static _parseTemplateChildNodes(A,t,e){if("script"!==A.localName&&"style"!==A.localName)for(let n,o=A.firstChild,i=0;o;o=n){if("template"==o.localName&&(o=Xt(o)),n=o.nextSibling,o.nodeType===Node.TEXT_NODE){let e=n;for(;e&&e.nodeType===Node.TEXT_NODE;)o.textContent+=e.textContent,n=e.nextSibling,A.removeChild(e),e=n;if(t.stripWhiteSpace&&!o.textContent.trim()){A.removeChild(o);continue}}let r={parentIndex:i,parentInfo:e};this._parseTemplateNode(o,t,r)&&(r.infoIndex=t.nodeInfoList.push(r)-1),o.parentNode&&i++}}static _parseTemplateNestedTemplate(A,t,e){let n=A,o=this._parseTemplate(n,t);return(o.content=n.content.ownerDocument.createDocumentFragment()).appendChild(n.content),e.templateInfo=o,!0}static _parseTemplateNodeAttributes(A,t,e){let n=!1,o=Array.from(A.attributes);for(let i,r=o.length-1;i=o[r];r--)n=this._parseTemplateNodeAttribute(A,t,e,i.name,i.value)||n;return n}static _parseTemplateNodeAttribute(A,t,e,n,o){return"on-"===n.slice(0,3)?(A.removeAttribute(n),e.events=e.events||[],e.events.push({name:n.slice(3),value:o}),!0):"id"===n&&(e.id=o,!0)}static _contentForTemplate(A){let t=A._templateInfo;return t&&t.content||A.content}_stampTemplate(A){A&&!A.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(A);let t=this.constructor._parseTemplate(A),e=t.nodeInfoList,n=t.content||A.content,o=document.importNode(n,!0);o.__noInsertionPoint=!t.hasInsertionPoint;let i=o.nodeList=new Array(e.length);o.$={};for(let A,t=0,n=e.length;t<n&&(A=e[t]);t++){let e=i[t]=Gt(o,A);$t(0,o.$,e,A),Ae(0,e,A),Kt(this,e,A)}return o=o}_addMethodEventListenerToNode(A,t,e,n){let o=function(A,t,e){return A=A._methodHost||A,function(t){A[e]?A[e](t,t.detail):console.warn("listener method `"+e+"` not defined")}}(n=n||A,0,e);return this._addEventListenerToNode(A,t,o),o}_addEventListenerToNode(A,t,e){A.addEventListener(t,e)}_removeEventListenerFromNode(A,t,e){A.removeEventListener(t,e)}}});
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let ee=0;const ne={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},oe=/[A-Z]/;function ie(A,t){let e=A[t];if(e){if(!A.hasOwnProperty(t)){e=A[t]=Object.create(A[t]);for(let A in e){let t=e[A],n=e[A]=Array(t.length);for(let A=0;A<t.length;A++)n[A]=t[A]}}}else e=A[t]={};return e}function re(A,t,e,n,o,i){if(t){let r=!1,s=ee++;for(let a in e)se(A,t,s,a,e,n,o,i)&&(r=!0);return r}return!1}function se(A,t,e,n,o,i,r,s){let a=!1,l=t[r?gt(n):n];if(l)for(let t,c=0,d=l.length;c<d&&(t=l[c]);c++)t.info&&t.info.lastRun===e||r&&!ae(n,t.trigger)||(t.info&&(t.info.lastRun=e),t.fn(A,n,o,i,t.info,r,s),a=!0);return a}function ae(A,t){if(t){let e=t.name;return e==A||!(!t.structured||!vt(e,A))||!(!t.wildcard||!wt(e,A))}return!0}function le(A,t,e,n,o){let i="string"==typeof o.method?A[o.method]:o.method,r=o.property;i?i.call(A,A.__data[r],n[r]):o.dynamicFn||console.warn("observer method `"+o.method+"` not defined")}function ce(A,t,e){let n=gt(t);if(n!==t){return de(A,Lt(n)+"-changed",e[t],t),!0}return!1}function de(A,t,e,n){let o={value:e,queueProperty:!0};n&&(o.path=n),yt(A).dispatchEvent(new CustomEvent(t,{detail:o}))}function ue(A,t,e,n,o,i){let r=(i?gt(t):t)!=t?t:null,s=r?Et(A,r):A.__data[t];r&&void 0===s&&(s=e[t]),de(A,o.eventName,s,r)}function he(A,t,e,n,o){let i=A.__data[t];MA&&(i=MA(i,o.attrName,"attribute",A)),A._propertyToAttribute(t,o.attrName,i)}function pe(A,t,e,n,o){let i=ve(A,t,e,n,o),r=o.methodInfo;A.__dataHasAccessor&&A.__dataHasAccessor[r]?A._setPendingProperty(r,i,!0):A[r]=i}function me(A,t,e,n,o,i,r){e.bindings=e.bindings||[];let s={kind:n,target:o,parts:i,literal:r,isCompound:1!==i.length};if(e.bindings.push(s),function(A){return Boolean(A.target)&&"attribute"!=A.kind&&"text"!=A.kind&&!A.isCompound&&"{"===A.parts[0].mode}(s)){let{event:A,negate:t}=s.parts[0];s.listenerEvent=A||Lt(o)+"-changed",s.listenerNegate=t}let a=t.nodeInfoList.length;for(let e=0;e<s.parts.length;e++){let n=s.parts[e];n.compoundIndex=e,fe(A,t,s,n,a)}}function fe(A,t,e,n,o){if(!n.literal)if("attribute"===e.kind&&"-"===e.target[0])console.warn("Cannot set attribute "+e.target+' because "-" is not a valid attribute starting character');else{let i=n.dependencies,r={index:o,binding:e,part:n,evaluator:A};for(let e=0;e<i.length;e++){let n=i[e];"string"==typeof n&&((n=Ee(n)).wildcard=!0),A._addTemplatePropertyEffect(t,n.rootProperty,{fn:_e,info:r,trigger:n})}}}function _e(A,t,e,n,o,i,r){let s=r[o.index],a=o.binding,l=o.part;if(i&&l.source&&t.length>l.source.length&&"property"==a.kind&&!a.isCompound&&s.__isPropertyEffectsClient&&s.__dataHasAccessor&&s.__dataHasAccessor[a.target]){let n=e[t];t=Pt(l.source,a.target,t),s._setPendingPropertyOrPath(t,n,!1,!0)&&A._enqueueClient(s)}else{!function(A,t,e,n,o){o=function(A,t,e,n){if(e.isCompound){let o=A.__dataCompoundStorage[e.target];o[n.compoundIndex]=t,t=o.join("")}"attribute"!==e.kind&&("textContent"!==e.target&&("value"!==e.target||"input"!==A.localName&&"textarea"!==A.localName)||(t=null==t?"":t));return t}(t,o,e,n),MA&&(o=MA(o,e.target,e.kind,t));if("attribute"==e.kind)A._valueToNodeAttribute(t,o,e.target);else{let n=e.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[n]?t[ne.READ_ONLY]&&t[ne.READ_ONLY][n]||t._setPendingProperty(n,o)&&A._enqueueClient(t):A._setUnmanagedPropertyToNode(t,n,o)}}(A,s,a,l,o.evaluator._evaluateBinding(A,l,t,e,n,i))}}function ye(A,t){if(t.isCompound){let e=A.__dataCompoundStorage||(A.__dataCompoundStorage={}),n=t.parts,o=new Array(n.length);for(let A=0;A<n.length;A++)o[A]=n[A].literal;let i=t.target;e[i]=o,t.literal&&"property"==t.kind&&("className"===i&&(A=yt(A)),A[i]=t.literal)}}function be(A,t,e){if(e.listenerEvent){let n=e.parts[0];A.addEventListener(e.listenerEvent,(function(A){!function(A,t,e,n,o){let i,r=A.detail,s=r&&r.path;s?(n=Pt(e,n,s),i=r&&r.value):i=A.currentTarget[e],i=o?!i:i,t[ne.READ_ONLY]&&t[ne.READ_ONLY][n]||!t._setPendingPropertyOrPath(n,i,!0,Boolean(s))||r&&r.queueProperty||t._invalidateProperties()}(A,t,e.target,n.source,n.negate)}))}}function ge(A,t,e,n,o,i){i=t.static||i&&("object"!=typeof i||i[t.methodName]);let r={methodName:t.methodName,args:t.args,methodInfo:o,dynamicFn:i};for(let o,i=0;i<t.args.length&&(o=t.args[i]);i++)o.literal||A._addPropertyEffect(o.rootProperty,e,{fn:n,info:r,trigger:o});i&&A._addPropertyEffect(t.methodName,e,{fn:n,info:r})}function ve(A,t,e,n,o){let i=A._methodHost||A,r=i[o.methodName];if(r){let n=A._marshalArgs(o.args,t,e);return r.apply(i,n)}o.dynamicFn||console.warn("method `"+o.methodName+"` not defined")}const we=[],Pe=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function xe(A){let t="";for(let e=0;e<A.length;e++){t+=A[e].literal||""}return t}function Se(A){let t=A.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let A={methodName:t[1],static:!0,args:we};if(t[2].trim()){return function(A,t){return t.args=A.map((function(A){let e=Ee(A);return e.literal||(t.static=!1),e}),this),t}(t[2].replace(/\\,/g,"&comma;").split(","),A)}return A}return null}function Ee(A){let t=A.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),e={name:t,value:"",literal:!1},n=t[0];switch("-"===n&&(n=t[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':e.value=t.slice(1,-1),e.literal=!0;break;case"#":e.value=Number(t),e.literal=!0}return e.literal||(e.rootProperty=gt(t),e.structured=bt(t),e.structured&&(e.wildcard=".*"==t.slice(-2),e.wildcard&&(e.name=t.slice(0,-2)))),e}function Ce(A,t,e){let n=Et(A,e);return void 0===n&&(n=t[e]),n}function Te(A,t,e,n){A.notifyPath(e+".splices",{indexSplices:n}),A.notifyPath(e+".length",t.length)}function Ne(A,t,e,n,o,i){Te(A,t,e,[{index:n,addedCount:o,removed:i,object:t,type:"splice"}])}const Oe=_t(A=>{const t=te(qt(A));return class extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return ne}_initializeProperties(){super._initializeProperties(),ke.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(A){this.__data=Object.create(A),this.__dataPending=Object.create(A),this.__dataOld={}}_initializeInstanceProperties(A){let t=this[ne.READ_ONLY];for(let e in A)t&&t[e]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[e]=this.__dataPending[e]=A[e])}_addPropertyEffect(A,t,e){this._createPropertyAccessor(A,t==ne.READ_ONLY);let n=ie(this,t)[A];n||(n=this[t][A]=[]),n.push(e)}_removePropertyEffect(A,t,e){let n=ie(this,t)[A],o=n.indexOf(e);o>=0&&n.splice(o,1)}_hasPropertyEffect(A,t){let e=this[t];return Boolean(e&&e[A])}_hasReadOnlyEffect(A){return this._hasPropertyEffect(A,ne.READ_ONLY)}_hasNotifyEffect(A){return this._hasPropertyEffect(A,ne.NOTIFY)}_hasReflectEffect(A){return this._hasPropertyEffect(A,ne.REFLECT)}_hasComputedEffect(A){return this._hasPropertyEffect(A,ne.COMPUTE)}_setPendingPropertyOrPath(A,t,e,n){if(n||gt(Array.isArray(A)?A[0]:A)!==A){if(!n){let e=Et(this,A);if(!(A=Ct(this,A,t))||!super._shouldPropertyChange(A,t,e))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(A,t,e))return function(A,t,e){let n=A.__dataLinkedPaths;if(n){let o;for(let i in n){let r=n[i];wt(i,t)?(o=Pt(i,r,t),A._setPendingPropertyOrPath(o,e,!0,!0)):wt(r,t)&&(o=Pt(r,i,t),A._setPendingPropertyOrPath(o,e,!0,!0))}}}(this,A,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[A])return this._setPendingProperty(A,t,e);this[A]=t}return!1}_setUnmanagedPropertyToNode(A,t,e){e===A[t]&&"object"!=typeof e||("className"===t&&(A=yt(A)),A[t]=e)}_setPendingProperty(A,t,e){let n=this.__dataHasPaths&&bt(A),o=n?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(A,t,o[A])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),A in this.__dataOld||(this.__dataOld[A]=this.__data[A]),n?this.__dataTemp[A]=t:this.__data[A]=t,this.__dataPending[A]=t,(n||this[ne.NOTIFY]&&this[ne.NOTIFY][A])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[A]=e),!0)}_setProperty(A,t){this._setPendingProperty(A,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(A){this.__dataPendingClients=this.__dataPendingClients||[],A!==this&&this.__dataPendingClients.push(A)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let A=this.__dataPendingClients;if(A){this.__dataPendingClients=null;for(let t=0;t<A.length;t++){let e=A[t];e.__dataEnabled?e.__dataPending&&e._flushProperties():e._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(A,t){for(let e in A)!t&&this[ne.READ_ONLY]&&this[ne.READ_ONLY][e]||this._setPendingPropertyOrPath(e,A[e],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(A,t,e){let n=this.__dataHasPaths;this.__dataHasPaths=!1,function(A,t,e,n){let o=A[ne.COMPUTE];if(o){let i=t;for(;re(A,o,i,e,n);)Object.assign(e,A.__dataOld),Object.assign(t,A.__dataPending),i=A.__dataPending,A.__dataPending=null}}(this,t,e,n);let o=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(t,e,n),this._flushClients(),re(this,this[ne.REFLECT],t,e,n),re(this,this[ne.OBSERVE],t,e,n),o&&function(A,t,e,n,o){let i,r,s=A[ne.NOTIFY],a=ee++;for(let r in t)t[r]&&(s&&se(A,s,a,r,e,n,o)?i=!0:o&&ce(A,r,e)&&(i=!0));i&&(r=A.__dataHost)&&r._invalidateProperties&&r._invalidateProperties()}(this,o,t,e,n),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(A,t,e){this[ne.PROPAGATE]&&re(this,this[ne.PROPAGATE],A,t,e);let n=this.__templateInfo;for(;n;)re(this,n.propertyEffects,A,t,e,n.nodeList),n=n.nextTemplateInfo}linkPaths(A,t){A=xt(A),t=xt(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[A]=t}unlinkPaths(A){A=xt(A),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[A]}notifySplices(A,t){let e={path:""};Te(this,Et(this,A,e),e.path,t)}get(A,t){return Et(t||this,A)}set(A,t,e){e?Ct(e,A,t):this[ne.READ_ONLY]&&this[ne.READ_ONLY][A]||this._setPendingPropertyOrPath(A,t,!0)&&this._invalidateProperties()}push(A,...t){let e={path:""},n=Et(this,A,e),o=n.length,i=n.push(...t);return t.length&&Ne(this,n,e.path,o,t.length,[]),i}pop(A){let t={path:""},e=Et(this,A,t),n=Boolean(e.length),o=e.pop();return n&&Ne(this,e,t.path,e.length,0,[o]),o}splice(A,t,e,...n){let o,i={path:""},r=Et(this,A,i);return t<0?t=r.length-Math.floor(-t):t&&(t=Math.floor(t)),o=2===arguments.length?r.splice(t):r.splice(t,e,...n),(n.length||o.length)&&Ne(this,r,i.path,t,n.length,o),o}shift(A){let t={path:""},e=Et(this,A,t),n=Boolean(e.length),o=e.shift();return n&&Ne(this,e,t.path,0,0,[o]),o}unshift(A,...t){let e={path:""},n=Et(this,A,e),o=n.unshift(...t);return t.length&&Ne(this,n,e.path,0,t.length,[]),o}notifyPath(A,t){let e;if(1==arguments.length){let n={path:""};t=Et(this,A,n),e=n.path}else e=Array.isArray(A)?xt(A):A;this._setPendingPropertyOrPath(e,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(A,t){var e;this._addPropertyEffect(A,ne.READ_ONLY),t&&(this["_set"+(e=A,e[0].toUpperCase()+e.substring(1))]=function(t){this._setProperty(A,t)})}_createPropertyObserver(A,t,e){let n={property:A,method:t,dynamicFn:Boolean(e)};this._addPropertyEffect(A,ne.OBSERVE,{fn:le,info:n,trigger:{name:A}}),e&&this._addPropertyEffect(t,ne.OBSERVE,{fn:le,info:n,trigger:{name:t}})}_createMethodObserver(A,t){let e=Se(A);if(!e)throw new Error("Malformed observer expression '"+A+"'");ge(this,e,ne.OBSERVE,ve,null,t)}_createNotifyingProperty(A){this._addPropertyEffect(A,ne.NOTIFY,{fn:ue,info:{eventName:Lt(A)+"-changed",property:A}})}_createReflectedProperty(A){let t=this.constructor.attributeNameForProperty(A);"-"===t[0]?console.warn("Property "+A+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(A,ne.REFLECT,{fn:he,info:{attrName:t}})}_createComputedProperty(A,t,e){let n=Se(t);if(!n)throw new Error("Malformed computed expression '"+t+"'");ge(this,n,ne.COMPUTE,pe,A,e)}_marshalArgs(A,t,e){const n=this.__data,o=[];for(let i=0,r=A.length;i<r;i++){let{name:r,structured:s,wildcard:a,value:l,literal:c}=A[i];if(!c)if(a){const A=wt(r,t),o=Ce(n,e,A?t:r);l={path:A?t:r,value:o,base:A?Et(n,r):o}}else l=s?Ce(n,e,r):n[r];o[i]=l}return o}static addPropertyEffect(A,t,e){this.prototype._addPropertyEffect(A,t,e)}static createPropertyObserver(A,t,e){this.prototype._createPropertyObserver(A,t,e)}static createMethodObserver(A,t){this.prototype._createMethodObserver(A,t)}static createNotifyingProperty(A){this.prototype._createNotifyingProperty(A)}static createReadOnlyProperty(A,t){this.prototype._createReadOnlyProperty(A,t)}static createReflectedProperty(A){this.prototype._createReflectedProperty(A)}static createComputedProperty(A,t,e){this.prototype._createComputedProperty(A,t,e)}static bindTemplate(A){return this.prototype._bindTemplate(A)}_bindTemplate(A,t){let e=this.constructor._parseTemplate(A),n=this.__templateInfo==e;if(!n)for(let A in e.propertyEffects)this._createPropertyAccessor(A);if(t&&((e=Object.create(e)).wasPreBound=n,!n&&this.__templateInfo)){let A=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=A.nextTemplateInfo=e,e.previousTemplateInfo=A,e}return this.__templateInfo=e}static _addTemplatePropertyEffect(A,t,e){(A.hostProps=A.hostProps||{})[t]=!0;let n=A.propertyEffects=A.propertyEffects||{};(n[t]=n[t]||[]).push(e)}_stampTemplate(A){ke.beginHosting(this);let t=super._stampTemplate(A);ke.endHosting(this);let e=this._bindTemplate(A,!0);if(e.nodeList=t.nodeList,!e.wasPreBound){let A=e.childNodes=[];for(let e=t.firstChild;e;e=e.nextSibling)A.push(e)}return t.templateInfo=e,function(A,t){let{nodeList:e,nodeInfoList:n}=t;if(n.length)for(let t=0;t<n.length;t++){let o=n[t],i=e[t],r=o.bindings;if(r)for(let t=0;t<r.length;t++){let e=r[t];ye(i,e),be(i,A,e)}i.__dataHost=A}}(this,e),this.__dataReady&&re(this,e.propertyEffects,this.__data,null,!1,e.nodeList),t}_removeBoundDom(A){let t=A.templateInfo;t.previousTemplateInfo&&(t.previousTemplateInfo.nextTemplateInfo=t.nextTemplateInfo),t.nextTemplateInfo&&(t.nextTemplateInfo.previousTemplateInfo=t.previousTemplateInfo),this.__templateInfoLast==t&&(this.__templateInfoLast=t.previousTemplateInfo),t.previousTemplateInfo=t.nextTemplateInfo=null;let e=t.childNodes;for(let A=0;A<e.length;A++){let t=e[A];t.parentNode.removeChild(t)}}static _parseTemplateNode(A,e,n){let o=t._parseTemplateNode.call(this,A,e,n);if(A.nodeType===Node.TEXT_NODE){let t=this._parseBindings(A.textContent,e);t&&(A.textContent=xe(t)||" ",me(this,e,n,"text","textContent",t),o=!0)}return o}static _parseTemplateNodeAttribute(A,e,n,o,i){let r=this._parseBindings(i,e);if(r){let t=o,i="property";oe.test(o)?i="attribute":"$"==o[o.length-1]&&(o=o.slice(0,-1),i="attribute");let s=xe(r);return s&&"attribute"==i&&("class"==o&&A.hasAttribute("class")&&(s+=" "+A.getAttribute(o)),A.setAttribute(o,s)),"input"===A.localName&&"value"===t&&A.setAttribute(t,""),A.removeAttribute(t),"property"===i&&(o=kt(o)),me(this,e,n,i,o,r,s),!0}return t._parseTemplateNodeAttribute.call(this,A,e,n,o,i)}static _parseTemplateNestedTemplate(A,e,n){let o=t._parseTemplateNestedTemplate.call(this,A,e,n),i=n.templateInfo.hostProps;for(let A in i){me(this,e,n,"property","_host_"+A,[{mode:"{",source:A,dependencies:[A]}])}return o}static _parseBindings(A,t){let e,n=[],o=0;for(;null!==(e=Pe.exec(A));){e.index>o&&n.push({literal:A.slice(o,e.index)});let i=e[1][0],r=Boolean(e[2]),s=e[3].trim(),a=!1,l="",c=-1;"{"==i&&(c=s.indexOf("::"))>0&&(l=s.substring(c+2),s=s.substring(0,c),a=!0);let d=Se(s),u=[];if(d){let{args:A,methodName:e}=d;for(let t=0;t<A.length;t++){let e=A[t];e.literal||u.push(e)}let n=t.dynamicFns;(n&&n[e]||d.static)&&(u.push(e),d.dynamicFn=!0)}else u.push(s);n.push({source:s,mode:i,negate:r,customEvent:a,signature:d,dependencies:u,event:l}),o=Pe.lastIndex}if(o&&o<A.length){let t=A.substring(o);t&&n.push({literal:t})}return n.length?n:null}static _evaluateBinding(A,t,e,n,o,i){let r;return r=t.signature?ve(A,e,n,0,t.signature):e!=t.source?Et(A,t.source):i&&bt(e)?Et(A,e):A.__data[e],t.negate&&(r=!r),r}}});const ke=new class{constructor(){this.stack=[]}registerHost(A){if(this.stack.length){this.stack[this.stack.length-1]._enqueueClient(A)}}beginHosting(A){this.stack.push(A)}endHosting(A){let t=this.stack.length;t&&this.stack[t-1]==A&&this.stack.pop()}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Le=[];const Ie=_t(A=>{const t=Yt(A);function e(A){const t=Object.getPrototypeOf(A);return t.prototype instanceof o?t:null}function n(A){if(!A.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",A))){let t=null;if(A.hasOwnProperty(JSCompiler_renameProperty("properties",A))){const e=A.properties;e&&(t=
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function(A){const t={};for(let e in A){const n=A[e];t[e]="function"==typeof n?{type:n}:n}return t}(e))}A.__ownProperties=t}return A.__ownProperties}class o extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){A=this.prototype,Le.push(A);const t=this._properties;this.__observedAttributes=t?Object.keys(t).map(A=>this.attributeNameForProperty(A)):[]}var A;return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const A=e(this);A&&A.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const A=n(this);A&&this.createProperties(A)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const A=e(this);this.__properties=Object.assign({},A&&A._properties,n(this))}return this.__properties}static typeForProperty(A){const t=this._properties[A];return t&&t.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return o}),Me="3.3.1",ze=window.ShadyCSS&&window.ShadyCSS.cssBuild,De=_t(A=>{const t=Ie(Oe(A));function e(A,t,e,n){e.computed&&(e.readOnly=!0),e.computed&&(A._hasReadOnlyEffect(t)?console.warn(`Cannot redefine computed property '${t}'.`):A._createComputedProperty(t,e.computed,n)),e.readOnly&&!A._hasReadOnlyEffect(t)?A._createReadOnlyProperty(t,!e.computed):!1===e.readOnly&&A._hasReadOnlyEffect(t)&&console.warn(`Cannot make readOnly property '${t}' non-readOnly.`),e.reflectToAttribute&&!A._hasReflectEffect(t)?A._createReflectedProperty(t):!1===e.reflectToAttribute&&A._hasReflectEffect(t)&&console.warn(`Cannot make reflected property '${t}' non-reflected.`),e.notify&&!A._hasNotifyEffect(t)?A._createNotifyingProperty(t):!1===e.notify&&A._hasNotifyEffect(t)&&console.warn(`Cannot make notify property '${t}' non-notify.`),e.observer&&A._createPropertyObserver(t,e.observer,n[e.observer]),A._addPropertyToAttributeMap(t)}function n(A,t,e,n){if(!ze){const o=t.content.querySelectorAll("style"),i=KA(t),r=function(A){let t=QA(A);return t?At(t):[]}(e),s=t.content.firstElementChild;for(let e=0;e<r.length;e++){let o=r[e];o.textContent=A._processStyleText(o.textContent,n),t.content.insertBefore(o,s)}let a=0;for(let t=0;t<i.length;t++){let e=i[t],r=o[a];r!==e?(e=e.cloneNode(!0),r.parentNode.insertBefore(e,r)):a++,e.textContent=A._processStyleText(e.textContent,n)}}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,e)}return class extends t{static get polymerElementVersion(){return Me}static _finalizeClass(){t._finalizeClass.call(this);const A=((e=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",e))||(e.__ownObservers=e.hasOwnProperty(JSCompiler_renameProperty("observers",e))?e.observers:null),e.__ownObservers);var e;A&&this.createObservers(A,this._properties),this._prepareTemplate()}static _prepareTemplate(){let A=this.template;A&&("string"==typeof A?(console.error("template getter must return HTMLTemplateElement"),A=null):HA||(A=A.cloneNode(!0))),this.prototype._template=A}static createProperties(A){for(let t in A)e(this.prototype,t,A[t],A)}static createObservers(A,t){const e=this.prototype;for(let n=0;n<A.length;n++)e._createMethodObserver(A[n],t)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:function(A){let t=null;if(A&&(!DA||RA)&&(t=qA.import(A,"template"),DA&&!t))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${A}`);return t}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static set template(A){this._template=A}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const A=this.importMeta;if(A)this._importPath=LA(A.url);else{const A=qA.import(this.is);this._importPath=A&&A.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=IA,this.importPath=this.constructor.importPath;let A=function(A){if(!A.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",A))){A.__propertyDefaults=null;let t=A._properties;for(let e in t){let n=t[e];"value"in n&&(A.__propertyDefaults=A.__propertyDefaults||{},A.__propertyDefaults[e]=n)}}return A.__propertyDefaults}(this.constructor);if(A)for(let t in A){let e=A[t];if(!this.hasOwnProperty(t)){let A="function"==typeof e.value?e.value.call(this):e.value;this._hasAccessor(t)?this._setPendingProperty(t,A,!0):this[t]=A}}}static _processStyleText(A,t){return kA(A,t)}static _finalizeTemplate(A){const t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;const e=this.importPath;n(this,t,A,e?OA(e):""),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(A){const t=yt(this);if(t.attachShadow)return A?(t.shadowRoot||(t.attachShadow({mode:"open",shadyUpgradeFragment:A}),t.shadowRoot.appendChild(A)),BA&&window.ShadyDOM&&window.ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(A){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,A)}resolveUrl(A,t){return!t&&this.importPath&&(t=OA(this.importPath)),OA(A,t)}static _parseTemplateContent(A,e,n){return e.dynamicFns=e.dynamicFns||this._properties,t._parseTemplateContent.call(this,A,e,n)}static _addTemplatePropertyEffect(A,e,n){return!HA||e in this._properties||console.warn(`Property '${e}' used in template but not declared in 'properties'; `+"attribute will not be observed."),t._addTemplatePropertyEffect.call(this,A,e,n)}}})(HTMLElement);
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class Re{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(A,t){this._asyncModule=A,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,He.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),He.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(A,t,e){return A instanceof Re?A._cancelAsync():A=new Re,A.setConfig(t,e),A}}let He=new Set;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Be="string"==typeof document.head.style.touchAction,Fe="__polymerGestures",je="__polymerGesturesHandled",Ye="__polymerGesturesTouchAction",Ve=25,We=5,qe=2500,Je=["mousedown","mousemove","mouseup","click"],Ze=[0,1,4,2],Ue=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(A){return!1}}();function Qe(A){return Je.indexOf(A)>-1}let Xe=!1;function Ge(A){if(!Qe(A)&&"touchend"!==A)return Be&&Xe&&zA?{passive:!0}:void 0}!function(){try{let A=Object.defineProperty({},"passive",{get(){Xe=!0}});window.addEventListener("test",null,A),window.removeEventListener("test",null,A)}catch(A){}}();let $e=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const Ke=[],An={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},tn={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function en(A){let t=Array.prototype.slice.call(A.labels||[]);if(!t.length){t=[];let e=A.getRootNode();if(A.id){let n=e.querySelectorAll(`label[for = ${A.id}]`);for(let A=0;A<n.length;A++)t.push(n[A])}}return t}let nn=function(A){let t=A.sourceCapabilities;var e;if((!t||t.firesTouchEvents)&&(A[je]={skip:!0},"click"===A.type)){let t=!1,n=cn(A);for(let A=0;A<n.length;A++){if(n[A].nodeType===Node.ELEMENT_NODE)if("label"===n[A].localName)Ke.push(n[A]);else if(e=n[A],An[e.localName]){let e=en(n[A]);for(let A=0;A<e.length;A++)t=t||Ke.indexOf(e[A])>-1}if(n[A]===sn.mouse.target)return}if(t)return;A.preventDefault(),A.stopPropagation()}};function on(A){let t=$e?["click"]:Je;for(let e,n=0;n<t.length;n++)e=t[n],A?(Ke.length=0,document.addEventListener(e,nn,!0)):document.removeEventListener(e,nn,!0)}function rn(A){let t=A.type;if(!Qe(t))return!1;if("mousemove"===t){let t=void 0===A.buttons?1:A.buttons;return A instanceof window.MouseEvent&&!Ue&&(t=Ze[A.which]||0),Boolean(1&t)}return 0===(void 0===A.button?0:A.button)}let sn={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function an(A,t,e){A.movefn=t,A.upfn=e,document.addEventListener("mousemove",t),document.addEventListener("mouseup",e)}function ln(A){document.removeEventListener("mousemove",A.movefn),document.removeEventListener("mouseup",A.upfn),A.movefn=null,A.upfn=null}FA&&document.addEventListener("touchend",(function(A){if(!FA)return;sn.mouse.mouseIgnoreJob||on(!0),sn.mouse.target=cn(A)[0],sn.mouse.mouseIgnoreJob=Re.debounce(sn.mouse.mouseIgnoreJob,Ht.after(qe),(function(){on(),sn.mouse.target=null,sn.mouse.mouseIgnoreJob=null}))}),!!Xe&&{passive:!0});const cn=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:A=>A.composedPath&&A.composedPath()||[],dn={},un=[];function hn(A){const t=cn(A);return t.length>0?t[0]:A.target}function pn(A){let t,e=A.type,n=A.currentTarget[Fe];if(!n)return;let o=n[e];if(o){if(!A[je]&&(A[je]={},"touch"===e.slice(0,5))){let t=(A=A).changedTouches[0];if("touchstart"===e&&1===A.touches.length&&(sn.touch.id=t.identifier),sn.touch.id!==t.identifier)return;Be||"touchstart"!==e&&"touchmove"!==e||function(A){let t=A.changedTouches[0],e=A.type;if("touchstart"===e)sn.touch.x=t.clientX,sn.touch.y=t.clientY,sn.touch.scrollDecided=!1;else if("touchmove"===e){if(sn.touch.scrollDecided)return;sn.touch.scrollDecided=!0;let e=function(A){let t="auto",e=cn(A);for(let A,n=0;n<e.length;n++)if((A=e[n])[Ye]){t=A[Ye];break}return t}(A),n=!1,o=Math.abs(sn.touch.x-t.clientX),i=Math.abs(sn.touch.y-t.clientY);A.cancelable&&("none"===e?n=!0:"pan-x"===e?n=i>o:"pan-y"===e&&(n=o>i)),n?A.preventDefault():bn("track")}}(A)}if(!(t=A[je]).skip){for(let e,n=0;n<un.length;n++)o[(e=un[n]).name]&&!t[e.name]&&e.flow&&e.flow.start.indexOf(A.type)>-1&&e.reset&&e.reset();for(let n,i=0;i<un.length;i++)o[(n=un[i]).name]&&!t[n.name]&&(t[n.name]=!0,n[e](A))}}}function mn(A,t,e){return!!dn[t]&&(function(A,t,e){let n=dn[t],o=n.deps,i=n.name,r=A[Fe];r||(A[Fe]=r={});for(let t,e,n=0;n<o.length;n++)t=o[n],$e&&Qe(t)&&"click"!==t||((e=r[t])||(r[t]=e={_count:0}),0===e._count&&A.addEventListener(t,pn,Ge(t)),e[i]=(e[i]||0)+1,e._count=(e._count||0)+1);A.addEventListener(t,e),n.touchAction&&function(A,t){Be&&A instanceof HTMLElement&&Ft.run(()=>{A.style.touchAction=t});A[Ye]=t}(A,n.touchAction)}(A,t,e),!0)}function fn(A,t,e){return!!dn[t]&&(function(A,t,e){let n=dn[t],o=n.deps,i=n.name,r=A[Fe];if(r)for(let t,e,n=0;n<o.length;n++)t=o[n],(e=r[t])&&e[i]&&(e[i]=(e[i]||1)-1,e._count=(e._count||1)-1,0===e._count&&A.removeEventListener(t,pn,Ge(t)));A.removeEventListener(t,e)}(A,t,e),!0)}function _n(A){un.push(A);for(let t=0;t<A.emits.length;t++)dn[A.emits[t]]=A}function yn(A,t,e){let n=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=e,yt(A).dispatchEvent(n),n.defaultPrevented){let A=e.preventer||e.sourceEvent;A&&A.preventDefault&&A.preventDefault()}}function bn(A){let t=function(A){for(let t,e=0;e<un.length;e++){t=un[e];for(let e,n=0;n<t.emits.length;n++)if((e=t.emits[n])===A)return t}return null}(A);t.info&&(t.info.prevent=!0)}function gn(A,t,e,n){t&&yn(t,A,{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:n,prevent:function(A){return bn(A)}})}function vn(A,t,e){if(A.prevent)return!1;if(A.started)return!0;let n=Math.abs(A.x-t),o=Math.abs(A.y-e);return n>=We||o>=We}function wn(A,t,e){if(!t)return;let n,o=A.moves[A.moves.length-2],i=A.moves[A.moves.length-1],r=i.x-A.x,s=i.y-A.y,a=0;o&&(n=i.x-o.x,a=i.y-o.y),yn(t,"track",{state:A.state,x:e.clientX,y:e.clientY,dx:r,dy:s,ddx:n,ddy:a,sourceEvent:e,hover:function(){return function(A,t){let e=document.elementFromPoint(A,t),n=e;for(;n&&n.shadowRoot&&!window.ShadyDOM;){if(n===(n=n.shadowRoot.elementFromPoint(A,t)))break;n&&(e=n)}return e}(e.clientX,e.clientY)}})}function Pn(A,t,e){let n=Math.abs(t.clientX-A.x),o=Math.abs(t.clientY-A.y),i=hn(e||t);!i||tn[i.localName]&&i.hasAttribute("disabled")||(isNaN(n)||isNaN(o)||n<=Ve&&o<=Ve||function(A){if("click"===A.type){if(0===A.detail)return!0;let t=hn(A);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let e=t.getBoundingClientRect(),n=A.pageX,o=A.pageY;return!(n>=e.left&&n<=e.right&&o>=e.top&&o<=e.bottom)}return!1}(t))&&(A.prevent||yn(i,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:e}))}_n({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){ln(this.info)},mousedown:function(A){if(!rn(A))return;let t=hn(A),e=this;an(this.info,(function(A){rn(A)||(gn("up",t,A),ln(e.info))}),(function(A){rn(A)&&gn("up",t,A),ln(e.info)})),gn("down",t,A)},touchstart:function(A){gn("down",hn(A),A.changedTouches[0],A)},touchend:function(A){gn("up",hn(A),A.changedTouches[0],A)}}),_n({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(A){this.moves.length>2&&this.moves.shift(),this.moves.push(A)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,ln(this.info)},mousedown:function(A){if(!rn(A))return;let t=hn(A),e=this,n=function(A){let n=A.clientX,o=A.clientY;vn(e.info,n,o)&&(e.info.state=e.info.started?"mouseup"===A.type?"end":"track":"start","start"===e.info.state&&bn("tap"),e.info.addMove({x:n,y:o}),rn(A)||(e.info.state="end",ln(e.info)),t&&wn(e.info,t,A),e.info.started=!0)};an(this.info,n,(function(A){e.info.started&&n(A),ln(e.info)})),this.info.x=A.clientX,this.info.y=A.clientY},touchstart:function(A){let t=A.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(A){let t=hn(A),e=A.changedTouches[0],n=e.clientX,o=e.clientY;vn(this.info,n,o)&&("start"===this.info.state&&bn("tap"),this.info.addMove({x:n,y:o}),wn(this.info,t,e),this.info.state="track",this.info.started=!0)},touchend:function(A){let t=hn(A),e=A.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:e.clientX,y:e.clientY}),wn(this.info,t,e))}}),_n({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(A){rn(A)&&(this.info.x=A.clientX,this.info.y=A.clientY)},click:function(A){rn(A)&&Pn(this.info,A)},touchstart:function(A){const t=A.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(A){Pn(this.info,A.changedTouches[0],A)}});const xn=_t(A=>{return class extends A{_addEventListenerToNode(A,t,e){mn(A,t,e)||super._addEventListenerToNode(A,t,e)}_removeEventListenerFromNode(A,t,e){fn(A,t,e)||super._removeEventListenerFromNode(A,t,e)}}}),Sn=A=>(class extends A{static get properties(){return{theme:{type:String,readOnly:!0}}}attributeChangedCallback(A,t,e){super.attributeChangedCallback(A,t,e),"theme"===A&&this._setTheme(e)}}),En=A=>(class extends(Sn(A)){static finalize(){super.finalize();const A=this.prototype._template,t=this.template&&this.template.parentElement&&this.template.parentElement.id===this.is,e=Object.getPrototypeOf(this.prototype)._template;e&&!t&&Array.from(e.content.querySelectorAll("style[include]")).forEach(t=>{this._includeStyle(t.getAttribute("include"),A)}),this._includeMatchingThemes(A)}static _includeMatchingThemes(A){const t=qA.prototype.modules;let e=!1;const n=this.is+"-default-theme";Object.keys(t).sort((A,t)=>{const e=0===A.indexOf("vaadin-"),n=0===t.indexOf("vaadin-"),o=["lumo-","material-"],i=o.filter(t=>0===A.indexOf(t)).length>0,r=o.filter(A=>0===t.indexOf(A)).length>0;return e!==n?e?-1:1:i!==r?i?-1:1:0}).forEach(o=>{if(o!==n){const n=t[o].getAttribute("theme-for");n&&n.split(" ").forEach(t=>{new RegExp("^"+t.split("*").join(".*")+"$").test(this.is)&&(e=!0,this._includeStyle(o,A))})}}),!e&&t[n]&&this._includeStyle(n,A)}static _includeStyle(A,t){if(t&&!t.content.querySelector(`style[include="${A}"]`)){const e=document.createElement("style");e.setAttribute("include",A),t.content.appendChild(e)}}}),Cn=A=>(class extends((A=>(class extends A{static get properties(){var A={tabindex:{type:Number,value:0,reflectToAttribute:!0,observer:"_tabindexChanged"}};return window.ShadyDOM&&(A.tabIndex=A.tabindex),A}}))(A)){static get properties(){return{autofocus:{type:Boolean},_previousTabIndex:{type:Number},disabled:{type:Boolean,observer:"_disabledChanged",reflectToAttribute:!0},_isShiftTabbing:{type:Boolean}}}ready(){this.addEventListener("focusin",A=>{A.composedPath()[0]===this?this._focus(A):-1===A.composedPath().indexOf(this.focusElement)||this.disabled||this._setFocused(!0)}),this.addEventListener("focusout",A=>this._setFocused(!1)),super.ready();const A=A=>{A.composed||A.target.dispatchEvent(new CustomEvent(A.type,{bubbles:!0,composed:!0,cancelable:!1}))};this.shadowRoot.addEventListener("focusin",A),this.shadowRoot.addEventListener("focusout",A),this.addEventListener("keydown",A=>{if(!A.defaultPrevented&&9===A.keyCode)if(A.shiftKey)this._isShiftTabbing=!0,HTMLElement.prototype.focus.apply(this),this._setFocused(!1),setTimeout(()=>this._isShiftTabbing=!1,0);else{const A=window.navigator.userAgent.match(/Firefox\/(\d\d\.\d)/);if(A&&parseFloat(A[1])>=63&&parseFloat(A[1])<66&&this.parentNode&&this.nextSibling){const A=document.createElement("input");A.style.position="absolute",A.style.opacity=0,A.tabIndex=this.tabIndex,this.parentNode.insertBefore(A,this.nextSibling),A.focus(),A.addEventListener("focusout",()=>this.parentNode.removeChild(A))}}}),!this.autofocus||this.focused||this.disabled||window.requestAnimationFrame(()=>{this._focus(),this._setFocused(!0),this.setAttribute("focus-ring","")}),this._boundKeydownListener=this._bodyKeydownListener.bind(this),this._boundKeyupListener=this._bodyKeyupListener.bind(this)}connectedCallback(){super.connectedCallback(),document.body.addEventListener("keydown",this._boundKeydownListener,!0),document.body.addEventListener("keyup",this._boundKeyupListener,!0)}disconnectedCallback(){super.disconnectedCallback(),document.body.removeEventListener("keydown",this._boundKeydownListener,!0),document.body.removeEventListener("keyup",this._boundKeyupListener,!0),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(A){A?this.setAttribute("focused",""):this.removeAttribute("focused"),A&&this._tabPressed?this.setAttribute("focus-ring",""):this.removeAttribute("focus-ring")}_bodyKeydownListener(A){this._tabPressed=9===A.keyCode}_bodyKeyupListener(){this._tabPressed=!1}get focusElement(){return window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`),this}_focus(A){this._isShiftTabbing||(this.focusElement.focus(),this._setFocused(!0))}focus(){this.focusElement&&!this.disabled&&(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement.blur(),this._setFocused(!1)}_disabledChanged(A){this.focusElement.disabled=A,A?(this.blur(),this._previousTabIndex=this.tabindex,this.tabindex=-1,this.setAttribute("aria-disabled","true")):(void 0!==this._previousTabIndex&&(this.tabindex=this._previousTabIndex),this.removeAttribute("aria-disabled"))}_tabindexChanged(A){void 0!==A&&(this.focusElement.tabIndex=A),this.disabled&&this.tabindex&&(-1!==this.tabindex&&(this._previousTabIndex=this.tabindex),this.tabindex=A=void 0),window.ShadyDOM&&this.setProperties({tabIndex:A,tabindex:A})}click(){this.disabled||super.click()}}),Tn=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Nn=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function On(A,t){if("function"!=typeof A)return;const e=Tn.exec(A.toString());if(e)try{A=new Function(e[1])}catch(A){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",A)}return A(t)}window.Vaadin=window.Vaadin||{};const kn=function(A,t){if(window.Vaadin.developmentMode)return On(A,t)};function Ln(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(Nn?!function(){if(Nn){if(Object.keys(Nn).map(A=>Nn[A]).filter(A=>A.productionMode).length>0)return!0}return!1}():!On((function(){return!0})))}catch(A){return!1}}());const In=function(){return kn(Ln)};let Mn;window.Vaadin||(window.Vaadin={}),window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{},window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){In&&In()};const zn=new Set,Dn=A=>(class extends A{static finalize(){super.finalize();const{is:A}=this;var t;A&&!zn.has(A)&&(window.Vaadin.registrations.push(this),zn.add(A),window.Vaadin.developmentModeCallback&&(Mn=Re.debounce(Mn,Bt,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),t=Mn,He.add(t)))}constructor(){super(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}});
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class Rn extends(Dn(Cn(En(xn(De))))){static get template(){return ht`
    <style>
      :host {
        display: inline-block;
        position: relative;
        outline: none;
        white-space: nowrap;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Ensure the button is always aligned on the baseline */
      .vaadin-button-container::before {
        content: "\\2003";
        display: inline-block;
        width: 0;
      }

      .vaadin-button-container {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 100%;
        min-height: inherit;
        text-shadow: inherit;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      [part="prefix"],
      [part="suffix"] {
        flex: none;
      }

      [part="label"] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      #button {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
      }
    </style>
    <div class="vaadin-button-container">
      <div part="prefix">
        <slot name="prefix"></slot>
      </div>
      <div part="label">
        <slot></slot>
      </div>
      <div part="suffix">
        <slot name="suffix"></slot>
      </div>
    </div>
    <button id="button" type="button"></button>
`}static get is(){return"vaadin-button"}static get version(){return"2.2.1"}ready(){super.ready(),this.setAttribute("role","button"),this.$.button.setAttribute("role","presentation"),this._addActiveListeners()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this.removeAttribute("active")}_addActiveListeners(){mn(this,"down",()=>!this.disabled&&this.setAttribute("active","")),mn(this,"up",()=>this.removeAttribute("active")),this.addEventListener("keydown",A=>!this.disabled&&[13,32].indexOf(A.keyCode)>=0&&this.setAttribute("active","")),this.addEventListener("keyup",()=>this.removeAttribute("active")),this.addEventListener("blur",()=>this.removeAttribute("active"))}get focusElement(){return this.$.button}}customElements.define(Rn.is,Rn);customElements.define("buddhi-editor",class extends rA{static get properties(){return{buddhidummyImg:String}}constructor(){super(),this.buddhidummyImg=sA}render(){return D`
        <div class="buddhi--post-title">
            <input type="text" class="buddhi--post-title-input" placeholder="Post Title">
        <div>
        <div class="buddhi--editor-tools">
        <button class="material-icons buddhi--bold-button" @click="${this.formatBold}">format_bold</button>
        <button class="material-icons buddhi--italic-button" @click="${this.formatItalic}">format_italic</button>
        <button class="material-icons buddhi--underline-button" @click="${this.formatUnderline}">format_underline</button>
        <button class="material-icons buddhi--strikethrough-button" @click="${this.formatStrikethrough}">strikethrough_s</button>
        <button class="material-icons buddhi--align-left-button" @click="${this.formatAlignLeft}">format_align_left</button>
        <button class="material-icons buddhi--align-right-button" @click="${this.formatAlignRight}">format_align_right</button>
        <button class="material-icons buddhi--align-center-button" @click="${this.formatAlignCenter}">format_align_center</button>
        <button class="material-icons buddhi--align-justify-button" @click="${this.formatAlignJustify}">format_align_justify</button>
        <button class="material-icons buddhi--list-bullet-button" @click="${this.formatListBullet}">format_list_bulleted</button>
        <button class="material-icons buddhi--list-number-button" @click="${this.formatListNumber}">format_list_numbered</button>
        <span class="buddhi--toolbar-seperator"></span>
        <button class="material-icons buddhi--toolbar-label">title</button>
        <button class="material-icons buddhi--title-button" @click="${A=>this.formatTitle(1)}">filter_1</button>
        <button class="material-icons buddhi--title-button" @click="${A=>this.formatTitle(2)}">filter_2</button>
        <button class="material-icons buddhi--title-button" @click="${A=>this.formatTitle(3)}">filter_3</button>
        <button class="material-icons buddhi--title-button" @click="${A=>this.formatTitle(4)}">filter_4</button>
        <button class="material-icons buddhi--title-button" @click="${A=>this.formatTitle(5)}">filter_5</button>
        <button class="material-icons buddhi--title-button" @click="${A=>this.formatTitle(6)}">filter_6</button> 
        <span class="buddhi--toolbar-seperator"></span>
        <button class="material-icons buddhi--insert-link-button" @click="${this.insertLink}">insert_link</button>
        <button class="material-icons buddhi--insert-photo-button" @click="${this.insertPhotoFromURL}">insert_photo</button>

    </div>
    <div class="center">
        <div class="buddhi--editor" contenteditable>
        </div>
    </div>
    <div class="buddhi--image-uploader-overlay">
        <div class="buddhi--image-uploader-popup">
            <input id="buddhi--upload-file" type="file"><br>
            <img class="buddhi--image-uploader-preview" src="${this.buddhidummyImg}" height="200" alt="Image preview...">
            <vaadin-button theme="primary" id="buddhi--insert-file"><span>Insert Image</span></vaadin-button>
            <vaadin-button id="buddhi--cancel-btn">Cancel</vaadin-button>
        </div>
    </div>
        `}formatBold(){document.querySelector(".buddhi--bold-button").blur(),document.execCommand("bold",!1,"")}formatItalic(){document.querySelector(".buddhi--italic-button").blur(),document.execCommand("italic",!1,"")}formatUnderline(){document.querySelector(".buddhi--underline-button").blur(),document.execCommand("underline",!1,"")}formatStrikethrough(){document.querySelector(".buddhi--strikethrough-button").blur(),document.execCommand("strikethrough",!1,"")}formatAlignLeft(){document.querySelector(".buddhi--align-left-button").blur(),document.execCommand("justifyLeft",!1,"")}formatAlignRight(){document.querySelector(".buddhi--align-right-button").blur(),document.execCommand("justifyRight",!1,"")}formatAlignCenter(){document.querySelector(".buddhi--align-center-button").blur(),document.execCommand("justifyCenter",!1,"")}formatAlignJustify(){document.querySelector(".buddhi--align-justify-button").blur(),document.execCommand("justifyFull",!1,"")}formatListBullet(){document.querySelector(".buddhi--list-bullet-button").blur(),document.execCommand("insertUnorderedList",!1,"")}formatListNumber(){document.querySelector(".buddhi--list-number-button").blur(),document.execCommand("insertOrderedList",!1,"")}formatTitle(A){document.querySelector(".buddhi--title-button").blur(),document.execCommand("formatBlock",!1,"<h"+A+">")}insertLink(){document.querySelector(".buddhi--insert-link-button").blur();var A=prompt("Enter the URL");document.execCommand("createLink",!1,A)}insertPhotoFromURL(){const A=this.querySelector(".buddhi--image-uploader-overlay"),t=A.querySelector("#buddhi--upload-file"),e=A.querySelector("#buddhi--insert-file"),n=A.querySelector("#buddhi--cancel-btn"),o=A.querySelector("img");let i="";A.style.display="block",t.onchange=()=>{var t=A.querySelector("input[type=file]").files[0],e=new FileReader;e.addEventListener("load",(function(){i=e.result,o.src=i}),!1),t&&e.readAsDataURL(t)},e.onclick=()=>{this.editorFocus(this.querySelector(".buddhi--editor")),document.execCommand("insertImage",!1,i),A.style.display="none",o.src=this.bldummyImg},n.onclick=()=>{A.style.display="none",this.editorFocus(this.querySelector(".buddhi--editor")),o.src=this.bldummyImg}}getEditorData(){return{title:this.querySelector(".buddhi--post-title-input").value,content:this.querySelector(".buddhi--editor").innerHTML}}getEditorData(A,t){this.querySelector(".buddhi--post-title-input").value=A,this.querySelector(".buddhi--editor").innerHTML=t,this.editorFocus(this.querySelector(".buddhi--editor"))}editorFocus(A){if(A.focus(),void 0!==window.getSelection&&void 0!==document.createRange){var t=document.createRange();t.selectNodeContents(A),t.collapse(!1);var e=window.getSelection();e.removeAllRanges(),e.addRange(t)}else if(void 0!==document.body.createTextRange){var n=document.body.createTextRange();n.moveToElementText(A),n.collapse(!1),n.select()}}createRenderRoot(){return this}});e(0)}]);