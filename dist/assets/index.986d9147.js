import{i as R,j as B,k as _,s,d,n as u,q as f,u as p,x as P,_ as x,t as h,K as I,$ as E,I as S}from"./index.287f24f7.js";const g="van-hairline",j=`${g}--bottom`,z=`${g}--surround`,A=`${g}--top-bottom`,M="van-haptics-feedback",U=Symbol("van-form"),[y,v]=R("badge"),D={dot:Boolean,max:u,tag:f("div"),color:String,offset:Array,content:u,showZero:p,position:f("top-right")};var T=B({name:y,props:D,setup(e,{slots:a}){const r=()=>{if(a.content)return!0;const{content:t,showZero:n}=e;return P(t)&&t!==""&&(n||t!==0)},c=()=>{const{dot:t,max:n,content:o}=e;if(!t&&r())return a.content?a.content():P(n)&&x(o)&&+o>n?`${n}+`:o},l=_(()=>{const t={background:e.color};if(e.offset){const[n,o]=e.offset;a.default?(t.top=s(o),typeof n=="number"?t.right=s(-n):t.right=n.startsWith("-")?n.replace("-",""):`-${n}`):(t.marginTop=s(o),t.marginLeft=s(n))}return t}),i=()=>{if(r()||e.dot)return d("div",{class:v([e.position,{dot:e.dot,fixed:!!a.default}]),style:l.value},[c()])};return()=>{if(a.default){const{tag:t}=e;return d(t,{class:v("wrapper")},{default:()=>[a.default(),i()]})}return i()}}});const C=h(T),[N,O]=R("icon"),k=e=>e==null?void 0:e.includes("/"),w={dot:Boolean,tag:f("i"),name:String,size:u,badge:u,color:String,badgeProps:Object,classPrefix:String};var F=B({name:N,props:w,setup(e,{slots:a}){const r=I(E,null),c=_(()=>e.classPrefix||(r==null?void 0:r.iconPrefix)||O());return()=>{const{tag:l,dot:i,name:t,size:n,badge:o,color:$}=e,m=k(t);return d(C,S({dot:i,tag:l,class:[c.value,m?"":`${c.value}-${t}`],style:{color:$,fontSize:s(n)},content:o},e.badgeProps),{default:()=>{var b;return[(b=a.default)==null?void 0:b.call(a),m&&d("img",{class:O("image"),src:t},null)]}})}}});const H=h(F);export{z as B,U as F,M as H,H as I,A as a,j as b};
