import{i as u,u as g,n as l,j as p,k as h,s as k,d as s,t as m}from"./index.da9ace97.js";const[P,i]=u("progress"),f={color:String,inactive:Boolean,pivotText:String,textColor:String,showPivot:g,pivotColor:String,trackColor:String,strokeWidth:l,percentage:{type:l,default:0,validator:t=>t>=0&&t<=100}};var y=p({name:P,props:f,setup(t){const c=h(()=>t.inactive?void 0:t.color),d=()=>{const{textColor:n,pivotText:e,pivotColor:a,percentage:o}=t,r=e!=null?e:`${o}%`;if(t.showPivot&&r){const v={color:n,left:`${+o}%`,transform:`translate(-${+o}%,-50%)`,background:a||c.value};return s("span",{style:v,class:i("pivot",{inactive:t.inactive})},[r])}};return()=>{const{trackColor:n,percentage:e,strokeWidth:a}=t,o={background:n,height:k(a)},r={width:`${e}%`,background:c.value};return s("div",{class:i(),style:o},[s("span",{class:i("portion",{inactive:t.inactive}),style:r},null),d()])}}});const S=m(y);export{S as P};
