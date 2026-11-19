var ut=(i,e,t)=>()=>{if(t)throw t[0];try{return i&&(e=i(i=0)),e}catch(n){throw t=[n],n}};var Rg=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};function Bg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Dg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zf(){let i=Ir("canvas");return i.style.display="block",i}function Ua(...i){let e="THREE."+i.shift();Rr?Rr("log",e,...i):console.log(e,...i)}function Vf(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function nt(...i){i=Vf(i);let e="THREE."+i.shift();if(Rr)Rr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ct(...i){i=Vf(i);let e="THREE."+i.shift();if(Rr)Rr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Cs(...i){let e=i.join(" ");e in dd||(dd[e]=!0,nt(...i))}function Hf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function ai(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function _t(i,e,t){return Math.max(e,Math.min(t,i))}function Ou(i,e){return(i%e+e)%e}function Fg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Pg(i,e,t){return i!==e?(t-i)/(e-i):0}function Pa(i,e,t){return(1-t)*i+t*e}function Lg(i,e,t,n){return Pa(i,e,1-Math.exp(-t*n))}function Ng(i,e=1){return e-Math.abs(Ou(i,e*2)-e)}function Ug(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Og(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function kg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Gg(i,e){return i+Math.random()*(e-i)}function Qg(i){return i*(.5-Math.random())}function zg(i){i!==void 0&&(fd=i);let e=fd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vg(i){return i*Fa}function Hg(i){return i*Rs}function Wg(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Kg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ku(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qg(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),p=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*d,c*u,o*l);break;case"YZY":i.set(c*u,o*h,c*d,o*l);break;case"ZXZ":i.set(c*d,c*u,o*h,o*l);break;case"XZX":i.set(o*h,c*p,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*p,o*l);break;case"ZYZ":i.set(c*p,c*f,o*h,o*l);break;default:nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function nl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Gu(i,e){if(e.constructor===Float32Array)return i;let t=nl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Qu(i,e){if(e.constructor===Float32Array)return i;let t=nl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}function Xg(){let i={enabled:!0,workingColorSpace:an,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Dt&&(s.r=Bi(s.r),s.g=Bi(s.g),s.b=Bi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Dt&&(s.r=Er(s.r),s.g=Er(s.g),s.b=Er(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Cn?Cr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[an]:{primaries:e,whitePoint:n,transfer:Cr,toXYZ:Ad,fromXYZ:md,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ht},outputColorSpaceConfig:{drawingBufferColorSpace:ht}},[ht]:{primaries:e,whitePoint:n,transfer:Dt,toXYZ:Ad,fromXYZ:md,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ht}}}),i}function Bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Er(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function Tl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}function Bl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function kl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ms.fromArray(i,r);let o=s.x*Math.abs(Ms.x)+s.y*Math.abs(Ms.y)+s.z*Math.abs(Ms.z),c=e.dot(Ms),l=t.dot(Ms),h=n.dot(Ms);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}function s0(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,s[c]=-l-1,s[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,s[c]=13,s[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(l&8388608)===0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function r0(i){Math.abs(i)>65504&&nt("DataUtils.toHalfFloat(): Value out of range."),i=_t(i,-65504,65504),Ri.floatView[0]=i;let e=Ri.uint32View[0],t=e>>23&511;return Ri.baseTable[t]+((e&8388607)>>Ri.shiftTable[t])}function a0(i){let e=i>>10;return Ri.uint32View[0]=Ri.mantissaTable[Ri.offsetTable[e]+(i&1023)]+Ri.exponentTable[e],Ri.floatView[0]}function Sd(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=ai()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}function Oo(i,e,t,n,s,r){_r.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Sa.x=r*_r.x-s*_r.y,Sa.y=s*_r.x+r*_r.y):Sa.copy(_r),i.copy(e),i.x+=Sa.x,i.y+=Sa.y,i.applyMatrix4(qf)}function f0(i,e,t,n,s,r,a,o){let c;if(e.side===Zt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Ln,o),c===null)return null;Ko.copy(o),Ko.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Ko);return l<t.near||l>t.far?null:{distance:l,point:Ko.clone(),object:i}}function qo(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,zo),i.getVertexPosition(c,Vo),i.getVertexPosition(l,Ho);let h=f0(i,e,t,n,zo,Vo,Ho,Rd);if(h){let d=new T;ii.getBarycoord(Rd,zo,Vo,Ho,d),s&&(h.uv=ii.getInterpolatedAttribute(s,o,c,l,d,new ge)),r&&(h.uv1=ii.getInterpolatedAttribute(r,o,c,l,d,new ge)),a&&(h.normal=ii.getInterpolatedAttribute(a,o,c,l,d,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new T,materialIndex:0};ii.getNormal(zo,Vo,Ho,u.normal),h.face=u,h.barycoord=d}return h}function Zo(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(gc.fromBufferAttribute(o,s),xc.fromBufferAttribute(o,r),t.distanceSqToSegment(gc,xc,Xl,Gd)>n)return;Xl.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Xl);if(!(l<e.near||l>e.far))return{distance:l,point:Gd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}function Hd(i,e,t,n,s,r,a){let o=ru.distanceSqToPoint(i);if(o<t){let c=new T;ru.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}function zu(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+d)+(c-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}function qd(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function x0(i,e){let t=1-i;return t*t*e}function _0(i,e){return 2*(1-i)*i*e}function b0(i,e){return i*i*e}function La(i,e,t,n){return x0(i,e)+_0(i,t)+b0(i,n)}function v0(i,e){let t=1-i;return t*t*t*e}function y0(i,e){let t=1-i;return 3*t*t*i*e}function M0(i,e){return 3*(1-i)*i*i*e}function E0(i,e){return i*i*i*e}function Na(i,e,t,n,s){return v0(i,e)+y0(i,t)+M0(i,n)+E0(i,s)}function S0(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Xf(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=R0(i,e,r,t)),i.length>80*t){o=i[0],c=i[1];let h=o,d=c;for(let u=t;u<s;u+=t){let f=i[u],p=i[u+1];f<o&&(o=f),p<c&&(c=p),f>h&&(h=f),p>d&&(d=p)}l=Math.max(h-o,d-c),l=l!==0?32767/l:0}return io(r,a,t,o,c,l,0),a}function Xf(i,e,t,n,s){let r;if(s===Q0(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Xd(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Xd(a/n|0,i[a],i[a+1],r);return r&&Gr(r,r.next)&&(ro(r),r=r.next),r}function Ls(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Gr(t,t.next)||Kt(t.prev,t,t.next)===0)){if(ro(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function io(i,e,t,n,s,r,a){if(!i)return;!a&&r&&L0(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?C0(i,n,s,r):w0(i)){e.push(c.i,i.i,l.i),ro(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=T0(Ls(i),e),io(i,e,t,n,s,r,2)):a===2&&I0(i,e,t,n,s,r):io(Ls(i),e,t,n,s,r,1);break}}}function w0(i){let e=i.prev,t=i,n=i.next;if(Kt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(s,r,a),d=Math.min(o,c,l),u=Math.max(s,r,a),f=Math.max(o,c,l),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&Ba(s,o,r,c,a,l,p.x,p.y)&&Kt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function C0(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Kt(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,c,l),p=Math.min(h,d,u),g=Math.max(o,c,l),m=Math.max(h,d,u),A=au(f,p,e,t,n),x=au(g,m,e,t,n),v=i.prevZ,_=i.nextZ;for(;v&&v.z>=A&&_&&_.z<=x;){if(v.x>=f&&v.x<=g&&v.y>=p&&v.y<=m&&v!==s&&v!==a&&Ba(o,h,c,d,l,u,v.x,v.y)&&Kt(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=f&&_.x<=g&&_.y>=p&&_.y<=m&&_!==s&&_!==a&&Ba(o,h,c,d,l,u,_.x,_.y)&&Kt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=A;){if(v.x>=f&&v.x<=g&&v.y>=p&&v.y<=m&&v!==s&&v!==a&&Ba(o,h,c,d,l,u,v.x,v.y)&&Kt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=x;){if(_.x>=f&&_.x<=g&&_.y>=p&&_.y<=m&&_!==s&&_!==a&&Ba(o,h,c,d,l,u,_.x,_.y)&&Kt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function T0(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Gr(n,s)&&Yf(n,t,t.next,s)&&so(n,s)&&so(s,n)&&(e.push(n.i,t.i,s.i),ro(t),ro(t.next),t=i=s),t=t.next}while(t!==i);return Ls(t)}function I0(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&O0(a,o)){let c=jf(a,o);a=Ls(a,a.next),c=Ls(c,c.next),io(a,e,t,n,s,r,0),io(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function R0(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=Xf(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(U0(l))}s.sort(B0);for(let r=0;r<s.length;r++)t=D0(s[r],t);return t}function B0(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function D0(i,e){let t=F0(i,e);if(!t)return e;let n=jf(t,i);return Ls(n,n.next),Ls(t,t.next)}function F0(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Gr(i,t))return t;do{if(Gr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Jf(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);so(t,i)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&P0(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function P0(i,e){return Kt(i.prev,i,e.prev)<0&&Kt(e.next,i,i.next)<0}function L0(i,e,t,n){let s=i;do s.z===0&&(s.z=au(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,N0(s)}function N0(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function au(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function U0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Jf(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Ba(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Jf(i,e,t,n,s,r,a,o)}function O0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!k0(i,e)&&(so(i,e)&&so(e,i)&&G0(i,e)&&(Kt(i.prev,i,e.prev)||Kt(i,e.prev,e))||Gr(i,e)&&Kt(i.prev,i,i.next)>0&&Kt(e.prev,e,e.next)>0)}function Kt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Gr(i,e){return i.x===e.x&&i.y===e.y}function Yf(i,e,t,n){let s=nc(Kt(i,e,t)),r=nc(Kt(i,e,n)),a=nc(Kt(t,n,i)),o=nc(Kt(t,n,e));return!!(s!==r&&a!==o||s===0&&tc(i,t,e)||r===0&&tc(i,n,e)||a===0&&tc(t,i,n)||o===0&&tc(t,e,n))}function tc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function nc(i){return i>0?1:i<0?-1:0}function k0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Yf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function so(i,e){return Kt(i.prev,i,i.next)<0?Kt(i,e,i.next)>=0&&Kt(i,i.prev,e)>=0:Kt(i,e,i.prev)<0||Kt(i,i.next,e)<0}function G0(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function jf(i,e){let t=ou(i.i,i.x,i.y),n=ou(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Xd(i,e,t,n){let s=ou(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ro(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ou(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Q0(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}function Jd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Yd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}function V0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}function $s(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(jd(s))s.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(jd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function bn(i){let e={};for(let t=0;t<i.length;t++){let n=$s(i[t]);for(let s in n)e[s]=n[s]}return e}function jd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function H0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Vu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}function ts(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Da(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function q0(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Zd(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function X0(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}function Zf(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function J0(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Y0(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Zf(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=J0(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}function $d(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function ef(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}function j0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Li;case"vector":case"vector2":case"vector3":case"vector4":return us;case"color":return ao;case"quaternion":return Ni;case"bool":case"boolean":return Pi;case"string":return Ui}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Z0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=j0(i.type);if(i.times===void 0){let n=[],s=[];X0(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Da(i.settings)&&(t.settings={inTangents:ts(i.settings.inTangents,Float32Array),outTangents:ts(i.settings.outTangents,Float32Array)}),t}function tf(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}function cf(i,e){return i.distance-e.distance}function pu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)pu(r[a],e,t,!0)}}function Ku(i,e,t,n){let s=ox(n);switch(t){case Bu:return i*e;case jn:return i*e/s.components*s.byteLength;case Oc:return i*e/s.components*s.byteLength;case Nn:return i*e*2/s.components*s.byteLength;case kc:return i*e*2/s.components*s.byteLength;case Ks:return i*e*3/s.components*s.byteLength;case jt:return i*e*4/s.components*s.byteLength;case Gc:return i*e*4/s.components*s.byteLength;case ps:case zi:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fo:case Vi:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qc:case qs:return Math.max(i,16)*Math.max(e,8)/4;case $r:case As:return Math.max(i,8)*Math.max(e,8)/2;case ea:case Xs:case ta:case na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Js:case Ys:case ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hi:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Vc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ms:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Wc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case qc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Xc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Yc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case jc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Zc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case $c:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case gs:case el:case sa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ra:case aa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case js:case oa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ox(i){switch(i){case ot:case Iu:return{byteLength:1,components:1};case Gi:case Ru:case Ct:return{byteLength:2,components:1};case Nc:case Uc:return{byteLength:2,components:4};case wn:case Lc:case Yt:return{byteLength:4,components:1};case jr:case Zr:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}var lf,mu,uf,zs,hf,Wr,Ln,Zt,Lt,ki,Kr,uo,gu,xu,df,Vs,ff,pf,Af,mf,gf,xf,_f,bf,_u,bu,vf,yf,Mf,Ef,Sf,wf,Cf,Tf,If,oc,cc,lc,Sr,uc,hc,dc,fc,vu,Rf,Bf,_i,yu,Mu,Eu,ho,Su,wu,Cu,eu,Df,Tu,fs,qr,Xr,Pc,rn,En,wr,Pt,Jr,Hs,vt,Yr,Ht,ot,Iu,Ru,Gi,Lc,wn,Yt,Ct,Nc,Uc,Ws,jr,Zr,Bu,Ks,jt,Di,Qi,jn,Oc,Nn,kc,Gc,ps,zi,fo,Vi,$r,Qc,As,qs,ea,Xs,Js,ta,na,Ys,ia,Hi,zc,Vc,Hc,ms,Wc,Kc,qc,Xc,Jc,Yc,jc,Zc,$c,gs,el,sa,ra,aa,js,oa,Ts,Is,rc,tu,nu,iu,su,Ff,Du,po,ca,Pf,tl,Lf,Cn,ht,an,Cr,Dt,ac,Nf,Uf,Of,kf,Fu,Gf,Qf,Pu,Lu,Nu,Zs,Uu,Jn,Tr,dd,Rr,Wf,pi,gn,fd,Fa,Rs,Ye,ge,Gt,T,wl,pd,rt,Cl,Ad,md,xt,ar,pc,Jg,Br,Yg,Il,nn,mt,Ac,qt,Oa,ns,Be,or,ei,jg,Zg,Yi,Io,On,gd,xd,Gn,Dr,$g,_d,cr,Ei,Ro,ba,e0,t0,bd,vd,yd,Md,n0,lr,Rl,Ft,st,i0,Fr,Kf,ji,Bo,We,xn,ka,Bs,ti,Si,Dl,wi,ur,hr,Ed,Fl,Pl,Ll,Nl,Ul,Ol,ii,it,Ci,ni,Do,dr,fr,pr,Zi,$i,ys,va,Fo,Po,Ms,Ri,Ai,tn,Lo,o0,St,Ga,Qa,Ke,c0,ya,Gl,_n,l0,Xn,Ql,Ar,kn,Ma,hn,lt,Ds,yn,is,zl,u0,h0,Mn,d0,Sn,Pr,mr,Ea,gr,xr,_r,Sa,qf,No,wa,Uo,wd,Vl,Cd,za,Ti,Hl,ko,Go,ss,Rn,Td,Es,Qo,Id,zo,Vo,Ho,Wl,Wo,Rd,Ko,Qe,Ca,Bd,Dd,p0,Fd,Xo,Kl,Pd,ql,Va,Lr,Bn,Ld,A0,Ha,Dn,br,Nd,Jo,Ud,m0,Ta,Ia,Fn,Ss,g0,Yo,Yn,Od,mc,Nr,gc,xc,kd,Ra,jo,Xl,Gd,Fs,Qd,zd,Wa,Ka,Ur,Vd,ru,$o,ec,qa,rs,Xa,Or,Ja,si,Qn,Ya,ja,Nt,Za,as,Qt,_c,zn,os,bc,Wd,Kd,Jl,Yl,jl,mi,$a,vc,eo,Ps,to,cs,no,yc,kr,Fi,ls,cu,ws,Ns,z0,Qr,zr,Vn,Hn,Us,gi,il,W0,K0,Ut,Mc,at,Xt,Ec,Sc,xi,wc,Cc,Tc,Ic,Pn,Pi,ao,Li,Rc,Ni,Ui,us,oo,fi,Bc,$f,Wn,Ii,lu,ri,vr,Dc,co,fn,Vr,Zl,nf,sf,Hr,ic,sc,di,Os,es,rf,af,sn,uu,ks,hu,Kn,Gs,du,Qs,Oi,$l,lo,yr,Mr,hs,Fc,Hu,$0,Wu,ex,tx,nx,ix,sx,rx,ax,fu,Bt,mE,of,ds,Au,qu=ut(()=>{lf=0,mu=1,uf=2,zs=1,hf=2,Wr=3,Ln=0,Zt=1,Lt=2,ki=0,Kr=1,uo=2,gu=3,xu=4,df=5,Vs=100,ff=101,pf=102,Af=103,mf=104,gf=200,xf=201,_f=202,bf=203,_u=204,bu=205,vf=206,yf=207,Mf=208,Ef=209,Sf=210,wf=211,Cf=212,Tf=213,If=214,oc=0,cc=1,lc=2,Sr=3,uc=4,hc=5,dc=6,fc=7,vu=0,Rf=1,Bf=2,_i=0,yu=1,Mu=2,Eu=3,ho=4,Su=5,wu=6,Cu=7,eu="attached",Df="detached",Tu=300,fs=301,qr=302,Xr=303,Pc=304,rn=1e3,En=1001,wr=1002,Pt=1003,Jr=1004,Hs=1005,vt=1006,Yr=1007,Ht=1008,ot=1009,Iu=1010,Ru=1011,Gi=1012,Lc=1013,wn=1014,Yt=1015,Ct=1016,Nc=1017,Uc=1018,Ws=1020,jr=35902,Zr=35899,Bu=1021,Ks=1022,jt=1023,Di=1026,Qi=1027,jn=1028,Oc=1029,Nn=1030,kc=1031,Gc=1033,ps=33776,zi=33777,fo=33778,Vi=33779,$r=35840,Qc=35841,As=35842,qs=35843,ea=36196,Xs=37492,Js=37496,ta=37488,na=37489,Ys=37490,ia=37491,Hi=37808,zc=37809,Vc=37810,Hc=37811,ms=37812,Wc=37813,Kc=37814,qc=37815,Xc=37816,Jc=37817,Yc=37818,jc=37819,Zc=37820,$c=37821,gs=36492,el=36494,sa=36495,ra=36283,aa=36284,js=36285,oa=36286,Ts=2300,Is=2301,rc=2302,tu=2303,nu=2400,iu=2401,su=2402,Ff=2500,Du=0,po=1,ca=2,Pf=3200,tl=0,Lf=1,Cn="",ht="srgb",an="srgb-linear",Cr="linear",Dt="srgb",ac=7680,Nf=519,Uf=512,Of=513,kf=514,Fu=515,Gf=516,Qf=517,Pu=518,Lu=519,Nu=35044,Zs=35048,Uu="300 es",Jn=2e3,Tr=2001;dd={},Rr=null;Wf={[oc]:oc,[lc]:dc,[uc]:uc,[Sr]:hc,[cc]:cc,[dc]:lc,[fc]:fc,[hc]:Sr},pi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fd=1234567,Fa=Math.PI/180,Rs=180/Math.PI;Ye={DEG2RAD:Fa,RAD2DEG:Rs,generateUUID:ai,clamp:_t,euclideanModulo:Ou,mapLinear:Fg,inverseLerp:Pg,lerp:Pa,damp:Lg,pingpong:Ng,smoothstep:Ug,smootherstep:Og,randInt:kg,randFloat:Gg,randFloatSpread:Qg,seededRandom:zg,degToRad:Vg,radToDeg:Hg,isPowerOfTwo:Wg,ceilPowerOfTwo:Kg,floorPowerOfTwo:ku,setQuaternionFromProperEuler:qg,normalize:Qu,denormalize:Gu},ge=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Gt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],p=r[a+2],g=r[a+3];if(d!==g||c!==u||l!==f||h!==p){let m=c*u+l*f+h*p+d*g;m<0&&(u=-u,f=-f,p=-p,g=-g,m=-m);let A=1-o;if(m<.9995){let x=Math.acos(m),v=Math.sin(x);A=Math.sin(A*x)/v,o=Math.sin(o*x)/v,c=c*A+u*o,l=l*A+f*o,h=h*A+p*o,d=d*A+g*o}else{c=c*A+u*o,l=l*A+f*o,h=h*A+p*o,d=d*A+g*o;let x=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=x,l*=x,h*=x,d*=x}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+h*d+c*f-l*u,e[t+1]=c*p+h*u+l*d-o*f,e[t+2]=l*p+h*f+o*u-c*d,e[t+3]=h*p-o*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),u=c(n/2),f=c(s/2),p=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*f*p,this._y=l*f*d-u*h*p,this._z=l*h*p+u*f*d,this._w=l*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+l*f*p,this._y=l*f*d-u*h*p,this._z=l*h*p-u*f*d,this._w=l*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-l*f*p,this._y=l*f*d+u*h*p,this._z=l*h*p+u*f*d,this._w=l*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-l*f*p,this._y=l*f*d+u*h*p,this._z=l*h*p-u*f*d,this._w=l*h*d+u*f*p;break;case"YZX":this._x=u*h*d+l*f*p,this._y=l*f*d+u*h*p,this._z=l*h*p-u*f*d,this._w=l*h*d-u*f*p;break;case"XZY":this._x=u*h*d-l*f*p,this._y=l*f*d-u*h*p,this._z=l*h*p+u*f*d,this._w=l*h*d+u*f*p;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wl.copy(this).projectOnVector(e),this.sub(wl)}reflect(e){return this.sub(wl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},wl=new T,pd=new Gt,rt=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],g=s[0],m=s[3],A=s[6],x=s[1],v=s[4],_=s[7],M=s[2],E=s[5],b=s[8];return r[0]=a*g+o*x+c*M,r[3]=a*m+o*v+c*E,r[6]=a*A+o*_+c*b,r[1]=l*g+h*x+d*M,r[4]=l*m+h*v+d*E,r[7]=l*A+h*_+d*b,r[2]=u*g+f*x+p*M,r[5]=u*m+f*v+p*E,r[8]=u*A+f*_+p*b,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,p=t*d+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/p;return e[0]=d*g,e[1]=(s*l-h*n)*g,e[2]=(o*n-s*a)*g,e[3]=u*g,e[4]=(h*t-s*c)*g,e[5]=(s*r-o*t)*g,e[6]=f*g,e[7]=(n*c-l*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Cs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Cl.makeScale(e,t)),this}rotate(e){return Cs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Cl.makeRotation(-e)),this}translate(e,t){return Cs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Cl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Cl=new rt,Ad=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),md=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);xt=Xg();pc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ar===void 0&&(ar=Ir("canvas")),ar.width=e.width,ar.height=e.height;let s=ar.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ar}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ir("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Bi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bi(t[n]/255)*255):t[n]=Bi(t[n]);return{data:t,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Jg=0,Br=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=ai(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Tl(s[a].image)):r.push(Tl(s[a]))}else r=Tl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};Yg=0,Il=new T,nn=class i extends pi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=En,s=En,r=vt,a=Ht,o=jt,c=ot,l=i.DEFAULT_ANISOTROPY,h=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=ai(),this.name="",this.source=new Br(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Il).x}get height(){return this.source.getSize(Il).y}get depth(){return this.source.getSize(Il).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){nt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){nt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rn:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case wr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rn:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case wr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Tu;nn.DEFAULT_ANISOTROPY=1;mt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],p=c[9],g=c[2],m=c[6],A=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(p+m)<.1&&Math.abs(l+f+A-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,_=(f+1)/2,M=(A+1)/2,E=(h+u)/4,b=(d+g)/4,y=(p+m)/4;return v>_&&v>M?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=E/n,r=b/n):_>M?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=y/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=b/r,s=y/r),this.set(n,s,r,t),this}let x=Math.sqrt((m-p)*(m-p)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(d-g)/x,this.z=(u-h)/x,this.w=Math.acos((l+f+A-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ac=class extends pi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new nn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Br(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},qt=class extends Ac{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Oa=class extends nn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},ns=class extends nn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Be=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,c,l,h,d,u,f,p,g,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,d,u,f,p,g,m)}set(e,t,n,s,r,a,o,c,l,h,d,u,f,p,g,m){let A=this.elements;return A[0]=e,A[4]=t,A[8]=n,A[12]=s,A[1]=r,A[5]=a,A[9]=o,A[13]=c,A[2]=l,A[6]=h,A[10]=d,A[14]=u,A[3]=f,A[7]=p,A[11]=g,A[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/or.setFromMatrixColumn(e,0).length(),r=1/or.setFromMatrixColumn(e,1).length(),a=1/or.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,p=o*h,g=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+p*l,t[5]=u-g*l,t[9]=-o*c,t[2]=g-u*l,t[6]=p+f*l,t[10]=a*c}else if(e.order==="YXZ"){let u=c*h,f=c*d,p=l*h,g=l*d;t[0]=u+g*o,t[4]=p*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-p,t[6]=g+u*o,t[10]=a*c}else if(e.order==="ZXY"){let u=c*h,f=c*d,p=l*h,g=l*d;t[0]=u-g*o,t[4]=-a*d,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*h,t[9]=g-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let u=a*h,f=a*d,p=o*h,g=o*d;t[0]=c*h,t[4]=p*l-f,t[8]=u*l+g,t[1]=c*d,t[5]=g*l+u,t[9]=f*l-p,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let u=a*c,f=a*l,p=o*c,g=o*l;t[0]=c*h,t[4]=g-u*d,t[8]=p*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*d+p,t[10]=u-g*d}else if(e.order==="XZY"){let u=a*c,f=a*l,p=o*c,g=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+g,t[5]=a*h,t[9]=f*d-p,t[2]=p*d-f,t[6]=o*h,t[10]=g*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jg,e,Zg)}lookAt(e,t,n){let s=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),Yi.crossVectors(n,On),Yi.lengthSq()===0&&(Math.abs(n.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),Yi.crossVectors(n,On)),Yi.normalize(),Io.crossVectors(On,Yi),s[0]=Yi.x,s[4]=Io.x,s[8]=On.x,s[1]=Yi.y,s[5]=Io.y,s[9]=On.y,s[2]=Yi.z,s[6]=Io.z,s[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],g=n[6],m=n[10],A=n[14],x=n[3],v=n[7],_=n[11],M=n[15],E=s[0],b=s[4],y=s[8],I=s[12],S=s[1],C=s[5],w=s[9],B=s[13],R=s[2],U=s[6],P=s[10],F=s[14],H=s[3],O=s[7],L=s[11],G=s[15];return r[0]=a*E+o*S+c*R+l*H,r[4]=a*b+o*C+c*U+l*O,r[8]=a*y+o*w+c*P+l*L,r[12]=a*I+o*B+c*F+l*G,r[1]=h*E+d*S+u*R+f*H,r[5]=h*b+d*C+u*U+f*O,r[9]=h*y+d*w+u*P+f*L,r[13]=h*I+d*B+u*F+f*G,r[2]=p*E+g*S+m*R+A*H,r[6]=p*b+g*C+m*U+A*O,r[10]=p*y+g*w+m*P+A*L,r[14]=p*I+g*B+m*F+A*G,r[3]=x*E+v*S+_*R+M*H,r[7]=x*b+v*C+_*U+M*O,r[11]=x*y+v*w+_*P+M*L,r[15]=x*I+v*B+_*F+M*G,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],p=e[3],g=e[7],m=e[11],A=e[15],x=c*f-l*u,v=o*f-l*d,_=o*u-c*d,M=a*f-l*h,E=a*u-c*h,b=a*d-o*h;return t*(g*x-m*v+A*_)-n*(p*x-m*M+A*E)+s*(p*v-g*M+A*b)-r*(p*_-g*E+m*b)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],p=e[12],g=e[13],m=e[14],A=e[15],x=t*o-n*a,v=t*c-s*a,_=t*l-r*a,M=n*c-s*o,E=n*l-r*o,b=s*l-r*c,y=h*g-d*p,I=h*m-u*p,S=h*A-f*p,C=d*m-u*g,w=d*A-f*g,B=u*A-f*m,R=x*B-v*w+_*C+M*S-E*I+b*y;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/R;return e[0]=(o*B-c*w+l*C)*U,e[1]=(s*w-n*B-r*C)*U,e[2]=(g*b-m*E+A*M)*U,e[3]=(u*E-d*b-f*M)*U,e[4]=(c*S-a*B-l*I)*U,e[5]=(t*B-s*S+r*I)*U,e[6]=(m*_-p*b-A*v)*U,e[7]=(h*b-u*_+f*v)*U,e[8]=(a*w-o*S+l*y)*U,e[9]=(n*S-t*w-r*y)*U,e[10]=(p*E-g*_+A*x)*U,e[11]=(d*_-h*E-f*x)*U,e[12]=(o*I-a*C-c*y)*U,e[13]=(t*C-n*I+s*y)*U,e[14]=(g*v-p*M-m*x)*U,e[15]=(h*M-d*v+u*x)*U,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,p=r*d,g=a*h,m=a*d,A=o*d,x=c*l,v=c*h,_=c*d,M=n.x,E=n.y,b=n.z;return s[0]=(1-(g+A))*M,s[1]=(f+_)*M,s[2]=(p-v)*M,s[3]=0,s[4]=(f-_)*E,s[5]=(1-(u+A))*E,s[6]=(m+x)*E,s[7]=0,s[8]=(p+v)*b,s[9]=(m-x)*b,s[10]=(1-(u+g))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=or.set(s[0],s[1],s[2]).length(),o=or.set(s[4],s[5],s[6]).length(),c=or.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ei.copy(this);let l=1/a,h=1/o,d=1/c;return ei.elements[0]*=l,ei.elements[1]*=l,ei.elements[2]*=l,ei.elements[4]*=h,ei.elements[5]*=h,ei.elements[6]*=h,ei.elements[8]*=d,ei.elements[9]*=d,ei.elements[10]*=d,t.setFromRotationMatrix(ei),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=Jn,c=!1){let l=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),p,g;if(c)p=r/(a-r),g=a*r/(a-r);else if(o===Jn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Tr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Jn,c=!1){let l=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),p,g;if(c)p=1/(a-r),g=a/(a-r);else if(o===Jn)p=-2/(a-r),g=-(a+r)/(a-r);else if(o===Tr)p=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},or=new T,ei=new Be,jg=new T(0,0,0),Zg=new T(1,1,1),Yi=new T,Io=new T,On=new T,gd=new Be,xd=new Gt,Gn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(_t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xd.setFromEuler(this),this.setFromQuaternion(xd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gn.DEFAULT_ORDER="XYZ";Dr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},$g=0,_d=new T,cr=new Gt,Ei=new Be,Ro=new T,ba=new T,e0=new T,t0=new Gt,bd=new T(1,0,0),vd=new T(0,1,0),yd=new T(0,0,1),Md={type:"added"},n0={type:"removed"},lr={type:"childadded",child:null},Rl={type:"childremoved",child:null},Ft=class i extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new T,t=new Gn,n=new Gt,s=new T(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Be},normalMatrix:{value:new rt}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.multiply(cr),this}rotateOnWorldAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.premultiply(cr),this}rotateX(e){return this.rotateOnAxis(bd,e)}rotateY(e){return this.rotateOnAxis(vd,e)}rotateZ(e){return this.rotateOnAxis(yd,e)}translateOnAxis(e,t){return _d.copy(e).applyQuaternion(this.quaternion),this.position.add(_d.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bd,e)}translateY(e){return this.translateOnAxis(vd,e)}translateZ(e){return this.translateOnAxis(yd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ro.copy(e):Ro.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(ba,Ro,this.up):Ei.lookAt(Ro,ba,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),cr.setFromRotationMatrix(Ei),this.quaternion.premultiply(cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Md),lr.child=e,this.dispatchEvent(lr),lr.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(n0),Rl.child=e,this.dispatchEvent(Rl),Rl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Md),lr.child=e,this.dispatchEvent(lr),lr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,e,e0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,t0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ft.DEFAULT_UP=new T(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;st=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},i0={type:"move"},Fr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new st,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new st,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new st,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,n),A=this._getHandJoint(l,g);m!==null&&(A.matrix.fromArray(m.transform.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale),A.matrixWorldNeedsUpdate=!0,A.jointRadius=m.radius),A.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;l.inputState.pinching&&u>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(i0)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new st;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Kf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},Bo={h:0,s:0,l:0};We=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=xt.workingColorSpace){if(e=Ou(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Bl(a,r,e+1/3),this.g=Bl(a,r,e),this.b=Bl(a,r,e-1/3)}return xt.colorSpaceToWorking(this,s),this}setStyle(e,t=ht){function n(r){r!==void 0&&parseFloat(r)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:nt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ht){let n=Kf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ht){return xt.workingToColorSpace(xn.copy(this),e),Math.round(_t(xn.r*255,0,255))*65536+Math.round(_t(xn.g*255,0,255))*256+Math.round(_t(xn.b*255,0,255))}getHexString(e=ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(xn.copy(this),t);let n=xn.r,s=xn.g,r=xn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=ht){xt.workingToColorSpace(xn.copy(this),e);let t=xn.r,n=xn.g,s=xn.b;return e!==ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+t,ji.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ji),e.getHSL(Bo);let n=Pa(ji.h,Bo.h,t),s=Pa(ji.s,Bo.s,t),r=Pa(ji.l,Bo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new We;We.NAMES=Kf;ka=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new We(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Bs=class extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ti=new T,Si=new T,Dl=new T,wi=new T,ur=new T,hr=new T,Ed=new T,Fl=new T,Pl=new T,Ll=new T,Nl=new mt,Ul=new mt,Ol=new mt,ii=class i{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ti.subVectors(e,t),s.cross(ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ti.subVectors(s,t),Si.subVectors(n,t),Dl.subVectors(e,t);let a=ti.dot(ti),o=ti.dot(Si),c=ti.dot(Dl),l=Si.dot(Si),h=Si.dot(Dl),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-o*h)*u,p=(a*h-o*c)*u;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,wi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,wi.x),c.addScaledVector(a,wi.y),c.addScaledVector(o,wi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Nl.setScalar(0),Ul.setScalar(0),Ol.setScalar(0),Nl.fromBufferAttribute(e,t),Ul.fromBufferAttribute(e,n),Ol.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Nl,r.x),a.addScaledVector(Ul,r.y),a.addScaledVector(Ol,r.z),a}static isFrontFacing(e,t,n,s){return ti.subVectors(n,t),Si.subVectors(e,t),ti.cross(Si).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),ti.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;ur.subVectors(s,n),hr.subVectors(r,n),Fl.subVectors(e,n);let c=ur.dot(Fl),l=hr.dot(Fl);if(c<=0&&l<=0)return t.copy(n);Pl.subVectors(e,s);let h=ur.dot(Pl),d=hr.dot(Pl);if(h>=0&&d<=h)return t.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(ur,a);Ll.subVectors(e,r);let f=ur.dot(Ll),p=hr.dot(Ll);if(p>=0&&f<=p)return t.copy(r);let g=f*l-c*p;if(g<=0&&l>=0&&p<=0)return o=l/(l-p),t.copy(n).addScaledVector(hr,o);let m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return Ed.subVectors(r,s),o=(d-h)/(d-h+(f-p)),t.copy(s).addScaledVector(Ed,o);let A=1/(m+g+u);return a=g*A,o=u*A,t.copy(n).addScaledVector(ur,a).addScaledVector(hr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},it=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ni):ni.fromBufferAttribute(r,a),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Do.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Do.copy(n.boundingBox)),Do.applyMatrix4(e.matrixWorld),this.union(Do)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(va),Fo.subVectors(this.max,va),dr.subVectors(e.a,va),fr.subVectors(e.b,va),pr.subVectors(e.c,va),Zi.subVectors(fr,dr),$i.subVectors(pr,fr),ys.subVectors(dr,pr);let t=[0,-Zi.z,Zi.y,0,-$i.z,$i.y,0,-ys.z,ys.y,Zi.z,0,-Zi.x,$i.z,0,-$i.x,ys.z,0,-ys.x,-Zi.y,Zi.x,0,-$i.y,$i.x,0,-ys.y,ys.x,0];return!kl(t,dr,fr,pr,Fo)||(t=[1,0,0,0,1,0,0,0,1],!kl(t,dr,fr,pr,Fo))?!1:(Po.crossVectors(Zi,$i),t=[Po.x,Po.y,Po.z],kl(t,dr,fr,pr,Fo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ci=[new T,new T,new T,new T,new T,new T,new T,new T],ni=new T,Do=new it,dr=new T,fr=new T,pr=new T,Zi=new T,$i=new T,ys=new T,va=new T,Fo=new T,Po=new T,Ms=new T;Ri=s0();Ai=class{static toHalfFloat(e){return r0(e)}static fromHalfFloat(e){return a0(e)}},tn=new T,Lo=new ge,o0=0,St=class extends pi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:o0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Nu,this.updateRanges=[],this.gpuType=Yt,this.version=0,this._normalizationScale=e!==void 0?nl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Lo.fromBufferAttribute(this,t),Lo.applyMatrix3(e),this.setXY(t,Lo.x,Lo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Gu(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Qu(e,this.array)}},Ga=class extends St{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Qa=class extends St{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Ke=class extends St{constructor(e,t,n){super(new Float32Array(e),t,n)}},c0=new it,ya=new T,Gl=new T,_n=class{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):c0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ya.subVectors(e,this.center);let t=ya.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ya,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ya.copy(e.center).add(Gl)),this.expandByPoint(ya.copy(e.center).sub(Gl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},l0=0,Xn=new Be,Ql=new Ft,Ar=new T,kn=new it,Ma=new it,hn=new T,lt=class i extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bg(e)?Qa:Ga)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new rt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,t,n){return Xn.makeTranslation(e,t,n),this.applyMatrix4(Xn),this}scale(e,t,n){return Xn.makeScale(e,t,n),this.applyMatrix4(Xn),this}lookAt(e){return Ql.lookAt(e),Ql.updateMatrix(),this.applyMatrix4(Ql.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ke(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new it);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];kn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){let n=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ma.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(kn.min,Ma.min),kn.expandByPoint(hn),hn.addVectors(kn.max,Ma.max),kn.expandByPoint(hn)):(kn.expandByPoint(Ma.min),kn.expandByPoint(Ma.max))}kn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)hn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(hn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)hn.fromBufferAttribute(o,l),c&&(Ar.fromBufferAttribute(e,l),hn.add(Ar)),s=Math.max(s,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new St(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let I=0;I<n.count;I++)o[I]=new T,c[I]=new T;let h=new T,d=new T,u=new T,f=new ge,p=new ge,g=new ge,m=new T,A=new T;function x(I,S,C){l[I]=l[S]=l[C]=1,h.fromBufferAttribute(n,I),d.fromBufferAttribute(n,S),u.fromBufferAttribute(n,C),f.fromBufferAttribute(r,I),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,C),d.sub(h),u.sub(h),p.sub(f),g.sub(f);let w=1/(p.x*g.y-g.x*p.y);isFinite(w)&&(m.copy(d).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(w),A.copy(u).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(w),o[I].add(m),o[S].add(m),o[C].add(m),c[I].add(A),c[S].add(A),c[C].add(A))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let I=0,S=v.length;I<S;++I){let C=v[I],w=C.start,B=C.count;for(let R=w,U=w+B;R<U;R+=3)x(e.getX(R+0),e.getX(R+1),e.getX(R+2))}let _=new T,M=new T,E=new T,b=new T;function y(I){E.fromBufferAttribute(s,I),b.copy(E);let S=o[I];_.copy(S),_.sub(E.multiplyScalar(E.dot(S))).normalize(),M.crossVectors(b,S);let w=M.dot(c[I])<0?-1:1;a.setXYZW(I,_.x,_.y,_.z,w)}for(let I=0,S=n.count;I<S;++I)l[I]&&y(I);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new St(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new T,r=new T,a=new T,o=new T,c=new T,l=new T,h=new T,d=new T;if(e)for(let u=0,f=e.count;u<f;u+=3){let p=e.getX(u+0),g=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,p),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),f=0,p=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?f=c[g]*o.data.stride+o.offset:f=c[g]*h;for(let A=0;A<h;A++)u[p++]=l[f++]}return new St(u,h,d)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=e(u,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ds=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nu,this.updateRanges=[],this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Sd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Sd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};yn=new T,is=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?nl(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ua("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new St(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ua("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Gu(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Qu(e,this.data.array)}},zl=new T,u0=new T,h0=new rt,Mn=class{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=zl.subVectors(n,t).cross(u0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(zl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||h0.getNormalMatrix(e),s=this.coplanarPoint(zl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},d0=0,Sn=class extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=Kr,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_u,this.blendDst=bu,this.blendEquation=Vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ac,this.stencilZFail=ac,this.stencilZPass=ac,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){nt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){nt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new We().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Mn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ge().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ge().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Pr=class extends Sn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ea=new T,gr=new T,xr=new T,_r=new ge,Sa=new ge,qf=new Be,No=new T,wa=new T,Uo=new T,wd=new ge,Vl=new ge,Cd=new ge,za=class extends Ft{constructor(e=new Pr){if(super(),this.isSprite=!0,this.type="Sprite",mr===void 0){mr=new lt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ds(t,5);mr.setIndex([0,1,2,0,2,3]),mr.setAttribute("position",new is(n,3,0,!1)),mr.setAttribute("uv",new is(n,2,3,!1))}this.geometry=mr,this.material=e,this.center=new ge(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&ct('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gr.setFromMatrixScale(this.matrixWorld),qf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),xr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gr.multiplyScalar(-xr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Oo(No.set(-.5,-.5,0),xr,a,gr,s,r),Oo(wa.set(.5,-.5,0),xr,a,gr,s,r),Oo(Uo.set(.5,.5,0),xr,a,gr,s,r),wd.set(0,0),Vl.set(1,0),Cd.set(1,1);let o=e.ray.intersectTriangle(No,wa,Uo,!1,Ea);if(o===null&&(Oo(wa.set(-.5,.5,0),xr,a,gr,s,r),Vl.set(0,1),o=e.ray.intersectTriangle(No,Uo,wa,!1,Ea),o===null))return;let c=e.ray.origin.distanceTo(Ea);c<e.near||c>e.far||t.push({distance:c,point:Ea.clone(),uv:ii.getInterpolation(Ea,No,wa,Uo,wd,Vl,Cd,new ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};Ti=new T,Hl=new T,ko=new T,Go=new T,ss=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Hl.copy(e).add(t).multiplyScalar(.5),ko.copy(t).sub(e).normalize(),Go.copy(this.origin).sub(Hl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ko),o=Go.dot(this.direction),c=-Go.dot(ko),l=Go.lengthSq(),h=Math.abs(1-a*a),d,u,f,p;if(h>0)if(d=a*c-o,u=a*o-c,p=r*h,d>=0)if(u>=-p)if(u<=p){let g=1/h;d*=g,u*=g,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-p?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=p?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Hl).addScaledVector(ko,u),f}intersectSphere(e,t){if(e.radius<0)return null;Ti.subVectors(e.center,this.origin);let n=Ti.dot(this.direction),s=Ti.dot(Ti)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,p=t.x-a.x,g=t.y-a.y,m=t.z-a.z,A=n.x-a.x,x=n.y-a.y,v=n.z-a.z,_=Math.abs(c),M=Math.abs(l),E=Math.abs(h),b,y,I,S,C,w,B,R,U,P,F,H;if(_>=M&&_>=E?(I=c,w=d,U=p,H=A,c>=0?(b=l,y=h,S=u,C=f,B=g,R=m,P=x,F=v):(b=h,y=l,S=f,C=u,B=m,R=g,P=v,F=x)):M>=E?(I=l,w=u,U=g,H=x,l>=0?(b=h,y=c,S=f,C=d,B=m,R=p,P=v,F=A):(b=c,y=h,S=d,C=f,B=p,R=m,P=A,F=v)):(I=h,w=f,U=m,H=v,h>=0?(b=c,y=l,S=d,C=u,B=p,R=g,P=A,F=x):(b=l,y=c,S=u,C=d,B=g,R=p,P=x,F=A)),I===0)return null;let O=b/I,L=y/I,G=1/I,V=S-O*w,X=C-L*w,z=B-O*U,K=R-L*U,j=P-O*H,ce=F-L*H,ae=j*K-ce*z,ee=V*ce-X*j,me=z*X-K*V;if(s){if(ae<0||ee<0||me<0)return null}else if((ae<0||ee<0||me<0)&&(ae>0||ee>0||me>0))return null;let fe=ae+ee+me;if(fe===0)return null;let Re=G*(ae*w+ee*U+me*H);return(fe>0?Re<0:Re>0)?null:this.at(Re/fe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rn=class extends Sn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=vu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Td=new Be,Es=new ss,Qo=new _n,Id=new T,zo=new T,Vo=new T,Ho=new T,Wl=new T,Wo=new T,Rd=new T,Ko=new T,Qe=class extends Ft{constructor(e=new lt,t=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Wo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(Wl.fromBufferAttribute(d,e),a?Wo.addScaledVector(Wl,h):Wo.addScaledVector(Wl.sub(t),h))}t.add(Wo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qo.copy(n.boundingSphere),Qo.applyMatrix4(r),Es.copy(e.ray).recast(e.near),!(Qo.containsPoint(Es.origin)===!1&&(Es.intersectSphere(Qo,Id)===null||Es.origin.distanceToSquared(Id)>(e.far-e.near)**2))&&(Td.copy(r).invert(),Es.copy(e.ray).applyMatrix4(Td),!(n.boundingBox!==null&&Es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Es)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,g=u.length;p<g;p++){let m=u[p],A=a[m.materialIndex],x=Math.max(m.start,f.start),v=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,M=v;_<M;_+=3){let E=o.getX(_),b=o.getX(_+1),y=o.getX(_+2);s=qo(this,A,e,n,l,h,d,E,b,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=p,A=g;m<A;m+=3){let x=o.getX(m),v=o.getX(m+1),_=o.getX(m+2);s=qo(this,a,e,n,l,h,d,x,v,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,g=u.length;p<g;p++){let m=u[p],A=a[m.materialIndex],x=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,M=v;_<M;_+=3){let E=_,b=_+1,y=_+2;s=qo(this,A,e,n,l,h,d,E,b,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let m=p,A=g;m<A;m+=3){let x=m,v=m+1,_=m+2;s=qo(this,a,e,n,l,h,d,x,v,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};Ca=new mt,Bd=new mt,Dd=new mt,p0=new mt,Fd=new Be,Xo=new T,Kl=new _n,Pd=new Be,ql=new ss,Va=class extends Qe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=eu,this.bindMatrix=new Be,this.bindMatrixInverse=new Be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new it),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xo),this.boundingBox.expandByPoint(Xo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new _n),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xo),this.boundingSphere.expandByPoint(Xo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Kl.copy(this.boundingSphere),Kl.applyMatrix4(s),e.ray.intersectsSphere(Kl)!==!1&&(Pd.copy(s).invert(),ql.copy(e.ray).applyMatrix4(Pd),!(this.boundingBox!==null&&ql.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ql)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new mt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===eu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Df?this.bindMatrixInverse.copy(this.bindMatrix).invert():nt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Bd.fromBufferAttribute(s.attributes.skinIndex,e),Dd.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Ca.copy(t),t.set(0,0,0,0)):(Ca.set(t.x,t.y,t.z,1),t.set(0,0,0)),Ca.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Dd.getComponent(r);if(a!==0){let o=Bd.getComponent(r);Fd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(p0.copy(Ca).applyMatrix4(Fd),a)}}return t.isVector4&&(t.w=Ca.w),t.applyMatrix4(this.bindMatrixInverse)}},Lr=class extends Ft{constructor(){super(),this.isBone=!0,this.type="Bone"}},Bn=class extends nn{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Pt,h=Pt,d,u){super(null,a,o,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ld=new Be,A0=new Be,Ha=class i{constructor(e=[],t=[]){this.uuid=ai(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){nt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Be;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:A0;Ld.multiplyMatrices(o,t[r]),Ld.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Bn(t,e,e,jt,Yt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(nt("Skeleton: No bone found with UUID:",r),a=new Lr),this.bones.push(a),this.boneInverses.push(new Be().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Dn=class extends St{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},br=new Be,Nd=new Be,Jo=[],Ud=new it,m0=new Be,Ta=new Qe,Ia=new _n,Fn=class extends Qe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Dn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,m0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new it),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,br),Ud.copy(e.boundingBox).applyMatrix4(br),this.boundingBox.union(Ud)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,br),Ia.copy(e.boundingSphere).applyMatrix4(br),this.boundingSphere.union(Ia)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ta.geometry=this.geometry,Ta.material=this.material,Ta.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ia.copy(this.boundingSphere),Ia.applyMatrix4(n),e.ray.intersectsSphere(Ia)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,br),Nd.multiplyMatrices(n,br),Ta.matrixWorld=Nd,Ta.raycast(e,Jo);for(let a=0,o=Jo.length;a<o;a++){let c=Jo[a];c.instanceId=r,c.object=this,t.push(c)}Jo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Dn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Bn(new Float32Array(s*this.count),s,this.count,jn,Yt));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ss=new _n,g0=new ge(.5,.5),Yo=new T,Yn=class{constructor(e=new Mn,t=new Mn,n=new Mn,s=new Mn,r=new Mn,a=new Mn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Jn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],g=r[9],m=r[10],A=r[11],x=r[12],v=r[13],_=r[14],M=r[15];if(s[0].setComponents(l-a,f-h,A-p,M-x).normalize(),s[1].setComponents(l+a,f+h,A+p,M+x).normalize(),s[2].setComponents(l+o,f+d,A+g,M+v).normalize(),s[3].setComponents(l-o,f-d,A-g,M-v).normalize(),n)s[4].setComponents(c,u,m,_).normalize(),s[5].setComponents(l-c,f-u,A-m,M-_).normalize();else if(s[4].setComponents(l-c,f-u,A-m,M-_).normalize(),t===Jn)s[5].setComponents(l+c,f+u,A+m,M+_).normalize();else if(t===Tr)s[5].setComponents(c,u,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(e){Ss.center.set(0,0,0);let t=g0.distanceTo(e.center);return Ss.radius=.7071067811865476+t,Ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Yo.x=s.normal.x>0?e.max.x:e.min.x,Yo.y=s.normal.y>0?e.max.y:e.min.y,Yo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Yo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Od=new Be,mc=class i{constructor(){this.coordinateSystem=Jn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Od.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Yn),n[s].setFromProjectionMatrix(Od,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Yn),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}},Nr=class extends Sn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},gc=new T,xc=new T,kd=new Be,Ra=new ss,jo=new _n,Xl=new T,Gd=new T,Fs=class extends Ft{constructor(e=new lt,t=new Nr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)gc.fromBufferAttribute(t,s-1),xc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=gc.distanceTo(xc);e.setAttribute("lineDistance",new Ke(n,1))}else nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jo.copy(n.boundingSphere),jo.applyMatrix4(s),jo.radius+=r,e.ray.intersectsSphere(jo)===!1)return;kd.copy(s).invert(),Ra.copy(e.ray).applyMatrix4(kd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,m=p-1;g<m;g+=l){let A=h.getX(g),x=h.getX(g+1),v=Zo(this,e,Ra,c,A,x,g);v&&t.push(v)}if(this.isLineLoop){let g=h.getX(p-1),m=h.getX(f),A=Zo(this,e,Ra,c,g,m,p-1);A&&t.push(A)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,m=p-1;g<m;g+=l){let A=Zo(this,e,Ra,c,g,g+1,g);A&&t.push(A)}if(this.isLineLoop){let g=Zo(this,e,Ra,c,p-1,f,p-1);g&&t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};Qd=new T,zd=new T,Wa=class extends Fs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Qd.fromBufferAttribute(t,s),zd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Qd.distanceTo(zd);e.setAttribute("lineDistance",new Ke(n,1))}else nt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ka=class extends Fs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ur=class extends Sn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vd=new Be,ru=new ss,$o=new _n,ec=new T,qa=class extends Ft{constructor(e=new lt,t=new Ur){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(s),$o.radius+=r,e.ray.intersectsSphere($o)===!1)return;Vd.copy(s).invert(),ru.copy(e.ray).applyMatrix4(Vd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let p=u,g=f;p<g;p++){let m=l.getX(p);ec.fromBufferAttribute(d,m),Hd(ec,m,c,s,e,t,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=u,g=f;p<g;p++)ec.fromBufferAttribute(d,p),Hd(ec,p,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};rs=class extends nn{constructor(e=[],t,n,s,r,a,o,c,l,h,d,u){super(null,a,o,c,l,h,s,r,d,u),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},Xa=class extends rs{constructor(e,t,n,s,r,a){super(e,t,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=s,this.wrapR=En,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Or=class extends rs{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,fs),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}},Ja=class extends nn{constructor(e=[],t=fs,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},si=class extends nn{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Qn=class extends nn{constructor(e,t,n=wn,s,r,a,o=Pt,c=Pt,l,h=Di,d=1){if(h!==Di&&h!==Qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Br(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ya=class extends Qn{constructor(e,t=wn,n=fs,s,r,a=Pt,o=Pt,c,l=Di){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ja=class extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Nt=class i extends lt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,s,a,2),p("x","z","y",1,-1,e,n,-t,s,a,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(d,2));function p(g,m,A,x,v,_,M,E,b,y,I){let S=_/b,C=M/y,w=_/2,B=M/2,R=E/2,U=b+1,P=y+1,F=0,H=0,O=new T;for(let L=0;L<P;L++){let G=L*C-B;for(let V=0;V<U;V++){let X=V*S-w;O[g]=X*x,O[m]=G*v,O[A]=R,l.push(O.x,O.y,O.z),O[g]=0,O[m]=0,O[A]=E>0?1:-1,h.push(O.x,O.y,O.z),d.push(V/b),d.push(1-L/y),F+=1}}for(let L=0;L<y;L++)for(let G=0;G<b;G++){let V=u+G+U*L,X=u+G+U*(L+1),z=u+(G+1)+U*(L+1),K=u+(G+1)+U*L;c.push(V,X,K),c.push(X,z,K),H+=6}o.addGroup(f,H,I),f+=H,u+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Za=class i extends lt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],h=t/2,d=Math.PI/2*e,u=t,f=2*d+u,p=n*2+r,g=s+1,m=new T,A=new T;for(let x=0;x<=p;x++){let v=0,_=0,M=0,E=0;if(x<=n){let I=x/n,S=I*Math.PI/2;_=-h-e*Math.cos(S),M=e*Math.sin(S),E=-e*Math.cos(S),v=I*d}else if(x<=n+r){let I=(x-n)/r;_=-h+I*t,M=e,E=0,v=d+I*u}else{let I=(x-n-r)/n,S=I*Math.PI/2;_=h+e*Math.sin(S),M=e*Math.cos(S),E=e*Math.sin(S),v=d+u+I*d}let b=Math.max(0,Math.min(1,v/f)),y=0;x===0?y=.5/s:x===p&&(y=-.5/s);for(let I=0;I<=s;I++){let S=I/s,C=S*Math.PI*2,w=Math.sin(C),B=Math.cos(C);A.x=-M*B,A.y=_,A.z=M*w,o.push(A.x,A.y,A.z),m.set(-M*B,E,M*w),m.normalize(),c.push(m.x,m.y,m.z),l.push(S+y,b)}if(x>0){let I=(x-1)*g;for(let S=0;S<s;S++){let C=I+S,w=I+S+1,B=x*g+S,R=x*g+S+1;a.push(C,w,B),a.push(w,R,B)}}}this.setIndex(a),this.setAttribute("position",new Ke(o,3)),this.setAttribute("normal",new Ke(c,3)),this.setAttribute("uv",new Ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},as=class i extends lt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new T,h=new ge;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=n+d/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ke(a,3)),this.setAttribute("normal",new Ke(o,3)),this.setAttribute("uv",new Ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Qt=class i extends lt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,g=[],m=n/2,A=0;x(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ke(d,3)),this.setAttribute("normal",new Ke(u,3)),this.setAttribute("uv",new Ke(f,2));function x(){let _=new T,M=new T,E=0,b=(t-e)/n;for(let y=0;y<=r;y++){let I=[],S=y/r,C=S*(t-e)+e;for(let w=0;w<=s;w++){let B=w/s,R=B*c+o,U=Math.sin(R),P=Math.cos(R);M.x=C*U,M.y=-S*n+m,M.z=C*P,d.push(M.x,M.y,M.z),_.set(U,b,P).normalize(),u.push(_.x,_.y,_.z),f.push(B,1-S),I.push(p++)}g.push(I)}for(let y=0;y<s;y++)for(let I=0;I<r;I++){let S=g[I][y],C=g[I+1][y],w=g[I+1][y+1],B=g[I][y+1];(e>0||I!==0)&&(h.push(S,C,B),E+=3),(t>0||I!==r-1)&&(h.push(C,w,B),E+=3)}l.addGroup(A,E,0),A+=E}function v(_){let M=p,E=new ge,b=new T,y=0,I=_===!0?e:t,S=_===!0?1:-1;for(let w=1;w<=s;w++)d.push(0,m*S,0),u.push(0,S,0),f.push(.5,.5),p++;let C=p;for(let w=0;w<=s;w++){let R=w/s*c+o,U=Math.cos(R),P=Math.sin(R);b.x=I*P,b.y=m*S,b.z=I*U,d.push(b.x,b.y,b.z),u.push(0,S,0),E.x=U*.5+.5,E.y=P*.5*S+.5,f.push(E.x,E.y),p++}for(let w=0;w<s;w++){let B=M+w,R=C+w;_===!0?h.push(R,R+1,B):h.push(R+1,R,B),y+=3}l.addGroup(A,y,_===!0?1:2),A+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},_c=class i extends lt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new Ke(r,3)),this.setAttribute("normal",new Ke(r.slice(),3)),this.setAttribute("uv",new Ke(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let v=new T,_=new T,M=new T;for(let E=0;E<t.length;E+=3)f(t[E+0],v),f(t[E+1],_),f(t[E+2],M),c(v,_,M,x)}function c(x,v,_,M){let E=M+1,b=[];for(let y=0;y<=E;y++){b[y]=[];let I=x.clone().lerp(_,y/E),S=v.clone().lerp(_,y/E),C=E-y;for(let w=0;w<=C;w++)w===0&&y===E?b[y][w]=I:b[y][w]=I.clone().lerp(S,w/C)}for(let y=0;y<E;y++)for(let I=0;I<2*(E-y)-1;I++){let S=Math.floor(I/2);I%2===0?(u(b[y][S+1]),u(b[y+1][S]),u(b[y][S])):(u(b[y][S+1]),u(b[y+1][S+1]),u(b[y+1][S]))}}function l(x){let v=new T;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(x),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function h(){let x=new T;for(let v=0;v<r.length;v+=3){x.x=r[v+0],x.y=r[v+1],x.z=r[v+2];let _=m(x)/2/Math.PI+.5,M=A(x)/Math.PI+.5;a.push(_,1-M)}p(),d()}function d(){for(let x=0;x<a.length;x+=6){let v=a[x+0],_=a[x+2],M=a[x+4],E=Math.max(v,_,M),b=Math.min(v,_,M);E>.9&&b<.1&&(v<.2&&(a[x+0]+=1),_<.2&&(a[x+2]+=1),M<.2&&(a[x+4]+=1))}}function u(x){r.push(x.x,x.y,x.z)}function f(x,v){let _=x*3;v.x=e[_+0],v.y=e[_+1],v.z=e[_+2]}function p(){let x=new T,v=new T,_=new T,M=new T,E=new ge,b=new ge,y=new ge;for(let I=0,S=0;I<r.length;I+=9,S+=6){x.set(r[I+0],r[I+1],r[I+2]),v.set(r[I+3],r[I+4],r[I+5]),_.set(r[I+6],r[I+7],r[I+8]),E.set(a[S+0],a[S+1]),b.set(a[S+2],a[S+3]),y.set(a[S+4],a[S+5]),M.copy(x).add(v).add(_).divideScalar(3);let C=m(M);g(E,S+0,x,C),g(b,S+2,v,C),g(y,S+4,_,C)}}function g(x,v,_,M){M<0&&x.x===1&&(a[v]=x.x-1),_.x===0&&_.z===0&&(a[v]=M/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function A(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){nt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new ge:new T);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new T,s=[],r=[],a=[],o=new T,c=new Be;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new T)}r[0]=new T,a[0]=new T;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(_t(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(_t(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},os=class extends zn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ge){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},bc=class extends os{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};Wd=new T,Kd=new T,Jl=new zu,Yl=new zu,jl=new zu,mi=class extends zn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new T){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Kd.subVectors(s[0],s[1]).add(s[0]),l=Kd);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Wd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Wd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);g<1e-4&&(g=1),p<1e-4&&(p=g),m<1e-4&&(m=g),Jl.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,p,g,m),Yl.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,p,g,m),jl.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,p,g,m)}else this.curveType==="catmullrom"&&(Jl.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),Yl.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),jl.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(Jl.calc(c),Yl.calc(c),jl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new T().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};$a=class extends zn{constructor(e=new ge,t=new ge,n=new ge,s=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ge){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Na(e,s.x,r.x,a.x,o.x),Na(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},vc=class extends zn{constructor(e=new T,t=new T,n=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new T){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Na(e,s.x,r.x,a.x,o.x),Na(e,s.y,r.y,a.y,o.y),Na(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},eo=class extends zn{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ps=class extends zn{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},to=class extends zn{constructor(e=new ge,t=new ge,n=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ge){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(La(e,s.x,r.x,a.x),La(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cs=class extends zn{constructor(e=new T,t=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new T){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(La(e,s.x,r.x,a.x),La(e,s.y,r.y,a.y),La(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},no=class extends zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(qd(o,c.x,l.x,h.x,d.x),qd(o,c.y,l.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ge().fromArray(s))}return this}},yc=Object.freeze({__proto__:null,ArcCurve:bc,CatmullRomCurve3:mi,CubicBezierCurve:$a,CubicBezierCurve3:vc,EllipseCurve:os,LineCurve:eo,LineCurve3:Ps,QuadraticBezierCurve:to,QuadraticBezierCurve3:cs,SplineCurve:no}),kr=class extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new yc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Fi=class extends kr{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new eo(this.currentPoint.clone(),new ge(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new to(this.currentPoint.clone(),new ge(e,t),new ge(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new $a(this.currentPoint.clone(),new ge(e,t),new ge(n,s),new ge(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new no(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new os(e,t,n,s,r,a,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ls=class extends Fi{constructor(e){super(e),this.uuid=ai(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Fi().fromJSON(s))}return this}};cu=class{static triangulate(e,t,n=2){return S0(e,t,n)}},ws=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Jd(e),Yd(n,e);let a=e.length;t.forEach(Jd);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,Yd(n,t[c]);let o=cu.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};Ns=class i extends lt{constructor(e=new ls([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new Ke(s,3)),this.setAttribute("uv",new Ke(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,A=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:z0,v,_=!1,M,E,b,y;if(A){v=A.getSpacedPoints(h),_=!0,u=!1;let te=A.isCatmullRomCurve3?A.closed:!1;M=A.computeFrenetFrames(h,te),E=new T,b=new T,y=new T}u||(m=0,f=0,p=0,g=0);let I=o.extractPoints(l),S=I.shape,C=I.holes;if(!ws.isClockWise(S)){S=S.reverse();for(let te=0,xe=C.length;te<xe;te++){let _e=C[te];ws.isClockWise(_e)&&(C[te]=_e.reverse())}}function B(te){let _e=10000000000000001e-36,be=te[0];for(let Ee=1;Ee<=te.length;Ee++){let le=Ee%te.length,ve=te[le],Le=ve.x-be.x,Oe=ve.y-be.y,ze=Le*Le+Oe*Oe,Q=Math.max(Math.abs(ve.x),Math.abs(ve.y),Math.abs(be.x),Math.abs(be.y)),qe=_e*Q*Q;if(ze<=qe){te.splice(le,1),Ee--;continue}be=ve}}B(S),C.forEach(B);let R=C.length,U=S;for(let te=0;te<R;te++){let xe=C[te];S=S.concat(xe)}function P(te,xe,_e){return xe||ct("ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(xe,_e)}let F=S.length;function H(te,xe,_e){let be,Ee,le,ve=te.x-xe.x,Le=te.y-xe.y,Oe=_e.x-te.x,ze=_e.y-te.y,Q=ve*ve+Le*Le,qe=ve*ze-Le*Oe;if(Math.abs(qe)>Number.EPSILON){let ye=Math.sqrt(Q),De=Math.sqrt(Oe*Oe+ze*ze),$=xe.x-Le/ye,Fe=xe.y+ve/ye,ke=_e.x-ze/De,Ge=_e.y+Oe/De,k=((ke-$)*ze-(Ge-Fe)*Oe)/(ve*ze-Le*Oe);be=$+ve*k-te.x,Ee=Fe+Le*k-te.y;let D=be*be+Ee*Ee;if(D<=2)return new ge(be,Ee);le=Math.sqrt(D/2)}else{let ye=!1;ve>Number.EPSILON?Oe>Number.EPSILON&&(ye=!0):ve<-Number.EPSILON?Oe<-Number.EPSILON&&(ye=!0):Math.sign(Le)===Math.sign(ze)&&(ye=!0),ye?(be=-Le,Ee=ve,le=Math.sqrt(Q)):(be=ve,Ee=Le,le=Math.sqrt(Q/2))}return new ge(be/le,Ee/le)}let O=[];for(let te=0,xe=U.length,_e=xe-1,be=te+1;te<xe;te++,_e++,be++)_e===xe&&(_e=0),be===xe&&(be=0),O[te]=H(U[te],U[_e],U[be]);let L=[],G,V=O.concat();for(let te=0,xe=R;te<xe;te++){let _e=C[te];G=[];for(let be=0,Ee=_e.length,le=Ee-1,ve=be+1;be<Ee;be++,le++,ve++)le===Ee&&(le=0),ve===Ee&&(ve=0),G[be]=H(_e[be],_e[le],_e[ve]);L.push(G),V=V.concat(G)}let X;if(m===0)X=ws.triangulateShape(U,C);else{let te=[],xe=[];for(let _e=0;_e<m;_e++){let be=_e/m,Ee=f*Math.cos(be*Math.PI/2),le=p*Math.sin(be*Math.PI/2)+g;for(let ve=0,Le=U.length;ve<Le;ve++){let Oe=P(U[ve],O[ve],le);ee(Oe.x,Oe.y,-Ee),be===0&&te.push(Oe)}for(let ve=0,Le=R;ve<Le;ve++){let Oe=C[ve];G=L[ve];let ze=[];for(let Q=0,qe=Oe.length;Q<qe;Q++){let ye=P(Oe[Q],G[Q],le);ee(ye.x,ye.y,-Ee),be===0&&ze.push(ye)}be===0&&xe.push(ze)}}X=ws.triangulateShape(te,xe)}let z=X.length,K=p+g;for(let te=0;te<F;te++){let xe=u?P(S[te],V[te],K):S[te];_?(b.copy(M.normals[0]).multiplyScalar(xe.x),E.copy(M.binormals[0]).multiplyScalar(xe.y),y.copy(v[0]).add(b).add(E),ee(y.x,y.y,y.z)):ee(xe.x,xe.y,0)}for(let te=1;te<=h;te++)for(let xe=0;xe<F;xe++){let _e=u?P(S[xe],V[xe],K):S[xe];_?(b.copy(M.normals[te]).multiplyScalar(_e.x),E.copy(M.binormals[te]).multiplyScalar(_e.y),y.copy(v[te]).add(b).add(E),ee(y.x,y.y,y.z)):ee(_e.x,_e.y,d/h*te)}for(let te=m-1;te>=0;te--){let xe=te/m,_e=f*Math.cos(xe*Math.PI/2),be=p*Math.sin(xe*Math.PI/2)+g;for(let Ee=0,le=U.length;Ee<le;Ee++){let ve=P(U[Ee],O[Ee],be);ee(ve.x,ve.y,d+_e)}for(let Ee=0,le=C.length;Ee<le;Ee++){let ve=C[Ee];G=L[Ee];for(let Le=0,Oe=ve.length;Le<Oe;Le++){let ze=P(ve[Le],G[Le],be);_?ee(ze.x,ze.y+v[h-1].y,v[h-1].x+_e):ee(ze.x,ze.y,d+_e)}}}j(),ce();function j(){let te=s.length/3;if(u){let xe=0,_e=F*xe;for(let be=0;be<z;be++){let Ee=X[be];me(Ee[2]+_e,Ee[1]+_e,Ee[0]+_e)}xe=h+m*2,_e=F*xe;for(let be=0;be<z;be++){let Ee=X[be];me(Ee[0]+_e,Ee[1]+_e,Ee[2]+_e)}}else{for(let xe=0;xe<z;xe++){let _e=X[xe];me(_e[2],_e[1],_e[0])}for(let xe=0;xe<z;xe++){let _e=X[xe];me(_e[0]+F*h,_e[1]+F*h,_e[2]+F*h)}}n.addGroup(te,s.length/3-te,0)}function ce(){let te=s.length/3,xe=0;ae(U,xe),xe+=U.length;for(let _e=0,be=C.length;_e<be;_e++){let Ee=C[_e];ae(Ee,xe),xe+=Ee.length}n.addGroup(te,s.length/3-te,1)}function ae(te,xe){let _e=te.length;for(;--_e>=0;){let be=_e,Ee=_e-1;Ee<0&&(Ee=te.length-1);for(let le=0,ve=h+m*2;le<ve;le++){let Le=F*le,Oe=F*(le+1),ze=xe+be+Le,Q=xe+Ee+Le,qe=xe+Ee+Oe,ye=xe+be+Oe;fe(ze,Q,qe,ye)}}}function ee(te,xe,_e){c.push(te),c.push(xe),c.push(_e)}function me(te,xe,_e){Re(te),Re(xe),Re(_e);let be=s.length/3,Ee=x.generateTopUV(n,s,be-3,be-2,be-1);Se(Ee[0]),Se(Ee[1]),Se(Ee[2])}function fe(te,xe,_e,be){Re(te),Re(xe),Re(be),Re(xe),Re(_e),Re(be);let Ee=s.length/3,le=x.generateSideWallUV(n,s,Ee-6,Ee-3,Ee-2,Ee-1);Se(le[0]),Se(le[1]),Se(le[3]),Se(le[1]),Se(le[2]),Se(le[3])}function Re(te){s.push(c[te*3+0]),s.push(c[te*3+1]),s.push(c[te*3+2])}function Se(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return V0(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new yc[s.type]().fromJSON(s)),new i(n,e.options)}},z0={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new ge(r,a),new ge(o,c),new ge(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],f=e[s*3+1],p=e[s*3+2],g=e[r*3],m=e[r*3+1],A=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new ge(a,1-c),new ge(l,1-d),new ge(u,1-p),new ge(g,1-A)]:[new ge(o,1-c),new ge(h,1-d),new ge(f,1-p),new ge(m,1-A)]}};Qr=class i extends _c{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},zr=class i extends lt{constructor(e=[new ge(0,-.5),new ge(.5,0),new ge(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=_t(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/t,d=new T,u=new ge,f=new T,p=new T,g=new T,m=0,A=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,A=e[x+1].y-e[x].y,f.x=A*1,f.y=-m,f.z=A*0,g.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:g.normalize(),c.push(g.x,g.y,g.z);break;default:m=e[x+1].x-e[x].x,A=e[x+1].y-e[x].y,f.x=A*1,f.y=-m,f.z=A*0,p.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),c.push(f.x,f.y,f.z),g.copy(p)}for(let x=0;x<=t;x++){let v=n+x*h*s,_=Math.sin(v),M=Math.cos(v);for(let E=0;E<=e.length-1;E++){d.x=e[E].x*_,d.y=e[E].y,d.z=e[E].x*M,a.push(d.x,d.y,d.z),u.x=x/t,u.y=E/(e.length-1),o.push(u.x,u.y);let b=c[3*E+0]*_,y=c[3*E+1],I=c[3*E+0]*M;l.push(b,y,I)}}for(let x=0;x<t;x++)for(let v=0;v<e.length-1;v++){let _=v+x*e.length,M=_,E=_+e.length,b=_+e.length+1,y=_+1;r.push(M,E,y),r.push(b,y,E)}this.setIndex(r),this.setAttribute("position",new Ke(a,3)),this.setAttribute("uv",new Ke(o,2)),this.setAttribute("normal",new Ke(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Vn=class i extends lt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=e/o,u=t/c,f=[],p=[],g=[],m=[];for(let A=0;A<h;A++){let x=A*u-a;for(let v=0;v<l;v++){let _=v*d-r;p.push(_,-x,0),g.push(0,0,1),m.push(v/o),m.push(1-A/c)}}for(let A=0;A<c;A++)for(let x=0;x<o;x++){let v=x+l*A,_=x+l*(A+1),M=x+1+l*(A+1),E=x+1+l*A;f.push(v,_,E),f.push(_,M,E)}this.setIndex(f),this.setAttribute("position",new Ke(p,3)),this.setAttribute("normal",new Ke(g,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Hn=class i extends lt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new T,u=new T,f=[],p=[],g=[],m=[];for(let A=0;A<=n;A++){let x=[],v=A/n,_=a+v*o,M=e*Math.cos(_),E=Math.sqrt(e*e-M*M),b=0;A===0&&a===0?b=.5/t:A===n&&c===Math.PI&&(b=-.5/t);for(let y=0;y<=t;y++){let I=y/t,S=s+I*r;d.x=-E*Math.cos(S),d.y=M,d.z=E*Math.sin(S),p.push(d.x,d.y,d.z),u.copy(d).normalize(),g.push(u.x,u.y,u.z),m.push(I+b,1-v),x.push(l++)}h.push(x)}for(let A=0;A<n;A++)for(let x=0;x<t;x++){let v=h[A][x+1],_=h[A][x],M=h[A+1][x],E=h[A+1][x+1];(A!==0||a>0)&&f.push(v,_,E),(A!==n-1||c<Math.PI)&&f.push(_,M,E)}this.setIndex(f),this.setAttribute("position",new Ke(p,3)),this.setAttribute("normal",new Ke(g,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Us=class i extends lt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],d=[],u=new T,f=new T,p=new T;for(let g=0;g<=n;g++){let m=a+g/n*o;for(let A=0;A<=s;A++){let x=A/s*r;f.x=(e+t*Math.cos(m))*Math.cos(x),f.y=(e+t*Math.cos(m))*Math.sin(x),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(A/s),d.push(g/n)}}for(let g=1;g<=n;g++)for(let m=1;m<=s;m++){let A=(s+1)*g+m-1,x=(s+1)*(g-1)+m-1,v=(s+1)*(g-1)+m,_=(s+1)*g+m;c.push(A,x,_),c.push(x,v,_)}this.setIndex(c),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}},gi=class i extends lt{constructor(e=new cs(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new T,c=new T,l=new ge,h=new T,d=[],u=[],f=[],p=[];g(),this.setIndex(p),this.setAttribute("position",new Ke(d,3)),this.setAttribute("normal",new Ke(u,3)),this.setAttribute("uv",new Ke(f,2));function g(){for(let v=0;v<t;v++)m(v);m(r===!1?t:0),x(),A()}function m(v){h=e.getPointAt(v/t,h);let _=a.normals[v],M=a.binormals[v];for(let E=0;E<=s;E++){let b=E/s*Math.PI*2,y=Math.sin(b),I=-Math.cos(b);c.x=I*_.x+y*M.x,c.y=I*_.y+y*M.y,c.z=I*_.z+y*M.z,c.normalize(),u.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,d.push(o.x,o.y,o.z)}}function A(){for(let v=1;v<=t;v++)for(let _=1;_<=s;_++){let M=(s+1)*(v-1)+(_-1),E=(s+1)*v+(_-1),b=(s+1)*v+_,y=(s+1)*(v-1)+_;p.push(M,E,y),p.push(E,b,y)}}function x(){for(let v=0;v<=t;v++)for(let _=0;_<=s;_++)l.x=v/t,l.y=_/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new yc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};il={clone:$s,merge:bn},W0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,K0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ut=class extends Sn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=W0,this.fragmentShader=K0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=H0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new We().setHex(s.value);break;case"v2":this.uniforms[n].value=new ge().fromArray(s.value);break;case"v3":this.uniforms[n].value=new T().fromArray(s.value);break;case"v4":this.uniforms[n].value=new mt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new rt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Be().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Mc=class extends Ut{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},at=class extends Sn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tl,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Xt=class extends at{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ge(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Cs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Cs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Ec=class extends Sn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Sc=class extends Sn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};xi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},wc=class extends xi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nu,endingEnd:nu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case iu:r=e,o=2*t-n;break;case su:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case iu:a=e,c=2*n-t;break;case su:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),g=p*p,m=g*p,A=-u*m+2*u*g-u*p,x=(1+u)*m+(-1.5-2*u)*g+(-.5+u)*p+1,v=(-1-f)*m+(1.5+f)*g+.5*p,_=f*m-f*g;for(let M=0;M!==o;++M)r[M]=A*a[h+M]+x*a[l+M]+v*a[c+M]+_*a[d+M];return r}},Cc=class extends xi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*d+a[c+u]*h;return r}},Tc=class extends xi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ic=class extends xi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-t)/(s-t),g=1-p;for(let m=0;m!==o;++m)r[m]=a[l+m]*g+a[c+m]*p;return r}let u=o*2,f=e-1;for(let p=0;p!==o;++p){let g=a[l+p],m=a[c+p],A=f*u+p*2,x=d[A],v=d[A+1],_=e*u+p*2,M=h[_],E=h[_+1],b=Y0(n,t,x,M,s);r[p]=Zf(b,g,v,E,m)}return r}};Pn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ts(t,this.TimeBufferType),this.values=ts(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ts(e.times,Array),values:ts(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Da(e.settings)&&(n.settings={inTangents:ts(e.settings.inTangents,Array),outTangents:ts(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Tc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Cc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ic(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ts:t=this.InterpolantFactoryMethodDiscrete;break;case Is:t=this.InterpolantFactoryMethodLinear;break;case rc:t=this.InterpolantFactoryMethodSmooth;break;case tu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return nt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ts;case this.InterpolantFactoryMethodLinear:return Is;case this.InterpolantFactoryMethodSmooth:return rc;case this.InterpolantFactoryMethodBezier:return tu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Da(this.settings)&&($d(this.settings.inTangents,e),$d(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Da(this.settings)&&(ef(this.settings.inTangents,e),ef(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ct("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ct("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){ct("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){ct("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Dg(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){ct("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===rc,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let d=o*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let g=t[d+p];if(g!==t[u+p]||g!==t[f+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Da(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};Pn.prototype.ValueTypeName="";Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=Is;Pi=class extends Pn{constructor(e,t,n){super(e,t,n)}};Pi.prototype.ValueTypeName="bool";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=Ts;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;ao=class extends Pn{constructor(e,t,n,s){super(e,t,n,s)}};ao.prototype.ValueTypeName="color";Li=class extends Pn{constructor(e,t,n,s){super(e,t,n,s)}};Li.prototype.ValueTypeName="number";Rc=class extends xi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)Gt.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ni=class extends Pn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Rc(this.times,this.values,this.getValueSize(),e)}};Ni.prototype.ValueTypeName="quaternion";Ni.prototype.InterpolantFactoryMethodSmooth=void 0;Ui=class extends Pn{constructor(e,t,n){super(e,t,n)}};Ui.prototype.ValueTypeName="string";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=Ts;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;us=class extends Pn{constructor(e,t,n,s){super(e,t,n,s)}};us.prototype.ValueTypeName="vector";oo=class{constructor(e="",t=-1,n=[],s=Ff){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=ai(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Z0(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Pn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=q0(c);c=Zd(c,1,h),l=Zd(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Li(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let d=h[1],u=s[d];u||(s[d]=u=[]),u.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};fi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(tf(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!tf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};Bc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],p=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},$f=new Bc,Wn=class{constructor(e){this.manager=e!==void 0?e:$f,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Wn.DEFAULT_MATERIAL_NAME="__DEFAULT";Ii={},lu=class extends Error{constructor(e,t){super(e),this.response=t}},ri=class extends Wn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=fi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Ii[e]!==void 0){Ii[e].push({onLoad:t,onProgress:n,onError:s});return}Ii[e]=[],Ii[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&nt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Ii[e],d=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=u?parseInt(u):0,p=f!==0,g=0,m=new ReadableStream({start(A){x();function x(){d.read().then(({done:v,value:_})=>{if(v)A.close();else{g+=_.byteLength;let M=new ProgressEvent("progress",{lengthComputable:p,loaded:g,total:f});for(let E=0,b=h.length;E<b;E++){let y=h[E];y.onProgress&&y.onProgress(M)}A.enqueue(_),x()}},v=>{A.error(v)})}}});return new Response(m)}else throw new lu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(p=>f.decode(p))}}}).then(l=>{fi.add(`file:${e}`,l);let h=Ii[e];delete Ii[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Ii[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ii[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},vr=new WeakMap,Dc=class extends Wn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=fi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=vr.get(a);d===void 0&&(d=[],vr.set(a,d)),d.push({onLoad:t,onError:s})}return a}let o=Ir("img");function c(){h(),t&&t(this);let d=vr.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}vr.delete(this),r.manager.itemEnd(e)}function l(d){h(),s&&s(d),fi.remove(`image:${e}`);let u=vr.get(this)||[];for(let f=0;f<u.length;f++){let p=u[f];p.onError&&p.onError(d)}vr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),fi.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}},co=class extends Wn{constructor(e){super(e)}load(e,t,n,s){let r=this,a=new Bn,o=new ri(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(c){let l;try{l=r.parse(c)}catch(h){s!==void 0?s(h):ct(h);return}r._applyTexData(a,l),t&&t(a,l)},n,s),a}createDataTexture(e){let t=new Bn;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:En,e.wrapT=t.wrapT!==void 0?t.wrapT:En,e.magFilter=t.magFilter!==void 0?t.magFilter:vt,e.minFilter=t.minFilter!==void 0?t.minFilter:vt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=Ht),t.mipmapCount===1&&(e.minFilter=vt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},fn=class extends Wn{constructor(e){super(e)}load(e,t,n,s){let r=new nn,a=new Dc(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Vr=class extends Ft{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Zl=new Be,nf=new T,sf=new T,Hr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.mapType=ot,this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yn,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;nf.setFromMatrixPosition(e.matrixWorld),t.position.copy(nf),sf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Zl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Zl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Tr||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Zl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ic=new T,sc=new Gt,di=new T,Os=class extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ic,sc,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ic,sc,di.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ic,sc,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ic,sc,di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},es=new T,rf=new ge,af=new ge,sn=class extends Os{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Rs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Fa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rs*2*Math.atan(Math.tan(Fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(es.x,es.y).multiplyScalar(-e/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(es.x,es.y).multiplyScalar(-e/es.z)}getViewSize(e,t){return this.getViewBounds(e,rf,af),t.subVectors(af,rf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Fa*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},uu=class extends Hr{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Rs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ks=class extends Vr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new uu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},hu=class extends Hr{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0}},Kn=class extends Vr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new hu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Gs=class extends Os{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},du=class extends Hr{constructor(){super(new Gs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qs=class extends Vr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new du}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Oi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},$l=new WeakMap,lo=class extends Wn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&nt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&nt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=fi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{$l.has(a)===!0?(s&&s($l.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return fi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),$l.set(c,l),fi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});fi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},yr=-90,Mr=1,hs=class extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new sn(yr,Mr,e,t);s.layers=this.layers,this.add(s);let r=new sn(yr,Mr,e,t);r.layers=this.layers,this.add(r);let a=new sn(yr,Mr,e,t);a.layers=this.layers,this.add(a);let o=new sn(yr,Mr,e,t);o.layers=this.layers,this.add(o);let c=new sn(yr,Mr,e,t);c.layers=this.layers,this.add(c);let l=new sn(yr,Mr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=g,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Fc=class extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Hu="\\[\\]\\.:\\/",$0=new RegExp("["+Hu+"]","g"),Wu="[^"+Hu+"]",ex="[^"+Hu.replace("\\.","")+"]",tx=/((?:WC+[\/:])*)/.source.replace("WC",Wu),nx=/(WCOD+)?/.source.replace("WCOD",ex),ix=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wu),sx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wu),rx=new RegExp("^"+tx+nx+ix+sx+"$"),ax=["material","materials","bones","map"],fu=class{constructor(e,t,n){let s=n||Bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Bt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($0,"")}static parseTrackName(e){let t=rx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ax.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ct("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ct("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ct("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ct("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){ct("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;ct("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bt.Composite=fu;Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];mE=new Float32Array(1),of=new Be,ds=class{constructor(e,t,n=0,s=1/0){this.ray=new ss(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Dr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ct("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return of.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(of),this}intersectObject(e,t=!0,n=[]){return pu(e,this,n,t),n.sort(cf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)pu(e[s],this,n,t);return n.sort(cf),n}};Au=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187")});function vp(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function lx(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],g=d[f];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++u,d[u]=g)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let g=d[f];i.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}function Hb(i,e,t,n,s,r){let a=new We(0),o=s===!0?0:1,c,l,h=null,d=0,u=null;function f(x){let v=x.isScene===!0?x.background:null;if(v&&v.isTexture){let _=x.backgroundBlurriness>0;v=e.get(v,_)}return v}function p(x){let v=!1,_=f(x);_===null?m(a,o):_&&_.isColor&&(m(_,1),v=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||v)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(x,v){let _=f(v);_&&_.isCubeTexture?(l===void 0&&(l=new Qe(new Nt(1,1,1),new Ut({name:"BackgroundCubeMaterial",uniforms:$s(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,E,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Vb.makeRotationFromEuler(v.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(yp),l.material.toneMapped=xt.getTransfer(_.colorSpace)!==Dt,(h!==_||d!==_.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Qe(new Vn(2,2),new Ut({name:"BackgroundMaterial",uniforms:$s(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=xt.getTransfer(_.colorSpace)!==Dt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,v){x.getRGB(sl,Vu(i)),t.buffers.color.setClear(sl.r,sl.g,sl.b,v,r)}function A(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),o=v,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,m(a,o)},render:p,addToRenderList:g,dispose:A}}function Wb(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(C,w,B,R,U){let P=!1,F=d(C,R,B,w);r!==F&&(r=F,l(r.object)),P=f(C,R,B,U),P&&p(C,R,B,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(P||a)&&(a=!1,_(C,w,B,R),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return i.createVertexArray()}function l(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function d(C,w,B,R){let U=R.wireframe===!0,P=n[w.id];P===void 0&&(P={},n[w.id]=P);let F=C.isInstancedMesh===!0?C.id:0,H=P[F];H===void 0&&(H={},P[F]=H);let O=H[B.id];O===void 0&&(O={},H[B.id]=O);let L=O[U];return L===void 0&&(L=u(c()),O[U]=L),L}function u(C){let w=[],B=[],R=[];for(let U=0;U<t;U++)w[U]=0,B[U]=0,R[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:B,attributeDivisors:R,object:C,attributes:{},index:null}}function f(C,w,B,R){let U=r.attributes,P=w.attributes,F=0,H=B.getAttributes();for(let O in H)if(H[O].location>=0){let G=U[O],V=P[O];if(V===void 0&&(O==="instanceMatrix"&&C.instanceMatrix&&(V=C.instanceMatrix),O==="instanceColor"&&C.instanceColor&&(V=C.instanceColor)),G===void 0||G.attribute!==V||V&&G.data!==V.data)return!0;F++}return r.attributesNum!==F||r.index!==R}function p(C,w,B,R){let U={},P=w.attributes,F=0,H=B.getAttributes();for(let O in H)if(H[O].location>=0){let G=P[O];G===void 0&&(O==="instanceMatrix"&&C.instanceMatrix&&(G=C.instanceMatrix),O==="instanceColor"&&C.instanceColor&&(G=C.instanceColor));let V={};V.attribute=G,G&&G.data&&(V.data=G.data),U[O]=V,F++}r.attributes=U,r.attributesNum=F,r.index=R}function g(){let C=r.newAttributes;for(let w=0,B=C.length;w<B;w++)C[w]=0}function m(C){A(C,0)}function A(C,w){let B=r.newAttributes,R=r.enabledAttributes,U=r.attributeDivisors;B[C]=1,R[C]===0&&(i.enableVertexAttribArray(C),R[C]=1),U[C]!==w&&(i.vertexAttribDivisor(C,w),U[C]=w)}function x(){let C=r.newAttributes,w=r.enabledAttributes;for(let B=0,R=w.length;B<R;B++)w[B]!==C[B]&&(i.disableVertexAttribArray(B),w[B]=0)}function v(C,w,B,R,U,P,F){F===!0?i.vertexAttribIPointer(C,w,B,U,P):i.vertexAttribPointer(C,w,B,R,U,P)}function _(C,w,B,R){g();let U=R.attributes,P=B.getAttributes(),F=w.defaultAttributeValues;for(let H in P){let O=P[H];if(O.location>=0){let L=U[H];if(L===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(L=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(L=C.instanceColor)),L!==void 0){let G=L.normalized,V=L.itemSize,X=e.get(L);if(X===void 0)continue;let z=X.buffer,K=X.type,j=X.bytesPerElement,ce=K===i.INT||K===i.UNSIGNED_INT||L.gpuType===Lc;if(L.isInterleavedBufferAttribute){let ae=L.data,ee=ae.isInterleavedBuffer===!0?ae.stride:ae.itemSize,me=L.offset;if(ae.isInstancedInterleavedBuffer||ae.isInstancedBufferAttribute){for(let fe=0;fe<O.locationSize;fe++)A(O.location+fe,ae.meshPerAttribute);C.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let fe=0;fe<O.locationSize;fe++)m(O.location+fe);i.bindBuffer(i.ARRAY_BUFFER,z);for(let fe=0;fe<O.locationSize;fe++)v(O.location+fe,V/O.locationSize,K,G,ee*j,(me+V/O.locationSize*fe)*j,ce)}else{if(L.isInstancedBufferAttribute){for(let ae=0;ae<O.locationSize;ae++)A(O.location+ae,L.meshPerAttribute);C.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let ae=0;ae<O.locationSize;ae++)m(O.location+ae);i.bindBuffer(i.ARRAY_BUFFER,z);for(let ae=0;ae<O.locationSize;ae++)v(O.location+ae,V/O.locationSize,K,G,V*j,V/O.locationSize*ae*j,ce)}}else if(F!==void 0){let G=F[H];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(O.location,G);break;case 3:i.vertexAttrib3fv(O.location,G);break;case 4:i.vertexAttrib4fv(O.location,G);break;default:i.vertexAttrib1fv(O.location,G)}}}}x()}function M(){I();for(let C in n){let w=n[C];for(let B in w){let R=w[B];for(let U in R){let P=R[U];for(let F in P)h(P[F].object),delete P[F];delete R[U]}}delete n[C]}}function E(C){if(n[C.id]===void 0)return;let w=n[C.id];for(let B in w){let R=w[B];for(let U in R){let P=R[U];for(let F in P)h(P[F].object),delete P[F];delete R[U]}}delete n[C.id]}function b(C){for(let w in n){let B=n[w];for(let R in B){let U=B[R];if(U[C.id]===void 0)continue;let P=U[C.id];for(let F in P)h(P[F].object),delete P[F];delete U[C.id]}}}function y(C){for(let w in n){let B=n[w],R=C.isInstancedMesh===!0?C.id:0,U=B[R];if(U!==void 0){for(let P in U){let F=U[P];for(let H in F)h(F[H].object),delete F[H];delete U[P]}delete B[R],Object.keys(B).length===0&&delete n[w]}}}function I(){S(),a=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:S,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:m,disableUnusedAttributes:x}}function Kb(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function qb(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(b){return!(b!==jt&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){let y=b===Ct&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==ot&&b!==Yt&&!y&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(nt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&nt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),A=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:m,maxAttributes:A,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:_,maxSamples:M,samples:E}}function Xb(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Mn,o=new rt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,A=i.get(d);if(!s||p===null||p.length===0||r&&!m)r?h(null):l();else{let x=r?0:n,v=x*4,_=A.clippingState||null;c.value=_,_=h(p,u,v,f);for(let M=0;M!==v;++M)_[M]=t[M];A.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,p){let g=d!==null?d.length:0,m=null;if(g!==0){if(m=c.value,p!==!0||m===null){let A=f+g*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<A)&&(m=new Float32Array(A));for(let v=0,_=f;v!==g;++v,_+=4)a.copy(d[v]).applyMatrix4(x,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function tp(i,e,t){return new er(i,{minFilter:Ht,generateMipmaps:e,type:Ct,colorSpace:an,depthBuffer:t})}function go(i,e,t){return new Ut({name:i,uniforms:e,vertexShader:At.cube_vert,fragmentShader:t,side:Zt,blending:ki,depthTest:!1,depthWrite:!1})}function ev(){return go("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Mp}u

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
	`)}function tv(){return go("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ep}},`

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
	`)}function nv(){return go("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Yb}
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
	`)}function np(){return go("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function ip(){return go("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function iv(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Xr||f===Pc)if(e.has(u)){let p=e.get(u).texture;return o(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let g=new er(p.height);return g.fromEquirectangularTexture(i,u),e.set(u,g),u.addEventListener("dispose",l),o(g.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,p=f===Xr||f===Pc,g=f===fs||f===qr;if(p||g){let m=t.get(u),A=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==A)return n===null&&(n=new ua(i)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let x=u.image;return p&&x&&x.height>0||g&&x&&c(x)?(n===null&&(n=new ua(i)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===Xr?u.mapping=fs:f===Pc&&(u.mapping=qr),u}function c(u){let f=0,p=6;for(let g=0;g<p;g++)u[g]!==void 0&&f++;return f===p}function l(u){let f=u.target;f.removeEventListener("dispose",l);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function sv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Cs("WebGLRenderer: "+n+" extension not supported."),s}}}function rv(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(p=>delete s[p]);function o(p){c(p.target)}function c(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",o),delete s[p.id],a.unregister(p);let g=r.get(p);g&&(e.remove(g),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function l(p,g){return s[g.id]!==void 0||(g.addEventListener("dispose",o),s[g.id]=new WeakRef(g),a.register(g,g.id,g),t.memory.geometries++),g}function h(p){let g=p.attributes;for(let m in g)e.update(g[m],i.ARRAY_BUFFER)}function d(p){let g=p.index,m=p.attributes.position,A=0;if(m===void 0)return;let x=g!==null?g.array.length:m.array.length/3-1,v=m.count>=65535?Qa:Ga,_=new v(Math.ceil(x/3)*6,1),M=_.array;if(g!==null){let b=g.array;A=g.version;for(let y=0,I=0;y<x;y+=3){let S=b[y+0],C=b[y+1],w=b[y+2];M[I++]=S,M[I++]=C,M[I++]=C,M[I++]=w,M[I++]=w,M[I++]=S}}else{A=m.version;for(let b=0,y=0;b<x;b+=3){let I=b+0,S=b+1,C=b+2;M[y++]=I,M[y++]=S,M[y++]=S,M[y++]=C,M[y++]=C,M[y++]=I}}_.version=A;let E=r.get(p);E&&e.remove(E),r.set(p,_)}function u(p){let g=r.get(p);if(g){let m=p.index;m!==null&&g.version<m.version&&d(p)}else d(p);return r.get(p)}function f(){for(let p in s){let g=s[p].deref();g!==void 0&&c(g)}}return{get:l,update:h,getWireframeAttribute:u,dispose:f}}function av(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*a),t.update(u,n,1)}function l(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let g=0;for(let m=0;m<f;m++)g+=u[m];t.update(g,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function ov(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:ct("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function cv(i,e,t){let n=new WeakMap,s=new mt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let I=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",I)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],v=0;f===!0&&(v=1),p===!0&&(v=2),g===!0&&(v=3);let _=o.attributes.position.count*v,M=1;_>e.maxTextureSize&&(M=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let E=new Float32Array(_*M*4*d),b=new Oa(E,_,M,d);b.type=Yt,b.needsUpdate=!0;let y=v*4;for(let S=0;S<d;S++){let C=m[S],w=A[S],B=x[S],R=_*M*4*S;for(let U=0;U<C.count;U++){let P=U*y;f===!0&&(s.fromBufferAttribute(C,U),E[R+P+0]=s.x,E[R+P+1]=s.y,E[R+P+2]=s.z,E[R+P+3]=0),p===!0&&(s.fromBufferAttribute(w,U),E[R+P+4]=s.x,E[R+P+5]=s.y,E[R+P+6]=s.z,E[R+P+7]=0),g===!0&&(s.fromBufferAttribute(B,U),E[R+P+8]=s.x,E[R+P+9]=s.y,E[R+P+10]=s.z,E[R+P+11]=B.itemSize===4?s.w:1)}}u={count:d,texture:b,size:new ge(_,M)},n.set(o,u),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let g=0;g<l.length;g++)f+=l[g];let p=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",p),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function lv(i,e,t,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,d=l.geometry,u=e.get(l,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}function hv(i,e,t,n,s,r){let a=new qt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new lt;h.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ke([0,2,0,0,2,0],2));let d=new Mc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Qe(h,d),f=new Gs(-1,1,1,-1,0,1),p=null,g=null,m=!1,A,x=null,v=[],_=!1;this.setSize=function(M,E){a.setSize(M,E),o!==null&&o.setSize(M,E),c!==null&&c.setSize(M,E);for(let b=0;b<v.length;b++){let y=v[b];y.setSize&&y.setSize(M,E)}},this.setEffects=function(M){v=M,_=v.length>0&&v[0].isRenderPass===!0;let E=a.width,b=a.height;v.length>0&&o===null&&(o=new qt(E,b,{type:Ct,depthBuffer:!1,stencilBuffer:!1}),c=new qt(E,b,{type:Ct,depthBuffer:!1,stencilBuffer:!1}));let y=s===!0&&v.some(I=>I.needsDepthTexture===!0);y!==(a.depthTexture!==null)&&(y===!0&&l===null&&(l=new Qn(E,b),r===!0&&(l.format=Qi,l.type=Ws)),a.dispose(),a.depthTexture=y?l:null,a.resolveDepthBuffer=y,a.storeMultisampledDepthBuffer=y);for(let I=0;I<v.length;I++){let S=v[I];S.setSize&&S.setSize(E,b),y&&S.needsDepthTexture===!0&&S.setDepthTexture&&S.setDepthTexture(l)}},this.begin=function(M,E){if(m||M.toneMapping===_i&&v.length===0)return!1;if(x=E,E!==null){let b=E.width,y=E.height;(a.width!==b||a.height!==y)&&this.setSize(b,y)}return _===!1&&M.setRenderTarget(a),A=M.toneMapping,M.toneMapping=_i,!0},this.hasRenderPass=function(){return _},this.end=function(M,E){M.toneMapping=A,m=!0;let b=a,y=o;for(let I=0;I<v.length;I++){let S=v[I];S.enabled!==!1&&(S.render(M,y,b,E),S.needsSwap!==!1&&(b=y,y=y===o?c:o))}if(p!==M.outputColorSpace||g!==M.toneMapping){p=M.outputColorSpace,g=M.toneMapping,d.defines={},xt.getTransfer(p)===Dt&&(d.defines.SRGB_TRANSFER="");let I=uv[g];I&&(d.defines[I]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(x),M.render(u,f),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),d.dispose()}}function ha(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=sp[s];if(r===void 0&&(r=new Float32Array(s),sp[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function on(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function cn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ol(i,e){let t=rp[e];t===void 0&&(t=new Int32Array(e),rp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function dv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function fv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2fv(this.addr,e),cn(t,e)}}function pv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;i.uniform3fv(this.addr,e),cn(t,e)}}function Av(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4fv(this.addr,e),cn(t,e)}}function mv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(on(t,n))return;cp.set(n),i.uniformMatrix2fv(this.addr,!1,cp),cn(t,n)}}function gv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(on(t,n))return;op.set(n),i.uniformMatrix3fv(this.addr,!1,op),cn(t,n)}}function xv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(on(t,n))return;ap.set(n),i.uniformMatrix4fv(this.addr,!1,ap),cn(t,n)}}function _v(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function bv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2iv(this.addr,e),cn(t,e)}}function vv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3iv(this.addr,e),cn(t,e)}}function yv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4iv(this.addr,e),cn(t,e)}}function Mv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ev(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2uiv(this.addr,e),cn(t,e)}}function Sv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3uiv(this.addr,e),cn(t,e)}}function wv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4uiv(this.addr,e),cn(t,e)}}function cl(i){return i.version===0&&(i.compareFunction=Lu,i.needsUpdate=!0),i}function Cv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=cl(wp):r=Sp,t.setTexture2D(e||r,s)}function Tv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ip,s)}function Iv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=cl(Cp):r=Rp,t.setTextureCube(e||r,s)}function Rv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Tp,s)}function Bv(i){switch(i){case 5126:return dv;case 35664:return fv;case 35665:return pv;case 35666:return Av;case 35674:return mv;case 35675:return gv;case 35676:return xv;case 5124:case 35670:return _v;case 35667:case 35671:return bv;case 35668:case 35672:return vv;case 35669:case 35673:return yv;case 5125:return Mv;case 36294:return Ev;case 36295:return Sv;case 36296:return wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Cv;case 35679:case 36299:case 36307:return Tv;case 35680:case 36300:case 36308:case 36293:return Iv;case 36289:case 36303:case 36311:case 36292:return Rv}}function Dv(i,e){i.uniform1fv(this.addr,e)}function Fv(i,e){let t=ha(e,this.size,2);i.uniform2fv(this.addr,t)}function Pv(i,e){let t=ha(e,this.size,3);i.uniform3fv(this.addr,t)}function Lv(i,e){let t=ha(e,this.size,4);i.uniform4fv(this.addr,t)}function Nv(i,e){let t=ha(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Uv(i,e){let t=ha(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ov(i,e){let t=ha(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function kv(i,e){i.uniform1iv(this.addr,e)}function Gv(i,e){i.uniform2iv(this.addr,e)}function Qv(i,e){i.uniform3iv(this.addr,e)}function zv(i,e){i.uniform4iv(this.addr,e)}function Vv(i,e){i.uniform1uiv(this.addr,e)}function Hv(i,e){i.uniform2uiv(this.addr,e)}function Wv(i,e){i.uniform3uiv(this.addr,e)}function Kv(i,e){i.uniform4uiv(this.addr,e)}function qv(i,e,t){let n=this.cache,s=e.length,r=ol(t,s);on(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=cl(wp):a=Sp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Xv(i,e,t){let n=this.cache,s=e.length,r=ol(t,s);on(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ip,r[a])}function Jv(i,e,t){let n=this.cache,s=e.length,r=ol(t,s);on(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=cl(Cp):a=Rp;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function Yv(i,e,t){let n=this.cache,s=e.length,r=ol(t,s);on(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Tp,r[a])}function jv(i){switch(i){case 5126:return Dv;case 35664:return Fv;case 35665:return Pv;case 35666:return Lv;case 35674:return Nv;case 35675:return Uv;case 35676:return Ov;case 5124:case 35670:return kv;case 35667:case 35671:return Gv;case 35668:case 35672:return Qv;case 35669:case 35673:return zv;case 5125:return Vv;case 36294:return Hv;case 36295:return Wv;case 36296:return Kv;case 35678:case 36198:case 36298:case 36306:case 35682:return qv;case 35679:case 36299:case 36307:return Xv;case 35680:case 36300:case 36308:case 36293:return Jv;case 36289:case 36303:case 36311:case 36292:return Yv}}function lp(i,e){i.seq.push(e),i.map[e.id]=e}function Zv(i,e,t){let n=i.name,s=n.length;for(Xu.lastIndex=0;;){let r=Xu.exec(n),a=Xu.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){lp(t,l===void 0?new Yu(o,i,e):new ju(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Zu(o),lp(t,d)),t=d}}}function up(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function ty(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function ny(i){xt._getMatrix(hp,xt.workingColorSpace,i);let e=`mat3( ${hp.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(i)){case Cr:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function dp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+ty(i.getShaderSource(e),o)}else return r}function iy(i,e){let t=ny(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function ry(i,e){let t=sy[e];return t===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ay(){xt.getLuminanceCoefficients(rl);let i=rl.x.toFixed(4),e=rl.y.toFixed(4),t=rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mo).join(`
`)}function cy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ly(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function mo(i){return i!==""}function fp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function pp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function $u(i){return i.replace(uy,hy)}function hy(i,e){let t=At[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return $u(t)}function Ap(i){return i.replace(dy,fy)}function fy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Ay(i){return py[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function gy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":my[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}function _y(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":xy[i.combine]||"ENVMAP_BLENDING_NONE"}function by(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Ay(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=gy(t),d=_y(t),u=oy(t),f=cy(r),p=s.createProgram(),g,m,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(mo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(mo).join(`
`),m.length>0&&(m+=`
`)):(g=[mp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mo).join(`
`),m=[mp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?At.tonemapping_pars_fragment:"",t.toneMapping!==_i?ry("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",At.colorspace_pars_fragment,iy("linearToOutputTexel",t.outputColorSpace),ay(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mo).join(`
`)),a=$u(a),a=fp(a,t),a=pp(a,t),o=$u(o),o=fp(o,t),o=pp(o,t),a=Ap(a),o=Ap(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=A+g+a,v=A+m+o,_=up(s,s.VERTEX_SHADER,x),M=up(s,s.FRAGMENT_SHADER,v);s.attachShader(p,_),s.attachShader(p,M),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function E(S){if(i.debug.checkShaderErrors){let C=s.getProgramInfoLog(p)||"",w=s.getShaderInfoLog(_)||"",B=s.getShaderInfoLog(M)||"",R=C.trim(),U=w.trim(),P=B.trim(),F=!0,H=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,_,M);else{let O=dp(s,_,"vertex"),L=dp(s,M,"fragment");ct("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+R+`
`+O+`
`+L)}else R!==""?nt("WebGLProgram: Program Info Log:",R):(U===""||P==="")&&(H=!1);H&&(S.diagnostics={runnable:F,programLog:R,vertexShader:{log:U,prefix:g},fragmentShader:{log:P,prefix:m}})}s.deleteShader(_),s.deleteShader(M),b=new la(s,p),y=ly(s,p)}let b;this.getUniforms=function(){return b===void 0&&E(this),b};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(p,$v)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ey++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=_,this.fragmentShader=M,this}function yy(i){return i===Nn||i===Ys||i===js}function My(i,e,t,n,s,r){let a=new Dr,o=new eh,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,y,I,S,C,w){let B=S.fog,R=C.geometry,U=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?S.environment:null,P=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,F=e.get(b.envMap||U,P),H=u[b.type],O=n.precision;b.precision!==null&&(O=n.getMaxPrecision(b.precision),O!==b.precision&&nt("WebGLProgram.getParameters:",b.precision,"not supported, using",O,"instead."));let L=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,G=L!==void 0?L.length:0,V=0;R.morphAttributes.position!==void 0&&(V=1),R.morphAttributes.normal!==void 0&&(V=2),R.morphAttributes.color!==void 0&&(V=3);let X,z,K,j;if(H){let Ne=vi[H];X=Ne.vertexShader,z=Ne.fragmentShader}else{X=b.vertexShader,z=b.fragmentShader;let Ne=o.getVertexShaderStage(b),pt=o.getFragmentShaderStage(b);o.update(b,Ne,pt),K=Ne.id,j=pt.id}let ce=i.getRenderTarget(),ae=i.state.buffers.depth.getReversed(),ee=C.isInstancedMesh===!0,me=C.isBatchedMesh===!0,fe=!!b.map,Re=!!b.matcap,Se=!!F,te=Se&&F.isPMREMTexture===!0,xe=!!b.aoMap,_e=!!b.lightMap,be=!!b.bumpMap&&b.wireframe===!1,Ee=!!b.normalMap,le=!!b.displacementMap,ve=!!b.emissiveMap,Le=!!b.metalnessMap,Oe=!!b.roughnessMap,ze=b.anisotropy>0,Q=b.clearcoat>0,qe=b.diffuseRoughness>0,ye=b.dispersion>0,De=b.retroreflectivity>0,$=b.iridescence>0,Fe=b.sheen>0,ke=b.transmission>0,Ge=ze&&!!b.anisotropyMap,k=Q&&!!b.clearcoatMap,D=Q&&!!b.clearcoatNormalMap,Z=Q&&!!b.clearcoatRoughnessMap,pe=qe&&!!b.diffuseRoughnessMap,se=$&&!!b.iridescenceMap,Me=$&&!!b.iridescenceThicknessMap,Ie=Fe&&!!b.sheenColorMap,de=Fe&&!!b.sheenRoughnessMap,he=!!b.specularMap,Ce=!!b.specularColorMap,W=!!b.specularIntensityMap,ue=ke&&!!b.transmissionMap,re=ke&&!!b.thicknessMap,Ue=!!b.gradientMap,we=!!b.alphaMap,Pe=b.alphaTest>0,et=!!b.alphaHash,q=!!b.extensions,Y=_i;b.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Y=i.toneMapping);let Ae=te?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,Te={shaderID:H,shaderType:b.type,shaderName:b.name,vertexShader:X,fragmentShader:z,defines:b.defines,customVertexShaderID:K,customFragmentShaderID:j,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:O,batching:me,batchingColor:me&&C._colorsTexture!==null,instancing:ee,instancingColor:ee&&C.instanceColor!==null,instancingMorph:ee&&C.morphTexture!==null,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:xt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:fe,matcap:Re,envMap:Se,envMapMode:Se&&F.mapping,envMapPMREM:te,envMapMaxLod:te?Ae.length-1:null,envMapSize:te?Ae[0].width:null,aoMap:xe,lightMap:_e,bumpMap:be,normalMap:Ee,displacementMap:le,emissiveMap:ve,normalMapObjectSpace:Ee&&b.normalMapType===Lf,normalMapTangentSpace:Ee&&b.normalMapType===tl,packedNormalMap:Ee&&b.normalMapType===tl&&yy(b.normalMap.format),metalnessMap:Le,roughnessMap:Oe,anisotropy:ze,anisotropyMap:Ge,clearcoat:Q,clearcoatMap:k,clearcoatNormalMap:D,clearcoatRoughnessMap:Z,diffuseRoughness:qe,diffuseRoughnessMap:pe,dispersion:ye,retroreflection:De,iridescence:$,iridescenceMap:se,iridescenceThicknessMap:Me,sheen:Fe,sheenColorMap:Ie,sheenRoughnessMap:de,specularMap:he,specularColorMap:Ce,specularIntensityMap:W,transmission:ke,transmissionMap:ue,thicknessMap:re,gradientMap:Ue,opaque:b.transparent===!1&&b.blending===Kr&&b.alphaToCoverage===!1,alphaMap:we,alphaTest:Pe,alphaHash:et,combine:b.combine,mapUv:fe&&f(b.map.channel),aoMapUv:xe&&f(b.aoMap.channel),lightMapUv:_e&&f(b.lightMap.channel),bumpMapUv:be&&f(b.bumpMap.channel),normalMapUv:Ee&&f(b.normalMap.channel),displacementMapUv:le&&f(b.displacementMap.channel),emissiveMapUv:ve&&f(b.emissiveMap.channel),metalnessMapUv:Le&&f(b.metalnessMap.channel),roughnessMapUv:Oe&&f(b.roughnessMap.channel),anisotropyMapUv:Ge&&f(b.anisotropyMap.channel),clearcoatMapUv:k&&f(b.clearcoatMap.channel),clearcoatNormalMapUv:D&&f(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&f(b.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:pe&&f(b.diffuseRoughnessMap.channel),iridescenceMapUv:se&&f(b.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&f(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&f(b.sheenColorMap.channel),sheenRoughnessMapUv:de&&f(b.sheenRoughnessMap.channel),specularMapUv:he&&f(b.specularMap.channel),specularColorMapUv:Ce&&f(b.specularColorMap.channel),specularIntensityMapUv:W&&f(b.specularIntensityMap.channel),transmissionMapUv:ue&&f(b.transmissionMap.channel),thicknessMapUv:re&&f(b.thicknessMap.channel),alphaMapUv:we&&f(b.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(Ee||ze),vertexNormals:!!R.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!R.attributes.uv&&(fe||we),fog:!!B,useFog:b.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||R.attributes.normal===void 0&&Ee===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ae,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:V,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:w.filter(Ne=>Ne.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Y,decodeVideoTexture:fe&&b.map.isVideoTexture===!0&&xt.getTransfer(b.map.colorSpace)===Dt,decodeVideoTextureEmissive:ve&&b.emissiveMap.isVideoTexture===!0&&xt.getTransfer(b.emissiveMap.colorSpace)===Dt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Lt,flipSided:b.side===Zt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:q&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(q&&b.extensions.multiDraw===!0||me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Te.vertexUv1s=c.has(1),Te.vertexUv2s=c.has(2),Te.vertexUv3s=c.has(3),c.clear(),Te}function g(b){let y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(let I in b.defines)y.push(I),y.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(m(y,b),A(y,b),y.push(i.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function m(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapPMREM),b.push(y.envMapMaxLod),b.push(y.envMapSize),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.diffuseRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.numSunLights),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numSunLightShadows),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.numLightProbeGrids),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function A(b,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.diffuseRoughness&&a.enable(25),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),b.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),b.push(a.mask)}function x(b){let y=u[b.type],I;if(y){let S=vi[y];I=il.clone(S.uniforms)}else I=b.uniforms;return I}function v(b,y){let I=h.get(y);return I!==void 0?++I.usedTimes:(I=new by(i,y,b,s),l.push(I),h.set(y,I)),I}function _(b){if(--b.usedTimes===0){let y=l.indexOf(b);l[y]=l[l.length-1],l.pop(),h.delete(b.cacheKey),b.destroy()}}function M(b){o.remove(b)}function E(){o.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:x,acquireProgram:v,releaseProgram:_,releaseShaderCache:M,programs:l,dispose:E}}function Ey(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Sy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function gp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function xp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,p,g,m,A){let x=i[e];return x===void 0?(x={id:u.id,object:u,geometry:f,material:p,materialVariant:a(u),groupOrder:g,renderOrder:u.renderOrder,z:m,group:A},i[e]=x):(x.id=u.id,x.object=u,x.geometry=f,x.material=p,x.materialVariant=a(u),x.groupOrder=g,x.renderOrder=u.renderOrder,x.z=m,x.group=A),e++,x}function c(u,f,p,g,m,A,x){x.reversedDepth===!0&&(m=-m);let v=o(u,f,p,g,m,A);p.transmission>0?n.push(v):p.transparent===!0?s.push(v):t.push(v)}function l(u,f,p,g,m,A){let x=o(u,f,p,g,m,A);p.transmission>0?n.unshift(x):p.transparent===!0?s.unshift(x):t.unshift(x)}function h(u,f){t.length>1&&t.sort(u||Sy),n.length>1&&n.sort(f||gp),s.length>1&&s.sort(f||gp)}function d(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function wy(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new xp,i.set(n,[a])):s>=r.length?(a=new xp,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Cy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new T,color:new We};break;case"SpotLight":t={position:new T,direction:new T,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new T,halfWidth:new T,halfHeight:new T};break}return i[e.id]=t,t}}}function Ty(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function Ry(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function By(i){let e=new Cy,t=Ty(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new T);let s=new T,r=new Be,a=new Be;function o(l){let h=0,d=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,p=0,g=0,m=0,A=0,x=0,v=0,_=0,M=0,E=0,b=0,y=0,I=0,S=0;l.sort(Ry);for(let w=0,B=l.length;w<B;w++){let R=l[w],U=R.color,P=R.intensity,F=R.distance,H=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Nn?H=R.shadow.map.texture:H=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=U.r*P,d+=U.g*P,u+=U.b*P;else if(R.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(R.sh.coefficients[O],P);S++}else if(R.isSunLight){let O=e.get(R);if(O.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let L=R.shadow,G=t.get(R);G.shadowIntensity=L.intensity,G.shadowBias=L.bias,G.shadowNormalBias=L.normalBias,G.shadowRadius=L.radius,G.shadowMapSize.copy(L.mapSize).multiply(L.getFrameExtents()),n.sunShadow[p]=G,n.sunShadowMap[p]=H;let V=L.getViewportCount();for(let X=0;X<V;X++)n.sunShadowMatrix[g+X]=L.getMatrix(X),n.sunShadowCascade[g+X]=L._cascadeData[X];g+=V,p++}n.sun[f]=O,f++}else if(R.isDirectionalLight){let O=e.get(R);if(O.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let L=R.shadow,G=t.get(R);G.shadowIntensity=L.intensity,G.shadowBias=L.bias,G.shadowNormalBias=L.normalBias,G.shadowRadius=L.radius,G.shadowMapSize=L.mapSize,n.directionalShadow[m]=G,n.directionalShadowMap[m]=H,n.directionalShadowMatrix[m]=R.shadow.matrix,M++}n.directional[m]=O,m++}else if(R.isSpotLight){let O=e.get(R);O.position.setFromMatrixPosition(R.matrixWorld),O.color.copy(U).multiplyScalar(P),O.distance=F,O.coneCos=Math.cos(R.angle),O.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),O.decay=R.decay,n.spot[x]=O;let L=R.shadow;if(R.map&&(n.spotLightMap[y]=R.map,y++,L.updateMatrices(R),R.castShadow&&I++),n.spotLightMatrix[x]=L.matrix,R.castShadow){let G=t.get(R);G.shadowIntensity=L.intensity,G.shadowBias=L.bias,G.shadowNormalBias=L.normalBias,G.shadowRadius=L.radius,G.shadowMapSize=L.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=H,b++}x++}else if(R.isRectAreaLight){let O=e.get(R);O.color.copy(U).multiplyScalar(P),O.halfWidth.set(R.width*.5,0,0),O.halfHeight.set(0,R.height*.5,0),n.rectArea[v]=O,v++}else if(R.isPointLight){let O=e.get(R);if(O.color.copy(R.color).multiplyScalar(R.intensity),O.distance=R.distance,O.decay=R.decay,R.castShadow){let L=R.shadow,G=t.get(R);G.shadowIntensity=L.intensity,G.shadowBias=L.bias,G.shadowNormalBias=L.normalBias,G.shadowRadius=L.radius,G.shadowMapSize=L.mapSize,G.shadowCameraNear=L.camera.near,G.shadowCameraFar=L.camera.far,n.pointShadow[A]=G,n.pointShadowMap[A]=H,n.pointShadowMatrix[A]=R.shadow.matrix,E++}n.point[A]=O,A++}else if(R.isHemisphereLight){let O=e.get(R);O.skyColor.copy(R.color).multiplyScalar(P),O.groundColor.copy(R.groundColor).multiplyScalar(P),n.hemi[_]=O,_++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Xe.LTC_FLOAT_1,n.rectAreaLTC2=Xe.LTC_FLOAT_2):(n.rectAreaLTC1=Xe.LTC_HALF_1,n.rectAreaLTC2=Xe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let C=n.hash;(C.sunLength!==f||C.directionalLength!==m||C.pointLength!==A||C.spotLength!==x||C.rectAreaLength!==v||C.hemiLength!==_||C.numSunShadows!==p||C.numDirectionalShadows!==M||C.numPointShadows!==E||C.numSpotShadows!==b||C.numSpotMaps!==y||C.numLightProbes!==S)&&(n.sun.length=f,n.directional.length=m,n.spot.length=x,n.rectArea.length=v,n.point.length=A,n.hemi.length=_,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=g,n.sunShadowCascade.length=g,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=b,n.spotShadowMap.length=b,n.spotLightMatrix.length=b+y-I,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=S,C.sunLength=f,C.directionalLength=m,C.pointLength=A,C.spotLength=x,C.rectAreaLength=v,C.hemiLength=_,C.numSunShadows=p,C.numDirectionalShadows=M,C.numPointShadows=E,C.numSpotShadows=b,C.numSpotMaps=y,C.numLightProbes=S,n.version=Iy++)}function c(l,h){let d=0,u=0,f=0,p=0,g=0,m=0,A=h.matrixWorldInverse;for(let x=0,v=l.length;x<v;x++){let _=l[x];if(_.isSunLight){let M=n.sun[d];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(A),d++}else if(_.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(A),u++}else if(_.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(A),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(A),p++}else if(_.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(A),a.identity(),r.copy(_.matrixWorld),r.premultiply(A),a.extractRotation(r),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(A),f++}else if(_.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(A),m++}}}return{setup:o,setupView:c,state:n}}function _p(i){let e=new By(i),t=[],n=[],s=[];function r(d){h.camera=d,t.length=0,n.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):t.push(d)}function o(d){n.push(d)}function c(){e.setup(t),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function l(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Dy(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new _p(i),e.set(s,[o])):r>=a.length?(o=new _p(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function Uy(i,e,t){let n=new Yn,s=new ge,r=new ge,a=new mt,o=new Ec,c=new Sc,l={},h=t.maxTextureSize,d={[Ln]:Zt,[Zt]:Ln,[Lt]:Lt},u=new Ut({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:Fy,fragmentShader:Py}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new lt;p.setAttribute("position",new St(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Qe(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zs;let A=this.type;this.render=function(E,b,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===hf&&(nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=zs);let I=i.getRenderTarget(),S=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),w=i.state;w.setBlending(ki),w.buffers.depth.getReversed()===!0?w.buffers.color.setClear(0,0,0,0):w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);let B=A!==this.type;B&&b.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(U=>U.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,U=E.length;R<U;R++){let P=E[R],F=P.shadow;if(F===void 0){nt("WebGLShadowMap:",P,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let H=F.getFrameExtents();s.multiply(H),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/H.x),s.x=r.x*H.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/H.y),s.y=r.y*H.y,F.mapSize.y=r.y));let O=i.state.buffers.depth.getReversed();if(F.camera._reversedDepth=O,F.map===null||B===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Wr){if(P.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new qt(s.x,s.y,{format:Nn,type:Ct,minFilter:vt,magFilter:vt,generateMipmaps:!1}),F.map.texture.name=P.name+".shadowMap",F.map.depthTexture=new Qn(s.x,s.y,Yt),F.map.depthTexture.name=P.name+".shadowMapDepth",F.map.depthTexture.format=Di,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Pt,F.map.depthTexture.magFilter=Pt}else P.isPointLight?(F.map=new er(s.x),F.map.depthTexture=new Ya(s.x,wn)):(F.map=new qt(s.x,s.y),F.map.depthTexture=new Qn(s.x,s.y,wn)),F.map.depthTexture.name=P.name+".shadowMap",F.map.depthTexture.format=Di,this.type===zs?(F.map.depthTexture.compareFunction=O?Pu:Fu,F.map.depthTexture.minFilter=vt,F.map.depthTexture.magFilter=vt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Pt,F.map.depthTexture.magFilter=Pt);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==s.x||F.map.height!==s.y)&&F.map.setSize(s.x,s.y);let L=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();P.isPointLight!==!0&&F.updateMatrices(P,y);let G=(F.camera.layers.mask&4294967294)!==0?F.camera.layers:y.layers;for(let V=0;V<L;V++){let X=F.getCamera(V);if(P.isPointLight){let z=F.camera,K=F.matrix,j=P.distance||z.far;j!==z.far&&(z.far=j,z.updateProjectionMatrix()),Ao.setFromMatrixPosition(P.matrixWorld),z.position.copy(Ao),Ju.copy(z.position),Ju.add(Ly[V]),z.up.copy(Ny[V]),z.lookAt(Ju),z.updateMatrixWorld(),K.makeTranslation(-Ao.x,-Ao.y,-Ao.z),bp.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),F._frustum.setFromProjectionMatrix(bp,z.coordinateSystem,z.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,V),i.clear();else{V===0&&(i.setRenderTarget(F.map),i.clear());let z=F.getViewport(V);a.set(r.x*z.x,r.y*z.y,r.x*z.z,r.y*z.w),w.viewport(a)}n=F.getFrustum(V),_(b,y,X,P,G,this.type)}F.isPointLightShadow!==!0&&this.type===Wr&&x(F,y),F.needsUpdate=!1}A=this.type,m.needsUpdate=!1,i.setRenderTarget(I,S,C)};function x(E,b){let y=e.update(g);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new qt(s.x,s.y,{format:Nn,type:Ct}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(b,null,y,u,g,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(b,null,y,f,g,null)}function v(E,b,y,I){let S=null,C=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)S=C;else if(S=y.isPointLight===!0?c:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){let w=S.uuid,B=b.uuid,R=l[w];R===void 0&&(R={},l[w]=R);let U=R[B];U===void 0&&(U=S.clone(),R[B]=U,b.addEventListener("dispose",M)),S=U}if(S.visible=b.visible,S.wireframe=b.wireframe,I===Wr?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:d[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,y.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let w=i.properties.get(S);w.light=y}return S}function _(E,b,y,I,S,C){if(E.visible===!1)return;if(E.layers.test(S)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===Wr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);let R=e.update(E),U=E.material;if(Array.isArray(U)){let P=R.groups;for(let F=0,H=P.length;F<H;F++){let O=P[F],L=U[O.materialIndex];if(L&&L.visible){let G=v(E,L,I,C);E.onBeforeShadow(i,E,b,y,R,G,O),i.renderBufferDirect(y,null,R,G,E,O),E.onAfterShadow(i,E,b,y,R,G,O)}}}else if(U.visible){let P=v(E,U,I,C);E.onBeforeShadow(i,E,b,y,R,P,null),i.renderBufferDirect(y,null,R,P,E,null),E.onAfterShadow(i,E,b,y,R,P,null)}}let B=E.children;for(let R=0,U=B.length;R<U;R++)_(B[R],b,y,I,S,C)}function M(E){E.target.removeEventListener("dispose",M);for(let y in l){let I=l[y],S=E.target.uuid;S in I&&(I[S].dispose(),delete I[S])}}}function Oy(i,e){function t(){let W=!1,ue=new mt,re=null,Ue=new mt(0,0,0,0);return{setMask:function(we){re!==we&&!W&&(i.colorMask(we,we,we,we),re=we)},setLocked:function(we){W=we},setClear:function(we,Pe,et,q,Y){Y===!0&&(we*=q,Pe*=q,et*=q),ue.set(we,Pe,et,q),Ue.equals(ue)===!1&&(i.clearColor(we,Pe,et,q),Ue.copy(ue))},reset:function(){W=!1,re=null,Ue.set(-1,0,0,0)}}}function n(){let W=!1,ue=!1,re=null,Ue=null,we=null;return{setReversed:function(Pe){if(ue!==Pe){let et=e.get("EXT_clip_control");Pe?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT),ue=Pe;let q=we;we=null,this.setClear(q)}},getReversed:function(){return ue},setTest:function(Pe){Pe?ae(i.DEPTH_TEST):ee(i.DEPTH_TEST)},setMask:function(Pe){re!==Pe&&!W&&(i.depthMask(Pe),re=Pe)},setFunc:function(Pe){if(ue&&(Pe=Wf[Pe]),Ue!==Pe){switch(Pe){case oc:i.depthFunc(i.NEVER);break;case cc:i.depthFunc(i.ALWAYS);break;case lc:i.depthFunc(i.LESS);break;case Sr:i.depthFunc(i.LEQUAL);break;case uc:i.depthFunc(i.EQUAL);break;case hc:i.depthFunc(i.GEQUAL);break;case dc:i.depthFunc(i.GREATER);break;case fc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ue=Pe}},setLocked:function(Pe){W=Pe},setClear:function(Pe){we!==Pe&&(we=Pe,ue&&(Pe=1-Pe),i.clearDepth(Pe))},reset:function(){W=!1,re=null,Ue=null,we=null,ue=!1}}}function s(){let W=!1,ue=null,re=null,Ue=null,we=null,Pe=null,et=null,q=null,Y=null;return{setTest:function(Ae){W||(Ae?ae(i.STENCIL_TEST):ee(i.STENCIL_TEST))},setMask:function(Ae){ue!==Ae&&!W&&(i.stencilMask(Ae),ue=Ae)},setFunc:function(Ae,Te,Ne){(re!==Ae||Ue!==Te||we!==Ne)&&(i.stencilFunc(Ae,Te,Ne),re=Ae,Ue=Te,we=Ne)},setOp:function(Ae,Te,Ne){(Pe!==Ae||et!==Te||q!==Ne)&&(i.stencilOp(Ae,Te,Ne),Pe=Ae,et=Te,q=Ne)},setLocked:function(Ae){W=Ae},setClear:function(Ae){Y!==Ae&&(i.clearStencil(Ae),Y=Ae)},reset:function(){W=!1,ue=null,re=null,Ue=null,we=null,Pe=null,et=null,q=null,Y=null}}}let r=new t,a=new n,o=new s,c={},l=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],g=null,m=!1,A=null,x=null,v=null,_=null,M=null,E=null,b=null,y=new We(0,0,0),I=0,S=!1,C=null,w=null,B=null,R=null,U=null,P=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,H=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(O)[1]),F=H>=1):O.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),F=H>=2);let L=null,G={},V=i.getParameter(i.SCISSOR_BOX),X=i.getParameter(i.VIEWPORT),z=new mt().fromArray(V),K=new mt().fromArray(X);function j(W,ue,re,Ue){let we=new Uint8Array(4),Pe=i.createTexture();i.bindTexture(W,Pe),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let et=0;et<re;et++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(ue,0,i.RGBA,1,1,Ue,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(ue+et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return Pe}let ce={};ce[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),ce[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ce[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(i.DEPTH_TEST),a.setFunc(Sr),be(!1),Ee(mu),ae(i.CULL_FACE),xe(ki);function ae(W){h[W]!==!0&&(i.enable(W),h[W]=!0)}function ee(W){h[W]!==!1&&(i.disable(W),h[W]=!1)}function me(W,ue){return u[W]!==ue?(i.bindFramebuffer(W,ue),u[W]=ue,W===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ue),W===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ue),!0):!1}function fe(W,ue){let re=p,Ue=!1;if(W){re=f.get(ue),re===void 0&&(re=[],f.set(ue,re));let we=W.textures;if(re.length!==we.length||re[0]!==i.COLOR_ATTACHMENT0){for(let Pe=0,et=we.length;Pe<et;Pe++)re[Pe]=i.COLOR_ATTACHMENT0+Pe;re.length=we.length,Ue=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,Ue=!0);Ue&&i.drawBuffers(re)}function Re(W){return g!==W?(i.useProgram(W),g=W,!0):!1}let Se={[Vs]:i.FUNC_ADD,[ff]:i.FUNC_SUBTRACT,[pf]:i.FUNC_REVERSE_SUBTRACT};Se[Af]=i.MIN,Se[mf]=i.MAX;let te={[gf]:i.ZERO,[xf]:i.ONE,[_f]:i.SRC_COLOR,[_u]:i.SRC_ALPHA,[Sf]:i.SRC_ALPHA_SATURATE,[Mf]:i.DST_COLOR,[vf]:i.DST_ALPHA,[bf]:i.ONE_MINUS_SRC_COLOR,[bu]:i.ONE_MINUS_SRC_ALPHA,[Ef]:i.ONE_MINUS_DST_COLOR,[yf]:i.ONE_MINUS_DST_ALPHA,[wf]:i.CONSTANT_COLOR,[Cf]:i.ONE_MINUS_CONSTANT_COLOR,[Tf]:i.CONSTANT_ALPHA,[If]:i.ONE_MINUS_CONSTANT_ALPHA};function xe(W,ue,re,Ue,we,Pe,et,q,Y,Ae){if(W===ki){m===!0&&(ee(i.BLEND),m=!1);return}if(m===!1&&(ae(i.BLEND),m=!0),W!==df){if(W!==A||Ae!==S){if((x!==Vs||M!==Vs)&&(i.blendEquation(i.FUNC_ADD),x=Vs,M=Vs),Ae)switch(W){case Kr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uo:i.blendFunc(i.ONE,i.ONE);break;case gu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ct("WebGLState: Invalid blending: ",W);break}else switch(W){case Kr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case gu:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xu:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",W);break}v=null,_=null,E=null,b=null,y.set(0,0,0),I=0,A=W,S=Ae}return}we=we||ue,Pe=Pe||re,et=et||Ue,(ue!==x||we!==M)&&(i.blendEquationSeparate(Se[ue],Se[we]),x=ue,M=we),(re!==v||Ue!==_||Pe!==E||et!==b)&&(i.blendFuncSeparate(te[re],te[Ue],te[Pe],te[et]),v=re,_=Ue,E=Pe,b=et),(q.equals(y)===!1||Y!==I)&&(i.blendColor(q.r,q.g,q.b,Y),y.copy(q),I=Y),A=W,S=!1}function _e(W,ue){W.side===Lt?ee(i.CULL_FACE):ae(i.CULL_FACE);let re=W.side===Zt;ue&&(re=!re),be(re),W.blending===Kr&&W.transparent===!1?xe(ki):xe(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),a.setFunc(W.depthFunc),a.setTest(W.depthTest),a.setMask(W.depthWrite),r.setMask(W.colorWrite);let Ue=W.stencilWrite;o.setTest(Ue),Ue&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),ve(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function be(W){C!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),C=W)}function Ee(W){W!==lf?(ae(i.CULL_FACE),W!==w&&(W===mu?i.cullFace(i.BACK):W===uf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ee(i.CULL_FACE),w=W}function le(W){W!==B&&(F&&i.lineWidth(W),B=W)}function ve(W,ue,re){W?(ae(i.POLYGON_OFFSET_FILL),(R!==ue||U!==re)&&(R=ue,U=re,a.getReversed()&&(ue=-ue,re=-re),i.polygonOffset(ue,re))):ee(i.POLYGON_OFFSET_FILL)}function Le(W){W?ae(i.SCISSOR_TEST):ee(i.SCISSOR_TEST)}function Oe(W){W===void 0&&(W=i.TEXTURE0+P-1),L!==W&&(i.activeTexture(W),L=W)}function ze(W,ue,re){re===void 0&&(L===null?re=i.TEXTURE0+P-1:re=L);let Ue=G[re];Ue===void 0&&(Ue={type:void 0,texture:void 0},G[re]=Ue),(Ue.type!==W||Ue.texture!==ue)&&(L!==re&&(i.activeTexture(re),L=re),i.bindTexture(W,ue||ce[W]),Ue.type=W,Ue.texture=ue)}function Q(){let W=G[L];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function qe(){try{i.compressedTexImage2D(...arguments)}catch(W){ct("WebGLState:",W)}}function ye(){try{i.compressedTexImage3D(...arguments)}catch(W){ct("WebGLState:",W)}}function De(){try{i.texSubImage2D(...arguments)}catch(W){ct("WebGLState:",W)}}function $(){try{i.texSubImage3D(...arguments)}catch(W){ct("WebGLState:",W)}}function Fe(){try{i.compressedTexSubImage2D(...arguments)}catch(W){ct("WebGLState:",W)}}function ke(){try{i.compressedTexSubImage3D(...arguments)}catch(W){ct("WebGLState:",W)}}function Ge(){try{i.texStorage2D(...arguments)}catch(W){ct("WebGLState:",W)}}function k(){try{i.texStorage3D(...arguments)}catch(W){ct("WebGLState:",W)}}function D(){try{i.texImage2D(...arguments)}catch(W){ct("WebGLState:",W)}}function Z(){try{i.texImage3D(...arguments)}catch(W){ct("WebGLState:",W)}}function pe(W){return d[W]!==void 0?d[W]:i.getParameter(W)}function se(W,ue){d[W]!==ue&&(i.pixelStorei(W,ue),d[W]=ue)}function Me(W){z.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),z.copy(W))}function Ie(W){K.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),K.copy(W))}function de(W,ue){let re=l.get(ue);re===void 0&&(re=new WeakMap,l.set(ue,re));let Ue=re.get(W);Ue===void 0&&(Ue=i.getUniformBlockIndex(ue,W.name),i.uniformBlockBinding(ue,Ue,Ue),re.set(W,Ue))}function he(W,ue,re){let we=l.get(ue).get(W);c[we]!==re&&(i.bindBufferBase(i.UNIFORM_BUFFER,we,re),c[we]=re)}function Ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},L=null,G={},u={},c={},f=new WeakMap,p=[],g=null,m=!1,A=null,x=null,v=null,_=null,M=null,E=null,b=null,y=new We(0,0,0),I=0,S=!1,C=null,w=null,B=null,R=null,U=null,z.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ae,disable:ee,bindFramebuffer:me,drawBuffers:fe,useProgram:Re,setBlending:xe,setMaterial:_e,setFlipSided:be,setCullFace:Ee,setLineWidth:le,setPolygonOffset:ve,setScissorTest:Le,activeTexture:Oe,bindTexture:ze,unbindTexture:Q,compressedTexImage2D:qe,compressedTexImage3D:ye,texImage2D:D,texImage3D:Z,pixelStorei:se,getParameter:pe,updateUBOMapping:de,uniformBlockBinding:he,texStorage2D:Ge,texStorage3D:k,texSubImage2D:De,texSubImage3D:$,compressedTexSubImage2D:Fe,compressedTexSubImage3D:ke,scissor:Me,viewport:Ie,reset:Ce}}function ky(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ge,h=new WeakMap,d=new Set,u,f=new WeakMap,p=new Set,g=new FinalizationRegistry(k=>p.delete(k)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(k,D){return m?new OffscreenCanvas(k,D):Ir("canvas")}function x(k,D,Z){let pe=1,se=Ge(k);if((se.width>Z||se.height>Z)&&(pe=Z/Math.max(se.width,se.height)),pe<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){let Me=Math.floor(pe*se.width),Ie=Math.floor(pe*se.height);u===void 0&&(u=A(Me,Ie));let de=D?A(Me,Ie):u;return de.width=Me,de.height=Ie,de.getContext("2d").drawImage(k,0,0,Me,Ie),nt("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+Me+"x"+Ie+")."),de}else return"data"in k&&nt("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),k;return k}function v(k){return k.generateMipmaps}function _(k){i.generateMipmap(k)}function M(k){return k.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?i.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(k,D,Z,pe,se,Me=!1){if(k!==null){if(i[k]!==void 0)return i[k];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let Ie;pe&&(Ie=e.get("EXT_texture_norm16"),Ie||nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let de=D;if(D===i.RED&&(Z===i.FLOAT&&(de=i.R32F),Z===i.HALF_FLOAT&&(de=i.R16F),Z===i.UNSIGNED_BYTE&&(de=i.R8),Z===i.UNSIGNED_SHORT&&Ie&&(de=Ie.R16_EXT),Z===i.SHORT&&Ie&&(de=Ie.R16_SNORM_EXT)),D===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(de=i.R8UI),Z===i.UNSIGNED_SHORT&&(de=i.R16UI),Z===i.UNSIGNED_INT&&(de=i.R32UI),Z===i.BYTE&&(de=i.R8I),Z===i.SHORT&&(de=i.R16I),Z===i.INT&&(de=i.R32I)),D===i.RG&&(Z===i.FLOAT&&(de=i.RG32F),Z===i.HALF_FLOAT&&(de=i.RG16F),Z===i.UNSIGNED_BYTE&&(de=i.RG8),Z===i.UNSIGNED_SHORT&&Ie&&(de=Ie.RG16_EXT),Z===i.SHORT&&Ie&&(de=Ie.RG16_SNORM_EXT)),D===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(de=i.RG8UI),Z===i.UNSIGNED_SHORT&&(de=i.RG16UI),Z===i.UNSIGNED_INT&&(de=i.RG32UI),Z===i.BYTE&&(de=i.RG8I),Z===i.SHORT&&(de=i.RG16I),Z===i.INT&&(de=i.RG32I)),D===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(de=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(de=i.RGB16UI),Z===i.UNSIGNED_INT&&(de=i.RGB32UI),Z===i.BYTE&&(de=i.RGB8I),Z===i.SHORT&&(de=i.RGB16I),Z===i.INT&&(de=i.RGB32I)),D===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(de=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(de=i.RGBA16UI),Z===i.UNSIGNED_INT&&(de=i.RGBA32UI),Z===i.BYTE&&(de=i.RGBA8I),Z===i.SHORT&&(de=i.RGBA16I),Z===i.INT&&(de=i.RGBA32I)),D===i.RGB&&(Z===i.UNSIGNED_SHORT&&Ie&&(de=Ie.RGB16_EXT),Z===i.SHORT&&Ie&&(de=Ie.RGB16_SNORM_EXT),Z===i.UNSIGNED_INT_5_9_9_9_REV&&(de=i.RGB9_E5),Z===i.UNSIGNED_INT_10F_11F_11F_REV&&(de=i.R11F_G11F_B10F)),D===i.RGBA){let he=Me?Cr:xt.getTransfer(se);Z===i.FLOAT&&(de=i.RGBA32F),Z===i.HALF_FLOAT&&(de=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(de=he===Dt?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT&&Ie&&(de=Ie.RGBA16_EXT),Z===i.SHORT&&Ie&&(de=Ie.RGBA16_SNORM_EXT),Z===i.UNSIGNED_SHORT_4_4_4_4&&(de=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(de=i.RGB5_A1)}return(de===i.R16F||de===i.R32F||de===i.RG16F||de===i.RG32F||de===i.RGBA16F||de===i.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function b(k,D){let Z;return k?D===null||D===wn||D===Ws?Z=i.DEPTH24_STENCIL8:D===Yt?Z=i.DEPTH32F_STENCIL8:D===Gi&&(Z=i.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):D===null||D===wn||D===Ws?Z=i.DEPTH_COMPONENT24:D===Yt?Z=i.DEPTH_COMPONENT32F:D===Gi&&(Z=i.DEPTH_COMPONENT16),Z}function y(k,D){return v(k)===!0||k.isFramebufferTexture&&k.minFilter!==Pt&&k.minFilter!==vt?Math.log2(Math.max(D.width,D.height))+1:k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?D.mipmaps.length:1}function I(k){let D=new WeakRef(k);n.get(k).__ref=D,p.add(D),g.register(k,D,D)}function S(k){let D=n.get(k).__ref;D!==void 0&&(p.delete(D),g.unregister(D))}function C(k){B(k.target)}function w(k){R(k.target)}function B(k){k.removeEventListener("dispose",C),S(k),P(k),k.isVideoTexture&&h.delete(k),k.isHTMLTexture&&d.delete(k)}function R(k){k.removeEventListener("dispose",w),S(k),H(k)}function U(){for(let k of p){let D=k.deref();D!==void 0&&(D.isRenderTarget===!0?R(D):B(D))}p.clear(),d.clear()}function P(k){let D=n.get(k);if(D.__webglInit===void 0)return;let Z=k.source,pe=f.get(Z);if(pe){let se=pe[D.__cacheKey];se.usedTimes--,se.usedTimes===0&&F(k),Object.keys(pe).length===0&&f.delete(Z)}n.remove(k)}function F(k){let D=n.get(k);i.deleteTexture(D.__webglTexture);let Z=k.source,pe=f.get(Z);delete pe[D.__cacheKey],a.memory.textures--}function H(k){let D=n.get(k);D.__depthDisposeCallback&&D.__depthDisposeCallback();let Z=k.depthTexture;if(Z&&Z.renderTarget===k&&B(Z),k.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(D.__webglFramebuffer[se]))for(let Me=0;Me<D.__webglFramebuffer[se].length;Me++)i.deleteFramebuffer(D.__webglFramebuffer[se][Me]);else i.deleteFramebuffer(D.__webglFramebuffer[se]);D.__webglDepthbuffer&&i.deleteRenderbuffer(D.__webglDepthbuffer[se])}else{if(Array.isArray(D.__webglFramebuffer))for(let se=0;se<D.__webglFramebuffer.length;se++)i.deleteFramebuffer(D.__webglFramebuffer[se]);else i.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&i.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&i.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let se=0;se<D.__webglColorRenderbuffer.length;se++)D.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(D.__webglColorRenderbuffer[se]);D.__webglDepthRenderbuffer&&i.deleteRenderbuffer(D.__webglDepthRenderbuffer)}let pe=k.textures;for(let se=0,Me=pe.length;se<Me;se++){let Ie=n.get(pe[se]);Ie.__webglTexture&&(i.deleteTexture(Ie.__webglTexture),a.memory.textures--),n.remove(pe[se])}n.remove(k)}let O=0;function L(){O=0}function G(){return O}function V(k){O=k}function X(){let k=O;return k>=s.maxTextures&&nt("WebGLTextures: Trying to use "+(k+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,k}function z(k){let D=[];return D.push(k.wrapS),D.push(k.wrapT),D.push(k.wrapR||0),D.push(k.magFilter),D.push(k.minFilter),D.push(k.anisotropy),D.push(k.internalFormat),D.push(k.format),D.push(k.type),D.push(k.generateMipmaps),D.push(k.mipmapsAutoUpdate),D.push(k.premultiplyAlpha),D.push(k.flipY),D.push(k.unpackAlignment),D.push(k.colorSpace),D.join()}function K(k,D){let Z=n.get(k);if(k.isVideoTexture&&Fe(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&Z.__version!==k.version){let pe=k.image;if(pe===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(Z,k,D);return}}else k.isExternalTexture&&(Z.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+D)}function j(k,D){let Z=n.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&Z.__version!==k.version){_e(Z,k,D);return}else k.isExternalTexture&&(Z.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+D)}function ce(k,D){let Z=n.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&Z.__version!==k.version){_e(Z,k,D);return}t.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+D)}function ae(k,D){let Z=n.get(k);if(k.version>0&&Z.__version!==k.version){be(Z,k,D);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+D)}let ee={[rn]:i.REPEAT,[En]:i.CLAMP_TO_EDGE,[wr]:i.MIRRORED_REPEAT},me={[Pt]:i.NEAREST,[Jr]:i.NEAREST_MIPMAP_NEAREST,[Hs]:i.NEAREST_MIPMAP_LINEAR,[vt]:i.LINEAR,[Yr]:i.LINEAR_MIPMAP_NEAREST,[Ht]:i.LINEAR_MIPMAP_LINEAR},fe={[Uf]:i.NEVER,[Lu]:i.ALWAYS,[Of]:i.LESS,[Fu]:i.LEQUAL,[kf]:i.EQUAL,[Pu]:i.GEQUAL,[Gf]:i.GREATER,[Qf]:i.NOTEQUAL};function Re(k,D){if(D.type===Yt&&e.has("OES_texture_float_linear")===!1&&(D.magFilter===vt||D.magFilter===Yr||D.magFilter===Hs||D.magFilter===Ht||D.minFilter===vt||D.minFilter===Yr||D.minFilter===Hs||D.minFilter===Ht)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(k,i.TEXTURE_WRAP_S,ee[D.wrapS]),i.texParameteri(k,i.TEXTURE_WRAP_T,ee[D.wrapT]),(k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY)&&i.texParameteri(k,i.TEXTURE_WRAP_R,ee[D.wrapR]),i.texParameteri(k,i.TEXTURE_MAG_FILTER,me[D.magFilter]),i.texParameteri(k,i.TEXTURE_MIN_FILTER,me[D.minFilter]),D.compareFunction&&(i.texParameteri(k,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(k,i.TEXTURE_COMPARE_FUNC,fe[D.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(D.magFilter===Pt||D.minFilter!==Hs&&D.minFilter!==Ht||D.type===Yt&&e.has("OES_texture_float_linear")===!1)return;if(D.anisotropy>1||n.get(D).__currentAnisotropy){let Z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(k,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,s.getMaxAnisotropy())),n.get(D).__currentAnisotropy=D.anisotropy}}}function Se(k,D){let Z=!1;k.__webglInit===void 0&&(k.__webglInit=!0,D.addEventListener("dispose",C),I(D));let pe=D.source,se=f.get(pe);se===void 0&&(se={},f.set(pe,se));let Me=z(D);if(Me!==k.__cacheKey){se[Me]===void 0&&(se[Me]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),se[Me].usedTimes++;let Ie=se[k.__cacheKey];Ie!==void 0&&(se[k.__cacheKey].usedTimes--,Ie.usedTimes===0&&F(D)),k.__cacheKey=Me,k.__webglTexture=se[Me].texture}return Z}function te(k,D,Z){return Math.floor(Math.floor(k/Z)/D)}function xe(k,D,Z,pe){let Me=k.updateRanges;if(Me.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,D.width,D.height,Z,pe,D.data);else{Me.sort((W,ue)=>W.start-ue.start);let Ie=0;for(let W=1;W<Me.length;W++){let ue=Me[Ie],re=Me[W],Ue=ue.start+ue.count,we=te(re.start,D.width,4),Pe=te(ue.start,D.width,4);re.start<=Ue+1&&we===Pe&&te(re.start+re.count-1,D.width,4)===we?ue.count=Math.max(ue.count,re.start+re.count-ue.start):(++Ie,Me[Ie]=re)}Me.length=Ie+1;let de=t.getParameter(i.UNPACK_ROW_LENGTH),he=t.getParameter(i.UNPACK_SKIP_PIXELS),Ce=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,D.width);for(let W=0,ue=Me.length;W<ue;W++){let re=Me[W],Ue=Math.floor(re.start/4),we=Math.ceil(re.count/4),Pe=Ue%D.width,et=Math.floor(Ue/D.width),q=we,Y=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Pe),t.pixelStorei(i.UNPACK_SKIP_ROWS,et),t.texSubImage2D(i.TEXTURE_2D,0,Pe,et,q,Y,Z,pe,D.data)}k.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,de),t.pixelStorei(i.UNPACK_SKIP_PIXELS,he),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ce)}}function _e(k,D,Z){let pe=i.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(pe=i.TEXTURE_2D_ARRAY),D.isData3DTexture&&(pe=i.TEXTURE_3D);let se=Se(k,D),Me=D.source;t.bindTexture(pe,k.__webglTexture,i.TEXTURE0+Z);let Ie=n.get(Me);if(Me.version!==Ie.__version||se===!0){if(t.activeTexture(i.TEXTURE0+Z),(typeof ImageBitmap<"u"&&D.image instanceof ImageBitmap)===!1){let Y=xt.getPrimaries(xt.workingColorSpace),Ae=D.colorSpace===Cn?null:xt.getPrimaries(D.colorSpace),Te=D.colorSpace===Cn||Y===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,D.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te)}t.pixelStorei(i.UNPACK_ALIGNMENT,D.unpackAlignment);let he=x(D.image,!1,s.maxTextureSize);he=ke(D,he);let Ce=r.convert(D.format,D.colorSpace),W=r.convert(D.type),ue=E(D.internalFormat,Ce,W,D.normalized,D.colorSpace,D.isVideoTexture);Re(pe,D);let re,Ue=D.mipmaps,we=D.isVideoTexture!==!0,Pe=Ie.__version===void 0||se===!0,et=Me.dataReady,q=y(D,he);if(D.isDepthTexture)ue=b(D.format===Qi,D.type),Pe&&(we?t.texStorage2D(i.TEXTURE_2D,1,ue,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,ue,he.width,he.height,0,Ce,W,null));else if(D.isDataTexture)if(Ue.length>0){we&&Pe&&t.texStorage2D(i.TEXTURE_2D,q,ue,Ue[0].width,Ue[0].height);for(let Y=0,Ae=Ue.length;Y<Ae;Y++)re=Ue[Y],we?et&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,re.width,re.height,Ce,W,re.data):t.texImage2D(i.TEXTURE_2D,Y,ue,re.width,re.height,0,Ce,W,re.data);D.generateMipmaps=!1}else we?(Pe&&t.texStorage2D(i.TEXTURE_2D,q,ue,he.width,he.height),et&&xe(D,he,Ce,W)):t.texImage2D(i.TEXTURE_2D,0,ue,he.width,he.height,0,Ce,W,he.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){we&&Pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,q,ue,Ue[0].width,Ue[0].height,he.depth);for(let Y=0,Ae=Ue.length;Y<Ae;Y++)if(re=Ue[Y],D.format!==jt)if(Ce!==null)if(we){if(et)if(D.layerUpdates.size>0){let Te=Ku(re.width,re.height,D.format,D.type);for(let Ne of D.layerUpdates){let pt=re.data.subarray(Ne*Te/re.data.BYTES_PER_ELEMENT,(Ne+1)*Te/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,Ne,re.width,re.height,1,Ce,pt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,re.width,re.height,he.depth,Ce,re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,ue,re.width,re.height,he.depth,0,re.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?et&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,re.width,re.height,he.depth,Ce,W,re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Y,ue,re.width,re.height,he.depth,0,Ce,W,re.data);D.layerUpdates.size>0&&D.clearLayerUpdates()}else{we&&Pe&&t.texStorage2D(i.TEXTURE_2D,q,ue,Ue[0].width,Ue[0].height);for(let Y=0,Ae=Ue.length;Y<Ae;Y++)re=Ue[Y],D.format!==jt?Ce!==null?we?et&&t.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,re.width,re.height,Ce,re.data):t.compressedTexImage2D(i.TEXTURE_2D,Y,ue,re.width,re.height,0,re.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?et&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,re.width,re.height,Ce,W,re.data):t.texImage2D(i.TEXTURE_2D,Y,ue,re.width,re.height,0,Ce,W,re.data)}else if(D.isDataArrayTexture)if(we){if(Pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,q,ue,he.width,he.height,he.depth),et)if(D.layerUpdates.size>0){let Y=Ku(he.width,he.height,D.format,D.type);for(let Ae of D.layerUpdates){let Te=he.data.subarray(Ae*Y/he.data.BYTES_PER_ELEMENT,(Ae+1)*Y/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ae,he.width,he.height,1,Ce,W,Te)}D.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Ce,W,he.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ue,he.width,he.height,he.depth,0,Ce,W,he.data);else if(D.isData3DTexture)we?(Pe&&t.texStorage3D(i.TEXTURE_3D,q,ue,he.width,he.height,he.depth),et&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Ce,W,he.data)):t.texImage3D(i.TEXTURE_3D,0,ue,he.width,he.height,he.depth,0,Ce,W,he.data);else if(D.isFramebufferTexture){if(Pe)if(we)t.texStorage2D(i.TEXTURE_2D,q,ue,he.width,he.height);else{let Y=he.width,Ae=he.height;for(let Te=0;Te<q;Te++)t.texImage2D(i.TEXTURE_2D,Te,ue,Y,Ae,0,Ce,W,null),Y>>=1,Ae>>=1}}else if(D.isHTMLTexture){if("texElementImage2D"in i){let Y=i.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),he.parentNode!==Y){Y.appendChild(he),d.add(D),Y.onpaint=Ae=>{let Te=Ae.changedElements;for(let Ne of d)Te.includes(Ne.image)&&(Ne.needsUpdate=!0)},Y.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,he);else{let Te=i.RGBA,Ne=i.RGBA,pt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Te,Ne,pt,he)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(we&&Pe){let Y=Ge(Ue[0]);t.texStorage2D(i.TEXTURE_2D,q,ue,Y.width,Y.height)}for(let Y=0,Ae=Ue.length;Y<Ae;Y++)re=Ue[Y],we?et&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,Ce,W,re):t.texImage2D(i.TEXTURE_2D,Y,ue,Ce,W,re);D.generateMipmaps=!1}else if(we){if(Pe){let Y=Ge(he);t.texStorage2D(i.TEXTURE_2D,q,ue,Y.width,Y.height)}et&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ce,W,he)}else t.texImage2D(i.TEXTURE_2D,0,ue,Ce,W,he);v(D)&&D.mipmapsAutoUpdate===!0&&_(pe),Ie.__version=Me.version,D.onUpdate&&D.onUpdate(D)}k.__version=D.version}function be(k,D,Z){if(D.image.length!==6)return;let pe=Se(k,D),se=D.source;t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+Z);let Me=n.get(se);if(se.version!==Me.__version||pe===!0){t.activeTexture(i.TEXTURE0+Z);let Ie=xt.getPrimaries(xt.workingColorSpace),de=D.colorSpace===Cn?null:xt.getPrimaries(D.colorSpace),he=D.colorSpace===Cn||Ie===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,D.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,D.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let Ce=D.isCompressedTexture||D.image[0].isCompressedTexture,W=D.image[0]&&D.image[0].isDataTexture,ue=[];for(let Ne=0;Ne<6;Ne++)!Ce&&!W?ue[Ne]=x(D.image[Ne],!0,s.maxCubemapSize):ue[Ne]=W?D.image[Ne].image:D.image[Ne],ue[Ne]=ke(D,ue[Ne]);let re=ue[0],Ue=r.convert(D.format,D.colorSpace),we=r.convert(D.type),Pe=E(D.internalFormat,Ue,we,D.normalized,D.colorSpace),et=D.isVideoTexture!==!0,q=Me.__version===void 0||pe===!0,Y=se.dataReady,Ae=y(D,re);Re(i.TEXTURE_CUBE_MAP,D);let Te;if(D.isDepthTexture){if(Pe=b(D.format===Qi,D.type),q)if(et)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Pe,re.width,re.height);else for(let Ne=0;Ne<6;Ne++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Pe,re.width,re.height,0,Ue,we,null)}else if(Ce){et&&q&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,Pe,re.width,re.height);for(let Ne=0;Ne<6;Ne++){Te=ue[Ne].mipmaps;for(let pt=0;pt<Te.length;pt++){let Ot=Te[pt];D.format!==jt?Ue!==null?et?Y&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,pt,0,0,Ot.width,Ot.height,Ue,Ot.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,pt,Pe,Ot.width,Ot.height,0,Ot.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,pt,0,0,Ot.width,Ot.height,Ue,we,Ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,pt,Pe,Ot.width,Ot.height,0,Ue,we,Ot.data)}}}else{if(Te=D.mipmaps,et&&q){Te.length>0&&Ae++;let Ne=Ge(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,Pe,Ne.width,Ne.height)}for(let Ne=0;Ne<6;Ne++)if(W){et?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,ue[Ne].width,ue[Ne].height,Ue,we,ue[Ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Pe,ue[Ne].width,ue[Ne].height,0,Ue,we,ue[Ne].data);for(let pt=0;pt<Te.length;pt++){let zt=Te[pt].image[Ne].image;et?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,pt+1,0,0,zt.width,zt.height,Ue,we,zt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,pt+1,Pe,zt.width,zt.height,0,Ue,we,zt.data)}}else{et?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,Ue,we,ue[Ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Pe,Ue,we,ue[Ne]);for(let pt=0;pt<Te.length;pt++){let Ot=Te[pt];et?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,pt+1,0,0,Ue,we,Ot.image[Ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,pt+1,Pe,Ue,we,Ot.image[Ne])}}}v(D)&&D.mipmapsAutoUpdate===!0&&_(i.TEXTURE_CUBE_MAP),Me.__version=se.version,D.onUpdate&&D.onUpdate(D)}k.__version=D.version}function Ee(k,D,Z,pe,se,Me){let Ie=r.convert(Z.format,Z.colorSpace),de=r.convert(Z.type),he=E(Z.internalFormat,Ie,de,Z.normalized,Z.colorSpace),Ce=n.get(D),W=n.get(Z);if(W.__renderTarget=D,!Ce.__hasExternalTextures){let ue=Math.max(1,D.width>>Me),re=Math.max(1,D.height>>Me);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,Me,he,ue,re,D.depth,0,Ie,de,null):t.texImage2D(se,Me,he,ue,re,0,Ie,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,k),$(D)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pe,se,W.__webglTexture,0,De(D)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,pe,se,W.__webglTexture,Me),t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(k,D,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,k),D.depthBuffer){let pe=D.depthTexture,se=pe&&pe.isDepthTexture?pe.type:null,Me=b(D.stencilBuffer,se),Ie=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;$(D)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,De(D),Me,D.width,D.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,De(D),Me,D.width,D.height):i.renderbufferStorage(i.RENDERBUFFER,Me,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ie,i.RENDERBUFFER,k)}else{let pe=D.textures;for(let se=0;se<pe.length;se++){let Me=pe[se],Ie=r.convert(Me.format,Me.colorSpace),de=r.convert(Me.type),he=E(Me.internalFormat,Ie,de,Me.normalized,Me.colorSpace);$(D)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,De(D),he,D.width,D.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,De(D),he,D.width,D.height):i.renderbufferStorage(i.RENDERBUFFER,he,D.width,D.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ve(k,D,Z){let pe=D.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,k),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let se=n.get(D.depthTexture);se.__renderTarget=D;let Me=pe?D.depthTexture.image[0]:D.depthTexture.image;(!se.__webglTexture||Me.width!==D.width||Me.height!==D.height)&&(Me.width=D.width,Me.height=D.height,D.depthTexture.needsUpdate=!0),pe?ae(D.depthTexture,0):K(D.depthTexture,0);let Ie=se.__webglTexture,de=De(D),he=pe?i.TEXTURE_CUBE_MAP_POSITIVE_X+Z:i.TEXTURE_2D,Ce=D.depthTexture.format===Qi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(D.depthTexture.format===Di)$(D)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ce,he,Ie,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,Ce,he,Ie,0);else if(D.depthTexture.format===Qi)$(D)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ce,he,Ie,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,Ce,he,Ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Le(k){let D=n.get(k),Z=k.isWebGLCubeRenderTarget===!0;if(D.__boundDepthTexture!==k.depthTexture){let pe=k.depthTexture;if(D.__depthDisposeCallback&&D.__depthDisposeCallback(),pe){let se=()=>{delete D.__boundDepthTexture,delete D.__depthDisposeCallback,pe.removeEventListener("dispose",se)};pe.addEventListener("dispose",se),D.__depthDisposeCallback=se}D.__boundDepthTexture=pe}if(k.depthTexture&&!D.__autoAllocateDepthBuffer)if(Z)for(let pe=0;pe<6;pe++)ve(D.__webglFramebuffer[pe],k,pe);else k.texture.mipmaps.length>0?ve(D.__webglFramebuffer[0],k,0):ve(D.__webglFramebuffer,k,0);else if(Z){D.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(i.FRAMEBUFFER,D.__webglFramebuffer[pe]),D.__webglDepthbuffer[pe]===void 0)D.__webglDepthbuffer[pe]=i.createRenderbuffer(),le(D.__webglDepthbuffer[pe],k,!1);else{let se=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=D.__webglDepthbuffer[pe];i.bindRenderbuffer(i.RENDERBUFFER,Me),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,Me)}}else if(k.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,D.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer===void 0)D.__webglDepthbuffer=i.createRenderbuffer(),le(D.__webglDepthbuffer,k,!1);else{let se=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=D.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Me),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,Me)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(k,D,Z){let pe=n.get(k);D!==void 0&&Ee(pe.__webglFramebuffer,k,k.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&Le(k)}function ze(k){let D=k.texture,Z=n.get(k),pe=n.get(D);k.addEventListener("dispose",w),I(k);let se=k.textures,Me=k.isWebGLCubeRenderTarget===!0,Ie=se.length>1;if(Ie||(pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture()),pe.__version=D.version,a.memory.textures++),Me){Z.__webglFramebuffer=[];for(let de=0;de<6;de++)if(D.mipmaps.length>0){Z.__webglFramebuffer[de]=[];for(let he=0;he<D.mipmaps.length;he++)Z.__webglFramebuffer[de][he]=i.createFramebuffer()}else Z.__webglFramebuffer[de]=i.createFramebuffer()}else{if(D.mipmaps.length>0){Z.__webglFramebuffer=[];for(let de=0;de<D.mipmaps.length;de++)Z.__webglFramebuffer[de]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(Ie)for(let de=0,he=se.length;de<he;de++){let Ce=n.get(se[de]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=i.createTexture(),a.memory.textures++)}if(k.samples>0&&$(k)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let de=0;de<se.length;de++){let he=se[de];Z.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[de]);let Ce=r.convert(he.format,he.colorSpace),W=r.convert(he.type),ue=E(he.internalFormat,Ce,W,he.normalized,he.colorSpace,k.isXRRenderTarget===!0),re=De(k);i.renderbufferStorageMultisample(i.RENDERBUFFER,re,ue,k.width,k.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,Z.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),k.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),le(Z.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Me){t.bindTexture(i.TEXTURE_CUBE_MAP,pe.__webglTexture),Re(i.TEXTURE_CUBE_MAP,D);for(let de=0;de<6;de++)if(D.mipmaps.length>0)for(let he=0;he<D.mipmaps.length;he++)Ee(Z.__webglFramebuffer[de][he],k,D,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,he);else Ee(Z.__webglFramebuffer[de],k,D,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);v(D)?_(i.TEXTURE_CUBE_MAP):D.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,D.mipmaps.length-1),t.unbindTexture()}else if(Ie){for(let de=0,he=se.length;de<he;de++){let Ce=se[de],W=n.get(Ce),ue=i.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(ue=k.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,W.__webglTexture),Re(ue,Ce),Ee(Z.__webglFramebuffer,k,Ce,i.COLOR_ATTACHMENT0+de,ue,0),v(Ce)&&_(ue)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(de=k.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,pe.__webglTexture),Re(de,D),D.mipmaps.length>0)for(let he=0;he<D.mipmaps.length;he++)Ee(Z.__webglFramebuffer[he],k,D,i.COLOR_ATTACHMENT0,de,he);else Ee(Z.__webglFramebuffer,k,D,i.COLOR_ATTACHMENT0,de,0);v(D)?_(de):D.mipmaps.length>0&&i.texParameteri(de,i.TEXTURE_MAX_LEVEL,D.mipmaps.length-1),t.unbindTexture()}k.depthBuffer&&Le(k)}function Q(k){let D=k.textures;for(let Z=0,pe=D.length;Z<pe;Z++){let se=D[Z];if(v(se)&&se.mipmapsAutoUpdate===!0){let Me=M(k),Ie=n.get(se).__webglTexture;t.bindTexture(Me,Ie),_(Me),t.unbindTexture()}}}let qe=[];function ye(k){if(k.samples>0){if($(k)===!1){let D=k.textures,Z=k.width,pe=k.height,se=i.COLOR_BUFFER_BIT,Me=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=n.get(k),de=D.length>1;if(de)for(let Ce=0;Ce<D.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),k.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ce=0;Ce<D.length;Ce++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),de){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ce]);let W=n.get(D[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,W,0)}i.blitFramebuffer(0,0,Z,pe,0,0,Z,pe,se,i.NEAREST),c===!0&&(qe.length=0,qe.push(i.COLOR_ATTACHMENT0+Ce),k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&qe.push(Me),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,qe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let Ce=0;Ce<D.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ce]);let W=n.get(D[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,W,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&c){let D=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[D])}}}function De(k){return Math.min(s.maxSamples,k.samples)}function $(k){let D=n.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function Fe(k){let D=a.render.frame;h.get(k)!==D&&(h.set(k,D),k.update())}function ke(k,D){let Z=k.colorSpace,pe=k.format,se=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||Z!==an&&Z!==Cn&&(xt.getTransfer(Z)===Dt?(pe!==jt||se!==ot)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",Z)),D}function Ge(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(l.width=k.naturalWidth||k.width,l.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(l.width=k.displayWidth,l.height=k.displayHeight):(l.width=k.width,l.height=k.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=L,this.getTextureUnits=G,this.setTextureUnits=V,this.setTexture2D=K,this.setTexture2DArray=j,this.setTexture3D=ce,this.setTextureCube=ae,this.rebindTextures=Oe,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=$,this.dispose=U}function Gy(i,e){function t(n,s=Cn){let r,a=xt.getTransfer(s);if(n===ot)return i.UNSIGNED_BYTE;if(n===Nc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Uc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jr)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zr)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Iu)return i.BYTE;if(n===Ru)return i.SHORT;if(n===Gi)return i.UNSIGNED_SHORT;if(n===Lc)return i.INT;if(n===wn)return i.UNSIGNED_INT;if(n===Yt)return i.FLOAT;if(n===Ct)return i.HALF_FLOAT;if(n===Bu)return i.ALPHA;if(n===Ks)return i.RGB;if(n===jt)return i.RGBA;if(n===Di)return i.DEPTH_COMPONENT;if(n===Qi)return i.DEPTH_STENCIL;if(n===jn)return i.RED;if(n===Oc)return i.RED_INTEGER;if(n===Nn)return i.RG;if(n===kc)return i.RG_INTEGER;if(n===Gc)return i.RGBA_INTEGER;if(n===ps||n===zi||n===fo||n===Vi)if(a===Dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ps)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zi)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vi)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ps)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zi)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vi)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$r||n===Qc||n===As||n===qs)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$r)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===As)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qs)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ea||n===Xs||n===Js||n===ta||n===na||n===Ys||n===ia)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ea||n===Xs)return a===Dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Js)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ta)return r.COMPRESSED_R11_EAC;if(n===na)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ys)return r.COMPRESSED_RG11_EAC;if(n===ia)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Hi||n===zc||n===Vc||n===Hc||n===ms||n===Wc||n===Kc||n===qc||n===Xc||n===Jc||n===Yc||n===jc||n===Zc||n===$c)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Hi)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zc)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vc)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hc)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ms)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wc)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Kc)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qc)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xc)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jc)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yc)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===jc)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zc)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$c)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===gs||n===el||n===sa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===gs)return a===Dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===el)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ra||n===aa||n===js||n===oa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ra)return r.COMPRESSED_RED_RGTC1_EXT;if(n===aa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===js)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ws?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}function Hy(i,e){function t(m,A){m.matrixAutoUpdate===!0&&m.updateMatrix(),A.value.copy(m.matrix)}function n(m,A){A.color.getRGB(m.fogColor.value,Vu(i)),A.isFog?(m.fogNear.value=A.near,m.fogFar.value=A.far):A.isFogExp2&&(m.fogDensity.value=A.density)}function s(m,A,x,v,_){A.isNodeMaterial?A.uniformsNeedUpdate=!1:A.isMeshBasicMaterial?r(m,A):A.isMeshLambertMaterial?(r(m,A),A.envMap&&(m.envMapIntensity.value=A.envMapIntensity)):A.isMeshToonMaterial?(r(m,A),d(m,A)):A.isMeshPhongMaterial?(r(m,A),h(m,A),A.envMap&&(m.envMapIntensity.value=A.envMapIntensity)):A.isMeshStandardMaterial?(r(m,A),u(m,A),A.isMeshPhysicalMaterial&&f(m,A,_)):A.isMeshMatcapMaterial?(r(m,A),p(m,A)):A.isMeshDepthMaterial?r(m,A):A.isMeshDistanceMaterial?(r(m,A),g(m,A)):A.isMeshNormalMaterial?r(m,A):A.isLineBasicMaterial?(a(m,A),A.isLineDashedMaterial&&o(m,A)):A.isPointsMaterial?c(m,A,x,v):A.isSpriteMaterial?l(m,A):A.isShadowMaterial?(m.color.value.copy(A.color),m.opacity.value=A.opacity):A.isShaderMaterial&&(A.uniformsNeedUpdate=!1)}function r(m,A){m.opacity.value=A.opacity,A.color&&m.diffuse.value.copy(A.color),A.emissive&&m.emissive.value.copy(A.emissive).multiplyScalar(A.emissiveIntensity),A.map&&(m.map.value=A.map,t(A.map,m.mapTransform)),A.alphaMap&&(m.alphaMap.value=A.alphaMap,t(A.alphaMap,m.alphaMapTransform)),A.bumpMap&&(m.bumpMap.value=A.bumpMap,t(A.bumpMap,m.bumpMapTransform),m.bumpScale.value=A.bumpScale,A.side===Zt&&(m.bumpScale.value*=-1)),A.normalMap&&(m.normalMap.value=A.normalMap,t(A.normalMap,m.normalMapTransform),m.normalScale.value.copy(A.normalScale),A.side===Zt&&m.normalScale.value.negate()),A.displacementMap&&(m.displacementMap.value=A.displacementMap,t(A.displacementMap,m.displacementMapTransform),m.displacementScale.value=A.displacementScale,m.displacementBias.value=A.displacementBias),A.emissiveMap&&(m.emissiveMap.value=A.emissiveMap,t(A.emissiveMap,m.emissiveMapTransform)),A.specularMap&&(m.specularMap.value=A.specularMap,t(A.specularMap,m.specularMapTransform)),A.alphaTest>0&&(m.alphaTest.value=A.alphaTest);let x=e.get(A),v=x.envMap,_=x.envMapRotation;v&&(m.envMap.value=v,m.envMapRotation.value.setFromMatrix4(Vy.makeRotationFromEuler(_)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Bp),m.reflectivity.value=A.reflectivity,m.ior.value=A.ior,m.refractionRatio.value=A.refractionRatio),A.lightMap&&(m.lightMap.value=A.lightMap,m.lightMapIntensity.value=A.lightMapIntensity,t(A.lightMap,m.lightMapTransform)),A.aoMap&&(m.aoMap.value=A.aoMap,m.aoMapIntensity.value=A.aoMapIntensity,t(A.aoMap,m.aoMapTransform))}function a(m,A){m.diffuse.value.copy(A.color),m.opacity.value=A.opacity,A.map&&(m.map.value=A.map,t(A.map,m.mapTransform))}function o(m,A){m.dashSize.value=A.dashSize,m.totalSize.value=A.dashSize+A.gapSize,m.scale.value=A.scale}function c(m,A,x,v){m.diffuse.value.copy(A.color),m.opacity.value=A.opacity,m.size.value=A.size*x,m.scale.value=v*.5,A.map&&(m.map.value=A.map,t(A.map,m.uvTransform)),A.alphaMap&&(m.alphaMap.value=A.alphaMap,t(A.alphaMap,m.alphaMapTransform)),A.alphaTest>0&&(m.alphaTest.value=A.alphaTest)}function l(m,A){m.diffuse.value.copy(A.color),m.opacity.value=A.opacity,m.rotation.value=A.rotation,A.map&&(m.map.value=A.map,t(A.map,m.mapTransform)),A.alphaMap&&(m.alphaMap.value=A.alphaMap,t(A.alphaMap,m.alphaMapTransform)),A.alphaTest>0&&(m.alphaTest.value=A.alphaTest)}function h(m,A){m.specular.value.copy(A.specular),m.shininess.value=Math.max(A.shininess,1e-4)}function d(m,A){A.gradientMap&&(m.gradientMap.value=A.gradientMap)}function u(m,A){m.metalness.value=A.metalness,A.metalnessMap&&(m.metalnessMap.value=A.metalnessMap,t(A.metalnessMap,m.metalnessMapTransform)),m.roughness.value=A.roughness,A.roughnessMap&&(m.roughnessMap.value=A.roughnessMap,t(A.roughnessMap,m.roughnessMapTransform)),A.envMap&&(m.envMapIntensity.value=A.envMapIntensity)}function f(m,A,x){m.ior.value=A.ior,A.diffuseRoughness>0&&(m.diffuseRoughness.value=A.diffuseRoughness,A.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=A.diffuseRoughnessMap,t(A.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),A.sheen>0&&(m.sheenColor.value.copy(A.sheenColor).multiplyScalar(A.sheen),m.sheenRoughness.value=A.sheenRoughness,A.sheenColorMap&&(m.sheenColorMap.value=A.sheenColorMap,t(A.sheenColorMap,m.sheenColorMapTransform)),A.sheenRoughnessMap&&(m.sheenRoughnessMap.value=A.sheenRoughnessMap,t(A.sheenRoughnessMap,m.sheenRoughnessMapTransform))),A.clearcoat>0&&(m.clearcoat.value=A.clearcoat,m.clearcoatRoughness.value=A.clearcoatRoughness,A.clearcoatMap&&(m.clearcoatMap.value=A.clearcoatMap,t(A.clearcoatMap,m.clearcoatMapTransform)),A.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=A.clearcoatRoughnessMap,t(A.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),A.clearcoatNormalMap&&(m.clearcoatNormalMap.value=A.clearcoatNormalMap,t(A.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(A.clearcoatNormalScale),A.side===Zt&&m.clearcoatNormalScale.value.negate())),A.dispersion>0&&(m.dispersion.value=A.dispersion),A.retroreflectivity>0&&(m.retroreflectivity.value=A.retroreflectivity),A.iridescence>0&&(m.iridescence.value=A.iridescence,m.iridescenceIOR.value=A.iridescenceIOR,m.iridescenceThicknessMinimum.value=A.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=A.iridescenceThicknessMaximum,A.iridescenceMap&&(m.iridescenceMap.value=A.iridescenceMap,t(A.iridescenceMap,m.iridescenceMapTransform)),A.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=A.iridescenceThicknessMap,t(A.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),A.transmission>0&&(m.transmission.value=A.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),A.transmissionMap&&(m.transmissionMap.value=A.transmissionMap,t(A.transmissionMap,m.transmissionMapTransform)),m.thickness.value=A.thickness,A.thicknessMap&&(m.thicknessMap.value=A.thicknessMap,t(A.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=A.attenuationDistance,m.attenuationColor.value.copy(A.attenuationColor)),A.anisotropy>0&&(m.anisotropyVector.value.set(A.anisotropy*Math.cos(A.anisotropyRotation),A.anisotropy*Math.sin(A.anisotropyRotation)),A.anisotropyMap&&(m.anisotropyMap.value=A.anisotropyMap,t(A.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=A.specularIntensity,m.specularColor.value.copy(A.specularColor),A.specularColorMap&&(m.specularColorMap.value=A.specularColorMap,t(A.specularColorMap,m.specularColorMapTransform)),A.specularIntensityMap&&(m.specularIntensityMap.value=A.specularIntensityMap,t(A.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,A){A.matcap&&(m.matcap.value=A.matcap)}function g(m,A){let x=e.get(A).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Wy(i,e,t,n){let s={},r={};function a(x,v){let _=v.program;n.uniformBlockBinding(x,_,s[x.id])}function o(x,v){let _=s[x.id];_===void 0&&(p(x),_=c(x),s[x.id]=_,x.addEventListener("dispose",m));let M=v.program;n.updateUBOMapping(x,M);let E=e.render.frame;r[x.id]!==E&&(l(x),r[x.id]=E)}function c(x){let v=i.createBuffer(),_=x.__size,M=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,_,M),i.bindBuffer(i.UNIFORM_BUFFER,null),v}function l(x){let v=s[x.id],_=x.uniforms,M=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,b=_.length;E<b;E++){let y=_[E];if(Array.isArray(y))for(let I=0,S=y.length;I<S;I++)h(y[I],E,I,M);else h(y,E,0,M)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(x,v,_,M){if(u(x,v,_,M)===!0){let E=x.__offset,b=x.value;if(Array.isArray(b)){let y=0;for(let I=0;I<b.length;I++){let S=b[I],C=g(S,!0);d(S,x.__data,y),y+=C.storage/Float32Array.BYTES_PER_ELEMENT}}else d(b,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,x.__data)}}function d(x,v,_){typeof x=="number"||typeof x=="boolean"?v[_]=x:x.isMatrix3?(v[_]=x.elements[0],v[_+1]=x.elements[1],v[_+2]=x.elements[2],v[_+3]=0,v[_+4]=x.elements[3],v[_+5]=x.elements[4],v[_+6]=x.elements[5],v[_+7]=0,v[_+8]=x.elements[6],v[_+9]=x.elements[7],v[_+10]=x.elements[8],v[_+11]=0):ArrayBuffer.isView(x)?v.set(x.subarray(0,v.length-_),_):x.toArray(v,_)}function u(x,v,_,M){let E=x.value,b=v+"_"+_;if(Array.isArray(E)){M[b]===void 0&&(M[b]=[]);let y=M[b],I=!1;for(let S=0;S<E.length;S++)f(E[S],y,S)===!0&&(I=!0);return I}return f(E,M,b)}function f(x,v,_){if(v[_]===void 0)return typeof x=="number"||typeof x=="boolean"?v[_]=x:ArrayBuffer.isView(x)?v[_]=x.slice():v[_]=x.clone(),!0;{let M=v[_];if(typeof x=="number"||typeof x=="boolean"){if(M!==x)return v[_]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(M.equals(x)===!1)return M.copy(x),!0}}return!1}function p(x){let v=x.uniforms,_=0,M=16;for(let b=0,y=v.length;b<y;b++){let I=Array.isArray(v[b])?v[b]:[v[b]];for(let S=0,C=I.length;S<C;S++){let w=I[S],B=Array.isArray(w.value)?w.value:[w.value],R=Array.isArray(v[b])||Array.isArray(w.value),U=_;for(let F=0,H=B.length;F<H;F++){let O=B[F],L=g(O,R),G=_%M,V=G%L.boundary,X=G+V;_+=V,X!==0&&M-X<L.storage&&(_+=M-X),F===0&&(U=_),_+=L.storage}let P=w.type==="int"?Int32Array:w.type==="uint"?Uint32Array:Float32Array;w.__data=new P((_-U)/Float32Array.BYTES_PER_ELEMENT),w.__offset=U}}let E=_%M;return E>0&&(_+=M-E),x.__size=_,x.__cache={},this}function g(x,v){let _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=16,_.storage=48):x.isMatrix4?(_.boundary=16,_.storage=64):x.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(_.boundary=16,_.storage=x.byteLength):nt("WebGLRenderer: Unsupported uniform value type.",x),v===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function m(x){let v=x.target;v.removeEventListener("dispose",m),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function A(){for(let x in s)i.deleteBuffer(s[x]);s={},r={}}return{bind:a,update:o,dispose:A}}function qy(){return bi===null&&(bi=new Bn(Ky,16,16,Nn,Ct),bi.name="DFG_LUT",bi.minFilter=vt,bi.magFilter=vt,bi.wrapS=En,bi.wrapT=En,bi.generateMipmaps=!1,bi.needsUpdate=!0),bi}var ux,hx,dx,fx,px,Ax,mx,gx,xx,_x,bx,vx,yx,Mx,Ex,Sx,wx,Cx,Tx,Ix,Rx,Bx,Dx,Fx,Px,Lx,Nx,Ux,Ox,kx,Gx,Qx,zx,Vx,Hx,Wx,Kx,qx,Xx,Jx,Yx,jx,Zx,$x,e_,t_,n_,i_,s_,r_,a_,o_,c_,l_,u_,h_,d_,f_,p_,A_,m_,g_,x_,__,b_,v_,y_,M_,E_,S_,w_,C_,T_,I_,R_,B_,D_,F_,P_,L_,N_,U_,O_,k_,G_,Q_,z_,V_,H_,W_,K_,q_,X_,J_,Y_,j_,Z_,$_,eb,tb,nb,ib,sb,rb,ab,ob,cb,lb,ub,hb,db,fb,pb,Ab,mb,gb,xb,_b,bb,vb,yb,Mb,Eb,Sb,wb,Cb,Tb,Ib,Rb,Bb,Db,Fb,Pb,Lb,Nb,Ub,Ob,kb,Gb,Qb,zb,At,Xe,vi,sl,Vb,yp,er,ep,Jb,Yb,Mp,Ep,jb,Zb,$b,ua,uv,Sp,wp,Cp,Tp,Ip,Rp,sp,rp,ap,op,cp,Yu,ju,Zu,Xu,la,$v,ey,hp,sy,rl,uy,dy,py,my,xy,vy,eh,th,Iy,Fy,Py,Ly,Ny,bp,Ao,Ju,Qy,zy,nh,ih,Vy,Bp,Ky,bi,al,gt=ut(()=>{qu();qu();ux=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hx=`#ifdef USE_ALPHAHASH
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
#endif`,dx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,px=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ax=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mx=`#ifdef USE_AOMAP
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
#endif`,gx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xx=`#ifdef USE_BATCHING
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
#endif`,_x=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mx=`#ifdef USE_IRIDESCENCE
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
#endif`,Ex=`#ifdef USE_BUMPMAP
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
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ix=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Rx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Bx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Dx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Fx=`#define PI 3.141592653589793
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
} // validated`,Px=`vec3 transformedNormal = objectNormal;
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
#endif`,Lx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ux=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ox=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qx=`#ifdef USE_ENVMAP
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
#endif`,zx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Vx=`#ifdef USE_ENVMAP
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
#endif`,Hx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wx=`#ifdef USE_ENVMAP
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
#endif`,Kx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yx=`#ifdef USE_GRADIENTMAP
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
}`,jx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,e_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,t_=`#ifdef USE_ENVMAP
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
#endif`,n_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,i_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,s_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,a_=`PhysicalMaterial material;
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
#endif`,o_=`uniform sampler2D dfgLUT;
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
}`,c_=`
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
#endif`,l_=`#if defined( RE_IndirectDiffuse )
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
#endif`,u_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,h_=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,d_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,m_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,x_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,__=`#if defined( USE_POINTS_UV )
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
#endif`,b_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,M_=`#if defined( USE_MORPHCOLORS )
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
#endif`,E_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S_=`#ifdef USE_MORPHTARGETS
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
#endif`,w_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,T_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,I_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,D_=`#ifdef USE_NORMALMAP
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
#endif`,F_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,P_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,L_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,N_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,U_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,k_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,G_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Q_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,z_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,K_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,X_=`float getShadowMask() {
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
}`,J_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Y_=`#ifdef USE_SKINNING
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
#endif`,j_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Z_=`#ifdef USE_SKINNING
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
#endif`,$_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ib=`#ifdef USE_TRANSMISSION
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
#endif`,sb=`#ifdef USE_TRANSMISSION
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
#endif`,rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ub=`uniform sampler2D t2D;
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
}`,hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,db=`uniform float backgroundBlurriness;
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
}`,fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ab=`#include <common>
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
}`,mb=`#if DEPTH_PACKING == 3200
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
}`,gb=`#define DISTANCE
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
}`,xb=`#define DISTANCE
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
}`,_b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vb=`uniform float scale;
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
}`,yb=`uniform vec3 diffuse;
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
}`,Mb=`#include <common>
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
}`,Eb=`uniform vec3 diffuse;
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
}`,Sb=`#define LAMBERT
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
}`,wb=`#define LAMBERT
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
}`,Cb=`#define MATCAP
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
}`,Tb=`#define MATCAP
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
}`,Ib=`#define NORMAL
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
}`,Rb=`#define NORMAL
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
}`,Bb=`#define PHONG
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
}`,Db=`#define PHONG
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
}`,Fb=`#define STANDARD
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
}`,Pb=`#define STANDARD
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
}`,Lb=`#define TOON
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
}`,Nb=`#define TOON
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
}`,Ub=`uniform float size;
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
}`,Ob=`uniform vec3 diffuse;
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
}`,kb=`#include <common>
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
}`,Gb=`uniform vec3 color;
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
}`,Qb=`uniform float rotation;
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
}`,zb=`uniform vec3 diffuse;
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
}`,At={alphahash_fragment:ux,alphahash_pars_fragment:hx,alphamap_fragment:dx,alphamap_pars_fragment:fx,alphatest_fragment:px,alphatest_pars_fragment:Ax,aomap_fragment:mx,aomap_pars_fragment:gx,batching_pars_vertex:xx,batching_vertex:_x,begin_vertex:bx,beginnormal_vertex:vx,bsdfs:yx,iridescence_fragment:Mx,bumpmap_pars_fragment:Ex,clipping_planes_fragment:Sx,clipping_planes_pars_fragment:wx,clipping_planes_pars_vertex:Cx,clipping_planes_vertex:Tx,color_fragment:Ix,color_pars_fragment:Rx,color_pars_vertex:Bx,color_vertex:Dx,common:Fx,defaultnormal_vertex:Px,displacementmap_pars_vertex:Lx,displacementmap_vertex:Nx,emissivemap_fragment:Ux,emissivemap_pars_fragment:Ox,colorspace_fragment:kx,colorspace_pars_fragment:Gx,envmap_fragment:Qx,envmap_common_pars_fragment:zx,envmap_pars_fragment:Vx,envmap_pars_vertex:Hx,envmap_physical_pars_fragment:t_,envmap_vertex:Wx,fog_vertex:Kx,fog_pars_vertex:qx,fog_fragment:Xx,fog_pars_fragment:Jx,gradientmap_pars_fragment:Yx,lightmap_pars_fragment:jx,lights_lambert_fragment:Zx,lights_lambert_pars_fragment:$x,lights_pars_begin:e_,lights_toon_fragment:n_,lights_toon_pars_fragment:i_,lights_phong_fragment:s_,lights_phong_pars_fragment:r_,lights_physical_fragment:a_,lights_physical_pars_fragment:o_,lights_fragment_begin:c_,lights_fragment_maps:l_,lights_fragment_end:u_,lightprobes_pars_fragment:h_,logdepthbuf_fragment:d_,logdepthbuf_pars_fragment:f_,logdepthbuf_pars_vertex:p_,logdepthbuf_vertex:A_,map_fragment:m_,map_pars_fragment:g_,map_particle_fragment:x_,map_particle_pars_fragment:__,metalnessmap_fragment:b_,metalnessmap_pars_fragment:v_,morphinstance_vertex:y_,morphcolor_vertex:M_,morphnormal_vertex:E_,morphtarget_pars_vertex:S_,morphtarget_vertex:w_,normal_fragment_begin:C_,normal_fragment_maps:T_,normal_pars_fragment:I_,normal_pars_vertex:R_,normal_vertex:B_,normalmap_pars_fragment:D_,clearcoat_normal_fragment_begin:F_,clearcoat_normal_fragment_maps:P_,clearcoat_pars_fragment:L_,iridescence_pars_fragment:N_,opaque_fragment:U_,packing:O_,premultiplied_alpha_fragment:k_,project_vertex:G_,dithering_fragment:Q_,dithering_pars_fragment:z_,roughnessmap_fragment:V_,roughnessmap_pars_fragment:H_,shadowmap_pars_fragment:W_,shadowmap_pars_vertex:K_,shadowmap_vertex:q_,shadowmask_pars_fragment:X_,skinbase_vertex:J_,skinning_pars_vertex:Y_,skinning_vertex:j_,skinnormal_vertex:Z_,specularmap_fragment:$_,specularmap_pars_fragment:eb,tonemapping_fragment:tb,tonemapping_pars_fragment:nb,transmission_fragment:ib,transmission_pars_fragment:sb,uv_pars_fragment:rb,uv_pars_vertex:ab,uv_vertex:ob,worldpos_vertex:cb,background_vert:lb,background_frag:ub,backgroundCube_vert:hb,backgroundCube_frag:db,cube_vert:fb,cube_frag:pb,depth_vert:Ab,depth_frag:mb,distance_vert:gb,distance_frag:xb,equirect_vert:_b,equirect_frag:bb,linedashed_vert:vb,linedashed_frag:yb,meshbasic_vert:Mb,meshbasic_frag:Eb,meshlambert_vert:Sb,meshlambert_frag:wb,meshmatcap_vert:Cb,meshmatcap_frag:Tb,meshnormal_vert:Ib,meshnormal_frag:Rb,meshphong_vert:Bb,meshphong_frag:Db,meshphysical_vert:Fb,meshphysical_frag:Pb,meshtoon_vert:Lb,meshtoon_frag:Nb,points_vert:Ub,points_frag:Ob,shadow_vert:kb,shadow_frag:Gb,sprite_vert:Qb,sprite_frag:zb},Xe={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},vi={basic:{uniforms:bn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:bn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new We(0)},envMapIntensity:{value:1}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:bn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:bn([Xe.common,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.roughnessmap,Xe.metalnessmap,Xe.fog,Xe.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:bn([Xe.common,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.gradientmap,Xe.fog,Xe.lights,{emissive:{value:new We(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:bn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:bn([Xe.points,Xe.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:bn([Xe.common,Xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:bn([Xe.common,Xe.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:bn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,{opacity:{value:1}}]),vertexShader:At.meshnormal_vert,fragmentShader:At.meshnormal_frag},sprite:{uniforms:bn([Xe.sprite,Xe.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:At.background_vert,fragmentShader:At.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:At.backgroundCube_vert,fragmentShader:At.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distance:{uniforms:bn([Xe.common,Xe.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distance_vert,fragmentShader:At.distance_frag},shadow:{uniforms:bn([Xe.lights,Xe.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};vi.physical={uniforms:bn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new rt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};sl={r:0,b:0,g:0},Vb=new Be,yp=new rt;yp.set(-1,0,0,0,1,0,0,0,1);er=class extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ja(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Nt(5,5,5),r=new Ut({name:"CubemapFromEquirect",uniforms:$s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:ki});r.uniforms.tEquirect.value=t;let a=new Qe(s,r),o=t.minFilter;return t.minFilter===Ht&&(t.minFilter=vt),new hs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},ep=256,Jb=3,Yb=20,Mp=256,Ep=16,jb=3,Zb=new T,$b=new We,ua=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new hs(1,10,null),this._boxMesh=new Qe(new Nt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Zb}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=c.autoClear,u=c.autoClearColor,f=c.autoClearDepth,p=c.autoClearStencil,g=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,g===null&&(e.background=c.getClearColor($b));let m=new hs(n,s,h);return m.position.copy(o),m.update(c,e),c.autoClear=d,c.autoClearColor=u,c.autoClearDepth=f,c.autoClearStencil=p,e.background=g,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ip(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=np(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(ep,ku(e))}_fromTexture(e,t){e.mapping===fs||e.mapping===qr?this._setSize(e.image.length===0?ep:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=tp(e,!1,!1),n=Math.log2(e)-Jb;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=tp(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===fs||e.mapping===qr?(this._cubemapMaterial===null&&(this._cubemapMaterial=ip()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=np()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=ev(),this._integrationMaterial=tv());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Ep);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-jb)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(Mp*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=nv());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};uv={[yu]:"LINEAR_TONE_MAPPING",[Mu]:"REINHARD_TONE_MAPPING",[Eu]:"CINEON_TONE_MAPPING",[ho]:"ACES_FILMIC_TONE_MAPPING",[wu]:"AGX_TONE_MAPPING",[Cu]:"NEUTRAL_TONE_MAPPING",[Su]:"CUSTOM_TONE_MAPPING"};Sp=new nn,wp=new Qn(1,1),Cp=new Ya(1),Tp=new Oa,Ip=new ns,Rp=new Ja,sp=[],rp=[],ap=new Float32Array(16),op=new Float32Array(9),cp=new Float32Array(4);Yu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Bv(t.type)}},ju=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jv(t.type)}},Zu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Xu=/(\w+)(\])?(\[|\.)?/g;la=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Zv(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};$v=37297,ey=0;hp=new rt;sy={[yu]:"Linear",[Mu]:"Reinhard",[Eu]:"Cineon",[ho]:"ACESFilmic",[wu]:"AgX",[Cu]:"Neutral",[Su]:"Custom"};rl=new T;uy=/^[ \t]*#include +<([\w\d./]+)>/gm;dy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;py={[zs]:"SHADOWMAP_TYPE_PCF",[Wr]:"SHADOWMAP_TYPE_VSM"};my={[qr]:"ENVMAP_MODE_REFRACTION"};xy={[vu]:"ENVMAP_BLENDING_MULTIPLY",[Rf]:"ENVMAP_BLENDING_MIX",[Bf]:"ENVMAP_BLENDING_ADD"};vy=0,eh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new th(e),t.set(e,n)),n}},th=class{constructor(e){this.id=vy++,this.code=e,this.usedTimes=0}};Iy=0;Fy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Py=`uniform sampler2D shadow_pass;
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
}`,Ly=[new T(1,0,0),new T(-1,0,0),new T(0,1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1)],Ny=[new T(0,-1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1),new T(0,-1,0),new T(0,-1,0)],bp=new Be,Ao=new T,Ju=new T;Qy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zy=`
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

}`,nh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ja(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ut({vertexShader:Qy,fragmentShader:zy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qe(new Vn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ih=class extends pi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,p=null,g=typeof XRWebGLBinding<"u",m=new nh,A={},x=t.getContextAttributes(),v=null,_=null,M=[],E=[],b=new ge,y=null,I=null,S=new sn;S.viewport=new mt;let C=new sn;C.viewport=new mt;let w=[S,C],B=new Fc,R=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let K=M[z];return K===void 0&&(K=new Fr,M[z]=K),K.getTargetRaySpace()},this.getControllerGrip=function(z){let K=M[z];return K===void 0&&(K=new Fr,M[z]=K),K.getGripSpace()},this.getHand=function(z){let K=M[z];return K===void 0&&(K=new Fr,M[z]=K),K.getHandSpace()};function P(z){let K=E.indexOf(z.inputSource);if(K===-1)return;let j=M[K];j!==void 0&&(j.update(z.inputSource,z.frame,l||a),j.dispatchEvent({type:z.type,data:z.inputSource}))}function F(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",H);for(let z=0;z<M.length;z++){let K=E[z];K!==null&&(E[z]=null,M[z].disconnect(K))}R=null,U=null,m.reset();for(let z in A)delete A[z];if(e.setRenderTarget(v),f=null,u=null,d=null,s=null,_=null,X.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(b.width,b.height,!1),I!==null){let z=I.camera;z.fov=I.fov,z.zoom=I.zoom,z.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",F),s.addEventListener("inputsourceschange",H),x.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(b),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let j=null,ce=null,ae=null;x.depth&&(ae=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=x.stencil?Qi:Di,ce=x.stencil?Ws:wn);let ee={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(ee),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new qt(u.textureWidth,u.textureHeight,{format:jt,type:ot,depthTexture:new Qn(u.textureWidth,u.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let j={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new qt(f.framebufferWidth,f.framebufferHeight,{format:jt,type:ot,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),X.setContext(s),X.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(z){for(let K=0;K<z.removed.length;K++){let j=z.removed[K],ce=E.indexOf(j);ce>=0&&(E[ce]=null,M[ce].disconnect(j))}for(let K=0;K<z.added.length;K++){let j=z.added[K],ce=E.indexOf(j);if(ce===-1){for(let ee=0;ee<M.length;ee++)if(ee>=E.length){E.push(j),ce=ee;break}else if(E[ee]===null){E[ee]=j,ce=ee;break}if(ce===-1)break}let ae=M[ce];ae&&ae.connect(j)}}function O(z,K){K===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(K.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let K=z.near,j=z.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(j=m.depthFar)),B.near=C.near=S.near=K,B.far=C.far=S.far=j,(R!==B.near||U!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),R=B.near,U=B.far),B.layers.mask=z.layers.mask|6,S.layers.mask=B.layers.mask&-5,C.layers.mask=B.layers.mask&-3;let ce=z.parent,ae=B.cameras;O(B,ce);for(let ee=0;ee<ae.length;ee++)O(ae[ee],ce);B.projectionMatrix.copy(S.projectionMatrix),B.projectionMatrixInverse.copy(S.projectionMatrixInverse),I===null&&z.isPerspectiveCamera&&(I={camera:z,fov:z.fov,zoom:z.zoom}),L(z,B,ce)};function L(z,K,j){j===null?z.matrix.copy(K.matrixWorld):(z.matrix.copy(j.matrixWorld),z.matrix.invert(),z.matrix.multiply(K.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(K.projectionMatrix),z.projectionMatrixInverse.copy(K.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Rs*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(z){c=z,u!==null&&(u.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(z){return A[z]};let G=null;function V(z,K){if(h=K.getViewerPose(l||a),p=K,h!==null){let j=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let ce=!1;j.length!==B.cameras.length&&(B.cameras.length=0,ce=!0);for(let fe=0;fe<j.length;fe++){let Re=j[fe],Se=null;if(f!==null)Se=f.getViewport(Re);else{let xe=d.getViewSubImage(u,Re);Se=xe.viewport,fe===0&&(e.setRenderTargetTextures(_,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(_))}let te=w[fe];te===void 0&&(te=new sn,te.layers.enable(fe),te.viewport=new mt,w[fe]=te),te.matrix.fromArray(Re.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Re.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(Se.x,Se.y,Se.width,Se.height),fe===0&&(B.matrix.copy(te.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),ce===!0&&B.cameras.push(te)}let ae=s.enabledFeatures;if(ae&&ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){d=n.getBinding();let fe=d.getDepthInformation(j[0]);fe&&fe.isValid&&fe.texture&&m.init(fe,s.renderState)}if(ae&&ae.includes("camera-access")&&g){e.state.unbindTexture(),d=n.getBinding();for(let fe=0;fe<j.length;fe++){let Re=j[fe].camera;if(Re){let Se=A[Re];Se||(Se=new ja,A[Re]=Se);let te=d.getCameraImage(Re);Se.sourceTexture=te}}}}for(let j=0;j<M.length;j++){let ce=E[j],ae=M[j];ce!==null&&ae!==void 0&&ae.update(ce,K,l||a)}G&&G(z,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),p=null}let X=new vp;X.setAnimationLoop(V),this.setAnimationLoop=function(z){G=z},this.dispose=function(){}}},Vy=new Be,Bp=new rt;Bp.set(-1,0,0,0,1,0,0,0,1);Ky=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),bi=null;al=class{constructor(e={}){let{canvas:t=zf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=ot}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let g=f,m=new Set([Gc,kc,Oc]),A=new Set([ot,wn,Gi,Ws,Nc,Uc]),x=new Uint32Array(4),v=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]},M=null,E=null,b=[],y=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,C=!1,w=null,B=null,R=null,U=null;this._outputColorSpace=ht;let P=0,F=0,H=null,O=-1,L=null,G=new mt,V=new mt,X=null,z=new We(0),K=0,j=t.width,ce=t.height,ae=1,ee=null,me=null,fe=new mt(0,0,j,ce),Re=new mt(0,0,j,ce),Se=!1,te=new Yn,xe=new mc,_e=!1,be=!1,Ee=new Be,le=new T,ve=new mt,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Oe=!1;function ze(){return H===null?ae:1}let Q=n;function qe(N,J){return t.getContext(N,J)}let ye,De,$,Fe,ke,Ge,k,D,Z,pe,se,Me,Ie,de,he,Ce,W,ue,re,Ue,we,Pe,et;try{let N={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),Q===null){let J="webgl2";if(Q=qe(J,N),Q===null)throw qe(J)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}q()}catch(N){throw t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),ct("WebGLRenderer: "+N.message),N}function q(){ye=new sv(Q),ye.init(),we=new Gy(Q,ye),De=new qb(Q,ye,e,we),$=new Oy(Q,ye),De.reversedDepthBuffer&&u&&$.buffers.depth.setReversed(!0),B=Q.createFramebuffer(),R=Q.createFramebuffer(),U=Q.createFramebuffer(),Fe=new ov(Q),ke=new Ey,Ge=new ky(Q,ye,$,ke,De,we,Fe),k=new iv(S),D=new lx(Q),Pe=new Wb(Q,D),Z=new rv(Q,D,Fe,Pe),pe=new lv(Q,Z,D,Pe,Fe),ue=new cv(Q,De,Ge),he=new Xb(ke),se=new My(S,k,ye,De,Pe,he),Me=new Hy(S,ke),Ie=new wy,de=new Dy(ye),W=new Hb(S,k,$,pe,p,c),Ce=new Uy(S,pe,De),et=new Wy(Q,Fe,De,$),re=new Kb(Q,ye,Fe),Ue=new av(Q,ye,Fe),Fe.programs=se.programs,S.capabilities=De,S.extensions=ye,S.properties=ke,S.renderLists=Ie,S.shadowMap=Ce,S.state=$,S.info=Fe}g!==ot&&(I=new hv(g,t.width,t.height,o,s,r));let Y=new ih(S,Q);this.xr=Y,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){let N=ye.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){let N=ye.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(N){N!==void 0&&(ae=N,this.setSize(j,ce,!1))},this.getSize=function(N){return N.set(j,ce)},this.setSize=function(N,J,oe=!0){if(Y.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}j=N,ce=J,t.width=Math.floor(N*ae),t.height=Math.floor(J*ae),oe===!0&&(t.style.width=N+"px",t.style.height=J+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,N,J)},this.getDrawingBufferSize=function(N){return N.set(j*ae,ce*ae).floor()},this.setDrawingBufferSize=function(N,J,oe){j=N,ce=J,ae=oe,t.width=Math.floor(N*oe),t.height=Math.floor(J*oe),this.setViewport(0,0,N,J)},this.setEffects=function(N){if(g===ot){ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let J=0;J<N.length;J++)if(N[J].isOutputPass===!0){nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(G)},this.getViewport=function(N){return N.copy(fe)},this.setViewport=function(N,J,oe,ne){N.isVector4?fe.set(N.x,N.y,N.z,N.w):fe.set(N,J,oe,ne),$.viewport(G.copy(fe).multiplyScalar(ze()).round())},this.getScissor=function(N){return N.copy(Re)},this.setScissor=function(N,J,oe,ne){N.isVector4?Re.set(N.x,N.y,N.z,N.w):Re.set(N,J,oe,ne),$.scissor(V.copy(Re).multiplyScalar(ze()).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(N){$.setScissorTest(Se=N)},this.setOpaqueSort=function(N){ee=N},this.setTransparentSort=function(N){me=N},this.getClearColor=function(N){return N.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor(...arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha(...arguments)},this.clear=function(N=!0,J=!0,oe=!0){let ne=0;if(N){let ie=!1;if(H!==null){let He=H.texture.format;ie=m.has(He)}if(ie){let He=H.texture.type,je=A.has(He),Ve=W.getClearColor(),Je=W.getClearAlpha(),tt=Ve.r,ft=Ve.g,yt=Ve.b;je?(x[0]=tt,x[1]=ft,x[2]=yt,x[3]=Je,Q.clearBufferuiv(Q.COLOR,0,x)):(v[0]=tt,v[1]=ft,v[2]=yt,v[3]=Je,Q.clearBufferiv(Q.COLOR,0,v))}else ne|=Q.COLOR_BUFFER_BIT}J&&(ne|=Q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ne|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&Q.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),w=N},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),W.dispose(),Ie.dispose(),de.dispose(),Ge.dispose(),ke.dispose(),k.dispose(),pe.dispose(),Z.dispose(),Pe.dispose(),et.dispose(),se.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",nd),Y.removeEventListener("sessionend",id),_s.stop()};function Ae(N){N.preventDefault(),Ua("WebGLRenderer: Context Lost."),C=!0}function Te(){Ua("WebGLRenderer: Context Restored."),C=!1;let N=Fe.autoReset,J=Ce.enabled,oe=Ce.autoUpdate,ne=Ce.needsUpdate,ie=Ce.type;q(),Fe.autoReset=N,Ce.enabled=J,Ce.autoUpdate=oe,Ce.needsUpdate=ne,Ce.type=ie}function Ne(N){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function pt(N){let J=N.target;J.removeEventListener("dispose",pt),Ot(J)}function Ot(N){zt(N),ke.remove(N)}function zt(N){let J=ke.get(N).programs;J!==void 0&&(J.forEach(function(oe){se.releaseProgram(oe)}),N.isShaderMaterial&&se.releaseShaderCache(N))}this.renderBufferDirect=function(N,J,oe,ne,ie,He){J===null&&(J=Le);let je=ie.isMesh&&ie.matrixWorld.determinantAffine()<0,Ve=Cg(N,J,oe,ne,ie);$.setMaterial(ne,je);let Je=oe.index,tt=1;if(ne.wireframe===!0){if(Je=Z.getWireframeAttribute(oe),Je===void 0)return;tt=2}let ft=oe.drawRange,yt=oe.attributes.position,Ze=ft.start*tt,Mt=(ft.start+ft.count)*tt;He!==null&&(Ze=Math.max(Ze,He.start*tt),Mt=Math.min(Mt,(He.start+He.count)*tt)),Je!==null?(Ze=Math.max(Ze,0),Mt=Math.min(Mt,Je.count)):yt!=null&&(Ze=Math.max(Ze,0),Mt=Math.min(Mt,yt.count));let en=Mt-Ze;if(en<0||en===1/0)return;Pe.setup(ie,ne,Ve,oe,Je);let Vt,kt=re;if(Je!==null&&(Vt=D.get(Je),kt=Ue,kt.setIndex(Vt)),ie.isMesh)ne.wireframe===!0?($.setLineWidth(ne.wireframeLinewidth*ze()),kt.setMode(Q.LINES)):kt.setMode(Q.TRIANGLES);else if(ie.isLine){let An=ne.linewidth;An===void 0&&(An=1),$.setLineWidth(An*ze()),ie.isLineSegments?kt.setMode(Q.LINES):ie.isLineLoop?kt.setMode(Q.LINE_LOOP):kt.setMode(Q.LINE_STRIP)}else ie.isPoints?kt.setMode(Q.POINTS):ie.isSprite&&kt.setMode(Q.TRIANGLES);if(ie.isBatchedMesh)if(ye.get("WEBGL_multi_draw"))kt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{let An=ie._multiDrawStarts,$e=ie._multiDrawCounts,vn=ie._multiDrawCount,Rt=Je?D.get(Je).bytesPerElement:1,bs=ke.get(ne).currentProgram.getUniforms();for(let mn=0;mn<vn;mn++)bs.setValue(Q,"_gl_DrawID",mn),kt.render(An[mn]/Rt,$e[mn])}else if(ie.isInstancedMesh)kt.renderInstances(Ze,en,ie.count);else if(oe.isInstancedBufferGeometry){let An=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,$e=Math.min(oe.instanceCount,An);kt.renderInstances(Ze,en,$e)}else kt.render(Ze,en)};function In(N,J,oe,ne){w!==null&&N.isNodeMaterial&&w.setObject(ne,N),_e===!0&&he.setState(N,oe,!1),N.transparent===!0&&N.side===Lt&&N.forceSinglePass===!1?(N.side=Zt,N.needsUpdate=!0,_a(N,J,ne),N.side=Ln,N.needsUpdate=!0,_a(N,J,ne),N.side=Lt):_a(N,J,ne)}this.compile=function(N,J,oe=null){oe===null&&(oe=N),w!==null&&w.renderStart(N,J,oe),E=de.get(oe),E.init(J),y.push(E),oe.traverseVisible(function(ie){ie.isLight&&ie.layers.test(J.layers)&&(E.pushLight(ie),ie.castShadow&&E.pushShadow(ie))}),N!==oe&&N.traverseVisible(function(ie){ie.isLight&&ie.layers.test(J.layers)&&(E.pushLight(ie),ie.castShadow&&E.pushShadow(ie))}),E.setupLights(),w!==null&&w.updateLights(E.state.lightsArray),be=this.localClippingEnabled,_e=he.init(this.clippingPlanes,be),_e===!0&&he.setGlobalState(this.clippingPlanes,J),w!==null&&Ce.render(E.state.shadowsArray,oe,J);let ne=new Set;return N.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;let He=ie.material;if(He)if(Array.isArray(He))for(let je=0;je<He.length;je++){let Ve=He[je];In(Ve,oe,J,ie),ne.add(Ve)}else In(He,oe,J,ie),ne.add(He)}),E=y.pop(),w!==null&&w.renderEnd(),ne},this.compileAsync=function(N,J,oe=null){let ne=this.compile(N,J,oe);return new Promise(ie=>{function He(){if(ne.forEach(function(je){let Je=ke.get(je).currentProgram;(Je===void 0||Je.isReady())&&ne.delete(je)}),ne.size===0){ie(N);return}setTimeout(He,10)}ye.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let hi=null;function xa(N){hi&&hi(N)}function nd(){_s.stop()}function id(){_s.start()}let _s=new vp;_s.setAnimationLoop(xa),typeof self<"u"&&_s.setContext(self),this.setAnimationLoop=function(N){hi=N,Y.setAnimationLoop(N),N===null?_s.stop():_s.start()},Y.addEventListener("sessionstart",nd),Y.addEventListener("sessionend",id),this.render=function(N,J){if(J!==void 0&&J.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;w!==null&&w.renderStart(N,J);let oe=Y.enabled===!0&&Y.isPresenting===!0,ne=I!==null&&(H===null||oe)&&I.begin(S,H);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(J),J=Y.getCamera()),N.isScene===!0&&N.onBeforeRender(S,N,J,H),E=de.get(N,y.length),E.init(J),E.state.textureUnits=Ge.getTextureUnits(),y.push(E),Ee.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),J.isArrayCamera?xe.setFromArrayCamera(J):te.setFromProjectionMatrix(Ee,Jn,J.reversedDepth),be=this.localClippingEnabled,_e=he.init(this.clippingPlanes,be),M=Ie.get(N,b.length),M.init(),b.push(M),this.info.render.frame++,Y.enabled===!0&&Y.isPresenting===!0){let je=S.xr.getDepthSensingMesh();je!==null&&Sl(je,J,-1/0,S.sortObjects)}Sl(N,J,0,S.sortObjects),M.finish(),w!==null&&w.updateLights(E.state.lightsArray),S.sortObjects===!0&&M.sort(ee,me),Oe=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Oe&&W.addToRenderList(M,N),this.info.autoReset===!0&&this.info.reset(),_e===!0&&he.beginShadows();let ie=E.state.shadowsArray;if(Ce.render(ie,N,J),_e===!0&&he.endShadows(),(ne&&I.hasRenderPass())===!1){let je=M.opaque,Ve=M.transmissive;if(E.setupLights(),J.isArrayCamera){let Je=J.cameras;if(Ve.length>0)for(let tt=0,ft=Je.length;tt<ft;tt++){let yt=Je[tt];rd(je,Ve,N,yt)}Oe&&W.render(N);for(let tt=0,ft=Je.length;tt<ft;tt++){let yt=Je[tt];sd(M,N,yt,yt.viewport)}}else Ve.length>0&&rd(je,Ve,N,J),Oe&&W.render(N),sd(M,N,J)}H!==null&&F===0&&(Ge.updateMultisampleRenderTarget(H),Ge.updateRenderTargetMipmap(H)),ne&&I.end(S),N.isScene===!0&&N.onAfterRender(S,N,J),Pe.resetDefaultState(),O=-1,L=null,y.pop(),y.length>0?(E=y[y.length-1],Ge.setTextureUnits(E.state.textureUnits),_e===!0&&he.setGlobalState(S.clippingPlanes,E.state.camera)):E=null,b.pop(),b.length>0?M=b[b.length-1]:M=null,w!==null&&w.renderEnd()};function Sl(N,J,oe,ne){if(N.visible===!1)return;if(N.layers.test(J.layers)){if(N.isGroup)oe=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(J);else if(N.isLight)E.pushLight(N),N.castShadow&&E.pushShadow(N);else if(N.isSprite){let je=J.isArrayCamera?xe:te;if(!N.frustumCulled||N.intersectsFrustum(je)){ne&&ve.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Ee);let Ve=pe.update(N),Je=N.material;Je.visible&&M.push(N,Ve,Je,oe,ve.z,null,J)}}else if(N.isMesh||N.isLine||N.isPoints){let je=J.isArrayCamera?xe:te;if(!N.frustumCulled||N.intersectsFrustum(je)){let Ve=pe.update(N),Je=N.material;if(ne&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),ve.copy(N.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),ve.copy(Ve.boundingSphere.center)),ve.applyMatrix4(N.matrixWorld).applyMatrix4(Ee)),Array.isArray(Je)){let tt=Ve.groups;for(let ft=0,yt=tt.length;ft<yt;ft++){let Ze=tt[ft],Mt=Je[Ze.materialIndex];Mt&&Mt.visible&&M.push(N,Ve,Mt,oe,ve.z,Ze,J)}}else Je.visible&&M.push(N,Ve,Je,oe,ve.z,null,J)}}}let He=N.children;for(let je=0,Ve=He.length;je<Ve;je++)Sl(He[je],J,oe,ne)}function sd(N,J,oe,ne){let{opaque:ie,transmissive:He,transparent:je}=N;E.setupLightsView(oe),_e===!0&&he.setGlobalState(S.clippingPlanes,oe),ne&&$.viewport(G.copy(ne)),ie.length>0&&Co(ie,J,oe),He.length>0&&Co(He,J,oe),je.length>0&&Co(je,J,oe),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function rd(N,J,oe,ne){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[ne.id]===void 0){let Ze=ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[ne.id]=new qt(1,1,{generateMipmaps:!0,type:Ze?Ct:ot,minFilter:Ht,samples:Math.max(4,De.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xt.workingColorSpace})}let He=E.state.transmissionRenderTarget[ne.id],je=ne.viewport||G;He.setSize(je.z*S.transmissionResolutionScale,je.w*S.transmissionResolutionScale);let Ve=S.getRenderTarget(),Je=S.getActiveCubeFace(),tt=S.getActiveMipmapLevel();S.setRenderTarget(He),S.getClearColor(z),K=S.getClearAlpha(),K<1&&S.setClearColor(16777215,.5),S.clear(),Oe&&W.render(oe);let ft=S.toneMapping;S.toneMapping=_i;let yt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),E.setupLightsView(ne),_e===!0&&he.setGlobalState(S.clippingPlanes,ne),Co(N,oe,ne),Ge.updateMultisampleRenderTarget(He),Ge.updateRenderTargetMipmap(He),ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Mt=0,en=J.length;Mt<en;Mt++){let Vt=J[Mt],{object:kt,geometry:An,material:$e,group:vn}=Vt;if($e.side===Lt&&kt.layers.test(ne.layers)){let Rt=$e.side;$e.side=Zt,$e.needsUpdate=!0,ad(kt,oe,ne,An,$e,vn),$e.side=Rt,$e.needsUpdate=!0,Ze=!0}}Ze===!0&&(Ge.updateMultisampleRenderTarget(He),Ge.updateRenderTargetMipmap(He))}S.setRenderTarget(Ve,Je,tt),S.setClearColor(z,K),yt!==void 0&&(ne.viewport=yt),S.toneMapping=ft}function Co(N,J,oe){let ne=J.isScene===!0?J.overrideMaterial:null;for(let ie=0,He=N.length;ie<He;ie++){let je=N[ie],{object:Ve,geometry:Je,group:tt}=je,ft=je.material;ft.allowOverride===!0&&ne!==null&&(ft=ne),Ve.layers.test(oe.layers)&&ad(Ve,J,oe,Je,ft,tt)}}function ad(N,J,oe,ne,ie,He){w!==null&&ie.isNodeMaterial&&w.setObject(N,ie),N.onBeforeRender(S,J,oe,ne,ie,He),N.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),ie.onBeforeRender(S,J,oe,ne,N,He),ie.transparent===!0&&ie.side===Lt&&ie.forceSinglePass===!1?(ie.side=Zt,ie.needsUpdate=!0,S.renderBufferDirect(oe,J,ne,ie,N,He),ie.side=Ln,ie.needsUpdate=!0,S.renderBufferDirect(oe,J,ne,ie,N,He),ie.side=Lt):S.renderBufferDirect(oe,J,ne,ie,N,He),N.onAfterRender(S,J,oe,ne,ie,He)}function od(N){let J=0;for(let oe of N)oe.texture!==null&&J++;return J}function _a(N,J,oe){J.isScene!==!0&&(J=Le);let ne=ke.get(N),ie=E.state.lights,He=E.state.shadowsArray,je=ie.state.version,Ve=se.getParameters(N,ie.state,He,J,oe,E.state.lightProbeGridArray),Je=se.getProgramCacheKey(Ve),tt=ne.programs;ne.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?J.environment:null,ne.fog=J.fog;let ft=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;ne.envMap=k.get(N.envMap||ne.environment,ft),ne.envMapRotation=ne.environment!==null&&N.envMap===null?J.environmentRotation:N.envMapRotation,tt===void 0&&(N.addEventListener("dispose",pt),tt=new Map,ne.programs=tt,ne.programVariants=new Map);let yt=tt.get(Je);if(yt!==void 0){if(ne.currentProgram===yt&&ne.lightsStateVersion===je)return ld(N,Ve),yt}else Ve.uniforms=se.getUniforms(N),w!==null&&N.isNodeMaterial&&w.build(N,oe,Ve),N.onBeforeCompile(Ve,S),yt=se.acquireProgram(Ve,Je),tt.set(Je,yt),ne.uniforms=Ve.uniforms;let Ze=ne.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Ze.clippingPlanes=he.uniform),ld(N,Ve),ne.needsLights=Ig(N),ne.lightsStateVersion=je,ne.needsLights&&(Ze.ambientLightColor.value=ie.state.ambient,Ze.lightProbe.value=ie.state.probe,Ze.sunLights.value=ie.state.sun,Ze.sunLightShadows.value=ie.state.sunShadow,Ze.directionalLights.value=ie.state.directional,Ze.directionalLightShadows.value=ie.state.directionalShadow,Ze.spotLights.value=ie.state.spot,Ze.spotLightShadows.value=ie.state.spotShadow,Ze.rectAreaLights.value=ie.state.rectArea,Ze.ltc_1.value=ie.state.rectAreaLTC1,Ze.ltc_2.value=ie.state.rectAreaLTC2,Ze.pointLights.value=ie.state.point,Ze.pointLightShadows.value=ie.state.pointShadow,Ze.hemisphereLights.value=ie.state.hemi,Ze.sunShadowMatrix.value=ie.state.sunShadowMatrix,Ze.sunShadowCascade.value=ie.state.sunShadowCascade,Ze.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ze.spotLightMatrix.value=ie.state.spotLightMatrix,Ze.spotLightMap.value=ie.state.spotLightMap,Ze.pointShadowMatrix.value=ie.state.pointShadowMatrix),ne.numLightProbeGrids=od(E.state.lightProbeGridArray),ne.currentProgram=yt,ne.uniformsList=null,yt}function wg(N,J,oe,ne,ie){let He=ke.get(N),je=He.currentProgram.id+","+ne+","+ie,Ve=He.programVariants.get(je);return Ve===void 0?(Ve=_a(N,J,oe),He.programVariants.set(je,Ve)):(He.currentProgram=Ve,He.uniformsList=null,He.outputColorSpace=ne,He.toneMapping=ie),Ve}function cd(N){if(N.uniformsList===null){let J=N.currentProgram.getUniforms();N.uniformsList=la.seqWithValue(J.seq,N.uniforms)}return N.uniformsList}function ld(N,J){let oe=ke.get(N);oe.outputColorSpace=J.outputColorSpace,oe.batching=J.batching,oe.batchingColor=J.batchingColor,oe.instancing=J.instancing,oe.instancingColor=J.instancingColor,oe.instancingMorph=J.instancingMorph,oe.skinning=J.skinning,oe.morphTargets=J.morphTargets,oe.morphNormals=J.morphNormals,oe.morphColors=J.morphColors,oe.morphTargetsCount=J.morphTargetsCount,oe.numClippingPlanes=J.numClippingPlanes,oe.numIntersection=J.numClipIntersection,oe.vertexAlphas=J.vertexAlphas,oe.vertexTangents=J.vertexTangents,oe.toneMapping=J.toneMapping}function Cg(N,J,oe,ne,ie){J.isScene!==!0&&(J=Le),Ge.resetTextureUnits();let He=J.fog,je=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?J.environment:null,Ve=H===null?S.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:xt.workingColorSpace,Je=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,tt=k.get(ne.envMap||je,Je),ft=ne.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,yt=!!oe.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ze=!!oe.morphAttributes.position,Mt=!!oe.morphAttributes.normal,en=!!oe.morphAttributes.color,Vt=_i;ne.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Vt=S.toneMapping);let kt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,An=kt!==void 0?kt.length:0,$e=ke.get(ne),vn=E.state.lights;if(_e===!0&&(be===!0||N!==L)){let Wt=N===L&&ne.id===O;he.setState(ne,N,Wt)}let Rt=!1,bs=!1;ne.version===$e.__version?$e.needsLights&&$e.lightsStateVersion!==vn.state.version||ie.isBatchedMesh&&$e.batching===!1||!ie.isBatchedMesh&&$e.batching===!0||ie.isBatchedMesh&&$e.batchingColor===!0&&ie._colorsTexture===null||ie.isBatchedMesh&&$e.batchingColor===!1&&ie._colorsTexture!==null||ie.isInstancedMesh&&$e.instancing===!1||!ie.isInstancedMesh&&$e.instancing===!0||ie.isSkinnedMesh&&$e.skinning===!1||!ie.isSkinnedMesh&&$e.skinning===!0||ie.isInstancedMesh&&$e.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&$e.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&$e.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&$e.instancingMorph===!1&&ie.morphTexture!==null||$e.envMap!==tt||ne.fog===!0&&$e.fog!==He||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==he.numPlanes||$e.numIntersection!==he.numIntersection)||$e.vertexAlphas!==ft||$e.vertexTangents!==yt||$e.morphTargets!==Ze||$e.morphNormals!==Mt||$e.morphColors!==en||$e.morphTargetsCount!==An||$e.numLightProbeGrids!==od(E.state.lightProbeGridArray)?Rt=!0:($e.outputColorSpace!==Ve||$e.toneMapping!==Vt)&&(bs=!0):(Rt=!0,$e.__version=ne.version);let mn=$e.currentProgram;(Rt===!0||bs===!0)&&(mn=bs===!0?wg(ne,J,ie,Ve,Vt):_a(ne,J,ie),w&&ne.isNodeMaterial&&w.onUpdateProgram(ne,mn,$e));let To=!1,Ji=!1,vs=!1,wt=mn.getUniforms(),dn=$e.uniforms;if($.useProgram(mn.program)&&(To=!0,Ji=!0,vs=!0),ne.id!==O&&(O=ne.id,Ji=!0),To||L!==N){$.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),wt.setValue(Q,"projectionMatrix",N.projectionMatrix),wt.setValue(Q,"viewMatrix",N.matrixWorldInverse);let un=wt.map.cameraPosition;un!==void 0&&un.setValue(Q,le.setFromMatrixPosition(N.matrixWorld)),De.logarithmicDepthBuffer&&wt.setValue(Q,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&wt.setValue(Q,"isOrthographic",N.isOrthographicCamera===!0),L!==N&&(L=N,Ji=!0,vs=!0)}if($e.needsLights&&(vn.state.sunShadowMap.length>0&&wt.setValue(Q,"sunShadowMap",vn.state.sunShadowMap,Ge),vn.state.directionalShadowMap.length>0&&wt.setValue(Q,"directionalShadowMap",vn.state.directionalShadowMap,Ge),vn.state.spotShadowMap.length>0&&wt.setValue(Q,"spotShadowMap",vn.state.spotShadowMap,Ge),vn.state.pointShadowMap.length>0&&wt.setValue(Q,"pointShadowMap",vn.state.pointShadowMap,Ge)),ie.isSkinnedMesh){wt.setOptional(Q,ie,"bindMatrix"),wt.setOptional(Q,ie,"bindMatrixInverse");let Wt=ie.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),wt.setValue(Q,"boneTexture",Wt.boneTexture,Ge))}ie.isBatchedMesh&&(wt.setOptional(Q,ie,"batchingTexture"),wt.setValue(Q,"batchingTexture",ie._matricesTexture,Ge),wt.setOptional(Q,ie,"batchingIdTexture"),wt.setValue(Q,"batchingIdTexture",ie._indirectTexture,Ge),wt.setOptional(Q,ie,"batchingColorTexture"),ie._colorsTexture!==null&&wt.setValue(Q,"batchingColorTexture",ie._colorsTexture,Ge));let $n=oe.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&ue.update(ie,oe,mn),(Ji||$e.receiveShadow!==ie.receiveShadow)&&($e.receiveShadow=ie.receiveShadow,wt.setValue(Q,"receiveShadow",ie.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&J.environment!==null&&(dn.envMapIntensity.value=J.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=qy()),Ji){if(wt.setValue(Q,"toneMappingExposure",S.toneMappingExposure),$e.needsLights&&Tg(dn,vs),He&&ne.fog===!0&&Me.refreshFogUniforms(dn,He),Me.refreshMaterialUniforms(dn,ne,ae,ce,E.state.transmissionRenderTarget[N.id]),$e.needsLights&&$e.numLightProbeGrids>0){let Wt=_,un=0;for(let Mi of E.state.lightProbeGridArray)Mi.texture!==null&&(Wt.textures[un]=Mi.texture,Wt.min[un]=Mi.boundingBox.min,Wt.max[un]=Mi.boundingBox.max,Wt.resolution[un]=Mi.resolution,un++);for(let Mi in Wt)Wt[Mi].length=un;dn.probesSH.value=Wt.textures,dn.probesMin.value=Wt.min,dn.probesMax.value=Wt.max,dn.probesResolution.value=Wt.resolution}la.upload(Q,cd($e),dn,Ge)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(la.upload(Q,cd($e),dn,Ge),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&wt.setValue(Q,"center",ie.center),wt.setValue(Q,"modelViewMatrix",ie.modelViewMatrix),wt.setValue(Q,"normalMatrix",ie.normalMatrix),wt.setValue(Q,"modelMatrix",ie.matrixWorld),ne.uniformsGroups!==void 0){let Wt=ne.uniformsGroups;for(let un=0,Mi=Wt.length;un<Mi;un++){let hd=Wt[un];et.update(hd,mn),et.bind(hd,mn)}}return mn}function Tg(N,J){N.ambientLightColor.needsUpdate=J,N.lightProbe.needsUpdate=J,N.sunLights.needsUpdate=J,N.sunLightShadows.needsUpdate=J,N.directionalLights.needsUpdate=J,N.directionalLightShadows.needsUpdate=J,N.pointLights.needsUpdate=J,N.pointLightShadows.needsUpdate=J,N.spotLights.needsUpdate=J,N.spotLightShadows.needsUpdate=J,N.rectAreaLights.needsUpdate=J,N.hemisphereLights.needsUpdate=J}function Ig(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(N,J,oe){let ne=ke.get(N);ne.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),ke.get(N.texture).__webglTexture=J,ke.get(N.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:oe,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,J){let oe=ke.get(N);oe.__webglFramebuffer=J,oe.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(N,J=0,oe=0){H=N,P=J,F=oe;let ne=null,ie=!1,He=!1;if(N){let Ve=ke.get(N);if(Ve.__useDefaultFramebuffer!==void 0){$.bindFramebuffer(Q.FRAMEBUFFER,Ve.__webglFramebuffer),G.copy(N.viewport),V.copy(N.scissor),X=N.scissorTest,$.viewport(G),$.scissor(V),$.setScissorTest(X),O=-1;return}else if(Ve.__webglFramebuffer===void 0)Ge.setupRenderTarget(N);else if(Ve.__hasExternalTextures)Ge.rebindTextures(N,ke.get(N.texture).__webglTexture,ke.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){let ft=N.depthTexture;if(Ve.__boundDepthTexture!==ft){if(ft!==null&&ke.has(ft)&&(N.width!==ft.image.width||N.height!==ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(N)}}let Je=N.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(He=!0);let tt=ke.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(tt[J])?ne=tt[J][oe]:ne=tt[J],ie=!0):N.samples>0&&Ge.useMultisampledRTT(N)===!1?ne=ke.get(N).__webglMultisampledFramebuffer:Array.isArray(tt)?ne=tt[oe]:ne=tt,G.copy(N.viewport),V.copy(N.scissor),X=N.scissorTest}else G.copy(fe).multiplyScalar(ae).floor(),V.copy(Re).multiplyScalar(ae).floor(),X=Se;if(oe!==0&&(ne=B),$.bindFramebuffer(Q.FRAMEBUFFER,ne)&&$.drawBuffers(N,ne),$.viewport(G),$.scissor(V),$.setScissorTest(X),ie){let Ve=ke.get(N.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ve.__webglTexture,oe)}else if(He){let Ve=J;for(let Je=0;Je<N.textures.length;Je++){let tt=ke.get(N.textures[Je]);Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+Je,tt.__webglTexture,oe,Ve)}}else if(N!==null&&oe!==0){let Ve=ke.get(N.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Ve.__webglTexture,oe)}O=-1};function ud(N){let J=ke.get(N);return(J.__readFormat!==N.format||J.__readType!==N.type)&&(J.__readFormat=N.format,J.__readType=N.type,J.__formatReadable=De.textureFormatReadable(N.format),J.__typeReadable=De.textureTypeReadable(N.type)),J}this.readRenderTargetPixels=function(N,J,oe,ne,ie,He,je,Ve=0){if(!(N&&N.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=ke.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&je!==void 0&&(Je=Je[je],Array.isArray(Je)&&(Je=Je[0])),Je){$.bindFramebuffer(Q.FRAMEBUFFER,Je);try{let tt=N.textures[Ve],ft=tt.format,yt=tt.type;N.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Ve);let Ze=ud(tt);if(Ze.__formatReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ze.__typeReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=N.width-ne&&oe>=0&&oe<=N.height-ie&&Q.readPixels(J,oe,ne,ie,we.convert(ft),we.convert(yt),He)}finally{let tt=H!==null?ke.get(H).__webglFramebuffer:null;$.bindFramebuffer(Q.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(N,J,oe,ne,ie,He,je,Ve=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=ke.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&je!==void 0&&(Je=Je[je],Array.isArray(Je)&&(Je=Je[0])),Je)if(J>=0&&J<=N.width-ne&&oe>=0&&oe<=N.height-ie){$.bindFramebuffer(Q.FRAMEBUFFER,Je);let tt=N.textures[Ve],ft=tt.format,yt=tt.type;N.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Ve);let Ze=ud(tt);if(Ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Mt=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,Mt),Q.bufferData(Q.PIXEL_PACK_BUFFER,He.byteLength,Q.STREAM_READ),Q.readPixels(J,oe,ne,ie,we.convert(ft),we.convert(yt),0),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null);let en=H!==null?ke.get(H).__webglFramebuffer:null;$.bindFramebuffer(Q.FRAMEBUFFER,en);let Vt=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await Hf(Q,Vt,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,Mt),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,He),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null),Q.deleteBuffer(Mt),Q.deleteSync(Vt),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,J=null,oe=0){let ne=Math.pow(2,-oe),ie=Math.floor(N.image.width*ne),He=Math.floor(N.image.height*ne),je=J!==null?J.x:0,Ve=J!==null?J.y:0;Ge.setTexture2D(N,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,oe,0,0,je,Ve,ie,He),$.unbindTexture()},this.copyTextureToTexture=function(N,J,oe=null,ne=null,ie=0,He=0){let je,Ve,Je,tt,ft,yt,Ze,Mt,en,Vt=N.isCompressedTexture?N.mipmaps[He]:N.image;if(oe!==null)je=oe.max.x-oe.min.x,Ve=oe.max.y-oe.min.y,Je=oe.isBox3?oe.max.z-oe.min.z:1,tt=oe.min.x,ft=oe.min.y,yt=oe.isBox3?oe.min.z:0;else{let wt=Math.pow(2,-ie);je=Math.floor(Vt.width*wt),Ve=Math.floor(Vt.height*wt),N.isDataArrayTexture?Je=Vt.depth:N.isData3DTexture?Je=Math.floor(Vt.depth*wt):Je=1,tt=0,ft=0,yt=0}ne!==null?(Ze=ne.x,Mt=ne.y,en=ne.z):(Ze=0,Mt=0,en=0);let kt=we.convert(J.format),An=we.convert(J.type),$e;J.isData3DTexture?(Ge.setTexture3D(J,0),$e=Q.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(Ge.setTexture2DArray(J,0),$e=Q.TEXTURE_2D_ARRAY):(Ge.setTexture2D(J,0),$e=Q.TEXTURE_2D),$.activeTexture(Q.TEXTURE0),$.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,J.flipY),$.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),$.pixelStorei(Q.UNPACK_ALIGNMENT,J.unpackAlignment);let vn=$.getParameter(Q.UNPACK_ROW_LENGTH),Rt=$.getParameter(Q.UNPACK_IMAGE_HEIGHT),bs=$.getParameter(Q.UNPACK_SKIP_PIXELS),mn=$.getParameter(Q.UNPACK_SKIP_ROWS),To=$.getParameter(Q.UNPACK_SKIP_IMAGES);$.pixelStorei(Q.UNPACK_ROW_LENGTH,Vt.width),$.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Vt.height),$.pixelStorei(Q.UNPACK_SKIP_PIXELS,tt),$.pixelStorei(Q.UNPACK_SKIP_ROWS,ft),$.pixelStorei(Q.UNPACK_SKIP_IMAGES,yt);let Ji=N.isDataArrayTexture||N.isData3DTexture,vs=J.isDataArrayTexture||J.isData3DTexture;if(N.isDepthTexture){let wt=ke.get(N),dn=ke.get(J),$n=ke.get(wt.__renderTarget),Wt=ke.get(dn.__renderTarget);$.bindFramebuffer(Q.READ_FRAMEBUFFER,$n.__webglFramebuffer),$.bindFramebuffer(Q.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let un=0;un<Je;un++)Ji&&(Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,ke.get(N).__webglTexture,ie,yt+un),Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,ke.get(J).__webglTexture,He,en+un)),Q.blitFramebuffer(tt,ft,tt+je,ft+Ve,Ze,Mt,Ze+je,Mt+Ve,Q.DEPTH_BUFFER_BIT,Q.NEAREST);$.bindFramebuffer(Q.READ_FRAMEBUFFER,null),$.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else if(ie!==0||N.isRenderTargetTexture||ke.has(N)){let wt=ke.get(N),dn=ke.get(J);$.bindFramebuffer(Q.READ_FRAMEBUFFER,R),$.bindFramebuffer(Q.DRAW_FRAMEBUFFER,U);for(let $n=0;$n<Je;$n++)Ji?Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,wt.__webglTexture,ie,yt+$n):Q.framebufferTexture2D(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,wt.__webglTexture,ie),vs?Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,dn.__webglTexture,He,en+$n):Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,dn.__webglTexture,He),ie!==0?Q.blitFramebuffer(tt,ft,tt+je,ft+Ve,Ze,Mt,Ze+je,Mt+Ve,Q.COLOR_BUFFER_BIT,Q.NEAREST):vs?Q.copyTexSubImage3D($e,He,Ze,Mt,en+$n,tt,ft,je,Ve):Q.copyTexSubImage2D($e,He,Ze,Mt,tt,ft,je,Ve);$.bindFramebuffer(Q.READ_FRAMEBUFFER,null),$.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else vs?N.isDataTexture||N.isData3DTexture?Q.texSubImage3D($e,He,Ze,Mt,en,je,Ve,Je,kt,An,Vt.data):J.isCompressedArrayTexture?Q.compressedTexSubImage3D($e,He,Ze,Mt,en,je,Ve,Je,kt,Vt.data):Q.texSubImage3D($e,He,Ze,Mt,en,je,Ve,Je,kt,An,Vt):N.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,He,Ze,Mt,je,Ve,kt,An,Vt.data):N.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,He,Ze,Mt,Vt.width,Vt.height,kt,Vt.data):Q.texSubImage2D(Q.TEXTURE_2D,He,Ze,Mt,je,Ve,kt,An,Vt);$.pixelStorei(Q.UNPACK_ROW_LENGTH,vn),$.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Rt),$.pixelStorei(Q.UNPACK_SKIP_PIXELS,bs),$.pixelStorei(Q.UNPACK_SKIP_ROWS,mn),$.pixelStorei(Q.UNPACK_SKIP_IMAGES,To),He===0&&J.generateMipmaps===!0&&J.mipmapsAutoUpdate===!0&&Q.generateMipmap($e),$.unbindTexture()},this.initRenderTarget=function(N){ke.get(N).__webglFramebuffer===void 0&&Ge.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?Ge.setTextureCube(N,0):N.isData3DTexture?Ge.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?Ge.setTexture2DArray(N,0):Ge.setTexture2D(N,0),$.unbindTexture()},this.resetState=function(){P=0,F=0,H=null,$.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}}});function ln(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new lt;c.morphTargetsRelative=o;let l=0;for(let h=0;h<i.length;++h){let d=i[h],u=0,f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==i[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.morphAttributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(t){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=i[u].attributes.position.count}c.setIndex(d)}for(let h in r){let d=Dp(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let g=0;g<a[h].length;++g)f.push(a[h][g][u]);let p=Dp(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}}return c}function Dp(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new St(a,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let d=c/t;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<t;p++){let g=h.getComponent(u,p);o.setComponent(u+d,p,g)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function sh(i,e){if(e===Du)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ca||e===po){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===ca)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var oi=ut(()=>{gt()});function Fp(i){let e=new Map,t=new Map,n=i.clone();return Pp(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Pp(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Pp(i.children[n],e.children[n],t)}var Lp=ut(()=>{});function Xy(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Jt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}function jy(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new at({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ln})),i.DefaultMaterial}function tr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function yi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Zy(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let d=e[l];if(n){let u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;a.push(u)}if(s){let u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;o.push(u)}if(r){let u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;c.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],d=l[1],u=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=d),r&&(i.morphAttributes.color=u),i.morphTargetsRelative=!0,i})}function $y(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function eM(i){let e,t=i.extensions&&i.extensions[bt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+oh(t.attributes):e=i.indices+":"+oh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+oh(i.targets[n]);return e}function oh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Dh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function tM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}function iM(i,e,t){let n=e.attributes,s=new it;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new T(c[0],c[1],c[2]),new T(l[0],l[1],l[2])),o.normalized){let h=Dh(da[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new T,c=new T;for(let l=0,h=r.length;l<h;l++){let d=r[l];if(d.POSITION!==void 0){let u=t.json.accessors[d.POSITION],f=u.min,p=u.max;if(f!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),u.normalized){let g=Dh(da[u.componentType]);c.multiplyScalar(g)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new _n;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function kp(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=Bh[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return xt.workingColorSpace!==an&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${xt.workingColorSpace}" not supported.`),yi(i,e),iM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Zy(i,e.targets,t):i})}var fa,bt,ch,lh,uh,hh,dh,fh,ph,Ah,mh,gh,xh,_h,bh,vh,yh,Mh,Eh,ll,Sh,Gp,xo,Np,wh,Ch,Th,Ih,ul,Jy,Rh,Zn,da,Up,Op,rh,Bh,xs,Yy,ah,nM,Fh,Ph=ut(()=>{gt();oi();Lp();fa=class extends Wn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new hh(t)}),this.register(function(t){return new dh(t)}),this.register(function(t){return new fh(t)}),this.register(function(t){return new yh(t)}),this.register(function(t){return new Mh(t)}),this.register(function(t){return new Eh(t)}),this.register(function(t){return new Ah(t)}),this.register(function(t){return new mh(t)}),this.register(function(t){return new gh(t)}),this.register(function(t){return new xh(t)}),this.register(function(t){return new uh(t)}),this.register(function(t){return new _h(t)}),this.register(function(t){return new ph(t)}),this.register(function(t){return new vh(t)}),this.register(function(t){return new bh(t)}),this.register(function(t){return new ch(t)}),this.register(function(t){return new ll(t,bt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new ll(t,bt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Sh(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Oi.extractUrlBase(e);a=Oi.resolveURL(l,this.path)}else a=Oi.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new ri(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Gp){try{a[bt.KHR_BINARY_GLTF]=new wh(e)}catch(d){s&&s(d);return}r=JSON.parse(a[bt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Fh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let d=this.pluginCallbacks[h](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case bt.KHR_MATERIALS_UNLIT:a[d]=new lh;break;case bt.KHR_DRACO_MESH_COMPRESSION:a[d]=new Ch(r,this.dracoLoader);break;case bt.KHR_TEXTURE_TRANSFORM:a[d]=new Th;break;case bt.KHR_MESH_QUANTIZATION:a[d]=new Ih;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};bt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},ch=class{constructor(e){this.parser=e,this.name=bt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new We(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],an);let d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Qs(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Kn(h),l.distance=d;break;case"spot":l=new ks(h),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),yi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},lh=class{constructor(){this.name=bt.KHR_MATERIALS_UNLIT}getMaterialType(){return Rn}extendParams(e,t,n){let s=[];e.color=new We(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],an),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,ht))}return Promise.all(s)}},uh=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},hh=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ge(r,r)}return Promise.all(s)}},dh=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},fh=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},ph=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Ah=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new We(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],an)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,ht)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},mh=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},gh=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new We().setRGB(r[0],r[1],r[2],an),Promise.all(s)}},xh=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_IOR}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},_h=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new We().setRGB(r[0],r[1],r[2],an),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,ht)),Promise.all(s)}},bh=class{constructor(e){this.parser=e,this.name=bt.EXT_MATERIALS_BUMP}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},vh=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},yh=class{constructor(e){this.parser=e,this.name=bt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Mh=class{constructor(e){this.parser=e,this.name=bt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Eh=class{constructor(e){this.parser=e,this.name=bt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},ll=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,d=s.byteStride,u=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,u,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(f),h,d,u,s.mode,s.filter),f})})}else return null}},Sh=class{constructor(e){this.name=bt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Zn.TRIANGLES&&l.mode!==Zn.TRIANGLE_STRIP&&l.mode!==Zn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),d=h.isGroup?h.children:[h],u=l[0].count,f=[];for(let p of d){let g=new Be,m=new T,A=new Gt,x=new T(1,1,1),v=new Fn(p.geometry,p.material,u);for(let M=0;M<u;M++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&A.fromBufferAttribute(c.ROTATION,M),c.SCALE&&x.fromBufferAttribute(c.SCALE,M),v.setMatrixAt(M,g.compose(m,A,x));let _=null;for(let M in c)if(M==="_COLOR_0"){let E=c[M];v.instanceColor=new Dn(E.array,E.itemSize,E.normalized)}else if(M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"){if(_===null){let b=v.geometry;_=new lt,_.name=b.name;for(let y in b.attributes)_.setAttribute(y,b.attributes[y]);for(let y in b.morphAttributes)_.morphAttributes[y]=b.morphAttributes[y];b.index!==null&&_.setIndex(b.index),_.morphTargetsRelative=b.morphTargetsRelative;for(let y of b.groups)_.addGroup(y.start,y.count,y.materialIndex);b.boundingBox!==null&&(_.boundingBox=b.boundingBox.clone()),b.boundingSphere!==null&&(_.boundingSphere=b.boundingSphere.clone()),_.drawRange.start=b.drawRange.start,_.drawRange.count=b.drawRange.count,_.userData=Object.assign({},b.userData),v.geometry=_}let E=c[M];_.setAttribute(M,new Dn(E.array,E.itemSize,E.normalized))}Ft.prototype.copy.call(v,p),this.parser.assignFinalMaterial(v),f.push(v)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Gp="glTF",xo=12,Np={JSON:1313821514,BIN:5130562},wh=class{constructor(e){this.name=bt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,xo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Gp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-xo,r=new DataView(e,xo),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===Np.JSON){let l=new Uint8Array(e,xo+a,o);this.content=n.decode(l)}else if(c===Np.BIN){let l=xo+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ch=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=bt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let d=Bh[h]||h.toLowerCase();o[d]=a[h]}for(let h in e.attributes){let d=Bh[h]||h.toLowerCase();if(a[h]!==void 0){let u=n.accessors[e.attributes[h]],f=da[u.componentType];l[d]=f.name,c[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,u){s.decodeDracoFile(h,function(f){for(let p in f.attributes){let g=f.attributes[p],m=c[p];m!==void 0&&(g.normalized=m)}d(f)},o,l,an,u)})})}},Th=class{constructor(){this.name=bt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Ih=class{constructor(){this.name=bt.KHR_MESH_QUANTIZATION}},ul=class extends xi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,d=(n-t)/h,u=d*d,f=u*d,p=e*l,g=p-l,m=-2*f+3*u,A=f-u,x=1-m,v=A-u+d;for(let _=0;_!==o;_++){let M=a[g+_+o],E=a[g+_+c]*h,b=a[p+_+o],y=a[p+_]*h;r[_]=x*M+v*E+m*b+A*y}return r}},Jy=new Gt,Rh=class extends ul{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Jy.fromArray(r).normalize().toArray(r),r}},Zn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},da={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Up={9728:Pt,9729:vt,9984:Jr,9985:Yr,9986:Hs,9987:Ht},Op={33071:En,33648:wr,10497:rn},rh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Bh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},xs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Yy={CUBICSPLINE:void 0,LINEAR:Is,STEP:Ts},ah={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};nM=new Be,Fh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Xy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?(this.textureLoader=new fn(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new lo(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ri(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return tr(r,o,s),yi(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[bt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Oi.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=rh[s.type],o=da[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new St(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=rh[s.type],l=da[s.componentType],h=l.BYTES_PER_ELEMENT,d=h*c,u=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,g,m;if(f&&f!==d){let A=Math.floor(u/f),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+A+":"+s.count,v=t.cache.get(x);v||(g=new l(o,A*f,s.count*f/h),v=new Ds(g,f/h),t.cache.add(x,v)),m=new is(v,c,u%f/h,p)}else o===null?g=new l(s.count*c):g=new l(o,u,s.count*c),m=new St(g,c,p);if(s.sparse!==void 0){let A=rh.SCALAR,x=da[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,M=new x(a[1],v,s.sparse.count*A),E=new l(a[2],_,s.sparse.count*c);o!==null&&(m=new St(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let b=0,y=M.length;b<y;b++){let I=M[b];if(m.setX(I,E[b*c]),c>=2&&m.setY(I,E[b*c+1]),c>=3&&m.setZ(I,E[b*c+2]),c>=4&&m.setW(I,E[b*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let u=(r.samplers||{})[a.sampler]||{};return h.magFilter=Up[u.magFilter]||vt,h.minFilter=Up[u.minFilter]||Ht,h.wrapS=Op[u.wrapS]||rn,h.wrapT=Op[u.wrapT]||rn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Pt&&h.minFilter!==vt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=n.getDependency("bufferView",a.bufferView).then(function(u){return new Promise(function(f,p){t.parse(u,f,p)})});else{if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(c).then(function(u){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(m){let A=new nn(m);A.needsUpdate=!0,f(A)}),t.load(Oi.resolveURL(u,r.path),g,void 0,p)})})}let d=h.then(function(u){return l===!0&&o.revokeObjectURL(c),yi(u,a),u.userData.mimeType=a.mimeType||tM(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=d,d}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[bt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[bt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[bt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Ur,Sn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Nr,Sn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return at}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[bt.KHR_MATERIALS_UNLIT]){let d=s[bt.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),l.push(d.extendParams(o,r,t))}else{let d=r.pbrMetallicRoughness||{};if(o.color=new We(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],an),o.opacity=u[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",d.baseColorTexture,ht)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Lt);let h=r.alphaMode||ah.OPAQUE;if(h===ah.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===ah.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Rn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ge(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==Rn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Rn){let d=r.emissiveFactor;o.emissive=new We().setRGB(d[0],d[1],d[2],an)}return r.emissiveTexture!==void 0&&a!==Rn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,ht)),Promise.all(l).then(function(){let d=new a(o);return r.name&&(d.name=r.name),yi(d,r),t.associations.set(d,{materials:e}),r.extensions&&tr(s,d,r),d})}createUniqueName(e){let t=Bt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[bt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return kp(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=eM(l),d=s[h];if(d)a.push(d.promise);else{let u;l.extensions&&l.extensions[bt.KHR_DRACO_MESH_COMPRESSION]?u=r(l):u=kp(new lt,l,t),l.mode===Zn.TRIANGLE_STRIP?u=u.then(f=>sh(f,po)):l.mode===Zn.TRIANGLE_FAN&&(u=u.then(f=>sh(f,ca))),s[h]={primitive:l,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?jy(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],d=[];for(let f=0,p=h.length;f<p;f++){let g=h[f],m=a[f],A,x=l[f];if(m.mode===Zn.TRIANGLES||m.mode===Zn.TRIANGLE_STRIP||m.mode===Zn.TRIANGLE_FAN||m.mode===void 0){let v=r.isSkinnedMesh===!0,_=g.hasAttribute("skinIndex")&&g.hasAttribute("skinWeight");v&&_===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),A=v&&_?new Va(g,x):new Qe(g,x),A.isSkinnedMesh===!0&&A.normalizeSkinWeights()}else if(m.mode===Zn.LINES)A=new Wa(g,x);else if(m.mode===Zn.LINE_STRIP)A=new Fs(g,x);else if(m.mode===Zn.LINE_LOOP)A=new Ka(g,x);else if(m.mode===Zn.POINTS)A=new qa(g,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(A.geometry.morphAttributes).length>0&&$y(A,r),A.name=t.createUniqueName(r.name||"mesh_"+e),yi(A,r),m.extensions&&tr(s,A,m),t.assignFinalMaterial(A),d.push(A)}for(let f=0,p=d.length;f<p;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&tr(s,d[0],r),d[0];let u=new st;r.extensions&&tr(s,u,r),t.associations.set(u,{meshes:e});for(let f=0,p=d.length;f<p;f++)u.add(d[f]);return u})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new sn(Ye.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Gs(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),yi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let d=a[l];if(d){o.push(d);let u=new Be;r!==null&&u.fromArray(r.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ha(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let d=0,u=s.channels.length;d<u;d++){let f=s.channels[d],p=s.samplers[f.sampler],g=f.target,m=g.node,A=s.parameters!==void 0?s.parameters[p.input]:p.input,x=s.parameters!==void 0?s.parameters[p.output]:p.output;g.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",A)),c.push(this.getDependency("accessor",x)),l.push(p),h.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(d){let u=d[0],f=d[1],p=d[2],g=d[3],m=d[4],A=[];for(let v=0,_=u.length;v<_;v++){let M=u[v],E=f[v],b=p[v],y=g[v],I=m[v];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let S=n._createAnimationTracks(M,E,b,y,I);if(S)for(let C=0;C<S.length;C++)A.push(S[C])}let x=new oo(r,void 0,A);return yi(x,s),x})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],d=l[1],u=l[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,nM)});for(let f=0,p=d.length;f<p;f++)h.add(d[f]);if(h.userData.pivot!==void 0&&d.length>0){let f=h.userData.pivot,p=d[0];h.pivot=new T().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new Lr:l.length>1?h=new st:l.length===1?h=l[0]:h=new Ft,h!==l[0])for(let d=0,u=l.length;d<u;d++)h.add(l[d]);if(r.name&&(h.userData.name=r.name,h.name=a),yi(h,r),r.extensions&&tr(n,h,r),r.matrix!==void 0){let d=new Be;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let d=s.associations.get(h);s.associations.set(h,{...d})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new st;n.name&&(r.name=s.createUniqueName(n.name)),yi(r,n),n.extensions&&tr(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,d=c.length;h<d;h++){let u=c[h];u.parent!==null?r.add(Fp(u)):r.add(u)}let l=h=>{let d=new Map;for(let[u,f]of s.associations)(u instanceof Sn||u instanceof nn)&&d.set(u,f);return h.traverse(u=>{let f=s.associations.get(u);f!=null&&d.set(u,f)}),d};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}xs[r.path]===xs.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(xs[r.path]){case xs.weights:h=Li;break;case xs.rotation:h=Ni;break;case xs.translation:case xs.scale:h=us;break;default:n.itemSize===1?h=Li:h=us;break}let d=s.interpolation!==void 0?Yy[s.interpolation]:Is,u=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){let g=new h(c[f]+"."+xs[r.path],t.array,u,d);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Dh(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ni?Rh:ul;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}});var hl,Qp=ut(()=>{hl=class{constructor(e=4){this.pool=e,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0,this.workerCreator=null}_initWorker(e){if(!this.workers[e]){let t=this.workerCreator();t.addEventListener("message",this._onMessage.bind(this,e)),this.workers[e]=t}}_getIdleWorker(){for(let e=0;e<this.pool;e++)if(!(this.workerStatus&1<<e))return e;return-1}_onMessage(e,t){let n=this.workersResolve[e];if(n&&n(t),this.queue.length){let{resolve:s,msg:r,transfer:a}=this.queue.shift();this.workersResolve[e]=s,this.workers[e].postMessage(r,a)}else this.workerStatus^=1<<e}setWorkerCreator(e){this.workerCreator=e}setWorkerLimit(e){this.pool=e}postMessage(e,t){return new Promise(n=>{let s=this._getIdleWorker();s!==-1?(this._initWorker(s),this.workerStatus|=1<<s,this.workersResolve[s]=n,this.workers[s].postMessage(e,t)):this.queue.push({resolve:n,msg:e,transfer:t})})}dispose(){this.workers.forEach(e=>e.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}});function zp(i){return new TextDecoder().decode(i)}function Vp(i){let e=new Uint8Array(i.buffer,i.byteOffset,Tn.length);if(e[0]!==Tn[0]||e[1]!==Tn[1]||e[2]!==Tn[2]||e[3]!==Tn[3]||e[4]!==Tn[4]||e[5]!==Tn[5]||e[6]!==Tn[6]||e[7]!==Tn[7]||e[8]!==Tn[8]||e[9]!==Tn[9]||e[10]!==Tn[10]||e[11]!==Tn[11])throw new Error("Missing KTX 2.0 identifier.");let t={vkFormat:0,typeSize:1,pixelWidth:0,pixelHeight:0,pixelDepth:0,layerCount:0,faceCount:1,levelCount:0,supercompressionScheme:0,levels:[],dataFormatDescriptor:[{vendorId:0,descriptorType:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],keyValue:{},globalData:null},n=17*Uint32Array.BYTES_PER_ELEMENT,s=new nr(i,Tn.length,n,!0);t.vkFormat=s._nextUint32(),t.typeSize=s._nextUint32(),t.pixelWidth=s._nextUint32(),t.pixelHeight=s._nextUint32(),t.pixelDepth=s._nextUint32(),t.layerCount=s._nextUint32(),t.faceCount=s._nextUint32(),t.levelCount=s._nextUint32(),t.supercompressionScheme=s._nextUint32();let r=s._nextUint32(),a=s._nextUint32(),o=s._nextUint32(),c=s._nextUint32(),l=s._nextUint64(),h=s._nextUint64(),d=3*Math.max(t.levelCount,1)*8,u=new nr(i,Tn.length+n,d,!0);for(let G=0,V=Math.max(t.levelCount,1);G<V;G++)t.levels.push({levelData:new Uint8Array(i.buffer,i.byteOffset+u._nextUint64(),u._nextUint64()),uncompressedByteLength:u._nextUint64()});let f=new nr(i,r,a,!0);f._skip(4);let p=f._nextUint16(),g=f._nextUint16(),m=f._nextUint16(),A=f._nextUint16(),x={vendorId:p,descriptorType:g,versionNumber:m,colorModel:f._nextUint8(),colorPrimaries:f._nextUint8(),transferFunction:f._nextUint8(),flags:f._nextUint8(),texelBlockDimension:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],bytesPlane:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],samples:[]},v=(A/4-6)/4;for(let G=0;G<v;G++){let V={bitOffset:f._nextUint16(),bitLength:f._nextUint8(),channelType:f._nextUint8(),samplePosition:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],sampleLower:Number.NEGATIVE_INFINITY,sampleUpper:Number.POSITIVE_INFINITY};64&V.channelType?(V.sampleLower=f._nextInt32(),V.sampleUpper=f._nextInt32()):(V.sampleLower=f._nextUint32(),V.sampleUpper=f._nextUint32()),x.samples[G]=V}t.dataFormatDescriptor.length=0,t.dataFormatDescriptor.push(x);let _=new nr(i,o,c,!0);for(;_._offset<c;){let G=_._nextUint32(),V=_._scan(G),X=zp(V);if(t.keyValue[X]=_._nextUint8Array(G-V.byteLength-1),X.match(/^ktx/i)){let z=zp(t.keyValue[X]);t.keyValue[X]=z.substring(0,z.lastIndexOf("\0"))}_._skip(G%4?4-G%4:0)}if(h<=0)return t;let M=new nr(i,l,h,!0),E=M._nextUint16(),b=M._nextUint16(),y=M._nextUint32(),I=M._nextUint32(),S=M._nextUint32(),C=M._nextUint32(),w=[];for(let G=0,V=Math.max(t.levelCount,1);G<V;G++)w.push({imageFlags:M._nextUint32(),rgbSliceByteOffset:M._nextUint32(),rgbSliceByteLength:M._nextUint32(),alphaSliceByteOffset:M._nextUint32(),alphaSliceByteLength:M._nextUint32()});let B=l+M._offset,R=B+y,U=R+I,P=U+S,F=new Uint8Array(i.buffer,i.byteOffset+B,y),H=new Uint8Array(i.buffer,i.byteOffset+R,I),O=new Uint8Array(i.buffer,i.byteOffset+U,S),L=new Uint8Array(i.buffer,i.byteOffset+P,C);return t.globalData={endpointCount:E,selectorCount:b,imageDescs:w,endpointsData:F,selectorsData:H,tablesData:O,extendedData:L},t}var nr,Z1,Tn,Hp=ut(()=>{nr=class{constructor(e,t,n,s){this._dataView=void 0,this._littleEndian=void 0,this._offset=void 0,this._dataView=new DataView(e.buffer,e.byteOffset+t,n),this._littleEndian=s,this._offset=0}_nextUint8(){let e=this._dataView.getUint8(this._offset);return this._offset+=1,e}_nextUint16(){let e=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,e}_nextUint32(){let e=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint64(){let e=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,e}_nextInt32(){let e=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint8Array(e){let t=new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+this._offset,e);return this._offset+=e,t}_skip(e){return this._offset+=e,this}_scan(e,t=0){let n=this._offset,s=0;for(;this._dataView.getUint8(this._offset)!==t&&s<e;)s++,this._offset++;return s<e&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+n,s)}},Z1=new Uint8Array([0]),Tn=[171,75,84,88,32,50,48,187,13,10,26,10]});var Lh,Wi,Uh,Nh,dl,Wp,Kp=ut(()=>{Nh={env:{emscripten_notify_memory_growth:function(i){Uh=new Uint8Array(Wi.exports.memory.buffer)}}},dl=class{init(){return Lh||(Lh=typeof fetch<"u"?fetch("data:application/wasm;base64,"+Wp).then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,Nh)).then(this._init):WebAssembly.instantiate(Buffer.from(Wp,"base64"),Nh).then(this._init),Lh)}_init(e){Wi=e.instance,Nh.env.emscripten_notify_memory_growth(0)}decode(e,t=0){if(!Wi)throw new Error("ZSTDDecoder: Await .init() before decoding.");let n=e.byteLength,s=Wi.exports.malloc(n);Uh.set(e,s),t=t||Number(Wi.exports.ZSTD_findDecompressedSize(s,n));let r=Wi.exports.malloc(t),a=Wi.exports.ZSTD_decompress(r,t,s,n),o=Uh.slice(r,r+a);return Wi.exports.free(s),Wi.exports.free(r),o}},Wp="AGFzbQEAAAABpQEVYAF/AX9gAn9/AGADf39/AX9gBX9/f39/AX9gAX8AYAJ/fwF/YAR/f39/AX9gA39/fwBgBn9/f39/fwF/YAd/f39/f39/AX9gAn9/AX5gAn5+AX5gAABgBX9/f39/AGAGf39/f39/AGAIf39/f39/f38AYAl/f39/f39/f38AYAABf2AIf39/f39/f38Bf2ANf39/f39/f39/f39/fwF/YAF/AX4CJwEDZW52H2Vtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGgABANpaAEFAAAFAgEFCwACAQABAgIFBQcAAwABDgsBAQcAEhMHAAUBDAQEAAANBwQCAgYCBAgDAwMDBgEACQkHBgICAAYGAgQUBwYGAwIGAAMCAQgBBwUGCgoEEQAEBAEIAwgDBQgDEA8IAAcABAUBcAECAgUEAQCAAgYJAX8BQaCgwAILB2AHBm1lbW9yeQIABm1hbGxvYwAoBGZyZWUAJgxaU1REX2lzRXJyb3IAaBlaU1REX2ZpbmREZWNvbXByZXNzZWRTaXplAFQPWlNURF9kZWNvbXByZXNzAEoGX3N0YXJ0ACQJBwEAQQELASQKussBaA8AIAAgACgCBCABajYCBAsZACAAKAIAIAAoAgRBH3F0QQAgAWtBH3F2CwgAIABBiH9LC34BBH9BAyEBIAAoAgQiA0EgTQRAIAAoAggiASAAKAIQTwRAIAAQDQ8LIAAoAgwiAiABRgRAQQFBAiADQSBJGw8LIAAgASABIAJrIANBA3YiBCABIARrIAJJIgEbIgJrIgQ2AgggACADIAJBA3RrNgIEIAAgBCgAADYCAAsgAQsUAQF/IAAgARACIQIgACABEAEgAgv3AQECfyACRQRAIABCADcCACAAQQA2AhAgAEIANwIIQbh/DwsgACABNgIMIAAgAUEEajYCECACQQRPBEAgACABIAJqIgFBfGoiAzYCCCAAIAMoAAA2AgAgAUF/ai0AACIBBEAgAEEIIAEQFGs2AgQgAg8LIABBADYCBEF/DwsgACABNgIIIAAgAS0AACIDNgIAIAJBfmoiBEEBTQRAIARBAWtFBEAgACABLQACQRB0IANyIgM2AgALIAAgAS0AAUEIdCADajYCAAsgASACakF/ai0AACIBRQRAIABBADYCBEFsDwsgAEEoIAEQFCACQQN0ams2AgQgAgsWACAAIAEpAAA3AAAgACABKQAINwAICy8BAX8gAUECdEGgHWooAgAgACgCAEEgIAEgACgCBGprQR9xdnEhAiAAIAEQASACCyEAIAFCz9bTvtLHq9lCfiAAfEIfiUKHla+vmLbem55/fgsdAQF/IAAoAgggACgCDEYEfyAAKAIEQSBGBUEACwuCBAEDfyACQYDAAE8EQCAAIAEgAhBnIAAPCyAAIAJqIQMCQCAAIAFzQQNxRQRAAkAgAkEBSARAIAAhAgwBCyAAQQNxRQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADTw0BIAJBA3ENAAsLAkAgA0F8cSIEQcAASQ0AIAIgBEFAaiIFSw0AA0AgAiABKAIANgIAIAIgASgCBDYCBCACIAEoAgg2AgggAiABKAIMNgIMIAIgASgCEDYCECACIAEoAhQ2AhQgAiABKAIYNgIYIAIgASgCHDYCHCACIAEoAiA2AiAgAiABKAIkNgIkIAIgASgCKDYCKCACIAEoAiw2AiwgAiABKAIwNgIwIAIgASgCNDYCNCACIAEoAjg2AjggAiABKAI8NgI8IAFBQGshASACQUBrIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQALDAELIANBBEkEQCAAIQIMAQsgA0F8aiIEIABJBEAgACECDAELIAAhAgNAIAIgAS0AADoAACACIAEtAAE6AAEgAiABLQACOgACIAIgAS0AAzoAAyABQQRqIQEgAkEEaiICIARNDQALCyACIANJBEADQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADRw0ACwsgAAsMACAAIAEpAAA3AAALQQECfyAAKAIIIgEgACgCEEkEQEEDDwsgACAAKAIEIgJBB3E2AgQgACABIAJBA3ZrIgE2AgggACABKAAANgIAQQALDAAgACABKAIANgAAC/cCAQJ/AkAgACABRg0AAkAgASACaiAASwRAIAAgAmoiBCABSw0BCyAAIAEgAhALDwsgACABc0EDcSEDAkACQCAAIAFJBEAgAwRAIAAhAwwDCyAAQQNxRQRAIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcQ0ACwwBCwJAIAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQhBSAGQQR2IQRBICAAdCIAQQFyIQkgASgCACEPQQAhAiADIQYCQANAIAlBAkggAiAPS3JFBEAgAiEHAkAgCARAA0AgBEH//wNxQf//A0YEQCAHQRhqIQcgBiAQSQR/IAZBAmoiBigAACAFdgUgBUEQaiEFIARBEHYLIQQMAQsLA0AgBEEDcSIIQQNGBEAgBUECaiEFIARBAnYhBCAHQQNqIQcMAQsLIAcgCGoiByAPSw0EIAVBAmohBQNAIAIgB0kEQCANIAJBAXRqQQA7AQAgAkEBaiECDAELCyAGIA5LQQAgBiAFQQN1aiIHIAxLG0UEQCAHKAAAIAVBB3EiBXYhBAwCCyAEQQJ2IQQLIAYhBwsCfyALQX9qIAQgAEF/anEiBiAAQQF0QX9qIgggCWsiEUkNABogBCAIcSIEQQAgESAEIABIG2shBiALCyEIIA0gAkEBdGogBkF/aiIEOwEAIAlBASAGayAEIAZBAUgbayEJA0AgCSAASARAIABBAXUhACALQX9qIQsMAQsLAn8gByAOS0EAIAcgBSAIaiIFQQN1aiIGIAxLG0UEQCAFQQdxDAELIAUgDCIGIAdrQQN0awshBSACQQFqIQIgBEUhCCAGKAAAIAVBH3F2IQQMAQsLQWwgCUEBRyAFQSBKcg0BGiABIAJBf2o2AgAgBiAFQQdqQQN1aiADawwBC0FQCyEAIApBEGokACAACwkAQQFBBSAAGwsMACAAIAEoAAA2AAALqgMBCn8jAEHwAGsiCiQAIAJBAWohDiAAQQhqIQtBgIAEIAVBf2p0QRB1IQxBACECQQEhBkEBIAV0IglBf2oiDyEIA0AgAiAORkUEQAJAIAEgAkEBdCINai8BACIHQf//A0YEQCALIAhBA3RqIAI2AgQgCEF/aiEIQQEhBwwBCyAGQQAgDCAHQRB0QRB1ShshBgsgCiANaiAHOwEAIAJBAWohAgwBCwsgACAFNgIEIAAgBjYCACAJQQN2IAlBAXZqQQNqIQxBACEAQQAhBkEAIQIDQCAGIA5GBEADQAJAIAAgCUYNACAKIAsgAEEDdGoiASgCBCIGQQF0aiICIAIvAQAiAkEBajsBACABIAUgAhAUayIIOgADIAEgAiAIQf8BcXQgCWs7AQAgASAEIAZBAnQiAmooAgA6AAIgASACIANqKAIANgIEIABBAWohAAwBCwsFIAEgBkEBdGouAQAhDUEAIQcDQCAHIA1ORQRAIAsgAkEDdGogBjYCBANAIAIgDGogD3EiAiAISw0ACyAHQQFqIQcMAQsLIAZBAWohBgwBCwsgCkHwAGokAAsjAEIAIAEQCSAAhUKHla+vmLbem55/fkLj3MqV/M7y9YV/fAsQACAAQn43AwggACABNgIACyQBAX8gAARAIAEoAgQiAgRAIAEoAgggACACEQEADwsgABAmCwsfACAAIAEgAi8BABAINgIAIAEQBBogACACQQRqNgIEC0oBAX9BoCAoAgAiASAAaiIAQX9MBEBBiCBBMDYCAEF/DwsCQCAAPwBBEHRNDQAgABBmDQBBiCBBMDYCAEF/DwtBoCAgADYCACABC9cBAQh/Qbp/IQoCQCACKAIEIgggAigCACIJaiIOIAEgAGtLDQBBbCEKIAkgBCADKAIAIgtrSw0AIAAgCWoiBCACKAIIIgxrIQ0gACABQWBqIg8gCyAJQQAQKSADIAkgC2o2AgACQAJAIAwgBCAFa00EQCANIQUMAQsgDCAEIAZrSw0CIAcgDSAFayIAaiIBIAhqIAdNBEAgBCABIAgQDxoMAgsgBCABQQAgAGsQDyEBIAIgACAIaiIINgIEIAEgAGshBAsgBCAPIAUgCEEBECkLIA4hCgsgCgubAgEBfyMAQYABayINJAAgDSADNgJ8AkAgAkEDSwRAQX8hCQwBCwJAAkACQAJAIAJBAWsOAwADAgELIAZFBEBBuH8hCQwEC0FsIQkgBS0AACICIANLDQMgACAHIAJBAnQiAmooAgAgAiAIaigCABA7IAEgADYCAEEBIQkMAwsgASAJNgIAQQAhCQwCCyAKRQRAQWwhCQwCC0EAIQkgC0UgDEEZSHINAUEIIAR0QQhqIQBBACECA0AgAiAATw0CIAJBQGshAgwAAAsAC0FsIQkgDSANQfwAaiANQfgAaiAFIAYQFSICEAMNACANKAJ4IgMgBEsNACAAIA0gDSgCfCAHIAggAxAYIAEgADYCACACIQkLIA1BgAFqJAAgCQsLACAAIAEgAhALGgsQACAALwAAIAAtAAJBEHRyCy8AAn9BuH8gAUEISQ0AGkFyIAAoAAQiAEF3Sw0AGkG4fyAAQQhqIgAgACABSxsLCwkAIAAgATsAAAsDAAELigYBBX8gACAAKAIAIgVBfnE2AgBBACAAIAVBAXZqQYQgKAIAIgQgAEYbIQECQAJAIAAoAgQiAkUNACACKAIAIgNBAXENACACQQhqIgUgA0EBdkF4aiIDQQggA0EISxtnQR9zQQJ0QYAfaiIDKAIARgRAIAMgAigCDDYCAAsgAigCCCIDBEAgAyACKAIMNgIECyACKAIMIgMEQCADIAIoAgg2AgALIAIgAigCACAAKAIAQX5xajYCAEGEICEAAkACQCABRQ0AIAEgAjYCBCABKAIAIgNBAXENASADQQF2QXhqIgNBCCADQQhLG2dBH3NBAnRBgB9qIgMoAgAgAUEIakYEQCADIAEoAgw2AgALIAEoAggiAwRAIAMgASgCDDYCBAsgASgCDCIDBEAgAyABKAIINgIAQYQgKAIAIQQLIAIgAigCACABKAIAQX5xajYCACABIARGDQAgASABKAIAQQF2akEEaiEACyAAIAI2AgALIAIoAgBBAXZBeGoiAEEIIABBCEsbZ0Efc0ECdEGAH2oiASgCACEAIAEgBTYCACACIAA2AgwgAkEANgIIIABFDQEgACAFNgIADwsCQCABRQ0AIAEoAgAiAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAigCACABQQhqRgRAIAIgASgCDDYCAAsgASgCCCICBEAgAiABKAIMNgIECyABKAIMIgIEQCACIAEoAgg2AgBBhCAoAgAhBAsgACAAKAIAIAEoAgBBfnFqIgI2AgACQCABIARHBEAgASABKAIAQQF2aiAANgIEIAAoAgAhAgwBC0GEICAANgIACyACQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgIoAgAhASACIABBCGoiAjYCACAAIAE2AgwgAEEANgIIIAFFDQEgASACNgIADwsgBUEBdkF4aiIBQQggAUEISxtnQR9zQQJ0QYAfaiICKAIAIQEgAiAAQQhqIgI2AgAgACABNgIMIABBADYCCCABRQ0AIAEgAjYCAAsLDgAgAARAIABBeGoQJQsLgAIBA38CQCAAQQ9qQXhxQYQgKAIAKAIAQQF2ayICEB1Bf0YNAAJAQYQgKAIAIgAoAgAiAUEBcQ0AIAFBAXZBeGoiAUEIIAFBCEsbZ0Efc0ECdEGAH2oiASgCACAAQQhqRgRAIAEgACgCDDYCAAsgACgCCCIBBEAgASAAKAIMNgIECyAAKAIMIgFFDQAgASAAKAIINgIAC0EBIQEgACAAKAIAIAJBAXRqIgI2AgAgAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAygCACECIAMgAEEIaiIDNgIAIAAgAjYCDCAAQQA2AgggAkUNACACIAM2AgALIAELtwIBA38CQAJAIABBASAAGyICEDgiAA0AAkACQEGEICgCACIARQ0AIAAoAgAiA0EBcQ0AIAAgA0EBcjYCACADQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgAgAEEIakYEQCABIAAoAgw2AgALIAAoAggiAQRAIAEgACgCDDYCBAsgACgCDCIBBEAgASAAKAIINgIACyACECchAkEAIQFBhCAoAgAhACACDQEgACAAKAIAQX5xNgIAQQAPCyACQQ9qQXhxIgMQHSICQX9GDQIgAkEHakF4cSIAIAJHBEAgACACaxAdQX9GDQMLAkBBhCAoAgAiAUUEQEGAICAANgIADAELIAAgATYCBAtBhCAgADYCACAAIANBAXRBAXI2AgAMAQsgAEUNAQsgAEEIaiEBCyABC7kDAQJ/IAAgA2ohBQJAIANBB0wEQANAIAAgBU8NAiAAIAItAAA6AAAgAEEBaiEAIAJBAWohAgwAAAsACyAEQQFGBEACQCAAIAJrIgZBB00EQCAAIAItAAA6AAAgACACLQABOgABIAAgAi0AAjoAAiAAIAItAAM6AAMgAEEEaiACIAZBAnQiBkHAHmooAgBqIgIQFyACIAZB4B5qKAIAayECDAELIAAgAhAMCyACQQhqIQIgAEEIaiEACwJAAkACQAJAIAUgAU0EQCAAIANqIQEgBEEBRyAAIAJrQQ9Kcg0BA0AgACACEAwgAkEIaiECIABBCGoiACABSQ0ACwwFCyAAIAFLBEAgACEBDAQLIARBAUcgACACa0EPSnINASAAIQMgAiEEA0AgAyAEEAwgBEEIaiEEIANBCGoiAyABSQ0ACwwCCwNAIAAgAhAHIAJBEGohAiAAQRBqIgAgAUkNAAsMAwsgACEDIAIhBANAIAMgBBAHIARBEGohBCADQRBqIgMgAUkNAAsLIAIgASAAa2ohAgsDQCABIAVPDQEgASACLQAAOgAAIAFBAWohASACQQFqIQIMAAALAAsLQQECfyAAIAAoArjgASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigCACACaiAAQQZ2IgFBAnRBsB5qKAIAaiAAQSBxIgBFaiABRSAAQQV2cWoFQbh/CwsdACAAKAKQ4gEQWiAAQQA2AqDiASAAQgA3A5DiAQu1AwEFfyMAQZACayIKJABBuH8hBgJAIAVFDQAgBCwAACIIQf8BcSEHAkAgCEF/TARAIAdBgn9qQQF2IgggBU8NAkFsIQYgB0GBf2oiBUGAAk8NAiAEQQFqIQdBACEGA0AgBiAFTwRAIAUhBiAIIQcMAwUgACAGaiAHIAZBAXZqIgQtAABBBHY6AAAgACAGQQFyaiAELQAAQQ9xOgAAIAZBAmohBgwBCwAACwALIAcgBU8NASAAIARBAWogByAKEFMiBhADDQELIAYhBEEAIQYgAUEAQTQQECEJQQAhBQNAIAQgBkcEQCAAIAZqIggtAAAiAUELSwRAQWwhBgwDBSAJIAFBAnRqIgEgASgCAEEBajYCACAGQQFqIQZBASAILQAAdEEBdSAFaiEFDAILAAsLQWwhBiAFRQ0AIAUQFEEBaiIBQQxLDQAgAyABNgIAQQFBASABdCAFayIDEBQiAXQgA0cNACAAIARqIAFBAWoiADoAACAJIABBAnRqIgAgACgCAEEBajYCACAJKAIEIgBBAkkgAEEBcXINACACIARBAWo2AgAgB0EBaiEGCyAKQZACaiQAIAYLxhEBDH8jAEHwAGsiBSQAQWwhCwJAIANBCkkNACACLwAAIQogAi8AAiEJIAIvAAQhByAFQQhqIAQQDgJAIAMgByAJIApqakEGaiIMSQ0AIAUtAAohCCAFQdgAaiACQQZqIgIgChAGIgsQAw0BIAVBQGsgAiAKaiICIAkQBiILEAMNASAFQShqIAIgCWoiAiAHEAYiCxADDQEgBUEQaiACIAdqIAMgDGsQBiILEAMNASAAIAFqIg9BfWohECAEQQRqIQZBASELIAAgAUEDakECdiIDaiIMIANqIgIgA2oiDiEDIAIhBCAMIQcDQCALIAMgEElxBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgCS0AAyELIAcgBiAFQUBrIAgQAkECdGoiCS8BADsAACAFQUBrIAktAAIQASAJLQADIQogBCAGIAVBKGogCBACQQJ0aiIJLwEAOwAAIAVBKGogCS0AAhABIAktAAMhCSADIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgDS0AAyENIAAgC2oiCyAGIAVB2ABqIAgQAkECdGoiAC8BADsAACAFQdgAaiAALQACEAEgAC0AAyEAIAcgCmoiCiAGIAVBQGsgCBACQQJ0aiIHLwEAOwAAIAVBQGsgBy0AAhABIActAAMhByAEIAlqIgkgBiAFQShqIAgQAkECdGoiBC8BADsAACAFQShqIAQtAAIQASAELQADIQQgAyANaiIDIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgACALaiEAIAcgCmohByAEIAlqIQQgAyANLQADaiEDIAVB2ABqEA0gBUFAaxANciAFQShqEA1yIAVBEGoQDXJFIQsMAQsLIAQgDksgByACS3INAEFsIQsgACAMSw0BIAxBfWohCQNAQQAgACAJSSAFQdgAahAEGwRAIAAgBiAFQdgAaiAIEAJBAnRqIgovAQA7AAAgBUHYAGogCi0AAhABIAAgCi0AA2oiACAGIAVB2ABqIAgQAkECdGoiCi8BADsAACAFQdgAaiAKLQACEAEgACAKLQADaiEADAEFIAxBfmohCgNAIAVB2ABqEAQgACAKS3JFBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgACAJLQADaiEADAELCwNAIAAgCk0EQCAAIAYgBUHYAGogCBACQQJ0aiIJLwEAOwAAIAVB2ABqIAktAAIQASAAIAktAANqIQAMAQsLAkAgACAMTw0AIAAgBiAFQdgAaiAIEAIiAEECdGoiDC0AADoAACAMLQADQQFGBEAgBUHYAGogDC0AAhABDAELIAUoAlxBH0sNACAFQdgAaiAGIABBAnRqLQACEAEgBSgCXEEhSQ0AIAVBIDYCXAsgAkF9aiEMA0BBACAHIAxJIAVBQGsQBBsEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiIAIAYgBUFAayAIEAJBAnRqIgcvAQA7AAAgBUFAayAHLQACEAEgACAHLQADaiEHDAEFIAJBfmohDANAIAVBQGsQBCAHIAxLckUEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwNAIAcgDE0EQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwJAIAcgAk8NACAHIAYgBUFAayAIEAIiAEECdGoiAi0AADoAACACLQADQQFGBEAgBUFAayACLQACEAEMAQsgBSgCREEfSw0AIAVBQGsgBiAAQQJ0ai0AAhABIAUoAkRBIUkNACAFQSA2AkQLIA5BfWohAgNAQQAgBCACSSAFQShqEAQbBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2oiACAGIAVBKGogCBACQQJ0aiIELwEAOwAAIAVBKGogBC0AAhABIAAgBC0AA2ohBAwBBSAOQX5qIQIDQCAFQShqEAQgBCACS3JFBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsDQCAEIAJNBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsCQCAEIA5PDQAgBCAGIAVBKGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBKGogAi0AAhABDAELIAUoAixBH0sNACAFQShqIAYgAEECdGotAAIQASAFKAIsQSFJDQAgBUEgNgIsCwNAQQAgAyAQSSAFQRBqEAQbBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2oiACAGIAVBEGogCBACQQJ0aiICLwEAOwAAIAVBEGogAi0AAhABIAAgAi0AA2ohAwwBBSAPQX5qIQIDQCAFQRBqEAQgAyACS3JFBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsDQCADIAJNBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsCQCADIA9PDQAgAyAGIAVBEGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBEGogAi0AAhABDAELIAUoAhRBH0sNACAFQRBqIAYgAEECdGotAAIQASAFKAIUQSFJDQAgBUEgNgIUCyABQWwgBUHYAGoQCiAFQUBrEApxIAVBKGoQCnEgBUEQahAKcRshCwwJCwAACwALAAALAAsAAAsACwAACwALQWwhCwsgBUHwAGokACALC7UEAQ5/IwBBEGsiBiQAIAZBBGogABAOQVQhBQJAIARB3AtJDQAgBi0ABCEHIANB8ARqQQBB7AAQECEIIAdBDEsNACADQdwJaiIJIAggBkEIaiAGQQxqIAEgAhAxIhAQA0UEQCAGKAIMIgQgB0sNASADQdwFaiEPIANBpAVqIREgAEEEaiESIANBqAVqIQEgBCEFA0AgBSICQX9qIQUgCCACQQJ0aigCAEUNAAsgAkEBaiEOQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgASALaiAKNgIAIAVBAWohBSAKIAxqIQoMAQsLIAEgCjYCAEEAIQUgBigCCCELA0AgBSALRkUEQCABIAUgCWotAAAiDEECdGoiDSANKAIAIg1BAWo2AgAgDyANQQF0aiINIAw6AAEgDSAFOgAAIAVBAWohBQwBCwtBACEBIANBADYCqAUgBEF/cyAHaiEJQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgAyALaiABNgIAIAwgBSAJanQgAWohASAFQQFqIQUMAQsLIAcgBEEBaiIBIAJrIgRrQQFqIQgDQEEBIQUgBCAIT0UEQANAIAUgDk9FBEAgBUECdCIJIAMgBEE0bGpqIAMgCWooAgAgBHY2AgAgBUEBaiEFDAELCyAEQQFqIQQMAQsLIBIgByAPIAogESADIAIgARBkIAZBAToABSAGIAc6AAYgACAGKAIENgIACyAQIQULIAZBEGokACAFC8ENAQt/IwBB8ABrIgUkAEFsIQkCQCADQQpJDQAgAi8AACEKIAIvAAIhDCACLwAEIQYgBUEIaiAEEA4CQCADIAYgCiAMampBBmoiDUkNACAFLQAKIQcgBUHYAGogAkEGaiICIAoQBiIJEAMNASAFQUBrIAIgCmoiAiAMEAYiCRADDQEgBUEoaiACIAxqIgIgBhAGIgkQAw0BIAVBEGogAiAGaiADIA1rEAYiCRADDQEgACABaiIOQX1qIQ8gBEEEaiEGQQEhCSAAIAFBA2pBAnYiAmoiCiACaiIMIAJqIg0hAyAMIQQgCiECA0AgCSADIA9JcQRAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAACAGIAVBQGsgBxACQQF0aiIILQAAIQsgBUFAayAILQABEAEgAiALOgAAIAYgBUEoaiAHEAJBAXRqIggtAAAhCyAFQShqIAgtAAEQASAEIAs6AAAgBiAFQRBqIAcQAkEBdGoiCC0AACELIAVBEGogCC0AARABIAMgCzoAACAGIAVB2ABqIAcQAkEBdGoiCC0AACELIAVB2ABqIAgtAAEQASAAIAs6AAEgBiAFQUBrIAcQAkEBdGoiCC0AACELIAVBQGsgCC0AARABIAIgCzoAASAGIAVBKGogBxACQQF0aiIILQAAIQsgBUEoaiAILQABEAEgBCALOgABIAYgBUEQaiAHEAJBAXRqIggtAAAhCyAFQRBqIAgtAAEQASADIAs6AAEgA0ECaiEDIARBAmohBCACQQJqIQIgAEECaiEAIAkgBUHYAGoQDUVxIAVBQGsQDUVxIAVBKGoQDUVxIAVBEGoQDUVxIQkMAQsLIAQgDUsgAiAMS3INAEFsIQkgACAKSw0BIApBfWohCQNAIAVB2ABqEAQgACAJT3JFBEAgBiAFQdgAaiAHEAJBAXRqIggtAAAhCyAFQdgAaiAILQABEAEgACALOgAAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAASAAQQJqIQAMAQsLA0AgBUHYAGoQBCAAIApPckUEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCwNAIAAgCkkEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCyAMQX1qIQADQCAFQUBrEAQgAiAAT3JFBEAgBiAFQUBrIAcQAkEBdGoiCi0AACEJIAVBQGsgCi0AARABIAIgCToAACAGIAVBQGsgBxACQQF0aiIKLQAAIQkgBUFAayAKLQABEAEgAiAJOgABIAJBAmohAgwBCwsDQCAFQUBrEAQgAiAMT3JFBEAgBiAFQUBrIAcQAkEBdGoiAC0AACEKIAVBQGsgAC0AARABIAIgCjoAACACQQFqIQIMAQsLA0AgAiAMSQRAIAYgBUFAayAHEAJBAXRqIgAtAAAhCiAFQUBrIAAtAAEQASACIAo6AAAgAkEBaiECDAELCyANQX1qIQADQCAFQShqEAQgBCAAT3JFBEAgBiAFQShqIAcQAkEBdGoiAi0AACEKIAVBKGogAi0AARABIAQgCjoAACAGIAVBKGogBxACQQF0aiICLQAAIQogBUEoaiACLQABEAEgBCAKOgABIARBAmohBAwBCwsDQCAFQShqEAQgBCANT3JFBEAgBiAFQShqIAcQAkEBdGoiAC0AACECIAVBKGogAC0AARABIAQgAjoAACAEQQFqIQQMAQsLA0AgBCANSQRAIAYgBUEoaiAHEAJBAXRqIgAtAAAhAiAFQShqIAAtAAEQASAEIAI6AAAgBEEBaiEEDAELCwNAIAVBEGoQBCADIA9PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIAYgBUEQaiAHEAJBAXRqIgAtAAAhAiAFQRBqIAAtAAEQASADIAI6AAEgA0ECaiEDDAELCwNAIAVBEGoQBCADIA5PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIANBAWohAwwBCwsDQCADIA5JBEAgBiAFQRBqIAcQAkEBdGoiAC0AACECIAVBEGogAC0AARABIAMgAjoAACADQQFqIQMMAQsLIAFBbCAFQdgAahAKIAVBQGsQCnEgBUEoahAKcSAFQRBqEApxGyEJDAELQWwhCQsgBUHwAGokACAJC8oCAQR/IwBBIGsiBSQAIAUgBBAOIAUtAAIhByAFQQhqIAIgAxAGIgIQA0UEQCAEQQRqIQIgACABaiIDQX1qIQQDQCAFQQhqEAQgACAET3JFBEAgAiAFQQhqIAcQAkEBdGoiBi0AACEIIAVBCGogBi0AARABIAAgCDoAACACIAVBCGogBxACQQF0aiIGLQAAIQggBUEIaiAGLQABEAEgACAIOgABIABBAmohAAwBCwsDQCAFQQhqEAQgACADT3JFBEAgAiAFQQhqIAcQAkEBdGoiBC0AACEGIAVBCGogBC0AARABIAAgBjoAACAAQQFqIQAMAQsLA0AgACADT0UEQCACIAVBCGogBxACQQF0aiIELQAAIQYgBUEIaiAELQABEAEgACAGOgAAIABBAWohAAwBCwsgAUFsIAVBCGoQChshAgsgBUEgaiQAIAILtgMBCX8jAEEQayIGJAAgBkEANgIMIAZBADYCCEFUIQQCQAJAIANBQGsiDCADIAZBCGogBkEMaiABIAIQMSICEAMNACAGQQRqIAAQDiAGKAIMIgcgBi0ABEEBaksNASAAQQRqIQogBkEAOgAFIAYgBzoABiAAIAYoAgQ2AgAgB0EBaiEJQQEhBANAIAQgCUkEQCADIARBAnRqIgEoAgAhACABIAU2AgAgACAEQX9qdCAFaiEFIARBAWohBAwBCwsgB0EBaiEHQQAhBSAGKAIIIQkDQCAFIAlGDQEgAyAFIAxqLQAAIgRBAnRqIgBBASAEdEEBdSILIAAoAgAiAWoiADYCACAHIARrIQhBACEEAkAgC0EDTQRAA0AgBCALRg0CIAogASAEakEBdGoiACAIOgABIAAgBToAACAEQQFqIQQMAAALAAsDQCABIABPDQEgCiABQQF0aiIEIAg6AAEgBCAFOgAAIAQgCDoAAyAEIAU6AAIgBCAIOgAFIAQgBToABCAEIAg6AAcgBCAFOgAGIAFBBGohAQwAAAsACyAFQQFqIQUMAAALAAsgAiEECyAGQRBqJAAgBAutAQECfwJAQYQgKAIAIABHIAAoAgBBAXYiAyABa0F4aiICQXhxQQhHcgR/IAIFIAMQJ0UNASACQQhqC0EQSQ0AIAAgACgCACICQQFxIAAgAWpBD2pBeHEiASAAa0EBdHI2AgAgASAANgIEIAEgASgCAEEBcSAAIAJBAXZqIAFrIgJBAXRyNgIAQYQgIAEgAkH/////B3FqQQRqQYQgKAIAIABGGyABNgIAIAEQJQsLygIBBX8CQAJAAkAgAEEIIABBCEsbZ0EfcyAAaUEBR2oiAUEESSAAIAF2cg0AIAFBAnRB/B5qKAIAIgJFDQADQCACQXhqIgMoAgBBAXZBeGoiBSAATwRAIAIgBUEIIAVBCEsbZ0Efc0ECdEGAH2oiASgCAEYEQCABIAIoAgQ2AgALDAMLIARBHksNASAEQQFqIQQgAigCBCICDQALC0EAIQMgAUEgTw0BA0AgAUECdEGAH2ooAgAiAkUEQCABQR5LIQIgAUEBaiEBIAJFDQEMAwsLIAIgAkF4aiIDKAIAQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgBGBEAgASACKAIENgIACwsgAigCACIBBEAgASACKAIENgIECyACKAIEIgEEQCABIAIoAgA2AgALIAMgAygCAEEBcjYCACADIAAQNwsgAwvhCwINfwV+IwBB8ABrIgckACAHIAAoAvDhASIINgJcIAEgAmohDSAIIAAoAoDiAWohDwJAAkAgBUUEQCABIQQMAQsgACgCxOABIRAgACgCwOABIREgACgCvOABIQ4gAEEBNgKM4QFBACEIA0AgCEEDRwRAIAcgCEECdCICaiAAIAJqQazQAWooAgA2AkQgCEEBaiEIDAELC0FsIQwgB0EYaiADIAQQBhADDQEgB0EsaiAHQRhqIAAoAgAQEyAHQTRqIAdBGGogACgCCBATIAdBPGogB0EYaiAAKAIEEBMgDUFgaiESIAEhBEEAIQwDQCAHKAIwIAcoAixBA3RqKQIAIhRCEIinQf8BcSEIIAcoAkAgBygCPEEDdGopAgAiFUIQiKdB/wFxIQsgBygCOCAHKAI0QQN0aikCACIWQiCIpyEJIBVCIIghFyAUQiCIpyECAkAgFkIQiKdB/wFxIgNBAk8EQAJAIAZFIANBGUlyRQRAIAkgB0EYaiADQSAgBygCHGsiCiAKIANLGyIKEAUgAyAKayIDdGohCSAHQRhqEAQaIANFDQEgB0EYaiADEAUgCWohCQwBCyAHQRhqIAMQBSAJaiEJIAdBGGoQBBoLIAcpAkQhGCAHIAk2AkQgByAYNwNIDAELAkAgA0UEQCACBEAgBygCRCEJDAMLIAcoAkghCQwBCwJAAkAgB0EYakEBEAUgCSACRWpqIgNBA0YEQCAHKAJEQX9qIgMgA0VqIQkMAQsgA0ECdCAHaigCRCIJIAlFaiEJIANBAUYNAQsgByAHKAJINgJMCwsgByAHKAJENgJIIAcgCTYCRAsgF6chAyALBEAgB0EYaiALEAUgA2ohAwsgCCALakEUTwRAIAdBGGoQBBoLIAgEQCAHQRhqIAgQBSACaiECCyAHQRhqEAQaIAcgB0EYaiAUQhiIp0H/AXEQCCAUp0H//wNxajYCLCAHIAdBGGogFUIYiKdB/wFxEAggFadB//8DcWo2AjwgB0EYahAEGiAHIAdBGGogFkIYiKdB/wFxEAggFqdB//8DcWo2AjQgByACNgJgIAcoAlwhCiAHIAk2AmggByADNgJkAkACQAJAIAQgAiADaiILaiASSw0AIAIgCmoiEyAPSw0AIA0gBGsgC0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdBKGogACgCBBATQQAhBCAHQeAAaiEMIAdB5ABqIQoDQCAHQShqEARBAksgBCAXTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEJIAcoAkggBygCREEDdGopAgAiH0IgiKchCCAeQiCIISAgHUIgiKchAgJAIB9CEIinQf8BcSIDQQJPBEACQCAGRSADQRlJckUEQCAIIAdBKGogA0EgIAcoAixrIg0gDSADSxsiDRAFIAMgDWsiA3RqIQggB0EoahAEGiADRQ0BIAdBKGogAxAFIAhqIQgMAQsgB0EoaiADEAUgCGohCCAHQShqEAQaCyAHKQJUISEgByAINgJUIAcgITcDWAwBCwJAIANFBEAgAgRAIAcoAlQhCAwDCyAHKAJYIQgMAQsCQAJAIAdBKGpBARAFIAggAkVqaiIDQQNGBEAgBygCVEF/aiIDIANFaiEIDAELIANBAnQgB2ooAlQiCCAIRWohCCADQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAg2AlQLICCnIQMgCQRAIAdBKGogCRAFIANqIQMLIAkgC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgAmohAgsgB0EoahAEGiAHIAcoAmggAmoiCSADajYCaCAKIAwgCCAJSxsoAgAhDSAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogB0EoaiAfQhiIp0H/AXEQCCEOIAdB8ABqIARBBHRqIgsgCSANaiAIazYCDCALIAg2AgggCyADNgIEIAsgAjYCACAHIA4gH6dB//8DcWo2AkQgBEEBaiEEDAELCyAEIBdIDQEgEkFgaiEYIAdB4ABqIRogB0HkAGohGyABIQMDQCAHQShqEARBAksgBCAFTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEIIAcoAkggBygCREEDdGopAgAiH0IgiKchCSAeQiCIISAgHUIgiKchDAJAIB9CEIinQf8BcSICQQJPBEACQCAGRSACQRlJckUEQCAJIAdBKGogAkEgIAcoAixrIgogCiACSxsiChAFIAIgCmsiAnRqIQkgB0EoahAEGiACRQ0BIAdBKGogAhAFIAlqIQkMAQsgB0EoaiACEAUgCWohCSAHQShqEAQaCyAHKQJUISEgByAJNgJUIAcgITcDWAwBCwJAIAJFBEAgDARAIAcoAlQhCQwDCyAHKAJYIQkMAQsCQAJAIAdBKGpBARAFIAkgDEVqaiICQQNGBEAgBygCVEF/aiICIAJFaiEJDAELIAJBAnQgB2ooAlQiCSAJRWohCSACQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAk2AlQLICCnIRQgCARAIAdBKGogCBAFIBRqIRQLIAggC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgDGohDAsgB0EoahAEGiAHIAcoAmggDGoiGSAUajYCaCAbIBogCSAZSxsoAgAhHCAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogByAHQShqIB9CGIinQf8BcRAIIB+nQf//A3FqNgJEIAcgB0HwAGogBEEDcUEEdGoiDSkDCCIdNwPIASAHIA0pAwAiHjcDwAECQAJAAkAgBygCvAEiDiAepyICaiIWIBNLDQAgAyAHKALEASIKIAJqIgtqIBhLDQAgEiADayALQSBqTw0BCyAHIAcpA8gBNwMQIAcgBykDwAE3AwggAyASIAdBCGogB0G8AWogEyAPIBUgERAeIQsMAQsgAiADaiEIIAMgDhAHIAJBEU8EQCADQRBqIQIDQCACIA5BEGoiDhAHIAJBEGoiAiAISQ0ACwsgCCAdpyIOayECIAcgFjYCvAEgDiAIIA9rSwRAIA4gCCAVa0sEQEFsIQsMAgsgESACIA9rIgJqIhYgCmogEU0EQCAIIBYgChAPGgwCCyAIIBZBACACaxAPIQggByACIApqIgo2AsQBIAggAmshCCAPIQILIA5BEE8EQCAIIApqIQoDQCAIIAIQByACQRBqIQIgCEEQaiIIIApJDQALDAELAkAgDkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgDkECdCIKQcAeaigCAGoiAhAXIAIgCkHgHmooAgBrIQIgBygCxAEhCgwBCyAIIAIQDAsgCkEJSQ0AIAggCmohCiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAKSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAKSQ0ACwsgCxADBEAgCyEQDAQFIA0gDDYCACANIBkgHGogCWs2AgwgDSAJNgIIIA0gFDYCBCAEQQFqIQQgAyALaiEDDAILAAsLIAQgBUgNASAEIBdrIQtBACEEA0AgCyAFSARAIAcgB0HwAGogC0EDcUEEdGoiAikDCCIdNwPIASAHIAIpAwAiHjcDwAECQAJAAkAgBygCvAEiDCAepyICaiIKIBNLDQAgAyAHKALEASIJIAJqIhBqIBhLDQAgEiADayAQQSBqTw0BCyAHIAcpA8gBNwMgIAcgBykDwAE3AxggAyASIAdBGGogB0G8AWogEyAPIBUgERAeIRAMAQsgAiADaiEIIAMgDBAHIAJBEU8EQCADQRBqIQIDQCACIAxBEGoiDBAHIAJBEGoiAiAISQ0ACwsgCCAdpyIGayECIAcgCjYCvAEgBiAIIA9rSwRAIAYgCCAVa0sEQEFsIRAMAgsgESACIA9rIgJqIgwgCWogEU0EQCAIIAwgCRAPGgwCCyAIIAxBACACaxAPIQggByACIAlqIgk2AsQBIAggAmshCCAPIQILIAZBEE8EQCAIIAlqIQYDQCAIIAIQByACQRBqIQIgCEEQaiIIIAZJDQALDAELAkAgBkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgBkECdCIGQcAeaigCAGoiAhAXIAIgBkHgHmooAgBrIQIgBygCxAEhCQwBCyAIIAIQDAsgCUEJSQ0AIAggCWohBiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAGSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAGSQ0ACwsgEBADDQMgC0EBaiELIAMgEGohAwwBCwsDQCAEQQNHBEAgACAEQQJ0IgJqQazQAWogAiAHaigCVDYCACAEQQFqIQQMAQsLIAcoArwBIQgLQbp/IRAgEyAIayIAIBIgA2tLDQAgAwR/IAMgCCAAEAsgAGoFQQALIAFrIRALIAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY0AAQMyIFEAMiBg0AIANBHzYCfCADIANB/ABqIANB+ABqIAQgBCAFaiAGGyIEIAEgAmoiAiAEaxAVIgUQAw0AIAMoAnwiBkEfSw0AIAMoAngiB0EJTw0AIABBiCBqIAMgBkGAC0GADCAHEBggA0E0NgJ8IAMgA0H8AGogA0H4AGogBCAFaiIEIAIgBGsQFSIFEAMNACADKAJ8IgZBNEsNACADKAJ4IgdBCk8NACAAQZAwaiADIAZBgA1B4A4gBxAYIANBIzYCfCADIANB/ABqIANB+ABqIAQgBWoiBCACIARrEBUiBRADDQAgAygCfCIGQSNLDQAgAygCeCIHQQpPDQAgACADIAZBwBBB0BEgBxAYIAQgBWoiBEEMaiIFIAJLDQAgAiAFayEFQQAhAgNAIAJBA0cEQCAEKAAAIgZBf2ogBU8NAiAAIAJBAnRqQZzQAWogBjYCACACQQFqIQIgBEEEaiEEDAELCyAEIAFrIQgLIANBgAFqJAAgCAtGAQN/IABBCGohAyAAKAIEIQJBACEAA0AgACACdkUEQCABIAMgAEEDdGotAAJBFktqIQEgAEEBaiEADAELCyABQQggAmt0C4YDAQV/Qbh/IQcCQCADRQ0AIAItAAAiBEUEQCABQQA2AgBBAUG4fyADQQFGGw8LAn8gAkEBaiIFIARBGHRBGHUiBkF/Sg0AGiAGQX9GBEAgA0EDSA0CIAUvAABBgP4BaiEEIAJBA2oMAQsgA0ECSA0BIAItAAEgBEEIdHJBgIB+aiEEIAJBAmoLIQUgASAENgIAIAVBAWoiASACIANqIgNLDQBBbCEHIABBEGogACAFLQAAIgVBBnZBI0EJIAEgAyABa0HAEEHQEUHwEiAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBmCBqIABBCGogBUEEdkEDcUEfQQggASABIAZqIAgbIgEgAyABa0GAC0GADEGAFyAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBoDBqIABBBGogBUECdkEDcUE0QQkgASABIAZqIAgbIgEgAyABa0GADUHgDkGQGSAAKAKM4QEgACgCnOIBIAQQHyIAEAMNACAAIAFqIAJrIQcLIAcLrQMBCn8jAEGABGsiCCQAAn9BUiACQf8BSw0AGkFUIANBDEsNABogAkEBaiELIABBBGohCUGAgAQgA0F/anRBEHUhCkEAIQJBASEEQQEgA3QiB0F/aiIMIQUDQCACIAtGRQRAAkAgASACQQF0Ig1qLwEAIgZB//8DRgRAIAkgBUECdGogAjoAAiAFQX9qIQVBASEGDAELIARBACAKIAZBEHRBEHVKGyEECyAIIA1qIAY7AQAgAkEBaiECDAELCyAAIAQ7AQIgACADOwEAIAdBA3YgB0EBdmpBA2ohBkEAIQRBACECA0AgBCALRkUEQCABIARBAXRqLgEAIQpBACEAA0AgACAKTkUEQCAJIAJBAnRqIAQ6AAIDQCACIAZqIAxxIgIgBUsNAAsgAEEBaiEADAELCyAEQQFqIQQMAQsLQX8gAg0AGkEAIQIDfyACIAdGBH9BAAUgCCAJIAJBAnRqIgAtAAJBAXRqIgEgAS8BACIBQQFqOwEAIAAgAyABEBRrIgU6AAMgACABIAVB/wFxdCAHazsBACACQQFqIQIMAQsLCyEFIAhBgARqJAAgBQvjBgEIf0FsIQcCQCACQQNJDQACQAJAAkACQCABLQAAIgNBA3EiCUEBaw4DAwEAAgsgACgCiOEBDQBBYg8LIAJBBUkNAkEDIQYgASgAACEFAn8CQAJAIANBAnZBA3EiCEF+aiIEQQFNBEAgBEEBaw0BDAILIAVBDnZB/wdxIQQgBUEEdkH/B3EhAyAIRQwCCyAFQRJ2IQRBBCEGIAVBBHZB//8AcSEDQQAMAQsgBUEEdkH//w9xIgNBgIAISw0DIAEtAARBCnQgBUEWdnIhBEEFIQZBAAshBSAEIAZqIgogAksNAgJAIANBgQZJDQAgACgCnOIBRQ0AQQAhAgNAIAJBg4ABSw0BIAJBQGshAgwAAAsACwJ/IAlBA0YEQCABIAZqIQEgAEHw4gFqIQIgACgCDCEGIAUEQCACIAMgASAEIAYQXwwCCyACIAMgASAEIAYQXQwBCyAAQbjQAWohAiABIAZqIQEgAEHw4gFqIQYgAEGo0ABqIQggBQRAIAggBiADIAEgBCACEF4MAQsgCCAGIAMgASAEIAIQXAsQAw0CIAAgAzYCgOIBIABBATYCiOEBIAAgAEHw4gFqNgLw4QEgCUECRgRAIAAgAEGo0ABqNgIMCyAAIANqIgBBiOMBakIANwAAIABBgOMBakIANwAAIABB+OIBakIANwAAIABB8OIBakIANwAAIAoPCwJ/AkACQAJAIANBAnZBA3FBf2oiBEECSw0AIARBAWsOAgACAQtBASEEIANBA3YMAgtBAiEEIAEvAABBBHYMAQtBAyEEIAEQIUEEdgsiAyAEaiIFQSBqIAJLBEAgBSACSw0CIABB8OIBaiABIARqIAMQCyEBIAAgAzYCgOIBIAAgATYC8OEBIAEgA2oiAEIANwAYIABCADcAECAAQgA3AAggAEIANwAAIAUPCyAAIAM2AoDiASAAIAEgBGo2AvDhASAFDwsCfwJAAkACQCADQQJ2QQNxQX9qIgRBAksNACAEQQFrDgIAAgELQQEhByADQQN2DAILQQIhByABLwAAQQR2DAELIAJBBEkgARAhIgJBj4CAAUtyDQFBAyEHIAJBBHYLIQIgAEHw4gFqIAEgB2otAAAgAkEgahAQIQEgACACNgKA4gEgACABNgLw4QEgB0EBaiEHCyAHC0sAIABC+erQ0OfJoeThADcDICAAQgA3AxggAELP1tO+0ser2UI3AxAgAELW64Lu6v2J9eAANwMIIABCADcDACAAQShqQQBBKBAQGgviAgICfwV+IABBKGoiASAAKAJIaiECAn4gACkDACIDQiBaBEAgACkDECIEQgeJIAApAwgiBUIBiXwgACkDGCIGQgyJfCAAKQMgIgdCEol8IAUQGSAEEBkgBhAZIAcQGQwBCyAAKQMYQsXP2bLx5brqJ3wLIAN8IQMDQCABQQhqIgAgAk0EQEIAIAEpAAAQCSADhUIbiUKHla+vmLbem55/fkLj3MqV/M7y9YV/fCEDIAAhAQwBCwsCQCABQQRqIgAgAksEQCABIQAMAQsgASgAAK1Ch5Wvr5i23puef34gA4VCF4lCz9bTvtLHq9lCfkL5893xmfaZqxZ8IQMLA0AgACACSQRAIAAxAABCxc/ZsvHluuonfiADhUILiUKHla+vmLbem55/fiEDIABBAWohAAwBCwsgA0IhiCADhULP1tO+0ser2UJ+IgNCHYggA4VC+fPd8Zn2masWfiIDQiCIIAOFC+8CAgJ/BH4gACAAKQMAIAKtfDcDAAJAAkAgACgCSCIDIAJqIgRBH00EQCABRQ0BIAAgA2pBKGogASACECAgACgCSCACaiEEDAELIAEgAmohAgJ/IAMEQCAAQShqIgQgA2ogAUEgIANrECAgACAAKQMIIAQpAAAQCTcDCCAAIAApAxAgACkAMBAJNwMQIAAgACkDGCAAKQA4EAk3AxggACAAKQMgIABBQGspAAAQCTcDICAAKAJIIQMgAEEANgJIIAEgA2tBIGohAQsgAUEgaiACTQsEQCACQWBqIQMgACkDICEFIAApAxghBiAAKQMQIQcgACkDCCEIA0AgCCABKQAAEAkhCCAHIAEpAAgQCSEHIAYgASkAEBAJIQYgBSABKQAYEAkhBSABQSBqIgEgA00NAAsgACAFNwMgIAAgBjcDGCAAIAc3AxAgACAINwMICyABIAJPDQEgAEEoaiABIAIgAWsiBBAgCyAAIAQ2AkgLCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQEBogAwVBun8LCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQCxogAwVBun8LC6gCAQZ/IwBBEGsiByQAIABB2OABaikDAEKAgIAQViEIQbh/IQUCQCAEQf//B0sNACAAIAMgBBBCIgUQAyIGDQAgACgCnOIBIQkgACAHQQxqIAMgAyAFaiAGGyIKIARBACAFIAYbayIGEEAiAxADBEAgAyEFDAELIAcoAgwhBCABRQRAQbp/IQUgBEEASg0BCyAGIANrIQUgAyAKaiEDAkAgCQRAIABBADYCnOIBDAELAkACQAJAIARBBUgNACAAQdjgAWopAwBCgICACFgNAAwBCyAAQQA2ApziAQwBCyAAKAIIED8hBiAAQQA2ApziASAGQRRPDQELIAAgASACIAMgBSAEIAgQOSEFDAELIAAgASACIAMgBSAEIAgQOiEFCyAHQRBqJAAgBQtnACAAQdDgAWogASACIAAoAuzhARAuIgEQAwRAIAEPC0G4fyECAkAgAQ0AIABB7OABaigCACIBBEBBYCECIAAoApjiASABRw0BC0EAIQIgAEHw4AFqKAIARQ0AIABBkOEBahBDCyACCycBAX8QVyIERQRAQUAPCyAEIAAgASACIAMgBBBLEE8hACAEEFYgAAs/AQF/AkACQAJAIAAoAqDiAUEBaiIBQQJLDQAgAUEBaw4CAAECCyAAEDBBAA8LIABBADYCoOIBCyAAKAKU4gELvAMCB38BfiMAQRBrIgkkAEG4fyEGAkAgBCgCACIIQQVBCSAAKALs4QEiBRtJDQAgAygCACIHQQFBBSAFGyAFEC8iBRADBEAgBSEGDAELIAggBUEDakkNACAAIAcgBRBJIgYQAw0AIAEgAmohCiAAQZDhAWohCyAIIAVrIQIgBSAHaiEHIAEhBQNAIAcgAiAJECwiBhADDQEgAkF9aiICIAZJBEBBuH8hBgwCCyAJKAIAIghBAksEQEFsIQYMAgsgB0EDaiEHAn8CQAJAAkAgCEEBaw4CAgABCyAAIAUgCiAFayAHIAYQSAwCCyAFIAogBWsgByAGEEcMAQsgBSAKIAVrIActAAAgCSgCCBBGCyIIEAMEQCAIIQYMAgsgACgC8OABBEAgCyAFIAgQRQsgAiAGayECIAYgB2ohByAFIAhqIQUgCSgCBEUNAAsgACkD0OABIgxCf1IEQEFsIQYgDCAFIAFrrFINAQsgACgC8OABBEBBaiEGIAJBBEkNASALEEQhDCAHKAAAIAynRw0BIAdBBGohByACQXxqIQILIAMgBzYCACAEIAI2AgAgBSABayEGCyAJQRBqJAAgBgsuACAAECsCf0EAQQAQAw0AGiABRSACRXJFBEBBYiAAIAEgAhA9EAMNARoLQQALCzcAIAEEQCAAIAAoAsTgASABKAIEIAEoAghqRzYCnOIBCyAAECtBABADIAFFckUEQCAAIAEQWwsL0QIBB38jAEEQayIGJAAgBiAENgIIIAYgAzYCDCAFBEAgBSgCBCEKIAUoAgghCQsgASEIAkACQANAIAAoAuzhARAWIQsCQANAIAQgC0kNASADKAAAQXBxQdDUtMIBRgRAIAMgBBAiIgcQAw0EIAQgB2shBCADIAdqIQMMAQsLIAYgAzYCDCAGIAQ2AggCQCAFBEAgACAFEE5BACEHQQAQA0UNAQwFCyAAIAogCRBNIgcQAw0ECyAAIAgQUCAMQQFHQQAgACAIIAIgBkEMaiAGQQhqEEwiByIDa0EAIAMQAxtBCkdyRQRAQbh/IQcMBAsgBxADDQMgAiAHayECIAcgCGohCEEBIQwgBigCDCEDIAYoAgghBAwBCwsgBiADNgIMIAYgBDYCCEG4fyEHIAQNASAIIAFrIQcMAQsgBiADNgIMIAYgBDYCCAsgBkEQaiQAIAcLRgECfyABIAAoArjgASICRwRAIAAgAjYCxOABIAAgATYCuOABIAAoArzgASEDIAAgATYCvOABIAAgASADIAJrajYCwOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEEdCAAbiECCyAAQQh2IgEgAkEYbCIAQYwIaigCAGwgAEGICGooAgBqIgJBA3YgAmogAEGACGooAgAgAEGECGooAgAgAWxqSQs3ACAAIAMgBCAFQYAQEDMiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQMgVBuH8LC78DAQN/IwBBIGsiBSQAIAVBCGogAiADEAYiAhADRQRAIAAgAWoiB0F9aiEGIAUgBBAOIARBBGohAiAFLQACIQMDQEEAIAAgBkkgBUEIahAEGwRAIAAgAiAFQQhqIAMQAkECdGoiBC8BADsAACAFQQhqIAQtAAIQASAAIAQtAANqIgQgAiAFQQhqIAMQAkECdGoiAC8BADsAACAFQQhqIAAtAAIQASAEIAAtAANqIQAMAQUgB0F+aiEEA0AgBUEIahAEIAAgBEtyRQRAIAAgAiAFQQhqIAMQAkECdGoiBi8BADsAACAFQQhqIAYtAAIQASAAIAYtAANqIQAMAQsLA0AgACAES0UEQCAAIAIgBUEIaiADEAJBAnRqIgYvAQA7AAAgBUEIaiAGLQACEAEgACAGLQADaiEADAELCwJAIAAgB08NACAAIAIgBUEIaiADEAIiA0ECdGoiAC0AADoAACAALQADQQFGBEAgBUEIaiAALQACEAEMAQsgBSgCDEEfSw0AIAVBCGogAiADQQJ0ai0AAhABIAUoAgxBIUkNACAFQSA2AgwLIAFBbCAFQQhqEAobIQILCwsgBUEgaiQAIAILkgIBBH8jAEFAaiIJJAAgCSADQTQQCyEDAkAgBEECSA0AIAMgBEECdGooAgAhCSADQTxqIAgQIyADQQE6AD8gAyACOgA+QQAhBCADKAI8IQoDQCAEIAlGDQEgACAEQQJ0aiAKNgEAIARBAWohBAwAAAsAC0EAIQkDQCAGIAlGRQRAIAMgBSAJQQF0aiIKLQABIgtBAnRqIgwoAgAhBCADQTxqIAotAABBCHQgCGpB//8DcRAjIANBAjoAPyADIAcgC2siCiACajoAPiAEQQEgASAKa3RqIQogAygCPCELA0AgACAEQQJ0aiALNgEAIARBAWoiBCAKSQ0ACyAMIAo2AgAgCUEBaiEJDAELCyADQUBrJAALowIBCX8jAEHQAGsiCSQAIAlBEGogBUE0EAsaIAcgBmshDyAHIAFrIRADQAJAIAMgCkcEQEEBIAEgByACIApBAXRqIgYtAAEiDGsiCGsiC3QhDSAGLQAAIQ4gCUEQaiAMQQJ0aiIMKAIAIQYgCyAPTwRAIAAgBkECdGogCyAIIAUgCEE0bGogCCAQaiIIQQEgCEEBShsiCCACIAQgCEECdGooAgAiCEEBdGogAyAIayAHIA4QYyAGIA1qIQgMAgsgCUEMaiAOECMgCUEBOgAPIAkgCDoADiAGIA1qIQggCSgCDCELA0AgBiAITw0CIAAgBkECdGogCzYBACAGQQFqIQYMAAALAAsgCUHQAGokAA8LIAwgCDYCACAKQQFqIQoMAAALAAs0ACAAIAMgBCAFEDYiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQNAVBuH8LCyMAIAA/AEEQdGtB//8DakEQdkAAQX9GBEBBAA8LQQAQAEEBCzsBAX8gAgRAA0AgACABIAJBgCAgAkGAIEkbIgMQCyEAIAFBgCBqIQEgAEGAIGohACACIANrIgINAAsLCwYAIAAQAwsLqBUJAEGICAsNAQAAAAEAAAACAAAAAgBBoAgLswYBAAAAAQAAAAIAAAACAAAAJgAAAIIAAAAhBQAASgAAAGcIAAAmAAAAwAEAAIAAAABJBQAASgAAAL4IAAApAAAALAIAAIAAAABJBQAASgAAAL4IAAAvAAAAygIAAIAAAACKBQAASgAAAIQJAAA1AAAAcwMAAIAAAACdBQAASgAAAKAJAAA9AAAAgQMAAIAAAADrBQAASwAAAD4KAABEAAAAngMAAIAAAABNBgAASwAAAKoKAABLAAAAswMAAIAAAADBBgAATQAAAB8NAABNAAAAUwQAAIAAAAAjCAAAUQAAAKYPAABUAAAAmQQAAIAAAABLCQAAVwAAALESAABYAAAA2gQAAIAAAABvCQAAXQAAACMUAABUAAAARQUAAIAAAABUCgAAagAAAIwUAABqAAAArwUAAIAAAAB2CQAAfAAAAE4QAAB8AAAA0gIAAIAAAABjBwAAkQAAAJAHAACSAAAAAAAAAAEAAAABAAAABQAAAA0AAAAdAAAAPQAAAH0AAAD9AAAA/QEAAP0DAAD9BwAA/Q8AAP0fAAD9PwAA/X8AAP3/AAD9/wEA/f8DAP3/BwD9/w8A/f8fAP3/PwD9/38A/f//AP3//wH9//8D/f//B/3//w/9//8f/f//P/3//38AAAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABEAAAASAAAAEwAAABQAAAAVAAAAFgAAABcAAAAYAAAAGQAAABoAAAAbAAAAHAAAAB0AAAAeAAAAHwAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAkAAAAKAAAACwAAAAwAAAANAAAADgAAAA8AAAAQAAAAEQAAABIAAAATAAAAFAAAABUAAAAWAAAAFwAAABgAAAAZAAAAGgAAABsAAAAcAAAAHQAAAB4AAAAfAAAAIAAAACEAAAAiAAAAIwAAACUAAAAnAAAAKQAAACsAAAAvAAAAMwAAADsAAABDAAAAUwAAAGMAAACDAAAAAwEAAAMCAAADBAAAAwgAAAMQAAADIAAAA0AAAAOAAAADAAEAQeAPC1EBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAEAAAABQAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAQcQQC4sBAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABIAAAAUAAAAFgAAABgAAAAcAAAAIAAAACgAAAAwAAAAQAAAAIAAAAAAAQAAAAIAAAAEAAAACAAAABAAAAAgAAAAQAAAAIAAAAAAAQBBkBIL5gQBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAAAEAAAAEAAAACAAAAAAAAAABAAEBBgAAAAAAAAQAAAAAEAAABAAAAAAgAAAFAQAAAAAAAAUDAAAAAAAABQQAAAAAAAAFBgAAAAAAAAUHAAAAAAAABQkAAAAAAAAFCgAAAAAAAAUMAAAAAAAABg4AAAAAAAEFEAAAAAAAAQUUAAAAAAABBRYAAAAAAAIFHAAAAAAAAwUgAAAAAAAEBTAAAAAgAAYFQAAAAAAABwWAAAAAAAAIBgABAAAAAAoGAAQAAAAADAYAEAAAIAAABAAAAAAAAAAEAQAAAAAAAAUCAAAAIAAABQQAAAAAAAAFBQAAACAAAAUHAAAAAAAABQgAAAAgAAAFCgAAAAAAAAULAAAAAAAABg0AAAAgAAEFEAAAAAAAAQUSAAAAIAABBRYAAAAAAAIFGAAAACAAAwUgAAAAAAADBSgAAAAAAAYEQAAAABAABgRAAAAAIAAHBYAAAAAAAAkGAAIAAAAACwYACAAAMAAABAAAAAAQAAAEAQAAACAAAAUCAAAAIAAABQMAAAAgAAAFBQAAACAAAAUGAAAAIAAABQgAAAAgAAAFCQAAACAAAAULAAAAIAAABQwAAAAAAAAGDwAAACAAAQUSAAAAIAABBRQAAAAgAAIFGAAAACAAAgUcAAAAIAADBSgAAAAgAAQFMAAAAAAAEAYAAAEAAAAPBgCAAAAAAA4GAEAAAAAADQYAIABBgBcLhwIBAAEBBQAAAAAAAAUAAAAAAAAGBD0AAAAAAAkF/QEAAAAADwX9fwAAAAAVBf3/HwAAAAMFBQAAAAAABwR9AAAAAAAMBf0PAAAAABIF/f8DAAAAFwX9/38AAAAFBR0AAAAAAAgE/QAAAAAADgX9PwAAAAAUBf3/DwAAAAIFAQAAABAABwR9AAAAAAALBf0HAAAAABEF/f8BAAAAFgX9/z8AAAAEBQ0AAAAQAAgE/QAAAAAADQX9HwAAAAATBf3/BwAAAAEFAQAAABAABgQ9AAAAAAAKBf0DAAAAABAF/f8AAAAAHAX9//8PAAAbBf3//wcAABoF/f//AwAAGQX9//8BAAAYBf3//wBBkBkLhgQBAAEBBgAAAAAAAAYDAAAAAAAABAQAAAAgAAAFBQAAAAAAAAUGAAAAAAAABQgAAAAAAAAFCQAAAAAAAAULAAAAAAAABg0AAAAAAAAGEAAAAAAAAAYTAAAAAAAABhYAAAAAAAAGGQAAAAAAAAYcAAAAAAAABh8AAAAAAAAGIgAAAAAAAQYlAAAAAAABBikAAAAAAAIGLwAAAAAAAwY7AAAAAAAEBlMAAAAAAAcGgwAAAAAACQYDAgAAEAAABAQAAAAAAAAEBQAAACAAAAUGAAAAAAAABQcAAAAgAAAFCQAAAAAAAAUKAAAAAAAABgwAAAAAAAAGDwAAAAAAAAYSAAAAAAAABhUAAAAAAAAGGAAAAAAAAAYbAAAAAAAABh4AAAAAAAAGIQAAAAAAAQYjAAAAAAABBicAAAAAAAIGKwAAAAAAAwYzAAAAAAAEBkMAAAAAAAUGYwAAAAAACAYDAQAAIAAABAQAAAAwAAAEBAAAABAAAAQFAAAAIAAABQcAAAAgAAAFCAAAACAAAAUKAAAAIAAABQsAAAAAAAAGDgAAAAAAAAYRAAAAAAAABhQAAAAAAAAGFwAAAAAAAAYaAAAAAAAABh0AAAAAAAAGIAAAAAAAEAYDAAEAAAAPBgOAAAAAAA4GA0AAAAAADQYDIAAAAAAMBgMQAAAAAAsGAwgAAAAACgYDBABBpB0L2QEBAAAAAwAAAAcAAAAPAAAAHwAAAD8AAAB/AAAA/wAAAP8BAAD/AwAA/wcAAP8PAAD/HwAA/z8AAP9/AAD//wAA//8BAP//AwD//wcA//8PAP//HwD//z8A//9/AP///wD///8B////A////wf///8P////H////z////9/AAAAAAEAAAACAAAABAAAAAAAAAACAAAABAAAAAgAAAAAAAAAAQAAAAIAAAABAAAABAAAAAQAAAAEAAAABAAAAAgAAAAIAAAACAAAAAcAAAAIAAAACQAAAAoAAAALAEGgIAsDwBBQ"});var qp,Xp,nw,Jp=ut(()=>{gt();qp="display-p3",Xp="display-p3-linear",nw={...xt.spaces[ht],outputColorSpaceConfig:{drawingBufferColorSpace:ht,toneMappingMode:"extended"}}});async function pM(i){let{vkFormat:e}=i;if(Qh[e]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat: "+e);ir[e]===void 0&&console.warn('THREE.KTX2Loader: Missing ".type" for vkFormat: '+e);let t;i.supercompressionScheme===2&&(Gh||(Gh=new Promise(async a=>{let o=new dl;await o.init(),a(o)})),t=await Gh);let n=[];for(let a=0;a<i.levels.length;a++){let o=Math.max(1,i.pixelWidth>>a),c=Math.max(1,i.pixelHeight>>a),l=i.pixelDepth?Math.max(1,i.pixelDepth>>a):0,h=i.levels[a],d;if(i.supercompressionScheme===0)d=h.levelData;else if(i.supercompressionScheme===2)d=t.decode(h.levelData,h.uncompressedByteLength);else throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");let u;ir[e]===Yt?u=new Float32Array(d.buffer,d.byteOffset,d.byteLength/Float32Array.BYTES_PER_ELEMENT):ir[e]===Ct||ir[e]===Gi?u=new Uint16Array(d.buffer,d.byteOffset,d.byteLength/Uint16Array.BYTES_PER_ELEMENT):ir[e]===jr||ir[e]===Zr?u=new Uint32Array(d.buffer,d.byteOffset,d.byteLength/Uint32Array.BYTES_PER_ELEMENT):u=d,n.push({data:u,width:o,height:c,depth:l})}let s=i.levelCount===0||n.length>1,r;if(dM.has(Qh[e]))r=i.pixelDepth===0?new Bn(n[0].data,i.pixelWidth,i.pixelHeight):new ns(n[0].data,i.pixelWidth,i.pixelHeight,i.pixelDepth),r.mipmaps=n,r.minFilter=s?Jr:Pt,r.magFilter=Pt,r.generateMipmaps=i.levelCount===0,r.normalized=fM.has(e);else{if(i.pixelDepth>0)throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");if(i.faceCount===6){let a=[];for(let o=0;o<6;o++){let c=[];for(let l of n){let h=l.data.length/6;c.push({data:l.data.subarray(o*h,(o+1)*h),width:l.width,height:l.height})}a.push({mipmaps:c,width:i.pixelWidth,height:i.pixelHeight})}r=new Or(a)}else r=new rs(n,i.pixelWidth,i.pixelHeight);r.minFilter=s?Ht:vt,r.magFilter=vt}return r.type=ir[e],r.format=Qh[e],r.colorSpace=kA(i),r.needsUpdate=!0,r}function kA(i){let e=i.dataFormatDescriptor[0];return e.colorPrimaries===1?e.transferFunction===2?ht:an:e.colorPrimaries===10?e.transferFunction===2?qp:Xp:e.colorPrimaries===0?Cn:(console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${e.colorPrimaries}"`),Cn)}var uM,hM,Oh,kh,Gh,Ki,dM,fM,Qh,ir,GA=ut(()=>{gt();Qp();Hp();Kp();Jp();uM=new URL("../libs/basis/basis_transcoder.wasm",import.meta.url).toString(),hM=new URL("../libs/basis/basis_transcoder.js",import.meta.url).toString(),Oh=new WeakMap,kh=0,Ki=class i extends Wn{constructor(e){super(e),this.isKTX2Loader=!0,this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new hl,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(e){return this.transcoderPath=e,this}setWorkerLimit(e){return this.workerPool.setWorkerLimit(e),this}async detectSupportAsync(e){return console.warn('KTX2Loader: "detectSupportAsync()" has been deprecated. Use "detectSupport()" and "await renderer.init();" when creating the renderer.'),await e.init(),this.detectSupport(e)}detectSupport(e){return e.isWebGPURenderer===!0?this.workerConfig={astcSupported:e.hasFeature("texture-compression-astc"),astcHDRSupported:!1,etc1Supported:e.hasFeature("texture-compression-etc1"),etc2Supported:e.hasFeature("texture-compression-etc2"),dxtSupported:e.hasFeature("texture-compression-s3tc"),bptcSupported:e.hasFeature("texture-compression-bc"),pvrtcSupported:e.hasFeature("texture-compression-pvrtc")}:(this.workerConfig={astcSupported:e.extensions.has("WEBGL_compressed_texture_astc"),astcHDRSupported:e.extensions.has("WEBGL_compressed_texture_astc")&&e.extensions.get("WEBGL_compressed_texture_astc").getSupportedProfiles().includes("hdr"),etc1Supported:e.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:e.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:e.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:e.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:e.extensions.has("WEBGL_compressed_texture_pvrtc")||e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},typeof navigator<"u"&&typeof navigator.platform<"u"&&typeof navigator.userAgent<"u"&&navigator.platform.indexOf("Linux")>=0&&navigator.userAgent.indexOf("Android")<0&&this.workerConfig.astcSupported&&this.workerConfig.etc2Supported&&this.workerConfig.bptcSupported&&this.workerConfig.dxtSupported&&(this.workerConfig.astcSupported=!1,this.workerConfig.etc1Supported=!1,this.workerConfig.etc2Supported=!1)),this}init(){if(!this.transcoderPending){let e=new ri(this.manager);e.setPriority(this.priority),e.setCache(this.cache),e.setWithCredentials(this.withCredentials);let t=new ri(this.manager);t.setPriority(this.priority),t.setCache(this.cache),t.setWithCredentials(this.withCredentials),t.setResponseType("arraybuffer");let n,s;this.transcoderPath===""?(n=e.loadAsync(hM),s=t.loadAsync(uM)):(e.setPath(this.transcoderPath),n=e.loadAsync("basis_transcoder.js"),t.setPath(this.transcoderPath),s=t.loadAsync("basis_transcoder.wasm")),this.transcoderPending=Promise.all([n,s]).then(([r,a])=>{let o=i.BasisWorker.toString(),c=["/* constants */","let _EngineFormat = "+JSON.stringify(i.EngineFormat),"let _EngineType = "+JSON.stringify(i.EngineType),"let _TranscoderFormat = "+JSON.stringify(i.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(i.BasisFormat),"/* basis_transcoder.js */",r,"/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([c])),this.transcoderBinary=a,this.workerPool.setWorkerCreator(()=>{let l=new Worker(this.workerSourceURL),h=this.transcoderBinary.slice(0);return l.postMessage({type:"init",config:this.workerConfig,transcoderBinary:h},[h]),l})}),kh>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),kh++}return this.transcoderPending}load(e,t,n,s){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");let r=new ri(this.manager);r.setPriority(this.priority),r.setCache(this.cache),r.setPath(this.path),r.setCrossOrigin(this.crossOrigin),r.setWithCredentials(this.withCredentials),r.setRequestHeader(this.requestHeader),r.setResponseType("arraybuffer"),r.load(e,a=>{this.parse(a,t,s)},n,s)}parse(e,t,n){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");if(Oh.has(e))return Oh.get(e).promise.then(t).catch(n);this._createTexture(e).then(s=>t?t(s):null).catch(n)}_createTextureFrom(e,t){let{type:n,error:s,data:{faces:r,width:a,height:o,format:c,type:l,dfdFlags:h}}=e;if(n==="error")return Promise.reject(s);let d;if(t.faceCount===6)d=new Or(r,c,l);else{let u=r[0].mipmaps;d=t.layerCount>1?new Xa(u,a,o,t.layerCount,c,l):new rs(u,a,o,c,l)}return d.minFilter=r[0].mipmaps.length===1?vt:Ht,d.magFilter=vt,d.generateMipmaps=!1,d.needsUpdate=!0,d.colorSpace=kA(t),d.premultiplyAlpha=!!(h&1),d}async _createTexture(e,t={}){let n=Vp(new Uint8Array(e)),s=n.vkFormat===1000066e3&&n.dataFormatDescriptor[0].colorModel===167;if(!(n.vkFormat===0||s&&!this.workerConfig.astcHDRSupported))return pM(n);let a=t,o=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffer:e,taskConfig:a},[e])).then(c=>this._createTextureFrom(c.data,n));return Oh.set(e,{promise:o}),o}dispose(){this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),kh--}};Ki.BasisFormat={ETC1S:0,UASTC:1,UASTC_HDR:2};Ki.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16,BC6H:22,RGB_HALF:24,RGBA_HALF:25};Ki.EngineFormat={RGBAFormat:jt,RGBA_ASTC_4x4_Format:Hi,RGB_BPTC_UNSIGNED_Format:sa,RGBA_BPTC_Format:gs,RGBA_ETC2_EAC_Format:Js,RGBA_PVRTC_4BPPV1_Format:As,RGBA_S3TC_DXT5_Format:Vi,RGB_ETC1_Format:ea,RGB_ETC2_Format:Xs,RGB_PVRTC_4BPPV1_Format:$r,RGBA_S3TC_DXT1_Format:zi};Ki.EngineType={UnsignedByteType:ot,HalfFloatType:Ct,FloatType:Yt};Ki.BasisWorker=function(){let i,e,t,n=_EngineFormat,s=_EngineType,r=_TranscoderFormat,a=_BasisFormat;self.addEventListener("message",function(p){let g=p.data;switch(g.type){case"init":i=g.config,o(g.transcoderBinary);break;case"transcode":e.then(()=>{try{let{faces:m,buffers:A,width:x,height:v,hasAlpha:_,format:M,type:E,dfdFlags:b}=c(g.buffer);self.postMessage({type:"transcode",id:g.id,data:{faces:m,width:x,height:v,hasAlpha:_,format:M,type:E,dfdFlags:b}},A)}catch(m){console.error(m),self.postMessage({type:"error",id:g.id,error:m.message})}});break}});function o(p){e=new Promise(g=>{t={wasmBinary:p,onRuntimeInitialized:g},BASIS(t)}).then(()=>{t.initializeBasis(),t.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")})}function c(p){let g=new t.KTX2File(new Uint8Array(p));function m(){g.close(),g.delete()}if(!g.isValid())throw m(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");let A;if(g.isUASTC())A=a.UASTC;else if(g.isETC1S())A=a.ETC1S;else if(g.isHDR())A=a.UASTC_HDR;else throw new Error("THREE.KTX2Loader: Unknown Basis encoding");let x=g.getWidth(),v=g.getHeight(),_=g.getLayers()||1,M=g.getLevels(),E=g.getFaces(),b=g.getHasAlpha(),y=g.getDFDFlags(),{transcoderFormat:I,engineFormat:S,engineType:C}=d(A,x,v,b);if(!x||!v||!M)throw m(),new Error("THREE.KTX2Loader:	Invalid texture");if(!g.startTranscoding())throw m(),new Error("THREE.KTX2Loader: .startTranscoding failed");let w=[],B=[];for(let R=0;R<E;R++){let U=[];for(let P=0;P<M;P++){let F=[],H,O;for(let G=0;G<_;G++){let V=g.getImageLevelInfo(P,G,R);R===0&&P===0&&G===0&&(V.origWidth%4!==0||V.origHeight%4!==0)&&console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."),M>1?(H=V.origWidth,O=V.origHeight):(H=V.width,O=V.height);let X=new Uint8Array(g.getImageTranscodedSizeInBytes(P,G,0,I)),z=g.transcodeImage(X,P,G,R,I,0,-1,-1);if(C===s.HalfFloatType&&(X=new Uint16Array(X.buffer,X.byteOffset,X.byteLength/Uint16Array.BYTES_PER_ELEMENT)),!z)throw m(),new Error("THREE.KTX2Loader: .transcodeImage failed.");F.push(X)}let L=f(F);U.push({data:L,width:H,height:O}),B.push(L.buffer)}w.push({mipmaps:U,width:x,height:v,format:S,type:C})}return m(),{faces:w,buffers:B,width:x,height:v,hasAlpha:b,dfdFlags:y,format:S,type:C}}let l=[{if:"astcSupported",basisFormat:[a.UASTC],transcoderFormat:[r.ASTC_4x4,r.ASTC_4x4],engineFormat:[n.RGBA_ASTC_4x4_Format,n.RGBA_ASTC_4x4_Format],engineType:[s.UnsignedByteType],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.BC7_M5,r.BC7_M5],engineFormat:[n.RGBA_BPTC_Format,n.RGBA_BPTC_Format],engineType:[s.UnsignedByteType],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.BC1,r.BC3],engineFormat:[n.RGBA_S3TC_DXT1_Format,n.RGBA_S3TC_DXT5_Format],engineType:[s.UnsignedByteType],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.ETC1,r.ETC2],engineFormat:[n.RGB_ETC2_Format,n.RGBA_ETC2_EAC_Format],engineType:[s.UnsignedByteType],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.ETC1],engineFormat:[n.RGB_ETC1_Format],engineType:[s.UnsignedByteType],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.PVRTC1_4_RGB,r.PVRTC1_4_RGBA],engineFormat:[n.RGB_PVRTC_4BPPV1_Format,n.RGBA_PVRTC_4BPPV1_Format],engineType:[s.UnsignedByteType],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0},{if:"bptcSupported",basisFormat:[a.UASTC_HDR],transcoderFormat:[r.BC6H],engineFormat:[n.RGB_BPTC_UNSIGNED_Format],engineType:[s.HalfFloatType],priorityHDR:1,needsPowerOfTwo:!1},{basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.RGBA32,r.RGBA32],engineFormat:[n.RGBAFormat,n.RGBAFormat],engineType:[s.UnsignedByteType,s.UnsignedByteType],priorityETC1S:100,priorityUASTC:100,needsPowerOfTwo:!1},{basisFormat:[a.UASTC_HDR],transcoderFormat:[r.RGBA_HALF],engineFormat:[n.RGBAFormat],engineType:[s.HalfFloatType],priorityHDR:100,needsPowerOfTwo:!1}],h={[a.ETC1S]:l.filter(p=>p.basisFormat.includes(a.ETC1S)).sort((p,g)=>p.priorityETC1S-g.priorityETC1S),[a.UASTC]:l.filter(p=>p.basisFormat.includes(a.UASTC)).sort((p,g)=>p.priorityUASTC-g.priorityUASTC),[a.UASTC_HDR]:l.filter(p=>p.basisFormat.includes(a.UASTC_HDR)).sort((p,g)=>p.priorityHDR-g.priorityHDR)};function d(p,g,m,A){let x=h[p];for(let v=0;v<x.length;v++){let _=x[v];if(_.if&&!i[_.if]||!_.basisFormat.includes(p)||A&&_.transcoderFormat.length<2||_.needsPowerOfTwo&&!(u(g)&&u(m)))continue;let M=_.transcoderFormat[A?1:0],E=_.engineFormat[A?1:0],b=_.engineType[0];return{transcoderFormat:M,engineFormat:E,engineType:b}}throw new Error("THREE.KTX2Loader: Failed to identify transcoding target.")}function u(p){return p<=2?!0:(p&p-1)===0&&p!==0}function f(p){if(p.length===1)return p[0];let g=0;for(let x=0;x<p.length;x++){let v=p[x];g+=v.byteLength}let m=new Uint8Array(g),A=0;for(let x=0;x<p.length;x++){let v=p[x];m.set(v,A),A+=v.byteLength}return m}};dM=new Set([jt,Ks,Nn,jn]),fM=new Set([91]),Qh={109:jt,103:Nn,100:jn,97:jt,83:Nn,76:jn,91:jt,43:jt,37:jt,22:Nn,16:Nn,15:jn,9:jn,123:Ks,122:Ks,152:Js,148:Xs,153:ta,154:na,155:Ys,156:ia,1000066e3:Hi,158:Hi,157:Hi,1000066004:ms,166:ms,165:ms,134:zi,133:zi,132:ps,131:ps,138:Vi,137:Vi,140:aa,139:ra,142:oa,141:js,146:gs,145:gs,1000054005:As,1000054001:As,1000054004:qs,1000054e3:qs},ir={109:Yt,103:Yt,100:Yt,97:Ct,83:Ct,76:Ct,91:Gi,43:ot,37:ot,22:ot,16:ot,15:ot,9:ot,123:jr,122:Zr,152:ot,148:ot,153:ot,154:ot,155:ot,156:ot,1000066e3:Ct,158:ot,157:ot,1000066004:Ct,166:ot,165:ot,134:ot,133:ot,132:ot,131:ot,138:ot,137:ot,140:ot,139:ot,142:ot,141:ot,146:ot,145:ot,1000054005:ot,1000054001:ot,1000054004:ot,1000054e3:ot}});var fl,QA=ut(()=>{gt();fl=class extends co{constructor(e){super(e),this.type=Ct}parse(e){let a=function(y,I){switch(y){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(I||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(I||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(I||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(I||""))}},d=function(y,I,S){I=I||1024;let w=y.pos,B=-1,R=0,U="",P=String.fromCharCode.apply(null,new Uint16Array(y.subarray(w,w+128)));for(;0>(B=P.indexOf(`
`))&&R<I&&w<y.byteLength;)U+=P,R+=P.length,w+=128,P=String.fromCharCode.apply(null,new Uint16Array(y.subarray(w,w+128)));return-1<B?(S!==!1&&(y.pos+=R+B+1),U+P.slice(0,B)):!1},u=function(y){let I=/^#\?(\S+)/,S=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,w=/^\s*FORMAT=(\S+)\s*$/,B=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,R={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},U,P;for((y.pos>=y.byteLength||!(U=d(y)))&&a(1,"no header found"),(P=U.match(I))||a(3,"bad initial token"),R.valid|=1,R.programtype=P[1],R.string+=U+`
`;U=d(y),U!==!1;){if(R.string+=U+`
`,U.charAt(0)==="#"){R.comments+=U+`
`;continue}if((P=U.match(S))&&(R.gamma=parseFloat(P[1])),(P=U.match(C))&&(R.exposure=parseFloat(P[1])),(P=U.match(w))&&(R.valid|=2,R.format=P[1]),(P=U.match(B))&&(R.valid|=4,R.height=parseInt(P[1],10),R.width=parseInt(P[2],10)),R.valid&2&&R.valid&4)break}return R.valid&2||a(3,"missing format specifier"),R.valid&4||a(3,"missing image size specifier"),R},f=function(y,I,S){let C=I;if(C<8||C>32767||y[0]!==2||y[1]!==2||y[2]&128)return new Uint8Array(y);C!==(y[2]<<8|y[3])&&a(3,"wrong scanline width");let w=new Uint8Array(4*I*S);w.length||a(4,"unable to allocate buffer space");let B=0,R=0,U=4*C,P=new Uint8Array(4),F=new Uint8Array(U),H=S;for(;H>0&&R<y.byteLength;){R+4>y.byteLength&&a(1),P[0]=y[R++],P[1]=y[R++],P[2]=y[R++],P[3]=y[R++],(P[0]!=2||P[1]!=2||(P[2]<<8|P[3])!=C)&&a(3,"bad rgbe scanline format");let O=0,L;for(;O<U&&R<y.byteLength;){L=y[R++];let V=L>128;if(V&&(L-=128),(L===0||O+L>U)&&a(3,"bad scanline data"),V){let X=y[R++];for(let z=0;z<L;z++)F[O++]=X}else F.set(y.subarray(R,R+L),O),O+=L,R+=L}let G=C;for(let V=0;V<G;V++){let X=0;w[B]=F[V+X],X+=C,w[B+1]=F[V+X],X+=C,w[B+2]=F[V+X],X+=C,w[B+3]=F[V+X],B+=4}H--}return w},p=function(y,I,S,C){let w=y[I+3],B=Math.pow(2,w-128)/255;S[C+0]=y[I+0]*B,S[C+1]=y[I+1]*B,S[C+2]=y[I+2]*B,S[C+3]=1},g=function(y,I,S,C){let w=y[I+3],B=Math.pow(2,w-128)/255;S[C+0]=Ai.toHalfFloat(Math.min(y[I+0]*B,65504)),S[C+1]=Ai.toHalfFloat(Math.min(y[I+1]*B,65504)),S[C+2]=Ai.toHalfFloat(Math.min(y[I+2]*B,65504)),S[C+3]=Ai.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;let A=u(m),x=A.width,v=A.height,_=f(m.subarray(m.pos),x,v),M,E,b;switch(this.type){case Yt:b=_.length/4;let y=new Float32Array(b*4);for(let S=0;S<b;S++)p(_,S*4,y,S*4);M=y,E=Yt;break;case Ct:b=_.length/4;let I=new Uint16Array(b*4);for(let S=0;S<b;S++)g(_,S*4,I,S*4);M=I,E=Ct;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:x,height:v,data:M,header:A.string,gamma:A.gamma,exposure:A.exposure,type:E,colorSpace:an,minFilter:vt,magFilter:vt,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}}});var zA,VA=ut(()=>{zA=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(A){r=A.instance,r.exports.__wasm_call_ctors()});function o(A){for(var x=new Uint8Array(A.length),v=0;v<A.length;++v){var _=A.charCodeAt(v);x[v]=_>96?_-97:_>64?_-39:_+4}for(var M=0,v=0;v<A.length;++v)x[M++]=x[v]<60?n[x[v]]:(x[v]-60)*64+x[++v];return x.buffer.slice(0,M)}function c(A,x,v,_,M,E,b){var y=A.exports.sbrk,I=_+3&-4,S=y(I*M),C=y(E.length),w=new Uint8Array(A.exports.memory.buffer);w.set(E,C);var B=x(S,_,M,C,E.length);if(B==0&&b&&b(S,I,M),v.set(w.subarray(S,S+_*M)),y(S-y(0)),B!=0)throw new Error("Malformed buffer data: "+B)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},d=[],u=0;function f(A){var x={object:new Worker(A),pending:0,requests:{}};return x.object.onmessage=function(v){var _=v.data;x.pending-=_.count,x.requests[_.id][_.action](_.value),delete x.requests[_.id]},x}function p(A){for(var x="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+c.toString()+m.toString(),v=new Blob([x],{type:"text/javascript"}),_=URL.createObjectURL(v),M=d.length;M<A;++M)d[M]=f(_);for(var M=A;M<d.length;++M)d[M].object.postMessage({});d.length=A,URL.revokeObjectURL(_)}function g(A,x,v,_,M){for(var E=d[0],b=1;b<d.length;++b)d[b].pending<E.pending&&(E=d[b]);return new Promise(function(y,I){var S=new Uint8Array(v),C=++u;E.pending+=A,E.requests[C]={resolve:y,reject:I},E.object.postMessage({id:C,count:A,size:x,source:S,mode:_,filter:M},[S.buffer])})}function m(A){var x=A.data;self.ready.then(function(v){if(!x.id)return self.close();try{var _=new Uint8Array(x.count*x.size);c(v,v.exports[x.mode],_,x.count,x.size,x.source,v.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:_},[_.buffer])}catch(M){self.postMessage({id:x.id,count:x.count,action:"reject",value:M})}})}return{ready:a,supported:!0,useWorkers:function(A){p(A)},decodeVertexBuffer:function(A,x,v,_,M){c(r,r.exports.meshopt_decodeVertexBuffer,A,x,v,_,r.exports[l[M]])},decodeIndexBuffer:function(A,x,v,_){c(r,r.exports.meshopt_decodeIndexBuffer,A,x,v,_)},decodeIndexSequence:function(A,x,v,_){c(r,r.exports.meshopt_decodeIndexSequence,A,x,v,_)},decodeGltfBuffer:function(A,x,v,_,M,E){c(r,r.exports[h[M]],A,x,v,_,r.exports[l[E]])},decodeGltfBufferAsync:function(A,x,v,_,M){return d.length>0?g(A,x,v,h[_],l[M]):a.then(function(){var E=new Uint8Array(A*x);return c(r,r.exports[h[_]],E,A,x,v,r.exports[l[M]]),E})}}})()});async function HA(i,e,t,n,s){let r="assets/",a=new fn,o=async O=>{let L=await a.loadAsync(r+O);return L.colorSpace=Cn,L.generateMipmaps=!1,L.minFilter=vt,L},c=await fetch(r+"surface-light.json").then(O=>O.json()),l=await Promise.all([o(t.floor.states.day.url),o(t.floor.states.night.url),o(c.day.url),o(c.night.url)]),[h,d,u]=t.dims,f=new Uint16Array(h*6*d*u*4),p=new ns(f,h*6,d,u);p.format=jt,p.type=Ct,p.minFilter=p.magFilter=vt,p.unpackAlignment=1;let g={uIrr:{value:p},uGrid:{value:new T(...t.dims)},uOrigin:{value:new T(...t.origin)},uStep:{value:new T(...t.step)},uNight:{value:0},uIndoor:{value:1},uDayFloor:{value:l[0]},uNightFloor:{value:l[1]},uWallsDay:{value:l[2]},uWallsNight:{value:l[3]},uWallRange:{value:new ge(c.day.range,c.night.range)},uFloorRange:{value:new ge(t.floor.states.day.range,t.floor.states.night.range)}};g.uRoomReflection={value:null},g.uRoomOrigin={value:new T},g.uRoomLow={value:new T},g.uRoomHigh={value:new T},g.uHasReflection={value:0};let m=t.practicals.slice(0,7).map(O=>new mt(O.position[0],O.position[2],-O.position[1],O.powerWatts*.035));m.push(new mt(6.5,2.58,-3.1,5.2)),g.uLamps={value:m};let A=new Float32Array(8).fill(-1);g.uPower={value:A},g.uSwitched={value:0};let x=()=>{};function v(O,L){let G=0,V=1/0;for(let X=0;X<m.length;X++){let z=m[X],K=(O.x-z.x)**2+(O.y-z.y)**2+(O.z-z.z)**2;K<V&&(V=K,G=X)}A[G]=L==null?-1:+!!L,g.uSwitched.value=Number(A.some(X=>X>=0)),x(m[G],L)}let _=6,M=[],E=Array.from({length:_},()=>new mt),b=Array.from({length:_},()=>new We(0)),y=Array.from({length:_},()=>new T),I=Array.from({length:_},()=>new T);Object.assign(g,{uLocalSources:{value:E},uLocalColors:{value:b},uLocalDirections:{value:y},uLocalLimits:{value:I}});function S(O){let L=M.length;L>=E.length||(M.push(O),O.visible=!1,b[L].copy(O.color),E[L].set(O.position.x,O.position.y,O.position.z,O.intensity),I[L].set(O.distance**2,O.isSpotLight?Math.cos(O.angle):-2,O.isSpotLight?Math.cos(O.angle*(1-O.penumbra)):-1),O.isSpotLight&&y[L].subVectors(O.target.position,O.position).normalize())}function C(){for(let O=0;O<M.length;O++)E[O].w=M[O].intensity}let w=async(O,L,G)=>{let V;try{V=await s.loadAsync(r+"surfaces/"+O)}catch{V=await a.loadAsync(r+"surfaces/"+L)}return V.colorSpace=G?ht:Cn,V.wrapS=V.wrapT=rn,V.anisotropy=Math.min(i.capabilities.getMaxAnisotropy(),8),V},B={};await Promise.all(Object.entries(n).map(async([O,L])=>{B[O]=await Promise.all([w(L.albedo,L.fallback,!0),w(L.normal,L.normalFallback,!1),L.roughness?w(L.roughness,L.roughnessFallback,!1):null])})),await Promise.all([0,1,2,3].map(async O=>{let L=await a.loadAsync(r+"print-"+O+".jpg");L.colorSpace=ht,L.anisotropy=8,B["print-"+O]=[L,null]}));let R=-2;function U(O){if(!(Math.abs(O-R)<.001)){R=O,g.uNight.value=O;for(let L=0;L<u;L++)for(let G=0;G<d;G++)for(let V=0;V<h;V++){let X=V+h*(G+d*L),z=t.origin[0]+V*t.step[0],K=t.origin[1]+G*t.step[1],j=z>-.79&&z<2.28&&K>7&&K<11.2?.22:z<-3.15&&z>-8.98&&K>.05&&K<5.4?.095:0;for(let ce=0;ce<6;ce++){let ae=4*(V+ce*h+6*h*(G+L*d));for(let ee=0;ee<3;ee++){let me=t.states.day.rgb[ce][3*X+ee],fe=t.states.night.rgb[ce][3*X+ee];f[ae+ee]=Ai.toHalfFloat(me*(1-O)+fe*(O+j*(1-O)))}f[ae+3]=15360}}p.needsUpdate=!0}}U(0);function P(O,{finish:L=!1,floor:G=!1,bulb:V=!1,glass:X=!1,plainMap:z=!1,fixturePower:K=null}={}){return O.onBeforeCompile=j=>{Object.assign(j.uniforms,g),j.uniforms.uFixturePower=K??{value:-1},j.vertexShader=j.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vHousePos;
`+(L?"attribute vec4 _finish; varying vec4 vFinish; attribute vec3 _light; varying vec3 vAtlas;":"")),j.vertexShader=j.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
vHousePos=(modelMatrix*vec4(transformed,1.)).xyz;`+(L?"vFinish=_finish;vAtlas=_light;":""));let ce=`
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
        }`;j.fragmentShader=j.fragmentShader.replace("#include <common>",`#include <common>
`+ce+(L?`
varying vec4 vFinish; varying vec3 vAtlas;`:"")),L&&(j.fragmentShader=j.fragmentShader.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor=vFinish.x;
#ifdef USE_ROUGHNESSMAP
 roughnessFactor+=(texelRoughness.g-.5)*.35;
#endif
 roughnessFactor=clamp(roughnessFactor,.065,1.);`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
metalnessFactor=vFinish.y;`)),O.name==="gravel"&&(j.fragmentShader=j.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
if(length(vHousePos.xz)>25.)discard;`)),O.name==="plaster"&&(j.fragmentShader=j.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        vec3 paint=mix(diffuseColor.rgb,vec3(.91,.896,.85),.60);
        float wallPaint=smoothstep(.24,1.,vHousePos.y)*(1.-smoothstep(9.12,9.3,abs(vHousePos.x)));
        diffuseColor.rgb=mix(diffuseColor.rgb,paint,.84*wallPaint);`)),!z&&O.map&&(j.fragmentShader=j.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.rgb*=1.23;`)),O.name==="shade"&&(j.fragmentShader=j.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        float middle=vHousePos.z < -7. ? (vHousePos.x<-.9 ? (vHousePos.x< -4. ? .91 : 1.03) : 1.42) : 1.56;
        float transmitted=exp(-pow((vHousePos.y-middle)/.23,2.));
        float switched=uFixturePower<0.?uNight:uFixturePower*mix(.18,1.,uNight);
        totalEmissiveRadiance+=diffuseColor.rgb*vec3(1.,.73,.41)*((uFixturePower==0.?0.:.021)+switched*(.35+1.42*transmitted));
      `)),V&&(j.fragmentShader=j.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance+=diffuseColor.rgb*vFinish.z*(uFixturePower<0.?mix(.48,10.,uNight):uFixturePower*mix(1.4,10.,uNight));`)),O.normalMap&&(j.fragmentShader=j.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
vec3 nx=dFdx(normal), ny=dFdy(normal); roughnessFactor=sqrt(clamp(roughnessFactor*roughnessFactor+.20*min(.16,max(dot(nx,nx),dot(ny,ny))),.004,1.));`));let ae=G?`
        float floorMask=smoothstep(.92,.995,nWorld.y)*(1.-smoothstep(.08,.16,abs(vHousePos.y)));
        if(vHousePos.x>-2.51 && vHousePos.x<2.21 && vHousePos.z<-.89 && vHousePos.z>-4.31)
          floorMask=smoothstep(.94,.995,nWorld.y)*(1.-smoothstep(.05,.14,abs(vHousePos.y+.30)));
        vec2 uvF=(vec2(vHousePos.x,-vHousePos.z)+vec2(13.,14.))/vec2(31.,25.2);
        if(floorMask>.001 && all(greaterThan(uvF,vec2(0.))) && all(lessThan(uvF,vec2(1.)))){
          vec4 d=texture2D(uDayFloor,uvF),n=texture2D(uNightFloor,uvF);
          bounce=mix(bounce,(d.rgb*d.a*uFloorRange.x*(1.-uNight)+n.rgb*n.a*uFloorRange.y*(uNight+dayTask*(1.-uNight))),floorMask);
        }`:"";O.name==="chips"&&(j.fragmentShader=j.fragmentShader.replace("#include <lights_physical_fragment>",`roughnessFactor=clamp(roughnessFactor*.63,.21,.48);
#include <lights_physical_fragment>`)),j.fragmentShader=j.fragmentShader.replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
        vec3 nWorld=inverseTransformDirection(normal,viewMatrix);
        vec2 edge=max(vec2(abs(vHousePos.x)-9.05,abs(-vHousePos.z-5.50)-5.6),vec2(0.));
        float inRoom=1.-smoothstep(.0,1.45,length(edge));
        float roof=2.82+abs(vHousePos.x)*.112;
        inRoom*=1.-smoothstep(roof-.11,roof+.1,vHousePos.y);
        float dayTask=(vHousePos.z< -7.&&vHousePos.z> -11.2&&vHousePos.x>-.79&&vHousePos.x<2.28)?.22:
          (vHousePos.x< -3.15&&vHousePos.x> -8.98&&vHousePos.z<-.05&&vHousePos.z> -5.4)?.095:0.;
        vec3 bounce=houseBounce(vHousePos${O.name.startsWith("print-")?"+nWorld*.18":""},nWorld);
        ${ae}
        float bakeRegion=1.-smoothstep(.0,3.,length(max(vec2(abs(vHousePos.x)-10.4,abs(-vHousePos.z-5.3)-7.1),vec2(0.))));
        float surfaceWeight=0.;
        ${L&&!O.name.startsWith("print-")?"if(vAtlas.z>.001){vec2 uv=vAtlas.xy/max(vAtlas.z,.0001);vec4 a=texture2D(uWallsDay,uv),b=texture2D(uWallsNight,uv);vec3 wallLight=(a.rgb*a.a*uWallRange.x*(1.-uNight)+b.rgb*b.a*uWallRange.y*(uNight+dayTask*(1.-uNight)));surfaceWeight=smoothstep(.05,.91,vAtlas.z);bounce=mix(bounce,wallLight,surfaceWeight);}":""}
        // Cycles stores the diffuse response to the measured sky and to bounced
        // sunlight. Blend to the unoccluded environment beyond the receivers.
        float bakedWeight=max(bakeRegion*max(inRoom,surfaceWeight),${G?"floorMask*step(0.,uvF.x)*step(0.,uvF.y)*step(uvF.x,1.)*step(uvF.y,1.)":"0."});
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
      `)},O.customProgramCacheKey=()=>[L,G,V,X,z,O.name==="plaster",O.name==="chips",O.name==="shade",O.name==="gravel"].join("/"),O.needsUpdate=!0,O}let F=new Map;function H(O){if(F.has(O))return F.get(O);let L;if(O==="glass"||O==="car-glass")L=new Xt({color:14870748,metalness:.08,roughness:.055,transparent:!0,opacity:O==="car-glass"?.17:.047,depthWrite:!1,side:Lt,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.035}),L.forceSinglePass=!0,L.onBeforeCompile=G=>{G.fragmentShader=G.fragmentShader.replace("#include <opaque_fragment>","float fresnel=pow(1.-abs(dot(normal,normalize(vViewPosition))),3.5);diffuseColor.a=clamp(opacity+.55*fresnel,.025,.76);#include <opaque_fragment>".replace(";#",`;
#`))};else{let G=O==="range"?"stone":O==="shade"?"linen":O,V=B[G]||[],X={vertexColors:!0,color:16777215,roughness:1,metalness:0,side:Lt,map:V[0]||null,normalMap:V[1]||null,roughnessMap:V[2]||null};O==="wood"?L=new Xt({...X,clearcoat:.17,clearcoatRoughness:.36}):O==="linen"||O==="rug"?L=new Xt({...X,sheen:.34,sheenRoughness:.85,sheenColor:9736324}):L=new at(X);let z={chips:.22,paving:.61,metal:.1,wood:.23,terrazzo:.32,stone:.82,plaster:.42,linen:.54,gravel:.9,tile:.28,rug:.7,range:1.2}[O]||.25;L.normalScale.setScalar(O==="plaster"?.13:O==="wood"?.26:n[G]?.recommendedNormalScale??z),P(L,{finish:!0,floor:["terrazzo","plaster","paving","chips"].includes(O),bulb:O==="bulb",plainMap:O.startsWith("print-")})}return L.name=O,F.set(O,L),L}return{textures:B,material:H,patch:P,addLocalEmitter:S,syncEmitters:C,mixBakes:U,setPracticalPower:v,listenPractical(O){x=O},materials:F,setRoomReflection(O,L){L&&(g.uRoomOrigin.value=L.origin,g.uRoomLow.value=L.lo,g.uRoomHigh.value=L.hi),g.uRoomReflection.value=O,g.uHasReflection.value=+!!O}}}var AM,qi,Hh=ut(()=>{gt();AM=i=>Math.max(0,Math.min(1,i)),qi=(i,e,t)=>{let n=AM((t-i)/(e-i));return n*n*(3-2*n)}});async function KA(i,e){let t=new fn,[n,s,r]=await Promise.all(["granite-evening","granite-horizon","moonlit-sky"].map(l=>t.loadAsync("assets/range/"+l+".webp")));for(let l of[n,s,r])l.colorSpace=ht,l.wrapS=rn,l.anisotropy=4;e.wrapS=rn;let a={panorama:{value:n},horizonBand:{value:s},moonSky:{value:r},measuredSun:{value:e},hour:{value:.4},night:{value:0}},o=new Qe(new Hn(730,72,40),new Ut({side:Zt,depthWrite:!1,uniforms:a,vertexShader:"varying vec3 ray;void main(){ray=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 ray; ${WA}
      void main(){gl_FragColor=vec4(sitePlate(ray),1.);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`}));o.name="Distant granite escarpment",o.renderOrder=-10,i.add(o);let c=l=>{a.hour.value=l,a.night.value=qi(.48,.97,l)};return c.connectGround=()=>{let l=new Set;i.traverse(h=>{if(!h.isMesh||h.name!=="Sculpted desert alluvium"||l.has(h.material))return;let d=h.material,u=d.onBeforeCompile,f=d.customProgramCacheKey();l.add(d),d.onBeforeCompile=(p,g)=>{u.call(d,p,g),Object.assign(p.uniforms,a),p.fragmentShader=p.fragmentShader.replace("#include <common>",`#include <common>
`+WA);let m="#include <tonemapping_fragment>";p.fragmentShader=p.fragmentShader.replace(m,`
          vec3 local=desertPosition-vec3(1.,1.65,-2.);
          float dist=length(local.xz);
          float wash=sin(local.x*.245-local.z*.19)*1.8+sin(local.z*.39+local.x*.157)*1.1;
          float merge=smoothstep(18.,53.,dist+wash);
          if(dist>12.){
            float eye=mix(1.65,5.15,smoothstep(18.,33.,dist)*(1.-smoothstep(65.,170.,dist)));
            local.y=desertPosition.y-eye;
            vec3 field=sitePlate(local);
            vec3 dir=normalize(local);
            vec2 uv=vec2(atan(dir.z,dir.x)/6.2831853+.5-.285,asin(clamp(dir.y,-1.,1.))/3.14159265+.5);
            vec3 mineral=textureLod(panorama,uv,6.7).rgb;
            vec3 mineralGain=clamp(mineral/vec3(.095,.080,.059),vec3(.84),vec3(1.7));
            float soilMix=smoothstep(12.,21.,dist+wash)*(1.-night);
            gl_FragColor.rgb*=mix(vec3(1.),mineralGain,soilMix*.45);
            gl_FragColor.rgb=mix(gl_FragColor.rgb,field,merge);
          }
          `+m).replace("#include <fog_fragment>",`vec3 beforeDistantFog=gl_FragColor.rgb;
          #include <fog_fragment>
          gl_FragColor.rgb=mix(gl_FragColor.rgb,beforeDistantFog,merge);`)},d.customProgramCacheKey=()=>f+"/far-field-photograph",d.needsUpdate=!0})},c}var WA,qA=ut(()=>{gt();Hh();WA=`
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
  }`});function XA({water:i,camera:e,interactions:t,syncLook:n,audio:s,onExit:r}){let a=i.surface;a.updateWorldMatrix(!0,!1);let o=a.geometry.attributes.position,c=a.geometry.attributes.waterEdge,l=[],h=new Set,d=new T,u=new ge;for(let w=0;w<o.count;w++){if(c.getX(w)>.002)continue;d.fromBufferAttribute(o,w).applyMatrix4(a.matrixWorld);let B=Math.round(d.x*1e3)+","+Math.round(d.z*1e3);h.has(B)||(h.add(B),l.push(new ge(d.x,d.z)),u.add(l.at(-1)))}u.divideScalar(l.length),l.sort((w,B)=>Math.atan2(w.y-u.y,w.x-u.x)-Math.atan2(B.y-u.y,B.x-u.x));let f=a.position.y,p=new T(7.8,.52,9.35),g=new T(7.12,f+.25,8.44),m=new T(8.53,1.65,10.29),A=new T(-.83,.55,7.55),x=!1,v=!1,_=null,M=0,E=0;function b(w,B){let R=!1,U=1/0;for(let P=0,F=l.length-1;P<l.length;F=P++){let H=l[F],O=l[P],L=O.x-H.x,G=O.y-H.y;H.y>B!=O.y>B&&w<L*(B-H.y)/G+H.x&&(R=!R);let V=Ye.clamp(((w-H.x)*L+(B-H.y)*G)/(L*L+G*G||1),0,1);U=Math.min(U,(w-H.x-L*V)**2+(B-H.y-G*V)**2)}return R&&U>.17*.17}function y(w,B){let R=e.position.clone(),U=w==="jump"?[R,new T(-.52,2.09,7.56),new T(.57,2.25,7.56),new T(1.48,1.43,7.56),new T(2.3,f-.38,7.56),B]:w==="in"?[R,new T(8.14,1.56,9.76),new T(7.75,.7,9.28),B]:[R,new T(7.72,.54,9.21),new T(8.12,1.45,9.68),B],P=w==="out"?new T(3,1,3):new T(.3,.52,4.3),F=new Gt().setFromRotationMatrix(new Be().lookAt(B,P,e.up));_={kind:w,curve:new mi(U),t:0,duration:w==="jump"?1.68:1.12,rotation:F,fromQ:e.quaternion.clone(),splashed:!1},v=!1}t.register({id:"pool-ladder",label:()=>x?"Climb out of pool":"Climb down pool ladder",point:p,enabled:()=>!_,reach:2.55,radius:.3,priority:-.1,use:()=>y(x?"out":"in",x?m:g)}),t.register({id:"pool-board",label:()=>"Jump from diving board",point:A,enabled:()=>!x&&!_,reach:2.45,radius:.41,use:()=>y("jump",new T(2.56,f+.25,7.56))});let I=t.actions.find(w=>w.id==="pool-touch");I&&(I.enabled=()=>!x&&!_);let S=new Qe(a.geometry,new Ut({name:"Water seen from the basin",side:Zt,transparent:!0,depthWrite:!1,uniforms:{clock:{value:0},night:{value:0}},vertexShader:"varying vec3 wp;void main(){vec4 p=modelMatrix*vec4(position,1.);wp=p.xyz;gl_Position=projectionMatrix*viewMatrix*p;}",fragmentShader:`varying vec3 wp;uniform float clock,night;
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
      }`}));S.position.copy(a.position),S.quaternion.copy(a.quaternion),S.scale.copy(a.scale),S.name="Underside of the pool surface",S.userData.noProbe=!0,S.visible=!1,a.parent.add(S);function C(){return Ye.smoothstep(f+.025-e.position.y,0,.11)}return{get active(){return x},get traveling(){return!!_},get underwater(){return v},immersion:C,get label(){return e.position.distanceTo(g)<1.7?"Climb out of pool":v?"Surface":"Dip underwater"},use(){e.position.distanceTo(g)<1.7?y("out",m):v=!v},update(w,B,R,U){if(_){_.t=Math.min(1,_.t+w/_.duration);let P=Ye.smoothstep(_.t,0,1);_.curve.getPoint(P,e.position),e.quaternion.slerpQuaternions(_.fromQ,_.rotation,P),n(),_.kind!=="out"&&!_.splashed&&e.position.y<f+.4&&(_.splashed=!0,i.disturb(e.position,1.5),s.cue("splash",.65)),_.t===1&&(x=_.kind!=="out",x||r(),_=null)}else if(x){let P=e.position;b(P.x+B,P.z)&&(P.x+=B),b(P.x,P.z+R)&&(P.z+=R);let F=Math.hypot(B,R)/Math.max(w,.001);M+=w*(F*3.2),E+=w;let H=f+(v?-.56:.25)+Math.min(F,.8)*.028*Math.sin(M);P.y=Ye.damp(P.y,H,6,w),F>.18&&E>.74&&(E=0,i.disturb(P,.68))}S.visible=C()>.005,S.material.uniforms.night.value=U,S.material.uniforms.clock.value+=w,s.setImmersion(C())},reset(){x=v=!1,_=null,S.visible=!1,s.setImmersion(0)}}}var JA=ut(()=>{gt()});function mM(){let t=new Uint8Array(131072),n=[[0,-.29,.27,.155,.95],[.21,-.055,.14,.24,.38],[-.015,.18,.385,.145,.87],[-.26,.367,.113,.096,1],[-.055,.395,.082,.079,.92],[.105,.373,.073,.073,.86],[.24,.333,.064,.066,.8],[.345,.276,.053,.058,.72]];for(let r=0;r<256;r++)for(let a=0;a<128;a++){let o=a/127-.5,c=r/255-.5,l=0,h=0;for(let[u,f,p,g,m]of n){let A=Math.hypot((o-u)/p,(c-f)/g),x=.016*Math.sin(o*97+c*43)+.012*Math.sin(c*157-o*35),v=1-Ye.smoothstep(A+x,.86,1.04);l=Math.max(l,v),h=Math.max(h,v*m)}let d=(r*128+a)*4;t[d]=Math.round(l*255),t[d+1]=Math.round(h*255),t[d+2]=Math.round((.91+.045*Math.sin(o*138+c*19)*Math.sin(c*219))*255),t[d+3]=255}let s=new Bn(t,128,256);return s.generateMipmaps=!0,s.minFilter=Ht,s.magFilter=vt,s.needsUpdate=!0,s.name="Original barefoot pressure contact",s}function YA(i){return/rug|carpet/i.test(i)?"rug":/chips|terrazzo|tile/i.test(i)?"hard":/paving|coping|stone/i.test(i)?"patio":null}function gM(i){let e=new Map,t=new T,n=new T,s=new T;return i.updateMatrixWorld(!0),i.traverse(r=>{if(!r.isMesh||!r.visible||r.isInstancedMesh)return;let a=r;for(;a;){if(!a.visible||a.userData.interaction)return;a=a.parent}let o=Array.isArray(r.material)?r.material:[r.material];if(!o.some(u=>YA(u.name)))return;let c=r.geometry,l=c.attributes.position,h=c.index,d=h?h.count:l.count;for(let u=0;u<d;u+=3){let f=c.groups.find(b=>u>=b.start&&u<b.start+b.count),p=YA(o[f?.materialIndex??0]?.name??"");if(!p)continue;t.fromBufferAttribute(l,h?h.getX(u):u).applyMatrix4(r.matrixWorld),n.fromBufferAttribute(l,h?h.getX(u+1):u+1).applyMatrix4(r.matrixWorld),s.fromBufferAttribute(l,h?h.getX(u+2):u+2).applyMatrix4(r.matrixWorld);let g=Math.min(t.y,n.y,s.y),m=Math.max(t.y,n.y,s.y);if(g<-.45||m>.12||m-g>.025)continue;let A=(n.z-s.z)*(t.x-s.x)+(s.x-n.x)*(t.z-s.z);if(A>-1e-8)continue;let x={ax:t.x,az:t.z,bx:n.x,bz:n.z,cx:s.x,cz:s.z,ay:t.y,by:n.y,cy:s.y,determinant:A,kind:p},v=Math.floor(Math.min(t.x,n.x,s.x)),_=Math.floor(Math.max(t.x,n.x,s.x)),M=Math.floor(Math.min(t.z,n.z,s.z)),E=Math.floor(Math.max(t.z,n.z,s.z));if(!((_-v)*(E-M)>2048))for(let b=v;b<=_;b++)for(let y=M;y<=E;y++){let I=b+","+y;e.has(I)||e.set(I,[]),e.get(I).push(x)}}}),(r,a,o)=>{let c=null;for(let l of e.get(Math.floor(r)+","+Math.floor(a))??[]){let h=((l.bz-l.cz)*(r-l.cx)+(l.cx-l.bx)*(a-l.cz))/l.determinant,d=((l.cz-l.az)*(r-l.cx)+(l.ax-l.cx)*(a-l.cz))/l.determinant;if(h<-1e-4||d<-1e-4||h+d>1.0001)continue;let u=h*l.ay+d*l.by+(1-h-d)*l.cy;Math.abs(u-o)>.115||(!c||u>c.y+1e-4||Math.abs(u-c.y)<1e-4&&l.kind==="rug")&&(c={kind:l.kind,y:u})}return c}}function jA({scene:i,camera:e,onStep:t=()=>{}}){let n=gM(i),s=mM(),r=new Vn(.129,.278);r.rotateX(-Math.PI/2);let a=new Float32Array(_o*4),o=new Dn(a,4);o.setUsage(Zs),r.setAttribute("contact",o);let c=new Ut({name:"Absorbed wet sole contacts",transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,uniforms:{mask:{value:s},clock:{value:0}},vertexShader:`attribute vec4 contact;varying vec2 soleUV;varying vec4 wetContact;
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
      }`}),l=new Fn(r,c,_o);l.name="Alternating wet barefoot contacts",l.userData.noProbe=!0,l.frustumCulled=!1,l.count=0,l.visible=!1,l.renderOrder=2,l.instanceMatrix.setUsage(Zs),i.add(l);let h=e.position.clone(),d=new Be,u=new it,f=new T,p=0,g=0,m=0,A=-1,x=0,v=-1/0,_=0,M=0;function E(){h.copy(e.position),m=0,g=0}function b(){h.copy(e.position),m=0,g=1}function y(I,{grounded:S=!1,moving:C=!0}={}){I=Wh(I,0,.1),p+=I,c.uniforms.clock.value=p,g=Math.max(0,g-I/65);let w=e.position.x-h.x,B=e.position.z-h.z,R=Math.hypot(w,B),U=Math.abs(e.position.y-h.y);if(h.copy(e.position),l.visible=l.count>0&&p-v<38,!S||!C||I<=0||R>Math.max(.18,I*4.2)||U>.17){m=0;return}if(R<I*.1)return;let P=R/I,F=Ye.lerp(.64,.88,Wh((P-1)/2,0,1));if(m+=R,m<F)return;m%=F,A*=-1,_++;let H=w/R,O=B/R,L=e.position.x-O*.083*A,G=e.position.z+H*.083*A,V=n(L,G,e.position.y-1.65),X=V?.kind??"gravel",z=g;if(t({surface:X,wetness:z,side:A,speed:P}),g>.035&&(g*=X==="rug"?.65:.88),!V||z<.07)return;let K=Math.atan2(-H,-O)-A*.055;d.makeRotationY(K),d.setPosition(L,V.y+.0012,G),l.setMatrixAt(x,d),a.set([p,z*(X==="rug"?.55:1),X==="rug"?12:38,A],x*4),o.needsUpdate=!0,l.instanceMatrix.needsUpdate=!0,x=(x+1)%_o,l.count=Math.min(_o,l.count+1),l.visible||u.makeEmpty(),u.expandByPoint(f.set(L-.18,V.y,G-.18)),u.expandByPoint(f.set(L+.18,V.y+.008,G+.18)),v=p,l.visible=!0,M++}return{update:y,exitPool:b,reset:E,mesh:l,bounds:()=>l.visible?u:null,get printCount(){return M},get stats(){return{capacity:_o,liveSlots:l.count,steps:_,prints:M,wetness:g}},dispose(){i.remove(l),r.dispose(),c.dispose(),s.dispose()}}}function ZA({context:i,output:e,isMuted:t=()=>!1}){let n=i.createBuffer(1,Math.ceil(i.sampleRate*.3),i.sampleRate),s=n.getChannelData(0),r=73421,a=0;for(let c=0;c<s.length;c++)r=Math.imul(r,1664525)+1013904223>>>0,s[c]=r/2147483648-1;function o(c,l,h,d,u,f){let p=i.createBufferSource(),g=i.createBiquadFilter(),m=i.createGain(),A=i.createStereoPanner();p.buffer=n,p.playbackRate.value=f,g.type="lowpass",g.frequency.value=l,g.Q.value=.55,m.gain.setValueAtTime(0,c),m.gain.linearRampToValueAtTime(d,c+.004),m.gain.exponentialRampToValueAtTime(1e-4,c+h),A.pan.value=u,p.connect(g),g.connect(m),m.connect(A),A.connect(e),p.onended=()=>{p.disconnect(),g.disconnect(),m.disconnect(),A.disconnect()},p.start(c,a%7*.013),p.stop(c+h+.01)}return({surface:c,wetness:l=0,side:h=1,speed:d=1.65})=>{if(t()||i.state!=="running")return;a++;let u=i.currentTime,f=Wh(.75+(d-1)*.18,.65,1.25),p=1+.045*Math.sin(a*2.399),g=h*.12,m=c==="rug",A=c==="gravel",x=c==="hard",v=(m?.055:A?.105:.085)*f;o(u,(m?480:A?1850:x?3100:2100)*p,m?.105:A?.145:.075,v,g,p),o(u+.048,m?720:A?2600:1900,m?.08:.105,v*(m?.3:.52),g,.91/p);let _=i.createOscillator(),M=i.createGain();_.type="sine",_.frequency.setValueAtTime((m?92:122)*p,u),_.frequency.exponentialRampToValueAtTime(46,u+.075),M.gain.setValueAtTime(0,u),M.gain.linearRampToValueAtTime((m?.07:.095)*f,u+.004),M.gain.exponentialRampToValueAtTime(1e-4,u+.09),_.connect(M),M.connect(e),_.onended=()=>{_.disconnect(),M.disconnect()},_.start(u),_.stop(u+.1),l>.1&&!m&&!A&&o(u+.036,4200,.055,.052*l*f,g,1.25*p)}}var _o,Wh,Kh=ut(()=>{gt();_o=64,Wh=Ye.clamp});function xM(i,e,t){let n=i.matrixWorld.clone().invert(),s=new T,r=[];for(let a of[...i.children]){if(!a.isMesh||a.material.name!=="metal")continue;let o=a.geometry,c=o.index,l=o.attributes.position,h=n.clone().multiply(a.matrixWorld),d=[[],[],[]];for(let u=0,f=c?c.count:l.count;u<f;u+=3){let p=[0,1,2].map(x=>c?c.getX(u+x):u+x);s.fromBufferAttribute(l,p[0]).applyMatrix4(h);let g=e?s.z:s.x,m=e?s.x:-s.z,A=Math.abs(s.y-1.04)<.028&&Math.abs(g)>.052&&m>t-.31&&m<t-.095;d[A?g<0?1:2:0].push(...p)}for(let u=1;u<=2;u++){if(!d[u].length)continue;let f=o.clone();f.setIndex(d[u]),f.clearGroups();let p=new Qe(f,a.material);p.name="Working brass lever",p.position.copy(a.position),p.quaternion.copy(a.quaternion),p.scale.copy(a.scale),p.castShadow=p.receiveShadow=!0,i.add(p);let g=new st,m=u===1?-1:1;g.position.set(e?t-.13:m*.075,1.04,e?m*.075:-(t-.13)),i.add(g),g.attach(p),r.push(g)}(d[1].length||d[2].length)&&(a.geometry=o.clone(),a.geometry.setIndex(d[0]),a.geometry.clearGroups())}return r}function $A(i,e){let t=i.userData.bounds,n=Math.max(t[2]-t[0],t[3]-t[1]),s=t[2]-t[0]>t[3]-t[1],r=i.userData.interaction==="hinge",a=new at({name:"Satin brass latch fittings",color:10782025,metalness:.82,roughness:.32});e.patch(a,{plainMap:!0});let o=new Qt(1,1,1,20),c=new Nt(1,1,1),l=[],h=new Be,d=new Gt,u=new T,f=new T;function p(v,_,M,E,b,y,I,S=0,C=0){d.setFromEuler(new Gn(S,0,C)),h.compose(u.set(_,M,E),d,f.set(b,y,I));let w=v.clone().toNonIndexed().applyMatrix4(h);l.push(w)}let g=r?xM(i,s,n):[],m=new st;i.add(m),s||(m.rotation.y=Math.PI/2);let A;if(r){p(c,n+.001,1.015,0,.003,.145,.026);for(let v of[-1,1]){p(o,n-.13,1.04,v*.059,.012,.044,.012,Math.PI/2);for(let _ of[.956,1.089])p(o,n-.13,_,v*.049,.004,.003,.004,Math.PI/2)}for(let v of[.958,1.071])p(o,n+.003,v,0,.0035,.002,.0035,0,Math.PI/2);A=new Qe(new Qt(.009,.009,.021,16),a),A.rotation.z=Math.PI/2,A.position.set(n+.004,1.015,0)}else{let v=t[2]-.12,_=.034;p(c,v,1.01,_,.038,.089,.008);for(let M of[.979,1.04])p(o,v,M,_+.005,.0038,.002,.0038,Math.PI/2);A=new Qe(new Za(.006,.023,4,10),a),A.position.set(v,1.01,_+.014)}A.name=r?"Spring latch":"Thumb latch",m.add(A);let x=new Qe(ln(l),a);x.name="Escutcheon fixings",m.add(x);for(let v of l)v.dispose();return c.dispose(),o.dispose(),v=>{for(let _ of g)s?_.rotation.z=v*.39:_.rotation.x=v*.39;r?A.position.x=n+.004-v*.014:A.rotation.z=v*Math.PI*.43}}var em=ut(()=>{gt();oi()});function bM(i){let e=[i[0]],t=[0],n=r=>{let a=qh(e.at(-1),r);a<1e-8||(t.push(t.at(-1)+a),e.push(r))};for(let r=1;r<i.length-1;r++){let a=i[r-1],o=i[r],c=i[r+1],l=qh(a,o),h=qh(o,c),d=Math.min(.22,l*.24,h*.24),u=sr(o,a,d/l),f=sr(o,c,d/h);n(u);for(let p=1;p<=32;p++){let g=p/32;n(sr(sr(u,o,g),sr(o,f,g),g))}}n(i.at(-1));let s=t.at(-1);return{length:s,sample(r){let a=Xh(r)*s,o=0,c=t.length-1;for(;o+1<c;){let h=o+c>>1;t[h]<a?o=h:c=h}let l=t[c]-t[o];return sr(e[o],e[c],l?(a-t[o])/l:0)}}}function yM(i){return i<.065?i*i/(2*.065*(1-.065)):i>1-.065?1-(1-i)*(1-i)/(2*.065*(1-.065)):(i-.065/2)/(1-.065)}function MM(i,e){for(let t=1;t<i.length;t++)if(e<=i[t][0]){let[n,s]=i[t-1],[r,a]=i[t];return sr(s,a,_M(Xh((e-n)/(r-n))))}return i.at(-1)[1]}function tm(i,e,t=!1){let n=pa[i],s=Xh(e/n.duration),r=t?.5:yM(s),a=.55;return{position:vM[i].sample(r),target:MM(n.looks,r),title:n.title,fade:Math.max(0,1-e/a,(e-n.duration+a)/a)}}var pl,pa,sr,qh,_M,Xh,vM,nm=ut(()=>{pl={exterior:{position:[2.4,-14.3,1.65],target:[1.35,1,1.35],title:"Arroyo Fold"},"pool-edge":{position:[3.23451,-10.28421,1.65],target:[6.16366,-9.86102,1.15907],title:"At the pool ladder"},living:{position:[-1.35,5.22,1.65],target:[.65,2.15,1.05],title:"The conversation pit"},dining:{position:[5,.8,1.65],target:[6.5,4.3,1.4],title:"Afternoon at home"},kitchen:{position:[-3.55,2.05,1.65],target:[-6.4,3,1.3],title:"The kitchen"},entry:{position:[-8.45,4.6,1.65],target:[-4.8,5.6,1.15],title:"The gallery"},primary:{position:[-4.96,8.08,1.65],target:[-6.8,9.6,.85],title:"The primary bedroom"},kid:{position:[-1.15,7.5,1.65],target:[-2.4,9.6,1.1],title:"The small bedroom"},bath:{position:[.85,7.22,1.65],target:[.45,9.55,1.15],title:"Seafoam and porcelain"},den:{position:[5.5,7.7,1.65],target:[6.85,9.85,1.05],title:"A record in the den"},carport:{position:[14.6,.8,1.65],target:[12.8,4.2,.75],title:"Under the canopy"},"bath-vanity":{position:[1.2,9.15,1.65],target:[-.35,8.55,1.15],title:"Seafoam, walnut, and porcelain"},"kid-desk":{position:[-2.35,8.65,1.65],target:[-1.45,10.05,1.1],title:"A place to draw"},"built-in":{position:[-.95,5.05,1.65],target:[-.925,6.79,1.1],title:"Bookmatched walnut in the gallery"},patio:{position:[9.8,-3.6,1.65],target:[.7,-.4,1.35],title:"The shaded terrace"}},pa=[{id:"water-to-living",title:"Across the water, into the living room",duration:49,eyes:[[2.4,-14.3,1.65],[-1.8,-11.4,1.65],[-3,-9.5,1.65],[-3,-7.5,1.65],[-2.65,-5.2,1.65],[-1.5,-3.5,1.65],[1.2,-2.6,1.65],[1.2,-.6,1.65],[1.2,.45,1.65],[1.38,1.96,1.35],[1.35,3.1,1.35],[1.95,2.9,1.5],[2.65,2.55,1.65],[3.8,3.4,1.65],[4.3,2.5,1.65],[4.3,1.25,1.65],[6.5,1.2,1.65]],looks:[[0,[1.35,1,1.35]],[.18,[1.8,.5,1.7]],[.37,[.4,1,1.3]],[.53,[.8,2.7,.75]],[.72,[.2,2.5,.65]],[.87,[3,1.3,1.25]],[1,[6.4,4.3,1.4]]]},{id:"kitchen-to-primary",title:"The kitchen, gallery, and quiet wing",duration:27,eyes:[[-2.7,2.8,1.65],[-3.6,2.8,1.65],[-5.8,2.65,1.65],[-6.65,2.65,1.65],[-6.65,3.3,1.65],[-6.65,4.45,1.65],[-6.7,5.8,1.65],[-6.8,6.35,1.65],[-6.8,7.55,1.65],[-6.65,7.96,1.65],[-5.17,7.98,1.65]],looks:[[0,[-6.6,2.65,1.25]],[.2,[-7.8,2,1.15]],[.43,[-6,4.9,1.2]],[.61,[-5.2,6.3,1.45]],[.78,[-6.7,9.35,.85]],[1,[-6.9,9.55,.8]]]},{id:"small-rooms",title:"A small bedroom and a seafoam bath",duration:30,eyes:[[-4,6.15,1.65],[-2.7,6.3,1.65],[-2.68,7.55,1.65],[-2.5,8.2,1.65],[-2.35,8.8,1.65],[-2.15,8.25,1.65],[-2.4,7.8,1.65],[-2.7,7.45,1.65],[-2.7,6.3,1.65],[-.9,6.25,1.65],[.8,6.3,1.65],[.8,7.5,1.65],[.8,8.5,1.65],[.8,9.25,1.65]],looks:[[0,[-2.7,8.4,1.2]],[.23,[-3.8,9.45,1.2]],[.37,[-4.38,9.28,1.7]],[.5,[-1.45,9.8,1.05]],[.66,[.8,7.8,1.25]],[.82,[-.3,8.6,1.1]],[1,[.35,10.25,1]]]},{id:"records-to-canopy",title:"A record in the den, then the open canopy",duration:48,eyes:[[3.2,6.2,1.65],[5.5,6.35,1.65],[5.5,7.65,1.65],[5.7,7.9,1.65],[6.4,7.9,1.65],[7.3,7.83,1.65],[6.4,7.6,1.65],[5.5,7.55,1.65],[5.5,6.3,1.65],[4.35,6,1.65],[4.3,4.4,1.65],[4.3,2.65,1.65],[4.3,1.15,1.65],[5.95,1.15,1.65],[5.95,-.7,1.65],[8.4,-1.4,1.65],[10.7,-.2,1.65],[10.5,1.8,1.65],[10.45,4.3,1.65]],looks:[[0,[5.5,8.2,1.25]],[.14,[6,10.35,1.05]],[.26,[8.35,9.3,1.1]],[.36,[6.1,10.4,1]],[.49,[6.5,3.1,1.4]],[.63,[5.5,3.6,1.4]],[.76,[11.9,3.8,1.1]],[1,[12.5,4.1,1]]]}],sr=(i,e,t)=>i.map((n,s)=>n+(e[s]-n)*t),qh=(i,e)=>Math.hypot(...i.map((t,n)=>t-e[n])),_M=i=>i*i*(3-2*i),Xh=i=>Math.max(0,Math.min(1,i));vM=pa.map(i=>bM(i.eyes))});function im({camera:i,renderer:e,scene:t,solidRects:n=[],yardFloor:s=()=>0,doors:r=[],setTime:a=()=>{},interactions:o,light:c,audio:l,dirty:h,car:d,water:u,state:f,rangefinder:p,guide:g,map:m}){let A=q=>document.getElementById(q),x=e.domElement,v=A("start-screen"),_=A("hud"),M=A("pause-menu"),E=new ge,b=new ge,y=new Set,I=new ge,S=new Gn(0,0,0,"YXZ"),C=window.matchMedia("(prefers-reduced-motion: reduce)").matches,w=window.matchMedia("(pointer: coarse)").matches,B="menu",R="walk",U=0,P=0,F=.4,H=0,O=0,L=null,G=null,V=0,X=!1,z=!1,K=r.map(q=>({group:q,basePosition:q.position.clone(),baseQuaternion:q.quaternion.clone(),open:0,target:0,inverse:q.matrixWorld.clone().invert(),handle:$A(q,c),handleTime:1,lever:0})),j=K.filter(q=>q.group.userData.interaction==="slide"),ce=new T(0,1,0),ae=new Gt,ee=new T,me=.22,fe=new URLSearchParams(location.search).get("view")==="pool"?"pool-edge":"exterior";function Re(){S.setFromQuaternion(i.quaternion,"YXZ"),U=S.y,P=S.x}let Se=null,te=null,xe=null,_e=jA({scene:t,camera:i,onStep:q=>l.step(q)}),be=XA({water:u,camera:i,interactions:o,audio:l,syncLook:Re,onExit:()=>_e.exitPool()});function Ee(q){Se=null,te=null,xe=null,be.reset(),_e.reset();let Y=pl[q];return Y?(i.position.copy(bo(Y.position)),i.lookAt(bo(Y.target)),Re(),I.set(0,0),!0):!1}function le(q,Y){let{group:Ae}=q;Ae.position.copy(q.basePosition),Ae.quaternion.copy(q.baseQuaternion),Ae.userData.interaction==="slide"?Ae.position.x+=Number(Ae.userData.delta||1.9)*Y:Ae.quaternion.multiply(ae.setFromAxisAngle(ce,Number(Ae.userData.delta||Math.PI/2)*Y)),Ae.updateMatrixWorld(!0),q.inverse.copy(Ae.matrixWorld).invert()}function ve(q,Y,Ae){return ee.set(Y,0,-Ae).applyMatrix4(q.inverse),Le(ee.x,-ee.z,q.group.userData.bounds)}function Le(q,Y,Ae){if(!Ae)return 1/0;let Te=Al(q,Ae[0],Ae[2]),Ne=Al(Y,Ae[1],Ae[3]);return(q-Te)**2+(Y-Ne)**2}function Oe(q,Y,Ae,Te=me){return Le(q,Y,Ae)<Te*Te}function ze(q,Y){if(q<-24.5||q>23.5||Y<-24.5||Y>23.5||n.some(Ae=>Oe(q,Y,Ae))||K.some(Ae=>ve(Ae,q,Y)<me*me))return!0;for(let Ae of o.solids){if(Ae.clearance){if(Ae.clearance(q,-Y)<(me+.05)**2)return!0;continue}let Te=Ae.bounds();if(Te&&Te.max.y>.2&&Te.min.y<1.8&&q>Te.min.x-me&&q<Te.max.x+me&&-Y>Te.min.z-me&&-Y<Te.max.z+me)return!0}return!1}function Q(q,Y){let Ae=Math.max(1,Math.ceil(Math.hypot(q,Y)/.06));for(let Te=0;Te<Ae;Te++){let Ne=i.position.x,pt=-i.position.z;ze(Ne+q/Ae,pt)||(i.position.x+=q/Ae),ze(i.position.x,pt+Y/Ae)||(i.position.z-=Y/Ae)}}function qe(q){!q||B!=="walk"||(q.target=q.target>.5?0:1,q.handleTime=0,V=0,A("announcement").textContent=`${q.target?"Opening":"Closing"} ${q.group.userData.label||"door"}`)}for(let q of K){let Y=q.group,Ae=new T,Te=Y.userData.bounds,Ne=new T((Te[0]+Te[2])/2,1.12,-(Te[1]+Te[3])/2),pt=new it(new T(Te[0]-.07,0,-Te[3]-.1),new T(Te[2]+.07,2.48,-Te[1]+.1)),Ot=new it;o.register({id:"door-"+Y.userData.label.toLowerCase().replaceAll(" ","-"),door:!0,point:()=>Y.localToWorld(Ae.copy(Ne)),reach:2.65,label:()=>(q.target>.5?"Close ":"Open ")+Y.userData.label,hitTest:zt=>zt.ray.intersectsBox(Ot.copy(pt).applyMatrix4(Y.matrixWorld))?zt.intersectObject(Y,!0)[0]:null,use:()=>qe(q)})}let ye=[["pit","Sit in conversation pit",[-.16,.22,-3.78],[-.16,1.15,-3.74],[2.4,1,-1.36],.46],["pit-west","Sit on west sofa",[-2.04,.22,-2.56],[-2.04,1.15,-2.56],[2.94,.94,-1.34],.37],["den","Sit in listening chair",[4,.52,-8.83],[4,1.38,-8.76],[5.37,.96,-10.33],.28],["den-east","Sit in lounge chair",[7.2,.52,-8.83],[7.2,1.38,-8.76],[6.6,1.03,-10.36],.27],["driver","Sit behind the wheel",[11.87,1.04,-4.6],[11.87,1.5,-4.5],[11.87,1.4,-6.5],.36],["chaise","Recline on pool chaise",[-6.9,.52,5.85],[-6.86,1.04,5.58],[-6.1,.78,11.8],.33],["chaise-south","Recline on garden chaise",[-6.8,.52,8.55],[-6.82,1.04,8.3],[-7.05,.78,14.6],.33]];function De(q,Y){let Ae=i.quaternion.clone();if(Y){let Te=new Be().lookAt(q,Y,i.up);Ae.setFromRotationMatrix(Te)}te={from:i.position.clone(),to:q,fromQ:i.quaternion.clone(),toQ:Ae,t:0},I.set(0,0),y.clear()}function $(){xe={position:i.position.clone(),rotation:i.quaternion.clone(),seated:Se},Se={id:"reading",exit:xe.position},De(new T(.356,.72,-3.02),new T(.356,.145,-2.58))}function Fe(){let q=xe;xe=null,Se=q.seated,De(q.position),te.toQ.copy(q.rotation)}function ke(){if(xe){let Ae=o.actions.find(Te=>Te.id==="journal-close");return Ae.enabled()?(Ae.use(),l.cue("page",.3),Fe(),!0):!1}if(!Se)return!1;let q=Se.id==="driver",Y=Se.exit;return Se=null,q&&(d.doors[0].target||(o.actions.find(Te=>Te.id==="car-door-left").use(),l.cue("latch",.45)),ze(Y.x,-Y.z)&&Y.set(10.45,1.65,-3.26)),De(Y),te.fromDriver=q,!0}for(let[q,Y,Ae,Te,Ne,pt]of ye)o.register({id:"seat-"+q,label:()=>Y,point:new T(...Ae),radius:pt,reach:2.15,enabled:()=>!Se&&!te&&!be.active&&!be.traveling&&(q!=="driver"||Math.abs(d.doors[0].angle)>.68),use:()=>{Se={id:q,exit:i.position.clone()},De(new T(...Te),new T(...Ne))}});function Ge(q=E){if(B!=="walk"||te||be.traveling)return!1;if(p.raised)return p.shutter(),!0;let Y=o.pick(i,q);if(!Y)return be.active?(be.use(),!0):ke();let Ae=Y.action.label(),Te=Y.action.id;return Y.action.use(Y.point),V=0,g.action(Te),Te==="journal-open"&&$(),Te==="journal-close"&&xe&&Fe(),Y.action.door?l.cue(Te.includes("sliding")?"slide":"latch",.5):Te.startsWith("car-door-")?l.cue(Ae.startsWith("Close")?"car-close":"latch",.58):Te==="kitchen-cupboard"?l.cue("latch",.26):Te==="pool-touch"?l.cue("ripple",.24):Te.startsWith("journal-")?l.cue("page",.33):/lamp|light|television|record-player/.test(Te)&&l.cue("switch",.33),Y.action.door||(A("announcement").textContent=Ae),we(),!0}function k(){A("sound-toggle").textContent=l.muted?"Sound off":"Sound on",A("pause-sound").textContent=l.muted?"Unmute sound":"Mute sound",A("sound-toggle").setAttribute("aria-pressed",String(l.muted)),A("sound-toggle").setAttribute("aria-label",l.muted?"Turn sound on":"Turn sound off"),A("pause-sound").setAttribute("aria-pressed",String(l.muted))}function D(){l.setMuted(!l.muted),l.start(),k()}function Z(){document.pointerLockElement===x&&document.exitPointerLock()}function pe(q){B=q,v.hidden=q!=="menu",_.hidden=q==="menu",A("touch-controls").hidden=q!=="walk"||!w,A("walk-hint").hidden=q!=="walk",A("reticle").hidden=q!=="walk",A("tour-caption").hidden=q!=="tour",A("interaction").hidden=!0,A("pause-open").innerHTML=`${q==="tour"?"Pause tour":"Pause"} <span class="key">Esc</span>`,V=0}async function se(q){if(M.open&&M.close(),pe(q),x.focus({preventScroll:!0}),q==="tour"){Se=null,te=null,xe=null,be.reset(),_e.reset(),Z(),H=0,O=0,z=!1;for(let Ae of K)Ae.target=1,Ae.open=1,le(Ae,1);I.set(0,0),y.clear(),Pe(0)}else Re(),I.set(0,0),y.clear(),A("tour-caption").textContent="",A("scene-fade").style.opacity=0;await l.start()||(A("announcement").textContent="Sound is unavailable. You can continue exploring.")}let Me="walk";function Ie(){B!=="walk"&&B!=="paused"||(Me=B,pe("map"),y.clear(),I.set(0,0),G=null,Z(),M.open&&M.close(),m.open())}function de(){B==="map"&&(pe(Me),m.close(),Me==="paused"?(M.showModal(),A("pause-map").focus()):x.focus({preventScroll:!0}))}A("pause-map").addEventListener("click",Ie);let he=A("minimap-enable");try{he.checked=localStorage.getItem("arroyo-fold.radar")!=="off"}catch{he.checked=!0}document.body.classList.toggle("no-minimap",!he.checked),he.addEventListener("change",()=>{document.body.classList.toggle("no-minimap",!he.checked);try{localStorage.setItem("arroyo-fold.radar",he.checked?"on":"off")}catch{}});function Ce(){B==="menu"||B==="paused"||B==="map"||(R=B,pe("paused"),y.clear(),I.set(0,0),Z(),A("resume").textContent=R==="tour"?"Resume tour":"Resume walk",A("tour-toggle").textContent=R==="tour"?"Walk from here":"Play tour",M.showModal(),A("resume").focus())}function W(){B==="paused"&&(M.open&&M.close(),pe(R),x.focus({preventScroll:!0}))}function ue(){p.reset(),M.open&&M.close(),pe("menu"),Z(),y.clear(),A("scene-fade").style.opacity=0,document.body.classList.remove("film"),Ee(fe),A("start-walk").focus()}A("start-walk").disabled=!1,A("start-walk").textContent="Walk through",A("start-tour").disabled=!1,A("load-status").textContent="",A("start-walk").addEventListener("click",()=>se("walk")),A("start-tour").addEventListener("click",()=>se("tour")),A("sound-toggle").addEventListener("click",D),A("pause-sound").addEventListener("click",D),A("pause-open").addEventListener("click",Ce),A("interaction").addEventListener("click",()=>Ge()),A("resume").addEventListener("click",q=>{q.preventDefault(),W()}),A("pause-close").addEventListener("click",q=>{q.preventDefault(),W()}),A("return-start").addEventListener("click",ue),A("tour-toggle").addEventListener("click",()=>se(R==="tour"?"walk":"tour")),M.addEventListener("cancel",q=>{q.preventDefault(),W()}),M.addEventListener("close",()=>{B==="paused"&&!M.open&&W()}),A("time-slider").addEventListener("input",q=>{F=Number(q.target.value),a(F),A("time-label").textContent=F>.82?"Night":F>.6?"Blue hour":F>.27?"Golden hour":"Afternoon"});let re=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowLeft","ArrowDown","ArrowRight","ShiftLeft","ShiftRight"]);window.addEventListener("keydown",q=>{if(B==="map"){(q.code==="Escape"||q.code==="KeyG")&&!q.repeat&&(q.preventDefault(),de());return}if(q.code==="KeyG"&&!q.repeat&&(B==="walk"||B==="paused")){q.preventDefault(),Ie();return}if(!(q.target instanceof HTMLInputElement)){if(B!=="menu"&&q.code==="KeyH"&&!q.repeat){document.body.classList.toggle("film");return}if(q.code==="Escape"||q.code==="KeyP"){q.preventDefault(),B==="paused"?W():Ce();return}B==="menu"||B==="paused"||(q.code==="KeyF"&&B==="walk"&&!q.repeat&&(q.preventDefault(),p.toggleFinder()),q.code==="KeyM"&&!q.repeat&&D(),q.code==="KeyT"&&!q.repeat&&se(B==="tour"?"walk":"tour"),q.code==="Space"&&B==="tour"&&(q.preventDefault(),z=!z),q.code==="KeyE"&&!q.repeat&&(q.preventDefault(),Ge()),re.has(q.code)&&(q.preventDefault(),Se&&ke(),y.add(q.code),V=0,B==="tour"&&(pe("walk"),Re(),A("scene-fade").style.opacity=0)))}}),window.addEventListener("keyup",q=>y.delete(q.code)),window.addEventListener("blur",()=>{y.clear(),(B==="walk"||B==="tour")&&Ce()}),document.addEventListener("visibilitychange",()=>{document.hidden&&B!=="menu"&&Ce()}),document.addEventListener("pointerlockchange",()=>{let q=X;X=document.pointerLockElement===x,q&&!X&&B==="walk"&&Ce()}),document.addEventListener("mousemove",q=>{X&&B==="walk"&&(U-=q.movementX*.002,P=Al(P-q.movementY*.002,-1.35,1.35),V=0)}),x.addEventListener("pointerdown",q=>{B!=="walk"||X||(G={id:q.pointerId,x:q.clientX,y:q.clientY,distance:0,touch:q.pointerType==="touch"},x.setPointerCapture(q.pointerId))}),x.addEventListener("pointermove",q=>{if(!G||G.id!==q.pointerId||B!=="walk")return;let Y=q.clientX-G.x,Ae=q.clientY-G.y;G.distance+=Math.hypot(Y,Ae),G.x=q.clientX,G.y=q.clientY,U-=Y*.003,P=Al(P-Ae*.003,-1.35,1.35),V=0}),x.addEventListener("pointerup",q=>{if(B!=="walk")return;if(X){Ge();return}if(!G||G.id!==q.pointerId)return;let Y=G.distance<6,Ae=G.touch;if(G=null,!Y)return;let Te=x.getBoundingClientRect();if(b.set(2*(q.clientX-Te.left)/Te.width-1,1-2*(q.clientY-Te.top)/Te.height),!Ge(b)&&!Ae&&x.requestPointerLock)try{x.requestPointerLock()?.catch?.(()=>{})}catch{}}),x.addEventListener("pointercancel",()=>{G=null});for(let q of document.querySelectorAll("[data-move]")){let Y={forward:"KeyW",backward:"KeyS",left:"KeyA",right:"KeyD"}[q.dataset.move];q.addEventListener("pointerdown",Ae=>{Ae.preventDefault(),q.setPointerCapture(Ae.pointerId),Se&&ke(),y.add(Y),V=0});for(let Ae of["pointerup","pointercancel","lostpointercapture"])q.addEventListener(Ae,()=>y.delete(Y))}function Ue(q){for(let Y of K){if(Y.handleTime<.46){Y.handleTime=Math.min(.46,Y.handleTime+q);let zt=Y.handleTime,In=zt<.09?Ye.smoothstep(zt,0,.09):1-Ye.smoothstep(zt,.16,.46);if(Y.handle(In),Y.lever=In,h({reflections:!1}),zt<.065)continue}if(Y.target===Y.open)continue;let Ae=Math.abs(Y.open-Y.target)<6e-4?Y.target:Ye.damp(Y.open,Y.target,5,q),Te=Y.open,Ne=Math.abs(Number(Y.group.userData.delta||1.9)*(Ae-Te)),pt=Math.max(1,Math.ceil(Ne/.045)),Ot=ve(Y,i.position.x,-i.position.z);for(let zt=1;zt<=pt;zt++){let In=Ye.lerp(Te,Ae,zt/pt);le(Y,In);let hi=ve(Y,i.position.x,-i.position.z);if(B==="walk"&&hi<(me+.025)**2&&hi<Ot-1e-8){le(Y,Y.open);break}Ot=hi,Y.open=In}}}function we(){L=te||be.traveling||p.raised?null:o.pick(i,E);let q=A("interaction"),Y=te||be.traveling?"":L?L.action.label():Se&&!te?xe?"Put down journal":Se.id==="driver"?"Get out of car":"Stand up":be.active?be.label:"";q.hidden=!Y;let Ae=Y+(w?"":" \xB7 E");Y&&q.textContent!==Ae&&(q.textContent=Ae)}function Pe(q){if(z)return;for(O+=q;O>=pa[H].duration;)O-=pa[H].duration,H=(H+1)%pa.length;let Y=tm(H,O,C);i.position.copy(bo(Y.position)),i.lookAt(bo(Y.target)),A("scene-fade").style.opacity=String(Y.fade),A("tour-caption").textContent!==Y.title&&(A("tour-caption").textContent=Y.title)}function et(q){if(q=Math.min(Math.max(q,0),.08),Ue(q),B==="walk"&&be.traveling)I.set(0,0),be.update(q,0,0,f.night),we();else if(B==="walk"&&te){let Y=te;(!Y.fromDriver||Math.abs(d.doors[0].angle)>.9)&&(Y.t=Math.min(1,Y.t+q/.44));let Ae=Ye.smoothstep(Y.t,0,1);i.position.lerpVectors(Y.from,Y.to,Ae),i.quaternion.slerpQuaternions(Y.fromQ,Y.toQ,Ae),Re(),Y.t===1&&(te=null),we()}else if(B==="walk"&&Se)S.set(P,U,0,"YXZ"),i.quaternion.setFromEuler(S),we();else if(B==="walk"){let Y=Number(y.has("KeyW")||y.has("ArrowUp"))-Number(y.has("KeyS")||y.has("ArrowDown")),Ae=Number(y.has("KeyD")||y.has("ArrowRight"))-Number(y.has("KeyA")||y.has("ArrowLeft")),Te=new ge(Ae,Y);Te.lengthSq()>1&&Te.normalize();let Ne=y.has("ShiftLeft")||y.has("ShiftRight")?3:1.65;I.x=Ye.damp(I.x,Te.x*Ne,11,q),I.y=Ye.damp(I.y,Te.y*Ne,11,q),!Ae&&Math.abs(I.x)<.008&&(I.x=0),!Y&&Math.abs(I.y)<.008&&(I.y=0);let pt=(I.x*Math.cos(U)-I.y*Math.sin(U))*q,Ot=(I.x*Math.sin(U)+I.y*Math.cos(U))*q;if(be.active)be.update(q,pt*.48,-Ot*.48,f.night);else{(pt||Ot)&&Q(pt,Ot);let zt=i.position.x,In=-i.position.z,hi=zt>-2.5&&zt<2.2&&In>.9&&In<4.3?-.3:s(zt,-In);zt>1.68&&zt<2.2&&In>1.7&&In<3.2&&(hi=-.15);let xa=1.65+hi;i.position.y=Math.abs(i.position.y-xa)<45e-5?xa:Ye.damp(i.position.y,xa,14,q)}S.set(P,U,0,"YXZ"),i.quaternion.setFromEuler(S),we(),V+=q,_.classList.toggle("quiet",V>7)}else B==="tour"&&Pe(q);_e.update(q,{grounded:B==="walk"&&!Se&&!te&&!be.active&&!be.traveling,moving:I.lengthSq()>.01}),l.update(i,F,j)}return Ee(fe),k(),a(F),{update:et,sliders:j,footsteps:_e,openMap:Ie,closeMap:de,pose(q){if(!pl[q])return null;M.open&&M.close(),pe("walk"),A("scene-fade").style.opacity=0;for(let Y of K)Y.target=1,Y.open=1,le(Y,1);return Ee(q),{position:i.position.clone(),target:bo(pl[q].target)}},get mode(){return B},get transitioning(){return!!te||be.traveling},get inCar(){return Se?.id==="driver"||!!te?.fromDriver},get seated(){return Se?.id??null},get swimming(){return be.active},immersion:be.immersion,aimAt(q,Y){_e.reset(),i.position.copy(q),i.lookAt(Y),Re(),I.set(0,0)}}}var bo,Al,sm=ut(()=>{gt();JA();Kh();em();nm();bo=([i,e,t])=>new T(i,t,-e),Al=(i,e,t)=>Math.min(t,Math.max(e,i))});function rm(i,e){let t=0,n=new Set;if(i.traverse(s=>{/^carport[ _]/.test(s.name)&&(s.visible=!1,s.traverse(r=>{n.add(r),r.isMesh&&t++}))}),!t)throw new Error("The original hardtop carport batch was not found");if(e)for(let s=e.length-1;s>=0;s--)n.has(e[s])&&e.splice(s,1)}var am=ut(()=>{});function om({scene:i,light:e}){let t="Fitted black Bakelite telephone cradle",n=i.getObjectByName(t);if(n)return n;let s=[],r=[],a=(d,u)=>{let f=new mi(d.map(p=>new T(...p)),!1,"catmullrom",.3);s.push(new gi(f,10,u,8,!1))},o=(d,u)=>{let f=new Hn(1,12,8);f.scale(...u),f.translate(...d),s.push(f)};for(let d of[-1,1]){let u=$t.x+d*.066,f=$t.x+d*.07905,p=-$t.receiverNorth;o([u,.828,p],[.013,.006,.016]),a([[u,.825,p],[u,.84,p],[f,.849,p],[f,.852,p]],.0065);for(let g of[-.01785,.01785])a([[f,.848,p],[f,.854,p+g*.5],[f,.8587,p+g]],.0036),o([f,.8587,p+g],[.0048,.0032,.0048]),r.push(new T(f,.8619,p+g))}let c=ln(s);for(let d of s)d.dispose();let l=new at({name:"Molded polished black Bakelite cradle",color:1514264,roughness:.25});e.patch(l,{plainMap:!0});let h=new Qe(c,l);return h.name=t,h.castShadow=!0,h.receiveShadow=!0,h.userData.cradleContacts=r.map(d=>d.toArray()),i.add(h),h}function cm({scene:i,light:e,dial:t}){let n=new at({name:"Telephone aged nickel brass dial",color:10852722,metalness:.76,roughness:.37}),s=new at({name:"Telephone printed ivory dial face",color:14998725,roughness:.78}),r=new at({name:"Telephone dial fingerstop Bakelite",color:1776407,roughness:.29});for(let x of[n,s,r])e.patch(x,{plainMap:!0});let a=(x,v,_,M)=>{let E=new Qe(v,_);return E.name=M,E.castShadow=!0,E.receiveShadow=!0,E.userData.householdPart=!0,x.add(E),E},o=a(i,new Qt(.058,.058,.002,48),s,"Telephone stationary numbered dial face");o.position.copy(t.position),o.position.y-=.0015;let c=new ls;c.absarc(0,0,.051,0,Math.PI*2,!1);let l=new Fi;l.absarc(0,0,.024,0,Math.PI*2,!0),c.holes.push(l);for(let x=0;x<10;x++){let v=(x*30+30)*Math.PI/180,_=new Fi;_.absarc(.0385*Math.cos(v),.0385*Math.sin(v),.0076,0,Math.PI*2,!0),c.holes.push(_)}let h=new Ns(c,{depth:.0018,bevelEnabled:!0,bevelSize:3e-4,bevelThickness:3e-4,bevelSegments:1,curveSegments:24});h.rotateX(-Math.PI/2),a(t,h,n,"Telephone perforated returning finger wheel");let d=document.createElement("canvas");d.width=512,d.height=512;let u=d.getContext("2d");u.clearRect(0,0,512,512),u.fillStyle="#302d24",u.textAlign="center",u.textBaseline="middle",u.font="bold 29px Georgia,serif";for(let x=0;x<10;x++){let v=(x*30+30)*Math.PI/180;u.fillText(String((x+1)%10),256+Math.cos(v)*227,256-Math.sin(v)*227)}u.fillStyle="#e9dfc6",u.beginPath(),u.ellipse(256,256,83,58,0,0,Math.PI*2),u.fill(),u.strokeStyle="#6f6954",u.lineWidth=3,u.stroke(),u.fillStyle="#37332b",u.font="18px Georgia,serif",u.fillText("ARROYO",256,237),u.font="bold 22px Georgia,serif",u.fillText("555\u20130147",256,266),u.strokeStyle="#9d9376",u.lineWidth=1,u.beginPath(),u.moveTo(191,249),u.lineTo(321,249),u.stroke();let f=new si(d);f.colorSpace=ht,f.anisotropy=2;let p=new at({name:"Telephone original printed number card and dial numerals",map:f,transparent:!0,depthWrite:!1,roughness:.82});e.patch(p,{plainMap:!0});let g=a(i,new Vn(.125,.125).rotateX(-Math.PI/2),p,"Telephone fixed paper subscriber card and ten dial numerals");g.position.copy(t.position),g.position.y+=.0027;let m=a(i,new Nt(.008,.004,.022),n,"Telephone fixed brass fingerstop");m.position.copy(t.position).add(new T(.045,.004,.027)),m.rotation.y=-.55;let A=a(i,new Nt(.0085,.008,.007),r,"Telephone fingerstop raised tip");return A.position.copy(m.position).add(new T(.005,.003,-.007)),A.rotation.y=m.rotation.y,{hitTarget:o}}function lm({scene:i,light:e}){let t=new at({name:"Entry worn brass household keys",color:11639394,metalness:.78,roughness:.36}),n=new at({name:"Entry steel split key ring",color:12170919,metalness:.85,roughness:.3});e.patch(t,{plainMap:!0}),e.patch(n,{plainMap:!0});let s=new st;s.name="Two household keys on split ring",s.userData.householdPart=!0,s.position.set(-4.16,.787,-5.12),s.rotation.y=.28,i.add(s);let r=new Qe(new Us(.013,85e-5,6,40,Math.PI*1.96),n);r.rotation.x=-Math.PI/2,s.add(r);let a=r.clone();a.position.y=.0012,a.rotation.z=.13,s.add(a);for(let[o,c]of[[0,-.45],[1,.55]]){let l=new st;l.rotation.y=c,l.position.set(o*.008-.004,.0018+o*.0015,-.01),s.add(l);let h=new ls;h.absarc(0,0,.009,0,Math.PI*2,!1);let d=new Fi;d.absarc(0,0,.0045,0,Math.PI*2,!0),h.holes.push(d);let u=new Ns(h,{depth:.0015,bevelEnabled:!1,curveSegments:16});u.rotateX(-Math.PI/2),l.add(new Qe(u,t));let f=new ls;f.moveTo(-.003,-.005),f.lineTo(.003,-.005),f.lineTo(.003,-.042),f.lineTo(-.002,-.042),f.lineTo(-.003,-.039),f.lineTo(-5e-4,-.036),f.lineTo(-.003,-.033),f.lineTo(-5e-4,-.03),f.lineTo(-.003,-.027),f.lineTo(-5e-4,-.024),f.lineTo(-.003,-.021),f.closePath();let p=new Ns(f,{depth:.0015,bevelEnabled:!1,curveSegments:1});p.rotateX(-Math.PI/2),l.add(new Qe(p,t))}return s.traverse(o=>{o.isMesh&&(o.castShadow=!0,o.receiveShadow=!0,o.userData.householdPart=!0)}),s}var $t,Jh=ut(()=>{gt();oi();$t=Object.freeze({x:-5.12,floor:.75,north:5.14,baseScale:.68,receiverScale:.51,receiverY:.888,receiverNorth:5.1808,dialY:.8452,dialNorth:5.1196})});async function um(i,e){let t=await new fn().loadAsync("assets/child-moon-drawing.webp");t.colorSpace=ht,t.anisotropy=4;let n=new at({map:t,roughness:.96,side:Lt});n.name="Pencil and crayon on drawing paper",e.patch(n,{plainMap:!0});let s=[],r=[],a=[],o=10;for(let h=0;h<=o;h++)for(let d=0;d<=o;d++){let u=d/o,f=h/o,p=Math.max(0,(.17-u-f)/.17);if(s.push(-1.43+(f-.5)*.31,.7617+.0021*p*p,-9.8+(u-.5)*.23),r.push(u,f),d<o&&h<o){let g=h*(o+1)+d;a.push(g,g+1,g+o+1,g+1,g+o+2,g+o+1)}}let c=new lt;c.setAttribute("position",new Ke(s,3)),c.setAttribute("uv",new Ke(r,2)),c.setIndex(a),c.computeVertexNormals();let l=new Qe(c,n);l.name="Ruth\u2019s pencil drawing of a moon flight",l.receiveShadow=!0,i.add(l)}var hm=ut(()=>{gt()});function EM(i,e,t){let n=new Map,s=e.cellMeters,r=e.toleranceMeters**2,a=f=>f.map(p=>Math.floor(p/s)).join("/");for(let f of e.triangles){let p=[0,1,2].map(m=>f.v.reduce((A,x)=>A+x[m],0)/3),g=a(p);n.has(g)||n.set(g,[]),n.get(g).push(f)}let o={removedCaseTriangles:0,movingOriginalTriangles:0,movingDrawCalls:0},c=[],l=null,h=new T,d=new T;i.updateWorldMatrix(!0,!0);let u=[];i.traverse(f=>{f.isMesh&&u.push(f)});for(let f of u){let p=f.geometry,g=p.attributes.position,m=p.index;if(!g)continue;let A=[],x=[];for(let v=0;v<(m?.count??g.count);v+=3){let _=[0,1,2].map(I=>m?m.getX(v+I):v+I),M=_.map(I=>h.fromBufferAttribute(g,I).applyMatrix4(f.matrixWorld).toArray()),E=[0,1,2].map(I=>M.reduce((S,C)=>S+C[I],0)/3);if(E[0]<-5.68||E[0]>-5.07||E[1]<.17||E[1]>.57||E[2]<-10.37||E[2]>-9.82){A.push(..._);continue}let b=E.map(I=>Math.floor(I/s)),y=null;e:for(let I=-1;I<=1;I++)for(let S=-1;S<=1;S++)for(let C=-1;C<=1;C++)for(let w of n.get([b[0]+I,b[1]+S,b[2]+C].join("/"))??[])if(M.every(B=>w.v.some(R=>B.reduce((U,P,F)=>U+(P-R[F])**2,0)<r))){y=w;break e}y?.action==="remove"?(o.removedCaseTriangles++,l=f.material,c.push({geometry:p,ids:_,triangle:new ii(...M.map(I=>new T(...I)))})):y?.action==="move"?(x.push(..._),o.movingOriginalTriangles++):A.push(..._)}if(x.length){let v=new lt,_=new rt().getNormalMatrix(f.matrixWorld);for(let[E,b]of Object.entries(p.attributes)){let y=new Float32Array(x.length*b.itemSize);for(let I=0;I<x.length;I++)if(E==="position")h.fromBufferAttribute(b,x[I]).applyMatrix4(f.matrixWorld).toArray(y,I*3);else if(E==="normal")d.fromBufferAttribute(b,x[I]).applyMatrix3(_).normalize().toArray(y,I*3);else for(let S=0;S<b.itemSize;S++)y[I*b.itemSize+S]=b.getComponent(x[I],S);v.setAttribute(E,new St(y,b.itemSize))}let M=new Qe(v,f.material);M.name="Original upper nightstand drawer / "+f.material.name,M.castShadow=M.receiveShadow=!0,t.add(M),o.movingDrawCalls++}A.length!==(m?.count??g.count)&&(p.setIndex(A),p.computeBoundingBox(),p.computeBoundingSphere())}if(o.removedCaseTriangles!==e.expected.remove||o.movingOriginalTriangles!==e.expected.move)throw Error("Original east nightstand geometry did not match: "+JSON.stringify(o));return{stats:o,shellSamples:c,caseMaterial:l}}function SM(i,e){let t=e[0].geometry.attributes,n=new Map;for(let[c,l]of Object.entries(t))c!=="position"&&c!=="normal"&&n.set(c,new Float32Array(i.attributes.position.count*l.itemSize));let s=new T,r=new T,a=new T,o=new T;for(let c=0;c<i.attributes.position.count;c++){s.fromBufferAttribute(i.attributes.position,c);let l=1/0,h=null;for(let u of e){u.triangle.closestPointToPoint(s,r);let f=r.distanceToSquared(s);f<l&&(l=f,h=u,a.copy(r))}h.triangle.getBarycoord(a,o);let d=o.toArray();for(let[u,f]of n){let p=h.geometry.attributes[u];for(let g=0;g<p.itemSize;g++)f[c*p.itemSize+g]=h.ids.reduce((m,A,x)=>m+p.getComponent(A,g)*d[x],0)}}for(let[c,l]of n)i.setAttribute(c,new St(l,t[c].itemSize))}async function dm({scene:i,core:e=i,loader:t,light:n,register:s,dirty:r,animateRegion:a=()=>{}}){let[o,c]=await Promise.all([fetch("assets/nightstand-source.json"),t.loadAsync("assets/nightstand.glb")]);if(!o.ok)throw Error("Nightstand source geometry unavailable");let l=await o.json(),h=new st;h.name="Working east primary nightstand",i.add(h);let d=new st;d.name="Primary bedside upper drawer and original pulls",h.add(d);let{stats:u,shellSamples:f,caseMaterial:p}=EM(e,l,d),g=new Map;c.scene.updateWorldMatrix(!0,!0),c.scene.traverse(E=>{if(!E.isMesh)return;let b=E.userData.nightstandPart;if(b!=="static"&&b!=="drawer")throw Error("Unlabelled nightstand replacement mesh");let y=E.geometry.clone().applyMatrix4(E.matrixWorld),I=b==="static"&&E.material.name==="walnut",S=I?p:E.material;I&&SM(y,f);let C=b+"/"+S.uuid;g.has(C)||g.set(C,{part:b,material:S,geometries:[]}),y.attributes.uv||y.setAttribute("uv",new Ke(new Float32Array(y.attributes.position.count*2),2)),g.get(C).geometries.push(y)});for(let{part:E,material:b,geometries:y}of g.values()){b!==p&&n.patch(b,{plainMap:!0});let I=new Qe(ln(y),b);I.name="Nightstand "+E+" / "+b.name,I.castShadow=I.receiveShadow=!0,(E==="drawer"?d:h).add(I);for(let S of y)S.dispose()}u.replacementDrawCalls=g.size;let m=!1,A=0,x=new T(-5.5295,.51,-9.85),v=x.clone(),_=new it(new T(-5.66,.455,-10.31),new T(-5.08,.56,-9.54));a(()=>Math.abs(A-(m?1:0))>1e-5?_:null);let M=new it(new T(-5.655,.455,-9.88),new T(-5.084,.56,-9.88));return s({id:"primary-nightstand-drawer",label:()=>m?"Close bedside drawer":"Open bedside drawer",point:()=>v.copy(x).add(d.position),reach:1.75,radius:.095,bounds:()=>A<.02?null:(M.max.z=-9.85+.27*A,M),use(){m=!m,r({shadows:!0})}}),{drawer:d,stats:u,update(E=0){let b=m?1:0;return A===b?!1:(A=Ye.damp(A,b,7,Math.max(0,Math.min(E,.06))),Math.abs(A-b)<2e-4&&(A=b),d.position.z=.27*A,r({reflections:!1}),!0)}}}var fm=ut(()=>{gt();oi()});function mm({scene:i,light:e,register:t,dirty:n=()=>{},audio:s,animateRegion:r=()=>{}}){let a=new st;a.name="Child\u2019s enamel-ringed wooden spinning top",i.add(a);let o=new st;o.name="Top physical tip and body",a.add(o);let c=(P,F)=>{let H=new at({name:P,...F});return e.patch(H,{plainMap:!0}),H},l=c("Turned wood and hand-painted enamel rings",{color:16777215,roughness:.38,vertexColors:!0}),h=c("Spinning top small polished brass tip",{color:11834706,roughness:.26,metalness:.78}),d=c("Still colored glass cat-eye marbles",{color:16777215,roughness:.16,metalness:.12,vertexColors:!0}),u=new zr(gl.map(([P,F])=>new ge(P,F)),48),f=[],p=u.attributes.position,g=new We;for(let P=0;P<p.count;P++){let F=p.getY(P),H=Math.atan2(p.getZ(P),p.getX(P));g.set(F>=.027&&F<.038?10567472:F>=.047&&F<.055?3631992:F>=.06&&F<.067?14997164:12025153),g.multiplyScalar(1+.035*Math.sin(H*7+F*740)),F>=.038&&F<.047&&Math.abs(H-.7)<.17&&g.set(15391926),f.push(g.r,g.g,g.b)}u.setAttribute("color",new Ke(f,3));let m=new Qe(u,l);m.name="Top turned wooden body and enamel rings";let A=new Qe(new zr(pm.map(([P,F])=>new ge(P,F)),24),h);A.name="Top brass contact tip";for(let P of[m,A])P.castShadow=!0,P.receiveShadow=!0,o.add(P);let x=[];for(let[P,F,H,O]of[[-1.17,-10.04,.009,4684921],[-1.15,-10.11,.011,10120246]]){let L=new Hn(H,20,12),G=[],V=L.attributes.position;for(let X=0;X<V.count;X++)g.set(Math.sin(Math.atan2(V.getZ(X),V.getX(X))*3+V.getY(X)/H*2)>.6?15128756:O),G.push(g.r,g.g,g.b);L.setAttribute("color",new Ke(G,3)),L.translate(P,.76+H,F),x.push(L)}let v=new Qe(ln(x),d);for(let P of x)P.dispose();v.name="Two still cat-eye glass marbles on writing desk",v.castShadow=!0,v.receiveShadow=!0,a.add(v);let _=new Gt,M=new Gt,E=new Gt,b=new T(0,1,0),y=new T(0,0,1),I=new T(-1.43,.805,-10.1),S=vo,C=!1,w=!1;function B(P){let F,H,O;if(P<5.8?F=.025+.075*(P/5.8)**2+.012*Math.sin(P*3)*Math.sin(Math.PI*P/5.8):P<7.2?F=.1+.6*ml((P-5.8)/1.4):F=.7+(CM-.7)*ml(P-7.2),H=P<7.2?.55*P+.055*P*P:6.8112+.37*ml(P-7.2),P<7.2)O=52*P-2.8*P*P;else{let V=Am(P-7.2);O=229.248+11.68*(V-V*V+V*V*V/3)}_.setFromAxisAngle(b,H),M.setFromAxisAngle(y,F),E.setFromAxisAngle(b,O),o.quaternion.copy(_).multiply(M).multiply(E);let L=Math.min(xl(gl,F),xl(pm,F)),G=.003+.009*ml((P-4)/3.2);o.position.set(-1.43+G*Math.cos(H),wM-L,-10.1+G*.7*Math.sin(H)),o.updateMatrixWorld(!0)}B(vo);let R=new it(new T(-1.59,.758,-10.24),new T(-1.27,.91,-9.96)),U=t({id:"child-spinning-top",label:()=>C?"Spin the wooden top again":"Spin the wooden top",point:I,reach:2.1,radius:.11,use:()=>{S=0,C=!0,w=!1,B(0),n({shadows:!0})}});return r(()=>C?R:null),n({shadows:!0}),{root:a,top:o,marbles:v,region:R,action:U,get active(){return C},get time(){return S},duration:vo,update(P){return C?(S=Math.min(vo,S+Math.max(0,P)),B(S),!w&&S>=7.65&&(w=!0,s?.cue?.("latch",.065,I)),S===vo&&(C=!1,n({shadows:!0})),!0):!1}}}var vo,wM,gl,pm,Am,ml,xl,Yh,jh,CM,gm=ut(()=>{gt();oi();vo=8.2,wM=.7602,gl=[[.006,.01],[.01,.016],[.02,.027],[.03,.038],[.036,.047],[.039,.055],[.038,.06],[.031,.067],[.016,.073],[.006,.077],[.0055,.097],[.008,.101],[.008,.104],[.005,.108],[0,.109]],pm=[[0,0],[.0015,.001],[.004,.011],[.006,.014]],Am=i=>Math.max(0,Math.min(1,i)),ml=i=>(i=Am(i),i*i*(3-2*i)),xl=(i,e)=>Math.min(...i.map(([t,n])=>Math.cos(e)*n-t*Math.sin(e))),Yh=Math.PI/2,jh=Math.PI;for(let i=0;i<40;i++){let e=(Yh+jh)/2;xl(gl.filter(t=>t[1]<.08),e)<xl(gl.filter(t=>t[1]>=.08),e)?Yh=e:jh=e}CM=(Yh+jh)/2});function TM(i,e){let t=new Map,n=e.cellMeters,s=e.toleranceMeters**2,r=(p,g,m)=>`${p}/${g}/${m}`,a=new it,o=new T;for(let p of e.triangles){let g=[0,1,2].map(A=>p.v.reduce((x,v)=>x+v[A],0)/3),m=r(...g.map(A=>Math.floor(A/n)));t.has(m)||t.set(m,[]),t.get(m).push(p);for(let A of p.v)a.expandByPoint(o.fromArray(A))}a.expandByScalar(e.toleranceMeters);function c(p){let g=[0,1,2].map(m=>Math.floor(p.reduce((A,x)=>A+x[m],0)/(3*n)));for(let m=-1;m<=1;m++)for(let A=-1;A<=1;A++)for(let x=-1;x<=1;x++)for(let v of t.get(r(g[0]+m,g[1]+A,g[2]+x))||[])if(p.every(_=>v.v.some(M=>_.reduce((E,b,y)=>E+(b-M[y])**2,0)<s)))return v;return null}let l=[],h=new it,d=new st,u={body:0,door:0,gasket:0,obsolete:0},f={};d.name="Preserved original refrigerator doors and note",i.updateMatrixWorld(!0),i.traverseVisible(p=>{!p.isMesh||p.isInstancedMesh||!p.geometry.attributes.position||(p.geometry.boundingBox||p.geometry.computeBoundingBox(),h.copy(p.geometry.boundingBox).applyMatrix4(p.matrixWorld).intersectsBox(a)&&l.push(p))});for(let p of l){let g=p.geometry,m=g.attributes.position,A=g.index?.array,x=A?.length??m.count,v=new Set,_=[],M=a.clone().applyMatrix4(p.matrixWorld.clone().invert()),E=M.min,b=M.max,y=S=>{let C=m.getX(S),w=m.getY(S),B=m.getZ(S);return C>=E.x&&C<=b.x&&w>=E.y&&w<=b.y&&B>=E.z&&B<=b.z};for(let S=0;S<x;S+=3){let C=[A?A[S]:S,A?A[S+1]:S+1,A?A[S+2]:S+2];if(!C.every(y))continue;let w=C.map(U=>o.fromBufferAttribute(m,U).applyMatrix4(p.matrixWorld).toArray()),B=c(w);if(!B)continue;let R=B.part;f[B.object]=(f[B.object]??0)+1,u[R]++,v.add(S),R==="door"&&_.push(...C)}if(!v.size)continue;if(_.length){let S=new lt,C=new T,w=new rt().getNormalMatrix(p.matrixWorld);for(let[R,U]of Object.entries(g.attributes)){let P=new Float32Array(_.length*U.itemSize);for(let F=0;F<_.length;F++){let H=_[F];if(R==="position")P.set(o.fromBufferAttribute(U,H).applyMatrix4(p.matrixWorld).toArray(),F*3);else if(R==="normal")P.set(C.fromBufferAttribute(U,H).applyMatrix3(w).normalize().toArray(),F*3);else for(let O=0;O<U.itemSize;O++)P[F*U.itemSize+O]=U.getComponent(H,O)}S.setAttribute(R,new St(P,U.itemSize))}let B=new Qe(S,p.material);B.name="Original refrigerator exterior / "+p.material.name,B.castShadow=!0,B.receiveShadow=!0,d.add(B)}let I=[];for(let S=0;S<x;S+=3)v.has(S)||I.push(A?A[S]:S,A?A[S+1]:S+1,A?A[S+2]:S+2);g.setIndex(I),g.computeBoundingBox(),g.computeBoundingSphere()}for(let[p,g]of Object.entries(e.expected))if(u[p]!==g)throw Error(`Refrigerator source mismatch: ${p} ${u[p]}/${g} ${JSON.stringify(f)}`);return{door:d,counts:u}}function IM(i,e,t){i.updateMatrixWorld(!0);let n=new Map,s=[];i.traverse(a=>{a.isMesh&&s.push(a)});for(let a of s){let o=a.parent,c=!1;for(;o;){if(o===e){c=!0;break}o=o.parent}let l=c?e:i,h=a.geometry.clone();for(let u of["position","normal","uv"]){let f=h.attributes[u];if(!f)continue;let p=new Float32Array(f.count*f.itemSize);for(let g=0;g<f.count;g++)for(let m=0;m<f.itemSize;m++)p[g*f.itemSize+m]=f.getComponent(g,m);h.setAttribute(u,new St(p,f.itemSize))}h.applyMatrix4(a.matrixWorld).applyMatrix4(l.matrixWorld.clone().invert());for(let u of Object.keys(h.attributes))["position","normal","uv"].includes(u)||h.deleteAttribute(u);h.attributes.uv||h.setAttribute("uv",new St(new Float32Array(h.attributes.position.count*2),2));let d=(c?"moving/":"static/")+a.material.uuid;n.has(d)||n.set(d,{target:l,material:a.material,parts:[]}),n.get(d).parts.push(h.index?h.toNonIndexed():h),a.removeFromParent()}let r=[];for(let{target:a,material:o,parts:c}of n.values()){t.patch(o,{plainMap:!0}),o.name.includes("shielded warm interior lamp")&&(o.emissive.setHex(16764808),o.emissiveIntensity=0,r.push(o));let l=ln(c,!1);for(let d of c)d.dispose();let h=new Qe(l,o);h.name="Refrigerator "+o.name,h.castShadow=!0,h.receiveShadow=!0,a.add(h)}return{bulbs:r,batches:n.size}}async function xm({scene:i,loader:e,light:t,register:n,dirty:s,audio:r}){let[a,o]=await Promise.all([e.loadAsync("assets/interactive-fridge.glb"),fetch("assets/fridge-source.json").then(P=>{if(!P.ok)throw Error("Refrigerator source geometry "+P.status);return P.json()})]),c=a.scene;c.name="Operable stocked seafoam refrigerator";let l=c.getObjectByName(Bt.sanitizeNodeName("Refrigerator original door hinge"))??c.getObjectByName("Refrigerator original door hinge");if(!l)throw Error("Refrigerator door hinge missing");let{door:h,counts:d}=TM(i,o),{bulbs:u,batches:f}=IM(c,l,t);i.add(c),i.updateMatrixWorld(!0),l.attach(h);let p=new Kn(16764808,0,.7,2);p.name="Shielded refrigerator interior light",p.position.set(-8.265,1.18,-3.77),c.add(p),t.addLocalEmitter?.(p);let g=l.quaternion.clone(),m=new T(0,1,0),A=new Gt,x=new it,v=new T(-7.775,1.22,-3.75);l.worldToLocal(v);let _=new it,M=new it,E=new Be,b=new Be,y=new T,I=new T;l.updateWorldMatrix(!0,!0),E.copy(l.matrixWorld).invert(),l.traverse(P=>{P.isMesh&&(P.geometry.boundingBox||P.geometry.computeBoundingBox(),b.copy(E).multiply(P.matrixWorld),_.union(M.copy(P.geometry.boundingBox).applyMatrix4(b)))});function S(){l.updateWorldMatrix(!0,!0),x.copy(_).applyMatrix4(l.matrixWorld),E.copy(l.matrixWorld).invert()}S();let C=!1,w=0,B=!1,R={id:"kitchen-refrigerator",label:()=>C?"Close refrigerator":"Open refrigerator",point:()=>l.localToWorld(I.copy(v)),reach:2.25,radius:.19,bounds:()=>x,clearance:(P,F)=>{y.set(P,0,F).applyMatrix4(E);let H=Ye.clamp(y.x,_.min.x,_.max.x),O=Ye.clamp(y.z,_.min.z,_.max.z);return(y.x-H)**2+(y.z-O)**2},use:()=>{C=!C,r?.cue("latch",.28,R.point()),s({shadows:!0})}};n(R);let U={source:d,batches:f,sourceObjects:o.sourceObjects,stocked:!0};return c.userData.refrigerator=U,{root:c,hinge:l,stats:U,action:R,update(P){let F=C?1:0,H=Math.abs(F-w)>4e-4;if(H?w=Ye.damp(w,F,4.5,Math.min(P,.1)):w=F,!H&&!B)return!1;l.quaternion.copy(g).multiply(A.setFromAxisAngle(m,-1.745329252*w)),S();let O=Ye.smoothstep(w,.015,.12);p.intensity=O*.9;for(let L of u)L.emissiveIntensity=O*2.2;return B=H,s({reflections:!1}),!0}}}var _m=ut(()=>{gt();oi()});async function bm({scene:i,light:e,register:t,dirty:n=()=>{},animateRegion:s=()=>{}}){let r=await Promise.all(["cover","spread-1","spread-2","spread-3","spread-4"].map(async z=>{let K=await new fn().loadAsync(`assets/journal-${z}.webp`);return K.colorSpace=ht,K.anisotropy=4,K})),a=new st;a.name="Form and Sun \u2014 original Autumn 1958 journal",a.position.set(.356,.138,-2.58),a.scale.set(.93,1,.93),a.rotation.y=Math.PI,i.add(a);let o=.205,c=.28,l=.006,h=[],d=(z,K,j=Ln)=>{let ce=new at({name:z,map:K??null,color:16777215,roughness:.88,side:j});return e.patch(ce,{plainMap:!0}),ce},u=d("Journal warm cut paper edges");u.color.set(14274487);let f=d("Journal left printed page",r[1]),p=d("Journal right printed page",r[1]),g=d("Journal turning printed recto",r[0]),m=d("Journal turning printed verso",r[1],Zt),A=(z,K,j)=>{let ce=new Qe(z,K);return ce.name=j,ce.castShadow=!0,ce.receiveShadow=!0,a.add(ce),ce};A(new Nt(o,.005,c),u,"Journal bound paper block").position.set(o/2,.0025,0);let v=A(new Nt(o,.0025,c),u,"Journal turned paper stack");v.position.set(-o/2,.00125,0);function _(z=!1,K=!1){let j=[],ce=[],ae=[];for(let fe=0;fe<=1;fe++)for(let Re=0;Re<=20;Re++){let Se=Re/20,te=z?-o+Se*o:Se*o;j.push(te,l,-c/2+fe*c),ce.push(K?.5*(1-Se):z?Se*.5:.5+Se*.5,1-fe)}for(let fe=0;fe<20;fe++){let Re=fe,Se=fe+1,te=21+fe,xe=te+1;ae.push(Re,te,Se,Se,te,xe)}let me=new lt;return me.setAttribute("position",new Ke(j,3)),me.setAttribute("uv",new Ke(ce,2)),me.setIndex(ae),me.computeVertexNormals(),me}let M=A(_(!0),f,"Journal left open printed page"),E=A(_(),p,"Journal right open printed page"),b=new st;b.name="Journal turning leaf hinge",b.position.y=l+5e-4,a.add(b);let y=_(),I=_(!1,!0);for(let z of[y,I]){let K=z.attributes.position;for(let j=0;j<K.count;j++)K.setY(j,0)}let S=new Qe(y,g),C=new Qe(I,m);S.name="Journal turning leaf recto",C.name="Journal turning leaf verso";for(let z of[S,C])z.castShadow=!0,z.receiveShadow=!0,b.add(z);let w=(z,K=!1,j=!1)=>{let ce=z.attributes.uv;for(let ae=0;ae<=1;ae++)for(let ee=0;ee<=20;ee++)ce.setXY(ae*21+ee,K?ee/20:j?.5*(1-ee/20):.5+ee/40,1-ae);ce.needsUpdate=!0},B=!1,R=0,U=null,P=()=>globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1;function F(){for(let z of[y,I]){let K=z.attributes.position;for(let j=0;j<K.count;j++)K.setY(j,0);K.needsUpdate=!0,z.computeVertexNormals(),z.computeBoundingBox(),z.computeBoundingSphere()}M.visible=v.visible=B,E.visible=B,b.visible=!B,b.rotation.z=0,g.map=r[0],m.map=r[1],w(y,!0),w(I,!1,!0),f.map=p.map=r[R+1]}function H(){U.kind==="open"?(B=!0,R=0):U.kind==="close"?(B=!1,R=0):R=U.next,U=null,F(),n({shadows:!0})}function O(z){if(U)return;let K=(R+1)%4;U={kind:z,next:K,t:0},b.visible=!0,E.visible=!0,M.visible=v.visible=B,g.map=z==="page"?r[R+1]:r[0],m.map=z==="page"?r[K+1]:r[R+1],w(y,z!=="page"),w(I,!1,!0),z==="page"&&(p.map=r[K+1]),z==="open"&&(p.map=r[1]),b.rotation.z=z==="close"?Math.PI:0,n({shadows:!0}),P()&&H()}F();let L=new T(.356,.15,-2.58),G=new T(.221,.15,-2.58),V=new T(.496,.15,-2.58);for(let z of[{id:"journal-open",label:()=>"Open and read Form & Sun",point:L,enabled:()=>!B&&!U,use:()=>O("open"),radius:.13},{id:"journal-page",label:()=>R===3?"Turn page \xB7 return to first spread":`Turn page \xB7 ${R+1} of 4`,point:G,enabled:()=>B&&!U,use:()=>O("page"),radius:.09},{id:"journal-close",label:()=>"Close the journal",point:V,enabled:()=>B&&!U,use:()=>O("close"),radius:.065}])z.reach=2.25,h.push(t(z));let X=new it(new T(.15,.13,-2.72),new T(.56,.37,-2.44));return s(()=>U?X:null),n({shadows:!0}),{root:a,actions:h,region:X,get opened(){return B},get page(){return R},get moving(){return!!U},update(z){if(!U)return!1;if(P())return H(),!0;U.t=Math.min(1,U.t+Math.max(0,z)/.62);let K=U.t,j=K*K*(3-2*K),ce=U.kind==="close"?Math.PI*(1-j):Math.PI*j;b.rotation.z=ce;for(let ae of[y,I]){let ee=ae.attributes.position;for(let me=0;me<=1;me++)for(let fe=0;fe<=20;fe++){let Re=fe/20;ee.setY(me*21+fe,.012*Math.sin(Math.PI*K)*Math.sin(Math.PI*Re))}ee.needsUpdate=!0,ae.computeVertexNormals(),ae.computeBoundingBox(),ae.computeBoundingSphere()}return n({reflections:!1}),K===1&&H(),!0}}}var vm=ut(()=>{gt()});function Mm({root:i,light:e,register:t,dirty:n,audio:s,camera:r,accessible:a,doors:o}){let c=new st;c.name="Working AM radio and courtesy lamp",i.add(c);let l=(ee,me,fe=.4,Re=0)=>e.patch(new at({name:ee,color:me,roughness:fe,metalness:Re}),{plainMap:!0}),h=l("Radio machined chrome",12502463,.22,.85),d=l("Radio black bakelite",1514520,.44),u=l("Radio aged ivory",14273960,.5);function f(ee,me,fe,Re,Se,te,xe,_e){let be=new Qe(new Nt(Se,te,xe),_e);return be.name=ee,be.position.set(me,fe,Re),c.add(be),be}f("Radio chrome escutcheon",12.45,1.146,-4.812,.284,.062,.012,h);let p=document.createElement("canvas");p.width=1024,p.height=192;let g=p.getContext("2d");g.fillStyle="#17241e",g.fillRect(0,0,1024,192),g.strokeStyle="#d5caa1",g.fillStyle="#e5d5a6",g.lineWidth=3,g.textAlign="center",g.font="34px Georgia";for(let ee=550;ee<=1600;ee+=50){let me=42+(ee-ci)/(Aa-ci)*940;g.beginPath(),g.moveTo(me,111),g.lineTo(me,ee%100===0?134:124),g.stroke()}for(let ee of[550,700,900,1200,1600])g.fillText(String(ee/10),42+(ee-ci)/(Aa-ci)*940,88);g.font="18px Georgia",g.fillText("A M P L I T U D E   M O D U L A T I O N",512,171);let m=new si(p);m.colorSpace=ht,m.anisotropy=4;let A=l("Backlit AM glass scale",16777215,.28);A.map=m,A.emissiveMap=m,A.emissive.set(15185515),A.emissiveIntensity=0,f("Readable AM dial glass",12.45,1.146,-4.803,.268,.049,.003,A);let x=f("Moving amber AM tuning needle",12.45,1.148,-4.799,.0014,.041,.001,l("AM tuning needle",16170082,.32)),v=[];for(let[ee,me]of[[12.28,"Radio power and volume knob"],[12.62,"Radio tuning knob"]]){let fe=new st;fe.name=me,fe.position.set(ee,1.132,-4.806),c.add(fe);let Re=new Qe(new Qt(.024,.026,.025,32),h);Re.rotation.x=Math.PI/2,fe.add(Re);let Se=new Qe(new Qt(.02,.02,.002,32),d);Se.rotation.x=Math.PI/2,Se.position.z=.014,fe.add(Se);let te=new Qe(new Nt(.0023,.012,.002),u);te.position.set(0,.01,.016),fe.add(te),v.push(fe)}f("Recessed dashboard mono speaker",12.49,1.245,-5.015,.205,.008,.205,d);for(let ee=0;ee<13;ee++)f("Speaker grille bright rib "+ee,12.397+ee*.0155,1.251,-5.015,.004,.003,.197,h);for(let ee of[12.397,12.583])for(let me of[-4.925,-5.105]){let fe=new Qe(new Hn(.003,8,4),h);fe.position.set(ee,1.254,me),c.add(fe)}let _=f("Chrome cabin courtesy lamp surround",12.35,1.744,-3.96,.155,.018,.085,h),M=l("Courtesy lamp ribbed ivory lens",14997421,.4);M.emissive.set(16766103),M.emissiveIntensity=0,f("Courtesy lamp opal lens",12.35,1.731,-3.96,.132,.015,.064,M);for(let ee=0;ee<9;ee++)f("Courtesy lens molded prism "+ee,12.294+ee*.014,1.722,-3.96,.002,.003,.059,u);let E=new Kn(16761985,0,1.65,2);E.name="Door operated cabin courtesy light",E.position.set(12.35,1.69,-3.96),c.add(E),e.addLocalEmitter?.(E);let b=740,y=740,I=!1,S=.6,C=0,w=0,B=null,R=!1,U=new T(12.49,1.25,-5.015),P=new T,F=new T,H=new T(0,1,0);function O(ee){let me=null,fe=0;for(let Re of ym){let Se=Math.exp(-(((ee-Re.frequency)/17)**2));Se>fe&&(fe=Se,me=Re)}return{station:fe>.1?me:null,strength:fe}}function L(ee){y=Zh(ee,ci,Aa),n({reflections:!1})}function G(){I=!I,s?.cue("switch",.2,U),n({reflections:!1})}function V(){S=S<.4?.6:S<.8?1:.25,s?.cue("switch",.1,U),n({reflections:!1})}let X=()=>`${Math.round(y)} kHz \xB7 ${O(y).station?.name??"between stations"}`,z=()=>a();t({id:"car-radio-power",enabled:z,label:()=>`${I?"Switch off":"Switch on"} AM radio`,point:new T(12.28,1.132,-4.77),radius:.065,reach:1.7,use:G}),t({id:"car-radio-volume",enabled:()=>z()&&I,label:()=>`Turn radio volume \xB7 ${S<.4?"low":S<.8?"medium":"high"}`,point:new T(12.28,1.22,-4.77),radius:.025,priority:.1,reach:1.7,use:V});for(let[ee,me,fe]of[[-1,"lower",12.565],[1,"higher",12.675]])t({id:"car-radio-tune-"+me,enabled:z,label:()=>`Tune ${me} \xB7 ${X()}`,point:new T(fe,1.132,-4.77),radius:.035,reach:1.7,use:()=>L(y+ee*20)});let K=new Mn(new T(0,0,1),4.796),j=new T;t({id:"car-radio-dial",enabled:z,label:()=>`Tune AM dial \xB7 ${X()}`,point:new T(12.45,1.146,-4.796),reach:1.7,hitTest:ee=>!ee.ray.intersectPlane(K,j)||j.x<12.316||j.x>12.584||Math.abs(j.y-1.146)>.027?null:{point:j.clone(),distance:ee.ray.origin.distanceTo(j)},use:ee=>L(Math.round((ci+Zh((ee.x-12.324)/.25,0,1)*(Aa-ci))/10)*10)});function ce(){let ee=s?.output();if(!ee||B||R)return;let{context:me,destination:fe}=ee,Re=me.createBiquadFilter(),Se=me.createBiquadFilter(),te=me.createGain(),xe=me.createStereoPanner();Re.type="highpass",Re.frequency.value=180,Se.type="lowpass",Se.frequency.value=3400,te.gain.value=0,Re.connect(Se),Se.connect(te),te.connect(xe),xe.connect(fe);let _e=me.createBuffer(1,me.sampleRate*3,me.sampleRate),be=_e.getChannelData(0),Ee=1958;for(let Oe=0;Oe<be.length;Oe++)Ee=1664525*Ee+1013904223>>>0,be[Oe]=(Ee/2147483648-1)*.55;let le=me.createBufferSource(),ve=me.createGain();le.buffer=_e,le.loop=!0,ve.gain.value=.2,le.connect(ve),ve.connect(Re),le.start();let Le=ym.map(Oe=>{let ze=me.createGain();return ze.gain.value=0,ze.connect(Re),{station:Oe,gain:ze,loaded:!1}});B={context:me,gain:te,pan:xe,low:Se,hissGain:ve,channels:Le};for(let Oe of Le)fetch("assets/"+Oe.station.file).then(ze=>{if(!ze.ok)throw Error("Radio programme unavailable");return ze.arrayBuffer()}).then(ze=>me.decodeAudioData(ze)).then(ze=>{let Q=me.createBufferSource();Q.buffer=ze,Q.loop=!0,Q.connect(Oe.gain),Q.start(0,me.currentTime%ze.duration),Oe.loaded=!0}).catch(()=>{R=!0})}function ae(ee){ce();let me=b;b=Ye.damp(b,y,14,ee),C=Ye.damp(C,I?1:0,I?1.5:12,ee),v[0].rotation.z=Ye.damp(v[0].rotation.z,I?-.4-S*1.5:.5,14,ee),v[1].rotation.z=-(b-ci)/(Aa-ci)*Math.PI*5.2,x.position.x=12.324+(b-ci)/(Aa-ci)*.25,A.emissiveIntensity=C*.72;let fe=o.some(xe=>Math.abs(xe.angle)>.045),Re=Ye.damp(w,fe?1:0,fe?22:14,ee),Se=Math.abs(Re-w)>3e-4;if(w=Re,E.intensity=.48*w,M.emissiveIntensity=1.8*w,B&&r){let{context:xe}=B,_e=xe.currentTime,be=O(b).strength;for(let Oe of B.channels){let ze=Math.exp(-(((b-Oe.station.frequency)/17)**2));Oe.gain.gain.setTargetAtTime(ze*.9,_e,.045)}B.hissGain.gain.setTargetAtTime(.012+(1-be)*.34,_e,.035);let Ee=r.position.distanceTo(U),le=!a(),ve=1/(1+Math.max(0,Ee-.4)**2*.65),Le=le&&!fe?.3:1;B.gain.gain.setTargetAtTime(C*C*S*ve*Le*(1-(s?.immersed??0)*.85),_e,.07),r.getWorldDirection(P),F.crossVectors(P,H).normalize(),P.subVectors(U,r.position),B.pan.pan.setTargetAtTime(Zh(F.dot(P)/Math.max(1,Ee),-.92,.92),_e,.08),B.low.frequency.setTargetAtTime(le&&!fe?1600:3400,_e,.08)}let te=Math.abs(me-b)>5e-4||Se||Math.abs(C-(I?1:0))>.001;return te&&n({reflections:!1}),te}return{update:ae,toggle:G,tune:L,turnVolume:V,needle:x,knobs:v,courtesy:E,lens:M,lampBody:_,get state(){return{power:I,volume:S,frequency:b,targetFrequency:y,station:O(b).station?.name??null,signal:O(b).strength,courtesy:w,ready:!!B,loaded:B?.channels.map(ee=>ee.loaded)??[],failed:R}}}}var ci,Aa,ym,Zh,Em=ut(()=>{gt();ci=540,Aa=1600,ym=[{frequency:740,name:"Arroyo weather",file:"radio-weather-original.ogg"},{frequency:1200,name:"Twilight instrumental",file:"radio-music-original.ogg"}],Zh=Ye.clamp});async function Sm({scene:i,light:e,register:t,loader:n,windows:s,dirty:r=()=>{},visitor:a=()=>null,seatedDriver:o=()=>!1,audio:c,camera:l}){let d=(await n.loadAsync("assets/car-interactive.glb")).scene;d.name="Interactive original period hardtop";let u=i.getObjectByName("Original 1957 hardtop refined coachwork");if(u&&(u.visible=!1,s))for(let C=s.length-1;C>=0;C--){let w=s[C];for(;w&&w!==u;)w=w.parent;w===u&&s.splice(C,1)}let f=new Set,p=[],g=new Set,m=new Set,A=new Set,x=["left","right"].map((C,w)=>{let B=w===0?-1:1,R=new st;return R.name="Car "+C+" front hinge",R.position.set(12.35+B*.98,.8,-5),d.add(R),{side:C,sign:B,pivot:R,angle:0,target:0,box:new it,handle:new T(12.35+B*1.03,.963,-3.73),point:new T}}),v=0,_=0;d.updateMatrixWorld(!0);let M=[];d.traverse(C=>{C.isMesh&&M.push(C)});for(let C of M){_++,v+=(C.geometry.index?.count??C.geometry.attributes.position.count)/3;let w=C.material,B=w.name==="Coachwork curved safety glass"||w.name==="car-glass";f.has(w)||(f.add(w),B?(w.name="car-glass",w.transmission=0,w.thickness=0,w.transparent=!0,w.opacity=.22,w.depthWrite=!1,w.side=Lt,w.envMapIntensity=1.05,w.roughness=.1,w.metalness=.08,"clearcoat"in w&&(w.clearcoat=1,w.clearcoatRoughness=.1),e.patch(w,{plainMap:!0,glass:!0})):e.patch(w,{plainMap:!0})),C.castShadow=!B,C.receiveShadow=!B,B&&(C.renderOrder=3,C.userData.carGlass=!0,p.push(C)),w.name==="Coachwork headlamp optics"&&g.add(w),w.name==="Coachwork ruby prismatic tail lens"&&m.add(w),w.name==="Coachwork amber turn signal lens"&&A.add(w);let R=x.find(U=>C.name.startsWith("door-"+U.side));R&&R.pivot.attach(C)}if(x.some(C=>C.pivot.children.length<7))throw new Error("Interactive coachwork is missing isolated door finishes");i.add(d),s&&s.push(...p),d.updateMatrixWorld(!0);let E=[];for(let C of[11.592,13.108]){let w=new ks(16768432,0,15,.4,.55,2);w.name="Car sealed beam headlight",w.position.set(C,.883,-6.58),w.target.position.set(C,.25,-14.5),w.castShadow=!1,d.add(w,w.target),E.push(w),e.addLocalEmitter?.(w)}let b=!1;function y(){b=!b;for(let C of E)C.intensity=b?38:0;for(let C of g)C.emissive.set(16768940),C.emissiveIntensity=b?3:0;for(let C of m)C.emissive.set(16720912),C.emissiveIntensity=b?1.7:0;for(let C of A)C.emissive.set(16755254),C.emissiveIntensity=b?.8:0;r({shadows:!1})}function I(C,w,B,R){let U=C-B.pivot.position.x,P=w-B.pivot.position.z,F=Math.sin(R),H=Math.cos(R),O=Ye.clamp(U*F+P*H,0,1.46);return(U-O*F)**2+(P-O*H)**2}for(let C of x)C.box.setFromObject(C.pivot),t({id:"car-door-"+C.side,label:()=>`${C.target?"Close":"Open"} ${C.side==="left"?"driver":"passenger"} door`,point:()=>C.pivot.localToWorld(C.point.copy(C.handle).sub(C.pivot.position)),reach:2.35,use:()=>{C.target=C.target?0:C.sign*1.12,r({shadows:!0})},bounds:()=>C.box,clearance:(w,B)=>I(w,B,C,C.angle)});t({id:"car-headlights",label:()=>`${b?"Switch off":"Switch on"} headlights`,point:new T(12.35,.883,-6.61),reach:2.6,use:y}),t({id:"car-dash-headlights",enabled:()=>o()||Math.abs(x[0].angle)>.68,label:()=>`${b?"Switch off":"Switch on"} headlights`,point:new T(11.69,1.13,-4.82),reach:1.65,use:y});let S=Mm({root:d,light:e,register:t,dirty:r,audio:c,camera:l,doors:x,accessible:()=>o()||x.some(C=>Math.abs(C.angle)>.68)});return r({shadows:!0}),{root:d,doors:x,beams:E,glazing:p,draws:_,triangles:v,radio:S,get headlights(){return b},update(C){let w=!1;for(let B of x){let R=B.target-B.angle;if(Math.abs(R)<1e-4)continue;let U=Math.min(Math.abs(R),Math.max(0,C)*1.45),P=B.angle+Math.sign(R)*U,F=a();if(F){let H=I(F.x,F.z,B,B.angle),O=I(F.x,F.z,B,P);if(O<.27*.27&&O<H-1e-8)continue}B.angle=P,B.pivot.rotation.y=P,B.pivot.updateMatrixWorld(!0),B.box.setFromObject(B.pivot),w=!0}return w&&r({reflections:!1}),S.update(C)||w}}}var wm=ut(()=>{gt();Em()});function Cm(i,e,t,n,s,r,a){let o={value:0},c={value:0},l={value:0},h=`
    varying vec2 tex;varying vec3 world,outward;
    void main(){tex=uv;vec4 p=modelMatrix*vec4(position,1.);world=p.xyz;
      outward=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*viewMatrix*p;}`,d=(g,m)=>new Ut({name:g,transparent:!0,depthWrite:!1,uniforms:{clock:o,amount:c,dark:l},vertexShader:h,fragmentShader:`uniform float clock,amount,dark;varying vec2 tex;varying vec3 world,outward;
      void main(){${m}
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),u=new Qe(new Qt(.0061,.0047,n-s,20,8,!0),d("Clear water leaving the spout",`
    vec3 n=normalize(outward);
    float edge=1.-abs(dot(normalize(cameraPosition-world),n));
    float streak=.5+.5*sin(tex.x*25.13+1.2*sin(tex.y*10.-clock*5.3)+tex.y*7.);
    float core=(1.-smoothstep(.48,.98,tex.y))*(.5+.5*sin(tex.y*72.-clock*16.+streak*2.));
    float highlight=pow(streak,10.)*.34+.40*pow(edge,3.);
    gl_FragColor=vec4(mix(vec3(.086,.10,.096),vec3(.68,.74,.72),highlight+core*.16)*mix(1.,.35,dark),.19+highlight*.43+core*.13);`));u.position.set(e,(n+s)*.5,t),u.renderOrder=3,i.add(u);let f=new Qe(new as(1,48),d("Thin moving film over the drain",`
    vec2 p=(tex-.5)*2.;float a=atan(p.y,p.x);
    float r=length(p)*(1.+.034*sin(a*3.+clock*.46)+.026*sin(a*5.-clock*.6));
    float fade=1.-smoothstep(.42,.99,r);if(fade<.002)discard;
    float phase=r*23.-clock*5.3+.56*sin(a*3.-r*4.);
    float crest=smoothstep(.80,.995,cos(phase))*smoothstep(.13,.26,r);
    float spark=.5+.5*sin(a*4.5+1.2*sin(a*2.-clock*.5));
    float foam=exp(-r*r*170.)*(.55+.36*sin(clock*8.+r*55.));
    vec3 reflection=mix(vec3(.09,.12,.105),vec3(.64,.70,.67),crest*spark*.68+foam*.28);
    float alpha=(.036+crest*spark*.20+foam*.30)*fade*amount;
    gl_FragColor=vec4(reflection*mix(1.,.4,dark),alpha);`));f.rotation.x=-Math.PI/2,f.position.set(e,s+.009,t),f.scale.set(r,a,1),f.renderOrder=4,i.add(f);let p=0;return(g,m,A=0)=>{let x=p;return p=Ye.clamp(p+g*(m?1.9:-1.25),0,1),i.visible=m||p>0,u.visible=m,o.value+=g,c.value=p,l.value=A,f.scale.set(r*(.47+.53*p),a*(.47+.53*p),1),x!==p}}var Tm=ut(()=>{gt()});function Im({scene:i,light:e,register:t,dirty:n=()=>{},audio:s,disc:r,arm:a,animateRegion:o=()=>{}}){i.traverse(K=>{/After.*Rain.*sleeve/i.test(K.name)&&(K.visible=!1,K.userData.retiredDecoration=!0)});let c=new st;c.name="Mesa Records \xB7 original 1958 collection",i.add(c);let l=[],h=[],d=[],u=new at({name:"LP sleeve folded cream card",color:14207921,roughness:.91});e.patch(u,{plainMap:!0});let f=new fn,p=K=>{let j=f.load(K,()=>n({reflections:!0}));return j.colorSpace=ht,j.anisotropy=4,d.push(j),j},g=(K,j,ce,ae)=>{let ee=new Qe(j,ce);return ee.name=ae,ee.castShadow=ee.receiveShadow=!0,ee.userData.householdPart=!0,K.add(ee),ee},m=new Vn(.312,.312);for(let[K,j]of qn.entries()){let ce=new st;ce.name=j.title+" \xB7 folded 12 inch illustrated sleeve";let ae=new T(6.66+K*.342,.902,-10.4);ce.position.copy(ae),ce.rotation.x=-.1,ce.userData={recordId:j.id,home:ae,householdPart:!0},c.add(ce),g(ce,new Nt(.316,.316,.004),u,"Card sleeve with open right edge");let ee=new at({name:j.title+" \xB7 original period illustration",map:p("assets/records/"+j.id+"-sleeve.webp"),roughness:.91});e.patch(ee,{plainMap:!0});let me=g(ce,m,ee,j.title+" \xB7 illustrated cover");me.position.z=.0022;let fe=g(ce,m,u,"Uncoated cream sleeve back");fe.rotation.y=Math.PI,fe.position.z=-.0022;let Re=new at({name:"LP sleeve opening shadow",color:4998457,roughness:1});e.patch(Re,{plainMap:!0});let Se=g(ce,new Nt(8e-4,.3,.0022),Re,"Sleeve open mouth");Se.position.x=.158,h.push(ce)}let A=new at({name:"Record rack walnut rail",color:6439727,roughness:.55});e.patch(A,{plainMap:!0});for(let K of[-10.27,-10.56])g(c,new Nt(1.04,.021,.025),A,"Low record display rail").position.set(7,.75,K);for(let K of r.children)K.visible=!1;let x=new Xt({name:"Fine cut black vinyl",map:p("assets/records/vinyl-microgrooves.png"),roughness:.46,metalness:0,specularIntensity:.35});e.patch(x,{plainMap:!0}),g(r,new Qt(.168,.168,.003,128),x,"Smooth 12 inch vinyl with antialiased microgrooves");let v=new at({name:"Selected LP paper label",roughness:.9});e.patch(v,{plainMap:!0});let _=g(r,new as(.049,64),v,"Mesa Records \xB7 side label");_.rotation.x=-Math.PI/2,_.position.y=.0021;let M=v.clone();e.patch(M,{plainMap:!0});let E=g(r,new as(.049,64),M,"Mesa Records \xB7 reverse side label");E.rotation.x=Math.PI/2,E.position.y=-.0021;let b=qn.map(K=>[0,1].map(j=>p(`assets/records/${K.id}-label-${j+1}.webp`))),y=new at({name:"Tonearm polished stylus cantilever",color:13027778,metalness:.85,roughness:.23});e.patch(y,{plainMap:!0});let I=g(a,new Qt(7e-4,7e-4,.01,6),y,"Visible cartridge cantilever and stylus");I.position.set(-.05,-.012,.34),I.rotation.x=.35;let S=new Rn({color:16754501,toneMapped:!1}),C=g(c,new Qt(.006,.006,.005,12),S,"Amplifier amber record pilot");C.position.set(6.45,.83,-10.177),C.rotation.x=Math.PI/2;let w=0,B=0,R=!0,U=0,P=null,F=0,H=-.64;a.rotation.y=H,h[0].position.copy(yo);function O(){w<0||(v.map=b[w][0],v.needsUpdate=!0,M.map=b[w][1],M.needsUpdate=!0,r.userData.record=qn[w].id,r.userData.side=B?"B":"A")}function L(){s.setLayer("record",0);let K=qn[w];s.setRecord?.({url:K?`assets/records/${K.id}-${B+1}.ogg`:null,playing:R&&!!K,offset:U}),C.visible=R}function G(){R=!1,L()}function V(K,j=w){P||(G(),P={kind:K,next:j,t:0,old:w,fromSide:B},n({shadows:!0}))}let X=K=>l.push(t({reach:2.05,...K,use(){K.use(),n({shadows:!0})}}));for(let[K,j]of qn.entries()){let ce=new T;X({id:"record-select-"+j.id,label:()=>`Choose ${j.title} \xB7 ${j.artist}`,point:()=>h[K].getWorldPosition(ce),radius:.12,enabled:()=>!P&&w!==K,use:()=>V("choose",K)})}X({id:"record-player",label:()=>R?"Lift tonearm \xB7 pause record":`Lower tonearm \xB7 ${qn[w]?.sides[B]??"play record"}`,point:new T(5.5,.93,-10.22),radius:.07,enabled:()=>w>=0&&!P,use(){R?G():(U>=bl(qn[w],B)&&(U=0),R=!0,L())}}),X({id:"record-flip",label:()=>`Turn record over \xB7 side ${B?"A":"B"} \xB7 ${qn[w]?.sides[1-B]??""}`,point:new T(5.13,.905,-10.4),radius:.072,enabled:()=>w>=0&&!P,use:()=>V("flip")}),X({id:"record-return",label:()=>`Put ${qn[w]?.title??"record"} back in its sleeve`,point:yo.clone().add(new T(0,.025,.016)),radius:.11,enabled:()=>w>=0&&!P,use:()=>V("return")});let z=new it(new T(4.2,.73,-10.64),new T(7.56,1.45,-10.1));return o(()=>R||P||Math.abs(a.rotation.y-H)>.001?z:null),O(),L(),{root:c,actions:l,sleeves:h,disc:r,arm:a,get selected(){return w},get side(){return B},get playing(){return R},get elapsed(){return U},get moving(){return!!P},get title(){return w<0?null:qn[w].title},update(K){K=Math.max(0,Math.min(K,.1));let j=!1;if(R){let ce=s.recordTime?.();s.recordTime?ce!==null&&(U=ce):U+=K,F-=K*Math.PI*2*33.333/60,U>=bl(qn[w],B)&&(U=bl(qn[w],B),G())}if(H=R?Ye.lerp(-.64,-.84,U/bl(qn[w],B)):0,Math.abs(a.rotation.y-H)>3e-4){let ce=Math.abs(a.rotation.y-H)>.008;a.rotation.y=Ye.damp(a.rotation.y,H,7,K),j=ce}else a.rotation.y=H;if(P){P.t=Math.min(1,P.t+K/(P.kind==="flip"?1.25:2.1));let ce=P.t;if(r.rotation.set(B*Math.PI,F,0),r.position.copy(_l),r.visible=!0,P.kind==="flip")r.position.y+=.15*Math.sin(Math.PI*ce),r.rotation.x=Math.PI*(P.fromSide+Mo(ce)),ce>=.5&&B===P.fromSide&&(B=1-B,U=0,O());else{let ae=P.old>=0?h[P.old]:null,ee=P.kind==="choose"?h[P.next]:null;if(ae&&ae.position.lerpVectors(yo,ae.userData.home,Mo((ce-.28)/.48)),ee&&ee.position.lerpVectors(ee.userData.home,yo,Mo((ce-.32)/.64)),ce<.34&&ae){let me=Mo(ce/.34);r.position.lerpVectors(_l,yo,me),r.position.z+=.018*me,r.position.y+=.17*Math.sin(Math.PI*me),r.rotation.x=Math.PI*.5*me,r.rotation.y=F*(1-me)}else if(ce>.59&&ee){let me=Mo((ce-.59)/.41);r.position.lerpVectors(ee.position,_l,me),r.position.z+=.018*(1-me),r.position.y+=.17*Math.sin(Math.PI*me),r.rotation.x=Math.PI*.5*(1-me),r.rotation.y=0}else r.visible=!1;ce>=.5&&P.kind==="choose"&&w!==P.next&&(w=P.next,B=0,U=0,F=0,O())}ce===1&&(P.kind==="return"?(w=-1,U=0,r.visible=!1):(r.visible=!0,r.position.copy(_l),r.rotation.set(B*Math.PI,F,0)),P=null,L(),n({shadows:!0})),j=!0}else R&&(r.rotation.y=F);return j}}}var qn,_l,yo,Mo,bl,Rm=ut(()=>{gt();qn=[{id:"arroyo",title:"Arroyo After Hours",artist:"The Mesa Trio",color:12476735,sides:["Terrace at Dusk","Last Light on Stone"],bpm:112},{id:"canyon",title:"Canyon in Blue",artist:"Lena Vale Quartet",color:3630702,sides:["Blue Wash","Window to the West"],bpm:92},{id:"moon",title:"Moon over the Mesa",artist:"Sonoran Chamber Players",color:12033103,sides:["Nocturne for the Courtyard","The Sleeping Garden"],bpm:72}],_l=new T(5.2,.89,-10.4),yo=new T(4.45,.902,-10.39),Mo=i=>(i=Ye.clamp(i,0,1),i*i*(3-2*i)),bl=(i,e)=>5760/(i.bpm+(e?4:0))+3});function Un(i,e,{families:t=null,name:n="Operable household part",pivot:s=e.getCenter(new T)}={}){let r=new st;r.name=n,r.position.copy(s);let a=[];i.updateMatrixWorld(!0);let o=new it;i.traverseVisible(d=>{!d.isMesh||d.isInstancedMesh||d.userData.householdPart||t&&!t.includes(d.material.name)||(d.geometry.boundingBox||d.geometry.computeBoundingBox(),o.copy(d.geometry.boundingBox).applyMatrix4(d.matrixWorld),o.intersectsBox(e)&&a.push(d))});let c=new T,l=new T,h=0;for(let d of a){let u=d.geometry,f=u.getAttribute("position"),p=u.index?.array,g=[],m=[];if(!f)continue;let A=e.clone().applyMatrix4(d.matrixWorld.clone().invert()),x=A.min,v=A.max,_=C=>{let w=f.getX(C),B=f.getY(C),R=f.getZ(C);return w>=x.x&&w<=v.x&&B>=x.y&&B<=v.y&&R>=x.z&&R<=v.z},M=p?.length??f.count;for(let C=0;C<M;C+=3){let w=p?p[C]:C,B=p?p[C+1]:C+1,R=p?p[C+2]:C+2;!_(w)||!_(B)||!_(R)||[w,B,R].every(U=>e.containsPoint(c.fromBufferAttribute(f,U).applyMatrix4(d.matrixWorld)))&&(g.push(w,B,R),m.push(C))}if(!g.length)continue;let E=new Set(m),b=[];for(let C=0;C<M;C+=3)E.has(C)||b.push(p?p[C]:C,p?p[C+1]:C+1,p?p[C+2]:C+2);let y=new lt,I=new rt().getNormalMatrix(d.matrixWorld);for(let[C,w]of Object.entries(u.attributes)){let B=new Float32Array(g.length*w.itemSize);for(let R=0;R<g.length;R++){let U=g[R];if(C==="position")c.fromBufferAttribute(w,U).applyMatrix4(d.matrixWorld).sub(s),B.set(c.toArray(),R*3);else if(C==="normal")l.fromBufferAttribute(w,U).applyMatrix3(I).normalize(),B.set(l.toArray(),R*3);else for(let P=0;P<w.itemSize;P++)B[R*w.itemSize+P]=w.getComponent(U,P)}y.setAttribute(C,new St(B,w.itemSize))}let S=new Qe(y,d.material);S.castShadow=d.castShadow,S.receiveShadow=d.receiveShadow,S.userData.householdPart=!0,S.name=n+" / "+d.material.name,r.add(S),h+=g.length/3,u.setIndex(b),u.computeBoundingBox(),u.computeBoundingSphere()}return r.userData.triangles=h,i.add(r),r}function Bm({scene:i,light:e,register:t,dirty:n,audio:s,animateRegion:r=()=>{}}){let a=new st;a.name="Working household details",i.add(a);let o=[],c={},l=0,h=(Q,qe,ye={})=>{let De=new at({name:Q,color:qe,roughness:.48,...ye});return e.patch(De,{plainMap:!0}),De},d=h("Cupboard warm walnut",7754043),u=h("Cupboard maple interior",12098416),f=h("Cupboard cream stoneware",14867398,{roughness:.22}),p=h("Household black bakelite",1514264,{roughness:.25}),g=(Q,qe,ye,De)=>{let $=new Qe(qe,ye);return $.name=De,$.castShadow=!0,$.receiveShadow=!0,$.userData.householdPart=!0,Q.add($),$},m=(Q,qe,ye,De,$)=>{let Fe=g(Q,new Nt(...ye),De,$);return Fe.position.copy(qe),Fe},A=(Q,qe,ye,De,$,Fe)=>{let ke=g(Q,new Qt(ye,ye,De,32),$,Fe);return ke.position.copy(qe),ke},x=(Q,qe)=>r(()=>Q()?qe:null),v=(Q,qe,ye,De,$=1.9,Fe)=>t({id:Q,label:qe,point:ye,reach:$,use:()=>{De(),n({shadows:!0})},...Fe?{bounds:()=>Fe}:{}}),_=(Q,qe,ye="rotation",De="y",$=6)=>{o.push(Fe=>{let ke=Q[ye][De],Ge=qe();return Math.abs(ke-Ge)<4e-4?(Q[ye][De]=Ge,!1):(Q[ye][De]=Ye.damp(ke,Ge,$,Fe),!0)})},M=Un(i,pn(5.027,.877,10.227,5.373,.9,10.573),{name:"Spinning 33 rpm vinyl",pivot:It(5.2,.89,10.4)}),E=Un(i,pn(5.458,.881,10.192,5.551,.923,10.588),{name:"Pivoting turntable tonearm",pivot:It(5.53,.9,10.57)});c.recordTriangles=M.userData.triangles,c.tonearmTriangles=E.userData.triangles;let b=Im({scene:i,light:e,register:t,dirty:n,audio:s,disc:M,arm:E,animateRegion:r});o.push(Q=>b.update(Q));let y=i.getObjectByName(Bt.sanitizeNodeName("Sculpted convex gray CRT screen"))??i.getObjectByName("Sculpted convex gray CRT screen"),I=y?.material,S=!1,C=new Ut({name:"Monochrome 1958 moving television signal",uniforms:{time:{value:0},power:{value:0}},side:Lt,toneMapped:!1,vertexShader:"varying vec2 signalUV;void main(){vec4 w=modelMatrix*vec4(position,1.);signalUV=vec2((w.z+9.45)/-.676+.5,(w.y-1.066)/.428+.5);gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:`uniform float time,power;varying vec2 signalUV;
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
    }`});y&&(y.castShadow=!1,c.tvScreen=!0);let w=new Kn(12114382,0,2.5,2);w.position.copy(It(7.99,1.1,9.45)),a.add(w),e.addLocalEmitter?.(w);let B=Un(i,pn(8.073,1.005,8.894,8.143,1.102,8.987),{name:"TV power volume dial",pivot:It(8.114,1.052,8.94)});v("television",()=>S?"Switch television off":"Switch television on",It(8.09,1.08,8.94),()=>{S=!S,y&&(y.material=S?C:I),C.uniforms.power.value=Number(S),w.intensity=S?.55:0}),_(B,()=>S?-.65:0,"rotation","x"),x(()=>S,pn(7.97,.8,9.05,8.14,1.3,9.82)),o.push(()=>(C.uniforms.time.value=l,!1));function R({id:Q,label:qe,x:ye,north:De,outlet:$,bottom:Fe,poolSize:ke,handle:Ge,hbox:k}){let D=new st;D.name=qe+" running water",a.add(D);let Z=Cm(D,ye,-De,$,Fe,...ke),pe=Un(i,k,{name:qe+" moving tap handle",pivot:Ge});c[Q+"HandleTriangles"]=pe.userData.triangles;let se=!1;D.visible=!1,v(Q,()=>se?"Close "+qe.toLowerCase()+" tap":"Open "+qe.toLowerCase()+" tap",Ge,()=>{se=!se,D.visible=!0,s.setFlow(Q,se,It(ye,Fe,De))}),_(pe,()=>se?Math.PI*.48:0);let Me=pn(ye-.24,Fe-.01,De-.29,ye+.24,$+.02,De+.29);x(()=>D.visible,Me),o.push((Ie,de)=>(Z(Ie,se,de?.night??0),!1))}R({id:"kitchen-tap",label:"Kitchen",x:-8.43,north:1.25,outlet:1.115,bottom:.754,poolSize:[.12,.17],handle:It(-8.69,1.01,1.42),hbox:pn(-8.705,.996,1.363,-8.675,1.024,1.476)}),R({id:"bath-tap",label:"Bathroom",x:-.335,north:8.55,outlet:1.045,bottom:.746,poolSize:[.075,.12],handle:It(-.57,.947,8.8),hbox:pn(-.622,.933,8.749,-.518,.962,8.851)});let U=Un(i,pn(-5.868,1.546,3.49,-5.232,2.312,3.557),{name:"Kitchen hinged upper cupboard",pivot:It(-5.855,1.93,3.54)}),P=Un(i,pn(-5.887,1.529,3.548,-5.213,2.332,3.973),{name:"Removed solid cupboard carcass",families:["wood"]});P.visible=!1,c.cupboardDoorTriangles=U.userData.triangles,c.cupboardRemovedTriangles=P.userData.triangles;let F=new st;F.name="Open shelved cupboard with stoneware",a.add(F);for(let Q of[-5.865,-5.235])m(F,It(Q,1.93,3.76),[.025,.79,.41],d,"Cupboard solid side");m(F,It(-5.55,1.93,3.958),[.61,.79,.025],u,"Cupboard interior back");for(let Q of[1.548,1.92,2.312])m(F,It(-5.55,Q,3.76),[.61,.024,.39],u,"Cupboard fitted shelf");for(let Q=0;Q<5;Q++)A(F,It(-5.68,1.947+Q*.014,3.74),.117,.009,f,"Stacked cream dinner plate");for(let Q of[-5.7,-5.42])g(F,new Qt(.049,.043,.095,24,1,!0),f,"Hollow stoneware cup").position.copy(It(Q,2,3.84)),g(F,new Us(.029,.007,6,18),f,"Cup handle").position.copy(It(Q+.051,2.01,3.84)),A(F,It(Q,1.958,3.84),.042,.004,f,"Cup foot");for(let Q=0;Q<3;Q++)A(F,It(-5.55,1.57+Q*.014,3.76),.14,.012,f,"Lower shelf serving plates");let H=!1;F.visible=!1,o.push(()=>(F.visible=H||Math.abs(U.rotation.y)>.025,!1)),v("kitchen-cupboard",()=>H?"Close crockery cupboard":"Open crockery cupboard",It(-5.35,1.72,3.5),()=>{H=!H},2),_(U,()=>H?-Math.PI*.62:0);function O(Q){let qe={value:-1};return Q.traverse(ye=>{if(!ye.isMesh)return;let De=ye.material.clone();e.patch(De,{finish:!0,bulb:De.name==="bulb",fixturePower:qe}),ye.material=De}),qe}function L({id:Q,label:qe,x:ye,north:De,low:$,high:Fe,bulbHeight:ke,radius:Ge=.29}){let k=Un(i,pn(ye-Ge,$,De-Ge,ye+Ge,Fe,De+Ge),{families:["shade","bulb"],name:qe+" switchable shade"});c[Q+"Triangles"]=k.userData.triangles;let D=!0,Z=O(k);v(Q,()=>D?"Switch "+qe.toLowerCase()+" off":"Switch "+qe.toLowerCase()+" on",It(ye,Math.max($,.85),De),()=>{D=!D,Z.value=Number(D),e.setPracticalPower?.(It(ye,ke,De),Number(D))},2)}L({id:"living-lamp",label:"Living reading lamp",x:3.5,north:4.52,low:1.31,high:1.8,bulbHeight:1.5}),L({id:"primary-lamp-west",label:"West bedside lamp",x:-8.12,north:10.12,low:.66,high:1.13,bulbHeight:.84}),L({id:"primary-lamp-east",label:"East bedside lamp",x:-5.37,north:10.12,low:.66,high:1.13,bulbHeight:.84}),L({id:"child-lamp",label:"Desk lamp",x:-1.43,north:10.43,low:1.005,high:1.25,bulbHeight:1.12,radius:.17}),L({id:"den-lamp",label:"Den reading lamp",x:3.08,north:9.85,low:1.17,high:1.65,bulbHeight:1.35});let G=Un(i,pn(5.84,2.3,2.45,7.16,2.9,3.75),{families:["bulb"],name:"Sputnik switchable tungsten globes"});c.diningGlobeTriangles=G.userData.triangles;let V=O(G),X=!0;v("dining-light",()=>X?"Switch dining chandelier off":"Switch dining chandelier on",It(6.32,1.18,6.87),()=>{X=!X,V.value=Number(X),e.setPracticalPower?.(It(6.5,2.58,3.1),Number(X))},2);let z=Un(i,pn(6.308,1.155,6.858,6.332,1.206,6.888),{name:"Existing dining wall switch toggle",pivot:It(6.32,1.18,6.873)});c.diningSwitchTriangles=z.userData.triangles,_(z,()=>X?-.45:.45,"rotation","x");let K=Un(i,pn(-5.355,.92,5.139,-4.886,1.026,5.261),{name:"Telephone liftable bakelite receiver",pivot:It(-5.12,.99,5.2)});c.telephoneTriangles=K.userData.triangles,K.scale.setScalar($t.receiverScale),K.position.copy(It($t.x,$t.receiverY,$t.receiverNorth));let j=!1,ce=new T;t({id:"telephone-receiver",label:()=>j?"Replace telephone receiver":"Lift telephone receiver",point:()=>K.getWorldPosition(ce),reach:1.9,hitTest:Q=>Q.intersectObject(K,!0)[0],use:()=>{j=!j,n({shadows:!0})}}),_(K,()=>j?$t.receiverY+.18:$t.receiverY,"position","y"),_(K,()=>j?-.22:0,"rotation","z");let ae=Un(i,pn(-5.345,.643,5.175,-5.295,.948,5.225),{name:"Original telephone coiled cord"});ae.visible=!1,Un(i,pn(-5.28,.749,5.018,-4.96,.871,5.262),{name:"Correctly proportioned telephone housing",pivot:It($t.x,$t.floor,$t.north)}).scale.setScalar($t.baseScale);let me=new Fn(new Qt(.0018,.0018,1,6),p,80);me.name="Stretching telephone receiver cord",me.userData.householdPart=!0,a.add(me);let fe=new Ft,Re=new T(0,1,0),Se=new T,te=new T,xe=new T,_e=It(-5.208,.8,$t.receiverNorth),be=new T(-.102,-.02,0),Ee=-1,le=0;o.push(()=>{if(Math.abs(Ee-K.position.y)<1e-5&&Math.abs(le-K.rotation.z)<1e-5)return!1;Ee=K.position.y,le=K.rotation.z,K.updateMatrixWorld(!0);let Q=be.clone().applyEuler(K.rotation).add(K.position),qe=(ye,De)=>(De.lerpVectors(_e,Q,ye),De.x-=.016*Math.sin(Math.PI*ye),De.z+=.0065*Math.sin(Math.PI*ye)*Math.cos(ye*Math.PI*24),De.x+=.0065*Math.sin(Math.PI*ye)*Math.sin(ye*Math.PI*24),De);for(let ye=0;ye<80;ye++){qe(ye/80,Se),qe((ye+1)/80,te),xe.copy(te).sub(Se);let De=xe.length();fe.position.copy(Se).add(te).multiplyScalar(.5),fe.quaternion.setFromUnitVectors(Re,xe.normalize()),fe.scale.set(1,De,1),fe.updateMatrix(),me.setMatrixAt(ye,fe.matrix)}return me.instanceMatrix.needsUpdate=!0,me.computeBoundingSphere(),!1});let ve=Un(i,pn(-5.208,.869,5.022,-5.032,.905,5.198),{name:"Telephone returning rotary dial",pivot:It(-5.12,.89,5.11)});for(let Q of ve.children)Q.visible=!1;ve.position.copy(It($t.x,$t.dialY,$t.dialNorth));let Le=cm({scene:i,light:e,dial:ve}),Oe=0;t({id:"telephone-dial",label:()=>"Turn rotary telephone dial",point:It($t.x,$t.dialY,$t.dialNorth),reach:1.9,enabled:()=>Oe===0,hitTest:Q=>Q.intersectObject(Le.hitTarget,!1)[0],use:()=>{Oe=-Math.PI*1.65,ve.rotation.y=Oe,s.cue("dial",.55,ve.position),n({shadows:!0})}}),o.push(Q=>Oe>=0?!1:(Oe=Math.min(0,Oe+Q*3.8),ve.rotation.y=Oe,!0));let ze=Un(i,pn(-4.24,.779,5.1,-4.07,.802,5.14),{name:"Superseded entry matchstick keys"});return ze.visible=!1,lm({scene:i,light:e}),a.userData.householdActions=c,{root:a,stats:c,records:b,update(Q,qe){l+=Math.min(Q,.1);let ye=!1;for(let De of o)ye=De(Math.min(Q,.1),qe)||ye;return ye}}}var It,pn,Dm=ut(()=>{gt();Tm();Rm();Jh();It=(i,e,t)=>new T(i,e,-t),pn=(i,e,t,n,s,r)=>new it(It(i,e,r),It(n,s,t))});function RM(i,e,t){let n=[],s=[],r=[],a=[];for(let h=0;h<=14;h++){let d=h/14,u=e*Math.pow(Math.sin(Math.PI*(d*.9+.1)),.7)*Math.pow(1-d,.28);for(let f=0;f<=9;f++){let p=f/9*Math.PI*2;if(n.push(Math.cos(p)*u+Math.sin(t+d*4)*d*d*.025,d*i,Math.sin(p)*u*.7+Math.cos(t+d*5)*d*d*.016),s.push(f/9,d),r.push(t),h<14&&f<9){let g=h*10+f,m=g+9+1;a.push(g,m,g+1,g+1,m,m+1)}}}let l=new lt;return l.setAttribute("position",new Ke(n,3)),l.setAttribute("uv",new Ke(s,2)),l.setAttribute("flamePhase",new Ke(r,1)),l.setIndex(a),l.computeVertexNormals(),l}function BM(){return new Ut({name:"Dimensional turbulent hearth flames",transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uPower:{value:1}},vertexShader:`
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
      }`})}function Fm({scene:i,light:e,water:t,register:n,dirty:s,audio:r,fireMaterials:a=[],detail:o}){let c=new it;o?.updateWorldMatrix(!0,!0),o?.traverse(L=>{if(!L.isMesh)return;(Array.isArray(L.material)?L.material:[L.material]).some(V=>V.name.toLowerCase().includes("hearth flame"))&&(c.expandByObject(L),L.visible=!1)}),c.isEmpty()&&c.set(new T(2.51,.39,-1.65),new T(2.64,.7,-.95));let l=c.getCenter(new T),h=c.min.y+.012,d=Math.min(.62,Math.max(.4,c.max.z-c.min.z-.08)),u=new st;u.name="Interactive dimensional hearth",u.position.set(l.x,h,l.z),i.add(u);let f=new at({name:"Hearth fired steel ash pan",color:2498845,metalness:.62,roughness:.83});e?.patch(f,{plainMap:!0});let p=[];for(let[L,G]of[[[.26,.012,d+.065],[0,-.026,0]],[[.008,.025,d+.065],[-.126,-.016,0]],[[.008,.025,d+.065],[.126,-.016,0]],[[.26,.025,.008],[0,-.016,-d*.5-.029]],[[.26,.025,.008],[0,-.016,d*.5+.029]]])p.push(new Nt(...L).translate(...G));let g=new Qe(ln(p),f);g.name="Folded steel hearth pan with raised ash lip";for(let L of p)L.dispose();u.add(g);let m=new at({name:"Pale granular spent hearth ash",color:7827556,roughness:1});e?.patch(m,{plainMap:!0});let A=new Fn(new Qr(.017,0),m,20);A.name="Scattered matte ash around glowing coals";let x=new Ft;for(let L=0;L<20;L++)x.position.set(Math.sin(L*2.399)*.103,-.014,(L%10/9-.5)*d),x.scale.set(1,.13,.7+L%3*.2),x.rotation.y=L*1.8,x.updateMatrix(),A.setMatrixAt(L,x.matrix);u.add(A);let v=[];for(let L=0;L<3;L++)for(let G=0;G<5;G++){let V=(L*5+G)*2.39996,X=(L===0?.09:L===1?.17:.12)+.1*(.5+.5*Math.sin(V*1.8)),z=RM(X,(L===0?.047:.031)+.007*(G%3),V);z.translate((L-1)*.057,0,(G/4-.5)*(d-.06)+Math.sin(V+L*.9)*.037),v.push(z)}let _=BM(),M=new Qe(ln(v),_);for(let L of v)L.dispose();M.name="Fifteen independently rising flame tongues",M.renderOrder=8,u.add(M);let E=new at({name:"Charred coals with luminous amber seams",color:2101772,roughness:.98,emissive:16724485,emissiveIntensity:.85});e?.patch(E,{plainMap:!0});let b=E.onBeforeCompile;E.onBeforeCompile=(L,G)=>{b.call(E,L,G),L.vertexShader=L.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vCoalPosition;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vCoalPosition=(instanceMatrix*vec4(position,1.)).xyz;`),L.fragmentShader=L.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vCoalPosition;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        float seams=pow(.5+.5*sin(vCoalPosition.x*182.+sin(vCoalPosition.z*139.))*sin(vCoalPosition.z*153.+vCoalPosition.y*47.),6.);
        totalEmissiveRadiance*=.06+.94*seams;`)},E.customProgramCacheKey=()=>"hearth-glowing-carbon-seams";let y=new Qr(.025,1),I=new Fn(y,E,30);I.name="Three dimensional glowing hearth coals";let S=new Ft,C=new We;for(let L=0;L<30;L++){let G=L*2.39996;S.position.set(Math.sin(G)*.09,-.003+L%3*.005,(L%10/9-.5)*d),S.rotation.set(G,G*.7,G*.3),S.scale.set(1,.45+L%3*.12,.7),S.updateMatrix(),I.setMatrixAt(L,S.matrix),C.setRGB(.4+L%4*.18,.28+L%3*.13,.2),I.setColorAt(L,C)}u.add(I);let w=new Kn(16739618,.28,1.5,2);w.name="Local steady hearth glow",w.position.set(l.x-.1,h+.13,l.z),i.add(w),e?.addLocalEmitter?.(w);let B=new it(new T(l.x-.17,h-.035,l.z-d*.5-.085),new T(l.x+.17,h+.3,l.z+d*.5+.085)),R=!0,U=1,P=1,F=0,H=!0,O=!1;if(n({id:"hearth",label:()=>R?"Extinguish hearth":"Light hearth",point:new T(l.x-.15,.63,l.z),reach:2.7,use(){R=!R,O=!0,r?.setLayer("fire",R?1:0),s({shadows:!1})}}),t?.surface){let G=new it().setFromObject(t.surface).getCenter(new T);n({id:"pool-touch",label:()=>"Touch water",point:G,reach:3.3,hitTest:ce=>t.hitTest(ce),use(ce){ce&&t.disturb(ce)}});let V=new at({name:"Weathered bronze pool switch pedestal",color:7955264,metalness:.72,roughness:.55});e?.patch(V,{plainMap:!0});let X=new st;X.name="Dry deck bronze pool light switch",X.position.set(9,0,9.62);for(let[ce,ae,ee]of[[[.11,.018,.11],[0,.018,0],"Bolted pool switch foot"],[[.035,.61,.035],[0,.326,0],"Slender bronze pool switch stem"],[[.07,.13,.1],[0,.69,0],"Weatherproof bronze switch box"],[[.009,.112,.086],[-.039,.69,0],"Gasketed bronze switch cover"]]){let me=new Qe(new Nt(...ce),V);me.position.set(...ae),me.name=ee,me.castShadow=me.receiveShadow=!0,X.add(me)}let z=new st;z.name="Pool switch physical toggle",z.position.set(-.046,.69,0),z.rotation.z=-.4;let K=new Qe(new Qt(.004,.004,.032,12),V);K.rotation.z=Math.PI/2,K.position.x=-.016,z.add(K);let j=new Qe(new Hn(.007,12,8),V);j.position.x=-.032,z.add(j),X.add(z),i.add(X),n({id:"pool-lights",label:()=>H?"Switch pool lights off":"Switch pool lights on",point:new T(8.944,.69,9.62),reach:2.5,use(){H=!H,z.rotation.z=H?-.4:.4,t.setPoolLights(H),s({shadows:!0})}})}return r?.setLayer("fire",1),{fireBounds:B,update(L=0){let G=Math.max(0,Math.min(L,.06));if(F+=G,_.uniforms.uTime.value=F,!O)return!1;let V=R?1:0;U=Ye.damp(U,V,7,G),P=Ye.damp(P,V,R?5:1.4,G),Math.abs(U-V)<.001&&(U=V),Math.abs(P-V)<.001&&(P=V),_.uniforms.uPower.value=U,M.visible=U>.001,E.emissiveIntensity=P*.85,w.intensity=.28*(U*.84+P*.16);for(let X of a)X.emissiveIntensity=0;return O=U!==V||P!==V,!0}}}var Pm=ut(()=>{gt();oi()});function DM(i){i.updateWorldMatrix(!0,!0);let e=[],t=new T,n=new T,s=new T,r=new T,a=new T;i.traverse(c=>{if(!c.isMesh||!/^shell[ _](plaster|wood|glass|stone)/i.test(c.name))return;let l=c.geometry,h=l.attributes.position,d=l.index,u=d?d.count:h.count,f=(p,g)=>p.fromBufferAttribute(h,d?d.getX(g):g).applyMatrix4(c.matrixWorld);for(let p=0;p<u;p+=3)f(t,p),f(n,p+1),f(s,p+2),!(Math.min(t.y,n.y,s.y)>2.8||Math.max(t.y,n.y,s.y)<.2)&&(r.subVectors(n,t).cross(a.subVectors(s,t)).lengthSq()<15e-5||e.push(t.x,t.y,t.z,n.x,n.y,n.z,s.x,s.y,s.z))});let o=new lt;return o.setAttribute("position",new Ke(e,3)),o.computeBoundingSphere(),new Qe(o,new Rn({side:Lt}))}function Lm(i,e){let t=[],n=[],s=DM(i),r=new T,a=new T,o=new ds,c=new ds,l=[],h=f=>typeof f.point=="function"?f.point():f.point;function d(f){if(t.some(p=>p.id===f.id))throw Error("Duplicate house control "+f.id);return t.push(f),f.bounds&&n.push(f),f}function u(f,p){f.updateMatrixWorld(),o.setFromCamera(p,f);let g=null,m=1/0;for(let A of t){if(A.enabled&&!A.enabled())continue;let x=h(A),v=A.reach??2.35,_,M,E=0;if(A.hitTest){o.far=v;let y=A.hitTest(o);if(!y||y.distance>v)continue;_=y.point,M=y.distance}else{if(!x||(r.subVectors(x,o.ray.origin),M=r.length(),M>v||r.dot(o.ray.direction)<=0)||(o.ray.closestPointToPoint(x,a),E=a.distanceTo(x),E>(A.radius??.17)+M*.045))continue;_=x}let b=M+E*3+(A.priority??0);b>=m||(c.ray.set(o.ray.origin,r.subVectors(_,o.ray.origin).normalize()),c.near=.035,c.far=M-.085,l.length=0,c.far>c.near&&c.intersectObject(s,!1,l),!l.length&&(!A.door&&(l.length=0,c.intersectObjects(e,!0,l),l.length)||(m=b,g={action:A,point:_.clone(),distance:M})))}return g}return{register:d,pick:u,actions:t,solids:n,pointOf:h}}var Nm=ut(()=>{gt()});function li(i,e,t,n,s){return{id:i,name:e,bounds:t,center:n,items:s.map(([r,a,o])=>({id:r,label:a,actions:o}))}}function FM(i){let e=i.surface,t=e.geometry.attributes.position,n=e.geometry.attributes.waterEdge;e.updateWorldMatrix(!0,!1);let s=[],r=new Set,a=new T,o=0,c=0;for(let l=0;l<t.count;l++){if(n.getX(l)>.002)continue;a.fromBufferAttribute(t,l).applyMatrix4(e.matrixWorld);let h=Math.round(a.x*1e3)+","+Math.round(a.z*1e3);r.has(h)||(s.push([a.x,a.z]),r.add(h),o+=a.x,c+=a.z)}return o/=s.length,c/=s.length,s.sort((l,h)=>Math.atan2(l[1]-c,l[0]-o)-Math.atan2(h[1]-c,h[0]-o))}function Um({camera:i,water:e}){let t=FM(e),n=new Map,s=new Set,r=new Set(vl.map(v=>v.id));for(let v of vl)for(let _ of v.items){s.add(_.id);for(let M of _.actions)n.set(M,_.id)}let a="arroyo-fold.visitor-guide.v1",o=new Set,c=new Set,l=null;try{let v=JSON.parse(localStorage.getItem(a)||"null");if(Array.isArray(v?.marks))for(let _ of v.marks)s.has(_)&&o.add(_);if(Array.isArray(v?.visits))for(let _ of v.visits)r.has(_)&&c.add(_);r.has(v?.pin)&&(l=v.pin)}catch{}function h(){try{localStorage.setItem(a,JSON.stringify({marks:[...o],visits:[...c],pin:l}))}catch{}}function d(v){let _=n.get(v);_&&!o.has(_)&&(o.add(_),h())}let u=null,f=1,p=!1,g=0,m=!1,A=new T;function x(v,_){if(_.mode!=="walk"){p=m=!1;return}_.swimming?(m=!0,d("entered-water"),_.immersion()>.83&&d("submerged")):p&&!_.transitioning&&m&&(d("returned-to-deck"),m=!1),p=_.swimming;let M=_.footsteps.printCount;if(M>g&&d("wet-prints"),g=M,f+=v,f<.12)return;f=0;let{x:E,z:b}=i.position,y=_.swimming?"pool":E>=-9&&E<-3&&b<-4&&b>=-7?"entry":vl.find(I=>{if(I.id==="pool")return!1;let[S,C,w,B]=I.bounds;return E>=S&&E<w&&b>=C&&b<B})?.id??null;u=y,y&&!c.has(y)&&(c.add(y),h())}return{rooms:vl,poolOutline:t,update:x,action:d,visited:v=>c.has(v),done:v=>o.has(v),get count(){return{done:o.size,total:s.size}},get pinned(){return l},pin(v){l=r.has(v)?v:null,h()},snapshot(){return i.getWorldDirection(A),{x:i.position.x,z:i.position.z,heading:Math.atan2(A.x,-A.z),roomId:u}}}}var vl,Om=ut(()=>{gt();vl=[li("entry","Entry & gallery",[-9,-7,9,-5.5],[-4.6,-5.15],[["phone","Try the rotary telephone dial",["telephone-dial"]],["camera","Pick up the 35 mm camera",["rangefinder"]],["postcard","Frame and take a photograph",["photograph-taken"]]]),li("living","Living room",[-3,-5.5,4,0],[.45,-2.76],[["glass","Slide open the glass wall",["door-living-sliding-door"]],["pit","Sit in the conversation pit",["seat-pit","seat-pit-west"]],["fire","Try the hanging fireplace",["hearth"]],["journal","Turn a page of the journal",["journal-page"]]]),li("dining","Dining room",[4,-5.5,9,0],[6.4,-3.2],[["sputnik","Switch the Sputnik chandelier",["dining-light"]],["dining-glass","Open the dining room to the terrace",["door-dining-sliding-door"]]]),li("kitchen","Kitchen",[-9,-4,-3,0],[-6.2,-2.15],[["fridge","Look inside the refrigerator",["kitchen-refrigerator"]],["cupboard","Open the crockery cupboard",["kitchen-cupboard"]],["kitchen-water","Run water in the sink",["kitchen-tap"]],["kitchen-glass","Try the kitchen slider",["door-kitchen-sliding-door"]]]),li("primary","Primary bedroom",[-9,-11,-4.5,-7],[-6.65,-8.96],[["drawer","Open the bedside drawer",["primary-nightstand-drawer"]],["bedside-lamp","Try a bedside reading light",["primary-lamp-west","primary-lamp-east"]]]),li("kid","Small bedroom",[-4.5,-11,-.8,-7],[-2.62,-8.9],[["toy","Set the wooden top spinning",["child-spinning-top"]],["desk-lamp","Switch on the desk lamp",["child-lamp"]]]),li("bath","Bathroom",[-.8,-11,2.4,-7],[.78,-8.98],[["bath-tap","Turn the basin tap",["bath-tap"]]]),li("den","Hi-fi den",[2.4,-11,9,-7],[5.55,-9.4],[["records","Choose a record from its sleeve",["record-select-arroyo","record-select-canyon","record-select-moon"]],["arm","Operate the tonearm",["record-player"]],["side-b","Turn the record over",["record-flip"]],["tv","Switch on the television",["television"]],["listen","Sit in a listening chair",["seat-den","seat-den-east"]]]),li("carport","Carport",[9,-7.65,16.2,-.45],[11.87,-4.3],[["car-door","Open a door on the hardtop",["car-door-left","car-door-right"]],["wheel","Sit behind the wheel",["seat-driver"]],["am","Switch on the AM radio",["car-radio-power"]],["tuning","Tune the analog radio",["car-radio-dial","car-radio-tune-higher","car-radio-tune-lower"]],["lights","Operate the headlights",["car-dash-headlights"]]]),li("terrace","Pool terrace",[-10.3,0,10.8,14.8],[-6.4,6.1],[["chaise","Recline on a pool chaise",["seat-chaise","seat-chaise-south"]],["prints","Leave wet footprints on the terrace",["wet-prints"]],["basin-lights","Try the pool lights",["pool-lights"]]]),li("pool","Swimming pool",[-.7,4.55,8.7,11.7],[3.9,8.5],[["swim","Go for a swim",["entered-water"]],["board","Jump from the diving board",["pool-board"]],["below","Dip beneath the surface",["submerged"]],["deck","Climb out using the ladder",["returned-to-deck"]]])]});function Gm({guide:i,closeGuide:e,onRequestOpen:t}){let n=i.rooms,s=n.map(le=>le.bounds),r=[Math.min(-10,...s.map(le=>le[0]))-1.5,Math.min(-12,...s.map(le=>le[1]))-1.5,Math.max(16,...s.map(le=>le[2]))+1.5,Math.max(12,...s.map(le=>le[3]))+1.5],a=dt("button","visitor-radar");a.type="button",a.hidden=!0,a.setAttribute("aria-haspopup","dialog"),a.setAttribute("aria-controls","visitor-map-dialog"),a.setAttribute("aria-label","Open visitor map and exploration checklist"),a.title="Visitor map \xB7 G";let o=dt("span","visitor-radar-face"),c=Et("svg",{viewBox:"-12 -12 24 24","aria-hidden":"true"}),l=Et("g"),h=Et("text",{x:0,y:-10.15,"text-anchor":"middle",class:"radar-north"},"N"),d=Et("g");d.append(h);let u=Et("g",{class:"radar-pin"});u.append(Et("circle",{r:.7}),Et("path",{d:"M-.23 0H.23M0 -.23V.23"})),u.hidden=!0,u.style.display="none";let f=Et("path",{d:km,class:"radar-person"});c.append(l,d,u,f),o.append(c);let p=dt("span","visitor-radar-caption");p.append(dt("span","visitor-radar-room","Explore"),dt("span","visitor-radar-key","G")),a.append(o,p),a.addEventListener("click",()=>t?.());let g=dt("dialog","visitor-map-dialog");g.id="visitor-map-dialog",g.setAttribute("aria-labelledby","visitor-map-title");let m=dt("div","visitor-map-shell"),A=dt("header","visitor-map-header"),x=dt("div");x.append(dt("span","visitor-map-eyebrow","Arroyo Fold \xB7 Visitor field guide"));let v=dt("h2",null,"House map");v.id="visitor-map-title",x.append(v);let _=dt("button","visitor-map-close","Back to the house");_.type="button",_.setAttribute("aria-label","Close visitor map and return to the house"),_.append(dt("span",null,"\xD7")),_.addEventListener("click",()=>e()),A.append(x,_);let M=dt("div","visitor-map-content"),E=dt("section","visitor-map-plan");E.setAttribute("aria-label","Interactive floor plan");let b=dt("div","visitor-map-plan-top");b.append(dt("span",null,"THE HOUSE & GROUNDS"),dt("span",null,"NORTH IS UP \u2191")),E.append(b);let y=r[2]-r[0],I=r[3]-r[1],S=Et("svg",{viewBox:`${r[0]} ${r[1]} ${y} ${I}`,class:"visitor-floor-plan","aria-label":"North-up floor plan. Select a room to pin it on the radar.",role:"group"});S.append(Et("rect",{x:r[0],y:r[1],width:y,height:I,class:"map-ground"}));let C=Et("g"),w=new Map,B=new Map,R=le=>["terrace","carport"].includes(le)?"map-outdoor":le==="pool"?"map-pool":["primary","kid","bath","den"].includes(le)?"map-north-room":"map-room";for(let le of n){let Z=function(){Re=le.id;for(let[pe,se]of B)se.section.open=pe===le.id;Se(),B.get(le.id).section.scrollIntoView({block:"nearest",behavior:"smooth"})},[ve,Le,Oe,ze]=le.bounds,Q=Oe-ve,qe=ze-Le,ye=le.id==="entry"?Et("polygon",{points:"-9,-7 9,-7 9,-5.5 -3,-5.5 -3,-4 -9,-4",class:R(le.id)}):le.id==="pool"&&i.poolOutline?.length>2?Et("polygon",{points:i.poolOutline.map(pe=>pe.join(",")).join(" "),class:R(le.id)}):Et("rect",{x:ve,y:Le,width:Q,height:qe,class:R(le.id)}),De=ye.cloneNode();l.append(De);let $=Et("g",{class:"map-room-control",role:"button",tabindex:"0","data-room":le.id,"aria-pressed":"false"});$.append(ye,Et("title",{},le.name+" \xB7 Show checklist"));let Fe=le.name.split(" "),ke=Fe.length>1?[Fe.slice(0,Math.ceil(Fe.length/2)).join(" "),Fe.slice(Math.ceil(Fe.length/2)).join(" ")]:Fe,Ge=le.id==="entry"?le.center[1]:LM(le.center[1],Le+.55,ze-.55),k=Et("text",{x:le.center[0],y:Ge-(ke.length-1)*.34,class:"map-room-label","text-anchor":"middle"});ke.forEach((pe,se)=>k.append(Et("tspan",{x:le.center[0],dy:se?.76:0},pe))),$.append(k);let D=Et("text",{x:ve+.4,y:Le+.8,class:"map-room-tick"},"\u2713");$.append(D),$.addEventListener("click",Z),$.addEventListener("keydown",pe=>{(pe.key==="Enter"||pe.key===" ")&&(pe.preventDefault(),Z())}),C.append($),w.set(le.id,{node:$,status:D,radarShape:De,room:le})}let U=Et("g",{class:"map-furnishings","aria-hidden":"true"});for(let[le,ve,Le,Oe]of[[-8.35,-10.4,1.65,2.05],[-3.85,-10.5,.95,1.9],[-.5,-10.5,1.2,1.3],[3.5,-10.55,2.7,.7],[-8.75,-4.4,.65,3.8],[-2.2,-3.95,3.8,2.8],[5.45,-4.35,2,1.25]])U.append(Et("rect",{x:le,y:ve,width:Le,height:Oe}));let P=Et("g");P.append(Et("rect",{x:11.4,y:-6.5,width:1.9,height:5,rx:.42}),Et("path",{d:"M11.6 -5.25H13.1L12.95 -4.5H11.75ZM11.75 -3.3H12.95L13.1 -2.65H11.6Z"})),U.append(P),S.append(C,U);let F=Et("g",{class:"map-destination-pin","aria-hidden":"true"});F.append(Et("path",{d:"M0 -1.1C-1.3 -1.1-1.3 .5 0 1.5C1.3 .5 1.3 -1.1 0 -1.1Z"}),Et("circle",{cy:-.1,r:.28})),F.style.display="none";let H=Et("g",{class:"map-visitor","aria-hidden":"true"});H.append(Et("circle",{r:1}),Et("path",{d:km})),S.append(F,H);let O=Et("g",{class:"map-compass","aria-hidden":"true",transform:`translate(${r[2]-1.5} ${r[1]+2})`});O.append(Et("path",{d:"M0 1V-1M-.4 -.4L0 -1L.4 -.4"}),Et("text",{x:0,y:-1.5,"text-anchor":"middle"},"N")),S.append(O);let L=Et("g",{class:"map-scale","aria-hidden":"true",transform:`translate(${r[0]+1} ${r[3]-.75})`});L.append(Et("path",{d:"M0 -.15V.15M0 0H5M5 -.15V.15"}),Et("text",{x:2.5,y:-.4,"text-anchor":"middle"},"5 m")),S.append(L),E.append(S);let G=dt("div","visitor-map-legend");G.append(dt("span","legend-you","You are here"),dt("span","legend-visited","Visited room"),dt("span","legend-pin","Pinned destination")),E.append(G);let V=dt("div","visitor-map-destination"),X=dt("span",null,"Select a room to see its checklist, then choose Pin this room."),z=dt("button",null,"Clear pin");z.type="button",z.hidden=!0,z.addEventListener("click",()=>{i.pin(null),Se()}),V.append(X,z),E.append(V);let K=dt("section","visitor-map-checklist");K.setAttribute("aria-label","Exploration checklist");let j=dt("div","visitor-checklist-top");j.append(dt("span","visitor-map-eyebrow","Make yourself at home"),dt("h3",null,"A few things to try."));let ce=dt("p","visitor-map-progress"),ae=dt("progress");ae.setAttribute("aria-label","Discoveries completed"),j.append(ce,ae),K.append(j);for(let le of n){let ve=dt("details","visitor-room-section");ve.dataset.room=le.id;let Le=dt("summary"),Oe=dt("span","visitor-room-name",le.name),ze=dt("span","visitor-room-status");Le.append(Oe,ze),ve.append(Le);let Q=dt("div","visitor-room-body"),qe=dt("button","visitor-room-pin","Pin this room");qe.type="button",qe.addEventListener("click",()=>{i.pin(i.pinned===le.id?null:le.id),Se()});let ye=dt("ul","visitor-discoveries"),De=[];for(let $ of le.items){let Fe=dt("li"),ke=dt("span","visitor-discovery-mark"),Ge=dt("span",null,$.label);ke.setAttribute("aria-hidden","true");let k=dt("span","visitor-map-sr");Fe.append(ke,Ge,k),ye.append(Fe),De.push({item:$,li:Fe,mark:ke,accessibleStatus:k})}Q.append(qe,ye),ve.append(Q),K.append(ve),B.set(le.id,{section:ve,roomStatus:ze,pinButton:qe,items:De})}M.append(E,K);let ee=dt("footer","visitor-map-footer");ee.append(dt("span",null,"G / Esc to return"),dt("span",null,"North-up plan \xB7 Distances in metres")),m.append(A,M,ee),g.append(m),document.body.append(a,g),g.addEventListener("cancel",le=>{le.preventDefault(),e()}),g.addEventListener("click",le=>{le.target===g&&e()});let me=null,fe=null,Re=null;function Se(){let le=i.snapshot(),ve=i.pinned,Le=i.count;ce.textContent=`${Le.done} of ${Le.total} discoveries explored`,ae.max=Math.max(1,Le.total),ae.value=Le.done;for(let ze of n){let Q=!!i.visited(ze.id),qe=ze.id===le.roomId,ye=ze.id===ve,De=ze.id===Re,{node:$,status:Fe,radarShape:ke}=w.get(ze.id),Ge=B.get(ze.id);ke.classList.toggle("is-visited",Q),$.classList.toggle("is-visited",Q),$.classList.toggle("is-current",qe),$.classList.toggle("is-pinned",ye),$.classList.toggle("is-selected",De),$.setAttribute("aria-pressed",String(De)),$.setAttribute("aria-label",`${ze.name}${qe?", you are here":Q?", visited":""}${ye?", pinned":""}. Show checklist`);let k=ze.items.filter(D=>i.done(D.id)).length;Fe.style.display=ze.items.length&&k===ze.items.length?"":"none",Ge.roomStatus.textContent=`${qe?"You are here":Q?"Visited":"Unvisited"} \xB7 ${k}/${ze.items.length}`,Ge.pinButton.textContent=ye?"Clear room pin":"Pin this room",Ge.pinButton.setAttribute("aria-pressed",String(ye));for(let{item:D,li:Z,mark:pe,accessibleStatus:se}of Ge.items){let Me=!!i.done(D.id);Z.classList.toggle("is-done",Me),pe.textContent=Me?"\u2713":"",se.textContent=Me?" \xB7 Explored":" \xB7 Not yet explored"}}let Oe=n.find(ze=>ze.id===ve);z.hidden=!Oe,Oe?(X.textContent=`Pinned: ${Oe.name} \xB7 ${Math.round(Math.hypot(Oe.center[0]-le.x,Oe.center[1]-le.z))} m away`,F.style.display="",F.setAttribute("transform",`translate(${Oe.center[0]} ${Oe.center[1]-1.5})`)):(X.textContent="Select a room to see its checklist, then choose Pin this room.",F.style.display="none"),te(le),xe(le)}function te(le){if(le.roomId!==fe){fe=le.roomId,p.firstChild.textContent=n.find(ve=>ve.id===fe)?.name??"Grounds";for(let{radarShape:ve,room:Le}of w.values())ve.classList.toggle("is-visited",!!i.visited(Le.id))}}function xe(le){let ve=le.heading*180/Math.PI;l.setAttribute("transform",`rotate(${-ve}) translate(${-le.x} ${-le.z})`),d.setAttribute("transform",`rotate(${-ve})`),H.setAttribute("transform",`translate(${le.x} ${le.z}) rotate(${ve})`);let Le=n.find(Oe=>Oe.id===i.pinned);if(Le){let Oe=Le.center[0]-le.x,ze=Le.center[1]-le.z,Q=Math.cos(le.heading),qe=Math.sin(le.heading),ye=Oe*Q+ze*qe,De=-Oe*qe+ze*Q,$=Math.hypot(ye,De),Fe=Math.min(1,9.3/Math.max(.01,$));u.style.display="",u.setAttribute("transform",`translate(${ye*Fe} ${De*Fe})`)}else u.style.display="none";me={x:le.x,z:le.z,heading:le.heading}}function _e(){let le=i.snapshot(),ve=le.roomId,Le=[Math.min(r[0],le.x-2),Math.min(r[1],le.z-2),Math.max(r[2],le.x+2),Math.max(r[3],le.z+2)];S.setAttribute("viewBox",`${Le[0]} ${Le[1]} ${Le[2]-Le[0]} ${Le[3]-Le[1]}`),Re=i.pinned??ve,Se();for(let[Oe,ze]of B)ze.section.open=Oe===Re;g.open||g.showModal(),_.focus({preventScroll:!0}),document.body.classList.add("visitor-map-open")}function be(){g.open&&g.close(),document.body.classList.remove("visitor-map-open")}function Ee(le,ve){if(a.hidden=ve!=="walk",ve!=="walk")return;let Le=i.snapshot();te(Le),(!me||Math.abs(Le.x-me.x)>.02||Math.abs(Le.z-me.z)>.02||Math.abs(Le.heading-me.heading)>.005)&&xe(Le)}return Se(),{update:Ee,open:_e,close:be,refresh:Se,get isOpen(){return g.open}}}var PM,LM,Et,dt,km,Qm=ut(()=>{PM="http://www.w3.org/2000/svg",LM=(i,e,t)=>Math.max(e,Math.min(t,i)),Et=(i,e={},t)=>{let n=document.createElementNS(PM,i);for(let[s,r]of Object.entries(e))n.setAttribute(s,String(r));return t!==void 0&&(n.textContent=t),n},dt=(i,e,t)=>{let n=document.createElement(i);return e&&(n.className=e),t!==void 0&&(n.textContent=t),n},km="M0 -0.74 L0.50 0.58 L0 0.30 L-0.50 0.58 Z"});function zm({scene:i,solids:e}){if(i.userData.denClearance)return i.userData.denClearance;let t=e.findIndex(l=>l.length===4&&l.every((h,d)=>Math.abs(h-[4.86,8.79,6.34,9.45][d])<.001));if(t<0)throw Error("Original den table collider unavailable");let n=new it(new T(4.835,-.005,-9.475),new T(6.365,.59,-8.765)),s=new T,r=new it,a=0,o=0;if(i.updateMatrixWorld(!0),i.traverse(l=>{if(!l.isMesh||l.isInstancedMesh)return;let h=/^northeast[ _](?:plain|metal|wood)$/i.test(l.name),d=/^Original[ _]New[ _]Form[ _]den[ _]journal/i.test(l.name);if(!h&&!d)return;let u=l.geometry,f=u.attributes.position,p=u.index;if(!f||(u.boundingBox||u.computeBoundingBox(),r.copy(u.boundingBox).applyMatrix4(l.matrixWorld),!r.intersectsBox(n)))return;let g=new Set,m=p?.count??f.count,A=_=>n.containsPoint(s.fromBufferAttribute(f,_).applyMatrix4(l.matrixWorld));for(let _=0;_<m;_+=3){let M=[0,1,2].map(E=>p?p.getX(_+E):_+E);if(M.every(A))for(let E of M)g.add(E)}if(!g.size)return;let x=l.matrixWorld.clone().invert(),v=new T(.12,0,0).applyMatrix4(x).sub(new T().applyMatrix4(x));for(let _ of g)f.setXYZ(_,f.getX(_)+v.x,f.getY(_)+v.y,f.getZ(_)+v.z);f.needsUpdate=!0,u.computeBoundingBox(),u.computeBoundingSphere(),a+=g.size,o++}),!a)throw Error("Original den table geometry unavailable");e[t]=[4.98,8.79,6.46,9.45];let c={shiftEast:.12,westOpening:.52,visitorDiameter:.44,vertices:a,meshes:o};return i.userData.denClearance=c,c}var Vm=ut(()=>{gt()});function UM(i){let e=i.output();if(!e||i.muted)return;let{context:t,destination:n}=e,s=t.sampleRate,r=t.createBuffer(1,Math.ceil(s*.12),s),a=r.getChannelData(0),o=257,c=0;for(let h=0;h<a.length;h++){let d=h/s;o=Math.imul(1664525,o)+1013904223>>>0;let u=o/2147483648-1,f=Math.exp(-d*330)+(d>.038?.53*Math.exp(-270*(d-.038)):0);a[h]=.15*f*(.65*(u-c)+.35*Math.sin(2*Math.PI*1350*d)),c=u}let l=t.createBufferSource();l.buffer=r,l.connect(n),l.onended=()=>l.disconnect(),l.start()}function OM(i,e,t,n){let s=i.getBoundingClientRect(),r=i.width/s.width,a=i.height/s.height,o=Math.round(e.width*r),c=Math.round(e.height*a),l=Math.max(12,Math.round(Math.min(o,c)*.045)),h=Math.max(36,Math.round(l*2.3)),d=document.createElement("canvas");d.width=o+2*l,d.height=c+l+h;let u=d.getContext("2d",{alpha:!1});u.fillStyle="#f2ebdb",u.fillRect(0,0,d.width,d.height),u.drawImage(i,(e.left-s.left)*r,(e.top-s.top)*a,o,c,l,l,o,c);let f=d.height-h*.36;u.fillStyle="#37392f",u.font="italic "+Math.round(h*.37)+"px Georgia, serif",u.fillText("Arroyo Fold",l,f),u.textAlign="right",u.fillStyle="#605b4b",u.font=Math.max(9,Math.round(h*.19))+"px Georgia, serif";let p=n>.78?"Night":n>.59?"Blue hour":n>.27?"Golden hour":"Afternoon";return u.fillText(p+"  \xB7  1958",d.width-l,f),new Promise((g,m)=>d.toBlob(A=>A?g({blob:A,width:d.width,height:d.height,sequence:t}):m(Error("Image encoding failed")),"image/jpeg",.955))}async function Wm({scene:i,camera:e,loader:t,light:n,register:s,dirty:r,renderer:a,audio:o,onPhotograph:c}){let l=await t.loadAsync("assets/rangefinder.glb"),h=l.scene,d=-.39;h.name="35 mm coupled rangefinder",h.position.copy(Hm),h.rotation.y=d,h.traverse(L=>{L.isMesh&&(n.patch(L.material,{plainMap:!0}),L.castShadow=L.receiveShadow=!0)}),i.add(h);let u=document.querySelector("#camera-tools"),f=document.querySelector("#camera-toggle"),p=document.querySelector("#camera-shutter"),g=document.querySelector("#camera-save"),m=document.querySelector("#finder"),A=m.querySelector(".film-frame"),x=m.querySelector("output"),v=!1,_=!1,M=!1,E=!1,b=!1,y=0,I="",S=null,C=null,w=new T,B=new T(.1,-.13,-.23),R=new T,U=new Gt;function P(){let L=M&&v&&_;document.body.classList.toggle("using-finder",L),m.hidden=!L,u.hidden=!M||!v,p.hidden=!L,f.textContent=_?"Lower camera":"Viewfinder",f.title=f.textContent+" (F)",g.hidden=!I,x.value=String(y+1).padStart(2,"0")}function F(){M&&v&&(_=!_,P())}function H(){return!M||!v||!_||E||b||C?!1:(E=!0,r({reflections:!1}),UM(o),!0)}function O(){v=_=E=!1,C=null,h.position.copy(Hm),h.rotation.set(0,d,0),h.visible=!0,P(),r({shadows:!0})}return s({id:"rangefinder",point:NM,reach:1.85,radius:.108,priority:-.1,label:()=>v?"Return camera to console":"Pick up 35 mm camera",use:()=>{if(v){O();return}v=!0,h.visible=!0,C={t:0,from:h.position.clone(),rotation:h.quaternion.clone()},P(),r({shadows:!0})}}),f.addEventListener("click",F),p.addEventListener("click",H),g.addEventListener("click",()=>{document.querySelector("#announcement").textContent="Saving postcard"}),addEventListener("pagehide",L=>{!L.persisted&&I&&URL.revokeObjectURL(I)}),P(),{get held(){return v},get raised(){return v&&_&&M},get lastImage(){return S},toggleFinder:F,shutter:H,reset(){v&&O()},update(L,G){if(M!==(G==="walk")&&(M=G==="walk",P()),!C||!M)return;C.t=Math.min(1,C.t+L/.42);let V=Ye.smoothstep(C.t,0,1);w.copy(B).applyQuaternion(e.quaternion).add(e.position),R.lerpVectors(C.from,w,V),R.y+=.07*Math.sin(V*Math.PI),r({reflections:!1}),h.position.copy(R),U.copy(e.quaternion),h.quaternion.slerpQuaternions(C.rotation,U,V),V===1&&(C=null,h.visible=!1,_=!0,P(),r({shadows:!0}))},afterRender(L){if(!E||(E=!1,!M||!_))return;b=!0;let G=A.getBoundingClientRect(),V=++y,X=OM(a.domElement,G,V,L);m.animate?.([{opacity:.08},{opacity:1}],{duration:160,easing:"ease-out"}),X.then(z=>{let K=I;I=URL.createObjectURL(z.blob),g.href=I,g.download="Arroyo Fold - "+String(V).padStart(2,"0")+".jpg",S={width:z.width,height:z.height,sequence:V},c(),K&&URL.revokeObjectURL(K),P(),document.querySelector("#announcement").textContent="Exposure "+V+" ready. Save postcard."}).catch(()=>{document.querySelector("#announcement").textContent="The photograph could not be saved. Try the shutter again."}).finally(()=>{b=!1})}}}var Hm,NM,Km=ut(()=>{gt();Hm=new T(-4.65,.732,-5.14),NM=new T(-4.65,.782,-5.14)});function GM(i,e,t){let n=i.geometry,s=new Map,r=[],a=[];for(let u of e)s.has(u)||(s.set(u,r.length),r.push(u)),a.push(s.get(u));let o=new lt;for(let[u,f]of Object.entries(n.attributes)){let p=f.itemSize,g=new Float32Array(r.length*p);for(let m=0;m<r.length;m++)for(let A=0;A<p;A++)g[m*p+A]=f.getComponent(r[m],A);o.setAttribute(u,new St(g,p))}o.setIndex(a),o.applyMatrix4(i.matrixWorld);let c=o.attributes.position,l=[],h=[];for(let u=0;u<c.count;u++){let f=c.getX(u),p=c.getY(u),g=Ye.clamp((2.4-p)/2.23,0,1),m=g*g*(1.4-.4*g),A=(f-t.left)/(t.right-t.left),x=.85+.15*Math.cos(A*6.28+g*1.2);l.push(.018*m*A,.026*m*m,-.115*m*x),h.push(.015*m*Math.sin(A*2.4),.009*m*A,-.035*m*Math.sin(A*4.4+g*1.8))}o.morphTargetsRelative=!0,o.morphAttributes.position=[new Ke(l,3),new Ke(h,3)],o.computeBoundingBox(),o.computeBoundingSphere();let d=new Qe(o,i.material);return d.name=t.door+" \u2014 linen fold",d.castShadow=i.castShadow,d.receiveShadow=i.receiveShadow,d}function qm({scene:i,core:e,details:t,animateRegion:n}){let s=kM.map(o=>({...o,parts:[],drive:0,box:new it(new T(o.left-.04,.04,-.5),new T(o.right+.05,2.45,-.04))})),r=new T;for(let o of[e,t])o.updateWorldMatrix(!0,!0),o.traverse(c=>{if(!c.isMesh||!/(^linen$|botanical curtain print)/i.test(c.material?.name??""))return;let l=c.geometry,h=l.attributes.position;l.boundingBox||l.computeBoundingBox();let d=l.boundingBox.clone().applyMatrix4(c.matrixWorld);if(!s.some(m=>m.box.intersectsBox(d)))return;let u=new Int8Array(h.count).fill(-1);for(let m=0;m<h.count;m++)r.fromBufferAttribute(h,m).applyMatrix4(c.matrixWorld),!(r.z<-.32||r.z>-.08||r.y<.06||r.y>2.405)&&(u[m]=s.findIndex(A=>r.x>=A.left&&r.x<=A.right));let f=[],p=s.map(()=>[]),g=l.index?.array;for(let m=0;m<(g?.length??h.count);m+=3){let A=g?g[m]:m,x=g?g[m+1]:m+1,v=g?g[m+2]:m+2,_=u[A];(_>=0&&_===u[x]&&_===u[v]?p[_]:f).push(A,x,v)}if(!p.every(m=>!m.length)){for(let m=0;m<s.length;m++){if(!p[m].length)continue;let A=GM(c,p[m],s[m]);i.add(A),s[m].parts.push(A)}f.length?l.setIndex(f):c.visible=!1}});for(let o of s)n(()=>o.drive>.002?o.box:null);let a=0;return{groups:s,update(o,c){a+=o;for(let l of s){let h=c.find(p=>p.group.userData.label===l.door)?.open??0;l.drive=Ye.damp(l.drive,h,1.4,o),!h&&l.drive<.001&&(l.drive=0);let d=a+l.phase,u=l.drive*(.48+.26*Math.sin(d*.91)+.16*Math.sin(d*1.61+2)),f=l.drive*(.48*Math.sin(d*1.07+.6)+.3*Math.sin(d*.64));for(let p of l.parts)p.morphTargetInfluences[0]=u,p.morphTargetInfluences[1]=f}}}}var kM,Xm=ut(()=>{gt();kM=[{left:-2.75,right:-2.21,door:"Living sliding door",phase:1.6},{left:3.55,right:3.97,door:"Living sliding door",phase:.2},{left:8.38,right:8.86,door:"Dining sliding door",phase:3.1}]});function Jm(){let i,e,t,n,s=!1,r=!1,a=new Map,o=new Map,c=new Map,l=new Map,h=new Set,d=0,u=0,f=null,p=0,g=new Map,m=null;async function A(){m=null;let F=f,H=a.get("record"),O=++p;if(!F||!H||!i||(o.set("record",0),!F.playing))return;let L=g.get(F.url);L||(L=fetch(F.url).then(G=>{if(!G.ok)throw Error("Record side unavailable");return G.arrayBuffer()}).then(G=>i.decodeAudioData(G)),g.set(F.url,L));try{let G=await L;if(O!==p)return;let V=i.createBufferSource();V.buffer=G;let X=ma(F.offset||0,0,Math.max(0,G.duration-.001)),z=i.currentTime;V.connect(H.filter),V.start(z,X),m={start:z,offset:X},H.source.stop(),H.source.disconnect(),H.source=V,o.set("record",1)}catch{g.delete(F.url)}}function x(F){f=F,A()}function v(F){return c.has(F)||c.set(F,fetch("assets/effects/"+F+".ogg").then(H=>{if(!H.ok)throw Error("Missing foley");return H.arrayBuffer()}).then(H=>i.decodeAudioData(H)).catch(()=>null)),c.get(F)}function _(F){let H=F.position?C.distanceTo(F.position):0,O=1-Xi(.5,7,H),L=F.position?ma((S.x*(F.position.x-C.x)+S.z*(F.position.z-C.z))/Math.max(1,H),-.9,.9):0;F.gain.gain.setTargetAtTime(F.volume*O*(1-d*.7),i.currentTime,.045),F.pan.pan.setTargetAtTime(L,i.currentTime,.045),F.filter.frequency.setTargetAtTime(Ye.lerp(13e3,580,d),i.currentTime,.08)}function M(F,H,O,L=!1){let G=i.createBufferSource(),V=i.createBiquadFilter(),X=i.createGain(),z=i.createStereoPanner();G.buffer=F,G.loop=L,V.type="lowpass",X.gain.value=0,G.connect(V),V.connect(X),X.connect(z),z.connect(e);let K={source:G,filter:V,gain:X,pan:z,position:O?.clone()??null,volume:H};return G.onended=()=>{G.disconnect(),V.disconnect(),X.disconnect(),z.disconnect(),h.delete(K)},_(K),G.start(),K}function E(F,H=.42,O=null){if(!i||i.state!=="running"||s)return;let L=i.currentTime;v(F).then(G=>{!G||s||i.state!=="running"||i.currentTime-L>.4||h.add(M(G,H,O))})}function b(F){if(!F.node)return;let H=F.node;F.node=null,H.gain.gain.setTargetAtTime(0,i.currentTime,.012),H.source.stop(i.currentTime+.05)}function y(F){if(!i||i.state!=="running"||s||!F.on||F.node)return;let H=F.version;v(F.sample).then(O=>{!O||F.version!==H||!F.on||F.node||s||i.state!=="running"||(F.node=M(O,F.volume,F.position,!0))})}function I(F,H,O){let L=l.get(F);L||(L={sample:F==="kitchen-tap"?"faucet-kitchen":"faucet-bath",volume:F==="kitchen-tap"?.55:.42,position:O.clone(),on:!1,version:0,node:null},l.set(F,L)),L.position.copy(O),L.on=!!H,L.version++,L.on?y(L):b(L)}let S=new T,C=new T,w=new T,B=new T(0,1,0);async function R(){if(!i){let F=window.AudioContext||window.webkitAudioContext;if(!F)return r=!0,!1;i=new F,e=i.createGain(),e.gain.value=s?0:.65,e.connect(i.destination),n=ZA({context:i,output:e,isMuted:()=>s}),t=Promise.all(QM.map(async H=>{try{let O=await fetch(`./assets/audio/${H}.ogg`);if(!O.ok)throw new Error("Audio unavailable");let L=await i.decodeAudioData(await O.arrayBuffer()),G=i.createBufferSource();G.buffer=L,G.loop=!0;let V=i.createGain();V.gain.value=0;let X=i.createBiquadFilter();X.type="lowpass",X.frequency.value=16e3;let z=i.createStereoPanner();G.connect(X),X.connect(V),V.connect(z),z.connect(e),G.start(0,H==="birds"?0:Math.random()*Math.min(6,L.duration/2)),a.set(H,{source:G,gain:V,filter:X,pan:z}),H==="record"&&f&&A()}catch{r=!0}}))}try{await i.resume(),await t;for(let F of l.values())y(F);return!r}catch{return!1}}function U(F){if(s=!!F,i&&e&&e.gain.setTargetAtTime(s?0:.65,i.currentTime,.08),!s)for(let H of l.values())y(H);return s}function P(F,H=.4,O=[]){if(!i||i.state!=="running")return;F.getWorldPosition(C),F.getWorldDirection(w);let L=C.x,G=-C.z,V=Xi(-.6,.8,G)*(1-Xi(10.8,11.6,G))*Xi(-9.7,-8.8,L)*(1-Xi(8.8,9.6,L)),X=Xi(.63,.97,H);u=0;for(let ae of O){let ee=Math.hypot(L-ae.basePosition.x,C.z-ae.basePosition.z);u=Math.max(u,ae.open*(1-Xi(.6,9.5,ee)))}let z=V*(1-u*.9),K=1-z*.91;S.crossVectors(w,B).normalize();let j=(ae,ee,me,fe)=>1-Xi(me,fe,Math.hypot(L-ae,G-ee)),ce={wind:.44*K*(1-X*.38),birds:.6*K*(1-X),night:1*K*X,pool:.8*j(.4,-7.8,2,18)*(1-z*.86),fire:1.45*j(2.78,1.3,1.5,10)*(G>5.8?.28:1),record:.55*j(5.6,10.4,1.5,21)*(1-.68*(1-Xi(4.8,7.5,G)))*(.25+.75*V+.68*u*(1-V))};for(let[ae,ee]of a){ee.gain.gain.setTargetAtTime(ce[ae]*(o.get(ae)??1),i.currentTime,.18);let me=["wind","birds","night","pool"].includes(ae);ee.filter.frequency.setTargetAtTime(Ye.lerp(me?14e3-z*12e3:13e3-(1-V)*(1-u*.87)*10500,580,d),i.currentTime,.5);let fe=ae==="pool"?[.4,-7.8]:ae==="fire"?[2.78,1.3]:ae==="record"?[5.6,10.4]:null,Re=fe?ma((S.x*(fe[0]-L)+S.z*(-fe[1]-C.z))/Math.max(2,Math.hypot(fe[0]-L,fe[1]-G)),-.8,.8):0;ee.pan.pan.setTargetAtTime(Re,i.currentTime,.25)}for(let ae of l.values())ae.node&&_(ae.node);for(let ae of h)_(ae)}return{start:R,update:P,step:F=>n?.(F),setMuted:U,cue:E,setFlow:I,setRecord:x,recordTime:()=>m?m.offset+i.currentTime-m.start:null,output:()=>i&&e?{context:i,destination:e}:null,get immersed(){return d},get aperture(){return u},setImmersion(F){d=ma(F,0,1)},setLayer(F,H){o.set(F,ma(H,0,1))},get muted(){return s},get available(){return!r}}}var QM,ma,Xi,Ym=ut(()=>{gt();Kh();QM=["wind","birds","pool","fire","record","night"],ma=(i,e,t)=>Math.min(t,Math.max(e,i)),Xi=(i,e,t)=>{let n=ma((t-i)/(e-i),0,1);return n*n*(3-2*n)}});function jm(i,e){let t=e.cellMeters,n=e.toleranceMeters**2,s=new Map,r=(u,f,p)=>`${u}/${f}/${p}`;for(let u of e.triangles){let f=[0,1,2].map(g=>u.v.reduce((m,A)=>m+A[g],0)/3),p=r(...f.map(g=>Math.floor(g/t)));s.has(p)||s.set(p,[]),s.get(p).push(u)}let a=Object.fromEntries(Object.entries(e.matrices).map(([u,f])=>[u,new Be().set(...f.flat())])),o=Object.fromEntries(Object.entries(a).map(([u,f])=>[u,new rt().getNormalMatrix(f)])),c={removedShellTriangles:0,movedChairTriangles:0,lampTriangles:0,matchedTriangles:0,unmatchedWorkstationTriangles:0,counts:{}},l=new T,h=new T;i.updateMatrixWorld(!0);function d(u){let f=[0,1,2].map(g=>u.reduce((m,A)=>m+A[g],0)/3),p=f.map(g=>Math.floor(g/t));for(let g=-1;g<=1;g++)for(let m=-1;m<=1;m++)for(let A=-1;A<=1;A++)for(let x of s.get(r(p[0]+g,p[1]+m,p[2]+A))||[])if(u.every(v=>x.v.some(_=>v.reduce((M,E,b)=>M+(E-_[b])**2,0)<n)))return x.action;return null}if(i.traverse(u=>{if(!u.isMesh)return;let f=u.geometry,p=f.getAttribute("position"),g=f.index?.array,m=[],A=new Map,x=new rt().getNormalMatrix(u.matrixWorld),v=x.clone().invert(),_=u.matrixWorld.clone().invert();for(let M=0;M<(g?.length??p.count);M+=3){let E=[g?g[M]:M,g?g[M+1]:M+1,g?g[M+2]:M+2],b=E.map(B=>(l.fromBufferAttribute(p,B).applyMatrix4(u.matrixWorld),[l.x,-l.z,l.y])),y=b.reduce((B,R)=>B+R[0],0)/3,I=b.reduce((B,R)=>B+R[1],0)/3,S=b.reduce((B,R)=>B+R[2],0)/3,C=y>-2.05&&y<-.99&&I>9.1&&I<10.75&&S<1.4,w=C?d(b):null;if(w){if(c.matchedTriangles++,c.counts[w]=(c.counts[w]||0)+1,w==="remove"){c.removedShellTriangles++;continue}w==="chair"?c.movedChairTriangles++:c.lampTriangles++;for(let B of E){if(A.has(B)&&A.get(B)!==w)throw new Error("Child workstation transform crosses source objects");A.set(B,w)}}else C&&c.unmatchedWorkstationTriangles++;m.push(...E)}if(A.size){for(let b of["position","normal"]){let y=f.getAttribute(b);if(!y)continue;let I=new Float32Array(y.count*y.itemSize);for(let S=0;S<y.count;S++)for(let C=0;C<y.itemSize;C++)I[S*y.itemSize+C]=y.getComponent(S,C);f.setAttribute(b,new St(I,y.itemSize))}let M=f.getAttribute("position"),E=f.getAttribute("normal");for(let[b,y]of A)l.fromBufferAttribute(M,b).applyMatrix4(u.matrixWorld),l.set(l.x,-l.z,l.y).applyMatrix4(a[y]),l.set(l.x,l.z,-l.y).applyMatrix4(_),M.setXYZ(b,l.x,l.y,l.z),E&&(h.fromBufferAttribute(E,b).applyMatrix3(x),h.set(h.x,-h.z,h.y).applyMatrix3(o[y]),h.set(h.x,h.z,-h.y).applyMatrix3(v).normalize(),E.setXYZ(b,h.x,h.y,h.z));M.needsUpdate=!0,E&&(E.needsUpdate=!0)}m.length!==(g?.length??p.count)&&f.setIndex(m),(A.size||m.length!==(g?.length??p.count))&&(f.computeBoundingBox(),f.computeBoundingSphere())}),c.removedShellTriangles<350||c.movedChairTriangles<240||c.lampTriangles<1100)throw new Error("Child workstation source geometry did not match the delivered core");return c}var Zm=ut(()=>{gt()});function VM(i,e,t,n){return!!(i==="linen"&&(n>-.08&&n<.88&&(e>-2.76&&e<-1.64&&t>.91&&t<4.36||e>-1.99&&e<1.73&&t>3.4&&t<4.38||e>-2.01&&e<1.01&&t>.84&&t<1.8)||n>.21&&n<.96&&(e>-7.82&&e<-5.68&&t>8.2&&t<10.5||e>-4.31&&e<-2.98&&t>8.2&&t<10.46)||n>.32&&n<1.15&&t>8.22&&t<9.2&&(e>3.57&&e<4.43||e>6.77&&e<7.63)||e>.69&&e<1.23&&t>7.09&&t<7.23&&n>.73&&n<1.29||e>-8.1&&e<-7.99&&t>1.87&&t<2.22&&n>.52&&n<.93)||["plain","linen"].includes(i)&&n>.38&&n<.91&&zM.some(([s,r])=>Math.abs(e-s)<.32&&Math.abs(t-r)<.32)||i==="plain"&&e>-1.59&&e<-1.27&&t>9.68&&t<9.92&&n>.765&&n<.778||i==="plain"&&e>5.34&&e<7.66&&t>2.39&&t<3.81&&n>.702&&n<.796||i==="plain"&&e>.741&&e<1.179&&t>7.117&&t<7.133&&n>.819&&n<.881||i==="metal"&&e>.62&&e<1.35&&t>7.07&&t<7.2&&n>1.2&&n<1.3||["plain","metal"].includes(i)&&e>-.46&&e<2.14&&t>9.75&&t<10.76&&n>-.02&&n<.71)}function HM(i){let e=0,t=0,n=new it;i.updateMatrixWorld(!0);let s=new T;return i.traverse(r=>{if(!r.isMesh||!["linen","plain","metal"].includes(r.material.name))return;let a=r.geometry,o=a.getAttribute("position"),c=a.index?.array,l=[];for(let h=0;h<(c?.length??o.count);h+=3){let d=[c?c[h]:h,c?c[h+1]:h+1,c?c[h+2]:h+2];s.set(0,0,0);for(let u of d)s.x+=o.getX(u)/3,s.y+=o.getY(u)/3,s.z+=o.getZ(u)/3;if(s.applyMatrix4(r.matrixWorld),VM(r.material.name,s.x,-s.z,s.y)){e++,n.expandByPoint(s),s.x>-.75&&s.x<.05&&-s.z>7.95&&-s.z<9.15&&t++;continue}l.push(...d)}l.length!==(c?.length??o.count)&&(a.setIndex(l),a.computeBoundingSphere())}),{removedTriangles:e,removedNearVanity:t,maskBounds:{min:n.min.toArray(),max:n.max.toArray()}}}async function $m({scene:i,core:e,loader:t,light:n}){let[s,r]=await Promise.all([t.loadAsync("assets/interior-craft.glb"),fetch("assets/child-workstation.json").then(d=>{if(!d.ok)throw new Error("Child workstation geometry "+d.status);return d.json()})]),a=jm(e,r),o=HM(e),c=new st;c.name="Tailored interior furniture";let l=new Map;s.scene.updateMatrixWorld(!0),s.scene.traverse(d=>{if(!d.isMesh)return;let u=d.material;l.has(u)||l.set(u,[]);let f=d.geometry.clone();for(let p of["position","normal","uv"]){let g=f.getAttribute(p);if(!g)continue;let m=new Float32Array(g.count*g.itemSize);for(let A=0;A<g.count;A++)for(let x=0;x<g.itemSize;x++)m[A*g.itemSize+x]=g.getComponent(A,x);f.setAttribute(p,new St(m,g.itemSize))}f.applyMatrix4(d.matrixWorld);for(let p of Object.keys(f.attributes))["position","normal","uv"].includes(p)||f.deleteAttribute(p);f.getAttribute("uv")||f.setAttribute("uv",new St(new Float32Array(f.getAttribute("position").count*2),2)),l.get(u).push(f)});let h=0;for(let[d,u]of l){if(u.length>1&&u.some(m=>m.index))for(let m of u)m.index||m.setIndex(Array.from({length:m.attributes.position.count},(A,x)=>x));let f=u.length===1?u[0]:ln(u,!1);if(u.length>1)for(let m of u)m.dispose();if(!f)throw new Error("Interior furniture geometry merge failed");/wool|cotton/.test(d.name)&&(d.roughness=.94,d.normalScale?.setScalar(.42),"sheen"in d&&(d.sheen=.24,d.sheenRoughness=.85));for(let m of[d.map,d.normalMap,d.roughnessMap])m&&(m.wrapS=m.wrapT=rn,m.anisotropy=8);n.patch(d,{plainMap:!0});let g=new Qe(f,d);g.name=d.name,g.castShadow=!/porcelain enamel/.test(d.name),g.receiveShadow=!0,c.add(g),h+=(f.index?.count??f.attributes.position.count)/3}return i.add(c),{root:c,...o,workstation:a,triangles:h,draws:l.size}}var zM,eg=ut(()=>{gt();oi();Zm();zM=[[5.83,2.2],[6.85,2.2],[5.83,4],[6.85,4],[5.06,3.1],[7.91,3.1],[7.85,7.87]]});function WM(){let i=new st;i.name="Fabricated stainless pool ladder";let e=new at({name:"Pool ladder polished 316 stainless",color:"#d3d9d7",metalness:1,roughness:.19}),t=new at({name:"Pool ladder satin stainless fittings",color:"#aab5b4",metalness:1,roughness:.29}),n=new at({name:"Pool ladder charcoal non-slip rubber",color:"#262c2c",roughness:.84}),s=new T(7.79925,0,9.32656),r=new T(.605,0,.796).normalize(),a=new T(r.z,0,-r.x),o=(u,f,p)=>s.clone().addScaledVector(a,u).addScaledVector(r,p).setY(f),c=(u,f,p,g)=>{let m=new Qe(f,p);return m.name=u,g&&m.position.copy(g),m.castShadow=m.receiveShadow=!0,i.add(m),m};function l(u,f,p,g,m,A=new T(0,1,0),x=32){let v=c(u,new Qt(f,f,p,x),g,m);return v.quaternion.setFromUnitVectors(new T(0,1,0),A),v}function h(u,f,p,g){let m=c(u,new Nt(...f),p,g);return m.rotation.y=Math.atan2(-a.z,a.x),m}for(let u of[-.28,.28]){let f=new kr;f.add(new Ps(o(u,-.045,.48),o(u,.62,.48)));let p=new os(0,0,.4,.4,0,Math.PI,!1,0),g=[];for(let m=0;m<=64;m++){let A=p.getPoint(m/64);g.push(o(u,.62+A.y,.08+A.x))}f.add(new mi(g,!1,"centripetal")),f.add(new Ps(o(u,.62,-.32),o(u,-1.08,-.32))),c("Continuous 38 mm bent stainless handrail",new gi(f,192,.019,16,!1),e),l("Deck anchor gasket",.066,.006,n,o(u,.015,.48)),l("Anchor cover flange",.064,.014,t,o(u,.024,.48)),l("Socket collar",.027,.045,e,o(u,.047,.48));for(let m of[Math.PI/2,Math.PI*7/6,Math.PI*11/6]){let A=o(u+Math.cos(m)*.047,.035,.48+Math.sin(m)*.047);l("Countersunk anchor screw",.0045,.003,e,A,void 0,12);let x=h("Anchor screw slot",[.006,7e-4,.0012],n,A.clone().add(new T(0,.0016,0)));x.rotation.y+=m}l("Underwater wall bumper stem",.012,.055,t,o(u,-1.04,-.285),r),l("Rubber shell bumper",.037,.025,n,o(u,-1.04,-.245),r),l("Sealed rail end cap",.019,.008,e,o(u,-1.081,-.32))}for(let u of[-.34,-.62,-.9]){h("Formed stainless tread with folded lips",[.57,.034,.116],t,o(0,u,-.32)),h("Recessed non-slip step insert",[.473,.009,.09],n,o(0,u+.022,-.32));for(let f=-8;f<=8;f++)h("Moulded grip rib",[.007,.0035,.082],n,o(f*.0255,u+.028,-.32));for(let f of[-.28,.28])l("Rail-to-tread saddle clamp",.023,.056,t,o(f,u,-.32)),l("Step attachment hex bolt",.007,.01,e,o(f,u,-.345),r,6)}let d=new Map;for(let u of[...i.children])u.updateMatrix(),u.geometry.applyMatrix4(u.matrix),d.has(u.material)||d.set(u.material,[]),d.get(u.material).push(u.geometry),i.remove(u);for(let[u,f]of d){let p=c(u.name,ln(f),u);p.castShadow=p.receiveShadow=!0;for(let g of f)g.dispose()}return i.userData.fabrication={railDiameter:.038,railSpacing:.56,rungSpacing:.28,deckAnchors:2,steps:3},i}function tg({scene:i,light:e}){let t=0;i.traverse(s=>{if(!s.isMesh||!/^landscape[ _]metal/.test(s.name))return;let r=s.geometry,a=r.getAttribute("position"),o=r.index,c=[],l=new T;s.updateWorldMatrix(!0,!1);let h=u=>(l.fromBufferAttribute(a,u).applyMatrix4(s.matrixWorld),l.x>7.59&&l.x<8.21&&l.y>-.89&&l.y<.73&&l.z>8.84&&l.z<10.56),d=o?o.count:a.count;for(let u=0;u<d;u+=3){let f=[0,1,2].map(p=>o?o.getX(u+p):u+p);f.every(h)?t++:c.push(...f)}c.length!==d&&(s.geometry=r.clone(),s.geometry.setIndex(c),s.geometry.computeBoundingSphere())});let n=WM();if(e){let s=new Set;n.traverse(r=>{!r.material||s.has(r.material)||(s.add(r.material),e.patch(r.material,{plainMap:!0}))})}return n.userData.replacedTriangles=t,i.add(n),n}var ng=ut(()=>{gt();oi()});var rr,ig=ut(()=>{gt();rr=class i extends Qe{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let n=this,s=t.color!==void 0?new We(t.color):new We(8355711),r=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,c=t.shader||i.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,h=new Mn,d=new T,u=new T,f=new T,p=new Be,g=new T(0,0,-1),m=new mt,A=new T,x=new T,v=new mt,_=new Be,M=new qt(r,a,{samples:l,type:Ct}),E=new Ut({name:c.name!==void 0?c.name:"unspecified",uniforms:il.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});E.uniforms.tDiffuse.value=M.texture,E.uniforms.color.value=s,E.uniforms.textureMatrix.value=_,this.material=E,this.onBeforeRender=function(b,y,I){let S=this.getReflectionCamera(I);if(u.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(I.matrixWorld),p.extractRotation(n.matrixWorld),d.set(0,0,1),d.applyMatrix4(p),A.subVectors(u,f),A.dot(d)>0===!0&&this.forceUpdate===!1)return;A.reflect(d).negate(),A.add(u),p.extractRotation(I.matrixWorld),g.set(0,0,-1),g.applyMatrix4(p),g.add(f),x.subVectors(u,g),x.reflect(d).negate(),x.add(u),S.position.copy(A),S.up.set(0,1,0),S.up.applyMatrix4(p),S.up.reflect(d),S.lookAt(x),S.far=I.far,S.updateMatrixWorld(),S.projectionMatrix.copy(I.projectionMatrix),S.projectionMatrix.elements[8]*=-1,S.projectionMatrix.elements[12]*=-1,_.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),_.multiply(S.projectionMatrix),_.multiply(S.matrixWorldInverse),_.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(d,u),h.applyMatrix4(S.matrixWorldInverse),m.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let w=S.projectionMatrix;S.isOrthographicCamera?(v.x=(Math.sign(m.x)+w.elements[8])/w.elements[0],v.y=(Math.sign(m.y)+w.elements[9])/w.elements[5],v.z=-I.far,v.w=1):(v.x=(Math.sign(m.x)+w.elements[8])/w.elements[0],v.y=(Math.sign(m.y)+w.elements[9])/w.elements[5],v.z=-1,v.w=(1+w.elements[10])/w.elements[14]),m.multiplyScalar(2/m.dot(v)),w.elements[2]=m.x,w.elements[6]=m.y,S.isOrthographicCamera?(w.elements[10]=m.z-o,w.elements[14]=m.w-1):(w.elements[10]=m.z+1-o,w.elements[14]=m.w),n.visible=!1;let B=b.getRenderTarget(),R=b.xr.enabled,U=b.shadowMap.autoUpdate;b.xr.enabled=!1,b.shadowMap.autoUpdate=!1,b.setRenderTarget(M),b.state.buffers.depth.setMask(!0),b.autoClear===!1&&b.clear(),b.render(y,S),b.xr.enabled=R,b.shadowMap.autoUpdate=U,b.setRenderTarget(B);let P=I.viewport;P!==void 0&&b.state.viewport(P),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return M},this.dispose=function(){M.dispose(),n.material.dispose()},this.getReflectionCamera=function(b){let y=this._reflectionCameras.get(b);return y===void 0&&(y=b.clone(),this._reflectionCameras.set(b,y)),y}}};rr.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`}});function XM(){let t=new Uint8Array(65536),n=[];for(let r=0;r<10;r++)for(let a=0;a<10;a++){let o=c=>{let l=Math.sin(c*127.1+311.7)*43758.5453;return l-Math.floor(l)};n.push([a+.2+.6*o(a+r*10),r+.2+.6*o(a+r*10+201)])}for(let r=0;r<256;r++)for(let a=0;a<256;a++){let o=a/256*10,c=r/256*10,l=o+.24*Math.sin(c*Math.PI*4/10)+.13*Math.cos(o*Math.PI*6/10),h=c+.27*Math.cos(o*Math.PI*4/10)+.11*Math.sin(c*Math.PI*6/10),d=Math.floor(l),u=Math.floor(h),f=1/0,p=1/0;for(let g=-1;g<=1;g++)for(let m=-1;m<=1;m++){let A=d+m,x=u+g,v=n[(x%10+10)%10*10+(A%10+10)%10],_=Math.hypot(v[0]+A-(A%10+10)%10-l,v[1]+x-(x%10+10)%10-h);_<f?(p=f,f=_):p=Math.min(p,_)}t[r*256+a]=Math.round(255*Math.exp(-Math.pow((p-f)/.075,2)))}let s=new Bn(t,256,256,jn,ot);return s.wrapS=s.wrapT=rn,s.generateMipmaps=!0,s.minFilter=Ht,s.needsUpdate=!0,s}function JM(i){let e=i.getAttribute("position"),t=i.index,n=new Map,s=c=>[e.getX(c),e.getY(c)].map(l=>Math.round(l*1e4)).join(","),r=t?t.count:e.count;for(let c=0;c<r;c+=3){let l=[0,1,2].map(h=>t?t.getX(c+h):c+h);for(let h=0;h<3;h++){let d=l[h],u=l[(h+1)%3],f=s(d),p=s(u),g=f<p?`${f}|${p}`:`${p}|${f}`,m=n.get(g);m?m.count++:n.set(g,{a:d,b:u,count:1})}}let a=[...n.values()].filter(c=>c.count===1),o=new Float32Array(e.count);for(let c=0;c<e.count;c++){let l=e.getX(c),h=e.getY(c),d=1/0;for(let{a:u,b:f}of a){let p=e.getX(u),g=e.getY(u),m=e.getX(f)-p,A=e.getY(f)-g,x=Math.max(0,Math.min(1,((l-p)*m+(h-g)*A)/(m*m+A*A||1)));d=Math.min(d,Math.hypot(l-p-m*x,h-g-A*x))}o[c]=Number.isFinite(d)?d:0}i.setAttribute("waterEdge",new Ke(o,1))}function YM(i,e){let t=new at({name:"Pool lamp brushed stainless bezel",color:11254454,metalness:.85,roughness:.26}),n=new at({name:"Pool lamp sealed opal lens",color:7774875,roughness:.22,emissive:9300437});n.onBeforeCompile=r=>{r.uniforms.uPoolLampPower=e.uPoolLamps,r.uniforms.uPoolLampNight=e.uNight,r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
uniform float uPoolLampPower,uPoolLampNight;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance*=uPoolLampPower*max(.22,uPoolLampNight)*2.8;`)},n.customProgramCacheKey=()=>"sealed-pool-lamp-power";let s=new T(0,1,0);for(let[r,a]of[[[.15,-.625,7.005],[1,.27,0]],[[8.635,-.625,6.39],[-.98,.27,.16]]]){let o=new T(...a).normalize(),c=new T(...r);for(let[l,h,d,u,f]of[[.105,.025,0,t,"Submerged sealed stainless lamp bezel"],[.083,.012,.017,n,"Submerged recessed opal pool light"]]){let p=new Qe(new Qt(l,l,h,40),u);p.name=f,p.quaternion.setFromUnitVectors(s,o),p.position.copy(c).addScaledVector(o,d),i.add(p)}}}function jM(i,e,t){let n=new it(new T(-.8,-1.8,3.32),new T(9.58,.13,10.7)),s=[new T,new T,new T],r=[],a=new Map;i.updateMatrixWorld(!0),i.traverse(o=>{if(!o.isMesh||o.isInstancedMesh)return;let c=/^landscape[ _](tile|plain|metal)/i.test(o.name),l=/^Pool (ladder|lamp)/.test(o.material.name),h=o.material.name.startsWith("Coping ");if(!c&&!l&&!h)return;let d=o.geometry,u=d.getAttribute("position"),f=d.index,p=[];for(let x=0,v=f?.count??u.count;x<v;x+=3){let _=f?f.getX(x):x,M=f?f.getX(x+1):x+1,E=f?f.getX(x+2):x+2;[_,M,E].some((y,I)=>n.containsPoint(s[I].fromBufferAttribute(u,y).applyMatrix4(o.matrixWorld)))&&p.push(_,M,E)}if(!p.length)return;let g=new lt;for(let[x,v]of Object.entries(d.attributes))g.setAttribute(x,v);g.setIndex(p);let m=a.get(o.material);if(!m){let x=o.material;m=x.clone(),m.onBeforeCompile=(v,_)=>{x.onBeforeCompile(v,_),v.vertexShader=v.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
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
        `)},m.customProgramCacheKey=()=>x.customProgramCacheKey()+"/submerged-image",a.set(o.material,m)}let A=new Qe(g,m);A.matrixAutoUpdate=!1,A.matrix.copy(o.matrixWorld),A.layers.set(t),A.receiveShadow=!0,A.frustumCulled=!1,A.name="Submerged "+o.name,r.push(A)}),i.add(...r),e?.layers.enable(t)}function sg(i,e=0){i.geometry.boundingBox||i.geometry.computeBoundingBox();let t=i.geometry.boundingBox.clone();t.min.x-=e,t.max.x+=e,t.min.y-=e,t.max.y+=e;let n=[];for(let l of[t.min.x,t.max.x])for(let h of[t.min.y,t.max.y])for(let d of[t.min.z,t.max.z])n.push(new mt(l,h,d,1));let s=new mt,r=new Be,a=new Be,o=null,c=new Be;return(l,h,d=!1)=>{let u=h.width,f=h.height;r.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse).multiply(i.matrixWorld);let p=1/0,g=1/0,m=-1/0,A=-1/0;for(let y of n){if(s.copy(y).applyMatrix4(r),s.w<=0||s.z<-s.w){p=g=-1,m=A=1;break}p=Math.min(p,s.x/s.w),g=Math.min(g,s.y/s.w),m=Math.max(m,s.x/s.w),A=Math.max(A,s.y/s.w)}let x=24,v=Math.max(0,Math.floor((p+1)*.5*u)-x),_=Math.max(0,Math.floor((g+1)*.5*f)-x),M=Math.min(u,Math.ceil((m+1)*.5*u)+x)-v,E=Math.min(f,Math.ceil((A+1)*.5*f)+x)-_;if(M<=0||E<=0)return null;o??=l.clone(!1),o.copy(l,!1),a.set(u/M,0,0,(u-2*v-M)/M,0,f/E,0,(f-2*_-E)/E,0,0,1,0,0,0,0,1),o.projectionMatrix.premultiply(a),o.projectionMatrixInverse.copy(o.projectionMatrix).invert();let b=d?u-v-M:v;return h.viewport.set(b,_,M,E),h.scissor.copy(h.viewport),h.scissorTest=!0,c.set(M/u,0,0,b/u,0,E/f,0,_/f,0,0,1,0,0,0,0,1),{camera:o,uvTransform:c}}}function rg({renderer:i,scene:e,camera:t,waterMesh:n}){let s=[],r=[],a=new T,o=new T,c=new T,l=0,h=.4,d=null,u=null,f=()=>{},p=0,g=new ds,m=new ge;function A(){i.getDrawingBufferSize(m);let M=Math.max(m.x,m.y),E=Math.min(.91,1344/Math.max(1,M));return m.multiplyScalar(E).round()}e.traverse(M=>{M.isDirectionalLight&&!d&&(d=M);let E=Array.isArray(M.material)?M.material:[M.material];for(let b of E)b&&/mirror/i.test(b.name)&&(b.visible=!1)});function x(M,E,b=()=>!0){let y=M.onBeforeRender,I=sg(M,M===u?.34:0),S=-1/0,C=new Be,w=new Be;M.userData.repaint=()=>{S=-1/0},M.onBeforeRender=function(B,R,U){if(U!==t||U.isVirtualCamera||!b()||!(!C.equals(U.matrixWorld)||!w.equals(U.projectionMatrix))&&l-S<E)return;let F=I(U,M.getRenderTarget(),!0);if(!F)return;let H=[];for(let G of s)G!==M&&G.visible&&(H.push(G),G.visible=!1);let O=M.getReflectionCamera(F.camera);O.isVirtualCamera=!0;let L=B.getRenderTarget();try{y.call(M,B,R,F.camera),M.material.uniforms.textureMatrix.value.premultiply(F.uvTransform),S=l,C.copy(U.matrixWorld),w.copy(U.projectionMatrix)}finally{B.setRenderTarget(L);for(let G of H)G.visible=!0}},s.push(M)}if(n?.geometry){n.updateWorldMatrix(!0,!1);let M=n.geometry.clone();for(let V of["position","normal"]){let X=M.getAttribute(V);if(!X)continue;let z=new Float32Array(X.count*3);for(let K=0;K<X.count;K++)z[K*3]=X.getX(K),z[K*3+1]=X.getY(K),z[K*3+2]=X.getZ(K);M.setAttribute(V,new Ke(z,3))}M.applyMatrix4(n.matrixWorld),M.computeBoundingBox();let E=(M.boundingBox.min.y+M.boundingBox.max.y)*.5;M.applyMatrix4(new Be().makeTranslation(0,-E,0)),M.rotateX(Math.PI/2),JM(M),M.computeBoundingSphere();let b=A();u=new rr(M,{textureWidth:b.x,textureHeight:b.y,multisample:2,clipBias:.002,color:new We("#438d8f"),shader:qM}),u.name="Pool moving planar water";let y=u.getRenderTarget();y.texture.generateMipmaps=!0,y.texture.minFilter=Ht,u.position.y=E,u.rotation.x=-Math.PI/2,u.material.transparent=!0,u.material.depthWrite=!0,u.material.toneMapped=!0,u.renderOrder=5,n.visible=!1,e.add(u),x(u,1/24);let I=new ge,S=new qt(1,1,{type:Ct,minFilter:vt,magFilter:vt,depthBuffer:!0,generateMipmaps:!1,samples:4});S.depthTexture=new Qn(1,1,wn),u.material.uniforms.uBasin.value=S.texture,u.material.uniforms.uBasinDepth.value=S.depthTexture;let C=u.onBeforeRender;YM(e,u.material.uniforms);let w=6;jM(e,d,w);let B=sg(u,.34),R=new Be,U=new Be,P=!0,F=-1,H=-1/0;f=()=>{P=!0},u.onBeforeRender=function(V,X,z){if(z!==t||z.isVirtualCamera)return;if(!R.equals(z.matrixWorld)||!U.equals(z.projectionMatrix)||P||F!==h||l-H>=1/24){i.getDrawingBufferSize(I);let j=Math.min(1,1152/Math.max(I.x,I.y)),ce=Math.round(I.x*j),ae=Math.round(I.y*j);(S.width!==ce||S.height!==ae)&&S.setSize(ce,ae);let ee=B(z,S);if(!ee)return;let me=V.getRenderTarget();ee.camera.layers.set(w);let fe=V.shadowMap.autoUpdate,Re=V.shadowMap.needsUpdate;V.shadowMap.autoUpdate=!1,V.shadowMap.needsUpdate=!1;try{V.setRenderTarget(S),V.clear(),V.render(X,ee.camera),u.material.uniforms.uProjectionInverse.value.copy(z.projectionMatrixInverse),R.copy(z.matrixWorld),U.copy(z.projectionMatrix),F=h,H=l,P=!1}finally{V.shadowMap.autoUpdate=fe,V.shadowMap.needsUpdate=Re,V.setRenderTarget(me)}}C.call(this,V,X,z)};let O=XM();O.anisotropy=Math.min(4,i.capabilities.getMaxAnisotropy());let L={uPoolCaustics:{value:O},uPoolLevel:{value:E},uPoolClock:u.material.uniforms.uClock,uPoolNight:u.material.uniforms.uNight,uPoolSun:u.material.uniforms.uSun,uPoolLamps:u.material.uniforms.uPoolLamps},G=new Set;e.traverse(V=>{if(V.layers.mask===1<<w)return;let X=Array.isArray(V.material)?V.material:[V.material];for(let z of X){if(z?.name!=="tile"||G.has(z))continue;G.add(z);let K=z.onBeforeCompile,j=z.customProgramCacheKey();z.onBeforeCompile=function(ce,ae){K.call(this,ce,ae),Object.assign(ce.uniforms,L),ce.vertexShader=ce.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vPoolWorld;`).replace("#include <project_vertex>",`#include <project_vertex>
vPoolWorld=(modelMatrix*vec4(transformed,1.)).xyz;`),ce.fragmentShader=ce.fragmentShader.replace("#include <common>",`#include <common>
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
          `)},z.customProgramCacheKey=()=>j+"/pool-caustics-v2",z.needsUpdate=!0}})}for(let M of[{position:[-8.864,1.62,-8.3],size:[.94,1.03],room:[-9,-4.7,-11.2,-7.05]},{position:[-.62,1.61,-8.55],size:[.7,.82],room:[-.7,2.3,-10.8,-7.2]}]){let E=new rr(new Vn(...M.size),{textureWidth:Math.round(512*M.size[0]/M.size[1]),textureHeight:512,multisample:0,clipBias:.002,color:new We("#e6e9e7"),shader:KM});E.name="Room planar silver reflection",E.getRenderTarget().texture.generateMipmaps=!0,E.getRenderTarget().texture.minFilter=Ht,E.position.set(...M.position),E.rotation.y=Math.PI/2,E.userData.room=M.room,e.add(E),r.push(E),x(E,1/24,()=>E.visible)}function v(M=0,E=.4){l+=Math.max(0,Math.min(M,.25)),h=Math.max(0,Math.min(1,E));let b=Math.max(0,Math.min(1,(h-.35)/.6)),y=b*b*(3-2*b);t.getWorldPosition(a);for(let I of r){let[S,C,w,B]=I.userData.room;I.visible=a.x>S&&a.x<C&&a.z>w&&a.z<B}if(u){let I=u.material.uniforms;I.uClock.value=l,I.uNight.value=y,d&&(d.getWorldPosition(o),d.target.getWorldPosition(c),I.uSun.value.copy(o).sub(c).normalize(),I.uSunColor.value.copy(d.color).multiplyScalar(Math.min(2,d.intensity)))}}function _(){if(u){let M=A();u.getRenderTarget().setSize(M.x,M.y)}f();for(let M of s)M.userData.repaint();v(0,h)}return v(0,.4),{update:v,repaint:_,surface:u,hitTest(M){if(!u)return null;g.ray.copy(M.ray??M),u.updateWorldMatrix(!0,!1);let E=g.intersectObject(u,!1)[0];return E?{distance:E.distance,point:E.point}:null},disturb(M,E=1){if(!u||!M||!Number.isFinite(M.x)||!Number.isFinite(M.z))return!1;let b=u.material.uniforms.uDisturbances.value;return b[p].set(M.x,M.z,l,Math.max(0,Math.min(1.5,E))),p=(p+1)%b.length,!0},setPoolLights(M){u&&(u.material.uniforms.uPoolLamps.value=M?1:0,f(),u.userData.repaint())}}}var KM,qM,ag=ut(()=>{gt();ig();KM={...rr.ReflectorShader,name:"Neutral silver mirror",fragmentShader:`
    uniform sampler2D tDiffuse;
    varying vec4 vUv;
    #include <logdepthbuf_pars_fragment>
    void main() {
      #include <logdepthbuf_fragment>
      gl_FragColor = vec4(texture2DProj(tDiffuse, vUv).rgb * .94, 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }
  `},qM={name:"Calm clear pool",uniforms:{color:{value:new We("#438d8f")},tDiffuse:{value:null},textureMatrix:{value:null},uClock:{value:0},uNight:{value:0},uDisturbances:{value:Array.from({length:4},()=>new mt(0,0,-100,0))},uPoolLamps:{value:1},uBasin:{value:null},uBasinDepth:{value:null},uProjectionInverse:{value:new Be},uSun:{value:new T(.63459,.22209,.74025)},uSunColor:{value:new We(1,.77,.43)}},vertexShader:`
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
  `}});function og(i,e,t,n){let s=y=>{let I=new er(128,{type:Ct,generateMipmaps:!0,minFilter:Ht}),S=new hs(.105,815,I);return S.position.copy(y),{rt:I,camera:S,version:-1}},r=s(new T(1.35,1.48,-2.8)),a=s(new T(2.1,1.45,3.15)),o=(y,I,S)=>({origin:new T(...y),lo:new T(...I),hi:new T(...S)}),c=o([1.35,1.48,-2.8],[-9.15,-.32,-7],[9.15,3.52,.08]),l=o([-6.56,1.46,-2.5],[-9.1,0,-5.75],[-2.95,3.5,.08]),h=[o([-6.15,1.52,-8.8],[-9.12,0,-11.13],[-4.6,3.6,-6.91]),o([-2.31,1.48,-8.58],[-4.68,0,-11.13],[-.72,3.26,-6.91]),o([.83,1.54,-8.77],[-.82,0,-11.13],[2.34,3.12,-6.91]),o([5.75,1.5,-8.53],[2.24,0,-11.13],[9.13,3.56,-6.91])];function d(y){return y.z<-6.94&&y.z>-11.08&&Math.abs(y.x)<9.1?h[y.x<-4.64?0:y.x<-.79?1:y.x<2.28?2:3]:y.x<-3.1&&y.x>-9.1&&y.z<0&&y.z>-5.4?l:c}let u={insideEnv:{value:r.rt.texture},yardEnv:{value:a.rt.texture},night:{value:0},roomOrigin:{value:c.origin},roomLow:{value:c.lo},roomHigh:{value:c.hi},roomReady:{value:1}};for(let[y,I]of[!1,!0].map(S=>[S,t.filter(C=>C.material.name==="car-glass"===S)])){let S=new Ut({uniforms:{...u,automotive:{value:y?1:0}},side:y?Lt:Ln,transparent:!0,depthWrite:!1,vertexShader:"varying vec3 vWorld,vNorm;void main(){vec4 p=modelMatrix*vec4(position,1.);vWorld=p.xyz;vNorm=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*viewMatrix*p;}",fragmentShader:`uniform samplerCube insideEnv,yardEnv;uniform vec3 roomOrigin,roomLow,roomHigh;uniform float automotive,night,roomReady;varying vec3 vWorld,vNorm;
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
      }`});S.forceSinglePass=!0,S.name=y?"Car glazing":"Window glazing";for(let C of I)C.material=S,C.renderOrder=2}let f=new Map,p=[r,a],g=new Set(t),m=-9,A=0,x,v=0,_;function M(){let y=f.get(x);u.insideEnv.value=y?y.rt.texture:a.rt.texture,u.roomReady.value=+!!y,u.yardEnv.value=a.rt.texture,u.roomOrigin.value=x.origin,u.roomLow.value=x.lo,u.roomHigh.value=x.hi,n(y?y.rt.texture:null,x)}function E(){let y=p.find(I=>I!==a&&!Array.from(f.values()).includes(I));if(!y&&p.length<4&&(y=s(x.origin),p.push(y)),!y){let I=[...f.keys()].find(S=>S!==x);y=f.get(I),f.delete(I)}return y}function b(y,I=0,S=6){let{camera:C,rt:w}=y;C.coordinateSystem!==i.coordinateSystem&&(C.coordinateSystem=i.coordinateSystem,C.updateCoordinateSystem()),C.updateMatrixWorld();let B=[],R=i.getRenderTarget(),U=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),F=i.xr.enabled,H=i.shadowMap.autoUpdate,O=i.shadowMap.needsUpdate,L=w.texture.mipmapsAutoUpdate;try{e.traverse(G=>{G.visible&&(G.isReflector||g.has(G)||G.userData.noProbe)&&(B.push(G),G.visible=!1)}),i.xr.enabled=!1,i.shadowMap.autoUpdate=!1,i.shadowMap.needsUpdate=!1,n(null);for(let G=I;G<I+S;G++)w.texture.mipmapsAutoUpdate=G===5?L:!1,i.setRenderTarget(w,G,C.activeMipmapLevel),i.state.buffers.depth.getReversed()&&i.autoClear===!1&&i.clearDepth(),i.render(e,C.children[G]);I+S===6&&(w.texture.needsPMREMUpdate=!0)}finally{w.texture.mipmapsAutoUpdate=L,i.setRenderTarget(R,U,P),i.xr.enabled=F,i.shadowMap.autoUpdate=H,i.shadowMap.needsUpdate=O;for(let V of B)V.visible=!0;let G=f.get(x);n(G?G.rt.texture:null,x)}}return{update(y,I,S){u.night.value=y;let C=d(S);if((Math.abs(y-m)>.13||m<-2)&&(A||(A=I),(I-A>.28||m<-2)&&(v++,m=y,A=0,_=void 0)),a.version<0)return x=C,r.camera.position.copy(C.origin),b(r),b(a),r.version=a.version=v,f.set(C,r),M(),!0;let w=!1;if(C!==x){x=C,_?.zone!==C&&(_=void 0);let B=f.get(C);B&&(f.delete(C),f.set(C,B)),M(),w=!0}if(!_){let B=f.get(x),R=!B||B.version!==v?x:a.version!==v?null:void 0;if(R!==void 0){let U=E();U.camera.position.copy(R?R.origin:a.camera.position),_={probe:U,zone:R,face:0,version:v}}}return _&&(b(_.probe,_.face,1),++_.face===6&&(_.probe.version=_.version,_.zone?f.set(_.zone,_.probe):a=_.probe,_=void 0,M(),w=!0)),w},invalidate(){m=-9}}}function cg(i,e){let t=new st;t.userData.noProbe=!0;let n=document.createElement("canvas");n.width=n.height=96;let s=n.getContext("2d"),r=s.createRadialGradient(48,48,0,48,48,48);for(let[h,d]of[[0,".75"],[.065,".42"],[.18,".18"],[.38,".065"],[1,"0"]])r.addColorStop(h,"rgba(255,224,180,"+d+")");s.fillStyle=r,s.fillRect(0,0,96,96);let a=new si(n);a.colorSpace=ht;let o=new Pr({map:a,opacity:0,color:16767659,transparent:!0,depthWrite:!1,blending:uo});for(let h of e){let d=new za(o);d.position.set(...h),d.scale.setScalar(.39),t.add(d)}let c=0;function l(h){c=h,o.opacity=h*.38;for(let d of t.children){let u=d.userData.power;d.visible=u??h>.075}}return l.setPower=(h,d)=>{for(let u of t.children)u.position.distanceTo(h)>(h.x>6&&h.x<7?.84:.55)||(u.material!==o&&u.material.dispose(),u.userData.power=d,u.material=d==null?o:o.clone(),d!=null&&(u.material.opacity=d?.24:0));l(c)},i.add(t),l}var lg=ut(()=>{gt()});function ug(i,e){let t=[],n=new Be,s=new _n;e.traverse(f=>{if(!f.isInstancedMesh||f.count<8||f.boundingSphere.radius<4)return;let p=f.instanceMatrix.array.slice(),g=f.instanceColor?.array.slice(),m=[];f.geometry.computeBoundingSphere();for(let A=0;A<f.count;A++)n.fromArray(p,A*16),m.push(f.geometry.boundingSphere.clone().applyMatrix4(n));t.push({mesh:f,matrices:p,colors:g,spheres:m})});let r=new Yn,a=new Be,o=[],c=[],l=[],h=i.onBeforeRender,d=i.onAfterRender,u=f=>{for(let p=0;p<t.length;p++){let g=t[p].mesh,m=f[p];g.instanceMatrix=m.matrix,g.instanceColor=m.color,g.count=m.count}};i.onBeforeRender=function(f,p,g,m){h.call(this,f,p,g,m);let A=c[l.length]??(c[l.length]=new WeakMap),x=A.get(g);x||(x=t.map(({matrices:M,colors:E,spheres:b})=>({matrix:new Dn(M.slice(),16).setUsage(Zs),color:E?new Dn(E.slice(),3).setUsage(Zs):null,selected:Int32Array.from(b,(y,I)=>I),count:b.length})),A.set(g,x)),l.push(x),u(x);let v=g.isArrayCamera;v||r.setFromProjectionMatrix(a.multiplyMatrices(g.projectionMatrix,g.matrixWorldInverse),g.coordinateSystem,g.reversedDepth),o.length=0;let _=!1;f.shadowMap.enabled&&(f.shadowMap.autoUpdate||f.shadowMap.needsUpdate)&&i.traverseVisible(M=>{let E=M.shadow;if(!(!M.isLight||!M.castShadow||!E||!E.autoUpdate&&!E.needsUpdate)){if(M.isPointLight){_=!0;return}E.updateMatrices(M),o.push(E.getFrustum())}});for(let M=0;M<t.length;M++){let{mesh:E,matrices:b,colors:y,spheres:I}=t[M],S=x[M],{selected:C}=S,w=0,B=!1;for(let R=0;R<I.length;R++)s.copy(I[R]).applyMatrix4(E.matrixWorld),!(!v&&!r.intersectsSphere(s)&&!(E.castShadow&&(_||o.some(U=>U.intersectsSphere(s)))))&&(C[w]!==R&&(C[w]=R,B=!0,E.instanceMatrix.array.set(b.subarray(R*16,R*16+16),w*16),y&&E.instanceColor.array.set(y.subarray(R*3,R*3+3),w*3)),w++);S.count=E.count=w,B&&(E.instanceMatrix.needsUpdate=!0,y&&(E.instanceColor.needsUpdate=!0))}},i.onAfterRender=function(f,p,g){d.call(this,f,p,g),l.pop(),l.length&&u(l[l.length-1])}}var hg=ut(()=>{gt()});function $h(i,e){let t=Math.max(Math.abs(i-2.4)-17.4,Math.abs(e-.5)-16.5,0),n=yl(0,20,t),s=yl(25,110,Math.hypot(i,e)),r=.58+.4*Math.sin(i*.079+e*.041)+.37*Math.sin(e*.095-i*.019)+.15*Math.sin(i*.22+e*.17),a=.45*Math.exp(-Math.pow((i-8-Math.sin(e*.035)*17)/9,2)),o=yl(0,6.5,t)*(1-yl(26,54,t)),c=.31+.22*Math.sin(i*.245-e*.19)+.14*Math.sin(e*.39+i*.157);return-.075+n*(r-a)+o*c+s*(.9+.35*Math.sin(i*.029-e*.011))}function $M(i,e,t,n,s){let r=Math.ceil((e-i)/s),a=Math.ceil((n-t)/s),o=[],c=[],l=[],h=[],d=new We;for(let f=0;f<=a;f++)for(let p=0;p<=r;p++){let g=Ye.lerp(i,e,p/r),m=Ye.lerp(t,n,f/a),A=$h(g,m);o.push(g,A,m),c.push(g/3.6,m/3.6);let x=.94+.055*Math.sin(g*.19+m*.11)+.04*Math.sin(m*.44-g*.32),v=Math.exp(-Math.pow((g-8-Math.sin(m*.035)*17)/9,2));if(d.setRGB(x*(1+.035*v),x,x*(1-.045*v)),l.push(...d.toArray()),p<r&&f<a){let _=f*(r+1)+p,M=_+r+1;h.push(_,M,_+1,_+1,M,M+1)}}let u=new lt;return u.setAttribute("position",new Ke(o,3)),u.setAttribute("uv",new Ke(c,2)),u.setAttribute("color",new Ke(l,3)),u.setIndex(h),u.computeVertexNormals(),u}function eE(i,e,t){let n=new at({map:i,normalMap:e,normalScale:new ge(.68,.68),color:16777215,roughness:.97,vertexColors:!0});return n.name="Mineral alluvium",n.onBeforeCompile=s=>{s.uniforms.desertMacro={value:t},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 desertPosition;`).replace("#include <begin_vertex>",`#include <begin_vertex>
desertPosition=position;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D desertMacro;varying vec3 desertPosition;`),s.fragmentShader=s.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
      vec2 broadUV=mat2(.79,-.61,.61,.79)*desertPosition.xz/22.;
      vec3 broad=texture2D(desertMacro,broadUV).rgb;
      float broadValue=dot(broad,vec3(.27,.58,.15));
      diffuseColor.rgb*=mix(.84,1.15,smoothstep(.06,.65,broadValue));
      diffuseColor.rgb*=1.20;`),s.fragmentShader=s.fragmentShader.replace("#include <opaque_fragment>",`#include <opaque_fragment>
      float desertHaze=smoothstep(32.,190.,length(desertPosition.xz));
      gl_FragColor.rgb=mix(gl_FragColor.rgb,fogColor*.58,desertHaze*.88);`)},n.customProgramCacheKey=()=>"desert-alluvium-v1",n}function Ag(i){let e=new T;i.traverse(s=>{if(!s.isMesh)return;if(s.material?.name==="range"){s.visible=!1;return}if(!["plain","stone"].includes(s.material?.name))return;let r=s.geometry,a=r.getAttribute("position"),o=r.getIndex(),c=[],l=o?o.count:a.count,h=[];for(let d=0;d<l;d+=3){let u=[0,1,2].map(f=>o?o.getX(d+f):d+f);e.set(0,0,0);for(let f of u)e.x+=a.getX(f)/3,e.y+=a.getY(f)/3,e.z+=a.getZ(f)/3;e.applyMatrix4(s.matrixWorld),h.push({ids:u,point:e.clone(),outside:Eo(e.x,e.z)&&e.y<6})}if(s.material.name==="stone"){let d=h.map((g,m)=>m),u=new Map,f=g=>{for(;d[g]!==g;)d[g]=d[d[g]],g=d[g];return g};for(let[g,m]of h.entries())for(let A of m.ids){let x=[a.getX(A),a.getY(A),a.getZ(A)].map(v=>Math.round(v*1e4)).join("/");u.has(x)?d[f(g)]=f(u.get(x)):u.set(x,g)}let p=new Map;for(let[g,m]of h.entries()){let A=f(g);p.has(A)||p.set(A,{count:0,outside:0,bounds:new it});let x=p.get(A);x.count++,x.outside+=Number(m.outside),x.bounds.expandByPoint(m.point)}for(let[g,m]of h.entries()){let A=p.get(f(g)),x=A.bounds.getSize(new T);!(A.outside/A.count>.12&&Math.max(x.x,x.z)<6&&x.y<5)&&!m.outside&&c.push(...m.ids)}}else for(let d of h)d.outside||c.push(...d.ids);if(c.length!==l){let d=r.clone();d.setIndex(c),d.computeBoundingSphere(),s.geometry=d}});let t=i.getObjectByName("Desert living landscape");t&&ug(i,t);let n=[];return t?.traverse(s=>{s.userData.desertNear&&n.push(s)}),s=>{for(let r of n){let a=r.position.x-s.position.x,o=r.position.z-s.position.z;r.visible=a*a+o*o<5184}}}function Ml(i,e=!1,t=!1){let n=ga(i),s=new So,r=new We(6643019),a=new We,o=t?4:8;for(let c=0;c<o;c++){let l=c*2.399+n()*.8,h=.37+n()*.45,d=.25+n()*.43,u=g=>new T(Math.cos(l)*d*g**1.5,h*g,Math.sin(l)*d*g**1.5),f=[u(0),u(.35),u(.7),u(1)];s.stem(f,t?.005:.008,r);let p=t?2:3;for(let g=0;g<p;g++){let m=.4+g/(p-1)*.55,A=u(m),x=l+(g%2?1:-1)*(.55+n()*.8),v=A.clone().add(new T(Math.cos(x)*(.13+n()*.2),.06+n()*.12,Math.sin(x)*(.13+n()*.2)));t||s.stem([A,A.clone().lerp(v,.5),v],.003,r);let _=t?3:8;for(let M=0;M<_;M++){let E=A.clone().lerp(v,.18+M/_*.82),b=M*2.399+x;E.add(new T(Math.cos(b)*.048,Math.sin(b*1.7)*.025,Math.sin(b)*.048));let y=new T(Math.cos(b),.2+n()*.8,Math.sin(b));a.setHex(e?11251864:9082222).multiplyScalar(.78+n()*.47),s.leaf(E,y,t?.1:.055+n()*.035,e?.028:.018,a)}}}return s.geometry()}function dg(i,e=!1){let t=ga(i),n=new So,s=new We(8420192),r=new We,a=e?5:11;for(let o=0;o<a;o++){let c=o*2.399,l=.12+t()*.32,h=.28+t()*.31,d=new T(0,0,0),u=new T(Math.cos(c)*l,h,Math.sin(c)*l);n.stem([d,u.clone().multiplyScalar(.55),u],.004,s);for(let f=0;f<(e?5:23);f++){let p=f*2.399+o,g=t()*2-1,m=.11+t()*.08,A=u.clone().add(new T(Math.cos(p)*m*Math.sqrt(1-g*g),g*m,Math.sin(p)*m*Math.sqrt(1-g*g)));r.setHex(10527627).multiplyScalar(.83+t()*.32),n.leaf(A,new T(Math.cos(p),.3+t()*.9,Math.sin(p)),.055+t()*.035,.025,r)}}return n.geometry()}function fg(i){let e=ga(i),t=new So,n=new We;for(let s=0;s<44;s++){let r=e()*Math.PI*2,a=.18+e()*.45,o=.11+e()*.22,c=new T(-Math.sin(r),0,Math.cos(r)).multiplyScalar(.003+e()*.0035),l=h=>new T(Math.cos(r)*o*h*h,a*h-.13*h*h,Math.sin(r)*o*h*h);n.setHex(s%5===0?7503191:10458222).multiplyScalar(.8+e()*.35);for(let h=0;h<4;h++){let d=h/4,u=(h+1)/4;t.face([l(d).sub(c),l(d).add(c),l(u).addScaledVector(c,1-u),l(u).addScaledVector(c,u-1)],n)}}return t.geometry()}function tE(i){let e=ga(i),t=[],n=[],s=[],r=new We;for(let o=0;o<27;o++){let c=o*2.399,l=o/27,h=.58+e()*.45,d=.35+l*.6,u=t.length/3,f=12;for(let p=0;p<=f;p++){let g=p/f,m=h*d*(.16*g+.84*g*g),A=.035+h*(1.32*g-(.5+l*.57)*g*g),x=.11*h*Math.sin(Math.PI*g)**.7;for(let v=-1;v<=1;v++)t.push(Math.cos(c)*m-Math.sin(c)*x*v,A+(v===0?.025*Math.sin(Math.PI*g):-.008*Math.sin(Math.PI*g)),Math.sin(c)*m+Math.cos(c)*x*v),r.setHex(9350044).multiplyScalar(.68+.2*Math.sin(c*1.7)+.13*(1-g)),n.push(...r.toArray());if(p<f)for(let v=0;v<2;v++){let _=u+p*3+v,M=_+3;s.push(_,M,_+1,_+1,M,M+1)}}}let a=new lt;return a.setAttribute("position",new Ke(t,3)),a.setAttribute("color",new Ke(n,3)),a.setIndex(s),a.computeVertexNormals(),a}function ui(i,e,t,n,s,r=!1){if(!s.length)return;let a=new Fn(t,n,s.length),o=new Ft,c=new We;a.name=e;let l=new T(s.reduce((h,d)=>h+d[0],0)/s.length,0,s.reduce((h,d)=>h+d[1],0)/s.length);a.position.copy(l);for(let[h,[d,u,f,p=0,g=1,m=1]]of s.entries())o.position.set(d-l.x,$h(d,u)-f*(e.includes("granite")?.13:.035),u-l.z),o.rotation.set(0,p,0),o.scale.set(f,f*m,f*(.82+.23*g)),o.updateMatrix(),a.setMatrixAt(h,o.matrix),c.setRGB(g,g,g*.975),a.setColorAt(h,c);return a.receiveShadow=!0,a.castShadow=r,a.userData.desertNear=r,a.computeBoundingSphere(),i.add(a),a}async function mg(i){let e=[],t=new st;t.name="Desert living landscape",i.add(t);let n=new fn,s=new fa,[r,a,o,...c]=await Promise.all([n.loadAsync("assets/desert/soil-color.webp"),n.loadAsync("assets/desert/soil-normal.webp"),n.loadAsync("assets/desert/soil-macro.webp"),...["namaqualand_boulder_02","namaqualand_boulder_03","namaqualand_boulder_04","sand_rocks_small_01","arid-scrub","xeric-groundcover","desert-aloe"].map(w=>s.loadAsync("assets/desert/"+w+".glb"))]),l=c.slice(0,4),h=c.slice(4);for(let w of[r,a,o])w.wrapS=w.wrapT=rn,w.anisotropy=8;r.colorSpace=o.colorSpace=ht;let d=eE(r,a,o);for(let[w,B,R,U]of[[-240,-13.18,-240,240],[18.15,240,-240,240],[-13.18,18.15,-240,-13.18],[-13.18,10.02,14.14,240],[10.02,18.15,22.1,240]]){let P=new Qe($M(w,B,R,U,2.35),d);P.name="Sculpted desert alluvium",P.receiveShadow=!0,t.add(P)}let u=ga(489173),f=Math.PI*2,p=new at({vertexColors:!0,roughness:.86,envMapIntensity:1.25,side:Lt});p.name="Native desert foliage",p.forceSinglePass=!0;let g=[Ml(71),dg(491),Ml(820),fg(421)],m=[Ml(71,!1,!0),dg(491,!0),Ml(820,!1,!0),fg(421)],A=Array.from({length:4},()=>[]),x=Array.from({length:4},()=>[]);for(let w=-4;w<=4;w++)for(let B=-4;B<=4;B++){let R=w*48,U=B*48;for(let P=0;P<122;P++){let F=R+(u()-.5)*48,H=U+(u()-.5)*48,O=Math.hypot(F,H);if(O>175||O<27||!Eo(F,H,.65))continue;let L=.58+.23*Math.sin(F*.13+H*.047)+.2*Math.sin(H*.17-F*.05);if(u()>L)continue;let G=u()<.19?3:u()<.39?1:u()<.5?0:2,V=G===3?.6+u()*.8:.44+u()**1.1*1.08;(O<32?A:x)[G].push([F,H,V,u()*f,.85+u()*.25,.84+u()*.28])}}for(let w=0;w<4;w++)ui(t,"Native plant community",g[w],p,A[w]),ui(t,"Distant native scrub",m[w],p,x[w]);let v=[[-9.7,15.6,1.5],[-5.1,17.1,1.15],[.5,15.5,1.1],[5.3,18.6,1.45],[9,16.2,.9],[-15.2,7,1.35],[-15.1,-3,1.2],[20,7,1.1],[20,-7,1.35],[-8,-17,1.2]];for(let[w,[B,R,U]]of v.entries())ui(t,"Native bunchgrass pocket",g[3],p,[[B+.8,R+.6,U*.7,u()*f,1],[B-.6,R+.5,U*.52,u()*f,.91]],!0);let _=[[19.1,5.8,1.75],[20,7.4,2],[19,11.1,1.5],[21,13,1.65],[23,6.4,1.9],[22.6,10.9,2.1],[20.4,9.4,1.45],[21.5,7.9,1.3],[19.4,13.2,1.5],[23.2,12.6,1.7],...v.map(([w,B,R])=>[w,B,R*1.55]),[-15.2,-8,1.6],[-17,-9.2,1.95],[-13.7,-11.9,1.4],[-6,-17.5,1.8],[-3,-16.4,1.6],[1,-18.8,1.6],[6,-18.6,1.7],[18.9,-5.2,1.8],[20.8,-10.1,1.5],[-15.1,11.5,1.65]],M=ga(734431),E=[];for(let[w,B,R]of[[20.9,1.8,3.9],[24.6,13.9,5.8],[29.1,6.5,6.6],[34.8,-2.6,7.3],[42,12.5,8.2],[-19,6,4.6],[-4,20,5.2]])for(let U=0;U<18;U++){let P=M()*f,F=R*Math.sqrt(M()),H=w+Math.cos(P)*F,O=B+Math.sin(P)*F*.73;Eo(H,O,.6)&&(E.push([H,O,.65+M()*.94]),U%6===0&&_.push([H+.35,O-.4,.56+M()*.78]))}let b=E.filter((w,B)=>B%3===0).map(([w,B,R],U)=>[w,B,R*.69,U*2.399,.88+U%5*.047,.78+U%3*.09]);ui(t,"Silver-leaf wash shrubs",m[1],p,b,!0);let y=E.filter((w,B)=>B%2===0).map(([w,B,R],U)=>[w-.29,B+.14,R*.53,U*1.82,.88+U%4*.05,.81]);ui(t,"Dry creek bunchgrass",g[3],p,y,!0);let I=[.316,.306,.267,.183,.153,.112,.108,.059],S=["arid-scrub.glb","xeric-groundcover.glb","desert-aloe.glb"];for(let[w,B]of h.entries()){B.scene.updateMatrixWorld(!0);let R=B.scene.children;for(let[U,P]of R.entries()){let F=[];if(w===0)for(let[H,[O,L,G]]of _.entries())H%R.length===U&&F.push([O,L,G,u()*f,.93+u()*.12,.88+u()*.21]);else if(w===1){let H=[...E,[18.7,8.5,.92],[19,10,1.2],[21.9,6.1,1.15],[21,11.8,1.1],[22.4,13.5,.8],[19.3,4.5,.9],[20.6,5.2,.7],[20.6,14.6,.85],[-13.9,-9.4,1],[-6,-16.3,.9],[1.3,15.4,.9]];for(let[O,[L,G,V]]of H.entries())for(let X=0;X<4;X++){if((O+X*3)%R.length!==U)continue;let z=O*2.399+X*1.54,K=.16*X;F.push([L+Math.cos(z)*K,G+Math.sin(z)*K,I[U]*(.95+.46*V),z,.93+X%3*.045,1])}}else U===0&&F.push([22.5,8.8,1.15,1.7,1,1],[19.5,14.8,.76,3,.98,1]);P.traverse(H=>{if(!H.isMesh||!F.length)return;let O=H.geometry.clone().applyMatrix4(H.matrixWorld),L=H.material;L.userData.desertAsset=S[w],L.userData.desertMaterial=L.name,L.roughness=.96,L.envMapIntensity=1.3,L.color.set(15000788),L.side=Lt,L.forceSinglePass=!0,(L.alphaTest>0||L.transparent)&&(L.alphaTest=.42,L.transparent=!1,L.depthWrite=!0,L.alphaToCoverage=!0);for(let V of[L.map,L.normalMap,L.roughnessMap,L.aoMap])V&&(V.anisotropy=8);L.normalScale?.set(.48,.48);let G=ui(t,w===0?"Scanned xeric scrub community":w===1?"Scanned succulent groundcover":"Sculptural aloe garden specimen",O,L,F,!0);G.userData.scanPlant=!0})}}ui(t,"Blue agave garden rosettes",tE(294),p,[[19.2,9.3,.95,.5,1],[22.5,5.2,1.1,2,1],[20.1,14.5,.9,1,.93],[19.1,3.3,.75,1.8,.96]],!0);let C=[];for(let[w,B,R]of _.slice(0,10))for(let U=0;U<2;U++)C.push([w+Math.cos(U*2.4)*.65,B+Math.sin(U*2.4)*.65,R*(.32+u()*.16),u()*f,.92+u()*.1]);ui(t,"East terrace native bunchgrass",g[3],p,C,!0);for(let[w,B]of l.entries()){let R=[];B.scene.updateMatrixWorld(!0),B.scene.traverse(U=>{U.isMesh&&R.push(U)});for(let U of R){let P=U.geometry.clone().applyMatrix4(U.matrixWorld),F=U.material;F.userData.desertAsset=["namaqualand_boulder_02.glb","namaqualand_boulder_03.glb","namaqualand_boulder_04.glb","sand_rocks_small_01.glb"][w],F.userData.desertMaterial=F.name,F.name="Scanned weathered granite",F.roughness=.96,F.color.set(14735302),F.normalScale?.set(.55,.55),F.envMapIntensity=1.55,F.onBeforeCompile=G=>{G.fragmentShader=G.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
          float value=dot(diffuseColor.rgb,vec3(.2126,.7152,.0722));
          diffuseColor.rgb=mix(vec3(1.08,1.025,.94)*value,diffuseColor.rgb,.39);`).replace("#include <fog_fragment>",`#include <fog_fragment>
            #ifdef USE_FOG
              float dryAir=.45*smoothstep(28.,110.,vFogDepth);
              gl_FragColor.rgb=mix(gl_FragColor.rgb,.54*fogColor,dryAir);
            #endif`)},F.customProgramCacheKey=()=>"granite-mineral-palette";for(let G of[F.map,F.normalMap,F.roughnessMap,F.aoMap])G&&(G.anisotropy=4);let H=[],O=[];for(let G=0;G<(w===3?25:38);G++){let V=u()*f,X=19+u()**1.6*104,z=Math.cos(V)*X,K=Math.sin(V)*X;if(!Eo(z,K,1.3))continue;let j=w===3?1.5+u()*2.2:.38+u()**2*2.15;(X<63?H:O).push([z,K,j,u()*f,.9+u()*.19,.86+u()*.17])}if(w<3)for(let G=w;G<v.length;G+=3){let[V,X,z]=v[G];H.push([V-.7,X+.75,z*.95,u()*f,.97,.9])}w===1&&H.push([19.1,8.1,.9,.5,1,.78],[21.2,11,1.2,2.2,1,.82],[21.6,5.1,.7,.7,1,.85]);let L=ui(t,"Embedded scanned granite",P,F,H,!0);if(L&&w<3){P.computeBoundingBox(),L.updateWorldMatrix(!0,!1);let G=new Be,V=new it,X=new T,z=new T;for(let K=0;K<L.count;K++)L.getMatrixAt(K,G),G.premultiply(L.matrixWorld),V.copy(P.boundingBox).applyMatrix4(G),V.getCenter(X),V.getSize(z),!(z.y<.31||Math.abs(X.x)>26||Math.abs(X.z)>26)&&e.push([X.x-z.x*.34,-X.z-z.z*.34,X.x+z.x*.34,-X.z+z.z*.34])}if(ui(t,"Alluvial scattered granite",P,F,O),w===3){let G=E.filter((V,X)=>X%3===0).map(([V,X,z],K)=>[V+.27,X-.24,z*(.35+K%4*.12),K*2.399,.98,.72]);ui(t,"Low granite wash deposits",P,F,G,!0)}}}return e}var ZM,yl,ga,Eo,pg,So,gg=ut(()=>{gt();Ph();hg();ZM=(i,e,t)=>Math.max(e,Math.min(t,i)),yl=(i,e,t)=>{let n=ZM((t-i)/(e-i),0,1);return n*n*(3-2*n)},ga=i=>{let e=i;return()=>(e=Math.imul(1664525,e)+1013904223>>>0)/4294967296},Eo=(i,e,t=0)=>!(i>-13.18-t&&i<18.15+t&&e>-13.18-t&&e<14.14+t)&&!(i>10.02-t&&i<18.05+t&&e>=14-t&&e<22.1+t);pg=(i,e)=>Eo(i,e)?$h(i,e):0;So=class{constructor(){this.p=[],this.c=[],this.ix=[]}face(e,t){let n=this.p.length/3;for(let s of e)this.p.push(...s.toArray()),this.c.push(...t.toArray());for(let s=1;s<e.length-1;s++)this.ix.push(n,n+s,n+s+1)}stem(e,t,n,s=4){for(let r=0;r<e.length-1;r++){let a=e[r],o=e[r+1],c=o.clone().sub(a).normalize(),l=new T(c.z,0,-c.x).normalize(),h=new T().crossVectors(c,l).normalize(),d=t*(1-r/e.length*.8),u=t*(1-(r+1)/e.length*.8);for(let f=0;f<s;f++){let p=(A,x,v)=>A.clone().addScaledVector(l,Math.cos(v)*x).addScaledVector(h,Math.sin(v)*x),g=f*Math.PI*2/s,m=g+Math.PI*2/s;this.face([p(a,d,g),p(a,d,m),p(o,u,m),p(o,u,g)],n)}}}leaf(e,t,n,s,r){let a=t.clone().normalize(),o=new T(-a.z,.08,a.x).normalize(),c=e.clone().addScaledVector(a,n*.5).add(new T(0,s*.16,0)),l=[];for(let h=0;h<8;h++){let d=h*Math.PI/4;l.push(e.clone().addScaledVector(a,n*(.5+.5*Math.cos(d))).addScaledVector(o,s*Math.sin(d)).add(new T(0,-s*.12*Math.sin(d)**2,0)))}for(let h=0;h<8;h++)this.face([l[h],l[(h+1)%8],c],r)}geometry(){let e=new lt;return e.setAttribute("position",new Ke(this.p,3)),e.setAttribute("color",new Ke(this.c,3)),e.setIndex(this.ix),e.computeVertexNormals(),e.computeBoundingSphere(),e}}});function xg(i){let e=new T(2.78,0,-1.3),t=new Be().makeTranslation(e.x+.3,0,e.z).multiply(new Be().makeRotationY(-Math.PI/2)).multiply(new Be().makeTranslation(-e.x,0,-e.z));i.updateMatrixWorld(!0),i.traverse(n=>{!n.isMesh||!n.material.name.toLowerCase().includes("hearth flame")||n.applyMatrix4(n.parent.matrixWorld.clone().invert().multiply(t).multiply(n.parent.matrixWorld))}),i.updateMatrixWorld(!0)}function _g({scene:i,group:e,details:t,light:n}){let s=new T(-8.3,0,-3.44),r=new Be().makeRotationY(Math.PI/2),a=new Be().makeTranslation(...s.toArray()).multiply(r).multiply(new Be().makeTranslation(-s.x,0,-s.z));t.traverse(c=>{if(!c.isMesh)return;let l=c.material.name.toLowerCase(),h=l.includes("pit-art-book")||l.includes("recipe-cover")?.0028:l.includes("den-journal")?.0069:0;h&&(c.position.y+=h),l.includes("fridge-list")&&(c.parent.updateWorldMatrix(!0,!1),c.applyMatrix4(c.parent.matrixWorld.clone().invert().multiply(a).multiply(c.parent.matrixWorld)))});let o=n.textures;e.traverse(c=>{if(!c.isMesh)return;let l=c.material;if(c.castShadow=!0,c.receiveShadow=!0,l.name==="Cut ledge stone"||l.name==="Coping honed limestone"){let h=l.name==="Cut ledge stone",d=o[h?"ledge":"paving"];[l.map,l.normalMap,l.roughnessMap]=d;for(let u of["map","normalMap","roughnessMap"]){let f=l[u].clone();f.repeat.y=-1,l[u]=f}l.normalScale.setScalar(h?.54:.2),l.roughness=h?.98:.79,h||l.color.setRGB(1.18,1.15,1.06)}l.name==="Warm ivory kitchen plaster"&&(l.map=o.plaster[0],l.normalMap=o.plaster[1],l.normalScale.setScalar(.095)),n.patch(l,{plainMap:!0})}),i.add(e)}var bg=ut(()=>{gt()});function iE(){let i=document.createElement("canvas");i.width=256,i.height=512;let e=i.getContext("2d"),t=e.createLinearGradient(0,0,256,0);for(let[r,a]of[[0,"#325b3c"],[.42,"#426f49"],[.5,"#527b4e"],[.58,"#416c43"],[1,"#2c5638"]])t.addColorStop(r,a);e.fillStyle=t,e.fillRect(0,0,256,512);for(let r=1;r<28;r++)for(let a of[-1,1]){let o=r*17.7;e.beginPath(),e.moveTo(128,o),e.bezierCurveTo(128+a*24,o+7,128+a*85,o+29,128+a*126,o+59),e.strokeStyle=r%3?"rgba(158,181,108,.13)":"rgba(159,182,109,.21)",e.lineWidth=.8,e.stroke()}e.beginPath(),e.moveTo(128,0),e.lineTo(128,512),e.strokeStyle="rgba(154,174,106,.65)",e.lineWidth=1.6,e.stroke();let n=1906;for(let r=0;r<9e3;r++){let a=()=>(n=Math.imul(n,1664525)+1013904223>>>0)/4294967296;e.fillStyle=`rgba(210,210,153,${a()*.035})`,e.fillRect(a()*256,a()*512,1,1)}let s=new si(i);return s.colorSpace=ht,s.anisotropy=4,s}function sE(i,e,t,n){let s=[],r=[],a=[],o=n?30:22,c=8;for(let h=0;h<=o;h++){let d=h/o,u=Math.sin(Math.PI*d)**(n?.53:.7);for(let f=0;f<=c;f++){let p=f/c*2-1,g=e*u*p;n&&Math.abs(p)>.8&&(g*=1-.055*Math.sin(d*47+t*9)**12);let m=t*(d-.2);if(s.push(g*Math.cos(m),i*d,i*(.12*Math.sin(Math.PI*d)-.26*d*d)+g*Math.sin(m)+e*.2*p*p*u),r.push(f/c,d),f<c&&h<o){let A=h*(c+1)+f,x=A+c+1;a.push(A,A+1,x,A+1,x+1,x)}}}let l=new lt;return l.setAttribute("position",new Ke(s,3)),l.setAttribute("uv",new Ke(r,2)),l.setIndex(a),l.computeVertexNormals(),l}function rE(i,e,t,n){let s=t.clone().normalize(),r=new T().crossVectors(s,new T(0,1,0)).normalize(),a=new T().crossVectors(r,s).normalize(),o=new Be().makeBasis(r,s,a);return o.multiply(new Be().makeRotationY(n)),o.setPosition(e),i.applyMatrix4(o),i}function vg({scene:i,light:e}){let t=iE(),n=new Xt({map:t,color:16777215,roughness:.43,side:Lt,clearcoat:.18,clearcoatRoughness:.45});n.name="Living waxy botanical blades",n.forceSinglePass=!0,e.patch(n,{plainMap:!0});let s=new at({color:5793354,roughness:.72});e.patch(s,{plainMap:!0});let r=new st;r.name="Curved botanical houseplants";for(let a of nE){let o=new st;o.name=a.name,o.position.set(...a.position);let c=[],l=[],h=a.size,d=a.bird?9:13;for(let u=0;u<d;u++){let f=u*2.39996+.35,p=a.bird?h*(.39+.105*(u%5)):h*(.17+u*.065),g=new T(Math.cos(f)*h*.055,p,Math.sin(f)*h*.055),m=new T(Math.cos(f),a.bird?.55+.17*(u%3):.15+.18*(u%3),Math.sin(f));a.bird&&m.x<-.35&&(m.y+=.85);let A=h*(a.bird?.46+.065*(u%3):.27+.025*(u%3)),x=A*(a.bird?.19:.29);c.push(rE(sE(A,x,.35*Math.sin(u*3.1),a.bird),g,m,.12*Math.sin(u)));let v=a.bird?new T(0,-.015,0):new T(0,p-.025,0),_=new cs(v,v.clone().lerp(g,.55).add(new T(h*.025,.045,0)),g);l.push(new gi(_,10,h*(a.bird?.007:.004),6,!1))}if(!a.bird){let u=new cs(new T(0,-.01,0),new T(-h*.035,h*.53,.02),new T(.015,h*1.01,-.015));l.push(new gi(u,18,h*.012,7,!1))}for(let[u,f,p]of[[c,n,"curved veined leaves"],[l,s,"rounded living petioles"]]){let g=ln(u);for(let A of u)A.dispose();let m=new Qe(g,f);m.name=a.name+" "+p,m.castShadow=!0,m.receiveShadow=!0,o.add(m)}r.add(o)}return i.add(r),r}var nE,yg=ut(()=>{gt();oi();nE=[{name:"Living Strelitzia nicolai",position:[3.48,.464,-.56],size:1.6,bird:!0},{name:"Primary Ficus elastica",position:[-4.98,.267,-10.46],size:.92},{name:"Den Ficus elastica",position:[8.5,.348,-10.35],size:1.2}]});function Mg(){let i=At.shadowmap_pars_fragment,e=i.indexOf("// Hardware PCF with LinearFilter"),t=i.indexOf(") * 0.2;",e);if(e<0||t<0)return;let n=`
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
    shadow/=144.;`;At.shadowmap_pars_fragment=i.slice(0,e)+n+i.slice(t+8)}function Eg(i,e,t,n,s,r=[]){let a=i.getContext(),o=i.extensions.has("EXT_color_buffer_float")||i.extensions.has("EXT_color_buffer_half_float"),c=a.getInternalformatParameter(a.RENDERBUFFER,o?a.RGBA16F:a.RGBA8,a.SAMPLES),l=Math.max(0,...Array.from(c).filter(k=>k<=4)),h={type:o?Ct:ot,depthBuffer:!1,generateMipmaps:!1},d=new ge,u=new ge,f=wo;function p(){i.getDrawingBufferSize(d);let k=Math.min(1,Math.sqrt(f/(d.x*d.y)));u.set(Math.max(1,Math.round(d.x*k)),Math.max(1,Math.round(d.y*k)))}p();let g=u.x,m=u.y,A=new qt(g,m,{...h,depthBuffer:!0,samples:l});A.depthTexture=new Qn(g,m,wn),A.depthTexture.minFilter=A.depthTexture.magFilter=Pt;let x=new qt(Math.ceil(g/2),Math.ceil(m/2),{...h,minFilter:Pt,magFilter:Pt}),v=[new qt(g,m,h),new qt(g,m,h)],_=new lt;_.setAttribute("position",new Ke([-1,-1,0,3,-1,0,-1,3,0],3));let M=new Os,E=new Bs,b=new Qe(_);b.frustumCulled=!1,E.add(b);let y={value:new ge(1/g,1/m)},I={value:new ge(t.near,t.far)},S={value:new ge},C={value:new ge},w=(k,D,Z=!1)=>new Ut({vertexShader:aE,fragmentShader:k,uniforms:D,defines:o?{}:{LIMITED_DEPTH:1},depthTest:!1,depthWrite:!1,blending:ki,toneMapped:Z}),B=w(oE,{sceneDepth:{value:A.depthTexture},pixel:y,focalLength:S,projectionOffset:C,clipRange:I}),R=new Be,U=new Be,P=new Be,F=new Be,H=new Be,O=Array.from({length:12},()=>new mt),L=O.map(()=>new ge),G=new T,V=new Yn,X={currentFrame:{value:A.texture},sceneDepth:{value:A.depthTexture},contactMap:{value:x.texture},history:{value:null},previousClipFromCurrent:{value:R},pixel:y,clipRange:I,focalLength:S,projectionOffset:C,aoDimensions:{value:new ge(x.width,x.height)},worldFromView:{value:t.matrixWorld},motionRect:{value:O},motionDepth:{value:L},motionCount:{value:0},poolMin:{value:n.min.clone().addScalar(-.022)},poolMax:{value:n.max.clone().addScalar(.022)},historyReady:{value:0},stationarySamples:{value:0},hold:{value:0}},z=w(cE,X),K=w(uE,{picture:{value:null},pixel:y,clipRange:I,focalLength:S,projectionOffset:C,worldFromView:{value:t.matrixWorld},daylight:{value:1},immersed:{value:0},reconstructAmount:{value:1-u.x/d.x}},!0),j=w(lE,{photograph:{value:null}}),ce=new qt(1,1,{depthBuffer:!1,type:ot,minFilter:Pt,magFilter:Pt}),ae=new Uint8Array(4),ee=new Be,me=1,fe=-1e3,Re=!1,Se="";function te(k,D,Z){let pe=performance.now();Re||pe-fe<320||Se===Z&&D.elements.every((se,Me)=>Math.abs(se-ee.elements[Me])<.006)||(fe=pe,Re=!0,Se=Z,ee.copy(D),j.uniforms.photograph.value=k,ke(j,ce),i.readRenderTargetPixelsAsync(ce,0,0,1,1,ae).then(()=>{me=2**(ae[0]*9/255-3)}).catch(()=>{}).finally(()=>{Re=!1}))}let xe=[[0,0],[-.375,.125],[.375,-.125],[-.125,-.375],[.125,.375],[-.375,-.375],[.375,.375],[.125,-.125],[-.125,.125]],_e=0,be=!1,Ee=0,le="",ve=-1,Le=!1,Oe=-1/0;function ze(){if(p(),K.uniforms.reconstructAmount.value=1-u.x/d.x,!(A.width===u.x&&A.height===u.y)){A.setSize(u.x,u.y);for(let k of v)k.setSize(u.x,u.y);x.setSize(Math.ceil(u.x/2),Math.ceil(u.y/2)),y.value.set(1/u.x,1/u.y),X.aoDimensions.value.set(x.width,x.height),be=!1,Ee=0}}let Q=0,qe=0,ye=0,De=0,$=0;function Fe(k,D){if(!D||Ee>1||k<=0||k>.5||document.hidden){Q=qe=ye=De=$=0;return}if(Q++,De+=Math.min(k,.1),k>.021&&qe++,k<.018&&ye++,De<1.25||Q<18)return;let Z=d.x*d.y,pe=Math.min(wo,Z),se=Math.min(pe,Math.max(36e4,.55*pe)),Me=Math.min(f,Z);qe>Q*.37&&Me>se*1.02?(f=Math.max(se,Me*.8),ze(),$=0):ye>Q*.94&&qe<Q*.03?++$>=8&&Me<pe*.98&&(f=Math.min(wo,Me*1.13),ze(),$=0):$=0,Q=qe=ye=De=0}function ke(k,D){b.material=k,i.setRenderTarget(D),i.render(E,M)}function Ge(k,D,Z=0){K.uniforms.immersed.value=Z,K.uniforms.daylight.value=1-D,t.updateMatrixWorld(),P.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse);let pe=be&&k===le&&P.elements.every((W,ue)=>Math.abs(W-F.elements[ue])<2e-7);Ee=pe?Math.min(xe.length,Ee+1):0,F.copy(P),H.copy(t.projectionMatrix);let se=pe&&Ee>=xe.length,Me=performance.now();V.setFromProjectionMatrix(P);let Ie=[s];for(let W of r){let ue=W();ue&&Ie.push(ue)}if(se&&Le&&ve===i.toneMappingExposure&&(!V.intersectsBox(n)&&!Ie.some(W=>V.intersectsBox(W))||Me-Oe<1e3/30-1))return;Oe=Me,Le=se,ve=i.toneMappingExposure;let de=se?xe[0]:xe[Ee];t.projectionMatrix.elements[8]+=2*de[0]/u.x,t.projectionMatrix.elements[9]+=2*de[1]/u.y,t.projectionMatrixInverse.copy(t.projectionMatrix).invert(),P.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),R.copy(P).invert().premultiply(U);let he=t.projectionMatrix.elements;S.value.set(he[0],he[5]),C.value.set(he[8],he[9]);let Ce=0;for(let W of Ie){if(!V.intersectsBox(W)||Ce===O.length)continue;let ue=O[Ce].set(2,2,-1,-1),re=L[Ce].set(1e6,0),Ue=!1;for(let we=0;we<8;we++){if(G.set(we&1?W.max.x:W.min.x,we&2?W.max.y:W.min.y,we&4?W.max.z:W.min.z),G.applyMatrix4(t.matrixWorldInverse),G.z>-t.near){Ue=!0;continue}re.x=Math.min(re.x,-G.z-.07),re.y=Math.max(re.y,-G.z+.85),G.applyMatrix4(t.projectionMatrix);let Pe=G.x*.5+.5,et=G.y*.5+.5;ue.x=Math.min(ue.x,Pe-.003),ue.z=Math.max(ue.z,Pe+.003),ue.y=Math.min(ue.y,et-.003),ue.w=Math.max(ue.w,et+.003)}Ue&&(ue.set(0,0,1,1),re.x=0),Ce++}X.motionCount.value=Ce,X.historyReady.value=Number(be&&le===k),X.stationarySamples.value=se?0:Ee,X.hold.value=Number(se),X.history.value=v[1-_e].texture,i.setRenderTarget(A),i.render(e,t),ke(B,x),ke(z,v[_e]),te(v[_e].texture,F,k),K.uniforms.picture.value=v[_e].texture,ke(K,null),t.projectionMatrix.copy(H),t.projectionMatrixInverse.copy(H).invert(),_e=1-_e,U.copy(P),le=k,be=!0}return{render:Ge,resize:ze,pace:Fe,shadingSize:()=>u.toArray(),exposure:()=>me}}var wo,aE,ed,oE,cE,lE,uE,Sg=ut(()=>{gt();wo=1920*1080,aE=`
  varying vec2 uvScreen;
  void main() {
    uvScreen = position.xy * .5 + .5;
    gl_Position = vec4(position.xy, 0., 1.);
  }`,ed=`
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
  }`,oE=`
  varying vec2 uvScreen;
  uniform sampler2D sceneDepth;
  uniform vec2 pixel, focalLength, projectionOffset;
  ${ed}
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
  }`,cE=`
  varying vec2 uvScreen;
  uniform sampler2D currentFrame,sceneDepth,contactMap,history;
  uniform mat4 previousClipFromCurrent;
  uniform vec2 pixel,aoDimensions,projectionOffset,focalLength;
  uniform mat4 worldFromView;
  uniform vec4 motionRect[12];uniform vec2 motionDepth[12];uniform int motionCount;
  uniform vec3 poolMin,poolMax;
  uniform float historyReady,stationarySamples,hold;
  ${ed}
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
  }`,lE=`
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
  }`,uE=`
  varying vec2 uvScreen;
  uniform sampler2D picture;
  uniform vec2 focalLength,projectionOffset;
  uniform mat4 worldFromView;
  uniform float daylight,reconstructAmount,immersed;
  uniform vec2 pixel;
  ${ed}
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
  }`});var pE=Rg(()=>{gt();Ph();GA();QA();VA();Hh();qA();sm();am();Jh();hm();fm();gm();_m();vm();wm();Dm();Pm();Nm();Om();Qm();Vm();Km();Xm();Ym();eg();ng();ag();lg();gg();bg();yg();Sg();var hE=document.querySelector("#view"),dE=document.querySelector("#load-status"),td=(i,e,t)=>Math.min(t,Math.max(e,i)),El=async i=>{let e=await fetch("assets/"+i);if(!e.ok)throw new Error(i+" "+e.status);return e.json()};async function fE(){let i=new al({canvas:hE,antialias:!1,alpha:!0,powerPreference:"high-performance",stencil:!1});i.setClearAlpha(1),i.getContext().disable(i.getContext().DITHER),Mg(),i.info.autoReset=!1;function e(){let $=Math.min(1.5,window.devicePixelRatio||1,Math.sqrt(wo/(innerWidth*innerHeight)));i.setDrawingBufferSize(innerWidth,innerHeight,$)}e(),i.outputColorSpace=ht,i.toneMapping=ho,i.shadowMap.enabled=!0,i.shadowMap.type=zs,i.shadowMap.autoUpdate=!1;let t=new Bs;t.background=new We(12560013),t.fog=new ka(13351330,.0025);let n=new sn(58,innerWidth/innerHeight,.105,805),s=new ua(i);s.compileEquirectangularShader();let r=new Ki().setTranscoderPath("assets/basis/").detectSupport(i);r.setWorkerLimit(2);let a=new fa().setMeshoptDecoder(zA).setKTX2Loader(r),o=new fl().loadAsync("assets/range/evening.hdr"),[c,l,h,d,u,f,p,g,m]=await Promise.all([a.loadAsync("assets/house.glb"),El("irradiance.json"),El("surfaces/manifest.json"),El("solids.json"),o,o.then($=>KA(t,$)),a.loadAsync("assets/details.glb"),mg(t),a.loadAsync("assets/architectural-finishes.glb")]);u.mapping=Xr;let A=s.fromEquirectangular(u);t.environment=A.texture;let x=await HA(i,t,l,h.surfaces,r);t.add(c.scene),t.updateMatrixWorld();let v=[],_=[],M;c.scene.traverse($=>{if($.userData.interaction&&v.push($),!$.isMesh)return;let Fe=$.material.name;if(Fe==="water"){M=$;return}if(Fe==="range"&&($.scale.y*=.11,$.position.y=$.position.y*.11-1.25),Fe==="mirror"){$.visible=!1;return}$.material=x.material(Fe),(Fe==="glass"||Fe==="car-glass")&&_.push($),$.castShadow=Fe!=="car-glass"&&Fe!=="glass"&&Fe!=="range"&&Fe!=="gravel",$.receiveShadow=Fe!=="glass"});let{scene:E}=p;xg(E);let b=[],y=new it;E.updateWorldMatrix(!0,!0),E.traverse($=>{if($.isMesh){$.castShadow=!0,$.receiveShadow=!0;for(let Fe of Array.isArray($.material)?$.material:[$.material])Fe.userData.houseLight||(Fe.userData.houseLight=!0,x.patch(Fe,{plainMap:!0}),Fe.name.toLowerCase().includes("hearth flame")&&(y.expandByObject($),$.castShadow=!1,Fe.depthWrite=!1,b.push(Fe)))}}),t.add(E),tg({scene:t,light:x});let I=Lm(c.scene,v),S=Jm(),C=[],w=0,B=null,R=null;function U({shadows:$=!1,reflections:Fe=!0}={}){w++,$&&(i.shadowMap.needsUpdate=!0),Fe&&B?.invalidate()}let P=I.register,F=$=>C.push($);rm(c.scene,_);let[,H,O]=await Promise.all([$m({scene:t,core:c.scene,loader:a,light:x}),Sm({scene:t,light:x,register:P,loader:a,windows:_,dirty:U,audio:S,camera:n,visitor:()=>R?.mode==="walk"&&!R.inCar?n.position:null,seatedDriver:()=>R?.seated==="driver"}),bm({scene:t,light:x,register:P,dirty:U,animateRegion:F}),um(t,x)]);_g({scene:t,group:m.scene,details:E,light:x}),zm({scene:t,solids:d});let L=qm({scene:t,core:c.scene,details:E,animateRegion:F}),G,V=await Wm({scene:t,camera:n,loader:a,light:x,register:P,dirty:U,renderer:i,audio:S,onPhotograph:()=>G?.action("photograph-taken")}),X=await xm({scene:t,loader:a,light:x,register:P,dirty:U,audio:S}),z=await dm({scene:t,core:c.scene,loader:a,light:x,register:P,dirty:U,animateRegion:F}),K=mm({scene:t,light:x,register:P,dirty:U,audio:S,animateRegion:F});vg({scene:t,light:x});let j=new Qs(16765856,3);j.target.position.set(0,0,-1),Object.assign(j.shadow.camera,{left:-23,right:23,top:19,bottom:-20,near:1,far:100}),j.shadow.mapSize.set(3072,3072),j.shadow.bias=-22e-5,j.shadow.normalBias=.018,j.castShadow=!0,t.add(j,j.target);let ce=cg(t,await El("practicals.json"));x.listenPractical(ce.setPower);let ae=Ag(t);f.connectGround();let ee={time:.4,night:0};function me($){$=td($,0,1),$!==ee.time&&B.invalidate(),ee.time=$;let Fe=ee.night=qi(.48,.97,$);x.mixBakes(Fe),f($),ce(Fe);let ke=Ye.lerp(.43,1.23,qi(0,.77,$)),Ge=Ye.lerp(.51,.058,qi(0,.6,$));j.position.set(-Math.sin(ke)*46,Math.tan(Ge)*46,Math.cos(ke)*46-1),j.color.setRGB(1,.83,.64).lerp(new We(1,.424,.112),qi(.08,.4,$)).lerp(new We(10927359),Fe),j.intensity=Ye.lerp(1.94,.988,qi(.04,.4,$))*(1-qi(.54,.76,$))+.07*Fe,$>.8&&j.position.set(-27,32,22),t.environmentIntensity=Ye.lerp(.87,.024,Fe),t.environmentRotation.y=-.285*Math.PI*2,t.fog.color.set(13352104).lerp(new We(2503496),Fe),t.fog.density=Ye.lerp(.0023,.0029,Fe),i.toneMappingExposure=Ye.lerp(1.05,1.18,Fe),i.shadowMap.needsUpdate=!0}let fe=rg({renderer:i,scene:t,camera:n,waterMesh:M}),Re=Bm({scene:t,light:x,register:P,dirty:U,audio:S,loader:a,animateRegion:F});om({scene:t,light:x});let Se=Fm({scene:t,light:x,water:fe,register:P,dirty:U,audio:S,fireMaterials:b,detail:E});B=og(i,t,_,x.setRoomReflection);let te=Eg(i,t,n,new it().setFromObject(M),y.union(Se.fireBounds),C);G=Um({camera:n,water:fe});let xe=Gm({guide:G,onRequestOpen:()=>R?.openMap(),closeGuide:()=>R?.closeMap()});R=im({camera:n,renderer:i,scene:t,solidRects:[...d,...g],yardFloor:pg,doors:v,setTime:me,interactions:I,light:x,audio:S,dirty:U,car:H,water:fe,state:ee,rangefinder:V,guide:G,map:xe}),F(R.footsteps.bounds),me(.4);let _e=performance.now(),be="",Ee=0,le=0,ve=new URLSearchParams(location.search).has("inspect"),Le=[],Oe=_e,ze=-1e3,Q=!1;function qe($){let Fe=performance.now(),ke=(Fe-Oe)/1e3;Oe=Fe;let Ge=Math.max(0,($-_e)/1e3);if(_e=$,document.hidden)return;ve&&Ge>0&&Ge<.25&&(Le.push(Ge*1e3),Le.length>720&&Le.shift());let k=Math.min(Ge,.06),D=Re.update(k,ee);D&&w++;let Z=O.update(k),pe=z.update(k),se=K.update(k),Me=X.update(k);Me&&w++,Se.update(k,ee)&&w++;let Ie=H.update(k)||D||Z||Me||pe||se;(Ie&&$-ze>90||!Ie&&Q)&&(i.shadowMap.needsUpdate=!0,ze=$,Ie||B.invalidate()),Q=Ie,R.update(k),G.update(k,R),xe.update(k,R.mode),L.update(k,R.sliders),V.update(k,R.mode),x.syncEmitters();let de=Math.abs(n.position.x)<9.05&&n.position.z<0&&n.position.z>-11.05,he=te.exposure(),Ce=de?td(he,1.35,Ye.lerp(28,3.65,ee.night)):td(he,Ye.lerp(1.075,1.15,ee.night),Ye.lerp(1.45,1.62,ee.night));i.toneMappingExposure=Math.abs(i.toneMappingExposure-Ce)<.002?Ce:Ye.damp(i.toneMappingExposure,Ce,3.8,Math.min(Ge,.06));let W=V.raised?47:R.mode==="menu"?50:61;Math.abs(n.fov-W)>.08&&(n.fov=Ye.damp(n.fov,W,6,Math.min(Ge,.06)),n.updateProjectionMatrix()),te.pace(ke,R.mode==="walk"||R.mode==="tour"),fe?.update(Math.min(Ge,.06),ee.time);let ue=v.map(re=>(re.position.x*16|0)+"/"+(re.quaternion.y*14|0)).join(",");ue!==be&&(be=ue,i.shadowMap.needsUpdate=!0,B.invalidate()),ae(n),i.info.reset(),B.update(ee.night,$*.001,n.position)&&le++,te.render(w+"|"+ee.time+"|"+le+"|"+v.map(re=>re.position.x.toFixed(4)+"/"+re.quaternion.y.toFixed(4)).join(","),ee.night,R.immersion()),V.afterRender(ee.time),Ee++}i.setAnimationLoop(qe);let ye=innerWidth,De=innerHeight;addEventListener("resize",()=>{innerWidth===ye&&innerHeight===De||(ye=innerWidth,De=innerHeight,e(),n.aspect=ye/De,n.updateProjectionMatrix(),te.resize(),fe?.repaint())}),ve&&(window.residence={renderer:i,scene:t,camera:n,nav:R,doors:v,interactions:I,household:Re,hearth:Se,car:H,rangefinder:V,drapes:L,audio:S,guide:G,map:xe,journal:O,fridge:X,nightstand:z,top:K,water:fe,setTime:me,state:ee,frameTimes:Le,shadingSize:te.shadingSize,latest:()=>({frames:Ee,mode:R.mode,geo:i.info.render,position:n.position.toArray()})}),document.body.classList.add("ready"),window.dispatchEvent(new Event("residenceready"))}fE().catch(i=>{console.error(i),dE.textContent="The scene could not load. Reload to try again. "+i.message})});export default pE();
