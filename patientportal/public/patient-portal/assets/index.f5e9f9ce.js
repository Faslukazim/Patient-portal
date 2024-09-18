var Ot=Object.defineProperty,bt=Object.defineProperties;var Pt=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var dt=Object.prototype.hasOwnProperty,ct=Object.prototype.propertyIsEnumerable;var pt=(t,e,n)=>e in t?Ot(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,r=(t,e)=>{for(var n in e||(e={}))dt.call(e,n)&&pt(t,n,e[n]);if(z)for(var n of z(e))ct.call(e,n)&&pt(t,n,e[n]);return t},v=(t,e)=>bt(t,Pt(e));var ft=(t,e)=>{var n={};for(var o in t)dt.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&z)for(var o of z(t))e.indexOf(o)<0&&ct.call(t,o)&&(n[o]=t[o]);return n};import{r as M,L as G,g as d,M as q,N as A,O as et,h as qt,a as m,n as mt,P as vt,F as $t,Q as yt,l as w,S as Bt,T as V,U as K}from"./vendor.41cb6c45.js";const x={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},F={LIGHT:"light",DARK:"dark",COLORED:"colored",AUTO:"auto"},y={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},Mt={BOUNCE:"bounce",SLIDE:"slide",FLIP:"flip",ZOOM:"zoom",NONE:"none"},Et={dangerouslyHTMLString:!1,multiple:!0,position:x.TOP_RIGHT,autoClose:5e3,transition:"bounce",hideProgressBar:!1,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,className:"",bodyClassName:"",style:{},progressClassName:"",progressStyle:{},role:"alert",theme:"light"},wt={rtl:!1,newestOnTop:!1,toastClassName:""},gt=r(r({},Et),wt);v(r({},Et),{type:y.DEFAULT});var s=(t=>(t[t.COLLAPSE_DURATION=300]="COLLAPSE_DURATION",t[t.DEBOUNCE_DURATION=50]="DEBOUNCE_DURATION",t.CSS_NAMESPACE="Toastify",t))(s||{}),nt=(t=>(t.ENTRANCE_ANIMATION_END="d",t))(nt||{});const Ft={enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0},Rt={enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0},Ut={enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"},Dt={enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"},St="Toastify--animate Toastify__none-enter";function Ct(t,e=!1){var n;let o=Ft;if(!t||typeof t=="string")switch(t){case"flip":o=Dt;break;case"zoom":o=Ut;break;case"slide":o=Rt;break}else o=t;if(e)o.enter=St;else if(o.enter===St){const i=(n=o.exit.split("__")[1])==null?void 0:n.split("-")[0];o.enter=`Toastify--animate Toastify__${i}-enter`}return o}function kt(t){return t.containerId||String(t.position)}const Q="will-unmount";function xt(t=x.TOP_RIGHT){return!!document.querySelector(`.${s.CSS_NAMESPACE}__toast-container--${t}`)}function Ht(t=x.TOP_RIGHT){return`${s.CSS_NAMESPACE}__toast-container--${t}`}function jt(t,e,n=!1){const o=[`${s.CSS_NAMESPACE}__toast-container`,`${s.CSS_NAMESPACE}__toast-container--${t}`,n?`${s.CSS_NAMESPACE}__toast-container--rtl`:null].filter(Boolean).join(" ");return U(e)?e({position:t,rtl:n,defaultClassName:o}):`${o} ${e||""}`}function zt(t){var e;const{position:n,containerClassName:o,rtl:i=!1,style:a={}}=t,c=s.CSS_NAMESPACE,C=Ht(n),u=document.querySelector(`.${c}`),T=document.querySelector(`.${C}`),g=!!T&&!((e=T.className)!=null&&e.includes(Q)),N=u||document.createElement("div"),f=document.createElement("div");f.className=jt(n,o,i),f.dataset.testid=`${s.CSS_NAMESPACE}__toast-container--${n}`,f.id=kt(t);for(const _ in a)if(Object.prototype.hasOwnProperty.call(a,_)){const I=a[_];f.style[_]=I}return u||(N.className=s.CSS_NAMESPACE,document.body.appendChild(N)),g||N.appendChild(f),f}function ot(t){var e,n,o;const i=typeof t=="string"?t:((e=t.currentTarget)==null?void 0:e.id)||((n=t.target)==null?void 0:n.id),a=document.getElementById(i);a&&a.removeEventListener("animationend",ot,!1);try{H[i].unmount(),(o=document.getElementById(i))==null||o.remove(),delete H[i],delete p[i]}catch(c){}}const H=M({});function Gt(t,e){const n=document.getElementById(String(e));n&&(H[n.id]=t)}function it(t,e=!0){const n=String(t);if(!H[n])return;const o=document.getElementById(n);o&&o.classList.add(Q),e?(Kt(t),o&&o.addEventListener("animationend",ot,!1)):ot(n),h.items=h.items.filter(i=>i.containerId!==t)}function Vt(t){for(const e in H)it(e,t);h.items=[]}function Tt(t,e){const n=document.getElementById(t.toastId);if(n){let o=t;o=r(r({},o),Ct(o.transition));const i=o.appendPosition?`${o.exit}--${o.position}`:o.exit;n.className+=` ${i}`,e&&e(n)}}function Kt(t){for(const e in p)if(e===t)for(const n of p[e]||[])Tt(n)}function Qt(t){const e=R().find(n=>n.toastId===t);return e==null?void 0:e.containerId}function at(t){return document.getElementById(t)}function Wt(t){const e=at(t.containerId);return e&&e.classList.contains(Q)}function _t(t){var e;const n=yt(t.content)?A(t.content.props):null;return n!=null?n:A((e=t.data)!=null?e:{})}function Xt(t){return t?h.items.filter(e=>e.containerId===t).length>0:h.items.length>0}function Yt(){if(h.items.length>0){const t=h.items.shift();W(t==null?void 0:t.toastContent,t==null?void 0:t.toastProps)}}const p=M({}),h=M({items:[]});function R(){const t=A(p);return Object.values(t).reduce((e,n)=>[...e,...n],[])}function Zt(t){return R().find(e=>e.toastId===t)}function W(t,e={}){if(Wt(e)){const n=at(e.containerId);n&&n.addEventListener("animationend",st.bind(null,t,e),!1)}else st(t,e)}function st(t,e={}){const n=at(e.containerId);n&&n.removeEventListener("animationend",st.bind(null,t,e),!1);const o=p[e.containerId]||[],i=o.length>0;if(!i&&!xt(e.position)){const a=zt(e),c=qt(Ee,e);c.mount(a),Gt(c,a.id)}i&&!e.updateId&&(e.position=o[0].position),et(()=>{e.updateId?E.update(e):E.add(t,e)})}const E={add(t,e){const{containerId:n=""}=e;n&&(p[n]=p[n]||[],p[n].find(o=>o.toastId===e.toastId)||setTimeout(()=>{var o,i;e.newestOnTop?(o=p[n])==null||o.unshift(e):(i=p[n])==null||i.push(e),e.onOpen&&e.onOpen(_t(e))},e.delay||0))},remove(t){if(t){const e=Qt(t);if(e){const n=p[e];let o=n.find(i=>i.toastId===t);p[e]=n.filter(i=>i.toastId!==t),!p[e].length&&!Xt(e)&&it(e,!1),Yt(),et(()=>{o!=null&&o.onClose&&(o.onClose(_t(o)),o=void 0)})}}},update(t={}){const{containerId:e=""}=t;if(e&&t.updateId){p[e]=p[e]||[];const n=p[e].find(a=>a.toastId===t.toastId),o=(n==null?void 0:n.position)!==t.position||(n==null?void 0:n.transition)!==t.transition,i=v(r({},t),{disabledEnterTransition:!o,updateId:void 0});E.dismissForce(t==null?void 0:t.toastId),setTimeout(()=>{l(i.content,i)},t.delay||0)}},clear(t,e=!0){t?it(t,e):Vt(e)},dismissCallback(t){var e;const n=(e=t.currentTarget)==null?void 0:e.id,o=document.getElementById(n);o&&(o.removeEventListener("animationend",E.dismissCallback,!1),setTimeout(()=>{E.remove(n)}))},dismiss(t){if(t){const e=R();for(const n of e)if(n.toastId===t){Tt(n,o=>{o.addEventListener("animationend",E.dismissCallback,!1)});break}}},dismissForce(t){if(t){const e=R();for(const n of e)if(n.toastId===t){const o=document.getElementById(t);o&&(o.remove(),o.removeEventListener("animationend",E.dismissCallback,!1),E.remove(t));break}}}},At=M({}),X=M({});function ht(){return Math.random().toString(36).substring(2,9)}function Jt(t){return typeof t=="number"&&!isNaN(t)}function rt(t){return typeof t=="string"}function U(t){return typeof t=="function"}function Y(...t){return q(...t)}function Z(t){return typeof t=="object"&&(!!(t!=null&&t.render)||!!(t!=null&&t.setup)||typeof(t==null?void 0:t.type)=="object")}function te(t={}){At[`${s.CSS_NAMESPACE}-default-options`]=t}function ee(){return At[`${s.CSS_NAMESPACE}-default-options`]||gt}function ne(){return document.documentElement.classList.contains("dark")?"dark":"light"}var J=(t=>(t[t.Enter=0]="Enter",t[t.Exit=1]="Exit",t))(J||{});const Nt={containerId:{type:[String,Number],required:!1,default:""},clearOnUrlChange:{type:Boolean,required:!1,default:!0},disabledEnterTransition:{type:Boolean,required:!1,default:!1},dangerouslyHTMLString:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!0},limit:{type:Number,required:!1,default:void 0},position:{type:String,required:!1,default:x.TOP_LEFT},bodyClassName:{type:String,required:!1,default:""},autoClose:{type:[Number,Boolean],required:!1,default:!1},closeButton:{type:[Boolean,Function,Object],required:!1,default:void 0},transition:{type:[String,Object],required:!1,default:"bounce"},hideProgressBar:{type:Boolean,required:!1,default:!1},pauseOnHover:{type:Boolean,required:!1,default:!0},pauseOnFocusLoss:{type:Boolean,required:!1,default:!0},closeOnClick:{type:Boolean,required:!1,default:!0},progress:{type:Number,required:!1,default:void 0},progressClassName:{type:String,required:!1,default:""},toastStyle:{type:Object,required:!1,default(){return{}}},progressStyle:{type:Object,required:!1,default(){return{}}},role:{type:String,required:!1,default:"alert"},theme:{type:String,required:!1,default:F.AUTO},content:{type:[String,Object,Function],required:!1,default:""},toastId:{type:[String,Number],required:!1,default:""},data:{type:[Object,String],required:!1,default(){return{}}},type:{type:String,required:!1,default:y.DEFAULT},icon:{type:[Boolean,String,Number,Object,Function],required:!1,default:void 0},delay:{type:Number,required:!1,default:void 0},onOpen:{type:Function,required:!1,default:void 0},onClose:{type:Function,required:!1,default:void 0},onClick:{type:Function,required:!1,default:void 0},isLoading:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},toastClassName:{type:String,required:!1,default:""},updateId:{type:[String,Number],required:!1,default:""}},oe={autoClose:{type:[Number,Boolean],required:!0},isRunning:{type:Boolean,required:!1,default:void 0},type:{type:String,required:!1,default:y.DEFAULT},theme:{type:String,required:!1,default:F.AUTO},hide:{type:Boolean,required:!1,default:void 0},className:{type:[String,Function],required:!1,default:""},controlledProgress:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:void 0},isIn:{type:Boolean,required:!1,default:void 0},progress:{type:Number,required:!1,default:void 0},closeToast:{type:Function,required:!1,default:void 0}},ie=G({name:"ProgressBar",props:oe,setup(t,{attrs:e}){const n=w(),o=m(()=>t.hide?"true":"false"),i=m(()=>v(r({},e.style||{}),{animationDuration:`${t.autoClose===!0?5e3:t.autoClose}ms`,animationPlayState:t.isRunning?"running":"paused",opacity:t.hide||t.autoClose===!1?0:1,transform:t.controlledProgress?`scaleX(${t.progress})`:"none"})),a=m(()=>[`${s.CSS_NAMESPACE}__progress-bar`,t.controlledProgress?`${s.CSS_NAMESPACE}__progress-bar--controlled`:`${s.CSS_NAMESPACE}__progress-bar--animated`,`${s.CSS_NAMESPACE}__progress-bar-theme--${t.theme}`,`${s.CSS_NAMESPACE}__progress-bar--${t.type}`,t.rtl?`${s.CSS_NAMESPACE}__progress-bar--rtl`:null].filter(Boolean).join(" ")),c=m(()=>`${a.value} ${(e==null?void 0:e.class)||""}`),C=()=>{n.value&&(n.value.onanimationend=null,n.value.ontransitionend=null)},u=()=>{t.isIn&&t.closeToast&&t.autoClose!==!1&&(t.closeToast(),C())},T=m(()=>t.controlledProgress?null:u),g=m(()=>t.controlledProgress?u:null);return V(()=>{n.value&&(C(),n.value.onanimationend=T.value,n.value.ontransitionend=g.value)}),()=>d("div",{ref:n,role:"progressbar","aria-hidden":o.value,"aria-label":"notification timer",class:c.value,style:i.value},null)}}),ae=G({name:"CloseButton",inheritAttrs:!1,props:{theme:{type:String,required:!1,default:F.AUTO},type:{type:String,required:!1,default:F.LIGHT},ariaLabel:{type:String,required:!1,default:"close"},closeToast:{type:Function,required:!1,default:void 0}},setup(t){return()=>d("button",{class:`${s.CSS_NAMESPACE}__close-button ${s.CSS_NAMESPACE}__close-button--${t.theme}`,type:"button",onClick:e=>{e.stopPropagation(),t.closeToast&&t.closeToast(e)},"aria-label":t.ariaLabel},[d("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},[d("path",{"fill-rule":"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"},null)])])}}),tt=i=>{var a=i,{theme:t,type:e,path:n}=a,o=ft(a,["theme","type","path"]);return d("svg",q({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${e})`},o),[d("path",{d:n},null)])};function se(t){return d(tt,q(t,{path:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}),null)}function re(t){return d(tt,q(t,{path:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}),null)}function le(t){return d(tt,q(t,{path:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}),null)}function ue(t){return d(tt,q(t,{path:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}),null)}function de(){return d("div",{class:`${s.CSS_NAMESPACE}__spinner`},null)}const lt={info:re,warning:se,success:le,error:ue,spinner:de},ce=t=>t in lt;function pe({theme:t,type:e,isLoading:n,icon:o}){let i;const a={theme:t,type:e};return n?i=lt.spinner():o===!1?i=void 0:Z(o)?i=A(o):U(o)?i=o(a):yt(o)?i=Bt(o,a):rt(o)||Jt(o)?i=o:ce(e)&&(i=lt[e](a)),i}const fe=()=>{};function me(t,e,n=s.COLLAPSE_DURATION){const{scrollHeight:o,style:i}=t,a=n;requestAnimationFrame(()=>{i.minHeight="initial",i.height=o+"px",i.transition=`all ${a}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,a)})})}function ve(t){const e=w(!1),n=w(!1),o=w(!1),i=w(J.Enter),a=M(v(r({},t),{appendPosition:t.appendPosition||!1,collapse:typeof t.collapse>"u"?!0:t.collapse,collapseDuration:t.collapseDuration||s.COLLAPSE_DURATION})),c=a.done||fe,C=m(()=>a.appendPosition?`${a.enter}--${a.position}`:a.enter),u=m(()=>a.appendPosition?`${a.exit}--${a.position}`:a.exit),T=m(()=>t.pauseOnHover?{onMouseenter:O,onMouseleave:L}:{});function g(){const S=C.value.split(" ");f().addEventListener(nt.ENTRANCE_ANIMATION_END,L,{once:!0});const b=B=>{const k=f();B.target===k&&(k.dispatchEvent(new Event(nt.ENTRANCE_ANIMATION_END)),k.removeEventListener("animationend",b),k.removeEventListener("animationcancel",b),i.value===J.Enter&&B.type!=="animationcancel"&&k.classList.remove(...S))},P=()=>{const B=f();B.classList.add(...S),B.addEventListener("animationend",b),B.addEventListener("animationcancel",b)};t.pauseOnFocusLoss&&_(),P()}function N(){if(!f())return;const S=()=>{const P=f();P.removeEventListener("animationend",S),a.collapse?me(P,c,a.collapseDuration):c()},b=()=>{const P=f();i.value=J.Exit,P&&(P.className+=` ${u.value}`,P.addEventListener("animationend",S))};n.value||(o.value?S():setTimeout(b))}function f(){return t.toastRef.value}function _(){document.hasFocus()||O(),window.addEventListener("focus",L),window.addEventListener("blur",O)}function I(){window.removeEventListener("focus",L),window.removeEventListener("blur",O)}function L(){(!t.loading.value||t.isLoading===void 0)&&(e.value=!0)}function O(){e.value=!1}function D(S){S&&(S.stopPropagation(),S.preventDefault()),n.value=!1}return V(N),V(()=>{const S=R();n.value=S.findIndex(b=>b.toastId===a.toastId)>-1}),V(()=>{t.isLoading!==void 0&&(t.loading.value?O():L())}),mt(g),vt(()=>{t.pauseOnFocusLoss&&I()}),{isIn:n,isRunning:e,hideToast:D,eventHandlers:T}}const ye=G({name:"ToastItem",inheritAttrs:!1,props:Nt,setup(t){const e=w(),n=m(()=>!!t.isLoading),o=m(()=>t.progress!==void 0&&t.progress!==null),i=m(()=>pe(t)),a=m(()=>[`${s.CSS_NAMESPACE}__toast`,`${s.CSS_NAMESPACE}__toast-theme--${t.theme}`,`${s.CSS_NAMESPACE}__toast--${t.type}`,t.rtl?`${s.CSS_NAMESPACE}__toast--rtl`:void 0,t.toastClassName||""].filter(Boolean).join(" ")),{isRunning:c,isIn:C,hideToast:u,eventHandlers:T}=ve(r(r({toastRef:e,loading:n,done:()=>{E.remove(t.toastId)}},Ct(t.transition,t.disabledEnterTransition)),t));return()=>d("div",q({id:t.toastId,class:a.value,style:t.toastStyle||{},ref:e,"data-testid":`toast-item-${t.toastId}`,onClick:g=>{t.closeOnClick&&u(),t.onClick&&t.onClick(g)}},T.value),[d("div",{role:t.role,"data-testid":"toast-body",class:`${s.CSS_NAMESPACE}__toast-body ${t.bodyClassName||""}`},[i.value!=null&&d("div",{"data-testid":`toast-icon-${t.type}`,class:[`${s.CSS_NAMESPACE}__toast-icon`,t.isLoading?"":`${s.CSS_NAMESPACE}--animate-icon ${s.CSS_NAMESPACE}__zoom-enter`].join(" ")},[Z(i.value)?K(A(i.value),{theme:t.theme,type:t.type}):U(i.value)?i.value({theme:t.theme,type:t.type}):i.value]),d("div",{"data-testid":"toast-content"},[Z(t.content)?K(A(t.content),{toastProps:A(t),closeToast:u,data:t.data}):U(t.content)?t.content({toastProps:A(t),closeToast:u,data:t.data}):t.dangerouslyHTMLString?K("div",{innerHTML:t.content}):t.content])]),(t.closeButton===void 0||t.closeButton===!0)&&d(ae,{theme:t.theme,closeToast:g=>{g.stopPropagation(),g.preventDefault(),u()}},null),Z(t.closeButton)?K(A(t.closeButton),{closeToast:u,type:t.type,theme:t.theme}):U(t.closeButton)?t.closeButton({closeToast:u,type:t.type,theme:t.theme}):null,d(ie,{className:t.progressClassName,style:t.progressStyle,rtl:t.rtl,theme:t.theme,isIn:C.value,type:t.type,hide:t.hideProgressBar,isRunning:c.value,autoClose:t.autoClose,controlledProgress:o.value,progress:t.progress,closeToast:t.isLoading?void 0:u},null)])}});let j=0;function It(){typeof window>"u"||(j&&window.cancelAnimationFrame(j),j=window.requestAnimationFrame(It),X.lastUrl!==window.location.href&&(X.lastUrl=window.location.href,E.clear()))}const Ee=G({name:"ToastifyContainer",inheritAttrs:!1,props:Nt,setup(t){const e=m(()=>t.containerId),n=m(()=>p[e.value]||[]),o=m(()=>n.value.filter(i=>i.position===t.position));return mt(()=>{typeof window<"u"&&t.clearOnUrlChange&&window.requestAnimationFrame(It)}),vt(()=>{typeof window<"u"&&j&&(window.cancelAnimationFrame(j),X.lastUrl="")}),()=>d($t,null,[o.value.map(i=>{const{toastId:a=""}=i;return d(ye,q({key:a},i),null)})])}});let ut=!1;function Lt(){const t=[];return R().forEach(e=>{const n=document.getElementById(e.containerId);n&&!n.classList.contains(Q)&&t.push(e)}),t}function ge(t){const e=Lt().length,n=t!=null?t:0;return n>0&&e+h.items.length>=n}function Se(t){ge(t.limit)&&!t.updateId&&h.items.push({toastId:t.toastId,containerId:t.containerId,toastContent:t.content,toastProps:t})}function $(t,e,n={}){if(ut)return;n=Y(ee(),{type:e},A(n)),(!n.toastId||typeof n.toastId!="string"&&typeof n.toastId!="number")&&(n.toastId=ht()),n=v(r({},n),{content:t,containerId:n.containerId||String(n.position)});const o=Number(n==null?void 0:n.progress);return o<0&&(n.progress=0),o>1&&(n.progress=1),n.theme==="auto"&&(n.theme=ne()),Se(n),X.lastUrl=window.location.href,n.multiple?h.items.length?n.updateId&&W(t,n):W(t,n):(ut=!0,l.clearAll(void 0,!1),setTimeout(()=>{W(t,n)},0),setTimeout(()=>{ut=!1},390)),n.toastId}const l=(t,e)=>$(t,y.DEFAULT,e);l.info=(t,e)=>$(t,y.DEFAULT,v(r({},e),{type:y.INFO}));l.error=(t,e)=>$(t,y.DEFAULT,v(r({},e),{type:y.ERROR}));l.warning=(t,e)=>$(t,y.DEFAULT,v(r({},e),{type:y.WARNING}));l.warn=l.warning;l.success=(t,e)=>$(t,y.DEFAULT,v(r({},e),{type:y.SUCCESS}));l.loading=(t,e)=>$(t,y.DEFAULT,Y(e,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1}));l.dark=(t,e)=>$(t,y.DEFAULT,Y(e,{theme:F.DARK}));l.remove=t=>{t?E.dismiss(t):E.clear()};l.clearAll=(t,e)=>{et(()=>{E.clear(t,e)})};l.isActive=t=>{let e=!1;return e=Lt().findIndex(n=>n.toastId===t)>-1,e};l.update=(t,e={})=>{setTimeout(()=>{const n=Zt(t);if(n){const o=A(n),{content:i}=o,a=v(r(r({},o),e),{toastId:e.toastId||t,updateId:ht()}),c=a.render||i;delete a.render,$(c,a.type,a)}},0)};l.done=t=>{l.update(t,{isLoading:!1,progress:1})};l.promise=Ce;function Ce(t,{pending:e,error:n,success:o},i){var a,c,C;let u;const T=v(r({},i||{}),{autoClose:!1});e&&(u=rt(e)?l.loading(e,T):l.loading(e.render,r(r({},T),e)));const g={autoClose:(a=i==null?void 0:i.autoClose)!=null?a:!0,closeOnClick:(c=i==null?void 0:i.closeOnClick)!=null?c:!0,closeButton:(C=i==null?void 0:i.autoClose)!=null?C:null,isLoading:void 0,draggable:null,delay:100},N=(_,I,L)=>{if(I==null){l.remove(u);return}const O=v(r(r({type:_},g),i),{data:L}),D=rt(I)?{render:I}:I;return u?l.update(u,v(r(r({},O),D),{isLoading:!1})):l(D.render,v(r(r({},O),D),{isLoading:!1})),L},f=U(t)?t():t;return f.then(_=>{N("success",o,_)}).catch(_=>{N("error",n,_)}),f}l.POSITION=x;l.THEME=F;l.TYPE=y;l.TRANSITIONS=Mt;const Te={install(t,e={}){_e(e)}};typeof window<"u"&&(window.Vue3Toastify=Te);function _e(t={}){const e=Y(gt,t);te(e)}export{l as i};