import{B as _,F as g,C as v,a as f,r as h,_ as C}from"./Login-page_Illustration.062ffc12.js";import{r as m,a as i,o as k,c as N,b as e,d as l,w as c,e as x,p as B,f as S,g as I}from"./index.da9ace97.js";import{_ as q}from"./index.esm.a7e05fb8.js";import{N as y}from"./axios.f1baefee.js";import"./index.f5adf966.js";import"./on-popup-reopen.c93698cd.js";const F={name:"regist",setup(){const a=m(""),s=m(""),d=m("");return{username:a,password:s,password2:d,passVerify:t=>/^[0-9a-zA-Z]{6,12}$/.test(t),passConfirm:()=>d.value===s.value,registClick:async t=>{console.log(t);let n=(await h({passWord:s.value,userName:a.value})).data.code;console.log(n),n==="1"?(y({type:"success",message:"\u6CE8\u518C\u6210\u529F"}),x.push("login")):n==="3"&&y({type:"danger",message:"\u7528\u6237\u540D\u5B58\u5728"})}}},components:{[_.name]:_,[g.name]:g,[v.name]:v,[f.name]:f}},p=a=>(B("data-v-59bc5f2a"),a=a(),S(),a),U={class:"container"},W=p(()=>e("div",{class:"regist-bgc"},[e("img",{src:C,alt:"",style:{widht:"100%"}}),e("div",{class:"regist-bgc-b"})],-1)),z={class:"regist"},A=p(()=>e("div",{class:"title1"},[e("p",null,"\u667A\u6167\u519C\u4E1A\u73AF\u5883\u76D1\u6D4B\u7CFB\u7EDF")],-1)),E={class:"regist-form"},G=p(()=>e("div",{class:"title2"},[e("p",null,"\u667A\u6167\u519C\u4E1A\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6CE8\u518C")],-1)),T={class:"form"},Z={style:{margin:"16px"}},j=I(" \u6CE8\u518C "),D={class:"footer"};function H(a,s,d,o,b,V){const t=i("van-field"),u=i("van-cell-group"),n=i("van-button"),w=i("van-form");return k(),N("div",U,[W,e("div",z,[A,e("div",E,[G,e("div",T,[l(w,{onSubmit:o.registClick},{default:c(()=>[l(u,{inset:""},{default:c(()=>[l(t,{modelValue:o.username,"onUpdate:modelValue":s[0]||(s[0]=r=>o.username=r),name:"userName",label:"\u7528\u6237\u540D",placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u7528\u6237\u540D"}]},null,8,["modelValue"]),l(t,{modelValue:o.password,"onUpdate:modelValue":s[1]||(s[1]=r=>o.password=r),type:"password",name:"passWord",label:"\u5BC6\u7801",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u5BC6\u7801"},{validator:o.passVerify,message:"\u8BF7\u8F93\u51656~12\u4F4D\u7531\u5B57\u6BCD\u548C\u6570\u5B57\u7EC4\u6210\u5BC6\u7801"}]},null,8,["modelValue","rules"]),l(t,{modelValue:o.password2,"onUpdate:modelValue":s[2]||(s[2]=r=>o.password2=r),type:"password",name:"password2",label:"\u786E\u8BA4\u5BC6\u7801",placeholder:"\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u5BC6\u7801"},{validator:o.passConfirm,message:"\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u81F4"}]},null,8,["modelValue","rules"])]),_:1}),e("div",Z,[l(n,{round:"",block:"",type:"primary","native-type":"submit"},{default:c(()=>[j]),_:1})])]),_:1},8,["onSubmit"])]),e("div",D,[e("p",{onClick:s[3]||(s[3]=r=>a.$router.push("login"))},"\u5DF2\u6709\u8D26\u53F7\uFF0C\u53BB\u767B\u9646!")])])])])}var Q=q(F,[["render",H],["__scopeId","data-v-59bc5f2a"]]);export{Q as default};