import{c as k,B as F,D as R,r as _,E as K,o as V,F as X,G as x,H as Y}from"./index-Dm7yhqOC.js";/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=k("CalendarIcon",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=k("ClipboardListIcon",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=k("EyeIcon",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=k("ShieldCheckIcon",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/*!
 * qrcode.vue v3.6.0
 * A Vue.js component to generate QRCode. Both support Vue 2 and Vue 3
 * © 2017-PRESENT @scopewu(https://github.com/scopewu)
 * MIT License.
 */var P=function(){return P=Object.assign||function(f){for(var l,u=1,h=arguments.length;u<h;u++){l=arguments[u];for(var c in l)Object.prototype.hasOwnProperty.call(l,c)&&(f[c]=l[c])}return f},P.apply(this,arguments)};var b;(function(o){var f=function(){function a(e,t,r,n){if(this.version=e,this.errorCorrectionLevel=t,this.modules=[],this.isFunction=[],e<a.MIN_VERSION||e>a.MAX_VERSION)throw new RangeError("Version value out of range");if(n<-1||n>7)throw new RangeError("Mask value out of range");this.size=e*4+17;for(var i=[],s=0;s<this.size;s++)i.push(!1);for(var s=0;s<this.size;s++)this.modules.push(i.slice()),this.isFunction.push(i.slice());this.drawFunctionPatterns();var d=this.addEccAndInterleave(r);if(this.drawCodewords(d),n==-1)for(var g=1e9,s=0;s<8;s++){this.applyMask(s),this.drawFormatBits(s);var M=this.getPenaltyScore();M<g&&(n=s,g=M),this.applyMask(s)}h(0<=n&&n<=7),this.mask=n,this.applyMask(n),this.drawFormatBits(n),this.isFunction=[]}return a.encodeText=function(e,t){var r=o.QrSegment.makeSegments(e);return a.encodeSegments(r,t)},a.encodeBinary=function(e,t){var r=o.QrSegment.makeBytes(e);return a.encodeSegments([r],t)},a.encodeSegments=function(e,t,r,n,i,s){if(r===void 0&&(r=1),n===void 0&&(n=40),i===void 0&&(i=-1),s===void 0&&(s=!0),!(a.MIN_VERSION<=r&&r<=n&&n<=a.MAX_VERSION)||i<-1||i>7)throw new RangeError("Invalid value");var d,g;for(d=r;;d++){var M=a.getNumDataCodewords(d,t)*8,E=c.getTotalBits(e,d);if(E<=M){g=E;break}if(d>=n)throw new RangeError("Data too long")}for(var m=0,p=[a.Ecc.MEDIUM,a.Ecc.QUARTILE,a.Ecc.HIGH];m<p.length;m++){var C=p[m];s&&g<=a.getNumDataCodewords(d,C)*8&&(t=C)}for(var v=[],w=0,S=e;w<S.length;w++){var y=S[w];l(y.mode.modeBits,4,v),l(y.numChars,y.mode.numCharCountBits(d),v);for(var A=0,N=y.getData();A<N.length;A++){var T=N[A];v.push(T)}}h(v.length==g);var z=a.getNumDataCodewords(d,t)*8;h(v.length<=z),l(0,Math.min(4,z-v.length),v),l(0,(8-v.length%8)%8,v),h(v.length%8==0);for(var I=236;v.length<z;I^=253)l(I,8,v);for(var D=[];D.length*8<v.length;)D.push(0);return v.forEach(function(B,L){return D[L>>>3]|=B<<7-(L&7)}),new a(d,t,D,i)},a.prototype.getModule=function(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]},a.prototype.getModules=function(){return this.modules},a.prototype.drawFunctionPatterns=function(){for(var e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);for(var t=this.getAlignmentPatternPositions(),r=t.length,e=0;e<r;e++)for(var n=0;n<r;n++)e==0&&n==0||e==0&&n==r-1||e==r-1&&n==0||this.drawAlignmentPattern(t[e],t[n]);this.drawFormatBits(0),this.drawVersion()},a.prototype.drawFormatBits=function(e){for(var t=this.errorCorrectionLevel.formatBits<<3|e,r=t,n=0;n<10;n++)r=r<<1^(r>>>9)*1335;var i=(t<<10|r)^21522;h(i>>>15==0);for(var n=0;n<=5;n++)this.setFunctionModule(8,n,u(i,n));this.setFunctionModule(8,7,u(i,6)),this.setFunctionModule(8,8,u(i,7)),this.setFunctionModule(7,8,u(i,8));for(var n=9;n<15;n++)this.setFunctionModule(14-n,8,u(i,n));for(var n=0;n<8;n++)this.setFunctionModule(this.size-1-n,8,u(i,n));for(var n=8;n<15;n++)this.setFunctionModule(8,this.size-15+n,u(i,n));this.setFunctionModule(8,this.size-8,!0)},a.prototype.drawVersion=function(){if(!(this.version<7)){for(var e=this.version,t=0;t<12;t++)e=e<<1^(e>>>11)*7973;var r=this.version<<12|e;h(r>>>18==0);for(var t=0;t<18;t++){var n=u(r,t),i=this.size-11+t%3,s=Math.floor(t/3);this.setFunctionModule(i,s,n),this.setFunctionModule(s,i,n)}}},a.prototype.drawFinderPattern=function(e,t){for(var r=-4;r<=4;r++)for(var n=-4;n<=4;n++){var i=Math.max(Math.abs(n),Math.abs(r)),s=e+n,d=t+r;0<=s&&s<this.size&&0<=d&&d<this.size&&this.setFunctionModule(s,d,i!=2&&i!=4)}},a.prototype.drawAlignmentPattern=function(e,t){for(var r=-2;r<=2;r++)for(var n=-2;n<=2;n++)this.setFunctionModule(e+n,t+r,Math.max(Math.abs(n),Math.abs(r))!=1)},a.prototype.setFunctionModule=function(e,t,r){this.modules[t][e]=r,this.isFunction[t][e]=!0},a.prototype.addEccAndInterleave=function(e){var t=this.version,r=this.errorCorrectionLevel;if(e.length!=a.getNumDataCodewords(t,r))throw new RangeError("Invalid argument");for(var n=a.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][t],i=a.ECC_CODEWORDS_PER_BLOCK[r.ordinal][t],s=Math.floor(a.getNumRawDataModules(t)/8),d=n-s%n,g=Math.floor(s/n),M=[],E=a.reedSolomonComputeDivisor(i),m=0,p=0;m<n;m++){var C=e.slice(p,p+g-i+(m<d?0:1));p+=C.length;var v=a.reedSolomonComputeRemainder(C,E);m<d&&C.push(0),M.push(C.concat(v))}for(var w=[],S=function(y){M.forEach(function(A,N){(y!=g-i||N>=d)&&w.push(A[y])})},m=0;m<M[0].length;m++)S(m);return h(w.length==s),w},a.prototype.drawCodewords=function(e){if(e.length!=Math.floor(a.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");for(var t=0,r=this.size-1;r>=1;r-=2){r==6&&(r=5);for(var n=0;n<this.size;n++)for(var i=0;i<2;i++){var s=r-i,d=(r+1&2)==0,g=d?this.size-1-n:n;!this.isFunction[g][s]&&t<e.length*8&&(this.modules[g][s]=u(e[t>>>3],7-(t&7)),t++)}}h(t==e.length*8)},a.prototype.applyMask=function(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(var t=0;t<this.size;t++)for(var r=0;r<this.size;r++){var n=void 0;switch(e){case 0:n=(r+t)%2==0;break;case 1:n=t%2==0;break;case 2:n=r%3==0;break;case 3:n=(r+t)%3==0;break;case 4:n=(Math.floor(r/3)+Math.floor(t/2))%2==0;break;case 5:n=r*t%2+r*t%3==0;break;case 6:n=(r*t%2+r*t%3)%2==0;break;case 7:n=((r+t)%2+r*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][r]&&n&&(this.modules[t][r]=!this.modules[t][r])}},a.prototype.getPenaltyScore=function(){for(var e=0,t=0;t<this.size;t++){for(var r=!1,n=0,i=[0,0,0,0,0,0,0],s=0;s<this.size;s++)this.modules[t][s]==r?(n++,n==5?e+=a.PENALTY_N1:n>5&&e++):(this.finderPenaltyAddHistory(n,i),r||(e+=this.finderPenaltyCountPatterns(i)*a.PENALTY_N3),r=this.modules[t][s],n=1);e+=this.finderPenaltyTerminateAndCount(r,n,i)*a.PENALTY_N3}for(var s=0;s<this.size;s++){for(var r=!1,d=0,i=[0,0,0,0,0,0,0],t=0;t<this.size;t++)this.modules[t][s]==r?(d++,d==5?e+=a.PENALTY_N1:d>5&&e++):(this.finderPenaltyAddHistory(d,i),r||(e+=this.finderPenaltyCountPatterns(i)*a.PENALTY_N3),r=this.modules[t][s],d=1);e+=this.finderPenaltyTerminateAndCount(r,d,i)*a.PENALTY_N3}for(var t=0;t<this.size-1;t++)for(var s=0;s<this.size-1;s++){var g=this.modules[t][s];g==this.modules[t][s+1]&&g==this.modules[t+1][s]&&g==this.modules[t+1][s+1]&&(e+=a.PENALTY_N2)}for(var M=0,E=0,m=this.modules;E<m.length;E++){var p=m[E];M=p.reduce(function(w,S){return w+(S?1:0)},M)}var C=this.size*this.size,v=Math.ceil(Math.abs(M*20-C*10)/C)-1;return h(0<=v&&v<=9),e+=v*a.PENALTY_N4,h(0<=e&&e<=2568888),e},a.prototype.getAlignmentPatternPositions=function(){if(this.version==1)return[];for(var e=Math.floor(this.version/7)+2,t=Math.floor((this.version*8+e*3+5)/(e*4-4))*2,r=[6],n=this.size-7;r.length<e;n-=t)r.splice(1,0,n);return r},a.getNumRawDataModules=function(e){if(e<a.MIN_VERSION||e>a.MAX_VERSION)throw new RangeError("Version number out of range");var t=(16*e+128)*e+64;if(e>=2){var r=Math.floor(e/7)+2;t-=(25*r-10)*r-55,e>=7&&(t-=36)}return h(208<=t&&t<=29648),t},a.getNumDataCodewords=function(e,t){return Math.floor(a.getNumRawDataModules(e)/8)-a.ECC_CODEWORDS_PER_BLOCK[t.ordinal][e]*a.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][e]},a.reedSolomonComputeDivisor=function(e){if(e<1||e>255)throw new RangeError("Degree out of range");for(var t=[],r=0;r<e-1;r++)t.push(0);t.push(1);for(var n=1,r=0;r<e;r++){for(var i=0;i<t.length;i++)t[i]=a.reedSolomonMultiply(t[i],n),i+1<t.length&&(t[i]^=t[i+1]);n=a.reedSolomonMultiply(n,2)}return t},a.reedSolomonComputeRemainder=function(e,t){for(var r=t.map(function(g){return 0}),n=function(g){var M=g^r.shift();r.push(0),t.forEach(function(E,m){return r[m]^=a.reedSolomonMultiply(E,M)})},i=0,s=e;i<s.length;i++){var d=s[i];n(d)}return r},a.reedSolomonMultiply=function(e,t){if(e>>>8||t>>>8)throw new RangeError("Byte out of range");for(var r=0,n=7;n>=0;n--)r=r<<1^(r>>>7)*285,r^=(t>>>n&1)*e;return h(r>>>8==0),r},a.prototype.finderPenaltyCountPatterns=function(e){var t=e[1];h(t<=this.size*3);var r=t>0&&e[2]==t&&e[3]==t*3&&e[4]==t&&e[5]==t;return(r&&e[0]>=t*4&&e[6]>=t?1:0)+(r&&e[6]>=t*4&&e[0]>=t?1:0)},a.prototype.finderPenaltyTerminateAndCount=function(e,t,r){return e&&(this.finderPenaltyAddHistory(t,r),t=0),t+=this.size,this.finderPenaltyAddHistory(t,r),this.finderPenaltyCountPatterns(r)},a.prototype.finderPenaltyAddHistory=function(e,t){t[0]==0&&(e+=this.size),t.pop(),t.unshift(e)},a.MIN_VERSION=1,a.MAX_VERSION=40,a.PENALTY_N1=3,a.PENALTY_N2=3,a.PENALTY_N3=40,a.PENALTY_N4=10,a.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],a.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],a}();o.QrCode=f;function l(a,e,t){if(e<0||e>31||a>>>e)throw new RangeError("Value out of range");for(var r=e-1;r>=0;r--)t.push(a>>>r&1)}function u(a,e){return(a>>>e&1)!=0}function h(a){if(!a)throw new Error("Assertion error")}var c=function(){function a(e,t,r){if(this.mode=e,this.numChars=t,this.bitData=r,t<0)throw new RangeError("Invalid argument");this.bitData=r.slice()}return a.makeBytes=function(e){for(var t=[],r=0,n=e;r<n.length;r++){var i=n[r];l(i,8,t)}return new a(a.Mode.BYTE,e.length,t)},a.makeNumeric=function(e){if(!a.isNumeric(e))throw new RangeError("String contains non-numeric characters");for(var t=[],r=0;r<e.length;){var n=Math.min(e.length-r,3);l(parseInt(e.substring(r,r+n),10),n*3+1,t),r+=n}return new a(a.Mode.NUMERIC,e.length,t)},a.makeAlphanumeric=function(e){if(!a.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");var t=[],r;for(r=0;r+2<=e.length;r+=2){var n=a.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r))*45;n+=a.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r+1)),l(n,11,t)}return r<e.length&&l(a.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r)),6,t),new a(a.Mode.ALPHANUMERIC,e.length,t)},a.makeSegments=function(e){return e==""?[]:a.isNumeric(e)?[a.makeNumeric(e)]:a.isAlphanumeric(e)?[a.makeAlphanumeric(e)]:[a.makeBytes(a.toUtf8ByteArray(e))]},a.makeEci=function(e){var t=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)l(e,8,t);else if(e<16384)l(2,2,t),l(e,14,t);else if(e<1e6)l(6,3,t),l(e,21,t);else throw new RangeError("ECI assignment value out of range");return new a(a.Mode.ECI,0,t)},a.isNumeric=function(e){return a.NUMERIC_REGEX.test(e)},a.isAlphanumeric=function(e){return a.ALPHANUMERIC_REGEX.test(e)},a.prototype.getData=function(){return this.bitData.slice()},a.getTotalBits=function(e,t){for(var r=0,n=0,i=e;n<i.length;n++){var s=i[n],d=s.mode.numCharCountBits(t);if(s.numChars>=1<<d)return 1/0;r+=4+d+s.bitData.length}return r},a.toUtf8ByteArray=function(e){e=encodeURI(e);for(var t=[],r=0;r<e.length;r++)e.charAt(r)!="%"?t.push(e.charCodeAt(r)):(t.push(parseInt(e.substring(r+1,r+3),16)),r+=2);return t},a.NUMERIC_REGEX=/^[0-9]*$/,a.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,a.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",a}();o.QrSegment=c})(b||(b={}));(function(o){(function(f){var l=function(){function u(h,c){this.ordinal=h,this.formatBits=c}return u.LOW=new u(0,1),u.MEDIUM=new u(1,0),u.QUARTILE=new u(2,3),u.HIGH=new u(3,2),u}();f.Ecc=l})(o.QrCode||(o.QrCode={}))})(b||(b={}));(function(o){(function(f){var l=function(){function u(h,c){this.modeBits=h,this.numBitsCharCount=c}return u.prototype.numCharCountBits=function(h){return this.numBitsCharCount[Math.floor((h+7)/17)]},u.NUMERIC=new u(1,[10,12,14]),u.ALPHANUMERIC=new u(2,[9,11,13]),u.BYTE=new u(4,[8,16,16]),u.KANJI=new u(8,[8,10,12]),u.ECI=new u(7,[0,0,0]),u}();f.Mode=l})(o.QrSegment||(o.QrSegment={}))})(b||(b={}));var O=b,Q="L",U={L:O.QrCode.Ecc.LOW,M:O.QrCode.Ecc.MEDIUM,Q:O.QrCode.Ecc.QUARTILE,H:O.QrCode.Ecc.HIGH},Z=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}();function H(o){return o in U}function W(o,f){f===void 0&&(f=0);var l=[];return o.forEach(function(u,h){var c=null;u.forEach(function(a,e){if(!a&&c!==null){l.push("M".concat(c+f," ").concat(h+f,"h").concat(e-c,"v1H").concat(c+f,"z")),c=null;return}if(e===u.length-1){if(!a)return;c===null?l.push("M".concat(e+f,",").concat(h+f," h1v1H").concat(e+f,"z")):l.push("M".concat(c+f,",").concat(h+f," h").concat(e+1-c,"v1H").concat(c+f,"z"));return}a&&c===null&&(c=e)})}),l.join("")}function q(o,f,l,u){var h=u.width,c=u.height,a=u.x,e=u.y,t=o.length+l*2,r=Math.floor(f*.1),n=t/f,i=(h||r)*n,s=(c||r)*n,d=a==null?o.length/2-i/2:a*n,g=e==null?o.length/2-s/2:e*n,M=null;if(u.excavate){var E=Math.floor(d),m=Math.floor(g),p=Math.ceil(i+d-E),C=Math.ceil(s+g-m);M={x:E,y:m,w:p,h:C}}return{x:d,y:g,h:s,w:i,excavation:M}}function J(o,f){return o.slice().map(function(l,u){return u<f.y||u>=f.y+f.h?l:l.map(function(h,c){return c<f.x||c>=f.x+f.w?h:!1})})}var G={value:{type:String,required:!0,default:""},size:{type:Number,default:100},level:{type:String,default:Q,validator:function(o){return H(o)}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},margin:{type:Number,required:!1,default:0},imageSettings:{type:Object,required:!1,default:function(){return{}}},gradient:{type:Boolean,required:!1,default:!1},gradientType:{type:String,required:!1,default:"linear",validator:function(o){return["linear","radial"].indexOf(o)>-1}},gradientStartColor:{type:String,required:!1,default:"#000"},gradientEndColor:{type:String,required:!1,default:"#fff"}},j=P(P({},G),{renderAs:{type:String,required:!1,default:"canvas",validator:function(o){return["canvas","svg"].indexOf(o)>-1}}}),ee=F({name:"QRCodeSvg",props:G,setup:function(o){var f=_(0),l=_(""),u,h=function(){var a=o.value,e=o.level,t=o.margin,r=t>>>0,n=H(e)?e:Q,i=O.QrCode.encodeText(a,U[n]).getModules();if(f.value=i.length+r*2,o.imageSettings.src){var s=q(i,o.size,r,o.imageSettings);u={x:s.x+r,y:s.y+r,width:s.w,height:s.h},s.excavation&&(i=J(i,s.excavation))}l.value=W(i,r)},c=function(){if(!o.gradient)return null;var a=o.gradientType==="linear"?{x1:"0%",y1:"0%",x2:"100%",y2:"100%"}:{cx:"50%",cy:"50%",r:"50%",fx:"50%",fy:"50%"};return R(o.gradientType==="linear"?"linearGradient":"radialGradient",P({id:"qr-gradient"},a),[R("stop",{offset:"0%",style:{stopColor:o.gradientStartColor}}),R("stop",{offset:"100%",style:{stopColor:o.gradientEndColor}})])};return h(),K(h),function(){return R("svg",{width:o.size,height:o.size,"shape-rendering":"crispEdges",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(f.value," ").concat(f.value)},[R("defs",{},[c()]),R("rect",{width:"100%",height:"100%",fill:o.background}),R("path",{fill:o.gradient?"url(#qr-gradient)":o.foreground,d:l.value}),o.imageSettings.src&&R("image",P({href:o.imageSettings.src},u))])}}}),te=F({name:"QRCodeCanvas",props:G,setup:function(o,f){var l=_(null),u=_(null),h=function(){var a=o.value,e=o.level,t=o.size,r=o.margin,n=o.background,i=o.foreground,s=o.gradient,d=o.gradientType,g=o.gradientStartColor,M=o.gradientEndColor,E=r>>>0,m=H(e)?e:Q,p=l.value;if(p){var C=p.getContext("2d");if(C){var v=O.QrCode.encodeText(a,U[m]).getModules(),w=v.length+E*2,S=u.value,y={x:0,y:0,width:0,height:0},A=o.imageSettings.src&&S!=null&&S.naturalWidth!==0&&S.naturalHeight!==0;if(A){var N=q(v,o.size,E,o.imageSettings);y={x:N.x+E,y:N.y+E,width:N.w,height:N.h},N.excavation&&(v=J(v,N.excavation))}var T=window.devicePixelRatio||1,z=t/w*T;if(p.height=p.width=t*T,C.scale(z,z),C.fillStyle=n,C.fillRect(0,0,w,w),s){var I=void 0;d==="linear"?I=C.createLinearGradient(0,0,w,w):I=C.createRadialGradient(w/2,w/2,0,w/2,w/2,w/2),I.addColorStop(0,g),I.addColorStop(1,M),C.fillStyle=I}else C.fillStyle=i;Z?C.fill(new Path2D(W(v,E))):v.forEach(function(D,B){D.forEach(function(L,$){L&&C.fillRect($+E,B+E,1,1)})}),A&&C.drawImage(S,y.x,y.y,y.width,y.height)}}};V(h),K(h);var c=f.attrs.style;return function(){return R(X,[R("canvas",P(P({},f.attrs),{ref:l,style:P(P({},c),{width:"".concat(o.size,"px"),height:"".concat(o.size,"px")})})),o.imageSettings.src&&R("img",{ref:u,src:o.imageSettings.src,style:{display:"none"},onLoad:h})])}}}),se=F({name:"Qrcode",render:function(){var o=this.$props,f=o.renderAs,l=o.value,u=o.size,h=o.margin,c=o.level,a=o.background,e=o.foreground,t=o.imageSettings,r=o.gradient,n=o.gradientType,i=o.gradientStartColor,s=o.gradientEndColor;return R(f==="svg"?ee:te,{value:l,size:u,margin:h,level:c,background:a,foreground:e,imageSettings:t,gradient:r,gradientType:n,gradientStartColor:i,gradientEndColor:s})},props:j});const ue=x("fileData",()=>{const o=Y(JSON.parse(localStorage.getItem("receiveData")||"[]")||[]),f=Y(JSON.parse(localStorage.getItem("shareData")||"[]")||[]);function l(){localStorage.setItem("receiveData",JSON.stringify(o)),localStorage.setItem("shareData",JSON.stringify(f))}function u(e){o.unshift(e),l()}function h(e){f.unshift(e),l()}function c(e){o.splice(e,1),l()}function a(e){f.splice(e,1),l()}return{receiveData:o,shareData:f,save:l,addShareData:h,addReceiveData:u,deleteReceiveData:c,deleteShareData:a}});var le=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function fe(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}export{ne as C,oe as E,se as Q,ie as S,ae as a,le as c,fe as g,ue as u};
