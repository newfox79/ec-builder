var ie=Object.defineProperty,le=Object.defineProperties;var ce=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable;var I=(n,t,u)=>t in n?ie(n,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):n[t]=u,V=(n,t)=>{for(var u in t||(t={}))de.call(t,u)&&I(n,u,t[u]);if(q)for(var u of q(t))_e.call(t,u)&&I(n,u,t[u]);return n},j=(n,t)=>le(n,ce(t));import{o as i,c as h,a as p,d as C,u as L,b as d,w as l,e as v,t as k,f as r,g,h as x,i as pe,_ as R,j as M,k as H,l as U,r as T,F as S,m as fe,n as me,p as A,q as J,s as Y,v as w,x as he,y as ve,z as E,A as ye,C as ge,N as xe,B as $e,D as be,E as we,G as Ce,H as ke,I as Ee,J as Be,K as De,L as Se,M as Ae}from"./vendor.51bd39f7.js";const Ne=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function u(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(o){if(o.ep)return;o.ep=!0;const s=u(o);fetch(o.href,s)}};Ne();const Fe="modulepreload",K={},Le="/ec-builder/",O=function(t,u){return!u||u.length===0?t():Promise.all(u.map(e=>{if(e=`${Le}${e}`,e in K)return;K[e]=!0;const o=e.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":Fe,o||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),o)return new Promise((f,$)=>{a.addEventListener("load",f),a.addEventListener("error",$)})})).then(()=>t())},Me={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Oe=p("path",{d:"M21.706 5.291l-2.999-2.998A.996.996 0 0 0 18 2H6a.996.996 0 0 0-.707.293L2.294 5.291A.994.994 0 0 0 2 5.999V19c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5.999a.994.994 0 0 0-.294-.708zM6.414 4h11.172l.999.999H5.415L6.414 4zM4 19V6.999h16L20.002 19H4z",fill:"currentColor"},null,-1),ze=p("path",{d:"M15 12H9v-2H7v4h10v-4h-2z",fill:"currentColor"},null,-1),Pe=[Oe,ze];function qe(n,t){return i(),h("svg",Me,Pe)}var Ie={name:"bx-bx-archive",render:qe};const Ve={class:"flex items-center w-full space-x-6"},je={class:"block flex-grow whitespace-nowrap font-medium"},Re=v(" \u0414\u0430 "),He=v(" \u041D\u0435\u0442 "),Ue=v(' \u041E\u0442\u0432\u0435\u0442\u044C\u0442\u0435 \u043D\u0430 \u0432\u043E\u043F\u0440\u043E\u0441 \u0432\u044B\u0448\u0435 \u043D\u0430\u0436\u0430\u0432 \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443 "\u0414\u0430" \u0438\u043B\u0438 "\u041D\u0435\u0442" '),Te=C({props:{node:{required:!0,type:Object}},emits:["update:node"],setup(n,{emit:t}){const e=L(n,"node",t);return(o,s)=>{const a=R,f=M,$=H,c=U,y=W;return i(),h("div",null,[p("div",Ve,[p("h3",je,[d(a,null,{default:l(()=>[v(k(r(e).title),1)]),_:1})]),d($,null,{default:l(()=>[d(f,{size:"small",ghost:"",type:r(e).value===!0?"primary":"default",onClick:s[0]||(s[0]=_=>{r(e).value=!0,r(e).answer=""})},{default:l(()=>[Re]),_:1},8,["type"]),d(f,{size:"small",ghost:"",type:r(e).value===!1?"primary":"default",onClick:s[1]||(s[1]=_=>{r(e).value=!1,r(e).answer=""})},{default:l(()=>[He]),_:1},8,["type"])]),_:1})]),r(e).value===null?(i(),g(c,{key:0,class:"mt-2",type:"info"},{default:l(()=>[Ue]),_:1})):x("",!0),d(y,{node:r(e),"onUpdate:node":s[2]||(s[2]=_=>pe(e)?e.value=_:null)},null,8,["node"])])}}}),Je={class:"flex flex-col space-y-2"},Ye={class:"space-x-1 flex"},Ke={class:"block"},We={class:"block"},W=C({props:{node:{required:!0,type:Object}},emits:["update:node"],setup(n,{emit:t}){const e=L(n,"node",t);return(o,s)=>{const a=fe,f=Te,$=me;return i(),g($,{value:r(e).answer,"onUpdate:value":s[0]||(s[0]=c=>r(e).answer=c),class:"space-y-2"},{default:l(()=>[p("div",Je,[(i(!0),h(S,null,T(r(e).options,(c,y)=>(i(),h(S,{key:c._id},[c.type==="option"?(i(),h(S,{key:0},[c.when===r(e).value?(i(),g(a,{key:0,checked:!!c.value,value:`${c.computedId} ${c.title}`,name:r(e).title,type:"info",onChange:_=>c.value=_},{default:l(()=>[p("div",Ye,[p("span",Ke,k(c.computedId),1),p("span",We,k(c.title),1)])]),_:2},1032,["checked","value","name","onChange"])):x("",!0)],64)):x("",!0),c.type==="node"&&r(e).options?(i(),h(S,{key:1},[c.when===r(e).value?(i(),g(f,{key:0,node:r(e).options[y],"onUpdate:node":_=>r(e).options[y]=_},null,8,["node","onUpdate:node"])):x("",!0)],64)):x("",!0)],64))),128))])]),_:1},8,["value"])}}}),Ge={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Qe=p("path",{d:"M13.293 6.293L7.586 12l5.707 5.707l1.414-1.414L10.414 12l4.293-4.293z",fill:"currentColor"},null,-1),Xe=[Qe];function Ze(n,t){return i(),h("svg",Ge,Xe)}var et={name:"bx-bx-chevron-left",render:Ze};const tt={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},ut=p("path",{d:"M10.707 17.707L16.414 12l-5.707-5.707l-1.414 1.414L13.586 12l-4.293 4.293z",fill:"currentColor"},null,-1),nt=[ut];function ot(n,t){return i(),h("svg",tt,nt)}var st={name:"bx-bx-chevron-right",render:ot};const rt={class:"flex items-center space-x-4"},at=v(" \u041D\u0430\u0437\u0430\u0434 "),it=v(" \u0414\u0430\u043B\u044C\u0448\u0435 "),lt=v(" \u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C "),ct=C({props:{current:{required:!0,type:Number},total:{required:!0,type:Number},disabledNext:{required:!1,type:Boolean}},emits:["update:current","click:prev","click:next","click:finish"],setup(n,{emit:t}){const u=n,e=L(u,"current",t),o=A(()=>e.value<u.total),s=A(()=>e.value>1),a=A(()=>e.value===u.total),f=()=>{t("click:finish")},$=()=>{e.value?e.value>=u.total?e.value=u.total:e.value++:e.value=1,t("click:next")},c=()=>{e.value?e.value<=1?e.value=1:e.value--:e.value=1,t("click:prev")};return(y,_)=>{const N=et,B=M,F=st;return i(),h("div",rt,[r(s)?(i(),g(B,{key:0,dashed:"",type:"default",onClick:c},{default:l(()=>[d(N,{class:"mr-2"}),at]),_:1})):x("",!0),r(o)?(i(),g(B,{key:1,disabled:n.disabledNext,type:"primary",onClick:$},{default:l(()=>[it,d(F,{class:"ml-2"})]),_:1},8,["disabled"])):x("",!0),r(a)?(i(),g(B,{key:2,disabled:n.disabledNext,type:"primary",onClick:f},{default:l(()=>[lt,d(F,{class:"ml-2"})]),_:1},8,["disabled"])):x("",!0)])}}}),dt={class:"flex space-x-4 items-center"},_t={class:"w-[34px] h-[32px] items-center flex justify-center font-medium rounded-full border-gray-200 border-1"},pt=v(" \u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A "),ft={class:"pl-12 py-2"},mt=C({props:{step:{required:!1,type:Number,default:0}},setup(n){return(t,u)=>(i(),h("div",null,[p("div",dt,[p("div",_t,[p("span",null,k(n.step),1)]),J(t.$slots,"title",{},()=>[pt])]),p("div",ft,[J(t.$slots,"default")])]))}}),b=Y({name:"",nodes:[]});function Rt(){return{schema:b}}function Ht(n,t){if(n.options)return n.options.filter(u=>u._id!==t._id)}function Ut(n,t){var u;(u=n.options)==null||u.push({_id:w(),type:"option",title:"",when:t})}function Tt(n,t){var u;(u=n.options)==null||u.push({_id:w(),creator:n._id,type:"node",title:"",options:[{_id:w(),title:"",type:"option",when:!0},{_id:w(),title:"",type:"option",when:!1}],when:t})}function Jt(n){var u;const t=((u=n[n.length-1])==null?void 0:u.id)||0;n.push({_id:w(),id:t+1,type:"node",title:"",options:[{_id:w(),title:"",type:"option",when:!0},{_id:w(),title:"",type:"option",when:!1}]})}function ht(){return{enrichedSchema:A(()=>{const t=Y(he(b)),u=o=>{o.forEach((s,a)=>{s.id=a+1,s.value=null,s.options&&u(s.options)})},e=o=>{var a;const s=o.computedId||o.id;o.answer="",(a=o.options)==null||a.forEach(f=>{f.computedId=`${s}.${f.id}`,f.type==="node"&&e(f)})};return u(t.nodes),t.nodes.forEach(o=>{e(o)}),t})}}function Yt(n,t){if(!t){b.nodes=b.nodes.filter(u=>u._id!==n._id).map((u,e)=>j(V({},u),{id:e+1}));return}t.options&&(t.options=t.options.filter(u=>u._id!==n._id))}function vt(n){b.name=n.name,b.nodes=n.nodes}function yt(){b.name="",b.nodes=[]}function Kt(){const n=new Blob([JSON.stringify(b)],{type:"application/json"});ve.saveAs(n,`${b.name}.json`)}function gt(n){var u,e;if((u=n.options)==null?void 0:u.some(o=>o.type==="node")){const o=(e=n.options)==null?void 0:e.filter(s=>!(s.type==="option"||s.when!==n.value));return(o==null?void 0:o.length)?o==null?void 0:o.every(s=>s.answer):!!n.answer}return!!n.answer}function xt(n){const t=E([]),u=(e,o)=>{var c,y;const s=`${e.computedId||`${e.id}.`} ${e.title}`,a=e.value?"\u0414\u0430":"\u041D\u0435\u0442",f=e.answer||"";t.value.push({question:s,questionAnswer:a,selectedOption:f,indent:o}),((c=e.options)==null?void 0:c.some(_=>_.type==="node"))&&((y=e.options)==null||y.forEach(_=>{_.type==="node"&&e.value===_.when&&u(_,o+8)}))};return n.forEach(e=>u(e,0)),{answers:t}}async function $t(n){return new Promise((t,u)=>{const e=new FileReader;e.onload=o=>{var s;if(typeof((s=o.target)==null?void 0:s.result)=="string")try{const a=JSON.parse(o.target.result);t(a)}catch(a){u(a)}else u(new Error("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \u0444\u0430\u0439\u043B"))},e.onerror=o=>u(o),e.readAsText(n)})}async function bt(n){const t=E("loading"),u=E("");if(n.file)try{const e=await $t(n.file);!e.name||!e.nodes?(t.value="nofile",u.value="\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u0430\u0439\u043B"):(t.value="uploaded",vt(e),u.value="\u0424\u0430\u0439\u043B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D")}catch(e){t.value="nofile",u.value="\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u0430\u0439\u043B"}else t.value="nofile",u.value="\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u0430\u0439\u043B";return{fileState:t,message:u}}function wt(n,t){const u=[];u.push({text:n,fontSize:16,alignment:"center"}),u.push(" "),u.push(" "),t.forEach(e=>{u.push({text:`${e.question} (${e.questionAnswer})`,fontSize:12,margin:[e.indent,4,0,4]}),e.selectedOption&&u.push({text:`${e.selectedOption}`,fontSize:11,margin:[e.indent+16,4,0,4]})}),window.pdfMake.createPdf({content:u}).download(n)}var G={};const Ct={class:"w-[980px] px-6 py-8"},kt=v(" \u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0445\u0435\u043C\u0443 "),Et={key:2},Bt={class:"mb-2"},Dt=v(" \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0434\u043B\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0438\u043B\u0438 \u043F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0444\u0430\u0439\u043B \u0441\u0445\u0435\u043C\u044B \u0432 \u044D\u0442\u0443 \u043E\u0431\u043B\u0430\u0441\u0442\u044C. "),St={key:3,class:"flex"},At={class:"flex items-center w-full space-x-6"},Nt={class:"block flex-grow whitespace-nowrap font-medium text-lg"},Ft=v(" \u0414\u0430 "),Lt=v(" \u041D\u0435\u0442 "),Mt={key:0},Ot=v(' \u041E\u0442\u0432\u0435\u0442\u044C\u0442\u0435 \u043D\u0430 \u0432\u043E\u043F\u0440\u043E\u0441 \u0432\u044B\u0448\u0435 \u043D\u0430\u0436\u0430\u0432 \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443 "\u0414\u0430" \u0438\u043B\u0438 "\u041D\u0435\u0442" '),Q=C({setup(n){const{enrichedSchema:t}=ht(),u=E(1),e=E("nofile"),o=E("process"),s=ye(),a=A(()=>t.value.nodes.length),f=()=>{const{answers:c}=xt(t.value.nodes);u.value=1,e.value="nofile",s.success("\u0424\u0430\u0439\u043B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D, \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u043C \u0441\u043A\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u0435"),wt(t.value.name,c.value),yt()},$=async({file:c})=>{const y=await bt(c);s.success(y.message.value),e.value=y.fileState.value};return(c,y)=>{const _=R,N=xe,B=Ie,F=$e,ee=be,te=we,z=M,ue=H,ne=U,oe=W,se=ct,re=mt,ae=Ce;return i(),h("div",Ct,[r(t).name?(i(),g(N,{key:0,prefix:"bar"},{default:l(()=>[d(_,{type:"primary"},{default:l(()=>[v(k(r(t).name),1)]),_:1})]),_:1})):(i(),g(N,{key:1,prefix:"bar"},{default:l(()=>[d(_,{type:"primary"},{default:l(()=>[kt]),_:1})]),_:1})),r(t).nodes.length?(i(),h("div",St,[d(ae,{vertical:"",current:u.value,status:r(o)},{default:l(()=>[(i(!0),h(S,null,T(r(t).nodes,(m,P)=>(i(),g(re,{key:m._id,step:m.id},{title:l(()=>[p("div",At,[p("h3",Nt,[d(_,null,{default:l(()=>[v(k(m.title),1)]),_:2},1024)]),m.id&&u.value===m.id?(i(),g(ue,{key:0},{default:l(()=>[d(z,{size:"small",ghost:"",type:m.value===!0?"primary":"default",onClick:D=>{m.value=!0,m.answer=""}},{default:l(()=>[Ft]),_:2},1032,["type","onClick"]),d(z,{size:"small",ghost:"",type:m.value===!1?"primary":"default",onClick:D=>{m.value=!1,m.answer=""}},{default:l(()=>[Lt]),_:2},1032,["type","onClick"])]),_:2},1024)):x("",!0)])]),default:l(()=>[d(ge,null,{default:l(()=>[m.id&&u.value===m.id?(i(),h("div",Mt,[m.value===null?(i(),g(ne,{key:0,type:"info"},{default:l(()=>[Ot]),_:1})):x("",!0),d(oe,{node:r(t).nodes[P],"onUpdate:node":D=>r(t).nodes[P]=D},null,8,["node","onUpdate:node"]),d(se,{current:u.value,"onUpdate:current":y[0]||(y[0]=D=>u.value=D),"disabled-next":!r(gt)(m),class:"mt-4",total:r(a),"onClick:finish":f},null,8,["current","disabled-next","total"])])):x("",!0)]),_:2},1024)]),_:2},1032,["step"]))),128))]),_:1},8,["current","status"])])):(i(),h("div",Et,[r(e)==="nofile"?(i(),g(te,{key:0,accept:"application/json","show-file-list":!1,"on-change":$},{default:l(()=>[d(ee,null,{default:l(()=>[p("div",Bt,[d(F,{size:"48",depth:3},{default:l(()=>[d(B,{class:"w-48 h-48"})]),_:1})]),d(_,{depth:"2"},{default:l(()=>[Dt]),_:1})]),_:1})]),_:1})):x("",!0)]))])}}});typeof G=="function"&&G(Q);const zt=[{name:"create",path:"/create",component:()=>O(()=>import("./create.90feaefd.js"),["assets/create.90feaefd.js","assets/create.dd5caca8.css","assets/vendor.51bd39f7.js"]),props:!0,meta:{header:"\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0445\u0435\u043C\u044B"}},{name:"chat",path:"/chat",component:()=>O(()=>import("./chat.6ef05c73.js"),["assets/chat.6ef05c73.js","assets/chat.98f10d6e.css","assets/vendor.51bd39f7.js"]),props:!0,meta:{header:"\u0427\u0430\u0442-\u0431\u043E\u0442"}},{name:"index",path:"/",component:Q,props:!0,meta:{header:"\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430"}},{name:"notFound",path:"/:all(.*)*",component:()=>O(()=>import("./[...all].0ba442d3.js"),["assets/[...all].0ba442d3.js","assets/vendor.51bd39f7.js"]),props:!0,meta:{header:"\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430"}}],Pt={class:"w-full h-full"},qt={class:"flex justify-center"},It=C({setup(n){const t={common:{primaryColor:"#3590f3",primaryColorHover:"#3082db",primaryColorPressed:"#2a73c2",infoColor:"#28c2ff",successColor:"#38b000",errorColor:"#A31621",warningColor:"#F4743B",hoverColor:"#3590f3"}};return(u,e)=>{const o=ke("router-view"),s=Be;return i(),g(r(Ee),{"theme-overrides":t},{default:l(()=>[p("main",Pt,[p("section",qt,[d(s,null,{default:l(()=>[d(o)]),_:1})])])]),_:1})}}});const X=De(It),Z=Se({history:Ae("/ec-builder/"),routes:zt});Z.beforeEach(n=>{document.title=n.meta.header});X.use(Z);X.mount("#app");export{Ie as _,Ut as a,Tt as b,Jt as c,Ht as d,Yt as e,bt as f,ht as g,wt as h,yt as r,Kt as s,Rt as u};
