import{$ as m2,A as h3,Aa as n6,B as T4,Ba as qn,C as gs,Ca as se,D as go,Da as _s,E as vo,Ea as Eo,Ga as Ao,I as Mo,Ia as ce,J as ut,Ja as No,K as vs,Ka as Po,L as _o,La as Ro,M as xo,Ma as Io,N as E4,Na as ko,O as J,Oa as Do,P as zo,Pa as Fo,Q as q2,Qa as F3,R as Ms,Ra as Xn,S as yo,Sa as Yn,Ta as Oo,U as Y2,Ua as $n,V as Wn,Va as jn,Wa as Kn,X as I3,Xa as Jn,Y as k3,Ya as Uo,Z as _e,Za as Bo,_ as p2,a as Ne,aa as ht,b as t6,ba as D1,c as po,ca as P1,d as lt,da as j2,ea as t1,fa as a1,ga as K2,ha as Ie,ia as u4,ja as D3,ka as ke,la as b2,ma as bo,na as So,o as w2,oa as e4,p as R3,pa as xe,q as ms,qa as ze,r as Gn,ra as Co,s as Z1,sa as Lo,ta as wo,u as Pe,ua as X3,v as Re,va as To,w as ft,wa as X,xa as O1,y as i6,ya as T2,z as mo,za as dt}from"./chunk-QH6YOW3Z.js";var cl=0,Qs=1,ol=2;var Ii=1,ll=2,y6=3,n0=0,fe=1,D4=2,F4=0,xt=1,e8=2,t8=3,i8=4,fl=5;var R0=100,ul=101,hl=102,dl=103,pl=104,ml=200,gl=201,vl=202,Ml=203,za=204,ya=205,_l=206,xl=207,zl=208,yl=209,bl=210,Sl=211,Cl=212,Ll=213,wl=214,ba=0,Sa=1,Ca=2,zt=3,La=4,wa=5,Ta=6,Ea=7,n8=0,Tl=1,El=2,g4=0,a8=1,r8=2,s8=3,c8=4,o8=5,l8=6,f8=7;var Gs=300,U0=301,bt=302,Za=303,Qa=304,ki=306,Aa=1e3,P4=1001,Na=1002,E3=1003,Al=1004;var Di=1005;var O3=1006,er=1007;var B0=1008;var Ve=1009,u8=1010,h8=1011,b6=1012,tr=1013,v4=1014,M4=1015,O4=1016,ir=1017,nr=1018,S6=1020,d8=35902,p8=35899,m8=1021,g8=1022,i4=1023,R4=1026,H0=1027,v8=1028,ar=1029,V0=1030,rr=1031;var sr=1033,Fi=33776,Oi=33777,Ui=33778,Bi=33779,cr=35840,or=35841,lr=35842,fr=35843,ur=36196,hr=37492,dr=37496,pr=37488,mr=37489,Hi=37490,gr=37491,vr=37808,Mr=37809,_r=37810,xr=37811,zr=37812,yr=37813,br=37814,Sr=37815,Cr=37816,Lr=37817,wr=37818,Tr=37819,Er=37820,Ar=37821,Nr=36492,Pr=36494,Rr=36495,Ir=36283,kr=36284,Vi=36285,Dr=36286;var fi=2300,Pa=2301,xa=2302,Ws=2303,qs=2400,Xs=2401,Ys=2402;var Nl=3200;var M8=0,Pl=1,s0="",Oe="srgb",ui="srgb-linear",hi="linear",A2="srgb";var Mt=7680;var $s=519,Rl=512,Il=513,kl=514,Fr=515,Dl=516,Fl=517,Or=518,Ol=519,js=35044;var _8="300 es",m4=2e3,di=2001;function Fp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Op(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function pi(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ul(){let n=pi("canvas");return n.style.display="block",n}var Ho={},v6=null;function x8(...n){let e="THREE."+n.shift();v6?v6("log",e,...n):console.log(e,...n)}function Bl(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function K1(...n){n=Bl(n);let e="THREE."+n.shift();if(v6)v6("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Q1(...n){n=Bl(n);let e="THREE."+n.shift();if(v6)v6("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function _t(...n){let e=n.join(" ");e in Ho||(Ho[e]=!0,K1(...n))}function Hl(n,e,t){return new Promise(function(i,a){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:a();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Vl={[ba]:Sa,[Ca]:Ta,[La]:Ea,[zt]:wa,[Sa]:ba,[Ta]:Ca,[Ea]:La,[wa]:zt},I4=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let a=i[e];if(a!==void 0){let r=a.indexOf(t);r!==-1&&a.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,e);e.target=null}}},Y3=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var xs=Math.PI/180,Ra=180/Math.PI;function Gi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Y3[n&255]+Y3[n>>8&255]+Y3[n>>16&255]+Y3[n>>24&255]+"-"+Y3[e&255]+Y3[e>>8&255]+"-"+Y3[e>>16&15|64]+Y3[e>>24&255]+"-"+Y3[t&63|128]+Y3[t>>8&255]+"-"+Y3[t>>16&255]+Y3[t>>24&255]+Y3[i&255]+Y3[i>>8&255]+Y3[i>>16&255]+Y3[i>>24&255]).toLowerCase()}function x2(n,e,t){return Math.max(e,Math.min(t,n))}function Up(n,e){return(n%e+e)%e}function zs(n,e,t){return(1-t)*n+t*e}function ri(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ye(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var z2=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=x2(this.x,e.x,t.x),this.y=x2(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=x2(this.x,e,t),this.y=x2(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(x2(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(x2(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),a=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*a+e.x,this.y=r*a+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},k4=class{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,r,s,c){let o=i[a+0],l=i[a+1],f=i[a+2],h=i[a+3],u=r[s+0],d=r[s+1],p=r[s+2],v=r[s+3];if(h!==v||o!==u||l!==d||f!==p){let m=o*u+l*d+f*p+h*v;m<0&&(u=-u,d=-d,p=-p,v=-v,m=-m);let g=1-c;if(m<.9995){let x=Math.acos(m),y=Math.sin(x);g=Math.sin(g*x)/y,c=Math.sin(c*x)/y,o=o*g+u*c,l=l*g+d*c,f=f*g+p*c,h=h*g+v*c}else{o=o*g+u*c,l=l*g+d*c,f=f*g+p*c,h=h*g+v*c;let x=1/Math.sqrt(o*o+l*l+f*f+h*h);o*=x,l*=x,f*=x,h*=x}}e[t]=o,e[t+1]=l,e[t+2]=f,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,a,r,s){let c=i[a],o=i[a+1],l=i[a+2],f=i[a+3],h=r[s],u=r[s+1],d=r[s+2],p=r[s+3];return e[t]=c*p+f*h+o*d-l*u,e[t+1]=o*p+f*u+l*h-c*d,e[t+2]=l*p+f*d+c*u-o*h,e[t+3]=f*p-c*h-o*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,a=e._y,r=e._z,s=e._order,c=Math.cos,o=Math.sin,l=c(i/2),f=c(a/2),h=c(r/2),u=o(i/2),d=o(a/2),p=o(r/2);switch(s){case"XYZ":this._x=u*f*h+l*d*p,this._y=l*d*h-u*f*p,this._z=l*f*p+u*d*h,this._w=l*f*h-u*d*p;break;case"YXZ":this._x=u*f*h+l*d*p,this._y=l*d*h-u*f*p,this._z=l*f*p-u*d*h,this._w=l*f*h+u*d*p;break;case"ZXY":this._x=u*f*h-l*d*p,this._y=l*d*h+u*f*p,this._z=l*f*p+u*d*h,this._w=l*f*h-u*d*p;break;case"ZYX":this._x=u*f*h-l*d*p,this._y=l*d*h+u*f*p,this._z=l*f*p-u*d*h,this._w=l*f*h+u*d*p;break;case"YZX":this._x=u*f*h+l*d*p,this._y=l*d*h+u*f*p,this._z=l*f*p-u*d*h,this._w=l*f*h-u*d*p;break;case"XZY":this._x=u*f*h-l*d*p,this._y=l*d*h-u*f*p,this._z=l*f*p+u*d*h,this._w=l*f*h+u*d*p;break;default:K1("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],a=t[4],r=t[8],s=t[1],c=t[5],o=t[9],l=t[2],f=t[6],h=t[10],u=i+c+h;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(f-o)*d,this._y=(r-l)*d,this._z=(s-a)*d}else if(i>c&&i>h){let d=2*Math.sqrt(1+i-c-h);this._w=(f-o)/d,this._x=.25*d,this._y=(a+s)/d,this._z=(r+l)/d}else if(c>h){let d=2*Math.sqrt(1+c-i-h);this._w=(r-l)/d,this._x=(a+s)/d,this._y=.25*d,this._z=(o+f)/d}else{let d=2*Math.sqrt(1+h-i-c);this._w=(s-a)/d,this._x=(r+l)/d,this._y=(o+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(x2(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,a=e._y,r=e._z,s=e._w,c=t._x,o=t._y,l=t._z,f=t._w;return this._x=i*f+s*c+a*l-r*o,this._y=a*f+s*o+r*c-i*l,this._z=r*f+s*l+i*o-a*c,this._w=s*f-i*c-a*o-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,a=e._y,r=e._z,s=e._w,c=this.dot(e);c<0&&(i=-i,a=-a,r=-r,s=-s,c=-c);let o=1-t;if(c<.9995){let l=Math.acos(c),f=Math.sin(l);o=Math.sin(o*l)/f,t=Math.sin(t*l)/f,this._x=this._x*o+i*t,this._y=this._y*o+a*t,this._z=this._z*o+r*t,this._w=this._w*o+s*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+a*t,this._z=this._z*o+r*t,this._w=this._w*o+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vo.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*a,this.y=r[1]*t+r[4]*i+r[7]*a,this.z=r[2]*t+r[5]*i+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,a=this.z,r=e.elements,s=1/(r[3]*t+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*t+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*t+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(e){let t=this.x,i=this.y,a=this.z,r=e.x,s=e.y,c=e.z,o=e.w,l=2*(s*a-c*i),f=2*(c*t-r*a),h=2*(r*i-s*t);return this.x=t+o*l+s*h-c*f,this.y=i+o*f+c*l-r*h,this.z=a+o*h+r*f-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*a,this.y=r[1]*t+r[5]*i+r[9]*a,this.z=r[2]*t+r[6]*i+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=x2(this.x,e.x,t.x),this.y=x2(this.y,e.y,t.y),this.z=x2(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=x2(this.x,e,t),this.y=x2(this.y,e,t),this.z=x2(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(x2(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,a=e.y,r=e.z,s=t.x,c=t.y,o=t.z;return this.x=a*o-r*c,this.y=r*s-i*o,this.z=i*c-a*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ys.copy(this).projectOnVector(e),this.sub(ys)}reflect(e){return this.sub(ys.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(x2(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ys=new V,Vo=new k4,r2=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,a,r,s,c,o,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,r,s,c,o,l)}set(e,t,i,a,r,s,c,o,l){let f=this.elements;return f[0]=e,f[1]=a,f[2]=c,f[3]=t,f[4]=r,f[5]=o,f[6]=i,f[7]=s,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,a=t.elements,r=this.elements,s=i[0],c=i[3],o=i[6],l=i[1],f=i[4],h=i[7],u=i[2],d=i[5],p=i[8],v=a[0],m=a[3],g=a[6],x=a[1],y=a[4],M=a[7],b=a[2],L=a[5],S=a[8];return r[0]=s*v+c*x+o*b,r[3]=s*m+c*y+o*L,r[6]=s*g+c*M+o*S,r[1]=l*v+f*x+h*b,r[4]=l*m+f*y+h*L,r[7]=l*g+f*M+h*S,r[2]=u*v+d*x+p*b,r[5]=u*m+d*y+p*L,r[8]=u*g+d*M+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],s=e[4],c=e[5],o=e[6],l=e[7],f=e[8];return t*s*f-t*c*l-i*r*f+i*c*o+a*r*l-a*s*o}invert(){let e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],s=e[4],c=e[5],o=e[6],l=e[7],f=e[8],h=f*s-c*l,u=c*o-f*r,d=l*r-s*o,p=t*h+i*u+a*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return e[0]=h*v,e[1]=(a*l-f*i)*v,e[2]=(c*i-a*s)*v,e[3]=u*v,e[4]=(f*t-a*o)*v,e[5]=(a*r-c*t)*v,e[6]=d*v,e[7]=(i*o-l*t)*v,e[8]=(s*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,r,s,c){let o=Math.cos(r),l=Math.sin(r);return this.set(i*o,i*l,-i*(o*s+l*c)+s+e,-a*l,a*o,-a*(-l*s+o*c)+c+t,0,0,1),this}scale(e,t){return _t("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(bs.makeScale(e,t)),this}rotate(e){return _t("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(bs.makeRotation(-e)),this}translate(e,t){return _t("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(bs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},bs=new r2,Go=new r2().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wo=new r2().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bp(){let n={enabled:!0,workingColorSpace:ui,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===A2&&(a.r=i0(a.r),a.g=i0(a.g),a.b=i0(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===A2&&(a.r=g6(a.r),a.g=g6(a.g),a.b=g6(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===s0?hi:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return _t("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return _t("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(a,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ui]:{primaries:e,whitePoint:i,transfer:hi,toXYZ:Go,fromXYZ:Wo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:e,whitePoint:i,transfer:A2,toXYZ:Go,fromXYZ:Wo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}}),n}var M2=Bp();function i0(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function g6(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var a6,Ia=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{a6===void 0&&(a6=pi("canvas")),a6.width=e.width,a6.height=e.height;let a=a6.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=a6}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=pi("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let a=i.getImageData(0,0,e.width,e.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=i0(r[s]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(i0(t[i]/255)*255):t[i]=i0(t[i]);return{data:t,width:e.width,height:e.height}}else return K1("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Hp=0,M6=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=Gi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,c=a.length;s<c;s++)a[s].isDataTexture?r.push(Ss(a[s].image)):r.push(Ss(a[s]))}else r=Ss(a);i.url=r}return t||(e.images[this.uuid]=i),i}};function Ss(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ia.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(K1("Texture: Unable to serialize Texture."),{})}var Vp=0,Cs=new V,c0=(()=>{class n extends I4{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,a=P4,r=P4,s=O3,c=B0,o=i4,l=Ve,f=n.DEFAULT_ANISOTROPY,h=s0){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=Gi(),this.name="",this.source=new M6(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=a,this.wrapT=r,this.magFilter=s,this.minFilter=c,this.anisotropy=f,this.format=o,this.internalFormat=null,this.type=l,this.offset=new z2(0,0),this.repeat=new z2(1,1),this.center=new z2(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new r2,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Cs).x}get height(){return this.source.getSize(Cs).y}get depth(){return this.source.getSize(Cs).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let a=t[i];if(a===void 0){K1(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let r=this[i];if(r===void 0){K1(`Texture.setValues(): property '${i}' does not exist.`);continue}r&&a&&r.isVector2&&a.isVector2||r&&a&&r.isVector3&&a.isVector3||r&&a&&r.isMatrix3&&a.isMatrix3?r.copy(a):this[i]=a}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),i||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gs)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Aa:t.x=t.x-Math.floor(t.x);break;case P4:t.x=t.x<0?0:1;break;case Na:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Aa:t.y=t.y-Math.floor(t.y);break;case P4:t.y=t.y<0?0:1;break;case Na:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=Gs,n.DEFAULT_ANISOTROPY=1,n})(),J2=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,a=1){this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,a=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*t+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*t+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*t+s[7]*i+s[11]*a+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,r,o=e.elements,l=o[0],f=o[4],h=o[8],u=o[1],d=o[5],p=o[9],v=o[2],m=o[6],g=o[10];if(Math.abs(f-u)<.01&&Math.abs(h-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+v)<.1&&Math.abs(p+m)<.1&&Math.abs(l+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,M=(d+1)/2,b=(g+1)/2,L=(f+u)/4,S=(h+v)/4,_=(p+m)/4;return y>M&&y>b?y<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(y),a=L/i,r=S/i):M>b?M<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(M),i=L/a,r=_/a):b<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(b),i=S/r,a=_/r),this.set(i,a,r,t),this}let x=Math.sqrt((m-p)*(m-p)+(h-v)*(h-v)+(u-f)*(u-f));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(h-v)/x,this.z=(u-f)/x,this.w=Math.acos((l+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=x2(this.x,e.x,t.x),this.y=x2(this.y,e.y,t.y),this.z=x2(this.z,e.z,t.z),this.w=x2(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=x2(this.x,e,t),this.y=x2(this.y,e,t),this.z=x2(this.z,e,t),this.w=x2(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(x2(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ka=class extends I4{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:O3,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new J2(0,0,e,t),this.scissorTest=!1,this.viewport=new J2(0,0,e,t),this.textures=[];let a={width:e,height:t,depth:i.depth},r=new c0(a),s=i.count;for(let c=0;c<s;c++)this.textures[c]=r.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:O3,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let a=Object.assign({},e.textures[t].image);this.textures[t].source=new M6(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ue=class extends ka{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},mi=class extends c0{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=E3,this.minFilter=E3,this.wrapR=P4,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Da=class extends c0{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=E3,this.minFilter=E3,this.wrapR=P4,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var r3=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,a,r,s,c,o,l,f,h,u,d,p,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,r,s,c,o,l,f,h,u,d,p,v,m)}set(e,t,i,a,r,s,c,o,l,f,h,u,d,p,v,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=a,g[1]=r,g[5]=s,g[9]=c,g[13]=o,g[2]=l,g[6]=f,g[10]=h,g[14]=u,g[3]=d,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,a=1/r6.setFromMatrixColumn(e,0).length(),r=1/r6.setFromMatrixColumn(e,1).length(),s=1/r6.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,a=e.y,r=e.z,s=Math.cos(i),c=Math.sin(i),o=Math.cos(a),l=Math.sin(a),f=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let u=s*f,d=s*h,p=c*f,v=c*h;t[0]=o*f,t[4]=-o*h,t[8]=l,t[1]=d+p*l,t[5]=u-v*l,t[9]=-c*o,t[2]=v-u*l,t[6]=p+d*l,t[10]=s*o}else if(e.order==="YXZ"){let u=o*f,d=o*h,p=l*f,v=l*h;t[0]=u+v*c,t[4]=p*c-d,t[8]=s*l,t[1]=s*h,t[5]=s*f,t[9]=-c,t[2]=d*c-p,t[6]=v+u*c,t[10]=s*o}else if(e.order==="ZXY"){let u=o*f,d=o*h,p=l*f,v=l*h;t[0]=u-v*c,t[4]=-s*h,t[8]=p+d*c,t[1]=d+p*c,t[5]=s*f,t[9]=v-u*c,t[2]=-s*l,t[6]=c,t[10]=s*o}else if(e.order==="ZYX"){let u=s*f,d=s*h,p=c*f,v=c*h;t[0]=o*f,t[4]=p*l-d,t[8]=u*l+v,t[1]=o*h,t[5]=v*l+u,t[9]=d*l-p,t[2]=-l,t[6]=c*o,t[10]=s*o}else if(e.order==="YZX"){let u=s*o,d=s*l,p=c*o,v=c*l;t[0]=o*f,t[4]=v-u*h,t[8]=p*h+d,t[1]=h,t[5]=s*f,t[9]=-c*f,t[2]=-l*f,t[6]=d*h+p,t[10]=u-v*h}else if(e.order==="XZY"){let u=s*o,d=s*l,p=c*o,v=c*l;t[0]=o*f,t[4]=-h,t[8]=l*f,t[1]=u*h+v,t[5]=s*f,t[9]=d*h-p,t[2]=p*h-d,t[6]=c*f,t[10]=v*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gp,e,Wp)}lookAt(e,t,i){let a=this.elements;return De.subVectors(e,t),De.lengthSq()===0&&(De.z=1),De.normalize(),L0.crossVectors(i,De),L0.lengthSq()===0&&(Math.abs(i.z)===1?De.x+=1e-4:De.z+=1e-4,De.normalize(),L0.crossVectors(i,De)),L0.normalize(),Zn.crossVectors(De,L0),a[0]=L0.x,a[4]=Zn.x,a[8]=De.x,a[1]=L0.y,a[5]=Zn.y,a[9]=De.y,a[2]=L0.z,a[6]=Zn.z,a[10]=De.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,a=t.elements,r=this.elements,s=i[0],c=i[4],o=i[8],l=i[12],f=i[1],h=i[5],u=i[9],d=i[13],p=i[2],v=i[6],m=i[10],g=i[14],x=i[3],y=i[7],M=i[11],b=i[15],L=a[0],S=a[4],_=a[8],C=a[12],T=a[1],P=a[5],R=a[9],q=a[13],j=a[2],D=a[6],I=a[10],N=a[14],O=a[3],Y=a[7],A=a[11],l1=a[15];return r[0]=s*L+c*T+o*j+l*O,r[4]=s*S+c*P+o*D+l*Y,r[8]=s*_+c*R+o*I+l*A,r[12]=s*C+c*q+o*N+l*l1,r[1]=f*L+h*T+u*j+d*O,r[5]=f*S+h*P+u*D+d*Y,r[9]=f*_+h*R+u*I+d*A,r[13]=f*C+h*q+u*N+d*l1,r[2]=p*L+v*T+m*j+g*O,r[6]=p*S+v*P+m*D+g*Y,r[10]=p*_+v*R+m*I+g*A,r[14]=p*C+v*q+m*N+g*l1,r[3]=x*L+y*T+M*j+b*O,r[7]=x*S+y*P+M*D+b*Y,r[11]=x*_+y*R+M*I+b*A,r[15]=x*C+y*q+M*N+b*l1,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],a=e[8],r=e[12],s=e[1],c=e[5],o=e[9],l=e[13],f=e[2],h=e[6],u=e[10],d=e[14],p=e[3],v=e[7],m=e[11],g=e[15],x=o*d-l*u,y=c*d-l*h,M=c*u-o*h,b=s*d-l*f,L=s*u-o*f,S=s*h-c*f;return t*(v*x-m*y+g*M)-i*(p*x-m*b+g*L)+a*(p*y-v*b+g*S)-r*(p*M-v*L+m*S)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],a=e[8],r=e[1],s=e[5],c=e[9],o=e[2],l=e[6],f=e[10];return t*(s*f-c*l)-i*(r*f-c*o)+a*(r*l-s*o)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],s=e[4],c=e[5],o=e[6],l=e[7],f=e[8],h=e[9],u=e[10],d=e[11],p=e[12],v=e[13],m=e[14],g=e[15],x=t*c-i*s,y=t*o-a*s,M=t*l-r*s,b=i*o-a*c,L=i*l-r*c,S=a*l-r*o,_=f*v-h*p,C=f*m-u*p,T=f*g-d*p,P=h*m-u*v,R=h*g-d*v,q=u*g-d*m,j=x*q-y*R+M*P+b*T-L*C+S*_;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/j;return e[0]=(c*q-o*R+l*P)*D,e[1]=(a*R-i*q-r*P)*D,e[2]=(v*S-m*L+g*b)*D,e[3]=(u*L-h*S-d*b)*D,e[4]=(o*T-s*q-l*C)*D,e[5]=(t*q-a*T+r*C)*D,e[6]=(m*M-p*S-g*y)*D,e[7]=(f*S-u*M+d*y)*D,e[8]=(s*R-c*T+l*_)*D,e[9]=(i*T-t*R-r*_)*D,e[10]=(p*L-v*M+g*x)*D,e[11]=(h*M-f*L-d*x)*D,e[12]=(c*C-s*P-o*_)*D,e[13]=(t*P-i*C+a*_)*D,e[14]=(v*y-p*b-m*x)*D,e[15]=(f*b-h*y+u*x)*D,this}scale(e){let t=this.elements,i=e.x,a=e.y,r=e.z;return t[0]*=i,t[4]*=a,t[8]*=r,t[1]*=i,t[5]*=a,t[9]*=r,t[2]*=i,t[6]*=a,t[10]*=r,t[3]*=i,t[7]*=a,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),a=Math.sin(t),r=1-i,s=e.x,c=e.y,o=e.z,l=r*s,f=r*c;return this.set(l*s+i,l*c-a*o,l*o+a*c,0,l*c+a*o,f*c+i,f*o-a*s,0,l*o-a*c,f*o+a*s,r*o*o+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,r,s){return this.set(1,i,r,0,e,1,s,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){let a=this.elements,r=t._x,s=t._y,c=t._z,o=t._w,l=r+r,f=s+s,h=c+c,u=r*l,d=r*f,p=r*h,v=s*f,m=s*h,g=c*h,x=o*l,y=o*f,M=o*h,b=i.x,L=i.y,S=i.z;return a[0]=(1-(v+g))*b,a[1]=(d+M)*b,a[2]=(p-y)*b,a[3]=0,a[4]=(d-M)*L,a[5]=(1-(u+g))*L,a[6]=(m+x)*L,a[7]=0,a[8]=(p+y)*S,a[9]=(m-x)*S,a[10]=(1-(u+v))*S,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){let a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let s=r6.set(a[0],a[1],a[2]).length(),c=r6.set(a[4],a[5],a[6]).length(),o=r6.set(a[8],a[9],a[10]).length();r<0&&(s=-s),h4.copy(this);let l=1/s,f=1/c,h=1/o;return h4.elements[0]*=l,h4.elements[1]*=l,h4.elements[2]*=l,h4.elements[4]*=f,h4.elements[5]*=f,h4.elements[6]*=f,h4.elements[8]*=h,h4.elements[9]*=h,h4.elements[10]*=h,t.setFromRotationMatrix(h4),i.x=s,i.y=c,i.z=o,this}makePerspective(e,t,i,a,r,s,c=m4,o=!1){let l=this.elements,f=2*r/(t-e),h=2*r/(i-a),u=(t+e)/(t-e),d=(i+a)/(i-a),p,v;if(o)p=r/(s-r),v=s*r/(s-r);else if(c===m4)p=-(s+r)/(s-r),v=-2*s*r/(s-r);else if(c===di)p=-s/(s-r),v=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return l[0]=f,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,a,r,s,c=m4,o=!1){let l=this.elements,f=2/(t-e),h=2/(i-a),u=-(t+e)/(t-e),d=-(i+a)/(i-a),p,v;if(o)p=1/(s-r),v=s/(s-r);else if(c===m4)p=-2/(s-r),v=-(s+r)/(s-r);else if(c===di)p=-1/(s-r),v=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return l[0]=f,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},r6=new V,h4=new r3,Gp=new V(0,0,0),Wp=new V(1,1,1),L0=new V,Zn=new V,De=new V,qo=new r3,Xo=new k4,gi=(()=>{class n{constructor(t=0,i=0,a=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=a,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,a,r=this._order){return this._x=t,this._y=i,this._z=a,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,a=!0){let r=t.elements,s=r[0],c=r[4],o=r[8],l=r[1],f=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(i){case"XYZ":this._y=Math.asin(x2(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-c,s)):(this._x=Math.atan2(d,f),this._z=0);break;case"YXZ":this._x=Math.asin(-x2(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,f)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(x2(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-x2(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(x2(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,f),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-x2(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(d,f),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:K1("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,a){return qo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qo,i,a)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Xo.setFromEuler(this),this.setFromQuaternion(Xo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),vi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},qp=0,Yo=new V,s6=new k4,K4=new r3,Qn=new V,si=new V,Xp=new V,Yp=new k4,$o=new V(1,0,0),jo=new V(0,1,0),Ko=new V(0,0,1),Jo={type:"added"},$p={type:"removed"},c6={type:"childadded",child:null},Ls={type:"childremoved",child:null},G0=(()=>{class n extends I4{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new V,i=new gi,a=new k4,r=new V(1,1,1);function s(){a.setFromEuler(i,!1)}function c(){i.setFromQuaternion(a,void 0,!1)}i._onChange(s),a._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new r3},normalMatrix:{value:new r2}}),this.matrix=new r3,this.matrixWorld=new r3,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return s6.setFromAxisAngle(t,i),this.quaternion.multiply(s6),this}rotateOnWorldAxis(t,i){return s6.setFromAxisAngle(t,i),this.quaternion.premultiply(s6),this}rotateX(t){return this.rotateOnAxis($o,t)}rotateY(t){return this.rotateOnAxis(jo,t)}rotateZ(t){return this.rotateOnAxis(Ko,t)}translateOnAxis(t,i){return Yo.copy(t).applyQuaternion(this.quaternion),this.position.add(Yo.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis($o,t)}translateY(t){return this.translateOnAxis(jo,t)}translateZ(t){return this.translateOnAxis(Ko,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(K4.copy(this.matrixWorld).invert())}lookAt(t,i,a){t.isVector3?Qn.copy(t):Qn.set(t,i,a);let r=this.parent;this.updateWorldMatrix(!0,!1),si.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?K4.lookAt(si,Qn,this.up):K4.lookAt(Qn,si,this.up),this.quaternion.setFromRotationMatrix(K4),r&&(K4.extractRotation(r.matrixWorld),s6.setFromRotationMatrix(K4),this.quaternion.premultiply(s6.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Q1("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jo),c6.child=t,this.dispatchEvent(c6),c6.child=null):Q1("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent($p),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),K4.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),K4.multiply(t.parent.matrixWorld)),t.applyMatrix4(K4),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jo),c6.child=t,this.dispatchEvent(c6),c6.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let a=0,r=this.children.length;a<r;a++){let c=this.children[a].getObjectByProperty(t,i);if(c!==void 0)return c}}getObjectsByProperty(t,i,a=[]){this[t]===i&&a.push(this);let r=this.children;for(let s=0,c=r.length;s<c;s++)r[s].getObjectsByProperty(t,i,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(si,t,Xp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(si,Yp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,a=t.y,r=t.z,s=this.matrix.elements;s[12]+=i-s[0]*i-s[4]*a-s[8]*r,s[13]+=a-s[1]*i-s[5]*a-s[9]*r,s[14]+=r-s[2]*i-s[6]*a-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].updateMatrixWorld(t)}updateWorldMatrix(t,i,a=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,a=!0),i===!0){let s=this.children;for(let c=0,o=s.length;c<o;c++)s[c].updateWorldMatrix(!1,!0,a)}}toJSON(t){let i=t===void 0||typeof t=="string",a={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>t6(Ne({},o),{boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>Ne({},o)),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let f=0,h=l.length;f<h;f++){let u=l[f];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,f=this.material.length;l<f;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(t.animations,l))}}if(i){let o=c(t.geometries),l=c(t.materials),f=c(t.textures),h=c(t.images),u=c(t.shapes),d=c(t.skeletons),p=c(t.animations),v=c(t.nodes);o.length>0&&(a.geometries=o),l.length>0&&(a.materials=l),f.length>0&&(a.textures=f),h.length>0&&(a.images=h),u.length>0&&(a.shapes=u),d.length>0&&(a.skeletons=d),p.length>0&&(a.animations=p),v.length>0&&(a.nodes=v)}return a.object=r,a;function c(o){let l=[];for(let f in o){let h=o[f];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let a=0;a<t.children.length;a++){let r=t.children[a];this.add(r.clone())}return this}}return n.DEFAULT_UP=new V(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),t0=class extends G0{constructor(){super(),this.isGroup=!0,this.type="Group"}},jp={type:"move"},_6=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new t0,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new t0,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new t0,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,r=null,s=null,c=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),g=this._getHandJoint(l,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let f=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=f.position.distanceTo(h.position),d=.02,p=.005;l.inputState.pinching&&u>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));c!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(jp)))}return c!==null&&(c.visible=a!==null),o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new t0;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Gl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},w0={h:0,s:0,l:0},ea={h:0,s:0,l:0};function ws(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var S2=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Oe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,M2.colorSpaceToWorking(this,t),this}setRGB(e,t,i,a=M2.workingColorSpace){return this.r=e,this.g=t,this.b=i,M2.colorSpaceToWorking(this,a),this}setHSL(e,t,i,a=M2.workingColorSpace){if(e=Up(e,1),t=x2(t,0,1),i=x2(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=ws(s,r,e+1/3),this.g=ws(s,r,e),this.b=ws(s,r,e-1/3)}return M2.colorSpaceToWorking(this,a),this}setStyle(e,t=Oe){function i(r){r!==void 0&&parseFloat(r)<1&&K1("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,s=a[1],c=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:K1("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);K1("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Oe){let i=Gl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):K1("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=i0(e.r),this.g=i0(e.g),this.b=i0(e.b),this}copyLinearToSRGB(e){return this.r=g6(e.r),this.g=g6(e.g),this.b=g6(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Oe){return M2.workingToColorSpace($3.copy(this),e),Math.round(x2($3.r*255,0,255))*65536+Math.round(x2($3.g*255,0,255))*256+Math.round(x2($3.b*255,0,255))}getHexString(e=Oe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=M2.workingColorSpace){M2.workingToColorSpace($3.copy(this),t);let i=$3.r,a=$3.g,r=$3.b,s=Math.max(i,a,r),c=Math.min(i,a,r),o,l,f=(c+s)/2;if(c===s)o=0,l=0;else{let h=s-c;switch(l=f<=.5?h/(s+c):h/(2-s-c),s){case i:o=(a-r)/h+(a<r?6:0);break;case a:o=(r-i)/h+2;break;case r:o=(i-a)/h+4;break}o/=6}return e.h=o,e.s=l,e.l=f,e}getRGB(e,t=M2.workingColorSpace){return M2.workingToColorSpace($3.copy(this),t),e.r=$3.r,e.g=$3.g,e.b=$3.b,e}getStyle(e=Oe){M2.workingToColorSpace($3.copy(this),e);let t=$3.r,i=$3.g,a=$3.b;return e!==Oe?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(w0),this.setHSL(w0.h+e,w0.s+t,w0.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(w0),e.getHSL(ea);let i=zs(w0.h,ea.h,t),a=zs(w0.s,ea.s,t),r=zs(w0.l,ea.l,t);return this.setHSL(i,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,a=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*a,this.g=r[1]*t+r[4]*i+r[7]*a,this.b=r[2]*t+r[5]*i+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$3=new S2;S2.NAMES=Gl;var Mi=class extends G0{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},d4=new V,J4=new V,Ts=new V,Z4=new V,o6=new V,l6=new V,Zo=new V,Es=new V,As=new V,Ns=new V,Ps=new J2,Rs=new J2,Is=new J2,P0=class n{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),d4.subVectors(e,t),a.cross(d4);let r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,t,i,a,r){d4.subVectors(a,t),J4.subVectors(i,t),Ts.subVectors(e,t);let s=d4.dot(d4),c=d4.dot(J4),o=d4.dot(Ts),l=J4.dot(J4),f=J4.dot(Ts),h=s*l-c*c;if(h===0)return r.set(0,0,0),null;let u=1/h,d=(l*o-c*f)*u,p=(s*f-c*o)*u;return r.set(1-d-p,p,d)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,Z4)===null?!1:Z4.x>=0&&Z4.y>=0&&Z4.x+Z4.y<=1}static getInterpolation(e,t,i,a,r,s,c,o){return this.getBarycoord(e,t,i,a,Z4)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,Z4.x),o.addScaledVector(s,Z4.y),o.addScaledVector(c,Z4.z),o)}static getInterpolatedAttribute(e,t,i,a,r,s){return Ps.setScalar(0),Rs.setScalar(0),Is.setScalar(0),Ps.fromBufferAttribute(e,t),Rs.fromBufferAttribute(e,i),Is.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(Ps,r.x),s.addScaledVector(Rs,r.y),s.addScaledVector(Is,r.z),s}static isFrontFacing(e,t,i,a){return d4.subVectors(i,t),J4.subVectors(e,t),d4.cross(J4).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return d4.subVectors(this.c,this.b),J4.subVectors(this.a,this.b),d4.cross(J4).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,a,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,a=this.b,r=this.c,s,c;o6.subVectors(a,i),l6.subVectors(r,i),Es.subVectors(e,i);let o=o6.dot(Es),l=l6.dot(Es);if(o<=0&&l<=0)return t.copy(i);As.subVectors(e,a);let f=o6.dot(As),h=l6.dot(As);if(f>=0&&h<=f)return t.copy(a);let u=o*h-f*l;if(u<=0&&o>=0&&f<=0)return s=o/(o-f),t.copy(i).addScaledVector(o6,s);Ns.subVectors(e,r);let d=o6.dot(Ns),p=l6.dot(Ns);if(p>=0&&d<=p)return t.copy(r);let v=d*l-o*p;if(v<=0&&l>=0&&p<=0)return c=l/(l-p),t.copy(i).addScaledVector(l6,c);let m=f*p-d*h;if(m<=0&&h-f>=0&&d-p>=0)return Zo.subVectors(r,a),c=(h-f)/(h-f+(d-p)),t.copy(a).addScaledVector(Zo,c);let g=1/(m+v+u);return s=v*g,c=u*g,t.copy(i).addScaledVector(o6,s).addScaledVector(l6,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},I0=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(p4.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(p4.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=p4.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,c=r.count;s<c;s++)e.isMesh===!0?e.getVertexPosition(s,p4):p4.fromBufferAttribute(r,s),p4.applyMatrix4(e.matrixWorld),this.expandByPoint(p4);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ta.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ta.copy(i.boundingBox)),ta.applyMatrix4(e.matrixWorld),this.union(ta)}let a=e.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,p4),p4.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ci),ia.subVectors(this.max,ci),f6.subVectors(e.a,ci),u6.subVectors(e.b,ci),h6.subVectors(e.c,ci),T0.subVectors(u6,f6),E0.subVectors(h6,u6),pt.subVectors(f6,h6);let t=[0,-T0.z,T0.y,0,-E0.z,E0.y,0,-pt.z,pt.y,T0.z,0,-T0.x,E0.z,0,-E0.x,pt.z,0,-pt.x,-T0.y,T0.x,0,-E0.y,E0.x,0,-pt.y,pt.x,0];return!ks(t,f6,u6,h6,ia)||(t=[1,0,0,0,1,0,0,0,1],!ks(t,f6,u6,h6,ia))?!1:(na.crossVectors(T0,E0),t=[na.x,na.y,na.z],ks(t,f6,u6,h6,ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,p4).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(p4).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Q4[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Q4[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Q4[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Q4[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Q4[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Q4[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Q4[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Q4[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Q4),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Q4=[new V,new V,new V,new V,new V,new V,new V,new V],p4=new V,ta=new I0,f6=new V,u6=new V,h6=new V,T0=new V,E0=new V,pt=new V,ci=new V,ia=new V,na=new V,mt=new V;function ks(n,e,t,i,a){for(let r=0,s=n.length-3;r<=s;r+=3){mt.fromArray(n,r);let c=a.x*Math.abs(mt.x)+a.y*Math.abs(mt.y)+a.z*Math.abs(mt.z),o=e.dot(mt),l=t.dot(mt),f=i.dot(mt);if(Math.max(-Math.max(o,l,f),Math.min(o,l,f))>c)return!1}return!0}var v3=new V,aa=new z2,Kp=0,oe=class extends I4{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Kp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=js,this.updateRanges=[],this.gpuType=M4,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)aa.fromBufferAttribute(this,t),aa.applyMatrix3(e),this.setXY(t,aa.x,aa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)v3.fromBufferAttribute(this,t),v3.applyMatrix3(e),this.setXYZ(t,v3.x,v3.y,v3.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)v3.fromBufferAttribute(this,t),v3.applyMatrix4(e),this.setXYZ(t,v3.x,v3.y,v3.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)v3.fromBufferAttribute(this,t),v3.applyNormalMatrix(e),this.setXYZ(t,v3.x,v3.y,v3.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)v3.fromBufferAttribute(this,t),v3.transformDirection(e),this.setXYZ(t,v3.x,v3.y,v3.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ri(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ye(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=ye(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=ye(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ye(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=ye(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ye(t,this.array),i=ye(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=ye(t,this.array),i=ye(i,this.array),a=ye(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,r){return e*=this.itemSize,this.normalized&&(t=ye(t,this.array),i=ye(i,this.array),a=ye(a,this.array),r=ye(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==js&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var _i=class extends oe{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var xi=class extends oe{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var T3=class extends oe{constructor(e,t,i){super(new Float32Array(e),t,i)}},Jp=new I0,oi=new V,Ds=new V,yt=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Jp.setFromPoints(e).getCenter(i);let a=0;for(let r=0,s=e.length;r<s;r++)a=Math.max(a,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oi.subVectors(e,this.center);let t=oi.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(oi,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ds.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oi.copy(e.center).add(Ds)),this.expandByPoint(oi.copy(e.center).sub(Ds))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Zp=0,t4=new r3,Fs=new G0,d6=new V,Fe=new I0,li=new I0,w3=new V,le=class n extends I4{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fp(e)?xi:_i)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new r2().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return t4.makeRotationFromQuaternion(e),this.applyMatrix4(t4),this}rotateX(e){return t4.makeRotationX(e),this.applyMatrix4(t4),this}rotateY(e){return t4.makeRotationY(e),this.applyMatrix4(t4),this}rotateZ(e){return t4.makeRotationZ(e),this.applyMatrix4(t4),this}translate(e,t,i){return t4.makeTranslation(e,t,i),this.applyMatrix4(t4),this}scale(e,t,i){return t4.makeScale(e,t,i),this.applyMatrix4(t4),this}lookAt(e){return Fs.lookAt(e),Fs.updateMatrix(),this.applyMatrix4(Fs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(d6).negate(),this.translate(d6.x,d6.y,d6.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let a=0,r=e.length;a<r;a++){let s=e[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new T3(i,3))}else{let i=Math.min(e.length,t.count);for(let a=0;a<i;a++){let r=e[a];t.setXYZ(a,r.x,r.y,r.z||0)}e.length>t.count&&K1("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new I0);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Q1("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){let r=t[i];Fe.setFromBufferAttribute(r),this.morphTargetsRelative?(w3.addVectors(this.boundingBox.min,Fe.min),this.boundingBox.expandByPoint(w3),w3.addVectors(this.boundingBox.max,Fe.max),this.boundingBox.expandByPoint(w3)):(this.boundingBox.expandByPoint(Fe.min),this.boundingBox.expandByPoint(Fe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Q1('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Q1("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){let i=this.boundingSphere.center;if(Fe.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){let c=t[r];li.setFromBufferAttribute(c),this.morphTargetsRelative?(w3.addVectors(Fe.min,li.min),Fe.expandByPoint(w3),w3.addVectors(Fe.max,li.max),Fe.expandByPoint(w3)):(Fe.expandByPoint(li.min),Fe.expandByPoint(li.max))}Fe.getCenter(i);let a=0;for(let r=0,s=e.count;r<s;r++)w3.fromBufferAttribute(e,r),a=Math.max(a,i.distanceToSquared(w3));if(t)for(let r=0,s=t.length;r<s;r++){let c=t[r],o=this.morphTargetsRelative;for(let l=0,f=c.count;l<f;l++)w3.fromBufferAttribute(c,l),o&&(d6.fromBufferAttribute(e,l),w3.add(d6)),a=Math.max(a,i.distanceToSquared(w3))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Q1('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Q1("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,a=t.normal,r=t.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==i.count)&&(s=new oe(new Float32Array(4*i.count),4),this.setAttribute("tangent",s));let c=[],o=[];for(let _=0;_<i.count;_++)c[_]=new V,o[_]=new V;let l=new V,f=new V,h=new V,u=new z2,d=new z2,p=new z2,v=new V,m=new V;function g(_,C,T){l.fromBufferAttribute(i,_),f.fromBufferAttribute(i,C),h.fromBufferAttribute(i,T),u.fromBufferAttribute(r,_),d.fromBufferAttribute(r,C),p.fromBufferAttribute(r,T),f.sub(l),h.sub(l),d.sub(u),p.sub(u);let P=1/(d.x*p.y-p.x*d.y);isFinite(P)&&(v.copy(f).multiplyScalar(p.y).addScaledVector(h,-d.y).multiplyScalar(P),m.copy(h).multiplyScalar(d.x).addScaledVector(f,-p.x).multiplyScalar(P),c[_].add(v),c[C].add(v),c[T].add(v),o[_].add(m),o[C].add(m),o[T].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let _=0,C=x.length;_<C;++_){let T=x[_],P=T.start,R=T.count;for(let q=P,j=P+R;q<j;q+=3)g(e.getX(q+0),e.getX(q+1),e.getX(q+2))}let y=new V,M=new V,b=new V,L=new V;function S(_){b.fromBufferAttribute(a,_),L.copy(b);let C=c[_];y.copy(C),y.sub(b.multiplyScalar(b.dot(C))).normalize(),M.crossVectors(L,C);let P=M.dot(o[_])<0?-1:1;s.setXYZW(_,y.x,y.y,y.z,P)}for(let _=0,C=x.length;_<C;++_){let T=x[_],P=T.start,R=T.count;for(let q=P,j=P+R;q<j;q+=3)S(e.getX(q+0)),S(e.getX(q+1)),S(e.getX(q+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new oe(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let a=new V,r=new V,s=new V,c=new V,o=new V,l=new V,f=new V,h=new V;if(e)for(let u=0,d=e.count;u<d;u+=3){let p=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);a.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,m),f.subVectors(s,r),h.subVectors(a,r),f.cross(h),c.fromBufferAttribute(i,p),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),c.add(f),o.add(f),l.add(f),i.setXYZ(p,c.x,c.y,c.z),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,d=t.count;u<d;u+=3)a.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),f.subVectors(s,r),h.subVectors(a,r),f.cross(h),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)w3.fromBufferAttribute(e,t),w3.normalize(),e.setXYZ(t,w3.x,w3.y,w3.z)}toNonIndexed(){function e(c,o){let l=c.array,f=c.itemSize,h=c.normalized,u=new l.constructor(o.length*f),d=0,p=0;for(let v=0,m=o.length;v<m;v++){c.isInterleavedBufferAttribute?d=o[v]*c.data.stride+c.offset:d=o[v]*f;for(let g=0;g<f;g++)u[p++]=l[d++]}return new oe(u,f,h)}if(this.index===null)return K1("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,a=this.attributes;for(let c in a){let o=a[c],l=e(o,i);t.setAttribute(c,l)}let r=this.morphAttributes;for(let c in r){let o=[],l=r[c];for(let f=0,h=l.length;f<h;f++){let u=l[f],d=e(u,i);o.push(d)}t.morphAttributes[c]=o}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let c=0,o=s.length;c<o;c++){let l=s[c];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let l in o)o[l]!==void 0&&(e[l]=o[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let o in i){let l=i[o];e.data.attributes[o]=l.toJSON(e.data)}let a={},r=!1;for(let o in this.morphAttributes){let l=this.morphAttributes[o],f=[];for(let h=0,u=l.length;h<u;h++){let d=l[h];f.push(d.toJSON(e.data))}f.length>0&&(a[o]=f,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let a=e.attributes;for(let l in a){let f=a[l];this.setAttribute(l,f.clone(t))}let r=e.morphAttributes;for(let l in r){let f=[],h=r[l];for(let u=0,d=h.length;u<d;u++)f.push(h[u].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let l=0,f=s.length;l<f;l++){let h=s[l];this.addGroup(h.start,h.count,h.materialIndex)}let c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());let o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Qp=0,k0=class extends I4{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=Gi(),this.name="",this.type="Material",this.blending=xt,this.side=n0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=za,this.blendDst=ya,this.blendEquation=R0,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new S2(0,0,0),this.blendAlpha=0,this.depthFunc=zt,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$s,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mt,this.stencilZFail=Mt,this.stencilZPass=Mt,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){K1(`Material: parameter '${t}' has value of undefined.`);continue}let a=this[t];if(a===void 0){K1(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xt&&(i.blending=this.blending),this.side!==n0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==za&&(i.blendSrc=this.blendSrc),this.blendDst!==ya&&(i.blendDst=this.blendDst),this.blendEquation!==R0&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zt&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$s&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mt&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Mt&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Mt&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){let s=[];for(let c in r){let o=r[c];delete o.metadata,s.push(o)}return s}if(t){let r=a(e.textures),s=a(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new S2().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new z2().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new z2().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let a=t.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var e0=new V,Os=new V,ra=new V,A0=new V,Us=new V,sa=new V,Bs=new V,zi=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,e0)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=e0.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(e0.copy(this.origin).addScaledVector(this.direction,t),e0.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){Os.copy(e).add(t).multiplyScalar(.5),ra.copy(t).sub(e).normalize(),A0.copy(this.origin).sub(Os);let r=e.distanceTo(t)*.5,s=-this.direction.dot(ra),c=A0.dot(this.direction),o=-A0.dot(ra),l=A0.lengthSq(),f=Math.abs(1-s*s),h,u,d,p;if(f>0)if(h=s*o-c,u=s*c-o,p=r*f,h>=0)if(u>=-p)if(u<=p){let v=1/f;h*=v,u*=v,d=h*(h+s*u+2*c)+u*(s*h+u+2*o)+l}else u=r,h=Math.max(0,-(s*u+c)),d=-h*h+u*(u+2*o)+l;else u=-r,h=Math.max(0,-(s*u+c)),d=-h*h+u*(u+2*o)+l;else u<=-p?(h=Math.max(0,-(-s*r+c)),u=h>0?-r:Math.min(Math.max(-r,-o),r),d=-h*h+u*(u+2*o)+l):u<=p?(h=0,u=Math.min(Math.max(-r,-o),r),d=u*(u+2*o)+l):(h=Math.max(0,-(s*r+c)),u=h>0?r:Math.min(Math.max(-r,-o),r),d=-h*h+u*(u+2*o)+l);else u=s>0?-r:r,h=Math.max(0,-(s*u+c)),d=-h*h+u*(u+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),a&&a.copy(Os).addScaledVector(ra,u),d}intersectSphere(e,t){e0.subVectors(e.center,this.origin);let i=e0.dot(this.direction),a=e0.dot(e0)-i*i,r=e.radius*e.radius;if(a>r)return null;let s=Math.sqrt(r-a),c=i-s,o=i+s;return o<0?null:c<0?this.at(o,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,r,s,c,o,l=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,a=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,a=(e.min.x-u.x)*l),f>=0?(r=(e.min.y-u.y)*f,s=(e.max.y-u.y)*f):(r=(e.max.y-u.y)*f,s=(e.min.y-u.y)*f),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),h>=0?(c=(e.min.z-u.z)*h,o=(e.max.z-u.z)*h):(c=(e.max.z-u.z)*h,o=(e.min.z-u.z)*h),i>o||c>a)||((c>i||i!==i)&&(i=c),(o<a||a!==a)&&(a=o),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,e0)!==null}intersectTriangle(e,t,i,a,r){Us.subVectors(t,e),sa.subVectors(i,e),Bs.crossVectors(Us,sa);let s=this.direction.dot(Bs),c;if(s>0){if(a)return null;c=1}else if(s<0)c=-1,s=-s;else return null;A0.subVectors(this.origin,e);let o=c*this.direction.dot(sa.crossVectors(A0,sa));if(o<0)return null;let l=c*this.direction.dot(Us.cross(A0));if(l<0||o+l>s)return null;let f=-c*A0.dot(Bs);return f<0?null:this.at(f/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},a0=class extends k0{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new S2(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=n8,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Qo=new r3,gt=new zi,ca=new yt,el=new V,oa=new V,la=new V,fa=new V,Hs=new V,ua=new V,tl=new V,ha=new V,U3=class extends G0{constructor(e=new le,t=new a0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){let c=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}getVertexPosition(e,t){let i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(a,e);let c=this.morphTargetInfluences;if(r&&c){ua.set(0,0,0);for(let o=0,l=r.length;o<l;o++){let f=c[o],h=r[o];f!==0&&(Hs.fromBufferAttribute(h,e),s?ua.addScaledVector(Hs,f):ua.addScaledVector(Hs.sub(t),f))}t.add(ua)}return t}raycast(e,t){let i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ca.copy(i.boundingSphere),ca.applyMatrix4(r),gt.copy(e.ray).recast(e.near),!(ca.containsPoint(gt.origin)===!1&&(gt.intersectSphere(ca,el)===null||gt.origin.distanceToSquared(el)>(e.far-e.near)**2))&&(Qo.copy(r).invert(),gt.copy(e.ray).applyMatrix4(Qo),!(i.boundingBox!==null&&gt.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,gt)))}_computeIntersections(e,t,i){let a,r=this.geometry,s=this.material,c=r.index,o=r.attributes.position,l=r.attributes.uv,f=r.attributes.uv1,h=r.attributes.normal,u=r.groups,d=r.drawRange;if(c!==null)if(Array.isArray(s))for(let p=0,v=u.length;p<v;p++){let m=u[p],g=s[m.materialIndex],x=Math.max(m.start,d.start),y=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let M=x,b=y;M<b;M+=3){let L=c.getX(M),S=c.getX(M+1),_=c.getX(M+2);a=da(this,g,e,i,l,f,h,L,S,_),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{let p=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=p,g=v;m<g;m+=3){let x=c.getX(m),y=c.getX(m+1),M=c.getX(m+2);a=da(this,s,e,i,l,f,h,x,y,M),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(o!==void 0)if(Array.isArray(s))for(let p=0,v=u.length;p<v;p++){let m=u[p],g=s[m.materialIndex],x=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let M=x,b=y;M<b;M+=3){let L=M,S=M+1,_=M+2;a=da(this,g,e,i,l,f,h,L,S,_),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{let p=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=p,g=v;m<g;m+=3){let x=m,y=m+1,M=m+2;a=da(this,s,e,i,l,f,h,x,y,M),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}};function em(n,e,t,i,a,r,s,c){let o;if(e.side===fe?o=i.intersectTriangle(s,r,a,!0,c):o=i.intersectTriangle(a,r,s,e.side===n0,c),o===null)return null;ha.copy(c),ha.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(ha);return l<t.near||l>t.far?null:{distance:l,point:ha.clone(),object:n}}function da(n,e,t,i,a,r,s,c,o,l){n.getVertexPosition(c,oa),n.getVertexPosition(o,la),n.getVertexPosition(l,fa);let f=em(n,e,t,i,oa,la,fa,tl);if(f){let h=new V;P0.getBarycoord(tl,oa,la,fa,h),a&&(f.uv=P0.getInterpolatedAttribute(a,c,o,l,h,new z2)),r&&(f.uv1=P0.getInterpolatedAttribute(r,c,o,l,h,new z2)),s&&(f.normal=P0.getInterpolatedAttribute(s,c,o,l,h,new V),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let u={a:c,b:o,c:l,normal:new V,materialIndex:0};P0.getNormal(oa,la,fa,u.normal),f.face=u,f.barycoord=h}return f}var Fa=class extends c0{constructor(e=null,t=1,i=1,a,r,s,c,o,l=E3,f=E3,h,u){super(null,s,c,o,l,f,a,r,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vs=new V,tm=new V,im=new r2,N4=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let a=Vs.subVectors(i,t).cross(tm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let a=e.delta(Vs),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(a,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||im.getNormalMatrix(e),a=this.coplanarPoint(Vs).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},vt=new yt,nm=new z2(.5,.5),pa=new V,yi=class{constructor(e=new N4,t=new N4,i=new N4,a=new N4,r=new N4,s=new N4){this.planes=[e,t,i,a,r,s]}set(e,t,i,a,r,s){let c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(a),c[4].copy(r),c[5].copy(s),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=m4,i=!1){let a=this.planes,r=e.elements,s=r[0],c=r[1],o=r[2],l=r[3],f=r[4],h=r[5],u=r[6],d=r[7],p=r[8],v=r[9],m=r[10],g=r[11],x=r[12],y=r[13],M=r[14],b=r[15];if(a[0].setComponents(l-s,d-f,g-p,b-x).normalize(),a[1].setComponents(l+s,d+f,g+p,b+x).normalize(),a[2].setComponents(l+c,d+h,g+v,b+y).normalize(),a[3].setComponents(l-c,d-h,g-v,b-y).normalize(),i)a[4].setComponents(o,u,m,M).normalize(),a[5].setComponents(l-o,d-u,g-m,b-M).normalize();else if(a[4].setComponents(l-o,d-u,g-m,b-M).normalize(),t===m4)a[5].setComponents(l+o,d+u,g+m,b+M).normalize();else if(t===di)a[5].setComponents(o,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vt.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vt.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vt)}intersectsSprite(e){vt.center.set(0,0,0);let t=nm.distanceTo(e.center);return vt.radius=.7071067811865476+t,vt.applyMatrix4(e.matrixWorld),this.intersectsSphere(vt)}intersectsSphere(e){let t=this.planes,i=e.center,a=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let a=t[i];if(pa.x=a.normal.x>0?e.max.x:e.min.x,pa.y=a.normal.y>0?e.max.y:e.min.y,pa.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(pa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var x6=class extends k0{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new S2(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},il=new r3,Ks=new zi,ma=new yt,ga=new V,bi=class extends G0{constructor(e=new le,t=new x6){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,a=this.matrixWorld,r=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ma.copy(i.boundingSphere),ma.applyMatrix4(a),ma.radius+=r,e.ray.intersectsSphere(ma)===!1)return;il.copy(a).invert(),Ks.copy(e.ray).applyMatrix4(il);let c=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=c*c,l=i.index,h=i.attributes.position;if(l!==null){let u=Math.max(0,s.start),d=Math.min(l.count,s.start+s.count);for(let p=u,v=d;p<v;p++){let m=l.getX(p);ga.fromBufferAttribute(h,m),nl(ga,m,o,a,e,t,this)}}else{let u=Math.max(0,s.start),d=Math.min(h.count,s.start+s.count);for(let p=u,v=d;p<v;p++)ga.fromBufferAttribute(h,p),nl(ga,p,o,a,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){let c=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}};function nl(n,e,t,i,a,r,s){let c=Ks.distanceSqToPoint(n);if(c<t){let o=new V;Ks.closestPointToPoint(n,o),o.applyMatrix4(i);let l=a.ray.origin.distanceTo(o);if(l<a.near||l>a.far)return;r.push({distance:l,distanceToRay:Math.sqrt(c),point:o,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}var Si=class extends c0{constructor(e=[],t=U0,i,a,r,s,c,o,l,f){super(e,t,i,a,r,s,c,o,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var r0=class extends c0{constructor(e,t,i=v4,a,r,s,c=E3,o=E3,l,f=R4,h=1){if(f!==R4&&f!==H0)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:h};super(u,a,r,s,c,o,f,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new M6(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Oa=class extends r0{constructor(e,t=v4,i=U0,a,r,s=E3,c=E3,o,l=R4){let f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,t,i,a,r,s,c,o,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ci=class extends c0{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},z6=class n extends le{constructor(e=1,t=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};let c=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);let o=[],l=[],f=[],h=[],u=0,d=0;p("z","y","x",-1,-1,i,t,e,s,r,0),p("z","y","x",1,-1,i,t,-e,s,r,1),p("x","z","y",1,1,e,i,t,a,s,2),p("x","z","y",1,-1,e,i,-t,a,s,3),p("x","y","z",1,-1,e,t,i,a,r,4),p("x","y","z",-1,-1,e,t,-i,a,r,5),this.setIndex(o),this.setAttribute("position",new T3(l,3)),this.setAttribute("normal",new T3(f,3)),this.setAttribute("uv",new T3(h,2));function p(v,m,g,x,y,M,b,L,S,_,C){let T=M/S,P=b/_,R=M/2,q=b/2,j=L/2,D=S+1,I=_+1,N=0,O=0,Y=new V;for(let A=0;A<I;A++){let l1=A*P-q;for(let d1=0;d1<D;d1++){let $1=d1*T-R;Y[v]=$1*x,Y[m]=l1*y,Y[g]=j,l.push(Y.x,Y.y,Y.z),Y[v]=0,Y[m]=0,Y[g]=L>0?1:-1,f.push(Y.x,Y.y,Y.z),h.push(d1/S),h.push(1-A/_),N+=1}}for(let A=0;A<_;A++)for(let l1=0;l1<S;l1++){let d1=u+l1+D*A,$1=u+l1+D*(A+1),A1=u+(l1+1)+D*(A+1),j1=u+(l1+1)+D*A;o.push(d1,$1,j1),o.push($1,A1,j1),O+=6}c.addGroup(d,O,C),d+=O,u+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Li=class n extends le{constructor(e=[],t=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:a};let r=[],s=[];c(a),l(i),f(),this.setAttribute("position",new T3(r,3)),this.setAttribute("normal",new T3(r.slice(),3)),this.setAttribute("uv",new T3(s,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function c(x){let y=new V,M=new V,b=new V;for(let L=0;L<t.length;L+=3)d(t[L+0],y),d(t[L+1],M),d(t[L+2],b),o(y,M,b,x)}function o(x,y,M,b){let L=b+1,S=[];for(let _=0;_<=L;_++){S[_]=[];let C=x.clone().lerp(M,_/L),T=y.clone().lerp(M,_/L),P=L-_;for(let R=0;R<=P;R++)R===0&&_===L?S[_][R]=C:S[_][R]=C.clone().lerp(T,R/P)}for(let _=0;_<L;_++)for(let C=0;C<2*(L-_)-1;C++){let T=Math.floor(C/2);C%2===0?(u(S[_][T+1]),u(S[_+1][T]),u(S[_][T])):(u(S[_][T+1]),u(S[_+1][T+1]),u(S[_+1][T]))}}function l(x){let y=new V;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(x),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function f(){let x=new V;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];let M=m(x)/2/Math.PI+.5,b=g(x)/Math.PI+.5;s.push(M,1-b)}p(),h()}function h(){for(let x=0;x<s.length;x+=6){let y=s[x+0],M=s[x+2],b=s[x+4],L=Math.max(y,M,b),S=Math.min(y,M,b);L>.9&&S<.1&&(y<.2&&(s[x+0]+=1),M<.2&&(s[x+2]+=1),b<.2&&(s[x+4]+=1))}}function u(x){r.push(x.x,x.y,x.z)}function d(x,y){let M=x*3;y.x=e[M+0],y.y=e[M+1],y.z=e[M+2]}function p(){let x=new V,y=new V,M=new V,b=new V,L=new z2,S=new z2,_=new z2;for(let C=0,T=0;C<r.length;C+=9,T+=6){x.set(r[C+0],r[C+1],r[C+2]),y.set(r[C+3],r[C+4],r[C+5]),M.set(r[C+6],r[C+7],r[C+8]),L.set(s[T+0],s[T+1]),S.set(s[T+2],s[T+3]),_.set(s[T+4],s[T+5]),b.copy(x).add(y).add(M).divideScalar(3);let P=m(b);v(L,T+0,x,P),v(S,T+2,y,P),v(_,T+4,M,P)}}function v(x,y,M,b){b<0&&x.x===1&&(s[y]=x.x-1),M.x===0&&M.z===0&&(s[y]=b/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function g(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var wi=class n extends Li{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,a=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Ti=class n extends Li{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,a,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Ei=class n extends le{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};let r=e/2,s=t/2,c=Math.floor(i),o=Math.floor(a),l=c+1,f=o+1,h=e/c,u=t/o,d=[],p=[],v=[],m=[];for(let g=0;g<f;g++){let x=g*u-s;for(let y=0;y<l;y++){let M=y*h-r;p.push(M,-x,0),v.push(0,0,1),m.push(y/c),m.push(1-g/o)}}for(let g=0;g<o;g++)for(let x=0;x<c;x++){let y=x+l*g,M=x+l*(g+1),b=x+1+l*(g+1),L=x+1+l*g;d.push(y,M,L),d.push(M,b,L)}this.setIndex(d),this.setAttribute("position",new T3(p,3)),this.setAttribute("normal",new T3(v,3)),this.setAttribute("uv",new T3(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ai=class n extends le{constructor(e=1,t=.4,i=12,a=48,r=Math.PI*2,s=0,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:a,arc:r,thetaStart:s,thetaLength:c},i=Math.floor(i),a=Math.floor(a);let o=[],l=[],f=[],h=[],u=new V,d=new V,p=new V;for(let v=0;v<=i;v++){let m=s+v/i*c;for(let g=0;g<=a;g++){let x=g/a*r;d.x=(e+t*Math.cos(m))*Math.cos(x),d.y=(e+t*Math.cos(m))*Math.sin(x),d.z=t*Math.sin(m),l.push(d.x,d.y,d.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),p.subVectors(d,u).normalize(),f.push(p.x,p.y,p.z),h.push(g/a),h.push(v/i)}}for(let v=1;v<=i;v++)for(let m=1;m<=a;m++){let g=(a+1)*v+m-1,x=(a+1)*(v-1)+m-1,y=(a+1)*(v-1)+m,M=(a+1)*v+m;o.push(g,x,M),o.push(x,y,M)}this.setIndex(o),this.setAttribute("position",new T3(l,3)),this.setAttribute("normal",new T3(f,3)),this.setAttribute("uv",new T3(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};function St(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let a=n[t][i];if(al(a))a.isRenderTargetTexture?(K1("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone();else if(Array.isArray(a))if(al(a[0])){let r=[];for(let s=0,c=a.length;s<c;s++)r[s]=a[s].clone();e[t][i]=r}else e[t][i]=a.slice();else e[t][i]=a}}return e}function K3(n){let e={};for(let t=0;t<n.length;t++){let i=St(n[t]);for(let a in i)e[a]=i[a]}return e}function al(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function am(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function z8(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:M2.workingColorSpace}var Wl={clone:St,merge:K3},rm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Be=class extends k0{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rm,this.fragmentShader=sm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=St(e.uniforms),this.uniformsGroups=am(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let a in this.uniforms){let s=this.uniforms[a].value;s&&s.isTexture?t.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[a]={type:"m4",value:s.toArray()}:t.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let a=e.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=t[a.value]||null;break;case"c":this.uniforms[i].value=new S2().setHex(a.value);break;case"v2":this.uniforms[i].value=new z2().fromArray(a.value);break;case"v3":this.uniforms[i].value=new V().fromArray(a.value);break;case"v4":this.uniforms[i].value=new J2().fromArray(a.value);break;case"m3":this.uniforms[i].value=new r2().fromArray(a.value);break;case"m4":this.uniforms[i].value=new r3().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ua=class extends Be{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ba=class extends k0{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ha=class extends k0{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function va(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}var D0=class{constructor(e,t,i,a){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=a!==void 0?a:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,a=t[i],r=t[i-1];i:{e:{let s;t:{n:if(!(e<a)){for(let c=i+2;;){if(a===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===c)break;if(r=a,a=t[++i],e<a)break e}s=t.length;break t}if(!(e>=r)){let c=t[1];e<c&&(i=2,r=c);for(let o=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(a=r,r=t[--i-1],e>=r)break e}s=i,i=0;break t}break i}for(;i<s;){let c=i+s>>>1;e<t[c]?s=c:i=c+1}if(a=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,a)}return this.interpolate_(i,r,e,a)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,a=this.valueSize,r=e*a;for(let s=0;s!==a;++s)t[s]=i[r+s];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Va=class extends D0{constructor(e,t,i,a){super(e,t,i,a),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qs,endingEnd:qs}}intervalChanged_(e,t,i){let a=this.parameterPositions,r=e-2,s=e+1,c=a[r],o=a[s];if(c===void 0)switch(this.getSettings_().endingStart){case Xs:r=e,c=2*t-i;break;case Ys:r=a.length-2,c=t+a[r]-a[r+1];break;default:r=e,c=i}if(o===void 0)switch(this.getSettings_().endingEnd){case Xs:s=e,o=2*i-t;break;case Ys:s=1,o=i+a[1]-a[0];break;default:s=e-1,o=t}let l=(i-t)*.5,f=this.valueSize;this._weightPrev=l/(t-c),this._weightNext=l/(o-i),this._offsetPrev=r*f,this._offsetNext=s*f}interpolate_(e,t,i,a){let r=this.resultBuffer,s=this.sampleValues,c=this.valueSize,o=e*c,l=o-c,f=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(i-t)/(a-t),v=p*p,m=v*p,g=-u*m+2*u*v-u*p,x=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*p+1,y=(-1-d)*m+(1.5+d)*v+.5*p,M=d*m-d*v;for(let b=0;b!==c;++b)r[b]=g*s[f+b]+x*s[l+b]+y*s[o+b]+M*s[h+b];return r}},Ga=class extends D0{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e,t,i,a){let r=this.resultBuffer,s=this.sampleValues,c=this.valueSize,o=e*c,l=o-c,f=(i-t)/(a-t),h=1-f;for(let u=0;u!==c;++u)r[u]=s[l+u]*h+s[o+u]*f;return r}},Wa=class extends D0{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e){return this.copySampleValue_(e-1)}},qa=class extends D0{interpolate_(e,t,i,a){let r=this.resultBuffer,s=this.sampleValues,c=this.valueSize,o=e*c,l=o-c,f=this.inTangents,h=this.outTangents;if(!f||!h){let p=(i-t)/(a-t),v=1-p;for(let m=0;m!==c;++m)r[m]=s[l+m]*v+s[o+m]*p;return r}let u=c*2,d=e-1;for(let p=0;p!==c;++p){let v=s[l+p],m=s[o+p],g=d*u+p*2,x=h[g],y=h[g+1],M=e*u+p*2,b=f[M],L=f[M+1],S=(i-t)/(a-t),_,C,T,P,R;for(let q=0;q<8;q++){_=S*S,C=_*S,T=1-S,P=T*T,R=P*T;let D=R*t+3*P*S*x+3*T*_*b+C*a-i;if(Math.abs(D)<1e-10)break;let I=3*P*(x-t)+6*T*S*(b-x)+3*_*(a-b);if(Math.abs(I)<1e-10)break;S=S-D/I,S=Math.max(0,Math.min(1,S))}r[p]=R*v+3*P*S*y+3*T*_*L+C*m}return r}},He=class{constructor(e,t,i,a){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=va(t,this.TimeBufferType),this.values=va(i,this.ValueBufferType),this.setInterpolation(a||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:va(e.times,Array),values:va(e.values,Array)};let a=e.getInterpolation();a!==e.DefaultInterpolation&&(i.interpolation=a)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Wa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ga(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Va(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new qa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case fi:t=this.InterpolantFactoryMethodDiscrete;break;case Pa:t=this.InterpolantFactoryMethodLinear;break;case xa:t=this.InterpolantFactoryMethodSmooth;break;case Ws:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return K1("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fi;case this.InterpolantFactoryMethodLinear:return Pa;case this.InterpolantFactoryMethodSmooth:return xa;case this.InterpolantFactoryMethodBezier:return Ws}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,a=t.length;i!==a;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,a=t.length;i!==a;++i)t[i]*=e}return this}trim(e,t){let i=this.times,a=i.length,r=0,s=a-1;for(;r!==a&&i[r]<e;)++r;for(;s!==-1&&i[s]>t;)--s;if(++s,r!==0||s!==a){r>=s&&(s=Math.max(s,1),r=s-1);let c=this.getValueSize();this.times=i.slice(r,s),this.values=this.values.slice(r*c,s*c)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Q1("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,a=this.values,r=i.length;r===0&&(Q1("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let c=0;c!==r;c++){let o=i[c];if(typeof o=="number"&&isNaN(o)){Q1("KeyframeTrack: Time is not a valid number.",this,c,o),e=!1;break}if(s!==null&&s>o){Q1("KeyframeTrack: Out of order keys.",this,c,o,s),e=!1;break}s=o}if(a!==void 0&&Op(a))for(let c=0,o=a.length;c!==o;++c){let l=a[c];if(isNaN(l)){Q1("KeyframeTrack: Value is not a valid number.",this,c,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),a=this.getInterpolation()===xa,r=e.length-1,s=1;for(let c=1;c<r;++c){let o=!1,l=e[c],f=e[c+1];if(l!==f&&(c!==1||l!==e[0]))if(a)o=!0;else{let h=c*i,u=h-i,d=h+i;for(let p=0;p!==i;++p){let v=t[h+p];if(v!==t[u+p]||v!==t[d+p]){o=!0;break}}}if(o){if(c!==s){e[s]=e[c];let h=c*i,u=s*i;for(let d=0;d!==i;++d)t[u+d]=t[h+d]}++s}}if(r>0){e[s]=e[r];for(let c=r*i,o=s*i,l=0;l!==i;++l)t[o+l]=t[c+l];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,a=new i(this.name,e,t);return a.createInterpolant=this.createInterpolant,a}};He.prototype.ValueTypeName="";He.prototype.TimeBufferType=Float32Array;He.prototype.ValueBufferType=Float32Array;He.prototype.DefaultInterpolation=Pa;var F0=class extends He{constructor(e,t,i){super(e,t,i)}};F0.prototype.ValueTypeName="bool";F0.prototype.ValueBufferType=Array;F0.prototype.DefaultInterpolation=fi;F0.prototype.InterpolantFactoryMethodLinear=void 0;F0.prototype.InterpolantFactoryMethodSmooth=void 0;var Xa=class extends He{constructor(e,t,i,a){super(e,t,i,a)}};Xa.prototype.ValueTypeName="color";var Ya=class extends He{constructor(e,t,i,a){super(e,t,i,a)}};Ya.prototype.ValueTypeName="number";var $a=class extends D0{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e,t,i,a){let r=this.resultBuffer,s=this.sampleValues,c=this.valueSize,o=(i-t)/(a-t),l=e*c;for(let f=l+c;l!==f;l+=4)k4.slerpFlat(r,0,s,l-c,s,l,o);return r}},Ni=class extends He{constructor(e,t,i,a){super(e,t,i,a)}InterpolantFactoryMethodLinear(e){return new $a(this.times,this.values,this.getValueSize(),e)}};Ni.prototype.ValueTypeName="quaternion";Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var O0=class extends He{constructor(e,t,i){super(e,t,i)}};O0.prototype.ValueTypeName="string";O0.prototype.ValueBufferType=Array;O0.prototype.DefaultInterpolation=fi;O0.prototype.InterpolantFactoryMethodLinear=void 0;O0.prototype.InterpolantFactoryMethodSmooth=void 0;var ja=class extends He{constructor(e,t,i,a){super(e,t,i,a)}};ja.prototype.ValueTypeName="vector";var Ma=new V,_a=new k4,A4=new V,Pi=class extends G0{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new r3,this.projectionMatrix=new r3,this.projectionMatrixInverse=new r3,this.coordinateSystem=m4,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ma,_a,A4),A4.x===1&&A4.y===1&&A4.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ma,_a,A4.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ma,_a,A4),A4.x===1&&A4.y===1&&A4.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ma,_a,A4.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},N0=new V,rl=new z2,sl=new z2,j3=class extends Pi{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ra*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(xs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ra*2*Math.atan(Math.tan(xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){N0.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(N0.x,N0.y).multiplyScalar(-e/N0.z),N0.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(N0.x,N0.y).multiplyScalar(-e/N0.z)}getViewSize(e,t){return this.getViewBounds(e,rl,sl),t.subVectors(sl,rl)}setViewOffset(e,t,i,a,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(xs*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,r=-.5*a,s=this.view;if(this.view!==null&&this.view.enabled){let o=s.fullWidth,l=s.fullHeight;r+=s.offsetX*a/o,t-=s.offsetY*i/l,a*=s.width/o,i*=s.height/l}let c=this.filmOffset;c!==0&&(r+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Ri=class extends Pi{constructor(e=-1,t=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2,r=i-e,s=i+e,c=a+t,o=a-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,c-=f*this.view.offsetY,o=c-f*this.view.height}this.projectionMatrix.makeOrthographic(r,s,c,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var p6=-90,m6=1,Ka=class extends G0{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let a=new j3(p6,m6,e,t);a.layers=this.layers,this.add(a);let r=new j3(p6,m6,e,t);r.layers=this.layers,this.add(r);let s=new j3(p6,m6,e,t);s.layers=this.layers,this.add(s);let c=new j3(p6,m6,e,t);c.layers=this.layers,this.add(c);let o=new j3(p6,m6,e,t);o.layers=this.layers,this.add(o);let l=new j3(p6,m6,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,a,r,s,c,o]=t;for(let l of t)this.remove(l);if(e===m4)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===di)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,s,c,o,l,f]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,2,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,3,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(h,u,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Ja=class extends j3{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var y8="\\[\\]\\.:\\/",cm=new RegExp("["+y8+"]","g"),b8="[^"+y8+"]",om="[^"+y8.replace("\\.","")+"]",lm=/((?:WC+[\/:])*)/.source.replace("WC",b8),fm=/(WCOD+)?/.source.replace("WCOD",om),um=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",b8),hm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",b8),dm=new RegExp("^"+lm+fm+um+hm+"$"),pm=["material","materials","bones","map"],Js=class{constructor(e,t,i){let a=i||a3.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,a)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,a=this._bindings[i];a!==void 0&&a.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let a=this._targetGroup.nCachedObjects_,r=i.length;a!==r;++a)i[a].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},a3=(()=>{class n{constructor(t,i,a){this.path=i,this.parsedPath=a||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,a){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,a):new n(t,i,a)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(cm,"")}static parseTrackName(t){let i=dm.exec(t);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let a={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},r=a.nodeName&&a.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=a.nodeName.substring(r+1);pm.indexOf(s)!==-1&&(a.nodeName=a.nodeName.substring(0,r),a.objectName=s)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return a}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let a=t.skeleton.getBoneByName(i);if(a!==void 0)return a}if(t.children){let a=function(s){for(let c=0;c<s.length;c++){let o=s[c];if(o.name===i||o.uuid===i)return o;let l=a(o.children);if(l)return l}return null},r=a(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let a=this.resolvedProperty;for(let r=0,s=a.length;r!==s;++r)t[i++]=a[r]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let a=this.resolvedProperty;for(let r=0,s=a.length;r!==s;++r)a[r]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let a=this.resolvedProperty;for(let r=0,s=a.length;r!==s;++r)a[r]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let a=this.resolvedProperty;for(let r=0,s=a.length;r!==s;++r)a[r]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,a=i.objectName,r=i.propertyName,s=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){K1("PropertyBinding: No target node found for track: "+this.path+".");return}if(a){let f=i.objectIndex;switch(a){case"materials":if(!t.material){Q1("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Q1("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Q1("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===f){f=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Q1("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Q1("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[a]===void 0){Q1("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[a]}if(f!==void 0){if(t[f]===void 0){Q1("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[f]}}let c=t[r];if(c===void 0){let f=i.nodeName;Q1("PropertyBinding: Trying to update property for track: "+f+"."+r+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Q1("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Q1("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=s}else c.fromArray!==void 0&&c.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(l=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=Js,n})();a3.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};a3.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};a3.prototype.GetterByBindingType=[a3.prototype._getValue_direct,a3.prototype._getValue_array,a3.prototype._getValue_arrayElement,a3.prototype._getValue_toArray];a3.prototype.SetterByBindingTypeAndVersioning=[[a3.prototype._setValue_direct,a3.prototype._setValue_direct_setNeedsUpdate,a3.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[a3.prototype._setValue_array,a3.prototype._setValue_array_setNeedsUpdate,a3.prototype._setValue_array_setMatrixWorldNeedsUpdate],[a3.prototype._setValue_arrayElement,a3.prototype._setValue_arrayElement_setNeedsUpdate,a3.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[a3.prototype._setValue_fromArray,a3.prototype._setValue_fromArray_setNeedsUpdate,a3.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bT=new Float32Array(1);var Zs=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,a){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=a,this}};function S8(n,e,t,i){let a=mm(i);switch(t){case m8:return n*e;case v8:return n*e/a.components*a.byteLength;case ar:return n*e/a.components*a.byteLength;case V0:return n*e*2/a.components*a.byteLength;case rr:return n*e*2/a.components*a.byteLength;case g8:return n*e*3/a.components*a.byteLength;case i4:return n*e*4/a.components*a.byteLength;case sr:return n*e*4/a.components*a.byteLength;case Fi:case Oi:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ui:case Bi:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case or:case fr:return Math.max(n,16)*Math.max(e,8)/4;case cr:case lr:return Math.max(n,8)*Math.max(e,8)/2;case ur:case hr:case pr:case mr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case dr:case Hi:case gr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Mr:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case _r:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case xr:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case zr:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case yr:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case br:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Sr:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Cr:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Lr:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case wr:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Tr:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Er:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ar:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Nr:case Pr:case Rr:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ir:case kr:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Vi:case Dr:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mm(n){switch(n){case Ve:case u8:return{byteLength:1,components:1};case b6:case h8:case O4:return{byteLength:2,components:1};case ir:case nr:return{byteLength:2,components:4};case v4:case tr:case M4:return{byteLength:4,components:1};case d8:case p8:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?K1("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function d9(){let n=null,e=!1,t=null,i=null;function a(r,s){t(r,s),i=n.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function vm(n){let e=new WeakMap;function t(c,o){let l=c.array,f=c.usage,h=l.byteLength,u=n.createBuffer();n.bindBuffer(o,u),n.bufferData(o,l,f),c.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)c.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:c.version,size:h}}function i(c,o,l){let f=o.array,h=o.updateRanges;if(n.bindBuffer(l,c),h.length===0)n.bufferSubData(l,0,f);else{h.sort((d,p)=>d.start-p.start);let u=0;for(let d=1;d<h.length;d++){let p=h[u],v=h[d];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++u,h[u]=v)}h.length=u+1;for(let d=0,p=h.length;d<p;d++){let v=h[d];n.bufferSubData(l,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}o.clearUpdateRanges()}o.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);let o=e.get(c);o&&(n.deleteBuffer(o.buffer),e.delete(c))}function s(c,o){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){let f=e.get(c);(!f||f.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}let l=e.get(c);if(l===void 0)e.set(c,t(c,o));else if(l.version<c.version){if(l.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,c,o),l.version=c.version}}return{get:a,remove:r,update:s}}var Mm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_m=`#ifdef USE_ALPHAHASH
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
#endif`,xm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ym=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sm=`#ifdef USE_AOMAP
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
#endif`,Cm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lm=`#ifdef USE_BATCHING
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
#endif`,wm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Em=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Am=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nm=`#ifdef USE_IRIDESCENCE
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
#endif`,Pm=`#ifdef USE_BUMPMAP
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
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Om=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Bm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Hm=`#define PI 3.141592653589793
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
} // validated`,Vm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gm=`vec3 transformedNormal = objectNormal;
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
#endif`,Wm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ym=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$m="gl_FragColor = linearToOutputTexel( gl_FragColor );",jm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Km=`#ifdef USE_ENVMAP
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
#endif`,Jm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Zm=`#ifdef USE_ENVMAP
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
#endif`,Qm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eg=`#ifdef USE_ENVMAP
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
#endif`,tg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ig=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ng=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ag=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rg=`#ifdef USE_GRADIENTMAP
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
}`,sg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,fg=`#ifdef USE_ENVMAP
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
#endif`,ug=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mg=`PhysicalMaterial material;
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
#endif`,gg=`uniform sampler2D dfgLUT;
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
}`,vg=`
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
#endif`,Mg=`#if defined( RE_IndirectDiffuse )
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
#endif`,_g=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,zg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tg=`#if defined( USE_POINTS_UV )
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
#endif`,Eg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ag=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ng=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ig=`#ifdef USE_MORPHTARGETS
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
#endif`,kg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Hg=`#ifdef USE_NORMALMAP
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
#endif`,Vg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$g=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ev=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nv=`float getShadowMask() {
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
}`,av=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rv=`#ifdef USE_SKINNING
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
#endif`,sv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cv=`#ifdef USE_SKINNING
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
#endif`,ov=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hv=`#ifdef USE_TRANSMISSION
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
#endif`,dv=`#ifdef USE_TRANSMISSION
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
#endif`,pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Mv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_v=`uniform sampler2D t2D;
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
}`,xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sv=`#include <common>
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
}`,Cv=`#if DEPTH_PACKING == 3200
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
}`,Lv=`#define DISTANCE
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
}`,wv=`#define DISTANCE
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
}`,Tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ev=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Av=`uniform float scale;
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
}`,Nv=`uniform vec3 diffuse;
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
}`,Pv=`#include <common>
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
}`,Rv=`uniform vec3 diffuse;
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
}`,Iv=`#define LAMBERT
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
}`,kv=`#define LAMBERT
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
}`,Dv=`#define MATCAP
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
}`,Fv=`#define MATCAP
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
}`,Ov=`#define NORMAL
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
}`,Uv=`#define NORMAL
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
}`,Bv=`#define PHONG
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
}`,Hv=`#define PHONG
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
}`,Vv=`#define STANDARD
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
}`,Gv=`#define STANDARD
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
}`,Wv=`#define TOON
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
}`,qv=`#define TOON
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
}`,Xv=`uniform float size;
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
}`,Yv=`uniform vec3 diffuse;
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
}`,$v=`#include <common>
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
}`,jv=`uniform vec3 color;
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
}`,Kv=`uniform float rotation;
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
}`,Jv=`uniform vec3 diffuse;
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
}`,o2={alphahash_fragment:Mm,alphahash_pars_fragment:_m,alphamap_fragment:xm,alphamap_pars_fragment:zm,alphatest_fragment:ym,alphatest_pars_fragment:bm,aomap_fragment:Sm,aomap_pars_fragment:Cm,batching_pars_vertex:Lm,batching_vertex:wm,begin_vertex:Tm,beginnormal_vertex:Em,bsdfs:Am,iridescence_fragment:Nm,bumpmap_pars_fragment:Pm,clipping_planes_fragment:Rm,clipping_planes_pars_fragment:Im,clipping_planes_pars_vertex:km,clipping_planes_vertex:Dm,color_fragment:Fm,color_pars_fragment:Om,color_pars_vertex:Um,color_vertex:Bm,common:Hm,cube_uv_reflection_fragment:Vm,defaultnormal_vertex:Gm,displacementmap_pars_vertex:Wm,displacementmap_vertex:qm,emissivemap_fragment:Xm,emissivemap_pars_fragment:Ym,colorspace_fragment:$m,colorspace_pars_fragment:jm,envmap_fragment:Km,envmap_common_pars_fragment:Jm,envmap_pars_fragment:Zm,envmap_pars_vertex:Qm,envmap_physical_pars_fragment:fg,envmap_vertex:eg,fog_vertex:tg,fog_pars_vertex:ig,fog_fragment:ng,fog_pars_fragment:ag,gradientmap_pars_fragment:rg,lightmap_pars_fragment:sg,lights_lambert_fragment:cg,lights_lambert_pars_fragment:og,lights_pars_begin:lg,lights_toon_fragment:ug,lights_toon_pars_fragment:hg,lights_phong_fragment:dg,lights_phong_pars_fragment:pg,lights_physical_fragment:mg,lights_physical_pars_fragment:gg,lights_fragment_begin:vg,lights_fragment_maps:Mg,lights_fragment_end:_g,lightprobes_pars_fragment:xg,logdepthbuf_fragment:zg,logdepthbuf_pars_fragment:yg,logdepthbuf_pars_vertex:bg,logdepthbuf_vertex:Sg,map_fragment:Cg,map_pars_fragment:Lg,map_particle_fragment:wg,map_particle_pars_fragment:Tg,metalnessmap_fragment:Eg,metalnessmap_pars_fragment:Ag,morphinstance_vertex:Ng,morphcolor_vertex:Pg,morphnormal_vertex:Rg,morphtarget_pars_vertex:Ig,morphtarget_vertex:kg,normal_fragment_begin:Dg,normal_fragment_maps:Fg,normal_pars_fragment:Og,normal_pars_vertex:Ug,normal_vertex:Bg,normalmap_pars_fragment:Hg,clearcoat_normal_fragment_begin:Vg,clearcoat_normal_fragment_maps:Gg,clearcoat_pars_fragment:Wg,iridescence_pars_fragment:qg,opaque_fragment:Xg,packing:Yg,premultiplied_alpha_fragment:$g,project_vertex:jg,dithering_fragment:Kg,dithering_pars_fragment:Jg,roughnessmap_fragment:Zg,roughnessmap_pars_fragment:Qg,shadowmap_pars_fragment:ev,shadowmap_pars_vertex:tv,shadowmap_vertex:iv,shadowmask_pars_fragment:nv,skinbase_vertex:av,skinning_pars_vertex:rv,skinning_vertex:sv,skinnormal_vertex:cv,specularmap_fragment:ov,specularmap_pars_fragment:lv,tonemapping_fragment:fv,tonemapping_pars_fragment:uv,transmission_fragment:hv,transmission_pars_fragment:dv,uv_pars_fragment:pv,uv_pars_vertex:mv,uv_vertex:gv,worldpos_vertex:vv,background_vert:Mv,background_frag:_v,backgroundCube_vert:xv,backgroundCube_frag:zv,cube_vert:yv,cube_frag:bv,depth_vert:Sv,depth_frag:Cv,distance_vert:Lv,distance_frag:wv,equirect_vert:Tv,equirect_frag:Ev,linedashed_vert:Av,linedashed_frag:Nv,meshbasic_vert:Pv,meshbasic_frag:Rv,meshlambert_vert:Iv,meshlambert_frag:kv,meshmatcap_vert:Dv,meshmatcap_frag:Fv,meshnormal_vert:Ov,meshnormal_frag:Uv,meshphong_vert:Bv,meshphong_frag:Hv,meshphysical_vert:Vv,meshphysical_frag:Gv,meshtoon_vert:Wv,meshtoon_frag:qv,points_vert:Xv,points_frag:Yv,shadow_vert:$v,shadow_frag:jv,sprite_vert:Kv,sprite_frag:Jv},L1={common:{diffuse:{value:new S2(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new r2},alphaMap:{value:null},alphaMapTransform:{value:new r2},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new r2}},envmap:{envMap:{value:null},envMapRotation:{value:new r2},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new r2}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new r2}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new r2},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new r2},normalScale:{value:new z2(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new r2},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new r2}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new r2}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new r2}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new S2(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new S2(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new r2},alphaTest:{value:0},uvTransform:{value:new r2}},sprite:{diffuse:{value:new S2(16777215)},opacity:{value:1},center:{value:new z2(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new r2},alphaMap:{value:null},alphaMapTransform:{value:new r2},alphaTest:{value:0}}},B4={basic:{uniforms:K3([L1.common,L1.specularmap,L1.envmap,L1.aomap,L1.lightmap,L1.fog]),vertexShader:o2.meshbasic_vert,fragmentShader:o2.meshbasic_frag},lambert:{uniforms:K3([L1.common,L1.specularmap,L1.envmap,L1.aomap,L1.lightmap,L1.emissivemap,L1.bumpmap,L1.normalmap,L1.displacementmap,L1.fog,L1.lights,{emissive:{value:new S2(0)},envMapIntensity:{value:1}}]),vertexShader:o2.meshlambert_vert,fragmentShader:o2.meshlambert_frag},phong:{uniforms:K3([L1.common,L1.specularmap,L1.envmap,L1.aomap,L1.lightmap,L1.emissivemap,L1.bumpmap,L1.normalmap,L1.displacementmap,L1.fog,L1.lights,{emissive:{value:new S2(0)},specular:{value:new S2(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:o2.meshphong_vert,fragmentShader:o2.meshphong_frag},standard:{uniforms:K3([L1.common,L1.envmap,L1.aomap,L1.lightmap,L1.emissivemap,L1.bumpmap,L1.normalmap,L1.displacementmap,L1.roughnessmap,L1.metalnessmap,L1.fog,L1.lights,{emissive:{value:new S2(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:o2.meshphysical_vert,fragmentShader:o2.meshphysical_frag},toon:{uniforms:K3([L1.common,L1.aomap,L1.lightmap,L1.emissivemap,L1.bumpmap,L1.normalmap,L1.displacementmap,L1.gradientmap,L1.fog,L1.lights,{emissive:{value:new S2(0)}}]),vertexShader:o2.meshtoon_vert,fragmentShader:o2.meshtoon_frag},matcap:{uniforms:K3([L1.common,L1.bumpmap,L1.normalmap,L1.displacementmap,L1.fog,{matcap:{value:null}}]),vertexShader:o2.meshmatcap_vert,fragmentShader:o2.meshmatcap_frag},points:{uniforms:K3([L1.points,L1.fog]),vertexShader:o2.points_vert,fragmentShader:o2.points_frag},dashed:{uniforms:K3([L1.common,L1.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:o2.linedashed_vert,fragmentShader:o2.linedashed_frag},depth:{uniforms:K3([L1.common,L1.displacementmap]),vertexShader:o2.depth_vert,fragmentShader:o2.depth_frag},normal:{uniforms:K3([L1.common,L1.bumpmap,L1.normalmap,L1.displacementmap,{opacity:{value:1}}]),vertexShader:o2.meshnormal_vert,fragmentShader:o2.meshnormal_frag},sprite:{uniforms:K3([L1.sprite,L1.fog]),vertexShader:o2.sprite_vert,fragmentShader:o2.sprite_frag},background:{uniforms:{uvTransform:{value:new r2},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:o2.background_vert,fragmentShader:o2.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new r2}},vertexShader:o2.backgroundCube_vert,fragmentShader:o2.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:o2.cube_vert,fragmentShader:o2.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:o2.equirect_vert,fragmentShader:o2.equirect_frag},distance:{uniforms:K3([L1.common,L1.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:o2.distance_vert,fragmentShader:o2.distance_frag},shadow:{uniforms:K3([L1.lights,L1.fog,{color:{value:new S2(0)},opacity:{value:1}}]),vertexShader:o2.shadow_vert,fragmentShader:o2.shadow_frag}};B4.physical={uniforms:K3([B4.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new r2},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new r2},clearcoatNormalScale:{value:new z2(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new r2},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new r2},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new r2},sheen:{value:0},sheenColor:{value:new S2(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new r2},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new r2},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new r2},transmissionSamplerSize:{value:new z2},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new r2},attenuationDistance:{value:0},attenuationColor:{value:new S2(0)},specularColor:{value:new S2(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new r2},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new r2},anisotropyVector:{value:new z2},anisotropyMap:{value:null},anisotropyMapTransform:{value:new r2}}]),vertexShader:o2.meshphysical_vert,fragmentShader:o2.meshphysical_frag};var Ur={r:0,b:0,g:0},Zv=new r3,p9=new r2;p9.set(-1,0,0,0,1,0,0,0,1);function Qv(n,e,t,i,a,r){let s=new S2(0),c=a===!0?0:1,o,l,f=null,h=0,u=null;function d(x){let y=x.isScene===!0?x.background:null;if(y&&y.isTexture){let M=x.backgroundBlurriness>0;y=e.get(y,M)}return y}function p(x){let y=!1,M=d(x);M===null?m(s,c):M&&M.isColor&&(m(M,1),y=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(x,y){let M=d(y);M&&(M.isCubeTexture||M.mapping===ki)?(l===void 0&&(l=new U3(new z6(1,1,1),new Be({name:"BackgroundCubeMaterial",uniforms:St(B4.backgroundCube.uniforms),vertexShader:B4.backgroundCube.vertexShader,fragmentShader:B4.backgroundCube.fragmentShader,side:fe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,L,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Zv.makeRotationFromEuler(y.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(p9),l.material.toneMapped=M2.getTransfer(M.colorSpace)!==A2,(f!==M||h!==M.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,f=M,h=M.version,u=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(o===void 0&&(o=new U3(new Ei(2,2),new Be({name:"BackgroundMaterial",uniforms:St(B4.background.uniforms),vertexShader:B4.background.vertexShader,fragmentShader:B4.background.fragmentShader,side:n0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=M,o.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,o.material.toneMapped=M2.getTransfer(M.colorSpace)!==A2,M.matrixAutoUpdate===!0&&M.updateMatrix(),o.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||u!==n.toneMapping)&&(o.material.needsUpdate=!0,f=M,h=M.version,u=n.toneMapping),o.layers.enableAll(),x.unshift(o,o.geometry,o.material,0,0,null))}function m(x,y){x.getRGB(Ur,z8(n)),t.buffers.color.setClear(Ur.r,Ur.g,Ur.b,y,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return s},setClearColor:function(x,y=1){s.set(x),c=y,m(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,m(s,c)},render:p,addToRenderList:v,dispose:g}}function eM(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},a=u(null),r=a,s=!1;function c(P,R,q,j,D){let I=!1,N=h(P,j,q,R);r!==N&&(r=N,l(r.object)),I=d(P,j,q,D),I&&p(P,j,q,D),D!==null&&e.update(D,n.ELEMENT_ARRAY_BUFFER),(I||s)&&(s=!1,M(P,R,q,j),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function o(){return n.createVertexArray()}function l(P){return n.bindVertexArray(P)}function f(P){return n.deleteVertexArray(P)}function h(P,R,q,j){let D=j.wireframe===!0,I=i[R.id];I===void 0&&(I={},i[R.id]=I);let N=P.isInstancedMesh===!0?P.id:0,O=I[N];O===void 0&&(O={},I[N]=O);let Y=O[q.id];Y===void 0&&(Y={},O[q.id]=Y);let A=Y[D];return A===void 0&&(A=u(o()),Y[D]=A),A}function u(P){let R=[],q=[],j=[];for(let D=0;D<t;D++)R[D]=0,q[D]=0,j[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:q,attributeDivisors:j,object:P,attributes:{},index:null}}function d(P,R,q,j){let D=r.attributes,I=R.attributes,N=0,O=q.getAttributes();for(let Y in O)if(O[Y].location>=0){let l1=D[Y],d1=I[Y];if(d1===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(d1=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(d1=P.instanceColor)),l1===void 0||l1.attribute!==d1||d1&&l1.data!==d1.data)return!0;N++}return r.attributesNum!==N||r.index!==j}function p(P,R,q,j){let D={},I=R.attributes,N=0,O=q.getAttributes();for(let Y in O)if(O[Y].location>=0){let l1=I[Y];l1===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(l1=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(l1=P.instanceColor));let d1={};d1.attribute=l1,l1&&l1.data&&(d1.data=l1.data),D[Y]=d1,N++}r.attributes=D,r.attributesNum=N,r.index=j}function v(){let P=r.newAttributes;for(let R=0,q=P.length;R<q;R++)P[R]=0}function m(P){g(P,0)}function g(P,R){let q=r.newAttributes,j=r.enabledAttributes,D=r.attributeDivisors;q[P]=1,j[P]===0&&(n.enableVertexAttribArray(P),j[P]=1),D[P]!==R&&(n.vertexAttribDivisor(P,R),D[P]=R)}function x(){let P=r.newAttributes,R=r.enabledAttributes;for(let q=0,j=R.length;q<j;q++)R[q]!==P[q]&&(n.disableVertexAttribArray(q),R[q]=0)}function y(P,R,q,j,D,I,N){N===!0?n.vertexAttribIPointer(P,R,q,D,I):n.vertexAttribPointer(P,R,q,j,D,I)}function M(P,R,q,j){v();let D=j.attributes,I=q.getAttributes(),N=R.defaultAttributeValues;for(let O in I){let Y=I[O];if(Y.location>=0){let A=D[O];if(A===void 0&&(O==="instanceMatrix"&&P.instanceMatrix&&(A=P.instanceMatrix),O==="instanceColor"&&P.instanceColor&&(A=P.instanceColor)),A!==void 0){let l1=A.normalized,d1=A.itemSize,$1=e.get(A);if($1===void 0)continue;let A1=$1.buffer,j1=$1.type,Q=$1.bytesPerElement,r1=j1===n.INT||j1===n.UNSIGNED_INT||A.gpuType===tr;if(A.isInterleavedBufferAttribute){let s1=A.data,S1=s1.stride,H1=A.offset;if(s1.isInstancedInterleavedBuffer){for(let T1=0;T1<Y.locationSize;T1++)g(Y.location+T1,s1.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=s1.meshPerAttribute*s1.count)}else for(let T1=0;T1<Y.locationSize;T1++)m(Y.location+T1);n.bindBuffer(n.ARRAY_BUFFER,A1);for(let T1=0;T1<Y.locationSize;T1++)y(Y.location+T1,d1/Y.locationSize,j1,l1,S1*Q,(H1+d1/Y.locationSize*T1)*Q,r1)}else{if(A.isInstancedBufferAttribute){for(let s1=0;s1<Y.locationSize;s1++)g(Y.location+s1,A.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=A.meshPerAttribute*A.count)}else for(let s1=0;s1<Y.locationSize;s1++)m(Y.location+s1);n.bindBuffer(n.ARRAY_BUFFER,A1);for(let s1=0;s1<Y.locationSize;s1++)y(Y.location+s1,d1/Y.locationSize,j1,l1,d1*Q,d1/Y.locationSize*s1*Q,r1)}}else if(N!==void 0){let l1=N[O];if(l1!==void 0)switch(l1.length){case 2:n.vertexAttrib2fv(Y.location,l1);break;case 3:n.vertexAttrib3fv(Y.location,l1);break;case 4:n.vertexAttrib4fv(Y.location,l1);break;default:n.vertexAttrib1fv(Y.location,l1)}}}}x()}function b(){C();for(let P in i){let R=i[P];for(let q in R){let j=R[q];for(let D in j){let I=j[D];for(let N in I)f(I[N].object),delete I[N];delete j[D]}}delete i[P]}}function L(P){if(i[P.id]===void 0)return;let R=i[P.id];for(let q in R){let j=R[q];for(let D in j){let I=j[D];for(let N in I)f(I[N].object),delete I[N];delete j[D]}}delete i[P.id]}function S(P){for(let R in i){let q=i[R];for(let j in q){let D=q[j];if(D[P.id]===void 0)continue;let I=D[P.id];for(let N in I)f(I[N].object),delete I[N];delete D[P.id]}}}function _(P){for(let R in i){let q=i[R],j=P.isInstancedMesh===!0?P.id:0,D=q[j];if(D!==void 0){for(let I in D){let N=D[I];for(let O in N)f(N[O].object),delete N[O];delete D[I]}delete q[j],Object.keys(q).length===0&&delete i[R]}}}function C(){T(),s=!0,r!==a&&(r=a,l(r.object))}function T(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:c,reset:C,resetDefaultState:T,dispose:b,releaseStatesOfGeometry:L,releaseStatesOfObject:_,releaseStatesOfProgram:S,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function tM(n,e,t){let i;function a(o){i=o}function r(o,l){n.drawArrays(i,o,l),t.update(l,i,1)}function s(o,l,f){f!==0&&(n.drawArraysInstanced(i,o,l,f),t.update(l,i,f))}function c(o,l,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,o,0,l,0,f);let u=0;for(let d=0;d<f;d++)u+=l[d];t.update(u,i,1)}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=c}function iM(n,e,t,i){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){let S=e.get("EXT_texture_filter_anisotropic");a=n.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(S){return!(S!==i4&&i.convert(S)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(S){let _=S===O4&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==Ve&&i.convert(S)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==M4&&!_)}function o(S){if(S==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",f=o(l);f!==l&&(K1("WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);let h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&K1("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),L=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:o,textureFormatReadable:s,textureTypeReadable:c,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:M,maxSamples:b,samples:L}}function nM(n){let e=this,t=null,i=0,a=!1,r=!1,s=new N4,c=new r2,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||i!==0||a;return a=u,i=h.length,d},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=f(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,g=n.get(h);if(!a||p===null||p.length===0||r&&!m)r?f(null):l();else{let x=r?0:i,y=x*4,M=g.clippingState||null;o.value=M,M=f(p,u,y,d);for(let b=0;b!==y;++b)M[b]=t[b];g.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function l(){o.value!==t&&(o.value=t,o.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,u,d,p){let v=h!==null?h.length:0,m=null;if(v!==0){if(m=o.value,p!==!0||m===null){let g=d+v*4,x=u.matrixWorldInverse;c.getNormalMatrix(x),(m===null||m.length<g)&&(m=new Float32Array(g));for(let y=0,M=d;y!==v;++y,M+=4)s.copy(h[y]).applyMatrix4(x,c),s.normal.toArray(m,M),m[M+3]=s.constant}o.value=m,o.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var W0=4,ql=[.125,.215,.35,.446,.526,.582],Ct=20,aM=256,Wi=new Ri,Xl=new S2,C8=null,L8=0,w8=0,T8=!1,rM=new V,Hr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,a=100,r={}){let{size:s=256,position:c=rM}=r;C8=this._renderer.getRenderTarget(),L8=this._renderer.getActiveCubeFace(),w8=this._renderer.getActiveMipmapLevel(),T8=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,a,o,c),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$l(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(C8,L8,w8),this._renderer.xr.enabled=T8,e.scissorTest=!1,C6(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===U0||e.mapping===bt?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),C8=this._renderer.getRenderTarget(),L8=this._renderer.getActiveCubeFace(),w8=this._renderer.getActiveMipmapLevel(),T8=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:O3,minFilter:O3,generateMipmaps:!1,type:O4,format:i4,colorSpace:ui,depthBuffer:!1},a=Yl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yl(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=sM(r)),this._blurMaterial=oM(r,e,t),this._ggxMaterial=cM(r,e,t)}return a}_compileMaterial(e){let t=new U3(new le,e);this._renderer.compile(t,Wi)}_sceneToCubeUV(e,t,i,a,r){let o=new j3(90,1,t,i),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Xl),h.toneMapping=g4,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(a),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new U3(new z6,new a0({name:"PMREM.Background",side:fe,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,g=!1,x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,g=!0):(m.color.copy(Xl),g=!0);for(let y=0;y<6;y++){let M=y%3;M===0?(o.up.set(0,l[y],0),o.position.set(r.x,r.y,r.z),o.lookAt(r.x+f[y],r.y,r.z)):M===1?(o.up.set(0,0,l[y]),o.position.set(r.x,r.y,r.z),o.lookAt(r.x,r.y+f[y],r.z)):(o.up.set(0,l[y],0),o.position.set(r.x,r.y,r.z),o.lookAt(r.x,r.y,r.z+f[y]));let b=this._cubeSize;C6(a,M*b,y>2?b:0,b,b),h.setRenderTarget(a),g&&h.render(v,o),h.render(e,o)}h.toneMapping=d,h.autoClear=u,e.background=x}_textureToCubeUV(e,t){let i=this._renderer,a=e.mapping===U0||e.mapping===bt;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$l());let r=a?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;let c=r.uniforms;c.envMap.value=e;let o=this._cubeSize;C6(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(s,Wi)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let a=this._lodMeshes.length;for(let r=1;r<a;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let a=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,c=this._lodMeshes[i];c.material=s;let o=s.uniforms,l=i/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-f*f),u=0+l*1.25,d=h*u,{_lodMax:p}=this,v=this._sizeLods[i],m=3*v*(i>p-W0?i-p+W0:0),g=4*(this._cubeSize-v);o.envMap.value=e.texture,o.roughness.value=d,o.mipInt.value=p-t,C6(r,m,g,3*v,2*v),a.setRenderTarget(r),a.render(c,Wi),o.envMap.value=r.texture,o.roughness.value=0,o.mipInt.value=p-i,C6(e,m,g,3*v,2*v),a.setRenderTarget(e),a.render(c,Wi)}_blur(e,t,i,a,r){let s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,a,"latitudinal",r),this._halfBlur(s,e,i,i,a,"longitudinal",r)}_halfBlur(e,t,i,a,r,s,c){let o=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&Q1("blur direction must be either latitudinal or longitudinal!");let f=3,h=this._lodMeshes[a];h.material=l;let u=l.uniforms,d=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ct-1),v=r/p,m=isFinite(r)?1+Math.floor(f*v):Ct;m>Ct&&K1(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ct}`);let g=[],x=0;for(let S=0;S<Ct;++S){let _=S/v,C=Math.exp(-_*_/2);g.push(C),S===0?x+=C:S<m&&(x+=2*C)}for(let S=0;S<g.length;S++)g[S]=g[S]/x;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=g,u.latitudinal.value=s==="latitudinal",c&&(u.poleAxis.value=c);let{_lodMax:y}=this;u.dTheta.value=p,u.mipInt.value=y-i;let M=this._sizeLods[a],b=3*M*(a>y-W0?a-y+W0:0),L=4*(this._cubeSize-M);C6(t,b,L,3*M,2*M),o.setRenderTarget(t),o.render(h,Wi)}};function sM(n){let e=[],t=[],i=[],a=n,r=n-W0+1+ql.length;for(let s=0;s<r;s++){let c=Math.pow(2,a);e.push(c);let o=1/c;s>n-W0?o=ql[s-n+W0-1]:s===0&&(o=0),t.push(o);let l=1/(c-2),f=-l,h=1+l,u=[f,f,h,f,h,h,f,f,h,h,f,h],d=6,p=6,v=3,m=2,g=1,x=new Float32Array(v*p*d),y=new Float32Array(m*p*d),M=new Float32Array(g*p*d);for(let L=0;L<d;L++){let S=L%3*2/3-1,_=L>2?0:-1,C=[S,_,0,S+2/3,_,0,S+2/3,_+1,0,S,_,0,S+2/3,_+1,0,S,_+1,0];x.set(C,v*p*L),y.set(u,m*p*L);let T=[L,L,L,L,L,L];M.set(T,g*p*L)}let b=new le;b.setAttribute("position",new oe(x,v)),b.setAttribute("uv",new oe(y,m)),b.setAttribute("faceIndex",new oe(M,g)),i.push(new U3(b,null)),a>W0&&a--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Yl(n,e,t){let i=new Ue(n,e,t);return i.texture.mapping=ki,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function C6(n,e,t,i,a){n.viewport.set(e,t,i,a),n.scissor.set(e,t,i,a)}function cM(n,e,t){return new Be({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:aM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wr(),fragmentShader:`

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
		`,blending:F4,depthTest:!1,depthWrite:!1})}function oM(n,e,t){let i=new Float32Array(Ct),a=new V(0,1,0);return new Be({name:"SphericalGaussianBlur",defines:{n:Ct,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Wr(),fragmentShader:`

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
		`,blending:F4,depthTest:!1,depthWrite:!1})}function $l(){return new Be({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wr(),fragmentShader:`

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
		`,blending:F4,depthTest:!1,depthWrite:!1})}function jl(){return new Be({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:F4,depthTest:!1,depthWrite:!1})}function Wr(){return`

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
	`}var Vr=class extends Ue{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new Si(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new z6(5,5,5),r=new Be({name:"CubemapFromEquirect",uniforms:St(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fe,blending:F4});r.uniforms.tEquirect.value=t;let s=new U3(a,r),c=t.minFilter;return t.minFilter===B0&&(t.minFilter=O3),new Ka(1,10,this).update(e,s),t.minFilter=c,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,a=!0){let r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,a);e.setRenderTarget(r)}};function lM(n){let e=new WeakMap,t=new WeakMap,i=null;function a(u,d=!1){return u==null?null:d?s(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Za||d===Qa)if(e.has(u)){let p=e.get(u).texture;return c(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let v=new Vr(p.height);return v.fromEquirectangularTexture(n,u),e.set(u,v),u.addEventListener("dispose",l),c(v.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture){let d=u.mapping,p=d===Za||d===Qa,v=d===U0||d===bt;if(p||v){let m=t.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return i===null&&(i=new Hr(n)),m=p?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let x=u.image;return p&&x&&x.height>0||v&&x&&o(x)?(i===null&&(i=new Hr(n)),m=p?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",f),m.texture):null}}}return u}function c(u,d){return d===Za?u.mapping=U0:d===Qa&&(u.mapping=bt),u}function o(u){let d=0,p=6;for(let v=0;v<p;v++)u[v]!==void 0&&d++;return d===p}function l(u){let d=u.target;d.removeEventListener("dispose",l);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function f(u){let d=u.target;d.removeEventListener("dispose",f);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:h}}function fM(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let a=n.getExtension(i);return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let a=t(i);return a===null&&_t("WebGLRenderer: "+i+" extension not supported."),a}}}function uM(n,e,t,i){let a={},r=new WeakMap;function s(h){let u=h.target;u.index!==null&&e.remove(u.index);for(let p in u.attributes)e.remove(u.attributes[p]);u.removeEventListener("dispose",s),delete a[u.id];let d=r.get(u);d&&(e.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function c(h,u){return a[u.id]===!0||(u.addEventListener("dispose",s),a[u.id]=!0,t.memory.geometries++),u}function o(h){let u=h.attributes;for(let d in u)e.update(u[d],n.ARRAY_BUFFER)}function l(h){let u=[],d=h.index,p=h.attributes.position,v=0;if(p===void 0)return;if(d!==null){let x=d.array;v=d.version;for(let y=0,M=x.length;y<M;y+=3){let b=x[y+0],L=x[y+1],S=x[y+2];u.push(b,L,L,S,S,b)}}else{let x=p.array;v=p.version;for(let y=0,M=x.length/3-1;y<M;y+=3){let b=y+0,L=y+1,S=y+2;u.push(b,L,L,S,S,b)}}let m=new(p.count>=65535?xi:_i)(u,1);m.version=v;let g=r.get(h);g&&e.remove(g),r.set(h,m)}function f(h){let u=r.get(h);if(u){let d=h.index;d!==null&&u.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:c,update:o,getWireframeAttribute:f}}function hM(n,e,t){let i;function a(h){i=h}let r,s;function c(h){r=h.type,s=h.bytesPerElement}function o(h,u){n.drawElements(i,u,r,h*s),t.update(u,i,1)}function l(h,u,d){d!==0&&(n.drawElementsInstanced(i,u,r,h*s,d),t.update(u,i,d))}function f(h,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,h,0,d);let v=0;for(let m=0;m<d;m++)v+=u[m];t.update(v,i,1)}this.setMode=a,this.setIndex=c,this.render=o,this.renderInstances=l,this.renderMultiDraw=f}function dM(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,c){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=c*(r/3);break;case n.LINES:t.lines+=c*(r/2);break;case n.LINE_STRIP:t.lines+=c*(r-1);break;case n.LINE_LOOP:t.lines+=c*r;break;case n.POINTS:t.points+=c*r;break;default:Q1("WebGLInfo: Unknown draw mode:",s);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function pM(n,e,t){let i=new WeakMap,a=new J2;function r(s,c,o){let l=s.morphTargetInfluences,f=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,h=f!==void 0?f.length:0,u=i.get(c);if(u===void 0||u.count!==h){let T=function(){_.dispose(),i.delete(c),c.removeEventListener("dispose",T)};var d=T;u!==void 0&&u.texture.dispose();let p=c.morphAttributes.position!==void 0,v=c.morphAttributes.normal!==void 0,m=c.morphAttributes.color!==void 0,g=c.morphAttributes.position||[],x=c.morphAttributes.normal||[],y=c.morphAttributes.color||[],M=0;p===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let b=c.attributes.position.count*M,L=1;b>e.maxTextureSize&&(L=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let S=new Float32Array(b*L*4*h),_=new mi(S,b,L,h);_.type=M4,_.needsUpdate=!0;let C=M*4;for(let P=0;P<h;P++){let R=g[P],q=x[P],j=y[P],D=b*L*4*P;for(let I=0;I<R.count;I++){let N=I*C;p===!0&&(a.fromBufferAttribute(R,I),S[D+N+0]=a.x,S[D+N+1]=a.y,S[D+N+2]=a.z,S[D+N+3]=0),v===!0&&(a.fromBufferAttribute(q,I),S[D+N+4]=a.x,S[D+N+5]=a.y,S[D+N+6]=a.z,S[D+N+7]=0),m===!0&&(a.fromBufferAttribute(j,I),S[D+N+8]=a.x,S[D+N+9]=a.y,S[D+N+10]=a.z,S[D+N+11]=j.itemSize===4?a.w:1)}}u={count:h,texture:_,size:new z2(b,L)},i.set(c,u),c.addEventListener("dispose",T)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let p=0;for(let m=0;m<l.length;m++)p+=l[m];let v=c.morphTargetsRelative?1:1-p;o.getUniforms().setValue(n,"morphTargetBaseInfluence",v),o.getUniforms().setValue(n,"morphTargetInfluences",l)}o.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function mM(n,e,t,i,a){let r=new WeakMap;function s(l){let f=a.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==f&&(e.update(u),r.set(u,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==f&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,f))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==f&&(d.update(),r.set(d,f))}return u}function c(){r=new WeakMap}function o(l){let f=l.target;f.removeEventListener("dispose",o),i.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:s,dispose:c}}var gM={[a8]:"LINEAR_TONE_MAPPING",[r8]:"REINHARD_TONE_MAPPING",[s8]:"CINEON_TONE_MAPPING",[c8]:"ACES_FILMIC_TONE_MAPPING",[l8]:"AGX_TONE_MAPPING",[f8]:"NEUTRAL_TONE_MAPPING",[o8]:"CUSTOM_TONE_MAPPING"};function vM(n,e,t,i,a,r){let s=new Ue(e,t,{type:n,depthBuffer:a,stencilBuffer:r,samples:i?4:0,depthTexture:a?new r0(e,t):void 0}),c=new Ue(e,t,{type:O4,depthBuffer:!1,stencilBuffer:!1}),o=new le;o.setAttribute("position",new T3([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new T3([0,2,0,0,2,0],2));let l=new Ua({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new U3(o,l),h=new Ri(-1,1,1,-1,0,1),u=null,d=null,p=!1,v,m=null,g=[],x=!1;this.setSize=function(y,M){s.setSize(y,M),c.setSize(y,M);for(let b=0;b<g.length;b++){let L=g[b];L.setSize&&L.setSize(y,M)}},this.setEffects=function(y){g=y,x=g.length>0&&g[0].isRenderPass===!0;let M=s.width,b=s.height;for(let L=0;L<g.length;L++){let S=g[L];S.setSize&&S.setSize(M,b)}},this.begin=function(y,M){if(p||y.toneMapping===g4&&g.length===0)return!1;if(m=M,M!==null){let b=M.width,L=M.height;(s.width!==b||s.height!==L)&&this.setSize(b,L)}return x===!1&&y.setRenderTarget(s),v=y.toneMapping,y.toneMapping=g4,!0},this.hasRenderPass=function(){return x},this.end=function(y,M){y.toneMapping=v,p=!0;let b=s,L=c;for(let S=0;S<g.length;S++){let _=g[S];if(_.enabled!==!1&&(_.render(y,L,b,M),_.needsSwap!==!1)){let C=b;b=L,L=C}}if(u!==y.outputColorSpace||d!==y.toneMapping){u=y.outputColorSpace,d=y.toneMapping,l.defines={},M2.getTransfer(u)===A2&&(l.defines.SRGB_TRANSFER="");let S=gM[d];S&&(l.defines[S]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(m),y.render(f,h),m=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),c.dispose(),o.dispose(),l.dispose()}}var m9=new c0,N8=new r0(1,1),g9=new mi,v9=new Da,M9=new Si,Kl=[],Jl=[],Zl=new Float32Array(16),Ql=new Float32Array(9),e9=new Float32Array(4);function w6(n,e,t){let i=n[0];if(i<=0||i>0)return n;let a=e*t,r=Kl[a];if(r===void 0&&(r=new Float32Array(a),Kl[a]=r),e!==0){i.toArray(r,0);for(let s=1,c=0;s!==e;++s)c+=t,n[s].toArray(r,c)}return r}function z3(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function y3(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function qr(n,e){let t=Jl[e];t===void 0&&(t=new Int32Array(e),Jl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function MM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function _M(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(z3(t,e))return;n.uniform2fv(this.addr,e),y3(t,e)}}function xM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(z3(t,e))return;n.uniform3fv(this.addr,e),y3(t,e)}}function zM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(z3(t,e))return;n.uniform4fv(this.addr,e),y3(t,e)}}function yM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(z3(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),y3(t,e)}else{if(z3(t,i))return;e9.set(i),n.uniformMatrix2fv(this.addr,!1,e9),y3(t,i)}}function bM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(z3(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),y3(t,e)}else{if(z3(t,i))return;Ql.set(i),n.uniformMatrix3fv(this.addr,!1,Ql),y3(t,i)}}function SM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(z3(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),y3(t,e)}else{if(z3(t,i))return;Zl.set(i),n.uniformMatrix4fv(this.addr,!1,Zl),y3(t,i)}}function CM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function LM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(z3(t,e))return;n.uniform2iv(this.addr,e),y3(t,e)}}function wM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(z3(t,e))return;n.uniform3iv(this.addr,e),y3(t,e)}}function TM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(z3(t,e))return;n.uniform4iv(this.addr,e),y3(t,e)}}function EM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function AM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(z3(t,e))return;n.uniform2uiv(this.addr,e),y3(t,e)}}function NM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(z3(t,e))return;n.uniform3uiv(this.addr,e),y3(t,e)}}function PM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(z3(t,e))return;n.uniform4uiv(this.addr,e),y3(t,e)}}function RM(n,e,t){let i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);let r;this.type===n.SAMPLER_2D_SHADOW?(N8.compareFunction=t.isReversedDepthBuffer()?Or:Fr,r=N8):r=m9,t.setTexture2D(e||r,a)}function IM(n,e,t){let i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||v9,a)}function kM(n,e,t){let i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||M9,a)}function DM(n,e,t){let i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||g9,a)}function FM(n){switch(n){case 5126:return MM;case 35664:return _M;case 35665:return xM;case 35666:return zM;case 35674:return yM;case 35675:return bM;case 35676:return SM;case 5124:case 35670:return CM;case 35667:case 35671:return LM;case 35668:case 35672:return wM;case 35669:case 35673:return TM;case 5125:return EM;case 36294:return AM;case 36295:return NM;case 36296:return PM;case 35678:case 36198:case 36298:case 36306:case 35682:return RM;case 35679:case 36299:case 36307:return IM;case 35680:case 36300:case 36308:case 36293:return kM;case 36289:case 36303:case 36311:case 36292:return DM}}function OM(n,e){n.uniform1fv(this.addr,e)}function UM(n,e){let t=w6(e,this.size,2);n.uniform2fv(this.addr,t)}function BM(n,e){let t=w6(e,this.size,3);n.uniform3fv(this.addr,t)}function HM(n,e){let t=w6(e,this.size,4);n.uniform4fv(this.addr,t)}function VM(n,e){let t=w6(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function GM(n,e){let t=w6(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function WM(n,e){let t=w6(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function qM(n,e){n.uniform1iv(this.addr,e)}function XM(n,e){n.uniform2iv(this.addr,e)}function YM(n,e){n.uniform3iv(this.addr,e)}function $M(n,e){n.uniform4iv(this.addr,e)}function jM(n,e){n.uniform1uiv(this.addr,e)}function KM(n,e){n.uniform2uiv(this.addr,e)}function JM(n,e){n.uniform3uiv(this.addr,e)}function ZM(n,e){n.uniform4uiv(this.addr,e)}function QM(n,e,t){let i=this.cache,a=e.length,r=qr(t,a);z3(i,r)||(n.uniform1iv(this.addr,r),y3(i,r));let s;this.type===n.SAMPLER_2D_SHADOW?s=N8:s=m9;for(let c=0;c!==a;++c)t.setTexture2D(e[c]||s,r[c])}function e_(n,e,t){let i=this.cache,a=e.length,r=qr(t,a);z3(i,r)||(n.uniform1iv(this.addr,r),y3(i,r));for(let s=0;s!==a;++s)t.setTexture3D(e[s]||v9,r[s])}function t_(n,e,t){let i=this.cache,a=e.length,r=qr(t,a);z3(i,r)||(n.uniform1iv(this.addr,r),y3(i,r));for(let s=0;s!==a;++s)t.setTextureCube(e[s]||M9,r[s])}function i_(n,e,t){let i=this.cache,a=e.length,r=qr(t,a);z3(i,r)||(n.uniform1iv(this.addr,r),y3(i,r));for(let s=0;s!==a;++s)t.setTexture2DArray(e[s]||g9,r[s])}function n_(n){switch(n){case 5126:return OM;case 35664:return UM;case 35665:return BM;case 35666:return HM;case 35674:return VM;case 35675:return GM;case 35676:return WM;case 5124:case 35670:return qM;case 35667:case 35671:return XM;case 35668:case 35672:return YM;case 35669:case 35673:return $M;case 5125:return jM;case 36294:return KM;case 36295:return JM;case 36296:return ZM;case 35678:case 36198:case 36298:case 36306:case 35682:return QM;case 35679:case 36299:case 36307:return e_;case 35680:case 36300:case 36308:case 36293:return t_;case 36289:case 36303:case 36311:case 36292:return i_}}var P8=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=FM(t.type)}},R8=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=n_(t.type)}},I8=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let a=this.seq;for(let r=0,s=a.length;r!==s;++r){let c=a[r];c.setValue(e,t[c.id],i)}}},E8=/(\w+)(\])?(\[|\.)?/g;function t9(n,e){n.seq.push(e),n.map[e.id]=e}function a_(n,e,t){let i=n.name,a=i.length;for(E8.lastIndex=0;;){let r=E8.exec(i),s=E8.lastIndex,c=r[1],o=r[2]==="]",l=r[3];if(o&&(c=c|0),l===void 0||l==="["&&s+2===a){t9(t,l===void 0?new P8(c,n,e):new R8(c,n,e));break}else{let h=t.map[c];h===void 0&&(h=new I8(c),t9(t,h)),t=h}}}var L6=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let c=e.getActiveUniform(t,s),o=e.getUniformLocation(t,c.name);a_(c,o,this)}let a=[],r=[];for(let s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(s):r.push(s);a.length>0&&(this.seq=a.concat(r))}setValue(e,t,i,a){let r=this.map[t];r!==void 0&&r.setValue(e,i,a)}setOptional(e,t,i){let a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let r=0,s=t.length;r!==s;++r){let c=t[r],o=i[c.id];o.needsUpdate!==!1&&c.setValue(e,o.value,a)}}static seqWithValue(e,t){let i=[];for(let a=0,r=e.length;a!==r;++a){let s=e[a];s.id in t&&i.push(s)}return i}};function i9(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var r_=37297,s_=0;function c_(n,e){let t=n.split(`
`),i=[],a=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=a;s<r;s++){let c=s+1;i.push(`${c===e?">":" "} ${c}: ${t[s]}`)}return i.join(`
`)}var n9=new r2;function o_(n){M2._getMatrix(n9,M2.workingColorSpace,n);let e=`mat3( ${n9.elements.map(t=>t.toFixed(4))} )`;switch(M2.getTransfer(n)){case hi:return[e,"LinearTransferOETF"];case A2:return[e,"sRGBTransferOETF"];default:return K1("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function a9(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let c=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+c_(n.getShaderSource(e),c)}else return r}function l_(n,e){let t=o_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var f_={[a8]:"Linear",[r8]:"Reinhard",[s8]:"Cineon",[c8]:"ACESFilmic",[l8]:"AgX",[f8]:"Neutral",[o8]:"Custom"};function u_(n,e){let t=f_[e];return t===void 0?(K1("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Br=new V;function h_(){M2.getLuminanceCoefficients(Br);let n=Br.x.toFixed(4),e=Br.y.toFixed(4),t=Br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function d_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xi).join(`
`)}function p_(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function m_(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){let r=n.getActiveAttrib(e,a),s=r.name,c=1;r.type===n.FLOAT_MAT2&&(c=2),r.type===n.FLOAT_MAT3&&(c=3),r.type===n.FLOAT_MAT4&&(c=4),t[s]={type:r.type,location:n.getAttribLocation(e,s),locationSize:c}}return t}function Xi(n){return n!==""}function r9(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function s9(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var g_=/^[ \t]*#include +<([\w\d./]+)>/gm;function k8(n){return n.replace(g_,M_)}var v_=new Map;function M_(n,e){let t=o2[e];if(t===void 0){let i=v_.get(e);if(i!==void 0)t=o2[i],K1('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return k8(t)}var __=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function c9(n){return n.replace(__,x_)}function x_(n,e,t,i){let a="";for(let r=parseInt(e);r<parseInt(t);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function o9(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var z_={[Ii]:"SHADOWMAP_TYPE_PCF",[y6]:"SHADOWMAP_TYPE_VSM"};function y_(n){return z_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var b_={[U0]:"ENVMAP_TYPE_CUBE",[bt]:"ENVMAP_TYPE_CUBE",[ki]:"ENVMAP_TYPE_CUBE_UV"};function S_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":b_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var C_={[bt]:"ENVMAP_MODE_REFRACTION"};function L_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":C_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var w_={[n8]:"ENVMAP_BLENDING_MULTIPLY",[Tl]:"ENVMAP_BLENDING_MIX",[El]:"ENVMAP_BLENDING_ADD"};function T_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":w_[n.combine]||"ENVMAP_BLENDING_NONE"}function E_(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function A_(n,e,t,i){let a=n.getContext(),r=t.defines,s=t.vertexShader,c=t.fragmentShader,o=y_(t),l=S_(t),f=L_(t),h=T_(t),u=E_(t),d=d_(t),p=p_(r),v=a.createProgram(),m,g,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Xi).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Xi).join(`
`),g.length>0&&(g+=`
`)):(m=[o9(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xi).join(`
`),g=[o9(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==g4?"#define TONE_MAPPING":"",t.toneMapping!==g4?o2.tonemapping_pars_fragment:"",t.toneMapping!==g4?u_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",o2.colorspace_pars_fragment,l_("linearToOutputTexel",t.outputColorSpace),h_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xi).join(`
`)),s=k8(s),s=r9(s,t),s=s9(s,t),c=k8(c),c=r9(c,t),c=s9(c,t),s=c9(s),c=c9(c),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===_8?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_8?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let y=x+m+s,M=x+g+c,b=i9(a,a.VERTEX_SHADER,y),L=i9(a,a.FRAGMENT_SHADER,M);a.attachShader(v,b),a.attachShader(v,L),t.index0AttributeName!==void 0?a.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(v,0,"position"),a.linkProgram(v);function S(P){if(n.debug.checkShaderErrors){let R=a.getProgramInfoLog(v)||"",q=a.getShaderInfoLog(b)||"",j=a.getShaderInfoLog(L)||"",D=R.trim(),I=q.trim(),N=j.trim(),O=!0,Y=!0;if(a.getProgramParameter(v,a.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,v,b,L);else{let A=a9(a,b,"vertex"),l1=a9(a,L,"fragment");Q1("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(v,a.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+A+`
`+l1)}else D!==""?K1("WebGLProgram: Program Info Log:",D):(I===""||N==="")&&(Y=!1);Y&&(P.diagnostics={runnable:O,programLog:D,vertexShader:{log:I,prefix:m},fragmentShader:{log:N,prefix:g}})}a.deleteShader(b),a.deleteShader(L),_=new L6(a,v),C=m_(a,v)}let _;this.getUniforms=function(){return _===void 0&&S(this),_};let C;this.getAttributes=function(){return C===void 0&&S(this),C};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=a.getProgramParameter(v,r_)),T},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=s_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=L,this}var N_=0,D8=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new F8(e),t.set(e,i)),i}},F8=class{constructor(e){this.id=N_++,this.code=e,this.usedTimes=0}};function P_(n){return n===V0||n===Hi||n===Vi}function R_(n,e,t,i,a,r){let s=new vi,c=new D8,o=new Set,l=[],f=new Map,h=i.logarithmicDepthBuffer,u=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return o.add(_),_===0?"uv":`uv${_}`}function v(_,C,T,P,R,q){let j=P.fog,D=R.geometry,I=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,N=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,O=e.get(_.envMap||I,N),Y=O&&O.mapping===ki?O.image.height:null,A=d[_.type];_.precision!==null&&(u=i.getMaxPrecision(_.precision),u!==_.precision&&K1("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let l1=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,d1=l1!==void 0?l1.length:0,$1=0;D.morphAttributes.position!==void 0&&($1=1),D.morphAttributes.normal!==void 0&&($1=2),D.morphAttributes.color!==void 0&&($1=3);let A1,j1,Q,r1;if(A){let o1=B4[A];A1=o1.vertexShader,j1=o1.fragmentShader}else{A1=_.vertexShader,j1=_.fragmentShader;let o1=c.getVertexShaderStage(_),q1=c.getFragmentShaderStage(_);c.update(_,o1,q1),Q=o1.id,r1=q1.id}let s1=n.getRenderTarget(),S1=n.state.buffers.depth.getReversed(),H1=R.isInstancedMesh===!0,T1=R.isBatchedMesh===!0,v2=!!_.map,E1=!!_.matcap,J1=!!O,i2=!!_.aoMap,t2=!!_.lightMap,$=!!_.bumpMap&&_.wireframe===!1,C2=!!_.normalMap,R2=!!_.displacementMap,B2=!!_.emissiveMap,n2=!!_.metalnessMap,E2=!!_.roughnessMap,F=_.anisotropy>0,t3=_.clearcoat>0,e2=_.dispersion>0,E=_.iridescence>0,z=_.sheen>0,B=_.transmission>0,G=F&&!!_.anisotropyMap,Z=t3&&!!_.clearcoatMap,m1=t3&&!!_.clearcoatNormalMap,h1=t3&&!!_.clearcoatRoughnessMap,e1=E&&!!_.iridescenceMap,i1=E&&!!_.iridescenceThicknessMap,_1=z&&!!_.sheenColorMap,I1=z&&!!_.sheenRoughnessMap,x1=!!_.specularMap,M1=!!_.specularColorMap,p1=!!_.specularIntensityMap,U1=B&&!!_.transmissionMap,W1=B&&!!_.thicknessMap,k=!!_.gradientMap,g1=!!_.alphaMap,n1=_.alphaTest>0,z1=!!_.alphaHash,y1=!!_.extensions,c1=g4;_.toneMapped&&(s1===null||s1.isXRRenderTarget===!0)&&(c1=n.toneMapping);let f1={shaderID:A,shaderType:_.type,shaderName:_.name,vertexShader:A1,fragmentShader:j1,defines:_.defines,customVertexShaderID:Q,customFragmentShaderID:r1,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:T1,batchingColor:T1&&R._colorsTexture!==null,instancing:H1,instancingColor:H1&&R.instanceColor!==null,instancingMorph:H1&&R.morphTexture!==null,outputColorSpace:s1===null?n.outputColorSpace:s1.isXRRenderTarget===!0?s1.texture.colorSpace:M2.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:v2,matcap:E1,envMap:J1,envMapMode:J1&&O.mapping,envMapCubeUVHeight:Y,aoMap:i2,lightMap:t2,bumpMap:$,normalMap:C2,displacementMap:R2,emissiveMap:B2,normalMapObjectSpace:C2&&_.normalMapType===Pl,normalMapTangentSpace:C2&&_.normalMapType===M8,packedNormalMap:C2&&_.normalMapType===M8&&P_(_.normalMap.format),metalnessMap:n2,roughnessMap:E2,anisotropy:F,anisotropyMap:G,clearcoat:t3,clearcoatMap:Z,clearcoatNormalMap:m1,clearcoatRoughnessMap:h1,dispersion:e2,iridescence:E,iridescenceMap:e1,iridescenceThicknessMap:i1,sheen:z,sheenColorMap:_1,sheenRoughnessMap:I1,specularMap:x1,specularColorMap:M1,specularIntensityMap:p1,transmission:B,transmissionMap:U1,thicknessMap:W1,gradientMap:k,opaque:_.transparent===!1&&_.blending===xt&&_.alphaToCoverage===!1,alphaMap:g1,alphaTest:n1,alphaHash:z1,combine:_.combine,mapUv:v2&&p(_.map.channel),aoMapUv:i2&&p(_.aoMap.channel),lightMapUv:t2&&p(_.lightMap.channel),bumpMapUv:$&&p(_.bumpMap.channel),normalMapUv:C2&&p(_.normalMap.channel),displacementMapUv:R2&&p(_.displacementMap.channel),emissiveMapUv:B2&&p(_.emissiveMap.channel),metalnessMapUv:n2&&p(_.metalnessMap.channel),roughnessMapUv:E2&&p(_.roughnessMap.channel),anisotropyMapUv:G&&p(_.anisotropyMap.channel),clearcoatMapUv:Z&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:m1&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:h1&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:e1&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:i1&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:_1&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:I1&&p(_.sheenRoughnessMap.channel),specularMapUv:x1&&p(_.specularMap.channel),specularColorMapUv:M1&&p(_.specularColorMap.channel),specularIntensityMapUv:p1&&p(_.specularIntensityMap.channel),transmissionMapUv:U1&&p(_.transmissionMap.channel),thicknessMapUv:W1&&p(_.thicknessMap.channel),alphaMapUv:g1&&p(_.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(C2||F),vertexNormals:!!D.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!D.attributes.uv&&(v2||g1),fog:!!j,useFog:_.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||D.attributes.normal===void 0&&C2===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:S1,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:d1,morphTextureStride:$1,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:c1,decodeVideoTexture:v2&&_.map.isVideoTexture===!0&&M2.getTransfer(_.map.colorSpace)===A2,decodeVideoTextureEmissive:B2&&_.emissiveMap.isVideoTexture===!0&&M2.getTransfer(_.emissiveMap.colorSpace)===A2,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===D4,flipSided:_.side===fe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:y1&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(y1&&_.extensions.multiDraw===!0||T1)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return f1.vertexUv1s=o.has(1),f1.vertexUv2s=o.has(2),f1.vertexUv3s=o.has(3),o.clear(),f1}function m(_){let C=[];if(_.shaderID?C.push(_.shaderID):(C.push(_.customVertexShaderID),C.push(_.customFragmentShaderID)),_.defines!==void 0)for(let T in _.defines)C.push(T),C.push(_.defines[T]);return _.isRawShaderMaterial===!1&&(g(C,_),x(C,_),C.push(n.outputColorSpace)),C.push(_.customProgramCacheKey),C.join()}function g(_,C){_.push(C.precision),_.push(C.outputColorSpace),_.push(C.envMapMode),_.push(C.envMapCubeUVHeight),_.push(C.mapUv),_.push(C.alphaMapUv),_.push(C.lightMapUv),_.push(C.aoMapUv),_.push(C.bumpMapUv),_.push(C.normalMapUv),_.push(C.displacementMapUv),_.push(C.emissiveMapUv),_.push(C.metalnessMapUv),_.push(C.roughnessMapUv),_.push(C.anisotropyMapUv),_.push(C.clearcoatMapUv),_.push(C.clearcoatNormalMapUv),_.push(C.clearcoatRoughnessMapUv),_.push(C.iridescenceMapUv),_.push(C.iridescenceThicknessMapUv),_.push(C.sheenColorMapUv),_.push(C.sheenRoughnessMapUv),_.push(C.specularMapUv),_.push(C.specularColorMapUv),_.push(C.specularIntensityMapUv),_.push(C.transmissionMapUv),_.push(C.thicknessMapUv),_.push(C.combine),_.push(C.fogExp2),_.push(C.sizeAttenuation),_.push(C.morphTargetsCount),_.push(C.morphAttributeCount),_.push(C.numDirLights),_.push(C.numPointLights),_.push(C.numSpotLights),_.push(C.numSpotLightMaps),_.push(C.numHemiLights),_.push(C.numRectAreaLights),_.push(C.numDirLightShadows),_.push(C.numPointLightShadows),_.push(C.numSpotLightShadows),_.push(C.numSpotLightShadowsWithMaps),_.push(C.numLightProbes),_.push(C.shadowMapType),_.push(C.toneMapping),_.push(C.numClippingPlanes),_.push(C.numClipIntersection),_.push(C.depthPacking)}function x(_,C){s.disableAll(),C.instancing&&s.enable(0),C.instancingColor&&s.enable(1),C.instancingMorph&&s.enable(2),C.matcap&&s.enable(3),C.envMap&&s.enable(4),C.normalMapObjectSpace&&s.enable(5),C.normalMapTangentSpace&&s.enable(6),C.clearcoat&&s.enable(7),C.iridescence&&s.enable(8),C.alphaTest&&s.enable(9),C.vertexColors&&s.enable(10),C.vertexAlphas&&s.enable(11),C.vertexUv1s&&s.enable(12),C.vertexUv2s&&s.enable(13),C.vertexUv3s&&s.enable(14),C.vertexTangents&&s.enable(15),C.anisotropy&&s.enable(16),C.alphaHash&&s.enable(17),C.batching&&s.enable(18),C.dispersion&&s.enable(19),C.batchingColor&&s.enable(20),C.gradientMap&&s.enable(21),C.packedNormalMap&&s.enable(22),C.vertexNormals&&s.enable(23),_.push(s.mask),s.disableAll(),C.fog&&s.enable(0),C.useFog&&s.enable(1),C.flatShading&&s.enable(2),C.logarithmicDepthBuffer&&s.enable(3),C.reversedDepthBuffer&&s.enable(4),C.skinning&&s.enable(5),C.morphTargets&&s.enable(6),C.morphNormals&&s.enable(7),C.morphColors&&s.enable(8),C.premultipliedAlpha&&s.enable(9),C.shadowMapEnabled&&s.enable(10),C.doubleSided&&s.enable(11),C.flipSided&&s.enable(12),C.useDepthPacking&&s.enable(13),C.dithering&&s.enable(14),C.transmission&&s.enable(15),C.sheen&&s.enable(16),C.opaque&&s.enable(17),C.pointsUvs&&s.enable(18),C.decodeVideoTexture&&s.enable(19),C.decodeVideoTextureEmissive&&s.enable(20),C.alphaToCoverage&&s.enable(21),C.numLightProbeGrids>0&&s.enable(22),C.hasPositionAttribute&&s.enable(23),_.push(s.mask)}function y(_){let C=d[_.type],T;if(C){let P=B4[C];T=Wl.clone(P.uniforms)}else T=_.uniforms;return T}function M(_,C){let T=f.get(C);return T!==void 0?++T.usedTimes:(T=new A_(n,C,_,a),l.push(T),f.set(C,T)),T}function b(_){if(--_.usedTimes===0){let C=l.indexOf(_);l[C]=l[l.length-1],l.pop(),f.delete(_.cacheKey),_.destroy()}}function L(_){c.remove(_)}function S(){c.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:y,acquireProgram:M,releaseProgram:b,releaseShaderCache:L,programs:l,dispose:S}}function I_(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let c=n.get(s);return c===void 0&&(c={},n.set(s,c)),c}function i(s){n.delete(s)}function a(s,c,o){n.get(s)[c]=o}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:r}}function k_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function l9(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function f9(){let n=[],e=0,t=[],i=[],a=[];function r(){e=0,t.length=0,i.length=0,a.length=0}function s(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function c(u,d,p,v,m,g){let x=n[e];return x===void 0?(x={id:u.id,object:u,geometry:d,material:p,materialVariant:s(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:g},n[e]=x):(x.id=u.id,x.object=u,x.geometry=d,x.material=p,x.materialVariant=s(u),x.groupOrder=v,x.renderOrder=u.renderOrder,x.z=m,x.group=g),e++,x}function o(u,d,p,v,m,g){let x=c(u,d,p,v,m,g);p.transmission>0?i.push(x):p.transparent===!0?a.push(x):t.push(x)}function l(u,d,p,v,m,g){let x=c(u,d,p,v,m,g);p.transmission>0?i.unshift(x):p.transparent===!0?a.unshift(x):t.unshift(x)}function f(u,d,p){t.length>1&&t.sort(u||k_),i.length>1&&i.sort(d||l9),a.length>1&&a.sort(d||l9),p&&(t.reverse(),i.reverse(),a.reverse())}function h(){for(let u=e,d=n.length;u<d;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:a,init:r,push:o,unshift:l,finish:h,sort:f}}function D_(){let n=new WeakMap;function e(i,a){let r=n.get(i),s;return r===void 0?(s=new f9,n.set(i,[s])):a>=r.length?(s=new f9,r.push(s)):s=r[a],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function F_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new S2};break;case"SpotLight":t={position:new V,direction:new V,color:new S2,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new S2,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new S2,groundColor:new S2};break;case"RectAreaLight":t={color:new S2,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function O_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z2};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z2};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z2,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var U_=0;function B_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function H_(n){let e=new F_,t=O_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new V);let a=new V,r=new r3,s=new r3;function c(l){let f=0,h=0,u=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let d=0,p=0,v=0,m=0,g=0,x=0,y=0,M=0,b=0,L=0,S=0;l.sort(B_);for(let C=0,T=l.length;C<T;C++){let P=l[C],R=P.color,q=P.intensity,j=P.distance,D=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===V0?D=P.shadow.map.texture:D=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)f+=R.r*q,h+=R.g*q,u+=R.b*q;else if(P.isLightProbe){for(let I=0;I<9;I++)i.probe[I].addScaledVector(P.sh.coefficients[I],q);S++}else if(P.isDirectionalLight){let I=e.get(P);if(I.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let N=P.shadow,O=t.get(P);O.shadowIntensity=N.intensity,O.shadowBias=N.bias,O.shadowNormalBias=N.normalBias,O.shadowRadius=N.radius,O.shadowMapSize=N.mapSize,i.directionalShadow[d]=O,i.directionalShadowMap[d]=D,i.directionalShadowMatrix[d]=P.shadow.matrix,x++}i.directional[d]=I,d++}else if(P.isSpotLight){let I=e.get(P);I.position.setFromMatrixPosition(P.matrixWorld),I.color.copy(R).multiplyScalar(q),I.distance=j,I.coneCos=Math.cos(P.angle),I.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),I.decay=P.decay,i.spot[v]=I;let N=P.shadow;if(P.map&&(i.spotLightMap[b]=P.map,b++,N.updateMatrices(P),P.castShadow&&L++),i.spotLightMatrix[v]=N.matrix,P.castShadow){let O=t.get(P);O.shadowIntensity=N.intensity,O.shadowBias=N.bias,O.shadowNormalBias=N.normalBias,O.shadowRadius=N.radius,O.shadowMapSize=N.mapSize,i.spotShadow[v]=O,i.spotShadowMap[v]=D,M++}v++}else if(P.isRectAreaLight){let I=e.get(P);I.color.copy(R).multiplyScalar(q),I.halfWidth.set(P.width*.5,0,0),I.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=I,m++}else if(P.isPointLight){let I=e.get(P);if(I.color.copy(P.color).multiplyScalar(P.intensity),I.distance=P.distance,I.decay=P.decay,P.castShadow){let N=P.shadow,O=t.get(P);O.shadowIntensity=N.intensity,O.shadowBias=N.bias,O.shadowNormalBias=N.normalBias,O.shadowRadius=N.radius,O.shadowMapSize=N.mapSize,O.shadowCameraNear=N.camera.near,O.shadowCameraFar=N.camera.far,i.pointShadow[p]=O,i.pointShadowMap[p]=D,i.pointShadowMatrix[p]=P.shadow.matrix,y++}i.point[p]=I,p++}else if(P.isHemisphereLight){let I=e.get(P);I.skyColor.copy(P.color).multiplyScalar(q),I.groundColor.copy(P.groundColor).multiplyScalar(q),i.hemi[g]=I,g++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=L1.LTC_FLOAT_1,i.rectAreaLTC2=L1.LTC_FLOAT_2):(i.rectAreaLTC1=L1.LTC_HALF_1,i.rectAreaLTC2=L1.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=u;let _=i.hash;(_.directionalLength!==d||_.pointLength!==p||_.spotLength!==v||_.rectAreaLength!==m||_.hemiLength!==g||_.numDirectionalShadows!==x||_.numPointShadows!==y||_.numSpotShadows!==M||_.numSpotMaps!==b||_.numLightProbes!==S)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=p,i.hemi.length=g,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=M+b-L,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=S,_.directionalLength=d,_.pointLength=p,_.spotLength=v,_.rectAreaLength=m,_.hemiLength=g,_.numDirectionalShadows=x,_.numPointShadows=y,_.numSpotShadows=M,_.numSpotMaps=b,_.numLightProbes=S,i.version=U_++)}function o(l,f){let h=0,u=0,d=0,p=0,v=0,m=f.matrixWorldInverse;for(let g=0,x=l.length;g<x;g++){let y=l[g];if(y.isDirectionalLight){let M=i.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(m),h++}else if(y.isSpotLight){let M=i.spot[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(m),d++}else if(y.isRectAreaLight){let M=i.rectArea[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),s.identity(),r.copy(y.matrixWorld),r.premultiply(m),s.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),p++}else if(y.isPointLight){let M=i.point[u];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),u++}else if(y.isHemisphereLight){let M=i.hemi[v];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:c,setupView:o,state:i}}function u9(n){let e=new H_(n),t=[],i=[],a=[];function r(u){h.camera=u,t.length=0,i.length=0,a.length=0}function s(u){t.push(u)}function c(u){i.push(u)}function o(u){a.push(u)}function l(){e.setup(t)}function f(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:f,pushLight:s,pushShadow:c,pushLightProbeGrid:o}}function V_(n){let e=new WeakMap;function t(a,r=0){let s=e.get(a),c;return s===void 0?(c=new u9(n),e.set(a,[c])):r>=s.length?(c=new u9(n),s.push(c)):c=s[r],c}function i(){e=new WeakMap}return{get:t,dispose:i}}var G_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W_=`uniform sampler2D shadow_pass;
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
}`,q_=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],X_=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],h9=new r3,qi=new V,A8=new V;function Y_(n,e,t){let i=new yi,a=new z2,r=new z2,s=new J2,c=new Ba,o=new Ha,l={},f=t.maxTextureSize,h={[n0]:fe,[fe]:n0,[D4]:D4},u=new Be({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new z2},radius:{value:4}},vertexShader:G_,fragmentShader:W_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let p=new le;p.setAttribute("position",new oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new U3(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ii;let g=this.type;this.render=function(L,S,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;this.type===ll&&(K1("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ii);let C=n.getRenderTarget(),T=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),R=n.state;R.setBlending(F4),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);let q=g!==this.type;q&&S.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(D=>D.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,D=L.length;j<D;j++){let I=L[j],N=I.shadow;if(N===void 0){K1("WebGLShadowMap:",I,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;a.copy(N.mapSize);let O=N.getFrameExtents();a.multiply(O),r.copy(N.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(r.x=Math.floor(f/O.x),a.x=r.x*O.x,N.mapSize.x=r.x),a.y>f&&(r.y=Math.floor(f/O.y),a.y=r.y*O.y,N.mapSize.y=r.y));let Y=n.state.buffers.depth.getReversed();if(N.camera._reversedDepth=Y,N.map===null||q===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===y6){if(I.isPointLight){K1("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Ue(a.x,a.y,{format:V0,type:O4,minFilter:O3,magFilter:O3,generateMipmaps:!1}),N.map.texture.name=I.name+".shadowMap",N.map.depthTexture=new r0(a.x,a.y,M4),N.map.depthTexture.name=I.name+".shadowMapDepth",N.map.depthTexture.format=R4,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=E3,N.map.depthTexture.magFilter=E3}else I.isPointLight?(N.map=new Vr(a.x),N.map.depthTexture=new Oa(a.x,v4)):(N.map=new Ue(a.x,a.y),N.map.depthTexture=new r0(a.x,a.y,v4)),N.map.depthTexture.name=I.name+".shadowMap",N.map.depthTexture.format=R4,this.type===Ii?(N.map.depthTexture.compareFunction=Y?Or:Fr,N.map.depthTexture.minFilter=O3,N.map.depthTexture.magFilter=O3):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=E3,N.map.depthTexture.magFilter=E3);N.camera.updateProjectionMatrix()}let A=N.map.isWebGLCubeRenderTarget?6:1;for(let l1=0;l1<A;l1++){if(N.map.isWebGLCubeRenderTarget)n.setRenderTarget(N.map,l1),n.clear();else{l1===0&&(n.setRenderTarget(N.map),n.clear());let d1=N.getViewport(l1);s.set(r.x*d1.x,r.y*d1.y,r.x*d1.z,r.y*d1.w),R.viewport(s)}if(I.isPointLight){let d1=N.camera,$1=N.matrix,A1=I.distance||d1.far;A1!==d1.far&&(d1.far=A1,d1.updateProjectionMatrix()),qi.setFromMatrixPosition(I.matrixWorld),d1.position.copy(qi),A8.copy(d1.position),A8.add(q_[l1]),d1.up.copy(X_[l1]),d1.lookAt(A8),d1.updateMatrixWorld(),$1.makeTranslation(-qi.x,-qi.y,-qi.z),h9.multiplyMatrices(d1.projectionMatrix,d1.matrixWorldInverse),N._frustum.setFromProjectionMatrix(h9,d1.coordinateSystem,d1.reversedDepth)}else N.updateMatrices(I);i=N.getFrustum(),M(S,_,N.camera,I,this.type)}N.isPointLightShadow!==!0&&this.type===y6&&x(N,_),N.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(C,T,P)};function x(L,S){let _=e.update(v);u.defines.VSM_SAMPLES!==L.blurSamples&&(u.defines.VSM_SAMPLES=L.blurSamples,d.defines.VSM_SAMPLES=L.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Ue(a.x,a.y,{format:V0,type:O4})),u.uniforms.shadow_pass.value=L.map.depthTexture,u.uniforms.resolution.value=L.mapSize,u.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(S,null,_,u,v,null),d.uniforms.shadow_pass.value=L.mapPass.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(S,null,_,d,v,null)}function y(L,S,_,C){let T=null,P=_.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(P!==void 0)T=P;else if(T=_.isPointLight===!0?o:c,n.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0||S.alphaToCoverage===!0){let R=T.uuid,q=S.uuid,j=l[R];j===void 0&&(j={},l[R]=j);let D=j[q];D===void 0&&(D=T.clone(),j[q]=D,S.addEventListener("dispose",b)),T=D}if(T.visible=S.visible,T.wireframe=S.wireframe,C===y6?T.side=S.shadowSide!==null?S.shadowSide:S.side:T.side=S.shadowSide!==null?S.shadowSide:h[S.side],T.alphaMap=S.alphaMap,T.alphaTest=S.alphaToCoverage===!0?.5:S.alphaTest,T.map=S.map,T.clipShadows=S.clipShadows,T.clippingPlanes=S.clippingPlanes,T.clipIntersection=S.clipIntersection,T.displacementMap=S.displacementMap,T.displacementScale=S.displacementScale,T.displacementBias=S.displacementBias,T.wireframeLinewidth=S.wireframeLinewidth,T.linewidth=S.linewidth,_.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let R=n.properties.get(T);R.light=_}return T}function M(L,S,_,C,T){if(L.visible===!1)return;if(L.layers.test(S.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&T===y6)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,L.matrixWorld);let q=e.update(L),j=L.material;if(Array.isArray(j)){let D=q.groups;for(let I=0,N=D.length;I<N;I++){let O=D[I],Y=j[O.materialIndex];if(Y&&Y.visible){let A=y(L,Y,C,T);L.onBeforeShadow(n,L,S,_,q,A,O),n.renderBufferDirect(_,null,q,A,L,O),L.onAfterShadow(n,L,S,_,q,A,O)}}}else if(j.visible){let D=y(L,j,C,T);L.onBeforeShadow(n,L,S,_,q,D,null),n.renderBufferDirect(_,null,q,D,L,null),L.onAfterShadow(n,L,S,_,q,D,null)}}let R=L.children;for(let q=0,j=R.length;q<j;q++)M(R[q],S,_,C,T)}function b(L){L.target.removeEventListener("dispose",b);for(let _ in l){let C=l[_],T=L.target.uuid;T in C&&(C[T].dispose(),delete C[T])}}}function $_(n,e){function t(){let k=!1,g1=new J2,n1=null,z1=new J2(0,0,0,0);return{setMask:function(y1){n1!==y1&&!k&&(n.colorMask(y1,y1,y1,y1),n1=y1)},setLocked:function(y1){k=y1},setClear:function(y1,c1,f1,o1,q1){q1===!0&&(y1*=o1,c1*=o1,f1*=o1),g1.set(y1,c1,f1,o1),z1.equals(g1)===!1&&(n.clearColor(y1,c1,f1,o1),z1.copy(g1))},reset:function(){k=!1,n1=null,z1.set(-1,0,0,0)}}}function i(){let k=!1,g1=!1,n1=null,z1=null,y1=null;return{setReversed:function(c1){if(g1!==c1){let f1=e.get("EXT_clip_control");c1?f1.clipControlEXT(f1.LOWER_LEFT_EXT,f1.ZERO_TO_ONE_EXT):f1.clipControlEXT(f1.LOWER_LEFT_EXT,f1.NEGATIVE_ONE_TO_ONE_EXT),g1=c1;let o1=y1;y1=null,this.setClear(o1)}},getReversed:function(){return g1},setTest:function(c1){c1?s1(n.DEPTH_TEST):S1(n.DEPTH_TEST)},setMask:function(c1){n1!==c1&&!k&&(n.depthMask(c1),n1=c1)},setFunc:function(c1){if(g1&&(c1=Vl[c1]),z1!==c1){switch(c1){case ba:n.depthFunc(n.NEVER);break;case Sa:n.depthFunc(n.ALWAYS);break;case Ca:n.depthFunc(n.LESS);break;case zt:n.depthFunc(n.LEQUAL);break;case La:n.depthFunc(n.EQUAL);break;case wa:n.depthFunc(n.GEQUAL);break;case Ta:n.depthFunc(n.GREATER);break;case Ea:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}z1=c1}},setLocked:function(c1){k=c1},setClear:function(c1){y1!==c1&&(y1=c1,g1&&(c1=1-c1),n.clearDepth(c1))},reset:function(){k=!1,n1=null,z1=null,y1=null,g1=!1}}}function a(){let k=!1,g1=null,n1=null,z1=null,y1=null,c1=null,f1=null,o1=null,q1=null;return{setTest:function(u1){k||(u1?s1(n.STENCIL_TEST):S1(n.STENCIL_TEST))},setMask:function(u1){g1!==u1&&!k&&(n.stencilMask(u1),g1=u1)},setFunc:function(u1,X1,k1){(n1!==u1||z1!==X1||y1!==k1)&&(n.stencilFunc(u1,X1,k1),n1=u1,z1=X1,y1=k1)},setOp:function(u1,X1,k1){(c1!==u1||f1!==X1||o1!==k1)&&(n.stencilOp(u1,X1,k1),c1=u1,f1=X1,o1=k1)},setLocked:function(u1){k=u1},setClear:function(u1){q1!==u1&&(n.clearStencil(u1),q1=u1)},reset:function(){k=!1,g1=null,n1=null,z1=null,y1=null,c1=null,f1=null,o1=null,q1=null}}}let r=new t,s=new i,c=new a,o=new WeakMap,l=new WeakMap,f={},h={},u={},d=new WeakMap,p=[],v=null,m=!1,g=null,x=null,y=null,M=null,b=null,L=null,S=null,_=new S2(0,0,0),C=0,T=!1,P=null,R=null,q=null,j=null,D=null,I=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,O=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(Y)[1]),N=O>=1):Y.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),N=O>=2);let A=null,l1={},d1=n.getParameter(n.SCISSOR_BOX),$1=n.getParameter(n.VIEWPORT),A1=new J2().fromArray(d1),j1=new J2().fromArray($1);function Q(k,g1,n1,z1){let y1=new Uint8Array(4),c1=n.createTexture();n.bindTexture(k,c1),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let f1=0;f1<n1;f1++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(g1,0,n.RGBA,1,1,z1,0,n.RGBA,n.UNSIGNED_BYTE,y1):n.texImage2D(g1+f1,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,y1);return c1}let r1={};r1[n.TEXTURE_2D]=Q(n.TEXTURE_2D,n.TEXTURE_2D,1),r1[n.TEXTURE_CUBE_MAP]=Q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),r1[n.TEXTURE_2D_ARRAY]=Q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),r1[n.TEXTURE_3D]=Q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),c.setClear(0),s1(n.DEPTH_TEST),s.setFunc(zt),$(!1),C2(Qs),s1(n.CULL_FACE),i2(F4);function s1(k){f[k]!==!0&&(n.enable(k),f[k]=!0)}function S1(k){f[k]!==!1&&(n.disable(k),f[k]=!1)}function H1(k,g1){return u[k]!==g1?(n.bindFramebuffer(k,g1),u[k]=g1,k===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=g1),k===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=g1),!0):!1}function T1(k,g1){let n1=p,z1=!1;if(k){n1=d.get(g1),n1===void 0&&(n1=[],d.set(g1,n1));let y1=k.textures;if(n1.length!==y1.length||n1[0]!==n.COLOR_ATTACHMENT0){for(let c1=0,f1=y1.length;c1<f1;c1++)n1[c1]=n.COLOR_ATTACHMENT0+c1;n1.length=y1.length,z1=!0}}else n1[0]!==n.BACK&&(n1[0]=n.BACK,z1=!0);z1&&n.drawBuffers(n1)}function v2(k){return v!==k?(n.useProgram(k),v=k,!0):!1}let E1={[R0]:n.FUNC_ADD,[ul]:n.FUNC_SUBTRACT,[hl]:n.FUNC_REVERSE_SUBTRACT};E1[dl]=n.MIN,E1[pl]=n.MAX;let J1={[ml]:n.ZERO,[gl]:n.ONE,[vl]:n.SRC_COLOR,[za]:n.SRC_ALPHA,[bl]:n.SRC_ALPHA_SATURATE,[zl]:n.DST_COLOR,[_l]:n.DST_ALPHA,[Ml]:n.ONE_MINUS_SRC_COLOR,[ya]:n.ONE_MINUS_SRC_ALPHA,[yl]:n.ONE_MINUS_DST_COLOR,[xl]:n.ONE_MINUS_DST_ALPHA,[Sl]:n.CONSTANT_COLOR,[Cl]:n.ONE_MINUS_CONSTANT_COLOR,[Ll]:n.CONSTANT_ALPHA,[wl]:n.ONE_MINUS_CONSTANT_ALPHA};function i2(k,g1,n1,z1,y1,c1,f1,o1,q1,u1){if(k===F4){m===!0&&(S1(n.BLEND),m=!1);return}if(m===!1&&(s1(n.BLEND),m=!0),k!==fl){if(k!==g||u1!==T){if((x!==R0||b!==R0)&&(n.blendEquation(n.FUNC_ADD),x=R0,b=R0),u1)switch(k){case xt:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case e8:n.blendFunc(n.ONE,n.ONE);break;case t8:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case i8:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Q1("WebGLState: Invalid blending: ",k);break}else switch(k){case xt:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case e8:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case t8:Q1("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case i8:Q1("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Q1("WebGLState: Invalid blending: ",k);break}y=null,M=null,L=null,S=null,_.set(0,0,0),C=0,g=k,T=u1}return}y1=y1||g1,c1=c1||n1,f1=f1||z1,(g1!==x||y1!==b)&&(n.blendEquationSeparate(E1[g1],E1[y1]),x=g1,b=y1),(n1!==y||z1!==M||c1!==L||f1!==S)&&(n.blendFuncSeparate(J1[n1],J1[z1],J1[c1],J1[f1]),y=n1,M=z1,L=c1,S=f1),(o1.equals(_)===!1||q1!==C)&&(n.blendColor(o1.r,o1.g,o1.b,q1),_.copy(o1),C=q1),g=k,T=!1}function t2(k,g1){k.side===D4?S1(n.CULL_FACE):s1(n.CULL_FACE);let n1=k.side===fe;g1&&(n1=!n1),$(n1),k.blending===xt&&k.transparent===!1?i2(F4):i2(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),s.setFunc(k.depthFunc),s.setTest(k.depthTest),s.setMask(k.depthWrite),r.setMask(k.colorWrite);let z1=k.stencilWrite;c.setTest(z1),z1&&(c.setMask(k.stencilWriteMask),c.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),c.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),B2(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?s1(n.SAMPLE_ALPHA_TO_COVERAGE):S1(n.SAMPLE_ALPHA_TO_COVERAGE)}function $(k){P!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),P=k)}function C2(k){k!==cl?(s1(n.CULL_FACE),k!==R&&(k===Qs?n.cullFace(n.BACK):k===ol?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):S1(n.CULL_FACE),R=k}function R2(k){k!==q&&(N&&n.lineWidth(k),q=k)}function B2(k,g1,n1){k?(s1(n.POLYGON_OFFSET_FILL),(j!==g1||D!==n1)&&(j=g1,D=n1,s.getReversed()&&(g1=-g1),n.polygonOffset(g1,n1))):S1(n.POLYGON_OFFSET_FILL)}function n2(k){k?s1(n.SCISSOR_TEST):S1(n.SCISSOR_TEST)}function E2(k){k===void 0&&(k=n.TEXTURE0+I-1),A!==k&&(n.activeTexture(k),A=k)}function F(k,g1,n1){n1===void 0&&(A===null?n1=n.TEXTURE0+I-1:n1=A);let z1=l1[n1];z1===void 0&&(z1={type:void 0,texture:void 0},l1[n1]=z1),(z1.type!==k||z1.texture!==g1)&&(A!==n1&&(n.activeTexture(n1),A=n1),n.bindTexture(k,g1||r1[k]),z1.type=k,z1.texture=g1)}function t3(){let k=l1[A];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function e2(){try{n.compressedTexImage2D(...arguments)}catch(k){Q1("WebGLState:",k)}}function E(){try{n.compressedTexImage3D(...arguments)}catch(k){Q1("WebGLState:",k)}}function z(){try{n.texSubImage2D(...arguments)}catch(k){Q1("WebGLState:",k)}}function B(){try{n.texSubImage3D(...arguments)}catch(k){Q1("WebGLState:",k)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(k){Q1("WebGLState:",k)}}function Z(){try{n.compressedTexSubImage3D(...arguments)}catch(k){Q1("WebGLState:",k)}}function m1(){try{n.texStorage2D(...arguments)}catch(k){Q1("WebGLState:",k)}}function h1(){try{n.texStorage3D(...arguments)}catch(k){Q1("WebGLState:",k)}}function e1(){try{n.texImage2D(...arguments)}catch(k){Q1("WebGLState:",k)}}function i1(){try{n.texImage3D(...arguments)}catch(k){Q1("WebGLState:",k)}}function _1(k){return h[k]!==void 0?h[k]:n.getParameter(k)}function I1(k,g1){h[k]!==g1&&(n.pixelStorei(k,g1),h[k]=g1)}function x1(k){A1.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),A1.copy(k))}function M1(k){j1.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),j1.copy(k))}function p1(k,g1){let n1=l.get(g1);n1===void 0&&(n1=new WeakMap,l.set(g1,n1));let z1=n1.get(k);z1===void 0&&(z1=n.getUniformBlockIndex(g1,k.name),n1.set(k,z1))}function U1(k,g1){let z1=l.get(g1).get(k);o.get(g1)!==z1&&(n.uniformBlockBinding(g1,z1,k.__bindingPointIndex),o.set(g1,z1))}function W1(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),f={},h={},A=null,l1={},u={},d=new WeakMap,p=[],v=null,m=!1,g=null,x=null,y=null,M=null,b=null,L=null,S=null,_=new S2(0,0,0),C=0,T=!1,P=null,R=null,q=null,j=null,D=null,A1.set(0,0,n.canvas.width,n.canvas.height),j1.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),c.reset()}return{buffers:{color:r,depth:s,stencil:c},enable:s1,disable:S1,bindFramebuffer:H1,drawBuffers:T1,useProgram:v2,setBlending:i2,setMaterial:t2,setFlipSided:$,setCullFace:C2,setLineWidth:R2,setPolygonOffset:B2,setScissorTest:n2,activeTexture:E2,bindTexture:F,unbindTexture:t3,compressedTexImage2D:e2,compressedTexImage3D:E,texImage2D:e1,texImage3D:i1,pixelStorei:I1,getParameter:_1,updateUBOMapping:p1,uniformBlockBinding:U1,texStorage2D:m1,texStorage3D:h1,texSubImage2D:z,texSubImage3D:B,compressedTexSubImage2D:G,compressedTexSubImage3D:Z,scissor:x1,viewport:M1,reset:W1}}function j_(n,e,t,i,a,r,s){let c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new z2,f=new WeakMap,h=new Set,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(E){}function v(E,z){return p?new OffscreenCanvas(E,z):pi("canvas")}function m(E,z,B){let G=1,Z=e2(E);if((Z.width>B||Z.height>B)&&(G=B/Math.max(Z.width,Z.height)),G<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let m1=Math.floor(G*Z.width),h1=Math.floor(G*Z.height);u===void 0&&(u=v(m1,h1));let e1=z?v(m1,h1):u;return e1.width=m1,e1.height=h1,e1.getContext("2d").drawImage(E,0,0,m1,h1),K1("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+m1+"x"+h1+")."),e1}else return"data"in E&&K1("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),E;return E}function g(E){return E.generateMipmaps}function x(E){n.generateMipmap(E)}function y(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(E,z,B,G,Z,m1=!1){if(E!==null){if(n[E]!==void 0)return n[E];K1("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let h1;G&&(h1=e.get("EXT_texture_norm16"),h1||K1("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let e1=z;if(z===n.RED&&(B===n.FLOAT&&(e1=n.R32F),B===n.HALF_FLOAT&&(e1=n.R16F),B===n.UNSIGNED_BYTE&&(e1=n.R8),B===n.UNSIGNED_SHORT&&h1&&(e1=h1.R16_EXT),B===n.SHORT&&h1&&(e1=h1.R16_SNORM_EXT)),z===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(e1=n.R8UI),B===n.UNSIGNED_SHORT&&(e1=n.R16UI),B===n.UNSIGNED_INT&&(e1=n.R32UI),B===n.BYTE&&(e1=n.R8I),B===n.SHORT&&(e1=n.R16I),B===n.INT&&(e1=n.R32I)),z===n.RG&&(B===n.FLOAT&&(e1=n.RG32F),B===n.HALF_FLOAT&&(e1=n.RG16F),B===n.UNSIGNED_BYTE&&(e1=n.RG8),B===n.UNSIGNED_SHORT&&h1&&(e1=h1.RG16_EXT),B===n.SHORT&&h1&&(e1=h1.RG16_SNORM_EXT)),z===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(e1=n.RG8UI),B===n.UNSIGNED_SHORT&&(e1=n.RG16UI),B===n.UNSIGNED_INT&&(e1=n.RG32UI),B===n.BYTE&&(e1=n.RG8I),B===n.SHORT&&(e1=n.RG16I),B===n.INT&&(e1=n.RG32I)),z===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(e1=n.RGB8UI),B===n.UNSIGNED_SHORT&&(e1=n.RGB16UI),B===n.UNSIGNED_INT&&(e1=n.RGB32UI),B===n.BYTE&&(e1=n.RGB8I),B===n.SHORT&&(e1=n.RGB16I),B===n.INT&&(e1=n.RGB32I)),z===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(e1=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(e1=n.RGBA16UI),B===n.UNSIGNED_INT&&(e1=n.RGBA32UI),B===n.BYTE&&(e1=n.RGBA8I),B===n.SHORT&&(e1=n.RGBA16I),B===n.INT&&(e1=n.RGBA32I)),z===n.RGB&&(B===n.UNSIGNED_SHORT&&h1&&(e1=h1.RGB16_EXT),B===n.SHORT&&h1&&(e1=h1.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(e1=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(e1=n.R11F_G11F_B10F)),z===n.RGBA){let i1=m1?hi:M2.getTransfer(Z);B===n.FLOAT&&(e1=n.RGBA32F),B===n.HALF_FLOAT&&(e1=n.RGBA16F),B===n.UNSIGNED_BYTE&&(e1=i1===A2?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&h1&&(e1=h1.RGBA16_EXT),B===n.SHORT&&h1&&(e1=h1.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(e1=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(e1=n.RGB5_A1)}return(e1===n.R16F||e1===n.R32F||e1===n.RG16F||e1===n.RG32F||e1===n.RGBA16F||e1===n.RGBA32F)&&e.get("EXT_color_buffer_float"),e1}function b(E,z){let B;return E?z===null||z===v4||z===S6?B=n.DEPTH24_STENCIL8:z===M4?B=n.DEPTH32F_STENCIL8:z===b6&&(B=n.DEPTH24_STENCIL8,K1("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):z===null||z===v4||z===S6?B=n.DEPTH_COMPONENT24:z===M4?B=n.DEPTH_COMPONENT32F:z===b6&&(B=n.DEPTH_COMPONENT16),B}function L(E,z){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==E3&&E.minFilter!==O3?Math.log2(Math.max(z.width,z.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?z.mipmaps.length:1}function S(E){let z=E.target;z.removeEventListener("dispose",S),C(z),z.isVideoTexture&&f.delete(z),z.isHTMLTexture&&h.delete(z)}function _(E){let z=E.target;z.removeEventListener("dispose",_),P(z)}function C(E){let z=i.get(E);if(z.__webglInit===void 0)return;let B=E.source,G=d.get(B);if(G){let Z=G[z.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&T(E),Object.keys(G).length===0&&d.delete(B)}i.remove(E)}function T(E){let z=i.get(E);n.deleteTexture(z.__webglTexture);let B=E.source,G=d.get(B);delete G[z.__cacheKey],s.memory.textures--}function P(E){let z=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(z.__webglFramebuffer[G]))for(let Z=0;Z<z.__webglFramebuffer[G].length;Z++)n.deleteFramebuffer(z.__webglFramebuffer[G][Z]);else n.deleteFramebuffer(z.__webglFramebuffer[G]);z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer[G])}else{if(Array.isArray(z.__webglFramebuffer))for(let G=0;G<z.__webglFramebuffer.length;G++)n.deleteFramebuffer(z.__webglFramebuffer[G]);else n.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let G=0;G<z.__webglColorRenderbuffer.length;G++)z.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(z.__webglColorRenderbuffer[G]);z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(z.__webglDepthRenderbuffer)}let B=E.textures;for(let G=0,Z=B.length;G<Z;G++){let m1=i.get(B[G]);m1.__webglTexture&&(n.deleteTexture(m1.__webglTexture),s.memory.textures--),i.remove(B[G])}i.remove(E)}let R=0;function q(){R=0}function j(){return R}function D(E){R=E}function I(){let E=R;return E>=a.maxTextures&&K1("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+a.maxTextures),R+=1,E}function N(E){let z=[];return z.push(E.wrapS),z.push(E.wrapT),z.push(E.wrapR||0),z.push(E.magFilter),z.push(E.minFilter),z.push(E.anisotropy),z.push(E.internalFormat),z.push(E.format),z.push(E.type),z.push(E.generateMipmaps),z.push(E.premultiplyAlpha),z.push(E.flipY),z.push(E.unpackAlignment),z.push(E.colorSpace),z.join()}function O(E,z){let B=i.get(E);if(E.isVideoTexture&&F(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&B.__version!==E.version){let G=E.image;if(G===null)K1("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)K1("WebGLRenderer: Texture marked for update but image is incomplete");else{S1(B,E,z);return}}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+z)}function Y(E,z){let B=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){S1(B,E,z);return}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+z)}function A(E,z){let B=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){S1(B,E,z);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+z)}function l1(E,z){let B=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&B.__version!==E.version){H1(B,E,z);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+z)}let d1={[Aa]:n.REPEAT,[P4]:n.CLAMP_TO_EDGE,[Na]:n.MIRRORED_REPEAT},$1={[E3]:n.NEAREST,[Al]:n.NEAREST_MIPMAP_NEAREST,[Di]:n.NEAREST_MIPMAP_LINEAR,[O3]:n.LINEAR,[er]:n.LINEAR_MIPMAP_NEAREST,[B0]:n.LINEAR_MIPMAP_LINEAR},A1={[Rl]:n.NEVER,[Ol]:n.ALWAYS,[Il]:n.LESS,[Fr]:n.LEQUAL,[kl]:n.EQUAL,[Or]:n.GEQUAL,[Dl]:n.GREATER,[Fl]:n.NOTEQUAL};function j1(E,z){if(z.type===M4&&e.has("OES_texture_float_linear")===!1&&(z.magFilter===O3||z.magFilter===er||z.magFilter===Di||z.magFilter===B0||z.minFilter===O3||z.minFilter===er||z.minFilter===Di||z.minFilter===B0)&&K1("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,d1[z.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,d1[z.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,d1[z.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,$1[z.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,$1[z.minFilter]),z.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,A1[z.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(z.magFilter===E3||z.minFilter!==Di&&z.minFilter!==B0||z.type===M4&&e.has("OES_texture_float_linear")===!1)return;if(z.anisotropy>1||i.get(z).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(z.anisotropy,a.getMaxAnisotropy())),i.get(z).__currentAnisotropy=z.anisotropy}}}function Q(E,z){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,z.addEventListener("dispose",S));let G=z.source,Z=d.get(G);Z===void 0&&(Z={},d.set(G,Z));let m1=N(z);if(m1!==E.__cacheKey){Z[m1]===void 0&&(Z[m1]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,B=!0),Z[m1].usedTimes++;let h1=Z[E.__cacheKey];h1!==void 0&&(Z[E.__cacheKey].usedTimes--,h1.usedTimes===0&&T(z)),E.__cacheKey=m1,E.__webglTexture=Z[m1].texture}return B}function r1(E,z,B){return Math.floor(Math.floor(E/B)/z)}function s1(E,z,B,G){let m1=E.updateRanges;if(m1.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,z.width,z.height,B,G,z.data);else{m1.sort((I1,x1)=>I1.start-x1.start);let h1=0;for(let I1=1;I1<m1.length;I1++){let x1=m1[h1],M1=m1[I1],p1=x1.start+x1.count,U1=r1(M1.start,z.width,4),W1=r1(x1.start,z.width,4);M1.start<=p1+1&&U1===W1&&r1(M1.start+M1.count-1,z.width,4)===U1?x1.count=Math.max(x1.count,M1.start+M1.count-x1.start):(++h1,m1[h1]=M1)}m1.length=h1+1;let e1=t.getParameter(n.UNPACK_ROW_LENGTH),i1=t.getParameter(n.UNPACK_SKIP_PIXELS),_1=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,z.width);for(let I1=0,x1=m1.length;I1<x1;I1++){let M1=m1[I1],p1=Math.floor(M1.start/4),U1=Math.ceil(M1.count/4),W1=p1%z.width,k=Math.floor(p1/z.width),g1=U1,n1=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,W1),t.pixelStorei(n.UNPACK_SKIP_ROWS,k),t.texSubImage2D(n.TEXTURE_2D,0,W1,k,g1,n1,B,G,z.data)}E.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,e1),t.pixelStorei(n.UNPACK_SKIP_PIXELS,i1),t.pixelStorei(n.UNPACK_SKIP_ROWS,_1)}}function S1(E,z,B){let G=n.TEXTURE_2D;(z.isDataArrayTexture||z.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),z.isData3DTexture&&(G=n.TEXTURE_3D);let Z=Q(E,z),m1=z.source;t.bindTexture(G,E.__webglTexture,n.TEXTURE0+B);let h1=i.get(m1);if(m1.version!==h1.__version||Z===!0){if(t.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&z.image instanceof ImageBitmap)===!1){let n1=M2.getPrimaries(M2.workingColorSpace),z1=z.colorSpace===s0?null:M2.getPrimaries(z.colorSpace),y1=z.colorSpace===s0||n1===z1?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,z.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,y1)}t.pixelStorei(n.UNPACK_ALIGNMENT,z.unpackAlignment);let i1=m(z.image,!1,a.maxTextureSize);i1=t3(z,i1);let _1=r.convert(z.format,z.colorSpace),I1=r.convert(z.type),x1=M(z.internalFormat,_1,I1,z.normalized,z.colorSpace,z.isVideoTexture);j1(G,z);let M1,p1=z.mipmaps,U1=z.isVideoTexture!==!0,W1=h1.__version===void 0||Z===!0,k=m1.dataReady,g1=L(z,i1);if(z.isDepthTexture)x1=b(z.format===H0,z.type),W1&&(U1?t.texStorage2D(n.TEXTURE_2D,1,x1,i1.width,i1.height):t.texImage2D(n.TEXTURE_2D,0,x1,i1.width,i1.height,0,_1,I1,null));else if(z.isDataTexture)if(p1.length>0){U1&&W1&&t.texStorage2D(n.TEXTURE_2D,g1,x1,p1[0].width,p1[0].height);for(let n1=0,z1=p1.length;n1<z1;n1++)M1=p1[n1],U1?k&&t.texSubImage2D(n.TEXTURE_2D,n1,0,0,M1.width,M1.height,_1,I1,M1.data):t.texImage2D(n.TEXTURE_2D,n1,x1,M1.width,M1.height,0,_1,I1,M1.data);z.generateMipmaps=!1}else U1?(W1&&t.texStorage2D(n.TEXTURE_2D,g1,x1,i1.width,i1.height),k&&s1(z,i1,_1,I1)):t.texImage2D(n.TEXTURE_2D,0,x1,i1.width,i1.height,0,_1,I1,i1.data);else if(z.isCompressedTexture)if(z.isCompressedArrayTexture){U1&&W1&&t.texStorage3D(n.TEXTURE_2D_ARRAY,g1,x1,p1[0].width,p1[0].height,i1.depth);for(let n1=0,z1=p1.length;n1<z1;n1++)if(M1=p1[n1],z.format!==i4)if(_1!==null)if(U1){if(k)if(z.layerUpdates.size>0){let y1=S8(M1.width,M1.height,z.format,z.type);for(let c1 of z.layerUpdates){let f1=M1.data.subarray(c1*y1/M1.data.BYTES_PER_ELEMENT,(c1+1)*y1/M1.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,n1,0,0,c1,M1.width,M1.height,1,_1,f1)}z.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,n1,0,0,0,M1.width,M1.height,i1.depth,_1,M1.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,n1,x1,M1.width,M1.height,i1.depth,0,M1.data,0,0);else K1("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U1?k&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,n1,0,0,0,M1.width,M1.height,i1.depth,_1,I1,M1.data):t.texImage3D(n.TEXTURE_2D_ARRAY,n1,x1,M1.width,M1.height,i1.depth,0,_1,I1,M1.data)}else{U1&&W1&&t.texStorage2D(n.TEXTURE_2D,g1,x1,p1[0].width,p1[0].height);for(let n1=0,z1=p1.length;n1<z1;n1++)M1=p1[n1],z.format!==i4?_1!==null?U1?k&&t.compressedTexSubImage2D(n.TEXTURE_2D,n1,0,0,M1.width,M1.height,_1,M1.data):t.compressedTexImage2D(n.TEXTURE_2D,n1,x1,M1.width,M1.height,0,M1.data):K1("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U1?k&&t.texSubImage2D(n.TEXTURE_2D,n1,0,0,M1.width,M1.height,_1,I1,M1.data):t.texImage2D(n.TEXTURE_2D,n1,x1,M1.width,M1.height,0,_1,I1,M1.data)}else if(z.isDataArrayTexture)if(U1){if(W1&&t.texStorage3D(n.TEXTURE_2D_ARRAY,g1,x1,i1.width,i1.height,i1.depth),k)if(z.layerUpdates.size>0){let n1=S8(i1.width,i1.height,z.format,z.type);for(let z1 of z.layerUpdates){let y1=i1.data.subarray(z1*n1/i1.data.BYTES_PER_ELEMENT,(z1+1)*n1/i1.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,z1,i1.width,i1.height,1,_1,I1,y1)}z.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,i1.width,i1.height,i1.depth,_1,I1,i1.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,x1,i1.width,i1.height,i1.depth,0,_1,I1,i1.data);else if(z.isData3DTexture)U1?(W1&&t.texStorage3D(n.TEXTURE_3D,g1,x1,i1.width,i1.height,i1.depth),k&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,i1.width,i1.height,i1.depth,_1,I1,i1.data)):t.texImage3D(n.TEXTURE_3D,0,x1,i1.width,i1.height,i1.depth,0,_1,I1,i1.data);else if(z.isFramebufferTexture){if(W1)if(U1)t.texStorage2D(n.TEXTURE_2D,g1,x1,i1.width,i1.height);else{let n1=i1.width,z1=i1.height;for(let y1=0;y1<g1;y1++)t.texImage2D(n.TEXTURE_2D,y1,x1,n1,z1,0,_1,I1,null),n1>>=1,z1>>=1}}else if(z.isHTMLTexture){if("texElementImage2D"in n){let n1=n.canvas;if(n1.hasAttribute("layoutsubtree")||n1.setAttribute("layoutsubtree","true"),i1.parentNode!==n1){n1.appendChild(i1),h.add(z),n1.onpaint=z1=>{let y1=z1.changedElements;for(let c1 of h)y1.includes(c1.image)&&(c1.needsUpdate=!0)},n1.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,i1);else{let y1=n.RGBA,c1=n.RGBA,f1=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,y1,c1,f1,i1)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(p1.length>0){if(U1&&W1){let n1=e2(p1[0]);t.texStorage2D(n.TEXTURE_2D,g1,x1,n1.width,n1.height)}for(let n1=0,z1=p1.length;n1<z1;n1++)M1=p1[n1],U1?k&&t.texSubImage2D(n.TEXTURE_2D,n1,0,0,_1,I1,M1):t.texImage2D(n.TEXTURE_2D,n1,x1,_1,I1,M1);z.generateMipmaps=!1}else if(U1){if(W1){let n1=e2(i1);t.texStorage2D(n.TEXTURE_2D,g1,x1,n1.width,n1.height)}k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_1,I1,i1)}else t.texImage2D(n.TEXTURE_2D,0,x1,_1,I1,i1);g(z)&&x(G),h1.__version=m1.version,z.onUpdate&&z.onUpdate(z)}E.__version=z.version}function H1(E,z,B){if(z.image.length!==6)return;let G=Q(E,z),Z=z.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+B);let m1=i.get(Z);if(Z.version!==m1.__version||G===!0){t.activeTexture(n.TEXTURE0+B);let h1=M2.getPrimaries(M2.workingColorSpace),e1=z.colorSpace===s0?null:M2.getPrimaries(z.colorSpace),i1=z.colorSpace===s0||h1===e1?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,z.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,z.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,i1);let _1=z.isCompressedTexture||z.image[0].isCompressedTexture,I1=z.image[0]&&z.image[0].isDataTexture,x1=[];for(let c1=0;c1<6;c1++)!_1&&!I1?x1[c1]=m(z.image[c1],!0,a.maxCubemapSize):x1[c1]=I1?z.image[c1].image:z.image[c1],x1[c1]=t3(z,x1[c1]);let M1=x1[0],p1=r.convert(z.format,z.colorSpace),U1=r.convert(z.type),W1=M(z.internalFormat,p1,U1,z.normalized,z.colorSpace),k=z.isVideoTexture!==!0,g1=m1.__version===void 0||G===!0,n1=Z.dataReady,z1=L(z,M1);j1(n.TEXTURE_CUBE_MAP,z);let y1;if(_1){k&&g1&&t.texStorage2D(n.TEXTURE_CUBE_MAP,z1,W1,M1.width,M1.height);for(let c1=0;c1<6;c1++){y1=x1[c1].mipmaps;for(let f1=0;f1<y1.length;f1++){let o1=y1[f1];z.format!==i4?p1!==null?k?n1&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+c1,f1,0,0,o1.width,o1.height,p1,o1.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+c1,f1,W1,o1.width,o1.height,0,o1.data):K1("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?n1&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+c1,f1,0,0,o1.width,o1.height,p1,U1,o1.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+c1,f1,W1,o1.width,o1.height,0,p1,U1,o1.data)}}}else{if(y1=z.mipmaps,k&&g1){y1.length>0&&z1++;let c1=e2(x1[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,z1,W1,c1.width,c1.height)}for(let c1=0;c1<6;c1++)if(I1){k?n1&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+c1,0,0,0,x1[c1].width,x1[c1].height,p1,U1,x1[c1].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+c1,0,W1,x1[c1].width,x1[c1].height,0,p1,U1,x1[c1].data);for(let f1=0;f1<y1.length;f1++){let q1=y1[f1].image[c1].image;k?n1&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+c1,f1+1,0,0,q1.width,q1.height,p1,U1,q1.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+c1,f1+1,W1,q1.width,q1.height,0,p1,U1,q1.data)}}else{k?n1&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+c1,0,0,0,p1,U1,x1[c1]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+c1,0,W1,p1,U1,x1[c1]);for(let f1=0;f1<y1.length;f1++){let o1=y1[f1];k?n1&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+c1,f1+1,0,0,p1,U1,o1.image[c1]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+c1,f1+1,W1,p1,U1,o1.image[c1])}}}g(z)&&x(n.TEXTURE_CUBE_MAP),m1.__version=Z.version,z.onUpdate&&z.onUpdate(z)}E.__version=z.version}function T1(E,z,B,G,Z,m1){let h1=r.convert(B.format,B.colorSpace),e1=r.convert(B.type),i1=M(B.internalFormat,h1,e1,B.normalized,B.colorSpace),_1=i.get(z),I1=i.get(B);if(I1.__renderTarget=z,!_1.__hasExternalTextures){let x1=Math.max(1,z.width>>m1),M1=Math.max(1,z.height>>m1);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,m1,i1,x1,M1,z.depth,0,h1,e1,null):t.texImage2D(Z,m1,i1,x1,M1,0,h1,e1,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),E2(z)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,Z,I1.__webglTexture,0,n2(z)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,Z,I1.__webglTexture,m1),t.bindFramebuffer(n.FRAMEBUFFER,null)}function v2(E,z,B){if(n.bindRenderbuffer(n.RENDERBUFFER,E),z.depthBuffer){let G=z.depthTexture,Z=G&&G.isDepthTexture?G.type:null,m1=b(z.stencilBuffer,Z),h1=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;E2(z)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,n2(z),m1,z.width,z.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,n2(z),m1,z.width,z.height):n.renderbufferStorage(n.RENDERBUFFER,m1,z.width,z.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,h1,n.RENDERBUFFER,E)}else{let G=z.textures;for(let Z=0;Z<G.length;Z++){let m1=G[Z],h1=r.convert(m1.format,m1.colorSpace),e1=r.convert(m1.type),i1=M(m1.internalFormat,h1,e1,m1.normalized,m1.colorSpace);E2(z)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,n2(z),i1,z.width,z.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,n2(z),i1,z.width,z.height):n.renderbufferStorage(n.RENDERBUFFER,i1,z.width,z.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function E1(E,z,B){let G=z.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(z.depthTexture&&z.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=i.get(z.depthTexture);if(Z.__renderTarget=z,(!Z.__webglTexture||z.depthTexture.image.width!==z.width||z.depthTexture.image.height!==z.height)&&(z.depthTexture.image.width=z.width,z.depthTexture.image.height=z.height,z.depthTexture.needsUpdate=!0),G){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,z.depthTexture.addEventListener("dispose",S)),Z.__webglTexture===void 0){Z.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),j1(n.TEXTURE_CUBE_MAP,z.depthTexture);let _1=r.convert(z.depthTexture.format),I1=r.convert(z.depthTexture.type),x1;z.depthTexture.format===R4?x1=n.DEPTH_COMPONENT24:z.depthTexture.format===H0&&(x1=n.DEPTH24_STENCIL8);for(let M1=0;M1<6;M1++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+M1,0,x1,z.width,z.height,0,_1,I1,null)}}else O(z.depthTexture,0);let m1=Z.__webglTexture,h1=n2(z),e1=G?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,i1=z.depthTexture.format===H0?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(z.depthTexture.format===R4)E2(z)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,i1,e1,m1,0,h1):n.framebufferTexture2D(n.FRAMEBUFFER,i1,e1,m1,0);else if(z.depthTexture.format===H0)E2(z)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,i1,e1,m1,0,h1):n.framebufferTexture2D(n.FRAMEBUFFER,i1,e1,m1,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function J1(E){let z=i.get(E),B=E.isWebGLCubeRenderTarget===!0;if(z.__boundDepthTexture!==E.depthTexture){let G=E.depthTexture;if(z.__depthDisposeCallback&&z.__depthDisposeCallback(),G){let Z=()=>{delete z.__boundDepthTexture,delete z.__depthDisposeCallback,G.removeEventListener("dispose",Z)};G.addEventListener("dispose",Z),z.__depthDisposeCallback=Z}z.__boundDepthTexture=G}if(E.depthTexture&&!z.__autoAllocateDepthBuffer)if(B)for(let G=0;G<6;G++)E1(z.__webglFramebuffer[G],E,G);else{let G=E.texture.mipmaps;G&&G.length>0?E1(z.__webglFramebuffer[0],E,0):E1(z.__webglFramebuffer,E,0)}else if(B){z.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,z.__webglFramebuffer[G]),z.__webglDepthbuffer[G]===void 0)z.__webglDepthbuffer[G]=n.createRenderbuffer(),v2(z.__webglDepthbuffer[G],E,!1);else{let Z=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,m1=z.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,m1),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,m1)}}else{let G=E.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(n.FRAMEBUFFER,z.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,z.__webglFramebuffer),z.__webglDepthbuffer===void 0)z.__webglDepthbuffer=n.createRenderbuffer(),v2(z.__webglDepthbuffer,E,!1);else{let Z=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,m1=z.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,m1),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,m1)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function i2(E,z,B){let G=i.get(E);z!==void 0&&T1(G.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&J1(E)}function t2(E){let z=E.texture,B=i.get(E),G=i.get(z);E.addEventListener("dispose",_);let Z=E.textures,m1=E.isWebGLCubeRenderTarget===!0,h1=Z.length>1;if(h1||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=z.version,s.memory.textures++),m1){B.__webglFramebuffer=[];for(let e1=0;e1<6;e1++)if(z.mipmaps&&z.mipmaps.length>0){B.__webglFramebuffer[e1]=[];for(let i1=0;i1<z.mipmaps.length;i1++)B.__webglFramebuffer[e1][i1]=n.createFramebuffer()}else B.__webglFramebuffer[e1]=n.createFramebuffer()}else{if(z.mipmaps&&z.mipmaps.length>0){B.__webglFramebuffer=[];for(let e1=0;e1<z.mipmaps.length;e1++)B.__webglFramebuffer[e1]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(h1)for(let e1=0,i1=Z.length;e1<i1;e1++){let _1=i.get(Z[e1]);_1.__webglTexture===void 0&&(_1.__webglTexture=n.createTexture(),s.memory.textures++)}if(E.samples>0&&E2(E)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let e1=0;e1<Z.length;e1++){let i1=Z[e1];B.__webglColorRenderbuffer[e1]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[e1]);let _1=r.convert(i1.format,i1.colorSpace),I1=r.convert(i1.type),x1=M(i1.internalFormat,_1,I1,i1.normalized,i1.colorSpace,E.isXRRenderTarget===!0),M1=n2(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,M1,x1,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+e1,n.RENDERBUFFER,B.__webglColorRenderbuffer[e1])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),v2(B.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(m1){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),j1(n.TEXTURE_CUBE_MAP,z);for(let e1=0;e1<6;e1++)if(z.mipmaps&&z.mipmaps.length>0)for(let i1=0;i1<z.mipmaps.length;i1++)T1(B.__webglFramebuffer[e1][i1],E,z,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+e1,i1);else T1(B.__webglFramebuffer[e1],E,z,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+e1,0);g(z)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(h1){for(let e1=0,i1=Z.length;e1<i1;e1++){let _1=Z[e1],I1=i.get(_1),x1=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(x1=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(x1,I1.__webglTexture),j1(x1,_1),T1(B.__webglFramebuffer,E,_1,n.COLOR_ATTACHMENT0+e1,x1,0),g(_1)&&x(x1)}t.unbindTexture()}else{let e1=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(e1=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(e1,G.__webglTexture),j1(e1,z),z.mipmaps&&z.mipmaps.length>0)for(let i1=0;i1<z.mipmaps.length;i1++)T1(B.__webglFramebuffer[i1],E,z,n.COLOR_ATTACHMENT0,e1,i1);else T1(B.__webglFramebuffer,E,z,n.COLOR_ATTACHMENT0,e1,0);g(z)&&x(e1),t.unbindTexture()}E.depthBuffer&&J1(E)}function $(E){let z=E.textures;for(let B=0,G=z.length;B<G;B++){let Z=z[B];if(g(Z)){let m1=y(E),h1=i.get(Z).__webglTexture;t.bindTexture(m1,h1),x(m1),t.unbindTexture()}}}let C2=[],R2=[];function B2(E){if(E.samples>0){if(E2(E)===!1){let z=E.textures,B=E.width,G=E.height,Z=n.COLOR_BUFFER_BIT,m1=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,h1=i.get(E),e1=z.length>1;if(e1)for(let _1=0;_1<z.length;_1++)t.bindFramebuffer(n.FRAMEBUFFER,h1.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_1,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,h1.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_1,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,h1.__webglMultisampledFramebuffer);let i1=E.texture.mipmaps;i1&&i1.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,h1.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,h1.__webglFramebuffer);for(let _1=0;_1<z.length;_1++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),e1){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,h1.__webglColorRenderbuffer[_1]);let I1=i.get(z[_1]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,I1,0)}n.blitFramebuffer(0,0,B,G,0,0,B,G,Z,n.NEAREST),o===!0&&(C2.length=0,R2.length=0,C2.push(n.COLOR_ATTACHMENT0+_1),E.depthBuffer&&E.resolveDepthBuffer===!1&&(C2.push(m1),R2.push(m1),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,R2)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,C2))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),e1)for(let _1=0;_1<z.length;_1++){t.bindFramebuffer(n.FRAMEBUFFER,h1.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_1,n.RENDERBUFFER,h1.__webglColorRenderbuffer[_1]);let I1=i.get(z[_1]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,h1.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_1,n.TEXTURE_2D,I1,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,h1.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&o){let z=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[z])}}}function n2(E){return Math.min(a.maxSamples,E.samples)}function E2(E){let z=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&z.__useRenderToTexture!==!1}function F(E){let z=s.render.frame;f.get(E)!==z&&(f.set(E,z),E.update())}function t3(E,z){let B=E.colorSpace,G=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==ui&&B!==s0&&(M2.getTransfer(B)===A2?(G!==i4||Z!==Ve)&&K1("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Q1("WebGLTextures: Unsupported texture color space:",B)),z}function e2(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=q,this.getTextureUnits=j,this.setTextureUnits=D,this.setTexture2D=O,this.setTexture2DArray=Y,this.setTexture3D=A,this.setTextureCube=l1,this.rebindTextures=i2,this.setupRenderTarget=t2,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=B2,this.setupDepthRenderbuffer=J1,this.setupFrameBufferTexture=T1,this.useMultisampledRTT=E2,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function K_(n,e){function t(i,a=s0){let r,s=M2.getTransfer(a);if(i===Ve)return n.UNSIGNED_BYTE;if(i===ir)return n.UNSIGNED_SHORT_4_4_4_4;if(i===nr)return n.UNSIGNED_SHORT_5_5_5_1;if(i===d8)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===p8)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===u8)return n.BYTE;if(i===h8)return n.SHORT;if(i===b6)return n.UNSIGNED_SHORT;if(i===tr)return n.INT;if(i===v4)return n.UNSIGNED_INT;if(i===M4)return n.FLOAT;if(i===O4)return n.HALF_FLOAT;if(i===m8)return n.ALPHA;if(i===g8)return n.RGB;if(i===i4)return n.RGBA;if(i===R4)return n.DEPTH_COMPONENT;if(i===H0)return n.DEPTH_STENCIL;if(i===v8)return n.RED;if(i===ar)return n.RED_INTEGER;if(i===V0)return n.RG;if(i===rr)return n.RG_INTEGER;if(i===sr)return n.RGBA_INTEGER;if(i===Fi||i===Oi||i===Ui||i===Bi)if(s===A2)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Fi)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Oi)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ui)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Bi)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Fi)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Oi)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ui)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Bi)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===cr||i===or||i===lr||i===fr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===cr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===or)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===lr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ur||i===hr||i===dr||i===pr||i===mr||i===Hi||i===gr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ur||i===hr)return s===A2?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===dr)return s===A2?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===pr)return r.COMPRESSED_R11_EAC;if(i===mr)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Hi)return r.COMPRESSED_RG11_EAC;if(i===gr)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===vr||i===Mr||i===_r||i===xr||i===zr||i===yr||i===br||i===Sr||i===Cr||i===Lr||i===wr||i===Tr||i===Er||i===Ar)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===vr)return s===A2?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Mr)return s===A2?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_r)return s===A2?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xr)return s===A2?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zr)return s===A2?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yr)return s===A2?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===br)return s===A2?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Sr)return s===A2?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Cr)return s===A2?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Lr)return s===A2?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===wr)return s===A2?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Tr)return s===A2?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Er)return s===A2?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ar)return s===A2?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Nr||i===Pr||i===Rr)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Nr)return s===A2?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Rr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ir||i===kr||i===Vi||i===Dr)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ir)return r.COMPRESSED_RED_RGTC1_EXT;if(i===kr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vi)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Dr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===S6?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var J_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z_=`
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

}`,O8=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ci(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Be({vertexShader:J_,fragmentShader:Z_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new U3(new Ei(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},U8=class extends I4{constructor(e,t){super();let i=this,a=null,r=1,s=null,c="local-floor",o=1,l=null,f=null,h=null,u=null,d=null,p=null,v=typeof XRWebGLBinding<"u",m=new O8,g={},x=t.getContextAttributes(),y=null,M=null,b=[],L=[],S=new z2,_=null,C=new j3;C.viewport=new J2;let T=new j3;T.viewport=new J2;let P=[C,T],R=new Ja,q=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let r1=b[Q];return r1===void 0&&(r1=new _6,b[Q]=r1),r1.getTargetRaySpace()},this.getControllerGrip=function(Q){let r1=b[Q];return r1===void 0&&(r1=new _6,b[Q]=r1),r1.getGripSpace()},this.getHand=function(Q){let r1=b[Q];return r1===void 0&&(r1=new _6,b[Q]=r1),r1.getHandSpace()};function D(Q){let r1=L.indexOf(Q.inputSource);if(r1===-1)return;let s1=b[r1];s1!==void 0&&(s1.update(Q.inputSource,Q.frame,l||s),s1.dispatchEvent({type:Q.type,data:Q.inputSource}))}function I(){a.removeEventListener("select",D),a.removeEventListener("selectstart",D),a.removeEventListener("selectend",D),a.removeEventListener("squeeze",D),a.removeEventListener("squeezestart",D),a.removeEventListener("squeezeend",D),a.removeEventListener("end",I),a.removeEventListener("inputsourceschange",N);for(let Q=0;Q<b.length;Q++){let r1=L[Q];r1!==null&&(L[Q]=null,b[Q].disconnect(r1))}q=null,j=null,m.reset();for(let Q in g)delete g[Q];e.setRenderTarget(y),d=null,u=null,h=null,a=null,M=null,j1.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&K1("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){c=Q,i.isPresenting===!0&&K1("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(a,t)),h},this.getFrame=function(){return p},this.getSession=function(){return a},this.setSession=function(Q){return lt(this,null,function*(){if(a=Q,a!==null){if(y=e.getRenderTarget(),a.addEventListener("select",D),a.addEventListener("selectstart",D),a.addEventListener("selectend",D),a.addEventListener("squeeze",D),a.addEventListener("squeezestart",D),a.addEventListener("squeezeend",D),a.addEventListener("end",I),a.addEventListener("inputsourceschange",N),x.xrCompatible!==!0&&(yield t.makeXRCompatible()),_=e.getPixelRatio(),e.getSize(S),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let s1=null,S1=null,H1=null;x.depth&&(H1=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,s1=x.stencil?H0:R4,S1=x.stencil?S6:v4);let T1={colorFormat:t.RGBA8,depthFormat:H1,scaleFactor:r};h=this.getBinding(),u=h.createProjectionLayer(T1),a.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new Ue(u.textureWidth,u.textureHeight,{format:i4,type:Ve,depthTexture:new r0(u.textureWidth,u.textureHeight,S1,void 0,void 0,void 0,void 0,void 0,void 0,s1),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let s1={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(a,t,s1),a.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Ue(d.framebufferWidth,d.framebufferHeight,{format:i4,type:Ve,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(o),l=null,s=yield a.requestReferenceSpace(c),j1.setContext(a),j1.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function N(Q){for(let r1=0;r1<Q.removed.length;r1++){let s1=Q.removed[r1],S1=L.indexOf(s1);S1>=0&&(L[S1]=null,b[S1].disconnect(s1))}for(let r1=0;r1<Q.added.length;r1++){let s1=Q.added[r1],S1=L.indexOf(s1);if(S1===-1){for(let T1=0;T1<b.length;T1++)if(T1>=L.length){L.push(s1),S1=T1;break}else if(L[T1]===null){L[T1]=s1,S1=T1;break}if(S1===-1)break}let H1=b[S1];H1&&H1.connect(s1)}}let O=new V,Y=new V;function A(Q,r1,s1){O.setFromMatrixPosition(r1.matrixWorld),Y.setFromMatrixPosition(s1.matrixWorld);let S1=O.distanceTo(Y),H1=r1.projectionMatrix.elements,T1=s1.projectionMatrix.elements,v2=H1[14]/(H1[10]-1),E1=H1[14]/(H1[10]+1),J1=(H1[9]+1)/H1[5],i2=(H1[9]-1)/H1[5],t2=(H1[8]-1)/H1[0],$=(T1[8]+1)/T1[0],C2=v2*t2,R2=v2*$,B2=S1/(-t2+$),n2=B2*-t2;if(r1.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(n2),Q.translateZ(B2),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),H1[10]===-1)Q.projectionMatrix.copy(r1.projectionMatrix),Q.projectionMatrixInverse.copy(r1.projectionMatrixInverse);else{let E2=v2+B2,F=E1+B2,t3=C2-n2,e2=R2+(S1-n2),E=J1*E1/F*E2,z=i2*E1/F*E2;Q.projectionMatrix.makePerspective(t3,e2,E,z,E2,F),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function l1(Q,r1){r1===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(r1.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(a===null)return;let r1=Q.near,s1=Q.far;m.texture!==null&&(m.depthNear>0&&(r1=m.depthNear),m.depthFar>0&&(s1=m.depthFar)),R.near=T.near=C.near=r1,R.far=T.far=C.far=s1,(q!==R.near||j!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),q=R.near,j=R.far),R.layers.mask=Q.layers.mask|6,C.layers.mask=R.layers.mask&-5,T.layers.mask=R.layers.mask&-3;let S1=Q.parent,H1=R.cameras;l1(R,S1);for(let T1=0;T1<H1.length;T1++)l1(H1[T1],S1);H1.length===2?A(R,C,T):R.projectionMatrix.copy(C.projectionMatrix),d1(Q,R,S1)};function d1(Q,r1,s1){s1===null?Q.matrix.copy(r1.matrixWorld):(Q.matrix.copy(s1.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(r1.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(r1.projectionMatrix),Q.projectionMatrixInverse.copy(r1.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ra*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(u===null&&d===null))return o},this.setFoveation=function(Q){o=Q,u!==null&&(u.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(R)},this.getCameraTexture=function(Q){return g[Q]};let $1=null;function A1(Q,r1){if(f=r1.getViewerPose(l||s),p=r1,f!==null){let s1=f.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let S1=!1;s1.length!==R.cameras.length&&(R.cameras.length=0,S1=!0);for(let E1=0;E1<s1.length;E1++){let J1=s1[E1],i2=null;if(d!==null)i2=d.getViewport(J1);else{let $=h.getViewSubImage(u,J1);i2=$.viewport,E1===0&&(e.setRenderTargetTextures(M,$.colorTexture,$.depthStencilTexture),e.setRenderTarget(M))}let t2=P[E1];t2===void 0&&(t2=new j3,t2.layers.enable(E1),t2.viewport=new J2,P[E1]=t2),t2.matrix.fromArray(J1.transform.matrix),t2.matrix.decompose(t2.position,t2.quaternion,t2.scale),t2.projectionMatrix.fromArray(J1.projectionMatrix),t2.projectionMatrixInverse.copy(t2.projectionMatrix).invert(),t2.viewport.set(i2.x,i2.y,i2.width,i2.height),E1===0&&(R.matrix.copy(t2.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),S1===!0&&R.cameras.push(t2)}let H1=a.enabledFeatures;if(H1&&H1.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&v){h=i.getBinding();let E1=h.getDepthInformation(s1[0]);E1&&E1.isValid&&E1.texture&&m.init(E1,a.renderState)}if(H1&&H1.includes("camera-access")&&v){e.state.unbindTexture(),h=i.getBinding();for(let E1=0;E1<s1.length;E1++){let J1=s1[E1].camera;if(J1){let i2=g[J1];i2||(i2=new Ci,g[J1]=i2);let t2=h.getCameraImage(J1);i2.sourceTexture=t2}}}}for(let s1=0;s1<b.length;s1++){let S1=L[s1],H1=b[s1];S1!==null&&H1!==void 0&&H1.update(S1,r1,l||s)}$1&&$1(Q,r1),r1.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:r1}),p=null}let j1=new d9;j1.setAnimationLoop(A1),this.setAnimationLoop=function(Q){$1=Q},this.dispose=function(){}}},Q_=new r3,_9=new r2;_9.set(-1,0,0,0,1,0,0,0,1);function ex(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,z8(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function a(m,g,x,y,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),h(m,g)):g.isMeshPhongMaterial?(r(m,g),f(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&d(m,g,M)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),v(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(s(m,g),g.isLineDashedMaterial&&c(m,g)):g.isPointsMaterial?o(m,g,x,y):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===fe&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===fe&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let x=e.get(g),y=x.envMap,M=x.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(Q_.makeRotationFromEuler(M)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(_9),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function s(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function c(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function o(m,g,x,y){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*x,m.scale.value=y*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function f(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,x){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===fe&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){let x=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function tx(n,e,t,i){let a={},r={},s=[],c=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function o(M,b){let L=b.program;i.uniformBlockBinding(M,L)}function l(M,b){let L=a[M.id];L===void 0&&(m(M),L=f(M),a[M.id]=L,M.addEventListener("dispose",x));let S=b.program;i.updateUBOMapping(M,S);let _=e.render.frame;r[M.id]!==_&&(u(M),r[M.id]=_)}function f(M){let b=h();M.__bindingPointIndex=b;let L=n.createBuffer(),S=M.__size,_=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,L),n.bufferData(n.UNIFORM_BUFFER,S,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,L),L}function h(){for(let M=0;M<c;M++)if(s.indexOf(M)===-1)return s.push(M),M;return Q1("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let b=a[M.id],L=M.uniforms,S=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let _=0,C=L.length;_<C;_++){let T=L[_];if(Array.isArray(T))for(let P=0,R=T.length;P<R;P++)d(T[P],_,P,S);else d(T,_,0,S)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,b,L,S){if(v(M,b,L,S)===!0){let _=M.__offset,C=M.value;if(Array.isArray(C)){let T=0;for(let P=0;P<C.length;P++){let R=C[P],q=g(R);p(R,M.__data,T),typeof R!="number"&&typeof R!="boolean"&&!R.isMatrix3&&!ArrayBuffer.isView(R)&&(T+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(C,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,M.__data)}}function p(M,b,L){typeof M=="number"||typeof M=="boolean"?b[0]=M:M.isMatrix3?(b[0]=M.elements[0],b[1]=M.elements[1],b[2]=M.elements[2],b[3]=0,b[4]=M.elements[3],b[5]=M.elements[4],b[6]=M.elements[5],b[7]=0,b[8]=M.elements[6],b[9]=M.elements[7],b[10]=M.elements[8],b[11]=0):ArrayBuffer.isView(M)?b.set(new M.constructor(M.buffer,M.byteOffset,b.length)):M.toArray(b,L)}function v(M,b,L,S){let _=M.value,C=b+"_"+L;if(S[C]===void 0)return typeof _=="number"||typeof _=="boolean"?S[C]=_:ArrayBuffer.isView(_)?S[C]=_.slice():S[C]=_.clone(),!0;{let T=S[C];if(typeof _=="number"||typeof _=="boolean"){if(T!==_)return S[C]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(T.equals(_)===!1)return T.copy(_),!0}}return!1}function m(M){let b=M.uniforms,L=0,S=16;for(let C=0,T=b.length;C<T;C++){let P=Array.isArray(b[C])?b[C]:[b[C]];for(let R=0,q=P.length;R<q;R++){let j=P[R],D=Array.isArray(j.value)?j.value:[j.value];for(let I=0,N=D.length;I<N;I++){let O=D[I],Y=g(O),A=L%S,l1=A%Y.boundary,d1=A+l1;L+=l1,d1!==0&&S-d1<Y.storage&&(L+=S-d1),j.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=L,L+=Y.storage}}}let _=L%S;return _>0&&(L+=S-_),M.__size=L,M.__cache={},this}function g(M){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?K1("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):K1("WebGLRenderer: Unsupported uniform value type.",M),b}function x(M){let b=M.target;b.removeEventListener("dispose",x);let L=s.indexOf(b.__bindingPointIndex);s.splice(L,1),n.deleteBuffer(a[b.id]),delete a[b.id],delete r[b.id]}function y(){for(let M in a)n.deleteBuffer(a[M]);s=[],a={},r={}}return{bind:o,update:l,dispose:y}}var ix=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),U4=null;function nx(){return U4===null&&(U4=new Fa(ix,16,16,V0,O4),U4.name="DFG_LUT",U4.minFilter=O3,U4.magFilter=O3,U4.wrapS=P4,U4.wrapT=P4,U4.generateMipmaps=!1,U4.needsUpdate=!0),U4}var Gr=class{constructor(e={}){let{canvas:t=Ul(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:c=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Ve}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;let v=d,m=new Set([sr,rr,ar]),g=new Set([Ve,v4,b6,S6,ir,nr]),x=new Uint32Array(4),y=new Int32Array(4),M=new V,b=null,L=null,S=[],_=[],C=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=g4,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,P=!1,R=null,q=null,j=null,D=null;this._outputColorSpace=Oe;let I=0,N=0,O=null,Y=-1,A=null,l1=new J2,d1=new J2,$1=null,A1=new S2(0),j1=0,Q=t.width,r1=t.height,s1=1,S1=null,H1=null,T1=new J2(0,0,Q,r1),v2=new J2(0,0,Q,r1),E1=!1,J1=new yi,i2=!1,t2=!1,$=new r3,C2=new V,R2=new J2,B2={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},n2=!1;function E2(){return O===null?s1:1}let F=i;function t3(w,U){return t.getContext(w,U)}try{let w={alpha:!0,depth:a,stencil:r,antialias:c,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",q1,!1),t.addEventListener("webglcontextrestored",u1,!1),t.addEventListener("webglcontextcreationerror",X1,!1),F===null){let U="webgl2";if(F=t3(U,w),F===null)throw t3(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(w){throw Q1("WebGLRenderer: "+w.message),w}let e2,E,z,B,G,Z,m1,h1,e1,i1,_1,I1,x1,M1,p1,U1,W1,k,g1,n1,z1,y1,c1;function f1(){e2=new fM(F),e2.init(),z1=new K_(F,e2),E=new iM(F,e2,e,z1),z=new $_(F,e2),E.reversedDepthBuffer&&u&&z.buffers.depth.setReversed(!0),q=F.createFramebuffer(),j=F.createFramebuffer(),D=F.createFramebuffer(),B=new dM(F),G=new I_,Z=new j_(F,e2,z,G,E,z1,B),m1=new lM(T),h1=new vm(F),y1=new eM(F,h1),e1=new uM(F,h1,B,y1),i1=new mM(F,e1,h1,y1,B),k=new pM(F,E,Z),p1=new nM(G),_1=new R_(T,m1,e2,E,y1,p1),I1=new ex(T,G),x1=new D_,M1=new V_(e2),W1=new Qv(T,m1,z,i1,p,o),U1=new Y_(T,i1,E),c1=new tx(F,B,E,z),g1=new tM(F,e2,B),n1=new hM(F,e2,B),B.programs=_1.programs,T.capabilities=E,T.extensions=e2,T.properties=G,T.renderLists=x1,T.shadowMap=U1,T.state=z,T.info=B}f1(),v!==Ve&&(C=new vM(v,t.width,t.height,c,a,r));let o1=new U8(T,F);this.xr=o1,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let w=e2.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=e2.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return s1},this.setPixelRatio=function(w){w!==void 0&&(s1=w,this.setSize(Q,r1,!1))},this.getSize=function(w){return w.set(Q,r1)},this.setSize=function(w,U,K=!0){if(o1.isPresenting){K1("WebGLRenderer: Can't change size while VR device is presenting.");return}Q=w,r1=U,t.width=Math.floor(w*s1),t.height=Math.floor(U*s1),K===!0&&(t.style.width=w+"px",t.style.height=U+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(Q*s1,r1*s1).floor()},this.setDrawingBufferSize=function(w,U,K){Q=w,r1=U,s1=K,t.width=Math.floor(w*K),t.height=Math.floor(U*K),this.setViewport(0,0,w,U)},this.setEffects=function(w){if(v===Ve){Q1("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let U=0;U<w.length;U++)if(w[U].isOutputPass===!0){K1("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(l1)},this.getViewport=function(w){return w.copy(T1)},this.setViewport=function(w,U,K,H){w.isVector4?T1.set(w.x,w.y,w.z,w.w):T1.set(w,U,K,H),z.viewport(l1.copy(T1).multiplyScalar(s1).round())},this.getScissor=function(w){return w.copy(v2)},this.setScissor=function(w,U,K,H){w.isVector4?v2.set(w.x,w.y,w.z,w.w):v2.set(w,U,K,H),z.scissor(d1.copy(v2).multiplyScalar(s1).round())},this.getScissorTest=function(){return E1},this.setScissorTest=function(w){z.setScissorTest(E1=w)},this.setOpaqueSort=function(w){S1=w},this.setTransparentSort=function(w){H1=w},this.getClearColor=function(w){return w.copy(W1.getClearColor())},this.setClearColor=function(){W1.setClearColor(...arguments)},this.getClearAlpha=function(){return W1.getClearAlpha()},this.setClearAlpha=function(){W1.setClearAlpha(...arguments)},this.clear=function(w=!0,U=!0,K=!0){let H=0;if(w){let W=!1;if(O!==null){let b1=O.texture.format;W=m.has(b1)}if(W){let b1=O.texture.type,C1=g.has(b1),w1=W1.getClearColor(),F1=W1.getClearAlpha(),B1=w1.r,c2=w1.g,l2=w1.b;C1?(x[0]=B1,x[1]=c2,x[2]=l2,x[3]=F1,F.clearBufferuiv(F.COLOR,0,x)):(y[0]=B1,y[1]=c2,y[2]=l2,y[3]=F1,F.clearBufferiv(F.COLOR,0,y))}else H|=F.COLOR_BUFFER_BIT}U&&(H|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),R=w},this.dispose=function(){t.removeEventListener("webglcontextlost",q1,!1),t.removeEventListener("webglcontextrestored",u1,!1),t.removeEventListener("webglcontextcreationerror",X1,!1),W1.dispose(),x1.dispose(),M1.dispose(),G.dispose(),m1.dispose(),i1.dispose(),y1.dispose(),c1.dispose(),_1.dispose(),o1.dispose(),o1.removeEventListener("sessionstart",W2),o1.removeEventListener("sessionend",k2),_2.stop()};function q1(w){w.preventDefault(),x8("WebGLRenderer: Context Lost."),P=!0}function u1(){x8("WebGLRenderer: Context Restored."),P=!1;let w=B.autoReset,U=U1.enabled,K=U1.autoUpdate,H=U1.needsUpdate,W=U1.type;f1(),B.autoReset=w,U1.enabled=U,U1.autoUpdate=K,U1.needsUpdate=H,U1.type=W}function X1(w){Q1("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function k1(w){let U=w.target;U.removeEventListener("dispose",k1),a2(U)}function a2(w){m3(w),G.remove(w)}function m3(w){let U=G.get(w).programs;U!==void 0&&(U.forEach(function(K){_1.releaseProgram(K)}),w.isShaderMaterial&&_1.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,K,H,W,b1){U===null&&(U=B2);let C1=W.isMesh&&W.matrixWorld.determinantAffine()<0,w1=L3(w,U,K,H,W);z.setMaterial(H,C1);let F1=K.index,B1=1;if(H.wireframe===!0){if(F1=e1.getWireframeAttribute(K),F1===void 0)return;B1=2}let c2=K.drawRange,l2=K.attributes.position,V1=c2.start*B1,I2=(c2.start+c2.count)*B1;b1!==null&&(V1=Math.max(V1,b1.start*B1),I2=Math.min(I2,(b1.start+b1.count)*B1)),F1!==null?(V1=Math.max(V1,0),I2=Math.min(I2,F1.count)):l2!=null&&(V1=Math.max(V1,0),I2=Math.min(I2,l2.count));let f3=I2-V1;if(f3<0||f3===1/0)return;y1.setup(W,H,w1,K,F1);let n3,D2=g1;if(F1!==null&&(n3=h1.get(F1),D2=n1,D2.setIndex(n3)),W.isMesh)H.wireframe===!0?(z.setLineWidth(H.wireframeLinewidth*E2()),D2.setMode(F.LINES)):D2.setMode(F.TRIANGLES);else if(W.isLine){let q3=H.linewidth;q3===void 0&&(q3=1),z.setLineWidth(q3*E2()),W.isLineSegments?D2.setMode(F.LINES):W.isLineLoop?D2.setMode(F.LINE_LOOP):D2.setMode(F.LINE_STRIP)}else W.isPoints?D2.setMode(F.POINTS):W.isSprite&&D2.setMode(F.TRIANGLES);if(W.isBatchedMesh)if(e2.get("WEBGL_multi_draw"))D2.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let q3=W._multiDrawStarts,N1=W._multiDrawCounts,Ae=W._multiDrawCount,L2=F1?h1.get(F1).bytesPerElement:1,Qe=G.get(H).currentProgram.getUniforms();for(let w4=0;w4<Ae;w4++)Qe.setValue(F,"_gl_DrawID",w4),D2.render(q3[w4]/L2,N1[w4])}else if(W.isInstancedMesh)D2.renderInstances(V1,f3,W.count);else if(K.isInstancedBufferGeometry){let q3=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,N1=Math.min(K.instanceCount,q3);D2.renderInstances(V1,f3,N1)}else D2.render(V1,f3)};function d2(w,U,K){w.transparent===!0&&w.side===D4&&w.forceSinglePass===!1?(w.side=fe,w.needsUpdate=!0,i3(w,U,K),w.side=n0,w.needsUpdate=!0,i3(w,U,K),w.side=D4):i3(w,U,K)}this.compile=function(w,U,K=null){K===null&&(K=w),L=M1.get(K),L.init(U),_.push(L),K.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(L.pushLight(W),W.castShadow&&L.pushShadow(W))}),w!==K&&w.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(L.pushLight(W),W.castShadow&&L.pushShadow(W))}),L.setupLights();let H=new Set;return w.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let b1=W.material;if(b1)if(Array.isArray(b1))for(let C1=0;C1<b1.length;C1++){let w1=b1[C1];d2(w1,K,W),H.add(w1)}else d2(b1,K,W),H.add(b1)}),L=_.pop(),H},this.compileAsync=function(w,U,K=null){let H=this.compile(w,U,K);return new Promise(W=>{function b1(){if(H.forEach(function(C1){G.get(C1).currentProgram.isReady()&&H.delete(C1)}),H.size===0){W(w);return}setTimeout(b1,10)}e2.get("KHR_parallel_shader_compile")!==null?b1():setTimeout(b1,10)})};let G2=null;function C3(w){G2&&G2(w)}function W2(){_2.stop()}function k2(){_2.start()}let _2=new d9;_2.setAnimationLoop(C3),typeof self<"u"&&_2.setContext(self),this.setAnimationLoop=function(w){G2=w,o1.setAnimationLoop(w),w===null?_2.stop():_2.start()},o1.addEventListener("sessionstart",W2),o1.addEventListener("sessionend",k2),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){Q1("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;R!==null&&R.renderStart(w,U);let K=o1.enabled===!0&&o1.isPresenting===!0,H=C!==null&&(O===null||K)&&C.begin(T,O);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),o1.enabled===!0&&o1.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(o1.cameraAutoUpdate===!0&&o1.updateCamera(U),U=o1.getCamera()),w.isScene===!0&&w.onBeforeRender(T,w,U,O),L=M1.get(w,_.length),L.init(U),L.state.textureUnits=Z.getTextureUnits(),_.push(L),$.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),J1.setFromProjectionMatrix($,m4,U.reversedDepth),t2=this.localClippingEnabled,i2=p1.init(this.clippingPlanes,t2),b=x1.get(w,S.length),b.init(),S.push(b),o1.enabled===!0&&o1.isPresenting===!0){let C1=T.xr.getDepthSensingMesh();C1!==null&&ae(C1,U,-1/0,T.sortObjects)}ae(w,U,0,T.sortObjects),b.finish(),T.sortObjects===!0&&b.sort(S1,H1,U.reversedDepth),n2=o1.enabled===!1||o1.isPresenting===!1||o1.hasDepthSensing()===!1,n2&&W1.addToRenderList(b,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),i2===!0&&p1.beginShadows();let W=L.state.shadowsArray;if(U1.render(W,w,U),i2===!0&&p1.endShadows(),(H&&C.hasRenderPass())===!1){let C1=b.opaque,w1=b.transmissive;if(L.setupLights(),U.isArrayCamera){let F1=U.cameras;if(w1.length>0)for(let B1=0,c2=F1.length;B1<c2;B1++){let l2=F1[B1];W3(C1,w1,w,l2)}n2&&W1.render(w);for(let B1=0,c2=F1.length;B1<c2;B1++){let l2=F1[B1];H2(b,w,l2,l2.viewport)}}else w1.length>0&&W3(C1,w1,w,U),n2&&W1.render(w),H2(b,w,U)}O!==null&&N===0&&(Z.updateMultisampleRenderTarget(O),Z.updateRenderTargetMipmap(O)),H&&C.end(T),w.isScene===!0&&w.onAfterRender(T,w,U),y1.resetDefaultState(),Y=-1,A=null,_.pop(),_.length>0?(L=_[_.length-1],Z.setTextureUnits(L.state.textureUnits),i2===!0&&p1.setGlobalState(T.clippingPlanes,L.state.camera)):L=null,S.pop(),S.length>0?b=S[S.length-1]:b=null,R!==null&&R.renderEnd()};function ae(w,U,K,H){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)K=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLightProbeGrid)L.pushLightProbeGrid(w);else if(w.isLight)L.pushLight(w),w.castShadow&&L.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||J1.intersectsSprite(w)){H&&R2.setFromMatrixPosition(w.matrixWorld).applyMatrix4($);let C1=i1.update(w),w1=w.material;w1.visible&&b.push(w,C1,w1,K,R2.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||J1.intersectsObject(w))){let C1=i1.update(w),w1=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),R2.copy(w.boundingSphere.center)):(C1.boundingSphere===null&&C1.computeBoundingSphere(),R2.copy(C1.boundingSphere.center)),R2.applyMatrix4(w.matrixWorld).applyMatrix4($)),Array.isArray(w1)){let F1=C1.groups;for(let B1=0,c2=F1.length;B1<c2;B1++){let l2=F1[B1],V1=w1[l2.materialIndex];V1&&V1.visible&&b.push(w,C1,V1,K,R2.z,l2)}}else w1.visible&&b.push(w,C1,w1,K,R2.z,null)}}let b1=w.children;for(let C1=0,w1=b1.length;C1<w1;C1++)ae(b1[C1],U,K,H)}function H2(w,U,K,H){let{opaque:W,transmissive:b1,transparent:C1}=w;L.setupLightsView(K),i2===!0&&p1.setGlobalState(T.clippingPlanes,K),H&&z.viewport(l1.copy(H)),W.length>0&&re(W,U,K),b1.length>0&&re(b1,U,K),C1.length>0&&re(C1,U,K),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function W3(w,U,K,H){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[H.id]===void 0){let V1=e2.has("EXT_color_buffer_half_float")||e2.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[H.id]=new Ue(1,1,{generateMipmaps:!0,type:V1?O4:Ve,minFilter:B0,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:M2.workingColorSpace})}let b1=L.state.transmissionRenderTarget[H.id],C1=H.viewport||l1;b1.setSize(C1.z*T.transmissionResolutionScale,C1.w*T.transmissionResolutionScale);let w1=T.getRenderTarget(),F1=T.getActiveCubeFace(),B1=T.getActiveMipmapLevel();T.setRenderTarget(b1),T.getClearColor(A1),j1=T.getClearAlpha(),j1<1&&T.setClearColor(16777215,.5),T.clear(),n2&&W1.render(K);let c2=T.toneMapping;T.toneMapping=g4;let l2=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),L.setupLightsView(H),i2===!0&&p1.setGlobalState(T.clippingPlanes,H),re(w,K,H),Z.updateMultisampleRenderTarget(b1),Z.updateRenderTargetMipmap(b1),e2.has("WEBGL_multisampled_render_to_texture")===!1){let V1=!1;for(let I2=0,f3=U.length;I2<f3;I2++){let n3=U[I2],{object:D2,geometry:q3,material:N1,group:Ae}=n3;if(N1.side===D4&&D2.layers.test(H.layers)){let L2=N1.side;N1.side=fe,N1.needsUpdate=!0,g3(D2,K,H,q3,N1,Ae),N1.side=L2,N1.needsUpdate=!0,V1=!0}}V1===!0&&(Z.updateMultisampleRenderTarget(b1),Z.updateRenderTargetMipmap(b1))}T.setRenderTarget(w1,F1,B1),T.setClearColor(A1,j1),l2!==void 0&&(H.viewport=l2),T.toneMapping=c2}function re(w,U,K){let H=U.isScene===!0?U.overrideMaterial:null;for(let W=0,b1=w.length;W<b1;W++){let C1=w[W],{object:w1,geometry:F1,group:B1}=C1,c2=C1.material;c2.allowOverride===!0&&H!==null&&(c2=H),w1.layers.test(K.layers)&&g3(w1,U,K,F1,c2,B1)}}function g3(w,U,K,H,W,b1){w.onBeforeRender(T,U,K,H,W,b1),w.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(T,U,K,H,w,b1),W.transparent===!0&&W.side===D4&&W.forceSinglePass===!1?(W.side=fe,W.needsUpdate=!0,T.renderBufferDirect(K,U,H,W,w,b1),W.side=n0,W.needsUpdate=!0,T.renderBufferDirect(K,U,H,W,w,b1),W.side=D4):T.renderBufferDirect(K,U,H,W,w,b1),w.onAfterRender(T,U,K,H,W,b1)}function i3(w,U,K){U.isScene!==!0&&(U=B2);let H=G.get(w),W=L.state.lights,b1=L.state.shadowsArray,C1=W.state.version,w1=_1.getParameters(w,W.state,b1,U,K,L.state.lightProbeGridArray),F1=_1.getProgramCacheKey(w1),B1=H.programs;H.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?U.environment:null,H.fog=U.fog;let c2=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;H.envMap=m1.get(w.envMap||H.environment,c2),H.envMapRotation=H.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,B1===void 0&&(w.addEventListener("dispose",k1),B1=new Map,H.programs=B1);let l2=B1.get(F1);if(l2!==void 0){if(H.currentProgram===l2&&H.lightsStateVersion===C1)return L4(w,w1),l2}else w1.uniforms=_1.getUniforms(w),R!==null&&w.isNodeMaterial&&R.build(w,K,w1),w.onBeforeCompile(w1,T),l2=_1.acquireProgram(w1,F1),B1.set(F1,l2),H.uniforms=w1.uniforms;let V1=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(V1.clippingPlanes=p1.uniform),L4(w,w1),H.needsLights=Ze(w),H.lightsStateVersion=C1,H.needsLights&&(V1.ambientLightColor.value=W.state.ambient,V1.lightProbe.value=W.state.probe,V1.directionalLights.value=W.state.directional,V1.directionalLightShadows.value=W.state.directionalShadow,V1.spotLights.value=W.state.spot,V1.spotLightShadows.value=W.state.spotShadow,V1.rectAreaLights.value=W.state.rectArea,V1.ltc_1.value=W.state.rectAreaLTC1,V1.ltc_2.value=W.state.rectAreaLTC2,V1.pointLights.value=W.state.point,V1.pointLightShadows.value=W.state.pointShadow,V1.hemisphereLights.value=W.state.hemi,V1.directionalShadowMatrix.value=W.state.directionalShadowMatrix,V1.spotLightMatrix.value=W.state.spotLightMatrix,V1.spotLightMap.value=W.state.spotLightMap,V1.pointShadowMatrix.value=W.state.pointShadowMatrix),H.lightProbeGrid=L.state.lightProbeGridArray.length>0,H.currentProgram=l2,H.uniformsList=null,l2}function x3(w){if(w.uniformsList===null){let U=w.currentProgram.getUniforms();w.uniformsList=L6.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function L4(w,U){let K=G.get(w);K.outputColorSpace=U.outputColorSpace,K.batching=U.batching,K.batchingColor=U.batchingColor,K.instancing=U.instancing,K.instancingColor=U.instancingColor,K.instancingMorph=U.instancingMorph,K.skinning=U.skinning,K.morphTargets=U.morphTargets,K.morphNormals=U.morphNormals,K.morphColors=U.morphColors,K.morphTargetsCount=U.morphTargetsCount,K.numClippingPlanes=U.numClippingPlanes,K.numIntersection=U.numClipIntersection,K.vertexAlphas=U.vertexAlphas,K.vertexTangents=U.vertexTangents,K.toneMapping=U.toneMapping}function Zt(w,U){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;M.setFromMatrixPosition(U.matrixWorld);for(let K=0,H=w.length;K<H;K++){let W=w[K];if(W.texture!==null&&W.boundingBox.containsPoint(M))return W}return null}function L3(w,U,K,H,W){U.isScene!==!0&&(U=B2),Z.resetTextureUnits();let b1=U.fog,C1=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?U.environment:null,w1=O===null?T.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:M2.workingColorSpace,F1=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,B1=m1.get(H.envMap||C1,F1),c2=H.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,l2=!!K.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),V1=!!K.morphAttributes.position,I2=!!K.morphAttributes.normal,f3=!!K.morphAttributes.color,n3=g4;H.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(n3=T.toneMapping);let D2=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,q3=D2!==void 0?D2.length:0,N1=G.get(H),Ae=L.state.lights;if(i2===!0&&(t2===!0||w!==A)){let V2=w===A&&H.id===Y;p1.setState(H,w,V2)}let L2=!1;H.version===N1.__version?(N1.needsLights&&N1.lightsStateVersion!==Ae.state.version||N1.outputColorSpace!==w1||W.isBatchedMesh&&N1.batching===!1||!W.isBatchedMesh&&N1.batching===!0||W.isBatchedMesh&&N1.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&N1.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&N1.instancing===!1||!W.isInstancedMesh&&N1.instancing===!0||W.isSkinnedMesh&&N1.skinning===!1||!W.isSkinnedMesh&&N1.skinning===!0||W.isInstancedMesh&&N1.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&N1.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&N1.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&N1.instancingMorph===!1&&W.morphTexture!==null||N1.envMap!==B1||H.fog===!0&&N1.fog!==b1||N1.numClippingPlanes!==void 0&&(N1.numClippingPlanes!==p1.numPlanes||N1.numIntersection!==p1.numIntersection)||N1.vertexAlphas!==c2||N1.vertexTangents!==l2||N1.morphTargets!==V1||N1.morphNormals!==I2||N1.morphColors!==f3||N1.toneMapping!==n3||N1.morphTargetsCount!==q3||!!N1.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(L2=!0):(L2=!0,N1.__version=H.version);let Qe=N1.currentProgram;L2===!0&&(Qe=i3(H,U,W),R&&H.isNodeMaterial&&R.onUpdateProgram(H,Qe,N1));let w4=!1,b0=!1,Qt=!1,F2=Qe.getUniforms(),u3=N1.uniforms;if(z.useProgram(Qe.program)&&(w4=!0,b0=!0,Qt=!0),H.id!==Y&&(Y=H.id,b0=!0),N1.needsLights){let V2=Zt(L.state.lightProbeGridArray,W);N1.lightProbeGrid!==V2&&(N1.lightProbeGrid=V2,b0=!0)}if(w4||A!==w){z.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),F2.setValue(F,"projectionMatrix",w.projectionMatrix),F2.setValue(F,"viewMatrix",w.matrixWorldInverse);let C0=F2.map.cameraPosition;C0!==void 0&&C0.setValue(F,C2.setFromMatrixPosition(w.matrixWorld)),E.logarithmicDepthBuffer&&F2.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&F2.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),A!==w&&(A=w,b0=!0,Qt=!0)}if(N1.needsLights&&(Ae.state.directionalShadowMap.length>0&&F2.setValue(F,"directionalShadowMap",Ae.state.directionalShadowMap,Z),Ae.state.spotShadowMap.length>0&&F2.setValue(F,"spotShadowMap",Ae.state.spotShadowMap,Z),Ae.state.pointShadowMap.length>0&&F2.setValue(F,"pointShadowMap",Ae.state.pointShadowMap,Z)),W.isSkinnedMesh){F2.setOptional(F,W,"bindMatrix"),F2.setOptional(F,W,"bindMatrixInverse");let V2=W.skeleton;V2&&(V2.boneTexture===null&&V2.computeBoneTexture(),F2.setValue(F,"boneTexture",V2.boneTexture,Z))}W.isBatchedMesh&&(F2.setOptional(F,W,"batchingTexture"),F2.setValue(F,"batchingTexture",W._matricesTexture,Z),F2.setOptional(F,W,"batchingIdTexture"),F2.setValue(F,"batchingIdTexture",W._indirectTexture,Z),F2.setOptional(F,W,"batchingColorTexture"),W._colorsTexture!==null&&F2.setValue(F,"batchingColorTexture",W._colorsTexture,Z));let S0=K.morphAttributes;if((S0.position!==void 0||S0.normal!==void 0||S0.color!==void 0)&&k.update(W,K,Qe),(b0||N1.receiveShadow!==W.receiveShadow)&&(N1.receiveShadow=W.receiveShadow,F2.setValue(F,"receiveShadow",W.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&U.environment!==null&&(u3.envMapIntensity.value=U.environmentIntensity),u3.dfgLUT!==void 0&&(u3.dfgLUT.value=nx()),b0){if(F2.setValue(F,"toneMappingExposure",T.toneMappingExposure),N1.needsLights&&l3(u3,Qt),b1&&H.fog===!0&&I1.refreshFogUniforms(u3,b1),I1.refreshMaterialUniforms(u3,H,s1,r1,L.state.transmissionRenderTarget[w.id]),N1.needsLights&&N1.lightProbeGrid){let V2=N1.lightProbeGrid;u3.probesSH.value=V2.texture,u3.probesMin.value.copy(V2.boundingBox.min),u3.probesMax.value.copy(V2.boundingBox.max),u3.probesResolution.value.copy(V2.resolution)}L6.upload(F,x3(N1),u3,Z)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(L6.upload(F,x3(N1),u3,Z),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&F2.setValue(F,"center",W.center),F2.setValue(F,"modelViewMatrix",W.modelViewMatrix),F2.setValue(F,"normalMatrix",W.normalMatrix),F2.setValue(F,"modelMatrix",W.matrixWorld),H.uniformsGroups!==void 0){let V2=H.uniformsGroups;for(let C0=0,e6=V2.length;C0<e6;C0++){let ho=V2[C0];c1.update(ho,Qe),c1.bind(ho,Qe)}}return Qe}function l3(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Ze(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(w,U,K){let H=G.get(w);H.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),G.get(w.texture).__webglTexture=U,G.get(w.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:K,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,U){let K=G.get(w);K.__webglFramebuffer=U,K.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,K=0){O=w,I=U,N=K;let H=null,W=!1,b1=!1;if(w){let w1=G.get(w);if(w1.__useDefaultFramebuffer!==void 0){z.bindFramebuffer(F.FRAMEBUFFER,w1.__webglFramebuffer),l1.copy(w.viewport),d1.copy(w.scissor),$1=w.scissorTest,z.viewport(l1),z.scissor(d1),z.setScissorTest($1),Y=-1;return}else if(w1.__webglFramebuffer===void 0)Z.setupRenderTarget(w);else if(w1.__hasExternalTextures)Z.rebindTextures(w,G.get(w.texture).__webglTexture,G.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let c2=w.depthTexture;if(w1.__boundDepthTexture!==c2){if(c2!==null&&G.has(c2)&&(w.width!==c2.image.width||w.height!==c2.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(w)}}let F1=w.texture;(F1.isData3DTexture||F1.isDataArrayTexture||F1.isCompressedArrayTexture)&&(b1=!0);let B1=G.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(B1[U])?H=B1[U][K]:H=B1[U],W=!0):w.samples>0&&Z.useMultisampledRTT(w)===!1?H=G.get(w).__webglMultisampledFramebuffer:Array.isArray(B1)?H=B1[K]:H=B1,l1.copy(w.viewport),d1.copy(w.scissor),$1=w.scissorTest}else l1.copy(T1).multiplyScalar(s1).floor(),d1.copy(v2).multiplyScalar(s1).floor(),$1=E1;if(K!==0&&(H=q),z.bindFramebuffer(F.FRAMEBUFFER,H)&&z.drawBuffers(w,H),z.viewport(l1),z.scissor(d1),z.setScissorTest($1),W){let w1=G.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,w1.__webglTexture,K)}else if(b1){let w1=U;for(let F1=0;F1<w.textures.length;F1++){let B1=G.get(w.textures[F1]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+F1,B1.__webglTexture,K,w1)}}else if(w!==null&&K!==0){let w1=G.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,w1.__webglTexture,K)}Y=-1},this.readRenderTargetPixels=function(w,U,K,H,W,b1,C1,w1=0){if(!(w&&w.isWebGLRenderTarget)){Q1("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let F1=G.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&C1!==void 0&&(F1=F1[C1]),F1){z.bindFramebuffer(F.FRAMEBUFFER,F1);try{let B1=w.textures[w1],c2=B1.format,l2=B1.type;if(w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+w1),!E.textureFormatReadable(c2)){Q1("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!E.textureTypeReadable(l2)){Q1("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-H&&K>=0&&K<=w.height-W&&F.readPixels(U,K,H,W,z1.convert(c2),z1.convert(l2),b1)}finally{let B1=O!==null?G.get(O).__webglFramebuffer:null;z.bindFramebuffer(F.FRAMEBUFFER,B1)}}},this.readRenderTargetPixelsAsync=function(w,U,K,H,W,b1,C1,w1=0){return lt(this,null,function*(){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let F1=G.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&C1!==void 0&&(F1=F1[C1]),F1)if(U>=0&&U<=w.width-H&&K>=0&&K<=w.height-W){z.bindFramebuffer(F.FRAMEBUFFER,F1);let B1=w.textures[w1],c2=B1.format,l2=B1.type;if(w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+w1),!E.textureFormatReadable(c2))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!E.textureTypeReadable(l2))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let V1=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,V1),F.bufferData(F.PIXEL_PACK_BUFFER,b1.byteLength,F.STREAM_READ),F.readPixels(U,K,H,W,z1.convert(c2),z1.convert(l2),0);let I2=O!==null?G.get(O).__webglFramebuffer:null;z.bindFramebuffer(F.FRAMEBUFFER,I2);let f3=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),yield Hl(F,f3,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,V1),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,b1),F.deleteBuffer(V1),F.deleteSync(f3),b1}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(w,U=null,K=0){let H=Math.pow(2,-K),W=Math.floor(w.image.width*H),b1=Math.floor(w.image.height*H),C1=U!==null?U.x:0,w1=U!==null?U.y:0;Z.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,K,0,0,C1,w1,W,b1),z.unbindTexture()},this.copyTextureToTexture=function(w,U,K=null,H=null,W=0,b1=0){let C1,w1,F1,B1,c2,l2,V1,I2,f3,n3=w.isCompressedTexture?w.mipmaps[b1]:w.image;if(K!==null)C1=K.max.x-K.min.x,w1=K.max.y-K.min.y,F1=K.isBox3?K.max.z-K.min.z:1,B1=K.min.x,c2=K.min.y,l2=K.isBox3?K.min.z:0;else{let u3=Math.pow(2,-W);C1=Math.floor(n3.width*u3),w1=Math.floor(n3.height*u3),w.isDataArrayTexture?F1=n3.depth:w.isData3DTexture?F1=Math.floor(n3.depth*u3):F1=1,B1=0,c2=0,l2=0}H!==null?(V1=H.x,I2=H.y,f3=H.z):(V1=0,I2=0,f3=0);let D2=z1.convert(U.format),q3=z1.convert(U.type),N1;U.isData3DTexture?(Z.setTexture3D(U,0),N1=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Z.setTexture2DArray(U,0),N1=F.TEXTURE_2D_ARRAY):(Z.setTexture2D(U,0),N1=F.TEXTURE_2D),z.activeTexture(F.TEXTURE0),z.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),z.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),z.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let Ae=z.getParameter(F.UNPACK_ROW_LENGTH),L2=z.getParameter(F.UNPACK_IMAGE_HEIGHT),Qe=z.getParameter(F.UNPACK_SKIP_PIXELS),w4=z.getParameter(F.UNPACK_SKIP_ROWS),b0=z.getParameter(F.UNPACK_SKIP_IMAGES);z.pixelStorei(F.UNPACK_ROW_LENGTH,n3.width),z.pixelStorei(F.UNPACK_IMAGE_HEIGHT,n3.height),z.pixelStorei(F.UNPACK_SKIP_PIXELS,B1),z.pixelStorei(F.UNPACK_SKIP_ROWS,c2),z.pixelStorei(F.UNPACK_SKIP_IMAGES,l2);let Qt=w.isDataArrayTexture||w.isData3DTexture,F2=U.isDataArrayTexture||U.isData3DTexture;if(w.isDepthTexture){let u3=G.get(w),S0=G.get(U),V2=G.get(u3.__renderTarget),C0=G.get(S0.__renderTarget);z.bindFramebuffer(F.READ_FRAMEBUFFER,V2.__webglFramebuffer),z.bindFramebuffer(F.DRAW_FRAMEBUFFER,C0.__webglFramebuffer);for(let e6=0;e6<F1;e6++)Qt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,G.get(w).__webglTexture,W,l2+e6),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,G.get(U).__webglTexture,b1,f3+e6)),F.blitFramebuffer(B1,c2,C1,w1,V1,I2,C1,w1,F.DEPTH_BUFFER_BIT,F.NEAREST);z.bindFramebuffer(F.READ_FRAMEBUFFER,null),z.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(W!==0||w.isRenderTargetTexture||G.has(w)){let u3=G.get(w),S0=G.get(U);z.bindFramebuffer(F.READ_FRAMEBUFFER,j),z.bindFramebuffer(F.DRAW_FRAMEBUFFER,D);for(let V2=0;V2<F1;V2++)Qt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,u3.__webglTexture,W,l2+V2):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,u3.__webglTexture,W),F2?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,S0.__webglTexture,b1,f3+V2):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,S0.__webglTexture,b1),W!==0?F.blitFramebuffer(B1,c2,C1,w1,V1,I2,C1,w1,F.COLOR_BUFFER_BIT,F.NEAREST):F2?F.copyTexSubImage3D(N1,b1,V1,I2,f3+V2,B1,c2,C1,w1):F.copyTexSubImage2D(N1,b1,V1,I2,B1,c2,C1,w1);z.bindFramebuffer(F.READ_FRAMEBUFFER,null),z.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else F2?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(N1,b1,V1,I2,f3,C1,w1,F1,D2,q3,n3.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(N1,b1,V1,I2,f3,C1,w1,F1,D2,n3.data):F.texSubImage3D(N1,b1,V1,I2,f3,C1,w1,F1,D2,q3,n3):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,b1,V1,I2,C1,w1,D2,q3,n3.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,b1,V1,I2,n3.width,n3.height,D2,n3.data):F.texSubImage2D(F.TEXTURE_2D,b1,V1,I2,C1,w1,D2,q3,n3);z.pixelStorei(F.UNPACK_ROW_LENGTH,Ae),z.pixelStorei(F.UNPACK_IMAGE_HEIGHT,L2),z.pixelStorei(F.UNPACK_SKIP_PIXELS,Qe),z.pixelStorei(F.UNPACK_SKIP_ROWS,w4),z.pixelStorei(F.UNPACK_SKIP_IMAGES,b0),b1===0&&U.generateMipmaps&&F.generateMipmap(N1),z.unbindTexture()},this.initRenderTarget=function(w){G.get(w).__webglFramebuffer===void 0&&Z.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Z.setTextureCube(w,0):w.isData3DTexture?Z.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Z.setTexture2DArray(w,0):Z.setTexture2D(w,0),z.unbindTexture()},this.resetState=function(){I=0,N=0,O=null,z.reset(),y1.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return m4}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=M2._getDrawingBufferColorSpace(e),t.unpackColorSpace=M2._getUnpackColorSpace()}};var Xr=(()=>{class n{constructor(){this._isDark=h3(this.getInitialTheme()),this.isDark=this._isDark.asReadonly(),this.apply()}toggle(){this._isDark.update(t=>!t),this.apply(),typeof localStorage<"u"&&localStorage.setItem("theme",this._isDark()?"dark":"light")}getInitialTheme(){if(typeof window>"u")return!0;let t=localStorage.getItem("theme");return t?t==="dark":!0}apply(){if(typeof document>"u")return;let t=this._isDark();document.documentElement.dataset.theme=t?"dark":"light",document.querySelector('meta[name="theme-color"]')?.setAttribute("content",t?"#050810":"#f7f9fc")}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=R3({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function o0(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function T9(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}var Le={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Zi={duration:.5,overwrite:!1,delay:0},nc,B3,$2,a4=1e8,U2=1/a4,Y8=Math.PI*2,rx=Y8/4,sx=0,E9=Math.sqrt,cx=Math.cos,ox=Math.sin,b3=function(e){return typeof e=="string"},s3=function(e){return typeof e=="function"},f0=function(e){return typeof e=="number"},i5=function(e){return typeof e>"u"},G4=function(e){return typeof e=="object"},Ce=function(e){return e!==!1},ac=function(){return typeof window<"u"},Yr=function(e){return s3(e)||b3(e)},A9=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Z3=Array.isArray,lx=/random\([^)]+\)/g,fx=/,\s*/g,x9=/(?:-?\.?\d|\.)+/gi,rc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Et=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,B8=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,sc=/[+-]=-?[.\d]+/,ux=/[^,'"\[\]\s]+/gi,hx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Q2,H4,$8,cc,We={},Jr={},N9,P9=function(e){return(Jr=E6(e,We))&&Q3},n5=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Qi=function(e,t){return!t&&console.warn(e)},R9=function(e,t){return e&&(We[e]=t)&&Jr&&(Jr[e]=t)||We},en=function(){return 0},dx={suppressEvents:!0,isStart:!0,kill:!1},$r={suppressEvents:!0,kill:!1},px={suppressEvents:!0},oc={},X0=[],j8={},I9,be={},H8={},z9=30,jr=[],lc="",fc=function(e){var t=e[0],i,a;if(G4(t)||s3(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(a=jr.length;a--&&!jr[a].targetTest(t););i=jr[a]}for(a=e.length;a--;)e[a]&&(e[a]._gsap||(e[a]._gsap=new pc(e[a],i)))||e.splice(a,1);return e},Y0=function(e){return e._gsap||fc(r4(e))[0]._gsap},uc=function(e,t,i){return(i=e[t])&&s3(i)?e[t]():i5(i)&&e.getAttribute&&e.getAttribute(t)||i},ue=function(e,t){return(e=e.split(",")).forEach(t)||e},c3=function(e){return Math.round(e*1e5)/1e5||0},Z2=function(e){return Math.round(e*1e7)/1e7||0},At=function(e,t){var i=t.charAt(0),a=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+a:i==="-"?e-a:i==="*"?e*a:e/a},mx=function(e,t){for(var i=t.length,a=0;e.indexOf(t[a])<0&&++a<i;);return a<i},Zr=function(){var e=X0.length,t=X0.slice(0),i,a;for(j8={},X0.length=0,i=0;i<e;i++)a=t[i],a&&a._lazy&&(a.render(a._lazy[0],a._lazy[1],!0)._lazy=0)},hc=function(e){return!!(e._initted||e._startAt||e.add)},k9=function(e,t,i,a){X0.length&&!B3&&Zr(),e.render(t,i,a||!!(B3&&t<0&&hc(e))),X0.length&&!B3&&Zr()},D9=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(ux).length<2?t:b3(e)?e.trim():e},F9=function(e){return e},qe=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},gx=function(e){return function(t,i){for(var a in i)a in t||a==="duration"&&e||a==="ease"||(t[a]=i[a])}},E6=function(e,t){for(var i in t)e[i]=t[i];return e},y9=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=G4(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Qr=function(e,t){var i={},a;for(a in e)a in t||(i[a]=e[a]);return i},ji=function(e){var t=e.parent||Q2,i=e.keyframes?gx(Z3(e.keyframes)):qe;if(Ce(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},vx=function(e,t){for(var i=e.length,a=i===t.length;a&&i--&&e[i]===t[i];);return i<0},O9=function(e,t,i,a,r){i===void 0&&(i="_first"),a===void 0&&(a="_last");var s=e[a],c;if(r)for(c=t[r];s&&s[r]>c;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[a]=t,t._prev=s,t.parent=t._dp=e,t},a5=function(e,t,i,a){i===void 0&&(i="_first"),a===void 0&&(a="_last");var r=t._prev,s=t._next;r?r._next=s:e[i]===t&&(e[i]=s),s?s._prev=r:e[a]===t&&(e[a]=r),t._next=t._prev=t.parent=null},$0=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Lt=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},Mx=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},K8=function(e,t,i,a){return e._startAt&&(B3?e._startAt.revert($r):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,a))},_x=function n(e){return!e||e._ts&&n(e.parent)},b9=function(e){return e._repeat?A6(e._tTime,e=e.duration()+e._rDelay)*e:0},A6=function(e,t){var i=Math.floor(e=Z2(e/t));return e&&i===e?i-1:i},e5=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},r5=function(e){return e._end=Z2(e._start+(e._tDur/Math.abs(e._ts||e._rts||U2)||0))},s5=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Z2(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),r5(e),i._dirty||Lt(i,e)),e},U9=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=e5(e.rawTime(),t),(!t._dur||an(0,t.totalDuration(),i)-t._tTime>U2)&&t.render(i,!0)),Lt(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-U2}},V4=function(e,t,i,a){return t.parent&&$0(t),t._start=Z2((f0(i)?i:i||e!==Q2?n4(e,i,t):e._time)+t._delay),t._end=Z2(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),O9(e,t,"_first","_last",e._sort?"_start":0),J8(t)||(e._recent=t),a||U9(e,t),e._ts<0&&s5(e,e._tTime),e},B9=function(e,t){return(We.ScrollTrigger||n5("scrollTrigger",t))&&We.ScrollTrigger.create(t,e)},H9=function(e,t,i,a,r){if(vc(e,t,r),!e._initted)return 1;if(!i&&e._pt&&!B3&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&I9!==Se.frame)return X0.push(e),e._lazy=[r,a],1},xx=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},J8=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},zx=function(e,t,i,a){var r=e.ratio,s=t<0||!t&&(!e._start&&xx(e)&&!(!e._initted&&J8(e))||(e._ts<0||e._dp._ts<0)&&!J8(e))?0:1,c=e._rDelay,o=0,l,f,h;if(c&&e._repeat&&(o=an(0,e._tDur,t),f=A6(o,c),e._yoyo&&f&1&&(s=1-s),f!==A6(e._tTime,c)&&(r=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==r||B3||a||e._zTime===U2||!t&&e._zTime){if(!e._initted&&H9(e,t,a,i,o))return;for(h=e._zTime,e._zTime=t||(i?U2:0),i||(i=t&&!h),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=o,l=e._pt;l;)l.r(s,l.d),l=l._next;t<0&&K8(e,t,i,!0),e._onUpdate&&!i&&Ge(e,"onUpdate"),o&&e._repeat&&!i&&e.parent&&Ge(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&$0(e,1),!i&&!B3&&(Ge(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},yx=function(e,t,i){var a;if(i>t)for(a=e._first;a&&a._start<=i;){if(a.data==="isPause"&&a._start>t)return a;a=a._next}else for(a=e._last;a&&a._start>=i;){if(a.data==="isPause"&&a._start<t)return a;a=a._prev}},N6=function(e,t,i,a){var r=e._repeat,s=Z2(t)||0,c=e._tTime/e._tDur;return c&&!a&&(e._time*=s/e._dur),e._dur=s,e._tDur=r?r<0?1e10:Z2(s*(r+1)+e._rDelay*r):s,c>0&&!a&&s5(e,e._tTime=e._tDur*c),e.parent&&r5(e),i||Lt(e.parent,e),e},S9=function(e){return e instanceof J3?Lt(e):N6(e,e._dur)},bx={_start:0,endTime:en,totalDuration:en},n4=function n(e,t,i){var a=e.labels,r=e._recent||bx,s=e.duration()>=a4?r.endTime(!1):e._dur,c,o,l;return b3(t)&&(isNaN(t)||t in a)?(o=t.charAt(0),l=t.substr(-1)==="%",c=t.indexOf("="),o==="<"||o===">"?(c>=0&&(t=t.replace(/=/,"")),(o==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(c<0?r:i).totalDuration()/100:1)):c<0?(t in a||(a[t]=s),a[t]):(o=parseFloat(t.charAt(c-1)+t.substr(c+1)),l&&i&&(o=o/100*(Z3(i)?i[0]:i).totalDuration()),c>1?n(e,t.substr(0,c-1),i)+o:s+o)):t==null?s:+t},Ki=function(e,t,i){var a=f0(t[1]),r=(a?2:1)+(e<2?0:1),s=t[r],c,o;if(a&&(s.duration=t[1]),s.parent=i,e){for(c=s,o=i;o&&!("immediateRender"in c);)c=o.vars.defaults||{},o=Ce(o.vars.inherit)&&o.parent;s.immediateRender=Ce(c.immediateRender),e<2?s.runBackwards=1:s.startAt=t[r-1]}return new d3(t[0],s,t[r+1])},j0=function(e,t){return e||e===0?t(e):t},an=function(e,t,i){return i<e?e:i>t?t:i},H3=function(e,t){return!b3(e)||!(t=hx.exec(e))?"":t[1]},Sx=function(e,t,i){return j0(i,function(a){return an(e,t,a)})},Z8=[].slice,V9=function(e,t){return e&&G4(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&G4(e[0]))&&!e.nodeType&&e!==H4},Cx=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(a){var r;return b3(a)&&!t||V9(a,1)?(r=i).push.apply(r,r4(a)):i.push(a)})||i},r4=function(e,t,i){return $2&&!t&&$2.selector?$2.selector(e):b3(e)&&!i&&($8||!P6())?Z8.call((t||cc).querySelectorAll(e),0):Z3(e)?Cx(e,i):V9(e)?Z8.call(e,0):e?[e]:[]},Q8=function(e){return e=r4(e)[0]||Qi("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return r4(t,i.querySelectorAll?i:i===e?Qi("Invalid scope")||cc.createElement("div"):e)}},G9=function(e){return e.sort(function(){return .5-Math.random()})},W9=function(e){if(s3(e))return e;var t=G4(e)?e:{each:e},i=wt(t.ease),a=t.from||0,r=parseFloat(t.base)||0,s={},c=a>0&&a<1,o=isNaN(a)||c,l=t.axis,f=a,h=a;return b3(a)?f=h={center:.5,edges:.5,end:1}[a]||0:!c&&o&&(f=a[0],h=a[1]),function(u,d,p){var v=(p||t).length,m=s[v],g,x,y,M,b,L,S,_,C;if(!m){if(C=t.grid==="auto"?0:(t.grid||[1,a4])[1],!C){for(S=-a4;S<(S=p[C++].getBoundingClientRect().left)&&C<v;);C<v&&C--}for(m=s[v]=[],g=o?Math.min(C,v)*f-.5:a%C,x=C===a4?0:o?v*h/C-.5:a/C|0,S=0,_=a4,L=0;L<v;L++)y=L%C-g,M=x-(L/C|0),m[L]=b=l?Math.abs(l==="y"?M:y):E9(y*y+M*M),b>S&&(S=b),b<_&&(_=b);a==="random"&&G9(m),m.max=S-_,m.min=_,m.v=v=(parseFloat(t.amount)||parseFloat(t.each)*(C>v?v-1:l?l==="y"?v/C:C:Math.max(C,v/C))||0)*(a==="edges"?-1:1),m.b=v<0?r-v:r,m.u=H3(t.amount||t.each)||0,i=i&&v<0?Ox(i):i}return v=(m[u]-m.min)/m.max||0,Z2(m.b+(i?i(v):v)*m.v)+m.u}},ec=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var a=Z2(Math.round(parseFloat(i)/e)*e*t);return(a-a%1)/t+(f0(i)?0:H3(i))}},q9=function(e,t){var i=Z3(e),a,r;return!i&&G4(e)&&(a=i=e.radius||a4,e.values?(e=r4(e.values),(r=!f0(e[0]))&&(a*=a)):e=ec(e.increment)),j0(t,i?s3(e)?function(s){return r=e(s),Math.abs(r-s)<=a?r:s}:function(s){for(var c=parseFloat(r?s.x:s),o=parseFloat(r?s.y:0),l=a4,f=0,h=e.length,u,d;h--;)r?(u=e[h].x-c,d=e[h].y-o,u=u*u+d*d):u=Math.abs(e[h]-c),u<l&&(l=u,f=h);return f=!a||l<=a?e[f]:s,r||f===s||f0(s)?f:f+H3(s)}:ec(e))},X9=function(e,t,i,a){return j0(Z3(e)?!t:i===!0?!!(i=0):!a,function(){return Z3(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(a=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*a)/a})},Lx=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(a){return t.reduce(function(r,s){return s(r)},a)}},wx=function(e,t){return function(i){return e(parseFloat(i))+(t||H3(i))}},Tx=function(e,t,i){return $9(e,t,0,1,i)},Y9=function(e,t,i){return j0(i,function(a){return e[~~t(a)]})},Ex=function n(e,t,i){var a=t-e;return Z3(e)?Y9(e,n(0,e.length),t):j0(i,function(r){return(a+(r-e)%a)%a+e})},Ax=function n(e,t,i){var a=t-e,r=a*2;return Z3(e)?Y9(e,n(0,e.length-1),t):j0(i,function(s){return s=(r+(s-e)%r)%r||0,e+(s>a?r-s:s)})},R6=function(e){return e.replace(lx,function(t){var i=t.indexOf("[")+1,a=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(fx);return X9(i?a:+a[0],i?0:+a[1],+a[2]||1e-5)})},$9=function(e,t,i,a,r){var s=t-e,c=a-i;return j0(r,function(o){return i+((o-e)/s*c||0)})},Nx=function n(e,t,i,a){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var s=b3(e),c={},o,l,f,h,u;if(i===!0&&(a=1)&&(i=null),s)e={p:e},t={p:t};else if(Z3(e)&&!Z3(t)){for(f=[],h=e.length,u=h-2,l=1;l<h;l++)f.push(n(e[l-1],e[l]));h--,r=function(p){p*=h;var v=Math.min(u,~~p);return f[v](p-v)},i=t}else a||(e=E6(Z3(e)?[]:{},e));if(!f){for(o in t)mc.call(c,e,o,"get",t[o]);r=function(p){return xc(p,c)||(s?e.p:e)}}}return j0(i,r)},C9=function(e,t,i){var a=e.labels,r=a4,s,c,o;for(s in a)c=a[s]-t,c<0==!!i&&c&&r>(c=Math.abs(c))&&(o=s,r=c);return o},Ge=function(e,t,i){var a=e.vars,r=a[t],s=$2,c=e._ctx,o,l,f;if(r)return o=a[t+"Params"],l=a.callbackScope||e,i&&X0.length&&Zr(),c&&($2=c),f=o?r.apply(l,o):r.call(l),$2=s,f},Yi=function(e){return $0(e),e.scrollTrigger&&e.scrollTrigger.kill(!!B3),e.progress()<1&&Ge(e,"onInterrupt"),e},T6,j9=[],K9=function(e){if(e)if(e=!e.name&&e.default||e,ac()||e.headless){var t=e.name,i=s3(e),a=t&&!i&&e.init?function(){this._props=[]}:e,r={init:en,render:xc,add:mc,kill:$x,modifier:Yx,rawVars:0},s={targetTest:0,get:0,getSetter:c5,aliases:{},register:0};if(P6(),e!==a){if(be[t])return;qe(a,qe(Qr(e,r),s)),E6(a.prototype,E6(r,Qr(e,s))),be[a.prop=t]=a,e.targetTest&&(jr.push(a),oc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}R9(t,a),e.register&&e.register(Q3,a,he)}else j9.push(e)},O2=255,$i={aqua:[0,O2,O2],lime:[0,O2,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,O2],navy:[0,0,128],white:[O2,O2,O2],olive:[128,128,0],yellow:[O2,O2,0],orange:[O2,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[O2,0,0],pink:[O2,192,203],cyan:[0,O2,O2],transparent:[O2,O2,O2,0]},V8=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*O2+.5|0},J9=function(e,t,i){var a=e?f0(e)?[e>>16,e>>8&O2,e&O2]:0:$i.black,r,s,c,o,l,f,h,u,d,p;if(!a){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),$i[e])a=$i[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),s=e.charAt(2),c=e.charAt(3),e="#"+r+r+s+s+c+c+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return a=parseInt(e.substr(1,6),16),[a>>16,a>>8&O2,a&O2,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),a=[e>>16,e>>8&O2,e&O2]}else if(e.substr(0,3)==="hsl"){if(a=p=e.match(x9),!t)o=+a[0]%360/360,l=+a[1]/100,f=+a[2]/100,s=f<=.5?f*(l+1):f+l-f*l,r=f*2-s,a.length>3&&(a[3]*=1),a[0]=V8(o+1/3,r,s),a[1]=V8(o,r,s),a[2]=V8(o-1/3,r,s);else if(~e.indexOf("="))return a=e.match(rc),i&&a.length<4&&(a[3]=1),a}else a=e.match(x9)||$i.transparent;a=a.map(Number)}return t&&!p&&(r=a[0]/O2,s=a[1]/O2,c=a[2]/O2,h=Math.max(r,s,c),u=Math.min(r,s,c),f=(h+u)/2,h===u?o=l=0:(d=h-u,l=f>.5?d/(2-h-u):d/(h+u),o=h===r?(s-c)/d+(s<c?6:0):h===s?(c-r)/d+2:(r-s)/d+4,o*=60),a[0]=~~(o+.5),a[1]=~~(l*100+.5),a[2]=~~(f*100+.5)),i&&a.length<4&&(a[3]=1),a},Z9=function(e){var t=[],i=[],a=-1;return e.split(l0).forEach(function(r){var s=r.match(Et)||[];t.push.apply(t,s),i.push(a+=s.length+1)}),t.c=i,t},L9=function(e,t,i){var a="",r=(e+a).match(l0),s=t?"hsla(":"rgba(",c=0,o,l,f,h;if(!r)return e;if(r=r.map(function(u){return(u=J9(u,t,1))&&s+(t?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),i&&(f=Z9(e),o=i.c,o.join(a)!==f.c.join(a)))for(l=e.replace(l0,"1").split(Et),h=l.length-1;c<h;c++)a+=l[c]+(~o.indexOf(c)?r.shift()||s+"0,0,0,0)":(f.length?f:r.length?r:i).shift());if(!l)for(l=e.split(l0),h=l.length-1;c<h;c++)a+=l[c]+r[c];return a+l[h]},l0=(function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in $i)n+="|"+e+"\\b";return new RegExp(n+")","gi")})(),Px=/hsl[a]?\(/,dc=function(e){var t=e.join(" "),i;if(l0.lastIndex=0,l0.test(t))return i=Px.test(t),e[1]=L9(e[1],i),e[0]=L9(e[0],i,Z9(e[1])),!0},tn,Se=(function(){var n=Date.now,e=500,t=33,i=n(),a=i,r=1e3/240,s=r,c=[],o,l,f,h,u,d,p=function v(m){var g=n()-a,x=m===!0,y,M,b,L;if((g>e||g<0)&&(i+=g-t),a+=g,b=a-i,y=b-s,(y>0||x)&&(L=++h.frame,u=b-h.time*1e3,h.time=b=b/1e3,s+=y+(y>=r?4:r-y),M=1),x||(o=l(v)),M)for(d=0;d<c.length;d++)c[d](b,u,L,m)};return h={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return u/(1e3/(m||60))},wake:function(){N9&&(!$8&&ac()&&(H4=$8=window,cc=H4.document||{},We.gsap=Q3,(H4.gsapVersions||(H4.gsapVersions=[])).push(Q3.version),P9(Jr||H4.GreenSockGlobals||!H4.gsap&&H4||{}),j9.forEach(K9)),f=typeof requestAnimationFrame<"u"&&requestAnimationFrame,o&&h.sleep(),l=f||function(m){return setTimeout(m,s-h.time*1e3+1|0)},tn=1,p(2))},sleep:function(){(f?cancelAnimationFrame:clearTimeout)(o),tn=0,l=en},lagSmoothing:function(m,g){e=m||1/0,t=Math.min(g||33,e)},fps:function(m){r=1e3/(m||240),s=h.time*1e3+r},add:function(m,g,x){var y=g?function(M,b,L,S){m(M,b,L,S),h.remove(y)}:m;return h.remove(m),c[x?"unshift":"push"](y),P6(),y},remove:function(m,g){~(g=c.indexOf(m))&&c.splice(g,1)&&d>=g&&d--},_listeners:c},h})(),P6=function(){return!tn&&Se.wake()},y2={},Rx=/^[\d.\-M][\d.\-,\s]/,Ix=/["']/g,kx=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),a=i[0],r=1,s=i.length,c,o,l;r<s;r++)o=i[r],c=r!==s-1?o.lastIndexOf(","):o.length,l=o.substr(0,c),t[a]=isNaN(l)?l.replace(Ix,"").trim():+l,a=o.substr(c+1).trim();return t},Dx=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),a=e.indexOf("(",t);return e.substring(t,~a&&a<i?e.indexOf(")",i+1):i)},Fx=function(e){var t=(e+"").split("("),i=y2[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[kx(t[1])]:Dx(e).split(",").map(D9)):y2._CE&&Rx.test(e)?y2._CE("",e):i},Ox=function(e){return function(t){return 1-e(1-t)}},wt=function(e,t){return e&&(s3(e)?e:y2[e]||Fx(e))||t},Nt=function(e,t,i,a){i===void 0&&(i=function(o){return 1-t(1-o)}),a===void 0&&(a=function(o){return o<.5?t(o*2)/2:1-t((1-o)*2)/2});var r={easeIn:t,easeOut:i,easeInOut:a},s;return ue(e,function(c){y2[c]=We[c]=r,y2[s=c.toLowerCase()]=i;for(var o in r)y2[s+(o==="easeIn"?".in":o==="easeOut"?".out":".inOut")]=y2[c+"."+o]=r[o]}),r},Q9=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},G8=function n(e,t,i){var a=t>=1?t:1,r=(i||(e?.3:.45))/(t<1?t:1),s=r/Y8*(Math.asin(1/a)||0),c=function(f){return f===1?1:a*Math.pow(2,-10*f)*ox((f-s)*r)+1},o=e==="out"?c:e==="in"?function(l){return 1-c(1-l)}:Q9(c);return r=Y8/r,o.config=function(l,f){return n(e,l,f)},o},W8=function n(e,t){t===void 0&&(t=1.70158);var i=function(s){return s?--s*s*((t+1)*s+t)+1:0},a=e==="out"?i:e==="in"?function(r){return 1-i(1-r)}:Q9(i);return a.config=function(r){return n(e,r)},a};ue("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Nt(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});y2.Linear.easeNone=y2.none=y2.Linear.easeIn;Nt("Elastic",G8("in"),G8("out"),G8());(function(n,e){var t=1/e,i=2*t,a=2.5*t,r=function(c){return c<t?n*c*c:c<i?n*Math.pow(c-1.5/e,2)+.75:c<a?n*(c-=2.25/e)*c+.9375:n*Math.pow(c-2.625/e,2)+.984375};Nt("Bounce",function(s){return 1-r(1-s)},r)})(7.5625,2.75);Nt("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Nt("Circ",function(n){return-(E9(1-n*n)-1)});Nt("Sine",function(n){return n===1?1:-cx(n*rx)+1});Nt("Back",W8("in"),W8("out"),W8());y2.SteppedEase=y2.steps=We.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,a=e+(t?0:1),r=t?1:0,s=1-U2;return function(c){return((a*an(0,s,c)|0)+r)*i}}};Zi.ease=y2["quad.out"];ue("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return lc+=n+","+n+"Params,"});var pc=function(e,t){this.id=sx++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:uc,this.set=t?t.getSetter:c5},nn=(function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,N6(this,+t.duration,1,1),this.data=t.data,$2&&(this._ctx=$2,$2.data.push(this)),tn||Se.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,N6(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,a){if(P6(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(s5(this,i),!r._dp||r.parent||U9(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&V4(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!a||this._initted&&Math.abs(this._zTime)===U2||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),k9(this,i,a)),this},e.time=function(i,a){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+b9(this))%(this._dur+this._rDelay)||(i?this._dur:0),a):this._time},e.totalProgress=function(i,a){return arguments.length?this.totalTime(this.totalDuration()*i,a):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,a){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+b9(this),a):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,a){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,a):this._repeat?A6(this._tTime,r)+1:1},e.timeScale=function(i,a){if(!arguments.length)return this._rts===-U2?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?e5(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-U2?0:this._rts,this.totalTime(an(-Math.abs(this._delay),this.totalDuration(),r),a!==!1),r5(this),Mx(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(P6(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==U2&&(this._tTime-=U2)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Z2(i);var a=this.parent||this._dp;return a&&(a._sort||!this.parent)&&V4(a,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Ce(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var a=this.parent||this._dp;return a?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?e5(a.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=px);var a=B3;return B3=i,hc(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),B3=a,this},e.globalTime=function(i){for(var a=this,r=arguments.length?i:a.rawTime();a;)r=a._start+r/(Math.abs(a._ts)||1),a=a._dp;return!this.parent&&this._sat?this._sat.globalTime(i):r},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,S9(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var a=this._time;return this._rDelay=i,S9(this),a?this.time(a):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,a){return this.totalTime(n4(this,i),Ce(a))},e.restart=function(i,a){return this.play().totalTime(i?-this._delay:0,Ce(a)),this._dur||(this._zTime=-U2),this},e.play=function(i,a){return i!=null&&this.seek(i,a),this.reversed(!1).paused(!1)},e.reverse=function(i,a){return i!=null&&this.seek(i||this.totalDuration(),a),this.reversed(!0).paused(!1)},e.pause=function(i,a){return i!=null&&this.seek(i,a),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-U2:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-U2,this},e.isActive=function(){var i=this.parent||this._dp,a=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=a&&r<this.endTime(!0)-U2)},e.eventCallback=function(i,a,r){var s=this.vars;return arguments.length>1?(a?(s[i]=a,r&&(s[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=a)):delete s[i],this):s[i]},e.then=function(i){var a=this,r=a._prom;return new Promise(function(s){var c=s3(i)?i:F9,o=function(){var f=a.then;a.then=null,r&&r(),s3(c)&&(c=c(a))&&(c.then||c===a)&&(a.then=f),s(c),a.then=f};a._initted&&a.totalProgress()===1&&a._ts>=0||!a._tTime&&a._ts<0?o():a._prom=o})},e.kill=function(){Yi(this)},n})();qe(nn.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-U2,_prom:0,_ps:!1,_rts:1});var J3=(function(n){T9(e,n);function e(i,a){var r;return i===void 0&&(i={}),r=n.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=Ce(i.sortChildren),Q2&&V4(i.parent||Q2,o0(r),a),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&B9(o0(r),i.scrollTrigger),r}var t=e.prototype;return t.to=function(a,r,s){return Ki(0,arguments,this),this},t.from=function(a,r,s){return Ki(1,arguments,this),this},t.fromTo=function(a,r,s,c){return Ki(2,arguments,this),this},t.set=function(a,r,s){return r.duration=0,r.parent=this,ji(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new d3(a,r,n4(this,s),1),this},t.call=function(a,r,s){return V4(this,d3.delayedCall(0,a,r),s)},t.staggerTo=function(a,r,s,c,o,l,f){return s.duration=r,s.stagger=s.stagger||c,s.onComplete=l,s.onCompleteParams=f,s.parent=this,new d3(a,s,n4(this,o)),this},t.staggerFrom=function(a,r,s,c,o,l,f){return s.runBackwards=1,ji(s).immediateRender=Ce(s.immediateRender),this.staggerTo(a,r,s,c,o,l,f)},t.staggerFromTo=function(a,r,s,c,o,l,f,h){return c.startAt=s,ji(c).immediateRender=Ce(c.immediateRender),this.staggerTo(a,r,c,o,l,f,h)},t.render=function(a,r,s){var c=this._time,o=this._dirty?this.totalDuration():this._tDur,l=this._dur,f=a<=0?0:Z2(a),h=this._zTime<0!=a<0&&(this._initted||!l),u,d,p,v,m,g,x,y,M,b,L,S;if(this!==Q2&&f>o&&a>=0&&(f=o),f!==this._tTime||s||h){if(c!==this._time&&l&&(f+=this._time-c,a+=this._time-c),u=f,M=this._start,y=this._ts,g=!y,h&&(l||(c=this._zTime),(a||!r)&&(this._zTime=a)),this._repeat){if(L=this._yoyo,m=l+this._rDelay,this._repeat<-1&&a<0)return this.totalTime(m*100+a,r,s);if(u=Z2(f%m),f===o?(v=this._repeat,u=l):(b=Z2(f/m),v=~~b,v&&v===b&&(u=l,v--),u>l&&(u=l)),b=A6(this._tTime,m),!c&&this._tTime&&b!==v&&this._tTime-b*m-this._dur<=0&&(b=v),L&&v&1&&(u=l-u,S=1),v!==b&&!this._lock){var _=L&&b&1,C=_===(L&&v&1);if(v<b&&(_=!_),c=_?0:f%l?l:f,this._lock=1,this.render(c||(S?0:Z2(v*m)),r,!l)._lock=0,this._tTime=f,!r&&this.parent&&Ge(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1,b=v),c&&c!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,o=this._tDur,C&&(this._lock=2,c=_?l:-1e-4,this.render(c,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=yx(this,Z2(c),Z2(u)),x&&(f-=u-(u=x._start))),this._tTime=f,this._time=u,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=a,c=0),!c&&f&&l&&!r&&!b&&(Ge(this,"onStart"),this._tTime!==f))return this;if(u>=c&&a>=0)for(d=this._first;d;){if(p=d._next,(d._act||u>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(a,r,s);if(d.render(d._ts>0?(u-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(u-d._start)*d._ts,r,s),u!==this._time||!this._ts&&!g){x=0,p&&(f+=this._zTime=-U2);break}}d=p}else{d=this._last;for(var T=a<0?a:u;d;){if(p=d._prev,(d._act||T<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(a,r,s);if(d.render(d._ts>0?(T-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(T-d._start)*d._ts,r,s||B3&&hc(d)),u!==this._time||!this._ts&&!g){x=0,p&&(f+=this._zTime=T?-U2:U2);break}}d=p}}if(x&&!r&&(this.pause(),x.render(u>=c?0:-U2)._zTime=u>=c?1:-1,this._ts))return this._start=M,r5(this),this.render(a,r,s);this._onUpdate&&!r&&Ge(this,"onUpdate",!0),(f===o&&this._tTime>=this.totalDuration()||!f&&c)&&(M===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((a||!l)&&(f===o&&this._ts>0||!f&&this._ts<0)&&$0(this,1),!r&&!(a<0&&!c)&&(f||c||!o)&&(Ge(this,f===o&&a>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(f<o&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(a,r){var s=this;if(f0(r)||(r=n4(this,r,a)),!(a instanceof nn)){if(Z3(a))return a.forEach(function(c){return s.add(c,r)}),this;if(b3(a))return this.addLabel(a,r);if(s3(a))a=d3.delayedCall(0,a);else return this}return this!==a?V4(this,a,r):this},t.getChildren=function(a,r,s,c){a===void 0&&(a=!0),r===void 0&&(r=!0),s===void 0&&(s=!0),c===void 0&&(c=-a4);for(var o=[],l=this._first;l;)l._start>=c&&(l instanceof d3?r&&o.push(l):(s&&o.push(l),a&&o.push.apply(o,l.getChildren(!0,r,s)))),l=l._next;return o},t.getById=function(a){for(var r=this.getChildren(1,1,1),s=r.length;s--;)if(r[s].vars.id===a)return r[s]},t.remove=function(a){return b3(a)?this.removeLabel(a):s3(a)?this.killTweensOf(a):(a.parent===this&&a5(this,a),a===this._recent&&(this._recent=this._last),Lt(this))},t.totalTime=function(a,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Z2(Se.time-(this._ts>0?a/this._ts:(this.totalDuration()-a)/-this._ts))),n.prototype.totalTime.call(this,a,r),this._forcing=0,this):this._tTime},t.addLabel=function(a,r){return this.labels[a]=n4(this,r),this},t.removeLabel=function(a){return delete this.labels[a],this},t.addPause=function(a,r,s){var c=d3.delayedCall(0,r||en,s);return c.data="isPause",this._hasPause=1,V4(this,c,n4(this,a))},t.removePause=function(a){var r=this._first;for(a=n4(this,a);r;)r._start===a&&r.data==="isPause"&&$0(r),r=r._next},t.killTweensOf=function(a,r,s){for(var c=this.getTweensOf(a,s),o=c.length;o--;)q0!==c[o]&&c[o].kill(a,r);return this},t.getTweensOf=function(a,r){for(var s=[],c=r4(a),o=this._first,l=f0(r),f;o;)o instanceof d3?mx(o._targets,c)&&(l?(!q0||o._initted&&o._ts)&&o.globalTime(0)<=r&&o.globalTime(o.totalDuration())>r:!r||o.isActive())&&s.push(o):(f=o.getTweensOf(c,r)).length&&s.push.apply(s,f),o=o._next;return s},t.tweenTo=function(a,r){r=r||{};var s=this,c=n4(s,a),o=r,l=o.startAt,f=o.onStart,h=o.onStartParams,u=o.immediateRender,d,p=d3.to(s,qe({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:c,overwrite:"auto",duration:r.duration||Math.abs((c-(l&&"time"in l?l.time:s._time))/s.timeScale())||U2,onStart:function(){if(s.pause(),!d){var m=r.duration||Math.abs((c-(l&&"time"in l?l.time:s._time))/s.timeScale());p._dur!==m&&N6(p,m,0,1).render(p._time,!0,!0),d=1}f&&f.apply(p,h||[])}},r));return u?p.render(0):p},t.tweenFromTo=function(a,r,s){return this.tweenTo(r,qe({startAt:{time:n4(this,a)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(a){return a===void 0&&(a=this._time),C9(this,n4(this,a))},t.previousLabel=function(a){return a===void 0&&(a=this._time),C9(this,n4(this,a),1)},t.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.previousLabel(this._time+U2)},t.shiftChildren=function(a,r,s){s===void 0&&(s=0);var c=this._first,o=this.labels,l;for(a=Z2(a);c;)c._start>=s&&(c._start+=a,c._end+=a),c=c._next;if(r)for(l in o)o[l]>=s&&(o[l]+=a);return Lt(this)},t.invalidate=function(a){var r=this._first;for(this._lock=0;r;)r.invalidate(a),r=r._next;return n.prototype.invalidate.call(this,a)},t.clear=function(a){a===void 0&&(a=!0);for(var r=this._first,s;r;)s=r._next,this.remove(r),r=s;return this._dp&&(this._time=this._tTime=this._pTime=0),a&&(this.labels={}),Lt(this)},t.totalDuration=function(a){var r=0,s=this,c=s._last,o=a4,l,f,h;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-a:a));if(s._dirty){for(h=s.parent;c;)l=c._prev,c._dirty&&c.totalDuration(),f=c._start,f>o&&s._sort&&c._ts&&!s._lock?(s._lock=1,V4(s,c,f-c._delay,1)._lock=0):o=f,f<0&&c._ts&&(r-=f,(!h&&!s._dp||h&&h.smoothChildTiming)&&(s._start+=Z2(f/s._ts),s._time-=f,s._tTime-=f),s.shiftChildren(-f,!1,-1/0),o=0),c._end>r&&c._ts&&(r=c._end),c=l;N6(s,s===Q2&&s._time>r?s._time:r,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(a){if(Q2._ts&&(k9(Q2,e5(a,Q2)),I9=Se.frame),Se.frame>=z9){z9+=Le.autoSleep||120;var r=Q2._first;if((!r||!r._ts)&&Le.autoSleep&&Se._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Se.sleep()}}},e})(nn);qe(J3.prototype,{_lock:0,_hasPause:0,_forcing:0});var Ux=function(e,t,i,a,r,s,c){var o=new he(this._pt,e,t,0,1,_c,null,r),l=0,f=0,h,u,d,p,v,m,g,x;for(o.b=i,o.e=a,i+="",a+="",(g=~a.indexOf("random("))&&(a=R6(a)),s&&(x=[i,a],s(x,e,t),i=x[0],a=x[1]),u=i.match(B8)||[];h=B8.exec(a);)p=h[0],v=a.substring(l,h.index),d?d=(d+1)%5:v.substr(-5)==="rgba("&&(d=1),p!==u[f++]&&(m=parseFloat(u[f-1])||0,o._pt={_next:o._pt,p:v||f===1?v:",",s:m,c:p.charAt(1)==="="?At(m,p)-m:parseFloat(p)-m,m:d&&d<4?Math.round:0},l=B8.lastIndex);return o.c=l<a.length?a.substring(l,a.length):"",o.fp=c,(sc.test(a)||g)&&(o.e=0),this._pt=o,o},mc=function(e,t,i,a,r,s,c,o,l,f){s3(a)&&(a=a(r||0,e,s));var h=e[t],u=i!=="get"?i:s3(h)?l?e[t.indexOf("set")||!s3(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():h,d=s3(h)?l?Wx:nf:Mc,p;if(b3(a)&&(~a.indexOf("random(")&&(a=R6(a)),a.charAt(1)==="="&&(p=At(u,a)+(H3(u)||0),(p||p===0)&&(a=p))),!f||u!==a||tc)return!isNaN(u*a)&&a!==""?(p=new he(this._pt,e,t,+u||0,a-(u||0),typeof h=="boolean"?Xx:af,0,d),l&&(p.fp=l),c&&p.modifier(c,this,e),this._pt=p):(!h&&!(t in e)&&n5(t,a),Ux.call(this,e,t,u,a,d,o||Le.stringFilter,l))},Bx=function(e,t,i,a,r){if(s3(e)&&(e=Ji(e,r,t,i,a)),!G4(e)||e.style&&e.nodeType||Z3(e)||A9(e))return b3(e)?Ji(e,r,t,i,a):e;var s={},c;for(c in e)s[c]=Ji(e[c],r,t,i,a);return s},gc=function(e,t,i,a,r,s){var c,o,l,f;if(be[e]&&(c=new be[e]).init(r,c.rawVars?t[e]:Bx(t[e],a,r,s,i),i,a,s)!==!1&&(i._pt=o=new he(i._pt,r,e,0,1,c.render,c,0,c.priority),i!==T6))for(l=i._ptLookup[i._targets.indexOf(r)],f=c._props.length;f--;)l[c._props[f]]=o;return c},q0,tc,vc=function n(e,t,i){var a=e.vars,r=a.ease,s=a.startAt,c=a.immediateRender,o=a.lazy,l=a.onUpdate,f=a.runBackwards,h=a.yoyoEase,u=a.keyframes,d=a.autoRevert,p=e._dur,v=e._startAt,m=e._targets,g=e.parent,x=g&&g.data==="nested"?g.vars.targets:m,y=e._overwrite==="auto"&&!nc,M=e.timeline,b=a.easeReverse||h,L,S,_,C,T,P,R,q,j,D,I,N,O;if(M&&(!u||!r)&&(r="none"),e._ease=wt(r,Zi.ease),e._rEase=b&&(wt(b)||e._ease),e._from=!M&&!!a.runBackwards,e._from&&(e.ratio=1),!M||u&&!a.stagger){if(q=m[0]?Y0(m[0]).harness:0,N=q&&a[q.prop],L=Qr(a,oc),v&&(v._zTime<0&&v.progress(1),t<0&&f&&c&&!d?v.render(-1,!0):v.revert(f&&p?$r:dx),v._lazy=0),s){if($0(e._startAt=d3.set(m,qe({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!v&&Ce(o),startAt:null,delay:0,onUpdate:l&&function(){return Ge(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(B3||!c&&!d)&&e._startAt.revert($r),c&&p&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(f&&p&&!v){if(t&&(c=!1),_=qe({overwrite:!1,data:"isFromStart",lazy:c&&!v&&Ce(o),immediateRender:c,stagger:0,parent:g},L),N&&(_[q.prop]=N),$0(e._startAt=d3.set(m,_)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(B3?e._startAt.revert($r):e._startAt.render(-1,!0)),e._zTime=t,!c)n(e._startAt,U2,U2);else if(!t)return}for(e._pt=e._ptCache=0,o=p&&Ce(o)||o&&!p,S=0;S<m.length;S++){if(T=m[S],R=T._gsap||fc(m)[S]._gsap,e._ptLookup[S]=D={},j8[R.id]&&X0.length&&Zr(),I=x===m?S:x.indexOf(T),q&&(j=new q).init(T,N||L,e,I,x)!==!1&&(e._pt=C=new he(e._pt,T,j.name,0,1,j.render,j,0,j.priority),j._props.forEach(function(Y){D[Y]=C}),j.priority&&(P=1)),!q||N)for(_ in L)be[_]&&(j=gc(_,L,e,I,T,x))?j.priority&&(P=1):D[_]=C=mc.call(e,T,_,"get",L[_],I,x,0,a.stringFilter);e._op&&e._op[S]&&e.kill(T,e._op[S]),y&&e._pt&&(q0=e,Q2.killTweensOf(T,D,e.globalTime(t)),O=!e.parent,q0=0),e._pt&&o&&(j8[R.id]=1)}P&&zc(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!O,u&&t<=0&&M.render(a4,!0,!0)},Hx=function(e,t,i,a,r,s,c,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],f,h,u,d;if(!l)for(l=e._ptCache[t]=[],u=e._ptLookup,d=e._targets.length;d--;){if(f=u[d][t],f&&f.d&&f.d._pt)for(f=f.d._pt;f&&f.p!==t&&f.fp!==t;)f=f._next;if(!f)return tc=1,e.vars[t]="+=0",vc(e,c),tc=0,o?Qi(t+" not eligible for reset. Try splitting into individual properties"):1;l.push(f)}for(d=l.length;d--;)h=l[d],f=h._pt||h,f.s=(a||a===0)&&!r?a:f.s+(a||0)+s*f.c,f.c=i-f.s,h.e&&(h.e=c3(i)+H3(h.e)),h.b&&(h.b=f.s+H3(h.b))},Vx=function(e,t){var i=e[0]?Y0(e[0]).harness:0,a=i&&i.aliases,r,s,c,o;if(!a)return t;r=E6({},t);for(s in a)if(s in r)for(o=a[s].split(","),c=o.length;c--;)r[o[c]]=r[s];return r},Gx=function(e,t,i,a){var r=t.ease||a||"power1.inOut",s,c;if(Z3(t))c=i[e]||(i[e]=[]),t.forEach(function(o,l){return c.push({t:l/(t.length-1)*100,v:o,e:r})});else for(s in t)c=i[s]||(i[s]=[]),s==="ease"||c.push({t:parseFloat(e),v:t[s],e:r})},Ji=function(e,t,i,a,r){return s3(e)?e.call(t,i,a,r):b3(e)&&~e.indexOf("random(")?R6(e):e},ef=lc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",tf={};ue(ef+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return tf[n]=1});var d3=(function(n){T9(e,n);function e(i,a,r,s){var c;typeof a=="number"&&(r.duration=a,a=r,r=null),c=n.call(this,s?a:ji(a))||this;var o=c.vars,l=o.duration,f=o.delay,h=o.immediateRender,u=o.stagger,d=o.overwrite,p=o.keyframes,v=o.defaults,m=o.scrollTrigger,g=a.parent||Q2,x=(Z3(i)||A9(i)?f0(i[0]):"length"in a)?[i]:r4(i),y,M,b,L,S,_,C,T;if(c._targets=x.length?fc(x):Qi("GSAP target "+i+" not found. https://gsap.com",!Le.nullTargetWarn)||[],c._ptLookup=[],c._overwrite=d,p||u||Yr(l)||Yr(f)){a=c.vars;var P=a.easeReverse||a.yoyoEase;if(y=c.timeline=new J3({data:"nested",defaults:v||{},targets:g&&g.data==="nested"?g.vars.targets:x}),y.kill(),y.parent=y._dp=o0(c),y._start=0,u||Yr(l)||Yr(f)){if(L=x.length,C=u&&W9(u),G4(u))for(S in u)~ef.indexOf(S)&&(T||(T={}),T[S]=u[S]);for(M=0;M<L;M++)b=Qr(a,tf),b.stagger=0,P&&(b.easeReverse=P),T&&E6(b,T),_=x[M],b.duration=+Ji(l,o0(c),M,_,x),b.delay=(+Ji(f,o0(c),M,_,x)||0)-c._delay,!u&&L===1&&b.delay&&(c._delay=f=b.delay,c._start+=f,b.delay=0),y.to(_,b,C?C(M,_,x):0),y._ease=y2.none;y.duration()?l=f=0:c.timeline=0}else if(p){ji(qe(y.vars.defaults,{ease:"none"})),y._ease=wt(p.ease||a.ease||"none");var R=0,q,j,D;if(Z3(p))p.forEach(function(I){return y.to(x,I,">")}),y.duration();else{b={};for(S in p)S==="ease"||S==="easeEach"||Gx(S,p[S],b,p.easeEach);for(S in b)for(q=b[S].sort(function(I,N){return I.t-N.t}),R=0,M=0;M<q.length;M++)j=q[M],D={ease:j.e,duration:(j.t-(M?q[M-1].t:0))/100*l},D[S]=j.v,y.to(x,D,R),R+=D.duration;y.duration()<l&&y.to({},{duration:l-y.duration()})}}l||c.duration(l=y.duration())}else c.timeline=0;return d===!0&&!nc&&(q0=o0(c),Q2.killTweensOf(x),q0=0),V4(g,o0(c),r),a.reversed&&c.reverse(),a.paused&&c.paused(!0),(h||!l&&!p&&c._start===Z2(g._time)&&Ce(h)&&_x(o0(c))&&g.data!=="nested")&&(c._tTime=-U2,c.render(Math.max(0,-f)||0)),m&&B9(o0(c),m),c}var t=e.prototype;return t.render=function(a,r,s){var c=this._time,o=this._tDur,l=this._dur,f=a<0,h=a>o-U2&&!f?o:a<U2?0:a,u,d,p,v,m,g,x,y;if(!l)zx(this,a,r,s);else if(h!==this._tTime||!a||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==f||this._lazy){if(u=h,y=this.timeline,this._repeat){if(v=l+this._rDelay,this._repeat<-1&&f)return this.totalTime(v*100+a,r,s);if(u=Z2(h%v),h===o?(p=this._repeat,u=l):(m=Z2(h/v),p=~~m,p&&p===m?(u=l,p--):u>l&&(u=l)),g=this._yoyo&&p&1,g&&(u=l-u),m=A6(this._tTime,v),u===c&&!s&&this._initted&&p===m)return this._tTime=h,this;p!==m&&this.vars.repeatRefresh&&!g&&!this._lock&&u!==v&&this._initted&&(this._lock=s=1,this.render(Z2(v*p),!0).invalidate()._lock=0)}if(!this._initted){if(H9(this,f?a:u,s,r,h))return this._tTime=0,this;if(c!==this._time&&!(s&&this.vars.repeatRefresh&&p!==m))return this;if(l!==this._dur)return this.render(a,r,s)}if(this._rEase){var M=u<c;if(M!==this._inv){var b=M?c:l-c;this._inv=M,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=c,this._invRecip=b?(M?-1:1)/b:0,this._invScale=M?-this.ratio:1-this.ratio,this._invEase=M?this._rEase:this._ease}this.ratio=x=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=x=this._ease(u/l);if(this._from&&(this.ratio=x=1-x),this._tTime=h,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!c&&h&&!r&&!m&&(Ge(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(x,d.d),d=d._next;y&&y.render(a<0?a:y._dur*y._ease(u/this._dur),r,s)||this._startAt&&(this._zTime=a),this._onUpdate&&!r&&(f&&K8(this,a,r,s),Ge(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!r&&this.parent&&Ge(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(f&&!this._onUpdate&&K8(this,a,!0,!0),(a||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&$0(this,1),!r&&!(f&&!c)&&(h||c||g)&&(Ge(this,h===o?"onComplete":"onReverseComplete",!0),this._prom&&!(h<o&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(a){return(!a||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(a),n.prototype.invalidate.call(this,a)},t.resetTo=function(a,r,s,c,o){tn||Se.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),f;return this._initted||vc(this,l),f=this._ease(l/this._dur),Hx(this,a,r,s,c,f,l,o)?this.resetTo(a,r,s,c,1):(s5(this,0),this.parent||O9(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(a,r){if(r===void 0&&(r="all"),!a&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Yi(this):this.scrollTrigger&&this.scrollTrigger.kill(!!B3),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(a,r,q0&&q0.vars.overwrite!==!0)._first||Yi(this),this.parent&&s!==this.timeline.totalDuration()&&N6(this,this._dur*this.timeline._tDur/s,0,1),this}var c=this._targets,o=a?r4(a):c,l=this._ptLookup,f=this._pt,h,u,d,p,v,m,g;if((!r||r==="all")&&vx(c,o))return r==="all"&&(this._pt=0),Yi(this);for(h=this._op=this._op||[],r!=="all"&&(b3(r)&&(v={},ue(r,function(x){return v[x]=1}),r=v),r=Vx(c,r)),g=c.length;g--;)if(~o.indexOf(c[g])){u=l[g],r==="all"?(h[g]=r,p=u,d={}):(d=h[g]=h[g]||{},p=r);for(v in p)m=u&&u[v],m&&((!("kill"in m.d)||m.d.kill(v)===!0)&&a5(this,m,"_pt"),delete u[v]),d!=="all"&&(d[v]=1)}return this._initted&&!this._pt&&f&&Yi(this),this},e.to=function(a,r){return new e(a,r,arguments[2])},e.from=function(a,r){return Ki(1,arguments)},e.delayedCall=function(a,r,s,c){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:a,onComplete:r,onReverseComplete:r,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:c})},e.fromTo=function(a,r,s){return Ki(2,arguments)},e.set=function(a,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(a,r)},e.killTweensOf=function(a,r,s){return Q2.killTweensOf(a,r,s)},e})(nn);qe(d3.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ue("staggerTo,staggerFrom,staggerFromTo",function(n){d3[n]=function(){var e=new J3,t=Z8.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Mc=function(e,t,i){return e[t]=i},nf=function(e,t,i){return e[t](i)},Wx=function(e,t,i,a){return e[t](a.fp,i)},qx=function(e,t,i){return e.setAttribute(t,i)},c5=function(e,t){return s3(e[t])?nf:i5(e[t])&&e.setAttribute?qx:Mc},af=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Xx=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},_c=function(e,t){var i=t._pt,a="";if(!e&&t.b)a=t.b;else if(e===1&&t.e)a=t.e;else{for(;i;)a=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+a,i=i._next;a+=t.c}t.set(t.t,t.p,a,t)},xc=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},Yx=function(e,t,i,a){for(var r=this._pt,s;r;)s=r._next,r.p===a&&r.modifier(e,t,i),r=s},$x=function(e){for(var t=this._pt,i,a;t;)a=t._next,t.p===e&&!t.op||t.op===e?a5(this,t,"_pt"):t.dep||(i=1),t=a;return!i},jx=function(e,t,i,a){a.mSet(e,t,a.m.call(a.tween,i,a.mt),a)},zc=function(e){for(var t=e._pt,i,a,r,s;t;){for(i=t._next,a=r;a&&a.pr>t.pr;)a=a._next;(t._prev=a?a._prev:s)?t._prev._next=t:r=t,(t._next=a)?a._prev=t:s=t,t=i}e._pt=r},he=(function(){function n(t,i,a,r,s,c,o,l,f){this.t=i,this.s=r,this.c=s,this.p=a,this.r=c||af,this.d=o||this,this.set=l||Mc,this.pr=f||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,a,r){this.mSet=this.mSet||this.set,this.set=jx,this.m=i,this.mt=r,this.tween=a},n})();ue(lc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return oc[n]=1});We.TweenMax=We.TweenLite=d3;We.TimelineLite=We.TimelineMax=J3;Q2=new J3({sortChildren:!1,defaults:Zi,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Le.stringFilter=dc;var Tt=[],Kr={},Kx=[],w9=0,Jx=0,q8=function(e){return(Kr[e]||Kx).map(function(t){return t()})},ic=function(){var e=Date.now(),t=[];e-w9>2&&(q8("matchMediaInit"),Tt.forEach(function(i){var a=i.queries,r=i.conditions,s,c,o,l;for(c in a)s=H4.matchMedia(a[c]).matches,s&&(o=1),s!==r[c]&&(r[c]=s,l=1);l&&(i.revert(),o&&t.push(i))}),q8("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(a){return i.add(null,a)})}),w9=e,q8("matchMedia"))},rf=(function(){function n(t,i){this.selector=i&&Q8(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Jx++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,a,r){s3(i)&&(r=a,a=i,i=s3);var s=this,c=function(){var l=$2,f=s.selector,h;return l&&l!==s&&l.data.push(s),r&&(s.selector=Q8(r)),$2=s,h=a.apply(s,arguments),s3(h)&&s._r.push(h),$2=l,s.selector=f,s.isReverted=!1,h};return s.last=c,i===s3?c(s,function(o){return s.add(null,o)}):i?s[i]=c:c},e.ignore=function(i){var a=$2;$2=null,i(this),$2=a},e.getTweens=function(){var i=[];return this.data.forEach(function(a){return a instanceof n?i.push.apply(i,a.getTweens()):a instanceof d3&&!(a.parent&&a.parent.data==="nested")&&i.push(a)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,a){var r=this;if(i?(function(){for(var c=r.getTweens(),o=r.data.length,l;o--;)l=r.data[o],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(f){return c.splice(c.indexOf(f),1)}));for(c.map(function(f){return{g:f._dur||f._delay||f._sat&&!f._sat.vars.immediateRender?f.globalTime(0):-1/0,t:f}}).sort(function(f,h){return h.g-f.g||-1/0}).forEach(function(f){return f.t.revert(i)}),o=r.data.length;o--;)l=r.data[o],l instanceof J3?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof d3)&&l.revert&&l.revert(i);r._r.forEach(function(f){return f(i,r)}),r.isReverted=!0})():this.data.forEach(function(c){return c.kill&&c.kill()}),this.clear(),a)for(var s=Tt.length;s--;)Tt[s].id===this.id&&Tt.splice(s,1)},e.revert=function(i){this.kill(i||{})},n})(),Zx=(function(){function n(t){this.contexts=[],this.scope=t,$2&&$2.data.push(this)}var e=n.prototype;return e.add=function(i,a,r){G4(i)||(i={matches:i});var s=new rf(0,r||this.scope),c=s.conditions={},o,l,f;$2&&!s.selector&&(s.selector=$2.selector),this.contexts.push(s),a=s.add("onMatch",a),s.queries=i;for(l in i)l==="all"?f=1:(o=H4.matchMedia(i[l]),o&&(Tt.indexOf(s)<0&&Tt.push(s),(c[l]=o.matches)&&(f=1),o.addListener?o.addListener(ic):o.addEventListener("change",ic)));return f&&a(s,function(h){return s.add(null,h)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(a){return a.kill(i,!0)})},n})(),t5={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(a){return K9(a)})},timeline:function(e){return new J3(e)},getTweensOf:function(e,t){return Q2.getTweensOf(e,t)},getProperty:function(e,t,i,a){b3(e)&&(e=r4(e)[0]);var r=Y0(e||{}).get,s=i?F9:D9;return i==="native"&&(i=""),e&&(t?s((be[t]&&be[t].get||r)(e,t,i,a)):function(c,o,l){return s((be[c]&&be[c].get||r)(e,c,o,l))})},quickSetter:function(e,t,i){if(e=r4(e),e.length>1){var a=e.map(function(f){return Q3.quickSetter(f,t,i)}),r=a.length;return function(f){for(var h=r;h--;)a[h](f)}}e=e[0]||{};var s=be[t],c=Y0(e),o=c.harness&&(c.harness.aliases||{})[t]||t,l=s?function(f){var h=new s;T6._pt=0,h.init(e,i?f+i:f,T6,0,[e]),h.render(1,h),T6._pt&&xc(1,T6)}:c.set(e,o);return s?l:function(f){return l(e,o,i?f+i:f,c,1)}},quickTo:function(e,t,i){var a,r=Q3.to(e,qe((a={},a[t]="+=0.1",a.paused=!0,a.stagger=0,a),i||{})),s=function(o,l,f){return r.resetTo(t,o,l,f)};return s.tween=r,s},isTweening:function(e){return Q2.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=wt(e.ease,Zi.ease)),y9(Zi,e||{})},config:function(e){return y9(Le,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,a=e.plugins,r=e.defaults,s=e.extendTimeline;(a||"").split(",").forEach(function(c){return c&&!be[c]&&!We[c]&&Qi(t+" effect requires "+c+" plugin.")}),H8[t]=function(c,o,l){return i(r4(c),qe(o||{},r),l)},s&&(J3.prototype[t]=function(c,o,l){return this.add(H8[t](c,G4(o)?o:(l=o)&&{},this),l)})},registerEase:function(e,t){y2[e]=wt(t)},parseEase:function(e,t){return arguments.length?wt(e,t):y2},getById:function(e){return Q2.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new J3(e),a,r;for(i.smoothChildTiming=Ce(e.smoothChildTiming),Q2.remove(i),i._dp=0,i._time=i._tTime=Q2._time,a=Q2._first;a;)r=a._next,(t||!(!a._dur&&a instanceof d3&&a.vars.onComplete===a._targets[0]))&&V4(i,a,a._start-a._delay),a=r;return V4(Q2,i,0),i},context:function(e,t){return e?new rf(e,t):$2},matchMedia:function(e){return new Zx(e)},matchMediaRefresh:function(){return Tt.forEach(function(e){var t=e.conditions,i,a;for(a in t)t[a]&&(t[a]=!1,i=1);i&&e.revert()})||ic()},addEventListener:function(e,t){var i=Kr[e]||(Kr[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Kr[e],a=i&&i.indexOf(t);a>=0&&i.splice(a,1)},utils:{wrap:Ex,wrapYoyo:Ax,distribute:W9,random:X9,snap:q9,normalize:Tx,getUnit:H3,clamp:Sx,splitColor:J9,toArray:r4,selector:Q8,mapRange:$9,pipe:Lx,unitize:wx,interpolate:Nx,shuffle:G9},install:P9,effects:H8,ticker:Se,updateRoot:J3.updateRoot,plugins:be,globalTimeline:Q2,core:{PropTween:he,globals:R9,Tween:d3,Timeline:J3,Animation:nn,getCache:Y0,_removeLinkedListItem:a5,reverting:function(){return B3},context:function(e){return e&&$2&&($2.data.push(e),e._ctx=$2),$2},suppressOverwrites:function(e){return nc=e}}};ue("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return t5[n]=d3[n]});Se.add(J3.updateRoot);T6=t5.to({},{duration:0});var Qx=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},ez=function(e,t){var i=e._targets,a,r,s;for(a in t)for(r=i.length;r--;)s=e._ptLookup[r][a],s&&(s=s.d)&&(s._pt&&(s=Qx(s,a)),s&&s.modifier&&s.modifier(t[a],e,i[r],a))},X8=function(e,t){return{name:e,headless:1,rawVars:1,init:function(a,r,s){s._onInit=function(c){var o,l;if(b3(r)&&(o={},ue(r,function(f){return o[f]=1}),r=o),t){o={};for(l in r)o[l]=t(r[l]);r=o}ez(c,r)}}}},Q3=t5.registerPlugin({name:"attr",init:function(e,t,i,a,r){var s,c,o;this.tween=i;for(s in t)o=e.getAttribute(s)||"",c=this.add(e,"setAttribute",(o||0)+"",t[s],a,r,0,0,s),c.op=s,c.b=o,this._props.push(s)},render:function(e,t){for(var i=t._pt;i;)B3?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},X8("roundProps",ec),X8("modifiers"),X8("snap",q9))||t5;d3.version=J3.version=Q3.version="3.15.0";N9=1;ac()&&P6();var tz=y2.Power0,iz=y2.Power1,nz=y2.Power2,az=y2.Power3,rz=y2.Power4,sz=y2.Linear,cz=y2.Quad,oz=y2.Cubic,lz=y2.Quart,fz=y2.Quint,uz=y2.Strong,hz=y2.Elastic,dz=y2.Back,pz=y2.SteppedEase,mz=y2.Bounce,gz=y2.Sine,vz=y2.Expo,Mz=y2.Circ;var sf,K0,k6,wc,kt,_z,cf,Tc,xz=function(){return typeof window<"u"},h0={},It=180/Math.PI,D6=Math.PI/180,I6=Math.atan2,of=1e8,Ec=/([A-Z])/g,zz=/(left|right|width|margin|padding|x)/i,yz=/[\s,\(]\S/,W4={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},bc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},bz=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Sz=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Cz=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Lz=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},gf=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},vf=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},wz=function(e,t,i){return e.style[t]=i},Tz=function(e,t,i){return e.style.setProperty(t,i)},Ez=function(e,t,i){return e._gsap[t]=i},Az=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},Nz=function(e,t,i,a,r){var s=e._gsap;s.scaleX=s.scaleY=i,s.renderTransform(r,s)},Pz=function(e,t,i,a,r){var s=e._gsap;s[t]=i,s.renderTransform(r,s)},e3="transform",we=e3+"Origin",Rz=function n(e,t){var i=this,a=this.target,r=a.style,s=a._gsap;if(e in h0&&r){if(this.tfm=this.tfm||{},e!=="transform")e=W4[e]||e,~e.indexOf(",")?e.split(",").forEach(function(c){return i.tfm[c]=u0(a,c)}):this.tfm[e]=s.x?s[e]:u0(a,e),e===we&&(this.tfm.zOrigin=s.zOrigin);else return W4.transform.split(",").forEach(function(c){return n.call(i,c,t)});if(this.props.indexOf(e3)>=0)return;s.svg&&(this.svgo=a.getAttribute("data-svg-origin"),this.props.push(we,t,"")),e=e3}(r||t)&&this.props.push(e,t,r[e])},Mf=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Iz=function(){var e=this.props,t=this.target,i=t.style,a=t._gsap,r,s;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?i[e[r]]=e[r+2]:i.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Ec,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)a[s]=this.tfm[s];a.svg&&(a.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Tc(),(!r||!r.isStart)&&!i[e3]&&(Mf(i),a.zOrigin&&i[we]&&(i[we]+=" "+a.zOrigin+"px",a.zOrigin=0,a.renderTransform()),a.uncache=1)}},_f=function(e,t){var i={target:e,props:[],revert:Iz,save:Rz};return e._gsap||Q3.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(a){return i.save(a)}),i},xf,Sc=function(e,t){var i=K0.createElementNS?K0.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):K0.createElement(e);return i&&i.style?i:K0.createElement(e)},Xe=function n(e,t,i){var a=getComputedStyle(e);return a[t]||a.getPropertyValue(t.replace(Ec,"-$1").toLowerCase())||a.getPropertyValue(t)||!i&&n(e,F6(t)||t,1)||""},lf="O,Moz,ms,Ms,Webkit".split(","),F6=function(e,t,i){var a=t||kt,r=a.style,s=5;if(e in r&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(lf[s]+e in r););return s<0?null:(s===3?"ms":s>=0?lf[s]:"")+e},Cc=function(){xz()&&window.document&&(sf=window,K0=sf.document,k6=K0.documentElement,kt=Sc("div")||{style:{}},_z=Sc("div"),e3=F6(e3),we=e3+"Origin",kt.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",xf=!!F6("perspective"),Tc=Q3.core.reverting,wc=1)},ff=function(e){var t=e.ownerSVGElement,i=Sc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),a=e.cloneNode(!0),r;a.style.display="block",i.appendChild(a),k6.appendChild(i);try{r=a.getBBox()}catch(s){}return i.removeChild(a),k6.removeChild(i),r},uf=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},zf=function(e){var t,i;try{t=e.getBBox()}catch(a){t=ff(e),i=1}return t&&(t.width||t.height)||i||(t=ff(e)),t&&!t.width&&!t.x&&!t.y?{x:+uf(e,["x","cx","x1"])||0,y:+uf(e,["y","cy","y1"])||0,width:0,height:0}:t},yf=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&zf(e))},Z0=function(e,t){if(t){var i=e.style,a;t in h0&&t!==we&&(t=e3),i.removeProperty?(a=t.substr(0,2),(a==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(a==="--"?t:t.replace(Ec,"-$1").toLowerCase())):i.removeAttribute(t)}},J0=function(e,t,i,a,r,s){var c=new he(e._pt,t,i,0,1,s?vf:gf);return e._pt=c,c.b=a,c.e=r,e._props.push(i),c},hf={deg:1,rad:1,turn:1},kz={grid:1,flex:1},Q0=function n(e,t,i,a){var r=parseFloat(i)||0,s=(i+"").trim().substr((r+"").length)||"px",c=kt.style,o=zz.test(t),l=e.tagName.toLowerCase()==="svg",f=(l?"client":"offset")+(o?"Width":"Height"),h=100,u=a==="px",d=a==="%",p,v,m,g;if(a===s||!r||hf[a]||hf[s])return r;if(s!=="px"&&!u&&(r=n(e,t,i,"px")),g=e.getCTM&&yf(e),(d||s==="%")&&(h0[t]||~t.indexOf("adius")))return p=g?e.getBBox()[o?"width":"height"]:e[f],c3(d?r/p*h:r/100*p);if(c[o?"width":"height"]=h+(u?s:a),v=a!=="rem"&&~t.indexOf("adius")||a==="em"&&e.appendChild&&!l?e:e.parentNode,g&&(v=(e.ownerSVGElement||{}).parentNode),(!v||v===K0||!v.appendChild)&&(v=K0.body),m=v._gsap,m&&d&&m.width&&o&&m.time===Se.time&&!m.uncache)return c3(r/m.width*h);if(d&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=h+a,p=e[f],x?e.style[t]=x:Z0(e,t)}else(d||s==="%")&&!kz[Xe(v,"display")]&&(c.position=Xe(e,"position")),v===e&&(c.position="static"),v.appendChild(kt),p=kt[f],v.removeChild(kt),c.position="absolute";return o&&d&&(m=Y0(v),m.time=Se.time,m.width=v[f]),c3(u?p*r/h:p&&r?h/p*r:0)},u0=function(e,t,i,a){var r;return wc||Cc(),t in W4&&t!=="transform"&&(t=W4[t],~t.indexOf(",")&&(t=t.split(",")[0])),h0[t]&&t!=="transform"?(r=cn(e,a),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:l5(Xe(e,we))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||a||~(r+"").indexOf("calc("))&&(r=o5[t]&&o5[t](e,t,i)||Xe(e,t)||uc(e,t)||(t==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?Q0(e,t,r,i)+i:r},Dz=function(e,t,i,a){if(!i||i==="none"){var r=F6(t,e,1),s=r&&Xe(e,r,1);s&&s!==i?(t=r,i=s):t==="borderColor"&&(i=Xe(e,"borderTopColor"))}var c=new he(this._pt,e.style,t,0,1,_c),o=0,l=0,f,h,u,d,p,v,m,g,x,y,M,b;if(c.b=i,c.e=a,i+="",a+="",a.substring(0,6)==="var(--"&&(a=Xe(e,a.substring(4,a.indexOf(")")))),a==="auto"&&(v=e.style[t],e.style[t]=a,a=Xe(e,t)||a,v?e.style[t]=v:Z0(e,t)),f=[i,a],dc(f),i=f[0],a=f[1],u=i.match(Et)||[],b=a.match(Et)||[],b.length){for(;h=Et.exec(a);)m=h[0],x=a.substring(o,h.index),p?p=(p+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(p=1),m!==(v=u[l++]||"")&&(d=parseFloat(v)||0,M=v.substr((d+"").length),m.charAt(1)==="="&&(m=At(d,m)+M),g=parseFloat(m),y=m.substr((g+"").length),o=Et.lastIndex-y.length,y||(y=y||Le.units[t]||M,o===a.length&&(a+=y,c.e+=y)),M!==y&&(d=Q0(e,t,v,y)||0),c._pt={_next:c._pt,p:x||l===1?x:",",s:d,c:g-d,m:p&&p<4||t==="zIndex"?Math.round:0});c.c=o<a.length?a.substring(o,a.length):""}else c.r=t==="display"&&a==="none"?vf:gf;return sc.test(a)&&(c.e=0),this._pt=c,c},df={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Fz=function(e){var t=e.split(" "),i=t[0],a=t[1]||"50%";return(i==="top"||i==="bottom"||a==="left"||a==="right")&&(e=i,i=a,a=e),t[0]=df[i]||i,t[1]=df[a]||a,t.join(" ")},Oz=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,a=i.style,r=t.u,s=i._gsap,c,o,l;if(r==="all"||r===!0)a.cssText="",o=1;else for(r=r.split(","),l=r.length;--l>-1;)c=r[l],h0[c]&&(o=1,c=c==="transformOrigin"?we:e3),Z0(i,c);o&&(Z0(i,e3),s&&(s.svg&&i.removeAttribute("transform"),a.scale=a.rotate=a.translate="none",cn(i,1),s.uncache=1,Mf(a)))}},o5={clearProps:function(e,t,i,a,r){if(r.data!=="isFromStart"){var s=e._pt=new he(e._pt,t,i,0,0,Oz);return s.u=a,s.pr=-10,s.tween=r,e._props.push(i),1}}},sn=[1,0,0,1,0,0],bf={},Sf=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},pf=function(e){var t=Xe(e,e3);return Sf(t)?sn:t.substr(7).match(rc).map(c3)},Ac=function(e,t){var i=e._gsap||Y0(e),a=e.style,r=pf(e),s,c,o,l;return i.svg&&e.getAttribute("transform")?(o=e.transform.baseVal.consolidate().matrix,r=[o.a,o.b,o.c,o.d,o.e,o.f],r.join(",")==="1,0,0,1,0,0"?sn:r):(r===sn&&!e.offsetParent&&e!==k6&&!i.svg&&(o=a.display,a.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,c=e.nextElementSibling,k6.appendChild(e)),r=pf(e),o?a.display=o:Z0(e,"display"),l&&(c?s.insertBefore(e,c):s?s.appendChild(e):k6.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Lc=function(e,t,i,a,r,s){var c=e._gsap,o=r||Ac(e,!0),l=c.xOrigin||0,f=c.yOrigin||0,h=c.xOffset||0,u=c.yOffset||0,d=o[0],p=o[1],v=o[2],m=o[3],g=o[4],x=o[5],y=t.split(" "),M=parseFloat(y[0])||0,b=parseFloat(y[1])||0,L,S,_,C;i?o!==sn&&(S=d*m-p*v)&&(_=M*(m/S)+b*(-v/S)+(v*x-m*g)/S,C=M*(-p/S)+b*(d/S)-(d*x-p*g)/S,M=_,b=C):(L=zf(e),M=L.x+(~y[0].indexOf("%")?M/100*L.width:M),b=L.y+(~(y[1]||y[0]).indexOf("%")?b/100*L.height:b)),a||a!==!1&&c.smooth?(g=M-l,x=b-f,c.xOffset=h+(g*d+x*v)-g,c.yOffset=u+(g*p+x*m)-x):c.xOffset=c.yOffset=0,c.xOrigin=M,c.yOrigin=b,c.smooth=!!a,c.origin=t,c.originIsAbsolute=!!i,e.style[we]="0px 0px",s&&(J0(s,c,"xOrigin",l,M),J0(s,c,"yOrigin",f,b),J0(s,c,"xOffset",h,c.xOffset),J0(s,c,"yOffset",u,c.yOffset)),e.setAttribute("data-svg-origin",M+" "+b)},cn=function(e,t){var i=e._gsap||new pc(e);if("x"in i&&!t&&!i.uncache)return i;var a=e.style,r=i.scaleX<0,s="px",c="deg",o=getComputedStyle(e),l=Xe(e,we)||"0",f,h,u,d,p,v,m,g,x,y,M,b,L,S,_,C,T,P,R,q,j,D,I,N,O,Y,A,l1,d1,$1,A1,j1;return f=h=u=v=m=g=x=y=M=0,d=p=1,i.svg=!!(e.getCTM&&yf(e)),o.translate&&((o.translate!=="none"||o.scale!=="none"||o.rotate!=="none")&&(a[e3]=(o.translate!=="none"?"translate3d("+(o.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(o.rotate!=="none"?"rotate("+o.rotate+") ":"")+(o.scale!=="none"?"scale("+o.scale.split(" ").join(",")+") ":"")+(o[e3]!=="none"?o[e3]:"")),a.scale=a.rotate=a.translate="none"),S=Ac(e,i.svg),i.svg&&(i.uncache?(O=e.getBBox(),l=i.xOrigin-O.x+"px "+(i.yOrigin-O.y)+"px",N=""):N=!t&&e.getAttribute("data-svg-origin"),Lc(e,N||l,!!N||i.originIsAbsolute,i.smooth!==!1,S)),b=i.xOrigin||0,L=i.yOrigin||0,S!==sn&&(P=S[0],R=S[1],q=S[2],j=S[3],f=D=S[4],h=I=S[5],S.length===6?(d=Math.sqrt(P*P+R*R),p=Math.sqrt(j*j+q*q),v=P||R?I6(R,P)*It:0,x=q||j?I6(q,j)*It+v:0,x&&(p*=Math.abs(Math.cos(x*D6))),i.svg&&(f-=b-(b*P+L*q),h-=L-(b*R+L*j))):(j1=S[6],$1=S[7],A=S[8],l1=S[9],d1=S[10],A1=S[11],f=S[12],h=S[13],u=S[14],_=I6(j1,d1),m=_*It,_&&(C=Math.cos(-_),T=Math.sin(-_),N=D*C+A*T,O=I*C+l1*T,Y=j1*C+d1*T,A=D*-T+A*C,l1=I*-T+l1*C,d1=j1*-T+d1*C,A1=$1*-T+A1*C,D=N,I=O,j1=Y),_=I6(-q,d1),g=_*It,_&&(C=Math.cos(-_),T=Math.sin(-_),N=P*C-A*T,O=R*C-l1*T,Y=q*C-d1*T,A1=j*T+A1*C,P=N,R=O,q=Y),_=I6(R,P),v=_*It,_&&(C=Math.cos(_),T=Math.sin(_),N=P*C+R*T,O=D*C+I*T,R=R*C-P*T,I=I*C-D*T,P=N,D=O),m&&Math.abs(m)+Math.abs(v)>359.9&&(m=v=0,g=180-g),d=c3(Math.sqrt(P*P+R*R+q*q)),p=c3(Math.sqrt(I*I+j1*j1)),_=I6(D,I),x=Math.abs(_)>2e-4?_*It:0,M=A1?1/(A1<0?-A1:A1):0),i.svg&&(N=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Sf(Xe(e,e3)),N&&e.setAttribute("transform",N))),Math.abs(x)>90&&Math.abs(x)<270&&(r?(d*=-1,x+=v<=0?180:-180,v+=v<=0?180:-180):(p*=-1,x+=x<=0?180:-180)),t=t||i.uncache,i.x=f-((i.xPercent=f&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-f)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+s,i.y=h-((i.yPercent=h&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+s,i.z=u+s,i.scaleX=c3(d),i.scaleY=c3(p),i.rotation=c3(v)+c,i.rotationX=c3(m)+c,i.rotationY=c3(g)+c,i.skewX=x+c,i.skewY=y+c,i.transformPerspective=M+s,(i.zOrigin=parseFloat(l.split(" ")[2])||!t&&i.zOrigin||0)&&(a[we]=l5(l)),i.xOffset=i.yOffset=0,i.force3D=Le.force3D,i.renderTransform=i.svg?Bz:xf?Cf:Uz,i.uncache=0,i},l5=function(e){return(e=e.split(" "))[0]+" "+e[1]},yc=function(e,t,i){var a=H3(t);return c3(parseFloat(t)+parseFloat(Q0(e,"x",i+"px",a)))+a},Uz=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Cf(e,t)},Pt="0deg",rn="0px",Rt=") ",Cf=function(e,t){var i=t||this,a=i.xPercent,r=i.yPercent,s=i.x,c=i.y,o=i.z,l=i.rotation,f=i.rotationY,h=i.rotationX,u=i.skewX,d=i.skewY,p=i.scaleX,v=i.scaleY,m=i.transformPerspective,g=i.force3D,x=i.target,y=i.zOrigin,M="",b=g==="auto"&&e&&e!==1||g===!0;if(y&&(h!==Pt||f!==Pt)){var L=parseFloat(f)*D6,S=Math.sin(L),_=Math.cos(L),C;L=parseFloat(h)*D6,C=Math.cos(L),s=yc(x,s,S*C*-y),c=yc(x,c,-Math.sin(L)*-y),o=yc(x,o,_*C*-y+y)}m!==rn&&(M+="perspective("+m+Rt),(a||r)&&(M+="translate("+a+"%, "+r+"%) "),(b||s!==rn||c!==rn||o!==rn)&&(M+=o!==rn||b?"translate3d("+s+", "+c+", "+o+") ":"translate("+s+", "+c+Rt),l!==Pt&&(M+="rotate("+l+Rt),f!==Pt&&(M+="rotateY("+f+Rt),h!==Pt&&(M+="rotateX("+h+Rt),(u!==Pt||d!==Pt)&&(M+="skew("+u+", "+d+Rt),(p!==1||v!==1)&&(M+="scale("+p+", "+v+Rt),x.style[e3]=M||"translate(0, 0)"},Bz=function(e,t){var i=t||this,a=i.xPercent,r=i.yPercent,s=i.x,c=i.y,o=i.rotation,l=i.skewX,f=i.skewY,h=i.scaleX,u=i.scaleY,d=i.target,p=i.xOrigin,v=i.yOrigin,m=i.xOffset,g=i.yOffset,x=i.forceCSS,y=parseFloat(s),M=parseFloat(c),b,L,S,_,C;o=parseFloat(o),l=parseFloat(l),f=parseFloat(f),f&&(f=parseFloat(f),l+=f,o+=f),o||l?(o*=D6,l*=D6,b=Math.cos(o)*h,L=Math.sin(o)*h,S=Math.sin(o-l)*-u,_=Math.cos(o-l)*u,l&&(f*=D6,C=Math.tan(l-f),C=Math.sqrt(1+C*C),S*=C,_*=C,f&&(C=Math.tan(f),C=Math.sqrt(1+C*C),b*=C,L*=C)),b=c3(b),L=c3(L),S=c3(S),_=c3(_)):(b=h,_=u,L=S=0),(y&&!~(s+"").indexOf("px")||M&&!~(c+"").indexOf("px"))&&(y=Q0(d,"x",s,"px"),M=Q0(d,"y",c,"px")),(p||v||m||g)&&(y=c3(y+p-(p*b+v*S)+m),M=c3(M+v-(p*L+v*_)+g)),(a||r)&&(C=d.getBBox(),y=c3(y+a/100*C.width),M=c3(M+r/100*C.height)),C="matrix("+b+","+L+","+S+","+_+","+y+","+M+")",d.setAttribute("transform",C),x&&(d.style[e3]=C)},Hz=function(e,t,i,a,r){var s=360,c=b3(r),o=parseFloat(r)*(c&&~r.indexOf("rad")?It:1),l=o-a,f=a+l+"deg",h,u;return c&&(h=r.split("_")[1],h==="short"&&(l%=s,l!==l%(s/2)&&(l+=l<0?s:-s)),h==="cw"&&l<0?l=(l+s*of)%s-~~(l/s)*s:h==="ccw"&&l>0&&(l=(l-s*of)%s-~~(l/s)*s)),e._pt=u=new he(e._pt,t,i,a,l,bz),u.e=f,u.u="deg",e._props.push(i),u},mf=function(e,t){for(var i in t)e[i]=t[i];return e},Vz=function(e,t,i){var a=mf({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",s=i.style,c,o,l,f,h,u,d,p;a.svg?(l=i.getAttribute("transform"),i.setAttribute("transform",""),s[e3]=t,c=cn(i,1),Z0(i,e3),i.setAttribute("transform",l)):(l=getComputedStyle(i)[e3],s[e3]=t,c=cn(i,1),s[e3]=l);for(o in h0)l=a[o],f=c[o],l!==f&&r.indexOf(o)<0&&(d=H3(l),p=H3(f),h=d!==p?Q0(i,o,l,p):parseFloat(l),u=parseFloat(f),e._pt=new he(e._pt,c,o,h,u-h,bc),e._pt.u=p||0,e._props.push(o));mf(c,a)};ue("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",a="Bottom",r="Left",s=(e<3?[t,i,a,r]:[t+r,t+i,a+i,a+r]).map(function(c){return e<2?n+c:"border"+c+n});o5[e>1?"border"+n:n]=function(c,o,l,f,h){var u,d;if(arguments.length<4)return u=s.map(function(p){return u0(c,p,l)}),d=u.join(" "),d.split(u[0]).length===5?u[0]:d;u=(f+"").split(" "),d={},s.forEach(function(p,v){return d[p]=u[v]=u[v]||u[(v-1)/2|0]}),c.init(o,d,h)}});var Nc={name:"css",register:Cc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,a,r){var s=this._props,c=e.style,o=i.vars.startAt,l,f,h,u,d,p,v,m,g,x,y,M,b,L,S,_,C;wc||Cc(),this.styles=this.styles||_f(e),_=this.styles.props,this.tween=i;for(v in t)if(v!=="autoRound"&&(f=t[v],!(be[v]&&gc(v,t,i,a,e,r)))){if(d=typeof f,p=o5[v],d==="function"&&(f=f.call(i,a,e,r),d=typeof f),d==="string"&&~f.indexOf("random(")&&(f=R6(f)),p)p(this,e,v,f,i)&&(S=1);else if(v.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(v)+"").trim(),f+="",l0.lastIndex=0,l0.test(l)||(m=H3(l),g=H3(f),g?m!==g&&(l=Q0(e,v,l,g)+g):m&&(f+=m)),this.add(c,"setProperty",l,f,a,r,0,0,v),s.push(v),_.push(v,0,c[v]);else if(d!=="undefined"){if(o&&v in o?(l=typeof o[v]=="function"?o[v].call(i,a,e,r):o[v],b3(l)&&~l.indexOf("random(")&&(l=R6(l)),H3(l+"")||l==="auto"||(l+=Le.units[v]||H3(u0(e,v))||""),(l+"").charAt(1)==="="&&(l=u0(e,v))):l=u0(e,v),u=parseFloat(l),x=d==="string"&&f.charAt(1)==="="&&f.substr(0,2),x&&(f=f.substr(2)),h=parseFloat(f),v in W4&&(v==="autoAlpha"&&(u===1&&u0(e,"visibility")==="hidden"&&h&&(u=0),_.push("visibility",0,c.visibility),J0(this,c,"visibility",u?"inherit":"hidden",h?"inherit":"hidden",!h)),v!=="scale"&&v!=="transform"&&(v=W4[v],~v.indexOf(",")&&(v=v.split(",")[0]))),y=v in h0,y){if(this.styles.save(v),C=f,d==="string"&&f.substring(0,6)==="var(--"){if(f=Xe(e,f.substring(4,f.indexOf(")"))),f.substring(0,5)==="calc("){var T=e.style.perspective;e.style.perspective=f,f=Xe(e,"perspective"),T?e.style.perspective=T:Z0(e,"perspective")}h=parseFloat(f)}if(M||(b=e._gsap,b.renderTransform&&!t.parseTransform||cn(e,t.parseTransform),L=t.smoothOrigin!==!1&&b.smooth,M=this._pt=new he(this._pt,c,e3,0,1,b.renderTransform,b,0,-1),M.dep=1),v==="scale")this._pt=new he(this._pt,b,"scaleY",b.scaleY,(x?At(b.scaleY,x+h):h)-b.scaleY||0,bc),this._pt.u=0,s.push("scaleY",v),v+="X";else if(v==="transformOrigin"){_.push(we,0,c[we]),f=Fz(f),b.svg?Lc(e,f,0,L,0,this):(g=parseFloat(f.split(" ")[2])||0,g!==b.zOrigin&&J0(this,b,"zOrigin",b.zOrigin,g),J0(this,c,v,l5(l),l5(f)));continue}else if(v==="svgOrigin"){Lc(e,f,1,L,0,this);continue}else if(v in bf){Hz(this,b,v,u,x?At(u,x+f):f);continue}else if(v==="smoothOrigin"){J0(this,b,"smooth",b.smooth,f);continue}else if(v==="force3D"){b[v]=f;continue}else if(v==="transform"){Vz(this,f,e);continue}}else v in c||(v=F6(v)||v);if(y||(h||h===0)&&(u||u===0)&&!yz.test(f)&&v in c)m=(l+"").substr((u+"").length),h||(h=0),g=H3(f)||(v in Le.units?Le.units[v]:m),m!==g&&(u=Q0(e,v,l,g)),this._pt=new he(this._pt,y?b:c,v,u,(x?At(u,x+h):h)-u,!y&&(g==="px"||v==="zIndex")&&t.autoRound!==!1?Lz:bc),this._pt.u=g||0,y&&C!==f?(this._pt.b=l,this._pt.e=C,this._pt.r=Cz):m!==g&&g!=="%"&&(this._pt.b=l,this._pt.r=Sz);else if(v in c)Dz.call(this,e,v,l,x?x+f:f);else if(v in e)this.add(e,v,l||e[v],x?x+f:f,a,r);else if(v!=="parseTransform"){n5(v,f);continue}y||(v in c?_.push(v,0,c[v]):typeof e[v]=="function"?_.push(v,2,e[v]()):_.push(v,1,l||e[v])),s.push(v)}}S&&zc(this)},render:function(e,t){if(t.tween._time||!Tc())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:u0,aliases:W4,getSetter:function(e,t,i){var a=W4[t];return a&&a.indexOf(",")<0&&(t=a),t in h0&&t!==we&&(e._gsap.x||u0(e,"x"))?i&&cf===i?t==="scale"?Az:Ez:(cf=i||{})&&(t==="scale"?Nz:Pz):e.style&&!i5(e.style[t])?wz:~t.indexOf("-")?Tz:c5(e,t)},core:{_removeProperty:Z0,_getMatrix:Ac}};Q3.utils.checkPrefix=F6;Q3.core.getStyleSaver=_f;(function(n,e,t,i){var a=ue(n+","+e+","+t,function(r){h0[r]=1});ue(e,function(r){Le.units[r]="deg",bf[r]=1}),W4[a[13]]=n+","+e,ue(i,function(r){var s=r.split(":");W4[s[1]]=a[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ue("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Le.units[n]="px"});Q3.registerPlugin(Nc);var p3=Q3.registerPlugin(Nc)||Q3,xP=p3.core.Tween;function Lf(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function Gz(n,e,t){return e&&Lf(n.prototype,e),t&&Lf(n,t),n}var V3,h5,Wz,Ye,et,tt,U6,Tf,Dt,B6,Ef,d0,_4,Af,Nf=function(){return V3||typeof window<"u"&&(V3=window.gsap)&&V3.registerPlugin&&V3},Pf=1,O6=[],f2=[],x4=[],ln=Date.now,Pc=function(e,t){return t},qz=function(){var e=B6.core,t=e.bridge||{},i=e._scrollers,a=e._proxies;i.push.apply(i,f2),a.push.apply(a,x4),f2=i,x4=a,Pc=function(s,c){return t[s](c)}},m0=function(e,t){return~x4.indexOf(e)&&x4[x4.indexOf(e)+1][t]},fn=function(e){return!!~Ef.indexOf(e)},pe=function(e,t,i,a,r){return e.addEventListener(t,i,{passive:a!==!1,capture:!!r})},de=function(e,t,i,a){return e.removeEventListener(t,i,!!a)},f5="scrollLeft",u5="scrollTop",Rc=function(){return d0&&d0.isPressed||f2.cache++},d5=function(e,t){var i=function a(r){if(r||r===0){Pf&&(Ye.history.scrollRestoration="manual");var s=d0&&d0.isPressed;r=a.v=Math.round(r)||(d0&&d0.iOS?1:0),e(r),a.cacheID=f2.cache,s&&Pc("ss",r)}else(t||f2.cache!==a.cacheID||Pc("ref"))&&(a.cacheID=f2.cache,a.v=e());return a.v+a.offset};return i.offset=0,e&&i},ee={s:f5,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:d5(function(n){return arguments.length?Ye.scrollTo(n,M3.sc()):Ye.pageXOffset||et[f5]||tt[f5]||U6[f5]||0})},M3={s:u5,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:ee,sc:d5(function(n){return arguments.length?Ye.scrollTo(ee.sc(),n):Ye.pageYOffset||et[u5]||tt[u5]||U6[u5]||0})},me=function(e,t){return(t&&t._ctx&&t._ctx.selector||V3.utils.toArray)(e)[0]||(typeof e=="string"&&V3.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Xz=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},p0=function(e,t){var i=t.s,a=t.sc;fn(e)&&(e=et.scrollingElement||tt);var r=f2.indexOf(e),s=a===M3.sc?1:2;!~r&&(r=f2.push(e)-1),f2[r+s]||pe(e,"scroll",Rc);var c=f2[r+s],o=c||(f2[r+s]=d5(m0(e,i),!0)||(fn(e)?a:d5(function(l){return arguments.length?e[i]=l:e[i]})));return o.target=e,c||(o.smooth=V3.getProperty(e,"scrollBehavior")==="smooth"),o},p5=function(e,t,i){var a=e,r=e,s=ln(),c=s,o=t||50,l=Math.max(500,o*3),f=function(p,v){var m=ln();v||m-s>o?(r=a,a=p,c=s,s=m):i?a+=p:a=r+(p-r)/(m-c)*(s-c)},h=function(){r=a=i?0:a,c=s=0},u=function(p){var v=c,m=r,g=ln();return(p||p===0)&&p!==a&&f(p),s===c||g-c>l?0:(a+(i?m:-m))/((i?g:s)-v)*1e3};return{update:f,reset:h,getVelocity:u}},on=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},wf=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},Rf=function(){B6=V3.core.globals().ScrollTrigger,B6&&B6.core&&qz()},If=function(e){return V3=e||Nf(),!h5&&V3&&typeof document<"u"&&document.body&&(Ye=window,et=document,tt=et.documentElement,U6=et.body,Ef=[Ye,et,tt,U6],Wz=V3.utils.clamp,Af=V3.core.context||function(){},Dt="onpointerenter"in U6?"pointer":"mouse",Tf=o3.isTouch=Ye.matchMedia&&Ye.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ye||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,_4=o3.eventTypes=("ontouchstart"in tt?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in tt?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Pf=0},500),h5=1),B6||Rf(),h5};ee.op=M3;f2.cache=0;var o3=(function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){h5||If(V3)||console.warn("Please gsap.registerPlugin(Observer)"),B6||Rf();var a=i.tolerance,r=i.dragMinimum,s=i.type,c=i.target,o=i.lineHeight,l=i.debounce,f=i.preventDefault,h=i.onStop,u=i.onStopDelay,d=i.ignore,p=i.wheelSpeed,v=i.event,m=i.onDragStart,g=i.onDragEnd,x=i.onDrag,y=i.onPress,M=i.onRelease,b=i.onRight,L=i.onLeft,S=i.onUp,_=i.onDown,C=i.onChangeX,T=i.onChangeY,P=i.onChange,R=i.onToggleX,q=i.onToggleY,j=i.onHover,D=i.onHoverEnd,I=i.onMove,N=i.ignoreCheck,O=i.isNormalizer,Y=i.onGestureStart,A=i.onGestureEnd,l1=i.onWheel,d1=i.onEnable,$1=i.onDisable,A1=i.onClick,j1=i.scrollSpeed,Q=i.capture,r1=i.allowClicks,s1=i.lockAxis,S1=i.onLockAxis;this.target=c=me(c)||tt,this.vars=i,d&&(d=V3.utils.toArray(d)),a=a||1e-9,r=r||0,p=p||1,j1=j1||1,s=s||"wheel,touch,pointer",l=l!==!1,o||(o=parseFloat(Ye.getComputedStyle(U6).lineHeight)||22);var H1,T1,v2,E1,J1,i2,t2,$=this,C2=0,R2=0,B2=i.passive||!f&&i.passive!==!1,n2=p0(c,ee),E2=p0(c,M3),F=n2(),t3=E2(),e2=~s.indexOf("touch")&&!~s.indexOf("pointer")&&_4[0]==="pointerdown",E=fn(c),z=c.ownerDocument||et,B=[0,0,0],G=[0,0,0],Z=0,m1=function(){return Z=ln()},h1=function(o1,q1){return($.event=o1)&&d&&Xz(o1.target,d)||q1&&e2&&o1.pointerType!=="touch"||N&&N(o1,q1)},e1=function(){$._vx.reset(),$._vy.reset(),T1.pause(),h&&h($)},i1=function(){var o1=$.deltaX=wf(B),q1=$.deltaY=wf(G),u1=Math.abs(o1)>=a,X1=Math.abs(q1)>=a;P&&(u1||X1)&&P($,o1,q1,B,G),u1&&(b&&$.deltaX>0&&b($),L&&$.deltaX<0&&L($),C&&C($),R&&$.deltaX<0!=C2<0&&R($),C2=$.deltaX,B[0]=B[1]=B[2]=0),X1&&(_&&$.deltaY>0&&_($),S&&$.deltaY<0&&S($),T&&T($),q&&$.deltaY<0!=R2<0&&q($),R2=$.deltaY,G[0]=G[1]=G[2]=0),(E1||v2)&&(I&&I($),v2&&(m&&v2===1&&m($),x&&x($),v2=0),E1=!1),i2&&!(i2=!1)&&S1&&S1($),J1&&(l1($),J1=!1),H1=0},_1=function(o1,q1,u1){B[u1]+=o1,G[u1]+=q1,$._vx.update(o1),$._vy.update(q1),l?H1||(H1=requestAnimationFrame(i1)):i1()},I1=function(o1,q1){s1&&!t2&&($.axis=t2=Math.abs(o1)>Math.abs(q1)?"x":"y",i2=!0),t2!=="y"&&(B[2]+=o1,$._vx.update(o1,!0)),t2!=="x"&&(G[2]+=q1,$._vy.update(q1,!0)),l?H1||(H1=requestAnimationFrame(i1)):i1()},x1=function(o1){if(!h1(o1,1)){o1=on(o1,f);var q1=o1.clientX,u1=o1.clientY,X1=q1-$.x,k1=u1-$.y,a2=$.isDragging;$.x=q1,$.y=u1,(a2||(X1||k1)&&(Math.abs($.startX-q1)>=r||Math.abs($.startY-u1)>=r))&&(v2||(v2=a2?2:1),a2||($.isDragging=!0),I1(X1,k1))}},M1=$.onPress=function(f1){h1(f1,1)||f1&&f1.button||($.axis=t2=null,T1.pause(),$.isPressed=!0,f1=on(f1),C2=R2=0,$.startX=$.x=f1.clientX,$.startY=$.y=f1.clientY,$._vx.reset(),$._vy.reset(),pe(O?c:z,_4[1],x1,B2,!0),$.deltaX=$.deltaY=0,y&&y($))},p1=$.onRelease=function(f1){if(!h1(f1,1)){de(O?c:z,_4[1],x1,!0);var o1=!isNaN($.y-$.startY),q1=$.isDragging,u1=q1&&(Math.abs($.x-$.startX)>3||Math.abs($.y-$.startY)>3),X1=on(f1);!u1&&o1&&($._vx.reset(),$._vy.reset(),f&&r1&&V3.delayedCall(.08,function(){if(ln()-Z>300&&!f1.defaultPrevented){if(f1.target.click)f1.target.click();else if(z.createEvent){var k1=z.createEvent("MouseEvents");k1.initMouseEvent("click",!0,!0,Ye,1,X1.screenX,X1.screenY,X1.clientX,X1.clientY,!1,!1,!1,!1,0,null),f1.target.dispatchEvent(k1)}}})),$.isDragging=$.isGesturing=$.isPressed=!1,h&&q1&&!O&&T1.restart(!0),v2&&i1(),g&&q1&&g($),M&&M($,u1)}},U1=function(o1){return o1.touches&&o1.touches.length>1&&($.isGesturing=!0)&&Y(o1,$.isDragging)},W1=function(){return($.isGesturing=!1)||A($)},k=function(o1){if(!h1(o1)){var q1=n2(),u1=E2();_1((q1-F)*j1,(u1-t3)*j1,1),F=q1,t3=u1,h&&T1.restart(!0)}},g1=function(o1){if(!h1(o1)){o1=on(o1,f),l1&&(J1=!0);var q1=(o1.deltaMode===1?o:o1.deltaMode===2?Ye.innerHeight:1)*p;_1(o1.deltaX*q1,o1.deltaY*q1,0),h&&!O&&T1.restart(!0)}},n1=function(o1){if(!h1(o1)){var q1=o1.clientX,u1=o1.clientY,X1=q1-$.x,k1=u1-$.y;$.x=q1,$.y=u1,E1=!0,h&&T1.restart(!0),(X1||k1)&&I1(X1,k1)}},z1=function(o1){$.event=o1,j($)},y1=function(o1){$.event=o1,D($)},c1=function(o1){return h1(o1)||on(o1,f)&&A1($)};T1=$._dc=V3.delayedCall(u||.25,e1).pause(),$.deltaX=$.deltaY=0,$._vx=p5(0,50,!0),$._vy=p5(0,50,!0),$.scrollX=n2,$.scrollY=E2,$.isDragging=$.isGesturing=$.isPressed=!1,Af(this),$.enable=function(f1){return $.isEnabled||(pe(E?z:c,"scroll",Rc),s.indexOf("scroll")>=0&&pe(E?z:c,"scroll",k,B2,Q),s.indexOf("wheel")>=0&&pe(c,"wheel",g1,B2,Q),(s.indexOf("touch")>=0&&Tf||s.indexOf("pointer")>=0)&&(pe(c,_4[0],M1,B2,Q),pe(z,_4[2],p1),pe(z,_4[3],p1),r1&&pe(c,"click",m1,!0,!0),A1&&pe(c,"click",c1),Y&&pe(z,"gesturestart",U1),A&&pe(z,"gestureend",W1),j&&pe(c,Dt+"enter",z1),D&&pe(c,Dt+"leave",y1),I&&pe(c,Dt+"move",n1)),$.isEnabled=!0,$.isDragging=$.isGesturing=$.isPressed=E1=v2=!1,$._vx.reset(),$._vy.reset(),F=n2(),t3=E2(),f1&&f1.type&&M1(f1),d1&&d1($)),$},$.disable=function(){$.isEnabled&&(O6.filter(function(f1){return f1!==$&&fn(f1.target)}).length||de(E?z:c,"scroll",Rc),$.isPressed&&($._vx.reset(),$._vy.reset(),de(O?c:z,_4[1],x1,!0)),de(E?z:c,"scroll",k,Q),de(c,"wheel",g1,Q),de(c,_4[0],M1,Q),de(z,_4[2],p1),de(z,_4[3],p1),de(c,"click",m1,!0),de(c,"click",c1),de(z,"gesturestart",U1),de(z,"gestureend",W1),de(c,Dt+"enter",z1),de(c,Dt+"leave",y1),de(c,Dt+"move",n1),$.isEnabled=$.isPressed=$.isDragging=!1,$1&&$1($))},$.kill=$.revert=function(){$.disable();var f1=O6.indexOf($);f1>=0&&O6.splice(f1,1),d0===$&&(d0=0)},O6.push($),O&&fn(c)&&(d0=$),$.enable(v)},Gz(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n})();o3.version="3.15.0";o3.create=function(n){return new o3(n)};o3.register=If;o3.getAll=function(){return O6.slice()};o3.getById=function(n){return O6.filter(function(e){return e.vars.id===n})[0]};Nf()&&V3.registerPlugin(o3);var R1,W6,g2,P2,Ke,N2,Yc,A5,Sn,vn,hn,m5,te,R5,Bc,ve,kf,Df,q6,Zf,Ic,Qf,ge,Hc,eu,tu,it,Vc,$c,X6,jc,Mn,Gc,kc,g5=1,ie=Date.now,Dc=ie(),o4=0,dn=0,Ff=function(e,t,i){var a=je(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=a,a?e.substr(6,e.length-7):e},Of=function(e,t){return t&&(!je(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Yz=function n(){return dn&&requestAnimationFrame(n)},Uf=function(){return R5=1},Bf=function(){return R5=0},q4=function(e){return e},pn=function(e){return Math.round(e*1e5)/1e5||0},iu=function(){return typeof window<"u"},nu=function(){return R1||iu()&&(R1=window.gsap)&&R1.registerPlugin&&R1},Vt=function(e){return!!~Yc.indexOf(e)},au=function(e){return(e==="Height"?jc:g2["inner"+e])||Ke["client"+e]||N2["client"+e]},ru=function(e){return m0(e,"getBoundingClientRect")||(Vt(e)?function(){return E5.width=g2.innerWidth,E5.height=jc,E5}:function(){return g0(e)})},$z=function(e,t,i){var a=i.d,r=i.d2,s=i.a;return(s=m0(e,"getBoundingClientRect"))?function(){return s()[a]}:function(){return(t?au(r):e["client"+r])||0}},jz=function(e,t){return!t||~x4.indexOf(e)?ru(e):function(){return E5}},X4=function(e,t){var i=t.s,a=t.d2,r=t.d,s=t.a;return Math.max(0,(i="scroll"+a)&&(s=m0(e,i))?s()-ru(e)()[r]:Vt(e)?(Ke[i]||N2[i])-au(a):e[i]-e["offset"+a])},v5=function(e,t){for(var i=0;i<q6.length;i+=3)(!t||~t.indexOf(q6[i+1]))&&e(q6[i],q6[i+1],q6[i+2])},je=function(e){return typeof e=="string"},ne=function(e){return typeof e=="function"},mn=function(e){return typeof e=="number"},Ft=function(e){return typeof e=="object"},un=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},H6=function(e,t,i){if(e.enabled){var a=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);a&&a.totalTime&&(e.callbackAnimation=a)}},V6=Math.abs,su="left",cu="top",Kc="right",Jc="bottom",Ut="width",Bt="height",_n="Right",xn="Left",zn="Top",yn="Bottom",_3="padding",s4="margin",$6="Width",Zc="Height",S3="px",c4=function(e){return g2.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},Kz=function(e){var t=c4(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Hf=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},g0=function(e,t){var i=t&&c4(e)[Bc]!=="matrix(1, 0, 0, 1, 0, 0)"&&R1.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),a=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),a},N5=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},ou=function(e){var t=[],i=e.labels,a=e.duration(),r;for(r in i)t.push(i[r]/a);return t},Jz=function(e){return function(t){return R1.utils.snap(ou(e),t)}},Qc=function(e){var t=R1.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(a,r){return a-r});return i?function(a,r,s){s===void 0&&(s=.001);var c;if(!r)return t(a);if(r>0){for(a-=s,c=0;c<i.length;c++)if(i[c]>=a)return i[c];return i[c-1]}else for(c=i.length,a+=s;c--;)if(i[c]<=a)return i[c];return i[0]}:function(a,r,s){s===void 0&&(s=.001);var c=t(a);return!r||Math.abs(c-a)<s||c-a<0==r<0?c:t(r<0?a-e:a+e)}},Zz=function(e){return function(t,i){return Qc(ou(e))(t,i.direction)}},M5=function(e,t,i,a){return i.split(",").forEach(function(r){return e(t,r,a)})},P3=function(e,t,i,a,r){return e.addEventListener(t,i,{passive:!a,capture:!!r})},N3=function(e,t,i,a){return e.removeEventListener(t,i,!!a)},_5=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},Vf={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},x5={toggleActions:"play",anticipatePin:0},P5={top:0,left:0,center:.5,bottom:1,right:1},C5=function(e,t){if(je(e)){var i=e.indexOf("="),a=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(a*=t/100),e=e.substr(0,i-1)),e=a+(e in P5?P5[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},z5=function(e,t,i,a,r,s,c,o){var l=r.startColor,f=r.endColor,h=r.fontSize,u=r.indent,d=r.fontWeight,p=P2.createElement("div"),v=Vt(i)||m0(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,g=v?N2:i.tagName==="IFRAME"?i.contentDocument.body:i,x=e.indexOf("start")!==-1,y=x?l:f,M="border-color:"+y+";font-size:"+h+";color:"+y+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((m||o)&&v?"fixed;":"absolute;"),(m||o||!v)&&(M+=(a===M3?Kc:Jc)+":"+(s+parseFloat(u))+"px;"),c&&(M+="box-sizing:border-box;text-align:left;width:"+c.offsetWidth+"px;"),p._isStart=x,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=M,p.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p["offset"+a.op.d2],L5(p,0,a,x),p},L5=function(e,t,i,a){var r={display:"block"},s=i[a?"os2":"p2"],c=i[a?"p2":"os2"];e._isFlipped=a,r[i.a+"Percent"]=a?-100:0,r[i.a]=a?"1px":0,r["border"+s+$6]=1,r["border"+c+$6]=0,r[i.p]=t+"px",R1.set(e,r)},u2=[],Wc={},Cn,Gf=function(){return ie()-o4>34&&(Cn||(Cn=requestAnimationFrame(v0)))},G6=function(){(!ge||!ge.isPressed||ge.startX>N2.clientWidth)&&(f2.cache++,ge?Cn||(Cn=requestAnimationFrame(v0)):v0(),o4||Wt("scrollStart"),o4=ie())},Fc=function(){tu=g2.innerWidth,eu=g2.innerHeight},gn=function(e){f2.cache++,(e===!0||!te&&!Qf&&!P2.fullscreenElement&&!P2.webkitFullscreenElement&&(!Hc||tu!==g2.innerWidth||Math.abs(g2.innerHeight-eu)>g2.innerHeight*.25))&&A5.restart(!0)},Gt={},Qz=[],lu=function n(){return N3(s2,"scrollEnd",n)||Ot(!0)},Wt=function(e){return Gt[e]&&Gt[e].map(function(t){return t()})||Qz},$e=[],fu=function(e){for(var t=0;t<$e.length;t+=5)(!e||$e[t+4]&&$e[t+4].query===e)&&($e[t].style.cssText=$e[t+1],$e[t].getBBox&&$e[t].setAttribute("transform",$e[t+2]||""),$e[t+3].uncache=1)},uu=function(){return f2.forEach(function(e){return ne(e)&&++e.cacheID&&(e.rec=e())})},e7=function(e,t){var i;for(ve=0;ve<u2.length;ve++)i=u2[ve],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));Mn=!0,t&&fu(t),t||Wt("revert")},hu=function(e,t){f2.cache++,(t||!Me)&&f2.forEach(function(i){return ne(i)&&i.cacheID++&&(i.rec=0)}),je(e)&&(g2.history.scrollRestoration=$c=e)},Me,Ht=0,Wf,ey=function(){if(Wf!==Ht){var e=Wf=Ht;requestAnimationFrame(function(){return e===Ht&&Ot(!0)})}},du=function(){N2.appendChild(X6),jc=!ge&&X6.offsetHeight||g2.innerHeight,N2.removeChild(X6)},qf=function(e){return Sn(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Ot=function(e,t){if(Ke=P2.documentElement,N2=P2.body,Yc=[g2,P2,Ke,N2],o4&&!e&&!Mn){P3(s2,"scrollEnd",lu);return}du(),Me=s2.isRefreshing=!0,Mn||uu();var i=Wt("refreshInit");Zf&&s2.sort(),t||e7(),f2.forEach(function(a){ne(a)&&(a.smooth&&(a.target.style.scrollBehavior="auto"),a(0))}),u2.slice(0).forEach(function(a){return a.refresh()}),Mn=!1,u2.forEach(function(a){if(a._subPinOffset&&a.pin){var r=a.vars.horizontal?"offsetWidth":"offsetHeight",s=a.pin[r];a.revert(!0,1),a.adjustPinSpacing(a.pin[r]-s),a.refresh()}}),Gc=1,qf(!0),u2.forEach(function(a){var r=X4(a.scroller,a._dir),s=a.vars.end==="max"||a._endClamp&&a.end>r,c=a._startClamp&&a.start>=r;(s||c)&&a.setPositions(c?r-1:a.start,s?Math.max(c?r:a.start+1,r):a.end,!0)}),qf(!1),Gc=0,i.forEach(function(a){return a&&a.render&&a.render(-1)}),f2.forEach(function(a){ne(a)&&(a.smooth&&requestAnimationFrame(function(){return a.target.style.scrollBehavior="smooth"}),a.rec&&a(a.rec))}),hu($c,1),A5.pause(),Ht++,Me=2,v0(2),u2.forEach(function(a){return ne(a.vars.onRefresh)&&a.vars.onRefresh(a)}),Me=s2.isRefreshing=!1,Wt("refresh")},qc=0,w5=1,bn,v0=function(e){if(e===2||!Me&&!Mn){s2.isUpdating=!0,bn&&bn.update(0);var t=u2.length,i=ie(),a=i-Dc>=50,r=t&&u2[0].scroll();if(w5=qc>r?-1:1,Me||(qc=r),a&&(o4&&!R5&&i-o4>200&&(o4=0,Wt("scrollEnd")),hn=Dc,Dc=i),w5<0){for(ve=t;ve-- >0;)u2[ve]&&u2[ve].update(0,a);w5=1}else for(ve=0;ve<t;ve++)u2[ve]&&u2[ve].update(0,a);s2.isUpdating=!1}Cn=0},Xc=[su,cu,Jc,Kc,s4+yn,s4+_n,s4+zn,s4+xn,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],T5=Xc.concat([Ut,Bt,"boxSizing","max"+$6,"max"+Zc,"position",s4,_3,_3+zn,_3+_n,_3+yn,_3+xn]),ty=function(e,t,i){Y6(i);var a=e._gsap;if(a.spacerIsNative)Y6(a.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},Oc=function(e,t,i,a){if(!e._gsap.swappedIn){for(var r=Xc.length,s=t.style,c=e.style,o;r--;)o=Xc[r],s[o]=i[o];s.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(s.display="inline-block"),c[Jc]=c[Kc]="auto",s.flexBasis=i.flexBasis||"auto",s.overflow="visible",s.boxSizing="border-box",s[Ut]=N5(e,ee)+S3,s[Bt]=N5(e,M3)+S3,s[_3]=c[s4]=c[cu]=c[su]="0",Y6(a),c[Ut]=c["max"+$6]=i[Ut],c[Bt]=c["max"+Zc]=i[Bt],c[_3]=i[_3],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},iy=/([A-Z])/g,Y6=function(e){if(e){var t=e.t.style,i=e.length,a=0,r,s;for((e.t._gsap||R1.core.getCache(e.t)).uncache=1;a<i;a+=2)s=e[a+1],r=e[a],s?t[r]=s:t[r]&&t.removeProperty(r.replace(iy,"-$1").toLowerCase())}},y5=function(e){for(var t=T5.length,i=e.style,a=[],r=0;r<t;r++)a.push(T5[r],i[T5[r]]);return a.t=e,a},ny=function(e,t,i){for(var a=[],r=e.length,s=i?8:0,c;s<r;s+=2)c=e[s],a.push(c,c in t?t[c]:e[s+1]);return a.t=e.t,a},E5={left:0,top:0},Xf=function(e,t,i,a,r,s,c,o,l,f,h,u,d,p){ne(e)&&(e=e(o)),je(e)&&e.substr(0,3)==="max"&&(e=u+(e.charAt(4)==="="?C5("0"+e.substr(3),i):0));var v=d?d.time():0,m,g,x;if(d&&d.seek(0),isNaN(e)||(e=+e),mn(e))d&&(e=R1.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,u,e)),c&&L5(c,i,a,!0);else{ne(t)&&(t=t(o));var y=(e||"0").split(" "),M,b,L,S;x=me(t,o)||N2,M=g0(x)||{},(!M||!M.left&&!M.top)&&c4(x).display==="none"&&(S=x.style.display,x.style.display="block",M=g0(x),S?x.style.display=S:x.style.removeProperty("display")),b=C5(y[0],M[a.d]),L=C5(y[1]||"0",i),e=M[a.p]-l[a.p]-f+b+r-L,c&&L5(c,L,a,i-L<20||c._isStart&&L>20),i-=i-L}if(p&&(o[p]=e||-.001,e<0&&(e=0)),s){var _=e+i,C=s._isStart;m="scroll"+a.d2,L5(s,_,a,C&&_>20||!C&&(h?Math.max(N2[m],Ke[m]):s.parentNode[m])<=_+1),h&&(l=g0(c),h&&(s.style[a.op.p]=l[a.op.p]-a.op.m-s._offset+S3))}return d&&x&&(m=g0(x),d.seek(u),g=g0(x),d._caScrollDist=m[a.p]-g[a.p],e=e/d._caScrollDist*u),d&&d.seek(v),d?e:Math.round(e)},ay=/(webkit|moz|length|cssText|inset)/i,Yf=function(e,t,i,a){if(e.parentNode!==t){var r=e.style,s,c;if(t===N2){e._stOrig=r.cssText,c=c4(e);for(s in c)!+s&&!ay.test(s)&&c[s]&&typeof r[s]=="string"&&s!=="0"&&(r[s]=c[s]);r.top=i,r.left=a}else r.cssText=e._stOrig;R1.core.getCache(e).uncache=1,t.appendChild(e)}},pu=function(e,t,i){var a=t,r=a;return function(s){var c=Math.round(e());return c!==a&&c!==r&&Math.abs(c-a)>3&&Math.abs(c-r)>3&&(s=c,i&&i()),r=a,a=Math.round(s),a}},b5=function(e,t,i){var a={};a[t.p]="+="+i,R1.set(e,a)},$f=function(e,t){var i=p0(e,t),a="_scroll"+t.p2,r=function s(c,o,l,f,h){var u=s.tween,d=o.onComplete,p={};l=l||i();var v=pu(i,l,function(){u.kill(),s.tween=0});return h=f&&h||0,f=f||c-l,u&&u.kill(),o[a]=c,o.inherit=!1,o.modifiers=p,p[a]=function(){return v(l+f*u.ratio+h*u.ratio*u.ratio)},o.onUpdate=function(){f2.cache++,s.tween&&v0()},o.onComplete=function(){s.tween=0,d&&d.call(u)},u=s.tween=R1.to(e,o),u};return e[a]=i,i.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},P3(e,"wheel",i.wheelHandler),s2.isTouch&&P3(e,"touchmove",i.wheelHandler),r},s2=(function(){function n(t,i){W6||n.register(R1)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Vc(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,a){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!dn){this.update=this.refresh=this.kill=q4;return}i=Hf(je(i)||mn(i)||i.nodeType?{trigger:i}:i,x5);var r=i,s=r.onUpdate,c=r.toggleClass,o=r.id,l=r.onToggle,f=r.onRefresh,h=r.scrub,u=r.trigger,d=r.pin,p=r.pinSpacing,v=r.invalidateOnRefresh,m=r.anticipatePin,g=r.onScrubComplete,x=r.onSnapComplete,y=r.once,M=r.snap,b=r.pinReparent,L=r.pinSpacer,S=r.containerAnimation,_=r.fastScrollEnd,C=r.preventOverlaps,T=i.horizontal||i.containerAnimation&&i.horizontal!==!1?ee:M3,P=!h&&h!==0,R=me(i.scroller||g2),q=R1.core.getCache(R),j=Vt(R),D=("pinType"in i?i.pinType:m0(R,"pinType")||j&&"fixed")==="fixed",I=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],N=P&&i.toggleActions.split(" "),O="markers"in i?i.markers:x5.markers,Y=j?0:parseFloat(c4(R)["border"+T.p2+$6])||0,A=this,l1=i.onRefreshInit&&function(){return i.onRefreshInit(A)},d1=$z(R,j,T),$1=jz(R,j),A1=0,j1=0,Q=0,r1=p0(R,T),s1,S1,H1,T1,v2,E1,J1,i2,t2,$,C2,R2,B2,n2,E2,F,t3,e2,E,z,B,G,Z,m1,h1,e1,i1,_1,I1,x1,M1,p1,U1,W1,k,g1,n1,z1,y1;if(A._startClamp=A._endClamp=!1,A._dir=T,m*=45,A.scroller=R,A.scroll=S?S.time.bind(S):r1,T1=r1(),A.vars=i,a=a||i.animation,"refreshPriority"in i&&(Zf=1,i.refreshPriority===-9999&&(bn=A)),q.tweenScroll=q.tweenScroll||{top:$f(R,M3),left:$f(R,ee)},A.tweenTo=s1=q.tweenScroll[T.p],A.scrubDuration=function(u1){U1=mn(u1)&&u1,U1?p1?p1.duration(u1):p1=R1.to(a,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:U1,paused:!0,onComplete:function(){return g&&g(A)}}):(p1&&p1.progress(1).kill(),p1=0)},a&&(a.vars.lazy=!1,a._initted&&!A.isReverted||a.vars.immediateRender!==!1&&i.immediateRender!==!1&&a.duration()&&a.render(0,!0,!0),A.animation=a.pause(),a.scrollTrigger=A,A.scrubDuration(h),x1=0,o||(o=a.vars.id)),M&&((!Ft(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in N2.style&&R1.set(j?[N2,Ke]:R,{scrollBehavior:"auto"}),f2.forEach(function(u1){return ne(u1)&&u1.target===(j?P2.scrollingElement||Ke:R)&&(u1.smooth=!1)}),H1=ne(M.snapTo)?M.snapTo:M.snapTo==="labels"?Jz(a):M.snapTo==="labelsDirectional"?Zz(a):M.directional!==!1?function(u1,X1){return Qc(M.snapTo)(u1,ie()-j1<500?0:X1.direction)}:R1.utils.snap(M.snapTo),W1=M.duration||{min:.1,max:2},W1=Ft(W1)?vn(W1.min,W1.max):vn(W1,W1),k=R1.delayedCall(M.delay||U1/2||.1,function(){var u1=r1(),X1=ie()-j1<500,k1=s1.tween;if((X1||Math.abs(A.getVelocity())<10)&&!k1&&!R5&&A1!==u1){var a2=(u1-E1)/n2,m3=a&&!P?a.totalProgress():a2,d2=X1?0:(m3-M1)/(ie()-hn)*1e3||0,G2=R1.utils.clamp(-a2,1-a2,V6(d2/2)*d2/.185),C3=a2+(M.inertia===!1?0:G2),W2,k2,_2=M,ae=_2.onStart,H2=_2.onInterrupt,W3=_2.onComplete;if(W2=H1(C3,A),mn(W2)||(W2=C3),k2=Math.max(0,Math.round(E1+W2*n2)),u1<=J1&&u1>=E1&&k2!==u1){if(k1&&!k1._initted&&k1.data<=V6(k2-u1))return;M.inertia===!1&&(G2=W2-a2),s1(k2,{duration:W1(V6(Math.max(V6(C3-m3),V6(W2-m3))*.185/d2/.05||0)),ease:M.ease||"power3",data:V6(k2-u1),onInterrupt:function(){return k.restart(!0)&&H2&&H6(A,H2)},onComplete:function(){A.update(),A1=r1(),a&&!P&&(p1?p1.resetTo("totalProgress",W2,a._tTime/a._tDur):a.progress(W2)),x1=M1=a&&!P?a.totalProgress():A.progress,x&&x(A),W3&&H6(A,W3)}},u1,G2*n2,k2-u1-G2*n2),ae&&H6(A,ae,s1.tween)}}else A.isActive&&A1!==u1&&k.restart(!0)}).pause()),o&&(Wc[o]=A),u=A.trigger=me(u||d!==!0&&d),y1=u&&u._gsap&&u._gsap.stRevert,y1&&(y1=y1(A)),d=d===!0?u:me(d),je(c)&&(c={targets:u,className:c}),d&&(p===!1||p===s4||(p=!p&&d.parentNode&&d.parentNode.style&&c4(d.parentNode).display==="flex"?!1:_3),A.pin=d,S1=R1.core.getCache(d),S1.spacer?E2=S1.pinState:(L&&(L=me(L),L&&!L.nodeType&&(L=L.current||L.nativeElement),S1.spacerIsNative=!!L,L&&(S1.spacerState=y5(L))),S1.spacer=e2=L||P2.createElement("div"),e2.classList.add("pin-spacer"),o&&e2.classList.add("pin-spacer-"+o),S1.pinState=E2=y5(d)),i.force3D!==!1&&R1.set(d,{force3D:!0}),A.spacer=e2=S1.spacer,I1=c4(d),m1=I1[p+T.os2],z=R1.getProperty(d),B=R1.quickSetter(d,T.a,S3),Oc(d,e2,I1),t3=y5(d)),O){R2=Ft(O)?Hf(O,Vf):Vf,$=z5("scroller-start",o,R,T,R2,0),C2=z5("scroller-end",o,R,T,R2,0,$),E=$["offset"+T.op.d2];var c1=me(m0(R,"content")||R);i2=this.markerStart=z5("start",o,c1,T,R2,E,0,S),t2=this.markerEnd=z5("end",o,c1,T,R2,E,0,S),S&&(z1=R1.quickSetter([i2,t2],T.a,S3)),!D&&!(x4.length&&m0(R,"fixedMarkers")===!0)&&(Kz(j?N2:R),R1.set([$,C2],{force3D:!0}),e1=R1.quickSetter($,T.a,S3),_1=R1.quickSetter(C2,T.a,S3))}if(S){var f1=S.vars.onUpdate,o1=S.vars.onUpdateParams;S.eventCallback("onUpdate",function(){A.update(0,0,1),f1&&f1.apply(S,o1||[])})}if(A.previous=function(){return u2[u2.indexOf(A)-1]},A.next=function(){return u2[u2.indexOf(A)+1]},A.revert=function(u1,X1){if(!X1)return A.kill(!0);var k1=u1!==!1||!A.enabled,a2=te;k1!==A.isReverted&&(k1&&(g1=Math.max(r1(),A.scroll.rec||0),Q=A.progress,n1=a&&a.progress()),i2&&[i2,t2,$,C2].forEach(function(m3){return m3.style.display=k1?"none":"block"}),k1&&(te=A,A.update(k1)),d&&(!b||!A.isActive)&&(k1?ty(d,e2,E2):Oc(d,e2,c4(d),h1)),k1||A.update(k1),te=a2,A.isReverted=k1)},A.refresh=function(u1,X1,k1,a2){if(!((te||!A.enabled)&&!X1)){if(d&&u1&&o4){P3(n,"scrollEnd",lu);return}!Me&&l1&&l1(A),te=A,s1.tween&&!k1&&(s1.tween.kill(),s1.tween=0),p1&&p1.pause(),v&&a&&(a.revert({kill:!1}).invalidate(),a.getChildren?a.getChildren(!0,!0,!1).forEach(function(C1){return C1.vars.immediateRender&&C1.render(0,!0,!0)}):a.vars.immediateRender&&a.render(0,!0,!0)),A.isReverted||A.revert(!0,!0),A._subPinOffset=!1;var m3=d1(),d2=$1(),G2=S?S.duration():X4(R,T),C3=n2<=.01||!n2,W2=0,k2=a2||0,_2=Ft(k1)?k1.end:i.end,ae=i.endTrigger||u,H2=Ft(k1)?k1.start:i.start||(i.start===0||!u?0:d?"0 0":"0 100%"),W3=A.pinnedContainer=i.pinnedContainer&&me(i.pinnedContainer,A),re=u&&Math.max(0,u2.indexOf(A))||0,g3=re,i3,x3,L4,Zt,L3,l3,Ze,w,U,K,H,W,b1;for(O&&Ft(k1)&&(W=R1.getProperty($,T.p),b1=R1.getProperty(C2,T.p));g3-- >0;)l3=u2[g3],l3.end||l3.refresh(0,1)||(te=A),Ze=l3.pin,Ze&&(Ze===u||Ze===d||Ze===W3)&&!l3.isReverted&&(K||(K=[]),K.unshift(l3),l3.revert(!0,!0)),l3!==u2[g3]&&(re--,g3--);for(ne(H2)&&(H2=H2(A)),H2=Ff(H2,"start",A),E1=Xf(H2,u,m3,T,r1(),i2,$,A,d2,Y,D,G2,S,A._startClamp&&"_startClamp")||(d?-.001:0),ne(_2)&&(_2=_2(A)),je(_2)&&!_2.indexOf("+=")&&(~_2.indexOf(" ")?_2=(je(H2)?H2.split(" ")[0]:"")+_2:(W2=C5(_2.substr(2),m3),_2=je(H2)?H2:(S?R1.utils.mapRange(0,S.duration(),S.scrollTrigger.start,S.scrollTrigger.end,E1):E1)+W2,ae=u)),_2=Ff(_2,"end",A),J1=Math.max(E1,Xf(_2||(ae?"100% 0":G2),ae,m3,T,r1()+W2,t2,C2,A,d2,Y,D,G2,S,A._endClamp&&"_endClamp"))||-.001,W2=0,g3=re;g3--;)l3=u2[g3]||{},Ze=l3.pin,Ze&&l3.start-l3._pinPush<=E1&&!S&&l3.end>0&&(i3=l3.end-(A._startClamp?Math.max(0,l3.start):l3.start),(Ze===u&&l3.start-l3._pinPush<E1||Ze===W3)&&isNaN(H2)&&(W2+=i3*(1-l3.progress)),Ze===d&&(k2+=i3));if(E1+=W2,J1+=W2,A._startClamp&&(A._startClamp+=W2),A._endClamp&&!Me&&(A._endClamp=J1||-.001,J1=Math.min(J1,X4(R,T))),n2=J1-E1||(E1-=.01)&&.001,C3&&(Q=R1.utils.clamp(0,1,R1.utils.normalize(E1,J1,g1))),A._pinPush=k2,i2&&W2&&(i3={},i3[T.a]="+="+W2,W3&&(i3[T.p]="-="+r1()),R1.set([i2,t2],i3)),d&&!(Gc&&A.end>=X4(R,T)))i3=c4(d),Zt=T===M3,L4=r1(),G=parseFloat(z(T.a))+k2,!G2&&J1>1&&(H=(j?P2.scrollingElement||Ke:R).style,H={style:H,value:H["overflow"+T.a.toUpperCase()]},j&&c4(N2)["overflow"+T.a.toUpperCase()]!=="scroll"&&(H.style["overflow"+T.a.toUpperCase()]="scroll")),Oc(d,e2,i3),t3=y5(d),x3=g0(d,!0),w=D&&p0(R,Zt?ee:M3)(),p?(h1=[p+T.os2,n2+k2+S3],h1.t=e2,g3=p===_3?N5(d,T)+n2+k2:0,g3&&(h1.push(T.d,g3+S3),e2.style.flexBasis!=="auto"&&(e2.style.flexBasis=g3+S3)),Y6(h1),W3&&u2.forEach(function(C1){C1.pin===W3&&C1.vars.pinSpacing!==!1&&(C1._subPinOffset=!0)}),D&&r1(g1)):(g3=N5(d,T),g3&&e2.style.flexBasis!=="auto"&&(e2.style.flexBasis=g3+S3)),D&&(L3={top:x3.top+(Zt?L4-E1:w)+S3,left:x3.left+(Zt?w:L4-E1)+S3,boxSizing:"border-box",position:"fixed"},L3[Ut]=L3["max"+$6]=Math.ceil(x3.width)+S3,L3[Bt]=L3["max"+Zc]=Math.ceil(x3.height)+S3,L3[s4]=L3[s4+zn]=L3[s4+_n]=L3[s4+yn]=L3[s4+xn]="0",L3[_3]=i3[_3],L3[_3+zn]=i3[_3+zn],L3[_3+_n]=i3[_3+_n],L3[_3+yn]=i3[_3+yn],L3[_3+xn]=i3[_3+xn],F=ny(E2,L3,b),Me&&r1(0)),a?(U=a._initted,Ic(1),a.render(a.duration(),!0,!0),Z=z(T.a)-G+n2+k2,i1=Math.abs(n2-Z)>1,D&&i1&&F.splice(F.length-2,2),a.render(0,!0,!0),U||a.invalidate(!0),a.parent||a.totalTime(a.totalTime()),Ic(0)):Z=n2,H&&(H.value?H.style["overflow"+T.a.toUpperCase()]=H.value:H.style.removeProperty("overflow-"+T.a));else if(u&&r1()&&!S)for(x3=u.parentNode;x3&&x3!==N2;)x3._pinOffset&&(E1-=x3._pinOffset,J1-=x3._pinOffset),x3=x3.parentNode;K&&K.forEach(function(C1){return C1.revert(!1,!0)}),A.start=E1,A.end=J1,T1=v2=Me?g1:r1(),!S&&!Me&&(T1<g1&&r1(g1),A.scroll.rec=0),A.revert(!1,!0),j1=ie(),k&&(A1=-1,k.restart(!0)),te=0,a&&P&&(a._initted||n1)&&a.progress()!==n1&&a.progress(n1||0,!0).render(a.time(),!0,!0),(C3||Q!==A.progress||S||v||a&&!a._initted)&&(a&&!P&&(a._initted||Q||a.vars.immediateRender!==!1)&&a.totalProgress(S&&E1<-.001&&!Q?R1.utils.normalize(E1,J1,0):Q,!0),A.progress=C3||(T1-E1)/n2===Q?0:Q),d&&p&&(e2._pinOffset=Math.round(A.progress*Z)),p1&&p1.invalidate(),isNaN(W)||(W-=R1.getProperty($,T.p),b1-=R1.getProperty(C2,T.p),b5($,T,W),b5(i2,T,W-(a2||0)),b5(C2,T,b1),b5(t2,T,b1-(a2||0))),C3&&!Me&&A.update(),f&&!Me&&!B2&&(B2=!0,f(A),B2=!1)}},A.getVelocity=function(){return(r1()-v2)/(ie()-hn)*1e3||0},A.endAnimation=function(){un(A.callbackAnimation),a&&(p1?p1.progress(1):a.paused()?P||un(a,A.direction<0,1):un(a,a.reversed()))},A.labelToScroll=function(u1){return a&&a.labels&&(E1||A.refresh()||E1)+a.labels[u1]/a.duration()*n2||0},A.getTrailing=function(u1){var X1=u2.indexOf(A),k1=A.direction>0?u2.slice(0,X1).reverse():u2.slice(X1+1);return(je(u1)?k1.filter(function(a2){return a2.vars.preventOverlaps===u1}):k1).filter(function(a2){return A.direction>0?a2.end<=E1:a2.start>=J1})},A.update=function(u1,X1,k1){if(!(S&&!k1&&!u1)){var a2=Me===!0?g1:A.scroll(),m3=u1?0:(a2-E1)/n2,d2=m3<0?0:m3>1?1:m3||0,G2=A.progress,C3,W2,k2,_2,ae,H2,W3,re;if(X1&&(v2=T1,T1=S?r1():a2,M&&(M1=x1,x1=a&&!P?a.totalProgress():d2)),m&&d&&!te&&!g5&&o4&&(!d2&&E1<a2+(a2-v2)/(ie()-hn)*m?d2=1e-4:d2===1&&J1>a2+(a2-v2)/(ie()-hn)*m&&(d2=.9999)),d2!==G2&&A.enabled){if(C3=A.isActive=!!d2&&d2<1,W2=!!G2&&G2<1,H2=C3!==W2,ae=H2||!!d2!=!!G2,A.direction=d2>G2?1:-1,A.progress=d2,ae&&!te&&(k2=d2&&!G2?0:d2===1?1:G2===1?2:3,P&&(_2=!H2&&N[k2+1]!=="none"&&N[k2+1]||N[k2],re=a&&(_2==="complete"||_2==="reset"||_2 in a))),C&&(H2||re)&&(re||h||!a)&&(ne(C)?C(A):A.getTrailing(C).forEach(function(L4){return L4.endAnimation()})),P||(p1&&!te&&!g5?(p1._dp._time-p1._start!==p1._time&&p1.render(p1._dp._time-p1._start),p1.resetTo?p1.resetTo("totalProgress",d2,a._tTime/a._tDur):(p1.vars.totalProgress=d2,p1.invalidate().restart())):a&&a.totalProgress(d2,!!(te&&(j1||u1)))),d){if(u1&&p&&(e2.style[p+T.os2]=m1),!D)B(pn(G+Z*d2));else if(ae){if(W3=!u1&&d2>G2&&J1+1>a2&&a2+1>=X4(R,T),b)if(!u1&&(C3||W3)){var g3=g0(d,!0),i3=a2-E1;Yf(d,N2,g3.top+(T===M3?i3:0)+S3,g3.left+(T===M3?0:i3)+S3)}else Yf(d,e2);Y6(C3||W3?F:t3),i1&&d2<1&&C3||B(G+(d2===1&&!W3?Z:0))}}M&&!s1.tween&&!te&&!g5&&k.restart(!0),c&&(H2||y&&d2&&(d2<1||!kc))&&Sn(c.targets).forEach(function(L4){return L4.classList[C3||y?"add":"remove"](c.className)}),s&&!P&&!u1&&s(A),ae&&!te?(P&&(re&&(_2==="complete"?a.pause().totalProgress(1):_2==="reset"?a.restart(!0).pause():_2==="restart"?a.restart(!0):a[_2]()),s&&s(A)),(H2||!kc)&&(l&&H2&&H6(A,l),I[k2]&&H6(A,I[k2]),y&&(d2===1?A.kill(!1,1):I[k2]=0),H2||(k2=d2===1?1:3,I[k2]&&H6(A,I[k2]))),_&&!C3&&Math.abs(A.getVelocity())>(mn(_)?_:2500)&&(un(A.callbackAnimation),p1?p1.progress(1):un(a,_2==="reverse"?1:!d2,1))):P&&s&&!te&&s(A)}if(_1){var x3=S?a2/S.duration()*(S._caScrollDist||0):a2;e1(x3+($._isFlipped?1:0)),_1(x3)}z1&&z1(-a2/S.duration()*(S._caScrollDist||0))}},A.enable=function(u1,X1){A.enabled||(A.enabled=!0,P3(R,"resize",gn),j||P3(R,"scroll",G6),l1&&P3(n,"refreshInit",l1),u1!==!1&&(A.progress=Q=0,T1=v2=A1=r1()),X1!==!1&&A.refresh())},A.getTween=function(u1){return u1&&s1?s1.tween:p1},A.setPositions=function(u1,X1,k1,a2){if(S){var m3=S.scrollTrigger,d2=S.duration(),G2=m3.end-m3.start;u1=m3.start+G2*u1/d2,X1=m3.start+G2*X1/d2}A.refresh(!1,!1,{start:Of(u1,k1&&!!A._startClamp),end:Of(X1,k1&&!!A._endClamp)},a2),A.update()},A.adjustPinSpacing=function(u1){if(h1&&u1){var X1=h1.indexOf(T.d)+1;h1[X1]=parseFloat(h1[X1])+u1+S3,h1[1]=parseFloat(h1[1])+u1+S3,Y6(h1)}},A.disable=function(u1,X1){if(u1!==!1&&A.revert(!0,!0),A.enabled&&(A.enabled=A.isActive=!1,X1||p1&&p1.pause(),g1=0,S1&&(S1.uncache=1),l1&&N3(n,"refreshInit",l1),k&&(k.pause(),s1.tween&&s1.tween.kill()&&(s1.tween=0)),!j)){for(var k1=u2.length;k1--;)if(u2[k1].scroller===R&&u2[k1]!==A)return;N3(R,"resize",gn),j||N3(R,"scroll",G6)}},A.kill=function(u1,X1){A.disable(u1,X1),p1&&!X1&&p1.kill(),o&&delete Wc[o];var k1=u2.indexOf(A);k1>=0&&u2.splice(k1,1),k1===ve&&w5>0&&ve--,k1=0,u2.forEach(function(a2){return a2.scroller===A.scroller&&(k1=1)}),k1||Me||(A.scroll.rec=0),a&&(a.scrollTrigger=null,u1&&a.revert({kill:!1}),X1||a.kill()),i2&&[i2,t2,$,C2].forEach(function(a2){return a2.parentNode&&a2.parentNode.removeChild(a2)}),bn===A&&(bn=0),d&&(S1&&(S1.uncache=1),k1=0,u2.forEach(function(a2){return a2.pin===d&&k1++}),k1||(S1.spacer=0)),i.onKill&&i.onKill(A)},u2.push(A),A.enable(!1,!1),y1&&y1(A),a&&a.add&&!n2){var q1=A.update;A.update=function(){A.update=q1,f2.cache++,E1||J1||A.refresh()},R1.delayedCall(.01,A.update),n2=.01,E1=J1=0}else A.refresh();d&&ey()},n.register=function(i){return W6||(R1=i||nu(),iu()&&window.document&&n.enable(),W6=dn),W6},n.defaults=function(i){if(i)for(var a in i)x5[a]=i[a];return x5},n.disable=function(i,a){dn=0,u2.forEach(function(s){return s[a?"kill":"disable"](i)}),N3(g2,"wheel",G6),N3(P2,"scroll",G6),clearInterval(m5),N3(P2,"touchcancel",q4),N3(N2,"touchstart",q4),M5(N3,P2,"pointerdown,touchstart,mousedown",Uf),M5(N3,P2,"pointerup,touchend,mouseup",Bf),A5.kill(),v5(N3);for(var r=0;r<f2.length;r+=3)_5(N3,f2[r],f2[r+1]),_5(N3,f2[r],f2[r+2])},n.enable=function(){if(g2=window,P2=document,Ke=P2.documentElement,N2=P2.body,R1){if(Sn=R1.utils.toArray,vn=R1.utils.clamp,Vc=R1.core.context||q4,Ic=R1.core.suppressOverwrites||q4,$c=g2.history.scrollRestoration||"auto",qc=g2.pageYOffset||0,R1.core.globals("ScrollTrigger",n),N2){dn=1,X6=document.createElement("div"),X6.style.height="100vh",X6.style.position="absolute",du(),Yz(),o3.register(R1),n.isTouch=o3.isTouch,it=o3.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Hc=o3.isTouch===1,P3(g2,"wheel",G6),Yc=[g2,P2,Ke,N2],R1.matchMedia?(n.matchMedia=function(f){var h=R1.matchMedia(),u;for(u in f)h.add(u,f[u]);return h},R1.addEventListener("matchMediaInit",function(){uu(),e7()}),R1.addEventListener("matchMediaRevert",function(){return fu()}),R1.addEventListener("matchMedia",function(){Ot(0,1),Wt("matchMedia")}),R1.matchMedia().add("(orientation: portrait)",function(){return Fc(),Fc})):console.warn("Requires GSAP 3.11.0 or later"),Fc(),P3(P2,"scroll",G6);var i=N2.hasAttribute("style"),a=N2.style,r=a.borderTopStyle,s=R1.core.Animation.prototype,c,o;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),a.borderTopStyle="solid",c=g0(N2),M3.m=Math.round(c.top+M3.sc())||0,ee.m=Math.round(c.left+ee.sc())||0,r?a.borderTopStyle=r:a.removeProperty("border-top-style"),i||(N2.setAttribute("style",""),N2.removeAttribute("style")),m5=setInterval(Gf,250),R1.delayedCall(.5,function(){return g5=0}),P3(P2,"touchcancel",q4),P3(N2,"touchstart",q4),M5(P3,P2,"pointerdown,touchstart,mousedown",Uf),M5(P3,P2,"pointerup,touchend,mouseup",Bf),Bc=R1.utils.checkPrefix("transform"),T5.push(Bc),W6=ie(),A5=R1.delayedCall(.2,Ot).pause(),q6=[P2,"visibilitychange",function(){var f=g2.innerWidth,h=g2.innerHeight;P2.hidden?(kf=f,Df=h):(kf!==f||Df!==h)&&gn()},P2,"DOMContentLoaded",Ot,g2,"load",Ot,g2,"resize",gn],v5(P3),u2.forEach(function(f){return f.enable(0,1)}),o=0;o<f2.length;o+=3)_5(N3,f2[o],f2[o+1]),_5(N3,f2[o],f2[o+2])}else if(P2){var l=function f(){n.enable(),P2.removeEventListener("DOMContentLoaded",f)};P2.addEventListener("DOMContentLoaded",l)}}},n.config=function(i){"limitCallbacks"in i&&(kc=!!i.limitCallbacks);var a=i.syncInterval;a&&clearInterval(m5)||(m5=a)&&setInterval(Gf,a),"ignoreMobileResize"in i&&(Hc=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(v5(N3)||v5(P3,i.autoRefreshEvents||"none"),Qf=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,a){var r=me(i),s=f2.indexOf(r),c=Vt(r);~s&&f2.splice(s,c?6:2),a&&(c?x4.unshift(g2,a,N2,a,Ke,a):x4.unshift(r,a))},n.clearMatchMedia=function(i){u2.forEach(function(a){return a._ctx&&a._ctx.query===i&&a._ctx.kill(!0,!0)})},n.isInViewport=function(i,a,r){var s=(je(i)?me(i):i).getBoundingClientRect(),c=s[r?Ut:Bt]*a||0;return r?s.right-c>0&&s.left+c<g2.innerWidth:s.bottom-c>0&&s.top+c<g2.innerHeight},n.positionInViewport=function(i,a,r){je(i)&&(i=me(i));var s=i.getBoundingClientRect(),c=s[r?Ut:Bt],o=a==null?c/2:a in P5?P5[a]*c:~a.indexOf("%")?parseFloat(a)*c/100:parseFloat(a)||0;return r?(s.left+o)/g2.innerWidth:(s.top+o)/g2.innerHeight},n.killAll=function(i){if(u2.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),i!==!0){var a=Gt.killAll||[];Gt={},a.forEach(function(r){return r()})}},n})();s2.version="3.15.0";s2.saveStyles=function(n){return n?Sn(n).forEach(function(e){if(e&&e.style){var t=$e.indexOf(e);t>=0&&$e.splice(t,5),$e.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),R1.core.getCache(e),Vc())}}):$e};s2.revert=function(n,e){return e7(!n,e)};s2.create=function(n,e){return new s2(n,e)};s2.refresh=function(n){return n?gn(!0):(W6||s2.register())&&Ot(!0)};s2.update=function(n){return++f2.cache&&v0(n===!0?2:0)};s2.clearScrollMemory=hu;s2.maxScroll=function(n,e){return X4(n,e?ee:M3)};s2.getScrollFunc=function(n,e){return p0(me(n),e?ee:M3)};s2.getById=function(n){return Wc[n]};s2.getAll=function(){return u2.filter(function(n){return n.vars.id!=="ScrollSmoother"})};s2.isScrolling=function(){return!!o4};s2.snapDirectional=Qc;s2.addEventListener=function(n,e){var t=Gt[n]||(Gt[n]=[]);~t.indexOf(e)||t.push(e)};s2.removeEventListener=function(n,e){var t=Gt[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};s2.batch=function(n,e){var t=[],i={},a=e.interval||.016,r=e.batchMax||1e9,s=function(l,f){var h=[],u=[],d=R1.delayedCall(a,function(){f(h,u),h=[],u=[]}).pause();return function(p){h.length||d.restart(!0),h.push(p.trigger),u.push(p),r<=h.length&&d.progress(1)}},c;for(c in e)i[c]=c.substr(0,2)==="on"&&ne(e[c])&&c!=="onRefreshInit"?s(c,e[c]):e[c];return ne(r)&&(r=r(),P3(s2,"refresh",function(){return r=e.batchMax()})),Sn(n).forEach(function(o){var l={};for(c in i)l[c]=i[c];l.trigger=o,t.push(s2.create(l))}),t};var jf=function(e,t,i,a){return t>a?e(a):t<0&&e(0),i>a?(a-t)/(i-t):i<0?t/(t-i):1},Uc=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(o3.isTouch?" pinch-zoom":""):"none",e===Ke&&n(N2,t)},S5={auto:1,scroll:1},ry=function(e){var t=e.event,i=e.target,a=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,s=r._gsap||R1.core.getCache(r),c=ie(),o;if(!s._isScrollT||c-s._isScrollT>2e3){for(;r&&r!==N2&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(S5[(o=c4(r)).overflowY]||S5[o.overflowX]));)r=r.parentNode;s._isScroll=r&&r!==i&&!Vt(r)&&(S5[(o=c4(r)).overflowY]||S5[o.overflowX]),s._isScrollT=c}(s._isScroll||a==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},mu=function(e,t,i,a){return o3.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:a=a&&ry,onPress:a,onDrag:a,onScroll:a,onEnable:function(){return i&&P3(P2,o3.eventTypes[0],Jf,!1,!0)},onDisable:function(){return N3(P2,o3.eventTypes[0],Jf,!0)}})},sy=/(input|label|select|textarea)/i,Kf,Jf=function(e){var t=sy.test(e.target.tagName);(t||Kf)&&(e._gsapAllow=!0,Kf=t)},cy=function(e){Ft(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,a=t.momentum,r=t.allowNestedScroll,s=t.onRelease,c,o,l=me(e.target)||Ke,f=R1.core.globals().ScrollSmoother,h=f&&f.get(),u=it&&(e.content&&me(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=p0(l,M3),p=p0(l,ee),v=1,m=(o3.isTouch&&g2.visualViewport?g2.visualViewport.scale*g2.visualViewport.width:g2.outerWidth)/g2.innerWidth,g=0,x=ne(a)?function(){return a(c)}:function(){return a||2.8},y,M,b=mu(l,e.type,!0,r),L=function(){return M=!1},S=q4,_=q4,C=function(){o=X4(l,M3),_=vn(it?1:0,o),i&&(S=vn(0,X4(l,ee))),y=Ht},T=function(){u._gsap.y=pn(parseFloat(u._gsap.y)+d.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},P=function(){if(M){requestAnimationFrame(L);var O=pn(c.deltaY/2),Y=_(d.v-O);if(u&&Y!==d.v+d.offset){d.offset=Y-d.v;var A=pn((parseFloat(u&&u._gsap.y)||0)-d.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+A+", 0, 1)",u._gsap.y=A+"px",d.cacheID=f2.cache,v0()}return!0}d.offset&&T(),M=!0},R,q,j,D,I=function(){C(),R.isActive()&&R.vars.scrollY>o&&(d()>o?R.progress(1)&&d(o):R.resetTo("scrollY",o))};return u&&R1.set(u,{y:"+=0"}),e.ignoreCheck=function(N){return it&&N.type==="touchmove"&&P(N)||v>1.05&&N.type!=="touchstart"||c.isGesturing||N.touches&&N.touches.length>1},e.onPress=function(){M=!1;var N=v;v=pn((g2.visualViewport&&g2.visualViewport.scale||1)/m),R.pause(),N!==v&&Uc(l,v>1.01?!0:i?!1:"x"),q=p(),j=d(),C(),y=Ht},e.onRelease=e.onGestureStart=function(N,O){if(d.offset&&T(),!O)D.restart(!0);else{f2.cache++;var Y=x(),A,l1;i&&(A=p(),l1=A+Y*.05*-N.velocityX/.227,Y*=jf(p,A,l1,X4(l,ee)),R.vars.scrollX=S(l1)),A=d(),l1=A+Y*.05*-N.velocityY/.227,Y*=jf(d,A,l1,X4(l,M3)),R.vars.scrollY=_(l1),R.invalidate().duration(Y).play(.01),(it&&R.vars.scrollY>=o||A>=o-1)&&R1.to({},{onUpdate:I,duration:Y})}s&&s(N)},e.onWheel=function(){R._ts&&R.pause(),ie()-g>1e3&&(y=0,g=ie())},e.onChange=function(N,O,Y,A,l1){if(Ht!==y&&C(),O&&i&&p(S(A[2]===O?q+(N.startX-N.x):p()+O-A[1])),Y){d.offset&&T();var d1=l1[2]===Y,$1=d1?j+N.startY-N.y:d()+Y-l1[1],A1=_($1);d1&&$1!==A1&&(j+=A1-$1),d(A1)}(Y||O)&&v0()},e.onEnable=function(){Uc(l,i?!1:"x"),s2.addEventListener("refresh",I),P3(g2,"resize",I),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=p.smooth=!1),b.enable()},e.onDisable=function(){Uc(l,!0),N3(g2,"resize",I),s2.removeEventListener("refresh",I),b.kill()},e.lockAxis=e.lockAxis!==!1,c=new o3(e),c.iOS=it,it&&!d()&&d(1),it&&R1.ticker.add(q4),D=c._dc,R=R1.to(c,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:pu(d,d(),function(){return R.pause()})},onUpdate:v0,onComplete:D.vars.onComplete}),c};s2.sort=function(n){if(ne(n))return u2.sort(n);var e=g2.pageYOffset||0;return s2.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+g2.innerHeight}),u2.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};s2.observe=function(n){return new o3(n)};s2.normalizeScroll=function(n){if(typeof n>"u")return ge;if(n===!0&&ge)return ge.enable();if(n===!1){ge&&ge.kill(),ge=n;return}var e=n instanceof o3?n:cy(n);return ge&&ge.target===e.target&&ge.kill(),Vt(e.target)&&(ge=e),e};s2.core={_getVelocityProp:p5,_inputObserver:mu,_scrollers:f2,_proxies:x4,bridge:{ss:function(){o4||Wt("scrollStart"),o4=ie()},ref:function(){return te}}};nu()&&R1.registerPlugin(s2);var gu="1.3.25";function _u(n,e,t){return Math.max(n,Math.min(e,t))}function oy(n,e,t){return(1-t)*n+t*e}function ly(n,e,t,i){return oy(n,e,1-Math.exp(-t*i))}function fy(n,e){return(n%e+e)%e}var uy=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(n){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=n;let t=_u(0,this.currentTime/this.duration,1);e=t>=1;let i=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=ly(this.value,this.to,this.lerp*60,n),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(n,e,{lerp:t,duration:i,easing:a,onStart:r,onUpdate:s}){this.from=this.value=n,this.to=e,this.lerp=t,this.duration=i,this.easing=a,this.currentTime=0,this.isRunning=!0,r?.(),this.onUpdate=s}};function hy(n,e){let t;return function(...i){clearTimeout(t),t=setTimeout(()=>{t=void 0,n.apply(this,i)},e)}}var dy=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(n,e,{autoResize:t=!0,debounce:i=250}={}){this.wrapper=n,this.content=e,t&&(this.debouncedResize=hy(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},xu=class{events={};emit(n,...e){let t=this.events[n]||[];for(let i=0,a=t.length;i<a;i++)t[i]?.(...e)}on(n,e){return this.events[n]?this.events[n].push(e):this.events[n]=[e],()=>{this.events[n]=this.events[n]?.filter(t=>e!==t)}}off(n,e){this.events[n]=this.events[n]?.filter(t=>e!==t)}destroy(){this.events={}}},py=100/6,nt={passive:!1};function vu(n,e){return n===1?py:n===2?e:1}var my=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new xu;constructor(n,e={wheelMultiplier:1,touchMultiplier:1}){this.element=n,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,nt),this.element.addEventListener("touchstart",this.onTouchStart,nt),this.element.addEventListener("touchmove",this.onTouchMove,nt),this.element.addEventListener("touchend",this.onTouchEnd,nt)}on(n,e){return this.emitter.on(n,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,nt),this.element.removeEventListener("touchstart",this.onTouchStart,nt),this.element.removeEventListener("touchmove",this.onTouchMove,nt),this.element.removeEventListener("touchend",this.onTouchEnd,nt)}onTouchStart=n=>{let{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:n})};onTouchMove=n=>{let{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n,i=-(e-this.touchStart.x)*this.options.touchMultiplier,a=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:i,y:a},this.emitter.emit("scroll",{deltaX:i,deltaY:a,event:n})};onTouchEnd=n=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:n})};onWheel=n=>{let{deltaX:e,deltaY:t,deltaMode:i}=n,a=vu(i,this.window.width),r=vu(i,this.window.height);e*=a,t*=r,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:n})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},Mu=n=>Math.min(1,1.001-2**(-10*n)),zu=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;_isDraggingSelection=!1;isTouching;isIos;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new uy;emitter=new xu;dimensions;virtualScroll;constructor({wrapper:n=window,content:e=document.documentElement,eventsTarget:t=n,smoothWheel:i=!0,syncTouch:a=!1,syncTouchLerp:r=.075,touchInertiaExponent:s=1.7,duration:c,easing:o,lerp:l=.1,infinite:f=!1,orientation:h="vertical",gestureOrientation:u=h==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:p=1,autoResize:v=!0,prevent:m,virtualScroll:g,overscroll:x=!0,autoRaf:y=!1,anchors:M=!1,autoToggle:b=!1,allowNestedScroll:L=!1,__experimental__naiveDimensions:S=!1,naiveDimensions:_=S,stopInertiaOnNavigate:C=!1}={}){window.lenisVersion=gu,window.lenis||(window.lenis={}),window.lenis.version=gu,h==="horizontal"&&(window.lenis.horizontal=!0),a===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!n||n===document.documentElement)&&(n=window),typeof c=="number"&&typeof o!="function"?o=Mu:typeof o=="function"&&typeof c!="number"&&(c=1),this.options={wrapper:n,content:e,eventsTarget:t,smoothWheel:i,syncTouch:a,syncTouchLerp:r,touchInertiaExponent:s,duration:c,easing:o,lerp:l,infinite:f,gestureOrientation:u,orientation:h,touchMultiplier:d,wheelMultiplier:p,autoResize:v,prevent:m,virtualScroll:g,overscroll:x,autoRaf:y,anchors:M,autoToggle:b,allowNestedScroll:L,naiveDimensions:_,stopInertiaOnNavigate:C},this.dimensions=new dy(n,e,{autoResize:v}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new my(t,{touchMultiplier:d,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(n,e){return this.emitter.on(n,e)}off(n,e){return this.emitter.off(n,e)}onScrollEnd=n=>{n instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&n.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){let n=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[n]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=n=>{n.propertyName?.includes("overflow")&&n.target===this.rootElement&&this.checkOverflow()};setScroll(n){this.isHorizontal?this.options.wrapper.scrollTo({left:n,behavior:"instant"}):this.options.wrapper.scrollTo({top:n,behavior:"instant"})}onClick=n=>{let e=n.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),t=new URL(window.location.href);if(this.options.anchors){let i=e.find(a=>t.host===a.host&&t.pathname===a.pathname&&a.hash);if(i){let a=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,r=decodeURIComponent(i.hash);this.scrollTo(r,a);return}}if(this.options.stopInertiaOnNavigate&&e.some(i=>t.host===i.host&&t.pathname!==i.pathname)){this.reset();return}};onPointerDown=n=>{n.button===1&&this.reset()};isTouchOnSelectionHandle(n){let e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;let t=n.targetTouches[0]??n.changedTouches[0];if(!t)return!1;let i=e.getRangeAt(0).getClientRects();if(i.length===0)return!1;let a=i[0],r=i[i.length-1],s=40,c=Math.hypot(t.clientX-a.left,t.clientY-a.top)<=s,o=Math.hypot(t.clientX-r.right,t.clientY-r.bottom)<=s;return c||o}onVirtualScroll=n=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(n)===!1)return;let{deltaX:e,deltaY:t,event:i}=n;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:i}),i.ctrlKey||i.lenisStopPropagation)return;let a=i.type.includes("touch"),r=i.type.includes("wheel");if(a&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";let s=e===0&&t===0;if(this.options.syncTouch&&a&&i.type==="touchstart"&&s&&!this.isStopped&&!this.isLocked){this.reset();return}let c=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(s||c)return;let o=i.composedPath();o=o.slice(0,o.indexOf(this.rootElement));let l=this.options.prevent,f=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(o.find(p=>p instanceof HTMLElement&&(typeof l=="function"&&l?.(p)||p.hasAttribute?.("data-lenis-prevent")||f==="vertical"&&p.hasAttribute?.("data-lenis-prevent-vertical")||f==="horizontal"&&p.hasAttribute?.("data-lenis-prevent-horizontal")||a&&p.hasAttribute?.("data-lenis-prevent-touch")||r&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&a||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let h=t;this.options.gestureOrientation==="both"?h=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(h=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();let u=a&&this.options.syncTouch,d=a&&i.type==="touchend";d&&(h=Math.sign(h)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+h,Ne({programmatic:!1},u?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let n=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-n,this.direction=Math.sign(this.animatedScroll-n),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=n=>{let e=n-(this.time||n);this.time=n,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(n,{offset:e=0,immediate:t=!1,lock:i=!1,programmatic:a=!0,lerp:r=a?this.options.lerp:void 0,duration:s=a?this.options.duration:void 0,easing:c=a?this.options.easing:void 0,onStart:o,onComplete:l,force:f=!1,userData:h}={}){if((this.isStopped||this.isLocked)&&!f)return;let u=n,d=e;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let p=null;if(typeof u=="string"?(p=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),p||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof HTMLElement&&u?.nodeType&&(p=u),p){if(this.options.wrapper!==window){let M=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?M.left:M.top}let v=p.getBoundingClientRect(),m=getComputedStyle(p),g=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),x=getComputedStyle(this.rootElement),y=this.isHorizontal?Number.parseFloat(x.scrollPaddingLeft):Number.parseFloat(x.scrollPaddingTop);u=(this.isHorizontal?v.left:v.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(y)?0:y)}}if(typeof u=="number"){if(u+=d,this.options.infinite){if(a){this.targetScroll=this.animatedScroll=this.scroll;let p=u-this.animatedScroll;p>this.limit/2?u-=this.limit:p<-this.limit/2&&(u+=this.limit)}}else u=_u(0,u,this.limit);if(u===this.targetScroll){o?.(this),l?.(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}a||(this.targetScroll=u),typeof s=="number"&&typeof c!="function"?c=Mu:typeof c=="function"&&typeof s!="number"&&(s=1),this.animate.fromTo(this.animatedScroll,u,{duration:s,easing:c,lerp:r,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",o?.(this)},onUpdate:(p,v)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),a&&(this.targetScroll=p),v||this.emit(),v&&(this.reset(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(n,{deltaX:e,deltaY:t}){let i=Date.now();n._lenis||(n._lenis={});let a=n._lenis,r,s,c,o,l,f,h,u,d,p;if(i-(a.time??0)>2e3){a.time=Date.now();let L=window.getComputedStyle(n);if(a.computedStyle=L,r=["auto","overlay","scroll"].includes(L.overflowX),s=["auto","overlay","scroll"].includes(L.overflowY),l=["auto"].includes(L.overscrollBehaviorX),f=["auto"].includes(L.overscrollBehaviorY),a.hasOverflowX=r,a.hasOverflowY=s,!(r||s))return!1;h=n.scrollWidth,u=n.scrollHeight,d=n.clientWidth,p=n.clientHeight,c=h>d,o=u>p,a.isScrollableX=c,a.isScrollableY=o,a.scrollWidth=h,a.scrollHeight=u,a.clientWidth=d,a.clientHeight=p,a.hasOverscrollBehaviorX=l,a.hasOverscrollBehaviorY=f}else c=a.isScrollableX,o=a.isScrollableY,r=a.hasOverflowX,s=a.hasOverflowY,h=a.scrollWidth,u=a.scrollHeight,d=a.clientWidth,p=a.clientHeight,l=a.hasOverscrollBehaviorX,f=a.hasOverscrollBehaviorY;if(!(r&&c||s&&o))return!1;let v=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical",m,g,x,y,M,b;if(v==="horizontal")m=Math.round(n.scrollLeft),g=h-d,x=e,y=r,M=c,b=l;else if(v==="vertical")m=Math.round(n.scrollTop),g=u-p,x=t,y=s,M=o,b=f;else return!1;return!b&&(m>=g||m<=0)?!0:(x>0?m<g:m>0)&&y&&M}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let n=this.options.wrapper;return this.isHorizontal?n.scrollX??n.scrollLeft:n.scrollY??n.scrollTop}get scroll(){return this.options.infinite?fy(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(n){this._isScrolling!==n&&(this._isScrolling=n,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(n){this._isStopped!==n&&(this._isStopped=n,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(n){this._isLocked!==n&&(this._isLocked=n,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let n="lenis";return this.options.autoToggle&&(n+=" lenis-autoToggle"),this.isStopped&&(n+=" lenis-stopped"),this.isLocked&&(n+=" lenis-locked"),this.isScrolling&&(n+=" lenis-scrolling"),this.isScrolling==="smooth"&&(n+=" lenis-smooth"),n}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(n=>{this.rootElement.classList.add(n)})}cleanUpClassName(){for(let n of Array.from(this.rootElement.classList))(n==="lenis"||n.startsWith("lenis-"))&&this.rootElement.classList.remove(n)}};var Y4=(()=>{class n{constructor(){this.platformId=Z1(T4),this.lenis=null,this.rafId=0,this.loop=()=>{this.lenis?.raf(performance.now()),this.rafId=requestAnimationFrame(this.loop)}}init(){!ce(this.platformId)||this.lenis||window.matchMedia("(prefers-reduced-motion: reduce)").matches||(this.lenis=new zu({duration:1.1,smoothWheel:!0,autoRaf:!1}),document.documentElement.classList.add("lenis","lenis-smooth"),this.loop())}get instance(){return this.lenis}pause(){this.lenis?.stop()}resume(){this.lenis?.start()}getScrollPosition(){return ce(this.platformId)?this.lenis?.animatedScroll??window.scrollY:0}scrollToSection(t){if(!ce(this.platformId))return;if(t==="#top"){this.scrollTo(0);return}let i=document.querySelector(t);if(!(i instanceof HTMLElement))return;this.lenis?.resize();let a=this.findSectionAnchor(i),r=this.getNavClearance(),s=16,c=window.innerHeight,o=this.getScrollPosition(),l=i.getBoundingClientRect().top+o,f=l+i.offsetHeight,h=a.getBoundingClientRect().top+o,u=Math.max(0,l-r),d=Math.max(u,f-c),p=h-r-s;p=Math.min(Math.max(p,u),d),!(Math.abs(p-o)<8)&&this.scrollTo(p)}scrollTo(t,i){if(!ce(this.platformId))return;let a=i?.offset??-80,r=i?.immediate??!1;if(this.lenis){if(this.lenis.resize(),typeof t=="string"){let s=document.querySelector(t);s instanceof HTMLElement&&this.lenis.scrollTo(s,{offset:a,immediate:r});return}this.lenis.scrollTo(t,{offset:typeof t=="number"?0:a,immediate:r});return}typeof t=="string"?document.querySelector(t)?.scrollIntoView({behavior:r?"auto":"smooth",block:"nearest"}):t instanceof HTMLElement?t.scrollIntoView({behavior:r?"auto":"smooth",block:"nearest"}):window.scrollTo({top:t,behavior:r?"auto":"smooth"})}ngOnDestroy(){cancelAnimationFrame(this.rafId),this.lenis?.destroy(),this.lenis=null,document.documentElement.classList.remove("lenis","lenis-smooth")}findSectionAnchor(t){let i=t.querySelector(".section-header")??t.querySelector(".hero-content")??t.querySelector(".site-footer__info");return i instanceof HTMLElement?i:t}getNavClearance(){let t=document.querySelector(".cyber-nav");return t instanceof HTMLElement?t.getBoundingClientRect().bottom+16:96}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=R3({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var l4=(()=>{class n{constructor(){this.platformId=Z1(T4),this.lenis=Z1(Y4),this.registered=!1}prefersReducedMotion(){return ce(this.platformId)?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!0}register(){!ce(this.platformId)||this.registered||(p3.registerPlugin(s2),this.setupScrollerProxy(),this.registered=!0)}createContext(t,i){return!ce(this.platformId)||this.prefersReducedMotion()?null:(this.register(),p3.context(i,t))}reveal(t,i){let a=p3.utils.toArray(t);a.length!==0&&s2.batch(a,{start:i?.start??"top 90%",once:i?.once??!0,onEnter:r=>{p3.from(r,{y:i?.y??36,opacity:0,duration:i?.duration??.85,stagger:i?.stagger??.1,ease:"power3.out",immediateRender:!1,onComplete:()=>{r.forEach(s=>p3.set(s,{clearProps:"opacity"}))}})}})}revealY(t,i){let a=p3.utils.toArray(t);a.length!==0&&s2.batch(a,{start:i?.start??"top 90%",once:i?.once??!0,onEnter:r=>{p3.from(r,{y:i?.y??36,duration:i?.duration??.85,stagger:i?.stagger??.1,ease:"power3.out",immediateRender:!1,onComplete:()=>{r.forEach(s=>p3.set(s,{clearProps:"transform"}))}})}})}countUp(t,i,a){let r={value:0},s=a?.suffix??"";p3.to(r,{value:i,duration:a?.duration??1.6,ease:"power2.out",scrollTrigger:{trigger:t,start:a?.start??"top 90%",once:!0},onUpdate:()=>{t.textContent=`${Math.round(r.value)}${s}`}})}staggerEntrance(t,i){p3.from(t,{y:i?.y??24,opacity:0,duration:.75,stagger:i?.delay??.08,ease:"power3.out",onComplete:()=>{let a=p3.utils.toArray(t);p3.set(a,{clearProps:"opacity"})}})}refresh(){this.registered&&s2.refresh()}setupScrollerProxy(){let t=this.lenis.instance;t&&(s2.scrollerProxy(document.body,{scrollTop(i){return i!==void 0&&t.scrollTo(i,{immediate:!0}),t.animatedScroll},getBoundingClientRect(){return{top:0,left:0,width:window.innerWidth,height:window.innerHeight}},fixedMarkers:!0}),t.on("scroll",s2.update),s2.addEventListener("refresh",()=>t.resize()),s2.refresh())}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=R3({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var gy=["canvasHost"],vy=["heroHost"];function My(n,e){if(n&1&&(t1(0,"span"),X(1),a1()),n&2){let t=e.$implicit;J(),O1(t)}}function _y(n,e){n&1&&(t1(0,"div",13),K2(1,"div",14,1)(3,"div",15),t1(4,"div",16)(5,"span"),X(6,"ISO 27001"),a1(),t1(7,"span"),X(8,"encrypt(payload)"),a1(),t1(9,"span"),X(10,"terraform apply"),a1()()())}var yu=(()=>{class n{constructor(){this.profile=F3,this.showCanvas=h3(this.evaluateCanvasVisibility()),this.platformId=Z1(T4),this.theme=Z1(Xr),this.gsapScroll=Z1(l4),this.gsapCtx=null,this.renderer=null,this.scene=null,this.camera=null,this.meshGroup=null,this.particles=null,this.outerMaterial=null,this.innerMaterial=null,this.ringMaterial=null,this.particleMaterial=null,this.rafId=0,this.running=!1,this.resizeObserver=null,this.intersectionObserver=null,this.mediaQuery=null,this.motionQuery=null,this.disposed=!1,this.onViewportChange=()=>{this.syncCanvasVisibility()},this.tick=()=>{!this.running||!this.scene||!this.camera||!this.renderer||(this.meshGroup&&(this.meshGroup.rotation.y+=.0012,this.meshGroup.rotation.x+=6e-4),this.particles&&(this.particles.rotation.y-=4e-4),this.renderer.render(this.scene,this.camera),this.rafId=requestAnimationFrame(this.tick))},Ao(()=>{this.applyTheme(this.theme.isDark())}),E4(()=>{if(!ce(this.platformId))return;this.mediaQuery=window.matchMedia("(min-width: 900px)"),this.motionQuery=window.matchMedia("(prefers-reduced-motion: reduce)"),this.mediaQuery.addEventListener("change",this.onViewportChange),this.motionQuery.addEventListener("change",this.onViewportChange),this.syncCanvasVisibility();let t=this.heroHost?.nativeElement;t&&(this.gsapCtx=this.gsapScroll.createContext(t,()=>{this.gsapScroll.staggerEntrance(".hero-content > *",{delay:.09,y:28}),this.gsapScroll.staggerEntrance(".hero__tags span",{delay:.05,y:12})})),this.showCanvas()&&(this.initScene(),this.applyTheme(this.theme.isDark()))})}ngOnDestroy(){this.disposed=!0,this.mediaQuery?.removeEventListener("change",this.onViewportChange),this.motionQuery?.removeEventListener("change",this.onViewportChange),this.gsapCtx?.revert(),this.stop(),this.resizeObserver?.disconnect(),this.intersectionObserver?.disconnect(),this.disposeScene()}evaluateCanvasVisibility(){return typeof window>"u"?!1:window.innerWidth>=900&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches}syncCanvasVisibility(){let t=this.evaluateCanvasVisibility(),i=this.showCanvas();if(this.showCanvas.set(t),t&&!i&&!this.renderer&&!this.disposed){requestAnimationFrame(()=>{this.showCanvas()&&!this.renderer&&!this.disposed&&(this.initScene(),this.applyTheme(this.theme.isDark()))});return}!t&&i&&(this.stop(),this.disposeScene())}initScene(){let t=this.canvasHost?.nativeElement;if(!t)return;let i=t.clientWidth,a=t.clientHeight;if(i<=0||a<=0)return;this.scene=new Mi,this.camera=new j3(45,i/a,.1,100),this.camera.position.set(0,0,6),this.renderer=new Gr({antialias:!0,alpha:!0}),this.renderer.setSize(i,a),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.setClearColor(0,0),t.appendChild(this.renderer.domElement),this.meshGroup=new t0,this.outerMaterial=new a0({color:61695,wireframe:!0,transparent:!0,opacity:.18});let r=new U3(new wi(2.2,1),this.outerMaterial);this.meshGroup.add(r),this.innerMaterial=new a0({color:11032055,wireframe:!0,transparent:!0,opacity:.12});let s=new U3(new Ti(1.3,0),this.innerMaterial);this.meshGroup.add(s),this.ringMaterial=new a0({color:61695,transparent:!0,opacity:.1});let c=new U3(new Ai(2.6,.02,8,64),this.ringMaterial);c.rotation.x=Math.PI/3,this.meshGroup.add(c),this.meshGroup.position.set(-.55,0,0),this.scene.add(this.meshGroup);let o=60,l=new Float32Array(o*3);for(let h=0;h<o;h++)l[h*3]=(Math.random()-.5)*7,l[h*3+1]=(Math.random()-.5)*5,l[h*3+2]=(Math.random()-.5)*3;let f=new le;f.setAttribute("position",new oe(l,3)),this.particleMaterial=new x6({color:61695,size:.025,transparent:!0,opacity:.35}),this.particles=new bi(f,this.particleMaterial),this.scene.add(this.particles),this.resizeObserver=new ResizeObserver(()=>this.onResize()),this.resizeObserver.observe(t),this.intersectionObserver=new IntersectionObserver(h=>{h.some(d=>d.isIntersecting)?this.start():this.stop()},{threshold:.05}),this.intersectionObserver.observe(t),this.start()}applyTheme(t){if(!(!this.outerMaterial||!this.innerMaterial||!this.ringMaterial||!this.particleMaterial)){if(t){this.outerMaterial.color.setHex(61695),this.outerMaterial.opacity=.18,this.innerMaterial.color.setHex(11032055),this.innerMaterial.opacity=.12,this.ringMaterial.color.setHex(61695),this.ringMaterial.opacity=.1,this.particleMaterial.color.setHex(61695),this.particleMaterial.opacity=.35,this.particleMaterial.size=.025;return}this.outerMaterial.color.setHex(561586),this.outerMaterial.opacity=.42,this.innerMaterial.color.setHex(8141549),this.innerMaterial.opacity=.3,this.ringMaterial.color.setHex(561586),this.ringMaterial.opacity=.28,this.particleMaterial.color.setHex(561586),this.particleMaterial.opacity=.55,this.particleMaterial.size=.03}}onResize(){let t=this.canvasHost?.nativeElement;if(!t||!this.camera||!this.renderer)return;let i=t.clientWidth,a=t.clientHeight;i<=0||a<=0||(this.camera.aspect=i/a,this.camera.updateProjectionMatrix(),this.renderer.setSize(i,a))}start(){this.running||this.disposed||(this.running=!0,this.tick())}stop(){this.running=!1,cancelAnimationFrame(this.rafId)}disposeScene(){this.particles?.geometry.dispose(),this.particleMaterial?.dispose(),this.outerMaterial?.dispose(),this.innerMaterial?.dispose(),this.ringMaterial?.dispose(),this.meshGroup?.traverse(i=>{i instanceof U3&&i.geometry.dispose()}),this.renderer?.dispose();let t=this.canvasHost?.nativeElement;t?.firstChild&&t.removeChild(t.firstChild),this.renderer=null,this.scene=null,this.camera=null,this.meshGroup=null,this.particles=null,this.outerMaterial=null,this.innerMaterial=null,this.ringMaterial=null,this.particleMaterial=null}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=q2({type:n,selectors:[["app-hero-3d"]],viewQuery:function(i,a){if(i&1&&e4(gy,5)(vy,7),i&2){let r;xe(r=ze())&&(a.canvasHost=r.first),xe(r=ze())&&(a.heroHost=r.first)}},decls:25,vars:3,consts:[["heroHost",""],["canvasHost",""],["id","about",1,"hero"],[1,"hero__layout"],[1,"hero-content"],[1,"hero__kicker"],[1,"sr-only"],[1,"hero__lead"],[1,"hero__actions"],["href","#experience",1,"btn-primary"],["aria-hidden","true"],["href","#contact",1,"btn-ghost"],[1,"hero__tags"],["aria-hidden","true",1,"hero__visual"],[1,"hero__canvas-host"],[1,"hero__visual-fade"],[1,"hero__snippets"]],template:function(i,a){i&1&&(t1(0,"section",2,0)(2,"div",3)(3,"div",4)(4,"p",5),X(5),a1(),t1(6,"h1")(7,"span",6),X(8,"R\xE9my Binsztock \u2014 "),a1(),X(9," Full-stack developer delivering secure, scalable solutions from frontend to backend. "),a1(),t1(10,"p",7),X(11),a1(),t1(12,"div",8)(13,"a",9),X(14," Explore experience "),t1(15,"span",10),X(16,"\u2193"),a1()(),t1(17,"a",11),X(18," Get in touch "),t1(19,"span",10),X(20,"\u2193"),a1()()(),t1(21,"div",12),p2(22,My,2,1,"span",null,_e),a1()(),I3(24,_y,11,0,"div",13),a1()()),i&2&&(J(5),O1(a.profile.role),J(6),O1(a.profile.summary),J(11),m2(a.profile.heroTags),J(2),k3(a.showCanvas()?24:-1))},styles:[".hero[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;min-height:85vh;padding:8rem 0 5rem}.hero__layout[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(280px,.9fr);align-items:stretch;width:100%;min-height:clamp(360px,48vh,520px);border:1px solid var(--border-glow);border-radius:16px;overflow:hidden}.hero-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;padding:clamp(2rem,4vw,3rem) clamp(2rem,4vw,3.5rem);background:color-mix(in srgb,var(--paper) 92%,transparent);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}.hero__kicker[_ngcontent-%COMP%]{margin:0 0 1.25rem;color:var(--accent);font-family:var(--font-mono);font-size:.72rem;font-weight:600;letter-spacing:.04em}.hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:clamp(2.2rem,5vw,3.8rem);line-height:1.1;letter-spacing:-.04em}.hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{font-style:normal;color:var(--accent)}.hero__lead[_ngcontent-%COMP%]{margin:1.5rem 0 0;color:var(--ink-soft);font-size:1rem;line-height:1.75}.hero__actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:1rem;margin-top:2rem}.hero__tags[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem;margin-top:2rem}.hero__tags[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:.35rem .75rem;border:1px solid var(--line);border-radius:6px;color:var(--muted);font-family:var(--font-mono);font-size:.68rem}.hero__visual[_ngcontent-%COMP%]{position:relative;min-height:clamp(320px,42vh,480px);background:color-mix(in srgb,var(--surface) 30%,transparent)}.hero__canvas-host[_ngcontent-%COMP%]{position:absolute;inset:0}.hero__canvas-host[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{display:block;width:100%!important;height:100%!important}.hero__visual-fade[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,color-mix(in srgb,var(--paper) 55%,transparent) 0%,transparent 28%);pointer-events:none}.hero__snippets[_ngcontent-%COMP%]{position:absolute;z-index:2;right:1rem;bottom:1rem;display:flex;flex-direction:column;gap:.4rem;pointer-events:none}.hero__snippets[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{align-self:flex-end;padding:.3rem .65rem;border:1px solid color-mix(in srgb,var(--accent) 28%,transparent);border-radius:6px;background:color-mix(in srgb,var(--paper) 72%,transparent);color:var(--accent-dark);font-family:var(--font-mono);font-size:.62rem;opacity:.9}@media(max-width:900px){.hero[_ngcontent-%COMP%]{min-height:auto;padding:7rem 0 3rem}.hero__layout[_ngcontent-%COMP%]{grid-template-columns:1fr;min-height:auto}.hero-content[_ngcontent-%COMP%]{padding:1.5rem}.hero__visual[_ngcontent-%COMP%]{min-height:280px}}"]})}}return n})();var xy=["host"],zy=(n,e)=>e.label;function yy(n,e){if(n&1&&(t1(0,"article",4)(1,"span",5),X(2),a1(),t1(3,"strong",6),X(4),a1(),t1(5,"span",7),X(6),a1()()),n&2){let t=e.$implicit,i=e.$index,a=b2();Y2("aria-label",t.label),J(2),O1(a.icons[i]),J(2),T2("0",t.suffix),J(2),O1(t.label)}}var bu=(()=>{class n{constructor(){this.stats=Yn,this.icons=["\u23F1","\u26A1","\u{1F680}","\u{1F6E1}"],this.gsapScroll=Z1(l4),this.gsapCtx=null,E4(()=>{this.gsapCtx=this.gsapScroll.createContext(this.hostRef.nativeElement,()=>{this.gsapScroll.reveal(".stats-card",{stagger:.12,y:28}),this.hostRef.nativeElement.querySelectorAll(".stats-card__value").forEach((i,a)=>{let r=this.stats[a];r&&this.gsapScroll.countUp(i,r.value,{suffix:r.suffix})})})})}ngOnDestroy(){this.gsapCtx?.revert()}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=q2({type:n,selectors:[["app-stats-counter"]],viewQuery:function(i,a){if(i&1&&e4(xy,7),i&2){let r;xe(r=ze())&&(a.hostRef=r.first)}},decls:6,vars:0,consts:[["host",""],["aria-label","Key professional highlights",1,"stats"],[1,"section-rule"],[1,"stats-grid"],[1,"stats-card","glow-card","glow-card--static"],["aria-hidden","true",1,"stats-card__icon"],[1,"stats-card__value"],[1,"stats-card__label"]],template:function(i,a){i&1&&(t1(0,"section",1,0),K2(2,"hr",2),t1(3,"div",3),p2(4,yy,7,4,"article",4,zy),a1()()),i&2&&(J(4),m2(a.stats))},styles:[".stats[_ngcontent-%COMP%]{padding:0 0 var(--section-pad)}.stats-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1rem;align-items:stretch}.stats-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.35rem;min-width:0;min-height:9rem;padding:1.75rem 1.5rem;text-align:center}.stats-card__icon[_ngcontent-%COMP%]{font-size:1.25rem;margin-bottom:.25rem;opacity:.8}.stats-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-family:var(--font-display);font-size:clamp(2rem,4vw,2.8rem);font-weight:700;letter-spacing:-.04em;line-height:1;background:linear-gradient(135deg,var(--accent),var(--accent-secondary));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.stats-card__label[_ngcontent-%COMP%]{color:var(--muted);font-size:.78rem;line-height:1.45;max-width:14ch}@media(max-width:900px){.stats-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:480px){.stats-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.stats-card[_ngcontent-%COMP%]{min-height:auto}}"]})}}return n})();var by=["host"],Sy=(n,e)=>e.company;function Cy(n,e){if(n&1&&(t1(0,"li"),X(1),a1()),n&2){let t=e.$implicit;J(),O1(t)}}function Ly(n,e){if(n&1&&(t1(0,"ul",14),Wn("expand-enter"),p2(1,Cy,2,1,"li",null,_e),a1()),n&2){let t=b2(),i=t.$implicit,a=t.$index,r=b2();u4("id",r.panelId(a)),J(),m2(i.highlights)}}function wy(n,e){if(n&1){let t=Ie();t1(0,"article",7)(1,"button",8),ke("click",function(){let a=Pe(t).$index,r=b2();return Re(r.toggle(a))}),K2(2,"div",9),t1(3,"div",10)(4,"h3"),X(5),a1(),t1(6,"p",11),X(7),a1()(),t1(8,"div",12)(9,"span"),X(10),a1(),t1(11,"span"),X(12),a1()(),t1(13,"span",13),X(14),a1()(),I3(15,Ly,3,1,"ul",14),a1()}if(n&2){let t=e.$implicit,i=e.$index,a=b2();X3("timeline-item--expanded",a.expandedIndex()===i),J(),Y2("aria-expanded",a.expandedIndex()===i)("aria-controls",a.panelId(i)),J(4),O1(t.company),J(2),O1(t.role),J(3),O1(t.period),J(2),O1(t.location),J(2),T2(" ",a.expandedIndex()===i?"\u2212":"+"," "),J(),k3(a.expandedIndex()===i?15:-1)}}var Su=(()=>{class n{constructor(){this.experience=jn,this.expandedIndex=h3(0),this.gsapScroll=Z1(l4),this.gsapCtx=null,E4(()=>{this.gsapCtx=this.gsapScroll.createContext(this.hostRef.nativeElement,()=>{this.gsapScroll.reveal(".timeline-section .section-header",{y:28}),this.gsapScroll.reveal(".timeline-item",{stagger:.08,y:32})})})}ngOnDestroy(){this.gsapCtx?.revert()}toggle(t){this.expandedIndex.update(i=>i===t?null:t),requestAnimationFrame(()=>this.gsapScroll.refresh())}panelId(t){return`timeline-panel-${t}`}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=q2({type:n,selectors:[["app-career-timeline"]],viewQuery:function(i,a){if(i&1&&e4(by,7),i&2){let r;xe(r=ze())&&(a.hostRef=r.first)}},decls:14,vars:0,consts:[["host",""],["id","experience",1,"timeline-section"],[1,"section-rule"],[1,"section-header"],[1,"section-kicker"],[1,"timeline"],[1,"timeline-item","glow-card",3,"timeline-item--expanded"],[1,"timeline-item","glow-card"],["type","button",1,"timeline-item__head",3,"click"],["aria-hidden","true",1,"timeline-item__node"],[1,"timeline-item__info"],[1,"timeline-item__role"],[1,"timeline-item__meta"],["aria-hidden","true",1,"timeline-item__chevron"],[1,"timeline-item__highlights","expand-panel",3,"id"]],template:function(i,a){i&1&&(t1(0,"section",1,0),K2(2,"hr",2),t1(3,"header",3)(4,"p",4),X(5,"Experience"),a1(),t1(6,"h2"),X(7,"A career built on "),t1(8,"em"),X(9,"transformation"),a1(),X(10,"."),a1()(),t1(11,"div",5),p2(12,wy,16,10,"article",6,Sy),a1()()),i&2&&(J(12),m2(a.experience))},styles:['@charset "UTF-8";.timeline-section[_ngcontent-%COMP%]{padding:var(--section-pad) 0;scroll-margin-top:6rem}.timeline[_ngcontent-%COMP%]{position:relative;display:grid;gap:1rem}.timeline[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;bottom:0;left:1.35rem;width:2px;background:linear-gradient(to bottom,var(--accent),var(--accent-secondary),transparent);opacity:.4}.timeline-item[_ngcontent-%COMP%]{overflow:hidden;transition:box-shadow .3s ease}.timeline-item--expanded[_ngcontent-%COMP%]{box-shadow:0 0 30px color-mix(in srgb,var(--accent) 15%,transparent)}.timeline-item__head[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto 1fr auto auto;gap:1.25rem;align-items:center;width:100%;padding:1.25rem 1.5rem;border:none;background:transparent;color:inherit;text-align:left;cursor:pointer;transition:background .2s}.timeline-item__head[_ngcontent-%COMP%]:hover{background:color-mix(in srgb,var(--accent) 4%,transparent)}.timeline-item__node[_ngcontent-%COMP%]{width:12px;height:12px;border-radius:50%;background:var(--accent);box-shadow:0 0 12px var(--accent);flex-shrink:0}.timeline-item--expanded[_ngcontent-%COMP%]   .timeline-item__node[_ngcontent-%COMP%]{background:var(--accent-secondary);box-shadow:0 0 16px var(--accent-secondary)}.timeline-item__info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1.15rem}.timeline-item__role[_ngcontent-%COMP%]{margin:.2rem 0 0;color:var(--accent);font-family:var(--font-mono);font-size:.75rem;font-weight:600}.timeline-item__meta[_ngcontent-%COMP%]{display:grid;gap:.15rem;color:var(--muted);font-size:.72rem;text-align:right}.timeline-item__chevron[_ngcontent-%COMP%]{display:grid;place-items:center;width:28px;height:28px;border:1px solid var(--line);border-radius:50%;color:var(--accent);font-size:1rem;font-weight:300;transition:border-color .2s,background .2s}.timeline-item--expanded[_ngcontent-%COMP%]   .timeline-item__chevron[_ngcontent-%COMP%]{border-color:var(--accent);background:var(--accent-soft)}.timeline-item__highlights[_ngcontent-%COMP%]{margin:0;padding:0 1.5rem 1.25rem 3.5rem;list-style:none;columns:2;column-gap:2rem;border-top:1px solid var(--line)}.timeline-item__highlights[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;break-inside:avoid;padding:.75rem 0 .6rem 1rem;color:var(--muted);font-size:.84rem;line-height:1.6}.timeline-item__highlights[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\203a";position:absolute;left:0;color:var(--accent);font-weight:700}@media(max-width:700px){.timeline-item__head[_ngcontent-%COMP%]{grid-template-columns:auto 1fr auto}.timeline-item__meta[_ngcontent-%COMP%]{display:none}.timeline-item__highlights[_ngcontent-%COMP%]{columns:1;padding-left:2.5rem}}']})}}return n})();var Ty=["host"],Cu=(n,e)=>e.title;function Ey(n,e){if(n&1&&(t1(0,"article",7)(1,"span",13),X(2),a1(),t1(3,"span",14),X(4),a1(),t1(5,"h3"),X(6),a1(),t1(7,"p"),X(8),a1()()),n&2){let t=e.$implicit,i=e.$index,a=b2();J(2),T2("0",i+1),J(2),O1(a.icons[i]),J(2),O1(t.title),J(2),O1(t.description)}}function Ay(n,e){if(n&1&&(t1(0,"li"),X(1),a1()),n&2){let t=e.$implicit;J(),O1(t)}}function Ny(n,e){if(n&1&&(t1(0,"span"),X(1),a1()),n&2){let t=e.$implicit;J(),O1(t)}}function Py(n,e){if(n&1&&(t1(0,"div",22),Wn("expand-enter"),t1(1,"div",23)(2,"div",24)(3,"p",25),X(4,"Key contributions"),a1(),t1(5,"ul"),p2(6,Ay,2,1,"li",null,_e),a1()(),t1(8,"div",26)(9,"p",25),X(10,"Stack"),a1(),t1(11,"div",27),p2(12,Ny,2,1,"span",null,_e),a1()()()()),n&2){let t=b2(),i=t.$implicit,a=t.$index,r=b2();u4("id",r.panelId(a)),J(6),m2(i.highlights),J(6),m2(i.tech)}}function Ry(n,e){if(n&1){let t=Ie();t1(0,"article",15)(1,"button",16),ke("click",function(){let a=Pe(t).$index,r=b2();return Re(r.toggle(a))}),t1(2,"span",17),X(3),a1(),t1(4,"div",18)(5,"p"),X(6),a1(),t1(7,"h3"),X(8),a1()(),t1(9,"span",19),ft(),t1(10,"svg",20),K2(11,"path",21),a1()()(),I3(12,Py,14,1,"div",22),a1()}if(n&2){let t=e.$implicit,i=e.$index,a=b2();X3("project-card--expanded",a.expandedIndex()===i),J(),Y2("aria-expanded",a.expandedIndex()===i)("aria-controls",a.panelId(i)),J(2),T2("0",i+1),J(3),O1(t.tag),J(2),O1(t.title),J(),X3("project-card__chevron--open",a.expandedIndex()===i),J(3),k3(a.expandedIndex()===i?12:-1)}}var Lu=(()=>{class n{constructor(){this.projects=$n,this.sections=Oo,this.icons=["\u{1F3AF}","\u2699\uFE0F","\u{1F510}","\u{1F680}"],this.expandedIndex=h3(0),this.gsapScroll=Z1(l4),this.gsapCtx=null,E4(()=>{this.gsapCtx=this.gsapScroll.createContext(this.hostRef.nativeElement,()=>{this.gsapScroll.reveal(".approach-section .section-header",{y:28}),this.gsapScroll.reveal(".approach-card",{stagger:.1,y:30}),this.gsapScroll.reveal(".projects-section .section-header",{y:24}),this.gsapScroll.reveal(".project-card",{stagger:.09,y:28})})})}ngOnDestroy(){this.gsapCtx?.revert()}toggle(t){this.expandedIndex.update(i=>i===t?null:t),requestAnimationFrame(()=>this.gsapScroll.refresh())}panelId(t){return`project-panel-${t}`}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=q2({type:n,selectors:[["app-project-cards"]],viewQuery:function(i,a){if(i&1&&e4(Ty,7),i&2){let r;xe(r=ze())&&(a.hostRef=r.first)}},decls:38,vars:0,consts:[["host",""],[1,"projects-host"],[1,"approach-section"],[1,"section-header","section-header--split"],[1,"section-kicker"],[1,"section-header__lead","section-header__lead--accent"],[1,"approach-grid"],[1,"approach-card","glow-card"],["id","projects",1,"projects-section"],[1,"section-rule"],[1,"section-header"],[1,"projects-list"],[1,"project-card","glow-card",3,"project-card--expanded"],[1,"approach-card__index"],["aria-hidden","true",1,"approach-card__icon"],[1,"project-card","glow-card"],["type","button",1,"project-card__head",3,"click"],[1,"project-card__index"],[1,"project-card__title"],["aria-hidden","true",1,"project-card__chevron"],["viewBox","0 0 24 24","width","16","height","16"],["d","M6 9l6 6 6-6","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round"],[1,"project-card__body","expand-panel",3,"id"],[1,"project-card__details"],[1,"project-card__contributions"],[1,"project-card__label"],[1,"project-card__stack"],[1,"project-card__tech"]],template:function(i,a){i&1&&(t1(0,"div",1,0)(2,"section",2)(3,"header",3)(4,"div")(5,"p",4),X(6,"How I work"),a1(),t1(7,"h2"),X(8,"Broad technical range."),K2(9,"br"),X(10,"One clear "),t1(11,"em"),X(12,"standard"),a1(),X(13,"."),a1()(),t1(14,"p",5),X(15," Thoughtful products."),K2(16,"br"),X(17," Maintainable systems."),K2(18,"br"),t1(19,"em"),X(20,"Pragmatic security"),a1(),X(21," at every stage of delivery. "),a1()(),t1(22,"div",6),p2(23,Ey,9,4,"article",7,Cu),a1()(),t1(25,"section",8),K2(26,"hr",9),t1(27,"header",10)(28,"p",4),X(29,"Selected work"),a1(),t1(30,"h2"),X(31,"Projects with "),t1(32,"em"),X(33,"lasting impact"),a1(),X(34,"."),a1()(),t1(35,"div",11),p2(36,Ry,13,10,"article",12,Cu),a1()()()),i&2&&(J(23),m2(a.sections),J(13),m2(a.projects))},styles:['@charset "UTF-8";.approach-section[_ngcontent-%COMP%], .projects-section[_ngcontent-%COMP%]{padding:var(--section-pad) 0}.approach-section[_ngcontent-%COMP%]{border-top:1px solid var(--line)}.projects-section[_ngcontent-%COMP%]{scroll-margin-top:6rem}.approach-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}.approach-card[_ngcontent-%COMP%]{padding:1.75rem}.approach-card__index[_ngcontent-%COMP%]{color:var(--accent);font-family:var(--font-mono);font-size:.68rem;font-weight:700;letter-spacing:.08em}.approach-card__icon[_ngcontent-%COMP%]{display:block;margin:1.25rem 0 .5rem;font-size:1.5rem}.approach-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 .75rem;font-size:1.1rem}.approach-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:var(--muted);font-size:.88rem;line-height:1.7}.projects-list[_ngcontent-%COMP%]{display:grid;gap:1rem}.project-card[_ngcontent-%COMP%]{overflow:hidden;transition:box-shadow .3s}.project-card--expanded[_ngcontent-%COMP%]{box-shadow:0 0 30px color-mix(in srgb,var(--accent-secondary) 15%,transparent)}.project-card__head[_ngcontent-%COMP%]{display:grid;grid-template-columns:40px 1fr auto;gap:1rem;align-items:center;width:100%;padding:1.25rem 1.5rem;border:none;background:transparent;color:inherit;text-align:left;cursor:pointer;transition:background .2s}.project-card__head[_ngcontent-%COMP%]:hover{background:color-mix(in srgb,var(--accent) 4%,transparent)}.project-card__index[_ngcontent-%COMP%]{color:var(--accent);font-family:var(--font-mono);font-size:.75rem;font-weight:700}.project-card__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 .25rem;color:var(--accent-secondary);font-family:var(--font-mono);font-size:.65rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase}.project-card__title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1.1rem}.project-card__chevron[_ngcontent-%COMP%]{display:grid;place-items:center;width:30px;height:30px;border:1px solid var(--line);border-radius:50%;color:var(--accent);transition:border-color .2s,background .2s,transform .3s}.project-card__chevron--open[_ngcontent-%COMP%]{transform:rotate(180deg);border-color:var(--accent);background:var(--accent-soft)}.project-card__body[_ngcontent-%COMP%]{padding:0 1.5rem 1.5rem 4rem;border-top:1px solid var(--line)}.project-card__details[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1fr) minmax(13rem,.42fr);gap:clamp(1.5rem,4vw,3.5rem);padding-top:1.25rem}.project-card__label[_ngcontent-%COMP%]{margin:0 0 .75rem;color:var(--accent-secondary);font-family:var(--font-mono);font-size:.64rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase}.project-card__contributions[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:grid;gap:.7rem;margin:0;padding:0;list-style:none}.project-card__contributions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;margin:0;padding-left:1.35rem;color:var(--muted);font-size:.9rem;line-height:1.55}.project-card__contributions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{position:absolute;top:.08em;left:0;color:var(--accent);content:"\\21b3";font-family:var(--font-mono);font-weight:700}.project-card__tech[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.4rem;align-content:flex-start}.project-card__tech[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:.3rem .65rem;border:1px solid var(--line);border-radius:6px;background:color-mix(in srgb,var(--accent) 6%,transparent);color:var(--accent);font-family:var(--font-mono);font-size:.65rem;font-weight:600}@media(max-width:768px){.approach-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.project-card__body[_ngcontent-%COMP%]{padding-left:1.5rem}.project-card__details[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:1.25rem}}']})}}return n})();var Iy=["host"],t7=(n,e)=>e.title,ky=(n,e)=>e.label;function Dy(n,e){if(n&1){let t=Ie();t1(0,"button",15),ke("click",function(){let a=Pe(t).$implicit,r=b2();return Re(r.filterGroup(a.title))}),X(1),a1()}if(n&2){let t=e.$implicit,i=b2();X3("filter-chip--active",i.selectedGroup()===t.title),Y2("aria-pressed",i.selectedGroup()===t.title),J(),T2(" ",t.title," ")}}function Fy(n,e){if(n&1&&(t1(0,"span",20),X(1),a1()),n&2){let t=e.$implicit;J(),O1(t)}}function Oy(n,e){if(n&1&&(t1(0,"article",16)(1,"h3"),K2(2,"span",17),X(3),a1(),t1(4,"p",18),X(5),a1(),t1(6,"div",19),p2(7,Fy,2,1,"span",20,_e),a1()()),n&2){let t=e.$implicit,i=b2();X3("toolbox-card--active",i.isActive(t.title)),u4("id",i.cardId(t.title)),Y2("aria-current",i.isActive(t.title)?"true":null),J(3),T2(" ",t.title," "),J(),X3("toolbox-card__subtitle--visible",i.isActive(t.title)),Y2("aria-hidden",!i.isActive(t.title)),J(),T2(" ",t.subtitle," "),J(2),m2(t.items)}}function Uy(n,e){if(n&1&&(t1(0,"div",22)(1,"span",23),X(2),a1(),t1(3,"span",24),X(4),a1()()),n&2){let t=e.$implicit;J(2),O1(t.label),J(2),O1(t.date)}}function By(n,e){if(n&1&&(t1(0,"article",14)(1,"h3")(2,"span",21),X(3),a1(),X(4),a1(),p2(5,Uy,5,2,"div",22,ky),a1()),n&2){let t=e.$implicit;J(3),T2(" ",t.title==="Certifications"?"\u{1F3C5}":"\u{1F393}"," "),J(),T2(" ",t.title," "),J(),m2(t.items)}}var wu=(()=>{class n{constructor(){this.toolGroups=Kn,this.credentialGroups=Jn,this.selectedGroup=h3(null),this.gsapScroll=Z1(l4),this.lenis=Z1(Y4),this.gsapCtx=null,E4(()=>{this.gsapCtx=this.gsapScroll.createContext(this.hostRef.nativeElement,()=>{this.gsapScroll.reveal(".skills-section .section-header",{y:28}),this.gsapScroll.reveal(".filter-chip",{stagger:.05,y:16}),this.gsapScroll.revealY(".toolbox-card",{stagger:.08,y:28}),this.gsapScroll.reveal(".credentials-card",{stagger:.1,y:30})})})}ngOnDestroy(){this.gsapCtx?.revert()}filterGroup(t){let i=this.selectedGroup()!==t;this.selectedGroup.update(a=>a===t?null:t),i&&this.scrollToActiveCard(t)}cardId(t){return`toolbox-${t.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}`}scrollToActiveCard(t){let i=document.getElementById(this.cardId(t)),a=this.hostRef.nativeElement.querySelector(".skills-section"),r=a?.querySelector(".skills-filters");if(!i||!(a instanceof HTMLElement)||!(r instanceof HTMLElement)||this.isCardVisibleBelowFilters(i,r))return;let s=88,c=16,o=window.innerHeight,l=this.lenis.getScrollPosition(),f=a.getBoundingClientRect().top+l,h=f+a.offsetHeight,u=f-s,d=Math.max(u,h-o),p=a.querySelector(".section-header"),v=p instanceof HTMLElement?p.offsetHeight+16:0,m=s+v+r.offsetHeight+c,g=i.getBoundingClientRect(),x=g.top+l,y=x+g.height,M=l,b=r.getBoundingClientRect().top;(b<s-24||b>s+100)&&(M=u);let L=x-M;y-M>o-c?M=Math.min(y-o+c,d):L<m&&(M=Math.max(x-m,u)),M=Math.min(Math.max(M,u),d),!(Math.abs(M-l)<12)&&this.lenis.scrollTo(M)}isCardVisibleBelowFilters(t,i){let a=i.getBoundingClientRect().bottom,r=t.getBoundingClientRect(),s=window.innerHeight;return r.top>=a-8&&r.bottom>a&&r.top<s}isActive(t){return this.selectedGroup()===t}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=q2({type:n,selectors:[["app-skills-constellation"]],viewQuery:function(i,a){if(i&1&&e4(Iy,7),i&2){let r;xe(r=ze())&&(a.hostRef=r.first)}},decls:39,vars:0,consts:[["host",""],[1,"skills-host"],["id","skills",1,"skills-section"],[1,"section-rule"],[1,"section-header","section-header--split"],[1,"section-kicker"],[1,"section-header__lead","section-header__lead--accent"],[1,"skills-filters"],["type","button",1,"filter-chip",3,"filter-chip--active"],[1,"toolbox-grid"],[1,"toolbox-card","glow-card",3,"id","toolbox-card--active"],[1,"credentials-section"],[1,"section-header"],[1,"credentials-list"],[1,"credentials-card","glow-card"],["type","button",1,"filter-chip",3,"click"],[1,"toolbox-card","glow-card",3,"id"],["aria-hidden","true",1,"toolbox-card__dot"],[1,"toolbox-card__subtitle"],[1,"chip-wrap"],[1,"chip"],["aria-hidden","true",1,"credentials-card__badge"],[1,"credentials-card__item"],[1,"credentials-card__label"],[1,"credentials-card__date"]],template:function(i,a){i&1&&(t1(0,"div",1,0)(2,"section",2),K2(3,"hr",3),t1(4,"header",4)(5,"div")(6,"p",5),X(7,"Capabilities"),a1(),t1(8,"h2"),X(9,"Expertise and "),t1(10,"em"),X(11,"tooling"),a1(),X(12,"."),a1()(),t1(13,"p",6),X(14," Filter by domain."),K2(15,"br"),X(16," Focus on one specialty."),K2(17,"br"),t1(18,"em"),X(19,"Technical and security"),a1(),X(20," practice. "),a1()(),t1(21,"div",7),p2(22,Dy,2,4,"button",8,t7),a1(),t1(24,"div",9),p2(25,Oy,9,9,"article",10,t7),a1()(),t1(27,"section",11)(28,"header",12)(29,"p",5),X(30,"Credentials"),a1(),t1(31,"h2"),X(32,"Education and "),t1(33,"em"),X(34,"certifications"),a1(),X(35,"."),a1()(),t1(36,"div",13),p2(37,By,7,2,"article",14,t7),a1()()()),i&2&&(J(22),m2(a.toolGroups),J(3),m2(a.toolGroups),J(12),m2(a.credentialGroups))},styles:['@charset "UTF-8";.skills-host[_ngcontent-%COMP%]{display:block}.skills-section[_ngcontent-%COMP%], .credentials-section[_ngcontent-%COMP%]{padding:var(--section-pad) 0;scroll-margin-top:6rem;overflow:visible;isolation:isolate;contain:paint}.skills-filters[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:2rem}.filter-chip[_ngcontent-%COMP%]{padding:.4rem .9rem;border:1px solid var(--line);border-radius:999px;background:color-mix(in srgb,var(--surface) 40%,transparent);color:var(--muted);font-size:.72rem;font-weight:600;cursor:pointer;transition:border-color .2s,color .2s,box-shadow .2s,background-color .2s}.filter-chip[_ngcontent-%COMP%]:hover, .filter-chip--active[_ngcontent-%COMP%]{border-color:var(--accent);background:var(--accent-soft);color:var(--accent);box-shadow:0 0 12px color-mix(in srgb,var(--accent) 20%,transparent)}.toolbox-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem;overflow:visible}.toolbox-card[_ngcontent-%COMP%]{padding:1.35rem;scroll-margin-top:6rem}.toolbox-card--active[_ngcontent-%COMP%]{border-color:color-mix(in srgb,var(--accent) 45%,transparent);box-shadow:0 0 28px color-mix(in srgb,var(--accent) 18%,transparent),inset 0 1px color-mix(in srgb,var(--accent) 12%,transparent);transform:translate3d(0,-2px,0);will-change:transform;backface-visibility:hidden}.toolbox-card--active[_ngcontent-%COMP%]:before{opacity:1}.toolbox-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;margin:0 0 .85rem;font-size:.9rem;transition:color .3s ease}.toolbox-card--active[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:.4rem;color:var(--ink)}.toolbox-card__subtitle[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.45rem;max-height:0;margin:0;padding-left:calc(6px + .5rem);overflow:hidden;opacity:0;transform:translateY(-4px);color:var(--accent);font-family:var(--font-mono);font-size:.68rem;font-weight:600;letter-spacing:.04em;line-height:1.45;transition:max-height .42s cubic-bezier(.22,1,.36,1),opacity .32s ease,transform .38s cubic-bezier(.22,1,.36,1),margin .38s cubic-bezier(.22,1,.36,1)}.toolbox-card__subtitle[_ngcontent-%COMP%]:before{content:"\\25b8";flex-shrink:0;color:var(--accent-secondary);font-size:.62rem;opacity:0;transform:translate(-4px);transition:opacity .28s ease .08s,transform .32s cubic-bezier(.22,1,.36,1) .08s}.toolbox-card__subtitle--visible[_ngcontent-%COMP%]{max-height:4rem;margin:0 0 .85rem;opacity:1;transform:translateY(0)}.toolbox-card__subtitle--visible[_ngcontent-%COMP%]:before{opacity:1;transform:translate(0)}.toolbox-card__dot[_ngcontent-%COMP%]{width:6px;height:6px;border-radius:50%;background:var(--accent);box-shadow:0 0 6px var(--accent)}.chip-wrap[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.4rem}.chip[_ngcontent-%COMP%]{padding:.3rem .65rem;border-radius:6px;border:1px solid color-mix(in srgb,var(--accent) 15%,transparent);background:color-mix(in srgb,var(--accent) 8%,transparent);color:var(--accent);font-family:var(--font-mono);font-size:.68rem;font-weight:600;transition:background .2s,border-color .2s}.chip[_ngcontent-%COMP%]:hover{background:color-mix(in srgb,var(--accent) 15%,transparent);border-color:var(--accent)}.credentials-list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem}.credentials-card[_ngcontent-%COMP%]{padding:1.35rem}.credentials-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;margin:0 0 .75rem;font-size:1rem}.credentials-card__badge[_ngcontent-%COMP%]{font-size:1.1rem}.credentials-card__item[_ngcontent-%COMP%]{display:grid;gap:.25rem;padding:.85rem 0;border-top:1px solid var(--line)}.credentials-card__label[_ngcontent-%COMP%]{color:var(--ink-soft);font-size:.85rem;line-height:1.5}.credentials-card__date[_ngcontent-%COMP%]{color:var(--muted);font-family:var(--font-mono);font-size:.68rem}@media(max-width:700px){.toolbox-grid[_ngcontent-%COMP%], .credentials-list[_ngcontent-%COMP%]{grid-template-columns:1fr}}']})}}return n})();var Tu=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=q2({type:n,selectors:[["app-home"]],decls:5,vars:0,template:function(i,a){i&1&&j2(0,"app-hero-3d")(1,"app-stats-counter")(2,"app-career-timeline")(3,"app-project-cards")(4,"app-skills-constellation")},dependencies:[yu,bu,Su,Lu,wu],styles:["[_nghost-%COMP%]{display:block}"]})}}return n})();var Eu=[{path:"",component:Tu,title:"R\xE9my Binsztock \u2014 Senior Full-Stack Developer"},{path:"terminal",loadComponent:()=>import("./chunk-LOWXAV2V.js").then(n=>n.TerminalComponent),title:"Profile Shell \u2014 R\xE9my Binsztock"},{path:"**",redirectTo:""}];var h2=(function(n){return n[n.State=0]="State",n[n.Transition=1]="Transition",n[n.Sequence=2]="Sequence",n[n.Group=3]="Group",n[n.Animate=4]="Animate",n[n.Keyframes=5]="Keyframes",n[n.Style=6]="Style",n[n.Trigger=7]="Trigger",n[n.Reference=8]="Reference",n[n.AnimateChild=9]="AnimateChild",n[n.AnimateRef=10]="AnimateRef",n[n.Query=11]="Query",n[n.Stagger=12]="Stagger",n})(h2||{}),z4="*";function Au(n,e=null){return{type:h2.Sequence,steps:n,options:e}}function i7(n){return{type:h2.Style,styles:n,offset:null}}var M0=class{_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_originalOnDoneFns=[];_originalOnStartFns=[];_started=!1;_destroyed=!1;_finished=!1;_position=0;parentPlayer=null;totalTime;constructor(e=0,t=0){this.totalTime=e+t}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}onStart(e){this._originalOnStartFns.push(e),this._onStartFns.push(e)}onDone(e){this._originalOnDoneFns.push(e),this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(e=>e()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(e){this._position=this.totalTime?e*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(e){let t=e=="start"?this._onStartFns:this._onDoneFns;t.forEach(i=>i()),t.length=0}},j6=class{_onDoneFns=[];_onStartFns=[];_finished=!1;_started=!1;_destroyed=!1;_onDestroyFns=[];parentPlayer=null;totalTime=0;players;constructor(e){this.players=e;let t=0,i=0,a=0,r=this.players.length;r==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(s=>{s.onDone(()=>{++t==r&&this._onFinish()}),s.onDestroy(()=>{++i==r&&this._onDestroy()}),s.onStart(()=>{++a==r&&this._onStart()})}),this.totalTime=this.players.reduce((s,c)=>Math.max(s,c.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this.players.forEach(e=>e.init())}onStart(e){this._onStartFns.push(e)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(e=>e()),this._onStartFns=[])}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(e=>e.play())}pause(){this.players.forEach(e=>e.pause())}restart(){this.players.forEach(e=>e.restart())}finish(){this._onFinish(),this.players.forEach(e=>e.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(e=>e.destroy()),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this.players.forEach(e=>e.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(e){let t=e*this.totalTime;this.players.forEach(i=>{let a=i.totalTime?Math.min(1,t/i.totalTime):1;i.setPosition(a)})}getPosition(){let e=this.players.reduce((t,i)=>t===null||i.totalTime>t.totalTime?i:t,null);return e!=null?e.getPosition():0}beforeDestroy(){this.players.forEach(e=>{e.beforeDestroy&&e.beforeDestroy()})}triggerCallback(e){let t=e=="start"?this._onStartFns:this._onDoneFns;t.forEach(i=>i()),t.length=0}},Ln="!";function Nu(n){return new w2(3e3,!1)}function Hy(){return new w2(3100,!1)}function Vy(){return new w2(3101,!1)}function Gy(n){return new w2(3001,!1)}function Wy(n){return new w2(3003,!1)}function qy(n){return new w2(3004,!1)}function Ru(n,e){return new w2(3005,!1)}function Iu(){return new w2(3006,!1)}function ku(){return new w2(3007,!1)}function Du(n,e){return new w2(3008,!1)}function Fu(n){return new w2(3002,!1)}function Ou(n,e,t,i,a){return new w2(3010,!1)}function Uu(){return new w2(3011,!1)}function Bu(){return new w2(3012,!1)}function Hu(){return new w2(3200,!1)}function Vu(){return new w2(3202,!1)}function Gu(){return new w2(3013,!1)}function Wu(n){return new w2(3014,!1)}function qu(n){return new w2(3015,!1)}function Xu(n){return new w2(3016,!1)}function Yu(n,e){return new w2(3404,!1)}function Xy(n){return new w2(3502,!1)}function $u(n){return new w2(3503,!1)}function ju(){return new w2(3300,!1)}function Ku(n){return new w2(3504,!1)}function Ju(n){return new w2(3301,!1)}function Zu(n,e){return new w2(3302,!1)}function Qu(n){return new w2(3303,!1)}function eh(n,e){return new w2(3400,!1)}function th(n){return new w2(3401,!1)}function ih(n){return new w2(3402,!1)}function nh(n,e){return new w2(3505,!1)}function _0(n){switch(n.length){case 0:return new M0;case 1:return n[0];default:return new j6(n)}}function s7(n,e,t=new Map,i=new Map){let a=[],r=[],s=-1,c=null;if(e.forEach(o=>{let l=o.get("offset"),f=l==s,h=f&&c||new Map;o.forEach((u,d)=>{let p=d,v=u;if(d!=="offset")switch(p=n.normalizePropertyName(p,a),v){case Ln:v=t.get(d);break;case z4:v=i.get(d);break;default:v=n.normalizeStyleValue(d,p,v,a);break}h.set(p,v)}),f||r.push(h),c=h,s=l}),a.length)throw Xy(a);return r}function I5(n,e,t,i){switch(e){case"start":n.onStart(()=>i(t&&n7(t,"start",n)));break;case"done":n.onDone(()=>i(t&&n7(t,"done",n)));break;case"destroy":n.onDestroy(()=>i(t&&n7(t,"destroy",n)));break}}function n7(n,e,t){let i=t.totalTime,a=!!t.disabled,r=k5(n.element,n.triggerName,n.fromState,n.toState,e||n.phaseName,i??n.totalTime,a),s=n._data;return s!=null&&(r._data=s),r}function k5(n,e,t,i,a="",r=0,s){return{element:n,triggerName:e,fromState:t,toState:i,phaseName:a,totalTime:r,disabled:!!s}}function Te(n,e,t){let i=n.get(e);return i||n.set(e,i=t),i}function c7(n){let e=n.indexOf(":"),t=n.substring(1,e),i=n.slice(e+1);return[t,i]}var Yy=typeof document>"u"?null:document.documentElement;function D5(n){let e=n.parentNode||n.host||null;return e===Yy?null:e}function $y(n){return n.substring(1,6)=="ebkit"}var qt=null,Pu=!1;function ah(n){qt||(qt=jy()||{},Pu=qt.style?"WebkitAppearance"in qt.style:!1);let e=!0;return qt.style&&!$y(n)&&(e=n in qt.style,!e&&Pu&&(e="Webkit"+n.charAt(0).toUpperCase()+n.slice(1)in qt.style)),e}function jy(){return typeof document<"u"?document.body:null}function o7(n,e){for(;e;){if(e===n)return!0;e=D5(e)}return!1}function l7(n,e,t){if(t)return Array.from(n.querySelectorAll(e));let i=n.querySelector(e);return i?[i]:[]}var Ky=1e3,f7="{{",Jy="}}",u7="ng-enter",F5="ng-leave",wn="ng-trigger",Tn=".ng-trigger",h7="ng-animating",O5=".ng-animating";function $4(n){if(typeof n=="number")return n;let e=n.match(/^(-?[\.\d]+)(m?s)/);return!e||e.length<2?0:a7(parseFloat(e[1]),e[2])}function a7(n,e){return e==="s"?n*Ky:n}function En(n,e,t){return n.hasOwnProperty("duration")?n:Qy(n,e,t)}var Zy=/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;function Qy(n,e,t){let i,a=0,r="";if(typeof n=="string"){let s=n.match(Zy);if(s===null)return e.push(Nu(n)),{duration:0,delay:0,easing:""};i=a7(parseFloat(s[1]),s[2]);let c=s[3];c!=null&&(a=a7(parseFloat(c),s[4]));let o=s[5];o&&(r=o)}else i=n;if(!t){let s=!1,c=e.length;i<0&&(e.push(Hy()),s=!0),a<0&&(e.push(Vy()),s=!0),s&&e.splice(c,0,Nu(n))}return{duration:i,delay:a,easing:r}}function rh(n){return n.length?n[0]instanceof Map?n:n.map(e=>new Map(Object.entries(e))):[]}function y4(n,e,t){e.forEach((i,a)=>{let r=U5(a);t&&!t.has(a)&&t.set(a,n.style[r]),n.style[r]=i})}function at(n,e){e.forEach((t,i)=>{let a=U5(i);n.style[a]=""})}function K6(n){return Array.isArray(n)?n.length==1?n[0]:Au(n):n}function sh(n,e,t){let i=e.params||{},a=d7(n);a.length&&a.forEach(r=>{i.hasOwnProperty(r)||t.push(Gy(r))})}var r7=new RegExp(`${f7}\\s*(.+?)\\s*${Jy}`,"g");function d7(n){let e=[];if(typeof n=="string"){let t;for(;t=r7.exec(n);)e.push(t[1]);r7.lastIndex=0}return e}function J6(n,e,t){let i=`${n}`,a=i.replace(r7,(r,s)=>{let c=e[s];return c==null&&(t.push(Wy(s)),c=""),c.toString()});return a==i?n:a}var eb=/-+([a-z0-9])/g;function U5(n){return n.replace(eb,(...e)=>e[1].toUpperCase())}function ch(n,e){return n===0||e===0}function oh(n,e,t){if(t.size&&e.length){let i=e[0],a=[];if(t.forEach((r,s)=>{i.has(s)||a.push(s),i.set(s,r)}),a.length)for(let r=1;r<e.length;r++){let s=e[r];a.forEach(c=>s.set(c,B5(n,c)))}}return e}function Ee(n,e,t){switch(e.type){case h2.Trigger:return n.visitTrigger(e,t);case h2.State:return n.visitState(e,t);case h2.Transition:return n.visitTransition(e,t);case h2.Sequence:return n.visitSequence(e,t);case h2.Group:return n.visitGroup(e,t);case h2.Animate:return n.visitAnimate(e,t);case h2.Keyframes:return n.visitKeyframes(e,t);case h2.Style:return n.visitStyle(e,t);case h2.Reference:return n.visitReference(e,t);case h2.AnimateChild:return n.visitAnimateChild(e,t);case h2.AnimateRef:return n.visitAnimateRef(e,t);case h2.Query:return n.visitQuery(e,t);case h2.Stagger:return n.visitStagger(e,t);default:throw qy(e.type)}}function B5(n,e){return window.getComputedStyle(n)[e]}var A7=(()=>{class n{validateStyleProperty(t){return ah(t)}containsElement(t,i){return o7(t,i)}getParentElement(t){return D5(t)}query(t,i,a){return l7(t,i,a)}computeStyle(t,i,a){return a||""}animate(t,i,a,r,s,c=[],o){return new M0(a,r)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=R3({token:n,factory:n.\u0275fac})}return n})(),Yt=class{static NOOP=new A7},$t=class{};var tb=new Set(["width","height","minWidth","minHeight","maxWidth","maxHeight","left","top","bottom","right","fontSize","outlineWidth","outlineOffset","paddingTop","paddingLeft","paddingBottom","paddingRight","marginTop","marginLeft","marginBottom","marginRight","borderRadius","borderWidth","borderTopWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","textIndent","perspective"]),q5=class extends $t{normalizePropertyName(e,t){return U5(e)}normalizeStyleValue(e,t,i,a){let r="",s=i.toString().trim();if(tb.has(t)&&i!==0&&i!=="0")if(typeof i=="number")r="px";else{let c=i.match(/^[+-]?[\d\.]+([a-z]*)$/);c&&c[1].length==0&&a.push(Ru(e,i))}return s+r}};var X5="*";function ib(n,e){let t=[];return typeof n=="string"?n.split(/\s*,\s*/).forEach(i=>nb(i,t,e)):t.push(n),t}function nb(n,e,t){if(n[0]==":"){let o=ab(n,t);if(typeof o=="function"){e.push(o);return}n=o}let i=n.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(i==null||i.length<4)return t.push(qu(n)),e;let a=i[1],r=i[2],s=i[3];e.push(lh(a,s));let c=a==X5&&s==X5;r[0]=="<"&&!c&&e.push(lh(s,a))}function ab(n,e){switch(n){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(t,i)=>parseFloat(i)>parseFloat(t);case":decrement":return(t,i)=>parseFloat(i)<parseFloat(t);default:return e.push(Xu(n)),"* => *"}}var H5=new Set(["true","1"]),V5=new Set(["false","0"]);function lh(n,e){let t=H5.has(n)||V5.has(n),i=H5.has(e)||V5.has(e);return(a,r)=>{let s=n==X5||n==a,c=e==X5||e==r;return!s&&t&&typeof a=="boolean"&&(s=a?H5.has(n):V5.has(n)),!c&&i&&typeof r=="boolean"&&(c=r?H5.has(e):V5.has(e)),s&&c}}var _h=":self",rb=new RegExp(`s*${_h}s*,?`,"g");function xh(n,e,t,i){return new _7(n).build(e,t,i)}var fh="",_7=class{_driver;constructor(e){this._driver=e}build(e,t,i){let a=new x7(t);return this._resetContextStyleTimingState(a),Ee(this,K6(e),a)}_resetContextStyleTimingState(e){e.currentQuerySelector=fh,e.collectedStyles=new Map,e.collectedStyles.set(fh,new Map),e.currentTime=0}visitTrigger(e,t){let i=t.queryCount=0,a=t.depCount=0,r=[],s=[];return e.name.charAt(0)=="@"&&t.errors.push(Iu()),e.definitions.forEach(c=>{if(this._resetContextStyleTimingState(t),c.type==h2.State){let o=c,l=o.name;l.toString().split(/\s*,\s*/).forEach(f=>{o.name=f,r.push(this.visitState(o,t))}),o.name=l}else if(c.type==h2.Transition){let o=this.visitTransition(c,t);i+=o.queryCount,a+=o.depCount,s.push(o)}else t.errors.push(ku())}),{type:h2.Trigger,name:e.name,states:r,transitions:s,queryCount:i,depCount:a,options:null}}visitState(e,t){let i=this.visitStyle(e.styles,t),a=e.options&&e.options.params||null;if(i.containsDynamicStyles){let r=new Set,s=a||{};i.styles.forEach(c=>{c instanceof Map&&c.forEach(o=>{d7(o).forEach(l=>{s.hasOwnProperty(l)||r.add(l)})})}),r.size&&t.errors.push(Du(e.name,[...r.values()]))}return{type:h2.State,name:e.name,style:i,options:a?{params:a}:null}}visitTransition(e,t){t.queryCount=0,t.depCount=0;let i=Ee(this,K6(e.animation),t),a=ib(e.expr,t.errors);return{type:h2.Transition,matchers:a,animation:i,queryCount:t.queryCount,depCount:t.depCount,options:Xt(e.options)}}visitSequence(e,t){return{type:h2.Sequence,steps:e.steps.map(i=>Ee(this,i,t)),options:Xt(e.options)}}visitGroup(e,t){let i=t.currentTime,a=0,r=e.steps.map(s=>{t.currentTime=i;let c=Ee(this,s,t);return a=Math.max(a,t.currentTime),c});return t.currentTime=a,{type:h2.Group,steps:r,options:Xt(e.options)}}visitAnimate(e,t){let i=lb(e.timings,t.errors);t.currentAnimateTimings=i;let a,r=e.styles?e.styles:i7({});if(r.type==h2.Keyframes)a=this.visitKeyframes(r,t);else{let s=e.styles,c=!1;if(!s){c=!0;let l={};i.easing&&(l.easing=i.easing),s=i7(l)}t.currentTime+=i.duration+i.delay;let o=this.visitStyle(s,t);o.isEmptyStep=c,a=o}return t.currentAnimateTimings=null,{type:h2.Animate,timings:i,style:a,options:null}}visitStyle(e,t){let i=this._makeStyleAst(e,t);return this._validateStyleAst(i,t),i}_makeStyleAst(e,t){let i=[],a=Array.isArray(e.styles)?e.styles:[e.styles];for(let c of a)typeof c=="string"?c===z4?i.push(c):t.errors.push(Fu(c)):i.push(new Map(Object.entries(c)));let r=!1,s=null;return i.forEach(c=>{if(c instanceof Map&&(c.has("easing")&&(s=c.get("easing"),c.delete("easing")),!r)){for(let o of c.values())if(o.toString().indexOf(f7)>=0){r=!0;break}}}),{type:h2.Style,styles:i,easing:s,offset:e.offset,containsDynamicStyles:r,options:null}}_validateStyleAst(e,t){let i=t.currentAnimateTimings,a=t.currentTime,r=t.currentTime;i&&r>0&&(r-=i.duration+i.delay),e.styles.forEach(s=>{typeof s!="string"&&s.forEach((c,o)=>{let l=t.collectedStyles.get(t.currentQuerySelector),f=l.get(o),h=!0;f&&(r!=a&&r>=f.startTime&&a<=f.endTime&&(t.errors.push(Ou(o,f.startTime,f.endTime,r,a)),h=!1),r=f.startTime),h&&l.set(o,{startTime:r,endTime:a}),t.options&&sh(c,t.options,t.errors)})})}visitKeyframes(e,t){let i={type:h2.Keyframes,styles:[],options:null};if(!t.currentAnimateTimings)return t.errors.push(Uu()),i;let a=1,r=0,s=[],c=!1,o=!1,l=0,f=e.steps.map(g=>{let x=this._makeStyleAst(g,t),y=x.offset!=null?x.offset:ob(x.styles),M=0;return y!=null&&(r++,M=x.offset=y),o=o||M<0||M>1,c=c||M<l,l=M,s.push(M),x});o&&t.errors.push(Bu()),c&&t.errors.push(Hu());let h=e.steps.length,u=0;r>0&&r<h?t.errors.push(Vu()):r==0&&(u=a/(h-1));let d=h-1,p=t.currentTime,v=t.currentAnimateTimings,m=v.duration;return f.forEach((g,x)=>{let y=u>0?x==d?1:u*x:s[x],M=y*m;t.currentTime=p+v.delay+M,v.duration=M,this._validateStyleAst(g,t),g.offset=y,i.styles.push(g)}),i}visitReference(e,t){return{type:h2.Reference,animation:Ee(this,K6(e.animation),t),options:Xt(e.options)}}visitAnimateChild(e,t){return t.depCount++,{type:h2.AnimateChild,options:Xt(e.options)}}visitAnimateRef(e,t){return{type:h2.AnimateRef,animation:this.visitReference(e.animation,t),options:Xt(e.options)}}visitQuery(e,t){let i=t.currentQuerySelector,a=e.options||{};t.queryCount++,t.currentQuery=e;let[r,s]=sb(e.selector);t.currentQuerySelector=i.length?i+" "+r:r,Te(t.collectedStyles,t.currentQuerySelector,new Map);let c=Ee(this,K6(e.animation),t);return t.currentQuery=null,t.currentQuerySelector=i,{type:h2.Query,selector:r,limit:a.limit||0,optional:!!a.optional,includeSelf:s,animation:c,originalSelector:e.selector,options:Xt(e.options)}}visitStagger(e,t){t.currentQuery||t.errors.push(Gu());let i=e.timings==="full"?{duration:0,delay:0,easing:"full"}:En(e.timings,t.errors,!0);return{type:h2.Stagger,animation:Ee(this,K6(e.animation),t),timings:i,options:null}}};function sb(n){let e=!!n.split(/\s*,\s*/).find(t=>t==_h);return e&&(n=n.replace(rb,"")),n=n.replace(/@\*/g,Tn).replace(/@\w+/g,t=>Tn+"-"+t.slice(1)).replace(/:animating/g,O5),[n,e]}function cb(n){return n?Ne({},n):null}var x7=class{errors;queryCount=0;depCount=0;currentTransition=null;currentQuery=null;currentQuerySelector=null;currentAnimateTimings=null;currentTime=0;collectedStyles=new Map;options=null;unsupportedCSSPropertiesFound=new Set;constructor(e){this.errors=e}};function ob(n){if(typeof n=="string")return null;let e=null;if(Array.isArray(n))n.forEach(t=>{if(t instanceof Map&&t.has("offset")){let i=t;e=parseFloat(i.get("offset")),i.delete("offset")}});else if(n instanceof Map&&n.has("offset")){let t=n;e=parseFloat(t.get("offset")),t.delete("offset")}return e}function lb(n,e){if(n.hasOwnProperty("duration"))return n;if(typeof n=="number"){let r=En(n,e).duration;return p7(r,0,"")}let t=n;if(t.split(/\s+/).some(r=>r.charAt(0)=="{"&&r.charAt(1)=="{")){let r=p7(0,0,"");return r.dynamic=!0,r.strValue=t,r}let a=En(t,e);return p7(a.duration,a.delay,a.easing)}function Xt(n){return n?(n=Ne({},n),n.params&&(n.params=cb(n.params))):n={},n}function p7(n,e,t){return{duration:n,delay:e,easing:t}}function N7(n,e,t,i,a,r,s=null,c=!1){return{type:1,element:n,keyframes:e,preStyleProps:t,postStyleProps:i,duration:a,delay:r,totalTime:a+r,easing:s,subTimeline:c}}var Nn=class{_map=new Map;get(e){return this._map.get(e)||[]}append(e,t){let i=this._map.get(e);i||this._map.set(e,i=[]),i.push(...t)}has(e){return this._map.has(e)}clear(){this._map.clear()}},fb=1,ub=":enter",hb=new RegExp(ub,"g"),db=":leave",pb=new RegExp(db,"g");function zh(n,e,t,i,a,r=new Map,s=new Map,c,o,l=[]){return new z7().buildKeyframes(n,e,t,i,a,r,s,c,o,l)}var z7=class{buildKeyframes(e,t,i,a,r,s,c,o,l,f=[]){l=l||new Nn;let h=new y7(e,t,l,a,r,f,[]);h.options=o;let u=o.delay?$4(o.delay):0;h.currentTimeline.delayNextStep(u),h.currentTimeline.setStyles([s],null,h.errors,o),Ee(this,i,h);let d=h.timelines.filter(p=>p.containsAnimation());if(d.length&&c.size){let p;for(let v=d.length-1;v>=0;v--){let m=d[v];if(m.element===t){p=m;break}}p&&!p.allowOnlyTimelineStyles()&&p.setStyles([c],null,h.errors,o)}return d.length?d.map(p=>p.buildKeyframes()):[N7(t,[],[],[],0,u,"",!1)]}visitTrigger(e,t){}visitState(e,t){}visitTransition(e,t){}visitAnimateChild(e,t){let i=t.subInstructions.get(t.element);if(i){let a=t.createSubContext(e.options),r=t.currentTimeline.currentTime,s=this._visitSubInstructions(i,a,a.options);r!=s&&t.transformIntoNewTimeline(s)}t.previousNode=e}visitAnimateRef(e,t){let i=t.createSubContext(e.options);i.transformIntoNewTimeline(),this._applyAnimationRefDelays([e.options,e.animation.options],t,i),this.visitReference(e.animation,i),t.transformIntoNewTimeline(i.currentTimeline.currentTime),t.previousNode=e}_applyAnimationRefDelays(e,t,i){for(let a of e){let r=a?.delay;if(r){let s=typeof r=="number"?r:$4(J6(r,a?.params??{},t.errors));i.delayNextStep(s)}}}_visitSubInstructions(e,t,i){let r=t.currentTimeline.currentTime,s=i.duration!=null?$4(i.duration):null,c=i.delay!=null?$4(i.delay):null;return s!==0&&e.forEach(o=>{let l=t.appendInstructionToTimeline(o,s,c);r=Math.max(r,l.duration+l.delay)}),r}visitReference(e,t){t.updateOptions(e.options,!0),Ee(this,e.animation,t),t.previousNode=e}visitSequence(e,t){let i=t.subContextCount,a=t,r=e.options;if(r&&(r.params||r.delay)&&(a=t.createSubContext(r),a.transformIntoNewTimeline(),r.delay!=null)){a.previousNode.type==h2.Style&&(a.currentTimeline.snapshotCurrentStyles(),a.previousNode=Y5);let s=$4(r.delay);a.delayNextStep(s)}e.steps.length&&(e.steps.forEach(s=>Ee(this,s,a)),a.currentTimeline.applyStylesToKeyframe(),a.subContextCount>i&&a.transformIntoNewTimeline()),t.previousNode=e}visitGroup(e,t){let i=[],a=t.currentTimeline.currentTime,r=e.options&&e.options.delay?$4(e.options.delay):0;e.steps.forEach(s=>{let c=t.createSubContext(e.options);r&&c.delayNextStep(r),Ee(this,s,c),a=Math.max(a,c.currentTimeline.currentTime),i.push(c.currentTimeline)}),i.forEach(s=>t.currentTimeline.mergeTimelineCollectedStyles(s)),t.transformIntoNewTimeline(a),t.previousNode=e}_visitTiming(e,t){if(e.dynamic){let i=e.strValue,a=t.params?J6(i,t.params,t.errors):i;return En(a,t.errors)}else return{duration:e.duration,delay:e.delay,easing:e.easing}}visitAnimate(e,t){let i=t.currentAnimateTimings=this._visitTiming(e.timings,t),a=t.currentTimeline;i.delay&&(t.incrementTime(i.delay),a.snapshotCurrentStyles());let r=e.style;r.type==h2.Keyframes?this.visitKeyframes(r,t):(t.incrementTime(i.duration),this.visitStyle(r,t),a.applyStylesToKeyframe()),t.currentAnimateTimings=null,t.previousNode=e}visitStyle(e,t){let i=t.currentTimeline,a=t.currentAnimateTimings;!a&&i.hasCurrentStyleProperties()&&i.forwardFrame();let r=a&&a.easing||e.easing;e.isEmptyStep?i.applyEmptyStep(r):i.setStyles(e.styles,r,t.errors,t.options),t.previousNode=e}visitKeyframes(e,t){let i=t.currentAnimateTimings,a=t.currentTimeline.duration,r=i.duration,c=t.createSubContext().currentTimeline;c.easing=i.easing,e.styles.forEach(o=>{let l=o.offset||0;c.forwardTime(l*r),c.setStyles(o.styles,o.easing,t.errors,t.options),c.applyStylesToKeyframe()}),t.currentTimeline.mergeTimelineCollectedStyles(c),t.transformIntoNewTimeline(a+r),t.previousNode=e}visitQuery(e,t){let i=t.currentTimeline.currentTime,a=e.options||{},r=a.delay?$4(a.delay):0;r&&(t.previousNode.type===h2.Style||i==0&&t.currentTimeline.hasCurrentStyleProperties())&&(t.currentTimeline.snapshotCurrentStyles(),t.previousNode=Y5);let s=i,c=t.invokeQuery(e.selector,e.originalSelector,e.limit,e.includeSelf,!!a.optional,t.errors);t.currentQueryTotal=c.length;let o=null;c.forEach((l,f)=>{t.currentQueryIndex=f;let h=t.createSubContext(e.options,l);r&&h.delayNextStep(r),l===t.element&&(o=h.currentTimeline),Ee(this,e.animation,h),h.currentTimeline.applyStylesToKeyframe();let u=h.currentTimeline.currentTime;s=Math.max(s,u)}),t.currentQueryIndex=0,t.currentQueryTotal=0,t.transformIntoNewTimeline(s),o&&(t.currentTimeline.mergeTimelineCollectedStyles(o),t.currentTimeline.snapshotCurrentStyles()),t.previousNode=e}visitStagger(e,t){let i=t.parentContext,a=t.currentTimeline,r=e.timings,s=Math.abs(r.duration),c=s*(t.currentQueryTotal-1),o=s*t.currentQueryIndex;switch(r.duration<0?"reverse":r.easing){case"reverse":o=c-o;break;case"full":o=i.currentStaggerTime;break}let f=t.currentTimeline;o&&f.delayNextStep(o);let h=f.currentTime;Ee(this,e.animation,t),t.previousNode=e,i.currentStaggerTime=a.currentTime-h+(a.startTime-i.currentTimeline.startTime)}},Y5={},y7=class n{_driver;element;subInstructions;_enterClassName;_leaveClassName;errors;timelines;parentContext=null;currentTimeline;currentAnimateTimings=null;previousNode=Y5;subContextCount=0;options={};currentQueryIndex=0;currentQueryTotal=0;currentStaggerTime=0;constructor(e,t,i,a,r,s,c,o){this._driver=e,this.element=t,this.subInstructions=i,this._enterClassName=a,this._leaveClassName=r,this.errors=s,this.timelines=c,this.currentTimeline=o||new $5(this._driver,t,0),c.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(e,t){if(!e)return;let i=e,a=this.options;i.duration!=null&&(a.duration=$4(i.duration)),i.delay!=null&&(a.delay=$4(i.delay));let r=i.params;if(r){let s=a.params;s||(s=this.options.params={}),Object.keys(r).forEach(c=>{(!t||!s.hasOwnProperty(c))&&(s[c]=J6(r[c],s,this.errors))})}}_copyOptions(){let e={};if(this.options){let t=this.options.params;if(t){let i=e.params={};Object.keys(t).forEach(a=>{i[a]=t[a]})}}return e}createSubContext(e=null,t,i){let a=t||this.element,r=new n(this._driver,a,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(a,i||0));return r.previousNode=this.previousNode,r.currentAnimateTimings=this.currentAnimateTimings,r.options=this._copyOptions(),r.updateOptions(e),r.currentQueryIndex=this.currentQueryIndex,r.currentQueryTotal=this.currentQueryTotal,r.parentContext=this,this.subContextCount++,r}transformIntoNewTimeline(e){return this.previousNode=Y5,this.currentTimeline=this.currentTimeline.fork(this.element,e),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(e,t,i){let a={duration:t??e.duration,delay:this.currentTimeline.currentTime+(i??0)+e.delay,easing:""},r=new b7(this._driver,e.element,e.keyframes,e.preStyleProps,e.postStyleProps,a,e.stretchStartingKeyframe);return this.timelines.push(r),a}incrementTime(e){this.currentTimeline.forwardTime(this.currentTimeline.duration+e)}delayNextStep(e){e>0&&this.currentTimeline.delayNextStep(e)}invokeQuery(e,t,i,a,r,s){let c=[];if(a&&c.push(this.element),e.length>0){e=e.replace(hb,"."+this._enterClassName),e=e.replace(pb,"."+this._leaveClassName);let o=i!=1,l=this._driver.query(this.element,e,o);i!==0&&(l=i<0?l.slice(l.length+i,l.length):l.slice(0,i)),c.push(...l)}return!r&&c.length==0&&s.push(Wu(t)),c}},$5=class n{_driver;element;startTime;_elementTimelineStylesLookup;duration=0;easing=null;_previousKeyframe=new Map;_currentKeyframe=new Map;_keyframes=new Map;_styleSummary=new Map;_localTimelineStyles=new Map;_globalTimelineStyles;_pendingStyles=new Map;_backFill=new Map;_currentEmptyStepKeyframe=null;constructor(e,t,i,a){this._driver=e,this.element=t,this.startTime=i,this._elementTimelineStylesLookup=a,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(t),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(t,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(e){let t=this._keyframes.size===1&&this._pendingStyles.size;this.duration||t?(this.forwardTime(this.currentTime+e),t&&this.snapshotCurrentStyles()):this.startTime+=e}fork(e,t){return this.applyStylesToKeyframe(),new n(this._driver,e,t||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=fb,this._loadKeyframe()}forwardTime(e){this.applyStylesToKeyframe(),this.duration=e,this._loadKeyframe()}_updateStyle(e,t){this._localTimelineStyles.set(e,t),this._globalTimelineStyles.set(e,t),this._styleSummary.set(e,{time:this.currentTime,value:t})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(e){e&&this._previousKeyframe.set("easing",e);for(let[t,i]of this._globalTimelineStyles)this._backFill.set(t,i||z4),this._currentKeyframe.set(t,z4);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(e,t,i,a){t&&this._previousKeyframe.set("easing",t);let r=a&&a.params||{},s=mb(e,this._globalTimelineStyles);for(let[c,o]of s){let l=J6(o,r,i);this._pendingStyles.set(c,l),this._localTimelineStyles.has(c)||this._backFill.set(c,this._globalTimelineStyles.get(c)??z4),this._updateStyle(c,l)}}applyStylesToKeyframe(){this._pendingStyles.size!=0&&(this._pendingStyles.forEach((e,t)=>{this._currentKeyframe.set(t,e)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((e,t)=>{this._currentKeyframe.has(t)||this._currentKeyframe.set(t,e)}))}snapshotCurrentStyles(){for(let[e,t]of this._localTimelineStyles)this._pendingStyles.set(e,t),this._updateStyle(e,t)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){let e=[];for(let t in this._currentKeyframe)e.push(t);return e}mergeTimelineCollectedStyles(e){e._styleSummary.forEach((t,i)=>{let a=this._styleSummary.get(i);(!a||t.time>a.time)&&this._updateStyle(i,t.value)})}buildKeyframes(){this.applyStylesToKeyframe();let e=new Set,t=new Set,i=this._keyframes.size===1&&this.duration===0,a=[];this._keyframes.forEach((c,o)=>{let l=new Map([...this._backFill,...c]);l.forEach((f,h)=>{f===Ln?e.add(h):f===z4&&t.add(h)}),i||l.set("offset",o/this.duration),a.push(l)});let r=[...e.values()],s=[...t.values()];if(i){let c=a[0],o=new Map(c);c.set("offset",0),o.set("offset",1),a=[c,o]}return N7(this.element,a,r,s,this.duration,this.startTime,this.easing,!1)}},b7=class extends $5{keyframes;preStyleProps;postStyleProps;_stretchStartingKeyframe;timings;constructor(e,t,i,a,r,s,c=!1){super(e,t,s.delay),this.keyframes=i,this.preStyleProps=a,this.postStyleProps=r,this._stretchStartingKeyframe=c,this.timings={duration:s.duration,delay:s.delay,easing:s.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let e=this.keyframes,{delay:t,duration:i,easing:a}=this.timings;if(this._stretchStartingKeyframe&&t){let r=[],s=i+t,c=t/s,o=new Map(e[0]);o.set("offset",0),r.push(o);let l=new Map(e[0]);l.set("offset",uh(c)),r.push(l);let f=e.length-1;for(let h=1;h<=f;h++){let u=new Map(e[h]),d=u.get("offset"),p=t+d*i;u.set("offset",uh(p/s)),r.push(u)}i=s,t=0,a="",e=r}return N7(this.element,e,this.preStyleProps,this.postStyleProps,i,t,a,!0)}};function uh(n,e=3){let t=Math.pow(10,e-1);return Math.round(n*t)/t}function mb(n,e){let t=new Map,i;return n.forEach(a=>{if(a==="*"){i??=e.keys();for(let r of i)t.set(r,z4)}else for(let[r,s]of a)t.set(r,s)}),t}function hh(n,e,t,i,a,r,s,c,o,l,f,h,u){return{type:0,element:n,triggerName:e,isRemovalTransition:a,fromState:t,fromStyles:r,toState:i,toStyles:s,timelines:c,queriedElements:o,preStyleProps:l,postStyleProps:f,totalTime:h,errors:u}}var m7={},j5=class{_triggerName;ast;_stateStyles;constructor(e,t,i){this._triggerName=e,this.ast=t,this._stateStyles=i}match(e,t,i,a){return gb(this.ast.matchers,e,t,i,a)}buildStyles(e,t,i){let a=this._stateStyles.get("*");return e!==void 0&&(a=this._stateStyles.get(e?.toString())||a),a?a.buildStyles(t,i):new Map}build(e,t,i,a,r,s,c,o,l,f){let h=[],u=this.ast.options&&this.ast.options.params||m7,d=c&&c.params||m7,p=this.buildStyles(i,d,h),v=o&&o.params||m7,m=this.buildStyles(a,v,h),g=new Set,x=new Map,y=new Map,M=a==="void",b={params:yh(v,u),delay:this.ast.options?.delay},L=f?[]:zh(e,t,this.ast.animation,r,s,p,m,b,l,h),S=0;return L.forEach(_=>{S=Math.max(_.duration+_.delay,S)}),h.length?hh(t,this._triggerName,i,a,M,p,m,[],[],x,y,S,h):(L.forEach(_=>{let C=_.element,T=Te(x,C,new Set);_.preStyleProps.forEach(R=>T.add(R));let P=Te(y,C,new Set);_.postStyleProps.forEach(R=>P.add(R)),C!==t&&g.add(C)}),hh(t,this._triggerName,i,a,M,p,m,L,[...g.values()],x,y,S))}};function gb(n,e,t,i,a){return n.some(r=>r(e,t,i,a))}function yh(n,e){let t=Ne({},e);return Object.entries(n).forEach(([i,a])=>{a!=null&&(t[i]=a)}),t}var S7=class{styles;defaultParams;normalizer;constructor(e,t,i){this.styles=e,this.defaultParams=t,this.normalizer=i}buildStyles(e,t){let i=new Map,a=yh(e,this.defaultParams);return this.styles.styles.forEach(r=>{typeof r!="string"&&r.forEach((s,c)=>{s&&(s=J6(s,a,t));let o=this.normalizer.normalizePropertyName(c,t);s=this.normalizer.normalizeStyleValue(c,o,s,t),i.set(c,s)})}),i}};function vb(n,e,t){return new C7(n,e,t)}var C7=class{name;ast;_normalizer;transitionFactories=[];fallbackTransition;states=new Map;constructor(e,t,i){this.name=e,this.ast=t,this._normalizer=i,t.states.forEach(a=>{let r=a.options&&a.options.params||{};this.states.set(a.name,new S7(a.style,r,i))}),dh(this.states,"true","1"),dh(this.states,"false","0"),t.transitions.forEach(a=>{this.transitionFactories.push(new j5(e,a,this.states))}),this.fallbackTransition=Mb(e,this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(e,t,i,a){return this.transitionFactories.find(s=>s.match(e,t,i,a))||null}matchStyles(e,t,i){return this.fallbackTransition.buildStyles(e,t,i)}};function Mb(n,e,t){let i=[(s,c)=>!0],a={type:h2.Sequence,steps:[],options:null},r={type:h2.Transition,animation:a,matchers:i,options:null,queryCount:0,depCount:0};return new j5(n,r,e)}function dh(n,e,t){n.has(e)?n.has(t)||n.set(t,n.get(e)):n.has(t)&&n.set(e,n.get(t))}var _b=new Nn,L7=class{bodyNode;_driver;_normalizer;_animations=new Map;_playersById=new Map;players=[];constructor(e,t,i){this.bodyNode=e,this._driver=t,this._normalizer=i}register(e,t){let i=[],a=[],r=xh(this._driver,t,i,a);if(i.length)throw $u(i);this._animations.set(e,r)}_buildPlayer(e,t,i){let a=e.element,r=s7(this._normalizer,e.keyframes,t,i);return this._driver.animate(a,r,e.duration,e.delay,e.easing,[],!0)}create(e,t,i={}){let a=[],r=this._animations.get(e),s,c=new Map;if(r?(s=zh(this._driver,t,r,u7,F5,new Map,new Map,i,_b,a),s.forEach(f=>{let h=Te(c,f.element,new Map);f.postStyleProps.forEach(u=>h.set(u,null))})):(a.push(ju()),s=[]),a.length)throw Ku(a);c.forEach((f,h)=>{f.forEach((u,d)=>{f.set(d,this._driver.computeStyle(h,d,z4))})});let o=s.map(f=>{let h=c.get(f.element);return this._buildPlayer(f,new Map,h)}),l=_0(o);return this._playersById.set(e,l),l.onDestroy(()=>this.destroy(e)),this.players.push(l),l}destroy(e){let t=this._getPlayer(e);t.destroy(),this._playersById.delete(e);let i=this.players.indexOf(t);i>=0&&this.players.splice(i,1)}_getPlayer(e){let t=this._playersById.get(e);if(!t)throw Ju(e);return t}listen(e,t,i,a){let r=k5(t,"","","");return I5(this._getPlayer(e),i,r,a),()=>{}}command(e,t,i,a){if(i=="register"){this.register(e,a[0]);return}if(i=="create"){let s=a[0]||{};this.create(e,t,s);return}let r=this._getPlayer(e);switch(i){case"play":r.play();break;case"pause":r.pause();break;case"reset":r.reset();break;case"restart":r.restart();break;case"finish":r.finish();break;case"init":r.init();break;case"setPosition":r.setPosition(parseFloat(a[0]));break;case"destroy":this.destroy(e);break}}},ph="ng-animate-queued",xb=".ng-animate-queued",g7="ng-animate-disabled",zb=".ng-animate-disabled",yb="ng-star-inserted",bb=".ng-star-inserted",Sb=[],bh={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},Cb={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},b4="__ng_removed",Pn=class{namespaceId;value;options;get params(){return this.options.params}constructor(e,t=""){this.namespaceId=t;let i=e&&e.hasOwnProperty("value"),a=i?e.value:e;if(this.value=wb(a),i){let r=e,{value:s}=r,c=po(r,["value"]);this.options=c}else this.options={};this.options.params||(this.options.params={})}absorbOptions(e){let t=e.params;if(t){let i=this.options.params;Object.keys(t).forEach(a=>{i[a]==null&&(i[a]=t[a])})}}},An="void",v7=new Pn(An),w7=class{id;hostElement;_engine;players=[];_triggers=new Map;_queue=[];_elementListeners=new Map;_hostClassName;constructor(e,t,i){this.id=e,this.hostElement=t,this._engine=i,this._hostClassName="ng-tns-"+e,f4(t,this._hostClassName)}listen(e,t,i,a){if(!this._triggers.has(t))throw Zu(i,t);if(i==null||i.length==0)throw Qu(t);if(!Tb(i))throw eh(i,t);let r=Te(this._elementListeners,e,[]),s={name:t,phase:i,callback:a};r.push(s);let c=Te(this._engine.statesByElement,e,new Map);return c.has(t)||(f4(e,wn),f4(e,wn+"-"+t),c.set(t,v7)),()=>{this._engine.afterFlush(()=>{let o=r.indexOf(s);o>=0&&r.splice(o,1),this._triggers.has(t)||c.delete(t)})}}register(e,t){return this._triggers.has(e)?!1:(this._triggers.set(e,t),!0)}_getTrigger(e){let t=this._triggers.get(e);if(!t)throw th(e);return t}trigger(e,t,i,a=!0){let r=this._getTrigger(t),s=new Rn(this.id,t,e),c=this._engine.statesByElement.get(e);c||(f4(e,wn),f4(e,wn+"-"+t),this._engine.statesByElement.set(e,c=new Map));let o=c.get(t),l=new Pn(i,this.id);if(!(i&&i.hasOwnProperty("value"))&&o&&l.absorbOptions(o.options),c.set(t,l),o||(o=v7),!(l.value===An)&&o.value===l.value){if(!Nb(o.params,l.params)){let v=[],m=r.matchStyles(o.value,o.params,v),g=r.matchStyles(l.value,l.params,v);v.length?this._engine.reportError(v):this._engine.afterFlush(()=>{at(e,m),y4(e,g)})}return}let u=Te(this._engine.playersByElement,e,[]);u.forEach(v=>{v.namespaceId==this.id&&v.triggerName==t&&v.queued&&v.destroy()});let d=r.matchTransition(o.value,l.value,e,l.params),p=!1;if(!d){if(!a)return;d=r.fallbackTransition,p=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:t,transition:d,fromState:o,toState:l,player:s,isFallbackTransition:p}),p||(f4(e,ph),s.onStart(()=>{Z6(e,ph)})),s.onDone(()=>{let v=this.players.indexOf(s);v>=0&&this.players.splice(v,1);let m=this._engine.playersByElement.get(e);if(m){let g=m.indexOf(s);g>=0&&m.splice(g,1)}}),this.players.push(s),u.push(s),s}deregister(e){this._triggers.delete(e),this._engine.statesByElement.forEach(t=>t.delete(e)),this._elementListeners.forEach((t,i)=>{this._elementListeners.set(i,t.filter(a=>a.name!=e))})}clearElementCache(e){this._engine.statesByElement.delete(e),this._elementListeners.delete(e);let t=this._engine.playersByElement.get(e);t&&(t.forEach(i=>i.destroy()),this._engine.playersByElement.delete(e))}_signalRemovalForInnerTriggers(e,t){let i=this._engine.driver.query(e,Tn,!0);i.forEach(a=>{if(a[b4])return;let r=this._engine.fetchNamespacesByElement(a);r.size?r.forEach(s=>s.triggerLeaveAnimation(a,t,!1,!0)):this.clearElementCache(a)}),this._engine.afterFlushAnimationsDone(()=>i.forEach(a=>this.clearElementCache(a)))}triggerLeaveAnimation(e,t,i,a){let r=this._engine.statesByElement.get(e),s=new Map;if(r){let c=[];if(r.forEach((o,l)=>{if(s.set(l,o.value),this._triggers.has(l)){let f=this.trigger(e,l,An,a);f&&c.push(f)}}),c.length)return this._engine.markElementAsRemoved(this.id,e,!0,t,s),i&&_0(c).onDone(()=>this._engine.processLeaveNode(e)),!0}return!1}prepareLeaveAnimationListeners(e){let t=this._elementListeners.get(e),i=this._engine.statesByElement.get(e);if(t&&i){let a=new Set;t.forEach(r=>{let s=r.name;if(a.has(s))return;a.add(s);let o=this._triggers.get(s).fallbackTransition,l=i.get(s)||v7,f=new Pn(An),h=new Rn(this.id,s,e);this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:s,transition:o,fromState:l,toState:f,player:h,isFallbackTransition:!0})})}}removeNode(e,t){let i=this._engine;if(e.childElementCount&&this._signalRemovalForInnerTriggers(e,t),this.triggerLeaveAnimation(e,t,!0))return;let a=!1;if(i.totalAnimations){let r=i.players.length?i.playersByQueriedElement.get(e):[];if(r&&r.length)a=!0;else{let s=e;for(;s=s.parentNode;)if(i.statesByElement.get(s)){a=!0;break}}}if(this.prepareLeaveAnimationListeners(e),a)i.markElementAsRemoved(this.id,e,!1,t);else{let r=e[b4];(!r||r===bh)&&(i.afterFlush(()=>this.clearElementCache(e)),i.destroyInnerAnimations(e),i._onRemovalComplete(e,t))}}insertNode(e,t){f4(e,this._hostClassName)}drainQueuedTransitions(e){let t=[];return this._queue.forEach(i=>{let a=i.player;if(a.destroyed)return;let r=i.element,s=this._elementListeners.get(r);s&&s.forEach(c=>{if(c.name==i.triggerName){let o=k5(r,i.triggerName,i.fromState.value,i.toState.value);o._data=e,I5(i.player,c.phase,o,c.callback)}}),a.markedForDestroy?this._engine.afterFlush(()=>{a.destroy()}):t.push(i)}),this._queue=[],t.sort((i,a)=>{let r=i.transition.ast.depCount,s=a.transition.ast.depCount;return r==0||s==0?r-s:this._engine.driver.containsElement(i.element,a.element)?1:-1})}destroy(e){this.players.forEach(t=>t.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,e)}},T7=class{bodyNode;driver;_normalizer;players=[];newHostElements=new Map;playersByElement=new Map;playersByQueriedElement=new Map;statesByElement=new Map;disabledNodes=new Set;totalAnimations=0;totalQueuedPlayers=0;_namespaceLookup={};_namespaceList=[];_flushFns=[];_whenQuietFns=[];namespacesByHostElement=new Map;collectedEnterElements=[];collectedLeaveElements=[];onRemovalComplete=(e,t)=>{};_onRemovalComplete(e,t){this.onRemovalComplete(e,t)}constructor(e,t,i){this.bodyNode=e,this.driver=t,this._normalizer=i}get queuedPlayers(){let e=[];return this._namespaceList.forEach(t=>{t.players.forEach(i=>{i.queued&&e.push(i)})}),e}createNamespace(e,t){let i=new w7(e,t,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,t)?this._balanceNamespaceList(i,t):(this.newHostElements.set(t,i),this.collectEnterElement(t)),this._namespaceLookup[e]=i}_balanceNamespaceList(e,t){let i=this._namespaceList,a=this.namespacesByHostElement;if(i.length-1>=0){let s=!1,c=this.driver.getParentElement(t);for(;c;){let o=a.get(c);if(o){let l=i.indexOf(o);i.splice(l+1,0,e),s=!0;break}c=this.driver.getParentElement(c)}s||i.unshift(e)}else i.push(e);return a.set(t,e),e}register(e,t){let i=this._namespaceLookup[e];return i||(i=this.createNamespace(e,t)),i}registerTrigger(e,t,i){let a=this._namespaceLookup[e];a&&a.register(t,i)&&this.totalAnimations++}destroy(e,t){e&&(this.afterFlush(()=>{}),this.afterFlushAnimationsDone(()=>{let i=this._fetchNamespace(e);this.namespacesByHostElement.delete(i.hostElement);let a=this._namespaceList.indexOf(i);a>=0&&this._namespaceList.splice(a,1),i.destroy(t),delete this._namespaceLookup[e]}))}_fetchNamespace(e){return this._namespaceLookup[e]}fetchNamespacesByElement(e){let t=new Set,i=this.statesByElement.get(e);if(i){for(let a of i.values())if(a.namespaceId){let r=this._fetchNamespace(a.namespaceId);r&&t.add(r)}}return t}trigger(e,t,i,a){if(G5(t)){let r=this._fetchNamespace(e);if(r)return r.trigger(t,i,a),!0}return!1}insertNode(e,t,i,a){if(!G5(t))return;let r=t[b4];if(r&&r.setForRemoval){r.setForRemoval=!1,r.setForMove=!0;let s=this.collectedLeaveElements.indexOf(t);s>=0&&this.collectedLeaveElements.splice(s,1)}if(e){let s=this._fetchNamespace(e);s&&s.insertNode(t,i)}a&&this.collectEnterElement(t)}collectEnterElement(e){this.collectedEnterElements.push(e)}markElementAsDisabled(e,t){t?this.disabledNodes.has(e)||(this.disabledNodes.add(e),f4(e,g7)):this.disabledNodes.has(e)&&(this.disabledNodes.delete(e),Z6(e,g7))}removeNode(e,t,i){if(G5(t)){let a=e?this._fetchNamespace(e):null;a?a.removeNode(t,i):this.markElementAsRemoved(e,t,!1,i);let r=this.namespacesByHostElement.get(t);r&&r.id!==e&&r.removeNode(t,i)}else this._onRemovalComplete(t,i)}markElementAsRemoved(e,t,i,a,r){this.collectedLeaveElements.push(t),t[b4]={namespaceId:e,setForRemoval:a,hasAnimation:i,removedBeforeQueried:!1,previousTriggersValues:r}}listen(e,t,i,a,r){return G5(t)?this._fetchNamespace(e).listen(t,i,a,r):()=>{}}_buildInstruction(e,t,i,a,r){return e.transition.build(this.driver,e.element,e.fromState.value,e.toState.value,i,a,e.fromState.options,e.toState.options,t,r)}destroyInnerAnimations(e){let t=this.driver.query(e,Tn,!0);t.forEach(i=>this.destroyActiveAnimationsForElement(i)),this.playersByQueriedElement.size!=0&&(t=this.driver.query(e,O5,!0),t.forEach(i=>this.finishActiveQueriedAnimationOnElement(i)))}destroyActiveAnimationsForElement(e){let t=this.playersByElement.get(e);t&&t.forEach(i=>{i.queued?i.markedForDestroy=!0:i.destroy()})}finishActiveQueriedAnimationOnElement(e){let t=this.playersByQueriedElement.get(e);t&&t.forEach(i=>i.finish())}whenRenderingDone(){return new Promise(e=>{if(this.players.length)return _0(this.players).onDone(()=>e());e()})}processLeaveNode(e){let t=e[b4];if(t&&t.setForRemoval){if(e[b4]=bh,t.namespaceId){this.destroyInnerAnimations(e);let i=this._fetchNamespace(t.namespaceId);i&&i.clearElementCache(e)}this._onRemovalComplete(e,t.setForRemoval)}e.classList?.contains(g7)&&this.markElementAsDisabled(e,!1),this.driver.query(e,zb,!0).forEach(i=>{this.markElementAsDisabled(i,!1)})}flush(e=-1){let t=[];if(this.newHostElements.size&&(this.newHostElements.forEach((i,a)=>this._balanceNamespaceList(i,a)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let i=0;i<this.collectedEnterElements.length;i++){let a=this.collectedEnterElements[i];f4(a,yb)}if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){let i=[];try{t=this._flushAnimations(i,e)}finally{for(let a=0;a<i.length;a++)i[a]()}}else for(let i=0;i<this.collectedLeaveElements.length;i++){let a=this.collectedLeaveElements[i];this.processLeaveNode(a)}if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(i=>i()),this._flushFns=[],this._whenQuietFns.length){let i=this._whenQuietFns;this._whenQuietFns=[],t.length?_0(t).onDone(()=>{i.forEach(a=>a())}):i.forEach(a=>a())}}reportError(e){throw ih(e)}_flushAnimations(e,t){let i=new Nn,a=[],r=new Map,s=[],c=new Map,o=new Map,l=new Map,f=new Set;this.disabledNodes.forEach(I=>{f.add(I);let N=this.driver.query(I,xb,!0);for(let O=0;O<N.length;O++)f.add(N[O])});let h=this.bodyNode,u=Array.from(this.statesByElement.keys()),d=vh(u,this.collectedEnterElements),p=new Map,v=0;d.forEach((I,N)=>{let O=u7+v++;p.set(N,O),I.forEach(Y=>f4(Y,O))});let m=[],g=new Set,x=new Set;for(let I=0;I<this.collectedLeaveElements.length;I++){let N=this.collectedLeaveElements[I],O=N[b4];O&&O.setForRemoval&&(m.push(N),g.add(N),O.hasAnimation?this.driver.query(N,bb,!0).forEach(Y=>g.add(Y)):x.add(N))}let y=new Map,M=vh(u,Array.from(g));M.forEach((I,N)=>{let O=F5+v++;y.set(N,O),I.forEach(Y=>f4(Y,O))}),e.push(()=>{d.forEach((I,N)=>{let O=p.get(N);I.forEach(Y=>Z6(Y,O))}),M.forEach((I,N)=>{let O=y.get(N);I.forEach(Y=>Z6(Y,O))}),m.forEach(I=>{this.processLeaveNode(I)})});let b=[],L=[];for(let I=this._namespaceList.length-1;I>=0;I--)this._namespaceList[I].drainQueuedTransitions(t).forEach(O=>{let Y=O.player,A=O.element;if(b.push(Y),this.collectedEnterElements.length){let r1=A[b4];if(r1&&r1.setForMove){if(r1.previousTriggersValues&&r1.previousTriggersValues.has(O.triggerName)){let s1=r1.previousTriggersValues.get(O.triggerName),S1=this.statesByElement.get(O.element);if(S1&&S1.has(O.triggerName)){let H1=S1.get(O.triggerName);H1.value=s1,S1.set(O.triggerName,H1)}}Y.destroy();return}}let l1=!h||!this.driver.containsElement(h,A),d1=y.get(A),$1=p.get(A),A1=this._buildInstruction(O,i,$1,d1,l1);if(A1.errors&&A1.errors.length){L.push(A1);return}if(l1){Y.onStart(()=>at(A,A1.fromStyles)),Y.onDestroy(()=>y4(A,A1.toStyles)),a.push(Y);return}if(O.isFallbackTransition){Y.onStart(()=>at(A,A1.fromStyles)),Y.onDestroy(()=>y4(A,A1.toStyles)),a.push(Y);return}let j1=[];A1.timelines.forEach(r1=>{r1.stretchStartingKeyframe=!0,this.disabledNodes.has(r1.element)||j1.push(r1)}),A1.timelines=j1,i.append(A,A1.timelines);let Q={instruction:A1,player:Y,element:A};s.push(Q),A1.queriedElements.forEach(r1=>Te(c,r1,[]).push(Y)),A1.preStyleProps.forEach((r1,s1)=>{if(r1.size){let S1=o.get(s1);S1||o.set(s1,S1=new Set),r1.forEach((H1,T1)=>S1.add(T1))}}),A1.postStyleProps.forEach((r1,s1)=>{let S1=l.get(s1);S1||l.set(s1,S1=new Set),r1.forEach((H1,T1)=>S1.add(T1))})});if(L.length){let I=[];L.forEach(N=>{I.push(nh(N.triggerName,N.errors))}),b.forEach(N=>N.destroy()),this.reportError(I)}let S=new Map,_=new Map;s.forEach(I=>{let N=I.element;i.has(N)&&(_.set(N,N),this._beforeAnimationBuild(I.player.namespaceId,I.instruction,S))}),a.forEach(I=>{let N=I.element;this._getPreviousPlayers(N,!1,I.namespaceId,I.triggerName,null).forEach(Y=>{Te(S,N,[]).push(Y),Y.destroy()})});let C=m.filter(I=>Mh(I,o,l)),T=new Map;gh(T,this.driver,x,l,z4).forEach(I=>{Mh(I,o,l)&&C.push(I)});let R=new Map;d.forEach((I,N)=>{gh(R,this.driver,new Set(I),o,Ln)}),C.forEach(I=>{let N=T.get(I),O=R.get(I);T.set(I,new Map([...N?.entries()??[],...O?.entries()??[]]))});let q=[],j=[],D={};s.forEach(I=>{let{element:N,player:O,instruction:Y}=I;if(i.has(N)){if(f.has(N)){O.onDestroy(()=>y4(N,Y.toStyles)),O.disabled=!0,O.overrideTotalTime(Y.totalTime),a.push(O);return}let A=D;if(_.size>1){let d1=N,$1=[];for(;d1=d1.parentNode;){let A1=_.get(d1);if(A1){A=A1;break}$1.push(d1)}$1.forEach(A1=>_.set(A1,A))}let l1=this._buildAnimation(O.namespaceId,Y,S,r,R,T);if(O.setRealPlayer(l1),A===D)q.push(O);else{let d1=this.playersByElement.get(A);d1&&d1.length&&(O.parentPlayer=_0(d1)),a.push(O)}}else at(N,Y.fromStyles),O.onDestroy(()=>y4(N,Y.toStyles)),j.push(O),f.has(N)&&a.push(O)}),j.forEach(I=>{let N=r.get(I.element);if(N&&N.length){let O=_0(N);I.setRealPlayer(O)}}),a.forEach(I=>{I.parentPlayer?I.syncPlayerEvents(I.parentPlayer):I.destroy()});for(let I=0;I<m.length;I++){let N=m[I],O=N[b4];if(Z6(N,F5),O&&O.hasAnimation)continue;let Y=[];if(c.size){let l1=c.get(N);l1&&l1.length&&Y.push(...l1);let d1=this.driver.query(N,O5,!0);for(let $1=0;$1<d1.length;$1++){let A1=c.get(d1[$1]);A1&&A1.length&&Y.push(...A1)}}let A=Y.filter(l1=>!l1.destroyed);A.length?Eb(this,N,A):this.processLeaveNode(N)}return m.length=0,q.forEach(I=>{this.players.push(I),I.onDone(()=>{I.destroy();let N=this.players.indexOf(I);this.players.splice(N,1)}),I.play()}),q}afterFlush(e){this._flushFns.push(e)}afterFlushAnimationsDone(e){this._whenQuietFns.push(e)}_getPreviousPlayers(e,t,i,a,r){let s=[];if(t){let c=this.playersByQueriedElement.get(e);c&&(s=c)}else{let c=this.playersByElement.get(e);if(c){let o=!r||r==An;c.forEach(l=>{l.queued||!o&&l.triggerName!=a||s.push(l)})}}return(i||a)&&(s=s.filter(c=>!(i&&i!=c.namespaceId||a&&a!=c.triggerName))),s}_beforeAnimationBuild(e,t,i){let a=t.triggerName,r=t.element,s=t.isRemovalTransition?void 0:e,c=t.isRemovalTransition?void 0:a;for(let o of t.timelines){let l=o.element,f=l!==r,h=Te(i,l,[]);this._getPreviousPlayers(l,f,s,c,t.toState).forEach(d=>{let p=d.getRealPlayer();p.beforeDestroy&&p.beforeDestroy(),d.destroy(),h.push(d)})}at(r,t.fromStyles)}_buildAnimation(e,t,i,a,r,s){let c=t.triggerName,o=t.element,l=[],f=new Set,h=new Set,u=t.timelines.map(p=>{let v=p.element;f.add(v);let m=v[b4];if(m&&m.removedBeforeQueried)return new M0(p.duration,p.delay);let g=v!==o,x=Ab((i.get(v)||Sb).map(S=>S.getRealPlayer())).filter(S=>{let _=S;return _.element?_.element===v:!1}),y=r.get(v),M=s.get(v),b=s7(this._normalizer,p.keyframes,y,M),L=this._buildPlayer(p,b,x);if(p.subTimeline&&a&&h.add(v),g){let S=new Rn(e,c,v);S.setRealPlayer(L),l.push(S)}return L});l.forEach(p=>{Te(this.playersByQueriedElement,p.element,[]).push(p),p.onDone(()=>Lb(this.playersByQueriedElement,p.element,p))}),f.forEach(p=>f4(p,h7));let d=_0(u);return d.onDestroy(()=>{f.forEach(p=>Z6(p,h7)),y4(o,t.toStyles)}),h.forEach(p=>{Te(a,p,[]).push(d)}),d}_buildPlayer(e,t,i){return t.length>0?this.driver.animate(e.element,t,e.duration,e.delay,e.easing,i):new M0(e.duration,e.delay)}},Rn=class{namespaceId;triggerName;element;_player=new M0;_containsRealPlayer=!1;_queuedCallbacks=new Map;destroyed=!1;parentPlayer=null;markedForDestroy=!1;disabled=!1;queued=!0;totalTime=0;constructor(e,t,i){this.namespaceId=e,this.triggerName=t,this.element=i}setRealPlayer(e){this._containsRealPlayer||(this._player=e,this._queuedCallbacks.forEach((t,i)=>{t.forEach(a=>I5(e,i,void 0,a))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(e.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(e){this.totalTime=e}syncPlayerEvents(e){let t=this._player;t.triggerCallback&&e.onStart(()=>t.triggerCallback("start")),e.onDone(()=>this.finish()),e.onDestroy(()=>this.destroy())}_queueEvent(e,t){Te(this._queuedCallbacks,e,[]).push(t)}onDone(e){this.queued&&this._queueEvent("done",e),this._player.onDone(e)}onStart(e){this.queued&&this._queueEvent("start",e),this._player.onStart(e)}onDestroy(e){this.queued&&this._queueEvent("destroy",e),this._player.onDestroy(e)}init(){this._player.init()}hasStarted(){return this.queued?!1:this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(e){this.queued||this._player.setPosition(e)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(e){let t=this._player;t.triggerCallback&&t.triggerCallback(e)}};function Lb(n,e,t){let i=n.get(e);if(i){if(i.length){let a=i.indexOf(t);i.splice(a,1)}i.length==0&&n.delete(e)}return i}function wb(n){return n??null}function G5(n){return n&&n.nodeType===1}function Tb(n){return n=="start"||n=="done"}function mh(n,e){let t=n.style.display;return n.style.display=e??"none",t}function gh(n,e,t,i,a){let r=[];t.forEach(o=>r.push(mh(o)));let s=[];i.forEach((o,l)=>{let f=new Map;o.forEach(h=>{let u=e.computeStyle(l,h,a);f.set(h,u),(!u||u.length==0)&&(l[b4]=Cb,s.push(l))}),n.set(l,f)});let c=0;return t.forEach(o=>mh(o,r[c++])),s}function vh(n,e){let t=new Map;if(n.forEach(c=>t.set(c,[])),e.length==0)return t;let i=1,a=new Set(e),r=new Map;function s(c){if(!c)return i;let o=r.get(c);if(o)return o;let l=c.parentNode;return t.has(l)?o=l:a.has(l)?o=i:o=s(l),r.set(c,o),o}return e.forEach(c=>{let o=s(c);o!==i&&t.get(o).push(c)}),t}function f4(n,e){n.classList?.add(e)}function Z6(n,e){n.classList?.remove(e)}function Eb(n,e,t){_0(t).onDone(()=>n.processLeaveNode(e))}function Ab(n){let e=[];return Sh(n,e),e}function Sh(n,e){for(let t=0;t<n.length;t++){let i=n[t];i instanceof j6?Sh(i.players,e):e.push(i)}}function Nb(n,e){let t=Object.keys(n),i=Object.keys(e);if(t.length!=i.length)return!1;for(let a=0;a<t.length;a++){let r=t[a];if(!e.hasOwnProperty(r)||n[r]!==e[r])return!1}return!0}function Mh(n,e,t){let i=t.get(n);if(!i)return!1;let a=e.get(n);return a?i.forEach(r=>a.add(r)):e.set(n,i),t.delete(n),!0}var Q6=class{_driver;_normalizer;_transitionEngine;_timelineEngine;_triggerCache={};onRemovalComplete=(e,t)=>{};constructor(e,t,i){this._driver=t,this._normalizer=i,this._transitionEngine=new T7(e.body,t,i),this._timelineEngine=new L7(e.body,t,i),this._transitionEngine.onRemovalComplete=(a,r)=>this.onRemovalComplete(a,r)}registerTrigger(e,t,i,a,r){let s=e+"-"+a,c=this._triggerCache[s];if(!c){let o=[],l=[],f=xh(this._driver,r,o,l);if(o.length)throw Yu(a,o);c=vb(a,f,this._normalizer),this._triggerCache[s]=c}this._transitionEngine.registerTrigger(t,a,c)}register(e,t){this._transitionEngine.register(e,t)}destroy(e,t){this._transitionEngine.destroy(e,t)}onInsert(e,t,i,a){this._transitionEngine.insertNode(e,t,i,a)}onRemove(e,t,i){this._transitionEngine.removeNode(e,t,i)}disableAnimations(e,t){this._transitionEngine.markElementAsDisabled(e,t)}process(e,t,i,a){if(i.charAt(0)=="@"){let[r,s]=c7(i),c=a;this._timelineEngine.command(r,t,s,c)}else this._transitionEngine.trigger(e,t,i,a)}listen(e,t,i,a,r){if(i.charAt(0)=="@"){let[s,c]=c7(i);return this._timelineEngine.listen(s,t,c,r)}return this._transitionEngine.listen(e,t,i,a,r)}flush(e=-1){this._transitionEngine.flush(e)}get players(){return[...this._transitionEngine.players,...this._timelineEngine.players]}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}afterFlushAnimationsDone(e){this._transitionEngine.afterFlushAnimationsDone(e)}};function Pb(n,e){let t=null,i=null;return Array.isArray(e)&&e.length?(t=M7(e[0]),e.length>1&&(i=M7(e[e.length-1]))):e instanceof Map&&(t=M7(e)),t||i?new Rb(n,t,i):null}var Rb=(()=>{class n{_element;_startStyles;_endStyles;static initialStylesByElement=new WeakMap;_state=0;_initialStyles;constructor(t,i,a){this._element=t,this._startStyles=i,this._endStyles=a;let r=n.initialStylesByElement.get(t);r||n.initialStylesByElement.set(t,r=new Map),this._initialStyles=r}start(){this._state<1&&(this._startStyles&&y4(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(y4(this._element,this._initialStyles),this._endStyles&&(y4(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(n.initialStylesByElement.delete(this._element),this._startStyles&&(at(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(at(this._element,this._endStyles),this._endStyles=null),y4(this._element,this._initialStyles),this._state=3)}}return n})();function M7(n){let e=null;return n.forEach((t,i)=>{Ib(i)&&(e=e||new Map,e.set(i,t))}),e}function Ib(n){return n==="display"||n==="position"}var K5=class{element;keyframes;options;_specialStyles;_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_duration;_delay;_initialized=!1;_finished=!1;_started=!1;_destroyed=!1;_finalKeyframe;_originalOnDoneFns=[];_originalOnStartFns=[];domPlayer=null;time=0;parentPlayer=null;currentSnapshot=new Map;constructor(e,t,i,a){this.element=e,this.keyframes=t,this.options=i,this._specialStyles=a,this._duration=i.duration,this._delay=i.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this._buildPlayer()&&this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return this.domPlayer;this._initialized=!0;let e=this.keyframes,t=this._triggerWebAnimation(this.element,e,this.options);if(!t)return this._onFinish(),null;this.domPlayer=t,this._finalKeyframe=e.length?e[e.length-1]:new Map;let i=()=>this._onFinish();return t.addEventListener("finish",i),this.onDestroy(()=>{t.removeEventListener("finish",i)}),t}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer?.pause()}_convertKeyframesToObject(e){let t=[];return e.forEach(i=>{t.push(Object.fromEntries(i))}),t}_triggerWebAnimation(e,t,i){let a=this._convertKeyframesToObject(t);try{return e.animate(a,i)}catch(r){return null}}onStart(e){this._originalOnStartFns.push(e),this._onStartFns.push(e)}onDone(e){this._originalOnDoneFns.push(e),this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}play(){let e=this._buildPlayer();e&&(this.hasStarted()||(this._onStartFns.forEach(t=>t()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),e.play())}pause(){this.init(),this.domPlayer?.pause()}finish(){this.init(),this.domPlayer&&(this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish())}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer?.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}setPosition(e){this.domPlayer||this.init(),this.domPlayer&&(this.domPlayer.currentTime=e*this.time)}getPosition(){return this.domPlayer?+(this.domPlayer.currentTime??0)/this.time:this._initialized?1:0}get totalTime(){return this._delay+this._duration}beforeDestroy(){let e=new Map;this.hasStarted()&&this._finalKeyframe.forEach((i,a)=>{a!=="offset"&&e.set(a,this._finished?i:B5(this.element,a))}),this.currentSnapshot=e}triggerCallback(e){let t=e==="start"?this._onStartFns:this._onDoneFns;t.forEach(i=>i()),t.length=0}},J5=class{validateStyleProperty(e){return!0}validateAnimatableStyleProperty(e){return!0}containsElement(e,t){return o7(e,t)}getParentElement(e){return D5(e)}query(e,t,i){return l7(e,t,i)}computeStyle(e,t,i){return B5(e,t)}animate(e,t,i,a,r,s=[]){let c=a==0?"both":"forwards",o={duration:i,delay:a,fill:c};r&&(o.easing=r);let l=new Map,f=s.filter(d=>d instanceof K5);ch(i,a)&&f.forEach(d=>{d.currentSnapshot.forEach((p,v)=>l.set(v,p))});let h=rh(t).map(d=>new Map(d));h=oh(e,h,l);let u=Pb(e,h);return new K5(e,h,o,u)}};var W5="@",Ch="@.disabled",Z5=class{namespaceId;delegate;engine;_onDestroy;\u0275type=0;constructor(e,t,i,a){this.namespaceId=e,this.delegate=t,this.engine=i,this._onDestroy=a}get data(){return this.delegate.data}destroyNode(e){this.delegate.destroyNode?.(e)}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.engine.afterFlushAnimationsDone(()=>{queueMicrotask(()=>{this.delegate.destroy()})}),this._onDestroy?.()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}appendChild(e,t){this.delegate.appendChild(e,t),this.engine.onInsert(this.namespaceId,t,e,!1)}insertBefore(e,t,i,a=!0){this.delegate.insertBefore(e,t,i),this.engine.onInsert(this.namespaceId,t,e,a)}removeChild(e,t,i,a){if(a){this.delegate.removeChild(e,t,i,a);return}this.parentNode(t)&&this.engine.onRemove(this.namespaceId,t,this.delegate)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,i,a){this.delegate.setAttribute(e,t,i,a)}removeAttribute(e,t,i){this.delegate.removeAttribute(e,t,i)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,i,a){this.delegate.setStyle(e,t,i,a)}removeStyle(e,t,i){this.delegate.removeStyle(e,t,i)}setProperty(e,t,i){t.charAt(0)==W5&&t==Ch?this.disableAnimations(e,!!i):this.delegate.setProperty(e,t,i)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,i,a){return this.delegate.listen(e,t,i,a)}disableAnimations(e,t){this.engine.disableAnimations(e,t)}},E7=class extends Z5{factory;constructor(e,t,i,a,r){super(t,i,a,r),this.factory=e,this.namespaceId=t}setProperty(e,t,i){t.charAt(0)==W5?t.charAt(1)=="."&&t==Ch?(i=i===void 0?!0:!!i,this.disableAnimations(e,i)):this.engine.process(this.namespaceId,e,t.slice(1),i):this.delegate.setProperty(e,t,i)}listen(e,t,i,a){if(t.charAt(0)==W5){let r=kb(e),s=t.slice(1),c="";return s.charAt(0)!=W5&&([s,c]=Db(s)),this.engine.listen(this.namespaceId,r,s,c,o=>{let l=o._data||-1;this.factory.scheduleListenerCallback(l,i,o)})}return this.delegate.listen(e,t,i,a)}};function kb(n){switch(n){case"body":return document.body;case"document":return document;case"window":return window;default:return n}}function Db(n){let e=n.indexOf("."),t=n.substring(0,e),i=n.slice(e+1);return[t,i]}var Q5=class{delegate;engine;_zone;_currentId=0;_microtaskId=1;_animationCallbacksBuffer=[];_rendererCache=new Map;_cdRecurDepth=0;constructor(e,t,i){this.delegate=e,this.engine=t,this._zone=i,t.onRemovalComplete=(a,r)=>{r?.removeChild(null,a)}}createRenderer(e,t){let a=this.delegate.createRenderer(e,t);if(!e||!t?.data?.animation){let l=this._rendererCache,f=l.get(a);if(!f){let h=()=>l.delete(a);f=new Z5("",a,this.engine,h),l.set(a,f)}return f}let r=t.id,s=t.id+"-"+this._currentId;this._currentId++,this.engine.register(s,e);let c=l=>{Array.isArray(l)?l.forEach(c):this.engine.registerTrigger(r,s,e,l.name,l)};return t.data.animation.forEach(c),new E7(this,s,a,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){queueMicrotask(()=>{this._microtaskId++})}scheduleListenerCallback(e,t,i){if(e>=0&&e<this._microtaskId){this._zone.run(()=>t(i));return}let a=this._animationCallbacksBuffer;a.length==0&&queueMicrotask(()=>{this._zone.run(()=>{a.forEach(r=>{let[s,c]=r;s(c)}),this._animationCallbacksBuffer=[]})}),a.push([t,i])}end(){this._cdRecurDepth--,this._cdRecurDepth==0&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}componentReplaced(e){this.engine.flush(),this.delegate.componentReplaced?.(e)}};var Ob=(()=>{class n extends Q6{constructor(t,i,a){super(t,i,a)}ngOnDestroy(){this.flush()}static \u0275fac=function(i){return new(i||n)(Gn(i6),Gn(Yt),Gn($t))};static \u0275prov=R3({token:n,factory:n.\u0275fac})}return n})();function Ub(){return new q5}function Bb(){return new Q5(Z1(No),Z1(Q6),Z1(mo))}var Lh=[{provide:$t,useFactory:Ub},{provide:Q6,useClass:Ob},{provide:zo,useFactory:Bb}],tI=[{provide:Yt,useClass:A7},{provide:gs,useValue:"NoopAnimations"},...Lh],Hb=[{provide:Yt,useFactory:()=>new J5},{provide:gs,useFactory:()=>"BrowserAnimations"},...Lh];function wh(){return xo("NgEagerAnimations"),[...Hb]}var P7={providers:[Fo(Eu),wh()]};var Th="constellation-sound-muted",Vb=95,Gb=82,In=(()=>{class n{constructor(){this._muted=h3(this.getInitialMuted()),this.muted=this._muted.asReadonly(),this.audioCtx=null,this.lastPlayAt=0}toggleMute(){this.unlock(),this._muted.update(t=>!t),this.persistMuted()}unlock(){if(typeof window>"u")return;let t=this.ensureContext();t?.state==="suspended"&&t.resume()}playExplosion(t){if(this._muted()||this.isReducedMotionPreferred())return;let i=this.ensureContext();!i||i.state!=="running"||this.synthesizeExplosion(i,t)}playNodePing(t,i){if(this._muted()||this.isReducedMotionPreferred())return;let a=performance.now();if(a-this.lastPlayAt<Vb)return;let r=this.ensureContext();!r||r.state!=="running"||(this.lastPlayAt=a,this.synthesizePing(r,t,i))}static{this.hitRadius=Gb}ensureContext(){if(typeof window>"u")return null;if(!this.audioCtx){let t=window.AudioContext??window.webkitAudioContext;if(!t)return null;this.audioCtx=new t}return this.audioCtx}synthesizeExplosion(t,i){let a=t.currentTime,r=.22+i*.38,s=3800+i*900,c=[{ratio:1,gain:1,decay:.14,delay:0},{ratio:1.62,gain:.72,decay:.11,delay:.008},{ratio:2.38,gain:.55,decay:.095,delay:.016},{ratio:3.15,gain:.4,decay:.08,delay:.024},{ratio:4.28,gain:.28,decay:.065,delay:.032},{ratio:5.6,gain:.18,decay:.05,delay:.038},{ratio:7.1,gain:.1,decay:.038,delay:.044}];for(let y of c){let M=a+y.delay,b=t.createOscillator();b.type="sine";let L=s*y.ratio;b.frequency.setValueAtTime(L*1.08,M),b.frequency.exponentialRampToValueAtTime(L*.72,M+y.decay);let S=t.createBiquadFilter();S.type="highpass",S.frequency.setValueAtTime(2e3,M);let _=t.createGain(),C=.022*r*y.gain;_.gain.setValueAtTime(1e-4,M),_.gain.exponentialRampToValueAtTime(Math.max(C,1e-4),M+.002),_.gain.exponentialRampToValueAtTime(1e-4,M+y.decay),b.connect(S),S.connect(_),_.connect(t.destination),b.start(M),b.stop(M+y.decay+.02)}let o=Math.floor(t.sampleRate*.12),l=t.createBuffer(1,o,t.sampleRate),f=l.getChannelData(0);for(let y=0;y<o;y++){let M=Math.pow(1-y/o,1.6);f[y]=(Math.random()*2-1)*M}let h=t.createBufferSource();h.buffer=l;let u=t.createBiquadFilter();u.type="bandpass",u.frequency.setValueAtTime(8200+i*1200,a),u.frequency.exponentialRampToValueAtTime(3400,a+.12),u.Q.setValueAtTime(6+i*3,a);let d=t.createGain(),p=.016*r;d.gain.setValueAtTime(1e-4,a),d.gain.exponentialRampToValueAtTime(Math.max(p,1e-4),a+.003),d.gain.exponentialRampToValueAtTime(1e-4,a+.14),h.connect(u),u.connect(d),d.connect(t.destination),h.start(a),h.stop(a+.14);let v=t.createOscillator();v.type="sine",v.frequency.setValueAtTime(6200+i*800,a),v.frequency.exponentialRampToValueAtTime(4800,a+.06);let m=t.createBiquadFilter();m.type="bandpass",m.frequency.setValueAtTime(6e3,a),m.Q.setValueAtTime(12,a);let g=t.createGain(),x=.012*r;g.gain.setValueAtTime(1e-4,a),g.gain.exponentialRampToValueAtTime(Math.max(x,1e-4),a+.001),g.gain.exponentialRampToValueAtTime(1e-4,a+.08),v.connect(m),m.connect(g),g.connect(t.destination),v.start(a),v.stop(a+.09)}synthesizePing(t,i,a){let r=t.currentTime,s=.18+i*.42,c=a%11,o=3400+c*160+i*420,l=[{ratio:1,gain:1,decay:.1},{ratio:2.38,gain:.48,decay:.075},{ratio:3.71,gain:.28,decay:.058},{ratio:5.02,gain:.14,decay:.042}];for(let g of l){let x=t.createOscillator();x.type="sine";let y=o*g.ratio;x.frequency.setValueAtTime(y,r),x.frequency.exponentialRampToValueAtTime(y*.9,r+g.decay);let M=t.createBiquadFilter();M.type="highpass",M.frequency.setValueAtTime(2200,r);let b=t.createGain(),L=.014*s*g.gain;b.gain.setValueAtTime(1e-4,r),b.gain.exponentialRampToValueAtTime(Math.max(L,1e-4),r+.0015),b.gain.exponentialRampToValueAtTime(1e-4,r+g.decay),x.connect(M),M.connect(b),b.connect(t.destination),x.start(r),x.stop(r+g.decay+.02)}let f=Math.floor(t.sampleRate*.032),h=t.createBuffer(1,f,t.sampleRate),u=h.getChannelData(0);for(let g=0;g<f;g++){let x=1-g/f;u[g]=(Math.random()*2-1)*x*x}let d=t.createBufferSource();d.buffer=h;let p=t.createBiquadFilter();p.type="bandpass",p.frequency.setValueAtTime(5600+c*140+i*600,r),p.Q.setValueAtTime(9,r);let v=t.createGain(),m=.006*s;v.gain.setValueAtTime(1e-4,r),v.gain.exponentialRampToValueAtTime(Math.max(m,1e-4),r+.001),v.gain.exponentialRampToValueAtTime(1e-4,r+.03),d.connect(p),p.connect(v),v.connect(t.destination),d.start(r),d.stop(r+.032)}getInitialMuted(){return typeof localStorage>"u"?!1:localStorage.getItem(Th)==="true"}persistMuted(){typeof localStorage<"u"&&localStorage.setItem(Th,String(this._muted()))}isReducedMotionPreferred(){return typeof window>"u"?!0:window.matchMedia("(prefers-reduced-motion: reduce)").matches}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=R3({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var Wb=["canvas"],qb=["cursorCanvas"],kn=220,Xb=3,Yb=280,$b='a[href], button:not(:disabled), [role="button"]:not([aria-disabled="true"])',Eh=(()=>{class n{constructor(){this.platformId=Z1(T4),this.constellationSound=Z1(In),this.ctx=null,this.cursorCtx=null,this.nodes=[],this.explosions=[],this.mouse={x:-1e3,y:-1e3},this.smoothMouse={x:-1e3,y:-1e3},this.rafId=0,this.running=!1,this.onResize=()=>{this.resize()},this.lastExplosionAt=0,this.explosionFlashUntil=0,this.isInteractiveTarget=!1,this.interactiveProgress=0,this.cursorClass="has-particle-cursor",this.onMouseMove=t=>{this.mouse.x=t.clientX,this.mouse.y=t.clientY,this.isInteractiveTarget=t.target instanceof Element&&t.target.closest($b)!==null},this.onPointerDown=t=>{this.constellationSound.unlock(),this.triggerExplosion(t.clientX,t.clientY)},this.onMouseLeave=()=>{this.mouse.x=-1e3,this.mouse.y=-1e3,this.isInteractiveTarget=!1},this.onVisibilityChange=()=>{document.hidden?this.stop():this.start()},this.loop=()=>{this.running&&(this.simulate(),this.drawBackground(),this.drawCursor(),this.rafId=requestAnimationFrame(this.loop))}}ngOnInit(){if(!ce(this.platformId)||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let t=this.canvasRef.nativeElement,i=this.cursorCanvasRef.nativeElement;this.ctx=t.getContext("2d"),this.cursorCtx=i.getContext("2d"),this.initNodes(),this.resize(),document.documentElement.classList.add(this.cursorClass),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("pointerdown",this.onPointerDown),window.addEventListener("resize",this.onResize,{passive:!0}),document.documentElement.addEventListener("mouseleave",this.onMouseLeave),document.addEventListener("visibilitychange",this.onVisibilityChange),this.start()}ngOnDestroy(){this.stop(),document.documentElement.classList.remove(this.cursorClass),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("pointerdown",this.onPointerDown),window.removeEventListener("resize",this.onResize),document.documentElement.removeEventListener("mouseleave",this.onMouseLeave),document.removeEventListener("visibilitychange",this.onVisibilityChange)}start(){this.running||(this.running=!0,this.loop())}stop(){this.running=!1,cancelAnimationFrame(this.rafId)}initNodes(){let t=window.innerWidth<768?55:85,i=window.innerWidth,a=window.innerHeight;this.nodes=Array.from({length:t},()=>{let r=Math.random()*Math.PI*2,s=.08+Math.random()*.1,c=Math.cos(r)*s,o=Math.sin(r)*s;return{x:Math.random()*i,y:Math.random()*a,vx:c,vy:o,driftX:c,driftY:o,radius:Math.random()*1.4+.8,wasNear:!1,burstBoost:0}})}triggerExplosion(t,i){if(!this.isMouseNear())return;let a=performance.now();if(a-this.lastExplosionAt<Yb)return;let r=[];for(let c of this.nodes)Math.hypot(c.x-t,c.y-i)<kn&&r.push(c);if(r.length<Xb)return;this.lastExplosionAt=a,this.explosionFlashUntil=a+380;let s=Math.min(1,r.length/14);for(let c of r){let o=c.x-t,l=c.y-i,f=Math.max(Math.hypot(o,l),1),h=1-f/kn,u=6+h*14+Math.random()*2.5,d=o/f,p=l/f;c.vx+=d*u,c.vy+=p*u,c.burstBoost=Math.max(c.burstBoost,.55+h*.45),c.wasNear=!1}this.explosions.push({x:t,y:i,startTime:a,duration:620,maxRadius:kn*(1.05+s*.25)}),this.constellationSound.playExplosion(s),this.mouse.x=t,this.mouse.y=i,this.smoothMouse.x=t,this.smoothMouse.y=i}resize(){let t=Math.min(window.devicePixelRatio,2),i=window.innerWidth,a=window.innerHeight;for(let r of[this.canvasRef.nativeElement,this.cursorCanvasRef.nativeElement])r.width=i*t,r.height=a*t,r.style.width=`${i}px`,r.style.height=`${a}px`;this.ctx?.setTransform(t,0,0,t,0,0),this.cursorCtx?.setTransform(t,0,0,t,0,0)}simulate(){let t=window.innerWidth,i=window.innerHeight;this.smoothMouse.x+=(this.mouse.x-this.smoothMouse.x)*.18,this.smoothMouse.y+=(this.mouse.y-this.smoothMouse.y)*.18;let a=In.hitRadius;for(let r=0;r<this.nodes.length;r++){let s=this.nodes[r],c=this.smoothMouse.x-s.x,o=this.smoothMouse.y-s.y,l=Math.sqrt(c*c+o*o);if(l<a){if(!s.wasNear){s.wasNear=!0;let h=1-l/a;this.constellationSound.playNodePing(h,r)}}else s.wasNear=!1;if(s.burstBoost<.08&&l<kn&&l>0){let h=(1-l/kn)*.022;s.vx+=c/l*h,s.vy+=o/l*h}s.x+=s.vx,s.y+=s.vy;let f=s.burstBoost>.12?.992:.97;s.vx*=f,s.vy*=f,s.burstBoost*=.9,s.burstBoost<.02&&(s.burstBoost=0),s.burstBoost===0&&(s.vx+=(s.driftX-s.vx)*.035,s.vy+=(s.driftY-s.vy)*.035),(s.x<0||s.x>t)&&(s.vx*=-1,s.driftX*=-1),(s.y<0||s.y>i)&&(s.vy*=-1,s.driftY*=-1),s.x=Math.max(0,Math.min(t,s.x)),s.y=Math.max(0,Math.min(i,s.y))}}drawBackground(){let t=this.ctx;if(!t)return;let i=window.innerWidth,a=window.innerHeight,r=document.documentElement.dataset.theme!=="light",s=r?"0, 240, 255":"8, 145, 178",c=r?"0, 240, 255":"8, 145, 178",o=r?"#0a0e17":"#f7f9fc",l=r?1:1.35;t.fillStyle=o,t.fillRect(0,0,i,a);let f=145,h=this.isMouseNear();for(let d=0;d<this.nodes.length;d++)for(let p=d+1;p<this.nodes.length;p++){let v=this.nodes[d],m=this.nodes[p],g=v.x-m.x,x=v.y-m.y,y=Math.sqrt(g*g+x*x);if(y<f){let M=(1-y/f)*.32*l;if(h){let b=(v.x+m.x)/2,L=(v.y+m.y)/2,S=this.smoothMouse.x-b,_=this.smoothMouse.y-L,C=Math.sqrt(S*S+_*_);C<200&&(M+=(1-C/200)*.35*l)}t.beginPath(),t.moveTo(v.x,v.y),t.lineTo(m.x,m.y),t.strokeStyle=`rgba(${s}, ${Math.min(M,r?.75:.9)})`,t.lineWidth=.75,t.stroke()}}let u=performance.now();this.explosions=this.explosions.filter(d=>u-d.startTime<d.duration);for(let d of this.explosions){let p=(u-d.startTime)/d.duration,v=1-Math.pow(1-p,2.4),m=d.maxRadius*v,g=(1-p)*.72*l;t.beginPath(),t.arc(d.x,d.y,m,0,Math.PI*2),t.strokeStyle=`rgba(${s}, ${g})`,t.lineWidth=2.2*(1-p)+.4,t.stroke();let x=m*.42,y=Math.pow(1-p,2.2)*.34*l,M=t.createRadialGradient(d.x,d.y,0,d.x,d.y,x);M.addColorStop(0,`rgba(${s}, ${y})`),M.addColorStop(.55,`rgba(${s}, ${y*.35})`),M.addColorStop(1,`rgba(${s}, 0)`),t.beginPath(),t.arc(d.x,d.y,x,0,Math.PI*2),t.fillStyle=M,t.fill()}if(h)for(let p of this.nodes){let v=this.smoothMouse.x-p.x,m=this.smoothMouse.y-p.y,g=Math.sqrt(v*v+m*m);if(g<200){let x=(1-g/200)*.55*l;t.beginPath(),t.moveTo(this.smoothMouse.x,this.smoothMouse.y),t.lineTo(p.x,p.y),t.strokeStyle=`rgba(${c}, ${x})`,t.lineWidth=.9,t.stroke()}}for(let d of this.nodes){let p=d.radius,v=r?.7:.82;if(h){let m=this.smoothMouse.x-d.x,g=this.smoothMouse.y-d.y,x=Math.sqrt(m*m+g*g);x<140&&(p+=(1-x/140)*2)}if(d.burstBoost>0){p+=d.burstBoost*3.2,v=Math.min(1,v+d.burstBoost*.45);let m=Math.hypot(d.vx,d.vy);if(m>1.2){let g=Math.min(m*2.8,18),x=d.x-d.vx/m*g,y=d.y-d.vy/m*g;t.beginPath(),t.moveTo(x,y),t.lineTo(d.x,d.y),t.strokeStyle=r?`rgba(0, 240, 255, ${d.burstBoost*.55})`:`rgba(8, 145, 178, ${d.burstBoost*.5})`,t.lineWidth=p*.85,t.stroke()}}t.beginPath(),t.arc(d.x,d.y,p,0,Math.PI*2),t.fillStyle=r?`rgba(0, 240, 255, ${v})`:`rgba(8, 145, 178, ${v})`,t.fill()}}drawCursor(){let t=this.cursorCtx;if(!t)return;let i=window.innerWidth,a=window.innerHeight;if(t.clearRect(0,0,i,a),!this.isMouseNear())return;let r=document.documentElement.dataset.theme!=="light",s=r?"0, 240, 255":"8, 145, 178",c=performance.now();this.interactiveProgress+=((this.isInteractiveTarget?1:0)-this.interactiveProgress)*.2;let o=c<this.explosionFlashUntil?1-(c-(this.explosionFlashUntil-380))/380:0,l=18+this.interactiveProgress*3+o*26,f=(r?1:1.2)*(1+this.interactiveProgress*.3+o*1.4),h=t.createRadialGradient(this.smoothMouse.x,this.smoothMouse.y,0,this.smoothMouse.x,this.smoothMouse.y,l);h.addColorStop(0,`rgba(${s}, ${.35*f})`),h.addColorStop(.4,`rgba(${s}, ${.12*f})`),h.addColorStop(1,`rgba(${s}, 0)`),t.beginPath(),t.arc(this.smoothMouse.x,this.smoothMouse.y,l,0,Math.PI*2),t.fillStyle=h,t.fill(),t.beginPath(),t.arc(this.smoothMouse.x,this.smoothMouse.y,4,0,Math.PI*2),t.fillStyle=r?"rgba(0, 240, 255, 0.9)":"rgba(8, 145, 178, 0.92)",t.fill(),t.beginPath(),t.arc(this.smoothMouse.x,this.smoothMouse.y,1.5,0,Math.PI*2),t.fillStyle=r?"#fff":"#ffffff",t.fill()}isMouseNear(){let t=window.innerWidth,i=window.innerHeight;return this.smoothMouse.x>=0&&this.smoothMouse.x<=t&&this.smoothMouse.y>=0&&this.smoothMouse.y<=i}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=q2({type:n,selectors:[["app-particle-background"]],viewQuery:function(i,a){if(i&1&&e4(Wb,7)(qb,7),i&2){let r;xe(r=ze())&&(a.canvasRef=r.first),xe(r=ze())&&(a.cursorCanvasRef=r.first)}},decls:4,vars:0,consts:[["canvas",""],["cursorCanvas",""],["aria-hidden","true",1,"particle-canvas"],["aria-hidden","true",1,"particle-cursor"]],template:function(i,a){i&1&&K2(0,"canvas",2,0)(2,"canvas",3,1)},styles:["[_nghost-%COMP%]{display:contents}.particle-canvas[_ngcontent-%COMP%], .particle-cursor[_ngcontent-%COMP%]{position:fixed;inset:0;width:100%;height:100%;pointer-events:none}.particle-canvas[_ngcontent-%COMP%]{z-index:0}.particle-cursor[_ngcontent-%COMP%]{z-index:10001}@media print{.particle-canvas[_ngcontent-%COMP%], .particle-cursor[_ngcontent-%COMP%]{display:none!important}}"]})}}return n})();var ei=(()=>{class n{constructor(){this.document=Z1(i6),this.platformId=Z1(T4),this.lenis=Z1(Y4),this.activeState=h3(!1),this.trigger=null,this.scrollPosition=0,this.active=this.activeState.asReadonly()}open(t){!ce(this.platformId)||this.activeState()||(this.trigger=t??null,this.scrollPosition=this.lenis.getScrollPosition(),this.document.documentElement.classList.add("profile-tour-active"),this.lenis.pause(),this.activeState.set(!0))}finish(){this.activeState()&&(this.activeState.set(!1),this.document.documentElement.classList.remove("profile-tour-active"),window.scrollTo({top:this.scrollPosition,behavior:"instant"}),this.lenis.resume(),requestAnimationFrame(()=>this.trigger?.focus()))}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=R3({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var Ah=(n,e)=>e.href;function jb(n,e){if(n&1){let t=Ie();D1(0,"a",18),D3("click",function(a){let r=Pe(t).$implicit,s=b2();return Re(s.navigate(a,r.href))}),X(1),P1()}if(n&2){let t=e.$implicit;ht("href",t.href,ut),J(),O1(t.label)}}function Kb(n,e){n&1&&(ft(),D1(0,"svg",14),j2(1,"path",19)(2,"path",20),P1())}function Jb(n,e){n&1&&(ft(),D1(0,"svg",14),j2(1,"path",19)(2,"path",21)(3,"path",22),P1())}function Zb(n,e){n&1&&(ft(),D1(0,"svg",14),j2(1,"path",23),P1())}function Qb(n,e){n&1&&(ft(),D1(0,"svg",14),j2(1,"path",24),P1())}function eS(n,e){if(n&1){let t=Ie();D1(0,"a",18),D3("click",function(a){let r=Pe(t).$implicit,s=b2(2);return Re(s.navigate(a,r.href))}),X(1),P1()}if(n&2){let t=e.$implicit;ht("href",t.href,ut),J(),O1(t.label)}}function tS(n,e){if(n&1&&(D1(0,"nav",17),p2(1,eS,2,2,"a",5,Ah),P1()),n&2){let t=b2();J(),m2(t.links)}}var Nh=(()=>{class n{constructor(){this.theme=Z1(Xr),this.constellationSound=Z1(In),this.profileTour=Z1(ei),this.lenis=Z1(Y4),this.router=Z1(ko),this.scrollRequestId=0,this.menuOpen=h3(!1),this.links=[{label:"About",href:"#about"},{label:"Experience",href:"#experience"},{label:"Projects",href:"#projects"},{label:"Skills",href:"#skills"},{label:"Contact",href:"#contact"}]}onEscape(){this.menuOpen()&&this.menuOpen.set(!1)}navigate(t,i){t.preventDefault(),this.menuOpen.set(!1);let a=++this.scrollRequestId;if(this.router.url.split(/[?#]/)[0]!=="/"){this.router.navigate(["/"]).then(r=>{r&&this.scrollWhenSectionIsReady(i,a)});return}this.lenis.scrollToSection(i)}toggleMenu(){this.menuOpen.update(t=>!t)}toggleTheme(){this.theme.toggle()}toggleConstellationSound(){this.constellationSound.toggleMute()}startProfileTour(t){this.menuOpen.set(!1),this.profileTour.open(t.currentTarget)}closeMenu(){this.menuOpen.set(!1)}navigateToTerminal(t){t.preventDefault(),this.menuOpen.set(!1),this.scrollRequestId++,this.lenis.scrollTo(0,{immediate:!0}),this.router.navigate(["/terminal"]).then(()=>{requestAnimationFrame(()=>{this.lenis.scrollTo(0,{immediate:!0})})})}scrollWhenSectionIsReady(t,i,a=0){if(i!==this.scrollRequestId)return;if(!(document.querySelector(t)instanceof HTMLElement)){a<60&&requestAnimationFrame(()=>this.scrollWhenSectionIsReady(t,i,a+1));return}requestAnimationFrame(()=>requestAnimationFrame(()=>{i===this.scrollRequestId&&this.lenis.scrollToSection(t)}))}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=q2({type:n,selectors:[["app-cyber-nav"]],hostBindings:function(i,a){i&1&&D3("keydown.escape",function(){return a.onEscape()},_o)},decls:31,vars:10,consts:[[1,"cyber-nav"],["href","#top","aria-label","Back to top",1,"cyber-nav__brand",3,"click"],[1,"cyber-nav__mark"],[1,"cyber-nav__name"],["aria-label","Main navigation",1,"cyber-nav__links"],[3,"href"],[1,"cyber-nav__actions"],["routerLink","/terminal","aria-label","Open the interactive profile shell",1,"cyber-nav__shell",3,"click"],["aria-hidden","true"],["type","button","aria-label","Start the interactive profile presentation",1,"cyber-nav__tour",3,"click"],["aria-hidden","true",1,"cyber-nav__tour-pulse"],["type","button","aria-label","Toggle navigation menu",1,"cyber-nav__menu",3,"click"],["aria-hidden","true",1,"cyber-nav__menu-bar"],["type","button",1,"cyber-nav__sound",3,"click"],["viewBox","0 0 24 24","aria-hidden","true"],["type","button",1,"cyber-nav__theme",3,"click"],["href","#contact",1,"cyber-nav__cta",3,"click"],["aria-label","Mobile navigation",1,"cyber-nav__mobile"],[3,"click","href"],["d","M11 5 6 9H3v6h3l5 4V5Z"],["d","m16 9 6 6M22 9l-6 6"],["d","M15.5 8.5a5 5 0 0 1 0 7"],["d","M17.8 6.2a8.5 8.5 0 0 1 0 11.6"],["d","M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"],["d","M20.5 14.4A8.5 8.5 0 0 1 9.6 3.5 8.5 8.5 0 1 0 20.5 14.4Z"]],template:function(i,a){i&1&&(D1(0,"header",0)(1,"a",1),D3("click",function(s){return a.navigate(s,"#top")}),D1(2,"span",2),X(3,"RB"),P1(),D1(4,"span",3),X(5,"R\xE9my Binsztock"),P1()(),D1(6,"nav",4),p2(7,jb,2,2,"a",5,Ah),P1(),D1(9,"div",6)(10,"a",7),D3("click",function(s){return a.navigateToTerminal(s)}),D1(11,"span",8),X(12,">_"),P1(),D1(13,"strong"),X(14,"Profile shell"),P1()(),D1(15,"button",9),D3("click",function(s){return a.startProfileTour(s)}),j2(16,"span",10),X(17," Discover my profile "),P1(),D1(18,"button",11),D3("click",function(){return a.toggleMenu()}),j2(19,"span",12)(20,"span",12)(21,"span",12),P1(),D1(22,"button",13),D3("click",function(){return a.toggleConstellationSound()}),I3(23,Kb,3,0,":svg:svg",14)(24,Jb,4,0,":svg:svg",14),P1(),D1(25,"button",15),D3("click",function(){return a.toggleTheme()}),I3(26,Zb,2,0,":svg:svg",14)(27,Qb,2,0,":svg:svg",14),P1(),D1(28,"a",16),D3("click",function(s){return a.navigate(s,"#contact")}),X(29,"Let's connect"),P1()(),I3(30,tS,3,0,"nav",17),P1()),i&2&&(X3("cyber-nav--open",a.menuOpen()),J(7),m2(a.links),J(11),Y2("aria-expanded",a.menuOpen()),J(4),Y2("aria-pressed",!a.constellationSound.muted())("aria-label",a.constellationSound.muted()?"Unmute constellation sounds":"Mute constellation sounds"),J(),k3(a.constellationSound.muted()?23:24),J(2),Y2("aria-pressed",a.theme.isDark())("aria-label",a.theme.isDark()?"Switch to light theme":"Switch to dark theme"),J(),k3(a.theme.isDark()?26:27),J(4),k3(a.menuOpen()?30:-1))},dependencies:[Do],styles:['.cyber-nav[_ngcontent-%COMP%]{position:fixed;top:1rem;left:var(--page-pad);right:var(--page-pad);z-index:100;display:flex;flex-wrap:wrap;align-items:center;gap:1rem;width:auto;padding:.65rem 1rem .65rem 1.25rem;border:1px solid var(--border-glow);border-radius:999px;background:color-mix(in srgb,var(--surface) 82%,transparent);-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);box-shadow:0 4px 24px color-mix(in srgb,var(--bg-deep) 60%,transparent),0 0 30px color-mix(in srgb,var(--accent) 6%,transparent);transition:border-radius .3s,padding .3s}.cyber-nav--open[_ngcontent-%COMP%]{border-radius:20px;padding-bottom:.5rem}.cyber-nav__brand[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.6rem;color:var(--ink);font-weight:700;font-size:.85rem;white-space:nowrap;transition:transform .35s cubic-bezier(.22,1,.36,1),color .25s ease;animation:_ngcontent-%COMP%_brand-enter .85s cubic-bezier(.22,1,.36,1) both}.cyber-nav__brand[_ngcontent-%COMP%]:hover{transform:translateY(-1px)}.cyber-nav__brand[_ngcontent-%COMP%]:active{transform:translateY(0) scale(.985)}.cyber-nav__mark[_ngcontent-%COMP%]{position:relative;isolation:isolate;display:grid;place-items:center;width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,var(--accent),var(--accent-secondary));color:var(--bg-deep);font-family:var(--font-mono);font-size:.65rem;font-weight:700;box-shadow:0 0 16px color-mix(in srgb,var(--accent) 40%,transparent);transition:transform .25s ease,box-shadow .35s ease;animation:_ngcontent-%COMP%_brand-mark-pulse 3.6s ease-in-out infinite}.cyber-nav__mark[_ngcontent-%COMP%]:before, .cyber-nav__mark[_ngcontent-%COMP%]:after{content:"";position:absolute;border-radius:50%;pointer-events:none}.cyber-nav__mark[_ngcontent-%COMP%]:before{inset:-8px;border:1px dashed color-mix(in srgb,var(--accent) 38%,transparent);opacity:.55;animation:_ngcontent-%COMP%_brand-orbit-spin-reverse 7s linear infinite}.cyber-nav__mark[_ngcontent-%COMP%]:after{inset:-5px;border:1.5px solid transparent;border-top-color:var(--accent);border-right-color:color-mix(in srgb,var(--accent-secondary) 70%,transparent);opacity:.7;animation:_ngcontent-%COMP%_brand-orbit-spin 2.8s linear infinite}.cyber-nav__brand[_ngcontent-%COMP%]:hover   .cyber-nav__mark[_ngcontent-%COMP%]{transform:scale(1.06);box-shadow:0 0 20px color-mix(in srgb,var(--accent) 55%,transparent),0 0 36px color-mix(in srgb,var(--accent-secondary) 25%,transparent)}.cyber-nav__brand[_ngcontent-%COMP%]:hover   .cyber-nav__mark[_ngcontent-%COMP%]:before{opacity:.9;animation-duration:3.5s}.cyber-nav__brand[_ngcontent-%COMP%]:hover   .cyber-nav__mark[_ngcontent-%COMP%]:after{opacity:1;animation-duration:.95s}.cyber-nav__brand[_ngcontent-%COMP%]:active   .cyber-nav__mark[_ngcontent-%COMP%]{transform:scale(.94)}.cyber-nav__name[_ngcontent-%COMP%]{position:relative;overflow:hidden;transition:color .25s ease}.cyber-nav__name[_ngcontent-%COMP%]:after{content:"";position:absolute;top:-10%;left:-130%;width:42%;height:120%;background:linear-gradient(90deg,transparent,color-mix(in srgb,var(--accent) 28%,transparent),transparent);transform:skew(-20deg);opacity:0;pointer-events:none}.cyber-nav__brand[_ngcontent-%COMP%]:hover   .cyber-nav__name[_ngcontent-%COMP%]{color:var(--accent);animation:_ngcontent-%COMP%_brand-name-glitch .5s steps(2,end) 1}.cyber-nav__brand[_ngcontent-%COMP%]:hover   .cyber-nav__name[_ngcontent-%COMP%]:after{animation:_ngcontent-%COMP%_brand-name-shimmer .7s ease-out 1}@keyframes _ngcontent-%COMP%_brand-enter{0%{opacity:0;transform:translate(-14px);filter:blur(5px)}to{opacity:1;transform:translate(0);filter:blur(0)}}@keyframes _ngcontent-%COMP%_brand-mark-pulse{0%,to{box-shadow:0 0 16px color-mix(in srgb,var(--accent) 40%,transparent)}50%{box-shadow:0 0 20px color-mix(in srgb,var(--accent) 52%,transparent),0 0 30px color-mix(in srgb,var(--accent-secondary) 18%,transparent)}}@keyframes _ngcontent-%COMP%_brand-orbit-spin{to{transform:rotate(360deg)}}@keyframes _ngcontent-%COMP%_brand-orbit-spin-reverse{to{transform:rotate(-360deg)}}@keyframes _ngcontent-%COMP%_brand-name-glitch{0%,to{transform:translate(0);text-shadow:none}15%{transform:translate(-1px);text-shadow:2px 0 color-mix(in srgb,var(--accent-secondary) 80%,transparent),-2px 0 var(--accent)}30%{transform:translate(1px,-1px);text-shadow:-1px 0 var(--accent),1px 0 color-mix(in srgb,var(--accent-secondary) 80%,transparent)}45%{transform:translate(0);text-shadow:none}60%{transform:translate(1px);text-shadow:1px 0 var(--accent),-1px 0 color-mix(in srgb,var(--accent-secondary) 70%,transparent)}}@keyframes _ngcontent-%COMP%_brand-name-shimmer{0%{left:-130%;opacity:0}20%{opacity:1}to{left:160%;opacity:0}}.cyber-nav__links[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1.25rem;margin-left:auto}.cyber-nav__links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{position:relative;color:var(--muted);font-size:.78rem;font-weight:600;transition:color .2s ease}.cyber-nav__links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:-4px;left:0;width:0;height:1px;background:var(--accent);transition:width .25s ease}.cyber-nav__links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--accent)}.cyber-nav__links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after{width:100%}.cyber-nav__actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.cyber-nav__shell[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.45rem;min-height:34px;padding:.4rem .7rem;border:1px solid var(--line);border-radius:999px;color:var(--muted);font-family:var(--font-mono);font-size:.62rem;transition:border-color .2s,color .2s,box-shadow .2s}.cyber-nav__shell[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--accent);font-weight:800}.cyber-nav__shell[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font:inherit;white-space:nowrap}.cyber-nav__shell[_ngcontent-%COMP%]:hover{border-color:var(--accent);color:var(--accent);box-shadow:0 0 14px color-mix(in srgb,var(--accent) 18%,transparent)}.cyber-nav__tour[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;min-height:34px;padding:.45rem .75rem;border:1px solid color-mix(in srgb,var(--accent) 42%,var(--line));border-radius:999px;background:var(--accent-soft);color:var(--ink-soft);font-family:var(--font-body);font-size:.66rem;font-weight:700;cursor:pointer;transition:border-color .2s,color .2s,box-shadow .2s,transform .2s}.cyber-nav__tour[_ngcontent-%COMP%]:hover{border-color:var(--accent);color:var(--accent);box-shadow:0 0 16px color-mix(in srgb,var(--accent) 24%,transparent);transform:translateY(-1px)}.cyber-nav__tour-pulse[_ngcontent-%COMP%]{width:.42rem;aspect-ratio:1;border-radius:50%;background:var(--accent);box-shadow:0 0 .55rem var(--accent);animation:_ngcontent-%COMP%_tour-button-pulse 1.8s ease-in-out infinite}@keyframes _ngcontent-%COMP%_tour-button-pulse{50%{opacity:.4;transform:scale(.75)}}.cyber-nav__menu[_ngcontent-%COMP%]{display:none;flex-direction:column;justify-content:center;gap:5px;width:34px;height:34px;padding:0;border:1px solid var(--line);border-radius:50%;background:transparent;cursor:pointer}.cyber-nav__menu-bar[_ngcontent-%COMP%]{display:block;width:14px;height:1.5px;margin:0 auto;border-radius:1px;background:var(--ink-soft);transition:transform .25s,opacity .25s}.cyber-nav--open[_ngcontent-%COMP%]   .cyber-nav__menu-bar[_ngcontent-%COMP%]:nth-child(1){transform:translateY(6.5px) rotate(45deg)}.cyber-nav--open[_ngcontent-%COMP%]   .cyber-nav__menu-bar[_ngcontent-%COMP%]:nth-child(2){opacity:0}.cyber-nav--open[_ngcontent-%COMP%]   .cyber-nav__menu-bar[_ngcontent-%COMP%]:nth-child(3){transform:translateY(-6.5px) rotate(-45deg)}.cyber-nav__sound[_ngcontent-%COMP%], .cyber-nav__theme[_ngcontent-%COMP%]{display:grid;place-items:center;width:34px;height:34px;padding:0;border:1px solid var(--line);border-radius:50%;background:transparent;color:var(--muted);cursor:pointer;transition:border-color .2s,color .2s,box-shadow .2s}.cyber-nav__sound[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .cyber-nav__theme[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}.cyber-nav__sound[_ngcontent-%COMP%]:hover, .cyber-nav__theme[_ngcontent-%COMP%]:hover{border-color:var(--accent);color:var(--accent);box-shadow:0 0 12px color-mix(in srgb,var(--accent) 25%,transparent)}.cyber-nav__sound[aria-pressed=true][_ngcontent-%COMP%]{color:var(--accent);border-color:color-mix(in srgb,var(--accent) 45%,var(--line))}.cyber-nav__cta[_ngcontent-%COMP%]{padding:.5rem 1rem;border-radius:999px;background:linear-gradient(135deg,var(--accent),var(--accent-secondary));color:var(--btn-primary-text)!important;font-size:.75rem;font-weight:700;transition:transform .2s,box-shadow .2s}.cyber-nav__cta[_ngcontent-%COMP%]:hover{transform:translateY(-1px);box-shadow:0 0 20px color-mix(in srgb,var(--accent) 45%,transparent);color:var(--btn-primary-text)!important}.cyber-nav__mobile[_ngcontent-%COMP%]{display:none;flex-direction:column;gap:.25rem;width:100%;padding:.5rem .25rem .75rem;border-top:1px solid var(--line)}.cyber-nav__mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:.65rem .75rem;border-radius:8px;color:var(--ink-soft);font-size:.85rem;font-weight:600;transition:background .2s,color .2s}.cyber-nav__mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:var(--accent-soft);color:var(--accent)}@media(max-width:860px){.cyber-nav__links[_ngcontent-%COMP%]{display:none}.cyber-nav__menu[_ngcontent-%COMP%], .cyber-nav__mobile[_ngcontent-%COMP%]{display:flex}.cyber-nav__name[_ngcontent-%COMP%]{display:none}.cyber-nav__tour[_ngcontent-%COMP%]{font-size:0}.cyber-nav__tour[_ngcontent-%COMP%]:after{content:"Tour";font-size:.66rem}.cyber-nav__shell[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:none}}@media(max-width:420px){.cyber-nav__cta[_ngcontent-%COMP%]{display:none}.cyber-nav__tour[_ngcontent-%COMP%]{padding-inline:.65rem}}@media(prefers-reduced-motion:reduce){.cyber-nav__tour-pulse[_ngcontent-%COMP%]{animation:none}}']})}}return n})();var iS=["dialog"],nS=["stagePanel"],aS=(n,e)=>e.id,Ph=(n,e)=>e.label,rS=(n,e)=>e.company,Rh=(n,e)=>e.title;function sS(n,e){if(n&1){let t=Ie();t1(0,"li")(1,"button",28),ke("click",function(){let a=Pe(t).$index,r=b2();return Re(r.goTo(a))}),t1(2,"span",29),X(3),a1(),t1(4,"span"),X(5),a1()()()}if(n&2){let t=e.$implicit,i=e.$index,a=b2();J(),X3("is-active",i===a.currentIndex())("is-complete",i<a.currentIndex()),Y2("aria-current",i===a.currentIndex()?"step":null),J(2),O1((i+1).toString().padStart(2,"0")),J(2),O1(t.label)}}function cS(n,e){if(n&1&&(t1(0,"li"),X(1),a1()),n&2){let t=e.$implicit;J(),O1(t)}}function oS(n,e){if(n&1&&(t1(0,"div",16)(1,"div",30)(2,"span"),X(3,"Currently"),a1(),t1(4,"strong"),X(5),a1(),t1(6,"small"),X(7),a1()(),t1(8,"ul",31),p2(9,cS,2,1,"li",null,_e),a1()()),n&2){let t=b2();J(5),O1(t.profile.role),J(2),dt("",t.profile.location," \xB7 ",t.profile.availability),J(2),m2(t.profile.heroTags)}}function lS(n,e){if(n&1&&(t1(0,"article")(1,"strong"),X(2),a1(),t1(3,"span"),X(4),a1()()),n&2){let t=e.$implicit;J(2),dt("",t.value,"",t.suffix),J(2),O1(t.label)}}function fS(n,e){if(n&1&&(t1(0,"div",17),p2(1,lS,5,3,"article",null,Ph),a1()),n&2){let t=b2();J(),m2(t.stats)}}function uS(n,e){if(n&1&&(t1(0,"article")(1,"span"),X(2),a1(),t1(3,"div")(4,"h2"),X(5),a1(),t1(6,"p"),X(7),a1()()()),n&2){let t=e.$implicit;J(2),O1(t.period),J(3),O1(t.role),J(2),dt("",t.company," \xB7 ",t.location)}}function hS(n,e){if(n&1&&(t1(0,"div",18),p2(1,uS,8,4,"article",null,rS),a1()),n&2){let t=b2();J(),m2(t.experience)}}function dS(n,e){if(n&1&&(t1(0,"li"),X(1),a1()),n&2){let t=e.$implicit;J(),O1(t)}}function pS(n,e){if(n&1&&(t1(0,"article")(1,"span"),X(2),a1(),t1(3,"h2"),X(4),a1(),t1(5,"p"),X(6),a1(),t1(7,"ul",32),p2(8,dS,2,1,"li",null,_e),a1()()),n&2){let t=e.$implicit;J(2),O1(t.tag),J(2),O1(t.title),J(2),O1(t.description),J(2),m2(t.tech.slice(0,4))}}function mS(n,e){if(n&1&&(t1(0,"div",19),p2(1,pS,10,3,"article",null,Rh),a1()),n&2){let t=b2();J(),m2(t.projects)}}function gS(n,e){if(n&1&&(t1(0,"article")(1,"h2"),X(2),a1(),t1(3,"p"),X(4),a1()()),n&2){let t=e.$implicit;J(2),O1(t.title),J(2),O1(t.items.slice(0,6).join(" \xB7 "))}}function vS(n,e){if(n&1&&(t1(0,"div",20),p2(1,gS,5,2,"article",null,Rh),a1()),n&2){let t=b2();J(),m2(t.skillGroups)}}function MS(n,e){if(n&1&&(t1(0,"a",33),X(1),t1(2,"span",10),X(3,"\u2197"),a1()()),n&2){let t=e.$implicit;u4("href",t.href,ut),J(),T2(" ",t.label," ")}}function _S(n,e){if(n&1&&(t1(0,"div",21)(1,"p"),X(2),a1(),t1(3,"div"),p2(4,MS,4,2,"a",33,Ph),a1()()),n&2){let t=b2();J(2),O1(t.profile.availability),J(2),m2(t.contacts)}}var Ih=(()=>{class n{constructor(){this.tour=Z1(ei),this.dialog=_s.required("dialog"),this.stagePanel=_s.required("stagePanel"),this.timerTween=null,this.entranceTimeline=null,this.cursorCanvas=null,this.cursorParent=null,this.cursorNextSibling=null,this.closing=!1,this.reducedMotion=typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,this.stages=[{id:"intro",label:"Profile",eyebrow:"01 \u2014 Profile",title:"I turn complex systems into clear, secure products.",description:F3.summary},{id:"impact",label:"Impact",eyebrow:"02 \u2014 At a glance",title:"Experience measured in delivery, breadth and trust.",description:"A product-minded engineering profile built across long-term platforms, ambitious migrations and security-critical systems."},{id:"experience",label:"Journey",eyebrow:"03 \u2014 Experience",title:"From full-stack foundations to platform leadership.",description:"A career shaped by durable products, technical transitions and teams that need dependable engineering."},{id:"projects",label:"Work",eyebrow:"04 \u2014 Selected work",title:"Platforms designed to remove friction at scale.",description:"A selection of migrations, identity systems and customer experiences delivered across the Aviv Group ecosystem."},{id:"skills",label:"Toolbox",eyebrow:"05 \u2014 Capabilities",title:"Full-stack range, with security built into the process.",description:"Architecture, product delivery and AppSec come together in one engineering practice."},{id:"contact",label:"Connect",eyebrow:"06 \u2014 Next step",title:"Let\u2019s build something resilient and useful.",description:"I am open to senior full-stack opportunities where product quality, architecture and security all matter."}],this.profile=F3,this.stats=Yn,this.experience=jn.slice(0,3),this.projects=$n.slice(0,3),this.skillGroups=Kn.filter(t=>["Frontend and Mobile","Backend","Security and Compliance","AI Tools"].includes(t.title)),this.contacts=Xn,this.currentIndex=h3(0),this.currentStage=n6(()=>this.stages[this.currentIndex()]),this.playing=h3(!this.reducedMotion),this.progressValue=n6(()=>Math.round((this.currentIndex()+1)/this.stages.length*100))}ngAfterViewInit(){this.dialog().nativeElement.showModal(),this.attachPortfolioCursor(),this.animateEntrance()}ngOnDestroy(){this.timerTween?.kill(),this.entranceTimeline?.kill(),this.restorePortfolioCursor()}onArrowRight(){this.next()}onArrowLeft(){this.previous()}goTo(t){t===this.currentIndex()||t<0||t>=this.stages.length||this.transitionTo(t)}next(){let t=this.currentIndex()+1;t<this.stages.length?this.transitionTo(t):(this.playing.set(!1),this.timerTween?.kill())}previous(){this.goTo(this.currentIndex()-1)}togglePlayback(){this.playing.update(t=>!t),this.playing()?this.startStageTimer():this.timerTween?.pause()}handleCancel(t){t.preventDefault(),this.close()}close(){if(!this.closing){if(this.closing=!0,this.timerTween?.kill(),this.reducedMotion){this.finishClose();return}p3.to(this.dialog().nativeElement,{autoAlpha:0,duration:.28,ease:"power2.in",onComplete:()=>this.finishClose()})}}animateEntrance(){let t=this.dialog().nativeElement,i=this.stagePanel().nativeElement;if(this.reducedMotion){p3.set(t,{autoAlpha:1});return}this.entranceTimeline=p3.timeline({defaults:{ease:"power3.out"},onComplete:()=>this.startStageTimer()}).from(t,{autoAlpha:0,duration:.3}).from(".profile-tour__rail",{x:-28,autoAlpha:0,duration:.55},"<0.08").from(".profile-tour__topbar",{y:-18,autoAlpha:0,duration:.45},"<").from(i,{y:28,autoAlpha:0,duration:.65},"<0.08").from(".profile-tour__controls",{y:16,autoAlpha:0,duration:.4},"<0.15")}transitionTo(t){this.timerTween?.kill();let i=this.stagePanel().nativeElement;if(this.reducedMotion){this.currentIndex.set(t);return}p3.to(i,{y:-16,autoAlpha:0,duration:.2,ease:"power2.in",onComplete:()=>{this.currentIndex.set(t),requestAnimationFrame(()=>{p3.fromTo(i,{y:24,autoAlpha:0},{y:0,autoAlpha:1,duration:.48,ease:"power3.out",onComplete:()=>this.startStageTimer()})})}})}startStageTimer(){if(this.timerTween?.kill(),!this.playing()||this.reducedMotion||this.currentIndex()===this.stages.length-1)return;let t=this.dialog().nativeElement.querySelector(".profile-tour__time-fill");t instanceof HTMLElement&&(this.timerTween=p3.fromTo(t,{scaleX:0},{scaleX:1,duration:7,ease:"none",onComplete:()=>this.next()}))}finishClose(){this.restorePortfolioCursor(),this.dialog().nativeElement.close(),this.tour.finish()}attachPortfolioCursor(){let t=document.querySelector(".particle-cursor");!(t instanceof HTMLElement)||!t.parentNode||(this.cursorCanvas=t,this.cursorParent=t.parentNode,this.cursorNextSibling=t.nextSibling,this.dialog().nativeElement.append(t))}restorePortfolioCursor(){!this.cursorCanvas||!this.cursorParent||(this.cursorParent.insertBefore(this.cursorCanvas,this.cursorNextSibling),this.cursorCanvas=null,this.cursorParent=null,this.cursorNextSibling=null)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=q2({type:n,selectors:[["app-profile-tour"]],viewQuery:function(i,a){i&1&&Co(a.dialog,iS,5)(a.stagePanel,nS,5),i&2&&Lo(2)},hostBindings:function(i,a){i&1&&D3("keydown.arrowright",function(){return a.onArrowRight()},vs)("keydown.arrowleft",function(){return a.onArrowLeft()},vs)},decls:48,vars:14,consts:[["dialog",""],["stagePanel",""],["aria-labelledby","profile-tour-title","aria-describedby","profile-tour-description",1,"profile-tour",3,"cancel"],[1,"profile-tour__layout"],["aria-label","Presentation chapters",1,"profile-tour__rail"],["aria-hidden","true",1,"profile-tour__monogram"],[1,"profile-tour__main"],[1,"profile-tour__topbar"],["aria-hidden","true",1,"profile-tour__status-dot"],[1,"profile-tour__counter"],["aria-hidden","true"],["type","button",1,"profile-tour__exit",3,"click"],["aria-live","polite","aria-atomic","true",1,"profile-tour__stage"],[1,"profile-tour__eyebrow"],["id","profile-tour-title"],["id","profile-tour-description",1,"profile-tour__lead"],[1,"profile-tour__intro-grid"],[1,"profile-tour__stats"],[1,"profile-tour__timeline"],[1,"profile-tour__cards"],[1,"profile-tour__skills"],[1,"profile-tour__contact"],[1,"profile-tour__controls"],["role","progressbar","aria-label","Presentation progress","aria-valuemin","0","aria-valuemax","100",1,"profile-tour__progress"],["aria-hidden","true",1,"profile-tour__time-fill"],[1,"profile-tour__control-buttons"],["type","button","aria-label","Previous chapter",3,"click","disabled"],["type","button",1,"profile-tour__play",3,"click"],["type","button",3,"click"],[1,"profile-tour__step-number"],[1,"profile-tour__identity"],["aria-label","Core technologies",1,"profile-tour__chips"],["aria-label","Technologies"],["target","_blank","rel","noopener noreferrer",3,"href"]],template:function(i,a){if(i&1&&(t1(0,"dialog",2,0),ke("cancel",function(s){return a.handleCancel(s)}),t1(2,"div",3)(3,"aside",4)(4,"div",5),X(5,"RB"),a1(),t1(6,"ol"),p2(7,sS,6,7,"li",null,aS),a1()(),t1(9,"section",6)(10,"header",7)(11,"div"),K2(12,"span",8),X(13," Guided profile "),a1(),t1(14,"span",9),X(15),t1(16,"i",10),X(17,"/"),a1(),X(18),a1(),t1(19,"button",11),ke("click",function(){return a.close()}),X(20," Exit presentation "),t1(21,"kbd"),X(22,"Esc"),a1()()(),t1(23,"div",12,1)(25,"p",13),X(26),a1(),t1(27,"h1",14),X(28),a1(),t1(29,"p",15),X(30),a1(),I3(31,oS,11,3,"div",16)(32,fS,3,0,"div",17)(33,hS,3,0,"div",18)(34,mS,3,0,"div",19)(35,vS,3,0,"div",20)(36,_S,6,1,"div",21),a1(),t1(37,"footer",22)(38,"div",23),K2(39,"span")(40,"i",24),a1(),t1(41,"div",25)(42,"button",26),ke("click",function(){return a.previous()}),X(43," \u2190 "),a1(),t1(44,"button",27),ke("click",function(){return a.togglePlayback()}),X(45),a1(),t1(46,"button",28),ke("click",function(){return a.currentIndex()===a.stages.length-1?a.close():a.next()}),X(47),a1()()()()()()),i&2){let r;J(7),m2(a.stages),J(8),T2(" ",(a.currentIndex()+1).toString().padStart(2,"0")," "),J(3),T2(" ",a.stages.length.toString().padStart(2,"0")," "),J(8),O1(a.currentStage().eyebrow),J(2),O1(a.currentStage().title),J(2),T2(" ",a.currentStage().description," "),J(),k3((r=a.currentStage().id)==="intro"?31:r==="impact"?32:r==="experience"?33:r==="projects"?34:r==="skills"?35:r==="contact"?36:-1),J(7),Y2("aria-valuenow",a.progressValue()),J(),wo("width",a.progressValue(),"%"),J(3),u4("disabled",a.currentIndex()===0),J(2),Y2("aria-pressed",!a.playing()),J(),T2(" ",a.playing()?"Pause":"Resume"," "),J(),Y2("aria-label",a.currentIndex()===a.stages.length-1?"End presentation":"Next chapter"),J(),T2(" ",a.currentIndex()===a.stages.length-1?"\xD7":"\u2192"," ")}},styles:['[_nghost-%COMP%]{position:fixed;inset:0;z-index:10000}.profile-tour[_ngcontent-%COMP%]{width:100vw;max-width:none;height:100dvh;max-height:none;margin:0;padding:0;overflow:hidden;border:0;background:radial-gradient(circle at 78% 12%,color-mix(in srgb,var(--accent-secondary) 14%,transparent),transparent 34rem),radial-gradient(circle at 42% 92%,color-mix(in srgb,var(--accent) 10%,transparent),transparent 32rem),color-mix(in srgb,var(--bg-deep) 95%,black);color:var(--ink)}.profile-tour[_ngcontent-%COMP%]::backdrop{background:var(--bg-deep)}.profile-tour__layout[_ngcontent-%COMP%]{position:relative;display:grid;grid-template-columns:minmax(12rem,16vw) 1fr;min-height:100%}.profile-tour__rail[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-height:100dvh;padding:clamp(1.25rem,3vw,2.5rem);border-right:1px solid color-mix(in srgb,var(--line) 72%,transparent);background:color-mix(in srgb,var(--paper) 62%,transparent);-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px)}.profile-tour__monogram[_ngcontent-%COMP%]{position:relative;flex:0 0 3rem;display:grid;place-items:center;width:3rem;min-width:3rem;height:3rem;min-height:3rem;border:1px solid var(--accent);border-radius:50%;color:var(--accent);font-family:var(--font-mono);font-size:.72rem;font-weight:800;box-shadow:inset 0 0 1.2rem color-mix(in srgb,var(--accent) 14%,transparent)}.profile-tour__rail[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{display:grid;gap:.45rem;margin:auto 0;padding:0;list-style:none}.profile-tour__rail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:relative;display:grid;grid-template-columns:2rem 1fr;align-items:center;width:100%;min-height:2.75rem;padding:.5rem 0;border:0;background:transparent;color:var(--muted);font-family:var(--font-body);font-size:.74rem;text-align:left;cursor:pointer;transition:color .2s ease,transform .2s ease}.profile-tour__rail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:before{content:"";position:absolute;left:-1rem;width:2px;height:0;background:var(--accent);box-shadow:0 0 .8rem var(--accent);transition:height .25s ease}.profile-tour__rail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .profile-tour__rail[_ngcontent-%COMP%]   button.is-active[_ngcontent-%COMP%]{color:var(--ink);transform:translate(.2rem)}.profile-tour__rail[_ngcontent-%COMP%]   button.is-active[_ngcontent-%COMP%]:before{height:1.8rem}.profile-tour__rail[_ngcontent-%COMP%]   button.is-complete[_ngcontent-%COMP%]   .profile-tour__step-number[_ngcontent-%COMP%]{color:var(--accent)}.profile-tour__step-number[_ngcontent-%COMP%]{color:var(--muted-light);font-family:var(--font-mono);font-size:.63rem}.profile-tour__main[_ngcontent-%COMP%]{display:grid;grid-template-rows:auto minmax(0,1fr) auto;min-width:0;min-height:100dvh;padding:0 clamp(1.25rem,5vw,5rem)}.profile-tour__topbar[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;min-height:5.5rem;border-bottom:1px solid var(--line);color:var(--muted);font-family:var(--font-mono);font-size:.64rem;letter-spacing:.1em;text-transform:uppercase}.profile-tour__topbar[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.6rem}.profile-tour__status-dot[_ngcontent-%COMP%]{width:.4rem;aspect-ratio:1;border-radius:50%;background:#4ade80;box-shadow:0 0 .8rem #4ade80;animation:_ngcontent-%COMP%_tour-pulse 1.8s ease-in-out infinite}.profile-tour__counter[_ngcontent-%COMP%]{color:var(--ink)}.profile-tour__counter[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin:0 .2rem;color:var(--muted-light);font-style:normal}.profile-tour__exit[_ngcontent-%COMP%]{justify-self:end;display:flex;align-items:center;gap:.7rem;min-height:2.75rem;padding:.4rem 0;border:0;background:transparent;color:var(--muted);font:inherit;text-transform:inherit;cursor:pointer}.profile-tour__exit[_ngcontent-%COMP%]:hover{color:var(--accent)}.profile-tour__exit[_ngcontent-%COMP%]   kbd[_ngcontent-%COMP%]{padding:.18rem .35rem;border:1px solid var(--line-strong);border-radius:.25rem;background:var(--surface);color:var(--ink-soft);font:inherit}.profile-tour__stage[_ngcontent-%COMP%]{align-self:center;width:min(100%,74rem);max-height:calc(100dvh - 12rem);margin:0 auto;padding:clamp(1.5rem,4vh,3.5rem) 0;overflow:auto;scrollbar-width:thin;scrollbar-color:var(--line-strong) transparent}.profile-tour__eyebrow[_ngcontent-%COMP%]{margin:0 0 .9rem;color:var(--accent);font-family:var(--font-mono);font-size:clamp(.62rem,1vw,.75rem);font-weight:700;letter-spacing:.16em;text-transform:uppercase}.profile-tour__stage[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{max-width:16ch;margin:0;font-size:clamp(2rem,5vw,5rem);font-weight:650;letter-spacing:-.055em;line-height:.98}.profile-tour__lead[_ngcontent-%COMP%]{max-width:72ch;margin:1.3rem 0 0;color:var(--muted);font-size:clamp(.84rem,1.25vw,1rem);line-height:1.65}.profile-tour__intro-grid[_ngcontent-%COMP%], .profile-tour__stats[_ngcontent-%COMP%], .profile-tour__timeline[_ngcontent-%COMP%], .profile-tour__cards[_ngcontent-%COMP%], .profile-tour__skills[_ngcontent-%COMP%], .profile-tour__contact[_ngcontent-%COMP%]{margin-top:clamp(1.5rem,4vh,3rem)}.profile-tour__intro-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(16rem,.8fr) 1.2fr;gap:2rem}.profile-tour__identity[_ngcontent-%COMP%]{display:grid;gap:.45rem;padding-left:1rem;border-left:2px solid var(--accent)}.profile-tour__identity[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .profile-tour__identity[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:var(--muted);font-size:.72rem}.profile-tour__identity[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{max-width:34rem;color:var(--ink);font-size:clamp(.95rem,1.7vw,1.3rem)}.profile-tour__chips[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-content:start;gap:.45rem;margin:0;padding:0;list-style:none}.profile-tour__chips[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .profile-tour__cards[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.35rem .65rem;border:1px solid var(--line-strong);border-radius:999px;color:var(--ink-soft);font-family:var(--font-mono);font-size:.62rem}.profile-tour__stats[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}.profile-tour__stats[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{display:grid;gap:.35rem;padding:clamp(1rem,3vw,2rem);border-right:1px solid var(--line)}.profile-tour__stats[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:last-child{border-right:0}.profile-tour__stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--accent);font-family:var(--font-display);font-size:clamp(2rem,4vw,4rem);letter-spacing:-.06em}.profile-tour__stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--muted);font-size:.72rem}.profile-tour__timeline[_ngcontent-%COMP%]{position:relative;display:grid;gap:0}.profile-tour__timeline[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;bottom:0;left:clamp(7rem,15vw,12rem);width:1px;background:var(--line-strong)}.profile-tour__timeline[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{position:relative;display:grid;grid-template-columns:clamp(7rem,15vw,12rem) 1fr;gap:2rem;padding:.85rem 0}.profile-tour__timeline[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:before{content:"";position:absolute;top:1.55rem;left:calc(clamp(7rem,15vw,12rem) - .25rem);width:.5rem;aspect-ratio:1;border-radius:50%;background:var(--accent);box-shadow:0 0 .8rem var(--accent)}.profile-tour__timeline[_ngcontent-%COMP%] > article[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{padding-right:1rem;color:var(--muted);font-family:var(--font-mono);font-size:.62rem}.profile-tour__timeline[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .profile-tour__cards[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .profile-tour__skills[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:clamp(.9rem,1.5vw,1.15rem)}.profile-tour__timeline[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .profile-tour__cards[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .profile-tour__skills[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.25rem 0 0;color:var(--muted);font-size:.74rem}.profile-tour__cards[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:.8rem}.profile-tour__cards[_ngcontent-%COMP%]   article[_ngcontent-%COMP%], .profile-tour__skills[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{padding:clamp(1rem,2vw,1.4rem);border:1px solid var(--line);background:color-mix(in srgb,var(--surface) 54%,transparent)}.profile-tour__cards[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:block;margin-bottom:.7rem;color:var(--accent);font-family:var(--font-mono);font-size:.58rem;text-transform:uppercase}.profile-tour__cards[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{display:-webkit-box;min-height:4.5rem;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:4}.profile-tour__cards[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.35rem;margin:1rem 0 0;padding:0;list-style:none}.profile-tour__cards[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.2rem .45rem;font-size:.54rem}.profile-tour__skills[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:.8rem}.profile-tour__skills[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{border-left:2px solid var(--accent)}.profile-tour__contact[_ngcontent-%COMP%]{display:flex;align-items:flex-end;justify-content:space-between;gap:2rem;padding-top:1.5rem;border-top:1px solid var(--line)}.profile-tour__contact[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{max-width:26rem;margin:0;color:var(--ink-soft)}.profile-tour__contact[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:.6rem}.profile-tour__contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:2rem;min-width:10rem;min-height:2.75rem;padding:.65rem .8rem;border-bottom:1px solid var(--line-strong);color:var(--ink);font-size:.72rem}.profile-tour__contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{border-color:var(--accent);color:var(--accent)}.profile-tour__controls[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr auto;align-items:center;gap:2rem;min-height:6rem;border-top:1px solid var(--line)}.profile-tour__progress[_ngcontent-%COMP%]{position:relative;height:2px;overflow:hidden;background:var(--line)}.profile-tour__progress[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{position:absolute;inset:0 auto 0 0;background:color-mix(in srgb,var(--accent) 40%,var(--line-strong));transition:width .4s ease}.profile-tour__time-fill[_ngcontent-%COMP%]{position:absolute;inset:0;background:var(--accent);box-shadow:0 0 .65rem var(--accent);transform:scaleX(0);transform-origin:left}.profile-tour__control-buttons[_ngcontent-%COMP%]{display:flex;gap:.45rem}.profile-tour__control-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:grid;place-items:center;min-width:2.75rem;min-height:2.75rem;padding:0;border:1px solid var(--line-strong);border-radius:50%;background:transparent;color:var(--ink);font-family:var(--font-body);cursor:pointer}.profile-tour__control-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled){border-color:var(--accent);color:var(--accent)}.profile-tour__control-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{opacity:.3;cursor:not-allowed}.profile-tour__control-buttons[_ngcontent-%COMP%]   .profile-tour__play[_ngcontent-%COMP%]{width:auto;padding:0 1rem;border-radius:999px;font-size:.67rem}@keyframes _ngcontent-%COMP%_tour-pulse{50%{opacity:.45}}@media(max-width:900px){.profile-tour__layout[_ngcontent-%COMP%]{grid-template-columns:1fr}.profile-tour__rail[_ngcontent-%COMP%]{position:fixed;right:0;bottom:5.7rem;left:0;z-index:2;display:block;min-height:auto;padding:0 1.25rem;border:0;background:transparent;-webkit-backdrop-filter:none;backdrop-filter:none}.profile-tour__monogram[_ngcontent-%COMP%]{display:none}.profile-tour__rail[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:.65rem}.profile-tour__rail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block;width:.55rem;min-height:2rem;padding:0;overflow:hidden;border-radius:999px;background:var(--line-strong);color:transparent}.profile-tour__rail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:before{display:none}.profile-tour__rail[_ngcontent-%COMP%]   button.is-active[_ngcontent-%COMP%]{width:2rem;background:var(--accent);transform:none}.profile-tour__rail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none}.profile-tour__main[_ngcontent-%COMP%]{padding:0 1.25rem}.profile-tour__stage[_ngcontent-%COMP%]{max-height:calc(100dvh - 13.5rem)}.profile-tour__stage[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:clamp(2rem,8vw,4rem)}.profile-tour__cards[_ngcontent-%COMP%]{grid-template-columns:1fr}.profile-tour__cards[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{min-height:0}}@media(max-width:620px){.profile-tour__topbar[_ngcontent-%COMP%]{grid-template-columns:1fr auto;min-height:4.5rem}.profile-tour__counter[_ngcontent-%COMP%]{display:none}.profile-tour__exit[_ngcontent-%COMP%]{font-size:0}.profile-tour__exit[_ngcontent-%COMP%]:before{content:"Exit";font-size:.64rem}.profile-tour__exit[_ngcontent-%COMP%]   kbd[_ngcontent-%COMP%]{display:none}.profile-tour__stage[_ngcontent-%COMP%]{max-height:calc(100dvh - 12rem);padding:1.25rem 0}.profile-tour__lead[_ngcontent-%COMP%]{font-size:.76rem;line-height:1.5}.profile-tour__intro-grid[_ngcontent-%COMP%], .profile-tour__stats[_ngcontent-%COMP%], .profile-tour__skills[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr;gap:.6rem}.profile-tour__intro-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.profile-tour__stats[_ngcontent-%COMP%]{border:0}.profile-tour__stats[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{padding:.8rem;border:1px solid var(--line)}.profile-tour__stats[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:last-child{border-right:1px solid var(--line)}.profile-tour__timeline[_ngcontent-%COMP%]:before{left:.25rem}.profile-tour__timeline[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:.2rem;padding:.7rem 0 .7rem 1.5rem}.profile-tour__timeline[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:before{top:1.2rem;left:0}.profile-tour__timeline[_ngcontent-%COMP%] > article[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{padding:0}.profile-tour__skills[_ngcontent-%COMP%]{grid-template-columns:1fr}.profile-tour__contact[_ngcontent-%COMP%]{align-items:stretch;flex-direction:column;gap:1rem}.profile-tour__contact[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{justify-content:stretch}.profile-tour__contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{flex:1;min-width:8rem}.profile-tour__controls[_ngcontent-%COMP%]{min-height:5.5rem}.profile-tour__progress[_ngcontent-%COMP%]{display:none}.profile-tour__controls[_ngcontent-%COMP%]{display:flex;justify-content:center}}@media(prefers-reduced-motion:reduce){.profile-tour[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .profile-tour[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:before, .profile-tour[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:after{animation:none!important;transition-duration:.01ms!important}}']})}}return n})();function O7(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=Array(e);t<e;t++)i[t]=n[t];return i}function xS(n){if(Array.isArray(n))return n}function zS(n){if(Array.isArray(n))return O7(n)}function yS(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function kh(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,dd(i.key),i)}}function bS(n,e,t){return e&&kh(n.prototype,e),t&&kh(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function as(n,e){var t=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=Q7(n))||e&&n&&typeof n.length=="number"){t&&(n=t);var i=0,a=function(){};return{s:a,n:function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}},e:function(o){throw o},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var r,s=!0,c=!1;return{s:function(){t=t.call(n)},n:function(){var o=t.next();return s=o.done,o},e:function(o){c=!0,r=o},f:function(){try{s||t.return==null||t.return()}finally{if(c)throw r}}}}function Y1(n,e,t){return(e=dd(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function SS(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function CS(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,a,r,s,c=[],o=!0,l=!1;try{if(r=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;o=!1}else for(;!(o=(i=r.call(t)).done)&&(c.push(i.value),c.length!==e);o=!0);}catch(f){l=!0,a=f}finally{try{if(!o&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(l)throw a}}return c}}function LS(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wS(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Dh(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,i)}return t}function v1(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Dh(Object(t),!0).forEach(function(i){Y1(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Dh(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function fs(n,e){return xS(n)||CS(n,e)||Q7(n,e)||LS()}function C4(n){return zS(n)||SS(n)||Q7(n)||wS()}function TS(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function dd(n){var e=TS(n,"string");return typeof e=="symbol"?e:e+""}function cs(n){"@babel/helpers - typeof";return cs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},cs(n)}function Q7(n,e){if(n){if(typeof n=="string")return O7(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?O7(n,e):void 0}}var Fh=function(){},eo={},pd={},md=null,gd={mark:Fh,measure:Fh};try{typeof window<"u"&&(eo=window),typeof document<"u"&&(pd=document),typeof MutationObserver<"u"&&(md=MutationObserver),typeof performance<"u"&&(gd=performance)}catch(n){}var ES=eo.navigator||{},Oh=ES.userAgent,Uh=Oh===void 0?"":Oh,st=eo,X2=pd,Bh=md,es=gd,UI=!!st.document,y0=!!X2.documentElement&&!!X2.head&&typeof X2.addEventListener=="function"&&typeof X2.createElement=="function",vd=~Uh.indexOf("MSIE")||~Uh.indexOf("Trident/"),ts,AS=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,NS=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,Md={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},"slab-duo":{"fa-regular":"regular",fasldr:"regular"},"slab-press-duo":{"fa-regular":"regular",faslpdr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},vellum:{"fa-solid":"solid",favs:"solid"},pixel:{"fa-regular":"regular",fapr:"regular"},mosaic:{"fa-solid":"solid",fams:"solid"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},PS={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},_d=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],G3="classic",Bn="duotone",xd="sharp",zd="sharp-duotone",yd="chisel",bd="etch",Sd="graphite",Cd="jelly",Ld="jelly-duo",wd="jelly-fill",Td="mosaic",Ed="notdog",Ad="notdog-duo",Nd="pixel",Pd="slab",Rd="slab-duo",Id="slab-press",kd="slab-press-duo",Dd="thumbprint",Fd="utility",Od="utility-duo",Ud="utility-fill",Bd="vellum",Hd="whiteboard",RS="Classic",IS="Duotone",kS="Sharp",DS="Sharp Duotone",FS="Chisel",OS="Etch",US="Graphite",BS="Jelly",HS="Jelly Duo",VS="Jelly Fill",GS="Mosaic",WS="Notdog",qS="Notdog Duo",XS="Pixel",YS="Slab",$S="Slab Duo",jS="Slab Press",KS="Slab Press Duo",JS="Thumbprint",ZS="Utility",QS="Utility Duo",eC="Utility Fill",tC="Vellum",iC="Whiteboard",Vd=[G3,Bn,xd,zd,yd,bd,Sd,Cd,Ld,wd,Td,Ed,Ad,Nd,Pd,Rd,Id,kd,Dd,Fd,Od,Ud,Bd,Hd],BI=(ts={},Y1(Y1(Y1(Y1(Y1(Y1(Y1(Y1(Y1(Y1(ts,G3,RS),Bn,IS),xd,kS),zd,DS),yd,FS),bd,OS),Sd,US),Cd,BS),Ld,HS),wd,VS),Y1(Y1(Y1(Y1(Y1(Y1(Y1(Y1(Y1(Y1(ts,Td,GS),Ed,WS),Ad,qS),Nd,XS),Pd,YS),Rd,$S),Id,jS),kd,KS),Dd,JS),Fd,ZS),Y1(Y1(Y1(Y1(ts,Od,QS),Ud,eC),Bd,tC),Hd,iC)),nC={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},"slab-duo":{400:"fasldr"},"slab-press-duo":{400:"faslpdr"},vellum:{900:"favs"},mosaic:{900:"fams"},pixel:{400:"fapr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},aC={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Slab Duo":{400:"fasldr",normal:"fasldr"},"Font Awesome 7 Slab Press Duo":{400:"faslpdr",normal:"faslpdr"},"Font Awesome 7 Pixel":{400:"fapr",normal:"fapr"},"Font Awesome 7 Mosaic":{900:"fams",normal:"fams"},"Font Awesome 7 Vellum":{900:"favs",normal:"favs"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},rC=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["mosaic",{defaultShortPrefixId:"fams",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["pixel",{defaultShortPrefixId:"fapr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-duo",{defaultShortPrefixId:"fasldr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press-duo",{defaultShortPrefixId:"faslpdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["vellum",{defaultShortPrefixId:"favs",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),sC={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},mosaic:{solid:"fams"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},pixel:{regular:"fapr"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-duo":{regular:"fasldr"},"slab-press":{regular:"faslpr"},"slab-press-duo":{regular:"faslpdr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},vellum:{solid:"favs"},whiteboard:{semibold:"fawsb"}},Gd=["fak","fa-kit","fakd","fa-kit-duotone"],Hh={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},cC=["kit"],oC="kit",lC="kit-duotone",fC="Kit",uC="Kit Duotone",HI=Y1(Y1({},oC,fC),lC,uC),hC={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},dC={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},pC={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Vh={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},is,ns={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},mC=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],gC="classic",vC="duotone",MC="sharp",_C="sharp-duotone",xC="chisel",zC="etch",yC="graphite",bC="jelly",SC="jelly-duo",CC="jelly-fill",LC="mosaic",wC="notdog",TC="notdog-duo",EC="pixel",AC="slab",NC="slab-duo",PC="slab-press",RC="slab-press-duo",IC="thumbprint",kC="utility",DC="utility-duo",FC="utility-fill",OC="vellum",UC="whiteboard",BC="Classic",HC="Duotone",VC="Sharp",GC="Sharp Duotone",WC="Chisel",qC="Etch",XC="Graphite",YC="Jelly",$C="Jelly Duo",jC="Jelly Fill",KC="Mosaic",JC="Notdog",ZC="Notdog Duo",QC="Pixel",eL="Slab",tL="Slab Duo",iL="Slab Press",nL="Slab Press Duo",aL="Thumbprint",rL="Utility",sL="Utility Duo",cL="Utility Fill",oL="Vellum",lL="Whiteboard",VI=(is={},Y1(Y1(Y1(Y1(Y1(Y1(Y1(Y1(Y1(Y1(is,gC,BC),vC,HC),MC,VC),_C,GC),xC,WC),zC,qC),yC,XC),bC,YC),SC,$C),CC,jC),Y1(Y1(Y1(Y1(Y1(Y1(Y1(Y1(Y1(Y1(is,LC,KC),wC,JC),TC,ZC),EC,QC),AC,eL),NC,tL),PC,iL),RC,nL),IC,aL),kC,rL),Y1(Y1(Y1(Y1(is,DC,sL),FC,cL),OC,oL),UC,lL)),fL="kit",uL="kit-duotone",hL="Kit",dL="Kit Duotone",GI=Y1(Y1({},fL,hL),uL,dL),pL={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},"slab-duo":{"fa-regular":"fasldr"},"slab-press-duo":{"fa-regular":"faslpdr"},pixel:{"fa-regular":"fapr"},mosaic:{"fa-solid":"fams"},vellum:{"fa-solid":"favs"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},mL={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],"slab-duo":["fasldr"],"slab-press-duo":["faslpdr"],pixel:["fapr"],mosaic:["fams"],vellum:["favs"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},U7={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},"slab-duo":{fasldr:"fa-regular"},"slab-press-duo":{faslpdr:"fa-regular"},pixel:{fapr:"fa-regular"},mosaic:{fams:"fa-solid"},vellum:{favs:"fa-solid"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},gL=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],Wd=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fasldr","faslpdr","fapr","fams","favs","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(mC,gL),vL=["solid","regular","light","thin","duotone","brands","semibold"],qd=[1,2,3,4,5,6,7,8,9,10],ML=qd.concat([11,12,13,14,15,16,17,18,19,20]),_L=["aw","fw","pull-left","pull-right"],xL=[].concat(C4(Object.keys(mL)),vL,_L,["2xs","xs","sm","lg","xl","2xl","beat","beat-fade","border","bounce","buzz","canvas-square","canvas-roomy","fade","flip-360","flip-both","flip-horizontal","flip-vertical","flip","float","inverse","jello","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","spin-snap","spin-snap-4","spin-snap-8","stack-1x","stack-2x","stack","swing","ul","wag","width-auto","width-fixed",ns.GROUP,ns.SWAP_OPACITY,ns.PRIMARY,ns.SECONDARY]).concat(qd.map(function(n){return"".concat(n,"x")})).concat(ML.map(function(n){return"w-".concat(n)})),zL={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},x0="___FONT_AWESOME___",B7=16,Xd="fa",Yd="svg-inline--fa",Kt="data-fa-i2svg",H7="data-fa-pseudo-element",yL="data-fa-pseudo-element-pending",to="data-prefix",io="data-icon",Gh="fontawesome-i2svg",bL="async",SL=["HTML","HEAD","STYLE","SCRIPT"],$d=["::before","::after",":before",":after"],jd=(function(){try{return!0}catch(n){return!1}})();function Hn(n){return new Proxy(n,{get:function(t,i){return i in t?t[i]:t[G3]}})}var Kd=v1({},Md);Kd[G3]=v1(v1(v1(v1({},{"fa-duotone":"duotone"}),Md[G3]),Hh.kit),Hh["kit-duotone"]);var CL=Hn(Kd),V7=v1({},sC);V7[G3]=v1(v1(v1(v1({},{duotone:"fad"}),V7[G3]),Vh.kit),Vh["kit-duotone"]);var Wh=Hn(V7),G7=v1({},U7);G7[G3]=v1(v1({},G7[G3]),pC.kit);var no=Hn(G7),W7=v1({},pL);W7[G3]=v1(v1({},W7[G3]),hC.kit);var WI=Hn(W7),LL=AS,Jd="fa-layers-text",wL=NS,TL=v1({},nC),qI=Hn(TL),EL=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],R7=PS,AL=[].concat(C4(cC),C4(xL)),Fn=st.FontAwesomeConfig||{};function NL(n){var e=X2.querySelector("script["+n+"]");if(e)return e.getAttribute(n)}function PL(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}X2&&typeof X2.querySelector=="function"&&(qh=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],qh.forEach(function(n){var e=fs(n,2),t=e[0],i=e[1],a=PL(NL(t));a!=null&&(Fn[i]=a)}));var qh,Zd={styleDefault:"solid",familyDefault:G3,cssPrefix:Xd,replacementClass:Yd,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Fn.familyPrefix&&(Fn.cssPrefix=Fn.familyPrefix);var ni=v1(v1({},Zd),Fn);ni.autoReplaceSvg||(ni.observeMutations=!1);var G1={};Object.keys(Zd).forEach(function(n){Object.defineProperty(G1,n,{enumerable:!0,set:function(t){ni[n]=t,On.forEach(function(i){return i(G1)})},get:function(){return ni[n]}})});Object.defineProperty(G1,"familyPrefix",{enumerable:!0,set:function(e){ni.cssPrefix=e,On.forEach(function(t){return t(G1)})},get:function(){return ni.cssPrefix}});st.FontAwesomeConfig=G1;var On=[];function RL(n){return On.push(n),function(){On.splice(On.indexOf(n),1)}}var rt=B7,j4={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function IL(n){if(!(!n||!y0)){var e=X2.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=n;for(var t=X2.head.childNodes,i=null,a=t.length-1;a>-1;a--){var r=t[a],s=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(i=r)}return X2.head.insertBefore(e,i),n}}var kL="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Xh(){for(var n=12,e="";n-- >0;)e+=kL[Math.random()*62|0];return e}function ai(n){for(var e=[],t=(n||[]).length>>>0;t--;)e[t]=n[t];return e}function ao(n){return n.classList?ai(n.classList):(n.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Qd(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function DL(n){return Object.keys(n||{}).reduce(function(e,t){return e+"".concat(t,'="').concat(Qd(n[t]),'" ')},"").trim()}function us(n){return Object.keys(n||{}).reduce(function(e,t){return e+"".concat(t,": ").concat(n[t].trim(),";")},"")}function ro(n){return n.size!==j4.size||n.x!==j4.x||n.y!==j4.y||n.rotate!==j4.rotate||n.flipX||n.flipY}function FL(n){var e=n.transform,t=n.containerWidth,i=n.iconWidth,a={transform:"translate(".concat(t/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),c="rotate(".concat(e.rotate," 0 0)"),o={transform:"".concat(r," ").concat(s," ").concat(c)},l={transform:"translate(".concat(i/2*-1," -256)")};return{outer:a,inner:o,path:l}}function OL(n){var e=n.transform,t=n.width,i=t===void 0?B7:t,a=n.height,r=a===void 0?B7:a,s=n.startCentered,c=s===void 0?!1:s,o="";return c&&vd?o+="translate(".concat(e.x/rt-i/2,"em, ").concat(e.y/rt-r/2,"em) "):c?o+="translate(calc(-50% + ".concat(e.x/rt,"em), calc(-50% + ").concat(e.y/rt,"em)) "):o+="translate(".concat(e.x/rt,"em, ").concat(e.y/rt,"em) "),o+="scale(".concat(e.size/rt*(e.flipX?-1:1),", ").concat(e.size/rt*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var UL=`:root, :host {
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
}`;function ep(){var n=Xd,e=Yd,t=G1.cssPrefix,i=G1.replacementClass,a=UL;if(t!==n||i!==e){var r=new RegExp("\\.".concat(n,"\\-"),"g"),s=new RegExp("\\--".concat(n,"\\-"),"g"),c=new RegExp("\\.".concat(e),"g");a=a.replace(r,".".concat(t,"-")).replace(s,"--".concat(t,"-")).replace(c,".".concat(i))}return a}var Yh=!1;function I7(){G1.autoAddCss&&!Yh&&(IL(ep()),Yh=!0)}var BL={mixout:function(){return{dom:{css:ep,insertCss:I7}}},hooks:function(){return{beforeDOMElementCreation:function(){I7()},beforeI2svg:function(){I7()}}}},z0=st||{};z0[x0]||(z0[x0]={});z0[x0].styles||(z0[x0].styles={});z0[x0].hooks||(z0[x0].hooks={});z0[x0].shims||(z0[x0].shims=[]);var S4=z0[x0],tp=[],ip=function(){X2.removeEventListener("DOMContentLoaded",ip),os=1,tp.map(function(e){return e()})},os=!1;y0&&(os=(X2.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X2.readyState),os||X2.addEventListener("DOMContentLoaded",ip));function HL(n){y0&&(os?setTimeout(n,0):tp.push(n))}function Vn(n){var e=n.tag,t=n.attributes,i=t===void 0?{}:t,a=n.children,r=a===void 0?[]:a;return typeof n=="string"?Qd(n):"<".concat(e," ").concat(DL(i),">").concat(r.map(Vn).join(""),"</").concat(e,">")}function $h(n,e,t){if(n&&n[e]&&n[e][t])return{prefix:e,iconName:t,icon:n[e][t]}}var VL=function(e,t){return function(i,a,r,s){return e.call(t,i,a,r,s)}},k7=function(e,t,i,a){var r=Object.keys(e),s=r.length,c=a!==void 0?VL(t,a):t,o,l,f;for(i===void 0?(o=1,f=e[r[0]]):(o=0,f=i);o<s;o++)l=r[o],f=c(f,e[l],l,e);return f};function np(n){return C4(n).length!==1?null:n.codePointAt(0).toString(16)}function jh(n){return Object.keys(n).reduce(function(e,t){var i=n[t],a=!!i.icon;return a?e[i.iconName]=i.icon:e[t]=i,e},{})}function q7(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=t.skipHooks,a=i===void 0?!1:i,r=jh(e);typeof S4.hooks.addPack=="function"&&!a?S4.hooks.addPack(n,jh(e)):S4.styles[n]=v1(v1({},S4.styles[n]||{}),r),n==="fas"&&q7("fa",e)}var Un=S4.styles,GL=S4.shims,ap=Object.keys(no),WL=ap.reduce(function(n,e){return n[e]=Object.keys(no[e]),n},{}),so=null,rp={},sp={},cp={},op={},lp={};function qL(n){return~AL.indexOf(n)}function XL(n,e){var t=e.split("-"),i=t[0],a=t.slice(1).join("-");return i===n&&a!==""&&!qL(a)?a:null}var fp=function(){var e=function(r){return k7(Un,function(s,c,o){return s[o]=k7(c,r,{}),s},{})};rp=e(function(a,r,s){if(r[3]&&(a[r[3]]=s),r[2]){var c=r[2].filter(function(o){return typeof o=="number"});c.forEach(function(o){a[o.toString(16)]=s})}return a}),sp=e(function(a,r,s){if(a[s]=s,r[2]){var c=r[2].filter(function(o){return typeof o=="string"});c.forEach(function(o){a[o]=s})}return a}),lp=e(function(a,r,s){var c=r[2];return a[s]=s,c.forEach(function(o){a[o]=s}),a});var t="far"in Un||G1.autoFetchSvg,i=k7(GL,function(a,r){var s=r[0],c=r[1],o=r[2];return c==="far"&&!t&&(c="fas"),typeof s=="string"&&(a.names[s]={prefix:c,iconName:o}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:c,iconName:o}),a},{names:{},unicodes:{}});cp=i.names,op=i.unicodes,so=hs(G1.styleDefault,{family:G1.familyDefault})};RL(function(n){so=hs(n.styleDefault,{family:G1.familyDefault})});fp();function co(n,e){return(rp[n]||{})[e]}function YL(n,e){return(sp[n]||{})[e]}function jt(n,e){return(lp[n]||{})[e]}function up(n){return cp[n]||{prefix:null,iconName:null}}function $L(n){var e=op[n],t=co("fas",n);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function ct(){return so}var hp=function(){return{prefix:null,iconName:null,rest:[]}};function jL(n){var e=G3,t=ap.reduce(function(i,a){return i[a]="".concat(G1.cssPrefix,"-").concat(a),i},{});return Vd.forEach(function(i){(n.includes(t[i])||n.some(function(a){return WL[i].includes(a)}))&&(e=i)}),e}function hs(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.family,i=t===void 0?G3:t,a=CL[i][n];if(i===Bn&&!n)return"fad";var r=Wh[i][n]||Wh[i][a],s=n in S4.styles?n:null,c=r||s||null;return c}function KL(n){var e=[],t=null;return n.forEach(function(i){var a=XL(G1.cssPrefix,i);a?t=a:i&&e.push(i)}),{iconName:t,rest:e}}function Kh(n){return n.sort().filter(function(e,t,i){return i.indexOf(e)===t})}var Jh=Wd.concat(Gd);function ds(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.skipLookups,i=t===void 0?!1:t,a=null,r=Kh(n.filter(function(d){return Jh.includes(d)})),s=Kh(n.filter(function(d){return!Jh.includes(d)})),c=r.filter(function(d){return a=d,!_d.includes(d)}),o=fs(c,1),l=o[0],f=l===void 0?null:l,h=jL(r),u=v1(v1({},KL(s)),{},{prefix:hs(f,{family:h})});return v1(v1(v1({},u),ew({values:n,family:h,styles:Un,config:G1,canonical:u,givenPrefix:a})),JL(i,a,u))}function JL(n,e,t){var i=t.prefix,a=t.iconName;if(n||!i||!a)return{prefix:i,iconName:a};var r=e==="fa"?up(a):{},s=jt(i,a);return a=r.iconName||s||a,i=r.prefix||i,i==="far"&&!Un.far&&Un.fas&&!G1.autoFetchSvg&&(i="fas"),{prefix:i,iconName:a}}var ZL=Vd.filter(function(n){return n!==G3||n!==Bn}),QL=Object.keys(U7).filter(function(n){return n!==G3}).map(function(n){return Object.keys(U7[n])}).flat();function ew(n){var e=n.values,t=n.family,i=n.canonical,a=n.givenPrefix,r=a===void 0?"":a,s=n.styles,c=s===void 0?{}:s,o=n.config,l=o===void 0?{}:o,f=t===Bn,h=e.includes("fa-duotone")||e.includes("fad"),u=l.familyDefault==="duotone",d=i.prefix==="fad"||i.prefix==="fa-duotone";if(!f&&(h||u||d)&&(i.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(i.prefix="fab"),!i.prefix&&ZL.includes(t)){var p=Object.keys(c).find(function(m){return QL.includes(m)});if(p||l.autoFetchSvg){var v=rC.get(t).defaultShortPrefixId;i.prefix=v,i.iconName=jt(i.prefix,i.iconName)||i.iconName}}return(i.prefix==="fa"||r==="fa")&&(i.prefix=ct()||"fas"),i}var tw=(function(){function n(){yS(this,n),this.definitions={}}return bS(n,[{key:"add",value:function(){for(var t=this,i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];var s=a.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(c){t.definitions[c]=v1(v1({},t.definitions[c]||{}),s[c]),q7(c,s[c]);var o=no[G3][c];o&&q7(o,s[c]),fp()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,i){var a=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(a).map(function(r){var s=a[r],c=s.prefix,o=s.iconName,l=s.icon,f=l[2];t[c]||(t[c]={}),f.length>0&&f.forEach(function(h){typeof h=="string"&&(t[c][h]=l)}),t[c][o]=l}),t}}])})(),Zh=[],ti={},ii={},iw=Object.keys(ii);function nw(n,e){var t=e.mixoutsTo;return Zh=n,ti={},Object.keys(ii).forEach(function(i){iw.indexOf(i)===-1&&delete ii[i]}),Zh.forEach(function(i){var a=i.mixout?i.mixout():{};if(Object.keys(a).forEach(function(s){typeof a[s]=="function"&&(t[s]=a[s]),cs(a[s])==="object"&&Object.keys(a[s]).forEach(function(c){t[s]||(t[s]={}),t[s][c]=a[s][c]})}),i.hooks){var r=i.hooks();Object.keys(r).forEach(function(s){ti[s]||(ti[s]=[]),ti[s].push(r[s])})}i.provides&&i.provides(ii)}),t}function X7(n,e){for(var t=arguments.length,i=new Array(t>2?t-2:0),a=2;a<t;a++)i[a-2]=arguments[a];var r=ti[n]||[];return r.forEach(function(s){e=s.apply(null,[e].concat(i))}),e}function Jt(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];var a=ti[n]||[];a.forEach(function(r){r.apply(null,t)})}function ot(){var n=arguments[0],e=Array.prototype.slice.call(arguments,1);return ii[n]?ii[n].apply(null,e):void 0}function Y7(n){n.prefix==="fa"&&(n.prefix="fas");var e=n.iconName,t=n.prefix||ct();if(e)return e=jt(t,e)||e,$h(dp.definitions,t,e)||$h(S4.styles,t,e)}var dp=new tw,aw=function(){G1.autoReplaceSvg=!1,G1.observeMutations=!1,Jt("noAuto")},rw={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return y0?(Jt("beforeI2svg",e),ot("pseudoElements2svg",e),ot("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;G1.autoReplaceSvg===!1&&(G1.autoReplaceSvg=!0),G1.observeMutations=!0,HL(function(){cw({autoReplaceSvgRoot:t}),Jt("watch",e)})}},sw={icon:function(e){if(e===null)return null;if(cs(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:jt(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=hs(e[0]);return{prefix:i,iconName:jt(i,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(G1.cssPrefix,"-"))>-1||e.match(LL))){var a=ds(e.split(" "),{skipLookups:!0});return{prefix:a.prefix||ct(),iconName:jt(a.prefix,a.iconName)||a.iconName}}if(typeof e=="string"){var r=ct();return{prefix:r,iconName:jt(r,e)||e}}}},Je={noAuto:aw,config:G1,dom:rw,parse:sw,library:dp,findIconDefinition:Y7,toHtml:Vn},cw=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot,i=t===void 0?X2:t;(Object.keys(S4.styles).length>0||G1.autoFetchSvg)&&y0&&G1.autoReplaceSvg&&Je.dom.i2svg({node:i})};function ps(n,e){return Object.defineProperty(n,"abstract",{get:e}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(i){return Vn(i)})}}),Object.defineProperty(n,"node",{get:function(){if(y0){var i=X2.createElement("div");return i.innerHTML=n.html,i.children}}}),n}function ow(n){var e=n.children,t=n.main,i=n.mask,a=n.attributes,r=n.styles,s=n.transform;if(ro(s)&&t.found&&!i.found){var c=t.width,o=t.height,l={x:c/o/2,y:.5};a.style=us(v1(v1({},r),{},{"transform-origin":"".concat(l.x+s.x/16,"em ").concat(l.y+s.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function lw(n){var e=n.prefix,t=n.iconName,i=n.children,a=n.attributes,r=n.symbol,s=r===!0?"".concat(e,"-").concat(G1.cssPrefix,"-").concat(t):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:v1(v1({},a),{},{id:s}),children:i}]}]}function fw(n){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(t){return t in n})}function oo(n){var e=n.icons,t=e.main,i=e.mask,a=n.prefix,r=n.iconName,s=n.transform,c=n.symbol,o=n.maskId,l=n.extra,f=n.watchable,h=f===void 0?!1:f,u=i.found?i:t,d=u.width,p=u.height,v=[G1.replacementClass,r?"".concat(G1.cssPrefix,"-").concat(r):""].filter(function(b){return l.classes.indexOf(b)===-1}).filter(function(b){return b!==""||!!b}).concat(l.classes).join(" "),m={children:[],attributes:v1(v1({},l.attributes),{},{"data-prefix":a,"data-icon":r,class:v,role:l.attributes.role||"img",viewBox:"0 0 ".concat(d," ").concat(p)})};!fw(l.attributes)&&!l.attributes["aria-hidden"]&&(m.attributes["aria-hidden"]="true"),h&&(m.attributes[Kt]="");var g=v1(v1({},m),{},{prefix:a,iconName:r,main:t,mask:i,maskId:o,transform:s,symbol:c,styles:v1({},l.styles)}),x=i.found&&t.found?ot("generateAbstractMask",g)||{children:[],attributes:{}}:ot("generateAbstractIcon",g)||{children:[],attributes:{}},y=x.children,M=x.attributes;return g.children=y,g.attributes=M,c?lw(g):ow(g)}function Qh(n){var e=n.content,t=n.width,i=n.height,a=n.transform,r=n.extra,s=n.watchable,c=s===void 0?!1:s,o=v1(v1({},r.attributes),{},{class:r.classes.join(" ")});c&&(o[Kt]="");var l=v1({},r.styles);ro(a)&&(l.transform=OL({transform:a,startCentered:!0,width:t,height:i}),l["-webkit-transform"]=l.transform);var f=us(l);f.length>0&&(o.style=f);var h=[];return h.push({tag:"span",attributes:o,children:[e]}),h}function uw(n){var e=n.content,t=n.extra,i=v1(v1({},t.attributes),{},{class:t.classes.join(" ")}),a=us(t.styles);a.length>0&&(i.style=a);var r=[];return r.push({tag:"span",attributes:i,children:[e]}),r}var D7=S4.styles;function $7(n){var e=n[0],t=n[1],i=n.slice(4),a=fs(i,1),r=a[0],s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(G1.cssPrefix,"-").concat(R7.GROUP)},children:[{tag:"path",attributes:{class:"".concat(G1.cssPrefix,"-").concat(R7.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(G1.cssPrefix,"-").concat(R7.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:t,icon:s}}var hw={found:!1,width:512,height:512};function dw(n,e){!jd&&!G1.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(e,'" is missing.'))}function j7(n,e){var t=e;return e==="fa"&&G1.styleDefault!==null&&(e=ct()),new Promise(function(i,a){if(t==="fa"){var r=up(n)||{};n=r.iconName||n,e=r.prefix||e}if(n&&e&&D7[e]&&D7[e][n]){var s=D7[e][n];return i($7(s))}dw(n,e),i(v1(v1({},hw),{},{icon:G1.showMissingIcons&&n?ot("missingIconAbstract")||{}:{}}))})}var ed=function(){},K7=G1.measurePerformance&&es&&es.mark&&es.measure?es:{mark:ed,measure:ed},Dn='FA "7.3.0"',pw=function(e){return K7.mark("".concat(Dn," ").concat(e," begins")),function(){return pp(e)}},pp=function(e){K7.mark("".concat(Dn," ").concat(e," ends")),K7.measure("".concat(Dn," ").concat(e),"".concat(Dn," ").concat(e," begins"),"".concat(Dn," ").concat(e," ends"))},lo={begin:pw,end:pp},rs=function(){};function td(n){var e=n.getAttribute?n.getAttribute(Kt):null;return typeof e=="string"}function mw(n){var e=n.getAttribute?n.getAttribute(to):null,t=n.getAttribute?n.getAttribute(io):null;return e&&t}function gw(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(G1.replacementClass)}function vw(){if(G1.autoReplaceSvg===!0)return ss.replace;var n=ss[G1.autoReplaceSvg];return n||ss.replace}function Mw(n){return X2.createElementNS("http://www.w3.org/2000/svg",n)}function _w(n){return X2.createElement(n)}function mp(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.ceFn,i=t===void 0?n.tag==="svg"?Mw:_w:t;if(typeof n=="string")return X2.createTextNode(n);var a=i(n.tag);Object.keys(n.attributes||[]).forEach(function(s){a.setAttribute(s,n.attributes[s])});var r=n.children||[];return r.forEach(function(s){a.appendChild(mp(s,{ceFn:i}))}),a}function xw(n){var e=" ".concat(n.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var ss={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(a){t.parentNode.insertBefore(mp(a),t)}),t.getAttribute(Kt)===null&&G1.keepOriginalSource){var i=X2.createComment(xw(t));t.parentNode.replaceChild(i,t)}else t.remove()},nest:function(e){var t=e[0],i=e[1];if(~ao(t).indexOf(G1.replacementClass))return ss.replace(e);var a=new RegExp("".concat(G1.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var r=i[0].attributes.class.split(" ").reduce(function(c,o){return o===G1.replacementClass||o.match(a)?c.toSvg.push(o):c.toNode.push(o),c},{toNode:[],toSvg:[]});i[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",r.toNode.join(" "))}var s=i.map(function(c){return Vn(c)}).join(`
`);t.setAttribute(Kt,""),t.innerHTML=s}};function id(n){n()}function gp(n,e){var t=typeof e=="function"?e:rs;if(n.length===0)t();else{var i=id;G1.mutateApproach===bL&&(i=st.requestAnimationFrame||id),i(function(){var a=vw(),r=lo.begin("mutate");n.map(a),r(),t()})}}var fo=!1;function vp(){fo=!0}function J7(){fo=!1}var ls=null;function nd(n){if(Bh&&G1.observeMutations){var e=n.treeCallback,t=e===void 0?rs:e,i=n.nodeCallback,a=i===void 0?rs:i,r=n.pseudoElementsCallback,s=r===void 0?rs:r,c=n.observeMutationsRoot,o=c===void 0?X2:c;ls=new Bh(function(l){if(!fo){var f=ct();ai(l).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!td(h.addedNodes[0])&&(G1.searchPseudoElements&&s(h.target),t(h.target)),h.type==="attributes"&&h.target.parentNode&&G1.searchPseudoElements&&s([h.target],!0),h.type==="attributes"&&td(h.target)&&~EL.indexOf(h.attributeName))if(h.attributeName==="class"&&mw(h.target)){var u=ds(ao(h.target)),d=u.prefix,p=u.iconName;h.target.setAttribute(to,d||f),p&&h.target.setAttribute(io,p)}else gw(h.target)&&a(h.target)})}}),y0&&ls.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function zw(){ls&&ls.disconnect()}function yw(n){var e=n.getAttribute("style"),t=[];return e&&(t=e.split(";").reduce(function(i,a){var r=a.split(":"),s=r[0],c=r.slice(1);return s&&c.length>0&&(i[s]=c.join(":").trim()),i},{})),t}function bw(n){var e=n.getAttribute("data-prefix"),t=n.getAttribute("data-icon"),i=n.innerText!==void 0?n.innerText.trim():"",a=ds(ao(n));return a.prefix||(a.prefix=ct()),e&&t&&(a.prefix=e,a.iconName=t),a.iconName&&a.prefix||(a.prefix&&i.length>0&&(a.iconName=YL(a.prefix,n.innerText)||co(a.prefix,np(n.innerText))),!a.iconName&&G1.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=n.firstChild.data)),a}function Sw(n){var e=ai(n.attributes).reduce(function(t,i){return t.name!=="class"&&t.name!=="style"&&(t[i.name]=i.value),t},{});return e}function Cw(){return{iconName:null,prefix:null,transform:j4,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ad(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=bw(n),i=t.iconName,a=t.prefix,r=t.rest,s=Sw(n),c=X7("parseNodeAttributes",{},n),o=e.styleParser?yw(n):[];return v1({iconName:i,prefix:a,transform:j4,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:s}},c)}var Lw=S4.styles;function Mp(n){var e=G1.autoReplaceSvg==="nest"?ad(n,{styleParser:!1}):ad(n);return~e.extra.classes.indexOf(Jd)?ot("generateLayersText",n,e):ot("generateSvgReplacementMutation",n,e)}function ww(){return[].concat(C4(Gd),C4(Wd))}function rd(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!y0)return Promise.resolve();var t=X2.documentElement.classList,i=function(h){return t.add("".concat(Gh,"-").concat(h))},a=function(h){return t.remove("".concat(Gh,"-").concat(h))},r=G1.autoFetchSvg?ww():_d.concat(Object.keys(Lw));r.includes("fa")||r.push("fa");var s=[".".concat(Jd,":not([").concat(Kt,"])")].concat(r.map(function(f){return".".concat(f,":not([").concat(Kt,"])")})).join(", ");if(s.length===0)return Promise.resolve();var c=[];try{c=ai(n.querySelectorAll(s))}catch(f){}if(c.length>0)i("pending"),a("complete");else return Promise.resolve();var o=lo.begin("onTree"),l=c.reduce(function(f,h){try{var u=Mp(h);u&&f.push(u)}catch(d){jd||d.name==="MissingIcon"&&console.error(d)}return f},[]);return new Promise(function(f,h){Promise.all(l).then(function(u){gp(u,function(){i("active"),i("complete"),a("pending"),typeof e=="function"&&e(),o(),f()})}).catch(function(u){o(),h(u)})})}function Tw(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Mp(n).then(function(t){t&&gp([t],e)})}function Ew(n){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:Y7(e||{}),a=t.mask;return a&&(a=(a||{}).icon?a:Y7(a||{})),n(i,v1(v1({},t),{},{mask:a}))}}var Aw=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=t.transform,a=i===void 0?j4:i,r=t.symbol,s=r===void 0?!1:r,c=t.mask,o=c===void 0?null:c,l=t.maskId,f=l===void 0?null:l,h=t.classes,u=h===void 0?[]:h,d=t.attributes,p=d===void 0?{}:d,v=t.styles,m=v===void 0?{}:v;if(e){var g=e.prefix,x=e.iconName,y=e.icon;return ps(v1({type:"icon"},e),function(){return Jt("beforeDOMElementCreation",{iconDefinition:e,params:t}),oo({icons:{main:$7(y),mask:o?$7(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:x,transform:v1(v1({},j4),a),symbol:s,maskId:f,extra:{attributes:p,styles:m,classes:u}})})}},Nw={mixout:function(){return{icon:Ew(Aw)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=rd,t.nodeCallback=Tw,t}}},provides:function(e){e.i2svg=function(t){var i=t.node,a=i===void 0?X2:i,r=t.callback,s=r===void 0?function(){}:r;return rd(a,s)},e.generateSvgReplacementMutation=function(t,i){var a=i.iconName,r=i.prefix,s=i.transform,c=i.symbol,o=i.mask,l=i.maskId,f=i.extra;return new Promise(function(h,u){Promise.all([j7(a,r),o.iconName?j7(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(d){var p=fs(d,2),v=p[0],m=p[1];h([t,oo({icons:{main:v,mask:m},prefix:r,iconName:a,transform:s,symbol:c,maskId:l,extra:f,watchable:!0})])}).catch(u)})},e.generateAbstractIcon=function(t){var i=t.children,a=t.attributes,r=t.main,s=t.transform,c=t.styles,o=us(c);o.length>0&&(a.style=o);var l;return ro(s)&&(l=ot("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),i.push(l||r.icon),{children:i,attributes:a}}}},Pw={mixout:function(){return{layer:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=i.classes,r=a===void 0?[]:a;return ps({type:"layer"},function(){Jt("beforeDOMElementCreation",{assembler:t,params:i});var s=[];return t(function(c){Array.isArray(c)?c.map(function(o){s=s.concat(o.abstract)}):s=s.concat(c.abstract)}),[{tag:"span",attributes:{class:["".concat(G1.cssPrefix,"-layers")].concat(C4(r)).join(" ")},children:s}]})}}}},Rw={mixout:function(){return{counter:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=i.title,r=a===void 0?null:a,s=i.classes,c=s===void 0?[]:s,o=i.attributes,l=o===void 0?{}:o,f=i.styles,h=f===void 0?{}:f;return ps({type:"counter",content:t},function(){return Jt("beforeDOMElementCreation",{content:t,params:i}),uw({content:t.toString(),title:r,extra:{attributes:l,styles:h,classes:["".concat(G1.cssPrefix,"-layers-counter")].concat(C4(c))}})})}}}},Iw={mixout:function(){return{text:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=i.transform,r=a===void 0?j4:a,s=i.classes,c=s===void 0?[]:s,o=i.attributes,l=o===void 0?{}:o,f=i.styles,h=f===void 0?{}:f;return ps({type:"text",content:t},function(){return Jt("beforeDOMElementCreation",{content:t,params:i}),Qh({content:t,transform:v1(v1({},j4),r),extra:{attributes:l,styles:h,classes:["".concat(G1.cssPrefix,"-layers-text")].concat(C4(c))}})})}}},provides:function(e){e.generateLayersText=function(t,i){var a=i.transform,r=i.extra,s=null,c=null;if(vd){var o=parseInt(getComputedStyle(t).fontSize,10),l=t.getBoundingClientRect();s=l.width/o,c=l.height/o}return Promise.resolve([t,Qh({content:t.innerHTML,width:s,height:c,transform:a,extra:r,watchable:!0})])}}},_p=new RegExp('"',"ug"),sd=[1105920,1112319],cd=v1(v1(v1(v1({},{FontAwesome:{normal:"fas",400:"fas"}}),aC),zL),dC),Z7=Object.keys(cd).reduce(function(n,e){return n[e.toLowerCase()]=cd[e],n},{}),kw=Object.keys(Z7).reduce(function(n,e){var t=Z7[e];return n[e]=t[900]||C4(Object.entries(t))[0][1],n},{});function Dw(n){var e=n.replace(_p,"");return np(C4(e)[0]||"")}function Fw(n){var e=n.getPropertyValue("font-feature-settings").includes("ss01"),t=n.getPropertyValue("content"),i=t.replace(_p,""),a=i.codePointAt(0),r=a>=sd[0]&&a<=sd[1],s=i.length===2?i[0]===i[1]:!1;return r||s||e}function Ow(n,e){var t=n.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(e),a=isNaN(i)?"normal":i;return(Z7[t]||{})[a]||kw[t]}function od(n,e){var t="".concat(yL).concat(e.replace(":","-"));return new Promise(function(i,a){if(n.getAttribute(t)!==null)return i();var r=ai(n.children),s=r.filter(function(L){return L.getAttribute(H7)===e})[0],c=st.getComputedStyle(n,e),o=c.getPropertyValue("font-family"),l=o.match(wL),f=c.getPropertyValue("font-weight"),h=c.getPropertyValue("content");if(s&&!l)return n.removeChild(s),i();if(l&&h!=="none"&&h!==""){var u=c.getPropertyValue("content"),d=Ow(o,f),p=Dw(u),v=l[0].startsWith("FontAwesome"),m=Fw(c),g=co(d,p),x=g;if(v){var y=$L(p);y.iconName&&y.prefix&&(g=y.iconName,d=y.prefix)}if(g&&!m&&(!s||s.getAttribute(to)!==d||s.getAttribute(io)!==x)){n.setAttribute(t,x),s&&n.removeChild(s);var M=Cw(),b=M.extra;b.attributes[H7]=e,j7(g,d).then(function(L){var S=oo(v1(v1({},M),{},{icons:{main:L,mask:hp()},prefix:d,iconName:x,extra:b,watchable:!0})),_=X2.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?n.insertBefore(_,n.firstChild):n.appendChild(_),_.outerHTML=S.map(function(C){return Vn(C)}).join(`
`),n.removeAttribute(t),i()}).catch(a)}else i()}else i()})}function Uw(n){return Promise.all([od(n,"::before"),od(n,"::after")])}function Bw(n){return n.parentNode!==document.head&&!~SL.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(H7)&&(!n.parentNode||n.parentNode.tagName!=="svg")}var Hw=function(e){return!!e&&$d.some(function(t){return e.includes(t)})},Vw=function(e){if(!e)return[];var t=new Set,i=e.split(/,(?![^()]*\))/).map(function(o){return o.trim()});i=i.flatMap(function(o){return o.includes("(")?o:o.split(",").map(function(l){return l.trim()})});var a=as(i),r;try{for(a.s();!(r=a.n()).done;){var s=r.value;if(Hw(s)){var c=$d.reduce(function(o,l){return o.replace(l,"")},s);c!==""&&c!=="*"&&t.add(c)}}}catch(o){a.e(o)}finally{a.f()}return t};function ld(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(y0){var t;if(e)t=n;else if(G1.searchPseudoElementsFullScan)t=n.querySelectorAll("*");else{var i=new Set,a=as(document.styleSheets),r;try{for(a.s();!(r=a.n()).done;){var s=r.value;try{var c=as(s.cssRules),o;try{for(c.s();!(o=c.n()).done;){var l=o.value,f=Vw(l.selectorText),h=as(f),u;try{for(h.s();!(u=h.n()).done;){var d=u.value;i.add(d)}}catch(v){h.e(v)}finally{h.f()}}}catch(v){c.e(v)}finally{c.f()}}catch(v){G1.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(s.href," (").concat(v.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(v){a.e(v)}finally{a.f()}if(!i.size)return;var p=Array.from(i).join(", ");try{t=n.querySelectorAll(p)}catch(v){}}return new Promise(function(v,m){var g=ai(t).filter(Bw).map(Uw),x=lo.begin("searchPseudoElements");vp(),Promise.all(g).then(function(){x(),J7(),v()}).catch(function(){x(),J7(),m()})})}}var Gw={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=ld,t}}},provides:function(e){e.pseudoElements2svg=function(t){var i=t.node,a=i===void 0?X2:i;G1.searchPseudoElements&&ld(a)}}},fd=!1,Ww={mixout:function(){return{dom:{unwatch:function(){vp(),fd=!0}}}},hooks:function(){return{bootstrap:function(){nd(X7("mutationObserverCallbacks",{}))},noAuto:function(){zw()},watch:function(t){var i=t.observeMutationsRoot;fd?J7():nd(X7("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},ud=function(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,a){var r=a.toLowerCase().split("-"),s=r[0],c=r.slice(1).join("-");if(s&&c==="h")return i.flipX=!0,i;if(s&&c==="v")return i.flipY=!0,i;if(c=parseFloat(c),isNaN(c))return i;switch(s){case"grow":i.size=i.size+c;break;case"shrink":i.size=i.size-c;break;case"left":i.x=i.x-c;break;case"right":i.x=i.x+c;break;case"up":i.y=i.y-c;break;case"down":i.y=i.y+c;break;case"rotate":i.rotate=i.rotate+c;break}return i},t)},qw={mixout:function(){return{parse:{transform:function(t){return ud(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,i){var a=i.getAttribute("data-fa-transform");return a&&(t.transform=ud(a)),t}}},provides:function(e){e.generateAbstractTransformGrouping=function(t){var i=t.main,a=t.transform,r=t.containerWidth,s=t.iconWidth,c={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(a.x*32,", ").concat(a.y*32,") "),l="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),h={transform:"".concat(o," ").concat(l," ").concat(f)},u={transform:"translate(".concat(s/2*-1," -256)")},d={outer:c,inner:h,path:u};return{tag:"g",attributes:v1({},d.outer),children:[{tag:"g",attributes:v1({},d.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:v1(v1({},i.icon.attributes),d.path)}]}]}}}},F7={x:0,y:0,width:"100%",height:"100%"};function hd(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||e)&&(n.attributes.fill="black"),n}function Xw(n){return n.tag==="g"?n.children:[n]}var Yw={hooks:function(){return{parseNodeAttributes:function(t,i){var a=i.getAttribute("data-fa-mask"),r=a?ds(a.split(" ").map(function(s){return s.trim()})):hp();return r.prefix||(r.prefix=ct()),t.mask=r,t.maskId=i.getAttribute("data-fa-mask-id"),t}}},provides:function(e){e.generateAbstractMask=function(t){var i=t.children,a=t.attributes,r=t.main,s=t.mask,c=t.maskId,o=t.transform,l=r.width,f=r.icon,h=s.width,u=s.icon,d=FL({transform:o,containerWidth:h,iconWidth:l}),p={tag:"rect",attributes:v1(v1({},F7),{},{fill:"white"})},v=f.children?{children:f.children.map(hd)}:{},m={tag:"g",attributes:v1({},d.inner),children:[hd(v1({tag:f.tag,attributes:v1(v1({},f.attributes),d.path)},v))]},g={tag:"g",attributes:v1({},d.outer),children:[m]},x="mask-".concat(c||Xh()),y="clip-".concat(c||Xh()),M={tag:"mask",attributes:v1(v1({},F7),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,g]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:Xw(u)},M]};return i.push(b,{tag:"rect",attributes:v1({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(x,")")},F7)}),{children:i,attributes:a}}}},$w={provides:function(e){var t=!1;st.matchMedia&&(t=st.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:v1(v1({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=v1(v1({},r),{},{attributeName:"opacity"}),c={tag:"circle",attributes:v1(v1({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||c.children.push({tag:"animate",attributes:v1(v1({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:v1(v1({},s),{},{values:"1;0;1;1;0;1;"})}),i.push(c),i.push({tag:"path",attributes:v1(v1({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:v1(v1({},s),{},{values:"1;0;0;0;0;1;"})}]}),t||i.push({tag:"path",attributes:v1(v1({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:v1(v1({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},jw={hooks:function(){return{parseNodeAttributes:function(t,i){var a=i.getAttribute("data-fa-symbol"),r=a===null?!1:a===""?!0:a;return t.symbol=r,t}}}},Kw=[BL,Nw,Pw,Rw,Iw,Gw,Ww,qw,Yw,$w,jw];nw(Kw,{mixoutsTo:Je});var XI=Je.noAuto,xp=Je.config,YI=Je.library,zp=Je.dom,yp=Je.parse,$I=Je.findIconDefinition,jI=Je.toHtml,bp=Je.icon,KI=Je.layer,Jw=Je.text,Zw=Je.counter;var Qw=["*"],eT=(()=>{class n{defaultPrefix="fas";fallbackIcon=null;fixedWidth;set autoAddCss(t){xp.autoAddCss=t,this._autoAddCss=t}get autoAddCss(){return this._autoAddCss}_autoAddCss=!0;static \u0275fac=function(i){return new(i||n)};static \u0275prov=R3({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),tT=(()=>{class n{definitions={};addIcons(...t){for(let i of t){i.prefix in this.definitions||(this.definitions[i.prefix]={}),this.definitions[i.prefix][i.iconName]=i;for(let a of i.icon[2])typeof a=="string"&&(this.definitions[i.prefix][a]=i)}}addIconPacks(...t){for(let i of t){let a=Object.keys(i).map(r=>i[r]);this.addIcons(...a)}}getIconDefinition(t,i){return t in this.definitions&&i in this.definitions[t]?this.definitions[t][i]:null}static \u0275fac=function(i){return new(i||n)};static \u0275prov=R3({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),iT=n=>{throw new Error(`Could not find icon with iconName=${n.iconName} and prefix=${n.prefix} in the icon library.`)},nT=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},Cp=n=>n!=null&&(n===90||n===180||n===270||n==="90"||n==="180"||n==="270"),aT=n=>{let e=Cp(n.rotate),t={[`fa-${n.animation}`]:n.animation!=null&&!n.animation.startsWith("spin"),"fa-spin":n.animation==="spin"||n.animation==="spin-reverse","fa-spin-pulse":n.animation==="spin-pulse"||n.animation==="spin-pulse-reverse","fa-spin-reverse":n.animation==="spin-reverse"||n.animation==="spin-pulse-reverse","fa-pulse":n.animation==="spin-pulse"||n.animation==="spin-pulse-reverse","fa-fw":n.fixedWidth,"fa-border":n.border,"fa-inverse":n.inverse,"fa-layers-counter":n.counter,"fa-flip-horizontal":n.flip==="horizontal"||n.flip==="both","fa-flip-vertical":n.flip==="vertical"||n.flip==="both",[`fa-${n.size}`]:n.size!=null,[`fa-rotate-${n.rotate}`]:e,"fa-rotate-by":n.rotate!=null&&!e,[`fa-pull-${n.pull}`]:n.pull!=null,[`fa-stack-${n.stackItemSize}`]:n.stackItemSize!=null};return Object.keys(t).map(i=>t[i]?i:null).filter(i=>i!=null)},uo=new WeakSet,Sp="fa-auto-css";function rT(n,e,t){if(!e.autoAddCss||uo.has(n))return;if(n.getElementById(Sp)!=null){e.autoAddCss=!1,uo.add(n);return}let i=n.createElement("style");i.setAttribute("type","text/css"),i.setAttribute("id",Sp),t&&i.setAttribute("nonce",t),i.innerHTML=zp.css();let a=n.head.childNodes,r=null;for(let s=a.length-1;s>-1;s--){let c=a[s],o=c.nodeName.toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=c)}n.head.insertBefore(i,r),e.autoAddCss=!1,uo.add(n)}var sT=n=>n.prefix!==void 0&&n.iconName!==void 0,cT=(n,e)=>sT(n)?n:Array.isArray(n)&&n.length===2?{prefix:n[0],iconName:n[1]}:{prefix:e,iconName:n},oT=(()=>{class n{stackItemSize=qn("1x");size=qn();_effect=vo(()=>{if(this.size())throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')});static \u0275fac=function(i){return new(i||n)};static \u0275dir=yo({type:n,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:[1,"stackItemSize"],size:[1,"size"]}})}return n})(),lT=(()=>{class n{size=qn();classes=n6(()=>{let t=this.size(),i=t?{[`fa-${t}`]:!0}:{};return t6(Ne({},i),{"fa-stack":!0})});static \u0275fac=function(i){return new(i||n)};static \u0275cmp=q2({type:n,selectors:[["fa-stack"]],hostVars:2,hostBindings:function(i,a){i&2&&To(a.classes())},inputs:{size:[1,"size"]},ngContentSelectors:Qw,decls:1,vars:0,template:function(i,a){i&1&&(bo(),So(0))},encapsulation:2})}return n})(),Lp=(()=>{class n{icon=se();title=se();animation=se();mask=se();flip=se();size=se();pull=se();border=se();inverse=se();symbol=se();rotate=se();fixedWidth=se();transform=se();a11yRole=se();renderedIconHTML=n6(()=>{let t=this.icon()??this.config.fallbackIcon;if(!t)return nT(),"";let i=this.findIconDefinition(t);if(!i)return"";let a=this.buildParams();rT(this.document,this.config,this.cspNonce);let r=bp(i,a);return this.sanitizer.bypassSecurityTrustHtml(r.html.join(`
`))});cspNonce=Z1(go);document=Z1(i6);sanitizer=Z1(Ro);config=Z1(eT);iconLibrary=Z1(tT);stackItem=Z1(oT,{optional:!0});stack=Z1(lT,{optional:!0});constructor(){this.stack!=null&&this.stackItem==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x" />.')}findIconDefinition(t){let i=cT(t,this.config.defaultPrefix);if("icon"in i)return i;let a=this.iconLibrary.getIconDefinition(i.prefix,i.iconName);return a??(iT(i),null)}buildParams(){let t=this.fixedWidth(),i={flip:this.flip(),animation:this.animation(),border:this.border(),inverse:this.inverse(),size:this.size(),pull:this.pull(),rotate:this.rotate(),fixedWidth:typeof t=="boolean"?t:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize():void 0},a=this.transform(),r=typeof a=="string"?yp.transform(a):a,s=this.mask(),c=s!=null?this.findIconDefinition(s):null,o={},l=this.a11yRole();l!=null&&(o.role=l);let f={};return i.rotate!=null&&!Cp(i.rotate)&&(f["--fa-rotate-angle"]=`${i.rotate}`),{title:this.title(),transform:r,classes:aT(i),mask:c??void 0,symbol:this.symbol(),attributes:o,styles:f}}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=q2({type:n,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(i,a){i&2&&(u4("innerHTML",a.renderedIconHTML(),Mo),Y2("title",a.title()??void 0))},inputs:{icon:[1,"icon"],title:[1,"title"],animation:[1,"animation"],mask:[1,"mask"],flip:[1,"flip"],size:[1,"size"],pull:[1,"pull"],border:[1,"border"],inverse:[1,"inverse"],symbol:[1,"symbol"],rotate:[1,"rotate"],fixedWidth:[1,"fixedWidth"],transform:[1,"transform"],a11yRole:[1,"a11yRole"]},outputs:{icon:"iconChange",title:"titleChange",animation:"animationChange",mask:"maskChange",flip:"flipChange",size:"sizeChange",pull:"pullChange",border:"borderChange",inverse:"inverseChange",symbol:"symbolChange",rotate:"rotateChange",fixedWidth:"fixedWidthChange",transform:"transformChange",a11yRole:"a11yRoleChange"},decls:0,vars:0,template:function(i,a){},encapsulation:2})}return n})();var wp=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Ms({type:n});static \u0275inj=ms({})}return n})();var Tp={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"]};var Ep={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"]};var Ap={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z"]};var Np={prefix:"fab",iconName:"github",icon:[512,512,[],"f09b","M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};var Pp={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z"]};var Rp=[{name:"Email",url:"mailto:contact@rbweb.fr",icon:Tp},{name:"LinkedIn",url:"https://www.linkedin.com/in/remy-binsztock/",icon:Pp},{name:"GitHub",url:"https://github.com/rbinsztock",icon:Np}];var uT=(n,e)=>e.name;function hT(n,e){if(n&1){let t=Ie();D1(0,"button",8),D3("click",function(){Pe(t);let a=b2(2);return Re(a.copyEmail())}),j2(1,"fa-icon",9),D1(2,"span"),X(3),P1()()}if(n&2){let t=b2(2);Y2("aria-label",t.copyStatus()==="copied"?"Email copied":"Copy email address"),J(),ht("icon",t.copyStatus()==="copied"?t.copiedIcon:t.copyIcon),J(2),O1(t.copyStatus()==="copied"?"Copied":"Copy")}}function dT(n,e){if(n&1&&(D1(0,"div",3)(1,"a",4)(2,"span"),j2(3,"fa-icon",5),X(4),P1(),D1(5,"span",6),X(6,"\u2197"),P1()(),I3(7,hT,4,3,"button",7),P1()),n&2){let t=e.$implicit;X3("social-network-row--email",t.name==="Email"),J(),ht("href",t.url,ut)("title",t.name),Y2("target",t.name==="Email"?null:"_blank")("aria-label",t.name==="Email"?"Send an email":"Open "+t.name+" profile"),J(2),ht("icon",t.icon),J(),O1(t.name),J(3),k3(t.name==="Email"?7:-1)}}function pT(n,e){if(n&1&&(D1(0,"div",10),j2(1,"span",11),X(2),P1()),n&2){let t=b2();X3("copy-toast--error",t.copyStatus()==="error"),J(2),T2(" ",t.copyStatus()==="copied"?"Email copied to clipboard":"Unable to copy email"," ")}}var Ip=(()=>{class n{constructor(){this.socialNetworks=Rp,this.copyIcon=Ap,this.copiedIcon=Ep,this.copyStatus=h3("idle")}copyEmail(){return lt(this,null,function*(){let t=this.socialNetworks.find(i=>i.name==="Email")?.url.replace(/^mailto:/,"");if(!t){this.showCopyStatus("error");return}try{yield this.writeToClipboard(t),this.showCopyStatus("copied")}catch(i){this.showCopyStatus("error")}})}ngOnDestroy(){clearTimeout(this.resetTimer)}writeToClipboard(t){return lt(this,null,function*(){if(navigator.clipboard?.writeText){yield navigator.clipboard.writeText(t);return}let i=document.createElement("textarea");i.value=t,i.style.position="fixed",i.style.opacity="0",document.body.appendChild(i),i.select();let a=document.execCommand("copy");if(i.remove(),!a)throw new Error("Clipboard copy failed")})}showCopyStatus(t){clearTimeout(this.resetTimer),this.copyStatus.set(t),this.resetTimer=setTimeout(()=>this.copyStatus.set("idle"),2400)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=q2({type:n,selectors:[["app-social-networks"]],decls:4,vars:1,consts:[[1,"social-networks-container"],[1,"social-network-row",3,"social-network-row--email"],["role","status","aria-live","polite",1,"copy-toast",3,"copy-toast--error"],[1,"social-network-row"],["rel","noopener noreferrer",1,"social-network-link",3,"href","title"],[3,"icon"],["aria-hidden","true"],["type","button","title","Copy email address",1,"copy-email"],["type","button","title","Copy email address",1,"copy-email",3,"click"],["aria-hidden","true",3,"icon"],["role","status","aria-live","polite",1,"copy-toast"],["aria-hidden","true",1,"copy-toast__signal"]],template:function(i,a){i&1&&(D1(0,"div",0),p2(1,dT,8,9,"div",1,uT),P1(),I3(3,pT,3,3,"div",2)),i&2&&(J(),m2(a.socialNetworks),J(2),k3(a.copyStatus()!=="idle"?3:-1))},dependencies:[wp,Lp],styles:[".social-networks-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.65rem}.social-network-row[_ngcontent-%COMP%]{display:grid}.social-network-row--email[_ngcontent-%COMP%]{grid-template-columns:minmax(0,1fr) auto;gap:.5rem}.social-network-link[_ngcontent-%COMP%], .copy-email[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:.75rem;padding:.75rem 1rem;border:1px solid var(--line);border-radius:10px;background:color-mix(in srgb,var(--surface) 40%,transparent);color:var(--ink-soft)!important;font-family:inherit;font-size:.85rem;font-weight:600;transition:border-color .2s,color .2s,box-shadow .2s,transform .2s}.social-network-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{display:inline-flex;align-items:center;gap:.6rem}.social-network-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{color:var(--muted);font-size:.75rem;transition:color .2s,transform .2s}.social-network-link[_ngcontent-%COMP%]:hover, .copy-email[_ngcontent-%COMP%]:hover{border-color:var(--accent);color:var(--accent)!important;box-shadow:0 0 20px color-mix(in srgb,var(--accent) 12%,transparent);transform:translate(4px)}.social-network-link[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:last-child{color:var(--accent);transform:translate(2px,-2px)}.copy-email[_ngcontent-%COMP%]{justify-content:center;min-width:5.75rem;border-color:color-mix(in srgb,var(--accent) 30%,var(--line));background:color-mix(in srgb,var(--accent) 7%,var(--surface));color:var(--accent)!important;cursor:pointer}.copy-toast[_ngcontent-%COMP%]{position:fixed;right:clamp(1rem,3vw,2rem);bottom:clamp(1rem,3vw,2rem);z-index:10002;display:flex;align-items:center;gap:.6rem;padding:.7rem .9rem;border:1px solid color-mix(in srgb,var(--accent) 55%,transparent);border-radius:10px;background:color-mix(in srgb,var(--surface) 92%,transparent);box-shadow:0 12px 36px #00000047,0 0 24px color-mix(in srgb,var(--accent) 16%,transparent);color:var(--ink);font-family:var(--font-mono);font-size:.72rem;font-weight:600;-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);pointer-events:none;animation:_ngcontent-%COMP%_copy-toast-in .28s cubic-bezier(.22,1,.36,1)}.copy-toast__signal[_ngcontent-%COMP%]{width:.45rem;height:.45rem;border-radius:50%;background:var(--accent);box-shadow:0 0 10px var(--accent)}.copy-toast--error[_ngcontent-%COMP%]{border-color:color-mix(in srgb,#fb7185 60%,transparent)}.copy-toast--error[_ngcontent-%COMP%]   .copy-toast__signal[_ngcontent-%COMP%]{background:#fb7185;box-shadow:0 0 10px #fb7185}@keyframes _ngcontent-%COMP%_copy-toast-in{0%{opacity:0;transform:translateY(10px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}@media(prefers-reduced-motion:reduce){.copy-toast[_ngcontent-%COMP%]{animation:none}}[_nghost-%COMP%]     fa-icon svg{width:1rem;height:1rem}"]})}}return n})();var kp=(n,e)=>e.label,mT=(n,e)=>e.company+e.period,gT=(n,e)=>e.title;function vT(n,e){n&1&&j2(0,"app-profile-tour")}function MT(n,e){if(n&1&&(D1(0,"li")(1,"strong"),X(2),P1(),X(3),P1()),n&2){let t=e.$implicit;J(2),T2("",t.label,":"),J(),T2(" ",t.value)}}function _T(n,e){if(n&1&&(D1(0,"li")(1,"strong"),X(2),P1(),X(3),j2(4,"br"),D1(5,"span",22),X(6),P1(),j2(7,"br"),X(8),P1()),n&2){let t=e.$implicit;J(2),O1(t.company),J(),dt(" | ",t.role," | ",t.period),J(3),O1(t.location),J(2),T2(" ",t.summary," ")}}function xT(n,e){if(n&1&&(D1(0,"li")(1,"strong"),X(2),P1(),X(3),P1()),n&2){let t=e.$implicit;J(2),T2("",t.label,":"),J(),T2(" ",t.text)}}function zT(n,e){if(n&1&&(D1(0,"li"),X(1),P1()),n&2){let t=e.$implicit;J(),O1(t)}}function yT(n,e){if(n&1&&(D1(0,"h3"),X(1),P1(),D1(2,"ul"),p2(3,zT,2,1,"li",null,_e),P1()),n&2){let t=e.$implicit;J(),O1(t.title),J(2),m2(t.items)}}var Dp=(()=>{class n{constructor(){this.profileTour=Z1(ei),this.lenis=Z1(Y4),this.gsapScroll=Z1(l4),this.title=F3.name,this.profileRole=F3.role,this.profileSummary=F3.summary,this.profileLocation=F3.location,this.profileAvailability=F3.availability,this.profileLanguages=F3.languages,this.printRole=F3.role,this.printLocation=F3.location,this.printAvailability=F3.availability,this.printLanguages=F3.languages,this.printSummary=F3.summary,this.printContacts=Xn.map(t=>({label:t.label,value:t.value})),this.printExperience=Uo,this.printSkillGroups=Bo,this.printCredentialGroups=Jn.map(t=>({title:t.title,items:t.items.map(i=>`${i.label} \xB7 ${i.date}`)}))}ngOnInit(){this.lenis.init(),this.gsapScroll.register()}scrollToTop(t){t.preventDefault(),this.lenis.scrollTo(0)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=q2({type:n,selectors:[["app-root"]],decls:75,vars:13,consts:[["href","#top",1,"skip-link"],[1,"site-shell"],["id","top",1,"page-content"],["id","contact",1,"site-footer"],[1,"section-rule"],[1,"site-footer__grid"],[1,"site-footer__info","glow-card","glow-card--static"],[1,"site-footer__status"],["aria-hidden","true",1,"site-footer__dot"],[1,"site-footer__role"],[1,"site-footer__location"],[1,"site-footer__summary"],[1,"site-footer__languages"],[1,"site-footer__connect","glow-card","glow-card--static"],[1,"site-footer__bottom"],["href","#top",1,"site-footer__top",3,"click"],["aria-label","Printable Resume",1,"print-resume"],[1,"print-resume__header"],[1,"print-resume__meta"],[1,"print-resume__summary"],[1,"print-resume__languages"],[1,"print-resume__section"],[1,"print-resume__location"]],template:function(i,a){i&1&&(D1(0,"a",0),X(1,"Skip to content"),P1(),j2(2,"app-particle-background"),I3(3,vT,1,0,"app-profile-tour"),D1(4,"div",1),j2(5,"app-cyber-nav"),D1(6,"main",2),j2(7,"router-outlet"),P1(),D1(8,"footer",3),j2(9,"hr",4),D1(10,"div",5)(11,"div",6)(12,"div",7),j2(13,"span",8),X(14),P1(),D1(15,"h2"),X(16),P1(),D1(17,"p",9),X(18),P1(),D1(19,"p",10),X(20),P1(),D1(21,"p",11),X(22),P1(),D1(23,"p",12)(24,"strong"),X(25,"Languages:"),P1(),X(26),P1()(),D1(27,"div",13)(28,"h3"),X(29,"Connect"),P1(),D1(30,"p"),X(31,"Let's discuss your next product, platform migration, or security initiative."),P1(),j2(32,"app-social-networks"),P1()(),D1(33,"div",14)(34,"p"),X(35,"\xA9 2026 R\xE9my Binsztock \xB7 Full-Stack Senior Developer & Cybersecurity Engineer"),P1(),D1(36,"a",15),D3("click",function(s){return a.scrollToTop(s)}),X(37," Back to top \u2191 "),P1()()()(),D1(38,"section",16)(39,"header",17)(40,"h1"),X(41),P1(),D1(42,"p"),X(43),P1(),D1(44,"p",18),X(45),P1(),D1(46,"p",19),X(47),P1(),D1(48,"p",20)(49,"strong"),X(50,"Languages:"),P1(),X(51),P1()(),D1(52,"section",21)(53,"h2"),X(54,"Contact"),P1(),D1(55,"ul"),p2(56,MT,4,2,"li",null,kp),P1()(),D1(58,"section",21)(59,"h2"),X(60,"Experience"),P1(),D1(61,"ul"),p2(62,_T,9,5,"li",null,mT),P1()(),D1(64,"section",21)(65,"h2"),X(66,"Core Skills"),P1(),D1(67,"ul"),p2(68,xT,4,2,"li",null,kp),P1()(),D1(70,"section",21)(71,"h2"),X(72,"Education and Certifications"),P1(),p2(73,yT,5,1,null,null,gT),P1()()),i&2&&(J(3),k3(a.profileTour.active()?3:-1),J(11),T2(" ",a.profileAvailability," "),J(2),O1(a.title),J(2),O1(a.profileRole),J(2),O1(a.profileLocation),J(2),O1(a.profileSummary),J(4),T2(" ",a.profileLanguages.join(" \xB7 ")," "),J(15),O1(a.title),J(2),O1(a.printRole),J(2),dt("",a.printLocation," \xB7 ",a.printAvailability),J(2),O1(a.printSummary),J(4),T2(" ",a.printLanguages.join(" \xB7 ")," "),J(5),m2(a.printContacts),J(6),m2(a.printExperience),J(6),m2(a.printSkillGroups),J(5),m2(a.printCredentialGroups))},dependencies:[Io,Eh,Nh,Ih,Ip],styles:["[_nghost-%COMP%]{display:block}.site-shell[_ngcontent-%COMP%]{position:relative;z-index:1;width:100%;padding:0 var(--page-pad)}.page-content[_ngcontent-%COMP%]{min-width:0}.site-footer[_ngcontent-%COMP%]{padding:0 0 3rem;scroll-margin-top:6rem}.site-footer__grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1.2fr .8fr;gap:1.25rem;margin-bottom:2.5rem}.site-footer__info[_ngcontent-%COMP%], .site-footer__connect[_ngcontent-%COMP%]{padding:1.75rem}.site-footer__status[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;margin-bottom:1rem;padding:.35rem .75rem .35rem .5rem;border:1px solid color-mix(in srgb,#22a06b 30%,transparent);border-radius:999px;background:color-mix(in srgb,#22a06b 8%,transparent);color:#4ade80;font-family:var(--font-mono);font-size:.68rem;font-weight:600}.site-footer__dot[_ngcontent-%COMP%]{width:7px;height:7px;border-radius:50%;background:#4ade80;box-shadow:0 0 8px #4ade80;animation:_ngcontent-%COMP%_pulse-dot 2s ease-in-out infinite}@keyframes _ngcontent-%COMP%_pulse-dot{0%,to{opacity:1}50%{opacity:.5}}.site-footer__info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:1.6rem;letter-spacing:-.02em}.site-footer__role[_ngcontent-%COMP%]{margin:.4rem 0 0;color:var(--accent);font-family:var(--font-mono);font-size:.78rem;font-weight:600}.site-footer__location[_ngcontent-%COMP%]{margin:.25rem 0 0;color:var(--muted);font-size:.82rem}.site-footer__summary[_ngcontent-%COMP%]{margin:1rem 0 0;color:var(--muted);font-size:.88rem;line-height:1.65}.site-footer__languages[_ngcontent-%COMP%]{margin:1rem 0 0;color:var(--muted);font-size:.8rem}.site-footer__languages[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--ink-soft);font-weight:600}.site-footer__connect[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:1rem}.site-footer__connect[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0 0 1.25rem;color:var(--muted);font-size:.85rem;line-height:1.6}.site-footer__bottom[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding-top:1.5rem;border-top:1px solid var(--line);color:var(--muted-light);font-size:.78rem}.site-footer__bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.site-footer__top[_ngcontent-%COMP%]{color:var(--ink-soft)!important;font-weight:700;transition:color .2s}.site-footer__top[_ngcontent-%COMP%]:hover{color:var(--accent)!important}.print-resume[_ngcontent-%COMP%]{display:none}@media(max-width:768px){.site-footer__grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}@media(max-width:520px){.site-footer__bottom[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;gap:.75rem}}@media print{.site-shell[_ngcontent-%COMP%]{display:none!important}.print-resume[_ngcontent-%COMP%]{display:block;color:#111827;font:11px/1.35 Arial,sans-serif}.print-resume__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:24px;color:#0f766e}.print-resume__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:2px 0 0}.print-resume__summary[_ngcontent-%COMP%]{margin-top:6px!important;line-height:1.45}.print-resume__languages[_ngcontent-%COMP%]{margin-top:4px!important;font-size:10px}.print-resume__location[_ngcontent-%COMP%]{font-size:10px;color:#475569}.print-resume__section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:6px 0 2px;font-size:11px;color:#0f766e}.print-resume__section[_ngcontent-%COMP%]{margin-top:10px;break-inside:avoid-page}.print-resume__section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 4px;padding-bottom:2px;border-bottom:1px solid #cbd5e1;color:#0f766e;font-size:12px;text-transform:uppercase}.print-resume__section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding-left:14px}.print-resume__section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:4px}}"]})}}return n})();Po(Dp,t6(Ne({},P7),{providers:[Eo(),...P7.providers]})).catch(n=>console.error(n));
