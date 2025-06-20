import{r as b,_ as T,C as v,c as C,E as Y,o as be,F as J,L as Te,b as X,j as ve,k as Ae,v as Se,l as L,g as Ce,m as Ee,n as ke,f as Re,h as Pe,q as _e,s as Oe,t as De}from"./index-8e6e89cb.B8wXSmRx.js";const Z="@firebase/installations",D="0.6.17";/**
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
 */const Q=1e4,ee=`w:${D}`,te="FIS_v2",Fe="https://firebaseinstallations.googleapis.com/v1",Me=60*60*1e3,Ne="installations",$e="Installations";/**
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
 */const xe={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},h=new Y(Ne,$e,xe);function ne(e){return e instanceof J&&e.code.includes("request-failed")}/**
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
 */function ae({projectId:e}){return`${Fe}/projects/${e}/installations`}function ie(e){return{token:e.token,requestStatus:2,expiresIn:je(e.expiresIn),creationTime:Date.now()}}async function se(e,t){const a=(await t.json()).error;return h.create("request-failed",{requestName:e,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function re({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Le(e,{refreshToken:t}){const n=re(e);return n.append("Authorization",qe(t)),n}async function oe(e){const t=await e();return t.status>=500&&t.status<600?e():t}function je(e){return Number(e.replace("s","000"))}function qe(e){return`${te} ${e}`}/**
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
 */async function Be({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const a=ae(e),i=re(e),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const r={fid:n,authVersion:te,appId:e.appId,sdkVersion:ee},o={method:"POST",headers:i,body:JSON.stringify(r)},c=await oe(()=>fetch(a,o));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:ie(l.authToken)}}else throw await se("Create Installation",c)}/**
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
 */function ce(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function ze(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Ue=/^[cdef][\w-]{21}$/,O="";function Ve(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Ge(e);return Ue.test(n)?n:O}catch{return O}}function Ge(e){return ze(e).substr(0,22)}/**
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
 */function E(e){return`${e.appName}!${e.appId}`}/**
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
 */const le=new Map;function ue(e,t){const n=E(e);de(n,t),Ke(n,t)}function de(e,t){const n=le.get(e);if(n)for(const a of n)a(t)}function Ke(e,t){const n=He();n&&n.postMessage({key:e,fid:t}),We()}let m=null;function He(){return!m&&"BroadcastChannel"in self&&(m=new BroadcastChannel("[Firebase] FID Change"),m.onmessage=e=>{de(e.data.key,e.data.fid)}),m}function We(){le.size===0&&m&&(m.close(),m=null)}/**
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
 */const Ye="firebase-installations-database",Je=1,w="firebase-installations-store";let R=null;function F(){return R||(R=be(Ye,Je,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(w)}}})),R}async function A(e,t){const n=E(e),i=(await F()).transaction(w,"readwrite"),s=i.objectStore(w),r=await s.get(n);return await s.put(t,n),await i.done,(!r||r.fid!==t.fid)&&ue(e,t.fid),t}async function fe(e){const t=E(e),a=(await F()).transaction(w,"readwrite");await a.objectStore(w).delete(t),await a.done}async function k(e,t){const n=E(e),i=(await F()).transaction(w,"readwrite"),s=i.objectStore(w),r=await s.get(n),o=t(r);return o===void 0?await s.delete(n):await s.put(o,n),await i.done,o&&(!r||r.fid!==o.fid)&&ue(e,o.fid),o}/**
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
 */async function M(e){let t;const n=await k(e.appConfig,a=>{const i=Xe(a),s=Ze(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===O?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Xe(e){const t=e||{fid:Ve(),registrationStatus:0};return pe(t)}function Ze(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(h.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},a=Qe(e,n);return{installationEntry:n,registrationPromise:a}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:et(e)}:{installationEntry:t}}async function Qe(e,t){try{const n=await Be(e,t);return A(e.appConfig,n)}catch(n){throw ne(n)&&n.customData.serverCode===409?await fe(e.appConfig):await A(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function et(e){let t=await j(e.appConfig);for(;t.registrationStatus===1;)await ce(100),t=await j(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:a}=await M(e);return a||n}return t}function j(e){return k(e,t=>{if(!t)throw h.create("installation-not-found");return pe(t)})}function pe(e){return tt(e)?{fid:e.fid,registrationStatus:0}:e}function tt(e){return e.registrationStatus===1&&e.registrationTime+Q<Date.now()}/**
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
 */async function nt({appConfig:e,heartbeatServiceProvider:t},n){const a=at(e,n),i=Le(e,n),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const r={installation:{sdkVersion:ee,appId:e.appId}},o={method:"POST",headers:i,body:JSON.stringify(r)},c=await oe(()=>fetch(a,o));if(c.ok){const l=await c.json();return ie(l)}else throw await se("Generate Auth Token",c)}function at(e,{fid:t}){return`${ae(e)}/${t}/authTokens:generate`}/**
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
 */async function N(e,t=!1){let n;const a=await k(e.appConfig,s=>{if(!ge(s))throw h.create("not-registered");const r=s.authToken;if(!t&&rt(r))return s;if(r.requestStatus===1)return n=it(e,t),s;{if(!navigator.onLine)throw h.create("app-offline");const o=ct(s);return n=st(e,o),o}});return n?await n:a.authToken}async function it(e,t){let n=await q(e.appConfig);for(;n.authToken.requestStatus===1;)await ce(100),n=await q(e.appConfig);const a=n.authToken;return a.requestStatus===0?N(e,t):a}function q(e){return k(e,t=>{if(!ge(t))throw h.create("not-registered");const n=t.authToken;return lt(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function st(e,t){try{const n=await nt(e,t),a=Object.assign(Object.assign({},t),{authToken:n});return await A(e.appConfig,a),n}catch(n){if(ne(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await fe(e.appConfig);else{const a=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await A(e.appConfig,a)}throw n}}function ge(e){return e!==void 0&&e.registrationStatus===2}function rt(e){return e.requestStatus===2&&!ot(e)}function ot(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Me}function ct(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function lt(e){return e.requestStatus===1&&e.requestTime+Q<Date.now()}/**
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
 */async function ut(e){const t=e,{installationEntry:n,registrationPromise:a}=await M(t);return a?a.catch(console.error):N(t).catch(console.error),n.fid}/**
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
 */async function dt(e,t=!1){const n=e;return await ft(n),(await N(n,t)).token}async function ft(e){const{registrationPromise:t}=await M(e);t&&await t}/**
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
 */function pt(e){if(!e||!e.options)throw P("App Configuration");if(!e.name)throw P("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw P(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function P(e){return h.create("missing-app-config-values",{valueName:e})}/**
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
 */const me="installations",gt="installations-internal",mt=e=>{const t=e.getProvider("app").getImmediate(),n=pt(t),a=C(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},ht=e=>{const t=e.getProvider("app").getImmediate(),n=C(t,me).getImmediate();return{getId:()=>ut(n),getToken:i=>dt(n,i)}};function wt(){T(new v(me,mt,"PUBLIC")),T(new v(gt,ht,"PRIVATE"))}wt();b(Z,D);b(Z,D,"esm2017");/**
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
 */const S="analytics",It="firebase_id",yt="origin",bt=60*1e3,Tt="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",$="https://www.googletagmanager.com/gtag/js";/**
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
 */const d=new Te("@firebase/analytics");/**
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
 */const vt={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},p=new Y("analytics","Analytics",vt);/**
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
 */function At(e){if(!e.startsWith($)){const t=p.create("invalid-gtag-resource",{gtagURL:e});return d.warn(t.message),""}return e}function he(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function St(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Ct(e,t){const n=St("firebase-js-sdk-policy",{createScriptURL:At}),a=document.createElement("script"),i=`${$}?l=${e}&id=${t}`;a.src=n?n?.createScriptURL(i):i,a.async=!0,document.head.appendChild(a)}function Et(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function kt(e,t,n,a,i,s){const r=a[i];try{if(r)await t[r];else{const c=(await he(n)).find(l=>l.measurementId===i);c&&await t[c.appId]}}catch(o){d.error(o)}e("config",i,s)}async function Rt(e,t,n,a,i){try{let s=[];if(i&&i.send_to){let r=i.send_to;Array.isArray(r)||(r=[r]);const o=await he(n);for(const c of r){const l=o.find(f=>f.measurementId===c),u=l&&t[l.appId];if(u)s.push(u);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",a,i||{})}catch(s){d.error(s)}}function Pt(e,t,n,a){async function i(s,...r){try{if(s==="event"){const[o,c]=r;await Rt(e,t,n,o,c)}else if(s==="config"){const[o,c]=r;await kt(e,t,n,a,o,c)}else if(s==="consent"){const[o,c]=r;e("consent",o,c)}else if(s==="get"){const[o,c,l]=r;e("get",o,c,l)}else if(s==="set"){const[o]=r;e("set",o)}else e(s,...r)}catch(o){d.error(o)}}return i}function _t(e,t,n,a,i){let s=function(...r){window[a].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Pt(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function Ot(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes($)&&n.src.includes(e))return n;return null}/**
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
 */const Dt=30,Ft=1e3;class Mt{constructor(t={},n=Ft){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const we=new Mt;function Nt(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function $t(e){var t;const{appId:n,apiKey:a}=e,i={method:"GET",headers:Nt(a)},s=Tt.replace("{app-id}",n),r=await fetch(s,i);if(r.status!==200&&r.status!==304){let o="";try{const c=await r.json();!((t=c.error)===null||t===void 0)&&t.message&&(o=c.error.message)}catch{}throw p.create("config-fetch-failed",{httpStatus:r.status,responseMessage:o})}return r.json()}async function xt(e,t=we,n){const{appId:a,apiKey:i,measurementId:s}=e.options;if(!a)throw p.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:a};throw p.create("no-api-key")}const r=t.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new qt;return setTimeout(async()=>{o.abort()},bt),Ie({appId:a,apiKey:i,measurementId:s},r,o,t)}async function Ie(e,{throttleEndTimeMillis:t,backoffCount:n},a,i=we){var s;const{appId:r,measurementId:o}=e;try{await Lt(a,t)}catch(c){if(o)return d.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:r,measurementId:o};throw c}try{const c=await $t(e);return i.deleteThrottleMetadata(r),c}catch(c){const l=c;if(!jt(l)){if(i.deleteThrottleMetadata(r),o)return d.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:r,measurementId:o};throw c}const u=Number((s=l?.customData)===null||s===void 0?void 0:s.httpStatus)===503?L(n,i.intervalMillis,Dt):L(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(r,f),d.debug(`Calling attemptFetch again in ${u} millis`),Ie(e,f,a,i)}}function Lt(e,t){return new Promise((n,a)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),a(p.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function jt(e){if(!(e instanceof J)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class qt{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Bt(e,t,n,a,i){if(i&&i.global){e("event",n,a);return}else{const s=await t,r=Object.assign(Object.assign({},a),{send_to:s});e("event",n,r)}}/**
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
 */async function zt(){if(Ae())try{await Se()}catch(e){return d.warn(p.create("indexeddb-unavailable",{errorInfo:e?.toString()}).message),!1}else return d.warn(p.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Ut(e,t,n,a,i,s,r){var o;const c=xt(e);c.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&d.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>d.error(g)),t.push(c);const l=zt().then(g=>{if(g)return a.getId()}),[u,f]=await Promise.all([c,l]);Ot(s)||Ct(s,u.measurementId),i("js",new Date);const I=(o=r?.config)!==null&&o!==void 0?o:{};return I[yt]="firebase",I.update=!0,f!=null&&(I[It]=f),i("config",u.measurementId,I),u.measurementId}/**
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
 */class Vt{constructor(t){this.app=t}_delete(){return delete y[this.app.options.appId],Promise.resolve()}}let y={},B=[];const z={};let _="dataLayer",Gt="gtag",U,ye,V=!1;function Kt(){const e=[];if(ve()&&e.push("This is a browser extension environment."),ke()||e.push("Cookies are not available."),e.length>0){const t=e.map((a,i)=>`(${i+1}) ${a}`).join(" "),n=p.create("invalid-analytics-context",{errorInfo:t});d.warn(n.message)}}function Ht(e,t,n){Kt();const a=e.options.appId;if(!a)throw p.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)d.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw p.create("no-api-key");if(y[a]!=null)throw p.create("already-exists",{id:a});if(!V){Et(_);const{wrappedGtag:s,gtagCore:r}=_t(y,B,z,_,Gt);ye=s,U=r,V=!0}return y[a]=Ut(e,B,z,t,U,_,n),new Vt(e)}function Wt(e=Ce()){e=X(e);const t=C(e,S);return t.isInitialized()?t.getImmediate():Yt(e)}function Yt(e,t={}){const n=C(e,S);if(n.isInitialized()){const i=n.getImmediate();if(Ee(t,n.getOptions()))return i;throw p.create("already-initialized")}return n.initialize({options:t})}function Jt(e,t,n,a){e=X(e),Bt(ye,y[e.app.options.appId],t,n,a).catch(i=>d.error(i))}const G="@firebase/analytics",K="0.10.16";function Xt(){T(new v(S,(t,{options:n})=>{const a=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return Ht(a,i,n)},"PUBLIC")),T(new v("analytics-internal",e,"PRIVATE")),b(G,K),b(G,K,"esm2017");function e(t){try{const n=t.getProvider(S).getImmediate();return{logEvent:(a,i,s)=>Jt(n,a,i,s)}}catch(n){throw p.create("interop-component-reg-failed",{reason:n})}}}Xt();const Zt={apiKey:"AIzaSyBzuoGT6ep4fwpgsyItZIXp07zWKnlF5Q4",authDomain:"partyline-1ba54.firebaseapp.com",projectId:"partyline-1ba54",storageBucket:"partyline-1ba54.firebasestorage.app",messagingSenderId:"845616501130",appId:"1:845616501130:web:bd5ca4f04f5177c08b7873",measurementId:"G-9X0WXSZ0P6"},x=Re(Zt);Wt(x);const H=Pe(x);_e(x);const W="NYCiSch00lprom25";document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("loginForm"),t=document.getElementById("nameInput"),n=document.getElementById("emailInput"),a=document.getElementById("accessCodeInput"),i=document.getElementById("messageArea"),s="NYCiSch00lprom25";e.addEventListener("submit",async r=>{r.preventDefault();const o=t.value.trim(),c=n.value.trim(),l=a.value.trim();if(i.textContent="",!o||!c||!l){i.textContent="Please fill in all fields.";return}if(l!==s){i.textContent="Invalid access code.";return}try{const f=(await Oe(H,c,W)).user;console.log("New user created successfully with preset password:",f.uid),window.location.href="/photobooth"}catch(u){const f=u.code,I=u.message;if(f==="auth/email-already-in-use")try{await De(H,c,W),window.location.href="/photobooth"}catch(g){i.textContent="Login failed: "+g.message}else f==="auth/invalid-email"?console.error("The email address is invalid."):f==="auth/operation-not-allowed"?console.error("Email/Password sign-in is not enabled for this project."):console.error("Error creating user:",I)}})});
