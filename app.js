var ct=(i,e,t)=>()=>{if(t)throw t[0];try{return i&&(e=i(i=0)),e}catch(n){throw t=[n],n}};var Kg=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};function qg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Xg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $f(){let i=Pr("canvas");return i.style.display="block",i}function Va(...i){let e="THREE."+i.shift();Lr?Lr("log",e,...i):console.log(e,...i)}function ep(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function tt(...i){i=ep(i);let e="THREE."+i.shift();if(Lr)Lr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function lt(...i){i=ep(i);let e="THREE."+i.shift();if(Lr)Lr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Rs(...i){let e=i.join(" ");e in Md||(Md[e]=!0,tt(...i))}function tp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function oi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function _t(i,e,t){return Math.max(e,Math.min(t,i))}function Ju(i,e){return(i%e+e)%e}function Jg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Yg(i,e,t){return i!==e?(t-i)/(e-i):0}function Ga(i,e,t){return(1-t)*i+t*e}function jg(i,e,t,n){return Ga(i,e,1-Math.exp(-t*n))}function Zg(i,e=1){return e-Math.abs(Ju(i,e*2)-e)}function $g(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function e0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function t0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function n0(i,e){return i+Math.random()*(e-i)}function i0(i){return i*(.5-Math.random())}function s0(i){i!==void 0&&(Ed=i);let e=Ed+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function r0(i){return i*ka}function a0(i){return i*Fs}function o0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function c0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Yu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function l0(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),h=a((e-n)/2),f=r((n-e)/2),p=a((n-e)/2);switch(s){case"XYX":i.set(o*u,c*d,c*h,o*l);break;case"YZY":i.set(c*h,o*u,c*d,o*l);break;case"ZXZ":i.set(c*d,c*h,o*u,o*l);break;case"XZX":i.set(o*u,c*p,c*f,o*l);break;case"YXY":i.set(c*f,o*u,c*p,o*l);break;case"ZYZ":i.set(c*p,c*f,o*u,o*l);break;default:tt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ju(i,e){if(e.constructor===Float32Array)return i;let t=fl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Zu(i,e){if(e.constructor===Float32Array)return i;let t=fl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}function u0(){let i={enabled:!0,workingColorSpace:on,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Dt&&(s.r=Fi(s.r),s.g=Fi(s.g),s.b=Fi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Dt&&(s.r=Ir(s.r),s.g=Ir(s.g),s.b=Ir(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===In?Dr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[on]:{primaries:e,whitePoint:n,transfer:Dr,toXYZ:wd,fromXYZ:Cd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dt},outputColorSpaceConfig:{drawingBufferColorSpace:dt}},[dt]:{primaries:e,whitePoint:n,transfer:Dt,toXYZ:wd,fromXYZ:Cd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dt}}}),i}function Fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ir(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function kl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Sc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(tt("Texture: Unable to serialize Texture."),{})}function zl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Yl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ws.fromArray(i,r);let o=s.x*Math.abs(ws.x)+s.y*Math.abs(ws.y)+s.z*Math.abs(ws.z),c=e.dot(ws),l=t.dot(ws),u=n.dot(ws);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}function b0(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,s[c]=-l-1,s[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,s[c]=13,s[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;(l&8388608)===0;)l<<=1,u-=8388608;l&=-8388609,u+=947912704,r[c]=l|u}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function v0(i){Math.abs(i)>65504&&tt("DataUtils.toHalfFloat(): Value out of range."),i=_t(i,-65504,65504),Di.floatView[0]=i;let e=Di.uint32View[0],t=e>>23&511;return Di.baseTable[t]+((e&8388607)>>Di.shiftTable[t])}function y0(i){let e=i>>10;return Di.uint32View[0]=Di.mantissaTable[Di.offsetTable[e]+(i&1023)]+Di.exponentTable[e],Di.floatView[0]}function Nd(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=oi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}function Jo(i,e,t,n,s,r){Er.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ba.x=r*Er.x-s*Er.y,Ba.y=s*Er.x+r*Er.y):Ba.copy(Er),i.copy(e),i.x+=Ba.x,i.y+=Ba.y,i.applyMatrix4(sp)}function I0(i,e,t,n,s,r,a,o){let c;if(e.side===Zt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Nn,o),c===null)return null;ic.copy(o),ic.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ic);return l<t.near||l>t.far?null:{distance:l,point:ic.clone(),object:i}}function sc(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,$o),i.getVertexPosition(c,ec),i.getVertexPosition(l,tc);let u=I0(i,e,t,n,$o,ec,tc,Qd);if(u){let d=new T;si.getBarycoord(Qd,$o,ec,tc,d),s&&(u.uv=si.getInterpolatedAttribute(s,o,c,l,d,new me)),r&&(u.uv1=si.getInterpolatedAttribute(r,o,c,l,d,new me)),a&&(u.normal=si.getInterpolatedAttribute(a,o,c,l,d,new T),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new T,materialIndex:0};si.getNormal($o,ec,tc,h.normal),u.face=h,u.barycoord=d}return u}function lc(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Tc.fromBufferAttribute(o,s),Ic.fromBufferAttribute(o,r),t.distanceSqToSegment(Tc,Ic,ru,jd)>n)return;ru.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ru);if(!(l<e.near||l>e.far))return{distance:l,point:jd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}function tf(i,e,t,n,s,r,a){let o=mu.distanceSqToPoint(i);if(o<t){let c=new T;mu.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}function $u(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,d){let h=(a-r)/l-(o-r)/(l+u)+(o-a)/u,f=(o-a)/u-(c-a)/(u+d)+(c-o)/d;h*=u,f*=u,s(a,o,h,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}function rf(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function P0(i,e){let t=1-i;return t*t*e}function L0(i,e){return 2*(1-i)*i*e}function N0(i,e){return i*i*e}function Qa(i,e,t,n){return P0(i,e)+L0(i,t)+N0(i,n)}function U0(i,e){let t=1-i;return t*t*t*e}function O0(i,e){let t=1-i;return 3*t*t*i*e}function k0(i,e){return 3*(1-i)*i*i*e}function G0(i,e){return i*i*i*e}function za(i,e,t,n,s){return U0(i,e)+O0(i,t)+k0(i,n)+G0(i,s)}function Q0(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=rp(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=K0(i,e,r,t)),i.length>80*t){o=i[0],c=i[1];let u=o,d=c;for(let h=t;h<s;h+=t){let f=i[h],p=i[h+1];f<o&&(o=f),p<c&&(c=p),f>u&&(u=f),p>d&&(d=p)}l=Math.max(u-o,d-c),l=l!==0?32767/l:0}return lo(r,a,t,o,c,l,0),a}function rp(i,e,t,n,s){let r;if(s===ix(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=af(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=af(a/n|0,i[a],i[a+1],r);return r&&Wr(r,r.next)&&(ho(r),r=r.next),r}function Os(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Wr(t,t.next)||Kt(t.prev,t,t.next)===0)){if(ho(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function lo(i,e,t,n,s,r,a){if(!i)return;!a&&r&&j0(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?V0(i,n,s,r):z0(i)){e.push(c.i,i.i,l.i),ho(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=H0(Os(i),e),lo(i,e,t,n,s,r,2)):a===2&&W0(i,e,t,n,s,r):lo(Os(i),e,t,n,s,r,1);break}}}function z0(i){let e=i.prev,t=i,n=i.next;if(Kt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,u=Math.min(s,r,a),d=Math.min(o,c,l),h=Math.max(s,r,a),f=Math.max(o,c,l),p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=h&&p.y>=d&&p.y<=f&&Ua(s,o,r,c,a,l,p.x,p.y)&&Kt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function V0(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Kt(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,u=s.y,d=r.y,h=a.y,f=Math.min(o,c,l),p=Math.min(u,d,h),g=Math.max(o,c,l),m=Math.max(u,d,h),A=gu(f,p,e,t,n),x=gu(g,m,e,t,n),v=i.prevZ,_=i.nextZ;for(;v&&v.z>=A&&_&&_.z<=x;){if(v.x>=f&&v.x<=g&&v.y>=p&&v.y<=m&&v!==s&&v!==a&&Ua(o,u,c,d,l,h,v.x,v.y)&&Kt(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=f&&_.x<=g&&_.y>=p&&_.y<=m&&_!==s&&_!==a&&Ua(o,u,c,d,l,h,_.x,_.y)&&Kt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=A;){if(v.x>=f&&v.x<=g&&v.y>=p&&v.y<=m&&v!==s&&v!==a&&Ua(o,u,c,d,l,h,v.x,v.y)&&Kt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=x;){if(_.x>=f&&_.x<=g&&_.y>=p&&_.y<=m&&_!==s&&_!==a&&Ua(o,u,c,d,l,h,_.x,_.y)&&Kt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function H0(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Wr(n,s)&&op(n,t,t.next,s)&&uo(n,s)&&uo(s,n)&&(e.push(n.i,t.i,s.i),ho(t),ho(t.next),t=i=s),t=t.next}while(t!==i);return Os(t)}function W0(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ex(a,o)){let c=cp(a,o);a=Os(a,a.next),c=Os(c,c.next),lo(a,e,t,n,s,r,0),lo(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function K0(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=rp(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push($0(l))}s.sort(q0);for(let r=0;r<s.length;r++)t=X0(s[r],t);return t}function q0(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function X0(i,e){let t=J0(i,e);if(!t)return e;let n=cp(t,i);return Os(n,n.next),Os(t,t.next)}function J0(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Wr(i,t))return t;do{if(Wr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,u=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&ap(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);uo(t,i)&&(d<u||d===u&&(t.x>a.x||t.x===a.x&&Y0(a,t)))&&(a=t,u=d)}t=t.next}while(t!==o);return a}function Y0(i,e){return Kt(i.prev,i,e.prev)<0&&Kt(e.next,i,i.next)<0}function j0(i,e,t,n){let s=i;do s.z===0&&(s.z=gu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Z0(s)}function Z0(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function gu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function $0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ap(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Ua(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&ap(i,e,t,n,s,r,a,o)}function ex(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!tx(i,e)&&(uo(i,e)&&uo(e,i)&&nx(i,e)&&(Kt(i.prev,i,e.prev)||Kt(i,e.prev,e))||Wr(i,e)&&Kt(i.prev,i,i.next)>0&&Kt(e.prev,e,e.next)>0)}function Kt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Wr(i,e){return i.x===e.x&&i.y===e.y}function op(i,e,t,n){let s=fc(Kt(i,e,t)),r=fc(Kt(i,e,n)),a=fc(Kt(t,n,i)),o=fc(Kt(t,n,e));return!!(s!==r&&a!==o||s===0&&dc(i,t,e)||r===0&&dc(i,n,e)||a===0&&dc(t,i,n)||o===0&&dc(t,e,n))}function dc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function fc(i){return i>0?1:i<0?-1:0}function tx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&op(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function uo(i,e){return Kt(i.prev,i,i.next)<0?Kt(i,e,i.next)>=0&&Kt(i,i.prev,e)>=0:Kt(i,e,i.prev)<0||Kt(i,i.next,e)<0}function nx(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function cp(i,e){let t=xu(i.i,i.x,i.y),n=xu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function af(i,e,t,n){let s=xu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ho(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function xu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ix(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}function of(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function cf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}function rx(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}function nr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(lf(s))s.isRenderTargetTexture?(tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(lf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function vn(i){let e={};for(let t=0;t<i.length;t++){let n=nr(i[t]);for(let s in n)e[s]=n[s]}return e}function lf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ax(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function eh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}function is(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Oa(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function lx(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function uf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function ux(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}function lp(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function hx(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function dx(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=lp(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=hx(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}function hf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function df(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}function fx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ui;case"vector":case"vector2":case"vector3":case"vector4":return ds;case"color":return fo;case"quaternion":return Oi;case"bool":case"boolean":return Ni;case"string":return ki}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function px(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=fx(i.type);if(i.times===void 0){let n=[],s=[];ux(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Oa(i.settings)&&(t.settings={inTangents:is(i.settings.inTangents,Float32Array),outTangents:is(i.settings.outTangents,Float32Array)}),t}function ff(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}function _f(i,e){return i.distance-e.distance}function Su(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Su(r[a],e,t,!0)}}function ih(i,e,t,n){let s=Mx(n);switch(t){case zu:return i*e;case Zn:return i*e/s.components*s.byteLength;case Jc:return i*e/s.components*s.byteLength;case Un:return i*e*2/s.components*s.byteLength;case Yc:return i*e*2/s.components*s.byteLength;case Js:return i*e*3/s.components*s.byteLength;case jt:return i*e*4/s.components*s.byteLength;case jc:return i*e*4/s.components*s.byteLength;case ms:case Hi:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _o:case Wi:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zc:case Ys:return Math.max(i,16)*Math.max(e,8)/4;case sa:case gs:return Math.max(i,8)*Math.max(e,8)/2;case ra:case js:case aa:case oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Zs:case $s:case ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ki:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $c:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case el:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case tl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case xs:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case nl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case il:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case sl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case rl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case al:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ol:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case cl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ll:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ul:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case _s:case hl:case la:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ua:case ha:return Math.ceil(i/4)*Math.ceil(e/4)*8;case er:case da:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Mx(i){switch(i){case ot:case Gu:return{byteLength:1,components:1};case zi:case Qu:case wt:return{byteLength:2,components:1};case qc:case Xc:return{byteLength:2,components:4};case Tn:case Kc:case Yt:return{byteLength:4,components:1};case na:case ia:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}var bf,Cu,vf,Ws,yf,Yr,Nn,Zt,Lt,Qi,jr,go,Tu,Iu,Mf,Ks,Ef,Sf,wf,Cf,Tf,If,Rf,Bf,Ru,Bu,Df,Ff,Pf,Lf,Nf,Uf,Of,kf,Gf,xc,_c,bc,Rr,vc,yc,Mc,Ec,Du,Qf,zf,bi,Fu,Pu,Lu,xo,Nu,Uu,Ou,hu,Vf,ku,As,Zr,$r,Wc,an,wn,Br,Pt,ea,qs,vt,ta,Ht,ot,Gu,Qu,zi,Kc,Tn,Yt,wt,qc,Xc,Xs,na,ia,zu,Js,jt,Pi,Vi,Zn,Jc,Un,Yc,jc,ms,Hi,_o,Wi,sa,Zc,gs,Ys,ra,js,Zs,aa,oa,$s,ca,Ki,$c,el,tl,xs,nl,il,sl,rl,al,ol,cl,ll,ul,_s,hl,la,ua,ha,er,da,Bs,Ds,mc,du,fu,pu,Au,Hf,Vu,bo,fa,Wf,dl,Kf,In,dt,on,Dr,Dt,gc,qf,Xf,Jf,Yf,Hu,jf,Zf,Wu,Ku,qu,tr,Xu,Yn,Fr,Md,Lr,np,Ai,xn,Ed,ka,Fs,Je,me,Qt,T,Ul,Sd,rt,Ol,wd,Cd,xt,hr,Sc,h0,Nr,d0,Gl,nn,mt,wc,qt,Ha,ss,Re,dr,ti,f0,p0,Zi,Go,kn,Td,Id,Qn,Ur,A0,Rd,fr,wi,Qo,wa,m0,g0,Bd,Dd,Fd,Pd,x0,pr,Ql,Ft,st,_0,Or,ip,$i,zo,Oe,_n,Wa,Ps,ni,Ci,Vl,Ti,Ar,mr,Ld,Hl,Wl,Kl,ql,Xl,Jl,si,it,Ii,ii,Vo,gr,xr,_r,es,ts,Ss,Ca,Ho,Wo,ws,Di,mi,tn,Ko,M0,Et,Ka,qa,ze,E0,Ta,jl,bn,S0,Jn,Zl,br,Gn,Ia,dn,ut,Ls,En,rs,$l,w0,C0,Sn,T0,Cn,kr,vr,Ra,yr,Mr,Er,Ba,sp,qo,Da,Xo,Ud,eu,Od,Xa,Ri,tu,Yo,jo,as,Bn,kd,Cs,Zo,Gd,$o,ec,tc,nu,nc,Qd,ic,Le,Fa,zd,Vd,R0,Hd,rc,iu,Wd,su,Ja,Gr,Dn,Kd,B0,Ya,Fn,Sr,qd,ac,Xd,D0,Pa,La,Pn,Ts,F0,oc,jn,Jd,Cc,Qr,Tc,Ic,Yd,Na,cc,ru,jd,Ns,Zd,$d,ja,Za,zr,ef,mu,uc,hc,$a,os,eo,Vr,to,ri,zn,no,io,Ot,so,cs,zt,Rc,Vn,ls,Bc,nf,sf,au,ou,cu,gi,ro,Dc,ao,Us,oo,us,co,Fc,Hr,Li,hs,_u,Is,ks,sx,Kr,qr,Hn,Wn,Gs,xi,pl,ox,cx,kt,Pc,at,Xt,Lc,Nc,_i,Uc,Oc,kc,Gc,Ln,Ni,fo,Ui,Qc,Oi,ki,ds,po,pi,zc,up,Kn,Bi,bu,ai,wr,Vc,Ao,pn,Xr,lu,pf,Af,Jr,pc,Ac,fi,Qs,ns,mf,gf,rn,vu,zs,yu,qn,Vs,Mu,Hs,Gi,uu,mo,Cr,Tr,fs,Hc,th,Ax,nh,mx,gx,xx,_x,bx,vx,yx,Eu,Bt,PE,xf,ps,wu,sh=ct(()=>{bf=0,Cu=1,vf=2,Ws=1,yf=2,Yr=3,Nn=0,Zt=1,Lt=2,Qi=0,jr=1,go=2,Tu=3,Iu=4,Mf=5,Ks=100,Ef=101,Sf=102,wf=103,Cf=104,Tf=200,If=201,Rf=202,Bf=203,Ru=204,Bu=205,Df=206,Ff=207,Pf=208,Lf=209,Nf=210,Uf=211,Of=212,kf=213,Gf=214,xc=0,_c=1,bc=2,Rr=3,vc=4,yc=5,Mc=6,Ec=7,Du=0,Qf=1,zf=2,bi=0,Fu=1,Pu=2,Lu=3,xo=4,Nu=5,Uu=6,Ou=7,hu="attached",Vf="detached",ku=300,As=301,Zr=302,$r=303,Wc=304,an=1e3,wn=1001,Br=1002,Pt=1003,ea=1004,qs=1005,vt=1006,ta=1007,Ht=1008,ot=1009,Gu=1010,Qu=1011,zi=1012,Kc=1013,Tn=1014,Yt=1015,wt=1016,qc=1017,Xc=1018,Xs=1020,na=35902,ia=35899,zu=1021,Js=1022,jt=1023,Pi=1026,Vi=1027,Zn=1028,Jc=1029,Un=1030,Yc=1031,jc=1033,ms=33776,Hi=33777,_o=33778,Wi=33779,sa=35840,Zc=35841,gs=35842,Ys=35843,ra=36196,js=37492,Zs=37496,aa=37488,oa=37489,$s=37490,ca=37491,Ki=37808,$c=37809,el=37810,tl=37811,xs=37812,nl=37813,il=37814,sl=37815,rl=37816,al=37817,ol=37818,cl=37819,ll=37820,ul=37821,_s=36492,hl=36494,la=36495,ua=36283,ha=36284,er=36285,da=36286,Bs=2300,Ds=2301,mc=2302,du=2303,fu=2400,pu=2401,Au=2402,Hf=2500,Vu=0,bo=1,fa=2,Wf=3200,dl=0,Kf=1,In="",dt="srgb",on="srgb-linear",Dr="linear",Dt="srgb",gc=7680,qf=519,Xf=512,Jf=513,Yf=514,Hu=515,jf=516,Zf=517,Wu=518,Ku=519,qu=35044,tr=35048,Xu="300 es",Yn=2e3,Fr=2001;Md={},Lr=null;np={[xc]:xc,[bc]:Mc,[vc]:vc,[Rr]:yc,[_c]:_c,[Mc]:bc,[Ec]:Ec,[yc]:Rr},Ai=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ed=1234567,ka=Math.PI/180,Fs=180/Math.PI;Je={DEG2RAD:ka,RAD2DEG:Fs,generateUUID:oi,clamp:_t,euclideanModulo:Ju,mapLinear:Jg,inverseLerp:Yg,lerp:Ga,damp:jg,pingpong:Zg,smoothstep:$g,smootherstep:e0,randInt:t0,randFloat:n0,randFloatSpread:i0,seededRandom:s0,degToRad:r0,radToDeg:a0,isPowerOfTwo:o0,ceilPowerOfTwo:c0,floorPowerOfTwo:Yu,setQuaternionFromProperEuler:l0,normalize:Zu,denormalize:ju},me=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],f=r[a+1],p=r[a+2],g=r[a+3];if(d!==g||c!==h||l!==f||u!==p){let m=c*h+l*f+u*p+d*g;m<0&&(h=-h,f=-f,p=-p,g=-g,m=-m);let A=1-o;if(m<.9995){let x=Math.acos(m),v=Math.sin(x);A=Math.sin(A*x)/v,o=Math.sin(o*x)/v,c=c*A+h*o,l=l*A+f*o,u=u*A+p*o,d=d*A+g*o}else{c=c*A+h*o,l=l*A+f*o,u=u*A+p*o,d=d*A+g*o;let x=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=x,l*=x,u*=x,d*=x}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],d=r[a],h=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+u*d+c*f-l*h,e[t+1]=c*p+u*h+l*d-o*f,e[t+2]=l*p+u*f+o*h-c*d,e[t+3]=u*p-o*d-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),d=o(r/2),h=c(n/2),f=c(s/2),p=c(r/2);switch(a){case"XYZ":this._x=h*u*d+l*f*p,this._y=l*f*d-h*u*p,this._z=l*u*p+h*f*d,this._w=l*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+l*f*p,this._y=l*f*d-h*u*p,this._z=l*u*p-h*f*d,this._w=l*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-l*f*p,this._y=l*f*d+h*u*p,this._z=l*u*p+h*f*d,this._w=l*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-l*f*p,this._y=l*f*d+h*u*p,this._z=l*u*p-h*f*d,this._w=l*u*d+h*f*p;break;case"YZX":this._x=h*u*d+l*f*p,this._y=l*f*d+h*u*p,this._z=l*u*p-h*f*d,this._w=l*u*d-h*f*p;break;case"XZY":this._x=h*u*d-l*f*p,this._y=l*f*d-h*u*p,this._z=l*u*p+h*f*d,this._w=l*u*d+h*f*p;break;default:tt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*u,this.y=n+c*u+o*l-r*d,this.z=s+c*d+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ul.copy(this).projectOnVector(e),this.sub(Ul)}reflect(e){return this.sub(Ul.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ul=new T,Sd=new Qt,rt=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],p=n[8],g=s[0],m=s[3],A=s[6],x=s[1],v=s[4],_=s[7],y=s[2],E=s[5],b=s[8];return r[0]=a*g+o*x+c*y,r[3]=a*m+o*v+c*E,r[6]=a*A+o*_+c*b,r[1]=l*g+u*x+d*y,r[4]=l*m+u*v+d*E,r[7]=l*A+u*_+d*b,r[2]=h*g+f*x+p*y,r[5]=h*m+f*v+p*E,r[8]=h*A+f*_+p*b,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*a-o*l,h=o*c-u*r,f=l*r-a*c,p=t*d+n*h+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/p;return e[0]=d*g,e[1]=(s*l-u*n)*g,e[2]=(o*n-s*a)*g,e[3]=h*g,e[4]=(u*t-s*c)*g,e[5]=(s*r-o*t)*g,e[6]=f*g,e[7]=(n*c-l*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ol.makeScale(e,t)),this}rotate(e){return Rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ol.makeRotation(-e)),this}translate(e,t){return Rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ol.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ol=new rt,wd=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cd=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);xt=u0();Sc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{hr===void 0&&(hr=Pr("canvas")),hr.width=e.width,hr.height=e.height;let s=hr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=hr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Pr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Fi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fi(t[n]/255)*255):t[n]=Fi(t[n]);return{data:t,width:e.width,height:e.height}}else return tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},h0=0,Nr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=oi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(kl(s[a].image)):r.push(kl(s[a]))}else r=kl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};d0=0,Gl=new T,nn=class i extends Ai{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=wn,s=wn,r=vt,a=Ht,o=jt,c=ot,l=i.DEFAULT_ANISOTROPY,u=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=oi(),this.name="",this.source=new Nr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Gl).x}get height(){return this.source.getSize(Gl).y}get depth(){return this.source.getSize(Gl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){tt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){tt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ku)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case an:e.x=e.x-Math.floor(e.x);break;case wn:e.x=e.x<0?0:1;break;case Br:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case an:e.y=e.y-Math.floor(e.y);break;case wn:e.y=e.y<0?0:1;break;case Br:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=ku;nn.DEFAULT_ANISOTROPY=1;mt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],p=c[9],g=c[2],m=c[6],A=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-g)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+g)<.1&&Math.abs(p+m)<.1&&Math.abs(l+f+A-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,_=(f+1)/2,y=(A+1)/2,E=(u+h)/4,b=(d+g)/4,M=(p+m)/4;return v>_&&v>y?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=E/n,r=b/n):_>y?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=M/s):y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),n=b/r,s=M/r),this.set(n,s,r,t),this}let x=Math.sqrt((m-p)*(m-p)+(d-g)*(d-g)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(d-g)/x,this.z=(h-u)/x,this.w=Math.acos((l+f+A-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},wc=class extends Ai{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new nn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Nr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},qt=class extends wc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ha=class extends nn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},ss=class extends nn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Re=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,c,l,u,d,h,f,p,g,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,d,h,f,p,g,m)}set(e,t,n,s,r,a,o,c,l,u,d,h,f,p,g,m){let A=this.elements;return A[0]=e,A[4]=t,A[8]=n,A[12]=s,A[1]=r,A[5]=a,A[9]=o,A[13]=c,A[2]=l,A[6]=u,A[10]=d,A[14]=h,A[3]=f,A[7]=p,A[11]=g,A[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/dr.setFromMatrixColumn(e,0).length(),r=1/dr.setFromMatrixColumn(e,1).length(),a=1/dr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=a*u,f=a*d,p=o*u,g=o*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+p*l,t[5]=h-g*l,t[9]=-o*c,t[2]=g-h*l,t[6]=p+f*l,t[10]=a*c}else if(e.order==="YXZ"){let h=c*u,f=c*d,p=l*u,g=l*d;t[0]=h+g*o,t[4]=p*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-p,t[6]=g+h*o,t[10]=a*c}else if(e.order==="ZXY"){let h=c*u,f=c*d,p=l*u,g=l*d;t[0]=h-g*o,t[4]=-a*d,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*u,t[9]=g-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let h=a*u,f=a*d,p=o*u,g=o*d;t[0]=c*u,t[4]=p*l-f,t[8]=h*l+g,t[1]=c*d,t[5]=g*l+h,t[9]=f*l-p,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let h=a*c,f=a*l,p=o*c,g=o*l;t[0]=c*u,t[4]=g-h*d,t[8]=p*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*d+p,t[10]=h-g*d}else if(e.order==="XZY"){let h=a*c,f=a*l,p=o*c,g=o*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+g,t[5]=a*u,t[9]=f*d-p,t[2]=p*d-f,t[6]=o*u,t[10]=g*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(f0,e,p0)}lookAt(e,t,n){let s=this.elements;return kn.subVectors(e,t),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),Zi.crossVectors(n,kn),Zi.lengthSq()===0&&(Math.abs(n.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),Zi.crossVectors(n,kn)),Zi.normalize(),Go.crossVectors(kn,Zi),s[0]=Zi.x,s[4]=Go.x,s[8]=kn.x,s[1]=Zi.y,s[5]=Go.y,s[9]=kn.y,s[2]=Zi.z,s[6]=Go.z,s[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],p=n[2],g=n[6],m=n[10],A=n[14],x=n[3],v=n[7],_=n[11],y=n[15],E=s[0],b=s[4],M=s[8],I=s[12],S=s[1],C=s[5],B=s[9],D=s[13],R=s[2],k=s[6],F=s[10],P=s[14],H=s[3],U=s[7],L=s[11],O=s[15];return r[0]=a*E+o*S+c*R+l*H,r[4]=a*b+o*C+c*k+l*U,r[8]=a*M+o*B+c*F+l*L,r[12]=a*I+o*D+c*P+l*O,r[1]=u*E+d*S+h*R+f*H,r[5]=u*b+d*C+h*k+f*U,r[9]=u*M+d*B+h*F+f*L,r[13]=u*I+d*D+h*P+f*O,r[2]=p*E+g*S+m*R+A*H,r[6]=p*b+g*C+m*k+A*U,r[10]=p*M+g*B+m*F+A*L,r[14]=p*I+g*D+m*P+A*O,r[3]=x*E+v*S+_*R+y*H,r[7]=x*b+v*C+_*k+y*U,r[11]=x*M+v*B+_*F+y*L,r[15]=x*I+v*D+_*P+y*O,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],f=e[14],p=e[3],g=e[7],m=e[11],A=e[15],x=c*f-l*h,v=o*f-l*d,_=o*h-c*d,y=a*f-l*u,E=a*h-c*u,b=a*d-o*u;return t*(g*x-m*v+A*_)-n*(p*x-m*y+A*E)+s*(p*v-g*y+A*b)-r*(p*_-g*E+m*b)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-n*(r*u-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],f=e[11],p=e[12],g=e[13],m=e[14],A=e[15],x=t*o-n*a,v=t*c-s*a,_=t*l-r*a,y=n*c-s*o,E=n*l-r*o,b=s*l-r*c,M=u*g-d*p,I=u*m-h*p,S=u*A-f*p,C=d*m-h*g,B=d*A-f*g,D=h*A-f*m,R=x*D-v*B+_*C+y*S-E*I+b*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/R;return e[0]=(o*D-c*B+l*C)*k,e[1]=(s*B-n*D-r*C)*k,e[2]=(g*b-m*E+A*y)*k,e[3]=(h*E-d*b-f*y)*k,e[4]=(c*S-a*D-l*I)*k,e[5]=(t*D-s*S+r*I)*k,e[6]=(m*_-p*b-A*v)*k,e[7]=(u*b-h*_+f*v)*k,e[8]=(a*B-o*S+l*M)*k,e[9]=(n*S-t*B-r*M)*k,e[10]=(p*E-g*_+A*x)*k,e[11]=(d*_-u*E-f*x)*k,e[12]=(o*I-a*C-c*M)*k,e[13]=(t*C-n*I+s*M)*k,e[14]=(g*v-p*y-m*x)*k,e[15]=(u*y-d*v+h*x)*k,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,d=o+o,h=r*l,f=r*u,p=r*d,g=a*u,m=a*d,A=o*d,x=c*l,v=c*u,_=c*d,y=n.x,E=n.y,b=n.z;return s[0]=(1-(g+A))*y,s[1]=(f+_)*y,s[2]=(p-v)*y,s[3]=0,s[4]=(f-_)*E,s[5]=(1-(h+A))*E,s[6]=(m+x)*E,s[7]=0,s[8]=(p+v)*b,s[9]=(m-x)*b,s[10]=(1-(h+g))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=dr.set(s[0],s[1],s[2]).length(),o=dr.set(s[4],s[5],s[6]).length(),c=dr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ti.copy(this);let l=1/a,u=1/o,d=1/c;return ti.elements[0]*=l,ti.elements[1]*=l,ti.elements[2]*=l,ti.elements[4]*=u,ti.elements[5]*=u,ti.elements[6]*=u,ti.elements[8]*=d,ti.elements[9]*=d,ti.elements[10]*=d,t.setFromRotationMatrix(ti),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=Yn,c=!1){let l=this.elements,u=2*r/(t-e),d=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s),p,g;if(c)p=r/(a-r),g=a*r/(a-r);else if(o===Yn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Fr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Yn,c=!1){let l=this.elements,u=2/(t-e),d=2/(n-s),h=-(t+e)/(t-e),f=-(n+s)/(n-s),p,g;if(c)p=1/(a-r),g=a/(a-r);else if(o===Yn)p=-2/(a-r),g=-(a+r)/(a-r);else if(o===Fr)p=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},dr=new T,ti=new Re,f0=new T(0,0,0),p0=new T(1,1,1),Zi=new T,Go=new T,kn=new T,Td=new Re,Id=new Qt,Qn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(_t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Td.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Td,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Id.setFromEuler(this),this.setFromQuaternion(Id,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qn.DEFAULT_ORDER="XYZ";Ur=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},A0=0,Rd=new T,fr=new Qt,wi=new Re,Qo=new T,wa=new T,m0=new T,g0=new Qt,Bd=new T(1,0,0),Dd=new T(0,1,0),Fd=new T(0,0,1),Pd={type:"added"},x0={type:"removed"},pr={type:"childadded",child:null},Ql={type:"childremoved",child:null},Ft=class i extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new T,t=new Qn,n=new Qt,s=new T(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Re},normalMatrix:{value:new rt}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ur,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fr.setFromAxisAngle(e,t),this.quaternion.multiply(fr),this}rotateOnWorldAxis(e,t){return fr.setFromAxisAngle(e,t),this.quaternion.premultiply(fr),this}rotateX(e){return this.rotateOnAxis(Bd,e)}rotateY(e){return this.rotateOnAxis(Dd,e)}rotateZ(e){return this.rotateOnAxis(Fd,e)}translateOnAxis(e,t){return Rd.copy(e).applyQuaternion(this.quaternion),this.position.add(Rd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bd,e)}translateY(e){return this.translateOnAxis(Dd,e)}translateZ(e){return this.translateOnAxis(Fd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qo.copy(e):Qo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(wa,Qo,this.up):wi.lookAt(Qo,wa,this.up),this.quaternion.setFromRotationMatrix(wi),s&&(wi.extractRotation(s.matrixWorld),fr.setFromRotationMatrix(wi),this.quaternion.premultiply(fr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pd),pr.child=e,this.dispatchEvent(pr),pr.child=null):lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(x0),Ql.child=e,this.dispatchEvent(Ql),Ql.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pd),pr.child=e,this.dispatchEvent(pr),pr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,e,m0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,g0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ft.DEFAULT_UP=new T(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;st=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},_0={type:"move"},Or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new st,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new st,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new st,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,n),A=this._getHandJoint(l,g);m!==null&&(A.matrix.fromArray(m.transform.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale),A.matrixWorldNeedsUpdate=!0,A.jointRadius=m.radius),A.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;l.inputState.pinching&&h>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_0)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new st;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ip={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},zo={h:0,s:0,l:0};Oe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=xt.workingColorSpace){if(e=Ju(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=zl(a,r,e+1/3),this.g=zl(a,r,e),this.b=zl(a,r,e-1/3)}return xt.colorSpaceToWorking(this,s),this}setStyle(e,t=dt){function n(r){r!==void 0&&parseFloat(r)<1&&tt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:tt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);tt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){let n=ip[e.toLowerCase()];return n!==void 0?this.setHex(n,t):tt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return xt.workingToColorSpace(_n.copy(this),e),Math.round(_t(_n.r*255,0,255))*65536+Math.round(_t(_n.g*255,0,255))*256+Math.round(_t(_n.b*255,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(_n.copy(this),t);let n=_n.r,s=_n.g,r=_n.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=dt){xt.workingToColorSpace(_n.copy(this),e);let t=_n.r,n=_n.g,s=_n.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(zo);let n=Ga($i.h,zo.h,t),s=Ga($i.s,zo.s,t),r=Ga($i.l,zo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new Oe;Oe.NAMES=ip;Wa=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Oe(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Ps=class extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ni=new T,Ci=new T,Vl=new T,Ti=new T,Ar=new T,mr=new T,Ld=new T,Hl=new T,Wl=new T,Kl=new T,ql=new mt,Xl=new mt,Jl=new mt,si=class i{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ni.subVectors(e,t),s.cross(ni);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ni.subVectors(s,t),Ci.subVectors(n,t),Vl.subVectors(e,t);let a=ni.dot(ni),o=ni.dot(Ci),c=ni.dot(Vl),l=Ci.dot(Ci),u=Ci.dot(Vl),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(l*c-o*u)*h,p=(a*u-o*c)*h;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ti.x),c.addScaledVector(a,Ti.y),c.addScaledVector(o,Ti.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return ql.setScalar(0),Xl.setScalar(0),Jl.setScalar(0),ql.fromBufferAttribute(e,t),Xl.fromBufferAttribute(e,n),Jl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ql,r.x),a.addScaledVector(Xl,r.y),a.addScaledVector(Jl,r.z),a}static isFrontFacing(e,t,n,s){return ni.subVectors(n,t),Ci.subVectors(e,t),ni.cross(Ci).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ni.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ar.subVectors(s,n),mr.subVectors(r,n),Hl.subVectors(e,n);let c=Ar.dot(Hl),l=mr.dot(Hl);if(c<=0&&l<=0)return t.copy(n);Wl.subVectors(e,s);let u=Ar.dot(Wl),d=mr.dot(Wl);if(u>=0&&d<=u)return t.copy(s);let h=c*d-u*l;if(h<=0&&c>=0&&u<=0&&c-u>0)return a=c/(c-u),t.copy(n).addScaledVector(Ar,a);Kl.subVectors(e,r);let f=Ar.dot(Kl),p=mr.dot(Kl);if(p>=0&&f<=p)return t.copy(r);let g=f*l-c*p;if(g<=0&&l>=0&&p<=0)return o=l/(l-p),t.copy(n).addScaledVector(mr,o);let m=u*p-f*d;if(m<=0&&d-u>=0&&f-p>=0)return Ld.subVectors(r,s),o=(d-u)/(d-u+(f-p)),t.copy(s).addScaledVector(Ld,o);let A=1/(m+g+h);return a=g*A,o=h*A,t.copy(n).addScaledVector(Ar,a).addScaledVector(mr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},it=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ii):ii.fromBufferAttribute(r,a),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vo.copy(n.boundingBox)),Vo.applyMatrix4(e.matrixWorld),this.union(Vo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ca),Ho.subVectors(this.max,Ca),gr.subVectors(e.a,Ca),xr.subVectors(e.b,Ca),_r.subVectors(e.c,Ca),es.subVectors(xr,gr),ts.subVectors(_r,xr),Ss.subVectors(gr,_r);let t=[0,-es.z,es.y,0,-ts.z,ts.y,0,-Ss.z,Ss.y,es.z,0,-es.x,ts.z,0,-ts.x,Ss.z,0,-Ss.x,-es.y,es.x,0,-ts.y,ts.x,0,-Ss.y,Ss.x,0];return!Yl(t,gr,xr,_r,Ho)||(t=[1,0,0,0,1,0,0,0,1],!Yl(t,gr,xr,_r,Ho))?!1:(Wo.crossVectors(es,ts),t=[Wo.x,Wo.y,Wo.z],Yl(t,gr,xr,_r,Ho))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ii=[new T,new T,new T,new T,new T,new T,new T,new T],ii=new T,Vo=new it,gr=new T,xr=new T,_r=new T,es=new T,ts=new T,Ss=new T,Ca=new T,Ho=new T,Wo=new T,ws=new T;Di=b0();mi=class{static toHalfFloat(e){return v0(e)}static fromHalfFloat(e){return y0(e)}},tn=new T,Ko=new me,M0=0,Et=class extends Ai{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:M0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qu,this.updateRanges=[],this.gpuType=Yt,this.version=0,this._normalizationScale=e!==void 0?fl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ko.fromBufferAttribute(this,t),Ko.applyMatrix3(e),this.setXY(t,Ko.x,Ko.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ju(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Zu(e,this.array)}},Ka=class extends Et{constructor(e,t,n){super(new Uint16Array(e),t,n)}},qa=class extends Et{constructor(e,t,n){super(new Uint32Array(e),t,n)}},ze=class extends Et{constructor(e,t,n){super(new Float32Array(e),t,n)}},E0=new it,Ta=new T,jl=new T,bn=class{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):E0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ta.subVectors(e,this.center);let t=Ta.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ta,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ta.copy(e.center).add(jl)),this.expandByPoint(Ta.copy(e.center).sub(jl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},S0=0,Jn=new Re,Zl=new Ft,br=new T,Gn=new it,Ia=new it,dn=new T,ut=class i extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qg(e)?qa:Ka)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new rt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,n){return Jn.makeTranslation(e,t,n),this.applyMatrix4(Jn),this}scale(e,t,n){return Jn.makeScale(e,t,n),this.applyMatrix4(Jn),this}lookAt(e){return Zl.lookAt(e),Zl.updateMatrix(),this.applyMatrix4(Zl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ze(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new it);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Gn.setFromBufferAttribute(r),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){let n=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ia.setFromBufferAttribute(o),this.morphTargetsRelative?(dn.addVectors(Gn.min,Ia.min),Gn.expandByPoint(dn),dn.addVectors(Gn.max,Ia.max),Gn.expandByPoint(dn)):(Gn.expandByPoint(Ia.min),Gn.expandByPoint(Ia.max))}Gn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)dn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(dn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)dn.fromBufferAttribute(o,l),c&&(br.fromBufferAttribute(e,l),dn.add(br)),s=Math.max(s,n.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Et(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let I=0;I<n.count;I++)o[I]=new T,c[I]=new T;let u=new T,d=new T,h=new T,f=new me,p=new me,g=new me,m=new T,A=new T;function x(I,S,C){l[I]=l[S]=l[C]=1,u.fromBufferAttribute(n,I),d.fromBufferAttribute(n,S),h.fromBufferAttribute(n,C),f.fromBufferAttribute(r,I),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,C),d.sub(u),h.sub(u),p.sub(f),g.sub(f);let B=1/(p.x*g.y-g.x*p.y);isFinite(B)&&(m.copy(d).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(B),A.copy(h).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(B),o[I].add(m),o[S].add(m),o[C].add(m),c[I].add(A),c[S].add(A),c[C].add(A))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let I=0,S=v.length;I<S;++I){let C=v[I],B=C.start,D=C.count;for(let R=B,k=B+D;R<k;R+=3)x(e.getX(R+0),e.getX(R+1),e.getX(R+2))}let _=new T,y=new T,E=new T,b=new T;function M(I){E.fromBufferAttribute(s,I),b.copy(E);let S=o[I];_.copy(S),_.sub(E.multiplyScalar(E.dot(S))).normalize(),y.crossVectors(b,S);let B=y.dot(c[I])<0?-1:1;a.setXYZW(I,_.x,_.y,_.z,B)}for(let I=0,S=n.count;I<S;++I)l[I]&&M(I);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Et(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new T,r=new T,a=new T,o=new T,c=new T,l=new T,u=new T,d=new T;if(e)for(let h=0,f=e.count;h<f;h+=3){let p=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,p),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(c.length*u),f=0,p=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?f=c[g]*o.data.stride+o.offset:f=c[g]*u;for(let A=0;A<u;A++)h[p++]=l[f++]}return new Et(h,u,d)}if(this.index===null)return tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,d=l.length;u<d;u++){let h=l[u],f=e(h,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){let f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],d=r[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ls=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qu,this.updateRanges=[],this.version=0,this.uuid=oi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Nd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Nd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};En=new T,rs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?fl(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Va("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Et(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Va("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ju(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Zu(e,this.data.array)}},$l=new T,w0=new T,C0=new rt,Sn=class{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=$l.subVectors(n,t).cross(w0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta($l),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||C0.getNormalMatrix(e),s=this.coplanarPoint($l).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},T0=0,Cn=class extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=oi(),this.name="",this.type="Material",this.blending=jr,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ru,this.blendDst=Bu,this.blendEquation=Ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gc,this.stencilZFail=gc,this.stencilZPass=gc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){tt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){tt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Oe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Sn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new me().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new me().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},kr=class extends Cn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ra=new T,yr=new T,Mr=new T,Er=new me,Ba=new me,sp=new Re,qo=new T,Da=new T,Xo=new T,Ud=new me,eu=new me,Od=new me,Xa=class extends Ft{constructor(e=new kr){if(super(),this.isSprite=!0,this.type="Sprite",vr===void 0){vr=new ut;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ls(t,5);vr.setIndex([0,1,2,0,2,3]),vr.setAttribute("position",new rs(n,3,0,!1)),vr.setAttribute("uv",new rs(n,2,3,!1))}this.geometry=vr,this.material=e,this.center=new me(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&lt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),yr.setFromMatrixScale(this.matrixWorld),sp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Mr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&yr.multiplyScalar(-Mr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Jo(qo.set(-.5,-.5,0),Mr,a,yr,s,r),Jo(Da.set(.5,-.5,0),Mr,a,yr,s,r),Jo(Xo.set(.5,.5,0),Mr,a,yr,s,r),Ud.set(0,0),eu.set(1,0),Od.set(1,1);let o=e.ray.intersectTriangle(qo,Da,Xo,!1,Ra);if(o===null&&(Jo(Da.set(-.5,.5,0),Mr,a,yr,s,r),eu.set(0,1),o=e.ray.intersectTriangle(qo,Xo,Da,!1,Ra),o===null))return;let c=e.ray.origin.distanceTo(Ra);c<e.near||c>e.far||t.push({distance:c,point:Ra.clone(),uv:si.getInterpolation(Ra,qo,Da,Xo,Ud,eu,Od,new me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};Ri=new T,tu=new T,Yo=new T,jo=new T,as=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,t),Ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){tu.copy(e).add(t).multiplyScalar(.5),Yo.copy(t).sub(e).normalize(),jo.copy(this.origin).sub(tu);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Yo),o=jo.dot(this.direction),c=-jo.dot(Yo),l=jo.lengthSq(),u=Math.abs(1-a*a),d,h,f,p;if(u>0)if(d=a*c-o,h=a*o-c,p=r*u,d>=0)if(h>=-p)if(h<=p){let g=1/u;d*=g,h*=g,f=d*(d+a*h+2*o)+h*(a*d+h+2*c)+l}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h<=-p?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l):h<=p?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(tu).addScaledVector(Yo,h),f}intersectSphere(e,t){if(e.radius<0)return null;Ri.subVectors(e.center,this.origin);let n=Ri.dot(this.direction),s=Ri.dot(Ri)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,d=e.x-a.x,h=e.y-a.y,f=e.z-a.z,p=t.x-a.x,g=t.y-a.y,m=t.z-a.z,A=n.x-a.x,x=n.y-a.y,v=n.z-a.z,_=Math.abs(c),y=Math.abs(l),E=Math.abs(u),b,M,I,S,C,B,D,R,k,F,P,H;if(_>=y&&_>=E?(I=c,B=d,k=p,H=A,c>=0?(b=l,M=u,S=h,C=f,D=g,R=m,F=x,P=v):(b=u,M=l,S=f,C=h,D=m,R=g,F=v,P=x)):y>=E?(I=l,B=h,k=g,H=x,l>=0?(b=u,M=c,S=f,C=d,D=m,R=p,F=v,P=A):(b=c,M=u,S=d,C=f,D=p,R=m,F=A,P=v)):(I=u,B=f,k=m,H=v,u>=0?(b=c,M=l,S=d,C=h,D=p,R=g,F=A,P=x):(b=l,M=c,S=h,C=d,D=g,R=p,F=x,P=A)),I===0)return null;let U=b/I,L=M/I,O=1/I,V=S-U*B,j=C-L*B,Q=D-U*k,q=R-L*k,Z=F-U*H,ue=P-L*H,de=Z*q-ue*Q,$=V*ue-j*Z,ge=Q*j-q*V;if(s){if(de<0||$<0||ge<0)return null}else if((de<0||$<0||ge<0)&&(de>0||$>0||ge>0))return null;let fe=de+$+ge;if(fe===0)return null;let Be=O*(de*B+$*k+ge*H);return(fe>0?Be<0:Be>0)?null:this.at(Be/fe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Bn=class extends Cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=Du,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},kd=new Re,Cs=new as,Zo=new bn,Gd=new T,$o=new T,ec=new T,tc=new T,nu=new T,nc=new T,Qd=new T,ic=new T,Le=class extends Ft{constructor(e=new ut,t=new Bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){nc.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],d=r[c];u!==0&&(nu.fromBufferAttribute(d,e),a?nc.addScaledVector(nu,u):nc.addScaledVector(nu.sub(t),u))}t.add(nc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(r),Cs.copy(e.ray).recast(e.near),!(Zo.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(Zo,Gd)===null||Cs.origin.distanceToSquared(Gd)>(e.far-e.near)**2))&&(kd.copy(r).invert(),Cs.copy(e.ray).applyMatrix4(kd),!(n.boundingBox!==null&&Cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Cs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,g=h.length;p<g;p++){let m=h[p],A=a[m.materialIndex],x=Math.max(m.start,f.start),v=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,y=v;_<y;_+=3){let E=o.getX(_),b=o.getX(_+1),M=o.getX(_+2);s=sc(this,A,e,n,l,u,d,E,b,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=p,A=g;m<A;m+=3){let x=o.getX(m),v=o.getX(m+1),_=o.getX(m+2);s=sc(this,a,e,n,l,u,d,x,v,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,g=h.length;p<g;p++){let m=h[p],A=a[m.materialIndex],x=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,y=v;_<y;_+=3){let E=_,b=_+1,M=_+2;s=sc(this,A,e,n,l,u,d,E,b,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let m=p,A=g;m<A;m+=3){let x=m,v=m+1,_=m+2;s=sc(this,a,e,n,l,u,d,x,v,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};Fa=new mt,zd=new mt,Vd=new mt,R0=new mt,Hd=new Re,rc=new T,iu=new bn,Wd=new Re,su=new as,Ja=class extends Le{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=hu,this.bindMatrix=new Re,this.bindMatrixInverse=new Re,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new it),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,rc),this.boundingBox.expandByPoint(rc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new bn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,rc),this.boundingSphere.expandByPoint(rc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),iu.copy(this.boundingSphere),iu.applyMatrix4(s),e.ray.intersectsSphere(iu)!==!1&&(Wd.copy(s).invert(),su.copy(e.ray).applyMatrix4(Wd),!(this.boundingBox!==null&&su.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,su)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new mt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===hu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Vf?this.bindMatrixInverse.copy(this.bindMatrix).invert():tt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;zd.fromBufferAttribute(s.attributes.skinIndex,e),Vd.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Fa.copy(t),t.set(0,0,0,0)):(Fa.set(t.x,t.y,t.z,1),t.set(0,0,0)),Fa.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Vd.getComponent(r);if(a!==0){let o=zd.getComponent(r);Hd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(R0.copy(Fa).applyMatrix4(Hd),a)}}return t.isVector4&&(t.w=Fa.w),t.applyMatrix4(this.bindMatrixInverse)}},Gr=class extends Ft{constructor(){super(),this.isBone=!0,this.type="Bone"}},Dn=class extends nn{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Pt,u=Pt,d,h){super(null,a,o,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Kd=new Re,B0=new Re,Ya=class i{constructor(e=[],t=[]){this.uuid=oi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){tt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Re)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Re;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:B0;Kd.multiplyMatrices(o,t[r]),Kd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Dn(t,e,e,jt,Yt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(tt("Skeleton: No bone found with UUID:",r),a=new Gr),this.bones.push(a),this.boneInverses.push(new Re().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Fn=class extends Et{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Sr=new Re,qd=new Re,ac=[],Xd=new it,D0=new Re,Pa=new Le,La=new bn,Pn=class extends Le{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,D0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new it),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Sr),Xd.copy(e.boundingBox).applyMatrix4(Sr),this.boundingBox.union(Xd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new bn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Sr),La.copy(e.boundingSphere).applyMatrix4(Sr),this.boundingSphere.union(La)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Pa.geometry=this.geometry,Pa.material=this.material,Pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),La.copy(this.boundingSphere),La.applyMatrix4(n),e.ray.intersectsSphere(La)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Sr),qd.multiplyMatrices(n,Sr),Pa.matrixWorld=qd,Pa.raycast(e,ac);for(let a=0,o=ac.length;a<o;a++){let c=ac[a];c.instanceId=r,c.object=this,t.push(c)}ac.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Fn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Dn(new Float32Array(s*this.count),s,this.count,Zn,Yt));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ts=new bn,F0=new me(.5,.5),oc=new T,jn=class{constructor(e=new Sn,t=new Sn,n=new Sn,s=new Sn,r=new Sn,a=new Sn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],d=r[5],h=r[6],f=r[7],p=r[8],g=r[9],m=r[10],A=r[11],x=r[12],v=r[13],_=r[14],y=r[15];if(s[0].setComponents(l-a,f-u,A-p,y-x).normalize(),s[1].setComponents(l+a,f+u,A+p,y+x).normalize(),s[2].setComponents(l+o,f+d,A+g,y+v).normalize(),s[3].setComponents(l-o,f-d,A-g,y-v).normalize(),n)s[4].setComponents(c,h,m,_).normalize(),s[5].setComponents(l-c,f-h,A-m,y-_).normalize();else if(s[4].setComponents(l-c,f-h,A-m,y-_).normalize(),t===Yn)s[5].setComponents(l+c,f+h,A+m,y+_).normalize();else if(t===Fr)s[5].setComponents(c,h,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(e){Ts.center.set(0,0,0);let t=F0.distanceTo(e.center);return Ts.radius=.7071067811865476+t,Ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(oc.x=s.normal.x>0?e.max.x:e.min.x,oc.y=s.normal.y>0?e.max.y:e.min.y,oc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(oc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Jd=new Re,Cc=class i{constructor(){this.coordinateSystem=Yn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Jd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new jn),n[s].setFromProjectionMatrix(Jd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new jn),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}},Qr=class extends Cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Tc=new T,Ic=new T,Yd=new Re,Na=new as,cc=new bn,ru=new T,jd=new T,Ns=class extends Ft{constructor(e=new ut,t=new Qr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Tc.fromBufferAttribute(t,s-1),Ic.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Tc.distanceTo(Ic);e.setAttribute("lineDistance",new ze(n,1))}else tt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cc.copy(n.boundingSphere),cc.applyMatrix4(s),cc.radius+=r,e.ray.intersectsSphere(cc)===!1)return;Yd.copy(s).invert(),Na.copy(e.ray).applyMatrix4(Yd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,m=p-1;g<m;g+=l){let A=u.getX(g),x=u.getX(g+1),v=lc(this,e,Na,c,A,x,g);v&&t.push(v)}if(this.isLineLoop){let g=u.getX(p-1),m=u.getX(f),A=lc(this,e,Na,c,g,m,p-1);A&&t.push(A)}}else{let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,m=p-1;g<m;g+=l){let A=lc(this,e,Na,c,g,g+1,g);A&&t.push(A)}if(this.isLineLoop){let g=lc(this,e,Na,c,p-1,f,p-1);g&&t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};Zd=new T,$d=new T,ja=class extends Ns{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Zd.fromBufferAttribute(t,s),$d.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Zd.distanceTo($d);e.setAttribute("lineDistance",new ze(n,1))}else tt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Za=class extends Ns{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},zr=class extends Cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ef=new Re,mu=new as,uc=new bn,hc=new T,$a=class extends Ft{constructor(e=new ut,t=new zr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uc.copy(n.boundingSphere),uc.applyMatrix4(s),uc.radius+=r,e.ray.intersectsSphere(uc)===!1)return;ef.copy(s).invert(),mu.copy(e.ray).applyMatrix4(ef);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let h=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let p=h,g=f;p<g;p++){let m=l.getX(p);hc.fromBufferAttribute(d,m),tf(hc,m,c,s,e,t,this)}}else{let h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=h,g=f;p<g;p++)hc.fromBufferAttribute(d,p),tf(hc,p,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};os=class extends nn{constructor(e=[],t,n,s,r,a,o,c,l,u,d,h){super(null,a,o,c,l,u,s,r,d,h),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},eo=class extends os{constructor(e,t,n,s,r,a){super(e,t,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=s,this.wrapR=wn,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Vr=class extends os{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,As),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}},to=class extends nn{constructor(e=[],t=As,n,s,r,a,o,c,l,u){super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ri=class extends nn{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},zn=class extends nn{constructor(e,t,n=Tn,s,r,a,o=Pt,c=Pt,l,u=Pi,d=1){if(u!==Pi&&u!==Vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Nr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},no=class extends zn{constructor(e,t=Tn,n=As,s,r,a=Pt,o=Pt,c,l=Pi){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},io=class extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ot=class i extends ut{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],d=[],h=0,f=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,s,a,2),p("x","z","y",1,-1,e,n,-t,s,a,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ze(l,3)),this.setAttribute("normal",new ze(u,3)),this.setAttribute("uv",new ze(d,2));function p(g,m,A,x,v,_,y,E,b,M,I){let S=_/b,C=y/M,B=_/2,D=y/2,R=E/2,k=b+1,F=M+1,P=0,H=0,U=new T;for(let L=0;L<F;L++){let O=L*C-D;for(let V=0;V<k;V++){let j=V*S-B;U[g]=j*x,U[m]=O*v,U[A]=R,l.push(U.x,U.y,U.z),U[g]=0,U[m]=0,U[A]=E>0?1:-1,u.push(U.x,U.y,U.z),d.push(V/b),d.push(1-L/M),P+=1}}for(let L=0;L<M;L++)for(let O=0;O<b;O++){let V=h+O+k*L,j=h+O+k*(L+1),Q=h+(O+1)+k*(L+1),q=h+(O+1)+k*L;c.push(V,j,q),c.push(j,Q,q),H+=6}o.addGroup(f,H,I),f+=H,h+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},so=class i extends ut{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],u=t/2,d=Math.PI/2*e,h=t,f=2*d+h,p=n*2+r,g=s+1,m=new T,A=new T;for(let x=0;x<=p;x++){let v=0,_=0,y=0,E=0;if(x<=n){let I=x/n,S=I*Math.PI/2;_=-u-e*Math.cos(S),y=e*Math.sin(S),E=-e*Math.cos(S),v=I*d}else if(x<=n+r){let I=(x-n)/r;_=-u+I*t,y=e,E=0,v=d+I*h}else{let I=(x-n-r)/n,S=I*Math.PI/2;_=u+e*Math.sin(S),y=e*Math.cos(S),E=e*Math.sin(S),v=d+h+I*d}let b=Math.max(0,Math.min(1,v/f)),M=0;x===0?M=.5/s:x===p&&(M=-.5/s);for(let I=0;I<=s;I++){let S=I/s,C=S*Math.PI*2,B=Math.sin(C),D=Math.cos(C);A.x=-y*D,A.y=_,A.z=y*B,o.push(A.x,A.y,A.z),m.set(-y*D,E,y*B),m.normalize(),c.push(m.x,m.y,m.z),l.push(S+M,b)}if(x>0){let I=(x-1)*g;for(let S=0;S<s;S++){let C=I+S,B=I+S+1,D=x*g+S,R=x*g+S+1;a.push(C,B,D),a.push(B,R,D)}}}this.setIndex(a),this.setAttribute("position",new ze(o,3)),this.setAttribute("normal",new ze(c,3)),this.setAttribute("uv",new ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},cs=class i extends ut{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new T,u=new me;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){let f=n+d/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ze(a,3)),this.setAttribute("normal",new ze(o,3)),this.setAttribute("uv",new ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},zt=class i extends ut{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],f=[],p=0,g=[],m=n/2,A=0;x(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new ze(d,3)),this.setAttribute("normal",new ze(h,3)),this.setAttribute("uv",new ze(f,2));function x(){let _=new T,y=new T,E=0,b=(t-e)/n;for(let M=0;M<=r;M++){let I=[],S=M/r,C=S*(t-e)+e;for(let B=0;B<=s;B++){let D=B/s,R=D*c+o,k=Math.sin(R),F=Math.cos(R);y.x=C*k,y.y=-S*n+m,y.z=C*F,d.push(y.x,y.y,y.z),_.set(k,b,F).normalize(),h.push(_.x,_.y,_.z),f.push(D,1-S),I.push(p++)}g.push(I)}for(let M=0;M<s;M++)for(let I=0;I<r;I++){let S=g[I][M],C=g[I+1][M],B=g[I+1][M+1],D=g[I][M+1];(e>0||I!==0)&&(u.push(S,C,D),E+=3),(t>0||I!==r-1)&&(u.push(C,B,D),E+=3)}l.addGroup(A,E,0),A+=E}function v(_){let y=p,E=new me,b=new T,M=0,I=_===!0?e:t,S=_===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,m*S,0),h.push(0,S,0),f.push(.5,.5),p++;let C=p;for(let B=0;B<=s;B++){let R=B/s*c+o,k=Math.cos(R),F=Math.sin(R);b.x=I*F,b.y=m*S,b.z=I*k,d.push(b.x,b.y,b.z),h.push(0,S,0),E.x=k*.5+.5,E.y=F*.5*S+.5,f.push(E.x,E.y),p++}for(let B=0;B<s;B++){let D=y+B,R=C+B;_===!0?u.push(R,R+1,D):u.push(R+1,R,D),M+=3}l.addGroup(A,M,_===!0?1:2),A+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Rc=class i extends ut{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),u(),this.setAttribute("position",new ze(r,3)),this.setAttribute("normal",new ze(r.slice(),3)),this.setAttribute("uv",new ze(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let v=new T,_=new T,y=new T;for(let E=0;E<t.length;E+=3)f(t[E+0],v),f(t[E+1],_),f(t[E+2],y),c(v,_,y,x)}function c(x,v,_,y){let E=y+1,b=[];for(let M=0;M<=E;M++){b[M]=[];let I=x.clone().lerp(_,M/E),S=v.clone().lerp(_,M/E),C=E-M;for(let B=0;B<=C;B++)B===0&&M===E?b[M][B]=I:b[M][B]=I.clone().lerp(S,B/C)}for(let M=0;M<E;M++)for(let I=0;I<2*(E-M)-1;I++){let S=Math.floor(I/2);I%2===0?(h(b[M][S+1]),h(b[M+1][S]),h(b[M][S])):(h(b[M][S+1]),h(b[M+1][S+1]),h(b[M+1][S]))}}function l(x){let v=new T;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(x),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function u(){let x=new T;for(let v=0;v<r.length;v+=3){x.x=r[v+0],x.y=r[v+1],x.z=r[v+2];let _=m(x)/2/Math.PI+.5,y=A(x)/Math.PI+.5;a.push(_,1-y)}p(),d()}function d(){for(let x=0;x<a.length;x+=6){let v=a[x+0],_=a[x+2],y=a[x+4],E=Math.max(v,_,y),b=Math.min(v,_,y);E>.9&&b<.1&&(v<.2&&(a[x+0]+=1),_<.2&&(a[x+2]+=1),y<.2&&(a[x+4]+=1))}}function h(x){r.push(x.x,x.y,x.z)}function f(x,v){let _=x*3;v.x=e[_+0],v.y=e[_+1],v.z=e[_+2]}function p(){let x=new T,v=new T,_=new T,y=new T,E=new me,b=new me,M=new me;for(let I=0,S=0;I<r.length;I+=9,S+=6){x.set(r[I+0],r[I+1],r[I+2]),v.set(r[I+3],r[I+4],r[I+5]),_.set(r[I+6],r[I+7],r[I+8]),E.set(a[S+0],a[S+1]),b.set(a[S+2],a[S+3]),M.set(a[S+4],a[S+5]),y.copy(x).add(v).add(_).divideScalar(3);let C=m(y);g(E,S+0,x,C),g(b,S+2,v,C),g(M,S+4,_,C)}}function g(x,v,_,y){y<0&&x.x===1&&(a[v]=x.x-1),_.x===0&&_.z===0&&(a[v]=y/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function A(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},Vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){tt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let u=n[s],h=n[s+1]-u,f=(a-u)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new me:new T);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new T,s=[],r=[],a=[],o=new T,c=new Re;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new T)}r[0]=new T,a[0]=new T;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),h<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(_t(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(_t(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},ls=class extends Vn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new me){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Bc=class extends ls{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};nf=new T,sf=new T,au=new $u,ou=new $u,cu=new $u,gi=class extends Vn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new T){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(sf.subVectors(s[0],s[1]).add(s[0]),l=sf);let d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(nf.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=nf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);g<1e-4&&(g=1),p<1e-4&&(p=g),m<1e-4&&(m=g),au.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,p,g,m),ou.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,p,g,m),cu.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,p,g,m)}else this.curveType==="catmullrom"&&(au.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),ou.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),cu.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return n.set(au.calc(c),ou.calc(c),cu.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new T().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};ro=class extends Vn{constructor(e=new me,t=new me,n=new me,s=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new me){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(za(e,s.x,r.x,a.x,o.x),za(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Dc=class extends Vn{constructor(e=new T,t=new T,n=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new T){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(za(e,s.x,r.x,a.x,o.x),za(e,s.y,r.y,a.y,o.y),za(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ao=class extends Vn{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Us=class extends Vn{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oo=class extends Vn{constructor(e=new me,t=new me,n=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new me){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Qa(e,s.x,r.x,a.x),Qa(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},us=class extends Vn{constructor(e=new T,t=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new T){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Qa(e,s.x,r.x,a.x),Qa(e,s.y,r.y,a.y),Qa(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},co=class extends Vn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(rf(o,c.x,l.x,u.x,d.x),rf(o,c.y,l.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new me().fromArray(s))}return this}},Fc=Object.freeze({__proto__:null,ArcCurve:Bc,CatmullRomCurve3:gi,CubicBezierCurve:ro,CubicBezierCurve3:Dc,EllipseCurve:ls,LineCurve:ao,LineCurve3:Us,QuadraticBezierCurve:oo,QuadraticBezierCurve3:us,SplineCurve:co}),Hr=class extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Fc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Li=class extends Hr{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ao(this.currentPoint.clone(),new me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new oo(this.currentPoint.clone(),new me(e,t),new me(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new ro(this.currentPoint.clone(),new me(e,t),new me(n,s),new me(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new co(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new ls(e,t,n,s,r,a,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},hs=class extends Li{constructor(e){super(e),this.uuid=oi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Li().fromJSON(s))}return this}};_u=class{static triangulate(e,t,n=2){return Q0(e,t,n)}},Is=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];of(e),cf(n,e);let a=e.length;t.forEach(of);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,cf(n,t[c]);let o=_u.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};ks=class i extends ut{constructor(e=new hs([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new ze(s,3)),this.setAttribute("uv",new ze(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,A=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:sx,v,_=!1,y,E,b,M;if(A){v=A.getSpacedPoints(u),_=!0,h=!1;let ee=A.isCatmullRomCurve3?A.closed:!1;y=A.computeFrenetFrames(u,ee),E=new T,b=new T,M=new T}h||(m=0,f=0,p=0,g=0);let I=o.extractPoints(l),S=I.shape,C=I.holes;if(!Is.isClockWise(S)){S=S.reverse();for(let ee=0,_e=C.length;ee<_e;ee++){let be=C[ee];Is.isClockWise(be)&&(C[ee]=be.reverse())}}function D(ee){let be=10000000000000001e-36,ve=ee[0];for(let Ee=1;Ee<=ee.length;Ee++){let Ke=Ee%ee.length,Fe=ee[Ke],nt=Fe.x-ve.x,qe=Fe.y-ve.y,$e=nt*nt+qe*qe,z=Math.max(Math.abs(Fe.x),Math.abs(Fe.y),Math.abs(ve.x),Math.abs(ve.y)),Xe=be*z*z;if($e<=Xe){ee.splice(Ke,1),Ee--;continue}ve=Fe}}D(S),C.forEach(D);let R=C.length,k=S;for(let ee=0;ee<R;ee++){let _e=C[ee];S=S.concat(_e)}function F(ee,_e,be){return _e||lt("ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(_e,be)}let P=S.length;function H(ee,_e,be){let ve,Ee,Ke,Fe=ee.x-_e.x,nt=ee.y-_e.y,qe=be.x-ee.x,$e=be.y-ee.y,z=Fe*Fe+nt*nt,Xe=Fe*$e-nt*qe;if(Math.abs(Xe)>Number.EPSILON){let Ce=Math.sqrt(z),Pe=Math.sqrt(qe*qe+$e*$e),ne=_e.x-nt/Ce,ke=_e.y+Fe/Ce,Ge=be.x-$e/Pe,Qe=be.y+qe/Pe,G=((Ge-ne)*$e-(Qe-ke)*qe)/(Fe*$e-nt*qe);ve=ne+Fe*G-ee.x,Ee=ke+nt*G-ee.y;let w=ve*ve+Ee*Ee;if(w<=2)return new me(ve,Ee);Ke=Math.sqrt(w/2)}else{let Ce=!1;Fe>Number.EPSILON?qe>Number.EPSILON&&(Ce=!0):Fe<-Number.EPSILON?qe<-Number.EPSILON&&(Ce=!0):Math.sign(nt)===Math.sign($e)&&(Ce=!0),Ce?(ve=-nt,Ee=Fe,Ke=Math.sqrt(z)):(ve=Fe,Ee=nt,Ke=Math.sqrt(z/2))}return new me(ve/Ke,Ee/Ke)}let U=[];for(let ee=0,_e=k.length,be=_e-1,ve=ee+1;ee<_e;ee++,be++,ve++)be===_e&&(be=0),ve===_e&&(ve=0),U[ee]=H(k[ee],k[be],k[ve]);let L=[],O,V=U.concat();for(let ee=0,_e=R;ee<_e;ee++){let be=C[ee];O=[];for(let ve=0,Ee=be.length,Ke=Ee-1,Fe=ve+1;ve<Ee;ve++,Ke++,Fe++)Ke===Ee&&(Ke=0),Fe===Ee&&(Fe=0),O[ve]=H(be[ve],be[Ke],be[Fe]);L.push(O),V=V.concat(O)}let j;if(m===0)j=Is.triangulateShape(k,C);else{let ee=[],_e=[];for(let be=0;be<m;be++){let ve=be/m,Ee=f*Math.cos(ve*Math.PI/2),Ke=p*Math.sin(ve*Math.PI/2)+g;for(let Fe=0,nt=k.length;Fe<nt;Fe++){let qe=F(k[Fe],U[Fe],Ke);$(qe.x,qe.y,-Ee),ve===0&&ee.push(qe)}for(let Fe=0,nt=R;Fe<nt;Fe++){let qe=C[Fe];O=L[Fe];let $e=[];for(let z=0,Xe=qe.length;z<Xe;z++){let Ce=F(qe[z],O[z],Ke);$(Ce.x,Ce.y,-Ee),ve===0&&$e.push(Ce)}ve===0&&_e.push($e)}}j=Is.triangulateShape(ee,_e)}let Q=j.length,q=p+g;for(let ee=0;ee<P;ee++){let _e=h?F(S[ee],V[ee],q):S[ee];_?(b.copy(y.normals[0]).multiplyScalar(_e.x),E.copy(y.binormals[0]).multiplyScalar(_e.y),M.copy(v[0]).add(b).add(E),$(M.x,M.y,M.z)):$(_e.x,_e.y,0)}for(let ee=1;ee<=u;ee++)for(let _e=0;_e<P;_e++){let be=h?F(S[_e],V[_e],q):S[_e];_?(b.copy(y.normals[ee]).multiplyScalar(be.x),E.copy(y.binormals[ee]).multiplyScalar(be.y),M.copy(v[ee]).add(b).add(E),$(M.x,M.y,M.z)):$(be.x,be.y,d/u*ee)}for(let ee=m-1;ee>=0;ee--){let _e=ee/m,be=f*Math.cos(_e*Math.PI/2),ve=p*Math.sin(_e*Math.PI/2)+g;for(let Ee=0,Ke=k.length;Ee<Ke;Ee++){let Fe=F(k[Ee],U[Ee],ve);$(Fe.x,Fe.y,d+be)}for(let Ee=0,Ke=C.length;Ee<Ke;Ee++){let Fe=C[Ee];O=L[Ee];for(let nt=0,qe=Fe.length;nt<qe;nt++){let $e=F(Fe[nt],O[nt],ve);_?$($e.x,$e.y+v[u-1].y,v[u-1].x+be):$($e.x,$e.y,d+be)}}}Z(),ue();function Z(){let ee=s.length/3;if(h){let _e=0,be=P*_e;for(let ve=0;ve<Q;ve++){let Ee=j[ve];ge(Ee[2]+be,Ee[1]+be,Ee[0]+be)}_e=u+m*2,be=P*_e;for(let ve=0;ve<Q;ve++){let Ee=j[ve];ge(Ee[0]+be,Ee[1]+be,Ee[2]+be)}}else{for(let _e=0;_e<Q;_e++){let be=j[_e];ge(be[2],be[1],be[0])}for(let _e=0;_e<Q;_e++){let be=j[_e];ge(be[0]+P*u,be[1]+P*u,be[2]+P*u)}}n.addGroup(ee,s.length/3-ee,0)}function ue(){let ee=s.length/3,_e=0;de(k,_e),_e+=k.length;for(let be=0,ve=C.length;be<ve;be++){let Ee=C[be];de(Ee,_e),_e+=Ee.length}n.addGroup(ee,s.length/3-ee,1)}function de(ee,_e){let be=ee.length;for(;--be>=0;){let ve=be,Ee=be-1;Ee<0&&(Ee=ee.length-1);for(let Ke=0,Fe=u+m*2;Ke<Fe;Ke++){let nt=P*Ke,qe=P*(Ke+1),$e=_e+ve+nt,z=_e+Ee+nt,Xe=_e+Ee+qe,Ce=_e+ve+qe;fe($e,z,Xe,Ce)}}}function $(ee,_e,be){c.push(ee),c.push(_e),c.push(be)}function ge(ee,_e,be){Be(ee),Be(_e),Be(be);let ve=s.length/3,Ee=x.generateTopUV(n,s,ve-3,ve-2,ve-1);we(Ee[0]),we(Ee[1]),we(Ee[2])}function fe(ee,_e,be,ve){Be(ee),Be(_e),Be(ve),Be(_e),Be(be),Be(ve);let Ee=s.length/3,Ke=x.generateSideWallUV(n,s,Ee-6,Ee-3,Ee-2,Ee-1);we(Ke[0]),we(Ke[1]),we(Ke[3]),we(Ke[1]),we(Ke[2]),we(Ke[3])}function Be(ee){s.push(c[ee*3+0]),s.push(c[ee*3+1]),s.push(c[ee*3+2])}function we(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return rx(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Fc[s.type]().fromJSON(s)),new i(n,e.options)}},sx={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],u=e[s*3+1];return[new me(r,a),new me(o,c),new me(l,u)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],d=e[n*3+2],h=e[s*3],f=e[s*3+1],p=e[s*3+2],g=e[r*3],m=e[r*3+1],A=e[r*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new me(a,1-c),new me(l,1-d),new me(h,1-p),new me(g,1-A)]:[new me(o,1-c),new me(u,1-d),new me(f,1-p),new me(m,1-A)]}};Kr=class i extends Rc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},qr=class i extends ut{constructor(e=[new me(0,-.5),new me(.5,0),new me(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=_t(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],u=1/t,d=new T,h=new me,f=new T,p=new T,g=new T,m=0,A=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,A=e[x+1].y-e[x].y,f.x=A*1,f.y=-m,f.z=A*0,g.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:g.normalize(),c.push(g.x,g.y,g.z);break;default:m=e[x+1].x-e[x].x,A=e[x+1].y-e[x].y,f.x=A*1,f.y=-m,f.z=A*0,p.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),c.push(f.x,f.y,f.z),g.copy(p)}for(let x=0;x<=t;x++){let v=n+x*u*s,_=Math.sin(v),y=Math.cos(v);for(let E=0;E<=e.length-1;E++){d.x=e[E].x*_,d.y=e[E].y,d.z=e[E].x*y,a.push(d.x,d.y,d.z),h.x=x/t,h.y=E/(e.length-1),o.push(h.x,h.y);let b=c[3*E+0]*_,M=c[3*E+1],I=c[3*E+0]*y;l.push(b,M,I)}}for(let x=0;x<t;x++)for(let v=0;v<e.length-1;v++){let _=v+x*e.length,y=_,E=_+e.length,b=_+e.length+1,M=_+1;r.push(y,E,M),r.push(b,M,E)}this.setIndex(r),this.setAttribute("position",new ze(a,3)),this.setAttribute("uv",new ze(o,2)),this.setAttribute("normal",new ze(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Hn=class i extends ut{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,d=e/o,h=t/c,f=[],p=[],g=[],m=[];for(let A=0;A<u;A++){let x=A*h-a;for(let v=0;v<l;v++){let _=v*d-r;p.push(_,-x,0),g.push(0,0,1),m.push(v/o),m.push(1-A/c)}}for(let A=0;A<c;A++)for(let x=0;x<o;x++){let v=x+l*A,_=x+l*(A+1),y=x+1+l*(A+1),E=x+1+l*A;f.push(v,_,E),f.push(_,y,E)}this.setIndex(f),this.setAttribute("position",new ze(p,3)),this.setAttribute("normal",new ze(g,3)),this.setAttribute("uv",new ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Wn=class i extends ut{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],d=new T,h=new T,f=[],p=[],g=[],m=[];for(let A=0;A<=n;A++){let x=[],v=A/n,_=a+v*o,y=e*Math.cos(_),E=Math.sqrt(e*e-y*y),b=0;A===0&&a===0?b=.5/t:A===n&&c===Math.PI&&(b=-.5/t);for(let M=0;M<=t;M++){let I=M/t,S=s+I*r;d.x=-E*Math.cos(S),d.y=y,d.z=E*Math.sin(S),p.push(d.x,d.y,d.z),h.copy(d).normalize(),g.push(h.x,h.y,h.z),m.push(I+b,1-v),x.push(l++)}u.push(x)}for(let A=0;A<n;A++)for(let x=0;x<t;x++){let v=u[A][x+1],_=u[A][x],y=u[A+1][x],E=u[A+1][x+1];(A!==0||a>0)&&f.push(v,_,E),(A!==n-1||c<Math.PI)&&f.push(_,y,E)}this.setIndex(f),this.setAttribute("position",new ze(p,3)),this.setAttribute("normal",new ze(g,3)),this.setAttribute("uv",new ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Gs=class i extends ut{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],u=[],d=[],h=new T,f=new T,p=new T;for(let g=0;g<=n;g++){let m=a+g/n*o;for(let A=0;A<=s;A++){let x=A/s*r;f.x=(e+t*Math.cos(m))*Math.cos(x),f.y=(e+t*Math.cos(m))*Math.sin(x),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),p.subVectors(f,h).normalize(),u.push(p.x,p.y,p.z),d.push(A/s),d.push(g/n)}}for(let g=1;g<=n;g++)for(let m=1;m<=s;m++){let A=(s+1)*g+m-1,x=(s+1)*(g-1)+m-1,v=(s+1)*(g-1)+m,_=(s+1)*g+m;c.push(A,x,_),c.push(x,v,_)}this.setIndex(c),this.setAttribute("position",new ze(l,3)),this.setAttribute("normal",new ze(u,3)),this.setAttribute("uv",new ze(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}},xi=class i extends ut{constructor(e=new us(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new T,c=new T,l=new me,u=new T,d=[],h=[],f=[],p=[];g(),this.setIndex(p),this.setAttribute("position",new ze(d,3)),this.setAttribute("normal",new ze(h,3)),this.setAttribute("uv",new ze(f,2));function g(){for(let v=0;v<t;v++)m(v);m(r===!1?t:0),x(),A()}function m(v){u=e.getPointAt(v/t,u);let _=a.normals[v],y=a.binormals[v];for(let E=0;E<=s;E++){let b=E/s*Math.PI*2,M=Math.sin(b),I=-Math.cos(b);c.x=I*_.x+M*y.x,c.y=I*_.y+M*y.y,c.z=I*_.z+M*y.z,c.normalize(),h.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,d.push(o.x,o.y,o.z)}}function A(){for(let v=1;v<=t;v++)for(let _=1;_<=s;_++){let y=(s+1)*(v-1)+(_-1),E=(s+1)*v+(_-1),b=(s+1)*v+_,M=(s+1)*(v-1)+_;p.push(y,E,M),p.push(E,b,M)}}function x(){for(let v=0;v<=t;v++)for(let _=0;_<=s;_++)l.x=v/t,l.y=_/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Fc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};pl={clone:nr,merge:vn},ox=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,kt=class extends Cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ox,this.fragmentShader=cx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=nr(e.uniforms),this.uniformsGroups=ax(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Oe().setHex(s.value);break;case"v2":this.uniforms[n].value=new me().fromArray(s.value);break;case"v3":this.uniforms[n].value=new T().fromArray(s.value);break;case"v4":this.uniforms[n].value=new mt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new rt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Re().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Pc=class extends kt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},at=class extends Cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dl,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Xt=class extends at{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new me(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Rs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Rs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Lc=class extends Cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Nc=class extends Cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};_i=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Uc=class extends _i{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fu,endingEnd:fu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case pu:r=e,o=2*t-n;break;case Au:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case pu:a=e,c=2*n-t;break;case Au:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),g=p*p,m=g*p,A=-h*m+2*h*g-h*p,x=(1+h)*m+(-1.5-2*h)*g+(-.5+h)*p+1,v=(-1-f)*m+(1.5+f)*g+.5*p,_=f*m-f*g;for(let y=0;y!==o;++y)r[y]=A*a[u+y]+x*a[l+y]+v*a[c+y]+_*a[d+y];return r}},Oc=class extends _i{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(s-t),d=1-u;for(let h=0;h!==o;++h)r[h]=a[l+h]*d+a[c+h]*u;return r}},kc=class extends _i{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Gc=class extends _i{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let p=(n-t)/(s-t),g=1-p;for(let m=0;m!==o;++m)r[m]=a[l+m]*g+a[c+m]*p;return r}let h=o*2,f=e-1;for(let p=0;p!==o;++p){let g=a[l+p],m=a[c+p],A=f*h+p*2,x=d[A],v=d[A+1],_=e*h+p*2,y=u[_],E=u[_+1],b=dx(n,t,x,y,s);r[p]=lp(b,g,v,E,m)}return r}};Ln=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=is(t,this.TimeBufferType),this.values=is(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:is(e.times,Array),values:is(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Oa(e.settings)&&(n.settings={inTangents:is(e.settings.inTangents,Array),outTangents:is(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new kc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Uc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Gc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Bs:t=this.InterpolantFactoryMethodDiscrete;break;case Ds:t=this.InterpolantFactoryMethodLinear;break;case mc:t=this.InterpolantFactoryMethodSmooth;break;case du:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return tt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bs;case this.InterpolantFactoryMethodLinear:return Ds;case this.InterpolantFactoryMethodSmooth:return mc;case this.InterpolantFactoryMethodBezier:return du}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Oa(this.settings)&&(hf(this.settings.inTangents,e),hf(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Oa(this.settings)&&(df(this.settings.inTangents,e),df(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(lt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(lt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){lt("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){lt("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Xg(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){lt("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===mc,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(s)c=!0;else{let d=o*n,h=d-n,f=d+n;for(let p=0;p!==n;++p){let g=t[d+p];if(g!==t[h+p]||g!==t[f+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*n,h=a*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Oa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};Ln.prototype.ValueTypeName="";Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=Ds;Ni=class extends Ln{constructor(e,t,n){super(e,t,n)}};Ni.prototype.ValueTypeName="bool";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=Bs;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;fo=class extends Ln{constructor(e,t,n,s){super(e,t,n,s)}};fo.prototype.ValueTypeName="color";Ui=class extends Ln{constructor(e,t,n,s){super(e,t,n,s)}};Ui.prototype.ValueTypeName="number";Qc=class extends _i{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let u=l+o;l!==u;l+=4)Qt.slerpFlat(r,0,a,l-o,a,l,c);return r}},Oi=class extends Ln{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Qc(this.times,this.values,this.getValueSize(),e)}};Oi.prototype.ValueTypeName="quaternion";Oi.prototype.InterpolantFactoryMethodSmooth=void 0;ki=class extends Ln{constructor(e,t,n){super(e,t,n)}};ki.prototype.ValueTypeName="string";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=Bs;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;ds=class extends Ln{constructor(e,t,n,s){super(e,t,n,s)}};ds.prototype.ValueTypeName="vector";po=class{constructor(e="",t=-1,n=[],s=Hf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=oi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(px(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Ln.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let u=lx(c);c=uf(c,1,u),l=uf(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Ui(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],u=l.name.match(r);if(u&&u.length>1){let d=u[1],h=s[d];h||(s[d]=h=[]),h.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};pi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(ff(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!ff(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};zc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){let f=l[d],p=l[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},up=new zc,Kn=class{constructor(e){this.manager=e!==void 0?e:up,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Kn.DEFAULT_MATERIAL_NAME="__DEFAULT";Bi={},bu=class extends Error{constructor(e,t){super(e),this.response=t}},ai=class extends Kn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=pi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Bi[e]!==void 0){Bi[e].push({onLoad:t,onProgress:n,onError:s});return}Bi[e]=[],Bi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&tt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=Bi[e],d=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=h?parseInt(h):0,p=f!==0,g=0,m=new ReadableStream({start(A){x();function x(){d.read().then(({done:v,value:_})=>{if(v)A.close();else{g+=_.byteLength;let y=new ProgressEvent("progress",{lengthComputable:p,loaded:g,total:f});for(let E=0,b=u.length;E<b;E++){let M=u[E];M.onProgress&&M.onProgress(y)}A.enqueue(_),x()}},v=>{A.error(v)})}}});return new Response(m)}else throw new bu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return l.arrayBuffer().then(p=>f.decode(p))}}}).then(l=>{pi.add(`file:${e}`,l);let u=Bi[e];delete Bi[e];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{let u=Bi[e];if(u===void 0)throw this.manager.itemError(e),l;delete Bi[e];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},wr=new WeakMap,Vc=class extends Kn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=pi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=wr.get(a);d===void 0&&(d=[],wr.set(a,d)),d.push({onLoad:t,onError:s})}return a}let o=Pr("img");function c(){u(),t&&t(this);let d=wr.get(this)||[];for(let h=0;h<d.length;h++){let f=d[h];f.onLoad&&f.onLoad(this)}wr.delete(this),r.manager.itemEnd(e)}function l(d){u(),s&&s(d),pi.remove(`image:${e}`);let h=wr.get(this)||[];for(let f=0;f<h.length;f++){let p=h[f];p.onError&&p.onError(d)}wr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),pi.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}},Ao=class extends Kn{constructor(e){super(e)}load(e,t,n,s){let r=this,a=new Dn,o=new ai(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(c){let l;try{l=r.parse(c)}catch(u){s!==void 0?s(u):lt(u);return}r._applyTexData(a,l),t&&t(a,l)},n,s),a}createDataTexture(e){let t=new Dn;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:wn,e.wrapT=t.wrapT!==void 0?t.wrapT:wn,e.magFilter=t.magFilter!==void 0?t.magFilter:vt,e.minFilter=t.minFilter!==void 0?t.minFilter:vt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=Ht),t.mipmapCount===1&&(e.minFilter=vt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},pn=class extends Kn{constructor(e){super(e)}load(e,t,n,s){let r=new nn,a=new Vc(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Xr=class extends Ft{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},lu=new Re,pf=new T,Af=new T,Jr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=ot,this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jn,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;pf.setFromMatrixPosition(e.matrixWorld),t.position.copy(pf),Af.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Af),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){lu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(lu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Fr||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(lu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},pc=new T,Ac=new Qt,fi=new T,Qs=class extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(pc,Ac,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pc,Ac,fi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(pc,Ac,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pc,Ac,fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ns=new T,mf=new me,gf=new me,rn=class extends Qs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Fs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ka*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fs*2*Math.atan(Math.tan(ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,t){return this.getViewBounds(e,mf,gf),t.subVectors(gf,mf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ka*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},vu=class extends Jr{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Fs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},zs=class extends Xr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new vu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},yu=class extends Jr{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0}},qn=class extends Xr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new yu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Vs=class extends Qs{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Mu=class extends Jr{constructor(){super(new Vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Hs=class extends Xr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Mu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Gi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},uu=new WeakMap,mo=class extends Kn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&tt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&tt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=pi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{uu.has(a)===!0?(s&&s(uu.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return pi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),uu.set(c,l),pi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});pi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Cr=-90,Tr=1,fs=class extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new rn(Cr,Tr,e,t);s.layers=this.layers,this.add(s);let r=new rn(Cr,Tr,e,t);r.layers=this.layers,this.add(r);let a=new rn(Cr,Tr,e,t);a.layers=this.layers,this.add(a);let o=new rn(Cr,Tr,e,t);o.layers=this.layers,this.add(o);let c=new rn(Cr,Tr,e,t);c.layers=this.layers,this.add(c);let l=new rn(Cr,Tr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=g,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Hc=class extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},th="\\[\\]\\.:\\/",Ax=new RegExp("["+th+"]","g"),nh="[^"+th+"]",mx="[^"+th.replace("\\.","")+"]",gx=/((?:WC+[\/:])*)/.source.replace("WC",nh),xx=/(WCOD+)?/.source.replace("WCOD",mx),_x=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nh),bx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nh),vx=new RegExp("^"+gx+xx+_x+bx+"$"),yx=["material","materials","bones","map"],Eu=class{constructor(e,t,n){let s=n||Bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Bt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ax,"")}static parseTrackName(e){let t=vx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);yx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){tt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){lt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){lt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){lt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){lt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){lt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;lt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bt.Composite=Eu;Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];PE=new Float32Array(1),xf=new Re,ps=class{constructor(e,t,n=0,s=1/0){this.ray=new as(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ur,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):lt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return xf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xf),this}intersectObject(e,t=!0,n=[]){return Su(e,this,n,t),n.sort(_f),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Su(e[s],this,n,t);return n.sort(_f),n}};wu=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187")});function Dp(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Sx(i){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,d=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let u=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,u);else{d.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<d.length;f++){let p=d[h],g=d[f];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++h,d[h]=g)}d.length=h+1;for(let f=0,p=d.length;f<p;f++){let g=d[f];i.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}function av(i,e,t,n,s,r){let a=new Oe(0),o=s===!0?0:1,c,l,u=null,d=0,h=null;function f(x){let v=x.isScene===!0?x.background:null;if(v&&v.isTexture){let _=x.backgroundBlurriness>0;v=e.get(v,_)}return v}function p(x){let v=!1,_=f(x);_===null?m(a,o):_&&_.isColor&&(m(_,1),v=!0);let y=i.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||v)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(x,v){let _=f(v);_&&_.isCubeTexture?(l===void 0&&(l=new Le(new Ot(1,1,1),new kt({name:"BackgroundCubeMaterial",uniforms:nr(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,E,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(rv.makeRotationFromEuler(v.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Fp),l.material.toneMapped=xt.getTransfer(_.colorSpace)!==Dt,(u!==_||d!==_.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,h=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Le(new Hn(2,2),new kt({name:"BackgroundMaterial",uniforms:nr(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=xt.getTransfer(_.colorSpace)!==Dt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,h=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,v){x.getRGB(Al,eh(i)),t.buffers.color.setClear(Al.r,Al.g,Al.b,v,r)}function A(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),o=v,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,m(a,o)},render:p,addToRenderList:g,dispose:A}}function ov(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(C,B,D,R,k){let F=!1,P=d(C,R,D,B);r!==P&&(r=P,l(r.object)),F=f(C,R,D,k),F&&p(C,R,D,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,_(C,B,D,R),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return i.createVertexArray()}function l(C){return i.bindVertexArray(C)}function u(C){return i.deleteVertexArray(C)}function d(C,B,D,R){let k=R.wireframe===!0,F=n[B.id];F===void 0&&(F={},n[B.id]=F);let P=C.isInstancedMesh===!0?C.id:0,H=F[P];H===void 0&&(H={},F[P]=H);let U=H[D.id];U===void 0&&(U={},H[D.id]=U);let L=U[k];return L===void 0&&(L=h(c()),U[k]=L),L}function h(C){let B=[],D=[],R=[];for(let k=0;k<t;k++)B[k]=0,D[k]=0,R[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:D,attributeDivisors:R,object:C,attributes:{},index:null}}function f(C,B,D,R){let k=r.attributes,F=B.attributes,P=0,H=D.getAttributes();for(let U in H)if(H[U].location>=0){let O=k[U],V=F[U];if(V===void 0&&(U==="instanceMatrix"&&C.instanceMatrix&&(V=C.instanceMatrix),U==="instanceColor"&&C.instanceColor&&(V=C.instanceColor)),O===void 0||O.attribute!==V||V&&O.data!==V.data)return!0;P++}return r.attributesNum!==P||r.index!==R}function p(C,B,D,R){let k={},F=B.attributes,P=0,H=D.getAttributes();for(let U in H)if(H[U].location>=0){let O=F[U];O===void 0&&(U==="instanceMatrix"&&C.instanceMatrix&&(O=C.instanceMatrix),U==="instanceColor"&&C.instanceColor&&(O=C.instanceColor));let V={};V.attribute=O,O&&O.data&&(V.data=O.data),k[U]=V,P++}r.attributes=k,r.attributesNum=P,r.index=R}function g(){let C=r.newAttributes;for(let B=0,D=C.length;B<D;B++)C[B]=0}function m(C){A(C,0)}function A(C,B){let D=r.newAttributes,R=r.enabledAttributes,k=r.attributeDivisors;D[C]=1,R[C]===0&&(i.enableVertexAttribArray(C),R[C]=1),k[C]!==B&&(i.vertexAttribDivisor(C,B),k[C]=B)}function x(){let C=r.newAttributes,B=r.enabledAttributes;for(let D=0,R=B.length;D<R;D++)B[D]!==C[D]&&(i.disableVertexAttribArray(D),B[D]=0)}function v(C,B,D,R,k,F,P){P===!0?i.vertexAttribIPointer(C,B,D,k,F):i.vertexAttribPointer(C,B,D,R,k,F)}function _(C,B,D,R){g();let k=R.attributes,F=D.getAttributes(),P=B.defaultAttributeValues;for(let H in F){let U=F[H];if(U.location>=0){let L=k[H];if(L===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(L=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(L=C.instanceColor)),L!==void 0){let O=L.normalized,V=L.itemSize,j=e.get(L);if(j===void 0)continue;let Q=j.buffer,q=j.type,Z=j.bytesPerElement,ue=q===i.INT||q===i.UNSIGNED_INT||L.gpuType===Kc;if(L.isInterleavedBufferAttribute){let de=L.data,$=de.isInterleavedBuffer===!0?de.stride:de.itemSize,ge=L.offset;if(de.isInstancedInterleavedBuffer||de.isInstancedBufferAttribute){for(let fe=0;fe<U.locationSize;fe++)A(U.location+fe,de.meshPerAttribute);C.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let fe=0;fe<U.locationSize;fe++)m(U.location+fe);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let fe=0;fe<U.locationSize;fe++)v(U.location+fe,V/U.locationSize,q,O,$*Z,(ge+V/U.locationSize*fe)*Z,ue)}else{if(L.isInstancedBufferAttribute){for(let de=0;de<U.locationSize;de++)A(U.location+de,L.meshPerAttribute);C.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let de=0;de<U.locationSize;de++)m(U.location+de);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let de=0;de<U.locationSize;de++)v(U.location+de,V/U.locationSize,q,O,V*Z,V/U.locationSize*de*Z,ue)}}else if(P!==void 0){let O=P[H];if(O!==void 0)switch(O.length){case 2:i.vertexAttrib2fv(U.location,O);break;case 3:i.vertexAttrib3fv(U.location,O);break;case 4:i.vertexAttrib4fv(U.location,O);break;default:i.vertexAttrib1fv(U.location,O)}}}}x()}function y(){I();for(let C in n){let B=n[C];for(let D in B){let R=B[D];for(let k in R){let F=R[k];for(let P in F)u(F[P].object),delete F[P];delete R[k]}}delete n[C]}}function E(C){if(n[C.id]===void 0)return;let B=n[C.id];for(let D in B){let R=B[D];for(let k in R){let F=R[k];for(let P in F)u(F[P].object),delete F[P];delete R[k]}}delete n[C.id]}function b(C){for(let B in n){let D=n[B];for(let R in D){let k=D[R];if(k[C.id]===void 0)continue;let F=k[C.id];for(let P in F)u(F[P].object),delete F[P];delete k[C.id]}}}function M(C){for(let B in n){let D=n[B],R=C.isInstancedMesh===!0?C.id:0,k=D[R];if(k!==void 0){for(let F in k){let P=k[F];for(let H in P)u(P[H].object),delete P[H];delete k[F]}delete D[R],Object.keys(D).length===0&&delete n[B]}}}function I(){S(),a=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:S,dispose:y,releaseStatesOfGeometry:E,releaseStatesOfObject:M,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:m,disableUnusedAttributes:x}}function cv(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let f=0;f<u;f++)h+=l[f];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function lv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(b){return!(b!==jt&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){let M=b===wt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==ot&&b!==Yt&&!M&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(tt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&tt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&tt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),A=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:m,maxAttributes:A,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:_,maxSamples:y,samples:E}}function uv(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Sn,o=new rt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let p=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,A=i.get(d);if(!s||p===null||p.length===0||r&&!m)r?u(null):l();else{let x=r?0:n,v=x*4,_=A.clippingState||null;c.value=_,_=u(p,h,v,f);for(let y=0;y!==v;++y)_[y]=t[y];A.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,p){let g=d!==null?d.length:0,m=null;if(g!==0){if(m=c.value,p!==!0||m===null){let A=f+g*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<A)&&(m=new Float32Array(A));for(let v=0,_=f;v!==g;++v,_+=4)a.copy(d[v]).applyMatrix4(x,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function dp(i,e,t){return new ir(i,{minFilter:Ht,generateMipmaps:e,type:wt,colorSpace:on,depthBuffer:t})}function Mo(i,e,t){return new kt({name:i,uniforms:e,vertexShader:At.cube_vert,fragmentShader:t,side:Zt,blending:Qi,depthTest:!1,depthWrite:!1})}function mv(){return Mo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Pp}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function gv(){return Mo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Lp}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function xv(){return Mo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${dv}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function fp(){return Mo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function pp(){return Mo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function _v(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===$r||f===Wc)if(e.has(h)){let p=e.get(h).texture;return o(p,h.mapping)}else{let p=h.image;if(p&&p.height>0){let g=new ir(p.height);return g.fromEquirectangularTexture(i,h),e.set(h,g),h.addEventListener("dispose",l),o(g.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let f=h.mapping,p=f===$r||f===Wc,g=f===As||f===Zr;if(p||g){let m=t.get(h),A=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==A)return n===null&&(n=new Aa(i)),m=p?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let x=h.image;return p&&x&&x.height>0||g&&x&&c(x)?(n===null&&(n=new Aa(i)),m=p?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,f){return f===$r?h.mapping=As:f===Wc&&(h.mapping=Zr),h}function c(h){let f=0,p=6;for(let g=0;g<p;g++)h[g]!==void 0&&f++;return f===p}function l(h){let f=h.target;f.removeEventListener("dispose",l);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function bv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Rs("WebGLRenderer: "+n+" extension not supported."),s}}}function vv(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(p=>delete s[p]);function o(p){c(p.target)}function c(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",o),delete s[p.id],a.unregister(p);let g=r.get(p);g&&(e.remove(g),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function l(p,g){return s[g.id]!==void 0||(g.addEventListener("dispose",o),s[g.id]=new WeakRef(g),a.register(g,g.id,g),t.memory.geometries++),g}function u(p){let g=p.attributes;for(let m in g)e.update(g[m],i.ARRAY_BUFFER)}function d(p){let g=p.index,m=p.attributes.position,A=0;if(m===void 0)return;let x=g!==null?g.array.length:m.array.length/3-1,v=m.count>=65535?qa:Ka,_=new v(Math.ceil(x/3)*6,1),y=_.array;if(g!==null){let b=g.array;A=g.version;for(let M=0,I=0;M<x;M+=3){let S=b[M+0],C=b[M+1],B=b[M+2];y[I++]=S,y[I++]=C,y[I++]=C,y[I++]=B,y[I++]=B,y[I++]=S}}else{A=m.version;for(let b=0,M=0;b<x;b+=3){let I=b+0,S=b+1,C=b+2;y[M++]=I,y[M++]=S,y[M++]=S,y[M++]=C,y[M++]=C,y[M++]=I}}_.version=A;let E=r.get(p);E&&e.remove(E),r.set(p,_)}function h(p){let g=r.get(p);if(g){let m=p.index;m!==null&&g.version<m.version&&d(p)}else d(p);return r.get(p)}function f(){for(let p in s){let g=s[p].deref();g!==void 0&&c(g)}}return{get:l,update:u,getWireframeAttribute:h,dispose:f}}function yv(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,h){i.drawElements(n,h,r,d*a),t.update(h,n,1)}function l(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,d*a,f),t.update(h,n,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let g=0;for(let m=0;m<f;m++)g+=h[m];t.update(g,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Mv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:lt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ev(i,e,t){let n=new WeakMap,s=new mt;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==d){let I=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",I)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],v=0;f===!0&&(v=1),p===!0&&(v=2),g===!0&&(v=3);let _=o.attributes.position.count*v,y=1;_>e.maxTextureSize&&(y=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let E=new Float32Array(_*y*4*d),b=new Ha(E,_,y,d);b.type=Yt,b.needsUpdate=!0;let M=v*4;for(let S=0;S<d;S++){let C=m[S],B=A[S],D=x[S],R=_*y*4*S;for(let k=0;k<C.count;k++){let F=k*M;f===!0&&(s.fromBufferAttribute(C,k),E[R+F+0]=s.x,E[R+F+1]=s.y,E[R+F+2]=s.z,E[R+F+3]=0),p===!0&&(s.fromBufferAttribute(B,k),E[R+F+4]=s.x,E[R+F+5]=s.y,E[R+F+6]=s.z,E[R+F+7]=0),g===!0&&(s.fromBufferAttribute(D,k),E[R+F+8]=s.x,E[R+F+9]=s.y,E[R+F+10]=s.z,E[R+F+11]=D.itemSize===4?s.w:1)}}h={count:d,texture:b,size:new me(_,y)},n.set(o,h),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let g=0;g<l.length;g++)f+=l[g];let p=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",p),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Sv(i,e,t,n,s){let r=new WeakMap;function a(l){let u=s.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}function Cv(i,e,t,n,s,r){let a=new qt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,u=new ut;u.setAttribute("position",new ze([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new ze([0,2,0,0,2,0],2));let d=new Pc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Le(u,d),f=new Vs(-1,1,1,-1,0,1),p=null,g=null,m=!1,A,x=null,v=[],_=!1;this.setSize=function(y,E){a.setSize(y,E),o!==null&&o.setSize(y,E),c!==null&&c.setSize(y,E);for(let b=0;b<v.length;b++){let M=v[b];M.setSize&&M.setSize(y,E)}},this.setEffects=function(y){v=y,_=v.length>0&&v[0].isRenderPass===!0;let E=a.width,b=a.height;v.length>0&&o===null&&(o=new qt(E,b,{type:wt,depthBuffer:!1,stencilBuffer:!1}),c=new qt(E,b,{type:wt,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&v.some(I=>I.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&l===null&&(l=new zn(E,b),r===!0&&(l.format=Vi,l.type=Xs)),a.dispose(),a.depthTexture=M?l:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let I=0;I<v.length;I++){let S=v[I];S.setSize&&S.setSize(E,b),M&&S.needsDepthTexture===!0&&S.setDepthTexture&&S.setDepthTexture(l)}},this.begin=function(y,E){if(m||y.toneMapping===bi&&v.length===0)return!1;if(x=E,E!==null){let b=E.width,M=E.height;(a.width!==b||a.height!==M)&&this.setSize(b,M)}return _===!1&&y.setRenderTarget(a),A=y.toneMapping,y.toneMapping=bi,!0},this.hasRenderPass=function(){return _},this.end=function(y,E){y.toneMapping=A,m=!0;let b=a,M=o;for(let I=0;I<v.length;I++){let S=v[I];S.enabled!==!1&&(S.render(y,M,b,E),S.needsSwap!==!1&&(b=M,M=M===o?c:o))}if(p!==y.outputColorSpace||g!==y.toneMapping){p=y.outputColorSpace,g=y.toneMapping,d.defines={},xt.getTransfer(p)===Dt&&(d.defines.SRGB_TRANSFER="");let I=wv[g];I&&(d.defines[I]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(x),y.render(h,f),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}function ma(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Ap[s];if(r===void 0&&(r=new Float32Array(s),Ap[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function cn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ln(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function xl(i,e){let t=mp[e];t===void 0&&(t=new Int32Array(e),mp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Tv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Iv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2fv(this.addr,e),ln(t,e)}}function Rv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;i.uniform3fv(this.addr,e),ln(t,e)}}function Bv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4fv(this.addr,e),ln(t,e)}}function Dv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(cn(t,n))return;_p.set(n),i.uniformMatrix2fv(this.addr,!1,_p),ln(t,n)}}function Fv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(cn(t,n))return;xp.set(n),i.uniformMatrix3fv(this.addr,!1,xp),ln(t,n)}}function Pv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(cn(t,n))return;gp.set(n),i.uniformMatrix4fv(this.addr,!1,gp),ln(t,n)}}function Lv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Nv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2iv(this.addr,e),ln(t,e)}}function Uv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;i.uniform3iv(this.addr,e),ln(t,e)}}function Ov(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4iv(this.addr,e),ln(t,e)}}function kv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Gv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2uiv(this.addr,e),ln(t,e)}}function Qv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;i.uniform3uiv(this.addr,e),ln(t,e)}}function zv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4uiv(this.addr,e),ln(t,e)}}function _l(i){return i.version===0&&(i.compareFunction=Ku,i.needsUpdate=!0),i}function Vv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=_l(Up):r=Np,t.setTexture2D(e||r,s)}function Hv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Gp,s)}function Wv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=_l(Op):r=Qp,t.setTextureCube(e||r,s)}function Kv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||kp,s)}function qv(i){switch(i){case 5126:return Tv;case 35664:return Iv;case 35665:return Rv;case 35666:return Bv;case 35674:return Dv;case 35675:return Fv;case 35676:return Pv;case 5124:case 35670:return Lv;case 35667:case 35671:return Nv;case 35668:case 35672:return Uv;case 35669:case 35673:return Ov;case 5125:return kv;case 36294:return Gv;case 36295:return Qv;case 36296:return zv;case 35678:case 36198:case 36298:case 36306:case 35682:return Vv;case 35679:case 36299:case 36307:return Hv;case 35680:case 36300:case 36308:case 36293:return Wv;case 36289:case 36303:case 36311:case 36292:return Kv}}function Xv(i,e){i.uniform1fv(this.addr,e)}function Jv(i,e){let t=ma(e,this.size,2);i.uniform2fv(this.addr,t)}function Yv(i,e){let t=ma(e,this.size,3);i.uniform3fv(this.addr,t)}function jv(i,e){let t=ma(e,this.size,4);i.uniform4fv(this.addr,t)}function Zv(i,e){let t=ma(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function $v(i,e){let t=ma(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ey(i,e){let t=ma(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ty(i,e){i.uniform1iv(this.addr,e)}function ny(i,e){i.uniform2iv(this.addr,e)}function iy(i,e){i.uniform3iv(this.addr,e)}function sy(i,e){i.uniform4iv(this.addr,e)}function ry(i,e){i.uniform1uiv(this.addr,e)}function ay(i,e){i.uniform2uiv(this.addr,e)}function oy(i,e){i.uniform3uiv(this.addr,e)}function cy(i,e){i.uniform4uiv(this.addr,e)}function ly(i,e,t){let n=this.cache,s=e.length,r=xl(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=_l(Up):a=Np;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function uy(i,e,t){let n=this.cache,s=e.length,r=xl(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Gp,r[a])}function hy(i,e,t){let n=this.cache,s=e.length,r=xl(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=_l(Op):a=Qp;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function dy(i,e,t){let n=this.cache,s=e.length,r=xl(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||kp,r[a])}function fy(i){switch(i){case 5126:return Xv;case 35664:return Jv;case 35665:return Yv;case 35666:return jv;case 35674:return Zv;case 35675:return $v;case 35676:return ey;case 5124:case 35670:return ty;case 35667:case 35671:return ny;case 35668:case 35672:return iy;case 35669:case 35673:return sy;case 5125:return ry;case 36294:return ay;case 36295:return oy;case 36296:return cy;case 35678:case 36198:case 36298:case 36306:case 35682:return ly;case 35679:case 36299:case 36307:return uy;case 35680:case 36300:case 36308:case 36293:return hy;case 36289:case 36303:case 36311:case 36292:return dy}}function bp(i,e){i.seq.push(e),i.map[e.id]=e}function py(i,e,t){let n=i.name,s=n.length;for(rh.lastIndex=0;;){let r=rh.exec(n),a=rh.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){bp(t,l===void 0?new oh(o,i,e):new ch(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new lh(o),bp(t,d)),t=d}}}function vp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function gy(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function xy(i){xt._getMatrix(yp,xt.workingColorSpace,i);let e=`mat3( ${yp.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(i)){case Dr:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return tt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Mp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+gy(i.getShaderSource(e),o)}else return r}function _y(i,e){let t=xy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function vy(i,e){let t=by[e];return t===void 0?(tt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function yy(){xt.getLuminanceCoefficients(ml);let i=ml.x.toFixed(4),e=ml.y.toFixed(4),t=ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function My(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yo).join(`
`)}function Ey(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Sy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function yo(i){return i!==""}function Ep(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Sp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function uh(i){return i.replace(wy,Cy)}function Cy(i,e){let t=At[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return uh(t)}function wp(i){return i.replace(Ty,Iy)}function Iy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function By(i){return Ry[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function Fy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Dy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}function Ly(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Py[i.combine]||"ENVMAP_BLENDING_NONE"}function Ny(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=By(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Fy(t),d=Ly(t),h=My(t),f=Ey(r),p=s.createProgram(),g,m,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(yo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(yo).join(`
`),m.length>0&&(m+=`
`)):(g=[Cp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),m=[Cp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?At.tonemapping_pars_fragment:"",t.toneMapping!==bi?vy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",At.colorspace_pars_fragment,_y("linearToOutputTexel",t.outputColorSpace),yy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yo).join(`
`)),a=uh(a),a=Ep(a,t),a=Sp(a,t),o=uh(o),o=Ep(o,t),o=Sp(o,t),a=wp(a),o=wp(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=A+g+a,v=A+m+o,_=vp(s,s.VERTEX_SHADER,x),y=vp(s,s.FRAGMENT_SHADER,v);s.attachShader(p,_),s.attachShader(p,y),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function E(S){if(i.debug.checkShaderErrors){let C=s.getProgramInfoLog(p)||"",B=s.getShaderInfoLog(_)||"",D=s.getShaderInfoLog(y)||"",R=C.trim(),k=B.trim(),F=D.trim(),P=!0,H=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(P=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,_,y);else{let U=Mp(s,_,"vertex"),L=Mp(s,y,"fragment");lt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+R+`
`+U+`
`+L)}else R!==""?tt("WebGLProgram: Program Info Log:",R):(k===""||F==="")&&(H=!1);H&&(S.diagnostics={runnable:P,programLog:R,vertexShader:{log:k,prefix:g},fragmentShader:{log:F,prefix:m}})}s.deleteShader(_),s.deleteShader(y),b=new pa(s,p),M=Sy(s,p)}let b;this.getUniforms=function(){return b===void 0&&E(this),b};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(p,Ay)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=my++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=_,this.fragmentShader=y,this}function Oy(i){return i===Un||i===$s||i===er}function ky(i,e,t,n,s,r){let a=new Ur,o=new hh,c=new Set,l=[],u=new Map,d=n.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,M,I,S,C,B){let D=S.fog,R=C.geometry,k=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?S.environment:null,F=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,P=e.get(b.envMap||k,F),H=h[b.type],U=n.precision;b.precision!==null&&(U=n.getMaxPrecision(b.precision),U!==b.precision&&tt("WebGLProgram.getParameters:",b.precision,"not supported, using",U,"instead."));let L=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,O=L!==void 0?L.length:0,V=0;R.morphAttributes.position!==void 0&&(V=1),R.morphAttributes.normal!==void 0&&(V=2),R.morphAttributes.color!==void 0&&(V=3);let j,Q,q,Z;if(H){let De=yi[H];j=De.vertexShader,Q=De.fragmentShader}else{j=b.vertexShader,Q=b.fragmentShader;let De=o.getVertexShaderStage(b),ht=o.getFragmentShaderStage(b);o.update(b,De,ht),q=De.id,Z=ht.id}let ue=i.getRenderTarget(),de=i.state.buffers.depth.getReversed(),$=C.isInstancedMesh===!0,ge=C.isBatchedMesh===!0,fe=!!b.map,Be=!!b.matcap,we=!!P,ee=we&&P.isPMREMTexture===!0,_e=!!b.aoMap,be=!!b.lightMap,ve=!!b.bumpMap&&b.wireframe===!1,Ee=!!b.normalMap,Ke=!!b.displacementMap,Fe=!!b.emissiveMap,nt=!!b.metalnessMap,qe=!!b.roughnessMap,$e=b.anisotropy>0,z=b.clearcoat>0,Xe=b.diffuseRoughness>0,Ce=b.dispersion>0,Pe=b.retroreflectivity>0,ne=b.iridescence>0,ke=b.sheen>0,Ge=b.transmission>0,Qe=$e&&!!b.anisotropyMap,G=z&&!!b.clearcoatMap,w=z&&!!b.clearcoatNormalMap,K=z&&!!b.clearcoatRoughnessMap,le=Xe&&!!b.diffuseRoughnessMap,te=ne&&!!b.iridescenceMap,Ae=ne&&!!b.iridescenceThicknessMap,xe=ke&&!!b.sheenColorMap,ie=ke&&!!b.sheenRoughnessMap,oe=!!b.specularMap,Me=!!b.specularColorMap,W=!!b.specularIntensityMap,ce=Ge&&!!b.transmissionMap,se=Ge&&!!b.thicknessMap,Ie=!!b.gradientMap,ye=!!b.alphaMap,Se=b.alphaTest>0,We=!!b.alphaHash,X=!!b.extensions,Y=bi;b.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Y=i.toneMapping);let pe=ee?P.isCompressedCubeTexture?P.image[0].mipmaps:P.mipmaps:null,Te={shaderID:H,shaderType:b.type,shaderName:b.name,vertexShader:j,fragmentShader:Q,defines:b.defines,customVertexShaderID:q,customFragmentShaderID:Z,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:U,batching:ge,batchingColor:ge&&C._colorsTexture!==null,instancing:$,instancingColor:$&&C.instanceColor!==null,instancingMorph:$&&C.morphTexture!==null,outputColorSpace:ue===null?i.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:xt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:fe,matcap:Be,envMap:we,envMapMode:we&&P.mapping,envMapPMREM:ee,envMapMaxLod:ee?pe.length-1:null,envMapSize:ee?pe[0].width:null,aoMap:_e,lightMap:be,bumpMap:ve,normalMap:Ee,displacementMap:Ke,emissiveMap:Fe,normalMapObjectSpace:Ee&&b.normalMapType===Kf,normalMapTangentSpace:Ee&&b.normalMapType===dl,packedNormalMap:Ee&&b.normalMapType===dl&&Oy(b.normalMap.format),metalnessMap:nt,roughnessMap:qe,anisotropy:$e,anisotropyMap:Qe,clearcoat:z,clearcoatMap:G,clearcoatNormalMap:w,clearcoatRoughnessMap:K,diffuseRoughness:Xe,diffuseRoughnessMap:le,dispersion:Ce,retroreflection:Pe,iridescence:ne,iridescenceMap:te,iridescenceThicknessMap:Ae,sheen:ke,sheenColorMap:xe,sheenRoughnessMap:ie,specularMap:oe,specularColorMap:Me,specularIntensityMap:W,transmission:Ge,transmissionMap:ce,thicknessMap:se,gradientMap:Ie,opaque:b.transparent===!1&&b.blending===jr&&b.alphaToCoverage===!1,alphaMap:ye,alphaTest:Se,alphaHash:We,combine:b.combine,mapUv:fe&&f(b.map.channel),aoMapUv:_e&&f(b.aoMap.channel),lightMapUv:be&&f(b.lightMap.channel),bumpMapUv:ve&&f(b.bumpMap.channel),normalMapUv:Ee&&f(b.normalMap.channel),displacementMapUv:Ke&&f(b.displacementMap.channel),emissiveMapUv:Fe&&f(b.emissiveMap.channel),metalnessMapUv:nt&&f(b.metalnessMap.channel),roughnessMapUv:qe&&f(b.roughnessMap.channel),anisotropyMapUv:Qe&&f(b.anisotropyMap.channel),clearcoatMapUv:G&&f(b.clearcoatMap.channel),clearcoatNormalMapUv:w&&f(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&f(b.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:le&&f(b.diffuseRoughnessMap.channel),iridescenceMapUv:te&&f(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&f(b.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&f(b.sheenColorMap.channel),sheenRoughnessMapUv:ie&&f(b.sheenRoughnessMap.channel),specularMapUv:oe&&f(b.specularMap.channel),specularColorMapUv:Me&&f(b.specularColorMap.channel),specularIntensityMapUv:W&&f(b.specularIntensityMap.channel),transmissionMapUv:ce&&f(b.transmissionMap.channel),thicknessMapUv:se&&f(b.thicknessMap.channel),alphaMapUv:ye&&f(b.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(Ee||$e),vertexNormals:!!R.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!R.attributes.uv&&(fe||ye),fog:!!D,useFog:b.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||R.attributes.normal===void 0&&Ee===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:de,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:V,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:B.filter(De=>De.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Y,decodeVideoTexture:fe&&b.map.isVideoTexture===!0&&xt.getTransfer(b.map.colorSpace)===Dt,decodeVideoTextureEmissive:Fe&&b.emissiveMap.isVideoTexture===!0&&xt.getTransfer(b.emissiveMap.colorSpace)===Dt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Lt,flipSided:b.side===Zt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:X&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(X&&b.extensions.multiDraw===!0||ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Te.vertexUv1s=c.has(1),Te.vertexUv2s=c.has(2),Te.vertexUv3s=c.has(3),c.clear(),Te}function g(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let I in b.defines)M.push(I),M.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(m(M,b),A(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function m(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapPMREM),b.push(M.envMapMaxLod),b.push(M.envMapSize),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.diffuseRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.numSunLights),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numSunLightShadows),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.numLightProbeGrids),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function A(b,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),b.push(a.mask)}function x(b){let M=h[b.type],I;if(M){let S=yi[M];I=pl.clone(S.uniforms)}else I=b.uniforms;return I}function v(b,M){let I=u.get(M);return I!==void 0?++I.usedTimes:(I=new Ny(i,M,b,s),l.push(I),u.set(M,I)),I}function _(b){if(--b.usedTimes===0){let M=l.indexOf(b);l[M]=l[l.length-1],l.pop(),u.delete(b.cacheKey),b.destroy()}}function y(b){o.remove(b)}function E(){o.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:x,acquireProgram:v,releaseProgram:_,releaseShaderCache:y,programs:l,dispose:E}}function Gy(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Qy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Tp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ip(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,p,g,m,A){let x=i[e];return x===void 0?(x={id:h.id,object:h,geometry:f,material:p,materialVariant:a(h),groupOrder:g,renderOrder:h.renderOrder,z:m,group:A},i[e]=x):(x.id=h.id,x.object=h,x.geometry=f,x.material=p,x.materialVariant=a(h),x.groupOrder=g,x.renderOrder=h.renderOrder,x.z=m,x.group=A),e++,x}function c(h,f,p,g,m,A,x){x.reversedDepth===!0&&(m=-m);let v=o(h,f,p,g,m,A);p.transmission>0?n.push(v):p.transparent===!0?s.push(v):t.push(v)}function l(h,f,p,g,m,A){let x=o(h,f,p,g,m,A);p.transmission>0?n.unshift(x):p.transparent===!0?s.unshift(x):t.unshift(x)}function u(h,f){t.length>1&&t.sort(h||Qy),n.length>1&&n.sort(f||Tp),s.length>1&&s.sort(f||Tp)}function d(){for(let h=e,f=i.length;h<f;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function zy(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Ip,i.set(n,[a])):s>=r.length?(a=new Ip,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Vy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new T,color:new Oe};break;case"SpotLight":t={position:new T,direction:new T,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new T,halfWidth:new T,halfHeight:new T};break}return i[e.id]=t,t}}}function Hy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function Ky(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function qy(i){let e=new Vy,t=Hy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new T);let s=new T,r=new Re,a=new Re;function o(l){let u=0,d=0,h=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let f=0,p=0,g=0,m=0,A=0,x=0,v=0,_=0,y=0,E=0,b=0,M=0,I=0,S=0;l.sort(Ky);for(let B=0,D=l.length;B<D;B++){let R=l[B],k=R.color,F=R.intensity,P=R.distance,H=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Un?H=R.shadow.map.texture:H=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=k.r*F,d+=k.g*F,h+=k.b*F;else if(R.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(R.sh.coefficients[U],F);S++}else if(R.isSunLight){let U=e.get(R);if(U.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let L=R.shadow,O=t.get(R);O.shadowIntensity=L.intensity,O.shadowBias=L.bias,O.shadowNormalBias=L.normalBias,O.shadowRadius=L.radius,O.shadowMapSize.copy(L.mapSize).multiply(L.getFrameExtents()),n.sunShadow[p]=O,n.sunShadowMap[p]=H;let V=L.getViewportCount();for(let j=0;j<V;j++)n.sunShadowMatrix[g+j]=L.getMatrix(j),n.sunShadowCascade[g+j]=L._cascadeData[j];g+=V,p++}n.sun[f]=U,f++}else if(R.isDirectionalLight){let U=e.get(R);if(U.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let L=R.shadow,O=t.get(R);O.shadowIntensity=L.intensity,O.shadowBias=L.bias,O.shadowNormalBias=L.normalBias,O.shadowRadius=L.radius,O.shadowMapSize=L.mapSize,n.directionalShadow[m]=O,n.directionalShadowMap[m]=H,n.directionalShadowMatrix[m]=R.shadow.matrix,y++}n.directional[m]=U,m++}else if(R.isSpotLight){let U=e.get(R);U.position.setFromMatrixPosition(R.matrixWorld),U.color.copy(k).multiplyScalar(F),U.distance=P,U.coneCos=Math.cos(R.angle),U.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),U.decay=R.decay,n.spot[x]=U;let L=R.shadow;if(R.map&&(n.spotLightMap[M]=R.map,M++,L.updateMatrices(R),R.castShadow&&I++),n.spotLightMatrix[x]=L.matrix,R.castShadow){let O=t.get(R);O.shadowIntensity=L.intensity,O.shadowBias=L.bias,O.shadowNormalBias=L.normalBias,O.shadowRadius=L.radius,O.shadowMapSize=L.mapSize,n.spotShadow[x]=O,n.spotShadowMap[x]=H,b++}x++}else if(R.isRectAreaLight){let U=e.get(R);U.color.copy(k).multiplyScalar(F),U.halfWidth.set(R.width*.5,0,0),U.halfHeight.set(0,R.height*.5,0),n.rectArea[v]=U,v++}else if(R.isPointLight){let U=e.get(R);if(U.color.copy(R.color).multiplyScalar(R.intensity),U.distance=R.distance,U.decay=R.decay,R.castShadow){let L=R.shadow,O=t.get(R);O.shadowIntensity=L.intensity,O.shadowBias=L.bias,O.shadowNormalBias=L.normalBias,O.shadowRadius=L.radius,O.shadowMapSize=L.mapSize,O.shadowCameraNear=L.camera.near,O.shadowCameraFar=L.camera.far,n.pointShadow[A]=O,n.pointShadowMap[A]=H,n.pointShadowMatrix[A]=R.shadow.matrix,E++}n.point[A]=U,A++}else if(R.isHemisphereLight){let U=e.get(R);U.skyColor.copy(R.color).multiplyScalar(F),U.groundColor.copy(R.groundColor).multiplyScalar(F),n.hemi[_]=U,_++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ve.LTC_FLOAT_1,n.rectAreaLTC2=Ve.LTC_FLOAT_2):(n.rectAreaLTC1=Ve.LTC_HALF_1,n.rectAreaLTC2=Ve.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let C=n.hash;(C.sunLength!==f||C.directionalLength!==m||C.pointLength!==A||C.spotLength!==x||C.rectAreaLength!==v||C.hemiLength!==_||C.numSunShadows!==p||C.numDirectionalShadows!==y||C.numPointShadows!==E||C.numSpotShadows!==b||C.numSpotMaps!==M||C.numLightProbes!==S)&&(n.sun.length=f,n.directional.length=m,n.spot.length=x,n.rectArea.length=v,n.point.length=A,n.hemi.length=_,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=g,n.sunShadowCascade.length=g,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=b,n.spotShadowMap.length=b,n.spotLightMatrix.length=b+M-I,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=S,C.sunLength=f,C.directionalLength=m,C.pointLength=A,C.spotLength=x,C.rectAreaLength=v,C.hemiLength=_,C.numSunShadows=p,C.numDirectionalShadows=y,C.numPointShadows=E,C.numSpotShadows=b,C.numSpotMaps=M,C.numLightProbes=S,n.version=Wy++)}function c(l,u){let d=0,h=0,f=0,p=0,g=0,m=0,A=u.matrixWorldInverse;for(let x=0,v=l.length;x<v;x++){let _=l[x];if(_.isSunLight){let y=n.sun[d];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(A),d++}else if(_.isDirectionalLight){let y=n.directional[h];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(A),h++}else if(_.isSpotLight){let y=n.spot[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(A),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(A),p++}else if(_.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(A),a.identity(),r.copy(_.matrixWorld),r.premultiply(A),a.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(A),f++}else if(_.isHemisphereLight){let y=n.hemi[m];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(A),m++}}}return{setup:o,setupView:c,state:n}}function Rp(i){let e=new qy(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):t.push(d)}function o(d){n.push(d)}function c(){e.setup(t),s.sort((d,h)=>d.priority-h.priority||d.id-h.id)}function l(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Xy(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Rp(i),e.set(s,[o])):r>=a.length?(o=new Rp(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function $y(i,e,t){let n=new jn,s=new me,r=new me,a=new mt,o=new Lc,c=new Nc,l={},u=t.maxTextureSize,d={[Nn]:Zt,[Zt]:Nn,[Lt]:Lt},h=new kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:Jy,fragmentShader:Yy}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let p=new ut;p.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Le(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ws;let A=this.type;this.render=function(E,b,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===yf&&(tt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ws);let I=i.getRenderTarget(),S=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Qi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let D=A!==this.type;D&&b.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(k=>k.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,k=E.length;R<k;R++){let F=E[R],P=F.shadow;if(P===void 0){tt("WebGLShadowMap:",F,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;s.copy(P.mapSize);let H=P.getFrameExtents();s.multiply(H),r.copy(P.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/H.x),s.x=r.x*H.x,P.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/H.y),s.y=r.y*H.y,P.mapSize.y=r.y));let U=i.state.buffers.depth.getReversed();if(P.camera._reversedDepth=U,P.map===null||D===!0){if(P.map!==null&&(P.map.depthTexture!==null&&(P.map.depthTexture.dispose(),P.map.depthTexture=null),P.map.dispose()),this.type===Yr){if(F.isPointLight){tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}P.map=new qt(s.x,s.y,{format:Un,type:wt,minFilter:vt,magFilter:vt,generateMipmaps:!1}),P.map.texture.name=F.name+".shadowMap",P.map.depthTexture=new zn(s.x,s.y,Yt),P.map.depthTexture.name=F.name+".shadowMapDepth",P.map.depthTexture.format=Pi,P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=Pt,P.map.depthTexture.magFilter=Pt}else F.isPointLight?(P.map=new ir(s.x),P.map.depthTexture=new no(s.x,Tn)):(P.map=new qt(s.x,s.y),P.map.depthTexture=new zn(s.x,s.y,Tn)),P.map.depthTexture.name=F.name+".shadowMap",P.map.depthTexture.format=Pi,this.type===Ws?(P.map.depthTexture.compareFunction=U?Wu:Hu,P.map.depthTexture.minFilter=vt,P.map.depthTexture.magFilter=vt):(P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=Pt,P.map.depthTexture.magFilter=Pt);P.camera.updateProjectionMatrix()}P.map.isWebGLCubeRenderTarget!==!0&&(P.map.width!==s.x||P.map.height!==s.y)&&P.map.setSize(s.x,s.y);let L=P.map.isWebGLCubeRenderTarget?6:P.getViewportCount();F.isPointLight!==!0&&P.updateMatrices(F,M);let O=(P.camera.layers.mask&4294967294)!==0?P.camera.layers:M.layers;for(let V=0;V<L;V++){let j=P.getCamera(V);if(F.isPointLight){let Q=P.camera,q=P.matrix,Z=F.distance||Q.far;Z!==Q.far&&(Q.far=Z,Q.updateProjectionMatrix()),vo.setFromMatrixPosition(F.matrixWorld),Q.position.copy(vo),ah.copy(Q.position),ah.add(jy[V]),Q.up.copy(Zy[V]),Q.lookAt(ah),Q.updateMatrixWorld(),q.makeTranslation(-vo.x,-vo.y,-vo.z),Bp.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),P._frustum.setFromProjectionMatrix(Bp,Q.coordinateSystem,Q.reversedDepth)}if(P.map.isWebGLCubeRenderTarget)i.setRenderTarget(P.map,V),i.clear();else{V===0&&(i.setRenderTarget(P.map),i.clear());let Q=P.getViewport(V);a.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),B.viewport(a)}n=P.getFrustum(V),_(b,M,j,F,O,this.type)}P.isPointLightShadow!==!0&&this.type===Yr&&x(P,M),P.needsUpdate=!1}A=this.type,m.needsUpdate=!1,i.setRenderTarget(I,S,C)};function x(E,b){let M=e.update(g);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new qt(s.x,s.y,{format:Un,type:wt}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(b,null,M,h,g,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(b,null,M,f,g,null)}function v(E,b,M,I){let S=null,C=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)S=C;else if(S=M.isPointLight===!0?c:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){let B=S.uuid,D=b.uuid,R=l[B];R===void 0&&(R={},l[B]=R);let k=R[D];k===void 0&&(k=S.clone(),R[D]=k,b.addEventListener("dispose",y)),S=k}if(S.visible=b.visible,S.wireframe=b.wireframe,I===Yr?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:d[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,M.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let B=i.properties.get(S);B.light=M}return S}function _(E,b,M,I,S,C){if(E.visible===!1)return;if(E.layers.test(S)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===Yr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);let R=e.update(E),k=E.material;if(Array.isArray(k)){let F=R.groups;for(let P=0,H=F.length;P<H;P++){let U=F[P],L=k[U.materialIndex];if(L&&L.visible){let O=v(E,L,I,C);E.onBeforeShadow(i,E,b,M,R,O,U),i.renderBufferDirect(M,null,R,O,E,U),E.onAfterShadow(i,E,b,M,R,O,U)}}}else if(k.visible){let F=v(E,k,I,C);E.onBeforeShadow(i,E,b,M,R,F,null),i.renderBufferDirect(M,null,R,F,E,null),E.onAfterShadow(i,E,b,M,R,F,null)}}let D=E.children;for(let R=0,k=D.length;R<k;R++)_(D[R],b,M,I,S,C)}function y(E){E.target.removeEventListener("dispose",y);for(let M in l){let I=l[M],S=E.target.uuid;S in I&&(I[S].dispose(),delete I[S])}}}function eM(i,e){function t(){let W=!1,ce=new mt,se=null,Ie=new mt(0,0,0,0);return{setMask:function(ye){se!==ye&&!W&&(i.colorMask(ye,ye,ye,ye),se=ye)},setLocked:function(ye){W=ye},setClear:function(ye,Se,We,X,Y){Y===!0&&(ye*=X,Se*=X,We*=X),ce.set(ye,Se,We,X),Ie.equals(ce)===!1&&(i.clearColor(ye,Se,We,X),Ie.copy(ce))},reset:function(){W=!1,se=null,Ie.set(-1,0,0,0)}}}function n(){let W=!1,ce=!1,se=null,Ie=null,ye=null;return{setReversed:function(Se){if(ce!==Se){let We=e.get("EXT_clip_control");Se?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),ce=Se;let X=ye;ye=null,this.setClear(X)}},getReversed:function(){return ce},setTest:function(Se){Se?de(i.DEPTH_TEST):$(i.DEPTH_TEST)},setMask:function(Se){se!==Se&&!W&&(i.depthMask(Se),se=Se)},setFunc:function(Se){if(ce&&(Se=np[Se]),Ie!==Se){switch(Se){case xc:i.depthFunc(i.NEVER);break;case _c:i.depthFunc(i.ALWAYS);break;case bc:i.depthFunc(i.LESS);break;case Rr:i.depthFunc(i.LEQUAL);break;case vc:i.depthFunc(i.EQUAL);break;case yc:i.depthFunc(i.GEQUAL);break;case Mc:i.depthFunc(i.GREATER);break;case Ec:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ie=Se}},setLocked:function(Se){W=Se},setClear:function(Se){ye!==Se&&(ye=Se,ce&&(Se=1-Se),i.clearDepth(Se))},reset:function(){W=!1,se=null,Ie=null,ye=null,ce=!1}}}function s(){let W=!1,ce=null,se=null,Ie=null,ye=null,Se=null,We=null,X=null,Y=null;return{setTest:function(pe){W||(pe?de(i.STENCIL_TEST):$(i.STENCIL_TEST))},setMask:function(pe){ce!==pe&&!W&&(i.stencilMask(pe),ce=pe)},setFunc:function(pe,Te,De){(se!==pe||Ie!==Te||ye!==De)&&(i.stencilFunc(pe,Te,De),se=pe,Ie=Te,ye=De)},setOp:function(pe,Te,De){(Se!==pe||We!==Te||X!==De)&&(i.stencilOp(pe,Te,De),Se=pe,We=Te,X=De)},setLocked:function(pe){W=pe},setClear:function(pe){Y!==pe&&(i.clearStencil(pe),Y=pe)},reset:function(){W=!1,ce=null,se=null,Ie=null,ye=null,Se=null,We=null,X=null,Y=null}}}let r=new t,a=new n,o=new s,c={},l=new WeakMap,u={},d={},h={},f=new WeakMap,p=[],g=null,m=!1,A=null,x=null,v=null,_=null,y=null,E=null,b=null,M=new Oe(0,0,0),I=0,S=!1,C=null,B=null,D=null,R=null,k=null,F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),P=!1,H=0,U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(U)[1]),P=H>=1):U.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),P=H>=2);let L=null,O={},V=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),Q=new mt().fromArray(V),q=new mt().fromArray(j);function Z(W,ce,se,Ie){let ye=new Uint8Array(4),Se=i.createTexture();i.bindTexture(W,Se),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let We=0;We<se;We++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,Ie,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(ce+We,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return Se}let ue={};ue[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),ue[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ue[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),de(i.DEPTH_TEST),a.setFunc(Rr),ve(!1),Ee(Cu),de(i.CULL_FACE),_e(Qi);function de(W){u[W]!==!0&&(i.enable(W),u[W]=!0)}function $(W){u[W]!==!1&&(i.disable(W),u[W]=!1)}function ge(W,ce){return h[W]!==ce?(i.bindFramebuffer(W,ce),h[W]=ce,W===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ce),W===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function fe(W,ce){let se=p,Ie=!1;if(W){se=f.get(ce),se===void 0&&(se=[],f.set(ce,se));let ye=W.textures;if(se.length!==ye.length||se[0]!==i.COLOR_ATTACHMENT0){for(let Se=0,We=ye.length;Se<We;Se++)se[Se]=i.COLOR_ATTACHMENT0+Se;se.length=ye.length,Ie=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,Ie=!0);Ie&&i.drawBuffers(se)}function Be(W){return g!==W?(i.useProgram(W),g=W,!0):!1}let we={[Ks]:i.FUNC_ADD,[Ef]:i.FUNC_SUBTRACT,[Sf]:i.FUNC_REVERSE_SUBTRACT};we[wf]=i.MIN,we[Cf]=i.MAX;let ee={[Tf]:i.ZERO,[If]:i.ONE,[Rf]:i.SRC_COLOR,[Ru]:i.SRC_ALPHA,[Nf]:i.SRC_ALPHA_SATURATE,[Pf]:i.DST_COLOR,[Df]:i.DST_ALPHA,[Bf]:i.ONE_MINUS_SRC_COLOR,[Bu]:i.ONE_MINUS_SRC_ALPHA,[Lf]:i.ONE_MINUS_DST_COLOR,[Ff]:i.ONE_MINUS_DST_ALPHA,[Uf]:i.CONSTANT_COLOR,[Of]:i.ONE_MINUS_CONSTANT_COLOR,[kf]:i.CONSTANT_ALPHA,[Gf]:i.ONE_MINUS_CONSTANT_ALPHA};function _e(W,ce,se,Ie,ye,Se,We,X,Y,pe){if(W===Qi){m===!0&&($(i.BLEND),m=!1);return}if(m===!1&&(de(i.BLEND),m=!0),W!==Mf){if(W!==A||pe!==S){if((x!==Ks||y!==Ks)&&(i.blendEquation(i.FUNC_ADD),x=Ks,y=Ks),pe)switch(W){case jr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case go:i.blendFunc(i.ONE,i.ONE);break;case Tu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Iu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:lt("WebGLState: Invalid blending: ",W);break}else switch(W){case jr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case go:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Tu:lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Iu:lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:lt("WebGLState: Invalid blending: ",W);break}v=null,_=null,E=null,b=null,M.set(0,0,0),I=0,A=W,S=pe}return}ye=ye||ce,Se=Se||se,We=We||Ie,(ce!==x||ye!==y)&&(i.blendEquationSeparate(we[ce],we[ye]),x=ce,y=ye),(se!==v||Ie!==_||Se!==E||We!==b)&&(i.blendFuncSeparate(ee[se],ee[Ie],ee[Se],ee[We]),v=se,_=Ie,E=Se,b=We),(X.equals(M)===!1||Y!==I)&&(i.blendColor(X.r,X.g,X.b,Y),M.copy(X),I=Y),A=W,S=!1}function be(W,ce){W.side===Lt?$(i.CULL_FACE):de(i.CULL_FACE);let se=W.side===Zt;ce&&(se=!se),ve(se),W.blending===jr&&W.transparent===!1?_e(Qi):_e(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),a.setFunc(W.depthFunc),a.setTest(W.depthTest),a.setMask(W.depthWrite),r.setMask(W.colorWrite);let Ie=W.stencilWrite;o.setTest(Ie),Ie&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Fe(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):$(i.SAMPLE_ALPHA_TO_COVERAGE)}function ve(W){C!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),C=W)}function Ee(W){W!==bf?(de(i.CULL_FACE),W!==B&&(W===Cu?i.cullFace(i.BACK):W===vf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):$(i.CULL_FACE),B=W}function Ke(W){W!==D&&(P&&i.lineWidth(W),D=W)}function Fe(W,ce,se){W?(de(i.POLYGON_OFFSET_FILL),(R!==ce||k!==se)&&(R=ce,k=se,a.getReversed()&&(ce=-ce,se=-se),i.polygonOffset(ce,se))):$(i.POLYGON_OFFSET_FILL)}function nt(W){W?de(i.SCISSOR_TEST):$(i.SCISSOR_TEST)}function qe(W){W===void 0&&(W=i.TEXTURE0+F-1),L!==W&&(i.activeTexture(W),L=W)}function $e(W,ce,se){se===void 0&&(L===null?se=i.TEXTURE0+F-1:se=L);let Ie=O[se];Ie===void 0&&(Ie={type:void 0,texture:void 0},O[se]=Ie),(Ie.type!==W||Ie.texture!==ce)&&(L!==se&&(i.activeTexture(se),L=se),i.bindTexture(W,ce||ue[W]),Ie.type=W,Ie.texture=ce)}function z(){let W=O[L];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Xe(){try{i.compressedTexImage2D(...arguments)}catch(W){lt("WebGLState:",W)}}function Ce(){try{i.compressedTexImage3D(...arguments)}catch(W){lt("WebGLState:",W)}}function Pe(){try{i.texSubImage2D(...arguments)}catch(W){lt("WebGLState:",W)}}function ne(){try{i.texSubImage3D(...arguments)}catch(W){lt("WebGLState:",W)}}function ke(){try{i.compressedTexSubImage2D(...arguments)}catch(W){lt("WebGLState:",W)}}function Ge(){try{i.compressedTexSubImage3D(...arguments)}catch(W){lt("WebGLState:",W)}}function Qe(){try{i.texStorage2D(...arguments)}catch(W){lt("WebGLState:",W)}}function G(){try{i.texStorage3D(...arguments)}catch(W){lt("WebGLState:",W)}}function w(){try{i.texImage2D(...arguments)}catch(W){lt("WebGLState:",W)}}function K(){try{i.texImage3D(...arguments)}catch(W){lt("WebGLState:",W)}}function le(W){return d[W]!==void 0?d[W]:i.getParameter(W)}function te(W,ce){d[W]!==ce&&(i.pixelStorei(W,ce),d[W]=ce)}function Ae(W){Q.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),Q.copy(W))}function xe(W){q.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),q.copy(W))}function ie(W,ce){let se=l.get(ce);se===void 0&&(se=new WeakMap,l.set(ce,se));let Ie=se.get(W);Ie===void 0&&(Ie=i.getUniformBlockIndex(ce,W.name),i.uniformBlockBinding(ce,Ie,Ie),se.set(W,Ie))}function oe(W,ce,se){let ye=l.get(ce).get(W);c[ye]!==se&&(i.bindBufferBase(i.UNIFORM_BUFFER,ye,se),c[ye]=se)}function Me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},L=null,O={},h={},c={},f=new WeakMap,p=[],g=null,m=!1,A=null,x=null,v=null,_=null,y=null,E=null,b=null,M=new Oe(0,0,0),I=0,S=!1,C=null,B=null,D=null,R=null,k=null,Q.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:de,disable:$,bindFramebuffer:ge,drawBuffers:fe,useProgram:Be,setBlending:_e,setMaterial:be,setFlipSided:ve,setCullFace:Ee,setLineWidth:Ke,setPolygonOffset:Fe,setScissorTest:nt,activeTexture:qe,bindTexture:$e,unbindTexture:z,compressedTexImage2D:Xe,compressedTexImage3D:Ce,texImage2D:w,texImage3D:K,pixelStorei:te,getParameter:le,updateUBOMapping:ie,uniformBlockBinding:oe,texStorage2D:Qe,texStorage3D:G,texSubImage2D:Pe,texSubImage3D:ne,compressedTexSubImage2D:ke,compressedTexSubImage3D:Ge,scissor:Ae,viewport:xe,reset:Me}}function tM(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new me,u=new WeakMap,d=new Set,h,f=new WeakMap,p=new Set,g=new FinalizationRegistry(G=>p.delete(G)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(G,w){return m?new OffscreenCanvas(G,w):Pr("canvas")}function x(G,w,K){let le=1,te=Qe(G);if((te.width>K||te.height>K)&&(le=K/Math.max(te.width,te.height)),le<1)if(typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&G instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&G instanceof ImageBitmap||typeof VideoFrame<"u"&&G instanceof VideoFrame){let Ae=Math.floor(le*te.width),xe=Math.floor(le*te.height);h===void 0&&(h=A(Ae,xe));let ie=w?A(Ae,xe):h;return ie.width=Ae,ie.height=xe,ie.getContext("2d").drawImage(G,0,0,Ae,xe),tt("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Ae+"x"+xe+")."),ie}else return"data"in G&&tt("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),G;return G}function v(G){return G.generateMipmaps}function _(G){i.generateMipmap(G)}function y(G){return G.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:G.isWebGL3DRenderTarget?i.TEXTURE_3D:G.isWebGLArrayRenderTarget||G.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(G,w,K,le,te,Ae=!1){if(G!==null){if(i[G]!==void 0)return i[G];tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+G+"'")}let xe;le&&(xe=e.get("EXT_texture_norm16"),xe||tt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=w;if(w===i.RED&&(K===i.FLOAT&&(ie=i.R32F),K===i.HALF_FLOAT&&(ie=i.R16F),K===i.UNSIGNED_BYTE&&(ie=i.R8),K===i.UNSIGNED_SHORT&&xe&&(ie=xe.R16_EXT),K===i.SHORT&&xe&&(ie=xe.R16_SNORM_EXT)),w===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(ie=i.R8UI),K===i.UNSIGNED_SHORT&&(ie=i.R16UI),K===i.UNSIGNED_INT&&(ie=i.R32UI),K===i.BYTE&&(ie=i.R8I),K===i.SHORT&&(ie=i.R16I),K===i.INT&&(ie=i.R32I)),w===i.RG&&(K===i.FLOAT&&(ie=i.RG32F),K===i.HALF_FLOAT&&(ie=i.RG16F),K===i.UNSIGNED_BYTE&&(ie=i.RG8),K===i.UNSIGNED_SHORT&&xe&&(ie=xe.RG16_EXT),K===i.SHORT&&xe&&(ie=xe.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(ie=i.RG8UI),K===i.UNSIGNED_SHORT&&(ie=i.RG16UI),K===i.UNSIGNED_INT&&(ie=i.RG32UI),K===i.BYTE&&(ie=i.RG8I),K===i.SHORT&&(ie=i.RG16I),K===i.INT&&(ie=i.RG32I)),w===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(ie=i.RGB8UI),K===i.UNSIGNED_SHORT&&(ie=i.RGB16UI),K===i.UNSIGNED_INT&&(ie=i.RGB32UI),K===i.BYTE&&(ie=i.RGB8I),K===i.SHORT&&(ie=i.RGB16I),K===i.INT&&(ie=i.RGB32I)),w===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(ie=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(ie=i.RGBA16UI),K===i.UNSIGNED_INT&&(ie=i.RGBA32UI),K===i.BYTE&&(ie=i.RGBA8I),K===i.SHORT&&(ie=i.RGBA16I),K===i.INT&&(ie=i.RGBA32I)),w===i.RGB&&(K===i.UNSIGNED_SHORT&&xe&&(ie=xe.RGB16_EXT),K===i.SHORT&&xe&&(ie=xe.RGB16_SNORM_EXT),K===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),K===i.UNSIGNED_INT_10F_11F_11F_REV&&(ie=i.R11F_G11F_B10F)),w===i.RGBA){let oe=Ae?Dr:xt.getTransfer(te);K===i.FLOAT&&(ie=i.RGBA32F),K===i.HALF_FLOAT&&(ie=i.RGBA16F),K===i.UNSIGNED_BYTE&&(ie=oe===Dt?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT&&xe&&(ie=xe.RGBA16_EXT),K===i.SHORT&&xe&&(ie=xe.RGBA16_SNORM_EXT),K===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function b(G,w){let K;return G?w===null||w===Tn||w===Xs?K=i.DEPTH24_STENCIL8:w===Yt?K=i.DEPTH32F_STENCIL8:w===zi&&(K=i.DEPTH24_STENCIL8,tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Tn||w===Xs?K=i.DEPTH_COMPONENT24:w===Yt?K=i.DEPTH_COMPONENT32F:w===zi&&(K=i.DEPTH_COMPONENT16),K}function M(G,w){return v(G)===!0||G.isFramebufferTexture&&G.minFilter!==Pt&&G.minFilter!==vt?Math.log2(Math.max(w.width,w.height))+1:G.mipmaps.length>0?G.mipmaps.length:G.isCompressedTexture&&Array.isArray(G.image)?w.mipmaps.length:1}function I(G){let w=new WeakRef(G);n.get(G).__ref=w,p.add(w),g.register(G,w,w)}function S(G){let w=n.get(G).__ref;w!==void 0&&(p.delete(w),g.unregister(w))}function C(G){D(G.target)}function B(G){R(G.target)}function D(G){G.removeEventListener("dispose",C),S(G),F(G),G.isVideoTexture&&u.delete(G),G.isHTMLTexture&&d.delete(G)}function R(G){G.removeEventListener("dispose",B),S(G),H(G)}function k(){for(let G of p){let w=G.deref();w!==void 0&&(w.isRenderTarget===!0?R(w):D(w))}p.clear(),d.clear()}function F(G){let w=n.get(G);if(w.__webglInit===void 0)return;let K=G.source,le=f.get(K);if(le){let te=le[w.__cacheKey];te.usedTimes--,te.usedTimes===0&&P(G),Object.keys(le).length===0&&f.delete(K)}n.remove(G)}function P(G){let w=n.get(G);i.deleteTexture(w.__webglTexture);let K=G.source,le=f.get(K);delete le[w.__cacheKey],a.memory.textures--}function H(G){let w=n.get(G);w.__depthDisposeCallback&&w.__depthDisposeCallback();let K=G.depthTexture;if(K&&K.renderTarget===G&&D(K),G.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(w.__webglFramebuffer[te]))for(let Ae=0;Ae<w.__webglFramebuffer[te].length;Ae++)i.deleteFramebuffer(w.__webglFramebuffer[te][Ae]);else i.deleteFramebuffer(w.__webglFramebuffer[te]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[te])}else{if(Array.isArray(w.__webglFramebuffer))for(let te=0;te<w.__webglFramebuffer.length;te++)i.deleteFramebuffer(w.__webglFramebuffer[te]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let te=0;te<w.__webglColorRenderbuffer.length;te++)w.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[te]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let le=G.textures;for(let te=0,Ae=le.length;te<Ae;te++){let xe=n.get(le[te]);xe.__webglTexture&&(i.deleteTexture(xe.__webglTexture),a.memory.textures--),n.remove(le[te])}n.remove(G)}let U=0;function L(){U=0}function O(){return U}function V(G){U=G}function j(){let G=U;return G>=s.maxTextures&&tt("WebGLTextures: Trying to use "+(G+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,G}function Q(G){let w=[];return w.push(G.wrapS),w.push(G.wrapT),w.push(G.wrapR||0),w.push(G.magFilter),w.push(G.minFilter),w.push(G.anisotropy),w.push(G.internalFormat),w.push(G.format),w.push(G.type),w.push(G.generateMipmaps),w.push(G.mipmapsAutoUpdate),w.push(G.premultiplyAlpha),w.push(G.flipY),w.push(G.unpackAlignment),w.push(G.colorSpace),w.join()}function q(G,w){let K=n.get(G);if(G.isVideoTexture&&ke(G),G.isRenderTargetTexture===!1&&G.isExternalTexture!==!0&&G.version>0&&K.__version!==G.version){let le=G.image;if(le===null)tt("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)tt("WebGLRenderer: Texture marked for update but image is incomplete");else{be(K,G,w);return}}else G.isExternalTexture&&(K.__webglTexture=G.sourceTexture?G.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+w)}function Z(G,w){let K=n.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&K.__version!==G.version){be(K,G,w);return}else G.isExternalTexture&&(K.__webglTexture=G.sourceTexture?G.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+w)}function ue(G,w){let K=n.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&K.__version!==G.version){be(K,G,w);return}t.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+w)}function de(G,w){let K=n.get(G);if(G.version>0&&K.__version!==G.version){ve(K,G,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+w)}let $={[an]:i.REPEAT,[wn]:i.CLAMP_TO_EDGE,[Br]:i.MIRRORED_REPEAT},ge={[Pt]:i.NEAREST,[ea]:i.NEAREST_MIPMAP_NEAREST,[qs]:i.NEAREST_MIPMAP_LINEAR,[vt]:i.LINEAR,[ta]:i.LINEAR_MIPMAP_NEAREST,[Ht]:i.LINEAR_MIPMAP_LINEAR},fe={[Xf]:i.NEVER,[Ku]:i.ALWAYS,[Jf]:i.LESS,[Hu]:i.LEQUAL,[Yf]:i.EQUAL,[Wu]:i.GEQUAL,[jf]:i.GREATER,[Zf]:i.NOTEQUAL};function Be(G,w){if(w.type===Yt&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===vt||w.magFilter===ta||w.magFilter===qs||w.magFilter===Ht||w.minFilter===vt||w.minFilter===ta||w.minFilter===qs||w.minFilter===Ht)&&tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(G,i.TEXTURE_WRAP_S,$[w.wrapS]),i.texParameteri(G,i.TEXTURE_WRAP_T,$[w.wrapT]),(G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY)&&i.texParameteri(G,i.TEXTURE_WRAP_R,$[w.wrapR]),i.texParameteri(G,i.TEXTURE_MAG_FILTER,ge[w.magFilter]),i.texParameteri(G,i.TEXTURE_MIN_FILTER,ge[w.minFilter]),w.compareFunction&&(i.texParameteri(G,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(G,i.TEXTURE_COMPARE_FUNC,fe[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Pt||w.minFilter!==qs&&w.minFilter!==Ht||w.type===Yt&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let K=e.get("EXT_texture_filter_anisotropic");i.texParameterf(G,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function we(G,w){let K=!1;G.__webglInit===void 0&&(G.__webglInit=!0,w.addEventListener("dispose",C),I(w));let le=w.source,te=f.get(le);te===void 0&&(te={},f.set(le,te));let Ae=Q(w);if(Ae!==G.__cacheKey){te[Ae]===void 0&&(te[Ae]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,K=!0),te[Ae].usedTimes++;let xe=te[G.__cacheKey];xe!==void 0&&(te[G.__cacheKey].usedTimes--,xe.usedTimes===0&&P(w)),G.__cacheKey=Ae,G.__webglTexture=te[Ae].texture}return K}function ee(G,w,K){return Math.floor(Math.floor(G/K)/w)}function _e(G,w,K,le){let Ae=G.updateRanges;if(Ae.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,K,le,w.data);else{Ae.sort((W,ce)=>W.start-ce.start);let xe=0;for(let W=1;W<Ae.length;W++){let ce=Ae[xe],se=Ae[W],Ie=ce.start+ce.count,ye=ee(se.start,w.width,4),Se=ee(ce.start,w.width,4);se.start<=Ie+1&&ye===Se&&ee(se.start+se.count-1,w.width,4)===ye?ce.count=Math.max(ce.count,se.start+se.count-ce.start):(++xe,Ae[xe]=se)}Ae.length=xe+1;let ie=t.getParameter(i.UNPACK_ROW_LENGTH),oe=t.getParameter(i.UNPACK_SKIP_PIXELS),Me=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let W=0,ce=Ae.length;W<ce;W++){let se=Ae[W],Ie=Math.floor(se.start/4),ye=Math.ceil(se.count/4),Se=Ie%w.width,We=Math.floor(Ie/w.width),X=ye,Y=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Se),t.pixelStorei(i.UNPACK_SKIP_ROWS,We),t.texSubImage2D(i.TEXTURE_2D,0,Se,We,X,Y,K,le,w.data)}G.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ie),t.pixelStorei(i.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Me)}}function be(G,w,K){let le=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(le=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(le=i.TEXTURE_3D);let te=we(G,w),Ae=w.source;t.bindTexture(le,G.__webglTexture,i.TEXTURE0+K);let xe=n.get(Ae);if(Ae.version!==xe.__version||te===!0){if(t.activeTexture(i.TEXTURE0+K),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let Y=xt.getPrimaries(xt.workingColorSpace),pe=w.colorSpace===In?null:xt.getPrimaries(w.colorSpace),Te=w.colorSpace===In||Y===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te)}t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let oe=x(w.image,!1,s.maxTextureSize);oe=Ge(w,oe);let Me=r.convert(w.format,w.colorSpace),W=r.convert(w.type),ce=E(w.internalFormat,Me,W,w.normalized,w.colorSpace,w.isVideoTexture);Be(le,w);let se,Ie=w.mipmaps,ye=w.isVideoTexture!==!0,Se=xe.__version===void 0||te===!0,We=Ae.dataReady,X=M(w,oe);if(w.isDepthTexture)ce=b(w.format===Vi,w.type),Se&&(ye?t.texStorage2D(i.TEXTURE_2D,1,ce,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,ce,oe.width,oe.height,0,Me,W,null));else if(w.isDataTexture)if(Ie.length>0){ye&&Se&&t.texStorage2D(i.TEXTURE_2D,X,ce,Ie[0].width,Ie[0].height);for(let Y=0,pe=Ie.length;Y<pe;Y++)se=Ie[Y],ye?We&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,se.width,se.height,Me,W,se.data):t.texImage2D(i.TEXTURE_2D,Y,ce,se.width,se.height,0,Me,W,se.data);w.generateMipmaps=!1}else ye?(Se&&t.texStorage2D(i.TEXTURE_2D,X,ce,oe.width,oe.height),We&&_e(w,oe,Me,W)):t.texImage2D(i.TEXTURE_2D,0,ce,oe.width,oe.height,0,Me,W,oe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ye&&Se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,X,ce,Ie[0].width,Ie[0].height,oe.depth);for(let Y=0,pe=Ie.length;Y<pe;Y++)if(se=Ie[Y],w.format!==jt)if(Me!==null)if(ye){if(We)if(w.layerUpdates.size>0){let Te=ih(se.width,se.height,w.format,w.type);for(let De of w.layerUpdates){let ht=se.data.subarray(De*Te/se.data.BYTES_PER_ELEMENT,(De+1)*Te/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,De,se.width,se.height,1,Me,ht)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,se.width,se.height,oe.depth,Me,se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,ce,se.width,se.height,oe.depth,0,se.data,0,0);else tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ye?We&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,se.width,se.height,oe.depth,Me,W,se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Y,ce,se.width,se.height,oe.depth,0,Me,W,se.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{ye&&Se&&t.texStorage2D(i.TEXTURE_2D,X,ce,Ie[0].width,Ie[0].height);for(let Y=0,pe=Ie.length;Y<pe;Y++)se=Ie[Y],w.format!==jt?Me!==null?ye?We&&t.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,se.width,se.height,Me,se.data):t.compressedTexImage2D(i.TEXTURE_2D,Y,ce,se.width,se.height,0,se.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?We&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,se.width,se.height,Me,W,se.data):t.texImage2D(i.TEXTURE_2D,Y,ce,se.width,se.height,0,Me,W,se.data)}else if(w.isDataArrayTexture)if(ye){if(Se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,X,ce,oe.width,oe.height,oe.depth),We)if(w.layerUpdates.size>0){let Y=ih(oe.width,oe.height,w.format,w.type);for(let pe of w.layerUpdates){let Te=oe.data.subarray(pe*Y/oe.data.BYTES_PER_ELEMENT,(pe+1)*Y/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pe,oe.width,oe.height,1,Me,W,Te)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Me,W,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ce,oe.width,oe.height,oe.depth,0,Me,W,oe.data);else if(w.isData3DTexture)ye?(Se&&t.texStorage3D(i.TEXTURE_3D,X,ce,oe.width,oe.height,oe.depth),We&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Me,W,oe.data)):t.texImage3D(i.TEXTURE_3D,0,ce,oe.width,oe.height,oe.depth,0,Me,W,oe.data);else if(w.isFramebufferTexture){if(Se)if(ye)t.texStorage2D(i.TEXTURE_2D,X,ce,oe.width,oe.height);else{let Y=oe.width,pe=oe.height;for(let Te=0;Te<X;Te++)t.texImage2D(i.TEXTURE_2D,Te,ce,Y,pe,0,Me,W,null),Y>>=1,pe>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let Y=i.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),oe.parentNode!==Y){Y.appendChild(oe),d.add(w),Y.onpaint=pe=>{let Te=pe.changedElements;for(let De of d)Te.includes(De.image)&&(De.needsUpdate=!0)},Y.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,oe);else{let Te=i.RGBA,De=i.RGBA,ht=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Te,De,ht,oe)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(ye&&Se){let Y=Qe(Ie[0]);t.texStorage2D(i.TEXTURE_2D,X,ce,Y.width,Y.height)}for(let Y=0,pe=Ie.length;Y<pe;Y++)se=Ie[Y],ye?We&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,Me,W,se):t.texImage2D(i.TEXTURE_2D,Y,ce,Me,W,se);w.generateMipmaps=!1}else if(ye){if(Se){let Y=Qe(oe);t.texStorage2D(i.TEXTURE_2D,X,ce,Y.width,Y.height)}We&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,W,oe)}else t.texImage2D(i.TEXTURE_2D,0,ce,Me,W,oe);v(w)&&w.mipmapsAutoUpdate===!0&&_(le),xe.__version=Ae.version,w.onUpdate&&w.onUpdate(w)}G.__version=w.version}function ve(G,w,K){if(w.image.length!==6)return;let le=we(G,w),te=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+K);let Ae=n.get(te);if(te.version!==Ae.__version||le===!0){t.activeTexture(i.TEXTURE0+K);let xe=xt.getPrimaries(xt.workingColorSpace),ie=w.colorSpace===In?null:xt.getPrimaries(w.colorSpace),oe=w.colorSpace===In||xe===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let Me=w.isCompressedTexture||w.image[0].isCompressedTexture,W=w.image[0]&&w.image[0].isDataTexture,ce=[];for(let De=0;De<6;De++)!Me&&!W?ce[De]=x(w.image[De],!0,s.maxCubemapSize):ce[De]=W?w.image[De].image:w.image[De],ce[De]=Ge(w,ce[De]);let se=ce[0],Ie=r.convert(w.format,w.colorSpace),ye=r.convert(w.type),Se=E(w.internalFormat,Ie,ye,w.normalized,w.colorSpace),We=w.isVideoTexture!==!0,X=Ae.__version===void 0||le===!0,Y=te.dataReady,pe=M(w,se);Be(i.TEXTURE_CUBE_MAP,w);let Te;if(w.isDepthTexture){if(Se=b(w.format===Vi,w.type),X)if(We)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Se,se.width,se.height);else for(let De=0;De<6;De++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Se,se.width,se.height,0,Ie,ye,null)}else if(Me){We&&X&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Se,se.width,se.height);for(let De=0;De<6;De++){Te=ce[De].mipmaps;for(let ht=0;ht<Te.length;ht++){let Ut=Te[ht];w.format!==jt?Ie!==null?We?Y&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,ht,0,0,Ut.width,Ut.height,Ie,Ut.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,ht,Se,Ut.width,Ut.height,0,Ut.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,ht,0,0,Ut.width,Ut.height,Ie,ye,Ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,ht,Se,Ut.width,Ut.height,0,Ie,ye,Ut.data)}}}else{if(Te=w.mipmaps,We&&X){Te.length>0&&pe++;let De=Qe(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Se,De.width,De.height)}for(let De=0;De<6;De++)if(W){We?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,0,0,ce[De].width,ce[De].height,Ie,ye,ce[De].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Se,ce[De].width,ce[De].height,0,Ie,ye,ce[De].data);for(let ht=0;ht<Te.length;ht++){let It=Te[ht].image[De].image;We?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,ht+1,0,0,It.width,It.height,Ie,ye,It.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,ht+1,Se,It.width,It.height,0,Ie,ye,It.data)}}else{We?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,0,0,Ie,ye,ce[De]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Se,Ie,ye,ce[De]);for(let ht=0;ht<Te.length;ht++){let Ut=Te[ht];We?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,ht+1,0,0,Ie,ye,Ut.image[De]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,ht+1,Se,Ie,ye,Ut.image[De])}}}v(w)&&w.mipmapsAutoUpdate===!0&&_(i.TEXTURE_CUBE_MAP),Ae.__version=te.version,w.onUpdate&&w.onUpdate(w)}G.__version=w.version}function Ee(G,w,K,le,te,Ae){let xe=r.convert(K.format,K.colorSpace),ie=r.convert(K.type),oe=E(K.internalFormat,xe,ie,K.normalized,K.colorSpace),Me=n.get(w),W=n.get(K);if(W.__renderTarget=w,!Me.__hasExternalTextures){let ce=Math.max(1,w.width>>Ae),se=Math.max(1,w.height>>Ae);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,Ae,oe,ce,se,w.depth,0,xe,ie,null):t.texImage2D(te,Ae,oe,ce,se,0,xe,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,G),ne(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,te,W.__webglTexture,0,Pe(w)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,le,te,W.__webglTexture,Ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(G,w,K){if(i.bindRenderbuffer(i.RENDERBUFFER,G),w.depthBuffer){let le=w.depthTexture,te=le&&le.isDepthTexture?le.type:null,Ae=b(w.stencilBuffer,te),xe=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ne(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe(w),Ae,w.width,w.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe(w),Ae,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Ae,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,G)}else{let le=w.textures;for(let te=0;te<le.length;te++){let Ae=le[te],xe=r.convert(Ae.format,Ae.colorSpace),ie=r.convert(Ae.type),oe=E(Ae.internalFormat,xe,ie,Ae.normalized,Ae.colorSpace);ne(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe(w),oe,w.width,w.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe(w),oe,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,oe,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Fe(G,w,K){let le=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,G),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let te=n.get(w.depthTexture);te.__renderTarget=w;let Ae=le?w.depthTexture.image[0]:w.depthTexture.image;(!te.__webglTexture||Ae.width!==w.width||Ae.height!==w.height)&&(Ae.width=w.width,Ae.height=w.height,w.depthTexture.needsUpdate=!0),le?de(w.depthTexture,0):q(w.depthTexture,0);let xe=te.__webglTexture,ie=Pe(w),oe=le?i.TEXTURE_CUBE_MAP_POSITIVE_X+K:i.TEXTURE_2D,Me=w.depthTexture.format===Vi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===Pi)ne(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Me,oe,xe,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,Me,oe,xe,0);else if(w.depthTexture.format===Vi)ne(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Me,oe,xe,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,Me,oe,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(G){let w=n.get(G),K=G.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==G.depthTexture){let le=G.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),le){let te=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,le.removeEventListener("dispose",te)};le.addEventListener("dispose",te),w.__depthDisposeCallback=te}w.__boundDepthTexture=le}if(G.depthTexture&&!w.__autoAllocateDepthBuffer)if(K)for(let le=0;le<6;le++)Fe(w.__webglFramebuffer[le],G,le);else G.texture.mipmaps.length>0?Fe(w.__webglFramebuffer[0],G,0):Fe(w.__webglFramebuffer,G,0);else if(K){w.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[le]),w.__webglDepthbuffer[le]===void 0)w.__webglDepthbuffer[le]=i.createRenderbuffer(),Ke(w.__webglDepthbuffer[le],G,!1);else{let te=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=w.__webglDepthbuffer[le];i.bindRenderbuffer(i.RENDERBUFFER,Ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,Ae)}}else if(G.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Ke(w.__webglDepthbuffer,G,!1);else{let te=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,Ae)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(G,w,K){let le=n.get(G);w!==void 0&&Ee(le.__webglFramebuffer,G,G.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&nt(G)}function $e(G){let w=G.texture,K=n.get(G),le=n.get(w);G.addEventListener("dispose",B),I(G);let te=G.textures,Ae=G.isWebGLCubeRenderTarget===!0,xe=te.length>1;if(xe||(le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture()),le.__version=w.version,a.memory.textures++),Ae){K.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(w.mipmaps.length>0){K.__webglFramebuffer[ie]=[];for(let oe=0;oe<w.mipmaps.length;oe++)K.__webglFramebuffer[ie][oe]=i.createFramebuffer()}else K.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(w.mipmaps.length>0){K.__webglFramebuffer=[];for(let ie=0;ie<w.mipmaps.length;ie++)K.__webglFramebuffer[ie]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(xe)for(let ie=0,oe=te.length;ie<oe;ie++){let Me=n.get(te[ie]);Me.__webglTexture===void 0&&(Me.__webglTexture=i.createTexture(),a.memory.textures++)}if(G.samples>0&&ne(G)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ie=0;ie<te.length;ie++){let oe=te[ie];K.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[ie]);let Me=r.convert(oe.format,oe.colorSpace),W=r.convert(oe.type),ce=E(oe.internalFormat,Me,W,oe.normalized,oe.colorSpace,G.isXRRenderTarget===!0),se=Pe(G);i.renderbufferStorageMultisample(i.RENDERBUFFER,se,ce,G.width,G.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,K.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),G.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),Ke(K.__webglDepthRenderbuffer,G,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Ae){t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),Be(i.TEXTURE_CUBE_MAP,w);for(let ie=0;ie<6;ie++)if(w.mipmaps.length>0)for(let oe=0;oe<w.mipmaps.length;oe++)Ee(K.__webglFramebuffer[ie][oe],G,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe);else Ee(K.__webglFramebuffer[ie],G,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);v(w)?_(i.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}else if(xe){for(let ie=0,oe=te.length;ie<oe;ie++){let Me=te[ie],W=n.get(Me),ce=i.TEXTURE_2D;(G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(ce=G.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,W.__webglTexture),Be(ce,Me),Ee(K.__webglFramebuffer,G,Me,i.COLOR_ATTACHMENT0+ie,ce,0),v(Me)&&_(ce)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(ie=G.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,le.__webglTexture),Be(ie,w),w.mipmaps.length>0)for(let oe=0;oe<w.mipmaps.length;oe++)Ee(K.__webglFramebuffer[oe],G,w,i.COLOR_ATTACHMENT0,ie,oe);else Ee(K.__webglFramebuffer,G,w,i.COLOR_ATTACHMENT0,ie,0);v(w)?_(ie):w.mipmaps.length>0&&i.texParameteri(ie,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}G.depthBuffer&&nt(G)}function z(G){let w=G.textures;for(let K=0,le=w.length;K<le;K++){let te=w[K];if(v(te)&&te.mipmapsAutoUpdate===!0){let Ae=y(G),xe=n.get(te).__webglTexture;t.bindTexture(Ae,xe),_(Ae),t.unbindTexture()}}}let Xe=[];function Ce(G){if(G.samples>0){if(ne(G)===!1){let w=G.textures,K=G.width,le=G.height,te=i.COLOR_BUFFER_BIT,Ae=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(G),ie=w.length>1;if(ie)for(let Me=0;Me<w.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),G.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Me=0;Me<w.length;Me++){if(G.resolveDepthBuffer&&(G.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),G.stencilBuffer&&G.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[Me]);let W=n.get(w[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,W,0)}i.blitFramebuffer(0,0,K,le,0,0,K,le,te,i.NEAREST),c===!0&&(Xe.length=0,Xe.push(i.COLOR_ATTACHMENT0+Me),G.depthBuffer&&G.storeMultisampledDepthBuffer===!1&&Xe.push(Ae),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Xe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let Me=0;Me<w.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,xe.__webglColorRenderbuffer[Me]);let W=n.get(w[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,W,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(G.depthBuffer&&G.storeMultisampledDepthBuffer===!1&&c){let w=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Pe(G){return Math.min(s.maxSamples,G.samples)}function ne(G){let w=n.get(G);return G.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ke(G){let w=a.render.frame;u.get(G)!==w&&(u.set(G,w),G.update())}function Ge(G,w){let K=G.colorSpace,le=G.format,te=G.type;return G.isCompressedTexture===!0||G.isVideoTexture===!0||K!==on&&K!==In&&(xt.getTransfer(K)===Dt?(le!==jt||te!==ot)&&tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):lt("WebGLTextures: Unsupported texture color space:",K)),w}function Qe(G){return typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement?(l.width=G.naturalWidth||G.width,l.height=G.naturalHeight||G.height):typeof VideoFrame<"u"&&G instanceof VideoFrame?(l.width=G.displayWidth,l.height=G.displayHeight):(l.width=G.width,l.height=G.height),l}this.allocateTextureUnit=j,this.resetTextureUnits=L,this.getTextureUnits=O,this.setTextureUnits=V,this.setTexture2D=q,this.setTexture2DArray=Z,this.setTexture3D=ue,this.setTextureCube=de,this.rebindTextures=qe,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ne,this.dispose=k}function nM(i,e){function t(n,s=In){let r,a=xt.getTransfer(s);if(n===ot)return i.UNSIGNED_BYTE;if(n===qc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===na)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ia)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gu)return i.BYTE;if(n===Qu)return i.SHORT;if(n===zi)return i.UNSIGNED_SHORT;if(n===Kc)return i.INT;if(n===Tn)return i.UNSIGNED_INT;if(n===Yt)return i.FLOAT;if(n===wt)return i.HALF_FLOAT;if(n===zu)return i.ALPHA;if(n===Js)return i.RGB;if(n===jt)return i.RGBA;if(n===Pi)return i.DEPTH_COMPONENT;if(n===Vi)return i.DEPTH_STENCIL;if(n===Zn)return i.RED;if(n===Jc)return i.RED_INTEGER;if(n===Un)return i.RG;if(n===Yc)return i.RG_INTEGER;if(n===jc)return i.RGBA_INTEGER;if(n===ms||n===Hi||n===_o||n===Wi)if(a===Dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ms)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hi)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wi)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ms)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hi)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wi)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sa||n===Zc||n===gs||n===Ys)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===sa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gs)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ys)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ra||n===js||n===Zs||n===aa||n===oa||n===$s||n===ca)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ra||n===js)return a===Dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Zs)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===aa)return r.COMPRESSED_R11_EAC;if(n===oa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===$s)return r.COMPRESSED_RG11_EAC;if(n===ca)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ki||n===$c||n===el||n===tl||n===xs||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===cl||n===ll||n===ul)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ki)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$c)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===el)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===tl)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xs)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nl)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===il)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sl)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rl)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===al)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ol)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===cl)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ll)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ul)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_s||n===hl||n===la)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===_s)return a===Dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===la)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ua||n===ha||n===er||n===da)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ua)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ha)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===er)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===da)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}function aM(i,e){function t(m,A){m.matrixAutoUpdate===!0&&m.updateMatrix(),A.value.copy(m.matrix)}function n(m,A){A.color.getRGB(m.fogColor.value,eh(i)),A.isFog?(m.fogNear.value=A.near,m.fogFar.value=A.far):A.isFogExp2&&(m.fogDensity.value=A.density)}function s(m,A,x,v,_){A.isNodeMaterial?A.uniformsNeedUpdate=!1:A.isMeshBasicMaterial?r(m,A):A.isMeshLambertMaterial?(r(m,A),A.envMap&&(m.envMapIntensity.value=A.envMapIntensity)):A.isMeshToonMaterial?(r(m,A),d(m,A)):A.isMeshPhongMaterial?(r(m,A),u(m,A),A.envMap&&(m.envMapIntensity.value=A.envMapIntensity)):A.isMeshStandardMaterial?(r(m,A),h(m,A),A.isMeshPhysicalMaterial&&f(m,A,_)):A.isMeshMatcapMaterial?(r(m,A),p(m,A)):A.isMeshDepthMaterial?r(m,A):A.isMeshDistanceMaterial?(r(m,A),g(m,A)):A.isMeshNormalMaterial?r(m,A):A.isLineBasicMaterial?(a(m,A),A.isLineDashedMaterial&&o(m,A)):A.isPointsMaterial?c(m,A,x,v):A.isSpriteMaterial?l(m,A):A.isShadowMaterial?(m.color.value.copy(A.color),m.opacity.value=A.opacity):A.isShaderMaterial&&(A.uniformsNeedUpdate=!1)}function r(m,A){m.opacity.value=A.opacity,A.color&&m.diffuse.value.copy(A.color),A.emissive&&m.emissive.value.copy(A.emissive).multiplyScalar(A.emissiveIntensity),A.map&&(m.map.value=A.map,t(A.map,m.mapTransform)),A.alphaMap&&(m.alphaMap.value=A.alphaMap,t(A.alphaMap,m.alphaMapTransform)),A.bumpMap&&(m.bumpMap.value=A.bumpMap,t(A.bumpMap,m.bumpMapTransform),m.bumpScale.value=A.bumpScale,A.side===Zt&&(m.bumpScale.value*=-1)),A.normalMap&&(m.normalMap.value=A.normalMap,t(A.normalMap,m.normalMapTransform),m.normalScale.value.copy(A.normalScale),A.side===Zt&&m.normalScale.value.negate()),A.displacementMap&&(m.displacementMap.value=A.displacementMap,t(A.displacementMap,m.displacementMapTransform),m.displacementScale.value=A.displacementScale,m.displacementBias.value=A.displacementBias),A.emissiveMap&&(m.emissiveMap.value=A.emissiveMap,t(A.emissiveMap,m.emissiveMapTransform)),A.specularMap&&(m.specularMap.value=A.specularMap,t(A.specularMap,m.specularMapTransform)),A.alphaTest>0&&(m.alphaTest.value=A.alphaTest);let x=e.get(A),v=x.envMap,_=x.envMapRotation;v&&(m.envMap.value=v,m.envMapRotation.value.setFromMatrix4(rM.makeRotationFromEuler(_)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(zp),m.reflectivity.value=A.reflectivity,m.ior.value=A.ior,m.refractionRatio.value=A.refractionRatio),A.lightMap&&(m.lightMap.value=A.lightMap,m.lightMapIntensity.value=A.lightMapIntensity,t(A.lightMap,m.lightMapTransform)),A.aoMap&&(m.aoMap.value=A.aoMap,m.aoMapIntensity.value=A.aoMapIntensity,t(A.aoMap,m.aoMapTransform))}function a(m,A){m.diffuse.value.copy(A.color),m.opacity.value=A.opacity,A.map&&(m.map.value=A.map,t(A.map,m.mapTransform))}function o(m,A){m.dashSize.value=A.dashSize,m.totalSize.value=A.dashSize+A.gapSize,m.scale.value=A.scale}function c(m,A,x,v){m.diffuse.value.copy(A.color),m.opacity.value=A.opacity,m.size.value=A.size*x,m.scale.value=v*.5,A.map&&(m.map.value=A.map,t(A.map,m.uvTransform)),A.alphaMap&&(m.alphaMap.value=A.alphaMap,t(A.alphaMap,m.alphaMapTransform)),A.alphaTest>0&&(m.alphaTest.value=A.alphaTest)}function l(m,A){m.diffuse.value.copy(A.color),m.opacity.value=A.opacity,m.rotation.value=A.rotation,A.map&&(m.map.value=A.map,t(A.map,m.mapTransform)),A.alphaMap&&(m.alphaMap.value=A.alphaMap,t(A.alphaMap,m.alphaMapTransform)),A.alphaTest>0&&(m.alphaTest.value=A.alphaTest)}function u(m,A){m.specular.value.copy(A.specular),m.shininess.value=Math.max(A.shininess,1e-4)}function d(m,A){A.gradientMap&&(m.gradientMap.value=A.gradientMap)}function h(m,A){m.metalness.value=A.metalness,A.metalnessMap&&(m.metalnessMap.value=A.metalnessMap,t(A.metalnessMap,m.metalnessMapTransform)),m.roughness.value=A.roughness,A.roughnessMap&&(m.roughnessMap.value=A.roughnessMap,t(A.roughnessMap,m.roughnessMapTransform)),A.envMap&&(m.envMapIntensity.value=A.envMapIntensity)}function f(m,A,x){m.ior.value=A.ior,A.diffuseRoughness>0&&(m.diffuseRoughness.value=A.diffuseRoughness,A.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=A.diffuseRoughnessMap,t(A.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),A.sheen>0&&(m.sheenColor.value.copy(A.sheenColor).multiplyScalar(A.sheen),m.sheenRoughness.value=A.sheenRoughness,A.sheenColorMap&&(m.sheenColorMap.value=A.sheenColorMap,t(A.sheenColorMap,m.sheenColorMapTransform)),A.sheenRoughnessMap&&(m.sheenRoughnessMap.value=A.sheenRoughnessMap,t(A.sheenRoughnessMap,m.sheenRoughnessMapTransform))),A.clearcoat>0&&(m.clearcoat.value=A.clearcoat,m.clearcoatRoughness.value=A.clearcoatRoughness,A.clearcoatMap&&(m.clearcoatMap.value=A.clearcoatMap,t(A.clearcoatMap,m.clearcoatMapTransform)),A.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=A.clearcoatRoughnessMap,t(A.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),A.clearcoatNormalMap&&(m.clearcoatNormalMap.value=A.clearcoatNormalMap,t(A.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(A.clearcoatNormalScale),A.side===Zt&&m.clearcoatNormalScale.value.negate())),A.dispersion>0&&(m.dispersion.value=A.dispersion),A.retroreflectivity>0&&(m.retroreflectivity.value=A.retroreflectivity),A.iridescence>0&&(m.iridescence.value=A.iridescence,m.iridescenceIOR.value=A.iridescenceIOR,m.iridescenceThicknessMinimum.value=A.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=A.iridescenceThicknessMaximum,A.iridescenceMap&&(m.iridescenceMap.value=A.iridescenceMap,t(A.iridescenceMap,m.iridescenceMapTransform)),A.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=A.iridescenceThicknessMap,t(A.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),A.transmission>0&&(m.transmission.value=A.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),A.transmissionMap&&(m.transmissionMap.value=A.transmissionMap,t(A.transmissionMap,m.transmissionMapTransform)),m.thickness.value=A.thickness,A.thicknessMap&&(m.thicknessMap.value=A.thicknessMap,t(A.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=A.attenuationDistance,m.attenuationColor.value.copy(A.attenuationColor)),A.anisotropy>0&&(m.anisotropyVector.value.set(A.anisotropy*Math.cos(A.anisotropyRotation),A.anisotropy*Math.sin(A.anisotropyRotation)),A.anisotropyMap&&(m.anisotropyMap.value=A.anisotropyMap,t(A.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=A.specularIntensity,m.specularColor.value.copy(A.specularColor),A.specularColorMap&&(m.specularColorMap.value=A.specularColorMap,t(A.specularColorMap,m.specularColorMapTransform)),A.specularIntensityMap&&(m.specularIntensityMap.value=A.specularIntensityMap,t(A.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,A){A.matcap&&(m.matcap.value=A.matcap)}function g(m,A){let x=e.get(A).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function oM(i,e,t,n){let s={},r={};function a(x,v){let _=v.program;n.uniformBlockBinding(x,_,s[x.id])}function o(x,v){let _=s[x.id];_===void 0&&(p(x),_=c(x),s[x.id]=_,x.addEventListener("dispose",m));let y=v.program;n.updateUBOMapping(x,y);let E=e.render.frame;r[x.id]!==E&&(l(x),r[x.id]=E)}function c(x){let v=i.createBuffer(),_=x.__size,y=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,_,y),i.bindBuffer(i.UNIFORM_BUFFER,null),v}function l(x){let v=s[x.id],_=x.uniforms,y=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,b=_.length;E<b;E++){let M=_[E];if(Array.isArray(M))for(let I=0,S=M.length;I<S;I++)u(M[I],E,I,y);else u(M,E,0,y)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(x,v,_,y){if(h(x,v,_,y)===!0){let E=x.__offset,b=x.value;if(Array.isArray(b)){let M=0;for(let I=0;I<b.length;I++){let S=b[I],C=g(S,!0);d(S,x.__data,M),M+=C.storage/Float32Array.BYTES_PER_ELEMENT}}else d(b,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,x.__data)}}function d(x,v,_){typeof x=="number"||typeof x=="boolean"?v[_]=x:x.isMatrix3?(v[_]=x.elements[0],v[_+1]=x.elements[1],v[_+2]=x.elements[2],v[_+3]=0,v[_+4]=x.elements[3],v[_+5]=x.elements[4],v[_+6]=x.elements[5],v[_+7]=0,v[_+8]=x.elements[6],v[_+9]=x.elements[7],v[_+10]=x.elements[8],v[_+11]=0):ArrayBuffer.isView(x)?v.set(x.subarray(0,v.length-_),_):x.toArray(v,_)}function h(x,v,_,y){let E=x.value,b=v+"_"+_;if(Array.isArray(E)){y[b]===void 0&&(y[b]=[]);let M=y[b],I=!1;for(let S=0;S<E.length;S++)f(E[S],M,S)===!0&&(I=!0);return I}return f(E,y,b)}function f(x,v,_){if(v[_]===void 0)return typeof x=="number"||typeof x=="boolean"?v[_]=x:ArrayBuffer.isView(x)?v[_]=x.slice():v[_]=x.clone(),!0;{let y=v[_];if(typeof x=="number"||typeof x=="boolean"){if(y!==x)return v[_]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(y.equals(x)===!1)return y.copy(x),!0}}return!1}function p(x){let v=x.uniforms,_=0,y=16;for(let b=0,M=v.length;b<M;b++){let I=Array.isArray(v[b])?v[b]:[v[b]];for(let S=0,C=I.length;S<C;S++){let B=I[S],D=Array.isArray(B.value)?B.value:[B.value],R=Array.isArray(v[b])||Array.isArray(B.value),k=_;for(let P=0,H=D.length;P<H;P++){let U=D[P],L=g(U,R),O=_%y,V=O%L.boundary,j=O+V;_+=V,j!==0&&y-j<L.storage&&(_+=y-j),P===0&&(k=_),_+=L.storage}let F=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new F((_-k)/Float32Array.BYTES_PER_ELEMENT),B.__offset=k}}let E=_%y;return E>0&&(_+=y-E),x.__size=_,x.__cache={},this}function g(x,v){let _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=16,_.storage=48):x.isMatrix4?(_.boundary=16,_.storage=64):x.isTexture?tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(_.boundary=16,_.storage=x.byteLength):tt("WebGLRenderer: Unsupported uniform value type.",x),v===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function m(x){let v=x.target;v.removeEventListener("dispose",m),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function A(){for(let x in s)i.deleteBuffer(s[x]);s={},r={}}return{bind:a,update:o,dispose:A}}function lM(){return vi===null&&(vi=new Dn(cM,16,16,Un,wt),vi.name="DFG_LUT",vi.minFilter=vt,vi.magFilter=vt,vi.wrapS=wn,vi.wrapT=wn,vi.generateMipmaps=!1,vi.needsUpdate=!0),vi}var wx,Cx,Tx,Ix,Rx,Bx,Dx,Fx,Px,Lx,Nx,Ux,Ox,kx,Gx,Qx,zx,Vx,Hx,Wx,Kx,qx,Xx,Jx,Yx,jx,Zx,$x,e_,t_,n_,i_,s_,r_,a_,o_,c_,l_,u_,h_,d_,f_,p_,A_,m_,g_,x_,__,b_,v_,y_,M_,E_,S_,w_,C_,T_,I_,R_,B_,D_,F_,P_,L_,N_,U_,O_,k_,G_,Q_,z_,V_,H_,W_,K_,q_,X_,J_,Y_,j_,Z_,$_,eb,tb,nb,ib,sb,rb,ab,ob,cb,lb,ub,hb,db,fb,pb,Ab,mb,gb,xb,_b,bb,vb,yb,Mb,Eb,Sb,wb,Cb,Tb,Ib,Rb,Bb,Db,Fb,Pb,Lb,Nb,Ub,Ob,kb,Gb,Qb,zb,Vb,Hb,Wb,Kb,qb,Xb,Jb,Yb,jb,Zb,$b,ev,tv,nv,iv,sv,At,Ve,yi,Al,rv,Fp,ir,hp,hv,dv,Pp,Lp,fv,pv,Av,Aa,wv,Np,Up,Op,kp,Gp,Qp,Ap,mp,gp,xp,_p,oh,ch,lh,rh,pa,Ay,my,yp,by,ml,wy,Ty,Ry,Dy,Py,Uy,hh,dh,Wy,Jy,Yy,jy,Zy,Bp,vo,ah,iM,sM,fh,ph,rM,zp,cM,vi,gl,gt=ct(()=>{sh();sh();wx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cx=`#ifdef USE_ALPHAHASH
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
#endif`,Tx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ix=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dx=`#ifdef USE_AOMAP
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
#endif`,Fx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Px=`#ifdef USE_BATCHING
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
#endif`,Lx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ux=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ox=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kx=`#ifdef USE_IRIDESCENCE
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
#endif`,Gx=`#ifdef USE_BUMPMAP
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
#endif`,Qx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Kx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,qx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Xx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Jx=`#define PI 3.141592653589793
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
} // validated`,Yx=`vec3 transformedNormal = objectNormal;
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
#endif`,jx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$x=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,t_="gl_FragColor = linearToOutputTexel( gl_FragColor );",n_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,i_=`#ifdef USE_ENVMAP
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
#endif`,s_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,r_=`#ifdef USE_ENVMAP
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
#endif`,a_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,o_=`#ifdef USE_ENVMAP
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
#endif`,c_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,l_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,u_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,h_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,d_=`#ifdef USE_GRADIENTMAP
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
}`,f_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,p_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,A_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,m_=`uniform bool receiveShadow;
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#include <lightprobes_pars_fragment>`,g_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,x_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,__=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,b_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,v_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,y_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,M_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
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
}`,E_=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,S_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,w_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,C_=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
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
#endif`,T_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,I_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,D_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,F_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,P_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,L_=`#if defined( USE_POINTS_UV )
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
#endif`,N_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,U_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,O_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,k_=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,G_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q_=`#ifdef USE_MORPHTARGETS
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
#endif`,z_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,H_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,W_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,X_=`#ifdef USE_NORMALMAP
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
#endif`,J_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Y_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,j_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Z_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ib=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ab=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ob=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
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
#endif`,cb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,lb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,ub=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,hb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,db=`#ifdef USE_SKINNING
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
#endif`,fb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pb=`#ifdef USE_SKINNING
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
#endif`,Ab=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_b=`#ifdef USE_TRANSMISSION
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
#endif`,bb=`#ifdef USE_TRANSMISSION
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
#endif`,vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,Eb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wb=`uniform sampler2D t2D;
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
}`,Cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tb=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bb=`#include <common>
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
}`,Db=`#if DEPTH_PACKING == 3200
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
}`,Fb=`#define DISTANCE
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
}`,Pb=`#define DISTANCE
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
}`,Lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ub=`uniform float scale;
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
}`,Ob=`uniform vec3 diffuse;
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
}`,kb=`#include <common>
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
}`,Gb=`uniform vec3 diffuse;
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
}`,Qb=`#define LAMBERT
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
}`,zb=`#define LAMBERT
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
}`,Vb=`#define MATCAP
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
}`,Hb=`#define MATCAP
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
}`,Wb=`#define NORMAL
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
}`,Kb=`#define NORMAL
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
}`,qb=`#define PHONG
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
}`,Xb=`#define PHONG
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
}`,Jb=`#define STANDARD
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
}`,Yb=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,jb=`#define TOON
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
}`,Zb=`#define TOON
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
}`,$b=`uniform float size;
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
}`,ev=`uniform vec3 diffuse;
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
}`,tv=`#include <common>
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
}`,nv=`uniform vec3 color;
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
}`,iv=`uniform float rotation;
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
}`,sv=`uniform vec3 diffuse;
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
}`,At={alphahash_fragment:wx,alphahash_pars_fragment:Cx,alphamap_fragment:Tx,alphamap_pars_fragment:Ix,alphatest_fragment:Rx,alphatest_pars_fragment:Bx,aomap_fragment:Dx,aomap_pars_fragment:Fx,batching_pars_vertex:Px,batching_vertex:Lx,begin_vertex:Nx,beginnormal_vertex:Ux,bsdfs:Ox,iridescence_fragment:kx,bumpmap_pars_fragment:Gx,clipping_planes_fragment:Qx,clipping_planes_pars_fragment:zx,clipping_planes_pars_vertex:Vx,clipping_planes_vertex:Hx,color_fragment:Wx,color_pars_fragment:Kx,color_pars_vertex:qx,color_vertex:Xx,common:Jx,defaultnormal_vertex:Yx,displacementmap_pars_vertex:jx,displacementmap_vertex:Zx,emissivemap_fragment:$x,emissivemap_pars_fragment:e_,colorspace_fragment:t_,colorspace_pars_fragment:n_,envmap_fragment:i_,envmap_common_pars_fragment:s_,envmap_pars_fragment:r_,envmap_pars_vertex:a_,envmap_physical_pars_fragment:g_,envmap_vertex:o_,fog_vertex:c_,fog_pars_vertex:l_,fog_fragment:u_,fog_pars_fragment:h_,gradientmap_pars_fragment:d_,lightmap_pars_fragment:f_,lights_lambert_fragment:p_,lights_lambert_pars_fragment:A_,lights_pars_begin:m_,lights_toon_fragment:x_,lights_toon_pars_fragment:__,lights_phong_fragment:b_,lights_phong_pars_fragment:v_,lights_physical_fragment:y_,lights_physical_pars_fragment:M_,lights_fragment_begin:E_,lights_fragment_maps:S_,lights_fragment_end:w_,lightprobes_pars_fragment:C_,logdepthbuf_fragment:T_,logdepthbuf_pars_fragment:I_,logdepthbuf_pars_vertex:R_,logdepthbuf_vertex:B_,map_fragment:D_,map_pars_fragment:F_,map_particle_fragment:P_,map_particle_pars_fragment:L_,metalnessmap_fragment:N_,metalnessmap_pars_fragment:U_,morphinstance_vertex:O_,morphcolor_vertex:k_,morphnormal_vertex:G_,morphtarget_pars_vertex:Q_,morphtarget_vertex:z_,normal_fragment_begin:V_,normal_fragment_maps:H_,normal_pars_fragment:W_,normal_pars_vertex:K_,normal_vertex:q_,normalmap_pars_fragment:X_,clearcoat_normal_fragment_begin:J_,clearcoat_normal_fragment_maps:Y_,clearcoat_pars_fragment:j_,iridescence_pars_fragment:Z_,opaque_fragment:$_,packing:eb,premultiplied_alpha_fragment:tb,project_vertex:nb,dithering_fragment:ib,dithering_pars_fragment:sb,roughnessmap_fragment:rb,roughnessmap_pars_fragment:ab,shadowmap_pars_fragment:ob,shadowmap_pars_vertex:cb,shadowmap_vertex:lb,shadowmask_pars_fragment:ub,skinbase_vertex:hb,skinning_pars_vertex:db,skinning_vertex:fb,skinnormal_vertex:pb,specularmap_fragment:Ab,specularmap_pars_fragment:mb,tonemapping_fragment:gb,tonemapping_pars_fragment:xb,transmission_fragment:_b,transmission_pars_fragment:bb,uv_pars_fragment:vb,uv_pars_vertex:yb,uv_vertex:Mb,worldpos_vertex:Eb,background_vert:Sb,background_frag:wb,backgroundCube_vert:Cb,backgroundCube_frag:Tb,cube_vert:Ib,cube_frag:Rb,depth_vert:Bb,depth_frag:Db,distance_vert:Fb,distance_frag:Pb,equirect_vert:Lb,equirect_frag:Nb,linedashed_vert:Ub,linedashed_frag:Ob,meshbasic_vert:kb,meshbasic_frag:Gb,meshlambert_vert:Qb,meshlambert_frag:zb,meshmatcap_vert:Vb,meshmatcap_frag:Hb,meshnormal_vert:Wb,meshnormal_frag:Kb,meshphong_vert:qb,meshphong_frag:Xb,meshphysical_vert:Jb,meshphysical_frag:Yb,meshtoon_vert:jb,meshtoon_frag:Zb,points_vert:$b,points_frag:ev,shadow_vert:tv,shadow_frag:nv,sprite_vert:iv,sprite_frag:sv},Ve={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},yi={basic:{uniforms:vn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:vn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Oe(0)},envMapIntensity:{value:1}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:vn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:vn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:vn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Oe(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:vn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:vn([Ve.points,Ve.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:vn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:vn([Ve.common,Ve.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:vn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:At.meshnormal_vert,fragmentShader:At.meshnormal_frag},sprite:{uniforms:vn([Ve.sprite,Ve.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:At.background_vert,fragmentShader:At.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:At.backgroundCube_vert,fragmentShader:At.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distance:{uniforms:vn([Ve.common,Ve.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distance_vert,fragmentShader:At.distance_frag},shadow:{uniforms:vn([Ve.lights,Ve.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};yi.physical={uniforms:vn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new rt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};Al={r:0,b:0,g:0},rv=new Re,Fp=new rt;Fp.set(-1,0,0,0,1,0,0,0,1);ir=class extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new to(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ot(5,5,5),r=new kt({name:"CubemapFromEquirect",uniforms:nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:Qi});r.uniforms.tEquirect.value=t;let a=new Le(s,r),o=t.minFilter;return t.minFilter===Ht&&(t.minFilter=vt),new fs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},hp=256,hv=3,dv=20,Pp=256,Lp=16,fv=3,pv=new T,Av=new Oe,Aa=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new fs(1,10,null),this._boxMesh=new Le(new Ot(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=pv}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let d=c.autoClear,h=c.autoClearColor,f=c.autoClearDepth,p=c.autoClearStencil,g=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,g===null&&(e.background=c.getClearColor(Av));let m=new fs(n,s,u);return m.position.copy(o),m.update(c,e),c.autoClear=d,c.autoClearColor=h,c.autoClearDepth=f,c.autoClearStencil=p,e.background=g,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(hp,Yu(e))}_fromTexture(e,t){e.mapping===As||e.mapping===Zr?this._setSize(e.image.length===0?hp:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=dp(e,!1,!1),n=Math.log2(e)-hv;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=dp(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===As||e.mapping===Zr?(this._cubemapMaterial===null&&(this._cubemapMaterial=pp()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=fp()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=mv(),this._integrationMaterial=gv());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Lp);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-fv)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(Pp*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=xv());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};wv={[Fu]:"LINEAR_TONE_MAPPING",[Pu]:"REINHARD_TONE_MAPPING",[Lu]:"CINEON_TONE_MAPPING",[xo]:"ACES_FILMIC_TONE_MAPPING",[Uu]:"AGX_TONE_MAPPING",[Ou]:"NEUTRAL_TONE_MAPPING",[Nu]:"CUSTOM_TONE_MAPPING"};Np=new nn,Up=new zn(1,1),Op=new no(1),kp=new Ha,Gp=new ss,Qp=new to,Ap=[],mp=[],gp=new Float32Array(16),xp=new Float32Array(9),_p=new Float32Array(4);oh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qv(t.type)}},ch=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fy(t.type)}},lh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},rh=/(\w+)(\])?(\[|\.)?/g;pa=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);py(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};Ay=37297,my=0;yp=new rt;by={[Fu]:"Linear",[Pu]:"Reinhard",[Lu]:"Cineon",[xo]:"ACESFilmic",[Uu]:"AgX",[Ou]:"Neutral",[Nu]:"Custom"};ml=new T;wy=/^[ \t]*#include +<([\w\d./]+)>/gm;Ty=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Ry={[Ws]:"SHADOWMAP_TYPE_PCF",[Yr]:"SHADOWMAP_TYPE_VSM"};Dy={[Zr]:"ENVMAP_MODE_REFRACTION"};Py={[Du]:"ENVMAP_BLENDING_MULTIPLY",[Qf]:"ENVMAP_BLENDING_MIX",[zf]:"ENVMAP_BLENDING_ADD"};Uy=0,hh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new dh(e),t.set(e,n)),n}},dh=class{constructor(e){this.id=Uy++,this.code=e,this.usedTimes=0}};Wy=0;Jy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yy=`uniform sampler2D shadow_pass;
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
}`,jy=[new T(1,0,0),new T(-1,0,0),new T(0,1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1)],Zy=[new T(0,-1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1),new T(0,-1,0),new T(0,-1,0)],Bp=new Re,vo=new T,ah=new T;iM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sM=`
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

}`,fh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new io(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new kt({vertexShader:iM,fragmentShader:sM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Le(new Hn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ph=class extends Ai{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,p=null,g=typeof XRWebGLBinding<"u",m=new fh,A={},x=t.getContextAttributes(),v=null,_=null,y=[],E=[],b=new me,M=null,I=null,S=new rn;S.viewport=new mt;let C=new rn;C.viewport=new mt;let B=[S,C],D=new Hc,R=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let q=y[Q];return q===void 0&&(q=new Or,y[Q]=q),q.getTargetRaySpace()},this.getControllerGrip=function(Q){let q=y[Q];return q===void 0&&(q=new Or,y[Q]=q),q.getGripSpace()},this.getHand=function(Q){let q=y[Q];return q===void 0&&(q=new Or,y[Q]=q),q.getHandSpace()};function F(Q){let q=E.indexOf(Q.inputSource);if(q===-1)return;let Z=y[q];Z!==void 0&&(Z.update(Q.inputSource,Q.frame,l||a),Z.dispatchEvent({type:Q.type,data:Q.inputSource}))}function P(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",P),s.removeEventListener("inputsourceschange",H);for(let Q=0;Q<y.length;Q++){let q=E[Q];q!==null&&(E[Q]=null,y[Q].disconnect(q))}R=null,k=null,m.reset();for(let Q in A)delete A[Q];if(e.setRenderTarget(v),f=null,h=null,d=null,s=null,_=null,j.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(b.width,b.height,!1),I!==null){let Q=I.camera;Q.fov=I.fov,Q.zoom=I.zoom,Q.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",P),s.addEventListener("inputsourceschange",H),x.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(b),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let Z=null,ue=null,de=null;x.depth&&(de=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=x.stencil?Vi:Pi,ue=x.stencil?Xs:Tn);let $={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer($),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new qt(h.textureWidth,h.textureHeight,{format:jt,type:ot,depthTexture:new zn(h.textureWidth,h.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Z={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Z),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new qt(f.framebufferWidth,f.framebufferHeight,{format:jt,type:ot,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),j.setContext(s),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(Q){for(let q=0;q<Q.removed.length;q++){let Z=Q.removed[q],ue=E.indexOf(Z);ue>=0&&(E[ue]=null,y[ue].disconnect(Z))}for(let q=0;q<Q.added.length;q++){let Z=Q.added[q],ue=E.indexOf(Z);if(ue===-1){for(let $=0;$<y.length;$++)if($>=E.length){E.push(Z),ue=$;break}else if(E[$]===null){E[$]=Z,ue=$;break}if(ue===-1)break}let de=y[ue];de&&de.connect(Z)}}function U(Q,q){q===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(q.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let q=Q.near,Z=Q.far;m.texture!==null&&(m.depthNear>0&&(q=m.depthNear),m.depthFar>0&&(Z=m.depthFar)),D.near=C.near=S.near=q,D.far=C.far=S.far=Z,(R!==D.near||k!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),R=D.near,k=D.far),D.layers.mask=Q.layers.mask|6,S.layers.mask=D.layers.mask&-5,C.layers.mask=D.layers.mask&-3;let ue=Q.parent,de=D.cameras;U(D,ue);for(let $=0;$<de.length;$++)U(de[$],ue);D.projectionMatrix.copy(S.projectionMatrix),D.projectionMatrixInverse.copy(S.projectionMatrixInverse),I===null&&Q.isPerspectiveCamera&&(I={camera:Q,fov:Q.fov,zoom:Q.zoom}),L(Q,D,ue)};function L(Q,q,Z){Z===null?Q.matrix.copy(q.matrixWorld):(Q.matrix.copy(Z.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(q.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(q.projectionMatrix),Q.projectionMatrixInverse.copy(q.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Fs*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(Q){c=Q,h!==null&&(h.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(Q){return A[Q]};let O=null;function V(Q,q){if(u=q.getViewerPose(l||a),p=q,u!==null){let Z=u.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let ue=!1;Z.length!==D.cameras.length&&(D.cameras.length=0,ue=!0);for(let fe=0;fe<Z.length;fe++){let Be=Z[fe],we=null;if(f!==null)we=f.getViewport(Be);else{let _e=d.getViewSubImage(h,Be);we=_e.viewport,fe===0&&(e.setRenderTargetTextures(_,_e.colorTexture,_e.depthStencilTexture),e.setRenderTarget(_))}let ee=B[fe];ee===void 0&&(ee=new rn,ee.layers.enable(fe),ee.viewport=new mt,B[fe]=ee),ee.matrix.fromArray(Be.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Be.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(we.x,we.y,we.width,we.height),fe===0&&(D.matrix.copy(ee.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),ue===!0&&D.cameras.push(ee)}let de=s.enabledFeatures;if(de&&de.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){d=n.getBinding();let fe=d.getDepthInformation(Z[0]);fe&&fe.isValid&&fe.texture&&m.init(fe,s.renderState)}if(de&&de.includes("camera-access")&&g){e.state.unbindTexture(),d=n.getBinding();for(let fe=0;fe<Z.length;fe++){let Be=Z[fe].camera;if(Be){let we=A[Be];we||(we=new io,A[Be]=we);let ee=d.getCameraImage(Be);we.sourceTexture=ee}}}}for(let Z=0;Z<y.length;Z++){let ue=E[Z],de=y[Z];ue!==null&&de!==void 0&&de.update(ue,q,l||a)}O&&O(Q,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),p=null}let j=new Dp;j.setAnimationLoop(V),this.setAnimationLoop=function(Q){O=Q},this.dispose=function(){}}},rM=new Re,zp=new rt;zp.set(-1,0,0,0,1,0,0,0,1);cM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),vi=null;gl=class{constructor(e={}){let{canvas:t=$f(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=ot}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let g=f,m=new Set([jc,Yc,Jc]),A=new Set([ot,Tn,zi,Xs,qc,Xc]),x=new Uint32Array(4),v=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]},y=null,E=null,b=[],M=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,C=!1,B=null,D=null,R=null,k=null;this._outputColorSpace=dt;let F=0,P=0,H=null,U=-1,L=null,O=new mt,V=new mt,j=null,Q=new Oe(0),q=0,Z=t.width,ue=t.height,de=1,$=null,ge=null,fe=new mt(0,0,Z,ue),Be=new mt(0,0,Z,ue),we=!1,ee=new jn,_e=new Cc,be=!1,ve=!1,Ee=new Re,Ke=new T,Fe=new mt,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qe=!1;function $e(){return H===null?de:1}let z=n;function Xe(N,J){return t.getContext(N,J)}let Ce,Pe,ne,ke,Ge,Qe,G,w,K,le,te,Ae,xe,ie,oe,Me,W,ce,se,Ie,ye,Se,We;try{let N={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",De,!1),z===null){let J="webgl2";if(z=Xe(J,N),z===null)throw Xe(J)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}X()}catch(N){throw t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",De,!1),lt("WebGLRenderer: "+N.message),N}function X(){Ce=new bv(z),Ce.init(),ye=new nM(z,Ce),Pe=new lv(z,Ce,e,ye),ne=new eM(z,Ce),Pe.reversedDepthBuffer&&h&&ne.buffers.depth.setReversed(!0),D=z.createFramebuffer(),R=z.createFramebuffer(),k=z.createFramebuffer(),ke=new Mv(z),Ge=new Gy,Qe=new tM(z,Ce,ne,Ge,Pe,ye,ke),G=new _v(S),w=new Sx(z),Se=new ov(z,w),K=new vv(z,w,ke,Se),le=new Sv(z,K,w,Se,ke),ce=new Ev(z,Pe,Qe),oe=new uv(Ge),te=new ky(S,G,Ce,Pe,Se,oe),Ae=new aM(S,Ge),xe=new zy,ie=new Xy(Ce),W=new av(S,G,ne,le,p,c),Me=new $y(S,le,Pe),We=new oM(z,ke,Pe,ne),se=new cv(z,Ce,ke),Ie=new yv(z,Ce,ke),ke.programs=te.programs,S.capabilities=Pe,S.extensions=Ce,S.properties=Ge,S.renderLists=xe,S.shadowMap=Me,S.state=ne,S.info=ke}g!==ot&&(I=new Cv(g,t.width,t.height,o,s,r));let Y=new ph(S,z);this.xr=Y,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let N=Ce.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){let N=Ce.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(N){N!==void 0&&(de=N,this.setSize(Z,ue,!1))},this.getSize=function(N){return N.set(Z,ue)},this.setSize=function(N,J,he=!0){if(Y.isPresenting){tt("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=N,ue=J,t.width=Math.floor(N*de),t.height=Math.floor(J*de),he===!0&&(t.style.width=N+"px",t.style.height=J+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,N,J)},this.getDrawingBufferSize=function(N){return N.set(Z*de,ue*de).floor()},this.setDrawingBufferSize=function(N,J,he){Z=N,ue=J,de=he,t.width=Math.floor(N*he),t.height=Math.floor(J*he),this.setViewport(0,0,N,J)},this.setEffects=function(N){if(g===ot){lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let J=0;J<N.length;J++)if(N[J].isOutputPass===!0){tt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(O)},this.getViewport=function(N){return N.copy(fe)},this.setViewport=function(N,J,he,re){N.isVector4?fe.set(N.x,N.y,N.z,N.w):fe.set(N,J,he,re),ne.viewport(O.copy(fe).multiplyScalar($e()).round())},this.getScissor=function(N){return N.copy(Be)},this.setScissor=function(N,J,he,re){N.isVector4?Be.set(N.x,N.y,N.z,N.w):Be.set(N,J,he,re),ne.scissor(V.copy(Be).multiplyScalar($e()).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(N){ne.setScissorTest(we=N)},this.setOpaqueSort=function(N){$=N},this.setTransparentSort=function(N){ge=N},this.getClearColor=function(N){return N.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor(...arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha(...arguments)},this.clear=function(N=!0,J=!0,he=!0){let re=0;if(N){let ae=!1;if(H!==null){let Ue=H.texture.format;ae=m.has(Ue)}if(ae){let Ue=H.texture.type,Ye=A.has(Ue),Ne=W.getClearColor(),He=W.getClearAlpha(),et=Ne.r,pt=Ne.g,yt=Ne.b;Ye?(x[0]=et,x[1]=pt,x[2]=yt,x[3]=He,z.clearBufferuiv(z.COLOR,0,x)):(v[0]=et,v[1]=pt,v[2]=yt,v[3]=He,z.clearBufferiv(z.COLOR,0,v))}else re|=z.COLOR_BUFFER_BIT}J&&(re|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),he&&(re|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&z.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),B=N},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",De,!1),W.dispose(),xe.dispose(),ie.dispose(),Qe.dispose(),Ge.dispose(),G.dispose(),le.dispose(),K.dispose(),Se.dispose(),We.dispose(),te.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Po),Y.removeEventListener("sessionend",Lo),Ei.stop()};function pe(N){N.preventDefault(),Va("WebGLRenderer: Context Lost."),C=!0}function Te(){Va("WebGLRenderer: Context Restored."),C=!1;let N=ke.autoReset,J=Me.enabled,he=Me.autoUpdate,re=Me.needsUpdate,ae=Me.type;X(),ke.autoReset=N,Me.enabled=J,Me.autoUpdate=he,Me.needsUpdate=re,Me.type=ae}function De(N){lt("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function ht(N){let J=N.target;J.removeEventListener("dispose",ht),Ut(J)}function Ut(N){It(N),Ge.remove(N)}function It(N){let J=Ge.get(N).programs;J!==void 0&&(J.forEach(function(he){te.releaseProgram(he)}),N.isShaderMaterial&&te.releaseShaderCache(N))}this.renderBufferDirect=function(N,J,he,re,ae,Ue){J===null&&(J=nt);let Ye=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,Ne=Vg(N,J,he,re,ae);ne.setMaterial(re,Ye);let He=he.index,et=1;if(re.wireframe===!0){if(He=K.getWireframeAttribute(he),He===void 0)return;et=2}let pt=he.drawRange,yt=he.attributes.position,je=pt.start*et,Mt=(pt.start+pt.count)*et;Ue!==null&&(je=Math.max(je,Ue.start*et),Mt=Math.min(Mt,(Ue.start+Ue.count)*et)),He!==null?(je=Math.max(je,0),Mt=Math.min(Mt,He.count)):yt!=null&&(je=Math.max(je,0),Mt=Math.min(Mt,yt.count));let en=Mt-je;if(en<0||en===1/0)return;Se.setup(ae,re,Ne,he,He);let Vt,Gt=se;if(He!==null&&(Vt=w.get(He),Gt=Ie,Gt.setIndex(Vt)),ae.isMesh)re.wireframe===!0?(ne.setLineWidth(re.wireframeLinewidth*$e()),Gt.setMode(z.LINES)):Gt.setMode(z.TRIANGLES);else if(ae.isLine){let mn=re.linewidth;mn===void 0&&(mn=1),ne.setLineWidth(mn*$e()),ae.isLineSegments?Gt.setMode(z.LINES):ae.isLineLoop?Gt.setMode(z.LINE_LOOP):Gt.setMode(z.LINE_STRIP)}else ae.isPoints?Gt.setMode(z.POINTS):ae.isSprite&&Gt.setMode(z.TRIANGLES);if(ae.isBatchedMesh)if(Ce.get("WEBGL_multi_draw"))Gt.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{let mn=ae._multiDrawStarts,Ze=ae._multiDrawCounts,Mn=ae._multiDrawCount,Rt=He?w.get(He).bytesPerElement:1,Ms=Ge.get(re).currentProgram.getUniforms();for(let gn=0;gn<Mn;gn++)Ms.setValue(z,"_gl_DrawID",gn),Gt.render(mn[gn]/Rt,Ze[gn])}else if(ae.isInstancedMesh)Gt.renderInstances(je,en,ae.count);else if(he.isInstancedBufferGeometry){let mn=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,Ze=Math.min(he.instanceCount,mn);Gt.renderInstances(je,en,Ze)}else Gt.render(je,en)};function sn(N,J,he,re){B!==null&&N.isNodeMaterial&&B.setObject(re,N),be===!0&&oe.setState(N,he,!1),N.transparent===!0&&N.side===Lt&&N.forceSinglePass===!1?(N.side=Zt,N.needsUpdate=!0,Sa(N,J,re),N.side=Nn,N.needsUpdate=!0,Sa(N,J,re),N.side=Lt):Sa(N,J,re)}this.compile=function(N,J,he=null){he===null&&(he=N),B!==null&&B.renderStart(N,J,he),E=ie.get(he),E.init(J),M.push(E),he.traverseVisible(function(ae){ae.isLight&&ae.layers.test(J.layers)&&(E.pushLight(ae),ae.castShadow&&E.pushShadow(ae))}),N!==he&&N.traverseVisible(function(ae){ae.isLight&&ae.layers.test(J.layers)&&(E.pushLight(ae),ae.castShadow&&E.pushShadow(ae))}),E.setupLights(),B!==null&&B.updateLights(E.state.lightsArray),ve=this.localClippingEnabled,be=oe.init(this.clippingPlanes,ve),be===!0&&oe.setGlobalState(this.clippingPlanes,J),B!==null&&Me.render(E.state.shadowsArray,he,J);let re=new Set;return N.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;let Ue=ae.material;if(Ue)if(Array.isArray(Ue))for(let Ye=0;Ye<Ue.length;Ye++){let Ne=Ue[Ye];sn(Ne,he,J,ae),re.add(Ne)}else sn(Ue,he,J,ae),re.add(Ue)}),E=M.pop(),B!==null&&B.renderEnd(),re},this.compileAsync=function(N,J,he=null){let re=this.compile(N,J,he);return new Promise(ae=>{function Ue(){if(re.forEach(function(Ye){let He=Ge.get(Ye).currentProgram;(He===void 0||He.isReady())&&re.delete(Ye)}),re.size===0){ae(N);return}setTimeout(Ue,10)}Ce.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let yn=null;function di(N){yn&&yn(N)}function Po(){Ei.stop()}function Lo(){Ei.start()}let Ei=new Dp;Ei.setAnimationLoop(di),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(N){yn=N,Y.setAnimationLoop(N),N===null?Ei.stop():Ei.start()},Y.addEventListener("sessionstart",Po),Y.addEventListener("sessionend",Lo),this.render=function(N,J){if(J!==void 0&&J.isCamera!==!0){lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;B!==null&&B.renderStart(N,J);let he=Y.enabled===!0&&Y.isPresenting===!0,re=I!==null&&(H===null||he)&&I.begin(S,H);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(J),J=Y.getCamera()),N.isScene===!0&&N.onBeforeRender(S,N,J,H),E=ie.get(N,M.length),E.init(J),E.state.textureUnits=Qe.getTextureUnits(),M.push(E),Ee.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),J.isArrayCamera?_e.setFromArrayCamera(J):ee.setFromProjectionMatrix(Ee,Yn,J.reversedDepth),ve=this.localClippingEnabled,be=oe.init(this.clippingPlanes,ve),y=xe.get(N,b.length),y.init(),b.push(y),this.info.render.frame++,Y.enabled===!0&&Y.isPresenting===!0){let Ye=S.xr.getDepthSensingMesh();Ye!==null&&Ea(Ye,J,-1/0,S.sortObjects)}Ea(N,J,0,S.sortObjects),y.finish(),B!==null&&B.updateLights(E.state.lightsArray),S.sortObjects===!0&&y.sort($,ge),qe=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,qe&&W.addToRenderList(y,N),this.info.autoReset===!0&&this.info.reset(),be===!0&&oe.beginShadows();let ae=E.state.shadowsArray;if(Me.render(ae,N,J),be===!0&&oe.endShadows(),(re&&I.hasRenderPass())===!1){let Ye=y.opaque,Ne=y.transmissive;if(E.setupLights(),J.isArrayCamera){let He=J.cameras;if(Ne.length>0)for(let et=0,pt=He.length;et<pt;et++){let yt=He[et];Uo(Ye,Ne,N,yt)}qe&&W.render(N);for(let et=0,pt=He.length;et<pt;et++){let yt=He[et];No(y,N,yt,yt.viewport)}}else Ne.length>0&&Uo(Ye,Ne,N,J),qe&&W.render(N),No(y,N,J)}H!==null&&P===0&&(Qe.updateMultisampleRenderTarget(H),Qe.updateRenderTargetMipmap(H)),re&&I.end(S),N.isScene===!0&&N.onAfterRender(S,N,J),Se.resetDefaultState(),U=-1,L=null,M.pop(),M.length>0?(E=M[M.length-1],Qe.setTextureUnits(E.state.textureUnits),be===!0&&oe.setGlobalState(S.clippingPlanes,E.state.camera)):E=null,b.pop(),b.length>0?y=b[b.length-1]:y=null,B!==null&&B.renderEnd()};function Ea(N,J,he,re){if(N.visible===!1)return;if(N.layers.test(J.layers)){if(N.isGroup)he=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(J);else if(N.isLight)E.pushLight(N),N.castShadow&&E.pushShadow(N);else if(N.isSprite){let Ye=J.isArrayCamera?_e:ee;if(!N.frustumCulled||N.intersectsFrustum(Ye)){re&&Fe.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Ee);let Ne=le.update(N),He=N.material;He.visible&&y.push(N,Ne,He,he,Fe.z,null,J)}}else if(N.isMesh||N.isLine||N.isPoints){let Ye=J.isArrayCamera?_e:ee;if(!N.frustumCulled||N.intersectsFrustum(Ye)){let Ne=le.update(N),He=N.material;if(re&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Fe.copy(N.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Fe.copy(Ne.boundingSphere.center)),Fe.applyMatrix4(N.matrixWorld).applyMatrix4(Ee)),Array.isArray(He)){let et=Ne.groups;for(let pt=0,yt=et.length;pt<yt;pt++){let je=et[pt],Mt=He[je.materialIndex];Mt&&Mt.visible&&y.push(N,Ne,Mt,he,Fe.z,je,J)}}else He.visible&&y.push(N,Ne,He,he,Fe.z,null,J)}}}let Ue=N.children;for(let Ye=0,Ne=Ue.length;Ye<Ne;Ye++)Ea(Ue[Ye],J,he,re)}function No(N,J,he,re){let{opaque:ae,transmissive:Ue,transparent:Ye}=N;E.setupLightsView(he),be===!0&&oe.setGlobalState(S.clippingPlanes,he),re&&ne.viewport(O.copy(re)),ae.length>0&&Oo(ae,J,he),Ue.length>0&&Oo(Ue,J,he),Ye.length>0&&Oo(Ye,J,he),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function Uo(N,J,he,re){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[re.id]===void 0){let je=Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[re.id]=new qt(1,1,{generateMipmaps:!0,type:je?wt:ot,minFilter:Ht,samples:Math.max(4,Pe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xt.workingColorSpace})}let Ue=E.state.transmissionRenderTarget[re.id],Ye=re.viewport||O;Ue.setSize(Ye.z*S.transmissionResolutionScale,Ye.w*S.transmissionResolutionScale);let Ne=S.getRenderTarget(),He=S.getActiveCubeFace(),et=S.getActiveMipmapLevel();S.setRenderTarget(Ue),S.getClearColor(Q),q=S.getClearAlpha(),q<1&&S.setClearColor(16777215,.5),S.clear(),qe&&W.render(he);let pt=S.toneMapping;S.toneMapping=bi;let yt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),E.setupLightsView(re),be===!0&&oe.setGlobalState(S.clippingPlanes,re),Oo(N,he,re),Qe.updateMultisampleRenderTarget(Ue),Qe.updateRenderTargetMipmap(Ue),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Mt=0,en=J.length;Mt<en;Mt++){let Vt=J[Mt],{object:Gt,geometry:mn,material:Ze,group:Mn}=Vt;if(Ze.side===Lt&&Gt.layers.test(re.layers)){let Rt=Ze.side;Ze.side=Zt,Ze.needsUpdate=!0,gd(Gt,he,re,mn,Ze,Mn),Ze.side=Rt,Ze.needsUpdate=!0,je=!0}}je===!0&&(Qe.updateMultisampleRenderTarget(Ue),Qe.updateRenderTargetMipmap(Ue))}S.setRenderTarget(Ne,He,et),S.setClearColor(Q,q),yt!==void 0&&(re.viewport=yt),S.toneMapping=pt}function Oo(N,J,he){let re=J.isScene===!0?J.overrideMaterial:null;for(let ae=0,Ue=N.length;ae<Ue;ae++){let Ye=N[ae],{object:Ne,geometry:He,group:et}=Ye,pt=Ye.material;pt.allowOverride===!0&&re!==null&&(pt=re),Ne.layers.test(he.layers)&&gd(Ne,J,he,He,pt,et)}}function gd(N,J,he,re,ae,Ue){B!==null&&ae.isNodeMaterial&&B.setObject(N,ae),N.onBeforeRender(S,J,he,re,ae,Ue),N.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),ae.onBeforeRender(S,J,he,re,N,Ue),ae.transparent===!0&&ae.side===Lt&&ae.forceSinglePass===!1?(ae.side=Zt,ae.needsUpdate=!0,S.renderBufferDirect(he,J,re,ae,N,Ue),ae.side=Nn,ae.needsUpdate=!0,S.renderBufferDirect(he,J,re,ae,N,Ue),ae.side=Lt):S.renderBufferDirect(he,J,re,ae,N,Ue),N.onAfterRender(S,J,he,re,ae,Ue)}function xd(N){let J=0;for(let he of N)he.texture!==null&&J++;return J}function Sa(N,J,he){J.isScene!==!0&&(J=nt);let re=Ge.get(N),ae=E.state.lights,Ue=E.state.shadowsArray,Ye=ae.state.version,Ne=te.getParameters(N,ae.state,Ue,J,he,E.state.lightProbeGridArray),He=te.getProgramCacheKey(Ne),et=re.programs;re.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?J.environment:null,re.fog=J.fog;let pt=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;re.envMap=G.get(N.envMap||re.environment,pt),re.envMapRotation=re.environment!==null&&N.envMap===null?J.environmentRotation:N.envMapRotation,et===void 0&&(N.addEventListener("dispose",ht),et=new Map,re.programs=et,re.programVariants=new Map);let yt=et.get(He);if(yt!==void 0){if(re.currentProgram===yt&&re.lightsStateVersion===Ye)return bd(N,Ne),yt}else Ne.uniforms=te.getUniforms(N),B!==null&&N.isNodeMaterial&&B.build(N,he,Ne),N.onBeforeCompile(Ne,S),yt=te.acquireProgram(Ne,He),et.set(He,yt),re.uniforms=Ne.uniforms;let je=re.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(je.clippingPlanes=oe.uniform),bd(N,Ne),re.needsLights=Wg(N),re.lightsStateVersion=Ye,re.needsLights&&(je.ambientLightColor.value=ae.state.ambient,je.lightProbe.value=ae.state.probe,je.sunLights.value=ae.state.sun,je.sunLightShadows.value=ae.state.sunShadow,je.directionalLights.value=ae.state.directional,je.directionalLightShadows.value=ae.state.directionalShadow,je.spotLights.value=ae.state.spot,je.spotLightShadows.value=ae.state.spotShadow,je.rectAreaLights.value=ae.state.rectArea,je.ltc_1.value=ae.state.rectAreaLTC1,je.ltc_2.value=ae.state.rectAreaLTC2,je.pointLights.value=ae.state.point,je.pointLightShadows.value=ae.state.pointShadow,je.hemisphereLights.value=ae.state.hemi,je.sunShadowMatrix.value=ae.state.sunShadowMatrix,je.sunShadowCascade.value=ae.state.sunShadowCascade,je.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,je.spotLightMatrix.value=ae.state.spotLightMatrix,je.spotLightMap.value=ae.state.spotLightMap,je.pointShadowMatrix.value=ae.state.pointShadowMatrix),re.numLightProbeGrids=xd(E.state.lightProbeGridArray),re.currentProgram=yt,re.uniformsList=null,yt}function zg(N,J,he,re,ae){let Ue=Ge.get(N),Ye=Ue.currentProgram.id+","+re+","+ae,Ne=Ue.programVariants.get(Ye);return Ne===void 0?(Ne=Sa(N,J,he),Ue.programVariants.set(Ye,Ne)):(Ue.currentProgram=Ne,Ue.uniformsList=null,Ue.outputColorSpace=re,Ue.toneMapping=ae),Ne}function _d(N){if(N.uniformsList===null){let J=N.currentProgram.getUniforms();N.uniformsList=pa.seqWithValue(J.seq,N.uniforms)}return N.uniformsList}function bd(N,J){let he=Ge.get(N);he.outputColorSpace=J.outputColorSpace,he.batching=J.batching,he.batchingColor=J.batchingColor,he.instancing=J.instancing,he.instancingColor=J.instancingColor,he.instancingMorph=J.instancingMorph,he.skinning=J.skinning,he.morphTargets=J.morphTargets,he.morphNormals=J.morphNormals,he.morphColors=J.morphColors,he.morphTargetsCount=J.morphTargetsCount,he.numClippingPlanes=J.numClippingPlanes,he.numIntersection=J.numClipIntersection,he.vertexAlphas=J.vertexAlphas,he.vertexTangents=J.vertexTangents,he.toneMapping=J.toneMapping}function Vg(N,J,he,re,ae){J.isScene!==!0&&(J=nt),Qe.resetTextureUnits();let Ue=J.fog,Ye=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?J.environment:null,Ne=H===null?S.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:xt.workingColorSpace,He=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,et=G.get(re.envMap||Ye,He),pt=re.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,yt=!!he.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),je=!!he.morphAttributes.position,Mt=!!he.morphAttributes.normal,en=!!he.morphAttributes.color,Vt=bi;re.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Vt=S.toneMapping);let Gt=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,mn=Gt!==void 0?Gt.length:0,Ze=Ge.get(re),Mn=E.state.lights;if(be===!0&&(ve===!0||N!==L)){let Wt=N===L&&re.id===U;oe.setState(re,N,Wt)}let Rt=!1,Ms=!1;re.version===Ze.__version?Ze.needsLights&&Ze.lightsStateVersion!==Mn.state.version||ae.isBatchedMesh&&Ze.batching===!1||!ae.isBatchedMesh&&Ze.batching===!0||ae.isBatchedMesh&&Ze.batchingColor===!0&&ae._colorsTexture===null||ae.isBatchedMesh&&Ze.batchingColor===!1&&ae._colorsTexture!==null||ae.isInstancedMesh&&Ze.instancing===!1||!ae.isInstancedMesh&&Ze.instancing===!0||ae.isSkinnedMesh&&Ze.skinning===!1||!ae.isSkinnedMesh&&Ze.skinning===!0||ae.isInstancedMesh&&Ze.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&Ze.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&Ze.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&Ze.instancingMorph===!1&&ae.morphTexture!==null||Ze.envMap!==et||re.fog===!0&&Ze.fog!==Ue||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==oe.numPlanes||Ze.numIntersection!==oe.numIntersection)||Ze.vertexAlphas!==pt||Ze.vertexTangents!==yt||Ze.morphTargets!==je||Ze.morphNormals!==Mt||Ze.morphColors!==en||Ze.morphTargetsCount!==mn||Ze.numLightProbeGrids!==xd(E.state.lightProbeGridArray)?Rt=!0:(Ze.outputColorSpace!==Ne||Ze.toneMapping!==Vt)&&(Ms=!0):(Rt=!0,Ze.__version=re.version);let gn=Ze.currentProgram;(Rt===!0||Ms===!0)&&(gn=Ms===!0?zg(re,J,ae,Ne,Vt):Sa(re,J,ae),B&&re.isNodeMaterial&&B.onUpdateProgram(re,gn,Ze));let ko=!1,ji=!1,Es=!1,St=gn.getUniforms(),fn=Ze.uniforms;if(ne.useProgram(gn.program)&&(ko=!0,ji=!0,Es=!0),re.id!==U&&(U=re.id,ji=!0),ko||L!==N){ne.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),St.setValue(z,"projectionMatrix",N.projectionMatrix),St.setValue(z,"viewMatrix",N.matrixWorldInverse);let hn=St.map.cameraPosition;hn!==void 0&&hn.setValue(z,Ke.setFromMatrixPosition(N.matrixWorld)),Pe.logarithmicDepthBuffer&&St.setValue(z,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&St.setValue(z,"isOrthographic",N.isOrthographicCamera===!0),L!==N&&(L=N,ji=!0,Es=!0)}if(Ze.needsLights&&(Mn.state.sunShadowMap.length>0&&St.setValue(z,"sunShadowMap",Mn.state.sunShadowMap,Qe),Mn.state.directionalShadowMap.length>0&&St.setValue(z,"directionalShadowMap",Mn.state.directionalShadowMap,Qe),Mn.state.spotShadowMap.length>0&&St.setValue(z,"spotShadowMap",Mn.state.spotShadowMap,Qe),Mn.state.pointShadowMap.length>0&&St.setValue(z,"pointShadowMap",Mn.state.pointShadowMap,Qe)),ae.isSkinnedMesh){St.setOptional(z,ae,"bindMatrix"),St.setOptional(z,ae,"bindMatrixInverse");let Wt=ae.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),St.setValue(z,"boneTexture",Wt.boneTexture,Qe))}ae.isBatchedMesh&&(St.setOptional(z,ae,"batchingTexture"),St.setValue(z,"batchingTexture",ae._matricesTexture,Qe),St.setOptional(z,ae,"batchingIdTexture"),St.setValue(z,"batchingIdTexture",ae._indirectTexture,Qe),St.setOptional(z,ae,"batchingColorTexture"),ae._colorsTexture!==null&&St.setValue(z,"batchingColorTexture",ae._colorsTexture,Qe));let ei=he.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&ce.update(ae,he,gn),(ji||Ze.receiveShadow!==ae.receiveShadow)&&(Ze.receiveShadow=ae.receiveShadow,St.setValue(z,"receiveShadow",ae.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&J.environment!==null&&(fn.envMapIntensity.value=J.environmentIntensity),fn.dfgLUT!==void 0&&(fn.dfgLUT.value=lM()),ji){if(St.setValue(z,"toneMappingExposure",S.toneMappingExposure),Ze.needsLights&&Hg(fn,Es),Ue&&re.fog===!0&&Ae.refreshFogUniforms(fn,Ue),Ae.refreshMaterialUniforms(fn,re,de,ue,E.state.transmissionRenderTarget[N.id]),Ze.needsLights&&Ze.numLightProbeGrids>0){let Wt=_,hn=0;for(let Si of E.state.lightProbeGridArray)Si.texture!==null&&(Wt.textures[hn]=Si.texture,Wt.min[hn]=Si.boundingBox.min,Wt.max[hn]=Si.boundingBox.max,Wt.resolution[hn]=Si.resolution,hn++);for(let Si in Wt)Wt[Si].length=hn;fn.probesSH.value=Wt.textures,fn.probesMin.value=Wt.min,fn.probesMax.value=Wt.max,fn.probesResolution.value=Wt.resolution}pa.upload(z,_d(Ze),fn,Qe)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(pa.upload(z,_d(Ze),fn,Qe),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&St.setValue(z,"center",ae.center),St.setValue(z,"modelViewMatrix",ae.modelViewMatrix),St.setValue(z,"normalMatrix",ae.normalMatrix),St.setValue(z,"modelMatrix",ae.matrixWorld),re.uniformsGroups!==void 0){let Wt=re.uniformsGroups;for(let hn=0,Si=Wt.length;hn<Si;hn++){let yd=Wt[hn];We.update(yd,gn),We.bind(yd,gn)}}return gn}function Hg(N,J){N.ambientLightColor.needsUpdate=J,N.lightProbe.needsUpdate=J,N.sunLights.needsUpdate=J,N.sunLightShadows.needsUpdate=J,N.directionalLights.needsUpdate=J,N.directionalLightShadows.needsUpdate=J,N.pointLights.needsUpdate=J,N.pointLightShadows.needsUpdate=J,N.spotLights.needsUpdate=J,N.spotLightShadows.needsUpdate=J,N.rectAreaLights.needsUpdate=J,N.hemisphereLights.needsUpdate=J}function Wg(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(N,J,he){let re=Ge.get(N);re.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),Ge.get(N.texture).__webglTexture=J,Ge.get(N.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:he,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,J){let he=Ge.get(N);he.__webglFramebuffer=J,he.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(N,J=0,he=0){H=N,F=J,P=he;let re=null,ae=!1,Ue=!1;if(N){let Ne=Ge.get(N);if(Ne.__useDefaultFramebuffer!==void 0){ne.bindFramebuffer(z.FRAMEBUFFER,Ne.__webglFramebuffer),O.copy(N.viewport),V.copy(N.scissor),j=N.scissorTest,ne.viewport(O),ne.scissor(V),ne.setScissorTest(j),U=-1;return}else if(Ne.__webglFramebuffer===void 0)Qe.setupRenderTarget(N);else if(Ne.__hasExternalTextures)Qe.rebindTextures(N,Ge.get(N.texture).__webglTexture,Ge.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){let pt=N.depthTexture;if(Ne.__boundDepthTexture!==pt){if(pt!==null&&Ge.has(pt)&&(N.width!==pt.image.width||N.height!==pt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Qe.setupDepthRenderbuffer(N)}}let He=N.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Ue=!0);let et=Ge.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(et[J])?re=et[J][he]:re=et[J],ae=!0):N.samples>0&&Qe.useMultisampledRTT(N)===!1?re=Ge.get(N).__webglMultisampledFramebuffer:Array.isArray(et)?re=et[he]:re=et,O.copy(N.viewport),V.copy(N.scissor),j=N.scissorTest}else O.copy(fe).multiplyScalar(de).floor(),V.copy(Be).multiplyScalar(de).floor(),j=we;if(he!==0&&(re=D),ne.bindFramebuffer(z.FRAMEBUFFER,re)&&ne.drawBuffers(N,re),ne.viewport(O),ne.scissor(V),ne.setScissorTest(j),ae){let Ne=Ge.get(N.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ne.__webglTexture,he)}else if(Ue){let Ne=J;for(let He=0;He<N.textures.length;He++){let et=Ge.get(N.textures[He]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+He,et.__webglTexture,he,Ne)}}else if(N!==null&&he!==0){let Ne=Ge.get(N.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ne.__webglTexture,he)}U=-1};function vd(N){let J=Ge.get(N);return(J.__readFormat!==N.format||J.__readType!==N.type)&&(J.__readFormat=N.format,J.__readType=N.type,J.__formatReadable=Pe.textureFormatReadable(N.format),J.__typeReadable=Pe.textureTypeReadable(N.type)),J}this.readRenderTargetPixels=function(N,J,he,re,ae,Ue,Ye,Ne=0){if(!(N&&N.isWebGLRenderTarget)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=Ge.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ye!==void 0&&(He=He[Ye],Array.isArray(He)&&(He=He[0])),He){ne.bindFramebuffer(z.FRAMEBUFFER,He);try{let et=N.textures[Ne],pt=et.format,yt=et.type;N.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ne);let je=vd(et);if(je.__formatReadable===!1){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(je.__typeReadable===!1){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=N.width-re&&he>=0&&he<=N.height-ae&&z.readPixels(J,he,re,ae,ye.convert(pt),ye.convert(yt),Ue)}finally{let et=H!==null?Ge.get(H).__webglFramebuffer:null;ne.bindFramebuffer(z.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(N,J,he,re,ae,Ue,Ye,Ne=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=Ge.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ye!==void 0&&(He=He[Ye],Array.isArray(He)&&(He=He[0])),He)if(J>=0&&J<=N.width-re&&he>=0&&he<=N.height-ae){ne.bindFramebuffer(z.FRAMEBUFFER,He);let et=N.textures[Ne],pt=et.format,yt=et.type;N.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ne);let je=vd(et);if(je.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(je.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Mt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Mt),z.bufferData(z.PIXEL_PACK_BUFFER,Ue.byteLength,z.STREAM_READ),z.readPixels(J,he,re,ae,ye.convert(pt),ye.convert(yt),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let en=H!==null?Ge.get(H).__webglFramebuffer:null;ne.bindFramebuffer(z.FRAMEBUFFER,en);let Vt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await tp(z,Vt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Mt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Ue),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(Mt),z.deleteSync(Vt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,J=null,he=0){let re=Math.pow(2,-he),ae=Math.floor(N.image.width*re),Ue=Math.floor(N.image.height*re),Ye=J!==null?J.x:0,Ne=J!==null?J.y:0;Qe.setTexture2D(N,0),z.copyTexSubImage2D(z.TEXTURE_2D,he,0,0,Ye,Ne,ae,Ue),ne.unbindTexture()},this.copyTextureToTexture=function(N,J,he=null,re=null,ae=0,Ue=0){let Ye,Ne,He,et,pt,yt,je,Mt,en,Vt=N.isCompressedTexture?N.mipmaps[Ue]:N.image;if(he!==null)Ye=he.max.x-he.min.x,Ne=he.max.y-he.min.y,He=he.isBox3?he.max.z-he.min.z:1,et=he.min.x,pt=he.min.y,yt=he.isBox3?he.min.z:0;else{let St=Math.pow(2,-ae);Ye=Math.floor(Vt.width*St),Ne=Math.floor(Vt.height*St),N.isDataArrayTexture?He=Vt.depth:N.isData3DTexture?He=Math.floor(Vt.depth*St):He=1,et=0,pt=0,yt=0}re!==null?(je=re.x,Mt=re.y,en=re.z):(je=0,Mt=0,en=0);let Gt=ye.convert(J.format),mn=ye.convert(J.type),Ze;J.isData3DTexture?(Qe.setTexture3D(J,0),Ze=z.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(Qe.setTexture2DArray(J,0),Ze=z.TEXTURE_2D_ARRAY):(Qe.setTexture2D(J,0),Ze=z.TEXTURE_2D),ne.activeTexture(z.TEXTURE0),ne.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,J.flipY),ne.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),ne.pixelStorei(z.UNPACK_ALIGNMENT,J.unpackAlignment);let Mn=ne.getParameter(z.UNPACK_ROW_LENGTH),Rt=ne.getParameter(z.UNPACK_IMAGE_HEIGHT),Ms=ne.getParameter(z.UNPACK_SKIP_PIXELS),gn=ne.getParameter(z.UNPACK_SKIP_ROWS),ko=ne.getParameter(z.UNPACK_SKIP_IMAGES);ne.pixelStorei(z.UNPACK_ROW_LENGTH,Vt.width),ne.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Vt.height),ne.pixelStorei(z.UNPACK_SKIP_PIXELS,et),ne.pixelStorei(z.UNPACK_SKIP_ROWS,pt),ne.pixelStorei(z.UNPACK_SKIP_IMAGES,yt);let ji=N.isDataArrayTexture||N.isData3DTexture,Es=J.isDataArrayTexture||J.isData3DTexture;if(N.isDepthTexture){let St=Ge.get(N),fn=Ge.get(J),ei=Ge.get(St.__renderTarget),Wt=Ge.get(fn.__renderTarget);ne.bindFramebuffer(z.READ_FRAMEBUFFER,ei.__webglFramebuffer),ne.bindFramebuffer(z.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let hn=0;hn<He;hn++)ji&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ge.get(N).__webglTexture,ae,yt+hn),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ge.get(J).__webglTexture,Ue,en+hn)),z.blitFramebuffer(et,pt,et+Ye,pt+Ne,je,Mt,je+Ye,Mt+Ne,z.DEPTH_BUFFER_BIT,z.NEAREST);ne.bindFramebuffer(z.READ_FRAMEBUFFER,null),ne.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(ae!==0||N.isRenderTargetTexture||Ge.has(N)){let St=Ge.get(N),fn=Ge.get(J);ne.bindFramebuffer(z.READ_FRAMEBUFFER,R),ne.bindFramebuffer(z.DRAW_FRAMEBUFFER,k);for(let ei=0;ei<He;ei++)ji?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,St.__webglTexture,ae,yt+ei):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,St.__webglTexture,ae),Es?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,fn.__webglTexture,Ue,en+ei):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,fn.__webglTexture,Ue),ae!==0?z.blitFramebuffer(et,pt,et+Ye,pt+Ne,je,Mt,je+Ye,Mt+Ne,z.COLOR_BUFFER_BIT,z.NEAREST):Es?z.copyTexSubImage3D(Ze,Ue,je,Mt,en+ei,et,pt,Ye,Ne):z.copyTexSubImage2D(Ze,Ue,je,Mt,et,pt,Ye,Ne);ne.bindFramebuffer(z.READ_FRAMEBUFFER,null),ne.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Es?N.isDataTexture||N.isData3DTexture?z.texSubImage3D(Ze,Ue,je,Mt,en,Ye,Ne,He,Gt,mn,Vt.data):J.isCompressedArrayTexture?z.compressedTexSubImage3D(Ze,Ue,je,Mt,en,Ye,Ne,He,Gt,Vt.data):z.texSubImage3D(Ze,Ue,je,Mt,en,Ye,Ne,He,Gt,mn,Vt):N.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Ue,je,Mt,Ye,Ne,Gt,mn,Vt.data):N.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Ue,je,Mt,Vt.width,Vt.height,Gt,Vt.data):z.texSubImage2D(z.TEXTURE_2D,Ue,je,Mt,Ye,Ne,Gt,mn,Vt);ne.pixelStorei(z.UNPACK_ROW_LENGTH,Mn),ne.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Rt),ne.pixelStorei(z.UNPACK_SKIP_PIXELS,Ms),ne.pixelStorei(z.UNPACK_SKIP_ROWS,gn),ne.pixelStorei(z.UNPACK_SKIP_IMAGES,ko),Ue===0&&J.generateMipmaps===!0&&J.mipmapsAutoUpdate===!0&&z.generateMipmap(Ze),ne.unbindTexture()},this.initRenderTarget=function(N){Ge.get(N).__webglFramebuffer===void 0&&Qe.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?Qe.setTextureCube(N,0):N.isData3DTexture?Qe.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?Qe.setTexture2DArray(N,0):Qe.setTexture2D(N,0),ne.unbindTexture()},this.resetState=function(){F=0,P=0,H=null,ne.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}}});function un(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new ut;c.morphTargetsRelative=o;let l=0;for(let u=0;u<i.length;++u){let d=i[u],h=0,f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==i[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.morphAttributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,u),l+=p}}if(t){let u=0,d=[];for(let h=0;h<i.length;++h){let f=i[h].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+u);u+=i[h].attributes.position.count}c.setIndex(d)}for(let u in r){let d=Vp(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,d)}for(let u in a){let d=a[u][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<d;++h){let f=[];for(let g=0;g<a[u].length;++g)f.push(a[u][g][h]);let p=Vp(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(p)}}}return c}function Vp(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let u=i[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let a=new e(r),o=new Et(a,t,n),c=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute){let d=c/t;for(let h=0,f=u.count;h<f;h++)for(let p=0;p<t;p++){let g=u.getComponent(h,p);o.setComponent(h+d,p,g)}}else a.set(u.array,c);c+=u.count*t}return s!==void 0&&(o.gpuType=s),o}function Ah(i,e){if(e===Vu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===fa||e===bo){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===fa)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var ci=ct(()=>{gt()});function Hp(i){let e=new Map,t=new Map,n=i.clone();return Wp(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Wp(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Wp(i.children[n],e.children[n],t)}var Kp=ct(()=>{});function uM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Jt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}function fM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new at({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Nn})),i.DefaultMaterial}function sr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Mi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function pM(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){let d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){let d=e[l];if(n){let h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;a.push(h)}if(s){let h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;o.push(h)}if(r){let h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;c.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let u=l[0],d=l[1],h=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=d),r&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function AM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function mM(i){let e,t=i.extensions&&i.extensions[bt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+xh(t.attributes):e=i.indices+":"+xh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+xh(i.targets[n]);return e}function xh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Vh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function gM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}function _M(i,e,t){let n=e.attributes,s=new it;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new T(c[0],c[1],c[2]),new T(l[0],l[1],l[2])),o.normalized){let u=Vh(ga[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new T,c=new T;for(let l=0,u=r.length;l<u;l++){let d=r[l];if(d.POSITION!==void 0){let h=t.json.accessors[d.POSITION],f=h.min,p=h.max;if(f!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),h.normalized){let g=Vh(ga[h.componentType]);c.multiplyScalar(g)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new bn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Yp(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=zh[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return xt.workingColorSpace!==on&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${xt.workingColorSpace}" not supported.`),Mi(i,e),_M(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?pM(i,e.targets,t):i})}var xa,bt,_h,bh,vh,yh,Mh,Eh,Sh,wh,Ch,Th,Ih,Rh,Bh,Dh,Fh,Ph,Lh,bl,Nh,jp,Eo,qp,Uh,Oh,kh,Gh,vl,hM,Qh,$n,ga,Xp,Jp,mh,zh,bs,dM,gh,xM,Hh,Wh=ct(()=>{gt();ci();Kp();xa=class extends Kn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new yh(t)}),this.register(function(t){return new Mh(t)}),this.register(function(t){return new Eh(t)}),this.register(function(t){return new Fh(t)}),this.register(function(t){return new Ph(t)}),this.register(function(t){return new Lh(t)}),this.register(function(t){return new wh(t)}),this.register(function(t){return new Ch(t)}),this.register(function(t){return new Th(t)}),this.register(function(t){return new Ih(t)}),this.register(function(t){return new vh(t)}),this.register(function(t){return new Rh(t)}),this.register(function(t){return new Sh(t)}),this.register(function(t){return new Dh(t)}),this.register(function(t){return new Bh(t)}),this.register(function(t){return new _h(t)}),this.register(function(t){return new bl(t,bt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new bl(t,bt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Nh(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Gi.extractUrlBase(e);a=Gi.resolveURL(l,this.path)}else a=Gi.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new ai(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===jp){try{a[bt.KHR_BINARY_GLTF]=new Uh(e)}catch(d){s&&s(d);return}r=JSON.parse(a[bt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Hh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let d=this.pluginCallbacks[u](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let d=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(d){case bt.KHR_MATERIALS_UNLIT:a[d]=new bh;break;case bt.KHR_DRACO_MESH_COMPRESSION:a[d]=new Oh(r,this.dracoLoader);break;case bt.KHR_TEXTURE_TRANSFORM:a[d]=new kh;break;case bt.KHR_MESH_QUANTIZATION:a[d]=new Gh;break;default:h.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};bt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},_h=class{constructor(e){this.parser=e,this.name=bt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,u=new Oe(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],on);let d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Hs(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new qn(u),l.distance=d;break;case"spot":l=new zs(u),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Mi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},bh=class{constructor(){this.name=bt.KHR_MATERIALS_UNLIT}getMaterialType(){return Bn}extendParams(e,t,n){let s=[];e.color=new Oe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],on),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,dt))}return Promise.all(s)}},vh=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},yh=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new me(r,r)}return Promise.all(s)}},Mh=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},Eh=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Sh=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},wh=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Oe(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],on)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,dt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Ch=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Th=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Oe().setRGB(r[0],r[1],r[2],on),Promise.all(s)}},Ih=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_IOR}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Rh=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Oe().setRGB(r[0],r[1],r[2],on),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,dt)),Promise.all(s)}},Bh=class{constructor(e){this.parser=e,this.name=bt.EXT_MATERIALS_BUMP}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Dh=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Fh=class{constructor(e){this.parser=e,this.name=bt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Ph=class{constructor(e){this.parser=e,this.name=bt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Lh=class{constructor(e){this.parser=e,this.name=bt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},bl=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,u=s.count,d=s.byteStride,h=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,d,h,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(u*d);return a.decodeGltfBuffer(new Uint8Array(f),u,d,h,s.mode,s.filter),f})})}else return null}},Nh=class{constructor(e){this.name=bt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==$n.TRIANGLES&&l.mode!==$n.TRIANGLE_STRIP&&l.mode!==$n.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let u=l.pop(),d=u.isGroup?u.children:[u],h=l[0].count,f=[];for(let p of d){let g=new Re,m=new T,A=new Qt,x=new T(1,1,1),v=new Pn(p.geometry,p.material,h);for(let y=0;y<h;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&A.fromBufferAttribute(c.ROTATION,y),c.SCALE&&x.fromBufferAttribute(c.SCALE,y),v.setMatrixAt(y,g.compose(m,A,x));let _=null;for(let y in c)if(y==="_COLOR_0"){let E=c[y];v.instanceColor=new Fn(E.array,E.itemSize,E.normalized)}else if(y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"){if(_===null){let b=v.geometry;_=new ut,_.name=b.name;for(let M in b.attributes)_.setAttribute(M,b.attributes[M]);for(let M in b.morphAttributes)_.morphAttributes[M]=b.morphAttributes[M];b.index!==null&&_.setIndex(b.index),_.morphTargetsRelative=b.morphTargetsRelative;for(let M of b.groups)_.addGroup(M.start,M.count,M.materialIndex);b.boundingBox!==null&&(_.boundingBox=b.boundingBox.clone()),b.boundingSphere!==null&&(_.boundingSphere=b.boundingSphere.clone()),_.drawRange.start=b.drawRange.start,_.drawRange.count=b.drawRange.count,_.userData=Object.assign({},b.userData),v.geometry=_}let E=c[y];_.setAttribute(y,new Fn(E.array,E.itemSize,E.normalized))}Ft.prototype.copy.call(v,p),this.parser.assignFinalMaterial(v),f.push(v)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},jp="glTF",Eo=12,qp={JSON:1313821514,BIN:5130562},Uh=class{constructor(e){this.name=bt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Eo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==jp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Eo,r=new DataView(e,Eo),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===qp.JSON){let l=new Uint8Array(e,Eo+a,o);this.content=n.decode(l)}else if(c===qp.BIN){let l=Eo+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Oh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=bt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let u in a){let d=zh[u]||u.toLowerCase();o[d]=a[u]}for(let u in e.attributes){let d=zh[u]||u.toLowerCase();if(a[u]!==void 0){let h=n.accessors[e.attributes[u]],f=ga[h.componentType];l[d]=f.name,c[d]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(d,h){s.decodeDracoFile(u,function(f){for(let p in f.attributes){let g=f.attributes[p],m=c[p];m!==void 0&&(g.normalized=m)}d(f)},o,l,on,h)})})}},kh=class{constructor(){this.name=bt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Gh=class{constructor(){this.name=bt.KHR_MESH_QUANTIZATION}},vl=class extends _i{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=s-t,d=(n-t)/u,h=d*d,f=h*d,p=e*l,g=p-l,m=-2*f+3*h,A=f-h,x=1-m,v=A-h+d;for(let _=0;_!==o;_++){let y=a[g+_+o],E=a[g+_+c]*u,b=a[p+_+o],M=a[p+_]*u;r[_]=x*y+v*E+m*b+A*M}return r}},hM=new Qt,Qh=class extends vl{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return hM.fromArray(r).normalize().toArray(r),r}},$n={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ga={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Xp={9728:Pt,9729:vt,9984:ea,9985:ta,9986:qs,9987:Ht},Jp={33071:wn,33648:Br,10497:an},mh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},zh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},bs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},dM={CUBICSPLINE:void 0,LINEAR:Ds,STEP:Bs},gh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};xM=new Re,Hh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new uM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?(this.textureLoader=new pn(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new mo(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ai(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return sr(r,o,s),Mi(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,u]of a.children.entries())r(u,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[bt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Gi.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=mh[s.type],o=ga[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new Et(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=mh[s.type],l=ga[s.componentType],u=l.BYTES_PER_ELEMENT,d=u*c,h=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,g,m;if(f&&f!==d){let A=Math.floor(h/f),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+A+":"+s.count,v=t.cache.get(x);v||(g=new l(o,A*f,s.count*f/u),v=new Ls(g,f/u),t.cache.add(x,v)),m=new rs(v,c,h%f/u,p)}else o===null?g=new l(s.count*c):g=new l(o,h,s.count*c),m=new Et(g,c,p);if(s.sparse!==void 0){let A=mh.SCALAR,x=ga[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,y=new x(a[1],v,s.sparse.count*A),E=new l(a[2],_,s.sparse.count*c);o!==null&&(m=new Et(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let b=0,M=y.length;b<M;b++){let I=y[b];if(m.setX(I,E[b*c]),c>=2&&m.setY(I,E[b*c+1]),c>=3&&m.setZ(I,E[b*c+2]),c>=4&&m.setW(I,E[b*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let h=(r.samplers||{})[a.sampler]||{};return u.magFilter=Xp[h.magFilter]||vt,u.minFilter=Xp[h.minFilter]||Ht,u.wrapS=Jp[h.wrapS]||an,u.wrapT=Jp[h.wrapT]||an,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Pt&&u.minFilter!==vt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1,u;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)u=n.getDependency("bufferView",a.bufferView).then(function(h){return new Promise(function(f,p){t.parse(h,f,p)})});else{if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;let f=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");u=Promise.resolve(c).then(function(h){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(m){let A=new nn(m);A.needsUpdate=!0,f(A)}),t.load(Gi.resolveURL(h,r.path),g,void 0,p)})})}let d=u.then(function(h){return l===!0&&o.revokeObjectURL(c),Mi(h,a),h.userData.mimeType=a.mimeType||gM(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=d,d}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[bt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[bt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[bt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new zr,Cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Qr,Cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return at}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[bt.KHR_MATERIALS_UNLIT]){let d=s[bt.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),l.push(d.extendParams(o,r,t))}else{let d=r.pbrMetallicRoughness||{};if(o.color=new Oe(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let h=d.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],on),o.opacity=h[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",d.baseColorTexture,dt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Lt);let u=r.alphaMode||gh.OPAQUE;if(u===gh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===gh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Bn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new me(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==Bn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Bn){let d=r.emissiveFactor;o.emissive=new Oe().setRGB(d[0],d[1],d[2],on)}return r.emissiveTexture!==void 0&&a!==Bn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,dt)),Promise.all(l).then(function(){let d=new a(o);return r.name&&(d.name=r.name),Mi(d,r),t.associations.set(d,{materials:e}),r.extensions&&sr(s,d,r),d})}createUniqueName(e){let t=Bt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[bt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Yp(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],u=mM(l),d=s[u];if(d)a.push(d.promise);else{let h;l.extensions&&l.extensions[bt.KHR_DRACO_MESH_COMPRESSION]?h=r(l):h=Yp(new ut,l,t),l.mode===$n.TRIANGLE_STRIP?h=h.then(f=>Ah(f,bo)):l.mode===$n.TRIANGLE_FAN&&(h=h.then(f=>Ah(f,fa))),s[u]={primitive:l,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let u=a[c].material===void 0?fM(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],d=[];for(let f=0,p=u.length;f<p;f++){let g=u[f],m=a[f],A,x=l[f];if(m.mode===$n.TRIANGLES||m.mode===$n.TRIANGLE_STRIP||m.mode===$n.TRIANGLE_FAN||m.mode===void 0){let v=r.isSkinnedMesh===!0,_=g.hasAttribute("skinIndex")&&g.hasAttribute("skinWeight");v&&_===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),A=v&&_?new Ja(g,x):new Le(g,x),A.isSkinnedMesh===!0&&A.normalizeSkinWeights()}else if(m.mode===$n.LINES)A=new ja(g,x);else if(m.mode===$n.LINE_STRIP)A=new Ns(g,x);else if(m.mode===$n.LINE_LOOP)A=new Za(g,x);else if(m.mode===$n.POINTS)A=new $a(g,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(A.geometry.morphAttributes).length>0&&AM(A,r),A.name=t.createUniqueName(r.name||"mesh_"+e),Mi(A,r),m.extensions&&sr(s,A,m),t.assignFinalMaterial(A),d.push(A)}for(let f=0,p=d.length;f<p;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&sr(s,d[0],r),d[0];let h=new st;r.extensions&&sr(s,h,r),t.associations.set(h,{meshes:e});for(let f=0,p=d.length;f<p;f++)h.add(d[f]);return h})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new rn(Je.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Vs(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Mi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,u=a.length;l<u;l++){let d=a[l];if(d){o.push(d);let h=new Re;r!==null&&h.fromArray(r.array,l*16),c.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ya(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let d=0,h=s.channels.length;d<h;d++){let f=s.channels[d],p=s.samplers[f.sampler],g=f.target,m=g.node,A=s.parameters!==void 0?s.parameters[p.input]:p.input,x=s.parameters!==void 0?s.parameters[p.output]:p.output;g.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",A)),c.push(this.getDependency("accessor",x)),l.push(p),u.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(d){let h=d[0],f=d[1],p=d[2],g=d[3],m=d[4],A=[];for(let v=0,_=h.length;v<_;v++){let y=h[v],E=f[v],b=p[v],M=g[v],I=m[v];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let S=n._createAnimationTracks(y,E,b,M,I);if(S)for(let C=0;C<S.length;C++)A.push(S[C])}let x=new po(r,void 0,A);return Mi(x,s),x})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let u=l[0],d=l[1],h=l[2];h!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(h,xM)});for(let f=0,p=d.length;f<p;f++)u.add(d[f]);if(u.userData.pivot!==void 0&&d.length>0){let f=u.userData.pivot,p=d[0];u.pivot=new T().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],p.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(r.isBone===!0?u=new Gr:l.length>1?u=new st:l.length===1?u=l[0]:u=new Ft,u!==l[0])for(let d=0,h=l.length;d<h;d++)u.add(l[d]);if(r.name&&(u.userData.name=r.name,u.name=a),Mi(u,r),r.extensions&&sr(n,u,r),r.matrix!==void 0){let d=new Re;d.fromArray(r.matrix),u.applyMatrix4(d)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let d=s.associations.get(u);s.associations.set(u,{...d})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new st;n.name&&(r.name=s.createUniqueName(n.name)),Mi(r,n),n.extensions&&sr(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,d=c.length;u<d;u++){let h=c[u];h.parent!==null?r.add(Hp(h)):r.add(h)}let l=u=>{let d=new Map;for(let[h,f]of s.associations)(h instanceof Cn||h instanceof nn)&&d.set(h,f);return u.traverse(h=>{let f=s.associations.get(h);f!=null&&d.set(h,f)}),d};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}bs[r.path]===bs.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let u;switch(bs[r.path]){case bs.weights:u=Ui;break;case bs.rotation:u=Oi;break;case bs.translation:case bs.scale:u=ds;break;default:n.itemSize===1?u=Ui:u=ds;break}let d=s.interpolation!==void 0?dM[s.interpolation]:Ds,h=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){let g=new u(c[f]+"."+bs[r.path],t.array,h,d);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Vh(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Oi?Qh:vl;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}});var yl,Zp=ct(()=>{yl=class{constructor(e=4){this.pool=e,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0,this.workerCreator=null}_initWorker(e){if(!this.workers[e]){let t=this.workerCreator();t.addEventListener("message",this._onMessage.bind(this,e)),this.workers[e]=t}}_getIdleWorker(){for(let e=0;e<this.pool;e++)if(!(this.workerStatus&1<<e))return e;return-1}_onMessage(e,t){let n=this.workersResolve[e];if(n&&n(t),this.queue.length){let{resolve:s,msg:r,transfer:a}=this.queue.shift();this.workersResolve[e]=s,this.workers[e].postMessage(r,a)}else this.workerStatus^=1<<e}setWorkerCreator(e){this.workerCreator=e}setWorkerLimit(e){this.pool=e}postMessage(e,t){return new Promise(n=>{let s=this._getIdleWorker();s!==-1?(this._initWorker(s),this.workerStatus|=1<<s,this.workersResolve[s]=n,this.workers[s].postMessage(e,t)):this.queue.push({resolve:n,msg:e,transfer:t})})}dispose(){this.workers.forEach(e=>e.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}});function $p(i){return new TextDecoder().decode(i)}function eA(i){let e=new Uint8Array(i.buffer,i.byteOffset,Rn.length);if(e[0]!==Rn[0]||e[1]!==Rn[1]||e[2]!==Rn[2]||e[3]!==Rn[3]||e[4]!==Rn[4]||e[5]!==Rn[5]||e[6]!==Rn[6]||e[7]!==Rn[7]||e[8]!==Rn[8]||e[9]!==Rn[9]||e[10]!==Rn[10]||e[11]!==Rn[11])throw new Error("Missing KTX 2.0 identifier.");let t={vkFormat:0,typeSize:1,pixelWidth:0,pixelHeight:0,pixelDepth:0,layerCount:0,faceCount:1,levelCount:0,supercompressionScheme:0,levels:[],dataFormatDescriptor:[{vendorId:0,descriptorType:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],keyValue:{},globalData:null},n=17*Uint32Array.BYTES_PER_ELEMENT,s=new rr(i,Rn.length,n,!0);t.vkFormat=s._nextUint32(),t.typeSize=s._nextUint32(),t.pixelWidth=s._nextUint32(),t.pixelHeight=s._nextUint32(),t.pixelDepth=s._nextUint32(),t.layerCount=s._nextUint32(),t.faceCount=s._nextUint32(),t.levelCount=s._nextUint32(),t.supercompressionScheme=s._nextUint32();let r=s._nextUint32(),a=s._nextUint32(),o=s._nextUint32(),c=s._nextUint32(),l=s._nextUint64(),u=s._nextUint64(),d=3*Math.max(t.levelCount,1)*8,h=new rr(i,Rn.length+n,d,!0);for(let O=0,V=Math.max(t.levelCount,1);O<V;O++)t.levels.push({levelData:new Uint8Array(i.buffer,i.byteOffset+h._nextUint64(),h._nextUint64()),uncompressedByteLength:h._nextUint64()});let f=new rr(i,r,a,!0);f._skip(4);let p=f._nextUint16(),g=f._nextUint16(),m=f._nextUint16(),A=f._nextUint16(),x={vendorId:p,descriptorType:g,versionNumber:m,colorModel:f._nextUint8(),colorPrimaries:f._nextUint8(),transferFunction:f._nextUint8(),flags:f._nextUint8(),texelBlockDimension:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],bytesPlane:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],samples:[]},v=(A/4-6)/4;for(let O=0;O<v;O++){let V={bitOffset:f._nextUint16(),bitLength:f._nextUint8(),channelType:f._nextUint8(),samplePosition:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],sampleLower:Number.NEGATIVE_INFINITY,sampleUpper:Number.POSITIVE_INFINITY};64&V.channelType?(V.sampleLower=f._nextInt32(),V.sampleUpper=f._nextInt32()):(V.sampleLower=f._nextUint32(),V.sampleUpper=f._nextUint32()),x.samples[O]=V}t.dataFormatDescriptor.length=0,t.dataFormatDescriptor.push(x);let _=new rr(i,o,c,!0);for(;_._offset<c;){let O=_._nextUint32(),V=_._scan(O),j=$p(V);if(t.keyValue[j]=_._nextUint8Array(O-V.byteLength-1),j.match(/^ktx/i)){let Q=$p(t.keyValue[j]);t.keyValue[j]=Q.substring(0,Q.lastIndexOf("\0"))}_._skip(O%4?4-O%4:0)}if(u<=0)return t;let y=new rr(i,l,u,!0),E=y._nextUint16(),b=y._nextUint16(),M=y._nextUint32(),I=y._nextUint32(),S=y._nextUint32(),C=y._nextUint32(),B=[];for(let O=0,V=Math.max(t.levelCount,1);O<V;O++)B.push({imageFlags:y._nextUint32(),rgbSliceByteOffset:y._nextUint32(),rgbSliceByteLength:y._nextUint32(),alphaSliceByteOffset:y._nextUint32(),alphaSliceByteLength:y._nextUint32()});let D=l+y._offset,R=D+M,k=R+I,F=k+S,P=new Uint8Array(i.buffer,i.byteOffset+D,M),H=new Uint8Array(i.buffer,i.byteOffset+R,I),U=new Uint8Array(i.buffer,i.byteOffset+k,S),L=new Uint8Array(i.buffer,i.byteOffset+F,C);return t.globalData={endpointCount:E,selectorCount:b,imageDescs:B,endpointsData:P,selectorsData:H,tablesData:U,extendedData:L},t}var rr,mw,Rn,tA=ct(()=>{rr=class{constructor(e,t,n,s){this._dataView=void 0,this._littleEndian=void 0,this._offset=void 0,this._dataView=new DataView(e.buffer,e.byteOffset+t,n),this._littleEndian=s,this._offset=0}_nextUint8(){let e=this._dataView.getUint8(this._offset);return this._offset+=1,e}_nextUint16(){let e=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,e}_nextUint32(){let e=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint64(){let e=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,e}_nextInt32(){let e=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint8Array(e){let t=new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+this._offset,e);return this._offset+=e,t}_skip(e){return this._offset+=e,this}_scan(e,t=0){let n=this._offset,s=0;for(;this._dataView.getUint8(this._offset)!==t&&s<e;)s++,this._offset++;return s<e&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+n,s)}},mw=new Uint8Array([0]),Rn=[171,75,84,88,32,50,48,187,13,10,26,10]});var Kh,qi,Xh,qh,Ml,nA,iA=ct(()=>{qh={env:{emscripten_notify_memory_growth:function(i){Xh=new Uint8Array(qi.exports.memory.buffer)}}},Ml=class{init(){return Kh||(Kh=typeof fetch<"u"?fetch("data:application/wasm;base64,"+nA).then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,qh)).then(this._init):WebAssembly.instantiate(Buffer.from(nA,"base64"),qh).then(this._init),Kh)}_init(e){qi=e.instance,qh.env.emscripten_notify_memory_growth(0)}decode(e,t=0){if(!qi)throw new Error("ZSTDDecoder: Await .init() before decoding.");let n=e.byteLength,s=qi.exports.malloc(n);Xh.set(e,s),t=t||Number(qi.exports.ZSTD_findDecompressedSize(s,n));let r=qi.exports.malloc(t),a=qi.exports.ZSTD_decompress(r,t,s,n),o=Xh.slice(r,r+a);return qi.exports.free(s),qi.exports.free(r),o}},nA="AGFzbQEAAAABpQEVYAF/AX9gAn9/AGADf39/AX9gBX9/f39/AX9gAX8AYAJ/fwF/YAR/f39/AX9gA39/fwBgBn9/f39/fwF/YAd/f39/f39/AX9gAn9/AX5gAn5+AX5gAABgBX9/f39/AGAGf39/f39/AGAIf39/f39/f38AYAl/f39/f39/f38AYAABf2AIf39/f39/f38Bf2ANf39/f39/f39/f39/fwF/YAF/AX4CJwEDZW52H2Vtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGgABANpaAEFAAAFAgEFCwACAQABAgIFBQcAAwABDgsBAQcAEhMHAAUBDAQEAAANBwQCAgYCBAgDAwMDBgEACQkHBgICAAYGAgQUBwYGAwIGAAMCAQgBBwUGCgoEEQAEBAEIAwgDBQgDEA8IAAcABAUBcAECAgUEAQCAAgYJAX8BQaCgwAILB2AHBm1lbW9yeQIABm1hbGxvYwAoBGZyZWUAJgxaU1REX2lzRXJyb3IAaBlaU1REX2ZpbmREZWNvbXByZXNzZWRTaXplAFQPWlNURF9kZWNvbXByZXNzAEoGX3N0YXJ0ACQJBwEAQQELASQKussBaA8AIAAgACgCBCABajYCBAsZACAAKAIAIAAoAgRBH3F0QQAgAWtBH3F2CwgAIABBiH9LC34BBH9BAyEBIAAoAgQiA0EgTQRAIAAoAggiASAAKAIQTwRAIAAQDQ8LIAAoAgwiAiABRgRAQQFBAiADQSBJGw8LIAAgASABIAJrIANBA3YiBCABIARrIAJJIgEbIgJrIgQ2AgggACADIAJBA3RrNgIEIAAgBCgAADYCAAsgAQsUAQF/IAAgARACIQIgACABEAEgAgv3AQECfyACRQRAIABCADcCACAAQQA2AhAgAEIANwIIQbh/DwsgACABNgIMIAAgAUEEajYCECACQQRPBEAgACABIAJqIgFBfGoiAzYCCCAAIAMoAAA2AgAgAUF/ai0AACIBBEAgAEEIIAEQFGs2AgQgAg8LIABBADYCBEF/DwsgACABNgIIIAAgAS0AACIDNgIAIAJBfmoiBEEBTQRAIARBAWtFBEAgACABLQACQRB0IANyIgM2AgALIAAgAS0AAUEIdCADajYCAAsgASACakF/ai0AACIBRQRAIABBADYCBEFsDwsgAEEoIAEQFCACQQN0ams2AgQgAgsWACAAIAEpAAA3AAAgACABKQAINwAICy8BAX8gAUECdEGgHWooAgAgACgCAEEgIAEgACgCBGprQR9xdnEhAiAAIAEQASACCyEAIAFCz9bTvtLHq9lCfiAAfEIfiUKHla+vmLbem55/fgsdAQF/IAAoAgggACgCDEYEfyAAKAIEQSBGBUEACwuCBAEDfyACQYDAAE8EQCAAIAEgAhBnIAAPCyAAIAJqIQMCQCAAIAFzQQNxRQRAAkAgAkEBSARAIAAhAgwBCyAAQQNxRQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADTw0BIAJBA3ENAAsLAkAgA0F8cSIEQcAASQ0AIAIgBEFAaiIFSw0AA0AgAiABKAIANgIAIAIgASgCBDYCBCACIAEoAgg2AgggAiABKAIMNgIMIAIgASgCEDYCECACIAEoAhQ2AhQgAiABKAIYNgIYIAIgASgCHDYCHCACIAEoAiA2AiAgAiABKAIkNgIkIAIgASgCKDYCKCACIAEoAiw2AiwgAiABKAIwNgIwIAIgASgCNDYCNCACIAEoAjg2AjggAiABKAI8NgI8IAFBQGshASACQUBrIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQALDAELIANBBEkEQCAAIQIMAQsgA0F8aiIEIABJBEAgACECDAELIAAhAgNAIAIgAS0AADoAACACIAEtAAE6AAEgAiABLQACOgACIAIgAS0AAzoAAyABQQRqIQEgAkEEaiICIARNDQALCyACIANJBEADQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADRw0ACwsgAAsMACAAIAEpAAA3AAALQQECfyAAKAIIIgEgACgCEEkEQEEDDwsgACAAKAIEIgJBB3E2AgQgACABIAJBA3ZrIgE2AgggACABKAAANgIAQQALDAAgACABKAIANgAAC/cCAQJ/AkAgACABRg0AAkAgASACaiAASwRAIAAgAmoiBCABSw0BCyAAIAEgAhALDwsgACABc0EDcSEDAkACQCAAIAFJBEAgAwRAIAAhAwwDCyAAQQNxRQRAIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcQ0ACwwBCwJAIAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQhBSAGQQR2IQRBICAAdCIAQQFyIQkgASgCACEPQQAhAiADIQYCQANAIAlBAkggAiAPS3JFBEAgAiEHAkAgCARAA0AgBEH//wNxQf//A0YEQCAHQRhqIQcgBiAQSQR/IAZBAmoiBigAACAFdgUgBUEQaiEFIARBEHYLIQQMAQsLA0AgBEEDcSIIQQNGBEAgBUECaiEFIARBAnYhBCAHQQNqIQcMAQsLIAcgCGoiByAPSw0EIAVBAmohBQNAIAIgB0kEQCANIAJBAXRqQQA7AQAgAkEBaiECDAELCyAGIA5LQQAgBiAFQQN1aiIHIAxLG0UEQCAHKAAAIAVBB3EiBXYhBAwCCyAEQQJ2IQQLIAYhBwsCfyALQX9qIAQgAEF/anEiBiAAQQF0QX9qIgggCWsiEUkNABogBCAIcSIEQQAgESAEIABIG2shBiALCyEIIA0gAkEBdGogBkF/aiIEOwEAIAlBASAGayAEIAZBAUgbayEJA0AgCSAASARAIABBAXUhACALQX9qIQsMAQsLAn8gByAOS0EAIAcgBSAIaiIFQQN1aiIGIAxLG0UEQCAFQQdxDAELIAUgDCIGIAdrQQN0awshBSACQQFqIQIgBEUhCCAGKAAAIAVBH3F2IQQMAQsLQWwgCUEBRyAFQSBKcg0BGiABIAJBf2o2AgAgBiAFQQdqQQN1aiADawwBC0FQCyEAIApBEGokACAACwkAQQFBBSAAGwsMACAAIAEoAAA2AAALqgMBCn8jAEHwAGsiCiQAIAJBAWohDiAAQQhqIQtBgIAEIAVBf2p0QRB1IQxBACECQQEhBkEBIAV0IglBf2oiDyEIA0AgAiAORkUEQAJAIAEgAkEBdCINai8BACIHQf//A0YEQCALIAhBA3RqIAI2AgQgCEF/aiEIQQEhBwwBCyAGQQAgDCAHQRB0QRB1ShshBgsgCiANaiAHOwEAIAJBAWohAgwBCwsgACAFNgIEIAAgBjYCACAJQQN2IAlBAXZqQQNqIQxBACEAQQAhBkEAIQIDQCAGIA5GBEADQAJAIAAgCUYNACAKIAsgAEEDdGoiASgCBCIGQQF0aiICIAIvAQAiAkEBajsBACABIAUgAhAUayIIOgADIAEgAiAIQf8BcXQgCWs7AQAgASAEIAZBAnQiAmooAgA6AAIgASACIANqKAIANgIEIABBAWohAAwBCwsFIAEgBkEBdGouAQAhDUEAIQcDQCAHIA1ORQRAIAsgAkEDdGogBjYCBANAIAIgDGogD3EiAiAISw0ACyAHQQFqIQcMAQsLIAZBAWohBgwBCwsgCkHwAGokAAsjAEIAIAEQCSAAhUKHla+vmLbem55/fkLj3MqV/M7y9YV/fAsQACAAQn43AwggACABNgIACyQBAX8gAARAIAEoAgQiAgRAIAEoAgggACACEQEADwsgABAmCwsfACAAIAEgAi8BABAINgIAIAEQBBogACACQQRqNgIEC0oBAX9BoCAoAgAiASAAaiIAQX9MBEBBiCBBMDYCAEF/DwsCQCAAPwBBEHRNDQAgABBmDQBBiCBBMDYCAEF/DwtBoCAgADYCACABC9cBAQh/Qbp/IQoCQCACKAIEIgggAigCACIJaiIOIAEgAGtLDQBBbCEKIAkgBCADKAIAIgtrSw0AIAAgCWoiBCACKAIIIgxrIQ0gACABQWBqIg8gCyAJQQAQKSADIAkgC2o2AgACQAJAIAwgBCAFa00EQCANIQUMAQsgDCAEIAZrSw0CIAcgDSAFayIAaiIBIAhqIAdNBEAgBCABIAgQDxoMAgsgBCABQQAgAGsQDyEBIAIgACAIaiIINgIEIAEgAGshBAsgBCAPIAUgCEEBECkLIA4hCgsgCgubAgEBfyMAQYABayINJAAgDSADNgJ8AkAgAkEDSwRAQX8hCQwBCwJAAkACQAJAIAJBAWsOAwADAgELIAZFBEBBuH8hCQwEC0FsIQkgBS0AACICIANLDQMgACAHIAJBAnQiAmooAgAgAiAIaigCABA7IAEgADYCAEEBIQkMAwsgASAJNgIAQQAhCQwCCyAKRQRAQWwhCQwCC0EAIQkgC0UgDEEZSHINAUEIIAR0QQhqIQBBACECA0AgAiAATw0CIAJBQGshAgwAAAsAC0FsIQkgDSANQfwAaiANQfgAaiAFIAYQFSICEAMNACANKAJ4IgMgBEsNACAAIA0gDSgCfCAHIAggAxAYIAEgADYCACACIQkLIA1BgAFqJAAgCQsLACAAIAEgAhALGgsQACAALwAAIAAtAAJBEHRyCy8AAn9BuH8gAUEISQ0AGkFyIAAoAAQiAEF3Sw0AGkG4fyAAQQhqIgAgACABSxsLCwkAIAAgATsAAAsDAAELigYBBX8gACAAKAIAIgVBfnE2AgBBACAAIAVBAXZqQYQgKAIAIgQgAEYbIQECQAJAIAAoAgQiAkUNACACKAIAIgNBAXENACACQQhqIgUgA0EBdkF4aiIDQQggA0EISxtnQR9zQQJ0QYAfaiIDKAIARgRAIAMgAigCDDYCAAsgAigCCCIDBEAgAyACKAIMNgIECyACKAIMIgMEQCADIAIoAgg2AgALIAIgAigCACAAKAIAQX5xajYCAEGEICEAAkACQCABRQ0AIAEgAjYCBCABKAIAIgNBAXENASADQQF2QXhqIgNBCCADQQhLG2dBH3NBAnRBgB9qIgMoAgAgAUEIakYEQCADIAEoAgw2AgALIAEoAggiAwRAIAMgASgCDDYCBAsgASgCDCIDBEAgAyABKAIINgIAQYQgKAIAIQQLIAIgAigCACABKAIAQX5xajYCACABIARGDQAgASABKAIAQQF2akEEaiEACyAAIAI2AgALIAIoAgBBAXZBeGoiAEEIIABBCEsbZ0Efc0ECdEGAH2oiASgCACEAIAEgBTYCACACIAA2AgwgAkEANgIIIABFDQEgACAFNgIADwsCQCABRQ0AIAEoAgAiAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAigCACABQQhqRgRAIAIgASgCDDYCAAsgASgCCCICBEAgAiABKAIMNgIECyABKAIMIgIEQCACIAEoAgg2AgBBhCAoAgAhBAsgACAAKAIAIAEoAgBBfnFqIgI2AgACQCABIARHBEAgASABKAIAQQF2aiAANgIEIAAoAgAhAgwBC0GEICAANgIACyACQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgIoAgAhASACIABBCGoiAjYCACAAIAE2AgwgAEEANgIIIAFFDQEgASACNgIADwsgBUEBdkF4aiIBQQggAUEISxtnQR9zQQJ0QYAfaiICKAIAIQEgAiAAQQhqIgI2AgAgACABNgIMIABBADYCCCABRQ0AIAEgAjYCAAsLDgAgAARAIABBeGoQJQsLgAIBA38CQCAAQQ9qQXhxQYQgKAIAKAIAQQF2ayICEB1Bf0YNAAJAQYQgKAIAIgAoAgAiAUEBcQ0AIAFBAXZBeGoiAUEIIAFBCEsbZ0Efc0ECdEGAH2oiASgCACAAQQhqRgRAIAEgACgCDDYCAAsgACgCCCIBBEAgASAAKAIMNgIECyAAKAIMIgFFDQAgASAAKAIINgIAC0EBIQEgACAAKAIAIAJBAXRqIgI2AgAgAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAygCACECIAMgAEEIaiIDNgIAIAAgAjYCDCAAQQA2AgggAkUNACACIAM2AgALIAELtwIBA38CQAJAIABBASAAGyICEDgiAA0AAkACQEGEICgCACIARQ0AIAAoAgAiA0EBcQ0AIAAgA0EBcjYCACADQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgAgAEEIakYEQCABIAAoAgw2AgALIAAoAggiAQRAIAEgACgCDDYCBAsgACgCDCIBBEAgASAAKAIINgIACyACECchAkEAIQFBhCAoAgAhACACDQEgACAAKAIAQX5xNgIAQQAPCyACQQ9qQXhxIgMQHSICQX9GDQIgAkEHakF4cSIAIAJHBEAgACACaxAdQX9GDQMLAkBBhCAoAgAiAUUEQEGAICAANgIADAELIAAgATYCBAtBhCAgADYCACAAIANBAXRBAXI2AgAMAQsgAEUNAQsgAEEIaiEBCyABC7kDAQJ/IAAgA2ohBQJAIANBB0wEQANAIAAgBU8NAiAAIAItAAA6AAAgAEEBaiEAIAJBAWohAgwAAAsACyAEQQFGBEACQCAAIAJrIgZBB00EQCAAIAItAAA6AAAgACACLQABOgABIAAgAi0AAjoAAiAAIAItAAM6AAMgAEEEaiACIAZBAnQiBkHAHmooAgBqIgIQFyACIAZB4B5qKAIAayECDAELIAAgAhAMCyACQQhqIQIgAEEIaiEACwJAAkACQAJAIAUgAU0EQCAAIANqIQEgBEEBRyAAIAJrQQ9Kcg0BA0AgACACEAwgAkEIaiECIABBCGoiACABSQ0ACwwFCyAAIAFLBEAgACEBDAQLIARBAUcgACACa0EPSnINASAAIQMgAiEEA0AgAyAEEAwgBEEIaiEEIANBCGoiAyABSQ0ACwwCCwNAIAAgAhAHIAJBEGohAiAAQRBqIgAgAUkNAAsMAwsgACEDIAIhBANAIAMgBBAHIARBEGohBCADQRBqIgMgAUkNAAsLIAIgASAAa2ohAgsDQCABIAVPDQEgASACLQAAOgAAIAFBAWohASACQQFqIQIMAAALAAsLQQECfyAAIAAoArjgASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigCACACaiAAQQZ2IgFBAnRBsB5qKAIAaiAAQSBxIgBFaiABRSAAQQV2cWoFQbh/CwsdACAAKAKQ4gEQWiAAQQA2AqDiASAAQgA3A5DiAQu1AwEFfyMAQZACayIKJABBuH8hBgJAIAVFDQAgBCwAACIIQf8BcSEHAkAgCEF/TARAIAdBgn9qQQF2IgggBU8NAkFsIQYgB0GBf2oiBUGAAk8NAiAEQQFqIQdBACEGA0AgBiAFTwRAIAUhBiAIIQcMAwUgACAGaiAHIAZBAXZqIgQtAABBBHY6AAAgACAGQQFyaiAELQAAQQ9xOgAAIAZBAmohBgwBCwAACwALIAcgBU8NASAAIARBAWogByAKEFMiBhADDQELIAYhBEEAIQYgAUEAQTQQECEJQQAhBQNAIAQgBkcEQCAAIAZqIggtAAAiAUELSwRAQWwhBgwDBSAJIAFBAnRqIgEgASgCAEEBajYCACAGQQFqIQZBASAILQAAdEEBdSAFaiEFDAILAAsLQWwhBiAFRQ0AIAUQFEEBaiIBQQxLDQAgAyABNgIAQQFBASABdCAFayIDEBQiAXQgA0cNACAAIARqIAFBAWoiADoAACAJIABBAnRqIgAgACgCAEEBajYCACAJKAIEIgBBAkkgAEEBcXINACACIARBAWo2AgAgB0EBaiEGCyAKQZACaiQAIAYLxhEBDH8jAEHwAGsiBSQAQWwhCwJAIANBCkkNACACLwAAIQogAi8AAiEJIAIvAAQhByAFQQhqIAQQDgJAIAMgByAJIApqakEGaiIMSQ0AIAUtAAohCCAFQdgAaiACQQZqIgIgChAGIgsQAw0BIAVBQGsgAiAKaiICIAkQBiILEAMNASAFQShqIAIgCWoiAiAHEAYiCxADDQEgBUEQaiACIAdqIAMgDGsQBiILEAMNASAAIAFqIg9BfWohECAEQQRqIQZBASELIAAgAUEDakECdiIDaiIMIANqIgIgA2oiDiEDIAIhBCAMIQcDQCALIAMgEElxBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgCS0AAyELIAcgBiAFQUBrIAgQAkECdGoiCS8BADsAACAFQUBrIAktAAIQASAJLQADIQogBCAGIAVBKGogCBACQQJ0aiIJLwEAOwAAIAVBKGogCS0AAhABIAktAAMhCSADIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgDS0AAyENIAAgC2oiCyAGIAVB2ABqIAgQAkECdGoiAC8BADsAACAFQdgAaiAALQACEAEgAC0AAyEAIAcgCmoiCiAGIAVBQGsgCBACQQJ0aiIHLwEAOwAAIAVBQGsgBy0AAhABIActAAMhByAEIAlqIgkgBiAFQShqIAgQAkECdGoiBC8BADsAACAFQShqIAQtAAIQASAELQADIQQgAyANaiIDIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgACALaiEAIAcgCmohByAEIAlqIQQgAyANLQADaiEDIAVB2ABqEA0gBUFAaxANciAFQShqEA1yIAVBEGoQDXJFIQsMAQsLIAQgDksgByACS3INAEFsIQsgACAMSw0BIAxBfWohCQNAQQAgACAJSSAFQdgAahAEGwRAIAAgBiAFQdgAaiAIEAJBAnRqIgovAQA7AAAgBUHYAGogCi0AAhABIAAgCi0AA2oiACAGIAVB2ABqIAgQAkECdGoiCi8BADsAACAFQdgAaiAKLQACEAEgACAKLQADaiEADAEFIAxBfmohCgNAIAVB2ABqEAQgACAKS3JFBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgACAJLQADaiEADAELCwNAIAAgCk0EQCAAIAYgBUHYAGogCBACQQJ0aiIJLwEAOwAAIAVB2ABqIAktAAIQASAAIAktAANqIQAMAQsLAkAgACAMTw0AIAAgBiAFQdgAaiAIEAIiAEECdGoiDC0AADoAACAMLQADQQFGBEAgBUHYAGogDC0AAhABDAELIAUoAlxBH0sNACAFQdgAaiAGIABBAnRqLQACEAEgBSgCXEEhSQ0AIAVBIDYCXAsgAkF9aiEMA0BBACAHIAxJIAVBQGsQBBsEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiIAIAYgBUFAayAIEAJBAnRqIgcvAQA7AAAgBUFAayAHLQACEAEgACAHLQADaiEHDAEFIAJBfmohDANAIAVBQGsQBCAHIAxLckUEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwNAIAcgDE0EQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwJAIAcgAk8NACAHIAYgBUFAayAIEAIiAEECdGoiAi0AADoAACACLQADQQFGBEAgBUFAayACLQACEAEMAQsgBSgCREEfSw0AIAVBQGsgBiAAQQJ0ai0AAhABIAUoAkRBIUkNACAFQSA2AkQLIA5BfWohAgNAQQAgBCACSSAFQShqEAQbBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2oiACAGIAVBKGogCBACQQJ0aiIELwEAOwAAIAVBKGogBC0AAhABIAAgBC0AA2ohBAwBBSAOQX5qIQIDQCAFQShqEAQgBCACS3JFBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsDQCAEIAJNBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsCQCAEIA5PDQAgBCAGIAVBKGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBKGogAi0AAhABDAELIAUoAixBH0sNACAFQShqIAYgAEECdGotAAIQASAFKAIsQSFJDQAgBUEgNgIsCwNAQQAgAyAQSSAFQRBqEAQbBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2oiACAGIAVBEGogCBACQQJ0aiICLwEAOwAAIAVBEGogAi0AAhABIAAgAi0AA2ohAwwBBSAPQX5qIQIDQCAFQRBqEAQgAyACS3JFBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsDQCADIAJNBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsCQCADIA9PDQAgAyAGIAVBEGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBEGogAi0AAhABDAELIAUoAhRBH0sNACAFQRBqIAYgAEECdGotAAIQASAFKAIUQSFJDQAgBUEgNgIUCyABQWwgBUHYAGoQCiAFQUBrEApxIAVBKGoQCnEgBUEQahAKcRshCwwJCwAACwALAAALAAsAAAsACwAACwALQWwhCwsgBUHwAGokACALC7UEAQ5/IwBBEGsiBiQAIAZBBGogABAOQVQhBQJAIARB3AtJDQAgBi0ABCEHIANB8ARqQQBB7AAQECEIIAdBDEsNACADQdwJaiIJIAggBkEIaiAGQQxqIAEgAhAxIhAQA0UEQCAGKAIMIgQgB0sNASADQdwFaiEPIANBpAVqIREgAEEEaiESIANBqAVqIQEgBCEFA0AgBSICQX9qIQUgCCACQQJ0aigCAEUNAAsgAkEBaiEOQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgASALaiAKNgIAIAVBAWohBSAKIAxqIQoMAQsLIAEgCjYCAEEAIQUgBigCCCELA0AgBSALRkUEQCABIAUgCWotAAAiDEECdGoiDSANKAIAIg1BAWo2AgAgDyANQQF0aiINIAw6AAEgDSAFOgAAIAVBAWohBQwBCwtBACEBIANBADYCqAUgBEF/cyAHaiEJQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgAyALaiABNgIAIAwgBSAJanQgAWohASAFQQFqIQUMAQsLIAcgBEEBaiIBIAJrIgRrQQFqIQgDQEEBIQUgBCAIT0UEQANAIAUgDk9FBEAgBUECdCIJIAMgBEE0bGpqIAMgCWooAgAgBHY2AgAgBUEBaiEFDAELCyAEQQFqIQQMAQsLIBIgByAPIAogESADIAIgARBkIAZBAToABSAGIAc6AAYgACAGKAIENgIACyAQIQULIAZBEGokACAFC8ENAQt/IwBB8ABrIgUkAEFsIQkCQCADQQpJDQAgAi8AACEKIAIvAAIhDCACLwAEIQYgBUEIaiAEEA4CQCADIAYgCiAMampBBmoiDUkNACAFLQAKIQcgBUHYAGogAkEGaiICIAoQBiIJEAMNASAFQUBrIAIgCmoiAiAMEAYiCRADDQEgBUEoaiACIAxqIgIgBhAGIgkQAw0BIAVBEGogAiAGaiADIA1rEAYiCRADDQEgACABaiIOQX1qIQ8gBEEEaiEGQQEhCSAAIAFBA2pBAnYiAmoiCiACaiIMIAJqIg0hAyAMIQQgCiECA0AgCSADIA9JcQRAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAACAGIAVBQGsgBxACQQF0aiIILQAAIQsgBUFAayAILQABEAEgAiALOgAAIAYgBUEoaiAHEAJBAXRqIggtAAAhCyAFQShqIAgtAAEQASAEIAs6AAAgBiAFQRBqIAcQAkEBdGoiCC0AACELIAVBEGogCC0AARABIAMgCzoAACAGIAVB2ABqIAcQAkEBdGoiCC0AACELIAVB2ABqIAgtAAEQASAAIAs6AAEgBiAFQUBrIAcQAkEBdGoiCC0AACELIAVBQGsgCC0AARABIAIgCzoAASAGIAVBKGogBxACQQF0aiIILQAAIQsgBUEoaiAILQABEAEgBCALOgABIAYgBUEQaiAHEAJBAXRqIggtAAAhCyAFQRBqIAgtAAEQASADIAs6AAEgA0ECaiEDIARBAmohBCACQQJqIQIgAEECaiEAIAkgBUHYAGoQDUVxIAVBQGsQDUVxIAVBKGoQDUVxIAVBEGoQDUVxIQkMAQsLIAQgDUsgAiAMS3INAEFsIQkgACAKSw0BIApBfWohCQNAIAVB2ABqEAQgACAJT3JFBEAgBiAFQdgAaiAHEAJBAXRqIggtAAAhCyAFQdgAaiAILQABEAEgACALOgAAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAASAAQQJqIQAMAQsLA0AgBUHYAGoQBCAAIApPckUEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCwNAIAAgCkkEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCyAMQX1qIQADQCAFQUBrEAQgAiAAT3JFBEAgBiAFQUBrIAcQAkEBdGoiCi0AACEJIAVBQGsgCi0AARABIAIgCToAACAGIAVBQGsgBxACQQF0aiIKLQAAIQkgBUFAayAKLQABEAEgAiAJOgABIAJBAmohAgwBCwsDQCAFQUBrEAQgAiAMT3JFBEAgBiAFQUBrIAcQAkEBdGoiAC0AACEKIAVBQGsgAC0AARABIAIgCjoAACACQQFqIQIMAQsLA0AgAiAMSQRAIAYgBUFAayAHEAJBAXRqIgAtAAAhCiAFQUBrIAAtAAEQASACIAo6AAAgAkEBaiECDAELCyANQX1qIQADQCAFQShqEAQgBCAAT3JFBEAgBiAFQShqIAcQAkEBdGoiAi0AACEKIAVBKGogAi0AARABIAQgCjoAACAGIAVBKGogBxACQQF0aiICLQAAIQogBUEoaiACLQABEAEgBCAKOgABIARBAmohBAwBCwsDQCAFQShqEAQgBCANT3JFBEAgBiAFQShqIAcQAkEBdGoiAC0AACECIAVBKGogAC0AARABIAQgAjoAACAEQQFqIQQMAQsLA0AgBCANSQRAIAYgBUEoaiAHEAJBAXRqIgAtAAAhAiAFQShqIAAtAAEQASAEIAI6AAAgBEEBaiEEDAELCwNAIAVBEGoQBCADIA9PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIAYgBUEQaiAHEAJBAXRqIgAtAAAhAiAFQRBqIAAtAAEQASADIAI6AAEgA0ECaiEDDAELCwNAIAVBEGoQBCADIA5PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIANBAWohAwwBCwsDQCADIA5JBEAgBiAFQRBqIAcQAkEBdGoiAC0AACECIAVBEGogAC0AARABIAMgAjoAACADQQFqIQMMAQsLIAFBbCAFQdgAahAKIAVBQGsQCnEgBUEoahAKcSAFQRBqEApxGyEJDAELQWwhCQsgBUHwAGokACAJC8oCAQR/IwBBIGsiBSQAIAUgBBAOIAUtAAIhByAFQQhqIAIgAxAGIgIQA0UEQCAEQQRqIQIgACABaiIDQX1qIQQDQCAFQQhqEAQgACAET3JFBEAgAiAFQQhqIAcQAkEBdGoiBi0AACEIIAVBCGogBi0AARABIAAgCDoAACACIAVBCGogBxACQQF0aiIGLQAAIQggBUEIaiAGLQABEAEgACAIOgABIABBAmohAAwBCwsDQCAFQQhqEAQgACADT3JFBEAgAiAFQQhqIAcQAkEBdGoiBC0AACEGIAVBCGogBC0AARABIAAgBjoAACAAQQFqIQAMAQsLA0AgACADT0UEQCACIAVBCGogBxACQQF0aiIELQAAIQYgBUEIaiAELQABEAEgACAGOgAAIABBAWohAAwBCwsgAUFsIAVBCGoQChshAgsgBUEgaiQAIAILtgMBCX8jAEEQayIGJAAgBkEANgIMIAZBADYCCEFUIQQCQAJAIANBQGsiDCADIAZBCGogBkEMaiABIAIQMSICEAMNACAGQQRqIAAQDiAGKAIMIgcgBi0ABEEBaksNASAAQQRqIQogBkEAOgAFIAYgBzoABiAAIAYoAgQ2AgAgB0EBaiEJQQEhBANAIAQgCUkEQCADIARBAnRqIgEoAgAhACABIAU2AgAgACAEQX9qdCAFaiEFIARBAWohBAwBCwsgB0EBaiEHQQAhBSAGKAIIIQkDQCAFIAlGDQEgAyAFIAxqLQAAIgRBAnRqIgBBASAEdEEBdSILIAAoAgAiAWoiADYCACAHIARrIQhBACEEAkAgC0EDTQRAA0AgBCALRg0CIAogASAEakEBdGoiACAIOgABIAAgBToAACAEQQFqIQQMAAALAAsDQCABIABPDQEgCiABQQF0aiIEIAg6AAEgBCAFOgAAIAQgCDoAAyAEIAU6AAIgBCAIOgAFIAQgBToABCAEIAg6AAcgBCAFOgAGIAFBBGohAQwAAAsACyAFQQFqIQUMAAALAAsgAiEECyAGQRBqJAAgBAutAQECfwJAQYQgKAIAIABHIAAoAgBBAXYiAyABa0F4aiICQXhxQQhHcgR/IAIFIAMQJ0UNASACQQhqC0EQSQ0AIAAgACgCACICQQFxIAAgAWpBD2pBeHEiASAAa0EBdHI2AgAgASAANgIEIAEgASgCAEEBcSAAIAJBAXZqIAFrIgJBAXRyNgIAQYQgIAEgAkH/////B3FqQQRqQYQgKAIAIABGGyABNgIAIAEQJQsLygIBBX8CQAJAAkAgAEEIIABBCEsbZ0EfcyAAaUEBR2oiAUEESSAAIAF2cg0AIAFBAnRB/B5qKAIAIgJFDQADQCACQXhqIgMoAgBBAXZBeGoiBSAATwRAIAIgBUEIIAVBCEsbZ0Efc0ECdEGAH2oiASgCAEYEQCABIAIoAgQ2AgALDAMLIARBHksNASAEQQFqIQQgAigCBCICDQALC0EAIQMgAUEgTw0BA0AgAUECdEGAH2ooAgAiAkUEQCABQR5LIQIgAUEBaiEBIAJFDQEMAwsLIAIgAkF4aiIDKAIAQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgBGBEAgASACKAIENgIACwsgAigCACIBBEAgASACKAIENgIECyACKAIEIgEEQCABIAIoAgA2AgALIAMgAygCAEEBcjYCACADIAAQNwsgAwvhCwINfwV+IwBB8ABrIgckACAHIAAoAvDhASIINgJcIAEgAmohDSAIIAAoAoDiAWohDwJAAkAgBUUEQCABIQQMAQsgACgCxOABIRAgACgCwOABIREgACgCvOABIQ4gAEEBNgKM4QFBACEIA0AgCEEDRwRAIAcgCEECdCICaiAAIAJqQazQAWooAgA2AkQgCEEBaiEIDAELC0FsIQwgB0EYaiADIAQQBhADDQEgB0EsaiAHQRhqIAAoAgAQEyAHQTRqIAdBGGogACgCCBATIAdBPGogB0EYaiAAKAIEEBMgDUFgaiESIAEhBEEAIQwDQCAHKAIwIAcoAixBA3RqKQIAIhRCEIinQf8BcSEIIAcoAkAgBygCPEEDdGopAgAiFUIQiKdB/wFxIQsgBygCOCAHKAI0QQN0aikCACIWQiCIpyEJIBVCIIghFyAUQiCIpyECAkAgFkIQiKdB/wFxIgNBAk8EQAJAIAZFIANBGUlyRQRAIAkgB0EYaiADQSAgBygCHGsiCiAKIANLGyIKEAUgAyAKayIDdGohCSAHQRhqEAQaIANFDQEgB0EYaiADEAUgCWohCQwBCyAHQRhqIAMQBSAJaiEJIAdBGGoQBBoLIAcpAkQhGCAHIAk2AkQgByAYNwNIDAELAkAgA0UEQCACBEAgBygCRCEJDAMLIAcoAkghCQwBCwJAAkAgB0EYakEBEAUgCSACRWpqIgNBA0YEQCAHKAJEQX9qIgMgA0VqIQkMAQsgA0ECdCAHaigCRCIJIAlFaiEJIANBAUYNAQsgByAHKAJINgJMCwsgByAHKAJENgJIIAcgCTYCRAsgF6chAyALBEAgB0EYaiALEAUgA2ohAwsgCCALakEUTwRAIAdBGGoQBBoLIAgEQCAHQRhqIAgQBSACaiECCyAHQRhqEAQaIAcgB0EYaiAUQhiIp0H/AXEQCCAUp0H//wNxajYCLCAHIAdBGGogFUIYiKdB/wFxEAggFadB//8DcWo2AjwgB0EYahAEGiAHIAdBGGogFkIYiKdB/wFxEAggFqdB//8DcWo2AjQgByACNgJgIAcoAlwhCiAHIAk2AmggByADNgJkAkACQAJAIAQgAiADaiILaiASSw0AIAIgCmoiEyAPSw0AIA0gBGsgC0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdBKGogACgCBBATQQAhBCAHQeAAaiEMIAdB5ABqIQoDQCAHQShqEARBAksgBCAXTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEJIAcoAkggBygCREEDdGopAgAiH0IgiKchCCAeQiCIISAgHUIgiKchAgJAIB9CEIinQf8BcSIDQQJPBEACQCAGRSADQRlJckUEQCAIIAdBKGogA0EgIAcoAixrIg0gDSADSxsiDRAFIAMgDWsiA3RqIQggB0EoahAEGiADRQ0BIAdBKGogAxAFIAhqIQgMAQsgB0EoaiADEAUgCGohCCAHQShqEAQaCyAHKQJUISEgByAINgJUIAcgITcDWAwBCwJAIANFBEAgAgRAIAcoAlQhCAwDCyAHKAJYIQgMAQsCQAJAIAdBKGpBARAFIAggAkVqaiIDQQNGBEAgBygCVEF/aiIDIANFaiEIDAELIANBAnQgB2ooAlQiCCAIRWohCCADQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAg2AlQLICCnIQMgCQRAIAdBKGogCRAFIANqIQMLIAkgC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgAmohAgsgB0EoahAEGiAHIAcoAmggAmoiCSADajYCaCAKIAwgCCAJSxsoAgAhDSAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogB0EoaiAfQhiIp0H/AXEQCCEOIAdB8ABqIARBBHRqIgsgCSANaiAIazYCDCALIAg2AgggCyADNgIEIAsgAjYCACAHIA4gH6dB//8DcWo2AkQgBEEBaiEEDAELCyAEIBdIDQEgEkFgaiEYIAdB4ABqIRogB0HkAGohGyABIQMDQCAHQShqEARBAksgBCAFTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEIIAcoAkggBygCREEDdGopAgAiH0IgiKchCSAeQiCIISAgHUIgiKchDAJAIB9CEIinQf8BcSICQQJPBEACQCAGRSACQRlJckUEQCAJIAdBKGogAkEgIAcoAixrIgogCiACSxsiChAFIAIgCmsiAnRqIQkgB0EoahAEGiACRQ0BIAdBKGogAhAFIAlqIQkMAQsgB0EoaiACEAUgCWohCSAHQShqEAQaCyAHKQJUISEgByAJNgJUIAcgITcDWAwBCwJAIAJFBEAgDARAIAcoAlQhCQwDCyAHKAJYIQkMAQsCQAJAIAdBKGpBARAFIAkgDEVqaiICQQNGBEAgBygCVEF/aiICIAJFaiEJDAELIAJBAnQgB2ooAlQiCSAJRWohCSACQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAk2AlQLICCnIRQgCARAIAdBKGogCBAFIBRqIRQLIAggC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgDGohDAsgB0EoahAEGiAHIAcoAmggDGoiGSAUajYCaCAbIBogCSAZSxsoAgAhHCAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogByAHQShqIB9CGIinQf8BcRAIIB+nQf//A3FqNgJEIAcgB0HwAGogBEEDcUEEdGoiDSkDCCIdNwPIASAHIA0pAwAiHjcDwAECQAJAAkAgBygCvAEiDiAepyICaiIWIBNLDQAgAyAHKALEASIKIAJqIgtqIBhLDQAgEiADayALQSBqTw0BCyAHIAcpA8gBNwMQIAcgBykDwAE3AwggAyASIAdBCGogB0G8AWogEyAPIBUgERAeIQsMAQsgAiADaiEIIAMgDhAHIAJBEU8EQCADQRBqIQIDQCACIA5BEGoiDhAHIAJBEGoiAiAISQ0ACwsgCCAdpyIOayECIAcgFjYCvAEgDiAIIA9rSwRAIA4gCCAVa0sEQEFsIQsMAgsgESACIA9rIgJqIhYgCmogEU0EQCAIIBYgChAPGgwCCyAIIBZBACACaxAPIQggByACIApqIgo2AsQBIAggAmshCCAPIQILIA5BEE8EQCAIIApqIQoDQCAIIAIQByACQRBqIQIgCEEQaiIIIApJDQALDAELAkAgDkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgDkECdCIKQcAeaigCAGoiAhAXIAIgCkHgHmooAgBrIQIgBygCxAEhCgwBCyAIIAIQDAsgCkEJSQ0AIAggCmohCiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAKSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAKSQ0ACwsgCxADBEAgCyEQDAQFIA0gDDYCACANIBkgHGogCWs2AgwgDSAJNgIIIA0gFDYCBCAEQQFqIQQgAyALaiEDDAILAAsLIAQgBUgNASAEIBdrIQtBACEEA0AgCyAFSARAIAcgB0HwAGogC0EDcUEEdGoiAikDCCIdNwPIASAHIAIpAwAiHjcDwAECQAJAAkAgBygCvAEiDCAepyICaiIKIBNLDQAgAyAHKALEASIJIAJqIhBqIBhLDQAgEiADayAQQSBqTw0BCyAHIAcpA8gBNwMgIAcgBykDwAE3AxggAyASIAdBGGogB0G8AWogEyAPIBUgERAeIRAMAQsgAiADaiEIIAMgDBAHIAJBEU8EQCADQRBqIQIDQCACIAxBEGoiDBAHIAJBEGoiAiAISQ0ACwsgCCAdpyIGayECIAcgCjYCvAEgBiAIIA9rSwRAIAYgCCAVa0sEQEFsIRAMAgsgESACIA9rIgJqIgwgCWogEU0EQCAIIAwgCRAPGgwCCyAIIAxBACACaxAPIQggByACIAlqIgk2AsQBIAggAmshCCAPIQILIAZBEE8EQCAIIAlqIQYDQCAIIAIQByACQRBqIQIgCEEQaiIIIAZJDQALDAELAkAgBkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgBkECdCIGQcAeaigCAGoiAhAXIAIgBkHgHmooAgBrIQIgBygCxAEhCQwBCyAIIAIQDAsgCUEJSQ0AIAggCWohBiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAGSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAGSQ0ACwsgEBADDQMgC0EBaiELIAMgEGohAwwBCwsDQCAEQQNHBEAgACAEQQJ0IgJqQazQAWogAiAHaigCVDYCACAEQQFqIQQMAQsLIAcoArwBIQgLQbp/IRAgEyAIayIAIBIgA2tLDQAgAwR/IAMgCCAAEAsgAGoFQQALIAFrIRALIAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY0AAQMyIFEAMiBg0AIANBHzYCfCADIANB/ABqIANB+ABqIAQgBCAFaiAGGyIEIAEgAmoiAiAEaxAVIgUQAw0AIAMoAnwiBkEfSw0AIAMoAngiB0EJTw0AIABBiCBqIAMgBkGAC0GADCAHEBggA0E0NgJ8IAMgA0H8AGogA0H4AGogBCAFaiIEIAIgBGsQFSIFEAMNACADKAJ8IgZBNEsNACADKAJ4IgdBCk8NACAAQZAwaiADIAZBgA1B4A4gBxAYIANBIzYCfCADIANB/ABqIANB+ABqIAQgBWoiBCACIARrEBUiBRADDQAgAygCfCIGQSNLDQAgAygCeCIHQQpPDQAgACADIAZBwBBB0BEgBxAYIAQgBWoiBEEMaiIFIAJLDQAgAiAFayEFQQAhAgNAIAJBA0cEQCAEKAAAIgZBf2ogBU8NAiAAIAJBAnRqQZzQAWogBjYCACACQQFqIQIgBEEEaiEEDAELCyAEIAFrIQgLIANBgAFqJAAgCAtGAQN/IABBCGohAyAAKAIEIQJBACEAA0AgACACdkUEQCABIAMgAEEDdGotAAJBFktqIQEgAEEBaiEADAELCyABQQggAmt0C4YDAQV/Qbh/IQcCQCADRQ0AIAItAAAiBEUEQCABQQA2AgBBAUG4fyADQQFGGw8LAn8gAkEBaiIFIARBGHRBGHUiBkF/Sg0AGiAGQX9GBEAgA0EDSA0CIAUvAABBgP4BaiEEIAJBA2oMAQsgA0ECSA0BIAItAAEgBEEIdHJBgIB+aiEEIAJBAmoLIQUgASAENgIAIAVBAWoiASACIANqIgNLDQBBbCEHIABBEGogACAFLQAAIgVBBnZBI0EJIAEgAyABa0HAEEHQEUHwEiAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBmCBqIABBCGogBUEEdkEDcUEfQQggASABIAZqIAgbIgEgAyABa0GAC0GADEGAFyAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBoDBqIABBBGogBUECdkEDcUE0QQkgASABIAZqIAgbIgEgAyABa0GADUHgDkGQGSAAKAKM4QEgACgCnOIBIAQQHyIAEAMNACAAIAFqIAJrIQcLIAcLrQMBCn8jAEGABGsiCCQAAn9BUiACQf8BSw0AGkFUIANBDEsNABogAkEBaiELIABBBGohCUGAgAQgA0F/anRBEHUhCkEAIQJBASEEQQEgA3QiB0F/aiIMIQUDQCACIAtGRQRAAkAgASACQQF0Ig1qLwEAIgZB//8DRgRAIAkgBUECdGogAjoAAiAFQX9qIQVBASEGDAELIARBACAKIAZBEHRBEHVKGyEECyAIIA1qIAY7AQAgAkEBaiECDAELCyAAIAQ7AQIgACADOwEAIAdBA3YgB0EBdmpBA2ohBkEAIQRBACECA0AgBCALRkUEQCABIARBAXRqLgEAIQpBACEAA0AgACAKTkUEQCAJIAJBAnRqIAQ6AAIDQCACIAZqIAxxIgIgBUsNAAsgAEEBaiEADAELCyAEQQFqIQQMAQsLQX8gAg0AGkEAIQIDfyACIAdGBH9BAAUgCCAJIAJBAnRqIgAtAAJBAXRqIgEgAS8BACIBQQFqOwEAIAAgAyABEBRrIgU6AAMgACABIAVB/wFxdCAHazsBACACQQFqIQIMAQsLCyEFIAhBgARqJAAgBQvjBgEIf0FsIQcCQCACQQNJDQACQAJAAkACQCABLQAAIgNBA3EiCUEBaw4DAwEAAgsgACgCiOEBDQBBYg8LIAJBBUkNAkEDIQYgASgAACEFAn8CQAJAIANBAnZBA3EiCEF+aiIEQQFNBEAgBEEBaw0BDAILIAVBDnZB/wdxIQQgBUEEdkH/B3EhAyAIRQwCCyAFQRJ2IQRBBCEGIAVBBHZB//8AcSEDQQAMAQsgBUEEdkH//w9xIgNBgIAISw0DIAEtAARBCnQgBUEWdnIhBEEFIQZBAAshBSAEIAZqIgogAksNAgJAIANBgQZJDQAgACgCnOIBRQ0AQQAhAgNAIAJBg4ABSw0BIAJBQGshAgwAAAsACwJ/IAlBA0YEQCABIAZqIQEgAEHw4gFqIQIgACgCDCEGIAUEQCACIAMgASAEIAYQXwwCCyACIAMgASAEIAYQXQwBCyAAQbjQAWohAiABIAZqIQEgAEHw4gFqIQYgAEGo0ABqIQggBQRAIAggBiADIAEgBCACEF4MAQsgCCAGIAMgASAEIAIQXAsQAw0CIAAgAzYCgOIBIABBATYCiOEBIAAgAEHw4gFqNgLw4QEgCUECRgRAIAAgAEGo0ABqNgIMCyAAIANqIgBBiOMBakIANwAAIABBgOMBakIANwAAIABB+OIBakIANwAAIABB8OIBakIANwAAIAoPCwJ/AkACQAJAIANBAnZBA3FBf2oiBEECSw0AIARBAWsOAgACAQtBASEEIANBA3YMAgtBAiEEIAEvAABBBHYMAQtBAyEEIAEQIUEEdgsiAyAEaiIFQSBqIAJLBEAgBSACSw0CIABB8OIBaiABIARqIAMQCyEBIAAgAzYCgOIBIAAgATYC8OEBIAEgA2oiAEIANwAYIABCADcAECAAQgA3AAggAEIANwAAIAUPCyAAIAM2AoDiASAAIAEgBGo2AvDhASAFDwsCfwJAAkACQCADQQJ2QQNxQX9qIgRBAksNACAEQQFrDgIAAgELQQEhByADQQN2DAILQQIhByABLwAAQQR2DAELIAJBBEkgARAhIgJBj4CAAUtyDQFBAyEHIAJBBHYLIQIgAEHw4gFqIAEgB2otAAAgAkEgahAQIQEgACACNgKA4gEgACABNgLw4QEgB0EBaiEHCyAHC0sAIABC+erQ0OfJoeThADcDICAAQgA3AxggAELP1tO+0ser2UI3AxAgAELW64Lu6v2J9eAANwMIIABCADcDACAAQShqQQBBKBAQGgviAgICfwV+IABBKGoiASAAKAJIaiECAn4gACkDACIDQiBaBEAgACkDECIEQgeJIAApAwgiBUIBiXwgACkDGCIGQgyJfCAAKQMgIgdCEol8IAUQGSAEEBkgBhAZIAcQGQwBCyAAKQMYQsXP2bLx5brqJ3wLIAN8IQMDQCABQQhqIgAgAk0EQEIAIAEpAAAQCSADhUIbiUKHla+vmLbem55/fkLj3MqV/M7y9YV/fCEDIAAhAQwBCwsCQCABQQRqIgAgAksEQCABIQAMAQsgASgAAK1Ch5Wvr5i23puef34gA4VCF4lCz9bTvtLHq9lCfkL5893xmfaZqxZ8IQMLA0AgACACSQRAIAAxAABCxc/ZsvHluuonfiADhUILiUKHla+vmLbem55/fiEDIABBAWohAAwBCwsgA0IhiCADhULP1tO+0ser2UJ+IgNCHYggA4VC+fPd8Zn2masWfiIDQiCIIAOFC+8CAgJ/BH4gACAAKQMAIAKtfDcDAAJAAkAgACgCSCIDIAJqIgRBH00EQCABRQ0BIAAgA2pBKGogASACECAgACgCSCACaiEEDAELIAEgAmohAgJ/IAMEQCAAQShqIgQgA2ogAUEgIANrECAgACAAKQMIIAQpAAAQCTcDCCAAIAApAxAgACkAMBAJNwMQIAAgACkDGCAAKQA4EAk3AxggACAAKQMgIABBQGspAAAQCTcDICAAKAJIIQMgAEEANgJIIAEgA2tBIGohAQsgAUEgaiACTQsEQCACQWBqIQMgACkDICEFIAApAxghBiAAKQMQIQcgACkDCCEIA0AgCCABKQAAEAkhCCAHIAEpAAgQCSEHIAYgASkAEBAJIQYgBSABKQAYEAkhBSABQSBqIgEgA00NAAsgACAFNwMgIAAgBjcDGCAAIAc3AxAgACAINwMICyABIAJPDQEgAEEoaiABIAIgAWsiBBAgCyAAIAQ2AkgLCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQEBogAwVBun8LCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQCxogAwVBun8LC6gCAQZ/IwBBEGsiByQAIABB2OABaikDAEKAgIAQViEIQbh/IQUCQCAEQf//B0sNACAAIAMgBBBCIgUQAyIGDQAgACgCnOIBIQkgACAHQQxqIAMgAyAFaiAGGyIKIARBACAFIAYbayIGEEAiAxADBEAgAyEFDAELIAcoAgwhBCABRQRAQbp/IQUgBEEASg0BCyAGIANrIQUgAyAKaiEDAkAgCQRAIABBADYCnOIBDAELAkACQAJAIARBBUgNACAAQdjgAWopAwBCgICACFgNAAwBCyAAQQA2ApziAQwBCyAAKAIIED8hBiAAQQA2ApziASAGQRRPDQELIAAgASACIAMgBSAEIAgQOSEFDAELIAAgASACIAMgBSAEIAgQOiEFCyAHQRBqJAAgBQtnACAAQdDgAWogASACIAAoAuzhARAuIgEQAwRAIAEPC0G4fyECAkAgAQ0AIABB7OABaigCACIBBEBBYCECIAAoApjiASABRw0BC0EAIQIgAEHw4AFqKAIARQ0AIABBkOEBahBDCyACCycBAX8QVyIERQRAQUAPCyAEIAAgASACIAMgBBBLEE8hACAEEFYgAAs/AQF/AkACQAJAIAAoAqDiAUEBaiIBQQJLDQAgAUEBaw4CAAECCyAAEDBBAA8LIABBADYCoOIBCyAAKAKU4gELvAMCB38BfiMAQRBrIgkkAEG4fyEGAkAgBCgCACIIQQVBCSAAKALs4QEiBRtJDQAgAygCACIHQQFBBSAFGyAFEC8iBRADBEAgBSEGDAELIAggBUEDakkNACAAIAcgBRBJIgYQAw0AIAEgAmohCiAAQZDhAWohCyAIIAVrIQIgBSAHaiEHIAEhBQNAIAcgAiAJECwiBhADDQEgAkF9aiICIAZJBEBBuH8hBgwCCyAJKAIAIghBAksEQEFsIQYMAgsgB0EDaiEHAn8CQAJAAkAgCEEBaw4CAgABCyAAIAUgCiAFayAHIAYQSAwCCyAFIAogBWsgByAGEEcMAQsgBSAKIAVrIActAAAgCSgCCBBGCyIIEAMEQCAIIQYMAgsgACgC8OABBEAgCyAFIAgQRQsgAiAGayECIAYgB2ohByAFIAhqIQUgCSgCBEUNAAsgACkD0OABIgxCf1IEQEFsIQYgDCAFIAFrrFINAQsgACgC8OABBEBBaiEGIAJBBEkNASALEEQhDCAHKAAAIAynRw0BIAdBBGohByACQXxqIQILIAMgBzYCACAEIAI2AgAgBSABayEGCyAJQRBqJAAgBgsuACAAECsCf0EAQQAQAw0AGiABRSACRXJFBEBBYiAAIAEgAhA9EAMNARoLQQALCzcAIAEEQCAAIAAoAsTgASABKAIEIAEoAghqRzYCnOIBCyAAECtBABADIAFFckUEQCAAIAEQWwsL0QIBB38jAEEQayIGJAAgBiAENgIIIAYgAzYCDCAFBEAgBSgCBCEKIAUoAgghCQsgASEIAkACQANAIAAoAuzhARAWIQsCQANAIAQgC0kNASADKAAAQXBxQdDUtMIBRgRAIAMgBBAiIgcQAw0EIAQgB2shBCADIAdqIQMMAQsLIAYgAzYCDCAGIAQ2AggCQCAFBEAgACAFEE5BACEHQQAQA0UNAQwFCyAAIAogCRBNIgcQAw0ECyAAIAgQUCAMQQFHQQAgACAIIAIgBkEMaiAGQQhqEEwiByIDa0EAIAMQAxtBCkdyRQRAQbh/IQcMBAsgBxADDQMgAiAHayECIAcgCGohCEEBIQwgBigCDCEDIAYoAgghBAwBCwsgBiADNgIMIAYgBDYCCEG4fyEHIAQNASAIIAFrIQcMAQsgBiADNgIMIAYgBDYCCAsgBkEQaiQAIAcLRgECfyABIAAoArjgASICRwRAIAAgAjYCxOABIAAgATYCuOABIAAoArzgASEDIAAgATYCvOABIAAgASADIAJrajYCwOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEEdCAAbiECCyAAQQh2IgEgAkEYbCIAQYwIaigCAGwgAEGICGooAgBqIgJBA3YgAmogAEGACGooAgAgAEGECGooAgAgAWxqSQs3ACAAIAMgBCAFQYAQEDMiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQMgVBuH8LC78DAQN/IwBBIGsiBSQAIAVBCGogAiADEAYiAhADRQRAIAAgAWoiB0F9aiEGIAUgBBAOIARBBGohAiAFLQACIQMDQEEAIAAgBkkgBUEIahAEGwRAIAAgAiAFQQhqIAMQAkECdGoiBC8BADsAACAFQQhqIAQtAAIQASAAIAQtAANqIgQgAiAFQQhqIAMQAkECdGoiAC8BADsAACAFQQhqIAAtAAIQASAEIAAtAANqIQAMAQUgB0F+aiEEA0AgBUEIahAEIAAgBEtyRQRAIAAgAiAFQQhqIAMQAkECdGoiBi8BADsAACAFQQhqIAYtAAIQASAAIAYtAANqIQAMAQsLA0AgACAES0UEQCAAIAIgBUEIaiADEAJBAnRqIgYvAQA7AAAgBUEIaiAGLQACEAEgACAGLQADaiEADAELCwJAIAAgB08NACAAIAIgBUEIaiADEAIiA0ECdGoiAC0AADoAACAALQADQQFGBEAgBUEIaiAALQACEAEMAQsgBSgCDEEfSw0AIAVBCGogAiADQQJ0ai0AAhABIAUoAgxBIUkNACAFQSA2AgwLIAFBbCAFQQhqEAobIQILCwsgBUEgaiQAIAILkgIBBH8jAEFAaiIJJAAgCSADQTQQCyEDAkAgBEECSA0AIAMgBEECdGooAgAhCSADQTxqIAgQIyADQQE6AD8gAyACOgA+QQAhBCADKAI8IQoDQCAEIAlGDQEgACAEQQJ0aiAKNgEAIARBAWohBAwAAAsAC0EAIQkDQCAGIAlGRQRAIAMgBSAJQQF0aiIKLQABIgtBAnRqIgwoAgAhBCADQTxqIAotAABBCHQgCGpB//8DcRAjIANBAjoAPyADIAcgC2siCiACajoAPiAEQQEgASAKa3RqIQogAygCPCELA0AgACAEQQJ0aiALNgEAIARBAWoiBCAKSQ0ACyAMIAo2AgAgCUEBaiEJDAELCyADQUBrJAALowIBCX8jAEHQAGsiCSQAIAlBEGogBUE0EAsaIAcgBmshDyAHIAFrIRADQAJAIAMgCkcEQEEBIAEgByACIApBAXRqIgYtAAEiDGsiCGsiC3QhDSAGLQAAIQ4gCUEQaiAMQQJ0aiIMKAIAIQYgCyAPTwRAIAAgBkECdGogCyAIIAUgCEE0bGogCCAQaiIIQQEgCEEBShsiCCACIAQgCEECdGooAgAiCEEBdGogAyAIayAHIA4QYyAGIA1qIQgMAgsgCUEMaiAOECMgCUEBOgAPIAkgCDoADiAGIA1qIQggCSgCDCELA0AgBiAITw0CIAAgBkECdGogCzYBACAGQQFqIQYMAAALAAsgCUHQAGokAA8LIAwgCDYCACAKQQFqIQoMAAALAAs0ACAAIAMgBCAFEDYiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQNAVBuH8LCyMAIAA/AEEQdGtB//8DakEQdkAAQX9GBEBBAA8LQQAQAEEBCzsBAX8gAgRAA0AgACABIAJBgCAgAkGAIEkbIgMQCyEAIAFBgCBqIQEgAEGAIGohACACIANrIgINAAsLCwYAIAAQAwsLqBUJAEGICAsNAQAAAAEAAAACAAAAAgBBoAgLswYBAAAAAQAAAAIAAAACAAAAJgAAAIIAAAAhBQAASgAAAGcIAAAmAAAAwAEAAIAAAABJBQAASgAAAL4IAAApAAAALAIAAIAAAABJBQAASgAAAL4IAAAvAAAAygIAAIAAAACKBQAASgAAAIQJAAA1AAAAcwMAAIAAAACdBQAASgAAAKAJAAA9AAAAgQMAAIAAAADrBQAASwAAAD4KAABEAAAAngMAAIAAAABNBgAASwAAAKoKAABLAAAAswMAAIAAAADBBgAATQAAAB8NAABNAAAAUwQAAIAAAAAjCAAAUQAAAKYPAABUAAAAmQQAAIAAAABLCQAAVwAAALESAABYAAAA2gQAAIAAAABvCQAAXQAAACMUAABUAAAARQUAAIAAAABUCgAAagAAAIwUAABqAAAArwUAAIAAAAB2CQAAfAAAAE4QAAB8AAAA0gIAAIAAAABjBwAAkQAAAJAHAACSAAAAAAAAAAEAAAABAAAABQAAAA0AAAAdAAAAPQAAAH0AAAD9AAAA/QEAAP0DAAD9BwAA/Q8AAP0fAAD9PwAA/X8AAP3/AAD9/wEA/f8DAP3/BwD9/w8A/f8fAP3/PwD9/38A/f//AP3//wH9//8D/f//B/3//w/9//8f/f//P/3//38AAAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABEAAAASAAAAEwAAABQAAAAVAAAAFgAAABcAAAAYAAAAGQAAABoAAAAbAAAAHAAAAB0AAAAeAAAAHwAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAkAAAAKAAAACwAAAAwAAAANAAAADgAAAA8AAAAQAAAAEQAAABIAAAATAAAAFAAAABUAAAAWAAAAFwAAABgAAAAZAAAAGgAAABsAAAAcAAAAHQAAAB4AAAAfAAAAIAAAACEAAAAiAAAAIwAAACUAAAAnAAAAKQAAACsAAAAvAAAAMwAAADsAAABDAAAAUwAAAGMAAACDAAAAAwEAAAMCAAADBAAAAwgAAAMQAAADIAAAA0AAAAOAAAADAAEAQeAPC1EBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAEAAAABQAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAQcQQC4sBAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABIAAAAUAAAAFgAAABgAAAAcAAAAIAAAACgAAAAwAAAAQAAAAIAAAAAAAQAAAAIAAAAEAAAACAAAABAAAAAgAAAAQAAAAIAAAAAAAQBBkBIL5gQBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAAAEAAAAEAAAACAAAAAAAAAABAAEBBgAAAAAAAAQAAAAAEAAABAAAAAAgAAAFAQAAAAAAAAUDAAAAAAAABQQAAAAAAAAFBgAAAAAAAAUHAAAAAAAABQkAAAAAAAAFCgAAAAAAAAUMAAAAAAAABg4AAAAAAAEFEAAAAAAAAQUUAAAAAAABBRYAAAAAAAIFHAAAAAAAAwUgAAAAAAAEBTAAAAAgAAYFQAAAAAAABwWAAAAAAAAIBgABAAAAAAoGAAQAAAAADAYAEAAAIAAABAAAAAAAAAAEAQAAAAAAAAUCAAAAIAAABQQAAAAAAAAFBQAAACAAAAUHAAAAAAAABQgAAAAgAAAFCgAAAAAAAAULAAAAAAAABg0AAAAgAAEFEAAAAAAAAQUSAAAAIAABBRYAAAAAAAIFGAAAACAAAwUgAAAAAAADBSgAAAAAAAYEQAAAABAABgRAAAAAIAAHBYAAAAAAAAkGAAIAAAAACwYACAAAMAAABAAAAAAQAAAEAQAAACAAAAUCAAAAIAAABQMAAAAgAAAFBQAAACAAAAUGAAAAIAAABQgAAAAgAAAFCQAAACAAAAULAAAAIAAABQwAAAAAAAAGDwAAACAAAQUSAAAAIAABBRQAAAAgAAIFGAAAACAAAgUcAAAAIAADBSgAAAAgAAQFMAAAAAAAEAYAAAEAAAAPBgCAAAAAAA4GAEAAAAAADQYAIABBgBcLhwIBAAEBBQAAAAAAAAUAAAAAAAAGBD0AAAAAAAkF/QEAAAAADwX9fwAAAAAVBf3/HwAAAAMFBQAAAAAABwR9AAAAAAAMBf0PAAAAABIF/f8DAAAAFwX9/38AAAAFBR0AAAAAAAgE/QAAAAAADgX9PwAAAAAUBf3/DwAAAAIFAQAAABAABwR9AAAAAAALBf0HAAAAABEF/f8BAAAAFgX9/z8AAAAEBQ0AAAAQAAgE/QAAAAAADQX9HwAAAAATBf3/BwAAAAEFAQAAABAABgQ9AAAAAAAKBf0DAAAAABAF/f8AAAAAHAX9//8PAAAbBf3//wcAABoF/f//AwAAGQX9//8BAAAYBf3//wBBkBkLhgQBAAEBBgAAAAAAAAYDAAAAAAAABAQAAAAgAAAFBQAAAAAAAAUGAAAAAAAABQgAAAAAAAAFCQAAAAAAAAULAAAAAAAABg0AAAAAAAAGEAAAAAAAAAYTAAAAAAAABhYAAAAAAAAGGQAAAAAAAAYcAAAAAAAABh8AAAAAAAAGIgAAAAAAAQYlAAAAAAABBikAAAAAAAIGLwAAAAAAAwY7AAAAAAAEBlMAAAAAAAcGgwAAAAAACQYDAgAAEAAABAQAAAAAAAAEBQAAACAAAAUGAAAAAAAABQcAAAAgAAAFCQAAAAAAAAUKAAAAAAAABgwAAAAAAAAGDwAAAAAAAAYSAAAAAAAABhUAAAAAAAAGGAAAAAAAAAYbAAAAAAAABh4AAAAAAAAGIQAAAAAAAQYjAAAAAAABBicAAAAAAAIGKwAAAAAAAwYzAAAAAAAEBkMAAAAAAAUGYwAAAAAACAYDAQAAIAAABAQAAAAwAAAEBAAAABAAAAQFAAAAIAAABQcAAAAgAAAFCAAAACAAAAUKAAAAIAAABQsAAAAAAAAGDgAAAAAAAAYRAAAAAAAABhQAAAAAAAAGFwAAAAAAAAYaAAAAAAAABh0AAAAAAAAGIAAAAAAAEAYDAAEAAAAPBgOAAAAAAA4GA0AAAAAADQYDIAAAAAAMBgMQAAAAAAsGAwgAAAAACgYDBABBpB0L2QEBAAAAAwAAAAcAAAAPAAAAHwAAAD8AAAB/AAAA/wAAAP8BAAD/AwAA/wcAAP8PAAD/HwAA/z8AAP9/AAD//wAA//8BAP//AwD//wcA//8PAP//HwD//z8A//9/AP///wD///8B////A////wf///8P////H////z////9/AAAAAAEAAAACAAAABAAAAAAAAAACAAAABAAAAAgAAAAAAAAAAQAAAAIAAAABAAAABAAAAAQAAAAEAAAABAAAAAgAAAAIAAAACAAAAAcAAAAIAAAACQAAAAoAAAALAEGgIAsDwBBQ"});var sA,rA,bw,aA=ct(()=>{gt();sA="display-p3",rA="display-p3-linear",bw={...xt.spaces[dt],outputColorSpaceConfig:{drawingBufferColorSpace:dt,toneMappingMode:"extended"}}});async function RM(i){let{vkFormat:e}=i;if(Zh[e]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat: "+e);ar[e]===void 0&&console.warn('THREE.KTX2Loader: Missing ".type" for vkFormat: '+e);let t;i.supercompressionScheme===2&&(jh||(jh=new Promise(async a=>{let o=new Ml;await o.init(),a(o)})),t=await jh);let n=[];for(let a=0;a<i.levels.length;a++){let o=Math.max(1,i.pixelWidth>>a),c=Math.max(1,i.pixelHeight>>a),l=i.pixelDepth?Math.max(1,i.pixelDepth>>a):0,u=i.levels[a],d;if(i.supercompressionScheme===0)d=u.levelData;else if(i.supercompressionScheme===2)d=t.decode(u.levelData,u.uncompressedByteLength);else throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");let h;ar[e]===Yt?h=new Float32Array(d.buffer,d.byteOffset,d.byteLength/Float32Array.BYTES_PER_ELEMENT):ar[e]===wt||ar[e]===zi?h=new Uint16Array(d.buffer,d.byteOffset,d.byteLength/Uint16Array.BYTES_PER_ELEMENT):ar[e]===na||ar[e]===ia?h=new Uint32Array(d.buffer,d.byteOffset,d.byteLength/Uint32Array.BYTES_PER_ELEMENT):h=d,n.push({data:h,width:o,height:c,depth:l})}let s=i.levelCount===0||n.length>1,r;if(TM.has(Zh[e]))r=i.pixelDepth===0?new Dn(n[0].data,i.pixelWidth,i.pixelHeight):new ss(n[0].data,i.pixelWidth,i.pixelHeight,i.pixelDepth),r.mipmaps=n,r.minFilter=s?ea:Pt,r.magFilter=Pt,r.generateMipmaps=i.levelCount===0,r.normalized=IM.has(e);else{if(i.pixelDepth>0)throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");if(i.faceCount===6){let a=[];for(let o=0;o<6;o++){let c=[];for(let l of n){let u=l.data.length/6;c.push({data:l.data.subarray(o*u,(o+1)*u),width:l.width,height:l.height})}a.push({mipmaps:c,width:i.pixelWidth,height:i.pixelHeight})}r=new Vr(a)}else r=new os(n,i.pixelWidth,i.pixelHeight);r.minFilter=s?Ht:vt,r.magFilter=vt}return r.type=ar[e],r.format=Zh[e],r.colorSpace=YA(i),r.needsUpdate=!0,r}function YA(i){let e=i.dataFormatDescriptor[0];return e.colorPrimaries===1?e.transferFunction===2?dt:on:e.colorPrimaries===10?e.transferFunction===2?sA:rA:e.colorPrimaries===0?In:(console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${e.colorPrimaries}"`),In)}var wM,CM,Jh,Yh,jh,Xi,TM,IM,Zh,ar,jA=ct(()=>{gt();Zp();tA();iA();aA();wM=new URL("../libs/basis/basis_transcoder.wasm",import.meta.url).toString(),CM=new URL("../libs/basis/basis_transcoder.js",import.meta.url).toString(),Jh=new WeakMap,Yh=0,Xi=class i extends Kn{constructor(e){super(e),this.isKTX2Loader=!0,this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new yl,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(e){return this.transcoderPath=e,this}setWorkerLimit(e){return this.workerPool.setWorkerLimit(e),this}async detectSupportAsync(e){return console.warn('KTX2Loader: "detectSupportAsync()" has been deprecated. Use "detectSupport()" and "await renderer.init();" when creating the renderer.'),await e.init(),this.detectSupport(e)}detectSupport(e){return e.isWebGPURenderer===!0?this.workerConfig={astcSupported:e.hasFeature("texture-compression-astc"),astcHDRSupported:!1,etc1Supported:e.hasFeature("texture-compression-etc1"),etc2Supported:e.hasFeature("texture-compression-etc2"),dxtSupported:e.hasFeature("texture-compression-s3tc"),bptcSupported:e.hasFeature("texture-compression-bc"),pvrtcSupported:e.hasFeature("texture-compression-pvrtc")}:(this.workerConfig={astcSupported:e.extensions.has("WEBGL_compressed_texture_astc"),astcHDRSupported:e.extensions.has("WEBGL_compressed_texture_astc")&&e.extensions.get("WEBGL_compressed_texture_astc").getSupportedProfiles().includes("hdr"),etc1Supported:e.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:e.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:e.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:e.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:e.extensions.has("WEBGL_compressed_texture_pvrtc")||e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},typeof navigator<"u"&&typeof navigator.platform<"u"&&typeof navigator.userAgent<"u"&&navigator.platform.indexOf("Linux")>=0&&navigator.userAgent.indexOf("Android")<0&&this.workerConfig.astcSupported&&this.workerConfig.etc2Supported&&this.workerConfig.bptcSupported&&this.workerConfig.dxtSupported&&(this.workerConfig.astcSupported=!1,this.workerConfig.etc1Supported=!1,this.workerConfig.etc2Supported=!1)),this}init(){if(!this.transcoderPending){let e=new ai(this.manager);e.setPriority(this.priority),e.setCache(this.cache),e.setWithCredentials(this.withCredentials);let t=new ai(this.manager);t.setPriority(this.priority),t.setCache(this.cache),t.setWithCredentials(this.withCredentials),t.setResponseType("arraybuffer");let n,s;this.transcoderPath===""?(n=e.loadAsync(CM),s=t.loadAsync(wM)):(e.setPath(this.transcoderPath),n=e.loadAsync("basis_transcoder.js"),t.setPath(this.transcoderPath),s=t.loadAsync("basis_transcoder.wasm")),this.transcoderPending=Promise.all([n,s]).then(([r,a])=>{let o=i.BasisWorker.toString(),c=["/* constants */","let _EngineFormat = "+JSON.stringify(i.EngineFormat),"let _EngineType = "+JSON.stringify(i.EngineType),"let _TranscoderFormat = "+JSON.stringify(i.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(i.BasisFormat),"/* basis_transcoder.js */",r,"/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([c])),this.transcoderBinary=a,this.workerPool.setWorkerCreator(()=>{let l=new Worker(this.workerSourceURL),u=this.transcoderBinary.slice(0);return l.postMessage({type:"init",config:this.workerConfig,transcoderBinary:u},[u]),l})}),Yh>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),Yh++}return this.transcoderPending}load(e,t,n,s){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");let r=new ai(this.manager);r.setPriority(this.priority),r.setCache(this.cache),r.setPath(this.path),r.setCrossOrigin(this.crossOrigin),r.setWithCredentials(this.withCredentials),r.setRequestHeader(this.requestHeader),r.setResponseType("arraybuffer"),r.load(e,a=>{this.parse(a,t,s)},n,s)}parse(e,t,n){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");if(Jh.has(e))return Jh.get(e).promise.then(t).catch(n);this._createTexture(e).then(s=>t?t(s):null).catch(n)}_createTextureFrom(e,t){let{type:n,error:s,data:{faces:r,width:a,height:o,format:c,type:l,dfdFlags:u}}=e;if(n==="error")return Promise.reject(s);let d;if(t.faceCount===6)d=new Vr(r,c,l);else{let h=r[0].mipmaps;d=t.layerCount>1?new eo(h,a,o,t.layerCount,c,l):new os(h,a,o,c,l)}return d.minFilter=r[0].mipmaps.length===1?vt:Ht,d.magFilter=vt,d.generateMipmaps=!1,d.needsUpdate=!0,d.colorSpace=YA(t),d.premultiplyAlpha=!!(u&1),d}async _createTexture(e,t={}){let n=eA(new Uint8Array(e)),s=n.vkFormat===1000066e3&&n.dataFormatDescriptor[0].colorModel===167;if(!(n.vkFormat===0||s&&!this.workerConfig.astcHDRSupported))return RM(n);let a=t,o=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffer:e,taskConfig:a},[e])).then(c=>this._createTextureFrom(c.data,n));return Jh.set(e,{promise:o}),o}dispose(){this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),Yh--}};Xi.BasisFormat={ETC1S:0,UASTC:1,UASTC_HDR:2};Xi.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16,BC6H:22,RGB_HALF:24,RGBA_HALF:25};Xi.EngineFormat={RGBAFormat:jt,RGBA_ASTC_4x4_Format:Ki,RGB_BPTC_UNSIGNED_Format:la,RGBA_BPTC_Format:_s,RGBA_ETC2_EAC_Format:Zs,RGBA_PVRTC_4BPPV1_Format:gs,RGBA_S3TC_DXT5_Format:Wi,RGB_ETC1_Format:ra,RGB_ETC2_Format:js,RGB_PVRTC_4BPPV1_Format:sa,RGBA_S3TC_DXT1_Format:Hi};Xi.EngineType={UnsignedByteType:ot,HalfFloatType:wt,FloatType:Yt};Xi.BasisWorker=function(){let i,e,t,n=_EngineFormat,s=_EngineType,r=_TranscoderFormat,a=_BasisFormat;self.addEventListener("message",function(p){let g=p.data;switch(g.type){case"init":i=g.config,o(g.transcoderBinary);break;case"transcode":e.then(()=>{try{let{faces:m,buffers:A,width:x,height:v,hasAlpha:_,format:y,type:E,dfdFlags:b}=c(g.buffer);self.postMessage({type:"transcode",id:g.id,data:{faces:m,width:x,height:v,hasAlpha:_,format:y,type:E,dfdFlags:b}},A)}catch(m){console.error(m),self.postMessage({type:"error",id:g.id,error:m.message})}});break}});function o(p){e=new Promise(g=>{t={wasmBinary:p,onRuntimeInitialized:g},BASIS(t)}).then(()=>{t.initializeBasis(),t.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")})}function c(p){let g=new t.KTX2File(new Uint8Array(p));function m(){g.close(),g.delete()}if(!g.isValid())throw m(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");let A;if(g.isUASTC())A=a.UASTC;else if(g.isETC1S())A=a.ETC1S;else if(g.isHDR())A=a.UASTC_HDR;else throw new Error("THREE.KTX2Loader: Unknown Basis encoding");let x=g.getWidth(),v=g.getHeight(),_=g.getLayers()||1,y=g.getLevels(),E=g.getFaces(),b=g.getHasAlpha(),M=g.getDFDFlags(),{transcoderFormat:I,engineFormat:S,engineType:C}=d(A,x,v,b);if(!x||!v||!y)throw m(),new Error("THREE.KTX2Loader:	Invalid texture");if(!g.startTranscoding())throw m(),new Error("THREE.KTX2Loader: .startTranscoding failed");let B=[],D=[];for(let R=0;R<E;R++){let k=[];for(let F=0;F<y;F++){let P=[],H,U;for(let O=0;O<_;O++){let V=g.getImageLevelInfo(F,O,R);R===0&&F===0&&O===0&&(V.origWidth%4!==0||V.origHeight%4!==0)&&console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."),y>1?(H=V.origWidth,U=V.origHeight):(H=V.width,U=V.height);let j=new Uint8Array(g.getImageTranscodedSizeInBytes(F,O,0,I)),Q=g.transcodeImage(j,F,O,R,I,0,-1,-1);if(C===s.HalfFloatType&&(j=new Uint16Array(j.buffer,j.byteOffset,j.byteLength/Uint16Array.BYTES_PER_ELEMENT)),!Q)throw m(),new Error("THREE.KTX2Loader: .transcodeImage failed.");P.push(j)}let L=f(P);k.push({data:L,width:H,height:U}),D.push(L.buffer)}B.push({mipmaps:k,width:x,height:v,format:S,type:C})}return m(),{faces:B,buffers:D,width:x,height:v,hasAlpha:b,dfdFlags:M,format:S,type:C}}let l=[{if:"astcSupported",basisFormat:[a.UASTC],transcoderFormat:[r.ASTC_4x4,r.ASTC_4x4],engineFormat:[n.RGBA_ASTC_4x4_Format,n.RGBA_ASTC_4x4_Format],engineType:[s.UnsignedByteType],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.BC7_M5,r.BC7_M5],engineFormat:[n.RGBA_BPTC_Format,n.RGBA_BPTC_Format],engineType:[s.UnsignedByteType],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.BC1,r.BC3],engineFormat:[n.RGBA_S3TC_DXT1_Format,n.RGBA_S3TC_DXT5_Format],engineType:[s.UnsignedByteType],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.ETC1,r.ETC2],engineFormat:[n.RGB_ETC2_Format,n.RGBA_ETC2_EAC_Format],engineType:[s.UnsignedByteType],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.ETC1],engineFormat:[n.RGB_ETC1_Format],engineType:[s.UnsignedByteType],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.PVRTC1_4_RGB,r.PVRTC1_4_RGBA],engineFormat:[n.RGB_PVRTC_4BPPV1_Format,n.RGBA_PVRTC_4BPPV1_Format],engineType:[s.UnsignedByteType],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0},{if:"bptcSupported",basisFormat:[a.UASTC_HDR],transcoderFormat:[r.BC6H],engineFormat:[n.RGB_BPTC_UNSIGNED_Format],engineType:[s.HalfFloatType],priorityHDR:1,needsPowerOfTwo:!1},{basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.RGBA32,r.RGBA32],engineFormat:[n.RGBAFormat,n.RGBAFormat],engineType:[s.UnsignedByteType,s.UnsignedByteType],priorityETC1S:100,priorityUASTC:100,needsPowerOfTwo:!1},{basisFormat:[a.UASTC_HDR],transcoderFormat:[r.RGBA_HALF],engineFormat:[n.RGBAFormat],engineType:[s.HalfFloatType],priorityHDR:100,needsPowerOfTwo:!1}],u={[a.ETC1S]:l.filter(p=>p.basisFormat.includes(a.ETC1S)).sort((p,g)=>p.priorityETC1S-g.priorityETC1S),[a.UASTC]:l.filter(p=>p.basisFormat.includes(a.UASTC)).sort((p,g)=>p.priorityUASTC-g.priorityUASTC),[a.UASTC_HDR]:l.filter(p=>p.basisFormat.includes(a.UASTC_HDR)).sort((p,g)=>p.priorityHDR-g.priorityHDR)};function d(p,g,m,A){let x=u[p];for(let v=0;v<x.length;v++){let _=x[v];if(_.if&&!i[_.if]||!_.basisFormat.includes(p)||A&&_.transcoderFormat.length<2||_.needsPowerOfTwo&&!(h(g)&&h(m)))continue;let y=_.transcoderFormat[A?1:0],E=_.engineFormat[A?1:0],b=_.engineType[0];return{transcoderFormat:y,engineFormat:E,engineType:b}}throw new Error("THREE.KTX2Loader: Failed to identify transcoding target.")}function h(p){return p<=2?!0:(p&p-1)===0&&p!==0}function f(p){if(p.length===1)return p[0];let g=0;for(let x=0;x<p.length;x++){let v=p[x];g+=v.byteLength}let m=new Uint8Array(g),A=0;for(let x=0;x<p.length;x++){let v=p[x];m.set(v,A),A+=v.byteLength}return m}};TM=new Set([jt,Js,Un,Zn]),IM=new Set([91]),Zh={109:jt,103:Un,100:Zn,97:jt,83:Un,76:Zn,91:jt,43:jt,37:jt,22:Un,16:Un,15:Zn,9:Zn,123:Js,122:Js,152:Zs,148:js,153:aa,154:oa,155:$s,156:ca,1000066e3:Ki,158:Ki,157:Ki,1000066004:xs,166:xs,165:xs,134:Hi,133:Hi,132:ms,131:ms,138:Wi,137:Wi,140:ha,139:ua,142:da,141:er,146:_s,145:_s,1000054005:gs,1000054001:gs,1000054004:Ys,1000054e3:Ys},ar={109:Yt,103:Yt,100:Yt,97:wt,83:wt,76:wt,91:zi,43:ot,37:ot,22:ot,16:ot,15:ot,9:ot,123:na,122:ia,152:ot,148:ot,153:ot,154:ot,155:ot,156:ot,1000066e3:wt,158:ot,157:ot,1000066004:wt,166:ot,165:ot,134:ot,133:ot,132:ot,131:ot,138:ot,137:ot,140:ot,139:ot,142:ot,141:ot,146:ot,145:ot,1000054005:ot,1000054001:ot,1000054004:ot,1000054e3:ot}});var El,ZA=ct(()=>{gt();El=class extends Ao{constructor(e){super(e),this.type=wt}parse(e){let a=function(M,I){switch(M){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(I||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(I||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(I||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(I||""))}},d=function(M,I,S){I=I||1024;let B=M.pos,D=-1,R=0,k="",F=String.fromCharCode.apply(null,new Uint16Array(M.subarray(B,B+128)));for(;0>(D=F.indexOf(`
`))&&R<I&&B<M.byteLength;)k+=F,R+=F.length,B+=128,F=String.fromCharCode.apply(null,new Uint16Array(M.subarray(B,B+128)));return-1<D?(S!==!1&&(M.pos+=R+D+1),k+F.slice(0,D)):!1},h=function(M){let I=/^#\?(\S+)/,S=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,B=/^\s*FORMAT=(\S+)\s*$/,D=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,R={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},k,F;for((M.pos>=M.byteLength||!(k=d(M)))&&a(1,"no header found"),(F=k.match(I))||a(3,"bad initial token"),R.valid|=1,R.programtype=F[1],R.string+=k+`
`;k=d(M),k!==!1;){if(R.string+=k+`
`,k.charAt(0)==="#"){R.comments+=k+`
`;continue}if((F=k.match(S))&&(R.gamma=parseFloat(F[1])),(F=k.match(C))&&(R.exposure=parseFloat(F[1])),(F=k.match(B))&&(R.valid|=2,R.format=F[1]),(F=k.match(D))&&(R.valid|=4,R.height=parseInt(F[1],10),R.width=parseInt(F[2],10)),R.valid&2&&R.valid&4)break}return R.valid&2||a(3,"missing format specifier"),R.valid&4||a(3,"missing image size specifier"),R},f=function(M,I,S){let C=I;if(C<8||C>32767||M[0]!==2||M[1]!==2||M[2]&128)return new Uint8Array(M);C!==(M[2]<<8|M[3])&&a(3,"wrong scanline width");let B=new Uint8Array(4*I*S);B.length||a(4,"unable to allocate buffer space");let D=0,R=0,k=4*C,F=new Uint8Array(4),P=new Uint8Array(k),H=S;for(;H>0&&R<M.byteLength;){R+4>M.byteLength&&a(1),F[0]=M[R++],F[1]=M[R++],F[2]=M[R++],F[3]=M[R++],(F[0]!=2||F[1]!=2||(F[2]<<8|F[3])!=C)&&a(3,"bad rgbe scanline format");let U=0,L;for(;U<k&&R<M.byteLength;){L=M[R++];let V=L>128;if(V&&(L-=128),(L===0||U+L>k)&&a(3,"bad scanline data"),V){let j=M[R++];for(let Q=0;Q<L;Q++)P[U++]=j}else P.set(M.subarray(R,R+L),U),U+=L,R+=L}let O=C;for(let V=0;V<O;V++){let j=0;B[D]=P[V+j],j+=C,B[D+1]=P[V+j],j+=C,B[D+2]=P[V+j],j+=C,B[D+3]=P[V+j],D+=4}H--}return B},p=function(M,I,S,C){let B=M[I+3],D=Math.pow(2,B-128)/255;S[C+0]=M[I+0]*D,S[C+1]=M[I+1]*D,S[C+2]=M[I+2]*D,S[C+3]=1},g=function(M,I,S,C){let B=M[I+3],D=Math.pow(2,B-128)/255;S[C+0]=mi.toHalfFloat(Math.min(M[I+0]*D,65504)),S[C+1]=mi.toHalfFloat(Math.min(M[I+1]*D,65504)),S[C+2]=mi.toHalfFloat(Math.min(M[I+2]*D,65504)),S[C+3]=mi.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;let A=h(m),x=A.width,v=A.height,_=f(m.subarray(m.pos),x,v),y,E,b;switch(this.type){case Yt:b=_.length/4;let M=new Float32Array(b*4);for(let S=0;S<b;S++)p(_,S*4,M,S*4);y=M,E=Yt;break;case wt:b=_.length/4;let I=new Uint16Array(b*4);for(let S=0;S<b;S++)g(_,S*4,I,S*4);y=I,E=wt;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:x,height:v,data:y,header:A.string,gamma:A.gamma,exposure:A.exposure,type:E,colorSpace:on,minFilter:vt,magFilter:vt,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}}});var $A,em=ct(()=>{$A=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(A){r=A.instance,r.exports.__wasm_call_ctors()});function o(A){for(var x=new Uint8Array(A.length),v=0;v<A.length;++v){var _=A.charCodeAt(v);x[v]=_>96?_-97:_>64?_-39:_+4}for(var y=0,v=0;v<A.length;++v)x[y++]=x[v]<60?n[x[v]]:(x[v]-60)*64+x[++v];return x.buffer.slice(0,y)}function c(A,x,v,_,y,E,b){var M=A.exports.sbrk,I=_+3&-4,S=M(I*y),C=M(E.length),B=new Uint8Array(A.exports.memory.buffer);B.set(E,C);var D=x(S,_,y,C,E.length);if(D==0&&b&&b(S,I,y),v.set(B.subarray(S,S+_*y)),M(S-M(0)),D!=0)throw new Error("Malformed buffer data: "+D)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},d=[],h=0;function f(A){var x={object:new Worker(A),pending:0,requests:{}};return x.object.onmessage=function(v){var _=v.data;x.pending-=_.count,x.requests[_.id][_.action](_.value),delete x.requests[_.id]},x}function p(A){for(var x="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+c.toString()+m.toString(),v=new Blob([x],{type:"text/javascript"}),_=URL.createObjectURL(v),y=d.length;y<A;++y)d[y]=f(_);for(var y=A;y<d.length;++y)d[y].object.postMessage({});d.length=A,URL.revokeObjectURL(_)}function g(A,x,v,_,y){for(var E=d[0],b=1;b<d.length;++b)d[b].pending<E.pending&&(E=d[b]);return new Promise(function(M,I){var S=new Uint8Array(v),C=++h;E.pending+=A,E.requests[C]={resolve:M,reject:I},E.object.postMessage({id:C,count:A,size:x,source:S,mode:_,filter:y},[S.buffer])})}function m(A){var x=A.data;self.ready.then(function(v){if(!x.id)return self.close();try{var _=new Uint8Array(x.count*x.size);c(v,v.exports[x.mode],_,x.count,x.size,x.source,v.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:_},[_.buffer])}catch(y){self.postMessage({id:x.id,count:x.count,action:"reject",value:y})}})}return{ready:a,supported:!0,useWorkers:function(A){p(A)},decodeVertexBuffer:function(A,x,v,_,y){c(r,r.exports.meshopt_decodeVertexBuffer,A,x,v,_,r.exports[l[y]])},decodeIndexBuffer:function(A,x,v,_){c(r,r.exports.meshopt_decodeIndexBuffer,A,x,v,_)},decodeIndexSequence:function(A,x,v,_){c(r,r.exports.meshopt_decodeIndexSequence,A,x,v,_)},decodeGltfBuffer:function(A,x,v,_,y,E){c(r,r.exports[u[y]],A,x,v,_,r.exports[l[E]])},decodeGltfBufferAsync:function(A,x,v,_,y){return d.length>0?g(A,x,v,u[_],l[y]):a.then(function(){var E=new Uint8Array(A*x);return c(r,r.exports[u[_]],E,A,x,v,r.exports[l[y]]),E})}}})()});async function tm(i,e,t,n,s){let r="assets/",a=new pn,o=async U=>{let L=await a.loadAsync(r+U);return L.colorSpace=In,L.generateMipmaps=!1,L.minFilter=vt,L},c=await fetch(r+"surface-light.json").then(U=>U.json()),l=await Promise.all([o(t.floor.states.day.url),o(t.floor.states.night.url),o(c.day.url),o(c.night.url)]),[u,d,h]=t.dims,f=new Uint16Array(u*6*d*h*4),p=new ss(f,u*6,d,h);p.format=jt,p.type=wt,p.minFilter=p.magFilter=vt,p.unpackAlignment=1;let g={uIrr:{value:p},uGrid:{value:new T(...t.dims)},uOrigin:{value:new T(...t.origin)},uStep:{value:new T(...t.step)},uNight:{value:0},uIndoor:{value:1},uDayFloor:{value:l[0]},uNightFloor:{value:l[1]},uWallsDay:{value:l[2]},uWallsNight:{value:l[3]},uWallRange:{value:new me(c.day.range,c.night.range)},uFloorRange:{value:new me(t.floor.states.day.range,t.floor.states.night.range)}};g.uRoomReflection={value:null},g.uRoomOrigin={value:new T},g.uRoomLow={value:new T},g.uRoomHigh={value:new T},g.uHasReflection={value:0};let m=t.practicals.slice(0,7).map(U=>new mt(U.position[0],U.position[2],-U.position[1],U.powerWatts*.035));m.push(new mt(6.5,2.58,-3.1,5.2)),g.uLamps={value:m};let A=new Float32Array(8).fill(-1);g.uPower={value:A},g.uSwitched={value:0};let x=()=>{};function v(U,L){let O=0,V=1/0;for(let j=0;j<m.length;j++){let Q=m[j],q=(U.x-Q.x)**2+(U.y-Q.y)**2+(U.z-Q.z)**2;q<V&&(V=q,O=j)}A[O]=L==null?-1:+!!L,g.uSwitched.value=Number(A.some(j=>j>=0)),x(m[O],L)}let _=6,y=[],E=Array.from({length:_},()=>new mt),b=Array.from({length:_},()=>new Oe(0)),M=Array.from({length:_},()=>new T),I=Array.from({length:_},()=>new T);Object.assign(g,{uLocalSources:{value:E},uLocalColors:{value:b},uLocalDirections:{value:M},uLocalLimits:{value:I}});function S(U){let L=y.length;L>=E.length||(y.push(U),U.visible=!1,b[L].copy(U.color),E[L].set(U.position.x,U.position.y,U.position.z,U.intensity),I[L].set(U.distance**2,U.isSpotLight?Math.cos(U.angle):-2,U.isSpotLight?Math.cos(U.angle*(1-U.penumbra)):-1),U.isSpotLight&&M[L].subVectors(U.target.position,U.position).normalize())}function C(){for(let U=0;U<y.length;U++)E[U].w=y[U].intensity}let B=async(U,L,O)=>{let V;try{V=await s.loadAsync(r+"surfaces/"+U)}catch{V=await a.loadAsync(r+"surfaces/"+L)}return V.colorSpace=O?dt:In,V.wrapS=V.wrapT=an,V.anisotropy=Math.min(i.capabilities.getMaxAnisotropy(),8),V},D={};await Promise.all(Object.entries(n).map(async([U,L])=>{D[U]=await Promise.all([B(L.albedo,L.fallback,!0),B(L.normal,L.normalFallback,!1),L.roughness?B(L.roughness,L.roughnessFallback,!1):null])})),await Promise.all([0,1,2,3].map(async U=>{let L=await a.loadAsync(r+"print-"+U+".jpg");L.colorSpace=dt,L.anisotropy=8,D["print-"+U]=[L,null]}));let R=-2;function k(U){if(!(Math.abs(U-R)<.001)){R=U,g.uNight.value=U;for(let L=0;L<h;L++)for(let O=0;O<d;O++)for(let V=0;V<u;V++){let j=V+u*(O+d*L),Q=t.origin[0]+V*t.step[0],q=t.origin[1]+O*t.step[1],Z=Q>-.79&&Q<2.28&&q>7&&q<11.2?.22:Q<-3.15&&Q>-8.98&&q>.05&&q<5.4?.095:0;for(let ue=0;ue<6;ue++){let de=4*(V+ue*u+6*u*(O+L*d));for(let $=0;$<3;$++){let ge=t.states.day.rgb[ue][3*j+$],fe=t.states.night.rgb[ue][3*j+$];f[de+$]=mi.toHalfFloat(ge*(1-U)+fe*(U+Z*(1-U)))}f[de+3]=15360}}p.needsUpdate=!0}}k(0);function F(U,{finish:L=!1,floor:O=!1,bulb:V=!1,glass:j=!1,plainMap:Q=!1,fixturePower:q=null}={}){return U.onBeforeCompile=Z=>{Object.assign(Z.uniforms,g),Z.uniforms.uFixturePower=q??{value:-1},Z.vertexShader=Z.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vHousePos;
`+(L?"attribute vec4 _finish; varying vec4 vFinish; attribute vec3 _light; varying vec3 vAtlas;":"")),Z.vertexShader=Z.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
vHousePos=(modelMatrix*vec4(transformed,1.)).xyz;`+(L?"vFinish=_finish;vAtlas=_light;":""));let ue=`
        varying vec3 vHousePos;
        uniform highp sampler3D uIrr;
        uniform vec3 uGrid,uOrigin,uStep;
        uniform float uNight,uFixturePower;
        uniform sampler2D uDayFloor,uNightFloor,uWallsDay,uWallsNight;uniform vec2 uWallRange;
        uniform vec4 uLocalSources[${_}];uniform vec3 uLocalColors[${_}],uLocalDirections[${_}],uLocalLimits[${_}];
        uniform vec2 uFloorRange;uniform vec4 uLamps[8];uniform float uPower[8],uSwitched;uniform samplerCube uRoomReflection; uniform float uHasReflection;uniform vec3 uRoomOrigin,uRoomLow,uRoomHigh;
        vec3 sampleDir(vec3 grid,float face){
           vec3 coord=grid;
           coord.x+=uGrid.x*face;
           return texture(uIrr,(coord+.5)/(uGrid*vec3(6.,1.,1.))).rgb;
        }
        // Integrate a rectangular daylight opening. Four finite patches retain
        // angular shape up close and preserve the cosine response as one turns.
        vec3 throughWindow(vec3 p,vec3 n,vec3 center,vec3 width,float height){
          float w=length(width),area=w*height*.25;
          vec3 face=normalize(cross(width,vec3(0.,1.,0.)));
          vec3 total=vec3(0.);
          for(int i=0;i<4;i++){
            float side=(i==0||i==2)?-.25:.25,up=i<2?-.25:.25;
            vec3 ray=center+width*side+vec3(0.,up*height,0.)-p;
            float r2=max(.001,dot(ray,ray));vec3 line=ray*inversesqrt(r2);
            float cone=area*abs(dot(face,line))/(3.14159*r2+area);
            vec3 exterior=mix(vec3(.115,.097,.072),vec3(.36,.41,.49),smoothstep(-.14,.47,line.y));
            float cosine=max(dot(n,line),0.);
            // Matte floors and plaster return a broad, warmer lobe inward.
            total+=cone*(cosine+(.26-.13*cosine)*vec3(1.,.87,.72))*exterior;
          }
          return total;
        }
        vec3 windowResponse(vec3 p,vec3 n){
          if(p.z < -6.95){
            float x=p.x;vec3 c=x < -4.64 ? vec3(-6.775,1.60,-11.015) : x < -.79 ? vec3(-2.65,1.65,-11.015) :
              x < 2.28 ? vec3(.80,2.015,-11.015) : vec3(5.70,1.60,-11.015);
            float width=x < -4.64 ? 3.09 : x < -.79 ? 2.44 : x < 2.28 ? 2.14 : 4.94;
            vec3 result=throughWindow(p,n,c,vec3(width,0.,0.),x>-.79&&x<2.28?.61:1.44);
            if(x>2.28)result+=throughWindow(p,n,vec3(9.025,1.69,-8.75),vec3(0.,0.,2.70),1.28);
            return result;
          }
          vec3 result=throughWindow(p,n,vec3(p.x< -3.?-6.1:p.x<4.9?.96:6.95,1.67,0.),vec3(p.x< -3.?5.8:p.x<4.9?7.75:4.02,0.,0.),3.13);
          if(p.x>4.)result+=throughWindow(p,n,vec3(9.025,1.69,-2.75),vec3(0.,0.,3.30),1.28);
          return result;
        }
        vec3 houseBounce(vec3 p,vec3 normalWorld){
          vec3 b=vec3(p.x,-p.z,p.y);
          vec3 n=vec3(normalWorld.x,-normalWorld.z,normalWorld.y);
          vec3 g=clamp((b-uOrigin)/uStep,vec3(0.),uGrid-1.);
          vec3 w=n*n;
          return sampleDir(g,n.x<0.?1.:0.)*w.x+sampleDir(g,n.y<0.?3.:2.)*w.y+sampleDir(g,n.z<0.?5.:4.)*w.z;
        }`;Z.fragmentShader=Z.fragmentShader.replace("#include <common>",`#include <common>
`+ue+(L?`
varying vec4 vFinish; varying vec3 vAtlas;`:"")),L&&(Z.fragmentShader=Z.fragmentShader.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor=vFinish.x;
#ifdef USE_ROUGHNESSMAP
 roughnessFactor+=(texelRoughness.g-.5)*.35;
#endif
 roughnessFactor=clamp(roughnessFactor,.065,1.);`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
metalnessFactor=vFinish.y;`)),U.name==="gravel"&&(Z.fragmentShader=Z.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
if(length(vHousePos.xz)>25.)discard;`)),U.name==="plaster"&&(Z.fragmentShader=Z.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        vec3 paint=mix(diffuseColor.rgb,vec3(.91,.896,.85),.60);
        float wallPaint=smoothstep(.24,1.,vHousePos.y)*(1.-smoothstep(9.12,9.3,abs(vHousePos.x)));
        diffuseColor.rgb=mix(diffuseColor.rgb,paint,.84*wallPaint);`)),!Q&&U.map&&(Z.fragmentShader=Z.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.rgb*=1.23;`)),U.name==="shade"&&(Z.fragmentShader=Z.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        float middle=vHousePos.z < -7. ? (vHousePos.x<-.9 ? (vHousePos.x< -4. ? .91 : 1.03) : 1.42) : 1.56;
        float transmitted=exp(-pow((vHousePos.y-middle)/.23,2.));
        float switched=uFixturePower<0.?uNight:uFixturePower*mix(.18,1.,uNight);
        totalEmissiveRadiance+=diffuseColor.rgb*vec3(1.,.73,.41)*((uFixturePower==0.?0.:.021)+switched*(.35+1.42*transmitted));
      `)),V&&(Z.fragmentShader=Z.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance+=diffuseColor.rgb*vFinish.z*(uFixturePower<0.?mix(.48,10.,uNight):uFixturePower*mix(1.4,10.,uNight));`)),U.normalMap&&(Z.fragmentShader=Z.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
vec3 nx=dFdx(normal), ny=dFdy(normal); roughnessFactor=sqrt(clamp(roughnessFactor*roughnessFactor+.20*min(.16,max(dot(nx,nx),dot(ny,ny))),.004,1.));`));let de=O?`
        float floorMask=smoothstep(.92,.995,nWorld.y)*(1.-smoothstep(.08,.16,abs(vHousePos.y)));
        if(vHousePos.x>-2.51 && vHousePos.x<2.21 && vHousePos.z<-.89 && vHousePos.z>-4.31)
          floorMask=smoothstep(.94,.995,nWorld.y)*(1.-smoothstep(.05,.14,abs(vHousePos.y+.30)));
        vec2 uvF=(vec2(vHousePos.x,-vHousePos.z)+vec2(13.,14.))/vec2(31.,25.2);
        if(floorMask>.001 && all(greaterThan(uvF,vec2(0.))) && all(lessThan(uvF,vec2(1.)))){
          vec4 d=texture2D(uDayFloor,uvF),n=texture2D(uNightFloor,uvF);
          bounce=mix(bounce,(d.rgb*d.a*uFloorRange.x*(1.-uNight)+n.rgb*n.a*uFloorRange.y*(uNight+dayTask*(1.-uNight))),floorMask);
        }`:"";U.name==="chips"&&(Z.fragmentShader=Z.fragmentShader.replace("#include <lights_physical_fragment>",`roughnessFactor=clamp(roughnessFactor*.63,.21,.48);
#include <lights_physical_fragment>`)),Z.fragmentShader=Z.fragmentShader.replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
        vec3 nWorld=inverseTransformDirection(normal,viewMatrix);
        vec2 edge=max(vec2(abs(vHousePos.x)-9.05,abs(-vHousePos.z-5.50)-5.6),vec2(0.));
        float inRoom=1.-smoothstep(.0,1.45,length(edge));
        float roof=2.82+abs(vHousePos.x)*.112;
        inRoom*=1.-smoothstep(roof-.11,roof+.1,vHousePos.y);
        float dayTask=(vHousePos.z< -7.&&vHousePos.z> -11.2&&vHousePos.x>-.79&&vHousePos.x<2.28)?.22:
          (vHousePos.x< -3.15&&vHousePos.x> -8.98&&vHousePos.z<-.05&&vHousePos.z> -5.4)?.095:0.;
        vec3 bounce=houseBounce(vHousePos${U.name.startsWith("print-")?"+nWorld*.18":""},nWorld);
        ${de}
        float bakeRegion=1.-smoothstep(.0,3.,length(max(vec2(abs(vHousePos.x)-10.4,abs(-vHousePos.z-5.3)-7.1),vec2(0.))));
        float surfaceWeight=0.;
        ${L&&!U.name.startsWith("print-")?"if(vAtlas.z>.001){vec2 uv=vAtlas.xy/max(vAtlas.z,.0001);vec4 a=texture2D(uWallsDay,uv),b=texture2D(uWallsNight,uv);vec3 wallLight=(a.rgb*a.a*uWallRange.x*(1.-uNight)+b.rgb*b.a*uWallRange.y*(uNight+dayTask*(1.-uNight)));surfaceWeight=smoothstep(.05,.91,vAtlas.z);bounce=mix(bounce,wallLight,surfaceWeight);}":""}
        // Cycles stores the diffuse response to the measured sky and to bounced
        // sunlight. Blend to the unoccluded environment beyond the receivers.
        float bakedWeight=max(bakeRegion*max(inRoom,surfaceWeight),${O?"floorMask*step(0.,uvF.x)*step(0.,uvF.y)*step(uvF.x,1.)*step(uvF.y,1.)":"0."});
        if(inRoom>.05 && uNight<.99){
          // A coarse probe behind upholstery or cabinetry can lie inside a solid.
          // Reconstruct its window-facing lobe while retaining baked contact.
          float clearance=mix(.38,1.,smoothstep(.0005,.026,dot(bounce,vec3(.21,.72,.07))));
          vec3 aperture=windowResponse(vHousePos,nWorld)*clearance;
          bounce=mix(bounce,max(bounce,aperture),inRoom*(1.-uNight)*(1.-.53*surfaceWeight));
        }
        if(uSwitched>.5 && inRoom>.01){
          float weight=0.,removed=0.;vec3 added=vec3(0.);
          for(int i=0;i<8;i++){
            vec3 lp=uLamps[i].xyz;
            bool back=vHousePos.z< -6.94;
            if(back!=(lp.z< -6.94))continue;
            if(back && ((vHousePos.x< -4.64)!=(lp.x< -4.64)||(vHousePos.x<-.79)!=(lp.x<-.79)||(vHousePos.x<2.28)!=(lp.x<2.28)))continue;
            if(!back && (vHousePos.x < -3.1)!=(lp.x < -3.1))continue;
            vec3 delta=lp-vHousePos;float ds=dot(delta,delta);
            float w=uLamps[i].w/(.55+ds);weight+=w;
            if(uPower[i]<0.)continue;
            if(uPower[i]<.5)removed+=w;
            else added+=vec3(1.,.70,.45)*w*(.038+.115*max(dot(nWorld,delta*inversesqrt(max(.001,ds))),0.))*(1.-uNight);
          }
          // Attribute the baked night fill among the practicals in this room;
          // turning off one bedside lamp leaves the opposite lamp's pool intact.
          bounce=bounce*(1.-.92*uNight*removed/(.08+weight))+added*inRoom;
        }
        float finishOcclusion=${L?"mix(.40,1.,vFinish.w)":"1."};
        reflectedLight.indirectDiffuse*=mix(1.,.045,uNight)*(1.-bakedWeight)*finishOcclusion;
        float visibility=clamp(dot(bounce,vec3(.2126,.7152,.0722))/mix(.24,.14,uNight),.021,1.);
        float indoorSpec=mix(1.,visibility,inRoom);
        reflectedLight.indirectSpecular*=indoorSpec;
        #ifdef USE_SHEEN
          sheenSpecularIndirect*=indoorSpec;
        #endif
        #ifdef USE_CLEARCOAT
          clearcoatSpecularIndirect*=indoorSpec;
        #endif
        reflectedLight.indirectDiffuse+=material.diffuseContribution*bounce*bakedWeight;
        if(uHasReflection>.5 && inRoom>.01 && material.roughness<.65 && all(greaterThanEqual(vHousePos,uRoomLow-.06)) && all(lessThanEqual(vHousePos,uRoomHigh+.06))){
          vec3 v=normalize(cameraPosition-vHousePos),r=reflect(-v,nWorld);
          vec3 d=r+vec3(.00001);
          vec3 exits=max((uRoomLow-vHousePos)/d,(uRoomHigh-vHousePos)/d);
          float t=max(.03,min(exits.x,min(exits.y,exits.z)));
          vec3 localColor=textureLod(uRoomReflection,normalize(vHousePos+r*t-uRoomOrigin),material.roughness*6.).rgb;
          vec3 fresnel=material.specularColor+(1.-material.specularColor)*pow(1.-max(0.,dot(v,nWorld)),5.);
          float amount=(1.-smoothstep(.32,.65,material.roughness))*inRoom*.76;
          reflectedLight.indirectSpecular=mix(reflectedLight.indirectSpecular,localColor*fresnel,amount);
        }
        if((uNight>.02 || uSwitched>.5) && inRoom>.0 && material.roughness<.78){
          vec3 viewWorld=normalize(cameraPosition-vHousePos);
          for(int i=0;i<8;i++){
            vec3 delta=uLamps[i].xyz-vHousePos;float d2=max(.09,dot(delta,delta));
            if(d2>12.)continue;
            // Bedroom partitions intercept light from the adjacent rooms.
            bool south=vHousePos.z>-6.94;
            if(south!=(uLamps[i].z>-6.94))continue;
            if(!south && ((vHousePos.x < -4.64)!=(uLamps[i].x < -4.64) || (vHousePos.x < -.79)!=(uLamps[i].x < -.79) || (vHousePos.x<2.28)!=(uLamps[i].x<2.28)))continue;
            vec3 l=normalize(delta), h=normalize(l+viewWorld);
            float nl=max(dot(nWorld,l),0.), nv=max(dot(nWorld,viewWorld),.04), nh=max(dot(nWorld,h),0.);
            float a2=pow(clamp(material.roughness+.10/sqrt(d2),.13,1.),4.);
            float den=1.+nh*nh*(a2-1.);
            float distr=a2/(3.14159*den*den+.0003);
            vec3 f=material.specularColor+(1.-material.specularColor)*pow(1.-max(dot(viewWorld,h),0.),5.);
            reflectedLight.directSpecular+=vec3(1.,.64,.37)*f*distr*nl*uLamps[i].w*(1.-smoothstep(6.,12.,d2))*(uPower[i]<0.?uNight:uPower[i])/(d2*(2.+2.*nv));
          }
        }
        for(int i=0;i<${_};i++){
          vec4 source=uLocalSources[i];if(source.w<.0001)continue;
          vec3 incident=source.xyz-vHousePos;float r2=dot(incident,incident),range=uLocalLimits[i].x;
          if(r2>=range)continue;
          vec3 l=incident*inversesqrt(max(.0001,r2));
          float cosine=max(0.,dot(nWorld,l));if(cosine<=0.)continue;
          float window=max(0.,1.-pow(r2/range,2.));
          vec3 irradiance=uLocalColors[i]*(source.w*window*window*cosine/max(.035,r2));
          if(uLocalLimits[i].y>0.)irradiance*=smoothstep(uLocalLimits[i].y,uLocalLimits[i].z,-dot(l,uLocalDirections[i]));
          reflectedLight.directDiffuse+=irradiance*material.diffuseContribution*.31831;
          vec3 eye=normalize(cameraPosition-vHousePos),h=normalize(eye+l);
          float nh=max(dot(nWorld,h),0.),a2=pow(clamp(material.roughness,.16,1.),4.);
          float den=1.+nh*nh*(a2-1.);
          reflectedLight.directSpecular+=irradiance*material.specularColor*a2/(12.56637*den*den+.001);
        }
        ${L?"reflectedLight.indirectSpecular*=mix(.45,1.,vFinish.w);":""}
      `)},U.customProgramCacheKey=()=>[L,O,V,j,Q,U.name==="plaster",U.name==="chips",U.name==="shade",U.name==="gravel"].join("/"),U.needsUpdate=!0,U}let P=new Map;function H(U){if(P.has(U))return P.get(U);let L;if(U==="glass"||U==="car-glass")L=new Xt({color:14870748,metalness:.08,roughness:.055,transparent:!0,opacity:U==="car-glass"?.17:.047,depthWrite:!1,side:Lt,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.035}),L.forceSinglePass=!0,L.onBeforeCompile=O=>{O.fragmentShader=O.fragmentShader.replace("#include <opaque_fragment>","float fresnel=pow(1.-abs(dot(normal,normalize(vViewPosition))),3.5);diffuseColor.a=clamp(opacity+.55*fresnel,.025,.76);#include <opaque_fragment>".replace(";#",`;
#`))};else{let O=U==="range"?"stone":U==="shade"?"linen":U,V=D[O]||[],j={vertexColors:!0,color:16777215,roughness:1,metalness:0,side:Lt,map:V[0]||null,normalMap:V[1]||null,roughnessMap:V[2]||null};U==="wood"?L=new Xt({...j,clearcoat:.17,clearcoatRoughness:.36}):U==="linen"||U==="rug"?L=new Xt({...j,sheen:.34,sheenRoughness:.85,sheenColor:9736324}):L=new at(j);let Q={chips:.22,paving:.61,metal:.1,wood:.23,terrazzo:.32,stone:.82,plaster:.42,linen:.54,gravel:.9,tile:.28,rug:.7,range:1.2}[U]||.25;L.normalScale.setScalar(U==="plaster"?.13:U==="wood"?.26:n[O]?.recommendedNormalScale??Q),F(L,{finish:!0,floor:["terrazzo","plaster","paving","chips"].includes(U),bulb:U==="bulb",plainMap:U.startsWith("print-")})}return L.name=U,P.set(U,L),L}return{textures:D,material:H,patch:F,addLocalEmitter:S,syncEmitters:C,mixBakes:k,setPracticalPower:v,listenPractical(U){x=U},materials:P,setRoomReflection(U,L){L&&(g.uRoomOrigin.value=L.origin,g.uRoomLow.value=L.lo,g.uRoomHigh.value=L.hi),g.uRoomReflection.value=U,g.uHasReflection.value=+!!U}}}var BM,Ji,td=ct(()=>{gt();BM=i=>Math.max(0,Math.min(1,i)),Ji=(i,e,t)=>{let n=BM((t-i)/(e-i));return n*n*(3-2*n)}});async function im(i,e){let t=new pn,[n,s,r]=await Promise.all(["granite-evening","granite-horizon","moonlit-sky"].map(l=>t.loadAsync("assets/range/"+l+".webp")));for(let l of[n,s,r])l.colorSpace=dt,l.wrapS=an,l.anisotropy=4;e.wrapS=an;let a={panorama:{value:n},horizonBand:{value:s},moonSky:{value:r},measuredSun:{value:e},hour:{value:.4},night:{value:0}},o=new Le(new Wn(730,72,40),new kt({side:Zt,depthWrite:!1,uniforms:a,vertexShader:"varying vec3 ray;void main(){ray=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 ray; ${nm}
      void main(){gl_FragColor=vec4(sitePlate(ray),1.);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`}));o.name="Distant granite escarpment",o.renderOrder=-10,i.add(o);let c=l=>{a.hour.value=l,a.night.value=Ji(.48,.97,l)};return c.connectGround=()=>{let l=new Set;i.traverse(u=>{if(!u.isMesh||u.name!=="Sculpted desert alluvium"||l.has(u.material))return;let d=u.material,h=d.onBeforeCompile,f=d.customProgramCacheKey();l.add(d),d.onBeforeCompile=(p,g)=>{h.call(d,p,g),Object.assign(p.uniforms,a),p.fragmentShader=p.fragmentShader.replace("#include <common>",`#include <common>
`+nm);let m="#include <tonemapping_fragment>";p.fragmentShader=p.fragmentShader.replace(m,`
          vec3 local=desertPosition-vec3(1.,1.65,-2.);
          // A panorama projected from a fixed eye stretches radially when viewed
          // from above. Keep the entire walkable lot and its shoulder in metres.
          vec2 outsideLot=max(abs(desertPosition.xz-vec2(-.5,.5))-vec2(24.),0.);
          float distancePastLot=length(outsideLot);
          float wash=1.8*sin(local.x*.245-local.z*.19)+1.1*sin(local.z*.39+local.x*.157);
          float merge=smoothstep(15.,85.,distancePastLot+wash);
          if(merge>0.){
            float eye=mix(3.2,1.65,smoothstep(45.,110.,distancePastLot));
            local.y=desertPosition.y-eye;
            vec3 field=sitePlate(local);
            gl_FragColor.rgb=mix(gl_FragColor.rgb,field,merge);
          }
          `+m).replace("#include <fog_fragment>",`vec3 beforeDistantFog=gl_FragColor.rgb;
          #include <fog_fragment>
          gl_FragColor.rgb=mix(gl_FragColor.rgb,beforeDistantFog,merge);`)},d.customProgramCacheKey=()=>f+"/distant-wash",d.needsUpdate=!0})},c}var nm,sm=ct(()=>{gt();td();nm=`
  uniform sampler2D panorama, horizonBand, moonSky, measuredSun;
  uniform float hour, night;
  const vec3 lumW=vec3(.2126,.7152,.0722);
  vec3 sitePlate(vec3 dir){
    vec3 d=normalize(dir);
    float longitude=atan(d.z,d.x)/6.2831853+.5-.285;
    float latitude=asin(clamp(d.y,-1.,1.))/3.14159265+.5;
    vec2 uv=vec2(longitude,latitude),dx=dFdx(uv),dy=dFdy(uv);
    dx.x-=floor(dx.x+.5);dy.x-=floor(dy.x+.5);
    vec3 colour=textureGrad(panorama,uv,dx,dy).rgb;
    float band=smoothstep(.40,.415,latitude)*(1.-smoothstep(.634,.65,latitude));
    if(band>.0){
      vec2 uvH=vec2(longitude,(latitude-.40)*4.);
      colour=mix(colour,textureGrad(horizonBand,uvH,dx*vec2(1,4),dy*vec2(1,4)).rgb,band);
    }
    // Bracketed solar radiance supplies the bright edge of the sun and clouds.
    vec3 hdr=textureGrad(measuredSun,uv,dx,dy).rgb;
    float l=dot(colour,lumW),energy=dot(hdr,lumW);
    float sky=smoothstep(.07,.35,d.y);
    colour*=mix(1.,clamp(3.4*energy/max(.025,l),.89,11.),sky);
    // A few hundred metres of dry air softens the granite against the sky.
    float air=smoothstep(.435,.495,latitude)*(1.-smoothstep(.54,.605,latitude));
    colour=mix(colour,vec3(.40,.385,.35),air*.12);
    float dusk=smoothstep(.47,.77,hour)*(1.-night);
    colour*=mix(vec3(1.015,1.,.975),vec3(.89,.665,.54),dusk);
    // Long-exposure lunar sky above the same skyline, with locally lit terrain
    // taking over below the crest. Its photographic foreground stays out of view.
    vec3 moon=textureGrad(moonSky,uv,dx,dy).rgb;
    vec3 nightLand=vec3(.0037,.0051,.0065)+colour*vec3(.018,.025,.039);
    float openSky=smoothstep(.6,.74,latitude);
    vec3 afterDark=mix(nightLand,vec3(.003,.006,.014)+moon*vec3(.030,.047,.105),openSky);
    return mix(colour,afterDark,night);
  }`});function rm({water:i,camera:e,interactions:t,syncLook:n,audio:s,onExit:r}){let a=i.surface;a.updateWorldMatrix(!0,!1);let o=a.geometry.attributes.position,c=a.geometry.attributes.waterEdge,l=[],u=new Set,d=new T,h=new me;for(let B=0;B<o.count;B++){if(c.getX(B)>.002)continue;d.fromBufferAttribute(o,B).applyMatrix4(a.matrixWorld);let D=Math.round(d.x*1e3)+","+Math.round(d.z*1e3);u.has(D)||(u.add(D),l.push(new me(d.x,d.z)),h.add(l.at(-1)))}h.divideScalar(l.length),l.sort((B,D)=>Math.atan2(B.y-h.y,B.x-h.x)-Math.atan2(D.y-h.y,D.x-h.x));let f=a.position.y,p=new T(7.8,.52,9.35),g=new T(7.12,f+.25,8.44),m=new T(8.53,1.65,10.29),A=new T(-.83,.55,7.55),x=!1,v=!1,_=null,y=0,E=0;function b(B,D){let R=!1,k=1/0;for(let F=0,P=l.length-1;F<l.length;P=F++){let H=l[P],U=l[F],L=U.x-H.x,O=U.y-H.y;H.y>D!=U.y>D&&B<L*(D-H.y)/O+H.x&&(R=!R);let V=Je.clamp(((B-H.x)*L+(D-H.y)*O)/(L*L+O*O||1),0,1);k=Math.min(k,(B-H.x-L*V)**2+(D-H.y-O*V)**2)}return R&&k>.17*.17}function M(B,D){let R=e.position.clone(),k=B==="jump"?[R,new T(-.52,2.09,7.56),new T(.57,2.25,7.56),new T(1.48,1.43,7.56),new T(2.3,f-.38,7.56),D]:B==="in"?[R,new T(8.14,1.56,9.76),new T(7.75,.7,9.28),D]:[R,new T(7.72,.54,9.21),new T(8.12,1.45,9.68),D],F=B==="out"?new T(3,1,3):new T(.3,.52,4.3),P=new Qt().setFromRotationMatrix(new Re().lookAt(D,F,e.up));_={kind:B,curve:new gi(k),t:0,duration:B==="jump"?1.68:1.12,rotation:P,fromQ:e.quaternion.clone(),splashed:!1},v=!1}t.register({id:"pool-ladder",label:()=>x?"Climb out of pool":"Climb down pool ladder",point:p,enabled:()=>!_,reach:2.55,radius:.3,priority:-.1,use:()=>M(x?"out":"in",x?m:g)}),t.register({id:"pool-board",label:()=>"Jump from diving board",point:A,enabled:()=>!x&&!_,reach:2.45,radius:.41,use:()=>M("jump",new T(2.56,f+.25,7.56))});let I=t.actions.find(B=>B.id==="pool-touch");I&&(I.enabled=()=>!x&&!_);let S=new Le(a.geometry,new kt({name:"Water seen from the basin",side:Zt,transparent:!0,depthWrite:!1,uniforms:{clock:{value:0},night:{value:0}},vertexShader:"varying vec3 wp;void main(){vec4 p=modelMatrix*vec4(position,1.);wp=p.xyz;gl_Position=projectionMatrix*viewMatrix*p;}",fragmentShader:`varying vec3 wp;uniform float clock,night;
      void main(){
        vec3 view=normalize(wp-cameraPosition);
        vec3 normal=normalize(vec3(.022*sin(wp.x*3.3+wp.z*2.+clock),1.,.017*cos(wp.x*1.8-wp.z*4.2-clock*.8)));
        float c=clamp(dot(view,normal),0.,1.);
        float internal=1.-smoothstep(.60,.72,c);
        float bands=.5+.5*sin(wp.x*3.4+wp.z*2.7+.45*sin(wp.z*3.-clock*.46)+clock*.22);
        vec3 reflected=mix(vec3(.043,.17,.14),vec3(.14,.30,.25),bands)*mix(1.,.18,night);
        gl_FragColor=vec4(reflected,mix(.055,.94,internal));
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}));S.position.copy(a.position),S.quaternion.copy(a.quaternion),S.scale.copy(a.scale),S.name="Underside of the pool surface",S.userData.noProbe=!0,S.visible=!1,a.parent.add(S);function C(){return Je.smoothstep(f+.025-e.position.y,0,.11)}return{get active(){return x},get traveling(){return!!_},get underwater(){return v},immersion:C,get label(){return e.position.distanceTo(g)<1.7?"Climb out of pool":v?"Surface":"Dip underwater"},use(){e.position.distanceTo(g)<1.7?M("out",m):v=!v},update(B,D,R,k){if(_){_.t=Math.min(1,_.t+B/_.duration);let F=Je.smoothstep(_.t,0,1);_.curve.getPoint(F,e.position),e.quaternion.slerpQuaternions(_.fromQ,_.rotation,F),n(),_.kind!=="out"&&!_.splashed&&e.position.y<f+.4&&(_.splashed=!0,i.disturb(e.position,1.5),s.cue("splash",.65)),_.t===1&&(x=_.kind!=="out",x||r(),_=null)}else if(x){let F=e.position;b(F.x+D,F.z)&&(F.x+=D),b(F.x,F.z+R)&&(F.z+=R);let P=Math.hypot(D,R)/Math.max(B,.001);y+=B*(P*3.2),E+=B;let H=f+(v?-.56:.25)+Math.min(P,.8)*.028*Math.sin(y);F.y=Je.damp(F.y,H,6,B),P>.18&&E>.74&&(E=0,i.disturb(F,.68))}S.visible=C()>.005,S.material.uniforms.night.value=k,S.material.uniforms.clock.value+=B,s.setImmersion(C())},reset(){x=v=!1,_=null,S.visible=!1,s.setImmersion(0)}}}var am=ct(()=>{gt()});function DM(){let t=new Uint8Array(131072),n=[[0,-.29,.27,.155,.95],[.21,-.055,.14,.24,.38],[-.015,.18,.385,.145,.87],[-.26,.367,.113,.096,1],[-.055,.395,.082,.079,.92],[.105,.373,.073,.073,.86],[.24,.333,.064,.066,.8],[.345,.276,.053,.058,.72]];for(let r=0;r<256;r++)for(let a=0;a<128;a++){let o=a/127-.5,c=r/255-.5,l=0,u=0;for(let[h,f,p,g,m]of n){let A=Math.hypot((o-h)/p,(c-f)/g),x=.016*Math.sin(o*97+c*43)+.012*Math.sin(c*157-o*35),v=1-Je.smoothstep(A+x,.86,1.04);l=Math.max(l,v),u=Math.max(u,v*m)}let d=(r*128+a)*4;t[d]=Math.round(l*255),t[d+1]=Math.round(u*255),t[d+2]=Math.round((.91+.045*Math.sin(o*138+c*19)*Math.sin(c*219))*255),t[d+3]=255}let s=new Dn(t,128,256);return s.generateMipmaps=!0,s.minFilter=Ht,s.magFilter=vt,s.needsUpdate=!0,s.name="Original barefoot pressure contact",s}function om(i){return/rug|carpet/i.test(i)?"rug":/chips|terrazzo|tile/i.test(i)?"hard":/paving|coping|stone/i.test(i)?"patio":null}function FM(i){let e=new Map,t=new T,n=new T,s=new T;return i.updateMatrixWorld(!0),i.traverse(r=>{if(!r.isMesh||!r.visible||r.isInstancedMesh)return;let a=r;for(;a;){if(!a.visible||a.userData.interaction)return;a=a.parent}let o=Array.isArray(r.material)?r.material:[r.material];if(!o.some(h=>om(h.name)))return;let c=r.geometry,l=c.attributes.position,u=c.index,d=u?u.count:l.count;for(let h=0;h<d;h+=3){let f=c.groups.find(b=>h>=b.start&&h<b.start+b.count),p=om(o[f?.materialIndex??0]?.name??"");if(!p)continue;t.fromBufferAttribute(l,u?u.getX(h):h).applyMatrix4(r.matrixWorld),n.fromBufferAttribute(l,u?u.getX(h+1):h+1).applyMatrix4(r.matrixWorld),s.fromBufferAttribute(l,u?u.getX(h+2):h+2).applyMatrix4(r.matrixWorld);let g=Math.min(t.y,n.y,s.y),m=Math.max(t.y,n.y,s.y);if(g<-.45||m>.12||m-g>.025)continue;let A=(n.z-s.z)*(t.x-s.x)+(s.x-n.x)*(t.z-s.z);if(A>-1e-8)continue;let x={ax:t.x,az:t.z,bx:n.x,bz:n.z,cx:s.x,cz:s.z,ay:t.y,by:n.y,cy:s.y,determinant:A,kind:p},v=Math.floor(Math.min(t.x,n.x,s.x)),_=Math.floor(Math.max(t.x,n.x,s.x)),y=Math.floor(Math.min(t.z,n.z,s.z)),E=Math.floor(Math.max(t.z,n.z,s.z));if(!((_-v)*(E-y)>2048))for(let b=v;b<=_;b++)for(let M=y;M<=E;M++){let I=b+","+M;e.has(I)||e.set(I,[]),e.get(I).push(x)}}}),(r,a,o)=>{let c=null;for(let l of e.get(Math.floor(r)+","+Math.floor(a))??[]){let u=((l.bz-l.cz)*(r-l.cx)+(l.cx-l.bx)*(a-l.cz))/l.determinant,d=((l.cz-l.az)*(r-l.cx)+(l.ax-l.cx)*(a-l.cz))/l.determinant;if(u<-1e-4||d<-1e-4||u+d>1.0001)continue;let h=u*l.ay+d*l.by+(1-u-d)*l.cy;Math.abs(h-o)>.115||(!c||h>c.y+1e-4||Math.abs(h-c.y)<1e-4&&l.kind==="rug")&&(c={kind:l.kind,y:h})}return c}}function cm({scene:i,camera:e,onStep:t=()=>{}}){let n=FM(i),s=DM(),r=new Hn(.129,.278);r.rotateX(-Math.PI/2);let a=new Float32Array(So*4),o=new Fn(a,4);o.setUsage(tr),r.setAttribute("contact",o);let c=new kt({name:"Absorbed wet sole contacts",transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,uniforms:{mask:{value:s},clock:{value:0}},vertexShader:`attribute vec4 contact;varying vec2 soleUV;varying vec4 wetContact;
      void main(){soleUV=vec2(contact.w<0.?1.-uv.x:uv.x,uv.y);wetContact=contact;
        gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.);}`,fragmentShader:`uniform sampler2D mask;uniform float clock;varying vec2 soleUV;varying vec4 wetContact;
      void main(){
        vec3 sole=texture2D(mask,soleUV).rgb;
        float age=max(0.,clock-wetContact.x),remaining=max(0.,1.-age/max(.001,wetContact.z));
        float pressure=smoothstep(.09,.37,wetContact.y*sole.g);
        float opacity=sole.r*sole.b*pressure*wetContact.y*remaining*remaining*.34;
        if(opacity<.002)discard;
        gl_FragColor=vec4(vec3(0.),opacity);
        #include <colorspace_fragment>
      }`}),l=new Pn(r,c,So);l.name="Alternating wet barefoot contacts",l.userData.noProbe=!0,l.frustumCulled=!1,l.count=0,l.visible=!1,l.renderOrder=2,l.instanceMatrix.setUsage(tr),i.add(l);let u=e.position.clone(),d=new Re,h=new it,f=new T,p=0,g=0,m=0,A=-1,x=0,v=-1/0,_=0,y=0;function E(){u.copy(e.position),m=0,g=0}function b(){u.copy(e.position),m=0,g=1}function M(I,{grounded:S=!1,moving:C=!0}={}){I=nd(I,0,.1),p+=I,c.uniforms.clock.value=p,g=Math.max(0,g-I/65);let B=e.position.x-u.x,D=e.position.z-u.z,R=Math.hypot(B,D),k=Math.abs(e.position.y-u.y);if(u.copy(e.position),l.visible=l.count>0&&p-v<38,!S||!C||I<=0||R>Math.max(.18,I*4.2)||k>.17){m=0;return}if(R<I*.1)return;let F=R/I,P=Je.lerp(.64,.88,nd((F-1)/2,0,1));if(m+=R,m<P)return;m%=P,A*=-1,_++;let H=B/R,U=D/R,L=e.position.x-U*.083*A,O=e.position.z+H*.083*A,V=n(L,O,e.position.y-1.65),j=V?.kind??"gravel",Q=g;if(t({surface:j,wetness:Q,side:A,speed:F}),g>.035&&(g*=j==="rug"?.65:.88),!V||Q<.07)return;let q=Math.atan2(-H,-U)-A*.055;d.makeRotationY(q),d.setPosition(L,V.y+.0012,O),l.setMatrixAt(x,d),a.set([p,Q*(j==="rug"?.55:1),j==="rug"?12:38,A],x*4),o.needsUpdate=!0,l.instanceMatrix.needsUpdate=!0,x=(x+1)%So,l.count=Math.min(So,l.count+1),l.visible||h.makeEmpty(),h.expandByPoint(f.set(L-.18,V.y,O-.18)),h.expandByPoint(f.set(L+.18,V.y+.008,O+.18)),v=p,l.visible=!0,y++}return{update:M,exitPool:b,reset:E,mesh:l,bounds:()=>l.visible?h:null,get printCount(){return y},get stats(){return{capacity:So,liveSlots:l.count,steps:_,prints:y,wetness:g}},dispose(){i.remove(l),r.dispose(),c.dispose(),s.dispose()}}}function lm({context:i,output:e,isMuted:t=()=>!1}){let n=i.createBuffer(1,Math.ceil(i.sampleRate*.3),i.sampleRate),s=n.getChannelData(0),r=73421,a=0;for(let c=0;c<s.length;c++)r=Math.imul(r,1664525)+1013904223>>>0,s[c]=r/2147483648-1;function o(c,l,u,d,h,f){let p=i.createBufferSource(),g=i.createBiquadFilter(),m=i.createGain(),A=i.createStereoPanner();p.buffer=n,p.playbackRate.value=f,g.type="lowpass",g.frequency.value=l,g.Q.value=.55,m.gain.setValueAtTime(0,c),m.gain.linearRampToValueAtTime(d,c+.004),m.gain.exponentialRampToValueAtTime(1e-4,c+u),A.pan.value=h,p.connect(g),g.connect(m),m.connect(A),A.connect(e),p.onended=()=>{p.disconnect(),g.disconnect(),m.disconnect(),A.disconnect()},p.start(c,a%7*.013),p.stop(c+u+.01)}return({surface:c,wetness:l=0,side:u=1,speed:d=1.65})=>{if(t()||i.state!=="running")return;a++;let h=i.currentTime,f=nd(.75+(d-1)*.18,.65,1.25),p=1+.045*Math.sin(a*2.399),g=u*.12,m=c==="rug",A=c==="gravel",x=c==="hard",v=(m?.055:A?.105:.085)*f;o(h,(m?480:A?1850:x?3100:2100)*p,m?.105:A?.145:.075,v,g,p),o(h+.048,m?720:A?2600:1900,m?.08:.105,v*(m?.3:.52),g,.91/p);let _=i.createOscillator(),y=i.createGain();_.type="sine",_.frequency.setValueAtTime((m?92:122)*p,h),_.frequency.exponentialRampToValueAtTime(46,h+.075),y.gain.setValueAtTime(0,h),y.gain.linearRampToValueAtTime((m?.07:.095)*f,h+.004),y.gain.exponentialRampToValueAtTime(1e-4,h+.09),_.connect(y),y.connect(e),_.onended=()=>{_.disconnect(),y.disconnect()},_.start(h),_.stop(h+.1),l>.1&&!m&&!A&&o(h+.036,4200,.055,.052*l*f,g,1.25*p)}}var So,nd,id=ct(()=>{gt();So=64,nd=Je.clamp});function PM(i,e,t){let n=i.matrixWorld.clone().invert(),s=new T,r=[];for(let a of[...i.children]){if(!a.isMesh||a.material.name!=="metal")continue;let o=a.geometry,c=o.index,l=o.attributes.position,u=n.clone().multiply(a.matrixWorld),d=[[],[],[]];for(let h=0,f=c?c.count:l.count;h<f;h+=3){let p=[0,1,2].map(x=>c?c.getX(h+x):h+x);s.fromBufferAttribute(l,p[0]).applyMatrix4(u);let g=e?s.z:s.x,m=e?s.x:-s.z,A=Math.abs(s.y-1.04)<.028&&Math.abs(g)>.052&&m>t-.31&&m<t-.095;d[A?g<0?1:2:0].push(...p)}for(let h=1;h<=2;h++){if(!d[h].length)continue;let f=o.clone();f.setIndex(d[h]),f.clearGroups();let p=new Le(f,a.material);p.name="Working brass lever",p.position.copy(a.position),p.quaternion.copy(a.quaternion),p.scale.copy(a.scale),p.castShadow=p.receiveShadow=!0,i.add(p);let g=new st,m=h===1?-1:1;g.position.set(e?t-.13:m*.075,1.04,e?m*.075:-(t-.13)),i.add(g),g.attach(p),r.push(g)}(d[1].length||d[2].length)&&(a.geometry=o.clone(),a.geometry.setIndex(d[0]),a.geometry.clearGroups())}return r}function um(i,e){let t=i.userData.bounds,n=Math.max(t[2]-t[0],t[3]-t[1]),s=t[2]-t[0]>t[3]-t[1],r=i.userData.interaction==="hinge",a=new at({name:"Satin brass latch fittings",color:10782025,metalness:.82,roughness:.32});e.patch(a,{plainMap:!0});let o=new zt(1,1,1,20),c=new Ot(1,1,1),l=[],u=new Re,d=new Qt,h=new T,f=new T;function p(v,_,y,E,b,M,I,S=0,C=0){d.setFromEuler(new Qn(S,0,C)),u.compose(h.set(_,y,E),d,f.set(b,M,I));let B=v.clone().toNonIndexed().applyMatrix4(u);l.push(B)}let g=r?PM(i,s,n):[],m=new st;i.add(m),s||(m.rotation.y=Math.PI/2);let A;if(r){p(c,n+.001,1.015,0,.003,.145,.026);for(let v of[-1,1]){p(o,n-.13,1.04,v*.059,.012,.044,.012,Math.PI/2);for(let _ of[.956,1.089])p(o,n-.13,_,v*.049,.004,.003,.004,Math.PI/2)}for(let v of[.958,1.071])p(o,n+.003,v,0,.0035,.002,.0035,0,Math.PI/2);A=new Le(new zt(.009,.009,.021,16),a),A.rotation.z=Math.PI/2,A.position.set(n+.004,1.015,0)}else{let v=t[2]-.12,_=.034;p(c,v,1.01,_,.038,.089,.008);for(let y of[.979,1.04])p(o,v,y,_+.005,.0038,.002,.0038,Math.PI/2);A=new Le(new so(.006,.023,4,10),a),A.position.set(v,1.01,_+.014)}A.name=r?"Spring latch":"Thumb latch",m.add(A);let x=new Le(un(l),a);x.name="Escutcheon fixings",m.add(x);for(let v of l)v.dispose();return c.dispose(),o.dispose(),v=>{for(let _ of g)s?_.rotation.z=v*.39:_.rotation.x=v*.39;r?A.position.x=n+.004-v*.014:A.rotation.z=v*Math.PI*.43}}var hm=ct(()=>{gt();ci()});function NM(i){let e=[i[0]],t=[0],n=r=>{let a=sd(e.at(-1),r);a<1e-8||(t.push(t.at(-1)+a),e.push(r))};for(let r=1;r<i.length-1;r++){let a=i[r-1],o=i[r],c=i[r+1],l=sd(a,o),u=sd(o,c),d=Math.min(.22,l*.24,u*.24),h=or(o,a,d/l),f=or(o,c,d/u);n(h);for(let p=1;p<=32;p++){let g=p/32;n(or(or(h,o,g),or(o,f,g),g))}}n(i.at(-1));let s=t.at(-1);return{length:s,sample(r){let a=rd(r)*s,o=0,c=t.length-1;for(;o+1<c;){let u=o+c>>1;t[u]<a?o=u:c=u}let l=t[c]-t[o];return or(e[o],e[c],l?(a-t[o])/l:0)}}}function OM(i){return i<.065?i*i/(2*.065*(1-.065)):i>1-.065?1-(1-i)*(1-i)/(2*.065*(1-.065)):(i-.065/2)/(1-.065)}function kM(i,e){for(let t=1;t<i.length;t++)if(e<=i[t][0]){let[n,s]=i[t-1],[r,a]=i[t];return or(s,a,LM(rd((e-n)/(r-n))))}return i.at(-1)[1]}function dm(i,e,t=!1){let n=_a[i],s=rd(e/n.duration),r=t?.5:OM(s),a=.55;return{position:UM[i].sample(r),target:kM(n.looks,r),title:n.title,fade:Math.max(0,1-e/a,(e-n.duration+a)/a)}}var Sl,_a,or,sd,LM,rd,UM,fm=ct(()=>{Sl={exterior:{position:[2.4,-14.3,1.65],target:[1.35,1,1.35],title:"Arroyo Fold"},"pool-edge":{position:[3.23451,-10.28421,1.65],target:[6.16366,-9.86102,1.15907],title:"At the pool ladder"},living:{position:[-1.35,5.22,1.65],target:[.65,2.15,1.05],title:"The conversation pit"},dining:{position:[5,.8,1.65],target:[6.5,4.3,1.4],title:"Afternoon at home"},kitchen:{position:[-3.55,2.05,1.65],target:[-6.4,3,1.3],title:"The kitchen"},entry:{position:[-8.45,4.6,1.65],target:[-4.8,5.6,1.15],title:"The gallery"},primary:{position:[-4.96,8.08,1.65],target:[-6.8,9.6,.85],title:"The primary bedroom"},kid:{position:[-1.15,7.5,1.65],target:[-2.4,9.6,1.1],title:"The small bedroom"},bath:{position:[.85,7.22,1.65],target:[.45,9.55,1.15],title:"Seafoam and porcelain"},den:{position:[5.5,7.7,1.65],target:[6.85,9.85,1.05],title:"A record in the den"},carport:{position:[14.6,.8,1.65],target:[12.8,4.2,.75],title:"Under the canopy"},"bath-vanity":{position:[1.2,9.15,1.65],target:[-.35,8.55,1.15],title:"Seafoam, walnut, and porcelain"},"kid-desk":{position:[-2.35,8.65,1.65],target:[-1.45,10.05,1.1],title:"A place to draw"},"built-in":{position:[-.95,5.05,1.65],target:[-.925,6.79,1.1],title:"Bookmatched walnut in the gallery"},patio:{position:[9.8,-3.6,1.65],target:[.7,-.4,1.35],title:"The shaded terrace"}},_a=[{id:"water-to-living",title:"Across the water, into the living room",duration:49,eyes:[[2.4,-14.3,1.65],[-1.8,-11.4,1.65],[-3,-9.5,1.65],[-3,-7.5,1.65],[-2.65,-5.2,1.65],[-1.5,-3.5,1.65],[1.2,-2.6,1.65],[1.2,-.6,1.65],[1.2,.45,1.65],[1.38,1.96,1.35],[1.35,3.1,1.35],[1.95,2.9,1.5],[2.65,2.55,1.65],[3.8,3.4,1.65],[4.3,2.5,1.65],[4.3,1.25,1.65],[6.5,1.2,1.65]],looks:[[0,[1.35,1,1.35]],[.18,[1.8,.5,1.7]],[.37,[.4,1,1.3]],[.53,[.8,2.7,.75]],[.72,[.2,2.5,.65]],[.87,[3,1.3,1.25]],[1,[6.4,4.3,1.4]]]},{id:"kitchen-to-primary",title:"The kitchen, gallery, and quiet wing",duration:27,eyes:[[-2.7,2.8,1.65],[-3.6,2.8,1.65],[-5.8,2.65,1.65],[-6.65,2.65,1.65],[-6.65,3.3,1.65],[-6.65,4.45,1.65],[-6.7,5.8,1.65],[-6.8,6.35,1.65],[-6.8,7.55,1.65],[-6.65,7.96,1.65],[-5.17,7.98,1.65]],looks:[[0,[-6.6,2.65,1.25]],[.2,[-7.8,2,1.15]],[.43,[-6,4.9,1.2]],[.61,[-5.2,6.3,1.45]],[.78,[-6.7,9.35,.85]],[1,[-6.9,9.55,.8]]]},{id:"small-rooms",title:"A small bedroom and a seafoam bath",duration:30,eyes:[[-4,6.15,1.65],[-2.7,6.3,1.65],[-2.68,7.55,1.65],[-2.5,8.2,1.65],[-2.35,8.8,1.65],[-2.15,8.25,1.65],[-2.4,7.8,1.65],[-2.7,7.45,1.65],[-2.7,6.3,1.65],[-.9,6.25,1.65],[.8,6.3,1.65],[.8,7.5,1.65],[.8,8.5,1.65],[.8,9.25,1.65]],looks:[[0,[-2.7,8.4,1.2]],[.23,[-3.8,9.45,1.2]],[.37,[-4.38,9.28,1.7]],[.5,[-1.45,9.8,1.05]],[.66,[.8,7.8,1.25]],[.82,[-.3,8.6,1.1]],[1,[.35,10.25,1]]]},{id:"records-to-canopy",title:"A record in the den, then the open canopy",duration:48,eyes:[[3.2,6.2,1.65],[5.5,6.35,1.65],[5.5,7.65,1.65],[5.7,7.9,1.65],[6.4,7.9,1.65],[7.3,7.83,1.65],[6.4,7.6,1.65],[5.5,7.55,1.65],[5.5,6.3,1.65],[4.35,6,1.65],[4.3,4.4,1.65],[4.3,2.65,1.65],[4.3,1.15,1.65],[5.95,1.15,1.65],[5.95,-.7,1.65],[8.4,-1.4,1.65],[10.7,-.2,1.65],[10.5,1.8,1.65],[10.45,4.3,1.65]],looks:[[0,[5.5,8.2,1.25]],[.14,[6,10.35,1.05]],[.26,[8.35,9.3,1.1]],[.36,[6.1,10.4,1]],[.49,[6.5,3.1,1.4]],[.63,[5.5,3.6,1.4]],[.76,[11.9,3.8,1.1]],[1,[12.5,4.1,1]]]}],or=(i,e,t)=>i.map((n,s)=>n+(e[s]-n)*t),sd=(i,e)=>Math.hypot(...i.map((t,n)=>t-e[n])),LM=i=>i*i*(3-2*i),rd=i=>Math.max(0,Math.min(1,i));UM=_a.map(i=>NM(i.eyes))});function pm({camera:i,renderer:e,scene:t,solidRects:n=[],yardFloor:s=()=>0,doors:r=[],setTime:a=()=>{},interactions:o,light:c,audio:l,dirty:u,car:d,water:h,state:f,rangefinder:p,guide:g,map:m}){let A=X=>document.getElementById(X),x=e.domElement,v=A("start-screen"),_=A("hud"),y=A("pause-menu"),E=new me,b=new me,M=new Set,I=new me,S=new Qn(0,0,0,"YXZ"),C=window.matchMedia("(prefers-reduced-motion: reduce)").matches,B=window.matchMedia("(pointer: coarse)").matches,D="menu",R="walk",k=0,F=0,P=.4,H=0,U=0,L=null,O=null,V=0,j=!1,Q=!1,q=r.map(X=>({group:X,basePosition:X.position.clone(),baseQuaternion:X.quaternion.clone(),open:0,target:0,inverse:X.matrixWorld.clone().invert(),handle:um(X,c),handleTime:1,lever:0})),Z=q.filter(X=>X.group.userData.interaction==="slide"),ue=new T(0,1,0),de=new Qt,$=new T,ge=.22,fe=new URLSearchParams(location.search).get("view")==="pool"?"pool-edge":"exterior";function Be(){S.setFromQuaternion(i.quaternion,"YXZ"),k=S.y,F=S.x}let we=null,ee=null,_e=null,be=cm({scene:t,camera:i,onStep:X=>l.step(X)}),ve=rm({water:h,camera:i,interactions:o,audio:l,syncLook:Be,onExit:()=>be.exitPool()});function Ee(X){we=null,ee=null,_e=null,ve.reset(),be.reset();let Y=Sl[X];return Y?(i.position.copy(wo(Y.position)),i.lookAt(wo(Y.target)),Be(),I.set(0,0),!0):!1}function Ke(X,Y){let{group:pe}=X;pe.position.copy(X.basePosition),pe.quaternion.copy(X.baseQuaternion),pe.userData.interaction==="slide"?pe.position.x+=Number(pe.userData.delta||1.9)*Y:pe.quaternion.multiply(de.setFromAxisAngle(ue,Number(pe.userData.delta||Math.PI/2)*Y)),pe.updateMatrixWorld(!0),X.inverse.copy(pe.matrixWorld).invert()}function Fe(X,Y,pe){return $.set(Y,0,-pe).applyMatrix4(X.inverse),nt($.x,-$.z,X.group.userData.bounds)}function nt(X,Y,pe){if(!pe)return 1/0;let Te=wl(X,pe[0],pe[2]),De=wl(Y,pe[1],pe[3]);return(X-Te)**2+(Y-De)**2}function qe(X,Y,pe,Te=ge){return nt(X,Y,pe)<Te*Te}function $e(X,Y){if(X<-24.5||X>23.5||Y<-24.5||Y>23.5||n.some(pe=>qe(X,Y,pe))||q.some(pe=>Fe(pe,X,Y)<ge*ge))return!0;for(let pe of o.solids){if(pe.clearance){if(pe.clearance(X,-Y)<(ge+.05)**2)return!0;continue}let Te=pe.bounds();if(Te&&Te.max.y>.2&&Te.min.y<1.8&&X>Te.min.x-ge&&X<Te.max.x+ge&&-Y>Te.min.z-ge&&-Y<Te.max.z+ge)return!0}return!1}function z(X,Y){let pe=Math.max(1,Math.ceil(Math.hypot(X,Y)/.06));for(let Te=0;Te<pe;Te++){let De=i.position.x,ht=-i.position.z;$e(De+X/pe,ht)||(i.position.x+=X/pe),$e(i.position.x,ht+Y/pe)||(i.position.z-=Y/pe)}}function Xe(X){!X||D!=="walk"||(X.target=X.target>.5?0:1,X.handleTime=0,V=0,A("announcement").textContent=`${X.target?"Opening":"Closing"} ${X.group.userData.label||"door"}`)}for(let X of q){let Y=X.group,pe=new T,Te=Y.userData.bounds,De=new T((Te[0]+Te[2])/2,1.12,-(Te[1]+Te[3])/2),ht=new it(new T(Te[0]-.07,0,-Te[3]-.1),new T(Te[2]+.07,2.48,-Te[1]+.1)),Ut=new it;o.register({id:"door-"+Y.userData.label.toLowerCase().replaceAll(" ","-"),door:!0,point:()=>Y.localToWorld(pe.copy(De)),reach:2.65,label:()=>(X.target>.5?"Close ":"Open ")+Y.userData.label,hitTest:It=>It.ray.intersectsBox(Ut.copy(ht).applyMatrix4(Y.matrixWorld))?It.intersectObject(Y,!0)[0]:null,use:()=>Xe(X)})}let Ce=[["pit","Sit in conversation pit",[-.16,.22,-3.78],[-.16,1.15,-3.74],[2.4,1,-1.36],.46],["pit-west","Sit on west sofa",[-2.04,.22,-2.56],[-2.04,1.15,-2.56],[2.94,.94,-1.34],.37],["den","Sit in listening chair",[4,.52,-8.83],[4,1.38,-8.76],[5.37,.96,-10.33],.28],["den-east","Sit in lounge chair",[7.2,.52,-8.83],[7.2,1.38,-8.76],[6.6,1.03,-10.36],.27],["driver","Sit behind the wheel",[11.87,1.04,-4.6],[11.87,1.5,-4.5],[11.87,1.4,-6.5],.36],["chaise","Recline on pool chaise",[-6.9,.52,5.85],[-6.86,1.04,5.58],[-6.1,.78,11.8],.33],["chaise-south","Recline on garden chaise",[-6.8,.52,8.55],[-6.82,1.04,8.3],[-7.05,.78,14.6],.33]];function Pe(X,Y){let pe=i.quaternion.clone();if(Y){let Te=new Re().lookAt(X,Y,i.up);pe.setFromRotationMatrix(Te)}ee={from:i.position.clone(),to:X,fromQ:i.quaternion.clone(),toQ:pe,t:0},I.set(0,0),M.clear()}function ne(){_e={position:i.position.clone(),rotation:i.quaternion.clone(),seated:we},we={id:"reading",exit:_e.position},Pe(new T(.356,.72,-3.02),new T(.356,.145,-2.58))}function ke(){let X=_e;_e=null,we=X.seated,Pe(X.position),ee.toQ.copy(X.rotation)}function Ge(){if(_e){let pe=o.actions.find(Te=>Te.id==="journal-close");return pe.enabled()?(pe.use(),l.cue("page",.3),ke(),!0):!1}if(!we)return!1;let X=we.id==="driver",Y=we.exit;return we=null,X&&(d.doors[0].target||(o.actions.find(Te=>Te.id==="car-door-left").use(),l.cue("latch",.45)),$e(Y.x,-Y.z)&&Y.set(10.45,1.65,-3.26)),Pe(Y),ee.fromDriver=X,!0}for(let[X,Y,pe,Te,De,ht]of Ce)o.register({id:"seat-"+X,label:()=>Y,point:new T(...pe),radius:ht,reach:2.15,enabled:()=>!we&&!ee&&!ve.active&&!ve.traveling&&(X!=="driver"||Math.abs(d.doors[0].angle)>.68),use:()=>{we={id:X,exit:i.position.clone()},Pe(new T(...Te),new T(...De))}});function Qe(X=E){if(D!=="walk"||ee||ve.traveling)return!1;if(p.raised)return p.shutter(),!0;let Y=o.pick(i,X);if(!Y)return ve.active?(ve.use(),!0):Ge();let pe=Y.action.label(),Te=Y.action.id;return Y.action.use(Y.point),V=0,g.action(Te),Te==="journal-open"&&ne(),Te==="journal-close"&&_e&&ke(),Y.action.door?l.cue(Te.includes("sliding")?"slide":"latch",.5):Te.startsWith("car-door-")?l.cue(pe.startsWith("Close")?"car-close":"latch",.58):Te==="kitchen-cupboard"?l.cue("latch",.26):Te==="pool-touch"?l.cue("ripple",.24):Te.startsWith("journal-")?l.cue("page",.33):/lamp|light|television|record-player/.test(Te)&&l.cue("switch",.33),Y.action.door||(A("announcement").textContent=pe),ye(),!0}function G(){A("sound-toggle").textContent=l.muted?"Sound off":"Sound on",A("pause-sound").textContent=l.muted?"Unmute sound":"Mute sound",A("sound-toggle").setAttribute("aria-pressed",String(l.muted)),A("sound-toggle").setAttribute("aria-label",l.muted?"Turn sound on":"Turn sound off"),A("pause-sound").setAttribute("aria-pressed",String(l.muted))}function w(){l.setMuted(!l.muted),l.start(),G()}function K(){document.pointerLockElement===x&&document.exitPointerLock()}function le(X){D=X,v.hidden=X!=="menu",_.hidden=X==="menu",A("touch-controls").hidden=X!=="walk"||!B,A("walk-hint").hidden=X!=="walk",A("reticle").hidden=X!=="walk",A("tour-caption").hidden=X!=="tour",A("interaction").hidden=!0,A("pause-open").innerHTML=`${X==="tour"?"Pause tour":"Pause"} <span class="key">Esc</span>`,V=0}async function te(X){if(y.open&&y.close(),le(X),x.focus({preventScroll:!0}),X==="tour"){we=null,ee=null,_e=null,ve.reset(),be.reset(),K(),H=0,U=0,Q=!1;for(let pe of q)pe.target=1,pe.open=1,Ke(pe,1);I.set(0,0),M.clear(),Se(0)}else Be(),I.set(0,0),M.clear(),A("tour-caption").textContent="",A("scene-fade").style.opacity=0;await l.start()||(A("announcement").textContent="Sound is unavailable. You can continue exploring.")}let Ae="walk";function xe(){D!=="walk"&&D!=="paused"||(Ae=D,le("map"),M.clear(),I.set(0,0),O=null,K(),y.open&&y.close(),m.open())}function ie(){D==="map"&&(le(Ae),m.close(),Ae==="paused"?(y.showModal(),A("pause-map").focus()):x.focus({preventScroll:!0}))}A("pause-map").addEventListener("click",xe);let oe=A("minimap-enable");try{oe.checked=localStorage.getItem("arroyo-fold.radar")!=="off"}catch{oe.checked=!0}document.body.classList.toggle("no-minimap",!oe.checked),oe.addEventListener("change",()=>{document.body.classList.toggle("no-minimap",!oe.checked);try{localStorage.setItem("arroyo-fold.radar",oe.checked?"on":"off")}catch{}});function Me(){D==="menu"||D==="paused"||D==="map"||(R=D,le("paused"),M.clear(),I.set(0,0),K(),A("resume").textContent=R==="tour"?"Resume tour":"Resume walk",A("tour-toggle").textContent=R==="tour"?"Walk from here":"Play tour",y.showModal(),A("resume").focus())}function W(){D==="paused"&&(y.open&&y.close(),le(R),x.focus({preventScroll:!0}))}function ce(){p.reset(),y.open&&y.close(),le("menu"),K(),M.clear(),A("scene-fade").style.opacity=0,document.body.classList.remove("film"),Ee(fe),A("start-walk").focus()}A("start-walk").disabled=!1,A("start-walk").textContent="Walk through",A("start-tour").disabled=!1,A("load-status").textContent="",A("start-walk").addEventListener("click",()=>te("walk")),A("start-tour").addEventListener("click",()=>te("tour")),A("sound-toggle").addEventListener("click",w),A("pause-sound").addEventListener("click",w),A("pause-open").addEventListener("click",Me),A("interaction").addEventListener("click",()=>Qe()),A("resume").addEventListener("click",X=>{X.preventDefault(),W()}),A("pause-close").addEventListener("click",X=>{X.preventDefault(),W()}),A("return-start").addEventListener("click",ce),A("tour-toggle").addEventListener("click",()=>te(R==="tour"?"walk":"tour")),y.addEventListener("cancel",X=>{X.preventDefault(),W()}),y.addEventListener("close",()=>{D==="paused"&&!y.open&&W()}),A("time-slider").addEventListener("input",X=>{P=Number(X.target.value),a(P),A("time-label").textContent=P>.82?"Night":P>.6?"Blue hour":P>.27?"Golden hour":"Afternoon"});let se=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowLeft","ArrowDown","ArrowRight","ShiftLeft","ShiftRight"]);window.addEventListener("keydown",X=>{if(D==="map"){(X.code==="Escape"||X.code==="KeyG")&&!X.repeat&&(X.preventDefault(),ie());return}if(X.code==="KeyG"&&!X.repeat&&(D==="walk"||D==="paused")){X.preventDefault(),xe();return}if(!(X.target instanceof HTMLInputElement)){if(D!=="menu"&&X.code==="KeyH"&&!X.repeat){document.body.classList.toggle("film");return}if(X.code==="Escape"||X.code==="KeyP"){X.preventDefault(),D==="paused"?W():Me();return}D==="menu"||D==="paused"||(X.code==="KeyF"&&D==="walk"&&!X.repeat&&(X.preventDefault(),p.toggleFinder()),X.code==="KeyM"&&!X.repeat&&w(),X.code==="KeyT"&&!X.repeat&&te(D==="tour"?"walk":"tour"),X.code==="Space"&&D==="tour"&&(X.preventDefault(),Q=!Q),X.code==="KeyE"&&!X.repeat&&(X.preventDefault(),Qe()),se.has(X.code)&&(X.preventDefault(),we&&Ge(),M.add(X.code),V=0,D==="tour"&&(le("walk"),Be(),A("scene-fade").style.opacity=0)))}}),window.addEventListener("keyup",X=>M.delete(X.code)),window.addEventListener("blur",()=>{M.clear(),(D==="walk"||D==="tour")&&Me()}),document.addEventListener("visibilitychange",()=>{document.hidden&&D!=="menu"&&Me()}),document.addEventListener("pointerlockchange",()=>{let X=j;j=document.pointerLockElement===x,X&&!j&&D==="walk"&&Me()}),document.addEventListener("mousemove",X=>{j&&D==="walk"&&(k-=X.movementX*.002,F=wl(F-X.movementY*.002,-1.35,1.35),V=0)}),x.addEventListener("pointerdown",X=>{D!=="walk"||j||(O={id:X.pointerId,x:X.clientX,y:X.clientY,distance:0,touch:X.pointerType==="touch"},x.setPointerCapture(X.pointerId))}),x.addEventListener("pointermove",X=>{if(!O||O.id!==X.pointerId||D!=="walk")return;let Y=X.clientX-O.x,pe=X.clientY-O.y;O.distance+=Math.hypot(Y,pe),O.x=X.clientX,O.y=X.clientY,k-=Y*.003,F=wl(F-pe*.003,-1.35,1.35),V=0}),x.addEventListener("pointerup",X=>{if(D!=="walk")return;if(j){Qe();return}if(!O||O.id!==X.pointerId)return;let Y=O.distance<6,pe=O.touch;if(O=null,!Y)return;let Te=x.getBoundingClientRect();if(b.set(2*(X.clientX-Te.left)/Te.width-1,1-2*(X.clientY-Te.top)/Te.height),!Qe(b)&&!pe&&x.requestPointerLock)try{x.requestPointerLock()?.catch?.(()=>{})}catch{}}),x.addEventListener("pointercancel",()=>{O=null});for(let X of document.querySelectorAll("[data-move]")){let Y={forward:"KeyW",backward:"KeyS",left:"KeyA",right:"KeyD"}[X.dataset.move];X.addEventListener("pointerdown",pe=>{pe.preventDefault(),X.setPointerCapture(pe.pointerId),we&&Ge(),M.add(Y),V=0});for(let pe of["pointerup","pointercancel","lostpointercapture"])X.addEventListener(pe,()=>M.delete(Y))}function Ie(X){for(let Y of q){if(Y.handleTime<.46){Y.handleTime=Math.min(.46,Y.handleTime+X);let It=Y.handleTime,sn=It<.09?Je.smoothstep(It,0,.09):1-Je.smoothstep(It,.16,.46);if(Y.handle(sn),Y.lever=sn,u({reflections:!1}),It<.065)continue}if(Y.target===Y.open)continue;let pe=Math.abs(Y.open-Y.target)<6e-4?Y.target:Je.damp(Y.open,Y.target,5,X),Te=Y.open,De=Math.abs(Number(Y.group.userData.delta||1.9)*(pe-Te)),ht=Math.max(1,Math.ceil(De/.045)),Ut=Fe(Y,i.position.x,-i.position.z);for(let It=1;It<=ht;It++){let sn=Je.lerp(Te,pe,It/ht);Ke(Y,sn);let yn=Fe(Y,i.position.x,-i.position.z);if(D==="walk"&&yn<(ge+.025)**2&&yn<Ut-1e-8){Ke(Y,Y.open);break}Ut=yn,Y.open=sn}}}function ye(){L=ee||ve.traveling||p.raised?null:o.pick(i,E);let X=A("interaction"),Y=ee||ve.traveling?"":L?L.action.label():we&&!ee?_e?"Put down journal":we.id==="driver"?"Get out of car":"Stand up":ve.active?ve.label:"";X.hidden=!Y;let pe=Y+(B?"":" \xB7 E");Y&&X.textContent!==pe&&(X.textContent=pe)}function Se(X){if(Q)return;for(U+=X;U>=_a[H].duration;)U-=_a[H].duration,H=(H+1)%_a.length;let Y=dm(H,U,C);i.position.copy(wo(Y.position)),i.lookAt(wo(Y.target)),A("scene-fade").style.opacity=String(Y.fade),A("tour-caption").textContent!==Y.title&&(A("tour-caption").textContent=Y.title)}function We(X){if(X=Math.min(Math.max(X,0),.08),Ie(X),D==="walk"&&ve.traveling)I.set(0,0),ve.update(X,0,0,f.night),ye();else if(D==="walk"&&ee){let Y=ee;(!Y.fromDriver||Math.abs(d.doors[0].angle)>.9)&&(Y.t=Math.min(1,Y.t+X/.44));let pe=Je.smoothstep(Y.t,0,1);i.position.lerpVectors(Y.from,Y.to,pe),i.quaternion.slerpQuaternions(Y.fromQ,Y.toQ,pe),Be(),Y.t===1&&(ee=null),ye()}else if(D==="walk"&&we)S.set(F,k,0,"YXZ"),i.quaternion.setFromEuler(S),ye();else if(D==="walk"){let Y=Number(M.has("KeyW")||M.has("ArrowUp"))-Number(M.has("KeyS")||M.has("ArrowDown")),pe=Number(M.has("KeyD")||M.has("ArrowRight"))-Number(M.has("KeyA")||M.has("ArrowLeft")),Te=new me(pe,Y);Te.lengthSq()>1&&Te.normalize();let De=M.has("ShiftLeft")||M.has("ShiftRight")?3:1.65;I.x=Je.damp(I.x,Te.x*De,11,X),I.y=Je.damp(I.y,Te.y*De,11,X),!pe&&Math.abs(I.x)<.008&&(I.x=0),!Y&&Math.abs(I.y)<.008&&(I.y=0);let ht=(I.x*Math.cos(k)-I.y*Math.sin(k))*X,Ut=(I.x*Math.sin(k)+I.y*Math.cos(k))*X;if(ve.active)ve.update(X,ht*.48,-Ut*.48,f.night);else{(ht||Ut)&&z(ht,Ut);let It=i.position.x,sn=-i.position.z,yn=It>-2.5&&It<2.2&&sn>.9&&sn<4.3?-.3:s(It,-sn);It>1.68&&It<2.2&&sn>1.7&&sn<3.2&&(yn=-.15);let di=1.65+yn;i.position.y=Math.abs(i.position.y-di)<45e-5?di:Je.damp(i.position.y,di,14,X)}S.set(F,k,0,"YXZ"),i.quaternion.setFromEuler(S),ye(),V+=X,_.classList.toggle("quiet",V>7)}else D==="tour"&&Se(X);be.update(X,{grounded:D==="walk"&&!we&&!ee&&!ve.active&&!ve.traveling,moving:I.lengthSq()>.01}),l.update(i,P,Z)}return Ee(fe),G(),a(P),{update:We,sliders:Z,footsteps:be,openMap:xe,closeMap:ie,pose(X){if(!Sl[X])return null;y.open&&y.close(),le("walk"),A("scene-fade").style.opacity=0;for(let Y of q)Y.target=1,Y.open=1,Ke(Y,1);return Ee(X),{position:i.position.clone(),target:wo(Sl[X].target)}},get mode(){return D},get transitioning(){return!!ee||ve.traveling},get inCar(){return we?.id==="driver"||!!ee?.fromDriver},get seated(){return we?.id??null},get swimming(){return ve.active},immersion:ve.immersion,aimAt(X,Y){be.reset(),i.position.copy(X),i.lookAt(Y),Be(),I.set(0,0)}}}var wo,wl,Am=ct(()=>{gt();am();id();hm();fm();wo=([i,e,t])=>new T(i,t,-e),wl=(i,e,t)=>Math.min(t,Math.max(e,i))});function mm(i,e){let t=0,n=new Set;if(i.traverse(s=>{/^carport[ _]/.test(s.name)&&(s.visible=!1,s.traverse(r=>{n.add(r),r.isMesh&&t++}))}),!t)throw new Error("The original hardtop carport batch was not found");if(e)for(let s=e.length-1;s>=0;s--)n.has(e[s])&&e.splice(s,1)}var gm=ct(()=>{});function xm({scene:i,light:e}){let t="Fitted black Bakelite telephone cradle",n=i.getObjectByName(t);if(n)return n;let s=[],r=[],a=(d,h)=>{let f=new gi(d.map(p=>new T(...p)),!1,"catmullrom",.3);s.push(new xi(f,10,h,8,!1))},o=(d,h)=>{let f=new Wn(1,12,8);f.scale(...h),f.translate(...d),s.push(f)};for(let d of[-1,1]){let h=$t.x+d*.066,f=$t.x+d*.07905,p=-$t.receiverNorth;o([h,.828,p],[.013,.006,.016]),a([[h,.825,p],[h,.84,p],[f,.849,p],[f,.852,p]],.0065);for(let g of[-.01785,.01785])a([[f,.848,p],[f,.854,p+g*.5],[f,.8587,p+g]],.0036),o([f,.8587,p+g],[.0048,.0032,.0048]),r.push(new T(f,.8619,p+g))}let c=un(s);for(let d of s)d.dispose();let l=new at({name:"Molded polished black Bakelite cradle",color:1514264,roughness:.25});e.patch(l,{plainMap:!0});let u=new Le(c,l);return u.name=t,u.castShadow=!0,u.receiveShadow=!0,u.userData.cradleContacts=r.map(d=>d.toArray()),i.add(u),u}function _m({scene:i,light:e,dial:t}){let n=new at({name:"Telephone aged nickel brass dial",color:10852722,metalness:.76,roughness:.37}),s=new at({name:"Telephone printed ivory dial face",color:14998725,roughness:.78}),r=new at({name:"Telephone dial fingerstop Bakelite",color:1776407,roughness:.29});for(let x of[n,s,r])e.patch(x,{plainMap:!0});let a=(x,v,_,y)=>{let E=new Le(v,_);return E.name=y,E.castShadow=!0,E.receiveShadow=!0,E.userData.householdPart=!0,x.add(E),E},o=a(i,new zt(.058,.058,.002,48),s,"Telephone stationary numbered dial face");o.position.copy(t.position),o.position.y-=.0015;let c=new hs;c.absarc(0,0,.051,0,Math.PI*2,!1);let l=new Li;l.absarc(0,0,.024,0,Math.PI*2,!0),c.holes.push(l);for(let x=0;x<10;x++){let v=(x*30+30)*Math.PI/180,_=new Li;_.absarc(.0385*Math.cos(v),.0385*Math.sin(v),.0076,0,Math.PI*2,!0),c.holes.push(_)}let u=new ks(c,{depth:.0018,bevelEnabled:!0,bevelSize:3e-4,bevelThickness:3e-4,bevelSegments:1,curveSegments:24});u.rotateX(-Math.PI/2),a(t,u,n,"Telephone perforated returning finger wheel");let d=document.createElement("canvas");d.width=512,d.height=512;let h=d.getContext("2d");h.clearRect(0,0,512,512),h.fillStyle="#302d24",h.textAlign="center",h.textBaseline="middle",h.font="bold 29px Georgia,serif";for(let x=0;x<10;x++){let v=(x*30+30)*Math.PI/180;h.fillText(String((x+1)%10),256+Math.cos(v)*227,256-Math.sin(v)*227)}h.fillStyle="#e9dfc6",h.beginPath(),h.ellipse(256,256,83,58,0,0,Math.PI*2),h.fill(),h.strokeStyle="#6f6954",h.lineWidth=3,h.stroke(),h.fillStyle="#37332b",h.font="18px Georgia,serif",h.fillText("ARROYO",256,237),h.font="bold 22px Georgia,serif",h.fillText("555\u20130147",256,266),h.strokeStyle="#9d9376",h.lineWidth=1,h.beginPath(),h.moveTo(191,249),h.lineTo(321,249),h.stroke();let f=new ri(d);f.colorSpace=dt,f.anisotropy=2;let p=new at({name:"Telephone original printed number card and dial numerals",map:f,transparent:!0,depthWrite:!1,roughness:.82});e.patch(p,{plainMap:!0});let g=a(i,new Hn(.125,.125).rotateX(-Math.PI/2),p,"Telephone fixed paper subscriber card and ten dial numerals");g.position.copy(t.position),g.position.y+=.0027;let m=a(i,new Ot(.008,.004,.022),n,"Telephone fixed brass fingerstop");m.position.copy(t.position).add(new T(.045,.004,.027)),m.rotation.y=-.55;let A=a(i,new Ot(.0085,.008,.007),r,"Telephone fingerstop raised tip");return A.position.copy(m.position).add(new T(.005,.003,-.007)),A.rotation.y=m.rotation.y,{hitTarget:o}}function bm({scene:i,light:e}){let t=new at({name:"Entry worn brass household keys",color:11639394,metalness:.78,roughness:.36}),n=new at({name:"Entry steel split key ring",color:12170919,metalness:.85,roughness:.3});e.patch(t,{plainMap:!0}),e.patch(n,{plainMap:!0});let s=new st;s.name="Two household keys on split ring",s.userData.householdPart=!0,s.position.set(-4.16,.787,-5.12),s.rotation.y=.28,i.add(s);let r=new Le(new Gs(.013,85e-5,6,40,Math.PI*1.96),n);r.rotation.x=-Math.PI/2,s.add(r);let a=r.clone();a.position.y=.0012,a.rotation.z=.13,s.add(a);for(let[o,c]of[[0,-.45],[1,.55]]){let l=new st;l.rotation.y=c,l.position.set(o*.008-.004,.0018+o*.0015,-.01),s.add(l);let u=new hs;u.absarc(0,0,.009,0,Math.PI*2,!1);let d=new Li;d.absarc(0,0,.0045,0,Math.PI*2,!0),u.holes.push(d);let h=new ks(u,{depth:.0015,bevelEnabled:!1,curveSegments:16});h.rotateX(-Math.PI/2),l.add(new Le(h,t));let f=new hs;f.moveTo(-.003,-.005),f.lineTo(.003,-.005),f.lineTo(.003,-.042),f.lineTo(-.002,-.042),f.lineTo(-.003,-.039),f.lineTo(-5e-4,-.036),f.lineTo(-.003,-.033),f.lineTo(-5e-4,-.03),f.lineTo(-.003,-.027),f.lineTo(-5e-4,-.024),f.lineTo(-.003,-.021),f.closePath();let p=new ks(f,{depth:.0015,bevelEnabled:!1,curveSegments:1});p.rotateX(-Math.PI/2),l.add(new Le(p,t))}return s.traverse(o=>{o.isMesh&&(o.castShadow=!0,o.receiveShadow=!0,o.userData.householdPart=!0)}),s}var $t,ad=ct(()=>{gt();ci();$t=Object.freeze({x:-5.12,floor:.75,north:5.14,baseScale:.68,receiverScale:.51,receiverY:.888,receiverNorth:5.1808,dialY:.8452,dialNorth:5.1196})});async function vm(i,e){let t=await new pn().loadAsync("assets/child-moon-drawing.webp");t.colorSpace=dt,t.anisotropy=4;let n=new at({map:t,roughness:.96,side:Lt});n.name="Pencil and crayon on drawing paper",e.patch(n,{plainMap:!0});let s=[],r=[],a=[],o=10;for(let u=0;u<=o;u++)for(let d=0;d<=o;d++){let h=d/o,f=u/o,p=Math.max(0,(.17-h-f)/.17);if(s.push(-1.43+(f-.5)*.31,.7617+.0021*p*p,-9.8+(h-.5)*.23),r.push(h,f),d<o&&u<o){let g=u*(o+1)+d;a.push(g,g+1,g+o+1,g+1,g+o+2,g+o+1)}}let c=new ut;c.setAttribute("position",new ze(s,3)),c.setAttribute("uv",new ze(r,2)),c.setIndex(a),c.computeVertexNormals();let l=new Le(c,n);l.name="Ruth\u2019s pencil drawing of a moon flight",l.receiveShadow=!0,i.add(l)}var ym=ct(()=>{gt()});function GM(i,e,t){let n=new Map,s=e.cellMeters,r=e.toleranceMeters**2,a=f=>f.map(p=>Math.floor(p/s)).join("/");for(let f of e.triangles){let p=[0,1,2].map(m=>f.v.reduce((A,x)=>A+x[m],0)/3),g=a(p);n.has(g)||n.set(g,[]),n.get(g).push(f)}let o={removedCaseTriangles:0,movingOriginalTriangles:0,movingDrawCalls:0},c=[],l=null,u=new T,d=new T;i.updateWorldMatrix(!0,!0);let h=[];i.traverse(f=>{f.isMesh&&h.push(f)});for(let f of h){let p=f.geometry,g=p.attributes.position,m=p.index;if(!g)continue;let A=[],x=[];for(let v=0;v<(m?.count??g.count);v+=3){let _=[0,1,2].map(I=>m?m.getX(v+I):v+I),y=_.map(I=>u.fromBufferAttribute(g,I).applyMatrix4(f.matrixWorld).toArray()),E=[0,1,2].map(I=>y.reduce((S,C)=>S+C[I],0)/3);if(E[0]<-5.68||E[0]>-5.07||E[1]<.17||E[1]>.57||E[2]<-10.37||E[2]>-9.82){A.push(..._);continue}let b=E.map(I=>Math.floor(I/s)),M=null;e:for(let I=-1;I<=1;I++)for(let S=-1;S<=1;S++)for(let C=-1;C<=1;C++)for(let B of n.get([b[0]+I,b[1]+S,b[2]+C].join("/"))??[])if(y.every(D=>B.v.some(R=>D.reduce((k,F,P)=>k+(F-R[P])**2,0)<r))){M=B;break e}M?.action==="remove"?(o.removedCaseTriangles++,l=f.material,c.push({geometry:p,ids:_,triangle:new si(...y.map(I=>new T(...I)))})):M?.action==="move"?(x.push(..._),o.movingOriginalTriangles++):A.push(..._)}if(x.length){let v=new ut,_=new rt().getNormalMatrix(f.matrixWorld);for(let[E,b]of Object.entries(p.attributes)){let M=new Float32Array(x.length*b.itemSize);for(let I=0;I<x.length;I++)if(E==="position")u.fromBufferAttribute(b,x[I]).applyMatrix4(f.matrixWorld).toArray(M,I*3);else if(E==="normal")d.fromBufferAttribute(b,x[I]).applyMatrix3(_).normalize().toArray(M,I*3);else for(let S=0;S<b.itemSize;S++)M[I*b.itemSize+S]=b.getComponent(x[I],S);v.setAttribute(E,new Et(M,b.itemSize))}let y=new Le(v,f.material);y.name="Original upper nightstand drawer / "+f.material.name,y.castShadow=y.receiveShadow=!0,t.add(y),o.movingDrawCalls++}A.length!==(m?.count??g.count)&&(p.setIndex(A),p.computeBoundingBox(),p.computeBoundingSphere())}if(o.removedCaseTriangles!==e.expected.remove||o.movingOriginalTriangles!==e.expected.move)throw Error("Original east nightstand geometry did not match: "+JSON.stringify(o));return{stats:o,shellSamples:c,caseMaterial:l}}function QM(i,e){let t=e[0].geometry.attributes,n=new Map;for(let[c,l]of Object.entries(t))c!=="position"&&c!=="normal"&&n.set(c,new Float32Array(i.attributes.position.count*l.itemSize));let s=new T,r=new T,a=new T,o=new T;for(let c=0;c<i.attributes.position.count;c++){s.fromBufferAttribute(i.attributes.position,c);let l=1/0,u=null;for(let h of e){h.triangle.closestPointToPoint(s,r);let f=r.distanceToSquared(s);f<l&&(l=f,u=h,a.copy(r))}u.triangle.getBarycoord(a,o);let d=o.toArray();for(let[h,f]of n){let p=u.geometry.attributes[h];for(let g=0;g<p.itemSize;g++)f[c*p.itemSize+g]=u.ids.reduce((m,A,x)=>m+p.getComponent(A,g)*d[x],0)}}for(let[c,l]of n)i.setAttribute(c,new Et(l,t[c].itemSize))}async function Mm({scene:i,core:e=i,loader:t,light:n,register:s,dirty:r,animateRegion:a=()=>{}}){let[o,c]=await Promise.all([fetch("assets/nightstand-source.json"),t.loadAsync("assets/nightstand.glb")]);if(!o.ok)throw Error("Nightstand source geometry unavailable");let l=await o.json(),u=new st;u.name="Working east primary nightstand",i.add(u);let d=new st;d.name="Primary bedside upper drawer and original pulls",u.add(d);let{stats:h,shellSamples:f,caseMaterial:p}=GM(e,l,d),g=new Map;c.scene.updateWorldMatrix(!0,!0),c.scene.traverse(E=>{if(!E.isMesh)return;let b=E.userData.nightstandPart;if(b!=="static"&&b!=="drawer")throw Error("Unlabelled nightstand replacement mesh");let M=E.geometry.clone().applyMatrix4(E.matrixWorld),I=b==="static"&&E.material.name==="walnut",S=I?p:E.material;I&&QM(M,f);let C=b+"/"+S.uuid;g.has(C)||g.set(C,{part:b,material:S,geometries:[]}),M.attributes.uv||M.setAttribute("uv",new ze(new Float32Array(M.attributes.position.count*2),2)),g.get(C).geometries.push(M)});for(let{part:E,material:b,geometries:M}of g.values()){b!==p&&n.patch(b,{plainMap:!0});let I=new Le(un(M),b);I.name="Nightstand "+E+" / "+b.name,I.castShadow=I.receiveShadow=!0,(E==="drawer"?d:u).add(I);for(let S of M)S.dispose()}h.replacementDrawCalls=g.size;let m=!1,A=0,x=new T(-5.5295,.51,-9.85),v=x.clone(),_=new it(new T(-5.66,.455,-10.31),new T(-5.08,.56,-9.54));a(()=>Math.abs(A-(m?1:0))>1e-5?_:null);let y=new it(new T(-5.655,.455,-9.88),new T(-5.084,.56,-9.88));return s({id:"primary-nightstand-drawer",label:()=>m?"Close bedside drawer":"Open bedside drawer",point:()=>v.copy(x).add(d.position),reach:1.75,radius:.095,bounds:()=>A<.02?null:(y.max.z=-9.85+.27*A,y),use(){m=!m,r({shadows:!0})}}),{drawer:d,stats:h,update(E=0){let b=m?1:0;return A===b?!1:(A=Je.damp(A,b,7,Math.max(0,Math.min(E,.06))),Math.abs(A-b)<2e-4&&(A=b),d.position.z=.27*A,r({reflections:!1}),!0)}}}var Em=ct(()=>{gt();ci()});function Cm({scene:i,light:e,register:t,dirty:n=()=>{},audio:s,animateRegion:r=()=>{}}){let a=new st;a.name="Child\u2019s enamel-ringed wooden spinning top",i.add(a);let o=new st;o.name="Top physical tip and body",a.add(o);let c=(F,P)=>{let H=new at({name:F,...P});return e.patch(H,{plainMap:!0}),H},l=c("Turned wood and hand-painted enamel rings",{color:16777215,roughness:.38,vertexColors:!0}),u=c("Spinning top small polished brass tip",{color:11834706,roughness:.26,metalness:.78}),d=c("Still colored glass cat-eye marbles",{color:16777215,roughness:.16,metalness:.12,vertexColors:!0}),h=new qr(Tl.map(([F,P])=>new me(F,P)),48),f=[],p=h.attributes.position,g=new Oe;for(let F=0;F<p.count;F++){let P=p.getY(F),H=Math.atan2(p.getZ(F),p.getX(F));g.set(P>=.027&&P<.038?10567472:P>=.047&&P<.055?3631992:P>=.06&&P<.067?14997164:12025153),g.multiplyScalar(1+.035*Math.sin(H*7+P*740)),P>=.038&&P<.047&&Math.abs(H-.7)<.17&&g.set(15391926),f.push(g.r,g.g,g.b)}h.setAttribute("color",new ze(f,3));let m=new Le(h,l);m.name="Top turned wooden body and enamel rings";let A=new Le(new qr(Sm.map(([F,P])=>new me(F,P)),24),u);A.name="Top brass contact tip";for(let F of[m,A])F.castShadow=!0,F.receiveShadow=!0,o.add(F);let x=[];for(let[F,P,H,U]of[[-1.17,-10.04,.009,4684921],[-1.15,-10.11,.011,10120246]]){let L=new Wn(H,20,12),O=[],V=L.attributes.position;for(let j=0;j<V.count;j++)g.set(Math.sin(Math.atan2(V.getZ(j),V.getX(j))*3+V.getY(j)/H*2)>.6?15128756:U),O.push(g.r,g.g,g.b);L.setAttribute("color",new ze(O,3)),L.translate(F,.76+H,P),x.push(L)}let v=new Le(un(x),d);for(let F of x)F.dispose();v.name="Two still cat-eye glass marbles on writing desk",v.castShadow=!0,v.receiveShadow=!0,a.add(v);let _=new Qt,y=new Qt,E=new Qt,b=new T(0,1,0),M=new T(0,0,1),I=new T(-1.43,.805,-10.1),S=Co,C=!1,B=!1;function D(F){let P,H,U;if(F<5.8?P=.025+.075*(F/5.8)**2+.012*Math.sin(F*3)*Math.sin(Math.PI*F/5.8):F<7.2?P=.1+.6*Cl((F-5.8)/1.4):P=.7+(VM-.7)*Cl(F-7.2),H=F<7.2?.55*F+.055*F*F:6.8112+.37*Cl(F-7.2),F<7.2)U=52*F-2.8*F*F;else{let V=wm(F-7.2);U=229.248+11.68*(V-V*V+V*V*V/3)}_.setFromAxisAngle(b,H),y.setFromAxisAngle(M,P),E.setFromAxisAngle(b,U),o.quaternion.copy(_).multiply(y).multiply(E);let L=Math.min(Il(Tl,P),Il(Sm,P)),O=.003+.009*Cl((F-4)/3.2);o.position.set(-1.43+O*Math.cos(H),zM-L,-10.1+O*.7*Math.sin(H)),o.updateMatrixWorld(!0)}D(Co);let R=new it(new T(-1.59,.758,-10.24),new T(-1.27,.91,-9.96)),k=t({id:"child-spinning-top",label:()=>C?"Spin the wooden top again":"Spin the wooden top",point:I,reach:2.1,radius:.11,use:()=>{S=0,C=!0,B=!1,D(0),n({shadows:!0})}});return r(()=>C?R:null),n({shadows:!0}),{root:a,top:o,marbles:v,region:R,action:k,get active(){return C},get time(){return S},duration:Co,update(F){return C?(S=Math.min(Co,S+Math.max(0,F)),D(S),!B&&S>=7.65&&(B=!0,s?.cue?.("latch",.065,I)),S===Co&&(C=!1,n({shadows:!0})),!0):!1}}}var Co,zM,Tl,Sm,wm,Cl,Il,od,cd,VM,Tm=ct(()=>{gt();ci();Co=8.2,zM=.7602,Tl=[[.006,.01],[.01,.016],[.02,.027],[.03,.038],[.036,.047],[.039,.055],[.038,.06],[.031,.067],[.016,.073],[.006,.077],[.0055,.097],[.008,.101],[.008,.104],[.005,.108],[0,.109]],Sm=[[0,0],[.0015,.001],[.004,.011],[.006,.014]],wm=i=>Math.max(0,Math.min(1,i)),Cl=i=>(i=wm(i),i*i*(3-2*i)),Il=(i,e)=>Math.min(...i.map(([t,n])=>Math.cos(e)*n-t*Math.sin(e))),od=Math.PI/2,cd=Math.PI;for(let i=0;i<40;i++){let e=(od+cd)/2;Il(Tl.filter(t=>t[1]<.08),e)<Il(Tl.filter(t=>t[1]>=.08),e)?od=e:cd=e}VM=(od+cd)/2});function HM(i,e){let t=new Map,n=e.cellMeters,s=e.toleranceMeters**2,r=(p,g,m)=>`${p}/${g}/${m}`,a=new it,o=new T;for(let p of e.triangles){let g=[0,1,2].map(A=>p.v.reduce((x,v)=>x+v[A],0)/3),m=r(...g.map(A=>Math.floor(A/n)));t.has(m)||t.set(m,[]),t.get(m).push(p);for(let A of p.v)a.expandByPoint(o.fromArray(A))}a.expandByScalar(e.toleranceMeters);function c(p){let g=[0,1,2].map(m=>Math.floor(p.reduce((A,x)=>A+x[m],0)/(3*n)));for(let m=-1;m<=1;m++)for(let A=-1;A<=1;A++)for(let x=-1;x<=1;x++)for(let v of t.get(r(g[0]+m,g[1]+A,g[2]+x))||[])if(p.every(_=>v.v.some(y=>_.reduce((E,b,M)=>E+(b-y[M])**2,0)<s)))return v;return null}let l=[],u=new it,d=new st,h={body:0,door:0,gasket:0,obsolete:0},f={};d.name="Preserved original refrigerator doors and note",i.updateMatrixWorld(!0),i.traverseVisible(p=>{!p.isMesh||p.isInstancedMesh||!p.geometry.attributes.position||(p.geometry.boundingBox||p.geometry.computeBoundingBox(),u.copy(p.geometry.boundingBox).applyMatrix4(p.matrixWorld).intersectsBox(a)&&l.push(p))});for(let p of l){let g=p.geometry,m=g.attributes.position,A=g.index?.array,x=A?.length??m.count,v=new Set,_=[],y=a.clone().applyMatrix4(p.matrixWorld.clone().invert()),E=y.min,b=y.max,M=S=>{let C=m.getX(S),B=m.getY(S),D=m.getZ(S);return C>=E.x&&C<=b.x&&B>=E.y&&B<=b.y&&D>=E.z&&D<=b.z};for(let S=0;S<x;S+=3){let C=[A?A[S]:S,A?A[S+1]:S+1,A?A[S+2]:S+2];if(!C.every(M))continue;let B=C.map(k=>o.fromBufferAttribute(m,k).applyMatrix4(p.matrixWorld).toArray()),D=c(B);if(!D)continue;let R=D.part;f[D.object]=(f[D.object]??0)+1,h[R]++,v.add(S),R==="door"&&_.push(...C)}if(!v.size)continue;if(_.length){let S=new ut,C=new T,B=new rt().getNormalMatrix(p.matrixWorld);for(let[R,k]of Object.entries(g.attributes)){let F=new Float32Array(_.length*k.itemSize);for(let P=0;P<_.length;P++){let H=_[P];if(R==="position")F.set(o.fromBufferAttribute(k,H).applyMatrix4(p.matrixWorld).toArray(),P*3);else if(R==="normal")F.set(C.fromBufferAttribute(k,H).applyMatrix3(B).normalize().toArray(),P*3);else for(let U=0;U<k.itemSize;U++)F[P*k.itemSize+U]=k.getComponent(H,U)}S.setAttribute(R,new Et(F,k.itemSize))}let D=new Le(S,p.material);D.name="Original refrigerator exterior / "+p.material.name,D.castShadow=!0,D.receiveShadow=!0,d.add(D)}let I=[];for(let S=0;S<x;S+=3)v.has(S)||I.push(A?A[S]:S,A?A[S+1]:S+1,A?A[S+2]:S+2);g.setIndex(I),g.computeBoundingBox(),g.computeBoundingSphere()}for(let[p,g]of Object.entries(e.expected))if(h[p]!==g)throw Error(`Refrigerator source mismatch: ${p} ${h[p]}/${g} ${JSON.stringify(f)}`);return{door:d,counts:h}}function WM(i,e,t){i.updateMatrixWorld(!0);let n=new Map,s=[];i.traverse(a=>{a.isMesh&&s.push(a)});for(let a of s){let o=a.parent,c=!1;for(;o;){if(o===e){c=!0;break}o=o.parent}let l=c?e:i,u=a.geometry.clone();for(let h of["position","normal","uv"]){let f=u.attributes[h];if(!f)continue;let p=new Float32Array(f.count*f.itemSize);for(let g=0;g<f.count;g++)for(let m=0;m<f.itemSize;m++)p[g*f.itemSize+m]=f.getComponent(g,m);u.setAttribute(h,new Et(p,f.itemSize))}u.applyMatrix4(a.matrixWorld).applyMatrix4(l.matrixWorld.clone().invert());for(let h of Object.keys(u.attributes))["position","normal","uv"].includes(h)||u.deleteAttribute(h);u.attributes.uv||u.setAttribute("uv",new Et(new Float32Array(u.attributes.position.count*2),2));let d=(c?"moving/":"static/")+a.material.uuid;n.has(d)||n.set(d,{target:l,material:a.material,parts:[]}),n.get(d).parts.push(u.index?u.toNonIndexed():u),a.removeFromParent()}let r=[];for(let{target:a,material:o,parts:c}of n.values()){t.patch(o,{plainMap:!0}),o.name.includes("shielded warm interior lamp")&&(o.emissive.setHex(16764808),o.emissiveIntensity=0,r.push(o));let l=un(c,!1);for(let d of c)d.dispose();let u=new Le(l,o);u.name="Refrigerator "+o.name,u.castShadow=!0,u.receiveShadow=!0,a.add(u)}return{bulbs:r,batches:n.size}}async function Im({scene:i,loader:e,light:t,register:n,dirty:s,audio:r}){let[a,o]=await Promise.all([e.loadAsync("assets/interactive-fridge.glb"),fetch("assets/fridge-source.json").then(F=>{if(!F.ok)throw Error("Refrigerator source geometry "+F.status);return F.json()})]),c=a.scene;c.name="Operable stocked seafoam refrigerator";let l=c.getObjectByName(Bt.sanitizeNodeName("Refrigerator original door hinge"))??c.getObjectByName("Refrigerator original door hinge");if(!l)throw Error("Refrigerator door hinge missing");let{door:u,counts:d}=HM(i,o),{bulbs:h,batches:f}=WM(c,l,t);i.add(c),i.updateMatrixWorld(!0),l.attach(u);let p=new qn(16764808,0,.7,2);p.name="Shielded refrigerator interior light",p.position.set(-8.265,1.18,-3.77),c.add(p),t.addLocalEmitter?.(p);let g=l.quaternion.clone(),m=new T(0,1,0),A=new Qt,x=new it,v=new T(-7.775,1.22,-3.75);l.worldToLocal(v);let _=new it,y=new it,E=new Re,b=new Re,M=new T,I=new T;l.updateWorldMatrix(!0,!0),E.copy(l.matrixWorld).invert(),l.traverse(F=>{F.isMesh&&(F.geometry.boundingBox||F.geometry.computeBoundingBox(),b.copy(E).multiply(F.matrixWorld),_.union(y.copy(F.geometry.boundingBox).applyMatrix4(b)))});function S(){l.updateWorldMatrix(!0,!0),x.copy(_).applyMatrix4(l.matrixWorld),E.copy(l.matrixWorld).invert()}S();let C=!1,B=0,D=!1,R={id:"kitchen-refrigerator",label:()=>C?"Close refrigerator":"Open refrigerator",point:()=>l.localToWorld(I.copy(v)),reach:2.25,radius:.19,bounds:()=>x,clearance:(F,P)=>{M.set(F,0,P).applyMatrix4(E);let H=Je.clamp(M.x,_.min.x,_.max.x),U=Je.clamp(M.z,_.min.z,_.max.z);return(M.x-H)**2+(M.z-U)**2},use:()=>{C=!C,r?.cue("latch",.28,R.point()),s({shadows:!0})}};n(R);let k={source:d,batches:f,sourceObjects:o.sourceObjects,stocked:!0};return c.userData.refrigerator=k,{root:c,hinge:l,stats:k,action:R,update(F){let P=C?1:0,H=Math.abs(P-B)>4e-4;if(H?B=Je.damp(B,P,4.5,Math.min(F,.1)):B=P,!H&&!D)return!1;l.quaternion.copy(g).multiply(A.setFromAxisAngle(m,-1.745329252*B)),S();let U=Je.smoothstep(B,.015,.12);p.intensity=U*.9;for(let L of h)L.emissiveIntensity=U*2.2;return D=H,s({reflections:!1}),!0}}}var Rm=ct(()=>{gt();ci()});async function Bm({scene:i,light:e,register:t,dirty:n=()=>{},animateRegion:s=()=>{}}){let r=await Promise.all(["cover","spread-1","spread-2","spread-3","spread-4"].map(async Q=>{let q=await new pn().loadAsync(`assets/journal-${Q}.webp`);return q.colorSpace=dt,q.anisotropy=4,q})),a=new st;a.name="Form and Sun \u2014 original Autumn 1958 journal",a.position.set(.356,.138,-2.58),a.scale.set(.93,1,.93),a.rotation.y=Math.PI,i.add(a);let o=.205,c=.28,l=.006,u=[],d=(Q,q,Z=Nn)=>{let ue=new at({name:Q,map:q??null,color:16777215,roughness:.88,side:Z});return e.patch(ue,{plainMap:!0}),ue},h=d("Journal warm cut paper edges");h.color.set(14274487);let f=d("Journal left printed page",r[1]),p=d("Journal right printed page",r[1]),g=d("Journal turning printed recto",r[0]),m=d("Journal turning printed verso",r[1],Zt),A=(Q,q,Z)=>{let ue=new Le(Q,q);return ue.name=Z,ue.castShadow=!0,ue.receiveShadow=!0,a.add(ue),ue};A(new Ot(o,.005,c),h,"Journal bound paper block").position.set(o/2,.0025,0);let v=A(new Ot(o,.0025,c),h,"Journal turned paper stack");v.position.set(-o/2,.00125,0);function _(Q=!1,q=!1){let Z=[],ue=[],de=[];for(let fe=0;fe<=1;fe++)for(let Be=0;Be<=20;Be++){let we=Be/20,ee=Q?-o+we*o:we*o;Z.push(ee,l,-c/2+fe*c),ue.push(q?.5*(1-we):Q?we*.5:.5+we*.5,1-fe)}for(let fe=0;fe<20;fe++){let Be=fe,we=fe+1,ee=21+fe,_e=ee+1;de.push(Be,ee,we,we,ee,_e)}let ge=new ut;return ge.setAttribute("position",new ze(Z,3)),ge.setAttribute("uv",new ze(ue,2)),ge.setIndex(de),ge.computeVertexNormals(),ge}let y=A(_(!0),f,"Journal left open printed page"),E=A(_(),p,"Journal right open printed page"),b=new st;b.name="Journal turning leaf hinge",b.position.y=l+5e-4,a.add(b);let M=_(),I=_(!1,!0);for(let Q of[M,I]){let q=Q.attributes.position;for(let Z=0;Z<q.count;Z++)q.setY(Z,0)}let S=new Le(M,g),C=new Le(I,m);S.name="Journal turning leaf recto",C.name="Journal turning leaf verso";for(let Q of[S,C])Q.castShadow=!0,Q.receiveShadow=!0,b.add(Q);let B=(Q,q=!1,Z=!1)=>{let ue=Q.attributes.uv;for(let de=0;de<=1;de++)for(let $=0;$<=20;$++)ue.setXY(de*21+$,q?$/20:Z?.5*(1-$/20):.5+$/40,1-de);ue.needsUpdate=!0},D=!1,R=0,k=null,F=()=>globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1;function P(){for(let Q of[M,I]){let q=Q.attributes.position;for(let Z=0;Z<q.count;Z++)q.setY(Z,0);q.needsUpdate=!0,Q.computeVertexNormals(),Q.computeBoundingBox(),Q.computeBoundingSphere()}y.visible=v.visible=D,E.visible=D,b.visible=!D,b.rotation.z=0,g.map=r[0],m.map=r[1],B(M,!0),B(I,!1,!0),f.map=p.map=r[R+1]}function H(){k.kind==="open"?(D=!0,R=0):k.kind==="close"?(D=!1,R=0):R=k.next,k=null,P(),n({shadows:!0})}function U(Q){if(k)return;let q=(R+1)%4;k={kind:Q,next:q,t:0},b.visible=!0,E.visible=!0,y.visible=v.visible=D,g.map=Q==="page"?r[R+1]:r[0],m.map=Q==="page"?r[q+1]:r[R+1],B(M,Q!=="page"),B(I,!1,!0),Q==="page"&&(p.map=r[q+1]),Q==="open"&&(p.map=r[1]),b.rotation.z=Q==="close"?Math.PI:0,n({shadows:!0}),F()&&H()}P();let L=new T(.356,.15,-2.58),O=new T(.221,.15,-2.58),V=new T(.496,.15,-2.58);for(let Q of[{id:"journal-open",label:()=>"Open and read Form & Sun",point:L,enabled:()=>!D&&!k,use:()=>U("open"),radius:.13},{id:"journal-page",label:()=>R===3?"Turn page \xB7 return to first spread":`Turn page \xB7 ${R+1} of 4`,point:O,enabled:()=>D&&!k,use:()=>U("page"),radius:.09},{id:"journal-close",label:()=>"Close the journal",point:V,enabled:()=>D&&!k,use:()=>U("close"),radius:.065}])Q.reach=2.25,u.push(t(Q));let j=new it(new T(.15,.13,-2.72),new T(.56,.37,-2.44));return s(()=>k?j:null),n({shadows:!0}),{root:a,actions:u,region:j,get opened(){return D},get page(){return R},get moving(){return!!k},update(Q){if(!k)return!1;if(F())return H(),!0;k.t=Math.min(1,k.t+Math.max(0,Q)/.62);let q=k.t,Z=q*q*(3-2*q),ue=k.kind==="close"?Math.PI*(1-Z):Math.PI*Z;b.rotation.z=ue;for(let de of[M,I]){let $=de.attributes.position;for(let ge=0;ge<=1;ge++)for(let fe=0;fe<=20;fe++){let Be=fe/20;$.setY(ge*21+fe,.012*Math.sin(Math.PI*q)*Math.sin(Math.PI*Be))}$.needsUpdate=!0,de.computeVertexNormals(),de.computeBoundingBox(),de.computeBoundingSphere()}return n({reflections:!1}),q===1&&H(),!0}}}var Dm=ct(()=>{gt()});function Pm({root:i,light:e,register:t,dirty:n,audio:s,camera:r,accessible:a,doors:o}){let c=new st;c.name="Working AM radio and courtesy lamp",i.add(c);let l=($,ge,fe=.4,Be=0)=>e.patch(new at({name:$,color:ge,roughness:fe,metalness:Be}),{plainMap:!0}),u=l("Radio machined chrome",12502463,.22,.85),d=l("Radio black bakelite",1514520,.44),h=l("Radio aged ivory",14273960,.5);function f($,ge,fe,Be,we,ee,_e,be){let ve=new Le(new Ot(we,ee,_e),be);return ve.name=$,ve.position.set(ge,fe,Be),c.add(ve),ve}f("Radio chrome escutcheon",12.45,1.146,-4.812,.284,.062,.012,u);let p=document.createElement("canvas");p.width=1024,p.height=192;let g=p.getContext("2d");g.fillStyle="#17241e",g.fillRect(0,0,1024,192),g.strokeStyle="#d5caa1",g.fillStyle="#e5d5a6",g.lineWidth=3,g.textAlign="center",g.font="34px Georgia";for(let $=550;$<=1600;$+=50){let ge=42+($-li)/(ba-li)*940;g.beginPath(),g.moveTo(ge,111),g.lineTo(ge,$%100===0?134:124),g.stroke()}for(let $ of[550,700,900,1200,1600])g.fillText(String($/10),42+($-li)/(ba-li)*940,88);g.font="18px Georgia",g.fillText("A M P L I T U D E   M O D U L A T I O N",512,171);let m=new ri(p);m.colorSpace=dt,m.anisotropy=4;let A=l("Backlit AM glass scale",16777215,.28);A.map=m,A.emissiveMap=m,A.emissive.set(15185515),A.emissiveIntensity=0,f("Readable AM dial glass",12.45,1.146,-4.803,.268,.049,.003,A);let x=f("Moving amber AM tuning needle",12.45,1.148,-4.799,.0014,.041,.001,l("AM tuning needle",16170082,.32)),v=[];for(let[$,ge]of[[12.28,"Radio power and volume knob"],[12.62,"Radio tuning knob"]]){let fe=new st;fe.name=ge,fe.position.set($,1.132,-4.806),c.add(fe);let Be=new Le(new zt(.024,.026,.025,32),u);Be.rotation.x=Math.PI/2,fe.add(Be);let we=new Le(new zt(.02,.02,.002,32),d);we.rotation.x=Math.PI/2,we.position.z=.014,fe.add(we);let ee=new Le(new Ot(.0023,.012,.002),h);ee.position.set(0,.01,.016),fe.add(ee),v.push(fe)}f("Recessed dashboard mono speaker",12.49,1.245,-5.015,.205,.008,.205,d);for(let $=0;$<13;$++)f("Speaker grille bright rib "+$,12.397+$*.0155,1.251,-5.015,.004,.003,.197,u);for(let $ of[12.397,12.583])for(let ge of[-4.925,-5.105]){let fe=new Le(new Wn(.003,8,4),u);fe.position.set($,1.254,ge),c.add(fe)}let _=f("Chrome cabin courtesy lamp surround",12.35,1.744,-3.96,.155,.018,.085,u),y=l("Courtesy lamp ribbed ivory lens",14997421,.4);y.emissive.set(16766103),y.emissiveIntensity=0,f("Courtesy lamp opal lens",12.35,1.731,-3.96,.132,.015,.064,y);for(let $=0;$<9;$++)f("Courtesy lens molded prism "+$,12.294+$*.014,1.722,-3.96,.002,.003,.059,h);let E=new qn(16761985,0,1.65,2);E.name="Door operated cabin courtesy light",E.position.set(12.35,1.69,-3.96),c.add(E),e.addLocalEmitter?.(E);let b=740,M=740,I=!1,S=.6,C=0,B=0,D=null,R=!1,k=new T(12.49,1.25,-5.015),F=new T,P=new T,H=new T(0,1,0);function U($){let ge=null,fe=0;for(let Be of Fm){let we=Math.exp(-((($-Be.frequency)/17)**2));we>fe&&(fe=we,ge=Be)}return{station:fe>.1?ge:null,strength:fe}}function L($){M=ld($,li,ba),n({reflections:!1})}function O(){I=!I,s?.cue("switch",.2,k),n({reflections:!1})}function V(){S=S<.4?.6:S<.8?1:.25,s?.cue("switch",.1,k),n({reflections:!1})}let j=()=>`${Math.round(M)} kHz \xB7 ${U(M).station?.name??"between stations"}`,Q=()=>a();t({id:"car-radio-power",enabled:Q,label:()=>`${I?"Switch off":"Switch on"} AM radio`,point:new T(12.28,1.132,-4.77),radius:.065,reach:1.7,use:O}),t({id:"car-radio-volume",enabled:()=>Q()&&I,label:()=>`Turn radio volume \xB7 ${S<.4?"low":S<.8?"medium":"high"}`,point:new T(12.28,1.22,-4.77),radius:.025,priority:.1,reach:1.7,use:V});for(let[$,ge,fe]of[[-1,"lower",12.565],[1,"higher",12.675]])t({id:"car-radio-tune-"+ge,enabled:Q,label:()=>`Tune ${ge} \xB7 ${j()}`,point:new T(fe,1.132,-4.77),radius:.035,reach:1.7,use:()=>L(M+$*20)});let q=new Sn(new T(0,0,1),4.796),Z=new T;t({id:"car-radio-dial",enabled:Q,label:()=>`Tune AM dial \xB7 ${j()}`,point:new T(12.45,1.146,-4.796),reach:1.7,hitTest:$=>!$.ray.intersectPlane(q,Z)||Z.x<12.316||Z.x>12.584||Math.abs(Z.y-1.146)>.027?null:{point:Z.clone(),distance:$.ray.origin.distanceTo(Z)},use:$=>L(Math.round((li+ld(($.x-12.324)/.25,0,1)*(ba-li))/10)*10)});function ue(){let $=s?.output();if(!$||D||R)return;let{context:ge,destination:fe}=$,Be=ge.createBiquadFilter(),we=ge.createBiquadFilter(),ee=ge.createGain(),_e=ge.createStereoPanner();Be.type="highpass",Be.frequency.value=180,we.type="lowpass",we.frequency.value=3400,ee.gain.value=0,Be.connect(we),we.connect(ee),ee.connect(_e),_e.connect(fe);let be=ge.createBuffer(1,ge.sampleRate*3,ge.sampleRate),ve=be.getChannelData(0),Ee=1958;for(let qe=0;qe<ve.length;qe++)Ee=1664525*Ee+1013904223>>>0,ve[qe]=(Ee/2147483648-1)*.55;let Ke=ge.createBufferSource(),Fe=ge.createGain();Ke.buffer=be,Ke.loop=!0,Fe.gain.value=.2,Ke.connect(Fe),Fe.connect(Be),Ke.start();let nt=Fm.map(qe=>{let $e=ge.createGain();return $e.gain.value=0,$e.connect(Be),{station:qe,gain:$e,loaded:!1}});D={context:ge,gain:ee,pan:_e,low:we,hissGain:Fe,channels:nt};for(let qe of nt)fetch("assets/"+qe.station.file).then($e=>{if(!$e.ok)throw Error("Radio programme unavailable");return $e.arrayBuffer()}).then($e=>ge.decodeAudioData($e)).then($e=>{let z=ge.createBufferSource();z.buffer=$e,z.loop=!0,z.connect(qe.gain),z.start(0,ge.currentTime%$e.duration),qe.loaded=!0}).catch(()=>{R=!0})}function de($){ue();let ge=b;b=Je.damp(b,M,14,$),C=Je.damp(C,I?1:0,I?1.5:12,$),v[0].rotation.z=Je.damp(v[0].rotation.z,I?-.4-S*1.5:.5,14,$),v[1].rotation.z=-(b-li)/(ba-li)*Math.PI*5.2,x.position.x=12.324+(b-li)/(ba-li)*.25,A.emissiveIntensity=C*.72;let fe=o.some(_e=>Math.abs(_e.angle)>.045),Be=Je.damp(B,fe?1:0,fe?22:14,$),we=Math.abs(Be-B)>3e-4;if(B=Be,E.intensity=.48*B,y.emissiveIntensity=1.8*B,D&&r){let{context:_e}=D,be=_e.currentTime,ve=U(b).strength;for(let qe of D.channels){let $e=Math.exp(-(((b-qe.station.frequency)/17)**2));qe.gain.gain.setTargetAtTime($e*.9,be,.045)}D.hissGain.gain.setTargetAtTime(.012+(1-ve)*.34,be,.035);let Ee=r.position.distanceTo(k),Ke=!a(),Fe=1/(1+Math.max(0,Ee-.4)**2*.65),nt=Ke&&!fe?.3:1;D.gain.gain.setTargetAtTime(C*C*S*Fe*nt*(1-(s?.immersed??0)*.85),be,.07),r.getWorldDirection(F),P.crossVectors(F,H).normalize(),F.subVectors(k,r.position),D.pan.pan.setTargetAtTime(ld(P.dot(F)/Math.max(1,Ee),-.92,.92),be,.08),D.low.frequency.setTargetAtTime(Ke&&!fe?1600:3400,be,.08)}let ee=Math.abs(ge-b)>5e-4||we||Math.abs(C-(I?1:0))>.001;return ee&&n({reflections:!1}),ee}return{update:de,toggle:O,tune:L,turnVolume:V,needle:x,knobs:v,courtesy:E,lens:y,lampBody:_,get state(){return{power:I,volume:S,frequency:b,targetFrequency:M,station:U(b).station?.name??null,signal:U(b).strength,courtesy:B,ready:!!D,loaded:D?.channels.map($=>$.loaded)??[],failed:R}}}}var li,ba,Fm,ld,Lm=ct(()=>{gt();li=540,ba=1600,Fm=[{frequency:740,name:"Arroyo weather",file:"radio-weather-original.ogg"},{frequency:1200,name:"Twilight instrumental",file:"radio-music-original.ogg"}],ld=Je.clamp});async function Nm({scene:i,light:e,register:t,loader:n,windows:s,dirty:r=()=>{},visitor:a=()=>null,seatedDriver:o=()=>!1,audio:c,camera:l}){let d=(await n.loadAsync("assets/car-interactive.glb")).scene;d.name="Interactive original period hardtop";let h=i.getObjectByName("Original 1957 hardtop refined coachwork");if(h&&(h.visible=!1,s))for(let C=s.length-1;C>=0;C--){let B=s[C];for(;B&&B!==h;)B=B.parent;B===h&&s.splice(C,1)}let f=new Set,p=[],g=new Set,m=new Set,A=new Set,x=["left","right"].map((C,B)=>{let D=B===0?-1:1,R=new st;return R.name="Car "+C+" front hinge",R.position.set(12.35+D*.98,.8,-5),d.add(R),{side:C,sign:D,pivot:R,angle:0,target:0,box:new it,handle:new T(12.35+D*1.03,.963,-3.73),point:new T}}),v=0,_=0;d.updateMatrixWorld(!0);let y=[];d.traverse(C=>{C.isMesh&&y.push(C)});for(let C of y){_++,v+=(C.geometry.index?.count??C.geometry.attributes.position.count)/3;let B=C.material,D=B.name==="Coachwork curved safety glass"||B.name==="car-glass";f.has(B)||(f.add(B),D?(B.name="car-glass",B.transmission=0,B.thickness=0,B.transparent=!0,B.opacity=.22,B.depthWrite=!1,B.side=Lt,B.envMapIntensity=1.05,B.roughness=.1,B.metalness=.08,"clearcoat"in B&&(B.clearcoat=1,B.clearcoatRoughness=.1),e.patch(B,{plainMap:!0,glass:!0})):e.patch(B,{plainMap:!0})),C.castShadow=!D,C.receiveShadow=!D,D&&(C.renderOrder=3,C.userData.carGlass=!0,p.push(C)),B.name==="Coachwork headlamp optics"&&g.add(B),B.name==="Coachwork ruby prismatic tail lens"&&m.add(B),B.name==="Coachwork amber turn signal lens"&&A.add(B);let R=x.find(k=>C.name.startsWith("door-"+k.side));R&&R.pivot.attach(C)}if(x.some(C=>C.pivot.children.length<7))throw new Error("Interactive coachwork is missing isolated door finishes");i.add(d),s&&s.push(...p),d.updateMatrixWorld(!0);let E=[];for(let C of[11.592,13.108]){let B=new zs(16768432,0,15,.4,.55,2);B.name="Car sealed beam headlight",B.position.set(C,.883,-6.58),B.target.position.set(C,.25,-14.5),B.castShadow=!1,d.add(B,B.target),E.push(B),e.addLocalEmitter?.(B)}let b=!1;function M(){b=!b;for(let C of E)C.intensity=b?38:0;for(let C of g)C.emissive.set(16768940),C.emissiveIntensity=b?3:0;for(let C of m)C.emissive.set(16720912),C.emissiveIntensity=b?1.7:0;for(let C of A)C.emissive.set(16755254),C.emissiveIntensity=b?.8:0;r({shadows:!1})}function I(C,B,D,R){let k=C-D.pivot.position.x,F=B-D.pivot.position.z,P=Math.sin(R),H=Math.cos(R),U=Je.clamp(k*P+F*H,0,1.46);return(k-U*P)**2+(F-U*H)**2}for(let C of x)C.box.setFromObject(C.pivot),t({id:"car-door-"+C.side,label:()=>`${C.target?"Close":"Open"} ${C.side==="left"?"driver":"passenger"} door`,point:()=>C.pivot.localToWorld(C.point.copy(C.handle).sub(C.pivot.position)),reach:2.35,use:()=>{C.target=C.target?0:C.sign*1.12,r({shadows:!0})},bounds:()=>C.box,clearance:(B,D)=>I(B,D,C,C.angle)});t({id:"car-headlights",label:()=>`${b?"Switch off":"Switch on"} headlights`,point:new T(12.35,.883,-6.61),reach:2.6,use:M}),t({id:"car-dash-headlights",enabled:()=>o()||Math.abs(x[0].angle)>.68,label:()=>`${b?"Switch off":"Switch on"} headlights`,point:new T(11.69,1.13,-4.82),reach:1.65,use:M});let S=Pm({root:d,light:e,register:t,dirty:r,audio:c,camera:l,doors:x,accessible:()=>o()||x.some(C=>Math.abs(C.angle)>.68)});return r({shadows:!0}),{root:d,doors:x,beams:E,glazing:p,draws:_,triangles:v,radio:S,get headlights(){return b},update(C){let B=!1;for(let D of x){let R=D.target-D.angle;if(Math.abs(R)<1e-4)continue;let k=Math.min(Math.abs(R),Math.max(0,C)*1.45),F=D.angle+Math.sign(R)*k,P=a();if(P){let H=I(P.x,P.z,D,D.angle),U=I(P.x,P.z,D,F);if(U<.27*.27&&U<H-1e-8)continue}D.angle=F,D.pivot.rotation.y=F,D.pivot.updateMatrixWorld(!0),D.box.setFromObject(D.pivot),B=!0}return B&&r({reflections:!1}),S.update(C)||B}}}var Um=ct(()=>{gt();Lm()});function Om(i,e,t,n,s,r,a){let o={value:0},c={value:0},l={value:0},u=`
    varying vec2 tex;varying vec3 world,outward;
    void main(){tex=uv;vec4 p=modelMatrix*vec4(position,1.);world=p.xyz;
      outward=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*viewMatrix*p;}`,d=(g,m)=>new kt({name:g,transparent:!0,depthWrite:!1,uniforms:{clock:o,amount:c,dark:l},vertexShader:u,fragmentShader:`uniform float clock,amount,dark;varying vec2 tex;varying vec3 world,outward;
      void main(){${m}
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),h=new Le(new zt(.0061,.0047,n-s,20,8,!0),d("Clear water leaving the spout",`
    vec3 n=normalize(outward);
    float edge=1.-abs(dot(normalize(cameraPosition-world),n));
    float streak=.5+.5*sin(tex.x*25.13+1.2*sin(tex.y*10.-clock*5.3)+tex.y*7.);
    float core=(1.-smoothstep(.48,.98,tex.y))*(.5+.5*sin(tex.y*72.-clock*16.+streak*2.));
    float highlight=pow(streak,10.)*.34+.40*pow(edge,3.);
    gl_FragColor=vec4(mix(vec3(.086,.10,.096),vec3(.68,.74,.72),highlight+core*.16)*mix(1.,.35,dark),.19+highlight*.43+core*.13);`));h.position.set(e,(n+s)*.5,t),h.renderOrder=3,i.add(h);let f=new Le(new cs(1,48),d("Thin moving film over the drain",`
    vec2 p=(tex-.5)*2.;float a=atan(p.y,p.x);
    float r=length(p)*(1.+.034*sin(a*3.+clock*.46)+.026*sin(a*5.-clock*.6));
    float fade=1.-smoothstep(.42,.99,r);if(fade<.002)discard;
    float phase=r*23.-clock*5.3+.56*sin(a*3.-r*4.);
    float crest=smoothstep(.80,.995,cos(phase))*smoothstep(.13,.26,r);
    float spark=.5+.5*sin(a*4.5+1.2*sin(a*2.-clock*.5));
    float foam=exp(-r*r*170.)*(.55+.36*sin(clock*8.+r*55.));
    vec3 reflection=mix(vec3(.09,.12,.105),vec3(.64,.70,.67),crest*spark*.68+foam*.28);
    float alpha=(.036+crest*spark*.20+foam*.30)*fade*amount;
    gl_FragColor=vec4(reflection*mix(1.,.4,dark),alpha);`));f.rotation.x=-Math.PI/2,f.position.set(e,s+.009,t),f.scale.set(r,a,1),f.renderOrder=4,i.add(f);let p=0;return(g,m,A=0)=>{let x=p;return p=Je.clamp(p+g*(m?1.9:-1.25),0,1),i.visible=m||p>0,h.visible=m,o.value+=g,c.value=p,l.value=A,f.scale.set(r*(.47+.53*p),a*(.47+.53*p),1),x!==p}}var km=ct(()=>{gt()});function Gm({scene:i,light:e,register:t,dirty:n=()=>{},audio:s,disc:r,arm:a,animateRegion:o=()=>{}}){i.traverse(q=>{/After.*Rain.*sleeve/i.test(q.name)&&(q.visible=!1,q.userData.retiredDecoration=!0)});let c=new st;c.name="Mesa Records \xB7 original 1958 collection",i.add(c);let l=[],u=[],d=[],h=new at({name:"LP sleeve folded cream card",color:14207921,roughness:.91});e.patch(h,{plainMap:!0});let f=new pn,p=q=>{let Z=f.load(q,()=>n({reflections:!0}));return Z.colorSpace=dt,Z.anisotropy=4,d.push(Z),Z},g=(q,Z,ue,de)=>{let $=new Le(Z,ue);return $.name=de,$.castShadow=$.receiveShadow=!0,$.userData.householdPart=!0,q.add($),$},m=new Hn(.312,.312);for(let[q,Z]of Xn.entries()){let ue=new st;ue.name=Z.title+" \xB7 folded 12 inch illustrated sleeve";let de=new T(6.66+q*.342,.902,-10.4);ue.position.copy(de),ue.rotation.x=-.1,ue.userData={recordId:Z.id,home:de,householdPart:!0},c.add(ue),g(ue,new Ot(.316,.316,.004),h,"Card sleeve with open right edge");let $=new at({name:Z.title+" \xB7 original period illustration",map:p("assets/records/"+Z.id+"-sleeve.webp"),roughness:.91});e.patch($,{plainMap:!0});let ge=g(ue,m,$,Z.title+" \xB7 illustrated cover");ge.position.z=.0022;let fe=g(ue,m,h,"Uncoated cream sleeve back");fe.rotation.y=Math.PI,fe.position.z=-.0022;let Be=new at({name:"LP sleeve opening shadow",color:4998457,roughness:1});e.patch(Be,{plainMap:!0});let we=g(ue,new Ot(8e-4,.3,.0022),Be,"Sleeve open mouth");we.position.x=.158,u.push(ue)}let A=new at({name:"Record rack walnut rail",color:6439727,roughness:.55});e.patch(A,{plainMap:!0});for(let q of[-10.27,-10.56])g(c,new Ot(1.04,.021,.025),A,"Low record display rail").position.set(7,.75,q);for(let q of r.children)q.visible=!1;let x=new Xt({name:"Fine cut black vinyl",map:p("assets/records/vinyl-microgrooves.png"),roughness:.46,metalness:0,specularIntensity:.35});e.patch(x,{plainMap:!0}),g(r,new zt(.168,.168,.003,128),x,"Smooth 12 inch vinyl with antialiased microgrooves");let v=new at({name:"Selected LP paper label",roughness:.9});e.patch(v,{plainMap:!0});let _=g(r,new cs(.049,64),v,"Mesa Records \xB7 side label");_.rotation.x=-Math.PI/2,_.position.y=.0021;let y=v.clone();e.patch(y,{plainMap:!0});let E=g(r,new cs(.049,64),y,"Mesa Records \xB7 reverse side label");E.rotation.x=Math.PI/2,E.position.y=-.0021;let b=Xn.map(q=>[0,1].map(Z=>p(`assets/records/${q.id}-label-${Z+1}.webp`))),M=new at({name:"Tonearm polished stylus cantilever",color:13027778,metalness:.85,roughness:.23});e.patch(M,{plainMap:!0});let I=g(a,new zt(7e-4,7e-4,.01,6),M,"Visible cartridge cantilever and stylus");I.position.set(-.05,-.012,.34),I.rotation.x=.35;let S=new Bn({color:16754501,toneMapped:!1}),C=g(c,new zt(.006,.006,.005,12),S,"Amplifier amber record pilot");C.position.set(6.45,.83,-10.177),C.rotation.x=Math.PI/2;let B=0,D=0,R=!0,k=0,F=null,P=0,H=-.64;a.rotation.y=H,u[0].position.copy(To);function U(){B<0||(v.map=b[B][0],v.needsUpdate=!0,y.map=b[B][1],y.needsUpdate=!0,r.userData.record=Xn[B].id,r.userData.side=D?"B":"A")}function L(){s.setLayer("record",0);let q=Xn[B];s.setRecord?.({url:q?`assets/records/${q.id}-${D+1}.ogg`:null,playing:R&&!!q,offset:k}),C.visible=R}function O(){R=!1,L()}function V(q,Z=B){F||(O(),F={kind:q,next:Z,t:0,old:B,fromSide:D},n({shadows:!0}))}let j=q=>l.push(t({reach:2.05,...q,use(){q.use(),n({shadows:!0})}}));for(let[q,Z]of Xn.entries()){let ue=new T;j({id:"record-select-"+Z.id,label:()=>`Choose ${Z.title} \xB7 ${Z.artist}`,point:()=>u[q].getWorldPosition(ue),radius:.12,enabled:()=>!F&&B!==q,use:()=>V("choose",q)})}j({id:"record-player",label:()=>R?"Lift tonearm \xB7 pause record":`Lower tonearm \xB7 ${Xn[B]?.sides[D]??"play record"}`,point:new T(5.5,.93,-10.22),radius:.07,enabled:()=>B>=0&&!F,use(){R?O():(k>=Bl(Xn[B],D)&&(k=0),R=!0,L())}}),j({id:"record-flip",label:()=>`Turn record over \xB7 side ${D?"A":"B"} \xB7 ${Xn[B]?.sides[1-D]??""}`,point:new T(5.13,.905,-10.4),radius:.072,enabled:()=>B>=0&&!F,use:()=>V("flip")}),j({id:"record-return",label:()=>`Put ${Xn[B]?.title??"record"} back in its sleeve`,point:To.clone().add(new T(0,.025,.016)),radius:.11,enabled:()=>B>=0&&!F,use:()=>V("return")});let Q=new it(new T(4.2,.73,-10.64),new T(7.56,1.45,-10.1));return o(()=>R||F||Math.abs(a.rotation.y-H)>.001?Q:null),U(),L(),{root:c,actions:l,sleeves:u,disc:r,arm:a,get selected(){return B},get side(){return D},get playing(){return R},get elapsed(){return k},get moving(){return!!F},get title(){return B<0?null:Xn[B].title},update(q){q=Math.max(0,Math.min(q,.1));let Z=!1;if(R){let ue=s.recordTime?.();s.recordTime?ue!==null&&(k=ue):k+=q,P-=q*Math.PI*2*33.333/60,k>=Bl(Xn[B],D)&&(k=Bl(Xn[B],D),O())}if(H=R?Je.lerp(-.64,-.84,k/Bl(Xn[B],D)):0,Math.abs(a.rotation.y-H)>3e-4){let ue=Math.abs(a.rotation.y-H)>.008;a.rotation.y=Je.damp(a.rotation.y,H,7,q),Z=ue}else a.rotation.y=H;if(F){F.t=Math.min(1,F.t+q/(F.kind==="flip"?1.25:2.1));let ue=F.t;if(r.rotation.set(D*Math.PI,P,0),r.position.copy(Rl),r.visible=!0,F.kind==="flip")r.position.y+=.15*Math.sin(Math.PI*ue),r.rotation.x=Math.PI*(F.fromSide+Io(ue)),ue>=.5&&D===F.fromSide&&(D=1-D,k=0,U());else{let de=F.old>=0?u[F.old]:null,$=F.kind==="choose"?u[F.next]:null;if(de&&de.position.lerpVectors(To,de.userData.home,Io((ue-.28)/.48)),$&&$.position.lerpVectors($.userData.home,To,Io((ue-.32)/.64)),ue<.34&&de){let ge=Io(ue/.34);r.position.lerpVectors(Rl,To,ge),r.position.z+=.018*ge,r.position.y+=.17*Math.sin(Math.PI*ge),r.rotation.x=Math.PI*.5*ge,r.rotation.y=P*(1-ge)}else if(ue>.59&&$){let ge=Io((ue-.59)/.41);r.position.lerpVectors($.position,Rl,ge),r.position.z+=.018*(1-ge),r.position.y+=.17*Math.sin(Math.PI*ge),r.rotation.x=Math.PI*.5*(1-ge),r.rotation.y=0}else r.visible=!1;ue>=.5&&F.kind==="choose"&&B!==F.next&&(B=F.next,D=0,k=0,P=0,U())}ue===1&&(F.kind==="return"?(B=-1,k=0,r.visible=!1):(r.visible=!0,r.position.copy(Rl),r.rotation.set(D*Math.PI,P,0)),F=null,L(),n({shadows:!0})),Z=!0}else R&&(r.rotation.y=P);return Z}}}var Xn,Rl,To,Io,Bl,Qm=ct(()=>{gt();Xn=[{id:"arroyo",title:"Arroyo After Hours",artist:"The Mesa Trio",color:12476735,sides:["Terrace at Dusk","Last Light on Stone"],bpm:112},{id:"canyon",title:"Canyon in Blue",artist:"Lena Vale Quartet",color:3630702,sides:["Blue Wash","Window to the West"],bpm:92},{id:"moon",title:"Moon over the Mesa",artist:"Sonoran Chamber Players",color:12033103,sides:["Nocturne for the Courtyard","The Sleeping Garden"],bpm:72}],Rl=new T(5.2,.89,-10.4),To=new T(4.45,.902,-10.39),Io=i=>(i=Je.clamp(i,0,1),i*i*(3-2*i)),Bl=(i,e)=>5760/(i.bpm+(e?4:0))+3});function On(i,e,{families:t=null,name:n="Operable household part",pivot:s=e.getCenter(new T)}={}){let r=new st;r.name=n,r.position.copy(s);let a=[];i.updateMatrixWorld(!0);let o=new it;i.traverseVisible(d=>{!d.isMesh||d.isInstancedMesh||d.userData.householdPart||t&&!t.includes(d.material.name)||(d.geometry.boundingBox||d.geometry.computeBoundingBox(),o.copy(d.geometry.boundingBox).applyMatrix4(d.matrixWorld),o.intersectsBox(e)&&a.push(d))});let c=new T,l=new T,u=0;for(let d of a){let h=d.geometry,f=h.getAttribute("position"),p=h.index?.array,g=[],m=[];if(!f)continue;let A=e.clone().applyMatrix4(d.matrixWorld.clone().invert()),x=A.min,v=A.max,_=C=>{let B=f.getX(C),D=f.getY(C),R=f.getZ(C);return B>=x.x&&B<=v.x&&D>=x.y&&D<=v.y&&R>=x.z&&R<=v.z},y=p?.length??f.count;for(let C=0;C<y;C+=3){let B=p?p[C]:C,D=p?p[C+1]:C+1,R=p?p[C+2]:C+2;!_(B)||!_(D)||!_(R)||[B,D,R].every(k=>e.containsPoint(c.fromBufferAttribute(f,k).applyMatrix4(d.matrixWorld)))&&(g.push(B,D,R),m.push(C))}if(!g.length)continue;let E=new Set(m),b=[];for(let C=0;C<y;C+=3)E.has(C)||b.push(p?p[C]:C,p?p[C+1]:C+1,p?p[C+2]:C+2);let M=new ut,I=new rt().getNormalMatrix(d.matrixWorld);for(let[C,B]of Object.entries(h.attributes)){let D=new Float32Array(g.length*B.itemSize);for(let R=0;R<g.length;R++){let k=g[R];if(C==="position")c.fromBufferAttribute(B,k).applyMatrix4(d.matrixWorld).sub(s),D.set(c.toArray(),R*3);else if(C==="normal")l.fromBufferAttribute(B,k).applyMatrix3(I).normalize(),D.set(l.toArray(),R*3);else for(let F=0;F<B.itemSize;F++)D[R*B.itemSize+F]=B.getComponent(k,F)}M.setAttribute(C,new Et(D,B.itemSize))}let S=new Le(M,d.material);S.castShadow=d.castShadow,S.receiveShadow=d.receiveShadow,S.userData.householdPart=!0,S.name=n+" / "+d.material.name,r.add(S),u+=g.length/3,h.setIndex(b),h.computeBoundingBox(),h.computeBoundingSphere()}return r.userData.triangles=u,i.add(r),r}function zm({scene:i,light:e,register:t,dirty:n,audio:s,animateRegion:r=()=>{}}){let a=new st;a.name="Working household details",i.add(a);let o=[],c={},l=0,u=(z,Xe,Ce={})=>{let Pe=new at({name:z,color:Xe,roughness:.48,...Ce});return e.patch(Pe,{plainMap:!0}),Pe},d=u("Cupboard warm walnut",7754043),h=u("Cupboard maple interior",12098416),f=u("Cupboard cream stoneware",14867398,{roughness:.22}),p=u("Household black bakelite",1514264,{roughness:.25}),g=(z,Xe,Ce,Pe)=>{let ne=new Le(Xe,Ce);return ne.name=Pe,ne.castShadow=!0,ne.receiveShadow=!0,ne.userData.householdPart=!0,z.add(ne),ne},m=(z,Xe,Ce,Pe,ne)=>{let ke=g(z,new Ot(...Ce),Pe,ne);return ke.position.copy(Xe),ke},A=(z,Xe,Ce,Pe,ne,ke)=>{let Ge=g(z,new zt(Ce,Ce,Pe,32),ne,ke);return Ge.position.copy(Xe),Ge},x=(z,Xe)=>r(()=>z()?Xe:null),v=(z,Xe,Ce,Pe,ne=1.9,ke)=>t({id:z,label:Xe,point:Ce,reach:ne,use:()=>{Pe(),n({shadows:!0})},...ke?{bounds:()=>ke}:{}}),_=(z,Xe,Ce="rotation",Pe="y",ne=6)=>{o.push(ke=>{let Ge=z[Ce][Pe],Qe=Xe();return Math.abs(Ge-Qe)<4e-4?(z[Ce][Pe]=Qe,!1):(z[Ce][Pe]=Je.damp(Ge,Qe,ne,ke),!0)})},y=On(i,An(5.027,.877,10.227,5.373,.9,10.573),{name:"Spinning 33 rpm vinyl",pivot:Tt(5.2,.89,10.4)}),E=On(i,An(5.458,.881,10.192,5.551,.923,10.588),{name:"Pivoting turntable tonearm",pivot:Tt(5.53,.9,10.57)});c.recordTriangles=y.userData.triangles,c.tonearmTriangles=E.userData.triangles;let b=Gm({scene:i,light:e,register:t,dirty:n,audio:s,disc:y,arm:E,animateRegion:r});o.push(z=>b.update(z));let M=i.getObjectByName(Bt.sanitizeNodeName("Sculpted convex gray CRT screen"))??i.getObjectByName("Sculpted convex gray CRT screen"),I=M?.material,S=!1,C=new kt({name:"Monochrome 1958 moving television signal",uniforms:{time:{value:0},power:{value:0}},side:Lt,toneMapped:!1,vertexShader:"varying vec2 signalUV;void main(){vec4 w=modelMatrix*vec4(position,1.);signalUV=vec2((w.z+9.45)/-.676+.5,(w.y-1.066)/.428+.5);gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:`uniform float time,power;varying vec2 signalUV;
    void main(){vec2 uv=signalUV;vec2 p=(uv-.5)*vec2(1.5,1.);float r=length(p);
      float gray=.055+.035*(1.-r);if(power>.5){
        // A moving monochrome station test film: clock sweep, resolution rings,
        // greyscale wedge, raster lines and a gently rolling sync band.
        float circle=1.-smoothstep(.345,.35,r);float rings=.5+.3*sin(r*135.);float grid=step(.985,fract(uv.x*12.))+step(.985,fract(uv.y*9.));
        gray=mix(.23+.1*sin(floor(uv.y*9.)*2.),rings,circle);gray+=grid*.24;
        if(abs(p.y)<.042&&abs(p.x)<.41)gray=floor((p.x+.41)*9.)/7.;
        float angle=atan(p.y,p.x)-time*.34;float sweep=pow(max(0.,cos(angle)),180.)*step(r,.32);gray+=sweep*.7;
        float cloud=sin(uv.x*34.+time*.19)*sin(uv.y*59.-time*.12);gray+=cloud*.013;
        gray*=.88+.12*sin(uv.y*650.);gray-=.12*exp(-pow((fract(uv.y+time*.027)-.5)*35.,2.));
        gray*=1.-.5*pow(length((uv-.5)*1.5),3.);}
      gl_FragColor=vec4(vec3(max(gray,0.))*.18*vec3(.87,.96,.91),1.);
      #include <colorspace_fragment>
    }`});M&&(M.castShadow=!1,c.tvScreen=!0);let B=new qn(12114382,0,2.5,2);B.position.copy(Tt(7.99,1.1,9.45)),a.add(B),e.addLocalEmitter?.(B);let D=On(i,An(8.073,1.005,8.894,8.143,1.102,8.987),{name:"TV power volume dial",pivot:Tt(8.114,1.052,8.94)});v("television",()=>S?"Switch television off":"Switch television on",Tt(8.09,1.08,8.94),()=>{S=!S,M&&(M.material=S?C:I),C.uniforms.power.value=Number(S),B.intensity=S?.55:0}),_(D,()=>S?-.65:0,"rotation","x"),x(()=>S,An(7.97,.8,9.05,8.14,1.3,9.82)),o.push(()=>(C.uniforms.time.value=l,!1));function R({id:z,label:Xe,x:Ce,north:Pe,outlet:ne,bottom:ke,poolSize:Ge,handle:Qe,hbox:G}){let w=new st;w.name=Xe+" running water",a.add(w);let K=Om(w,Ce,-Pe,ne,ke,...Ge),le=On(i,G,{name:Xe+" moving tap handle",pivot:Qe});c[z+"HandleTriangles"]=le.userData.triangles;let te=!1;w.visible=!1,v(z,()=>te?"Close "+Xe.toLowerCase()+" tap":"Open "+Xe.toLowerCase()+" tap",Qe,()=>{te=!te,w.visible=!0,s.setFlow(z,te,Tt(Ce,ke,Pe))}),_(le,()=>te?Math.PI*.48:0);let Ae=An(Ce-.24,ke-.01,Pe-.29,Ce+.24,ne+.02,Pe+.29);x(()=>w.visible,Ae),o.push((xe,ie)=>(K(xe,te,ie?.night??0),!1))}R({id:"kitchen-tap",label:"Kitchen",x:-8.43,north:1.25,outlet:1.115,bottom:.754,poolSize:[.12,.17],handle:Tt(-8.69,1.01,1.42),hbox:An(-8.705,.996,1.363,-8.675,1.024,1.476)}),R({id:"bath-tap",label:"Bathroom",x:-.335,north:8.55,outlet:1.045,bottom:.746,poolSize:[.075,.12],handle:Tt(-.57,.947,8.8),hbox:An(-.622,.933,8.749,-.518,.962,8.851)});let k=On(i,An(-5.868,1.546,3.49,-5.232,2.312,3.557),{name:"Kitchen hinged upper cupboard",pivot:Tt(-5.855,1.93,3.54)}),F=On(i,An(-5.887,1.529,3.548,-5.213,2.332,3.973),{name:"Removed solid cupboard carcass",families:["wood"]});F.visible=!1,c.cupboardDoorTriangles=k.userData.triangles,c.cupboardRemovedTriangles=F.userData.triangles;let P=new st;P.name="Open shelved cupboard with stoneware",a.add(P);for(let z of[-5.865,-5.235])m(P,Tt(z,1.93,3.76),[.025,.79,.41],d,"Cupboard solid side");m(P,Tt(-5.55,1.93,3.958),[.61,.79,.025],h,"Cupboard interior back");for(let z of[1.548,1.92,2.312])m(P,Tt(-5.55,z,3.76),[.61,.024,.39],h,"Cupboard fitted shelf");for(let z=0;z<5;z++)A(P,Tt(-5.68,1.947+z*.014,3.74),.117,.009,f,"Stacked cream dinner plate");for(let z of[-5.7,-5.42])g(P,new zt(.049,.043,.095,24,1,!0),f,"Hollow stoneware cup").position.copy(Tt(z,2,3.84)),g(P,new Gs(.029,.007,6,18),f,"Cup handle").position.copy(Tt(z+.051,2.01,3.84)),A(P,Tt(z,1.958,3.84),.042,.004,f,"Cup foot");for(let z=0;z<3;z++)A(P,Tt(-5.55,1.57+z*.014,3.76),.14,.012,f,"Lower shelf serving plates");let H=!1;P.visible=!1,o.push(()=>(P.visible=H||Math.abs(k.rotation.y)>.025,!1)),v("kitchen-cupboard",()=>H?"Close crockery cupboard":"Open crockery cupboard",Tt(-5.35,1.72,3.5),()=>{H=!H},2),_(k,()=>H?-Math.PI*.62:0);function U(z){let Xe={value:-1};return z.traverse(Ce=>{if(!Ce.isMesh)return;let Pe=Ce.material.clone();e.patch(Pe,{finish:!0,bulb:Pe.name==="bulb",fixturePower:Xe}),Ce.material=Pe}),Xe}function L({id:z,label:Xe,x:Ce,north:Pe,low:ne,high:ke,bulbHeight:Ge,radius:Qe=.29}){let G=On(i,An(Ce-Qe,ne,Pe-Qe,Ce+Qe,ke,Pe+Qe),{families:["shade","bulb"],name:Xe+" switchable shade"});c[z+"Triangles"]=G.userData.triangles;let w=!0,K=U(G);v(z,()=>w?"Switch "+Xe.toLowerCase()+" off":"Switch "+Xe.toLowerCase()+" on",Tt(Ce,Math.max(ne,.85),Pe),()=>{w=!w,K.value=Number(w),e.setPracticalPower?.(Tt(Ce,Ge,Pe),Number(w))},2)}L({id:"living-lamp",label:"Living reading lamp",x:3.5,north:4.52,low:1.31,high:1.8,bulbHeight:1.5}),L({id:"primary-lamp-west",label:"West bedside lamp",x:-8.12,north:10.12,low:.66,high:1.13,bulbHeight:.84}),L({id:"primary-lamp-east",label:"East bedside lamp",x:-5.37,north:10.12,low:.66,high:1.13,bulbHeight:.84}),L({id:"child-lamp",label:"Desk lamp",x:-1.43,north:10.43,low:1.005,high:1.25,bulbHeight:1.12,radius:.17}),L({id:"den-lamp",label:"Den reading lamp",x:3.08,north:9.85,low:1.17,high:1.65,bulbHeight:1.35});let O=On(i,An(5.84,2.3,2.45,7.16,2.9,3.75),{families:["bulb"],name:"Sputnik switchable tungsten globes"});c.diningGlobeTriangles=O.userData.triangles;let V=U(O),j=!0;v("dining-light",()=>j?"Switch dining chandelier off":"Switch dining chandelier on",Tt(6.32,1.18,6.87),()=>{j=!j,V.value=Number(j),e.setPracticalPower?.(Tt(6.5,2.58,3.1),Number(j))},2);let Q=On(i,An(6.308,1.155,6.858,6.332,1.206,6.888),{name:"Existing dining wall switch toggle",pivot:Tt(6.32,1.18,6.873)});c.diningSwitchTriangles=Q.userData.triangles,_(Q,()=>j?-.45:.45,"rotation","x");let q=On(i,An(-5.355,.92,5.139,-4.886,1.026,5.261),{name:"Telephone liftable bakelite receiver",pivot:Tt(-5.12,.99,5.2)});c.telephoneTriangles=q.userData.triangles,q.scale.setScalar($t.receiverScale),q.position.copy(Tt($t.x,$t.receiverY,$t.receiverNorth));let Z=!1,ue=new T;t({id:"telephone-receiver",label:()=>Z?"Replace telephone receiver":"Lift telephone receiver",point:()=>q.getWorldPosition(ue),reach:1.9,hitTest:z=>z.intersectObject(q,!0)[0],use:()=>{Z=!Z,n({shadows:!0})}}),_(q,()=>Z?$t.receiverY+.18:$t.receiverY,"position","y"),_(q,()=>Z?-.22:0,"rotation","z");let de=On(i,An(-5.345,.643,5.175,-5.295,.948,5.225),{name:"Original telephone coiled cord"});de.visible=!1,On(i,An(-5.28,.749,5.018,-4.96,.871,5.262),{name:"Correctly proportioned telephone housing",pivot:Tt($t.x,$t.floor,$t.north)}).scale.setScalar($t.baseScale);let ge=new Pn(new zt(.0018,.0018,1,6),p,80);ge.name="Stretching telephone receiver cord",ge.userData.householdPart=!0,a.add(ge);let fe=new Ft,Be=new T(0,1,0),we=new T,ee=new T,_e=new T,be=Tt(-5.208,.8,$t.receiverNorth),ve=new T(-.102,-.02,0),Ee=-1,Ke=0;o.push(()=>{if(Math.abs(Ee-q.position.y)<1e-5&&Math.abs(Ke-q.rotation.z)<1e-5)return!1;Ee=q.position.y,Ke=q.rotation.z,q.updateMatrixWorld(!0);let z=ve.clone().applyEuler(q.rotation).add(q.position),Xe=(Ce,Pe)=>(Pe.lerpVectors(be,z,Ce),Pe.x-=.016*Math.sin(Math.PI*Ce),Pe.z+=.0065*Math.sin(Math.PI*Ce)*Math.cos(Ce*Math.PI*24),Pe.x+=.0065*Math.sin(Math.PI*Ce)*Math.sin(Ce*Math.PI*24),Pe);for(let Ce=0;Ce<80;Ce++){Xe(Ce/80,we),Xe((Ce+1)/80,ee),_e.copy(ee).sub(we);let Pe=_e.length();fe.position.copy(we).add(ee).multiplyScalar(.5),fe.quaternion.setFromUnitVectors(Be,_e.normalize()),fe.scale.set(1,Pe,1),fe.updateMatrix(),ge.setMatrixAt(Ce,fe.matrix)}return ge.instanceMatrix.needsUpdate=!0,ge.computeBoundingSphere(),!1});let Fe=On(i,An(-5.208,.869,5.022,-5.032,.905,5.198),{name:"Telephone returning rotary dial",pivot:Tt(-5.12,.89,5.11)});for(let z of Fe.children)z.visible=!1;Fe.position.copy(Tt($t.x,$t.dialY,$t.dialNorth));let nt=_m({scene:i,light:e,dial:Fe}),qe=0;t({id:"telephone-dial",label:()=>"Turn rotary telephone dial",point:Tt($t.x,$t.dialY,$t.dialNorth),reach:1.9,enabled:()=>qe===0,hitTest:z=>z.intersectObject(nt.hitTarget,!1)[0],use:()=>{qe=-Math.PI*1.65,Fe.rotation.y=qe,s.cue("dial",.55,Fe.position),n({shadows:!0})}}),o.push(z=>qe>=0?!1:(qe=Math.min(0,qe+z*3.8),Fe.rotation.y=qe,!0));let $e=On(i,An(-4.24,.779,5.1,-4.07,.802,5.14),{name:"Superseded entry matchstick keys"});return $e.visible=!1,bm({scene:i,light:e}),a.userData.householdActions=c,{root:a,stats:c,records:b,update(z,Xe){l+=Math.min(z,.1);let Ce=!1;for(let Pe of o)Ce=Pe(Math.min(z,.1),Xe)||Ce;return Ce}}}var Tt,An,Vm=ct(()=>{gt();km();Qm();ad();Tt=(i,e,t)=>new T(i,e,-t),An=(i,e,t,n,s,r)=>new it(Tt(i,e,r),Tt(n,s,t))});function KM(i,e,t){let n=[],s=[],r=[],a=[];for(let u=0;u<=14;u++){let d=u/14,h=e*Math.pow(Math.sin(Math.PI*(d*.9+.1)),.7)*Math.pow(1-d,.28);for(let f=0;f<=9;f++){let p=f/9*Math.PI*2;if(n.push(Math.cos(p)*h+Math.sin(t+d*4)*d*d*.025,d*i,Math.sin(p)*h*.7+Math.cos(t+d*5)*d*d*.016),s.push(f/9,d),r.push(t),u<14&&f<9){let g=u*10+f,m=g+9+1;a.push(g,m,g+1,g+1,m,m+1)}}}let l=new ut;return l.setAttribute("position",new ze(n,3)),l.setAttribute("uv",new ze(s,2)),l.setAttribute("flamePhase",new ze(r,1)),l.setIndex(a),l.computeVertexNormals(),l}function qM(){return new kt({name:"Dimensional turbulent hearth flames",transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uPower:{value:1}},vertexShader:`
      attribute float flamePhase;
      uniform float uTime,uPower;
      varying vec2 vFlameUV;
      varying float vPhase;
      varying vec3 vNormal,vEye;
      #include <common>
      #include <logdepthbuf_pars_vertex>
      void main(){
        vFlameUV=uv;vPhase=flamePhase;
        vec3 p=position;
        float rising=pow(uv.y,1.5);
        p.x+=sin(uTime*3.7+flamePhase+uv.y*8.)*rising*.013;
        p.z+=cos(uTime*2.9+flamePhase+uv.y*7.)*rising*.011;
        p.y*=uPower*(.94+.06*sin(uTime*3.1+flamePhase));
        vec4 mvPosition=modelViewMatrix*vec4(p,1.);
        vNormal=normalize(normalMatrix*normal);vEye=-mvPosition.xyz;
        gl_Position=projectionMatrix*mvPosition;
        #include <logdepthbuf_vertex>
      }`,fragmentShader:`
      uniform float uTime,uPower;
      varying vec2 vFlameUV;
      varying float vPhase;
      varying vec3 vNormal,vEye;
      #include <common>
      #include <logdepthbuf_pars_fragment>
      float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float noise(vec2 p){
        vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
        return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),
          mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.)),f.x),f.y);
      }
      void main(){
        #include <logdepthbuf_fragment>
        vec2 p=vec2(vFlameUV.x*5.+vPhase,vFlameUV.y*5.-uTime*2.6);
        float turbulence=.65*noise(p)+.35*noise(p*2.1+vPhase);
        float h=vFlameUV.y;
        float facing=pow(abs(dot(normalize(vNormal),normalize(vEye))),.55);
        float alpha=smoothstep(.13,.58,turbulence+(1.-h)*.28)
          *smoothstep(0.,.10,h)*(1.-smoothstep(.83,1.,h))*facing*.86*uPower;
        vec3 orange=vec3(.85,.045,.001),gold=vec3(1.6,.42,.018),core=vec3(1.9,.85,.16);
        vec3 color=mix(orange,gold,smoothstep(.25,.8,turbulence)*(1.-h*.55));
        color=mix(color,core,pow(1.-h,4.)*.68);
        gl_FragColor=vec4(color,alpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`})}function Hm({scene:i,light:e,water:t,register:n,dirty:s,audio:r,fireMaterials:a=[],detail:o}){let c=new it;o?.updateWorldMatrix(!0,!0),o?.traverse(L=>{if(!L.isMesh)return;(Array.isArray(L.material)?L.material:[L.material]).some(V=>V.name.toLowerCase().includes("hearth flame"))&&(c.expandByObject(L),L.visible=!1)}),c.isEmpty()&&c.set(new T(2.51,.39,-1.65),new T(2.64,.7,-.95));let l=c.getCenter(new T),u=c.min.y+.012,d=Math.min(.62,Math.max(.4,c.max.z-c.min.z-.08)),h=new st;h.name="Interactive dimensional hearth",h.position.set(l.x,u,l.z),i.add(h);let f=new at({name:"Hearth fired steel ash pan",color:2498845,metalness:.62,roughness:.83});e?.patch(f,{plainMap:!0});let p=[];for(let[L,O]of[[[.26,.012,d+.065],[0,-.026,0]],[[.008,.025,d+.065],[-.126,-.016,0]],[[.008,.025,d+.065],[.126,-.016,0]],[[.26,.025,.008],[0,-.016,-d*.5-.029]],[[.26,.025,.008],[0,-.016,d*.5+.029]]])p.push(new Ot(...L).translate(...O));let g=new Le(un(p),f);g.name="Folded steel hearth pan with raised ash lip";for(let L of p)L.dispose();h.add(g);let m=new at({name:"Pale granular spent hearth ash",color:7827556,roughness:1});e?.patch(m,{plainMap:!0});let A=new Pn(new Kr(.017,0),m,20);A.name="Scattered matte ash around glowing coals";let x=new Ft;for(let L=0;L<20;L++)x.position.set(Math.sin(L*2.399)*.103,-.014,(L%10/9-.5)*d),x.scale.set(1,.13,.7+L%3*.2),x.rotation.y=L*1.8,x.updateMatrix(),A.setMatrixAt(L,x.matrix);h.add(A);let v=[];for(let L=0;L<3;L++)for(let O=0;O<5;O++){let V=(L*5+O)*2.39996,j=(L===0?.09:L===1?.17:.12)+.1*(.5+.5*Math.sin(V*1.8)),Q=KM(j,(L===0?.047:.031)+.007*(O%3),V);Q.translate((L-1)*.057,0,(O/4-.5)*(d-.06)+Math.sin(V+L*.9)*.037),v.push(Q)}let _=qM(),y=new Le(un(v),_);for(let L of v)L.dispose();y.name="Fifteen independently rising flame tongues",y.renderOrder=8,h.add(y);let E=new at({name:"Charred coals with luminous amber seams",color:2101772,roughness:.98,emissive:16724485,emissiveIntensity:.85});e?.patch(E,{plainMap:!0});let b=E.onBeforeCompile;E.onBeforeCompile=(L,O)=>{b.call(E,L,O),L.vertexShader=L.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vCoalPosition;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vCoalPosition=(instanceMatrix*vec4(position,1.)).xyz;`),L.fragmentShader=L.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vCoalPosition;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        float seams=pow(.5+.5*sin(vCoalPosition.x*182.+sin(vCoalPosition.z*139.))*sin(vCoalPosition.z*153.+vCoalPosition.y*47.),6.);
        totalEmissiveRadiance*=.06+.94*seams;`)},E.customProgramCacheKey=()=>"hearth-glowing-carbon-seams";let M=new Kr(.025,1),I=new Pn(M,E,30);I.name="Three dimensional glowing hearth coals";let S=new Ft,C=new Oe;for(let L=0;L<30;L++){let O=L*2.39996;S.position.set(Math.sin(O)*.09,-.003+L%3*.005,(L%10/9-.5)*d),S.rotation.set(O,O*.7,O*.3),S.scale.set(1,.45+L%3*.12,.7),S.updateMatrix(),I.setMatrixAt(L,S.matrix),C.setRGB(.4+L%4*.18,.28+L%3*.13,.2),I.setColorAt(L,C)}h.add(I);let B=new qn(16739618,.28,1.5,2);B.name="Local steady hearth glow",B.position.set(l.x-.1,u+.13,l.z),i.add(B),e?.addLocalEmitter?.(B);let D=new it(new T(l.x-.17,u-.035,l.z-d*.5-.085),new T(l.x+.17,u+.3,l.z+d*.5+.085)),R=!0,k=1,F=1,P=0,H=!0,U=!1;if(n({id:"hearth",label:()=>R?"Extinguish hearth":"Light hearth",point:new T(l.x-.15,.63,l.z),reach:2.7,use(){R=!R,U=!0,r?.setLayer("fire",R?1:0),s({shadows:!1})}}),t?.surface){let O=new it().setFromObject(t.surface).getCenter(new T);n({id:"pool-touch",label:()=>"Touch water",point:O,reach:3.3,hitTest:ue=>t.hitTest(ue),use(ue){ue&&t.disturb(ue)}});let V=new at({name:"Weathered bronze pool switch pedestal",color:7955264,metalness:.72,roughness:.55});e?.patch(V,{plainMap:!0});let j=new st;j.name="Dry deck bronze pool light switch",j.position.set(9,0,9.62);for(let[ue,de,$]of[[[.11,.018,.11],[0,.018,0],"Bolted pool switch foot"],[[.035,.61,.035],[0,.326,0],"Slender bronze pool switch stem"],[[.07,.13,.1],[0,.69,0],"Weatherproof bronze switch box"],[[.009,.112,.086],[-.039,.69,0],"Gasketed bronze switch cover"]]){let ge=new Le(new Ot(...ue),V);ge.position.set(...de),ge.name=$,ge.castShadow=ge.receiveShadow=!0,j.add(ge)}let Q=new st;Q.name="Pool switch physical toggle",Q.position.set(-.046,.69,0),Q.rotation.z=-.4;let q=new Le(new zt(.004,.004,.032,12),V);q.rotation.z=Math.PI/2,q.position.x=-.016,Q.add(q);let Z=new Le(new Wn(.007,12,8),V);Z.position.x=-.032,Q.add(Z),j.add(Q),i.add(j),n({id:"pool-lights",label:()=>H?"Switch pool lights off":"Switch pool lights on",point:new T(8.944,.69,9.62),reach:2.5,use(){H=!H,Q.rotation.z=H?-.4:.4,t.setPoolLights(H),s({shadows:!0})}})}return r?.setLayer("fire",1),{fireBounds:D,update(L=0){let O=Math.max(0,Math.min(L,.06));if(P+=O,_.uniforms.uTime.value=P,!U)return!1;let V=R?1:0;k=Je.damp(k,V,7,O),F=Je.damp(F,V,R?5:1.4,O),Math.abs(k-V)<.001&&(k=V),Math.abs(F-V)<.001&&(F=V),_.uniforms.uPower.value=k,y.visible=k>.001,E.emissiveIntensity=F*.85,B.intensity=.28*(k*.84+F*.16);for(let j of a)j.emissiveIntensity=0;return U=k!==V||F!==V,!0}}}var Wm=ct(()=>{gt();ci()});function XM(i){i.updateWorldMatrix(!0,!0);let e=[],t=new T,n=new T,s=new T,r=new T,a=new T;i.traverse(c=>{if(!c.isMesh||!/^shell[ _](plaster|wood|glass|stone)/i.test(c.name))return;let l=c.geometry,u=l.attributes.position,d=l.index,h=d?d.count:u.count,f=(p,g)=>p.fromBufferAttribute(u,d?d.getX(g):g).applyMatrix4(c.matrixWorld);for(let p=0;p<h;p+=3)f(t,p),f(n,p+1),f(s,p+2),!(Math.min(t.y,n.y,s.y)>2.8||Math.max(t.y,n.y,s.y)<.2)&&(r.subVectors(n,t).cross(a.subVectors(s,t)).lengthSq()<15e-5||e.push(t.x,t.y,t.z,n.x,n.y,n.z,s.x,s.y,s.z))});let o=new ut;return o.setAttribute("position",new ze(e,3)),o.computeBoundingSphere(),new Le(o,new Bn({side:Lt}))}function Km(i,e){let t=[],n=[],s=XM(i),r=new T,a=new T,o=new ps,c=new ps,l=[],u=f=>typeof f.point=="function"?f.point():f.point;function d(f){if(t.some(p=>p.id===f.id))throw Error("Duplicate house control "+f.id);return t.push(f),f.bounds&&n.push(f),f}function h(f,p){f.updateMatrixWorld(),o.setFromCamera(p,f);let g=null,m=1/0;for(let A of t){if(A.enabled&&!A.enabled())continue;let x=u(A),v=A.reach??2.35,_,y,E=0;if(A.hitTest){o.far=v;let M=A.hitTest(o);if(!M||M.distance>v)continue;_=M.point,y=M.distance}else{if(!x||(r.subVectors(x,o.ray.origin),y=r.length(),y>v||r.dot(o.ray.direction)<=0)||(o.ray.closestPointToPoint(x,a),E=a.distanceTo(x),E>(A.radius??.17)+y*.045))continue;_=x}let b=y+E*3+(A.priority??0);b>=m||(c.ray.set(o.ray.origin,r.subVectors(_,o.ray.origin).normalize()),c.near=.035,c.far=y-.085,l.length=0,c.far>c.near&&c.intersectObject(s,!1,l),!l.length&&(!A.door&&(l.length=0,c.intersectObjects(e,!0,l),l.length)||(m=b,g={action:A,point:_.clone(),distance:y})))}return g}return{register:d,pick:h,actions:t,solids:n,pointOf:u}}var qm=ct(()=>{gt()});function Dl([i,e,t,n],s,r){return s>=i&&s<=t&&r>=e&&r<=n}var vs,ud,hd=ct(()=>{vs={house:[-9,-11,9,0],terrace:[-13,0,18,14],west:[-12.6,-11,-8.8,0],east:[9,-11,16,0],rear:[-11.5,-13,14.5,-11],approach:[10.1,14,17.9,22]};ud=[{name:"Driveway",bounds:vs.approach},{name:"Carport approach",bounds:vs.east},{name:"West walk",bounds:vs.west},{name:"Rear walk",bounds:vs.rear}]});function ui(i,e,t,n,s){return{id:i,name:e,bounds:t,center:n,items:s.map(([r,a,o])=>({id:r,label:a,actions:o}))}}function JM(i){let e=i.surface,t=e.geometry.attributes.position,n=e.geometry.attributes.waterEdge;e.updateWorldMatrix(!0,!1);let s=[],r=new Set,a=new T,o=0,c=0;for(let l=0;l<t.count;l++){if(n.getX(l)>.002)continue;a.fromBufferAttribute(t,l).applyMatrix4(e.matrixWorld);let u=Math.round(a.x*1e3)+","+Math.round(a.z*1e3);r.has(u)||(s.push([a.x,a.z]),r.add(u),o+=a.x,c+=a.z)}return o/=s.length,c/=s.length,s.sort((l,u)=>Math.atan2(l[1]-c,l[0]-o)-Math.atan2(u[1]-c,u[0]-o))}function Xm({camera:i,water:e}){let t=JM(e),n=new Map,s=new Set,r=new Set(Ro.map(_=>_.id));for(let _ of Ro)for(let y of _.items){s.add(y.id);for(let E of y.actions)n.set(E,y.id)}let a="arroyo-fold.visitor-guide.v1",o=new Set,c=new Set,l=null;try{let _=JSON.parse(localStorage.getItem(a)||"null");if(Array.isArray(_?.marks))for(let y of _.marks)s.has(y)&&o.add(y);if(Array.isArray(_?.visits))for(let y of _.visits)r.has(y)&&c.add(y);r.has(_?.pin)&&(l=_.pin)}catch{}function u(){try{localStorage.setItem(a,JSON.stringify({marks:[...o],visits:[...c],pin:l}))}catch{}}function d(_){let y=n.get(_);y&&!o.has(y)&&(o.add(y),u())}let h=null,f="Grounds",p=1,g=!1,m=0,A=!1,x=new T;function v(_,y){if(y.mode!=="walk"){g=A=!1;return}y.swimming?(A=!0,d("entered-water"),y.immersion()>.83&&d("submerged")):g&&!y.transitioning&&A&&(d("returned-to-deck"),A=!1),g=y.swimming;let E=y.footsteps.printCount;if(E>m&&d("wet-prints"),m=E,p+=_,p<.12)return;p=0;let{x:b,z:M}=i.position,I=y.swimming?"pool":b>=-9&&b<-3&&M<-4&&M>=-7?"entry":Ro.find(S=>{if(S.id==="pool")return!1;let[C,B,D,R]=S.bounds;return b>=C&&b<D&&M>=B&&M<R})?.id??null;h=I,f=Ro.find(S=>S.id===I)?.name??ud.find(S=>Dl(S.bounds,b,M))?.name??"Grounds",I&&!c.has(I)&&(c.add(I),u())}return{rooms:Ro,walks:ud,poolOutline:t,update:v,action:d,visited:_=>c.has(_),done:_=>o.has(_),get count(){return{done:o.size,total:s.size}},get pinned(){return l},pin(_){l=r.has(_)?_:null,u()},snapshot(){return i.getWorldDirection(x),{x:i.position.x,z:i.position.z,heading:Math.atan2(x.x,-x.z),roomId:h,locationName:f}}}}var Ro,Jm=ct(()=>{gt();hd();Ro=[ui("entry","Entry & gallery",[-9,-7,9,-5.5],[-4.6,-5.15],[["phone","Try the rotary telephone dial",["telephone-dial"]],["camera","Pick up the 35 mm camera",["rangefinder"]],["postcard","Frame and take a photograph",["photograph-taken"]]]),ui("living","Living room",[-3,-5.5,4,0],[.45,-2.76],[["glass","Slide open the glass wall",["door-living-sliding-door"]],["pit","Sit in the conversation pit",["seat-pit","seat-pit-west"]],["fire","Try the hanging fireplace",["hearth"]],["journal","Turn a page of the journal",["journal-page"]]]),ui("dining","Dining room",[4,-5.5,9,0],[6.4,-3.2],[["sputnik","Switch the Sputnik chandelier",["dining-light"]],["dining-glass","Open the dining room to the terrace",["door-dining-sliding-door"]]]),ui("kitchen","Kitchen",[-9,-4,-3,0],[-6.2,-2.15],[["fridge","Look inside the refrigerator",["kitchen-refrigerator"]],["cupboard","Open the crockery cupboard",["kitchen-cupboard"]],["kitchen-water","Run water in the sink",["kitchen-tap"]],["kitchen-glass","Try the kitchen slider",["door-kitchen-sliding-door"]]]),ui("primary","Primary bedroom",[-9,-11,-4.5,-7],[-6.65,-8.96],[["drawer","Open the bedside drawer",["primary-nightstand-drawer"]],["bedside-lamp","Try a bedside reading light",["primary-lamp-west","primary-lamp-east"]]]),ui("kid","Small bedroom",[-4.5,-11,-.8,-7],[-2.62,-8.9],[["toy","Set the wooden top spinning",["child-spinning-top"]],["desk-lamp","Switch on the desk lamp",["child-lamp"]]]),ui("bath","Bathroom",[-.8,-11,2.4,-7],[.78,-8.98],[["bath-tap","Turn the basin tap",["bath-tap"]]]),ui("den","Hi-fi den",[2.4,-11,9,-7],[5.55,-9.4],[["records","Choose a record from its sleeve",["record-select-arroyo","record-select-canyon","record-select-moon"]],["arm","Operate the tonearm",["record-player"]],["side-b","Turn the record over",["record-flip"]],["tv","Switch on the television",["television"]],["listen","Sit in a listening chair",["seat-den","seat-den-east"]]]),ui("carport","Carport",[9,-7.65,16.2,-.45],[11.87,-4.3],[["car-door","Open a door on the hardtop",["car-door-left","car-door-right"]],["wheel","Sit behind the wheel",["seat-driver"]],["am","Switch on the AM radio",["car-radio-power"]],["tuning","Tune the analog radio",["car-radio-dial","car-radio-tune-higher","car-radio-tune-lower"]],["lights","Operate the headlights",["car-dash-headlights"]]]),ui("terrace","Pool terrace",vs.terrace,[-6.4,6.1],[["chaise","Recline on a pool chaise",["seat-chaise","seat-chaise-south"]],["prints","Leave wet footprints on the terrace",["wet-prints"]],["basin-lights","Try the pool lights",["pool-lights"]]]),ui("pool","Swimming pool",[-.7,4.55,8.7,11.7],[3.9,8.5],[["swim","Go for a swim",["entered-water"]],["board","Jump from the diving board",["pool-board"]],["below","Dip beneath the surface",["submerged"]],["deck","Climb out using the ladder",["returned-to-deck"]]])]});function Nt(i,e={},t){let n=document.createElementNS(YM,i);for(let[s,r]of Object.entries(e))n.setAttribute(s,r);return t!==void 0&&(n.textContent=t),n}function ft(i,e,t){let n=document.createElement(i);return e&&(n.className=e),t!==void 0&&(n.textContent=t),n}function ys(i,e,t){let n=ft("button",i,e);return n.type="button",n.addEventListener("click",t),n}function jm([i,e,t,n],s){return Nt("rect",{x:i,y:e,width:t-i,height:n-e,class:s})}function cr(i,e){return"translate("+i+" "+e+")"}function Zm(){let i=Nt("g",{class:"visitor-arrow","aria-hidden":"true"});return i.append(Nt("circle",{r:11.2}),Nt("path",{d:jM})),i}function $m(){let i=Nt("g",{class:"waypoint-symbol","aria-hidden":"true"});return i.append(Nt("path",{d:"M0 -9 7 0 0 9 -7 0Z"}),Nt("circle",{r:1.8})),i}function eg({guide:i,closeGuide:e,onRequestOpen:t}){let n=Ym.map(w=>i.rooms.find(K=>K.id===w)),s=new Map(n.map(w=>[w.id,w])),r=new Map,a=()=>s.get(i.pinned),o=null,c=null,l=1,u="plan",d=matchMedia("(max-width: 720px), (max-height: 480px) and (max-width: 980px)"),h=ys("visitor-radar","",t);h.hidden=!0,h.setAttribute("aria-label","Open house map and exploration checklist"),h.setAttribute("aria-haspopup","dialog"),h.setAttribute("aria-controls","visitor-map-dialog");let f=Nt("svg",{viewBox:"-13 -9 26 18",class:"visitor-dial","aria-hidden":"true"}),p=Nt("g"),g=$m(),m=Zm();m.setAttribute("transform","scale(.104)");let A=Nt("g",{class:"radar-north"});A.append(Nt("circle",{r:.94}),Nt("text",{x:0,y:.32,"text-anchor":"middle"},"N")),f.append(p,g,m,A);let x=ft("span","radar-bar"),v=ft("strong","","Grounds"),_=ft("kbd","","G");x.append(v,_);let y=ft("span","radar-destination");y.hidden=!0,h.append(f,x,y);let E=ft("dialog","visitor-map-dialog");E.id="visitor-map-dialog",E.setAttribute("aria-labelledby","visitor-map-title");let b=ft("div","visitor-map-frame"),M=ft("header","map-heading"),I=ft("div","map-title-block"),S=ft("h2","","House map");S.id="visitor-map-title",I.append(ft("span","map-imprint","Arroyo Fold"),S);let C=ft("span","map-progress"),B=ys("visitor-map-close","Back to house",e);B.setAttribute("aria-label","Close map and return to house"),B.append(ft("span","","\xD7")),M.append(I,C,B);let D=ft("nav","map-mobile-tabs");D.setAttribute("aria-label","Map views");let R=ys("","Map",()=>z("plan")),k=ys("","Places",()=>{z("places"),nt.scrollIntoView({block:"start"})});D.append(R,k);let F=ft("div","visitor-map-content"),P=ft("section","visitor-map-plan");P.setAttribute("aria-label","Interactive house and grounds plan");let H=ft("div","plan-header"),U=ft("span","plan-location");H.append(ft("strong","","House & grounds"),U);let L=ft("div","floor-surface"),O=Nt("svg",{class:"visitor-floor-plan","aria-label":"North-up plan. Select a numbered place to see its discoveries.",role:"group"}),V=ft("div","plan-compass");V.setAttribute("aria-label","North is up"),V.append(ft("strong","","N"),ft("span","","\u2191"));let j=ft("div","plan-key");for(let[w,K]of[["player","You"],["pin","Waypoint"],["water","Pool"]]){let le=ft("span","key-"+w,K);j.append(le)}let Q=Nt("g"),q=Nt("g",{class:"map-site-labels","aria-hidden":"true"});for(let w of i.walks){let K=jm(w.bounds,"plan-path");Q.append(K),p.append(K.cloneNode())}let Z=[...n.filter(w=>w.id==="terrace"),...n.filter(w=>w.id!=="terrace"&&w.id!=="pool"),s.get("pool")];for(let w of Z){let K;w.id==="entry"?K=Nt("polygon",{points:"-9,-7 9,-7 9,-5.5 -3,-5.5 -3,-4 -9,-4"}):w.id==="pool"?K=Nt("polygon",{points:i.poolOutline.map(ie=>ie.join(",")).join(" ")}):K=jm(w.bounds,"");let le="floor-shape "+(w.id==="pool"?"floor-water":w.id==="terrace"?"floor-terrace":"floor-interior");K.setAttribute("class",le);let te=K.cloneNode(),Ae=Nt("g",{class:"map-room-control",tabindex:0,role:"button","data-room":w.id,"aria-label":w.name,"aria-pressed":"false"});Ae.append(K,Nt("title",{},w.name)),Q.append(Ae),p.append(te),Ae.addEventListener("click",()=>Xe(w.id,!0)),Ae.addEventListener("keydown",ie=>{(ie.key==="Enter"||ie.key===" ")&&(ie.preventDefault(),Xe(w.id,!0))});let xe=Nt("g",{class:"plan-badge","aria-hidden":"true"});xe.append(Nt("circle",{r:10.5}),Nt("text",{y:.5,"text-anchor":"middle","dominant-baseline":"middle"},dd(Ym.indexOf(w.id)))),Ae.append(xe),r.set(w.id,{hit:Ae,miniature:te,badge:xe})}for(let[w,K,le,te]of[["WEST WALK",-10.9,-5.1,-90],["DRIVEWAY",14,18.4,-90]])q.append(Nt("text",{"text-anchor":"middle",transform:cr(K,le)+" rotate("+te+")"},w));let ue=Nt("g",{class:"plan-passages","aria-hidden":"true"}),de=Nt("path",{d:"M-7.35 -7h1.1 M-3.25 -7h1.1 M.25 -7h1.1 M4.95 -7h1.1 M-9 -5.32v1.14 M-7.2 -4h1.35 M-3 -3.5v1.2 M-6.4 0h1.6 M.2 0h1.95 M4.95 0H7"}),$=Nt("path",{d:"M-2.91 -5.5H8.91 M4 -5.41V-.09"});ue.append(de,$),ue.append(Nt("path",{d:$.getAttribute("d"),class:"open-room-boundary"})),p.append(ue.cloneNode(!0));let ge=Nt("g",{class:"plan-scale","aria-hidden":"true",transform:"translate(-11.9 19.4)"});ge.append(Nt("path",{d:"M0 -.18V.18M0 0H5M5 -.18V.18"}),Nt("text",{x:2.5,y:-.5,"text-anchor":"middle"},"5 m"));let fe=$m(),Be=Zm();O.append(Q,ue,q,ge,fe,Be);let we=ys("map-mobile-waypoint","",()=>{i.pinned&&Xe(i.pinned,!0)}),ee=ft("div","compact-map-key");ee.setAttribute("aria-label","Places on the map");let _e=["Primary","Small room","Bath","Hi-fi den","Entry","Kitchen","Living","Dining","Carport","Terrace","Pool"];for(let[w,K]of n.entries()){let le=ys("","",()=>Xe(K.id,!0));le.setAttribute("aria-label","Show "+K.name+" discoveries"),le.append(ft("b","",dd(w)),ft("span","",_e[w])),ee.append(le),r.get(K.id).shortcut=le}L.append(O,V),P.append(H,L,we,ee,j);let be=ft("aside","visitor-map-checklist");be.setAttribute("aria-label","Places and exploration checklist");let ve=ft("section","map-waypoint"),Ee=ft("span","map-small-label"),Ke=ft("strong"),Fe=ft("span","map-distance");ve.append(Ee,Ke,Fe);let nt=ft("h3","room-index-head","Places"),qe=ft("div","map-room-index"),$e=ft("div","room-detail-stack");for(let[w,K]of n.entries()){let le=ys("room-index-button","",()=>Xe(K.id,!0));le.dataset.room=K.id;let te=ft("span","room-index-number",dd(w)),Ae=ft("span","room-index-name",K.name),xe=ft("span","room-index-count");le.append(te,Ae,xe),qe.append(le);let ie=ft("section","visitor-room-section");ie.dataset.room=K.id;let oe=ft("h3","detail-name",K.name),Me=ft("div","detail-summary"),W=ys("visitor-room-pin","Set waypoint",()=>{i.pin(i.pinned===K.id?null:K.id),Pe()}),ce=ft("ul","room-activities"),se=K.items.map(Ie=>{let ye=ft("li"),Se=ft("span","discovery-mark"),We=ft("span","",Ie.label),X=ft("span","map-sr");return Se.setAttribute("aria-hidden","true"),ye.append(Se,We,X),ce.append(ye),{id:Ie.id,li:ye,mark:Se,state:X}});ie.append(oe,Me,W,ce),$e.append(ie),Object.assign(r.get(K.id),{item:le,count:xe,section:ie,summary:Me,pin:W,marks:se})}be.append(ve,nt,qe,$e),F.append(P,be),b.append(M,D,F),E.append(b),document.body.append(h,E),E.addEventListener("cancel",w=>{w.preventDefault(),e()}),E.addEventListener("click",w=>{w.target===E&&e()});function z(w){u=w,E.dataset.pane=w,R.setAttribute("aria-pressed",String(w==="plan")),k.setAttribute("aria-pressed",String(w==="places")),w==="plan"&&E.open&&requestAnimationFrame(Ce)}function Xe(w,K){if(o=w,K&&d.matches&&z("places"),Pe(),K){let le=r.get(w).section;le.scrollIntoView({block:"nearest"}),d.matches&&le.querySelector("button").focus({preventScroll:!0})}}function Ce(){if(!E.open||!O.clientWidth||!O.clientHeight)return;let w=i.snapshot(),K=Math.min(-15,w.x-2.2),le=Math.min(-14.6,w.z-2.2),te=Math.max(20,w.x+2.2),Ae=Math.max(23.2,w.z+2.2);O.setAttribute("viewBox",[K,le,te-K,Ae-le].join(" ")),l=Math.min(O.clientWidth/(te-K),O.clientHeight/(Ae-le));let ie=(l>12?1.22:.91)/l,oe=a(),Me=11.5*ie,W=[[w.x,w.z,Me]];oe&&W.push([...oe.center,9.5*ie]);let ce=10.5*ie;for(let se of n){let[Ie,ye]=se.center,Se=ce*2.25,We=[[0,0],[-Se,0],[Se,0],[0,-Se],[0,Se],[-Se*.75,-Se*.75],[Se*.75,Se*.75]],[X,Y,pe,Te]=se.bounds,De=We.map(([It,sn])=>{let yn=Ie+It,di=ye+sn,Po=W.reduce((Ei,[Ea,No,Uo])=>Ei+Math.max(0,Uo+ce+.08-Math.hypot(yn-Ea,di-No)),0),Lo=Math.max(0,X-yn,yn-pe,Y-di,di-Te);return{x:yn,z:di,cost:Po*8+Lo*1.5+Math.hypot(It,sn)*.07}});De.sort((It,sn)=>It.cost-sn.cost);let ht=De[0];r.get(se.id).badge.setAttribute("transform",cr(ht.x,ht.z)+" scale("+ie+")"),W.push([ht.x,ht.z,ce])}fe.style.display=oe?"":"none",oe&&fe.setAttribute("transform",cr(...oe.center)+" scale("+ie*1.24+")"),Be.setAttribute("transform",cr(w.x,w.z)+" rotate("+w.heading*180/Math.PI+") scale("+ie*1.05+")")}function Pe(){let w=i.snapshot(),K=a(),{done:le,total:te}=i.count;C.textContent=le+" / "+te+" discoveries",U.textContent=w.locationName,Ee.textContent=K?"Waypoint":"Your location",Ke.textContent=K?K.name:w.locationName,Fe.textContent=K?Math.round(Math.hypot(K.center[0]-w.x,K.center[1]-w.z))+" m away":"",Fe.hidden=!K,ve.classList.toggle("has-pin",!!K),we.hidden=!K,K&&(we.textContent="\u25C6  "+K.name+"  \xB7  "+Fe.textContent);for(let Ae of n){let xe=r.get(Ae.id),ie=Ae.id===o,oe=Ae.id===i.pinned,Me=i.visited(Ae.id),W=Ae.items.filter(se=>i.done(se.id)).length;xe.section.hidden=!ie,xe.item.setAttribute("aria-pressed",String(ie)),xe.hit.setAttribute("aria-pressed",String(ie));for(let se of[xe.hit,xe.miniature,xe.badge,xe.item,xe.shortcut])se.classList.toggle("is-pinned",oe),se.classList.toggle("is-selected",ie);xe.count.textContent=W+"/"+Ae.items.length;let ce=(w.roomId===Ae.id?"You are here":Me?"Visited":"Unvisited")+" \xB7 "+W+" of "+Ae.items.length+" explored";xe.item.setAttribute("aria-label",Ae.name+". "+ce+(oe?". Waypoint set":"")),xe.summary.textContent=ce,xe.pin.textContent=oe?"Clear waypoint":"Set waypoint",xe.pin.setAttribute("aria-pressed",String(oe));for(let{id:se,li:Ie,mark:ye,state:Se}of xe.marks){let We=i.done(se);Ie.classList.toggle("done",We),ye.textContent=We?"\u2713":"",Se.textContent=We?" \xB7 Explored":" \xB7 Not explored"}}ne(w),Ce()}function ne(w){let K=a(),le=w.heading*180/Math.PI,te=Math.cos(w.heading),Ae=Math.sin(w.heading);p.setAttribute("transform","rotate("+-le+") "+cr(-w.x,-w.z));let xe=-Ae,ie=-te,oe=Math.min(11.7/Math.max(.001,Math.abs(xe)),7.8/Math.max(.001,Math.abs(ie)));if(A.setAttribute("transform",cr(xe*oe,ie*oe)),v.textContent!==w.locationName&&(v.textContent=w.locationName),g.style.display=K?"":"none",y.hidden=!K,K){let Me=K.center[0]-w.x,W=K.center[1]-w.z,ce=te*Me+Ae*W,se=-Ae*Me+te*W,Ie=Math.min(1,11.4/Math.max(.001,Math.abs(ce)),7.6/Math.max(.001,Math.abs(se)));g.setAttribute("transform",cr(ce*Ie,se*Ie)+" scale(.13)");let ye=K.name+" \xB7 "+Math.round(Math.hypot(Me,W))+" m";y.textContent!==ye&&(y.textContent=ye)}c={...w,pin:i.pinned}}function ke(w,K){let le=K==="walk";if(h.hidden===le&&(h.hidden=!le),!le)return;let te=i.snapshot();(!c||c.pin!==i.pinned||c.locationName!==te.locationName||Math.abs(c.x-te.x)>.025||Math.abs(c.z-te.z)>.025||Math.abs(c.heading-te.heading)>.006)&&ne(te)}new ResizeObserver(()=>{E.open&&(!d.matches||u==="plan")&&Ce()}).observe(L);function Qe(){o=i.pinned??i.snapshot().roomId??"entry",E.open||E.showModal(),document.body.classList.add("visitor-map-open"),z("plan"),Pe(),be.scrollTop=0,B.focus({preventScroll:!0})}function G(){E.open&&E.close(),document.body.classList.remove("visitor-map-open")}return Pe(),{update:ke,open:Qe,close:G,refresh:Pe,get isOpen(){return E.open}}}var YM,Ym,dd,jM,tg=ct(()=>{YM="http://www.w3.org/2000/svg",Ym=["primary","kid","bath","den","entry","kitchen","living","dining","carport","terrace","pool"],dd=i=>String(i+1).padStart(2,"0"),jM="M0 -9 7.6 8 0 4.6 -7.6 8Z"});function ng({scene:i,solids:e}){if(i.userData.denClearance)return i.userData.denClearance;let t=e.findIndex(l=>l.length===4&&l.every((u,d)=>Math.abs(u-[4.86,8.79,6.34,9.45][d])<.001));if(t<0)throw Error("Original den table collider unavailable");let n=new it(new T(4.835,-.005,-9.475),new T(6.365,.59,-8.765)),s=new T,r=new it,a=0,o=0;if(i.updateMatrixWorld(!0),i.traverse(l=>{if(!l.isMesh||l.isInstancedMesh)return;let u=/^northeast[ _](?:plain|metal|wood)$/i.test(l.name),d=/^Original[ _]New[ _]Form[ _]den[ _]journal/i.test(l.name);if(!u&&!d)return;let h=l.geometry,f=h.attributes.position,p=h.index;if(!f||(h.boundingBox||h.computeBoundingBox(),r.copy(h.boundingBox).applyMatrix4(l.matrixWorld),!r.intersectsBox(n)))return;let g=new Set,m=p?.count??f.count,A=_=>n.containsPoint(s.fromBufferAttribute(f,_).applyMatrix4(l.matrixWorld));for(let _=0;_<m;_+=3){let y=[0,1,2].map(E=>p?p.getX(_+E):_+E);if(y.every(A))for(let E of y)g.add(E)}if(!g.size)return;let x=l.matrixWorld.clone().invert(),v=new T(.12,0,0).applyMatrix4(x).sub(new T().applyMatrix4(x));for(let _ of g)f.setXYZ(_,f.getX(_)+v.x,f.getY(_)+v.y,f.getZ(_)+v.z);f.needsUpdate=!0,h.computeBoundingBox(),h.computeBoundingSphere(),a+=g.size,o++}),!a)throw Error("Original den table geometry unavailable");e[t]=[4.98,8.79,6.46,9.45];let c={shiftEast:.12,westOpening:.52,visitorDiameter:.44,vertices:a,meshes:o};return i.userData.denClearance=c,c}var ig=ct(()=>{gt()});function $M(i){let e=i.output();if(!e||i.muted)return;let{context:t,destination:n}=e,s=t.sampleRate,r=t.createBuffer(1,Math.ceil(s*.12),s),a=r.getChannelData(0),o=257,c=0;for(let u=0;u<a.length;u++){let d=u/s;o=Math.imul(1664525,o)+1013904223>>>0;let h=o/2147483648-1,f=Math.exp(-d*330)+(d>.038?.53*Math.exp(-270*(d-.038)):0);a[u]=.15*f*(.65*(h-c)+.35*Math.sin(2*Math.PI*1350*d)),c=h}let l=t.createBufferSource();l.buffer=r,l.connect(n),l.onended=()=>l.disconnect(),l.start()}function eE(i,e,t,n){let s=i.getBoundingClientRect(),r=i.width/s.width,a=i.height/s.height,o=Math.round(e.width*r),c=Math.round(e.height*a),l=Math.max(12,Math.round(Math.min(o,c)*.045)),u=Math.max(36,Math.round(l*2.3)),d=document.createElement("canvas");d.width=o+2*l,d.height=c+l+u;let h=d.getContext("2d",{alpha:!1});h.fillStyle="#f2ebdb",h.fillRect(0,0,d.width,d.height),h.drawImage(i,(e.left-s.left)*r,(e.top-s.top)*a,o,c,l,l,o,c);let f=d.height-u*.36;h.fillStyle="#37392f",h.font="italic "+Math.round(u*.37)+"px Georgia, serif",h.fillText("Arroyo Fold",l,f),h.textAlign="right",h.fillStyle="#605b4b",h.font=Math.max(9,Math.round(u*.19))+"px Georgia, serif";let p=n>.78?"Night":n>.59?"Blue hour":n>.27?"Golden hour":"Afternoon";return h.fillText(p+"  \xB7  1958",d.width-l,f),new Promise((g,m)=>d.toBlob(A=>A?g({blob:A,width:d.width,height:d.height,sequence:t}):m(Error("Image encoding failed")),"image/jpeg",.955))}async function rg({scene:i,camera:e,loader:t,light:n,register:s,dirty:r,renderer:a,audio:o,onPhotograph:c}){let l=await t.loadAsync("assets/rangefinder.glb"),u=l.scene,d=-.39;u.name="35 mm coupled rangefinder",u.position.copy(sg),u.rotation.y=d,u.traverse(L=>{L.isMesh&&(n.patch(L.material,{plainMap:!0}),L.castShadow=L.receiveShadow=!0)}),i.add(u);let h=document.querySelector("#camera-tools"),f=document.querySelector("#camera-toggle"),p=document.querySelector("#camera-shutter"),g=document.querySelector("#camera-save"),m=document.querySelector("#finder"),A=m.querySelector(".film-frame"),x=m.querySelector("output"),v=!1,_=!1,y=!1,E=!1,b=!1,M=0,I="",S=null,C=null,B=new T,D=new T(.1,-.13,-.23),R=new T,k=new Qt;function F(){let L=y&&v&&_;document.body.classList.toggle("using-finder",L),m.hidden=!L,h.hidden=!y||!v,p.hidden=!L,f.textContent=_?"Lower camera":"Viewfinder",f.title=f.textContent+" (F)",g.hidden=!I,x.value=String(M+1).padStart(2,"0")}function P(){y&&v&&(_=!_,F())}function H(){return!y||!v||!_||E||b||C?!1:(E=!0,r({reflections:!1}),$M(o),!0)}function U(){v=_=E=!1,C=null,u.position.copy(sg),u.rotation.set(0,d,0),u.visible=!0,F(),r({shadows:!0})}return s({id:"rangefinder",point:ZM,reach:1.85,radius:.108,priority:-.1,label:()=>v?"Return camera to console":"Pick up 35 mm camera",use:()=>{if(v){U();return}v=!0,u.visible=!0,C={t:0,from:u.position.clone(),rotation:u.quaternion.clone()},F(),r({shadows:!0})}}),f.addEventListener("click",P),p.addEventListener("click",H),g.addEventListener("click",()=>{document.querySelector("#announcement").textContent="Saving postcard"}),addEventListener("pagehide",L=>{!L.persisted&&I&&URL.revokeObjectURL(I)}),F(),{get held(){return v},get raised(){return v&&_&&y},get lastImage(){return S},toggleFinder:P,shutter:H,reset(){v&&U()},update(L,O){if(y!==(O==="walk")&&(y=O==="walk",F()),!C||!y)return;C.t=Math.min(1,C.t+L/.42);let V=Je.smoothstep(C.t,0,1);B.copy(D).applyQuaternion(e.quaternion).add(e.position),R.lerpVectors(C.from,B,V),R.y+=.07*Math.sin(V*Math.PI),r({reflections:!1}),u.position.copy(R),k.copy(e.quaternion),u.quaternion.slerpQuaternions(C.rotation,k,V),V===1&&(C=null,u.visible=!1,_=!0,F(),r({shadows:!0}))},afterRender(L){if(!E||(E=!1,!y||!_))return;b=!0;let O=A.getBoundingClientRect(),V=++M,j=eE(a.domElement,O,V,L);m.animate?.([{opacity:.08},{opacity:1}],{duration:160,easing:"ease-out"}),j.then(Q=>{let q=I;I=URL.createObjectURL(Q.blob),g.href=I,g.download="Arroyo Fold - "+String(V).padStart(2,"0")+".jpg",S={width:Q.width,height:Q.height,sequence:V},c(),q&&URL.revokeObjectURL(q),F(),document.querySelector("#announcement").textContent="Exposure "+V+" ready. Save postcard."}).catch(()=>{document.querySelector("#announcement").textContent="The photograph could not be saved. Try the shutter again."}).finally(()=>{b=!1})}}}var sg,ZM,ag=ct(()=>{gt();sg=new T(-4.65,.732,-5.14),ZM=new T(-4.65,.782,-5.14)});function nE(i,e,t){let n=i.geometry,s=new Map,r=[],a=[];for(let h of e)s.has(h)||(s.set(h,r.length),r.push(h)),a.push(s.get(h));let o=new ut;for(let[h,f]of Object.entries(n.attributes)){let p=f.itemSize,g=new Float32Array(r.length*p);for(let m=0;m<r.length;m++)for(let A=0;A<p;A++)g[m*p+A]=f.getComponent(r[m],A);o.setAttribute(h,new Et(g,p))}o.setIndex(a),o.applyMatrix4(i.matrixWorld);let c=o.attributes.position,l=[],u=[];for(let h=0;h<c.count;h++){let f=c.getX(h),p=c.getY(h),g=Je.clamp((2.4-p)/2.23,0,1),m=g*g*(1.4-.4*g),A=(f-t.left)/(t.right-t.left),x=.85+.15*Math.cos(A*6.28+g*1.2);l.push(.018*m*A,.026*m*m,-.115*m*x),u.push(.015*m*Math.sin(A*2.4),.009*m*A,-.035*m*Math.sin(A*4.4+g*1.8))}o.morphTargetsRelative=!0,o.morphAttributes.position=[new ze(l,3),new ze(u,3)],o.computeBoundingBox(),o.computeBoundingSphere();let d=new Le(o,i.material);return d.name=t.door+" \u2014 linen fold",d.castShadow=i.castShadow,d.receiveShadow=i.receiveShadow,d}function og({scene:i,core:e,details:t,animateRegion:n}){let s=tE.map(o=>({...o,parts:[],drive:0,box:new it(new T(o.left-.04,.04,-.5),new T(o.right+.05,2.45,-.04))})),r=new T;for(let o of[e,t])o.updateWorldMatrix(!0,!0),o.traverse(c=>{if(!c.isMesh||!/(^linen$|botanical curtain print)/i.test(c.material?.name??""))return;let l=c.geometry,u=l.attributes.position;l.boundingBox||l.computeBoundingBox();let d=l.boundingBox.clone().applyMatrix4(c.matrixWorld);if(!s.some(m=>m.box.intersectsBox(d)))return;let h=new Int8Array(u.count).fill(-1);for(let m=0;m<u.count;m++)r.fromBufferAttribute(u,m).applyMatrix4(c.matrixWorld),!(r.z<-.32||r.z>-.08||r.y<.06||r.y>2.405)&&(h[m]=s.findIndex(A=>r.x>=A.left&&r.x<=A.right));let f=[],p=s.map(()=>[]),g=l.index?.array;for(let m=0;m<(g?.length??u.count);m+=3){let A=g?g[m]:m,x=g?g[m+1]:m+1,v=g?g[m+2]:m+2,_=h[A];(_>=0&&_===h[x]&&_===h[v]?p[_]:f).push(A,x,v)}if(!p.every(m=>!m.length)){for(let m=0;m<s.length;m++){if(!p[m].length)continue;let A=nE(c,p[m],s[m]);i.add(A),s[m].parts.push(A)}f.length?l.setIndex(f):c.visible=!1}});for(let o of s)n(()=>o.drive>.002?o.box:null);let a=0;return{groups:s,update(o,c){a+=o;for(let l of s){let u=c.find(p=>p.group.userData.label===l.door)?.open??0;l.drive=Je.damp(l.drive,u,1.4,o),!u&&l.drive<.001&&(l.drive=0);let d=a+l.phase,h=l.drive*(.48+.26*Math.sin(d*.91)+.16*Math.sin(d*1.61+2)),f=l.drive*(.48*Math.sin(d*1.07+.6)+.3*Math.sin(d*.64));for(let p of l.parts)p.morphTargetInfluences[0]=h,p.morphTargetInfluences[1]=f}}}}var tE,cg=ct(()=>{gt();tE=[{left:-2.75,right:-2.21,door:"Living sliding door",phase:1.6},{left:3.55,right:3.97,door:"Living sliding door",phase:.2},{left:8.38,right:8.86,door:"Dining sliding door",phase:3.1}]});function lg(){let i,e,t,n,s=!1,r=!1,a=new Map,o=new Map,c=new Map,l=new Map,u=new Set,d=0,h=0,f=null,p=0,g=new Map,m=null;async function A(){m=null;let P=f,H=a.get("record"),U=++p;if(!P||!H||!i||(o.set("record",0),!P.playing))return;let L=g.get(P.url);L||(L=fetch(P.url).then(O=>{if(!O.ok)throw Error("Record side unavailable");return O.arrayBuffer()}).then(O=>i.decodeAudioData(O)),g.set(P.url,L));try{let O=await L;if(U!==p)return;let V=i.createBufferSource();V.buffer=O;let j=va(P.offset||0,0,Math.max(0,O.duration-.001)),Q=i.currentTime;V.connect(H.filter),V.start(Q,j),m={start:Q,offset:j},H.source.stop(),H.source.disconnect(),H.source=V,o.set("record",1)}catch{g.delete(P.url)}}function x(P){f=P,A()}function v(P){return c.has(P)||c.set(P,fetch("assets/effects/"+P+".ogg").then(H=>{if(!H.ok)throw Error("Missing foley");return H.arrayBuffer()}).then(H=>i.decodeAudioData(H)).catch(()=>null)),c.get(P)}function _(P){let H=P.position?C.distanceTo(P.position):0,U=1-Yi(.5,7,H),L=P.position?va((S.x*(P.position.x-C.x)+S.z*(P.position.z-C.z))/Math.max(1,H),-.9,.9):0;P.gain.gain.setTargetAtTime(P.volume*U*(1-d*.7),i.currentTime,.045),P.pan.pan.setTargetAtTime(L,i.currentTime,.045),P.filter.frequency.setTargetAtTime(Je.lerp(13e3,580,d),i.currentTime,.08)}function y(P,H,U,L=!1){let O=i.createBufferSource(),V=i.createBiquadFilter(),j=i.createGain(),Q=i.createStereoPanner();O.buffer=P,O.loop=L,V.type="lowpass",j.gain.value=0,O.connect(V),V.connect(j),j.connect(Q),Q.connect(e);let q={source:O,filter:V,gain:j,pan:Q,position:U?.clone()??null,volume:H};return O.onended=()=>{O.disconnect(),V.disconnect(),j.disconnect(),Q.disconnect(),u.delete(q)},_(q),O.start(),q}function E(P,H=.42,U=null){if(!i||i.state!=="running"||s)return;let L=i.currentTime;v(P).then(O=>{!O||s||i.state!=="running"||i.currentTime-L>.4||u.add(y(O,H,U))})}function b(P){if(!P.node)return;let H=P.node;P.node=null,H.gain.gain.setTargetAtTime(0,i.currentTime,.012),H.source.stop(i.currentTime+.05)}function M(P){if(!i||i.state!=="running"||s||!P.on||P.node)return;let H=P.version;v(P.sample).then(U=>{!U||P.version!==H||!P.on||P.node||s||i.state!=="running"||(P.node=y(U,P.volume,P.position,!0))})}function I(P,H,U){let L=l.get(P);L||(L={sample:P==="kitchen-tap"?"faucet-kitchen":"faucet-bath",volume:P==="kitchen-tap"?.55:.42,position:U.clone(),on:!1,version:0,node:null},l.set(P,L)),L.position.copy(U),L.on=!!H,L.version++,L.on?M(L):b(L)}let S=new T,C=new T,B=new T,D=new T(0,1,0);async function R(){if(!i){let P=window.AudioContext||window.webkitAudioContext;if(!P)return r=!0,!1;i=new P,e=i.createGain(),e.gain.value=s?0:.65,e.connect(i.destination),n=lm({context:i,output:e,isMuted:()=>s}),t=Promise.all(iE.map(async H=>{try{let U=await fetch(`./assets/audio/${H}.ogg`);if(!U.ok)throw new Error("Audio unavailable");let L=await i.decodeAudioData(await U.arrayBuffer()),O=i.createBufferSource();O.buffer=L,O.loop=!0;let V=i.createGain();V.gain.value=0;let j=i.createBiquadFilter();j.type="lowpass",j.frequency.value=16e3;let Q=i.createStereoPanner();O.connect(j),j.connect(V),V.connect(Q),Q.connect(e),O.start(0,H==="birds"?0:Math.random()*Math.min(6,L.duration/2)),a.set(H,{source:O,gain:V,filter:j,pan:Q}),H==="record"&&f&&A()}catch{r=!0}}))}try{await i.resume(),await t;for(let P of l.values())M(P);return!r}catch{return!1}}function k(P){if(s=!!P,i&&e&&e.gain.setTargetAtTime(s?0:.65,i.currentTime,.08),!s)for(let H of l.values())M(H);return s}function F(P,H=.4,U=[]){if(!i||i.state!=="running")return;P.getWorldPosition(C),P.getWorldDirection(B);let L=C.x,O=-C.z,V=Yi(-.6,.8,O)*(1-Yi(10.8,11.6,O))*Yi(-9.7,-8.8,L)*(1-Yi(8.8,9.6,L)),j=Yi(.63,.97,H);h=0;for(let de of U){let $=Math.hypot(L-de.basePosition.x,C.z-de.basePosition.z);h=Math.max(h,de.open*(1-Yi(.6,9.5,$)))}let Q=V*(1-h*.9),q=1-Q*.91;S.crossVectors(B,D).normalize();let Z=(de,$,ge,fe)=>1-Yi(ge,fe,Math.hypot(L-de,O-$)),ue={wind:.44*q*(1-j*.38),birds:.6*q*(1-j),night:1*q*j,pool:.8*Z(.4,-7.8,2,18)*(1-Q*.86),fire:1.45*Z(2.78,1.3,1.5,10)*(O>5.8?.28:1),record:.55*Z(5.6,10.4,1.5,21)*(1-.68*(1-Yi(4.8,7.5,O)))*(.25+.75*V+.68*h*(1-V))};for(let[de,$]of a){$.gain.gain.setTargetAtTime(ue[de]*(o.get(de)??1),i.currentTime,.18);let ge=["wind","birds","night","pool"].includes(de);$.filter.frequency.setTargetAtTime(Je.lerp(ge?14e3-Q*12e3:13e3-(1-V)*(1-h*.87)*10500,580,d),i.currentTime,.5);let fe=de==="pool"?[.4,-7.8]:de==="fire"?[2.78,1.3]:de==="record"?[5.6,10.4]:null,Be=fe?va((S.x*(fe[0]-L)+S.z*(-fe[1]-C.z))/Math.max(2,Math.hypot(fe[0]-L,fe[1]-O)),-.8,.8):0;$.pan.pan.setTargetAtTime(Be,i.currentTime,.25)}for(let de of l.values())de.node&&_(de.node);for(let de of u)_(de)}return{start:R,update:F,step:P=>n?.(P),setMuted:k,cue:E,setFlow:I,setRecord:x,recordTime:()=>m?m.offset+i.currentTime-m.start:null,output:()=>i&&e?{context:i,destination:e}:null,get immersed(){return d},get aperture(){return h},setImmersion(P){d=va(P,0,1)},setLayer(P,H){o.set(P,va(H,0,1))},get muted(){return s},get available(){return!r}}}var iE,va,Yi,ug=ct(()=>{gt();id();iE=["wind","birds","pool","fire","record","night"],va=(i,e,t)=>Math.min(t,Math.max(e,i)),Yi=(i,e,t)=>{let n=va((t-i)/(e-i),0,1);return n*n*(3-2*n)}});function hg(i,e){let t=e.cellMeters,n=e.toleranceMeters**2,s=new Map,r=(h,f,p)=>`${h}/${f}/${p}`;for(let h of e.triangles){let f=[0,1,2].map(g=>h.v.reduce((m,A)=>m+A[g],0)/3),p=r(...f.map(g=>Math.floor(g/t)));s.has(p)||s.set(p,[]),s.get(p).push(h)}let a=Object.fromEntries(Object.entries(e.matrices).map(([h,f])=>[h,new Re().set(...f.flat())])),o=Object.fromEntries(Object.entries(a).map(([h,f])=>[h,new rt().getNormalMatrix(f)])),c={removedShellTriangles:0,movedChairTriangles:0,lampTriangles:0,matchedTriangles:0,unmatchedWorkstationTriangles:0,counts:{}},l=new T,u=new T;i.updateMatrixWorld(!0);function d(h){let f=[0,1,2].map(g=>h.reduce((m,A)=>m+A[g],0)/3),p=f.map(g=>Math.floor(g/t));for(let g=-1;g<=1;g++)for(let m=-1;m<=1;m++)for(let A=-1;A<=1;A++)for(let x of s.get(r(p[0]+g,p[1]+m,p[2]+A))||[])if(h.every(v=>x.v.some(_=>v.reduce((y,E,b)=>y+(E-_[b])**2,0)<n)))return x.action;return null}if(i.traverse(h=>{if(!h.isMesh)return;let f=h.geometry,p=f.getAttribute("position"),g=f.index?.array,m=[],A=new Map,x=new rt().getNormalMatrix(h.matrixWorld),v=x.clone().invert(),_=h.matrixWorld.clone().invert();for(let y=0;y<(g?.length??p.count);y+=3){let E=[g?g[y]:y,g?g[y+1]:y+1,g?g[y+2]:y+2],b=E.map(D=>(l.fromBufferAttribute(p,D).applyMatrix4(h.matrixWorld),[l.x,-l.z,l.y])),M=b.reduce((D,R)=>D+R[0],0)/3,I=b.reduce((D,R)=>D+R[1],0)/3,S=b.reduce((D,R)=>D+R[2],0)/3,C=M>-2.05&&M<-.99&&I>9.1&&I<10.75&&S<1.4,B=C?d(b):null;if(B){if(c.matchedTriangles++,c.counts[B]=(c.counts[B]||0)+1,B==="remove"){c.removedShellTriangles++;continue}B==="chair"?c.movedChairTriangles++:c.lampTriangles++;for(let D of E){if(A.has(D)&&A.get(D)!==B)throw new Error("Child workstation transform crosses source objects");A.set(D,B)}}else C&&c.unmatchedWorkstationTriangles++;m.push(...E)}if(A.size){for(let b of["position","normal"]){let M=f.getAttribute(b);if(!M)continue;let I=new Float32Array(M.count*M.itemSize);for(let S=0;S<M.count;S++)for(let C=0;C<M.itemSize;C++)I[S*M.itemSize+C]=M.getComponent(S,C);f.setAttribute(b,new Et(I,M.itemSize))}let y=f.getAttribute("position"),E=f.getAttribute("normal");for(let[b,M]of A)l.fromBufferAttribute(y,b).applyMatrix4(h.matrixWorld),l.set(l.x,-l.z,l.y).applyMatrix4(a[M]),l.set(l.x,l.z,-l.y).applyMatrix4(_),y.setXYZ(b,l.x,l.y,l.z),E&&(u.fromBufferAttribute(E,b).applyMatrix3(x),u.set(u.x,-u.z,u.y).applyMatrix3(o[M]),u.set(u.x,u.z,-u.y).applyMatrix3(v).normalize(),E.setXYZ(b,u.x,u.y,u.z));y.needsUpdate=!0,E&&(E.needsUpdate=!0)}m.length!==(g?.length??p.count)&&f.setIndex(m),(A.size||m.length!==(g?.length??p.count))&&(f.computeBoundingBox(),f.computeBoundingSphere())}),c.removedShellTriangles<350||c.movedChairTriangles<240||c.lampTriangles<1100)throw new Error("Child workstation source geometry did not match the delivered core");return c}var dg=ct(()=>{gt()});function rE(i,e,t,n){return!!(i==="linen"&&(n>-.08&&n<.88&&(e>-2.76&&e<-1.64&&t>.91&&t<4.36||e>-1.99&&e<1.73&&t>3.4&&t<4.38||e>-2.01&&e<1.01&&t>.84&&t<1.8)||n>.21&&n<.96&&(e>-7.82&&e<-5.68&&t>8.2&&t<10.5||e>-4.31&&e<-2.98&&t>8.2&&t<10.46)||n>.32&&n<1.15&&t>8.22&&t<9.2&&(e>3.57&&e<4.43||e>6.77&&e<7.63)||e>.69&&e<1.23&&t>7.09&&t<7.23&&n>.73&&n<1.29||e>-8.1&&e<-7.99&&t>1.87&&t<2.22&&n>.52&&n<.93)||["plain","linen"].includes(i)&&n>.38&&n<.91&&sE.some(([s,r])=>Math.abs(e-s)<.32&&Math.abs(t-r)<.32)||i==="plain"&&e>-1.59&&e<-1.27&&t>9.68&&t<9.92&&n>.765&&n<.778||i==="plain"&&e>5.34&&e<7.66&&t>2.39&&t<3.81&&n>.702&&n<.796||i==="plain"&&e>.741&&e<1.179&&t>7.117&&t<7.133&&n>.819&&n<.881||i==="metal"&&e>.62&&e<1.35&&t>7.07&&t<7.2&&n>1.2&&n<1.3||["plain","metal"].includes(i)&&e>-.46&&e<2.14&&t>9.75&&t<10.76&&n>-.02&&n<.71)}function aE(i){let e=0,t=0,n=new it;i.updateMatrixWorld(!0);let s=new T;return i.traverse(r=>{if(!r.isMesh||!["linen","plain","metal"].includes(r.material.name))return;let a=r.geometry,o=a.getAttribute("position"),c=a.index?.array,l=[];for(let u=0;u<(c?.length??o.count);u+=3){let d=[c?c[u]:u,c?c[u+1]:u+1,c?c[u+2]:u+2];s.set(0,0,0);for(let h of d)s.x+=o.getX(h)/3,s.y+=o.getY(h)/3,s.z+=o.getZ(h)/3;if(s.applyMatrix4(r.matrixWorld),rE(r.material.name,s.x,-s.z,s.y)){e++,n.expandByPoint(s),s.x>-.75&&s.x<.05&&-s.z>7.95&&-s.z<9.15&&t++;continue}l.push(...d)}l.length!==(c?.length??o.count)&&(a.setIndex(l),a.computeBoundingSphere())}),{removedTriangles:e,removedNearVanity:t,maskBounds:{min:n.min.toArray(),max:n.max.toArray()}}}async function fg({scene:i,core:e,loader:t,light:n}){let[s,r]=await Promise.all([t.loadAsync("assets/interior-craft.glb"),fetch("assets/child-workstation.json").then(d=>{if(!d.ok)throw new Error("Child workstation geometry "+d.status);return d.json()})]),a=hg(e,r),o=aE(e),c=new st;c.name="Tailored interior furniture";let l=new Map;s.scene.updateMatrixWorld(!0),s.scene.traverse(d=>{if(!d.isMesh)return;let h=d.material;l.has(h)||l.set(h,[]);let f=d.geometry.clone();for(let p of["position","normal","uv"]){let g=f.getAttribute(p);if(!g)continue;let m=new Float32Array(g.count*g.itemSize);for(let A=0;A<g.count;A++)for(let x=0;x<g.itemSize;x++)m[A*g.itemSize+x]=g.getComponent(A,x);f.setAttribute(p,new Et(m,g.itemSize))}f.applyMatrix4(d.matrixWorld);for(let p of Object.keys(f.attributes))["position","normal","uv"].includes(p)||f.deleteAttribute(p);f.getAttribute("uv")||f.setAttribute("uv",new Et(new Float32Array(f.getAttribute("position").count*2),2)),l.get(h).push(f)});let u=0;for(let[d,h]of l){if(h.length>1&&h.some(m=>m.index))for(let m of h)m.index||m.setIndex(Array.from({length:m.attributes.position.count},(A,x)=>x));let f=h.length===1?h[0]:un(h,!1);if(h.length>1)for(let m of h)m.dispose();if(!f)throw new Error("Interior furniture geometry merge failed");/wool|cotton/.test(d.name)&&(d.roughness=.94,d.normalScale?.setScalar(.42),"sheen"in d&&(d.sheen=.24,d.sheenRoughness=.85));for(let m of[d.map,d.normalMap,d.roughnessMap])m&&(m.wrapS=m.wrapT=an,m.anisotropy=8);n.patch(d,{plainMap:!0});let g=new Le(f,d);g.name=d.name,g.castShadow=!/porcelain enamel/.test(d.name),g.receiveShadow=!0,c.add(g),u+=(f.index?.count??f.attributes.position.count)/3}return i.add(c),{root:c,...o,workstation:a,triangles:u,draws:l.size}}var sE,pg=ct(()=>{gt();ci();dg();sE=[[5.83,2.2],[6.85,2.2],[5.83,4],[6.85,4],[5.06,3.1],[7.91,3.1],[7.85,7.87]]});function oE(){let i=new st;i.name="Fabricated stainless pool ladder";let e=new at({name:"Pool ladder polished 316 stainless",color:"#d3d9d7",metalness:1,roughness:.19}),t=new at({name:"Pool ladder satin stainless fittings",color:"#aab5b4",metalness:1,roughness:.29}),n=new at({name:"Pool ladder charcoal non-slip rubber",color:"#262c2c",roughness:.84}),s=new T(7.79925,0,9.32656),r=new T(.605,0,.796).normalize(),a=new T(r.z,0,-r.x),o=(h,f,p)=>s.clone().addScaledVector(a,h).addScaledVector(r,p).setY(f),c=(h,f,p,g)=>{let m=new Le(f,p);return m.name=h,g&&m.position.copy(g),m.castShadow=m.receiveShadow=!0,i.add(m),m};function l(h,f,p,g,m,A=new T(0,1,0),x=32){let v=c(h,new zt(f,f,p,x),g,m);return v.quaternion.setFromUnitVectors(new T(0,1,0),A),v}function u(h,f,p,g){let m=c(h,new Ot(...f),p,g);return m.rotation.y=Math.atan2(-a.z,a.x),m}for(let h of[-.28,.28]){let f=new Hr;f.add(new Us(o(h,-.045,.48),o(h,.62,.48)));let p=new ls(0,0,.4,.4,0,Math.PI,!1,0),g=[];for(let m=0;m<=64;m++){let A=p.getPoint(m/64);g.push(o(h,.62+A.y,.08+A.x))}f.add(new gi(g,!1,"centripetal")),f.add(new Us(o(h,.62,-.32),o(h,-1.08,-.32))),c("Continuous 38 mm bent stainless handrail",new xi(f,192,.019,16,!1),e),l("Deck anchor gasket",.066,.006,n,o(h,.015,.48)),l("Anchor cover flange",.064,.014,t,o(h,.024,.48)),l("Socket collar",.027,.045,e,o(h,.047,.48));for(let m of[Math.PI/2,Math.PI*7/6,Math.PI*11/6]){let A=o(h+Math.cos(m)*.047,.035,.48+Math.sin(m)*.047);l("Countersunk anchor screw",.0045,.003,e,A,void 0,12);let x=u("Anchor screw slot",[.006,7e-4,.0012],n,A.clone().add(new T(0,.0016,0)));x.rotation.y+=m}l("Underwater wall bumper stem",.012,.055,t,o(h,-1.04,-.285),r),l("Rubber shell bumper",.037,.025,n,o(h,-1.04,-.245),r),l("Sealed rail end cap",.019,.008,e,o(h,-1.081,-.32))}for(let h of[-.34,-.62,-.9]){u("Formed stainless tread with folded lips",[.57,.034,.116],t,o(0,h,-.32)),u("Recessed non-slip step insert",[.473,.009,.09],n,o(0,h+.022,-.32));for(let f=-8;f<=8;f++)u("Moulded grip rib",[.007,.0035,.082],n,o(f*.0255,h+.028,-.32));for(let f of[-.28,.28])l("Rail-to-tread saddle clamp",.023,.056,t,o(f,h,-.32)),l("Step attachment hex bolt",.007,.01,e,o(f,h,-.345),r,6)}let d=new Map;for(let h of[...i.children])h.updateMatrix(),h.geometry.applyMatrix4(h.matrix),d.has(h.material)||d.set(h.material,[]),d.get(h.material).push(h.geometry),i.remove(h);for(let[h,f]of d){let p=c(h.name,un(f),h);p.castShadow=p.receiveShadow=!0;for(let g of f)g.dispose()}return i.userData.fabrication={railDiameter:.038,railSpacing:.56,rungSpacing:.28,deckAnchors:2,steps:3},i}function Ag({scene:i,light:e}){let t=0;i.traverse(s=>{if(!s.isMesh||!/^landscape[ _]metal/.test(s.name))return;let r=s.geometry,a=r.getAttribute("position"),o=r.index,c=[],l=new T;s.updateWorldMatrix(!0,!1);let u=h=>(l.fromBufferAttribute(a,h).applyMatrix4(s.matrixWorld),l.x>7.59&&l.x<8.21&&l.y>-.89&&l.y<.73&&l.z>8.84&&l.z<10.56),d=o?o.count:a.count;for(let h=0;h<d;h+=3){let f=[0,1,2].map(p=>o?o.getX(h+p):h+p);f.every(u)?t++:c.push(...f)}c.length!==d&&(s.geometry=r.clone(),s.geometry.setIndex(c),s.geometry.computeBoundingSphere())});let n=oE();if(e){let s=new Set;n.traverse(r=>{!r.material||s.has(r.material)||(s.add(r.material),e.patch(r.material,{plainMap:!0}))})}return n.userData.replacedTriangles=t,i.add(n),n}var mg=ct(()=>{gt();ci()});var lr,gg=ct(()=>{gt();lr=class i extends Le{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let n=this,s=t.color!==void 0?new Oe(t.color):new Oe(8355711),r=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,c=t.shader||i.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,u=new Sn,d=new T,h=new T,f=new T,p=new Re,g=new T(0,0,-1),m=new mt,A=new T,x=new T,v=new mt,_=new Re,y=new qt(r,a,{samples:l,type:wt}),E=new kt({name:c.name!==void 0?c.name:"unspecified",uniforms:pl.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});E.uniforms.tDiffuse.value=y.texture,E.uniforms.color.value=s,E.uniforms.textureMatrix.value=_,this.material=E,this.onBeforeRender=function(b,M,I){let S=this.getReflectionCamera(I);if(h.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(I.matrixWorld),p.extractRotation(n.matrixWorld),d.set(0,0,1),d.applyMatrix4(p),A.subVectors(h,f),A.dot(d)>0===!0&&this.forceUpdate===!1)return;A.reflect(d).negate(),A.add(h),p.extractRotation(I.matrixWorld),g.set(0,0,-1),g.applyMatrix4(p),g.add(f),x.subVectors(h,g),x.reflect(d).negate(),x.add(h),S.position.copy(A),S.up.set(0,1,0),S.up.applyMatrix4(p),S.up.reflect(d),S.lookAt(x),S.far=I.far,S.updateMatrixWorld(),S.projectionMatrix.copy(I.projectionMatrix),S.projectionMatrix.elements[8]*=-1,S.projectionMatrix.elements[12]*=-1,_.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),_.multiply(S.projectionMatrix),_.multiply(S.matrixWorldInverse),_.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(d,h),u.applyMatrix4(S.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let B=S.projectionMatrix;S.isOrthographicCamera?(v.x=(Math.sign(m.x)+B.elements[8])/B.elements[0],v.y=(Math.sign(m.y)+B.elements[9])/B.elements[5],v.z=-I.far,v.w=1):(v.x=(Math.sign(m.x)+B.elements[8])/B.elements[0],v.y=(Math.sign(m.y)+B.elements[9])/B.elements[5],v.z=-1,v.w=(1+B.elements[10])/B.elements[14]),m.multiplyScalar(2/m.dot(v)),B.elements[2]=m.x,B.elements[6]=m.y,S.isOrthographicCamera?(B.elements[10]=m.z-o,B.elements[14]=m.w-1):(B.elements[10]=m.z+1-o,B.elements[14]=m.w),n.visible=!1;let D=b.getRenderTarget(),R=b.xr.enabled,k=b.shadowMap.autoUpdate;b.xr.enabled=!1,b.shadowMap.autoUpdate=!1,b.setRenderTarget(y),b.state.buffers.depth.setMask(!0),b.autoClear===!1&&b.clear(),b.render(M,S),b.xr.enabled=R,b.shadowMap.autoUpdate=k,b.setRenderTarget(D);let F=I.viewport;F!==void 0&&b.state.viewport(F),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return y},this.dispose=function(){y.dispose(),n.material.dispose()},this.getReflectionCamera=function(b){let M=this._reflectionCameras.get(b);return M===void 0&&(M=b.clone(),this._reflectionCameras.set(b,M)),M}}};lr.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`}});function uE(){let t=new Uint8Array(65536),n=[];for(let r=0;r<10;r++)for(let a=0;a<10;a++){let o=c=>{let l=Math.sin(c*127.1+311.7)*43758.5453;return l-Math.floor(l)};n.push([a+.2+.6*o(a+r*10),r+.2+.6*o(a+r*10+201)])}for(let r=0;r<256;r++)for(let a=0;a<256;a++){let o=a/256*10,c=r/256*10,l=o+.24*Math.sin(c*Math.PI*4/10)+.13*Math.cos(o*Math.PI*6/10),u=c+.27*Math.cos(o*Math.PI*4/10)+.11*Math.sin(c*Math.PI*6/10),d=Math.floor(l),h=Math.floor(u),f=1/0,p=1/0;for(let g=-1;g<=1;g++)for(let m=-1;m<=1;m++){let A=d+m,x=h+g,v=n[(x%10+10)%10*10+(A%10+10)%10],_=Math.hypot(v[0]+A-(A%10+10)%10-l,v[1]+x-(x%10+10)%10-u);_<f?(p=f,f=_):p=Math.min(p,_)}t[r*256+a]=Math.round(255*Math.exp(-Math.pow((p-f)/.075,2)))}let s=new Dn(t,256,256,Zn,ot);return s.wrapS=s.wrapT=an,s.generateMipmaps=!0,s.minFilter=Ht,s.needsUpdate=!0,s}function hE(i){let e=i.getAttribute("position"),t=i.index,n=new Map,s=c=>[e.getX(c),e.getY(c)].map(l=>Math.round(l*1e4)).join(","),r=t?t.count:e.count;for(let c=0;c<r;c+=3){let l=[0,1,2].map(u=>t?t.getX(c+u):c+u);for(let u=0;u<3;u++){let d=l[u],h=l[(u+1)%3],f=s(d),p=s(h),g=f<p?`${f}|${p}`:`${p}|${f}`,m=n.get(g);m?m.count++:n.set(g,{a:d,b:h,count:1})}}let a=[...n.values()].filter(c=>c.count===1),o=new Float32Array(e.count);for(let c=0;c<e.count;c++){let l=e.getX(c),u=e.getY(c),d=1/0;for(let{a:h,b:f}of a){let p=e.getX(h),g=e.getY(h),m=e.getX(f)-p,A=e.getY(f)-g,x=Math.max(0,Math.min(1,((l-p)*m+(u-g)*A)/(m*m+A*A||1)));d=Math.min(d,Math.hypot(l-p-m*x,u-g-A*x))}o[c]=Number.isFinite(d)?d:0}i.setAttribute("waterEdge",new ze(o,1))}function dE(i,e){let t=new at({name:"Pool lamp brushed stainless bezel",color:11254454,metalness:.85,roughness:.26}),n=new at({name:"Pool lamp sealed opal lens",color:7774875,roughness:.22,emissive:9300437});n.onBeforeCompile=r=>{r.uniforms.uPoolLampPower=e.uPoolLamps,r.uniforms.uPoolLampNight=e.uNight,r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
uniform float uPoolLampPower,uPoolLampNight;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance*=uPoolLampPower*max(.22,uPoolLampNight)*2.8;`)},n.customProgramCacheKey=()=>"sealed-pool-lamp-power";let s=new T(0,1,0);for(let[r,a]of[[[.15,-.625,7.005],[1,.27,0]],[[8.635,-.625,6.39],[-.98,.27,.16]]]){let o=new T(...a).normalize(),c=new T(...r);for(let[l,u,d,h,f]of[[.105,.025,0,t,"Submerged sealed stainless lamp bezel"],[.083,.012,.017,n,"Submerged recessed opal pool light"]]){let p=new Le(new zt(l,l,u,40),h);p.name=f,p.quaternion.setFromUnitVectors(s,o),p.position.copy(c).addScaledVector(o,d),i.add(p)}}}function fE(i,e,t){let n=new it(new T(-.8,-1.8,3.32),new T(9.58,.13,10.7)),s=[new T,new T,new T],r=[],a=new Map;i.updateMatrixWorld(!0),i.traverse(o=>{if(!o.isMesh||o.isInstancedMesh)return;let c=/^landscape[ _](tile|plain|metal)/i.test(o.name),l=/^Pool (ladder|lamp)/.test(o.material.name),u=o.material.name.startsWith("Coping ");if(!c&&!l&&!u)return;let d=o.geometry,h=d.getAttribute("position"),f=d.index,p=[];for(let x=0,v=f?.count??h.count;x<v;x+=3){let _=f?f.getX(x):x,y=f?f.getX(x+1):x+1,E=f?f.getX(x+2):x+2;[_,y,E].some((M,I)=>n.containsPoint(s[I].fromBufferAttribute(h,M).applyMatrix4(o.matrixWorld)))&&p.push(_,y,E)}if(!p.length)return;let g=new ut;for(let[x,v]of Object.entries(d.attributes))g.setAttribute(x,v);g.setIndex(p);let m=a.get(o.material);if(!m){let x=o.material;m=x.clone(),m.onBeforeCompile=(v,_)=>{x.onBeforeCompile(v,_),v.vertexShader=v.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
          vec3 actual=(modelMatrix*vec4(transformed,1.)).xyz;
          float submergedDepth=max(0.,-.205-actual.y);
          float airHeight=max(.028,cameraPosition.y+.205);
          float lateral=length(cameraPosition.xz-actual.xz),ratio=.7502;
          for(int j=0;j<4;j++){
            float tangent=lateral/(airHeight+submergedDepth*ratio);
            ratio=inversesqrt(1.776889+.776889*tangent*tangent);
          }
          actual.y+=submergedDepth*(1.-ratio);
          gl_Position=projectionMatrix*viewMatrix*vec4(actual,1.);
        `)},m.customProgramCacheKey=()=>x.customProgramCacheKey()+"/submerged-image",a.set(o.material,m)}let A=new Le(g,m);A.matrixAutoUpdate=!1,A.matrix.copy(o.matrixWorld),A.layers.set(t),A.receiveShadow=!0,A.frustumCulled=!1,A.name="Submerged "+o.name,r.push(A)}),i.add(...r),e?.layers.enable(t)}function xg(i,e=0){i.geometry.boundingBox||i.geometry.computeBoundingBox();let t=i.geometry.boundingBox.clone();t.min.x-=e,t.max.x+=e,t.min.y-=e,t.max.y+=e;let n=[];for(let l of[t.min.x,t.max.x])for(let u of[t.min.y,t.max.y])for(let d of[t.min.z,t.max.z])n.push(new mt(l,u,d,1));let s=new mt,r=new Re,a=new Re,o=null,c=new Re;return(l,u,d=!1)=>{let h=u.width,f=u.height;r.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse).multiply(i.matrixWorld);let p=1/0,g=1/0,m=-1/0,A=-1/0;for(let M of n){if(s.copy(M).applyMatrix4(r),s.w<=0||s.z<-s.w){p=g=-1,m=A=1;break}p=Math.min(p,s.x/s.w),g=Math.min(g,s.y/s.w),m=Math.max(m,s.x/s.w),A=Math.max(A,s.y/s.w)}let x=24,v=Math.max(0,Math.floor((p+1)*.5*h)-x),_=Math.max(0,Math.floor((g+1)*.5*f)-x),y=Math.min(h,Math.ceil((m+1)*.5*h)+x)-v,E=Math.min(f,Math.ceil((A+1)*.5*f)+x)-_;if(y<=0||E<=0)return null;o??=l.clone(!1),o.copy(l,!1),a.set(h/y,0,0,(h-2*v-y)/y,0,f/E,0,(f-2*_-E)/E,0,0,1,0,0,0,0,1),o.projectionMatrix.premultiply(a),o.projectionMatrixInverse.copy(o.projectionMatrix).invert();let b=d?h-v-y:v;return u.viewport.set(b,_,y,E),u.scissor.copy(u.viewport),u.scissorTest=!0,c.set(y/h,0,0,b/h,0,E/f,0,_/f,0,0,1,0,0,0,0,1),{camera:o,uvTransform:c}}}function _g({renderer:i,scene:e,camera:t,waterMesh:n}){let s=[],r=[],a=new T,o=new T,c=new T,l=0,u=.4,d=null,h=null,f=()=>{},p=0,g=new ps,m=new me;function A(){i.getDrawingBufferSize(m);let y=Math.max(m.x,m.y),E=Math.min(.91,1344/Math.max(1,y));return m.multiplyScalar(E).round()}e.traverse(y=>{y.isDirectionalLight&&!d&&(d=y);let E=Array.isArray(y.material)?y.material:[y.material];for(let b of E)b&&/mirror/i.test(b.name)&&(b.visible=!1)});function x(y,E,b=()=>!0){let M=y.onBeforeRender,I=xg(y,y===h?.34:0),S=-1/0,C=new Re,B=new Re;y.userData.repaint=()=>{S=-1/0},y.onBeforeRender=function(D,R,k){if(k!==t||k.isVirtualCamera||!b()||!(!C.equals(k.matrixWorld)||!B.equals(k.projectionMatrix))&&l-S<E)return;let P=I(k,y.getRenderTarget(),!0);if(!P)return;let H=[];for(let O of s)O!==y&&O.visible&&(H.push(O),O.visible=!1);let U=y.getReflectionCamera(P.camera);U.isVirtualCamera=!0;let L=D.getRenderTarget();try{M.call(y,D,R,P.camera),y.material.uniforms.textureMatrix.value.premultiply(P.uvTransform),S=l,C.copy(k.matrixWorld),B.copy(k.projectionMatrix)}finally{D.setRenderTarget(L);for(let O of H)O.visible=!0}},s.push(y)}if(n?.geometry){n.updateWorldMatrix(!0,!1);let y=n.geometry.clone();for(let V of["position","normal"]){let j=y.getAttribute(V);if(!j)continue;let Q=new Float32Array(j.count*3);for(let q=0;q<j.count;q++)Q[q*3]=j.getX(q),Q[q*3+1]=j.getY(q),Q[q*3+2]=j.getZ(q);y.setAttribute(V,new ze(Q,3))}y.applyMatrix4(n.matrixWorld),y.computeBoundingBox();let E=(y.boundingBox.min.y+y.boundingBox.max.y)*.5;y.applyMatrix4(new Re().makeTranslation(0,-E,0)),y.rotateX(Math.PI/2),hE(y),y.computeBoundingSphere();let b=A();h=new lr(y,{textureWidth:b.x,textureHeight:b.y,multisample:2,clipBias:.002,color:new Oe("#438d8f"),shader:lE}),h.name="Pool moving planar water";let M=h.getRenderTarget();M.texture.generateMipmaps=!0,M.texture.minFilter=Ht,h.position.y=E,h.rotation.x=-Math.PI/2,h.material.transparent=!0,h.material.depthWrite=!0,h.material.toneMapped=!0,h.renderOrder=5,n.visible=!1,e.add(h),x(h,1/24);let I=new me,S=new qt(1,1,{type:wt,minFilter:vt,magFilter:vt,depthBuffer:!0,generateMipmaps:!1,samples:4});S.depthTexture=new zn(1,1,Tn),h.material.uniforms.uBasin.value=S.texture,h.material.uniforms.uBasinDepth.value=S.depthTexture;let C=h.onBeforeRender;dE(e,h.material.uniforms);let B=6;fE(e,d,B);let D=xg(h,.34),R=new Re,k=new Re,F=!0,P=-1,H=-1/0;f=()=>{F=!0},h.onBeforeRender=function(V,j,Q){if(Q!==t||Q.isVirtualCamera)return;if(!R.equals(Q.matrixWorld)||!k.equals(Q.projectionMatrix)||F||P!==u||l-H>=1/24){i.getDrawingBufferSize(I);let Z=Math.min(1,1152/Math.max(I.x,I.y)),ue=Math.round(I.x*Z),de=Math.round(I.y*Z);(S.width!==ue||S.height!==de)&&S.setSize(ue,de);let $=D(Q,S);if(!$)return;let ge=V.getRenderTarget();$.camera.layers.set(B);let fe=V.shadowMap.autoUpdate,Be=V.shadowMap.needsUpdate;V.shadowMap.autoUpdate=!1,V.shadowMap.needsUpdate=!1;try{V.setRenderTarget(S),V.clear(),V.render(j,$.camera),h.material.uniforms.uProjectionInverse.value.copy(Q.projectionMatrixInverse),R.copy(Q.matrixWorld),k.copy(Q.projectionMatrix),P=u,H=l,F=!1}finally{V.shadowMap.autoUpdate=fe,V.shadowMap.needsUpdate=Be,V.setRenderTarget(ge)}}C.call(this,V,j,Q)};let U=uE();U.anisotropy=Math.min(4,i.capabilities.getMaxAnisotropy());let L={uPoolCaustics:{value:U},uPoolLevel:{value:E},uPoolClock:h.material.uniforms.uClock,uPoolNight:h.material.uniforms.uNight,uPoolSun:h.material.uniforms.uSun,uPoolLamps:h.material.uniforms.uPoolLamps},O=new Set;e.traverse(V=>{if(V.layers.mask===1<<B)return;let j=Array.isArray(V.material)?V.material:[V.material];for(let Q of j){if(Q?.name!=="tile"||O.has(Q))continue;O.add(Q);let q=Q.onBeforeCompile,Z=Q.customProgramCacheKey();Q.onBeforeCompile=function(ue,de){q.call(this,ue,de),Object.assign(ue.uniforms,L),ue.vertexShader=ue.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vPoolWorld;`).replace("#include <project_vertex>",`#include <project_vertex>
vPoolWorld=(modelMatrix*vec4(transformed,1.)).xyz;`),ue.fragmentShader=ue.fragmentShader.replace("#include <common>",`#include <common>
            varying vec3 vPoolWorld;
            uniform sampler2D uPoolCaustics;
            uniform float uPoolLevel,uPoolClock,uPoolNight,uPoolLamps;
            uniform vec3 uPoolSun;
            float poolLight(vec2 uv) {
              vec2 drift=vec2(uPoolClock*.008,-uPoolClock*.006);
              vec2 warp=.012*vec2(sin(uv.y*7.+uPoolClock*.17),cos(uv.x*6.-uPoolClock*.13));
              float a=texture2D(uPoolCaustics,uv+drift+warp).r;
              float b=texture2D(uPoolCaustics,uv*1.17-drift*.7-warp).r;
              return .65*a+.35*b;
            }
          `).replace("#include <opaque_fragment>",`
            float poolDepth=uPoolLevel-vPoolWorld.y;
            float submerged=smoothstep(.015,.09,poolDepth)
              *step(-.25,vPoolWorld.x)*step(vPoolWorld.x,9.25)
              *step(3.7,vPoolWorld.z)*step(vPoolWorld.z,10.25);
            if(submerged>0.) {
              vec3 ray=refract(-normalize(uPoolSun),vec3(0.,1.,0.),.75);
              vec2 footprint=vPoolWorld.xz-ray.xz*(poolDepth/max(-ray.y,.2));
              float daylight=poolLight(footprint/2.4);
              float lampA=length(vPoolWorld-vec3(.3,uPoolLevel-.42,7.1));
              float lampB=length(vPoolWorld-vec3(8.5,uPoolLevel-.42,6.5));
              float lamps=exp(-lampA*1.15)+exp(-lampB*1.15);
              float lampPattern=poolLight(vPoolWorld.xz/1.65+poolDepth*.08);
              // Keep submerged lamp radiance in the basin. Unshadowed point
              // lights leak cyan specular stripes onto the deck and diving board.
              outgoingLight += submerged*(
                reflectedLight.directDiffuse*daylight*.58*(1.-uPoolNight)
                +material.diffuseColor*vec3(.8,2.2,1.9)*lamps*uPoolLamps*max(.22,uPoolNight)*(1.+lampPattern*.32));
              // Water absorbs red first; retain the real geometry and grout.
              outgoingLight *= mix(vec3(1.),exp(-vec3(.035,.009,.005)*poolDepth),submerged);
            }
            #include <opaque_fragment>
          `)},Q.customProgramCacheKey=()=>Z+"/pool-caustics-v2",Q.needsUpdate=!0}})}for(let y of[{position:[-8.864,1.62,-8.3],size:[.94,1.03],room:[-9,-4.7,-11.2,-7.05]},{position:[-.62,1.61,-8.55],size:[.7,.82],room:[-.7,2.3,-10.8,-7.2]}]){let E=new lr(new Hn(...y.size),{textureWidth:Math.round(512*y.size[0]/y.size[1]),textureHeight:512,multisample:0,clipBias:.002,color:new Oe("#e6e9e7"),shader:cE});E.name="Room planar silver reflection",E.getRenderTarget().texture.generateMipmaps=!0,E.getRenderTarget().texture.minFilter=Ht,E.position.set(...y.position),E.rotation.y=Math.PI/2,E.userData.room=y.room,e.add(E),r.push(E),x(E,1/24,()=>E.visible)}function v(y=0,E=.4){l+=Math.max(0,Math.min(y,.25)),u=Math.max(0,Math.min(1,E));let b=Math.max(0,Math.min(1,(u-.35)/.6)),M=b*b*(3-2*b);t.getWorldPosition(a);for(let I of r){let[S,C,B,D]=I.userData.room;I.visible=a.x>S&&a.x<C&&a.z>B&&a.z<D}if(h){let I=h.material.uniforms;I.uClock.value=l,I.uNight.value=M,d&&(d.getWorldPosition(o),d.target.getWorldPosition(c),I.uSun.value.copy(o).sub(c).normalize(),I.uSunColor.value.copy(d.color).multiplyScalar(Math.min(2,d.intensity)))}}function _(){if(h){let y=A();h.getRenderTarget().setSize(y.x,y.y)}f();for(let y of s)y.userData.repaint();v(0,u)}return v(0,.4),{update:v,repaint:_,surface:h,hitTest(y){if(!h)return null;g.ray.copy(y.ray??y),h.updateWorldMatrix(!0,!1);let E=g.intersectObject(h,!1)[0];return E?{distance:E.distance,point:E.point}:null},disturb(y,E=1){if(!h||!y||!Number.isFinite(y.x)||!Number.isFinite(y.z))return!1;let b=h.material.uniforms.uDisturbances.value;return b[p].set(y.x,y.z,l,Math.max(0,Math.min(1.5,E))),p=(p+1)%b.length,!0},setPoolLights(y){h&&(h.material.uniforms.uPoolLamps.value=y?1:0,f(),h.userData.repaint())}}}var cE,lE,bg=ct(()=>{gt();gg();cE={...lr.ReflectorShader,name:"Neutral silver mirror",fragmentShader:`
    uniform sampler2D tDiffuse;
    varying vec4 vUv;
    #include <logdepthbuf_pars_fragment>
    void main() {
      #include <logdepthbuf_fragment>
      gl_FragColor = vec4(texture2DProj(tDiffuse, vUv).rgb * .94, 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }
  `},lE={name:"Calm clear pool",uniforms:{color:{value:new Oe("#438d8f")},tDiffuse:{value:null},textureMatrix:{value:null},uClock:{value:0},uNight:{value:0},uDisturbances:{value:Array.from({length:4},()=>new mt(0,0,-100,0))},uPoolLamps:{value:1},uBasin:{value:null},uBasinDepth:{value:null},uProjectionInverse:{value:new Re},uSun:{value:new T(.63459,.22209,.74025)},uSunColor:{value:new Oe(1,.77,.43)}},vertexShader:`
    uniform mat4 textureMatrix;
    attribute float waterEdge;
    varying vec4 vReflection;
    varying vec4 vScreen;
    varying vec3 vWorld;
    varying float vEdge;
    #include <common>
    #include <logdepthbuf_pars_vertex>
    void main() {
      vEdge = waterEdge;
      vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
      vReflection = textureMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      vScreen = gl_Position;
      #include <logdepthbuf_vertex>
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform sampler2D uBasin, uBasinDepth;
    uniform mat4 uProjectionInverse;
    uniform mat4 textureMatrix;
    uniform vec3 color;
    uniform float uClock;
    uniform float uNight;
    uniform vec4 uDisturbances[4];
    uniform vec3 uSun;
    uniform vec3 uSunColor;
    varying vec4 vReflection;
    varying vec4 vScreen;
    varying vec3 vWorld;
    varying float vEdge;
    #include <common>
    #include <logdepthbuf_pars_fragment>
    vec2 wave(vec2 p, vec2 k, float speed, float amplitude) {
      float phase = dot(p, k) + uClock * speed;
      float footprint = fwidth(phase);
      return k * (amplitude * cos(phase) * exp(-.35 * footprint * footprint));
    }
    void main() {
      #include <logdepthbuf_fragment>
      vec2 p = vWorld.xz;
      vec2 slope = wave(p, vec2(2.8, 1.9), .47, .006)
                 + wave(p, vec2(-2.1, 4.3), -.36, .0035)
                 + wave(p, vec2(6.7, -3.4), .59, .0011);
      float ringLight=0.;
      for(int i=0;i<4;i++){
        vec4 touch=uDisturbances[i];
        float age=uClock-touch.z;
        if(age>=0. && age<5. && touch.w>0.){
          vec2 radial=p-touch.xy;
          float radius=length(radial),front=age*.92;
          float behind=front-radius;
          float envelope=exp(-pow(behind/(.16+age*.07),2.))*exp(-age*.7)*touch.w;
          float phase=behind*25.;
          float antialias=exp(-.35*pow(fwidth(phase),2.));
          slope+=radial/max(radius,.045)*cos(phase)*envelope*.115*antialias;
          ringLight+=pow(max(0.,sin(phase)),3.)*envelope*.065*antialias;
        }
      }
      slope *= smoothstep(0.0, .25, vEdge);
      vec3 n = normalize(vec3(-slope.x, 1.0, -slope.y));
      vec3 viewDir = normalize(cameraPosition - vWorld);
      float facing = max(dot(n, viewDir), .001);
      float fresnel = .0204 + .9796 * pow(1.0 - facing, 5.0);
      // The narrow capillary rise produces a wet, reflective seam at the tile.
      // MSAA edge samples can extrapolate a negative vertex-edge distance.
      fresnel = mix(fresnel, .3, exp(-max(vEdge, 0.0) * 145.0));
      // Perturb in metres on the pool plane, then project. Screen-space UV
      // offsets make the ripple scale/axis change as the visitor turns.
      vec4 projected = vReflection + textureMatrix * vec4(slope.x * 2.2, -slope.y * 2.2, 0.0, 0.0);
      vec2 uv = projected.xy / projected.w;
      vec3 reflected = texture2D(tDiffuse, clamp(uv, .001, .999)).rgb;
      vec3 halfAngle = normalize(normalize(uSun) + viewDir);
      float nh = max(dot(n, halfAngle), 0.0);
      float nl = max(dot(n, normalize(uSun)), 0.0);
      // A finite sun lobe and pixel-footprint roughness keep the glint stable.
      vec3 nx = dFdx(n), ny = dFdy(n);
      float alpha2 = .0036 + .5 * (dot(nx, nx) + dot(ny, ny));
      float denom = nh * nh * (alpha2 - 1.0) + 1.0;
      float distribution = alpha2 / (PI * denom * denom);
      float visibility = 1.0 / (4.0 * max(facing + nl - facing * nl, .05));
      float sunFresnel = .0204 + .9796 * pow(1.0 - max(dot(viewDir, halfAngle), 0.0), 5.0);
      vec3 glint = uSunColor * (distribution * visibility * sunFresnel * nl);
      vec2 screenUV = vScreen.xy / vScreen.w * .5 + .5;
      vec3 viewNormal = mat3(viewMatrix) * vec3(-slope.x, 0., -slope.y);
      vec2 refractedUV = clamp(screenUV + viewNormal.xy * .071, .001, .999);
      float depth = texture2D(uBasinDepth, refractedUV).x;
      if(depth>=.999995){refractedUV=screenUV;depth=texture2D(uBasinDepth,screenUV).x;}
      vec4 floorView = uProjectionInverse * vec4(refractedUV * 2. - 1., depth * 2. - 1., 1.);
      floorView /= floorView.w;
      vec3 surfaceView = (viewMatrix * vec4(vWorld, 1.)).xyz;
      float distanceInWater = clamp(1.333*length(floorView.xyz - surfaceView), 0., 5.5);
      vec3 transmission = exp(-vec3(.20, .046, .024) * distanceInWater);
      vec3 basin = texture2D(uBasin, refractedUV).rgb;
      vec3 volume = mix(vec3(.035, .16, .135), vec3(.006, .024, .025), uNight);
      vec3 refracted = basin * transmission + volume * (1. - transmission);
      vec3 radiance = mix(refracted, reflected, fresnel) + glint
        +vec3(.55,.83,.82)*ringLight*smoothstep(0.,.18,vEdge);
      gl_FragColor = vec4(radiance, 1.);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }
  `}});function vg(i,e,t,n){let s=M=>{let I=new ir(128,{type:wt,generateMipmaps:!0,minFilter:Ht}),S=new fs(.105,815,I);return S.position.copy(M),{rt:I,camera:S,version:-1}},r=s(new T(1.35,1.48,-2.8)),a=s(new T(2.1,1.45,3.15)),o=(M,I,S)=>({origin:new T(...M),lo:new T(...I),hi:new T(...S)}),c=o([1.35,1.48,-2.8],[-9.15,-.32,-7],[9.15,3.52,.08]),l=o([-6.56,1.46,-2.5],[-9.1,0,-5.75],[-2.95,3.5,.08]),u=[o([-6.15,1.52,-8.8],[-9.12,0,-11.13],[-4.6,3.6,-6.91]),o([-2.31,1.48,-8.58],[-4.68,0,-11.13],[-.72,3.26,-6.91]),o([.83,1.54,-8.77],[-.82,0,-11.13],[2.34,3.12,-6.91]),o([5.75,1.5,-8.53],[2.24,0,-11.13],[9.13,3.56,-6.91])];function d(M){return M.z<-6.94&&M.z>-11.08&&Math.abs(M.x)<9.1?u[M.x<-4.64?0:M.x<-.79?1:M.x<2.28?2:3]:M.x<-3.1&&M.x>-9.1&&M.z<0&&M.z>-5.4?l:c}let h={insideEnv:{value:r.rt.texture},yardEnv:{value:a.rt.texture},night:{value:0},roomOrigin:{value:c.origin},roomLow:{value:c.lo},roomHigh:{value:c.hi},roomReady:{value:1}};for(let[M,I]of[!1,!0].map(S=>[S,t.filter(C=>C.material.name==="car-glass"===S)])){let S=new kt({uniforms:{...h,automotive:{value:M?1:0}},side:M?Lt:Nn,transparent:!0,depthWrite:!1,vertexShader:"varying vec3 vWorld,vNorm;void main(){vec4 p=modelMatrix*vec4(position,1.);vWorld=p.xyz;vNorm=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*viewMatrix*p;}",fragmentShader:`uniform samplerCube insideEnv,yardEnv;uniform vec3 roomOrigin,roomLow,roomHigh;uniform float automotive,night,roomReady;varying vec3 vWorld,vNorm;
      void main(){
        vec3 eye=normalize(cameraPosition-vWorld);vec3 n=normalize(vNorm);
        if(dot(n,eye)<0.)n=-n;vec3 r=reflect(-eye,n);
        float inside=roomReady*(1.-automotive)*(1.-smoothstep(8.8,9.2,abs(cameraPosition.x)))*(1.-smoothstep(-.24,.24,cameraPosition.z))*smoothstep(-11.3,-10.9,cameraPosition.z);
        vec3 origin=mix(vec3(2.1,1.45,3.15),roomOrigin,inside);
        vec3 lo=mix(vec3(-18.,-1.7,-16.),roomLow,inside);
        vec3 hi=mix(vec3(19.,9.,19.),roomHigh,inside);
        vec3 tA=(lo-vWorld)/(r+vec3(.00001)),tB=(hi-vWorld)/(r+vec3(.00001));
        vec3 tFar=max(tA,tB);float hit=min(tFar.x,min(tFar.y,tFar.z));
        vec3 ray=normalize(vWorld+r*max(.07,hit)-origin);
        vec3 refl=mix(textureCube(yardEnv,ray).rgb,textureCube(insideEnv,ray).rgb,inside);
        float f=.027+.89*pow(1.-max(0.,dot(eye,n)),4.);
        float highlight=smoothstep(.35,2.8,dot(refl,vec3(.22,.70,.08)));
        float a=clamp(f*1.25+mix(.012,.13,automotive)+.10*highlight+.023*inside*night,.027,.9);
        vec3 c=refl*mix(.96,1.25,night)+mix(vec3(.018,.035,.028),vec3(.026,.067,.07),automotive);
        gl_FragColor=vec4(c,a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`});S.forceSinglePass=!0,S.name=M?"Car glazing":"Window glazing";for(let C of I)C.material=S,C.renderOrder=2}let f=new Map,p=[r,a],g=new Set(t),m=-9,A=0,x,v=0,_;function y(){let M=f.get(x);h.insideEnv.value=M?M.rt.texture:a.rt.texture,h.roomReady.value=+!!M,h.yardEnv.value=a.rt.texture,h.roomOrigin.value=x.origin,h.roomLow.value=x.lo,h.roomHigh.value=x.hi,n(M?M.rt.texture:null,x)}function E(){let M=p.find(I=>I!==a&&!Array.from(f.values()).includes(I));if(!M&&p.length<4&&(M=s(x.origin),p.push(M)),!M){let I=[...f.keys()].find(S=>S!==x);M=f.get(I),f.delete(I)}return M}function b(M,I=0,S=6){let{camera:C,rt:B}=M;C.coordinateSystem!==i.coordinateSystem&&(C.coordinateSystem=i.coordinateSystem,C.updateCoordinateSystem()),C.updateMatrixWorld();let D=[],R=i.getRenderTarget(),k=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),P=i.xr.enabled,H=i.shadowMap.autoUpdate,U=i.shadowMap.needsUpdate,L=B.texture.mipmapsAutoUpdate;try{e.traverse(O=>{O.visible&&(O.isReflector||g.has(O)||O.userData.noProbe)&&(D.push(O),O.visible=!1)}),i.xr.enabled=!1,i.shadowMap.autoUpdate=!1,i.shadowMap.needsUpdate=!1,n(null);for(let O=I;O<I+S;O++)B.texture.mipmapsAutoUpdate=O===5?L:!1,i.setRenderTarget(B,O,C.activeMipmapLevel),i.state.buffers.depth.getReversed()&&i.autoClear===!1&&i.clearDepth(),i.render(e,C.children[O]);I+S===6&&(B.texture.needsPMREMUpdate=!0)}finally{B.texture.mipmapsAutoUpdate=L,i.setRenderTarget(R,k,F),i.xr.enabled=P,i.shadowMap.autoUpdate=H,i.shadowMap.needsUpdate=U;for(let V of D)V.visible=!0;let O=f.get(x);n(O?O.rt.texture:null,x)}}return{update(M,I,S){h.night.value=M;let C=d(S);if((Math.abs(M-m)>.13||m<-2)&&(A||(A=I),(I-A>.28||m<-2)&&(v++,m=M,A=0,_=void 0)),a.version<0)return x=C,r.camera.position.copy(C.origin),b(r),b(a),r.version=a.version=v,f.set(C,r),y(),!0;let B=!1;if(C!==x){x=C,_?.zone!==C&&(_=void 0);let D=f.get(C);D&&(f.delete(C),f.set(C,D)),y(),B=!0}if(!_){let D=f.get(x),R=!D||D.version!==v?x:a.version!==v?null:void 0;if(R!==void 0){let k=E();k.camera.position.copy(R?R.origin:a.camera.position),_={probe:k,zone:R,face:0,version:v}}}return _&&(b(_.probe,_.face,1),++_.face===6&&(_.probe.version=_.version,_.zone?f.set(_.zone,_.probe):a=_.probe,_=void 0,y(),B=!0)),B},invalidate(){m=-9}}}function yg(i,e){let t=new st;t.userData.noProbe=!0;let n=document.createElement("canvas");n.width=n.height=96;let s=n.getContext("2d"),r=s.createRadialGradient(48,48,0,48,48,48);for(let[u,d]of[[0,".75"],[.065,".42"],[.18,".18"],[.38,".065"],[1,"0"]])r.addColorStop(u,"rgba(255,224,180,"+d+")");s.fillStyle=r,s.fillRect(0,0,96,96);let a=new ri(n);a.colorSpace=dt;let o=new kr({map:a,opacity:0,color:16767659,transparent:!0,depthWrite:!1,blending:go});for(let u of e){let d=new Xa(o);d.position.set(...u),d.scale.setScalar(.39),t.add(d)}let c=0;function l(u){c=u,o.opacity=u*.38;for(let d of t.children){let h=d.userData.power;d.visible=h??u>.075}}return l.setPower=(u,d)=>{for(let h of t.children)h.position.distanceTo(u)>(u.x>6&&u.x<7?.84:.55)||(h.material!==o&&h.material.dispose(),h.userData.power=d,h.material=d==null?o:o.clone(),d!=null&&(h.material.opacity=d?.24:0));l(c)},i.add(t),l}var Mg=ct(()=>{gt()});function Eg(i,e){let t=[],n=new Re,s=new bn;e.traverse(f=>{if(!f.isInstancedMesh||f.count<8||f.boundingSphere.radius<4)return;let p=f.instanceMatrix.array.slice(),g=f.instanceColor?.array.slice(),m=[];f.geometry.computeBoundingSphere();for(let A=0;A<f.count;A++)n.fromArray(p,A*16),m.push(f.geometry.boundingSphere.clone().applyMatrix4(n));t.push({mesh:f,matrices:p,colors:g,spheres:m})});let r=new jn,a=new Re,o=[],c=[],l=[],u=i.onBeforeRender,d=i.onAfterRender,h=f=>{for(let p=0;p<t.length;p++){let g=t[p].mesh,m=f[p];g.instanceMatrix=m.matrix,g.instanceColor=m.color,g.count=m.count}};i.onBeforeRender=function(f,p,g,m){u.call(this,f,p,g,m);let A=c[l.length]??(c[l.length]=new WeakMap),x=A.get(g);x||(x=t.map(({matrices:y,colors:E,spheres:b})=>({matrix:new Fn(y.slice(),16).setUsage(tr),color:E?new Fn(E.slice(),3).setUsage(tr):null,selected:Int32Array.from(b,(M,I)=>I),count:b.length})),A.set(g,x)),l.push(x),h(x);let v=g.isArrayCamera;v||r.setFromProjectionMatrix(a.multiplyMatrices(g.projectionMatrix,g.matrixWorldInverse),g.coordinateSystem,g.reversedDepth),o.length=0;let _=!1;f.shadowMap.enabled&&(f.shadowMap.autoUpdate||f.shadowMap.needsUpdate)&&i.traverseVisible(y=>{let E=y.shadow;if(!(!y.isLight||!y.castShadow||!E||!E.autoUpdate&&!E.needsUpdate)){if(y.isPointLight){_=!0;return}E.updateMatrices(y),o.push(E.getFrustum())}});for(let y=0;y<t.length;y++){let{mesh:E,matrices:b,colors:M,spheres:I}=t[y],S=x[y],{selected:C}=S,B=0,D=!1;for(let R=0;R<I.length;R++)s.copy(I[R]).applyMatrix4(E.matrixWorld),!(!v&&!r.intersectsSphere(s)&&!(E.castShadow&&(_||o.some(k=>k.intersectsSphere(s)))))&&(C[B]!==R&&(C[B]=R,D=!0,E.instanceMatrix.array.set(b.subarray(R*16,R*16+16),B*16),M&&E.instanceColor.array.set(M.subarray(R*3,R*3+3),B*3)),B++);S.count=E.count=B,D&&(E.instanceMatrix.needsUpdate=!0,M&&(E.instanceColor.needsUpdate=!0))}},i.onAfterRender=function(f,p,g){d.call(this,f,p,g),l.pop(),l.length&&h(l[l.length-1])}}var Sg=ct(()=>{gt()});function mE(i,e){let t=Math.max(Math.abs(i-2.4)-17.4,Math.abs(e-.5)-16.5,0),n=Math.max(Math.abs(i-14)-5.1,Math.abs(e-18)-5.2,0),s=Math.min(t,n),r=Fl(0,20,s),a=Fl(25,110,Math.hypot(i,e)),o=.58+.4*Math.sin(i*.079+e*.041)+.37*Math.sin(e*.095-i*.019)+.15*Math.sin(i*.22+e*.17),c=.45*Math.exp(-Math.pow((i-8-Math.sin(e*.035)*17)/9,2)),l=Fl(0,6.5,s)*(1-Fl(26,54,s)),u=.31+.22*Math.sin(i*.245-e*.19)+.14*Math.sin(e*.39+i*.157);return-.075+r*(o-c)+l*u+a*(.9+.35*Math.sin(i*.029-e*.011))}function Ig(i,e){let t=(h,f)=>{let p=0,g=h.length-1;for(;g-p>1;){let m=p+g>>1;h[m]>f?g=m:p=m}return Math.min(p,h.length-2)},n=t(ur,i),s=t(ya,e),r=ur.length,a=fd((i-ur[n])/(ur[n+1]-ur[n]),0,1),o=fd((e-ya[s])/(ya[s+1]-ya[s]),0,1),c=Bo[s*r+n],l=Bo[s*r+n+1],u=Bo[(s+1)*r+n],d=Bo[(s+1)*r+n+1];return a+o<=1?c+(l-c)*a+(u-c)*o:d+(u-d)*(1-a)+(l-d)*(1-o)}function gE(){let i=ur,e=ya,t=i.length,n=e.length,s=[],r=[],a=[],o=[],c=new Oe;for(let u=0;u<n;u++)for(let d=0;d<t;d++){let h=i[d],f=e[u],p=Bo[u*t+d];s.push(h,p,f),r.push(h/3.6,f/3.6);let g=.94+.055*Math.sin(h*.19+f*.11)+.04*Math.sin(f*.44-h*.32),m=Math.exp(-Math.pow((h-8-Math.sin(f*.035)*17)/9,2));if(c.setRGB(g*(1+.035*m),g,g*(1-.045*m)),a.push(...c.toArray()),d<t-1&&u<n-1){let A=(h+i[d+1])*.5,x=(f+e[u+1])*.5;if(pd.some(([y,E,b,M])=>A>y&&A<E&&x>b&&x<M))continue;let v=u*t+d,_=v+t;o.push(v,_,v+1,v+1,_,_+1)}}let l=new ut;return l.setAttribute("position",new ze(s,3)),l.setAttribute("uv",new ze(r,2)),l.setAttribute("color",new ze(a,3)),l.setIndex(o),l.computeVertexNormals(),l}function xE(i,e,t){let n=new at({map:i,normalMap:e,normalScale:new me(.68,.68),color:16777215,roughness:.97,vertexColors:!0});return n.name="Mineral alluvium",n.onBeforeCompile=s=>{s.uniforms.desertMacro={value:t},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 desertPosition;`).replace("#include <begin_vertex>",`#include <begin_vertex>
desertPosition=position;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D desertMacro;varying vec3 desertPosition;`),s.fragmentShader=s.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
      vec2 broadUV=mat2(.79,-.61,.61,.79)*desertPosition.xz/22.;
      vec3 broad=texture2D(desertMacro,broadUV).rgb;
      float broadValue=dot(broad,vec3(.27,.58,.15));
      diffuseColor.rgb*=mix(.84,1.15,smoothstep(.06,.65,broadValue));
      diffuseColor.rgb*=1.20;`),s.fragmentShader=s.fragmentShader.replace("#include <opaque_fragment>",`#include <opaque_fragment>
      float desertHaze=smoothstep(32.,190.,length(desertPosition.xz));
      gl_FragColor.rgb=mix(gl_FragColor.rgb,fogColor*.58,desertHaze*.88);`)},n.customProgramCacheKey=()=>"desert-alluvium-v1",n}function Bg(i){let e=new T;i.traverse(s=>{if(!s.isMesh)return;if(["range","gravel"].includes(s.material?.name)){s.visible=!1;return}if(!["plain","stone"].includes(s.material?.name))return;let r=s.geometry,a=r.getAttribute("position"),o=r.getIndex(),c=[],l=o?o.count:a.count,u=[];for(let d=0;d<l;d+=3){let h=[0,1,2].map(f=>o?o.getX(d+f):d+f);e.set(0,0,0);for(let f of h)e.x+=a.getX(f)/3,e.y+=a.getY(f)/3,e.z+=a.getZ(f)/3;e.applyMatrix4(s.matrixWorld),u.push({ids:h,point:e.clone(),outside:Ll(e.x,e.z)&&e.y<6})}if(s.material.name==="stone"){let d=u.map((g,m)=>m),h=new Map,f=g=>{for(;d[g]!==g;)d[g]=d[d[g]],g=d[g];return g};for(let[g,m]of u.entries())for(let A of m.ids){let x=[a.getX(A),a.getY(A),a.getZ(A)].map(v=>Math.round(v*1e4)).join("/");h.has(x)?d[f(g)]=f(h.get(x)):h.set(x,g)}let p=new Map;for(let[g,m]of u.entries()){let A=f(g);p.has(A)||p.set(A,{count:0,outside:0,bounds:new it});let x=p.get(A);x.count++,x.outside+=Number(m.outside),x.bounds.expandByPoint(m.point)}for(let[g,m]of u.entries()){let A=p.get(f(g)),x=A.bounds.getSize(new T);!(A.outside/A.count>.12&&Math.max(x.x,x.z)<6&&x.y<5)&&!m.outside&&c.push(...m.ids)}}else for(let d of u)d.outside||c.push(...d.ids);if(c.length!==l){let d=r.clone();d.setIndex(c),d.computeBoundingSphere(),s.geometry=d}});let t=i.getObjectByName("Desert living landscape");t&&Eg(i,t);let n=[];return t?.traverse(s=>{s.userData.desertNear&&n.push(s)}),s=>{for(let r of n){let a=r.position.x-s.position.x,o=r.position.z-s.position.z;r.visible=a*a+o*o<5184}}}function Pl(i,e=!1,t=!1){let n=Ma(i),s=new Do,r=new Oe(6643019),a=new Oe,o=t?4:8;for(let c=0;c<o;c++){let l=c*2.399+n()*.8,u=.37+n()*.45,d=.25+n()*.43,h=g=>new T(Math.cos(l)*d*g**1.5,u*g,Math.sin(l)*d*g**1.5),f=[h(0),h(.35),h(.7),h(1)];s.stem(f,t?.005:.008,r);let p=t?2:3;for(let g=0;g<p;g++){let m=.4+g/(p-1)*.55,A=h(m),x=l+(g%2?1:-1)*(.55+n()*.8),v=A.clone().add(new T(Math.cos(x)*(.13+n()*.2),.06+n()*.12,Math.sin(x)*(.13+n()*.2)));t||s.stem([A,A.clone().lerp(v,.5),v],.003,r);let _=t?3:8;for(let y=0;y<_;y++){let E=A.clone().lerp(v,.18+y/_*.82),b=y*2.399+x;E.add(new T(Math.cos(b)*.048,Math.sin(b*1.7)*.025,Math.sin(b)*.048));let M=new T(Math.cos(b),.2+n()*.8,Math.sin(b));a.setHex(e?11251864:9082222).multiplyScalar(.78+n()*.47),s.leaf(E,M,t?.1:.055+n()*.035,e?.028:.018,a)}}}return s.geometry()}function wg(i,e=!1){let t=Ma(i),n=new Do,s=new Oe(8420192),r=new Oe,a=e?5:11;for(let o=0;o<a;o++){let c=o*2.399,l=.12+t()*.32,u=.28+t()*.31,d=new T(0,0,0),h=new T(Math.cos(c)*l,u,Math.sin(c)*l);n.stem([d,h.clone().multiplyScalar(.55),h],.004,s);for(let f=0;f<(e?5:23);f++){let p=f*2.399+o,g=t()*2-1,m=.11+t()*.08,A=h.clone().add(new T(Math.cos(p)*m*Math.sqrt(1-g*g),g*m,Math.sin(p)*m*Math.sqrt(1-g*g)));r.setHex(10527627).multiplyScalar(.83+t()*.32),n.leaf(A,new T(Math.cos(p),.3+t()*.9,Math.sin(p)),.055+t()*.035,.025,r)}}return n.geometry()}function Cg(i){let e=Ma(i),t=new Do,n=new Oe;for(let s=0;s<44;s++){let r=e()*Math.PI*2,a=.18+e()*.45,o=.11+e()*.22,c=new T(-Math.sin(r),0,Math.cos(r)).multiplyScalar(.003+e()*.0035),l=u=>new T(Math.cos(r)*o*u*u,a*u-.13*u*u,Math.sin(r)*o*u*u);n.setHex(s%5===0?7503191:10458222).multiplyScalar(.8+e()*.35);for(let u=0;u<4;u++){let d=u/4,h=(u+1)/4;t.face([l(d).sub(c),l(d).add(c),l(h).addScaledVector(c,1-h),l(h).addScaledVector(c,h-1)],n)}}return t.geometry()}function _E(i){let e=Ma(i),t=[],n=[],s=[],r=new Oe;for(let o=0;o<27;o++){let c=o*2.399,l=o/27,u=.58+e()*.45,d=.35+l*.6,h=t.length/3,f=12;for(let p=0;p<=f;p++){let g=p/f,m=u*d*(.16*g+.84*g*g),A=.035+u*(1.32*g-(.5+l*.57)*g*g),x=.11*u*Math.sin(Math.PI*g)**.7;for(let v=-1;v<=1;v++)t.push(Math.cos(c)*m-Math.sin(c)*x*v,A+(v===0?.025*Math.sin(Math.PI*g):-.008*Math.sin(Math.PI*g)),Math.sin(c)*m+Math.cos(c)*x*v),r.setHex(9350044).multiplyScalar(.68+.2*Math.sin(c*1.7)+.13*(1-g)),n.push(...r.toArray());if(p<f)for(let v=0;v<2;v++){let _=h+p*3+v,y=_+3;s.push(_,y,_+1,_+1,y,y+1)}}}let a=new ut;return a.setAttribute("position",new ze(t,3)),a.setAttribute("color",new ze(n,3)),a.setIndex(s),a.computeVertexNormals(),a}function hi(i,e,t,n,s,r=!1){if(!s.length)return;let a=new Pn(t,n,s.length),o=new Ft,c=new Oe;a.name=e;let l=new T(s.reduce((u,d)=>u+d[0],0)/s.length,0,s.reduce((u,d)=>u+d[1],0)/s.length);a.position.copy(l);for(let[u,[d,h,f,p=0,g=1,m=1]]of s.entries())o.position.set(d-l.x,Ig(d,h)-f*(e.includes("granite")?.13:.035),h-l.z),o.rotation.set(0,p,0),o.scale.set(f,f*m,f*(.82+.23*g)),o.updateMatrix(),a.setMatrixAt(u,o.matrix),c.setRGB(g,g,g*.975),a.setColorAt(u,c);return a.receiveShadow=!0,a.castShadow=r,a.userData.desertNear=r,a.computeBoundingSphere(),i.add(a),a}async function Dg(i){let e=[],t=new st;t.name="Desert living landscape",i.add(t);let n=new pn,s=new xa,[r,a,o,...c]=await Promise.all([n.loadAsync("assets/desert/soil-color.webp"),n.loadAsync("assets/desert/soil-normal.webp"),n.loadAsync("assets/desert/soil-macro.webp"),...["namaqualand_boulder_02","namaqualand_boulder_03","namaqualand_boulder_04","sand_rocks_small_01","arid-scrub","xeric-groundcover","desert-aloe"].map(D=>s.loadAsync("assets/desert/"+D+".glb"))]),l=c.slice(0,4),u=c.slice(4);for(let D of[r,a,o])D.wrapS=D.wrapT=an,D.anisotropy=8;r.colorSpace=o.colorSpace=dt;let d=xE(r,a,o),h=new Le(gE(),d);h.name="Sculpted desert alluvium",h.receiveShadow=!0,t.add(h);let f=Ma(489173),p=Math.PI*2,g=new at({vertexColors:!0,roughness:.86,envMapIntensity:1.25,side:Lt});g.name="Native desert foliage",g.forceSinglePass=!0;let m=[Pl(71),wg(491),Pl(820),Cg(421)],A=[Pl(71,!1,!0),wg(491,!0),Pl(820,!1,!0),Cg(421)],x=Array.from({length:4},()=>[]),v=Array.from({length:4},()=>[]);for(let D=-4;D<=4;D++)for(let R=-4;R<=4;R++){let k=D*48,F=R*48;for(let P=0;P<122;P++){let H=k+(f()-.5)*48,U=F+(f()-.5)*48,L=Math.hypot(H,U);if(L>175||L<27||!Ll(H,U,.65))continue;let O=.58+.23*Math.sin(H*.13+U*.047)+.2*Math.sin(U*.17-H*.05);if(f()>O)continue;let V=f()<.19?3:f()<.39?1:f()<.5?0:2,j=V===3?.6+f()*.8:.44+f()**1.1*1.08;(L<32?x:v)[V].push([H,U,j,f()*p,.85+f()*.25,.84+f()*.28])}}for(let D=0;D<4;D++)hi(t,"Native plant community",m[D],g,x[D]),hi(t,"Distant native scrub",A[D],g,v[D]);let _=[[-9.7,15.6,1.5],[-5.1,17.1,1.15],[.5,15.5,1.1],[5.3,18.6,1.45],[9,16.2,.9],[-15.2,7,1.35],[-15.1,-3,1.2],[20,7,1.1],[20,-7,1.35],[-8,-17,1.2]];for(let[D,[R,k,F]]of _.entries())hi(t,"Native bunchgrass pocket",m[3],g,[[R+.8,k+.6,F*.7,f()*p,1],[R-.6,k+.5,F*.52,f()*p,.91]],!0);let y=[[19.1,5.8,1.75],[20,7.4,2],[19,11.1,1.5],[21,13,1.65],[23,6.4,1.9],[22.6,10.9,2.1],[20.4,9.4,1.45],[21.5,7.9,1.3],[19.4,13.2,1.5],[23.2,12.6,1.7],..._.map(([D,R,k])=>[D,R,k*1.55]),[-15.2,-8,1.6],[-17,-9.2,1.95],[-13.7,-11.9,1.4],[-6,-17.5,1.8],[-3,-16.4,1.6],[1,-18.8,1.6],[6,-18.6,1.7],[18.9,-5.2,1.8],[20.8,-10.1,1.5],[-15.1,11.5,1.65]],E=Ma(734431),b=[];for(let[D,R,k]of[[20.9,1.8,3.9],[24.6,13.9,5.8],[29.1,6.5,6.6],[34.8,-2.6,7.3],[42,12.5,8.2],[-19,6,4.6],[-4,20,5.2]])for(let F=0;F<18;F++){let P=E()*p,H=k*Math.sqrt(E()),U=D+Math.cos(P)*H,L=R+Math.sin(P)*H*.73;Ll(U,L,.6)&&(b.push([U,L,.65+E()*.94]),F%6===0&&y.push([U+.35,L-.4,.56+E()*.78]))}let M=b.filter((D,R)=>R%3===0).map(([D,R,k],F)=>[D,R,k*.69,F*2.399,.88+F%5*.047,.78+F%3*.09]);hi(t,"Silver-leaf wash shrubs",A[1],g,M,!0);let I=b.filter((D,R)=>R%2===0).map(([D,R,k],F)=>[D-.29,R+.14,k*.53,F*1.82,.88+F%4*.05,.81]);hi(t,"Dry creek bunchgrass",m[3],g,I,!0);let S=[.316,.306,.267,.183,.153,.112,.108,.059],C=["arid-scrub.glb","xeric-groundcover.glb","desert-aloe.glb"];for(let[D,R]of u.entries()){R.scene.updateMatrixWorld(!0);let k=R.scene.children;for(let[F,P]of k.entries()){let H=[];if(D===0)for(let[U,[L,O,V]]of y.entries())U%k.length===F&&H.push([L,O,V,f()*p,.93+f()*.12,.88+f()*.21]);else if(D===1){let U=[...b,[18.7,8.5,.92],[19,10,1.2],[21.9,6.1,1.15],[21,11.8,1.1],[22.4,13.5,.8],[19.3,4.5,.9],[20.6,5.2,.7],[20.6,14.6,.85],[-13.9,-9.4,1],[-6,-16.3,.9],[1.3,15.4,.9]];for(let[L,[O,V,j]]of U.entries())for(let Q=0;Q<4;Q++){if((L+Q*3)%k.length!==F)continue;let q=L*2.399+Q*1.54,Z=.16*Q;H.push([O+Math.cos(q)*Z,V+Math.sin(q)*Z,S[F]*(.95+.46*j),q,.93+Q%3*.045,1])}}else F===0&&H.push([22.5,8.8,1.15,1.7,1,1],[19.5,14.8,.76,3,.98,1]);P.traverse(U=>{if(!U.isMesh||!H.length)return;let L=U.geometry.clone().applyMatrix4(U.matrixWorld),O=U.material;O.userData.desertAsset=C[D],O.userData.desertMaterial=O.name,O.roughness=.96,O.envMapIntensity=1.3,O.color.set(15000788),O.side=Lt,O.forceSinglePass=!0,(O.alphaTest>0||O.transparent)&&(O.alphaTest=.42,O.transparent=!1,O.depthWrite=!0,O.alphaToCoverage=!0);for(let j of[O.map,O.normalMap,O.roughnessMap,O.aoMap])j&&(j.anisotropy=8);O.normalScale?.set(.48,.48);let V=hi(t,D===0?"Scanned xeric scrub community":D===1?"Scanned succulent groundcover":"Sculptural aloe garden specimen",L,O,H,!0);V.userData.scanPlant=!0})}}hi(t,"Blue agave garden rosettes",_E(294),g,[[19.2,9.3,.95,.5,1],[22.5,5.2,1.1,2,1],[20.1,14.5,.9,1,.93],[19.1,3.3,.75,1.8,.96]],!0);let B=[];for(let[D,R,k]of y.slice(0,10))for(let F=0;F<2;F++)B.push([D+Math.cos(F*2.4)*.65,R+Math.sin(F*2.4)*.65,k*(.32+f()*.16),f()*p,.92+f()*.1]);hi(t,"East terrace native bunchgrass",m[3],g,B,!0);for(let[D,R]of l.entries()){let k=[];R.scene.updateMatrixWorld(!0),R.scene.traverse(F=>{F.isMesh&&k.push(F)});for(let F of k){let P=F.geometry.clone().applyMatrix4(F.matrixWorld),H=F.material;H.userData.desertAsset=["namaqualand_boulder_02.glb","namaqualand_boulder_03.glb","namaqualand_boulder_04.glb","sand_rocks_small_01.glb"][D],H.userData.desertMaterial=H.name,H.name="Scanned weathered granite",H.roughness=.96,H.color.set(14735302),H.normalScale?.set(.55,.55),H.envMapIntensity=1.55,H.onBeforeCompile=V=>{V.fragmentShader=V.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
          float value=dot(diffuseColor.rgb,vec3(.2126,.7152,.0722));
          diffuseColor.rgb=mix(vec3(1.08,1.025,.94)*value,diffuseColor.rgb,.39);`).replace("#include <fog_fragment>",`#include <fog_fragment>
            #ifdef USE_FOG
              float dryAir=.45*smoothstep(28.,110.,vFogDepth);
              gl_FragColor.rgb=mix(gl_FragColor.rgb,.54*fogColor,dryAir);
            #endif`)},H.customProgramCacheKey=()=>"granite-mineral-palette";for(let V of[H.map,H.normalMap,H.roughnessMap,H.aoMap])V&&(V.anisotropy=4);let U=[],L=[];for(let V=0;V<(D===3?25:38);V++){let j=f()*p,Q=19+f()**1.6*104,q=Math.cos(j)*Q,Z=Math.sin(j)*Q;if(!Ll(q,Z,1.3))continue;let ue=D===3?1.5+f()*2.2:.38+f()**2*2.15;(Q<63?U:L).push([q,Z,ue,f()*p,.9+f()*.19,.86+f()*.17])}if(D<3)for(let V=D;V<_.length;V+=3){let[j,Q,q]=_[V];U.push([j-.7,Q+.75,q*.95,f()*p,.97,.9])}D===1&&U.push([19.1,8.1,.9,.5,1,.78],[21.2,11,1.2,2.2,1,.82],[21.6,5.1,.7,.7,1,.85]);let O=hi(t,"Embedded scanned granite",P,H,U,!0);if(O&&D<3){P.computeBoundingBox(),O.updateWorldMatrix(!0,!1);let V=new Re,j=new it,Q=new T,q=new T;for(let Z=0;Z<O.count;Z++)O.getMatrixAt(Z,V),V.premultiply(O.matrixWorld),j.copy(P.boundingBox).applyMatrix4(V),j.getCenter(Q),j.getSize(q),!(q.y<.31||Math.abs(Q.x)>26||Math.abs(Q.z)>26)&&e.push([Q.x-q.x*.34,-Q.z-q.z*.34,Q.x+q.x*.34,-Q.z+q.z*.34])}if(hi(t,"Alluvial scattered granite",P,H,L),D===3){let V=b.filter((j,Q)=>Q%3===0).map(([j,Q,q],Z)=>[j+.27,Q-.24,q*(.35+Z%4*.12),Z*2.399,.98,.72]);hi(t,"Low granite wash deposits",P,H,V,!0)}}}return e}var fd,Fl,Ma,pE,AE,Ll,pd,Tg,ur,ya,Bo,Rg,Do,Fg=ct(()=>{gt();Wh();Sg();hd();fd=(i,e,t)=>Math.max(e,Math.min(t,i)),Fl=(i,e,t)=>{let n=fd((t-i)/(e-i),0,1);return n*n*(3-2*n)},Ma=i=>{let e=i;return()=>(e=Math.imul(1664525,e)+1013904223>>>0)/4294967296},pE=Object.values(vs),AE=(i,e)=>pE.some(t=>Dl(t,i,e)),Ll=(i,e,t=0)=>!(i>-13.18-t&&i<18.15+t&&e>-13.18-t&&e<14.14+t)&&!(i>10.02-t&&i<18.05+t&&e>=14-t&&e<22.1+t);pd=[[-9,9,-11,0],[-.6,9.5,3.5,10.6]],Tg=i=>[...new Set([-240,240,...i,...Array.from({length:Math.ceil(480/2.35)-1},(e,t)=>-240+(t+1)*2.35)])].sort((e,t)=>e-t),ur=Tg(pd.flatMap(i=>i.slice(0,2))),ya=Tg(pd.flatMap(i=>i.slice(2))),Bo=Float32Array.from(ya.flatMap(i=>ur.map(e=>mE(e,i))));Rg=(i,e)=>AE(i,e)?0:Ig(i,e);Do=class{constructor(){this.p=[],this.c=[],this.ix=[]}face(e,t){let n=this.p.length/3;for(let s of e)this.p.push(...s.toArray()),this.c.push(...t.toArray());for(let s=1;s<e.length-1;s++)this.ix.push(n,n+s,n+s+1)}stem(e,t,n,s=4){for(let r=0;r<e.length-1;r++){let a=e[r],o=e[r+1],c=o.clone().sub(a).normalize(),l=new T(c.z,0,-c.x).normalize(),u=new T().crossVectors(c,l).normalize(),d=t*(1-r/e.length*.8),h=t*(1-(r+1)/e.length*.8);for(let f=0;f<s;f++){let p=(A,x,v)=>A.clone().addScaledVector(l,Math.cos(v)*x).addScaledVector(u,Math.sin(v)*x),g=f*Math.PI*2/s,m=g+Math.PI*2/s;this.face([p(a,d,g),p(a,d,m),p(o,h,m),p(o,h,g)],n)}}}leaf(e,t,n,s,r){let a=t.clone().normalize(),o=new T(-a.z,.08,a.x).normalize(),c=e.clone().addScaledVector(a,n*.5).add(new T(0,s*.16,0)),l=[];for(let u=0;u<8;u++){let d=u*Math.PI/4;l.push(e.clone().addScaledVector(a,n*(.5+.5*Math.cos(d))).addScaledVector(o,s*Math.sin(d)).add(new T(0,-s*.12*Math.sin(d)**2,0)))}for(let u=0;u<8;u++)this.face([l[u],l[(u+1)%8],c],r)}geometry(){let e=new ut;return e.setAttribute("position",new ze(this.p,3)),e.setAttribute("color",new ze(this.c,3)),e.setIndex(this.ix),e.computeVertexNormals(),e.computeBoundingSphere(),e}}});function Pg(i){let e=new T(2.78,0,-1.3),t=new Re().makeTranslation(e.x+.3,0,e.z).multiply(new Re().makeRotationY(-Math.PI/2)).multiply(new Re().makeTranslation(-e.x,0,-e.z));i.updateMatrixWorld(!0),i.traverse(n=>{!n.isMesh||!n.material.name.toLowerCase().includes("hearth flame")||n.applyMatrix4(n.parent.matrixWorld.clone().invert().multiply(t).multiply(n.parent.matrixWorld))}),i.updateMatrixWorld(!0)}function Lg({scene:i,group:e,details:t,light:n}){let s=new T(-8.3,0,-3.44),r=new Re().makeRotationY(Math.PI/2),a=new Re().makeTranslation(...s.toArray()).multiply(r).multiply(new Re().makeTranslation(-s.x,0,-s.z));t.traverse(c=>{if(!c.isMesh)return;let l=c.material.name.toLowerCase(),u=l.includes("pit-art-book")||l.includes("recipe-cover")?.0028:l.includes("den-journal")?.0069:0;u&&(c.position.y+=u),l.includes("fridge-list")&&(c.parent.updateWorldMatrix(!0,!1),c.applyMatrix4(c.parent.matrixWorld.clone().invert().multiply(a).multiply(c.parent.matrixWorld)))});let o=n.textures;e.traverse(c=>{if(!c.isMesh)return;let l=c.material;if(c.castShadow=!0,c.receiveShadow=!0,l.name==="Cut ledge stone"||l.name==="Coping honed limestone"){let u=l.name==="Cut ledge stone",d=o[u?"ledge":"paving"];[l.map,l.normalMap,l.roughnessMap]=d;for(let h of["map","normalMap","roughnessMap"]){let f=l[h].clone();f.repeat.y=-1,l[h]=f}l.normalScale.setScalar(u?.54:.2),l.roughness=u?.98:.79,u||l.color.setRGB(1.18,1.15,1.06)}l.name==="Warm ivory kitchen plaster"&&(l.map=o.plaster[0],l.normalMap=o.plaster[1],l.normalScale.setScalar(.095)),n.patch(l,{plainMap:!0})}),i.add(e)}var Ng=ct(()=>{gt()});function vE(){let i=document.createElement("canvas");i.width=256,i.height=512;let e=i.getContext("2d"),t=e.createLinearGradient(0,0,256,0);for(let[r,a]of[[0,"#325b3c"],[.42,"#426f49"],[.5,"#527b4e"],[.58,"#416c43"],[1,"#2c5638"]])t.addColorStop(r,a);e.fillStyle=t,e.fillRect(0,0,256,512);for(let r=1;r<28;r++)for(let a of[-1,1]){let o=r*17.7;e.beginPath(),e.moveTo(128,o),e.bezierCurveTo(128+a*24,o+7,128+a*85,o+29,128+a*126,o+59),e.strokeStyle=r%3?"rgba(158,181,108,.13)":"rgba(159,182,109,.21)",e.lineWidth=.8,e.stroke()}e.beginPath(),e.moveTo(128,0),e.lineTo(128,512),e.strokeStyle="rgba(154,174,106,.65)",e.lineWidth=1.6,e.stroke();let n=1906;for(let r=0;r<9e3;r++){let a=()=>(n=Math.imul(n,1664525)+1013904223>>>0)/4294967296;e.fillStyle=`rgba(210,210,153,${a()*.035})`,e.fillRect(a()*256,a()*512,1,1)}let s=new ri(i);return s.colorSpace=dt,s.anisotropy=4,s}function yE(i,e,t,n){let s=[],r=[],a=[],o=n?30:22,c=8;for(let u=0;u<=o;u++){let d=u/o,h=Math.sin(Math.PI*d)**(n?.53:.7);for(let f=0;f<=c;f++){let p=f/c*2-1,g=e*h*p;n&&Math.abs(p)>.8&&(g*=1-.055*Math.sin(d*47+t*9)**12);let m=t*(d-.2);if(s.push(g*Math.cos(m),i*d,i*(.12*Math.sin(Math.PI*d)-.26*d*d)+g*Math.sin(m)+e*.2*p*p*h),r.push(f/c,d),f<c&&u<o){let A=u*(c+1)+f,x=A+c+1;a.push(A,A+1,x,A+1,x+1,x)}}}let l=new ut;return l.setAttribute("position",new ze(s,3)),l.setAttribute("uv",new ze(r,2)),l.setIndex(a),l.computeVertexNormals(),l}function ME(i,e,t,n){let s=t.clone().normalize(),r=new T().crossVectors(s,new T(0,1,0)).normalize(),a=new T().crossVectors(r,s).normalize(),o=new Re().makeBasis(r,s,a);return o.multiply(new Re().makeRotationY(n)),o.setPosition(e),i.applyMatrix4(o),i}function Ug({scene:i,light:e}){let t=vE(),n=new Xt({map:t,color:16777215,roughness:.43,side:Lt,clearcoat:.18,clearcoatRoughness:.45});n.name="Living waxy botanical blades",n.forceSinglePass=!0,e.patch(n,{plainMap:!0});let s=new at({color:5793354,roughness:.72});e.patch(s,{plainMap:!0});let r=new st;r.name="Curved botanical houseplants";for(let a of bE){let o=new st;o.name=a.name,o.position.set(...a.position);let c=[],l=[],u=a.size,d=a.bird?9:13;for(let h=0;h<d;h++){let f=h*2.39996+.35,p=a.bird?u*(.39+.105*(h%5)):u*(.17+h*.065),g=new T(Math.cos(f)*u*.055,p,Math.sin(f)*u*.055),m=new T(Math.cos(f),a.bird?.55+.17*(h%3):.15+.18*(h%3),Math.sin(f));a.bird&&m.x<-.35&&(m.y+=.85);let A=u*(a.bird?.46+.065*(h%3):.27+.025*(h%3)),x=A*(a.bird?.19:.29);c.push(ME(yE(A,x,.35*Math.sin(h*3.1),a.bird),g,m,.12*Math.sin(h)));let v=a.bird?new T(0,-.015,0):new T(0,p-.025,0),_=new us(v,v.clone().lerp(g,.55).add(new T(u*.025,.045,0)),g);l.push(new xi(_,10,u*(a.bird?.007:.004),6,!1))}if(!a.bird){let h=new us(new T(0,-.01,0),new T(-u*.035,u*.53,.02),new T(.015,u*1.01,-.015));l.push(new xi(h,18,u*.012,7,!1))}for(let[h,f,p]of[[c,n,"curved veined leaves"],[l,s,"rounded living petioles"]]){let g=un(h);for(let A of h)A.dispose();let m=new Le(g,f);m.name=a.name+" "+p,m.castShadow=!0,m.receiveShadow=!0,o.add(m)}r.add(o)}return i.add(r),r}var bE,Og=ct(()=>{gt();ci();bE=[{name:"Living Strelitzia nicolai",position:[3.48,.464,-.56],size:1.6,bird:!0},{name:"Primary Ficus elastica",position:[-4.98,.267,-10.46],size:.92},{name:"Den Ficus elastica",position:[8.5,.348,-10.35],size:1.2}]});function kg(){let i=At.shadowmap_pars_fragment,e=i.indexOf("// Hardware PCF with LinearFilter"),t=i.indexOf(") * 0.2;",e);if(e<0||t<0)return;let n=`
    vec2 pos=shadowCoord.xy*shadowMapSize;
    vec2 center=floor(pos+.5), f=pos+.5-center;
    vec2 w0=4.-3.*f, w1=vec2(7.), w2=1.+3.*f;
    vec2 a=(vec2(3.)-2.*f)/w0-2., b=(3.+f)/7., c=f/w2+2.;
    vec2 xbase=(center-.5)/shadowMapSize;
    vec2 scale=1./shadowMapSize;
    shadow=0.;
    for(int row=0;row<3;row++){
      float y=row==0?a.y:(row==1?b.y:c.y);
      float weight=row==0?w0.y:(row==1?w1.y:w2.y);
      shadow+=weight*(
        w0.x*texture(shadowMap,vec3(xbase+vec2(a.x,y)*scale,shadowCoord.z))+
        w1.x*texture(shadowMap,vec3(xbase+vec2(b.x,y)*scale,shadowCoord.z))+
        w2.x*texture(shadowMap,vec3(xbase+vec2(c.x,y)*scale,shadowCoord.z)));
    }
    shadow/=144.;`;At.shadowmap_pars_fragment=i.slice(0,e)+n+i.slice(t+8)}function Gg(i,e,t,n,s,r=[]){let a=i.getContext(),o=i.extensions.has("EXT_color_buffer_float")||i.extensions.has("EXT_color_buffer_half_float"),c=a.getInternalformatParameter(a.RENDERBUFFER,o?a.RGBA16F:a.RGBA8,a.SAMPLES),l=Math.max(0,...Array.from(c).filter(G=>G<=4)),u={type:o?wt:ot,depthBuffer:!1,generateMipmaps:!1},d=new me,h=new me,f=Fo;function p(){i.getDrawingBufferSize(d);let G=Math.min(1,Math.sqrt(f/(d.x*d.y)));h.set(Math.max(1,Math.round(d.x*G)),Math.max(1,Math.round(d.y*G)))}p();let g=h.x,m=h.y,A=new qt(g,m,{...u,depthBuffer:!0,samples:l});A.depthTexture=new zn(g,m,Tn),A.depthTexture.minFilter=A.depthTexture.magFilter=Pt;let x=new qt(Math.ceil(g/2),Math.ceil(m/2),{...u,minFilter:Pt,magFilter:Pt}),v=[new qt(g,m,u),new qt(g,m,u)],_=new ut;_.setAttribute("position",new ze([-1,-1,0,3,-1,0,-1,3,0],3));let y=new Qs,E=new Ps,b=new Le(_);b.frustumCulled=!1,E.add(b);let M={value:new me(1/g,1/m)},I={value:new me(t.near,t.far)},S={value:new me},C={value:new me},B=(G,w,K=!1)=>new kt({vertexShader:EE,fragmentShader:G,uniforms:w,defines:o?{}:{LIMITED_DEPTH:1},depthTest:!1,depthWrite:!1,blending:Qi,toneMapped:K}),D=B(SE,{sceneDepth:{value:A.depthTexture},pixel:M,focalLength:S,projectionOffset:C,clipRange:I}),R=new Re,k=new Re,F=new Re,P=new Re,H=new Re,U=Array.from({length:12},()=>new mt),L=U.map(()=>new me),O=new T,V=new jn,j={currentFrame:{value:A.texture},sceneDepth:{value:A.depthTexture},contactMap:{value:x.texture},history:{value:null},previousClipFromCurrent:{value:R},pixel:M,clipRange:I,focalLength:S,projectionOffset:C,aoDimensions:{value:new me(x.width,x.height)},worldFromView:{value:t.matrixWorld},motionRect:{value:U},motionDepth:{value:L},motionCount:{value:0},poolMin:{value:n.min.clone().addScalar(-.022)},poolMax:{value:n.max.clone().addScalar(.022)},historyReady:{value:0},stationarySamples:{value:0},hold:{value:0}},Q=B(wE,j),q=B(TE,{picture:{value:null},pixel:M,clipRange:I,focalLength:S,projectionOffset:C,worldFromView:{value:t.matrixWorld},daylight:{value:1},immersed:{value:0},reconstructAmount:{value:1-h.x/d.x}},!0),Z=B(CE,{photograph:{value:null}}),ue=new qt(1,1,{depthBuffer:!1,type:ot,minFilter:Pt,magFilter:Pt}),de=new Uint8Array(4),$=new Re,ge=1,fe=-1e3,Be=!1,we="";function ee(G,w,K){let le=performance.now();Be||le-fe<320||we===K&&w.elements.every((te,Ae)=>Math.abs(te-$.elements[Ae])<.006)||(fe=le,Be=!0,we=K,$.copy(w),Z.uniforms.photograph.value=G,Ge(Z,ue),i.readRenderTargetPixelsAsync(ue,0,0,1,1,de).then(()=>{ge=2**(de[0]*9/255-3)}).catch(()=>{}).finally(()=>{Be=!1}))}let _e=[[0,0],[-.375,.125],[.375,-.125],[-.125,-.375],[.125,.375],[-.375,-.375],[.375,.375],[.125,-.125],[-.125,.125]],be=0,ve=!1,Ee=0,Ke="",Fe=-1,nt=!1,qe=-1/0;function $e(){if(p(),q.uniforms.reconstructAmount.value=1-h.x/d.x,!(A.width===h.x&&A.height===h.y)){A.setSize(h.x,h.y);for(let G of v)G.setSize(h.x,h.y);x.setSize(Math.ceil(h.x/2),Math.ceil(h.y/2)),M.value.set(1/h.x,1/h.y),j.aoDimensions.value.set(x.width,x.height),ve=!1,Ee=0}}let z=0,Xe=0,Ce=0,Pe=0,ne=0;function ke(G,w){if(!w||Ee>1||G<=0||G>.5||document.hidden){z=Xe=Ce=Pe=ne=0;return}if(z++,Pe+=Math.min(G,.1),G>.021&&Xe++,G<.018&&Ce++,Pe<1.25||z<18)return;let K=d.x*d.y,le=Math.min(Fo,K),te=Math.min(le,Math.max(36e4,.55*le)),Ae=Math.min(f,K);Xe>z*.37&&Ae>te*1.02?(f=Math.max(te,Ae*.8),$e(),ne=0):Ce>z*.94&&Xe<z*.03?++ne>=8&&Ae<le*.98&&(f=Math.min(Fo,Ae*1.13),$e(),ne=0):ne=0,z=Xe=Ce=Pe=0}function Ge(G,w){b.material=G,i.setRenderTarget(w),i.render(E,y)}function Qe(G,w,K=0){q.uniforms.immersed.value=K,q.uniforms.daylight.value=1-w,t.updateMatrixWorld(),F.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse);let le=ve&&G===Ke&&F.elements.every((W,ce)=>Math.abs(W-P.elements[ce])<2e-7);Ee=le?Math.min(_e.length,Ee+1):0,P.copy(F),H.copy(t.projectionMatrix);let te=le&&Ee>=_e.length,Ae=performance.now();V.setFromProjectionMatrix(F);let xe=[s];for(let W of r){let ce=W();ce&&xe.push(ce)}if(te&&nt&&Fe===i.toneMappingExposure&&(!V.intersectsBox(n)&&!xe.some(W=>V.intersectsBox(W))||Ae-qe<1e3/30-1))return;qe=Ae,nt=te,Fe=i.toneMappingExposure;let ie=te?_e[0]:_e[Ee];t.projectionMatrix.elements[8]+=2*ie[0]/h.x,t.projectionMatrix.elements[9]+=2*ie[1]/h.y,t.projectionMatrixInverse.copy(t.projectionMatrix).invert(),F.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),R.copy(F).invert().premultiply(k);let oe=t.projectionMatrix.elements;S.value.set(oe[0],oe[5]),C.value.set(oe[8],oe[9]);let Me=0;for(let W of xe){if(!V.intersectsBox(W)||Me===U.length)continue;let ce=U[Me].set(2,2,-1,-1),se=L[Me].set(1e6,0),Ie=!1;for(let ye=0;ye<8;ye++){if(O.set(ye&1?W.max.x:W.min.x,ye&2?W.max.y:W.min.y,ye&4?W.max.z:W.min.z),O.applyMatrix4(t.matrixWorldInverse),O.z>-t.near){Ie=!0;continue}se.x=Math.min(se.x,-O.z-.07),se.y=Math.max(se.y,-O.z+.85),O.applyMatrix4(t.projectionMatrix);let Se=O.x*.5+.5,We=O.y*.5+.5;ce.x=Math.min(ce.x,Se-.003),ce.z=Math.max(ce.z,Se+.003),ce.y=Math.min(ce.y,We-.003),ce.w=Math.max(ce.w,We+.003)}Ie&&(ce.set(0,0,1,1),se.x=0),Me++}j.motionCount.value=Me,j.historyReady.value=Number(ve&&Ke===G),j.stationarySamples.value=te?0:Ee,j.hold.value=Number(te),j.history.value=v[1-be].texture,i.setRenderTarget(A),i.render(e,t),Ge(D,x),Ge(Q,v[be]),ee(v[be].texture,P,G),q.uniforms.picture.value=v[be].texture,Ge(q,null),t.projectionMatrix.copy(H),t.projectionMatrixInverse.copy(H).invert(),be=1-be,k.copy(F),Ke=G,ve=!0}return{render:Qe,resize:$e,pace:ke,shadingSize:()=>h.toArray(),exposure:()=>ge}}var Fo,EE,Ad,SE,wE,CE,TE,Qg=ct(()=>{gt();Fo=1920*1080,EE=`
  varying vec2 uvScreen;
  void main() {
    uvScreen = position.xy * .5 + .5;
    gl_Position = vec4(position.xy, 0., 1.);
  }`,Ad=`
  uniform vec2 clipRange;
  float storeDepth(float d){
    #ifdef LIMITED_DEPTH
      return clamp(log2(1.+d)/10.,0.,1.);
    #else
      return d;
    #endif
  }
  float recoverDepth(float stored){
    #ifdef LIMITED_DEPTH
      return exp2(stored*10.)-1.;
    #else
      return stored;
    #endif
  }
  float linearDepth(float z){
    return clipRange.x*clipRange.y/(clipRange.y-z*(clipRange.y-clipRange.x));
  }`,SE=`
  varying vec2 uvScreen;
  uniform sampler2D sceneDepth;
  uniform vec2 pixel, focalLength, projectionOffset;
  ${Ad}
  vec3 reconstruct(vec2 uv) {
    float d=linearDepth(texture2D(sceneDepth,uv).x);
    return vec3((uv*2.-1.+projectionOffset)*d/focalLength,-d);
  }
  void main(){
    vec3 p=reconstruct(uvScreen);
    if(p.z < -35.){gl_FragColor=vec4(1.,storeDepth(-p.z),0.,1.);return;}
    vec3 r=reconstruct(uvScreen+vec2(pixel.x,0.))-p;
    vec3 l=p-reconstruct(uvScreen-vec2(pixel.x,0.));
    vec3 u=reconstruct(uvScreen+vec2(0.,pixel.y))-p;
    vec3 d=p-reconstruct(uvScreen-vec2(0.,pixel.y));
    vec3 dx=abs(l.z)<abs(r.z)?l:r,dy=abs(d.z)<abs(u.z)?d:u;
    vec3 n=normalize(cross(dx,dy)+vec3(0.,0.,.00000001));
    float total=0.;
    // Two radii give chair feet a contact patch and wall returns a broader falloff.
    for(int i=0;i<8;i++){
      float a=6.2831853*(float(i)+.29)/8.;
      vec2 direction=vec2(cos(a),sin(a));
      for(int j=0;j<2;j++){
        float radius=j==0?.135:.46;
        vec2 offset=direction*focalLength*(radius*.5/max(.14,-p.z));
        vec3 samplePosition=reconstruct(clamp(uvScreen+offset,vec2(0.),vec2(1.)));
        vec3 delta=samplePosition-p;float len=length(delta);
        float horizon=max(0.,dot(n,delta)/(len+.00001)-.06);
        total+=horizon*(1.-smoothstep(radius*.35,radius*2.2,len));
      }
    }
    float contact=1.-min(.49,total*.12);
    gl_FragColor=vec4(contact,storeDepth(-p.z),0.,1.);
  }`,wE=`
  varying vec2 uvScreen;
  uniform sampler2D currentFrame,sceneDepth,contactMap,history;
  uniform mat4 previousClipFromCurrent;
  uniform vec2 pixel,aoDimensions,projectionOffset,focalLength;
  uniform mat4 worldFromView;
  uniform vec4 motionRect[12];uniform vec2 motionDepth[12];uniform int motionCount;
  uniform vec3 poolMin,poolMax;
  uniform float historyReady,stationarySamples,hold;
  ${Ad}
  float filteredContact(float z){
    vec2 pos=uvScreen*aoDimensions-.5, f=fract(pos);
    vec2 base=(floor(pos)+.5)/aoDimensions;
    float sum=0.,weight=0.;
    for(int i=0;i<4;i++){
      vec2 corner=vec2(float(i-2*(i/2)),float(i/2));
      vec2 sampleAO=texture2D(contactMap,base+corner/aoDimensions).rg;
      vec2 b=mix(1.-f,f,corner);
      float w=b.x*b.y*exp(-abs(recoverDepth(sampleAO.y)-z)*26./max(1.,.1*z));
      sum+=sampleAO.x*w;weight+=w;
    }
    return (sum+.0001)/(weight+.0001);
  }
  void main(){
    vec2 uv=uvScreen;
    float z=texture2D(sceneDepth,uv).r,depth=linearDepth(z);
    vec3 viewPoint=vec3((uv*2.-1.+projectionOffset)*depth/focalLength,-depth);
    vec3 world=(worldFromView*vec4(viewPoint,1.)).xyz;
    bool onWater=all(greaterThanEqual(world,poolMin))&&all(lessThanEqual(world,poolMax));
    bool animated=onWater;
    for(int i=0;i<12;i++){
      if(i>=motionCount)break;
      vec4 r=motionRect[i];vec2 d=motionDepth[i];
      if(depth>=d.x && depth<=d.y && all(greaterThanEqual(uv,r.xy)) && all(lessThanEqual(uv,r.zw))){animated=true;break;}
    }
    // Once the eye and lights settle, copy the resolved texel exactly. There is no
    // frame-dependent noise or subpixel shift on a stationary wall or furnishing.
    if(hold>.5 && !animated){
      gl_FragColor=texelFetch(history,ivec2(gl_FragCoord.xy),0);return;
    }
    float occlusion=filteredContact(depth);
    vec3 color=texture2D(currentFrame,uv).rgb*occlusion;
    if(historyReady>.5 && stationarySamples>.5){
      vec3 old=texelFetch(history,ivec2(gl_FragCoord.xy),0).rgb;
      color=mix(old,color,1./(1.+stationarySamples));
    }else if(historyReady>.5 && hold<.5){
      vec4 prev=previousClipFromCurrent*vec4(uv*2.-1.,z*2.-1.,1.);
      vec2 prevUV=prev.xy/prev.w*.5+.5;
      if(prev.w>0. && all(greaterThan(prevUV,pixel)) && all(lessThan(prevUV,1.-pixel))){
        vec4 old=texture2D(history,prevUV);
        float oldDepth=linearDepth(prev.z/prev.w*.5+.5);
        vec3 l=texture2D(currentFrame,uv-vec2(pixel.x,0.)).rgb*occlusion;
        vec3 r=texture2D(currentFrame,uv+vec2(pixel.x,0.)).rgb*occlusion;
        vec3 t=texture2D(currentFrame,uv+vec2(0.,pixel.y)).rgb*occlusion;
        vec3 b=texture2D(currentFrame,uv-vec2(0.,pixel.y)).rgb*occlusion;
        vec3 lo=min(color,min(min(l,r),min(t,b))), hi=max(color,max(max(l,r),max(t,b)));
        vec3 range=max(vec3(.006),(hi-lo)*.09);
        float validity=1.-smoothstep(.018*max(1.,oldDepth),.043*max(1.,oldDepth),abs(recoverDepth(old.a)-oldDepth));
        color=mix(color,clamp(old.rgb,lo-range,hi+range),validity*(animated?.40:.74));
      }
    }
    gl_FragColor=vec4(color,storeDepth(depth));
  }`,CE=`
  uniform sampler2D photograph;
  void main(){
    float sum=0.,weight=0.;
    for(int y=0;y<12;y++)for(int x=0;x<18;x++){
      vec2 p=(vec2(float(x),float(y))+.5)/vec2(18.,12.);
      float l=dot(texture2D(photograph,p).rgb,vec3(.2126,.7152,.0722));
      float w=1.25-length(p-vec2(.5,.48));
      sum+=w*log2(clamp(l,.0005,1.4));weight+=w;
    }
    float ev=clamp(log2(.125)-sum/weight,-3.,6.);
    gl_FragColor=vec4((ev+3.)/9.,0.,0.,1.);
  }`,TE=`
  varying vec2 uvScreen;
  uniform sampler2D picture;
  uniform vec2 focalLength,projectionOffset;
  uniform mat4 worldFromView;
  uniform float daylight,reconstructAmount,immersed;
  uniform vec2 pixel;
  ${Ad}
  float outsideHouse(vec3 world){
    vec2 distanceOutside=max(vec2(abs(world.x)-9.12,abs(world.z+5.5)-5.57),vec2(0.));
    return smoothstep(.1,2.2,length(distanceOutside));
  }
  void main(){
    // Preserve sharp edges when a large display reconstructs the shaded image.
    // Remap the linear sample within its own four texels to avoid overshoot.
    vec2 texel=uvScreen/pixel-.5;
    vec2 f=fract(texel);
    vec2 uv=(floor(texel)+.5+mix(f,f*f*(3.-2.*f),reconstructAmount))*pixel;
    vec4 photograph=texture2D(picture,uv);
    vec3 eye=worldFromView[3].xyz;
    float inside=smoothstep(0.,.82,min(9.07-abs(eye.x),min(-eye.z,eye.z+11.08)));
    // A second exposure preserves the bright landscape through the glazing.
    // Reconstruct the visible surface so mullions, curtains and near furnishings
    // retain the same indoor exposure at their silhouettes.
    if(inside>.001 && daylight>.001){
      float d=recoverDepth(photograph.a);
      vec3 view=vec3((uvScreen*2.-1.+projectionOffset)*d/focalLength,-d);
      vec3 world=(worldFromView*vec4(view,1.)).xyz;
      float beyond=outsideHouse(world);
      float l=dot(photograph.rgb,vec3(.2126,.7152,.0722));
      if(beyond<.98 && l>.024 && d<25.){
        // An MSAA edge can contain bright outdoor samples while keeping the
        // foreground depth. Recover those mixed samples along window silhouettes.
        float farthest=max(max(texture2D(picture,uvScreen+vec2(pixel.x,0.)).a,texture2D(picture,uvScreen-vec2(pixel.x,0.)).a),
                           max(texture2D(picture,uvScreen+vec2(0.,pixel.y)).a,texture2D(picture,uvScreen-vec2(0.,pixel.y)).a));
        float d2=recoverDepth(farthest);
        float outsideNeighbour=outsideHouse(eye+(world-eye)*(d2/max(.05,d)));
        beyond=max(beyond,outsideNeighbour*smoothstep(1.,5.,d2-d)*smoothstep(.024,.24,l));
      }
      float recovery=pow(max(1.,toneMappingExposure/1.15),-.63);
      photograph.rgb*=mix(1.,recovery,beyond*inside*daylight);
    }
    if(immersed>.001){
      float path=min(16.,recoverDepth(photograph.a));
      vec3 tr=exp(-vec3(.32,.12,.085)*path);
      vec3 medium=mix(vec3(.005,.035,.036),vec3(.035,.14,.12),daylight);
      photograph.rgb=mix(photograph.rgb,photograph.rgb*tr+medium*(1.-tr),immersed);
    }
    gl_FragColor=vec4(photograph.rgb,1.);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    gl_FragColor.rgb=floor(clamp(gl_FragColor.rgb,0.,1.)*255.+.5)/255.;
  }`});var DE=Kg(()=>{gt();Wh();jA();ZA();em();td();sm();Am();gm();ad();ym();Em();Tm();Rm();Dm();Um();Vm();Wm();qm();Jm();tg();ig();ag();cg();ug();pg();mg();bg();Mg();Fg();Ng();Og();Qg();var IE=document.querySelector("#view"),RE=document.querySelector("#load-status"),md=(i,e,t)=>Math.min(t,Math.max(e,i)),Nl=async i=>{let e=await fetch("assets/"+i);if(!e.ok)throw new Error(i+" "+e.status);return e.json()};async function BE(){let i=new gl({canvas:IE,antialias:!1,alpha:!0,powerPreference:"high-performance",stencil:!1});i.setClearAlpha(1),i.getContext().disable(i.getContext().DITHER),kg(),i.info.autoReset=!1;function e(){let ne=Math.min(1.5,window.devicePixelRatio||1,Math.sqrt(Fo/(innerWidth*innerHeight)));i.setDrawingBufferSize(innerWidth,innerHeight,ne)}e(),i.outputColorSpace=dt,i.toneMapping=xo,i.shadowMap.enabled=!0,i.shadowMap.type=Ws,i.shadowMap.autoUpdate=!1;let t=new Ps;t.background=new Oe(12560013),t.fog=new Wa(13351330,.0025);let n=new rn(58,innerWidth/innerHeight,.105,805),s=new Aa(i);s.compileEquirectangularShader();let r=new Xi().setTranscoderPath("assets/basis/").detectSupport(i);r.setWorkerLimit(2);let a=new xa().setMeshoptDecoder($A).setKTX2Loader(r),o=new El().loadAsync("assets/range/evening.hdr"),[c,l,u,d,h,f,p,g,m]=await Promise.all([a.loadAsync("assets/house.glb?v=1c09e06c36da"),Nl("irradiance.json"),Nl("surfaces/manifest.json"),Nl("solids.json"),o,o.then(ne=>im(t,ne)),a.loadAsync("assets/details.glb"),Dg(t),a.loadAsync("assets/architectural-finishes.glb")]);h.mapping=$r;let A=s.fromEquirectangular(h);t.environment=A.texture;let x=await tm(i,t,l,u.surfaces,r);t.add(c.scene),t.updateMatrixWorld();let v=[],_=[],y;c.scene.traverse(ne=>{if(ne.userData.interaction&&v.push(ne),!ne.isMesh)return;let ke=ne.material.name;if(ke==="water"){y=ne;return}if(ke==="range"&&(ne.scale.y*=.11,ne.position.y=ne.position.y*.11-1.25),ke==="mirror"){ne.visible=!1;return}ne.material=x.material(ke),(ke==="glass"||ke==="car-glass")&&_.push(ne),ne.castShadow=ke!=="car-glass"&&ke!=="glass"&&ke!=="range"&&ke!=="gravel",ne.receiveShadow=ke!=="glass"});let{scene:E}=p;Pg(E);let b=[],M=new it;E.updateWorldMatrix(!0,!0),E.traverse(ne=>{if(ne.isMesh){ne.castShadow=!0,ne.receiveShadow=!0;for(let ke of Array.isArray(ne.material)?ne.material:[ne.material])ke.userData.houseLight||(ke.userData.houseLight=!0,x.patch(ke,{plainMap:!0}),ke.name.toLowerCase().includes("hearth flame")&&(M.expandByObject(ne),ne.castShadow=!1,ke.depthWrite=!1,b.push(ke)))}}),t.add(E),Ag({scene:t,light:x});let I=Km(c.scene,v),S=lg(),C=[],B=0,D=null,R=null;function k({shadows:ne=!1,reflections:ke=!0}={}){B++,ne&&(i.shadowMap.needsUpdate=!0),ke&&D?.invalidate()}let F=I.register,P=ne=>C.push(ne);mm(c.scene,_);let[,H,U]=await Promise.all([fg({scene:t,core:c.scene,loader:a,light:x}),Nm({scene:t,light:x,register:F,loader:a,windows:_,dirty:k,audio:S,camera:n,visitor:()=>R?.mode==="walk"&&!R.inCar?n.position:null,seatedDriver:()=>R?.seated==="driver"}),Bm({scene:t,light:x,register:F,dirty:k,animateRegion:P}),vm(t,x)]);Lg({scene:t,group:m.scene,details:E,light:x}),ng({scene:t,solids:d});let L=og({scene:t,core:c.scene,details:E,animateRegion:P}),O,V=await rg({scene:t,camera:n,loader:a,light:x,register:F,dirty:k,renderer:i,audio:S,onPhotograph:()=>O?.action("photograph-taken")}),j=await Im({scene:t,loader:a,light:x,register:F,dirty:k,audio:S}),Q=await Mm({scene:t,core:c.scene,loader:a,light:x,register:F,dirty:k,animateRegion:P}),q=Cm({scene:t,light:x,register:F,dirty:k,audio:S,animateRegion:P});Ug({scene:t,light:x});let Z=new Hs(16765856,3);Z.target.position.set(0,0,-1),Object.assign(Z.shadow.camera,{left:-23,right:23,top:19,bottom:-20,near:1,far:100}),Z.shadow.mapSize.set(3072,3072),Z.shadow.bias=-22e-5,Z.shadow.normalBias=.018,Z.castShadow=!0,t.add(Z,Z.target);let ue=yg(t,await Nl("practicals.json"));x.listenPractical(ue.setPower);let de=Bg(t);f.connectGround();let $={time:.4,night:0};function ge(ne){ne=md(ne,0,1),ne!==$.time&&D.invalidate(),$.time=ne;let ke=$.night=Ji(.48,.97,ne);x.mixBakes(ke),f(ne),ue(ke);let Ge=Je.lerp(.43,1.23,Ji(0,.77,ne)),Qe=Je.lerp(.51,.058,Ji(0,.6,ne));Z.position.set(-Math.sin(Ge)*46,Math.tan(Qe)*46,Math.cos(Ge)*46-1),Z.color.setRGB(1,.83,.64).lerp(new Oe(1,.424,.112),Ji(.08,.4,ne)).lerp(new Oe(10927359),ke),Z.intensity=Je.lerp(1.94,.988,Ji(.04,.4,ne))*(1-Ji(.54,.76,ne))+.07*ke,ne>.8&&Z.position.set(-27,32,22),t.environmentIntensity=Je.lerp(.87,.024,ke),t.environmentRotation.y=-.285*Math.PI*2,t.fog.color.set(13352104).lerp(new Oe(2503496),ke),t.fog.density=Je.lerp(.0023,.0029,ke),i.toneMappingExposure=Je.lerp(1.05,1.18,ke),i.shadowMap.needsUpdate=!0}let fe=_g({renderer:i,scene:t,camera:n,waterMesh:y}),Be=zm({scene:t,light:x,register:F,dirty:k,audio:S,loader:a,animateRegion:P});xm({scene:t,light:x});let we=Hm({scene:t,light:x,water:fe,register:F,dirty:k,audio:S,fireMaterials:b,detail:E});D=vg(i,t,_,x.setRoomReflection);let ee=Gg(i,t,n,new it().setFromObject(y),M.union(we.fireBounds),C);O=Xm({camera:n,water:fe});let _e=eg({guide:O,onRequestOpen:()=>R?.openMap(),closeGuide:()=>R?.closeMap()});R=pm({camera:n,renderer:i,scene:t,solidRects:[...d,...g],yardFloor:Rg,doors:v,setTime:ge,interactions:I,light:x,audio:S,dirty:k,car:H,water:fe,state:$,rangefinder:V,guide:O,map:_e}),P(R.footsteps.bounds),ge(.4);let be=performance.now(),ve="",Ee=0,Ke=0,Fe=new URLSearchParams(location.search).has("inspect"),nt=[],qe=be,$e=-1e3,z=!1;function Xe(ne){let ke=performance.now(),Ge=(ke-qe)/1e3;qe=ke;let Qe=Math.max(0,(ne-be)/1e3);if(be=ne,document.hidden)return;Fe&&Qe>0&&Qe<.25&&(nt.push(Qe*1e3),nt.length>720&&nt.shift());let G=Math.min(Qe,.06),w=Be.update(G,$);w&&B++;let K=U.update(G),le=Q.update(G),te=q.update(G),Ae=j.update(G);Ae&&B++,we.update(G,$)&&B++;let xe=H.update(G)||w||K||Ae||le||te;(xe&&ne-$e>90||!xe&&z)&&(i.shadowMap.needsUpdate=!0,$e=ne,xe||D.invalidate()),z=xe,R.update(G),O.update(G,R),_e.update(G,R.mode),L.update(G,R.sliders),V.update(G,R.mode),x.syncEmitters();let ie=Math.abs(n.position.x)<9.05&&n.position.z<0&&n.position.z>-11.05,oe=ee.exposure(),Me=ie?md(oe,1.35,Je.lerp(28,3.65,$.night)):md(oe,Je.lerp(1.075,1.15,$.night),Je.lerp(1.45,1.62,$.night));i.toneMappingExposure=Math.abs(i.toneMappingExposure-Me)<.002?Me:Je.damp(i.toneMappingExposure,Me,3.8,Math.min(Qe,.06));let W=V.raised?47:R.mode==="menu"?50:61;Math.abs(n.fov-W)>.08&&(n.fov=Je.damp(n.fov,W,6,Math.min(Qe,.06)),n.updateProjectionMatrix()),ee.pace(Ge,R.mode==="walk"||R.mode==="tour"),fe?.update(Math.min(Qe,.06),$.time);let ce=v.map(se=>(se.position.x*16|0)+"/"+(se.quaternion.y*14|0)).join(",");ce!==ve&&(ve=ce,i.shadowMap.needsUpdate=!0,D.invalidate()),de(n),i.info.reset(),D.update($.night,ne*.001,n.position)&&Ke++,ee.render(B+"|"+$.time+"|"+Ke+"|"+v.map(se=>se.position.x.toFixed(4)+"/"+se.quaternion.y.toFixed(4)).join(","),$.night,R.immersion()),V.afterRender($.time),Ee++}i.setAnimationLoop(Xe);let Ce=innerWidth,Pe=innerHeight;addEventListener("resize",()=>{innerWidth===Ce&&innerHeight===Pe||(Ce=innerWidth,Pe=innerHeight,e(),n.aspect=Ce/Pe,n.updateProjectionMatrix(),ee.resize(),fe?.repaint())}),Fe&&(window.residence={renderer:i,scene:t,camera:n,nav:R,doors:v,interactions:I,household:Be,hearth:we,car:H,rangefinder:V,drapes:L,audio:S,guide:O,map:_e,journal:U,fridge:j,nightstand:Q,top:q,water:fe,setTime:ge,state:$,frameTimes:nt,shadingSize:ee.shadingSize,latest:()=>({frames:Ee,mode:R.mode,geo:i.info.render,position:n.position.toArray()})}),document.body.classList.add("ready"),window.dispatchEvent(new Event("residenceready"))}BE().catch(i=>{console.error(i),RE.textContent="The scene could not load. Reload to try again. "+i.message})});export default DE();
