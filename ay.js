(function _lnk(){window.Doc=document||void 0,window.print=function(n){alert(n)},window.out=function(n){console.log(n)},window.str=function(...n){if(n.length>1){var t=[];for(var e of n)t.push(str(e));return"("+t.join(", ")+")"}return n=n[0],vs.fn(n)?n.toString():vs.dic(n)||vs.lis(n)||vs.set(n)?JSON.stringify(n):String(n)},window.type=function(n){return typeof n},window.typeobj=function(n){return n.constructor.name},window.types=function(n){return"object"==type(n)?n.constructor.name:typeof n},window.int=function(n){return parseInt(n)},window.float=function(n){return parseFloat(n)},window.rr=function(ss){return eval(ss)},window.rrt=function(ss){return eval(ss)},window.hasatt=function(n,t){return n.hasOwnProperty(t)},window.reg=function(n,t){return new RegExp(n,t)},window.bool=function(n){return vs.lis(n)||vs.dic(n)||vs.set(n)||vs.str(n)?len(n)>0:!!n},window.reduce=function(n,t){return"string"==typeof n&&"string"==typeof t?n.localeCompare(t):"object"==typeof n&&"object"==typeof t?JSON.stringify(n).localeCompare(JSON.stringify(t)):n-t},window.copy=function(n){return vs.call(n)?n.bind({}):JSON.parse(JSON.stringify(n))},window.len=function(n){return vs.$$(n)?Els(n).length:vs.dic(n)?Object.keys(n).length:void 0!==n.size?n.size:void 0!==n.length?n.length:void 0},window.dir=function(obj){return vs.str(obj)?Object.getOwnPropertyNames(eval(obj)):Object.getOwnPropertyNames(obj)},window.cname=function(n,t){if(n)return void 0!==t&&(n.cname=t),n.cname},window.tohex=function(n,t,e,r){if(vs.str(n)&&void 0===t)return n=st.find(n,/(?<=\()[^\(\)]*/),n=st.rep(n,/ /,"").split(","),n=n.map(function(n){return nm(n)}),tohex.apply(null,n);if(vs.num(n)&&vs.num(t)&&vs.num(e)){const s=n.toString(16).padStart(2,"0"),o=t.toString(16).padStart(2,"0"),i=e.toString(16).padStart(2,"0");let u="";return void 0!==r&&(u=Math.round(255*r).toString(16).padStart(2,"0")),`#${s}${o}${i}${u}`}},window.El=function(n){return vs.El(n)?n:vs.str(n)?$(n)[0]:vs.vx(n)?El(n.sgs[0]):vs.jq(n)?n[0]:void 0},window.Els=function(n){if(vs.lis(n)){var t=[];for(var e of n)co.add(t,...Els(e));return t}return vs.str(n)?$(n).get():vs.El(n)?[n]:vs.vx(n)?Els(n.sgs):vs.jq(n)?n.get():vs.$$(n)?Els(n.sgs):[]},window.times=function(n){const t=new Date,e=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0"),o=String(t.getHours()).padStart(2,"0"),i=String(t.getMinutes()).padStart(2,"0"),u=String(t.getSeconds()).padStart(2,"0"),c=String(t.getMilliseconds()).padStart(3,"0"),a=n.replace("%Y",e).replace("%y",e).replace("%m",r).replace("%d",s).replace("%H",o).replace("%M",i).replace("%S",u).replace("%s",c);return a}})(),function(){var n;window.$_=(n=function(){},n.c=45,n.a=function(){},n),window.vse=function(){var n=function(){return n._n=0,n.err_n=[],n.err_s=[],n.err_z=[],n};return n._adderr=function(t,e,r){return n._n+=1,t&&(n.err_n.push(n._n),n.err_s.push(r),n.err_z.push(e)),n},n.out=function(){var t="";if(fos.i(n.err_n,(e,r)=>{var s=n.err_s[r],o=n.err_z[r],i=str(o);i.length>50&&(i="\n"+i),t+="\n █ 第 "+e+' 个参数应为 "'+s+'"',t+=' █ 当前为 "<'+typeof o+'>"',t+=" █ 其值为 ◆ "+i}),t)throw new Error(t)},n.int=function(t){return n._adderr(!vs.int(t),t,"vs.int()")},n.str=function(t){return n._adderr(!vs.str(t),t,"vs.str()")},n.num=function(t){return n._adderr(!vs.num(t),t,"vs.num()")},n.float=function(t){return n._adderr(!vs.float(t),t,"vs.float()")},n.px=function(t){return n._adderr(!vs.px(t),t,"vs.px()")},n.per=function(t){return n._adderr(!vs.per(t),t,"vs.per()")},n.bit=function(t){return n._adderr(!vs.bit(t),t,"vs.bit()")},n.bool=function(t){return n._adderr(!vs.bool(t),t,"vs.bool()")},n.lis=function(t){return n._adderr(!vs.lis(t),t,"vs.lis()")},n.dic=function(t){return n._adderr(!vs.dic(t),t,"vs.dic()")},n.set=function(t){return n._adderr(!vs.set(t),t,"vs.set()")},n.vx=function(t){return n._adderr(!vs.vx(t),t,"vs.vx()")},n.fn=function(t){return n._adderr(!vs.fn(t),t,"vs.fn()")},n.fnd=function(t){return n._adderr(!vs.fnd(t),t,"vs.fnd()")},n.call=function(t){return n._adderr(!vs.call(t),t,"vs.call()")},n.B=function(t){return n._adderr(!vs.B(t),t,"vs.B()")},n.I=function(t){return n._adderr(!vs.I(t),t,"vs.I()")},n.T=function(t){return n._adderr(!vs.T(t),t,"vs.T()")},n.$$=function(t){return n._adderr(!vs.$$(t),t,"vs.$$()")},n.jq=function(t){return n._adderr(!vs.jq(t),t,"vs.jq()")},n.El=function(t){return n._adderr(!vs.El(t),t,"vs.El()")},n}(),window.vs=function(){var n=function(n,...t){};return n.T=function(n){return!0===n},n.F=function(n){return!1===n},n.N=function(n){return void 0===n},n.uN=function(n){return void 0!==n},n.int=function(n){return int(n)===n},n.float=function(n){return Number(n)===n&&n%1!=0},n.num=function(n){return int(n)===n||float(n)===n},n.str=function(n){return String(n)===n},n.bool=function(n){return!0===n||!1===n},n.lis=function(n){return Array.isArray(n)},n.vx=function(n){return vs.cname(n,"vx")},n.fn=function(n){return"function"==typeof n},n.call=function(n){return"function"==typeof n},n.all=function(n,...t){},n.fnd=function(n){},n.bit=function(n){},n.Y=function(n){return!(["",0,null,void 0,!1].indexOf(n)>-1)&&(n instanceof Map||n instanceof Set?0!==n.size:"object"!=typeof n||0!==Object.keys(n).length)},n.V=function(n){return vs.Y(n)||0===n},n.has=function(n,t){return vs.str(n)?-1!==n.indexOf(t):vs.lis(n)?-1!==n.indexOf(t):vs.dic(n)?n.hasOwnProperty(t):!!vs.set(n)&&n.has(t)},n.cname=function(n,t){return cnames=cname(n)?cname(n):"",vs.has(cnames.split(":"),t)},n.dic=function(n){return null!==n&&"object"==typeof n&&n.constructor===Object},n.set=function(n){return null!==n&&"object"==typeof n&&n.constructor===Set},n.per=function(n){var t=new RegExp("^-?(\\d+.)?\\d+%$");return t.test(n)},n.px=function(n){var t=new RegExp("^-?\\d+px$");return t.test(n)},n.reg=function(n){return n instanceof RegExp},n.haszh=function(n){var t=new RegExp("[\\u4E00-\\u9FFF]+","g");return t.test(n)},n.being=function(n){},n.elhas=function(n,t){return vse().El(n).out(),!!(vs.str(t)&&$(n).is(t)||vs.El(t)&&vs.sameEl(n,t))||(vs.lis(t)?bool(fos(t,t=>{if(vs.elhas(n,t))return!0})):!!vs.has(Els(t),n))},n.sameEl=function(n,t){return vs.El(n)&&vs.El(n)&&n.isSameNode(t)},n.$$=function(n){return vs.cname(n,"$$")},n.El=function(n){return n instanceof HTMLElement},n.div=function(n){return n instanceof HTMLDivElement},n.jq=function(n){return n instanceof jQuery},n.B=function(n){return n instanceof HTMLButtonElement},n.I=function(n){return n instanceof HTMLInputElement},n.T=function(n){return n instanceof HTMLTextAreaElement},n}(),window.ty=function(){var n=function(n){var t=arg(arguments,1);try{return n.apply(this,t)}catch(n){ww(n)}};return n.a=function(){},n}(),window.af=function(){var n=function(n,t,e){return n?t:e||null};return n.cd=function(n,t,e){return e=e||null,n?"function"==typeof t?t():t:"function"==typeof e?e():e},n.d=function(n,t){return n&&"function"==typeof t?t():null},n}(),window.fo=function(){var n=function(n){return{[Symbol.iterator](){let t=0,e=vs.str(n)?n.split(""):lis(n);return{next:()=>{if(t<len(e)){let r={value:{k:e[t++],i:t-1},done:!1};return vs.dic(n)&&(r.value.v=n[e[t-1]]),r}return{done:!0}}}}}};return n}(),window.fos=function(){var n=function(n,t){var e=[];if(vs.lis(n))n.forEach((n,r)=>{e.push(t(n))});else if(vs.dic(n))Object.keys(n).forEach((r,s)=>{e.push(t(r,n[r]))});else if("object"==typeof n&&null!==n)for(let r in n)n.hasOwnProperty(r)&&e.push(t(r,n[r]));for(var r=0;r<e.length;r++)void 0===e[r]&&e.splice(r,1);return e};return n.i=function(n,t){var e=[];if(vs.lis(n))n.forEach((n,r)=>{e.push(t(n,r))});else if(vs.dic(n))Object.keys(n).forEach((r,s)=>{e.push(t(r,n[r],s))});else if("object"==typeof n&&null!==n){var r=0;for(let s in n)n.hasOwnProperty(s)&&e.push(t(s,n[s],r++))}return e},n.find=function(n,t,e=!1){if(vs.lis(n))return e?n.filter(t):n.find(t);if(vs.dic(n))return e?n.filter(t):n.find(t);if("object"==typeof n&&null!==n){let r=[];for(let s in n)if(n.hasOwnProperty(s)){let o=t(s,n[s]);if(o){if(!e)return o;r.push(o)}}return e?r:null}},n.findall=function(n,t){return fos.find(n,t,!0)},n.att=function(n,t){var e=[];for(var r of n)e.push(att(r,t));return e},n}(),window.fn=function(){var n=function(){var n=function(n){if(arguments.callee.args){var t=lis.add(arg(arguments),arg(arguments.callee.args));return arguments.callee.fpt.apply(this,t)}return arguments.callee.fpt=n,arguments.callee.args=arg(arguments,1),arguments.callee};return n.apply(this,arguments)};return n}(),window.fns=void 0,window.fnd=void 0,window.cons=void 0,window.st=function(){var n=function(n,t,e){return n=String(n),vs.N(t)&&vs.N(e)?n:(t=t||0,e=e||n.length,t=t<0?n.length+t:t,e=e<0?n.length+e:e,n.slice(t,e))};return n.cut=function(){},n.count=function(n,t){var e=new RegExp(t,"g");return n&&n.match(e).length},n.end=function(n,t){return n&&n.endsWith(t)},n.start=function(n,t){return n&&n.startsWith(t)},n.add=function(n,t,e){return n.slice(0,t)+e+n.slice(t)},n.sub=function(n,t,e){e=e||"";var r=vs.reg(t)?t:new RegExp(t,"mg");return r=r.multiline?r:new RegExp(r.source,"mg"),n.replace(r,e)},n.rep=function(n,t,e){return e=e||"",vs.reg(t)&&(t=reg.multiline?t:new RegExp(t,"mg")),n.replace(t,e)},n.find=function(n,t){var e=vs.reg(t)?t:new RegExp(t,"m");e=e.multiline?e:new RegExp(e.source,"m");var r=e.exec(n);return r?r[0]:null},n.findw=function(n){},n.rfind=function(n,t){},n.findall=function(n,t){var e=vs.reg(t)?t:new RegExp(t,"gm");e=e.global&&e.multiline?e:new RegExp(e.source,"gm");const r=n.match(e);return r||[]},n.tohex=function(n){if(!n)return n;var t=/rgba?\((\d+),\s*(\d+),\s*(\d+)(,\s*(\d+))?\)/g;return n=st.rep(n,t,n=>tohex(n)),n},n}(),window.nm=function(){var n=function(n){return vs.num(n)?n:Number(n)};return n.per=function(n){return str(100*nm(n))+"%"},n.px=function(n){return n=str(n),n.indexOf("px")>-1?n:n+"px"},n.rand=function(n=1e3,t,e){for(var r=void 0;void 0===r||void 0!==e&&e===r;)r=Math.floor(Math.random()*(t-n+1)+n);return r},n.pxper=function(n){return vs.num(n)?n+"px":st.end(n,"px")||st.end(n,"%")?n:n+"px"},n}(),window.lis=function(){var n=function(n,t,e){return n=vs.lis(n)?1==len(n)&&vs.lis(n[0])?n[0]:n:vs.dic(n)&&0==len(n)?[]:vs.set(n)&&0==len(n)?[]:vs.N(n)||null==n?[]:[n],t=t||0,e=e||n.length,t=t<0?n.length+t:t,e=e<0?n.length+e:e,n.slice(t,e)};return n.add=function(){for(var n=[],t=0;t<arguments.length;t++)n=n.concat(arguments[t]);return n},n.i=function(n,t,e){return t<0&&(t=len(n)+t),void 0===e?n[t]:(n[t]=e,n)},n.geti=function(n,t){for(var e=0;e<n.length;e++)if(n[e]===t)return e;return-1},n.sort=function(n,t){void 0===t&&(t=((n,t)=>n-t)),n.sort((n,e)=>{let r=t(n,e);return(r<0||!r)&&0!==r?-1:1})},n.rsort=function(n){n.sort((n,t)=>-1)},n.Eli=function(n,t){for(var e=0;e<n.length;e++)if(vs.sameEl(n[e],t))return e;return-1},n}(),window.dic=void 0,window.to=void 0,window.time=function(){var n=function(n){return n?time.now(n):Date.now()/1e3};return n.now=function(n){n=n||"YYYY-MM-DD hh:mm:ss.SSS";const t=new Date,e=t.getFullYear(),r=(t.getMonth()+1).toString().padStart(2,"0"),s=t.getDate().toString().padStart(2,"0"),o=t.getHours().toString().padStart(2,"0"),i=t.getMinutes().toString().padStart(2,"0"),u=t.getSeconds().toString().padStart(2,"0"),c=t.getMilliseconds().toString().padStart(3,"0");let a=n;return a=a.replace(/(YYYY)|(yyyy)/,e),a=a.replace(/MM/,r),a=a.replace(/(DD)|(dd)/,s),a=a.replace(/hh/,o),a=a.replace(/mm/,i),a=a.replace(/ss/,u),a=a.replace(/SSS/,c),a},n.sleep=function(n){for(var t=Date.now();Date.now()-t<n;);},n}(),window.Net=function(){var n=function(n,t,e,r){var s=function(){var n=arguments.callee;return n.socket=new WebSocket("ws://localhost:"+n.Port+"/websocket"),n.socket.addEventListener("open",()=>{console.log("███ WebSocket 连接已打开, 端口:",n.Port),n.Open&&n.Open(n)}),n.socket.addEventListener("message",t=>{var e=t.data;try{e=JSON.parse(e)}catch(n){}n.islnk()&&n.Doing(s,e)}),n.socket.addEventListener("close",()=>{console.log("███ WebSocket 连接已关闭, 端口:",n.Port),n.Close&&n.Close(n)}),n};return s.send=function(n){vs.dic(n)&&(n=JSON.stringify(n)),s.islnk()&&s.socket.send(n)},s.lnk=function(){s.islnk()||s()},s.islnk=function(){return 1===s.socket.readyState},s.close=function(){s.islnk()&&s.socket.close()},s.Port=n,s.Doing=t,s.Open=e,s.Close=r,s()};return n}(),window.Vx=function(){var n=function(n){var t=function(n){return n=n?":"+n:"",cname(arguments.callee,"vx"+n),arguments.callee}(n);return t.dir=function(){var n=new Set(Object.keys(this));return n.delete("dir"),n},t.nos=function(n,t){return this.hasOwnProperty(n)||(this[n]=t),this},t};return n}(),window.co=function(){var n=function(){};return n._dic=function(n){return vs.dic(n)?n:{obj:null}},n.nos=function(n,...t){return t=lis(t),vs.lis(n)?t.forEach((t,e)=>{vs.has(n,t)||n.push(t)}):vs.dic(n)?t.forEach((t,e)=>{if(vs.dic(t))for(var r in t)n.hasOwnProperty(r)||(n[r]=t[r]);else n.hasOwnProperty(t)||(n[t]=null)}):vs.str(n)?t.forEach((t,e)=>{vs.has(n,t)||(n+=t)}):vs.set(n)&&t.forEach((t,e)=>{n.has(t)||n.add(t)}),n},n.add=function(n,...t){return t=lis(t),vs.lis(n)?t.forEach((t,e)=>{n.push(t)}):vs.dic(n)?t.forEach((t,e)=>{if(vs.dic(t))for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r]);else n[t]=null}):vs.str(n)&&t.forEach((t,e)=>{n+=t}),n},n.de=function(n,...t){return t=lis(t),vs.lis(n)?t.forEach((t,e)=>{n.indexOf(t)>-1&&n.splice(n.indexOf(t),1)}):vs.dic(n)?t.forEach((t,e)=>{delete n[t]}):vs.str(n)&&t.forEach((t,e)=>{n=st.rep(n,str(t),"")}),n},n.dei=function(n,...t){fos(t,t=>{n.splice(t,1)})},n.pop=function(n,...t){t=lis(t);var e=vs.dic(n)?{}:[];return vs.lis(n)?t.forEach((t,r)=>{n.indexOf(t)>-1&&e.push(n.splice(n.indexOf(t),1))}):vs.dic(n)?t.forEach((t,r)=>{n.hasOwnProperty(t)&&(e[t]=n[t],delete n[t])}):vs.str(n)&&t.forEach((t,r)=>{e.push(t),n=st.rep(n,t,"")}),e},n.rep=function(n,...t){return t=lis(t),vs.dic(n)&&t.forEach((t,e)=>{if(vs.dic(t))for(var r in t)n.hasOwnProperty(r)&&(n[r]=t[r]);else n.hasOwnProperty(t)&&(n[t]=null)}),n},n.sort=function(n,t){vs.lis(n)&&lis.sort(n,t)},n.rsort=function(n){vs.lis(n)&&lis.rsort(n)},n}(),window.att=function(){var n=function(n,t){for(var e of(vs.has(t,".")&&(t=t.split(".")),t=lis(t),t)){if(!n.hasOwnProperty(e))return;n=n[e]}return n};return n._=function(n,t){if(n.hasOwnProperty(t))return st.end(t,"()")?n[st(t,0,-2)]():n[t]},n.add=function(n,t,e){return n[t]=e,n},n}(),window.arg=function(){var n=function(n,t,e){var r=[];for(var s of n)r.push(s);return lis(r,t,e)};return n}(),window.ww=function(n){var t=function(n){var t=vs.lis(n)?"Object:Array":type(n);for(var e of(console.log("███ ww_print:",time.now(),", 类型",t),arg(arguments)))console.log("  ",e)};return t.str=function(n){var t=vs.lis(n)?"Object:Array":type(n),e="███ ww_print:"+time.now()+", 类型:"+t+"\n";for(var r of arg(arguments))e+="  "+str(r)+"\n";console.log(e)},t}(),window.Vson=void 0}(),window.$$=function(){var n=function(n,t,e,r){var s=vs.lis(n)?n:void 0,o=vs.str(n)?n:void 0;if(s)return $$(Vx("$$"),t,"lis",s);if(o)return $$(Vx("$$"),t,"str",o);var i=vs.vx(n)?n:void 0,u=vs.El(n)?n:void 0,c=vs.jq(n)?n:void 0;if(c)return $$(Vx("$$"),t,"jq",c);if(u)return $$(Vx("$$"),t,u.tagName.toLowerCase(),u);if(i){t=t||{},vs.$$(i)&&i.sgs&&(r=i.sgs);var a=r||Doc.createElement(e);return i.sgs=[a],e&&cname(i,cname(i)+":"+e),$$.link_funs(i,$$.funs_inc,"inc"),$$.link_funs(i,$$.funs_set,"set"),$$.link_funs(i,$$.funs_get,"get"),i.set(t,Els(i.sgs),i),i}};return n.get=function(n,t){var e={};sg=El(n),vs.str(t)&&(t=[t]);var r=$(sg);for(var s of fo(t))"name"==s.k?e.name=r.attr("id"):"bc"==s.k?e.bc=tohex(r.css("backgroundColor")):"color"==s.k?e.color=tohex(r.css("color")):"alpha"==s.k?e.alpha=r.css("opacity"):"ring"==s.k?e.ring=r.css("borderRadius"):"w"==s.k?e.w=r.css("width"):"h"==s.k?e.h=r.css("height"):"font"==s.k?e.font=r.css("font").split(" ")[1]:"fontsize"==s.k?e.fontsize=r.css("fontSize"):"Top"==s.k?e.Top=r.css("position"):"center"==s.k?e.center=r.css("textAlign"):"parent"==s.k?e.parent=El(r.parent()):e[s.k]=st.tohex(r.attr(s.k))||st.tohex(r.css(s.k));return e},n.B=function(n){return $$(Vx("$$"),n,"button")},n.I=function(n){return $$(Vx("$$"),n,"input")},n.T=function(n){return $$(Vx("$$"),n,"textarea")},n.div=function(n){return $$(Vx("$$"),n,"div")},n.divw=function(n){return $$(Vx("$$"),n,"div").set({isw:1})},n.divh=function(n){return $$(Vx("$$"),n,"div").set({ish:1})},n.child=function(n){return n=Els(n),fos(n,n=>{for(var t=[],e=n.childNodes,r=["script","style"],s=0;s<e.length;s++){var o=e[s];1==o.nodeType&&-1==r.indexOf(o.tagName.toLowerCase())&&t.push(o)}return t})},n.link_funs=function(n,t,e){return n[e]=function(e){return arguments.callee.vx=n,e=vs.V(e)?e:{},e.live&&(e=$$.set_netLive(e)),t(e,Els(n.sgs),n)},n},n.set_netLive=function(n){n.live=n.live||{};var t=["bc","color","ring"];for(var e of fo(n.live))n[e.k]=e.v;for(var e of fo(n))vs.has(t,e.k)&&(n.live[e.k]=e.v);return n},n.funs_inc=function(n,t,e){return vs.jq(e.sgs)&&(e.sgs=[e.sgs[n]]),e},n.funs_get=function(n,t,e){var r={},s=arguments.callee;if(t.length>1)return fos(t,t=>{s(n,t,e)}),e;if(0==t.length)return e;vs.str(n)&&(n=[n]);var o=$(t[0]);for(var i of fo(n))"name"==i.k?r.name=o.attr("id"):"bc"==i.k?r.bc=tohex(o.css("backgroundColor")):"color"==i.k?r.color=tohex(o.css("color")):"alpha"==i.k?r.alpha=o.css("opacity"):"ring"==i.k?r.ring=o.css("borderRadius"):"w"==i.k?r.w=o.css("width"):"h"==i.k?r.h=o.css("height"):"font"==i.k?r.font=o.css("font").split(" ")[1]:"fontsize"==i.k?r.fontsize=o.css("fontSize"):"Top"==i.k?r.Top=o.css("position"):"center"==i.k?r.center=o.css("textAlign"):"parent"==i.k?r.parent=o.parent():r[i.k]=st.tohex(o.attr(i.k))||st.tohex(o.css(i.k));return r},n.funs_set=function(n,t,e){var r=arguments.callee;if(0==len(n))return e;if(t.length>1)return fos(t,t=>{r(n,[t],e)}),e;if(0==t.length)return e;var s=t[0];if(n.style&&(s.style.cssText=n.style),n.parent=El(n.parent),n.before=El(n.before),n.after=El(n.after),n.before&&n.before.parentNode.insertBefore(s,n.before),n.after&&n.after.parentNode.insertBefore(s,n.after.nextSibling),n.parent)if(vs.V(n.insert)){var o=$$.child(n.parent);n.insert<0&&(n.insert=o.length+n.insert+1),n.parent.insertBefore(s,o[n.insert])}else n.parent&&n.parent.appendChild(s);return n.str&&(vs.I(s)?s.value=n.str:vs.B(s)?s.textContent=n.str:s.innerHTML=n.str),vs.V(n.name)&&(s.id=st.start(n.name,"#")?st(n.name,1):n.name),n.Top&&(s.style.position="fixed"),vs.V(n.left)&&(s.style.left=nm.pxper(n.left)),vs.V(n.top)&&(s.style.top=nm.pxper(n.top)),vs.V(n.right)&&(s.style.right=nm.pxper(n.right)),vs.V(n.bottom)&&(s.style.bottom=nm.pxper(n.bottom)),vs.V(n.center)&&(s.style.textAlign="center"),vs.V(n.align)&&(s.style.textAlign=n.align),vs.V(n.src)&&(s.src=n.src),vs.V(n.margin)&&(s.style.margin=nm.pxper(n.margin)),vs.V(n.marginl)&&(s.style.marginLeft=nm.pxper(n.marginl)),vs.V(n.marginr)&&(s.style.marginRight=nm.pxper(n.marginr)),vs.V(n.margint)&&(s.style.marginTop=nm.pxper(n.margint)),vs.V(n.marginb)&&(s.style.marginBottom=nm.pxper(n.marginb)),vs.V(n.marginw)&&(s.style.marginLeft=s.style.marginRight=nm.pxper(n.marginw)),vs.V(n.marginh)&&(s.style.marginTop=s.style.marginBottom=nm.pxper(n.marginh)),vs.V(n.padding)&&(s.style.padding=nm.pxper(n.padding)),vs.V(n.paddingl)&&(s.style.paddingLeft=nm.pxper(n.paddingl)),vs.V(n.paddingr)&&(s.style.paddingRight=nm.pxper(n.paddingr)),vs.V(n.paddingt)&&(s.style.paddingTop=nm.pxper(n.paddingt)),vs.V(n.paddingb)&&(s.style.paddingBottom=nm.pxper(n.paddingb)),vs.V(n.paddingw)&&(s.style.paddingLeft=s.style.paddingRight=nm.pxper(n.paddingw)),vs.V(n.paddingh)&&(s.style.paddingTop=s.style.paddingBottom=nm.pxper(n.paddingh)),vs.V(n.ring)&&(s.style.borderRadius=nm.pxper(n.ring)),vs.V(n.ringl)&&(s.style.borderTopLeftRadius=nm.pxper(n.ringl),s.style.borderBottomLeftRadius=nm.pxper(n.ringl)),vs.V(n.ringr)&&(s.style.borderTopRightRadius=nm.pxper(n.ringr),s.style.borderBottomRightRadius=nm.pxper(n.ringr)),vs.V(n.ringt)&&(s.style.borderTopLeftRadius=nm.pxper(n.ringt),s.style.borderTopRightRadius=nm.pxper(n.ringt)),vs.V(n.ringb)&&(s.style.borderBottomLeftRadius=nm.pxper(n.ringb),s.style.borderBottomRightRadius=nm.pxper(n.ringb)),vs.V(n.border)&&(1==st.count(n.border," ")&&(s.style.border="solid "+n.border),2==st.count(n.border," ")&&(s.style.border=n.border)),vs.V(n.w)&&(s.style.width=nm.pxper(n.w)),vs.V(n.h)&&(s.style.height=nm.pxper(n.h)),vs.V(n.zIndex)&&(s.style.zIndex=n.zIndex),vs.V(n.font)&&(s.style.fontFamily=n.font),vs.V(n.fontsize)&&(s.style.fontSize=nm.pxper(n.fontsize)),(vs.V(n.ish)||vs.V(n.isw))&&(s.style.display="flex"),vs.V(n.isw)&&(s.style.flexDirection="row"),vs.V(n.ish)&&(s.style.flexDirection="column"),vs.V(n.spacing)&&(s.style.gap=nm.pxper(n.spacing)),vs.V(n.color)&&(s.style.color=n.color),vs.V(n.bc)&&(s.style.backgroundColor=n.bc),vs.V(n.alpha)&&(s.style.opacity=n.alpha),vs.V(n.click)&&(s.onclick=n.click),vs.V(n.dblclick)&&(s.ondblclick=n.dblclick),vs.V(n.rightClick)&&(s.oncontextmenu=n.rightClick),vs.V(n.move)&&(s.onmousemove=n.move),vs.V(n.fpt)&&n.fpt(),vs.V(n.press)&&(s.onmousedown=(()=>{s.sspress=s.style.cssText,r(n.press,[s],e)}),s.onmouseup=(()=>{s.style.cssText=s.sspress})),vs.V(n.hover)&&(s.onmouseover=(()=>{s.sshover=s.style.cssText,r(n.hover,[s],e)}),s.onmouseout=(()=>{s.style.cssText=s.sshover})),e},n._change=function(n,t,e,r,s){vse().int(e).str(r).out(),vs.$$(n)&&(n=n.sgs),n=lis(n),$$$();var o=0;"add"==r?(fos(n,n=>{s&&fos($(n).get(),n=>{(-1==e||e>0&&o<e)&&(o++,t(n,o))})}),$$$.add(n,n=>{(-1==e||e>0&&o<e)&&(o++,t(n,o))})):"de"==r&&$$$.de(n,n=>{(-1==e||e>0&&o<e)&&(o++,t(n,o))})},n.hasborn=function(n,t,e){$$._change(n,t,e||1,"add",!0)},n.hasborns=function(n,t,e){$$._change(n,t,e||-1,"add",!0)},n.creat=function(n,t,e){$$._change(n,t,vs.num(e)?e:1,"add",!1)},n.creats=function(n,t,e){$$._change(n,t,vs.num(e)?e:-1,"add",!1)},n.remove=function(n,t,e){$$._change(n,t,e||1,"de",!1)},n.removes=function(n,t,e){$$._change(n,t,e||-1,"de",!1)},n.one=function(n,t,e){$$.on(n,t,e,1)},n.two=function(n,t,e){$$.on(n,t,e,2)},n.on=function(n,t,e,r){function s(n){var t=lis.Eli(o,El(n.target));-1==t?(o.push(n.target),i.push(1),t=o.length-1):i[t]=i[t]+1,(-1==r||i[t]<=r)&&e(n.target,i[t])}if("hasborn"==t)return $$.hasborn(n,e,r);if("hasborns"==t)return $$.hasborns(n,e,r);vs.$$(n)&&(n=n.sgs),n=lis(n),r=vs.num(r)?r:-1,t="creat"==t?"DOMNodeInserted":t,t="remove"==t?"DOMNodeRemoved":t;var o=[],i=[];fos(n,n=>{vs.str(n)?$(document).on(t,n,n=>{s(n)}):$(n).on(t,n=>{s(n)})})},n.do=function(n,t){vs.$$(n)&&(n=n.sgs),"dblclick"==t&&$(n).dblclick(),"rightClick"==t&&$(n).contextmenu(),"move"==t&&$(n).mousemove(),"down"==t&&$(n).mousedown(),"up"==t&&$(n).mouseup(),"hover"==t&&$(n).mouseover(),"click"==t&&$(n).click()},n.key=function(n,t,e){n=El(n),e=e||"keydown";var r=function(t){n.value+=t.key};n.addEventListener(e,r,!1);var s={key:t,code:"",location:0,repeat:!1,isComposing:!1},o=new KeyboardEvent(e,s);n.dispatchEvent(o),n.removeEventListener(e,r,!1)},n.listen=function(n,t){var e=new MutationObserver(function(n){n.forEach(function(n){t(n.target)})});vs.str(n)&&(n=$(n)),vs.$$(n)&&(n=n.sgs),vs.El(n)&&(n=$(n)),n.each(function(){e.observe(this,{attributes:!0,attributeFilter:["style"]})})},n}(),window.$$$=function(){var n=function(){att(n,"being_observer")||(n.being_observer=!0,n.mation_fpt=[],n.add_fpt=[],n.add_ss=[],n.de_fpt=[],n.de_ss=[],n.other_fpt=[],n.observer=new MutationObserver(t=>{t.forEach(t=>{if(fos(n.mation_fpt,n=>{n(t)}),"childList"===t.type){for(let e of t.addedNodes)fos.i(n.add_ss,(t,r)=>{vs.El(e)&&vs.elhas(e,t)&&n.add_fpt[r](e)});for(let e of t.removedNodes)fos.i(n.de_ss,(t,r)=>{vs.El(e)&&vs.elhas(e,t)&&n.de_fpt[r](e)})}else fos(n.other_fpt,n=>{n(t)})})}),n.observer.observe(document,{childList:!0,subtree:!0}))};return n.test=function(){n.add("button",ww)},n.add=function(t,e){vse().call(e).out(),n.add_ss.push(t),n.add_fpt.push(e)},n.de=function(t,e){vse().call(e).out(),n.de_ss.push(t),n.de_fpt.push(e)},n.mation=function(t){vse().call(t).out(),n.mation_fpt.push(t)},n.other=function(t){vse().call(t).out(),n.other_fpt.push(t)},n.deadd=function(t){var e=lis.geti(n.add_ss,t);co.dei(n.add_fpt,e),co.dei(n.add_ss,e)},n.dede=function(t){var e=lis.geti(n.de_ss,t);co.dei(n.de_fpt,e),co.dei(n.de_ss,e)},n.demation=function(t){co.dei(n.mation_fpt,lis.geti(n.mation_fpt,t))},n.deother=function(t){co.dei(n.other_fpt,lis.geti(n.other_fpt,t))},n}(),window.load=function(){var n=function(n){var t=document.createElement("script");t.src=n,document.head.appendChild(t)};return n.jq=function(n){var t=document.createElement("script");t.type="text/javascript",t.src="https://code.jquery.com/jquery-3.7.1.min.js",document.head.appendChild(t),n&&(t.onload=function(){n()})},n.all=function(n){window.onload=function(){n()}},n}(),console.log("███████████████ ay.js █","2023-12-17 14:33 ","      █ 版本时间 ███"),console.log("███████████████ ay.js █",time.now(),"█ 加载完成 ███");
