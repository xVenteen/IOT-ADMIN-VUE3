import{B as u,F as _,C as g,a as v,r as w,_ as C}from"./Login-page_Illustration.2c36299b.js";import{r as m,a as i,o as h,c as k,b as e,d as r,w as c,e as N,g as x}from"./index.2e2453f5.js";import{_ as B}from"./index.esm.9be8a6aa.js";import{N as f}from"./axios.925a58c6.js";import"./index.4ecf0e1e.js";import"./on-popup-reopen.e96fefc3.js";const q={name:"regist",setup(){const n=m(""),s=m(""),d=m("");return{username:n,password:s,password2:d,passVerify:a=>/^[0-9a-zA-Z]{6,12}$/.test(a),passConfirm:()=>d.value===s.value,registClick:async a=>{console.log(a);let l=(await w({passWord:s.value,userName:n.value})).data.code;console.log(l),l==="1"?(f({type:"success",message:"\u6CE8\u518C\u6210\u529F"}),N.push("login")):l==="3"&&f({type:"danger",message:"\u7528\u6237\u540D\u5B58\u5728"})}}},components:{[u.name]:u,[_.name]:_,[g.name]:g,[v.name]:v}},F={class:"container"},U=e("div",{class:"regist-bgc"},[e("img",{src:C,alt:"",style:{widht:"100%"}}),e("div",{class:"regist-bgc-b"})],-1),S={class:"regist"},W=e("div",{class:"title1"},[e("p",null,"\u667A\u6167\u519C\u4E1A\u73AF\u5883\u76D1\u6D4B\u7CFB\u7EDF")],-1),z={class:"regist-form"},A=e("div",{class:"title2"},[e("p",null,"\u667A\u6167\u519C\u4E1A\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6CE8\u518C")],-1),E={class:"form"},G={style:{margin:"16px"}},T=x(" \u6CE8\u518C "),Z={class:"footer"};function j(n,s,d,o,y,V){const a=i("van-field"),p=i("van-cell-group"),l=i("van-button"),b=i("van-form");return h(),k("div",F,[U,e("div",S,[W,e("div",z,[A,e("div",E,[r(b,{onSubmit:o.registClick},{default:c(()=>[r(p,{inset:""},{default:c(()=>[r(a,{modelValue:o.username,"onUpdate:modelValue":s[0]||(s[0]=t=>o.username=t),name:"userName",label:"\u7528\u6237\u540D",placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u7528\u6237\u540D"}]},null,8,["modelValue"]),r(a,{modelValue:o.password,"onUpdate:modelValue":s[1]||(s[1]=t=>o.password=t),type:"password",name:"passWord",label:"\u5BC6\u7801",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u5BC6\u7801"},{validator:o.passVerify,message:"\u8BF7\u8F93\u51656~12\u4F4D\u7531\u5B57\u6BCD\u548C\u6570\u5B57\u7EC4\u6210\u5BC6\u7801"}]},null,8,["modelValue","rules"]),r(a,{modelValue:o.password2,"onUpdate:modelValue":s[2]||(s[2]=t=>o.password2=t),type:"password",name:"password2",label:"\u786E\u8BA4\u5BC6\u7801",placeholder:"\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u5BC6\u7801"},{validator:o.passConfirm,message:"\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u81F4"}]},null,8,["modelValue","rules"])]),_:1}),e("div",G,[r(l,{round:"",block:"",type:"primary","native-type":"submit"},{default:c(()=>[T]),_:1})])]),_:1},8,["onSubmit"])]),e("div",Z,[e("p",{onClick:s[3]||(s[3]=t=>n.$router.push("login"))},"\u5DF2\u6709\u8D26\u53F7\uFF0C\u53BB\u767B\u9646!")])])])])}var M=B(q,[["render",j]]);export{M as default};
