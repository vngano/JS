function _____________ay_开始(){}function _____________原生元素(){}function _____________jQuery_元素(){}function _____________以下正文(){}(function $_ay_$(){function _____________语法(){}function _____________数据(){}function _____________功能(){}function ___test(){}var __;$_=(__=function(){},__.c=45,__.a=function(){},__),function _____________副命名(){Doc=document,print=function(n){console.log(n)},out=function(n){console.log(n)},str=function(n){return String(n)},type=function(n,t){return typeof n},int=function(n){return parseInt(n)},float=function(n){return parseFloat(n)},hasatt=function(n,t){return n.hasOwnProperty(t)},copy=function(n){return vs.call(n)?n.bind({}):JSON.parse(JSON.stringify(n))},rr=function(ss){return eval(ss)},reg=function(n,t){return new RegExp(n,t)},len=function(n){return void 0!==n.length?n.length:void 0!==n.size?n.size:vs.dic(n)?Object.keys(n).length:void 0},cname=function(n,t){if(n)return void 0!==t&&(n.cname=t),n.cname},dir=function(obj){return vs.str(obj)?Object.getOwnPropertyNames(eval(obj)):Object.getOwnPropertyNames(obj)}}(),vs=function(){var n=function(){};return n.T=function(n){return!0===n},n.F=function(n){return!1===n},n.N=function(n){return void 0===n},n.uN=function(n){return void 0!==n},n.int=function(n){return int(n)===n},n.float=function(n){return Number(n)===n&&n%1!=0},n.num=function(n){return int(n)===n||float(n)===n},n.str=function(n){return str(n)===n},n.bool=function(n){return!0===n||!1===n},n.lis=function(n){return Array.isArray(n)},n.cname=function(n,t){return cnames=cname(n)?cname(n):"",vs.has(cnames.split(":"),t)},n.vx=function(n){return vs.cname(n,"vx")},n.has=function(n,t){return vs.str(n)?-1!==n.indexOf(t):vs.lis(n)?-1!==n.indexOf(t):vs.dic(n)?n.hasOwnProperty(t):!!vs.set(n)&&n.has(t)},n.dic=function(n){return null!==n&&"object"==typeof n&&n.constructor===Object},n.set=function(n){return null!==n&&"object"==typeof n&&n.constructor===Set},n.fn=function(n){return"function"==typeof n},n.fnd=function(n){},n.call=function(n){return"function"==typeof n},n.all=function(n){},n.per=function(n){var t=new RegExp("^-?(\\d+.)?\\d+%$");return t.test(n)},n.px=function(n){var t=new RegExp("^-?\\d+px$");return t.test(n)},n.reg=function(n){return n instanceof RegExp},n.bit=function(n){},n.haszh=function(n){var t=new RegExp("[\\u4E00-\\u9FFF]+","g");return t.test(n)},n.being=function(n){},n.El=function(n){return n instanceof HTMLElement},n.div=function(n){return n instanceof HTMLDivElement},n.jq=function(n){return n instanceof jQuery},n.B=function(n){return n instanceof HTMLButtonElement},n.I=function(n){return n instanceof HTMLInputElement},n.T=function(n){return n instanceof HTMLTextAreaElement},n}(),ty=function(){var n=function(n){var t=arg(arguments,1);try{return n.apply(this,t)}catch(n){ww(n)}};return n.a=function(){},n}(),af=function(){var n=function(n,t,e){return n?t:e||null};return n.cd=function(n,t,e){return e=e||null,n?"function"==typeof t?t():t:"function"==typeof e?e():e},n.d=function(n,t){return n&&"function"==typeof t?t:null},n}(),fo=function(){var n=function(n){return{[Symbol.iterator](){let t=0,e=vs.str(n)?n.split(""):lis(n);return{next:()=>{if(t<len(e)){let r={value:{k:e[t++],i:t-1},done:!1};return vs.dic(n)&&(r.value.v=e[t-1]),r}return{done:!0}}}}}};return n}(),fn=function(){var n=function(){var n=function(n){if(arguments.callee.args){var t=lis.add(arg(arguments),arg(arguments.callee.args));return arguments.callee.fpt.apply(this,t)}return arguments.callee.fpt=n,arguments.callee.args=arg(arguments,1),arguments.callee};return n.apply(this,arguments)};return n}(),fns=void 0,fnd=void 0,cons=void 0,st=function(){var n=function(n,t,e){return n=String(n),vs.N(t)&&vs.N(e)?n:(t=t||0,e=e||n.length,t=t<0?n.length+t:t,e=e<0?n.length+e:e,n.slice(t,e))};return n.cut=function(){},n.countstr=function(n){},n.countreg=function(n){},n.end=function(n,t){return n.endsWith(t)},n.start=function(n,t){return n.startsWith(t)},n.add=function(n,t,e){return n.slice(0,t)+e+n.slice(t)},n.sub=function(n,t,e){e=e||"";var r=vs.reg(t)?t:new RegExp(t,"m");return r=r.multiline?r:new RegExp(r.source,"m"),n.replace(r,e)},n.rep=function(n,t,e){return e=e||"",vs.reg(t)&&(t=reg.multiline?t:new RegExp(t,"m")),n.replace(t,e)},n.find=function(n,t){var e=vs.reg(t)?t:new RegExp(t,"m");e=e.multiline?e:new RegExp(e.source,"m");var r=e.exec(n);return r?r[0]:null},n.findw=function(n){},n.rfind=function(n,t){},n.findall=function(n,t){var e=vs.reg(t)?t:new RegExp(t,"gm");e=e.global&&e.multiline?e:new RegExp(e.source,"gm");const r=n.match(e);return r||[]},n}(),nm=void 0,lis=function(){var n=function(n,t,e){return vs.lis(n)||(n=vs.dic(n)?Object.values(n):vs.set(n)?Array.from(n):[n]),t=t||0,e=e||n.length,t=t<0?n.length+t:t,e=e<0?n.length+e:e,n.slice(t,e)};return n.add=function(){for(var n=[],t=0;t<arguments.length;t++)n=n.concat(arguments[t]);return n},n}(),dic=void 0,to=void 0,time=function(){var n=function(n){return n?time.now(n):Date.now()/1e3};return n.now=function(n){n=n||"YYYY-MM-DD hh:mm:ss.SSS";const t=new Date,e=t.getFullYear(),r=(t.getMonth()+1).toString().padStart(2,"0"),o=t.getDate().toString().padStart(2,"0"),u=t.getHours().toString().padStart(2,"0"),i=t.getMinutes().toString().padStart(2,"0"),c=t.getSeconds().toString().padStart(2,"0"),s=t.getMilliseconds().toString().padStart(3,"0");let f=n;return f=f.replace(/(YYYY)|(yyyy)/,e),f=f.replace(/MM/,r),f=f.replace(/(DD)|(dd)/,o),f=f.replace(/hh/,u),f=f.replace(/mm/,i),f=f.replace(/ss/,c),f=f.replace(/SSS/,s),f},n.sleep=function(n){for(var t=Date.now();Date.now()-t<n;);},n}(),Vx=function(){var n=function(n,t){var e=function(n,t){return cname(arguments.callee,"vx"),n&&(arguments.callee[n]=t),arguments.callee}(n,t);return e.dir=function(){var n=new Set(Object.keys(this));return n.delete("dir"),n},e.nos=function(n,t){return this.hasOwnProperty(n)||(this[n]=t),this},e};return n}(),att=function(){var n=function(n,t){if(n.hasOwnProperty(t))return st.end(t,"()")?n[st(t,0,-2)]():n[t]};return n}(),arg=function(){var n=function(n,t,e){var r=[];for(var o of n)r.push(o);return lis(r,t,e)};return n}(),ww=function(n){var t=function(n){var t=vs.lis(n)?"Object:Array":type(n);for(var e of(console.log("███ ww_print:",time.now(),", 类型",t),arg(arguments)))console.log("  ",e)};return t}(),Vson=void 0,___test(7,8,3)})(),function(){var n;sg=(n=function(n,t,e,r){vs.lis(n)&&(n=$(n));var o=vs.vx(n)?n:void 0,u=vs.El(n)?n:void 0,i=vs.jq(n)?n:void 0;return o?(t=t||{},o.sgs=r||Doc.createElement(e),cname(o,cname(o)+":"+e),sg.link_funs(o,sg.funs_set,"set"),o.set(t),o):u?sg(Vx(),t||{},u.tagName.toLowerCase(),u):i?sg(Vx(),t||{},"jq",i):o},n.getEl=function(n){return vs.El(n)?n:vs.vx(n)?n.sgs:vs.jq(n)?n[0]:n},n.B=function(n){return sg(Vx(),n,"button")},n.I=function(n){return sg(Vx(),n,"input")},n.T=function(n){return sg(Vx(),n,"textarea")},n.div=function(n){return sg(Vx(),n,"div")},n.link_funs=function(n,t,e){return n[e]=function(e){return arguments.callee.vx=n,e?(vs.jq(n.sgs)?n.sgs.each(function(r,o){o=vs.vx(o)?o.sgs:o,t(e,o,n)}):t(e,n.sgs,n),n):n},n},n.funs_set=function(n,t,e){return n.parent=sg.getEl(n.parent),n.before=sg.getEl(n.before),n.after=sg.getEl(n.after),n.parent&&n.parent.appendChild(e.sgs),n.before&&n.before.parentNode.insertBefore(e.sgs,n.before),n.after&&n.after.parentNode.insertBefore(e.sgs,n.after.nextSibling),vs.I(t)?t.value=n.str:vs.uN(n.str)&&(t.innerHTML=n.str),vs.uN(n.name)&&(t.id=n.name),vs.uN(n.left)&&(t.style.left=str(n.left)+"px"),vs.uN(n.top)&&(t.style.top=str(n.top)+"px"),vs.uN(n.right)&&(t.style.right=str(n.right)+"px"),vs.uN(n.bottom)&&(t.style.bottom=str(n.bottom)+"px"),vs.uN(n.center)&&(t.style.textAlign="center"),vs.uN(n.w)&&(t.style.width=str(n.w)+"px"),vs.uN(n.h)&&(t.style.height=str(n.h)+"px"),n.Top&&(t.style.position="fixed"),vs.uN(n.bc)&&(t.style.backgroundColor=n.bc),vs.uN(n.bc)&&(t.onmouseout=function(){t.style.backgroundColor=n.bc}),vs.uN(n.bch)&&(t.onmouseover=function(){t.style.backgroundColor=n.bch}),vs.uN(n.bca)&&(t.onmousedown=function(){t.style.backgroundColor=n.bca}),vs.uN(n.bc)&&(t.onmouseup=function(){t.style.backgroundColor=n.bc}),vs.uN(n.click)&&(t.onclick=n.click),vs.uN(n.rightClick)&&(t.oncontextmenu=n.rightClick),vs.uN(n.move)&&(t.onmousemove=n.move),t.style.zIndex=n.index||"99",t.style.fontSize=n.fontsize||"16px",e},n)}(),function(){var n;$sg=(n=function(){},n.hasborn=function(n,t,e){e=vs.num(e)?e:1;var r=function(){(e<=5||0==e)&&t(e),e++};$(n).length>0&&r(),$(document).on("click",n,function(){r()})},n.hasborns=function(n,t,e){$sg.hasborn(n,t,e||0)},n.creat=function(n,t,e){e=vs.num(e)?e:1,1==e?$(document).one("DOMNodeInserted",n,function(){t(e)}):$(document).on("DOMNodeInserted",n,function(){(0==e||e<=5)&&t(e),e++})},n.creats=function(n,t,e){$sg.creat(n,t,e||0)},n)}(),load=function(){var n=function(n){var t=document.createElement("script");t.src=n,document.head.appendChild(t)};return n.jq=function(n){var t=document.createElement("script");t.type="text/javascript",t.src="https://code.jquery.com/jquery-3.7.0.min.js",document.head.appendChild(t),n&&(t.onload=function(){n()})},n.all=function(n){window.onload=function(){n()}},n}(),console.log("███████████████ ay.js █","2023-08-09 10:10 ","      █ 版本时间 ███"),console.log("███████████████ ay.js █",time.now(),"█ 加载完成 ███");
