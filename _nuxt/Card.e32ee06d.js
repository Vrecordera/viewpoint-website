import{_ as l}from"./nuxt-img.6ff5e342.js";import{_ as p}from"./nuxt-link.853ba51c.js";import{C as x,D as d,E as i,z as _,P as u,Q as f}from"./swiper-vue.db3757a0.js";const $={class:"text-[12px] md:text-[16px] md:pt-[10px] max-md:pt-[10px] text-[#434343] tracking-wide text-center"},w={__name:"Card",props:{format:{type:Object,default:{}},id:{type:String,default:""}},setup(t){const s=()=>{window.scrollTo(0,0)};return(e,g)=>{var o;const r=l,m=p;return x(),d(m,{to:`/detail/${t.id}/${(o=t.format)==null?void 0:o.caseID}`,class:"w-full bg-white shadow-[3px_4px_4px_0_rgba(0,0,0,0.25)] rounded-t-[10px] p-[10px] md:px-[16px] flex flex-col items-center justify-center",onClick:s},{default:i(()=>{var a,n,c;return[_(r,{src:(a=t.format)==null?void 0:a.caseImg[0],class:"w-full h-auto rounded-[10px]",alt:`${e.$t("焦點空間設計")}｜${e.$t((n=t.format)==null?void 0:n.caseName)}｜${e.$t("商業空間")}`},null,8,["src","alt"]),u("h3",$,f(e.$t((c=t.format)==null?void 0:c.caseName)),1)]}),_:1},8,["to"])}}},y=w;export{y as _};
