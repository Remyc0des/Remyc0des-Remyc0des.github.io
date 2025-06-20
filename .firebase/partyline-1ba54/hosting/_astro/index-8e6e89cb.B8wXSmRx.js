const Go=()=>{};var yr={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=function(i){const e=[];let n=0;for(let r=0;r<i.length;r++){let o=i.charCodeAt(r);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&r+1<i.length&&(i.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++r)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},Ko=function(i){const e=[];let n=0,r=0;for(;n<i.length;){const o=i[n++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const c=i[n++];e[r++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=i[n++],h=i[n++],p=i[n++],v=((o&7)<<18|(c&63)<<12|(h&63)<<6|p&63)-65536;e[r++]=String.fromCharCode(55296+(v>>10)),e[r++]=String.fromCharCode(56320+(v&1023))}else{const c=i[n++],h=i[n++];e[r++]=String.fromCharCode((o&15)<<12|(c&63)<<6|h&63)}}return e.join("")},ls={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<i.length;o+=3){const c=i[o],h=o+1<i.length,p=h?i[o+1]:0,v=o+2<i.length,w=v?i[o+2]:0,S=c>>2,C=(c&3)<<4|p>>4;let A=(p&15)<<2|w>>6,M=w&63;v||(M=64,h||(A=64)),r.push(n[S],n[C],n[A],n[M])}return r.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(cs(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Ko(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<i.length;){const c=n[i.charAt(o++)],p=o<i.length?n[i.charAt(o)]:0;++o;const w=o<i.length?n[i.charAt(o)]:64;++o;const C=o<i.length?n[i.charAt(o)]:64;if(++o,c==null||p==null||w==null||C==null)throw new qo;const A=c<<2|p>>4;if(r.push(A),w!==64){const M=p<<4&240|w>>2;if(r.push(M),C!==64){const P=w<<6&192|C;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class qo extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jo=function(i){const e=cs(i);return ls.encodeByteArray(e,!0)},rn=function(i){return Jo(i).replace(/\./g,"")},hs=function(i){try{return ls.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo=()=>Xo().__FIREBASE_DEFAULTS__,Zo=()=>{if(typeof process>"u"||typeof yr>"u")return;const i=yr.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Qo=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&hs(i[1]);return e&&JSON.parse(e)},oi=()=>{try{return Go()||Yo()||Zo()||Qo()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},us=i=>{var e,n;return(n=(e=oi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[i]},ea=i=>{const e=us(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ds=()=>{var i;return(i=oi())===null||i===void 0?void 0:i.config},fs=i=>{var e;return(e=oi())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(i){return i.endsWith(".cloudworkstations.dev")}async function ps(i){return(await fetch(i,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",o=i.iat||0,c=i.sub||i.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},i);return[rn(JSON.stringify(n)),rn(JSON.stringify(h)),""].join(".")}const It={};function ia(){const i={prod:[],emulator:[]};for(const e of Object.keys(It))It[e]?i.emulator.push(e):i.prod.push(e);return i}function ra(i){let e=document.getElementById(i),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),n=!0),{created:n,element:e}}let Ir=!1;function gs(i,e){if(typeof window>"u"||typeof document>"u"||!Ct(window.location.host)||It[i]===e||It[i]||Ir)return;It[i]=e;function n(A){return`__firebase__banner__${A}`}const r="__firebase__banner",c=ia().prod.length>0;function h(){const A=document.getElementById(r);A&&A.remove()}function p(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function v(A,M){A.setAttribute("width","24"),A.setAttribute("id",M),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function w(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{Ir=!0,h()},A}function S(A,M){A.setAttribute("id",M),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function C(){const A=ra(r),M=n("text"),P=document.getElementById(M)||document.createElement("span"),U=n("learnmore"),D=document.getElementById(U)||document.createElement("a"),Q=n("preprendIcon"),j=document.getElementById(Q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const F=A.element;p(F),S(D,U);const Z=w();v(j,Q),F.append(j,P,D,Z),document.body.appendChild(F)}c?(P.innerText="Preview backend disconnected.",j.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(j.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",M)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",C):C()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(q())}function oa(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function aa(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function ca(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function la(){const i=q();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function ha(){try{return typeof indexedDB=="object"}catch{return!1}}function ua(){return new Promise((i,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),i(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var c;e(((c=o.error)===null||c===void 0?void 0:c.message)||"")}}catch(n){e(n)}})}function au(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da="FirebaseError";class me extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=da,Object.setPrototypeOf(this,me.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pt.prototype.create)}}class Pt{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},o=`${this.service}/${e}`,c=this.errors[e],h=c?fa(c,r):"Error",p=`${this.serviceName}: ${h} (${o}).`;return new me(o,p,r)}}function fa(i,e){return i.replace(pa,(n,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const pa=/\{\$([^}]+)}/g;function ga(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Ue(i,e){if(i===e)return!0;const n=Object.keys(i),r=Object.keys(e);for(const o of n){if(!r.includes(o))return!1;const c=i[o],h=e[o];if(Er(c)&&Er(h)){if(!Ue(c,h))return!1}else if(c!==h)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function Er(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(i){const e=[];for(const[n,r]of Object.entries(i))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function vt(i){const e={};return i.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[o,c]=r.split("=");e[decodeURIComponent(o)]=decodeURIComponent(c)}}),e}function yt(i){const e=i.indexOf("?");if(!e)return"";const n=i.indexOf("#",e);return i.substring(e,n>0?n:void 0)}function ma(i,e){const n=new _a(i,e);return n.subscribe.bind(n)}class _a{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let o;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");va(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:r},o.next===void 0&&(o.next=Hn),o.error===void 0&&(o.error=Hn),o.complete===void 0&&(o.complete=Hn);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function va(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function Hn(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya=1e3,Ia=2,Ea=4*60*60*1e3,wa=.5;function cu(i,e=ya,n=Ia){const r=e*Math.pow(n,i),o=Math.round(wa*r*(Math.random()-.5)*2);return Math.min(Ea,r+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(i){return i&&i._delegate?i._delegate:i}class xe{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ta;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e?.identifier),o=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(c){if(o)return null;throw c}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Sa(e))try{this.getOrInitializeService({instanceIdentifier:Me})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:o});r.resolve(c)}catch{}}}}clearInstance(e=Me){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Me){return this.instances.has(e)}getOptions(e=Me){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[c,h]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(c);r===p&&h.resolve(o)}return o}onInit(e,n){var r;const o=this.normalizeInstanceIdentifier(n),c=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;c.add(e),this.onInitCallbacks.set(o,c);const h=this.instances.get(o);return h&&e(h,o),()=>{c.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const o of r)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Aa(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Me){return this.component?this.component.multipleInstances?e:Me:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Aa(i){return i===Me?void 0:i}function Sa(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ta(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var O;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(O||(O={}));const Ca={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},Pa=O.INFO,Ra={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},ka=(i,e,...n)=>{if(e<i.logLevel)return;const r=new Date().toISOString(),o=Ra[e];if(o)console[o](`[${r}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ai{constructor(e){this.name=e,this._logLevel=Pa,this._logHandler=ka,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in O))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ca[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...e),this._logHandler(this,O.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...e),this._logHandler(this,O.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,O.INFO,...e),this._logHandler(this,O.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,O.WARN,...e),this._logHandler(this,O.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...e),this._logHandler(this,O.ERROR,...e)}}const Oa=(i,e)=>e.some(n=>i instanceof n);let wr,Tr;function Da(){return wr||(wr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Na(){return Tr||(Tr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ms=new WeakMap,Xn=new WeakMap,_s=new WeakMap,$n=new WeakMap,ci=new WeakMap;function La(i){const e=new Promise((n,r)=>{const o=()=>{i.removeEventListener("success",c),i.removeEventListener("error",h)},c=()=>{n(be(i.result)),o()},h=()=>{r(i.error),o()};i.addEventListener("success",c),i.addEventListener("error",h)});return e.then(n=>{n instanceof IDBCursor&&ms.set(n,i)}).catch(()=>{}),ci.set(e,i),e}function Ma(i){if(Xn.has(i))return;const e=new Promise((n,r)=>{const o=()=>{i.removeEventListener("complete",c),i.removeEventListener("error",h),i.removeEventListener("abort",h)},c=()=>{n(),o()},h=()=>{r(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",c),i.addEventListener("error",h),i.addEventListener("abort",h)});Xn.set(i,e)}let Yn={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return Xn.get(i);if(e==="objectStoreNames")return i.objectStoreNames||_s.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return be(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Ua(i){Yn=i(Yn)}function xa(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=i.call(Wn(this),e,...n);return _s.set(r,e.sort?e.sort():[e]),be(r)}:Na().includes(i)?function(...e){return i.apply(Wn(this),e),be(ms.get(this))}:function(...e){return be(i.apply(Wn(this),e))}}function Fa(i){return typeof i=="function"?xa(i):(i instanceof IDBTransaction&&Ma(i),Oa(i,Da())?new Proxy(i,Yn):i)}function be(i){if(i instanceof IDBRequest)return La(i);if($n.has(i))return $n.get(i);const e=Fa(i);return e!==i&&($n.set(i,e),ci.set(e,i)),e}const Wn=i=>ci.get(i);function ja(i,e,{blocked:n,upgrade:r,blocking:o,terminated:c}={}){const h=indexedDB.open(i,e),p=be(h);return r&&h.addEventListener("upgradeneeded",v=>{r(be(h.result),v.oldVersion,v.newVersion,be(h.transaction),v)}),n&&h.addEventListener("blocked",v=>n(v.oldVersion,v.newVersion,v)),p.then(v=>{c&&v.addEventListener("close",()=>c()),o&&v.addEventListener("versionchange",w=>o(w.oldVersion,w.newVersion,w))}).catch(()=>{}),p}const Ba=["get","getKey","getAll","getAllKeys","count"],Va=["put","add","delete","clear"],zn=new Map;function Ar(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(zn.get(e))return zn.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,o=Va.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||Ba.includes(n)))return;const c=async function(h,...p){const v=this.transaction(h,o?"readwrite":"readonly");let w=v.store;return r&&(w=w.index(p.shift())),(await Promise.all([w[n](...p),o&&v.done]))[0]};return zn.set(e,c),c}Ua(i=>({...i,get:(e,n,r)=>Ar(e,n)||i.get(e,n,r),has:(e,n)=>!!Ar(e,n)||i.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($a(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function $a(i){const e=i.getComponent();return e?.type==="VERSION"}const Zn="@firebase/app",Sr="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe=new ai("@firebase/app"),Wa="@firebase/app-compat",za="@firebase/analytics-compat",Ga="@firebase/analytics",Ka="@firebase/app-check-compat",qa="@firebase/app-check",Ja="@firebase/auth",Xa="@firebase/auth-compat",Ya="@firebase/database",Za="@firebase/data-connect",Qa="@firebase/database-compat",ec="@firebase/functions",tc="@firebase/functions-compat",nc="@firebase/installations",ic="@firebase/installations-compat",rc="@firebase/messaging",sc="@firebase/messaging-compat",oc="@firebase/performance",ac="@firebase/performance-compat",cc="@firebase/remote-config",lc="@firebase/remote-config-compat",hc="@firebase/storage",uc="@firebase/storage-compat",dc="@firebase/firestore",fc="@firebase/ai",pc="@firebase/firestore-compat",gc="firebase",mc="11.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn="[DEFAULT]",_c={[Zn]:"fire-core",[Wa]:"fire-core-compat",[Ga]:"fire-analytics",[za]:"fire-analytics-compat",[qa]:"fire-app-check",[Ka]:"fire-app-check-compat",[Ja]:"fire-auth",[Xa]:"fire-auth-compat",[Ya]:"fire-rtdb",[Za]:"fire-data-connect",[Qa]:"fire-rtdb-compat",[ec]:"fire-fn",[tc]:"fire-fn-compat",[nc]:"fire-iid",[ic]:"fire-iid-compat",[rc]:"fire-fcm",[sc]:"fire-fcm-compat",[oc]:"fire-perf",[ac]:"fire-perf-compat",[cc]:"fire-rc",[lc]:"fire-rc-compat",[hc]:"fire-gcs",[uc]:"fire-gcs-compat",[dc]:"fire-fst",[pc]:"fire-fst-compat",[fc]:"fire-vertex","fire-js":"fire-js",[gc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=new Map,vc=new Map,ei=new Map;function br(i,e){try{i.container.addComponent(e)}catch(n){pe.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function Ye(i){const e=i.name;if(ei.has(e))return pe.debug(`There were multiple attempts to register component ${e}.`),!1;ei.set(e,i);for(const n of sn.values())br(n,i);for(const n of vc.values())br(n,i);return!0}function li(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function te(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ce=new Pt("app","Firebase",yc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ce.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe=mc;function Ec(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qn,automaticDataCollectionEnabled:!0},e),o=r.name;if(typeof o!="string"||!o)throw Ce.create("bad-app-name",{appName:String(o)});if(n||(n=ds()),!n)throw Ce.create("no-options");const c=sn.get(o);if(c){if(Ue(n,c.options)&&Ue(r,c.config))return c;throw Ce.create("duplicate-app",{appName:o})}const h=new ba(o);for(const v of ei.values())h.addComponent(v);const p=new Ic(n,r,h);return sn.set(o,p),p}function vs(i=Qn){const e=sn.get(i);if(!e&&i===Qn&&ds())return Ec();if(!e)throw Ce.create("no-app",{appName:i});return e}function Pe(i,e,n){var r;let o=(r=_c[i])!==null&&r!==void 0?r:i;n&&(o+=`-${n}`);const c=o.match(/\s|\//),h=e.match(/\s|\//);if(c||h){const p=[`Unable to register library "${o}" with version "${e}":`];c&&p.push(`library name "${o}" contains illegal characters (whitespace or "/")`),c&&h&&p.push("and"),h&&p.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pe.warn(p.join(" "));return}Ye(new xe(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc="firebase-heartbeat-database",Tc=1,At="firebase-heartbeat-store";let Gn=null;function ys(){return Gn||(Gn=ja(wc,Tc,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(At)}catch(n){console.warn(n)}}}}).catch(i=>{throw Ce.create("idb-open",{originalErrorMessage:i.message})})),Gn}async function Ac(i){try{const n=(await ys()).transaction(At),r=await n.objectStore(At).get(Is(i));return await n.done,r}catch(e){if(e instanceof me)pe.warn(e.message);else{const n=Ce.create("idb-get",{originalErrorMessage:e?.message});pe.warn(n.message)}}}async function Cr(i,e){try{const r=(await ys()).transaction(At,"readwrite");await r.objectStore(At).put(e,Is(i)),await r.done}catch(n){if(n instanceof me)pe.warn(n.message);else{const r=Ce.create("idb-set",{originalErrorMessage:n?.message});pe.warn(r.message)}}}function Is(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc=1024,bc=30;class Cc{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Rc(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=Pr();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(h=>h.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:o}),this._heartbeatsCache.heartbeats.length>bc){const h=kc(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){pe.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Pr(),{heartbeatsToSend:r,unsentEntries:o}=Pc(this._heartbeatsCache.heartbeats),c=rn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(n){return pe.warn(n),""}}}function Pr(){return new Date().toISOString().substring(0,10)}function Pc(i,e=Sc){const n=[];let r=i.slice();for(const o of i){const c=n.find(h=>h.agent===o.agent);if(c){if(c.dates.push(o.date),Rr(n)>e){c.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Rr(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Rc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ha()?ua().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ac(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Cr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Cr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Rr(i){return rn(JSON.stringify({version:2,heartbeats:i})).length}function kc(i){if(i.length===0)return-1;let e=0,n=i[0].date;for(let r=1;r<i.length;r++)i[r].date<n&&(n=i[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(i){Ye(new xe("platform-logger",e=>new Ha(e),"PRIVATE")),Ye(new xe("heartbeat",e=>new Cc(e),"PRIVATE")),Pe(Zn,Sr,i),Pe(Zn,Sr,"esm2017"),Pe("fire-js","")}Oc("");var kr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Es;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,u){function f(){}f.prototype=u.prototype,_.D=u.prototype,_.prototype=new f,_.prototype.constructor=_,_.C=function(g,m,I){for(var d=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)d[ce-2]=arguments[ce];return u.prototype[m].apply(g,d)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(_,u,f){f||(f=0);var g=Array(16);if(typeof u=="string")for(var m=0;16>m;++m)g[m]=u.charCodeAt(f++)|u.charCodeAt(f++)<<8|u.charCodeAt(f++)<<16|u.charCodeAt(f++)<<24;else for(m=0;16>m;++m)g[m]=u[f++]|u[f++]<<8|u[f++]<<16|u[f++]<<24;u=_.g[0],f=_.g[1],m=_.g[2];var I=_.g[3],d=u+(I^f&(m^I))+g[0]+3614090360&4294967295;u=f+(d<<7&4294967295|d>>>25),d=I+(m^u&(f^m))+g[1]+3905402710&4294967295,I=u+(d<<12&4294967295|d>>>20),d=m+(f^I&(u^f))+g[2]+606105819&4294967295,m=I+(d<<17&4294967295|d>>>15),d=f+(u^m&(I^u))+g[3]+3250441966&4294967295,f=m+(d<<22&4294967295|d>>>10),d=u+(I^f&(m^I))+g[4]+4118548399&4294967295,u=f+(d<<7&4294967295|d>>>25),d=I+(m^u&(f^m))+g[5]+1200080426&4294967295,I=u+(d<<12&4294967295|d>>>20),d=m+(f^I&(u^f))+g[6]+2821735955&4294967295,m=I+(d<<17&4294967295|d>>>15),d=f+(u^m&(I^u))+g[7]+4249261313&4294967295,f=m+(d<<22&4294967295|d>>>10),d=u+(I^f&(m^I))+g[8]+1770035416&4294967295,u=f+(d<<7&4294967295|d>>>25),d=I+(m^u&(f^m))+g[9]+2336552879&4294967295,I=u+(d<<12&4294967295|d>>>20),d=m+(f^I&(u^f))+g[10]+4294925233&4294967295,m=I+(d<<17&4294967295|d>>>15),d=f+(u^m&(I^u))+g[11]+2304563134&4294967295,f=m+(d<<22&4294967295|d>>>10),d=u+(I^f&(m^I))+g[12]+1804603682&4294967295,u=f+(d<<7&4294967295|d>>>25),d=I+(m^u&(f^m))+g[13]+4254626195&4294967295,I=u+(d<<12&4294967295|d>>>20),d=m+(f^I&(u^f))+g[14]+2792965006&4294967295,m=I+(d<<17&4294967295|d>>>15),d=f+(u^m&(I^u))+g[15]+1236535329&4294967295,f=m+(d<<22&4294967295|d>>>10),d=u+(m^I&(f^m))+g[1]+4129170786&4294967295,u=f+(d<<5&4294967295|d>>>27),d=I+(f^m&(u^f))+g[6]+3225465664&4294967295,I=u+(d<<9&4294967295|d>>>23),d=m+(u^f&(I^u))+g[11]+643717713&4294967295,m=I+(d<<14&4294967295|d>>>18),d=f+(I^u&(m^I))+g[0]+3921069994&4294967295,f=m+(d<<20&4294967295|d>>>12),d=u+(m^I&(f^m))+g[5]+3593408605&4294967295,u=f+(d<<5&4294967295|d>>>27),d=I+(f^m&(u^f))+g[10]+38016083&4294967295,I=u+(d<<9&4294967295|d>>>23),d=m+(u^f&(I^u))+g[15]+3634488961&4294967295,m=I+(d<<14&4294967295|d>>>18),d=f+(I^u&(m^I))+g[4]+3889429448&4294967295,f=m+(d<<20&4294967295|d>>>12),d=u+(m^I&(f^m))+g[9]+568446438&4294967295,u=f+(d<<5&4294967295|d>>>27),d=I+(f^m&(u^f))+g[14]+3275163606&4294967295,I=u+(d<<9&4294967295|d>>>23),d=m+(u^f&(I^u))+g[3]+4107603335&4294967295,m=I+(d<<14&4294967295|d>>>18),d=f+(I^u&(m^I))+g[8]+1163531501&4294967295,f=m+(d<<20&4294967295|d>>>12),d=u+(m^I&(f^m))+g[13]+2850285829&4294967295,u=f+(d<<5&4294967295|d>>>27),d=I+(f^m&(u^f))+g[2]+4243563512&4294967295,I=u+(d<<9&4294967295|d>>>23),d=m+(u^f&(I^u))+g[7]+1735328473&4294967295,m=I+(d<<14&4294967295|d>>>18),d=f+(I^u&(m^I))+g[12]+2368359562&4294967295,f=m+(d<<20&4294967295|d>>>12),d=u+(f^m^I)+g[5]+4294588738&4294967295,u=f+(d<<4&4294967295|d>>>28),d=I+(u^f^m)+g[8]+2272392833&4294967295,I=u+(d<<11&4294967295|d>>>21),d=m+(I^u^f)+g[11]+1839030562&4294967295,m=I+(d<<16&4294967295|d>>>16),d=f+(m^I^u)+g[14]+4259657740&4294967295,f=m+(d<<23&4294967295|d>>>9),d=u+(f^m^I)+g[1]+2763975236&4294967295,u=f+(d<<4&4294967295|d>>>28),d=I+(u^f^m)+g[4]+1272893353&4294967295,I=u+(d<<11&4294967295|d>>>21),d=m+(I^u^f)+g[7]+4139469664&4294967295,m=I+(d<<16&4294967295|d>>>16),d=f+(m^I^u)+g[10]+3200236656&4294967295,f=m+(d<<23&4294967295|d>>>9),d=u+(f^m^I)+g[13]+681279174&4294967295,u=f+(d<<4&4294967295|d>>>28),d=I+(u^f^m)+g[0]+3936430074&4294967295,I=u+(d<<11&4294967295|d>>>21),d=m+(I^u^f)+g[3]+3572445317&4294967295,m=I+(d<<16&4294967295|d>>>16),d=f+(m^I^u)+g[6]+76029189&4294967295,f=m+(d<<23&4294967295|d>>>9),d=u+(f^m^I)+g[9]+3654602809&4294967295,u=f+(d<<4&4294967295|d>>>28),d=I+(u^f^m)+g[12]+3873151461&4294967295,I=u+(d<<11&4294967295|d>>>21),d=m+(I^u^f)+g[15]+530742520&4294967295,m=I+(d<<16&4294967295|d>>>16),d=f+(m^I^u)+g[2]+3299628645&4294967295,f=m+(d<<23&4294967295|d>>>9),d=u+(m^(f|~I))+g[0]+4096336452&4294967295,u=f+(d<<6&4294967295|d>>>26),d=I+(f^(u|~m))+g[7]+1126891415&4294967295,I=u+(d<<10&4294967295|d>>>22),d=m+(u^(I|~f))+g[14]+2878612391&4294967295,m=I+(d<<15&4294967295|d>>>17),d=f+(I^(m|~u))+g[5]+4237533241&4294967295,f=m+(d<<21&4294967295|d>>>11),d=u+(m^(f|~I))+g[12]+1700485571&4294967295,u=f+(d<<6&4294967295|d>>>26),d=I+(f^(u|~m))+g[3]+2399980690&4294967295,I=u+(d<<10&4294967295|d>>>22),d=m+(u^(I|~f))+g[10]+4293915773&4294967295,m=I+(d<<15&4294967295|d>>>17),d=f+(I^(m|~u))+g[1]+2240044497&4294967295,f=m+(d<<21&4294967295|d>>>11),d=u+(m^(f|~I))+g[8]+1873313359&4294967295,u=f+(d<<6&4294967295|d>>>26),d=I+(f^(u|~m))+g[15]+4264355552&4294967295,I=u+(d<<10&4294967295|d>>>22),d=m+(u^(I|~f))+g[6]+2734768916&4294967295,m=I+(d<<15&4294967295|d>>>17),d=f+(I^(m|~u))+g[13]+1309151649&4294967295,f=m+(d<<21&4294967295|d>>>11),d=u+(m^(f|~I))+g[4]+4149444226&4294967295,u=f+(d<<6&4294967295|d>>>26),d=I+(f^(u|~m))+g[11]+3174756917&4294967295,I=u+(d<<10&4294967295|d>>>22),d=m+(u^(I|~f))+g[2]+718787259&4294967295,m=I+(d<<15&4294967295|d>>>17),d=f+(I^(m|~u))+g[9]+3951481745&4294967295,_.g[0]=_.g[0]+u&4294967295,_.g[1]=_.g[1]+(m+(d<<21&4294967295|d>>>11))&4294967295,_.g[2]=_.g[2]+m&4294967295,_.g[3]=_.g[3]+I&4294967295}r.prototype.u=function(_,u){u===void 0&&(u=_.length);for(var f=u-this.blockSize,g=this.B,m=this.h,I=0;I<u;){if(m==0)for(;I<=f;)o(this,_,I),I+=this.blockSize;if(typeof _=="string"){for(;I<u;)if(g[m++]=_.charCodeAt(I++),m==this.blockSize){o(this,g),m=0;break}}else for(;I<u;)if(g[m++]=_[I++],m==this.blockSize){o(this,g),m=0;break}}this.h=m,this.o+=u},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var u=1;u<_.length-8;++u)_[u]=0;var f=8*this.o;for(u=_.length-8;u<_.length;++u)_[u]=f&255,f/=256;for(this.u(_),_=Array(16),u=f=0;4>u;++u)for(var g=0;32>g;g+=8)_[f++]=this.g[u]>>>g&255;return _};function c(_,u){var f=p;return Object.prototype.hasOwnProperty.call(f,_)?f[_]:f[_]=u(_)}function h(_,u){this.h=u;for(var f=[],g=!0,m=_.length-1;0<=m;m--){var I=_[m]|0;g&&I==u||(f[m]=I,g=!1)}this.g=f}var p={};function v(_){return-128<=_&&128>_?c(_,function(u){return new h([u|0],0>u?-1:0)}):new h([_|0],0>_?-1:0)}function w(_){if(isNaN(_)||!isFinite(_))return C;if(0>_)return D(w(-_));for(var u=[],f=1,g=0;_>=f;g++)u[g]=_/f|0,f*=4294967296;return new h(u,0)}function S(_,u){if(_.length==0)throw Error("number format error: empty string");if(u=u||10,2>u||36<u)throw Error("radix out of range: "+u);if(_.charAt(0)=="-")return D(S(_.substring(1),u));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var f=w(Math.pow(u,8)),g=C,m=0;m<_.length;m+=8){var I=Math.min(8,_.length-m),d=parseInt(_.substring(m,m+I),u);8>I?(I=w(Math.pow(u,I)),g=g.j(I).add(w(d))):(g=g.j(f),g=g.add(w(d)))}return g}var C=v(0),A=v(1),M=v(16777216);i=h.prototype,i.m=function(){if(U(this))return-D(this).m();for(var _=0,u=1,f=0;f<this.g.length;f++){var g=this.i(f);_+=(0<=g?g:4294967296+g)*u,u*=4294967296}return _},i.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(P(this))return"0";if(U(this))return"-"+D(this).toString(_);for(var u=w(Math.pow(_,6)),f=this,g="";;){var m=Z(f,u).g;f=Q(f,m.j(u));var I=((0<f.g.length?f.g[0]:f.h)>>>0).toString(_);if(f=m,P(f))return I+g;for(;6>I.length;)I="0"+I;g=I+g}},i.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function P(_){if(_.h!=0)return!1;for(var u=0;u<_.g.length;u++)if(_.g[u]!=0)return!1;return!0}function U(_){return _.h==-1}i.l=function(_){return _=Q(this,_),U(_)?-1:P(_)?0:1};function D(_){for(var u=_.g.length,f=[],g=0;g<u;g++)f[g]=~_.g[g];return new h(f,~_.h).add(A)}i.abs=function(){return U(this)?D(this):this},i.add=function(_){for(var u=Math.max(this.g.length,_.g.length),f=[],g=0,m=0;m<=u;m++){var I=g+(this.i(m)&65535)+(_.i(m)&65535),d=(I>>>16)+(this.i(m)>>>16)+(_.i(m)>>>16);g=d>>>16,I&=65535,d&=65535,f[m]=d<<16|I}return new h(f,f[f.length-1]&-2147483648?-1:0)};function Q(_,u){return _.add(D(u))}i.j=function(_){if(P(this)||P(_))return C;if(U(this))return U(_)?D(this).j(D(_)):D(D(this).j(_));if(U(_))return D(this.j(D(_)));if(0>this.l(M)&&0>_.l(M))return w(this.m()*_.m());for(var u=this.g.length+_.g.length,f=[],g=0;g<2*u;g++)f[g]=0;for(g=0;g<this.g.length;g++)for(var m=0;m<_.g.length;m++){var I=this.i(g)>>>16,d=this.i(g)&65535,ce=_.i(m)>>>16,tt=_.i(m)&65535;f[2*g+2*m]+=d*tt,j(f,2*g+2*m),f[2*g+2*m+1]+=I*tt,j(f,2*g+2*m+1),f[2*g+2*m+1]+=d*ce,j(f,2*g+2*m+1),f[2*g+2*m+2]+=I*ce,j(f,2*g+2*m+2)}for(g=0;g<u;g++)f[g]=f[2*g+1]<<16|f[2*g];for(g=u;g<2*u;g++)f[g]=0;return new h(f,0)};function j(_,u){for(;(_[u]&65535)!=_[u];)_[u+1]+=_[u]>>>16,_[u]&=65535,u++}function F(_,u){this.g=_,this.h=u}function Z(_,u){if(P(u))throw Error("division by zero");if(P(_))return new F(C,C);if(U(_))return u=Z(D(_),u),new F(D(u.g),D(u.h));if(U(u))return u=Z(_,D(u)),new F(D(u.g),u.h);if(30<_.g.length){if(U(_)||U(u))throw Error("slowDivide_ only works with positive integers.");for(var f=A,g=u;0>=g.l(_);)f=Oe(f),g=Oe(g);var m=J(f,1),I=J(g,1);for(g=J(g,2),f=J(f,2);!P(g);){var d=I.add(g);0>=d.l(_)&&(m=m.add(f),I=d),g=J(g,1),f=J(f,1)}return u=Q(_,m.j(u)),new F(m,u)}for(m=C;0<=_.l(u);){for(f=Math.max(1,Math.floor(_.m()/u.m())),g=Math.ceil(Math.log(f)/Math.LN2),g=48>=g?1:Math.pow(2,g-48),I=w(f),d=I.j(u);U(d)||0<d.l(_);)f-=g,I=w(f),d=I.j(u);P(I)&&(I=A),m=m.add(I),_=Q(_,d)}return new F(m,_)}i.A=function(_){return Z(this,_).h},i.and=function(_){for(var u=Math.max(this.g.length,_.g.length),f=[],g=0;g<u;g++)f[g]=this.i(g)&_.i(g);return new h(f,this.h&_.h)},i.or=function(_){for(var u=Math.max(this.g.length,_.g.length),f=[],g=0;g<u;g++)f[g]=this.i(g)|_.i(g);return new h(f,this.h|_.h)},i.xor=function(_){for(var u=Math.max(this.g.length,_.g.length),f=[],g=0;g<u;g++)f[g]=this.i(g)^_.i(g);return new h(f,this.h^_.h)};function Oe(_){for(var u=_.g.length+1,f=[],g=0;g<u;g++)f[g]=_.i(g)<<1|_.i(g-1)>>>31;return new h(f,_.h)}function J(_,u){var f=u>>5;u%=32;for(var g=_.g.length-f,m=[],I=0;I<g;I++)m[I]=0<u?_.i(I+f)>>>u|_.i(I+f+1)<<32-u:_.i(I+f);return new h(m,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=w,h.fromString=S,Es=h}).apply(typeof kr<"u"?kr:typeof self<"u"?self:typeof window<"u"?window:{});var Yt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,s,a){return t==Array.prototype||t==Object.prototype||(t[s]=a.value),t};function n(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof Yt=="object"&&Yt];for(var s=0;s<t.length;++s){var a=t[s];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var r=n(this);function o(t,s){if(s)e:{var a=r;t=t.split(".");for(var l=0;l<t.length-1;l++){var y=t[l];if(!(y in a))break e;a=a[y]}t=t[t.length-1],l=a[t],s=s(l),s!=l&&s!=null&&e(a,t,{configurable:!0,writable:!0,value:s})}}function c(t,s){t instanceof String&&(t+="");var a=0,l=!1,y={next:function(){if(!l&&a<t.length){var E=a++;return{value:s(E,t[E]),done:!1}}return l=!0,{done:!0,value:void 0}}};return y[Symbol.iterator]=function(){return y},y}o("Array.prototype.values",function(t){return t||function(){return c(this,function(s,a){return a})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},p=this||self;function v(t){var s=typeof t;return s=s!="object"?s:t?Array.isArray(t)?"array":s:"null",s=="array"||s=="object"&&typeof t.length=="number"}function w(t){var s=typeof t;return s=="object"&&t!=null||s=="function"}function S(t,s,a){return t.call.apply(t.bind,arguments)}function C(t,s,a){if(!t)throw Error();if(2<arguments.length){var l=Array.prototype.slice.call(arguments,2);return function(){var y=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(y,l),t.apply(s,y)}}return function(){return t.apply(s,arguments)}}function A(t,s,a){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?S:C,A.apply(null,arguments)}function M(t,s){var a=Array.prototype.slice.call(arguments,1);return function(){var l=a.slice();return l.push.apply(l,arguments),t.apply(this,l)}}function P(t,s){function a(){}a.prototype=s.prototype,t.aa=s.prototype,t.prototype=new a,t.prototype.constructor=t,t.Qb=function(l,y,E){for(var T=Array(arguments.length-2),N=2;N<arguments.length;N++)T[N-2]=arguments[N];return s.prototype[y].apply(l,T)}}function U(t){const s=t.length;if(0<s){const a=Array(s);for(let l=0;l<s;l++)a[l]=t[l];return a}return[]}function D(t,s){for(let a=1;a<arguments.length;a++){const l=arguments[a];if(v(l)){const y=t.length||0,E=l.length||0;t.length=y+E;for(let T=0;T<E;T++)t[y+T]=l[T]}else t.push(l)}}class Q{constructor(s,a){this.i=s,this.j=a,this.h=0,this.g=null}get(){let s;return 0<this.h?(this.h--,s=this.g,this.g=s.next,s.next=null):s=this.i(),s}}function j(t){return/^[\s\xa0]*$/.test(t)}function F(){var t=p.navigator;return t&&(t=t.userAgent)?t:""}function Z(t){return Z[" "](t),t}Z[" "]=function(){};var Oe=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function J(t,s,a){for(const l in t)s.call(a,t[l],l,t)}function _(t,s){for(const a in t)s.call(void 0,t[a],a,t)}function u(t){const s={};for(const a in t)s[a]=t[a];return s}const f="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function g(t,s){let a,l;for(let y=1;y<arguments.length;y++){l=arguments[y];for(a in l)t[a]=l[a];for(let E=0;E<f.length;E++)a=f[E],Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a])}}function m(t){var s=1;t=t.split(":");const a=[];for(;0<s&&t.length;)a.push(t.shift()),s--;return t.length&&a.push(t.join(":")),a}function I(t){p.setTimeout(()=>{throw t},0)}function d(){var t=mn;let s=null;return t.g&&(s=t.g,t.g=t.g.next,t.g||(t.h=null),s.next=null),s}class ce{constructor(){this.h=this.g=null}add(s,a){const l=tt.get();l.set(s,a),this.h?this.h.next=l:this.g=l,this.h=l}}var tt=new Q(()=>new co,t=>t.reset());class co{constructor(){this.next=this.g=this.h=null}set(s,a){this.h=s,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let nt,it=!1,mn=new ce,Ei=()=>{const t=p.Promise.resolve(void 0);nt=()=>{t.then(lo)}};var lo=()=>{for(var t;t=d();){try{t.h.call(t.g)}catch(a){I(a)}var s=tt;s.j(t),100>s.h&&(s.h++,t.next=s.g,s.g=t)}it=!1};function _e(){this.s=this.s,this.C=this.C}_e.prototype.s=!1,_e.prototype.ma=function(){this.s||(this.s=!0,this.N())},_e.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function V(t,s){this.type=t,this.g=this.target=s,this.defaultPrevented=!1}V.prototype.h=function(){this.defaultPrevented=!0};var ho=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var t=!1,s=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const a=()=>{};p.addEventListener("test",a,s),p.removeEventListener("test",a,s)}catch{}return t}();function rt(t,s){if(V.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var a=this.type=t.type,l=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=s,s=t.relatedTarget){if(Oe){e:{try{Z(s.nodeName);var y=!0;break e}catch{}y=!1}y||(s=null)}}else a=="mouseover"?s=t.fromElement:a=="mouseout"&&(s=t.toElement);this.relatedTarget=s,l?(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:uo[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&rt.aa.h.call(this)}}P(rt,V);var uo={2:"touch",3:"pen",4:"mouse"};rt.prototype.h=function(){rt.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Mt="closure_listenable_"+(1e6*Math.random()|0),fo=0;function po(t,s,a,l,y){this.listener=t,this.proxy=null,this.src=s,this.type=a,this.capture=!!l,this.ha=y,this.key=++fo,this.da=this.fa=!1}function Ut(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function xt(t){this.src=t,this.g={},this.h=0}xt.prototype.add=function(t,s,a,l,y){var E=t.toString();t=this.g[E],t||(t=this.g[E]=[],this.h++);var T=vn(t,s,l,y);return-1<T?(s=t[T],a||(s.fa=!1)):(s=new po(s,this.src,E,!!l,y),s.fa=a,t.push(s)),s};function _n(t,s){var a=s.type;if(a in t.g){var l=t.g[a],y=Array.prototype.indexOf.call(l,s,void 0),E;(E=0<=y)&&Array.prototype.splice.call(l,y,1),E&&(Ut(s),t.g[a].length==0&&(delete t.g[a],t.h--))}}function vn(t,s,a,l){for(var y=0;y<t.length;++y){var E=t[y];if(!E.da&&E.listener==s&&E.capture==!!a&&E.ha==l)return y}return-1}var yn="closure_lm_"+(1e6*Math.random()|0),In={};function wi(t,s,a,l,y){if(Array.isArray(s)){for(var E=0;E<s.length;E++)wi(t,s[E],a,l,y);return null}return a=Si(a),t&&t[Mt]?t.K(s,a,w(l)?!!l.capture:!1,y):go(t,s,a,!1,l,y)}function go(t,s,a,l,y,E){if(!s)throw Error("Invalid event type");var T=w(y)?!!y.capture:!!y,N=wn(t);if(N||(t[yn]=N=new xt(t)),a=N.add(s,a,l,T,E),a.proxy)return a;if(l=mo(),a.proxy=l,l.src=t,l.listener=a,t.addEventListener)ho||(y=T),y===void 0&&(y=!1),t.addEventListener(s.toString(),l,y);else if(t.attachEvent)t.attachEvent(Ai(s.toString()),l);else if(t.addListener&&t.removeListener)t.addListener(l);else throw Error("addEventListener and attachEvent are unavailable.");return a}function mo(){function t(a){return s.call(t.src,t.listener,a)}const s=_o;return t}function Ti(t,s,a,l,y){if(Array.isArray(s))for(var E=0;E<s.length;E++)Ti(t,s[E],a,l,y);else l=w(l)?!!l.capture:!!l,a=Si(a),t&&t[Mt]?(t=t.i,s=String(s).toString(),s in t.g&&(E=t.g[s],a=vn(E,a,l,y),-1<a&&(Ut(E[a]),Array.prototype.splice.call(E,a,1),E.length==0&&(delete t.g[s],t.h--)))):t&&(t=wn(t))&&(s=t.g[s.toString()],t=-1,s&&(t=vn(s,a,l,y)),(a=-1<t?s[t]:null)&&En(a))}function En(t){if(typeof t!="number"&&t&&!t.da){var s=t.src;if(s&&s[Mt])_n(s.i,t);else{var a=t.type,l=t.proxy;s.removeEventListener?s.removeEventListener(a,l,t.capture):s.detachEvent?s.detachEvent(Ai(a),l):s.addListener&&s.removeListener&&s.removeListener(l),(a=wn(s))?(_n(a,t),a.h==0&&(a.src=null,s[yn]=null)):Ut(t)}}}function Ai(t){return t in In?In[t]:In[t]="on"+t}function _o(t,s){if(t.da)t=!0;else{s=new rt(s,this);var a=t.listener,l=t.ha||t.src;t.fa&&En(t),t=a.call(l,s)}return t}function wn(t){return t=t[yn],t instanceof xt?t:null}var Tn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Si(t){return typeof t=="function"?t:(t[Tn]||(t[Tn]=function(s){return t.handleEvent(s)}),t[Tn])}function H(){_e.call(this),this.i=new xt(this),this.M=this,this.F=null}P(H,_e),H.prototype[Mt]=!0,H.prototype.removeEventListener=function(t,s,a,l){Ti(this,t,s,a,l)};function z(t,s){var a,l=t.F;if(l)for(a=[];l;l=l.F)a.push(l);if(t=t.M,l=s.type||s,typeof s=="string")s=new V(s,t);else if(s instanceof V)s.target=s.target||t;else{var y=s;s=new V(l,t),g(s,y)}if(y=!0,a)for(var E=a.length-1;0<=E;E--){var T=s.g=a[E];y=Ft(T,l,!0,s)&&y}if(T=s.g=t,y=Ft(T,l,!0,s)&&y,y=Ft(T,l,!1,s)&&y,a)for(E=0;E<a.length;E++)T=s.g=a[E],y=Ft(T,l,!1,s)&&y}H.prototype.N=function(){if(H.aa.N.call(this),this.i){var t=this.i,s;for(s in t.g){for(var a=t.g[s],l=0;l<a.length;l++)Ut(a[l]);delete t.g[s],t.h--}}this.F=null},H.prototype.K=function(t,s,a,l){return this.i.add(String(t),s,!1,a,l)},H.prototype.L=function(t,s,a,l){return this.i.add(String(t),s,!0,a,l)};function Ft(t,s,a,l){if(s=t.i.g[String(s)],!s)return!0;s=s.concat();for(var y=!0,E=0;E<s.length;++E){var T=s[E];if(T&&!T.da&&T.capture==a){var N=T.listener,B=T.ha||T.src;T.fa&&_n(t.i,T),y=N.call(B,l)!==!1&&y}}return y&&!l.defaultPrevented}function bi(t,s,a){if(typeof t=="function")a&&(t=A(t,a));else if(t&&typeof t.handleEvent=="function")t=A(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(s)?-1:p.setTimeout(t,s||0)}function Ci(t){t.g=bi(()=>{t.g=null,t.i&&(t.i=!1,Ci(t))},t.l);const s=t.h;t.h=null,t.m.apply(null,s)}class vo extends _e{constructor(s,a){super(),this.m=s,this.l=a,this.h=null,this.i=!1,this.g=null}j(s){this.h=arguments,this.g?this.i=!0:Ci(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function st(t){_e.call(this),this.h=t,this.g={}}P(st,_e);var Pi=[];function Ri(t){J(t.g,function(s,a){this.g.hasOwnProperty(a)&&En(s)},t),t.g={}}st.prototype.N=function(){st.aa.N.call(this),Ri(this)},st.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var An=p.JSON.stringify,yo=p.JSON.parse,Io=class{stringify(t){return p.JSON.stringify(t,void 0)}parse(t){return p.JSON.parse(t,void 0)}};function Sn(){}Sn.prototype.h=null;function ki(t){return t.h||(t.h=t.i())}function Eo(){}var ot={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function bn(){V.call(this,"d")}P(bn,V);function Cn(){V.call(this,"c")}P(Cn,V);var He={},Oi=null;function Pn(){return Oi=Oi||new H}He.La="serverreachability";function Di(t){V.call(this,He.La,t)}P(Di,V);function at(t){const s=Pn();z(s,new Di(s))}He.STAT_EVENT="statevent";function Ni(t,s){V.call(this,He.STAT_EVENT,t),this.stat=s}P(Ni,V);function G(t){const s=Pn();z(s,new Ni(s,t))}He.Ma="timingevent";function Li(t,s){V.call(this,He.Ma,t),this.size=s}P(Li,V);function ct(t,s){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){t()},s)}function lt(){this.g=!0}lt.prototype.xa=function(){this.g=!1};function wo(t,s,a,l,y,E){t.info(function(){if(t.g)if(E)for(var T="",N=E.split("&"),B=0;B<N.length;B++){var k=N[B].split("=");if(1<k.length){var $=k[0];k=k[1];var W=$.split("_");T=2<=W.length&&W[1]=="type"?T+($+"="+k+"&"):T+($+"=redacted&")}}else T=null;else T=E;return"XMLHTTP REQ ("+l+") [attempt "+y+"]: "+s+`
`+a+`
`+T})}function To(t,s,a,l,y,E,T){t.info(function(){return"XMLHTTP RESP ("+l+") [ attempt "+y+"]: "+s+`
`+a+`
`+E+" "+T})}function $e(t,s,a,l){t.info(function(){return"XMLHTTP TEXT ("+s+"): "+So(t,a)+(l?" "+l:"")})}function Ao(t,s){t.info(function(){return"TIMEOUT: "+s})}lt.prototype.info=function(){};function So(t,s){if(!t.g)return s;if(!s)return null;try{var a=JSON.parse(s);if(a){for(t=0;t<a.length;t++)if(Array.isArray(a[t])){var l=a[t];if(!(2>l.length)){var y=l[1];if(Array.isArray(y)&&!(1>y.length)){var E=y[0];if(E!="noop"&&E!="stop"&&E!="close")for(var T=1;T<y.length;T++)y[T]=""}}}}return An(a)}catch{return s}}var Rn={NO_ERROR:0,TIMEOUT:8},bo={},kn;function jt(){}P(jt,Sn),jt.prototype.g=function(){return new XMLHttpRequest},jt.prototype.i=function(){return{}},kn=new jt;function ve(t,s,a,l){this.j=t,this.i=s,this.l=a,this.R=l||1,this.U=new st(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Mi}function Mi(){this.i=null,this.g="",this.h=!1}var Ui={},On={};function Dn(t,s,a){t.L=1,t.v=$t(le(s)),t.m=a,t.P=!0,xi(t,null)}function xi(t,s){t.F=Date.now(),Bt(t),t.A=le(t.v);var a=t.A,l=t.R;Array.isArray(l)||(l=[String(l)]),Yi(a.i,"t",l),t.C=0,a=t.j.J,t.h=new Mi,t.g=gr(t.j,a?s:null,!t.m),0<t.O&&(t.M=new vo(A(t.Y,t,t.g),t.O)),s=t.U,a=t.g,l=t.ca;var y="readystatechange";Array.isArray(y)||(y&&(Pi[0]=y.toString()),y=Pi);for(var E=0;E<y.length;E++){var T=wi(a,y[E],l||s.handleEvent,!1,s.h||s);if(!T)break;s.g[T.key]=T}s=t.H?u(t.H):{},t.m?(t.u||(t.u="POST"),s["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,s)):(t.u="GET",t.g.ea(t.A,t.u,null,s)),at(),wo(t.i,t.u,t.A,t.l,t.R,t.m)}ve.prototype.ca=function(t){t=t.target;const s=this.M;s&&he(t)==3?s.j():this.Y(t)},ve.prototype.Y=function(t){try{if(t==this.g)e:{const W=he(this.g);var s=this.g.Ba();const Ge=this.g.Z();if(!(3>W)&&(W!=3||this.g&&(this.h.h||this.g.oa()||rr(this.g)))){this.J||W!=4||s==7||(s==8||0>=Ge?at(3):at(2)),Nn(this);var a=this.g.Z();this.X=a;t:if(Fi(this)){var l=rr(this.g);t="";var y=l.length,E=he(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){De(this),ht(this);var T="";break t}this.h.i=new p.TextDecoder}for(s=0;s<y;s++)this.h.h=!0,t+=this.h.i.decode(l[s],{stream:!(E&&s==y-1)});l.length=0,this.h.g+=t,this.C=0,T=this.h.g}else T=this.g.oa();if(this.o=a==200,To(this.i,this.u,this.A,this.l,this.R,W,a),this.o){if(this.T&&!this.K){t:{if(this.g){var N,B=this.g;if((N=B.g?B.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(N)){var k=N;break t}}k=null}if(a=k)$e(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ln(this,a);else{this.o=!1,this.s=3,G(12),De(this),ht(this);break e}}if(this.P){a=!0;let ne;for(;!this.J&&this.C<T.length;)if(ne=Co(this,T),ne==On){W==4&&(this.s=4,G(14),a=!1),$e(this.i,this.l,null,"[Incomplete Response]");break}else if(ne==Ui){this.s=4,G(15),$e(this.i,this.l,T,"[Invalid Chunk]"),a=!1;break}else $e(this.i,this.l,ne,null),Ln(this,ne);if(Fi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),W!=4||T.length!=0||this.h.h||(this.s=1,G(16),a=!1),this.o=this.o&&a,!a)$e(this.i,this.l,T,"[Invalid Chunked Response]"),De(this),ht(this);else if(0<T.length&&!this.W){this.W=!0;var $=this.j;$.g==this&&$.ba&&!$.M&&($.j.info("Great, no buffering proxy detected. Bytes received: "+T.length),Bn($),$.M=!0,G(11))}}else $e(this.i,this.l,T,null),Ln(this,T);W==4&&De(this),this.o&&!this.J&&(W==4?ur(this.j,this):(this.o=!1,Bt(this)))}else Wo(this.g),a==400&&0<T.indexOf("Unknown SID")?(this.s=3,G(12)):(this.s=0,G(13)),De(this),ht(this)}}}catch{}finally{}};function Fi(t){return t.g?t.u=="GET"&&t.L!=2&&t.j.Ca:!1}function Co(t,s){var a=t.C,l=s.indexOf(`
`,a);return l==-1?On:(a=Number(s.substring(a,l)),isNaN(a)?Ui:(l+=1,l+a>s.length?On:(s=s.slice(l,l+a),t.C=l+a,s)))}ve.prototype.cancel=function(){this.J=!0,De(this)};function Bt(t){t.S=Date.now()+t.I,ji(t,t.I)}function ji(t,s){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ct(A(t.ba,t),s)}function Nn(t){t.B&&(p.clearTimeout(t.B),t.B=null)}ve.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(Ao(this.i,this.A),this.L!=2&&(at(),G(17)),De(this),this.s=2,ht(this)):ji(this,this.S-t)};function ht(t){t.j.G==0||t.J||ur(t.j,t)}function De(t){Nn(t);var s=t.M;s&&typeof s.ma=="function"&&s.ma(),t.M=null,Ri(t.U),t.g&&(s=t.g,t.g=null,s.abort(),s.ma())}function Ln(t,s){try{var a=t.j;if(a.G!=0&&(a.g==t||Mn(a.h,t))){if(!t.K&&Mn(a.h,t)&&a.G==3){try{var l=a.Da.g.parse(s)}catch{l=null}if(Array.isArray(l)&&l.length==3){var y=l;if(y[0]==0){e:if(!a.u){if(a.g)if(a.g.F+3e3<t.F)Jt(a),Kt(a);else break e;jn(a),G(18)}}else a.za=y[1],0<a.za-a.T&&37500>y[2]&&a.F&&a.v==0&&!a.C&&(a.C=ct(A(a.Za,a),6e3));if(1>=Hi(a.h)&&a.ca){try{a.ca()}catch{}a.ca=void 0}}else Le(a,11)}else if((t.K||a.g==t)&&Jt(a),!j(s))for(y=a.Da.g.parse(s),s=0;s<y.length;s++){let k=y[s];if(a.T=k[0],k=k[1],a.G==2)if(k[0]=="c"){a.K=k[1],a.ia=k[2];const $=k[3];$!=null&&(a.la=$,a.j.info("VER="+a.la));const W=k[4];W!=null&&(a.Aa=W,a.j.info("SVER="+a.Aa));const Ge=k[5];Ge!=null&&typeof Ge=="number"&&0<Ge&&(l=1.5*Ge,a.L=l,a.j.info("backChannelRequestTimeoutMs_="+l)),l=a;const ne=t.g;if(ne){const Xt=ne.g?ne.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xt){var E=l.h;E.g||Xt.indexOf("spdy")==-1&&Xt.indexOf("quic")==-1&&Xt.indexOf("h2")==-1||(E.j=E.l,E.g=new Set,E.h&&(Un(E,E.h),E.h=null))}if(l.D){const Vn=ne.g?ne.g.getResponseHeader("X-HTTP-Session-Id"):null;Vn&&(l.ya=Vn,L(l.I,l.D,Vn))}}a.G=3,a.l&&a.l.ua(),a.ba&&(a.R=Date.now()-t.F,a.j.info("Handshake RTT: "+a.R+"ms")),l=a;var T=t;if(l.qa=pr(l,l.J?l.ia:null,l.W),T.K){$i(l.h,T);var N=T,B=l.L;B&&(N.I=B),N.B&&(Nn(N),Bt(N)),l.g=T}else lr(l);0<a.i.length&&qt(a)}else k[0]!="stop"&&k[0]!="close"||Le(a,7);else a.G==3&&(k[0]=="stop"||k[0]=="close"?k[0]=="stop"?Le(a,7):Fn(a):k[0]!="noop"&&a.l&&a.l.ta(k),a.v=0)}}at(4)}catch{}}var Po=class{constructor(t,s){this.g=t,this.map=s}};function Bi(t){this.l=t||10,p.PerformanceNavigationTiming?(t=p.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Vi(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Hi(t){return t.h?1:t.g?t.g.size:0}function Mn(t,s){return t.h?t.h==s:t.g?t.g.has(s):!1}function Un(t,s){t.g?t.g.add(s):t.h=s}function $i(t,s){t.h&&t.h==s?t.h=null:t.g&&t.g.has(s)&&t.g.delete(s)}Bi.prototype.cancel=function(){if(this.i=Wi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Wi(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let s=t.i;for(const a of t.g.values())s=s.concat(a.D);return s}return U(t.i)}function Ro(t){if(t.V&&typeof t.V=="function")return t.V();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(v(t)){for(var s=[],a=t.length,l=0;l<a;l++)s.push(t[l]);return s}s=[],a=0;for(l in t)s[a++]=t[l];return s}function ko(t){if(t.na&&typeof t.na=="function")return t.na();if(!t.V||typeof t.V!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(v(t)||typeof t=="string"){var s=[];t=t.length;for(var a=0;a<t;a++)s.push(a);return s}s=[],a=0;for(const l in t)s[a++]=l;return s}}}function zi(t,s){if(t.forEach&&typeof t.forEach=="function")t.forEach(s,void 0);else if(v(t)||typeof t=="string")Array.prototype.forEach.call(t,s,void 0);else for(var a=ko(t),l=Ro(t),y=l.length,E=0;E<y;E++)s.call(void 0,l[E],a&&a[E],t)}var Gi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Oo(t,s){if(t){t=t.split("&");for(var a=0;a<t.length;a++){var l=t[a].indexOf("="),y=null;if(0<=l){var E=t[a].substring(0,l);y=t[a].substring(l+1)}else E=t[a];s(E,y?decodeURIComponent(y.replace(/\+/g," ")):"")}}}function Ne(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof Ne){this.h=t.h,Vt(this,t.j),this.o=t.o,this.g=t.g,Ht(this,t.s),this.l=t.l;var s=t.i,a=new ft;a.i=s.i,s.g&&(a.g=new Map(s.g),a.h=s.h),Ki(this,a),this.m=t.m}else t&&(s=String(t).match(Gi))?(this.h=!1,Vt(this,s[1]||"",!0),this.o=ut(s[2]||""),this.g=ut(s[3]||"",!0),Ht(this,s[4]),this.l=ut(s[5]||"",!0),Ki(this,s[6]||"",!0),this.m=ut(s[7]||"")):(this.h=!1,this.i=new ft(null,this.h))}Ne.prototype.toString=function(){var t=[],s=this.j;s&&t.push(dt(s,qi,!0),":");var a=this.g;return(a||s=="file")&&(t.push("//"),(s=this.o)&&t.push(dt(s,qi,!0),"@"),t.push(encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.s,a!=null&&t.push(":",String(a))),(a=this.l)&&(this.g&&a.charAt(0)!="/"&&t.push("/"),t.push(dt(a,a.charAt(0)=="/"?Lo:No,!0))),(a=this.i.toString())&&t.push("?",a),(a=this.m)&&t.push("#",dt(a,Uo)),t.join("")};function le(t){return new Ne(t)}function Vt(t,s,a){t.j=a?ut(s,!0):s,t.j&&(t.j=t.j.replace(/:$/,""))}function Ht(t,s){if(s){if(s=Number(s),isNaN(s)||0>s)throw Error("Bad port number "+s);t.s=s}else t.s=null}function Ki(t,s,a){s instanceof ft?(t.i=s,xo(t.i,t.h)):(a||(s=dt(s,Mo)),t.i=new ft(s,t.h))}function L(t,s,a){t.i.set(s,a)}function $t(t){return L(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ut(t,s){return t?s?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function dt(t,s,a){return typeof t=="string"?(t=encodeURI(t).replace(s,Do),a&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Do(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var qi=/[#\/\?@]/g,No=/[#\?:]/g,Lo=/[#\?]/g,Mo=/[#\?@]/g,Uo=/#/g;function ft(t,s){this.h=this.g=null,this.i=t||null,this.j=!!s}function ye(t){t.g||(t.g=new Map,t.h=0,t.i&&Oo(t.i,function(s,a){t.add(decodeURIComponent(s.replace(/\+/g," ")),a)}))}i=ft.prototype,i.add=function(t,s){ye(this),this.i=null,t=We(this,t);var a=this.g.get(t);return a||this.g.set(t,a=[]),a.push(s),this.h+=1,this};function Ji(t,s){ye(t),s=We(t,s),t.g.has(s)&&(t.i=null,t.h-=t.g.get(s).length,t.g.delete(s))}function Xi(t,s){return ye(t),s=We(t,s),t.g.has(s)}i.forEach=function(t,s){ye(this),this.g.forEach(function(a,l){a.forEach(function(y){t.call(s,y,l,this)},this)},this)},i.na=function(){ye(this);const t=Array.from(this.g.values()),s=Array.from(this.g.keys()),a=[];for(let l=0;l<s.length;l++){const y=t[l];for(let E=0;E<y.length;E++)a.push(s[l])}return a},i.V=function(t){ye(this);let s=[];if(typeof t=="string")Xi(this,t)&&(s=s.concat(this.g.get(We(this,t))));else{t=Array.from(this.g.values());for(let a=0;a<t.length;a++)s=s.concat(t[a])}return s},i.set=function(t,s){return ye(this),this.i=null,t=We(this,t),Xi(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[s]),this.h+=1,this},i.get=function(t,s){return t?(t=this.V(t),0<t.length?String(t[0]):s):s};function Yi(t,s,a){Ji(t,s),0<a.length&&(t.i=null,t.g.set(We(t,s),U(a)),t.h+=a.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],s=Array.from(this.g.keys());for(var a=0;a<s.length;a++){var l=s[a];const E=encodeURIComponent(String(l)),T=this.V(l);for(l=0;l<T.length;l++){var y=E;T[l]!==""&&(y+="="+encodeURIComponent(String(T[l]))),t.push(y)}}return this.i=t.join("&")};function We(t,s){return s=String(s),t.j&&(s=s.toLowerCase()),s}function xo(t,s){s&&!t.j&&(ye(t),t.i=null,t.g.forEach(function(a,l){var y=l.toLowerCase();l!=y&&(Ji(this,l),Yi(this,y,a))},t)),t.j=s}function Fo(t,s){const a=new lt;if(p.Image){const l=new Image;l.onload=M(Ie,a,"TestLoadImage: loaded",!0,s,l),l.onerror=M(Ie,a,"TestLoadImage: error",!1,s,l),l.onabort=M(Ie,a,"TestLoadImage: abort",!1,s,l),l.ontimeout=M(Ie,a,"TestLoadImage: timeout",!1,s,l),p.setTimeout(function(){l.ontimeout&&l.ontimeout()},1e4),l.src=t}else s(!1)}function jo(t,s){const a=new lt,l=new AbortController,y=setTimeout(()=>{l.abort(),Ie(a,"TestPingServer: timeout",!1,s)},1e4);fetch(t,{signal:l.signal}).then(E=>{clearTimeout(y),E.ok?Ie(a,"TestPingServer: ok",!0,s):Ie(a,"TestPingServer: server error",!1,s)}).catch(()=>{clearTimeout(y),Ie(a,"TestPingServer: error",!1,s)})}function Ie(t,s,a,l,y){try{y&&(y.onload=null,y.onerror=null,y.onabort=null,y.ontimeout=null),l(a)}catch{}}function Bo(){this.g=new Io}function Vo(t,s,a){const l=a||"";try{zi(t,function(y,E){let T=y;w(y)&&(T=An(y)),s.push(l+E+"="+encodeURIComponent(T))})}catch(y){throw s.push(l+"type="+encodeURIComponent("_badmap")),y}}function Wt(t){this.l=t.Ub||null,this.j=t.eb||!1}P(Wt,Sn),Wt.prototype.g=function(){return new zt(this.l,this.j)},Wt.prototype.i=function(t){return function(){return t}}({});function zt(t,s){H.call(this),this.D=t,this.o=s,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(zt,H),i=zt.prototype,i.open=function(t,s){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=s,this.readyState=1,gt(this)},i.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const s={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(s.body=t),(this.D||p).fetch(new Request(this.A,s)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,pt(this)),this.readyState=0},i.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,gt(this)),this.g&&(this.readyState=3,gt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Zi(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))};function Zi(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}i.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var s=t.value?t.value:new Uint8Array(0);(s=this.v.decode(s,{stream:!t.done}))&&(this.response=this.responseText+=s)}t.done?pt(this):gt(this),this.readyState==3&&Zi(this)}},i.Ra=function(t){this.g&&(this.response=this.responseText=t,pt(this))},i.Qa=function(t){this.g&&(this.response=t,pt(this))},i.ga=function(){this.g&&pt(this)};function pt(t){t.readyState=4,t.l=null,t.j=null,t.v=null,gt(t)}i.setRequestHeader=function(t,s){this.u.append(t,s)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],s=this.h.entries();for(var a=s.next();!a.done;)a=a.value,t.push(a[0]+": "+a[1]),a=s.next();return t.join(`\r
`)};function gt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(zt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function Qi(t){let s="";return J(t,function(a,l){s+=l,s+=":",s+=a,s+=`\r
`}),s}function xn(t,s,a){e:{for(l in a){var l=!1;break e}l=!0}l||(a=Qi(a),typeof t=="string"?a!=null&&encodeURIComponent(String(a)):L(t,s,a))}function x(t){H.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(x,H);var Ho=/^https?$/i,$o=["POST","PUT"];i=x.prototype,i.Ha=function(t){this.J=t},i.ea=function(t,s,a,l){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);s=s?s.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():kn.g(),this.v=this.o?ki(this.o):ki(kn),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(s,String(t),!0),this.B=!1}catch(E){er(this,E);return}if(t=a||"",a=new Map(this.headers),l)if(Object.getPrototypeOf(l)===Object.prototype)for(var y in l)a.set(y,l[y]);else if(typeof l.keys=="function"&&typeof l.get=="function")for(const E of l.keys())a.set(E,l.get(E));else throw Error("Unknown input type for opt_headers: "+String(l));l=Array.from(a.keys()).find(E=>E.toLowerCase()=="content-type"),y=p.FormData&&t instanceof p.FormData,!(0<=Array.prototype.indexOf.call($o,s,void 0))||l||y||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[E,T]of a)this.g.setRequestHeader(E,T);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ir(this),this.u=!0,this.g.send(t),this.u=!1}catch(E){er(this,E)}};function er(t,s){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=s,t.m=5,tr(t),Gt(t)}function tr(t){t.A||(t.A=!0,z(t,"complete"),z(t,"error"))}i.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,z(this,"complete"),z(this,"abort"),Gt(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Gt(this,!0)),x.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?nr(this):this.bb())},i.bb=function(){nr(this)};function nr(t){if(t.h&&typeof h<"u"&&(!t.v[1]||he(t)!=4||t.Z()!=2)){if(t.u&&he(t)==4)bi(t.Ea,0,t);else if(z(t,"readystatechange"),he(t)==4){t.h=!1;try{const T=t.Z();e:switch(T){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var s=!0;break e;default:s=!1}var a;if(!(a=s)){var l;if(l=T===0){var y=String(t.D).match(Gi)[1]||null;!y&&p.self&&p.self.location&&(y=p.self.location.protocol.slice(0,-1)),l=!Ho.test(y?y.toLowerCase():"")}a=l}if(a)z(t,"complete"),z(t,"success");else{t.m=6;try{var E=2<he(t)?t.g.statusText:""}catch{E=""}t.l=E+" ["+t.Z()+"]",tr(t)}}finally{Gt(t)}}}}function Gt(t,s){if(t.g){ir(t);const a=t.g,l=t.v[0]?()=>{}:null;t.g=null,t.v=null,s||z(t,"ready");try{a.onreadystatechange=l}catch{}}}function ir(t){t.I&&(p.clearTimeout(t.I),t.I=null)}i.isActive=function(){return!!this.g};function he(t){return t.g?t.g.readyState:0}i.Z=function(){try{return 2<he(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(t){if(this.g){var s=this.g.responseText;return t&&s.indexOf(t)==0&&(s=s.substring(t.length)),yo(s)}};function rr(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Wo(t){const s={};t=(t.g&&2<=he(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let l=0;l<t.length;l++){if(j(t[l]))continue;var a=m(t[l]);const y=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const E=s[y]||[];s[y]=E,E.push(a)}_(s,function(l){return l.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function mt(t,s,a){return a&&a.internalChannelParams&&a.internalChannelParams[t]||s}function sr(t){this.Aa=0,this.i=[],this.j=new lt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=mt("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=mt("baseRetryDelayMs",5e3,t),this.cb=mt("retryDelaySeedMs",1e4,t),this.Wa=mt("forwardChannelMaxRetries",2,t),this.wa=mt("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new Bi(t&&t.concurrentRequestLimit),this.Da=new Bo,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=sr.prototype,i.la=8,i.G=1,i.connect=function(t,s,a,l){G(0),this.W=t,this.H=s||{},a&&l!==void 0&&(this.H.OSID=a,this.H.OAID=l),this.F=this.X,this.I=pr(this,null,this.W),qt(this)};function Fn(t){if(or(t),t.G==3){var s=t.U++,a=le(t.I);if(L(a,"SID",t.K),L(a,"RID",s),L(a,"TYPE","terminate"),_t(t,a),s=new ve(t,t.j,s),s.L=2,s.v=$t(le(a)),a=!1,p.navigator&&p.navigator.sendBeacon)try{a=p.navigator.sendBeacon(s.v.toString(),"")}catch{}!a&&p.Image&&(new Image().src=s.v,a=!0),a||(s.g=gr(s.j,null),s.g.ea(s.v)),s.F=Date.now(),Bt(s)}fr(t)}function Kt(t){t.g&&(Bn(t),t.g.cancel(),t.g=null)}function or(t){Kt(t),t.u&&(p.clearTimeout(t.u),t.u=null),Jt(t),t.h.cancel(),t.s&&(typeof t.s=="number"&&p.clearTimeout(t.s),t.s=null)}function qt(t){if(!Vi(t.h)&&!t.s){t.s=!0;var s=t.Ga;nt||Ei(),it||(nt(),it=!0),mn.add(s,t),t.B=0}}function zo(t,s){return Hi(t.h)>=t.h.j-(t.s?1:0)?!1:t.s?(t.i=s.D.concat(t.i),!0):t.G==1||t.G==2||t.B>=(t.Va?0:t.Wa)?!1:(t.s=ct(A(t.Ga,t,s),dr(t,t.B)),t.B++,!0)}i.Ga=function(t){if(this.s)if(this.s=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const y=new ve(this,this.j,t);let E=this.o;if(this.S&&(E?(E=u(E),g(E,this.S)):E=this.S),this.m!==null||this.O||(y.H=E,E=null),this.P)e:{for(var s=0,a=0;a<this.i.length;a++){t:{var l=this.i[a];if("__data__"in l.map&&(l=l.map.__data__,typeof l=="string")){l=l.length;break t}l=void 0}if(l===void 0)break;if(s+=l,4096<s){s=a;break e}if(s===4096||a===this.i.length-1){s=a+1;break e}}s=1e3}else s=1e3;s=cr(this,y,s),a=le(this.I),L(a,"RID",t),L(a,"CVER",22),this.D&&L(a,"X-HTTP-Session-Id",this.D),_t(this,a),E&&(this.O?s="headers="+encodeURIComponent(String(Qi(E)))+"&"+s:this.m&&xn(a,this.m,E)),Un(this.h,y),this.Ua&&L(a,"TYPE","init"),this.P?(L(a,"$req",s),L(a,"SID","null"),y.T=!0,Dn(y,a,null)):Dn(y,a,s),this.G=2}}else this.G==3&&(t?ar(this,t):this.i.length==0||Vi(this.h)||ar(this))};function ar(t,s){var a;s?a=s.l:a=t.U++;const l=le(t.I);L(l,"SID",t.K),L(l,"RID",a),L(l,"AID",t.T),_t(t,l),t.m&&t.o&&xn(l,t.m,t.o),a=new ve(t,t.j,a,t.B+1),t.m===null&&(a.H=t.o),s&&(t.i=s.D.concat(t.i)),s=cr(t,a,1e3),a.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Un(t.h,a),Dn(a,l,s)}function _t(t,s){t.H&&J(t.H,function(a,l){L(s,l,a)}),t.l&&zi({},function(a,l){L(s,l,a)})}function cr(t,s,a){a=Math.min(t.i.length,a);var l=t.l?A(t.l.Na,t.l,t):null;e:{var y=t.i;let E=-1;for(;;){const T=["count="+a];E==-1?0<a?(E=y[0].g,T.push("ofs="+E)):E=0:T.push("ofs="+E);let N=!0;for(let B=0;B<a;B++){let k=y[B].g;const $=y[B].map;if(k-=E,0>k)E=Math.max(0,y[B].g-100),N=!1;else try{Vo($,T,"req"+k+"_")}catch{l&&l($)}}if(N){l=T.join("&");break e}}}return t=t.i.splice(0,a),s.D=t,l}function lr(t){if(!t.g&&!t.u){t.Y=1;var s=t.Fa;nt||Ei(),it||(nt(),it=!0),mn.add(s,t),t.v=0}}function jn(t){return t.g||t.u||3<=t.v?!1:(t.Y++,t.u=ct(A(t.Fa,t),dr(t,t.v)),t.v++,!0)}i.Fa=function(){if(this.u=null,hr(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=ct(A(this.ab,this),t)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,G(10),Kt(this),hr(this))};function Bn(t){t.A!=null&&(p.clearTimeout(t.A),t.A=null)}function hr(t){t.g=new ve(t,t.j,"rpc",t.Y),t.m===null&&(t.g.H=t.o),t.g.O=0;var s=le(t.qa);L(s,"RID","rpc"),L(s,"SID",t.K),L(s,"AID",t.T),L(s,"CI",t.F?"0":"1"),!t.F&&t.ja&&L(s,"TO",t.ja),L(s,"TYPE","xmlhttp"),_t(t,s),t.m&&t.o&&xn(s,t.m,t.o),t.L&&(t.g.I=t.L);var a=t.g;t=t.ia,a.L=1,a.v=$t(le(s)),a.m=null,a.P=!0,xi(a,t)}i.Za=function(){this.C!=null&&(this.C=null,Kt(this),jn(this),G(19))};function Jt(t){t.C!=null&&(p.clearTimeout(t.C),t.C=null)}function ur(t,s){var a=null;if(t.g==s){Jt(t),Bn(t),t.g=null;var l=2}else if(Mn(t.h,s))a=s.D,$i(t.h,s),l=1;else return;if(t.G!=0){if(s.o)if(l==1){a=s.m?s.m.length:0,s=Date.now()-s.F;var y=t.B;l=Pn(),z(l,new Li(l,a)),qt(t)}else lr(t);else if(y=s.s,y==3||y==0&&0<s.X||!(l==1&&zo(t,s)||l==2&&jn(t)))switch(a&&0<a.length&&(s=t.h,s.i=s.i.concat(a)),y){case 1:Le(t,5);break;case 4:Le(t,10);break;case 3:Le(t,6);break;default:Le(t,2)}}}function dr(t,s){let a=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(a*=2),a*s}function Le(t,s){if(t.j.info("Error code "+s),s==2){var a=A(t.fb,t),l=t.Xa;const y=!l;l=new Ne(l||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||Vt(l,"https"),$t(l),y?Fo(l.toString(),a):jo(l.toString(),a)}else G(2);t.G=0,t.l&&t.l.sa(s),fr(t),or(t)}i.fb=function(t){t?(this.j.info("Successfully pinged google.com"),G(2)):(this.j.info("Failed to ping google.com"),G(1))};function fr(t){if(t.G=0,t.ka=[],t.l){const s=Wi(t.h);(s.length!=0||t.i.length!=0)&&(D(t.ka,s),D(t.ka,t.i),t.h.i.length=0,U(t.i),t.i.length=0),t.l.ra()}}function pr(t,s,a){var l=a instanceof Ne?le(a):new Ne(a);if(l.g!="")s&&(l.g=s+"."+l.g),Ht(l,l.s);else{var y=p.location;l=y.protocol,s=s?s+"."+y.hostname:y.hostname,y=+y.port;var E=new Ne(null);l&&Vt(E,l),s&&(E.g=s),y&&Ht(E,y),a&&(E.l=a),l=E}return a=t.D,s=t.ya,a&&s&&L(l,a,s),L(l,"VER",t.la),_t(t,l),l}function gr(t,s,a){if(s&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return s=t.Ca&&!t.pa?new x(new Wt({eb:a})):new x(t.pa),s.Ha(t.J),s}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function mr(){}i=mr.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function ee(t,s){H.call(this),this.g=new sr(s),this.l=t,this.h=s&&s.messageUrlParams||null,t=s&&s.messageHeaders||null,s&&s.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=s&&s.initMessageHeaders||null,s&&s.messageContentType&&(t?t["X-WebChannel-Content-Type"]=s.messageContentType:t={"X-WebChannel-Content-Type":s.messageContentType}),s&&s.va&&(t?t["X-WebChannel-Client-Profile"]=s.va:t={"X-WebChannel-Client-Profile":s.va}),this.g.S=t,(t=s&&s.Sb)&&!j(t)&&(this.g.m=t),this.v=s&&s.supportsCrossDomainXhr||!1,this.u=s&&s.sendRawJson||!1,(s=s&&s.httpSessionIdParam)&&!j(s)&&(this.g.D=s,t=this.h,t!==null&&s in t&&(t=this.h,s in t&&delete t[s])),this.j=new ze(this)}P(ee,H),ee.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ee.prototype.close=function(){Fn(this.g)},ee.prototype.o=function(t){var s=this.g;if(typeof t=="string"){var a={};a.__data__=t,t=a}else this.u&&(a={},a.__data__=An(t),t=a);s.i.push(new Po(s.Ya++,t)),s.G==3&&qt(s)},ee.prototype.N=function(){this.g.l=null,delete this.j,Fn(this.g),delete this.g,ee.aa.N.call(this)};function _r(t){bn.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var s=t.__sm__;if(s){e:{for(const a in s){t=a;break e}t=void 0}(this.i=t)&&(t=this.i,s=s!==null&&t in s?s[t]:void 0),this.data=s}else this.data=t}P(_r,bn);function vr(){Cn.call(this),this.status=1}P(vr,Cn);function ze(t){this.g=t}P(ze,mr),ze.prototype.ua=function(){z(this.g,"a")},ze.prototype.ta=function(t){z(this.g,new _r(t))},ze.prototype.sa=function(t){z(this.g,new vr)},ze.prototype.ra=function(){z(this.g,"b")},ee.prototype.send=ee.prototype.o,ee.prototype.open=ee.prototype.m,ee.prototype.close=ee.prototype.close,Rn.NO_ERROR=0,Rn.TIMEOUT=8,Rn.HTTP_ERROR=6,bo.COMPLETE="complete",Eo.EventType=ot,ot.OPEN="a",ot.CLOSE="b",ot.ERROR="c",ot.MESSAGE="d",H.prototype.listen=H.prototype.K,x.prototype.listenOnce=x.prototype.L,x.prototype.getLastError=x.prototype.Ka,x.prototype.getLastErrorCode=x.prototype.Ba,x.prototype.getStatus=x.prototype.Z,x.prototype.getResponseJson=x.prototype.Oa,x.prototype.getResponseText=x.prototype.oa,x.prototype.send=x.prototype.ea,x.prototype.setWithCredentials=x.prototype.Ha}).apply(typeof Yt<"u"?Yt:typeof self<"u"?self:typeof window<"u"?window:{});const Or="@firebase/firestore",Dr="4.7.17";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}K.UNAUTHENTICATED=new K(null),K.GOOGLE_CREDENTIALS=new K("google-credentials-uid"),K.FIRST_PARTY=new K("first-party-uid"),K.MOCK_USER=new K("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kt="11.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze=new ai("@firebase/firestore");function ie(i,...e){if(Ze.logLevel<=O.DEBUG){const n=e.map(hi);Ze.debug(`Firestore (${kt}): ${i}`,...n)}}function ws(i,...e){if(Ze.logLevel<=O.ERROR){const n=e.map(hi);Ze.error(`Firestore (${kt}): ${i}`,...n)}}function Dc(i,...e){if(Ze.logLevel<=O.WARN){const n=e.map(hi);Ze.warn(`Firestore (${kt}): ${i}`,...n)}}function hi(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(i,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,As(i,r,n)}function As(i,e,n){let r=`FIRESTORE (${kt}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw ws(r),new Error(r)}function Et(i,e,n,r){let o="Unexpected state";typeof n=="string"?o=n:r=n,i||As(e,o,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class Y extends me{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Nc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(K.UNAUTHENTICATED))}shutdown(){}}class Lc{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Mc{constructor(e){this.t=e,this.currentUser=K.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Et(this.o===void 0,42304);let r=this.i;const o=v=>this.i!==r?(r=this.i,n(v)):Promise.resolve();let c=new wt;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new wt,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const v=c;e.enqueueRetryable(async()=>{await v.promise,await o(this.currentUser)})},p=v=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=v,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(v=>p(v)),setTimeout(()=>{if(!this.auth){const v=this.t.getImmediate({optional:!0});v?p(v):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new wt)}},0),h()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Et(typeof r.accessToken=="string",31837,{l:r}),new Ss(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Et(e===null||typeof e=="string",2055,{h:e}),new K(e)}}class Uc{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=K.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class xc{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Uc(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(K.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Nr{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Fc{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,te(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Et(this.o===void 0,3512);const r=c=>{c.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const h=c.token!==this.m;return this.m=c.token,ie("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?n(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable(()=>r(c))};const o=c=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(c=>o(c)),setTimeout(()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?o(c):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Nr(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Et(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Nr(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function jc(i){return i.name==="IndexedDbTransactionError"}const ti="(default)";class on{constructor(e,n){this.projectId=e,this.database=n||ti}static empty(){return new on("","")}get isDefaultDatabase(){return this.database===ti}isEqual(e){return e instanceof on&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lr,R;(R=Lr||(Lr={}))[R.OK=0]="OK",R[R.CANCELLED=1]="CANCELLED",R[R.UNKNOWN=2]="UNKNOWN",R[R.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",R[R.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",R[R.NOT_FOUND=5]="NOT_FOUND",R[R.ALREADY_EXISTS=6]="ALREADY_EXISTS",R[R.PERMISSION_DENIED=7]="PERMISSION_DENIED",R[R.UNAUTHENTICATED=16]="UNAUTHENTICATED",R[R.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",R[R.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",R[R.ABORTED=10]="ABORTED",R[R.OUT_OF_RANGE=11]="OUT_OF_RANGE",R[R.UNIMPLEMENTED=12]="UNIMPLEMENTED",R[R.INTERNAL=13]="INTERNAL",R[R.UNAVAILABLE=14]="UNAVAILABLE",R[R.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Es([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc=1048576;function Kn(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,n,r=1e3,o=1.5,c=6e4){this.xi=e,this.timerId=n,this.A_=r,this.R_=o,this.V_=c,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const n=Math.floor(this.m_+this.w_()),r=Math.max(0,Date.now()-this.g_),o=Math.max(0,n-r);o>0&&ie("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.m_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,o,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,n,r,o,c){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=o,this.removalCallback=c,this.deferred=new wt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,o,c){const h=Date.now()+r,p=new ui(e,n,h,o,c);return p.start(r),p}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(X.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Mr,Ur;(Ur=Mr||(Mr={})).xa="default",Ur.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=new Map;function Wc(i,e,n,r){if(e===!0&&r===!0)throw new Y(X.INVALID_ARGUMENT,`${i} and ${n} cannot be used together.`)}function zc(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Ts(12329,{type:typeof i})}function Gc(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new Y(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=zc(i);throw new Y(X.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs="firestore.googleapis.com",Fr=!0;class jr{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=bs,this.ssl=Fr}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Fr;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Bc;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Vc)throw new Y(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Wc("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$c((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new Y(X.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new Y(X.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new Y(X.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,o){return r.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Cs{constructor(e,n,r,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jr({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jr(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Nc;switch(r.type){case"firstParty":return new xc(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=xr.get(n);r&&(ie("ComponentProvider","Removing Datastore"),xr.delete(n),r.terminate())}(this),Promise.resolve()}}function Kc(i,e,n,r={}){var o;i=Gc(i,Cs);const c=Ct(e),h=i._getSettings(),p=Object.assign(Object.assign({},h),{emulatorOptions:i._getEmulatorOptions()}),v=`${e}:${n}`;c&&(ps(`https://${v}`),gs("Firestore",!0)),h.host!==bs&&h.host!==v&&Dc("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const w=Object.assign(Object.assign({},h),{host:v,ssl:c,emulatorOptions:r});if(!Ue(w,p)&&(i._setSettings(w),r.mockUserToken)){let S,C;if(typeof r.mockUserToken=="string")S=r.mockUserToken,C=K.MOCK_USER;else{S=na(r.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const A=r.mockUserToken.sub||r.mockUserToken.user_id;if(!A)throw new Y(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");C=new K(A)}i._authCredentials=new Lc(new Ss(S,C))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="AsyncQueue";class Vr{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new Hc(this,"async_queue_retry"),this.rc=()=>{const r=Kn();r&&ie(Br,"Visibility state changed to "+r.visibilityState),this.x_.b_()},this.sc=e;const n=Kn();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const n=Kn();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const n=new wt;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!jc(e))throw e;ie(Br,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const n=this.sc.then(()=>(this.ec=!0,e().catch(r=>{throw this.Xu=r,this.ec=!1,ws("INTERNAL UNHANDLED ERROR: ",Hr(r)),r}).then(r=>(this.ec=!1,r))));return this.sc=n,n}enqueueAfterDelay(e,n,r){this.oc(),this.nc.indexOf(e)>-1&&(n=0);const o=ui.createAndSchedule(this,e,n,r,c=>this.uc(c));return this.Zu.push(o),o}oc(){this.Xu&&Ts(47125,{cc:Hr(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const n of this.Zu)if(n.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Zu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const n=this.Zu.indexOf(e);this.Zu.splice(n,1)}}function Hr(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class qc extends Cs{constructor(e,n,r,o){super(e,n,r,o),this.type="firestore",this._queue=new Vr,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Vr(e),this._firestoreClient=void 0,await e}}}function lu(i,e){const n=typeof i=="object"?i:vs(),r=typeof i=="string"?i:ti,o=li(n,"firestore").getImmediate({identifier:r});if(!o._initialized){const c=ea("firestore");c&&Kc(o,...c)}return o}(function(e,n=!0){(function(o){kt=o})(Qe),Ye(new xe("firestore",(r,{instanceIdentifier:o,options:c})=>{const h=r.getProvider("app").getImmediate(),p=new qc(new Mc(r.getProvider("auth-internal")),new Fc(h,r.getProvider("app-check-internal")),function(w,S){if(!Object.prototype.hasOwnProperty.apply(w.options,["projectId"]))throw new Y(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new on(w.options.projectId,S)}(h,o),h);return c=Object.assign({useFetchStreams:n},c),p._setSettings(c),p},"PUBLIC").setMultipleInstances(!0)),Pe(Or,Dr,e),Pe(Or,Dr,"esm2017")})();var Jc="firebase",Xc="11.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pe(Jc,Xc,"app");function di(i,e){var n={};for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&e.indexOf(r)<0&&(n[r]=i[r]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(i);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(i,r[o])&&(n[r[o]]=i[r[o]]);return n}function Ps(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Yc=Ps,Rs=new Pt("auth","Firebase",Ps());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an=new ai("@firebase/auth");function Zc(i,...e){an.logLevel<=O.WARN&&an.warn(`Auth (${Qe}): ${i}`,...e)}function Qt(i,...e){an.logLevel<=O.ERROR&&an.error(`Auth (${Qe}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(i,...e){throw fi(i,...e)}function oe(i,...e){return fi(i,...e)}function ks(i,e,n){const r=Object.assign(Object.assign({},Yc()),{[e]:n});return new Pt("auth","Firebase",r).create(e,{appName:i.name})}function fe(i){return ks(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fi(i,...e){if(typeof i!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=i.name),i._errorFactory.create(n,...r)}return Rs.create(i,...e)}function b(i,e,...n){if(!i)throw fi(e,...n)}function ue(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Qt(e),new Error(e)}function ge(i,e){i||ue(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function Qc(){return $r()==="http:"||$r()==="https:"}function $r(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Qc()||aa()||"connection"in navigator)?navigator.onLine:!0}function tl(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,n){this.shortDelay=e,this.longDelay=n,ge(n>e,"Short delay should be less than long delay!"),this.isMobile=sa()||ca()}get(){return el()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(i,e){ge(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ue("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ue("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ue("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],rl=new Ot(3e4,6e4);function Re(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function ke(i,e,n,r,o={}){return Ds(i,o,async()=>{let c={},h={};r&&(e==="GET"?h=r:c={body:JSON.stringify(r)});const p=Rt(Object.assign({key:i.config.apiKey},h)).slice(1),v=await i._getAdditionalHeaders();v["Content-Type"]="application/json",i.languageCode&&(v["X-Firebase-Locale"]=i.languageCode);const w=Object.assign({method:e,headers:v},c);return oa()||(w.referrerPolicy="no-referrer"),i.emulatorConfig&&Ct(i.emulatorConfig.host)&&(w.credentials="include"),Os.fetch()(await Ns(i,i.config.apiHost,n,p),w)})}async function Ds(i,e,n){i._canInitEmulator=!1;const r=Object.assign(Object.assign({},nl),e);try{const o=new ol(i),c=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw Zt(i,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const p=c.ok?h.errorMessage:h.error.message,[v,w]=p.split(" : ");if(v==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zt(i,"credential-already-in-use",h);if(v==="EMAIL_EXISTS")throw Zt(i,"email-already-in-use",h);if(v==="USER_DISABLED")throw Zt(i,"user-disabled",h);const S=r[v]||v.toLowerCase().replace(/[_\s]+/g,"-");if(w)throw ks(i,S,w);se(i,S)}}catch(o){if(o instanceof me)throw o;se(i,"network-request-failed",{message:String(o)})}}async function Dt(i,e,n,r,o={}){const c=await ke(i,e,n,r,o);return"mfaPendingCredential"in c&&se(i,"multi-factor-auth-required",{_serverResponse:c}),c}async function Ns(i,e,n,r){const o=`${e}${n}?${r}`,c=i,h=c.config.emulator?pi(i.config,o):`${i.config.apiScheme}://${o}`;return il.includes(n)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(h).toString():h}function sl(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ol{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(oe(this.auth,"network-request-failed")),rl.get())})}}function Zt(i,e,n){const r={appName:i.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const o=oe(i,e,r);return o.customData._tokenResponse=n,o}function Wr(i){return i!==void 0&&i.enterprise!==void 0}class al{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return sl(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function cl(i,e){return ke(i,"GET","/v2/recaptchaConfig",Re(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ll(i,e){return ke(i,"POST","/v1/accounts:delete",e)}async function cn(i,e){return ke(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hl(i,e=!1){const n=Be(i),r=await n.getIdToken(e),o=gi(r);b(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,h=c?.sign_in_provider;return{claims:o,token:r,authTime:Tt(qn(o.auth_time)),issuedAtTime:Tt(qn(o.iat)),expirationTime:Tt(qn(o.exp)),signInProvider:h||null,signInSecondFactor:c?.sign_in_second_factor||null}}function qn(i){return Number(i)*1e3}function gi(i){const[e,n,r]=i.split(".");if(e===void 0||n===void 0||r===void 0)return Qt("JWT malformed, contained fewer than 3 sections"),null;try{const o=hs(n);return o?JSON.parse(o):(Qt("Failed to decode base64 JWT payload"),null)}catch(o){return Qt("Caught error parsing JWT payload as JSON",o?.toString()),null}}function zr(i){const e=gi(i);return b(e,"internal-error"),b(typeof e.exp<"u","internal-error"),b(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function St(i,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof me&&ul(r)&&i.auth.currentUser===i&&await i.auth.signOut(),r}}function ul({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tt(this.lastLoginAt),this.creationTime=Tt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ln(i){var e;const n=i.auth,r=await i.getIdToken(),o=await St(i,cn(n,{idToken:r}));b(o?.users.length,n,"internal-error");const c=o.users[0];i._notifyReloadListener(c);const h=!((e=c.providerUserInfo)===null||e===void 0)&&e.length?Ls(c.providerUserInfo):[],p=pl(i.providerData,h),v=i.isAnonymous,w=!(i.email&&c.passwordHash)&&!p?.length,S=v?w:!1,C={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:p,metadata:new ii(c.createdAt,c.lastLoginAt),isAnonymous:S};Object.assign(i,C)}async function fl(i){const e=Be(i);await ln(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pl(i,e){return[...i.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function Ls(i){return i.map(e=>{var{providerId:n}=e,r=di(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gl(i,e){const n=await Ds(i,{},async()=>{const r=Rt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:c}=i.config,h=await Ns(i,o,"/v1/token",`key=${c}`),p=await i._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const v={method:"POST",headers:p,body:r};return i.emulatorConfig&&Ct(i.emulatorConfig.host)&&(v.credentials="include"),Os.fetch()(h,v)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ml(i,e){return ke(i,"POST","/v2/accounts:revokeToken",Re(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b(typeof e.idToken<"u","internal-error"),b(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){b(e.length!==0,"internal-error");const n=zr(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(b(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:o,expiresIn:c}=await gl(e,n);this.updateTokensAndExpiration(r,o,Number(c))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:o,expirationTime:c}=n,h=new qe;return r&&(b(typeof r=="string","internal-error",{appName:e}),h.refreshToken=r),o&&(b(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),c&&(b(typeof c=="number","internal-error",{appName:e}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qe,this.toJSON())}_performRefresh(){return ue("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(i,e){b(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class re{constructor(e){var{uid:n,auth:r,stsTokenManager:o}=e,c=di(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dl(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new ii(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(e){const n=await St(this,this.stsTokenManager.getToken(this.auth,e));return b(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return hl(this,e)}reload(){return fl(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new re(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ln(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(te(this.auth.app))return Promise.reject(fe(this.auth));const e=await this.getIdToken();return await St(this,ll(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,o,c,h,p,v,w,S;const C=(r=n.displayName)!==null&&r!==void 0?r:void 0,A=(o=n.email)!==null&&o!==void 0?o:void 0,M=(c=n.phoneNumber)!==null&&c!==void 0?c:void 0,P=(h=n.photoURL)!==null&&h!==void 0?h:void 0,U=(p=n.tenantId)!==null&&p!==void 0?p:void 0,D=(v=n._redirectEventId)!==null&&v!==void 0?v:void 0,Q=(w=n.createdAt)!==null&&w!==void 0?w:void 0,j=(S=n.lastLoginAt)!==null&&S!==void 0?S:void 0,{uid:F,emailVerified:Z,isAnonymous:Oe,providerData:J,stsTokenManager:_}=n;b(F&&_,e,"internal-error");const u=qe.fromJSON(this.name,_);b(typeof F=="string",e,"internal-error"),Ee(C,e.name),Ee(A,e.name),b(typeof Z=="boolean",e,"internal-error"),b(typeof Oe=="boolean",e,"internal-error"),Ee(M,e.name),Ee(P,e.name),Ee(U,e.name),Ee(D,e.name),Ee(Q,e.name),Ee(j,e.name);const f=new re({uid:F,auth:e,email:A,emailVerified:Z,displayName:C,isAnonymous:Oe,photoURL:P,phoneNumber:M,tenantId:U,stsTokenManager:u,createdAt:Q,lastLoginAt:j});return J&&Array.isArray(J)&&(f.providerData=J.map(g=>Object.assign({},g))),D&&(f._redirectEventId=D),f}static async _fromIdTokenResponse(e,n,r=!1){const o=new qe;o.updateFromServerResponse(n);const c=new re({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await ln(c),c}static async _fromGetAccountInfoResponse(e,n,r){const o=n.users[0];b(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?Ls(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!c?.length,p=new qe;p.updateFromIdToken(r);const v=new re({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:h}),w={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new ii(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!c?.length};return Object.assign(v,w),v}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=new Map;function de(i){ge(i instanceof Function,"Expected a class definition");let e=Gr.get(i);return e?(ge(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Gr.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ms.type="NONE";const Kr=Ms;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(i,e,n){return`firebase:${i}:${e}:${n}`}class Je{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:o,name:c}=this.auth;this.fullUserKey=en(this.userKey,o.apiKey,c),this.fullPersistenceKey=en("persistence",o.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await cn(this.auth,{idToken:e}).catch(()=>{});return n?re._fromGetAccountInfoResponse(this.auth,n,e):null}return re._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Je(de(Kr),e,r);const o=(await Promise.all(n.map(async w=>{if(await w._isAvailable())return w}))).filter(w=>w);let c=o[0]||de(Kr);const h=en(r,e.config.apiKey,e.name);let p=null;for(const w of n)try{const S=await w._get(h);if(S){let C;if(typeof S=="string"){const A=await cn(e,{idToken:S}).catch(()=>{});if(!A)break;C=await re._fromGetAccountInfoResponse(e,A,S)}else C=re._fromJSON(e,S);w!==c&&(p=C),c=w;break}}catch{}const v=o.filter(w=>w._shouldAllowMigration);return!c._shouldAllowMigration||!v.length?new Je(c,e,r):(c=v[0],p&&await c._set(h,p.toJSON()),await Promise.all(n.map(async w=>{if(w!==c)try{await w._remove(h)}catch{}})),new Je(c,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(js(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Us(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vs(e))return"Blackberry";if(Hs(e))return"Webos";if(xs(e))return"Safari";if((e.includes("chrome/")||Fs(e))&&!e.includes("edge/"))return"Chrome";if(Bs(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=i.match(n);if(r?.length===2)return r[1]}return"Other"}function Us(i=q()){return/firefox\//i.test(i)}function xs(i=q()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fs(i=q()){return/crios\//i.test(i)}function js(i=q()){return/iemobile/i.test(i)}function Bs(i=q()){return/android/i.test(i)}function Vs(i=q()){return/blackberry/i.test(i)}function Hs(i=q()){return/webos/i.test(i)}function mi(i=q()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function _l(i=q()){var e;return mi(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function vl(){return la()&&document.documentMode===10}function $s(i=q()){return mi(i)||Bs(i)||Hs(i)||Vs(i)||/windows phone/i.test(i)||js(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(i,e=[]){let n;switch(i){case"Browser":n=qr(q());break;case"Worker":n=`${qr(q())}-${i}`;break;default:n=i}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qe}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=c=>new Promise((h,p)=>{try{const v=e(c);h(v)}catch(v){p(v)}});r.onAbort=n,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Il(i,e={}){return ke(i,"GET","/v2/passwordPolicy",Re(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El=6;class wl{constructor(e){var n,r,o,c;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=h.minPasswordLength)!==null&&n!==void 0?n:El,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(c=e.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,o,c,h,p;const v={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,v),this.validatePasswordCharacterOptions(e,v),v.isValid&&(v.isValid=(n=v.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),v.isValid&&(v.isValid=(r=v.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),v.isValid&&(v.isValid=(o=v.containsLowercaseLetter)!==null&&o!==void 0?o:!0),v.isValid&&(v.isValid=(c=v.containsUppercaseLetter)!==null&&c!==void 0?c:!0),v.isValid&&(v.isValid=(h=v.containsNumericCharacter)!==null&&h!==void 0?h:!0),v.isValid&&(v.isValid=(p=v.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),v}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,o,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,n,r,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jr(this),this.idTokenSubscription=new Jr(this),this.beforeStateQueue=new yl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rs,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=de(n)),this._initializationPromise=this.queue(async()=>{var r,o,c;if(!this._deleted&&(this.persistenceManager=await Je.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((c=this.currentUser)===null||c===void 0?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await cn(this,{idToken:e}),r=await re._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(te(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(p,p))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,c=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,p=o?._redirectEventId,v=await this.tryRedirectSignIn(e);(!h||h===p)&&v?.user&&(o=v.user,c=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ln(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tl()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(te(this.app))return Promise.reject(fe(this));const n=e?Be(e):null;return n&&b(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return te(this.app)?Promise.reject(fe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return te(this.app)?Promise.reject(fe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(de(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Il(this),n=new wl(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Pt("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ml(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&de(e)||this._popupRedirectResolver;b(n,this,"argument-error"),this.redirectPersistenceManager=await Je.create(this,[de(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,o){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let h=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(b(p,this,"internal-error"),p.then(()=>{h||c(this.currentUser)}),typeof n=="function"){const v=e.addObserver(n,r,o);return()=>{h=!0,v()}}else{const v=e.addObserver(n);return()=>{h=!0,v()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ws(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var e;if(te(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&Zc(`Error while retrieving App Check token: ${n.error}`),n?.token}}function Ve(i){return Be(i)}class Jr{constructor(e){this.auth=e,this.observer=null,this.addObserver=ma(n=>this.observer=n)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fn={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Al(i){fn=i}function zs(i){return fn.loadJS(i)}function Sl(){return fn.recaptchaEnterpriseScript}function bl(){return fn.gapiScript}function Cl(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class Pl{constructor(){this.enterprise=new Rl}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Rl{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const kl="recaptcha-enterprise",Gs="NO_RECAPTCHA";class Ol{constructor(e){this.type=kl,this.auth=Ve(e)}async verify(e="verify",n=!1){async function r(c){if(!n){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(h,p)=>{cl(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(v=>{if(v.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const w=new al(v);return c.tenantId==null?c._agentRecaptchaConfig=w:c._tenantRecaptchaConfigs[c.tenantId]=w,h(w.siteKey)}}).catch(v=>{p(v)})})}function o(c,h,p){const v=window.grecaptcha;Wr(v)?v.enterprise.ready(()=>{v.enterprise.execute(c,{action:e}).then(w=>{h(w)}).catch(()=>{h(Gs)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Pl().execute("siteKey",{action:"verify"}):new Promise((c,h)=>{r(this.auth).then(p=>{if(!n&&Wr(window.grecaptcha))o(p,c,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let v=Sl();v.length!==0&&(v+=p),zs(v).then(()=>{o(p,c,h)}).catch(w=>{h(w)})}}).catch(p=>{h(p)})})}}async function Xr(i,e,n,r=!1,o=!1){const c=new Ol(i);let h;if(o)h=Gs;else try{h=await c.verify(n)}catch{h=await c.verify(n,!0)}const p=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const v=p.phoneEnrollmentInfo.phoneNumber,w=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:v,recaptchaToken:w,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const v=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:v,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return r?Object.assign(p,{captchaResp:h}):Object.assign(p,{captchaResponse:h}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function ri(i,e,n,r,o){var c;if(!((c=i._getRecaptchaConfig())===null||c===void 0)&&c.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await Xr(i,e,n,n==="getOobCode");return r(i,h)}else return r(i,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await Xr(i,e,n,n==="getOobCode");return r(i,p)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(i,e){const n=li(i,"auth");if(n.isInitialized()){const o=n.getImmediate(),c=n.getOptions();if(Ue(c,e??{}))return o;se(o,"already-initialized")}return n.initialize({options:e})}function Nl(i,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(de);e?.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(r,e?.popupRedirectResolver)}function Ll(i,e,n){const r=Ve(i);b(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!1,c=Ks(e),{host:h,port:p}=Ml(e),v=p===null?"":`:${p}`,w={url:`${c}//${h}${v}/`},S=Object.freeze({host:h,port:p,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!r._canInitEmulator){b(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),b(Ue(w,r.config.emulator)&&Ue(S,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=w,r.emulatorConfig=S,r.settings.appVerificationDisabledForTesting=!0,Ct(h)?(ps(`${c}//${h}${v}`),gs("Auth",!0)):Ul()}function Ks(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function Ml(i){const e=Ks(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const c=o[1];return{host:c,port:Yr(r.substr(c.length+1))}}else{const[c,h]=r.split(":");return{host:c,port:Yr(h)}}}function Yr(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function Ul(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ue("not implemented")}_getIdTokenResponse(e){return ue("not implemented")}_linkToIdToken(e,n){return ue("not implemented")}_getReauthenticationResolver(e){return ue("not implemented")}}async function xl(i,e){return ke(i,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fl(i,e){return Dt(i,"POST","/v1/accounts:signInWithPassword",Re(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jl(i,e){return Dt(i,"POST","/v1/accounts:signInWithEmailLink",Re(i,e))}async function Bl(i,e){return Dt(i,"POST","/v1/accounts:signInWithEmailLink",Re(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends _i{constructor(e,n,r,o=null){super("password",r),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new bt(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new bt(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ri(e,n,"signInWithPassword",Fl);case"emailLink":return jl(e,{email:this._email,oobCode:this._password});default:se(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ri(e,r,"signUpPassword",xl);case"emailLink":return Bl(e,{idToken:n,email:this._email,oobCode:this._password});default:se(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xe(i,e){return Dt(i,"POST","/v1/accounts:signInWithIdp",Re(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl="http://localhost";class Fe extends _i{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Fe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):se("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o}=n,c=di(n,["providerId","signInMethod"]);if(!r||!o)return null;const h=new Fe(r,o);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(e){const n=this.buildRequest();return Xe(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Xe(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xe(e,n)}buildRequest(){const e={requestUri:Vl,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Rt(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $l(i){const e=vt(yt(i)).link,n=e?vt(yt(e)).deep_link_id:null,r=vt(yt(i)).deep_link_id;return(r?vt(yt(r)).link:null)||r||n||e||i}class vi{constructor(e){var n,r,o,c,h,p;const v=vt(yt(e)),w=(n=v.apiKey)!==null&&n!==void 0?n:null,S=(r=v.oobCode)!==null&&r!==void 0?r:null,C=Hl((o=v.mode)!==null&&o!==void 0?o:null);b(w&&S&&C,"argument-error"),this.apiKey=w,this.operation=C,this.code=S,this.continueUrl=(c=v.continueUrl)!==null&&c!==void 0?c:null,this.languageCode=(h=v.lang)!==null&&h!==void 0?h:null,this.tenantId=(p=v.tenantId)!==null&&p!==void 0?p:null}static parseLink(e){const n=$l(e);try{return new vi(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(){this.providerId=et.PROVIDER_ID}static credential(e,n){return bt._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=vi.parseLink(n);return b(r,"argument-error"),bt._fromEmailAndCode(e,r.code,r.tenantId)}}et.PROVIDER_ID="password";et.EMAIL_PASSWORD_SIGN_IN_METHOD="password";et.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends qs{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we extends Nt{constructor(){super("facebook.com")}static credential(e){return Fe._fromParams({providerId:we.PROVIDER_ID,signInMethod:we.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return we.credentialFromTaggedObject(e)}static credentialFromError(e){return we.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return we.credential(e.oauthAccessToken)}catch{return null}}}we.FACEBOOK_SIGN_IN_METHOD="facebook.com";we.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends Nt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Fe._fromParams({providerId:Te.PROVIDER_ID,signInMethod:Te.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Te.credentialFromTaggedObject(e)}static credentialFromError(e){return Te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Te.credential(n,r)}catch{return null}}}Te.GOOGLE_SIGN_IN_METHOD="google.com";Te.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends Nt{constructor(){super("github.com")}static credential(e){return Fe._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ae.credentialFromTaggedObject(e)}static credentialFromError(e){return Ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ae.credential(e.oauthAccessToken)}catch{return null}}}Ae.GITHUB_SIGN_IN_METHOD="github.com";Ae.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se extends Nt{constructor(){super("twitter.com")}static credential(e,n){return Fe._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Se.credentialFromTaggedObject(e)}static credentialFromError(e){return Se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Se.credential(n,r)}catch{return null}}}Se.TWITTER_SIGN_IN_METHOD="twitter.com";Se.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wl(i,e){return Dt(i,"POST","/v1/accounts:signUp",Re(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,o=!1){const c=await re._fromIdTokenResponse(e,r,o),h=Zr(r);return new je({user:c,providerId:h,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const o=Zr(r);return new je({user:e,providerId:o,_tokenResponse:r,operationType:n})}}function Zr(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends me{constructor(e,n,r,o){var c;super(n.code,n.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,hn.prototype),this.customData={appName:e.name,tenantId:(c=e.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,o){return new hn(e,n,r,o)}}function Js(i,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?hn._fromErrorAndOperation(i,c,e,r):c})}async function zl(i,e,n=!1){const r=await St(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return je._forOperation(i,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gl(i,e,n=!1){const{auth:r}=i;if(te(r.app))return Promise.reject(fe(r));const o="reauthenticate";try{const c=await St(i,Js(r,o,e,i),n);b(c.idToken,r,"internal-error");const h=gi(c.idToken);b(h,r,"internal-error");const{sub:p}=h;return b(i.uid===p,r,"user-mismatch"),je._forOperation(i,o,c)}catch(c){throw c?.code==="auth/user-not-found"&&se(r,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xs(i,e,n=!1){if(te(i.app))return Promise.reject(fe(i));const r="signIn",o=await Js(i,r,e),c=await je._fromIdTokenResponse(i,r,o);return n||await i._updateCurrentUser(c.user),c}async function Kl(i,e){return Xs(Ve(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ys(i){const e=Ve(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function hu(i,e,n){if(te(i.app))return Promise.reject(fe(i));const r=Ve(i),h=await ri(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Wl).catch(v=>{throw v.code==="auth/password-does-not-meet-requirements"&&Ys(i),v}),p=await je._fromIdTokenResponse(r,"signIn",h);return await r._updateCurrentUser(p.user),p}function uu(i,e,n){return te(i.app)?Promise.reject(fe(i)):Kl(Be(i),et.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ys(i),r})}function ql(i,e,n,r){return Be(i).onIdTokenChanged(e,n,r)}function Jl(i,e,n){return Be(i).beforeAuthStateChanged(e,n)}const un="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(un,"1"),this.storage.removeItem(un),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl=1e3,Yl=10;class Qs extends Zs{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=$s(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),o=this.localCache[n];r!==o&&e(n,o,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((h,p,v)=>{this.notifyListeners(h,v)});return}const r=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(r);!n&&this.localCache[r]===h||this.notifyListeners(r,h)},c=this.storage.getItem(r);vl()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,Yl):o()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Xl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qs.type="LOCAL";const Zl=Qs;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo extends Zs{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}eo.type="SESSION";const to=eo;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const r=new pn(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:o,data:c}=n.data,h=this.handlersMap[o];if(!h?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const p=Array.from(h).map(async w=>w(n.origin,c)),v=await Ql(p);n.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:v})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pn.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(i="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return i+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,h;return new Promise((p,v)=>{const w=yi("",20);o.port1.start();const S=setTimeout(()=>{v(new Error("unsupported_event"))},r);h={messageChannel:o,onMessage(C){const A=C;if(A.data.eventId===w)switch(A.data.status){case"ack":clearTimeout(S),c=setTimeout(()=>{v(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),p(A.data.response);break;default:clearTimeout(S),clearTimeout(c),v(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:w,data:n},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(){return window}function th(i){ae().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(){return typeof ae().WorkerGlobalScope<"u"&&typeof ae().importScripts=="function"}async function nh(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ih(){var i;return((i=navigator?.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function rh(){return no()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io="firebaseLocalStorageDb",sh=1,dn="firebaseLocalStorage",ro="fbase_key";class Lt{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function gn(i,e){return i.transaction([dn],e?"readwrite":"readonly").objectStore(dn)}function oh(){const i=indexedDB.deleteDatabase(io);return new Lt(i).toPromise()}function si(){const i=indexedDB.open(io,sh);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const r=i.result;try{r.createObjectStore(dn,{keyPath:ro})}catch(o){n(o)}}),i.addEventListener("success",async()=>{const r=i.result;r.objectStoreNames.contains(dn)?e(r):(r.close(),await oh(),e(await si()))})})}async function Qr(i,e,n){const r=gn(i,!0).put({[ro]:e,value:n});return new Lt(r).toPromise()}async function ah(i,e){const n=gn(i,!1).get(e),r=await new Lt(n).toPromise();return r===void 0?null:r.value}function es(i,e){const n=gn(i,!0).delete(e);return new Lt(n).toPromise()}const ch=800,lh=3;class so{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await si(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>lh)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return no()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pn._getInstance(rh()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await nh(),!this.activeServiceWorker)return;this.sender=new eh(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ih()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await si();return await Qr(e,un,"1"),await es(e,un),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qr(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ah(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>es(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const c=gn(o,!1).getAll();return new Lt(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:c}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ch)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}so.type="LOCAL";const hh=so;new Ot(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(i,e){return e?de(e):(b(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends _i{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xe(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Xe(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Xe(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dh(i){return Xs(i.auth,new Ii(i),i.bypassAuthState)}function fh(i){const{auth:e,user:n}=i;return b(n,e,"internal-error"),Gl(n,new Ii(i),i.bypassAuthState)}async function ph(i){const{auth:e,user:n}=i;return b(n,e,"internal-error"),zl(n,new Ii(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n,r,o,c=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:o,tenantId:c,error:h,type:p}=e;if(h){this.reject(h);return}const v={auth:this.auth,requestUri:n,sessionId:r,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(v))}catch(w){this.reject(w)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dh;case"linkViaPopup":case"linkViaRedirect":return ph;case"reauthViaPopup":case"reauthViaRedirect":return fh;default:se(this.auth,"internal-error")}}resolve(e){ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh=new Ot(2e3,1e4);class Ke extends oo{constructor(e,n,r,o,c){super(e,n,o,c),this.provider=r,this.authWindow=null,this.pollId=null,Ke.currentPopupAction&&Ke.currentPopupAction.cancel(),Ke.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){ge(this.filter.length===1,"Popup operations only handle one event");const e=yi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(oe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(oe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ke.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(oe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gh.get())};e()}}Ke.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh="pendingRedirect",tn=new Map;class _h extends oo{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=tn.get(this.auth._key());if(!e){try{const r=await vh(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}tn.set(this.auth._key(),e)}return this.bypassAuthState||tn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vh(i,e){const n=Eh(e),r=Ih(i);if(!await r._isAvailable())return!1;const o=await r._get(n)==="true";return await r._remove(n),o}function yh(i,e){tn.set(i._key(),e)}function Ih(i){return de(i._redirectPersistence)}function Eh(i){return en(mh,i.config.apiKey,i.name)}async function wh(i,e,n=!1){if(te(i.app))return Promise.reject(fe(i));const r=Ve(i),o=uh(r,e),h=await new _h(r,o,n).execute();return h&&!n&&(delete h.user._redirectEventId,await r._persistUserIfCurrent(h.user),await r._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th=10*60*1e3;class Ah{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Sh(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ao(e)){const o=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(oe(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Th&&this.cachedEventUids.clear(),this.cachedEventUids.has(ts(e))}saveEventToCache(e){this.cachedEventUids.add(ts(e)),this.lastProcessedEventTime=Date.now()}}function ts(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function ao({type:i,error:e}){return i==="unknown"&&e?.code==="auth/no-auth-event"}function Sh(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ao(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bh(i,e={}){return ke(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ph=/^https?/;async function Rh(i){if(i.config.emulator)return;const{authorizedDomains:e}=await bh(i);for(const n of e)try{if(kh(n))return}catch{}se(i,"unauthorized-domain")}function kh(i){const e=ni(),{protocol:n,hostname:r}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&r===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&h.hostname===r}if(!Ph.test(n))return!1;if(Ch.test(i))return r===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh=new Ot(3e4,6e4);function ns(){const i=ae().___jsl;if(i?.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function Dh(i){return new Promise((e,n)=>{var r,o,c;function h(){ns(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ns(),n(oe(i,"network-request-failed"))},timeout:Oh.get()})}if(!((o=(r=ae().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((c=ae().gapi)===null||c===void 0)&&c.load)h();else{const p=Cl("iframefcb");return ae()[p]=()=>{gapi.load?h():n(oe(i,"network-request-failed"))},zs(`${bl()}?onload=${p}`).catch(v=>n(v))}}).catch(e=>{throw nn=null,e})}let nn=null;function Nh(i){return nn=nn||Dh(i),nn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh=new Ot(5e3,15e3),Mh="__/auth/iframe",Uh="emulator/auth/iframe",xh={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Fh=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jh(i){const e=i.config;b(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?pi(e,Uh):`https://${i.config.authDomain}/${Mh}`,r={apiKey:e.apiKey,appName:i.name,v:Qe},o=Fh.get(i.config.apiHost);o&&(r.eid=o);const c=i._getFrameworks();return c.length&&(r.fw=c.join(",")),`${n}?${Rt(r).slice(1)}`}async function Bh(i){const e=await Nh(i),n=ae().gapi;return b(n,i,"internal-error"),e.open({where:document.body,url:jh(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xh,dontclear:!0},r=>new Promise(async(o,c)=>{await r.restyle({setHideOnLeave:!1});const h=oe(i,"network-request-failed"),p=ae().setTimeout(()=>{c(h)},Lh.get());function v(){ae().clearTimeout(p),o(r)}r.ping(v).then(v,()=>{c(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Hh=500,$h=600,Wh="_blank",zh="http://localhost";class is{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Gh(i,e,n,r=Hh,o=$h){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-r)/2,0).toString();let p="";const v=Object.assign(Object.assign({},Vh),{width:r.toString(),height:o.toString(),top:c,left:h}),w=q().toLowerCase();n&&(p=Fs(w)?Wh:n),Us(w)&&(e=e||zh,v.scrollbars="yes");const S=Object.entries(v).reduce((A,[M,P])=>`${A}${M}=${P},`,"");if(_l(w)&&p!=="_self")return Kh(e||"",p),new is(null);const C=window.open(e||"",p,S);b(C,i,"popup-blocked");try{C.focus()}catch{}return new is(C)}function Kh(i,e){const n=document.createElement("a");n.href=i,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh="__/auth/handler",Jh="emulator/auth/handler",Xh=encodeURIComponent("fac");async function rs(i,e,n,r,o,c){b(i.config.authDomain,i,"auth-domain-config-required"),b(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:r,v:Qe,eventId:o};if(e instanceof qs){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",ga(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[S,C]of Object.entries({}))h[S]=C}if(e instanceof Nt){const S=e.getScopes().filter(C=>C!=="");S.length>0&&(h.scopes=S.join(","))}i.tenantId&&(h.tid=i.tenantId);const p=h;for(const S of Object.keys(p))p[S]===void 0&&delete p[S];const v=await i._getAppCheckToken(),w=v?`#${Xh}=${encodeURIComponent(v)}`:"";return`${Yh(i)}?${Rt(p).slice(1)}${w}`}function Yh({config:i}){return i.emulator?pi(i,Jh):`https://${i.authDomain}/${qh}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn="webStorageSupport";class Zh{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=to,this._completeRedirectFn=wh,this._overrideRedirectResult=yh}async _openPopup(e,n,r,o){var c;ge((c=this.eventManagers[e._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const h=await rs(e,n,r,ni(),o);return Gh(e,h,yi())}async _openRedirect(e,n,r,o){await this._originValidation(e);const c=await rs(e,n,r,ni(),o);return th(c),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:c}=this.eventManagers[n];return o?Promise.resolve(o):(ge(c,"If manager is not set, promise should be"),c)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Bh(e),r=new Ah(e);return n.register("authEvent",o=>(b(o?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Jn,{type:Jn},o=>{var c;const h=(c=o?.[0])===null||c===void 0?void 0:c[Jn];h!==void 0&&n(!!h),se(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Rh(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return $s()||xs()||mi()}}const Qh=Zh;var ss="@firebase/auth",os="1.10.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nu(i){Ye(new xe("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:h,authDomain:p}=r.options;b(h&&!h.includes(":"),"invalid-api-key",{appName:r.name});const v={apiKey:h,authDomain:p,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ws(i)},w=new Tl(r,o,c,v);return Nl(w,n),w},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ye(new xe("auth-internal",e=>{const n=Ve(e.getProvider("auth").getImmediate());return(r=>new eu(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pe(ss,os,tu(i)),Pe(ss,os,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu=5*60,ru=fs("authIdTokenMaxAge")||iu;let as=null;const su=i=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ru)return;const o=n?.token;as!==o&&(as=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function du(i=vs()){const e=li(i,"auth");if(e.isInitialized())return e.getImmediate();const n=Dl(i,{popupRedirectResolver:Qh,persistence:[hh,Zl,to]}),r=fs("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(r,location.origin);if(location.origin===c.origin){const h=su(c.toString());Jl(n,h,()=>h(n.currentUser)),ql(n,p=>h(p))}}const o=us("auth");return o&&Ll(n,`http://${o}`),n}function ou(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}Al({loadJS(i){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",i),r.onload=e,r.onerror=o=>{const c=oe("internal-error");c.customData=o,n(c)},r.type="text/javascript",r.charset="UTF-8",ou().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nu("Browser");export{xe as C,Pt as E,me as F,ai as L,Qe as S,Ye as _,te as a,Be as b,li as c,ea as d,na as e,Ec as f,vs as g,du as h,Ct as i,aa as j,ha as k,cu as l,Ue as m,au as n,ja as o,ps as p,lu as q,Pe as r,hu as s,uu as t,gs as u,ua as v};
