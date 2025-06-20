import{_ as Ee,C as Ae,r as J,S as Ue,a as Ie,F as Oe,g as xe,b as P,c as Ne,d as Pe,i as ie,p as Ce,u as De,e as Se,f as Le,h as ve}from"./index-8e6e89cb.B8wXSmRx.js";/**
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
 */const ae="firebasestorage.googleapis.com",ue="storageBucket",Be=2*60*1e3,Fe=10*60*1e3;/**
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
 */class d extends Oe{constructor(t,n,s=0){super(F(t),`Firebase Storage: ${n} (${F(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,d.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return F(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var h;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(h||(h={}));function F(e){return"storage/"+e}function q(){const e="An unknown error occurred, please check the error payload for server response.";return new d(h.UNKNOWN,e)}function Me(e){return new d(h.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function $e(e){return new d(h.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function He(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new d(h.UNAUTHENTICATED,e)}function je(){return new d(h.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function qe(e){return new d(h.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function ze(){return new d(h.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Ve(){return new d(h.CANCELED,"User canceled the upload/download.")}function We(e){return new d(h.INVALID_URL,"Invalid URL '"+e+"'.")}function Xe(e){return new d(h.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Ke(){return new d(h.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ue+"' property when initializing the app?")}function Ge(){return new d(h.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Ye(){return new d(h.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Ze(e){return new d(h.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function H(e){return new d(h.INVALID_ARGUMENT,e)}function ce(){return new d(h.APP_DELETED,"The Firebase app was deleted.")}function Je(e){return new d(h.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function N(e,t){return new d(h.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function x(e){throw new d(h.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class p{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=p.makeFromUrl(t,n)}catch{return new p(t,"")}if(s.path==="")return s;throw Xe(t)}static makeFromUrl(t,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function o(g){g.path.charAt(g.path.length-1)==="/"&&(g.path_=g.path_.slice(0,-1))}const i="(/(.*))?$",a=new RegExp("^gs://"+r+i,"i"),u={bucket:1,path:3};function c(g){g.path_=decodeURIComponent(g.path)}const l="v[A-Za-z0-9_]+",R=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",b=new RegExp(`^https?://${R}/${l}/b/${r}/o${m}`,"i"),w={bucket:1,path:3},k=n===ae?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",O=new RegExp(`^https?://${k}/${r}/${_}`,"i"),T=[{regex:a,indices:u,postModify:o},{regex:b,indices:w,postModify:c},{regex:O,indices:{bucket:1,path:2},postModify:c}];for(let g=0;g<T.length;g++){const C=T[g],v=C.regex.exec(t);if(v){const ke=v[C.indices.bucket];let B=v[C.indices.path];B||(B=""),s=new p(ke,B),C.postModify(s);break}}if(s==null)throw We(t);return s}}class Qe{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function et(e,t,n){let s=1,r=null,o=null,i=!1,a=0;function u(){return a===2}let c=!1;function l(..._){c||(c=!0,t.apply(null,_))}function R(_){r=setTimeout(()=>{r=null,e(b,u())},_)}function m(){o&&clearTimeout(o)}function b(_,...O){if(c){m();return}if(_){m(),l.call(null,_,...O);return}if(u()||i){m(),l.call(null,_,...O);return}s<64&&(s*=2);let T;a===1?(a=2,T=0):T=(s+Math.random())*1e3,R(T)}let w=!1;function k(_){w||(w=!0,m(),!c&&(r!==null?(_||(a=2),clearTimeout(r),R(0)):_||(a=1)))}return R(0),o=setTimeout(()=>{i=!0,k(!0)},n),k}function tt(e){e(!1)}/**
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
 */function nt(e){return e!==void 0}function st(e){return typeof e=="object"&&!Array.isArray(e)}function z(e){return typeof e=="string"||e instanceof String}function Q(e){return V()&&e instanceof Blob}function V(){return typeof Blob<"u"}function j(e,t,n,s){if(s<t)throw H(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw H(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function L(e,t,n){let s=t;return n==null&&(s=`https://${t}`),`${n}://${s}/v0${e}`}function le(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){const r=t(s)+"="+t(e[s]);n=n+r+"&"}return n=n.slice(0,-1),n}var U;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(U||(U={}));/**
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
 */function rt(e,t){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return n||r||o}/**
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
 */class ot{constructor(t,n,s,r,o,i,a,u,c,l,R,m=!0,b=!1){this.url_=t,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=l,this.connectionFactory_=R,this.retry=m,this.isUsingEmulator=b,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,k)=>{this.resolve_=w,this.reject_=k,this.start_()})}start_(){const t=(s,r)=>{if(r){s(!1,new D(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const i=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(i),this.pendingConnection_=null;const a=o.getErrorCode()===U.NO_ERROR,u=o.getStatus();if(!a||rt(u,this.additionalRetryCodes_)&&this.retry){const l=o.getErrorCode()===U.ABORT;s(!1,new D(!1,null,l));return}const c=this.successCodes_.indexOf(u)!==-1;s(!0,new D(c,o))})},n=(s,r)=>{const o=this.resolve_,i=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());nt(u)?o(u):o()}catch(u){i(u)}else if(a!==null){const u=q();u.serverResponse=a.getErrorText(),this.errorCallback_?i(this.errorCallback_(a,u)):i(u)}else if(r.canceled){const u=this.appDelete_?ce():Ve();i(u)}else{const u=ze();i(u)}};this.canceled_?n(!1,new D(!1,null,!0)):this.backoffId_=et(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&tt(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class D{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function it(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function at(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function ut(e,t){t&&(e["X-Firebase-GMPID"]=t)}function ct(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function lt(e,t,n,s,r,o,i=!0,a=!1){const u=le(e.urlParams),c=e.url+u,l=Object.assign({},e.headers);return ut(l,t),it(l,n),at(l,o),ct(l,s),new ot(c,e.method,l,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,i,a)}/**
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
 */function ht(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function dt(...e){const t=ht();if(t!==void 0){const n=new t;for(let s=0;s<e.length;s++)n.append(e[s]);return n.getBlob()}else{if(V())return new Blob(e);throw new d(h.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function ft(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function pt(e){if(typeof atob>"u")throw Ze("base-64");return atob(e)}/**
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
 */const y={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class M{constructor(t,n){this.data=t,this.contentType=n||null}}function _t(e,t){switch(e){case y.RAW:return new M(he(t));case y.BASE64:case y.BASE64URL:return new M(de(e,t));case y.DATA_URL:return new M(mt(t),Rt(t))}throw q()}function he(e){const t=[];for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const o=s,i=e.charCodeAt(++n);s=65536|(o&1023)<<10|i&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function gt(e){let t;try{t=decodeURIComponent(e)}catch{throw N(y.DATA_URL,"Malformed data URL.")}return he(t)}function de(e,t){switch(e){case y.BASE64:{const r=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(r||o)throw N(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case y.BASE64URL:{const r=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(r||o)throw N(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=pt(t)}catch(r){throw r.message.includes("polyfill")?r:N(e,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class fe{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw N(y.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=bt(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function mt(e){const t=new fe(e);return t.base64?de(y.BASE64,t.rest):gt(t.rest)}function Rt(e){return new fe(e).contentType}function bt(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class E{constructor(t,n){let s=0,r="";Q(t)?(this.data_=t,s=t.size,r=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,n){if(Q(this.data_)){const s=this.data_,r=ft(s,t,n);return r===null?null:new E(r)}else{const s=new Uint8Array(this.data_.buffer,t,n-t);return new E(s,!0)}}static getBlob(...t){if(V()){const n=t.map(s=>s instanceof E?s.data_:s);return new E(dt.apply(null,n))}else{const n=t.map(i=>z(i)?_t(y.RAW,i).data:i.data_);let s=0;n.forEach(i=>{s+=i.byteLength});const r=new Uint8Array(s);let o=0;return n.forEach(i=>{for(let a=0;a<i.length;a++)r[o++]=i[a]}),new E(r,!0)}}uploadData(){return this.data_}}/**
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
 */function W(e){let t;try{t=JSON.parse(e)}catch{return null}return st(t)?t:null}/**
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
 */function wt(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Tt(e,t){const n=t.split("/").filter(s=>s.length>0).join("/");return e.length===0?n:e+"/"+n}function pe(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function yt(e,t){return t}class f{constructor(t,n,s,r){this.server=t,this.local=n||t,this.writable=!!s,this.xform=r||yt}}let S=null;function kt(e){return!z(e)||e.length<2?e:pe(e)}function _e(){if(S)return S;const e=[];e.push(new f("bucket")),e.push(new f("generation")),e.push(new f("metageneration")),e.push(new f("name","fullPath",!0));function t(o,i){return kt(i)}const n=new f("name");n.xform=t,e.push(n);function s(o,i){return i!==void 0?Number(i):i}const r=new f("size");return r.xform=s,e.push(r),e.push(new f("timeCreated")),e.push(new f("updated")),e.push(new f("md5Hash",null,!0)),e.push(new f("cacheControl",null,!0)),e.push(new f("contentDisposition",null,!0)),e.push(new f("contentEncoding",null,!0)),e.push(new f("contentLanguage",null,!0)),e.push(new f("contentType",null,!0)),e.push(new f("metadata","customMetadata",!0)),S=e,S}function Et(e,t){function n(){const s=e.bucket,r=e.fullPath,o=new p(s,r);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:n})}function At(e,t,n){const s={};s.type="file";const r=n.length;for(let o=0;o<r;o++){const i=n[o];s[i.local]=i.xform(s,t[i.server])}return Et(s,e),s}function ge(e,t,n){const s=W(t);return s===null?null:At(e,s,n)}function Ut(e,t,n,s){const r=W(t);if(r===null||!z(r.downloadTokens))return null;const o=r.downloadTokens;if(o.length===0)return null;const i=encodeURIComponent;return o.split(",").map(c=>{const l=e.bucket,R=e.fullPath,m="/b/"+i(l)+"/o/"+i(R),b=L(m,n,s),w=le({alt:"media",token:c});return b+w})[0]}function It(e,t){const n={},s=t.length;for(let r=0;r<s;r++){const o=t[r];o.writable&&(n[o.server]=e[o.local])}return JSON.stringify(n)}/**
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
 */const ee="prefixes",te="items";function Ot(e,t,n){const s={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[ee])for(const r of n[ee]){const o=r.replace(/\/$/,""),i=e._makeStorageReference(new p(t,o));s.prefixes.push(i)}if(n[te])for(const r of n[te]){const o=e._makeStorageReference(new p(t,r.name));s.items.push(o)}return s}function xt(e,t,n){const s=W(n);return s===null?null:Ot(e,t,s)}class X{constructor(t,n,s,r){this.url=t,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function K(e){if(!e)throw q()}function Nt(e,t){function n(s,r){const o=ge(e,r,t);return K(o!==null),o}return n}function Pt(e,t){function n(s,r){const o=xt(e,t,r);return K(o!==null),o}return n}function Ct(e,t){function n(s,r){const o=ge(e,r,t);return K(o!==null),Ut(o,r,e.host,e._protocol)}return n}function G(e){function t(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=je():r=He():n.getStatus()===402?r=$e(e.bucket):n.getStatus()===403?r=qe(e.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return t}function Dt(e){const t=G(e);function n(s,r){let o=t(s,r);return s.getStatus()===404&&(o=Me(e.path)),o.serverResponse=r.serverResponse,o}return n}function St(e,t,n,s,r){const o={};t.isRoot?o.prefix="":o.prefix=t.path+"/",n.length>0&&(o.delimiter=n),s&&(o.pageToken=s),r&&(o.maxResults=r);const i=t.bucketOnlyServerUrl(),a=L(i,e.host,e._protocol),u="GET",c=e.maxOperationRetryTime,l=new X(a,u,Pt(e,t.bucket),c);return l.urlParams=o,l.errorHandler=G(t),l}function Lt(e,t,n){const s=t.fullServerUrl(),r=L(s,e.host,e._protocol),o="GET",i=e.maxOperationRetryTime,a=new X(r,o,Ct(e,n),i);return a.errorHandler=Dt(t),a}function vt(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function Bt(e,t,n){const s=Object.assign({},n);return s.fullPath=e.path,s.size=t.size(),s.contentType||(s.contentType=vt(null,t)),s}function Ft(e,t,n,s,r){const o=t.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function a(){let T="";for(let g=0;g<2;g++)T=T+Math.random().toString().slice(2);return T}const u=a();i["Content-Type"]="multipart/related; boundary="+u;const c=Bt(t,s,r),l=It(c,n),R="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",b=E.getBlob(R,s,m);if(b===null)throw Ge();const w={name:c.fullPath},k=L(o,e.host,e._protocol),_="POST",O=e.maxUploadRetryTime,A=new X(k,_,Nt(e,n),O);return A.urlParams=w,A.headers=i,A.body=b.uploadData(),A.errorHandler=G(t),A}class Mt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=U.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=U.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=U.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,r,o){if(this.sent_)throw x("cannot .send() more than once");if(ie(t)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,t,!0),o!==void 0)for(const i in o)o.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,o[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw x("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw x("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw x("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw x("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class $t extends Mt{initXhr(){this.xhr_.responseType="text"}}function Y(){return new $t}/**
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
 */class I{constructor(t,n){this._service=t,n instanceof p?this._location=n:this._location=p.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new I(t,n)}get root(){const t=new p(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return pe(this._location.path)}get storage(){return this._service}get parent(){const t=wt(this._location.path);if(t===null)return null;const n=new p(this._location.bucket,t);return new I(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw Je(t)}}function Ht(e,t,n){e._throwIfRoot("uploadBytes");const s=Ft(e.storage,e._location,_e(),new E(t,!0),n);return e.storage.makeRequestWithTokens(s,Y).then(r=>({metadata:r,ref:e}))}function jt(e){const t={prefixes:[],items:[]};return me(e,t).then(()=>t)}async function me(e,t,n){const r=await qt(e,{pageToken:n});t.prefixes.push(...r.prefixes),t.items.push(...r.items),r.nextPageToken!=null&&await me(e,t,r.nextPageToken)}function qt(e,t){t!=null&&typeof t.maxResults=="number"&&j("options.maxResults",1,1e3,t.maxResults);const n=t||{},s=St(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(s,Y)}function zt(e){e._throwIfRoot("getDownloadURL");const t=Lt(e.storage,e._location,_e());return e.storage.makeRequestWithTokens(t,Y).then(n=>{if(n===null)throw Ye();return n})}function Vt(e,t){const n=Tt(e._location.path,t),s=new p(e._location.bucket,n);return new I(e.storage,s)}/**
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
 */function Wt(e){return/^[A-Za-z]+:\/\//.test(e)}function Xt(e,t){return new I(e,t)}function Re(e,t){if(e instanceof Z){const n=e;if(n._bucket==null)throw Ke();const s=new I(n,n._bucket);return t!=null?Re(s,t):s}else return t!==void 0?Vt(e,t):e}function Kt(e,t){if(t&&Wt(t)){if(e instanceof Z)return Xt(e,t);throw H("To use ref(service, url), the first argument must be a Storage instance.")}else return Re(e,t)}function ne(e,t){const n=t?.[ue];return n==null?null:p.makeFromBucketSpec(n,e)}function Gt(e,t,n,s={}){e.host=`${t}:${n}`;const r=ie(t);r&&(Ce(`https://${e.host}/b`),De("Storage",!0)),e._isUsingEmulator=!0,e._protocol=r?"https":"http";const{mockUserToken:o}=s;o&&(e._overrideAuthToken=typeof o=="string"?o:Se(o,e.app.options.projectId))}class Z{constructor(t,n,s,r,o,i=!1){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=o,this._isUsingEmulator=i,this._bucket=null,this._host=ae,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Be,this._maxUploadRetryTime=Fe,this._requests=new Set,r!=null?this._bucket=p.makeFromBucketSpec(r,this._host):this._bucket=ne(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=p.makeFromBucketSpec(this._url,t):this._bucket=ne(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){j("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){j("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Ie(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new I(this,t)}_makeRequest(t,n,s,r,o=!0){if(this._deleted)return new Qe(ce());{const i=lt(t,this._appId,s,r,n,this._firebaseVersion,o,this._isUsingEmulator);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(t,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,r).getPromise()}}const se="@firebase/storage",re="0.13.13";/**
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
 */const be="storage";function Yt(e,t,n){return e=P(e),Ht(e,t,n)}function oe(e){return e=P(e),jt(e)}function Zt(e){return e=P(e),zt(e)}function we(e,t){return e=P(e),Kt(e,t)}function Jt(e=xe(),t){e=P(e);const s=Ne(e,be).getImmediate({identifier:t}),r=Pe("storage");return r&&Qt(s,...r),s}function Qt(e,t,n,s={}){Gt(e,t,n,s)}function en(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new Z(n,s,r,t,Ue)}function tn(){Ee(new Ae(be,en,"PUBLIC").setMultipleInstances(!0)),J(se,re,""),J(se,re,"esm2017")}tn();const nn={apiKey:"AIzaSyBzuoGT6ep4fwpgsyItZIXp07zWKnlF5Q4",authDomain:"partyline-1ba54.firebaseapp.com",projectId:"partyline-1ba54",storageBucket:"partyline-1ba54.firebasestorage.app",messagingSenderId:"845616501130",appId:"1:845616501130:web:bd5ca4f04f5177c08b7873",measurementId:"G-9X0WXSZ0P6"},Te=Le(nn),ye=Jt(Te),sn=ve(Te),rn=document.getElementById("mediaInput"),on=document.getElementById("uploadBtn"),$=document.getElementById("status"),an=we(ye,"uploads/"),un=document.getElementById("gallery");oe(an).then(async e=>{for(const t of e.prefixes){const n=await oe(t);for(const s of n.items){const r=await Zt(s),o=document.createElement("img");o.src=r,un.appendChild(o)}}}).catch(e=>{console.error("error listing images:",e)});on.addEventListener("click",async()=>{const e=rn.files[0];if(!e){$.textContent="Please select a file first.";return}try{const t=sn.currentUser,n=we(ye,`uploads/${t.uid}/${Date.now()}_${e.name}`);await Yt(n,e),$.textContent="Upload successful!"}catch(t){console.error(t),$.textContent="Upload failed. Try again."}});
