var it=(i,e,t)=>()=>{if(t)throw t[0];try{return i&&(e=i(i=0)),e}catch(n){throw t=[n],n}};var Mm=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};function Em(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Sm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function dr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rf(){let i=dr("canvas");return i.style.display="block",i}function pa(...i){let e="THREE."+i.shift();fr?fr("log",e,...i):console.log(e,...i)}function af(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ke(...i){i=af(i);let e="THREE."+i.shift();if(fr)fr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ye(...i){i=af(i);let e="THREE."+i.shift();if(fr)fr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function us(...i){let e=i.join(" ");e in Dh||(Dh[e]=!0,ke(...i))}function of(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function oi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function ct(i,e,t){return Math.max(e,Math.min(t,i))}function ou(i,e){return(i%e+e)%e}function wm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Cm(i,e,t){return i!==e?(t-i)/(e-i):0}function ha(i,e,t){return(1-t)*i+t*e}function Im(i,e,t,n){return ha(i,e,1-Math.exp(-t*n))}function Tm(i,e=1){return e-Math.abs(ou(i,e*2)-e)}function Rm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Bm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Dm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Fm(i,e){return i+Math.random()*(e-i)}function Pm(i){return i*(.5-Math.random())}function Lm(i){i!==void 0&&(Fh=i);let e=Fh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Nm(i){return i*ua}function Um(i){return i*fs}function Om(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function km(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function cu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Gm(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),p=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*d,c*u,o*l);break;case"YZY":i.set(c*u,o*h,c*d,o*l);break;case"ZXZ":i.set(c*d,c*u,o*h,o*l);break;case"XZX":i.set(o*h,c*p,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*p,o*l);break;case"ZYZ":i.set(c*p,c*f,o*h,o*l);break;default:ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Tc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function lu(i,e){if(e.constructor===Float32Array)return i;let t=Tc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function uu(i,e){if(e.constructor===Float32Array)return i;let t=Tc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}function Qm(){let i={enabled:!0,workingColorSpace:jt,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===wt&&(s.r=xi(s.r),s.g=xi(s.g),s.b=xi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===wt&&(s.r=or(s.r),s.g=or(s.g),s.b=or(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vn?ur:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[jt]:{primaries:e,whitePoint:n,transfer:ur,toXYZ:Lh,fromXYZ:Nh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:lt},outputColorSpaceConfig:{drawingBufferColorSpace:lt}},[lt]:{primaries:e,whitePoint:n,transfer:wt,toXYZ:Lh,fromXYZ:Nh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:lt}}}),i}function xi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function or(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function $c(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Uo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}function nl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function ul(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){os.fromArray(i,r);let o=s.x*Math.abs(os.x)+s.y*Math.abs(os.y)+s.z*Math.abs(os.z),c=e.dot(os),l=t.dot(os),h=n.dot(os);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}function jm(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,s[c]=-l-1,s[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,s[c]=13,s[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(l&8388608)===0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function Zm(i){Math.abs(i)>65504&&ke("DataUtils.toHalfFloat(): Value out of range."),i=ct(i,-65504,65504),_i.floatView[0]=i;let e=_i.uint32View[0],t=e>>23&511;return _i.baseTable[t]+((e&8388607)>>_i.shiftTable[t])}function $m(i){let e=i>>10;return _i.uint32View[0]=_i.mantissaTable[_i.offsetTable[e]+(i&1023)]+_i.exponentTable[e],_i.floatView[0]}function Wh(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=oi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}function co(i,e,t,n,s,r){nr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ia.x=r*nr.x-s*nr.y,ia.y=s*nr.x+r*nr.y):ia.copy(nr),i.copy(e),i.x+=ia.x,i.y+=ia.y,i.applyMatrix4(uf)}function ag(i,e,t,n,s,r,a,o){let c;if(e.side===Wt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Sn,o),c===null)return null;go.copy(o),go.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(go);return l<t.near||l>t.far?null:{distance:l,point:go.clone(),object:i}}function _o(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,fo),i.getVertexPosition(c,po),i.getVertexPosition(l,Ao);let h=ag(i,e,t,n,fo,po,Ao,Yh);if(h){let d=new R;qn.getBarycoord(Yh,fo,po,Ao,d),s&&(h.uv=qn.getInterpolatedAttribute(s,o,c,l,d,new fe)),r&&(h.uv1=qn.getInterpolatedAttribute(r,o,c,l,d,new fe)),a&&(h.normal=qn.getInterpolatedAttribute(a,o,c,l,d,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new R,materialIndex:0};qn.getNormal(fo,po,Ao,u.normal),h.face=u,h.barycoord=d}return h}function Mo(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Go.fromBufferAttribute(o,s),Qo.fromBufferAttribute(o,r),t.distanceSqToSegment(Go,Qo,xl,ad)>n)return;xl.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(xl);if(!(l<e.near||l>e.far))return{distance:l,point:ad.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}function ud(i,e,t,n,s,r,a){let o=Rl.distanceSqToPoint(i);if(o<t){let c=new R;Rl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}function hu(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+d)+(c-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}function fd(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function hg(i,e){let t=1-i;return t*t*e}function dg(i,e){return 2*(1-i)*i*e}function fg(i,e){return i*i*e}function da(i,e,t,n){return hg(i,e)+dg(i,t)+fg(i,n)}function pg(i,e){let t=1-i;return t*t*t*e}function Ag(i,e){let t=1-i;return 3*t*t*i*e}function mg(i,e){return 3*(1-i)*i*i*e}function gg(i,e){return i*i*i*e}function fa(i,e,t,n,s){return pg(i,e)+Ag(i,t)+mg(i,n)+gg(i,s)}function Ls(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(pd(s))s.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(pd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function fn(i){let e={};for(let t=0;t<i.length;t++){let n=Ls(i[t]);for(let s in n)e[s]=n[s]}return e}function pd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function _g(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function du(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}function zi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function la(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function vg(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Ad(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function yg(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}function hf(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Mg(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Eg(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=hf(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Mg(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}function md(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function gd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}function Sg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return yi;case"vector":case"vector2":case"vector3":case"vector4":return Xi;case"color":return Fa;case"quaternion":return Mi;case"bool":case"boolean":return vi;case"string":return Ei}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function wg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Sg(i.type);if(i.times===void 0){let n=[],s=[];yg(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),la(i.settings)&&(t.settings={inTangents:zi(i.settings.inTangents,Float32Array),outTangents:zi(i.settings.outTangents,Float32Array)}),t}function _d(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}function Ed(i,e){return i.distance-e.distance}function Ul(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Ul(r[a],e,t,!0)}}function Au(i,e,t,n){let s=Lg(n);switch(t){case eu:return i*e;case Gn:return i*e/s.components*s.byteLength;case uc:return i*e/s.components*s.byteLength;case wn:return i*e*2/s.components*s.byteLength;case hc:return i*e*2/s.components*s.byteLength;case Ts:return i*e*3/s.components*s.byteLength;case Vt:return i*e*4/s.components*s.byteLength;case dc:return i*e*4/s.components*s.byteLength;case Zi:case Ti:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ka:case Ri:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fc:case Rs:return Math.max(i,16)*Math.max(e,8)/4;case Pr:case $i:return Math.max(i,8)*Math.max(e,8)/2;case Lr:case Bs:case Nr:case Ur:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ds:case Fs:case Or:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bi:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ac:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case mc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case es:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case gc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case _c:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case xc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case bc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case vc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case yc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Mc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ec:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Sc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ts:case wc:case kr:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Gr:case Qr:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ps:case zr:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Lg(i){switch(i){case Ke:case Zl:return{byteLength:1,components:1};case Ci:case $l:case yt:return{byteLength:2,components:1};case cc:case lc:return{byteLength:2,components:4};case bn:case oc:case zt:return{byteLength:4,components:1};case Dr:case Fr:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}var Sd,kl,wd,Ss,Cd,wr,Sn,Wt,Rt,wi,Cr,Ua,Gl,Ql,Id,ws,Td,Rd,Bd,Dd,Fd,Pd,Ld,Nd,zl,Vl,Ud,Od,kd,Gd,Qd,zd,Vd,Hd,Wd,Ro,Bo,Do,cr,Fo,Po,Lo,No,Hl,Kd,qd,ai,Wl,Kl,ql,Oa,Xl,Jl,Yl,Sl,Xd,jl,ji,Ir,Tr,ac,Yt,gn,lr,Tt,Rr,Cs,At,Br,Qt,Ke,Zl,$l,Ci,oc,bn,zt,yt,cc,lc,Is,Dr,Fr,eu,Ts,Vt,bi,Ii,Gn,uc,wn,hc,dc,Zi,Ti,ka,Ri,Pr,fc,$i,Rs,Lr,Bs,Ds,Nr,Ur,Fs,Or,Bi,pc,Ac,mc,es,gc,_c,xc,bc,vc,yc,Mc,Ec,Sc,ts,wc,kr,Gr,Qr,Ps,zr,hs,ds,Io,wl,Cl,Il,Tl,Jd,tu,Ga,Vr,Yd,Cc,jd,vn,lt,jt,ur,wt,To,Zd,$d,ef,tf,nu,nf,sf,iu,su,ru,Ic,au,Ln,hr,Dh,fr,cf,ti,un,Fh,ua,fs,Je,fe,Nt,R,jc,Ph,ze,Zc,Lh,Nh,ot,Vs,Uo,zm,pr,Vm,el,Xt,st,Oo,Ot,Aa,Vi,ge,Hs,Hn,Hm,Wm,Ui,$a,Cn,Uh,Oh,Rn,Ar,Km,kh,Ws,di,eo,Zr,qm,Xm,Gh,Qh,zh,Vh,Jm,Ks,tl,Ct,et,Ym,mr,lf,Oi,to,ye,hn,ma,ps,Wn,fi,il,pi,qs,Xs,Hh,sl,rl,al,ol,cl,ll,qn,je,Ai,Kn,no,Js,Ys,js,ki,Gi,as,$r,io,so,os,_i,ni,qt,ro,eg,Mt,ga,_a,Be,tg,ea,hl,dn,ng,Pn,dl,Zs,In,ta,sn,Ze,As,mn,Hi,fl,ig,sg,Tn,rg,_n,gr,$s,na,er,tr,nr,ia,uf,ao,sa,oo,Kh,pl,qh,xa,mi,Al,lo,uo,Wi,Mn,Xh,cs,ho,Jh,fo,po,Ao,ml,mo,Yh,go,De,ra,jh,Zh,og,$h,xo,gl,ed,_l,ba,_r,Nn,td,cg,va,Un,ir,nd,bo,id,lg,aa,oa,On,ls,ug,vo,kn,sd,ko,xr,Go,Qo,rd,ca,yo,xl,ad,ms,od,cd,ya,Ma,br,ld,Rl,Eo,So,Ea,Ki,Sa,vr,wa,gs,Bn,Ca,Ia,rn,Ta,Ra,an,zo,Dn,_s,Vo,hd,dd,bl,vl,yl,ii,Ho,Wo,Ko,xs,qo,qi,Xo,Bl,Ba,yr,Mr,bs,Xn,Da,si,Rc,xg,bg,Lt,Jo,ht,Ht,Yo,jo,ri,Zo,$o,ec,tc,En,vi,Fa,yi,nc,Mi,Ei,Xi,Pa,ei,ic,df,Fn,gi,Dl,Jn,sr,sc,La,xn,Er,Ml,xd,bd,Sr,wo,Co,$n,vs,Qi,vd,yd,Jt,Fl,ys,Pl,Yn,Ms,Ll,Es,Si,El,Na,rr,ar,Ji,rc,fu,Cg,pu,Ig,Tg,Rg,Bg,Dg,Fg,Pg,Nl,St,Py,Md,Yi,Ol,mu=it(()=>{Sd=0,kl=1,wd=2,Ss=1,Cd=2,wr=3,Sn=0,Wt=1,Rt=2,wi=0,Cr=1,Ua=2,Gl=3,Ql=4,Id=5,ws=100,Td=101,Rd=102,Bd=103,Dd=104,Fd=200,Pd=201,Ld=202,Nd=203,zl=204,Vl=205,Ud=206,Od=207,kd=208,Gd=209,Qd=210,zd=211,Vd=212,Hd=213,Wd=214,Ro=0,Bo=1,Do=2,cr=3,Fo=4,Po=5,Lo=6,No=7,Hl=0,Kd=1,qd=2,ai=0,Wl=1,Kl=2,ql=3,Oa=4,Xl=5,Jl=6,Yl=7,Sl="attached",Xd="detached",jl=300,ji=301,Ir=302,Tr=303,ac=304,Yt=1e3,gn=1001,lr=1002,Tt=1003,Rr=1004,Cs=1005,At=1006,Br=1007,Qt=1008,Ke=1009,Zl=1010,$l=1011,Ci=1012,oc=1013,bn=1014,zt=1015,yt=1016,cc=1017,lc=1018,Is=1020,Dr=35902,Fr=35899,eu=1021,Ts=1022,Vt=1023,bi=1026,Ii=1027,Gn=1028,uc=1029,wn=1030,hc=1031,dc=1033,Zi=33776,Ti=33777,ka=33778,Ri=33779,Pr=35840,fc=35841,$i=35842,Rs=35843,Lr=36196,Bs=37492,Ds=37496,Nr=37488,Ur=37489,Fs=37490,Or=37491,Bi=37808,pc=37809,Ac=37810,mc=37811,es=37812,gc=37813,_c=37814,xc=37815,bc=37816,vc=37817,yc=37818,Mc=37819,Ec=37820,Sc=37821,ts=36492,wc=36494,kr=36495,Gr=36283,Qr=36284,Ps=36285,zr=36286,hs=2300,ds=2301,Io=2302,wl=2303,Cl=2400,Il=2401,Tl=2402,Jd=2500,tu=0,Ga=1,Vr=2,Yd=3200,Cc=0,jd=1,vn="",lt="srgb",jt="srgb-linear",ur="linear",wt="srgb",To=7680,Zd=519,$d=512,ef=513,tf=514,nu=515,nf=516,sf=517,iu=518,su=519,ru=35044,Ic=35048,au="300 es",Ln=2e3,hr=2001;Dh={},fr=null;cf={[Ro]:Ro,[Do]:Lo,[Fo]:Fo,[cr]:Po,[Bo]:Bo,[Lo]:Do,[No]:No,[Po]:cr},ti=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fh=1234567,ua=Math.PI/180,fs=180/Math.PI;Je={DEG2RAD:ua,RAD2DEG:fs,generateUUID:oi,clamp:ct,euclideanModulo:ou,mapLinear:wm,inverseLerp:Cm,lerp:ha,damp:Im,pingpong:Tm,smoothstep:Rm,smootherstep:Bm,randInt:Dm,randFloat:Fm,randFloatSpread:Pm,seededRandom:Lm,degToRad:Nm,radToDeg:Um,isPowerOfTwo:Om,ceilPowerOfTwo:km,floorPowerOfTwo:cu,setQuaternionFromProperEuler:Gm,normalize:uu,denormalize:lu},fe=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Nt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],p=r[a+2],g=r[a+3];if(d!==g||c!==u||l!==f||h!==p){let m=c*u+l*f+h*p+d*g;m<0&&(u=-u,f=-f,p=-p,g=-g,m=-m);let A=1-o;if(m<.9995){let _=Math.acos(m),y=Math.sin(_);A=Math.sin(A*_)/y,o=Math.sin(o*_)/y,c=c*A+u*o,l=l*A+f*o,h=h*A+p*o,d=d*A+g*o}else{c=c*A+u*o,l=l*A+f*o,h=h*A+p*o,d=d*A+g*o;let _=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=_,l*=_,h*=_,d*=_}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+h*d+c*f-l*u,e[t+1]=c*p+h*u+l*d-o*f,e[t+2]=l*p+h*f+o*u-c*d,e[t+3]=h*p-o*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),u=c(n/2),f=c(s/2),p=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*f*p,this._y=l*f*d-u*h*p,this._z=l*h*p+u*f*d,this._w=l*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+l*f*p,this._y=l*f*d-u*h*p,this._z=l*h*p-u*f*d,this._w=l*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-l*f*p,this._y=l*f*d+u*h*p,this._z=l*h*p+u*f*d,this._w=l*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-l*f*p,this._y=l*f*d+u*h*p,this._z=l*h*p-u*f*d,this._w=l*h*d+u*f*p;break;case"YZX":this._x=u*h*d+l*f*p,this._y=l*f*d+u*h*p,this._z=l*h*p-u*f*d,this._w=l*h*d-u*f*p;break;case"XZY":this._x=u*h*d-l*f*p,this._y=l*f*d-u*h*p,this._z=l*h*p+u*f*d,this._w=l*h*d+u*f*p;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ph.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ph.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jc.copy(this).projectOnVector(e),this.sub(jc)}reflect(e){return this.sub(jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jc=new R,Ph=new Nt,ze=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],g=s[0],m=s[3],A=s[6],_=s[1],y=s[4],v=s[7],M=s[2],E=s[5],x=s[8];return r[0]=a*g+o*_+c*M,r[3]=a*m+o*y+c*E,r[6]=a*A+o*v+c*x,r[1]=l*g+h*_+d*M,r[4]=l*m+h*y+d*E,r[7]=l*A+h*v+d*x,r[2]=u*g+f*_+p*M,r[5]=u*m+f*y+p*E,r[8]=u*A+f*v+p*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,p=t*d+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/p;return e[0]=d*g,e[1]=(s*l-h*n)*g,e[2]=(o*n-s*a)*g,e[3]=u*g,e[4]=(h*t-s*c)*g,e[5]=(s*r-o*t)*g,e[6]=f*g,e[7]=(n*c-l*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return us("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Zc.makeScale(e,t)),this}rotate(e){return us("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Zc.makeRotation(-e)),this}translate(e,t){return us("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Zc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Zc=new ze,Lh=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nh=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ot=Qm();Uo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vs===void 0&&(Vs=dr("canvas")),Vs.width=e.width,Vs.height=e.height;let s=Vs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Vs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=dr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=xi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xi(t[n]/255)*255):t[n]=xi(t[n]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},zm=0,pr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=oi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push($c(s[a].image)):r.push($c(s[a]))}else r=$c(s);n.url=r}return t||(e.images[this.uuid]=n),n}};Vm=0,el=new R,Xt=class i extends ti{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=gn,s=gn,r=At,a=Qt,o=Vt,c=Ke,l=i.DEFAULT_ANISOTROPY,h=vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=oi(),this.name="",this.source=new pr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(el).x}get height(){return this.source.getSize(el).y}get depth(){return this.source.getSize(el).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yt:e.x=e.x-Math.floor(e.x);break;case gn:e.x=e.x<0?0:1;break;case lr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yt:e.y=e.y-Math.floor(e.y);break;case gn:e.y=e.y<0?0:1;break;case lr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=jl;Xt.DEFAULT_ANISOTROPY=1;st=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],p=c[9],g=c[2],m=c[6],A=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(p+m)<.1&&Math.abs(l+f+A-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,v=(f+1)/2,M=(A+1)/2,E=(h+u)/4,x=(d+g)/4,b=(p+m)/4;return y>v&&y>M?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=E/n,r=x/n):v>M?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=E/s,r=b/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=x/r,s=b/r),this.set(n,s,r,t),this}let _=Math.sqrt((m-p)*(m-p)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(d-g)/_,this.z=(u-h)/_,this.w=Math.acos((l+f+A-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Oo=class extends ti{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:At,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Xt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:At,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new pr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ot=class extends Oo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Aa=class extends Xt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Vi=class extends Xt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},ge=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,c,l,h,d,u,f,p,g,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,d,u,f,p,g,m)}set(e,t,n,s,r,a,o,c,l,h,d,u,f,p,g,m){let A=this.elements;return A[0]=e,A[4]=t,A[8]=n,A[12]=s,A[1]=r,A[5]=a,A[9]=o,A[13]=c,A[2]=l,A[6]=h,A[10]=d,A[14]=u,A[3]=f,A[7]=p,A[11]=g,A[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Hs.setFromMatrixColumn(e,0).length(),r=1/Hs.setFromMatrixColumn(e,1).length(),a=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,p=o*h,g=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+p*l,t[5]=u-g*l,t[9]=-o*c,t[2]=g-u*l,t[6]=p+f*l,t[10]=a*c}else if(e.order==="YXZ"){let u=c*h,f=c*d,p=l*h,g=l*d;t[0]=u+g*o,t[4]=p*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-p,t[6]=g+u*o,t[10]=a*c}else if(e.order==="ZXY"){let u=c*h,f=c*d,p=l*h,g=l*d;t[0]=u-g*o,t[4]=-a*d,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*h,t[9]=g-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let u=a*h,f=a*d,p=o*h,g=o*d;t[0]=c*h,t[4]=p*l-f,t[8]=u*l+g,t[1]=c*d,t[5]=g*l+u,t[9]=f*l-p,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let u=a*c,f=a*l,p=o*c,g=o*l;t[0]=c*h,t[4]=g-u*d,t[8]=p*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*d+p,t[10]=u-g*d}else if(e.order==="XZY"){let u=a*c,f=a*l,p=o*c,g=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+g,t[5]=a*h,t[9]=f*d-p,t[2]=p*d-f,t[6]=o*h,t[10]=g*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hm,e,Wm)}lookAt(e,t,n){let s=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Ui.crossVectors(n,Cn),Ui.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Ui.crossVectors(n,Cn)),Ui.normalize(),$a.crossVectors(Cn,Ui),s[0]=Ui.x,s[4]=$a.x,s[8]=Cn.x,s[1]=Ui.y,s[5]=$a.y,s[9]=Cn.y,s[2]=Ui.z,s[6]=$a.z,s[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],g=n[6],m=n[10],A=n[14],_=n[3],y=n[7],v=n[11],M=n[15],E=s[0],x=s[4],b=s[8],w=s[12],S=s[1],T=s[5],C=s[9],F=s[13],I=s[2],P=s[6],L=s[10],z=s[14],O=s[3],G=s[7],V=s[11],H=s[15];return r[0]=a*E+o*S+c*I+l*O,r[4]=a*x+o*T+c*P+l*G,r[8]=a*b+o*C+c*L+l*V,r[12]=a*w+o*F+c*z+l*H,r[1]=h*E+d*S+u*I+f*O,r[5]=h*x+d*T+u*P+f*G,r[9]=h*b+d*C+u*L+f*V,r[13]=h*w+d*F+u*z+f*H,r[2]=p*E+g*S+m*I+A*O,r[6]=p*x+g*T+m*P+A*G,r[10]=p*b+g*C+m*L+A*V,r[14]=p*w+g*F+m*z+A*H,r[3]=_*E+y*S+v*I+M*O,r[7]=_*x+y*T+v*P+M*G,r[11]=_*b+y*C+v*L+M*V,r[15]=_*w+y*F+v*z+M*H,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],p=e[3],g=e[7],m=e[11],A=e[15],_=c*f-l*u,y=o*f-l*d,v=o*u-c*d,M=a*f-l*h,E=a*u-c*h,x=a*d-o*h;return t*(g*_-m*y+A*v)-n*(p*_-m*M+A*E)+s*(p*y-g*M+A*x)-r*(p*v-g*E+m*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],p=e[12],g=e[13],m=e[14],A=e[15],_=t*o-n*a,y=t*c-s*a,v=t*l-r*a,M=n*c-s*o,E=n*l-r*o,x=s*l-r*c,b=h*g-d*p,w=h*m-u*p,S=h*A-f*p,T=d*m-u*g,C=d*A-f*g,F=u*A-f*m,I=_*F-y*C+v*T+M*S-E*w+x*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/I;return e[0]=(o*F-c*C+l*T)*P,e[1]=(s*C-n*F-r*T)*P,e[2]=(g*x-m*E+A*M)*P,e[3]=(u*E-d*x-f*M)*P,e[4]=(c*S-a*F-l*w)*P,e[5]=(t*F-s*S+r*w)*P,e[6]=(m*v-p*x-A*y)*P,e[7]=(h*x-u*v+f*y)*P,e[8]=(a*C-o*S+l*b)*P,e[9]=(n*S-t*C-r*b)*P,e[10]=(p*E-g*v+A*_)*P,e[11]=(d*v-h*E-f*_)*P,e[12]=(o*w-a*T-c*b)*P,e[13]=(t*T-n*w+s*b)*P,e[14]=(g*y-p*M-m*_)*P,e[15]=(h*M-d*y+u*_)*P,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,p=r*d,g=a*h,m=a*d,A=o*d,_=c*l,y=c*h,v=c*d,M=n.x,E=n.y,x=n.z;return s[0]=(1-(g+A))*M,s[1]=(f+v)*M,s[2]=(p-y)*M,s[3]=0,s[4]=(f-v)*E,s[5]=(1-(u+A))*E,s[6]=(m+_)*E,s[7]=0,s[8]=(p+y)*x,s[9]=(m-_)*x,s[10]=(1-(u+g))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Hs.set(s[0],s[1],s[2]).length(),o=Hs.set(s[4],s[5],s[6]).length(),c=Hs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Hn.copy(this);let l=1/a,h=1/o,d=1/c;return Hn.elements[0]*=l,Hn.elements[1]*=l,Hn.elements[2]*=l,Hn.elements[4]*=h,Hn.elements[5]*=h,Hn.elements[6]*=h,Hn.elements[8]*=d,Hn.elements[9]*=d,Hn.elements[10]*=d,t.setFromRotationMatrix(Hn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=Ln,c=!1){let l=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),p,g;if(c)p=r/(a-r),g=a*r/(a-r);else if(o===Ln)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===hr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Ln,c=!1){let l=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),p,g;if(c)p=1/(a-r),g=a/(a-r);else if(o===Ln)p=-2/(a-r),g=-(a+r)/(a-r);else if(o===hr)p=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Hs=new R,Hn=new ge,Hm=new R(0,0,0),Wm=new R(1,1,1),Ui=new R,$a=new R,Cn=new R,Uh=new ge,Oh=new Nt,Rn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Uh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Oh.setFromEuler(this),this.setFromQuaternion(Oh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rn.DEFAULT_ORDER="XYZ";Ar=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Km=0,kh=new R,Ws=new Nt,di=new ge,eo=new R,Zr=new R,qm=new R,Xm=new Nt,Gh=new R(1,0,0),Qh=new R(0,1,0),zh=new R(0,0,1),Vh={type:"added"},Jm={type:"removed"},Ks={type:"childadded",child:null},tl={type:"childremoved",child:null},Ct=class i extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new R,t=new Rn,n=new Nt,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new ze}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ar,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.premultiply(Ws),this}rotateX(e){return this.rotateOnAxis(Gh,e)}rotateY(e){return this.rotateOnAxis(Qh,e)}rotateZ(e){return this.rotateOnAxis(zh,e)}translateOnAxis(e,t){return kh.copy(e).applyQuaternion(this.quaternion),this.position.add(kh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gh,e)}translateY(e){return this.translateOnAxis(Qh,e)}translateZ(e){return this.translateOnAxis(zh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?eo.copy(e):eo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Zr,eo,this.up):di.lookAt(eo,Zr,this.up),this.quaternion.setFromRotationMatrix(di),s&&(di.extractRotation(s.matrixWorld),Ws.setFromRotationMatrix(di),this.quaternion.premultiply(Ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vh),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jm),tl.child=e,this.dispatchEvent(tl),tl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vh),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,e,qm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,Xm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ct.DEFAULT_UP=new R(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;et=class extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ym={type:"move"},mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,n),A=this._getHandJoint(l,g);m!==null&&(A.matrix.fromArray(m.transform.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale),A.matrixWorldNeedsUpdate=!0,A.jointRadius=m.radius),A.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;l.inputState.pinching&&u>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ym)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new et;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},lf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},to={h:0,s:0,l:0};ye=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ot.workingColorSpace){if(e=ou(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=nl(a,r,e+1/3),this.g=nl(a,r,e),this.b=nl(a,r,e-1/3)}return ot.colorSpaceToWorking(this,s),this}setStyle(e,t=lt){function n(r){r!==void 0&&parseFloat(r)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=lt){let n=lf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=lt){return ot.workingToColorSpace(hn.copy(this),e),Math.round(ct(hn.r*255,0,255))*65536+Math.round(ct(hn.g*255,0,255))*256+Math.round(ct(hn.b*255,0,255))}getHexString(e=lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(hn.copy(this),t);let n=hn.r,s=hn.g,r=hn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=lt){ot.workingToColorSpace(hn.copy(this),e);let t=hn.r,n=hn.g,s=hn.b;return e!==lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+t,Oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Oi),e.getHSL(to);let n=ha(Oi.h,to.h,t),s=ha(Oi.s,to.s,t),r=ha(Oi.l,to.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new ye;ye.NAMES=lf;ma=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ye(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},ps=class extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Wn=new R,fi=new R,il=new R,pi=new R,qs=new R,Xs=new R,Hh=new R,sl=new R,rl=new R,al=new R,ol=new st,cl=new st,ll=new st,qn=class i{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Wn.subVectors(e,t),s.cross(Wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Wn.subVectors(s,t),fi.subVectors(n,t),il.subVectors(e,t);let a=Wn.dot(Wn),o=Wn.dot(fi),c=Wn.dot(il),l=fi.dot(fi),h=fi.dot(il),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-o*h)*u,p=(a*h-o*c)*u;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,pi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,pi.x),c.addScaledVector(a,pi.y),c.addScaledVector(o,pi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return ol.setScalar(0),cl.setScalar(0),ll.setScalar(0),ol.fromBufferAttribute(e,t),cl.fromBufferAttribute(e,n),ll.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ol,r.x),a.addScaledVector(cl,r.y),a.addScaledVector(ll,r.z),a}static isFrontFacing(e,t,n,s){return Wn.subVectors(n,t),fi.subVectors(e,t),Wn.cross(fi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Wn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;qs.subVectors(s,n),Xs.subVectors(r,n),sl.subVectors(e,n);let c=qs.dot(sl),l=Xs.dot(sl);if(c<=0&&l<=0)return t.copy(n);rl.subVectors(e,s);let h=qs.dot(rl),d=Xs.dot(rl);if(h>=0&&d<=h)return t.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(qs,a);al.subVectors(e,r);let f=qs.dot(al),p=Xs.dot(al);if(p>=0&&f<=p)return t.copy(r);let g=f*l-c*p;if(g<=0&&l>=0&&p<=0)return o=l/(l-p),t.copy(n).addScaledVector(Xs,o);let m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return Hh.subVectors(r,s),o=(d-h)/(d-h+(f-p)),t.copy(s).addScaledVector(Hh,o);let A=1/(m+g+u);return a=g*A,o=u*A,t.copy(n).addScaledVector(qs,a).addScaledVector(Xs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},je=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Kn):Kn.fromBufferAttribute(r,a),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),no.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),no.copy(n.boundingBox)),no.applyMatrix4(e.matrixWorld),this.union(no)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($r),io.subVectors(this.max,$r),Js.subVectors(e.a,$r),Ys.subVectors(e.b,$r),js.subVectors(e.c,$r),ki.subVectors(Ys,Js),Gi.subVectors(js,Ys),as.subVectors(Js,js);let t=[0,-ki.z,ki.y,0,-Gi.z,Gi.y,0,-as.z,as.y,ki.z,0,-ki.x,Gi.z,0,-Gi.x,as.z,0,-as.x,-ki.y,ki.x,0,-Gi.y,Gi.x,0,-as.y,as.x,0];return!ul(t,Js,Ys,js,io)||(t=[1,0,0,0,1,0,0,0,1],!ul(t,Js,Ys,js,io))?!1:(so.crossVectors(ki,Gi),t=[so.x,so.y,so.z],ul(t,Js,Ys,js,io))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ai=[new R,new R,new R,new R,new R,new R,new R,new R],Kn=new R,no=new je,Js=new R,Ys=new R,js=new R,ki=new R,Gi=new R,as=new R,$r=new R,io=new R,so=new R,os=new R;_i=jm();ni=class{static toHalfFloat(e){return Zm(e)}static fromHalfFloat(e){return $m(e)}},qt=new R,ro=new fe,eg=0,Mt=class extends ti{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ru,this.updateRanges=[],this.gpuType=zt,this.version=0,this._normalizationScale=e!==void 0?Tc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ro.fromBufferAttribute(this,t),ro.applyMatrix3(e),this.setXY(t,ro.x,ro.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):lu(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):uu(e,this.array)}},ga=class extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},_a=class extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Be=class extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}},tg=new je,ea=new R,hl=new R,dn=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):tg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ea.subVectors(e,this.center);let t=ea.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ea,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ea.copy(e.center).add(hl)),this.expandByPoint(ea.copy(e.center).sub(hl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ng=0,Pn=new ge,dl=new Ct,Zs=new R,In=new je,ta=new je,sn=new R,Ze=class i extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Em(e)?_a:ga)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,n){return Pn.makeTranslation(e,t,n),this.applyMatrix4(Pn),this}scale(e,t,n){return Pn.makeScale(e,t,n),this.applyMatrix4(Pn),this}lookAt(e){return dl.lookAt(e),dl.updateMatrix(),this.applyMatrix4(dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Be(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new je);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];In.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ta.setFromBufferAttribute(o),this.morphTargetsRelative?(sn.addVectors(In.min,ta.min),In.expandByPoint(sn),sn.addVectors(In.max,ta.max),In.expandByPoint(sn)):(In.expandByPoint(ta.min),In.expandByPoint(ta.max))}In.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)sn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(sn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)sn.fromBufferAttribute(o,l),c&&(Zs.fromBufferAttribute(e,l),sn.add(Zs)),s=Math.max(s,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Mt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let w=0;w<n.count;w++)o[w]=new R,c[w]=new R;let h=new R,d=new R,u=new R,f=new fe,p=new fe,g=new fe,m=new R,A=new R;function _(w,S,T){l[w]=l[S]=l[T]=1,h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,S),u.fromBufferAttribute(n,T),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,T),d.sub(h),u.sub(h),p.sub(f),g.sub(f);let C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(m.copy(d).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(C),A.copy(u).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(C),o[w].add(m),o[S].add(m),o[T].add(m),c[w].add(A),c[S].add(A),c[T].add(A))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let w=0,S=y.length;w<S;++w){let T=y[w],C=T.start,F=T.count;for(let I=C,P=C+F;I<P;I+=3)_(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let v=new R,M=new R,E=new R,x=new R;function b(w){E.fromBufferAttribute(s,w),x.copy(E);let S=o[w];v.copy(S),v.sub(E.multiplyScalar(E.dot(S))).normalize(),M.crossVectors(x,S);let C=M.dot(c[w])<0?-1:1;a.setXYZW(w,v.x,v.y,v.z,C)}for(let w=0,S=n.count;w<S;++w)l[w]&&b(w);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new R,r=new R,a=new R,o=new R,c=new R,l=new R,h=new R,d=new R;if(e)for(let u=0,f=e.count;u<f;u+=3){let p=e.getX(u+0),g=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,p),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),f=0,p=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?f=c[g]*o.data.stride+o.offset:f=c[g]*h;for(let A=0;A<h;A++)u[p++]=l[f++]}return new Mt(u,h,d)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=e(u,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},As=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ru,this.updateRanges=[],this.version=0,this.uuid=oi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Wh(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Wh(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};mn=new R,Hi=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Tc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){pa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){pa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):lu(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):uu(e,this.data.array)}},fl=new R,ig=new R,sg=new ze,Tn=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=fl.subVectors(n,t).cross(ig.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(fl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||sg.getNormalMatrix(e),s=this.coplanarPoint(fl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},rg=0,_n=class extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=oi(),this.name="",this.type="Material",this.blending=Cr,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zl,this.blendDst=Vl,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=To,this.stencilZFail=To,this.stencilZPass=To,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ye().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Tn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new fe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new fe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},gr=class extends _n{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},na=new R,er=new R,tr=new R,nr=new fe,ia=new fe,uf=new ge,ao=new R,sa=new R,oo=new R,Kh=new fe,pl=new fe,qh=new fe,xa=class extends Ct{constructor(e=new gr){if(super(),this.isSprite=!0,this.type="Sprite",$s===void 0){$s=new Ze;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new As(t,5);$s.setIndex([0,1,2,0,2,3]),$s.setAttribute("position",new Hi(n,3,0,!1)),$s.setAttribute("uv",new Hi(n,2,3,!1))}this.geometry=$s,this.material=e,this.center=new fe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ye('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),er.setFromMatrixScale(this.matrixWorld),uf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),tr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&er.multiplyScalar(-tr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;co(ao.set(-.5,-.5,0),tr,a,er,s,r),co(sa.set(.5,-.5,0),tr,a,er,s,r),co(oo.set(.5,.5,0),tr,a,er,s,r),Kh.set(0,0),pl.set(1,0),qh.set(1,1);let o=e.ray.intersectTriangle(ao,sa,oo,!1,na);if(o===null&&(co(sa.set(-.5,.5,0),tr,a,er,s,r),pl.set(0,1),o=e.ray.intersectTriangle(ao,oo,sa,!1,na),o===null))return;let c=e.ray.origin.distanceTo(na);c<e.near||c>e.far||t.push({distance:c,point:na.clone(),uv:qn.getInterpolation(na,ao,sa,oo,Kh,pl,qh,new fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};mi=new R,Al=new R,lo=new R,uo=new R,Wi=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Al.copy(e).add(t).multiplyScalar(.5),lo.copy(t).sub(e).normalize(),uo.copy(this.origin).sub(Al);let r=e.distanceTo(t)*.5,a=-this.direction.dot(lo),o=uo.dot(this.direction),c=-uo.dot(lo),l=uo.lengthSq(),h=Math.abs(1-a*a),d,u,f,p;if(h>0)if(d=a*c-o,u=a*o-c,p=r*h,d>=0)if(u>=-p)if(u<=p){let g=1/h;d*=g,u*=g,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-p?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=p?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Al).addScaledVector(lo,u),f}intersectSphere(e,t){if(e.radius<0)return null;mi.subVectors(e.center,this.origin);let n=mi.dot(this.direction),s=mi.dot(mi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,p=t.x-a.x,g=t.y-a.y,m=t.z-a.z,A=n.x-a.x,_=n.y-a.y,y=n.z-a.z,v=Math.abs(c),M=Math.abs(l),E=Math.abs(h),x,b,w,S,T,C,F,I,P,L,z,O;if(v>=M&&v>=E?(w=c,C=d,P=p,O=A,c>=0?(x=l,b=h,S=u,T=f,F=g,I=m,L=_,z=y):(x=h,b=l,S=f,T=u,F=m,I=g,L=y,z=_)):M>=E?(w=l,C=u,P=g,O=_,l>=0?(x=h,b=c,S=f,T=d,F=m,I=p,L=y,z=A):(x=c,b=h,S=d,T=f,F=p,I=m,L=A,z=y)):(w=h,C=f,P=m,O=y,h>=0?(x=c,b=l,S=d,T=u,F=p,I=g,L=A,z=_):(x=l,b=c,S=u,T=d,F=g,I=p,L=_,z=A)),w===0)return null;let G=x/w,V=b/w,H=1/w,q=S-G*C,Z=T-V*C,W=F-G*P,j=I-V*P,re=L-G*O,le=z-V*O,ae=re*j-le*W,me=q*le-Z*re,Fe=W*Z-j*q;if(s){if(ae<0||me<0||Fe<0)return null}else if((ae<0||me<0||Fe<0)&&(ae>0||me>0||Fe>0))return null;let xe=ae+me+Fe;if(xe===0)return null;let Ie=H*(ae*C+me*P+Fe*O);return(xe>0?Ie<0:Ie>0)?null:this.at(Ie/xe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Mn=class extends _n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Xh=new ge,cs=new Wi,ho=new dn,Jh=new R,fo=new R,po=new R,Ao=new R,ml=new R,mo=new R,Yh=new R,go=new R,De=class extends Ct{constructor(e=new Ze,t=new Mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){mo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(ml.fromBufferAttribute(d,e),a?mo.addScaledVector(ml,h):mo.addScaledVector(ml.sub(t),h))}t.add(mo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(r),cs.copy(e.ray).recast(e.near),!(ho.containsPoint(cs.origin)===!1&&(cs.intersectSphere(ho,Jh)===null||cs.origin.distanceToSquared(Jh)>(e.far-e.near)**2))&&(Xh.copy(r).invert(),cs.copy(e.ray).applyMatrix4(Xh),!(n.boundingBox!==null&&cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,g=u.length;p<g;p++){let m=u[p],A=a[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,M=y;v<M;v+=3){let E=o.getX(v),x=o.getX(v+1),b=o.getX(v+2);s=_o(this,A,e,n,l,h,d,E,x,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=p,A=g;m<A;m+=3){let _=o.getX(m),y=o.getX(m+1),v=o.getX(m+2);s=_o(this,a,e,n,l,h,d,_,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,g=u.length;p<g;p++){let m=u[p],A=a[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,M=y;v<M;v+=3){let E=v,x=v+1,b=v+2;s=_o(this,A,e,n,l,h,d,E,x,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let m=p,A=g;m<A;m+=3){let _=m,y=m+1,v=m+2;s=_o(this,a,e,n,l,h,d,_,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};ra=new st,jh=new st,Zh=new st,og=new st,$h=new ge,xo=new R,gl=new dn,ed=new ge,_l=new Wi,ba=class extends De{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Sl,this.bindMatrix=new ge,this.bindMatrixInverse=new ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new je),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,xo),this.boundingBox.expandByPoint(xo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new dn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,xo),this.boundingSphere.expandByPoint(xo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gl.copy(this.boundingSphere),gl.applyMatrix4(s),e.ray.intersectsSphere(gl)!==!1&&(ed.copy(s).invert(),_l.copy(e.ray).applyMatrix4(ed),!(this.boundingBox!==null&&_l.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,_l)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new st,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Sl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Xd?this.bindMatrixInverse.copy(this.bindMatrix).invert():ke("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;jh.fromBufferAttribute(s.attributes.skinIndex,e),Zh.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(ra.copy(t),t.set(0,0,0,0)):(ra.set(t.x,t.y,t.z,1),t.set(0,0,0)),ra.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Zh.getComponent(r);if(a!==0){let o=jh.getComponent(r);$h.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(og.copy(ra).applyMatrix4($h),a)}}return t.isVector4&&(t.w=ra.w),t.applyMatrix4(this.bindMatrixInverse)}},_r=class extends Ct{constructor(){super(),this.isBone=!0,this.type="Bone"}},Nn=class extends Xt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Tt,h=Tt,d,u){super(null,a,o,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},td=new ge,cg=new ge,va=class i{constructor(e=[],t=[]){this.uuid=oi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ke("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:cg;td.multiplyMatrices(o,t[r]),td.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Nn(t,e,e,Vt,zt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(ke("Skeleton: No bone found with UUID:",r),a=new _r),this.bones.push(a),this.boneInverses.push(new ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Un=class extends Mt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ir=new ge,nd=new ge,bo=[],id=new je,lg=new ge,aa=new De,oa=new dn,On=class extends De{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Un(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,lg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new je),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ir),id.copy(e.boundingBox).applyMatrix4(ir),this.boundingBox.union(id)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new dn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ir),oa.copy(e.boundingSphere).applyMatrix4(ir),this.boundingSphere.union(oa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(aa.geometry=this.geometry,aa.material=this.material,aa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oa.copy(this.boundingSphere),oa.applyMatrix4(n),e.ray.intersectsSphere(oa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ir),nd.multiplyMatrices(n,ir),aa.matrixWorld=nd,aa.raycast(e,bo);for(let a=0,o=bo.length;a<o;a++){let c=bo[a];c.instanceId=r,c.object=this,t.push(c)}bo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Un(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Nn(new Float32Array(s*this.count),s,this.count,Gn,zt));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ls=new dn,ug=new fe(.5,.5),vo=new R,kn=class{constructor(e=new Tn,t=new Tn,n=new Tn,s=new Tn,r=new Tn,a=new Tn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ln,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],g=r[9],m=r[10],A=r[11],_=r[12],y=r[13],v=r[14],M=r[15];if(s[0].setComponents(l-a,f-h,A-p,M-_).normalize(),s[1].setComponents(l+a,f+h,A+p,M+_).normalize(),s[2].setComponents(l+o,f+d,A+g,M+y).normalize(),s[3].setComponents(l-o,f-d,A-g,M-y).normalize(),n)s[4].setComponents(c,u,m,v).normalize(),s[5].setComponents(l-c,f-u,A-m,M-v).normalize();else if(s[4].setComponents(l-c,f-u,A-m,M-v).normalize(),t===Ln)s[5].setComponents(l+c,f+u,A+m,M+v).normalize();else if(t===hr)s[5].setComponents(c,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){ls.center.set(0,0,0);let t=ug.distanceTo(e.center);return ls.radius=.7071067811865476+t,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(vo.x=s.normal.x>0?e.max.x:e.min.x,vo.y=s.normal.y>0?e.max.y:e.min.y,vo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(vo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},sd=new ge,ko=class i{constructor(){this.coordinateSystem=Ln,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];sd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new kn),n[s].setFromProjectionMatrix(sd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new kn),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}},xr=class extends _n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Go=new R,Qo=new R,rd=new ge,ca=new Wi,yo=new dn,xl=new R,ad=new R,ms=class extends Ct{constructor(e=new Ze,t=new xr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Go.fromBufferAttribute(t,s-1),Qo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Go.distanceTo(Qo);e.setAttribute("lineDistance",new Be(n,1))}else ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(s),yo.radius+=r,e.ray.intersectsSphere(yo)===!1)return;rd.copy(s).invert(),ca.copy(e.ray).applyMatrix4(rd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,m=p-1;g<m;g+=l){let A=h.getX(g),_=h.getX(g+1),y=Mo(this,e,ca,c,A,_,g);y&&t.push(y)}if(this.isLineLoop){let g=h.getX(p-1),m=h.getX(f),A=Mo(this,e,ca,c,g,m,p-1);A&&t.push(A)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,m=p-1;g<m;g+=l){let A=Mo(this,e,ca,c,g,g+1,g);A&&t.push(A)}if(this.isLineLoop){let g=Mo(this,e,ca,c,p-1,f,p-1);g&&t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};od=new R,cd=new R,ya=class extends ms{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)od.fromBufferAttribute(t,s),cd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+od.distanceTo(cd);e.setAttribute("lineDistance",new Be(n,1))}else ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ma=class extends ms{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},br=class extends _n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ld=new ge,Rl=new Wi,Eo=new dn,So=new R,Ea=class extends Ct{constructor(e=new Ze,t=new br){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(s),Eo.radius+=r,e.ray.intersectsSphere(Eo)===!1)return;ld.copy(s).invert(),Rl.copy(e.ray).applyMatrix4(ld);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let p=u,g=f;p<g;p++){let m=l.getX(p);So.fromBufferAttribute(d,m),ud(So,m,c,s,e,t,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=u,g=f;p<g;p++)So.fromBufferAttribute(d,p),ud(So,p,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};Ki=class extends Xt{constructor(e=[],t,n,s,r,a,o,c,l,h,d,u){super(null,a,o,c,l,h,s,r,d,u),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},Sa=class extends Ki{constructor(e,t,n,s,r,a){super(e,t,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=s,this.wrapR=gn,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},vr=class extends Ki{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,ji),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}},wa=class extends Xt{constructor(e=[],t=ji,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},gs=class extends Xt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Bn=class extends Xt{constructor(e,t,n=bn,s,r,a,o=Tt,c=Tt,l,h=bi,d=1){if(h!==bi&&h!==Ii)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new pr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ca=class extends Bn{constructor(e,t=bn,n=ji,s,r,a=Tt,o=Tt,c,l=bi){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ia=class extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},rn=class i extends Ze{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,s,a,2),p("x","z","y",1,-1,e,n,-t,s,a,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Be(l,3)),this.setAttribute("normal",new Be(h,3)),this.setAttribute("uv",new Be(d,2));function p(g,m,A,_,y,v,M,E,x,b,w){let S=v/x,T=M/b,C=v/2,F=M/2,I=E/2,P=x+1,L=b+1,z=0,O=0,G=new R;for(let V=0;V<L;V++){let H=V*T-F;for(let q=0;q<P;q++){let Z=q*S-C;G[g]=Z*_,G[m]=H*y,G[A]=I,l.push(G.x,G.y,G.z),G[g]=0,G[m]=0,G[A]=E>0?1:-1,h.push(G.x,G.y,G.z),d.push(q/x),d.push(1-V/b),z+=1}}for(let V=0;V<b;V++)for(let H=0;H<x;H++){let q=u+H+P*V,Z=u+H+P*(V+1),W=u+(H+1)+P*(V+1),j=u+(H+1)+P*V;c.push(q,Z,j),c.push(Z,W,j),O+=6}o.addGroup(f,O,w),f+=O,u+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ta=class i extends Ze{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],h=t/2,d=Math.PI/2*e,u=t,f=2*d+u,p=n*2+r,g=s+1,m=new R,A=new R;for(let _=0;_<=p;_++){let y=0,v=0,M=0,E=0;if(_<=n){let w=_/n,S=w*Math.PI/2;v=-h-e*Math.cos(S),M=e*Math.sin(S),E=-e*Math.cos(S),y=w*d}else if(_<=n+r){let w=(_-n)/r;v=-h+w*t,M=e,E=0,y=d+w*u}else{let w=(_-n-r)/n,S=w*Math.PI/2;v=h+e*Math.sin(S),M=e*Math.cos(S),E=e*Math.sin(S),y=d+u+w*d}let x=Math.max(0,Math.min(1,y/f)),b=0;_===0?b=.5/s:_===p&&(b=-.5/s);for(let w=0;w<=s;w++){let S=w/s,T=S*Math.PI*2,C=Math.sin(T),F=Math.cos(T);A.x=-M*F,A.y=v,A.z=M*C,o.push(A.x,A.y,A.z),m.set(-M*F,E,M*C),m.normalize(),c.push(m.x,m.y,m.z),l.push(S+b,x)}if(_>0){let w=(_-1)*g;for(let S=0;S<s;S++){let T=w+S,C=w+S+1,F=_*g+S,I=_*g+S+1;a.push(T,C,F),a.push(C,I,F)}}}this.setIndex(a),this.setAttribute("position",new Be(o,3)),this.setAttribute("normal",new Be(c,3)),this.setAttribute("uv",new Be(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Ra=class i extends Ze{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new R,h=new fe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=n+d/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Be(a,3)),this.setAttribute("normal",new Be(o,3)),this.setAttribute("uv",new Be(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},an=class i extends Ze{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,g=[],m=n/2,A=0;_(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Be(d,3)),this.setAttribute("normal",new Be(u,3)),this.setAttribute("uv",new Be(f,2));function _(){let v=new R,M=new R,E=0,x=(t-e)/n;for(let b=0;b<=r;b++){let w=[],S=b/r,T=S*(t-e)+e;for(let C=0;C<=s;C++){let F=C/s,I=F*c+o,P=Math.sin(I),L=Math.cos(I);M.x=T*P,M.y=-S*n+m,M.z=T*L,d.push(M.x,M.y,M.z),v.set(P,x,L).normalize(),u.push(v.x,v.y,v.z),f.push(F,1-S),w.push(p++)}g.push(w)}for(let b=0;b<s;b++)for(let w=0;w<r;w++){let S=g[w][b],T=g[w+1][b],C=g[w+1][b+1],F=g[w][b+1];(e>0||w!==0)&&(h.push(S,T,F),E+=3),(t>0||w!==r-1)&&(h.push(T,C,F),E+=3)}l.addGroup(A,E,0),A+=E}function y(v){let M=p,E=new fe,x=new R,b=0,w=v===!0?e:t,S=v===!0?1:-1;for(let C=1;C<=s;C++)d.push(0,m*S,0),u.push(0,S,0),f.push(.5,.5),p++;let T=p;for(let C=0;C<=s;C++){let I=C/s*c+o,P=Math.cos(I),L=Math.sin(I);x.x=w*L,x.y=m*S,x.z=w*P,d.push(x.x,x.y,x.z),u.push(0,S,0),E.x=P*.5+.5,E.y=L*.5*S+.5,f.push(E.x,E.y),p++}for(let C=0;C<s;C++){let F=M+C,I=T+C;v===!0?h.push(I,I+1,F):h.push(I+1,I,F),b+=3}l.addGroup(A,b,v===!0?1:2),A+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},zo=class i extends Ze{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new Be(r,3)),this.setAttribute("normal",new Be(r.slice(),3)),this.setAttribute("uv",new Be(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let y=new R,v=new R,M=new R;for(let E=0;E<t.length;E+=3)f(t[E+0],y),f(t[E+1],v),f(t[E+2],M),c(y,v,M,_)}function c(_,y,v,M){let E=M+1,x=[];for(let b=0;b<=E;b++){x[b]=[];let w=_.clone().lerp(v,b/E),S=y.clone().lerp(v,b/E),T=E-b;for(let C=0;C<=T;C++)C===0&&b===E?x[b][C]=w:x[b][C]=w.clone().lerp(S,C/T)}for(let b=0;b<E;b++)for(let w=0;w<2*(E-b)-1;w++){let S=Math.floor(w/2);w%2===0?(u(x[b][S+1]),u(x[b+1][S]),u(x[b][S])):(u(x[b][S+1]),u(x[b+1][S+1]),u(x[b+1][S]))}}function l(_){let y=new R;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(_),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function h(){let _=new R;for(let y=0;y<r.length;y+=3){_.x=r[y+0],_.y=r[y+1],_.z=r[y+2];let v=m(_)/2/Math.PI+.5,M=A(_)/Math.PI+.5;a.push(v,1-M)}p(),d()}function d(){for(let _=0;_<a.length;_+=6){let y=a[_+0],v=a[_+2],M=a[_+4],E=Math.max(y,v,M),x=Math.min(y,v,M);E>.9&&x<.1&&(y<.2&&(a[_+0]+=1),v<.2&&(a[_+2]+=1),M<.2&&(a[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function f(_,y){let v=_*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function p(){let _=new R,y=new R,v=new R,M=new R,E=new fe,x=new fe,b=new fe;for(let w=0,S=0;w<r.length;w+=9,S+=6){_.set(r[w+0],r[w+1],r[w+2]),y.set(r[w+3],r[w+4],r[w+5]),v.set(r[w+6],r[w+7],r[w+8]),E.set(a[S+0],a[S+1]),x.set(a[S+2],a[S+3]),b.set(a[S+4],a[S+5]),M.copy(_).add(y).add(v).divideScalar(3);let T=m(M);g(E,S+0,_,T),g(x,S+2,y,T),g(b,S+4,v,T)}}function g(_,y,v,M){M<0&&_.x===1&&(a[y]=_.x-1),v.x===0&&v.z===0&&(a[y]=M/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function A(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},Dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ke("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new fe:new R);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new R,s=[],r=[],a=[],o=new R,c=new ge;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new R)}r[0]=new R,a[0]=new R;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(ct(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(ct(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},_s=class extends Dn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new fe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Vo=class extends _s{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};hd=new R,dd=new R,bl=new hu,vl=new hu,yl=new hu,ii=class extends Dn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new R){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(dd.subVectors(s[0],s[1]).add(s[0]),l=dd);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(hd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=hd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);g<1e-4&&(g=1),p<1e-4&&(p=g),m<1e-4&&(m=g),bl.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,p,g,m),vl.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,p,g,m),yl.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,p,g,m)}else this.curveType==="catmullrom"&&(bl.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),vl.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),yl.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(bl.calc(c),vl.calc(c),yl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};Ho=class extends Dn{constructor(e=new fe,t=new fe,n=new fe,s=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new fe){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(fa(e,s.x,r.x,a.x,o.x),fa(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Wo=class extends Dn{constructor(e=new R,t=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new R){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(fa(e,s.x,r.x,a.x,o.x),fa(e,s.y,r.y,a.y,o.y),fa(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ko=class extends Dn{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xs=class extends Dn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qo=class extends Dn{constructor(e=new fe,t=new fe,n=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new fe){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(da(e,s.x,r.x,a.x),da(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qi=class extends Dn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(da(e,s.x,r.x,a.x),da(e,s.y,r.y,a.y),da(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xo=class extends Dn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(fd(o,c.x,l.x,h.x,d.x),fd(o,c.y,l.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new fe().fromArray(s))}return this}},Bl=Object.freeze({__proto__:null,ArcCurve:Vo,CatmullRomCurve3:ii,CubicBezierCurve:Ho,CubicBezierCurve3:Wo,EllipseCurve:_s,LineCurve:Ko,LineCurve3:xs,QuadraticBezierCurve:qo,QuadraticBezierCurve3:qi,SplineCurve:Xo}),Ba=class extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Bl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Bl[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},yr=class i extends zo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Mr=class i extends Ze{constructor(e=[new fe(0,-.5),new fe(.5,0),new fe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=ct(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/t,d=new R,u=new fe,f=new R,p=new R,g=new R,m=0,A=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,A=e[_+1].y-e[_].y,f.x=A*1,f.y=-m,f.z=A*0,g.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:g.normalize(),c.push(g.x,g.y,g.z);break;default:m=e[_+1].x-e[_].x,A=e[_+1].y-e[_].y,f.x=A*1,f.y=-m,f.z=A*0,p.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),c.push(f.x,f.y,f.z),g.copy(p)}for(let _=0;_<=t;_++){let y=n+_*h*s,v=Math.sin(y),M=Math.cos(y);for(let E=0;E<=e.length-1;E++){d.x=e[E].x*v,d.y=e[E].y,d.z=e[E].x*M,a.push(d.x,d.y,d.z),u.x=_/t,u.y=E/(e.length-1),o.push(u.x,u.y);let x=c[3*E+0]*v,b=c[3*E+1],w=c[3*E+0]*M;l.push(x,b,w)}}for(let _=0;_<t;_++)for(let y=0;y<e.length-1;y++){let v=y+_*e.length,M=v,E=v+e.length,x=v+e.length+1,b=v+1;r.push(M,E,b),r.push(x,b,E)}this.setIndex(r),this.setAttribute("position",new Be(a,3)),this.setAttribute("uv",new Be(o,2)),this.setAttribute("normal",new Be(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},bs=class i extends Ze{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=e/o,u=t/c,f=[],p=[],g=[],m=[];for(let A=0;A<h;A++){let _=A*u-a;for(let y=0;y<l;y++){let v=y*d-r;p.push(v,-_,0),g.push(0,0,1),m.push(y/o),m.push(1-A/c)}}for(let A=0;A<c;A++)for(let _=0;_<o;_++){let y=_+l*A,v=_+l*(A+1),M=_+1+l*(A+1),E=_+1+l*A;f.push(y,v,E),f.push(v,M,E)}this.setIndex(f),this.setAttribute("position",new Be(p,3)),this.setAttribute("normal",new Be(g,3)),this.setAttribute("uv",new Be(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Xn=class i extends Ze{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new R,u=new R,f=[],p=[],g=[],m=[];for(let A=0;A<=n;A++){let _=[],y=A/n,v=a+y*o,M=e*Math.cos(v),E=Math.sqrt(e*e-M*M),x=0;A===0&&a===0?x=.5/t:A===n&&c===Math.PI&&(x=-.5/t);for(let b=0;b<=t;b++){let w=b/t,S=s+w*r;d.x=-E*Math.cos(S),d.y=M,d.z=E*Math.sin(S),p.push(d.x,d.y,d.z),u.copy(d).normalize(),g.push(u.x,u.y,u.z),m.push(w+x,1-y),_.push(l++)}h.push(_)}for(let A=0;A<n;A++)for(let _=0;_<t;_++){let y=h[A][_+1],v=h[A][_],M=h[A+1][_],E=h[A+1][_+1];(A!==0||a>0)&&f.push(y,v,E),(A!==n-1||c<Math.PI)&&f.push(v,M,E)}this.setIndex(f),this.setAttribute("position",new Be(p,3)),this.setAttribute("normal",new Be(g,3)),this.setAttribute("uv",new Be(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Da=class i extends Ze{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],d=[],u=new R,f=new R,p=new R;for(let g=0;g<=n;g++){let m=a+g/n*o;for(let A=0;A<=s;A++){let _=A/s*r;f.x=(e+t*Math.cos(m))*Math.cos(_),f.y=(e+t*Math.cos(m))*Math.sin(_),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(A/s),d.push(g/n)}}for(let g=1;g<=n;g++)for(let m=1;m<=s;m++){let A=(s+1)*g+m-1,_=(s+1)*(g-1)+m-1,y=(s+1)*(g-1)+m,v=(s+1)*g+m;c.push(A,_,v),c.push(_,y,v)}this.setIndex(c),this.setAttribute("position",new Be(l,3)),this.setAttribute("normal",new Be(h,3)),this.setAttribute("uv",new Be(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}},si=class i extends Ze{constructor(e=new qi(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new R,c=new R,l=new fe,h=new R,d=[],u=[],f=[],p=[];g(),this.setIndex(p),this.setAttribute("position",new Be(d,3)),this.setAttribute("normal",new Be(u,3)),this.setAttribute("uv",new Be(f,2));function g(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),_(),A()}function m(y){h=e.getPointAt(y/t,h);let v=a.normals[y],M=a.binormals[y];for(let E=0;E<=s;E++){let x=E/s*Math.PI*2,b=Math.sin(x),w=-Math.cos(x);c.x=w*v.x+b*M.x,c.y=w*v.y+b*M.y,c.z=w*v.z+b*M.z,c.normalize(),u.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,d.push(o.x,o.y,o.z)}}function A(){for(let y=1;y<=t;y++)for(let v=1;v<=s;v++){let M=(s+1)*(y-1)+(v-1),E=(s+1)*y+(v-1),x=(s+1)*y+v,b=(s+1)*(y-1)+v;p.push(M,E,b),p.push(E,x,b)}}function _(){for(let y=0;y<=t;y++)for(let v=0;v<=s;v++)l.x=y/t,l.y=v/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Bl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};Rc={clone:Ls,merge:fn},xg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Lt=class extends _n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xg,this.fragmentShader=bg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=_g(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ye().setHex(s.value);break;case"v2":this.uniforms[n].value=new fe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new R().fromArray(s.value);break;case"v4":this.uniforms[n].value=new st().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ze().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ge().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Jo=class extends Lt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ht=class extends _n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cc,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ht=class extends ht{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new fe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return us('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){us('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Yo=class extends _n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},jo=class extends _n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};ri=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Zo=class extends ri{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cl,endingEnd:Cl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Il:r=e,o=2*t-n;break;case Tl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Il:a=e,c=2*n-t;break;case Tl:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),g=p*p,m=g*p,A=-u*m+2*u*g-u*p,_=(1+u)*m+(-1.5-2*u)*g+(-.5+u)*p+1,y=(-1-f)*m+(1.5+f)*g+.5*p,v=f*m-f*g;for(let M=0;M!==o;++M)r[M]=A*a[h+M]+_*a[l+M]+y*a[c+M]+v*a[d+M];return r}},$o=class extends ri{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*d+a[c+u]*h;return r}},ec=class extends ri{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},tc=class extends ri{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-t)/(s-t),g=1-p;for(let m=0;m!==o;++m)r[m]=a[l+m]*g+a[c+m]*p;return r}let u=o*2,f=e-1;for(let p=0;p!==o;++p){let g=a[l+p],m=a[c+p],A=f*u+p*2,_=d[A],y=d[A+1],v=e*u+p*2,M=h[v],E=h[v+1],x=Eg(n,t,_,M,s);r[p]=hf(x,g,y,E,m)}return r}};En=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=zi(t,this.TimeBufferType),this.values=zi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:zi(e.times,Array),values:zi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),la(e.settings)&&(n.settings={inTangents:zi(e.settings.inTangents,Array),outTangents:zi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ec(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $o(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new tc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case hs:t=this.InterpolantFactoryMethodDiscrete;break;case ds:t=this.InterpolantFactoryMethodLinear;break;case Io:t=this.InterpolantFactoryMethodSmooth;break;case wl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ke("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hs;case this.InterpolantFactoryMethodLinear:return ds;case this.InterpolantFactoryMethodSmooth:return Io;case this.InterpolantFactoryMethodBezier:return wl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;la(this.settings)&&(md(this.settings.inTangents,e),md(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;la(this.settings)&&(gd(this.settings.inTangents,e),gd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ye("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ye("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Ye("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ye("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Sm(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Ye("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Io,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let d=o*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let g=t[d+p];if(g!==t[u+p]||g!==t[f+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,la(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};En.prototype.ValueTypeName="";En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=ds;vi=class extends En{constructor(e,t,n){super(e,t,n)}};vi.prototype.ValueTypeName="bool";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=hs;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;Fa=class extends En{constructor(e,t,n,s){super(e,t,n,s)}};Fa.prototype.ValueTypeName="color";yi=class extends En{constructor(e,t,n,s){super(e,t,n,s)}};yi.prototype.ValueTypeName="number";nc=class extends ri{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)Nt.slerpFlat(r,0,a,l-o,a,l,c);return r}},Mi=class extends En{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new nc(this.times,this.values,this.getValueSize(),e)}};Mi.prototype.ValueTypeName="quaternion";Mi.prototype.InterpolantFactoryMethodSmooth=void 0;Ei=class extends En{constructor(e,t,n){super(e,t,n)}};Ei.prototype.ValueTypeName="string";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=hs;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;Xi=class extends En{constructor(e,t,n,s){super(e,t,n,s)}};Xi.prototype.ValueTypeName="vector";Pa=class{constructor(e="",t=-1,n=[],s=Jd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=oi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(wg(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(En.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=vg(c);c=Ad(c,1,h),l=Ad(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new yi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let d=h[1],u=s[d];u||(s[d]=u=[]),u.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};ei={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(_d(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!_d(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};ic=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],p=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},df=new ic,Fn=class{constructor(e){this.manager=e!==void 0?e:df,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Fn.DEFAULT_MATERIAL_NAME="__DEFAULT";gi={},Dl=class extends Error{constructor(e,t){super(e),this.response=t}},Jn=class extends Fn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ei.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(gi[e]!==void 0){gi[e].push({onLoad:t,onProgress:n,onError:s});return}gi[e]=[],gi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&ke("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=gi[e],d=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=u?parseInt(u):0,p=f!==0,g=0,m=new ReadableStream({start(A){_();function _(){d.read().then(({done:y,value:v})=>{if(y)A.close();else{g+=v.byteLength;let M=new ProgressEvent("progress",{lengthComputable:p,loaded:g,total:f});for(let E=0,x=h.length;E<x;E++){let b=h[E];b.onProgress&&b.onProgress(M)}A.enqueue(v),_()}},y=>{A.error(y)})}}});return new Response(m)}else throw new Dl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(p=>f.decode(p))}}}).then(l=>{ei.add(`file:${e}`,l);let h=gi[e];delete gi[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=gi[e];if(h===void 0)throw this.manager.itemError(e),l;delete gi[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},sr=new WeakMap,sc=class extends Fn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ei.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=sr.get(a);d===void 0&&(d=[],sr.set(a,d)),d.push({onLoad:t,onError:s})}return a}let o=dr("img");function c(){h(),t&&t(this);let d=sr.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}sr.delete(this),r.manager.itemEnd(e)}function l(d){h(),s&&s(d),ei.remove(`image:${e}`);let u=sr.get(this)||[];for(let f=0;f<u.length;f++){let p=u[f];p.onError&&p.onError(d)}sr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ei.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}},La=class extends Fn{constructor(e){super(e)}load(e,t,n,s){let r=this,a=new Nn,o=new Jn(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(c){let l;try{l=r.parse(c)}catch(h){s!==void 0?s(h):Ye(h);return}r._applyTexData(a,l),t&&t(a,l)},n,s),a}createDataTexture(e){let t=new Nn;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:gn,e.wrapT=t.wrapT!==void 0?t.wrapT:gn,e.magFilter=t.magFilter!==void 0?t.magFilter:At,e.minFilter=t.minFilter!==void 0?t.minFilter:At,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=Qt),t.mipmapCount===1&&(e.minFilter=At),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},xn=class extends Fn{constructor(e){super(e)}load(e,t,n,s){let r=new Xt,a=new sc(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Er=class extends Ct{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ml=new ge,xd=new R,bd=new R,Sr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=Ke,this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kn,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;xd.setFromMatrixPosition(e.matrixWorld),t.position.copy(xd),bd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Ml.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ml,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===hr||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Ml)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},wo=new R,Co=new Nt,$n=new R,vs=class extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wo,Co,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wo,Co,$n.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(wo,Co,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wo,Co,$n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Qi=new R,vd=new fe,yd=new fe,Jt=class extends vs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=fs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fs*2*Math.atan(Math.tan(ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,t){return this.getViewBounds(e,vd,yd),t.subVectors(yd,vd)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ua*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Fl=class extends Sr{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=fs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ys=class extends Er{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Fl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Pl=class extends Sr{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0}},Yn=class extends Er{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Pl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ms=class extends vs{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ll=class extends Sr{constructor(){super(new Ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Es=class extends Er{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new Ll}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Si=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},El=new WeakMap,Na=class extends Fn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ke("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ke("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ei.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{El.has(a)===!0?(s&&s(El.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ei.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),El.set(c,l),ei.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ei.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},rr=-90,ar=1,Ji=class extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Jt(rr,ar,e,t);s.layers=this.layers,this.add(s);let r=new Jt(rr,ar,e,t);r.layers=this.layers,this.add(r);let a=new Jt(rr,ar,e,t);a.layers=this.layers,this.add(a);let o=new Jt(rr,ar,e,t);o.layers=this.layers,this.add(o);let c=new Jt(rr,ar,e,t);c.layers=this.layers,this.add(c);let l=new Jt(rr,ar,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=g,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},rc=class extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},fu="\\[\\]\\.:\\/",Cg=new RegExp("["+fu+"]","g"),pu="[^"+fu+"]",Ig="[^"+fu.replace("\\.","")+"]",Tg=/((?:WC+[\/:])*)/.source.replace("WC",pu),Rg=/(WCOD+)?/.source.replace("WCOD",Ig),Bg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pu),Dg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pu),Fg=new RegExp("^"+Tg+Rg+Bg+Dg+"$"),Pg=["material","materials","bones","map"],Nl=class{constructor(e,t,n){let s=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},St=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Cg,"")}static parseTrackName(e){let t=Fg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Pg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;Ye("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};St.Composite=Nl;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Py=new Float32Array(1),Md=new ge,Yi=class{constructor(e,t,n=0,s=1/0){this.ray=new Wi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ar,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ye("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Md.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Md),this}intersectObject(e,t=!0,n=[]){return Ul(e,this,n,t),n.sort(Ed),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ul(e[s],this,n,t);return n.sort(Ed),n}};Ol=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187")});function Pf(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Ug(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],g=d[f];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++u,d[u]=g)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let g=d[f];i.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}function _x(i,e,t,n,s,r){let a=new ye(0),o=s===!0?0:1,c,l,h=null,d=0,u=null;function f(_){let y=_.isScene===!0?_.background:null;if(y&&y.isTexture){let v=_.backgroundBlurriness>0;y=e.get(y,v)}return y}function p(_){let y=!1,v=f(_);v===null?m(a,o):v&&v.isColor&&(m(v,1),y=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(_,y){let v=f(y);v&&v.isCubeTexture?(l===void 0&&(l=new De(new rn(1,1,1),new Lt({name:"BackgroundCubeMaterial",uniforms:Ls(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(gx.makeRotationFromEuler(y.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Lf),l.material.toneMapped=ot.getTransfer(v.colorSpace)!==wt,(h!==v||d!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new De(new bs(2,2),new Lt({name:"BackgroundMaterial",uniforms:Ls(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ot.getTransfer(v.colorSpace)!==wt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function m(_,y){_.getRGB(Bc,du(i)),t.buffers.color.setClear(Bc.r,Bc.g,Bc.b,y,r)}function A(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),o=y,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(a,o)},render:p,addToRenderList:g,dispose:A}}function xx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(T,C,F,I,P){let L=!1,z=d(T,I,F,C);r!==z&&(r=z,l(r.object)),L=f(T,I,F,P),L&&p(T,I,F,P),P!==null&&e.update(P,i.ELEMENT_ARRAY_BUFFER),(L||a)&&(a=!1,v(T,C,F,I),P!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function c(){return i.createVertexArray()}function l(T){return i.bindVertexArray(T)}function h(T){return i.deleteVertexArray(T)}function d(T,C,F,I){let P=I.wireframe===!0,L=n[C.id];L===void 0&&(L={},n[C.id]=L);let z=T.isInstancedMesh===!0?T.id:0,O=L[z];O===void 0&&(O={},L[z]=O);let G=O[F.id];G===void 0&&(G={},O[F.id]=G);let V=G[P];return V===void 0&&(V=u(c()),G[P]=V),V}function u(T){let C=[],F=[],I=[];for(let P=0;P<t;P++)C[P]=0,F[P]=0,I[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:F,attributeDivisors:I,object:T,attributes:{},index:null}}function f(T,C,F,I){let P=r.attributes,L=C.attributes,z=0,O=F.getAttributes();for(let G in O)if(O[G].location>=0){let H=P[G],q=L[G];if(q===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(q=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(q=T.instanceColor)),H===void 0||H.attribute!==q||q&&H.data!==q.data)return!0;z++}return r.attributesNum!==z||r.index!==I}function p(T,C,F,I){let P={},L=C.attributes,z=0,O=F.getAttributes();for(let G in O)if(O[G].location>=0){let H=L[G];H===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(H=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(H=T.instanceColor));let q={};q.attribute=H,H&&H.data&&(q.data=H.data),P[G]=q,z++}r.attributes=P,r.attributesNum=z,r.index=I}function g(){let T=r.newAttributes;for(let C=0,F=T.length;C<F;C++)T[C]=0}function m(T){A(T,0)}function A(T,C){let F=r.newAttributes,I=r.enabledAttributes,P=r.attributeDivisors;F[T]=1,I[T]===0&&(i.enableVertexAttribArray(T),I[T]=1),P[T]!==C&&(i.vertexAttribDivisor(T,C),P[T]=C)}function _(){let T=r.newAttributes,C=r.enabledAttributes;for(let F=0,I=C.length;F<I;F++)C[F]!==T[F]&&(i.disableVertexAttribArray(F),C[F]=0)}function y(T,C,F,I,P,L,z){z===!0?i.vertexAttribIPointer(T,C,F,P,L):i.vertexAttribPointer(T,C,F,I,P,L)}function v(T,C,F,I){g();let P=I.attributes,L=F.getAttributes(),z=C.defaultAttributeValues;for(let O in L){let G=L[O];if(G.location>=0){let V=P[O];if(V===void 0&&(O==="instanceMatrix"&&T.instanceMatrix&&(V=T.instanceMatrix),O==="instanceColor"&&T.instanceColor&&(V=T.instanceColor)),V!==void 0){let H=V.normalized,q=V.itemSize,Z=e.get(V);if(Z===void 0)continue;let W=Z.buffer,j=Z.type,re=Z.bytesPerElement,le=j===i.INT||j===i.UNSIGNED_INT||V.gpuType===oc;if(V.isInterleavedBufferAttribute){let ae=V.data,me=ae.isInterleavedBuffer===!0?ae.stride:ae.itemSize,Fe=V.offset;if(ae.isInstancedInterleavedBuffer||ae.isInstancedBufferAttribute){for(let xe=0;xe<G.locationSize;xe++)A(G.location+xe,ae.meshPerAttribute);T.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let xe=0;xe<G.locationSize;xe++)m(G.location+xe);i.bindBuffer(i.ARRAY_BUFFER,W);for(let xe=0;xe<G.locationSize;xe++)y(G.location+xe,q/G.locationSize,j,H,me*re,(Fe+q/G.locationSize*xe)*re,le)}else{if(V.isInstancedBufferAttribute){for(let ae=0;ae<G.locationSize;ae++)A(G.location+ae,V.meshPerAttribute);T.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ae=0;ae<G.locationSize;ae++)m(G.location+ae);i.bindBuffer(i.ARRAY_BUFFER,W);for(let ae=0;ae<G.locationSize;ae++)y(G.location+ae,q/G.locationSize,j,H,q*re,q/G.locationSize*ae*re,le)}}else if(z!==void 0){let H=z[O];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(G.location,H);break;case 3:i.vertexAttrib3fv(G.location,H);break;case 4:i.vertexAttrib4fv(G.location,H);break;default:i.vertexAttrib1fv(G.location,H)}}}}_()}function M(){w();for(let T in n){let C=n[T];for(let F in C){let I=C[F];for(let P in I){let L=I[P];for(let z in L)h(L[z].object),delete L[z];delete I[P]}}delete n[T]}}function E(T){if(n[T.id]===void 0)return;let C=n[T.id];for(let F in C){let I=C[F];for(let P in I){let L=I[P];for(let z in L)h(L[z].object),delete L[z];delete I[P]}}delete n[T.id]}function x(T){for(let C in n){let F=n[C];for(let I in F){let P=F[I];if(P[T.id]===void 0)continue;let L=P[T.id];for(let z in L)h(L[z].object),delete L[z];delete P[T.id]}}}function b(T){for(let C in n){let F=n[C],I=T.isInstancedMesh===!0?T.id:0,P=F[I];if(P!==void 0){for(let L in P){let z=P[L];for(let O in z)h(z[O].object),delete z[O];delete P[L]}delete F[I],Object.keys(F).length===0&&delete n[C]}}}function w(){S(),a=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:S,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:g,enableAttribute:m,disableUnusedAttributes:_}}function bx(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function vx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==Vt&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let b=x===yt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Ke&&x!==zt&&!b&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(ke("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&ke("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),A=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:m,maxAttributes:A,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:v,maxSamples:M,samples:E}}function yx(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Tn,o=new ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,A=i.get(d);if(!s||p===null||p.length===0||r&&!m)r?h(null):l();else{let _=r?0:n,y=_*4,v=A.clippingState||null;c.value=v,v=h(p,u,y,f);for(let M=0;M!==y;++M)v[M]=t[M];A.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,p){let g=d!==null?d.length:0,m=null;if(g!==0){if(m=c.value,p!==!0||m===null){let A=f+g*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<A)&&(m=new Float32Array(A));for(let y=0,v=f;y!==g;++y,v+=4)a.copy(d[y]).applyMatrix4(_,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function pf(i,e,t){return new Ns(i,{minFilter:Qt,generateMipmaps:e,type:yt,colorSpace:jt,depthBuffer:t})}function Va(i,e,t){return new Lt({name:i,uniforms:e,vertexShader:nt.cube_vert,fragmentShader:t,side:Wt,blending:wi,depthTest:!1,depthWrite:!1})}function Ix(){return Va("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Nf}u

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
	`)}function Tx(){return Va("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Uf}},`

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
	`)}function Rx(){return Va("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ex}
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
	`)}function Af(){return Va("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function mf(){return Va("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Bx(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Tr||f===ac)if(e.has(u)){let p=e.get(u).texture;return o(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let g=new Ns(p.height);return g.fromEquirectangularTexture(i,u),e.set(u,g),u.addEventListener("dispose",l),o(g.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,p=f===Tr||f===ac,g=f===ji||f===Ir;if(p||g){let m=t.get(u),A=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==A)return n===null&&(n=new Wr(i)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let _=u.image;return p&&_&&_.height>0||g&&_&&c(_)?(n===null&&(n=new Wr(i)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===Tr?u.mapping=ji:f===ac&&(u.mapping=Ir),u}function c(u){let f=0,p=6;for(let g=0;g<p;g++)u[g]!==void 0&&f++;return f===p}function l(u){let f=u.target;f.removeEventListener("dispose",l);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Dx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&us("WebGLRenderer: "+n+" extension not supported."),s}}}function Fx(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(p=>delete s[p]);function o(p){c(p.target)}function c(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",o),delete s[p.id],a.unregister(p);let g=r.get(p);g&&(e.remove(g),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function l(p,g){return s[g.id]!==void 0||(g.addEventListener("dispose",o),s[g.id]=new WeakRef(g),a.register(g,g.id,g),t.memory.geometries++),g}function h(p){let g=p.attributes;for(let m in g)e.update(g[m],i.ARRAY_BUFFER)}function d(p){let g=p.index,m=p.attributes.position,A=0;if(m===void 0)return;let _=g!==null?g.array.length:m.array.length/3-1,y=m.count>=65535?_a:ga,v=new y(Math.ceil(_/3)*6,1),M=v.array;if(g!==null){let x=g.array;A=g.version;for(let b=0,w=0;b<_;b+=3){let S=x[b+0],T=x[b+1],C=x[b+2];M[w++]=S,M[w++]=T,M[w++]=T,M[w++]=C,M[w++]=C,M[w++]=S}}else{A=m.version;for(let x=0,b=0;x<_;x+=3){let w=x+0,S=x+1,T=x+2;M[b++]=w,M[b++]=S,M[b++]=S,M[b++]=T,M[b++]=T,M[b++]=w}}v.version=A;let E=r.get(p);E&&e.remove(E),r.set(p,v)}function u(p){let g=r.get(p);if(g){let m=p.index;m!==null&&g.version<m.version&&d(p)}else d(p);return r.get(p)}function f(){for(let p in s){let g=s[p].deref();g!==void 0&&c(g)}}return{get:l,update:h,getWireframeAttribute:u,dispose:f}}function Px(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*a),t.update(u,n,1)}function l(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let g=0;for(let m=0;m<f;m++)g+=u[m];t.update(g,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Lx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ye("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Nx(i,e,t){let n=new WeakMap,s=new st;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let w=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],y=0;f===!0&&(y=1),p===!0&&(y=2),g===!0&&(y=3);let v=o.attributes.position.count*y,M=1;v>e.maxTextureSize&&(M=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let E=new Float32Array(v*M*4*d),x=new Aa(E,v,M,d);x.type=zt,x.needsUpdate=!0;let b=y*4;for(let S=0;S<d;S++){let T=m[S],C=A[S],F=_[S],I=v*M*4*S;for(let P=0;P<T.count;P++){let L=P*b;f===!0&&(s.fromBufferAttribute(T,P),E[I+L+0]=s.x,E[I+L+1]=s.y,E[I+L+2]=s.z,E[I+L+3]=0),p===!0&&(s.fromBufferAttribute(C,P),E[I+L+4]=s.x,E[I+L+5]=s.y,E[I+L+6]=s.z,E[I+L+7]=0),g===!0&&(s.fromBufferAttribute(F,P),E[I+L+8]=s.x,E[I+L+9]=s.y,E[I+L+10]=s.z,E[I+L+11]=F.itemSize===4?s.w:1)}}u={count:d,texture:x,size:new fe(v,M)},n.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let g=0;g<l.length;g++)f+=l[g];let p=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",p),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Ux(i,e,t,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,d=l.geometry,u=e.get(l,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}function kx(i,e,t,n,s,r){let a=new Ot(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new Ze;h.setAttribute("position",new Be([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Be([0,2,0,0,2,0],2));let d=new Jo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new De(h,d),f=new Ms(-1,1,1,-1,0,1),p=null,g=null,m=!1,A,_=null,y=[],v=!1;this.setSize=function(M,E){a.setSize(M,E),o!==null&&o.setSize(M,E),c!==null&&c.setSize(M,E);for(let x=0;x<y.length;x++){let b=y[x];b.setSize&&b.setSize(M,E)}},this.setEffects=function(M){y=M,v=y.length>0&&y[0].isRenderPass===!0;let E=a.width,x=a.height;y.length>0&&o===null&&(o=new Ot(E,x,{type:yt,depthBuffer:!1,stencilBuffer:!1}),c=new Ot(E,x,{type:yt,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&y.some(w=>w.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&l===null&&(l=new Bn(E,x),r===!0&&(l.format=Ii,l.type=Is)),a.dispose(),a.depthTexture=b?l:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let w=0;w<y.length;w++){let S=y[w];S.setSize&&S.setSize(E,x),b&&S.needsDepthTexture===!0&&S.setDepthTexture&&S.setDepthTexture(l)}},this.begin=function(M,E){if(m||M.toneMapping===ai&&y.length===0)return!1;if(_=E,E!==null){let x=E.width,b=E.height;(a.width!==x||a.height!==b)&&this.setSize(x,b)}return v===!1&&M.setRenderTarget(a),A=M.toneMapping,M.toneMapping=ai,!0},this.hasRenderPass=function(){return v},this.end=function(M,E){M.toneMapping=A,m=!0;let x=a,b=o;for(let w=0;w<y.length;w++){let S=y[w];S.enabled!==!1&&(S.render(M,b,x,E),S.needsSwap!==!1&&(x=b,b=b===o?c:o))}if(p!==M.outputColorSpace||g!==M.toneMapping){p=M.outputColorSpace,g=M.toneMapping,d.defines={},ot.getTransfer(p)===wt&&(d.defines.SRGB_TRANSFER="");let w=Ox[g];w&&(d.defines[w]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,M.setRenderTarget(_),M.render(u,f),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),d.dispose()}}function Kr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=gf[s];if(r===void 0&&(r=new Float32Array(s),gf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function $t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Pc(i,e){let t=_f[e];t===void 0&&(t=new Int32Array(e),_f[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Gx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Qx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2fv(this.addr,e),$t(t,e)}}function zx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;i.uniform3fv(this.addr,e),$t(t,e)}}function Vx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4fv(this.addr,e),$t(t,e)}}function Hx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Zt(t,n))return;vf.set(n),i.uniformMatrix2fv(this.addr,!1,vf),$t(t,n)}}function Wx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Zt(t,n))return;bf.set(n),i.uniformMatrix3fv(this.addr,!1,bf),$t(t,n)}}function Kx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Zt(t,n))return;xf.set(n),i.uniformMatrix4fv(this.addr,!1,xf),$t(t,n)}}function qx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Xx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2iv(this.addr,e),$t(t,e)}}function Jx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3iv(this.addr,e),$t(t,e)}}function Yx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4iv(this.addr,e),$t(t,e)}}function jx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Zx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2uiv(this.addr,e),$t(t,e)}}function $x(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3uiv(this.addr,e),$t(t,e)}}function eb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4uiv(this.addr,e),$t(t,e)}}function Lc(i){return i.version===0&&(i.compareFunction=su,i.needsUpdate=!0),i}function tb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Lc(kf):r=Of,t.setTexture2D(e||r,s)}function nb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||zf,s)}function ib(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Lc(Gf):r=Vf,t.setTextureCube(e||r,s)}function sb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Qf,s)}function rb(i){switch(i){case 5126:return Gx;case 35664:return Qx;case 35665:return zx;case 35666:return Vx;case 35674:return Hx;case 35675:return Wx;case 35676:return Kx;case 5124:case 35670:return qx;case 35667:case 35671:return Xx;case 35668:case 35672:return Jx;case 35669:case 35673:return Yx;case 5125:return jx;case 36294:return Zx;case 36295:return $x;case 36296:return eb;case 35678:case 36198:case 36298:case 36306:case 35682:return tb;case 35679:case 36299:case 36307:return nb;case 35680:case 36300:case 36308:case 36293:return ib;case 36289:case 36303:case 36311:case 36292:return sb}}function ab(i,e){i.uniform1fv(this.addr,e)}function ob(i,e){let t=Kr(e,this.size,2);i.uniform2fv(this.addr,t)}function cb(i,e){let t=Kr(e,this.size,3);i.uniform3fv(this.addr,t)}function lb(i,e){let t=Kr(e,this.size,4);i.uniform4fv(this.addr,t)}function ub(i,e){let t=Kr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function hb(i,e){let t=Kr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function db(i,e){let t=Kr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function fb(i,e){i.uniform1iv(this.addr,e)}function pb(i,e){i.uniform2iv(this.addr,e)}function Ab(i,e){i.uniform3iv(this.addr,e)}function mb(i,e){i.uniform4iv(this.addr,e)}function gb(i,e){i.uniform1uiv(this.addr,e)}function _b(i,e){i.uniform2uiv(this.addr,e)}function xb(i,e){i.uniform3uiv(this.addr,e)}function bb(i,e){i.uniform4uiv(this.addr,e)}function vb(i,e,t){let n=this.cache,s=e.length,r=Pc(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Lc(kf):a=Of;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function yb(i,e,t){let n=this.cache,s=e.length,r=Pc(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||zf,r[a])}function Mb(i,e,t){let n=this.cache,s=e.length,r=Pc(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Lc(Gf):a=Vf;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function Eb(i,e,t){let n=this.cache,s=e.length,r=Pc(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Qf,r[a])}function Sb(i){switch(i){case 5126:return ab;case 35664:return ob;case 35665:return cb;case 35666:return lb;case 35674:return ub;case 35675:return hb;case 35676:return db;case 5124:case 35670:return fb;case 35667:case 35671:return pb;case 35668:case 35672:return Ab;case 35669:case 35673:return mb;case 5125:return gb;case 36294:return _b;case 36295:return xb;case 36296:return bb;case 35678:case 36198:case 36298:case 36306:case 35682:return vb;case 35679:case 36299:case 36307:return yb;case 35680:case 36300:case 36308:case 36293:return Mb;case 36289:case 36303:case 36311:case 36292:return Eb}}function yf(i,e){i.seq.push(e),i.map[e.id]=e}function wb(i,e,t){let n=i.name,s=n.length;for(gu.lastIndex=0;;){let r=gu.exec(n),a=gu.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){yf(t,l===void 0?new xu(o,i,e):new bu(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new vu(o),yf(t,d)),t=d}}}function Mf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function Tb(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Rb(i){ot._getMatrix(Ef,ot.workingColorSpace,i);let e=`mat3( ${Ef.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(i)){case ur:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Sf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Tb(i.getShaderSource(e),o)}else return r}function Bb(i,e){let t=Rb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function Fb(i,e){let t=Db[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Pb(){ot.getLuminanceCoefficients(Dc);let i=Dc.x.toFixed(4),e=Dc.y.toFixed(4),t=Dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(za).join(`
`)}function Nb(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ub(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function za(i){return i!==""}function wf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Cf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function yu(i){return i.replace(Ob,kb)}function kb(i,e){let t=nt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return yu(t)}function If(i){return i.replace(Gb,Qb)}function Qb(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Tf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Vb(i){return zb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function Wb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Hb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}function qb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Kb[i.combine]||"ENVMAP_BLENDING_NONE"}function Xb(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Vb(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Wb(t),d=qb(t),u=Lb(t),f=Nb(r),p=s.createProgram(),g,m,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(za).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(za).join(`
`),m.length>0&&(m+=`
`)):(g=[Tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(za).join(`
`),m=[Tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?nt.tonemapping_pars_fragment:"",t.toneMapping!==ai?Fb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,Bb("linearToOutputTexel",t.outputColorSpace),Pb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(za).join(`
`)),a=yu(a),a=wf(a,t),a=Cf(a,t),o=yu(o),o=wf(o,t),o=Cf(o,t),a=If(a),o=If(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===au?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=A+g+a,y=A+m+o,v=Mf(s,s.VERTEX_SHADER,_),M=Mf(s,s.FRAGMENT_SHADER,y);s.attachShader(p,v),s.attachShader(p,M),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function E(S){if(i.debug.checkShaderErrors){let T=s.getProgramInfoLog(p)||"",C=s.getShaderInfoLog(v)||"",F=s.getShaderInfoLog(M)||"",I=T.trim(),P=C.trim(),L=F.trim(),z=!0,O=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,v,M);else{let G=Sf(s,v,"vertex"),V=Sf(s,M,"fragment");Ye("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+I+`
`+G+`
`+V)}else I!==""?ke("WebGLProgram: Program Info Log:",I):(P===""||L==="")&&(O=!1);O&&(S.diagnostics={runnable:z,programLog:I,vertexShader:{log:P,prefix:g},fragmentShader:{log:L,prefix:m}})}s.deleteShader(v),s.deleteShader(M),x=new Hr(s,p),b=Ub(s,p)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(p,Cb)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ib++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=M,this}function Yb(i){return i===wn||i===Fs||i===Ps}function jb(i,e,t,n,s,r){let a=new Ar,o=new Mu,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,b,w,S,T,C){let F=S.fog,I=T.geometry,P=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?S.environment:null,L=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,z=e.get(x.envMap||P,L),O=u[x.type],G=n.precision;x.precision!==null&&(G=n.getMaxPrecision(x.precision),G!==x.precision&&ke("WebGLProgram.getParameters:",x.precision,"not supported, using",G,"instead."));let V=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,H=V!==void 0?V.length:0,q=0;I.morphAttributes.position!==void 0&&(q=1),I.morphAttributes.normal!==void 0&&(q=2),I.morphAttributes.color!==void 0&&(q=3);let Z,W,j,re;if(O){let we=li[O];Z=we.vertexShader,W=we.fragmentShader}else{Z=x.vertexShader,W=x.fragmentShader;let we=o.getVertexShaderStage(x),Bt=o.getFragmentShaderStage(x);o.update(x,we,Bt),j=we.id,re=Bt.id}let le=i.getRenderTarget(),ae=i.state.buffers.depth.getReversed(),me=T.isInstancedMesh===!0,Fe=T.isBatchedMesh===!0,xe=!!x.map,Ie=!!x.matcap,qe=!!z,He=qe&&z.isPMREMTexture===!0,mt=!!x.aoMap,dt=!!x.lightMap,It=!!x.bumpMap&&x.wireframe===!1,rt=!!x.normalMap,Gt=!!x.displacementMap,xt=!!x.emissiveMap,Se=!!x.metalnessMap,Qe=!!x.roughnessMap,Ue=x.anisotropy>0,Q=x.clearcoat>0,Ee=x.diffuseRoughness>0,Ve=x.dispersion>0,Xe=x.retroreflectivity>0,ce=x.iridescence>0,bt=x.sheen>0,Me=x.transmission>0,Ge=Ue&&!!x.anisotropyMap,N=Q&&!!x.clearcoatMap,B=Q&&!!x.clearcoatNormalMap,Y=Q&&!!x.clearcoatRoughnessMap,oe=Ee&&!!x.diffuseRoughnessMap,ie=ce&&!!x.iridescenceMap,he=ce&&!!x.iridescenceThicknessMap,_e=bt&&!!x.sheenColorMap,se=bt&&!!x.sheenRoughnessMap,k=!!x.specularMap,X=!!x.specularColorMap,U=!!x.specularIntensityMap,J=Me&&!!x.transmissionMap,te=Me&&!!x.thicknessMap,pe=!!x.gradientMap,de=!!x.alphaMap,ue=x.alphaTest>0,Re=!!x.alphaHash,$e=!!x.extensions,Ae=ai;x.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Ae=i.toneMapping);let We=He?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,at={shaderID:O,shaderType:x.type,shaderName:x.name,vertexShader:Z,fragmentShader:W,defines:x.defines,customVertexShaderID:j,customFragmentShaderID:re,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:G,batching:Fe,batchingColor:Fe&&T._colorsTexture!==null,instancing:me,instancingColor:me&&T.instanceColor!==null,instancingMorph:me&&T.morphTexture!==null,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:xe,matcap:Ie,envMap:qe,envMapMode:qe&&z.mapping,envMapPMREM:He,envMapMaxLod:He?We.length-1:null,envMapSize:He?We[0].width:null,aoMap:mt,lightMap:dt,bumpMap:It,normalMap:rt,displacementMap:Gt,emissiveMap:xt,normalMapObjectSpace:rt&&x.normalMapType===jd,normalMapTangentSpace:rt&&x.normalMapType===Cc,packedNormalMap:rt&&x.normalMapType===Cc&&Yb(x.normalMap.format),metalnessMap:Se,roughnessMap:Qe,anisotropy:Ue,anisotropyMap:Ge,clearcoat:Q,clearcoatMap:N,clearcoatNormalMap:B,clearcoatRoughnessMap:Y,diffuseRoughness:Ee,diffuseRoughnessMap:oe,dispersion:Ve,retroreflection:Xe,iridescence:ce,iridescenceMap:ie,iridescenceThicknessMap:he,sheen:bt,sheenColorMap:_e,sheenRoughnessMap:se,specularMap:k,specularColorMap:X,specularIntensityMap:U,transmission:Me,transmissionMap:J,thicknessMap:te,gradientMap:pe,opaque:x.transparent===!1&&x.blending===Cr&&x.alphaToCoverage===!1,alphaMap:de,alphaTest:ue,alphaHash:Re,combine:x.combine,mapUv:xe&&f(x.map.channel),aoMapUv:mt&&f(x.aoMap.channel),lightMapUv:dt&&f(x.lightMap.channel),bumpMapUv:It&&f(x.bumpMap.channel),normalMapUv:rt&&f(x.normalMap.channel),displacementMapUv:Gt&&f(x.displacementMap.channel),emissiveMapUv:xt&&f(x.emissiveMap.channel),metalnessMapUv:Se&&f(x.metalnessMap.channel),roughnessMapUv:Qe&&f(x.roughnessMap.channel),anisotropyMapUv:Ge&&f(x.anisotropyMap.channel),clearcoatMapUv:N&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:B&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:oe&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:ie&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:he&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:se&&f(x.sheenRoughnessMap.channel),specularMapUv:k&&f(x.specularMap.channel),specularColorMapUv:X&&f(x.specularColorMap.channel),specularIntensityMapUv:U&&f(x.specularIntensityMap.channel),transmissionMapUv:J&&f(x.transmissionMap.channel),thicknessMapUv:te&&f(x.thicknessMap.channel),alphaMapUv:de&&f(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(rt||Ue),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:T.isPoints===!0&&!!I.attributes.uv&&(xe||de),fog:!!F,useFog:x.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&rt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ae,skinning:T.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:q,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:C.filter(we=>we.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ae,decodeVideoTexture:xe&&x.map.isVideoTexture===!0&&ot.getTransfer(x.map.colorSpace)===wt,decodeVideoTextureEmissive:xt&&x.emissiveMap.isVideoTexture===!0&&ot.getTransfer(x.emissiveMap.colorSpace)===wt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Rt,flipSided:x.side===Wt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:$e&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&x.extensions.multiDraw===!0||Fe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return at.vertexUv1s=c.has(1),at.vertexUv2s=c.has(2),at.vertexUv3s=c.has(3),c.clear(),at}function g(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let w in x.defines)b.push(w),b.push(x.defines[w]);return x.isRawShaderMaterial===!1&&(m(b,x),A(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function A(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function _(x){let b=u[x.type],w;if(b){let S=li[b];w=Rc.clone(S.uniforms)}else w=x.uniforms;return w}function y(x,b){let w=h.get(b);return w!==void 0?++w.usedTimes:(w=new Xb(i,b,x,s),l.push(w),h.set(b,w)),w}function v(x){if(--x.usedTimes===0){let b=l.indexOf(x);l[b]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function M(x){o.remove(x)}function E(){o.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:_,acquireProgram:y,releaseProgram:v,releaseShaderCache:M,programs:l,dispose:E}}function Zb(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function $b(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Rf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Bf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,p,g,m,A){let _=i[e];return _===void 0?(_={id:u.id,object:u,geometry:f,material:p,materialVariant:a(u),groupOrder:g,renderOrder:u.renderOrder,z:m,group:A},i[e]=_):(_.id=u.id,_.object=u,_.geometry=f,_.material=p,_.materialVariant=a(u),_.groupOrder=g,_.renderOrder=u.renderOrder,_.z=m,_.group=A),e++,_}function c(u,f,p,g,m,A,_){_.reversedDepth===!0&&(m=-m);let y=o(u,f,p,g,m,A);p.transmission>0?n.push(y):p.transparent===!0?s.push(y):t.push(y)}function l(u,f,p,g,m,A){let _=o(u,f,p,g,m,A);p.transmission>0?n.unshift(_):p.transparent===!0?s.unshift(_):t.unshift(_)}function h(u,f){t.length>1&&t.sort(u||$b),n.length>1&&n.sort(f||Rf),s.length>1&&s.sort(f||Rf)}function d(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function ev(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Bf,i.set(n,[a])):s>=r.length?(a=new Bf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function tv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new R,color:new ye};break;case"SpotLight":t={position:new R,direction:new R,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function nv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function sv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function rv(i){let e=new tv,t=nv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);let s=new R,r=new ge,a=new ge;function o(l){let h=0,d=0,u=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let f=0,p=0,g=0,m=0,A=0,_=0,y=0,v=0,M=0,E=0,x=0,b=0,w=0,S=0;l.sort(sv);for(let C=0,F=l.length;C<F;C++){let I=l[C],P=I.color,L=I.intensity,z=I.distance,O=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===wn?O=I.shadow.map.texture:O=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=P.r*L,d+=P.g*L,u+=P.b*L;else if(I.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(I.sh.coefficients[G],L);S++}else if(I.isSunLight){let G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let V=I.shadow,H=t.get(I);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),n.sunShadow[p]=H,n.sunShadowMap[p]=O;let q=V.getViewportCount();for(let Z=0;Z<q;Z++)n.sunShadowMatrix[g+Z]=V.getMatrix(Z),n.sunShadowCascade[g+Z]=V._cascadeData[Z];g+=q,p++}n.sun[f]=G,f++}else if(I.isDirectionalLight){let G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let V=I.shadow,H=t.get(I);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=O,n.directionalShadowMatrix[m]=I.shadow.matrix,M++}n.directional[m]=G,m++}else if(I.isSpotLight){let G=e.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(P).multiplyScalar(L),G.distance=z,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,n.spot[_]=G;let V=I.shadow;if(I.map&&(n.spotLightMap[b]=I.map,b++,V.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[_]=V.matrix,I.castShadow){let H=t.get(I);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=O,x++}_++}else if(I.isRectAreaLight){let G=e.get(I);G.color.copy(P).multiplyScalar(L),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),n.rectArea[y]=G,y++}else if(I.isPointLight){let G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),G.distance=I.distance,G.decay=I.decay,I.castShadow){let V=I.shadow,H=t.get(I);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,H.shadowCameraNear=V.camera.near,H.shadowCameraFar=V.camera.far,n.pointShadow[A]=H,n.pointShadowMap[A]=O,n.pointShadowMatrix[A]=I.shadow.matrix,E++}n.point[A]=G,A++}else if(I.isHemisphereLight){let G=e.get(I);G.skyColor.copy(I.color).multiplyScalar(L),G.groundColor.copy(I.groundColor).multiplyScalar(L),n.hemi[v]=G,v++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let T=n.hash;(T.sunLength!==f||T.directionalLength!==m||T.pointLength!==A||T.spotLength!==_||T.rectAreaLength!==y||T.hemiLength!==v||T.numSunShadows!==p||T.numDirectionalShadows!==M||T.numPointShadows!==E||T.numSpotShadows!==x||T.numSpotMaps!==b||T.numLightProbes!==S)&&(n.sun.length=f,n.directional.length=m,n.spot.length=_,n.rectArea.length=y,n.point.length=A,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=g,n.sunShadowCascade.length=g,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+b-w,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=S,T.sunLength=f,T.directionalLength=m,T.pointLength=A,T.spotLength=_,T.rectAreaLength=y,T.hemiLength=v,T.numSunShadows=p,T.numDirectionalShadows=M,T.numPointShadows=E,T.numSpotShadows=x,T.numSpotMaps=b,T.numLightProbes=S,n.version=iv++)}function c(l,h){let d=0,u=0,f=0,p=0,g=0,m=0,A=h.matrixWorldInverse;for(let _=0,y=l.length;_<y;_++){let v=l[_];if(v.isSunLight){let M=n.sun[d];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(A),d++}else if(v.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(A),u++}else if(v.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(A),M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(A),p++}else if(v.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(A),a.identity(),r.copy(v.matrixWorld),r.premultiply(A),a.extractRotation(r),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(A),f++}else if(v.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(A),m++}}}return{setup:o,setupView:c,state:n}}function Df(i){let e=new rv(i),t=[],n=[],s=[];function r(d){h.camera=d,t.length=0,n.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):t.push(d)}function o(d){n.push(d)}function c(){e.setup(t),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function l(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function av(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Df(i),e.set(s,[o])):r>=a.length?(o=new Df(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function hv(i,e,t){let n=new kn,s=new fe,r=new fe,a=new st,o=new Yo,c=new jo,l={},h=t.maxTextureSize,d={[Sn]:Wt,[Wt]:Sn,[Rt]:Rt},u=new Lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:ov,fragmentShader:cv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ze;p.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new De(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ss;let A=this.type;this.render=function(E,x,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Cd&&(ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ss);let w=i.getRenderTarget(),S=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),C=i.state;C.setBlending(wi),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let F=A!==this.type;F&&x.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(P=>P.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,P=E.length;I<P;I++){let L=E[I],z=L.shadow;if(z===void 0){ke("WebGLShadowMap:",L,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let O=z.getFrameExtents();s.multiply(O),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/O.x),s.x=r.x*O.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/O.y),s.y=r.y*O.y,z.mapSize.y=r.y));let G=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=G,z.map===null||F===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===wr){if(L.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Ot(s.x,s.y,{format:wn,type:yt,minFilter:At,magFilter:At,generateMipmaps:!1}),z.map.texture.name=L.name+".shadowMap",z.map.depthTexture=new Bn(s.x,s.y,zt),z.map.depthTexture.name=L.name+".shadowMapDepth",z.map.depthTexture.format=bi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Tt,z.map.depthTexture.magFilter=Tt}else L.isPointLight?(z.map=new Ns(s.x),z.map.depthTexture=new Ca(s.x,bn)):(z.map=new Ot(s.x,s.y),z.map.depthTexture=new Bn(s.x,s.y,bn)),z.map.depthTexture.name=L.name+".shadowMap",z.map.depthTexture.format=bi,this.type===Ss?(z.map.depthTexture.compareFunction=G?iu:nu,z.map.depthTexture.minFilter=At,z.map.depthTexture.magFilter=At):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Tt,z.map.depthTexture.magFilter=Tt);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let V=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();L.isPointLight!==!0&&z.updateMatrices(L,b);let H=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:b.layers;for(let q=0;q<V;q++){let Z=z.getCamera(q);if(L.isPointLight){let W=z.camera,j=z.matrix,re=L.distance||W.far;re!==W.far&&(W.far=re,W.updateProjectionMatrix()),Qa.setFromMatrixPosition(L.matrixWorld),W.position.copy(Qa),_u.copy(W.position),_u.add(lv[q]),W.up.copy(uv[q]),W.lookAt(_u),W.updateMatrixWorld(),j.makeTranslation(-Qa.x,-Qa.y,-Qa.z),Ff.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Ff,W.coordinateSystem,W.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,q),i.clear();else{q===0&&(i.setRenderTarget(z.map),i.clear());let W=z.getViewport(q);a.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),C.viewport(a)}n=z.getFrustum(q),v(x,b,Z,L,H,this.type)}z.isPointLightShadow!==!0&&this.type===wr&&_(z,b),z.needsUpdate=!1}A=this.type,m.needsUpdate=!1,i.setRenderTarget(w,S,T)};function _(E,x){let b=e.update(g);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Ot(s.x,s.y,{format:wn,type:yt}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(x,null,b,u,g,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(x,null,b,f,g,null)}function y(E,x,b,w){let S=null,T=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(T!==void 0)S=T;else if(S=b.isPointLight===!0?c:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let C=S.uuid,F=x.uuid,I=l[C];I===void 0&&(I={},l[C]=I);let P=I[F];P===void 0&&(P=S.clone(),I[F]=P,x.addEventListener("dispose",M)),S=P}if(S.visible=x.visible,S.wireframe=x.wireframe,w===wr?S.side=x.shadowSide!==null?x.shadowSide:x.side:S.side=x.shadowSide!==null?x.shadowSide:d[x.side],S.alphaMap=x.alphaMap,S.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,S.map=x.map,S.clipShadows=x.clipShadows,S.clippingPlanes=x.clippingPlanes,S.clipIntersection=x.clipIntersection,S.displacementMap=x.displacementMap,S.displacementScale=x.displacementScale,S.displacementBias=x.displacementBias,S.wireframeLinewidth=x.wireframeLinewidth,S.linewidth=x.linewidth,b.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let C=i.properties.get(S);C.light=b}return S}function v(E,x,b,w,S,T){if(E.visible===!1)return;if(E.layers.test(S)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&T===wr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);let I=e.update(E),P=E.material;if(Array.isArray(P)){let L=I.groups;for(let z=0,O=L.length;z<O;z++){let G=L[z],V=P[G.materialIndex];if(V&&V.visible){let H=y(E,V,w,T);E.onBeforeShadow(i,E,x,b,I,H,G),i.renderBufferDirect(b,null,I,H,E,G),E.onAfterShadow(i,E,x,b,I,H,G)}}}else if(P.visible){let L=y(E,P,w,T);E.onBeforeShadow(i,E,x,b,I,L,null),i.renderBufferDirect(b,null,I,L,E,null),E.onAfterShadow(i,E,x,b,I,L,null)}}let F=E.children;for(let I=0,P=F.length;I<P;I++)v(F[I],x,b,w,S,T)}function M(E){E.target.removeEventListener("dispose",M);for(let b in l){let w=l[b],S=E.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}function dv(i,e){function t(){let U=!1,J=new st,te=null,pe=new st(0,0,0,0);return{setMask:function(de){te!==de&&!U&&(i.colorMask(de,de,de,de),te=de)},setLocked:function(de){U=de},setClear:function(de,ue,Re,$e,Ae){Ae===!0&&(de*=$e,ue*=$e,Re*=$e),J.set(de,ue,Re,$e),pe.equals(J)===!1&&(i.clearColor(de,ue,Re,$e),pe.copy(J))},reset:function(){U=!1,te=null,pe.set(-1,0,0,0)}}}function n(){let U=!1,J=!1,te=null,pe=null,de=null;return{setReversed:function(ue){if(J!==ue){let Re=e.get("EXT_clip_control");ue?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),J=ue;let $e=de;de=null,this.setClear($e)}},getReversed:function(){return J},setTest:function(ue){ue?ae(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(ue){te!==ue&&!U&&(i.depthMask(ue),te=ue)},setFunc:function(ue){if(J&&(ue=cf[ue]),pe!==ue){switch(ue){case Ro:i.depthFunc(i.NEVER);break;case Bo:i.depthFunc(i.ALWAYS);break;case Do:i.depthFunc(i.LESS);break;case cr:i.depthFunc(i.LEQUAL);break;case Fo:i.depthFunc(i.EQUAL);break;case Po:i.depthFunc(i.GEQUAL);break;case Lo:i.depthFunc(i.GREATER);break;case No:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=ue}},setLocked:function(ue){U=ue},setClear:function(ue){de!==ue&&(de=ue,J&&(ue=1-ue),i.clearDepth(ue))},reset:function(){U=!1,te=null,pe=null,de=null,J=!1}}}function s(){let U=!1,J=null,te=null,pe=null,de=null,ue=null,Re=null,$e=null,Ae=null;return{setTest:function(We){U||(We?ae(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(We){J!==We&&!U&&(i.stencilMask(We),J=We)},setFunc:function(We,at,we){(te!==We||pe!==at||de!==we)&&(i.stencilFunc(We,at,we),te=We,pe=at,de=we)},setOp:function(We,at,we){(ue!==We||Re!==at||$e!==we)&&(i.stencilOp(We,at,we),ue=We,Re=at,$e=we)},setLocked:function(We){U=We},setClear:function(We){Ae!==We&&(i.clearStencil(We),Ae=We)},reset:function(){U=!1,J=null,te=null,pe=null,de=null,ue=null,Re=null,$e=null,Ae=null}}}let r=new t,a=new n,o=new s,c={},l=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],g=null,m=!1,A=null,_=null,y=null,v=null,M=null,E=null,x=null,b=new ye(0,0,0),w=0,S=!1,T=null,C=null,F=null,I=null,P=null,L=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,O=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(G)[1]),z=O>=1):G.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),z=O>=2);let V=null,H={},q=i.getParameter(i.SCISSOR_BOX),Z=i.getParameter(i.VIEWPORT),W=new st().fromArray(q),j=new st().fromArray(Z);function re(U,J,te,pe){let de=new Uint8Array(4),ue=i.createTexture();i.bindTexture(U,ue),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Re=0;Re<te;Re++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(J,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,de):i.texImage2D(J+Re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,de);return ue}let le={};le[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),le[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),le[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(i.DEPTH_TEST),a.setFunc(cr),It(!1),rt(kl),ae(i.CULL_FACE),mt(wi);function ae(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function me(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Fe(U,J){return u[U]!==J?(i.bindFramebuffer(U,J),u[U]=J,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=J),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=J),!0):!1}function xe(U,J){let te=p,pe=!1;if(U){te=f.get(J),te===void 0&&(te=[],f.set(J,te));let de=U.textures;if(te.length!==de.length||te[0]!==i.COLOR_ATTACHMENT0){for(let ue=0,Re=de.length;ue<Re;ue++)te[ue]=i.COLOR_ATTACHMENT0+ue;te.length=de.length,pe=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,pe=!0);pe&&i.drawBuffers(te)}function Ie(U){return g!==U?(i.useProgram(U),g=U,!0):!1}let qe={[ws]:i.FUNC_ADD,[Td]:i.FUNC_SUBTRACT,[Rd]:i.FUNC_REVERSE_SUBTRACT};qe[Bd]=i.MIN,qe[Dd]=i.MAX;let He={[Fd]:i.ZERO,[Pd]:i.ONE,[Ld]:i.SRC_COLOR,[zl]:i.SRC_ALPHA,[Qd]:i.SRC_ALPHA_SATURATE,[kd]:i.DST_COLOR,[Ud]:i.DST_ALPHA,[Nd]:i.ONE_MINUS_SRC_COLOR,[Vl]:i.ONE_MINUS_SRC_ALPHA,[Gd]:i.ONE_MINUS_DST_COLOR,[Od]:i.ONE_MINUS_DST_ALPHA,[zd]:i.CONSTANT_COLOR,[Vd]:i.ONE_MINUS_CONSTANT_COLOR,[Hd]:i.CONSTANT_ALPHA,[Wd]:i.ONE_MINUS_CONSTANT_ALPHA};function mt(U,J,te,pe,de,ue,Re,$e,Ae,We){if(U===wi){m===!0&&(me(i.BLEND),m=!1);return}if(m===!1&&(ae(i.BLEND),m=!0),U!==Id){if(U!==A||We!==S){if((_!==ws||M!==ws)&&(i.blendEquation(i.FUNC_ADD),_=ws,M=ws),We)switch(U){case Cr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ua:i.blendFunc(i.ONE,i.ONE);break;case Gl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ql:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ye("WebGLState: Invalid blending: ",U);break}else switch(U){case Cr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ua:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Gl:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ql:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",U);break}y=null,v=null,E=null,x=null,b.set(0,0,0),w=0,A=U,S=We}return}de=de||J,ue=ue||te,Re=Re||pe,(J!==_||de!==M)&&(i.blendEquationSeparate(qe[J],qe[de]),_=J,M=de),(te!==y||pe!==v||ue!==E||Re!==x)&&(i.blendFuncSeparate(He[te],He[pe],He[ue],He[Re]),y=te,v=pe,E=ue,x=Re),($e.equals(b)===!1||Ae!==w)&&(i.blendColor($e.r,$e.g,$e.b,Ae),b.copy($e),w=Ae),A=U,S=!1}function dt(U,J){U.side===Rt?me(i.CULL_FACE):ae(i.CULL_FACE);let te=U.side===Wt;J&&(te=!te),It(te),U.blending===Cr&&U.transparent===!1?mt(wi):mt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let pe=U.stencilWrite;o.setTest(pe),pe&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),xt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function It(U){T!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),T=U)}function rt(U){U!==Sd?(ae(i.CULL_FACE),U!==C&&(U===kl?i.cullFace(i.BACK):U===wd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),C=U}function Gt(U){U!==F&&(z&&i.lineWidth(U),F=U)}function xt(U,J,te){U?(ae(i.POLYGON_OFFSET_FILL),(I!==J||P!==te)&&(I=J,P=te,a.getReversed()&&(J=-J,te=-te),i.polygonOffset(J,te))):me(i.POLYGON_OFFSET_FILL)}function Se(U){U?ae(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function Qe(U){U===void 0&&(U=i.TEXTURE0+L-1),V!==U&&(i.activeTexture(U),V=U)}function Ue(U,J,te){te===void 0&&(V===null?te=i.TEXTURE0+L-1:te=V);let pe=H[te];pe===void 0&&(pe={type:void 0,texture:void 0},H[te]=pe),(pe.type!==U||pe.texture!==J)&&(V!==te&&(i.activeTexture(te),V=te),i.bindTexture(U,J||le[U]),pe.type=U,pe.texture=J)}function Q(){let U=H[V];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Ee(){try{i.compressedTexImage2D(...arguments)}catch(U){Ye("WebGLState:",U)}}function Ve(){try{i.compressedTexImage3D(...arguments)}catch(U){Ye("WebGLState:",U)}}function Xe(){try{i.texSubImage2D(...arguments)}catch(U){Ye("WebGLState:",U)}}function ce(){try{i.texSubImage3D(...arguments)}catch(U){Ye("WebGLState:",U)}}function bt(){try{i.compressedTexSubImage2D(...arguments)}catch(U){Ye("WebGLState:",U)}}function Me(){try{i.compressedTexSubImage3D(...arguments)}catch(U){Ye("WebGLState:",U)}}function Ge(){try{i.texStorage2D(...arguments)}catch(U){Ye("WebGLState:",U)}}function N(){try{i.texStorage3D(...arguments)}catch(U){Ye("WebGLState:",U)}}function B(){try{i.texImage2D(...arguments)}catch(U){Ye("WebGLState:",U)}}function Y(){try{i.texImage3D(...arguments)}catch(U){Ye("WebGLState:",U)}}function oe(U){return d[U]!==void 0?d[U]:i.getParameter(U)}function ie(U,J){d[U]!==J&&(i.pixelStorei(U,J),d[U]=J)}function he(U){W.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),W.copy(U))}function _e(U){j.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),j.copy(U))}function se(U,J){let te=l.get(J);te===void 0&&(te=new WeakMap,l.set(J,te));let pe=te.get(U);pe===void 0&&(pe=i.getUniformBlockIndex(J,U.name),i.uniformBlockBinding(J,pe,pe),te.set(U,pe))}function k(U,J,te){let de=l.get(J).get(U);c[de]!==te&&(i.bindBufferBase(i.UNIFORM_BUFFER,de,te),c[de]=te)}function X(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},V=null,H={},u={},c={},f=new WeakMap,p=[],g=null,m=!1,A=null,_=null,y=null,v=null,M=null,E=null,x=null,b=new ye(0,0,0),w=0,S=!1,T=null,C=null,F=null,I=null,P=null,W.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ae,disable:me,bindFramebuffer:Fe,drawBuffers:xe,useProgram:Ie,setBlending:mt,setMaterial:dt,setFlipSided:It,setCullFace:rt,setLineWidth:Gt,setPolygonOffset:xt,setScissorTest:Se,activeTexture:Qe,bindTexture:Ue,unbindTexture:Q,compressedTexImage2D:Ee,compressedTexImage3D:Ve,texImage2D:B,texImage3D:Y,pixelStorei:ie,getParameter:oe,updateUBOMapping:se,uniformBlockBinding:k,texStorage2D:Ge,texStorage3D:N,texSubImage2D:Xe,texSubImage3D:ce,compressedTexSubImage2D:bt,compressedTexSubImage3D:Me,scissor:he,viewport:_e,reset:X}}function fv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new fe,h=new WeakMap,d=new Set,u,f=new WeakMap,p=new Set,g=new FinalizationRegistry(N=>p.delete(N)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(N,B){return m?new OffscreenCanvas(N,B):dr("canvas")}function _(N,B,Y){let oe=1,ie=Ge(N);if((ie.width>Y||ie.height>Y)&&(oe=Y/Math.max(ie.width,ie.height)),oe<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let he=Math.floor(oe*ie.width),_e=Math.floor(oe*ie.height);u===void 0&&(u=A(he,_e));let se=B?A(he,_e):u;return se.width=he,se.height=_e,se.getContext("2d").drawImage(N,0,0,he,_e),ke("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+he+"x"+_e+")."),se}else return"data"in N&&ke("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),N;return N}function y(N){return N.generateMipmaps}function v(N){i.generateMipmap(N)}function M(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(N,B,Y,oe,ie,he=!1){if(N!==null){if(i[N]!==void 0)return i[N];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let _e;oe&&(_e=e.get("EXT_texture_norm16"),_e||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let se=B;if(B===i.RED&&(Y===i.FLOAT&&(se=i.R32F),Y===i.HALF_FLOAT&&(se=i.R16F),Y===i.UNSIGNED_BYTE&&(se=i.R8),Y===i.UNSIGNED_SHORT&&_e&&(se=_e.R16_EXT),Y===i.SHORT&&_e&&(se=_e.R16_SNORM_EXT)),B===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(se=i.R8UI),Y===i.UNSIGNED_SHORT&&(se=i.R16UI),Y===i.UNSIGNED_INT&&(se=i.R32UI),Y===i.BYTE&&(se=i.R8I),Y===i.SHORT&&(se=i.R16I),Y===i.INT&&(se=i.R32I)),B===i.RG&&(Y===i.FLOAT&&(se=i.RG32F),Y===i.HALF_FLOAT&&(se=i.RG16F),Y===i.UNSIGNED_BYTE&&(se=i.RG8),Y===i.UNSIGNED_SHORT&&_e&&(se=_e.RG16_EXT),Y===i.SHORT&&_e&&(se=_e.RG16_SNORM_EXT)),B===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(se=i.RG8UI),Y===i.UNSIGNED_SHORT&&(se=i.RG16UI),Y===i.UNSIGNED_INT&&(se=i.RG32UI),Y===i.BYTE&&(se=i.RG8I),Y===i.SHORT&&(se=i.RG16I),Y===i.INT&&(se=i.RG32I)),B===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(se=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(se=i.RGB16UI),Y===i.UNSIGNED_INT&&(se=i.RGB32UI),Y===i.BYTE&&(se=i.RGB8I),Y===i.SHORT&&(se=i.RGB16I),Y===i.INT&&(se=i.RGB32I)),B===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(se=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(se=i.RGBA16UI),Y===i.UNSIGNED_INT&&(se=i.RGBA32UI),Y===i.BYTE&&(se=i.RGBA8I),Y===i.SHORT&&(se=i.RGBA16I),Y===i.INT&&(se=i.RGBA32I)),B===i.RGB&&(Y===i.UNSIGNED_SHORT&&_e&&(se=_e.RGB16_EXT),Y===i.SHORT&&_e&&(se=_e.RGB16_SNORM_EXT),Y===i.UNSIGNED_INT_5_9_9_9_REV&&(se=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(se=i.R11F_G11F_B10F)),B===i.RGBA){let k=he?ur:ot.getTransfer(ie);Y===i.FLOAT&&(se=i.RGBA32F),Y===i.HALF_FLOAT&&(se=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(se=k===wt?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT&&_e&&(se=_e.RGBA16_EXT),Y===i.SHORT&&_e&&(se=_e.RGBA16_SNORM_EXT),Y===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)}return(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function x(N,B){let Y;return N?B===null||B===bn||B===Is?Y=i.DEPTH24_STENCIL8:B===zt?Y=i.DEPTH32F_STENCIL8:B===Ci&&(Y=i.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):B===null||B===bn||B===Is?Y=i.DEPTH_COMPONENT24:B===zt?Y=i.DEPTH_COMPONENT32F:B===Ci&&(Y=i.DEPTH_COMPONENT16),Y}function b(N,B){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==Tt&&N.minFilter!==At?Math.log2(Math.max(B.width,B.height))+1:N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?B.mipmaps.length:1}function w(N){let B=new WeakRef(N);n.get(N).__ref=B,p.add(B),g.register(N,B,B)}function S(N){let B=n.get(N).__ref;B!==void 0&&(p.delete(B),g.unregister(B))}function T(N){F(N.target)}function C(N){I(N.target)}function F(N){N.removeEventListener("dispose",T),S(N),L(N),N.isVideoTexture&&h.delete(N),N.isHTMLTexture&&d.delete(N)}function I(N){N.removeEventListener("dispose",C),S(N),O(N)}function P(){for(let N of p){let B=N.deref();B!==void 0&&(B.isRenderTarget===!0?I(B):F(B))}p.clear(),d.clear()}function L(N){let B=n.get(N);if(B.__webglInit===void 0)return;let Y=N.source,oe=f.get(Y);if(oe){let ie=oe[B.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&z(N),Object.keys(oe).length===0&&f.delete(Y)}n.remove(N)}function z(N){let B=n.get(N);i.deleteTexture(B.__webglTexture);let Y=N.source,oe=f.get(Y);delete oe[B.__cacheKey],a.memory.textures--}function O(N){let B=n.get(N);B.__depthDisposeCallback&&B.__depthDisposeCallback();let Y=N.depthTexture;if(Y&&Y.renderTarget===N&&F(Y),N.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(B.__webglFramebuffer[ie]))for(let he=0;he<B.__webglFramebuffer[ie].length;he++)i.deleteFramebuffer(B.__webglFramebuffer[ie][he]);else i.deleteFramebuffer(B.__webglFramebuffer[ie]);B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer[ie])}else{if(Array.isArray(B.__webglFramebuffer))for(let ie=0;ie<B.__webglFramebuffer.length;ie++)i.deleteFramebuffer(B.__webglFramebuffer[ie]);else i.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&i.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let ie=0;ie<B.__webglColorRenderbuffer.length;ie++)B.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(B.__webglColorRenderbuffer[ie]);B.__webglDepthRenderbuffer&&i.deleteRenderbuffer(B.__webglDepthRenderbuffer)}let oe=N.textures;for(let ie=0,he=oe.length;ie<he;ie++){let _e=n.get(oe[ie]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(oe[ie])}n.remove(N)}let G=0;function V(){G=0}function H(){return G}function q(N){G=N}function Z(){let N=G;return N>=s.maxTextures&&ke("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),G+=1,N}function W(N){let B=[];return B.push(N.wrapS),B.push(N.wrapT),B.push(N.wrapR||0),B.push(N.magFilter),B.push(N.minFilter),B.push(N.anisotropy),B.push(N.internalFormat),B.push(N.format),B.push(N.type),B.push(N.generateMipmaps),B.push(N.mipmapsAutoUpdate),B.push(N.premultiplyAlpha),B.push(N.flipY),B.push(N.unpackAlignment),B.push(N.colorSpace),B.join()}function j(N,B){let Y=n.get(N);if(N.isVideoTexture&&bt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Y.__version!==N.version){let oe=N.image;if(oe===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{dt(Y,N,B);return}}else N.isExternalTexture&&(Y.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+B)}function re(N,B){let Y=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){dt(Y,N,B);return}else N.isExternalTexture&&(Y.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+B)}function le(N,B){let Y=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){dt(Y,N,B);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+B)}function ae(N,B){let Y=n.get(N);if(N.version>0&&Y.__version!==N.version){It(Y,N,B);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+B)}let me={[Yt]:i.REPEAT,[gn]:i.CLAMP_TO_EDGE,[lr]:i.MIRRORED_REPEAT},Fe={[Tt]:i.NEAREST,[Rr]:i.NEAREST_MIPMAP_NEAREST,[Cs]:i.NEAREST_MIPMAP_LINEAR,[At]:i.LINEAR,[Br]:i.LINEAR_MIPMAP_NEAREST,[Qt]:i.LINEAR_MIPMAP_LINEAR},xe={[$d]:i.NEVER,[su]:i.ALWAYS,[ef]:i.LESS,[nu]:i.LEQUAL,[tf]:i.EQUAL,[iu]:i.GEQUAL,[nf]:i.GREATER,[sf]:i.NOTEQUAL};function Ie(N,B){if(B.type===zt&&e.has("OES_texture_float_linear")===!1&&(B.magFilter===At||B.magFilter===Br||B.magFilter===Cs||B.magFilter===Qt||B.minFilter===At||B.minFilter===Br||B.minFilter===Cs||B.minFilter===Qt)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,me[B.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,me[B.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,me[B.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,Fe[B.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,Fe[B.minFilter]),B.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,xe[B.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(B.magFilter===Tt||B.minFilter!==Cs&&B.minFilter!==Qt||B.type===zt&&e.has("OES_texture_float_linear")===!1)return;if(B.anisotropy>1||n.get(B).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(B.anisotropy,s.getMaxAnisotropy())),n.get(B).__currentAnisotropy=B.anisotropy}}}function qe(N,B){let Y=!1;N.__webglInit===void 0&&(N.__webglInit=!0,B.addEventListener("dispose",T),w(B));let oe=B.source,ie=f.get(oe);ie===void 0&&(ie={},f.set(oe,ie));let he=W(B);if(he!==N.__cacheKey){ie[he]===void 0&&(ie[he]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),ie[he].usedTimes++;let _e=ie[N.__cacheKey];_e!==void 0&&(ie[N.__cacheKey].usedTimes--,_e.usedTimes===0&&z(B)),N.__cacheKey=he,N.__webglTexture=ie[he].texture}return Y}function He(N,B,Y){return Math.floor(Math.floor(N/Y)/B)}function mt(N,B,Y,oe){let he=N.updateRanges;if(he.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,B.width,B.height,Y,oe,B.data);else{he.sort((U,J)=>U.start-J.start);let _e=0;for(let U=1;U<he.length;U++){let J=he[_e],te=he[U],pe=J.start+J.count,de=He(te.start,B.width,4),ue=He(J.start,B.width,4);te.start<=pe+1&&de===ue&&He(te.start+te.count-1,B.width,4)===de?J.count=Math.max(J.count,te.start+te.count-J.start):(++_e,he[_e]=te)}he.length=_e+1;let se=t.getParameter(i.UNPACK_ROW_LENGTH),k=t.getParameter(i.UNPACK_SKIP_PIXELS),X=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,B.width);for(let U=0,J=he.length;U<J;U++){let te=he[U],pe=Math.floor(te.start/4),de=Math.ceil(te.count/4),ue=pe%B.width,Re=Math.floor(pe/B.width),$e=de,Ae=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(i.UNPACK_SKIP_ROWS,Re),t.texSubImage2D(i.TEXTURE_2D,0,ue,Re,$e,Ae,Y,oe,B.data)}N.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,se),t.pixelStorei(i.UNPACK_SKIP_PIXELS,k),t.pixelStorei(i.UNPACK_SKIP_ROWS,X)}}function dt(N,B,Y){let oe=i.TEXTURE_2D;(B.isDataArrayTexture||B.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),B.isData3DTexture&&(oe=i.TEXTURE_3D);let ie=qe(N,B),he=B.source;t.bindTexture(oe,N.__webglTexture,i.TEXTURE0+Y);let _e=n.get(he);if(he.version!==_e.__version||ie===!0){if(t.activeTexture(i.TEXTURE0+Y),(typeof ImageBitmap<"u"&&B.image instanceof ImageBitmap)===!1){let Ae=ot.getPrimaries(ot.workingColorSpace),We=B.colorSpace===vn?null:ot.getPrimaries(B.colorSpace),at=B.colorSpace===vn||Ae===We?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,B.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at)}t.pixelStorei(i.UNPACK_ALIGNMENT,B.unpackAlignment);let k=_(B.image,!1,s.maxTextureSize);k=Me(B,k);let X=r.convert(B.format,B.colorSpace),U=r.convert(B.type),J=E(B.internalFormat,X,U,B.normalized,B.colorSpace,B.isVideoTexture);Ie(oe,B);let te,pe=B.mipmaps,de=B.isVideoTexture!==!0,ue=_e.__version===void 0||ie===!0,Re=he.dataReady,$e=b(B,k);if(B.isDepthTexture)J=x(B.format===Ii,B.type),ue&&(de?t.texStorage2D(i.TEXTURE_2D,1,J,k.width,k.height):t.texImage2D(i.TEXTURE_2D,0,J,k.width,k.height,0,X,U,null));else if(B.isDataTexture)if(pe.length>0){de&&ue&&t.texStorage2D(i.TEXTURE_2D,$e,J,pe[0].width,pe[0].height);for(let Ae=0,We=pe.length;Ae<We;Ae++)te=pe[Ae],de?Re&&t.texSubImage2D(i.TEXTURE_2D,Ae,0,0,te.width,te.height,X,U,te.data):t.texImage2D(i.TEXTURE_2D,Ae,J,te.width,te.height,0,X,U,te.data);B.generateMipmaps=!1}else de?(ue&&t.texStorage2D(i.TEXTURE_2D,$e,J,k.width,k.height),Re&&mt(B,k,X,U)):t.texImage2D(i.TEXTURE_2D,0,J,k.width,k.height,0,X,U,k.data);else if(B.isCompressedTexture)if(B.isCompressedArrayTexture){de&&ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,$e,J,pe[0].width,pe[0].height,k.depth);for(let Ae=0,We=pe.length;Ae<We;Ae++)if(te=pe[Ae],B.format!==Vt)if(X!==null)if(de){if(Re)if(B.layerUpdates.size>0){let at=Au(te.width,te.height,B.format,B.type);for(let we of B.layerUpdates){let Bt=te.data.subarray(we*at/te.data.BYTES_PER_ELEMENT,(we+1)*at/te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ae,0,0,we,te.width,te.height,1,X,Bt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ae,0,0,0,te.width,te.height,k.depth,X,te.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Ae,J,te.width,te.height,k.depth,0,te.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else de?Re&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Ae,0,0,0,te.width,te.height,k.depth,X,U,te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Ae,J,te.width,te.height,k.depth,0,X,U,te.data);B.layerUpdates.size>0&&B.clearLayerUpdates()}else{de&&ue&&t.texStorage2D(i.TEXTURE_2D,$e,J,pe[0].width,pe[0].height);for(let Ae=0,We=pe.length;Ae<We;Ae++)te=pe[Ae],B.format!==Vt?X!==null?de?Re&&t.compressedTexSubImage2D(i.TEXTURE_2D,Ae,0,0,te.width,te.height,X,te.data):t.compressedTexImage2D(i.TEXTURE_2D,Ae,J,te.width,te.height,0,te.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?Re&&t.texSubImage2D(i.TEXTURE_2D,Ae,0,0,te.width,te.height,X,U,te.data):t.texImage2D(i.TEXTURE_2D,Ae,J,te.width,te.height,0,X,U,te.data)}else if(B.isDataArrayTexture)if(de){if(ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,$e,J,k.width,k.height,k.depth),Re)if(B.layerUpdates.size>0){let Ae=Au(k.width,k.height,B.format,B.type);for(let We of B.layerUpdates){let at=k.data.subarray(We*Ae/k.data.BYTES_PER_ELEMENT,(We+1)*Ae/k.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,We,k.width,k.height,1,X,U,at)}B.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,k.width,k.height,k.depth,X,U,k.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,J,k.width,k.height,k.depth,0,X,U,k.data);else if(B.isData3DTexture)de?(ue&&t.texStorage3D(i.TEXTURE_3D,$e,J,k.width,k.height,k.depth),Re&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,k.width,k.height,k.depth,X,U,k.data)):t.texImage3D(i.TEXTURE_3D,0,J,k.width,k.height,k.depth,0,X,U,k.data);else if(B.isFramebufferTexture){if(ue)if(de)t.texStorage2D(i.TEXTURE_2D,$e,J,k.width,k.height);else{let Ae=k.width,We=k.height;for(let at=0;at<$e;at++)t.texImage2D(i.TEXTURE_2D,at,J,Ae,We,0,X,U,null),Ae>>=1,We>>=1}}else if(B.isHTMLTexture){if("texElementImage2D"in i){let Ae=i.canvas;if(Ae.hasAttribute("layoutsubtree")||Ae.setAttribute("layoutsubtree","true"),k.parentNode!==Ae){Ae.appendChild(k),d.add(B),Ae.onpaint=We=>{let at=We.changedElements;for(let we of d)at.includes(we.image)&&(we.needsUpdate=!0)},Ae.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,k);else{let at=i.RGBA,we=i.RGBA,Bt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,at,we,Bt,k)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(pe.length>0){if(de&&ue){let Ae=Ge(pe[0]);t.texStorage2D(i.TEXTURE_2D,$e,J,Ae.width,Ae.height)}for(let Ae=0,We=pe.length;Ae<We;Ae++)te=pe[Ae],de?Re&&t.texSubImage2D(i.TEXTURE_2D,Ae,0,0,X,U,te):t.texImage2D(i.TEXTURE_2D,Ae,J,X,U,te);B.generateMipmaps=!1}else if(de){if(ue){let Ae=Ge(k);t.texStorage2D(i.TEXTURE_2D,$e,J,Ae.width,Ae.height)}Re&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,X,U,k)}else t.texImage2D(i.TEXTURE_2D,0,J,X,U,k);y(B)&&B.mipmapsAutoUpdate===!0&&v(oe),_e.__version=he.version,B.onUpdate&&B.onUpdate(B)}N.__version=B.version}function It(N,B,Y){if(B.image.length!==6)return;let oe=qe(N,B),ie=B.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+Y);let he=n.get(ie);if(ie.version!==he.__version||oe===!0){t.activeTexture(i.TEXTURE0+Y);let _e=ot.getPrimaries(ot.workingColorSpace),se=B.colorSpace===vn?null:ot.getPrimaries(B.colorSpace),k=B.colorSpace===vn||_e===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,B.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,B.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,k);let X=B.isCompressedTexture||B.image[0].isCompressedTexture,U=B.image[0]&&B.image[0].isDataTexture,J=[];for(let we=0;we<6;we++)!X&&!U?J[we]=_(B.image[we],!0,s.maxCubemapSize):J[we]=U?B.image[we].image:B.image[we],J[we]=Me(B,J[we]);let te=J[0],pe=r.convert(B.format,B.colorSpace),de=r.convert(B.type),ue=E(B.internalFormat,pe,de,B.normalized,B.colorSpace),Re=B.isVideoTexture!==!0,$e=he.__version===void 0||oe===!0,Ae=ie.dataReady,We=b(B,te);Ie(i.TEXTURE_CUBE_MAP,B);let at;if(B.isDepthTexture){if(ue=x(B.format===Ii,B.type),$e)if(Re)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,ue,te.width,te.height);else for(let we=0;we<6;we++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,ue,te.width,te.height,0,pe,de,null)}else if(X){Re&&$e&&t.texStorage2D(i.TEXTURE_CUBE_MAP,We,ue,te.width,te.height);for(let we=0;we<6;we++){at=J[we].mipmaps;for(let Bt=0;Bt<at.length;Bt++){let tn=at[Bt];B.format!==Vt?pe!==null?Re?Ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Bt,0,0,tn.width,tn.height,pe,tn.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Bt,ue,tn.width,tn.height,0,tn.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?Ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Bt,0,0,tn.width,tn.height,pe,de,tn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Bt,ue,tn.width,tn.height,0,pe,de,tn.data)}}}else{if(at=B.mipmaps,Re&&$e){at.length>0&&We++;let we=Ge(J[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,We,ue,we.width,we.height)}for(let we=0;we<6;we++)if(U){Re?Ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,J[we].width,J[we].height,pe,de,J[we].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,ue,J[we].width,J[we].height,0,pe,de,J[we].data);for(let Bt=0;Bt<at.length;Bt++){let Li=at[Bt].image[we].image;Re?Ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Bt+1,0,0,Li.width,Li.height,pe,de,Li.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Bt+1,ue,Li.width,Li.height,0,pe,de,Li.data)}}else{Re?Ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,pe,de,J[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,ue,pe,de,J[we]);for(let Bt=0;Bt<at.length;Bt++){let tn=at[Bt];Re?Ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Bt+1,0,0,pe,de,tn.image[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Bt+1,ue,pe,de,tn.image[we])}}}y(B)&&B.mipmapsAutoUpdate===!0&&v(i.TEXTURE_CUBE_MAP),he.__version=ie.version,B.onUpdate&&B.onUpdate(B)}N.__version=B.version}function rt(N,B,Y,oe,ie,he){let _e=r.convert(Y.format,Y.colorSpace),se=r.convert(Y.type),k=E(Y.internalFormat,_e,se,Y.normalized,Y.colorSpace),X=n.get(B),U=n.get(Y);if(U.__renderTarget=B,!X.__hasExternalTextures){let J=Math.max(1,B.width>>he),te=Math.max(1,B.height>>he);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,he,k,J,te,B.depth,0,_e,se,null):t.texImage2D(ie,he,k,J,te,0,_e,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),ce(B)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,ie,U.__webglTexture,0,Xe(B)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,ie,U.__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(N,B,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,N),B.depthBuffer){let oe=B.depthTexture,ie=oe&&oe.isDepthTexture?oe.type:null,he=x(B.stencilBuffer,ie),_e=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ce(B)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xe(B),he,B.width,B.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe(B),he,B.width,B.height):i.renderbufferStorage(i.RENDERBUFFER,he,B.width,B.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,N)}else{let oe=B.textures;for(let ie=0;ie<oe.length;ie++){let he=oe[ie],_e=r.convert(he.format,he.colorSpace),se=r.convert(he.type),k=E(he.internalFormat,_e,se,he.normalized,he.colorSpace);ce(B)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xe(B),k,B.width,B.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe(B),k,B.width,B.height):i.renderbufferStorage(i.RENDERBUFFER,k,B.width,B.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xt(N,B,Y){let oe=B.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(B.depthTexture&&B.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ie=n.get(B.depthTexture);ie.__renderTarget=B;let he=oe?B.depthTexture.image[0]:B.depthTexture.image;(!ie.__webglTexture||he.width!==B.width||he.height!==B.height)&&(he.width=B.width,he.height=B.height,B.depthTexture.needsUpdate=!0),oe?ae(B.depthTexture,0):j(B.depthTexture,0);let _e=ie.__webglTexture,se=Xe(B),k=oe?i.TEXTURE_CUBE_MAP_POSITIVE_X+Y:i.TEXTURE_2D,X=B.depthTexture.format===Ii?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(B.depthTexture.format===bi)ce(B)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,k,_e,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,X,k,_e,0);else if(B.depthTexture.format===Ii)ce(B)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,k,_e,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,X,k,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Se(N){let B=n.get(N),Y=N.isWebGLCubeRenderTarget===!0;if(B.__boundDepthTexture!==N.depthTexture){let oe=N.depthTexture;if(B.__depthDisposeCallback&&B.__depthDisposeCallback(),oe){let ie=()=>{delete B.__boundDepthTexture,delete B.__depthDisposeCallback,oe.removeEventListener("dispose",ie)};oe.addEventListener("dispose",ie),B.__depthDisposeCallback=ie}B.__boundDepthTexture=oe}if(N.depthTexture&&!B.__autoAllocateDepthBuffer)if(Y)for(let oe=0;oe<6;oe++)xt(B.__webglFramebuffer[oe],N,oe);else N.texture.mipmaps.length>0?xt(B.__webglFramebuffer[0],N,0):xt(B.__webglFramebuffer,N,0);else if(Y){B.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(i.FRAMEBUFFER,B.__webglFramebuffer[oe]),B.__webglDepthbuffer[oe]===void 0)B.__webglDepthbuffer[oe]=i.createRenderbuffer(),Gt(B.__webglDepthbuffer[oe],N,!1);else{let ie=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=B.__webglDepthbuffer[oe];i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,he)}}else if(N.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,B.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,B.__webglFramebuffer),B.__webglDepthbuffer===void 0)B.__webglDepthbuffer=i.createRenderbuffer(),Gt(B.__webglDepthbuffer,N,!1);else{let ie=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=B.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,he)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(N,B,Y){let oe=n.get(N);B!==void 0&&rt(oe.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&Se(N)}function Ue(N){let B=N.texture,Y=n.get(N),oe=n.get(B);N.addEventListener("dispose",C),w(N);let ie=N.textures,he=N.isWebGLCubeRenderTarget===!0,_e=ie.length>1;if(_e||(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=B.version,a.memory.textures++),he){Y.__webglFramebuffer=[];for(let se=0;se<6;se++)if(B.mipmaps.length>0){Y.__webglFramebuffer[se]=[];for(let k=0;k<B.mipmaps.length;k++)Y.__webglFramebuffer[se][k]=i.createFramebuffer()}else Y.__webglFramebuffer[se]=i.createFramebuffer()}else{if(B.mipmaps.length>0){Y.__webglFramebuffer=[];for(let se=0;se<B.mipmaps.length;se++)Y.__webglFramebuffer[se]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(_e)for(let se=0,k=ie.length;se<k;se++){let X=n.get(ie[se]);X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture(),a.memory.textures++)}if(N.samples>0&&ce(N)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let se=0;se<ie.length;se++){let k=ie[se];Y.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[se]);let X=r.convert(k.format,k.colorSpace),U=r.convert(k.type),J=E(k.internalFormat,X,U,k.normalized,k.colorSpace,N.isXRRenderTarget===!0),te=Xe(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,te,J,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,Y.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),Gt(Y.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,B);for(let se=0;se<6;se++)if(B.mipmaps.length>0)for(let k=0;k<B.mipmaps.length;k++)rt(Y.__webglFramebuffer[se][k],N,B,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,k);else rt(Y.__webglFramebuffer[se],N,B,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);y(B)?v(i.TEXTURE_CUBE_MAP):B.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,B.mipmaps.length-1),t.unbindTexture()}else if(_e){for(let se=0,k=ie.length;se<k;se++){let X=ie[se],U=n.get(X),J=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(J=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,U.__webglTexture),Ie(J,X),rt(Y.__webglFramebuffer,N,X,i.COLOR_ATTACHMENT0+se,J,0),y(X)&&v(J)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(se=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,oe.__webglTexture),Ie(se,B),B.mipmaps.length>0)for(let k=0;k<B.mipmaps.length;k++)rt(Y.__webglFramebuffer[k],N,B,i.COLOR_ATTACHMENT0,se,k);else rt(Y.__webglFramebuffer,N,B,i.COLOR_ATTACHMENT0,se,0);y(B)?v(se):B.mipmaps.length>0&&i.texParameteri(se,i.TEXTURE_MAX_LEVEL,B.mipmaps.length-1),t.unbindTexture()}N.depthBuffer&&Se(N)}function Q(N){let B=N.textures;for(let Y=0,oe=B.length;Y<oe;Y++){let ie=B[Y];if(y(ie)&&ie.mipmapsAutoUpdate===!0){let he=M(N),_e=n.get(ie).__webglTexture;t.bindTexture(he,_e),v(he),t.unbindTexture()}}}let Ee=[];function Ve(N){if(N.samples>0){if(ce(N)===!1){let B=N.textures,Y=N.width,oe=N.height,ie=i.COLOR_BUFFER_BIT,he=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(N),se=B.length>1;if(se)for(let X=0;X<B.length;X++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),N.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let X=0;X<B.length;X++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[X]);let U=n.get(B[X]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,U,0)}i.blitFramebuffer(0,0,Y,oe,0,0,Y,oe,ie,i.NEAREST),c===!0&&(Ee.length=0,Ee.push(i.COLOR_ATTACHMENT0+X),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&Ee.push(he),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ee))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let X=0;X<B.length;X++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.RENDERBUFFER,_e.__webglColorRenderbuffer[X]);let U=n.get(B[X]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.TEXTURE_2D,U,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&c){let B=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[B])}}}function Xe(N){return Math.min(s.maxSamples,N.samples)}function ce(N){let B=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&B.__useRenderToTexture!==!1}function bt(N){let B=a.render.frame;h.get(N)!==B&&(h.set(N,B),N.update())}function Me(N,B){let Y=N.colorSpace,oe=N.format,ie=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Y!==jt&&Y!==vn&&(ot.getTransfer(Y)===wt?(oe!==Vt||ie!==Ke)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",Y)),B}function Ge(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(l.width=N.naturalWidth||N.width,l.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(l.width=N.displayWidth,l.height=N.displayHeight):(l.width=N.width,l.height=N.height),l}this.allocateTextureUnit=Z,this.resetTextureUnits=V,this.getTextureUnits=H,this.setTextureUnits=q,this.setTexture2D=j,this.setTexture2DArray=re,this.setTexture3D=le,this.setTextureCube=ae,this.rebindTextures=Qe,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=ce,this.dispose=P}function pv(i,e){function t(n,s=vn){let r,a=ot.getTransfer(s);if(n===Ke)return i.UNSIGNED_BYTE;if(n===cc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===lc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dr)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Fr)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Zl)return i.BYTE;if(n===$l)return i.SHORT;if(n===Ci)return i.UNSIGNED_SHORT;if(n===oc)return i.INT;if(n===bn)return i.UNSIGNED_INT;if(n===zt)return i.FLOAT;if(n===yt)return i.HALF_FLOAT;if(n===eu)return i.ALPHA;if(n===Ts)return i.RGB;if(n===Vt)return i.RGBA;if(n===bi)return i.DEPTH_COMPONENT;if(n===Ii)return i.DEPTH_STENCIL;if(n===Gn)return i.RED;if(n===uc)return i.RED_INTEGER;if(n===wn)return i.RG;if(n===hc)return i.RG_INTEGER;if(n===dc)return i.RGBA_INTEGER;if(n===Zi||n===Ti||n===ka||n===Ri)if(a===wt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zi)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ti)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ri)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zi)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ti)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ka)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ri)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pr||n===fc||n===$i||n===Rs)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Pr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$i)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Rs)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Lr||n===Bs||n===Ds||n===Nr||n===Ur||n===Fs||n===Or)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Lr||n===Bs)return a===wt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ds)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Nr)return r.COMPRESSED_R11_EAC;if(n===Ur)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Fs)return r.COMPRESSED_RG11_EAC;if(n===Or)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Bi||n===pc||n===Ac||n===mc||n===es||n===gc||n===_c||n===xc||n===bc||n===vc||n===yc||n===Mc||n===Ec||n===Sc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Bi)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pc)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ac)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mc)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===es)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===gc)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_c)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xc)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bc)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vc)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yc)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mc)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ec)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sc)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ts||n===wc||n===kr)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ts)return a===wt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gr||n===Qr||n===Ps||n===zr)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Gr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Qr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ps)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}function _v(i,e){function t(m,A){m.matrixAutoUpdate===!0&&m.updateMatrix(),A.value.copy(m.matrix)}function n(m,A){A.color.getRGB(m.fogColor.value,du(i)),A.isFog?(m.fogNear.value=A.near,m.fogFar.value=A.far):A.isFogExp2&&(m.fogDensity.value=A.density)}function s(m,A,_,y,v){A.isNodeMaterial?A.uniformsNeedUpdate=!1:A.isMeshBasicMaterial?r(m,A):A.isMeshLambertMaterial?(r(m,A),A.envMap&&(m.envMapIntensity.value=A.envMapIntensity)):A.isMeshToonMaterial?(r(m,A),d(m,A)):A.isMeshPhongMaterial?(r(m,A),h(m,A),A.envMap&&(m.envMapIntensity.value=A.envMapIntensity)):A.isMeshStandardMaterial?(r(m,A),u(m,A),A.isMeshPhysicalMaterial&&f(m,A,v)):A.isMeshMatcapMaterial?(r(m,A),p(m,A)):A.isMeshDepthMaterial?r(m,A):A.isMeshDistanceMaterial?(r(m,A),g(m,A)):A.isMeshNormalMaterial?r(m,A):A.isLineBasicMaterial?(a(m,A),A.isLineDashedMaterial&&o(m,A)):A.isPointsMaterial?c(m,A,_,y):A.isSpriteMaterial?l(m,A):A.isShadowMaterial?(m.color.value.copy(A.color),m.opacity.value=A.opacity):A.isShaderMaterial&&(A.uniformsNeedUpdate=!1)}function r(m,A){m.opacity.value=A.opacity,A.color&&m.diffuse.value.copy(A.color),A.emissive&&m.emissive.value.copy(A.emissive).multiplyScalar(A.emissiveIntensity),A.map&&(m.map.value=A.map,t(A.map,m.mapTransform)),A.alphaMap&&(m.alphaMap.value=A.alphaMap,t(A.alphaMap,m.alphaMapTransform)),A.bumpMap&&(m.bumpMap.value=A.bumpMap,t(A.bumpMap,m.bumpMapTransform),m.bumpScale.value=A.bumpScale,A.side===Wt&&(m.bumpScale.value*=-1)),A.normalMap&&(m.normalMap.value=A.normalMap,t(A.normalMap,m.normalMapTransform),m.normalScale.value.copy(A.normalScale),A.side===Wt&&m.normalScale.value.negate()),A.displacementMap&&(m.displacementMap.value=A.displacementMap,t(A.displacementMap,m.displacementMapTransform),m.displacementScale.value=A.displacementScale,m.displacementBias.value=A.displacementBias),A.emissiveMap&&(m.emissiveMap.value=A.emissiveMap,t(A.emissiveMap,m.emissiveMapTransform)),A.specularMap&&(m.specularMap.value=A.specularMap,t(A.specularMap,m.specularMapTransform)),A.alphaTest>0&&(m.alphaTest.value=A.alphaTest);let _=e.get(A),y=_.envMap,v=_.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(gv.makeRotationFromEuler(v)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Hf),m.reflectivity.value=A.reflectivity,m.ior.value=A.ior,m.refractionRatio.value=A.refractionRatio),A.lightMap&&(m.lightMap.value=A.lightMap,m.lightMapIntensity.value=A.lightMapIntensity,t(A.lightMap,m.lightMapTransform)),A.aoMap&&(m.aoMap.value=A.aoMap,m.aoMapIntensity.value=A.aoMapIntensity,t(A.aoMap,m.aoMapTransform))}function a(m,A){m.diffuse.value.copy(A.color),m.opacity.value=A.opacity,A.map&&(m.map.value=A.map,t(A.map,m.mapTransform))}function o(m,A){m.dashSize.value=A.dashSize,m.totalSize.value=A.dashSize+A.gapSize,m.scale.value=A.scale}function c(m,A,_,y){m.diffuse.value.copy(A.color),m.opacity.value=A.opacity,m.size.value=A.size*_,m.scale.value=y*.5,A.map&&(m.map.value=A.map,t(A.map,m.uvTransform)),A.alphaMap&&(m.alphaMap.value=A.alphaMap,t(A.alphaMap,m.alphaMapTransform)),A.alphaTest>0&&(m.alphaTest.value=A.alphaTest)}function l(m,A){m.diffuse.value.copy(A.color),m.opacity.value=A.opacity,m.rotation.value=A.rotation,A.map&&(m.map.value=A.map,t(A.map,m.mapTransform)),A.alphaMap&&(m.alphaMap.value=A.alphaMap,t(A.alphaMap,m.alphaMapTransform)),A.alphaTest>0&&(m.alphaTest.value=A.alphaTest)}function h(m,A){m.specular.value.copy(A.specular),m.shininess.value=Math.max(A.shininess,1e-4)}function d(m,A){A.gradientMap&&(m.gradientMap.value=A.gradientMap)}function u(m,A){m.metalness.value=A.metalness,A.metalnessMap&&(m.metalnessMap.value=A.metalnessMap,t(A.metalnessMap,m.metalnessMapTransform)),m.roughness.value=A.roughness,A.roughnessMap&&(m.roughnessMap.value=A.roughnessMap,t(A.roughnessMap,m.roughnessMapTransform)),A.envMap&&(m.envMapIntensity.value=A.envMapIntensity)}function f(m,A,_){m.ior.value=A.ior,A.diffuseRoughness>0&&(m.diffuseRoughness.value=A.diffuseRoughness,A.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=A.diffuseRoughnessMap,t(A.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),A.sheen>0&&(m.sheenColor.value.copy(A.sheenColor).multiplyScalar(A.sheen),m.sheenRoughness.value=A.sheenRoughness,A.sheenColorMap&&(m.sheenColorMap.value=A.sheenColorMap,t(A.sheenColorMap,m.sheenColorMapTransform)),A.sheenRoughnessMap&&(m.sheenRoughnessMap.value=A.sheenRoughnessMap,t(A.sheenRoughnessMap,m.sheenRoughnessMapTransform))),A.clearcoat>0&&(m.clearcoat.value=A.clearcoat,m.clearcoatRoughness.value=A.clearcoatRoughness,A.clearcoatMap&&(m.clearcoatMap.value=A.clearcoatMap,t(A.clearcoatMap,m.clearcoatMapTransform)),A.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=A.clearcoatRoughnessMap,t(A.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),A.clearcoatNormalMap&&(m.clearcoatNormalMap.value=A.clearcoatNormalMap,t(A.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(A.clearcoatNormalScale),A.side===Wt&&m.clearcoatNormalScale.value.negate())),A.dispersion>0&&(m.dispersion.value=A.dispersion),A.retroreflectivity>0&&(m.retroreflectivity.value=A.retroreflectivity),A.iridescence>0&&(m.iridescence.value=A.iridescence,m.iridescenceIOR.value=A.iridescenceIOR,m.iridescenceThicknessMinimum.value=A.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=A.iridescenceThicknessMaximum,A.iridescenceMap&&(m.iridescenceMap.value=A.iridescenceMap,t(A.iridescenceMap,m.iridescenceMapTransform)),A.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=A.iridescenceThicknessMap,t(A.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),A.transmission>0&&(m.transmission.value=A.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),A.transmissionMap&&(m.transmissionMap.value=A.transmissionMap,t(A.transmissionMap,m.transmissionMapTransform)),m.thickness.value=A.thickness,A.thicknessMap&&(m.thicknessMap.value=A.thicknessMap,t(A.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=A.attenuationDistance,m.attenuationColor.value.copy(A.attenuationColor)),A.anisotropy>0&&(m.anisotropyVector.value.set(A.anisotropy*Math.cos(A.anisotropyRotation),A.anisotropy*Math.sin(A.anisotropyRotation)),A.anisotropyMap&&(m.anisotropyMap.value=A.anisotropyMap,t(A.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=A.specularIntensity,m.specularColor.value.copy(A.specularColor),A.specularColorMap&&(m.specularColorMap.value=A.specularColorMap,t(A.specularColorMap,m.specularColorMapTransform)),A.specularIntensityMap&&(m.specularIntensityMap.value=A.specularIntensityMap,t(A.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,A){A.matcap&&(m.matcap.value=A.matcap)}function g(m,A){let _=e.get(A).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function xv(i,e,t,n){let s={},r={};function a(_,y){let v=y.program;n.uniformBlockBinding(_,v,s[_.id])}function o(_,y){let v=s[_.id];v===void 0&&(p(_),v=c(_),s[_.id]=v,_.addEventListener("dispose",m));let M=y.program;n.updateUBOMapping(_,M);let E=e.render.frame;r[_.id]!==E&&(l(_),r[_.id]=E)}function c(_){let y=i.createBuffer(),v=_.__size,M=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,v,M),i.bindBuffer(i.UNIFORM_BUFFER,null),y}function l(_){let y=s[_.id],v=_.uniforms,M=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let E=0,x=v.length;E<x;E++){let b=v[E];if(Array.isArray(b))for(let w=0,S=b.length;w<S;w++)h(b[w],E,w,M);else h(b,E,0,M)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(_,y,v,M){if(u(_,y,v,M)===!0){let E=_.__offset,x=_.value;if(Array.isArray(x)){let b=0;for(let w=0;w<x.length;w++){let S=x[w],T=g(S,!0);d(S,_.__data,b),b+=T.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,_.__data)}}function d(_,y,v){typeof _=="number"||typeof _=="boolean"?y[v]=_:_.isMatrix3?(y[v]=_.elements[0],y[v+1]=_.elements[1],y[v+2]=_.elements[2],y[v+3]=0,y[v+4]=_.elements[3],y[v+5]=_.elements[4],y[v+6]=_.elements[5],y[v+7]=0,y[v+8]=_.elements[6],y[v+9]=_.elements[7],y[v+10]=_.elements[8],y[v+11]=0):ArrayBuffer.isView(_)?y.set(_.subarray(0,y.length-v),v):_.toArray(y,v)}function u(_,y,v,M){let E=_.value,x=y+"_"+v;if(Array.isArray(E)){M[x]===void 0&&(M[x]=[]);let b=M[x],w=!1;for(let S=0;S<E.length;S++)f(E[S],b,S)===!0&&(w=!0);return w}return f(E,M,x)}function f(_,y,v){if(y[v]===void 0)return typeof _=="number"||typeof _=="boolean"?y[v]=_:ArrayBuffer.isView(_)?y[v]=_.slice():y[v]=_.clone(),!0;{let M=y[v];if(typeof _=="number"||typeof _=="boolean"){if(M!==_)return y[v]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(M.equals(_)===!1)return M.copy(_),!0}}return!1}function p(_){let y=_.uniforms,v=0,M=16;for(let x=0,b=y.length;x<b;x++){let w=Array.isArray(y[x])?y[x]:[y[x]];for(let S=0,T=w.length;S<T;S++){let C=w[S],F=Array.isArray(C.value)?C.value:[C.value],I=Array.isArray(y[x])||Array.isArray(C.value),P=v;for(let z=0,O=F.length;z<O;z++){let G=F[z],V=g(G,I),H=v%M,q=H%V.boundary,Z=H+q;v+=q,Z!==0&&M-Z<V.storage&&(v+=M-Z),z===0&&(P=v),v+=V.storage}let L=C.type==="int"?Int32Array:C.type==="uint"?Uint32Array:Float32Array;C.__data=new L((v-P)/Float32Array.BYTES_PER_ELEMENT),C.__offset=P}}let E=v%M;return E>0&&(v+=M-E),_.__size=v,_.__cache={},this}function g(_,y){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=16,v.storage=48):_.isMatrix4?(v.boundary=16,v.storage=64):_.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(v.boundary=16,v.storage=_.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",_),y===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(_){let y=_.target;y.removeEventListener("dispose",m),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function A(){for(let _ in s)i.deleteBuffer(s[_]);s={},r={}}return{bind:a,update:o,dispose:A}}function vv(){return ci===null&&(ci=new Nn(bv,16,16,wn,yt),ci.name="DFG_LUT",ci.minFilter=At,ci.magFilter=At,ci.wrapS=gn,ci.wrapT=gn,ci.generateMipmaps=!1,ci.needsUpdate=!0),ci}var Og,kg,Gg,Qg,zg,Vg,Hg,Wg,Kg,qg,Xg,Jg,Yg,jg,Zg,$g,e0,t0,n0,i0,s0,r0,a0,o0,c0,l0,u0,h0,d0,f0,p0,A0,m0,g0,_0,x0,b0,v0,y0,M0,E0,S0,w0,C0,I0,T0,R0,B0,D0,F0,P0,L0,N0,U0,O0,k0,G0,Q0,z0,V0,H0,W0,K0,q0,X0,J0,Y0,j0,Z0,$0,e_,t_,n_,i_,s_,r_,a_,o_,c_,l_,u_,h_,d_,f_,p_,A_,m_,g_,__,x_,b_,v_,y_,M_,E_,S_,w_,C_,I_,T_,R_,B_,D_,F_,P_,L_,N_,U_,O_,k_,G_,Q_,z_,V_,H_,W_,K_,q_,X_,J_,Y_,j_,Z_,$_,ex,tx,nx,ix,sx,rx,ax,ox,cx,lx,ux,hx,dx,fx,px,Ax,mx,nt,Ce,li,Bc,gx,Lf,Ns,ff,Mx,Ex,Nf,Uf,Sx,wx,Cx,Wr,Ox,Of,kf,Gf,Qf,zf,Vf,gf,_f,xf,bf,vf,xu,bu,vu,gu,Hr,Cb,Ib,Ef,Db,Dc,Ob,Gb,zb,Hb,Kb,Jb,Mu,Eu,iv,ov,cv,lv,uv,Ff,Qa,_u,Av,mv,Su,wu,gv,Hf,bv,ci,Fc,gt=it(()=>{mu();mu();Og=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kg=`#ifdef USE_ALPHAHASH
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
#endif`,Gg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hg=`#ifdef USE_AOMAP
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
#endif`,Wg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kg=`#ifdef USE_BATCHING
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
#endif`,qg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jg=`#ifdef USE_IRIDESCENCE
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
#endif`,Zg=`#ifdef USE_BUMPMAP
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
#endif`,$g=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,i0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,s0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,r0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,a0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,o0=`#define PI 3.141592653589793
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
} // validated`,c0=`vec3 transformedNormal = objectNormal;
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
#endif`,l0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,u0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,h0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f0="gl_FragColor = linearToOutputTexel( gl_FragColor );",p0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,A0=`#ifdef USE_ENVMAP
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
#endif`,m0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,g0=`#ifdef USE_ENVMAP
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
#endif`,_0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,x0=`#ifdef USE_ENVMAP
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
#endif`,b0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,v0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,y0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,M0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,E0=`#ifdef USE_GRADIENTMAP
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
}`,S0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,w0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,C0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,I0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,T0=`#ifdef USE_ENVMAP
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
#endif`,R0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,B0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,D0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,F0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,P0=`PhysicalMaterial material;
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
#endif`,L0=`uniform sampler2D dfgLUT;
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
}`,N0=`
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
#endif`,U0=`#if defined( RE_IndirectDiffuse )
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
#endif`,O0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,k0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,G0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Q0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,H0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,W0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,q0=`#if defined( USE_POINTS_UV )
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
#endif`,X0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,J0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Y0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,j0=`#if defined( USE_MORPHCOLORS )
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
#endif`,Z0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$0=`#ifdef USE_MORPHTARGETS
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
#endif`,e_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,n_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,i_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,a_=`#ifdef USE_NORMALMAP
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
#endif`,o_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,h_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,f_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,m_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,g_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,__=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,x_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,b_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,v_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,y_=`float getShadowMask() {
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
}`,M_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E_=`#ifdef USE_SKINNING
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
#endif`,S_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w_=`#ifdef USE_SKINNING
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
#endif`,C_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,I_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,R_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,B_=`#ifdef USE_TRANSMISSION
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
#endif`,D_=`#ifdef USE_TRANSMISSION
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
#endif`,F_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,U_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,O_=`uniform sampler2D t2D;
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
}`,k_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G_=`uniform float backgroundBlurriness;
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
}`,Q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V_=`#include <common>
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
}`,H_=`#if DEPTH_PACKING == 3200
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
}`,W_=`#define DISTANCE
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
}`,K_=`#define DISTANCE
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
}`,q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J_=`uniform float scale;
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
}`,Y_=`uniform vec3 diffuse;
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
}`,j_=`#include <common>
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
}`,Z_=`uniform vec3 diffuse;
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
}`,$_=`#define LAMBERT
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
}`,ex=`#define LAMBERT
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
}`,tx=`#define MATCAP
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
}`,nx=`#define MATCAP
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
}`,ix=`#define NORMAL
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
}`,sx=`#define NORMAL
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
}`,rx=`#define PHONG
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
}`,ax=`#define PHONG
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
}`,ox=`#define STANDARD
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
}`,cx=`#define STANDARD
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
}`,lx=`#define TOON
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
}`,ux=`#define TOON
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
}`,hx=`uniform float size;
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
}`,dx=`uniform vec3 diffuse;
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
}`,fx=`#include <common>
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
}`,px=`uniform vec3 color;
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
}`,Ax=`uniform float rotation;
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
}`,mx=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:Og,alphahash_pars_fragment:kg,alphamap_fragment:Gg,alphamap_pars_fragment:Qg,alphatest_fragment:zg,alphatest_pars_fragment:Vg,aomap_fragment:Hg,aomap_pars_fragment:Wg,batching_pars_vertex:Kg,batching_vertex:qg,begin_vertex:Xg,beginnormal_vertex:Jg,bsdfs:Yg,iridescence_fragment:jg,bumpmap_pars_fragment:Zg,clipping_planes_fragment:$g,clipping_planes_pars_fragment:e0,clipping_planes_pars_vertex:t0,clipping_planes_vertex:n0,color_fragment:i0,color_pars_fragment:s0,color_pars_vertex:r0,color_vertex:a0,common:o0,defaultnormal_vertex:c0,displacementmap_pars_vertex:l0,displacementmap_vertex:u0,emissivemap_fragment:h0,emissivemap_pars_fragment:d0,colorspace_fragment:f0,colorspace_pars_fragment:p0,envmap_fragment:A0,envmap_common_pars_fragment:m0,envmap_pars_fragment:g0,envmap_pars_vertex:_0,envmap_physical_pars_fragment:T0,envmap_vertex:x0,fog_vertex:b0,fog_pars_vertex:v0,fog_fragment:y0,fog_pars_fragment:M0,gradientmap_pars_fragment:E0,lightmap_pars_fragment:S0,lights_lambert_fragment:w0,lights_lambert_pars_fragment:C0,lights_pars_begin:I0,lights_toon_fragment:R0,lights_toon_pars_fragment:B0,lights_phong_fragment:D0,lights_phong_pars_fragment:F0,lights_physical_fragment:P0,lights_physical_pars_fragment:L0,lights_fragment_begin:N0,lights_fragment_maps:U0,lights_fragment_end:O0,lightprobes_pars_fragment:k0,logdepthbuf_fragment:G0,logdepthbuf_pars_fragment:Q0,logdepthbuf_pars_vertex:z0,logdepthbuf_vertex:V0,map_fragment:H0,map_pars_fragment:W0,map_particle_fragment:K0,map_particle_pars_fragment:q0,metalnessmap_fragment:X0,metalnessmap_pars_fragment:J0,morphinstance_vertex:Y0,morphcolor_vertex:j0,morphnormal_vertex:Z0,morphtarget_pars_vertex:$0,morphtarget_vertex:e_,normal_fragment_begin:t_,normal_fragment_maps:n_,normal_pars_fragment:i_,normal_pars_vertex:s_,normal_vertex:r_,normalmap_pars_fragment:a_,clearcoat_normal_fragment_begin:o_,clearcoat_normal_fragment_maps:c_,clearcoat_pars_fragment:l_,iridescence_pars_fragment:u_,opaque_fragment:h_,packing:d_,premultiplied_alpha_fragment:f_,project_vertex:p_,dithering_fragment:A_,dithering_pars_fragment:m_,roughnessmap_fragment:g_,roughnessmap_pars_fragment:__,shadowmap_pars_fragment:x_,shadowmap_pars_vertex:b_,shadowmap_vertex:v_,shadowmask_pars_fragment:y_,skinbase_vertex:M_,skinning_pars_vertex:E_,skinning_vertex:S_,skinnormal_vertex:w_,specularmap_fragment:C_,specularmap_pars_fragment:I_,tonemapping_fragment:T_,tonemapping_pars_fragment:R_,transmission_fragment:B_,transmission_pars_fragment:D_,uv_pars_fragment:F_,uv_pars_vertex:P_,uv_vertex:L_,worldpos_vertex:N_,background_vert:U_,background_frag:O_,backgroundCube_vert:k_,backgroundCube_frag:G_,cube_vert:Q_,cube_frag:z_,depth_vert:V_,depth_frag:H_,distance_vert:W_,distance_frag:K_,equirect_vert:q_,equirect_frag:X_,linedashed_vert:J_,linedashed_frag:Y_,meshbasic_vert:j_,meshbasic_frag:Z_,meshlambert_vert:$_,meshlambert_frag:ex,meshmatcap_vert:tx,meshmatcap_frag:nx,meshnormal_vert:ix,meshnormal_frag:sx,meshphong_vert:rx,meshphong_frag:ax,meshphysical_vert:ox,meshphysical_frag:cx,meshtoon_vert:lx,meshtoon_frag:ux,points_vert:hx,points_frag:dx,shadow_vert:fx,shadow_frag:px,sprite_vert:Ax,sprite_frag:mx},Ce={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},li={basic:{uniforms:fn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:fn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ye(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:fn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:fn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:fn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new ye(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:fn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:fn([Ce.points,Ce.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:fn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:fn([Ce.common,Ce.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:fn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:fn([Ce.sprite,Ce.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:fn([Ce.common,Ce.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:fn([Ce.lights,Ce.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};li.physical={uniforms:fn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};Bc={r:0,b:0,g:0},gx=new ge,Lf=new ze;Lf.set(-1,0,0,0,1,0,0,0,1);Ns=class extends Ot{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new wa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new rn(5,5,5),r=new Lt({name:"CubemapFromEquirect",uniforms:Ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:wi});r.uniforms.tEquirect.value=t;let a=new De(s,r),o=t.minFilter;return t.minFilter===Qt&&(t.minFilter=At),new Ji(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},ff=256,Mx=3,Ex=20,Nf=256,Uf=16,Sx=3,wx=new R,Cx=new ye,Wr=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ji(1,10,null),this._boxMesh=new De(new rn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=wx}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=c.autoClear,u=c.autoClearColor,f=c.autoClearDepth,p=c.autoClearStencil,g=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,g===null&&(e.background=c.getClearColor(Cx));let m=new Ji(n,s,h);return m.position.copy(o),m.update(c,e),c.autoClear=d,c.autoClearColor=u,c.autoClearDepth=f,c.autoClearStencil=p,e.background=g,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(ff,cu(e))}_fromTexture(e,t){e.mapping===ji||e.mapping===Ir?this._setSize(e.image.length===0?ff:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=pf(e,!1,!1),n=Math.log2(e)-Mx;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=pf(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ji||e.mapping===Ir?(this._cubemapMaterial===null&&(this._cubemapMaterial=mf()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Af()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Ix(),this._integrationMaterial=Tx());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Uf);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-Sx)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(Nf*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Rx());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};Ox={[Wl]:"LINEAR_TONE_MAPPING",[Kl]:"REINHARD_TONE_MAPPING",[ql]:"CINEON_TONE_MAPPING",[Oa]:"ACES_FILMIC_TONE_MAPPING",[Jl]:"AGX_TONE_MAPPING",[Yl]:"NEUTRAL_TONE_MAPPING",[Xl]:"CUSTOM_TONE_MAPPING"};Of=new Xt,kf=new Bn(1,1),Gf=new Ca(1),Qf=new Aa,zf=new Vi,Vf=new wa,gf=[],_f=[],xf=new Float32Array(16),bf=new Float32Array(9),vf=new Float32Array(4);xu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=rb(t.type)}},bu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sb(t.type)}},vu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},gu=/(\w+)(\])?(\[|\.)?/g;Hr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);wb(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};Cb=37297,Ib=0;Ef=new ze;Db={[Wl]:"Linear",[Kl]:"Reinhard",[ql]:"Cineon",[Oa]:"ACESFilmic",[Jl]:"AgX",[Yl]:"Neutral",[Xl]:"Custom"};Dc=new R;Ob=/^[ \t]*#include +<([\w\d./]+)>/gm;Gb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;zb={[Ss]:"SHADOWMAP_TYPE_PCF",[wr]:"SHADOWMAP_TYPE_VSM"};Hb={[Ir]:"ENVMAP_MODE_REFRACTION"};Kb={[Hl]:"ENVMAP_BLENDING_MULTIPLY",[Kd]:"ENVMAP_BLENDING_MIX",[qd]:"ENVMAP_BLENDING_ADD"};Jb=0,Mu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Eu(e),t.set(e,n)),n}},Eu=class{constructor(e){this.id=Jb++,this.code=e,this.usedTimes=0}};iv=0;ov=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cv=`uniform sampler2D shadow_pass;
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
}`,lv=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],uv=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Ff=new ge,Qa=new R,_u=new R;Av=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mv=`
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

}`,Su=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ia(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Lt({vertexShader:Av,fragmentShader:mv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new De(new bs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wu=class extends ti{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,p=null,g=typeof XRWebGLBinding<"u",m=new Su,A={},_=t.getContextAttributes(),y=null,v=null,M=[],E=[],x=new fe,b=null,w=null,S=new Jt;S.viewport=new st;let T=new Jt;T.viewport=new st;let C=[S,T],F=new rc,I=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let j=M[W];return j===void 0&&(j=new mr,M[W]=j),j.getTargetRaySpace()},this.getControllerGrip=function(W){let j=M[W];return j===void 0&&(j=new mr,M[W]=j),j.getGripSpace()},this.getHand=function(W){let j=M[W];return j===void 0&&(j=new mr,M[W]=j),j.getHandSpace()};function L(W){let j=E.indexOf(W.inputSource);if(j===-1)return;let re=M[j];re!==void 0&&(re.update(W.inputSource,W.frame,l||a),re.dispatchEvent({type:W.type,data:W.inputSource}))}function z(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",O);for(let W=0;W<M.length;W++){let j=E[W];j!==null&&(E[W]=null,M[W].disconnect(j))}I=null,P=null,m.reset();for(let W in A)delete A[W];if(e.setRenderTarget(y),f=null,u=null,d=null,s=null,v=null,Z.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(x.width,x.height,!1),w!==null){let W=w.camera;W.fov=w.fov,W.zoom=w.zoom,W.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",z),s.addEventListener("inputsourceschange",O),_.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(x),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,le=null,ae=null;_.depth&&(ae=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=_.stencil?Ii:bi,le=_.stencil?Is:bn);let me={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(me),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Ot(u.textureWidth,u.textureHeight,{format:Vt,type:Ke,depthTexture:new Bn(u.textureWidth,u.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let re={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,re),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Ot(f.framebufferWidth,f.framebufferHeight,{format:Vt,type:Ke,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Z.setContext(s),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(W){for(let j=0;j<W.removed.length;j++){let re=W.removed[j],le=E.indexOf(re);le>=0&&(E[le]=null,M[le].disconnect(re))}for(let j=0;j<W.added.length;j++){let re=W.added[j],le=E.indexOf(re);if(le===-1){for(let me=0;me<M.length;me++)if(me>=E.length){E.push(re),le=me;break}else if(E[me]===null){E[me]=re,le=me;break}if(le===-1)break}let ae=M[le];ae&&ae.connect(re)}}function G(W,j){j===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(j.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let j=W.near,re=W.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(re=m.depthFar)),F.near=T.near=S.near=j,F.far=T.far=S.far=re,(I!==F.near||P!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),I=F.near,P=F.far),F.layers.mask=W.layers.mask|6,S.layers.mask=F.layers.mask&-5,T.layers.mask=F.layers.mask&-3;let le=W.parent,ae=F.cameras;G(F,le);for(let me=0;me<ae.length;me++)G(ae[me],le);F.projectionMatrix.copy(S.projectionMatrix),F.projectionMatrixInverse.copy(S.projectionMatrixInverse),w===null&&W.isPerspectiveCamera&&(w={camera:W,fov:W.fov,zoom:W.zoom}),V(W,F,le)};function V(W,j,re){re===null?W.matrix.copy(j.matrixWorld):(W.matrix.copy(re.matrixWorld),W.matrix.invert(),W.matrix.multiply(j.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(j.projectionMatrix),W.projectionMatrixInverse.copy(j.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=fs*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(W){c=W,u!==null&&(u.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(W){return A[W]};let H=null;function q(W,j){if(h=j.getViewerPose(l||a),p=j,h!==null){let re=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let le=!1;re.length!==F.cameras.length&&(F.cameras.length=0,le=!0);for(let xe=0;xe<re.length;xe++){let Ie=re[xe],qe=null;if(f!==null)qe=f.getViewport(Ie);else{let mt=d.getViewSubImage(u,Ie);qe=mt.viewport,xe===0&&(e.setRenderTargetTextures(v,mt.colorTexture,mt.depthStencilTexture),e.setRenderTarget(v))}let He=C[xe];He===void 0&&(He=new Jt,He.layers.enable(xe),He.viewport=new st,C[xe]=He),He.matrix.fromArray(Ie.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Ie.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(qe.x,qe.y,qe.width,qe.height),xe===0&&(F.matrix.copy(He.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),le===!0&&F.cameras.push(He)}let ae=s.enabledFeatures;if(ae&&ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){d=n.getBinding();let xe=d.getDepthInformation(re[0]);xe&&xe.isValid&&xe.texture&&m.init(xe,s.renderState)}if(ae&&ae.includes("camera-access")&&g){e.state.unbindTexture(),d=n.getBinding();for(let xe=0;xe<re.length;xe++){let Ie=re[xe].camera;if(Ie){let qe=A[Ie];qe||(qe=new Ia,A[Ie]=qe);let He=d.getCameraImage(Ie);qe.sourceTexture=He}}}}for(let re=0;re<M.length;re++){let le=E[re],ae=M[re];le!==null&&ae!==void 0&&ae.update(le,j,l||a)}H&&H(W,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),p=null}let Z=new Pf;Z.setAnimationLoop(q),this.setAnimationLoop=function(W){H=W},this.dispose=function(){}}},gv=new ge,Hf=new ze;Hf.set(-1,0,0,0,1,0,0,0,1);bv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ci=null;Fc=class{constructor(e={}){let{canvas:t=rf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Ke}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let g=f,m=new Set([dc,hc,uc]),A=new Set([Ke,bn,Ci,Is,cc,lc]),_=new Uint32Array(4),y=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},M=null,E=null,x=[],b=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,T=!1,C=null,F=null,I=null,P=null;this._outputColorSpace=lt;let L=0,z=0,O=null,G=-1,V=null,H=new st,q=new st,Z=null,W=new ye(0),j=0,re=t.width,le=t.height,ae=1,me=null,Fe=null,xe=new st(0,0,re,le),Ie=new st(0,0,re,le),qe=!1,He=new kn,mt=new ko,dt=!1,It=!1,rt=new ge,Gt=new R,xt=new st,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qe=!1;function Ue(){return O===null?ae:1}let Q=n;function Ee(D,K){return t.getContext(D,K)}let Ve,Xe,ce,bt,Me,Ge,N,B,Y,oe,ie,he,_e,se,k,X,U,J,te,pe,de,ue,Re;try{let D={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",We,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",we,!1),Q===null){let K="webgl2";if(Q=Ee(K,D),Q===null)throw Ee(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$e()}catch(D){throw t.removeEventListener("webglcontextlost",We,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",we,!1),Ye("WebGLRenderer: "+D.message),D}function $e(){Ve=new Dx(Q),Ve.init(),de=new pv(Q,Ve),Xe=new vx(Q,Ve,e,de),ce=new dv(Q,Ve),Xe.reversedDepthBuffer&&u&&ce.buffers.depth.setReversed(!0),F=Q.createFramebuffer(),I=Q.createFramebuffer(),P=Q.createFramebuffer(),bt=new Lx(Q),Me=new Zb,Ge=new fv(Q,Ve,ce,Me,Xe,de,bt),N=new Bx(S),B=new Ug(Q),ue=new xx(Q,B),Y=new Fx(Q,B,bt,ue),oe=new Ux(Q,Y,B,ue,bt),J=new Nx(Q,Xe,Ge),k=new yx(Me),ie=new jb(S,N,Ve,Xe,ue,k),he=new _v(S,Me),_e=new ev,se=new av(Ve),U=new _x(S,N,ce,oe,p,c),X=new hv(S,oe,Xe),Re=new xv(Q,bt,Xe,ce),te=new bx(Q,Ve,bt),pe=new Px(Q,Ve,bt),bt.programs=ie.programs,S.capabilities=Xe,S.extensions=Ve,S.properties=Me,S.renderLists=_e,S.shadowMap=X,S.state=ce,S.info=bt}g!==Ke&&(w=new kx(g,t.width,t.height,o,s,r));let Ae=new wu(S,Q);this.xr=Ae,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){let D=Ve.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){let D=Ve.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(D){D!==void 0&&(ae=D,this.setSize(re,le,!1))},this.getSize=function(D){return D.set(re,le)},this.setSize=function(D,K,ne=!0){if(Ae.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}re=D,le=K,t.width=Math.floor(D*ae),t.height=Math.floor(K*ae),ne===!0&&(t.style.width=D+"px",t.style.height=K+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,D,K)},this.getDrawingBufferSize=function(D){return D.set(re*ae,le*ae).floor()},this.setDrawingBufferSize=function(D,K,ne){re=D,le=K,ae=ne,t.width=Math.floor(D*ne),t.height=Math.floor(K*ne),this.setViewport(0,0,D,K)},this.setEffects=function(D){if(g===Ke){Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let K=0;K<D.length;K++)if(D[K].isOutputPass===!0){ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(H)},this.getViewport=function(D){return D.copy(xe)},this.setViewport=function(D,K,ne,$){D.isVector4?xe.set(D.x,D.y,D.z,D.w):xe.set(D,K,ne,$),ce.viewport(H.copy(xe).multiplyScalar(Ue()).round())},this.getScissor=function(D){return D.copy(Ie)},this.setScissor=function(D,K,ne,$){D.isVector4?Ie.set(D.x,D.y,D.z,D.w):Ie.set(D,K,ne,$),ce.scissor(q.copy(Ie).multiplyScalar(Ue()).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(D){ce.setScissorTest(qe=D)},this.setOpaqueSort=function(D){me=D},this.setTransparentSort=function(D){Fe=D},this.getClearColor=function(D){return D.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(D=!0,K=!0,ne=!0){let $=0;if(D){let ee=!1;if(O!==null){let ve=O.texture.format;ee=m.has(ve)}if(ee){let ve=O.texture.type,Pe=A.has(ve),be=U.getClearColor(),Te=U.getClearAlpha(),Oe=be.r,tt=be.g,ft=be.b;Pe?(_[0]=Oe,_[1]=tt,_[2]=ft,_[3]=Te,Q.clearBufferuiv(Q.COLOR,0,_)):(y[0]=Oe,y[1]=tt,y[2]=ft,y[3]=Te,Q.clearBufferiv(Q.COLOR,0,y))}else $|=Q.COLOR_BUFFER_BIT}K&&($|=Q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ne&&($|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&Q.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(D){D.setRenderer(this),C=D},this.dispose=function(){t.removeEventListener("webglcontextlost",We,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",we,!1),U.dispose(),_e.dispose(),se.dispose(),Ge.dispose(),Me.dispose(),N.dispose(),oe.dispose(),Y.dispose(),ue.dispose(),Re.dispose(),ie.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",yh),Ae.removeEventListener("sessionend",Mh),is.stop()};function We(D){D.preventDefault(),pa("WebGLRenderer: Context Lost."),T=!0}function at(){pa("WebGLRenderer: Context Restored."),T=!1;let D=bt.autoReset,K=X.enabled,ne=X.autoUpdate,$=X.needsUpdate,ee=X.type;$e(),bt.autoReset=D,X.enabled=K,X.autoUpdate=ne,X.needsUpdate=$,X.type=ee}function we(D){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Bt(D){let K=D.target;K.removeEventListener("dispose",Bt),tn(K)}function tn(D){Li(D),Me.remove(D)}function Li(D){let K=Me.get(D).programs;K!==void 0&&(K.forEach(function(ne){ie.releaseProgram(ne)}),D.isShaderMaterial&&ie.releaseShaderCache(D))}this.renderBufferDirect=function(D,K,ne,$,ee,ve){K===null&&(K=Se);let Pe=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,be=bm(D,K,ne,$,ee);ce.setMaterial($,Pe);let Te=ne.index,Oe=1;if($.wireframe===!0){if(Te=Y.getWireframeAttribute(ne),Te===void 0)return;Oe=2}let tt=ne.drawRange,ft=ne.attributes.position,Le=tt.start*Oe,pt=(tt.start+tt.count)*Oe;ve!==null&&(Le=Math.max(Le,ve.start*Oe),pt=Math.min(pt,(ve.start+ve.count)*Oe)),Te!==null?(Le=Math.max(Le,0),pt=Math.min(pt,Te.count)):ft!=null&&(Le=Math.max(Le,0),pt=Math.min(pt,ft.count));let Kt=pt-Le;if(Kt<0||Kt===1/0)return;ue.setup(ee,$,be,ne,Te);let Pt,Dt=te;if(Te!==null&&(Pt=B.get(Te),Dt=pe,Dt.setIndex(Pt)),ee.isMesh)$.wireframe===!0?(ce.setLineWidth($.wireframeLinewidth*Ue()),Dt.setMode(Q.LINES)):Dt.setMode(Q.TRIANGLES);else if(ee.isLine){let cn=$.linewidth;cn===void 0&&(cn=1),ce.setLineWidth(cn*Ue()),ee.isLineSegments?Dt.setMode(Q.LINES):ee.isLineLoop?Dt.setMode(Q.LINE_LOOP):Dt.setMode(Q.LINE_STRIP)}else ee.isPoints?Dt.setMode(Q.POINTS):ee.isSprite&&Dt.setMode(Q.TRIANGLES);if(ee.isBatchedMesh)if(Ve.get("WEBGL_multi_draw"))Dt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{let cn=ee._multiDrawStarts,Ne=ee._multiDrawCounts,An=ee._multiDrawCount,Et=Te?B.get(Te).bytesPerElement:1,ss=Me.get($).currentProgram.getUniforms();for(let ln=0;ln<An;ln++)ss.setValue(Q,"_gl_DrawID",ln),Dt.render(cn[ln]/Et,Ne[ln])}else if(ee.isInstancedMesh)Dt.renderInstances(Le,Kt,ee.count);else if(ne.isInstancedBufferGeometry){let cn=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Ne=Math.min(ne.instanceCount,cn);Dt.renderInstances(Le,Kt,Ne)}else Dt.render(Le,Kt)};function vh(D,K,ne,$){C!==null&&D.isNodeMaterial&&C.setObject($,D),dt===!0&&k.setState(D,ne,!1),D.transparent===!0&&D.side===Rt&&D.forceSinglePass===!1?(D.side=Wt,D.needsUpdate=!0,jr(D,K,$),D.side=Sn,D.needsUpdate=!0,jr(D,K,$),D.side=Rt):jr(D,K,$)}this.compile=function(D,K,ne=null){ne===null&&(ne=D),C!==null&&C.renderStart(D,K,ne),E=se.get(ne),E.init(K),b.push(E),ne.traverseVisible(function(ee){ee.isLight&&ee.layers.test(K.layers)&&(E.pushLight(ee),ee.castShadow&&E.pushShadow(ee))}),D!==ne&&D.traverseVisible(function(ee){ee.isLight&&ee.layers.test(K.layers)&&(E.pushLight(ee),ee.castShadow&&E.pushShadow(ee))}),E.setupLights(),C!==null&&C.updateLights(E.state.lightsArray),It=this.localClippingEnabled,dt=k.init(this.clippingPlanes,It),dt===!0&&k.setGlobalState(this.clippingPlanes,K),C!==null&&X.render(E.state.shadowsArray,ne,K);let $=new Set;return D.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;let ve=ee.material;if(ve)if(Array.isArray(ve))for(let Pe=0;Pe<ve.length;Pe++){let be=ve[Pe];vh(be,ne,K,ee),$.add(be)}else vh(ve,ne,K,ee),$.add(ve)}),E=b.pop(),C!==null&&C.renderEnd(),$},this.compileAsync=function(D,K,ne=null){let $=this.compile(D,K,ne);return new Promise(ee=>{function ve(){if($.forEach(function(Pe){let Te=Me.get(Pe).currentProgram;(Te===void 0||Te.isReady())&&$.delete(Pe)}),$.size===0){ee(D);return}setTimeout(ve,10)}Ve.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Jc=null;function _m(D){Jc&&Jc(D)}function yh(){is.stop()}function Mh(){is.start()}let is=new Pf;is.setAnimationLoop(_m),typeof self<"u"&&is.setContext(self),this.setAnimationLoop=function(D){Jc=D,Ae.setAnimationLoop(D),D===null?is.stop():is.start()},Ae.addEventListener("sessionstart",yh),Ae.addEventListener("sessionend",Mh),this.render=function(D,K){if(K!==void 0&&K.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;C!==null&&C.renderStart(D,K);let ne=Ae.enabled===!0&&Ae.isPresenting===!0,$=w!==null&&(O===null||ne)&&w.begin(S,O);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(K),K=Ae.getCamera()),D.isScene===!0&&D.onBeforeRender(S,D,K,O),E=se.get(D,b.length),E.init(K),E.state.textureUnits=Ge.getTextureUnits(),b.push(E),rt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),K.isArrayCamera?mt.setFromArrayCamera(K):He.setFromProjectionMatrix(rt,Ln,K.reversedDepth),It=this.localClippingEnabled,dt=k.init(this.clippingPlanes,It),M=_e.get(D,x.length),M.init(),x.push(M),this.info.render.frame++,Ae.enabled===!0&&Ae.isPresenting===!0){let Pe=S.xr.getDepthSensingMesh();Pe!==null&&Yc(Pe,K,-1/0,S.sortObjects)}Yc(D,K,0,S.sortObjects),M.finish(),C!==null&&C.updateLights(E.state.lightsArray),S.sortObjects===!0&&M.sort(me,Fe),Qe=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,Qe&&U.addToRenderList(M,D),this.info.autoReset===!0&&this.info.reset(),dt===!0&&k.beginShadows();let ee=E.state.shadowsArray;if(X.render(ee,D,K),dt===!0&&k.endShadows(),($&&w.hasRenderPass())===!1){let Pe=M.opaque,be=M.transmissive;if(E.setupLights(),K.isArrayCamera){let Te=K.cameras;if(be.length>0)for(let Oe=0,tt=Te.length;Oe<tt;Oe++){let ft=Te[Oe];Sh(Pe,be,D,ft)}Qe&&U.render(D);for(let Oe=0,tt=Te.length;Oe<tt;Oe++){let ft=Te[Oe];Eh(M,D,ft,ft.viewport)}}else be.length>0&&Sh(Pe,be,D,K),Qe&&U.render(D),Eh(M,D,K)}O!==null&&z===0&&(Ge.updateMultisampleRenderTarget(O),Ge.updateRenderTargetMipmap(O)),$&&w.end(S),D.isScene===!0&&D.onAfterRender(S,D,K),ue.resetDefaultState(),G=-1,V=null,b.pop(),b.length>0?(E=b[b.length-1],Ge.setTextureUnits(E.state.textureUnits),dt===!0&&k.setGlobalState(S.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?M=x[x.length-1]:M=null,C!==null&&C.renderEnd()};function Yc(D,K,ne,$){if(D.visible===!1)return;if(D.layers.test(K.layers)){if(D.isGroup)ne=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(K);else if(D.isLight)E.pushLight(D),D.castShadow&&E.pushShadow(D);else if(D.isSprite){let Pe=K.isArrayCamera?mt:He;if(!D.frustumCulled||D.intersectsFrustum(Pe)){$&&xt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(rt);let be=oe.update(D),Te=D.material;Te.visible&&M.push(D,be,Te,ne,xt.z,null,K)}}else if(D.isMesh||D.isLine||D.isPoints){let Pe=K.isArrayCamera?mt:He;if(!D.frustumCulled||D.intersectsFrustum(Pe)){let be=oe.update(D),Te=D.material;if($&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),xt.copy(D.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),xt.copy(be.boundingSphere.center)),xt.applyMatrix4(D.matrixWorld).applyMatrix4(rt)),Array.isArray(Te)){let Oe=be.groups;for(let tt=0,ft=Oe.length;tt<ft;tt++){let Le=Oe[tt],pt=Te[Le.materialIndex];pt&&pt.visible&&M.push(D,be,pt,ne,xt.z,Le,K)}}else Te.visible&&M.push(D,be,Te,ne,xt.z,null,K)}}}let ve=D.children;for(let Pe=0,be=ve.length;Pe<be;Pe++)Yc(ve[Pe],K,ne,$)}function Eh(D,K,ne,$){let{opaque:ee,transmissive:ve,transparent:Pe}=D;E.setupLightsView(ne),dt===!0&&k.setGlobalState(S.clippingPlanes,ne),$&&ce.viewport(H.copy($)),ee.length>0&&ja(ee,K,ne),ve.length>0&&ja(ve,K,ne),Pe.length>0&&ja(Pe,K,ne),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function Sh(D,K,ne,$){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[$.id]===void 0){let Le=Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[$.id]=new Ot(1,1,{generateMipmaps:!0,type:Le?yt:Ke,minFilter:Qt,samples:Math.max(4,Xe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ot.workingColorSpace})}let ve=E.state.transmissionRenderTarget[$.id],Pe=$.viewport||H;ve.setSize(Pe.z*S.transmissionResolutionScale,Pe.w*S.transmissionResolutionScale);let be=S.getRenderTarget(),Te=S.getActiveCubeFace(),Oe=S.getActiveMipmapLevel();S.setRenderTarget(ve),S.getClearColor(W),j=S.getClearAlpha(),j<1&&S.setClearColor(16777215,.5),S.clear(),Qe&&U.render(ne);let tt=S.toneMapping;S.toneMapping=ai;let ft=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),E.setupLightsView($),dt===!0&&k.setGlobalState(S.clippingPlanes,$),ja(D,ne,$),Ge.updateMultisampleRenderTarget(ve),Ge.updateRenderTargetMipmap(ve),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let pt=0,Kt=K.length;pt<Kt;pt++){let Pt=K[pt],{object:Dt,geometry:cn,material:Ne,group:An}=Pt;if(Ne.side===Rt&&Dt.layers.test($.layers)){let Et=Ne.side;Ne.side=Wt,Ne.needsUpdate=!0,wh(Dt,ne,$,cn,Ne,An),Ne.side=Et,Ne.needsUpdate=!0,Le=!0}}Le===!0&&(Ge.updateMultisampleRenderTarget(ve),Ge.updateRenderTargetMipmap(ve))}S.setRenderTarget(be,Te,Oe),S.setClearColor(W,j),ft!==void 0&&($.viewport=ft),S.toneMapping=tt}function ja(D,K,ne){let $=K.isScene===!0?K.overrideMaterial:null;for(let ee=0,ve=D.length;ee<ve;ee++){let Pe=D[ee],{object:be,geometry:Te,group:Oe}=Pe,tt=Pe.material;tt.allowOverride===!0&&$!==null&&(tt=$),be.layers.test(ne.layers)&&wh(be,K,ne,Te,tt,Oe)}}function wh(D,K,ne,$,ee,ve){C!==null&&ee.isNodeMaterial&&C.setObject(D,ee),D.onBeforeRender(S,K,ne,$,ee,ve),D.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ee.onBeforeRender(S,K,ne,$,D,ve),ee.transparent===!0&&ee.side===Rt&&ee.forceSinglePass===!1?(ee.side=Wt,ee.needsUpdate=!0,S.renderBufferDirect(ne,K,$,ee,D,ve),ee.side=Sn,ee.needsUpdate=!0,S.renderBufferDirect(ne,K,$,ee,D,ve),ee.side=Rt):S.renderBufferDirect(ne,K,$,ee,D,ve),D.onAfterRender(S,K,ne,$,ee,ve)}function Ch(D){let K=0;for(let ne of D)ne.texture!==null&&K++;return K}function jr(D,K,ne){K.isScene!==!0&&(K=Se);let $=Me.get(D),ee=E.state.lights,ve=E.state.shadowsArray,Pe=ee.state.version,be=ie.getParameters(D,ee.state,ve,K,ne,E.state.lightProbeGridArray),Te=ie.getProgramCacheKey(be),Oe=$.programs;$.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?K.environment:null,$.fog=K.fog;let tt=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;$.envMap=N.get(D.envMap||$.environment,tt),$.envMapRotation=$.environment!==null&&D.envMap===null?K.environmentRotation:D.envMapRotation,Oe===void 0&&(D.addEventListener("dispose",Bt),Oe=new Map,$.programs=Oe,$.programVariants=new Map);let ft=Oe.get(Te);if(ft!==void 0){if($.currentProgram===ft&&$.lightsStateVersion===Pe)return Th(D,be),ft}else be.uniforms=ie.getUniforms(D),C!==null&&D.isNodeMaterial&&C.build(D,ne,be),D.onBeforeCompile(be,S),ft=ie.acquireProgram(be,Te),Oe.set(Te,ft),$.uniforms=be.uniforms;let Le=$.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Le.clippingPlanes=k.uniform),Th(D,be),$.needsLights=ym(D),$.lightsStateVersion=Pe,$.needsLights&&(Le.ambientLightColor.value=ee.state.ambient,Le.lightProbe.value=ee.state.probe,Le.sunLights.value=ee.state.sun,Le.sunLightShadows.value=ee.state.sunShadow,Le.directionalLights.value=ee.state.directional,Le.directionalLightShadows.value=ee.state.directionalShadow,Le.spotLights.value=ee.state.spot,Le.spotLightShadows.value=ee.state.spotShadow,Le.rectAreaLights.value=ee.state.rectArea,Le.ltc_1.value=ee.state.rectAreaLTC1,Le.ltc_2.value=ee.state.rectAreaLTC2,Le.pointLights.value=ee.state.point,Le.pointLightShadows.value=ee.state.pointShadow,Le.hemisphereLights.value=ee.state.hemi,Le.sunShadowMatrix.value=ee.state.sunShadowMatrix,Le.sunShadowCascade.value=ee.state.sunShadowCascade,Le.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Le.spotLightMatrix.value=ee.state.spotLightMatrix,Le.spotLightMap.value=ee.state.spotLightMap,Le.pointShadowMatrix.value=ee.state.pointShadowMatrix),$.numLightProbeGrids=Ch(E.state.lightProbeGridArray),$.currentProgram=ft,$.uniformsList=null,ft}function xm(D,K,ne,$,ee){let ve=Me.get(D),Pe=ve.currentProgram.id+","+$+","+ee,be=ve.programVariants.get(Pe);return be===void 0?(be=jr(D,K,ne),ve.programVariants.set(Pe,be)):(ve.currentProgram=be,ve.uniformsList=null,ve.outputColorSpace=$,ve.toneMapping=ee),be}function Ih(D){if(D.uniformsList===null){let K=D.currentProgram.getUniforms();D.uniformsList=Hr.seqWithValue(K.seq,D.uniforms)}return D.uniformsList}function Th(D,K){let ne=Me.get(D);ne.outputColorSpace=K.outputColorSpace,ne.batching=K.batching,ne.batchingColor=K.batchingColor,ne.instancing=K.instancing,ne.instancingColor=K.instancingColor,ne.instancingMorph=K.instancingMorph,ne.skinning=K.skinning,ne.morphTargets=K.morphTargets,ne.morphNormals=K.morphNormals,ne.morphColors=K.morphColors,ne.morphTargetsCount=K.morphTargetsCount,ne.numClippingPlanes=K.numClippingPlanes,ne.numIntersection=K.numClipIntersection,ne.vertexAlphas=K.vertexAlphas,ne.vertexTangents=K.vertexTangents,ne.toneMapping=K.toneMapping}function bm(D,K,ne,$,ee){K.isScene!==!0&&(K=Se),Ge.resetTextureUnits();let ve=K.fog,Pe=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?K.environment:null,be=O===null?S.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:ot.workingColorSpace,Te=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Oe=N.get($.envMap||Pe,Te),tt=$.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,ft=!!ne.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Le=!!ne.morphAttributes.position,pt=!!ne.morphAttributes.normal,Kt=!!ne.morphAttributes.color,Pt=ai;$.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Pt=S.toneMapping);let Dt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,cn=Dt!==void 0?Dt.length:0,Ne=Me.get($),An=E.state.lights;if(dt===!0&&(It===!0||D!==V)){let Ut=D===V&&$.id===G;k.setState($,D,Ut)}let Et=!1,ss=!1;$.version===Ne.__version?Ne.needsLights&&Ne.lightsStateVersion!==An.state.version||ee.isBatchedMesh&&Ne.batching===!1||!ee.isBatchedMesh&&Ne.batching===!0||ee.isBatchedMesh&&Ne.batchingColor===!0&&ee._colorsTexture===null||ee.isBatchedMesh&&Ne.batchingColor===!1&&ee._colorsTexture!==null||ee.isInstancedMesh&&Ne.instancing===!1||!ee.isInstancedMesh&&Ne.instancing===!0||ee.isSkinnedMesh&&Ne.skinning===!1||!ee.isSkinnedMesh&&Ne.skinning===!0||ee.isInstancedMesh&&Ne.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Ne.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Ne.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Ne.instancingMorph===!1&&ee.morphTexture!==null||Ne.envMap!==Oe||$.fog===!0&&Ne.fog!==ve||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==k.numPlanes||Ne.numIntersection!==k.numIntersection)||Ne.vertexAlphas!==tt||Ne.vertexTangents!==ft||Ne.morphTargets!==Le||Ne.morphNormals!==pt||Ne.morphColors!==Kt||Ne.morphTargetsCount!==cn||Ne.numLightProbeGrids!==Ch(E.state.lightProbeGridArray)?Et=!0:(Ne.outputColorSpace!==be||Ne.toneMapping!==Pt)&&(ss=!0):(Et=!0,Ne.__version=$.version);let ln=Ne.currentProgram;(Et===!0||ss===!0)&&(ln=ss===!0?xm($,K,ee,be,Pt):jr($,K,ee),C&&$.isNodeMaterial&&C.onUpdateProgram($,ln,Ne));let Za=!1,Ni=!1,rs=!1,vt=ln.getUniforms(),on=Ne.uniforms;if(ce.useProgram(ln.program)&&(Za=!0,Ni=!0,rs=!0),$.id!==G&&(G=$.id,Ni=!0),Za||V!==D){ce.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),vt.setValue(Q,"projectionMatrix",D.projectionMatrix),vt.setValue(Q,"viewMatrix",D.matrixWorldInverse);let nn=vt.map.cameraPosition;nn!==void 0&&nn.setValue(Q,Gt.setFromMatrixPosition(D.matrixWorld)),Xe.logarithmicDepthBuffer&&vt.setValue(Q,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&vt.setValue(Q,"isOrthographic",D.isOrthographicCamera===!0),V!==D&&(V=D,Ni=!0,rs=!0)}if(Ne.needsLights&&(An.state.sunShadowMap.length>0&&vt.setValue(Q,"sunShadowMap",An.state.sunShadowMap,Ge),An.state.directionalShadowMap.length>0&&vt.setValue(Q,"directionalShadowMap",An.state.directionalShadowMap,Ge),An.state.spotShadowMap.length>0&&vt.setValue(Q,"spotShadowMap",An.state.spotShadowMap,Ge),An.state.pointShadowMap.length>0&&vt.setValue(Q,"pointShadowMap",An.state.pointShadowMap,Ge)),ee.isSkinnedMesh){vt.setOptional(Q,ee,"bindMatrix"),vt.setOptional(Q,ee,"bindMatrixInverse");let Ut=ee.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),vt.setValue(Q,"boneTexture",Ut.boneTexture,Ge))}ee.isBatchedMesh&&(vt.setOptional(Q,ee,"batchingTexture"),vt.setValue(Q,"batchingTexture",ee._matricesTexture,Ge),vt.setOptional(Q,ee,"batchingIdTexture"),vt.setValue(Q,"batchingIdTexture",ee._indirectTexture,Ge),vt.setOptional(Q,ee,"batchingColorTexture"),ee._colorsTexture!==null&&vt.setValue(Q,"batchingColorTexture",ee._colorsTexture,Ge));let Vn=ne.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&J.update(ee,ne,ln),(Ni||Ne.receiveShadow!==ee.receiveShadow)&&(Ne.receiveShadow=ee.receiveShadow,vt.setValue(Q,"receiveShadow",ee.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&K.environment!==null&&(on.envMapIntensity.value=K.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=vv()),Ni){if(vt.setValue(Q,"toneMappingExposure",S.toneMappingExposure),Ne.needsLights&&vm(on,rs),ve&&$.fog===!0&&he.refreshFogUniforms(on,ve),he.refreshMaterialUniforms(on,$,ae,le,E.state.transmissionRenderTarget[D.id]),Ne.needsLights&&Ne.numLightProbeGrids>0){let Ut=v,nn=0;for(let hi of E.state.lightProbeGridArray)hi.texture!==null&&(Ut.textures[nn]=hi.texture,Ut.min[nn]=hi.boundingBox.min,Ut.max[nn]=hi.boundingBox.max,Ut.resolution[nn]=hi.resolution,nn++);for(let hi in Ut)Ut[hi].length=nn;on.probesSH.value=Ut.textures,on.probesMin.value=Ut.min,on.probesMax.value=Ut.max,on.probesResolution.value=Ut.resolution}Hr.upload(Q,Ih(Ne),on,Ge)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Hr.upload(Q,Ih(Ne),on,Ge),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&vt.setValue(Q,"center",ee.center),vt.setValue(Q,"modelViewMatrix",ee.modelViewMatrix),vt.setValue(Q,"normalMatrix",ee.normalMatrix),vt.setValue(Q,"modelMatrix",ee.matrixWorld),$.uniformsGroups!==void 0){let Ut=$.uniformsGroups;for(let nn=0,hi=Ut.length;nn<hi;nn++){let Bh=Ut[nn];Re.update(Bh,ln),Re.bind(Bh,ln)}}return ln}function vm(D,K){D.ambientLightColor.needsUpdate=K,D.lightProbe.needsUpdate=K,D.sunLights.needsUpdate=K,D.sunLightShadows.needsUpdate=K,D.directionalLights.needsUpdate=K,D.directionalLightShadows.needsUpdate=K,D.pointLights.needsUpdate=K,D.pointLightShadows.needsUpdate=K,D.spotLights.needsUpdate=K,D.spotLightShadows.needsUpdate=K,D.rectAreaLights.needsUpdate=K,D.hemisphereLights.needsUpdate=K}function ym(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(D,K,ne){let $=Me.get(D);$.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Me.get(D.texture).__webglTexture=K,Me.get(D.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:ne,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,K){let ne=Me.get(D);ne.__webglFramebuffer=K,ne.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(D,K=0,ne=0){O=D,L=K,z=ne;let $=null,ee=!1,ve=!1;if(D){let be=Me.get(D);if(be.__useDefaultFramebuffer!==void 0){ce.bindFramebuffer(Q.FRAMEBUFFER,be.__webglFramebuffer),H.copy(D.viewport),q.copy(D.scissor),Z=D.scissorTest,ce.viewport(H),ce.scissor(q),ce.setScissorTest(Z),G=-1;return}else if(be.__webglFramebuffer===void 0)Ge.setupRenderTarget(D);else if(be.__hasExternalTextures)Ge.rebindTextures(D,Me.get(D.texture).__webglTexture,Me.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){let tt=D.depthTexture;if(be.__boundDepthTexture!==tt){if(tt!==null&&Me.has(tt)&&(D.width!==tt.image.width||D.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(D)}}let Te=D.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ve=!0);let Oe=Me.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Oe[K])?$=Oe[K][ne]:$=Oe[K],ee=!0):D.samples>0&&Ge.useMultisampledRTT(D)===!1?$=Me.get(D).__webglMultisampledFramebuffer:Array.isArray(Oe)?$=Oe[ne]:$=Oe,H.copy(D.viewport),q.copy(D.scissor),Z=D.scissorTest}else H.copy(xe).multiplyScalar(ae).floor(),q.copy(Ie).multiplyScalar(ae).floor(),Z=qe;if(ne!==0&&($=F),ce.bindFramebuffer(Q.FRAMEBUFFER,$)&&ce.drawBuffers(D,$),ce.viewport(H),ce.scissor(q),ce.setScissorTest(Z),ee){let be=Me.get(D.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+K,be.__webglTexture,ne)}else if(ve){let be=K;for(let Te=0;Te<D.textures.length;Te++){let Oe=Me.get(D.textures[Te]);Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+Te,Oe.__webglTexture,ne,be)}}else if(D!==null&&ne!==0){let be=Me.get(D.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,be.__webglTexture,ne)}G=-1};function Rh(D){let K=Me.get(D);return(K.__readFormat!==D.format||K.__readType!==D.type)&&(K.__readFormat=D.format,K.__readType=D.type,K.__formatReadable=Xe.textureFormatReadable(D.format),K.__typeReadable=Xe.textureTypeReadable(D.type)),K}this.readRenderTargetPixels=function(D,K,ne,$,ee,ve,Pe,be=0){if(!(D&&D.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Me.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Pe!==void 0&&(Te=Te[Pe],Array.isArray(Te)&&(Te=Te[0])),Te){ce.bindFramebuffer(Q.FRAMEBUFFER,Te);try{let Oe=D.textures[be],tt=Oe.format,ft=Oe.type;D.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+be);let Le=Rh(Oe);if(Le.__formatReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=D.width-$&&ne>=0&&ne<=D.height-ee&&Q.readPixels(K,ne,$,ee,de.convert(tt),de.convert(ft),ve)}finally{let Oe=O!==null?Me.get(O).__webglFramebuffer:null;ce.bindFramebuffer(Q.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(D,K,ne,$,ee,ve,Pe,be=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Me.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Pe!==void 0&&(Te=Te[Pe],Array.isArray(Te)&&(Te=Te[0])),Te)if(K>=0&&K<=D.width-$&&ne>=0&&ne<=D.height-ee){ce.bindFramebuffer(Q.FRAMEBUFFER,Te);let Oe=D.textures[be],tt=Oe.format,ft=Oe.type;D.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+be);let Le=Rh(Oe);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pt=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,pt),Q.bufferData(Q.PIXEL_PACK_BUFFER,ve.byteLength,Q.STREAM_READ),Q.readPixels(K,ne,$,ee,de.convert(tt),de.convert(ft),0),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null);let Kt=O!==null?Me.get(O).__webglFramebuffer:null;ce.bindFramebuffer(Q.FRAMEBUFFER,Kt);let Pt=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await of(Q,Pt,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,pt),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,ve),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null),Q.deleteBuffer(pt),Q.deleteSync(Pt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,K=null,ne=0){let $=Math.pow(2,-ne),ee=Math.floor(D.image.width*$),ve=Math.floor(D.image.height*$),Pe=K!==null?K.x:0,be=K!==null?K.y:0;Ge.setTexture2D(D,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,ne,0,0,Pe,be,ee,ve),ce.unbindTexture()},this.copyTextureToTexture=function(D,K,ne=null,$=null,ee=0,ve=0){let Pe,be,Te,Oe,tt,ft,Le,pt,Kt,Pt=D.isCompressedTexture?D.mipmaps[ve]:D.image;if(ne!==null)Pe=ne.max.x-ne.min.x,be=ne.max.y-ne.min.y,Te=ne.isBox3?ne.max.z-ne.min.z:1,Oe=ne.min.x,tt=ne.min.y,ft=ne.isBox3?ne.min.z:0;else{let vt=Math.pow(2,-ee);Pe=Math.floor(Pt.width*vt),be=Math.floor(Pt.height*vt),D.isDataArrayTexture?Te=Pt.depth:D.isData3DTexture?Te=Math.floor(Pt.depth*vt):Te=1,Oe=0,tt=0,ft=0}$!==null?(Le=$.x,pt=$.y,Kt=$.z):(Le=0,pt=0,Kt=0);let Dt=de.convert(K.format),cn=de.convert(K.type),Ne;K.isData3DTexture?(Ge.setTexture3D(K,0),Ne=Q.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(Ge.setTexture2DArray(K,0),Ne=Q.TEXTURE_2D_ARRAY):(Ge.setTexture2D(K,0),Ne=Q.TEXTURE_2D),ce.activeTexture(Q.TEXTURE0),ce.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,K.flipY),ce.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),ce.pixelStorei(Q.UNPACK_ALIGNMENT,K.unpackAlignment);let An=ce.getParameter(Q.UNPACK_ROW_LENGTH),Et=ce.getParameter(Q.UNPACK_IMAGE_HEIGHT),ss=ce.getParameter(Q.UNPACK_SKIP_PIXELS),ln=ce.getParameter(Q.UNPACK_SKIP_ROWS),Za=ce.getParameter(Q.UNPACK_SKIP_IMAGES);ce.pixelStorei(Q.UNPACK_ROW_LENGTH,Pt.width),ce.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Pt.height),ce.pixelStorei(Q.UNPACK_SKIP_PIXELS,Oe),ce.pixelStorei(Q.UNPACK_SKIP_ROWS,tt),ce.pixelStorei(Q.UNPACK_SKIP_IMAGES,ft);let Ni=D.isDataArrayTexture||D.isData3DTexture,rs=K.isDataArrayTexture||K.isData3DTexture;if(D.isDepthTexture){let vt=Me.get(D),on=Me.get(K),Vn=Me.get(vt.__renderTarget),Ut=Me.get(on.__renderTarget);ce.bindFramebuffer(Q.READ_FRAMEBUFFER,Vn.__webglFramebuffer),ce.bindFramebuffer(Q.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let nn=0;nn<Te;nn++)Ni&&(Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Me.get(D).__webglTexture,ee,ft+nn),Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Me.get(K).__webglTexture,ve,Kt+nn)),Q.blitFramebuffer(Oe,tt,Oe+Pe,tt+be,Le,pt,Le+Pe,pt+be,Q.DEPTH_BUFFER_BIT,Q.NEAREST);ce.bindFramebuffer(Q.READ_FRAMEBUFFER,null),ce.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else if(ee!==0||D.isRenderTargetTexture||Me.has(D)){let vt=Me.get(D),on=Me.get(K);ce.bindFramebuffer(Q.READ_FRAMEBUFFER,I),ce.bindFramebuffer(Q.DRAW_FRAMEBUFFER,P);for(let Vn=0;Vn<Te;Vn++)Ni?Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,vt.__webglTexture,ee,ft+Vn):Q.framebufferTexture2D(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,vt.__webglTexture,ee),rs?Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,on.__webglTexture,ve,Kt+Vn):Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,on.__webglTexture,ve),ee!==0?Q.blitFramebuffer(Oe,tt,Oe+Pe,tt+be,Le,pt,Le+Pe,pt+be,Q.COLOR_BUFFER_BIT,Q.NEAREST):rs?Q.copyTexSubImage3D(Ne,ve,Le,pt,Kt+Vn,Oe,tt,Pe,be):Q.copyTexSubImage2D(Ne,ve,Le,pt,Oe,tt,Pe,be);ce.bindFramebuffer(Q.READ_FRAMEBUFFER,null),ce.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else rs?D.isDataTexture||D.isData3DTexture?Q.texSubImage3D(Ne,ve,Le,pt,Kt,Pe,be,Te,Dt,cn,Pt.data):K.isCompressedArrayTexture?Q.compressedTexSubImage3D(Ne,ve,Le,pt,Kt,Pe,be,Te,Dt,Pt.data):Q.texSubImage3D(Ne,ve,Le,pt,Kt,Pe,be,Te,Dt,cn,Pt):D.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,ve,Le,pt,Pe,be,Dt,cn,Pt.data):D.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,ve,Le,pt,Pt.width,Pt.height,Dt,Pt.data):Q.texSubImage2D(Q.TEXTURE_2D,ve,Le,pt,Pe,be,Dt,cn,Pt);ce.pixelStorei(Q.UNPACK_ROW_LENGTH,An),ce.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Et),ce.pixelStorei(Q.UNPACK_SKIP_PIXELS,ss),ce.pixelStorei(Q.UNPACK_SKIP_ROWS,ln),ce.pixelStorei(Q.UNPACK_SKIP_IMAGES,Za),ve===0&&K.generateMipmaps===!0&&K.mipmapsAutoUpdate===!0&&Q.generateMipmap(Ne),ce.unbindTexture()},this.initRenderTarget=function(D){Me.get(D).__webglFramebuffer===void 0&&Ge.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?Ge.setTextureCube(D,0):D.isData3DTexture?Ge.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?Ge.setTexture2DArray(D,0):Ge.setTexture2D(D,0),ce.unbindTexture()},this.resetState=function(){L=0,z=0,O=null,ce.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}});function en(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Ze;c.morphTargetsRelative=o;let l=0;for(let h=0;h<i.length;++h){let d=i[h],u=0,f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==i[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.morphAttributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(t){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=i[u].attributes.position.count}c.setIndex(d)}for(let h in r){let d=Wf(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let g=0;g<a[h].length;++g)f.push(a[h][g][u]);let p=Wf(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}}return c}function Wf(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Mt(a,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let d=c/t;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<t;p++){let g=h.getComponent(u,p);o.setComponent(u+d,p,g)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function Cu(i,e){if(e===tu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Vr||e===Ga){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Vr)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var jn=it(()=>{gt()});function Kf(i){let e=new Map,t=new Map,n=i.clone();return qf(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function qf(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)qf(i.children[n],e.children[n],t)}var Xf=it(()=>{});function yv(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function kt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}function Sv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ht({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Sn})),i.DefaultMaterial}function Us(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ui(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function wv(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let d=e[l];if(n){let u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;a.push(u)}if(s){let u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;o.push(u)}if(r){let u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;c.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],d=l[1],u=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=d),r&&(i.morphAttributes.color=u),i.morphTargetsRelative=!0,i})}function Cv(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Iv(i){let e,t=i.extensions&&i.extensions[ut.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ru(t.attributes):e=i.indices+":"+Ru(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Ru(i.targets[n]);return e}function Ru(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function th(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Tv(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}function Bv(i,e,t){let n=e.attributes,s=new je;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new R(c[0],c[1],c[2]),new R(l[0],l[1],l[2])),o.normalized){let h=th(qr[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new R,c=new R;for(let l=0,h=r.length;l<h;l++){let d=r[l];if(d.POSITION!==void 0){let u=t.json.accessors[d.POSITION],f=u.min,p=u.max;if(f!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),u.normalized){let g=th(qr[u.componentType]);c.multiplyScalar(g)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new dn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Zf(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=eh[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return ot.workingColorSpace!==jt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ot.workingColorSpace}" not supported.`),ui(i,e),Bv(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?wv(i,e.targets,t):i})}var Xr,ut,Bu,Du,Fu,Pu,Lu,Nu,Uu,Ou,ku,Gu,Qu,zu,Vu,Hu,Wu,Ku,qu,Nc,Xu,$f,Ha,Jf,Ju,Yu,ju,Zu,Uc,Mv,$u,Qn,qr,Yf,jf,Iu,eh,ns,Ev,Tu,Rv,nh,ih=it(()=>{gt();jn();Xf();Xr=class extends Fn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Pu(t)}),this.register(function(t){return new Lu(t)}),this.register(function(t){return new Nu(t)}),this.register(function(t){return new Wu(t)}),this.register(function(t){return new Ku(t)}),this.register(function(t){return new qu(t)}),this.register(function(t){return new Ou(t)}),this.register(function(t){return new ku(t)}),this.register(function(t){return new Gu(t)}),this.register(function(t){return new Qu(t)}),this.register(function(t){return new Fu(t)}),this.register(function(t){return new zu(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new Hu(t)}),this.register(function(t){return new Vu(t)}),this.register(function(t){return new Bu(t)}),this.register(function(t){return new Nc(t,ut.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Nc(t,ut.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Xu(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Si.extractUrlBase(e);a=Si.resolveURL(l,this.path)}else a=Si.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Jn(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===$f){try{a[ut.KHR_BINARY_GLTF]=new Ju(e)}catch(d){s&&s(d);return}r=JSON.parse(a[ut.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new nh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let d=this.pluginCallbacks[h](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case ut.KHR_MATERIALS_UNLIT:a[d]=new Du;break;case ut.KHR_DRACO_MESH_COMPRESSION:a[d]=new Yu(r,this.dracoLoader);break;case ut.KHR_TEXTURE_TRANSFORM:a[d]=new ju;break;case ut.KHR_MESH_QUANTIZATION:a[d]=new Zu;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};ut={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Bu=class{constructor(e){this.parser=e,this.name=ut.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new ye(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],jt);let d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Es(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Yn(h),l.distance=d;break;case"spot":l=new ys(h),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),ui(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Du=class{constructor(){this.name=ut.KHR_MATERIALS_UNLIT}getMaterialType(){return Mn}extendParams(e,t,n){let s=[];e.color=new ye(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],jt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,lt))}return Promise.all(s)}},Fu=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Pu=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Ht:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new fe(r,r)}return Promise.all(s)}},Lu=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Ht:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},Nu=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_DISPERSION}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Ht:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Uu=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Ht:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Ou=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SHEEN}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Ht:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new ye(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],jt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,lt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},ku=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Ht:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Gu=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_VOLUME}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Ht:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new ye().setRGB(r[0],r[1],r[2],jt),Promise.all(s)}},Qu=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IOR}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Ht:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},zu=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SPECULAR}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Ht:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new ye().setRGB(r[0],r[1],r[2],jt),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,lt)),Promise.all(s)}},Vu=class{constructor(e){this.parser=e,this.name=ut.EXT_MATERIALS_BUMP}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Ht:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Hu=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Ht:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Wu=class{constructor(e){this.parser=e,this.name=ut.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Ku=class{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},qu=class{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Nc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,d=s.byteStride,u=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,u,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(f),h,d,u,s.mode,s.filter),f})})}else return null}},Xu=class{constructor(e){this.name=ut.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Qn.TRIANGLES&&l.mode!==Qn.TRIANGLE_STRIP&&l.mode!==Qn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),d=h.isGroup?h.children:[h],u=l[0].count,f=[];for(let p of d){let g=new ge,m=new R,A=new Nt,_=new R(1,1,1),y=new On(p.geometry,p.material,u);for(let M=0;M<u;M++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&A.fromBufferAttribute(c.ROTATION,M),c.SCALE&&_.fromBufferAttribute(c.SCALE,M),y.setMatrixAt(M,g.compose(m,A,_));let v=null;for(let M in c)if(M==="_COLOR_0"){let E=c[M];y.instanceColor=new Un(E.array,E.itemSize,E.normalized)}else if(M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"){if(v===null){let x=y.geometry;v=new Ze,v.name=x.name;for(let b in x.attributes)v.setAttribute(b,x.attributes[b]);for(let b in x.morphAttributes)v.morphAttributes[b]=x.morphAttributes[b];x.index!==null&&v.setIndex(x.index),v.morphTargetsRelative=x.morphTargetsRelative;for(let b of x.groups)v.addGroup(b.start,b.count,b.materialIndex);x.boundingBox!==null&&(v.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(v.boundingSphere=x.boundingSphere.clone()),v.drawRange.start=x.drawRange.start,v.drawRange.count=x.drawRange.count,v.userData=Object.assign({},x.userData),y.geometry=v}let E=c[M];v.setAttribute(M,new Un(E.array,E.itemSize,E.normalized))}Ct.prototype.copy.call(y,p),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},$f="glTF",Ha=12,Jf={JSON:1313821514,BIN:5130562},Ju=class{constructor(e){this.name=ut.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ha),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==$f)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Ha,r=new DataView(e,Ha),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===Jf.JSON){let l=new Uint8Array(e,Ha+a,o);this.content=n.decode(l)}else if(c===Jf.BIN){let l=Ha+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Yu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ut.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let d=eh[h]||h.toLowerCase();o[d]=a[h]}for(let h in e.attributes){let d=eh[h]||h.toLowerCase();if(a[h]!==void 0){let u=n.accessors[e.attributes[h]],f=qr[u.componentType];l[d]=f.name,c[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,u){s.decodeDracoFile(h,function(f){for(let p in f.attributes){let g=f.attributes[p],m=c[p];m!==void 0&&(g.normalized=m)}d(f)},o,l,jt,u)})})}},ju=class{constructor(){this.name=ut.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Zu=class{constructor(){this.name=ut.KHR_MESH_QUANTIZATION}},Uc=class extends ri{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,d=(n-t)/h,u=d*d,f=u*d,p=e*l,g=p-l,m=-2*f+3*u,A=f-u,_=1-m,y=A-u+d;for(let v=0;v!==o;v++){let M=a[g+v+o],E=a[g+v+c]*h,x=a[p+v+o],b=a[p+v]*h;r[v]=_*M+y*E+m*x+A*b}return r}},Mv=new Nt,$u=class extends Uc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Mv.fromArray(r).normalize().toArray(r),r}},Qn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},qr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Yf={9728:Tt,9729:At,9984:Rr,9985:Br,9986:Cs,9987:Qt},jf={33071:gn,33648:lr,10497:Yt},Iu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},eh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ns={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ev={CUBICSPLINE:void 0,LINEAR:ds,STEP:hs},Tu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};Rv=new ge,nh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new yv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?(this.textureLoader=new xn(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Na(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Jn(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Us(r,o,s),ui(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ut.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Si.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Iu[s.type],o=qr[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new Mt(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=Iu[s.type],l=qr[s.componentType],h=l.BYTES_PER_ELEMENT,d=h*c,u=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,g,m;if(f&&f!==d){let A=Math.floor(u/f),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+A+":"+s.count,y=t.cache.get(_);y||(g=new l(o,A*f,s.count*f/h),y=new As(g,f/h),t.cache.add(_,y)),m=new Hi(y,c,u%f/h,p)}else o===null?g=new l(s.count*c):g=new l(o,u,s.count*c),m=new Mt(g,c,p);if(s.sparse!==void 0){let A=Iu.SCALAR,_=qr[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,M=new _(a[1],y,s.sparse.count*A),E=new l(a[2],v,s.sparse.count*c);o!==null&&(m=new Mt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let x=0,b=M.length;x<b;x++){let w=M[x];if(m.setX(w,E[x*c]),c>=2&&m.setY(w,E[x*c+1]),c>=3&&m.setZ(w,E[x*c+2]),c>=4&&m.setW(w,E[x*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let u=(r.samplers||{})[a.sampler]||{};return h.magFilter=Yf[u.magFilter]||At,h.minFilter=Yf[u.minFilter]||Qt,h.wrapS=jf[u.wrapS]||Yt,h.wrapT=jf[u.wrapT]||Yt,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Tt&&h.minFilter!==At,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=n.getDependency("bufferView",a.bufferView).then(function(u){return new Promise(function(f,p){t.parse(u,f,p)})});else{if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(c).then(function(u){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(m){let A=new Xt(m);A.needsUpdate=!0,f(A)}),t.load(Si.resolveURL(u,r.path),g,void 0,p)})})}let d=h.then(function(u){return l===!0&&o.revokeObjectURL(c),ui(u,a),u.userData.mimeType=a.mimeType||Tv(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=d,d}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[ut.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[ut.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[ut.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new br,_n.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new xr,_n.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ht}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[ut.KHR_MATERIALS_UNLIT]){let d=s[ut.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),l.push(d.extendParams(o,r,t))}else{let d=r.pbrMetallicRoughness||{};if(o.color=new ye(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],jt),o.opacity=u[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",d.baseColorTexture,lt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Rt);let h=r.alphaMode||Tu.OPAQUE;if(h===Tu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Tu.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Mn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new fe(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==Mn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Mn){let d=r.emissiveFactor;o.emissive=new ye().setRGB(d[0],d[1],d[2],jt)}return r.emissiveTexture!==void 0&&a!==Mn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,lt)),Promise.all(l).then(function(){let d=new a(o);return r.name&&(d.name=r.name),ui(d,r),t.associations.set(d,{materials:e}),r.extensions&&Us(s,d,r),d})}createUniqueName(e){let t=St.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[ut.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Zf(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=Iv(l),d=s[h];if(d)a.push(d.promise);else{let u;l.extensions&&l.extensions[ut.KHR_DRACO_MESH_COMPRESSION]?u=r(l):u=Zf(new Ze,l,t),l.mode===Qn.TRIANGLE_STRIP?u=u.then(f=>Cu(f,Ga)):l.mode===Qn.TRIANGLE_FAN&&(u=u.then(f=>Cu(f,Vr))),s[h]={primitive:l,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?Sv(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],d=[];for(let f=0,p=h.length;f<p;f++){let g=h[f],m=a[f],A,_=l[f];if(m.mode===Qn.TRIANGLES||m.mode===Qn.TRIANGLE_STRIP||m.mode===Qn.TRIANGLE_FAN||m.mode===void 0){let y=r.isSkinnedMesh===!0,v=g.hasAttribute("skinIndex")&&g.hasAttribute("skinWeight");y&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),A=y&&v?new ba(g,_):new De(g,_),A.isSkinnedMesh===!0&&A.normalizeSkinWeights()}else if(m.mode===Qn.LINES)A=new ya(g,_);else if(m.mode===Qn.LINE_STRIP)A=new ms(g,_);else if(m.mode===Qn.LINE_LOOP)A=new Ma(g,_);else if(m.mode===Qn.POINTS)A=new Ea(g,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(A.geometry.morphAttributes).length>0&&Cv(A,r),A.name=t.createUniqueName(r.name||"mesh_"+e),ui(A,r),m.extensions&&Us(s,A,m),t.assignFinalMaterial(A),d.push(A)}for(let f=0,p=d.length;f<p;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&Us(s,d[0],r),d[0];let u=new et;r.extensions&&Us(s,u,r),t.associations.set(u,{meshes:e});for(let f=0,p=d.length;f<p;f++)u.add(d[f]);return u})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Jt(Je.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Ms(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ui(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let d=a[l];if(d){o.push(d);let u=new ge;r!==null&&u.fromArray(r.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new va(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let d=0,u=s.channels.length;d<u;d++){let f=s.channels[d],p=s.samplers[f.sampler],g=f.target,m=g.node,A=s.parameters!==void 0?s.parameters[p.input]:p.input,_=s.parameters!==void 0?s.parameters[p.output]:p.output;g.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",A)),c.push(this.getDependency("accessor",_)),l.push(p),h.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(d){let u=d[0],f=d[1],p=d[2],g=d[3],m=d[4],A=[];for(let y=0,v=u.length;y<v;y++){let M=u[y],E=f[y],x=p[y],b=g[y],w=m[y];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let S=n._createAnimationTracks(M,E,x,b,w);if(S)for(let T=0;T<S.length;T++)A.push(S[T])}let _=new Pa(r,void 0,A);return ui(_,s),_})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],d=l[1],u=l[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,Rv)});for(let f=0,p=d.length;f<p;f++)h.add(d[f]);if(h.userData.pivot!==void 0&&d.length>0){let f=h.userData.pivot,p=d[0];h.pivot=new R().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new _r:l.length>1?h=new et:l.length===1?h=l[0]:h=new Ct,h!==l[0])for(let d=0,u=l.length;d<u;d++)h.add(l[d]);if(r.name&&(h.userData.name=r.name,h.name=a),ui(h,r),r.extensions&&Us(n,h,r),r.matrix!==void 0){let d=new ge;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let d=s.associations.get(h);s.associations.set(h,{...d})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new et;n.name&&(r.name=s.createUniqueName(n.name)),ui(r,n),n.extensions&&Us(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,d=c.length;h<d;h++){let u=c[h];u.parent!==null?r.add(Kf(u)):r.add(u)}let l=h=>{let d=new Map;for(let[u,f]of s.associations)(u instanceof _n||u instanceof Xt)&&d.set(u,f);return h.traverse(u=>{let f=s.associations.get(u);f!=null&&d.set(u,f)}),d};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}ns[r.path]===ns.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(ns[r.path]){case ns.weights:h=yi;break;case ns.rotation:h=Mi;break;case ns.translation:case ns.scale:h=Xi;break;default:n.itemSize===1?h=yi:h=Xi;break}let d=s.interpolation!==void 0?Ev[s.interpolation]:ds,u=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){let g=new h(c[f]+"."+ns[r.path],t.array,u,d);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=th(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Mi?$u:Uc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}});var Oc,ep=it(()=>{Oc=class{constructor(e=4){this.pool=e,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0,this.workerCreator=null}_initWorker(e){if(!this.workers[e]){let t=this.workerCreator();t.addEventListener("message",this._onMessage.bind(this,e)),this.workers[e]=t}}_getIdleWorker(){for(let e=0;e<this.pool;e++)if(!(this.workerStatus&1<<e))return e;return-1}_onMessage(e,t){let n=this.workersResolve[e];if(n&&n(t),this.queue.length){let{resolve:s,msg:r,transfer:a}=this.queue.shift();this.workersResolve[e]=s,this.workers[e].postMessage(r,a)}else this.workerStatus^=1<<e}setWorkerCreator(e){this.workerCreator=e}setWorkerLimit(e){this.pool=e}postMessage(e,t){return new Promise(n=>{let s=this._getIdleWorker();s!==-1?(this._initWorker(s),this.workerStatus|=1<<s,this.workersResolve[s]=n,this.workers[s].postMessage(e,t)):this.queue.push({resolve:n,msg:e,transfer:t})})}dispose(){this.workers.forEach(e=>e.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}});function tp(i){return new TextDecoder().decode(i)}function np(i){let e=new Uint8Array(i.buffer,i.byteOffset,yn.length);if(e[0]!==yn[0]||e[1]!==yn[1]||e[2]!==yn[2]||e[3]!==yn[3]||e[4]!==yn[4]||e[5]!==yn[5]||e[6]!==yn[6]||e[7]!==yn[7]||e[8]!==yn[8]||e[9]!==yn[9]||e[10]!==yn[10]||e[11]!==yn[11])throw new Error("Missing KTX 2.0 identifier.");let t={vkFormat:0,typeSize:1,pixelWidth:0,pixelHeight:0,pixelDepth:0,layerCount:0,faceCount:1,levelCount:0,supercompressionScheme:0,levels:[],dataFormatDescriptor:[{vendorId:0,descriptorType:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],keyValue:{},globalData:null},n=17*Uint32Array.BYTES_PER_ELEMENT,s=new Os(i,yn.length,n,!0);t.vkFormat=s._nextUint32(),t.typeSize=s._nextUint32(),t.pixelWidth=s._nextUint32(),t.pixelHeight=s._nextUint32(),t.pixelDepth=s._nextUint32(),t.layerCount=s._nextUint32(),t.faceCount=s._nextUint32(),t.levelCount=s._nextUint32(),t.supercompressionScheme=s._nextUint32();let r=s._nextUint32(),a=s._nextUint32(),o=s._nextUint32(),c=s._nextUint32(),l=s._nextUint64(),h=s._nextUint64(),d=3*Math.max(t.levelCount,1)*8,u=new Os(i,yn.length+n,d,!0);for(let H=0,q=Math.max(t.levelCount,1);H<q;H++)t.levels.push({levelData:new Uint8Array(i.buffer,i.byteOffset+u._nextUint64(),u._nextUint64()),uncompressedByteLength:u._nextUint64()});let f=new Os(i,r,a,!0);f._skip(4);let p=f._nextUint16(),g=f._nextUint16(),m=f._nextUint16(),A=f._nextUint16(),_={vendorId:p,descriptorType:g,versionNumber:m,colorModel:f._nextUint8(),colorPrimaries:f._nextUint8(),transferFunction:f._nextUint8(),flags:f._nextUint8(),texelBlockDimension:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],bytesPlane:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],samples:[]},y=(A/4-6)/4;for(let H=0;H<y;H++){let q={bitOffset:f._nextUint16(),bitLength:f._nextUint8(),channelType:f._nextUint8(),samplePosition:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],sampleLower:Number.NEGATIVE_INFINITY,sampleUpper:Number.POSITIVE_INFINITY};64&q.channelType?(q.sampleLower=f._nextInt32(),q.sampleUpper=f._nextInt32()):(q.sampleLower=f._nextUint32(),q.sampleUpper=f._nextUint32()),_.samples[H]=q}t.dataFormatDescriptor.length=0,t.dataFormatDescriptor.push(_);let v=new Os(i,o,c,!0);for(;v._offset<c;){let H=v._nextUint32(),q=v._scan(H),Z=tp(q);if(t.keyValue[Z]=v._nextUint8Array(H-q.byteLength-1),Z.match(/^ktx/i)){let W=tp(t.keyValue[Z]);t.keyValue[Z]=W.substring(0,W.lastIndexOf("\0"))}v._skip(H%4?4-H%4:0)}if(h<=0)return t;let M=new Os(i,l,h,!0),E=M._nextUint16(),x=M._nextUint16(),b=M._nextUint32(),w=M._nextUint32(),S=M._nextUint32(),T=M._nextUint32(),C=[];for(let H=0,q=Math.max(t.levelCount,1);H<q;H++)C.push({imageFlags:M._nextUint32(),rgbSliceByteOffset:M._nextUint32(),rgbSliceByteLength:M._nextUint32(),alphaSliceByteOffset:M._nextUint32(),alphaSliceByteLength:M._nextUint32()});let F=l+M._offset,I=F+b,P=I+w,L=P+S,z=new Uint8Array(i.buffer,i.byteOffset+F,b),O=new Uint8Array(i.buffer,i.byteOffset+I,w),G=new Uint8Array(i.buffer,i.byteOffset+P,S),V=new Uint8Array(i.buffer,i.byteOffset+L,T);return t.globalData={endpointCount:E,selectorCount:x,imageDescs:C,endpointsData:z,selectorsData:O,tablesData:G,extendedData:V},t}var Os,bS,yn,ip=it(()=>{Os=class{constructor(e,t,n,s){this._dataView=void 0,this._littleEndian=void 0,this._offset=void 0,this._dataView=new DataView(e.buffer,e.byteOffset+t,n),this._littleEndian=s,this._offset=0}_nextUint8(){let e=this._dataView.getUint8(this._offset);return this._offset+=1,e}_nextUint16(){let e=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,e}_nextUint32(){let e=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint64(){let e=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,e}_nextInt32(){let e=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint8Array(e){let t=new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+this._offset,e);return this._offset+=e,t}_skip(e){return this._offset+=e,this}_scan(e,t=0){let n=this._offset,s=0;for(;this._dataView.getUint8(this._offset)!==t&&s<e;)s++,this._offset++;return s<e&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+n,s)}},bS=new Uint8Array([0]),yn=[171,75,84,88,32,50,48,187,13,10,26,10]});var sh,Di,ah,rh,kc,sp,rp=it(()=>{rh={env:{emscripten_notify_memory_growth:function(i){ah=new Uint8Array(Di.exports.memory.buffer)}}},kc=class{init(){return sh||(sh=typeof fetch<"u"?fetch("data:application/wasm;base64,"+sp).then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,rh)).then(this._init):WebAssembly.instantiate(Buffer.from(sp,"base64"),rh).then(this._init),sh)}_init(e){Di=e.instance,rh.env.emscripten_notify_memory_growth(0)}decode(e,t=0){if(!Di)throw new Error("ZSTDDecoder: Await .init() before decoding.");let n=e.byteLength,s=Di.exports.malloc(n);ah.set(e,s),t=t||Number(Di.exports.ZSTD_findDecompressedSize(s,n));let r=Di.exports.malloc(t),a=Di.exports.ZSTD_decompress(r,t,s,n),o=ah.slice(r,r+a);return Di.exports.free(s),Di.exports.free(r),o}},sp="AGFzbQEAAAABpQEVYAF/AX9gAn9/AGADf39/AX9gBX9/f39/AX9gAX8AYAJ/fwF/YAR/f39/AX9gA39/fwBgBn9/f39/fwF/YAd/f39/f39/AX9gAn9/AX5gAn5+AX5gAABgBX9/f39/AGAGf39/f39/AGAIf39/f39/f38AYAl/f39/f39/f38AYAABf2AIf39/f39/f38Bf2ANf39/f39/f39/f39/fwF/YAF/AX4CJwEDZW52H2Vtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGgABANpaAEFAAAFAgEFCwACAQABAgIFBQcAAwABDgsBAQcAEhMHAAUBDAQEAAANBwQCAgYCBAgDAwMDBgEACQkHBgICAAYGAgQUBwYGAwIGAAMCAQgBBwUGCgoEEQAEBAEIAwgDBQgDEA8IAAcABAUBcAECAgUEAQCAAgYJAX8BQaCgwAILB2AHBm1lbW9yeQIABm1hbGxvYwAoBGZyZWUAJgxaU1REX2lzRXJyb3IAaBlaU1REX2ZpbmREZWNvbXByZXNzZWRTaXplAFQPWlNURF9kZWNvbXByZXNzAEoGX3N0YXJ0ACQJBwEAQQELASQKussBaA8AIAAgACgCBCABajYCBAsZACAAKAIAIAAoAgRBH3F0QQAgAWtBH3F2CwgAIABBiH9LC34BBH9BAyEBIAAoAgQiA0EgTQRAIAAoAggiASAAKAIQTwRAIAAQDQ8LIAAoAgwiAiABRgRAQQFBAiADQSBJGw8LIAAgASABIAJrIANBA3YiBCABIARrIAJJIgEbIgJrIgQ2AgggACADIAJBA3RrNgIEIAAgBCgAADYCAAsgAQsUAQF/IAAgARACIQIgACABEAEgAgv3AQECfyACRQRAIABCADcCACAAQQA2AhAgAEIANwIIQbh/DwsgACABNgIMIAAgAUEEajYCECACQQRPBEAgACABIAJqIgFBfGoiAzYCCCAAIAMoAAA2AgAgAUF/ai0AACIBBEAgAEEIIAEQFGs2AgQgAg8LIABBADYCBEF/DwsgACABNgIIIAAgAS0AACIDNgIAIAJBfmoiBEEBTQRAIARBAWtFBEAgACABLQACQRB0IANyIgM2AgALIAAgAS0AAUEIdCADajYCAAsgASACakF/ai0AACIBRQRAIABBADYCBEFsDwsgAEEoIAEQFCACQQN0ams2AgQgAgsWACAAIAEpAAA3AAAgACABKQAINwAICy8BAX8gAUECdEGgHWooAgAgACgCAEEgIAEgACgCBGprQR9xdnEhAiAAIAEQASACCyEAIAFCz9bTvtLHq9lCfiAAfEIfiUKHla+vmLbem55/fgsdAQF/IAAoAgggACgCDEYEfyAAKAIEQSBGBUEACwuCBAEDfyACQYDAAE8EQCAAIAEgAhBnIAAPCyAAIAJqIQMCQCAAIAFzQQNxRQRAAkAgAkEBSARAIAAhAgwBCyAAQQNxRQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADTw0BIAJBA3ENAAsLAkAgA0F8cSIEQcAASQ0AIAIgBEFAaiIFSw0AA0AgAiABKAIANgIAIAIgASgCBDYCBCACIAEoAgg2AgggAiABKAIMNgIMIAIgASgCEDYCECACIAEoAhQ2AhQgAiABKAIYNgIYIAIgASgCHDYCHCACIAEoAiA2AiAgAiABKAIkNgIkIAIgASgCKDYCKCACIAEoAiw2AiwgAiABKAIwNgIwIAIgASgCNDYCNCACIAEoAjg2AjggAiABKAI8NgI8IAFBQGshASACQUBrIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQALDAELIANBBEkEQCAAIQIMAQsgA0F8aiIEIABJBEAgACECDAELIAAhAgNAIAIgAS0AADoAACACIAEtAAE6AAEgAiABLQACOgACIAIgAS0AAzoAAyABQQRqIQEgAkEEaiICIARNDQALCyACIANJBEADQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADRw0ACwsgAAsMACAAIAEpAAA3AAALQQECfyAAKAIIIgEgACgCEEkEQEEDDwsgACAAKAIEIgJBB3E2AgQgACABIAJBA3ZrIgE2AgggACABKAAANgIAQQALDAAgACABKAIANgAAC/cCAQJ/AkAgACABRg0AAkAgASACaiAASwRAIAAgAmoiBCABSw0BCyAAIAEgAhALDwsgACABc0EDcSEDAkACQCAAIAFJBEAgAwRAIAAhAwwDCyAAQQNxRQRAIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcQ0ACwwBCwJAIAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQhBSAGQQR2IQRBICAAdCIAQQFyIQkgASgCACEPQQAhAiADIQYCQANAIAlBAkggAiAPS3JFBEAgAiEHAkAgCARAA0AgBEH//wNxQf//A0YEQCAHQRhqIQcgBiAQSQR/IAZBAmoiBigAACAFdgUgBUEQaiEFIARBEHYLIQQMAQsLA0AgBEEDcSIIQQNGBEAgBUECaiEFIARBAnYhBCAHQQNqIQcMAQsLIAcgCGoiByAPSw0EIAVBAmohBQNAIAIgB0kEQCANIAJBAXRqQQA7AQAgAkEBaiECDAELCyAGIA5LQQAgBiAFQQN1aiIHIAxLG0UEQCAHKAAAIAVBB3EiBXYhBAwCCyAEQQJ2IQQLIAYhBwsCfyALQX9qIAQgAEF/anEiBiAAQQF0QX9qIgggCWsiEUkNABogBCAIcSIEQQAgESAEIABIG2shBiALCyEIIA0gAkEBdGogBkF/aiIEOwEAIAlBASAGayAEIAZBAUgbayEJA0AgCSAASARAIABBAXUhACALQX9qIQsMAQsLAn8gByAOS0EAIAcgBSAIaiIFQQN1aiIGIAxLG0UEQCAFQQdxDAELIAUgDCIGIAdrQQN0awshBSACQQFqIQIgBEUhCCAGKAAAIAVBH3F2IQQMAQsLQWwgCUEBRyAFQSBKcg0BGiABIAJBf2o2AgAgBiAFQQdqQQN1aiADawwBC0FQCyEAIApBEGokACAACwkAQQFBBSAAGwsMACAAIAEoAAA2AAALqgMBCn8jAEHwAGsiCiQAIAJBAWohDiAAQQhqIQtBgIAEIAVBf2p0QRB1IQxBACECQQEhBkEBIAV0IglBf2oiDyEIA0AgAiAORkUEQAJAIAEgAkEBdCINai8BACIHQf//A0YEQCALIAhBA3RqIAI2AgQgCEF/aiEIQQEhBwwBCyAGQQAgDCAHQRB0QRB1ShshBgsgCiANaiAHOwEAIAJBAWohAgwBCwsgACAFNgIEIAAgBjYCACAJQQN2IAlBAXZqQQNqIQxBACEAQQAhBkEAIQIDQCAGIA5GBEADQAJAIAAgCUYNACAKIAsgAEEDdGoiASgCBCIGQQF0aiICIAIvAQAiAkEBajsBACABIAUgAhAUayIIOgADIAEgAiAIQf8BcXQgCWs7AQAgASAEIAZBAnQiAmooAgA6AAIgASACIANqKAIANgIEIABBAWohAAwBCwsFIAEgBkEBdGouAQAhDUEAIQcDQCAHIA1ORQRAIAsgAkEDdGogBjYCBANAIAIgDGogD3EiAiAISw0ACyAHQQFqIQcMAQsLIAZBAWohBgwBCwsgCkHwAGokAAsjAEIAIAEQCSAAhUKHla+vmLbem55/fkLj3MqV/M7y9YV/fAsQACAAQn43AwggACABNgIACyQBAX8gAARAIAEoAgQiAgRAIAEoAgggACACEQEADwsgABAmCwsfACAAIAEgAi8BABAINgIAIAEQBBogACACQQRqNgIEC0oBAX9BoCAoAgAiASAAaiIAQX9MBEBBiCBBMDYCAEF/DwsCQCAAPwBBEHRNDQAgABBmDQBBiCBBMDYCAEF/DwtBoCAgADYCACABC9cBAQh/Qbp/IQoCQCACKAIEIgggAigCACIJaiIOIAEgAGtLDQBBbCEKIAkgBCADKAIAIgtrSw0AIAAgCWoiBCACKAIIIgxrIQ0gACABQWBqIg8gCyAJQQAQKSADIAkgC2o2AgACQAJAIAwgBCAFa00EQCANIQUMAQsgDCAEIAZrSw0CIAcgDSAFayIAaiIBIAhqIAdNBEAgBCABIAgQDxoMAgsgBCABQQAgAGsQDyEBIAIgACAIaiIINgIEIAEgAGshBAsgBCAPIAUgCEEBECkLIA4hCgsgCgubAgEBfyMAQYABayINJAAgDSADNgJ8AkAgAkEDSwRAQX8hCQwBCwJAAkACQAJAIAJBAWsOAwADAgELIAZFBEBBuH8hCQwEC0FsIQkgBS0AACICIANLDQMgACAHIAJBAnQiAmooAgAgAiAIaigCABA7IAEgADYCAEEBIQkMAwsgASAJNgIAQQAhCQwCCyAKRQRAQWwhCQwCC0EAIQkgC0UgDEEZSHINAUEIIAR0QQhqIQBBACECA0AgAiAATw0CIAJBQGshAgwAAAsAC0FsIQkgDSANQfwAaiANQfgAaiAFIAYQFSICEAMNACANKAJ4IgMgBEsNACAAIA0gDSgCfCAHIAggAxAYIAEgADYCACACIQkLIA1BgAFqJAAgCQsLACAAIAEgAhALGgsQACAALwAAIAAtAAJBEHRyCy8AAn9BuH8gAUEISQ0AGkFyIAAoAAQiAEF3Sw0AGkG4fyAAQQhqIgAgACABSxsLCwkAIAAgATsAAAsDAAELigYBBX8gACAAKAIAIgVBfnE2AgBBACAAIAVBAXZqQYQgKAIAIgQgAEYbIQECQAJAIAAoAgQiAkUNACACKAIAIgNBAXENACACQQhqIgUgA0EBdkF4aiIDQQggA0EISxtnQR9zQQJ0QYAfaiIDKAIARgRAIAMgAigCDDYCAAsgAigCCCIDBEAgAyACKAIMNgIECyACKAIMIgMEQCADIAIoAgg2AgALIAIgAigCACAAKAIAQX5xajYCAEGEICEAAkACQCABRQ0AIAEgAjYCBCABKAIAIgNBAXENASADQQF2QXhqIgNBCCADQQhLG2dBH3NBAnRBgB9qIgMoAgAgAUEIakYEQCADIAEoAgw2AgALIAEoAggiAwRAIAMgASgCDDYCBAsgASgCDCIDBEAgAyABKAIINgIAQYQgKAIAIQQLIAIgAigCACABKAIAQX5xajYCACABIARGDQAgASABKAIAQQF2akEEaiEACyAAIAI2AgALIAIoAgBBAXZBeGoiAEEIIABBCEsbZ0Efc0ECdEGAH2oiASgCACEAIAEgBTYCACACIAA2AgwgAkEANgIIIABFDQEgACAFNgIADwsCQCABRQ0AIAEoAgAiAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAigCACABQQhqRgRAIAIgASgCDDYCAAsgASgCCCICBEAgAiABKAIMNgIECyABKAIMIgIEQCACIAEoAgg2AgBBhCAoAgAhBAsgACAAKAIAIAEoAgBBfnFqIgI2AgACQCABIARHBEAgASABKAIAQQF2aiAANgIEIAAoAgAhAgwBC0GEICAANgIACyACQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgIoAgAhASACIABBCGoiAjYCACAAIAE2AgwgAEEANgIIIAFFDQEgASACNgIADwsgBUEBdkF4aiIBQQggAUEISxtnQR9zQQJ0QYAfaiICKAIAIQEgAiAAQQhqIgI2AgAgACABNgIMIABBADYCCCABRQ0AIAEgAjYCAAsLDgAgAARAIABBeGoQJQsLgAIBA38CQCAAQQ9qQXhxQYQgKAIAKAIAQQF2ayICEB1Bf0YNAAJAQYQgKAIAIgAoAgAiAUEBcQ0AIAFBAXZBeGoiAUEIIAFBCEsbZ0Efc0ECdEGAH2oiASgCACAAQQhqRgRAIAEgACgCDDYCAAsgACgCCCIBBEAgASAAKAIMNgIECyAAKAIMIgFFDQAgASAAKAIINgIAC0EBIQEgACAAKAIAIAJBAXRqIgI2AgAgAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAygCACECIAMgAEEIaiIDNgIAIAAgAjYCDCAAQQA2AgggAkUNACACIAM2AgALIAELtwIBA38CQAJAIABBASAAGyICEDgiAA0AAkACQEGEICgCACIARQ0AIAAoAgAiA0EBcQ0AIAAgA0EBcjYCACADQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgAgAEEIakYEQCABIAAoAgw2AgALIAAoAggiAQRAIAEgACgCDDYCBAsgACgCDCIBBEAgASAAKAIINgIACyACECchAkEAIQFBhCAoAgAhACACDQEgACAAKAIAQX5xNgIAQQAPCyACQQ9qQXhxIgMQHSICQX9GDQIgAkEHakF4cSIAIAJHBEAgACACaxAdQX9GDQMLAkBBhCAoAgAiAUUEQEGAICAANgIADAELIAAgATYCBAtBhCAgADYCACAAIANBAXRBAXI2AgAMAQsgAEUNAQsgAEEIaiEBCyABC7kDAQJ/IAAgA2ohBQJAIANBB0wEQANAIAAgBU8NAiAAIAItAAA6AAAgAEEBaiEAIAJBAWohAgwAAAsACyAEQQFGBEACQCAAIAJrIgZBB00EQCAAIAItAAA6AAAgACACLQABOgABIAAgAi0AAjoAAiAAIAItAAM6AAMgAEEEaiACIAZBAnQiBkHAHmooAgBqIgIQFyACIAZB4B5qKAIAayECDAELIAAgAhAMCyACQQhqIQIgAEEIaiEACwJAAkACQAJAIAUgAU0EQCAAIANqIQEgBEEBRyAAIAJrQQ9Kcg0BA0AgACACEAwgAkEIaiECIABBCGoiACABSQ0ACwwFCyAAIAFLBEAgACEBDAQLIARBAUcgACACa0EPSnINASAAIQMgAiEEA0AgAyAEEAwgBEEIaiEEIANBCGoiAyABSQ0ACwwCCwNAIAAgAhAHIAJBEGohAiAAQRBqIgAgAUkNAAsMAwsgACEDIAIhBANAIAMgBBAHIARBEGohBCADQRBqIgMgAUkNAAsLIAIgASAAa2ohAgsDQCABIAVPDQEgASACLQAAOgAAIAFBAWohASACQQFqIQIMAAALAAsLQQECfyAAIAAoArjgASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigCACACaiAAQQZ2IgFBAnRBsB5qKAIAaiAAQSBxIgBFaiABRSAAQQV2cWoFQbh/CwsdACAAKAKQ4gEQWiAAQQA2AqDiASAAQgA3A5DiAQu1AwEFfyMAQZACayIKJABBuH8hBgJAIAVFDQAgBCwAACIIQf8BcSEHAkAgCEF/TARAIAdBgn9qQQF2IgggBU8NAkFsIQYgB0GBf2oiBUGAAk8NAiAEQQFqIQdBACEGA0AgBiAFTwRAIAUhBiAIIQcMAwUgACAGaiAHIAZBAXZqIgQtAABBBHY6AAAgACAGQQFyaiAELQAAQQ9xOgAAIAZBAmohBgwBCwAACwALIAcgBU8NASAAIARBAWogByAKEFMiBhADDQELIAYhBEEAIQYgAUEAQTQQECEJQQAhBQNAIAQgBkcEQCAAIAZqIggtAAAiAUELSwRAQWwhBgwDBSAJIAFBAnRqIgEgASgCAEEBajYCACAGQQFqIQZBASAILQAAdEEBdSAFaiEFDAILAAsLQWwhBiAFRQ0AIAUQFEEBaiIBQQxLDQAgAyABNgIAQQFBASABdCAFayIDEBQiAXQgA0cNACAAIARqIAFBAWoiADoAACAJIABBAnRqIgAgACgCAEEBajYCACAJKAIEIgBBAkkgAEEBcXINACACIARBAWo2AgAgB0EBaiEGCyAKQZACaiQAIAYLxhEBDH8jAEHwAGsiBSQAQWwhCwJAIANBCkkNACACLwAAIQogAi8AAiEJIAIvAAQhByAFQQhqIAQQDgJAIAMgByAJIApqakEGaiIMSQ0AIAUtAAohCCAFQdgAaiACQQZqIgIgChAGIgsQAw0BIAVBQGsgAiAKaiICIAkQBiILEAMNASAFQShqIAIgCWoiAiAHEAYiCxADDQEgBUEQaiACIAdqIAMgDGsQBiILEAMNASAAIAFqIg9BfWohECAEQQRqIQZBASELIAAgAUEDakECdiIDaiIMIANqIgIgA2oiDiEDIAIhBCAMIQcDQCALIAMgEElxBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgCS0AAyELIAcgBiAFQUBrIAgQAkECdGoiCS8BADsAACAFQUBrIAktAAIQASAJLQADIQogBCAGIAVBKGogCBACQQJ0aiIJLwEAOwAAIAVBKGogCS0AAhABIAktAAMhCSADIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgDS0AAyENIAAgC2oiCyAGIAVB2ABqIAgQAkECdGoiAC8BADsAACAFQdgAaiAALQACEAEgAC0AAyEAIAcgCmoiCiAGIAVBQGsgCBACQQJ0aiIHLwEAOwAAIAVBQGsgBy0AAhABIActAAMhByAEIAlqIgkgBiAFQShqIAgQAkECdGoiBC8BADsAACAFQShqIAQtAAIQASAELQADIQQgAyANaiIDIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgACALaiEAIAcgCmohByAEIAlqIQQgAyANLQADaiEDIAVB2ABqEA0gBUFAaxANciAFQShqEA1yIAVBEGoQDXJFIQsMAQsLIAQgDksgByACS3INAEFsIQsgACAMSw0BIAxBfWohCQNAQQAgACAJSSAFQdgAahAEGwRAIAAgBiAFQdgAaiAIEAJBAnRqIgovAQA7AAAgBUHYAGogCi0AAhABIAAgCi0AA2oiACAGIAVB2ABqIAgQAkECdGoiCi8BADsAACAFQdgAaiAKLQACEAEgACAKLQADaiEADAEFIAxBfmohCgNAIAVB2ABqEAQgACAKS3JFBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgACAJLQADaiEADAELCwNAIAAgCk0EQCAAIAYgBUHYAGogCBACQQJ0aiIJLwEAOwAAIAVB2ABqIAktAAIQASAAIAktAANqIQAMAQsLAkAgACAMTw0AIAAgBiAFQdgAaiAIEAIiAEECdGoiDC0AADoAACAMLQADQQFGBEAgBUHYAGogDC0AAhABDAELIAUoAlxBH0sNACAFQdgAaiAGIABBAnRqLQACEAEgBSgCXEEhSQ0AIAVBIDYCXAsgAkF9aiEMA0BBACAHIAxJIAVBQGsQBBsEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiIAIAYgBUFAayAIEAJBAnRqIgcvAQA7AAAgBUFAayAHLQACEAEgACAHLQADaiEHDAEFIAJBfmohDANAIAVBQGsQBCAHIAxLckUEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwNAIAcgDE0EQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwJAIAcgAk8NACAHIAYgBUFAayAIEAIiAEECdGoiAi0AADoAACACLQADQQFGBEAgBUFAayACLQACEAEMAQsgBSgCREEfSw0AIAVBQGsgBiAAQQJ0ai0AAhABIAUoAkRBIUkNACAFQSA2AkQLIA5BfWohAgNAQQAgBCACSSAFQShqEAQbBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2oiACAGIAVBKGogCBACQQJ0aiIELwEAOwAAIAVBKGogBC0AAhABIAAgBC0AA2ohBAwBBSAOQX5qIQIDQCAFQShqEAQgBCACS3JFBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsDQCAEIAJNBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsCQCAEIA5PDQAgBCAGIAVBKGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBKGogAi0AAhABDAELIAUoAixBH0sNACAFQShqIAYgAEECdGotAAIQASAFKAIsQSFJDQAgBUEgNgIsCwNAQQAgAyAQSSAFQRBqEAQbBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2oiACAGIAVBEGogCBACQQJ0aiICLwEAOwAAIAVBEGogAi0AAhABIAAgAi0AA2ohAwwBBSAPQX5qIQIDQCAFQRBqEAQgAyACS3JFBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsDQCADIAJNBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsCQCADIA9PDQAgAyAGIAVBEGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBEGogAi0AAhABDAELIAUoAhRBH0sNACAFQRBqIAYgAEECdGotAAIQASAFKAIUQSFJDQAgBUEgNgIUCyABQWwgBUHYAGoQCiAFQUBrEApxIAVBKGoQCnEgBUEQahAKcRshCwwJCwAACwALAAALAAsAAAsACwAACwALQWwhCwsgBUHwAGokACALC7UEAQ5/IwBBEGsiBiQAIAZBBGogABAOQVQhBQJAIARB3AtJDQAgBi0ABCEHIANB8ARqQQBB7AAQECEIIAdBDEsNACADQdwJaiIJIAggBkEIaiAGQQxqIAEgAhAxIhAQA0UEQCAGKAIMIgQgB0sNASADQdwFaiEPIANBpAVqIREgAEEEaiESIANBqAVqIQEgBCEFA0AgBSICQX9qIQUgCCACQQJ0aigCAEUNAAsgAkEBaiEOQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgASALaiAKNgIAIAVBAWohBSAKIAxqIQoMAQsLIAEgCjYCAEEAIQUgBigCCCELA0AgBSALRkUEQCABIAUgCWotAAAiDEECdGoiDSANKAIAIg1BAWo2AgAgDyANQQF0aiINIAw6AAEgDSAFOgAAIAVBAWohBQwBCwtBACEBIANBADYCqAUgBEF/cyAHaiEJQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgAyALaiABNgIAIAwgBSAJanQgAWohASAFQQFqIQUMAQsLIAcgBEEBaiIBIAJrIgRrQQFqIQgDQEEBIQUgBCAIT0UEQANAIAUgDk9FBEAgBUECdCIJIAMgBEE0bGpqIAMgCWooAgAgBHY2AgAgBUEBaiEFDAELCyAEQQFqIQQMAQsLIBIgByAPIAogESADIAIgARBkIAZBAToABSAGIAc6AAYgACAGKAIENgIACyAQIQULIAZBEGokACAFC8ENAQt/IwBB8ABrIgUkAEFsIQkCQCADQQpJDQAgAi8AACEKIAIvAAIhDCACLwAEIQYgBUEIaiAEEA4CQCADIAYgCiAMampBBmoiDUkNACAFLQAKIQcgBUHYAGogAkEGaiICIAoQBiIJEAMNASAFQUBrIAIgCmoiAiAMEAYiCRADDQEgBUEoaiACIAxqIgIgBhAGIgkQAw0BIAVBEGogAiAGaiADIA1rEAYiCRADDQEgACABaiIOQX1qIQ8gBEEEaiEGQQEhCSAAIAFBA2pBAnYiAmoiCiACaiIMIAJqIg0hAyAMIQQgCiECA0AgCSADIA9JcQRAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAACAGIAVBQGsgBxACQQF0aiIILQAAIQsgBUFAayAILQABEAEgAiALOgAAIAYgBUEoaiAHEAJBAXRqIggtAAAhCyAFQShqIAgtAAEQASAEIAs6AAAgBiAFQRBqIAcQAkEBdGoiCC0AACELIAVBEGogCC0AARABIAMgCzoAACAGIAVB2ABqIAcQAkEBdGoiCC0AACELIAVB2ABqIAgtAAEQASAAIAs6AAEgBiAFQUBrIAcQAkEBdGoiCC0AACELIAVBQGsgCC0AARABIAIgCzoAASAGIAVBKGogBxACQQF0aiIILQAAIQsgBUEoaiAILQABEAEgBCALOgABIAYgBUEQaiAHEAJBAXRqIggtAAAhCyAFQRBqIAgtAAEQASADIAs6AAEgA0ECaiEDIARBAmohBCACQQJqIQIgAEECaiEAIAkgBUHYAGoQDUVxIAVBQGsQDUVxIAVBKGoQDUVxIAVBEGoQDUVxIQkMAQsLIAQgDUsgAiAMS3INAEFsIQkgACAKSw0BIApBfWohCQNAIAVB2ABqEAQgACAJT3JFBEAgBiAFQdgAaiAHEAJBAXRqIggtAAAhCyAFQdgAaiAILQABEAEgACALOgAAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAASAAQQJqIQAMAQsLA0AgBUHYAGoQBCAAIApPckUEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCwNAIAAgCkkEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCyAMQX1qIQADQCAFQUBrEAQgAiAAT3JFBEAgBiAFQUBrIAcQAkEBdGoiCi0AACEJIAVBQGsgCi0AARABIAIgCToAACAGIAVBQGsgBxACQQF0aiIKLQAAIQkgBUFAayAKLQABEAEgAiAJOgABIAJBAmohAgwBCwsDQCAFQUBrEAQgAiAMT3JFBEAgBiAFQUBrIAcQAkEBdGoiAC0AACEKIAVBQGsgAC0AARABIAIgCjoAACACQQFqIQIMAQsLA0AgAiAMSQRAIAYgBUFAayAHEAJBAXRqIgAtAAAhCiAFQUBrIAAtAAEQASACIAo6AAAgAkEBaiECDAELCyANQX1qIQADQCAFQShqEAQgBCAAT3JFBEAgBiAFQShqIAcQAkEBdGoiAi0AACEKIAVBKGogAi0AARABIAQgCjoAACAGIAVBKGogBxACQQF0aiICLQAAIQogBUEoaiACLQABEAEgBCAKOgABIARBAmohBAwBCwsDQCAFQShqEAQgBCANT3JFBEAgBiAFQShqIAcQAkEBdGoiAC0AACECIAVBKGogAC0AARABIAQgAjoAACAEQQFqIQQMAQsLA0AgBCANSQRAIAYgBUEoaiAHEAJBAXRqIgAtAAAhAiAFQShqIAAtAAEQASAEIAI6AAAgBEEBaiEEDAELCwNAIAVBEGoQBCADIA9PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIAYgBUEQaiAHEAJBAXRqIgAtAAAhAiAFQRBqIAAtAAEQASADIAI6AAEgA0ECaiEDDAELCwNAIAVBEGoQBCADIA5PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIANBAWohAwwBCwsDQCADIA5JBEAgBiAFQRBqIAcQAkEBdGoiAC0AACECIAVBEGogAC0AARABIAMgAjoAACADQQFqIQMMAQsLIAFBbCAFQdgAahAKIAVBQGsQCnEgBUEoahAKcSAFQRBqEApxGyEJDAELQWwhCQsgBUHwAGokACAJC8oCAQR/IwBBIGsiBSQAIAUgBBAOIAUtAAIhByAFQQhqIAIgAxAGIgIQA0UEQCAEQQRqIQIgACABaiIDQX1qIQQDQCAFQQhqEAQgACAET3JFBEAgAiAFQQhqIAcQAkEBdGoiBi0AACEIIAVBCGogBi0AARABIAAgCDoAACACIAVBCGogBxACQQF0aiIGLQAAIQggBUEIaiAGLQABEAEgACAIOgABIABBAmohAAwBCwsDQCAFQQhqEAQgACADT3JFBEAgAiAFQQhqIAcQAkEBdGoiBC0AACEGIAVBCGogBC0AARABIAAgBjoAACAAQQFqIQAMAQsLA0AgACADT0UEQCACIAVBCGogBxACQQF0aiIELQAAIQYgBUEIaiAELQABEAEgACAGOgAAIABBAWohAAwBCwsgAUFsIAVBCGoQChshAgsgBUEgaiQAIAILtgMBCX8jAEEQayIGJAAgBkEANgIMIAZBADYCCEFUIQQCQAJAIANBQGsiDCADIAZBCGogBkEMaiABIAIQMSICEAMNACAGQQRqIAAQDiAGKAIMIgcgBi0ABEEBaksNASAAQQRqIQogBkEAOgAFIAYgBzoABiAAIAYoAgQ2AgAgB0EBaiEJQQEhBANAIAQgCUkEQCADIARBAnRqIgEoAgAhACABIAU2AgAgACAEQX9qdCAFaiEFIARBAWohBAwBCwsgB0EBaiEHQQAhBSAGKAIIIQkDQCAFIAlGDQEgAyAFIAxqLQAAIgRBAnRqIgBBASAEdEEBdSILIAAoAgAiAWoiADYCACAHIARrIQhBACEEAkAgC0EDTQRAA0AgBCALRg0CIAogASAEakEBdGoiACAIOgABIAAgBToAACAEQQFqIQQMAAALAAsDQCABIABPDQEgCiABQQF0aiIEIAg6AAEgBCAFOgAAIAQgCDoAAyAEIAU6AAIgBCAIOgAFIAQgBToABCAEIAg6AAcgBCAFOgAGIAFBBGohAQwAAAsACyAFQQFqIQUMAAALAAsgAiEECyAGQRBqJAAgBAutAQECfwJAQYQgKAIAIABHIAAoAgBBAXYiAyABa0F4aiICQXhxQQhHcgR/IAIFIAMQJ0UNASACQQhqC0EQSQ0AIAAgACgCACICQQFxIAAgAWpBD2pBeHEiASAAa0EBdHI2AgAgASAANgIEIAEgASgCAEEBcSAAIAJBAXZqIAFrIgJBAXRyNgIAQYQgIAEgAkH/////B3FqQQRqQYQgKAIAIABGGyABNgIAIAEQJQsLygIBBX8CQAJAAkAgAEEIIABBCEsbZ0EfcyAAaUEBR2oiAUEESSAAIAF2cg0AIAFBAnRB/B5qKAIAIgJFDQADQCACQXhqIgMoAgBBAXZBeGoiBSAATwRAIAIgBUEIIAVBCEsbZ0Efc0ECdEGAH2oiASgCAEYEQCABIAIoAgQ2AgALDAMLIARBHksNASAEQQFqIQQgAigCBCICDQALC0EAIQMgAUEgTw0BA0AgAUECdEGAH2ooAgAiAkUEQCABQR5LIQIgAUEBaiEBIAJFDQEMAwsLIAIgAkF4aiIDKAIAQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgBGBEAgASACKAIENgIACwsgAigCACIBBEAgASACKAIENgIECyACKAIEIgEEQCABIAIoAgA2AgALIAMgAygCAEEBcjYCACADIAAQNwsgAwvhCwINfwV+IwBB8ABrIgckACAHIAAoAvDhASIINgJcIAEgAmohDSAIIAAoAoDiAWohDwJAAkAgBUUEQCABIQQMAQsgACgCxOABIRAgACgCwOABIREgACgCvOABIQ4gAEEBNgKM4QFBACEIA0AgCEEDRwRAIAcgCEECdCICaiAAIAJqQazQAWooAgA2AkQgCEEBaiEIDAELC0FsIQwgB0EYaiADIAQQBhADDQEgB0EsaiAHQRhqIAAoAgAQEyAHQTRqIAdBGGogACgCCBATIAdBPGogB0EYaiAAKAIEEBMgDUFgaiESIAEhBEEAIQwDQCAHKAIwIAcoAixBA3RqKQIAIhRCEIinQf8BcSEIIAcoAkAgBygCPEEDdGopAgAiFUIQiKdB/wFxIQsgBygCOCAHKAI0QQN0aikCACIWQiCIpyEJIBVCIIghFyAUQiCIpyECAkAgFkIQiKdB/wFxIgNBAk8EQAJAIAZFIANBGUlyRQRAIAkgB0EYaiADQSAgBygCHGsiCiAKIANLGyIKEAUgAyAKayIDdGohCSAHQRhqEAQaIANFDQEgB0EYaiADEAUgCWohCQwBCyAHQRhqIAMQBSAJaiEJIAdBGGoQBBoLIAcpAkQhGCAHIAk2AkQgByAYNwNIDAELAkAgA0UEQCACBEAgBygCRCEJDAMLIAcoAkghCQwBCwJAAkAgB0EYakEBEAUgCSACRWpqIgNBA0YEQCAHKAJEQX9qIgMgA0VqIQkMAQsgA0ECdCAHaigCRCIJIAlFaiEJIANBAUYNAQsgByAHKAJINgJMCwsgByAHKAJENgJIIAcgCTYCRAsgF6chAyALBEAgB0EYaiALEAUgA2ohAwsgCCALakEUTwRAIAdBGGoQBBoLIAgEQCAHQRhqIAgQBSACaiECCyAHQRhqEAQaIAcgB0EYaiAUQhiIp0H/AXEQCCAUp0H//wNxajYCLCAHIAdBGGogFUIYiKdB/wFxEAggFadB//8DcWo2AjwgB0EYahAEGiAHIAdBGGogFkIYiKdB/wFxEAggFqdB//8DcWo2AjQgByACNgJgIAcoAlwhCiAHIAk2AmggByADNgJkAkACQAJAIAQgAiADaiILaiASSw0AIAIgCmoiEyAPSw0AIA0gBGsgC0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdBKGogACgCBBATQQAhBCAHQeAAaiEMIAdB5ABqIQoDQCAHQShqEARBAksgBCAXTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEJIAcoAkggBygCREEDdGopAgAiH0IgiKchCCAeQiCIISAgHUIgiKchAgJAIB9CEIinQf8BcSIDQQJPBEACQCAGRSADQRlJckUEQCAIIAdBKGogA0EgIAcoAixrIg0gDSADSxsiDRAFIAMgDWsiA3RqIQggB0EoahAEGiADRQ0BIAdBKGogAxAFIAhqIQgMAQsgB0EoaiADEAUgCGohCCAHQShqEAQaCyAHKQJUISEgByAINgJUIAcgITcDWAwBCwJAIANFBEAgAgRAIAcoAlQhCAwDCyAHKAJYIQgMAQsCQAJAIAdBKGpBARAFIAggAkVqaiIDQQNGBEAgBygCVEF/aiIDIANFaiEIDAELIANBAnQgB2ooAlQiCCAIRWohCCADQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAg2AlQLICCnIQMgCQRAIAdBKGogCRAFIANqIQMLIAkgC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgAmohAgsgB0EoahAEGiAHIAcoAmggAmoiCSADajYCaCAKIAwgCCAJSxsoAgAhDSAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogB0EoaiAfQhiIp0H/AXEQCCEOIAdB8ABqIARBBHRqIgsgCSANaiAIazYCDCALIAg2AgggCyADNgIEIAsgAjYCACAHIA4gH6dB//8DcWo2AkQgBEEBaiEEDAELCyAEIBdIDQEgEkFgaiEYIAdB4ABqIRogB0HkAGohGyABIQMDQCAHQShqEARBAksgBCAFTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEIIAcoAkggBygCREEDdGopAgAiH0IgiKchCSAeQiCIISAgHUIgiKchDAJAIB9CEIinQf8BcSICQQJPBEACQCAGRSACQRlJckUEQCAJIAdBKGogAkEgIAcoAixrIgogCiACSxsiChAFIAIgCmsiAnRqIQkgB0EoahAEGiACRQ0BIAdBKGogAhAFIAlqIQkMAQsgB0EoaiACEAUgCWohCSAHQShqEAQaCyAHKQJUISEgByAJNgJUIAcgITcDWAwBCwJAIAJFBEAgDARAIAcoAlQhCQwDCyAHKAJYIQkMAQsCQAJAIAdBKGpBARAFIAkgDEVqaiICQQNGBEAgBygCVEF/aiICIAJFaiEJDAELIAJBAnQgB2ooAlQiCSAJRWohCSACQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAk2AlQLICCnIRQgCARAIAdBKGogCBAFIBRqIRQLIAggC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgDGohDAsgB0EoahAEGiAHIAcoAmggDGoiGSAUajYCaCAbIBogCSAZSxsoAgAhHCAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogByAHQShqIB9CGIinQf8BcRAIIB+nQf//A3FqNgJEIAcgB0HwAGogBEEDcUEEdGoiDSkDCCIdNwPIASAHIA0pAwAiHjcDwAECQAJAAkAgBygCvAEiDiAepyICaiIWIBNLDQAgAyAHKALEASIKIAJqIgtqIBhLDQAgEiADayALQSBqTw0BCyAHIAcpA8gBNwMQIAcgBykDwAE3AwggAyASIAdBCGogB0G8AWogEyAPIBUgERAeIQsMAQsgAiADaiEIIAMgDhAHIAJBEU8EQCADQRBqIQIDQCACIA5BEGoiDhAHIAJBEGoiAiAISQ0ACwsgCCAdpyIOayECIAcgFjYCvAEgDiAIIA9rSwRAIA4gCCAVa0sEQEFsIQsMAgsgESACIA9rIgJqIhYgCmogEU0EQCAIIBYgChAPGgwCCyAIIBZBACACaxAPIQggByACIApqIgo2AsQBIAggAmshCCAPIQILIA5BEE8EQCAIIApqIQoDQCAIIAIQByACQRBqIQIgCEEQaiIIIApJDQALDAELAkAgDkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgDkECdCIKQcAeaigCAGoiAhAXIAIgCkHgHmooAgBrIQIgBygCxAEhCgwBCyAIIAIQDAsgCkEJSQ0AIAggCmohCiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAKSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAKSQ0ACwsgCxADBEAgCyEQDAQFIA0gDDYCACANIBkgHGogCWs2AgwgDSAJNgIIIA0gFDYCBCAEQQFqIQQgAyALaiEDDAILAAsLIAQgBUgNASAEIBdrIQtBACEEA0AgCyAFSARAIAcgB0HwAGogC0EDcUEEdGoiAikDCCIdNwPIASAHIAIpAwAiHjcDwAECQAJAAkAgBygCvAEiDCAepyICaiIKIBNLDQAgAyAHKALEASIJIAJqIhBqIBhLDQAgEiADayAQQSBqTw0BCyAHIAcpA8gBNwMgIAcgBykDwAE3AxggAyASIAdBGGogB0G8AWogEyAPIBUgERAeIRAMAQsgAiADaiEIIAMgDBAHIAJBEU8EQCADQRBqIQIDQCACIAxBEGoiDBAHIAJBEGoiAiAISQ0ACwsgCCAdpyIGayECIAcgCjYCvAEgBiAIIA9rSwRAIAYgCCAVa0sEQEFsIRAMAgsgESACIA9rIgJqIgwgCWogEU0EQCAIIAwgCRAPGgwCCyAIIAxBACACaxAPIQggByACIAlqIgk2AsQBIAggAmshCCAPIQILIAZBEE8EQCAIIAlqIQYDQCAIIAIQByACQRBqIQIgCEEQaiIIIAZJDQALDAELAkAgBkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgBkECdCIGQcAeaigCAGoiAhAXIAIgBkHgHmooAgBrIQIgBygCxAEhCQwBCyAIIAIQDAsgCUEJSQ0AIAggCWohBiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAGSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAGSQ0ACwsgEBADDQMgC0EBaiELIAMgEGohAwwBCwsDQCAEQQNHBEAgACAEQQJ0IgJqQazQAWogAiAHaigCVDYCACAEQQFqIQQMAQsLIAcoArwBIQgLQbp/IRAgEyAIayIAIBIgA2tLDQAgAwR/IAMgCCAAEAsgAGoFQQALIAFrIRALIAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY0AAQMyIFEAMiBg0AIANBHzYCfCADIANB/ABqIANB+ABqIAQgBCAFaiAGGyIEIAEgAmoiAiAEaxAVIgUQAw0AIAMoAnwiBkEfSw0AIAMoAngiB0EJTw0AIABBiCBqIAMgBkGAC0GADCAHEBggA0E0NgJ8IAMgA0H8AGogA0H4AGogBCAFaiIEIAIgBGsQFSIFEAMNACADKAJ8IgZBNEsNACADKAJ4IgdBCk8NACAAQZAwaiADIAZBgA1B4A4gBxAYIANBIzYCfCADIANB/ABqIANB+ABqIAQgBWoiBCACIARrEBUiBRADDQAgAygCfCIGQSNLDQAgAygCeCIHQQpPDQAgACADIAZBwBBB0BEgBxAYIAQgBWoiBEEMaiIFIAJLDQAgAiAFayEFQQAhAgNAIAJBA0cEQCAEKAAAIgZBf2ogBU8NAiAAIAJBAnRqQZzQAWogBjYCACACQQFqIQIgBEEEaiEEDAELCyAEIAFrIQgLIANBgAFqJAAgCAtGAQN/IABBCGohAyAAKAIEIQJBACEAA0AgACACdkUEQCABIAMgAEEDdGotAAJBFktqIQEgAEEBaiEADAELCyABQQggAmt0C4YDAQV/Qbh/IQcCQCADRQ0AIAItAAAiBEUEQCABQQA2AgBBAUG4fyADQQFGGw8LAn8gAkEBaiIFIARBGHRBGHUiBkF/Sg0AGiAGQX9GBEAgA0EDSA0CIAUvAABBgP4BaiEEIAJBA2oMAQsgA0ECSA0BIAItAAEgBEEIdHJBgIB+aiEEIAJBAmoLIQUgASAENgIAIAVBAWoiASACIANqIgNLDQBBbCEHIABBEGogACAFLQAAIgVBBnZBI0EJIAEgAyABa0HAEEHQEUHwEiAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBmCBqIABBCGogBUEEdkEDcUEfQQggASABIAZqIAgbIgEgAyABa0GAC0GADEGAFyAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBoDBqIABBBGogBUECdkEDcUE0QQkgASABIAZqIAgbIgEgAyABa0GADUHgDkGQGSAAKAKM4QEgACgCnOIBIAQQHyIAEAMNACAAIAFqIAJrIQcLIAcLrQMBCn8jAEGABGsiCCQAAn9BUiACQf8BSw0AGkFUIANBDEsNABogAkEBaiELIABBBGohCUGAgAQgA0F/anRBEHUhCkEAIQJBASEEQQEgA3QiB0F/aiIMIQUDQCACIAtGRQRAAkAgASACQQF0Ig1qLwEAIgZB//8DRgRAIAkgBUECdGogAjoAAiAFQX9qIQVBASEGDAELIARBACAKIAZBEHRBEHVKGyEECyAIIA1qIAY7AQAgAkEBaiECDAELCyAAIAQ7AQIgACADOwEAIAdBA3YgB0EBdmpBA2ohBkEAIQRBACECA0AgBCALRkUEQCABIARBAXRqLgEAIQpBACEAA0AgACAKTkUEQCAJIAJBAnRqIAQ6AAIDQCACIAZqIAxxIgIgBUsNAAsgAEEBaiEADAELCyAEQQFqIQQMAQsLQX8gAg0AGkEAIQIDfyACIAdGBH9BAAUgCCAJIAJBAnRqIgAtAAJBAXRqIgEgAS8BACIBQQFqOwEAIAAgAyABEBRrIgU6AAMgACABIAVB/wFxdCAHazsBACACQQFqIQIMAQsLCyEFIAhBgARqJAAgBQvjBgEIf0FsIQcCQCACQQNJDQACQAJAAkACQCABLQAAIgNBA3EiCUEBaw4DAwEAAgsgACgCiOEBDQBBYg8LIAJBBUkNAkEDIQYgASgAACEFAn8CQAJAIANBAnZBA3EiCEF+aiIEQQFNBEAgBEEBaw0BDAILIAVBDnZB/wdxIQQgBUEEdkH/B3EhAyAIRQwCCyAFQRJ2IQRBBCEGIAVBBHZB//8AcSEDQQAMAQsgBUEEdkH//w9xIgNBgIAISw0DIAEtAARBCnQgBUEWdnIhBEEFIQZBAAshBSAEIAZqIgogAksNAgJAIANBgQZJDQAgACgCnOIBRQ0AQQAhAgNAIAJBg4ABSw0BIAJBQGshAgwAAAsACwJ/IAlBA0YEQCABIAZqIQEgAEHw4gFqIQIgACgCDCEGIAUEQCACIAMgASAEIAYQXwwCCyACIAMgASAEIAYQXQwBCyAAQbjQAWohAiABIAZqIQEgAEHw4gFqIQYgAEGo0ABqIQggBQRAIAggBiADIAEgBCACEF4MAQsgCCAGIAMgASAEIAIQXAsQAw0CIAAgAzYCgOIBIABBATYCiOEBIAAgAEHw4gFqNgLw4QEgCUECRgRAIAAgAEGo0ABqNgIMCyAAIANqIgBBiOMBakIANwAAIABBgOMBakIANwAAIABB+OIBakIANwAAIABB8OIBakIANwAAIAoPCwJ/AkACQAJAIANBAnZBA3FBf2oiBEECSw0AIARBAWsOAgACAQtBASEEIANBA3YMAgtBAiEEIAEvAABBBHYMAQtBAyEEIAEQIUEEdgsiAyAEaiIFQSBqIAJLBEAgBSACSw0CIABB8OIBaiABIARqIAMQCyEBIAAgAzYCgOIBIAAgATYC8OEBIAEgA2oiAEIANwAYIABCADcAECAAQgA3AAggAEIANwAAIAUPCyAAIAM2AoDiASAAIAEgBGo2AvDhASAFDwsCfwJAAkACQCADQQJ2QQNxQX9qIgRBAksNACAEQQFrDgIAAgELQQEhByADQQN2DAILQQIhByABLwAAQQR2DAELIAJBBEkgARAhIgJBj4CAAUtyDQFBAyEHIAJBBHYLIQIgAEHw4gFqIAEgB2otAAAgAkEgahAQIQEgACACNgKA4gEgACABNgLw4QEgB0EBaiEHCyAHC0sAIABC+erQ0OfJoeThADcDICAAQgA3AxggAELP1tO+0ser2UI3AxAgAELW64Lu6v2J9eAANwMIIABCADcDACAAQShqQQBBKBAQGgviAgICfwV+IABBKGoiASAAKAJIaiECAn4gACkDACIDQiBaBEAgACkDECIEQgeJIAApAwgiBUIBiXwgACkDGCIGQgyJfCAAKQMgIgdCEol8IAUQGSAEEBkgBhAZIAcQGQwBCyAAKQMYQsXP2bLx5brqJ3wLIAN8IQMDQCABQQhqIgAgAk0EQEIAIAEpAAAQCSADhUIbiUKHla+vmLbem55/fkLj3MqV/M7y9YV/fCEDIAAhAQwBCwsCQCABQQRqIgAgAksEQCABIQAMAQsgASgAAK1Ch5Wvr5i23puef34gA4VCF4lCz9bTvtLHq9lCfkL5893xmfaZqxZ8IQMLA0AgACACSQRAIAAxAABCxc/ZsvHluuonfiADhUILiUKHla+vmLbem55/fiEDIABBAWohAAwBCwsgA0IhiCADhULP1tO+0ser2UJ+IgNCHYggA4VC+fPd8Zn2masWfiIDQiCIIAOFC+8CAgJ/BH4gACAAKQMAIAKtfDcDAAJAAkAgACgCSCIDIAJqIgRBH00EQCABRQ0BIAAgA2pBKGogASACECAgACgCSCACaiEEDAELIAEgAmohAgJ/IAMEQCAAQShqIgQgA2ogAUEgIANrECAgACAAKQMIIAQpAAAQCTcDCCAAIAApAxAgACkAMBAJNwMQIAAgACkDGCAAKQA4EAk3AxggACAAKQMgIABBQGspAAAQCTcDICAAKAJIIQMgAEEANgJIIAEgA2tBIGohAQsgAUEgaiACTQsEQCACQWBqIQMgACkDICEFIAApAxghBiAAKQMQIQcgACkDCCEIA0AgCCABKQAAEAkhCCAHIAEpAAgQCSEHIAYgASkAEBAJIQYgBSABKQAYEAkhBSABQSBqIgEgA00NAAsgACAFNwMgIAAgBjcDGCAAIAc3AxAgACAINwMICyABIAJPDQEgAEEoaiABIAIgAWsiBBAgCyAAIAQ2AkgLCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQEBogAwVBun8LCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQCxogAwVBun8LC6gCAQZ/IwBBEGsiByQAIABB2OABaikDAEKAgIAQViEIQbh/IQUCQCAEQf//B0sNACAAIAMgBBBCIgUQAyIGDQAgACgCnOIBIQkgACAHQQxqIAMgAyAFaiAGGyIKIARBACAFIAYbayIGEEAiAxADBEAgAyEFDAELIAcoAgwhBCABRQRAQbp/IQUgBEEASg0BCyAGIANrIQUgAyAKaiEDAkAgCQRAIABBADYCnOIBDAELAkACQAJAIARBBUgNACAAQdjgAWopAwBCgICACFgNAAwBCyAAQQA2ApziAQwBCyAAKAIIED8hBiAAQQA2ApziASAGQRRPDQELIAAgASACIAMgBSAEIAgQOSEFDAELIAAgASACIAMgBSAEIAgQOiEFCyAHQRBqJAAgBQtnACAAQdDgAWogASACIAAoAuzhARAuIgEQAwRAIAEPC0G4fyECAkAgAQ0AIABB7OABaigCACIBBEBBYCECIAAoApjiASABRw0BC0EAIQIgAEHw4AFqKAIARQ0AIABBkOEBahBDCyACCycBAX8QVyIERQRAQUAPCyAEIAAgASACIAMgBBBLEE8hACAEEFYgAAs/AQF/AkACQAJAIAAoAqDiAUEBaiIBQQJLDQAgAUEBaw4CAAECCyAAEDBBAA8LIABBADYCoOIBCyAAKAKU4gELvAMCB38BfiMAQRBrIgkkAEG4fyEGAkAgBCgCACIIQQVBCSAAKALs4QEiBRtJDQAgAygCACIHQQFBBSAFGyAFEC8iBRADBEAgBSEGDAELIAggBUEDakkNACAAIAcgBRBJIgYQAw0AIAEgAmohCiAAQZDhAWohCyAIIAVrIQIgBSAHaiEHIAEhBQNAIAcgAiAJECwiBhADDQEgAkF9aiICIAZJBEBBuH8hBgwCCyAJKAIAIghBAksEQEFsIQYMAgsgB0EDaiEHAn8CQAJAAkAgCEEBaw4CAgABCyAAIAUgCiAFayAHIAYQSAwCCyAFIAogBWsgByAGEEcMAQsgBSAKIAVrIActAAAgCSgCCBBGCyIIEAMEQCAIIQYMAgsgACgC8OABBEAgCyAFIAgQRQsgAiAGayECIAYgB2ohByAFIAhqIQUgCSgCBEUNAAsgACkD0OABIgxCf1IEQEFsIQYgDCAFIAFrrFINAQsgACgC8OABBEBBaiEGIAJBBEkNASALEEQhDCAHKAAAIAynRw0BIAdBBGohByACQXxqIQILIAMgBzYCACAEIAI2AgAgBSABayEGCyAJQRBqJAAgBgsuACAAECsCf0EAQQAQAw0AGiABRSACRXJFBEBBYiAAIAEgAhA9EAMNARoLQQALCzcAIAEEQCAAIAAoAsTgASABKAIEIAEoAghqRzYCnOIBCyAAECtBABADIAFFckUEQCAAIAEQWwsL0QIBB38jAEEQayIGJAAgBiAENgIIIAYgAzYCDCAFBEAgBSgCBCEKIAUoAgghCQsgASEIAkACQANAIAAoAuzhARAWIQsCQANAIAQgC0kNASADKAAAQXBxQdDUtMIBRgRAIAMgBBAiIgcQAw0EIAQgB2shBCADIAdqIQMMAQsLIAYgAzYCDCAGIAQ2AggCQCAFBEAgACAFEE5BACEHQQAQA0UNAQwFCyAAIAogCRBNIgcQAw0ECyAAIAgQUCAMQQFHQQAgACAIIAIgBkEMaiAGQQhqEEwiByIDa0EAIAMQAxtBCkdyRQRAQbh/IQcMBAsgBxADDQMgAiAHayECIAcgCGohCEEBIQwgBigCDCEDIAYoAgghBAwBCwsgBiADNgIMIAYgBDYCCEG4fyEHIAQNASAIIAFrIQcMAQsgBiADNgIMIAYgBDYCCAsgBkEQaiQAIAcLRgECfyABIAAoArjgASICRwRAIAAgAjYCxOABIAAgATYCuOABIAAoArzgASEDIAAgATYCvOABIAAgASADIAJrajYCwOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEEdCAAbiECCyAAQQh2IgEgAkEYbCIAQYwIaigCAGwgAEGICGooAgBqIgJBA3YgAmogAEGACGooAgAgAEGECGooAgAgAWxqSQs3ACAAIAMgBCAFQYAQEDMiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQMgVBuH8LC78DAQN/IwBBIGsiBSQAIAVBCGogAiADEAYiAhADRQRAIAAgAWoiB0F9aiEGIAUgBBAOIARBBGohAiAFLQACIQMDQEEAIAAgBkkgBUEIahAEGwRAIAAgAiAFQQhqIAMQAkECdGoiBC8BADsAACAFQQhqIAQtAAIQASAAIAQtAANqIgQgAiAFQQhqIAMQAkECdGoiAC8BADsAACAFQQhqIAAtAAIQASAEIAAtAANqIQAMAQUgB0F+aiEEA0AgBUEIahAEIAAgBEtyRQRAIAAgAiAFQQhqIAMQAkECdGoiBi8BADsAACAFQQhqIAYtAAIQASAAIAYtAANqIQAMAQsLA0AgACAES0UEQCAAIAIgBUEIaiADEAJBAnRqIgYvAQA7AAAgBUEIaiAGLQACEAEgACAGLQADaiEADAELCwJAIAAgB08NACAAIAIgBUEIaiADEAIiA0ECdGoiAC0AADoAACAALQADQQFGBEAgBUEIaiAALQACEAEMAQsgBSgCDEEfSw0AIAVBCGogAiADQQJ0ai0AAhABIAUoAgxBIUkNACAFQSA2AgwLIAFBbCAFQQhqEAobIQILCwsgBUEgaiQAIAILkgIBBH8jAEFAaiIJJAAgCSADQTQQCyEDAkAgBEECSA0AIAMgBEECdGooAgAhCSADQTxqIAgQIyADQQE6AD8gAyACOgA+QQAhBCADKAI8IQoDQCAEIAlGDQEgACAEQQJ0aiAKNgEAIARBAWohBAwAAAsAC0EAIQkDQCAGIAlGRQRAIAMgBSAJQQF0aiIKLQABIgtBAnRqIgwoAgAhBCADQTxqIAotAABBCHQgCGpB//8DcRAjIANBAjoAPyADIAcgC2siCiACajoAPiAEQQEgASAKa3RqIQogAygCPCELA0AgACAEQQJ0aiALNgEAIARBAWoiBCAKSQ0ACyAMIAo2AgAgCUEBaiEJDAELCyADQUBrJAALowIBCX8jAEHQAGsiCSQAIAlBEGogBUE0EAsaIAcgBmshDyAHIAFrIRADQAJAIAMgCkcEQEEBIAEgByACIApBAXRqIgYtAAEiDGsiCGsiC3QhDSAGLQAAIQ4gCUEQaiAMQQJ0aiIMKAIAIQYgCyAPTwRAIAAgBkECdGogCyAIIAUgCEE0bGogCCAQaiIIQQEgCEEBShsiCCACIAQgCEECdGooAgAiCEEBdGogAyAIayAHIA4QYyAGIA1qIQgMAgsgCUEMaiAOECMgCUEBOgAPIAkgCDoADiAGIA1qIQggCSgCDCELA0AgBiAITw0CIAAgBkECdGogCzYBACAGQQFqIQYMAAALAAsgCUHQAGokAA8LIAwgCDYCACAKQQFqIQoMAAALAAs0ACAAIAMgBCAFEDYiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQNAVBuH8LCyMAIAA/AEEQdGtB//8DakEQdkAAQX9GBEBBAA8LQQAQAEEBCzsBAX8gAgRAA0AgACABIAJBgCAgAkGAIEkbIgMQCyEAIAFBgCBqIQEgAEGAIGohACACIANrIgINAAsLCwYAIAAQAwsLqBUJAEGICAsNAQAAAAEAAAACAAAAAgBBoAgLswYBAAAAAQAAAAIAAAACAAAAJgAAAIIAAAAhBQAASgAAAGcIAAAmAAAAwAEAAIAAAABJBQAASgAAAL4IAAApAAAALAIAAIAAAABJBQAASgAAAL4IAAAvAAAAygIAAIAAAACKBQAASgAAAIQJAAA1AAAAcwMAAIAAAACdBQAASgAAAKAJAAA9AAAAgQMAAIAAAADrBQAASwAAAD4KAABEAAAAngMAAIAAAABNBgAASwAAAKoKAABLAAAAswMAAIAAAADBBgAATQAAAB8NAABNAAAAUwQAAIAAAAAjCAAAUQAAAKYPAABUAAAAmQQAAIAAAABLCQAAVwAAALESAABYAAAA2gQAAIAAAABvCQAAXQAAACMUAABUAAAARQUAAIAAAABUCgAAagAAAIwUAABqAAAArwUAAIAAAAB2CQAAfAAAAE4QAAB8AAAA0gIAAIAAAABjBwAAkQAAAJAHAACSAAAAAAAAAAEAAAABAAAABQAAAA0AAAAdAAAAPQAAAH0AAAD9AAAA/QEAAP0DAAD9BwAA/Q8AAP0fAAD9PwAA/X8AAP3/AAD9/wEA/f8DAP3/BwD9/w8A/f8fAP3/PwD9/38A/f//AP3//wH9//8D/f//B/3//w/9//8f/f//P/3//38AAAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABEAAAASAAAAEwAAABQAAAAVAAAAFgAAABcAAAAYAAAAGQAAABoAAAAbAAAAHAAAAB0AAAAeAAAAHwAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAkAAAAKAAAACwAAAAwAAAANAAAADgAAAA8AAAAQAAAAEQAAABIAAAATAAAAFAAAABUAAAAWAAAAFwAAABgAAAAZAAAAGgAAABsAAAAcAAAAHQAAAB4AAAAfAAAAIAAAACEAAAAiAAAAIwAAACUAAAAnAAAAKQAAACsAAAAvAAAAMwAAADsAAABDAAAAUwAAAGMAAACDAAAAAwEAAAMCAAADBAAAAwgAAAMQAAADIAAAA0AAAAOAAAADAAEAQeAPC1EBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAEAAAABQAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAQcQQC4sBAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABIAAAAUAAAAFgAAABgAAAAcAAAAIAAAACgAAAAwAAAAQAAAAIAAAAAAAQAAAAIAAAAEAAAACAAAABAAAAAgAAAAQAAAAIAAAAAAAQBBkBIL5gQBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAAAEAAAAEAAAACAAAAAAAAAABAAEBBgAAAAAAAAQAAAAAEAAABAAAAAAgAAAFAQAAAAAAAAUDAAAAAAAABQQAAAAAAAAFBgAAAAAAAAUHAAAAAAAABQkAAAAAAAAFCgAAAAAAAAUMAAAAAAAABg4AAAAAAAEFEAAAAAAAAQUUAAAAAAABBRYAAAAAAAIFHAAAAAAAAwUgAAAAAAAEBTAAAAAgAAYFQAAAAAAABwWAAAAAAAAIBgABAAAAAAoGAAQAAAAADAYAEAAAIAAABAAAAAAAAAAEAQAAAAAAAAUCAAAAIAAABQQAAAAAAAAFBQAAACAAAAUHAAAAAAAABQgAAAAgAAAFCgAAAAAAAAULAAAAAAAABg0AAAAgAAEFEAAAAAAAAQUSAAAAIAABBRYAAAAAAAIFGAAAACAAAwUgAAAAAAADBSgAAAAAAAYEQAAAABAABgRAAAAAIAAHBYAAAAAAAAkGAAIAAAAACwYACAAAMAAABAAAAAAQAAAEAQAAACAAAAUCAAAAIAAABQMAAAAgAAAFBQAAACAAAAUGAAAAIAAABQgAAAAgAAAFCQAAACAAAAULAAAAIAAABQwAAAAAAAAGDwAAACAAAQUSAAAAIAABBRQAAAAgAAIFGAAAACAAAgUcAAAAIAADBSgAAAAgAAQFMAAAAAAAEAYAAAEAAAAPBgCAAAAAAA4GAEAAAAAADQYAIABBgBcLhwIBAAEBBQAAAAAAAAUAAAAAAAAGBD0AAAAAAAkF/QEAAAAADwX9fwAAAAAVBf3/HwAAAAMFBQAAAAAABwR9AAAAAAAMBf0PAAAAABIF/f8DAAAAFwX9/38AAAAFBR0AAAAAAAgE/QAAAAAADgX9PwAAAAAUBf3/DwAAAAIFAQAAABAABwR9AAAAAAALBf0HAAAAABEF/f8BAAAAFgX9/z8AAAAEBQ0AAAAQAAgE/QAAAAAADQX9HwAAAAATBf3/BwAAAAEFAQAAABAABgQ9AAAAAAAKBf0DAAAAABAF/f8AAAAAHAX9//8PAAAbBf3//wcAABoF/f//AwAAGQX9//8BAAAYBf3//wBBkBkLhgQBAAEBBgAAAAAAAAYDAAAAAAAABAQAAAAgAAAFBQAAAAAAAAUGAAAAAAAABQgAAAAAAAAFCQAAAAAAAAULAAAAAAAABg0AAAAAAAAGEAAAAAAAAAYTAAAAAAAABhYAAAAAAAAGGQAAAAAAAAYcAAAAAAAABh8AAAAAAAAGIgAAAAAAAQYlAAAAAAABBikAAAAAAAIGLwAAAAAAAwY7AAAAAAAEBlMAAAAAAAcGgwAAAAAACQYDAgAAEAAABAQAAAAAAAAEBQAAACAAAAUGAAAAAAAABQcAAAAgAAAFCQAAAAAAAAUKAAAAAAAABgwAAAAAAAAGDwAAAAAAAAYSAAAAAAAABhUAAAAAAAAGGAAAAAAAAAYbAAAAAAAABh4AAAAAAAAGIQAAAAAAAQYjAAAAAAABBicAAAAAAAIGKwAAAAAAAwYzAAAAAAAEBkMAAAAAAAUGYwAAAAAACAYDAQAAIAAABAQAAAAwAAAEBAAAABAAAAQFAAAAIAAABQcAAAAgAAAFCAAAACAAAAUKAAAAIAAABQsAAAAAAAAGDgAAAAAAAAYRAAAAAAAABhQAAAAAAAAGFwAAAAAAAAYaAAAAAAAABh0AAAAAAAAGIAAAAAAAEAYDAAEAAAAPBgOAAAAAAA4GA0AAAAAADQYDIAAAAAAMBgMQAAAAAAsGAwgAAAAACgYDBABBpB0L2QEBAAAAAwAAAAcAAAAPAAAAHwAAAD8AAAB/AAAA/wAAAP8BAAD/AwAA/wcAAP8PAAD/HwAA/z8AAP9/AAD//wAA//8BAP//AwD//wcA//8PAP//HwD//z8A//9/AP///wD///8B////A////wf///8P////H////z////9/AAAAAAEAAAACAAAABAAAAAAAAAACAAAABAAAAAgAAAAAAAAAAQAAAAIAAAABAAAABAAAAAQAAAAEAAAABAAAAAgAAAAIAAAACAAAAAcAAAAIAAAACQAAAAoAAAALAEGgIAsDwBBQ"});var ap,op,ES,cp=it(()=>{gt();ap="display-p3",op="display-p3-linear",ES={...ot.spaces[lt],outputColorSpaceConfig:{drawingBufferColorSpace:lt,toneMappingMode:"extended"}}});async function zv(i){let{vkFormat:e}=i;if(uh[e]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat: "+e);ks[e]===void 0&&console.warn('THREE.KTX2Loader: Missing ".type" for vkFormat: '+e);let t;i.supercompressionScheme===2&&(lh||(lh=new Promise(async a=>{let o=new kc;await o.init(),a(o)})),t=await lh);let n=[];for(let a=0;a<i.levels.length;a++){let o=Math.max(1,i.pixelWidth>>a),c=Math.max(1,i.pixelHeight>>a),l=i.pixelDepth?Math.max(1,i.pixelDepth>>a):0,h=i.levels[a],d;if(i.supercompressionScheme===0)d=h.levelData;else if(i.supercompressionScheme===2)d=t.decode(h.levelData,h.uncompressedByteLength);else throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");let u;ks[e]===zt?u=new Float32Array(d.buffer,d.byteOffset,d.byteLength/Float32Array.BYTES_PER_ELEMENT):ks[e]===yt||ks[e]===Ci?u=new Uint16Array(d.buffer,d.byteOffset,d.byteLength/Uint16Array.BYTES_PER_ELEMENT):ks[e]===Dr||ks[e]===Fr?u=new Uint32Array(d.buffer,d.byteOffset,d.byteLength/Uint32Array.BYTES_PER_ELEMENT):u=d,n.push({data:u,width:o,height:c,depth:l})}let s=i.levelCount===0||n.length>1,r;if(Gv.has(uh[e]))r=i.pixelDepth===0?new Nn(n[0].data,i.pixelWidth,i.pixelHeight):new Vi(n[0].data,i.pixelWidth,i.pixelHeight,i.pixelDepth),r.mipmaps=n,r.minFilter=s?Rr:Tt,r.magFilter=Tt,r.generateMipmaps=i.levelCount===0,r.normalized=Qv.has(e);else{if(i.pixelDepth>0)throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");if(i.faceCount===6){let a=[];for(let o=0;o<6;o++){let c=[];for(let l of n){let h=l.data.length/6;c.push({data:l.data.subarray(o*h,(o+1)*h),width:l.width,height:l.height})}a.push({mipmaps:c,width:i.pixelWidth,height:i.pixelHeight})}r=new vr(a)}else r=new Ki(n,i.pixelWidth,i.pixelHeight);r.minFilter=s?Qt:At,r.magFilter=At}return r.type=ks[e],r.format=uh[e],r.colorSpace=Zp(i),r.needsUpdate=!0,r}function Zp(i){let e=i.dataFormatDescriptor[0];return e.colorPrimaries===1?e.transferFunction===2?lt:jt:e.colorPrimaries===10?e.transferFunction===2?ap:op:e.colorPrimaries===0?vn:(console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${e.colorPrimaries}"`),vn)}var Ov,kv,oh,ch,lh,Fi,Gv,Qv,uh,ks,$p=it(()=>{gt();ep();ip();rp();cp();Ov=new URL("../libs/basis/basis_transcoder.wasm",import.meta.url).toString(),kv=new URL("../libs/basis/basis_transcoder.js",import.meta.url).toString(),oh=new WeakMap,ch=0,Fi=class i extends Fn{constructor(e){super(e),this.isKTX2Loader=!0,this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new Oc,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(e){return this.transcoderPath=e,this}setWorkerLimit(e){return this.workerPool.setWorkerLimit(e),this}async detectSupportAsync(e){return console.warn('KTX2Loader: "detectSupportAsync()" has been deprecated. Use "detectSupport()" and "await renderer.init();" when creating the renderer.'),await e.init(),this.detectSupport(e)}detectSupport(e){return e.isWebGPURenderer===!0?this.workerConfig={astcSupported:e.hasFeature("texture-compression-astc"),astcHDRSupported:!1,etc1Supported:e.hasFeature("texture-compression-etc1"),etc2Supported:e.hasFeature("texture-compression-etc2"),dxtSupported:e.hasFeature("texture-compression-s3tc"),bptcSupported:e.hasFeature("texture-compression-bc"),pvrtcSupported:e.hasFeature("texture-compression-pvrtc")}:(this.workerConfig={astcSupported:e.extensions.has("WEBGL_compressed_texture_astc"),astcHDRSupported:e.extensions.has("WEBGL_compressed_texture_astc")&&e.extensions.get("WEBGL_compressed_texture_astc").getSupportedProfiles().includes("hdr"),etc1Supported:e.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:e.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:e.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:e.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:e.extensions.has("WEBGL_compressed_texture_pvrtc")||e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},typeof navigator<"u"&&typeof navigator.platform<"u"&&typeof navigator.userAgent<"u"&&navigator.platform.indexOf("Linux")>=0&&navigator.userAgent.indexOf("Android")<0&&this.workerConfig.astcSupported&&this.workerConfig.etc2Supported&&this.workerConfig.bptcSupported&&this.workerConfig.dxtSupported&&(this.workerConfig.astcSupported=!1,this.workerConfig.etc1Supported=!1,this.workerConfig.etc2Supported=!1)),this}init(){if(!this.transcoderPending){let e=new Jn(this.manager);e.setPriority(this.priority),e.setCache(this.cache),e.setWithCredentials(this.withCredentials);let t=new Jn(this.manager);t.setPriority(this.priority),t.setCache(this.cache),t.setWithCredentials(this.withCredentials),t.setResponseType("arraybuffer");let n,s;this.transcoderPath===""?(n=e.loadAsync(kv),s=t.loadAsync(Ov)):(e.setPath(this.transcoderPath),n=e.loadAsync("basis_transcoder.js"),t.setPath(this.transcoderPath),s=t.loadAsync("basis_transcoder.wasm")),this.transcoderPending=Promise.all([n,s]).then(([r,a])=>{let o=i.BasisWorker.toString(),c=["/* constants */","let _EngineFormat = "+JSON.stringify(i.EngineFormat),"let _EngineType = "+JSON.stringify(i.EngineType),"let _TranscoderFormat = "+JSON.stringify(i.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(i.BasisFormat),"/* basis_transcoder.js */",r,"/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([c])),this.transcoderBinary=a,this.workerPool.setWorkerCreator(()=>{let l=new Worker(this.workerSourceURL),h=this.transcoderBinary.slice(0);return l.postMessage({type:"init",config:this.workerConfig,transcoderBinary:h},[h]),l})}),ch>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),ch++}return this.transcoderPending}load(e,t,n,s){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");let r=new Jn(this.manager);r.setPriority(this.priority),r.setCache(this.cache),r.setPath(this.path),r.setCrossOrigin(this.crossOrigin),r.setWithCredentials(this.withCredentials),r.setRequestHeader(this.requestHeader),r.setResponseType("arraybuffer"),r.load(e,a=>{this.parse(a,t,s)},n,s)}parse(e,t,n){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");if(oh.has(e))return oh.get(e).promise.then(t).catch(n);this._createTexture(e).then(s=>t?t(s):null).catch(n)}_createTextureFrom(e,t){let{type:n,error:s,data:{faces:r,width:a,height:o,format:c,type:l,dfdFlags:h}}=e;if(n==="error")return Promise.reject(s);let d;if(t.faceCount===6)d=new vr(r,c,l);else{let u=r[0].mipmaps;d=t.layerCount>1?new Sa(u,a,o,t.layerCount,c,l):new Ki(u,a,o,c,l)}return d.minFilter=r[0].mipmaps.length===1?At:Qt,d.magFilter=At,d.generateMipmaps=!1,d.needsUpdate=!0,d.colorSpace=Zp(t),d.premultiplyAlpha=!!(h&1),d}async _createTexture(e,t={}){let n=np(new Uint8Array(e)),s=n.vkFormat===1000066e3&&n.dataFormatDescriptor[0].colorModel===167;if(!(n.vkFormat===0||s&&!this.workerConfig.astcHDRSupported))return zv(n);let a=t,o=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffer:e,taskConfig:a},[e])).then(c=>this._createTextureFrom(c.data,n));return oh.set(e,{promise:o}),o}dispose(){this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),ch--}};Fi.BasisFormat={ETC1S:0,UASTC:1,UASTC_HDR:2};Fi.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16,BC6H:22,RGB_HALF:24,RGBA_HALF:25};Fi.EngineFormat={RGBAFormat:Vt,RGBA_ASTC_4x4_Format:Bi,RGB_BPTC_UNSIGNED_Format:kr,RGBA_BPTC_Format:ts,RGBA_ETC2_EAC_Format:Ds,RGBA_PVRTC_4BPPV1_Format:$i,RGBA_S3TC_DXT5_Format:Ri,RGB_ETC1_Format:Lr,RGB_ETC2_Format:Bs,RGB_PVRTC_4BPPV1_Format:Pr,RGBA_S3TC_DXT1_Format:Ti};Fi.EngineType={UnsignedByteType:Ke,HalfFloatType:yt,FloatType:zt};Fi.BasisWorker=function(){let i,e,t,n=_EngineFormat,s=_EngineType,r=_TranscoderFormat,a=_BasisFormat;self.addEventListener("message",function(p){let g=p.data;switch(g.type){case"init":i=g.config,o(g.transcoderBinary);break;case"transcode":e.then(()=>{try{let{faces:m,buffers:A,width:_,height:y,hasAlpha:v,format:M,type:E,dfdFlags:x}=c(g.buffer);self.postMessage({type:"transcode",id:g.id,data:{faces:m,width:_,height:y,hasAlpha:v,format:M,type:E,dfdFlags:x}},A)}catch(m){console.error(m),self.postMessage({type:"error",id:g.id,error:m.message})}});break}});function o(p){e=new Promise(g=>{t={wasmBinary:p,onRuntimeInitialized:g},BASIS(t)}).then(()=>{t.initializeBasis(),t.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")})}function c(p){let g=new t.KTX2File(new Uint8Array(p));function m(){g.close(),g.delete()}if(!g.isValid())throw m(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");let A;if(g.isUASTC())A=a.UASTC;else if(g.isETC1S())A=a.ETC1S;else if(g.isHDR())A=a.UASTC_HDR;else throw new Error("THREE.KTX2Loader: Unknown Basis encoding");let _=g.getWidth(),y=g.getHeight(),v=g.getLayers()||1,M=g.getLevels(),E=g.getFaces(),x=g.getHasAlpha(),b=g.getDFDFlags(),{transcoderFormat:w,engineFormat:S,engineType:T}=d(A,_,y,x);if(!_||!y||!M)throw m(),new Error("THREE.KTX2Loader:	Invalid texture");if(!g.startTranscoding())throw m(),new Error("THREE.KTX2Loader: .startTranscoding failed");let C=[],F=[];for(let I=0;I<E;I++){let P=[];for(let L=0;L<M;L++){let z=[],O,G;for(let H=0;H<v;H++){let q=g.getImageLevelInfo(L,H,I);I===0&&L===0&&H===0&&(q.origWidth%4!==0||q.origHeight%4!==0)&&console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."),M>1?(O=q.origWidth,G=q.origHeight):(O=q.width,G=q.height);let Z=new Uint8Array(g.getImageTranscodedSizeInBytes(L,H,0,w)),W=g.transcodeImage(Z,L,H,I,w,0,-1,-1);if(T===s.HalfFloatType&&(Z=new Uint16Array(Z.buffer,Z.byteOffset,Z.byteLength/Uint16Array.BYTES_PER_ELEMENT)),!W)throw m(),new Error("THREE.KTX2Loader: .transcodeImage failed.");z.push(Z)}let V=f(z);P.push({data:V,width:O,height:G}),F.push(V.buffer)}C.push({mipmaps:P,width:_,height:y,format:S,type:T})}return m(),{faces:C,buffers:F,width:_,height:y,hasAlpha:x,dfdFlags:b,format:S,type:T}}let l=[{if:"astcSupported",basisFormat:[a.UASTC],transcoderFormat:[r.ASTC_4x4,r.ASTC_4x4],engineFormat:[n.RGBA_ASTC_4x4_Format,n.RGBA_ASTC_4x4_Format],engineType:[s.UnsignedByteType],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.BC7_M5,r.BC7_M5],engineFormat:[n.RGBA_BPTC_Format,n.RGBA_BPTC_Format],engineType:[s.UnsignedByteType],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.BC1,r.BC3],engineFormat:[n.RGBA_S3TC_DXT1_Format,n.RGBA_S3TC_DXT5_Format],engineType:[s.UnsignedByteType],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.ETC1,r.ETC2],engineFormat:[n.RGB_ETC2_Format,n.RGBA_ETC2_EAC_Format],engineType:[s.UnsignedByteType],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.ETC1],engineFormat:[n.RGB_ETC1_Format],engineType:[s.UnsignedByteType],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.PVRTC1_4_RGB,r.PVRTC1_4_RGBA],engineFormat:[n.RGB_PVRTC_4BPPV1_Format,n.RGBA_PVRTC_4BPPV1_Format],engineType:[s.UnsignedByteType],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0},{if:"bptcSupported",basisFormat:[a.UASTC_HDR],transcoderFormat:[r.BC6H],engineFormat:[n.RGB_BPTC_UNSIGNED_Format],engineType:[s.HalfFloatType],priorityHDR:1,needsPowerOfTwo:!1},{basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.RGBA32,r.RGBA32],engineFormat:[n.RGBAFormat,n.RGBAFormat],engineType:[s.UnsignedByteType,s.UnsignedByteType],priorityETC1S:100,priorityUASTC:100,needsPowerOfTwo:!1},{basisFormat:[a.UASTC_HDR],transcoderFormat:[r.RGBA_HALF],engineFormat:[n.RGBAFormat],engineType:[s.HalfFloatType],priorityHDR:100,needsPowerOfTwo:!1}],h={[a.ETC1S]:l.filter(p=>p.basisFormat.includes(a.ETC1S)).sort((p,g)=>p.priorityETC1S-g.priorityETC1S),[a.UASTC]:l.filter(p=>p.basisFormat.includes(a.UASTC)).sort((p,g)=>p.priorityUASTC-g.priorityUASTC),[a.UASTC_HDR]:l.filter(p=>p.basisFormat.includes(a.UASTC_HDR)).sort((p,g)=>p.priorityHDR-g.priorityHDR)};function d(p,g,m,A){let _=h[p];for(let y=0;y<_.length;y++){let v=_[y];if(v.if&&!i[v.if]||!v.basisFormat.includes(p)||A&&v.transcoderFormat.length<2||v.needsPowerOfTwo&&!(u(g)&&u(m)))continue;let M=v.transcoderFormat[A?1:0],E=v.engineFormat[A?1:0],x=v.engineType[0];return{transcoderFormat:M,engineFormat:E,engineType:x}}throw new Error("THREE.KTX2Loader: Failed to identify transcoding target.")}function u(p){return p<=2?!0:(p&p-1)===0&&p!==0}function f(p){if(p.length===1)return p[0];let g=0;for(let _=0;_<p.length;_++){let y=p[_];g+=y.byteLength}let m=new Uint8Array(g),A=0;for(let _=0;_<p.length;_++){let y=p[_];m.set(y,A),A+=y.byteLength}return m}};Gv=new Set([Vt,Ts,wn,Gn]),Qv=new Set([91]),uh={109:Vt,103:wn,100:Gn,97:Vt,83:wn,76:Gn,91:Vt,43:Vt,37:Vt,22:wn,16:wn,15:Gn,9:Gn,123:Ts,122:Ts,152:Ds,148:Bs,153:Nr,154:Ur,155:Fs,156:Or,1000066e3:Bi,158:Bi,157:Bi,1000066004:es,166:es,165:es,134:Ti,133:Ti,132:Zi,131:Zi,138:Ri,137:Ri,140:Qr,139:Gr,142:zr,141:Ps,146:ts,145:ts,1000054005:$i,1000054001:$i,1000054004:Rs,1000054e3:Rs},ks={109:zt,103:zt,100:zt,97:yt,83:yt,76:yt,91:Ci,43:Ke,37:Ke,22:Ke,16:Ke,15:Ke,9:Ke,123:Dr,122:Fr,152:Ke,148:Ke,153:Ke,154:Ke,155:Ke,156:Ke,1000066e3:yt,158:Ke,157:Ke,1000066004:yt,166:Ke,165:Ke,134:Ke,133:Ke,132:Ke,131:Ke,138:Ke,137:Ke,140:Ke,139:Ke,142:Ke,141:Ke,146:Ke,145:Ke,1000054005:Ke,1000054001:Ke,1000054004:Ke,1000054e3:Ke}});var Gc,eA=it(()=>{gt();Gc=class extends La{constructor(e){super(e),this.type=yt}parse(e){let a=function(b,w){switch(b){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(w||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(w||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(w||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(w||""))}},d=function(b,w,S){w=w||1024;let C=b.pos,F=-1,I=0,P="",L=String.fromCharCode.apply(null,new Uint16Array(b.subarray(C,C+128)));for(;0>(F=L.indexOf(`
`))&&I<w&&C<b.byteLength;)P+=L,I+=L.length,C+=128,L=String.fromCharCode.apply(null,new Uint16Array(b.subarray(C,C+128)));return-1<F?(S!==!1&&(b.pos+=I+F+1),P+L.slice(0,F)):!1},u=function(b){let w=/^#\?(\S+)/,S=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,T=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*FORMAT=(\S+)\s*$/,F=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,I={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},P,L;for((b.pos>=b.byteLength||!(P=d(b)))&&a(1,"no header found"),(L=P.match(w))||a(3,"bad initial token"),I.valid|=1,I.programtype=L[1],I.string+=P+`
`;P=d(b),P!==!1;){if(I.string+=P+`
`,P.charAt(0)==="#"){I.comments+=P+`
`;continue}if((L=P.match(S))&&(I.gamma=parseFloat(L[1])),(L=P.match(T))&&(I.exposure=parseFloat(L[1])),(L=P.match(C))&&(I.valid|=2,I.format=L[1]),(L=P.match(F))&&(I.valid|=4,I.height=parseInt(L[1],10),I.width=parseInt(L[2],10)),I.valid&2&&I.valid&4)break}return I.valid&2||a(3,"missing format specifier"),I.valid&4||a(3,"missing image size specifier"),I},f=function(b,w,S){let T=w;if(T<8||T>32767||b[0]!==2||b[1]!==2||b[2]&128)return new Uint8Array(b);T!==(b[2]<<8|b[3])&&a(3,"wrong scanline width");let C=new Uint8Array(4*w*S);C.length||a(4,"unable to allocate buffer space");let F=0,I=0,P=4*T,L=new Uint8Array(4),z=new Uint8Array(P),O=S;for(;O>0&&I<b.byteLength;){I+4>b.byteLength&&a(1),L[0]=b[I++],L[1]=b[I++],L[2]=b[I++],L[3]=b[I++],(L[0]!=2||L[1]!=2||(L[2]<<8|L[3])!=T)&&a(3,"bad rgbe scanline format");let G=0,V;for(;G<P&&I<b.byteLength;){V=b[I++];let q=V>128;if(q&&(V-=128),(V===0||G+V>P)&&a(3,"bad scanline data"),q){let Z=b[I++];for(let W=0;W<V;W++)z[G++]=Z}else z.set(b.subarray(I,I+V),G),G+=V,I+=V}let H=T;for(let q=0;q<H;q++){let Z=0;C[F]=z[q+Z],Z+=T,C[F+1]=z[q+Z],Z+=T,C[F+2]=z[q+Z],Z+=T,C[F+3]=z[q+Z],F+=4}O--}return C},p=function(b,w,S,T){let C=b[w+3],F=Math.pow(2,C-128)/255;S[T+0]=b[w+0]*F,S[T+1]=b[w+1]*F,S[T+2]=b[w+2]*F,S[T+3]=1},g=function(b,w,S,T){let C=b[w+3],F=Math.pow(2,C-128)/255;S[T+0]=ni.toHalfFloat(Math.min(b[w+0]*F,65504)),S[T+1]=ni.toHalfFloat(Math.min(b[w+1]*F,65504)),S[T+2]=ni.toHalfFloat(Math.min(b[w+2]*F,65504)),S[T+3]=ni.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;let A=u(m),_=A.width,y=A.height,v=f(m.subarray(m.pos),_,y),M,E,x;switch(this.type){case zt:x=v.length/4;let b=new Float32Array(x*4);for(let S=0;S<x;S++)p(v,S*4,b,S*4);M=b,E=zt;break;case yt:x=v.length/4;let w=new Uint16Array(x*4);for(let S=0;S<x;S++)g(v,S*4,w,S*4);M=w,E=yt;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:_,height:y,data:M,header:A.string,gamma:A.gamma,exposure:A.exposure,type:E,colorSpace:jt,minFilter:At,magFilter:At,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}}});var tA,nA=it(()=>{tA=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(A){r=A.instance,r.exports.__wasm_call_ctors()});function o(A){for(var _=new Uint8Array(A.length),y=0;y<A.length;++y){var v=A.charCodeAt(y);_[y]=v>96?v-97:v>64?v-39:v+4}for(var M=0,y=0;y<A.length;++y)_[M++]=_[y]<60?n[_[y]]:(_[y]-60)*64+_[++y];return _.buffer.slice(0,M)}function c(A,_,y,v,M,E,x){var b=A.exports.sbrk,w=v+3&-4,S=b(w*M),T=b(E.length),C=new Uint8Array(A.exports.memory.buffer);C.set(E,T);var F=_(S,v,M,T,E.length);if(F==0&&x&&x(S,w,M),y.set(C.subarray(S,S+v*M)),b(S-b(0)),F!=0)throw new Error("Malformed buffer data: "+F)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},d=[],u=0;function f(A){var _={object:new Worker(A),pending:0,requests:{}};return _.object.onmessage=function(y){var v=y.data;_.pending-=v.count,_.requests[v.id][v.action](v.value),delete _.requests[v.id]},_}function p(A){for(var _="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+c.toString()+m.toString(),y=new Blob([_],{type:"text/javascript"}),v=URL.createObjectURL(y),M=d.length;M<A;++M)d[M]=f(v);for(var M=A;M<d.length;++M)d[M].object.postMessage({});d.length=A,URL.revokeObjectURL(v)}function g(A,_,y,v,M){for(var E=d[0],x=1;x<d.length;++x)d[x].pending<E.pending&&(E=d[x]);return new Promise(function(b,w){var S=new Uint8Array(y),T=++u;E.pending+=A,E.requests[T]={resolve:b,reject:w},E.object.postMessage({id:T,count:A,size:_,source:S,mode:v,filter:M},[S.buffer])})}function m(A){var _=A.data;self.ready.then(function(y){if(!_.id)return self.close();try{var v=new Uint8Array(_.count*_.size);c(y,y.exports[_.mode],v,_.count,_.size,_.source,y.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:v},[v.buffer])}catch(M){self.postMessage({id:_.id,count:_.count,action:"reject",value:M})}})}return{ready:a,supported:!0,useWorkers:function(A){p(A)},decodeVertexBuffer:function(A,_,y,v,M){c(r,r.exports.meshopt_decodeVertexBuffer,A,_,y,v,r.exports[l[M]])},decodeIndexBuffer:function(A,_,y,v){c(r,r.exports.meshopt_decodeIndexBuffer,A,_,y,v)},decodeIndexSequence:function(A,_,y,v){c(r,r.exports.meshopt_decodeIndexSequence,A,_,y,v)},decodeGltfBuffer:function(A,_,y,v,M,E){c(r,r.exports[h[M]],A,_,y,v,r.exports[l[E]])},decodeGltfBufferAsync:function(A,_,y,v,M){return d.length>0?g(A,_,y,h[v],l[M]):a.then(function(){var E=new Uint8Array(A*_);return c(r,r.exports[h[v]],E,A,_,y,r.exports[l[M]]),E})}}})()});async function iA(i,e,t,n,s){let r="assets/",a=new xn,o=async O=>{let G=await a.loadAsync(r+O);return G.colorSpace=vn,G.generateMipmaps=!1,G.minFilter=At,G},c=await fetch(r+"surface-light.json").then(O=>O.json()),l=await Promise.all([o(t.floor.states.day.url),o(t.floor.states.night.url),o(c.day.url),o(c.night.url)]),[h,d,u]=t.dims,f=new Uint16Array(h*6*d*u*4),p=new Vi(f,h*6,d,u);p.format=Vt,p.type=yt,p.minFilter=p.magFilter=At,p.unpackAlignment=1;let g={uIrr:{value:p},uGrid:{value:new R(...t.dims)},uOrigin:{value:new R(...t.origin)},uStep:{value:new R(...t.step)},uNight:{value:0},uIndoor:{value:1},uDayFloor:{value:l[0]},uNightFloor:{value:l[1]},uWallsDay:{value:l[2]},uWallsNight:{value:l[3]},uWallRange:{value:new fe(c.day.range,c.night.range)},uFloorRange:{value:new fe(t.floor.states.day.range,t.floor.states.night.range)}};g.uRoomReflection={value:null},g.uRoomOrigin={value:new R},g.uRoomLow={value:new R},g.uRoomHigh={value:new R},g.uHasReflection={value:0};let m=t.practicals.slice(0,7).map(O=>new st(O.position[0],O.position[2],-O.position[1],O.powerWatts*.035));m.push(new st(6.5,2.58,-3.1,5.2)),g.uLamps={value:m};let A=new Float32Array(8).fill(-1);g.uPower={value:A},g.uSwitched={value:0};let _=()=>{};function y(O,G){let V=0,H=1/0;for(let q=0;q<m.length;q++){let Z=m[q],W=(O.x-Z.x)**2+(O.y-Z.y)**2+(O.z-Z.z)**2;W<H&&(H=W,V=q)}A[V]=G==null?-1:+!!G,g.uSwitched.value=Number(A.some(q=>q>=0)),_(m[V],G)}let v=[],M=Array.from({length:5},()=>new st),E=Array.from({length:5},()=>new ye(0)),x=Array.from({length:5},()=>new R),b=Array.from({length:5},()=>new R);Object.assign(g,{uLocalSources:{value:M},uLocalColors:{value:E},uLocalDirections:{value:x},uLocalLimits:{value:b}});function w(O){let G=v.length;G>=M.length||(v.push(O),O.visible=!1,E[G].copy(O.color),M[G].set(O.position.x,O.position.y,O.position.z,O.intensity),b[G].set(O.distance**2,O.isSpotLight?Math.cos(O.angle):-2,O.isSpotLight?Math.cos(O.angle*(1-O.penumbra)):-1),O.isSpotLight&&x[G].subVectors(O.target.position,O.position).normalize())}function S(){for(let O=0;O<v.length;O++)M[O].w=v[O].intensity}let T=async(O,G,V)=>{let H;try{H=await s.loadAsync(r+"surfaces/"+O)}catch{H=await a.loadAsync(r+"surfaces/"+G)}return H.colorSpace=V?lt:vn,H.wrapS=H.wrapT=Yt,H.anisotropy=Math.min(i.capabilities.getMaxAnisotropy(),8),H},C={};await Promise.all(Object.entries(n).map(async([O,G])=>{C[O]=await Promise.all([T(G.albedo,G.fallback,!0),T(G.normal,G.normalFallback,!1),G.roughness?T(G.roughness,G.roughnessFallback,!1):null])})),await Promise.all([0,1,2,3].map(async O=>{let G=await a.loadAsync(r+"print-"+O+".jpg");G.colorSpace=lt,G.anisotropy=8,C["print-"+O]=[G,null]}));let F=-2;function I(O){if(!(Math.abs(O-F)<.001)){F=O,g.uNight.value=O;for(let G=0;G<u;G++)for(let V=0;V<d;V++)for(let H=0;H<h;H++){let q=H+h*(V+d*G),Z=t.origin[0]+H*t.step[0],W=t.origin[1]+V*t.step[1],j=Z>-.79&&Z<2.28&&W>7&&W<11.2?.22:Z<-3.15&&Z>-8.98&&W>.05&&W<5.4?.095:0;for(let re=0;re<6;re++){let le=4*(H+re*h+6*h*(V+G*d));for(let ae=0;ae<3;ae++){let me=t.states.day.rgb[re][3*q+ae],Fe=t.states.night.rgb[re][3*q+ae];f[le+ae]=ni.toHalfFloat(me*(1-O)+Fe*(O+j*(1-O)))}f[le+3]=15360}}p.needsUpdate=!0}}I(0);function P(O,{finish:G=!1,floor:V=!1,bulb:H=!1,glass:q=!1,plainMap:Z=!1,fixturePower:W=null}={}){return O.onBeforeCompile=j=>{Object.assign(j.uniforms,g),j.uniforms.uFixturePower=W??{value:-1},j.vertexShader=j.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vHousePos;
`+(G?"attribute vec4 _finish; varying vec4 vFinish; attribute vec3 _light; varying vec3 vAtlas;":"")),j.vertexShader=j.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
vHousePos=(modelMatrix*vec4(transformed,1.)).xyz;`+(G?"vFinish=_finish;vAtlas=_light;":""));let re=`
        varying vec3 vHousePos;
        uniform highp sampler3D uIrr;
        uniform vec3 uGrid,uOrigin,uStep;
        uniform float uNight,uFixturePower;
        uniform sampler2D uDayFloor,uNightFloor,uWallsDay,uWallsNight;uniform vec2 uWallRange;
        uniform vec4 uLocalSources[5];uniform vec3 uLocalColors[5],uLocalDirections[5],uLocalLimits[5];
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
`+re+(G?`
varying vec4 vFinish; varying vec3 vAtlas;`:"")),G&&(j.fragmentShader=j.fragmentShader.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor=vFinish.x;
#ifdef USE_ROUGHNESSMAP
 roughnessFactor+=(texelRoughness.g-.5)*.35;
#endif
 roughnessFactor=clamp(roughnessFactor,.065,1.);`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
metalnessFactor=vFinish.y;`)),O.name==="gravel"&&(j.fragmentShader=j.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
if(length(vHousePos.xz)>25.)discard;`)),O.name==="plaster"&&(j.fragmentShader=j.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        vec3 paint=mix(diffuseColor.rgb,vec3(.91,.896,.85),.60);
        float wallPaint=smoothstep(.24,1.,vHousePos.y)*(1.-smoothstep(9.12,9.3,abs(vHousePos.x)));
        diffuseColor.rgb=mix(diffuseColor.rgb,paint,.84*wallPaint);`)),!Z&&O.map&&(j.fragmentShader=j.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.rgb*=1.23;`)),O.name==="shade"&&(j.fragmentShader=j.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        float middle=vHousePos.z < -7. ? (vHousePos.x<-.9 ? (vHousePos.x< -4. ? .91 : 1.03) : 1.42) : 1.56;
        float transmitted=exp(-pow((vHousePos.y-middle)/.23,2.));
        float switched=uFixturePower<0.?uNight:uFixturePower*mix(.18,1.,uNight);
        totalEmissiveRadiance+=diffuseColor.rgb*vec3(1.,.73,.41)*((uFixturePower==0.?0.:.021)+switched*(.35+1.42*transmitted));
      `)),H&&(j.fragmentShader=j.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance+=diffuseColor.rgb*vFinish.z*(uFixturePower<0.?mix(.48,10.,uNight):uFixturePower*mix(1.4,10.,uNight));`)),O.normalMap&&(j.fragmentShader=j.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
vec3 nx=dFdx(normal), ny=dFdy(normal); roughnessFactor=sqrt(clamp(roughnessFactor*roughnessFactor+.20*min(.16,max(dot(nx,nx),dot(ny,ny))),.004,1.));`));let le=V?`
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
        ${le}
        float bakeRegion=1.-smoothstep(.0,3.,length(max(vec2(abs(vHousePos.x)-10.4,abs(-vHousePos.z-5.3)-7.1),vec2(0.))));
        float surfaceWeight=0.;
        ${G&&!O.name.startsWith("print-")?"if(vAtlas.z>.001){vec2 uv=vAtlas.xy/max(vAtlas.z,.0001);vec4 a=texture2D(uWallsDay,uv),b=texture2D(uWallsNight,uv);vec3 wallLight=(a.rgb*a.a*uWallRange.x*(1.-uNight)+b.rgb*b.a*uWallRange.y*(uNight+dayTask*(1.-uNight)));surfaceWeight=smoothstep(.05,.91,vAtlas.z);bounce=mix(bounce,wallLight,surfaceWeight);}":""}
        // Cycles stores the diffuse response to the measured sky and to bounced
        // sunlight. Blend to the unoccluded environment beyond the receivers.
        float bakedWeight=max(bakeRegion*max(inRoom,surfaceWeight),${V?"floorMask*step(0.,uvF.x)*step(0.,uvF.y)*step(uvF.x,1.)*step(uvF.y,1.)":"0."});
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
        float finishOcclusion=${G?"mix(.40,1.,vFinish.w)":"1."};
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
        for(int i=0;i<5;i++){
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
        ${G?"reflectedLight.indirectSpecular*=mix(.45,1.,vFinish.w);":""}
      `)},O.customProgramCacheKey=()=>[G,V,H,q,Z,O.name==="plaster",O.name==="chips",O.name==="shade",O.name==="gravel"].join("/"),O.needsUpdate=!0,O}let L=new Map;function z(O){if(L.has(O))return L.get(O);let G;if(O==="glass"||O==="car-glass")G=new Ht({color:14870748,metalness:.08,roughness:.055,transparent:!0,opacity:O==="car-glass"?.17:.047,depthWrite:!1,side:Rt,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.035}),G.forceSinglePass=!0,G.onBeforeCompile=V=>{V.fragmentShader=V.fragmentShader.replace("#include <opaque_fragment>","float fresnel=pow(1.-abs(dot(normal,normalize(vViewPosition))),3.5);diffuseColor.a=clamp(opacity+.55*fresnel,.025,.76);#include <opaque_fragment>".replace(";#",`;
#`))};else{let V=O==="range"?"stone":O==="shade"?"linen":O,H=C[V]||[],q={vertexColors:!0,color:16777215,roughness:1,metalness:0,side:Rt,map:H[0]||null,normalMap:H[1]||null,roughnessMap:H[2]||null};O==="wood"?G=new Ht({...q,clearcoat:.17,clearcoatRoughness:.36}):O==="linen"||O==="rug"?G=new Ht({...q,sheen:.34,sheenRoughness:.85,sheenColor:9736324}):G=new ht(q);let Z={chips:.22,paving:.61,metal:.1,wood:.23,terrazzo:.32,stone:.82,plaster:.42,linen:.54,gravel:.9,tile:.28,rug:.7,range:1.2}[O]||.25;G.normalScale.setScalar(O==="plaster"?.13:O==="wood"?.26:n[V]?.recommendedNormalScale??Z),P(G,{finish:!0,floor:["terrazzo","plaster","paving","chips"].includes(O),bulb:O==="bulb",plainMap:O.startsWith("print-")})}return G.name=O,L.set(O,G),G}return{textures:C,material:z,patch:P,addLocalEmitter:w,syncEmitters:S,mixBakes:I,setPracticalPower:y,listenPractical(O){_=O},materials:L,setRoomReflection(O,G){G&&(g.uRoomOrigin.value=G.origin,g.uRoomLow.value=G.lo,g.uRoomHigh.value=G.hi),g.uRoomReflection.value=O,g.uHasReflection.value=+!!O}}}var Vv,Pi,fh=it(()=>{gt();Vv=i=>Math.max(0,Math.min(1,i)),Pi=(i,e,t)=>{let n=Vv((t-i)/(e-i));return n*n*(3-2*n)}});async function rA(i,e){let t=new xn,[n,s,r]=await Promise.all(["granite-evening","granite-horizon","moonlit-sky"].map(l=>t.loadAsync("assets/range/"+l+".webp")));for(let l of[n,s,r])l.colorSpace=lt,l.wrapS=Yt,l.anisotropy=4;e.wrapS=Yt;let a={panorama:{value:n},horizonBand:{value:s},moonSky:{value:r},measuredSun:{value:e},hour:{value:.4},night:{value:0}},o=new De(new Xn(730,72,40),new Lt({side:Wt,depthWrite:!1,uniforms:a,vertexShader:"varying vec3 ray;void main(){ray=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 ray; ${sA}
      void main(){gl_FragColor=vec4(sitePlate(ray),1.);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`}));o.name="Distant granite escarpment",o.renderOrder=-10,i.add(o);let c=l=>{a.hour.value=l,a.night.value=Pi(.48,.97,l)};return c.connectGround=()=>{let l=new Set;i.traverse(h=>{if(!h.isMesh||h.name!=="Sculpted desert alluvium"||l.has(h.material))return;let d=h.material,u=d.onBeforeCompile,f=d.customProgramCacheKey();l.add(d),d.onBeforeCompile=(p,g)=>{u.call(d,p,g),Object.assign(p.uniforms,a),p.fragmentShader=p.fragmentShader.replace("#include <common>",`#include <common>
`+sA);let m="#include <tonemapping_fragment>";p.fragmentShader=p.fragmentShader.replace(m,`
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
          gl_FragColor.rgb=mix(gl_FragColor.rgb,beforeDistantFog,merge);`)},d.customProgramCacheKey=()=>f+"/far-field-photograph",d.needsUpdate=!0})},c}var sA,aA=it(()=>{gt();fh();sA=`
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
  }`});function oA({water:i,camera:e,interactions:t,syncLook:n,audio:s}){let r=i.surface;r.updateWorldMatrix(!0,!1);let a=r.geometry.attributes.position,o=r.geometry.attributes.waterEdge,c=[],l=new Set,h=new R,d=new fe;for(let T=0;T<a.count;T++){if(o.getX(T)>.002)continue;h.fromBufferAttribute(a,T).applyMatrix4(r.matrixWorld);let C=Math.round(h.x*1e3)+","+Math.round(h.z*1e3);l.has(C)||(l.add(C),c.push(new fe(h.x,h.z)),d.add(c.at(-1)))}d.divideScalar(c.length),c.sort((T,C)=>Math.atan2(T.y-d.y,T.x-d.x)-Math.atan2(C.y-d.y,C.x-d.x));let u=r.position.y,f=new R(7.8,.52,9.35),p=new R(7.12,u+.25,8.44),g=new R(8.53,1.65,10.29),m=new R(-.83,.55,7.55),A=!1,_=!1,y=null,v=0,M=0;function E(T,C){let F=!1,I=1/0;for(let P=0,L=c.length-1;P<c.length;L=P++){let z=c[L],O=c[P],G=O.x-z.x,V=O.y-z.y;z.y>C!=O.y>C&&T<G*(C-z.y)/V+z.x&&(F=!F);let H=Je.clamp(((T-z.x)*G+(C-z.y)*V)/(G*G+V*V||1),0,1);I=Math.min(I,(T-z.x-G*H)**2+(C-z.y-V*H)**2)}return F&&I>.17*.17}function x(T,C){let F=e.position.clone(),I=T==="jump"?[F,new R(-.52,2.09,7.56),new R(.57,2.25,7.56),new R(1.48,1.43,7.56),new R(2.3,u-.38,7.56),C]:T==="in"?[F,new R(8.14,1.56,9.76),new R(7.75,.7,9.28),C]:[F,new R(7.72,.54,9.21),new R(8.12,1.45,9.68),C],P=T==="out"?new R(3,1,3):new R(.3,.52,4.3),L=new Nt().setFromRotationMatrix(new ge().lookAt(C,P,e.up));y={kind:T,curve:new ii(I),t:0,duration:T==="jump"?1.68:1.12,rotation:L,fromQ:e.quaternion.clone(),splashed:!1},_=!1}t.register({id:"pool-ladder",label:()=>A?"Climb out of pool":"Climb down pool ladder",point:f,enabled:()=>!y,reach:2.55,radius:.3,priority:-.1,use:()=>x(A?"out":"in",A?g:p)}),t.register({id:"pool-board",label:()=>"Jump from diving board",point:m,enabled:()=>!A&&!y,reach:2.45,radius:.41,use:()=>x("jump",new R(2.56,u+.25,7.56))});let b=t.actions.find(T=>T.id==="pool-touch");b&&(b.enabled=()=>!A&&!y);let w=new De(r.geometry,new Lt({name:"Water seen from the basin",side:Wt,transparent:!0,depthWrite:!1,uniforms:{clock:{value:0},night:{value:0}},vertexShader:"varying vec3 wp;void main(){vec4 p=modelMatrix*vec4(position,1.);wp=p.xyz;gl_Position=projectionMatrix*viewMatrix*p;}",fragmentShader:`varying vec3 wp;uniform float clock,night;
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
      }`}));w.position.copy(r.position),w.quaternion.copy(r.quaternion),w.scale.copy(r.scale),w.name="Underside of the pool surface",w.userData.noProbe=!0,w.visible=!1,r.parent.add(w);function S(){return Je.smoothstep(u+.025-e.position.y,0,.11)}return{get active(){return A},get traveling(){return!!y},get underwater(){return _},immersion:S,get label(){return e.position.distanceTo(p)<1.7?"Climb out of pool":_?"Surface":"Dip underwater"},use(){e.position.distanceTo(p)<1.7?x("out",g):_=!_},update(T,C,F,I){if(y){y.t=Math.min(1,y.t+T/y.duration);let P=Je.smoothstep(y.t,0,1);y.curve.getPoint(P,e.position),e.quaternion.slerpQuaternions(y.fromQ,y.rotation,P),n(),y.kind!=="out"&&!y.splashed&&e.position.y<u+.4&&(y.splashed=!0,i.disturb(e.position,1.5),s.cue("splash",.65)),y.t===1&&(A=y.kind!=="out",y=null)}else if(A){let P=e.position;E(P.x+C,P.z)&&(P.x+=C),E(P.x,P.z+F)&&(P.z+=F);let L=Math.hypot(C,F)/Math.max(T,.001);v+=T*(L*3.2),M+=T;let z=u+(_?-.56:.25)+Math.min(L,.8)*.028*Math.sin(v);P.y=Je.damp(P.y,z,6,T),L>.18&&M>.74&&(M=0,i.disturb(P,.68))}w.visible=S()>.005,w.material.uniforms.night.value=I,w.material.uniforms.clock.value+=T,s.setImmersion(S())},reset(){A=_=!1,y=null,w.visible=!1,s.setImmersion(0)}}}var cA=it(()=>{gt()});function Hv(i,e,t){let n=i.matrixWorld.clone().invert(),s=new R,r=[];for(let a of[...i.children]){if(!a.isMesh||a.material.name!=="metal")continue;let o=a.geometry,c=o.index,l=o.attributes.position,h=n.clone().multiply(a.matrixWorld),d=[[],[],[]];for(let u=0,f=c?c.count:l.count;u<f;u+=3){let p=[0,1,2].map(_=>c?c.getX(u+_):u+_);s.fromBufferAttribute(l,p[0]).applyMatrix4(h);let g=e?s.z:s.x,m=e?s.x:-s.z,A=Math.abs(s.y-1.04)<.028&&Math.abs(g)>.052&&m>t-.31&&m<t-.095;d[A?g<0?1:2:0].push(...p)}for(let u=1;u<=2;u++){if(!d[u].length)continue;let f=o.clone();f.setIndex(d[u]),f.clearGroups();let p=new De(f,a.material);p.name="Working brass lever",p.position.copy(a.position),p.quaternion.copy(a.quaternion),p.scale.copy(a.scale),p.castShadow=p.receiveShadow=!0,i.add(p);let g=new et,m=u===1?-1:1;g.position.set(e?t-.13:m*.075,1.04,e?m*.075:-(t-.13)),i.add(g),g.attach(p),r.push(g)}(d[1].length||d[2].length)&&(a.geometry=o.clone(),a.geometry.setIndex(d[0]),a.geometry.clearGroups())}return r}function lA(i,e){let t=i.userData.bounds,n=Math.max(t[2]-t[0],t[3]-t[1]),s=t[2]-t[0]>t[3]-t[1],r=i.userData.interaction==="hinge",a=new ht({name:"Satin brass latch fittings",color:10782025,metalness:.82,roughness:.32});e.patch(a,{plainMap:!0});let o=new an(1,1,1,20),c=new rn(1,1,1),l=[],h=new ge,d=new Nt,u=new R,f=new R;function p(y,v,M,E,x,b,w,S=0,T=0){d.setFromEuler(new Rn(S,0,T)),h.compose(u.set(v,M,E),d,f.set(x,b,w));let C=y.clone().toNonIndexed().applyMatrix4(h);l.push(C)}let g=r?Hv(i,s,n):[],m=new et;i.add(m),s||(m.rotation.y=Math.PI/2);let A;if(r){p(c,n+.001,1.015,0,.003,.145,.026);for(let y of[-1,1]){p(o,n-.13,1.04,y*.059,.012,.044,.012,Math.PI/2);for(let v of[.956,1.089])p(o,n-.13,v,y*.049,.004,.003,.004,Math.PI/2)}for(let y of[.958,1.071])p(o,n+.003,y,0,.0035,.002,.0035,0,Math.PI/2);A=new De(new an(.009,.009,.021,16),a),A.rotation.z=Math.PI/2,A.position.set(n+.004,1.015,0)}else{let y=t[2]-.12,v=.034;p(c,y,1.01,v,.038,.089,.008);for(let M of[.979,1.04])p(o,y,M,v+.005,.0038,.002,.0038,Math.PI/2);A=new De(new Ta(.006,.023,4,10),a),A.position.set(y,1.01,v+.014)}A.name=r?"Spring latch":"Thumb latch",m.add(A);let _=new De(en(l),a);_.name="Escutcheon fixings",m.add(_);for(let y of l)y.dispose();return c.dispose(),o.dispose(),y=>{for(let v of g)s?v.rotation.z=y*.39:v.rotation.x=y*.39;r?A.position.x=n+.004-y*.014:A.rotation.z=y*Math.PI*.43}}var uA=it(()=>{gt();jn()});function Kv(i){let e=[i[0]],t=[0],n=r=>{let a=ph(e.at(-1),r);a<1e-8||(t.push(t.at(-1)+a),e.push(r))};for(let r=1;r<i.length-1;r++){let a=i[r-1],o=i[r],c=i[r+1],l=ph(a,o),h=ph(o,c),d=Math.min(.22,l*.24,h*.24),u=Gs(o,a,d/l),f=Gs(o,c,d/h);n(u);for(let p=1;p<=32;p++){let g=p/32;n(Gs(Gs(u,o,g),Gs(o,f,g),g))}}n(i.at(-1));let s=t.at(-1);return{length:s,sample(r){let a=Ah(r)*s,o=0,c=t.length-1;for(;o+1<c;){let h=o+c>>1;t[h]<a?o=h:c=h}let l=t[c]-t[o];return Gs(e[o],e[c],l?(a-t[o])/l:0)}}}function Xv(i){return i<.065?i*i/(2*.065*(1-.065)):i>1-.065?1-(1-i)*(1-i)/(2*.065*(1-.065)):(i-.065/2)/(1-.065)}function Jv(i,e){for(let t=1;t<i.length;t++)if(e<=i[t][0]){let[n,s]=i[t-1],[r,a]=i[t];return Gs(s,a,Wv(Ah((e-n)/(r-n))))}return i.at(-1)[1]}function hA(i,e,t=!1){let n=Jr[i],s=Ah(e/n.duration),r=t?.5:Xv(s),a=.55;return{position:qv[i].sample(r),target:Jv(n.looks,r),title:n.title,fade:Math.max(0,1-e/a,(e-n.duration+a)/a)}}var Qc,Jr,Gs,ph,Wv,Ah,qv,dA=it(()=>{Qc={exterior:{position:[2.4,-14.3,1.65],target:[1.35,1,1.35],title:"Arroyo Fold"},"pool-edge":{position:[3.23451,-10.28421,1.65],target:[6.16366,-9.86102,1.15907],title:"At the pool ladder"},living:{position:[-1.35,5.22,1.65],target:[.65,2.15,1.05],title:"The conversation pit"},dining:{position:[5,.8,1.65],target:[6.5,4.3,1.4],title:"Afternoon at home"},kitchen:{position:[-3.55,2.05,1.65],target:[-6.4,3,1.3],title:"The kitchen"},entry:{position:[-8.45,4.6,1.65],target:[-4.8,5.6,1.15],title:"The gallery"},primary:{position:[-4.96,8.08,1.65],target:[-6.8,9.6,.85],title:"The primary bedroom"},kid:{position:[-1.15,7.5,1.65],target:[-2.4,9.6,1.1],title:"The small bedroom"},bath:{position:[.85,7.22,1.65],target:[.45,9.55,1.15],title:"Seafoam and porcelain"},den:{position:[5.5,7.7,1.65],target:[6.85,9.85,1.05],title:"A record in the den"},carport:{position:[14.6,.8,1.65],target:[12.8,4.2,.75],title:"Under the canopy"},"bath-vanity":{position:[1.2,9.15,1.65],target:[-.35,8.55,1.15],title:"Seafoam, walnut, and porcelain"},"kid-desk":{position:[-2.35,8.65,1.65],target:[-1.45,10.05,1.1],title:"A place to draw"},"built-in":{position:[-.95,5.05,1.65],target:[-.925,6.79,1.1],title:"Bookmatched walnut in the gallery"},patio:{position:[9.8,-3.6,1.65],target:[.7,-.4,1.35],title:"The shaded terrace"}},Jr=[{id:"water-to-living",title:"Across the water, into the living room",duration:49,eyes:[[2.4,-14.3,1.65],[-1.8,-11.4,1.65],[-3,-9.5,1.65],[-3,-7.5,1.65],[-2.65,-5.2,1.65],[-1.5,-3.5,1.65],[1.2,-2.6,1.65],[1.2,-.6,1.65],[1.2,.45,1.65],[1.38,1.96,1.35],[1.35,3.1,1.35],[1.95,2.9,1.5],[2.65,2.55,1.65],[3.8,3.4,1.65],[4.3,2.5,1.65],[4.3,1.25,1.65],[6.5,1.2,1.65]],looks:[[0,[1.35,1,1.35]],[.18,[1.8,.5,1.7]],[.37,[.4,1,1.3]],[.53,[.8,2.7,.75]],[.72,[.2,2.5,.65]],[.87,[3,1.3,1.25]],[1,[6.4,4.3,1.4]]]},{id:"kitchen-to-primary",title:"The kitchen, gallery, and quiet wing",duration:27,eyes:[[-2.7,2.8,1.65],[-3.6,2.8,1.65],[-5.8,2.65,1.65],[-6.65,2.65,1.65],[-6.65,3.3,1.65],[-6.65,4.45,1.65],[-6.7,5.8,1.65],[-6.8,6.35,1.65],[-6.8,7.55,1.65],[-6.65,7.96,1.65],[-5.17,7.98,1.65]],looks:[[0,[-6.6,2.65,1.25]],[.2,[-7.8,2,1.15]],[.43,[-6,4.9,1.2]],[.61,[-5.2,6.3,1.45]],[.78,[-6.7,9.35,.85]],[1,[-6.9,9.55,.8]]]},{id:"small-rooms",title:"A small bedroom and a seafoam bath",duration:30,eyes:[[-4,6.15,1.65],[-2.7,6.3,1.65],[-2.68,7.55,1.65],[-2.5,8.2,1.65],[-2.35,8.8,1.65],[-2.15,8.25,1.65],[-2.4,7.8,1.65],[-2.7,7.45,1.65],[-2.7,6.3,1.65],[-.9,6.25,1.65],[.8,6.3,1.65],[.8,7.5,1.65],[.8,8.5,1.65],[.8,9.25,1.65]],looks:[[0,[-2.7,8.4,1.2]],[.23,[-3.8,9.45,1.2]],[.37,[-4.38,9.28,1.7]],[.5,[-1.45,9.8,1.05]],[.66,[.8,7.8,1.25]],[.82,[-.3,8.6,1.1]],[1,[.35,10.25,1]]]},{id:"records-to-canopy",title:"A record in the den, then the open canopy",duration:48,eyes:[[3.2,6.2,1.65],[5.5,6.35,1.65],[5.5,7.65,1.65],[5.7,7.9,1.65],[6.4,7.9,1.65],[7.3,7.83,1.65],[6.4,7.6,1.65],[5.5,7.55,1.65],[5.5,6.3,1.65],[4.35,6,1.65],[4.3,4.4,1.65],[4.3,2.65,1.65],[4.3,1.15,1.65],[5.95,1.15,1.65],[5.95,-.7,1.65],[8.4,-1.4,1.65],[10.7,-.2,1.65],[10.5,1.8,1.65],[10.45,4.3,1.65]],looks:[[0,[5.5,8.2,1.25]],[.14,[6,10.35,1.05]],[.26,[8.35,9.3,1.1]],[.36,[6.1,10.4,1]],[.49,[6.5,3.1,1.4]],[.63,[5.5,3.6,1.4]],[.76,[11.9,3.8,1.1]],[1,[12.5,4.1,1]]]}],Gs=(i,e,t)=>i.map((n,s)=>n+(e[s]-n)*t),ph=(i,e)=>Math.hypot(...i.map((t,n)=>t-e[n])),Wv=i=>i*i*(3-2*i),Ah=i=>Math.max(0,Math.min(1,i));qv=Jr.map(i=>Kv(i.eyes))});function fA({camera:i,renderer:e,scene:t,solidRects:n=[],yardFloor:s=()=>0,doors:r=[],setTime:a=()=>{},interactions:o,light:c,audio:l,dirty:h,car:d,water:u,state:f}){let p=k=>document.getElementById(k),g=e.domElement,m=p("start-screen"),A=p("hud"),_=p("pause-menu"),y=new fe,v=new fe,M=new Set,E=new fe,x=new Rn(0,0,0,"YXZ"),b=window.matchMedia("(prefers-reduced-motion: reduce)").matches,w=window.matchMedia("(pointer: coarse)").matches,S="menu",T="walk",C=0,F=0,I=.4,P=0,L=0,z=null,O=null,G=0,V=!1,H=!1,q=r.map(k=>({group:k,basePosition:k.position.clone(),baseQuaternion:k.quaternion.clone(),open:0,target:0,inverse:k.matrixWorld.clone().invert(),handle:lA(k,c),handleTime:1,lever:0})),Z=new R(0,1,0),W=new Nt,j=new R,re=.22,le=new URLSearchParams(location.search).get("view")==="pool"?"pool-edge":"exterior";function ae(){x.setFromQuaternion(i.quaternion,"YXZ"),C=x.y,F=x.x}let me=null,Fe=null,xe=null,Ie=oA({water:u,camera:i,interactions:o,audio:l,syncLook:ae});function qe(k){me=null,Fe=null,xe=null,Ie.reset();let X=Qc[k];return X?(i.position.copy(Wa(X.position)),i.lookAt(Wa(X.target)),ae(),E.set(0,0),!0):!1}function He(k,X){let{group:U}=k;U.position.copy(k.basePosition),U.quaternion.copy(k.baseQuaternion),U.userData.interaction==="slide"?U.position.x+=Number(U.userData.delta||1.9)*X:U.quaternion.multiply(W.setFromAxisAngle(Z,Number(U.userData.delta||Math.PI/2)*X)),U.updateMatrixWorld(!0),k.inverse.copy(U.matrixWorld).invert()}function mt(k,X,U){return j.set(X,0,-U).applyMatrix4(k.inverse),dt(j.x,-j.z,k.group.userData.bounds)}function dt(k,X,U){if(!U)return 1/0;let J=zc(k,U[0],U[2]),te=zc(X,U[1],U[3]);return(k-J)**2+(X-te)**2}function It(k,X,U,J=re){return dt(k,X,U)<J*J}function rt(k,X){if(k<-24.5||k>23.5||X<-24.5||X>23.5||n.some(U=>It(k,X,U))||q.some(U=>mt(U,k,X)<re*re))return!0;for(let U of o.solids){if(U.clearance){if(U.clearance(k,-X)<(re+.05)**2)return!0;continue}let J=U.bounds();if(J&&J.max.y>.2&&J.min.y<1.8&&k>J.min.x-re&&k<J.max.x+re&&-X>J.min.z-re&&-X<J.max.z+re)return!0}return!1}function Gt(k,X){let U=Math.max(1,Math.ceil(Math.hypot(k,X)/.06));for(let J=0;J<U;J++){let te=i.position.x,pe=-i.position.z;rt(te+k/U,pe)||(i.position.x+=k/U),rt(i.position.x,pe+X/U)||(i.position.z-=X/U)}}function xt(k){!k||S!=="walk"||(k.target=k.target>.5?0:1,k.handleTime=0,G=0,p("announcement").textContent=`${k.target?"Opening":"Closing"} ${k.group.userData.label||"door"}`)}for(let k of q){let X=k.group,U=new R,J=X.userData.bounds,te=new R((J[0]+J[2])/2,1.12,-(J[1]+J[3])/2),pe=new je(new R(J[0]-.07,0,-J[3]-.1),new R(J[2]+.07,2.48,-J[1]+.1)),de=new je;o.register({id:"door-"+X.userData.label.toLowerCase().replaceAll(" ","-"),door:!0,point:()=>X.localToWorld(U.copy(te)),reach:2.65,label:()=>(k.target>.5?"Close ":"Open ")+X.userData.label,hitTest:ue=>ue.ray.intersectsBox(de.copy(pe).applyMatrix4(X.matrixWorld))?ue.intersectObject(X,!0)[0]:null,use:()=>xt(k)})}let Se=[["pit","Sit in conversation pit",[-.16,.22,-3.78],[-.16,1.15,-3.74],[2.4,1,-1.36],.46],["pit-west","Sit on west sofa",[-2.04,.22,-2.56],[-2.04,1.15,-2.56],[2.94,.94,-1.34],.37],["den","Sit in listening chair",[4,.52,-8.83],[4,1.38,-8.76],[5.37,.96,-10.33],.28],["den-east","Sit in lounge chair",[7.2,.52,-8.83],[7.2,1.38,-8.76],[6.6,1.03,-10.36],.27],["driver","Sit behind the wheel",[11.87,1.04,-4.6],[11.87,1.5,-4.5],[11.87,1.4,-6.5],.36],["chaise","Recline on pool chaise",[-6.9,.52,5.85],[-6.86,1.04,5.58],[-6.1,.78,11.8],.33],["chaise-south","Recline on garden chaise",[-6.8,.52,8.55],[-6.82,1.04,8.3],[-7.05,.78,14.6],.33]];function Qe(k,X){let U=i.quaternion.clone();if(X){let J=new ge().lookAt(k,X,i.up);U.setFromRotationMatrix(J)}Fe={from:i.position.clone(),to:k,fromQ:i.quaternion.clone(),toQ:U,t:0},E.set(0,0),M.clear()}function Ue(){xe={position:i.position.clone(),rotation:i.quaternion.clone(),seated:me},me={id:"reading",exit:xe.position},Qe(new R(.356,.72,-3.02),new R(.356,.145,-2.58))}function Q(){let k=xe;xe=null,me=k.seated,Qe(k.position),Fe.toQ.copy(k.rotation)}function Ee(){if(xe){let U=o.actions.find(J=>J.id==="journal-close");return U.enabled()?(U.use(),l.cue("page",.3),Q(),!0):!1}if(!me)return!1;let k=me.id==="driver",X=me.exit;return me=null,k&&(d.doors[0].target||(o.actions.find(J=>J.id==="car-door-left").use(),l.cue("latch",.45)),rt(X.x,-X.z)&&X.set(10.45,1.65,-3.26)),Qe(X),Fe.fromDriver=k,!0}for(let[k,X,U,J,te,pe]of Se)o.register({id:"seat-"+k,label:()=>X,point:new R(...U),radius:pe,reach:2.15,enabled:()=>!me&&!Fe&&!Ie.active&&!Ie.traveling&&(k!=="driver"||Math.abs(d.doors[0].angle)>.68),use:()=>{me={id:k,exit:i.position.clone()},Qe(new R(...J),new R(...te))}});function Ve(k=y){if(S!=="walk"||Fe||Ie.traveling)return!1;let X=o.pick(i,k);if(!X)return Ie.active?(Ie.use(),!0):Ee();let U=X.action.label(),J=X.action.id;return X.action.use(X.point),G=0,J==="journal-open"&&Ue(),J==="journal-close"&&xe&&Q(),X.action.door?l.cue(J.includes("sliding")?"slide":"latch",.5):J.startsWith("car-door-")?l.cue(U.startsWith("Close")?"car-close":"latch",.58):J==="kitchen-cupboard"?l.cue("latch",.26):J==="pool-touch"?l.cue("ripple",.24):J.startsWith("journal-")?l.cue("page",.33):/lamp|light|television|record-player/.test(J)&&l.cue("switch",.33),X.action.door||(p("announcement").textContent=U),he(),!0}function Xe(){p("sound-toggle").textContent=l.muted?"Sound off":"Sound on",p("pause-sound").textContent=l.muted?"Unmute sound":"Mute sound",p("sound-toggle").setAttribute("aria-pressed",String(l.muted)),p("sound-toggle").setAttribute("aria-label",l.muted?"Turn sound on":"Turn sound off"),p("pause-sound").setAttribute("aria-pressed",String(l.muted))}function ce(){l.setMuted(!l.muted),l.start(),Xe()}function bt(){document.pointerLockElement===g&&document.exitPointerLock()}function Me(k){S=k,m.hidden=k!=="menu",A.hidden=k==="menu",p("touch-controls").hidden=k!=="walk"||!w,p("walk-hint").hidden=k!=="walk",p("reticle").hidden=k!=="walk",p("tour-caption").hidden=k!=="tour",p("interaction").hidden=!0,p("pause-open").innerHTML=`${k==="tour"?"Pause tour":"Pause"} <span class="key">Esc</span>`,G=0}async function Ge(k){if(_.open&&_.close(),Me(k),g.focus({preventScroll:!0}),k==="tour"){me=null,Fe=null,xe=null,Ie.reset(),bt(),P=0,L=0,H=!1;for(let U of q)U.target=1,U.open=1,He(U,1);E.set(0,0),M.clear(),_e(0)}else ae(),E.set(0,0),M.clear(),p("tour-caption").textContent="",p("scene-fade").style.opacity=0;await l.start()||(p("announcement").textContent="Sound is unavailable. You can continue exploring.")}function N(){S==="menu"||S==="paused"||(T=S,Me("paused"),M.clear(),E.set(0,0),bt(),p("resume").textContent=T==="tour"?"Resume tour":"Resume walk",p("tour-toggle").textContent=T==="tour"?"Walk from here":"Play tour",_.showModal(),p("resume").focus())}function B(){S==="paused"&&(_.open&&_.close(),Me(T),g.focus({preventScroll:!0}))}function Y(){_.open&&_.close(),Me("menu"),bt(),M.clear(),p("scene-fade").style.opacity=0,document.body.classList.remove("film"),qe(le),p("start-walk").focus()}p("start-walk").disabled=!1,p("start-walk").textContent="Walk through",p("start-tour").disabled=!1,p("load-status").textContent="",p("start-walk").addEventListener("click",()=>Ge("walk")),p("start-tour").addEventListener("click",()=>Ge("tour")),p("sound-toggle").addEventListener("click",ce),p("pause-sound").addEventListener("click",ce),p("pause-open").addEventListener("click",N),p("interaction").addEventListener("click",()=>Ve()),p("resume").addEventListener("click",k=>{k.preventDefault(),B()}),p("pause-close").addEventListener("click",k=>{k.preventDefault(),B()}),p("return-start").addEventListener("click",Y),p("tour-toggle").addEventListener("click",()=>Ge(T==="tour"?"walk":"tour")),_.addEventListener("cancel",k=>{k.preventDefault(),B()}),_.addEventListener("close",()=>{S==="paused"&&B()}),p("time-slider").addEventListener("input",k=>{I=Number(k.target.value),a(I),p("time-label").textContent=I>.82?"Night":I>.6?"Blue hour":I>.27?"Golden hour":"Afternoon"});let oe=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowLeft","ArrowDown","ArrowRight","ShiftLeft","ShiftRight"]);window.addEventListener("keydown",k=>{if(!(k.target instanceof HTMLInputElement)){if(S!=="menu"&&k.code==="KeyH"&&!k.repeat){document.body.classList.toggle("film");return}if(k.code==="Escape"||k.code==="KeyP"){k.preventDefault(),S==="paused"?B():N();return}S==="menu"||S==="paused"||(k.code==="KeyM"&&!k.repeat&&ce(),k.code==="KeyT"&&!k.repeat&&Ge(S==="tour"?"walk":"tour"),k.code==="Space"&&S==="tour"&&(k.preventDefault(),H=!H),k.code==="KeyE"&&!k.repeat&&(k.preventDefault(),Ve()),oe.has(k.code)&&(k.preventDefault(),me&&Ee(),M.add(k.code),G=0,S==="tour"&&(Me("walk"),ae(),p("scene-fade").style.opacity=0)))}}),window.addEventListener("keyup",k=>M.delete(k.code)),window.addEventListener("blur",()=>{M.clear(),(S==="walk"||S==="tour")&&N()}),document.addEventListener("visibilitychange",()=>{document.hidden&&S!=="menu"&&N()}),document.addEventListener("pointerlockchange",()=>{let k=V;V=document.pointerLockElement===g,k&&!V&&S==="walk"&&N()}),document.addEventListener("mousemove",k=>{V&&S==="walk"&&(C-=k.movementX*.002,F=zc(F-k.movementY*.002,-1.35,1.35),G=0)}),g.addEventListener("pointerdown",k=>{S!=="walk"||V||(O={id:k.pointerId,x:k.clientX,y:k.clientY,distance:0,touch:k.pointerType==="touch"},g.setPointerCapture(k.pointerId))}),g.addEventListener("pointermove",k=>{if(!O||O.id!==k.pointerId||S!=="walk")return;let X=k.clientX-O.x,U=k.clientY-O.y;O.distance+=Math.hypot(X,U),O.x=k.clientX,O.y=k.clientY,C-=X*.003,F=zc(F-U*.003,-1.35,1.35),G=0}),g.addEventListener("pointerup",k=>{if(S!=="walk")return;if(V){Ve();return}if(!O||O.id!==k.pointerId)return;let X=O.distance<6,U=O.touch;if(O=null,!X)return;let J=g.getBoundingClientRect();if(v.set(2*(k.clientX-J.left)/J.width-1,1-2*(k.clientY-J.top)/J.height),!Ve(v)&&!U&&g.requestPointerLock)try{g.requestPointerLock()?.catch?.(()=>{})}catch{}}),g.addEventListener("pointercancel",()=>{O=null});for(let k of document.querySelectorAll("[data-move]")){let X={forward:"KeyW",backward:"KeyS",left:"KeyA",right:"KeyD"}[k.dataset.move];k.addEventListener("pointerdown",U=>{U.preventDefault(),k.setPointerCapture(U.pointerId),me&&Ee(),M.add(X),G=0});for(let U of["pointerup","pointercancel","lostpointercapture"])k.addEventListener(U,()=>M.delete(X))}function ie(k){for(let X of q){if(X.handleTime<.46){X.handleTime=Math.min(.46,X.handleTime+k);let ue=X.handleTime,Re=ue<.09?Je.smoothstep(ue,0,.09):1-Je.smoothstep(ue,.16,.46);if(X.handle(Re),X.lever=Re,h({reflections:!1}),ue<.065)continue}if(X.target===X.open)continue;let U=Math.abs(X.open-X.target)<6e-4?X.target:Je.damp(X.open,X.target,5,k),J=X.open,te=Math.abs(Number(X.group.userData.delta||1.9)*(U-J)),pe=Math.max(1,Math.ceil(te/.045)),de=mt(X,i.position.x,-i.position.z);for(let ue=1;ue<=pe;ue++){let Re=Je.lerp(J,U,ue/pe);He(X,Re);let $e=mt(X,i.position.x,-i.position.z);if(S==="walk"&&$e<(re+.025)**2&&$e<de-1e-8){He(X,X.open);break}de=$e,X.open=Re}}}function he(){z=Fe||Ie.traveling?null:o.pick(i,y);let k=p("interaction"),X=Fe||Ie.traveling?"":z?z.action.label():me&&!Fe?xe?"Put down journal":me.id==="driver"?"Get out of car":"Stand up":Ie.active?Ie.label:"";k.hidden=!X;let U=X+(w?"":" \xB7 E");X&&k.textContent!==U&&(k.textContent=U)}function _e(k){if(H)return;for(L+=k;L>=Jr[P].duration;)L-=Jr[P].duration,P=(P+1)%Jr.length;let X=hA(P,L,b);i.position.copy(Wa(X.position)),i.lookAt(Wa(X.target)),p("scene-fade").style.opacity=String(X.fade),p("tour-caption").textContent!==X.title&&(p("tour-caption").textContent=X.title)}function se(k){if(k=Math.min(Math.max(k,0),.08),ie(k),S==="walk"&&Ie.traveling)E.set(0,0),Ie.update(k,0,0,f.night),he();else if(S==="walk"&&Fe){let X=Fe;(!X.fromDriver||Math.abs(d.doors[0].angle)>.9)&&(X.t=Math.min(1,X.t+k/.44));let U=Je.smoothstep(X.t,0,1);i.position.lerpVectors(X.from,X.to,U),i.quaternion.slerpQuaternions(X.fromQ,X.toQ,U),ae(),X.t===1&&(Fe=null),he()}else if(S==="walk"&&me)x.set(F,C,0,"YXZ"),i.quaternion.setFromEuler(x),he();else if(S==="walk"){let X=Number(M.has("KeyW")||M.has("ArrowUp"))-Number(M.has("KeyS")||M.has("ArrowDown")),U=Number(M.has("KeyD")||M.has("ArrowRight"))-Number(M.has("KeyA")||M.has("ArrowLeft")),J=new fe(U,X);J.lengthSq()>1&&J.normalize();let te=M.has("ShiftLeft")||M.has("ShiftRight")?3:1.65;E.x=Je.damp(E.x,J.x*te,11,k),E.y=Je.damp(E.y,J.y*te,11,k),!U&&Math.abs(E.x)<.008&&(E.x=0),!X&&Math.abs(E.y)<.008&&(E.y=0);let pe=(E.x*Math.cos(C)-E.y*Math.sin(C))*k,de=(E.x*Math.sin(C)+E.y*Math.cos(C))*k;if(Ie.active)Ie.update(k,pe*.48,-de*.48,f.night);else{(pe||de)&&Gt(pe,de);let ue=i.position.x,Re=-i.position.z,$e=ue>-2.5&&ue<2.2&&Re>.9&&Re<4.3?-.3:s(ue,-Re);ue>1.68&&ue<2.2&&Re>1.7&&Re<3.2&&($e=-.15);let Ae=1.65+$e;i.position.y=Math.abs(i.position.y-Ae)<45e-5?Ae:Je.damp(i.position.y,Ae,14,k)}x.set(F,C,0,"YXZ"),i.quaternion.setFromEuler(x),he(),G+=k,A.classList.toggle("quiet",G>7)}else S==="tour"&&_e(k);l.update(i,I)}return qe(le),Xe(),a(I),{update:se,pose(k){if(!Qc[k])return null;_.open&&_.close(),Me("walk"),p("scene-fade").style.opacity=0;for(let X of q)X.target=1,X.open=1,He(X,1);return qe(k),{position:i.position.clone(),target:Wa(Qc[k].target)}},get mode(){return S},get transitioning(){return!!Fe||Ie.traveling},get inCar(){return me?.id==="driver"||!!Fe?.fromDriver},get seated(){return me?.id??null},get swimming(){return Ie.active},immersion:Ie.immersion,aimAt(k,X){i.position.copy(k),i.lookAt(X),ae(),E.set(0,0)}}}var Wa,zc,pA=it(()=>{gt();cA();uA();dA();Wa=([i,e,t])=>new R(i,t,-e),zc=(i,e,t)=>Math.min(t,Math.max(e,i))});function AA(i,e){let t=0,n=new Set;if(i.traverse(s=>{/^carport[ _]/.test(s.name)&&(s.visible=!1,s.traverse(r=>{n.add(r),r.isMesh&&t++}))}),!t)throw new Error("The original hardtop carport batch was not found");if(e)for(let s=e.length-1;s>=0;s--)n.has(e[s])&&e.splice(s,1)}var mA=it(()=>{});function gA({scene:i,light:e}){let t="Fitted black Bakelite telephone cradle",n=i.getObjectByName(t);if(n)return n;let s=[],r=(d,u)=>{let f=new ii(d.map(p=>new R(...p)),!1,"catmullrom",.3);s.push(new si(f,12,u,8,!1))},a=(d,u)=>{let f=new Xn(1,16,8);f.scale(...u),f.translate(...d),s.push(f)},o=[];for(let[d,u]of[[-5.235,-5.275],[-5.005,-4.965]]){a([d,.865,-5.2],[.02,.009,.024]),r([[d,.861,-5.2],[d,.884,-5.2],[(d+u)/2,.906,-5.2],[u,.916,-5.2]],.011);for(let f of[-5.165,-5.235])r([[u,.911,-5.2],[u,.919,(f-5.2)/2],[u,.9327,f]],.006),a([u,.9327,f],[.008,.006,.008]),o.push(new R(u,.9387,f))}let c=en(s);for(let d of s)d.dispose();let l=new ht({name:"Molded polished black Bakelite cradle",color:1514264,roughness:.25});e.patch(l,{plainMap:!0});let h=new De(c,l);return h.name=t,h.castShadow=!0,h.receiveShadow=!0,h.userData.cradleContacts=o.map(d=>d.toArray()),i.add(h),h}var _A=it(()=>{gt();jn()});async function xA(i,e){let t=await new xn().loadAsync("assets/child-moon-drawing.webp");t.colorSpace=lt,t.anisotropy=4;let n=new ht({map:t,roughness:.96,side:Rt});n.name="Pencil and crayon on drawing paper",e.patch(n,{plainMap:!0});let s=[],r=[],a=[],o=10;for(let h=0;h<=o;h++)for(let d=0;d<=o;d++){let u=d/o,f=h/o,p=Math.max(0,(.17-u-f)/.17);if(s.push(-1.43+(f-.5)*.31,.7617+.0021*p*p,-9.8+(u-.5)*.23),r.push(u,f),d<o&&h<o){let g=h*(o+1)+d;a.push(g,g+1,g+o+1,g+1,g+o+2,g+o+1)}}let c=new Ze;c.setAttribute("position",new Be(s,3)),c.setAttribute("uv",new Be(r,2)),c.setIndex(a),c.computeVertexNormals();let l=new De(c,n);l.name="Ruth\u2019s pencil drawing of a moon flight",l.receiveShadow=!0,i.add(l)}var bA=it(()=>{gt()});function Yv(i,e,t){let n=new Map,s=e.cellMeters,r=e.toleranceMeters**2,a=f=>f.map(p=>Math.floor(p/s)).join("/");for(let f of e.triangles){let p=[0,1,2].map(m=>f.v.reduce((A,_)=>A+_[m],0)/3),g=a(p);n.has(g)||n.set(g,[]),n.get(g).push(f)}let o={removedCaseTriangles:0,movingOriginalTriangles:0,movingDrawCalls:0},c=[],l=null,h=new R,d=new R;i.updateWorldMatrix(!0,!0);let u=[];i.traverse(f=>{f.isMesh&&u.push(f)});for(let f of u){let p=f.geometry,g=p.attributes.position,m=p.index;if(!g)continue;let A=[],_=[];for(let y=0;y<(m?.count??g.count);y+=3){let v=[0,1,2].map(w=>m?m.getX(y+w):y+w),M=v.map(w=>h.fromBufferAttribute(g,w).applyMatrix4(f.matrixWorld).toArray()),E=[0,1,2].map(w=>M.reduce((S,T)=>S+T[w],0)/3);if(E[0]<-5.68||E[0]>-5.07||E[1]<.17||E[1]>.57||E[2]<-10.37||E[2]>-9.82){A.push(...v);continue}let x=E.map(w=>Math.floor(w/s)),b=null;e:for(let w=-1;w<=1;w++)for(let S=-1;S<=1;S++)for(let T=-1;T<=1;T++)for(let C of n.get([x[0]+w,x[1]+S,x[2]+T].join("/"))??[])if(M.every(F=>C.v.some(I=>F.reduce((P,L,z)=>P+(L-I[z])**2,0)<r))){b=C;break e}b?.action==="remove"?(o.removedCaseTriangles++,l=f.material,c.push({geometry:p,ids:v,triangle:new qn(...M.map(w=>new R(...w)))})):b?.action==="move"?(_.push(...v),o.movingOriginalTriangles++):A.push(...v)}if(_.length){let y=new Ze,v=new ze().getNormalMatrix(f.matrixWorld);for(let[E,x]of Object.entries(p.attributes)){let b=new Float32Array(_.length*x.itemSize);for(let w=0;w<_.length;w++)if(E==="position")h.fromBufferAttribute(x,_[w]).applyMatrix4(f.matrixWorld).toArray(b,w*3);else if(E==="normal")d.fromBufferAttribute(x,_[w]).applyMatrix3(v).normalize().toArray(b,w*3);else for(let S=0;S<x.itemSize;S++)b[w*x.itemSize+S]=x.getComponent(_[w],S);y.setAttribute(E,new Mt(b,x.itemSize))}let M=new De(y,f.material);M.name="Original upper nightstand drawer / "+f.material.name,M.castShadow=M.receiveShadow=!0,t.add(M),o.movingDrawCalls++}A.length!==(m?.count??g.count)&&(p.setIndex(A),p.computeBoundingBox(),p.computeBoundingSphere())}if(o.removedCaseTriangles!==e.expected.remove||o.movingOriginalTriangles!==e.expected.move)throw Error("Original east nightstand geometry did not match: "+JSON.stringify(o));return{stats:o,shellSamples:c,caseMaterial:l}}function jv(i,e){let t=e[0].geometry.attributes,n=new Map;for(let[c,l]of Object.entries(t))c!=="position"&&c!=="normal"&&n.set(c,new Float32Array(i.attributes.position.count*l.itemSize));let s=new R,r=new R,a=new R,o=new R;for(let c=0;c<i.attributes.position.count;c++){s.fromBufferAttribute(i.attributes.position,c);let l=1/0,h=null;for(let u of e){u.triangle.closestPointToPoint(s,r);let f=r.distanceToSquared(s);f<l&&(l=f,h=u,a.copy(r))}h.triangle.getBarycoord(a,o);let d=o.toArray();for(let[u,f]of n){let p=h.geometry.attributes[u];for(let g=0;g<p.itemSize;g++)f[c*p.itemSize+g]=h.ids.reduce((m,A,_)=>m+p.getComponent(A,g)*d[_],0)}}for(let[c,l]of n)i.setAttribute(c,new Mt(l,t[c].itemSize))}async function vA({scene:i,core:e=i,loader:t,light:n,register:s,dirty:r,animateRegion:a=()=>{}}){let[o,c]=await Promise.all([fetch("assets/nightstand-source.json"),t.loadAsync("assets/nightstand.glb")]);if(!o.ok)throw Error("Nightstand source geometry unavailable");let l=await o.json(),h=new et;h.name="Working east primary nightstand",i.add(h);let d=new et;d.name="Primary bedside upper drawer and original pulls",h.add(d);let{stats:u,shellSamples:f,caseMaterial:p}=Yv(e,l,d),g=new Map;c.scene.updateWorldMatrix(!0,!0),c.scene.traverse(E=>{if(!E.isMesh)return;let x=E.userData.nightstandPart;if(x!=="static"&&x!=="drawer")throw Error("Unlabelled nightstand replacement mesh");let b=E.geometry.clone().applyMatrix4(E.matrixWorld),w=x==="static"&&E.material.name==="walnut",S=w?p:E.material;w&&jv(b,f);let T=x+"/"+S.uuid;g.has(T)||g.set(T,{part:x,material:S,geometries:[]}),b.attributes.uv||b.setAttribute("uv",new Be(new Float32Array(b.attributes.position.count*2),2)),g.get(T).geometries.push(b)});for(let{part:E,material:x,geometries:b}of g.values()){x!==p&&n.patch(x,{plainMap:!0});let w=new De(en(b),x);w.name="Nightstand "+E+" / "+x.name,w.castShadow=w.receiveShadow=!0,(E==="drawer"?d:h).add(w);for(let S of b)S.dispose()}u.replacementDrawCalls=g.size;let m=!1,A=0,_=new R(-5.5295,.51,-9.85),y=_.clone(),v=new je(new R(-5.66,.455,-10.31),new R(-5.08,.56,-9.54));a(()=>Math.abs(A-(m?1:0))>1e-5?v:null);let M=new je(new R(-5.655,.455,-9.88),new R(-5.084,.56,-9.88));return s({id:"primary-nightstand-drawer",label:()=>m?"Close bedside drawer":"Open bedside drawer",point:()=>y.copy(_).add(d.position),reach:1.75,radius:.095,bounds:()=>A<.02?null:(M.max.z=-9.85+.27*A,M),use(){m=!m,r({shadows:!0})}}),{drawer:d,stats:u,update(E=0){let x=m?1:0;return A===x?!1:(A=Je.damp(A,x,7,Math.max(0,Math.min(E,.06))),Math.abs(A-x)<2e-4&&(A=x),d.position.z=.27*A,r({reflections:!1}),!0)}}}var yA=it(()=>{gt();jn()});function SA({scene:i,light:e,register:t,dirty:n=()=>{},audio:s,animateRegion:r=()=>{}}){let a=new et;a.name="Child\u2019s enamel-ringed wooden spinning top",i.add(a);let o=new et;o.name="Top physical tip and body",a.add(o);let c=(L,z)=>{let O=new ht({name:L,...z});return e.patch(O,{plainMap:!0}),O},l=c("Turned wood and hand-painted enamel rings",{color:16777215,roughness:.38,vertexColors:!0}),h=c("Spinning top small polished brass tip",{color:11834706,roughness:.26,metalness:.78}),d=c("Still colored glass cat-eye marbles",{color:16777215,roughness:.16,metalness:.12,vertexColors:!0}),u=new Mr(Hc.map(([L,z])=>new fe(L,z)),48),f=[],p=u.attributes.position,g=new ye;for(let L=0;L<p.count;L++){let z=p.getY(L),O=Math.atan2(p.getZ(L),p.getX(L));g.set(z>=.027&&z<.038?10567472:z>=.047&&z<.055?3631992:z>=.06&&z<.067?14997164:12025153),g.multiplyScalar(1+.035*Math.sin(O*7+z*740)),z>=.038&&z<.047&&Math.abs(O-.7)<.17&&g.set(15391926),f.push(g.r,g.g,g.b)}u.setAttribute("color",new Be(f,3));let m=new De(u,l);m.name="Top turned wooden body and enamel rings";let A=new De(new Mr(MA.map(([L,z])=>new fe(L,z)),24),h);A.name="Top brass contact tip";for(let L of[m,A])L.castShadow=!0,L.receiveShadow=!0,o.add(L);let _=[];for(let[L,z,O,G]of[[-1.17,-10.04,.009,4684921],[-1.15,-10.11,.011,10120246]]){let V=new Xn(O,20,12),H=[],q=V.attributes.position;for(let Z=0;Z<q.count;Z++)g.set(Math.sin(Math.atan2(q.getZ(Z),q.getX(Z))*3+q.getY(Z)/O*2)>.6?15128756:G),H.push(g.r,g.g,g.b);V.setAttribute("color",new Be(H,3)),V.translate(L,.76+O,z),_.push(V)}let y=new De(en(_),d);for(let L of _)L.dispose();y.name="Two still cat-eye glass marbles on writing desk",y.castShadow=!0,y.receiveShadow=!0,a.add(y);let v=new Nt,M=new Nt,E=new Nt,x=new R(0,1,0),b=new R(0,0,1),w=new R(-1.43,.805,-10.1),S=Ka,T=!1,C=!1;function F(L){let z,O,G;if(L<5.8?z=.025+.075*(L/5.8)**2+.012*Math.sin(L*3)*Math.sin(Math.PI*L/5.8):L<7.2?z=.1+.6*Vc((L-5.8)/1.4):z=.7+($v-.7)*Vc(L-7.2),O=L<7.2?.55*L+.055*L*L:6.8112+.37*Vc(L-7.2),L<7.2)G=52*L-2.8*L*L;else{let q=EA(L-7.2);G=229.248+11.68*(q-q*q+q*q*q/3)}v.setFromAxisAngle(x,O),M.setFromAxisAngle(b,z),E.setFromAxisAngle(x,G),o.quaternion.copy(v).multiply(M).multiply(E);let V=Math.min(Wc(Hc,z),Wc(MA,z)),H=.003+.009*Vc((L-4)/3.2);o.position.set(-1.43+H*Math.cos(O),Zv-V,-10.1+H*.7*Math.sin(O)),o.updateMatrixWorld(!0)}F(Ka);let I=new je(new R(-1.59,.758,-10.24),new R(-1.27,.91,-9.96)),P=t({id:"child-spinning-top",label:()=>T?"Spin the wooden top again":"Spin the wooden top",point:w,reach:2.1,radius:.11,use:()=>{S=0,T=!0,C=!1,F(0),n({shadows:!0})}});return r(()=>T?I:null),n({shadows:!0}),{root:a,top:o,marbles:y,region:I,action:P,get active(){return T},get time(){return S},duration:Ka,update(L){return T?(S=Math.min(Ka,S+Math.max(0,L)),F(S),!C&&S>=7.65&&(C=!0,s?.cue?.("latch",.065,w)),S===Ka&&(T=!1,n({shadows:!0})),!0):!1}}}var Ka,Zv,Hc,MA,EA,Vc,Wc,mh,gh,$v,wA=it(()=>{gt();jn();Ka=8.2,Zv=.7602,Hc=[[.006,.01],[.01,.016],[.02,.027],[.03,.038],[.036,.047],[.039,.055],[.038,.06],[.031,.067],[.016,.073],[.006,.077],[.0055,.097],[.008,.101],[.008,.104],[.005,.108],[0,.109]],MA=[[0,0],[.0015,.001],[.004,.011],[.006,.014]],EA=i=>Math.max(0,Math.min(1,i)),Vc=i=>(i=EA(i),i*i*(3-2*i)),Wc=(i,e)=>Math.min(...i.map(([t,n])=>Math.cos(e)*n-t*Math.sin(e))),mh=Math.PI/2,gh=Math.PI;for(let i=0;i<40;i++){let e=(mh+gh)/2;Wc(Hc.filter(t=>t[1]<.08),e)<Wc(Hc.filter(t=>t[1]>=.08),e)?mh=e:gh=e}$v=(mh+gh)/2});function ey(i,e){let t=new Map,n=e.cellMeters,s=e.toleranceMeters**2,r=(p,g,m)=>`${p}/${g}/${m}`,a=new je,o=new R;for(let p of e.triangles){let g=[0,1,2].map(A=>p.v.reduce((_,y)=>_+y[A],0)/3),m=r(...g.map(A=>Math.floor(A/n)));t.has(m)||t.set(m,[]),t.get(m).push(p);for(let A of p.v)a.expandByPoint(o.fromArray(A))}a.expandByScalar(e.toleranceMeters);function c(p){let g=[0,1,2].map(m=>Math.floor(p.reduce((A,_)=>A+_[m],0)/(3*n)));for(let m=-1;m<=1;m++)for(let A=-1;A<=1;A++)for(let _=-1;_<=1;_++)for(let y of t.get(r(g[0]+m,g[1]+A,g[2]+_))||[])if(p.every(v=>y.v.some(M=>v.reduce((E,x,b)=>E+(x-M[b])**2,0)<s)))return y;return null}let l=[],h=new je,d=new et,u={body:0,door:0,gasket:0,obsolete:0},f={};d.name="Preserved original refrigerator doors and note",i.updateMatrixWorld(!0),i.traverseVisible(p=>{!p.isMesh||p.isInstancedMesh||!p.geometry.attributes.position||(p.geometry.boundingBox||p.geometry.computeBoundingBox(),h.copy(p.geometry.boundingBox).applyMatrix4(p.matrixWorld).intersectsBox(a)&&l.push(p))});for(let p of l){let g=p.geometry,m=g.attributes.position,A=g.index?.array,_=A?.length??m.count,y=new Set,v=[],M=a.clone().applyMatrix4(p.matrixWorld.clone().invert()),E=M.min,x=M.max,b=S=>{let T=m.getX(S),C=m.getY(S),F=m.getZ(S);return T>=E.x&&T<=x.x&&C>=E.y&&C<=x.y&&F>=E.z&&F<=x.z};for(let S=0;S<_;S+=3){let T=[A?A[S]:S,A?A[S+1]:S+1,A?A[S+2]:S+2];if(!T.every(b))continue;let C=T.map(P=>o.fromBufferAttribute(m,P).applyMatrix4(p.matrixWorld).toArray()),F=c(C);if(!F)continue;let I=F.part;f[F.object]=(f[F.object]??0)+1,u[I]++,y.add(S),I==="door"&&v.push(...T)}if(!y.size)continue;if(v.length){let S=new Ze,T=new R,C=new ze().getNormalMatrix(p.matrixWorld);for(let[I,P]of Object.entries(g.attributes)){let L=new Float32Array(v.length*P.itemSize);for(let z=0;z<v.length;z++){let O=v[z];if(I==="position")L.set(o.fromBufferAttribute(P,O).applyMatrix4(p.matrixWorld).toArray(),z*3);else if(I==="normal")L.set(T.fromBufferAttribute(P,O).applyMatrix3(C).normalize().toArray(),z*3);else for(let G=0;G<P.itemSize;G++)L[z*P.itemSize+G]=P.getComponent(O,G)}S.setAttribute(I,new Mt(L,P.itemSize))}let F=new De(S,p.material);F.name="Original refrigerator exterior / "+p.material.name,F.castShadow=!0,F.receiveShadow=!0,d.add(F)}let w=[];for(let S=0;S<_;S+=3)y.has(S)||w.push(A?A[S]:S,A?A[S+1]:S+1,A?A[S+2]:S+2);g.setIndex(w),g.computeBoundingBox(),g.computeBoundingSphere()}for(let[p,g]of Object.entries(e.expected))if(u[p]!==g)throw Error(`Refrigerator source mismatch: ${p} ${u[p]}/${g} ${JSON.stringify(f)}`);return{door:d,counts:u}}function ty(i,e,t){i.updateMatrixWorld(!0);let n=new Map,s=[];i.traverse(a=>{a.isMesh&&s.push(a)});for(let a of s){let o=a.parent,c=!1;for(;o;){if(o===e){c=!0;break}o=o.parent}let l=c?e:i,h=a.geometry.clone();for(let u of["position","normal","uv"]){let f=h.attributes[u];if(!f)continue;let p=new Float32Array(f.count*f.itemSize);for(let g=0;g<f.count;g++)for(let m=0;m<f.itemSize;m++)p[g*f.itemSize+m]=f.getComponent(g,m);h.setAttribute(u,new Mt(p,f.itemSize))}h.applyMatrix4(a.matrixWorld).applyMatrix4(l.matrixWorld.clone().invert());for(let u of Object.keys(h.attributes))["position","normal","uv"].includes(u)||h.deleteAttribute(u);h.attributes.uv||h.setAttribute("uv",new Mt(new Float32Array(h.attributes.position.count*2),2));let d=(c?"moving/":"static/")+a.material.uuid;n.has(d)||n.set(d,{target:l,material:a.material,parts:[]}),n.get(d).parts.push(h.index?h.toNonIndexed():h),a.removeFromParent()}let r=[];for(let{target:a,material:o,parts:c}of n.values()){t.patch(o,{plainMap:!0}),o.name.includes("shielded warm interior lamp")&&(o.emissive.setHex(16764808),o.emissiveIntensity=0,r.push(o));let l=en(c,!1);for(let d of c)d.dispose();let h=new De(l,o);h.name="Refrigerator "+o.name,h.castShadow=!0,h.receiveShadow=!0,a.add(h)}return{bulbs:r,batches:n.size}}async function CA({scene:i,loader:e,light:t,register:n,dirty:s,audio:r}){let[a,o]=await Promise.all([e.loadAsync("assets/interactive-fridge.glb"),fetch("assets/fridge-source.json").then(L=>{if(!L.ok)throw Error("Refrigerator source geometry "+L.status);return L.json()})]),c=a.scene;c.name="Operable stocked seafoam refrigerator";let l=c.getObjectByName(St.sanitizeNodeName("Refrigerator original door hinge"))??c.getObjectByName("Refrigerator original door hinge");if(!l)throw Error("Refrigerator door hinge missing");let{door:h,counts:d}=ey(i,o),{bulbs:u,batches:f}=ty(c,l,t);i.add(c),i.updateMatrixWorld(!0),l.attach(h);let p=new Yn(16764808,0,.7,2);p.name="Shielded refrigerator interior light",p.position.set(-8.265,1.18,-3.77),c.add(p),t.addLocalEmitter?.(p);let g=l.quaternion.clone(),m=new R(0,1,0),A=new Nt,_=new je,y=new R(-7.775,1.22,-3.75);l.worldToLocal(y);let v=new je,M=new je,E=new ge,x=new ge,b=new R,w=new R;l.updateWorldMatrix(!0,!0),E.copy(l.matrixWorld).invert(),l.traverse(L=>{L.isMesh&&(L.geometry.boundingBox||L.geometry.computeBoundingBox(),x.copy(E).multiply(L.matrixWorld),v.union(M.copy(L.geometry.boundingBox).applyMatrix4(x)))});function S(){l.updateWorldMatrix(!0,!0),_.copy(v).applyMatrix4(l.matrixWorld),E.copy(l.matrixWorld).invert()}S();let T=!1,C=0,F=!1,I={id:"kitchen-refrigerator",label:()=>T?"Close refrigerator":"Open refrigerator",point:()=>l.localToWorld(w.copy(y)),reach:2.25,radius:.19,bounds:()=>_,clearance:(L,z)=>{b.set(L,0,z).applyMatrix4(E);let O=Je.clamp(b.x,v.min.x,v.max.x),G=Je.clamp(b.z,v.min.z,v.max.z);return(b.x-O)**2+(b.z-G)**2},use:()=>{T=!T,r?.cue("latch",.28,I.point()),s({shadows:!0})}};n(I);let P={source:d,batches:f,sourceObjects:o.sourceObjects,stocked:!0};return c.userData.refrigerator=P,{root:c,hinge:l,stats:P,action:I,update(L){let z=T?1:0,O=Math.abs(z-C)>4e-4;if(O?C=Je.damp(C,z,4.5,Math.min(L,.1)):C=z,!O&&!F)return!1;l.quaternion.copy(g).multiply(A.setFromAxisAngle(m,-1.745329252*C)),S();let G=Je.smoothstep(C,.015,.12);p.intensity=G*.9;for(let V of u)V.emissiveIntensity=G*2.2;return F=O,s({reflections:!1}),!0}}}var IA=it(()=>{gt();jn()});async function TA({scene:i,light:e,register:t,dirty:n=()=>{},animateRegion:s=()=>{}}){let r=await Promise.all(["cover","spread-1","spread-2","spread-3","spread-4"].map(async W=>{let j=await new xn().loadAsync(`assets/journal-${W}.webp`);return j.colorSpace=lt,j.anisotropy=4,j})),a=new et;a.name="Form and Sun \u2014 original Autumn 1958 journal",a.position.set(.356,.138,-2.58),a.scale.set(.93,1,.93),a.rotation.y=Math.PI,i.add(a);let o=.205,c=.28,l=.006,h=[],d=(W,j,re=Sn)=>{let le=new ht({name:W,map:j??null,color:16777215,roughness:.88,side:re});return e.patch(le,{plainMap:!0}),le},u=d("Journal warm cut paper edges");u.color.set(14274487);let f=d("Journal left printed page",r[1]),p=d("Journal right printed page",r[1]),g=d("Journal turning printed recto",r[0]),m=d("Journal turning printed verso",r[1],Wt),A=(W,j,re)=>{let le=new De(W,j);return le.name=re,le.castShadow=!0,le.receiveShadow=!0,a.add(le),le};A(new rn(o,.005,c),u,"Journal bound paper block").position.set(o/2,.0025,0);let y=A(new rn(o,.0025,c),u,"Journal turned paper stack");y.position.set(-o/2,.00125,0);function v(W=!1,j=!1){let re=[],le=[],ae=[];for(let xe=0;xe<=1;xe++)for(let Ie=0;Ie<=20;Ie++){let qe=Ie/20,He=W?-o+qe*o:qe*o;re.push(He,l,-c/2+xe*c),le.push(j?.5*(1-qe):W?qe*.5:.5+qe*.5,1-xe)}for(let xe=0;xe<20;xe++){let Ie=xe,qe=xe+1,He=21+xe,mt=He+1;ae.push(Ie,He,qe,qe,He,mt)}let Fe=new Ze;return Fe.setAttribute("position",new Be(re,3)),Fe.setAttribute("uv",new Be(le,2)),Fe.setIndex(ae),Fe.computeVertexNormals(),Fe}let M=A(v(!0),f,"Journal left open printed page"),E=A(v(),p,"Journal right open printed page"),x=new et;x.name="Journal turning leaf hinge",x.position.y=l+5e-4,a.add(x);let b=v(),w=v(!1,!0);for(let W of[b,w]){let j=W.attributes.position;for(let re=0;re<j.count;re++)j.setY(re,0)}let S=new De(b,g),T=new De(w,m);S.name="Journal turning leaf recto",T.name="Journal turning leaf verso";for(let W of[S,T])W.castShadow=!0,W.receiveShadow=!0,x.add(W);let C=(W,j=!1,re=!1)=>{let le=W.attributes.uv;for(let ae=0;ae<=1;ae++)for(let me=0;me<=20;me++)le.setXY(ae*21+me,j?me/20:re?.5*(1-me/20):.5+me/40,1-ae);le.needsUpdate=!0},F=!1,I=0,P=null,L=()=>globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1;function z(){for(let W of[b,w]){let j=W.attributes.position;for(let re=0;re<j.count;re++)j.setY(re,0);j.needsUpdate=!0,W.computeVertexNormals(),W.computeBoundingBox(),W.computeBoundingSphere()}M.visible=y.visible=F,E.visible=F,x.visible=!F,x.rotation.z=0,g.map=r[0],m.map=r[1],C(b,!0),C(w,!1,!0),f.map=p.map=r[I+1]}function O(){P.kind==="open"?(F=!0,I=0):P.kind==="close"?(F=!1,I=0):I=P.next,P=null,z(),n({shadows:!0})}function G(W){if(P)return;let j=(I+1)%4;P={kind:W,next:j,t:0},x.visible=!0,E.visible=!0,M.visible=y.visible=F,g.map=W==="page"?r[I+1]:r[0],m.map=W==="page"?r[j+1]:r[I+1],C(b,W!=="page"),C(w,!1,!0),W==="page"&&(p.map=r[j+1]),W==="open"&&(p.map=r[1]),x.rotation.z=W==="close"?Math.PI:0,n({shadows:!0}),L()&&O()}z();let V=new R(.356,.15,-2.58),H=new R(.221,.15,-2.58),q=new R(.496,.15,-2.58);for(let W of[{id:"journal-open",label:()=>"Open and read Form & Sun",point:V,enabled:()=>!F&&!P,use:()=>G("open"),radius:.13},{id:"journal-page",label:()=>I===3?"Turn page \xB7 return to first spread":`Turn page \xB7 ${I+1} of 4`,point:H,enabled:()=>F&&!P,use:()=>G("page"),radius:.09},{id:"journal-close",label:()=>"Close the journal",point:q,enabled:()=>F&&!P,use:()=>G("close"),radius:.065}])W.reach=2.25,h.push(t(W));let Z=new je(new R(.15,.13,-2.72),new R(.56,.37,-2.44));return s(()=>P?Z:null),n({shadows:!0}),{root:a,actions:h,region:Z,get opened(){return F},get page(){return I},get moving(){return!!P},update(W){if(!P)return!1;if(L())return O(),!0;P.t=Math.min(1,P.t+Math.max(0,W)/.62);let j=P.t,re=j*j*(3-2*j),le=P.kind==="close"?Math.PI*(1-re):Math.PI*re;x.rotation.z=le;for(let ae of[b,w]){let me=ae.attributes.position;for(let Fe=0;Fe<=1;Fe++)for(let xe=0;xe<=20;xe++){let Ie=xe/20;me.setY(Fe*21+xe,.012*Math.sin(Math.PI*j)*Math.sin(Math.PI*Ie))}me.needsUpdate=!0,ae.computeVertexNormals(),ae.computeBoundingBox(),ae.computeBoundingSphere()}return n({reflections:!1}),j===1&&O(),!0}}}var RA=it(()=>{gt()});async function BA({scene:i,light:e,register:t,loader:n,windows:s,dirty:r=()=>{},visitor:a=()=>null,seatedDriver:o=()=>!1}){let l=(await n.loadAsync("assets/car-interactive.glb")).scene;l.name="Interactive original period hardtop";let h=i.getObjectByName("Original 1957 hardtop refined coachwork");if(h&&(h.visible=!1,s))for(let b=s.length-1;b>=0;b--){let w=s[b];for(;w&&w!==h;)w=w.parent;w===h&&s.splice(b,1)}let d=new Set,u=[],f=new Set,p=new Set,g=new Set,m=["left","right"].map((b,w)=>{let S=w===0?-1:1,T=new et;return T.name="Car "+b+" front hinge",T.position.set(12.35+S*.98,.8,-5),l.add(T),{side:b,sign:S,pivot:T,angle:0,target:0,box:new je,handle:new R(12.35+S*1.03,.963,-3.73),point:new R}}),A=0,_=0;l.updateMatrixWorld(!0);let y=[];l.traverse(b=>{b.isMesh&&y.push(b)});for(let b of y){_++,A+=(b.geometry.index?.count??b.geometry.attributes.position.count)/3;let w=b.material,S=w.name==="Coachwork curved safety glass"||w.name==="car-glass";d.has(w)||(d.add(w),S?(w.name="car-glass",w.transmission=0,w.thickness=0,w.transparent=!0,w.opacity=.22,w.depthWrite=!1,w.side=Rt,w.envMapIntensity=1.05,w.roughness=.1,w.metalness=.08,"clearcoat"in w&&(w.clearcoat=1,w.clearcoatRoughness=.1),e.patch(w,{plainMap:!0,glass:!0})):e.patch(w,{plainMap:!0})),b.castShadow=!S,b.receiveShadow=!S,S&&(b.renderOrder=3,b.userData.carGlass=!0,u.push(b)),w.name==="Coachwork headlamp optics"&&f.add(w),w.name==="Coachwork ruby prismatic tail lens"&&p.add(w),w.name==="Coachwork amber turn signal lens"&&g.add(w);let T=m.find(C=>b.name.startsWith("door-"+C.side));T&&T.pivot.attach(b)}if(m.some(b=>b.pivot.children.length<7))throw new Error("Interactive coachwork is missing isolated door finishes");i.add(l),s&&s.push(...u),l.updateMatrixWorld(!0);let v=[];for(let b of[11.592,13.108]){let w=new ys(16768432,0,15,.4,.55,2);w.name="Car sealed beam headlight",w.position.set(b,.883,-6.58),w.target.position.set(b,.25,-14.5),w.castShadow=!1,l.add(w,w.target),v.push(w),e.addLocalEmitter?.(w)}let M=!1;function E(){M=!M;for(let b of v)b.intensity=M?38:0;for(let b of f)b.emissive.set(16768940),b.emissiveIntensity=M?3:0;for(let b of p)b.emissive.set(16720912),b.emissiveIntensity=M?1.7:0;for(let b of g)b.emissive.set(16755254),b.emissiveIntensity=M?.8:0;r({shadows:!1})}function x(b,w,S,T){let C=b-S.pivot.position.x,F=w-S.pivot.position.z,I=Math.sin(T),P=Math.cos(T),L=Je.clamp(C*I+F*P,0,1.46);return(C-L*I)**2+(F-L*P)**2}for(let b of m)b.box.setFromObject(b.pivot),t({id:"car-door-"+b.side,label:()=>`${b.target?"Close":"Open"} ${b.side==="left"?"driver":"passenger"} door`,point:()=>b.pivot.localToWorld(b.point.copy(b.handle).sub(b.pivot.position)),reach:2.35,use:()=>{b.target=b.target?0:b.sign*1.12,r({shadows:!0})},bounds:()=>b.box,clearance:(w,S)=>x(w,S,b,b.angle)});return t({id:"car-headlights",label:()=>`${M?"Switch off":"Switch on"} headlights`,point:new R(12.35,.883,-6.61),reach:2.6,use:E}),t({id:"car-dash-headlights",enabled:()=>o()||Math.abs(m[0].angle)>.68,label:()=>`${M?"Switch off":"Switch on"} headlights`,point:new R(11.69,1.13,-4.82),reach:1.65,use:E}),r({shadows:!0}),{root:l,doors:m,beams:v,glazing:u,draws:_,triangles:A,get headlights(){return M},update(b){let w=!1;for(let S of m){let T=S.target-S.angle;if(Math.abs(T)<1e-4)continue;let C=Math.min(Math.abs(T),Math.max(0,b)*1.45),F=S.angle+Math.sign(T)*C,I=a();if(I){let P=x(I.x,I.z,S,S.angle),L=x(I.x,I.z,S,F);if(L<.27*.27&&L<P-1e-8)continue}S.angle=F,S.pivot.rotation.y=F,S.pivot.updateMatrixWorld(!0),S.box.setFromObject(S.pivot),w=!0}return w&&r({reflections:!1}),w}}}var DA=it(()=>{gt()});function FA(i,e,t,n,s,r,a){let o={value:0},c={value:0},l={value:0},h=`
    varying vec2 tex;varying vec3 world,outward;
    void main(){tex=uv;vec4 p=modelMatrix*vec4(position,1.);world=p.xyz;
      outward=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*viewMatrix*p;}`,d=(g,m)=>new Lt({name:g,transparent:!0,depthWrite:!1,uniforms:{clock:o,amount:c,dark:l},vertexShader:h,fragmentShader:`uniform float clock,amount,dark;varying vec2 tex;varying vec3 world,outward;
      void main(){${m}
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),u=new De(new an(.0061,.0047,n-s,20,8,!0),d("Clear water leaving the spout",`
    vec3 n=normalize(outward);
    float edge=1.-abs(dot(normalize(cameraPosition-world),n));
    float streak=.5+.5*sin(tex.x*25.13+1.2*sin(tex.y*10.-clock*5.3)+tex.y*7.);
    float core=(1.-smoothstep(.48,.98,tex.y))*(.5+.5*sin(tex.y*72.-clock*16.+streak*2.));
    float highlight=pow(streak,10.)*.34+.40*pow(edge,3.);
    gl_FragColor=vec4(mix(vec3(.086,.10,.096),vec3(.68,.74,.72),highlight+core*.16)*mix(1.,.35,dark),.19+highlight*.43+core*.13);`));u.position.set(e,(n+s)*.5,t),u.renderOrder=3,i.add(u);let f=new De(new Ra(1,48),d("Thin moving film over the drain",`
    vec2 p=(tex-.5)*2.;float a=atan(p.y,p.x);
    float r=length(p)*(1.+.034*sin(a*3.+clock*.46)+.026*sin(a*5.-clock*.6));
    float fade=1.-smoothstep(.42,.99,r);if(fade<.002)discard;
    float phase=r*23.-clock*5.3+.56*sin(a*3.-r*4.);
    float crest=smoothstep(.80,.995,cos(phase))*smoothstep(.13,.26,r);
    float spark=.5+.5*sin(a*4.5+1.2*sin(a*2.-clock*.5));
    float foam=exp(-r*r*170.)*(.55+.36*sin(clock*8.+r*55.));
    vec3 reflection=mix(vec3(.09,.12,.105),vec3(.64,.70,.67),crest*spark*.68+foam*.28);
    float alpha=(.036+crest*spark*.20+foam*.30)*fade*amount;
    gl_FragColor=vec4(reflection*mix(1.,.4,dark),alpha);`));f.rotation.x=-Math.PI/2,f.position.set(e,s+.009,t),f.scale.set(r,a,1),f.renderOrder=4,i.add(f);let p=0;return(g,m,A=0)=>{let _=p;return p=Je.clamp(p+g*(m?1.9:-1.25),0,1),i.visible=m||p>0,u.visible=m,o.value+=g,c.value=p,l.value=A,f.scale.set(r*(.47+.53*p),a*(.47+.53*p),1),_!==p}}var PA=it(()=>{gt()});function zn(i,e,{families:t=null,name:n="Operable household part",pivot:s=e.getCenter(new R)}={}){let r=new et;r.name=n,r.position.copy(s);let a=[];i.updateMatrixWorld(!0);let o=new je;i.traverseVisible(d=>{!d.isMesh||d.isInstancedMesh||d.userData.householdPart||t&&!t.includes(d.material.name)||(d.geometry.boundingBox||d.geometry.computeBoundingBox(),o.copy(d.geometry.boundingBox).applyMatrix4(d.matrixWorld),o.intersectsBox(e)&&a.push(d))});let c=new R,l=new R,h=0;for(let d of a){let u=d.geometry,f=u.getAttribute("position"),p=u.index?.array,g=[],m=[];if(!f)continue;let A=e.clone().applyMatrix4(d.matrixWorld.clone().invert()),_=A.min,y=A.max,v=T=>{let C=f.getX(T),F=f.getY(T),I=f.getZ(T);return C>=_.x&&C<=y.x&&F>=_.y&&F<=y.y&&I>=_.z&&I<=y.z},M=p?.length??f.count;for(let T=0;T<M;T+=3){let C=p?p[T]:T,F=p?p[T+1]:T+1,I=p?p[T+2]:T+2;!v(C)||!v(F)||!v(I)||[C,F,I].every(P=>e.containsPoint(c.fromBufferAttribute(f,P).applyMatrix4(d.matrixWorld)))&&(g.push(C,F,I),m.push(T))}if(!g.length)continue;let E=new Set(m),x=[];for(let T=0;T<M;T+=3)E.has(T)||x.push(p?p[T]:T,p?p[T+1]:T+1,p?p[T+2]:T+2);let b=new Ze,w=new ze().getNormalMatrix(d.matrixWorld);for(let[T,C]of Object.entries(u.attributes)){let F=new Float32Array(g.length*C.itemSize);for(let I=0;I<g.length;I++){let P=g[I];if(T==="position")c.fromBufferAttribute(C,P).applyMatrix4(d.matrixWorld).sub(s),F.set(c.toArray(),I*3);else if(T==="normal")l.fromBufferAttribute(C,P).applyMatrix3(w).normalize(),F.set(l.toArray(),I*3);else for(let L=0;L<C.itemSize;L++)F[I*C.itemSize+L]=C.getComponent(P,L)}b.setAttribute(T,new Mt(F,C.itemSize))}let S=new De(b,d.material);S.castShadow=d.castShadow,S.receiveShadow=d.receiveShadow,S.userData.householdPart=!0,S.name=n+" / "+d.material.name,r.add(S),h+=g.length/3,u.setIndex(x),u.computeBoundingBox(),u.computeBoundingSphere()}return r.userData.triangles=h,i.add(r),r}function LA({scene:i,light:e,register:t,dirty:n,audio:s,animateRegion:r=()=>{}}){let a=new et;a.name="Working household details",i.add(a);let o=[],c={},l=0,h=(Se,Qe,Ue={})=>{let Q=new ht({name:Se,color:Qe,roughness:.48,...Ue});return e.patch(Q,{plainMap:!0}),Q},d=h("Cupboard warm walnut",7754043),u=h("Cupboard maple interior",12098416),f=h("Cupboard cream stoneware",14867398,{roughness:.22}),p=h("Household black bakelite",1514264,{roughness:.25}),g=(Se,Qe,Ue,Q)=>{let Ee=new De(Qe,Ue);return Ee.name=Q,Ee.castShadow=!0,Ee.receiveShadow=!0,Ee.userData.householdPart=!0,Se.add(Ee),Ee},m=(Se,Qe,Ue,Q,Ee)=>{let Ve=g(Se,new rn(...Ue),Q,Ee);return Ve.position.copy(Qe),Ve},A=(Se,Qe,Ue,Q,Ee,Ve)=>{let Xe=g(Se,new an(Ue,Ue,Q,32),Ee,Ve);return Xe.position.copy(Qe),Xe},_=(Se,Qe)=>r(()=>Se()?Qe:null),y=(Se,Qe,Ue,Q,Ee=1.9,Ve)=>t({id:Se,label:Qe,point:Ue,reach:Ee,use:()=>{Q(),n({shadows:!0})},...Ve?{bounds:()=>Ve}:{}}),v=(Se,Qe,Ue="rotation",Q="y",Ee=6)=>{o.push(Ve=>{let Xe=Se[Ue][Q],ce=Qe();return Math.abs(Xe-ce)<4e-4?(Se[Ue][Q]=ce,!1):(Se[Ue][Q]=Je.damp(Xe,ce,Ee,Ve),!0)})},M=zn(i,pn(5.027,.877,10.227,5.373,.9,10.573),{name:"Spinning 33 rpm vinyl",pivot:_t(5.2,.89,10.4)}),E=zn(i,pn(5.458,.881,10.192,5.551,.923,10.588),{name:"Pivoting turntable tonearm",pivot:_t(5.53,.9,10.57)});c.recordTriangles=M.userData.triangles,c.tonearmTriangles=E.userData.triangles;let x=!0;s.setLayer("record",1),E.rotation.y=-.64;let b=h("Record label ink",7617835,{roughness:.9});m(M,new R(.012,.005,0),[.006,.001,.042],b,"Original label imprint");for(let Se of[-.014,-.008,.013])m(M,new R(-.008,.005,Se),[.023,.001,.002],b,"Record label printed rule");let w=new Mn({color:16754501,toneMapped:!1}),S=A(a,_t(6.45,.83,10.177),.006,.005,w,"Amplifier amber pilot");S.rotation.x=Math.PI/2,S.visible=x,y("record-player",()=>x?"Lift tonearm \xB7 stop record":"Lower tonearm \xB7 play record",_t(5.35,1,10.18),()=>{x=!x,S.visible=x,s.setLayer("record",x?1:0)}),v(E,()=>x?-.64:0);let T=pn(5.01,.86,10.19,5.66,1.05,10.62);_(()=>x,T),o.push(Se=>(x&&(M.rotation.y-=Se*Math.PI*2*33.333/60),!1));let C=i.getObjectByName(St.sanitizeNodeName("Sculpted convex gray CRT screen"))??i.getObjectByName("Sculpted convex gray CRT screen"),F=C?.material,I=!1,P=new Lt({name:"Monochrome 1958 moving television signal",uniforms:{time:{value:0},power:{value:0}},side:Rt,toneMapped:!1,vertexShader:"varying vec2 signalUV;void main(){vec4 w=modelMatrix*vec4(position,1.);signalUV=vec2((w.z+9.45)/-.676+.5,(w.y-1.066)/.428+.5);gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:`uniform float time,power;varying vec2 signalUV;
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
    }`});C&&(C.castShadow=!1,c.tvScreen=!0);let L=new Yn(12114382,0,2.5,2);L.position.copy(_t(7.99,1.1,9.45)),a.add(L),e.addLocalEmitter?.(L);let z=zn(i,pn(8.073,1.005,8.894,8.143,1.102,8.987),{name:"TV power volume dial",pivot:_t(8.114,1.052,8.94)});y("television",()=>I?"Switch television off":"Switch television on",_t(8.09,1.08,8.94),()=>{I=!I,C&&(C.material=I?P:F),P.uniforms.power.value=Number(I),L.intensity=I?.55:0}),v(z,()=>I?-.65:0,"rotation","x"),_(()=>I,pn(7.97,.8,9.05,8.14,1.3,9.82)),o.push(()=>(P.uniforms.time.value=l,!1));function O({id:Se,label:Qe,x:Ue,north:Q,outlet:Ee,bottom:Ve,poolSize:Xe,handle:ce,hbox:bt}){let Me=new et;Me.name=Qe+" running water",a.add(Me);let Ge=FA(Me,Ue,-Q,Ee,Ve,...Xe),N=zn(i,bt,{name:Qe+" moving tap handle",pivot:ce});c[Se+"HandleTriangles"]=N.userData.triangles;let B=!1;Me.visible=!1,y(Se,()=>B?"Close "+Qe.toLowerCase()+" tap":"Open "+Qe.toLowerCase()+" tap",ce,()=>{B=!B,Me.visible=!0,s.setFlow(Se,B,_t(Ue,Ve,Q))}),v(N,()=>B?Math.PI*.48:0);let Y=pn(Ue-.24,Ve-.01,Q-.29,Ue+.24,Ee+.02,Q+.29);_(()=>Me.visible,Y),o.push((oe,ie)=>(Ge(oe,B,ie?.night??0),!1))}O({id:"kitchen-tap",label:"Kitchen",x:-8.43,north:1.25,outlet:1.115,bottom:.754,poolSize:[.12,.17],handle:_t(-8.69,1.01,1.42),hbox:pn(-8.705,.996,1.363,-8.675,1.024,1.476)}),O({id:"bath-tap",label:"Bathroom",x:-.335,north:8.55,outlet:1.045,bottom:.746,poolSize:[.075,.12],handle:_t(-.57,.947,8.8),hbox:pn(-.622,.933,8.749,-.518,.962,8.851)});let G=zn(i,pn(-5.868,1.546,3.49,-5.232,2.312,3.557),{name:"Kitchen hinged upper cupboard",pivot:_t(-5.855,1.93,3.54)}),V=zn(i,pn(-5.887,1.529,3.548,-5.213,2.332,3.973),{name:"Removed solid cupboard carcass",families:["wood"]});V.visible=!1,c.cupboardDoorTriangles=G.userData.triangles,c.cupboardRemovedTriangles=V.userData.triangles;let H=new et;H.name="Open shelved cupboard with stoneware",a.add(H);for(let Se of[-5.865,-5.235])m(H,_t(Se,1.93,3.76),[.025,.79,.41],d,"Cupboard solid side");m(H,_t(-5.55,1.93,3.958),[.61,.79,.025],u,"Cupboard interior back");for(let Se of[1.548,1.92,2.312])m(H,_t(-5.55,Se,3.76),[.61,.024,.39],u,"Cupboard fitted shelf");for(let Se=0;Se<5;Se++)A(H,_t(-5.68,1.947+Se*.014,3.74),.117,.009,f,"Stacked cream dinner plate");for(let Se of[-5.7,-5.42])g(H,new an(.049,.043,.095,24,1,!0),f,"Hollow stoneware cup").position.copy(_t(Se,2,3.84)),g(H,new Da(.029,.007,6,18),f,"Cup handle").position.copy(_t(Se+.051,2.01,3.84)),A(H,_t(Se,1.958,3.84),.042,.004,f,"Cup foot");for(let Se=0;Se<3;Se++)A(H,_t(-5.55,1.57+Se*.014,3.76),.14,.012,f,"Lower shelf serving plates");let q=!1;H.visible=!1,o.push(()=>(H.visible=q||Math.abs(G.rotation.y)>.025,!1)),y("kitchen-cupboard",()=>q?"Close crockery cupboard":"Open crockery cupboard",_t(-5.35,1.72,3.5),()=>{q=!q},2),v(G,()=>q?-Math.PI*.62:0);function Z(Se){let Qe={value:-1};return Se.traverse(Ue=>{if(!Ue.isMesh)return;let Q=Ue.material.clone();e.patch(Q,{finish:!0,bulb:Q.name==="bulb",fixturePower:Qe}),Ue.material=Q}),Qe}function W({id:Se,label:Qe,x:Ue,north:Q,low:Ee,high:Ve,bulbHeight:Xe,radius:ce=.29}){let bt=zn(i,pn(Ue-ce,Ee,Q-ce,Ue+ce,Ve,Q+ce),{families:["shade","bulb"],name:Qe+" switchable shade"});c[Se+"Triangles"]=bt.userData.triangles;let Me=!0,Ge=Z(bt);y(Se,()=>Me?"Switch "+Qe.toLowerCase()+" off":"Switch "+Qe.toLowerCase()+" on",_t(Ue,Math.max(Ee,.85),Q),()=>{Me=!Me,Ge.value=Number(Me),e.setPracticalPower?.(_t(Ue,Xe,Q),Number(Me))},2)}W({id:"living-lamp",label:"Living reading lamp",x:3.5,north:4.52,low:1.31,high:1.8,bulbHeight:1.5}),W({id:"primary-lamp-west",label:"West bedside lamp",x:-8.12,north:10.12,low:.66,high:1.13,bulbHeight:.84}),W({id:"primary-lamp-east",label:"East bedside lamp",x:-5.37,north:10.12,low:.66,high:1.13,bulbHeight:.84}),W({id:"child-lamp",label:"Desk lamp",x:-1.43,north:10.43,low:1.005,high:1.25,bulbHeight:1.12,radius:.17}),W({id:"den-lamp",label:"Den reading lamp",x:3.08,north:9.85,low:1.17,high:1.65,bulbHeight:1.35});let j=zn(i,pn(5.84,2.3,2.45,7.16,2.9,3.75),{families:["bulb"],name:"Sputnik switchable tungsten globes"});c.diningGlobeTriangles=j.userData.triangles;let re=Z(j),le=!0;y("dining-light",()=>le?"Switch dining chandelier off":"Switch dining chandelier on",_t(6.32,1.18,6.87),()=>{le=!le,re.value=Number(le),e.setPracticalPower?.(_t(6.5,2.58,3.1),Number(le))},2);let ae=zn(i,pn(6.308,1.155,6.858,6.332,1.206,6.888),{name:"Existing dining wall switch toggle",pivot:_t(6.32,1.18,6.873)});c.diningSwitchTriangles=ae.userData.triangles,v(ae,()=>le?-.45:.45,"rotation","x");let me=zn(i,pn(-5.355,.92,5.139,-4.886,1.026,5.261),{name:"Telephone liftable bakelite receiver",pivot:_t(-5.12,.99,5.2)});c.telephoneTriangles=me.userData.triangles;let Fe=!1;y("telephone-receiver",()=>Fe?"Replace telephone receiver":"Lift telephone receiver",_t(-5.12,.99,5.2),()=>{Fe=!Fe}),v(me,()=>Fe?1.19:.99,"position","y"),v(me,()=>Fe?-.22:0,"rotation","z");let xe=zn(i,pn(-5.345,.643,5.175,-5.295,.948,5.225),{name:"Original telephone coiled cord"});xe.visible=!1;let Ie=new On(new an(.0035,.0035,1,6),p,60);Ie.name="Stretching telephone receiver cord",Ie.userData.householdPart=!0,a.add(Ie);let qe=new Ct,He=new R(0,1,0),mt=new R,dt=new R,It=new R,rt=-1;o.push(()=>{if(Math.abs(rt-me.position.y)<1e-5)return!1;rt=me.position.y;for(let Se=0;Se<60;Se++){let Qe=Se/60,Ue=(Se+1)/60,Q=me.position.y-.05;mt.copy(_t(-5.32+.017*Math.cos(Qe*Math.PI*16),.645+(Q-.645)*Qe,5.2+.017*Math.sin(Qe*Math.PI*16))),dt.copy(_t(-5.32+.017*Math.cos(Ue*Math.PI*16),.645+(Q-.645)*Ue,5.2+.017*Math.sin(Ue*Math.PI*16))),It.copy(dt).sub(mt),qe.position.copy(mt).add(dt).multiplyScalar(.5),qe.quaternion.setFromUnitVectors(He,It.clone().normalize()),qe.scale.set(1,It.length(),1),qe.updateMatrix(),Ie.setMatrixAt(Se,qe.matrix)}return Ie.instanceMatrix.needsUpdate=!0,Ie.computeBoundingSphere(),!1});let Gt=zn(i,pn(-5.208,.869,5.022,-5.032,.905,5.198),{name:"Telephone returning rotary dial",pivot:_t(-5.12,.89,5.11)}),xt=0;return y("telephone-dial",()=>"Turn rotary telephone dial",_t(-5.12,.89,5.05),()=>{xt=-Math.PI*1.65,Gt.rotation.y=xt,s.cue("dial",.55,_t(-5.12,.89,5.11))}),o.push(Se=>xt>=0?!1:(xt=Math.min(0,xt+Se*3.8),Gt.rotation.y=xt,!0)),a.userData.householdActions=c,{root:a,stats:c,update(Se,Qe){l+=Math.min(Se,.1);let Ue=!1;for(let Q of o)Ue=Q(Math.min(Se,.1),Qe)||Ue;return Ue}}}var _t,pn,NA=it(()=>{gt();PA();_t=(i,e,t)=>new R(i,e,-t),pn=(i,e,t,n,s,r)=>new je(_t(i,e,r),_t(n,s,t))});function ny(i,e,t){let n=[],s=[],r=[],a=[];for(let h=0;h<=14;h++){let d=h/14,u=e*Math.pow(Math.sin(Math.PI*(d*.9+.1)),.7)*Math.pow(1-d,.28);for(let f=0;f<=9;f++){let p=f/9*Math.PI*2;if(n.push(Math.cos(p)*u+Math.sin(t+d*4)*d*d*.025,d*i,Math.sin(p)*u*.7+Math.cos(t+d*5)*d*d*.016),s.push(f/9,d),r.push(t),h<14&&f<9){let g=h*10+f,m=g+9+1;a.push(g,m,g+1,g+1,m,m+1)}}}let l=new Ze;return l.setAttribute("position",new Be(n,3)),l.setAttribute("uv",new Be(s,2)),l.setAttribute("flamePhase",new Be(r,1)),l.setIndex(a),l.computeVertexNormals(),l}function iy(){return new Lt({name:"Dimensional turbulent hearth flames",transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uPower:{value:1}},vertexShader:`
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
      }`})}function UA({scene:i,light:e,water:t,register:n,dirty:s,audio:r,fireMaterials:a=[],detail:o}){let c=new je;o?.updateWorldMatrix(!0,!0),o?.traverse(V=>{if(!V.isMesh)return;(Array.isArray(V.material)?V.material:[V.material]).some(q=>q.name.toLowerCase().includes("hearth flame"))&&(c.expandByObject(V),V.visible=!1)}),c.isEmpty()&&c.set(new R(2.51,.39,-1.65),new R(2.64,.7,-.95));let l=c.getCenter(new R),h=c.min.y+.012,d=Math.min(.62,Math.max(.4,c.max.z-c.min.z-.08)),u=new et;u.name="Interactive dimensional hearth",u.position.set(l.x,h,l.z),i.add(u);let f=new ht({name:"Hearth fired steel ash pan",color:2498845,metalness:.62,roughness:.83});e?.patch(f,{plainMap:!0});let p=[];for(let[V,H]of[[[.26,.012,d+.065],[0,-.026,0]],[[.008,.025,d+.065],[-.126,-.016,0]],[[.008,.025,d+.065],[.126,-.016,0]],[[.26,.025,.008],[0,-.016,-d*.5-.029]],[[.26,.025,.008],[0,-.016,d*.5+.029]]])p.push(new rn(...V).translate(...H));let g=new De(en(p),f);g.name="Folded steel hearth pan with raised ash lip";for(let V of p)V.dispose();u.add(g);let m=new ht({name:"Pale granular spent hearth ash",color:7827556,roughness:1});e?.patch(m,{plainMap:!0});let A=new On(new yr(.017,0),m,20);A.name="Scattered matte ash around glowing coals";let _=new Ct;for(let V=0;V<20;V++)_.position.set(Math.sin(V*2.399)*.103,-.014,(V%10/9-.5)*d),_.scale.set(1,.13,.7+V%3*.2),_.rotation.y=V*1.8,_.updateMatrix(),A.setMatrixAt(V,_.matrix);u.add(A);let y=[];for(let V=0;V<3;V++)for(let H=0;H<5;H++){let q=(V*5+H)*2.39996,Z=(V===0?.09:V===1?.17:.12)+.1*(.5+.5*Math.sin(q*1.8)),W=ny(Z,(V===0?.047:.031)+.007*(H%3),q);W.translate((V-1)*.057,0,(H/4-.5)*(d-.06)+Math.sin(q+V*.9)*.037),y.push(W)}let v=iy(),M=new De(en(y),v);for(let V of y)V.dispose();M.name="Fifteen independently rising flame tongues",M.renderOrder=8,u.add(M);let E=new ht({name:"Charred coals with luminous amber seams",color:2101772,roughness:.98,emissive:16724485,emissiveIntensity:.85});e?.patch(E,{plainMap:!0});let x=E.onBeforeCompile;E.onBeforeCompile=(V,H)=>{x.call(E,V,H),V.vertexShader=V.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vCoalPosition;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vCoalPosition=(instanceMatrix*vec4(position,1.)).xyz;`),V.fragmentShader=V.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vCoalPosition;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        float seams=pow(.5+.5*sin(vCoalPosition.x*182.+sin(vCoalPosition.z*139.))*sin(vCoalPosition.z*153.+vCoalPosition.y*47.),6.);
        totalEmissiveRadiance*=.06+.94*seams;`)},E.customProgramCacheKey=()=>"hearth-glowing-carbon-seams";let b=new yr(.025,1),w=new On(b,E,30);w.name="Three dimensional glowing hearth coals";let S=new Ct,T=new ye;for(let V=0;V<30;V++){let H=V*2.39996;S.position.set(Math.sin(H)*.09,-.003+V%3*.005,(V%10/9-.5)*d),S.rotation.set(H,H*.7,H*.3),S.scale.set(1,.45+V%3*.12,.7),S.updateMatrix(),w.setMatrixAt(V,S.matrix),T.setRGB(.4+V%4*.18,.28+V%3*.13,.2),w.setColorAt(V,T)}u.add(w);let C=new Yn(16739618,.28,1.5,2);C.name="Local steady hearth glow",C.position.set(l.x-.1,h+.13,l.z),i.add(C),e?.addLocalEmitter?.(C);let F=new je(new R(l.x-.17,h-.035,l.z-d*.5-.085),new R(l.x+.17,h+.3,l.z+d*.5+.085)),I=!0,P=1,L=1,z=0,O=!0,G=!1;if(n({id:"hearth",label:()=>I?"Extinguish hearth":"Light hearth",point:new R(l.x-.15,.63,l.z),reach:2.7,use(){I=!I,G=!0,r?.setLayer("fire",I?1:0),s({shadows:!1})}}),t?.surface){let H=new je().setFromObject(t.surface).getCenter(new R);n({id:"pool-touch",label:()=>"Touch water",point:H,reach:3.3,hitTest:le=>t.hitTest(le),use(le){le&&t.disturb(le)}});let q=new ht({name:"Weathered bronze pool switch pedestal",color:7955264,metalness:.72,roughness:.55});e?.patch(q,{plainMap:!0});let Z=new et;Z.name="Dry deck bronze pool light switch",Z.position.set(9,0,9.62);for(let[le,ae,me]of[[[.11,.018,.11],[0,.018,0],"Bolted pool switch foot"],[[.035,.61,.035],[0,.326,0],"Slender bronze pool switch stem"],[[.07,.13,.1],[0,.69,0],"Weatherproof bronze switch box"],[[.009,.112,.086],[-.039,.69,0],"Gasketed bronze switch cover"]]){let Fe=new De(new rn(...le),q);Fe.position.set(...ae),Fe.name=me,Fe.castShadow=Fe.receiveShadow=!0,Z.add(Fe)}let W=new et;W.name="Pool switch physical toggle",W.position.set(-.046,.69,0),W.rotation.z=-.4;let j=new De(new an(.004,.004,.032,12),q);j.rotation.z=Math.PI/2,j.position.x=-.016,W.add(j);let re=new De(new Xn(.007,12,8),q);re.position.x=-.032,W.add(re),Z.add(W),i.add(Z),n({id:"pool-lights",label:()=>O?"Switch pool lights off":"Switch pool lights on",point:new R(8.944,.69,9.62),reach:2.5,use(){O=!O,W.rotation.z=O?-.4:.4,t.setPoolLights(O),s({shadows:!0})}})}return r?.setLayer("fire",1),{fireBounds:F,update(V=0){let H=Math.max(0,Math.min(V,.06));if(z+=H,v.uniforms.uTime.value=z,!G)return!1;let q=I?1:0;P=Je.damp(P,q,7,H),L=Je.damp(L,q,I?5:1.4,H),Math.abs(P-q)<.001&&(P=q),Math.abs(L-q)<.001&&(L=q),v.uniforms.uPower.value=P,M.visible=P>.001,E.emissiveIntensity=L*.85,C.intensity=.28*(P*.84+L*.16);for(let Z of a)Z.emissiveIntensity=0;return G=P!==q||L!==q,!0}}}var OA=it(()=>{gt();jn()});function sy(i){i.updateWorldMatrix(!0,!0);let e=[],t=new R,n=new R,s=new R,r=new R,a=new R;i.traverse(c=>{if(!c.isMesh||!/^shell[ _](plaster|wood|glass|stone)/i.test(c.name))return;let l=c.geometry,h=l.attributes.position,d=l.index,u=d?d.count:h.count,f=(p,g)=>p.fromBufferAttribute(h,d?d.getX(g):g).applyMatrix4(c.matrixWorld);for(let p=0;p<u;p+=3)f(t,p),f(n,p+1),f(s,p+2),!(Math.min(t.y,n.y,s.y)>2.8||Math.max(t.y,n.y,s.y)<.2)&&(r.subVectors(n,t).cross(a.subVectors(s,t)).lengthSq()<15e-5||e.push(t.x,t.y,t.z,n.x,n.y,n.z,s.x,s.y,s.z))});let o=new Ze;return o.setAttribute("position",new Be(e,3)),o.computeBoundingSphere(),new De(o,new Mn({side:Rt}))}function kA(i,e){let t=[],n=[],s=sy(i),r=new R,a=new R,o=new Yi,c=new Yi,l=[],h=f=>typeof f.point=="function"?f.point():f.point;function d(f){if(t.some(p=>p.id===f.id))throw Error("Duplicate house control "+f.id);return t.push(f),f.bounds&&n.push(f),f}function u(f,p){f.updateMatrixWorld(),o.setFromCamera(p,f);let g=null,m=1/0;for(let A of t){if(A.enabled&&!A.enabled())continue;let _=h(A),y=A.reach??2.35,v,M,E=0;if(A.hitTest){o.far=y;let b=A.hitTest(o);if(!b||b.distance>y)continue;v=b.point,M=b.distance}else{if(!_||(r.subVectors(_,o.ray.origin),M=r.length(),M>y||r.dot(o.ray.direction)<=0)||(o.ray.closestPointToPoint(_,a),E=a.distanceTo(_),E>(A.radius??.17)+M*.045))continue;v=_}let x=M+E*3+(A.priority??0);x>=m||(c.ray.set(o.ray.origin,r.subVectors(v,o.ray.origin).normalize()),c.near=.035,c.far=M-.085,l.length=0,c.far>c.near&&c.intersectObject(s,!1,l),!l.length&&(!A.door&&(l.length=0,c.intersectObjects(e,!0,l),l.length)||(m=x,g={action:A,point:v.clone(),distance:M})))}return g}return{register:d,pick:u,actions:t,solids:n,pointOf:h}}var GA=it(()=>{gt()});function QA(){let i,e,t,n=!1,s=!1,r=new Map,a=new Map,o=new Map,c=new Map,l=new Set,h=0;function d(w){return o.has(w)||o.set(w,fetch("assets/effects/"+w+".ogg").then(S=>{if(!S.ok)throw Error("Missing foley");return S.arrayBuffer()}).then(S=>i.decodeAudioData(S)).catch(()=>null)),o.get(w)}function u(w){let S=w.position?y.distanceTo(w.position):0,T=1-Qs(.5,7,S),C=w.position?qa((_.x*(w.position.x-y.x)+_.z*(w.position.z-y.z))/Math.max(1,S),-.9,.9):0;w.gain.gain.setTargetAtTime(w.volume*T*(1-h*.7),i.currentTime,.045),w.pan.pan.setTargetAtTime(C,i.currentTime,.045),w.filter.frequency.setTargetAtTime(Je.lerp(13e3,580,h),i.currentTime,.08)}function f(w,S,T,C=!1){let F=i.createBufferSource(),I=i.createBiquadFilter(),P=i.createGain(),L=i.createStereoPanner();F.buffer=w,F.loop=C,I.type="lowpass",P.gain.value=0,F.connect(I),I.connect(P),P.connect(L),L.connect(e);let z={source:F,filter:I,gain:P,pan:L,position:T?.clone()??null,volume:S};return F.onended=()=>{F.disconnect(),I.disconnect(),P.disconnect(),L.disconnect(),l.delete(z)},u(z),F.start(),z}function p(w,S=.42,T=null){if(!i||i.state!=="running"||n)return;let C=i.currentTime;d(w).then(F=>{!F||n||i.state!=="running"||i.currentTime-C>.4||l.add(f(F,S,T))})}function g(w){if(!w.node)return;let S=w.node;w.node=null,S.gain.gain.setTargetAtTime(0,i.currentTime,.012),S.source.stop(i.currentTime+.05)}function m(w){if(!i||i.state!=="running"||n||!w.on||w.node)return;let S=w.version;d(w.sample).then(T=>{!T||w.version!==S||!w.on||w.node||n||i.state!=="running"||(w.node=f(T,w.volume,w.position,!0))})}function A(w,S,T){let C=c.get(w);C||(C={sample:w==="kitchen-tap"?"faucet-kitchen":"faucet-bath",volume:w==="kitchen-tap"?.55:.42,position:T.clone(),on:!1,version:0,node:null},c.set(w,C)),C.position.copy(T),C.on=!!S,C.version++,C.on?m(C):g(C)}let _=new R,y=new R,v=new R,M=new R(0,1,0);async function E(){if(!i){let w=window.AudioContext||window.webkitAudioContext;if(!w)return s=!0,!1;i=new w,e=i.createGain(),e.gain.value=n?0:.65,e.connect(i.destination),t=Promise.all(ry.map(async S=>{try{let T=await fetch(`./assets/audio/${S}.ogg`);if(!T.ok)throw new Error("Audio unavailable");let C=await i.decodeAudioData(await T.arrayBuffer()),F=i.createBufferSource();F.buffer=C,F.loop=!0;let I=i.createGain();I.gain.value=0;let P=i.createBiquadFilter();P.type="lowpass",P.frequency.value=16e3;let L=i.createStereoPanner();F.connect(P),P.connect(I),I.connect(L),L.connect(e),F.start(0,S==="birds"?0:Math.random()*Math.min(6,C.duration/2)),r.set(S,{source:F,gain:I,filter:P,pan:L})}catch{s=!0}}))}try{await i.resume(),await t;for(let w of c.values())m(w);return!s}catch{return!1}}function x(w){if(n=!!w,i&&e&&e.gain.setTargetAtTime(n?0:.65,i.currentTime,.08),!n)for(let S of c.values())m(S);return n}function b(w,S=.4){if(!i||i.state!=="running")return;w.getWorldPosition(y),w.getWorldDirection(v);let T=y.x,C=-y.z,F=Qs(-.6,.8,C)*(1-Qs(10.8,11.6,C))*Qs(-9.7,-8.8,T)*(1-Qs(8.8,9.6,T)),I=Qs(.63,.97,S),P=1-F*.91;_.crossVectors(v,M).normalize();let L=(O,G,V,H)=>1-Qs(V,H,Math.hypot(T-O,C-G)),z={wind:.44*P*(1-I*.38),birds:.6*P*(1-I),night:1*P*I,pool:.8*L(.4,-7.8,2,18)*(1-F*.86),fire:1.45*L(2.78,1.3,1.5,10)*(C>5.8?.28:1),record:.55*L(5.6,10.4,1.5,16)*(C<6.7?.28:1)};for(let[O,G]of r){G.gain.gain.setTargetAtTime(z[O]*(a.get(O)??1),i.currentTime,.18);let V=["wind","birds","night","pool"].includes(O);G.filter.frequency.setTargetAtTime(Je.lerp(V?14e3-F*12e3:13e3-(1-F)*7500,580,h),i.currentTime,.5);let H=O==="pool"?[.4,-7.8]:O==="fire"?[2.78,1.3]:O==="record"?[5.6,10.4]:null,q=H?qa((_.x*(H[0]-T)+_.z*(-H[1]-y.z))/Math.max(2,Math.hypot(H[0]-T,H[1]-C)),-.8,.8):0;G.pan.pan.setTargetAtTime(q,i.currentTime,.25)}for(let O of c.values())O.node&&u(O.node);for(let O of l)u(O)}return{start:E,update:b,setMuted:x,cue:p,setFlow:A,setImmersion(w){h=qa(w,0,1)},setLayer(w,S){a.set(w,qa(S,0,1))},get muted(){return n},get available(){return!s}}}var ry,qa,Qs,zA=it(()=>{gt();ry=["wind","birds","pool","fire","record","night"],qa=(i,e,t)=>Math.min(t,Math.max(e,i)),Qs=(i,e,t)=>{let n=qa((t-i)/(e-i),0,1);return n*n*(3-2*n)}});function VA(i,e){let t=e.cellMeters,n=e.toleranceMeters**2,s=new Map,r=(u,f,p)=>`${u}/${f}/${p}`;for(let u of e.triangles){let f=[0,1,2].map(g=>u.v.reduce((m,A)=>m+A[g],0)/3),p=r(...f.map(g=>Math.floor(g/t)));s.has(p)||s.set(p,[]),s.get(p).push(u)}let a=Object.fromEntries(Object.entries(e.matrices).map(([u,f])=>[u,new ge().set(...f.flat())])),o=Object.fromEntries(Object.entries(a).map(([u,f])=>[u,new ze().getNormalMatrix(f)])),c={removedShellTriangles:0,movedChairTriangles:0,lampTriangles:0,matchedTriangles:0,unmatchedWorkstationTriangles:0,counts:{}},l=new R,h=new R;i.updateMatrixWorld(!0);function d(u){let f=[0,1,2].map(g=>u.reduce((m,A)=>m+A[g],0)/3),p=f.map(g=>Math.floor(g/t));for(let g=-1;g<=1;g++)for(let m=-1;m<=1;m++)for(let A=-1;A<=1;A++)for(let _ of s.get(r(p[0]+g,p[1]+m,p[2]+A))||[])if(u.every(y=>_.v.some(v=>y.reduce((M,E,x)=>M+(E-v[x])**2,0)<n)))return _.action;return null}if(i.traverse(u=>{if(!u.isMesh)return;let f=u.geometry,p=f.getAttribute("position"),g=f.index?.array,m=[],A=new Map,_=new ze().getNormalMatrix(u.matrixWorld),y=_.clone().invert(),v=u.matrixWorld.clone().invert();for(let M=0;M<(g?.length??p.count);M+=3){let E=[g?g[M]:M,g?g[M+1]:M+1,g?g[M+2]:M+2],x=E.map(F=>(l.fromBufferAttribute(p,F).applyMatrix4(u.matrixWorld),[l.x,-l.z,l.y])),b=x.reduce((F,I)=>F+I[0],0)/3,w=x.reduce((F,I)=>F+I[1],0)/3,S=x.reduce((F,I)=>F+I[2],0)/3,T=b>-2.05&&b<-.99&&w>9.1&&w<10.75&&S<1.4,C=T?d(x):null;if(C){if(c.matchedTriangles++,c.counts[C]=(c.counts[C]||0)+1,C==="remove"){c.removedShellTriangles++;continue}C==="chair"?c.movedChairTriangles++:c.lampTriangles++;for(let F of E){if(A.has(F)&&A.get(F)!==C)throw new Error("Child workstation transform crosses source objects");A.set(F,C)}}else T&&c.unmatchedWorkstationTriangles++;m.push(...E)}if(A.size){for(let x of["position","normal"]){let b=f.getAttribute(x);if(!b)continue;let w=new Float32Array(b.count*b.itemSize);for(let S=0;S<b.count;S++)for(let T=0;T<b.itemSize;T++)w[S*b.itemSize+T]=b.getComponent(S,T);f.setAttribute(x,new Mt(w,b.itemSize))}let M=f.getAttribute("position"),E=f.getAttribute("normal");for(let[x,b]of A)l.fromBufferAttribute(M,x).applyMatrix4(u.matrixWorld),l.set(l.x,-l.z,l.y).applyMatrix4(a[b]),l.set(l.x,l.z,-l.y).applyMatrix4(v),M.setXYZ(x,l.x,l.y,l.z),E&&(h.fromBufferAttribute(E,x).applyMatrix3(_),h.set(h.x,-h.z,h.y).applyMatrix3(o[b]),h.set(h.x,h.z,-h.y).applyMatrix3(y).normalize(),E.setXYZ(x,h.x,h.y,h.z));M.needsUpdate=!0,E&&(E.needsUpdate=!0)}m.length!==(g?.length??p.count)&&f.setIndex(m),(A.size||m.length!==(g?.length??p.count))&&(f.computeBoundingBox(),f.computeBoundingSphere())}),c.removedShellTriangles<350||c.movedChairTriangles<240||c.lampTriangles<1100)throw new Error("Child workstation source geometry did not match the delivered core");return c}var HA=it(()=>{gt()});function oy(i,e,t,n){return!!(i==="linen"&&(n>-.08&&n<.88&&(e>-2.76&&e<-1.64&&t>.91&&t<4.36||e>-1.99&&e<1.73&&t>3.4&&t<4.38||e>-2.01&&e<1.01&&t>.84&&t<1.8)||n>.21&&n<.96&&(e>-7.82&&e<-5.68&&t>8.2&&t<10.5||e>-4.31&&e<-2.98&&t>8.2&&t<10.46)||n>.32&&n<1.15&&t>8.22&&t<9.2&&(e>3.57&&e<4.43||e>6.77&&e<7.63)||e>.69&&e<1.23&&t>7.09&&t<7.23&&n>.73&&n<1.29||e>-8.1&&e<-7.99&&t>1.87&&t<2.22&&n>.52&&n<.93)||["plain","linen"].includes(i)&&n>.38&&n<.91&&ay.some(([s,r])=>Math.abs(e-s)<.32&&Math.abs(t-r)<.32)||i==="plain"&&e>-1.59&&e<-1.27&&t>9.68&&t<9.92&&n>.765&&n<.778||i==="plain"&&e>5.34&&e<7.66&&t>2.39&&t<3.81&&n>.702&&n<.796||i==="plain"&&e>.741&&e<1.179&&t>7.117&&t<7.133&&n>.819&&n<.881||i==="metal"&&e>.62&&e<1.35&&t>7.07&&t<7.2&&n>1.2&&n<1.3||["plain","metal"].includes(i)&&e>-.46&&e<2.14&&t>9.75&&t<10.76&&n>-.02&&n<.71)}function cy(i){let e=0,t=0,n=new je;i.updateMatrixWorld(!0);let s=new R;return i.traverse(r=>{if(!r.isMesh||!["linen","plain","metal"].includes(r.material.name))return;let a=r.geometry,o=a.getAttribute("position"),c=a.index?.array,l=[];for(let h=0;h<(c?.length??o.count);h+=3){let d=[c?c[h]:h,c?c[h+1]:h+1,c?c[h+2]:h+2];s.set(0,0,0);for(let u of d)s.x+=o.getX(u)/3,s.y+=o.getY(u)/3,s.z+=o.getZ(u)/3;if(s.applyMatrix4(r.matrixWorld),oy(r.material.name,s.x,-s.z,s.y)){e++,n.expandByPoint(s),s.x>-.75&&s.x<.05&&-s.z>7.95&&-s.z<9.15&&t++;continue}l.push(...d)}l.length!==(c?.length??o.count)&&(a.setIndex(l),a.computeBoundingSphere())}),{removedTriangles:e,removedNearVanity:t,maskBounds:{min:n.min.toArray(),max:n.max.toArray()}}}async function WA({scene:i,core:e,loader:t,light:n}){let[s,r]=await Promise.all([t.loadAsync("assets/interior-craft.glb"),fetch("assets/child-workstation.json").then(d=>{if(!d.ok)throw new Error("Child workstation geometry "+d.status);return d.json()})]),a=VA(e,r),o=cy(e),c=new et;c.name="Tailored interior furniture";let l=new Map;s.scene.updateMatrixWorld(!0),s.scene.traverse(d=>{if(!d.isMesh)return;let u=d.material;l.has(u)||l.set(u,[]);let f=d.geometry.clone();for(let p of["position","normal","uv"]){let g=f.getAttribute(p);if(!g)continue;let m=new Float32Array(g.count*g.itemSize);for(let A=0;A<g.count;A++)for(let _=0;_<g.itemSize;_++)m[A*g.itemSize+_]=g.getComponent(A,_);f.setAttribute(p,new Mt(m,g.itemSize))}f.applyMatrix4(d.matrixWorld);for(let p of Object.keys(f.attributes))["position","normal","uv"].includes(p)||f.deleteAttribute(p);f.getAttribute("uv")||f.setAttribute("uv",new Mt(new Float32Array(f.getAttribute("position").count*2),2)),l.get(u).push(f)});let h=0;for(let[d,u]of l){if(u.length>1&&u.some(m=>m.index))for(let m of u)m.index||m.setIndex(Array.from({length:m.attributes.position.count},(A,_)=>_));let f=u.length===1?u[0]:en(u,!1);if(u.length>1)for(let m of u)m.dispose();if(!f)throw new Error("Interior furniture geometry merge failed");/wool|cotton/.test(d.name)&&(d.roughness=.94,d.normalScale?.setScalar(.42),"sheen"in d&&(d.sheen=.24,d.sheenRoughness=.85));for(let m of[d.map,d.normalMap,d.roughnessMap])m&&(m.wrapS=m.wrapT=Yt,m.anisotropy=8);n.patch(d,{plainMap:!0});let g=new De(f,d);g.name=d.name,g.castShadow=!/porcelain enamel/.test(d.name),g.receiveShadow=!0,c.add(g),h+=(f.index?.count??f.attributes.position.count)/3}return i.add(c),{root:c,...o,workstation:a,triangles:h,draws:l.size}}var ay,KA=it(()=>{gt();jn();HA();ay=[[5.83,2.2],[6.85,2.2],[5.83,4],[6.85,4],[5.06,3.1],[7.91,3.1],[7.85,7.87]]});function ly(){let i=new et;i.name="Fabricated stainless pool ladder";let e=new ht({name:"Pool ladder polished 316 stainless",color:"#d3d9d7",metalness:1,roughness:.19}),t=new ht({name:"Pool ladder satin stainless fittings",color:"#aab5b4",metalness:1,roughness:.29}),n=new ht({name:"Pool ladder charcoal non-slip rubber",color:"#262c2c",roughness:.84}),s=new R(7.79925,0,9.32656),r=new R(.605,0,.796).normalize(),a=new R(r.z,0,-r.x),o=(u,f,p)=>s.clone().addScaledVector(a,u).addScaledVector(r,p).setY(f),c=(u,f,p,g)=>{let m=new De(f,p);return m.name=u,g&&m.position.copy(g),m.castShadow=m.receiveShadow=!0,i.add(m),m};function l(u,f,p,g,m,A=new R(0,1,0),_=32){let y=c(u,new an(f,f,p,_),g,m);return y.quaternion.setFromUnitVectors(new R(0,1,0),A),y}function h(u,f,p,g){let m=c(u,new rn(...f),p,g);return m.rotation.y=Math.atan2(-a.z,a.x),m}for(let u of[-.28,.28]){let f=new Ba;f.add(new xs(o(u,-.045,.48),o(u,.62,.48)));let p=new _s(0,0,.4,.4,0,Math.PI,!1,0),g=[];for(let m=0;m<=64;m++){let A=p.getPoint(m/64);g.push(o(u,.62+A.y,.08+A.x))}f.add(new ii(g,!1,"centripetal")),f.add(new xs(o(u,.62,-.32),o(u,-1.08,-.32))),c("Continuous 38 mm bent stainless handrail",new si(f,192,.019,16,!1),e),l("Deck anchor gasket",.066,.006,n,o(u,.015,.48)),l("Anchor cover flange",.064,.014,t,o(u,.024,.48)),l("Socket collar",.027,.045,e,o(u,.047,.48));for(let m of[Math.PI/2,Math.PI*7/6,Math.PI*11/6]){let A=o(u+Math.cos(m)*.047,.035,.48+Math.sin(m)*.047);l("Countersunk anchor screw",.0045,.003,e,A,void 0,12);let _=h("Anchor screw slot",[.006,7e-4,.0012],n,A.clone().add(new R(0,.0016,0)));_.rotation.y+=m}l("Underwater wall bumper stem",.012,.055,t,o(u,-1.04,-.285),r),l("Rubber shell bumper",.037,.025,n,o(u,-1.04,-.245),r),l("Sealed rail end cap",.019,.008,e,o(u,-1.081,-.32))}for(let u of[-.34,-.62,-.9]){h("Formed stainless tread with folded lips",[.57,.034,.116],t,o(0,u,-.32)),h("Recessed non-slip step insert",[.473,.009,.09],n,o(0,u+.022,-.32));for(let f=-8;f<=8;f++)h("Moulded grip rib",[.007,.0035,.082],n,o(f*.0255,u+.028,-.32));for(let f of[-.28,.28])l("Rail-to-tread saddle clamp",.023,.056,t,o(f,u,-.32)),l("Step attachment hex bolt",.007,.01,e,o(f,u,-.345),r,6)}let d=new Map;for(let u of[...i.children])u.updateMatrix(),u.geometry.applyMatrix4(u.matrix),d.has(u.material)||d.set(u.material,[]),d.get(u.material).push(u.geometry),i.remove(u);for(let[u,f]of d){let p=c(u.name,en(f),u);p.castShadow=p.receiveShadow=!0;for(let g of f)g.dispose()}return i.userData.fabrication={railDiameter:.038,railSpacing:.56,rungSpacing:.28,deckAnchors:2,steps:3},i}function qA({scene:i,light:e}){let t=0;i.traverse(s=>{if(!s.isMesh||!/^landscape[ _]metal/.test(s.name))return;let r=s.geometry,a=r.getAttribute("position"),o=r.index,c=[],l=new R;s.updateWorldMatrix(!0,!1);let h=u=>(l.fromBufferAttribute(a,u).applyMatrix4(s.matrixWorld),l.x>7.59&&l.x<8.21&&l.y>-.89&&l.y<.73&&l.z>8.84&&l.z<10.56),d=o?o.count:a.count;for(let u=0;u<d;u+=3){let f=[0,1,2].map(p=>o?o.getX(u+p):u+p);f.every(h)?t++:c.push(...f)}c.length!==d&&(s.geometry=r.clone(),s.geometry.setIndex(c),s.geometry.computeBoundingSphere())});let n=ly();if(e){let s=new Set;n.traverse(r=>{!r.material||s.has(r.material)||(s.add(r.material),e.patch(r.material,{plainMap:!0}))})}return n.userData.replacedTriangles=t,i.add(n),n}var XA=it(()=>{gt();jn()});var zs,JA=it(()=>{gt();zs=class i extends De{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let n=this,s=t.color!==void 0?new ye(t.color):new ye(8355711),r=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,c=t.shader||i.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,h=new Tn,d=new R,u=new R,f=new R,p=new ge,g=new R(0,0,-1),m=new st,A=new R,_=new R,y=new st,v=new ge,M=new Ot(r,a,{samples:l,type:yt}),E=new Lt({name:c.name!==void 0?c.name:"unspecified",uniforms:Rc.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});E.uniforms.tDiffuse.value=M.texture,E.uniforms.color.value=s,E.uniforms.textureMatrix.value=v,this.material=E,this.onBeforeRender=function(x,b,w){let S=this.getReflectionCamera(w);if(u.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(w.matrixWorld),p.extractRotation(n.matrixWorld),d.set(0,0,1),d.applyMatrix4(p),A.subVectors(u,f),A.dot(d)>0===!0&&this.forceUpdate===!1)return;A.reflect(d).negate(),A.add(u),p.extractRotation(w.matrixWorld),g.set(0,0,-1),g.applyMatrix4(p),g.add(f),_.subVectors(u,g),_.reflect(d).negate(),_.add(u),S.position.copy(A),S.up.set(0,1,0),S.up.applyMatrix4(p),S.up.reflect(d),S.lookAt(_),S.far=w.far,S.updateMatrixWorld(),S.projectionMatrix.copy(w.projectionMatrix),S.projectionMatrix.elements[8]*=-1,S.projectionMatrix.elements[12]*=-1,v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(S.projectionMatrix),v.multiply(S.matrixWorldInverse),v.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(d,u),h.applyMatrix4(S.matrixWorldInverse),m.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let C=S.projectionMatrix;S.isOrthographicCamera?(y.x=(Math.sign(m.x)+C.elements[8])/C.elements[0],y.y=(Math.sign(m.y)+C.elements[9])/C.elements[5],y.z=-w.far,y.w=1):(y.x=(Math.sign(m.x)+C.elements[8])/C.elements[0],y.y=(Math.sign(m.y)+C.elements[9])/C.elements[5],y.z=-1,y.w=(1+C.elements[10])/C.elements[14]),m.multiplyScalar(2/m.dot(y)),C.elements[2]=m.x,C.elements[6]=m.y,S.isOrthographicCamera?(C.elements[10]=m.z-o,C.elements[14]=m.w-1):(C.elements[10]=m.z+1-o,C.elements[14]=m.w),n.visible=!1;let F=x.getRenderTarget(),I=x.xr.enabled,P=x.shadowMap.autoUpdate;x.xr.enabled=!1,x.shadowMap.autoUpdate=!1,x.setRenderTarget(M),x.state.buffers.depth.setMask(!0),x.autoClear===!1&&x.clear(),x.render(b,S),x.xr.enabled=I,x.shadowMap.autoUpdate=P,x.setRenderTarget(F);let L=w.viewport;L!==void 0&&x.state.viewport(L),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return M},this.dispose=function(){M.dispose(),n.material.dispose()},this.getReflectionCamera=function(x){let b=this._reflectionCameras.get(x);return b===void 0&&(b=x.clone(),this._reflectionCameras.set(x,b)),b}}};zs.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`}});function dy(){let t=new Uint8Array(65536),n=[];for(let r=0;r<10;r++)for(let a=0;a<10;a++){let o=c=>{let l=Math.sin(c*127.1+311.7)*43758.5453;return l-Math.floor(l)};n.push([a+.2+.6*o(a+r*10),r+.2+.6*o(a+r*10+201)])}for(let r=0;r<256;r++)for(let a=0;a<256;a++){let o=a/256*10,c=r/256*10,l=o+.24*Math.sin(c*Math.PI*4/10)+.13*Math.cos(o*Math.PI*6/10),h=c+.27*Math.cos(o*Math.PI*4/10)+.11*Math.sin(c*Math.PI*6/10),d=Math.floor(l),u=Math.floor(h),f=1/0,p=1/0;for(let g=-1;g<=1;g++)for(let m=-1;m<=1;m++){let A=d+m,_=u+g,y=n[(_%10+10)%10*10+(A%10+10)%10],v=Math.hypot(y[0]+A-(A%10+10)%10-l,y[1]+_-(_%10+10)%10-h);v<f?(p=f,f=v):p=Math.min(p,v)}t[r*256+a]=Math.round(255*Math.exp(-Math.pow((p-f)/.075,2)))}let s=new Nn(t,256,256,Gn,Ke);return s.wrapS=s.wrapT=Yt,s.generateMipmaps=!0,s.minFilter=Qt,s.needsUpdate=!0,s}function fy(i){let e=i.getAttribute("position"),t=i.index,n=new Map,s=c=>[e.getX(c),e.getY(c)].map(l=>Math.round(l*1e4)).join(","),r=t?t.count:e.count;for(let c=0;c<r;c+=3){let l=[0,1,2].map(h=>t?t.getX(c+h):c+h);for(let h=0;h<3;h++){let d=l[h],u=l[(h+1)%3],f=s(d),p=s(u),g=f<p?`${f}|${p}`:`${p}|${f}`,m=n.get(g);m?m.count++:n.set(g,{a:d,b:u,count:1})}}let a=[...n.values()].filter(c=>c.count===1),o=new Float32Array(e.count);for(let c=0;c<e.count;c++){let l=e.getX(c),h=e.getY(c),d=1/0;for(let{a:u,b:f}of a){let p=e.getX(u),g=e.getY(u),m=e.getX(f)-p,A=e.getY(f)-g,_=Math.max(0,Math.min(1,((l-p)*m+(h-g)*A)/(m*m+A*A||1)));d=Math.min(d,Math.hypot(l-p-m*_,h-g-A*_))}o[c]=Number.isFinite(d)?d:0}i.setAttribute("waterEdge",new Be(o,1))}function py(i,e){let t=new ht({name:"Pool lamp brushed stainless bezel",color:11254454,metalness:.85,roughness:.26}),n=new ht({name:"Pool lamp sealed opal lens",color:7774875,roughness:.22,emissive:9300437});n.onBeforeCompile=r=>{r.uniforms.uPoolLampPower=e.uPoolLamps,r.uniforms.uPoolLampNight=e.uNight,r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
uniform float uPoolLampPower,uPoolLampNight;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance*=uPoolLampPower*max(.22,uPoolLampNight)*2.8;`)},n.customProgramCacheKey=()=>"sealed-pool-lamp-power";let s=new R(0,1,0);for(let[r,a]of[[[.15,-.625,7.005],[1,.27,0]],[[8.635,-.625,6.39],[-.98,.27,.16]]]){let o=new R(...a).normalize(),c=new R(...r);for(let[l,h,d,u,f]of[[.105,.025,0,t,"Submerged sealed stainless lamp bezel"],[.083,.012,.017,n,"Submerged recessed opal pool light"]]){let p=new De(new an(l,l,h,40),u);p.name=f,p.quaternion.setFromUnitVectors(s,o),p.position.copy(c).addScaledVector(o,d),i.add(p)}}}function Ay(i,e,t){let n=new je(new R(-.8,-1.8,3.32),new R(9.58,.13,10.7)),s=[new R,new R,new R],r=[],a=new Map;i.updateMatrixWorld(!0),i.traverse(o=>{if(!o.isMesh||o.isInstancedMesh)return;let c=/^landscape[ _](tile|plain|metal)/i.test(o.name),l=/^Pool (ladder|lamp)/.test(o.material.name),h=o.material.name.startsWith("Coping ");if(!c&&!l&&!h)return;let d=o.geometry,u=d.getAttribute("position"),f=d.index,p=[];for(let _=0,y=f?.count??u.count;_<y;_+=3){let v=f?f.getX(_):_,M=f?f.getX(_+1):_+1,E=f?f.getX(_+2):_+2;[v,M,E].some((b,w)=>n.containsPoint(s[w].fromBufferAttribute(u,b).applyMatrix4(o.matrixWorld)))&&p.push(v,M,E)}if(!p.length)return;let g=new Ze;for(let[_,y]of Object.entries(d.attributes))g.setAttribute(_,y);g.setIndex(p);let m=a.get(o.material);if(!m){let _=o.material;m=_.clone(),m.onBeforeCompile=(y,v)=>{_.onBeforeCompile(y,v),y.vertexShader=y.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
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
        `)},m.customProgramCacheKey=()=>_.customProgramCacheKey()+"/submerged-image",a.set(o.material,m)}let A=new De(g,m);A.matrixAutoUpdate=!1,A.matrix.copy(o.matrixWorld),A.layers.set(t),A.receiveShadow=!0,A.frustumCulled=!1,A.name="Submerged "+o.name,r.push(A)}),i.add(...r),e?.layers.enable(t)}function YA(i,e=0){i.geometry.boundingBox||i.geometry.computeBoundingBox();let t=i.geometry.boundingBox.clone();t.min.x-=e,t.max.x+=e,t.min.y-=e,t.max.y+=e;let n=[];for(let l of[t.min.x,t.max.x])for(let h of[t.min.y,t.max.y])for(let d of[t.min.z,t.max.z])n.push(new st(l,h,d,1));let s=new st,r=new ge,a=new ge,o=null,c=new ge;return(l,h,d=!1)=>{let u=h.width,f=h.height;r.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse).multiply(i.matrixWorld);let p=1/0,g=1/0,m=-1/0,A=-1/0;for(let b of n){if(s.copy(b).applyMatrix4(r),s.w<=0||s.z<-s.w){p=g=-1,m=A=1;break}p=Math.min(p,s.x/s.w),g=Math.min(g,s.y/s.w),m=Math.max(m,s.x/s.w),A=Math.max(A,s.y/s.w)}let _=24,y=Math.max(0,Math.floor((p+1)*.5*u)-_),v=Math.max(0,Math.floor((g+1)*.5*f)-_),M=Math.min(u,Math.ceil((m+1)*.5*u)+_)-y,E=Math.min(f,Math.ceil((A+1)*.5*f)+_)-v;if(M<=0||E<=0)return null;o??=l.clone(!1),o.copy(l,!1),a.set(u/M,0,0,(u-2*y-M)/M,0,f/E,0,(f-2*v-E)/E,0,0,1,0,0,0,0,1),o.projectionMatrix.premultiply(a),o.projectionMatrixInverse.copy(o.projectionMatrix).invert();let x=d?u-y-M:y;return h.viewport.set(x,v,M,E),h.scissor.copy(h.viewport),h.scissorTest=!0,c.set(M/u,0,0,x/u,0,E/f,0,v/f,0,0,1,0,0,0,0,1),{camera:o,uvTransform:c}}}function jA({renderer:i,scene:e,camera:t,waterMesh:n}){let s=[],r=[],a=new R,o=new R,c=new R,l=0,h=.4,d=null,u=null,f=()=>{},p=0,g=new Yi,m=new fe;function A(){i.getDrawingBufferSize(m);let M=Math.max(m.x,m.y),E=Math.min(.91,1344/Math.max(1,M));return m.multiplyScalar(E).round()}e.traverse(M=>{M.isDirectionalLight&&!d&&(d=M);let E=Array.isArray(M.material)?M.material:[M.material];for(let x of E)x&&/mirror/i.test(x.name)&&(x.visible=!1)});function _(M,E,x=()=>!0){let b=M.onBeforeRender,w=YA(M,M===u?.34:0),S=-1/0,T=new ge,C=new ge;M.userData.repaint=()=>{S=-1/0},M.onBeforeRender=function(F,I,P){if(P!==t||P.isVirtualCamera||!x()||!(!T.equals(P.matrixWorld)||!C.equals(P.projectionMatrix))&&l-S<E)return;let z=w(P,M.getRenderTarget(),!0);if(!z)return;let O=[];for(let H of s)H!==M&&H.visible&&(O.push(H),H.visible=!1);let G=M.getReflectionCamera(z.camera);G.isVirtualCamera=!0;let V=F.getRenderTarget();try{b.call(M,F,I,z.camera),M.material.uniforms.textureMatrix.value.premultiply(z.uvTransform),S=l,T.copy(P.matrixWorld),C.copy(P.projectionMatrix)}finally{F.setRenderTarget(V);for(let H of O)H.visible=!0}},s.push(M)}if(n?.geometry){n.updateWorldMatrix(!0,!1);let M=n.geometry.clone();for(let q of["position","normal"]){let Z=M.getAttribute(q);if(!Z)continue;let W=new Float32Array(Z.count*3);for(let j=0;j<Z.count;j++)W[j*3]=Z.getX(j),W[j*3+1]=Z.getY(j),W[j*3+2]=Z.getZ(j);M.setAttribute(q,new Be(W,3))}M.applyMatrix4(n.matrixWorld),M.computeBoundingBox();let E=(M.boundingBox.min.y+M.boundingBox.max.y)*.5;M.applyMatrix4(new ge().makeTranslation(0,-E,0)),M.rotateX(Math.PI/2),fy(M),M.computeBoundingSphere();let x=A();u=new zs(M,{textureWidth:x.x,textureHeight:x.y,multisample:2,clipBias:.002,color:new ye("#438d8f"),shader:hy}),u.name="Pool moving planar water";let b=u.getRenderTarget();b.texture.generateMipmaps=!0,b.texture.minFilter=Qt,u.position.y=E,u.rotation.x=-Math.PI/2,u.material.transparent=!0,u.material.depthWrite=!0,u.material.toneMapped=!0,u.renderOrder=5,n.visible=!1,e.add(u),_(u,1/24);let w=new fe,S=new Ot(1,1,{type:yt,minFilter:At,magFilter:At,depthBuffer:!0,generateMipmaps:!1,samples:4});S.depthTexture=new Bn(1,1,bn),u.material.uniforms.uBasin.value=S.texture,u.material.uniforms.uBasinDepth.value=S.depthTexture;let T=u.onBeforeRender;py(e,u.material.uniforms);let C=6;Ay(e,d,C);let F=YA(u,.34),I=new ge,P=new ge,L=!0,z=-1,O=-1/0;f=()=>{L=!0},u.onBeforeRender=function(q,Z,W){if(W!==t||W.isVirtualCamera)return;if(!I.equals(W.matrixWorld)||!P.equals(W.projectionMatrix)||L||z!==h||l-O>=1/24){i.getDrawingBufferSize(w);let re=Math.min(1,1152/Math.max(w.x,w.y)),le=Math.round(w.x*re),ae=Math.round(w.y*re);(S.width!==le||S.height!==ae)&&S.setSize(le,ae);let me=F(W,S);if(!me)return;let Fe=q.getRenderTarget();me.camera.layers.set(C);let xe=q.shadowMap.autoUpdate,Ie=q.shadowMap.needsUpdate;q.shadowMap.autoUpdate=!1,q.shadowMap.needsUpdate=!1;try{q.setRenderTarget(S),q.clear(),q.render(Z,me.camera),u.material.uniforms.uProjectionInverse.value.copy(W.projectionMatrixInverse),I.copy(W.matrixWorld),P.copy(W.projectionMatrix),z=h,O=l,L=!1}finally{q.shadowMap.autoUpdate=xe,q.shadowMap.needsUpdate=Ie,q.setRenderTarget(Fe)}}T.call(this,q,Z,W)};let G=dy();G.anisotropy=Math.min(4,i.capabilities.getMaxAnisotropy());let V={uPoolCaustics:{value:G},uPoolLevel:{value:E},uPoolClock:u.material.uniforms.uClock,uPoolNight:u.material.uniforms.uNight,uPoolSun:u.material.uniforms.uSun,uPoolLamps:u.material.uniforms.uPoolLamps},H=new Set;e.traverse(q=>{if(q.layers.mask===1<<C)return;let Z=Array.isArray(q.material)?q.material:[q.material];for(let W of Z){if(W?.name!=="tile"||H.has(W))continue;H.add(W);let j=W.onBeforeCompile,re=W.customProgramCacheKey();W.onBeforeCompile=function(le,ae){j.call(this,le,ae),Object.assign(le.uniforms,V),le.vertexShader=le.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vPoolWorld;`).replace("#include <project_vertex>",`#include <project_vertex>
vPoolWorld=(modelMatrix*vec4(transformed,1.)).xyz;`),le.fragmentShader=le.fragmentShader.replace("#include <common>",`#include <common>
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
          `)},W.customProgramCacheKey=()=>re+"/pool-caustics-v2",W.needsUpdate=!0}})}for(let M of[{position:[-8.864,1.62,-8.3],size:[.94,1.03],room:[-9,-4.7,-11.2,-7.05]},{position:[-.62,1.61,-8.55],size:[.7,.82],room:[-.7,2.3,-10.8,-7.2]}]){let E=new zs(new bs(...M.size),{textureWidth:Math.round(512*M.size[0]/M.size[1]),textureHeight:512,multisample:0,clipBias:.002,color:new ye("#e6e9e7"),shader:uy});E.name="Room planar silver reflection",E.getRenderTarget().texture.generateMipmaps=!0,E.getRenderTarget().texture.minFilter=Qt,E.position.set(...M.position),E.rotation.y=Math.PI/2,E.userData.room=M.room,e.add(E),r.push(E),_(E,1/24,()=>E.visible)}function y(M=0,E=.4){l+=Math.max(0,Math.min(M,.25)),h=Math.max(0,Math.min(1,E));let x=Math.max(0,Math.min(1,(h-.35)/.6)),b=x*x*(3-2*x);t.getWorldPosition(a);for(let w of r){let[S,T,C,F]=w.userData.room;w.visible=a.x>S&&a.x<T&&a.z>C&&a.z<F}if(u){let w=u.material.uniforms;w.uClock.value=l,w.uNight.value=b,d&&(d.getWorldPosition(o),d.target.getWorldPosition(c),w.uSun.value.copy(o).sub(c).normalize(),w.uSunColor.value.copy(d.color).multiplyScalar(Math.min(2,d.intensity)))}}function v(){if(u){let M=A();u.getRenderTarget().setSize(M.x,M.y)}f();for(let M of s)M.userData.repaint();y(0,h)}return y(0,.4),{update:y,repaint:v,surface:u,hitTest(M){if(!u)return null;g.ray.copy(M.ray??M),u.updateWorldMatrix(!0,!1);let E=g.intersectObject(u,!1)[0];return E?{distance:E.distance,point:E.point}:null},disturb(M,E=1){if(!u||!M||!Number.isFinite(M.x)||!Number.isFinite(M.z))return!1;let x=u.material.uniforms.uDisturbances.value;return x[p].set(M.x,M.z,l,Math.max(0,Math.min(1.5,E))),p=(p+1)%x.length,!0},setPoolLights(M){u&&(u.material.uniforms.uPoolLamps.value=M?1:0,f(),u.userData.repaint())}}}var uy,hy,ZA=it(()=>{gt();JA();uy={...zs.ReflectorShader,name:"Neutral silver mirror",fragmentShader:`
    uniform sampler2D tDiffuse;
    varying vec4 vUv;
    #include <logdepthbuf_pars_fragment>
    void main() {
      #include <logdepthbuf_fragment>
      gl_FragColor = vec4(texture2DProj(tDiffuse, vUv).rgb * .94, 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }
  `},hy={name:"Calm clear pool",uniforms:{color:{value:new ye("#438d8f")},tDiffuse:{value:null},textureMatrix:{value:null},uClock:{value:0},uNight:{value:0},uDisturbances:{value:Array.from({length:4},()=>new st(0,0,-100,0))},uPoolLamps:{value:1},uBasin:{value:null},uBasinDepth:{value:null},uProjectionInverse:{value:new ge},uSun:{value:new R(.63459,.22209,.74025)},uSunColor:{value:new ye(1,.77,.43)}},vertexShader:`
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
  `}});function $A(i,e,t,n){let s=b=>{let w=new Ns(128,{type:yt,generateMipmaps:!0,minFilter:Qt}),S=new Ji(.105,815,w);return S.position.copy(b),{rt:w,camera:S,version:-1}},r=s(new R(1.35,1.48,-2.8)),a=s(new R(2.1,1.45,3.15)),o=(b,w,S)=>({origin:new R(...b),lo:new R(...w),hi:new R(...S)}),c=o([1.35,1.48,-2.8],[-9.15,-.32,-7],[9.15,3.52,.08]),l=o([-6.56,1.46,-2.5],[-9.1,0,-5.75],[-2.95,3.5,.08]),h=[o([-6.15,1.52,-8.8],[-9.12,0,-11.13],[-4.6,3.6,-6.91]),o([-2.31,1.48,-8.58],[-4.68,0,-11.13],[-.72,3.26,-6.91]),o([.83,1.54,-8.77],[-.82,0,-11.13],[2.34,3.12,-6.91]),o([5.75,1.5,-8.53],[2.24,0,-11.13],[9.13,3.56,-6.91])];function d(b){return b.z<-6.94&&b.z>-11.08&&Math.abs(b.x)<9.1?h[b.x<-4.64?0:b.x<-.79?1:b.x<2.28?2:3]:b.x<-3.1&&b.x>-9.1&&b.z<0&&b.z>-5.4?l:c}let u={insideEnv:{value:r.rt.texture},yardEnv:{value:a.rt.texture},night:{value:0},roomOrigin:{value:c.origin},roomLow:{value:c.lo},roomHigh:{value:c.hi},roomReady:{value:1}};for(let[b,w]of[!1,!0].map(S=>[S,t.filter(T=>T.material.name==="car-glass"===S)])){let S=new Lt({uniforms:{...u,automotive:{value:b?1:0}},side:b?Rt:Sn,transparent:!0,depthWrite:!1,vertexShader:"varying vec3 vWorld,vNorm;void main(){vec4 p=modelMatrix*vec4(position,1.);vWorld=p.xyz;vNorm=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*viewMatrix*p;}",fragmentShader:`uniform samplerCube insideEnv,yardEnv;uniform vec3 roomOrigin,roomLow,roomHigh;uniform float automotive,night,roomReady;varying vec3 vWorld,vNorm;
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
      }`});S.forceSinglePass=!0,S.name=b?"Car glazing":"Window glazing";for(let T of w)T.material=S,T.renderOrder=2}let f=new Map,p=[r,a],g=new Set(t),m=-9,A=0,_,y=0,v;function M(){let b=f.get(_);u.insideEnv.value=b?b.rt.texture:a.rt.texture,u.roomReady.value=+!!b,u.yardEnv.value=a.rt.texture,u.roomOrigin.value=_.origin,u.roomLow.value=_.lo,u.roomHigh.value=_.hi,n(b?b.rt.texture:null,_)}function E(){let b=p.find(w=>w!==a&&!Array.from(f.values()).includes(w));if(!b&&p.length<4&&(b=s(_.origin),p.push(b)),!b){let w=[...f.keys()].find(S=>S!==_);b=f.get(w),f.delete(w)}return b}function x(b,w=0,S=6){let{camera:T,rt:C}=b;T.coordinateSystem!==i.coordinateSystem&&(T.coordinateSystem=i.coordinateSystem,T.updateCoordinateSystem()),T.updateMatrixWorld();let F=[],I=i.getRenderTarget(),P=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),z=i.xr.enabled,O=i.shadowMap.autoUpdate,G=i.shadowMap.needsUpdate,V=C.texture.mipmapsAutoUpdate;try{e.traverse(H=>{H.visible&&(H.isReflector||g.has(H)||H.userData.noProbe)&&(F.push(H),H.visible=!1)}),i.xr.enabled=!1,i.shadowMap.autoUpdate=!1,i.shadowMap.needsUpdate=!1,n(null);for(let H=w;H<w+S;H++)C.texture.mipmapsAutoUpdate=H===5?V:!1,i.setRenderTarget(C,H,T.activeMipmapLevel),i.state.buffers.depth.getReversed()&&i.autoClear===!1&&i.clearDepth(),i.render(e,T.children[H]);w+S===6&&(C.texture.needsPMREMUpdate=!0)}finally{C.texture.mipmapsAutoUpdate=V,i.setRenderTarget(I,P,L),i.xr.enabled=z,i.shadowMap.autoUpdate=O,i.shadowMap.needsUpdate=G;for(let q of F)q.visible=!0;let H=f.get(_);n(H?H.rt.texture:null,_)}}return{update(b,w,S){u.night.value=b;let T=d(S);if((Math.abs(b-m)>.13||m<-2)&&(A||(A=w),(w-A>.28||m<-2)&&(y++,m=b,A=0,v=void 0)),a.version<0)return _=T,r.camera.position.copy(T.origin),x(r),x(a),r.version=a.version=y,f.set(T,r),M(),!0;let C=!1;if(T!==_){_=T,v?.zone!==T&&(v=void 0);let F=f.get(T);F&&(f.delete(T),f.set(T,F)),M(),C=!0}if(!v){let F=f.get(_),I=!F||F.version!==y?_:a.version!==y?null:void 0;if(I!==void 0){let P=E();P.camera.position.copy(I?I.origin:a.camera.position),v={probe:P,zone:I,face:0,version:y}}}return v&&(x(v.probe,v.face,1),++v.face===6&&(v.probe.version=v.version,v.zone?f.set(v.zone,v.probe):a=v.probe,v=void 0,M(),C=!0)),C},invalidate(){m=-9}}}function em(i,e){let t=new et;t.userData.noProbe=!0;let n=document.createElement("canvas");n.width=n.height=96;let s=n.getContext("2d"),r=s.createRadialGradient(48,48,0,48,48,48);for(let[h,d]of[[0,".75"],[.065,".42"],[.18,".18"],[.38,".065"],[1,"0"]])r.addColorStop(h,"rgba(255,224,180,"+d+")");s.fillStyle=r,s.fillRect(0,0,96,96);let a=new gs(n);a.colorSpace=lt;let o=new gr({map:a,opacity:0,color:16767659,transparent:!0,depthWrite:!1,blending:Ua});for(let h of e){let d=new xa(o);d.position.set(...h),d.scale.setScalar(.39),t.add(d)}let c=0;function l(h){c=h,o.opacity=h*.38;for(let d of t.children){let u=d.userData.power;d.visible=u??h>.075}}return l.setPower=(h,d)=>{for(let u of t.children)u.position.distanceTo(h)>(h.x>6&&h.x<7?.84:.55)||(u.material!==o&&u.material.dispose(),u.userData.power=d,u.material=d==null?o:o.clone(),d!=null&&(u.material.opacity=d?.24:0));l(c)},i.add(t),l}var tm=it(()=>{gt()});function nm(i,e){let t=[],n=new ge,s=new dn;e.traverse(f=>{if(!f.isInstancedMesh||f.count<8||f.boundingSphere.radius<4)return;let p=f.instanceMatrix.array.slice(),g=f.instanceColor?.array.slice(),m=[];f.geometry.computeBoundingSphere();for(let A=0;A<f.count;A++)n.fromArray(p,A*16),m.push(f.geometry.boundingSphere.clone().applyMatrix4(n));t.push({mesh:f,matrices:p,colors:g,spheres:m})});let r=new kn,a=new ge,o=[],c=[],l=[],h=i.onBeforeRender,d=i.onAfterRender,u=f=>{for(let p=0;p<t.length;p++){let g=t[p].mesh,m=f[p];g.instanceMatrix=m.matrix,g.instanceColor=m.color,g.count=m.count}};i.onBeforeRender=function(f,p,g,m){h.call(this,f,p,g,m);let A=c[l.length]??(c[l.length]=new WeakMap),_=A.get(g);_||(_=t.map(({matrices:M,colors:E,spheres:x})=>({matrix:new Un(M.slice(),16).setUsage(Ic),color:E?new Un(E.slice(),3).setUsage(Ic):null,selected:Int32Array.from(x,(b,w)=>w),count:x.length})),A.set(g,_)),l.push(_),u(_);let y=g.isArrayCamera;y||r.setFromProjectionMatrix(a.multiplyMatrices(g.projectionMatrix,g.matrixWorldInverse),g.coordinateSystem,g.reversedDepth),o.length=0;let v=!1;f.shadowMap.enabled&&(f.shadowMap.autoUpdate||f.shadowMap.needsUpdate)&&i.traverseVisible(M=>{let E=M.shadow;if(!(!M.isLight||!M.castShadow||!E||!E.autoUpdate&&!E.needsUpdate)){if(M.isPointLight){v=!0;return}E.updateMatrices(M),o.push(E.getFrustum())}});for(let M=0;M<t.length;M++){let{mesh:E,matrices:x,colors:b,spheres:w}=t[M],S=_[M],{selected:T}=S,C=0,F=!1;for(let I=0;I<w.length;I++)s.copy(w[I]).applyMatrix4(E.matrixWorld),!(!y&&!r.intersectsSphere(s)&&!(E.castShadow&&(v||o.some(P=>P.intersectsSphere(s)))))&&(T[C]!==I&&(T[C]=I,F=!0,E.instanceMatrix.array.set(x.subarray(I*16,I*16+16),C*16),b&&E.instanceColor.array.set(b.subarray(I*3,I*3+3),C*3)),C++);S.count=E.count=C,F&&(E.instanceMatrix.needsUpdate=!0,b&&(E.instanceColor.needsUpdate=!0))}},i.onAfterRender=function(f,p,g){d.call(this,f,p,g),l.pop(),l.length&&u(l[l.length-1])}}var im=it(()=>{gt()});function _h(i,e){let t=Math.max(Math.abs(i-2.4)-17.4,Math.abs(e-.5)-16.5,0),n=Kc(0,20,t),s=Kc(25,110,Math.hypot(i,e)),r=.58+.4*Math.sin(i*.079+e*.041)+.37*Math.sin(e*.095-i*.019)+.15*Math.sin(i*.22+e*.17),a=.45*Math.exp(-Math.pow((i-8-Math.sin(e*.035)*17)/9,2)),o=Kc(0,6.5,t)*(1-Kc(26,54,t)),c=.31+.22*Math.sin(i*.245-e*.19)+.14*Math.sin(e*.39+i*.157);return-.075+n*(r-a)+o*c+s*(.9+.35*Math.sin(i*.029-e*.011))}function gy(i,e,t,n,s){let r=Math.ceil((e-i)/s),a=Math.ceil((n-t)/s),o=[],c=[],l=[],h=[],d=new ye;for(let f=0;f<=a;f++)for(let p=0;p<=r;p++){let g=Je.lerp(i,e,p/r),m=Je.lerp(t,n,f/a),A=_h(g,m);o.push(g,A,m),c.push(g/3.6,m/3.6);let _=.94+.055*Math.sin(g*.19+m*.11)+.04*Math.sin(m*.44-g*.32),y=Math.exp(-Math.pow((g-8-Math.sin(m*.035)*17)/9,2));if(d.setRGB(_*(1+.035*y),_,_*(1-.045*y)),l.push(...d.toArray()),p<r&&f<a){let v=f*(r+1)+p,M=v+r+1;h.push(v,M,v+1,v+1,M,M+1)}}let u=new Ze;return u.setAttribute("position",new Be(o,3)),u.setAttribute("uv",new Be(c,2)),u.setAttribute("color",new Be(l,3)),u.setIndex(h),u.computeVertexNormals(),u}function _y(i,e,t){let n=new ht({map:i,normalMap:e,normalScale:new fe(.68,.68),color:16777215,roughness:.97,vertexColors:!0});return n.name="Mineral alluvium",n.onBeforeCompile=s=>{s.uniforms.desertMacro={value:t},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 desertPosition;`).replace("#include <begin_vertex>",`#include <begin_vertex>
desertPosition=position;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D desertMacro;varying vec3 desertPosition;`),s.fragmentShader=s.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
      vec2 broadUV=mat2(.79,-.61,.61,.79)*desertPosition.xz/22.;
      vec3 broad=texture2D(desertMacro,broadUV).rgb;
      float broadValue=dot(broad,vec3(.27,.58,.15));
      diffuseColor.rgb*=mix(.84,1.15,smoothstep(.06,.65,broadValue));
      diffuseColor.rgb*=1.20;`),s.fragmentShader=s.fragmentShader.replace("#include <opaque_fragment>",`#include <opaque_fragment>
      float desertHaze=smoothstep(32.,190.,length(desertPosition.xz));
      gl_FragColor.rgb=mix(gl_FragColor.rgb,fogColor*.58,desertHaze*.88);`)},n.customProgramCacheKey=()=>"desert-alluvium-v1",n}function om(i){let e=new R;i.traverse(s=>{if(!s.isMesh)return;if(s.material?.name==="range"){s.visible=!1;return}if(!["plain","stone"].includes(s.material?.name))return;let r=s.geometry,a=r.getAttribute("position"),o=r.getIndex(),c=[],l=o?o.count:a.count,h=[];for(let d=0;d<l;d+=3){let u=[0,1,2].map(f=>o?o.getX(d+f):d+f);e.set(0,0,0);for(let f of u)e.x+=a.getX(f)/3,e.y+=a.getY(f)/3,e.z+=a.getZ(f)/3;e.applyMatrix4(s.matrixWorld),h.push({ids:u,point:e.clone(),outside:Xa(e.x,e.z)&&e.y<6})}if(s.material.name==="stone"){let d=h.map((g,m)=>m),u=new Map,f=g=>{for(;d[g]!==g;)d[g]=d[d[g]],g=d[g];return g};for(let[g,m]of h.entries())for(let A of m.ids){let _=[a.getX(A),a.getY(A),a.getZ(A)].map(y=>Math.round(y*1e4)).join("/");u.has(_)?d[f(g)]=f(u.get(_)):u.set(_,g)}let p=new Map;for(let[g,m]of h.entries()){let A=f(g);p.has(A)||p.set(A,{count:0,outside:0,bounds:new je});let _=p.get(A);_.count++,_.outside+=Number(m.outside),_.bounds.expandByPoint(m.point)}for(let[g,m]of h.entries()){let A=p.get(f(g)),_=A.bounds.getSize(new R);!(A.outside/A.count>.12&&Math.max(_.x,_.z)<6&&_.y<5)&&!m.outside&&c.push(...m.ids)}}else for(let d of h)d.outside||c.push(...d.ids);if(c.length!==l){let d=r.clone();d.setIndex(c),d.computeBoundingSphere(),s.geometry=d}});let t=i.getObjectByName("Desert living landscape");t&&nm(i,t);let n=[];return t?.traverse(s=>{s.userData.desertNear&&n.push(s)}),s=>{for(let r of n){let a=r.position.x-s.position.x,o=r.position.z-s.position.z;r.visible=a*a+o*o<5184}}}function qc(i,e=!1,t=!1){let n=Yr(i),s=new Ja,r=new ye(6643019),a=new ye,o=t?4:8;for(let c=0;c<o;c++){let l=c*2.399+n()*.8,h=.37+n()*.45,d=.25+n()*.43,u=g=>new R(Math.cos(l)*d*g**1.5,h*g,Math.sin(l)*d*g**1.5),f=[u(0),u(.35),u(.7),u(1)];s.stem(f,t?.005:.008,r);let p=t?2:3;for(let g=0;g<p;g++){let m=.4+g/(p-1)*.55,A=u(m),_=l+(g%2?1:-1)*(.55+n()*.8),y=A.clone().add(new R(Math.cos(_)*(.13+n()*.2),.06+n()*.12,Math.sin(_)*(.13+n()*.2)));t||s.stem([A,A.clone().lerp(y,.5),y],.003,r);let v=t?3:8;for(let M=0;M<v;M++){let E=A.clone().lerp(y,.18+M/v*.82),x=M*2.399+_;E.add(new R(Math.cos(x)*.048,Math.sin(x*1.7)*.025,Math.sin(x)*.048));let b=new R(Math.cos(x),.2+n()*.8,Math.sin(x));a.setHex(e?11251864:9082222).multiplyScalar(.78+n()*.47),s.leaf(E,b,t?.1:.055+n()*.035,e?.028:.018,a)}}}return s.geometry()}function sm(i,e=!1){let t=Yr(i),n=new Ja,s=new ye(8420192),r=new ye,a=e?5:11;for(let o=0;o<a;o++){let c=o*2.399,l=.12+t()*.32,h=.28+t()*.31,d=new R(0,0,0),u=new R(Math.cos(c)*l,h,Math.sin(c)*l);n.stem([d,u.clone().multiplyScalar(.55),u],.004,s);for(let f=0;f<(e?5:23);f++){let p=f*2.399+o,g=t()*2-1,m=.11+t()*.08,A=u.clone().add(new R(Math.cos(p)*m*Math.sqrt(1-g*g),g*m,Math.sin(p)*m*Math.sqrt(1-g*g)));r.setHex(10527627).multiplyScalar(.83+t()*.32),n.leaf(A,new R(Math.cos(p),.3+t()*.9,Math.sin(p)),.055+t()*.035,.025,r)}}return n.geometry()}function rm(i){let e=Yr(i),t=new Ja,n=new ye;for(let s=0;s<44;s++){let r=e()*Math.PI*2,a=.18+e()*.45,o=.11+e()*.22,c=new R(-Math.sin(r),0,Math.cos(r)).multiplyScalar(.003+e()*.0035),l=h=>new R(Math.cos(r)*o*h*h,a*h-.13*h*h,Math.sin(r)*o*h*h);n.setHex(s%5===0?7503191:10458222).multiplyScalar(.8+e()*.35);for(let h=0;h<4;h++){let d=h/4,u=(h+1)/4;t.face([l(d).sub(c),l(d).add(c),l(u).addScaledVector(c,1-u),l(u).addScaledVector(c,u-1)],n)}}return t.geometry()}function xy(i){let e=Yr(i),t=[],n=[],s=[],r=new ye;for(let o=0;o<27;o++){let c=o*2.399,l=o/27,h=.58+e()*.45,d=.35+l*.6,u=t.length/3,f=12;for(let p=0;p<=f;p++){let g=p/f,m=h*d*(.16*g+.84*g*g),A=.035+h*(1.32*g-(.5+l*.57)*g*g),_=.11*h*Math.sin(Math.PI*g)**.7;for(let y=-1;y<=1;y++)t.push(Math.cos(c)*m-Math.sin(c)*_*y,A+(y===0?.025*Math.sin(Math.PI*g):-.008*Math.sin(Math.PI*g)),Math.sin(c)*m+Math.cos(c)*_*y),r.setHex(9350044).multiplyScalar(.68+.2*Math.sin(c*1.7)+.13*(1-g)),n.push(...r.toArray());if(p<f)for(let y=0;y<2;y++){let v=u+p*3+y,M=v+3;s.push(v,M,v+1,v+1,M,M+1)}}}let a=new Ze;return a.setAttribute("position",new Be(t,3)),a.setAttribute("color",new Be(n,3)),a.setIndex(s),a.computeVertexNormals(),a}function Zn(i,e,t,n,s,r=!1){if(!s.length)return;let a=new On(t,n,s.length),o=new Ct,c=new ye;a.name=e;let l=new R(s.reduce((h,d)=>h+d[0],0)/s.length,0,s.reduce((h,d)=>h+d[1],0)/s.length);a.position.copy(l);for(let[h,[d,u,f,p=0,g=1,m=1]]of s.entries())o.position.set(d-l.x,_h(d,u)-f*(e.includes("granite")?.13:.035),u-l.z),o.rotation.set(0,p,0),o.scale.set(f,f*m,f*(.82+.23*g)),o.updateMatrix(),a.setMatrixAt(h,o.matrix),c.setRGB(g,g,g*.975),a.setColorAt(h,c);return a.receiveShadow=!0,a.castShadow=r,a.userData.desertNear=r,a.computeBoundingSphere(),i.add(a),a}async function cm(i){let e=[],t=new et;t.name="Desert living landscape",i.add(t);let n=new xn,s=new Xr,[r,a,o,...c]=await Promise.all([n.loadAsync("assets/desert/soil-color.webp"),n.loadAsync("assets/desert/soil-normal.webp"),n.loadAsync("assets/desert/soil-macro.webp"),...["namaqualand_boulder_02","namaqualand_boulder_03","namaqualand_boulder_04","sand_rocks_small_01","arid-scrub","xeric-groundcover","desert-aloe"].map(C=>s.loadAsync("assets/desert/"+C+".glb"))]),l=c.slice(0,4),h=c.slice(4);for(let C of[r,a,o])C.wrapS=C.wrapT=Yt,C.anisotropy=8;r.colorSpace=o.colorSpace=lt;let d=_y(r,a,o);for(let[C,F,I,P]of[[-240,-13.18,-240,240],[18.15,240,-240,240],[-13.18,18.15,-240,-13.18],[-13.18,10.02,14.14,240],[10.02,18.15,22.1,240]]){let L=new De(gy(C,F,I,P,2.35),d);L.name="Sculpted desert alluvium",L.receiveShadow=!0,t.add(L)}let u=Yr(489173),f=Math.PI*2,p=new ht({vertexColors:!0,roughness:.86,envMapIntensity:1.25,side:Rt});p.name="Native desert foliage",p.forceSinglePass=!0;let g=[qc(71),sm(491),qc(820),rm(421)],m=[qc(71,!1,!0),sm(491,!0),qc(820,!1,!0),rm(421)],A=Array.from({length:4},()=>[]),_=Array.from({length:4},()=>[]);for(let C=-4;C<=4;C++)for(let F=-4;F<=4;F++){let I=C*48,P=F*48;for(let L=0;L<122;L++){let z=I+(u()-.5)*48,O=P+(u()-.5)*48,G=Math.hypot(z,O);if(G>175||G<27||!Xa(z,O,.65))continue;let V=.58+.23*Math.sin(z*.13+O*.047)+.2*Math.sin(O*.17-z*.05);if(u()>V)continue;let H=u()<.19?3:u()<.39?1:u()<.5?0:2,q=H===3?.6+u()*.8:.44+u()**1.1*1.08;(G<32?A:_)[H].push([z,O,q,u()*f,.85+u()*.25,.84+u()*.28])}}for(let C=0;C<4;C++)Zn(t,"Native plant community",g[C],p,A[C]),Zn(t,"Distant native scrub",m[C],p,_[C]);let y=[[-9.7,15.6,1.5],[-5.1,17.1,1.15],[.5,15.5,1.1],[5.3,18.6,1.45],[9,16.2,.9],[-15.2,7,1.35],[-15.1,-3,1.2],[20,7,1.1],[20,-7,1.35],[-8,-17,1.2]];for(let[C,[F,I,P]]of y.entries())Zn(t,"Native bunchgrass pocket",g[3],p,[[F+.8,I+.6,P*.7,u()*f,1],[F-.6,I+.5,P*.52,u()*f,.91]],!0);let v=[[19.1,5.8,1.75],[20,7.4,2],[19,11.1,1.5],[21,13,1.65],[23,6.4,1.9],[22.6,10.9,2.1],[20.4,9.4,1.45],[21.5,7.9,1.3],[19.4,13.2,1.5],[23.2,12.6,1.7],...y.map(([C,F,I])=>[C,F,I*1.55]),[-15.2,-8,1.6],[-17,-9.2,1.95],[-13.7,-11.9,1.4],[-6,-17.5,1.8],[-3,-16.4,1.6],[1,-18.8,1.6],[6,-18.6,1.7],[18.9,-5.2,1.8],[20.8,-10.1,1.5],[-15.1,11.5,1.65]],M=Yr(734431),E=[];for(let[C,F,I]of[[20.9,1.8,3.9],[24.6,13.9,5.8],[29.1,6.5,6.6],[34.8,-2.6,7.3],[42,12.5,8.2],[-19,6,4.6],[-4,20,5.2]])for(let P=0;P<18;P++){let L=M()*f,z=I*Math.sqrt(M()),O=C+Math.cos(L)*z,G=F+Math.sin(L)*z*.73;Xa(O,G,.6)&&(E.push([O,G,.65+M()*.94]),P%6===0&&v.push([O+.35,G-.4,.56+M()*.78]))}let x=E.filter((C,F)=>F%3===0).map(([C,F,I],P)=>[C,F,I*.69,P*2.399,.88+P%5*.047,.78+P%3*.09]);Zn(t,"Silver-leaf wash shrubs",m[1],p,x,!0);let b=E.filter((C,F)=>F%2===0).map(([C,F,I],P)=>[C-.29,F+.14,I*.53,P*1.82,.88+P%4*.05,.81]);Zn(t,"Dry creek bunchgrass",g[3],p,b,!0);let w=[.316,.306,.267,.183,.153,.112,.108,.059],S=["arid-scrub.glb","xeric-groundcover.glb","desert-aloe.glb"];for(let[C,F]of h.entries()){F.scene.updateMatrixWorld(!0);let I=F.scene.children;for(let[P,L]of I.entries()){let z=[];if(C===0)for(let[O,[G,V,H]]of v.entries())O%I.length===P&&z.push([G,V,H,u()*f,.93+u()*.12,.88+u()*.21]);else if(C===1){let O=[...E,[18.7,8.5,.92],[19,10,1.2],[21.9,6.1,1.15],[21,11.8,1.1],[22.4,13.5,.8],[19.3,4.5,.9],[20.6,5.2,.7],[20.6,14.6,.85],[-13.9,-9.4,1],[-6,-16.3,.9],[1.3,15.4,.9]];for(let[G,[V,H,q]]of O.entries())for(let Z=0;Z<4;Z++){if((G+Z*3)%I.length!==P)continue;let W=G*2.399+Z*1.54,j=.16*Z;z.push([V+Math.cos(W)*j,H+Math.sin(W)*j,w[P]*(.95+.46*q),W,.93+Z%3*.045,1])}}else P===0&&z.push([22.5,8.8,1.15,1.7,1,1],[19.5,14.8,.76,3,.98,1]);L.traverse(O=>{if(!O.isMesh||!z.length)return;let G=O.geometry.clone().applyMatrix4(O.matrixWorld),V=O.material;V.userData.desertAsset=S[C],V.userData.desertMaterial=V.name,V.roughness=.96,V.envMapIntensity=1.3,V.color.set(15000788),V.side=Rt,V.forceSinglePass=!0,(V.alphaTest>0||V.transparent)&&(V.alphaTest=.42,V.transparent=!1,V.depthWrite=!0,V.alphaToCoverage=!0);for(let q of[V.map,V.normalMap,V.roughnessMap,V.aoMap])q&&(q.anisotropy=8);V.normalScale?.set(.48,.48);let H=Zn(t,C===0?"Scanned xeric scrub community":C===1?"Scanned succulent groundcover":"Sculptural aloe garden specimen",G,V,z,!0);H.userData.scanPlant=!0})}}Zn(t,"Blue agave garden rosettes",xy(294),p,[[19.2,9.3,.95,.5,1],[22.5,5.2,1.1,2,1],[20.1,14.5,.9,1,.93],[19.1,3.3,.75,1.8,.96]],!0);let T=[];for(let[C,F,I]of v.slice(0,10))for(let P=0;P<2;P++)T.push([C+Math.cos(P*2.4)*.65,F+Math.sin(P*2.4)*.65,I*(.32+u()*.16),u()*f,.92+u()*.1]);Zn(t,"East terrace native bunchgrass",g[3],p,T,!0);for(let[C,F]of l.entries()){let I=[];F.scene.updateMatrixWorld(!0),F.scene.traverse(P=>{P.isMesh&&I.push(P)});for(let P of I){let L=P.geometry.clone().applyMatrix4(P.matrixWorld),z=P.material;z.userData.desertAsset=["namaqualand_boulder_02.glb","namaqualand_boulder_03.glb","namaqualand_boulder_04.glb","sand_rocks_small_01.glb"][C],z.userData.desertMaterial=z.name,z.name="Scanned weathered granite",z.roughness=.96,z.color.set(14735302),z.normalScale?.set(.55,.55),z.envMapIntensity=1.55,z.onBeforeCompile=H=>{H.fragmentShader=H.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
          float value=dot(diffuseColor.rgb,vec3(.2126,.7152,.0722));
          diffuseColor.rgb=mix(vec3(1.08,1.025,.94)*value,diffuseColor.rgb,.39);`).replace("#include <fog_fragment>",`#include <fog_fragment>
            #ifdef USE_FOG
              float dryAir=.45*smoothstep(28.,110.,vFogDepth);
              gl_FragColor.rgb=mix(gl_FragColor.rgb,.54*fogColor,dryAir);
            #endif`)},z.customProgramCacheKey=()=>"granite-mineral-palette";for(let H of[z.map,z.normalMap,z.roughnessMap,z.aoMap])H&&(H.anisotropy=4);let O=[],G=[];for(let H=0;H<(C===3?25:38);H++){let q=u()*f,Z=19+u()**1.6*104,W=Math.cos(q)*Z,j=Math.sin(q)*Z;if(!Xa(W,j,1.3))continue;let re=C===3?1.5+u()*2.2:.38+u()**2*2.15;(Z<63?O:G).push([W,j,re,u()*f,.9+u()*.19,.86+u()*.17])}if(C<3)for(let H=C;H<y.length;H+=3){let[q,Z,W]=y[H];O.push([q-.7,Z+.75,W*.95,u()*f,.97,.9])}C===1&&O.push([19.1,8.1,.9,.5,1,.78],[21.2,11,1.2,2.2,1,.82],[21.6,5.1,.7,.7,1,.85]);let V=Zn(t,"Embedded scanned granite",L,z,O,!0);if(V&&C<3){L.computeBoundingBox(),V.updateWorldMatrix(!0,!1);let H=new ge,q=new je,Z=new R,W=new R;for(let j=0;j<V.count;j++)V.getMatrixAt(j,H),H.premultiply(V.matrixWorld),q.copy(L.boundingBox).applyMatrix4(H),q.getCenter(Z),q.getSize(W),!(W.y<.31||Math.abs(Z.x)>26||Math.abs(Z.z)>26)&&e.push([Z.x-W.x*.34,-Z.z-W.z*.34,Z.x+W.x*.34,-Z.z+W.z*.34])}if(Zn(t,"Alluvial scattered granite",L,z,G),C===3){let H=E.filter((q,Z)=>Z%3===0).map(([q,Z,W],j)=>[q+.27,Z-.24,W*(.35+j%4*.12),j*2.399,.98,.72]);Zn(t,"Low granite wash deposits",L,z,H,!0)}}}return e}var my,Kc,Yr,Xa,am,Ja,lm=it(()=>{gt();ih();im();my=(i,e,t)=>Math.max(e,Math.min(t,i)),Kc=(i,e,t)=>{let n=my((t-i)/(e-i),0,1);return n*n*(3-2*n)},Yr=i=>{let e=i;return()=>(e=Math.imul(1664525,e)+1013904223>>>0)/4294967296},Xa=(i,e,t=0)=>!(i>-13.18-t&&i<18.15+t&&e>-13.18-t&&e<14.14+t)&&!(i>10.02-t&&i<18.05+t&&e>=14-t&&e<22.1+t);am=(i,e)=>Xa(i,e)?_h(i,e):0;Ja=class{constructor(){this.p=[],this.c=[],this.ix=[]}face(e,t){let n=this.p.length/3;for(let s of e)this.p.push(...s.toArray()),this.c.push(...t.toArray());for(let s=1;s<e.length-1;s++)this.ix.push(n,n+s,n+s+1)}stem(e,t,n,s=4){for(let r=0;r<e.length-1;r++){let a=e[r],o=e[r+1],c=o.clone().sub(a).normalize(),l=new R(c.z,0,-c.x).normalize(),h=new R().crossVectors(c,l).normalize(),d=t*(1-r/e.length*.8),u=t*(1-(r+1)/e.length*.8);for(let f=0;f<s;f++){let p=(A,_,y)=>A.clone().addScaledVector(l,Math.cos(y)*_).addScaledVector(h,Math.sin(y)*_),g=f*Math.PI*2/s,m=g+Math.PI*2/s;this.face([p(a,d,g),p(a,d,m),p(o,u,m),p(o,u,g)],n)}}}leaf(e,t,n,s,r){let a=t.clone().normalize(),o=new R(-a.z,.08,a.x).normalize(),c=e.clone().addScaledVector(a,n*.5).add(new R(0,s*.16,0)),l=[];for(let h=0;h<8;h++){let d=h*Math.PI/4;l.push(e.clone().addScaledVector(a,n*(.5+.5*Math.cos(d))).addScaledVector(o,s*Math.sin(d)).add(new R(0,-s*.12*Math.sin(d)**2,0)))}for(let h=0;h<8;h++)this.face([l[h],l[(h+1)%8],c],r)}geometry(){let e=new Ze;return e.setAttribute("position",new Be(this.p,3)),e.setAttribute("color",new Be(this.c,3)),e.setIndex(this.ix),e.computeVertexNormals(),e.computeBoundingSphere(),e}}});function um(i){let e=new R(2.78,0,-1.3),t=new ge().makeTranslation(e.x+.3,0,e.z).multiply(new ge().makeRotationY(-Math.PI/2)).multiply(new ge().makeTranslation(-e.x,0,-e.z));i.updateMatrixWorld(!0),i.traverse(n=>{!n.isMesh||!n.material.name.toLowerCase().includes("hearth flame")||n.applyMatrix4(n.parent.matrixWorld.clone().invert().multiply(t).multiply(n.parent.matrixWorld))}),i.updateMatrixWorld(!0)}function hm({scene:i,group:e,details:t,light:n}){let s=new R(-8.3,0,-3.44),r=new ge().makeRotationY(Math.PI/2),a=new ge().makeTranslation(...s.toArray()).multiply(r).multiply(new ge().makeTranslation(-s.x,0,-s.z));t.traverse(c=>{if(!c.isMesh)return;let l=c.material.name.toLowerCase(),h=l.includes("pit-art-book")||l.includes("recipe-cover")?.0028:l.includes("den-journal")?.0069:0;h&&(c.position.y+=h),l.includes("fridge-list")&&(c.parent.updateWorldMatrix(!0,!1),c.applyMatrix4(c.parent.matrixWorld.clone().invert().multiply(a).multiply(c.parent.matrixWorld)))});let o=n.textures;e.traverse(c=>{if(!c.isMesh)return;let l=c.material;if(c.castShadow=!0,c.receiveShadow=!0,l.name==="Cut ledge stone"||l.name==="Coping honed limestone"){let h=l.name==="Cut ledge stone",d=o[h?"ledge":"paving"];[l.map,l.normalMap,l.roughnessMap]=d;for(let u of["map","normalMap","roughnessMap"]){let f=l[u].clone();f.repeat.y=-1,l[u]=f}l.normalScale.setScalar(h?.54:.2),l.roughness=h?.98:.79,h||l.color.setRGB(1.18,1.15,1.06)}l.name==="Warm ivory kitchen plaster"&&(l.map=o.plaster[0],l.normalMap=o.plaster[1],l.normalScale.setScalar(.095)),n.patch(l,{plainMap:!0})}),i.add(e)}var dm=it(()=>{gt()});function vy(){let i=document.createElement("canvas");i.width=256,i.height=512;let e=i.getContext("2d"),t=e.createLinearGradient(0,0,256,0);for(let[r,a]of[[0,"#325b3c"],[.42,"#426f49"],[.5,"#527b4e"],[.58,"#416c43"],[1,"#2c5638"]])t.addColorStop(r,a);e.fillStyle=t,e.fillRect(0,0,256,512);for(let r=1;r<28;r++)for(let a of[-1,1]){let o=r*17.7;e.beginPath(),e.moveTo(128,o),e.bezierCurveTo(128+a*24,o+7,128+a*85,o+29,128+a*126,o+59),e.strokeStyle=r%3?"rgba(158,181,108,.13)":"rgba(159,182,109,.21)",e.lineWidth=.8,e.stroke()}e.beginPath(),e.moveTo(128,0),e.lineTo(128,512),e.strokeStyle="rgba(154,174,106,.65)",e.lineWidth=1.6,e.stroke();let n=1906;for(let r=0;r<9e3;r++){let a=()=>(n=Math.imul(n,1664525)+1013904223>>>0)/4294967296;e.fillStyle=`rgba(210,210,153,${a()*.035})`,e.fillRect(a()*256,a()*512,1,1)}let s=new gs(i);return s.colorSpace=lt,s.anisotropy=4,s}function yy(i,e,t,n){let s=[],r=[],a=[],o=n?30:22,c=8;for(let h=0;h<=o;h++){let d=h/o,u=Math.sin(Math.PI*d)**(n?.53:.7);for(let f=0;f<=c;f++){let p=f/c*2-1,g=e*u*p;n&&Math.abs(p)>.8&&(g*=1-.055*Math.sin(d*47+t*9)**12);let m=t*(d-.2);if(s.push(g*Math.cos(m),i*d,i*(.12*Math.sin(Math.PI*d)-.26*d*d)+g*Math.sin(m)+e*.2*p*p*u),r.push(f/c,d),f<c&&h<o){let A=h*(c+1)+f,_=A+c+1;a.push(A,A+1,_,A+1,_+1,_)}}}let l=new Ze;return l.setAttribute("position",new Be(s,3)),l.setAttribute("uv",new Be(r,2)),l.setIndex(a),l.computeVertexNormals(),l}function My(i,e,t,n){let s=t.clone().normalize(),r=new R().crossVectors(s,new R(0,1,0)).normalize(),a=new R().crossVectors(r,s).normalize(),o=new ge().makeBasis(r,s,a);return o.multiply(new ge().makeRotationY(n)),o.setPosition(e),i.applyMatrix4(o),i}function fm({scene:i,light:e}){let t=vy(),n=new Ht({map:t,color:16777215,roughness:.43,side:Rt,clearcoat:.18,clearcoatRoughness:.45});n.name="Living waxy botanical blades",n.forceSinglePass=!0,e.patch(n,{plainMap:!0});let s=new ht({color:5793354,roughness:.72});e.patch(s,{plainMap:!0});let r=new et;r.name="Curved botanical houseplants";for(let a of by){let o=new et;o.name=a.name,o.position.set(...a.position);let c=[],l=[],h=a.size,d=a.bird?9:13;for(let u=0;u<d;u++){let f=u*2.39996+.35,p=a.bird?h*(.39+.105*(u%5)):h*(.17+u*.065),g=new R(Math.cos(f)*h*.055,p,Math.sin(f)*h*.055),m=new R(Math.cos(f),a.bird?.55+.17*(u%3):.15+.18*(u%3),Math.sin(f));a.bird&&m.x<-.35&&(m.y+=.85);let A=h*(a.bird?.46+.065*(u%3):.27+.025*(u%3)),_=A*(a.bird?.19:.29);c.push(My(yy(A,_,.35*Math.sin(u*3.1),a.bird),g,m,.12*Math.sin(u)));let y=a.bird?new R(0,-.015,0):new R(0,p-.025,0),v=new qi(y,y.clone().lerp(g,.55).add(new R(h*.025,.045,0)),g);l.push(new si(v,10,h*(a.bird?.007:.004),6,!1))}if(!a.bird){let u=new qi(new R(0,-.01,0),new R(-h*.035,h*.53,.02),new R(.015,h*1.01,-.015));l.push(new si(u,18,h*.012,7,!1))}for(let[u,f,p]of[[c,n,"curved veined leaves"],[l,s,"rounded living petioles"]]){let g=en(u);for(let A of u)A.dispose();let m=new De(g,f);m.name=a.name+" "+p,m.castShadow=!0,m.receiveShadow=!0,o.add(m)}r.add(o)}return i.add(r),r}var by,pm=it(()=>{gt();jn();by=[{name:"Living Strelitzia nicolai",position:[3.48,.464,-.56],size:1.6,bird:!0},{name:"Primary Ficus elastica",position:[-4.98,.267,-10.46],size:.92},{name:"Den Ficus elastica",position:[8.5,.348,-10.35],size:1.2}]});function Am(){let i=nt.shadowmap_pars_fragment,e=i.indexOf("// Hardware PCF with LinearFilter"),t=i.indexOf(") * 0.2;",e);if(e<0||t<0)return;let n=`
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
    shadow/=144.;`;nt.shadowmap_pars_fragment=i.slice(0,e)+n+i.slice(t+8)}function mm(i,e,t,n,s,r=[]){let a=i.getContext(),o=i.extensions.has("EXT_color_buffer_float")||i.extensions.has("EXT_color_buffer_half_float"),c=a.getInternalformatParameter(a.RENDERBUFFER,o?a.RGBA16F:a.RGBA8,a.SAMPLES),l=Math.max(0,...Array.from(c).filter(N=>N<=4)),h={type:o?yt:Ke,depthBuffer:!1,generateMipmaps:!1},d=new fe,u=new fe,f=Ya;function p(){i.getDrawingBufferSize(d);let N=Math.min(1,Math.sqrt(f/(d.x*d.y)));u.set(Math.max(1,Math.round(d.x*N)),Math.max(1,Math.round(d.y*N)))}p();let g=u.x,m=u.y,A=new Ot(g,m,{...h,depthBuffer:!0,samples:l});A.depthTexture=new Bn(g,m,bn),A.depthTexture.minFilter=A.depthTexture.magFilter=Tt;let _=new Ot(Math.ceil(g/2),Math.ceil(m/2),{...h,minFilter:Tt,magFilter:Tt}),y=[new Ot(g,m,h),new Ot(g,m,h)],v=new Ze;v.setAttribute("position",new Be([-1,-1,0,3,-1,0,-1,3,0],3));let M=new vs,E=new ps,x=new De(v);x.frustumCulled=!1,E.add(x);let b={value:new fe(1/g,1/m)},w={value:new fe(t.near,t.far)},S={value:new fe},T={value:new fe},C=(N,B,Y=!1)=>new Lt({vertexShader:Ey,fragmentShader:N,uniforms:B,defines:o?{}:{LIMITED_DEPTH:1},depthTest:!1,depthWrite:!1,blending:wi,toneMapped:Y}),F=C(Sy,{sceneDepth:{value:A.depthTexture},pixel:b,focalLength:S,projectionOffset:T,clipRange:w}),I=new ge,P=new ge,L=new ge,z=new ge,O=new ge,G=Array.from({length:12},()=>new st),V=G.map(()=>new fe),H=new R,q=new kn,Z={currentFrame:{value:A.texture},sceneDepth:{value:A.depthTexture},contactMap:{value:_.texture},history:{value:null},previousClipFromCurrent:{value:I},pixel:b,clipRange:w,focalLength:S,projectionOffset:T,aoDimensions:{value:new fe(_.width,_.height)},worldFromView:{value:t.matrixWorld},motionRect:{value:G},motionDepth:{value:V},motionCount:{value:0},poolMin:{value:n.min.clone().addScalar(-.022)},poolMax:{value:n.max.clone().addScalar(.022)},historyReady:{value:0},stationarySamples:{value:0},hold:{value:0}},W=C(wy,Z),j=C(Iy,{picture:{value:null},pixel:b,clipRange:w,focalLength:S,projectionOffset:T,worldFromView:{value:t.matrixWorld},daylight:{value:1},immersed:{value:0},reconstructAmount:{value:1-u.x/d.x}},!0),re=C(Cy,{photograph:{value:null}}),le=new Ot(1,1,{depthBuffer:!1,type:Ke,minFilter:Tt,magFilter:Tt}),ae=new Uint8Array(4),me=new ge,Fe=1,xe=-1e3,Ie=!1,qe="";function He(N,B,Y){let oe=performance.now();Ie||oe-xe<320||qe===Y&&B.elements.every((ie,he)=>Math.abs(ie-me.elements[he])<.006)||(xe=oe,Ie=!0,qe=Y,me.copy(B),re.uniforms.photograph.value=N,Me(re,le),i.readRenderTargetPixelsAsync(le,0,0,1,1,ae).then(()=>{Fe=2**(ae[0]*9/255-3)}).catch(()=>{}).finally(()=>{Ie=!1}))}let mt=[[0,0],[-.375,.125],[.375,-.125],[-.125,-.375],[.125,.375],[-.375,-.375],[.375,.375],[.125,-.125],[-.125,.125]],dt=0,It=!1,rt=0,Gt="",xt=-1,Se=!1,Qe=-1/0;function Ue(){if(p(),j.uniforms.reconstructAmount.value=1-u.x/d.x,!(A.width===u.x&&A.height===u.y)){A.setSize(u.x,u.y);for(let N of y)N.setSize(u.x,u.y);_.setSize(Math.ceil(u.x/2),Math.ceil(u.y/2)),b.value.set(1/u.x,1/u.y),Z.aoDimensions.value.set(_.width,_.height),It=!1,rt=0}}let Q=0,Ee=0,Ve=0,Xe=0,ce=0;function bt(N,B){if(!B||rt>1||N<=0||N>.5||document.hidden){Q=Ee=Ve=Xe=ce=0;return}if(Q++,Xe+=Math.min(N,.1),N>.021&&Ee++,N<.018&&Ve++,Xe<1.25||Q<18)return;let Y=d.x*d.y,oe=Math.min(Ya,Y),ie=Math.min(oe,Math.max(36e4,.55*oe)),he=Math.min(f,Y);Ee>Q*.37&&he>ie*1.02?(f=Math.max(ie,he*.8),Ue(),ce=0):Ve>Q*.94&&Ee<Q*.03?++ce>=8&&he<oe*.98&&(f=Math.min(Ya,he*1.13),Ue(),ce=0):ce=0,Q=Ee=Ve=Xe=0}function Me(N,B){x.material=N,i.setRenderTarget(B),i.render(E,M)}function Ge(N,B,Y=0){j.uniforms.immersed.value=Y,j.uniforms.daylight.value=1-B,t.updateMatrixWorld(),L.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse);let oe=It&&N===Gt&&L.elements.every((U,J)=>Math.abs(U-z.elements[J])<2e-7);rt=oe?Math.min(mt.length,rt+1):0,z.copy(L),O.copy(t.projectionMatrix);let ie=oe&&rt>=mt.length,he=performance.now();q.setFromProjectionMatrix(L);let _e=[s];for(let U of r){let J=U();J&&_e.push(J)}if(ie&&Se&&xt===i.toneMappingExposure&&(!q.intersectsBox(n)&&!_e.some(U=>q.intersectsBox(U))||he-Qe<1e3/30-1))return;Qe=he,Se=ie,xt=i.toneMappingExposure;let se=ie?mt[0]:mt[rt];t.projectionMatrix.elements[8]+=2*se[0]/u.x,t.projectionMatrix.elements[9]+=2*se[1]/u.y,t.projectionMatrixInverse.copy(t.projectionMatrix).invert(),L.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),I.copy(L).invert().premultiply(P);let k=t.projectionMatrix.elements;S.value.set(k[0],k[5]),T.value.set(k[8],k[9]);let X=0;for(let U of _e){if(!q.intersectsBox(U)||X===G.length)continue;let J=G[X].set(2,2,-1,-1),te=V[X].set(1e6,0),pe=!1;for(let de=0;de<8;de++){if(H.set(de&1?U.max.x:U.min.x,de&2?U.max.y:U.min.y,de&4?U.max.z:U.min.z),H.applyMatrix4(t.matrixWorldInverse),H.z>-t.near){pe=!0;continue}te.x=Math.min(te.x,-H.z-.07),te.y=Math.max(te.y,-H.z+.85),H.applyMatrix4(t.projectionMatrix);let ue=H.x*.5+.5,Re=H.y*.5+.5;J.x=Math.min(J.x,ue-.003),J.z=Math.max(J.z,ue+.003),J.y=Math.min(J.y,Re-.003),J.w=Math.max(J.w,Re+.003)}pe&&(J.set(0,0,1,1),te.x=0),X++}Z.motionCount.value=X,Z.historyReady.value=Number(It&&Gt===N),Z.stationarySamples.value=ie?0:rt,Z.hold.value=Number(ie),Z.history.value=y[1-dt].texture,i.setRenderTarget(A),i.render(e,t),Me(F,_),Me(W,y[dt]),He(y[dt].texture,z,N),j.uniforms.picture.value=y[dt].texture,Me(j,null),t.projectionMatrix.copy(O),t.projectionMatrixInverse.copy(O).invert(),dt=1-dt,P.copy(L),Gt=N,It=!0}return{render:Ge,resize:Ue,pace:bt,shadingSize:()=>u.toArray(),exposure:()=>Fe}}var Ya,Ey,xh,Sy,wy,Cy,Iy,gm=it(()=>{gt();Ya=1920*1080,Ey=`
  varying vec2 uvScreen;
  void main() {
    uvScreen = position.xy * .5 + .5;
    gl_Position = vec4(position.xy, 0., 1.);
  }`,xh=`
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
  }`,Sy=`
  varying vec2 uvScreen;
  uniform sampler2D sceneDepth;
  uniform vec2 pixel, focalLength, projectionOffset;
  ${xh}
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
  }`,wy=`
  varying vec2 uvScreen;
  uniform sampler2D currentFrame,sceneDepth,contactMap,history;
  uniform mat4 previousClipFromCurrent;
  uniform vec2 pixel,aoDimensions,projectionOffset,focalLength;
  uniform mat4 worldFromView;
  uniform vec4 motionRect[12];uniform vec2 motionDepth[12];uniform int motionCount;
  uniform vec3 poolMin,poolMax;
  uniform float historyReady,stationarySamples,hold;
  ${xh}
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
  }`,Cy=`
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
  }`,Iy=`
  varying vec2 uvScreen;
  uniform sampler2D picture;
  uniform vec2 focalLength,projectionOffset;
  uniform mat4 worldFromView;
  uniform float daylight,reconstructAmount,immersed;
  uniform vec2 pixel;
  ${xh}
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
  }`});var Dy=Mm(()=>{gt();ih();$p();eA();nA();fh();aA();pA();mA();_A();bA();yA();wA();IA();RA();DA();NA();OA();GA();zA();KA();XA();ZA();tm();lm();dm();pm();gm();var Ty=document.querySelector("#view"),Ry=document.querySelector("#load-status"),bh=(i,e,t)=>Math.min(t,Math.max(e,i)),Xc=async i=>{let e=await fetch("assets/"+i);if(!e.ok)throw new Error(i+" "+e.status);return e.json()};async function By(){let i=new Fc({canvas:Ty,antialias:!1,alpha:!0,powerPreference:"high-performance",stencil:!1});i.setClearAlpha(1),i.getContext().disable(i.getContext().DITHER),Am(),i.info.autoReset=!1;function e(){let Q=Math.min(1.5,window.devicePixelRatio||1,Math.sqrt(Ya/(innerWidth*innerHeight)));i.setDrawingBufferSize(innerWidth,innerHeight,Q)}e(),i.outputColorSpace=lt,i.toneMapping=Oa,i.shadowMap.enabled=!0,i.shadowMap.type=Ss,i.shadowMap.autoUpdate=!1;let t=new ps;t.background=new ye(12560013),t.fog=new ma(13351330,.0025);let n=new Jt(58,innerWidth/innerHeight,.105,805),s=new Wr(i);s.compileEquirectangularShader();let r=new Fi().setTranscoderPath("assets/basis/").detectSupport(i);r.setWorkerLimit(2);let a=new Xr().setMeshoptDecoder(tA).setKTX2Loader(r),o=new Gc().loadAsync("assets/range/evening.hdr"),[c,l,h,d,u,f,p,g,m]=await Promise.all([a.loadAsync("assets/house.glb"),Xc("irradiance.json"),Xc("surfaces/manifest.json"),Xc("solids.json"),o,o.then(Q=>rA(t,Q)),a.loadAsync("assets/details.glb"),cm(t),a.loadAsync("assets/architectural-finishes.glb")]);u.mapping=Tr;let A=s.fromEquirectangular(u);t.environment=A.texture;let _=await iA(i,t,l,h.surfaces,r);t.add(c.scene),t.updateMatrixWorld();let y=[],v=[],M;c.scene.traverse(Q=>{if(Q.userData.interaction&&y.push(Q),!Q.isMesh)return;let Ee=Q.material.name;if(Ee==="water"){M=Q;return}if(Ee==="range"&&(Q.scale.y*=.11,Q.position.y=Q.position.y*.11-1.25),Ee==="mirror"){Q.visible=!1;return}Q.material=_.material(Ee),(Ee==="glass"||Ee==="car-glass")&&v.push(Q),Q.castShadow=Ee!=="car-glass"&&Ee!=="glass"&&Ee!=="range"&&Ee!=="gravel",Q.receiveShadow=Ee!=="glass"});let{scene:E}=p;um(E);let x=[],b=new je;E.updateWorldMatrix(!0,!0),E.traverse(Q=>{if(Q.isMesh){Q.castShadow=!0,Q.receiveShadow=!0;for(let Ee of Array.isArray(Q.material)?Q.material:[Q.material])Ee.userData.houseLight||(Ee.userData.houseLight=!0,_.patch(Ee,{plainMap:!0}),Ee.name.toLowerCase().includes("hearth flame")&&(b.expandByObject(Q),Q.castShadow=!1,Ee.depthWrite=!1,x.push(Ee)))}}),t.add(E),qA({scene:t,light:_});let w=kA(c.scene,y),S=QA(),T=[],C=0,F=null,I=null;function P({shadows:Q=!1,reflections:Ee=!0}={}){C++,Q&&(i.shadowMap.needsUpdate=!0),Ee&&F?.invalidate()}let L=w.register,z=Q=>T.push(Q);AA(c.scene,v);let[,O,G]=await Promise.all([WA({scene:t,core:c.scene,loader:a,light:_}),BA({scene:t,light:_,register:L,loader:a,windows:v,dirty:P,visitor:()=>I?.mode==="walk"&&!I.inCar?n.position:null,seatedDriver:()=>I?.seated==="driver"}),TA({scene:t,light:_,register:L,dirty:P,animateRegion:z}),xA(t,_)]);hm({scene:t,group:m.scene,details:E,light:_});let V=await CA({scene:t,loader:a,light:_,register:L,dirty:P,audio:S}),H=await vA({scene:t,core:c.scene,loader:a,light:_,register:L,dirty:P,animateRegion:z}),q=SA({scene:t,light:_,register:L,dirty:P,audio:S,animateRegion:z});fm({scene:t,light:_});let Z=new Es(16765856,3);Z.target.position.set(0,0,-1),Object.assign(Z.shadow.camera,{left:-23,right:23,top:19,bottom:-20,near:1,far:100}),Z.shadow.mapSize.set(3072,3072),Z.shadow.bias=-22e-5,Z.shadow.normalBias=.018,Z.castShadow=!0,t.add(Z,Z.target);let W=em(t,await Xc("practicals.json"));_.listenPractical(W.setPower);let j=om(t);f.connectGround();let re={time:.4,night:0};function le(Q){Q=bh(Q,0,1),Q!==re.time&&F.invalidate(),re.time=Q;let Ee=re.night=Pi(.48,.97,Q);_.mixBakes(Ee),f(Q),W(Ee);let Ve=Je.lerp(.43,1.23,Pi(0,.77,Q)),Xe=Je.lerp(.51,.058,Pi(0,.6,Q));Z.position.set(-Math.sin(Ve)*46,Math.tan(Xe)*46,Math.cos(Ve)*46-1),Z.color.setRGB(1,.83,.64).lerp(new ye(1,.424,.112),Pi(.08,.4,Q)).lerp(new ye(10927359),Ee),Z.intensity=Je.lerp(1.94,.988,Pi(.04,.4,Q))*(1-Pi(.54,.76,Q))+.07*Ee,Q>.8&&Z.position.set(-27,32,22),t.environmentIntensity=Je.lerp(.87,.024,Ee),t.environmentRotation.y=-.285*Math.PI*2,t.fog.color.set(13352104).lerp(new ye(2503496),Ee),t.fog.density=Je.lerp(.0023,.0029,Ee),i.toneMappingExposure=Je.lerp(1.05,1.18,Ee),i.shadowMap.needsUpdate=!0}let ae=jA({renderer:i,scene:t,camera:n,waterMesh:M}),me=LA({scene:t,light:_,register:L,dirty:P,audio:S,loader:a,animateRegion:z});gA({scene:t,light:_});let Fe=UA({scene:t,light:_,water:ae,register:L,dirty:P,audio:S,fireMaterials:x,detail:E});F=$A(i,t,v,_.setRoomReflection);let xe=mm(i,t,n,new je().setFromObject(M),b.union(Fe.fireBounds),T);I=fA({camera:n,renderer:i,scene:t,solidRects:[...d,...g],yardFloor:am,doors:y,setTime:le,interactions:w,light:_,audio:S,dirty:P,car:O,water:ae,state:re}),le(.4);let Ie=performance.now(),qe="",He=0,mt=0,dt=new URLSearchParams(location.search).has("inspect"),It=[],rt=Ie,Gt=-1e3,xt=!1;function Se(Q){let Ee=performance.now(),Ve=(Ee-rt)/1e3;rt=Ee;let Xe=Math.max(0,(Q-Ie)/1e3);if(Ie=Q,document.hidden)return;dt&&Xe>0&&Xe<.25&&(It.push(Xe*1e3),It.length>720&&It.shift());let ce=Math.min(Xe,.06),bt=me.update(ce,re);bt&&C++;let Me=G.update(ce),Ge=H.update(ce),N=q.update(ce),B=V.update(ce);B&&C++,Fe.update(ce,re)&&C++;let Y=O.update(ce)||bt||Me||B||Ge||N;(Y&&Q-Gt>90||!Y&&xt)&&(i.shadowMap.needsUpdate=!0,Gt=Q,Y||F.invalidate()),xt=Y,I.update(ce),_.syncEmitters();let oe=Math.abs(n.position.x)<9.05&&n.position.z<0&&n.position.z>-11.05,ie=xe.exposure(),he=oe?bh(ie,1.35,Je.lerp(28,3.65,re.night)):bh(ie,Je.lerp(1.075,1.15,re.night),Je.lerp(1.45,1.62,re.night));i.toneMappingExposure=Math.abs(i.toneMappingExposure-he)<.002?he:Je.damp(i.toneMappingExposure,he,3.8,Math.min(Xe,.06));let _e=I.mode==="menu"?50:61;Math.abs(n.fov-_e)>.08&&(n.fov=Je.damp(n.fov,_e,6,Math.min(Xe,.06)),n.updateProjectionMatrix()),xe.pace(Ve,I.mode==="walk"||I.mode==="tour"),ae?.update(Math.min(Xe,.06),re.time);let se=y.map(k=>(k.position.x*16|0)+"/"+(k.quaternion.y*14|0)).join(",");se!==qe&&(qe=se,i.shadowMap.needsUpdate=!0,F.invalidate()),j(n),i.info.reset(),F.update(re.night,Q*.001,n.position)&&mt++,xe.render(C+"|"+re.time+"|"+mt+"|"+y.map(k=>k.position.x.toFixed(4)+"/"+k.quaternion.y.toFixed(4)).join(","),re.night,I.immersion()),He++}i.setAnimationLoop(Se);let Qe=innerWidth,Ue=innerHeight;addEventListener("resize",()=>{innerWidth===Qe&&innerHeight===Ue||(Qe=innerWidth,Ue=innerHeight,e(),n.aspect=Qe/Ue,n.updateProjectionMatrix(),xe.resize(),ae?.repaint())}),dt&&(window.residence={renderer:i,scene:t,camera:n,nav:I,doors:y,interactions:w,household:me,hearth:Fe,car:O,journal:G,fridge:V,nightstand:H,top:q,water:ae,setTime:le,state:re,frameTimes:It,shadingSize:xe.shadingSize,latest:()=>({frames:He,mode:I.mode,geo:i.info.render,position:n.position.toArray()})}),document.body.classList.add("ready"),window.dispatchEvent(new Event("residenceready"))}By().catch(i=>{console.error(i),Ry.textContent="The scene could not load. Reload to try again. "+i.message})});export default Dy();
