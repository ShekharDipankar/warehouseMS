import{Q as u}from"./QItemLabel.eebaef21.js";import{Q as G,b as S,a as E}from"./QList.11d71217.js";import{_ as H,aD as J,L as K,aS as O,r as _,c as t,w as $,o as W,R as N,S as X,U as s,f as n,Y as r,Z as c,a1 as F,$ as M,a0 as ee,F as R,V as ae,a3 as te}from"./index.00b9ba2d.js";import{u as ne}from"./use-quasar.fc44b205.js";import{a as se}from"./index.9b9dbd7c.js";import{u as oe}from"./vue-i18n.runtime.esm-bundler.31fc5397.js";import"./axios.d3fea899.js";const ce=J({name:"DNDetail",data(){return{}},setup(){const e=K();O();const g=ne(),f=_(0);_({}),_(!1),_([]);const{t:i}=oe(),Q=t({get:()=>e.state.fabchange.fab1}),V=t({get:()=>e.state.fabchange.fab2}),d=t({get:()=>e.state.fabchange.fab3}),m=t({get:()=>e.state.fabchange.fab4}),w=t({get:()=>e.state.screenchange.screenscroll}),b=t({get:()=>e.state.loginauth.authin}),j=t({get:()=>e.state.loginauth.login_name}),I=t({get:()=>e.state.loginauth.operator}),A=t({get:()=>e.state.settings.openid}),B=t({get:()=>e.state.langchange.lang}),D=t({get:()=>e.state.settings.server}),P=t({get:()=>e.state.scanchanged.scandata,set:a=>{e.commit("scanchanged/ScanChanged",a)}}),Y=t({get:()=>e.state.scanchanged.datadetail,set:a=>{e.commit("scanchanged/ScanDataChanged",a)}}),Z=t({get:()=>e.state.scanchanged.asndata,set:a=>{e.commit("scanchanged/ASNDataChanged",a)}}),L=t({get:()=>e.state.scanchanged.dndata,set:a=>{e.commit("scanchanged/DNDataChanged",a)}}),z=t({get:()=>e.state.scanchanged.bindata,set:a=>{e.commit("scanchanged/BinDataChanged",a)}}),h=t({get:()=>e.state.scanchanged.tablelist,set:a=>{e.commit("scanchanged/TableDataChanged",a)}}),y=t({get:()=>e.state.scanchanged.scanmode,set:a=>{e.commit("scanchanged/ScanModeChanged",a)}}),T=t({get:()=>e.state.scanchanged.bar_scanned}),p=t({get:()=>e.state.scanchanged.apiurl,set:a=>{e.commit("scanchanged/ApiUrlChanged",a)}}),v=t({get:()=>e.state.scanchanged.apiurlnext,set:a=>{e.commit("scanchanged/ApiUrlNextChanged",a)}}),U=t({get:()=>e.state.scanchanged.apiurlprevious,set:a=>{e.commit("scanchanged/ApiUrlPreviousChanged",a)}});function k(a){if(a!==null){var o=D.value.split(":"),l=a.split(":");return o[0]!==l[0]?o[0]+":"+l[1]:l}else return null}function q(){h.value=[],p.value=D.value+"dn/detail/?dn_code="+L.value,x("")}function x(a){se.get(p.value+a,{headers:{"Content-Type":'application/json, charset="utf-8"',token:A.value,language:B.value,operator:I.value}}).then(o=>{if(o.data.detail)g.notify({type:"negative",message:i("notice.mobile_scan.notice1")});else{var l=[];h.value.forEach(C=>{l.push(C)}),o.data.results.forEach(C=>{l.push(C)}),h.value=l,U.value=k(o.data.previous),v.value=k(o.data.next)}}).catch(o=>{g.notify({type:"negative",message:i("notice.mobile_scan.notice3")})})}return $(T,(a,o)=>{y.value==="DN"&&q()}),$(w,(a,o)=>{a===1?v.value!==null&&(p.value=v.value,f.value=1):f.value=0}),$(f,(a,o)=>{a===1&&(b.value==="0"?g.notify({type:"negative",message:i("notice.mobile_userlogin.notice9")}):x(""))}),W(()=>{b.value==="0"?g.notify({type:"negative",message:i("notice.mobile_userlogin.notice9")}):(y.value="DN",q())}),{t:i,fab1:Q,fab2:V,fab3:d,fab4:m,screenscroll:w,authin:b,login_name:j,openid:A,operator:I,lang:B,requestauth:f,baseurl:D,apiurl:p,apiurlnext:v,apiurlprevious:U,scandata:P,datadetail:Y,tablelist:h,asndata:Z,dndata:L,bindata:z,scanmode:y,bar_scanned:T}}});function le(e,g,f,i,Q,V){return N(),X(G,{bordered:"",padding:""},{default:s(()=>[n(E,null,{default:s(()=>[n(S,null,{default:s(()=>[n(u,{overline:""},{default:s(()=>[r(c(e.$t("notice.mobile_dn.notice6")),1)]),_:1}),n(u,{caption:""},{default:s(()=>[r(c(e.$t("notice.mobile_dn.notice7")),1)]),_:1})]),_:1})]),_:1}),n(F,{spaced:""}),(N(!0),M(R,null,ee(e.tablelist,(d,m)=>(N(),M(R,{key:m},[n(E,null,{default:s(()=>[n(S,null,{default:s(()=>[n(u,null,{default:s(()=>[r(c(d.dn_code),1)]),_:2},1024),n(u,{caption:"",lines:"2"},{default:s(()=>[r(c(d.goods_code),1)]),_:2},1024)]),_:2},1024),n(S,{side:"",top:""},{default:s(()=>[n(u,{caption:""},{default:s(()=>[r(c(e.$t("notice.mobile_dn.notice9"))+c(d.goods_cost),1)]),_:2},1024),n(u,{caption:""},{default:s(()=>[r(c(e.$t("notice.mobile_dn.notice10"))+c(d.goods_qty),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),ae(n(F,{spaced:"",inset:"item"},null,512),[[te,m+1!==e.tablelist.length]])],64))),128))]),_:1})}var he=H(ce,[["render",le]]);export{he as default};
