import{u as oe,d as Se,e as O,a as ie,_ as ke}from"./index.esm.59844faa.js";import{a as Ce,u as le,w as xe,b as Pe,o as Te,i as Q,p as Ie}from"./on-popup-reopen.0dc4b128.js";import{i as D,u as B,n as X,B as M,j as H,r as Ee,C as L,k as g,E,F as ce,P as Ae,M as Be,S as Me,d as p,G as re,a1 as j,t as N,q as ue,a as A,o as W,c as Z,b as c,w as x,p as ze,f as Oe,J as Re,a2 as De,a3 as He,a4 as Ne}from"./index.7d120096.js";import{P as ee}from"./index.cd9f8dbe.js";const[ve,R]=D("swipe"),Ye={loop:B,width:X,height:X,vertical:Boolean,autoplay:M(0),duration:M(500),touchable:B,lazyRender:Boolean,initialSwipe:M(0),indicatorColor:String,showIndicators:B,stopPropagation:B},de=Symbol(ve);var je=H({name:ve,props:Ye,emits:["change"],setup(e,{emit:v,slots:m}){const r=Ee(),t=L({rect:null,width:0,height:0,offset:0,active:0,swiping:!1}),i=Ce(),{children:o,linkChildren:l}=oe(de),a=g(()=>o.length),n=g(()=>t[e.vertical?"height":"width"]),d=g(()=>e.vertical?i.deltaY.value:i.deltaX.value),f=g(()=>t.rect?(e.vertical?t.rect.height:t.rect.width)-n.value*a.value:0),$=g(()=>Math.ceil(Math.abs(f.value)/n.value)),S=g(()=>a.value*n.value),k=g(()=>(t.active+a.value)%a.value),V=g(()=>{const s=e.vertical?"vertical":"horizontal";return i.direction.value===s}),pe=g(()=>{const s={transitionDuration:`${t.swiping?0:e.duration}ms`,transform:`translate${e.vertical?"Y":"X"}(${t.offset}px)`};if(n.value){const h=e.vertical?"height":"width",u=e.vertical?"width":"height";s[h]=`${S.value}px`,s[u]=e[u]?`${e[u]}px`:""}return s}),me=s=>{const{active:h}=t;return s?e.loop?j(h+s,-1,a.value):j(h+s,0,$.value):h},F=(s,h=0)=>{let u=s*n.value;e.loop||(u=Math.min(u,-f.value));let w=h-u;return e.loop||(w=j(w,f.value,0)),w},b=({pace:s=0,offset:h=0,emitChange:u})=>{if(a.value<=1)return;const{active:w}=t,_=me(s),I=F(_,h);if(e.loop){if(o[0]&&I!==f.value){const Y=I<f.value;o[0].setOffset(Y?S.value:0)}if(o[a.value-1]&&I!==0){const Y=I>0;o[a.value-1].setOffset(Y?-S.value:0)}}t.active=_,t.offset=I,u&&_!==w&&v("change",k.value)},z=()=>{t.swiping=!0,t.active<=-1?b({pace:a.value}):t.active>=a.value&&b({pace:-a.value})},ge=()=>{z(),i.reset(),O(()=>{t.swiping=!1,b({pace:-1,emitChange:!0})})},K=()=>{z(),i.reset(),O(()=>{t.swiping=!1,b({pace:1,emitChange:!0})})};let q;const P=()=>clearTimeout(q),T=()=>{P(),e.autoplay>0&&a.value>1&&(q=setTimeout(()=>{K(),T()},+e.autoplay))},C=(s=+e.initialSwipe)=>{if(!r.value)return;const h=()=>{var u,w;if(!Q(r)){const _={width:r.value.offsetWidth,height:r.value.offsetHeight};t.rect=_,t.width=+((u=e.width)!=null?u:_.width),t.height=+((w=e.height)!=null?w:_.height)}a.value&&(s=Math.min(a.value-1,s)),t.active=s,t.swiping=!0,t.offset=F(s),o.forEach(_=>{_.setOffset(0)}),T()};Q(r)?re().then(h):h()},G=()=>C(t.active);let J;const _e=s=>{!e.touchable||(i.start(s),J=Date.now(),P(),z())},we=s=>{e.touchable&&t.swiping&&(i.move(s),V.value&&(Ie(s,e.stopPropagation),b({offset:d.value})))},U=()=>{if(!e.touchable||!t.swiping)return;const s=Date.now()-J,h=d.value/s;if((Math.abs(h)>.25||Math.abs(d.value)>n.value/2)&&V.value){const w=e.vertical?i.offsetY.value:i.offsetX.value;let _=0;e.loop?_=w>0?d.value>0?-1:1:0:_=-Math[d.value>0?"ceil":"floor"](d.value/n.value),b({pace:_,emitChange:!0})}else d.value&&b({pace:0});t.swiping=!1,T()},ye=(s,h={})=>{z(),i.reset(),O(()=>{let u;e.loop&&s===a.value?u=t.active===0?0:s:u=s%a.value,h.immediate?O(()=>{t.swiping=!1}):t.swiping=!1,b({pace:u-t.active,emitChange:!0})})},be=(s,h)=>{const u=h===k.value,w=u?{backgroundColor:e.indicatorColor}:void 0;return p("i",{style:w,class:R("indicator",{active:u})},null)},$e=()=>{if(m.indicator)return m.indicator({active:k.value,total:a.value});if(e.showIndicators&&a.value>1)return p("div",{class:R("indicators",{vertical:e.vertical})},[Array(a.value).fill("").map(be)])};return le({prev:ge,next:K,state:t,resize:G,swipeTo:ye}),l({size:n,props:e,count:a,activeIndicator:k}),E(()=>e.initialSwipe,s=>C(+s)),E(a,()=>C(t.active)),E(()=>e.autoplay,T),E([xe,Pe],G),E(Se(),s=>{s==="visible"?T():P()}),ce(C),Ae(()=>C(t.active)),Te(()=>C(t.active)),Be(P),Me(P),()=>{var s;return p("div",{ref:r,class:R()},[p("div",{style:pe.value,class:R("track",{vertical:e.vertical}),onTouchstart:_e,onTouchmove:we,onTouchend:U,onTouchcancel:U},[(s=m.default)==null?void 0:s.call(m)]),$e()])}}});const te=N(je),[We,Xe]=D("swipe-item");var Le=H({name:We,setup(e,{slots:v}){let m;const r=L({offset:0,inited:!1,mounted:!1}),{parent:t,index:i}=ie(de);if(!t)return;const o=g(()=>{const n={},{vertical:d}=t.props;return t.size.value&&(n[d?"height":"width"]=`${t.size.value}px`),r.offset&&(n.transform=`translate${d?"Y":"X"}(${r.offset}px)`),n}),l=g(()=>{const{loop:n,lazyRender:d}=t.props;if(!d||m)return!0;if(!r.mounted)return!1;const f=t.activeIndicator.value,$=t.count.value-1,S=f===0&&n?$:f-1,k=f===$&&n?0:f+1;return m=i.value===f||i.value===S||i.value===k,m}),a=n=>{r.offset=n};return ce(()=>{re(()=>{r.mounted=!0})}),le({setOffset:a}),()=>{var n;return p("div",{class:Xe(),style:o.value},[l.value?(n=v.default)==null?void 0:n.call(v):null])}}});const ae=N(Le),[fe,Ve]=D("row"),he=Symbol(fe),Fe={tag:ue("div"),wrap:B,align:String,gutter:M(0),justify:String};var Ke=H({name:fe,props:Fe,setup(e,{slots:v}){const{children:m,linkChildren:r}=oe(he),t=g(()=>{const o=[[]];let l=0;return m.forEach((a,n)=>{l+=Number(a.span),l>24?(o.push([n]),l-=24):o[o.length-1].push(n)}),o}),i=g(()=>{const o=Number(e.gutter),l=[];return o&&t.value.forEach(a=>{const n=o*(a.length-1)/a.length;a.forEach((d,f)=>{if(f===0)l.push({right:n});else{const $=o-l[d-1].right,S=n-$;l.push({left:$,right:S})}})}),l});return r({spaces:i}),()=>{const{tag:o,wrap:l,align:a,justify:n}=e;return p(o,{class:Ve({[`align-${a}`]:a,[`justify-${n}`]:n,nowrap:!l})},{default:()=>{var d;return[(d=v.default)==null?void 0:d.call(v)]}})}}});const[qe,Ge]=D("col"),Je={tag:ue("div"),span:M(0),offset:X};var Ue=H({name:qe,props:Je,setup(e,{slots:v}){const{parent:m,index:r}=ie(he),t=g(()=>{if(!m)return;const{spaces:i}=m;if(i&&i.value&&i.value[r.value]){const{left:o,right:l}=i.value[r.value];return{paddingLeft:o?`${o}px`:null,paddingRight:l?`${l}px`:null}}});return()=>{const{tag:i,span:o,offset:l}=e;return p(i,{style:t.value,class:Ge({[o]:o,[`offset-${l}`]:l})},{default:()=>{var a;return[(a=v.default)==null?void 0:a.call(v)]}})}}});const se=N(Ue),ne=N(Ke);const Qe={name:"home",setup(){let e=["/src/assets/Home_banner_1.png","/src/assets/Home_banner_2.png","/src/assets/Home_banner_3.png"],v=L({temperature:"13.8",humidity:"42",light:"80"});return{images:e,data:v}},components:{[te.name]:te,[ae.name]:ae,[ee.name]:ee,[se.name]:se,[ne.name]:ne}},y=e=>(ze("data-v-1574aa4e"),e=e(),Oe(),e),Ze={class:"containe"},et=y(()=>c("div",{class:"atitle"},"\u9996 \u9875",-1)),tt={class:"banner"},at=["src"],st=y(()=>c("div",{class:"title"},[c("p",null,"\u6570\u636E\u4E2D\u5FC3")],-1)),nt={class:"data-show"},ot=y(()=>c("p",null,"\u6E29\u5EA6\u76D1\u6D4B",-1)),it={class:"progress"},lt=y(()=>c("p",null,"33%",-1)),ct=y(()=>c("p",null,"42%",-1)),rt=y(()=>c("p",null,"\u6E7F\u5EA6\u76D1\u6D4B",-1)),ut=[ct,rt],vt={class:"progress"},dt=y(()=>c("p",null,"70%",-1)),ft=y(()=>c("p",null,"80 lux",-1)),ht=y(()=>c("p",null,"\u5149\u5F3A\u76D1\u6D4B",-1)),pt=[ft,ht],mt={class:"progress"},gt=y(()=>c("p",null,"50%",-1));function _t(e,v,m,r,t,i){const o=A("van-swipe-item"),l=A("van-swipe"),a=A("van-progress"),n=A("van-col"),d=A("van-row");return W(),Z("div",Ze,[et,c("div",tt,[p(l,{class:"my-swipe",autoplay:3e3,"indicator-color":"white"},{default:x(()=>[(W(!0),Z(Re,null,De(r.images,f=>(W(),Ne(o,{key:f},{default:x(()=>[c("img",{src:f,alt:"",style:{width:"100vw"}},null,8,at)]),_:2},1024))),128))]),_:1})]),c("body",null,[st,c("div",nt,[p(d,{justify:"space-between"},{default:x(()=>[p(n,{span:"11",class:"one adata"},{default:x(()=>[c("div",{class:"mesg",onClick:v[0]||(v[0]=f=>e.$router.push("temperature"))},[c("p",null,He(r.data.temperature)+"\u2103",1),ot]),c("div",it,[p(a,{percentage:33,"stroke-width":"2","show-pivot":!1,style:{width:"80%"},"track-color":"rgba(255,255,255,0.5)",color:"white"}),lt])]),_:1}),p(n,{span:"11",class:"two adata"},{default:x(()=>[c("div",{class:"mesg",onClick:v[1]||(v[1]=f=>e.$router.push("humidity"))},ut),c("div",vt,[p(a,{percentage:70,"stroke-width":"2","show-pivot":!1,style:{width:"80%"},color:"white","track-color":"rgba(255,255,255,0.5)"}),dt])]),_:1}),p(n,{span:"11",class:"three adata"},{default:x(()=>[c("div",{class:"mesg",onClick:v[2]||(v[2]=f=>e.$router.push("light"))},pt),c("div",mt,[p(a,{percentage:50,"stroke-width":"2","show-pivot":!1,"track-color":"rgba(255,255,255,0.5)",style:{width:"80%"},color:"white"}),gt])]),_:1})]),_:1})])])])}var St=ke(Qe,[["render",_t],["__scopeId","data-v-1574aa4e"]]);export{St as default};
