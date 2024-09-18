var h=(v,f,a)=>new Promise((o,m)=>{var u=s=>{try{c(a.next(s))}catch(d){m(d)}},n=s=>{try{c(a.throw(s))}catch(d){m(d)}},c=s=>s.done?o(s.value):Promise.resolve(s.value).then(u,n);c((a=a.apply(v,f)).next())});import{u as q,l as _,m as g,a as w,n as B,w as H,o as i,f as l,g as y,p as r,F as x,q as b,t as k,v as j,x as L,y as P,z as R,j as A,A as M}from"./vendor.41cb6c45.js";import{M as S}from"./Header.bc448318.js";import"./index.b4544bcf.js";const V={class:"w-screen font-sans flex justify-center"},$={class:"flex flex-col max-w-6xl h-full mt-28 shadow-sm border border-gray-50 rounded-md"},F={class:"flex-1 overflow-auto p-5"},D=r("h1",{class:"text-gray-900 text-2xl font-medium"},"Book an appointment",-1),E=r("h2",{class:"text-gray-800 mt-10 font-medium text-xl"},"Specialization:",-1),T={class:"mt-5 flex gap-3 overflow-x-auto scrollbar-hide flex-wrap sm:flex-nowrap"},G=["onClick"],I={class:"mt-5 flex gap-3 overflow-x-auto scrollbar-hide flex-wrap sm:flex-nowrap"},J=["onClick"],K=["src"],O={class:"text-xl font-medium tracking-wider"},Q={key:0,class:"mt-2 flex justify-end"},Z={__name:"Departments",setup(v){const f=q(),a=_(""),o=_(""),m=_(!1),u=g({doctype:"Healthcare Practitioner",fields:["department"],auto:!1}),n=g({doctype:"Healthcare Practitioner",fields:["name","practitioner_name","image","department"],auto:!1}),c=w(()=>{const t=u.list.data||[];return Array.from(new Set(t.map(e=>e.department))).map(e=>({department:e}))}),s=w(()=>{var t;return((t=n.list.data)==null?void 0:t.filter(p=>p.department===o.value))||[]});B(()=>h(this,null,function*(){yield u.list.fetch(),yield n.list.fetch()})),H(o,t=>h(this,null,function*(){t&&(yield n.list.fetch({filters:{department:t}}))}));function d(t){o.value=t,n.list.fetch({filters:{department:t}})}function C(t){a.value=t}function z(){m.value=!0,f.push({path:"/home",query:{department:o.value,doctor:a.value}})}return(t,p)=>(i(),l(x,null,[y(S),r("div",V,[r("div",$,[r("div",F,[D,E,r("div",T,[(i(!0),l(x,null,b(c.value,e=>(i(),l("div",{key:e.department,class:k(["cursor-pointer p-2 flex-shrink-0 items-center flex justify-center w-full sm:w-fit text-base font-medium shadow-sm rounded-md transition-transform hover:scale-95",{"bg-black text-white":o.value===e.department,"bg-gray-100 text-gray-800":o.value!==e.department}]),onClick:N=>d(e.department)},j(e.department),11,G))),128))]),r("div",I,[(i(!0),l(x,null,b(s.value,e=>(i(),l("div",{key:e.practitioner_name,class:k(["cursor-pointer w-full sm:w-52 h-auto p-2 flex-col flex-shrink-0 items-center flex justify-center text-gray-800 shadow-sm hover:bg-gray-50 border transition-transform hover:scale-105 rounded-md gap-2",{"bg-gray-100":a.value===e.practitioner_name}]),onClick:N=>C(e.practitioner_name)},[r("img",{class:"h-20 w-16 bg-gray-50 rounded-md",src:e.image,alt:""},null,8,K),r("span",O,j(e.practitioner_name),1)],10,J))),128))]),a.value?(i(),l("div",Q,[y(R(A),{variant:"solid",size:"sm",onClick:z},{default:L(()=>[P("Next")]),_:1})])):M("",!0)])])])],64))}};export{Z as default};
