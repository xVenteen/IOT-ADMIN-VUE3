import{_ as m}from"./pie.9ccc0257.js";import{N as n,_ as v,L as r}from"./category.61f96679.js";import{_ as h}from"./index.esm.71dc701c.js";import{a,o as g,c as u,b as e,d as s,p as y,f as w,a5 as x}from"./index.1075fbdb.js";import{P as l}from"./index.2e06993d.js";import"./index.e48805ac.js";var b="./assets/Temperature-page_wind-icon.3c03f8d1.png";const S={name:"temperature",components:{[l.name]:l,[n.name]:n,pie:m,category:v},setup(){let t={grid:{left:"20",containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},xAxis:{type:"category",data:["2AM","6AM","10AM","14AM","18PM","22PM"]},yAxis:{type:"value",axisLabel:{formatter:"{value} \xB0C"}},series:[{data:[14.1,9.6,17.8,18.2,16.4,20.1],type:"line",smooth:!0,showSymbol:!1,lineStyle:{normal:{width:5,color:{type:"linear",x:0,y:0,colorStops:[{offset:0,color:"#4267ff"},{offset:1,color:"#18b4fe"}]},shadowColor:"#4267ff",shadowOffsetY:6,shadowBlur:6,opacity:1}}}]},o={title:{text:"\u6E29\u5EA6\u5360\u6BD4",left:"center",top:"center"},legend:{bottom:"1%",left:"center"},series:[{type:"pie",data:[{value:19,name:"\u98CE\u901F",itemStyle:{normal:{color:new r(1,1,1,0,[{offset:0,color:"#4461f4"},{offset:.5,color:"#8481ff"}])}}},{value:57.6,name:"\u4E8C\u6C27\u5316\u78B3",itemStyle:{normal:{color:new r(0,1,1,1,[{offset:0,color:"#0659ff"},{offset:.5,color:"#19b3fe"}])}}},{value:23.4,name:"\u6E29\u5EA6",itemStyle:{normal:{color:new r(1,1,1,0,[{offset:0,color:"#fa8d29"},{offset:.5,color:"#fdc922"}])}}}],radius:["30%","60%"],emphasis:{label:{show:!0,fontSize:"15",fontWeight:"bold"}},itemStyle:{normal:{label:{show:!0,formatter:`{b}
{d}%`},labelLine:{show:!0}}}}]};return{option:t,optionPie:o}}},c=t=>(y("data-v-50504894"),t=t(),w(),t),P={class:"containe"},k={class:"header"},A={class:"data-boxs"},L={class:"one adata"},M=c(()=>e("div",{class:"mesg"},[e("p",{style:{"margin-right":"10px"}},"13.8\u2103"),e("p",null,"\u6E29\u5EA6")],-1)),$={class:"progress"},B=c(()=>e("p",null,"70%",-1)),C=x('<div class="two adata2" data-v-50504894><div class="adata-pic co2" data-v-50504894><p style="margin-left:10px;" data-v-50504894>CO</p><p style="font-size:10px;margin-right:10px;" data-v-50504894>2</p></div><div class="mesg" data-v-50504894><p data-v-50504894>\u4E8C\u6C27\u5316\u78B3</p><p data-v-50504894>178mg</p></div></div><div class="three adata2" data-v-50504894><div class="adata-pic" data-v-50504894><img src="'+b+'" alt="" data-v-50504894></div><div class="mesg" data-v-50504894><p data-v-50504894>\u98CE\u901F</p><p data-v-50504894>26km/h</p></div></div>',2),N={class:"main"},I={class:"pie"},V={class:"category"};function z(t,o,O,i,E,G){const d=a("van-nav-bar"),p=a("van-progress"),_=a("pie"),f=a("category");return g(),u("div",P,[e("div",k,[s(d,{title:"\u5B9E\u65F6\u6E29\u5EA6\u6570\u636E\u76D1\u6D4B","left-text":"\u8FD4\u56DE","left-arrow":"",onClickLeft:o[0]||(o[0]=T=>t.$router.push("home")),style:{margin:"20px 0"}}),e("div",A,[e("div",L,[M,e("div",$,[s(p,{percentage:50,"stroke-width":"2","show-pivot":!1,style:{width:"80%"},"track-color":"rgba(255,255,255,0.5)",color:"white"}),B])]),C]),e("div",N,[e("div",I,[s(_,{option:i.optionPie},null,8,["option"])]),e("div",V,[s(f,{option:i.option},null,8,["option"])])])])])}var H=h(S,[["render",z],["__scopeId","data-v-50504894"]]);export{H as default};
