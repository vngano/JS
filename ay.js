(function _lnk(){Doc=document,print=function(n){alert(n)},out=function(n){console.log(n)},str=function(n){return String(n)},type=function(n){return typeof n},int=function(n){return parseInt(n)},float=function(n){return parseFloat(n)},hasatt=function(n,t){return n.hasOwnProperty(t)},reg=function(n,t){return new RegExp(n,t)},rr=function(ss){return eval(ss)},copy=function(n){return vs.call(n)?n.bind({}):JSON.parse(JSON.stringify(n))},len=function(n){return void 0!==n.length?n.length:void 0!==n.size?n.size:vs.dic(n)?Object.keys(n).length:void 0},dir=function(obj){return vs.str(obj)?Object.getOwnPropertyNames(eval(obj)):Object.getOwnPropertyNames(obj)},cname=function(n,t){if(n)return void 0!==t&&(n.cname=t),n.cname},tohex=function(n,t,e,r){if(vs.str(n)&&void 0===t)return n=st.find(n,/(?<=\()[^\(\)]*/),n=st.rep(n,/ /,"").split(","),n=n.map(function(n){return nm(n)}),tohex.apply(null,n);if(vs.num(n)&&vs.num(t)&&vs.num(e)){const o=n.toString(16).padStart(2,"0"),s=t.toString(16).padStart(2,"0"),i=e.toString(16).padStart(2,"0");let c="";return void 0!==r&&(c=Math.round(255*r).toString(16).padStart(2,"0")),`#${o}${s}${i}${c}`}},El=function(n){return vs.El(n)?n:vs.vx(n)?El(n.sgs):vs.jq(n)?n[0]:void 0}})(),function(){function n(){}var t;$_=(t=function(){},t.c=45,t.a=function(){},t),vs=function(){var n=function(n){};return n.T=function(n){return!0===n},n.F=function(n){return!1===n},n.N=function(n){return void 0===n},n.uN=function(n){return void 0!==n},n.int=function(n){return int(n)===n},n.float=function(n){return Number(n)===n&&n%1!=0},n.num=function(n){return int(n)===n||float(n)===n},n.str=function(n){return str(n)===n},n.bool=function(n){return!0===n||!1===n},n.lis=function(n){return Array.isArray(n)},n.Y=function(n){return!(["",0,null,void 0,!1].indexOf(n)>-1)&&(n instanceof Map||n instanceof Set?0!==n.size:"object"!=typeof n||0!==Object.keys(n).length)},n.V=function(n){return vs.Y(n)||0===n},n.cname=function(n,t){return cnames=cname(n)?cname(n):"",vs.has(cnames.split(":"),t)},n.vx=function(n){return vs.cname(n,"vx")},n.$$=function(n){return vs.cname(n,"$$")},n.has=function(n,t){return vs.str(n)?-1!==n.indexOf(t):vs.lis(n)?-1!==n.indexOf(t):vs.dic(n)?n.hasOwnProperty(t):!!vs.set(n)&&n.has(t)},n.dic=function(n){return null!==n&&"object"==typeof n&&n.constructor===Object},n.set=function(n){return null!==n&&"object"==typeof n&&n.constructor===Set},n.fn=function(n){return"function"==typeof n},n.fnd=function(n){},n.call=function(n){return"function"==typeof n},n.all=function(n){},n.per=function(n){var t=new RegExp("^-?(\\d+.)?\\d+%$");return t.test(n)},n.px=function(n){var t=new RegExp("^-?\\d+px$");return t.test(n)},n.reg=function(n){return n instanceof RegExp},n.bit=function(n){},n.haszh=function(n){var t=new RegExp("[\\u4E00-\\u9FFF]+","g");return t.test(n)},n.being=function(n){},n.El=function(n){return n instanceof HTMLElement},n.div=function(n){return n instanceof HTMLDivElement},n.jq=function(n){return n instanceof jQuery},n.B=function(n){return n instanceof HTMLButtonElement},n.I=function(n){return n instanceof HTMLInputElement},n.T=function(n){return n instanceof HTMLTextAreaElement},n}(),ty=function(){var n=function(n){var t=arg(arguments,1);try{return n.apply(this,t)}catch(n){ww(n)}};return n.a=function(){},n}(),af=function(){var n=function(n,t,e){return n?t:e||null};return n.cd=function(n,t,e){return e=e||null,n?"function"==typeof t?t():t:"function"==typeof e?e():e},n.d=function(n,t){return n&&"function"==typeof t?t:null},n}(),fo=function(){var n=function(n){return{[Symbol.iterator](){let t=0,e=vs.str(n)?n.split(""):lis(n);return{next:()=>{if(t<len(e)){let r={value:{k:e[t++],i:t-1},done:!1};return vs.dic(n)&&(r.value.v=n[e[t-1]]),r}return{done:!0}}}}}};return n}(),fn=function(){var n=function(){var n=function(n){if(arguments.callee.args){var t=lis.add(arg(arguments),arg(arguments.callee.args));return arguments.callee.fpt.apply(this,t)}return arguments.callee.fpt=n,arguments.callee.args=arg(arguments,1),arguments.callee};return n.apply(this,arguments)};return n}(),fns=void 0,fnd=void 0,cons=void 0,st=function(){var n=function(n,t,e){return n=String(n),vs.N(t)&&vs.N(e)?n:(t=t||0,e=e||n.length,t=t<0?n.length+t:t,e=e<0?n.length+e:e,n.slice(t,e))};return n.cut=function(){},n.count=function(n,t){var e=new RegExp(t,"g");return n&&n.match(e).length},n.end=function(n,t){return n&&n.endsWith(t)},n.start=function(n,t){return n&&n.startsWith(t)},n.add=function(n,t,e){return n.slice(0,t)+e+n.slice(t)},n.sub=function(n,t,e){e=e||"";var r=vs.reg(t)?t:new RegExp(t,"mg");return r=r.multiline?r:new RegExp(r.source,"mg"),n.replace(r,e)},n.rep=function(n,t,e){return e=e||"",vs.reg(t)&&(t=reg.multiline?t:new RegExp(t,"mg")),n.replace(t,e)},n.find=function(n,t){var e=vs.reg(t)?t:new RegExp(t,"m");e=e.multiline?e:new RegExp(e.source,"m");var r=e.exec(n);return r?r[0]:null},n.findw=function(n){},n.rfind=function(n,t){},n.findall=function(n,t){var e=vs.reg(t)?t:new RegExp(t,"gm");e=e.global&&e.multiline?e:new RegExp(e.source,"gm");const r=n.match(e);return r||[]},n.tohex=function(n){if(!n)return n;var t=/rgba?\((\d+),\s*(\d+),\s*(\d+)(,\s*(\d+))?\)/g;return n=st.rep(n,t,n=>tohex(n)),n},n}(),nm=function(){var n=function(n){return vs.num(n)?n:Number(n)};return n.per=function(n){return str(nm(n))+"%"},n.px=function(n){return n=str(n),n.indexOf("px")>-1?n:n+"px"},n}(),lis=function(){var n=function(n,t,e){return vs.lis(n)||(n=vs.dic(n)?Object.keys(n):vs.set(n)?Array.from(n):[n]),t=t||0,e=e||n.length,t=t<0?n.length+t:t,e=e<0?n.length+e:e,n.slice(t,e)};return n.add=function(){for(var n=[],t=0;t<arguments.length;t++)n=n.concat(arguments[t]);return n},n.i=function(n,t,e){return t<0&&(t=len(n)+t),void 0===e?n[t]:(n[t]=e,n)},n}(),dic=void 0,to=void 0,time=function(){var n=function(n){return n?time.now(n):Date.now()/1e3};return n.now=function(n){n=n||"YYYY-MM-DD hh:mm:ss.SSS";const t=new Date,e=t.getFullYear(),r=(t.getMonth()+1).toString().padStart(2,"0"),o=t.getDate().toString().padStart(2,"0"),s=t.getHours().toString().padStart(2,"0"),i=t.getMinutes().toString().padStart(2,"0"),c=t.getSeconds().toString().padStart(2,"0"),u=t.getMilliseconds().toString().padStart(3,"0");let a=n;return a=a.replace(/(YYYY)|(yyyy)/,e),a=a.replace(/MM/,r),a=a.replace(/(DD)|(dd)/,o),a=a.replace(/hh/,s),a=a.replace(/mm/,i),a=a.replace(/ss/,c),a=a.replace(/SSS/,u),a},n.sleep=function(n){for(var t=Date.now();Date.now()-t<n;);},n}(),Net=function(){var n=function(n,t,e,r){var o=function(){var n=arguments.callee;return n.socket=new WebSocket("ws://localhost:"+n.Port+"/websocket"),n.socket.addEventListener("open",()=>{console.log("███ WebSocket 连接已打开, 端口:",n.Port),n.Open&&n.Open(n)}),n.socket.addEventListener("message",t=>{var e=t.data;try{e=JSON.parse(e)}catch(n){}n.islnk()&&n.Doing(o,e)}),n.socket.addEventListener("close",()=>{console.log("███ WebSocket 连接已关闭, 端口:",n.Port),n.Close&&n.Close(n)}),n};return o.send=function(n){vs.dic(n)&&(n=JSON.stringify(n)),o.islnk()&&o.socket.send(n)},o.close=function(){o.islnk()&&o.socket.close()},o.lnk=function(){o.islnk()||o()},o.islnk=function(){return 1===o.socket.readyState},o.Port=n,o.Doing=t,o.Open=e,o.Close=r,o()};return n}(),Vx=function(){var n=function(n){var t=function(n){return n=n?":"+n:"",cname(arguments.callee,"vx"+n),arguments.callee}(n);return t.dir=function(){var n=new Set(Object.keys(this));return n.delete("dir"),n},t.nos=function(n,t){return this.hasOwnProperty(n)||(this[n]=t),this},t};return n}(),att=function(){var n=function(n,t){if(n.hasOwnProperty(t))return st.end(t,"()")?n[st(t,0,-2)]():n[t]};return n}(),arg=function(){var n=function(n,t,e){var r=[];for(var o of n)r.push(o);return lis(r,t,e)};return n}(),ww=function(n){var t=function(n){var t=vs.lis(n)?"Object:Array":type(n);for(var e of(console.log("███ ww_print:",time.now(),", 类型",t),arg(arguments)))console.log("  ",e)};return t}(),Vson=void 0,n(7,8,3)}(),$$=function(){var n=function(n,t,e,r){vs.lis(n)&&(n=$(n)),vs.str(n)&&(n=$(n));var o=vs.vx(n)?n:void 0,s=vs.El(n)?n:void 0,i=vs.jq(n)?n:void 0;return i?$$(Vx("$$"),t,"jq",i):s?$$(Vx("$$"),t,s.tagName.toLowerCase(),s):o?(t=t||{},vs.$$(o)&&o.sgs&&(r=o.sgs),o.sgs=r||Doc.createElement(e),e&&cname(o,cname(o)+":"+e),$$.link_funs(o,$$.funs_set,"set"),$$.link_funs(o,$$.funs_get,"get"),$$.link_funs(o,$$.funs_inc,"inc"),o.set(t,o.sgs,o),o):void 0};return n.B=function(n){return $$(Vx("$$"),n,"button")},n.I=function(n){return $$(Vx("$$"),n,"input")},n.T=function(n){return $$(Vx("$$"),n,"textarea")},n.div=function(n){return $$(Vx("$$"),n,"div")},n.divw=function(n){return $$(Vx("$$"),n,"div").set({isw:1})},n.child=function(n){n=vs.$$(n)?n.sgs:n,n=vs.jq(n)?n[0]:n;for(var t=n.childNodes,e=[],r=["script","style"],o=0;o<t.length;o++){var s=t[o];1==s.nodeType&&-1==r.indexOf(s.tagName.toLowerCase())&&e.push(s)}return e},n.link_funs=function(n,t,e){return n[e]=function(e){return arguments.callee.vx=n,e=vs.V(e)?e:{},e.live&&(e=$$.set_netLive(e)),t(e,n.sgs,n)},n},n.set_netLive=function(n){n.live=n.live||{};var t=["bc","color","ring"];for(var e of fo(n.live))n[e.k]=e.v;for(var e of fo(n))vs.has(t,e.k)&&(n.live[e.k]=e.v);return n},n.funs_inc=function(n,t,e){return vs.jq(t)&&(e.sgs=t[n]),e},n.funs_get=function(n,t,e){var r={},o=arguments.callee;if(vs.jq(t))return o(n,t[0],e);var s=$(t);for(var i of fo(n))"name"==i.k?r.name=s.attr("id"):"bc"==i.k?r.bc=tohex(s.css("backgroundColor")):"color"==i.k?r.color=tohex(s.css("color")):"alpha"==i.k?r.alpha=s.css("opacity"):"ring"==i.k?r.ring=s.css("borderRadius"):"w"==i.k?r.w=s.css("width"):"h"==i.k?r.h=s.css("height"):"font"==i.k?r.font=s.css("font").split(" ")[1]:"fontsize"==i.k?r.fontsize=s.css("fontSize"):"Top"==i.k?r.Top=s.css("position"):"center"==i.k?r.center=s.css("textAlign"):r[i.k]=st.tohex(s.attr(i.k))||st.tohex(s.css(i.k));return r},n.funs_set=function(n,t,e){var r=arguments.callee;if(n){if(vs.jq(t))return 1==e.sgs.length?r(n,t[0],e):(e.sgs.each(function(t,o){r(n,o,e)}),e);if(n.style&&(t.style.cssText=n.style),n.parent=El(n.parent),n.before=El(n.before),n.after=El(n.after),n.before&&n.before.parentNode.insertBefore(e.sgs,n.before),n.after&&n.after.parentNode.insertBefore(e.sgs,n.after.nextSibling),n.parent)if(vs.V(n.insert)){var o=$$.child(n.parent);n.insert<0&&(n.insert=o.length+n.insert+1),n.parent.insertBefore(e.sgs,o[n.insert])}else n.parent&&n.parent.appendChild(e.sgs);return n.str&&(vs.I(t)?t.value=n.str:vs.B(t)?t.textContent=n.str:t.innerHTML=n.str),vs.V(n.name)&&(t.id=st.start(n.name,"#")?st(n.name,1):n.name),vs.V(n.left)&&(t.style.left=nm.px(n.left)),vs.V(n.top)&&(t.style.top=nm.px(n.top)),vs.V(n.right)&&(t.style.right=nm.px(n.right)),vs.V(n.bottom)&&(t.style.bottom=nm.px(n.bottom)),vs.V(n.center)&&(t.style.textAlign="center"),vs.V(n.align)&&(t.style.textAlign=n.align),vs.V(n.margin)&&(t.style.margin=n.margin),vs.V(n.padding)&&(t.style.padding=n.padding),vs.V(n.src)&&(t.src=n.src),vs.V(n.ring)&&(vs.px(n.ring)||vs.per(n.ring)?t.style.borderRadius=n.ring:t.style.borderRadius=nm.px(n.ring)),vs.V(n.border)&&(1==st.count(n.border," ")&&(t.style.border="solid "+n.border),2==st.count(n.border," ")&&(t.style.border=n.border)),n.Top&&(t.style.position="fixed"),vs.V(n.w)&&(t.style.width=nm.px(n.w)),vs.V(n.h)&&(t.style.height=nm.px(n.h)),vs.V(n.zIndex)&&(t.style.zIndex=n.zIndex),vs.V(n.font)&&(t.style.fontFamily=n.font),vs.V(n.fontsize)&&(t.style.fontSize=nm.px(n.fontsize)),vs.V(n.isw)&&(t.style.flexDirection="row"),vs.V(n.ish)&&(t.style.flexDirection="column"),vs.V(n.color)&&(t.style.color=n.color),vs.V(n.bc)&&(t.style.backgroundColor=n.bc),vs.V(n.alpha)&&(t.style.opacity=n.alpha),vs.V(n.click)&&(t.onclick=n.click),vs.V(n.dblclick)&&(t.ondblclick=n.dblclick),vs.V(n.rightClick)&&(t.oncontextmenu=n.rightClick),vs.V(n.move)&&(t.onmousemove=n.move),vs.V(n.fpt)&&n.fpt(),vs.V(n.live)&&(t.onmouseout=function(){r(n.live,t)}),vs.V(n.down)&&(t.onmousedown=function(){r(n.down,t)}),vs.V(n.hover)&&(t.onmouseover=function(){r(n.hover,t)},t.onmouseup=function(){r(n.hover,t)}),e}},n.hasborn=function(n,t,e){vs.$$(n)&&(n=n.sgs);var r=1;e=vs.num(e)?e:1,$(n).length>0&&(t(1==e?$(n):$(n,r)),r++),(0==e||r<=e)&&$$.on(n,"DOMNodeInserted",t,r)},n.hasborns=function(n,t,e){$$.hasborn(n,t,e||0)},n.on=function(n,t,e,r,o){if(vs.$$(n)&&(n=n.sgs),"hasborn"==t)return $$.hasborn(n,e,r);t="creat"==t?"DOMNodeInserted":t,t="remove"==t?"DOMNodeRemoved":t,r=vs.num(r)?r:0,o=vs.num(o)?o:1,1==r?$(document).one(t,n,function(n){e($(n.target))}):$(document).on(t,n,function(n){(0==r||o<=r)&&e($(n.target,o)),o++})},n.one=function(n,t,e){$$.on(n,t,e,1)},n.two=function(n,t,e){$$.on(n,t,e,2)},n.creat=function(n,t,e){$$.on(n,"DOMNodeInserted",t,vs.num(e)?e:1)},n.creats=function(n,t,e){$$.on(n,"DOMNodeInserted",t,vs.num(e)?e:0)},n.remove=function(n,t,e){$$.on(n,"DOMNodeRemoved",t,vs.num(e)?e:1)},n.removes=function(n,t,e){$$.on(n,"DOMNodeRemoved",t,vs.num(e)?e:0)},n.do=function(n,t){vs.$$(n)&&(n=n.sgs),"dblclick"==t&&$(n).dblclick(),"rightClick"==t&&$(n).contextmenu(),"move"==t&&$(n).mousemove(),"down"==t&&$(n).mousedown(),"up"==t&&$(n).mouseup(),"hover"==t&&$(n).mouseover(),"click"==t&&$(n).click()},n.key=function(n,t,e){n=El(n),e=e||"keydown";var r=function(t){n.value+=t.key};n.addEventListener(e,r,!1);var o={key:t,code:"",location:0,repeat:!1,isComposing:!1},s=new KeyboardEvent(e,o);n.dispatchEvent(s),n.removeEventListener(e,r,!1)},n.listen=function(n,t){var e=new MutationObserver(function(n){n.forEach(function(n){t(n.target)})});vs.str(n)&&(n=$(n)),vs.$$(n)&&(n=n.sgs),vs.El(n)&&(n=$(n)),n.each(function(){e.observe(this,{attributes:!0,attributeFilter:["style"]})})},n}(),load=function(){var n=function(n){var t=document.createElement("script");t.src=n,document.head.appendChild(t)};return n.jq=function(n){var t=document.createElement("script");t.type="text/javascript",t.src="https://code.jquery.com/jquery-3.7.0.min.js",document.head.appendChild(t),n&&(t.onload=function(){n()})},n.all=function(n){window.onload=function(){n()}},n}(),console.log("███████████████ ay.js █","2023-09-25 18:33 ","      █ 版本时间 ███"),console.log("███████████████ ay.js █",time.now(),"█ 加载完成 ███");
