import{_ as O}from"./nuxt-img.6ff5e342.js";import{a as J,b as R,T as F,s as L}from"./entry.7eafcd36.js";import{_ as P}from"./_plugin-vue_export-helper.c27b6911.js";import{i as V,a as h,l as $,C as o,O as l,P as s,Q as m,u as e,W as B,z as u,F as C,X as I,Y as j,D as T,U as Y,V as H,E as S,R as A,A as Q,Z as U}from"./swiper-vue.db3757a0.js";import{_ as W}from"./nuxt-link.853ba51c.js";import{_ as X}from"./Card.e32ee06d.js";import{_ as Z}from"./Contact.446b777a.js";const z=w=>(Y("data-v-0e6326e1"),w=w(),H(),w),q={class:"max-md:mx-[18px] md:px-[20px]"},G={class:"w-full md:max-w-[900px] mx-auto"},K={class:"text-[40px] text-[#393939]"},tt={class:"flex justify-between items-center md:mb-[20px] mb-[10px]"},et={class:"flex items-center"},st=z(()=>s("div",{class:"bg-[#FF8A00] w-[60px] md:w-[150px] h-[1px] mr-[10px]"},null,-1)),at={class:"flex mt-[30px] max-md:hidden"},ot={class:"md:hidden relative z-10"},nt={class:"flex overflow-x-scroll"},lt=["onClick","data-aos-delay"],dt={key:0,class:"w-full h-full absolute top-0 left-0 bg-black/40"},it=z(()=>s("div",{class:"h-[37px] w-[28px] overflow-hidden absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 pointer-none"},[s("div",{class:"hand-pointer__wrap h-[37px] w-[28px] overflow-hidden"},[s("div",{class:"hand-pointer__container"})])],-1)),ct=[it],rt={__name:"CaseBanner",setup(w){const N=V("isMobile"),g=J(),_=R(),d=h(JSON.parse(JSON.stringify(F))),f=$(()=>g.params.id),v=$(()=>g.params.caseID),r=$(()=>{var t,a,c;return(c=(a=(t=d.value.find(i=>i.id===f.value))==null?void 0:t.caseItem)==null?void 0:a.find(i=>i.caseID===v.value))==null?void 0:c.caseImg}),k=$(()=>{var t,a,c;return(c=(a=(t=d.value.find(i=>i.id===f.value))==null?void 0:t.caseItem)==null?void 0:a.find(i=>i.caseID===v.value))==null?void 0:c.caseName}),b=h(0),M=h(!0),n=h("hidden"),p=h(!1),y=t=>{p.value||(p.value=!0),b.value=t,N.value===1&&(n.value=n.value===""?"hidden":"")},D=(t=!1)=>{const a=d.value.find(i=>i.id===f.value).caseItem,c=a.findIndex(i=>i.caseID===v.value)+1;a[c]||(M.value=!1),t&&_.push("/detail/"+f.value+"/"+a[c].caseID)};return D(),(t,a)=>{const c=O;return o(),l("div",q,[s("div",G,[s("h1",K,m(t.$t(e(k))),1),s("div",tt,[s("div",et,[st,s("div",{class:"cursor-pointer text-[16px] max-md:text-[12px] text-[#FF8A00]",onClick:a[0]||(a[0]=i=>t.$router.back(-1))},m("<<")+" "+m(t.$t("back")),1)]),e(M)?(o(),l("div",{key:0,class:"cursor-pointer text-[16px] max-md:text-[12px]",onClick:a[1]||(a[1]=i=>D(!0))},m(t.$t("next projects"))+" "+m(">>"),1)):B("",!0)]),u(c,{class:"w-[900px] h-[500px] object-cover max-md:hidden md:mx-auto",src:e(r)[e(b)]},null,8,["src"]),s("div",at,[(o(!0),l(C,null,I(e(r),(i,x)=>(o(),T(c,{key:x,class:"w-[40px] h-[40px] bg-cover mr-[30px] cursor-pointer object-cover",src:e(r)[x],onClick:E=>y(x),alt:`${t.$t("焦點空間設計")}｜${t.$t(e(k))}｜${t.$t("商業空間")}`,"data-aos":"fade-up","data-aos-offset":"-120","data-aos-delay":`${100*(x+1)}`,"data-aos-duration":"1200"},null,8,["src","onClick","alt","data-aos-delay"]))),128))]),s("div",ot,[s("div",nt,[(o(!0),l(C,null,I(e(r),(i,x)=>(o(),l("div",{key:x,class:"w-[100px] h-[328px] cursor-pointer shrink-0 border-r-[1px] border-white relative",onClick:E=>y(x),"data-aos":"fade-up","data-aos-delay":`${100*(x+1)}`,"data-aos-duration":"1200"},[u(c,{class:"w-[100px] h-[328px] object-cover",src:e(r)[x]},null,8,["src"]),!x&&!e(p)?(o(),l("div",dt,ct)):B("",!0)],8,lt))),128))]),u(c,{class:j(["w-full h-[328px] object-cover absolute top-0",e(n)]),src:e(r)[e(b)],onClick:a[2]||(a[2]=i=>y(e(b)))},null,8,["class","src"])])])])}}},pt=P(rt,[["__scopeId","data-v-0e6326e1"]]),ut={class:"w-full md:max-w-[1250px] mx-auto flex flex-col items-center"},xt={class:"w-full md:flex md:justify-between md:px-[40px] md:pb-[20px] pb-[16px]"},mt=s("span",{class:"text-[12px]"},"Ⅴ",-1),_t=s("div",{class:"w-full h-[2px] bg-black my-[10px] md:hidden"},null,-1),ft={class:"w-full md:hidden mt-[10px]"},vt=s("i",{class:"arrow__icon bg-white"},null,-1),ht={class:"flex max-md:justify-between max-md:hidden"},bt=["onClick"],$t=s("div",{class:"w-full md:px-[20px]"},[s("div",{class:"w-full md:h-[2px] bg-black"})],-1),wt={class:"grid grid-cols-2 gap-4 w-full md:hidden"},gt={class:"grid grid-cols-3 gap-7 px-[40px] mt-[40px] w-full max-md:hidden"},kt=s("div",{class:"w-[2px] bg-[#FF8A00] md:h-[144px] h-[75px] my-[70px]"},null,-1),yt={class:"bg-white h-full px-[50px] flex flex-col items-center justify-center w-[fit-content]"},Ct=["onClick"],It={__name:"CaseMore",setup(w){const N=V("isMobile"),g=J(),_=h(JSON.parse(JSON.stringify(F)));$(()=>g.params.id);const d=h("business"),f=$(()=>{var n;return(n=_.value.find(p=>p.id===d.value))==null?void 0:n.label}),v=$(()=>{var n;return(n=_.value.find(p=>p.id===d.value))==null?void 0:n.caseItem}),r=h(!1),k=()=>{r.value=!r.value},b=n=>{_.value=JSON.parse(JSON.stringify(F)),d.value=n};return(()=>{d.value=g.params.id})(),(n,p)=>{const y=W,D=X;return o(),l("div",{id:"caseMore",class:j(["mx-[18px] md:pt-[50px] pt-[20px]",{"mx-[100px]":e(N)===0}])},[s("div",ut,[s("div",xt,[u(y,{to:`/detail/${e(d)}`,class:"text-[16px] md:hidden pb-[10px]"},{default:S(()=>[A(m(n.$t("More"))+" ",1),mt]),_:1},8,["to"]),_t,u(y,{to:`/detail/${e(d)}`,class:"text-[24px] max-md:hidden"},{default:S(()=>[A(m(n.$t("More"))+" >",1)]),_:1},8,["to"]),s("div",ft,[s("div",{class:"w-[fit-content] bg-black rounded-[24px] py-[4px] px-[16px] text-[16px] font-extrabold cursor-pointer text-white shadow-[3px_3px_4px_0_rgba(0,0,0,0.45)]",onClick:p[0]||(p[0]=t=>k())},[A(m(n.$t(e(f)))+" ",1),vt])]),s("div",ht,[(o(!0),l(C,null,I(e(F),(t,a)=>(o(),l("h2",{key:a,class:j(["text-[16px] max-md:text-[12px] md:ml-[30px] cursor-pointer whitespace-nowrap",e(d)===t.id?"text-[#FF8A00]":"text-[#707070]"]),onClick:c=>b(t.id)},m(n.$t(t.label)),11,bt))),128))])]),$t,s("div",wt,[(o(!0),l(C,null,I(e(v),(t,a)=>(o(),l("div",{key:a,class:"mx-auto","data-aos":"fade-up","data-aos-duration":"1200","data-aos-offset":"-24"},[u(D,{format:t,id:e(d)},null,8,["format","id"])]))),128))]),s("div",gt,[(o(!0),l(C,null,I(e(v),(t,a)=>(o(),l("div",{key:a,class:"mx-auto","data-aos":"fade-up","data-aos-duration":"1200","data-aos-offset":"-24"},[u(D,{format:t,id:e(d)},null,8,["format","id"])]))),128))]),kt]),(o(),T(U,{to:"body"},[u(Q,{name:"fade"},{default:S(()=>[e(r)?(o(),l("div",{key:0,class:"fixed top-0 left-0 bg-[#00000080] w-full h-full z-20",onClick:p[1]||(p[1]=t=>k())},[s("div",yt,[(o(!0),l(C,null,I(e(F),(t,a)=>(o(),l("div",{key:a,class:j([t.id===e(d)?"text-[#FF8A00]":"text-[#707070]","my-[8px]"]),onClick:c=>b(t.id)},m(n.$t(t.label)),11,Ct))),128))])])):B("",!0)]),_:1})]))],2)}}},Nt=It,Dt={class:"w-full mt-[100px] md:mt-[140px]"},Jt={__name:"[caseID]",setup(w){const N=()=>{L({hash:"caseMore",remove:!0})};return(g,_)=>{const d=pt,f=Nt,v=Z,r=O;return o(),l("div",Dt,[u(d),u(f),u(v),u(r,{src:"/images/index/arrow_1.svg",class:"fixed md:bottom-5 bottom-[90px] right-5 md:w-[64px] w-[56px] h-auto cursor-pointer",onClick:_[0]||(_[0]=k=>N())})])}}};export{Jt as default};
