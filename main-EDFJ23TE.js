var MS=Object.defineProperty,SS=Object.defineProperties;var ES=Object.getOwnPropertyDescriptors;var m2=Object.getOwnPropertySymbols;var q8=Object.prototype.hasOwnProperty,X8=Object.prototype.propertyIsEnumerable;var $8=(n,e,t)=>e in n?MS(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,de=(n,e)=>{for(var t in e||={})q8.call(e,t)&&$8(n,t,e[t]);if(m2)for(var t of m2(e))X8.call(e,t)&&$8(n,t,e[t]);return n},at=(n,e)=>SS(n,ES(e));var I0=(n,e)=>{var t={};for(var i in n)q8.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&m2)for(var i of m2(n))e.indexOf(i)<0&&X8.call(n,i)&&(t[i]=n[i]);return t};var Mt=(n,e,t)=>new Promise((i,r)=>{var s=c=>{try{a(t.next(c))}catch(l){r(l)}},o=c=>{try{a(t.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(s,o);a((t=t.apply(n,e)).next())});var Vn=null,g2=!1,go=1,wS=null,Rn=Symbol("SIGNAL");function Oe(n){let e=Vn;return Vn=n,e}function b2(){return Vn}var vo={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function yo(n){if(g2)throw new Error("");if(Vn===null)return;Vn.consumerOnSignalRead(n);let e=Vn.producersTail;if(e!==void 0&&e.producer===n)return;let t,i=Vn.recomputing;if(i&&(t=e!==void 0?e.nextProducer:Vn.producers,t!==void 0&&t.producer===n)){Vn.producersTail=t,t.lastReadVersion=n.version,t.knownValidAtEpoch=go;return}let r=n.consumersTail;if(r!==void 0&&r.consumer===Vn&&(!i||r.knownValidAtEpoch===go))return;let s=ba(Vn),o={producer:n,consumer:Vn,nextProducer:t,prevConsumer:void 0,knownValidAtEpoch:go,lastReadVersion:n.version,nextConsumer:void 0};Vn.producersTail=o,e!==void 0?e.nextProducer=o:Vn.producers=o,s&&J8(n,o)}function Y8(){go++}function x2(n){if(!(ba(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===go)){if(!n.producerMustRecompute(n)&&!q1(n)){_2(n);return}n.producerRecomputeValue(n),_2(n)}}function A0(n){if(n.consumers===void 0)return;let e=g2;g2=!0;try{for(let t=n.consumers;t!==void 0;t=t.nextConsumer){let i=t.consumer;i.dirty||CS(i)}}finally{g2=e}}function D0(){return Vn?.consumerAllowSignalWrites!==!1}function CS(n){n.dirty=!0,A0(n),n.consumerMarkedDirty?.(n)}function _2(n){n.dirty=!1,n.lastCleanEpoch=go}function _o(n){return n&&Z8(n),Oe(n)}function Z8(n){if(n.producersTail?.knownValidAtEpoch===go){let e=n.producers;for(;e!==void 0;)e.knownValidAtEpoch=null,e=e.nextProducer}n.producersTail=void 0,n.recomputing=!0}function _a(n,e){Oe(e),n&&K8(n)}function K8(n){n.recomputing=!1;let e=n.producersTail,t=e!==void 0?e.nextProducer:n.producers;if(t!==void 0){if(ba(n))do t=N0(t);while(t!==void 0);e!==void 0?e.nextProducer=void 0:n.producers=void 0}}function q1(n){for(let e=n.producers;e!==void 0;e=e.nextProducer){let t=e.producer,i=e.lastReadVersion;if(i!==t.version||(x2(t),i!==t.version))return!0}return!1}function bo(n){if(ba(n)){let e=n.producers;for(;e!==void 0;)e=N0(e)}n.producers=void 0,n.producersTail=void 0,n.consumers=void 0,n.consumersTail=void 0}function J8(n,e){let t=n.consumersTail,i=ba(n);if(t!==void 0?(e.nextConsumer=t.nextConsumer,t.nextConsumer=e):(e.nextConsumer=void 0,n.consumers=e),e.prevConsumer=t,n.consumersTail=e,!i)for(let r=n.producers;r!==void 0;r=r.nextProducer)J8(r.producer,r)}function N0(n){let e=n.producer,t=n.nextProducer,i=n.nextConsumer,r=n.prevConsumer;if(n.nextConsumer=void 0,n.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:e.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(e.consumers=i,!ba(e)){let s=e.producers;for(;s!==void 0;)s=N0(s)}return t}function ba(n){return n.consumerIsAlwaysLive||n.consumers!==void 0}function M2(n){wS?.(n)}function S2(n,e){return Object.is(n,e)}function E2(n,e){let t=Object.create(TS);t.computation=n,e!==void 0&&(t.equal=e);let i=()=>{if(x2(t),yo(t),t.value===$1)throw t.error;return t.value};return i[Rn]=t,M2(t),i}var v2=Symbol("UNSET"),y2=Symbol("COMPUTING"),$1=Symbol("ERRORED"),TS=at(de({},vo),{value:v2,dirty:!0,error:null,equal:S2,kind:"computed",producerMustRecompute(n){return n.value===v2||n.value===y2},producerRecomputeValue(n){if(n.value===y2)throw new Error("");let e=n.value;n.value=y2;let t=_o(n),i,r=!1;try{i=n.computation(),Oe(null),r=e!==v2&&e!==$1&&i!==$1&&n.equal(e,i)}catch(s){i=$1,n.error=s}finally{_a(n,t)}if(r){n.value=e;return}n.value=i,n.version++}});function IS(){throw new Error}var Q8=IS;function em(n){Q8(n)}function R0(n){Q8=n}var AS=null;function P0(n,e){let t=Object.create(w2);t.value=n,e!==void 0&&(t.equal=e);let i=()=>tm(t);return i[Rn]=t,M2(t),[i,o=>xo(t,o),o=>L0(t,o)]}function tm(n){return yo(n),n.value}function xo(n,e){D0()||em(n),n.equal(n.value,e)||(n.value=e,DS(n))}function L0(n,e){D0()||em(n),xo(n,e(n.value))}var w2=at(de({},vo),{equal:S2,value:void 0,kind:"signal"});function DS(n){n.version++,Y8(),A0(n),AS?.(n)}var z0=at(de({},vo),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function O0(n){if(n.dirty=!1,n.version>0&&!q1(n))return;n.version++;let e=_o(n);try{n.cleanup(),n.fn()}finally{_a(n,e)}}var k0;function C2(){return k0}function pr(n){let e=k0;return k0=n,e}var nm=Symbol("NotFound");function xa(n){return n===nm||n?.name==="\u0275NotFound"}function im(n){let e=Oe(null);try{return n()}finally{Oe(e)}}function Ke(n){return typeof n=="function"}function Ma(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var T2=Ma(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function X1(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var dn=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(Ke(i))try{i()}catch(s){e=s instanceof T2?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{rm(s)}catch(o){e=e??[],o instanceof T2?e=[...e,...o.errors]:e.push(o)}}if(e)throw new T2(e)}}add(e){var t;if(e&&e!==this)if(this.closed)rm(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&X1(t,e)}remove(e){let{_finalizers:t}=this;t&&X1(t,e),e instanceof n&&e._removeParent(this)}};dn.EMPTY=(()=>{let n=new dn;return n.closed=!0,n})();var F0=dn.EMPTY;function I2(n){return n instanceof dn||n&&"closed"in n&&Ke(n.remove)&&Ke(n.add)&&Ke(n.unsubscribe)}function rm(n){Ke(n)?n():n.unsubscribe()}var Li={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Sa={setTimeout(n,e,...t){let{delegate:i}=Sa;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=Sa;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function A2(n){Sa.setTimeout(()=>{let{onUnhandledError:e}=Li;if(e)e(n);else throw n})}function Y1(){}var sm=U0("C",void 0,void 0);function om(n){return U0("E",void 0,n)}function am(n){return U0("N",n,void 0)}function U0(n,e,t){return{kind:n,value:e,error:t}}var Mo=null;function Ea(n){if(Li.useDeprecatedSynchronousErrorHandling){let e=!Mo;if(e&&(Mo={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=Mo;if(Mo=null,t)throw i}}else n()}function cm(n){Li.useDeprecatedSynchronousErrorHandling&&Mo&&(Mo.errorThrown=!0,Mo.error=n)}var So=class extends dn{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,I2(e)&&e.add(this)):this.destination=PS}static create(e,t,i){return new wa(e,t,i)}next(e){this.isStopped?V0(am(e),this):this._next(e)}error(e){this.isStopped?V0(om(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?V0(sm,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},NS=Function.prototype.bind;function B0(n,e){return NS.call(n,e)}var H0=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){D2(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){D2(i)}else D2(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){D2(t)}}},wa=class extends So{constructor(e,t,i){super();let r;if(Ke(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&Li.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&B0(e.next,s),error:e.error&&B0(e.error,s),complete:e.complete&&B0(e.complete,s)}):r=e}this.destination=new H0(r)}};function D2(n){Li.useDeprecatedSynchronousErrorHandling?cm(n):A2(n)}function RS(n){throw n}function V0(n,e){let{onStoppedNotification:t}=Li;t&&Sa.setTimeout(()=>t(n,e))}var PS={closed:!0,next:Y1,error:RS,complete:Y1};var Ca=typeof Symbol=="function"&&Symbol.observable||"@@observable";function zi(n){return n}function G0(...n){return j0(n)}function j0(n){return n.length===0?zi:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var bt=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=zS(t)?t:new wa(t,i,r);return Ea(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=lm(i),new i((r,s)=>{let o=new wa({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[Ca](){return this}pipe(...t){return j0(t)(this)}toPromise(t){return t=lm(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function lm(n){var e;return(e=n??Li.Promise)!==null&&e!==void 0?e:Promise}function LS(n){return n&&Ke(n.next)&&Ke(n.error)&&Ke(n.complete)}function zS(n){return n&&n instanceof So||LS(n)&&I2(n)}function OS(n){return Ke(n?.lift)}function St(n){return e=>{if(OS(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function Nt(n,e,t,i,r){return new W0(n,e,t,i,r)}var W0=class extends So{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};var um=Ma(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var En=(()=>{class n extends bt{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new N2(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new um}next(t){Ea(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){Ea(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){Ea(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?F0:(this.currentObservers=null,s.push(t),new dn(()=>{this.currentObservers=null,X1(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new bt;return t.source=this,t}}return n.create=(e,t)=>new N2(e,t),n})(),N2=class extends En{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:F0}};var wn=class extends En{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var Cn=new bt(n=>n.complete());function dm(n){return n&&Ke(n.schedule)}function fm(n){return n[n.length-1]}function hm(n){return Ke(fm(n))?n.pop():void 0}function Es(n){return dm(fm(n))?n.pop():void 0}function mm(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(d){o(d)}}function c(u){try{l(i.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function pm(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Eo(n){return this instanceof Eo?(this.v=n,this):new Eo(n)}function gm(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(h){return function(p){return Promise.resolve(p).then(h,d)}}function a(h,p){i[h]&&(r[h]=function(y){return new Promise(function(m,g){s.push([h,y,m,g])>1||c(h,y)})},p&&(r[h]=p(r[h])))}function c(h,p){try{l(i[h](p))}catch(y){f(s[0][3],y)}}function l(h){h.value instanceof Eo?Promise.resolve(h.value.v).then(u,d):f(s[0][2],h)}function u(h){c("next",h)}function d(h){c("throw",h)}function f(h,p){h(p),s.shift(),s.length&&c(s[0][0],s[0][1])}}function vm(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof pm=="function"?pm(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var R2=n=>n&&typeof n.length=="number"&&typeof n!="function";function P2(n){return Ke(n?.then)}function L2(n){return Ke(n[Ca])}function z2(n){return Symbol.asyncIterator&&Ke(n?.[Symbol.asyncIterator])}function O2(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function kS(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var k2=kS();function F2(n){return Ke(n?.[k2])}function U2(n){return gm(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield Eo(t.read());if(r)return yield Eo(void 0);yield yield Eo(i)}}finally{t.releaseLock()}})}function B2(n){return Ke(n?.getReader)}function yn(n){if(n instanceof bt)return n;if(n!=null){if(L2(n))return FS(n);if(R2(n))return US(n);if(P2(n))return BS(n);if(z2(n))return ym(n);if(F2(n))return VS(n);if(B2(n))return HS(n)}throw O2(n)}function FS(n){return new bt(e=>{let t=n[Ca]();if(Ke(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function US(n){return new bt(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function BS(n){return new bt(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,A2)})}function VS(n){return new bt(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function ym(n){return new bt(e=>{GS(n,e).catch(t=>e.error(t))})}function HS(n){return ym(U2(n))}function GS(n,e){var t,i,r,s;return mm(this,void 0,void 0,function*(){try{for(t=vm(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function Zn(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function V2(n,e=0){return St((t,i)=>{t.subscribe(Nt(i,r=>Zn(i,n,()=>i.next(r),e),()=>Zn(i,n,()=>i.complete(),e),r=>Zn(i,n,()=>i.error(r),e)))})}function H2(n,e=0){return St((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function _m(n,e){return yn(n).pipe(H2(e),V2(e))}function bm(n,e){return yn(n).pipe(H2(e),V2(e))}function xm(n,e){return new bt(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function Mm(n,e){return new bt(t=>{let i;return Zn(t,e,()=>{i=n[k2](),Zn(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>Ke(i?.return)&&i.return()})}function G2(n,e){if(!n)throw new Error("Iterable cannot be null");return new bt(t=>{Zn(t,e,()=>{let i=n[Symbol.asyncIterator]();Zn(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function Sm(n,e){return G2(U2(n),e)}function Em(n,e){if(n!=null){if(L2(n))return _m(n,e);if(R2(n))return xm(n,e);if(P2(n))return bm(n,e);if(z2(n))return G2(n,e);if(F2(n))return Mm(n,e);if(B2(n))return Sm(n,e)}throw O2(n)}function an(n,e){return e?Em(n,e):yn(n)}function lt(...n){let e=Es(n);return an(n,e)}function $0(n,e){let t=Ke(n)?n:()=>n,i=r=>r.error(t());return new bt(e?r=>e.schedule(i,0,r):i)}function j2(n){return!!n&&(n instanceof bt||Ke(n.lift)&&Ke(n.subscribe))}var wo=Ma(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function Xt(n,e){return St((t,i)=>{let r=0;t.subscribe(Nt(i,s=>{i.next(n.call(e,s,r++))}))})}var{isArray:jS}=Array;function WS(n,e){return jS(e)?n(...e):n(e)}function wm(n){return Xt(e=>WS(n,e))}var{isArray:$S}=Array,{getPrototypeOf:qS,prototype:XS,keys:YS}=Object;function Cm(n){if(n.length===1){let e=n[0];if($S(e))return{args:e,keys:null};if(ZS(e)){let t=YS(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function ZS(n){return n&&typeof n=="object"&&qS(n)===XS}function Tm(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function q0(...n){let e=Es(n),t=hm(n),{args:i,keys:r}=Cm(n);if(i.length===0)return an([],e);let s=new bt(KS(i,e,r?o=>Tm(r,o):zi));return t?s.pipe(wm(t)):s}function KS(n,e,t=zi){return i=>{Im(e,()=>{let{length:r}=n,s=new Array(r),o=r,a=r;for(let c=0;c<r;c++)Im(e,()=>{let l=an(n[c],e),u=!1;l.subscribe(Nt(i,d=>{s[c]=d,u||(u=!0,a--),a||i.next(t(s.slice()))},()=>{--o||i.complete()}))},i)},i)}}function Im(n,e,t){n?Zn(t,n,e):e()}function Am(n,e,t,i,r,s,o,a){let c=[],l=0,u=0,d=!1,f=()=>{d&&!c.length&&!l&&e.complete()},h=y=>l<i?p(y):c.push(y),p=y=>{s&&e.next(y),l++;let m=!1;yn(t(y,u++)).subscribe(Nt(e,g=>{r?.(g),s?h(g):e.next(g)},()=>{m=!0},void 0,()=>{if(m)try{for(l--;c.length&&l<i;){let g=c.shift();o?Zn(e,o,()=>p(g)):p(g)}f()}catch(g){e.error(g)}}))};return n.subscribe(Nt(e,h,()=>{d=!0,f()})),()=>{a?.()}}function Hn(n,e,t=1/0){return Ke(e)?Hn((i,r)=>Xt((s,o)=>e(i,s,r,o))(yn(n(i,r))),t):(typeof e=="number"&&(t=e),St((i,r)=>Am(i,r,n,t)))}function Dm(n=1/0){return Hn(zi,n)}function Nm(){return Dm(1)}function Ta(...n){return Nm()(an(n,Es(n)))}function Z1(n){return new bt(e=>{yn(n()).subscribe(e)})}function Vr(n,e){return St((t,i)=>{let r=0;t.subscribe(Nt(i,s=>n.call(e,s,r++)&&i.next(s)))})}function K1(n){return St((e,t)=>{let i=null,r=!1,s;i=e.subscribe(Nt(t,void 0,void 0,o=>{s=yn(n(o,K1(n)(e))),i?(i.unsubscribe(),i=null,s.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(t))})}function W2(n,e){return Ke(e)?Hn(n,e,1):Hn(n,1)}function Rm(n){return St((e,t)=>{let i=!1;e.subscribe(Nt(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function Hr(n){return n<=0?()=>Cn:St((e,t)=>{let i=0;e.subscribe(Nt(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function Pm(n=JS){return St((e,t)=>{let i=!1;e.subscribe(Nt(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function JS(){return new wo}function X0(n){return St((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function Gr(n,e){let t=arguments.length>=2;return i=>i.pipe(n?Vr((r,s)=>n(r,s,i)):zi,Hr(1),t?Rm(e):Pm(()=>new wo))}function $2(n){return n<=0?()=>Cn:St((e,t)=>{let i=[];e.subscribe(Nt(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function Y0(...n){let e=Es(n);return St((t,i)=>{(e?Ta(n,t,e):Ta(n,t)).subscribe(i)})}function bi(n,e){return St((t,i)=>{let r=null,s=0,o=!1,a=()=>o&&!r&&i.complete();t.subscribe(Nt(i,c=>{r?.unsubscribe();let l=0,u=s++;yn(n(c,u)).subscribe(r=Nt(i,d=>i.next(e?e(c,d,u,l++):d),()=>{r=null,a()}))},()=>{o=!0,a()}))})}function J1(n){return St((e,t)=>{yn(n).subscribe(Nt(t,()=>t.complete(),Y1)),!t.closed&&e.subscribe(t)})}function xi(n,e,t){let i=Ke(n)||e||t?{next:n,error:e,complete:t}:n;return i?St((r,s)=>{var o;(o=i.subscribe)===null||o===void 0||o.call(i);let a=!0;r.subscribe(Nt(s,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),s.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),s.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),s.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):zi}var eu="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",oe=class extends Error{code;constructor(e,t){super(Cs(e,t)),this.code=e}};function QS(n){return`NG0${Math.abs(n)}`}function Cs(n,e){return`${QS(n)}${e?": "+e:""}`}function Et(n){for(let e in n)if(n[e]===Et)return e;throw Error("")}function ic(n){if(typeof n=="string")return n;if(Array.isArray(n))return`[${n.map(ic).join(", ")}]`;if(n==null)return""+n;let e=n.overriddenName||n.name;if(e)return`${e}`;let t=n.toString();if(t==null)return""+t;let i=t.indexOf(`
`);return i>=0?t.slice(0,i):t}function tu(n,e){return n?e?`${n} ${e}`:n:e||""}var eE=Et({__forward_ref__:Et});function nu(n){return n.__forward_ref__=nu,n}function si(n){return Fm(n)?n():n}function Fm(n){return typeof n=="function"&&n.hasOwnProperty(eE)&&n.__forward_ref__===nu}function et(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function Na(n){return{providers:n.providers||[],imports:n.imports||[]}}function rc(n){return tE(n,iu)}function l4(n){return rc(n)!==null}function tE(n,e){return n.hasOwnProperty(e)&&n[e]||null}function nE(n){let e=n?.[iu]??null;return e||null}function K0(n){return n&&n.hasOwnProperty(X2)?n[X2]:null}var iu=Et({\u0275prov:Et}),X2=Et({\u0275inj:Et}),Fe=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(e,t){this._desc=e,this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=et({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function u4(n){return n&&!!n.\u0275providers}var d4=Et({\u0275cmp:Et}),f4=Et({\u0275dir:Et}),h4=Et({\u0275pipe:Et}),p4=Et({\u0275mod:Et}),J0=Et({\u0275fac:Et}),Ao=Et({__NG_ELEMENT_ID__:Et}),Lm=Et({__NG_ENV_ID__:Et});function Um(n){return ru(n,"@NgModule"),n[p4]||null}function Do(n){return ru(n,"@Component"),n[d4]||null}function m4(n){return ru(n,"@Directive"),n[f4]||null}function Bm(n){return ru(n,"@Pipe"),n[h4]||null}function ru(n,e){if(n==null)throw new oe(-919,!1)}function No(n){return typeof n=="string"?n:n==null?"":String(n)}var Vm=Et({ngErrorCode:Et}),iE=Et({ngErrorMessage:Et}),rE=Et({ngTokenPath:Et});function g4(n,e){return Hm("",-200,e)}function su(n,e){throw new oe(-201,!1)}function Hm(n,e,t){let i=new oe(e,n);return i[Vm]=e,i[iE]=n,t&&(i[rE]=t),i}function sE(n){return n[Vm]}var Q0;function Gm(){return Q0}function ri(n){let e=Q0;return Q0=n,e}function v4(n,e,t){let i=rc(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&8)return null;if(e!==void 0)return e;su(n,"")}var Ts=globalThis;var oE={},Co=oE,aE="__NG_DI_FLAG__",e4=class{injector;constructor(e){this.injector=e}retrieve(e,t){let i=To(t)||0;try{return this.injector.get(e,i&8?null:Co,i)}catch(r){if(xa(r))return r;throw r}}};function cE(n,e=0){let t=C2();if(t===void 0)throw new oe(-203,!1);if(t===null)return v4(n,void 0,e);{let i=lE(e),r=t.retrieve(n,i);if(xa(r)){if(i.optional)return null;throw r}return r}}function Xe(n,e=0){return(Gm()||cE)(si(n),e)}function Y(n,e){return Xe(n,To(e))}function To(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function lE(n){return{optional:!!(n&8),host:!!(n&1),self:!!(n&2),skipSelf:!!(n&4)}}function t4(n){let e=[];for(let t=0;t<n.length;t++){let i=si(n[t]);if(Array.isArray(i)){if(i.length===0)throw new oe(900,!1);let r,s=0;for(let o=0;o<i.length;o++){let a=i[o],c=uE(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(Xe(r,s))}else e.push(Xe(i))}return e}function uE(n){return n[aE]}function Aa(n,e){let t=n.hasOwnProperty(J0);return t?n[J0]:null}function jm(n,e,t){if(n.length!==e.length)return!1;for(let i=0;i<n.length;i++){let r=n[i],s=e[i];if(t&&(r=t(r),s=t(s)),s!==r)return!1}return!0}function Wm(n){return n.flat(Number.POSITIVE_INFINITY)}function ou(n,e){n.forEach(t=>Array.isArray(t)?ou(t,e):e(t))}function y4(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function sc(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}function $m(n,e){let t=[];for(let i=0;i<n;i++)t.push(e);return t}function qm(n,e,t,i){let r=n.length;if(r==e)n.push(t,i);else if(r===1)n.push(i,n[0]),n[0]=t;else{for(r--,n.push(n[r-1],n[r]);r>e;){let s=r-2;n[r]=n[s],r--}n[e]=t,n[e+1]=i}}function au(n,e,t){let i=Ra(n,e);return i>=0?n[i|1]=t:(i=~i,qm(n,i,e,t)),i}function cu(n,e){let t=Ra(n,e);if(t>=0)return n[t|1]}function Ra(n,e){return dE(n,e,1)}function dE(n,e,t){let i=0,r=n.length>>t;for(;r!==i;){let s=i+(r-i>>1),o=n[s<<t];if(e===o)return s<<t;o>e?r=s:i=s+1}return~(r<<t)}var Ro={},Kn=[],Is=new Fe(""),oc=new Fe("",-1),_4=new Fe(""),Da=class{get(e,t=Co){if(t===Co){let r=Hm("",-201);throw r.name="\u0275NotFound",r}return t}};function Pa(n){return{\u0275providers:n}}function Xm(...n){return{\u0275providers:b4(!0,n),\u0275fromNgModule:!0}}function b4(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return ou(e,o=>{let a=o;Y2(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&Ym(r,s),t}function Ym(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];x4(r,s=>{e(s,i)})}}function Y2(n,e,t,i){if(n=si(n),!n)return!1;let r=null,s=K0(n),o=!s&&Do(n);if(!s&&!o){let c=n.ngModule;if(s=K0(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)Y2(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;ou(s.imports,u=>{Y2(u,e,t,i)&&(l||=[],l.push(u))}),l!==void 0&&Ym(l,e)}if(!a){let l=Aa(r)||(()=>new r);e({provide:r,useFactory:l,deps:Kn},r),e({provide:_4,useValue:r,multi:!0},r),e({provide:Is,useValue:()=>Xe(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;x4(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function x4(n,e){for(let t of n)u4(t)&&(t=t.\u0275providers),Array.isArray(t)?x4(t,e):e(t)}var fE=Et({provide:String,useValue:Et});function Zm(n){return n!==null&&typeof n=="object"&&fE in n}function hE(n){return!!(n&&n.useExisting)}function pE(n){return!!(n&&n.useFactory)}function Z2(n){return typeof n=="function"}var ac=new Fe(""),q2={},zm={},Z0;function cc(){return Z0===void 0&&(Z0=new Da),Z0}var fn=class{},Io=class extends fn{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,i4(e,o=>this.processProvider(o)),this.records.set(oc,Ia(void 0,this)),r.has("environment")&&this.records.set(fn,Ia(void 0,this));let s=this.records.get(ac);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(_4,Kn,{self:!0}))}retrieve(e,t){let i=To(t)||0;try{return this.get(e,Co,i)}catch(r){if(xa(r))return r;throw r}}destroy(){Q1(this),this._destroyed=!0;let e=Oe(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),Oe(e)}}onDestroy(e){return Q1(this),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){Q1(this);let t=pr(this),i=ri(void 0),r;try{return e()}finally{pr(t),ri(i)}}get(e,t=Co,i){if(Q1(this),e.hasOwnProperty(Lm))return e[Lm](this);let r=To(i),s,o=pr(this),a=ri(void 0);try{if(!(r&4)){let l=this.records.get(e);if(l===void 0){let u=_E(e)&&rc(e);u&&this.injectableDefInScope(u)?l=Ia(n4(e),q2):l=null,this.records.set(e,l)}if(l!=null)return this.hydrate(e,l,r)}let c=r&2?cc():this.parent;return t=r&8&&t===Co?null:t,c.get(e,t)}catch(c){let l=sE(c);throw l===-200||l===-201?new oe(l,null):c}finally{ri(a),pr(o)}}resolveInjectorInitializers(){let e=Oe(null),t=pr(this),i=ri(void 0),r;try{let s=this.get(Is,Kn,{self:!0});for(let o of s)o()}finally{pr(t),ri(i),Oe(e)}}toString(){return"R3Injector[...]"}processProvider(e){e=si(e);let t=Z2(e)?e:si(e&&e.provide),i=gE(e);if(!Z2(e)&&e.multi===!0){let r=this.records.get(t);r||(r=Ia(void 0,q2,!0),r.factory=()=>t4(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t,i){let r=Oe(null);try{if(t.value===zm)throw g4("");return t.value===q2&&(t.value=zm,t.value=t.factory(void 0,i)),typeof t.value=="object"&&t.value&&yE(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{Oe(r)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=si(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function n4(n){let e=rc(n),t=e!==null?e.factory:Aa(n);if(t!==null)return t;if(n instanceof Fe)throw new oe(-204,!1);if(n instanceof Function)return mE(n);throw new oe(-204,!1)}function mE(n){if(n.length>0)throw new oe(-204,!1);let t=nE(n);return t!==null?()=>t.factory(n):()=>new n}function gE(n){if(Zm(n))return Ia(void 0,n.useValue);{let e=Km(n);return Ia(e,q2)}}function Km(n,e,t){let i;if(Z2(n)){let r=si(n);return Aa(r)||n4(r)}else if(Zm(n))i=()=>si(n.useValue);else if(pE(n))i=()=>n.useFactory(...t4(n.deps||[]));else if(hE(n))i=(r,s)=>Xe(si(n.useExisting),s!==void 0&&s&8?8:void 0);else{let r=si(n&&(n.useClass||n.provide));if(vE(n))i=()=>new r(...t4(n.deps));else return Aa(r)||n4(r)}return i}function Q1(n){if(n.destroyed)throw new oe(-205,!1)}function Ia(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function vE(n){return!!n.deps}function yE(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function _E(n){return typeof n=="function"||typeof n=="object"&&n.ngMetadataName==="InjectionToken"}function i4(n,e){for(let t of n)Array.isArray(t)?i4(t,e):t&&u4(t)?i4(t.\u0275providers,e):e(t)}function Pn(n,e){let t;n instanceof Io?(Q1(n),t=n):t=new e4(n);let i,r=pr(t),s=ri(void 0);try{return e()}finally{pr(r),ri(s)}}function Jm(){return Gm()!==void 0||C2()!=null}var Oi=0,Ue=1,We=2,hn=3,Ei=4,Ln=5,Po=6,La=7,tn=8,mr=9,ki=10,Ht=11,za=12,M4=13,As=14,jn=15,Ds=16,Lo=17,gr=18,vr=19,S4=20,jr=21,lu=22,ws=23,oi=24,zo=25,yr=26,pn=27,Qm=1,E4=6,Ns=7,lc=8,Oo=9,Gt=10;function Rs(n){return Array.isArray(n)&&typeof n[Qm]=="object"}function wi(n){return Array.isArray(n)&&n[Qm]===!0}function w4(n){return(n.flags&4)!==0}function qr(n){return n.componentOffset>-1}function uu(n){return(n.flags&1)===1}function ko(n){return!!n.template}function Oa(n){return(n[We]&512)!==0}function Fo(n){return(n[We]&256)===256}var C4="svg",e7="math";function Ci(n){for(;Array.isArray(n);)n=n[Oi];return n}function T4(n,e){return Ci(e[n])}function Fi(n,e){return Ci(e[n.index])}function du(n,e){return n.data[e]}function Ui(n,e){let t=e[n];return Rs(t)?t:t[Oi]}function t7(n){return(n[We]&4)===4}function fu(n){return(n[We]&128)===128}function n7(n){return wi(n[hn])}function _r(n,e){return e==null?null:n[e]}function I4(n){n[Lo]=0}function A4(n){n[We]&1024||(n[We]|=1024,fu(n)&&Uo(n))}function i7(n,e){for(;n>0;)e=e[As],n--;return e}function uc(n){return!!(n[We]&9216||n[oi]?.dirty)}function hu(n){n[ki].changeDetectionScheduler?.notify(8),n[We]&64&&(n[We]|=1024),uc(n)&&Uo(n)}function Uo(n){n[ki].changeDetectionScheduler?.notify(0);let e=Wr(n);for(;e!==null&&!(e[We]&8192||(e[We]|=8192,!fu(e)));)e=Wr(e)}function pu(n,e){if(Fo(n))throw new oe(911,!1);n[jr]===null&&(n[jr]=[]),n[jr].push(e)}function r7(n,e){if(n[jr]===null)return;let t=n[jr].indexOf(e);t!==-1&&n[jr].splice(t,1)}function Wr(n){let e=n[hn];return wi(e)?e[hn]:e}function D4(n){return n[La]??=[]}function N4(n){return n.cleanup??=[]}function s7(n,e,t,i){let r=D4(e);r.push(t),n.firstCreatePass&&N4(n).push(i,r.length-1)}var st={lFrame:v7(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var r4=!1;function o7(){return st.lFrame.elementDepthCount}function a7(){st.lFrame.elementDepthCount++}function R4(){st.lFrame.elementDepthCount--}function c7(){return st.bindingsEnabled}function P4(){return st.skipHydrationRootTNode!==null}function L4(n){return st.skipHydrationRootTNode===n}function z4(){st.skipHydrationRootTNode=null}function ct(){return st.lFrame.lView}function zn(){return st.lFrame.tView}function Bi(n){return st.lFrame.contextLView=n,n[tn]}function Vi(n){return st.lFrame.contextLView=null,n}function Ti(){let n=O4();for(;n!==null&&n.type===64;)n=n.parent;return n}function O4(){return st.lFrame.currentTNode}function l7(){let n=st.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function ka(n,e){let t=st.lFrame;t.currentTNode=n,t.isParent=e}function k4(){return st.lFrame.isParent}function F4(){st.lFrame.isParent=!1}function U4(){return r4}function ec(n){let e=r4;return r4=n,e}function u7(){return st.lFrame.bindingIndex}function d7(n){return st.lFrame.bindingIndex=n}function Bo(){return st.lFrame.bindingIndex++}function mu(n){let e=st.lFrame,t=e.bindingIndex;return e.bindingIndex=e.bindingIndex+n,t}function f7(){return st.lFrame.inI18n}function h7(n,e){let t=st.lFrame;t.bindingIndex=t.bindingRootIndex=n,gu(e)}function p7(){return st.lFrame.currentDirectiveIndex}function gu(n){st.lFrame.currentDirectiveIndex=n}function m7(n){let e=st.lFrame.currentDirectiveIndex;return e===-1?null:n[e]}function B4(){return st.lFrame.currentQueryIndex}function vu(n){st.lFrame.currentQueryIndex=n}function bE(n){let e=n[Ue];return e.type===2?e.declTNode:e.type===1?n[Ln]:null}function V4(n,e,t){if(t&4){let r=e,s=n;for(;r=r.parent,r===null&&!(t&1);)if(r=bE(s),r===null||(s=s[As],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=st.lFrame=g7();return i.currentTNode=e,i.lView=n,!0}function yu(n){let e=g7(),t=n[Ue];st.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function g7(){let n=st.lFrame,e=n===null?null:n.child;return e===null?v7(n):e}function v7(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function y7(){let n=st.lFrame;return st.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var H4=y7;function _u(){let n=y7();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function _7(n){return(st.lFrame.contextLView=i7(n,st.lFrame.contextLView))[tn]}function br(){return st.lFrame.selectedIndex}function Ps(n){st.lFrame.selectedIndex=n}function bu(){let n=st.lFrame;return du(n.tView,n.selectedIndex)}function Vo(){st.lFrame.currentNamespace=C4}function G4(){return st.lFrame.currentNamespace}var b7=!0;function xu(){return b7}function Mu(n){b7=n}function s4(n,e=null,t=null,i){let r=j4(n,e,t,i);return r.resolveInjectorInitializers(),r}function j4(n,e=null,t=null,i,r=new Set){let s=[t||Kn,Xm(n)],o;return new Io(s,e||cc(),o||null,r)}var Mi=class n{static THROW_IF_NOT_FOUND=Co;static NULL=new Da;static create(e,t){if(Array.isArray(e))return s4({name:""},t,e,"");{let i=e.name??"";return s4({name:i},e.parent,e.providers,i)}}static \u0275prov=et({token:n,providedIn:"any",factory:()=>Xe(oc)});static __NG_ELEMENT_ID__=-1},Vt=new Fe(""),Hi=(()=>{class n{static __NG_ELEMENT_ID__=xE;static __NG_ENV_ID__=t=>t}return n})(),K2=class extends Hi{_lView;constructor(e){super(),this._lView=e}get destroyed(){return Fo(this._lView)}onDestroy(e){let t=this._lView;return pu(t,e),()=>r7(t,e)}};function xE(){return new K2(ct())}var W4=!1,x7=new Fe(""),Xr=(()=>{class n{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new wn(!1);debugTaskTracker=Y(x7,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new bt(t=>{t.next(!1),t.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),this.debugTaskTracker?.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.debugTaskTracker?.remove(t),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=et({token:n,providedIn:"root",factory:()=>new n})}return n})(),o4=class extends En{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(e=!1){super(),this.__isAsync=e,Jm()&&(this.destroyRef=Y(Hi,{optional:!0})??void 0,this.pendingTasks=Y(Xr,{optional:!0})??void 0)}emit(e){let t=Oe(null);try{super.next(e)}finally{Oe(t)}}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=this.wrapInTimeout(s),r&&(r=this.wrapInTimeout(r)),o&&(o=this.wrapInTimeout(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof dn&&e.add(a),a}wrapInTimeout(e){return t=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{e(t)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},Gn=o4;function J2(...n){}function $4(n){let e,t;function i(){n=J2;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),e!==void 0&&clearTimeout(e)}catch(r){}}return e=setTimeout(()=>{n(),i()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{n(),i()})),()=>i()}function M7(n){return queueMicrotask(()=>n()),()=>{n=J2}}var q4="isAngularZone",tc=q4+"_ID",ME=0,Bt=class n{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new Gn(!1);onMicrotaskEmpty=new Gn(!1);onStable=new Gn(!1);onError=new Gn(!1);constructor(e){let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:s=W4}=e;if(typeof Zone>"u")throw new oe(908,!1);Zone.assertZonePatched();let o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&i,o.shouldCoalesceRunChangeDetection=r,o.callbackScheduled=!1,o.scheduleInRootZone=s,wE(o)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(q4)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new oe(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new oe(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,SE,J2,J2);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},SE={};function X4(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function EE(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function e(){$4(()=>{n.callbackScheduled=!1,a4(n),n.isCheckStableRunning=!0,X4(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{e()}):n._outer.run(()=>{e()}),a4(n)}function wE(n){let e=()=>{EE(n)},t=ME++;n._inner=n._inner.fork({name:"angular",properties:{[q4]:!0,[tc]:t,[tc+t]:!0},onInvokeTask:(i,r,s,o,a,c)=>{if(CE(c))return i.invokeTask(s,o,a,c);try{return Om(n),i.invokeTask(s,o,a,c)}finally{(n.shouldCoalesceEventChangeDetection&&o.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),km(n)}},onInvoke:(i,r,s,o,a,c,l)=>{try{return Om(n),i.invoke(s,o,a,c,l)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!TE(c)&&e(),km(n)}},onHasTask:(i,r,s,o)=>{i.hasTask(s,o),r===s&&(o.change=="microTask"?(n._hasPendingMicrotasks=o.microTask,a4(n),X4(n)):o.change=="macroTask"&&(n.hasPendingMacrotasks=o.macroTask))},onHandleError:(i,r,s,o)=>(i.handleError(s,o),n.runOutsideAngular(()=>n.onError.emit(o)),!1)})}function a4(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function Om(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function km(n){n._nesting--,X4(n)}var nc=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new Gn;onMicrotaskEmpty=new Gn;onStable=new Gn;onError=new Gn;run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,r){return e.apply(t,i)}};function CE(n){return S7(n,"__ignore_ng_zone__")}function TE(n){return S7(n,"__scheduler_tick__")}function S7(n,e){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[e]===!0}var Si=class{_console=console;handleError(e){this._console.error("ERROR",e)}},xr=new Fe("",{factory:()=>{let n=Y(Bt),e=Y(fn),t;return i=>{n.runOutsideAngular(()=>{e.destroyed&&!t?setTimeout(()=>{throw i}):(t??=e.get(Si),t.handleError(i))})}}}),E7={provide:Is,useValue:()=>{let n=Y(Si,{optional:!0})},multi:!0};function Gi(n,e){let[t,i,r]=P0(n,e?.equal),s=t,o=s[Rn];return s.set=i,s.update=r,s.asReadonly=Su.bind(s),s}function Su(){let n=this[Rn];if(n.readonlyFn===void 0){let e=()=>this();e[Rn]=n,n.readonlyFn=e}return n.readonlyFn}var dc=new Fe("",{factory:()=>IE}),IE="ng";var Eu=new Fe(""),ji=new Fe("",{providedIn:"platform",factory:()=>"unknown"}),wu=new Fe(""),Fa=new Fe("",{factory:()=>Y(Vt).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var fc=(()=>{class n{view;node;constructor(t,i){this.view=t,this.node=i}static __NG_ELEMENT_ID__=AE}return n})();function AE(){return new fc(ct(),Ti())}var $r=class{},Ua=new Fe("",{factory:()=>!0});var Cu=new Fe(""),Tu=(()=>{class n{static \u0275prov=et({token:n,providedIn:"root",factory:()=>new c4})}return n})(),c4=class{dirtyEffectCount=0;queues=new Map;add(e){this.enqueue(e),this.schedule(e)}schedule(e){e.dirty&&this.dirtyEffectCount++}remove(e){let t=e.zone,i=this.queues.get(t);i.has(e)&&(i.delete(e),e.dirty&&this.dirtyEffectCount--)}enqueue(e){let t=e.zone;this.queues.has(t)||this.queues.set(t,new Set);let i=this.queues.get(t);i.has(e)||i.add(e)}flush(){for(;this.dirtyEffectCount>0;){let e=!1;for(let[t,i]of this.queues)t===null?e||=this.flushQueue(i):e||=t.run(()=>this.flushQueue(i));e||(this.dirtyEffectCount=0)}}flushQueue(e){let t=!1;for(let i of e)i.dirty&&(this.dirtyEffectCount--,t=!0,i.run());return t}},Q2=class{[Rn];constructor(e){this[Rn]=e}destroy(){this[Rn].destroy()}};function Ba(n,e){let t=e?.injector??Y(Mi),i=e?.manualCleanup!==!0?t.get(Hi):null,r,s=t.get(fc,null,{optional:!0}),o=t.get($r);return s!==null?(r=RE(s.view,o,n),i instanceof K2&&i._lView===s.view&&(i=null)):r=PE(n,t.get(Tu),o),r.injector=t,i!==null&&(r.onDestroyFns=[i.onDestroy(()=>r.destroy())]),new Q2(r)}var w7=at(de({},z0),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let n=ec(!1);try{O0(this)}finally{ec(n)}},cleanup(){if(!this.cleanupFns?.length)return;let n=Oe(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],Oe(n)}}}),DE=at(de({},w7),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(bo(this),this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();this.cleanup(),this.scheduler.remove(this)}}),NE=at(de({},w7),{consumerMarkedDirty(){this.view[We]|=8192,Uo(this.view),this.notifier.notify(13)},destroy(){if(bo(this),this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();this.cleanup(),this.view[ws]?.delete(this)}});function RE(n,e,t){let i=Object.create(NE);return i.view=n,i.zone=typeof Zone<"u"?Zone.current:null,i.notifier=e,i.fn=C7(i,t),n[ws]??=new Set,n[ws].add(i),i.consumerMarkedDirty(i),i}function PE(n,e,t){let i=Object.create(DE);return i.fn=C7(i,n),i.scheduler=e,i.notifier=t,i.zone=typeof Zone<"u"?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function C7(n,e){return()=>{e(t=>(n.cleanupFns??=[]).push(t))}}function Ju(n){return{toString:n}.toString()}var yt=(function(n){return n[n.TemplateCreateStart=0]="TemplateCreateStart",n[n.TemplateCreateEnd=1]="TemplateCreateEnd",n[n.TemplateUpdateStart=2]="TemplateUpdateStart",n[n.TemplateUpdateEnd=3]="TemplateUpdateEnd",n[n.LifecycleHookStart=4]="LifecycleHookStart",n[n.LifecycleHookEnd=5]="LifecycleHookEnd",n[n.OutputStart=6]="OutputStart",n[n.OutputEnd=7]="OutputEnd",n[n.BootstrapApplicationStart=8]="BootstrapApplicationStart",n[n.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",n[n.BootstrapComponentStart=10]="BootstrapComponentStart",n[n.BootstrapComponentEnd=11]="BootstrapComponentEnd",n[n.ChangeDetectionStart=12]="ChangeDetectionStart",n[n.ChangeDetectionEnd=13]="ChangeDetectionEnd",n[n.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",n[n.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",n[n.AfterRenderHooksStart=16]="AfterRenderHooksStart",n[n.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",n[n.ComponentStart=18]="ComponentStart",n[n.ComponentEnd=19]="ComponentEnd",n[n.DeferBlockStateStart=20]="DeferBlockStateStart",n[n.DeferBlockStateEnd=21]="DeferBlockStateEnd",n[n.DynamicComponentStart=22]="DynamicComponentStart",n[n.DynamicComponentEnd=23]="DynamicComponentEnd",n[n.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",n[n.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",n})(yt||{}),Ou=class{previousValue;currentValue;firstChange;constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function u9(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}var d9=null,Oh=(()=>{d9=T7;let n=()=>T7;return n.ngInherit=!0,n})();function WE(){return d9}function T7(n){return n.type.prototype.ngOnChanges&&(n.setInput=qE),$E}function $E(){let n=f9(this),e=n?.current;if(e){let t=n.previous;if(t===Ro)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function qE(n,e,t,i,r){let s=this.declaredInputs[i],o=f9(n)||XE(n,{previous:Ro,current:null}),a=o.current||(o.current={}),c=o.previous,l=c[s];a[s]=new Ou(l&&l.currentValue,t,c===Ro),u9(n,e,r,t)}var nh="__ngSimpleChanges__";function f9(n){return Object.hasOwn(n,nh)&&n[nh]||null}function XE(n,e){return n[nh]=e}var I7=[];var wt=function(n,e=null,t){for(let i=0;i<I7.length;i++){let r=I7[i];r(n,e,t)}};function YE(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=WE()(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function ZE(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function Ru(n,e,t){h9(n,e,3,t)}function Pu(n,e,t,i){(n[We]&3)===t&&h9(n,e,t,i)}function Y4(n,e){let t=n[We];(t&3)===e&&(t&=16383,t+=1,n[We]=t)}function h9(n,e,t,i){let r=i!==void 0?n[Lo]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[Lo]+=65536),(a<s||s==-1)&&(KE(n,t,e,c),n[Lo]=(n[Lo]&4294901760)+c+2),c++}function A7(n,e){wt(yt.LifecycleHookStart,n,e);let t=Oe(null);try{e.call(n)}finally{Oe(t),wt(yt.LifecycleHookEnd,n,e)}}function KE(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[We]>>14<n[Lo]>>16&&(n[We]&3)===e&&(n[We]+=16384,A7(a,s)):A7(a,s)}var Ha=-1,gc=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(e,t,i,r){this.factory=e,this.name=r,this.canSeeViewProviders=t,this.injectImpl=i}};function JE(n){return(n.flags&8)!==0}function QE(n){return(n.flags&16)!==0}function ew(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];nw(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function tw(n){return n===3||n===4||n===6}function nw(n){return n.charCodeAt(0)===64}function Qu(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?D7(n,t,r,null,e[++i]):D7(n,t,r,null,null))}}return n}function D7(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){r!==null&&(n[s+1]=r);return}s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),r!==null&&n.splice(s++,0,r)}function p9(n){return n!==Ha}function ku(n){return n&32767}function iw(n){return n>>16}function Fu(n,e){let t=iw(n),i=e;for(;t>0;)i=i[As],t--;return i}var ih=!0;function N7(n){let e=ih;return ih=n,e}var rw=256,m9=rw-1,g9=5,sw=0,Mr={};function ow(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(Ao)&&(i=t[Ao]),i==null&&(i=t[Ao]=sw++);let r=i&m9,s=1<<r;e.data[n+(r>>g9)]|=s}function v9(n,e){let t=y9(n,e);if(t!==-1)return t;let i=e[Ue];i.firstCreatePass&&(n.injectorIndex=e.length,Z4(i.data,n),Z4(e,null),Z4(i.blueprint,null));let r=kh(n,e),s=n.injectorIndex;if(p9(r)){let o=ku(r),a=Fu(r,e),c=a[Ue].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function Z4(n,e){n.push(0,0,0,0,0,0,0,0,e)}function y9(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function kh(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=S9(r),i===null)return Ha;if(t++,r=r[As],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return Ha}function aw(n,e,t){ow(n,e,t)}function _9(n,e,t){if(t&8||n!==void 0)return n;su(e,"NodeInjector")}function b9(n,e,t,i){if(t&8&&i===void 0&&(i=null),(t&3)===0){let r=n[mr],s=ri(void 0);try{return r?r.get(e,i,t&8):v4(e,i,t&8)}finally{ri(s)}}return _9(i,e,t)}function x9(n,e,t,i=0,r){if(n!==null){if(e[We]&2048&&!(i&2)){let o=dw(n,e,t,i,Mr);if(o!==Mr)return o}let s=M9(n,e,t,i,Mr);if(s!==Mr)return s}return b9(e,t,i,r)}function M9(n,e,t,i,r){let s=lw(t);if(typeof s=="function"){if(!V4(e,n,i))return i&1?_9(r,t,i):b9(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&8))su(t);else return o}finally{H4()}}else if(typeof s=="number"){let o=null,a=y9(n,e),c=Ha,l=i&1?e[jn][Ln]:null;for((a===-1||i&4)&&(c=a===-1?kh(n,e):e[a+8],c===Ha||!P7(i,!1)?a=-1:(o=e[Ue],a=ku(c),e=Fu(c,e)));a!==-1;){let u=e[Ue];if(R7(s,a,u.data)){let d=cw(a,e,t,o,i,l);if(d!==Mr)return d}c=e[a+8],c!==Ha&&P7(i,e[Ue].data[a+8]===l)&&R7(s,a,e)?(o=u,a=ku(c),e=Fu(c,e)):a=-1}}return r}function cw(n,e,t,i,r,s){let o=e[Ue],a=o.data[n+8],c=i==null?qr(a)&&ih:i!=o&&(a.type&3)!==0,l=r&1&&s===a,u=Lu(a,o,t,c,l);return u!==null?Uu(e,o,u,a,r):Mr}function Lu(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,f=r?a+u:l;for(let h=d;h<f;h++){let p=o[h];if(h<c&&t===p||h>=c&&p.type===t)return h}if(r){let h=o[c];if(h&&ko(h)&&h.type===t)return c}return null}function Uu(n,e,t,i,r){let s=n[t],o=e.data;if(s instanceof gc){let a=s;if(a.resolving)throw g4("");let c=N7(a.canSeeViewProviders);a.resolving=!0;let l=o[t].type||o[t],u,d=a.injectImpl?ri(a.injectImpl):null,f=V4(n,i,0);try{s=n[t]=a.factory(void 0,r,o,n,i),e.firstCreatePass&&t>=i.directiveStart&&YE(t,o[t],e)}finally{d!==null&&ri(d),N7(c),a.resolving=!1,H4()}}return s}function lw(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(Ao)?n[Ao]:void 0;return typeof e=="number"?e>=0?e&m9:uw:e}function R7(n,e,t){let i=1<<n;return!!(t[e+(n>>g9)]&i)}function P7(n,e){return!(n&2)&&!(n&1&&e)}var Ls=class{_tNode;_lView;constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return x9(this._tNode,this._lView,e,To(i),t)}};function uw(){return new Ls(Ti(),ct())}function dw(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[We]&2048&&!Oa(o);){let a=M9(s,o,t,i|2,Mr);if(a!==Mr)return a;let c=s.parent;if(!c){let l=o[S4];if(l){let u=l.get(t,Mr,i&-5);if(u!==Mr)return u}c=S9(o),o=o[As]}s=c}return r}function S9(n){let e=n[Ue],t=e.type;return t===2?e.declTNode:t===1?n[Ln]:null}function nn(n){return{token:n.token,providedIn:n.autoProvided===!1?null:"root",factory:n.factory,value:void 0}}function fw(){return qa(Ti(),ct())}function qa(n,e){return new Ec(Fi(n,e))}var Ec=(()=>{class n{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=fw}return n})();function hw(n){return n instanceof Ec?n.nativeElement:n}function pw(){return this._results[Symbol.iterator]()}var Bu=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new En}constructor(e=!1){this._emitDistinctChangesOnly=e}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){this.dirty=!1;let i=Wm(e);(this._changesDetected=!jm(this._results,i,t))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=pw};function E9(n){return(n.flags&128)===128}var Fh=(function(n){return n[n.OnPush=0]="OnPush",n[n.Eager=1]="Eager",n[n.Default=1]="Default",n})(Fh||{}),w9=new Map,mw=0;function gw(){return mw++}function vw(n){w9.set(n[vr],n)}function rh(n){w9.delete(n[vr])}var L7="__ngContext__";function Ga(n,e){Rs(e)?(n[L7]=e[vr],vw(e)):n[L7]=e}function C9(n){return I9(n[za])}function T9(n){return I9(n[Ei])}function I9(n){for(;n!==null&&!wi(n);)n=n[Ei];return n}var sh;function Uh(n){sh=n}function Bh(){if(sh!==void 0)return sh;if(typeof document<"u")return document;throw new oe(210,!1)}var A9="r";var D9="di";var N9=!1,R9=new Fe("",{factory:()=>N9});var z7=new WeakMap;function yw(n,e){if(n==null||typeof n!="object")return;let t=z7.get(n);t||(t=new WeakSet,z7.set(n,t)),t.add(e)}var _w=(n,e,t,i)=>{};function bw(n,e,t,i){_w(n,e,t,i)}function e3(n){return(n.flags&32)===32}var xw=()=>null;function P9(n,e,t=!1){return xw(n,e,t)}function L9(n,e){let t=n.contentQueries;if(t!==null){let i=Oe(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];vu(s),a.contentQueries(2,e[o],o)}}}finally{Oe(i)}}}function oh(n,e,t){vu(0);let i=Oe(null);try{e(n,t)}finally{Oe(i)}}function z9(n,e,t){if(w4(e)){let i=Oe(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];if(a.contentQueries){let c=t[o];a.contentQueries(1,c,o)}}}finally{Oe(i)}}}var qi=(function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n[n.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",n})(qi||{});var Iu;function Mw(){if(Iu===void 0&&(Iu=null,Ts.trustedTypes))try{Iu=Ts.trustedTypes.createPolicy("angular",{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n})}catch(n){}return Iu}function t3(n){return Mw()?.createHTML(n)||n}var Au;function Sw(){if(Au===void 0&&(Au=null,Ts.trustedTypes))try{Au=Ts.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n})}catch(n){}return Au}function O7(n){return Sw()?.createHTML(n)||n}var Yr=class{changingThisBreaksApplicationSecurity;constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${eu})`}},ah=class extends Yr{getTypeName(){return"HTML"}},ch=class extends Yr{getTypeName(){return"Style"}},lh=class extends Yr{getTypeName(){return"Script"}},uh=class extends Yr{getTypeName(){return"URL"}},dh=class extends Yr{getTypeName(){return"ResourceURL"}};function Xi(n){return n instanceof Yr?n.changingThisBreaksApplicationSecurity:n}function Jr(n,e){let t=O9(n);if(t!=null&&t!==e){if(t==="ResourceURL"&&e==="URL")return!0;throw new Error(`Required a safe ${e}, got a ${t} (see ${eu})`)}return t===e}function O9(n){return n instanceof Yr&&n.getTypeName()||null}function Vh(n){return new ah(n)}function Hh(n){return new ch(n)}function Gh(n){return new lh(n)}function jh(n){return new uh(n)}function Wh(n){return new dh(n)}function Ew(n){let e=new hh(n);return ww()?new fh(e):e}var fh=class{inertDocumentHelper;constructor(e){this.inertDocumentHelper=e}getInertBodyElement(e){e="<body><remove></remove>"+e;try{let t=new window.DOMParser().parseFromString(t3(e),"text/html").body;return t===null?this.inertDocumentHelper.getInertBodyElement(e):(t.firstChild?.remove(),t)}catch(t){return null}}},hh=class{defaultDoc;inertDocument;constructor(e){this.defaultDoc=e,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(e){let t=this.inertDocument.createElement("template");return t.innerHTML=t3(e),t}};function ww(){try{return!!new window.DOMParser().parseFromString(t3(""),"text/html")}catch(n){return!1}}var Cw=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function wc(n){return n=String(n),n.match(Cw)?n:"unsafe:"+n}function Qr(n){let e={};for(let t of n.split(","))e[t]=!0;return e}function Cc(...n){let e={};for(let t of n)for(let i in t)t.hasOwnProperty(i)&&(e[i]=!0);return e}var k9=Qr("area,br,col,hr,img,wbr"),F9=Qr("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),U9=Qr("rp,rt"),Tw=Cc(U9,F9),Iw=Cc(F9,Qr("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),Aw=Cc(U9,Qr("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),k7=Cc(k9,Iw,Aw,Tw),B9=Qr("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),Dw=Qr("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),Nw=Qr("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),Rw=Cc(B9,Dw,Nw),Pw=Qr("script,style,template"),ph=class{sanitizedSomething=!1;buf=[];sanitizeChildren(e){let t=e.firstChild,i=!0,r=[];for(;t;){if(t.nodeType===Node.ELEMENT_NODE?i=this.startElement(t):t.nodeType===Node.TEXT_NODE?this.chars(t.nodeValue):this.sanitizedSomething=!0,i&&t.firstChild){r.push(t),t=Ow(t);continue}for(;t;){t.nodeType===Node.ELEMENT_NODE&&this.endElement(t);let s=zw(t);if(s){t=s;break}t=r.pop()}}return this.buf.join("")}startElement(e){let t=F7(e).toLowerCase();if(!k7.hasOwnProperty(t))return this.sanitizedSomething=!0,!Pw.hasOwnProperty(t);this.buf.push("<"),this.buf.push(t);let i=e.attributes;for(let r=0;r<i.length;r++){let s=i.item(r),o=s.name,a=o.toLowerCase();if(!Rw.hasOwnProperty(a)){this.sanitizedSomething=!0;continue}let c=s.value;B9[a]&&(c=wc(c)),this.buf.push(" ",o,'="',U7(c),'"')}return this.buf.push(">"),!0}endElement(e){let t=F7(e).toLowerCase();k7.hasOwnProperty(t)&&!k9.hasOwnProperty(t)&&(this.buf.push("</"),this.buf.push(t),this.buf.push(">"))}chars(e){this.buf.push(U7(e))}};function Lw(n,e){return(n.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function zw(n){let e=n.nextSibling;if(e&&n!==e.previousSibling)throw V9(e);return e}function Ow(n){let e=n.firstChild;if(e&&Lw(n,e))throw V9(e);return e}function F7(n){let e=n.nodeName;return typeof e=="string"?e:"FORM"}function V9(n){return new Error(`Failed to sanitize html because the element is clobbered: ${n.outerHTML}`)}var kw=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,Fw=/([^\#-~ |!])/g;function U7(n){return n.replace(/&/g,"&amp;").replace(kw,function(e){let t=e.charCodeAt(0),i=e.charCodeAt(1);return"&#"+((t-55296)*1024+(i-56320)+65536)+";"}).replace(Fw,function(e){return"&#"+e.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var Du;function n3(n,e){let t=null;try{Du=Du||Ew(n);let i=e?String(e):"";t=Du.getInertBodyElement(i);let r=5,s=i;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,i=s,s=t.innerHTML,t=Du.getInertBodyElement(i)}while(i!==s);let a=new ph().sanitizeChildren(B7(t)||t);return t3(a)}finally{if(t){let i=B7(t)||t;for(;i.firstChild;)i.firstChild.remove()}}}function B7(n){return"content"in n&&Uw(n)?n.content:null}function Uw(n){return n.nodeType===Node.ELEMENT_NODE&&n.nodeName==="TEMPLATE"}function Bw(n,e){return n.createText(e)}function Vw(n,e,t){n.setValue(e,t)}function H9(n,e,t){return n.createElement(e,t)}function Vu(n,e,t,i,r){n.insertBefore(e,t,i,r)}function G9(n,e,t){n.appendChild(e,t)}function V7(n,e,t,i,r){i!==null?Vu(n,e,t,i,r):G9(n,e,t)}function j9(n,e,t,i){n.removeChild(null,e,t,i)}function Hw(n,e,t){n.setAttribute(e,"style",t)}function Gw(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function W9(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&ew(n,e,i),r!==null&&Gw(n,e,r),s!==null&&Hw(n,e,s)}var Yi=(function(n){return n[n.NONE=0]="NONE",n[n.HTML=1]="HTML",n[n.STYLE=2]="STYLE",n[n.SCRIPT=3]="SCRIPT",n[n.URL=4]="URL",n[n.RESOURCE_URL=5]="RESOURCE_URL",n[n.ATTRIBUTE_NO_BINDING=6]="ATTRIBUTE_NO_BINDING",n})(Yi||{});function $h(n){let e=$9();return e?O7(e.sanitize(Yi.HTML,n)||""):Jr(n,"HTML")?O7(Xi(n)):n3(Bh(),No(n))}function Xa(n){let e=$9();return e?e.sanitize(Yi.URL,n)||"":Jr(n,"URL")?Xi(n):wc(No(n))}function $9(){let n=ct();return n&&n[ki].sanitizer}function jw(n){return n instanceof Function?n():n}function Ww(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}var q9="ng-template";function $w(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&Ww(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(qh(n))return!1;if(r=e.indexOf(1,r),r>-1){let s;for(;++r<e.length&&typeof(s=e[r])=="string";)if(s.toLowerCase()===t)return!0}return!1}function qh(n){return n.type===4&&n.value!==q9}function qw(n,e,t){let i=n.type===4&&!t?q9:n.value;return e===i}function Xw(n,e,t){let i=4,r=n.attrs,s=r!==null?Kw(r):0,o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!Wi(i)&&!Wi(c))return!1;if(o&&Wi(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!qw(n,c,t)||c===""&&e.length===1){if(Wi(i))return!1;o=!0}}else if(i&8){if(r===null||!$w(n,r,c,t)){if(Wi(i))return!1;o=!0}}else{let l=e[++a],u=Yw(c,r,qh(n),t);if(u===-1){if(Wi(i))return!1;o=!0;continue}if(l!==""){let d;if(u>s?d="":d=r[u+1].toLowerCase(),i&2&&l!==d){if(Wi(i))return!1;o=!0}}}}return Wi(i)||o}function Wi(n){return(n&1)===0}function Yw(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return Jw(e,n)}function X9(n,e,t=!1){for(let i=0;i<e.length;i++)if(Xw(n,e[i],t))return!0;return!1}function Zw(n){let e=n.attrs;if(e!=null){let t=e.indexOf(5);if((t&1)===0)return e[t+1]}return null}function Kw(n){for(let e=0;e<n.length;e++){let t=n[e];if(tw(t))return e}return n.length}function Jw(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function Qw(n,e){e:for(let t=0;t<e.length;t++){let i=e[t];if(n.length===i.length){for(let r=0;r<n.length;r++)if(n[r]!==i[r])continue e;return!0}}return!1}function H7(n,e){return n?":not("+e.trim()+")":e}function eC(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!Wi(o)&&(e+=H7(s,r),r=""),i=o,s=s||!Wi(i);t++}return r!==""&&(e+=H7(s,r)),e}function tC(n){return n.map(eC).join(",")}function nC(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!Wi(r))break;r=s}i++}return t.length&&e.push(1,...t),e}var ai={},Zr=(function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n})(Zr||{}),iC;function Xh(n,e){return iC(n,e)}var hY=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var mh=new WeakMap;function Y9(n){return n?n[As]??n:null}var hc=new WeakSet;function rC(n,e,t){let i=mh.get(n);if(!i||i.length===0)return;let r=e.parentNode,s=e.previousSibling,o=Y9(t);for(let a=i.length-1;a>=0;a--){let{el:c,declarationView:l}=i[a],u=c.parentNode;c===e?(i.splice(a,1),hc.add(c),c.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):s&&c===s?(i.splice(a,1),c.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),c.parentNode?.removeChild(c)):u&&r&&u!==r&&(o===null||l===null||o===l)&&(i.splice(a,1),c.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),c.parentNode?.removeChild(c))}}function sC(n,e,t){let i=Y9(t),r=mh.get(n);r?r.some(s=>s.el===e)||r.push({el:e,declarationView:i}):mh.set(n,[{el:e,declarationView:i}])}var zs=new Set,i3=(function(n){return n[n.CHANGE_DETECTION=0]="CHANGE_DETECTION",n[n.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",n})(i3||{}),ks=new Fe(""),G7=new Set;function Zi(n){G7.has(n)||(G7.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}var Yh=(()=>{class n{impl=null;execute(){this.impl?.execute()}static \u0275prov=et({token:n,providedIn:"root",factory:()=>new n})}return n})(),Z9=[0,1,2,3],K9=(()=>{class n{ngZone=Y(Bt);scheduler=Y($r);errorHandler=Y(Si,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){Y(ks,{optional:!0})}execute(){let t=this.sequences.size>0;t&&wt(yt.AfterRenderHooksStart),this.executing=!0;for(let i of Z9)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let s=r.hooks[i];return s(r.pipelinedValue)},r.snapshot))}catch(s){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(s)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),t&&wt(yt.AfterRenderHooksEnd)}register(t){let{view:i}=t;i!==void 0?((i[zo]??=[]).push(t),Uo(i),i[We]|=8192):this.executing?this.deferredRegistrations.add(t):this.addSequence(t)}addSequence(t){this.sequences.add(t),this.scheduler.notify(7)}unregister(t){this.executing&&this.sequences.has(t)?(t.erroredOrDestroyed=!0,t.pipelinedValue=void 0,t.once=!0):(this.sequences.delete(t),this.deferredRegistrations.delete(t))}maybeTrace(t,i){return i?i.run(i3.AFTER_NEXT_RENDER,t):t()}static \u0275prov=et({token:n,providedIn:"root",factory:()=>new n})}return n})(),Hu=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(e,t,i,r,s,o=null){this.impl=e,this.hooks=t,this.view=i,this.once=r,this.snapshot=o,this.unregisterOnDestroy=s?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let e=this.view?.[zo];e&&(this.view[zo]=e.filter(t=>t!==this))}};function Tc(n,e){let t=e?.injector??Y(Mi);return Zi("NgAfterNextRender"),aC(n,t,e,!0)}function oC(n){return n instanceof Function?[void 0,void 0,n,void 0]:[n.earlyRead,n.write,n.mixedReadWrite,n.read]}function aC(n,e,t,i){let r=e.get(Yh);r.impl??=e.get(K9);let s=e.get(ks,null,{optional:!0}),o=t?.manualCleanup!==!0?e.get(Hi):null,a=e.get(fc,null,{optional:!0}),c=new Hu(r.impl,oC(n),a?.view,i,o,s?.snapshot(null));return r.impl.register(c),c}var Zh=new Fe("",{factory:()=>{let n=Y(fn),e=new Set;return n.onDestroy(()=>e.clear()),{queue:e,isScheduled:!1,scheduler:null,injector:n}}});function J9(n,e,t){let i=n.get(Zh);if(Array.isArray(e))for(let r of e)i.queue.add(r),t?.detachedLeaveAnimationFns?.push(r);else i.queue.add(e),t?.detachedLeaveAnimationFns?.push(e);i.scheduler&&i.scheduler(n)}function cC(n,e){let t=n.get(Zh);if(Array.isArray(e))for(let i of e)t.queue.delete(i);else t.queue.delete(e)}function lC(n,e){let t=n.get(Zh);if(e.detachedLeaveAnimationFns){for(let i of e.detachedLeaveAnimationFns)t.queue.delete(i);e.detachedLeaveAnimationFns=void 0}}function uC(n,e){for(let[t,i]of e)J9(n,i.animateFns)}function j7(n,e,t,i){let r=n?.[yr]?.enter;e!==null&&r&&r.has(t.index)&&uC(i,r)}function W7(n,e,t,i){try{t.get(oc)}catch(o){return i(!1)}let r=n?.[yr];r?.enter?.has(e.index)&&cC(t,r.enter.get(e.index).animateFns);let s=dC(n,e,r);if(s.size===0){let o=!1;if(n){let a=[];r3(n,e,a),o=a.length>0}if(!o)return i(!1)}n&&zs.add(n[vr]),J9(t,()=>fC(n,e,r||void 0,s,i),r||void 0)}function dC(n,e,t){let i=new Map,r=t?.leave;if(r&&r.has(e.index)&&i.set(e.index,r.get(e.index)),n&&r)for(let[s,o]of r){if(i.has(s))continue;let c=n[Ue].data[s].parent;for(;c;){if(c===e){i.set(s,o);break}c=c.parent}}return i}function fC(n,e,t,i,r){let s=[];if(t&&t.leave)for(let[o]of i){if(!t.leave.has(o))continue;let a=t.leave.get(o);for(let c of a.animateFns){let{promise:l}=c();s.push(l)}t.detachedLeaveAnimationFns=void 0}if(n&&r3(n,e,s),s.length>0){let o=t||n?.[yr];if(o){let a=o.running;a&&s.push(a),o.running=Promise.allSettled(s),pC(n,o.running,r)}else Promise.allSettled(s).then(()=>{n&&zs.delete(n[vr]),r(!0)})}else n&&zs.delete(n[vr]),r(!1)}function r3(n,e,t){if(e.type&12){let r=n[e.index];if(wi(r))for(let s=Gt;s<r.length;s++){let o=r[s];o[Ue].type===2&&hC(o,t)}}let i=e.child;for(;i;)r3(n,i,t),i=i.next}function hC(n,e){let t=n[yr];if(t&&t.leave)for(let r of t.leave.values())for(let s of r.animateFns){let{promise:o}=s();e.push(o)}let i=n[Ue].firstChild;for(;i;)r3(n,i,e),i=i.next}function pC(n,e,t){e.then(()=>{n[yr]?.running===e&&(n[yr].running=void 0,zs.delete(n[vr])),t(!0)})}function Va(n,e,t,i,r,s,o,a){if(r!=null){let c,l=!1;wi(r)?c=r:Rs(r)&&(l=!0,r=r[Oi]);let u=Ci(r);n===0&&i!==null?(j7(a,i,s,t),o==null?G9(e,i,u):Vu(e,i,u,o||null,!0)):n===1&&i!==null?(j7(a,i,s,t),Vu(e,i,u,o||null,!0),rC(s,u,a)):n===2?(a?.[yr]?.leave?.has(s.index)&&sC(s,u,a),hc.delete(u),W7(a,s,t,d=>{if(hc.has(u)){hc.delete(u);return}j9(e,u,l,d)})):n===3&&(hc.delete(u),W7(a,s,t,()=>{e.destroyNode(u)})),c!=null&&EC(e,n,t,c,s,i,o)}}function mC(n,e){Q9(n,e),e[Oi]=null,e[Ln]=null}function gC(n,e,t,i,r,s){i[Oi]=r,i[Ln]=e,o3(n,i,t,1,r,s)}function Q9(n,e){e[ki].changeDetectionScheduler?.notify(9),o3(n,e,e[Ht],2,null,null)}function vC(n){let e=n[za];if(!e)return K4(n[Ue],n);for(;e;){let t=null;if(Rs(e))t=e[za];else{let i=e[Gt];i&&(t=i)}if(!t){for(;e&&!e[Ei]&&e!==n;)Rs(e)&&K4(e[Ue],e),e=e[hn];e===null&&(e=n),Rs(e)&&K4(e[Ue],e),t=e&&e[Ei]}e=t}}function Kh(n,e){let t=n[Oo],i=t.indexOf(e);t.splice(i,1)}function s3(n,e){if(Fo(e))return;let t=e[Ht];t.destroyNode&&o3(n,e,t,3,null,null),vC(e)}function K4(n,e){if(Fo(e))return;let t=Oe(null);try{e[We]&=-129,e[We]|=256,e[oi]&&bo(e[oi]),_C(n,e),yC(n,e),e[Ue].type===1&&e[Ht].destroy();let i=e[Ds];if(i!==null&&wi(e[hn])){i!==e[hn]&&Kh(i,e);let r=e[gr];r!==null&&r.detachView(n)}rh(e)}finally{Oe(t)}}function yC(n,e){let t=n.cleanup,i=e[La];if(t!==null)for(let o=0;o<t.length-1;o+=2)if(typeof t[o]=="string"){let a=t[o+3];a>=0?i[a]():i[-a].unsubscribe(),o+=2}else{let a=i[t[o+1]];t[o].call(a)}i!==null&&(e[La]=null);let r=e[jr];if(r!==null){e[jr]=null;for(let o=0;o<r.length;o++){let a=r[o];a()}}let s=e[ws];if(s!==null){e[ws]=null;for(let o of s)o.destroy()}}function _C(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof gc)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];wt(yt.LifecycleHookStart,a,c);try{c.call(a)}finally{wt(yt.LifecycleHookEnd,a,c)}}else{wt(yt.LifecycleHookStart,r,s);try{s.call(r)}finally{wt(yt.LifecycleHookEnd,r,s)}}}}}function eg(n,e,t){return bC(n,e.parent,t)}function bC(n,e,t){let i=e;for(;i!==null&&i.type&168;)e=i,i=e.parent;if(i===null)return t[Oi];if(qr(i)){let{encapsulation:r}=n.data[i.directiveStart+i.componentOffset];if(r===qi.None||r===qi.Emulated)return null}return Fi(i,t)}function tg(n,e,t){return MC(n,e,t)}function xC(n,e,t){return n.type&40?Fi(n,t):null}var MC=xC,$7;function Jh(n,e,t,i){let r=eg(n,i,e),s=e[Ht],o=i.parent||e[Ln],a=tg(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)V7(s,r,t[c],a,!1);else V7(s,r,t,a,!1);$7!==void 0&&$7(s,i,e,t,r)}function pc(n,e){if(e!==null){let t=e.type;if(t&3)return Fi(e,n);if(t&4)return gh(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return pc(n,i);{let r=n[e.index];return wi(r)?gh(-1,r):Ci(r)}}else{if(t&128)return pc(n,e.next);if(t&32)return Xh(e,n)()||Ci(n[e.index]);{let i=ng(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=Wr(n[jn]);return pc(r,i)}else return pc(n,e.next)}}}return null}function ng(n,e){if(e!==null){let i=n[jn][Ln],r=e.projection;return i.projection[r]}return null}function gh(n,e){let t=Gt+n+1;if(t<e.length){let i=e[t],r=i[Ue].firstChild;if(r!==null)return pc(i,r)}return e[Ns]}function Qh(n,e,t,i,r,s,o){for(;t!=null;){let a=i[mr];if(t.type===128){t=t.next;continue}let c=i[t.index],l=t.type;if(o&&e===0&&(c&&Ga(Ci(c),i),t.flags|=2),!e3(t))if(l&8)Qh(n,e,t.child,i,r,s,!1),Va(e,n,a,r,c,t,s,i);else if(l&32){let u=Xh(t,i),d;for(;d=u();)Va(e,n,a,r,d,t,s,i);Va(e,n,a,r,c,t,s,i)}else l&16?ig(n,e,i,t,r,s):Va(e,n,a,r,c,t,s,i);t=o?t.projectionNext:t.next}}function o3(n,e,t,i,r,s){Qh(t,i,n.firstChild,e,r,s,!1)}function SC(n,e,t){let i=e[Ht],r=eg(n,t,e),s=t.parent||e[Ln],o=tg(s,t,e);ig(i,0,e,t,r,o)}function ig(n,e,t,i,r,s){let o=t[jn],c=o[Ln].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];Va(e,n,t[mr],r,u,i,s,t)}else{let l=c,u=o[hn];E9(i)&&(l.flags|=128),Qh(n,e,l,u,r,s,!0)}}function EC(n,e,t,i,r,s,o){let a=i[Ns],c=Ci(i);a!==c&&Va(e,n,t,s,a,r,o);for(let l=Gt;l<i.length;l++){let u=i[l];o3(u[Ue],u,n,e,s,a)}}function wC(n,e,t,i,r){if(e)r?n.addClass(t,i):n.removeClass(t,i);else{let s=i.indexOf("-")===-1?void 0:Zr.DashCase;r==null?n.removeStyle(t,i,s):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),s|=Zr.Important),n.setStyle(t,i,r,s))}}function e5(n,e,t,i,r,s,o,a,c,l,u){let d=pn+i,f=d+r,h=CC(d,f),p=typeof l=="function"?l():l;return h[Ue]={type:n,blueprint:h,template:t,queries:null,viewQuery:a,declTNode:e,data:h.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:p,incompleteFirstPass:!1,ssrId:u}}function CC(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:ai);return t}function TC(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=e5(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function t5(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[Oi]=r,d[We]=i|4|128|8|64|1024,(l!==null||n&&n[We]&2048)&&(d[We]|=2048),I4(d),d[hn]=d[As]=n,d[tn]=t,d[ki]=o||n&&n[ki],d[Ht]=a||n&&n[Ht],d[mr]=c||n&&n[mr]||null,d[Ln]=s,d[vr]=gw(),d[Po]=u,d[S4]=l,d[jn]=e.type==2?n[jn]:d,d}function IC(n,e,t){let i=Fi(e,n),r=TC(t),s=n[ki].rendererFactory,o=n5(n,t5(n,r,null,rg(t),i,e,null,s.createRenderer(i,t),null,null,null));return n[e.index]=o}function rg(n){let e=16;return n.signals?e=4096:n.onPush&&(e=64),e}function sg(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function n5(n,e){return n[za]?n[M4][Ei]=e:n[za]=e,n[M4]=e,e}function ae(n=1){og(zn(),ct(),br()+n,!1)}function og(n,e,t,i){if(!i)if((e[We]&3)===3){let s=n.preOrderCheckHooks;s!==null&&Ru(e,s,t)}else{let s=n.preOrderHooks;s!==null&&Pu(e,s,0,t)}Ps(t)}var a3=(function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n})(a3||{});function vh(n,e,t,i){let r=Oe(null);try{let[s,o,a]=n.inputs[t],c=null;(o&a3.SignalBased)!==0&&(c=e[s][Rn]),c!==null&&c.transformFn!==void 0?i=c.transformFn(i):a!==null&&(i=a.call(e,i)),n.setInput!==null?n.setInput(e,c,i,t,s):u9(e,c,s,i)}finally{Oe(r)}}function ag(n,e,t,i,r){let s=br(),o=i&2;try{Ps(-1),o&&e.length>pn&&og(n,e,pn,!1);let a=o?yt.TemplateUpdateStart:yt.TemplateCreateStart;wt(a,r,t),t(i,r)}finally{Ps(s);let a=o?yt.TemplateUpdateEnd:yt.TemplateCreateEnd;wt(a,r,t)}}function cg(n,e,t){zC(n,e,t),(t.flags&64)===64&&OC(n,e,t)}function i5(n,e,t=Fi){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function AC(n,e,t,i){let s=i.get(R9,N9)||t===qi.ShadowDom||t===qi.ExperimentalIsolatedShadowDom,o=n.selectRootElement(e,s);return DC(o),o}function DC(n){NC(n)}var NC=()=>null;function RC(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function PC(n,e,t,i,r,s){let o=e[Ue];if(r5(n,o,e,t,i)){qr(n)&&LC(e,n.index);return}n.type&3&&(t=RC(t)),lg(n,e,t,i,r,s)}function lg(n,e,t,i,r,s){if(n.type&3){let o=Fi(n,e);i=s!=null?s(i,n.value||"",t):i,r.setProperty(o,t,i)}else n.type&12}function LC(n,e){let t=Ui(e,n);t[We]&16||(t[We]|=64)}function zC(n,e,t){let i=t.directiveStart,r=t.directiveEnd;qr(t)&&IC(e,t,n.data[i+t.componentOffset]),n.firstCreatePass||v9(t,e);let s=t.initialInputs;for(let o=i;o<r;o++){let a=n.data[o],c=Uu(e,n,o,t);if(Ga(c,e),s!==null&&VC(e,o-i,c,a,t,s),ko(a)){let l=Ui(t.index,e);l[tn]=Uu(e,n,o,t)}}}function OC(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=p7();try{Ps(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];gu(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&kC(c,l)}}finally{Ps(-1),gu(o)}}function kC(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function FC(n,e){let t=n.directiveRegistry,i=null;if(t)for(let r=0;r<t.length;r++){let s=t[r];X9(e,s.selectors,!1)&&(i??=[],ko(s)?i.unshift(s):i.push(s))}return i}function UC(n,e,t,i,r,s){let o=Fi(n,e);BC(e[Ht],o,s,n.value,t,i,r)}function BC(n,e,t,i,r,s,o){if(s==null)o?.(s,i||"",r),n.removeAttribute(e,r,t);else{let a=o==null?No(s):o(s,i||"",r);n.setAttribute(e,r,a,t)}}function VC(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;a+=2){let c=o[a],l=o[a+1];vh(i,t,c,l)}}function ug(n,e,t,i,r){let s=pn+t,o=e[Ue],a=r(o,e,n,i,t);e[s]=a,ka(n,!0);let c=n.type===2;return c?(W9(e[Ht],a,n),(o7()===0||uu(n))&&Ga(a,e),a7()):Ga(a,e),xu()&&(!c||!e3(n))&&Jh(o,e,a,n),n}function dg(n){let e=n;return k4()?F4():(e=e.parent,ka(e,!1)),e}function HC(n,e){let t=n[mr];if(!t)return;let i;try{i=t.get(xr,null)}catch(r){i=null}i?.(e)}function r5(n,e,t,i,r){let s=n.inputs?.[i],o=n.hostDirectiveInputs?.[i],a=!1;if(o)for(let c=0;c<o.length;c+=2){let l=o[c],u=o[c+1],d=e.data[l];vh(d,t[l],u,r),a=!0}if(s)for(let c of s){let l=t[c],u=e.data[c];vh(u,l,i,r),a=!0}return a}function GC(n,e){let t=Ui(e,n),i=t[Ue];jC(i,t);let r=t[Oi];r!==null&&t[Po]===null&&(t[Po]=P9(r,t[mr])),wt(yt.ComponentStart);try{s5(i,t,t[tn])}finally{wt(yt.ComponentEnd,t[tn])}}function jC(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function s5(n,e,t){yu(e);try{let i=n.viewQuery;i!==null&&oh(1,i,t);let r=n.template;r!==null&&ag(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[gr]?.finishViewCreation(n),n.staticContentQueries&&L9(n,e),n.staticViewQueries&&oh(2,n.viewQuery,t);let s=n.components;s!==null&&WC(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[We]&=-5,_u()}}function WC(n,e){for(let t=0;t<e.length;t++)GC(n,e[t])}function Ic(n,e,t,i){let r=Oe(null);try{let s=e.tView,a=n[We]&4096?4096:16,c=t5(n,s,t,a,null,e,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=n[e.index];c[Ds]=l;let u=n[gr];return u!==null&&(c[gr]=u.createEmbeddedView(s)),s5(s,c,t),c}finally{Oe(r)}}function ja(n,e){return!e||e.firstChild===null||E9(n)}function vc(n,e,t,i,r=!1){for(;t!==null;){if(t.type===128){t=r?t.projectionNext:t.next;continue}let s=e[t.index];s!==null&&i.push(Ci(s)),wi(s)&&fg(s,i);let o=t.type;if(o&8)vc(n,e,t.child,i);else if(o&32){let a=Xh(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=ng(e,t);if(Array.isArray(a))i.push(...a);else{let c=Wr(e[jn]);vc(c[Ue],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function fg(n,e){for(let t=Gt;t<n.length;t++){let i=n[t],r=i[Ue].firstChild;r!==null&&vc(i[Ue],i,r,e)}n[Ns]!==n[Oi]&&e.push(n[Ns])}function hg(n){if(n[zo]!==null){for(let e of n[zo])e.impl.addSequence(e);n[zo].length=0}}var pg=[];function $C(n){return n[oi]??qC(n)}function qC(n){let e=pg.pop()??Object.create(YC);return e.lView=n,e}function XC(n){n.lView[oi]!==n&&(n.lView=null,pg.push(n))}var YC=at(de({},vo),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{Uo(n.lView)},consumerOnSignalRead(){this.lView[oi]=this}});function ZC(n){let e=n[oi]??Object.create(KC);return e.lView=n,e}var KC=at(de({},vo),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{let e=Wr(n.lView);for(;e&&!mg(e[Ue]);)e=Wr(e);e&&A4(e)},consumerOnSignalRead(){this.lView[oi]=this}});function mg(n){return n.type!==2}function gg(n){if(n[ws]===null)return;let e=!0;for(;e;){let t=!1;for(let i of n[ws])i.dirty&&(t=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));e=t&&!!(n[We]&8192)}}var JC=100;function vg(n,e=0){let i=n[ki].rendererFactory,r=!1;r||i.begin?.();try{QC(n,e)}finally{r||i.end?.()}}function QC(n,e){let t=U4();try{ec(!0),yh(n,e);let i=0;for(;uc(n);){if(i===JC)throw new oe(103,!1);i++,yh(n,1)}}finally{ec(t)}}function eT(n,e,t,i){if(Fo(e))return;let r=e[We],s=!1,o=!1;yu(e);let a=!0,c=null,l=null;s||(mg(n)?(l=$C(e),c=_o(l)):b2()===null?(a=!1,l=ZC(e),c=_o(l)):e[oi]&&(bo(e[oi]),e[oi]=null));try{I4(e),d7(n.bindingStartIndex),t!==null&&ag(n,e,t,2,i);let u=(r&3)===3;if(!s)if(u){let h=n.preOrderCheckHooks;h!==null&&Ru(e,h,null)}else{let h=n.preOrderHooks;h!==null&&Pu(e,h,0,null),Y4(e,0)}if(o||tT(e),gg(e),yg(e,0),n.contentQueries!==null&&L9(n,e),!s)if(u){let h=n.contentCheckHooks;h!==null&&Ru(e,h)}else{let h=n.contentHooks;h!==null&&Pu(e,h,1),Y4(e,1)}iT(n,e);let d=n.components;d!==null&&bg(e,d,0);let f=n.viewQuery;if(f!==null&&oh(2,f,i),!s)if(u){let h=n.viewCheckHooks;h!==null&&Ru(e,h)}else{let h=n.viewHooks;h!==null&&Pu(e,h,2),Y4(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[lu]){for(let h of e[lu])h();e[lu]=null}s||(hg(e),e[We]&=-73)}catch(u){throw s||Uo(e),u}finally{l!==null&&(_a(l,c),a&&XC(l)),_u()}}function yg(n,e){for(let t=C9(n);t!==null;t=T9(t))for(let i=Gt;i<t.length;i++){let r=t[i];_g(r,e)}}function tT(n){for(let e=C9(n);e!==null;e=T9(e)){if(!(e[We]&2))continue;let t=e[Oo];for(let i=0;i<t.length;i++){let r=t[i];A4(r)}}}function nT(n,e,t){wt(yt.ComponentStart);let i=Ui(e,n);try{_g(i,t)}finally{wt(yt.ComponentEnd,i[tn])}}function _g(n,e){fu(n)&&yh(n,e)}function yh(n,e){let i=n[Ue],r=n[We],s=n[oi],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&q1(s)),o||=!1,s&&(s.dirty=!1),n[We]&=-9217,o)eT(i,n,i.template,n[tn]);else if(r&8192){let a=Oe(null);try{gg(n),yg(n,1);let c=i.components;c!==null&&bg(n,c,1),hg(n)}finally{Oe(a)}}}function bg(n,e,t){for(let i=0;i<e.length;i++)nT(n,e[i],t)}function iT(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)Ps(~r);else{let s=r,o=t[++i],a=t[++i];h7(o,s);let c=e[s];wt(yt.HostBindingsUpdateStart,c);try{a(2,c)}finally{wt(yt.HostBindingsUpdateEnd,c)}}}}finally{Ps(-1)}}function o5(n,e){let t=U4()?64:1088;for(n[ki].changeDetectionScheduler?.notify(e);n;){n[We]|=t;let i=Wr(n);if(Oa(n)&&!i)return n;n=i}return null}function xg(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function Mg(n,e){let t=Gt+e;if(t<n.length)return n[t]}function Ac(n,e,t,i=!0){let r=e[Ue];if(rT(r,e,n,t),i){let o=gh(t,n),a=e[Ht],c=a.parentNode(n[Ns]);c!==null&&gC(r,n[Ln],a,e,c,o)}let s=e[Po];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function Sg(n,e){let t=yc(n,e);return t!==void 0&&s3(t[Ue],t),t}function yc(n,e){if(n.length<=Gt)return;let t=Gt+e,i=n[t];if(i){let r=i[Ds];r!==null&&r!==n&&Kh(r,i),e>0&&(n[t-1][Ei]=i[Ei]);let s=sc(n,Gt+e);mC(i[Ue],i);let o=s[gr];o!==null&&o.detachView(s[Ue]),i[hn]=null,i[Ei]=null,i[We]&=-129}return i}function rT(n,e,t,i){let r=Gt+i,s=t.length;i>0&&(t[r-1][Ei]=e),i<s-Gt?(e[Ei]=t[r],y4(t,Gt+i,e)):(t.push(e),e[Ei]=null),e[hn]=t;let o=e[Ds];o!==null&&t!==o&&Eg(o,e);let a=e[gr];a!==null&&a.insertView(n),hu(e),e[We]|=128}function Eg(n,e){let t=n[Oo],i=e[hn];if(Rs(i))n[We]|=2;else{let r=i[hn][jn];e[jn]!==r&&(n[We]|=2)}t===null?n[Oo]=[e]:t.push(e)}var Os=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let e=this._lView,t=e[Ue];return vc(t,e,t.firstChild,[])}constructor(e,t){this._lView=e,this._cdRefInjectingView=t}get context(){return this._lView[tn]}set context(e){this._lView[tn]=e}get destroyed(){return Fo(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[hn];if(wi(e)){let t=e[lc],i=t?t.indexOf(this):-1;i>-1&&(yc(e,i),sc(t,i))}this._attachedToViewContainer=!1}s3(this._lView[Ue],this._lView)}onDestroy(e){pu(this._lView,e)}markForCheck(){o5(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[We]&=-129}reattach(){hu(this._lView),this._lView[We]|=128}detectChanges(){this._lView[We]|=1024,vg(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new oe(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=Oa(this._lView),t=this._lView[Ds];t!==null&&!e&&Kh(t,this._lView),Q9(this._lView[Ue],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new oe(902,!1);this._appRef=e;let t=Oa(this._lView),i=this._lView[Ds];i!==null&&!t&&Eg(i,this._lView),hu(this._lView)}};var _c=(()=>{class n{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=sT;constructor(t,i,r){this._declarationLView=t,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(t,i){return this.createEmbeddedViewImpl(t,i)}createEmbeddedViewImpl(t,i,r){let s=Ic(this._declarationLView,this._declarationTContainer,t,{embeddedViewInjector:i,dehydratedView:r});return new Os(s)}}return n})();function sT(){return a5(Ti(),ct())}function a5(n,e){return n.type&4?new _c(e,n,qa(n,e)):null}function Dc(n,e,t,i,r){let s=n.data[e];if(s===null)s=oT(n,e,t,i,r),f7()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=l7();s.injectorIndex=o===null?-1:o.injectorIndex}return ka(s,!0),s}function oT(n,e,t,i,r){let s=O4(),o=k4(),a=o?s:s&&s.parent,c=n.data[e]=cT(n,a,t,e,i,r);return aT(n,c,s,o),c}function aT(n,e,t,i){n.firstChild===null&&(n.firstChild=e),t!==null&&(i?t.child==null&&e.parent!==null&&(t.child=e):t.next===null&&(t.next=e,e.prev=t))}function cT(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return P4()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,namespace:G4(),attrs:s,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function lT(n){let e=n[E4]??[],i=n[hn][Ht],r=[];for(let s of e)s.data[D9]!==void 0?r.push(s):uT(s,i);n[E4]=r}function uT(n,e){let t=0,i=n.firstChild;if(i){let r=n.data[A9];for(;t<r;){let s=i.nextSibling;j9(e,i,!1),i=s,t++}}}var dT=()=>null,fT=()=>null;function Gu(n,e){return dT(n,e)}function wg(n,e,t){return fT(n,e,t)}var Cg=class{},Kr=class{};var Tg=(()=>{class n{static \u0275prov=et({token:n,providedIn:"root",factory:()=>null})}return n})();function Ig(n){return n.debugInfo?.className||n.type.name||null}var zu={},ju=class{injector;parentInjector;constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){let r=this.injector.get(e,zu,i);return r!==zu||t===zu?r:this.parentInjector.get(e,t,i)}};function Sr(n,e,t){if(t===ai)return!1;let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function hT(n,e,t,i){let r=Sr(n,e,t);return Sr(n,e+1,i)||r}function pT(n,e,t){return function i(r){let s=i.__ngNativeEl__;s!==void 0&&yw(r,s);let o=qr(n)?Ui(n.index,e):e;o5(o,5);let a=e[tn],c=q7(e,a,t,r),l=i.__ngNextListenerFn__;for(;l;)c=q7(e,a,l,r)&&c,l=l.__ngNextListenerFn__;return c}}function q7(n,e,t,i){let r=Oe(null);try{return wt(yt.OutputStart,e,t),t(i)!==!1}catch(s){return HC(n,s),!1}finally{wt(yt.OutputEnd,e,t),Oe(r)}}function mT(n,e,t,i,r,s,o,a){let c=uu(n),l=!1,u=null;if(!i&&c&&(u=vT(e,t,s,n.index)),u!==null){let d=u.__ngLastListenerFn__||u;d.__ngNextListenerFn__=o,u.__ngLastListenerFn__=o,l=!0}else{let d=Fi(n,t),f=i?i(d):d;bw(t,f,s,a),i||(a.__ngNativeEl__=d);let h=r.listen(f,s,a);if(!gT(s)){let p=i?y=>i(Ci(y[n.index])):n.index;yT(p,e,t,s,a,h,!1)}}return l}function gT(n){return n.startsWith("animation")||n.startsWith("transition")}function vT(n,e,t,i){let r=n.cleanup;if(r!=null)for(let s=0;s<r.length-1;s+=2){let o=r[s];if(o===t&&r[s+1]===i){let a=e[La],c=r[s+2];return a&&a.length>c?a[c]:null}typeof o=="string"&&(s+=2)}return null}function yT(n,e,t,i,r,s,o){let a=e.firstCreatePass?N4(e):null,c=D4(t),l=c.length;c.push(r,s),a&&a.push(i,n,l,(l+1)*(o?-1:1))}var _h=Symbol("BINDING");var Go=new Fe("");function Wu(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=tu(r,a);else if(s==2){let c=a,l=e[++o];i=tu(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}function Ag(n,e=0){let t=ct();if(t===null)return Xe(n,e);let i=Ti();return x9(i,t,si(n),e)}function _T(n,e,t,i,r){let s=i===null?null:{"":-1},o=r(n,t);if(o!==null){let a=o,c=null,l=null;for(let u of o)if(u.resolveHostDirectives!==null){[a,c,l]=u.resolveHostDirectives(o);break}MT(n,e,t,a,s,c,l)}s!==null&&i!==null&&bT(t,i,s)}function bT(n,e,t){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new oe(-301,!1);i.push(e[r],s)}}function xT(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function MT(n,e,t,i,r,s,o){let a=i.length,c=null;for(let f=0;f<a;f++){let h=i[f];c===null&&ko(h)&&(c=h,xT(n,t,f)),aw(v9(t,e),n,h.type)}IT(t,n.data.length,a),c?.viewProvidersResolver&&c.viewProvidersResolver(c);for(let f=0;f<a;f++){let h=i[f];h.providersResolver&&h.providersResolver(h)}let l=!1,u=!1,d=sg(n,e,a,null);a>0&&(t.directiveToIndex=new Map);for(let f=0;f<a;f++){let h=i[f];if(t.mergedAttrs=Qu(t.mergedAttrs,h.hostAttrs),ET(n,t,e,d,h),TT(d,h,r),o!==null&&o.has(h)){let[y,m]=o.get(h);t.directiveToIndex.set(h.type,[d,y+t.directiveStart,m+t.directiveStart])}else(s===null||!s.has(h))&&t.directiveToIndex.set(h.type,d);h.contentQueries!==null&&(t.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(t.flags|=64);let p=h.type.prototype;!l&&(p.ngOnChanges||p.ngOnInit||p.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),l=!0),!u&&(p.ngOnChanges||p.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),u=!0),d++}ST(n,t,s)}function ST(n,e,t){for(let i=e.directiveStart;i<e.directiveEnd;i++){let r=n.data[i];if(t===null||!t.has(r))X7(0,e,r,i),X7(1,e,r,i),Z7(e,i,!1);else{let s=t.get(r);Y7(0,e,s,i),Y7(1,e,s,i),Z7(e,i,!0)}}}function X7(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let s in r)if(r.hasOwnProperty(s)){let o;n===0?o=e.inputs??={}:o=e.outputs??={},o[s]??=[],o[s].push(i),Dg(e,s)}}function Y7(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let s in r)if(r.hasOwnProperty(s)){let o=r[s],a;n===0?a=e.hostDirectiveInputs??={}:a=e.hostDirectiveOutputs??={},a[o]??=[],a[o].push(i,s),Dg(e,o)}}function Dg(n,e){e==="class"?n.flags|=8:e==="style"&&(n.flags|=16)}function Z7(n,e,t){let{attrs:i,inputs:r,hostDirectiveInputs:s}=n;if(i===null||!t&&r===null||t&&s===null||qh(n)){n.initialInputs??=[],n.initialInputs.push(null);return}let o=null,a=0;for(;a<i.length;){let c=i[a];if(c===0){a+=4;continue}else if(c===5){a+=2;continue}else if(typeof c=="number")break;if(!t&&r.hasOwnProperty(c)){let l=r[c];for(let u of l)if(u===e){o??=[],o.push(c,i[a+1]);break}}else if(t&&s.hasOwnProperty(c)){let l=s[c];for(let u=0;u<l.length;u+=2)if(l[u]===e){o??=[],o.push(l[u+1],i[a+1]);break}}a+=2}n.initialInputs??=[],n.initialInputs.push(o)}function ET(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=Aa(r.type,!0)),o=new gc(s,ko(r),Ag,null);n.blueprint[i]=o,t[i]=o,wT(n,e,i,sg(n,t,r.hostVars,ai),r)}function wT(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;CT(o)!=a&&o.push(a),o.push(t,i,s)}}function CT(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function TT(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;ko(e)&&(t[""]=n)}}function IT(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function Ng(n,e,t,i,r,s,o,a){let c=e[Ue],l=c.consts,u=_r(l,o),d=Dc(c,n,t,i,u);return s&&_T(c,e,d,_r(l,a),r),d.mergedAttrs=Qu(d.mergedAttrs,d.attrs),d.attrs!==null&&Wu(d,d.attrs,!1),d.mergedAttrs!==null&&Wu(d,d.mergedAttrs,!0),c.queries!==null&&c.queries.elementStart(c,d),d}function Rg(n,e){ZE(n,e),w4(e)&&n.queries.elementEnd(e)}function AT(n,e,t,i,r,s){let o=e.consts,a=_r(o,r),c=Dc(e,n,t,i,a);if(c.mergedAttrs=Qu(c.mergedAttrs,c.attrs),s!=null){let l=_r(o,s);c.localNames=[];for(let u=0;u<l.length;u+=2)c.localNames.push(l[u],-1)}return c.attrs!==null&&Wu(c,c.attrs,!1),c.mergedAttrs!==null&&Wu(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}var Pg=typeof ShadowRoot<"u",DT=typeof Document<"u";function NT(n){return Object.keys(n).map(e=>{let[t,i,r]=n[e],s={propName:t,templateName:e,isSignal:(i&a3.SignalBased)!==0};return r&&(s.transform=r),s})}function RT(n){return Object.keys(n).map(e=>({propName:n[e],templateName:e}))}function PT(n,e,t){let i=e instanceof fn?e:e?.injector;return i&&n.getStandaloneInjector!==null&&(i=n.getStandaloneInjector(i)||i),i?new ju(t,i):t}function LT(n){let e=n.get(Kr,null);if(e===null)throw new oe(407,!1);let t=n.get(Tg,null),i=n.get($r,null),r=n.get(ks,null,{optional:!0});return{rendererFactory:e,sanitizer:t,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function zT(n,e){let t=Lg(n);return H9(e,t,t==="svg"?C4:t==="math"?e7:null)}function OT(n){if(n?.toLowerCase()==="script")throw new oe(905,!1)}function Lg(n){return(n.selectors[0][0]||"div").toLowerCase()}var bc=class{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=NT(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=RT(this.componentDef.outputs),this.cachedOutputs}constructor(e,t){this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=tC(e.selectors),this.ngContentSelectors=e.ngContentSelectors??[],this.isBoundToModule=!!t}create(e,t,i,r,s,o){wt(yt.DynamicComponentStart);let a=Oe(null);try{let c=this.componentDef,l=PT(c,r||this.ngModule,e),u=LT(l),d=u.tracingService;return d&&d.componentCreate?d.componentCreate(Ig(c),()=>this.createComponentRef(u,l,t,i,s,o)):this.createComponentRef(u,l,t,i,s,o)}finally{Oe(a)}}createComponentRef(e,t,i,r,s,o){let a=this.componentDef,c=kT(r,a,o,s),l=e.rendererFactory.createRenderer(null,a),u=r?AC(l,r,a.encapsulation,t):zT(a,l);OT(u?.tagName);let d=t.get(Go,null),f=FT(u,()=>t.get(Vt,null)??Bh());d&&d.addHost(f);let h=o?.some(K7)||s?.some(m=>typeof m!="function"&&m.bindings.some(K7)),p=t5(null,c,null,512|rg(a),null,null,e,l,t,null,P9(u,t,!0));d&&Pg&&f instanceof ShadowRoot&&pu(p,()=>{d.removeHost(f)}),p[pn]=u,yu(p);let y=null;try{let m=Ng(pn,p,2,"#host",()=>c.directiveRegistry,!0,0);W9(l,u,m),Ga(u,p),cg(c,p,m),z9(c,m,p),Rg(c,m),i!==void 0&&BT(m,this.ngContentSelectors,i),y=Ui(m.index,p),p[tn]=y[tn],s5(c,p,null)}catch(m){throw y!==null&&rh(y),rh(p),m}finally{wt(yt.DynamicComponentEnd),_u()}return new $u(this.componentType,p,!!h)}};function kT(n,e,t,i){let r=n?["ng-version","22.0.5"]:nC(e.selectors[0]),s=null,o=null,a=0;if(t)for(let u of t)a+=u[_h].requiredVars,u.create&&(u.targetIdx=0,(s??=[]).push(u)),u.update&&(u.targetIdx=0,(o??=[]).push(u));if(i)for(let u=0;u<i.length;u++){let d=i[u];if(typeof d!="function")for(let f of d.bindings){a+=f[_h].requiredVars;let h=u+1;f.create&&(f.targetIdx=h,(s??=[]).push(f)),f.update&&(f.targetIdx=h,(o??=[]).push(f))}}let c=[e];if(i)for(let u of i){let d=typeof u=="function"?u:u.type,f=m4(d);c.push(f)}return e5(0,null,UT(s,o),1,a,c,null,null,null,[r],null)}function FT(n,e){let t=n.getRootNode?.();return DT&&t instanceof Document?t.head:t&&Pg&&t instanceof ShadowRoot?t:e().head}function UT(n,e){return!n&&!e?null:t=>{if(t&1&&n)for(let i of n)i.create();if(t&2&&e)for(let i of e)i.update()}}function K7(n){let e=n[_h].kind;return e==="input"||e==="twoWay"}var $u=class extends Cg{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(e,t,i){super(),this._rootLView=t,this._hasInputBindings=i,this._tNode=du(t[Ue],pn),this.location=qa(this._tNode,t),this.instance=Ui(this._tNode.index,t)[tn],this.hostView=this.changeDetectorRef=new Os(t,void 0),this.componentType=e}setInput(e,t){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let r=this._rootLView,s=r5(i,r[Ue],r,e,t);this.previousInputValues.set(e,t);let o=Ui(i.index,r);o5(o,1)}get injector(){return new Ls(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function BT(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null&&s.length?Array.from(s):null)}}var Ya=(()=>{class n{static __NG_ELEMENT_ID__=VT}return n})();function VT(){let n=Ti();return zg(n,ct())}var bh=class n extends Ya{_lContainer;_hostTNode;_hostLView;constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return qa(this._hostTNode,this._hostLView)}get injector(){return new Ls(this._hostTNode,this._hostLView)}get parentInjector(){let e=kh(this._hostTNode,this._hostLView);if(p9(e)){let t=Fu(e,this._hostLView),i=ku(e),r=t[Ue].data[i+8];return new Ls(r,t)}else return new Ls(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=J7(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-Gt}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=Gu(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,ja(this._hostTNode,o)),a}createComponent(e,t,i,r,s,o,a){let c,l=t||{};c=l.index,i=l.injector,r=l.projectableNodes,s=l.environmentInjector||l.ngModuleRef,o=l.directives,a=l.bindings;let u=new bc(Do(e)),d=i||this.parentInjector;if(!s&&u.ngModule==null){let g=this.parentInjector.get(fn,null);g&&(s=g)}let f=Do(u.componentType??{}),h=Gu(this._lContainer,f?.id??null),p=h?.firstChild??null,y=u.create(d,r,p,s,o,a);return this.insertImpl(y.hostView,c,ja(this._hostTNode,h)),y}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(n7(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[hn],l=new n(c,c[Ln],c[hn]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return Ac(o,r,s,i),e.attachToViewContainerRef(),y4(J4(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=J7(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=yc(this._lContainer,t);i&&(sc(J4(this._lContainer),t),s3(i[Ue],i))}detach(e){let t=this._adjustIndex(e,-1),i=yc(this._lContainer,t);return i&&sc(J4(this._lContainer),t)!=null?new Os(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function J7(n){return n[lc]}function J4(n){return n[lc]||(n[lc]=[])}function zg(n,e){let t,i=e[n.index];return wi(i)?t=i:(t=xg(i,e,null,n),e[n.index]=t,n5(e,t)),GT(t,e,n,i),new bh(t,n,e)}function HT(n,e){let t=n[Ht],i=t.createComment(""),r=Fi(e,n),s=t.parentNode(r);return Vu(t,s,i,t.nextSibling(r),!1),i}var GT=$T,jT=()=>!1;function WT(n,e,t){return jT(n,e,t)}function $T(n,e,t,i){if(n[Ns])return;let r;t.type&8?r=Ci(i):r=HT(e,t),n[Ns]=r}var xh=class n{queryList;matches=null;constructor(e){this.queryList=e}clone(){return new n(this.queryList)}setDirty(){this.queryList.setDirty()}},Mh=class n{queries;constructor(e=[]){this.queries=e}createEmbeddedView(e){let t=e.queries;if(t!==null){let i=e.contentQueries!==null?e.contentQueries[0]:t.length,r=[];for(let s=0;s<i;s++){let o=t.getByIndex(s),a=this.queries[o.indexInDeclarationView];r.push(a.clone())}return new n(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)c5(e,t).matches!==null&&this.queries[t].setDirty()}},Sh=class{flags;read;predicate;constructor(e,t,i=null){this.flags=t,this.read=i,typeof e=="string"?this.predicate=eI(e):this.predicate=e}},Eh=class n{queries;constructor(e=[]){this.queries=e}elementStart(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let i=0;i<this.length;i++){let r=t!==null?t.length:0,s=this.getByIndex(i).embeddedTView(e,r);s&&(s.indexInDeclarationView=i,t!==null?t.push(s):t=[s])}return t!==null?new n(t):null}template(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},wh=class n{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(e,t=-1){this.metadata=e,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new n(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,i=e.parent;for(;i!==null&&i.type&8&&i.index!==t;)i=i.parent;return t===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(e,t){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let s=i[r];this.matchTNodeWithReadOption(e,t,qT(t,s)),this.matchTNodeWithReadOption(e,t,Lu(t,e,s,!1,!1))}else i===_c?t.type&4&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,Lu(t,e,i,!1,!1))}matchTNodeWithReadOption(e,t,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===Ec||r===Ya||r===_c&&t.type&4)this.addMatch(t.index,-2);else{let s=Lu(t,e,r,!1,!1);s!==null&&this.addMatch(t.index,s)}else this.addMatch(t.index,i)}}addMatch(e,t){this.matches===null?this.matches=[e,t]:this.matches.push(e,t)}};function qT(n,e){let t=n.localNames;if(t!==null){for(let i=0;i<t.length;i+=2)if(t[i]===e)return t[i+1]}return null}function XT(n,e){return n.type&11?qa(n,e):n.type&4?a5(n,e):null}function YT(n,e,t,i){return t===-1?XT(e,n):t===-2?ZT(n,e,i):Uu(n,n[Ue],t,e)}function ZT(n,e,t){if(t===Ec)return qa(e,n);if(t===_c)return a5(e,n);if(t===Ya)return zg(e,n)}function Og(n,e,t,i){let r=e[gr].queries[i];if(r.matches===null){let s=n.data,o=t.matches,a=[];for(let c=0;o!==null&&c<o.length;c+=2){let l=o[c];if(l<0)a.push(null);else{let u=s[l];a.push(YT(e,u,o[c+1],t.metadata.read))}}r.matches=a}return r.matches}function Ch(n,e,t,i){let r=n.queries.getByIndex(t),s=r.matches;if(s!==null){let o=Og(n,e,r,t);for(let a=0;a<s.length;a+=2){let c=s[a];if(c>0)i.push(o[a/2]);else{let l=s[a+1],u=e[-c];for(let d=Gt;d<u.length;d++){let f=u[d];f[Ds]===f[hn]&&Ch(f[Ue],f,l,i)}if(u[Oo]!==null){let d=u[Oo];for(let f=0;f<d.length;f++){let h=d[f];Ch(h[Ue],h,l,i)}}}}}return i}function KT(n,e){return n[gr].queries[e].queryList}function JT(n,e,t){let i=new Bu((t&4)===4);return s7(n,e,i,i.destroy),(e[gr]??=new Mh).queries.push(new xh(i))-1}function QT(n,e,t){let i=zn();return i.firstCreatePass&&(tI(i,new Sh(n,e,t),-1),(e&2)===2&&(i.staticViewQueries=!0)),JT(i,ct(),e)}function eI(n){return n.split(",").map(e=>e.trim())}function tI(n,e,t){n.queries===null&&(n.queries=new Eh),n.queries.track(new wh(e,t))}function c5(n,e){return n.queries.getByIndex(e)}function nI(n,e){let t=n[Ue],i=c5(t,e);return i.crossesNgTemplate?Ch(t,n,e,[]):Og(t,n,i,e)}function Nc(n){return!!n&&typeof n.then=="function"}function kg(n){return!!n&&typeof n.subscribe=="function"}var Wa=class{},c3=class{};var qu=class extends Wa{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];constructor(e,t,i,r=!0){super(),this.ngModuleType=e,this._parent=t;let s=Um(e);this._bootstrapComponents=jw(s.bootstrap),this._r3Injector=j4(e,t,[{provide:Wa,useValue:this},...i],ic(e),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},Xu=class extends c3{moduleType;constructor(e){super(),this.moduleType=e}create(e){return new qu(this.moduleType,e,[])}};var xc=class extends Wa{injector;instance=null;constructor(e){super();let t=new Io([...e.providers,{provide:Wa,useValue:this}],e.parent||cc(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function Rc(n,e,t=null){return new xc({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var iI=(()=>{class n{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let i=b4(!1,t.type),r=i.length>0?Rc([i],this._injector,""):null;this.cachedInjectors.set(t,r)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=et({token:n,providedIn:"environment",factory:()=>new n(Xe(fn))})}return n})();function kt(n){return Ju(()=>{let e=Fg(n),t=at(de({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection!==Fh.Eager,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:e.standalone?r=>r.get(iI).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||qi.Emulated,styles:n.styles||Kn,_:null,schemas:n.schemas||null,tView:null,id:""});e.standalone&&Zi("NgStandalone"),Ug(t);let i=n.dependencies;return t.directiveDefs=Q7(i,rI),t.pipeDefs=Q7(i,Bm),t.id=aI(t),t})}function rI(n){return Do(n)||m4(n)}function Pc(n){return Ju(()=>({type:n.type,bootstrap:n.bootstrap||Kn,declarations:n.declarations||Kn,imports:n.imports||Kn,exports:n.exports||Kn,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function sI(n,e){if(n==null)return Ro;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,o,a,c;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s,c=r[3]||null):(s=r,o=r,a=a3.None,c=null),t[s]=[i,a,c],e[s]=o}return t}function oI(n){if(n==null)return Ro;let e={};for(let t in n)n.hasOwnProperty(t)&&(e[n[t]]=t);return e}function Lc(n){return Ju(()=>{let e=Fg(n);return Ug(e),e})}function Fg(n){let e={};return{type:n.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputConfig:n.inputs||Ro,exportAs:n.exportAs||null,standalone:n.standalone??!0,signals:n.signals===!0,selectors:n.selectors||Kn,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,signalFormsInputPresence:null,inputs:sI(n.inputs,e),outputs:oI(n.outputs),debugInfo:null}}function Ug(n){n.features?.forEach(e=>e(n))}function Q7(n,e){return n?()=>{let t=typeof n=="function"?n():n,i=[];for(let r of t){let s=e(r);s!==null&&i.push(s)}return i}:null}function aI(n){let e=0,t=typeof n.consts=="function"?"":n.consts,i=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,t,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery];for(let s of i.join("|"))e=Math.imul(31,e)+s.charCodeAt(0)<<0;return e+=2147483648,"c"+e}var Bg=new Fe("");var l5=(()=>{class n{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,i)=>{this.resolve=t,this.reject=i});appInits=Y(Bg,{optional:!0})??[];injector=Y(Mi);constructor(){}runInitializers(){if(this.initialized)return;let t=[];for(let r of this.appInits){let s=Pn(this.injector,r);if(Nc(s))t.push(s);else if(kg(s)){let o=new Promise((a,c)=>{s.subscribe({complete:a,error:c})});t.push(o)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{i()}).catch(r=>{this.reject(r)}),t.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=nn({token:n,factory:n.\u0275fac})}return n})();function cI(n,e,t,i,r,s,o,a){if(t.firstCreatePass){n.mergedAttrs=Qu(n.mergedAttrs,n.attrs);let u=n.tView=e5(2,n,r,s,o,t.directiveRegistry,t.pipeRegistry,null,t.schemas,t.consts,null);t.queries!==null&&(t.queries.template(t,n),u.queries=t.queries.embeddedTView(n))}a&&(n.flags|=a),ka(n,!1);let c=lI(t,e,n,i);xu()&&Jh(t,e,c,n),Ga(c,e);let l=xg(c,e,c,n);e[i+pn]=l,n5(e,l),WT(l,n,e)}function Mc(n,e,t,i,r,s,o,a,c,l,u){let d=t+pn,f;if(e.firstCreatePass){if(f=Dc(e,d,4,o||null,a||null),l!=null){let h=_r(e.consts,l);f.localNames=[];for(let p=0;p<h.length;p+=2)f.localNames.push(h[p],-1)}}else f=e.data[d];return cI(f,n,e,t,i,r,s,c),l!=null&&i5(n,f,u),f}var lI=uI;function uI(n,e,t,i){return Mu(!0),e[Ht].createComment("")}var l3=(()=>{class n{log(t){console.log(t)}warn(t){console.warn(t)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=et({token:n,factory:n.\u0275fac,providedIn:"platform"})}return n})();var u5=new Fe("");var zc=new Fe("");function Vg(){R0(()=>{let n="";throw new oe(600,n)})}var dI=10;var Fs=(()=>{class n{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=Y(xr);afterRenderManager=Y(Yh);zonelessEnabled=Y(Ua);rootEffectScheduler=Y(Tu);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new En;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=Y(Xr);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(Xt(t=>!t))}constructor(){Y(ks,{optional:!0})}whenStable(){let t;return new Promise(i=>{t=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{t.unsubscribe()})}_injector=Y(fn);_rendererFactory=null;get injector(){return this._injector}bootstrap(t,i){return this.bootstrapImpl(t,i)}bootstrapImpl(t,i,r=Mi.NULL){return this._injector.get(Bt).run(()=>{if(wt(yt.BootstrapComponentStart),!this._injector.get(l5).done){let g="";throw new oe(405,g)}let a=Do(t),c=this._injector.get(Wa),l=new bc(a,c);this.componentTypes.push(t);let{hostElement:u,directives:d,bindings:f}=fI(i),h=u||l.selector,p=l.create(r,[],h,c.injector,d,f),y=p.location.nativeElement,m=p.injector.get(u5,null);return m?.registerApplication(y),p.onDestroy(()=>{this.detachView(p.hostView),mc(this.components,p),m?.unregisterApplication(y)}),this._loadComponent(p),wt(yt.BootstrapComponentEnd,p),p})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){wt(yt.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(i3.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw wt(yt.ChangeDetectionEnd),new oe(101,!1);let t=Oe(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,Oe(t),this.afterTick.next(),wt(yt.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Kr,null,{optional:!0}));let t=0;for(;this.dirtyFlags!==0&&t++<dI;){wt(yt.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{wt(yt.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let t=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!uc(r))continue;let s=i&&!this.zonelessEnabled?0:1;vg(r,s),t=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}t||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>uc(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){let i=t;mc(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(t),this._injector.get(zc,[]).forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>mc(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new oe(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||n)};static \u0275prov=nn({token:n,factory:n.\u0275fac})}return n})();function fI(n){return n===void 0||typeof n=="string"||n instanceof Element?{hostElement:n}:n}function mc(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function ci(n,e,t,i){let r=ct(),s=Bo();if(Sr(r,s,e)){let o=zn(),a=bu();UC(a,r,n,e,t,i)}return ci}var Th=class{destroy(e){}updateValue(e,t){}swap(e,t){let i=Math.min(e,t),r=Math.max(e,t),s=this.detach(r);if(r-i>1){let o=this.detach(i);this.attach(i,s),this.attach(r,o)}else this.attach(i,s)}move(e,t){this.attach(t,this.detach(e))}};function Q4(n,e,t,i,r){return n===t&&Object.is(e,i)?1:Object.is(r(n,e),r(t,i))?-1:0}function hI(n,e,t,i){let r,s,o=0,a=n.length-1,c=void 0;if(Array.isArray(e)){Oe(i);let l=e.length-1;for(Oe(null);o<=a&&o<=l;){let u=n.at(o),d=e[o],f=Q4(o,u,o,d,t);if(f!==0){f<0&&n.updateValue(o,d),o++;continue}let h=n.at(a),p=e[l],y=Q4(a,h,l,p,t);if(y!==0){y<0&&n.updateValue(a,p),a--,l--;continue}let m=t(o,u),g=t(a,h),M=t(o,d);if(Object.is(M,g)){let S=t(l,p);Object.is(S,m)?(n.swap(o,a),n.updateValue(a,p),l--,a--):n.move(a,o),n.updateValue(o,d),o++;continue}if(r??=new Yu,s??=t9(n,o,a,t),Ih(n,r,o,M))n.updateValue(o,d),o++,a++;else if(s.has(M))r.set(m,n.detach(o)),a--;else{let S=n.create(o,e[o]);n.attach(o,S),o++,a++}}for(;o<=l;)e9(n,r,t,o,e[o]),o++}else if(e!=null){Oe(i);let l=e[Symbol.iterator]();Oe(null);let u=l.next();for(;!u.done&&o<=a;){let d=n.at(o),f=u.value,h=Q4(o,d,o,f,t);if(h!==0)h<0&&n.updateValue(o,f),o++,u=l.next();else{r??=new Yu,s??=t9(n,o,a,t);let p=t(o,f);if(Ih(n,r,o,p))n.updateValue(o,f),o++,a++,u=l.next();else if(!s.has(p))n.attach(o,n.create(o,f)),o++,a++,u=l.next();else{let y=t(o,d);r.set(y,n.detach(o)),a--}}}for(;!u.done;)e9(n,r,t,n.length,u.value),u=l.next()}for(;o<=a;)n.destroy(n.detach(a--));r?.forEach(l=>{n.destroy(l)})}function Ih(n,e,t,i){return e!==void 0&&e.has(i)?(n.attach(t,e.get(i)),e.delete(i),!0):!1}function e9(n,e,t,i,r){if(Ih(n,e,i,t(i,r)))n.updateValue(i,r);else{let s=n.create(i,r);n.attach(i,s)}}function t9(n,e,t,i){let r=new Set;for(let s=e;s<=t;s++)r.add(i(s,n.at(s)));return r}var Yu=class{kvMap=new Map;_vMap=void 0;has(e){return this.kvMap.has(e)}delete(e){if(!this.has(e))return!1;let t=this.kvMap.get(e);return this._vMap!==void 0&&this._vMap.has(t)?(this.kvMap.set(e,this._vMap.get(t)),this._vMap.delete(t)):this.kvMap.delete(e),!0}get(e){return this.kvMap.get(e)}set(e,t){if(this.kvMap.has(e)){let i=this.kvMap.get(e);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,t)}else this.kvMap.set(e,t)}forEach(e){for(let[t,i]of this.kvMap)if(e(i,t),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),e(i,t)}}};function Er(n,e,t,i,r,s,o,a){Zi("NgControlFlow");let c=ct(),l=zn(),u=_r(l.consts,s);return Mc(c,l,n,e,t,i,r,u,256,o,a),d5}function d5(n,e,t,i,r,s,o,a){Zi("NgControlFlow");let c=ct(),l=zn(),u=_r(l.consts,s);return Mc(c,l,n,e,t,i,r,u,512,o,a),d5}function wr(n,e){Zi("NgControlFlow");let t=ct(),i=Bo(),r=t[i]!==ai?t[i]:-1,s=r!==-1?Zu(t,pn+r):void 0,o=0;if(Sr(t,i,n)){let a=Oe(null);try{if(s!==void 0&&Sg(s,o),n!==-1){let c=pn+n,l=Zu(t,c),u=Rh(t[Ue],c),d=wg(l,u,t),f=Ic(t,u,e,{dehydratedView:d});Ac(l,f,o,ja(u,d))}}finally{Oe(a)}}else if(s!==void 0){let a=Mg(s,o);a!==void 0&&(a[tn]=e)}}var Ah=class{lContainer;$implicit;$index;constructor(e,t,i){this.lContainer=e,this.$implicit=t,this.$index=i}get $count(){return this.lContainer.length-Gt}};function Ki(n,e){return e}var Dh=class{hasEmptyBlock;trackByFn;liveCollection;constructor(e,t,i){this.hasEmptyBlock=e,this.trackByFn=t,this.liveCollection=i}};function It(n,e,t,i,r,s,o,a,c,l,u,d,f){Zi("NgControlFlow");let h=ct(),p=zn(),y=c!==void 0,m=ct(),g=a?o.bind(m[jn][tn]):o,M=new Dh(y,g);m[pn+n]=M,Mc(h,p,n+1,e,t,i,r,_r(p.consts,s),256),y&&Mc(h,p,n+2,c,l,u,d,_r(p.consts,f),512)}var Nh=class extends Th{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(e,t,i){super(),this.lContainer=e,this.hostLView=t,this.templateTNode=i}get length(){return this.lContainer.length-Gt}at(e){return this.getLView(e)[tn].$implicit}attach(e,t){let i=t[Po];this.needsIndexUpdate||=e!==this.length,Ac(this.lContainer,t,e,ja(this.templateTNode,i)),pI(this.lContainer,e)}detach(e){return this.needsIndexUpdate||=e!==this.length-1,mI(this.lContainer,e),gI(this.lContainer,e)}create(e,t){let i=Gu(this.lContainer,this.templateTNode.tView.ssrId);return Ic(this.hostLView,this.templateTNode,new Ah(this.lContainer,t,e),{dehydratedView:i})}destroy(e){s3(e[Ue],e)}updateValue(e,t){this.getLView(e)[tn].$implicit=t}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let e=0;e<this.length;e++)this.getLView(e)[tn].$index=e}getLView(e){return vI(this.lContainer,e)}};function At(n){let e=Oe(null),t=br();try{let i=ct(),r=i[Ue],s=i[t],o=t+1,a=Zu(i,o);if(s.liveCollection===void 0){let l=Rh(r,o);s.liveCollection=new Nh(a,i,l)}else s.liveCollection.reset();let c=s.liveCollection;if(hI(c,n,s.trackByFn,e),c.updateIndexes(),s.hasEmptyBlock){let l=Bo(),u=c.length===0;if(Sr(i,l,u)){let d=t+2,f=Zu(i,d);if(u){let h=Rh(r,d),p=wg(f,h,i),y=Ic(i,h,void 0,{dehydratedView:p});Ac(f,y,0,ja(h,p))}else r.firstUpdatePass&&lT(f),Sg(f,0)}}}finally{Oe(e)}}function Zu(n,e){return n[e]}function pI(n,e){if(n.length<=Gt)return;let t=Gt+e,i=n[t],r=i?i[yr]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let s=i[mr];lC(s,r),zs.delete(i[vr]),r.detachedLeaveAnimationFns=void 0}}function mI(n,e){if(n.length<=Gt)return;let t=Gt+e,i=n[t],r=i?i[yr]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function gI(n,e){return yc(n,e)}function vI(n,e){return Mg(n,e)}function Rh(n,e){return du(n,e)}function Oc(n,e,t){let i=ct(),r=Bo();if(Sr(i,r,e)){let s=zn(),o=bu();PC(o,i,n,e,i[Ht],t)}return Oc}function Ph(n,e,t,i,r){r5(e,n,t,r?"class":"style",i)}function tt(n,e,t,i){let r=ct(),s=r[Ue],o=n+pn,a=s.firstCreatePass?Ng(o,r,2,e,FC,c7(),t,i):s.data[o];if(qr(a)){let c=r[ki].tracingService;if(c&&c.componentCreate){let l=s.data[a.directiveStart+a.componentOffset];return c.componentCreate(Ig(l),()=>(n9(n,e,r,a,i),tt))}}return n9(n,e,r,a,i),tt}function n9(n,e,t,i,r){if(ug(i,t,n,e,Hg),uu(i)){let s=t[Ue];cg(s,t,i),z9(s,i,t)}r!=null&&i5(t,i)}function $e(){let n=zn(),e=Ti(),t=dg(e);return n.firstCreatePass&&Rg(n,t),L4(t)&&z4(),R4(),t.classesWithoutHost!=null&&JE(t)&&Ph(n,t,ct(),t.classesWithoutHost,!0),t.stylesWithoutHost!=null&&QE(t)&&Ph(n,t,ct(),t.stylesWithoutHost,!1),$e}function Tn(n,e,t,i){return tt(n,e,t,i),$e(),Tn}function re(n,e,t,i){let r=ct(),s=r[Ue],o=n+pn,a=s.firstCreatePass?AT(o,s,2,e,t,i):s.data[o];return ug(a,r,n,e,Hg),i!=null&&i5(r,a),re}function ce(){let n=Ti(),e=dg(n);return L4(e)&&z4(),R4(),ce}function Ft(n,e,t,i){return re(n,e,t,i),ce(),Ft}var Hg=(n,e,t,i,r)=>(Mu(!0),H9(e[Ht],i,G4()));function Cr(){return ct()}function jo(n,e,t){let i=ct(),r=Bo();if(Sr(i,r,e)){let s=zn(),o=bu();lg(o,i,n,e,i[Ht],t)}return jo}var kc="en-US";var yI=kc;function Gg(n){typeof n=="string"&&(yI=n.toLowerCase().replace(/_/g,"-"))}function Jn(n,e,t){let i=ct(),r=zn(),s=Ti();return(s.type&3||t)&&mT(s,r,i,t,i[Ht],n,e,pT(s,i,e)),Jn}function cn(n=1){return _7(n)}function _I(n,e){let t=null,i=Zw(n);for(let r=0;r<e.length;r++){let s=e[r];if(s==="*"){t=r;continue}if(i===null?X9(n,s,!0):Qw(i,s))return r}return t}function f5(n){let e=ct()[jn][Ln];if(!e.projection){let t=n?n.length:1,i=e.projection=$m(t,null),r=i.slice(),s=e.child;for(;s!==null;){if(s.type!==128){let o=n?_I(s,n):0;o!==null&&(r[o]?r[o].projectionNext=s:i[o]=s,r[o]=s)}s=s.next}}}function h5(n,e=0,t,i,r,s){let o=ct(),a=zn(),c=i?n+1:null;c!==null&&Mc(o,a,c,i,r,s,null,t);let l=Dc(a,pn+n,16,null,t||null);l.projection===null&&(l.projection=e),F4();let d=!o[Po]||P4();o[jn][Ln].projection[l.projection]===null&&c!==null?bI(o,a,c):d&&!e3(l)&&SC(a,o,l)}function bI(n,e,t){let i=pn+t,r=e.data[i],s=n[i],o=Gu(s,r.tView.ssrId),a=Ic(n,r,void 0,{dehydratedView:o});Ac(s,a,0,ja(r,o))}function Za(n,e,t){return QT(n,e,t),Za}function Ka(n){let e=ct(),t=zn(),i=B4();vu(i+1);let r=c5(t,i);if(n.dirty&&t7(e)===((r.metadata.flags&2)===2)){if(r.matches===null)n.reset([]);else{let s=nI(e,i);n.reset(s,hw),n.notifyOnChanges()}return!0}return!1}function Ja(){return KT(ct(),B4())}function Nu(n,e){return n<<17|e<<2}function Ho(n){return n>>17&32767}function xI(n){return(n&2)==2}function MI(n,e){return n&131071|e<<17}function Lh(n){return n|2}function $a(n){return(n&131068)>>2}function eh(n,e){return n&-131069|e<<2}function SI(n){return(n&1)===1}function zh(n){return n|1}function EI(n,e,t,i,r,s){let o=s?e.classBindings:e.styleBindings,a=Ho(o),c=$a(o);n[i]=t;let l=!1,u;if(Array.isArray(t)){let d=t;u=d[1],(u===null||Ra(d,u)>0)&&(l=!0)}else u=t;if(r)if(c!==0){let f=Ho(n[a+1]);n[i+1]=Nu(f,a),f!==0&&(n[f+1]=eh(n[f+1],i)),n[a+1]=MI(n[a+1],i)}else n[i+1]=Nu(a,0),a!==0&&(n[a+1]=eh(n[a+1],i)),a=i;else n[i+1]=Nu(c,0),a===0?a=i:n[c+1]=eh(n[c+1],i),c=i;l&&(n[i+1]=Lh(n[i+1])),i9(n,u,i,!0),i9(n,u,i,!1),wI(e,u,n,i,s),o=Nu(a,c),s?e.classBindings=o:e.styleBindings=o}function wI(n,e,t,i,r){let s=r?n.residualClasses:n.residualStyles;s!=null&&typeof e=="string"&&Ra(s,e)>=0&&(t[i+1]=zh(t[i+1]))}function i9(n,e,t,i){let r=n[t+1],s=e===null,o=i?Ho(r):$a(r),a=!1;for(;o!==0&&(a===!1||s);){let c=n[o],l=n[o+1];CI(c,e)&&(a=!0,n[o+1]=i?zh(l):Lh(l)),o=i?Ho(l):$a(l)}a&&(n[t+1]=i?Lh(r):zh(r))}function CI(n,e){return n===null||e==null||(Array.isArray(n)?n[1]:n)===e?!0:Array.isArray(n)&&typeof e=="string"?Ra(n,e)>=0:!1}var $i={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function TI(n){return n.substring($i.key,$i.keyEnd)}function II(n){return AI(n),jg(n,Wg(n,0,$i.textEnd))}function jg(n,e){let t=$i.textEnd;return t===e?-1:(e=$i.keyEnd=DI(n,$i.key=e,t),Wg(n,e,t))}function AI(n){$i.key=0,$i.keyEnd=0,$i.value=0,$i.valueEnd=0,$i.textEnd=n.length}function Wg(n,e,t){for(;e<t&&n.charCodeAt(e)<=32;)e++;return e}function DI(n,e,t){for(;e<t&&n.charCodeAt(e)>32;)e++;return e}function Ii(n,e){return RI(n,e,null,!0),Ii}function p5(n){PI(UI,NI,n,!0)}function NI(n,e){for(let t=II(e);t>=0;t=jg(e,t))au(n,TI(e),!0)}function RI(n,e,t,i){let r=ct(),s=zn(),o=mu(2);if(s.firstUpdatePass&&qg(s,n,o,i),e!==ai&&Sr(r,o,e)){let a=s.data[br()];Xg(s,a,r,r[Ht],n,r[o+1]=VI(e,t),i,o)}}function PI(n,e,t,i){let r=zn(),s=mu(2);r.firstUpdatePass&&qg(r,null,s,i);let o=ct();if(t!==ai&&Sr(o,s,t)){let a=r.data[br()];if(Yg(a,i)&&!$g(r,s)){let c=i?a.classesWithoutHost:a.stylesWithoutHost;c!==null&&(t=tu(c,t||"")),Ph(r,a,o,t,i)}else BI(r,a,o,o[Ht],o[s+1],o[s+1]=FI(n,e,t),i,s)}}function $g(n,e){return e>=n.expandoStartIndex}function qg(n,e,t,i){let r=n.data;if(r[t+1]===null){let s=r[br()],o=$g(n,t);Yg(s,i)&&e===null&&!o&&(e=!1),e=LI(r,s,e,i),EI(r,s,e,t,o,i)}}function LI(n,e,t,i){let r=m7(n),s=i?e.residualClasses:e.residualStyles;if(r===null)(i?e.classBindings:e.styleBindings)===0&&(t=th(null,n,e,t,i),t=Sc(t,e.attrs,i),s=null);else{let o=e.directiveStylingLast;if(o===-1||n[o]!==r)if(t=th(r,n,e,t,i),s===null){let c=zI(n,e,i);c!==void 0&&Array.isArray(c)&&(c=th(null,n,e,c[1],i),c=Sc(c,e.attrs,i),OI(n,e,i,c))}else s=kI(n,e,i)}return s!==void 0&&(i?e.residualClasses=s:e.residualStyles=s),t}function zI(n,e,t){let i=t?e.classBindings:e.styleBindings;if($a(i)!==0)return n[Ho(i)]}function OI(n,e,t,i){let r=t?e.classBindings:e.styleBindings;n[Ho(r)]=i}function kI(n,e,t){let i,r=e.directiveEnd;for(let s=1+e.directiveStylingLast;s<r;s++){let o=n[s].hostAttrs;i=Sc(i,o,t)}return Sc(i,e.attrs,t)}function th(n,e,t,i,r){let s=null,o=t.directiveEnd,a=t.directiveStylingLast;for(a===-1?a=t.directiveStart:a++;a<o&&(s=e[a],i=Sc(i,s.hostAttrs,r),s!==n);)a++;return n!==null&&(t.directiveStylingLast=a),i}function Sc(n,e,t){let i=t?1:2,r=-1;if(e!==null)for(let s=0;s<e.length;s++){let o=e[s];typeof o=="number"?r=o:r===i&&(Array.isArray(n)||(n=n===void 0?[]:["",n]),au(n,o,t?!0:e[++s]))}return n===void 0?null:n}function FI(n,e,t){if(t==null||t==="")return Kn;let i=[],r=Xi(t);if(Array.isArray(r))for(let s=0;s<r.length;s++)n(i,r[s],!0);else if(r instanceof Set)for(let s of r)n(i,s,!0);else if(typeof r=="object")for(let s in r)Object.hasOwn(r,s)&&n(i,s,r[s]);else typeof r=="string"&&e(i,r);return i}function UI(n,e,t){let i=String(e);i!==""&&!i.includes(" ")&&au(n,i,t)}function BI(n,e,t,i,r,s,o,a){r===ai&&(r=Kn);let c=0,l=0,u=0<r.length?r[0]:null,d=0<s.length?s[0]:null;for(;u!==null||d!==null;){let f=c<r.length?r[c+1]:void 0,h=l<s.length?s[l+1]:void 0,p=null,y;u===d?(c+=2,l+=2,f!==h&&(p=d,y=h)):d===null||u!==null&&u<d?(c+=2,p=u):(l+=2,p=d,y=h),p!==null&&Xg(n,e,t,i,p,y,o,a),u=c<r.length?r[c]:null,d=l<s.length?s[l]:null}}function Xg(n,e,t,i,r,s,o,a){if(!(e.type&3))return;let c=n.data,l=c[a+1],u=SI(l)?r9(c,e,t,r,$a(l),o):void 0;if(!Ku(u)){Ku(s)||xI(l)&&(s=r9(c,null,t,r,a,o));let d=T4(br(),t);wC(i,o,d,r,s)}}function r9(n,e,t,i,r,s){let o=e===null,a;for(;r>0;){let c=n[r],l=Array.isArray(c),u=l?c[1]:c,d=u===null,f=t[r+1];f===ai&&(f=d?Kn:void 0);let h=d?cu(f,i):u===i?f:void 0;if(l&&!Ku(h)&&(h=cu(c,i)),Ku(h)&&(a=h,o))return a;let p=n[r+1];r=o?Ho(p):$a(p)}if(e!==null){let c=s?e.residualClasses:e.residualStyles;c!=null&&(a=cu(c,i))}return a}function Ku(n){return n!==void 0}function VI(n,e){return n==null||n===""||(typeof e=="string"?n=n+e:typeof n=="object"&&(n=ic(Xi(n)))),n}function Yg(n,e){return(n.flags&(e?8:16))!==0}function Q(n,e=""){let t=ct(),i=zn(),r=n+pn,s=i.firstCreatePass?Dc(i,r,1,e,null):i.data[r],o=HI(i,t,s,e);t[r]=o,xu()&&Jh(i,t,o,s),ka(s,!1)}var HI=(n,e,t,i)=>(Mu(!0),Bw(e[Ht],i));function Zg(n,e,t,i=""){return Sr(n,Bo(),t)?e+No(t)+i:ai}function GI(n,e,t,i,r,s=""){let o=u7(),a=hT(n,o,t,r);return mu(2),a?e+No(t)+i+No(r)+s:ai}function Ye(n){return Yt("",n),Ye}function Yt(n,e,t){let i=ct(),r=Zg(i,n,e,t);return r!==ai&&Kg(i,br(),r),Yt}function Wo(n,e,t,i,r){let s=ct(),o=GI(s,n,e,t,i,r);return o!==ai&&Kg(s,br(),o),Wo}function Kg(n,e,t){let i=T4(e,n);Vw(n[Ht],i,t)}function m5(n,e,t=""){return Zg(ct(),n,e,t)}var Jg=(()=>{class n{applicationErrorHandler=Y(xr);appRef=Y(Fs);taskService=Y(Xr);ngZone=Y(Bt);zonelessEnabled=Y(Ua);tracing=Y(ks,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new dn;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(tc):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(Y(Cu,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let t=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(t);return}this.switchToMicrotaskScheduler(),this.taskService.remove(t)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let t=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})})}notify(t){if(!this.zonelessEnabled&&t===5)return;switch(t){case 0:case 2:{this.appRef.dirtyFlags|=2;break}case 3:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?M7:$4;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(tc+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(t),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=nn({token:n,factory:n.\u0275fac})}return n})();function Qg(){return[{provide:$r,useExisting:Jg},{provide:Bt,useClass:nc},{provide:Ua,useValue:!0}]}var g5=(()=>{class n{compileModuleSync(t){return new Xu(t)}compileModuleAsync(t){return Promise.resolve(this.compileModuleSync(t))}clearCache(){}clearCacheFor(t){}getModuleId(t){}static \u0275fac=function(i){return new(i||n)};static \u0275prov=nn({token:n,factory:n.\u0275fac})}return n})();function jI(){return typeof $localize<"u"&&$localize.locale||kc}var v5=new Fe("",{factory:()=>Y(v5,{optional:!0,skipSelf:!0})||jI()});var u3=class{destroyed=!1;listeners=null;errorHandler=Y(Si,{optional:!0});isEmitting=!1;hasNullListeners=!1;destroyRef=Y(Hi);constructor(){this.destroyRef.onDestroy(()=>{this.destroyed=!0,this.listeners=null})}subscribe(e){if(this.destroyed)throw new oe(953,!1);return(this.listeners??=[]).push(e),{unsubscribe:()=>{let t=this.listeners?this.listeners.indexOf(e):-1;t>-1&&(this.isEmitting?(this.hasNullListeners=!0,this.listeners[t]=null):this.listeners.splice(t,1))}}}emit(e){if(this.destroyed){console.warn(Cs(953,!1));return}if(this.listeners===null)return;this.isEmitting=!0;let t=Oe(null);try{for(let i of this.listeners)try{i!==null&&i(e)}catch(r){this.errorHandler?.handleError(r)}}finally{this.hasNullListeners&&(this.hasNullListeners=!1,this.listeners&&WI(this.listeners)),Oe(t),this.isEmitting=!1}}};function WI(n){let e=n.length-1;for(;e>-1;)n[e]===null&&n.splice(e,1),e--}function Qa(n,e){return E2(n,e?.equal)}function Us(n){return im(n)}var f3=Symbol("InputSignalNode#UNSET"),sv=at(de({},w2),{transformFn:void 0,applyValueToInputSignal(n,e){xo(n,e)}});function ov(n,e){let t=Object.create(sv);t.value=n,t.transformFn=e?.transform;function i(){if(yo(t),t.value===f3){let r=null;throw new oe(-950,r)}return t.value}return i[Rn]=t,i}function _5(n){return sA(n)?n.default:n}function sA(n){return n&&typeof n=="object"&&"default"in n}function ev(n,e){return ov(n,e)}function oA(n){return ov(f3,n)}var $o=(ev.required=oA,ev);function av(n,e){let t=Object.create(sv),i=new u3;t.value=n;function r(){return yo(t),tv(t.value),t.value}return r[Rn]=t,r.asReadonly=Su.bind(r),r.set=s=>{t.equal(t.value,s)||(xo(t,s),i.emit(s))},r.update=s=>{tv(t.value),r.set(s(t.value))},r.subscribe=i.subscribe.bind(i),r.destroyRef=i.destroyRef,r}function tv(n){if(n===f3)throw new oe(952,!1)}function nv(n,e){return av(n,e)}function aA(n){return av(f3,n)}var Wn=(nv.required=aA,nv);var cA=1e4;var Xte=cA-1e3;var cv=(()=>{class n{static __NG_ELEMENT_ID__=lA}return n})();function lA(n){return uA(Ti(),ct(),(n&16)===16)}function uA(n,e,t){if(qr(n)&&!t){let i=Ui(n.index,e);return new Os(i,i)}else if(n.type&175){let i=e[jn];return new Os(i,e)}return null}var dA=(()=>{class n{zone=Y(Bt);changeDetectionScheduler=Y($r);applicationRef=Y(Fs);applicationErrorHandler=Y(xr);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{try{this.applicationRef.dirtyFlags|=1,this.applicationRef._tick()}catch(t){this.applicationErrorHandler(t)}})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=nn({token:n,factory:n.\u0275fac})}return n})(),fA=new Fe("",{factory:()=>!1});function hA({ngZoneFactory:n,scheduleInRootZone:e}){return n??=()=>new Bt(at(de({},uv()),{scheduleInRootZone:e})),[{provide:Ua,useValue:!1},{provide:Bt,useFactory:n},{provide:Is,multi:!0,useFactory:()=>{let t=Y(dA,{optional:!0});return()=>t.initialize()}},{provide:Is,multi:!0,useFactory:()=>{let t=Y(pA);return()=>{t.initialize()}}},{provide:Cu,useValue:e??W4}]}function lv(n){let e=n?.scheduleInRootZone,t=hA({ngZoneFactory:()=>{let i=uv(n);return i.scheduleInRootZone=e,i.shouldCoalesceEventChangeDetection&&Zi("NgZone_CoalesceEvent"),new Bt(i)},scheduleInRootZone:e});return Pa([{provide:fA,useValue:!0},t])}function uv(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var pA=(()=>{class n{subscription=new dn;initialized=!1;zone=Y(Bt);pendingTasks=Y(Xr);initialize(){if(this.initialized)return;this.initialized=!0;let t=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(t=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{Bt.assertNotInAngularZone(),queueMicrotask(()=>{t!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(t),t=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{Bt.assertInAngularZone(),t??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=nn({token:n,factory:n.\u0275fac})}return n})();var y5=new Fe(""),mA=new Fe("");function Fc(n){return!n.moduleRef}function gA(n){let e=Fc(n)?n.r3Injector:n.moduleRef.injector,t=e.get(Bt);return t.run(()=>{Fc(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let i=e.get(xr),r;if(t.runOutsideAngular(()=>{r=t.onError.subscribe({next:i})}),Fc(n)){let s=()=>e.destroy(),o=n.platformInjector.get(y5);o.add(s),e.onDestroy(()=>{r.unsubscribe(),o.delete(s)})}else{let s=()=>n.moduleRef.destroy(),o=n.platformInjector.get(y5);o.add(s),n.moduleRef.onDestroy(()=>{mc(n.allPlatformModules,n.moduleRef),r.unsubscribe(),o.delete(s)})}return yA(i,t,()=>{let s=e.get(Xr),o=s.add(),a=e.get(l5);return a.runInitializers(),a.donePromise.then(()=>{let c=e.get(v5,kc);if(Gg(c||kc),!e.get(mA,!0))return Fc(n)?e.get(Fs):(n.allPlatformModules.push(n.moduleRef),n.moduleRef);if(Fc(n)){let u=e.get(Fs);return n.rootComponent!==void 0&&u.bootstrap(n.rootComponent),u}else return vA?.(n.moduleRef,n.allPlatformModules),n.moduleRef}).finally(()=>{s.remove(o)})})})}var vA;function yA(n,e,t){try{let i=t();return Nc(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n(i)),i}}var d3=null;function _A(n=[],e){return Mi.create({name:e,providers:[{provide:ac,useValue:"platform"},{provide:y5,useValue:new Set([()=>d3=null])},...n]})}function bA(n=[]){if(d3)return d3;let e=_A(n);return d3=e,Vg(),xA(e),e}function xA(n){let e=n.get(Eu,null);Pn(n,()=>{e?.forEach(t=>t())})}function dv(n){let{rootComponent:e,appProviders:t,platformProviders:i,platformRef:r}=n;wt(yt.BootstrapApplicationStart);try{let s=r?.injector??bA(i),o=[Qg(),E7,...t||[]],a=new xc({providers:o,parent:s,debugName:"",runEnvironmentInitializers:!1});return gA({r3Injector:a.injector,platformInjector:s,rootComponent:e})}catch(s){return Promise.reject(s)}finally{wt(yt.BootstrapApplicationEnd)}}var fv=null;function es(){return fv}function b5(n){fv??=n}var Uc=class{},h3=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=et({token:n,factory:()=>Y(hv),providedIn:"platform"})}return n})();var hv=(()=>{class n extends h3{_location;_history;_doc=Y(Vt);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return es().getBaseHref(this._doc)}onPopState(t){let i=es().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",t,!1),()=>i.removeEventListener("popstate",t)}onHashChange(t){let i=es().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",t,!1),()=>i.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,i,r){this._history.pushState(t,i,r)}replaceState(t,i,r){this._history.replaceState(t,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||n)};static \u0275prov=et({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function gv(n,e){return n?e?n.endsWith("/")?e.startsWith("/")?n+e.slice(1):n+e:e.startsWith("/")?n+e:`${n}/${e}`:n:e}function pv(n){let e=n.search(/#|\?|$/);return n[e-1]==="/"?n.slice(0,e-1)+n.slice(e):n}function Bs(n){return n&&n[0]!=="?"?`?${n}`:n}var p3=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=et({token:n,factory:()=>Y(SA),providedIn:"root"})}return n})(),MA=new Fe(""),SA=(()=>{class n extends p3{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,i){super(),this._platformLocation=t,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??Y(Vt).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return gv(this._baseHref,t)}path(t=!1){let i=this._platformLocation.pathname+Bs(this._platformLocation.search),r=this._platformLocation.hash;return r&&t?`${i}${r}`:i}pushState(t,i,r,s){let o=this.prepareExternalUrl(r+Bs(s));this._platformLocation.pushState(t,i,o)}replaceState(t,i,r,s){let o=this.prepareExternalUrl(r+Bs(s));this._platformLocation.replaceState(t,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(i){return new(i||n)(Xe(h3),Xe(MA,8))};static \u0275prov=et({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var e1=(()=>{class n{_subject=new En;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let i=this._locationStrategy.getBaseHref();this._basePath=CA(pv(mv(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,i=""){return this.path()==this.normalize(t+Bs(i))}normalize(t){return n.stripTrailingSlash(wA(this._basePath,mv(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,i="",r=null){this._locationStrategy.pushState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Bs(i)),r)}replaceState(t,i="",r=null){this._locationStrategy.replaceState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Bs(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",i){this._urlChangeListeners.forEach(r=>r(t,i))}subscribe(t,i,r){return this._subject.subscribe({next:t,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=Bs;static joinWithSlash=gv;static stripTrailingSlash=pv;static \u0275fac=function(i){return new(i||n)(Xe(p3))};static \u0275prov=et({token:n,factory:()=>EA(),providedIn:"root"})}return n})();function EA(){return new e1(Xe(p3))}function wA(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function mv(n){return n.replace(/\/index\.html$/,"")}function CA(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}function x5(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var M5="browser";function t1(n){return n===M5}var Bc=class{_doc;constructor(e){this._doc=e}manager},m3=(()=>{class n extends Bc{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r,s){return t.addEventListener(i,r,s),()=>this.removeEventListener(t,i,r,s)}removeEventListener(t,i,r,s){return t.removeEventListener(i,r,s)}static \u0275fac=function(i){return new(i||n)(Xe(Vt))};static \u0275prov=et({token:n,factory:n.\u0275fac})}return n})(),y3=new Fe(""),C5=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,i){this._zone=i,t.forEach(o=>{o.manager=this});let r=t.filter(o=>!(o instanceof m3));this._plugins=r.slice().reverse();let s=t.find(o=>o instanceof m3);s&&this._plugins.push(s)}addEventListener(t,i,r,s){return this._findPluginFor(i).addEventListener(t,i,r,s)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(s=>s.supports(t)),!i)throw new oe(-5101,!1);return this._eventNameToPlugin.set(t,i),i}static \u0275fac=function(i){return new(i||n)(Xe(y3),Xe(Bt))};static \u0275prov=et({token:n,factory:n.\u0275fac})}return n})(),S5="ng-app-id";function vv(n){for(let e of n)e.remove()}function yv(n,e){let t=e.createElement("style");return t.textContent=n,t}function TA(n,e,t,i){let r=n.head?.querySelectorAll(`style[${S5}="${e}"],link[${S5}="${e}"]`);if(!r||r.length===0)return!1;for(let s of r)s.removeAttribute(S5),s instanceof HTMLLinkElement?i.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&t.set(s.textContent,{usage:0,elements:[s]});return!0}function w5(n,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var T5=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(t,i,r,s={}){this.doc=t,this.appId=i,this.nonce=r,TA(t,i,this.inline,this.external)&&this.hosts.add(t.head)}addStyles(t,i){for(let r of t)this.addUsage(r,this.inline,yv);i?.forEach(r=>this.addUsage(r,this.external,w5))}removeStyles(t,i){for(let r of t)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,i,r){let s=i.get(t);s?s.usage++:i.set(t,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,r(t,this.doc)))})}removeUsage(t,i){let r=i.get(t);r&&(r.usage--,r.usage<=0&&(vv(r.elements),i.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])vv(t);this.hosts.clear()}addHost(t){if(!this.hosts.has(t)){this.hosts.add(t);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(t,yv(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(t,w5(i,this.doc)))}}removeHost(t){this.hosts.delete(t);for(let i of[...this.inline.values(),...this.external.values()]){let r=[];for(let s of i.elements)s.parentNode===t?s.remove():r.push(s);i.elements=r}}addElement(t,i){return this.nonce&&i.setAttribute("nonce",this.nonce),t.appendChild(i)}static \u0275fac=function(i){return new(i||n)(Xe(Vt),Xe(dc),Xe(Fa,8),Xe(ji))};static \u0275prov=et({token:n,factory:n.\u0275fac})}return n})(),E5={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},I5=/%COMP%/g;var bv="%COMP%",IA=`_nghost-${bv}`,AA=`_ngcontent-${bv}`,DA=!0,NA=new Fe("",{factory:()=>DA});function RA(n){return AA.replace(I5,n)}function PA(n){return IA.replace(I5,n)}function xv(n,e){return e.map(t=>t.replace(I5,n))}var Gc=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(t,i,r,s,o,a,c=null,l=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=o,this.ngZone=a,this.nonce=c,this.tracingService=l,this.defaultRenderer=new Vc(t,o,a,this.tracingService)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(t,i);return r instanceof v3?r.applyToHost(t):r instanceof Hc&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,s=r.get(i.id);if(!s){let o=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.tracingService;switch(i.encapsulation){case qi.Emulated:s=new v3(c,l,i,this.appId,u,o,a,d);break;case qi.ShadowDom:return new g3(c,t,i,o,a,this.nonce,d,l);case qi.ExperimentalIsolatedShadowDom:return new g3(c,t,i,o,a,this.nonce,d);default:s=new Hc(c,l,i,u,o,a,d);break}r.set(i.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(i){return new(i||n)(Xe(C5),Xe(Go),Xe(dc),Xe(NA),Xe(Vt),Xe(Bt),Xe(Fa),Xe(ks,8))};static \u0275prov=et({token:n,factory:n.\u0275fac})}return n})(),Vc=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,i,r){this.eventManager=e,this.doc=t,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(E5[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(_v(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(_v(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){t.remove()}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new oe(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=E5[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=E5[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(Zr.DashCase|Zr.Important)?e.style.setProperty(t,i,r&Zr.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&Zr.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i,r){if(typeof e=="string"&&(e=es().getGlobalEventTarget(this.doc,e),!e))throw new oe(-5102,!1);let s=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(s=this.tracingService.wrapEventListener(e,t,s)),this.eventManager.addEventListener(e,t,s,r)}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;e(t)===!1&&t.preventDefault()}}};function _v(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var g3=class extends Vc{hostEl;sharedStylesHost;shadowRoot;constructor(e,t,i,r,s,o,a,c){super(e,r,s,a),this.hostEl=t,this.sharedStylesHost=c,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let l=i.styles;l=xv(i.id,l);for(let d of l){let f=document.createElement("style");o&&f.setAttribute("nonce",o),f.textContent=d,this.shadowRoot.appendChild(f)}let u=i.getExternalStyles?.();if(u)for(let d of u){let f=w5(d,r);o&&f.setAttribute("nonce",o),this.shadowRoot.appendChild(f)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Hc=class extends Vc{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,i,r,s,o,a,c){super(e,s,o,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r;let l=i.styles;this.styles=c?xv(c,l):l,this.styleUrls=i.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&zs.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},v3=class extends Hc{contentAttr;hostAttr;constructor(e,t,i,r,s,o,a,c){let l=r+"-"+i.id;super(e,t,i,s,o,a,c,l),this.contentAttr=RA(l),this.hostAttr=PA(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}};var _3=class n extends Uc{supportsDOMEvents=!0;static makeCurrent(){b5(new n)}onAndCancel(e,t,i,r){return e.addEventListener(t,i,r),()=>{e.removeEventListener(t,i,r)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=LA();return t==null?null:zA(t)}resetBaseElement(){jc=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return x5(document.cookie,e)}},jc=null;function LA(){return jc=jc||document.head.querySelector("base"),jc?jc.getAttribute("href"):null}function zA(n){return new URL(n,document.baseURI).pathname}var Mv=["alt","control","meta","shift"],OA={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},kA={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},Sv=(()=>{class n extends Bc{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r,s){let o=n.parseEventName(i),a=n.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>es().onAndCancel(t,o.domEventName,a,s))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let s=n._normalizeKey(i.pop()),o="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),o="code."),Mv.forEach(l=>{let u=i.indexOf(l);u>-1&&(i.splice(u,1),o+=l+".")}),o+=s,i.length!=0||s.length===0)return null;let c={};return c.domEventName=r,c.fullKey=o,c}static matchEventFullKeyCode(t,i){let r=OA[t.key]||t.key,s="";return i.indexOf("code.")>-1&&(r=t.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Mv.forEach(o=>{if(o!==r){let a=kA[o];a(t)&&(s+=o+".")}}),s+=r,s===i)}static eventCallback(t,i,r){return s=>{n.matchEventFullKeyCode(s,t)&&r.runGuarded(()=>i(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(i){return new(i||n)(Xe(Vt))};static \u0275prov=et({token:n,factory:n.\u0275fac})}return n})();function A5(n,e,t){return Mt(this,null,function*(){let i=de({rootComponent:n},FA(e,t));return dv(i)})}function FA(n,e){return{platformRef:e?.platformRef,appProviders:[...GA,...n?.providers??[]],platformProviders:HA}}function UA(){_3.makeCurrent()}function BA(){return new Si}function VA(){return Uh(document),document}var HA=[{provide:ji,useValue:M5},{provide:Eu,useValue:UA,multi:!0},{provide:Vt,useFactory:VA}];var GA=[{provide:ac,useValue:"root"},{provide:Si,useFactory:BA},{provide:y3,useClass:m3,multi:!0},{provide:y3,useClass:Sv,multi:!0},Gc,{provide:Go,useClass:T5},{provide:T5,useExisting:Go},C5,{provide:Kr,useExisting:Gc},[]];var Ev=(()=>{class n{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(i){return new(i||n)(Xe(Vt))};static \u0275prov=et({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var D5=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=et({token:n,factory:function(i){let r=null;return i?r=new(i||n):r=Xe(jA),r},providedIn:"root"})}return n})(),jA=(()=>{class n extends D5{_doc=Y(Vt);sanitize(t,i){if(i==null)return null;switch(t){case Yi.NONE:return i;case Yi.HTML:return Jr(i,"HTML")?Xi(i):n3(this._doc,String(i)).toString();case Yi.STYLE:return Jr(i,"Style")?Xi(i):i;case Yi.SCRIPT:if(Jr(i,"Script"))return Xi(i);throw new oe(5200,!1);case Yi.URL:return Jr(i,"URL")?Xi(i):wc(String(i));case Yi.RESOURCE_URL:if(Jr(i,"ResourceURL"))return Xi(i);throw new oe(5201,!1);default:throw new oe(5202,!1)}}bypassSecurityTrustHtml(t){return Vh(t)}bypassSecurityTrustStyle(t){return Hh(t)}bypassSecurityTrustScript(t){return Gh(t)}bypassSecurityTrustUrl(t){return jh(t)}bypassSecurityTrustResourceUrl(t){return Wh(t)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=nn({token:n,factory:n.\u0275fac})}return n})();var Ze="primary",rl=Symbol("RouteTitle"),z5=class{params;constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function Xo(n){return new z5(n)}function N5(n,e,t){for(let i=0;i<n.length;i++){let r=n[i],s=e[i];if(r[0]===":")t[r.substring(1)]=s;else if(r!==s.path)return!1}return!0}function Pv(n,e,t){let i=t.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let c={},l=n.slice(0,i.length);return N5(i,l,c)?{consumed:l,posParams:c}:null}if(r!==i.lastIndexOf("**"))return null;let s=i.slice(0,r),o=i.slice(r+1);if(s.length+o.length>n.length||t.pathMatch==="full"&&e.hasChildren()&&t.path!=="**")return null;let a={};return!N5(s,n.slice(0,s.length),a)||!N5(o,n.slice(n.length-o.length),a)?null:{consumed:n,posParams:a}}function w3(n){return new Promise((e,t)=>{n.pipe(Gr()).subscribe({next:i=>e(i),error:i=>t(i)})})}function $A(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!Tr(n[t],e[t]))return!1;return!0}function Tr(n,e){let t=n?O5(n):void 0,i=e?O5(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!Lv(n[r],e[r]))return!1;return!0}function O5(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function Lv(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,s)=>i[s]===r)}else return n===e}function qA(n){return n.length>0?n[n.length-1]:null}function Ko(n){return j2(n)?n:Nc(n)?an(Promise.resolve(n)):lt(n)}function zv(n){return j2(n)?w3(n):Promise.resolve(n)}var XA={exact:Fv,subset:Uv},Ov={exact:YA,subset:ZA,ignored:()=>!0},kv={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},k5={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function wv(n,e,t){return XA[t.paths](n.root,e.root,t.matrixParams)&&Ov[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function YA(n,e){return Tr(n,e)}function Fv(n,e,t){if(!qo(n.segments,e.segments)||!M3(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!Fv(n.children[i],e.children[i],t))return!1;return!0}function ZA(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>Lv(n[t],e[t]))}function Uv(n,e,t){return Bv(n,e,e.segments,t)}function Bv(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!qo(r,t)||e.hasChildren()||!M3(r,t,i))}else if(n.segments.length===t.length){if(!qo(n.segments,t)||!M3(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!Uv(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),s=t.slice(n.segments.length);return!qo(n.segments,r)||!M3(n.segments,r,i)||!n.children[Ze]?!1:Bv(n.children[Ze],e,s,i)}}function M3(n,e,t){return e.every((i,r)=>Ov[t](n[r].parameters,i.parameters))}var Di=class{root;queryParams;fragment;_queryParamMap;constructor(e=new xt([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Xo(this.queryParams),this._queryParamMap}toString(){return QA.serialize(this)}},xt=class{segments;children;parent=null;constructor(e,t){this.segments=e,this.children=t,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return S3(this)}},Vs=class{path;parameters;_parameterMap;constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=Xo(this.parameters),this._parameterMap}toString(){return Hv(this)}};function KA(n,e){return qo(n,e)&&n.every((t,i)=>Tr(t.parameters,e[i].parameters))}function qo(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function JA(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===Ze&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==Ze&&(t=t.concat(e(r,i)))}),t}var sl=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=nn({token:n,factory:()=>new Hs})}return n})(),Hs=class{parse(e){let t=new U5(e);return new Di(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${Wc(e.root,!0)}`,i=nD(e.queryParams),r=typeof e.fragment=="string"?`#${eD(e.fragment)}`:"";return`${t}${i}${r}`}},QA=new Hs;function S3(n){return n.segments.map(e=>Hv(e)).join("/")}function Wc(n,e){if(!n.hasChildren())return S3(n);if(e){let t=n.children[Ze]?Wc(n.children[Ze],!1):"",i=[];return Object.entries(n.children).forEach(([r,s])=>{r!==Ze&&i.push(`${r}:${Wc(s,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=JA(n,(i,r)=>r===Ze?[Wc(n.children[Ze],!1)]:[`${r}:${Wc(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[Ze]!=null?`${S3(n)}/${t[0]}`:`${S3(n)}/(${t.join("//")})`}}function Vv(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function b3(n){return Vv(n).replace(/%3B/gi,";")}function eD(n){return encodeURI(n)}function F5(n){return Vv(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function E3(n){return decodeURIComponent(n)}function Cv(n){return E3(n.replace(/\+/g,"%20"))}function Hv(n){return`${F5(n.path)}${tD(n.parameters)}`}function tD(n){return Object.entries(n).map(([e,t])=>`;${F5(e)}=${F5(t)}`).join("")}function nD(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${b3(t)}=${b3(r)}`).join("&"):`${b3(t)}=${b3(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var iD=/^[^\/()?;#]+/;function R5(n){let e=n.match(iD);return e?e[0]:""}var rD=/^[^\/()?;=#]+/;function sD(n){let e=n.match(rD);return e?e[0]:""}var oD=/^[^=?&#]+/;function aD(n){let e=n.match(oD);return e?e[0]:""}var cD=/^[^&#]+/;function lD(n){let e=n.match(cD);return e?e[0]:""}var U5=class{url;remaining;constructor(e){this.url=e,this.remaining=e}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new xt([],{}):new xt([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(e=0){if(e>50)throw new oe(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,e));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,e)),(t.length>0||Object.keys(i).length>0)&&(r[Ze]=new xt(t,i)),r}parseSegment(){let e=R5(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new oe(4009,!1);return this.capture(e),new Vs(E3(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=sD(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=R5(this.remaining);r&&(i=r,this.capture(i))}e[E3(t)]=E3(i)}parseQueryParam(e){let t=aD(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let o=lD(this.remaining);o&&(i=o,this.capture(i))}let r=Cv(t),s=Cv(i);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e,t){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=R5(this.remaining),s=this.remaining[r.length];if(s!=="/"&&s!==")"&&s!==";")throw new oe(4010,!1);let o;r.indexOf(":")>-1?(o=r.slice(0,r.indexOf(":")),this.capture(o),this.capture(":")):e&&(o=Ze);let a=this.parseChildren(t+1);i[o??Ze]=Object.keys(a).length===1&&a[Ze]?a[Ze]:new xt([],a),this.consumeOptional("//")}return i}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new oe(4011,!1)}};function Gv(n){return n.segments.length>0?new xt([],{[Ze]:n}):n}function jv(n){let e={};for(let[i,r]of Object.entries(n.children)){let s=jv(r);if(i===Ze&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[i]=s)}let t=new xt(n.segments,e);return uD(t)}function uD(n){if(n.numberOfChildren===1&&n.children[Ze]){let e=n.children[Ze];return new xt(n.segments.concat(e.segments),e.children)}return n}function s1(n){return n instanceof Di}function Wv(n,e,t=null,i=null,r=new Hs){let s=$v(n);return qv(s,e,t,i,r)}function $v(n){let e;function t(s){let o={};for(let c of s.children){let l=t(c);o[c.outlet]=l}let a=new xt(s.url,o);return s===n&&(e=a),a}let i=t(n.root),r=Gv(i);return e??r}function qv(n,e,t,i,r){let s=n;for(;s.parent;)s=s.parent;if(e.length===0)return P5(s,s,s,t,i,r);let o=dD(e);if(o.toRoot())return P5(s,s,new xt([],{}),t,i,r);let a=fD(o,s,n),c=a.processChildren?qc(a.segmentGroup,a.index,o.commands):Yv(a.segmentGroup,a.index,o.commands);return P5(s,a.segmentGroup,c,t,i,r)}function C3(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function Zc(n){return typeof n=="object"&&n!=null&&n.outlets}function Tv(n,e,t){n||="\u0275";let i=new Di;return i.queryParams={[n]:e},t.parse(t.serialize(i)).queryParams[n]}function P5(n,e,t,i,r,s){let o={};for(let[l,u]of Object.entries(i??{}))o[l]=Array.isArray(u)?u.map(d=>Tv(l,d,s)):Tv(l,u,s);let a;n===e?a=t:a=Xv(n,e,t);let c=Gv(jv(a));return new Di(c,o,r)}function Xv(n,e,t){let i={};return Object.entries(n.children).forEach(([r,s])=>{s===e?i[r]=t:i[r]=Xv(s,e,t)}),new xt(n.segments,i)}var T3=class{isAbsolute;numberOfDoubleDots;commands;constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&C3(i[0]))throw new oe(4003,!1);let r=i.find(Zc);if(r&&r!==qA(i))throw new oe(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function dD(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new T3(!0,0,n);let e=0,t=!1,i=n.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new T3(t,e,i)}var i1=class{segmentGroup;processChildren;index;constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function fD(n,e,t){if(n.isAbsolute)return new i1(e,!0,0);if(!t)return new i1(e,!1,NaN);if(t.parent===null)return new i1(t,!0,0);let i=C3(n.commands[0])?0:1,r=t.segments.length-1+i;return hD(t,r,n.numberOfDoubleDots)}function hD(n,e,t){let i=n,r=e,s=t;for(;s>r;){if(s-=r,i=i.parent,!i)throw new oe(4005,!1);r=i.segments.length}return new i1(i,!1,r-s)}function pD(n){return Zc(n[0])?n[0].outlets:{[Ze]:n}}function Yv(n,e,t){if(n??=new xt([],{}),n.segments.length===0&&n.hasChildren())return qc(n,e,t);let i=mD(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let s=new xt(n.segments.slice(0,i.pathIndex),{});return s.children[Ze]=new xt(n.segments.slice(i.pathIndex),n.children),qc(s,0,r)}else return i.match&&r.length===0?new xt(n.segments,{}):i.match&&!n.hasChildren()?B5(n,e,t):i.match?qc(n,0,r):B5(n,e,t)}function qc(n,e,t){if(t.length===0)return new xt(n.segments,{});{let i=pD(t),r={};if(Object.keys(i).some(s=>s!==Ze)&&n.children[Ze]&&n.numberOfChildren===1&&n.children[Ze].segments.length===0){let s=qc(n.children[Ze],e,t);return new xt(n.segments,s.children)}return Object.entries(i).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=Yv(n.children[s],e,o))}),Object.entries(n.children).forEach(([s,o])=>{i[s]===void 0&&(r[s]=o)}),new xt(n.segments,r)}}function mD(n,e,t){let i=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return s;let o=n.segments[r],a=t[i];if(Zc(a))break;let c=`${a}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!Av(c,l,o))return s;i+=2}else{if(!Av(c,{},o))return s;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function B5(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(Zc(s)){let c=gD(s.outlets);return new xt(i,c)}if(r===0&&C3(t[0])){let c=n.segments[e];i.push(new Vs(c.path,Iv(t[0]))),r++;continue}let o=Zc(s)?s.outlets[Ze]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&C3(a)?(i.push(new Vs(o,Iv(a))),r+=2):(i.push(new Vs(o,{})),r++)}return new xt(i,{})}function gD(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=B5(new xt([],{}),0,i))}),e}function Iv(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function Av(n,e,t){return n==t.path&&Tr(e,t.parameters)}var Xc="imperative",_n=(function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n})(_n||{}),ui=class{id;url;constructor(e,t){this.id=e,this.url=t}},Yo=class extends ui{type=_n.NavigationStart;navigationTrigger;restoredState;constructor(e,t,i="imperative",r=null){super(e,t),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},ns=class extends ui{urlAfterRedirects;type=_n.NavigationEnd;constructor(e,t,i){super(e,t),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},On=(function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n[n.Aborted=4]="Aborted",n})(On||{}),Kc=(function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n})(Kc||{}),Ai=class extends ui{reason;code;type=_n.NavigationCancel;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Zv(n){return n instanceof Ai&&(n.code===On.Redirect||n.code===On.SupersededByNewNavigation)}var is=class extends ui{reason;code;type=_n.NavigationSkipped;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}},Zo=class extends ui{error;target;type=_n.NavigationError;constructor(e,t,i,r){super(e,t),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Jc=class extends ui{urlAfterRedirects;state;type=_n.RoutesRecognized;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},I3=class extends ui{urlAfterRedirects;state;type=_n.GuardsCheckStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},A3=class extends ui{urlAfterRedirects;state;shouldActivate;type=_n.GuardsCheckEnd;constructor(e,t,i,r,s){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=s}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},D3=class extends ui{urlAfterRedirects;state;type=_n.ResolveStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},N3=class extends ui{urlAfterRedirects;state;type=_n.ResolveEnd;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},R3=class{route;type=_n.RouteConfigLoadStart;constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},P3=class{route;type=_n.RouteConfigLoadEnd;constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},L3=class{snapshot;type=_n.ChildActivationStart;constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},z3=class{snapshot;type=_n.ChildActivationEnd;constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},O3=class{snapshot;type=_n.ActivationStart;constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},k3=class{snapshot;type=_n.ActivationEnd;constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var o1=class{},Qc=class{},a1=class{url;navigationBehaviorOptions;constructor(e,t){this.url=e,this.navigationBehaviorOptions=t}};function vD(n){return!(n instanceof o1)&&!(n instanceof a1)&&!(n instanceof Qc)}var F3=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(e){this.rootInjector=e,this.children=new d1(this.rootInjector)}},d1=(()=>{class n{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,i){let r=this.getOrCreateContext(t);r.outlet=i,this.contexts.set(t,r)}onChildOutletDestroyed(t){let i=this.getContext(t);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let i=this.getContext(t);return i||(i=new F3(this.rootInjector),this.contexts.set(t,i)),i}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(i){return new(i||n)(Xe(fn))};static \u0275prov=et({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),U3=class{_root;constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=V5(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=V5(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=H5(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return H5(e,this._root).map(t=>t.value)}};function V5(n,e){if(n===e.value)return e;for(let t of e.children){let i=V5(n,t);if(i)return i}return null}function H5(n,e){if(n===e.value)return[e];for(let t of e.children){let i=H5(n,t);if(i.length)return i.unshift(e),i}return[]}var li=class{value;children;constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function n1(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var el=class extends U3{snapshot;constructor(e,t){super(e),this.snapshot=t,K5(this,e)}toString(){return this.snapshot.toString()}};function Kv(n,e){let t=yD(n,e),i=new wn([new Vs("",{})]),r=new wn({}),s=new wn({}),o=new wn({}),a=new wn(""),c=new Gs(i,r,o,a,s,Ze,n,t.root);return c.snapshot=t.root,new el(new li(c,[]),t)}function yD(n,e){let t={},i={},r={},o=new c1([],t,r,"",i,Ze,n,null,{},e);return new tl("",new li(o,[]))}var Gs=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;_localInjector;constructor(e,t,i,r,s,o,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(Xt(l=>l[rl]))??lt(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(Xt(e=>Xo(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(Xt(e=>Xo(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}},_D="always";function Z5(n,e,t){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:de(de({},e.params),n.params),data:de(de({},e.data),n.data),resolve:de(de(de(de({},n.data),e.data),r?.data),n._resolvedData)}:i={params:de({},n.params),data:de({},n.data),resolve:de(de({},n.data),n._resolvedData??{})},r&&Qv(r)&&(i.resolve[rl]=r.title),i}var c1=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[rl]}constructor(e,t,i,r,s,o,a,c,l,u){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Xo(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Xo(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},tl=class extends U3{url;constructor(e,t){super(t),this.url=e,K5(this,t)}toString(){return Jv(this._root)}};function K5(n,e){e.value._routerState=n,e.children.forEach(t=>K5(n,t))}function Jv(n){let e=n.children.length>0?` { ${n.children.map(Jv).join(", ")} } `:"";return`${n.value}${e}`}function L5(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,Tr(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),Tr(e.params,t.params)||n.paramsSubject.next(t.params),$A(e.url,t.url)||n.urlSubject.next(t.url),Tr(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function G5(n,e){let t=Tr(n.params,e.params)&&KA(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||G5(n.parent,e.parent))}function Qv(n){return typeof n.title=="string"||n.title===null}var ey=new Fe(""),ol=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=Ze;activateEvents=new Gn;deactivateEvents=new Gn;attachEvents=new Gn;detachEvents=new Gn;routerOutletData=$o();parentContexts=Y(d1);location=Y(Ya);changeDetector=Y(cv);inputBinder=Y(G3,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:i,previousValue:r}=t.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new oe(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new oe(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new oe(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,i){this.activated=t,this._activatedRoute=i,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,i){if(this.isActivated)throw new oe(4013,!1);this._activatedRoute=t;let r=this.location,o=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new j5(t,a,r.injector,this.routerOutletData);this.activated=r.createComponent(o,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=Lc({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Oh]})}return n})(),j5=class{route;childContexts;parent;outletData;constructor(e,t,i,r){this.route=e,this.childContexts=t,this.parent=i,this.outletData=r}get(e,t){return e===Gs?this.route:e===d1?this.childContexts:e===ey?this.outletData:this.parent.get(e,t)}},G3=new Fe("");var J5=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=kt({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&Tn(0,"router-outlet")},dependencies:[ol],encapsulation:2,changeDetection:1})}return n})();function Q5(n){let e=n.children&&n.children.map(Q5),t=e?at(de({},n),{children:e}):de({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==Ze&&(t.component=J5),t}function bD(n,e,t){let i=new Set,r=nl(n,e._root,t?t._root:void 0,i);return{newlyCreatedRoutes:i,state:new el(r,e)}}function nl(n,e,t,i){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let r=t.value;r._futureSnapshot=e.value;let s=xD(n,e,t,i);return new li(r,s)}else{if(n.shouldAttach(e.value)){let o=n.retrieve(e.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=e.value,a.children=e.children.map(c=>nl(n,c,void 0,i)),a}}let r=MD(e.value);i.add(r);let s=e.children.map(o=>nl(n,o,void 0,i));return new li(r,s)}}function xD(n,e,t,i){return e.children.map(r=>{for(let s of t.children)if(n.shouldReuseRoute(r.value,s.value.snapshot))return nl(n,r,s,i);return nl(n,r,void 0,i)})}function MD(n){return new Gs(new wn(n.url),new wn(n.params),new wn(n.queryParams),new wn(n.fragment),new wn(n.data),n.outlet,n.component,n)}var l1=class{redirectTo;navigationBehaviorOptions;constructor(e,t){this.redirectTo=e,this.navigationBehaviorOptions=t}},ty="ngNavigationCancelingError";function B3(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=s1(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=ny(!1,On.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function ny(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[ty]=!0,t.cancellationCode=e,t}function SD(n){return iy(n)&&s1(n.url)}function iy(n){return!!n&&n[ty]}var W5=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(e,t,i,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),L5(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=n1(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],i),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,i)})}deactivateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,i);else s&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=n1(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(i&&i.outlet){let o=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=n1(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null),e.value._localInjector?.destroy()}activateChildRoutes(e,t,i){let r=n1(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],i),this.forwardEvent(new k3(s.value.snapshot))}),e.children.length&&this.forwardEvent(new z3(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(L5(r),r===s)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),L5(a.route.value),this.activateChildRoutes(e,null,o.children)}else o.attachRef=null,o.route=r,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}else this.activateChildRoutes(e,null,i)}},V3=class{path;route;constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},r1=class{component;route;constructor(e,t){this.component=e,this.route=t}};function ED(n,e,t){let i=n._root,r=e?e._root:null;return $c(i,r,t,[i.value])}function wD(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function f1(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!l4(n)?n:e.get(n):i}function $c(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=n1(e);return n.children.forEach(o=>{CD(o,s[o.value.outlet],t,i.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>Yc(a,t.getContext(o),r)),r}function CD(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=n.value,o=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=TD(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new V3(i)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?$c(n,e,a?a.children:null,i,r):$c(n,e,t,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new r1(a.outlet.component,o))}else o&&Yc(e,a,r),r.canActivateChecks.push(new V3(i)),s.component?$c(n,null,a?a.children:null,i,r):$c(n,null,t,i,r);return r}function TD(n,e,t){if(typeof t=="function")return Pn(e._environmentInjector,()=>t(n,e));switch(t){case"pathParamsChange":return!qo(n.url,e.url);case"pathParamsOrQueryParamsChange":return!qo(n.url,e.url)||!Tr(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!G5(n,e)||!Tr(n.queryParams,e.queryParams);default:return!G5(n,e)}}function Yc(n,e,t){let i=n1(n),r=n.value;Object.entries(i).forEach(([s,o])=>{r.component?e?Yc(o,e.children.getContext(s),t):Yc(o,null,t):Yc(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new r1(e.outlet.component,r)):t.canDeactivateChecks.push(new r1(null,r)):t.canDeactivateChecks.push(new r1(null,r))}function al(n){return typeof n=="function"}function ID(n){return typeof n=="boolean"}function AD(n){return n&&al(n.canLoad)}function DD(n){return n&&al(n.canActivate)}function ND(n){return n&&al(n.canActivateChild)}function RD(n){return n&&al(n.canDeactivate)}function PD(n){return n&&al(n.canMatch)}function ry(n){return n instanceof wo||n?.name==="EmptyError"}var x3=Symbol("INITIAL_VALUE");function u1(){return bi(n=>q0(n.map(e=>e.pipe(Hr(1),Y0(x3)))).pipe(Xt(e=>{for(let t of e)if(t!==!0){if(t===x3)return x3;if(t===!1||LD(t))return t}return!0}),Vr(e=>e!==x3),Hr(1)))}function LD(n){return s1(n)||n instanceof l1}function sy(n){return n.aborted?lt(void 0).pipe(Hr(1)):new bt(e=>{let t=()=>{e.next(),e.complete()};return n.addEventListener("abort",t),()=>n.removeEventListener("abort",t)})}function oy(n){return J1(sy(n))}function zD(n){return Hn(e=>{let{targetSnapshot:t,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:s}}=e;return s.length===0&&r.length===0?lt(at(de({},e),{guardsResult:!0})):OD(s,t,i).pipe(Hn(o=>o&&ID(o)?kD(t,r,n):lt(o)),Xt(o=>at(de({},e),{guardsResult:o})))})}function OD(n,e,t){return an(n).pipe(Hn(i=>HD(i.component,i.route,t,e)),Gr(i=>i!==!0,!0))}function kD(n,e,t){return an(e).pipe(W2(i=>Ta(UD(i.route.parent,t),FD(i.route,t),VD(n,i.path),BD(n,i.route))),Gr(i=>i!==!0,!0))}function FD(n,e){return n!==null&&e&&e(new O3(n)),lt(!0)}function UD(n,e){return n!==null&&e&&e(new L3(n)),lt(!0)}function BD(n,e){let t=e.routeConfig?e.routeConfig.canActivate:null;if(!t||t.length===0)return lt(!0);let i=t.map(r=>Z1(()=>{let s=e._environmentInjector,o=f1(r,s),a=DD(o)?o.canActivate(e,n):Pn(s,()=>o(e,n));return Ko(a).pipe(Gr())}));return lt(i).pipe(u1())}function VD(n,e){let t=e[e.length-1],r=e.slice(0,e.length-1).reverse().map(s=>wD(s)).filter(s=>s!==null).map(s=>Z1(()=>{let o=s.guards.map(a=>{let c=s.node._environmentInjector,l=f1(a,c),u=ND(l)?l.canActivateChild(t,n):Pn(c,()=>l(t,n));return Ko(u).pipe(Gr())});return lt(o).pipe(u1())}));return lt(r).pipe(u1())}function HD(n,e,t,i){let r=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!r||r.length===0)return lt(!0);let s=r.map(o=>{let a=e._environmentInjector,c=f1(o,a),l=RD(c)?c.canDeactivate(n,e,t,i):Pn(a,()=>c(n,e,t,i));return Ko(l).pipe(Gr())});return lt(s).pipe(u1())}function GD(n,e,t,i,r){let s=e.canLoad;if(s===void 0||s.length===0)return lt(!0);let o=s.map(a=>{let c=f1(a,n),l=AD(c)?c.canLoad(e,t):Pn(n,()=>c(e,t)),u=Ko(l);return r?u.pipe(oy(r)):u});return lt(o).pipe(u1(),ay(i))}function ay(n){return G0(xi(e=>{if(typeof e!="boolean")throw B3(n,e)}),Xt(e=>e===!0))}function jD(n,e,t,i,r,s){let o=e.canMatch;if(!o||o.length===0)return lt(!0);let a=o.map(c=>{let l=f1(c,n),u=PD(l)?l.canMatch(e,t,r):Pn(n,()=>l(e,t,r));return Ko(u).pipe(oy(s))});return lt(a).pipe(u1(),ay(i))}var ts=class n extends Error{segmentGroup;constructor(e){super(),this.segmentGroup=e||null,Object.setPrototypeOf(this,n.prototype)}},il=class n extends Error{urlTree;constructor(e){super(),this.urlTree=e,Object.setPrototypeOf(this,n.prototype)}};function WD(n){throw new oe(4e3,!1)}function $D(n){throw ny(!1,On.GuardRejected)}var $5=class{urlSerializer;urlTree;constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){return Mt(this,null,function*(){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[Ze])throw WD(`${e.redirectTo}`);r=r.children[Ze]}})}applyRedirectCommands(e,t,i,r,s){return Mt(this,null,function*(){let o=yield qD(t,r,s);if(o instanceof Di)throw new il(o);let a=this.applyRedirectCreateUrlTree(o,this.urlSerializer.parse(o),e,i);if(o[0]==="/")throw new il(a);return a})}applyRedirectCreateUrlTree(e,t,i,r){let s=this.createSegmentGroup(e,t.root,i,r);return new Di(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s[0]===":"){let a=s.substring(1);i[r]=t[a]}else i[r]=s}),i}createSegmentGroup(e,t,i,r){let s=this.createSegments(e,t.segments,i,r),o={};return Object.entries(t.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(e,c,i,r)}),new xt(s,o)}createSegments(e,t,i,r){return t.map(s=>s.path[0]===":"?this.findPosParam(e,s,r):this.findOrReturn(s,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new oe(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}};function qD(n,e,t){if(typeof n=="string")return Promise.resolve(n);let i=n;return w3(Ko(Pn(t,()=>i(e))))}function XD(n,e){return n.providers&&!n._injector&&(n._injector=Rc(n.providers,e,`Route: ${n.path}`)),n._injector??e}function Ji(n){return n.outlet||Ze}function YD(n,e){let t=n.filter(i=>Ji(i)===e);return t.push(...n.filter(i=>Ji(i)!==e)),t}var q5={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function cy(n){return{routeConfig:n.routeConfig,url:n.url,params:n.params,queryParams:n.queryParams,fragment:n.fragment,data:n.data,outlet:n.outlet,title:n.title,paramMap:n.paramMap,queryParamMap:n.queryParamMap}}function ZD(n,e,t,i,r,s,o){let a=ly(n,e,t);if(!a.matched)return lt(a);let c=cy(s(a));return i=XD(e,i),jD(i,e,t,r,c,o).pipe(Xt(l=>l===!0?a:de({},q5)))}function ly(n,e,t){if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?de({},q5):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||Pv)(t,n,e);if(!r)return de({},q5);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?de(de({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function Dv(n,e,t,i,r){return t.length>0&&QD(n,t,i,r)?{segmentGroup:new xt(e,JD(i,new xt(t,n.children))),slicedSegments:[]}:t.length===0&&eN(n,t,i)?{segmentGroup:new xt(n.segments,KD(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new xt(n.segments,n.children),slicedSegments:t}}function KD(n,e,t,i){let r={};for(let s of t)if(j3(n,e,s)&&!i[Ji(s)]){let o=new xt([],{});r[Ji(s)]=o}return de(de({},i),r)}function JD(n,e){let t={};t[Ze]=e;for(let i of n)if(i.path===""&&Ji(i)!==Ze){let r=new xt([],{});t[Ji(i)]=r}return t}function QD(n,e,t,i){return t.some(r=>!j3(n,e,r)||!(Ji(r)!==Ze)?!1:!(i!==void 0&&Ji(r)===i))}function eN(n,e,t){return t.some(i=>j3(n,e,i))}function j3(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function tN(n,e,t){return e.length===0&&!n.children[t]}var X5=class{};function nN(n,e,t,i,r,s,o,a){return Mt(this,null,function*(){return new Y5(n,e,t,i,r,o,s,a).recognize()})}var iN=31,Y5=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(e,t,i,r,s,o,a,c){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.abortSignal=c,this.applyRedirects=new $5(this.urlSerializer,this.urlTree)}noMatchError(e){return new oe(4002,`'${e.segmentGroup}'`)}recognize(){return Mt(this,null,function*(){let e=Dv(this.urlTree.root,[],[],this.config).segmentGroup,{children:t,rootSnapshot:i}=yield this.match(e),r=new li(i,t),s=new tl("",r),o=Wv(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),{state:s,tree:o}})}match(e){return Mt(this,null,function*(){let t=new c1([],Object.freeze({}),Object.freeze(de({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),Ze,this.rootComponentType,null,{},this.injector);try{return{children:yield this.processSegmentGroup(this.injector,this.config,e,Ze,t),rootSnapshot:t}}catch(i){if(i instanceof il)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof ts?this.noMatchError(i):i}})}processSegmentGroup(e,t,i,r,s){return Mt(this,null,function*(){if(i.segments.length===0&&i.hasChildren())return this.processChildren(e,t,i,s);let o=yield this.processSegment(e,t,i,i.segments,r,!0,s);return o instanceof li?[o]:[]})}processChildren(e,t,i,r){return Mt(this,null,function*(){let s=[];for(let c of Object.keys(i.children))c==="primary"?s.unshift(c):s.push(c);let o=[];for(let c of s){let l=i.children[c],u=YD(t,c),d=yield this.processSegmentGroup(e,u,l,c,r);o.push(...d)}let a=uy(o);return rN(a),a})}processSegment(e,t,i,r,s,o,a){return Mt(this,null,function*(){for(let c of t)try{return yield this.processSegmentAgainstRoute(c._injector??e,t,c,i,r,s,o,a)}catch(l){if(l instanceof ts||ry(l))continue;throw l}if(tN(i,r,s))return new X5;throw new ts(i)})}processSegmentAgainstRoute(e,t,i,r,s,o,a,c){return Mt(this,null,function*(){if(Ji(i)!==o&&(o===Ze||!j3(r,s,i)))throw new ts(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(e,r,i,s,o,c);if(this.allowRedirects&&a)return this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,s,o,c);throw new ts(r)})}expandSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o,a){return Mt(this,null,function*(){let{matched:c,parameters:l,consumedSegments:u,positionalParamSegments:d,remainingSegments:f}=ly(t,r,s);if(!c)throw new ts(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>iN&&(this.allowRedirects=!1));let h=this.createSnapshot(e,r,s,l,a);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let p=yield this.applyRedirects.applyRedirectCommands(u,r.redirectTo,d,cy(h),e),y=yield this.applyRedirects.lineralizeSegments(r,p);return this.processSegment(e,i,t,y.concat(f),o,!1,a)})}createSnapshot(e,t,i,r,s){let o=new c1(i,r,Object.freeze(de({},this.urlTree.queryParams)),this.urlTree.fragment,oN(t),Ji(t),t.component??t._loadedComponent??null,t,aN(t),e),a=Z5(o,s,this.paramsInheritanceStrategy);return o.params=Object.freeze(a.params),o.data=Object.freeze(a.data),o}matchSegmentAgainstRoute(e,t,i,r,s,o){return Mt(this,null,function*(){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let a=S=>this.createSnapshot(e,i,S.consumedSegments,S.parameters,o),c=yield w3(ZD(t,i,r,e,this.urlSerializer,a,this.abortSignal));if(i.path==="**"&&(t.children={}),!c?.matched)throw new ts(t);e=i._injector??e;let{routes:l}=yield this.getChildConfig(e,i,r),u=i._loadedInjector??e,{parameters:d,consumedSegments:f,remainingSegments:h}=c,p=this.createSnapshot(e,i,f,d,o),{segmentGroup:y,slicedSegments:m}=Dv(t,f,h,l,s);if(m.length===0&&y.hasChildren()){let S=yield this.processChildren(u,l,y,p);return new li(p,S)}if(l.length===0&&m.length===0)return new li(p,[]);let g=Ji(i)===s,M=yield this.processSegment(u,l,y,m,g?Ze:s,!0,p);return new li(p,M instanceof li?[M]:[])})}getChildConfig(e,t,i){return Mt(this,null,function*(){if(t.children)return{routes:t.children,injector:e};if(t.loadChildren){if(t._loadedRoutes!==void 0){let s=t._loadedNgModuleFactory;return s&&!t._loadedInjector&&(t._loadedInjector=s.create(e).injector),{routes:t._loadedRoutes,injector:t._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(yield w3(GD(e,t,i,this.urlSerializer,this.abortSignal))){let s=yield this.configLoader.loadChildren(e,t);return t._loadedRoutes=s.routes,t._loadedInjector=s.injector,t._loadedNgModuleFactory=s.factory,s}throw $D(t)}return{routes:[],injector:e}})}};function rN(n){n.sort((e,t)=>e.value.outlet===Ze?-1:t.value.outlet===Ze?1:e.value.outlet.localeCompare(t.value.outlet))}function sN(n){let e=n.value.routeConfig;return e&&e.path===""}function uy(n){let e=[],t=new Set;for(let i of n){if(!sN(i)){e.push(i);continue}let r=e.find(s=>i.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=uy(i.children);e.push(new li(i.value,r))}return e.filter(i=>!t.has(i))}function oN(n){return n.data||{}}function aN(n){return n.resolve||{}}function cN(n,e,t,i,r,s,o){return Hn(a=>Mt(null,null,function*(){let{state:c,tree:l}=yield nN(n,e,t,i,a.extractedUrl,r,s,o);return at(de({},a),{targetSnapshot:c,urlAfterRedirects:l})}))}function lN(n){return Hn(e=>{let{targetSnapshot:t,guards:{canActivateChecks:i}}=e;if(!i.length)return lt(e);let r=new Set(i.map(a=>a.route)),s=new Set;for(let a of r)if(!s.has(a))for(let c of dy(a))s.add(c);let o=0;return an(s).pipe(W2(a=>r.has(a)?uN(a,t,n):(a.data=Z5(a,a.parent,n).resolve,lt(void 0))),xi(()=>o++),$2(1),Hn(a=>o===s.size?lt(e):Cn))})}function dy(n){let e=n.children.map(t=>dy(t)).flat();return[n,...e]}function uN(n,e,t){let i=n.routeConfig,r=n._resolve;return i?.title!==void 0&&!Qv(i)&&(r[rl]=i.title),Z1(()=>(n.data=Z5(n,n.parent,t).resolve,dN(r,n,e).pipe(Xt(s=>(n._resolvedData=s,n.data=de(de({},n.data),s),null)))))}function dN(n,e,t){let i=O5(n);if(i.length===0)return lt({});let r={};return an(i).pipe(Hn(s=>fN(n[s],e,t).pipe(Gr(),xi(o=>{if(o instanceof l1)throw B3(new Hs,o);r[s]=o}))),$2(1),Xt(()=>r),K1(s=>ry(s)?Cn:$0(s)))}function fN(n,e,t){let i=e._environmentInjector,r=f1(n,i),s=r.resolve?r.resolve(e,t):Pn(i,()=>r(e,t));return Ko(s)}function Nv(n){return bi(e=>{let t=n(e);return t?an(t).pipe(Xt(()=>e)):lt(e)})}var ep=(()=>{class n{buildTitle(t){let i,r=t.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(s=>s.outlet===Ze);return i}getResolvedTitleForRoute(t){return t.data[rl]}static \u0275fac=function(i){return new(i||n)};static \u0275prov=nn({token:n,factory:()=>Y(fy)})}return n})(),fy=(()=>{class n extends ep{title;constructor(t){super(),this.title=t}updateTitle(t){let i=this.buildTitle(t);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||n)(Xe(Ev))};static \u0275prov=et({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),cl=new Fe("",{factory:()=>({})}),ll=new Fe(""),hy=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=Y(g5);loadComponent(t,i){return Mt(this,null,function*(){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=Mt(this,null,function*(){try{let s=yield zv(Pn(t,()=>i.loadComponent())),o=yield my(_5(s));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=o,o}finally{this.componentLoaders.delete(i)}});return this.componentLoaders.set(i,r),r})}loadChildren(t,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=Mt(this,null,function*(){try{let s=yield py(i,this.compiler,t,this.onLoadEndListener);return i._loadedRoutes=s.routes,i._loadedInjector=s.injector,i._loadedNgModuleFactory=s.factory,s}finally{this.childrenLoaders.delete(i)}});return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||n)};static \u0275prov=nn({token:n,factory:n.\u0275fac})}return n})();function py(n,e,t,i){return Mt(this,null,function*(){let r=yield zv(Pn(t,()=>n.loadChildren())),s=yield my(_5(r)),o;s instanceof c3||Array.isArray(s)?o=s:o=yield e.compileModuleAsync(s),i&&i(n);let a,c,l=!1,u;return Array.isArray(o)?(c=o,l=!0):(a=o.create(t).injector,u=o,c=a.get(ll,[],{optional:!0,self:!0}).flat()),{routes:c.map(Q5),injector:a,factory:u}})}function my(n){return Mt(this,null,function*(){return n})}var W3=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=nn({token:n,factory:()=>Y(hN)})}return n})(),hN=(()=>{class n{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,i){return t}static \u0275fac=function(i){return new(i||n)};static \u0275prov=nn({token:n,factory:n.\u0275fac})}return n})(),gy=new Fe("");var vy=new Fe(""),pN=()=>{},yy=new Fe(""),_y=(()=>{class n{currentNavigation=Gi(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=Gi(null);events=new En;transitionAbortWithErrorSubject=new En;configLoader=Y(hy);environmentInjector=Y(fn);destroyRef=Y(Hi);urlSerializer=Y(sl);rootContexts=Y(d1);location=Y(e1);inputBindingEnabled=Y(G3,{optional:!0})!==null;titleStrategy=Y(ep);options=Y(cl,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||_D;urlHandlingStrategy=Y(W3);createViewTransition=Y(gy,{optional:!0});navigationErrorHandler=Y(yy,{optional:!0});activatedRouteInjectorFeature=Y(vy,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>lt(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=r=>this.events.next(new R3(r)),i=r=>this.events.next(new P3(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let i=++this.navigationId;Us(()=>{this.transitions?.next(at(de({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(t){return this.transitions=new wn(null),this.transitions.pipe(Vr(i=>i!==null),bi(i=>{let r=!0,s=!1,o=new AbortController,a=()=>!s&&this.currentTransition?.id===i.id;return lt(i).pipe(bi(c=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",On.SupersededByNewNavigation),Cn;this.currentTransition=i;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:c.id,initialUrl:c.rawUrl,extractedUrl:c.extractedUrl,targetBrowserUrl:typeof c.extras.browserUrl=="string"?this.urlSerializer.parse(c.extras.browserUrl):c.extras.browserUrl,trigger:c.source,extras:c.extras,previousNavigation:l?at(de({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:c.routesRecognizeHandler,beforeActivateHandler:c.beforeActivateHandler});let u=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=c.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!u&&d!=="reload")return this.events.next(new is(c.id,this.urlSerializer.serialize(c.rawUrl),"",Kc.IgnoredSameUrlNavigation)),c.resolve(!1),Cn;if(this.urlHandlingStrategy.shouldProcessUrl(c.rawUrl))return lt(c).pipe(bi(f=>(this.events.next(new Yo(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),f.id!==this.navigationId?Cn:Promise.resolve(f))),cN(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),xi(f=>{i.targetSnapshot=f.targetSnapshot,i.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation.update(h=>(h.finalUrl=f.urlAfterRedirects,h)),this.events.next(new Qc)}),bi(f=>an(i.routesRecognizeHandler.deferredHandle??lt(void 0)).pipe(Xt(()=>f))),xi(()=>{let f=new Jc(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(f)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(c.currentRawUrl)){let{id:f,extractedUrl:h,source:p,restoredState:y,extras:m}=c,g=new Yo(f,this.urlSerializer.serialize(h),p,y);this.events.next(g);let M=Kv(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=at(de({},c),{targetSnapshot:M,urlAfterRedirects:h,extras:at(de({},m),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(S=>(S.finalUrl=h,S)),lt(i)}else return this.events.next(new is(c.id,this.urlSerializer.serialize(c.extractedUrl),"",Kc.IgnoredByUrlHandlingStrategy)),c.resolve(!1),Cn}),Xt(c=>{let l=new I3(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);return this.events.next(l),this.currentTransition=i=at(de({},c),{guards:ED(c.targetSnapshot,c.currentSnapshot,this.rootContexts)}),i}),zD(c=>this.events.next(c)),bi(c=>{if(i.guardsResult=c.guardsResult,c.guardsResult&&typeof c.guardsResult!="boolean")throw B3(this.urlSerializer,c.guardsResult);let l=new A3(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot,!!c.guardsResult);if(this.events.next(l),!a())return Cn;if(!c.guardsResult)return this.cancelNavigationTransition(c,"",On.GuardRejected),Cn;if(c.guards.canActivateChecks.length===0)return lt(c);let u=new D3(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);if(this.events.next(u),!a())return Cn;let d=!1;return lt(c).pipe(lN(this.paramsInheritanceStrategy),xi({next:()=>{d=!0;let f=new N3(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(f)},complete:()=>{d||this.cancelNavigationTransition(c,"",On.NoDataFromResolver)}}))}),Nv(c=>{let l=d=>{let f=[];if(d.routeConfig?._loadedComponent)d.component=d.routeConfig?._loadedComponent;else if(d.routeConfig?.loadComponent){let h=d._environmentInjector;f.push(this.configLoader.loadComponent(h,d.routeConfig).then(p=>{d.component=p}))}for(let h of d.children)f.push(...l(h));return f},u=l(c.targetSnapshot.root);return u.length===0?lt(c):an(Promise.all(u).then(()=>c))}),bi(c=>{let{newlyCreatedRoutes:l,state:u}=bD(t.routeReuseStrategy,c.targetSnapshot,c.currentRouterState);return this.currentTransition=i=c=at(de({},c),{targetRouterState:u,newlyCreatedRoutes:l}),this.currentNavigation.update(d=>(d.targetRouterState=u,d)),lt(c)}),this.activatedRouteInjectorFeature?.operator()??(c=>c),Nv(()=>this.afterPreactivation()),bi(()=>{let{currentSnapshot:c,targetSnapshot:l}=i,u=this.createViewTransition?.(this.environmentInjector,c.root,l.root);return u?an(u).pipe(Xt(()=>i)):lt(i)}),Hr(1),bi(c=>{r=!1,this.events.next(new o1);let l=i.beforeActivateHandler.deferredHandle;return l?an(l.then(()=>c)):lt(c)}),xi(c=>{new W5(t.routeReuseStrategy,i.targetRouterState,i.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),c.newlyCreatedRoutes?.clear(),a()&&(s=!0,this.currentNavigation.update(l=>(l.abort=pN,l)),this.lastSuccessfulNavigation.set(Us(this.currentNavigation)),this.events.next(new ns(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects))),this.titleStrategy?.updateTitle(c.targetRouterState.snapshot),c.resolve(!0))}),J1(sy(o.signal).pipe(Vr(()=>!s&&r),xi(()=>{this.cancelNavigationTransition(i,o.signal.reason+"",On.Aborted)}))),xi({complete:()=>{s=!0}}),J1(this.transitionAbortWithErrorSubject.pipe(xi(c=>{throw c}))),X0(()=>{o.abort(),s||this.cancelNavigationTransition(i,"",On.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),K1(c=>{if(s=!0,Rv(i),this.destroyed)return i.resolve(!1),Cn;if(iy(c))this.events.next(new Ai(i.id,this.urlSerializer.serialize(i.extractedUrl),c.message,c.cancellationCode)),SD(c)?this.events.next(new a1(c.url,c.navigationBehaviorOptions)):i.resolve(!1);else{let l=new Zo(i.id,this.urlSerializer.serialize(i.extractedUrl),c,i.targetSnapshot??void 0);try{let u=Pn(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(u instanceof l1){let{message:d,cancellationCode:f}=B3(this.urlSerializer,u);this.events.next(new Ai(i.id,this.urlSerializer.serialize(i.extractedUrl),d,f)),this.events.next(new a1(u.redirectTo,u.navigationBehaviorOptions))}else throw this.events.next(l),c}catch(u){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(u)}}return Cn}))}))}cancelNavigationTransition(t,i,r){Rv(t);let s=new Ai(t.id,this.urlSerializer.serialize(t.extractedUrl),i,r);this.events.next(s),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=Us(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return t.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||n)};static \u0275prov=nn({token:n,factory:n.\u0275fac})}return n})();function mN(n){return n!==Xc}function Rv(n){if(n.newlyCreatedRoutes)for(let e of n.newlyCreatedRoutes)e._localInjector?.destroy()}var by=new Fe("");var xy=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=nn({token:n,factory:()=>Y(gN)})}return n})(),H3=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}shouldDestroyInjector(e){return!0}},gN=(()=>{class n extends H3{static \u0275fac=function(i){return new(i||n)};static \u0275prov=nn({token:n,factory:n.\u0275fac})}return n})(),tp=(()=>{class n{urlSerializer=Y(sl);options=Y(cl,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=Y(e1);urlHandlingStrategy=Y(W3);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Di;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:t,initialUrl:i,targetBrowserUrl:r}){let s=t!==void 0?this.urlHandlingStrategy.merge(t,i):i,o=r??s;return o instanceof Di?this.urlSerializer.serialize(o):o}routerUrlState(t){return t?.targetBrowserUrl===void 0||t?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(t.finalUrl)}}commitTransition({targetRouterState:t,finalUrl:i,initialUrl:r}){i&&t?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=t):this.rawUrlTree=r}routerState=Kv(null,Y(fn));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=nn({token:n,factory:()=>Y(vN)})}return n})(),vN=(()=>{class n extends tp{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{t(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(t,i){t instanceof Yo?this.updateStateMemento():t instanceof is?this.commitTransition(i):t instanceof Jc?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof o1?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof Ai&&!Zv(t)?this.restoreHistory(i):t instanceof Zo?this.restoreHistory(i,!0):t instanceof ns&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,i){let{extras:r,id:s}=i,{replaceUrl:o,state:a}=r;if(this.location.isCurrentPathEqualTo(t)||o){let c=this.browserPageId,l=de(de({},a),this.generateNgRouterState(s,c,i));this.location.replaceState(t,"",l)}else{let c=de(de({},a),this.generateNgRouterState(s,this.browserPageId+1,i));this.location.go(t,"",c)}}restoreHistory(t,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,s=this.currentPageId-r;s!==0?this.location.historyGo(s):this.getCurrentUrlTree()===t.finalUrl&&s===0&&(this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:t}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,i,r){return this.canceledNavigationResolution==="computed"?de({navigationId:t,\u0275routerPageId:i},this.routerUrlState(r)):de({navigationId:t},this.routerUrlState(r))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=nn({token:n,factory:n.\u0275fac})}return n})();function np(n,e){n.events.pipe(Vr(t=>t instanceof ns||t instanceof Ai||t instanceof Zo||t instanceof is),Xt(t=>t instanceof ns||t instanceof is?0:(t instanceof Ai?t.code===On.Redirect||t.code===On.SupersededByNewNavigation:!1)?2:1),Vr(t=>t!==2),Hr(1)).subscribe(()=>{e()})}var $3=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=Y(l3);stateManager=Y(tp);options=Y(cl,{optional:!0})||{};pendingTasks=Y(Xr);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=Y(_y);urlSerializer=Y(sl);location=Y(e1);urlHandlingStrategy=Y(W3);injector=Y(fn);_events=new En;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=Y(xy);injectorCleanup=Y(by,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=Y(ll,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!Y(G3,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new dn;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,s=Us(this.navigationTransitions.currentNavigation);if(r!==null&&s!==null){if(this.stateManager.handleRouterEvent(i,s),i instanceof Ai&&i.code!==On.Redirect&&i.code!==On.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof ns)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof a1){let o=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=de({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||mN(r.source)},o);this.scheduleNavigation(a,Xc,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}vD(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Xc,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,i,r,s)=>{this.navigateToSyncWithBrowser(t,r,i,s)})}navigateToSyncWithBrowser(t,i,r,s){let o=r?.navigationId?r:null,a=r?.\u0275routerUrl??t;if(r?.\u0275routerUrl&&(s=at(de({},s),{browserUrl:t})),r){let l=de({},r);delete l.navigationId,delete l.\u0275routerPageId,delete l.\u0275routerUrl,Object.keys(l).length!==0&&(s.state=l)}let c=this.parseUrl(a);this.scheduleNavigation(c,i,o,s).catch(l=>{this.disposed||this.injector.get(xr)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Us(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(Q5),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,i={}){let{relativeTo:r,queryParams:s,fragment:o,queryParamsHandling:a,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:o,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=de(de({},this.currentUrlTree.queryParams),s);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=s||null}u!==null&&(u=this.removeEmptyProps(u));let d;try{let f=r?r.snapshot:this.routerState.snapshot.root;d=$v(f)}catch(f){(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),d=this.currentUrlTree.root}return qv(d,t,u,l??null,this.urlSerializer)}navigateByUrl(t,i={skipLocationChange:!1}){let r=s1(t)?t:this.parseUrl(t),s=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(s,Xc,null,i)}navigate(t,i={skipLocationChange:!1}){return yN(t),this.navigateByUrl(this.createUrlTree(t,i),i)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch(i){return this.console.warn(Cs(4018,!1)),this.urlSerializer.parse("/")}}isActive(t,i){let r;if(i===!0?r=de({},kv):i===!1?r=de({},k5):r=de(de({},k5),i),s1(t))return wv(this.currentUrlTree,t,r);let s=this.parseUrl(t);return wv(this.currentUrlTree,s,r)}removeEmptyProps(t){return Object.entries(t).reduce((i,[r,s])=>(s!=null&&(i[r]=s),i),{})}scheduleNavigation(t,i,r,s,o){if(this.disposed)return Promise.resolve(!1);let a,c,l;o?(a=o.resolve,c=o.reject,l=o.promise):l=new Promise((d,f)=>{a=d,c=f});let u=this.pendingTasks.add();return np(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:s,resolve:a,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=nn({token:n,factory:n.\u0275fac})}return n})();function yN(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new oe(4008,!1)}var xN=new Fe("");function ip(n,...e){return Pa([{provide:ll,multi:!0,useValue:n},{provide:Gs,useFactory:MN},{provide:zc,multi:!0,useFactory:SN},e.map(t=>t.\u0275providers)])}function MN(){return Y($3).routerState.root}function SN(){let n=Y(Mi);return e=>{let t=n.get(Fs);if(e!==t.components[0])return;let i=n.get($3),r=n.get(EN);n.get(wN)===1&&i.initialNavigation(),n.get(CN,null,{optional:!0})?.setUpPreloading(),n.get(xN,null,{optional:!0})?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var EN=new Fe("",{factory:()=>new En}),wN=new Fe("",{factory:()=>1});var CN=new Fe("");var Hy=0,kp=1,Gy=2;var Ul=1,jy=2,N1=3,ds=0,Xn=1,Lr=2,zr=0,ra=1,Fp=2,Up=3,Bp=4,Wy=5;var Ks=100,$y=101,qy=102,Xy=103,Yy=104,Zy=200,Ky=201,Jy=202,Qy=203,gd=204,vd=205,e_=206,t_=207,n_=208,i_=209,r_=210,s_=211,o_=212,a_=213,c_=214,yd=0,_d=1,bd=2,sa=3,xd=4,Md=5,Sd=6,Ed=7,Vp=0,l_=1,u_=2,ir=0,Hp=1,Gp=2,jp=3,Wp=4,$p=5,qp=6,Xp=7;var Tp=300,io=301,aa=302,qd=303,Xd=304,Bl=306,wd=1e3,Dr=1001,Cd=1002,Mn=1003,d_=1004;var Vl=1005;var In=1006,Yd=1007;var ro=1008;var vi=1009,Yp=1010,Zp=1011,R1=1012,Zd=1013,rr=1014,sr=1015,Or=1016,Kd=1017,Jd=1018,P1=1020,Kp=35902,Jp=35899,Qp=1021,e6=1022,Ri=1023,Nr=1026,so=1027,t6=1028,Qd=1029,oo=1030,ef=1031;var tf=1033,Hl=33776,Gl=33777,jl=33778,Wl=33779,nf=35840,rf=35841,sf=35842,of=35843,af=36196,cf=37492,lf=37496,uf=37488,df=37489,$l=37490,ff=37491,hf=37808,pf=37809,mf=37810,gf=37811,vf=37812,yf=37813,_f=37814,bf=37815,xf=37816,Mf=37817,Sf=37818,Ef=37819,wf=37820,Cf=37821,Tf=36492,If=36494,Af=36495,Df=36283,Nf=36284,ql=36285,Rf=36286;var ml=2300,Td=2301,md=2302,Ip=2303,Ap=2400,Dp=2401,Np=2402;var f_=3200;var n6=0,h_=1,ps="",hi="srgb",gl="srgb-linear",vl="linear",Ct="srgb";var na=7680;var Rp=519,p_=512,m_=513,g_=514,Pf=515,v_=516,y_=517,Lf=518,__=519,Pp=35044;var i6="300 es",nr=2e3,yl=2001;function IN(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function AN(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function _l(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function b_(){let n=_l("canvas");return n.style.display="block",n}var My={},C1=null;function r6(...n){let e="THREE."+n.shift();C1?C1("log",e,...n):console.log(e,...n)}function x_(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ve(...n){n=x_(n);let e="THREE."+n.shift();if(C1)C1("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function He(...n){n=x_(n);let e="THREE."+n.shift();if(C1)C1("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ia(...n){let e=n.join(" ");e in My||(My[e]=!0,Ve(...n))}function M_(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var S_={[yd]:_d,[bd]:Sd,[xd]:Ed,[sa]:Md,[_d]:yd,[Sd]:bd,[Ed]:xd,[Md]:sa},Rr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var rp=Math.PI/180,Id=180/Math.PI;function Xl(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kn[n&255]+kn[n>>8&255]+kn[n>>16&255]+kn[n>>24&255]+"-"+kn[e&255]+kn[e>>8&255]+"-"+kn[e>>16&15|64]+kn[e>>24&255]+"-"+kn[t&63|128]+kn[t>>8&255]+"-"+kn[t>>16&255]+kn[t>>24&255]+kn[i&255]+kn[i>>8&255]+kn[i>>16&255]+kn[i>>24&255]).toLowerCase()}function ft(n,e,t){return Math.max(e,Math.min(t,n))}function DN(n,e){return(n%e+e)%e}function sp(n,e,t){return(1-t)*n+t*e}function ul(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Qn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ht=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Pr=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],h=s[o+1],p=s[o+2],y=s[o+3];if(d!==y||c!==f||l!==h||u!==p){let m=c*f+l*h+u*p+d*y;m<0&&(f=-f,h=-h,p=-p,y=-y,m=-m);let g=1-a;if(m<.9995){let M=Math.acos(m),S=Math.sin(M);g=Math.sin(g*M)/S,a=Math.sin(a*M)/S,c=c*g+f*a,l=l*g+h*a,u=u*g+p*a,d=d*g+y*a}else{c=c*g+f*a,l=l*g+h*a,u=u*g+p*a,d=d*g+y*a;let M=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=M,l*=M,u*=M,d*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],f=s[o+1],h=s[o+2],p=s[o+3];return e[t]=a*p+u*d+c*h-l*f,e[t+1]=c*p+u*f+l*d-a*h,e[t+2]=l*p+u*h+a*f-c*d,e[t+3]=u*p-a*d-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),f=c(i/2),h=c(r/2),p=c(s/2);switch(o){case"XYZ":this._x=f*u*d+l*h*p,this._y=l*h*d-f*u*p,this._z=l*u*p+f*h*d,this._w=l*u*d-f*h*p;break;case"YXZ":this._x=f*u*d+l*h*p,this._y=l*h*d-f*u*p,this._z=l*u*p-f*h*d,this._w=l*u*d+f*h*p;break;case"ZXY":this._x=f*u*d-l*h*p,this._y=l*h*d+f*u*p,this._z=l*u*p+f*h*d,this._w=l*u*d-f*h*p;break;case"ZYX":this._x=f*u*d-l*h*p,this._y=l*h*d+f*u*p,this._z=l*u*p-f*h*d,this._w=l*u*d+f*h*p;break;case"YZX":this._x=f*u*d+l*h*p,this._y=l*h*d+f*u*p,this._z=l*u*p-f*h*d,this._w=l*u*d-f*h*p;break;case"XZY":this._x=f*u*d-l*h*p,this._y=l*h*d-f*u*p,this._z=l*u*p+f*h*d,this._w=l*u*d+f*h*p;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(s-l)*h,this._z=(o-r)*h}else if(i>a&&i>d){let h=2*Math.sqrt(1+i-a-d);this._w=(u-c)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+l)/h}else if(a>d){let h=2*Math.sqrt(1+a-i-d);this._w=(s-l)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(c+u)/h}else{let h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sy.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sy.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return op.copy(this).projectOnVector(e),this.sub(op)}reflect(e){return this.sub(op.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},op=new F,Sy=new Pr,qe=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,r,s,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],h=i[5],p=i[8],y=r[0],m=r[3],g=r[6],M=r[1],S=r[4],x=r[7],T=r[2],w=r[5],I=r[8];return s[0]=o*y+a*M+c*T,s[3]=o*m+a*S+c*w,s[6]=o*g+a*x+c*I,s[1]=l*y+u*M+d*T,s[4]=l*m+u*S+d*w,s[7]=l*g+u*x+d*I,s[2]=f*y+h*M+p*T,s[5]=f*m+h*S+p*w,s[8]=f*g+h*x+p*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*s,h=l*s-o*c,p=t*d+i*f+r*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return e[0]=d*y,e[1]=(r*l-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(u*t-r*c)*y,e[5]=(r*s-a*t)*y,e[6]=h*y,e[7]=(i*c-l*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return ia("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ap.makeScale(e,t)),this}rotate(e){return ia("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ap.makeRotation(-e)),this}translate(e,t){return ia("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ap.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ap=new qe,Ey=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wy=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function NN(){let n={enabled:!0,workingColorSpace:gl,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Ct&&(r.r=us(r.r),r.g=us(r.g),r.b=us(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ct&&(r.r=w1(r.r),r.g=w1(r.g),r.b=w1(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ps?vl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ia("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ia("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[gl]:{primaries:e,whitePoint:i,transfer:vl,toXYZ:Ey,fromXYZ:wy,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:e,whitePoint:i,transfer:Ct,toXYZ:Ey,fromXYZ:wy,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),n}var dt=NN();function us(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function w1(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var h1,Ad=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{h1===void 0&&(h1=_l("canvas")),h1.width=e.width,h1.height=e.height;let r=h1.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=h1}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=_l("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=us(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(us(t[i]/255)*255):t[i]=us(t[i]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},RN=0,T1=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:RN++}),this.uuid=Xl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(cp(r[o].image)):s.push(cp(r[o]))}else s=cp(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function cp(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ad.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}var PN=0,lp=new F,ms=(()=>{class n extends Rr{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=Dr,s=Dr,o=In,a=ro,c=Ri,l=vi,u=n.DEFAULT_ANISOTROPY,d=ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:PN++}),this.uuid=Xl(),this.name="",this.source=new T1(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(lp).x}get height(){return this.source.getSize(lp).y}get depth(){return this.source.getSize(lp).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){Ve(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let s=this[i];if(s===void 0){Ve(`Texture.setValues(): property '${i}' does not exist.`);continue}s&&r&&s.isVector2&&r.isVector2||s&&r&&s.isVector3&&r.isVector3||s&&r&&s.isMatrix3&&r.isMatrix3?s.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Tp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wd:t.x=t.x-Math.floor(t.x);break;case Dr:t.x=t.x<0?0:1;break;case Cd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wd:t.y=t.y-Math.floor(t.y);break;case Dr:t.y=t.y<0?0:1;break;case Cd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=Tp,n.DEFAULT_ANISOTROPY=1,n})(),jt=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],p=c[9],y=c[2],m=c[6],g=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(p+m)<.1&&Math.abs(l+h+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,x=(h+1)/2,T=(g+1)/2,w=(u+f)/4,I=(d+y)/4,_=(p+m)/4;return S>x&&S>T?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=w/i,s=I/i):x>T?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=w/r,s=_/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=I/s,r=_/s),this.set(i,r,s,t),this}let M=Math.sqrt((m-p)*(m-p)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-p)/M,this.y=(d-y)/M,this.z=(f-u)/M,this.w=Math.acos((l+h+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Dd=class extends Rr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new jt(0,0,e,t),this.scissorTest=!1,this.viewport=new jt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},s=new ms(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new T1(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},pi=class extends Dd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},bl=class extends ms{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Nd=class extends ms{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Kt=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,r,s,o,a,c,l,u,d,f,h,p,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,f,h,p,y,m)}set(e,t,i,r,s,o,a,c,l,u,d,f,h,p,y,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=u,g[10]=d,g[14]=f,g[3]=h,g[7]=p,g[11]=y,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,r=1/p1.setFromMatrixColumn(e,0).length(),s=1/p1.setFromMatrixColumn(e,1).length(),o=1/p1.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*u,h=o*d,p=a*u,y=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=h+p*l,t[5]=f-y*l,t[9]=-a*c,t[2]=y-f*l,t[6]=p+h*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*u,h=c*d,p=l*u,y=l*d;t[0]=f+y*a,t[4]=p*a-h,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-p,t[6]=y+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*u,h=c*d,p=l*u,y=l*d;t[0]=f-y*a,t[4]=-o*d,t[8]=p+h*a,t[1]=h+p*a,t[5]=o*u,t[9]=y-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*u,h=o*d,p=a*u,y=a*d;t[0]=c*u,t[4]=p*l-h,t[8]=f*l+y,t[1]=c*d,t[5]=y*l+f,t[9]=h*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,h=o*l,p=a*c,y=a*l;t[0]=c*u,t[4]=y-f*d,t[8]=p*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=h*d+p,t[10]=f-y*d}else if(e.order==="XZY"){let f=o*c,h=o*l,p=a*c,y=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+y,t[5]=o*u,t[9]=h*d-p,t[2]=p*d-h,t[6]=a*u,t[10]=y*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(LN,e,zN)}lookAt(e,t,i){let r=this.elements;return di.subVectors(e,t),di.lengthSq()===0&&(di.z=1),di.normalize(),js.crossVectors(i,di),js.lengthSq()===0&&(Math.abs(i.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),js.crossVectors(i,di)),js.normalize(),q3.crossVectors(di,js),r[0]=js.x,r[4]=q3.x,r[8]=di.x,r[1]=js.y,r[5]=q3.y,r[9]=di.y,r[2]=js.z,r[6]=q3.z,r[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],h=i[13],p=i[2],y=i[6],m=i[10],g=i[14],M=i[3],S=i[7],x=i[11],T=i[15],w=r[0],I=r[4],_=r[8],E=r[12],A=r[1],D=r[5],O=r[9],X=r[13],ee=r[2],U=r[6],L=r[10],N=r[14],B=r[3],q=r[7],se=r[11],fe=r[15];return s[0]=o*w+a*A+c*ee+l*B,s[4]=o*I+a*D+c*U+l*q,s[8]=o*_+a*O+c*L+l*se,s[12]=o*E+a*X+c*N+l*fe,s[1]=u*w+d*A+f*ee+h*B,s[5]=u*I+d*D+f*U+h*q,s[9]=u*_+d*O+f*L+h*se,s[13]=u*E+d*X+f*N+h*fe,s[2]=p*w+y*A+m*ee+g*B,s[6]=p*I+y*D+m*U+g*q,s[10]=p*_+y*O+m*L+g*se,s[14]=p*E+y*X+m*N+g*fe,s[3]=M*w+S*A+x*ee+T*B,s[7]=M*I+S*D+x*U+T*q,s[11]=M*_+S*O+x*L+T*se,s[15]=M*E+S*X+x*N+T*fe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],h=e[14],p=e[3],y=e[7],m=e[11],g=e[15],M=c*h-l*f,S=a*h-l*d,x=a*f-c*d,T=o*h-l*u,w=o*f-c*u,I=o*d-a*u;return t*(y*M-m*S+g*x)-i*(p*M-m*T+g*w)+r*(p*S-y*T+g*I)-s*(p*x-y*w+m*I)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],c=e[2],l=e[6],u=e[10];return t*(o*u-a*l)-i*(s*u-a*c)+r*(s*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],h=e[11],p=e[12],y=e[13],m=e[14],g=e[15],M=t*a-i*o,S=t*c-r*o,x=t*l-s*o,T=i*c-r*a,w=i*l-s*a,I=r*l-s*c,_=u*y-d*p,E=u*m-f*p,A=u*g-h*p,D=d*m-f*y,O=d*g-h*y,X=f*g-h*m,ee=M*X-S*O+x*D+T*A-w*E+I*_;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/ee;return e[0]=(a*X-c*O+l*D)*U,e[1]=(r*O-i*X-s*D)*U,e[2]=(y*I-m*w+g*T)*U,e[3]=(f*w-d*I-h*T)*U,e[4]=(c*A-o*X-l*E)*U,e[5]=(t*X-r*A+s*E)*U,e[6]=(m*x-p*I-g*S)*U,e[7]=(u*I-f*x+h*S)*U,e[8]=(o*O-a*A+l*_)*U,e[9]=(i*A-t*O-s*_)*U,e[10]=(p*w-y*x+g*M)*U,e[11]=(d*x-u*w-h*M)*U,e[12]=(a*E-o*D-c*_)*U,e[13]=(t*D-i*E+r*_)*U,e[14]=(y*S-p*T-m*M)*U,e[15]=(u*T-d*S+f*M)*U,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,f=s*l,h=s*u,p=s*d,y=o*u,m=o*d,g=a*d,M=c*l,S=c*u,x=c*d,T=i.x,w=i.y,I=i.z;return r[0]=(1-(y+g))*T,r[1]=(h+x)*T,r[2]=(p-S)*T,r[3]=0,r[4]=(h-x)*w,r[5]=(1-(f+g))*w,r[6]=(m+M)*w,r[7]=0,r[8]=(p+S)*I,r[9]=(m-M)*I,r[10]=(1-(f+y))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let o=p1.set(r[0],r[1],r[2]).length(),a=p1.set(r[4],r[5],r[6]).length(),c=p1.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Qi.copy(this);let l=1/o,u=1/a,d=1/c;return Qi.elements[0]*=l,Qi.elements[1]*=l,Qi.elements[2]*=l,Qi.elements[4]*=u,Qi.elements[5]*=u,Qi.elements[6]*=u,Qi.elements[8]*=d,Qi.elements[9]*=d,Qi.elements[10]*=d,t.setFromRotationMatrix(Qi),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,r,s,o,a=nr,c=!1){let l=this.elements,u=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r),p,y;if(c)p=s/(o-s),y=o*s/(o-s);else if(a===nr)p=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===yl)p=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=nr,c=!1){let l=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),h=-(i+r)/(i-r),p,y;if(c)p=1/(o-s),y=o/(o-s);else if(a===nr)p=-2/(o-s),y=-(o+s)/(o-s);else if(a===yl)p=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},p1=new F,Qi=new Kt,LN=new F(0,0,0),zN=new F(1,1,1),js=new F,q3=new F,di=new F,Cy=new Kt,Ty=new Pr,xl=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],f=s[2],h=s[6],p=s[10];switch(i){case"XYZ":this._y=Math.asin(ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-ft(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(c,p));break;case"XZY":this._z=Math.asin(-ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,p),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Cy.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cy,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Ty.setFromEuler(this),this.setFromQuaternion(Ty,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),Ml=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ON=0,Iy=new F,m1=new Pr,rs=new Kt,X3=new F,dl=new F,kN=new F,FN=new Pr,Ay=new F(1,0,0),Dy=new F(0,1,0),Ny=new F(0,0,1),Ry={type:"added"},UN={type:"removed"},g1={type:"childadded",child:null},up={type:"childremoved",child:null},ao=(()=>{class n extends Rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ON++}),this.uuid=Xl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new F,i=new xl,r=new Pr,s=new F(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Kt},normalMatrix:{value:new qe}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return m1.setFromAxisAngle(t,i),this.quaternion.multiply(m1),this}rotateOnWorldAxis(t,i){return m1.setFromAxisAngle(t,i),this.quaternion.premultiply(m1),this}rotateX(t){return this.rotateOnAxis(Ay,t)}rotateY(t){return this.rotateOnAxis(Dy,t)}rotateZ(t){return this.rotateOnAxis(Ny,t)}translateOnAxis(t,i){return Iy.copy(t).applyQuaternion(this.quaternion),this.position.add(Iy.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Ay,t)}translateY(t){return this.translateOnAxis(Dy,t)}translateZ(t){return this.translateOnAxis(Ny,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(rs.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?X3.copy(t):X3.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),dl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rs.lookAt(dl,X3,this.up):rs.lookAt(X3,dl,this.up),this.quaternion.setFromRotationMatrix(rs),s&&(rs.extractRotation(s.matrixWorld),m1.setFromRotationMatrix(rs),this.quaternion.premultiply(m1.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(He("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ry),g1.child=t,this.dispatchEvent(g1),g1.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(UN),up.child=t,this.dispatchEvent(up),up.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),rs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),rs.multiply(t.parent.matrixWorld)),t.applyMatrix4(rs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ry),g1.child=t,this.dispatchEvent(g1),g1.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dl,t,kN),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dl,FN,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,s=t.z,o=this.matrix.elements;o[12]+=i-o[0]*i-o[4]*r-o[8]*s,o[13]+=r-o[1]*i-o[5]*r-o[9]*s,o[14]+=s-o[2]*i-o[6]*r-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].updateWorldMatrix(!1,!0,r)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>at(de({},c),{boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>de({},c)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let f=l[u];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),f=a(t.shapes),h=a(t.skeletons),p=a(t.animations),y=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),p.length>0&&(r.animations=p),y.length>0&&(r.nodes=y)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new F(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),ls=class extends ao{constructor(){super(),this.isGroup=!0,this.type="Group"}},BN={type:"move"},I1=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),g=this._getHandJoint(l,y);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,p=.005;l.inputState.pinching&&f>h+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(BN)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ls;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},E_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ws={h:0,s:0,l:0},Y3={h:0,s:0,l:0};function dp(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var mt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,dt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=dt.workingColorSpace){if(e=DN(e,1),t=ft(t,0,1),i=ft(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=dp(o,s,e+1/3),this.g=dp(o,s,e),this.b=dp(o,s,e-1/3)}return dt.colorSpaceToWorking(this,r),this}setStyle(e,t=hi){function i(s){s!==void 0&&parseFloat(s)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hi){let i=E_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}copyLinearToSRGB(e){return this.r=w1(e.r),this.g=w1(e.g),this.b=w1(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return dt.workingToColorSpace(Fn.copy(this),e),Math.round(ft(Fn.r*255,0,255))*65536+Math.round(ft(Fn.g*255,0,255))*256+Math.round(ft(Fn.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(Fn.copy(this),t);let i=Fn.r,r=Fn.g,s=Fn.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=hi){dt.workingToColorSpace(Fn.copy(this),e);let t=Fn.r,i=Fn.g,r=Fn.b;return e!==hi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ws),this.setHSL(Ws.h+e,Ws.s+t,Ws.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ws),e.getHSL(Y3);let i=sp(Ws.h,Y3.h,t),r=sp(Ws.s,Y3.s,t),s=sp(Ws.l,Y3.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fn=new mt;mt.NAMES=E_;var Sl=class extends ao{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xl,this.environmentIntensity=1,this.environmentRotation=new xl,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},er=new F,ss=new F,fp=new F,os=new F,v1=new F,y1=new F,Py=new F,hp=new F,pp=new F,mp=new F,gp=new jt,vp=new jt,yp=new jt,Zs=class n{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),er.subVectors(e,t),r.cross(er);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){er.subVectors(r,t),ss.subVectors(i,t),fp.subVectors(e,t);let o=er.dot(er),a=er.dot(ss),c=er.dot(fp),l=ss.dot(ss),u=ss.dot(fp),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let f=1/d,h=(l*c-a*u)*f,p=(o*u-a*c)*f;return s.set(1-h-p,p,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,os)===null?!1:os.x>=0&&os.y>=0&&os.x+os.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,os)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,os.x),c.addScaledVector(o,os.y),c.addScaledVector(a,os.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return gp.setScalar(0),vp.setScalar(0),yp.setScalar(0),gp.fromBufferAttribute(e,t),vp.fromBufferAttribute(e,i),yp.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(gp,s.x),o.addScaledVector(vp,s.y),o.addScaledVector(yp,s.z),o}static isFrontFacing(e,t,i,r){return er.subVectors(i,t),ss.subVectors(e,t),er.cross(ss).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return er.subVectors(this.c,this.b),ss.subVectors(this.a,this.b),er.cross(ss).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;v1.subVectors(r,i),y1.subVectors(s,i),hp.subVectors(e,i);let c=v1.dot(hp),l=y1.dot(hp);if(c<=0&&l<=0)return t.copy(i);pp.subVectors(e,r);let u=v1.dot(pp),d=y1.dot(pp);if(u>=0&&d<=u)return t.copy(r);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(v1,o);mp.subVectors(e,s);let h=v1.dot(mp),p=y1.dot(mp);if(p>=0&&h<=p)return t.copy(s);let y=h*l-c*p;if(y<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(i).addScaledVector(y1,a);let m=u*p-h*d;if(m<=0&&d-u>=0&&h-p>=0)return Py.subVectors(s,r),a=(d-u)/(d-u+(h-p)),t.copy(r).addScaledVector(Py,a);let g=1/(m+y+f);return o=y*g,a=f*g,t.copy(i).addScaledVector(v1,o).addScaledVector(y1,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Js=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(tr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(tr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=tr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,tr):tr.fromBufferAttribute(s,o),tr.applyMatrix4(e.matrixWorld),this.expandByPoint(tr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Z3.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Z3.copy(i.boundingBox)),Z3.applyMatrix4(e.matrixWorld),this.union(Z3)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,tr),tr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fl),K3.subVectors(this.max,fl),_1.subVectors(e.a,fl),b1.subVectors(e.b,fl),x1.subVectors(e.c,fl),$s.subVectors(b1,_1),qs.subVectors(x1,b1),Jo.subVectors(_1,x1);let t=[0,-$s.z,$s.y,0,-qs.z,qs.y,0,-Jo.z,Jo.y,$s.z,0,-$s.x,qs.z,0,-qs.x,Jo.z,0,-Jo.x,-$s.y,$s.x,0,-qs.y,qs.x,0,-Jo.y,Jo.x,0];return!_p(t,_1,b1,x1,K3)||(t=[1,0,0,0,1,0,0,0,1],!_p(t,_1,b1,x1,K3))?!1:(J3.crossVectors($s,qs),t=[J3.x,J3.y,J3.z],_p(t,_1,b1,x1,K3))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(as[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),as[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),as[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),as[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),as[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),as[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),as[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),as[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(as),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},as=[new F,new F,new F,new F,new F,new F,new F,new F],tr=new F,Z3=new Js,_1=new F,b1=new F,x1=new F,$s=new F,qs=new F,Jo=new F,fl=new F,K3=new F,J3=new F,Qo=new F;function _p(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Qo.fromArray(n,s);let a=r.x*Math.abs(Qo.x)+r.y*Math.abs(Qo.y)+r.z*Math.abs(Qo.z),c=e.dot(Qo),l=t.dot(Qo),u=i.dot(Qo);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var ln=new F,Q3=new ht,VN=0,$n=class extends Rr{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:VN++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Pp,this.updateRanges=[],this.gpuType=sr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Q3.fromBufferAttribute(this,t),Q3.applyMatrix3(e),this.setXY(t,Q3.x,Q3.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ul(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ul(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ul(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ul(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ul(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),i=Qn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),i=Qn(i,this.array),r=Qn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),i=Qn(i,this.array),r=Qn(r,this.array),s=Qn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pp&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var El=class extends $n{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var wl=class extends $n{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var xn=class extends $n{constructor(e,t,i){super(new Float32Array(e),t,i)}},HN=new Js,hl=new F,bp=new F,oa=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):HN.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hl.subVectors(e,this.center);let t=hl.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(hl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hl.copy(e.center).add(bp)),this.expandByPoint(hl.copy(e.center).sub(bp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},GN=0,Ni=new Kt,xp=new ao,M1=new F,fi=new Js,pl=new Js,bn=new F,qn=class n extends Rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:GN++}),this.uuid=Xl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(IN(e)?wl:El)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ni.makeRotationFromQuaternion(e),this.applyMatrix4(Ni),this}rotateX(e){return Ni.makeRotationX(e),this.applyMatrix4(Ni),this}rotateY(e){return Ni.makeRotationY(e),this.applyMatrix4(Ni),this}rotateZ(e){return Ni.makeRotationZ(e),this.applyMatrix4(Ni),this}translate(e,t,i){return Ni.makeTranslation(e,t,i),this.applyMatrix4(Ni),this}scale(e,t,i){return Ni.makeScale(e,t,i),this.applyMatrix4(Ni),this}lookAt(e){return xp.lookAt(e),xp.updateMatrix(),this.applyMatrix4(xp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(M1).negate(),this.translate(M1.x,M1.y,M1.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xn(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Js);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];fi.setFromBufferAttribute(s),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oa);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let i=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];pl.setFromBufferAttribute(a),this.morphTargetsRelative?(bn.addVectors(fi.min,pl.min),fi.expandByPoint(bn),bn.addVectors(fi.max,pl.max),fi.expandByPoint(bn)):(fi.expandByPoint(pl.min),fi.expandByPoint(pl.max))}fi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)bn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(bn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)bn.fromBufferAttribute(a,l),c&&(M1.fromBufferAttribute(e,l),bn.add(M1)),r=Math.max(r,i.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new $n(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let _=0;_<i.count;_++)a[_]=new F,c[_]=new F;let l=new F,u=new F,d=new F,f=new ht,h=new ht,p=new ht,y=new F,m=new F;function g(_,E,A){l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,A),f.fromBufferAttribute(s,_),h.fromBufferAttribute(s,E),p.fromBufferAttribute(s,A),u.sub(l),d.sub(l),h.sub(f),p.sub(f);let D=1/(h.x*p.y-p.x*h.y);isFinite(D)&&(y.copy(u).multiplyScalar(p.y).addScaledVector(d,-h.y).multiplyScalar(D),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-p.x).multiplyScalar(D),a[_].add(y),a[E].add(y),a[A].add(y),c[_].add(m),c[E].add(m),c[A].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let _=0,E=M.length;_<E;++_){let A=M[_],D=A.start,O=A.count;for(let X=D,ee=D+O;X<ee;X+=3)g(e.getX(X+0),e.getX(X+1),e.getX(X+2))}let S=new F,x=new F,T=new F,w=new F;function I(_){T.fromBufferAttribute(r,_),w.copy(T);let E=a[_];S.copy(E),S.sub(T.multiplyScalar(T.dot(E))).normalize(),x.crossVectors(w,E);let D=x.dot(c[_])<0?-1:1;o.setXYZW(_,S.x,S.y,S.z,D)}for(let _=0,E=M.length;_<E;++_){let A=M[_],D=A.start,O=A.count;for(let X=D,ee=D+O;X<ee;X+=3)I(e.getX(X+0)),I(e.getX(X+1)),I(e.getX(X+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new $n(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let r=new F,s=new F,o=new F,a=new F,c=new F,l=new F,u=new F,d=new F;if(e)for(let f=0,h=e.count;f<h;f+=3){let p=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,p),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)bn.fromBufferAttribute(e,t),bn.normalize(),e.setXYZ(t,bn.x,bn.y,bn.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u),h=0,p=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?h=c[y]*a.data.stride+a.offset:h=c[y]*u;for(let g=0;g<u;g++)f[p++]=l[h++]}return new $n(f,u,d)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let f=l[u],h=e(f,i);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){let h=l[d];u.push(h.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var jN=0,Qs=class extends Rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jN++}),this.uuid=Xl(),this.name="",this.type="Material",this.blending=ra,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gd,this.blendDst=vd,this.blendEquation=Ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=na,this.stencilZFail=na,this.stencilZPass=na,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ra&&(i.blending=this.blending),this.side!==ds&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==gd&&(i.blendSrc=this.blendSrc),this.blendDst!==vd&&(i.blendDst=this.blendDst),this.blendEquation!==Ks&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==sa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==na&&(i.stencilFail=this.stencilFail),this.stencilZFail!==na&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==na&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new mt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ht().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ht().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var cs=new F,Mp=new F,ed=new F,Xs=new F,Sp=new F,td=new F,Ep=new F,Cl=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=cs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cs.copy(this.origin).addScaledVector(this.direction,t),cs.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Mp.copy(e).add(t).multiplyScalar(.5),ed.copy(t).sub(e).normalize(),Xs.copy(this.origin).sub(Mp);let s=e.distanceTo(t)*.5,o=-this.direction.dot(ed),a=Xs.dot(this.direction),c=-Xs.dot(ed),l=Xs.lengthSq(),u=Math.abs(1-o*o),d,f,h,p;if(u>0)if(d=o*c-a,f=o*a-c,p=s*u,d>=0)if(f>=-p)if(f<=p){let y=1/u;d*=y,f*=y,h=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f<=-p?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+l):f<=p?(d=0,f=Math.min(Math.max(-s,-c),s),h=f*(f+2*c)+l):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+l);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Mp).addScaledVector(ed,f),h}intersectSphere(e,t){cs.subVectors(e.center,this.origin);let i=cs.dot(this.direction),r=cs.dot(cs)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,cs)!==null}intersectTriangle(e,t,i,r,s){Sp.subVectors(t,e),td.subVectors(i,e),Ep.crossVectors(Sp,td);let o=this.direction.dot(Ep),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xs.subVectors(this.origin,e);let c=a*this.direction.dot(td.crossVectors(Xs,td));if(c<0)return null;let l=a*this.direction.dot(Sp.cross(Xs));if(l<0||c+l>o)return null;let u=-a*Xs.dot(Ep);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fs=class extends Qs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xl,this.combine=Vp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ly=new Kt,ea=new Cl,nd=new oa,zy=new F,id=new F,rd=new F,sd=new F,wp=new F,od=new F,Oy=new F,ad=new F,An=class extends ao{constructor(e=new qn,t=new fs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){od.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(wp.fromBufferAttribute(d,e),o?od.addScaledVector(wp,u):od.addScaledVector(wp.sub(t),u))}t.add(od)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),nd.copy(i.boundingSphere),nd.applyMatrix4(s),ea.copy(e.ray).recast(e.near),!(nd.containsPoint(ea.origin)===!1&&(ea.intersectSphere(nd,zy)===null||ea.origin.distanceToSquared(zy)>(e.far-e.near)**2))&&(Ly.copy(s).invert(),ea.copy(e.ray).applyMatrix4(Ly),!(i.boundingBox!==null&&ea.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ea)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,y=f.length;p<y;p++){let m=f[p],g=o[m.materialIndex],M=Math.max(m.start,h.start),S=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let x=M,T=S;x<T;x+=3){let w=a.getX(x),I=a.getX(x+1),_=a.getX(x+2);r=cd(this,g,e,i,l,u,d,w,I,_),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let p=Math.max(0,h.start),y=Math.min(a.count,h.start+h.count);for(let m=p,g=y;m<g;m+=3){let M=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);r=cd(this,o,e,i,l,u,d,M,S,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,y=f.length;p<y;p++){let m=f[p],g=o[m.materialIndex],M=Math.max(m.start,h.start),S=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let x=M,T=S;x<T;x+=3){let w=x,I=x+1,_=x+2;r=cd(this,g,e,i,l,u,d,w,I,_),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let p=Math.max(0,h.start),y=Math.min(c.count,h.start+h.count);for(let m=p,g=y;m<g;m+=3){let M=m,S=m+1,x=m+2;r=cd(this,o,e,i,l,u,d,M,S,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function WN(n,e,t,i,r,s,o,a){let c;if(e.side===Xn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===ds,a),c===null)return null;ad.copy(a),ad.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(ad);return l<t.near||l>t.far?null:{distance:l,point:ad.clone(),object:n}}function cd(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,id),n.getVertexPosition(c,rd),n.getVertexPosition(l,sd);let u=WN(n,e,t,i,id,rd,sd,Oy);if(u){let d=new F;Zs.getBarycoord(Oy,id,rd,sd,d),r&&(u.uv=Zs.getInterpolatedAttribute(r,a,c,l,d,new ht)),s&&(u.uv1=Zs.getInterpolatedAttribute(s,a,c,l,d,new ht)),o&&(u.normal=Zs.getInterpolatedAttribute(o,a,c,l,d,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new F,materialIndex:0};Zs.getNormal(id,rd,sd,f.normal),u.face=f,u.barycoord=d}return u}var Rd=class extends ms{constructor(e=null,t=1,i=1,r,s,o,a,c,l=Mn,u=Mn,d,f){super(null,o,a,c,l,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cp=new F,$N=new F,qN=new qe,Ar=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Cp.subVectors(i,t).cross($N.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(Cp),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||qN.getNormalMatrix(e),r=this.coplanarPoint(Cp).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ta=new oa,XN=new ht(.5,.5),ld=new F,Tl=class{constructor(e=new Ar,t=new Ar,i=new Ar,r=new Ar,s=new Ar,o=new Ar){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=nr,i=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],d=s[5],f=s[6],h=s[7],p=s[8],y=s[9],m=s[10],g=s[11],M=s[12],S=s[13],x=s[14],T=s[15];if(r[0].setComponents(l-o,h-u,g-p,T-M).normalize(),r[1].setComponents(l+o,h+u,g+p,T+M).normalize(),r[2].setComponents(l+a,h+d,g+y,T+S).normalize(),r[3].setComponents(l-a,h-d,g-y,T-S).normalize(),i)r[4].setComponents(c,f,m,x).normalize(),r[5].setComponents(l-c,h-f,g-m,T-x).normalize();else if(r[4].setComponents(l-c,h-f,g-m,T-x).normalize(),t===nr)r[5].setComponents(l+c,h+f,g+m,T+x).normalize();else if(t===yl)r[5].setComponents(c,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ta.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ta.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ta)}intersectsSprite(e){ta.center.set(0,0,0);let t=XN.distanceTo(e.center);return ta.radius=.7071067811865476+t,ta.applyMatrix4(e.matrixWorld),this.intersectsSphere(ta)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(ld.x=r.normal.x>0?e.max.x:e.min.x,ld.y=r.normal.y>0?e.max.y:e.min.y,ld.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ld)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var A1=class extends Qs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ky=new Kt,Lp=new Cl,ud=new oa,dd=new F,Il=class extends ao{constructor(e=new qn,t=new A1){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ud.copy(i.boundingSphere),ud.applyMatrix4(r),ud.radius+=s,e.ray.intersectsSphere(ud)===!1)return;ky.copy(r).invert(),Lp.copy(e.ray).applyMatrix4(ky);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){let f=Math.max(0,o.start),h=Math.min(l.count,o.start+o.count);for(let p=f,y=h;p<y;p++){let m=l.getX(p);dd.fromBufferAttribute(d,m),Fy(dd,m,c,r,e,t,this)}}else{let f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let p=f,y=h;p<y;p++)dd.fromBufferAttribute(d,p),Fy(dd,p,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Fy(n,e,t,i,r,s,o){let a=Lp.distanceSqToPoint(n);if(a<t){let c=new F;Lp.closestPointToPoint(n,c),c.applyMatrix4(i);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Al=class extends ms{constructor(e=[],t=io,i,r,s,o,a,c,l,u){super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var hs=class extends ms{constructor(e,t,i=rr,r,s,o,a=Mn,c=Mn,l,u=Nr,d=1){if(u!==Nr&&u!==so)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new T1(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Pd=class extends hs{constructor(e,t=rr,i=io,r,s,o=Mn,a=Mn,c,l=Nr){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,r,s,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Dl=class extends ms{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},D1=class n extends qn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],f=0,h=0;p("z","y","x",-1,-1,i,t,e,o,s,0),p("z","y","x",1,-1,i,t,-e,o,s,1),p("x","z","y",1,1,e,i,t,r,o,2),p("x","z","y",1,-1,e,i,-t,r,o,3),p("x","y","z",1,-1,e,t,i,r,s,4),p("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new xn(l,3)),this.setAttribute("normal",new xn(u,3)),this.setAttribute("uv",new xn(d,2));function p(y,m,g,M,S,x,T,w,I,_,E){let A=x/I,D=T/_,O=x/2,X=T/2,ee=w/2,U=I+1,L=_+1,N=0,B=0,q=new F;for(let se=0;se<L;se++){let fe=se*D-X;for(let me=0;me<U;me++){let nt=me*A-O;q[y]=nt*M,q[m]=fe*S,q[g]=ee,l.push(q.x,q.y,q.z),q[y]=0,q[m]=0,q[g]=w>0?1:-1,u.push(q.x,q.y,q.z),d.push(me/I),d.push(1-se/_),N+=1}}for(let se=0;se<_;se++)for(let fe=0;fe<I;fe++){let me=f+fe+U*se,nt=f+fe+U*(se+1),je=f+(fe+1)+U*(se+1),pt=f+(fe+1)+U*se;c.push(me,nt,pt),c.push(nt,je,pt),B+=6}a.addGroup(h,B,E),h+=B,f+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Nl=class n extends qn{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],o=[];a(r),l(i),u(),this.setAttribute("position",new xn(s,3)),this.setAttribute("normal",new xn(s.slice(),3)),this.setAttribute("uv",new xn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let S=new F,x=new F,T=new F;for(let w=0;w<t.length;w+=3)h(t[w+0],S),h(t[w+1],x),h(t[w+2],T),c(S,x,T,M)}function c(M,S,x,T){let w=T+1,I=[];for(let _=0;_<=w;_++){I[_]=[];let E=M.clone().lerp(x,_/w),A=S.clone().lerp(x,_/w),D=w-_;for(let O=0;O<=D;O++)O===0&&_===w?I[_][O]=E:I[_][O]=E.clone().lerp(A,O/D)}for(let _=0;_<w;_++)for(let E=0;E<2*(w-_)-1;E++){let A=Math.floor(E/2);E%2===0?(f(I[_][A+1]),f(I[_+1][A]),f(I[_][A])):(f(I[_][A+1]),f(I[_+1][A+1]),f(I[_+1][A]))}}function l(M){let S=new F;for(let x=0;x<s.length;x+=3)S.x=s[x+0],S.y=s[x+1],S.z=s[x+2],S.normalize().multiplyScalar(M),s[x+0]=S.x,s[x+1]=S.y,s[x+2]=S.z}function u(){let M=new F;for(let S=0;S<s.length;S+=3){M.x=s[S+0],M.y=s[S+1],M.z=s[S+2];let x=m(M)/2/Math.PI+.5,T=g(M)/Math.PI+.5;o.push(x,1-T)}p(),d()}function d(){for(let M=0;M<o.length;M+=6){let S=o[M+0],x=o[M+2],T=o[M+4],w=Math.max(S,x,T),I=Math.min(S,x,T);w>.9&&I<.1&&(S<.2&&(o[M+0]+=1),x<.2&&(o[M+2]+=1),T<.2&&(o[M+4]+=1))}}function f(M){s.push(M.x,M.y,M.z)}function h(M,S){let x=M*3;S.x=e[x+0],S.y=e[x+1],S.z=e[x+2]}function p(){let M=new F,S=new F,x=new F,T=new F,w=new ht,I=new ht,_=new ht;for(let E=0,A=0;E<s.length;E+=9,A+=6){M.set(s[E+0],s[E+1],s[E+2]),S.set(s[E+3],s[E+4],s[E+5]),x.set(s[E+6],s[E+7],s[E+8]),w.set(o[A+0],o[A+1]),I.set(o[A+2],o[A+3]),_.set(o[A+4],o[A+5]),T.copy(M).add(S).add(x).divideScalar(3);let D=m(T);y(w,A+0,M,D),y(I,A+2,S,D),y(_,A+4,x,D)}}function y(M,S,x,T){T<0&&M.x===1&&(o[S]=M.x-1),x.x===0&&x.z===0&&(o[S]=T/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var Rl=class n extends Nl{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Pl=class n extends Nl{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Ll=class n extends qn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,f=t/c,h=[],p=[],y=[],m=[];for(let g=0;g<u;g++){let M=g*f-o;for(let S=0;S<l;S++){let x=S*d-s;p.push(x,-M,0),y.push(0,0,1),m.push(S/a),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let M=0;M<a;M++){let S=M+l*g,x=M+l*(g+1),T=M+1+l*(g+1),w=M+1+l*g;h.push(S,x,w),h.push(x,T,w)}this.setIndex(h),this.setAttribute("position",new xn(p,3)),this.setAttribute("normal",new xn(y,3)),this.setAttribute("uv",new xn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var zl=class n extends qn{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s,thetaStart:o,thetaLength:a},i=Math.floor(i),r=Math.floor(r);let c=[],l=[],u=[],d=[],f=new F,h=new F,p=new F;for(let y=0;y<=i;y++){let m=o+y/i*a;for(let g=0;g<=r;g++){let M=g/r*s;h.x=(e+t*Math.cos(m))*Math.cos(M),h.y=(e+t*Math.cos(m))*Math.sin(M),h.z=t*Math.sin(m),l.push(h.x,h.y,h.z),f.x=e*Math.cos(M),f.y=e*Math.sin(M),p.subVectors(h,f).normalize(),u.push(p.x,p.y,p.z),d.push(g/r),d.push(y/i)}}for(let y=1;y<=i;y++)for(let m=1;m<=r;m++){let g=(r+1)*y+m-1,M=(r+1)*(y-1)+m-1,S=(r+1)*(y-1)+m,x=(r+1)*y+m;c.push(g,M,x),c.push(M,S,x)}this.setIndex(c),this.setAttribute("position",new xn(l,3)),this.setAttribute("normal",new xn(u,3)),this.setAttribute("uv",new xn(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};function ca(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];if(Uy(r))r.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Uy(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Bn(n){let e={};for(let t=0;t<n.length;t++){let i=ca(n[t]);for(let r in i)e[r]=i[r]}return e}function Uy(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function YN(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function s6(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var w_={clone:ca,merge:Bn},ZN=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,KN=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mi=class extends Qs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ZN,this.fragmentShader=KN,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ca(e.uniforms),this.uniformsGroups=YN(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new mt().setHex(r.value);break;case"v2":this.uniforms[i].value=new ht().fromArray(r.value);break;case"v3":this.uniforms[i].value=new F().fromArray(r.value);break;case"v4":this.uniforms[i].value=new jt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new qe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Kt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ld=class extends mi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var zd=class extends Qs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=f_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Od=class extends Qs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function fd(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}var eo=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},kd=class extends eo{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ap,endingEnd:Ap}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Dp:s=e,a=2*t-i;break;case Np:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Dp:o=e,c=2*i-t;break;case Np:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,p=(i-t)/(r-t),y=p*p,m=y*p,g=-f*m+2*f*y-f*p,M=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*p+1,S=(-1-h)*m+(1.5+h)*y+.5*p,x=h*m-h*y;for(let T=0;T!==a;++T)s[T]=g*o[u+T]+M*o[l+T]+S*o[c+T]+x*o[d+T];return s}},Fd=class extends eo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*d+o[c+f]*u;return s}},Ud=class extends eo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Bd=class extends eo{interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this.inTangents,d=this.outTangents;if(!u||!d){let p=(i-t)/(r-t),y=1-p;for(let m=0;m!==a;++m)s[m]=o[l+m]*y+o[c+m]*p;return s}let f=a*2,h=e-1;for(let p=0;p!==a;++p){let y=o[l+p],m=o[c+p],g=h*f+p*2,M=d[g],S=d[g+1],x=e*f+p*2,T=u[x],w=u[x+1],I=(i-t)/(r-t),_,E,A,D,O;for(let X=0;X<8;X++){_=I*I,E=_*I,A=1-I,D=A*A,O=D*A;let U=O*t+3*D*I*M+3*A*_*T+E*r-i;if(Math.abs(U)<1e-10)break;let L=3*D*(M-t)+6*A*I*(T-M)+3*_*(r-T);if(Math.abs(L)<1e-10)break;I=I-U/L,I=Math.max(0,Math.min(1,I))}s[p]=O*y+3*D*I*S+3*A*_*w+E*m}return s}},gi=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fd(t,this.TimeBufferType),this.values=fd(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:fd(e.times,Array),values:fd(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ud(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new kd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Bd(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ml:t=this.InterpolantFactoryMethodDiscrete;break;case Td:t=this.InterpolantFactoryMethodLinear;break;case md:t=this.InterpolantFactoryMethodSmooth;break;case Ip:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ve("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ml;case this.InterpolantFactoryMethodLinear:return Td;case this.InterpolantFactoryMethodSmooth:return md;case this.InterpolantFactoryMethodBezier:return Ip}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(He("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(He("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){He("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){He("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&AN(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){He("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===md,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,f=d-i,h=d+i;for(let p=0;p!==i;++p){let y=t[d+p];if(y!==t[f+p]||y!==t[h+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};gi.prototype.ValueTypeName="";gi.prototype.TimeBufferType=Float32Array;gi.prototype.ValueBufferType=Float32Array;gi.prototype.DefaultInterpolation=Td;var to=class extends gi{constructor(e,t,i){super(e,t,i)}};to.prototype.ValueTypeName="bool";to.prototype.ValueBufferType=Array;to.prototype.DefaultInterpolation=ml;to.prototype.InterpolantFactoryMethodLinear=void 0;to.prototype.InterpolantFactoryMethodSmooth=void 0;var Vd=class extends gi{constructor(e,t,i,r){super(e,t,i,r)}};Vd.prototype.ValueTypeName="color";var Hd=class extends gi{constructor(e,t,i,r){super(e,t,i,r)}};Hd.prototype.ValueTypeName="number";var Gd=class extends eo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)Pr.slerpFlat(s,0,o,l-a,o,l,c);return s}},Ol=class extends gi{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Gd(this.times,this.values,this.getValueSize(),e)}};Ol.prototype.ValueTypeName="quaternion";Ol.prototype.InterpolantFactoryMethodSmooth=void 0;var no=class extends gi{constructor(e,t,i){super(e,t,i)}};no.prototype.ValueTypeName="string";no.prototype.ValueBufferType=Array;no.prototype.DefaultInterpolation=ml;no.prototype.InterpolantFactoryMethodLinear=void 0;no.prototype.InterpolantFactoryMethodSmooth=void 0;var jd=class extends gi{constructor(e,t,i,r){super(e,t,i,r)}};jd.prototype.ValueTypeName="vector";var hd=new F,pd=new Pr,Ir=new F,kl=class extends ao{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=nr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(hd,pd,Ir),Ir.x===1&&Ir.y===1&&Ir.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hd,pd,Ir.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(hd,pd,Ir),Ir.x===1&&Ir.y===1&&Ir.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hd,pd,Ir.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ys=new F,By=new ht,Vy=new ht,Un=class extends kl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Id*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(rp*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Id*2*Math.atan(Math.tan(rp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ys.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ys.x,Ys.y).multiplyScalar(-e/Ys.z),Ys.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ys.x,Ys.y).multiplyScalar(-e/Ys.z)}getViewSize(e,t){return this.getViewBounds(e,By,Vy),t.subVectors(Vy,By)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(rp*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Fl=class extends kl{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var S1=-90,E1=1,Wd=class extends ao{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Un(S1,E1,e,t);r.layers=this.layers,this.add(r);let s=new Un(S1,E1,e,t);s.layers=this.layers,this.add(s);let o=new Un(S1,E1,e,t);o.layers=this.layers,this.add(o);let a=new Un(S1,E1,e,t);a.layers=this.layers,this.add(a);let c=new Un(S1,E1,e,t);c.layers=this.layers,this.add(c);let l=new Un(S1,E1,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===nr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===yl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},$d=class extends Un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var o6="\\[\\]\\.:\\/",JN=new RegExp("["+o6+"]","g"),a6="[^"+o6+"]",QN="[^"+o6.replace("\\.","")+"]",eR=/((?:WC+[\/:])*)/.source.replace("WC",a6),tR=/(WCOD+)?/.source.replace("WCOD",QN),nR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",a6),iR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",a6),rR=new RegExp("^"+eR+tR+nR+iR+"$"),sR=["material","materials","bones","map"],zp=class{constructor(e,t,i){let r=i||Zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Zt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(JN,"")}static parseTrackName(t){let i=rR.exec(t);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);sR.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){He("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){He("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){He("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){He("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){He("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;He("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=zp,n})();Zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Zt.prototype.GetterByBindingType=[Zt.prototype._getValue_direct,Zt.prototype._getValue_array,Zt.prototype._getValue_arrayElement,Zt.prototype._getValue_toArray];Zt.prototype.SetterByBindingTypeAndVersioning=[[Zt.prototype._setValue_direct,Zt.prototype._setValue_direct_setNeedsUpdate,Zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_array,Zt.prototype._setValue_array_setNeedsUpdate,Zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_arrayElement,Zt.prototype._setValue_arrayElement_setNeedsUpdate,Zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_fromArray,Zt.prototype._setValue_fromArray_setNeedsUpdate,Zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hre=new Float32Array(1);var Op=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};function c6(n,e,t,i){let r=oR(i);switch(t){case Qp:return n*e;case t6:return n*e/r.components*r.byteLength;case Qd:return n*e/r.components*r.byteLength;case oo:return n*e*2/r.components*r.byteLength;case ef:return n*e*2/r.components*r.byteLength;case e6:return n*e*3/r.components*r.byteLength;case Ri:return n*e*4/r.components*r.byteLength;case tf:return n*e*4/r.components*r.byteLength;case Hl:case Gl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case jl:case Wl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case rf:case of:return Math.max(n,16)*Math.max(e,8)/4;case nf:case sf:return Math.max(n,8)*Math.max(e,8)/2;case af:case cf:case uf:case df:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case lf:case $l:case ff:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case pf:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case mf:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case gf:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case vf:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case yf:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case _f:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case bf:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case xf:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Mf:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Sf:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ef:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case wf:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Cf:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Tf:case If:case Af:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Df:case Nf:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ql:case Rf:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function oR(n){switch(n){case vi:case Yp:return{byteLength:1,components:1};case R1:case Zp:case Or:return{byteLength:2,components:1};case Kd:case Jd:return{byteLength:2,components:4};case rr:case Zd:case sr:return{byteLength:4,components:1};case Kp:case Jp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function X_(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function cR(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((h,p)=>h.start-p.start);let f=0;for(let h=1;h<d.length;h++){let p=d[f],y=d[h];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++f,d[f]=y)}d.length=f+1;for(let h=0,p=d.length;h<p;h++){let y=d[h];n.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var lR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vR=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,yR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_R=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,MR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,SR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ER=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,CR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,IR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,AR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,DR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,NR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,RR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,PR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,LR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,zR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,OR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,FR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,UR="gl_FragColor = linearToOutputTexel( gl_FragColor );",BR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,VR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,HR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,GR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$R=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,XR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,YR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ZR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,KR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,JR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eP=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,tP=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iP=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sP=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oP=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,aP=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cP=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lP=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uP=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dP=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,fP=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hP=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pP=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mP=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_P=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,MP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,SP=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,EP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wP=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,CP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,IP=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,AP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,RP=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,PP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,LP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FP=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,UP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,HP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,GP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,$P=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,XP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,YP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ZP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,KP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JP=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,QP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eL=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tL=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nL=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,iL=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rL=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lL=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uL=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fL=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pL=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gL=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vL=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yL=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,_L=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xL=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ML=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,EL=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wL=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CL=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TL=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,IL=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AL=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,DL=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,NL=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RL=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PL=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,LL=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zL=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OL=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kL=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,FL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,UL=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BL=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VL=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,it={alphahash_fragment:lR,alphahash_pars_fragment:uR,alphamap_fragment:dR,alphamap_pars_fragment:fR,alphatest_fragment:hR,alphatest_pars_fragment:pR,aomap_fragment:mR,aomap_pars_fragment:gR,batching_pars_vertex:vR,batching_vertex:yR,begin_vertex:_R,beginnormal_vertex:bR,bsdfs:xR,iridescence_fragment:MR,bumpmap_pars_fragment:SR,clipping_planes_fragment:ER,clipping_planes_pars_fragment:wR,clipping_planes_pars_vertex:CR,clipping_planes_vertex:TR,color_fragment:IR,color_pars_fragment:AR,color_pars_vertex:DR,color_vertex:NR,common:RR,cube_uv_reflection_fragment:PR,defaultnormal_vertex:LR,displacementmap_pars_vertex:zR,displacementmap_vertex:OR,emissivemap_fragment:kR,emissivemap_pars_fragment:FR,colorspace_fragment:UR,colorspace_pars_fragment:BR,envmap_fragment:VR,envmap_common_pars_fragment:HR,envmap_pars_fragment:GR,envmap_pars_vertex:jR,envmap_physical_pars_fragment:tP,envmap_vertex:WR,fog_vertex:$R,fog_pars_vertex:qR,fog_fragment:XR,fog_pars_fragment:YR,gradientmap_pars_fragment:ZR,lightmap_pars_fragment:KR,lights_lambert_fragment:JR,lights_lambert_pars_fragment:QR,lights_pars_begin:eP,lights_toon_fragment:nP,lights_toon_pars_fragment:iP,lights_phong_fragment:rP,lights_phong_pars_fragment:sP,lights_physical_fragment:oP,lights_physical_pars_fragment:aP,lights_fragment_begin:cP,lights_fragment_maps:lP,lights_fragment_end:uP,lightprobes_pars_fragment:dP,logdepthbuf_fragment:fP,logdepthbuf_pars_fragment:hP,logdepthbuf_pars_vertex:pP,logdepthbuf_vertex:mP,map_fragment:gP,map_pars_fragment:vP,map_particle_fragment:yP,map_particle_pars_fragment:_P,metalnessmap_fragment:bP,metalnessmap_pars_fragment:xP,morphinstance_vertex:MP,morphcolor_vertex:SP,morphnormal_vertex:EP,morphtarget_pars_vertex:wP,morphtarget_vertex:CP,normal_fragment_begin:TP,normal_fragment_maps:IP,normal_pars_fragment:AP,normal_pars_vertex:DP,normal_vertex:NP,normalmap_pars_fragment:RP,clearcoat_normal_fragment_begin:PP,clearcoat_normal_fragment_maps:LP,clearcoat_pars_fragment:zP,iridescence_pars_fragment:OP,opaque_fragment:kP,packing:FP,premultiplied_alpha_fragment:UP,project_vertex:BP,dithering_fragment:VP,dithering_pars_fragment:HP,roughnessmap_fragment:GP,roughnessmap_pars_fragment:jP,shadowmap_pars_fragment:WP,shadowmap_pars_vertex:$P,shadowmap_vertex:qP,shadowmask_pars_fragment:XP,skinbase_vertex:YP,skinning_pars_vertex:ZP,skinning_vertex:KP,skinnormal_vertex:JP,specularmap_fragment:QP,specularmap_pars_fragment:eL,tonemapping_fragment:tL,tonemapping_pars_fragment:nL,transmission_fragment:iL,transmission_pars_fragment:rL,uv_pars_fragment:sL,uv_pars_vertex:oL,uv_vertex:aL,worldpos_vertex:cL,background_vert:lL,background_frag:uL,backgroundCube_vert:dL,backgroundCube_frag:fL,cube_vert:hL,cube_frag:pL,depth_vert:mL,depth_frag:gL,distance_vert:vL,distance_frag:yL,equirect_vert:_L,equirect_frag:bL,linedashed_vert:xL,linedashed_frag:ML,meshbasic_vert:SL,meshbasic_frag:EL,meshlambert_vert:wL,meshlambert_frag:CL,meshmatcap_vert:TL,meshmatcap_frag:IL,meshnormal_vert:AL,meshnormal_frag:DL,meshphong_vert:NL,meshphong_frag:RL,meshphysical_vert:PL,meshphysical_frag:LL,meshtoon_vert:zL,meshtoon_frag:OL,points_vert:kL,points_frag:FL,shadow_vert:UL,shadow_frag:BL,sprite_vert:VL,sprite_frag:HL},be={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Fr={basic:{uniforms:Bn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Bn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new mt(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Bn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Bn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Bn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new mt(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Bn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Bn([be.points,be.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Bn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Bn([be.common,be.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Bn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Bn([be.sprite,be.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:Bn([be.common,be.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:Bn([be.lights,be.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Fr.physical={uniforms:Bn([Fr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var zf={r:0,b:0,g:0},GL=new Kt,Y_=new qe;Y_.set(-1,0,0,0,1,0,0,0,1);function jL(n,e,t,i,r,s){let o=new mt(0),a=r===!0?0:1,c,l,u=null,d=0,f=null;function h(M){let S=M.isScene===!0?M.background:null;if(S&&S.isTexture){let x=M.backgroundBlurriness>0;S=e.get(S,x)}return S}function p(M){let S=!1,x=h(M);x===null?m(o,a):x&&x.isColor&&(m(x,1),S=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(M,S){let x=h(S);x&&(x.isCubeTexture||x.mapping===Bl)?(l===void 0&&(l=new An(new D1(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:ca(Fr.backgroundCube.uniforms),vertexShader:Fr.backgroundCube.vertexShader,fragmentShader:Fr.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,w,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(GL.makeRotationFromEuler(S.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Y_),l.material.toneMapped=dt.getTransfer(x.colorSpace)!==Ct,(u!==x||d!==x.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new An(new Ll(2,2),new mi({name:"BackgroundMaterial",uniforms:ca(Fr.background.uniforms),vertexShader:Fr.background.vertexShader,fragmentShader:Fr.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=dt.getTransfer(x.colorSpace)!==Ct,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,S){M.getRGB(zf,s6(n)),t.buffers.color.setClear(zf.r,zf.g,zf.b,S,s)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,S=1){o.set(M),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:p,addToRenderList:y,dispose:g}}function WL(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(D,O,X,ee,U){let L=!1,N=d(D,ee,X,O);s!==N&&(s=N,l(s.object)),L=h(D,ee,X,U),L&&p(D,ee,X,U),U!==null&&e.update(U,n.ELEMENT_ARRAY_BUFFER),(L||o)&&(o=!1,x(D,O,X,ee),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return n.createVertexArray()}function l(D){return n.bindVertexArray(D)}function u(D){return n.deleteVertexArray(D)}function d(D,O,X,ee){let U=ee.wireframe===!0,L=i[O.id];L===void 0&&(L={},i[O.id]=L);let N=D.isInstancedMesh===!0?D.id:0,B=L[N];B===void 0&&(B={},L[N]=B);let q=B[X.id];q===void 0&&(q={},B[X.id]=q);let se=q[U];return se===void 0&&(se=f(c()),q[U]=se),se}function f(D){let O=[],X=[],ee=[];for(let U=0;U<t;U++)O[U]=0,X[U]=0,ee[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:X,attributeDivisors:ee,object:D,attributes:{},index:null}}function h(D,O,X,ee){let U=s.attributes,L=O.attributes,N=0,B=X.getAttributes();for(let q in B)if(B[q].location>=0){let fe=U[q],me=L[q];if(me===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(me=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(me=D.instanceColor)),fe===void 0||fe.attribute!==me||me&&fe.data!==me.data)return!0;N++}return s.attributesNum!==N||s.index!==ee}function p(D,O,X,ee){let U={},L=O.attributes,N=0,B=X.getAttributes();for(let q in B)if(B[q].location>=0){let fe=L[q];fe===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(fe=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(fe=D.instanceColor));let me={};me.attribute=fe,fe&&fe.data&&(me.data=fe.data),U[q]=me,N++}s.attributes=U,s.attributesNum=N,s.index=ee}function y(){let D=s.newAttributes;for(let O=0,X=D.length;O<X;O++)D[O]=0}function m(D){g(D,0)}function g(D,O){let X=s.newAttributes,ee=s.enabledAttributes,U=s.attributeDivisors;X[D]=1,ee[D]===0&&(n.enableVertexAttribArray(D),ee[D]=1),U[D]!==O&&(n.vertexAttribDivisor(D,O),U[D]=O)}function M(){let D=s.newAttributes,O=s.enabledAttributes;for(let X=0,ee=O.length;X<ee;X++)O[X]!==D[X]&&(n.disableVertexAttribArray(X),O[X]=0)}function S(D,O,X,ee,U,L,N){N===!0?n.vertexAttribIPointer(D,O,X,U,L):n.vertexAttribPointer(D,O,X,ee,U,L)}function x(D,O,X,ee){y();let U=ee.attributes,L=X.getAttributes(),N=O.defaultAttributeValues;for(let B in L){let q=L[B];if(q.location>=0){let se=U[B];if(se===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(se=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(se=D.instanceColor)),se!==void 0){let fe=se.normalized,me=se.itemSize,nt=e.get(se);if(nt===void 0)continue;let je=nt.buffer,pt=nt.type,K=nt.bytesPerElement,ie=pt===n.INT||pt===n.UNSIGNED_INT||se.gpuType===Zd;if(se.isInterleavedBufferAttribute){let ne=se.data,Ie=ne.stride,Ge=se.offset;if(ne.isInstancedInterleavedBuffer){for(let Le=0;Le<q.locationSize;Le++)g(q.location+Le,ne.meshPerAttribute);D.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Le=0;Le<q.locationSize;Le++)m(q.location+Le);n.bindBuffer(n.ARRAY_BUFFER,je);for(let Le=0;Le<q.locationSize;Le++)S(q.location+Le,me/q.locationSize,pt,fe,Ie*K,(Ge+me/q.locationSize*Le)*K,ie)}else{if(se.isInstancedBufferAttribute){for(let ne=0;ne<q.locationSize;ne++)g(q.location+ne,se.meshPerAttribute);D.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ne=0;ne<q.locationSize;ne++)m(q.location+ne);n.bindBuffer(n.ARRAY_BUFFER,je);for(let ne=0;ne<q.locationSize;ne++)S(q.location+ne,me/q.locationSize,pt,fe,me*K,me/q.locationSize*ne*K,ie)}}else if(N!==void 0){let fe=N[B];if(fe!==void 0)switch(fe.length){case 2:n.vertexAttrib2fv(q.location,fe);break;case 3:n.vertexAttrib3fv(q.location,fe);break;case 4:n.vertexAttrib4fv(q.location,fe);break;default:n.vertexAttrib1fv(q.location,fe)}}}}M()}function T(){E();for(let D in i){let O=i[D];for(let X in O){let ee=O[X];for(let U in ee){let L=ee[U];for(let N in L)u(L[N].object),delete L[N];delete ee[U]}}delete i[D]}}function w(D){if(i[D.id]===void 0)return;let O=i[D.id];for(let X in O){let ee=O[X];for(let U in ee){let L=ee[U];for(let N in L)u(L[N].object),delete L[N];delete ee[U]}}delete i[D.id]}function I(D){for(let O in i){let X=i[O];for(let ee in X){let U=X[ee];if(U[D.id]===void 0)continue;let L=U[D.id];for(let N in L)u(L[N].object),delete L[N];delete U[D.id]}}}function _(D){for(let O in i){let X=i[O],ee=D.isInstancedMesh===!0?D.id:0,U=X[ee];if(U!==void 0){for(let L in U){let N=U[L];for(let B in N)u(N[B].object),delete N[B];delete U[L]}delete X[ee],Object.keys(X).length===0&&delete i[O]}}}function E(){A(),o=!0,s!==r&&(s=r,l(s.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:E,resetDefaultState:A,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:I,initAttributes:y,enableAttribute:m,disableUnusedAttributes:M}}function $L(n,e,t){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let f=0;for(let h=0;h<u;h++)f+=l[h];t.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function qL(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(I){return!(I!==Ri&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let _=I===Or&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==vi&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==sr&&!_)}function c(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(Ve("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:x,maxSamples:T,samples:w}}function XL(n){let e=this,t=null,i=0,r=!1,s=!1,o=new Ar,a=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let p=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,g=n.get(d);if(!r||p===null||p.length===0||s&&!m)s?u(null):l();else{let M=s?0:i,S=M*4,x=g.clippingState||null;c.value=x,x=u(p,f,S,h);for(let T=0;T!==S;++T)x[T]=t[T];g.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,p){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=c.value,p!==!0||m===null){let g=h+y*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<g)&&(m=new Float32Array(g));for(let S=0,x=h;S!==y;++S,x+=4)o.copy(d[S]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var co=4,C_=[.125,.215,.35,.446,.526,.582],la=20,YL=256,Yl=new Fl,T_=new mt,l6=null,u6=0,d6=0,f6=!1,ZL=new F,kf=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=ZL}=s;l6=this._renderer.getRenderTarget(),u6=this._renderer.getActiveCubeFace(),d6=this._renderer.getActiveMipmapLevel(),f6=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=D_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=A_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(l6,u6,d6),this._renderer.xr.enabled=f6,e.scissorTest=!1,L1(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===io||e.mapping===aa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),l6=this._renderer.getRenderTarget(),u6=this._renderer.getActiveCubeFace(),d6=this._renderer.getActiveMipmapLevel(),f6=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:In,minFilter:In,generateMipmaps:!1,type:Or,format:Ri,colorSpace:gl,depthBuffer:!1},r=I_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=I_(e,t,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=KL(s)),this._blurMaterial=QL(s,e,t),this._ggxMaterial=JL(s,e,t)}return r}_compileMaterial(e){let t=new An(new qn,e);this._renderer.compile(t,Yl)}_sceneToCubeUV(e,t,i,r,s){let c=new Un(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(T_),d.toneMapping=ir,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new An(new D1,new fs({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,g=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,g=!0):(m.color.copy(T_),g=!0);for(let S=0;S<6;S++){let x=S%3;x===0?(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[S],s.y,s.z)):x===1?(c.up.set(0,0,l[S]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[S],s.z)):(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[S]));let T=this._cubeSize;L1(r,x*T,S>2?T:0,T,T),d.setRenderTarget(r),g&&d.render(y,c),d.render(e,c)}d.toneMapping=h,d.autoClear=f,e.background=M}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===io||e.mapping===aa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=D_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=A_());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;L1(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Yl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let c=o.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),f=0+l*1.25,h=d*f,{_lodMax:p}=this,y=this._sizeLods[i],m=3*y*(i>p-co?i-p+co:0),g=4*(this._cubeSize-y);c.envMap.value=e.texture,c.roughness.value=h,c.mipInt.value=p-t,L1(s,m,g,3*y,2*y),r.setRenderTarget(s),r.render(a,Yl),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=p-i,L1(e,m,g,3*y,2*y),r.setRenderTarget(e),r.render(a,Yl)}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&He("blur direction must be either latitudinal or longitudinal!");let u=3,d=this._lodMeshes[r];d.material=l;let f=l.uniforms,h=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*la-1),y=s/p,m=isFinite(s)?1+Math.floor(u*y):la;m>la&&Ve(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${la}`);let g=[],M=0;for(let I=0;I<la;++I){let _=I/y,E=Math.exp(-_*_/2);g.push(E),I===0?M+=E:I<m&&(M+=2*E)}for(let I=0;I<g.length;I++)g[I]=g[I]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:S}=this;f.dTheta.value=p,f.mipInt.value=S-i;let x=this._sizeLods[r],T=3*x*(r>S-co?r-S+co:0),w=4*(this._cubeSize-x);L1(t,T,w,3*x,2*x),c.setRenderTarget(t),c.render(d,Yl)}};function KL(n){let e=[],t=[],i=[],r=n,s=n-co+1+C_.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let c=1/a;o>n-co?c=C_[o-n+co-1]:o===0&&(c=0),t.push(c);let l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,p=6,y=3,m=2,g=1,M=new Float32Array(y*p*h),S=new Float32Array(m*p*h),x=new Float32Array(g*p*h);for(let w=0;w<h;w++){let I=w%3*2/3-1,_=w>2?0:-1,E=[I,_,0,I+2/3,_,0,I+2/3,_+1,0,I,_,0,I+2/3,_+1,0,I,_+1,0];M.set(E,y*p*w),S.set(f,m*p*w);let A=[w,w,w,w,w,w];x.set(A,g*p*w)}let T=new qn;T.setAttribute("position",new $n(M,y)),T.setAttribute("uv",new $n(S,m)),T.setAttribute("faceIndex",new $n(x,g)),i.push(new An(T,null)),r>co&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function I_(n,e,t){let i=new pi(n,e,t);return i.texture.mapping=Bl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function L1(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function JL(n,e,t){return new mi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:YL,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:zr,depthTest:!1,depthWrite:!1})}function QL(n,e,t){let i=new Float32Array(la),r=new F(0,1,0);return new mi({name:"SphericalGaussianBlur",defines:{n:la,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zr,depthTest:!1,depthWrite:!1})}function A_(){return new mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zr,depthTest:!1,depthWrite:!1})}function D_(){return new mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zr,depthTest:!1,depthWrite:!1})}function Bf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ff=class extends pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Al(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new D1(5,5,5),s=new mi({name:"CubemapFromEquirect",uniforms:ca(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xn,blending:zr});s.uniforms.tEquirect.value=t;let o=new An(r,s),a=t.minFilter;return t.minFilter===ro&&(t.minFilter=In),new Wd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}};function ez(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,h=!1){return f==null?null:h?o(f):s(f)}function s(f){if(f&&f.isTexture){let h=f.mapping;if(h===qd||h===Xd)if(e.has(f)){let p=e.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let y=new Ff(p.height);return y.fromEquirectangularTexture(n,f),e.set(f,y),f.addEventListener("dispose",l),a(y.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let h=f.mapping,p=h===qd||h===Xd,y=h===io||h===aa;if(p||y){let m=t.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return i===null&&(i=new kf(n)),m=p?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let M=f.image;return p&&M&&M.height>0||y&&M&&c(M)?(i===null&&(i=new kf(n)),m=p?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function a(f,h){return h===qd?f.mapping=io:h===Xd&&(f.mapping=aa),f}function c(f){let h=0,p=6;for(let y=0;y<p;y++)f[y]!==void 0&&h++;return h===p}function l(f){let h=f.target;h.removeEventListener("dispose",l);let p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(f){let h=f.target;h.removeEventListener("dispose",u);let p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function tz(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&ia("WebGLRenderer: "+i+" extension not supported."),r}}}function nz(n,e,t,i){let r={},s=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete r[f.id];let h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(d){let f=d.attributes;for(let h in f)e.update(f[h],n.ARRAY_BUFFER)}function l(d){let f=[],h=d.index,p=d.attributes.position,y=0;if(p===void 0)return;if(h!==null){let M=h.array;y=h.version;for(let S=0,x=M.length;S<x;S+=3){let T=M[S+0],w=M[S+1],I=M[S+2];f.push(T,w,w,I,I,T)}}else{let M=p.array;y=p.version;for(let S=0,x=M.length/3-1;S<x;S+=3){let T=S+0,w=S+1,I=S+2;f.push(T,w,w,I,I,T)}}let m=new(p.count>=65535?wl:El)(f,1);m.version=y;let g=s.get(d);g&&e.remove(g),s.set(d,m)}function u(d){let f=s.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function iz(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,f){n.drawElements(i,f,s,d*o),t.update(f,i,1)}function l(d,f,h){h!==0&&(n.drawElementsInstanced(i,f,s,d*o,h),t.update(f,i,h))}function u(d,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,h);let y=0;for(let m=0;m<h;m++)y+=f[m];t.update(y,i,1)}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function rz(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:He("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function sz(n,e,t){let i=new WeakMap,r=new jt;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let A=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",A)};var h=A;f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],x=0;p===!0&&(x=1),y===!0&&(x=2),m===!0&&(x=3);let T=a.attributes.position.count*x,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);let I=new Float32Array(T*w*4*d),_=new bl(I,T,w,d);_.type=sr,_.needsUpdate=!0;let E=x*4;for(let D=0;D<d;D++){let O=g[D],X=M[D],ee=S[D],U=T*w*4*D;for(let L=0;L<O.count;L++){let N=L*E;p===!0&&(r.fromBufferAttribute(O,L),I[U+N+0]=r.x,I[U+N+1]=r.y,I[U+N+2]=r.z,I[U+N+3]=0),y===!0&&(r.fromBufferAttribute(X,L),I[U+N+4]=r.x,I[U+N+5]=r.y,I[U+N+6]=r.z,I[U+N+7]=0),m===!0&&(r.fromBufferAttribute(ee,L),I[U+N+8]=r.x,I[U+N+9]=r.y,I[U+N+10]=r.z,I[U+N+11]=ee.itemSize===4?r.w:1)}}f={count:d,texture:_,size:new ht(T,w)},i.set(a,f),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let m=0;m<l.length;m++)p+=l[m];let y=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",y),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function oz(n,e,t,i,r){let s=new WeakMap;function o(l){let u=r.render.frame,d=l.geometry,f=e.get(l,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){let h=l.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return f}function a(){s=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var az={[Hp]:"LINEAR_TONE_MAPPING",[Gp]:"REINHARD_TONE_MAPPING",[jp]:"CINEON_TONE_MAPPING",[Wp]:"ACES_FILMIC_TONE_MAPPING",[qp]:"AGX_TONE_MAPPING",[Xp]:"NEUTRAL_TONE_MAPPING",[$p]:"CUSTOM_TONE_MAPPING"};function cz(n,e,t,i,r,s){let o=new pi(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new hs(e,t):void 0}),a=new pi(e,t,{type:Or,depthBuffer:!1,stencilBuffer:!1}),c=new qn;c.setAttribute("position",new xn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new xn([0,2,0,0,2,0],2));let l=new Ld({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new An(c,l),d=new Fl(-1,1,1,-1,0,1),f=null,h=null,p=!1,y,m=null,g=[],M=!1;this.setSize=function(S,x){o.setSize(S,x),a.setSize(S,x);for(let T=0;T<g.length;T++){let w=g[T];w.setSize&&w.setSize(S,x)}},this.setEffects=function(S){g=S,M=g.length>0&&g[0].isRenderPass===!0;let x=o.width,T=o.height;for(let w=0;w<g.length;w++){let I=g[w];I.setSize&&I.setSize(x,T)}},this.begin=function(S,x){if(p||S.toneMapping===ir&&g.length===0)return!1;if(m=x,x!==null){let T=x.width,w=x.height;(o.width!==T||o.height!==w)&&this.setSize(T,w)}return M===!1&&S.setRenderTarget(o),y=S.toneMapping,S.toneMapping=ir,!0},this.hasRenderPass=function(){return M},this.end=function(S,x){S.toneMapping=y,p=!0;let T=o,w=a;for(let I=0;I<g.length;I++){let _=g[I];if(_.enabled!==!1&&(_.render(S,w,T,x),_.needsSwap!==!1)){let E=T;T=w,w=E}}if(f!==S.outputColorSpace||h!==S.toneMapping){f=S.outputColorSpace,h=S.toneMapping,l.defines={},dt.getTransfer(f)===Ct&&(l.defines.SRGB_TRANSFER="");let I=az[h];I&&(l.defines[I]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=T.texture,S.setRenderTarget(m),S.render(u,d),m=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),c.dispose(),l.dispose()}}var Z_=new ms,m6=new hs(1,1),K_=new bl,J_=new Nd,Q_=new Al,N_=[],R_=[],P_=new Float32Array(16),L_=new Float32Array(9),z_=new Float32Array(4);function O1(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=N_[r];if(s===void 0&&(s=new Float32Array(r),N_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function mn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function gn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Vf(n,e){let t=R_[e];t===void 0&&(t=new Int32Array(e),R_[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function lz(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function uz(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;n.uniform2fv(this.addr,e),gn(t,e)}}function dz(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mn(t,e))return;n.uniform3fv(this.addr,e),gn(t,e)}}function fz(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;n.uniform4fv(this.addr,e),gn(t,e)}}function hz(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(mn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,i))return;z_.set(i),n.uniformMatrix2fv(this.addr,!1,z_),gn(t,i)}}function pz(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(mn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,i))return;L_.set(i),n.uniformMatrix3fv(this.addr,!1,L_),gn(t,i)}}function mz(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(mn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,i))return;P_.set(i),n.uniformMatrix4fv(this.addr,!1,P_),gn(t,i)}}function gz(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function vz(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;n.uniform2iv(this.addr,e),gn(t,e)}}function yz(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;n.uniform3iv(this.addr,e),gn(t,e)}}function _z(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;n.uniform4iv(this.addr,e),gn(t,e)}}function bz(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function xz(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;n.uniform2uiv(this.addr,e),gn(t,e)}}function Mz(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;n.uniform3uiv(this.addr,e),gn(t,e)}}function Sz(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;n.uniform4uiv(this.addr,e),gn(t,e)}}function Ez(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(m6.compareFunction=t.isReversedDepthBuffer()?Lf:Pf,s=m6):s=Z_,t.setTexture2D(e||s,r)}function wz(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||J_,r)}function Cz(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Q_,r)}function Tz(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||K_,r)}function Iz(n){switch(n){case 5126:return lz;case 35664:return uz;case 35665:return dz;case 35666:return fz;case 35674:return hz;case 35675:return pz;case 35676:return mz;case 5124:case 35670:return gz;case 35667:case 35671:return vz;case 35668:case 35672:return yz;case 35669:case 35673:return _z;case 5125:return bz;case 36294:return xz;case 36295:return Mz;case 36296:return Sz;case 35678:case 36198:case 36298:case 36306:case 35682:return Ez;case 35679:case 36299:case 36307:return wz;case 35680:case 36300:case 36308:case 36293:return Cz;case 36289:case 36303:case 36311:case 36292:return Tz}}function Az(n,e){n.uniform1fv(this.addr,e)}function Dz(n,e){let t=O1(e,this.size,2);n.uniform2fv(this.addr,t)}function Nz(n,e){let t=O1(e,this.size,3);n.uniform3fv(this.addr,t)}function Rz(n,e){let t=O1(e,this.size,4);n.uniform4fv(this.addr,t)}function Pz(n,e){let t=O1(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Lz(n,e){let t=O1(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function zz(n,e){let t=O1(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Oz(n,e){n.uniform1iv(this.addr,e)}function kz(n,e){n.uniform2iv(this.addr,e)}function Fz(n,e){n.uniform3iv(this.addr,e)}function Uz(n,e){n.uniform4iv(this.addr,e)}function Bz(n,e){n.uniform1uiv(this.addr,e)}function Vz(n,e){n.uniform2uiv(this.addr,e)}function Hz(n,e){n.uniform3uiv(this.addr,e)}function Gz(n,e){n.uniform4uiv(this.addr,e)}function jz(n,e,t){let i=this.cache,r=e.length,s=Vf(t,r);mn(i,s)||(n.uniform1iv(this.addr,s),gn(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=m6:o=Z_;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function Wz(n,e,t){let i=this.cache,r=e.length,s=Vf(t,r);mn(i,s)||(n.uniform1iv(this.addr,s),gn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||J_,s[o])}function $z(n,e,t){let i=this.cache,r=e.length,s=Vf(t,r);mn(i,s)||(n.uniform1iv(this.addr,s),gn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Q_,s[o])}function qz(n,e,t){let i=this.cache,r=e.length,s=Vf(t,r);mn(i,s)||(n.uniform1iv(this.addr,s),gn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||K_,s[o])}function Xz(n){switch(n){case 5126:return Az;case 35664:return Dz;case 35665:return Nz;case 35666:return Rz;case 35674:return Pz;case 35675:return Lz;case 35676:return zz;case 5124:case 35670:return Oz;case 35667:case 35671:return kz;case 35668:case 35672:return Fz;case 35669:case 35673:return Uz;case 5125:return Bz;case 36294:return Vz;case 36295:return Hz;case 36296:return Gz;case 35678:case 36198:case 36298:case 36306:case 35682:return jz;case 35679:case 36299:case 36307:return Wz;case 35680:case 36300:case 36308:case 36293:return $z;case 36289:case 36303:case 36311:case 36292:return qz}}var g6=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Iz(t.type)}},v6=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xz(t.type)}},y6=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},h6=/(\w+)(\])?(\[|\.)?/g;function O_(n,e){n.seq.push(e),n.map[e.id]=e}function Yz(n,e,t){let i=n.name,r=i.length;for(h6.lastIndex=0;;){let s=h6.exec(i),o=h6.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){O_(t,l===void 0?new g6(a,n,e):new v6(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new y6(a),O_(t,d)),t=d}}}var z1=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Yz(a,c,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function k_(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Zz=37297,Kz=0;function Jz(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var F_=new qe;function Qz(n){dt._getMatrix(F_,dt.workingColorSpace,n);let e=`mat3( ${F_.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(n)){case vl:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function U_(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Jz(n.getShaderSource(e),a)}else return s}function eO(n,e){let t=Qz(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var tO={[Hp]:"Linear",[Gp]:"Reinhard",[jp]:"Cineon",[Wp]:"ACESFilmic",[qp]:"AgX",[Xp]:"Neutral",[$p]:"Custom"};function nO(n,e){let t=tO[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Of=new F;function iO(){dt.getLuminanceCoefficients(Of);let n=Of.x.toFixed(4),e=Of.y.toFixed(4),t=Of.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rO(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kl).join(`
`)}function sO(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function oO(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Kl(n){return n!==""}function B_(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function V_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var aO=/^[ \t]*#include +<([\w\d./]+)>/gm;function _6(n){return n.replace(aO,lO)}var cO=new Map;function lO(n,e){let t=it[e];if(t===void 0){let i=cO.get(e);if(i!==void 0)t=it[i],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return _6(t)}var uO=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function H_(n){return n.replace(uO,dO)}function dO(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function G_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var fO={[Ul]:"SHADOWMAP_TYPE_PCF",[N1]:"SHADOWMAP_TYPE_VSM"};function hO(n){return fO[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var pO={[io]:"ENVMAP_TYPE_CUBE",[aa]:"ENVMAP_TYPE_CUBE",[Bl]:"ENVMAP_TYPE_CUBE_UV"};function mO(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":pO[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var gO={[aa]:"ENVMAP_MODE_REFRACTION"};function vO(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":gO[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var yO={[Vp]:"ENVMAP_BLENDING_MULTIPLY",[l_]:"ENVMAP_BLENDING_MIX",[u_]:"ENVMAP_BLENDING_ADD"};function _O(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":yO[n.combine]||"ENVMAP_BLENDING_NONE"}function bO(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function xO(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=hO(t),l=mO(t),u=vO(t),d=_O(t),f=bO(t),h=rO(t),p=sO(s),y=r.createProgram(),m,g,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Kl).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Kl).join(`
`),g.length>0&&(g+=`
`)):(m=[G_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kl).join(`
`),g=[G_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ir?"#define TONE_MAPPING":"",t.toneMapping!==ir?it.tonemapping_pars_fragment:"",t.toneMapping!==ir?nO("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,eO("linearToOutputTexel",t.outputColorSpace),iO(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Kl).join(`
`)),o=_6(o),o=B_(o,t),o=V_(o,t),a=_6(a),a=B_(a,t),a=V_(a,t),o=H_(o),a=H_(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===i6?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===i6?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let S=M+m+o,x=M+g+a,T=k_(r,r.VERTEX_SHADER,S),w=k_(r,r.FRAGMENT_SHADER,x);r.attachShader(y,T),r.attachShader(y,w),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function I(D){if(n.debug.checkShaderErrors){let O=r.getProgramInfoLog(y)||"",X=r.getShaderInfoLog(T)||"",ee=r.getShaderInfoLog(w)||"",U=O.trim(),L=X.trim(),N=ee.trim(),B=!0,q=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,T,w);else{let se=U_(r,T,"vertex"),fe=U_(r,w,"fragment");He("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+U+`
`+se+`
`+fe)}else U!==""?Ve("WebGLProgram: Program Info Log:",U):(L===""||N==="")&&(q=!1);q&&(D.diagnostics={runnable:B,programLog:U,vertexShader:{log:L,prefix:m},fragmentShader:{log:N,prefix:g}})}r.deleteShader(T),r.deleteShader(w),_=new z1(r,y),E=oO(r,y)}let _;this.getUniforms=function(){return _===void 0&&I(this),_};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(y,Zz)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kz++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=w,this}var MO=0,b6=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new x6(e),t.set(e,i)),i}},x6=class{constructor(e){this.id=MO++,this.code=e,this.usedTimes=0}};function SO(n){return n===oo||n===$l||n===ql}function EO(n,e,t,i,r,s){let o=new Ml,a=new b6,c=new Set,l=[],u=new Map,d=i.logarithmicDepthBuffer,f=i.precision,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function y(_,E,A,D,O,X){let ee=D.fog,U=O.geometry,L=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,N=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,B=e.get(_.envMap||L,N),q=B&&B.mapping===Bl?B.image.height:null,se=h[_.type];_.precision!==null&&(f=i.getMaxPrecision(_.precision),f!==_.precision&&Ve("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let fe=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,me=fe!==void 0?fe.length:0,nt=0;U.morphAttributes.position!==void 0&&(nt=1),U.morphAttributes.normal!==void 0&&(nt=2),U.morphAttributes.color!==void 0&&(nt=3);let je,pt,K,ie;if(se){let Ce=Fr[se];je=Ce.vertexShader,pt=Ce.fragmentShader}else{je=_.vertexShader,pt=_.fragmentShader;let Ce=a.getVertexShaderStage(_),$t=a.getFragmentShaderStage(_);a.update(_,Ce,$t),K=Ce.id,ie=$t.id}let ne=n.getRenderTarget(),Ie=n.state.buffers.depth.getReversed(),Ge=O.isInstancedMesh===!0,Le=O.isBatchedMesh===!0,Jt=!!_.map,ut=!!_.matcap,Rt=!!B,_t=!!_.aoMap,gt=!!_.lightMap,sn=!!_.bumpMap&&_.wireframe===!1,un=!!_.normalMap,vn=!!_.displacementMap,Sn=!!_.emissiveMap,Wt=!!_.metalnessMap,on=!!_.roughnessMap,P=_.anisotropy>0,Yn=_.clearcoat>0,Tt=_.dispersion>0,C=_.iridescence>0,v=_.sheen>0,k=_.transmission>0,G=P&&!!_.anisotropyMap,W=Yn&&!!_.clearcoatMap,ue=Yn&&!!_.clearcoatNormalMap,pe=Yn&&!!_.clearcoatRoughnessMap,$=C&&!!_.iridescenceMap,J=C&&!!_.iridescenceThicknessMap,ge=v&&!!_.sheenColorMap,De=v&&!!_.sheenRoughnessMap,_e=!!_.specularMap,ve=!!_.specularColorMap,ze=!!_.specularIntensityMap,Be=k&&!!_.transmissionMap,Je=k&&!!_.thicknessMap,R=!!_.gradientMap,he=!!_.alphaMap,Z=_.alphaTest>0,ye=!!_.alphaHash,Se=!!_.extensions,te=ir;_.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(te=n.toneMapping);let Ae={shaderID:se,shaderType:_.type,shaderName:_.name,vertexShader:je,fragmentShader:pt,defines:_.defines,customVertexShaderID:K,customFragmentShaderID:ie,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:Le,batchingColor:Le&&O._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&O.instanceColor!==null,instancingMorph:Ge&&O.morphTexture!==null,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Jt,matcap:ut,envMap:Rt,envMapMode:Rt&&B.mapping,envMapCubeUVHeight:q,aoMap:_t,lightMap:gt,bumpMap:sn,normalMap:un,displacementMap:vn,emissiveMap:Sn,normalMapObjectSpace:un&&_.normalMapType===h_,normalMapTangentSpace:un&&_.normalMapType===n6,packedNormalMap:un&&_.normalMapType===n6&&SO(_.normalMap.format),metalnessMap:Wt,roughnessMap:on,anisotropy:P,anisotropyMap:G,clearcoat:Yn,clearcoatMap:W,clearcoatNormalMap:ue,clearcoatRoughnessMap:pe,dispersion:Tt,iridescence:C,iridescenceMap:$,iridescenceThicknessMap:J,sheen:v,sheenColorMap:ge,sheenRoughnessMap:De,specularMap:_e,specularColorMap:ve,specularIntensityMap:ze,transmission:k,transmissionMap:Be,thicknessMap:Je,gradientMap:R,opaque:_.transparent===!1&&_.blending===ra&&_.alphaToCoverage===!1,alphaMap:he,alphaTest:Z,alphaHash:ye,combine:_.combine,mapUv:Jt&&p(_.map.channel),aoMapUv:_t&&p(_.aoMap.channel),lightMapUv:gt&&p(_.lightMap.channel),bumpMapUv:sn&&p(_.bumpMap.channel),normalMapUv:un&&p(_.normalMap.channel),displacementMapUv:vn&&p(_.displacementMap.channel),emissiveMapUv:Sn&&p(_.emissiveMap.channel),metalnessMapUv:Wt&&p(_.metalnessMap.channel),roughnessMapUv:on&&p(_.roughnessMap.channel),anisotropyMapUv:G&&p(_.anisotropyMap.channel),clearcoatMapUv:W&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:ue&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:J&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:De&&p(_.sheenRoughnessMap.channel),specularMapUv:_e&&p(_.specularMap.channel),specularColorMapUv:ve&&p(_.specularColorMap.channel),specularIntensityMapUv:ze&&p(_.specularIntensityMap.channel),transmissionMapUv:Be&&p(_.transmissionMap.channel),thicknessMapUv:Je&&p(_.thicknessMap.channel),alphaMapUv:he&&p(_.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(un||P),vertexNormals:!!U.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!U.attributes.uv&&(Jt||he),fog:!!ee,useFog:_.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||U.attributes.normal===void 0&&un===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ie,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:nt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:te,decodeVideoTexture:Jt&&_.map.isVideoTexture===!0&&dt.getTransfer(_.map.colorSpace)===Ct,decodeVideoTextureEmissive:Sn&&_.emissiveMap.isVideoTexture===!0&&dt.getTransfer(_.emissiveMap.colorSpace)===Ct,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Lr,flipSided:_.side===Xn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Se&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&_.extensions.multiDraw===!0||Le)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function m(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let A in _.defines)E.push(A),E.push(_.defines[A]);return _.isRawShaderMaterial===!1&&(g(E,_),M(E,_),E.push(n.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function g(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function M(_,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function S(_){let E=h[_.type],A;if(E){let D=Fr[E];A=w_.clone(D.uniforms)}else A=_.uniforms;return A}function x(_,E){let A=u.get(E);return A!==void 0?++A.usedTimes:(A=new xO(n,E,_,r),l.push(A),u.set(E,A)),A}function T(_){if(--_.usedTimes===0){let E=l.indexOf(_);l[E]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function w(_){a.remove(_)}function I(){a.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:S,acquireProgram:x,releaseProgram:T,releaseShaderCache:w,programs:l,dispose:I}}function wO(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function CO(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function j_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function W_(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function a(f,h,p,y,m,g){let M=n[e];return M===void 0?(M={id:f.id,object:f,geometry:h,material:p,materialVariant:o(f),groupOrder:y,renderOrder:f.renderOrder,z:m,group:g},n[e]=M):(M.id=f.id,M.object=f,M.geometry=h,M.material=p,M.materialVariant=o(f),M.groupOrder=y,M.renderOrder=f.renderOrder,M.z=m,M.group=g),e++,M}function c(f,h,p,y,m,g){let M=a(f,h,p,y,m,g);p.transmission>0?i.push(M):p.transparent===!0?r.push(M):t.push(M)}function l(f,h,p,y,m,g){let M=a(f,h,p,y,m,g);p.transmission>0?i.unshift(M):p.transparent===!0?r.unshift(M):t.unshift(M)}function u(f,h,p){t.length>1&&t.sort(f||CO),i.length>1&&i.sort(h||j_),r.length>1&&r.sort(h||j_),p&&(t.reverse(),i.reverse(),r.reverse())}function d(){for(let f=e,h=n.length;f<h;f++){let p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:d,sort:u}}function TO(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new W_,n.set(i,[o])):r>=s.length?(o=new W_,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function IO(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new mt};break;case"SpotLight":t={position:new F,direction:new F,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function AO(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var DO=0;function NO(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function RO(n){let e=new IO,t=AO(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new F);let r=new F,s=new Kt,o=new Kt;function a(l){let u=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let h=0,p=0,y=0,m=0,g=0,M=0,S=0,x=0,T=0,w=0,I=0;l.sort(NO);for(let E=0,A=l.length;E<A;E++){let D=l[E],O=D.color,X=D.intensity,ee=D.distance,U=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===oo?U=D.shadow.map.texture:U=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=O.r*X,d+=O.g*X,f+=O.b*X;else if(D.isLightProbe){for(let L=0;L<9;L++)i.probe[L].addScaledVector(D.sh.coefficients[L],X);I++}else if(D.isDirectionalLight){let L=e.get(D);if(L.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let N=D.shadow,B=t.get(D);B.shadowIntensity=N.intensity,B.shadowBias=N.bias,B.shadowNormalBias=N.normalBias,B.shadowRadius=N.radius,B.shadowMapSize=N.mapSize,i.directionalShadow[h]=B,i.directionalShadowMap[h]=U,i.directionalShadowMatrix[h]=D.shadow.matrix,M++}i.directional[h]=L,h++}else if(D.isSpotLight){let L=e.get(D);L.position.setFromMatrixPosition(D.matrixWorld),L.color.copy(O).multiplyScalar(X),L.distance=ee,L.coneCos=Math.cos(D.angle),L.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),L.decay=D.decay,i.spot[y]=L;let N=D.shadow;if(D.map&&(i.spotLightMap[T]=D.map,T++,N.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[y]=N.matrix,D.castShadow){let B=t.get(D);B.shadowIntensity=N.intensity,B.shadowBias=N.bias,B.shadowNormalBias=N.normalBias,B.shadowRadius=N.radius,B.shadowMapSize=N.mapSize,i.spotShadow[y]=B,i.spotShadowMap[y]=U,x++}y++}else if(D.isRectAreaLight){let L=e.get(D);L.color.copy(O).multiplyScalar(X),L.halfWidth.set(D.width*.5,0,0),L.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=L,m++}else if(D.isPointLight){let L=e.get(D);if(L.color.copy(D.color).multiplyScalar(D.intensity),L.distance=D.distance,L.decay=D.decay,D.castShadow){let N=D.shadow,B=t.get(D);B.shadowIntensity=N.intensity,B.shadowBias=N.bias,B.shadowNormalBias=N.normalBias,B.shadowRadius=N.radius,B.shadowMapSize=N.mapSize,B.shadowCameraNear=N.camera.near,B.shadowCameraFar=N.camera.far,i.pointShadow[p]=B,i.pointShadowMap[p]=U,i.pointShadowMatrix[p]=D.shadow.matrix,S++}i.point[p]=L,p++}else if(D.isHemisphereLight){let L=e.get(D);L.skyColor.copy(D.color).multiplyScalar(X),L.groundColor.copy(D.groundColor).multiplyScalar(X),i.hemi[g]=L,g++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let _=i.hash;(_.directionalLength!==h||_.pointLength!==p||_.spotLength!==y||_.rectAreaLength!==m||_.hemiLength!==g||_.numDirectionalShadows!==M||_.numPointShadows!==S||_.numSpotShadows!==x||_.numSpotMaps!==T||_.numLightProbes!==I)&&(i.directional.length=h,i.spot.length=y,i.rectArea.length=m,i.point.length=p,i.hemi.length=g,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=x+T-w,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=I,_.directionalLength=h,_.pointLength=p,_.spotLength=y,_.rectAreaLength=m,_.hemiLength=g,_.numDirectionalShadows=M,_.numPointShadows=S,_.numSpotShadows=x,_.numSpotMaps=T,_.numLightProbes=I,i.version=DO++)}function c(l,u){let d=0,f=0,h=0,p=0,y=0,m=u.matrixWorldInverse;for(let g=0,M=l.length;g<M;g++){let S=l[g];if(S.isDirectionalLight){let x=i.directional[d];x.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),d++}else if(S.isSpotLight){let x=i.spot[h];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(S.isRectAreaLight){let x=i.rectArea[p];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(S.isPointLight){let x=i.point[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let x=i.hemi[y];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),y++}}}return{setup:a,setupView:c,state:i}}function $_(n){let e=new RO(n),t=[],i=[],r=[];function s(f){d.camera=f,t.length=0,i.length=0,r.length=0}function o(f){t.push(f)}function a(f){i.push(f)}function c(f){r.push(f)}function l(){e.setup(t)}function u(f){e.setupView(t,f)}let d={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function PO(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new $_(n),e.set(r,[a])):s>=o.length?(a=new $_(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var LO=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zO=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,OO=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],kO=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],q_=new Kt,Zl=new F,p6=new F;function FO(n,e,t){let i=new Tl,r=new ht,s=new ht,o=new jt,a=new zd,c=new Od,l={},u=t.maxTextureSize,d={[ds]:Xn,[Xn]:ds,[Lr]:Lr},f=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:LO,fragmentShader:zO}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let p=new qn;p.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new An(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ul;let g=this.type;this.render=function(w,I,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===jy&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ul);let E=n.getRenderTarget(),A=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),O=n.state;O.setBlending(zr),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let X=g!==this.type;X&&I.traverse(function(ee){ee.material&&(Array.isArray(ee.material)?ee.material.forEach(U=>U.needsUpdate=!0):ee.material.needsUpdate=!0)});for(let ee=0,U=w.length;ee<U;ee++){let L=w[ee],N=L.shadow;if(N===void 0){Ve("WebGLShadowMap:",L,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);let B=N.getFrameExtents();r.multiply(B),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/B.x),r.x=s.x*B.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/B.y),r.y=s.y*B.y,N.mapSize.y=s.y));let q=n.state.buffers.depth.getReversed();if(N.camera._reversedDepth=q,N.map===null||X===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===N1){if(L.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new pi(r.x,r.y,{format:oo,type:Or,minFilter:In,magFilter:In,generateMipmaps:!1}),N.map.texture.name=L.name+".shadowMap",N.map.depthTexture=new hs(r.x,r.y,sr),N.map.depthTexture.name=L.name+".shadowMapDepth",N.map.depthTexture.format=Nr,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Mn,N.map.depthTexture.magFilter=Mn}else L.isPointLight?(N.map=new Ff(r.x),N.map.depthTexture=new Pd(r.x,rr)):(N.map=new pi(r.x,r.y),N.map.depthTexture=new hs(r.x,r.y,rr)),N.map.depthTexture.name=L.name+".shadowMap",N.map.depthTexture.format=Nr,this.type===Ul?(N.map.depthTexture.compareFunction=q?Lf:Pf,N.map.depthTexture.minFilter=In,N.map.depthTexture.magFilter=In):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Mn,N.map.depthTexture.magFilter=Mn);N.camera.updateProjectionMatrix()}let se=N.map.isWebGLCubeRenderTarget?6:1;for(let fe=0;fe<se;fe++){if(N.map.isWebGLCubeRenderTarget)n.setRenderTarget(N.map,fe),n.clear();else{fe===0&&(n.setRenderTarget(N.map),n.clear());let me=N.getViewport(fe);o.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),O.viewport(o)}if(L.isPointLight){let me=N.camera,nt=N.matrix,je=L.distance||me.far;je!==me.far&&(me.far=je,me.updateProjectionMatrix()),Zl.setFromMatrixPosition(L.matrixWorld),me.position.copy(Zl),p6.copy(me.position),p6.add(OO[fe]),me.up.copy(kO[fe]),me.lookAt(p6),me.updateMatrixWorld(),nt.makeTranslation(-Zl.x,-Zl.y,-Zl.z),q_.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),N._frustum.setFromProjectionMatrix(q_,me.coordinateSystem,me.reversedDepth)}else N.updateMatrices(L);i=N.getFrustum(),x(I,_,N.camera,L,this.type)}N.isPointLightShadow!==!0&&this.type===N1&&M(N,_),N.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(E,A,D)};function M(w,I){let _=e.update(y);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new pi(r.x,r.y,{format:oo,type:Or})),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(I,null,_,f,y,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(I,null,_,h,y,null)}function S(w,I,_,E){let A=null,D=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)A=D;else if(A=_.isPointLight===!0?c:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let O=A.uuid,X=I.uuid,ee=l[O];ee===void 0&&(ee={},l[O]=ee);let U=ee[X];U===void 0&&(U=A.clone(),ee[X]=U,I.addEventListener("dispose",T)),A=U}if(A.visible=I.visible,A.wireframe=I.wireframe,E===N1?A.side=I.shadowSide!==null?I.shadowSide:I.side:A.side=I.shadowSide!==null?I.shadowSide:d[I.side],A.alphaMap=I.alphaMap,A.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,A.map=I.map,A.clipShadows=I.clipShadows,A.clippingPlanes=I.clippingPlanes,A.clipIntersection=I.clipIntersection,A.displacementMap=I.displacementMap,A.displacementScale=I.displacementScale,A.displacementBias=I.displacementBias,A.wireframeLinewidth=I.wireframeLinewidth,A.linewidth=I.linewidth,_.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let O=n.properties.get(A);O.light=_}return A}function x(w,I,_,E,A){if(w.visible===!1)return;if(w.layers.test(I.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&A===N1)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);let X=e.update(w),ee=w.material;if(Array.isArray(ee)){let U=X.groups;for(let L=0,N=U.length;L<N;L++){let B=U[L],q=ee[B.materialIndex];if(q&&q.visible){let se=S(w,q,E,A);w.onBeforeShadow(n,w,I,_,X,se,B),n.renderBufferDirect(_,null,X,se,w,B),w.onAfterShadow(n,w,I,_,X,se,B)}}}else if(ee.visible){let U=S(w,ee,E,A);w.onBeforeShadow(n,w,I,_,X,U,null),n.renderBufferDirect(_,null,X,U,w,null),w.onAfterShadow(n,w,I,_,X,U,null)}}let O=w.children;for(let X=0,ee=O.length;X<ee;X++)x(O[X],I,_,E,A)}function T(w){w.target.removeEventListener("dispose",T);for(let _ in l){let E=l[_],A=w.target.uuid;A in E&&(E[A].dispose(),delete E[A])}}}function UO(n,e){function t(){let R=!1,he=new jt,Z=null,ye=new jt(0,0,0,0);return{setMask:function(Se){Z!==Se&&!R&&(n.colorMask(Se,Se,Se,Se),Z=Se)},setLocked:function(Se){R=Se},setClear:function(Se,te,Ae,Ce,$t){$t===!0&&(Se*=Ce,te*=Ce,Ae*=Ce),he.set(Se,te,Ae,Ce),ye.equals(he)===!1&&(n.clearColor(Se,te,Ae,Ce),ye.copy(he))},reset:function(){R=!1,Z=null,ye.set(-1,0,0,0)}}}function i(){let R=!1,he=!1,Z=null,ye=null,Se=null;return{setReversed:function(te){if(he!==te){let Ae=e.get("EXT_clip_control");te?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),he=te;let Ce=Se;Se=null,this.setClear(Ce)}},getReversed:function(){return he},setTest:function(te){te?ne(n.DEPTH_TEST):Ie(n.DEPTH_TEST)},setMask:function(te){Z!==te&&!R&&(n.depthMask(te),Z=te)},setFunc:function(te){if(he&&(te=S_[te]),ye!==te){switch(te){case yd:n.depthFunc(n.NEVER);break;case _d:n.depthFunc(n.ALWAYS);break;case bd:n.depthFunc(n.LESS);break;case sa:n.depthFunc(n.LEQUAL);break;case xd:n.depthFunc(n.EQUAL);break;case Md:n.depthFunc(n.GEQUAL);break;case Sd:n.depthFunc(n.GREATER);break;case Ed:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ye=te}},setLocked:function(te){R=te},setClear:function(te){Se!==te&&(Se=te,he&&(te=1-te),n.clearDepth(te))},reset:function(){R=!1,Z=null,ye=null,Se=null,he=!1}}}function r(){let R=!1,he=null,Z=null,ye=null,Se=null,te=null,Ae=null,Ce=null,$t=null;return{setTest:function(zt){R||(zt?ne(n.STENCIL_TEST):Ie(n.STENCIL_TEST))},setMask:function(zt){he!==zt&&!R&&(n.stencilMask(zt),he=zt)},setFunc:function(zt,dr,fr){(Z!==zt||ye!==dr||Se!==fr)&&(n.stencilFunc(zt,dr,fr),Z=zt,ye=dr,Se=fr)},setOp:function(zt,dr,fr){(te!==zt||Ae!==dr||Ce!==fr)&&(n.stencilOp(zt,dr,fr),te=zt,Ae=dr,Ce=fr)},setLocked:function(zt){R=zt},setClear:function(zt){$t!==zt&&(n.clearStencil(zt),$t=zt)},reset:function(){R=!1,he=null,Z=null,ye=null,Se=null,te=null,Ae=null,Ce=null,$t=null}}}let s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap,u={},d={},f={},h=new WeakMap,p=[],y=null,m=!1,g=null,M=null,S=null,x=null,T=null,w=null,I=null,_=new mt(0,0,0),E=0,A=!1,D=null,O=null,X=null,ee=null,U=null,L=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,B=0,q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(q)[1]),N=B>=1):q.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),N=B>=2);let se=null,fe={},me=n.getParameter(n.SCISSOR_BOX),nt=n.getParameter(n.VIEWPORT),je=new jt().fromArray(me),pt=new jt().fromArray(nt);function K(R,he,Z,ye){let Se=new Uint8Array(4),te=n.createTexture();n.bindTexture(R,te),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ae=0;Ae<Z;Ae++)R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY?n.texImage3D(he,0,n.RGBA,1,1,ye,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(he+Ae,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return te}let ie={};ie[n.TEXTURE_2D]=K(n.TEXTURE_2D,n.TEXTURE_2D,1),ie[n.TEXTURE_CUBE_MAP]=K(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[n.TEXTURE_2D_ARRAY]=K(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ie[n.TEXTURE_3D]=K(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(n.DEPTH_TEST),o.setFunc(sa),sn(!1),un(kp),ne(n.CULL_FACE),_t(zr);function ne(R){u[R]!==!0&&(n.enable(R),u[R]=!0)}function Ie(R){u[R]!==!1&&(n.disable(R),u[R]=!1)}function Ge(R,he){return f[R]!==he?(n.bindFramebuffer(R,he),f[R]=he,R===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=he),R===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=he),!0):!1}function Le(R,he){let Z=p,ye=!1;if(R){Z=h.get(he),Z===void 0&&(Z=[],h.set(he,Z));let Se=R.textures;if(Z.length!==Se.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let te=0,Ae=Se.length;te<Ae;te++)Z[te]=n.COLOR_ATTACHMENT0+te;Z.length=Se.length,ye=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,ye=!0);ye&&n.drawBuffers(Z)}function Jt(R){return y!==R?(n.useProgram(R),y=R,!0):!1}let ut={[Ks]:n.FUNC_ADD,[$y]:n.FUNC_SUBTRACT,[qy]:n.FUNC_REVERSE_SUBTRACT};ut[Xy]=n.MIN,ut[Yy]=n.MAX;let Rt={[Zy]:n.ZERO,[Ky]:n.ONE,[Jy]:n.SRC_COLOR,[gd]:n.SRC_ALPHA,[r_]:n.SRC_ALPHA_SATURATE,[n_]:n.DST_COLOR,[e_]:n.DST_ALPHA,[Qy]:n.ONE_MINUS_SRC_COLOR,[vd]:n.ONE_MINUS_SRC_ALPHA,[i_]:n.ONE_MINUS_DST_COLOR,[t_]:n.ONE_MINUS_DST_ALPHA,[s_]:n.CONSTANT_COLOR,[o_]:n.ONE_MINUS_CONSTANT_COLOR,[a_]:n.CONSTANT_ALPHA,[c_]:n.ONE_MINUS_CONSTANT_ALPHA};function _t(R,he,Z,ye,Se,te,Ae,Ce,$t,zt){if(R===zr){m===!0&&(Ie(n.BLEND),m=!1);return}if(m===!1&&(ne(n.BLEND),m=!0),R!==Wy){if(R!==g||zt!==A){if((M!==Ks||T!==Ks)&&(n.blendEquation(n.FUNC_ADD),M=Ks,T=Ks),zt)switch(R){case ra:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fp:n.blendFunc(n.ONE,n.ONE);break;case Up:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bp:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:He("WebGLState: Invalid blending: ",R);break}else switch(R){case ra:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fp:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Up:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bp:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",R);break}S=null,x=null,w=null,I=null,_.set(0,0,0),E=0,g=R,A=zt}return}Se=Se||he,te=te||Z,Ae=Ae||ye,(he!==M||Se!==T)&&(n.blendEquationSeparate(ut[he],ut[Se]),M=he,T=Se),(Z!==S||ye!==x||te!==w||Ae!==I)&&(n.blendFuncSeparate(Rt[Z],Rt[ye],Rt[te],Rt[Ae]),S=Z,x=ye,w=te,I=Ae),(Ce.equals(_)===!1||$t!==E)&&(n.blendColor(Ce.r,Ce.g,Ce.b,$t),_.copy(Ce),E=$t),g=R,A=!1}function gt(R,he){R.side===Lr?Ie(n.CULL_FACE):ne(n.CULL_FACE);let Z=R.side===Xn;he&&(Z=!Z),sn(Z),R.blending===ra&&R.transparent===!1?_t(zr):_t(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),s.setMask(R.colorWrite);let ye=R.stencilWrite;a.setTest(ye),ye&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Sn(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):Ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function sn(R){D!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),D=R)}function un(R){R!==Hy?(ne(n.CULL_FACE),R!==O&&(R===kp?n.cullFace(n.BACK):R===Gy?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ie(n.CULL_FACE),O=R}function vn(R){R!==X&&(N&&n.lineWidth(R),X=R)}function Sn(R,he,Z){R?(ne(n.POLYGON_OFFSET_FILL),(ee!==he||U!==Z)&&(ee=he,U=Z,o.getReversed()&&(he=-he),n.polygonOffset(he,Z))):Ie(n.POLYGON_OFFSET_FILL)}function Wt(R){R?ne(n.SCISSOR_TEST):Ie(n.SCISSOR_TEST)}function on(R){R===void 0&&(R=n.TEXTURE0+L-1),se!==R&&(n.activeTexture(R),se=R)}function P(R,he,Z){Z===void 0&&(se===null?Z=n.TEXTURE0+L-1:Z=se);let ye=fe[Z];ye===void 0&&(ye={type:void 0,texture:void 0},fe[Z]=ye),(ye.type!==R||ye.texture!==he)&&(se!==Z&&(n.activeTexture(Z),se=Z),n.bindTexture(R,he||ie[R]),ye.type=R,ye.texture=he)}function Yn(){let R=fe[se];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Tt(){try{n.compressedTexImage2D(...arguments)}catch(R){He("WebGLState:",R)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(R){He("WebGLState:",R)}}function v(){try{n.texSubImage2D(...arguments)}catch(R){He("WebGLState:",R)}}function k(){try{n.texSubImage3D(...arguments)}catch(R){He("WebGLState:",R)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(R){He("WebGLState:",R)}}function W(){try{n.compressedTexSubImage3D(...arguments)}catch(R){He("WebGLState:",R)}}function ue(){try{n.texStorage2D(...arguments)}catch(R){He("WebGLState:",R)}}function pe(){try{n.texStorage3D(...arguments)}catch(R){He("WebGLState:",R)}}function $(){try{n.texImage2D(...arguments)}catch(R){He("WebGLState:",R)}}function J(){try{n.texImage3D(...arguments)}catch(R){He("WebGLState:",R)}}function ge(R){return d[R]!==void 0?d[R]:n.getParameter(R)}function De(R,he){d[R]!==he&&(n.pixelStorei(R,he),d[R]=he)}function _e(R){je.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),je.copy(R))}function ve(R){pt.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),pt.copy(R))}function ze(R,he){let Z=l.get(he);Z===void 0&&(Z=new WeakMap,l.set(he,Z));let ye=Z.get(R);ye===void 0&&(ye=n.getUniformBlockIndex(he,R.name),Z.set(R,ye))}function Be(R,he){let ye=l.get(he).get(R);c.get(he)!==ye&&(n.uniformBlockBinding(he,ye,R.__bindingPointIndex),c.set(he,ye))}function Je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},se=null,fe={},f={},h=new WeakMap,p=[],y=null,m=!1,g=null,M=null,S=null,x=null,T=null,w=null,I=null,_=new mt(0,0,0),E=0,A=!1,D=null,O=null,X=null,ee=null,U=null,je.set(0,0,n.canvas.width,n.canvas.height),pt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ne,disable:Ie,bindFramebuffer:Ge,drawBuffers:Le,useProgram:Jt,setBlending:_t,setMaterial:gt,setFlipSided:sn,setCullFace:un,setLineWidth:vn,setPolygonOffset:Sn,setScissorTest:Wt,activeTexture:on,bindTexture:P,unbindTexture:Yn,compressedTexImage2D:Tt,compressedTexImage3D:C,texImage2D:$,texImage3D:J,pixelStorei:De,getParameter:ge,updateUBOMapping:ze,uniformBlockBinding:Be,texStorage2D:ue,texStorage3D:pe,texSubImage2D:v,texSubImage3D:k,compressedTexSubImage2D:G,compressedTexSubImage3D:W,scissor:_e,viewport:ve,reset:Je}}function BO(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ht,u=new WeakMap,d=new Set,f,h=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(C){}function y(C,v){return p?new OffscreenCanvas(C,v):_l("canvas")}function m(C,v,k){let G=1,W=Tt(C);if((W.width>k||W.height>k)&&(G=k/Math.max(W.width,W.height)),G<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ue=Math.floor(G*W.width),pe=Math.floor(G*W.height);f===void 0&&(f=y(ue,pe));let $=v?y(ue,pe):f;return $.width=ue,$.height=pe,$.getContext("2d").drawImage(C,0,0,ue,pe),Ve("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+ue+"x"+pe+")."),$}else return"data"in C&&Ve("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),C;return C}function g(C){return C.generateMipmaps}function M(C){n.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(C,v,k,G,W,ue=!1){if(C!==null){if(n[C]!==void 0)return n[C];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let pe;G&&(pe=e.get("EXT_texture_norm16"),pe||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=v;if(v===n.RED&&(k===n.FLOAT&&($=n.R32F),k===n.HALF_FLOAT&&($=n.R16F),k===n.UNSIGNED_BYTE&&($=n.R8),k===n.UNSIGNED_SHORT&&pe&&($=pe.R16_EXT),k===n.SHORT&&pe&&($=pe.R16_SNORM_EXT)),v===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&($=n.R8UI),k===n.UNSIGNED_SHORT&&($=n.R16UI),k===n.UNSIGNED_INT&&($=n.R32UI),k===n.BYTE&&($=n.R8I),k===n.SHORT&&($=n.R16I),k===n.INT&&($=n.R32I)),v===n.RG&&(k===n.FLOAT&&($=n.RG32F),k===n.HALF_FLOAT&&($=n.RG16F),k===n.UNSIGNED_BYTE&&($=n.RG8),k===n.UNSIGNED_SHORT&&pe&&($=pe.RG16_EXT),k===n.SHORT&&pe&&($=pe.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&($=n.RG8UI),k===n.UNSIGNED_SHORT&&($=n.RG16UI),k===n.UNSIGNED_INT&&($=n.RG32UI),k===n.BYTE&&($=n.RG8I),k===n.SHORT&&($=n.RG16I),k===n.INT&&($=n.RG32I)),v===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&($=n.RGB8UI),k===n.UNSIGNED_SHORT&&($=n.RGB16UI),k===n.UNSIGNED_INT&&($=n.RGB32UI),k===n.BYTE&&($=n.RGB8I),k===n.SHORT&&($=n.RGB16I),k===n.INT&&($=n.RGB32I)),v===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&($=n.RGBA8UI),k===n.UNSIGNED_SHORT&&($=n.RGBA16UI),k===n.UNSIGNED_INT&&($=n.RGBA32UI),k===n.BYTE&&($=n.RGBA8I),k===n.SHORT&&($=n.RGBA16I),k===n.INT&&($=n.RGBA32I)),v===n.RGB&&(k===n.UNSIGNED_SHORT&&pe&&($=pe.RGB16_EXT),k===n.SHORT&&pe&&($=pe.RGB16_SNORM_EXT),k===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),v===n.RGBA){let J=ue?vl:dt.getTransfer(W);k===n.FLOAT&&($=n.RGBA32F),k===n.HALF_FLOAT&&($=n.RGBA16F),k===n.UNSIGNED_BYTE&&($=J===Ct?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT&&pe&&($=pe.RGBA16_EXT),k===n.SHORT&&pe&&($=pe.RGBA16_SNORM_EXT),k===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function T(C,v){let k;return C?v===null||v===rr||v===P1?k=n.DEPTH24_STENCIL8:v===sr?k=n.DEPTH32F_STENCIL8:v===R1&&(k=n.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===rr||v===P1?k=n.DEPTH_COMPONENT24:v===sr?k=n.DEPTH_COMPONENT32F:v===R1&&(k=n.DEPTH_COMPONENT16),k}function w(C,v){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==Mn&&C.minFilter!==In?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function I(C){let v=C.target;v.removeEventListener("dispose",I),E(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&d.delete(v)}function _(C){let v=C.target;v.removeEventListener("dispose",_),D(v)}function E(C){let v=i.get(C);if(v.__webglInit===void 0)return;let k=C.source,G=h.get(k);if(G){let W=G[v.__cacheKey];W.usedTimes--,W.usedTimes===0&&A(C),Object.keys(G).length===0&&h.delete(k)}i.remove(C)}function A(C){let v=i.get(C);n.deleteTexture(v.__webglTexture);let k=C.source,G=h.get(k);delete G[v.__cacheKey],o.memory.textures--}function D(C){let v=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(v.__webglFramebuffer[G]))for(let W=0;W<v.__webglFramebuffer[G].length;W++)n.deleteFramebuffer(v.__webglFramebuffer[G][W]);else n.deleteFramebuffer(v.__webglFramebuffer[G]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[G])}else{if(Array.isArray(v.__webglFramebuffer))for(let G=0;G<v.__webglFramebuffer.length;G++)n.deleteFramebuffer(v.__webglFramebuffer[G]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let G=0;G<v.__webglColorRenderbuffer.length;G++)v.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[G]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let k=C.textures;for(let G=0,W=k.length;G<W;G++){let ue=i.get(k[G]);ue.__webglTexture&&(n.deleteTexture(ue.__webglTexture),o.memory.textures--),i.remove(k[G])}i.remove(C)}let O=0;function X(){O=0}function ee(){return O}function U(C){O=C}function L(){let C=O;return C>=r.maxTextures&&Ve("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),O+=1,C}function N(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function B(C,v){let k=i.get(C);if(C.isVideoTexture&&P(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){let G=C.image;if(G===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(k,C,v);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+v)}function q(C,v){let k=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){Ie(k,C,v);return}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+v)}function se(C,v){let k=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){Ie(k,C,v);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+v)}function fe(C,v){let k=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&k.__version!==C.version){Ge(k,C,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+v)}let me={[wd]:n.REPEAT,[Dr]:n.CLAMP_TO_EDGE,[Cd]:n.MIRRORED_REPEAT},nt={[Mn]:n.NEAREST,[d_]:n.NEAREST_MIPMAP_NEAREST,[Vl]:n.NEAREST_MIPMAP_LINEAR,[In]:n.LINEAR,[Yd]:n.LINEAR_MIPMAP_NEAREST,[ro]:n.LINEAR_MIPMAP_LINEAR},je={[p_]:n.NEVER,[__]:n.ALWAYS,[m_]:n.LESS,[Pf]:n.LEQUAL,[g_]:n.EQUAL,[Lf]:n.GEQUAL,[v_]:n.GREATER,[y_]:n.NOTEQUAL};function pt(C,v){if(v.type===sr&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===In||v.magFilter===Yd||v.magFilter===Vl||v.magFilter===ro||v.minFilter===In||v.minFilter===Yd||v.minFilter===Vl||v.minFilter===ro)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,me[v.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,me[v.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,me[v.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,nt[v.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,nt[v.minFilter]),v.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,je[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Mn||v.minFilter!==Vl&&v.minFilter!==ro||v.type===sr&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function K(C,v){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",I));let G=v.source,W=h.get(G);W===void 0&&(W={},h.set(G,W));let ue=N(v);if(ue!==C.__cacheKey){W[ue]===void 0&&(W[ue]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),W[ue].usedTimes++;let pe=W[C.__cacheKey];pe!==void 0&&(W[C.__cacheKey].usedTimes--,pe.usedTimes===0&&A(v)),C.__cacheKey=ue,C.__webglTexture=W[ue].texture}return k}function ie(C,v,k){return Math.floor(Math.floor(C/k)/v)}function ne(C,v,k,G){let ue=C.updateRanges;if(ue.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,k,G,v.data);else{ue.sort((De,_e)=>De.start-_e.start);let pe=0;for(let De=1;De<ue.length;De++){let _e=ue[pe],ve=ue[De],ze=_e.start+_e.count,Be=ie(ve.start,v.width,4),Je=ie(_e.start,v.width,4);ve.start<=ze+1&&Be===Je&&ie(ve.start+ve.count-1,v.width,4)===Be?_e.count=Math.max(_e.count,ve.start+ve.count-_e.start):(++pe,ue[pe]=ve)}ue.length=pe+1;let $=t.getParameter(n.UNPACK_ROW_LENGTH),J=t.getParameter(n.UNPACK_SKIP_PIXELS),ge=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let De=0,_e=ue.length;De<_e;De++){let ve=ue[De],ze=Math.floor(ve.start/4),Be=Math.ceil(ve.count/4),Je=ze%v.width,R=Math.floor(ze/v.width),he=Be,Z=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Je),t.pixelStorei(n.UNPACK_SKIP_ROWS,R),t.texSubImage2D(n.TEXTURE_2D,0,Je,R,he,Z,k,G,v.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,$),t.pixelStorei(n.UNPACK_SKIP_PIXELS,J),t.pixelStorei(n.UNPACK_SKIP_ROWS,ge)}}function Ie(C,v,k){let G=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(G=n.TEXTURE_3D);let W=K(C,v),ue=v.source;t.bindTexture(G,C.__webglTexture,n.TEXTURE0+k);let pe=i.get(ue);if(ue.version!==pe.__version||W===!0){if(t.activeTexture(n.TEXTURE0+k),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let Z=dt.getPrimaries(dt.workingColorSpace),ye=v.colorSpace===ps?null:dt.getPrimaries(v.colorSpace),Se=v.colorSpace===ps||Z===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let J=m(v.image,!1,r.maxTextureSize);J=Yn(v,J);let ge=s.convert(v.format,v.colorSpace),De=s.convert(v.type),_e=x(v.internalFormat,ge,De,v.normalized,v.colorSpace,v.isVideoTexture);pt(G,v);let ve,ze=v.mipmaps,Be=v.isVideoTexture!==!0,Je=pe.__version===void 0||W===!0,R=ue.dataReady,he=w(v,J);if(v.isDepthTexture)_e=T(v.format===so,v.type),Je&&(Be?t.texStorage2D(n.TEXTURE_2D,1,_e,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,_e,J.width,J.height,0,ge,De,null));else if(v.isDataTexture)if(ze.length>0){Be&&Je&&t.texStorage2D(n.TEXTURE_2D,he,_e,ze[0].width,ze[0].height);for(let Z=0,ye=ze.length;Z<ye;Z++)ve=ze[Z],Be?R&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,ve.width,ve.height,ge,De,ve.data):t.texImage2D(n.TEXTURE_2D,Z,_e,ve.width,ve.height,0,ge,De,ve.data);v.generateMipmaps=!1}else Be?(Je&&t.texStorage2D(n.TEXTURE_2D,he,_e,J.width,J.height),R&&ne(v,J,ge,De)):t.texImage2D(n.TEXTURE_2D,0,_e,J.width,J.height,0,ge,De,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Be&&Je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,_e,ze[0].width,ze[0].height,J.depth);for(let Z=0,ye=ze.length;Z<ye;Z++)if(ve=ze[Z],v.format!==Ri)if(ge!==null)if(Be){if(R)if(v.layerUpdates.size>0){let Se=c6(ve.width,ve.height,v.format,v.type);for(let te of v.layerUpdates){let Ae=ve.data.subarray(te*Se/ve.data.BYTES_PER_ELEMENT,(te+1)*Se/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,te,ve.width,ve.height,1,ge,Ae)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,ve.width,ve.height,J.depth,ge,ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,_e,ve.width,ve.height,J.depth,0,ve.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?R&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,ve.width,ve.height,J.depth,ge,De,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Z,_e,ve.width,ve.height,J.depth,0,ge,De,ve.data)}else{Be&&Je&&t.texStorage2D(n.TEXTURE_2D,he,_e,ze[0].width,ze[0].height);for(let Z=0,ye=ze.length;Z<ye;Z++)ve=ze[Z],v.format!==Ri?ge!==null?Be?R&&t.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,ve.width,ve.height,ge,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,Z,_e,ve.width,ve.height,0,ve.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?R&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,ve.width,ve.height,ge,De,ve.data):t.texImage2D(n.TEXTURE_2D,Z,_e,ve.width,ve.height,0,ge,De,ve.data)}else if(v.isDataArrayTexture)if(Be){if(Je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,_e,J.width,J.height,J.depth),R)if(v.layerUpdates.size>0){let Z=c6(J.width,J.height,v.format,v.type);for(let ye of v.layerUpdates){let Se=J.data.subarray(ye*Z/J.data.BYTES_PER_ELEMENT,(ye+1)*Z/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ye,J.width,J.height,1,ge,De,Se)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ge,De,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,_e,J.width,J.height,J.depth,0,ge,De,J.data);else if(v.isData3DTexture)Be?(Je&&t.texStorage3D(n.TEXTURE_3D,he,_e,J.width,J.height,J.depth),R&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ge,De,J.data)):t.texImage3D(n.TEXTURE_3D,0,_e,J.width,J.height,J.depth,0,ge,De,J.data);else if(v.isFramebufferTexture){if(Je)if(Be)t.texStorage2D(n.TEXTURE_2D,he,_e,J.width,J.height);else{let Z=J.width,ye=J.height;for(let Se=0;Se<he;Se++)t.texImage2D(n.TEXTURE_2D,Se,_e,Z,ye,0,ge,De,null),Z>>=1,ye>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){let Z=n.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),J.parentNode!==Z){Z.appendChild(J),d.add(v),Z.onpaint=ye=>{let Se=ye.changedElements;for(let te of d)Se.includes(te.image)&&(te.needsUpdate=!0)},Z.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,J);else{let Se=n.RGBA,te=n.RGBA,Ae=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Se,te,Ae,J)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ze.length>0){if(Be&&Je){let Z=Tt(ze[0]);t.texStorage2D(n.TEXTURE_2D,he,_e,Z.width,Z.height)}for(let Z=0,ye=ze.length;Z<ye;Z++)ve=ze[Z],Be?R&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,ge,De,ve):t.texImage2D(n.TEXTURE_2D,Z,_e,ge,De,ve);v.generateMipmaps=!1}else if(Be){if(Je){let Z=Tt(J);t.texStorage2D(n.TEXTURE_2D,he,_e,Z.width,Z.height)}R&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,De,J)}else t.texImage2D(n.TEXTURE_2D,0,_e,ge,De,J);g(v)&&M(G),pe.__version=ue.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Ge(C,v,k){if(v.image.length!==6)return;let G=K(C,v),W=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+k);let ue=i.get(W);if(W.version!==ue.__version||G===!0){t.activeTexture(n.TEXTURE0+k);let pe=dt.getPrimaries(dt.workingColorSpace),$=v.colorSpace===ps?null:dt.getPrimaries(v.colorSpace),J=v.colorSpace===ps||pe===$?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let ge=v.isCompressedTexture||v.image[0].isCompressedTexture,De=v.image[0]&&v.image[0].isDataTexture,_e=[];for(let te=0;te<6;te++)!ge&&!De?_e[te]=m(v.image[te],!0,r.maxCubemapSize):_e[te]=De?v.image[te].image:v.image[te],_e[te]=Yn(v,_e[te]);let ve=_e[0],ze=s.convert(v.format,v.colorSpace),Be=s.convert(v.type),Je=x(v.internalFormat,ze,Be,v.normalized,v.colorSpace),R=v.isVideoTexture!==!0,he=ue.__version===void 0||G===!0,Z=W.dataReady,ye=w(v,ve);pt(n.TEXTURE_CUBE_MAP,v);let Se;if(ge){R&&he&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Je,ve.width,ve.height);for(let te=0;te<6;te++){Se=_e[te].mipmaps;for(let Ae=0;Ae<Se.length;Ae++){let Ce=Se[Ae];v.format!==Ri?ze!==null?R?Z&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,0,0,Ce.width,Ce.height,ze,Ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,Je,Ce.width,Ce.height,0,Ce.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,0,0,Ce.width,Ce.height,ze,Be,Ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,Je,Ce.width,Ce.height,0,ze,Be,Ce.data)}}}else{if(Se=v.mipmaps,R&&he){Se.length>0&&ye++;let te=Tt(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Je,te.width,te.height)}for(let te=0;te<6;te++)if(De){R?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,_e[te].width,_e[te].height,ze,Be,_e[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Je,_e[te].width,_e[te].height,0,ze,Be,_e[te].data);for(let Ae=0;Ae<Se.length;Ae++){let $t=Se[Ae].image[te].image;R?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,0,0,$t.width,$t.height,ze,Be,$t.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,Je,$t.width,$t.height,0,ze,Be,$t.data)}}else{R?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ze,Be,_e[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Je,ze,Be,_e[te]);for(let Ae=0;Ae<Se.length;Ae++){let Ce=Se[Ae];R?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,0,0,ze,Be,Ce.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,Je,ze,Be,Ce.image[te])}}}g(v)&&M(n.TEXTURE_CUBE_MAP),ue.__version=W.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Le(C,v,k,G,W,ue){let pe=s.convert(k.format,k.colorSpace),$=s.convert(k.type),J=x(k.internalFormat,pe,$,k.normalized,k.colorSpace),ge=i.get(v),De=i.get(k);if(De.__renderTarget=v,!ge.__hasExternalTextures){let _e=Math.max(1,v.width>>ue),ve=Math.max(1,v.height>>ue);W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?t.texImage3D(W,ue,J,_e,ve,v.depth,0,pe,$,null):t.texImage2D(W,ue,J,_e,ve,0,pe,$,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),on(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,W,De.__webglTexture,0,Wt(v)):(W===n.TEXTURE_2D||W>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,W,De.__webglTexture,ue),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Jt(C,v,k){if(n.bindRenderbuffer(n.RENDERBUFFER,C),v.depthBuffer){let G=v.depthTexture,W=G&&G.isDepthTexture?G.type:null,ue=T(v.stencilBuffer,W),pe=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;on(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Wt(v),ue,v.width,v.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,Wt(v),ue,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ue,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,C)}else{let G=v.textures;for(let W=0;W<G.length;W++){let ue=G[W],pe=s.convert(ue.format,ue.colorSpace),$=s.convert(ue.type),J=x(ue.internalFormat,pe,$,ue.normalized,ue.colorSpace);on(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Wt(v),J,v.width,v.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,Wt(v),J,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,J,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ut(C,v,k){let G=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W=i.get(v.depthTexture);if(W.__renderTarget=v,(!W.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G){if(W.__webglInit===void 0&&(W.__webglInit=!0,v.depthTexture.addEventListener("dispose",I)),W.__webglTexture===void 0){W.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),pt(n.TEXTURE_CUBE_MAP,v.depthTexture);let ge=s.convert(v.depthTexture.format),De=s.convert(v.depthTexture.type),_e;v.depthTexture.format===Nr?_e=n.DEPTH_COMPONENT24:v.depthTexture.format===so&&(_e=n.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,_e,v.width,v.height,0,ge,De,null)}}else B(v.depthTexture,0);let ue=W.__webglTexture,pe=Wt(v),$=G?n.TEXTURE_CUBE_MAP_POSITIVE_X+k:n.TEXTURE_2D,J=v.depthTexture.format===so?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===Nr)on(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,$,ue,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,J,$,ue,0);else if(v.depthTexture.format===so)on(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,$,ue,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,J,$,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Rt(C){let v=i.get(C),k=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let G=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),G){let W=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,G.removeEventListener("dispose",W)};G.addEventListener("dispose",W),v.__depthDisposeCallback=W}v.__boundDepthTexture=G}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(k)for(let G=0;G<6;G++)ut(v.__webglFramebuffer[G],C,G);else{let G=C.texture.mipmaps;G&&G.length>0?ut(v.__webglFramebuffer[0],C,0):ut(v.__webglFramebuffer,C,0)}else if(k){v.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[G]),v.__webglDepthbuffer[G]===void 0)v.__webglDepthbuffer[G]=n.createRenderbuffer(),Jt(v.__webglDepthbuffer[G],C,!1);else{let W=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=v.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,ue)}}else{let G=C.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Jt(v.__webglDepthbuffer,C,!1);else{let W=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,ue)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function _t(C,v,k){let G=i.get(C);v!==void 0&&Le(G.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Rt(C)}function gt(C){let v=C.texture,k=i.get(C),G=i.get(v);C.addEventListener("dispose",_);let W=C.textures,ue=C.isWebGLCubeRenderTarget===!0,pe=W.length>1;if(pe||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=v.version,o.memory.textures++),ue){k.__webglFramebuffer=[];for(let $=0;$<6;$++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[$]=[];for(let J=0;J<v.mipmaps.length;J++)k.__webglFramebuffer[$][J]=n.createFramebuffer()}else k.__webglFramebuffer[$]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let $=0;$<v.mipmaps.length;$++)k.__webglFramebuffer[$]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(pe)for(let $=0,J=W.length;$<J;$++){let ge=i.get(W[$]);ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&on(C)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let $=0;$<W.length;$++){let J=W[$];k.__webglColorRenderbuffer[$]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[$]);let ge=s.convert(J.format,J.colorSpace),De=s.convert(J.type),_e=x(J.internalFormat,ge,De,J.normalized,J.colorSpace,C.isXRRenderTarget===!0),ve=Wt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,_e,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.RENDERBUFFER,k.__webglColorRenderbuffer[$])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Jt(k.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ue){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),pt(n.TEXTURE_CUBE_MAP,v);for(let $=0;$<6;$++)if(v.mipmaps&&v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)Le(k.__webglFramebuffer[$][J],C,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,J);else Le(k.__webglFramebuffer[$],C,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);g(v)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let $=0,J=W.length;$<J;$++){let ge=W[$],De=i.get(ge),_e=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(_e=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,De.__webglTexture),pt(_e,ge),Le(k.__webglFramebuffer,C,ge,n.COLOR_ATTACHMENT0+$,_e,0),g(ge)&&M(_e)}t.unbindTexture()}else{let $=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&($=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture($,G.__webglTexture),pt($,v),v.mipmaps&&v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)Le(k.__webglFramebuffer[J],C,v,n.COLOR_ATTACHMENT0,$,J);else Le(k.__webglFramebuffer,C,v,n.COLOR_ATTACHMENT0,$,0);g(v)&&M($),t.unbindTexture()}C.depthBuffer&&Rt(C)}function sn(C){let v=C.textures;for(let k=0,G=v.length;k<G;k++){let W=v[k];if(g(W)){let ue=S(C),pe=i.get(W).__webglTexture;t.bindTexture(ue,pe),M(ue),t.unbindTexture()}}}let un=[],vn=[];function Sn(C){if(C.samples>0){if(on(C)===!1){let v=C.textures,k=C.width,G=C.height,W=n.COLOR_BUFFER_BIT,ue=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(C),$=v.length>1;if($)for(let ge=0;ge<v.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);let J=C.texture.mipmaps;J&&J.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ge=0;ge<v.length;ge++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(W|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(W|=n.STENCIL_BUFFER_BIT)),$){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ge]);let De=i.get(v[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,De,0)}n.blitFramebuffer(0,0,k,G,0,0,k,G,W,n.NEAREST),c===!0&&(un.length=0,vn.length=0,un.push(n.COLOR_ATTACHMENT0+ge),C.depthBuffer&&C.resolveDepthBuffer===!1&&(un.push(ue),vn.push(ue),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,vn)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,un))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),$)for(let ge=0;ge<v.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ge]);let De=i.get(v[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,De,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){let v=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Wt(C){return Math.min(r.maxSamples,C.samples)}function on(C){let v=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function P(C){let v=o.render.frame;u.get(C)!==v&&(u.set(C,v),C.update())}function Yn(C,v){let k=C.colorSpace,G=C.format,W=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==gl&&k!==ps&&(dt.getTransfer(k)===Ct?(G!==Ri||W!==vi)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",k)),v}function Tt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=X,this.getTextureUnits=ee,this.setTextureUnits=U,this.setTexture2D=B,this.setTexture2DArray=q,this.setTexture3D=se,this.setTextureCube=fe,this.rebindTextures=_t,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=sn,this.updateMultisampleRenderTarget=Sn,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=on,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function VO(n,e){function t(i,r=ps){let s,o=dt.getTransfer(r);if(i===vi)return n.UNSIGNED_BYTE;if(i===Kd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Jd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Kp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Jp)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Yp)return n.BYTE;if(i===Zp)return n.SHORT;if(i===R1)return n.UNSIGNED_SHORT;if(i===Zd)return n.INT;if(i===rr)return n.UNSIGNED_INT;if(i===sr)return n.FLOAT;if(i===Or)return n.HALF_FLOAT;if(i===Qp)return n.ALPHA;if(i===e6)return n.RGB;if(i===Ri)return n.RGBA;if(i===Nr)return n.DEPTH_COMPONENT;if(i===so)return n.DEPTH_STENCIL;if(i===t6)return n.RED;if(i===Qd)return n.RED_INTEGER;if(i===oo)return n.RG;if(i===ef)return n.RG_INTEGER;if(i===tf)return n.RGBA_INTEGER;if(i===Hl||i===Gl||i===jl||i===Wl)if(o===Ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Hl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Hl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Gl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Wl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nf||i===rf||i===sf||i===of)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===nf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===rf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===of)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===af||i===cf||i===lf||i===uf||i===df||i===$l||i===ff)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===af||i===cf)return o===Ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===lf)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===uf)return s.COMPRESSED_R11_EAC;if(i===df)return s.COMPRESSED_SIGNED_R11_EAC;if(i===$l)return s.COMPRESSED_RG11_EAC;if(i===ff)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===hf||i===pf||i===mf||i===gf||i===vf||i===yf||i===_f||i===bf||i===xf||i===Mf||i===Sf||i===Ef||i===wf||i===Cf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===hf)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pf)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===mf)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gf)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vf)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yf)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_f)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bf)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xf)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Mf)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sf)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ef)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wf)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Cf)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Tf||i===If||i===Af)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Tf)return o===Ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===If)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Af)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Df||i===Nf||i===ql||i===Rf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Df)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Nf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ql)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===P1?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var HO=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GO=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,M6=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Dl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new mi({vertexShader:HO,fragmentShader:GO,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new An(new Ll(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},S6=class extends Rr{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,p=null,y=typeof XRWebGLBinding<"u",m=new M6,g={},M=t.getContextAttributes(),S=null,x=null,T=[],w=[],I=new ht,_=null,E=new Un;E.viewport=new jt;let A=new Un;A.viewport=new jt;let D=[E,A],O=new $d,X=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ie=T[K];return ie===void 0&&(ie=new I1,T[K]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(K){let ie=T[K];return ie===void 0&&(ie=new I1,T[K]=ie),ie.getGripSpace()},this.getHand=function(K){let ie=T[K];return ie===void 0&&(ie=new I1,T[K]=ie),ie.getHandSpace()};function U(K){let ie=w.indexOf(K.inputSource);if(ie===-1)return;let ne=T[ie];ne!==void 0&&(ne.update(K.inputSource,K.frame,l||o),ne.dispatchEvent({type:K.type,data:K.inputSource}))}function L(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",N);for(let K=0;K<T.length;K++){let ie=w[K];ie!==null&&(w[K]=null,T[K].disconnect(ie))}X=null,ee=null,m.reset();for(let K in g)delete g[K];e.setRenderTarget(S),h=null,f=null,d=null,r=null,x=null,pt.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=function(K){return Mt(this,null,function*(){if(r=K,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",L),r.addEventListener("inputsourceschange",N),M.xrCompatible!==!0&&(yield t.makeXRCompatible()),_=e.getPixelRatio(),e.getSize(I),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,Ie=null,Ge=null;M.depth&&(Ge=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=M.stencil?so:Nr,Ie=M.stencil?P1:rr);let Le={colorFormat:t.RGBA8,depthFormat:Ge,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Le),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new pi(f.textureWidth,f.textureHeight,{format:Ri,type:vi,depthTexture:new hs(f.textureWidth,f.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ne={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),x=new pi(h.framebufferWidth,h.framebufferHeight,{format:Ri,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),pt.setContext(r),pt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function N(K){for(let ie=0;ie<K.removed.length;ie++){let ne=K.removed[ie],Ie=w.indexOf(ne);Ie>=0&&(w[Ie]=null,T[Ie].disconnect(ne))}for(let ie=0;ie<K.added.length;ie++){let ne=K.added[ie],Ie=w.indexOf(ne);if(Ie===-1){for(let Le=0;Le<T.length;Le++)if(Le>=w.length){w.push(ne),Ie=Le;break}else if(w[Le]===null){w[Le]=ne,Ie=Le;break}if(Ie===-1)break}let Ge=T[Ie];Ge&&Ge.connect(ne)}}let B=new F,q=new F;function se(K,ie,ne){B.setFromMatrixPosition(ie.matrixWorld),q.setFromMatrixPosition(ne.matrixWorld);let Ie=B.distanceTo(q),Ge=ie.projectionMatrix.elements,Le=ne.projectionMatrix.elements,Jt=Ge[14]/(Ge[10]-1),ut=Ge[14]/(Ge[10]+1),Rt=(Ge[9]+1)/Ge[5],_t=(Ge[9]-1)/Ge[5],gt=(Ge[8]-1)/Ge[0],sn=(Le[8]+1)/Le[0],un=Jt*gt,vn=Jt*sn,Sn=Ie/(-gt+sn),Wt=Sn*-gt;if(ie.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Wt),K.translateZ(Sn),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ge[10]===-1)K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let on=Jt+Sn,P=ut+Sn,Yn=un-Wt,Tt=vn+(Ie-Wt),C=Rt*ut/P*on,v=_t*ut/P*on;K.projectionMatrix.makePerspective(Yn,Tt,C,v,on,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function fe(K,ie){ie===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ie.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ie=K.near,ne=K.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(ne=m.depthFar)),O.near=A.near=E.near=ie,O.far=A.far=E.far=ne,(X!==O.near||ee!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),X=O.near,ee=O.far),O.layers.mask=K.layers.mask|6,E.layers.mask=O.layers.mask&-5,A.layers.mask=O.layers.mask&-3;let Ie=K.parent,Ge=O.cameras;fe(O,Ie);for(let Le=0;Le<Ge.length;Le++)fe(Ge[Le],Ie);Ge.length===2?se(O,E,A):O.projectionMatrix.copy(E.projectionMatrix),me(K,O,Ie)};function me(K,ie,ne){ne===null?K.matrix.copy(ie.matrixWorld):(K.matrix.copy(ne.matrixWorld),K.matrix.invert(),K.matrix.multiply(ie.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Id*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(K){c=K,f!==null&&(f.fixedFoveation=K),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(K){return g[K]};let nt=null;function je(K,ie){if(u=ie.getViewerPose(l||o),p=ie,u!==null){let ne=u.views;h!==null&&(e.setRenderTargetFramebuffer(x,h.framebuffer),e.setRenderTarget(x));let Ie=!1;ne.length!==O.cameras.length&&(O.cameras.length=0,Ie=!0);for(let ut=0;ut<ne.length;ut++){let Rt=ne[ut],_t=null;if(h!==null)_t=h.getViewport(Rt);else{let sn=d.getViewSubImage(f,Rt);_t=sn.viewport,ut===0&&(e.setRenderTargetTextures(x,sn.colorTexture,sn.depthStencilTexture),e.setRenderTarget(x))}let gt=D[ut];gt===void 0&&(gt=new Un,gt.layers.enable(ut),gt.viewport=new jt,D[ut]=gt),gt.matrix.fromArray(Rt.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(Rt.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(_t.x,_t.y,_t.width,_t.height),ut===0&&(O.matrix.copy(gt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ie===!0&&O.cameras.push(gt)}let Ge=r.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){d=i.getBinding();let ut=d.getDepthInformation(ne[0]);ut&&ut.isValid&&ut.texture&&m.init(ut,r.renderState)}if(Ge&&Ge.includes("camera-access")&&y){e.state.unbindTexture(),d=i.getBinding();for(let ut=0;ut<ne.length;ut++){let Rt=ne[ut].camera;if(Rt){let _t=g[Rt];_t||(_t=new Dl,g[Rt]=_t);let gt=d.getCameraImage(Rt);_t.sourceTexture=gt}}}}for(let ne=0;ne<T.length;ne++){let Ie=w[ne],Ge=T[ne];Ie!==null&&Ge!==void 0&&Ge.update(Ie,ie,l||o)}nt&&nt(K,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),p=null}let pt=new X_;pt.setAnimationLoop(je),this.setAnimationLoop=function(K){nt=K},this.dispose=function(){}}},jO=new Kt,eb=new qe;eb.set(-1,0,0,0,1,0,0,0,1);function WO(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,s6(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function r(m,g,M,S,x){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),d(m,g)):g.isMeshPhongMaterial?(s(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),f(m,g),g.isMeshPhysicalMaterial&&h(m,g,x)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),y(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?c(m,g,M,S):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Xn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Xn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let M=e.get(g),S=M.envMap,x=M.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(jO.makeRotationFromEuler(x)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(eb),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,M,S){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*M,m.scale.value=S*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function h(m,g,M){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Xn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function y(m,g){let M=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function $O(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,T){let w=T.program;i.uniformBlockBinding(x,w)}function l(x,T){let w=r[x.id];w===void 0&&(m(x),w=u(x),r[x.id]=w,x.addEventListener("dispose",M));let I=T.program;i.updateUBOMapping(x,I);let _=e.render.frame;s[x.id]!==_&&(f(x),s[x.id]=_)}function u(x){let T=d();x.__bindingPointIndex=T;let w=n.createBuffer(),I=x.__size,_=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,I,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,w),w}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return He("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){let T=r[x.id],w=x.uniforms,I=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let _=0,E=w.length;_<E;_++){let A=w[_];if(Array.isArray(A))for(let D=0,O=A.length;D<O;D++)h(A[D],_,D,I);else h(A,_,0,I)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(x,T,w,I){if(y(x,T,w,I)===!0){let _=x.__offset,E=x.value;if(Array.isArray(E)){let A=0;for(let D=0;D<E.length;D++){let O=E[D],X=g(O);p(O,x.__data,A),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(A+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,x.__data)}}function p(x,T,w){typeof x=="number"||typeof x=="boolean"?T[0]=x:x.isMatrix3?(T[0]=x.elements[0],T[1]=x.elements[1],T[2]=x.elements[2],T[3]=0,T[4]=x.elements[3],T[5]=x.elements[4],T[6]=x.elements[5],T[7]=0,T[8]=x.elements[6],T[9]=x.elements[7],T[10]=x.elements[8],T[11]=0):ArrayBuffer.isView(x)?T.set(new x.constructor(x.buffer,x.byteOffset,T.length)):x.toArray(T,w)}function y(x,T,w,I){let _=x.value,E=T+"_"+w;if(I[E]===void 0)return typeof _=="number"||typeof _=="boolean"?I[E]=_:ArrayBuffer.isView(_)?I[E]=_.slice():I[E]=_.clone(),!0;{let A=I[E];if(typeof _=="number"||typeof _=="boolean"){if(A!==_)return I[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(A.equals(_)===!1)return A.copy(_),!0}}return!1}function m(x){let T=x.uniforms,w=0,I=16;for(let E=0,A=T.length;E<A;E++){let D=Array.isArray(T[E])?T[E]:[T[E]];for(let O=0,X=D.length;O<X;O++){let ee=D[O],U=Array.isArray(ee.value)?ee.value:[ee.value];for(let L=0,N=U.length;L<N;L++){let B=U[L],q=g(B),se=w%I,fe=se%q.boundary,me=se+fe;w+=fe,me!==0&&I-me<q.storage&&(w+=I-me),ee.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=w,w+=q.storage}}}let _=w%I;return _>0&&(w+=I-_),x.__size=w,x.__cache={},this}function g(x){let T={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(T.boundary=4,T.storage=4):x.isVector2?(T.boundary=8,T.storage=8):x.isVector3||x.isColor?(T.boundary=16,T.storage=12):x.isVector4?(T.boundary=16,T.storage=16):x.isMatrix3?(T.boundary=48,T.storage=48):x.isMatrix4?(T.boundary=64,T.storage=64):x.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(T.boundary=16,T.storage=x.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",x),T}function M(x){let T=x.target;T.removeEventListener("dispose",M);let w=o.indexOf(T.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function S(){for(let x in r)n.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:c,update:l,dispose:S}}var qO=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),kr=null;function XO(){return kr===null&&(kr=new Rd(qO,16,16,oo,Or),kr.name="DFG_LUT",kr.minFilter=In,kr.magFilter=In,kr.wrapS=Dr,kr.wrapT=Dr,kr.generateMipmaps=!1,kr.needsUpdate=!0),kr}var Uf=class{constructor(e={}){let{canvas:t=b_(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=vi}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let y=h,m=new Set([tf,ef,Qd]),g=new Set([vi,rr,R1,P1,Kd,Jd]),M=new Uint32Array(4),S=new Int32Array(4),x=new F,T=null,w=null,I=[],_=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ir,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,D=!1,O=null,X=null,ee=null,U=null;this._outputColorSpace=hi;let L=0,N=0,B=null,q=-1,se=null,fe=new jt,me=new jt,nt=null,je=new mt(0),pt=0,K=t.width,ie=t.height,ne=1,Ie=null,Ge=null,Le=new jt(0,0,K,ie),Jt=new jt(0,0,K,ie),ut=!1,Rt=new Tl,_t=!1,gt=!1,sn=new Kt,un=new F,vn=new jt,Sn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Wt=!1;function on(){return B===null?ne:1}let P=i;function Yn(b,z){return t.getContext(b,z)}try{let b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",$t,!1),t.addEventListener("webglcontextrestored",zt,!1),t.addEventListener("webglcontextcreationerror",dr,!1),P===null){let z="webgl2";if(P=Yn(z,b),P===null)throw Yn(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(b){throw He("WebGLRenderer: "+b.message),b}let Tt,C,v,k,G,W,ue,pe,$,J,ge,De,_e,ve,ze,Be,Je,R,he,Z,ye,Se,te;function Ae(){Tt=new tz(P),Tt.init(),ye=new VO(P,Tt),C=new qL(P,Tt,e,ye),v=new UO(P,Tt),C.reversedDepthBuffer&&f&&v.buffers.depth.setReversed(!0),X=P.createFramebuffer(),ee=P.createFramebuffer(),U=P.createFramebuffer(),k=new rz(P),G=new wO,W=new BO(P,Tt,v,G,C,ye,k),ue=new ez(A),pe=new cR(P),Se=new WL(P,pe),$=new nz(P,pe,k,Se),J=new oz(P,$,pe,Se,k),R=new sz(P,C,W),ze=new XL(G),ge=new EO(A,ue,Tt,C,Se,ze),De=new WO(A,G),_e=new TO,ve=new PO(Tt),Je=new jL(A,ue,v,J,p,c),Be=new FO(A,J,C),te=new $O(P,k,C,v),he=new $L(P,Tt,k),Z=new iz(P,Tt,k),k.programs=ge.programs,A.capabilities=C,A.extensions=Tt,A.properties=G,A.renderLists=_e,A.shadowMap=Be,A.state=v,A.info=k}Ae(),y!==vi&&(E=new cz(y,t.width,t.height,a,r,s));let Ce=new S6(A,P);this.xr=Ce,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let b=Tt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Tt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(b){b!==void 0&&(ne=b,this.setSize(K,ie,!1))},this.getSize=function(b){return b.set(K,ie)},this.setSize=function(b,z,j=!0){if(Ce.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}K=b,ie=z,t.width=Math.floor(b*ne),t.height=Math.floor(z*ne),j===!0&&(t.style.width=b+"px",t.style.height=z+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(K*ne,ie*ne).floor()},this.setDrawingBufferSize=function(b,z,j){K=b,ie=z,ne=j,t.width=Math.floor(b*j),t.height=Math.floor(z*j),this.setViewport(0,0,b,z)},this.setEffects=function(b){if(y===vi){He("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let z=0;z<b.length;z++)if(b[z].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(fe)},this.getViewport=function(b){return b.copy(Le)},this.setViewport=function(b,z,j,V){b.isVector4?Le.set(b.x,b.y,b.z,b.w):Le.set(b,z,j,V),v.viewport(fe.copy(Le).multiplyScalar(ne).round())},this.getScissor=function(b){return b.copy(Jt)},this.setScissor=function(b,z,j,V){b.isVector4?Jt.set(b.x,b.y,b.z,b.w):Jt.set(b,z,j,V),v.scissor(me.copy(Jt).multiplyScalar(ne).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(b){v.setScissorTest(ut=b)},this.setOpaqueSort=function(b){Ie=b},this.setTransparentSort=function(b){Ge=b},this.getClearColor=function(b){return b.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(b=!0,z=!0,j=!0){let V=0;if(b){let H=!1;if(B!==null){let Me=B.texture.format;H=m.has(Me)}if(H){let Me=B.texture.type,we=g.has(Me),xe=Je.getClearColor(),Te=Je.getClearAlpha(),Ne=xe.r,Qe=xe.g,rt=xe.b;we?(M[0]=Ne,M[1]=Qe,M[2]=rt,M[3]=Te,P.clearBufferuiv(P.COLOR,0,M)):(S[0]=Ne,S[1]=Qe,S[2]=rt,S[3]=Te,P.clearBufferiv(P.COLOR,0,S))}else V|=P.COLOR_BUFFER_BIT}z&&(V|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(V|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&P.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),O=b},this.dispose=function(){t.removeEventListener("webglcontextlost",$t,!1),t.removeEventListener("webglcontextrestored",zt,!1),t.removeEventListener("webglcontextcreationerror",dr,!1),Je.dispose(),_e.dispose(),ve.dispose(),G.dispose(),ue.dispose(),J.dispose(),Se.dispose(),te.dispose(),ge.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",F8),Ce.removeEventListener("sessionend",U8),mo.stop()};function $t(b){b.preventDefault(),r6("WebGLRenderer: Context Lost."),D=!0}function zt(){r6("WebGLRenderer: Context Restored."),D=!1;let b=k.autoReset,z=Be.enabled,j=Be.autoUpdate,V=Be.needsUpdate,H=Be.type;Ae(),k.autoReset=b,Be.enabled=z,Be.autoUpdate=j,Be.needsUpdate=V,Be.type=H}function dr(b){He("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function fr(b){let z=b.target;z.removeEventListener("dispose",fr),mS(z)}function mS(b){gS(b),G.remove(b)}function gS(b){let z=G.get(b).programs;z!==void 0&&(z.forEach(function(j){ge.releaseProgram(j)}),b.isShaderMaterial&&ge.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,j,V,H,Me){z===null&&(z=Sn);let we=H.isMesh&&H.matrixWorld.determinantAffine()<0,xe=_S(b,z,j,V,H);v.setMaterial(V,we);let Te=j.index,Ne=1;if(V.wireframe===!0){if(Te=$.getWireframeAttribute(j),Te===void 0)return;Ne=2}let Qe=j.drawRange,rt=j.attributes.position,Re=Qe.start*Ne,Dt=(Qe.start+Qe.count)*Ne;Me!==null&&(Re=Math.max(Re,Me.start*Ne),Dt=Math.min(Dt,(Me.start+Me.count)*Ne)),Te!==null?(Re=Math.max(Re,0),Dt=Math.min(Dt,Te.count)):rt!=null&&(Re=Math.max(Re,0),Dt=Math.min(Dt,rt.count));let Qt=Dt-Re;if(Qt<0||Qt===1/0)return;Se.setup(H,V,xe,j,Te);let qt,Pt=he;if(Te!==null&&(qt=pe.get(Te),Pt=Z,Pt.setIndex(qt)),H.isMesh)V.wireframe===!0?(v.setLineWidth(V.wireframeLinewidth*on()),Pt.setMode(P.LINES)):Pt.setMode(P.TRIANGLES);else if(H.isLine){let Nn=V.linewidth;Nn===void 0&&(Nn=1),v.setLineWidth(Nn*on()),H.isLineSegments?Pt.setMode(P.LINES):H.isLineLoop?Pt.setMode(P.LINE_LOOP):Pt.setMode(P.LINE_STRIP)}else H.isPoints?Pt.setMode(P.POINTS):H.isSprite&&Pt.setMode(P.TRIANGLES);if(H.isBatchedMesh)if(Tt.get("WEBGL_multi_draw"))Pt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Nn=H._multiDrawStarts,Ee=H._multiDrawCounts,ii=H._multiDrawCount,vt=Te?pe.get(Te).bytesPerElement:1,_i=G.get(V).currentProgram.getUniforms();for(let hr=0;hr<ii;hr++)_i.setValue(P,"_gl_DrawID",hr),Pt.render(Nn[hr]/vt,Ee[hr])}else if(H.isInstancedMesh)Pt.renderInstances(Re,Qt,H.count);else if(j.isInstancedBufferGeometry){let Nn=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ee=Math.min(j.instanceCount,Nn);Pt.renderInstances(Re,Qt,Ee)}else Pt.render(Re,Qt)};function k8(b,z,j){b.transparent===!0&&b.side===Lr&&b.forceSinglePass===!1?(b.side=Xn,b.needsUpdate=!0,p2(b,z,j),b.side=ds,b.needsUpdate=!0,p2(b,z,j),b.side=Lr):p2(b,z,j)}this.compile=function(b,z,j=null){j===null&&(j=b),w=ve.get(j),w.init(z),_.push(w),j.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),b!==j&&b.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),w.setupLights();let V=new Set;return b.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let Me=H.material;if(Me)if(Array.isArray(Me))for(let we=0;we<Me.length;we++){let xe=Me[we];k8(xe,j,H),V.add(xe)}else k8(Me,j,H),V.add(Me)}),w=_.pop(),V},this.compileAsync=function(b,z,j=null){let V=this.compile(b,z,j);return new Promise(H=>{function Me(){if(V.forEach(function(we){G.get(we).currentProgram.isReady()&&V.delete(we)}),V.size===0){H(b);return}setTimeout(Me,10)}Tt.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let C0=null;function vS(b){C0&&C0(b)}function F8(){mo.stop()}function U8(){mo.start()}let mo=new X_;mo.setAnimationLoop(vS),typeof self<"u"&&mo.setContext(self),this.setAnimationLoop=function(b){C0=b,Ce.setAnimationLoop(b),b===null?mo.stop():mo.start()},Ce.addEventListener("sessionstart",F8),Ce.addEventListener("sessionend",U8),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;O!==null&&O.renderStart(b,z);let j=Ce.enabled===!0&&Ce.isPresenting===!0,V=E!==null&&(B===null||j)&&E.begin(A,B);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(z),z=Ce.getCamera()),b.isScene===!0&&b.onBeforeRender(A,b,z,B),w=ve.get(b,_.length),w.init(z),w.state.textureUnits=W.getTextureUnits(),_.push(w),sn.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Rt.setFromProjectionMatrix(sn,nr,z.reversedDepth),gt=this.localClippingEnabled,_t=ze.init(this.clippingPlanes,gt),T=_e.get(b,I.length),T.init(),I.push(T),Ce.enabled===!0&&Ce.isPresenting===!0){let we=A.xr.getDepthSensingMesh();we!==null&&T0(we,z,-1/0,A.sortObjects)}T0(b,z,0,A.sortObjects),T.finish(),A.sortObjects===!0&&T.sort(Ie,Ge,z.reversedDepth),Wt=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,Wt&&Je.addToRenderList(T,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_t===!0&&ze.beginShadows();let H=w.state.shadowsArray;if(Be.render(H,b,z),_t===!0&&ze.endShadows(),(V&&E.hasRenderPass())===!1){let we=T.opaque,xe=T.transmissive;if(w.setupLights(),z.isArrayCamera){let Te=z.cameras;if(xe.length>0)for(let Ne=0,Qe=Te.length;Ne<Qe;Ne++){let rt=Te[Ne];V8(we,xe,b,rt)}Wt&&Je.render(b);for(let Ne=0,Qe=Te.length;Ne<Qe;Ne++){let rt=Te[Ne];B8(T,b,rt,rt.viewport)}}else xe.length>0&&V8(we,xe,b,z),Wt&&Je.render(b),B8(T,b,z)}B!==null&&N===0&&(W.updateMultisampleRenderTarget(B),W.updateRenderTargetMipmap(B)),V&&E.end(A),b.isScene===!0&&b.onAfterRender(A,b,z),Se.resetDefaultState(),q=-1,se=null,_.pop(),_.length>0?(w=_[_.length-1],W.setTextureUnits(w.state.textureUnits),_t===!0&&ze.setGlobalState(A.clippingPlanes,w.state.camera)):w=null,I.pop(),I.length>0?T=I[I.length-1]:T=null,O!==null&&O.renderEnd()};function T0(b,z,j,V){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)j=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLightProbeGrid)w.pushLightProbeGrid(b);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Rt.intersectsSprite(b)){V&&vn.setFromMatrixPosition(b.matrixWorld).applyMatrix4(sn);let we=J.update(b),xe=b.material;xe.visible&&T.push(b,we,xe,j,vn.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Rt.intersectsObject(b))){let we=J.update(b),xe=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),vn.copy(b.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),vn.copy(we.boundingSphere.center)),vn.applyMatrix4(b.matrixWorld).applyMatrix4(sn)),Array.isArray(xe)){let Te=we.groups;for(let Ne=0,Qe=Te.length;Ne<Qe;Ne++){let rt=Te[Ne],Re=xe[rt.materialIndex];Re&&Re.visible&&T.push(b,we,Re,j,vn.z,rt)}}else xe.visible&&T.push(b,we,xe,j,vn.z,null)}}let Me=b.children;for(let we=0,xe=Me.length;we<xe;we++)T0(Me[we],z,j,V)}function B8(b,z,j,V){let{opaque:H,transmissive:Me,transparent:we}=b;w.setupLightsView(j),_t===!0&&ze.setGlobalState(A.clippingPlanes,j),V&&v.viewport(fe.copy(V)),H.length>0&&h2(H,z,j),Me.length>0&&h2(Me,z,j),we.length>0&&h2(we,z,j),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function V8(b,z,j,V){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[V.id]===void 0){let Re=Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[V.id]=new pi(1,1,{generateMipmaps:!0,type:Re?Or:vi,minFilter:ro,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace})}let Me=w.state.transmissionRenderTarget[V.id],we=V.viewport||fe;Me.setSize(we.z*A.transmissionResolutionScale,we.w*A.transmissionResolutionScale);let xe=A.getRenderTarget(),Te=A.getActiveCubeFace(),Ne=A.getActiveMipmapLevel();A.setRenderTarget(Me),A.getClearColor(je),pt=A.getClearAlpha(),pt<1&&A.setClearColor(16777215,.5),A.clear(),Wt&&Je.render(j);let Qe=A.toneMapping;A.toneMapping=ir;let rt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),w.setupLightsView(V),_t===!0&&ze.setGlobalState(A.clippingPlanes,V),h2(b,j,V),W.updateMultisampleRenderTarget(Me),W.updateRenderTargetMipmap(Me),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let Dt=0,Qt=z.length;Dt<Qt;Dt++){let qt=z[Dt],{object:Pt,geometry:Nn,material:Ee,group:ii}=qt;if(Ee.side===Lr&&Pt.layers.test(V.layers)){let vt=Ee.side;Ee.side=Xn,Ee.needsUpdate=!0,H8(Pt,j,V,Nn,Ee,ii),Ee.side=vt,Ee.needsUpdate=!0,Re=!0}}Re===!0&&(W.updateMultisampleRenderTarget(Me),W.updateRenderTargetMipmap(Me))}A.setRenderTarget(xe,Te,Ne),A.setClearColor(je,pt),rt!==void 0&&(V.viewport=rt),A.toneMapping=Qe}function h2(b,z,j){let V=z.isScene===!0?z.overrideMaterial:null;for(let H=0,Me=b.length;H<Me;H++){let we=b[H],{object:xe,geometry:Te,group:Ne}=we,Qe=we.material;Qe.allowOverride===!0&&V!==null&&(Qe=V),xe.layers.test(j.layers)&&H8(xe,z,j,Te,Qe,Ne)}}function H8(b,z,j,V,H,Me){b.onBeforeRender(A,z,j,V,H,Me),b.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(A,z,j,V,b,Me),H.transparent===!0&&H.side===Lr&&H.forceSinglePass===!1?(H.side=Xn,H.needsUpdate=!0,A.renderBufferDirect(j,z,V,H,b,Me),H.side=ds,H.needsUpdate=!0,A.renderBufferDirect(j,z,V,H,b,Me),H.side=Lr):A.renderBufferDirect(j,z,V,H,b,Me),b.onAfterRender(A,z,j,V,H,Me)}function p2(b,z,j){z.isScene!==!0&&(z=Sn);let V=G.get(b),H=w.state.lights,Me=w.state.shadowsArray,we=H.state.version,xe=ge.getParameters(b,H.state,Me,z,j,w.state.lightProbeGridArray),Te=ge.getProgramCacheKey(xe),Ne=V.programs;V.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?z.environment:null,V.fog=z.fog;let Qe=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;V.envMap=ue.get(b.envMap||V.environment,Qe),V.envMapRotation=V.environment!==null&&b.envMap===null?z.environmentRotation:b.envMapRotation,Ne===void 0&&(b.addEventListener("dispose",fr),Ne=new Map,V.programs=Ne);let rt=Ne.get(Te);if(rt!==void 0){if(V.currentProgram===rt&&V.lightsStateVersion===we)return j8(b,xe),rt}else xe.uniforms=ge.getUniforms(b),O!==null&&b.isNodeMaterial&&O.build(b,j,xe),b.onBeforeCompile(xe,A),rt=ge.acquireProgram(xe,Te),Ne.set(Te,rt),V.uniforms=xe.uniforms;let Re=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Re.clippingPlanes=ze.uniform),j8(b,xe),V.needsLights=xS(b),V.lightsStateVersion=we,V.needsLights&&(Re.ambientLightColor.value=H.state.ambient,Re.lightProbe.value=H.state.probe,Re.directionalLights.value=H.state.directional,Re.directionalLightShadows.value=H.state.directionalShadow,Re.spotLights.value=H.state.spot,Re.spotLightShadows.value=H.state.spotShadow,Re.rectAreaLights.value=H.state.rectArea,Re.ltc_1.value=H.state.rectAreaLTC1,Re.ltc_2.value=H.state.rectAreaLTC2,Re.pointLights.value=H.state.point,Re.pointLightShadows.value=H.state.pointShadow,Re.hemisphereLights.value=H.state.hemi,Re.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Re.spotLightMatrix.value=H.state.spotLightMatrix,Re.spotLightMap.value=H.state.spotLightMap,Re.pointShadowMatrix.value=H.state.pointShadowMatrix),V.lightProbeGrid=w.state.lightProbeGridArray.length>0,V.currentProgram=rt,V.uniformsList=null,rt}function G8(b){if(b.uniformsList===null){let z=b.currentProgram.getUniforms();b.uniformsList=z1.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function j8(b,z){let j=G.get(b);j.outputColorSpace=z.outputColorSpace,j.batching=z.batching,j.batchingColor=z.batchingColor,j.instancing=z.instancing,j.instancingColor=z.instancingColor,j.instancingMorph=z.instancingMorph,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}function yS(b,z){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;x.setFromMatrixPosition(z.matrixWorld);for(let j=0,V=b.length;j<V;j++){let H=b[j];if(H.texture!==null&&H.boundingBox.containsPoint(x))return H}return null}function _S(b,z,j,V,H){z.isScene!==!0&&(z=Sn),W.resetTextureUnits();let Me=z.fog,we=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?z.environment:null,xe=B===null?A.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:dt.workingColorSpace,Te=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ne=ue.get(V.envMap||we,Te),Qe=V.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,rt=!!j.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Re=!!j.morphAttributes.position,Dt=!!j.morphAttributes.normal,Qt=!!j.morphAttributes.color,qt=ir;V.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(qt=A.toneMapping);let Pt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Nn=Pt!==void 0?Pt.length:0,Ee=G.get(V),ii=w.state.lights;if(_t===!0&&(gt===!0||b!==se)){let Ot=b===se&&V.id===q;ze.setState(V,b,Ot)}let vt=!1;V.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==ii.state.version||Ee.outputColorSpace!==xe||H.isBatchedMesh&&Ee.batching===!1||!H.isBatchedMesh&&Ee.batching===!0||H.isBatchedMesh&&Ee.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ee.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ee.instancing===!1||!H.isInstancedMesh&&Ee.instancing===!0||H.isSkinnedMesh&&Ee.skinning===!1||!H.isSkinnedMesh&&Ee.skinning===!0||H.isInstancedMesh&&Ee.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ee.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ee.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ee.instancingMorph===!1&&H.morphTexture!==null||Ee.envMap!==Ne||V.fog===!0&&Ee.fog!==Me||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ze.numPlanes||Ee.numIntersection!==ze.numIntersection)||Ee.vertexAlphas!==Qe||Ee.vertexTangents!==rt||Ee.morphTargets!==Re||Ee.morphNormals!==Dt||Ee.morphColors!==Qt||Ee.toneMapping!==qt||Ee.morphTargetsCount!==Nn||!!Ee.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,Ee.__version=V.version);let _i=Ee.currentProgram;vt===!0&&(_i=p2(V,z,H),O&&V.isNodeMaterial&&O.onUpdateProgram(V,_i,Ee));let hr=!1,xs=!1,va=!1,Lt=_i.getUniforms(),en=Ee.uniforms;if(v.useProgram(_i.program)&&(hr=!0,xs=!0,va=!0),V.id!==q&&(q=V.id,xs=!0),Ee.needsLights){let Ot=yS(w.state.lightProbeGridArray,H);Ee.lightProbeGrid!==Ot&&(Ee.lightProbeGrid=Ot,xs=!0)}if(hr||se!==b){v.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Lt.setValue(P,"projectionMatrix",b.projectionMatrix),Lt.setValue(P,"viewMatrix",b.matrixWorldInverse);let Ss=Lt.map.cameraPosition;Ss!==void 0&&Ss.setValue(P,un.setFromMatrixPosition(b.matrixWorld)),C.logarithmicDepthBuffer&&Lt.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Lt.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),se!==b&&(se=b,xs=!0,va=!0)}if(Ee.needsLights&&(ii.state.directionalShadowMap.length>0&&Lt.setValue(P,"directionalShadowMap",ii.state.directionalShadowMap,W),ii.state.spotShadowMap.length>0&&Lt.setValue(P,"spotShadowMap",ii.state.spotShadowMap,W),ii.state.pointShadowMap.length>0&&Lt.setValue(P,"pointShadowMap",ii.state.pointShadowMap,W)),H.isSkinnedMesh){Lt.setOptional(P,H,"bindMatrix"),Lt.setOptional(P,H,"bindMatrixInverse");let Ot=H.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),Lt.setValue(P,"boneTexture",Ot.boneTexture,W))}H.isBatchedMesh&&(Lt.setOptional(P,H,"batchingTexture"),Lt.setValue(P,"batchingTexture",H._matricesTexture,W),Lt.setOptional(P,H,"batchingIdTexture"),Lt.setValue(P,"batchingIdTexture",H._indirectTexture,W),Lt.setOptional(P,H,"batchingColorTexture"),H._colorsTexture!==null&&Lt.setValue(P,"batchingColorTexture",H._colorsTexture,W));let Ms=j.morphAttributes;if((Ms.position!==void 0||Ms.normal!==void 0||Ms.color!==void 0)&&R.update(H,j,_i),(xs||Ee.receiveShadow!==H.receiveShadow)&&(Ee.receiveShadow=H.receiveShadow,Lt.setValue(P,"receiveShadow",H.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&z.environment!==null&&(en.envMapIntensity.value=z.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=XO()),xs){if(Lt.setValue(P,"toneMappingExposure",A.toneMappingExposure),Ee.needsLights&&bS(en,va),Me&&V.fog===!0&&De.refreshFogUniforms(en,Me),De.refreshMaterialUniforms(en,V,ne,ie,w.state.transmissionRenderTarget[b.id]),Ee.needsLights&&Ee.lightProbeGrid){let Ot=Ee.lightProbeGrid;en.probesSH.value=Ot.texture,en.probesMin.value.copy(Ot.boundingBox.min),en.probesMax.value.copy(Ot.boundingBox.max),en.probesResolution.value.copy(Ot.resolution)}z1.upload(P,G8(Ee),en,W)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(z1.upload(P,G8(Ee),en,W),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Lt.setValue(P,"center",H.center),Lt.setValue(P,"modelViewMatrix",H.modelViewMatrix),Lt.setValue(P,"normalMatrix",H.normalMatrix),Lt.setValue(P,"modelMatrix",H.matrixWorld),V.uniformsGroups!==void 0){let Ot=V.uniformsGroups;for(let Ss=0,ya=Ot.length;Ss<ya;Ss++){let W8=Ot[Ss];te.update(W8,_i),te.bind(W8,_i)}}return _i}function bS(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function xS(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(b,z,j){let V=G.get(b);V.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),G.get(b.texture).__webglTexture=z,G.get(b.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:j,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,z){let j=G.get(b);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,j=0){B=b,L=z,N=j;let V=null,H=!1,Me=!1;if(b){let xe=G.get(b);if(xe.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(P.FRAMEBUFFER,xe.__webglFramebuffer),fe.copy(b.viewport),me.copy(b.scissor),nt=b.scissorTest,v.viewport(fe),v.scissor(me),v.setScissorTest(nt),q=-1;return}else if(xe.__webglFramebuffer===void 0)W.setupRenderTarget(b);else if(xe.__hasExternalTextures)W.rebindTextures(b,G.get(b.texture).__webglTexture,G.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Qe=b.depthTexture;if(xe.__boundDepthTexture!==Qe){if(Qe!==null&&G.has(Qe)&&(b.width!==Qe.image.width||b.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(b)}}let Te=b.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(Me=!0);let Ne=G.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ne[z])?V=Ne[z][j]:V=Ne[z],H=!0):b.samples>0&&W.useMultisampledRTT(b)===!1?V=G.get(b).__webglMultisampledFramebuffer:Array.isArray(Ne)?V=Ne[j]:V=Ne,fe.copy(b.viewport),me.copy(b.scissor),nt=b.scissorTest}else fe.copy(Le).multiplyScalar(ne).floor(),me.copy(Jt).multiplyScalar(ne).floor(),nt=ut;if(j!==0&&(V=X),v.bindFramebuffer(P.FRAMEBUFFER,V)&&v.drawBuffers(b,V),v.viewport(fe),v.scissor(me),v.setScissorTest(nt),H){let xe=G.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+z,xe.__webglTexture,j)}else if(Me){let xe=z;for(let Te=0;Te<b.textures.length;Te++){let Ne=G.get(b.textures[Te]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Te,Ne.__webglTexture,j,xe)}}else if(b!==null&&j!==0){let xe=G.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,xe.__webglTexture,j)}q=-1},this.readRenderTargetPixels=function(b,z,j,V,H,Me,we,xe=0){if(!(b&&b.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=G.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&we!==void 0&&(Te=Te[we]),Te){v.bindFramebuffer(P.FRAMEBUFFER,Te);try{let Ne=b.textures[xe],Qe=Ne.format,rt=Ne.type;if(b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+xe),!C.textureFormatReadable(Qe)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(rt)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-V&&j>=0&&j<=b.height-H&&P.readPixels(z,j,V,H,ye.convert(Qe),ye.convert(rt),Me)}finally{let Ne=B!==null?G.get(B).__webglFramebuffer:null;v.bindFramebuffer(P.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=function(b,z,j,V,H,Me,we,xe=0){return Mt(this,null,function*(){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=G.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&we!==void 0&&(Te=Te[we]),Te)if(z>=0&&z<=b.width-V&&j>=0&&j<=b.height-H){v.bindFramebuffer(P.FRAMEBUFFER,Te);let Ne=b.textures[xe],Qe=Ne.format,rt=Ne.type;if(b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+xe),!C.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Re=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Re),P.bufferData(P.PIXEL_PACK_BUFFER,Me.byteLength,P.STREAM_READ),P.readPixels(z,j,V,H,ye.convert(Qe),ye.convert(rt),0);let Dt=B!==null?G.get(B).__webglFramebuffer:null;v.bindFramebuffer(P.FRAMEBUFFER,Dt);let Qt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),yield M_(P,Qt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Re),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Me),P.deleteBuffer(Re),P.deleteSync(Qt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(b,z=null,j=0){let V=Math.pow(2,-j),H=Math.floor(b.image.width*V),Me=Math.floor(b.image.height*V),we=z!==null?z.x:0,xe=z!==null?z.y:0;W.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,j,0,0,we,xe,H,Me),v.unbindTexture()},this.copyTextureToTexture=function(b,z,j=null,V=null,H=0,Me=0){let we,xe,Te,Ne,Qe,rt,Re,Dt,Qt,qt=b.isCompressedTexture?b.mipmaps[Me]:b.image;if(j!==null)we=j.max.x-j.min.x,xe=j.max.y-j.min.y,Te=j.isBox3?j.max.z-j.min.z:1,Ne=j.min.x,Qe=j.min.y,rt=j.isBox3?j.min.z:0;else{let en=Math.pow(2,-H);we=Math.floor(qt.width*en),xe=Math.floor(qt.height*en),b.isDataArrayTexture?Te=qt.depth:b.isData3DTexture?Te=Math.floor(qt.depth*en):Te=1,Ne=0,Qe=0,rt=0}V!==null?(Re=V.x,Dt=V.y,Qt=V.z):(Re=0,Dt=0,Qt=0);let Pt=ye.convert(z.format),Nn=ye.convert(z.type),Ee;z.isData3DTexture?(W.setTexture3D(z,0),Ee=P.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(W.setTexture2DArray(z,0),Ee=P.TEXTURE_2D_ARRAY):(W.setTexture2D(z,0),Ee=P.TEXTURE_2D),v.activeTexture(P.TEXTURE0),v.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,z.flipY),v.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),v.pixelStorei(P.UNPACK_ALIGNMENT,z.unpackAlignment);let ii=v.getParameter(P.UNPACK_ROW_LENGTH),vt=v.getParameter(P.UNPACK_IMAGE_HEIGHT),_i=v.getParameter(P.UNPACK_SKIP_PIXELS),hr=v.getParameter(P.UNPACK_SKIP_ROWS),xs=v.getParameter(P.UNPACK_SKIP_IMAGES);v.pixelStorei(P.UNPACK_ROW_LENGTH,qt.width),v.pixelStorei(P.UNPACK_IMAGE_HEIGHT,qt.height),v.pixelStorei(P.UNPACK_SKIP_PIXELS,Ne),v.pixelStorei(P.UNPACK_SKIP_ROWS,Qe),v.pixelStorei(P.UNPACK_SKIP_IMAGES,rt);let va=b.isDataArrayTexture||b.isData3DTexture,Lt=z.isDataArrayTexture||z.isData3DTexture;if(b.isDepthTexture){let en=G.get(b),Ms=G.get(z),Ot=G.get(en.__renderTarget),Ss=G.get(Ms.__renderTarget);v.bindFramebuffer(P.READ_FRAMEBUFFER,Ot.__webglFramebuffer),v.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ss.__webglFramebuffer);for(let ya=0;ya<Te;ya++)va&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,G.get(b).__webglTexture,H,rt+ya),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,G.get(z).__webglTexture,Me,Qt+ya)),P.blitFramebuffer(Ne,Qe,we,xe,Re,Dt,we,xe,P.DEPTH_BUFFER_BIT,P.NEAREST);v.bindFramebuffer(P.READ_FRAMEBUFFER,null),v.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(H!==0||b.isRenderTargetTexture||G.has(b)){let en=G.get(b),Ms=G.get(z);v.bindFramebuffer(P.READ_FRAMEBUFFER,ee),v.bindFramebuffer(P.DRAW_FRAMEBUFFER,U);for(let Ot=0;Ot<Te;Ot++)va?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,en.__webglTexture,H,rt+Ot):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,en.__webglTexture,H),Lt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ms.__webglTexture,Me,Qt+Ot):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ms.__webglTexture,Me),H!==0?P.blitFramebuffer(Ne,Qe,we,xe,Re,Dt,we,xe,P.COLOR_BUFFER_BIT,P.NEAREST):Lt?P.copyTexSubImage3D(Ee,Me,Re,Dt,Qt+Ot,Ne,Qe,we,xe):P.copyTexSubImage2D(Ee,Me,Re,Dt,Ne,Qe,we,xe);v.bindFramebuffer(P.READ_FRAMEBUFFER,null),v.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Lt?b.isDataTexture||b.isData3DTexture?P.texSubImage3D(Ee,Me,Re,Dt,Qt,we,xe,Te,Pt,Nn,qt.data):z.isCompressedArrayTexture?P.compressedTexSubImage3D(Ee,Me,Re,Dt,Qt,we,xe,Te,Pt,qt.data):P.texSubImage3D(Ee,Me,Re,Dt,Qt,we,xe,Te,Pt,Nn,qt):b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Me,Re,Dt,we,xe,Pt,Nn,qt.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Me,Re,Dt,qt.width,qt.height,Pt,qt.data):P.texSubImage2D(P.TEXTURE_2D,Me,Re,Dt,we,xe,Pt,Nn,qt);v.pixelStorei(P.UNPACK_ROW_LENGTH,ii),v.pixelStorei(P.UNPACK_IMAGE_HEIGHT,vt),v.pixelStorei(P.UNPACK_SKIP_PIXELS,_i),v.pixelStorei(P.UNPACK_SKIP_ROWS,hr),v.pixelStorei(P.UNPACK_SKIP_IMAGES,xs),Me===0&&z.generateMipmaps&&P.generateMipmap(Ee),v.unbindTexture()},this.initRenderTarget=function(b){G.get(b).__webglFramebuffer===void 0&&W.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?W.setTextureCube(b,0):b.isData3DTexture?W.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?W.setTexture2DArray(b,0):W.setTexture2D(b,0),v.unbindTexture()},this.resetState=function(){L=0,N=0,B=null,v.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};var ei={name:"R\xE9my Binsztock",role:"Full-Stack Senior Developer | Cybersecurity Engineer",summary:"Senior Full-Stack Developer with over 15 years of experience designing, building, and evolving web and mobile applications. From Ruby on Rails backend to React and Angular frontends, I deliver scalable products with strong emphasis on quality, maintainability, performance, and security \u2014 backed by a cybersecurity engineering degree and ISO 27001 certification.",location:"\xCEle-de-France, France",availability:"Open to Senior Full-Stack opportunities",languages:["French (native)","English (full professional)","Spanish (elementary)"],heroTags:["TypeScript","React","Angular","Javascript","Ruby on Rails","Node.js","Golang","Security"],focus:["Frontend and mobile delivery with React, Next.js, Angular, and TypeScript","Backend and platform work with Ruby on Rails, Node.js, cloud, and CI/CD","Security-focused engineering across AppSec, risk management, and ISO 27001 compliance"]},tb=[{label:"LinkedIn",value:"linkedin.com/in/r\xE9my-binsztock-17b8755a",href:"https://www.linkedin.com/in/r%C3%A9my-binsztock-17b8755a/"},{label:"GitHub",value:"github.com/rbinsztock",href:"https://github.com/rbinsztock"}];var nb=[{value:15,suffix:"+",label:"Years of experience"},{value:10,suffix:"",label:"Years at AVIV Group"},{value:35,suffix:"+",label:"Technologies mastered"},{value:2,suffix:"",label:"Security certifications"}],ib=[{title:"Product Thinking",description:"I build products around maintainability, clarity, and the practical needs of both users and delivery teams."},{title:"Technical Breadth",description:"My experience spans React, Angular, Ruby on Rails, Node.js, Golang, mobile apps, automated testing, CI/CD, AWS, Cloudflare and more."},{title:"Security Mindset",description:"Cybersecurity specialization enables me to integrate AppSec principles, risk management, OWASP practices, and compliance requirements throughout the SDLC."}],rb=[{title:"AVIV Group \u2014 B2B Portal",tag:"Angular Migration & Platform",description:"Migrated the B2B business portal from AngularJS to Angular, unified development in a centralized monorepo, designed a shared design system, and implemented Jest and Cypress test coverage. Migrated all Bitbucket repositories to GitHub and acted as the team Agile referent.",tech:["Angular","AngularJS","TypeScript","Jest","Cypress","GitHub"]},{title:"AVIV Group \u2014 B2C Agency Page",tag:"React \xB7 SSR \xB7 AWS",description:"Developed the new Agency page in React and TypeScript, deployed across multiple group entities with improved SEO through server-side rendering and AWS deployments using Terraform and the AWS SDK.",tech:["React","TypeScript","SSR","AWS","Terraform","Cypress"]},{title:"Tech-Angels \u2014 Client Delivery",tag:"Full-Stack \xB7 Mobile \xB7 Rails",description:"Delivered SeLoger B2B portal (AngularJS), mobile apps with PhoneGap, and a GitLab connector for Gemnasium security tracking.",tech:["AngularJS","PhoneGap","Ruby on Rails","GitLab","Gemnasium"]},{title:"CareerBuilder & Cyrus Conseil",tag:"Rails APIs \xB7 SSO \xB7 Automation",description:"Migrated legacy .NET services to Rails APIs, built job listing interfaces with infinite scroll, developed SSO with RubyCAS/LDAP, and created Selenium scraping automations for banking data.",tech:["Ruby on Rails","LDAP","RubyCAS","Selenium","Heroku"]}],E6=[{company:"AVIV Group",role:"Senior Developer FrontEnd",period:"Jun 2015 - Jun 2025",location:"Paris area, France \xB7 10 years",highlights:["B2B portal: Migrated from AngularJS to Angular, developed and maintained the platform, and delivered enhancements to integrate newly acquired entities.","Implemented a centralized monorepo to unify development, promote code reuse, and simplify application maintenance across B2B solutions.","Designed and developed a shared design system; implemented unit tests with Jest and integration/end-to-end tests with Cypress.","Migrated all Bitbucket repositories to GitHub across the organization; acted as the team Agile referent and supported developer onboarding.","B2C portal: Developed the new Agency page in React and TypeScript, deployed across multiple group entities with SSR for SEO.","Deployed applications on AWS using Terraform and the AWS SDK; implemented and maintained unit and end-to-end test coverage."]},{company:"Tech-Angels",role:"Full-Stack Developer",period:"Oct 2013 - Jun 2017",location:"Paris area, France \xB7 3 years 9 months",highlights:["Developed SeLoger B2B portal with AngularJS (1.5 years).","Built mobile application Mieux vaut Pr\xE9venir and tablet application VCM with AngularJS and PhoneGap.","Developed VCM portal website in AngularJS.","Created GitLab connector for Gemnasium security dependency tracking in Ruby."]},{company:"SANTECH SAS",role:"Developer FrontEnd & Mobile",period:"May 2014 - Apr 2015",location:"Paris area, France \xB7 1 year",highlights:["Developed mobile and desktop applications in AngularJS using PhoneGap and Cordova."]},{company:"Groupe CareerBuilder France",role:"Internship Developer Ruby on Rails",period:"Apr 2013 - Oct 2013",location:"Paris, France \xB7 7 months",highlights:["Migrated legacy .NET web services to Ruby on Rails APIs for the Europe platform.","Deployed applications on Heroku and Engine Yard.","Built job listings interface with infinite scroll for progressive content loading."]},{company:"Cyrus Conseil",role:"Internship Developer Ruby on Rails",period:"Apr 2012 - Mar 2013",location:"Paris, France \xB7 1 year",highlights:["Built internal room-booking website in Ruby on Rails.","Created Ruby/Selenium scripts to parse websites and retrieve data unavailable through banking APIs.","Implemented RubyCAS-based SSO with LDAP and MySQL fallback; built centralized user management application.","Migrated applications from Rails 2 to Rails 3."]},{company:"Custle",role:"Internship Developer Ruby on Rails",period:"Jan 2012 - Mar 2012",location:"Paris, France \xB7 3 months",highlights:["Developed and maintained automated Ruby scripts using Selenium.","Maintained and deployed production workloads on Heroku and Amazon S3."]},{company:"BonjourBonjour",role:"Internship Developer Ruby on Rails",period:"Jul 2011 - Oct 2011",location:"Paris, France \xB7 4 months",highlights:["Developed a meeting application using geolocation on Ruby on Rails 3."]},{company:"MI2R",role:"Internship Developer PHP (Zend Framework)",period:"Jul 2010 - Oct 2010",location:"France \xB7 4 months",highlights:["Developed web applications using the PHP Zend Framework."]},{company:"Ingenico",role:"Internship Assistant Webmaster",period:"Jul 2009 - Sep 2009",location:"France \xB7 3 months",highlights:["Assisted with webmaster duties and website maintenance."]}],w6=[{title:"Frontend and Mobile",items:["JavaScript","TypeScript","React","Next.js","React Native","Angular","AngularJS","PhoneGap","Cordova","Expo"]},{title:"Backend",items:["Ruby on Rails","Node.js","Python","Go","REST API design"]},{title:"Databases",items:["PostgreSQL","MySQL","NoSQL","Prisma"]},{title:"Testing",items:["Jest","Cypress","Unit testing","Integration testing","E2E testing"]},{title:"DevOps and Cloud",items:["Docker","GitHub Actions","AWS","GCP","Terraform","TeamCity","Octopus","Heroku"]},{title:"Architecture",items:["Monorepos","Microservices","SSR","Authentication","Distributed systems"]},{title:"Security and Compliance",items:["Application Security","OWASP","ISO/IEC 27001","Risk Analysis","Incident Response","Threat Intelligence","MITRE ATT&CK","Network Administration","CSNA","Splunk","Stormshield","Wireshark"]},{title:"Offensive Security and Forensics",items:["Penetration Testing","APT Analysis","Memory Forensics","Network Forensics"]},{title:"AI Tools",items:["Claude","Codex","GitHub Copilot","Cursor","Mistral"]},{title:"Operating Systems",items:["Linux","Windows","macOS","Kali Linux"]}],Hf=[{title:"Certifications",items:[{label:"Stormshield Network Administrator Certification (CSNA)",date:"Issued Mar 2025"},{label:"ISO/IEC 27001 Lead Implementer Certification",date:"Issued Dec 2024"}]},{title:"Education",items:[{label:"CyberUniversity \xB7 Cybersecurity Engineer",date:"Sep 2024 - Mar 2025"},{label:"SUPINFO \xB7 MSc in Computer Science",date:"2009 - 2013"}]}],sb=E6.map(n=>({company:n.company,role:n.role,period:n.period,location:n.location,summary:n.highlights.join(" ")})),ob=w6.map(n=>({label:n.title,text:n.items.join(", ")}));var Gf=(()=>{class n{constructor(){this.isDark=Gi(this.getInitialTheme()),this.apply()}toggle(){this.isDark.update(t=>!t),this.apply(),typeof localStorage<"u"&&localStorage.setItem("theme",this.isDark()?"dark":"light")}getInitialTheme(){if(typeof window>"u")return!0;let t=localStorage.getItem("theme");return t?t==="dark":!0}apply(){if(typeof document>"u")return;let t=this.isDark();document.documentElement.dataset.theme=t?"dark":"light",document.querySelector('meta[name="theme-color"]')?.setAttribute("content",t?"#050810":"#f7f9fc")}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=et({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var ZO=["canvasHost"];function KO(n,e){if(n&1&&(re(0,"span"),Q(1),ce()),n&2){let t=e.$implicit;ae(),Ye(t)}}function JO(n,e){n&1&&(re(0,"div",11),Ft(1,"div",12,0)(3,"div",13),re(4,"div",14)(5,"span"),Q(6,"ISO 27001"),ce(),re(7,"span"),Q(8,"encrypt(payload)"),ce(),re(9,"span"),Q(10,"terraform apply"),ce()()())}var ab=(()=>{class n{constructor(){this.profile=ei,this.showCanvas=typeof window>"u"?!1:window.innerWidth>=900&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches,this.platformId=Y(ji),this.theme=Y(Gf),this.renderer=null,this.scene=null,this.camera=null,this.meshGroup=null,this.particles=null,this.outerMaterial=null,this.innerMaterial=null,this.ringMaterial=null,this.particleMaterial=null,this.rafId=0,this.running=!1,this.resizeObserver=null,this.intersectionObserver=null,this.disposed=!1,this.tick=()=>{!this.running||!this.scene||!this.camera||!this.renderer||(this.meshGroup&&(this.meshGroup.rotation.y+=.0012,this.meshGroup.rotation.x+=6e-4),this.particles&&(this.particles.rotation.y-=4e-4),this.renderer.render(this.scene,this.camera),this.rafId=requestAnimationFrame(this.tick))},Ba(()=>{this.applyTheme(this.theme.isDark())}),Tc(()=>{!t1(this.platformId)||!this.showCanvas||(this.initScene(),this.applyTheme(this.theme.isDark()))})}ngOnDestroy(){this.disposed=!0,this.stop(),this.resizeObserver?.disconnect(),this.intersectionObserver?.disconnect(),this.disposeScene()}initScene(){let t=this.canvasHost?.nativeElement;if(!t)return;let i=t.clientWidth,r=t.clientHeight;if(i<=0||r<=0)return;this.scene=new Sl,this.camera=new Un(45,i/r,.1,100),this.camera.position.set(0,0,6),this.renderer=new Uf({antialias:!0,alpha:!0}),this.renderer.setSize(i,r),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.setClearColor(0,0),t.appendChild(this.renderer.domElement),this.meshGroup=new ls,this.outerMaterial=new fs({color:61695,wireframe:!0,transparent:!0,opacity:.18});let s=new An(new Rl(2.2,1),this.outerMaterial);this.meshGroup.add(s),this.innerMaterial=new fs({color:11032055,wireframe:!0,transparent:!0,opacity:.12});let o=new An(new Pl(1.3,0),this.innerMaterial);this.meshGroup.add(o),this.ringMaterial=new fs({color:61695,transparent:!0,opacity:.1});let a=new An(new zl(2.6,.02,8,64),this.ringMaterial);a.rotation.x=Math.PI/3,this.meshGroup.add(a),this.meshGroup.position.set(-.55,0,0),this.scene.add(this.meshGroup);let c=60,l=new Float32Array(c*3);for(let d=0;d<c;d++)l[d*3]=(Math.random()-.5)*7,l[d*3+1]=(Math.random()-.5)*5,l[d*3+2]=(Math.random()-.5)*3;let u=new qn;u.setAttribute("position",new $n(l,3)),this.particleMaterial=new A1({color:61695,size:.025,transparent:!0,opacity:.35}),this.particles=new Il(u,this.particleMaterial),this.scene.add(this.particles),this.resizeObserver=new ResizeObserver(()=>this.onResize()),this.resizeObserver.observe(t),this.intersectionObserver=new IntersectionObserver(d=>{d.some(h=>h.isIntersecting)?this.start():this.stop()},{threshold:.05}),this.intersectionObserver.observe(t),this.start()}applyTheme(t){if(!(!this.outerMaterial||!this.innerMaterial||!this.ringMaterial||!this.particleMaterial)){if(t){this.outerMaterial.color.setHex(61695),this.outerMaterial.opacity=.18,this.innerMaterial.color.setHex(11032055),this.innerMaterial.opacity=.12,this.ringMaterial.color.setHex(61695),this.ringMaterial.opacity=.1,this.particleMaterial.color.setHex(61695),this.particleMaterial.opacity=.35,this.particleMaterial.size=.025;return}this.outerMaterial.color.setHex(561586),this.outerMaterial.opacity=.42,this.innerMaterial.color.setHex(8141549),this.innerMaterial.opacity=.3,this.ringMaterial.color.setHex(561586),this.ringMaterial.opacity=.28,this.particleMaterial.color.setHex(561586),this.particleMaterial.opacity=.55,this.particleMaterial.size=.03}}onResize(){let t=this.canvasHost?.nativeElement;if(!t||!this.camera||!this.renderer)return;let i=t.clientWidth,r=t.clientHeight;i<=0||r<=0||(this.camera.aspect=i/r,this.camera.updateProjectionMatrix(),this.renderer.setSize(i,r))}start(){this.running||this.disposed||(this.running=!0,this.tick())}stop(){this.running=!1,cancelAnimationFrame(this.rafId)}disposeScene(){this.particles?.geometry.dispose(),this.particleMaterial?.dispose(),this.outerMaterial?.dispose(),this.innerMaterial?.dispose(),this.ringMaterial?.dispose(),this.meshGroup?.traverse(i=>{i instanceof An&&i.geometry.dispose()}),this.renderer?.dispose();let t=this.canvasHost?.nativeElement;t?.firstChild&&t.removeChild(t.firstChild),this.renderer=null,this.scene=null,this.camera=null,this.meshGroup=null,this.particles=null,this.outerMaterial=null,this.innerMaterial=null,this.ringMaterial=null,this.particleMaterial=null}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=kt({type:n,selectors:[["app-hero-3d"]],viewQuery:function(i,r){if(i&1&&Za(ZO,5),i&2){let s;Ka(s=Ja())&&(r.canvasHost=s.first)}},decls:22,vars:3,consts:[["canvasHost",""],["id","about",1,"hero"],[1,"hero__layout"],[1,"hero-content"],[1,"hero__kicker"],[1,"hero__lead"],[1,"hero__actions"],["href","#experience",1,"btn-primary"],["aria-hidden","true"],["href","#contact",1,"btn-ghost"],[1,"hero__tags"],["aria-hidden","true",1,"hero__visual"],[1,"hero__canvas-host"],[1,"hero__visual-fade"],[1,"hero__snippets"]],template:function(i,r){i&1&&(re(0,"section",1)(1,"div",2)(2,"div",3)(3,"p",4),Q(4),ce(),re(5,"h1"),Q(6," Full-stack developer delivering secure, scalable solutions from frontend to backend. "),ce(),re(7,"p",5),Q(8),ce(),re(9,"div",6)(10,"a",7),Q(11," Explore experience "),re(12,"span",8),Q(13,"\u2193"),ce()(),re(14,"a",9),Q(15," Get in touch "),re(16,"span",8),Q(17,"\u2193"),ce()()(),re(18,"div",10),It(19,KO,2,1,"span",null,Ki),ce()(),Er(21,JO,11,0,"div",11),ce()()),i&2&&(ae(4),Ye(r.profile.role),ae(4),Ye(r.profile.summary),ae(11),At(r.profile.heroTags),ae(2),wr(r.showCanvas?21:-1))},styles:[".hero[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;min-height:85vh;padding:8rem 0 5rem}.hero__layout[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(280px,.9fr);align-items:stretch;width:100%;min-height:clamp(360px,48vh,520px);border:1px solid var(--border-glow);border-radius:16px;overflow:hidden}.hero-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;padding:clamp(2rem,4vw,3rem) clamp(2rem,4vw,3.5rem);background:color-mix(in srgb,var(--paper) 92%,transparent);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}.hero__kicker[_ngcontent-%COMP%]{margin:0 0 1.25rem;color:var(--accent);font-family:var(--font-mono);font-size:.72rem;font-weight:600;letter-spacing:.04em}.hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:clamp(2.2rem,5vw,3.8rem);line-height:1.1;letter-spacing:-.04em}.hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{font-style:normal;color:var(--accent)}.hero__lead[_ngcontent-%COMP%]{margin:1.5rem 0 0;color:var(--ink-soft);font-size:1rem;line-height:1.75}.hero__actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:1rem;margin-top:2rem}.hero__tags[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem;margin-top:2rem}.hero__tags[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:.35rem .75rem;border:1px solid var(--line);border-radius:6px;color:var(--muted);font-family:var(--font-mono);font-size:.68rem}.hero__visual[_ngcontent-%COMP%]{position:relative;min-height:clamp(320px,42vh,480px);background:color-mix(in srgb,var(--surface) 30%,transparent)}.hero__canvas-host[_ngcontent-%COMP%]{position:absolute;inset:0}.hero__canvas-host[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{display:block;width:100%!important;height:100%!important}.hero__visual-fade[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,color-mix(in srgb,var(--paper) 55%,transparent) 0%,transparent 28%);pointer-events:none}.hero__snippets[_ngcontent-%COMP%]{position:absolute;z-index:2;right:1rem;bottom:1rem;display:flex;flex-direction:column;gap:.4rem;pointer-events:none}.hero__snippets[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{align-self:flex-end;padding:.3rem .65rem;border:1px solid color-mix(in srgb,var(--accent) 28%,transparent);border-radius:6px;background:color-mix(in srgb,var(--paper) 72%,transparent);color:var(--accent-dark);font-family:var(--font-mono);font-size:.62rem;opacity:.9}@media(max-width:900px){.hero[_ngcontent-%COMP%]{min-height:auto;padding:7rem 0 3rem}.hero__layout[_ngcontent-%COMP%]{grid-template-columns:1fr;min-height:auto}.hero-content[_ngcontent-%COMP%]{padding:1.5rem}.hero__visual[_ngcontent-%COMP%]{min-height:280px}}"]})}}return n})();var QO=(n,e)=>e.label;function ek(n,e){if(n&1&&(re(0,"article",3)(1,"span",4),Q(2),ce(),re(3,"strong"),Q(4),ce(),re(5,"span",5),Q(6),ce()()),n&2){let t=e.$implicit,i=e.$index,r=cn();ae(2),Ye(r.icons[i]),ae(2),Wo("",t.value,"",t.suffix),ae(2),Ye(t.label)}}var cb=(()=>{class n{constructor(){this.stats=nb,this.icons=["\u23F1","\u26A1","\u{1F680}","\u{1F6E1}"]}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=kt({type:n,selectors:[["app-stats-counter"]],decls:5,vars:0,consts:[["aria-label","Key professional highlights",1,"stats"],[1,"section-rule"],[1,"stats-grid"],[1,"stats-card","glow-card","glow-card--static"],["aria-hidden","true",1,"stats-card__icon"],[1,"stats-card__label"]],template:function(i,r){i&1&&(re(0,"section",0),Ft(1,"hr",1),re(2,"div",2),It(3,ek,7,4,"article",3,QO),ce()()),i&2&&(ae(3),At(r.stats))},styles:[".stats[_ngcontent-%COMP%]{padding:0 0 var(--section-pad)}.stats-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1rem;align-items:stretch}.stats-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.35rem;min-width:0;min-height:9rem;padding:1.75rem 1.5rem;text-align:center}.stats-card__icon[_ngcontent-%COMP%]{font-size:1.25rem;margin-bottom:.25rem;opacity:.8}.stats-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-family:var(--font-display);font-size:clamp(2rem,4vw,2.8rem);font-weight:700;letter-spacing:-.04em;line-height:1;background:linear-gradient(135deg,var(--accent),var(--accent-secondary));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.stats-card__label[_ngcontent-%COMP%]{color:var(--muted);font-size:.78rem;line-height:1.45;max-width:14ch}@media(max-width:900px){.stats-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:480px){.stats-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.stats-card[_ngcontent-%COMP%]{min-height:auto}}"]})}}return n})();var tk=(n,e)=>e.company;function nk(n,e){if(n&1&&(re(0,"li"),Q(1),ce()),n&2){let t=e.$implicit;ae(),Ye(t)}}function ik(n,e){if(n&1&&(re(0,"ul",14),It(1,nk,2,1,"li",null,Ki),ce()),n&2){let t=cn().$implicit;ae(),At(t.highlights)}}function rk(n,e){if(n&1){let t=Cr();re(0,"article",7,0)(2,"button",8),Jn("click",function(){let r=Bi(t).$index,s=cn();return Vi(s.toggle(r))}),Ft(3,"div",9),re(4,"div",10)(5,"h3"),Q(6),ce(),re(7,"p",11),Q(8),ce()(),re(9,"div",12)(10,"span"),Q(11),ce(),re(12,"span"),Q(13),ce()(),re(14,"span",13),Q(15),ce()(),Er(16,ik,3,0,"ul",14),ce()}if(n&2){let t=e.$implicit,i=e.$index,r=cn();Ii("timeline-item--expanded",r.expandedIndex===i),ae(2),ci("aria-expanded",r.expandedIndex===i),ae(4),Ye(t.company),ae(2),Ye(t.role),ae(3),Ye(t.period),ae(2),Ye(t.location),ae(2),Yt(" ",r.expandedIndex===i?"\u2212":"+"," "),ae(),wr(r.expandedIndex===i?16:-1)}}var lb=(()=>{class n{constructor(){this.experience=E6,this.expandedIndex=0}toggle(t){this.expandedIndex=this.expandedIndex===t?null:t}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=kt({type:n,selectors:[["app-career-timeline"]],decls:13,vars:0,consts:[["timelineItem",""],["id","experience",1,"timeline-section"],[1,"section-rule"],[1,"section-header"],[1,"section-kicker"],[1,"timeline"],[1,"timeline-item","glow-card",3,"timeline-item--expanded"],[1,"timeline-item","glow-card"],["type","button",1,"timeline-item__head",3,"click"],["aria-hidden","true",1,"timeline-item__node"],[1,"timeline-item__info"],[1,"timeline-item__role"],[1,"timeline-item__meta"],["aria-hidden","true",1,"timeline-item__chevron"],[1,"timeline-item__highlights"]],template:function(i,r){i&1&&(re(0,"section",1),Ft(1,"hr",2),re(2,"header",3)(3,"p",4),Q(4,"Experience"),ce(),re(5,"h2"),Q(6,"A career built on "),re(7,"em"),Q(8,"transformation"),ce(),Q(9,"."),ce()(),re(10,"div",5),It(11,rk,17,9,"article",6,tk),ce()()),i&2&&(ae(11),At(r.experience))},styles:['@charset "UTF-8";.timeline-section[_ngcontent-%COMP%]{padding:var(--section-pad) 0;scroll-margin-top:6rem}.timeline[_ngcontent-%COMP%]{position:relative;display:grid;gap:1rem}.timeline[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;bottom:0;left:1.35rem;width:2px;background:linear-gradient(to bottom,var(--accent),var(--accent-secondary),transparent);opacity:.4}.timeline-item[_ngcontent-%COMP%]{overflow:hidden;transition:box-shadow .3s ease}.timeline-item--expanded[_ngcontent-%COMP%]{box-shadow:0 0 30px color-mix(in srgb,var(--accent) 15%,transparent)}.timeline-item__head[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto 1fr auto auto;gap:1.25rem;align-items:center;width:100%;padding:1.25rem 1.5rem;border:none;background:transparent;color:inherit;text-align:left;cursor:pointer;transition:background .2s}.timeline-item__head[_ngcontent-%COMP%]:hover{background:color-mix(in srgb,var(--accent) 4%,transparent)}.timeline-item__node[_ngcontent-%COMP%]{width:12px;height:12px;border-radius:50%;background:var(--accent);box-shadow:0 0 12px var(--accent);flex-shrink:0}.timeline-item--expanded[_ngcontent-%COMP%]   .timeline-item__node[_ngcontent-%COMP%]{background:var(--accent-secondary);box-shadow:0 0 16px var(--accent-secondary)}.timeline-item__info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1.15rem}.timeline-item__role[_ngcontent-%COMP%]{margin:.2rem 0 0;color:var(--accent);font-family:var(--font-mono);font-size:.75rem;font-weight:600}.timeline-item__meta[_ngcontent-%COMP%]{display:grid;gap:.15rem;color:var(--muted);font-size:.72rem;text-align:right}.timeline-item__chevron[_ngcontent-%COMP%]{display:grid;place-items:center;width:28px;height:28px;border:1px solid var(--line);border-radius:50%;color:var(--accent);font-size:1rem;font-weight:300;transition:border-color .2s,background .2s}.timeline-item--expanded[_ngcontent-%COMP%]   .timeline-item__chevron[_ngcontent-%COMP%]{border-color:var(--accent);background:var(--accent-soft)}.timeline-item__highlights[_ngcontent-%COMP%]{margin:0;padding:0 1.5rem 1.25rem 3.5rem;list-style:none;columns:2;column-gap:2rem;border-top:1px solid var(--line)}.timeline-item__highlights[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;break-inside:avoid;padding:.75rem 0 .6rem 1rem;color:var(--muted);font-size:.84rem;line-height:1.6}.timeline-item__highlights[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\203a";position:absolute;left:0;color:var(--accent);font-weight:700}@media(max-width:700px){.timeline-item__head[_ngcontent-%COMP%]{grid-template-columns:auto 1fr auto}.timeline-item__meta[_ngcontent-%COMP%]{display:none}.timeline-item__highlights[_ngcontent-%COMP%]{columns:1;padding-left:2.5rem}}']})}}return n})();var ub=(n,e)=>e.title;function sk(n,e){if(n&1&&(re(0,"article",5)(1,"span",11),Q(2),ce(),re(3,"span",12),Q(4),ce(),re(5,"h3"),Q(6),ce(),re(7,"p"),Q(8),ce()()),n&2){let t=e.$implicit,i=e.$index,r=cn();ae(2),Yt("0",i+1),ae(2),Ye(r.icons[i]),ae(2),Ye(t.title),ae(2),Ye(t.description)}}function ok(n,e){if(n&1&&(re(0,"span"),Q(1),ce()),n&2){let t=e.$implicit;ae(),Ye(t)}}function ak(n,e){if(n&1&&(re(0,"div",20)(1,"p"),Q(2),ce(),re(3,"div",21),It(4,ok,2,1,"span",null,Ki),ce()()),n&2){let t=cn().$implicit;ae(2),Ye(t.description),ae(2),At(t.tech)}}function ck(n,e){if(n&1){let t=Cr();re(0,"article",13)(1,"button",14),Jn("click",function(){let r=Bi(t).$index,s=cn();return Vi(s.toggle(r))}),re(2,"span",15),Q(3),ce(),re(4,"div",16)(5,"p"),Q(6),ce(),re(7,"h3"),Q(8),ce()(),re(9,"span",17),Vo(),re(10,"svg",18),Ft(11,"path",19),ce()()(),Er(12,ak,6,1,"div",20),ce()}if(n&2){let t=e.$implicit,i=e.$index,r=cn();Ii("project-card--expanded",r.expandedIndex===i),ae(),ci("aria-expanded",r.expandedIndex===i),ae(2),Yt("0",i+1),ae(3),Ye(t.tag),ae(2),Ye(t.title),ae(),Ii("project-card__chevron--open",r.expandedIndex===i),ae(3),wr(r.expandedIndex===i?12:-1)}}var db=(()=>{class n{constructor(){this.projects=rb,this.sections=ib,this.icons=["\u{1F3AF}","\u2699\uFE0F","\u{1F510}","\u{1F680}"],this.expandedIndex=0}toggle(t){this.expandedIndex=this.expandedIndex===t?null:t}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=kt({type:n,selectors:[["app-project-cards"]],decls:36,vars:0,consts:[[1,"approach-section"],[1,"section-header","section-header--split"],[1,"section-kicker"],[1,"section-header__lead","section-header__lead--accent"],[1,"approach-grid"],[1,"approach-card","glow-card"],["id","projects",1,"projects-section"],[1,"section-rule"],[1,"section-header"],[1,"projects-list"],[1,"project-card","glow-card",3,"project-card--expanded"],[1,"approach-card__index"],["aria-hidden","true",1,"approach-card__icon"],[1,"project-card","glow-card"],["type","button",1,"project-card__head",3,"click"],[1,"project-card__index"],[1,"project-card__title"],["aria-hidden","true",1,"project-card__chevron"],["viewBox","0 0 24 24","width","16","height","16"],["d","M6 9l6 6 6-6","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round"],[1,"project-card__body"],[1,"project-card__tech"]],template:function(i,r){i&1&&(re(0,"section",0)(1,"header",1)(2,"div")(3,"p",2),Q(4,"How I work"),ce(),re(5,"h2"),Q(6,"Broad technical range."),Ft(7,"br"),Q(8,"One clear "),re(9,"em"),Q(10,"standard"),ce(),Q(11,"."),ce()(),re(12,"p",3),Q(13," Thoughtful products."),Ft(14,"br"),Q(15," Maintainable systems."),Ft(16,"br"),re(17,"em"),Q(18,"Pragmatic security"),ce(),Q(19," at every stage of delivery. "),ce()(),re(20,"div",4),It(21,sk,9,4,"article",5,ub),ce()(),re(23,"section",6),Ft(24,"hr",7),re(25,"header",8)(26,"p",2),Q(27,"Selected work"),ce(),re(28,"h2"),Q(29,"Projects with "),re(30,"em"),Q(31,"lasting impact"),ce(),Q(32,"."),ce()(),re(33,"div",9),It(34,ck,13,9,"article",10,ub),ce()()),i&2&&(ae(21),At(r.sections),ae(13),At(r.projects))},styles:[".approach-section[_ngcontent-%COMP%], .projects-section[_ngcontent-%COMP%]{padding:var(--section-pad) 0}.approach-section[_ngcontent-%COMP%]{border-top:1px solid var(--line)}.projects-section[_ngcontent-%COMP%]{scroll-margin-top:6rem}.approach-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}.approach-card[_ngcontent-%COMP%]{padding:1.75rem}.approach-card__index[_ngcontent-%COMP%]{color:var(--accent);font-family:var(--font-mono);font-size:.68rem;font-weight:700;letter-spacing:.08em}.approach-card__icon[_ngcontent-%COMP%]{display:block;margin:1.25rem 0 .5rem;font-size:1.5rem}.approach-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 .75rem;font-size:1.1rem}.approach-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:var(--muted);font-size:.88rem;line-height:1.7}.projects-list[_ngcontent-%COMP%]{display:grid;gap:1rem}.project-card[_ngcontent-%COMP%]{overflow:hidden;transition:box-shadow .3s}.project-card--expanded[_ngcontent-%COMP%]{box-shadow:0 0 30px color-mix(in srgb,var(--accent-secondary) 15%,transparent)}.project-card__head[_ngcontent-%COMP%]{display:grid;grid-template-columns:40px 1fr auto;gap:1rem;align-items:center;width:100%;padding:1.25rem 1.5rem;border:none;background:transparent;color:inherit;text-align:left;cursor:pointer;transition:background .2s}.project-card__head[_ngcontent-%COMP%]:hover{background:color-mix(in srgb,var(--accent) 4%,transparent)}.project-card__index[_ngcontent-%COMP%]{color:var(--accent);font-family:var(--font-mono);font-size:.75rem;font-weight:700}.project-card__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 .25rem;color:var(--accent-secondary);font-family:var(--font-mono);font-size:.65rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase}.project-card__title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1.1rem}.project-card__chevron[_ngcontent-%COMP%]{display:grid;place-items:center;width:30px;height:30px;border:1px solid var(--line);border-radius:50%;color:var(--accent);transition:border-color .2s,background .2s,transform .3s}.project-card__chevron--open[_ngcontent-%COMP%]{transform:rotate(180deg);border-color:var(--accent);background:var(--accent-soft)}.project-card__body[_ngcontent-%COMP%]{padding:0 1.5rem 1.5rem 4rem;border-top:1px solid var(--line)}.project-card__body[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:1rem 0;color:var(--muted);font-size:.9rem;line-height:1.7}.project-card__tech[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:1.25rem}.project-card__tech[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:.3rem .65rem;border:1px solid var(--line);border-radius:6px;background:color-mix(in srgb,var(--accent) 6%,transparent);color:var(--accent);font-family:var(--font-mono);font-size:.65rem;font-weight:600}@media(max-width:768px){.approach-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.project-card__body[_ngcontent-%COMP%]{padding-left:1.5rem}}"]})}}return n})();var C6=(n,e)=>e.title,lk=(n,e)=>e.label;function uk(n,e){if(n&1){let t=Cr();re(0,"button",13),Jn("click",function(){let r=Bi(t).$implicit,s=cn();return Vi(s.filterGroup(r.title))}),Q(1),ce()}if(n&2){let t=e.$implicit,i=cn();Ii("filter-chip--active",i.selectedGroup===t.title),ae(),Yt(" ",t.title," ")}}function dk(n,e){if(n&1&&(re(0,"span",17),Q(1),ce()),n&2){let t=e.$implicit;ae(),Ye(t)}}function fk(n,e){if(n&1&&(re(0,"article",14)(1,"h3"),Ft(2,"span",15),Q(3),ce(),re(4,"div",16),It(5,dk,2,1,"span",17,Ki),ce()()),n&2){let t=e.$implicit,i=cn();Ii("toolbox-card--dimmed",i.selectedGroup&&i.selectedGroup!==t.title),ae(3),Yt(" ",t.title," "),ae(2),At(t.items)}}function hk(n,e){if(n&1&&(re(0,"div",19)(1,"span",20),Q(2),ce(),re(3,"span",21),Q(4),ce()()),n&2){let t=e.$implicit;ae(2),Ye(t.label),ae(2),Ye(t.date)}}function pk(n,e){if(n&1&&(re(0,"article",12)(1,"h3")(2,"span",18),Q(3),ce(),Q(4),ce(),It(5,hk,5,2,"div",19,lk),ce()),n&2){let t=e.$implicit;ae(3),Yt(" ",t.title==="Certifications"?"\u{1F3C5}":"\u{1F393}"," "),ae(),Yt(" ",t.title," "),ae(),At(t.items)}}var fb=(()=>{class n{constructor(){this.toolGroups=w6,this.credentialGroups=Hf,this.selectedGroup=null}filterGroup(t){this.selectedGroup=this.selectedGroup===t?null:t}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=kt({type:n,selectors:[["app-skills-constellation"]],decls:37,vars:0,consts:[["id","skills",1,"skills-section"],[1,"section-rule"],[1,"section-header","section-header--split"],[1,"section-kicker"],[1,"section-header__lead","section-header__lead--accent"],[1,"skills-filters"],["type","button",1,"filter-chip",3,"filter-chip--active"],[1,"toolbox-grid"],[1,"toolbox-card","glow-card",3,"toolbox-card--dimmed"],[1,"credentials-section"],[1,"section-header"],[1,"credentials-list"],[1,"credentials-card","glow-card"],["type","button",1,"filter-chip",3,"click"],[1,"toolbox-card","glow-card"],["aria-hidden","true",1,"toolbox-card__dot"],[1,"chip-wrap"],[1,"chip"],["aria-hidden","true",1,"credentials-card__badge"],[1,"credentials-card__item"],[1,"credentials-card__label"],[1,"credentials-card__date"]],template:function(i,r){i&1&&(re(0,"section",0),Ft(1,"hr",1),re(2,"header",2)(3,"div")(4,"p",3),Q(5,"Capabilities"),ce(),re(6,"h2"),Q(7,"Expertise and "),re(8,"em"),Q(9,"tooling"),ce(),Q(10,"."),ce()(),re(11,"p",4),Q(12," Filter by domain."),Ft(13,"br"),Q(14," Focus on one specialty."),Ft(15,"br"),re(16,"em"),Q(17,"Technical and security"),ce(),Q(18," practice. "),ce()(),re(19,"div",5),It(20,uk,2,3,"button",6,C6),ce(),re(22,"div",7),It(23,fk,7,3,"article",8,C6),ce()(),re(25,"section",9)(26,"header",10)(27,"p",3),Q(28,"Credentials"),ce(),re(29,"h2"),Q(30,"Education and "),re(31,"em"),Q(32,"certifications"),ce(),Q(33,"."),ce()(),re(34,"div",11),It(35,pk,7,2,"article",12,C6),ce()()),i&2&&(ae(20),At(r.toolGroups),ae(3),At(r.toolGroups),ae(12),At(r.credentialGroups))},styles:[".skills-section[_ngcontent-%COMP%], .credentials-section[_ngcontent-%COMP%]{padding:var(--section-pad) 0;scroll-margin-top:6rem;overflow:visible}.skills-filters[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:2rem}.filter-chip[_ngcontent-%COMP%]{padding:.4rem .9rem;border:1px solid var(--line);border-radius:999px;background:color-mix(in srgb,var(--surface) 40%,transparent);color:var(--muted);font-size:.72rem;font-weight:600;cursor:pointer;transition:border-color .2s,color .2s,box-shadow .2s,background .2s}.filter-chip[_ngcontent-%COMP%]:hover, .filter-chip--active[_ngcontent-%COMP%]{border-color:var(--accent);background:var(--accent-soft);color:var(--accent);box-shadow:0 0 12px color-mix(in srgb,var(--accent) 20%,transparent)}.toolbox-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem;overflow:visible}.toolbox-card[_ngcontent-%COMP%]{padding:1.35rem;transition:opacity .3s}.toolbox-card--dimmed[_ngcontent-%COMP%]{opacity:.3}.toolbox-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;margin:0 0 .85rem;font-size:.9rem}.toolbox-card__dot[_ngcontent-%COMP%]{width:6px;height:6px;border-radius:50%;background:var(--accent);box-shadow:0 0 6px var(--accent)}.chip-wrap[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.4rem}.chip[_ngcontent-%COMP%]{padding:.3rem .65rem;border-radius:6px;border:1px solid color-mix(in srgb,var(--accent) 15%,transparent);background:color-mix(in srgb,var(--accent) 8%,transparent);color:var(--accent);font-family:var(--font-mono);font-size:.68rem;font-weight:600;transition:background .2s,border-color .2s}.chip[_ngcontent-%COMP%]:hover{background:color-mix(in srgb,var(--accent) 15%,transparent);border-color:var(--accent)}.credentials-list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem}.credentials-card[_ngcontent-%COMP%]{padding:1.35rem}.credentials-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;margin:0 0 .75rem;font-size:1rem}.credentials-card__badge[_ngcontent-%COMP%]{font-size:1.1rem}.credentials-card__item[_ngcontent-%COMP%]{display:grid;gap:.25rem;padding:.85rem 0;border-top:1px solid var(--line)}.credentials-card__label[_ngcontent-%COMP%]{color:var(--ink-soft);font-size:.85rem;line-height:1.5}.credentials-card__date[_ngcontent-%COMP%]{color:var(--muted);font-family:var(--font-mono);font-size:.68rem}@media(max-width:700px){.toolbox-grid[_ngcontent-%COMP%], .credentials-list[_ngcontent-%COMP%]{grid-template-columns:1fr}}"]})}}return n})();var hb=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=kt({type:n,selectors:[["app-home"]],decls:5,vars:0,template:function(i,r){i&1&&Tn(0,"app-hero-3d")(1,"app-stats-counter")(2,"app-career-timeline")(3,"app-project-cards")(4,"app-skills-constellation")},dependencies:[ab,cb,lb,db,fb],styles:["[_nghost-%COMP%]{display:block}"]})}}return n})();var pb=[{path:"",component:hb}];var ot=(function(n){return n[n.State=0]="State",n[n.Transition=1]="Transition",n[n.Sequence=2]="Sequence",n[n.Group=3]="Group",n[n.Animate=4]="Animate",n[n.Keyframes=5]="Keyframes",n[n.Style=6]="Style",n[n.Trigger=7]="Trigger",n[n.Reference=8]="Reference",n[n.AnimateChild=9]="AnimateChild",n[n.AnimateRef=10]="AnimateRef",n[n.Query=11]="Query",n[n.Stagger=12]="Stagger",n})(ot||{}),or="*";function mb(n,e=null){return{type:ot.Sequence,steps:n,options:e}}function T6(n){return{type:ot.Style,styles:n,offset:null}}var gs=class{_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_originalOnDoneFns=[];_originalOnStartFns=[];_started=!1;_destroyed=!1;_finished=!1;_position=0;parentPlayer=null;totalTime;constructor(e=0,t=0){this.totalTime=e+t}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}onStart(e){this._originalOnStartFns.push(e),this._onStartFns.push(e)}onDone(e){this._originalOnDoneFns.push(e),this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(e=>e()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(e){this._position=this.totalTime?e*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(e){let t=e=="start"?this._onStartFns:this._onDoneFns;t.forEach(i=>i()),t.length=0}},k1=class{_onDoneFns=[];_onStartFns=[];_finished=!1;_started=!1;_destroyed=!1;_onDestroyFns=[];parentPlayer=null;totalTime=0;players;constructor(e){this.players=e;let t=0,i=0,r=0,s=this.players.length;s==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(o=>{o.onDone(()=>{++t==s&&this._onFinish()}),o.onDestroy(()=>{++i==s&&this._onDestroy()}),o.onStart(()=>{++r==s&&this._onStart()})}),this.totalTime=this.players.reduce((o,a)=>Math.max(o,a.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this.players.forEach(e=>e.init())}onStart(e){this._onStartFns.push(e)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(e=>e()),this._onStartFns=[])}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(e=>e.play())}pause(){this.players.forEach(e=>e.pause())}restart(){this.players.forEach(e=>e.restart())}finish(){this._onFinish(),this.players.forEach(e=>e.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(e=>e.destroy()),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this.players.forEach(e=>e.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(e){let t=e*this.totalTime;this.players.forEach(i=>{let r=i.totalTime?Math.min(1,t/i.totalTime):1;i.setPosition(r)})}getPosition(){let e=this.players.reduce((t,i)=>t===null||i.totalTime>t.totalTime?i:t,null);return e!=null?e.getPosition():0}beforeDestroy(){this.players.forEach(e=>{e.beforeDestroy&&e.beforeDestroy()})}triggerCallback(e){let t=e=="start"?this._onStartFns:this._onDoneFns;t.forEach(i=>i()),t.length=0}},Jl="!";function gb(n){return new oe(3e3,!1)}function mk(){return new oe(3100,!1)}function gk(){return new oe(3101,!1)}function vk(n){return new oe(3001,!1)}function yk(n){return new oe(3003,!1)}function _k(n){return new oe(3004,!1)}function yb(n,e){return new oe(3005,!1)}function _b(){return new oe(3006,!1)}function bb(){return new oe(3007,!1)}function xb(n,e){return new oe(3008,!1)}function Mb(n){return new oe(3002,!1)}function Sb(n,e,t,i,r){return new oe(3010,!1)}function Eb(){return new oe(3011,!1)}function wb(){return new oe(3012,!1)}function Cb(){return new oe(3200,!1)}function Tb(){return new oe(3202,!1)}function Ib(){return new oe(3013,!1)}function Ab(n){return new oe(3014,!1)}function Db(n){return new oe(3015,!1)}function Nb(n){return new oe(3016,!1)}function Rb(n,e){return new oe(3404,!1)}function bk(n){return new oe(3502,!1)}function Pb(n){return new oe(3503,!1)}function Lb(){return new oe(3300,!1)}function zb(n){return new oe(3504,!1)}function Ob(n){return new oe(3301,!1)}function kb(n,e){return new oe(3302,!1)}function Fb(n){return new oe(3303,!1)}function Ub(n,e){return new oe(3400,!1)}function Bb(n){return new oe(3401,!1)}function Vb(n){return new oe(3402,!1)}function Hb(n,e){return new oe(3505,!1)}function vs(n){switch(n.length){case 0:return new gs;case 1:return n[0];default:return new k1(n)}}function N6(n,e,t=new Map,i=new Map){let r=[],s=[],o=-1,a=null;if(e.forEach(c=>{let l=c.get("offset"),u=l==o,d=u&&a||new Map;c.forEach((f,h)=>{let p=h,y=f;if(h!=="offset")switch(p=n.normalizePropertyName(p,r),y){case Jl:y=t.get(h);break;case or:y=i.get(h);break;default:y=n.normalizeStyleValue(h,p,y,r);break}d.set(p,y)}),u||s.push(d),a=d,o=l}),r.length)throw bk(r);return s}function jf(n,e,t,i){switch(e){case"start":n.onStart(()=>i(t&&I6(t,"start",n)));break;case"done":n.onDone(()=>i(t&&I6(t,"done",n)));break;case"destroy":n.onDestroy(()=>i(t&&I6(t,"destroy",n)));break}}function I6(n,e,t){let i=t.totalTime,r=!!t.disabled,s=Wf(n.element,n.triggerName,n.fromState,n.toState,e||n.phaseName,i??n.totalTime,r),o=n._data;return o!=null&&(s._data=o),s}function Wf(n,e,t,i,r="",s=0,o){return{element:n,triggerName:e,fromState:t,toState:i,phaseName:r,totalTime:s,disabled:!!o}}function ti(n,e,t){let i=n.get(e);return i||n.set(e,i=t),i}function R6(n){let e=n.indexOf(":"),t=n.substring(1,e),i=n.slice(e+1);return[t,i]}var xk=typeof document>"u"?null:document.documentElement;function $f(n){let e=n.parentNode||n.host||null;return e===xk?null:e}function Mk(n){return n.substring(1,6)=="ebkit"}var ua=null,vb=!1;function Gb(n){ua||(ua=Sk()||{},vb=ua.style?"WebkitAppearance"in ua.style:!1);let e=!0;return ua.style&&!Mk(n)&&(e=n in ua.style,!e&&vb&&(e="Webkit"+n.charAt(0).toUpperCase()+n.slice(1)in ua.style)),e}function Sk(){return typeof document<"u"?document.body:null}function P6(n,e){for(;e;){if(e===n)return!0;e=$f(e)}return!1}function L6(n,e,t){if(t)return Array.from(n.querySelectorAll(e));let i=n.querySelector(e);return i?[i]:[]}var Ek=1e3,z6="{{",wk="}}",O6="ng-enter",qf="ng-leave",Ql="ng-trigger",e2=".ng-trigger",k6="ng-animating",Xf=".ng-animating";function Ur(n){if(typeof n=="number")return n;let e=n.match(/^(-?[\.\d]+)(m?s)/);return!e||e.length<2?0:A6(parseFloat(e[1]),e[2])}function A6(n,e){return e==="s"?n*Ek:n}function t2(n,e,t){return n.hasOwnProperty("duration")?n:Tk(n,e,t)}var Ck=/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;function Tk(n,e,t){let i,r=0,s="";if(typeof n=="string"){let o=n.match(Ck);if(o===null)return e.push(gb(n)),{duration:0,delay:0,easing:""};i=A6(parseFloat(o[1]),o[2]);let a=o[3];a!=null&&(r=A6(parseFloat(a),o[4]));let c=o[5];c&&(s=c)}else i=n;if(!t){let o=!1,a=e.length;i<0&&(e.push(mk()),o=!0),r<0&&(e.push(gk()),o=!0),o&&e.splice(a,0,gb(n))}return{duration:i,delay:r,easing:s}}function jb(n){return n.length?n[0]instanceof Map?n:n.map(e=>new Map(Object.entries(e))):[]}function ar(n,e,t){e.forEach((i,r)=>{let s=Yf(r);t&&!t.has(r)&&t.set(r,n.style[s]),n.style[s]=i})}function lo(n,e){e.forEach((t,i)=>{let r=Yf(i);n.style[r]=""})}function F1(n){return Array.isArray(n)?n.length==1?n[0]:mb(n):n}function Wb(n,e,t){let i=e.params||{},r=F6(n);r.length&&r.forEach(s=>{i.hasOwnProperty(s)||t.push(vk(s))})}var D6=new RegExp(`${z6}\\s*(.+?)\\s*${wk}`,"g");function F6(n){let e=[];if(typeof n=="string"){let t;for(;t=D6.exec(n);)e.push(t[1]);D6.lastIndex=0}return e}function U1(n,e,t){let i=`${n}`,r=i.replace(D6,(s,o)=>{let a=e[o];return a==null&&(t.push(yk(o)),a=""),a.toString()});return r==i?n:r}var Ik=/-+([a-z0-9])/g;function Yf(n){return n.replace(Ik,(...e)=>e[1].toUpperCase())}function $b(n,e){return n===0||e===0}function qb(n,e,t){if(t.size&&e.length){let i=e[0],r=[];if(t.forEach((s,o)=>{i.has(o)||r.push(o),i.set(o,s)}),r.length)for(let s=1;s<e.length;s++){let o=e[s];r.forEach(a=>o.set(a,Zf(n,a)))}}return e}function ni(n,e,t){switch(e.type){case ot.Trigger:return n.visitTrigger(e,t);case ot.State:return n.visitState(e,t);case ot.Transition:return n.visitTransition(e,t);case ot.Sequence:return n.visitSequence(e,t);case ot.Group:return n.visitGroup(e,t);case ot.Animate:return n.visitAnimate(e,t);case ot.Keyframes:return n.visitKeyframes(e,t);case ot.Style:return n.visitStyle(e,t);case ot.Reference:return n.visitReference(e,t);case ot.AnimateChild:return n.visitAnimateChild(e,t);case ot.AnimateRef:return n.visitAnimateRef(e,t);case ot.Query:return n.visitQuery(e,t);case ot.Stagger:return n.visitStagger(e,t);default:throw _k(e.type)}}function Zf(n,e){return window.getComputedStyle(n)[e]}var t8=(()=>{class n{validateStyleProperty(t){return Gb(t)}containsElement(t,i){return P6(t,i)}getParentElement(t){return $f(t)}query(t,i,r){return L6(t,i,r)}computeStyle(t,i,r){return r||""}animate(t,i,r,s,o,a=[],c){return new gs(r,s)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=et({token:n,factory:n.\u0275fac})}return n})(),fa=class{static NOOP=new t8},ha=class{};var Ak=new Set(["width","height","minWidth","minHeight","maxWidth","maxHeight","left","top","bottom","right","fontSize","outlineWidth","outlineOffset","paddingTop","paddingLeft","paddingBottom","paddingRight","marginTop","marginLeft","marginBottom","marginRight","borderRadius","borderWidth","borderTopWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","textIndent","perspective"]),t0=class extends ha{normalizePropertyName(e,t){return Yf(e)}normalizeStyleValue(e,t,i,r){let s="",o=i.toString().trim();if(Ak.has(t)&&i!==0&&i!=="0")if(typeof i=="number")s="px";else{let a=i.match(/^[+-]?[\d\.]+([a-z]*)$/);a&&a[1].length==0&&r.push(yb(e,i))}return o+s}};var n0="*";function Dk(n,e){let t=[];return typeof n=="string"?n.split(/\s*,\s*/).forEach(i=>Nk(i,t,e)):t.push(n),t}function Nk(n,e,t){if(n[0]==":"){let c=Rk(n,t);if(typeof c=="function"){e.push(c);return}n=c}let i=n.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(i==null||i.length<4)return t.push(Db(n)),e;let r=i[1],s=i[2],o=i[3];e.push(Xb(r,o));let a=r==n0&&o==n0;s[0]=="<"&&!a&&e.push(Xb(o,r))}function Rk(n,e){switch(n){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(t,i)=>parseFloat(i)>parseFloat(t);case":decrement":return(t,i)=>parseFloat(i)<parseFloat(t);default:return e.push(Nb(n)),"* => *"}}var Kf=new Set(["true","1"]),Jf=new Set(["false","0"]);function Xb(n,e){let t=Kf.has(n)||Jf.has(n),i=Kf.has(e)||Jf.has(e);return(r,s)=>{let o=n==n0||n==r,a=e==n0||e==s;return!o&&t&&typeof r=="boolean"&&(o=r?Kf.has(n):Jf.has(n)),!a&&i&&typeof s=="boolean"&&(a=s?Kf.has(e):Jf.has(e)),o&&a}}var rx=":self",Pk=new RegExp(`s*${rx}s*,?`,"g");function sx(n,e,t,i){return new j6(n).build(e,t,i)}var Yb="",j6=class{_driver;constructor(e){this._driver=e}build(e,t,i){let r=new W6(t);return this._resetContextStyleTimingState(r),ni(this,F1(e),r)}_resetContextStyleTimingState(e){e.currentQuerySelector=Yb,e.collectedStyles=new Map,e.collectedStyles.set(Yb,new Map),e.currentTime=0}visitTrigger(e,t){let i=t.queryCount=0,r=t.depCount=0,s=[],o=[];return e.name.charAt(0)=="@"&&t.errors.push(_b()),e.definitions.forEach(a=>{if(this._resetContextStyleTimingState(t),a.type==ot.State){let c=a,l=c.name;l.toString().split(/\s*,\s*/).forEach(u=>{c.name=u,s.push(this.visitState(c,t))}),c.name=l}else if(a.type==ot.Transition){let c=this.visitTransition(a,t);i+=c.queryCount,r+=c.depCount,o.push(c)}else t.errors.push(bb())}),{type:ot.Trigger,name:e.name,states:s,transitions:o,queryCount:i,depCount:r,options:null}}visitState(e,t){let i=this.visitStyle(e.styles,t),r=e.options&&e.options.params||null;if(i.containsDynamicStyles){let s=new Set,o=r||{};i.styles.forEach(a=>{a instanceof Map&&a.forEach(c=>{F6(c).forEach(l=>{o.hasOwnProperty(l)||s.add(l)})})}),s.size&&t.errors.push(xb(e.name,[...s.values()]))}return{type:ot.State,name:e.name,style:i,options:r?{params:r}:null}}visitTransition(e,t){t.queryCount=0,t.depCount=0;let i=ni(this,F1(e.animation),t),r=Dk(e.expr,t.errors);return{type:ot.Transition,matchers:r,animation:i,queryCount:t.queryCount,depCount:t.depCount,options:da(e.options)}}visitSequence(e,t){return{type:ot.Sequence,steps:e.steps.map(i=>ni(this,i,t)),options:da(e.options)}}visitGroup(e,t){let i=t.currentTime,r=0,s=e.steps.map(o=>{t.currentTime=i;let a=ni(this,o,t);return r=Math.max(r,t.currentTime),a});return t.currentTime=r,{type:ot.Group,steps:s,options:da(e.options)}}visitAnimate(e,t){let i=kk(e.timings,t.errors);t.currentAnimateTimings=i;let r,s=e.styles?e.styles:T6({});if(s.type==ot.Keyframes)r=this.visitKeyframes(s,t);else{let o=e.styles,a=!1;if(!o){a=!0;let l={};i.easing&&(l.easing=i.easing),o=T6(l)}t.currentTime+=i.duration+i.delay;let c=this.visitStyle(o,t);c.isEmptyStep=a,r=c}return t.currentAnimateTimings=null,{type:ot.Animate,timings:i,style:r,options:null}}visitStyle(e,t){let i=this._makeStyleAst(e,t);return this._validateStyleAst(i,t),i}_makeStyleAst(e,t){let i=[],r=Array.isArray(e.styles)?e.styles:[e.styles];for(let a of r)typeof a=="string"?a===or?i.push(a):t.errors.push(Mb(a)):i.push(new Map(Object.entries(a)));let s=!1,o=null;return i.forEach(a=>{if(a instanceof Map&&(a.has("easing")&&(o=a.get("easing"),a.delete("easing")),!s)){for(let c of a.values())if(c.toString().indexOf(z6)>=0){s=!0;break}}}),{type:ot.Style,styles:i,easing:o,offset:e.offset,containsDynamicStyles:s,options:null}}_validateStyleAst(e,t){let i=t.currentAnimateTimings,r=t.currentTime,s=t.currentTime;i&&s>0&&(s-=i.duration+i.delay),e.styles.forEach(o=>{typeof o!="string"&&o.forEach((a,c)=>{let l=t.collectedStyles.get(t.currentQuerySelector),u=l.get(c),d=!0;u&&(s!=r&&s>=u.startTime&&r<=u.endTime&&(t.errors.push(Sb(c,u.startTime,u.endTime,s,r)),d=!1),s=u.startTime),d&&l.set(c,{startTime:s,endTime:r}),t.options&&Wb(a,t.options,t.errors)})})}visitKeyframes(e,t){let i={type:ot.Keyframes,styles:[],options:null};if(!t.currentAnimateTimings)return t.errors.push(Eb()),i;let r=1,s=0,o=[],a=!1,c=!1,l=0,u=e.steps.map(g=>{let M=this._makeStyleAst(g,t),S=M.offset!=null?M.offset:Ok(M.styles),x=0;return S!=null&&(s++,x=M.offset=S),c=c||x<0||x>1,a=a||x<l,l=x,o.push(x),M});c&&t.errors.push(wb()),a&&t.errors.push(Cb());let d=e.steps.length,f=0;s>0&&s<d?t.errors.push(Tb()):s==0&&(f=r/(d-1));let h=d-1,p=t.currentTime,y=t.currentAnimateTimings,m=y.duration;return u.forEach((g,M)=>{let S=f>0?M==h?1:f*M:o[M],x=S*m;t.currentTime=p+y.delay+x,y.duration=x,this._validateStyleAst(g,t),g.offset=S,i.styles.push(g)}),i}visitReference(e,t){return{type:ot.Reference,animation:ni(this,F1(e.animation),t),options:da(e.options)}}visitAnimateChild(e,t){return t.depCount++,{type:ot.AnimateChild,options:da(e.options)}}visitAnimateRef(e,t){return{type:ot.AnimateRef,animation:this.visitReference(e.animation,t),options:da(e.options)}}visitQuery(e,t){let i=t.currentQuerySelector,r=e.options||{};t.queryCount++,t.currentQuery=e;let[s,o]=Lk(e.selector);t.currentQuerySelector=i.length?i+" "+s:s,ti(t.collectedStyles,t.currentQuerySelector,new Map);let a=ni(this,F1(e.animation),t);return t.currentQuery=null,t.currentQuerySelector=i,{type:ot.Query,selector:s,limit:r.limit||0,optional:!!r.optional,includeSelf:o,animation:a,originalSelector:e.selector,options:da(e.options)}}visitStagger(e,t){t.currentQuery||t.errors.push(Ib());let i=e.timings==="full"?{duration:0,delay:0,easing:"full"}:t2(e.timings,t.errors,!0);return{type:ot.Stagger,animation:ni(this,F1(e.animation),t),timings:i,options:null}}};function Lk(n){let e=!!n.split(/\s*,\s*/).find(t=>t==rx);return e&&(n=n.replace(Pk,"")),n=n.replace(/@\*/g,e2).replace(/@\w+/g,t=>e2+"-"+t.slice(1)).replace(/:animating/g,Xf),[n,e]}function zk(n){return n?de({},n):null}var W6=class{errors;queryCount=0;depCount=0;currentTransition=null;currentQuery=null;currentQuerySelector=null;currentAnimateTimings=null;currentTime=0;collectedStyles=new Map;options=null;unsupportedCSSPropertiesFound=new Set;constructor(e){this.errors=e}};function Ok(n){if(typeof n=="string")return null;let e=null;if(Array.isArray(n))n.forEach(t=>{if(t instanceof Map&&t.has("offset")){let i=t;e=parseFloat(i.get("offset")),i.delete("offset")}});else if(n instanceof Map&&n.has("offset")){let t=n;e=parseFloat(t.get("offset")),t.delete("offset")}return e}function kk(n,e){if(n.hasOwnProperty("duration"))return n;if(typeof n=="number"){let s=t2(n,e).duration;return U6(s,0,"")}let t=n;if(t.split(/\s+/).some(s=>s.charAt(0)=="{"&&s.charAt(1)=="{")){let s=U6(0,0,"");return s.dynamic=!0,s.strValue=t,s}let r=t2(t,e);return U6(r.duration,r.delay,r.easing)}function da(n){return n?(n=de({},n),n.params&&(n.params=zk(n.params))):n={},n}function U6(n,e,t){return{duration:n,delay:e,easing:t}}function n8(n,e,t,i,r,s,o=null,a=!1){return{type:1,element:n,keyframes:e,preStyleProps:t,postStyleProps:i,duration:r,delay:s,totalTime:r+s,easing:o,subTimeline:a}}var i2=class{_map=new Map;get(e){return this._map.get(e)||[]}append(e,t){let i=this._map.get(e);i||this._map.set(e,i=[]),i.push(...t)}has(e){return this._map.has(e)}clear(){this._map.clear()}},Fk=1,Uk=":enter",Bk=new RegExp(Uk,"g"),Vk=":leave",Hk=new RegExp(Vk,"g");function ox(n,e,t,i,r,s=new Map,o=new Map,a,c,l=[]){return new $6().buildKeyframes(n,e,t,i,r,s,o,a,c,l)}var $6=class{buildKeyframes(e,t,i,r,s,o,a,c,l,u=[]){l=l||new i2;let d=new q6(e,t,l,r,s,u,[]);d.options=c;let f=c.delay?Ur(c.delay):0;d.currentTimeline.delayNextStep(f),d.currentTimeline.setStyles([o],null,d.errors,c),ni(this,i,d);let h=d.timelines.filter(p=>p.containsAnimation());if(h.length&&a.size){let p;for(let y=h.length-1;y>=0;y--){let m=h[y];if(m.element===t){p=m;break}}p&&!p.allowOnlyTimelineStyles()&&p.setStyles([a],null,d.errors,c)}return h.length?h.map(p=>p.buildKeyframes()):[n8(t,[],[],[],0,f,"",!1)]}visitTrigger(e,t){}visitState(e,t){}visitTransition(e,t){}visitAnimateChild(e,t){let i=t.subInstructions.get(t.element);if(i){let r=t.createSubContext(e.options),s=t.currentTimeline.currentTime,o=this._visitSubInstructions(i,r,r.options);s!=o&&t.transformIntoNewTimeline(o)}t.previousNode=e}visitAnimateRef(e,t){let i=t.createSubContext(e.options);i.transformIntoNewTimeline(),this._applyAnimationRefDelays([e.options,e.animation.options],t,i),this.visitReference(e.animation,i),t.transformIntoNewTimeline(i.currentTimeline.currentTime),t.previousNode=e}_applyAnimationRefDelays(e,t,i){for(let r of e){let s=r?.delay;if(s){let o=typeof s=="number"?s:Ur(U1(s,r?.params??{},t.errors));i.delayNextStep(o)}}}_visitSubInstructions(e,t,i){let s=t.currentTimeline.currentTime,o=i.duration!=null?Ur(i.duration):null,a=i.delay!=null?Ur(i.delay):null;return o!==0&&e.forEach(c=>{let l=t.appendInstructionToTimeline(c,o,a);s=Math.max(s,l.duration+l.delay)}),s}visitReference(e,t){t.updateOptions(e.options,!0),ni(this,e.animation,t),t.previousNode=e}visitSequence(e,t){let i=t.subContextCount,r=t,s=e.options;if(s&&(s.params||s.delay)&&(r=t.createSubContext(s),r.transformIntoNewTimeline(),s.delay!=null)){r.previousNode.type==ot.Style&&(r.currentTimeline.snapshotCurrentStyles(),r.previousNode=i0);let o=Ur(s.delay);r.delayNextStep(o)}e.steps.length&&(e.steps.forEach(o=>ni(this,o,r)),r.currentTimeline.applyStylesToKeyframe(),r.subContextCount>i&&r.transformIntoNewTimeline()),t.previousNode=e}visitGroup(e,t){let i=[],r=t.currentTimeline.currentTime,s=e.options&&e.options.delay?Ur(e.options.delay):0;e.steps.forEach(o=>{let a=t.createSubContext(e.options);s&&a.delayNextStep(s),ni(this,o,a),r=Math.max(r,a.currentTimeline.currentTime),i.push(a.currentTimeline)}),i.forEach(o=>t.currentTimeline.mergeTimelineCollectedStyles(o)),t.transformIntoNewTimeline(r),t.previousNode=e}_visitTiming(e,t){if(e.dynamic){let i=e.strValue,r=t.params?U1(i,t.params,t.errors):i;return t2(r,t.errors)}else return{duration:e.duration,delay:e.delay,easing:e.easing}}visitAnimate(e,t){let i=t.currentAnimateTimings=this._visitTiming(e.timings,t),r=t.currentTimeline;i.delay&&(t.incrementTime(i.delay),r.snapshotCurrentStyles());let s=e.style;s.type==ot.Keyframes?this.visitKeyframes(s,t):(t.incrementTime(i.duration),this.visitStyle(s,t),r.applyStylesToKeyframe()),t.currentAnimateTimings=null,t.previousNode=e}visitStyle(e,t){let i=t.currentTimeline,r=t.currentAnimateTimings;!r&&i.hasCurrentStyleProperties()&&i.forwardFrame();let s=r&&r.easing||e.easing;e.isEmptyStep?i.applyEmptyStep(s):i.setStyles(e.styles,s,t.errors,t.options),t.previousNode=e}visitKeyframes(e,t){let i=t.currentAnimateTimings,r=t.currentTimeline.duration,s=i.duration,a=t.createSubContext().currentTimeline;a.easing=i.easing,e.styles.forEach(c=>{let l=c.offset||0;a.forwardTime(l*s),a.setStyles(c.styles,c.easing,t.errors,t.options),a.applyStylesToKeyframe()}),t.currentTimeline.mergeTimelineCollectedStyles(a),t.transformIntoNewTimeline(r+s),t.previousNode=e}visitQuery(e,t){let i=t.currentTimeline.currentTime,r=e.options||{},s=r.delay?Ur(r.delay):0;s&&(t.previousNode.type===ot.Style||i==0&&t.currentTimeline.hasCurrentStyleProperties())&&(t.currentTimeline.snapshotCurrentStyles(),t.previousNode=i0);let o=i,a=t.invokeQuery(e.selector,e.originalSelector,e.limit,e.includeSelf,!!r.optional,t.errors);t.currentQueryTotal=a.length;let c=null;a.forEach((l,u)=>{t.currentQueryIndex=u;let d=t.createSubContext(e.options,l);s&&d.delayNextStep(s),l===t.element&&(c=d.currentTimeline),ni(this,e.animation,d),d.currentTimeline.applyStylesToKeyframe();let f=d.currentTimeline.currentTime;o=Math.max(o,f)}),t.currentQueryIndex=0,t.currentQueryTotal=0,t.transformIntoNewTimeline(o),c&&(t.currentTimeline.mergeTimelineCollectedStyles(c),t.currentTimeline.snapshotCurrentStyles()),t.previousNode=e}visitStagger(e,t){let i=t.parentContext,r=t.currentTimeline,s=e.timings,o=Math.abs(s.duration),a=o*(t.currentQueryTotal-1),c=o*t.currentQueryIndex;switch(s.duration<0?"reverse":s.easing){case"reverse":c=a-c;break;case"full":c=i.currentStaggerTime;break}let u=t.currentTimeline;c&&u.delayNextStep(c);let d=u.currentTime;ni(this,e.animation,t),t.previousNode=e,i.currentStaggerTime=r.currentTime-d+(r.startTime-i.currentTimeline.startTime)}},i0={},q6=class n{_driver;element;subInstructions;_enterClassName;_leaveClassName;errors;timelines;parentContext=null;currentTimeline;currentAnimateTimings=null;previousNode=i0;subContextCount=0;options={};currentQueryIndex=0;currentQueryTotal=0;currentStaggerTime=0;constructor(e,t,i,r,s,o,a,c){this._driver=e,this.element=t,this.subInstructions=i,this._enterClassName=r,this._leaveClassName=s,this.errors=o,this.timelines=a,this.currentTimeline=c||new r0(this._driver,t,0),a.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(e,t){if(!e)return;let i=e,r=this.options;i.duration!=null&&(r.duration=Ur(i.duration)),i.delay!=null&&(r.delay=Ur(i.delay));let s=i.params;if(s){let o=r.params;o||(o=this.options.params={}),Object.keys(s).forEach(a=>{(!t||!o.hasOwnProperty(a))&&(o[a]=U1(s[a],o,this.errors))})}}_copyOptions(){let e={};if(this.options){let t=this.options.params;if(t){let i=e.params={};Object.keys(t).forEach(r=>{i[r]=t[r]})}}return e}createSubContext(e=null,t,i){let r=t||this.element,s=new n(this._driver,r,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(r,i||0));return s.previousNode=this.previousNode,s.currentAnimateTimings=this.currentAnimateTimings,s.options=this._copyOptions(),s.updateOptions(e),s.currentQueryIndex=this.currentQueryIndex,s.currentQueryTotal=this.currentQueryTotal,s.parentContext=this,this.subContextCount++,s}transformIntoNewTimeline(e){return this.previousNode=i0,this.currentTimeline=this.currentTimeline.fork(this.element,e),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(e,t,i){let r={duration:t??e.duration,delay:this.currentTimeline.currentTime+(i??0)+e.delay,easing:""},s=new X6(this._driver,e.element,e.keyframes,e.preStyleProps,e.postStyleProps,r,e.stretchStartingKeyframe);return this.timelines.push(s),r}incrementTime(e){this.currentTimeline.forwardTime(this.currentTimeline.duration+e)}delayNextStep(e){e>0&&this.currentTimeline.delayNextStep(e)}invokeQuery(e,t,i,r,s,o){let a=[];if(r&&a.push(this.element),e.length>0){e=e.replace(Bk,"."+this._enterClassName),e=e.replace(Hk,"."+this._leaveClassName);let c=i!=1,l=this._driver.query(this.element,e,c);i!==0&&(l=i<0?l.slice(l.length+i,l.length):l.slice(0,i)),a.push(...l)}return!s&&a.length==0&&o.push(Ab(t)),a}},r0=class n{_driver;element;startTime;_elementTimelineStylesLookup;duration=0;easing=null;_previousKeyframe=new Map;_currentKeyframe=new Map;_keyframes=new Map;_styleSummary=new Map;_localTimelineStyles=new Map;_globalTimelineStyles;_pendingStyles=new Map;_backFill=new Map;_currentEmptyStepKeyframe=null;constructor(e,t,i,r){this._driver=e,this.element=t,this.startTime=i,this._elementTimelineStylesLookup=r,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(t),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(t,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(e){let t=this._keyframes.size===1&&this._pendingStyles.size;this.duration||t?(this.forwardTime(this.currentTime+e),t&&this.snapshotCurrentStyles()):this.startTime+=e}fork(e,t){return this.applyStylesToKeyframe(),new n(this._driver,e,t||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=Fk,this._loadKeyframe()}forwardTime(e){this.applyStylesToKeyframe(),this.duration=e,this._loadKeyframe()}_updateStyle(e,t){this._localTimelineStyles.set(e,t),this._globalTimelineStyles.set(e,t),this._styleSummary.set(e,{time:this.currentTime,value:t})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(e){e&&this._previousKeyframe.set("easing",e);for(let[t,i]of this._globalTimelineStyles)this._backFill.set(t,i||or),this._currentKeyframe.set(t,or);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(e,t,i,r){t&&this._previousKeyframe.set("easing",t);let s=r&&r.params||{},o=Gk(e,this._globalTimelineStyles);for(let[a,c]of o){let l=U1(c,s,i);this._pendingStyles.set(a,l),this._localTimelineStyles.has(a)||this._backFill.set(a,this._globalTimelineStyles.get(a)??or),this._updateStyle(a,l)}}applyStylesToKeyframe(){this._pendingStyles.size!=0&&(this._pendingStyles.forEach((e,t)=>{this._currentKeyframe.set(t,e)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((e,t)=>{this._currentKeyframe.has(t)||this._currentKeyframe.set(t,e)}))}snapshotCurrentStyles(){for(let[e,t]of this._localTimelineStyles)this._pendingStyles.set(e,t),this._updateStyle(e,t)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){let e=[];for(let t in this._currentKeyframe)e.push(t);return e}mergeTimelineCollectedStyles(e){e._styleSummary.forEach((t,i)=>{let r=this._styleSummary.get(i);(!r||t.time>r.time)&&this._updateStyle(i,t.value)})}buildKeyframes(){this.applyStylesToKeyframe();let e=new Set,t=new Set,i=this._keyframes.size===1&&this.duration===0,r=[];this._keyframes.forEach((a,c)=>{let l=new Map([...this._backFill,...a]);l.forEach((u,d)=>{u===Jl?e.add(d):u===or&&t.add(d)}),i||l.set("offset",c/this.duration),r.push(l)});let s=[...e.values()],o=[...t.values()];if(i){let a=r[0],c=new Map(a);a.set("offset",0),c.set("offset",1),r=[a,c]}return n8(this.element,r,s,o,this.duration,this.startTime,this.easing,!1)}},X6=class extends r0{keyframes;preStyleProps;postStyleProps;_stretchStartingKeyframe;timings;constructor(e,t,i,r,s,o,a=!1){super(e,t,o.delay),this.keyframes=i,this.preStyleProps=r,this.postStyleProps=s,this._stretchStartingKeyframe=a,this.timings={duration:o.duration,delay:o.delay,easing:o.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let e=this.keyframes,{delay:t,duration:i,easing:r}=this.timings;if(this._stretchStartingKeyframe&&t){let s=[],o=i+t,a=t/o,c=new Map(e[0]);c.set("offset",0),s.push(c);let l=new Map(e[0]);l.set("offset",Zb(a)),s.push(l);let u=e.length-1;for(let d=1;d<=u;d++){let f=new Map(e[d]),h=f.get("offset"),p=t+h*i;f.set("offset",Zb(p/o)),s.push(f)}i=o,t=0,r="",e=s}return n8(this.element,e,this.preStyleProps,this.postStyleProps,i,t,r,!0)}};function Zb(n,e=3){let t=Math.pow(10,e-1);return Math.round(n*t)/t}function Gk(n,e){let t=new Map,i;return n.forEach(r=>{if(r==="*"){i??=e.keys();for(let s of i)t.set(s,or)}else for(let[s,o]of r)t.set(s,o)}),t}function Kb(n,e,t,i,r,s,o,a,c,l,u,d,f){return{type:0,element:n,triggerName:e,isRemovalTransition:r,fromState:t,fromStyles:s,toState:i,toStyles:o,timelines:a,queriedElements:c,preStyleProps:l,postStyleProps:u,totalTime:d,errors:f}}var B6={},s0=class{_triggerName;ast;_stateStyles;constructor(e,t,i){this._triggerName=e,this.ast=t,this._stateStyles=i}match(e,t,i,r){return jk(this.ast.matchers,e,t,i,r)}buildStyles(e,t,i){let r=this._stateStyles.get("*");return e!==void 0&&(r=this._stateStyles.get(e?.toString())||r),r?r.buildStyles(t,i):new Map}build(e,t,i,r,s,o,a,c,l,u){let d=[],f=this.ast.options&&this.ast.options.params||B6,h=a&&a.params||B6,p=this.buildStyles(i,h,d),y=c&&c.params||B6,m=this.buildStyles(r,y,d),g=new Set,M=new Map,S=new Map,x=r==="void",T={params:ax(y,f),delay:this.ast.options?.delay},w=u?[]:ox(e,t,this.ast.animation,s,o,p,m,T,l,d),I=0;return w.forEach(_=>{I=Math.max(_.duration+_.delay,I)}),d.length?Kb(t,this._triggerName,i,r,x,p,m,[],[],M,S,I,d):(w.forEach(_=>{let E=_.element,A=ti(M,E,new Set);_.preStyleProps.forEach(O=>A.add(O));let D=ti(S,E,new Set);_.postStyleProps.forEach(O=>D.add(O)),E!==t&&g.add(E)}),Kb(t,this._triggerName,i,r,x,p,m,w,[...g.values()],M,S,I))}};function jk(n,e,t,i,r){return n.some(s=>s(e,t,i,r))}function ax(n,e){let t=de({},e);return Object.entries(n).forEach(([i,r])=>{r!=null&&(t[i]=r)}),t}var Y6=class{styles;defaultParams;normalizer;constructor(e,t,i){this.styles=e,this.defaultParams=t,this.normalizer=i}buildStyles(e,t){let i=new Map,r=ax(e,this.defaultParams);return this.styles.styles.forEach(s=>{typeof s!="string"&&s.forEach((o,a)=>{o&&(o=U1(o,r,t));let c=this.normalizer.normalizePropertyName(a,t);o=this.normalizer.normalizeStyleValue(a,c,o,t),i.set(a,o)})}),i}};function Wk(n,e,t){return new Z6(n,e,t)}var Z6=class{name;ast;_normalizer;transitionFactories=[];fallbackTransition;states=new Map;constructor(e,t,i){this.name=e,this.ast=t,this._normalizer=i,t.states.forEach(r=>{let s=r.options&&r.options.params||{};this.states.set(r.name,new Y6(r.style,s,i))}),Jb(this.states,"true","1"),Jb(this.states,"false","0"),t.transitions.forEach(r=>{this.transitionFactories.push(new s0(e,r,this.states))}),this.fallbackTransition=$k(e,this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(e,t,i,r){return this.transitionFactories.find(o=>o.match(e,t,i,r))||null}matchStyles(e,t,i){return this.fallbackTransition.buildStyles(e,t,i)}};function $k(n,e,t){let i=[(o,a)=>!0],r={type:ot.Sequence,steps:[],options:null},s={type:ot.Transition,animation:r,matchers:i,options:null,queryCount:0,depCount:0};return new s0(n,s,e)}function Jb(n,e,t){n.has(e)?n.has(t)||n.set(t,n.get(e)):n.has(t)&&n.set(e,n.get(t))}var qk=new i2,K6=class{bodyNode;_driver;_normalizer;_animations=new Map;_playersById=new Map;players=[];constructor(e,t,i){this.bodyNode=e,this._driver=t,this._normalizer=i}register(e,t){let i=[],r=[],s=sx(this._driver,t,i,r);if(i.length)throw Pb(i);this._animations.set(e,s)}_buildPlayer(e,t,i){let r=e.element,s=N6(this._normalizer,e.keyframes,t,i);return this._driver.animate(r,s,e.duration,e.delay,e.easing,[],!0)}create(e,t,i={}){let r=[],s=this._animations.get(e),o,a=new Map;if(s?(o=ox(this._driver,t,s,O6,qf,new Map,new Map,i,qk,r),o.forEach(u=>{let d=ti(a,u.element,new Map);u.postStyleProps.forEach(f=>d.set(f,null))})):(r.push(Lb()),o=[]),r.length)throw zb(r);a.forEach((u,d)=>{u.forEach((f,h)=>{u.set(h,this._driver.computeStyle(d,h,or))})});let c=o.map(u=>{let d=a.get(u.element);return this._buildPlayer(u,new Map,d)}),l=vs(c);return this._playersById.set(e,l),l.onDestroy(()=>this.destroy(e)),this.players.push(l),l}destroy(e){let t=this._getPlayer(e);t.destroy(),this._playersById.delete(e);let i=this.players.indexOf(t);i>=0&&this.players.splice(i,1)}_getPlayer(e){let t=this._playersById.get(e);if(!t)throw Ob(e);return t}listen(e,t,i,r){let s=Wf(t,"","","");return jf(this._getPlayer(e),i,s,r),()=>{}}command(e,t,i,r){if(i=="register"){this.register(e,r[0]);return}if(i=="create"){let o=r[0]||{};this.create(e,t,o);return}let s=this._getPlayer(e);switch(i){case"play":s.play();break;case"pause":s.pause();break;case"reset":s.reset();break;case"restart":s.restart();break;case"finish":s.finish();break;case"init":s.init();break;case"setPosition":s.setPosition(parseFloat(r[0]));break;case"destroy":this.destroy(e);break}}},Qb="ng-animate-queued",Xk=".ng-animate-queued",V6="ng-animate-disabled",Yk=".ng-animate-disabled",Zk="ng-star-inserted",Kk=".ng-star-inserted",Jk=[],cx={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},Qk={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},cr="__ng_removed",r2=class{namespaceId;value;options;get params(){return this.options.params}constructor(e,t=""){this.namespaceId=t;let i=e&&e.hasOwnProperty("value"),r=i?e.value:e;if(this.value=tF(r),i){let s=e,{value:o}=s,a=I0(s,["value"]);this.options=a}else this.options={};this.options.params||(this.options.params={})}absorbOptions(e){let t=e.params;if(t){let i=this.options.params;Object.keys(t).forEach(r=>{i[r]==null&&(i[r]=t[r])})}}},n2="void",H6=new r2(n2),J6=class{id;hostElement;_engine;players=[];_triggers=new Map;_queue=[];_elementListeners=new Map;_hostClassName;constructor(e,t,i){this.id=e,this.hostElement=t,this._engine=i,this._hostClassName="ng-tns-"+e,Pi(t,this._hostClassName)}listen(e,t,i,r){if(!this._triggers.has(t))throw kb(i,t);if(i==null||i.length==0)throw Fb(t);if(!nF(i))throw Ub(i,t);let s=ti(this._elementListeners,e,[]),o={name:t,phase:i,callback:r};s.push(o);let a=ti(this._engine.statesByElement,e,new Map);return a.has(t)||(Pi(e,Ql),Pi(e,Ql+"-"+t),a.set(t,H6)),()=>{this._engine.afterFlush(()=>{let c=s.indexOf(o);c>=0&&s.splice(c,1),this._triggers.has(t)||a.delete(t)})}}register(e,t){return this._triggers.has(e)?!1:(this._triggers.set(e,t),!0)}_getTrigger(e){let t=this._triggers.get(e);if(!t)throw Bb(e);return t}trigger(e,t,i,r=!0){let s=this._getTrigger(t),o=new s2(this.id,t,e),a=this._engine.statesByElement.get(e);a||(Pi(e,Ql),Pi(e,Ql+"-"+t),this._engine.statesByElement.set(e,a=new Map));let c=a.get(t),l=new r2(i,this.id);if(!(i&&i.hasOwnProperty("value"))&&c&&l.absorbOptions(c.options),a.set(t,l),c||(c=H6),!(l.value===n2)&&c.value===l.value){if(!sF(c.params,l.params)){let y=[],m=s.matchStyles(c.value,c.params,y),g=s.matchStyles(l.value,l.params,y);y.length?this._engine.reportError(y):this._engine.afterFlush(()=>{lo(e,m),ar(e,g)})}return}let f=ti(this._engine.playersByElement,e,[]);f.forEach(y=>{y.namespaceId==this.id&&y.triggerName==t&&y.queued&&y.destroy()});let h=s.matchTransition(c.value,l.value,e,l.params),p=!1;if(!h){if(!r)return;h=s.fallbackTransition,p=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:t,transition:h,fromState:c,toState:l,player:o,isFallbackTransition:p}),p||(Pi(e,Qb),o.onStart(()=>{B1(e,Qb)})),o.onDone(()=>{let y=this.players.indexOf(o);y>=0&&this.players.splice(y,1);let m=this._engine.playersByElement.get(e);if(m){let g=m.indexOf(o);g>=0&&m.splice(g,1)}}),this.players.push(o),f.push(o),o}deregister(e){this._triggers.delete(e),this._engine.statesByElement.forEach(t=>t.delete(e)),this._elementListeners.forEach((t,i)=>{this._elementListeners.set(i,t.filter(r=>r.name!=e))})}clearElementCache(e){this._engine.statesByElement.delete(e),this._elementListeners.delete(e);let t=this._engine.playersByElement.get(e);t&&(t.forEach(i=>i.destroy()),this._engine.playersByElement.delete(e))}_signalRemovalForInnerTriggers(e,t){let i=this._engine.driver.query(e,e2,!0);i.forEach(r=>{if(r[cr])return;let s=this._engine.fetchNamespacesByElement(r);s.size?s.forEach(o=>o.triggerLeaveAnimation(r,t,!1,!0)):this.clearElementCache(r)}),this._engine.afterFlushAnimationsDone(()=>i.forEach(r=>this.clearElementCache(r)))}triggerLeaveAnimation(e,t,i,r){let s=this._engine.statesByElement.get(e),o=new Map;if(s){let a=[];if(s.forEach((c,l)=>{if(o.set(l,c.value),this._triggers.has(l)){let u=this.trigger(e,l,n2,r);u&&a.push(u)}}),a.length)return this._engine.markElementAsRemoved(this.id,e,!0,t,o),i&&vs(a).onDone(()=>this._engine.processLeaveNode(e)),!0}return!1}prepareLeaveAnimationListeners(e){let t=this._elementListeners.get(e),i=this._engine.statesByElement.get(e);if(t&&i){let r=new Set;t.forEach(s=>{let o=s.name;if(r.has(o))return;r.add(o);let c=this._triggers.get(o).fallbackTransition,l=i.get(o)||H6,u=new r2(n2),d=new s2(this.id,o,e);this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:o,transition:c,fromState:l,toState:u,player:d,isFallbackTransition:!0})})}}removeNode(e,t){let i=this._engine;if(e.childElementCount&&this._signalRemovalForInnerTriggers(e,t),this.triggerLeaveAnimation(e,t,!0))return;let r=!1;if(i.totalAnimations){let s=i.players.length?i.playersByQueriedElement.get(e):[];if(s&&s.length)r=!0;else{let o=e;for(;o=o.parentNode;)if(i.statesByElement.get(o)){r=!0;break}}}if(this.prepareLeaveAnimationListeners(e),r)i.markElementAsRemoved(this.id,e,!1,t);else{let s=e[cr];(!s||s===cx)&&(i.afterFlush(()=>this.clearElementCache(e)),i.destroyInnerAnimations(e),i._onRemovalComplete(e,t))}}insertNode(e,t){Pi(e,this._hostClassName)}drainQueuedTransitions(e){let t=[];return this._queue.forEach(i=>{let r=i.player;if(r.destroyed)return;let s=i.element,o=this._elementListeners.get(s);o&&o.forEach(a=>{if(a.name==i.triggerName){let c=Wf(s,i.triggerName,i.fromState.value,i.toState.value);c._data=e,jf(i.player,a.phase,c,a.callback)}}),r.markedForDestroy?this._engine.afterFlush(()=>{r.destroy()}):t.push(i)}),this._queue=[],t.sort((i,r)=>{let s=i.transition.ast.depCount,o=r.transition.ast.depCount;return s==0||o==0?s-o:this._engine.driver.containsElement(i.element,r.element)?1:-1})}destroy(e){this.players.forEach(t=>t.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,e)}},Q6=class{bodyNode;driver;_normalizer;players=[];newHostElements=new Map;playersByElement=new Map;playersByQueriedElement=new Map;statesByElement=new Map;disabledNodes=new Set;totalAnimations=0;totalQueuedPlayers=0;_namespaceLookup={};_namespaceList=[];_flushFns=[];_whenQuietFns=[];namespacesByHostElement=new Map;collectedEnterElements=[];collectedLeaveElements=[];onRemovalComplete=(e,t)=>{};_onRemovalComplete(e,t){this.onRemovalComplete(e,t)}constructor(e,t,i){this.bodyNode=e,this.driver=t,this._normalizer=i}get queuedPlayers(){let e=[];return this._namespaceList.forEach(t=>{t.players.forEach(i=>{i.queued&&e.push(i)})}),e}createNamespace(e,t){let i=new J6(e,t,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,t)?this._balanceNamespaceList(i,t):(this.newHostElements.set(t,i),this.collectEnterElement(t)),this._namespaceLookup[e]=i}_balanceNamespaceList(e,t){let i=this._namespaceList,r=this.namespacesByHostElement;if(i.length-1>=0){let o=!1,a=this.driver.getParentElement(t);for(;a;){let c=r.get(a);if(c){let l=i.indexOf(c);i.splice(l+1,0,e),o=!0;break}a=this.driver.getParentElement(a)}o||i.unshift(e)}else i.push(e);return r.set(t,e),e}register(e,t){let i=this._namespaceLookup[e];return i||(i=this.createNamespace(e,t)),i}registerTrigger(e,t,i){let r=this._namespaceLookup[e];r&&r.register(t,i)&&this.totalAnimations++}destroy(e,t){e&&(this.afterFlush(()=>{}),this.afterFlushAnimationsDone(()=>{let i=this._fetchNamespace(e);this.namespacesByHostElement.delete(i.hostElement);let r=this._namespaceList.indexOf(i);r>=0&&this._namespaceList.splice(r,1),i.destroy(t),delete this._namespaceLookup[e]}))}_fetchNamespace(e){return this._namespaceLookup[e]}fetchNamespacesByElement(e){let t=new Set,i=this.statesByElement.get(e);if(i){for(let r of i.values())if(r.namespaceId){let s=this._fetchNamespace(r.namespaceId);s&&t.add(s)}}return t}trigger(e,t,i,r){if(Qf(t)){let s=this._fetchNamespace(e);if(s)return s.trigger(t,i,r),!0}return!1}insertNode(e,t,i,r){if(!Qf(t))return;let s=t[cr];if(s&&s.setForRemoval){s.setForRemoval=!1,s.setForMove=!0;let o=this.collectedLeaveElements.indexOf(t);o>=0&&this.collectedLeaveElements.splice(o,1)}if(e){let o=this._fetchNamespace(e);o&&o.insertNode(t,i)}r&&this.collectEnterElement(t)}collectEnterElement(e){this.collectedEnterElements.push(e)}markElementAsDisabled(e,t){t?this.disabledNodes.has(e)||(this.disabledNodes.add(e),Pi(e,V6)):this.disabledNodes.has(e)&&(this.disabledNodes.delete(e),B1(e,V6))}removeNode(e,t,i){if(Qf(t)){let r=e?this._fetchNamespace(e):null;r?r.removeNode(t,i):this.markElementAsRemoved(e,t,!1,i);let s=this.namespacesByHostElement.get(t);s&&s.id!==e&&s.removeNode(t,i)}else this._onRemovalComplete(t,i)}markElementAsRemoved(e,t,i,r,s){this.collectedLeaveElements.push(t),t[cr]={namespaceId:e,setForRemoval:r,hasAnimation:i,removedBeforeQueried:!1,previousTriggersValues:s}}listen(e,t,i,r,s){return Qf(t)?this._fetchNamespace(e).listen(t,i,r,s):()=>{}}_buildInstruction(e,t,i,r,s){return e.transition.build(this.driver,e.element,e.fromState.value,e.toState.value,i,r,e.fromState.options,e.toState.options,t,s)}destroyInnerAnimations(e){let t=this.driver.query(e,e2,!0);t.forEach(i=>this.destroyActiveAnimationsForElement(i)),this.playersByQueriedElement.size!=0&&(t=this.driver.query(e,Xf,!0),t.forEach(i=>this.finishActiveQueriedAnimationOnElement(i)))}destroyActiveAnimationsForElement(e){let t=this.playersByElement.get(e);t&&t.forEach(i=>{i.queued?i.markedForDestroy=!0:i.destroy()})}finishActiveQueriedAnimationOnElement(e){let t=this.playersByQueriedElement.get(e);t&&t.forEach(i=>i.finish())}whenRenderingDone(){return new Promise(e=>{if(this.players.length)return vs(this.players).onDone(()=>e());e()})}processLeaveNode(e){let t=e[cr];if(t&&t.setForRemoval){if(e[cr]=cx,t.namespaceId){this.destroyInnerAnimations(e);let i=this._fetchNamespace(t.namespaceId);i&&i.clearElementCache(e)}this._onRemovalComplete(e,t.setForRemoval)}e.classList?.contains(V6)&&this.markElementAsDisabled(e,!1),this.driver.query(e,Yk,!0).forEach(i=>{this.markElementAsDisabled(i,!1)})}flush(e=-1){let t=[];if(this.newHostElements.size&&(this.newHostElements.forEach((i,r)=>this._balanceNamespaceList(i,r)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let i=0;i<this.collectedEnterElements.length;i++){let r=this.collectedEnterElements[i];Pi(r,Zk)}if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){let i=[];try{t=this._flushAnimations(i,e)}finally{for(let r=0;r<i.length;r++)i[r]()}}else for(let i=0;i<this.collectedLeaveElements.length;i++){let r=this.collectedLeaveElements[i];this.processLeaveNode(r)}if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(i=>i()),this._flushFns=[],this._whenQuietFns.length){let i=this._whenQuietFns;this._whenQuietFns=[],t.length?vs(t).onDone(()=>{i.forEach(r=>r())}):i.forEach(r=>r())}}reportError(e){throw Vb(e)}_flushAnimations(e,t){let i=new i2,r=[],s=new Map,o=[],a=new Map,c=new Map,l=new Map,u=new Set;this.disabledNodes.forEach(L=>{u.add(L);let N=this.driver.query(L,Xk,!0);for(let B=0;B<N.length;B++)u.add(N[B])});let d=this.bodyNode,f=Array.from(this.statesByElement.keys()),h=nx(f,this.collectedEnterElements),p=new Map,y=0;h.forEach((L,N)=>{let B=O6+y++;p.set(N,B),L.forEach(q=>Pi(q,B))});let m=[],g=new Set,M=new Set;for(let L=0;L<this.collectedLeaveElements.length;L++){let N=this.collectedLeaveElements[L],B=N[cr];B&&B.setForRemoval&&(m.push(N),g.add(N),B.hasAnimation?this.driver.query(N,Kk,!0).forEach(q=>g.add(q)):M.add(N))}let S=new Map,x=nx(f,Array.from(g));x.forEach((L,N)=>{let B=qf+y++;S.set(N,B),L.forEach(q=>Pi(q,B))}),e.push(()=>{h.forEach((L,N)=>{let B=p.get(N);L.forEach(q=>B1(q,B))}),x.forEach((L,N)=>{let B=S.get(N);L.forEach(q=>B1(q,B))}),m.forEach(L=>{this.processLeaveNode(L)})});let T=[],w=[];for(let L=this._namespaceList.length-1;L>=0;L--)this._namespaceList[L].drainQueuedTransitions(t).forEach(B=>{let q=B.player,se=B.element;if(T.push(q),this.collectedEnterElements.length){let ie=se[cr];if(ie&&ie.setForMove){if(ie.previousTriggersValues&&ie.previousTriggersValues.has(B.triggerName)){let ne=ie.previousTriggersValues.get(B.triggerName),Ie=this.statesByElement.get(B.element);if(Ie&&Ie.has(B.triggerName)){let Ge=Ie.get(B.triggerName);Ge.value=ne,Ie.set(B.triggerName,Ge)}}q.destroy();return}}let fe=!d||!this.driver.containsElement(d,se),me=S.get(se),nt=p.get(se),je=this._buildInstruction(B,i,nt,me,fe);if(je.errors&&je.errors.length){w.push(je);return}if(fe){q.onStart(()=>lo(se,je.fromStyles)),q.onDestroy(()=>ar(se,je.toStyles)),r.push(q);return}if(B.isFallbackTransition){q.onStart(()=>lo(se,je.fromStyles)),q.onDestroy(()=>ar(se,je.toStyles)),r.push(q);return}let pt=[];je.timelines.forEach(ie=>{ie.stretchStartingKeyframe=!0,this.disabledNodes.has(ie.element)||pt.push(ie)}),je.timelines=pt,i.append(se,je.timelines);let K={instruction:je,player:q,element:se};o.push(K),je.queriedElements.forEach(ie=>ti(a,ie,[]).push(q)),je.preStyleProps.forEach((ie,ne)=>{if(ie.size){let Ie=c.get(ne);Ie||c.set(ne,Ie=new Set),ie.forEach((Ge,Le)=>Ie.add(Le))}}),je.postStyleProps.forEach((ie,ne)=>{let Ie=l.get(ne);Ie||l.set(ne,Ie=new Set),ie.forEach((Ge,Le)=>Ie.add(Le))})});if(w.length){let L=[];w.forEach(N=>{L.push(Hb(N.triggerName,N.errors))}),T.forEach(N=>N.destroy()),this.reportError(L)}let I=new Map,_=new Map;o.forEach(L=>{let N=L.element;i.has(N)&&(_.set(N,N),this._beforeAnimationBuild(L.player.namespaceId,L.instruction,I))}),r.forEach(L=>{let N=L.element;this._getPreviousPlayers(N,!1,L.namespaceId,L.triggerName,null).forEach(q=>{ti(I,N,[]).push(q),q.destroy()})});let E=m.filter(L=>ix(L,c,l)),A=new Map;tx(A,this.driver,M,l,or).forEach(L=>{ix(L,c,l)&&E.push(L)});let O=new Map;h.forEach((L,N)=>{tx(O,this.driver,new Set(L),c,Jl)}),E.forEach(L=>{let N=A.get(L),B=O.get(L);A.set(L,new Map([...N?.entries()??[],...B?.entries()??[]]))});let X=[],ee=[],U={};o.forEach(L=>{let{element:N,player:B,instruction:q}=L;if(i.has(N)){if(u.has(N)){B.onDestroy(()=>ar(N,q.toStyles)),B.disabled=!0,B.overrideTotalTime(q.totalTime),r.push(B);return}let se=U;if(_.size>1){let me=N,nt=[];for(;me=me.parentNode;){let je=_.get(me);if(je){se=je;break}nt.push(me)}nt.forEach(je=>_.set(je,se))}let fe=this._buildAnimation(B.namespaceId,q,I,s,O,A);if(B.setRealPlayer(fe),se===U)X.push(B);else{let me=this.playersByElement.get(se);me&&me.length&&(B.parentPlayer=vs(me)),r.push(B)}}else lo(N,q.fromStyles),B.onDestroy(()=>ar(N,q.toStyles)),ee.push(B),u.has(N)&&r.push(B)}),ee.forEach(L=>{let N=s.get(L.element);if(N&&N.length){let B=vs(N);L.setRealPlayer(B)}}),r.forEach(L=>{L.parentPlayer?L.syncPlayerEvents(L.parentPlayer):L.destroy()});for(let L=0;L<m.length;L++){let N=m[L],B=N[cr];if(B1(N,qf),B&&B.hasAnimation)continue;let q=[];if(a.size){let fe=a.get(N);fe&&fe.length&&q.push(...fe);let me=this.driver.query(N,Xf,!0);for(let nt=0;nt<me.length;nt++){let je=a.get(me[nt]);je&&je.length&&q.push(...je)}}let se=q.filter(fe=>!fe.destroyed);se.length?iF(this,N,se):this.processLeaveNode(N)}return m.length=0,X.forEach(L=>{this.players.push(L),L.onDone(()=>{L.destroy();let N=this.players.indexOf(L);this.players.splice(N,1)}),L.play()}),X}afterFlush(e){this._flushFns.push(e)}afterFlushAnimationsDone(e){this._whenQuietFns.push(e)}_getPreviousPlayers(e,t,i,r,s){let o=[];if(t){let a=this.playersByQueriedElement.get(e);a&&(o=a)}else{let a=this.playersByElement.get(e);if(a){let c=!s||s==n2;a.forEach(l=>{l.queued||!c&&l.triggerName!=r||o.push(l)})}}return(i||r)&&(o=o.filter(a=>!(i&&i!=a.namespaceId||r&&r!=a.triggerName))),o}_beforeAnimationBuild(e,t,i){let r=t.triggerName,s=t.element,o=t.isRemovalTransition?void 0:e,a=t.isRemovalTransition?void 0:r;for(let c of t.timelines){let l=c.element,u=l!==s,d=ti(i,l,[]);this._getPreviousPlayers(l,u,o,a,t.toState).forEach(h=>{let p=h.getRealPlayer();p.beforeDestroy&&p.beforeDestroy(),h.destroy(),d.push(h)})}lo(s,t.fromStyles)}_buildAnimation(e,t,i,r,s,o){let a=t.triggerName,c=t.element,l=[],u=new Set,d=new Set,f=t.timelines.map(p=>{let y=p.element;u.add(y);let m=y[cr];if(m&&m.removedBeforeQueried)return new gs(p.duration,p.delay);let g=y!==c,M=rF((i.get(y)||Jk).map(I=>I.getRealPlayer())).filter(I=>{let _=I;return _.element?_.element===y:!1}),S=s.get(y),x=o.get(y),T=N6(this._normalizer,p.keyframes,S,x),w=this._buildPlayer(p,T,M);if(p.subTimeline&&r&&d.add(y),g){let I=new s2(e,a,y);I.setRealPlayer(w),l.push(I)}return w});l.forEach(p=>{ti(this.playersByQueriedElement,p.element,[]).push(p),p.onDone(()=>eF(this.playersByQueriedElement,p.element,p))}),u.forEach(p=>Pi(p,k6));let h=vs(f);return h.onDestroy(()=>{u.forEach(p=>B1(p,k6)),ar(c,t.toStyles)}),d.forEach(p=>{ti(r,p,[]).push(h)}),h}_buildPlayer(e,t,i){return t.length>0?this.driver.animate(e.element,t,e.duration,e.delay,e.easing,i):new gs(e.duration,e.delay)}},s2=class{namespaceId;triggerName;element;_player=new gs;_containsRealPlayer=!1;_queuedCallbacks=new Map;destroyed=!1;parentPlayer=null;markedForDestroy=!1;disabled=!1;queued=!0;totalTime=0;constructor(e,t,i){this.namespaceId=e,this.triggerName=t,this.element=i}setRealPlayer(e){this._containsRealPlayer||(this._player=e,this._queuedCallbacks.forEach((t,i)=>{t.forEach(r=>jf(e,i,void 0,r))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(e.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(e){this.totalTime=e}syncPlayerEvents(e){let t=this._player;t.triggerCallback&&e.onStart(()=>t.triggerCallback("start")),e.onDone(()=>this.finish()),e.onDestroy(()=>this.destroy())}_queueEvent(e,t){ti(this._queuedCallbacks,e,[]).push(t)}onDone(e){this.queued&&this._queueEvent("done",e),this._player.onDone(e)}onStart(e){this.queued&&this._queueEvent("start",e),this._player.onStart(e)}onDestroy(e){this.queued&&this._queueEvent("destroy",e),this._player.onDestroy(e)}init(){this._player.init()}hasStarted(){return this.queued?!1:this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(e){this.queued||this._player.setPosition(e)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(e){let t=this._player;t.triggerCallback&&t.triggerCallback(e)}};function eF(n,e,t){let i=n.get(e);if(i){if(i.length){let r=i.indexOf(t);i.splice(r,1)}i.length==0&&n.delete(e)}return i}function tF(n){return n??null}function Qf(n){return n&&n.nodeType===1}function nF(n){return n=="start"||n=="done"}function ex(n,e){let t=n.style.display;return n.style.display=e??"none",t}function tx(n,e,t,i,r){let s=[];t.forEach(c=>s.push(ex(c)));let o=[];i.forEach((c,l)=>{let u=new Map;c.forEach(d=>{let f=e.computeStyle(l,d,r);u.set(d,f),(!f||f.length==0)&&(l[cr]=Qk,o.push(l))}),n.set(l,u)});let a=0;return t.forEach(c=>ex(c,s[a++])),o}function nx(n,e){let t=new Map;if(n.forEach(a=>t.set(a,[])),e.length==0)return t;let i=1,r=new Set(e),s=new Map;function o(a){if(!a)return i;let c=s.get(a);if(c)return c;let l=a.parentNode;return t.has(l)?c=l:r.has(l)?c=i:c=o(l),s.set(a,c),c}return e.forEach(a=>{let c=o(a);c!==i&&t.get(c).push(a)}),t}function Pi(n,e){n.classList?.add(e)}function B1(n,e){n.classList?.remove(e)}function iF(n,e,t){vs(t).onDone(()=>n.processLeaveNode(e))}function rF(n){let e=[];return lx(n,e),e}function lx(n,e){for(let t=0;t<n.length;t++){let i=n[t];i instanceof k1?lx(i.players,e):e.push(i)}}function sF(n,e){let t=Object.keys(n),i=Object.keys(e);if(t.length!=i.length)return!1;for(let r=0;r<t.length;r++){let s=t[r];if(!e.hasOwnProperty(s)||n[s]!==e[s])return!1}return!0}function ix(n,e,t){let i=t.get(n);if(!i)return!1;let r=e.get(n);return r?i.forEach(s=>r.add(s)):e.set(n,i),t.delete(n),!0}var V1=class{_driver;_normalizer;_transitionEngine;_timelineEngine;_triggerCache={};onRemovalComplete=(e,t)=>{};constructor(e,t,i){this._driver=t,this._normalizer=i,this._transitionEngine=new Q6(e.body,t,i),this._timelineEngine=new K6(e.body,t,i),this._transitionEngine.onRemovalComplete=(r,s)=>this.onRemovalComplete(r,s)}registerTrigger(e,t,i,r,s){let o=e+"-"+r,a=this._triggerCache[o];if(!a){let c=[],l=[],u=sx(this._driver,s,c,l);if(c.length)throw Rb(r,c);a=Wk(r,u,this._normalizer),this._triggerCache[o]=a}this._transitionEngine.registerTrigger(t,r,a)}register(e,t){this._transitionEngine.register(e,t)}destroy(e,t){this._transitionEngine.destroy(e,t)}onInsert(e,t,i,r){this._transitionEngine.insertNode(e,t,i,r)}onRemove(e,t,i){this._transitionEngine.removeNode(e,t,i)}disableAnimations(e,t){this._transitionEngine.markElementAsDisabled(e,t)}process(e,t,i,r){if(i.charAt(0)=="@"){let[s,o]=R6(i),a=r;this._timelineEngine.command(s,t,o,a)}else this._transitionEngine.trigger(e,t,i,r)}listen(e,t,i,r,s){if(i.charAt(0)=="@"){let[o,a]=R6(i);return this._timelineEngine.listen(o,t,a,s)}return this._transitionEngine.listen(e,t,i,r,s)}flush(e=-1){this._transitionEngine.flush(e)}get players(){return[...this._transitionEngine.players,...this._timelineEngine.players]}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}afterFlushAnimationsDone(e){this._transitionEngine.afterFlushAnimationsDone(e)}};function oF(n,e){let t=null,i=null;return Array.isArray(e)&&e.length?(t=G6(e[0]),e.length>1&&(i=G6(e[e.length-1]))):e instanceof Map&&(t=G6(e)),t||i?new aF(n,t,i):null}var aF=(()=>{class n{_element;_startStyles;_endStyles;static initialStylesByElement=new WeakMap;_state=0;_initialStyles;constructor(t,i,r){this._element=t,this._startStyles=i,this._endStyles=r;let s=n.initialStylesByElement.get(t);s||n.initialStylesByElement.set(t,s=new Map),this._initialStyles=s}start(){this._state<1&&(this._startStyles&&ar(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(ar(this._element,this._initialStyles),this._endStyles&&(ar(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(n.initialStylesByElement.delete(this._element),this._startStyles&&(lo(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(lo(this._element,this._endStyles),this._endStyles=null),ar(this._element,this._initialStyles),this._state=3)}}return n})();function G6(n){let e=null;return n.forEach((t,i)=>{cF(i)&&(e=e||new Map,e.set(i,t))}),e}function cF(n){return n==="display"||n==="position"}var o0=class{element;keyframes;options;_specialStyles;_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_duration;_delay;_initialized=!1;_finished=!1;_started=!1;_destroyed=!1;_finalKeyframe;_originalOnDoneFns=[];_originalOnStartFns=[];domPlayer=null;time=0;parentPlayer=null;currentSnapshot=new Map;constructor(e,t,i,r){this.element=e,this.keyframes=t,this.options=i,this._specialStyles=r,this._duration=i.duration,this._delay=i.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this._buildPlayer()&&this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return this.domPlayer;this._initialized=!0;let e=this.keyframes,t=this._triggerWebAnimation(this.element,e,this.options);if(!t)return this._onFinish(),null;this.domPlayer=t,this._finalKeyframe=e.length?e[e.length-1]:new Map;let i=()=>this._onFinish();return t.addEventListener("finish",i),this.onDestroy(()=>{t.removeEventListener("finish",i)}),t}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer?.pause()}_convertKeyframesToObject(e){let t=[];return e.forEach(i=>{t.push(Object.fromEntries(i))}),t}_triggerWebAnimation(e,t,i){let r=this._convertKeyframesToObject(t);try{return e.animate(r,i)}catch(s){return null}}onStart(e){this._originalOnStartFns.push(e),this._onStartFns.push(e)}onDone(e){this._originalOnDoneFns.push(e),this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}play(){let e=this._buildPlayer();e&&(this.hasStarted()||(this._onStartFns.forEach(t=>t()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),e.play())}pause(){this.init(),this.domPlayer?.pause()}finish(){this.init(),this.domPlayer&&(this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish())}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer?.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}setPosition(e){this.domPlayer||this.init(),this.domPlayer&&(this.domPlayer.currentTime=e*this.time)}getPosition(){return this.domPlayer?+(this.domPlayer.currentTime??0)/this.time:this._initialized?1:0}get totalTime(){return this._delay+this._duration}beforeDestroy(){let e=new Map;this.hasStarted()&&this._finalKeyframe.forEach((i,r)=>{r!=="offset"&&e.set(r,this._finished?i:Zf(this.element,r))}),this.currentSnapshot=e}triggerCallback(e){let t=e==="start"?this._onStartFns:this._onDoneFns;t.forEach(i=>i()),t.length=0}},a0=class{validateStyleProperty(e){return!0}validateAnimatableStyleProperty(e){return!0}containsElement(e,t){return P6(e,t)}getParentElement(e){return $f(e)}query(e,t,i){return L6(e,t,i)}computeStyle(e,t,i){return Zf(e,t)}animate(e,t,i,r,s,o=[]){let a=r==0?"both":"forwards",c={duration:i,delay:r,fill:a};s&&(c.easing=s);let l=new Map,u=o.filter(h=>h instanceof o0);$b(i,r)&&u.forEach(h=>{h.currentSnapshot.forEach((p,y)=>l.set(y,p))});let d=jb(t).map(h=>new Map(h));d=qb(e,d,l);let f=oF(e,d);return new o0(e,d,c,f)}};var e0="@",ux="@.disabled",c0=class{namespaceId;delegate;engine;_onDestroy;\u0275type=0;constructor(e,t,i,r){this.namespaceId=e,this.delegate=t,this.engine=i,this._onDestroy=r}get data(){return this.delegate.data}destroyNode(e){this.delegate.destroyNode?.(e)}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.engine.afterFlushAnimationsDone(()=>{queueMicrotask(()=>{this.delegate.destroy()})}),this._onDestroy?.()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}appendChild(e,t){this.delegate.appendChild(e,t),this.engine.onInsert(this.namespaceId,t,e,!1)}insertBefore(e,t,i,r=!0){this.delegate.insertBefore(e,t,i),this.engine.onInsert(this.namespaceId,t,e,r)}removeChild(e,t,i,r){if(r){this.delegate.removeChild(e,t,i,r);return}this.parentNode(t)&&this.engine.onRemove(this.namespaceId,t,this.delegate)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,i,r){this.delegate.setAttribute(e,t,i,r)}removeAttribute(e,t,i){this.delegate.removeAttribute(e,t,i)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,i,r){this.delegate.setStyle(e,t,i,r)}removeStyle(e,t,i){this.delegate.removeStyle(e,t,i)}setProperty(e,t,i){t.charAt(0)==e0&&t==ux?this.disableAnimations(e,!!i):this.delegate.setProperty(e,t,i)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,i,r){return this.delegate.listen(e,t,i,r)}disableAnimations(e,t){this.engine.disableAnimations(e,t)}},e8=class extends c0{factory;constructor(e,t,i,r,s){super(t,i,r,s),this.factory=e,this.namespaceId=t}setProperty(e,t,i){t.charAt(0)==e0?t.charAt(1)=="."&&t==ux?(i=i===void 0?!0:!!i,this.disableAnimations(e,i)):this.engine.process(this.namespaceId,e,t.slice(1),i):this.delegate.setProperty(e,t,i)}listen(e,t,i,r){if(t.charAt(0)==e0){let s=lF(e),o=t.slice(1),a="";return o.charAt(0)!=e0&&([o,a]=uF(o)),this.engine.listen(this.namespaceId,s,o,a,c=>{let l=c._data||-1;this.factory.scheduleListenerCallback(l,i,c)})}return this.delegate.listen(e,t,i,r)}};function lF(n){switch(n){case"body":return document.body;case"document":return document;case"window":return window;default:return n}}function uF(n){let e=n.indexOf("."),t=n.substring(0,e),i=n.slice(e+1);return[t,i]}var l0=class{delegate;engine;_zone;_currentId=0;_microtaskId=1;_animationCallbacksBuffer=[];_rendererCache=new Map;_cdRecurDepth=0;constructor(e,t,i){this.delegate=e,this.engine=t,this._zone=i,t.onRemovalComplete=(r,s)=>{s?.removeChild(null,r)}}createRenderer(e,t){let r=this.delegate.createRenderer(e,t);if(!e||!t?.data?.animation){let l=this._rendererCache,u=l.get(r);if(!u){let d=()=>l.delete(r);u=new c0("",r,this.engine,d),l.set(r,u)}return u}let s=t.id,o=t.id+"-"+this._currentId;this._currentId++,this.engine.register(o,e);let a=l=>{Array.isArray(l)?l.forEach(a):this.engine.registerTrigger(s,o,e,l.name,l)};return t.data.animation.forEach(a),new e8(this,o,r,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){queueMicrotask(()=>{this._microtaskId++})}scheduleListenerCallback(e,t,i){if(e>=0&&e<this._microtaskId){this._zone.run(()=>t(i));return}let r=this._animationCallbacksBuffer;r.length==0&&queueMicrotask(()=>{this._zone.run(()=>{r.forEach(s=>{let[o,a]=s;o(a)}),this._animationCallbacksBuffer=[]})}),r.push([t,i])}end(){this._cdRecurDepth--,this._cdRecurDepth==0&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}componentReplaced(e){this.engine.flush(),this.delegate.componentReplaced?.(e)}};var fF=(()=>{class n extends V1{constructor(t,i,r){super(t,i,r)}ngOnDestroy(){this.flush()}static \u0275fac=function(i){return new(i||n)(Xe(Vt),Xe(fa),Xe(ha))};static \u0275prov=et({token:n,factory:n.\u0275fac})}return n})();function hF(){return new t0}function pF(){return new l0(Y(Gc),Y(V1),Y(Bt))}var dx=[{provide:ha,useFactory:hF},{provide:V1,useClass:fF},{provide:Kr,useFactory:pF}],$1e=[{provide:fa,useClass:t8},{provide:wu,useValue:"NoopAnimations"},...dx],mF=[{provide:fa,useFactory:()=>new a0},{provide:wu,useFactory:()=>"BrowserAnimations"},...dx];function fx(){return Zi("NgEagerAnimations"),[...mF]}var i8={providers:[ip(pb),fx()]};var gF=["canvas"],vF=["cursorCanvas"],hx=(()=>{class n{constructor(){this.platformId=Y(ji),this.ctx=null,this.cursorCtx=null,this.nodes=[],this.mouse={x:-1e3,y:-1e3},this.smoothMouse={x:-1e3,y:-1e3},this.rafId=0,this.running=!1,this.resizeObserver=null,this.cursorClass="has-particle-cursor",this.onMouseMove=t=>{this.mouse.x=t.clientX,this.mouse.y=t.clientY},this.onMouseLeave=()=>{this.mouse.x=-1e3,this.mouse.y=-1e3},this.onVisibilityChange=()=>{document.hidden?this.stop():this.start()},this.loop=()=>{this.running&&(this.simulate(),this.drawBackground(),this.drawCursor(),this.rafId=requestAnimationFrame(this.loop))}}ngOnInit(){if(!t1(this.platformId)||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let t=this.canvasRef.nativeElement,i=this.cursorCanvasRef.nativeElement;this.ctx=t.getContext("2d"),this.cursorCtx=i.getContext("2d"),this.initNodes(),this.resize(),document.documentElement.classList.add(this.cursorClass),window.addEventListener("mousemove",this.onMouseMove),document.documentElement.addEventListener("mouseleave",this.onMouseLeave),document.addEventListener("visibilitychange",this.onVisibilityChange),this.resizeObserver=new ResizeObserver(()=>{this.resize(),this.initNodes()}),this.resizeObserver.observe(document.body),this.start()}ngOnDestroy(){this.stop(),document.documentElement.classList.remove(this.cursorClass),window.removeEventListener("mousemove",this.onMouseMove),document.documentElement.removeEventListener("mouseleave",this.onMouseLeave),document.removeEventListener("visibilitychange",this.onVisibilityChange),this.resizeObserver?.disconnect()}start(){this.running||(this.running=!0,this.loop())}stop(){this.running=!1,cancelAnimationFrame(this.rafId)}initNodes(){let t=window.innerWidth<768?55:85,i=window.innerWidth,r=window.innerHeight;this.nodes=Array.from({length:t},()=>({x:Math.random()*i,y:Math.random()*r,vx:(Math.random()-.5)*.18,vy:(Math.random()-.5)*.18,radius:Math.random()*1.4+.8}))}resize(){let t=Math.min(window.devicePixelRatio,2),i=window.innerWidth,r=window.innerHeight;for(let s of[this.canvasRef.nativeElement,this.cursorCanvasRef.nativeElement])s.width=i*t,s.height=r*t,s.style.width=`${i}px`,s.style.height=`${r}px`;this.ctx?.setTransform(t,0,0,t,0,0),this.cursorCtx?.setTransform(t,0,0,t,0,0)}simulate(){let t=window.innerWidth,i=window.innerHeight;this.smoothMouse.x+=(this.mouse.x-this.smoothMouse.x)*.18,this.smoothMouse.y+=(this.mouse.y-this.smoothMouse.y)*.18;for(let r of this.nodes){let s=this.smoothMouse.x-r.x,o=this.smoothMouse.y-r.y,a=Math.sqrt(s*s+o*o);if(a<220&&a>0){let c=(1-a/220)*.022;r.vx+=s/a*c,r.vy+=o/a*c}r.x+=r.vx,r.y+=r.vy,r.vx*=.97,r.vy*=.97,(r.x<0||r.x>t)&&(r.vx*=-1),(r.y<0||r.y>i)&&(r.vy*=-1),r.x=Math.max(0,Math.min(t,r.x)),r.y=Math.max(0,Math.min(i,r.y))}}drawBackground(){let t=this.ctx;if(!t)return;let i=window.innerWidth,r=window.innerHeight,s=document.documentElement.dataset.theme!=="light",o=s?"0, 240, 255":"8, 145, 178",a=s?"rgba(0, 240, 255, 0.7)":"rgba(8, 145, 178, 0.82)",c=s?"0, 240, 255":"8, 145, 178",l=s?"#0a0e17":"#f7f9fc",u=s?1:1.35;t.fillStyle=l,t.fillRect(0,0,i,r);let d=145,f=this.isMouseNear();for(let h=0;h<this.nodes.length;h++)for(let p=h+1;p<this.nodes.length;p++){let y=this.nodes[h],m=this.nodes[p],g=y.x-m.x,M=y.y-m.y,S=Math.sqrt(g*g+M*M);if(S<d){let x=(1-S/d)*.32*u;if(f){let T=(y.x+m.x)/2,w=(y.y+m.y)/2,I=this.smoothMouse.x-T,_=this.smoothMouse.y-w,E=Math.sqrt(I*I+_*_);E<200&&(x+=(1-E/200)*.35*u)}t.beginPath(),t.moveTo(y.x,y.y),t.lineTo(m.x,m.y),t.strokeStyle=`rgba(${o}, ${Math.min(x,s?.75:.9)})`,t.lineWidth=.75,t.stroke()}}if(f)for(let p of this.nodes){let y=this.smoothMouse.x-p.x,m=this.smoothMouse.y-p.y,g=Math.sqrt(y*y+m*m);if(g<200){let M=(1-g/200)*.55*u;t.beginPath(),t.moveTo(this.smoothMouse.x,this.smoothMouse.y),t.lineTo(p.x,p.y),t.strokeStyle=`rgba(${c}, ${M})`,t.lineWidth=.9,t.stroke()}}for(let h of this.nodes){let p=h.radius;if(f){let y=this.smoothMouse.x-h.x,m=this.smoothMouse.y-h.y,g=Math.sqrt(y*y+m*m);g<140&&(p+=(1-g/140)*2)}t.beginPath(),t.arc(h.x,h.y,p,0,Math.PI*2),t.fillStyle=a,t.fill()}}drawCursor(){let t=this.cursorCtx;if(!t)return;let i=window.innerWidth,r=window.innerHeight;if(t.clearRect(0,0,i,r),!this.isMouseNear())return;let s=document.documentElement.dataset.theme!=="light",o=s?"0, 240, 255":"8, 145, 178",a=18,c=s?1:1.2,l=t.createRadialGradient(this.smoothMouse.x,this.smoothMouse.y,0,this.smoothMouse.x,this.smoothMouse.y,a);l.addColorStop(0,`rgba(${o}, ${.35*c})`),l.addColorStop(.4,`rgba(${o}, ${.12*c})`),l.addColorStop(1,`rgba(${o}, 0)`),t.beginPath(),t.arc(this.smoothMouse.x,this.smoothMouse.y,a,0,Math.PI*2),t.fillStyle=l,t.fill(),t.beginPath(),t.arc(this.smoothMouse.x,this.smoothMouse.y,4,0,Math.PI*2),t.fillStyle=s?"rgba(0, 240, 255, 0.9)":"rgba(8, 145, 178, 0.92)",t.fill(),t.beginPath(),t.arc(this.smoothMouse.x,this.smoothMouse.y,1.5,0,Math.PI*2),t.fillStyle=s?"#fff":"#ffffff",t.fill()}isMouseNear(){let t=window.innerWidth,i=window.innerHeight;return this.smoothMouse.x>=0&&this.smoothMouse.x<=t&&this.smoothMouse.y>=0&&this.smoothMouse.y<=i}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=kt({type:n,selectors:[["app-particle-background"]],viewQuery:function(i,r){if(i&1&&Za(gF,7)(vF,7),i&2){let s;Ka(s=Ja())&&(r.canvasRef=s.first),Ka(s=Ja())&&(r.cursorCanvasRef=s.first)}},decls:4,vars:0,consts:[["canvas",""],["cursorCanvas",""],["aria-hidden","true",1,"particle-canvas"],["aria-hidden","true",1,"particle-cursor"]],template:function(i,r){i&1&&Ft(0,"canvas",2,0)(2,"canvas",3,1)},styles:["[_nghost-%COMP%]{display:contents}.particle-canvas[_ngcontent-%COMP%], .particle-cursor[_ngcontent-%COMP%]{position:fixed;inset:0;width:100%;height:100%;pointer-events:none}.particle-canvas[_ngcontent-%COMP%]{z-index:0}.particle-cursor[_ngcontent-%COMP%]{z-index:10001}@media print{.particle-canvas[_ngcontent-%COMP%], .particle-cursor[_ngcontent-%COMP%]{display:none!important}}"]})}}return n})();var u0=(()=>{class n{constructor(){this.platformId=Y(ji)}init(){}scrollTo(t){t1(this.platformId)&&typeof t=="string"&&document.querySelector(t)?.scrollIntoView({behavior:"smooth"})}ngOnDestroy(){}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=et({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var px=(n,e)=>e.href;function yF(n,e){if(n&1){let t=Cr();re(0,"a",13),Jn("click",function(r){let s=Bi(t).$implicit,o=cn();return Vi(o.navigate(r,s.href))}),Q(1),ce()}if(n&2){let t=e.$implicit;jo("href",t.href,Xa),ae(),Ye(t.label)}}function _F(n,e){n&1&&(Vo(),re(0,"svg",10),Ft(1,"path",14),ce())}function bF(n,e){n&1&&(Vo(),re(0,"svg",10),Ft(1,"path",15),ce())}function xF(n,e){if(n&1){let t=Cr();re(0,"a",13),Jn("click",function(r){let s=Bi(t).$implicit,o=cn(2);return Vi(o.navigate(r,s.href))}),Q(1),ce()}if(n&2){let t=e.$implicit;jo("href",t.href,Xa),ae(),Ye(t.label)}}function MF(n,e){if(n&1&&(re(0,"nav",12),It(1,xF,2,2,"a",5,px),ce()),n&2){let t=cn();ae(),At(t.links)}}var mx=(()=>{class n{constructor(){this.theme=Y(Gf),this.lenis=Y(u0),this.menuOpen=Gi(!1),this.links=[{label:"About",href:"#about"},{label:"Experience",href:"#experience"},{label:"Projects",href:"#projects"},{label:"Skills",href:"#skills"},{label:"Contact",href:"#contact"}]}navigate(t,i){t.preventDefault(),this.menuOpen.set(!1),this.lenis.scrollTo(i)}toggleMenu(){this.menuOpen.update(t=>!t)}toggleTheme(){this.theme.toggle()}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=kt({type:n,selectors:[["app-cyber-nav"]],decls:20,vars:7,consts:[[1,"cyber-nav"],["href","#top","aria-label","Back to top",1,"cyber-nav__brand"],[1,"cyber-nav__mark"],[1,"cyber-nav__name"],["aria-label","Main navigation",1,"cyber-nav__links"],[3,"href"],[1,"cyber-nav__actions"],["type","button","aria-label","Toggle navigation menu",1,"cyber-nav__menu",3,"click"],["aria-hidden","true",1,"cyber-nav__menu-bar"],["type","button",1,"cyber-nav__theme",3,"click"],["viewBox","0 0 24 24","aria-hidden","true"],["href","#contact",1,"cyber-nav__cta",3,"click"],["aria-label","Mobile navigation",1,"cyber-nav__mobile"],[3,"click","href"],["d","M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"],["d","M20.5 14.4A8.5 8.5 0 0 1 9.6 3.5 8.5 8.5 0 1 0 20.5 14.4Z"]],template:function(i,r){i&1&&(re(0,"header",0)(1,"a",1)(2,"span",2),Q(3,"RB"),ce(),re(4,"span",3),Q(5,"R\xE9my Binsztock"),ce()(),re(6,"nav",4),It(7,yF,2,2,"a",5,px),ce(),re(9,"div",6)(10,"button",7),Jn("click",function(){return r.toggleMenu()}),Ft(11,"span",8)(12,"span",8)(13,"span",8),ce(),re(14,"button",9),Jn("click",function(){return r.toggleTheme()}),Er(15,_F,2,0,":svg:svg",10)(16,bF,2,0,":svg:svg",10),ce(),re(17,"a",11),Jn("click",function(o){return r.navigate(o,"#contact")}),Q(18,"Let's connect"),ce()(),Er(19,MF,3,0,"nav",12),ce()),i&2&&(Ii("cyber-nav--open",r.menuOpen()),ae(7),At(r.links),ae(3),ci("aria-expanded",r.menuOpen()),ae(4),ci("aria-pressed",r.theme.isDark())("aria-label",r.theme.isDark()?"Switch to light theme":"Switch to dark theme"),ae(),wr(r.theme.isDark()?15:16),ae(4),wr(r.menuOpen()?19:-1))},styles:['.cyber-nav[_ngcontent-%COMP%]{position:fixed;top:1rem;left:var(--page-pad);right:var(--page-pad);z-index:100;display:flex;flex-wrap:wrap;align-items:center;gap:1rem;width:auto;padding:.65rem 1rem .65rem 1.25rem;border:1px solid var(--border-glow);border-radius:999px;background:color-mix(in srgb,var(--surface) 82%,transparent);-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);box-shadow:0 4px 24px color-mix(in srgb,var(--bg-deep) 60%,transparent),0 0 30px color-mix(in srgb,var(--accent) 6%,transparent);transition:border-radius .3s,padding .3s}.cyber-nav--open[_ngcontent-%COMP%]{border-radius:20px;padding-bottom:.5rem}.cyber-nav__brand[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.6rem;color:var(--ink);font-weight:700;font-size:.85rem;white-space:nowrap}.cyber-nav__mark[_ngcontent-%COMP%]{display:grid;place-items:center;width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,var(--accent),var(--accent-secondary));color:var(--bg-deep);font-family:var(--font-mono);font-size:.65rem;font-weight:700;box-shadow:0 0 16px color-mix(in srgb,var(--accent) 40%,transparent)}.cyber-nav__links[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1.25rem;margin-left:auto}.cyber-nav__links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{position:relative;color:var(--muted);font-size:.78rem;font-weight:600;transition:color .2s ease}.cyber-nav__links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:-4px;left:0;width:0;height:1px;background:var(--accent);transition:width .25s ease}.cyber-nav__links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--accent)}.cyber-nav__links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after{width:100%}.cyber-nav__actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.cyber-nav__menu[_ngcontent-%COMP%]{display:none;flex-direction:column;justify-content:center;gap:5px;width:34px;height:34px;padding:0;border:1px solid var(--line);border-radius:50%;background:transparent;cursor:pointer}.cyber-nav__menu-bar[_ngcontent-%COMP%]{display:block;width:14px;height:1.5px;margin:0 auto;border-radius:1px;background:var(--ink-soft);transition:transform .25s,opacity .25s}.cyber-nav--open[_ngcontent-%COMP%]   .cyber-nav__menu-bar[_ngcontent-%COMP%]:nth-child(1){transform:translateY(6.5px) rotate(45deg)}.cyber-nav--open[_ngcontent-%COMP%]   .cyber-nav__menu-bar[_ngcontent-%COMP%]:nth-child(2){opacity:0}.cyber-nav--open[_ngcontent-%COMP%]   .cyber-nav__menu-bar[_ngcontent-%COMP%]:nth-child(3){transform:translateY(-6.5px) rotate(-45deg)}.cyber-nav__theme[_ngcontent-%COMP%]{display:grid;place-items:center;width:34px;height:34px;padding:0;border:1px solid var(--line);border-radius:50%;background:transparent;color:var(--muted);cursor:pointer;transition:border-color .2s,color .2s,box-shadow .2s}.cyber-nav__theme[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}.cyber-nav__theme[_ngcontent-%COMP%]:hover{border-color:var(--accent);color:var(--accent);box-shadow:0 0 12px color-mix(in srgb,var(--accent) 25%,transparent)}.cyber-nav__cta[_ngcontent-%COMP%]{padding:.5rem 1rem;border-radius:999px;background:linear-gradient(135deg,var(--accent),var(--accent-secondary));color:var(--btn-primary-text)!important;font-size:.75rem;font-weight:700;transition:transform .2s,box-shadow .2s}.cyber-nav__cta[_ngcontent-%COMP%]:hover{transform:translateY(-1px);box-shadow:0 0 20px color-mix(in srgb,var(--accent) 45%,transparent);color:var(--btn-primary-text)!important}.cyber-nav__mobile[_ngcontent-%COMP%]{display:none;flex-direction:column;gap:.25rem;width:100%;padding:.5rem .25rem .75rem;border-top:1px solid var(--line)}.cyber-nav__mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:.65rem .75rem;border-radius:8px;color:var(--ink-soft);font-size:.85rem;font-weight:600;transition:background .2s,color .2s}.cyber-nav__mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:var(--accent-soft);color:var(--accent)}@media(max-width:860px){.cyber-nav__links[_ngcontent-%COMP%]{display:none}.cyber-nav__menu[_ngcontent-%COMP%], .cyber-nav__mobile[_ngcontent-%COMP%]{display:flex}.cyber-nav__name[_ngcontent-%COMP%]{display:none}}@media(max-width:420px){.cyber-nav__cta[_ngcontent-%COMP%]{display:none}}']})}}return n})();function l8(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=Array(e);t<e;t++)i[t]=n[t];return i}function SF(n){if(Array.isArray(n))return n}function EF(n){if(Array.isArray(n))return l8(n)}function wF(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function gx(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,Xx(i.key),i)}}function CF(n,e,t){return e&&gx(n.prototype,e),t&&gx(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function m0(n,e){var t=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=E8(n))||e&&n&&typeof n.length=="number"){t&&(n=t);var i=0,r=function(){};return{s:r,n:function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}},e:function(c){throw c},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s,o=!0,a=!1;return{s:function(){t=t.call(n)},n:function(){var c=t.next();return o=c.done,c},e:function(c){a=!0,s=c},f:function(){try{o||t.return==null||t.return()}finally{if(a)throw s}}}}function ke(n,e,t){return(e=Xx(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function TF(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function IF(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,s,o,a=[],c=!0,l=!1;try{if(s=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(i=s.call(t)).done)&&(a.push(i.value),a.length!==e);c=!0);}catch(u){l=!0,r=u}finally{try{if(!c&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(l)throw r}}return a}}function AF(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function DF(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vx(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function le(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?vx(Object(t),!0).forEach(function(i){ke(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):vx(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function x0(n,e){return SF(n)||IF(n,e)||E8(n,e)||AF()}function ur(n){return EF(n)||TF(n)||E8(n)||DF()}function NF(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Xx(n){var e=NF(n,"string");return typeof e=="symbol"?e:e+""}function y0(n){"@babel/helpers - typeof";return y0=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y0(n)}function E8(n,e){if(n){if(typeof n=="string")return l8(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?l8(n,e):void 0}}var yx=function(){},w8={},Yx={},Zx=null,Kx={mark:yx,measure:yx};try{typeof window<"u"&&(w8=window),typeof document<"u"&&(Yx=document),typeof MutationObserver<"u"&&(Zx=MutationObserver),typeof performance<"u"&&(Kx=performance)}catch(n){}var RF=w8.navigator||{},_x=RF.userAgent,bx=_x===void 0?"":_x,fo=w8,Ut=Yx,xx=Zx,d0=Kx,fce=!!fo.document,bs=!!Ut.documentElement&&!!Ut.head&&typeof Ut.addEventListener=="function"&&typeof Ut.createElement=="function",Jx=~bx.indexOf("MSIE")||~bx.indexOf("Trident/"),f0,PF=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,LF=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,Qx={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},"slab-duo":{"fa-regular":"regular",fasldr:"regular"},"slab-press-duo":{"fa-regular":"regular",faslpdr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},vellum:{"fa-solid":"solid",favs:"solid"},pixel:{"fa-regular":"regular",fapr:"regular"},mosaic:{"fa-solid":"solid",fams:"solid"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},zF={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},eM=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],Dn="classic",u2="duotone",tM="sharp",nM="sharp-duotone",iM="chisel",rM="etch",sM="graphite",oM="jelly",aM="jelly-duo",cM="jelly-fill",lM="mosaic",uM="notdog",dM="notdog-duo",fM="pixel",hM="slab",pM="slab-duo",mM="slab-press",gM="slab-press-duo",vM="thumbprint",yM="utility",_M="utility-duo",bM="utility-fill",xM="vellum",MM="whiteboard",OF="Classic",kF="Duotone",FF="Sharp",UF="Sharp Duotone",BF="Chisel",VF="Etch",HF="Graphite",GF="Jelly",jF="Jelly Duo",WF="Jelly Fill",$F="Mosaic",qF="Notdog",XF="Notdog Duo",YF="Pixel",ZF="Slab",KF="Slab Duo",JF="Slab Press",QF="Slab Press Duo",eU="Thumbprint",tU="Utility",nU="Utility Duo",iU="Utility Fill",rU="Vellum",sU="Whiteboard",SM=[Dn,u2,tM,nM,iM,rM,sM,oM,aM,cM,lM,uM,dM,fM,hM,pM,mM,gM,vM,yM,_M,bM,xM,MM],hce=(f0={},ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(f0,Dn,OF),u2,kF),tM,FF),nM,UF),iM,BF),rM,VF),sM,HF),oM,GF),aM,jF),cM,WF),ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(f0,lM,$F),uM,qF),dM,XF),fM,YF),hM,ZF),pM,KF),mM,JF),gM,QF),vM,eU),yM,tU),ke(ke(ke(ke(f0,_M,nU),bM,iU),xM,rU),MM,sU)),oU={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},"slab-duo":{400:"fasldr"},"slab-press-duo":{400:"faslpdr"},vellum:{900:"favs"},mosaic:{900:"fams"},pixel:{400:"fapr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},aU={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Slab Duo":{400:"fasldr",normal:"fasldr"},"Font Awesome 7 Slab Press Duo":{400:"faslpdr",normal:"faslpdr"},"Font Awesome 7 Pixel":{400:"fapr",normal:"fapr"},"Font Awesome 7 Mosaic":{900:"fams",normal:"fams"},"Font Awesome 7 Vellum":{900:"favs",normal:"favs"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},cU=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["mosaic",{defaultShortPrefixId:"fams",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["pixel",{defaultShortPrefixId:"fapr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-duo",{defaultShortPrefixId:"fasldr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press-duo",{defaultShortPrefixId:"faslpdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["vellum",{defaultShortPrefixId:"favs",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),lU={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},mosaic:{solid:"fams"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},pixel:{regular:"fapr"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-duo":{regular:"fasldr"},"slab-press":{regular:"faslpr"},"slab-press-duo":{regular:"faslpdr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},vellum:{solid:"favs"},whiteboard:{semibold:"fawsb"}},EM=["fak","fa-kit","fakd","fa-kit-duotone"],Mx={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},uU=["kit"],dU="kit",fU="kit-duotone",hU="Kit",pU="Kit Duotone",pce=ke(ke({},dU,hU),fU,pU),mU={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},gU={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},vU={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Sx={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},h0,p0={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},yU=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],_U="classic",bU="duotone",xU="sharp",MU="sharp-duotone",SU="chisel",EU="etch",wU="graphite",CU="jelly",TU="jelly-duo",IU="jelly-fill",AU="mosaic",DU="notdog",NU="notdog-duo",RU="pixel",PU="slab",LU="slab-duo",zU="slab-press",OU="slab-press-duo",kU="thumbprint",FU="utility",UU="utility-duo",BU="utility-fill",VU="vellum",HU="whiteboard",GU="Classic",jU="Duotone",WU="Sharp",$U="Sharp Duotone",qU="Chisel",XU="Etch",YU="Graphite",ZU="Jelly",KU="Jelly Duo",JU="Jelly Fill",QU="Mosaic",eB="Notdog",tB="Notdog Duo",nB="Pixel",iB="Slab",rB="Slab Duo",sB="Slab Press",oB="Slab Press Duo",aB="Thumbprint",cB="Utility",lB="Utility Duo",uB="Utility Fill",dB="Vellum",fB="Whiteboard",mce=(h0={},ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(h0,_U,GU),bU,jU),xU,WU),MU,$U),SU,qU),EU,XU),wU,YU),CU,ZU),TU,KU),IU,JU),ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(h0,AU,QU),DU,eB),NU,tB),RU,nB),PU,iB),LU,rB),zU,sB),OU,oB),kU,aB),FU,cB),ke(ke(ke(ke(h0,UU,lB),BU,uB),VU,dB),HU,fB)),hB="kit",pB="kit-duotone",mB="Kit",gB="Kit Duotone",gce=ke(ke({},hB,mB),pB,gB),vB={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},"slab-duo":{"fa-regular":"fasldr"},"slab-press-duo":{"fa-regular":"faslpdr"},pixel:{"fa-regular":"fapr"},mosaic:{"fa-solid":"fams"},vellum:{"fa-solid":"favs"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},yB={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],"slab-duo":["fasldr"],"slab-press-duo":["faslpdr"],pixel:["fapr"],mosaic:["fams"],vellum:["favs"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},u8={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},"slab-duo":{fasldr:"fa-regular"},"slab-press-duo":{faslpdr:"fa-regular"},pixel:{fapr:"fa-regular"},mosaic:{fams:"fa-solid"},vellum:{favs:"fa-solid"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},_B=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],wM=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fasldr","faslpdr","fapr","fams","favs","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(yU,_B),bB=["solid","regular","light","thin","duotone","brands","semibold"],CM=[1,2,3,4,5,6,7,8,9,10],xB=CM.concat([11,12,13,14,15,16,17,18,19,20]),MB=["aw","fw","pull-left","pull-right"],SB=[].concat(ur(Object.keys(yB)),bB,MB,["2xs","xs","sm","lg","xl","2xl","beat","beat-fade","border","bounce","buzz","canvas-square","canvas-roomy","fade","flip-360","flip-both","flip-horizontal","flip-vertical","flip","float","inverse","jello","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","spin-snap","spin-snap-4","spin-snap-8","stack-1x","stack-2x","stack","swing","ul","wag","width-auto","width-fixed",p0.GROUP,p0.SWAP_OPACITY,p0.PRIMARY,p0.SECONDARY]).concat(CM.map(function(n){return"".concat(n,"x")})).concat(xB.map(function(n){return"w-".concat(n)})),EB={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},ys="___FONT_AWESOME___",d8=16,TM="fa",IM="svg-inline--fa",ma="data-fa-i2svg",f8="data-fa-pseudo-element",wB="data-fa-pseudo-element-pending",C8="data-prefix",T8="data-icon",Ex="fontawesome-i2svg",CB="async",TB=["HTML","HEAD","STYLE","SCRIPT"],AM=["::before","::after",":before",":after"],DM=(function(){try{return!0}catch(n){return!1}})();function d2(n){return new Proxy(n,{get:function(t,i){return i in t?t[i]:t[Dn]}})}var NM=le({},Qx);NM[Dn]=le(le(le(le({},{"fa-duotone":"duotone"}),Qx[Dn]),Mx.kit),Mx["kit-duotone"]);var IB=d2(NM),h8=le({},lU);h8[Dn]=le(le(le(le({},{duotone:"fad"}),h8[Dn]),Sx.kit),Sx["kit-duotone"]);var wx=d2(h8),p8=le({},u8);p8[Dn]=le(le({},p8[Dn]),vU.kit);var I8=d2(p8),m8=le({},vB);m8[Dn]=le(le({},m8[Dn]),mU.kit);var vce=d2(m8),AB=PF,RM="fa-layers-text",DB=LF,NB=le({},oU),yce=d2(NB),RB=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],r8=zF,PB=[].concat(ur(uU),ur(SB)),a2=fo.FontAwesomeConfig||{};function LB(n){var e=Ut.querySelector("script["+n+"]");if(e)return e.getAttribute(n)}function zB(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}Ut&&typeof Ut.querySelector=="function"&&(Cx=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],Cx.forEach(function(n){var e=x0(n,2),t=e[0],i=e[1],r=zB(LB(t));r!=null&&(a2[i]=r)}));var Cx,PM={styleDefault:"solid",familyDefault:Dn,cssPrefix:TM,replacementClass:IM,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};a2.familyPrefix&&(a2.cssPrefix=a2.familyPrefix);var j1=le(le({},PM),a2);j1.autoReplaceSvg||(j1.observeMutations=!1);var Pe={};Object.keys(PM).forEach(function(n){Object.defineProperty(Pe,n,{enumerable:!0,set:function(t){j1[n]=t,c2.forEach(function(i){return i(Pe)})},get:function(){return j1[n]}})});Object.defineProperty(Pe,"familyPrefix",{enumerable:!0,set:function(e){j1.cssPrefix=e,c2.forEach(function(t){return t(Pe)})},get:function(){return j1.cssPrefix}});fo.FontAwesomeConfig=Pe;var c2=[];function OB(n){return c2.push(n),function(){c2.splice(c2.indexOf(n),1)}}var uo=d8,Br={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function kB(n){if(!(!n||!bs)){var e=Ut.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=n;for(var t=Ut.head.childNodes,i=null,r=t.length-1;r>-1;r--){var s=t[r],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=s)}return Ut.head.insertBefore(e,i),n}}var FB="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Tx(){for(var n=12,e="";n-- >0;)e+=FB[Math.random()*62|0];return e}function W1(n){for(var e=[],t=(n||[]).length>>>0;t--;)e[t]=n[t];return e}function A8(n){return n.classList?W1(n.classList):(n.getAttribute("class")||"").split(" ").filter(function(e){return e})}function LM(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function UB(n){return Object.keys(n||{}).reduce(function(e,t){return e+"".concat(t,'="').concat(LM(n[t]),'" ')},"").trim()}function M0(n){return Object.keys(n||{}).reduce(function(e,t){return e+"".concat(t,": ").concat(n[t].trim(),";")},"")}function D8(n){return n.size!==Br.size||n.x!==Br.x||n.y!==Br.y||n.rotate!==Br.rotate||n.flipX||n.flipY}function BB(n){var e=n.transform,t=n.containerWidth,i=n.iconWidth,r={transform:"translate(".concat(t/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(s," ").concat(o," ").concat(a)},l={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:c,path:l}}function VB(n){var e=n.transform,t=n.width,i=t===void 0?d8:t,r=n.height,s=r===void 0?d8:r,o=n.startCentered,a=o===void 0?!1:o,c="";return a&&Jx?c+="translate(".concat(e.x/uo-i/2,"em, ").concat(e.y/uo-s/2,"em) "):a?c+="translate(calc(-50% + ".concat(e.x/uo,"em), calc(-50% + ").concat(e.y/uo,"em)) "):c+="translate(".concat(e.x/uo,"em, ").concat(e.y/uo,"em) "),c+="scale(".concat(e.size/uo*(e.flipX?-1:1),", ").concat(e.size/uo*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var HB=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function zM(){var n=TM,e=IM,t=Pe.cssPrefix,i=Pe.replacementClass,r=HB;if(t!==n||i!==e){var s=new RegExp("\\.".concat(n,"\\-"),"g"),o=new RegExp("\\--".concat(n,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(t,"-")).replace(o,"--".concat(t,"-")).replace(a,".".concat(i))}return r}var Ix=!1;function s8(){Pe.autoAddCss&&!Ix&&(kB(zM()),Ix=!0)}var GB={mixout:function(){return{dom:{css:zM,insertCss:s8}}},hooks:function(){return{beforeDOMElementCreation:function(){s8()},beforeI2svg:function(){s8()}}}},_s=fo||{};_s[ys]||(_s[ys]={});_s[ys].styles||(_s[ys].styles={});_s[ys].hooks||(_s[ys].hooks={});_s[ys].shims||(_s[ys].shims=[]);var lr=_s[ys],OM=[],kM=function(){Ut.removeEventListener("DOMContentLoaded",kM),_0=1,OM.map(function(e){return e()})},_0=!1;bs&&(_0=(Ut.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ut.readyState),_0||Ut.addEventListener("DOMContentLoaded",kM));function jB(n){bs&&(_0?setTimeout(n,0):OM.push(n))}function f2(n){var e=n.tag,t=n.attributes,i=t===void 0?{}:t,r=n.children,s=r===void 0?[]:r;return typeof n=="string"?LM(n):"<".concat(e," ").concat(UB(i),">").concat(s.map(f2).join(""),"</").concat(e,">")}function Ax(n,e,t){if(n&&n[e]&&n[e][t])return{prefix:e,iconName:t,icon:n[e][t]}}var WB=function(e,t){return function(i,r,s,o){return e.call(t,i,r,s,o)}},o8=function(e,t,i,r){var s=Object.keys(e),o=s.length,a=r!==void 0?WB(t,r):t,c,l,u;for(i===void 0?(c=1,u=e[s[0]]):(c=0,u=i);c<o;c++)l=s[c],u=a(u,e[l],l,e);return u};function FM(n){return ur(n).length!==1?null:n.codePointAt(0).toString(16)}function Dx(n){return Object.keys(n).reduce(function(e,t){var i=n[t],r=!!i.icon;return r?e[i.iconName]=i.icon:e[t]=i,e},{})}function g8(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=t.skipHooks,r=i===void 0?!1:i,s=Dx(e);typeof lr.hooks.addPack=="function"&&!r?lr.hooks.addPack(n,Dx(e)):lr.styles[n]=le(le({},lr.styles[n]||{}),s),n==="fas"&&g8("fa",e)}var l2=lr.styles,$B=lr.shims,UM=Object.keys(I8),qB=UM.reduce(function(n,e){return n[e]=Object.keys(I8[e]),n},{}),N8=null,BM={},VM={},HM={},GM={},jM={};function XB(n){return~PB.indexOf(n)}function YB(n,e){var t=e.split("-"),i=t[0],r=t.slice(1).join("-");return i===n&&r!==""&&!XB(r)?r:null}var WM=function(){var e=function(s){return o8(l2,function(o,a,c){return o[c]=o8(a,s,{}),o},{})};BM=e(function(r,s,o){if(s[3]&&(r[s[3]]=o),s[2]){var a=s[2].filter(function(c){return typeof c=="number"});a.forEach(function(c){r[c.toString(16)]=o})}return r}),VM=e(function(r,s,o){if(r[o]=o,s[2]){var a=s[2].filter(function(c){return typeof c=="string"});a.forEach(function(c){r[c]=o})}return r}),jM=e(function(r,s,o){var a=s[2];return r[o]=o,a.forEach(function(c){r[c]=o}),r});var t="far"in l2||Pe.autoFetchSvg,i=o8($B,function(r,s){var o=s[0],a=s[1],c=s[2];return a==="far"&&!t&&(a="fas"),typeof o=="string"&&(r.names[o]={prefix:a,iconName:c}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:a,iconName:c}),r},{names:{},unicodes:{}});HM=i.names,GM=i.unicodes,N8=S0(Pe.styleDefault,{family:Pe.familyDefault})};OB(function(n){N8=S0(n.styleDefault,{family:Pe.familyDefault})});WM();function R8(n,e){return(BM[n]||{})[e]}function ZB(n,e){return(VM[n]||{})[e]}function pa(n,e){return(jM[n]||{})[e]}function $M(n){return HM[n]||{prefix:null,iconName:null}}function KB(n){var e=GM[n],t=R8("fas",n);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function ho(){return N8}var qM=function(){return{prefix:null,iconName:null,rest:[]}};function JB(n){var e=Dn,t=UM.reduce(function(i,r){return i[r]="".concat(Pe.cssPrefix,"-").concat(r),i},{});return SM.forEach(function(i){(n.includes(t[i])||n.some(function(r){return qB[i].includes(r)}))&&(e=i)}),e}function S0(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.family,i=t===void 0?Dn:t,r=IB[i][n];if(i===u2&&!n)return"fad";var s=wx[i][n]||wx[i][r],o=n in lr.styles?n:null,a=s||o||null;return a}function QB(n){var e=[],t=null;return n.forEach(function(i){var r=YB(Pe.cssPrefix,i);r?t=r:i&&e.push(i)}),{iconName:t,rest:e}}function Nx(n){return n.sort().filter(function(e,t,i){return i.indexOf(e)===t})}var Rx=wM.concat(EM);function E0(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.skipLookups,i=t===void 0?!1:t,r=null,s=Nx(n.filter(function(h){return Rx.includes(h)})),o=Nx(n.filter(function(h){return!Rx.includes(h)})),a=s.filter(function(h){return r=h,!eM.includes(h)}),c=x0(a,1),l=c[0],u=l===void 0?null:l,d=JB(s),f=le(le({},QB(o)),{},{prefix:S0(u,{family:d})});return le(le(le({},f),iV({values:n,family:d,styles:l2,config:Pe,canonical:f,givenPrefix:r})),eV(i,r,f))}function eV(n,e,t){var i=t.prefix,r=t.iconName;if(n||!i||!r)return{prefix:i,iconName:r};var s=e==="fa"?$M(r):{},o=pa(i,r);return r=s.iconName||o||r,i=s.prefix||i,i==="far"&&!l2.far&&l2.fas&&!Pe.autoFetchSvg&&(i="fas"),{prefix:i,iconName:r}}var tV=SM.filter(function(n){return n!==Dn||n!==u2}),nV=Object.keys(u8).filter(function(n){return n!==Dn}).map(function(n){return Object.keys(u8[n])}).flat();function iV(n){var e=n.values,t=n.family,i=n.canonical,r=n.givenPrefix,s=r===void 0?"":r,o=n.styles,a=o===void 0?{}:o,c=n.config,l=c===void 0?{}:c,u=t===u2,d=e.includes("fa-duotone")||e.includes("fad"),f=l.familyDefault==="duotone",h=i.prefix==="fad"||i.prefix==="fa-duotone";if(!u&&(d||f||h)&&(i.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(i.prefix="fab"),!i.prefix&&tV.includes(t)){var p=Object.keys(a).find(function(m){return nV.includes(m)});if(p||l.autoFetchSvg){var y=cU.get(t).defaultShortPrefixId;i.prefix=y,i.iconName=pa(i.prefix,i.iconName)||i.iconName}}return(i.prefix==="fa"||s==="fa")&&(i.prefix=ho()||"fas"),i}var rV=(function(){function n(){wF(this,n),this.definitions={}}return CF(n,[{key:"add",value:function(){for(var t=this,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){t.definitions[a]=le(le({},t.definitions[a]||{}),o[a]),g8(a,o[a]);var c=I8[Dn][a];c&&g8(c,o[a]),WM()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(s){var o=r[s],a=o.prefix,c=o.iconName,l=o.icon,u=l[2];t[a]||(t[a]={}),u.length>0&&u.forEach(function(d){typeof d=="string"&&(t[a][d]=l)}),t[a][c]=l}),t}}])})(),Px=[],H1={},G1={},sV=Object.keys(G1);function oV(n,e){var t=e.mixoutsTo;return Px=n,H1={},Object.keys(G1).forEach(function(i){sV.indexOf(i)===-1&&delete G1[i]}),Px.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(t[o]=r[o]),y0(r[o])==="object"&&Object.keys(r[o]).forEach(function(a){t[o]||(t[o]={}),t[o][a]=r[o][a]})}),i.hooks){var s=i.hooks();Object.keys(s).forEach(function(o){H1[o]||(H1[o]=[]),H1[o].push(s[o])})}i.provides&&i.provides(G1)}),t}function v8(n,e){for(var t=arguments.length,i=new Array(t>2?t-2:0),r=2;r<t;r++)i[r-2]=arguments[r];var s=H1[n]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(i))}),e}function ga(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];var r=H1[n]||[];r.forEach(function(s){s.apply(null,t)})}function po(){var n=arguments[0],e=Array.prototype.slice.call(arguments,1);return G1[n]?G1[n].apply(null,e):void 0}function y8(n){n.prefix==="fa"&&(n.prefix="fas");var e=n.iconName,t=n.prefix||ho();if(e)return e=pa(t,e)||e,Ax(XM.definitions,t,e)||Ax(lr.styles,t,e)}var XM=new rV,aV=function(){Pe.autoReplaceSvg=!1,Pe.observeMutations=!1,ga("noAuto")},cV={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return bs?(ga("beforeI2svg",e),po("pseudoElements2svg",e),po("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;Pe.autoReplaceSvg===!1&&(Pe.autoReplaceSvg=!0),Pe.observeMutations=!0,jB(function(){uV({autoReplaceSvgRoot:t}),ga("watch",e)})}},lV={icon:function(e){if(e===null)return null;if(y0(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:pa(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=S0(e[0]);return{prefix:i,iconName:pa(i,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(Pe.cssPrefix,"-"))>-1||e.match(AB))){var r=E0(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||ho(),iconName:pa(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var s=ho();return{prefix:s,iconName:pa(s,e)||e}}}},yi={noAuto:aV,config:Pe,dom:cV,parse:lV,library:XM,findIconDefinition:y8,toHtml:f2},uV=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot,i=t===void 0?Ut:t;(Object.keys(lr.styles).length>0||Pe.autoFetchSvg)&&bs&&Pe.autoReplaceSvg&&yi.dom.i2svg({node:i})};function w0(n,e){return Object.defineProperty(n,"abstract",{get:e}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(i){return f2(i)})}}),Object.defineProperty(n,"node",{get:function(){if(bs){var i=Ut.createElement("div");return i.innerHTML=n.html,i.children}}}),n}function dV(n){var e=n.children,t=n.main,i=n.mask,r=n.attributes,s=n.styles,o=n.transform;if(D8(o)&&t.found&&!i.found){var a=t.width,c=t.height,l={x:a/c/2,y:.5};r.style=M0(le(le({},s),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function fV(n){var e=n.prefix,t=n.iconName,i=n.children,r=n.attributes,s=n.symbol,o=s===!0?"".concat(e,"-").concat(Pe.cssPrefix,"-").concat(t):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:le(le({},r),{},{id:o}),children:i}]}]}function hV(n){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(t){return t in n})}function P8(n){var e=n.icons,t=e.main,i=e.mask,r=n.prefix,s=n.iconName,o=n.transform,a=n.symbol,c=n.maskId,l=n.extra,u=n.watchable,d=u===void 0?!1:u,f=i.found?i:t,h=f.width,p=f.height,y=[Pe.replacementClass,s?"".concat(Pe.cssPrefix,"-").concat(s):""].filter(function(T){return l.classes.indexOf(T)===-1}).filter(function(T){return T!==""||!!T}).concat(l.classes).join(" "),m={children:[],attributes:le(le({},l.attributes),{},{"data-prefix":r,"data-icon":s,class:y,role:l.attributes.role||"img",viewBox:"0 0 ".concat(h," ").concat(p)})};!hV(l.attributes)&&!l.attributes["aria-hidden"]&&(m.attributes["aria-hidden"]="true"),d&&(m.attributes[ma]="");var g=le(le({},m),{},{prefix:r,iconName:s,main:t,mask:i,maskId:c,transform:o,symbol:a,styles:le({},l.styles)}),M=i.found&&t.found?po("generateAbstractMask",g)||{children:[],attributes:{}}:po("generateAbstractIcon",g)||{children:[],attributes:{}},S=M.children,x=M.attributes;return g.children=S,g.attributes=x,a?fV(g):dV(g)}function Lx(n){var e=n.content,t=n.width,i=n.height,r=n.transform,s=n.extra,o=n.watchable,a=o===void 0?!1:o,c=le(le({},s.attributes),{},{class:s.classes.join(" ")});a&&(c[ma]="");var l=le({},s.styles);D8(r)&&(l.transform=VB({transform:r,startCentered:!0,width:t,height:i}),l["-webkit-transform"]=l.transform);var u=M0(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:"span",attributes:c,children:[e]}),d}function pV(n){var e=n.content,t=n.extra,i=le(le({},t.attributes),{},{class:t.classes.join(" ")}),r=M0(t.styles);r.length>0&&(i.style=r);var s=[];return s.push({tag:"span",attributes:i,children:[e]}),s}var a8=lr.styles;function _8(n){var e=n[0],t=n[1],i=n.slice(4),r=x0(i,1),s=r[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(Pe.cssPrefix,"-").concat(r8.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Pe.cssPrefix,"-").concat(r8.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(Pe.cssPrefix,"-").concat(r8.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:t,icon:o}}var mV={found:!1,width:512,height:512};function gV(n,e){!DM&&!Pe.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(e,'" is missing.'))}function b8(n,e){var t=e;return e==="fa"&&Pe.styleDefault!==null&&(e=ho()),new Promise(function(i,r){if(t==="fa"){var s=$M(n)||{};n=s.iconName||n,e=s.prefix||e}if(n&&e&&a8[e]&&a8[e][n]){var o=a8[e][n];return i(_8(o))}gV(n,e),i(le(le({},mV),{},{icon:Pe.showMissingIcons&&n?po("missingIconAbstract")||{}:{}}))})}var zx=function(){},x8=Pe.measurePerformance&&d0&&d0.mark&&d0.measure?d0:{mark:zx,measure:zx},o2='FA "7.3.0"',vV=function(e){return x8.mark("".concat(o2," ").concat(e," begins")),function(){return YM(e)}},YM=function(e){x8.mark("".concat(o2," ").concat(e," ends")),x8.measure("".concat(o2," ").concat(e),"".concat(o2," ").concat(e," begins"),"".concat(o2," ").concat(e," ends"))},L8={begin:vV,end:YM},g0=function(){};function Ox(n){var e=n.getAttribute?n.getAttribute(ma):null;return typeof e=="string"}function yV(n){var e=n.getAttribute?n.getAttribute(C8):null,t=n.getAttribute?n.getAttribute(T8):null;return e&&t}function _V(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(Pe.replacementClass)}function bV(){if(Pe.autoReplaceSvg===!0)return v0.replace;var n=v0[Pe.autoReplaceSvg];return n||v0.replace}function xV(n){return Ut.createElementNS("http://www.w3.org/2000/svg",n)}function MV(n){return Ut.createElement(n)}function ZM(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.ceFn,i=t===void 0?n.tag==="svg"?xV:MV:t;if(typeof n=="string")return Ut.createTextNode(n);var r=i(n.tag);Object.keys(n.attributes||[]).forEach(function(o){r.setAttribute(o,n.attributes[o])});var s=n.children||[];return s.forEach(function(o){r.appendChild(ZM(o,{ceFn:i}))}),r}function SV(n){var e=" ".concat(n.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var v0={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(r){t.parentNode.insertBefore(ZM(r),t)}),t.getAttribute(ma)===null&&Pe.keepOriginalSource){var i=Ut.createComment(SV(t));t.parentNode.replaceChild(i,t)}else t.remove()},nest:function(e){var t=e[0],i=e[1];if(~A8(t).indexOf(Pe.replacementClass))return v0.replace(e);var r=new RegExp("".concat(Pe.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var s=i[0].attributes.class.split(" ").reduce(function(a,c){return c===Pe.replacementClass||c.match(r)?a.toSvg.push(c):a.toNode.push(c),a},{toNode:[],toSvg:[]});i[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",s.toNode.join(" "))}var o=i.map(function(a){return f2(a)}).join(`
`);t.setAttribute(ma,""),t.innerHTML=o}};function kx(n){n()}function KM(n,e){var t=typeof e=="function"?e:g0;if(n.length===0)t();else{var i=kx;Pe.mutateApproach===CB&&(i=fo.requestAnimationFrame||kx),i(function(){var r=bV(),s=L8.begin("mutate");n.map(r),s(),t()})}}var z8=!1;function JM(){z8=!0}function M8(){z8=!1}var b0=null;function Fx(n){if(xx&&Pe.observeMutations){var e=n.treeCallback,t=e===void 0?g0:e,i=n.nodeCallback,r=i===void 0?g0:i,s=n.pseudoElementsCallback,o=s===void 0?g0:s,a=n.observeMutationsRoot,c=a===void 0?Ut:a;b0=new xx(function(l){if(!z8){var u=ho();W1(l).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Ox(d.addedNodes[0])&&(Pe.searchPseudoElements&&o(d.target),t(d.target)),d.type==="attributes"&&d.target.parentNode&&Pe.searchPseudoElements&&o([d.target],!0),d.type==="attributes"&&Ox(d.target)&&~RB.indexOf(d.attributeName))if(d.attributeName==="class"&&yV(d.target)){var f=E0(A8(d.target)),h=f.prefix,p=f.iconName;d.target.setAttribute(C8,h||u),p&&d.target.setAttribute(T8,p)}else _V(d.target)&&r(d.target)})}}),bs&&b0.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function EV(){b0&&b0.disconnect()}function wV(n){var e=n.getAttribute("style"),t=[];return e&&(t=e.split(";").reduce(function(i,r){var s=r.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(i[o]=a.join(":").trim()),i},{})),t}function CV(n){var e=n.getAttribute("data-prefix"),t=n.getAttribute("data-icon"),i=n.innerText!==void 0?n.innerText.trim():"",r=E0(A8(n));return r.prefix||(r.prefix=ho()),e&&t&&(r.prefix=e,r.iconName=t),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=ZB(r.prefix,n.innerText)||R8(r.prefix,FM(n.innerText))),!r.iconName&&Pe.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=n.firstChild.data)),r}function TV(n){var e=W1(n.attributes).reduce(function(t,i){return t.name!=="class"&&t.name!=="style"&&(t[i.name]=i.value),t},{});return e}function IV(){return{iconName:null,prefix:null,transform:Br,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ux(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=CV(n),i=t.iconName,r=t.prefix,s=t.rest,o=TV(n),a=v8("parseNodeAttributes",{},n),c=e.styleParser?wV(n):[];return le({iconName:i,prefix:r,transform:Br,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:o}},a)}var AV=lr.styles;function QM(n){var e=Pe.autoReplaceSvg==="nest"?Ux(n,{styleParser:!1}):Ux(n);return~e.extra.classes.indexOf(RM)?po("generateLayersText",n,e):po("generateSvgReplacementMutation",n,e)}function DV(){return[].concat(ur(EM),ur(wM))}function Bx(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!bs)return Promise.resolve();var t=Ut.documentElement.classList,i=function(d){return t.add("".concat(Ex,"-").concat(d))},r=function(d){return t.remove("".concat(Ex,"-").concat(d))},s=Pe.autoFetchSvg?DV():eM.concat(Object.keys(AV));s.includes("fa")||s.push("fa");var o=[".".concat(RM,":not([").concat(ma,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(ma,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=W1(n.querySelectorAll(o))}catch(u){}if(a.length>0)i("pending"),r("complete");else return Promise.resolve();var c=L8.begin("onTree"),l=a.reduce(function(u,d){try{var f=QM(d);f&&u.push(f)}catch(h){DM||h.name==="MissingIcon"&&console.error(h)}return u},[]);return new Promise(function(u,d){Promise.all(l).then(function(f){KM(f,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),c(),u()})}).catch(function(f){c(),d(f)})})}function NV(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;QM(n).then(function(t){t&&KM([t],e)})}function RV(n){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:y8(e||{}),r=t.mask;return r&&(r=(r||{}).icon?r:y8(r||{})),n(i,le(le({},t),{},{mask:r}))}}var PV=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=t.transform,r=i===void 0?Br:i,s=t.symbol,o=s===void 0?!1:s,a=t.mask,c=a===void 0?null:a,l=t.maskId,u=l===void 0?null:l,d=t.classes,f=d===void 0?[]:d,h=t.attributes,p=h===void 0?{}:h,y=t.styles,m=y===void 0?{}:y;if(e){var g=e.prefix,M=e.iconName,S=e.icon;return w0(le({type:"icon"},e),function(){return ga("beforeDOMElementCreation",{iconDefinition:e,params:t}),P8({icons:{main:_8(S),mask:c?_8(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:M,transform:le(le({},Br),r),symbol:o,maskId:u,extra:{attributes:p,styles:m,classes:f}})})}},LV={mixout:function(){return{icon:RV(PV)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=Bx,t.nodeCallback=NV,t}}},provides:function(e){e.i2svg=function(t){var i=t.node,r=i===void 0?Ut:i,s=t.callback,o=s===void 0?function(){}:s;return Bx(r,o)},e.generateSvgReplacementMutation=function(t,i){var r=i.iconName,s=i.prefix,o=i.transform,a=i.symbol,c=i.mask,l=i.maskId,u=i.extra;return new Promise(function(d,f){Promise.all([b8(r,s),c.iconName?b8(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(h){var p=x0(h,2),y=p[0],m=p[1];d([t,P8({icons:{main:y,mask:m},prefix:s,iconName:r,transform:o,symbol:a,maskId:l,extra:u,watchable:!0})])}).catch(f)})},e.generateAbstractIcon=function(t){var i=t.children,r=t.attributes,s=t.main,o=t.transform,a=t.styles,c=M0(a);c.length>0&&(r.style=c);var l;return D8(o)&&(l=po("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),i.push(l||s.icon),{children:i,attributes:r}}}},zV={mixout:function(){return{layer:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,s=r===void 0?[]:r;return w0({type:"layer"},function(){ga("beforeDOMElementCreation",{assembler:t,params:i});var o=[];return t(function(a){Array.isArray(a)?a.map(function(c){o=o.concat(c.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(Pe.cssPrefix,"-layers")].concat(ur(s)).join(" ")},children:o}]})}}}},OV={mixout:function(){return{counter:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.title,s=r===void 0?null:r,o=i.classes,a=o===void 0?[]:o,c=i.attributes,l=c===void 0?{}:c,u=i.styles,d=u===void 0?{}:u;return w0({type:"counter",content:t},function(){return ga("beforeDOMElementCreation",{content:t,params:i}),pV({content:t.toString(),title:s,extra:{attributes:l,styles:d,classes:["".concat(Pe.cssPrefix,"-layers-counter")].concat(ur(a))}})})}}}},kV={mixout:function(){return{text:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,s=r===void 0?Br:r,o=i.classes,a=o===void 0?[]:o,c=i.attributes,l=c===void 0?{}:c,u=i.styles,d=u===void 0?{}:u;return w0({type:"text",content:t},function(){return ga("beforeDOMElementCreation",{content:t,params:i}),Lx({content:t,transform:le(le({},Br),s),extra:{attributes:l,styles:d,classes:["".concat(Pe.cssPrefix,"-layers-text")].concat(ur(a))}})})}}},provides:function(e){e.generateLayersText=function(t,i){var r=i.transform,s=i.extra,o=null,a=null;if(Jx){var c=parseInt(getComputedStyle(t).fontSize,10),l=t.getBoundingClientRect();o=l.width/c,a=l.height/c}return Promise.resolve([t,Lx({content:t.innerHTML,width:o,height:a,transform:r,extra:s,watchable:!0})])}}},eS=new RegExp('"',"ug"),Vx=[1105920,1112319],Hx=le(le(le(le({},{FontAwesome:{normal:"fas",400:"fas"}}),aU),EB),gU),S8=Object.keys(Hx).reduce(function(n,e){return n[e.toLowerCase()]=Hx[e],n},{}),FV=Object.keys(S8).reduce(function(n,e){var t=S8[e];return n[e]=t[900]||ur(Object.entries(t))[0][1],n},{});function UV(n){var e=n.replace(eS,"");return FM(ur(e)[0]||"")}function BV(n){var e=n.getPropertyValue("font-feature-settings").includes("ss01"),t=n.getPropertyValue("content"),i=t.replace(eS,""),r=i.codePointAt(0),s=r>=Vx[0]&&r<=Vx[1],o=i.length===2?i[0]===i[1]:!1;return s||o||e}function VV(n,e){var t=n.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(e),r=isNaN(i)?"normal":i;return(S8[t]||{})[r]||FV[t]}function Gx(n,e){var t="".concat(wB).concat(e.replace(":","-"));return new Promise(function(i,r){if(n.getAttribute(t)!==null)return i();var s=W1(n.children),o=s.filter(function(w){return w.getAttribute(f8)===e})[0],a=fo.getComputedStyle(n,e),c=a.getPropertyValue("font-family"),l=c.match(DB),u=a.getPropertyValue("font-weight"),d=a.getPropertyValue("content");if(o&&!l)return n.removeChild(o),i();if(l&&d!=="none"&&d!==""){var f=a.getPropertyValue("content"),h=VV(c,u),p=UV(f),y=l[0].startsWith("FontAwesome"),m=BV(a),g=R8(h,p),M=g;if(y){var S=KB(p);S.iconName&&S.prefix&&(g=S.iconName,h=S.prefix)}if(g&&!m&&(!o||o.getAttribute(C8)!==h||o.getAttribute(T8)!==M)){n.setAttribute(t,M),o&&n.removeChild(o);var x=IV(),T=x.extra;T.attributes[f8]=e,b8(g,h).then(function(w){var I=P8(le(le({},x),{},{icons:{main:w,mask:qM()},prefix:h,iconName:M,extra:T,watchable:!0})),_=Ut.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?n.insertBefore(_,n.firstChild):n.appendChild(_),_.outerHTML=I.map(function(E){return f2(E)}).join(`
`),n.removeAttribute(t),i()}).catch(r)}else i()}else i()})}function HV(n){return Promise.all([Gx(n,"::before"),Gx(n,"::after")])}function GV(n){return n.parentNode!==document.head&&!~TB.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(f8)&&(!n.parentNode||n.parentNode.tagName!=="svg")}var jV=function(e){return!!e&&AM.some(function(t){return e.includes(t)})},WV=function(e){if(!e)return[];var t=new Set,i=e.split(/,(?![^()]*\))/).map(function(c){return c.trim()});i=i.flatMap(function(c){return c.includes("(")?c:c.split(",").map(function(l){return l.trim()})});var r=m0(i),s;try{for(r.s();!(s=r.n()).done;){var o=s.value;if(jV(o)){var a=AM.reduce(function(c,l){return c.replace(l,"")},o);a!==""&&a!=="*"&&t.add(a)}}}catch(c){r.e(c)}finally{r.f()}return t};function jx(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(bs){var t;if(e)t=n;else if(Pe.searchPseudoElementsFullScan)t=n.querySelectorAll("*");else{var i=new Set,r=m0(document.styleSheets),s;try{for(r.s();!(s=r.n()).done;){var o=s.value;try{var a=m0(o.cssRules),c;try{for(a.s();!(c=a.n()).done;){var l=c.value,u=WV(l.selectorText),d=m0(u),f;try{for(d.s();!(f=d.n()).done;){var h=f.value;i.add(h)}}catch(y){d.e(y)}finally{d.f()}}}catch(y){a.e(y)}finally{a.f()}}catch(y){Pe.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(y.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(y){r.e(y)}finally{r.f()}if(!i.size)return;var p=Array.from(i).join(", ");try{t=n.querySelectorAll(p)}catch(y){}}return new Promise(function(y,m){var g=W1(t).filter(GV).map(HV),M=L8.begin("searchPseudoElements");JM(),Promise.all(g).then(function(){M(),M8(),y()}).catch(function(){M(),M8(),m()})})}}var $V={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=jx,t}}},provides:function(e){e.pseudoElements2svg=function(t){var i=t.node,r=i===void 0?Ut:i;Pe.searchPseudoElements&&jx(r)}}},Wx=!1,qV={mixout:function(){return{dom:{unwatch:function(){JM(),Wx=!0}}}},hooks:function(){return{bootstrap:function(){Fx(v8("mutationObserverCallbacks",{}))},noAuto:function(){EV()},watch:function(t){var i=t.observeMutationsRoot;Wx?M8():Fx(v8("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},$x=function(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var s=r.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return i.flipX=!0,i;if(o&&a==="v")return i.flipY=!0,i;if(a=parseFloat(a),isNaN(a))return i;switch(o){case"grow":i.size=i.size+a;break;case"shrink":i.size=i.size-a;break;case"left":i.x=i.x-a;break;case"right":i.x=i.x+a;break;case"up":i.y=i.y-a;break;case"down":i.y=i.y+a;break;case"rotate":i.rotate=i.rotate+a;break}return i},t)},XV={mixout:function(){return{parse:{transform:function(t){return $x(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,i){var r=i.getAttribute("data-fa-transform");return r&&(t.transform=$x(r)),t}}},provides:function(e){e.generateAbstractTransformGrouping=function(t){var i=t.main,r=t.transform,s=t.containerWidth,o=t.iconWidth,a={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(c," ").concat(l," ").concat(u)},f={transform:"translate(".concat(o/2*-1," -256)")},h={outer:a,inner:d,path:f};return{tag:"g",attributes:le({},h.outer),children:[{tag:"g",attributes:le({},h.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:le(le({},i.icon.attributes),h.path)}]}]}}}},c8={x:0,y:0,width:"100%",height:"100%"};function qx(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||e)&&(n.attributes.fill="black"),n}function YV(n){return n.tag==="g"?n.children:[n]}var ZV={hooks:function(){return{parseNodeAttributes:function(t,i){var r=i.getAttribute("data-fa-mask"),s=r?E0(r.split(" ").map(function(o){return o.trim()})):qM();return s.prefix||(s.prefix=ho()),t.mask=s,t.maskId=i.getAttribute("data-fa-mask-id"),t}}},provides:function(e){e.generateAbstractMask=function(t){var i=t.children,r=t.attributes,s=t.main,o=t.mask,a=t.maskId,c=t.transform,l=s.width,u=s.icon,d=o.width,f=o.icon,h=BB({transform:c,containerWidth:d,iconWidth:l}),p={tag:"rect",attributes:le(le({},c8),{},{fill:"white"})},y=u.children?{children:u.children.map(qx)}:{},m={tag:"g",attributes:le({},h.inner),children:[qx(le({tag:u.tag,attributes:le(le({},u.attributes),h.path)},y))]},g={tag:"g",attributes:le({},h.outer),children:[m]},M="mask-".concat(a||Tx()),S="clip-".concat(a||Tx()),x={tag:"mask",attributes:le(le({},c8),{},{id:M,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,g]},T={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:YV(f)},x]};return i.push(T,{tag:"rect",attributes:le({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(M,")")},c8)}),{children:i,attributes:r}}}},KV={provides:function(e){var t=!1;fo.matchMedia&&(t=fo.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:le(le({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=le(le({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:le(le({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||a.children.push({tag:"animate",attributes:le(le({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:le(le({},o),{},{values:"1;0;1;1;0;1;"})}),i.push(a),i.push({tag:"path",attributes:le(le({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:le(le({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||i.push({tag:"path",attributes:le(le({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:le(le({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},JV={hooks:function(){return{parseNodeAttributes:function(t,i){var r=i.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return t.symbol=s,t}}}},QV=[GB,LV,zV,OV,kV,$V,qV,XV,ZV,KV,JV];oV(QV,{mixoutsTo:yi});var _ce=yi.noAuto,tS=yi.config,bce=yi.library,nS=yi.dom,iS=yi.parse,xce=yi.findIconDefinition,Mce=yi.toHtml,rS=yi.icon,Sce=yi.layer,eH=yi.text,tH=yi.counter;var nH=["*"],iH=(()=>{class n{defaultPrefix="fas";fallbackIcon=null;fixedWidth;set autoAddCss(t){tS.autoAddCss=t,this._autoAddCss=t}get autoAddCss(){return this._autoAddCss}_autoAddCss=!0;static \u0275fac=function(i){return new(i||n)};static \u0275prov=et({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),rH=(()=>{class n{definitions={};addIcons(...t){for(let i of t){i.prefix in this.definitions||(this.definitions[i.prefix]={}),this.definitions[i.prefix][i.iconName]=i;for(let r of i.icon[2])typeof r=="string"&&(this.definitions[i.prefix][r]=i)}}addIconPacks(...t){for(let i of t){let r=Object.keys(i).map(s=>i[s]);this.addIcons(...r)}}getIconDefinition(t,i){return t in this.definitions&&i in this.definitions[t]?this.definitions[t][i]:null}static \u0275fac=function(i){return new(i||n)};static \u0275prov=et({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),sH=n=>{throw new Error(`Could not find icon with iconName=${n.iconName} and prefix=${n.prefix} in the icon library.`)},oH=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},oS=n=>n!=null&&(n===90||n===180||n===270||n==="90"||n==="180"||n==="270"),aH=n=>{let e=oS(n.rotate),t={[`fa-${n.animation}`]:n.animation!=null&&!n.animation.startsWith("spin"),"fa-spin":n.animation==="spin"||n.animation==="spin-reverse","fa-spin-pulse":n.animation==="spin-pulse"||n.animation==="spin-pulse-reverse","fa-spin-reverse":n.animation==="spin-reverse"||n.animation==="spin-pulse-reverse","fa-pulse":n.animation==="spin-pulse"||n.animation==="spin-pulse-reverse","fa-fw":n.fixedWidth,"fa-border":n.border,"fa-inverse":n.inverse,"fa-layers-counter":n.counter,"fa-flip-horizontal":n.flip==="horizontal"||n.flip==="both","fa-flip-vertical":n.flip==="vertical"||n.flip==="both",[`fa-${n.size}`]:n.size!=null,[`fa-rotate-${n.rotate}`]:e,"fa-rotate-by":n.rotate!=null&&!e,[`fa-pull-${n.pull}`]:n.pull!=null,[`fa-stack-${n.stackItemSize}`]:n.stackItemSize!=null};return Object.keys(t).map(i=>t[i]?i:null).filter(i=>i!=null)},O8=new WeakSet,sS="fa-auto-css";function cH(n,e,t){if(!e.autoAddCss||O8.has(n))return;if(n.getElementById(sS)!=null){e.autoAddCss=!1,O8.add(n);return}let i=n.createElement("style");i.setAttribute("type","text/css"),i.setAttribute("id",sS),t&&i.setAttribute("nonce",t),i.innerHTML=nS.css();let r=n.head.childNodes,s=null;for(let o=r.length-1;o>-1;o--){let a=r[o],c=a.nodeName.toUpperCase();["STYLE","LINK"].indexOf(c)>-1&&(s=a)}n.head.insertBefore(i,s),e.autoAddCss=!1,O8.add(n)}var lH=n=>n.prefix!==void 0&&n.iconName!==void 0,uH=(n,e)=>lH(n)?n:Array.isArray(n)&&n.length===2?{prefix:n[0],iconName:n[1]}:{prefix:e,iconName:n},dH=(()=>{class n{stackItemSize=$o("1x");size=$o();_effect=Ba(()=>{if(this.size())throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')});static \u0275fac=function(i){return new(i||n)};static \u0275dir=Lc({type:n,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:[1,"stackItemSize"],size:[1,"size"]}})}return n})(),fH=(()=>{class n{size=$o();classes=Qa(()=>{let t=this.size(),i=t?{[`fa-${t}`]:!0}:{};return at(de({},i),{"fa-stack":!0})});static \u0275fac=function(i){return new(i||n)};static \u0275cmp=kt({type:n,selectors:[["fa-stack"]],hostVars:2,hostBindings:function(i,r){i&2&&p5(r.classes())},inputs:{size:[1,"size"]},ngContentSelectors:nH,decls:1,vars:0,template:function(i,r){i&1&&(f5(),h5(0))},encapsulation:2})}return n})(),aS=(()=>{class n{icon=Wn();title=Wn();animation=Wn();mask=Wn();flip=Wn();size=Wn();pull=Wn();border=Wn();inverse=Wn();symbol=Wn();rotate=Wn();fixedWidth=Wn();transform=Wn();a11yRole=Wn();renderedIconHTML=Qa(()=>{let t=this.icon()??this.config.fallbackIcon;if(!t)return oH(),"";let i=this.findIconDefinition(t);if(!i)return"";let r=this.buildParams();cH(this.document,this.config,this.cspNonce);let s=rS(i,r);return this.sanitizer.bypassSecurityTrustHtml(s.html.join(`
`))});cspNonce=Y(Fa);document=Y(Vt);sanitizer=Y(D5);config=Y(iH);iconLibrary=Y(rH);stackItem=Y(dH,{optional:!0});stack=Y(fH,{optional:!0});constructor(){this.stack!=null&&this.stackItem==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x" />.')}findIconDefinition(t){let i=uH(t,this.config.defaultPrefix);if("icon"in i)return i;let r=this.iconLibrary.getIconDefinition(i.prefix,i.iconName);return r??(sH(i),null)}buildParams(){let t=this.fixedWidth(),i={flip:this.flip(),animation:this.animation(),border:this.border(),inverse:this.inverse(),size:this.size(),pull:this.pull(),rotate:this.rotate(),fixedWidth:typeof t=="boolean"?t:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize():void 0},r=this.transform(),s=typeof r=="string"?iS.transform(r):r,o=this.mask(),a=o!=null?this.findIconDefinition(o):null,c={},l=this.a11yRole();l!=null&&(c.role=l);let u={};return i.rotate!=null&&!oS(i.rotate)&&(u["--fa-rotate-angle"]=`${i.rotate}`),{title:this.title(),transform:s,classes:aH(i),mask:a??void 0,symbol:this.symbol(),attributes:c,styles:u}}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=kt({type:n,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(i,r){i&2&&(jo("innerHTML",r.renderedIconHTML(),$h),ci("title",r.title()??void 0))},inputs:{icon:[1,"icon"],title:[1,"title"],animation:[1,"animation"],mask:[1,"mask"],flip:[1,"flip"],size:[1,"size"],pull:[1,"pull"],border:[1,"border"],inverse:[1,"inverse"],symbol:[1,"symbol"],rotate:[1,"rotate"],fixedWidth:[1,"fixedWidth"],transform:[1,"transform"],a11yRole:[1,"a11yRole"]},outputs:{icon:"iconChange",title:"titleChange",animation:"animationChange",mask:"maskChange",flip:"flipChange",size:"sizeChange",pull:"pullChange",border:"borderChange",inverse:"inverseChange",symbol:"symbolChange",rotate:"rotateChange",fixedWidth:"fixedWidthChange",transform:"transformChange",a11yRole:"a11yRoleChange"},decls:0,vars:0,template:function(i,r){},encapsulation:2})}return n})();var cS=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Pc({type:n});static \u0275inj=Na({})}return n})();var lS={prefix:"fab",iconName:"github",icon:[512,512,[],"f09b","M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};var uS={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z"]};var dS=[{name:"GitHub",url:"https://github.com/rbinsztock",icon:lS},{name:"LinkedIn",url:"https://www.linkedin.com/in/r%C3%A9my-binsztock-17b8755a/",icon:uS}];var pH=(n,e)=>e.name;function mH(n,e){if(n&1&&(tt(0,"a",1)(1,"span"),Tn(2,"fa-icon",2),Q(3),$e(),tt(4,"span",3),Q(5,"\u2197"),$e()()),n&2){let t=e.$implicit;ci("aria-label",m5("Open ",t.name," profile")),Oc("href",t.url,Xa)("title",t.name),ae(2),Oc("icon",t.icon),ae(),Ye(t.name)}}var fS=(()=>{class n{constructor(){this.socialNetworks=dS}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=kt({type:n,selectors:[["app-social-networks"]],decls:3,vars:0,consts:[[1,"social-networks-container"],["target","_blank","rel","noopener noreferrer",3,"href","title"],[3,"icon"],["aria-hidden","true"]],template:function(i,r){i&1&&(tt(0,"div",0),It(1,mH,6,6,"a",1,pH),$e()),i&2&&(ae(),At(r.socialNetworks))},dependencies:[cS,aS],styles:[".social-networks-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.65rem}.social-networks-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:.75rem;padding:.75rem 1rem;border:1px solid var(--line);border-radius:10px;background:color-mix(in srgb,var(--surface) 40%,transparent);color:var(--ink-soft)!important;font-size:.85rem;font-weight:600;transition:border-color .2s,color .2s,box-shadow .2s,transform .2s}.social-networks-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{display:inline-flex;align-items:center;gap:.6rem}.social-networks-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{color:var(--muted);font-size:.75rem;transition:color .2s,transform .2s}.social-networks-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{border-color:var(--accent);color:var(--accent)!important;box-shadow:0 0 20px color-mix(in srgb,var(--accent) 12%,transparent);transform:translate(4px)}.social-networks-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:last-child{color:var(--accent);transform:translate(2px,-2px)}[_nghost-%COMP%]     fa-icon svg{width:1rem;height:1rem}"]})}}return n})();var hS=(n,e)=>e.label,gH=(n,e)=>e.company+e.period,vH=(n,e)=>e.title;function yH(n,e){if(n&1&&(tt(0,"li")(1,"strong"),Q(2),$e(),Q(3),$e()),n&2){let t=e.$implicit;ae(2),Yt("",t.label,":"),ae(),Yt(" ",t.value)}}function _H(n,e){if(n&1&&(tt(0,"li")(1,"strong"),Q(2),$e(),Q(3),Tn(4,"br"),tt(5,"span",21),Q(6),$e(),Tn(7,"br"),Q(8),$e()),n&2){let t=e.$implicit;ae(2),Ye(t.company),ae(),Wo(" | ",t.role," | ",t.period),ae(3),Ye(t.location),ae(2),Yt(" ",t.summary," ")}}function bH(n,e){if(n&1&&(tt(0,"li")(1,"strong"),Q(2),$e(),Q(3),$e()),n&2){let t=e.$implicit;ae(2),Yt("",t.label,":"),ae(),Yt(" ",t.text)}}function xH(n,e){if(n&1&&(tt(0,"li"),Q(1),$e()),n&2){let t=e.$implicit;ae(),Ye(t)}}function MH(n,e){if(n&1&&(tt(0,"h3"),Q(1),$e(),tt(2,"ul"),It(3,xH,2,1,"li",null,Ki),$e()),n&2){let t=e.$implicit;ae(),Ye(t.title),ae(2),At(t.items)}}var pS=(()=>{class n{constructor(){this.lenis=Y(u0),this.title=ei.name,this.profileRole=ei.role,this.profileSummary=ei.summary,this.profileLocation=ei.location,this.profileAvailability=ei.availability,this.profileLanguages=ei.languages,this.printRole=ei.role,this.printLocation=ei.location,this.printAvailability=ei.availability,this.printLanguages=ei.languages,this.printSummary=ei.summary,this.printContacts=tb.map(t=>({label:t.label,value:t.value})),this.printExperience=sb,this.printSkillGroups=ob,this.printCredentialGroups=Hf.map(t=>({title:t.title,items:t.items.map(i=>`${i.label} \xB7 ${i.date}`)}))}ngOnInit(){this.lenis.init()}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=kt({type:n,selectors:[["app-root"]],decls:72,vars:12,consts:[[1,"site-shell"],["id","top",1,"page-content"],["id","contact",1,"site-footer"],[1,"section-rule"],[1,"site-footer__grid"],[1,"site-footer__info","glow-card","glow-card--static"],[1,"site-footer__status"],["aria-hidden","true",1,"site-footer__dot"],[1,"site-footer__role"],[1,"site-footer__location"],[1,"site-footer__summary"],[1,"site-footer__languages"],[1,"site-footer__connect","glow-card","glow-card--static"],[1,"site-footer__bottom"],["href","#top",1,"site-footer__top"],["aria-label","Printable Resume",1,"print-resume"],[1,"print-resume__header"],[1,"print-resume__meta"],[1,"print-resume__summary"],[1,"print-resume__languages"],[1,"print-resume__section"],[1,"print-resume__location"]],template:function(i,r){i&1&&(Tn(0,"app-particle-background"),tt(1,"div",0),Tn(2,"app-cyber-nav"),tt(3,"main",1),Tn(4,"router-outlet"),$e(),tt(5,"footer",2),Tn(6,"hr",3),tt(7,"div",4)(8,"div",5)(9,"div",6),Tn(10,"span",7),Q(11),$e(),tt(12,"h2"),Q(13),$e(),tt(14,"p",8),Q(15),$e(),tt(16,"p",9),Q(17),$e(),tt(18,"p",10),Q(19),$e(),tt(20,"p",11)(21,"strong"),Q(22,"Languages:"),$e(),Q(23),$e()(),tt(24,"div",12)(25,"h3"),Q(26,"Connect"),$e(),tt(27,"p"),Q(28,"Let's discuss your next product, platform migration, or security initiative."),$e(),Tn(29,"app-social-networks"),$e()(),tt(30,"div",13)(31,"p"),Q(32,"\xA9 2026 R\xE9my Binsztock \xB7 Full-Stack Senior Developer & Cybersecurity Engineer"),$e(),tt(33,"a",14),Q(34,"Back to top \u2191"),$e()()()(),tt(35,"section",15)(36,"header",16)(37,"h1"),Q(38),$e(),tt(39,"p"),Q(40),$e(),tt(41,"p",17),Q(42),$e(),tt(43,"p",18),Q(44),$e(),tt(45,"p",19)(46,"strong"),Q(47,"Languages:"),$e(),Q(48),$e()(),tt(49,"section",20)(50,"h2"),Q(51,"Contact"),$e(),tt(52,"ul"),It(53,yH,4,2,"li",null,hS),$e()(),tt(55,"section",20)(56,"h2"),Q(57,"Experience"),$e(),tt(58,"ul"),It(59,_H,9,5,"li",null,gH),$e()(),tt(61,"section",20)(62,"h2"),Q(63,"Core Skills"),$e(),tt(64,"ul"),It(65,bH,4,2,"li",null,hS),$e()(),tt(67,"section",20)(68,"h2"),Q(69,"Education and Certifications"),$e(),It(70,MH,5,1,null,null,vH),$e()()),i&2&&(ae(11),Yt(" ",r.profileAvailability," "),ae(2),Ye(r.title),ae(2),Ye(r.profileRole),ae(2),Ye(r.profileLocation),ae(2),Ye(r.profileSummary),ae(4),Yt(" ",r.profileLanguages.join(" \xB7 ")," "),ae(15),Ye(r.title),ae(2),Ye(r.printRole),ae(2),Wo("",r.printLocation," \xB7 ",r.printAvailability),ae(2),Ye(r.printSummary),ae(4),Yt(" ",r.printLanguages.join(" \xB7 ")," "),ae(5),At(r.printContacts),ae(6),At(r.printExperience),ae(6),At(r.printSkillGroups),ae(5),At(r.printCredentialGroups))},dependencies:[ol,hx,mx,fS],styles:["[_nghost-%COMP%]{display:block}.site-shell[_ngcontent-%COMP%]{position:relative;z-index:1;width:100%;padding:0 var(--page-pad)}.page-content[_ngcontent-%COMP%]{min-width:0}.site-footer[_ngcontent-%COMP%]{padding:0 0 3rem;scroll-margin-top:6rem}.site-footer__grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1.2fr .8fr;gap:1.25rem;margin-bottom:2.5rem}.site-footer__info[_ngcontent-%COMP%], .site-footer__connect[_ngcontent-%COMP%]{padding:1.75rem}.site-footer__status[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;margin-bottom:1rem;padding:.35rem .75rem .35rem .5rem;border:1px solid color-mix(in srgb,#22a06b 30%,transparent);border-radius:999px;background:color-mix(in srgb,#22a06b 8%,transparent);color:#4ade80;font-family:var(--font-mono);font-size:.68rem;font-weight:600}.site-footer__dot[_ngcontent-%COMP%]{width:7px;height:7px;border-radius:50%;background:#4ade80;box-shadow:0 0 8px #4ade80;animation:_ngcontent-%COMP%_pulse-dot 2s ease-in-out infinite}@keyframes _ngcontent-%COMP%_pulse-dot{0%,to{opacity:1}50%{opacity:.5}}.site-footer__info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:1.6rem;letter-spacing:-.02em}.site-footer__role[_ngcontent-%COMP%]{margin:.4rem 0 0;color:var(--accent);font-family:var(--font-mono);font-size:.78rem;font-weight:600}.site-footer__location[_ngcontent-%COMP%]{margin:.25rem 0 0;color:var(--muted);font-size:.82rem}.site-footer__summary[_ngcontent-%COMP%]{margin:1rem 0 0;color:var(--muted);font-size:.88rem;line-height:1.65}.site-footer__languages[_ngcontent-%COMP%]{margin:1rem 0 0;color:var(--muted);font-size:.8rem}.site-footer__languages[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--ink-soft);font-weight:600}.site-footer__connect[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:1rem}.site-footer__connect[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0 0 1.25rem;color:var(--muted);font-size:.85rem;line-height:1.6}.site-footer__bottom[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding-top:1.5rem;border-top:1px solid var(--line);color:var(--muted-light);font-size:.78rem}.site-footer__bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.site-footer__top[_ngcontent-%COMP%]{color:var(--ink-soft)!important;font-weight:700;transition:color .2s}.site-footer__top[_ngcontent-%COMP%]:hover{color:var(--accent)!important}.print-resume[_ngcontent-%COMP%]{display:none}@media(max-width:768px){.site-footer__grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}@media(max-width:520px){.site-footer__bottom[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;gap:.75rem}}@media print{.site-shell[_ngcontent-%COMP%]{display:none!important}.print-resume[_ngcontent-%COMP%]{display:block;color:#111827;font:11px/1.35 Arial,sans-serif}.print-resume__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:24px;color:#0f766e}.print-resume__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:2px 0 0}.print-resume__summary[_ngcontent-%COMP%]{margin-top:6px!important;line-height:1.45}.print-resume__languages[_ngcontent-%COMP%]{margin-top:4px!important;font-size:10px}.print-resume__location[_ngcontent-%COMP%]{font-size:10px;color:#475569}.print-resume__section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:6px 0 2px;font-size:11px;color:#0f766e}.print-resume__section[_ngcontent-%COMP%]{margin-top:10px;break-inside:avoid-page}.print-resume__section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 4px;padding-bottom:2px;border-bottom:1px solid #cbd5e1;color:#0f766e;font-size:12px;text-transform:uppercase}.print-resume__section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding-left:14px}.print-resume__section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:4px}}"]})}}return n})();A5(pS,at(de({},i8),{providers:[lv(),...i8.providers]})).catch(n=>console.error(n));
