var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

// Copyright 2008-2017 Monetate, Inc.
// 2017-01-18T14:14:03Z t1484745711 entry_base.js
(function(){var g=!0,h=null,i=this;function j(b){for(var b=b.split("."),a=i,c;b.length&&(c=b.shift());)if(a[c]!=h)a=a[c];else return h;return a}function k(b,a){var c=b.split("."),d=i;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&void 0!==a?d[e]=a:d=d[e]?d[e]:d[e]={}};var l=[];function m(b,a){var c=n(b,a);k("monetate."+b,c);return c}function n(b,a){var c=j("monetate."+b)||a;"undefined"==typeof c&&(c={});return c};var o="0",q="juul.com",r="!!!",s="juul.com!!!support.juul.com".split(r),o=o+"",q=q+"",r=r+"";var t={"~":g,"!":g,"*":g,"(":g,")":g,"-":g,_:g,".":g,",":g,":":g,"@":g,$:g,"'":g,"/":g};function u(b){if(/^[A-Za-z0-9_\-]*$/.test(b))return b;b=b.replace(/([^A-Za-z0-9_\-])/g,function(a,b){return t[b]?b:encodeURIComponent(b)});return b.replace(/%20/g,"+")};function v(b){for(var a=(document.cookie||"").split(/\s*;\s*/),c=0,d=a.length;c<d;c++){var e=a[c],f=e.indexOf("=");if(-1!=f&&b===e.substring(0,f))return unescape(e.substring(f+1))}return h}function w(b,a,c){var d=q;document.cookie=b+"="+u(a)+"; "+(d&&d.length?"domain="+d+"; ":"")+"path=/; "+(c?"expires="+(new Date((new Date).getTime()+c)).toGMTString()+"; ":"")};function x(){return"https:"==document.location.protocol?"http://web.archive.org/web/20190828180318/https://sb.monetate.net":"http://web.archive.org/web/20190828180318/http://b.monetate.net"};var y=m("rp",[]);k("monetate.rph",function(b,a){y.push({data:b,callback:a})});function z(b){var a=n("rph");a&&a(b,void 0)}function A(b,a){b.e=b.e||[];var c;a:{c=b.e;for(var d=c.length,e=0;e<d;++e)if(c[e]===a){c=g;break a}c=!1}c||b.e.push(a)};function B(b){var a=document.createElement("script");a.type="text/javascript";a.src=b;a.charset="utf-8";return a}function C(b){var a=document.getElementsByTagName("script")[0],b=B(b);b.async=g;a.parentNode.insertBefore(b,a);return b};var D=m("p",{c:!1,keys:{},ops:[],admits:{}});
function E(){var b=F;return function(){var a=n("preview",-1),c=G("preview","mt.ps");if(-1!=a&&c=="cp"+a.cp)a:{a=a.name;for(c=0;c<D.ops.length;c++){var d=D.ops[c];if("mt.ps"==d.cookie&&d.label==a)break a}D.ops.push({cookie:"mt.ps",label:a})}else if(c&&-1==a&&(a=/^([a-z]{1,3})([0-9A-Z]{32})$/.exec(c))&&3==a.length)if(a=x()+("/js/2/a-416e2cf1/p/juul.com/entry.js?"+a[1]+"="+a[2]),!D.admits["/js/2/a-416e2cf1/p/juul.com/entry.js"]){for(c=0;c<l.length;c++){for(var d=l[c].split("."),e=void 0,f=window,
e=0;e<d.length-1;e++)f=f[d[e]];delete f[d[e]]}l.length=0;c=a;document.getElementsByTagName("script");c=B(c);c.setAttribute("id","monetate-block");d=document.createElement("div");d.appendChild(c);document.write(d.innerHTML);document.getElementById("monetate-block")?c.removeAttribute("id"):c=void 0;if(c||C(a)){D.admits["/js/2/a-416e2cf1/p/juul.com/entry.js"]=g;return}}b.apply(this,arguments)}}
function G(b,a){if(!D.c){var c=window.location,d=c.hash;D.c=g;if(d&&"#monetate-"==d.substr(0,10)){for(var d=d.slice(10).split(","),e=0;e<d.length;e++){var f=d[e].split("=");D.keys[f[0]]=f[1]||"1"}"pushState"in window.history&&window.history.pushState("",document.title,c.protocol+"//"+c.hostname+c.pathname+c.search)}}b in D.keys&&w(a,D.keys[b]);return v(a)};var H=h;function I(){if(H===h&&(H=!!G("diagnostics","mt.diagnostics")))J("a","a-416e2cf1/p/juul.com"),J("ts","f.monetate.net");return H}var K=m("dq",[]);function J(b,a){I()&&K.push({type:b,obj:a})};var L=0;function M(b,a){return function(){try{return a.apply(this,arguments)}catch(c){try{var d={entry:b,xname:c.name,xmsg:c.message,msg:b};if(3>L){L+=1;!d.msg&&d.entry&&(d.msg=d.entry);J("e",d);var e={},f=e;A(f,"xx");f.xx=f.xx||[];f.xx.push(d);z(e)}}catch(p){}}}};var N=[],O=0,P={};function Q(b){var a=P[b]||0,a=a+1;return P[b]=a}function R(){var b=n("timeBasis",h);b===h&&(b=window.monetateT||(new Date).getTime(),k("monetate.timeBasis",b),S({n:"basis",s:Q("basis"),t:0-R(),d:0}));return b}var T=h;
function U(){var b=E();return function(){if(T===h){var a;if(!(a=I()))a:{a=v("mt.v");if(!a||!(64>a.length))a="2."+Math.floor(2147483647*Math.random())+"."+(new Date).getTime(),w("mt.v",a,15768E7);if(a&&(a=a.split("."))&&1<a.length)if((a=a[1])&&a.length){a=1>parseInt(a,10)%100;break a}a=!1}T=a}a=T?{n:"entry",s:Q("entry"),t:(new Date).getTime()-R()}:h;try{return b.apply(window,arguments)}finally{a&&(a.d=(new Date).getTime()-R()-a.t,S(a))}}}
function S(b){J("m",b);N.push(b);1==N.length&&setTimeout(M("timeout",V),750)}function V(){if(10>O){O+=1;var b={},a=N;A(b,"xt");b.xt=a;z(b)}N=[]};m("st",{refs:{},id:0,last:"",defer:!1});m("em",{masks:{},count:0,tmark:h});var W=RegExp("MSIE\\ (?:[6-9]|10\\.)|Trident/|Version/(?:3\\.[1-2]|[4-9]|1[0-9]).*Safari|Firefox/|Chrome|CriOS/|Windows\\s?NT\\s?10\\.0|AppleWebKit/.*Mobile/"),X=[],Y=/Firefox\/(?:1\.0)|Windows CE/;function Z(){var b=$();return function(){var a=navigator;"1"==o&&("1"==a.doNotTrack||"yes"==a.doNotTrack||"1"==a.msDoNotTrack)?w("mt.v","",-1):b.apply(this,arguments)}}
function $(){var b=aa();return function(){var a=navigator.userAgent,c=a,d=W.test(c);if(!d)for(var e=0,f=X.length;e<f;e++)if(X[e].test(c)){d=g;break}d&&!Y.test(a)&&b.apply(this,arguments)}}
function aa(){var b=U();return function(){var a;a:{a=document.location.host;for(var c=0,d=s.length;c<d;c++){var e=s[c],f=void 0;if(!(f=a==e))var f="."+e,p=a.length-f.length,f=0<=p&&a.indexOf(f,p)==p;if(f){a=e;break a}}a=q}if(!a)throw a="Cookie domain is null or undefined",a instanceof Array&&(a=a.join("")),a=Error(a||""),a.name="mtAssert",a;q=a;b.apply(this,arguments)}};function F(){var b;b=n("preview",-1);var a=G("preview","mt.ps");b=-1!=b&&a=="cp"+b.cp?"?cp="+b.cp:"";C((b?x():"https:"==document.location.protocol?"http://web.archive.org/web/20190828180318/https://se.monetate.net":"http://web.archive.org/web/20190828180318/http://e.monetate.net")+("/js/3/a-416e2cf1/p/juul.com/t1566495902/6e0890204a9c9c07/custom.js"+b))};var ba=M("entry",function(){var b=Z();return function(){var a=window.location.protocol;("http:"==a||"https:"==a)&&b.apply(this,arguments)}}());j("monetate.entry")||(l.push("monetate.entry"),k("monetate.entry",ba));})();
if(this.monetate){monetate.redirect=[];monetate.masks=[];monetate.tgt=[{"args":["mt.customerId","",""],"is_collector":false,"is_id":true,"op":"targetCookie","rules":{"op":"","value":""},"targetId":45475},{"args":["ajs_user_id","",""],"is_collector":false,"is_id":true,"op":"targetCookie","rules":{"op":"","value":""},"targetId":45056}];monetate.bk=false;monetate.preview=null;monetate.ch="f857b84a31b48e57";monetate.entry()}

}
/*
     FILE ARCHIVED ON 18:03:18 Aug 28, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:16:13 Oct 13, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 82.475
  exclusion.robots: 0.144
  exclusion.robots.policy: 0.132
  RedisCDXSource: 0.807
  esindex: 0.012
  LoadShardBlock: 53.239 (3)
  PetaboxLoader3.datanode: 105.555 (4)
  CDXLines.iter: 20.884 (3)
  load_resource: 252.573
  PetaboxLoader3.resolve: 124.182
*/