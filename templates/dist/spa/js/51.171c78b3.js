(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[51],{"393d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",[e("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[e("q-table",{staticClass:"my-sticky-header-column-table shadow-24",attrs:{data:t.table_list,"row-key":"id",separator:t.separator,loading:t.loading,filter:t.filter,columns:t.columns,"hide-bottom":"",pagination:t.pagination,"no-data-label":"No data","no-results-label":"No data you want","table-style":{height:t.height},flat:"",bordered:""},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top",fn:function(){return[e("q-btn-group",{attrs:{push:""}},[e("q-btn",{attrs:{label:t.$t("refresh"),icon:"refresh"},on:{click:function(e){return t.reFresh()}}},[e("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v(t._s(t.$t("refreshtip")))])],1)],1),e("q-space"),e("q-input",{attrs:{outlined:"",rounded:"",dense:"",debounce:"300",color:"primary",placeholder:t.$t("search")},on:{input:function(e){return t.getSearchList()},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getSearchList()}},scopedSlots:t._u([{key:"append",fn:function(){return[e("q-icon",{attrs:{name:"search"},on:{click:function(e){return t.getSearchList()}}})]},proxy:!0}]),model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})]},proxy:!0},{key:"body",fn:function(a){return[e("q-tr",{attrs:{props:a}},[e("q-td",{key:"bin_name",attrs:{props:a}},[t._v(t._s(a.row.bin_name))]),e("q-td",{key:"goods_code",attrs:{props:a}},[t._v(t._s(a.row.goods_code))]),e("q-td",{key:"goods_desc",attrs:{props:a}},[t._v(t._s(a.row.goods_desc))]),e("q-td",{key:"goods_qty",attrs:{props:a}},[t._v(t._s(a.row.goods_qty))]),e("q-td",{key:"pick_qty",attrs:{props:a}},[t._v(t._s(a.row.pick_qty))]),e("q-td",{key:"picked_qty",attrs:{props:a}},[t._v(t._s(a.row.picked_qty))]),e("q-td",{key:"bin_size",attrs:{props:a}},[t._v(t._s(a.row.bin_size))]),e("q-td",{key:"bin_property",attrs:{props:a}},[t._v(t._s(a.row.bin_property))]),e("q-td",{key:"create_time",attrs:{props:a}},[t._v(t._s(a.row.create_time))]),e("q-td",{key:"update_time",attrs:{props:a}},[t._v(t._s(a.row.update_time))]),e("q-td",{key:"action",staticStyle:{width:"50px"},attrs:{props:a}},[e("q-btn",{directives:[{name:"show",rawName:"v-show",value:"Inbound"!==t.$q.localStorage.getItem("staff_type")&&"Outbound"!==t.$q.localStorage.getItem("staff_type"),expression:"$q.localStorage.getItem('staff_type') !== 'Inbound' && $q.localStorage.getItem('staff_type') !== 'Outbound'"}],attrs:{round:"",flat:"",push:"",color:"purple",icon:"move_to_inbox"},on:{click:function(e){return t.BinMove(a.row)}}},[e("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v(t._s(t.$t("movetobin")))])],1)],1)],1)]}}])})],1),[e("div",{directives:[{name:"show",rawName:"v-show",value:0!==t.max,expression:"max !== 0"}],staticClass:"q-pa-lg flex flex-center"},[e("div",[t._v(t._s(t.total)+" ")]),e("q-pagination",{attrs:{color:"black",max:t.max,"max-pages":6,"boundary-links":""},on:{click:function(e){return t.getList()}},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}}),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.paginationIpt,expression:"paginationIpt"}],staticStyle:{width:"60px","text-align":"center"},domProps:{value:t.paginationIpt},on:{blur:t.changePageEnter,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.changePageEnter.apply(null,arguments)},input:function(e){e.target.composing||(t.paginationIpt=e.target.value)}}})])],1),e("div",{directives:[{name:"show",rawName:"v-show",value:0===t.max,expression:"max === 0"}],staticClass:"q-pa-lg flex flex-center"},[e("q-btn",{attrs:{flat:"",push:"",color:"dark",label:t.$t("no_data")}})],1)],e("q-dialog",{model:{value:t.moveForm,callback:function(e){t.moveForm=e},expression:"moveForm"}},[e("q-card",{staticClass:"shadow-24"},[e("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[e("div",[t._v(t._s(t.movedata.goods_code)+" "+t._s(t.$t("frombin"))+" "+t._s(t.movedata.bin_name))]),e("q-space"),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[e("q-tooltip",[t._v(t._s(t.$t("index.close")))])],1)],1),e("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"325px",width:"400px"}},[e("q-input",{staticStyle:{"margin-bottom":"5px"},attrs:{dense:"",outlined:"",square:"",debounce:"500",type:"number",label:t.$t("stock.view_stocklist.goods_qty"),rules:[e=>e&&e>0||t.error1]},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.MoveToBinSubmit()}},scopedSlots:t._u([{key:"before",fn:function(){return[e("q-select",{attrs:{dense:"",outlined:"",square:"","use-input":"","hide-selected":"","fill-input":"",label:t.$t("warehouse.view_binset.bin_name"),options:t.options},on:{filter:t.filterFn,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.MoveToBinSubmit()}},scopedSlots:t._u([{key:"no-option",fn:function(){return[e("q-item",[e("q-item-section",{staticClass:"text-grey"},[t._v("No results")])],1)]},proxy:!0},t.movedata.move_to_bin?{key:"append",fn:function(){return[e("q-icon",{staticClass:"cursor-pointer",attrs:{name:"cancel"},on:{click:function(e){e.stopPropagation(),t.movedata.move_to_bin=""}}})]},proxy:!0}:null],null,!0),model:{value:t.movedata.move_to_bin,callback:function(e){t.$set(t.movedata,"move_to_bin",e)},expression:"movedata.move_to_bin"}})]},proxy:!0}]),model:{value:t.movedata.move_qty,callback:function(e){t.$set(t.movedata,"move_qty",t._n(e))},expression:"movedata.move_qty"}})],1),e("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[e("q-btn",{staticStyle:{"margin-right":"25px"},attrs:{color:"white","text-color":"black"},on:{click:function(e){return t.MoveToBinCancel()}}},[t._v(t._s(t.$t("cancel")))]),e("q-btn",{attrs:{color:"primary"},on:{click:function(e){return t.MoveToBinSubmit()}}},[t._v(t._s(t.$t("submit")))])],1)],1)],1)],2)},o=[],i=a("3004"),r=a("a639"),s=a("18d6"),l={name:"Pagestockbinlist",data(){return{openid:"",login_name:"",authin:"0",pathname:"stock/bin/",pathname_previous:"",pathname_next:"",separator:"cell",loading:!1,height:"",table_list:[],bin_size_list:[],bin_property_list:[],warehouse_list:[],columns:[{name:"bin_name",required:!0,label:this.$t("warehouse.view_binset.bin_name"),align:"left",field:"bin_name"},{name:"goods_code",label:this.$t("stock.view_stocklist.goods_code"),field:"goods_code",align:"center"},{name:"goods_desc",label:this.$t("stock.view_stocklist.goods_desc"),field:"onhand_stock",align:"center"},{name:"goods_qty",label:this.$t("stock.view_stocklist.onhand_stock"),field:"goods_qty",align:"center"},{name:"pick_qty",label:this.$t("stock.view_stocklist.pick_stock"),field:"pick_qty",align:"center"},{name:"picked_qty",label:this.$t("stock.view_stocklist.picked_stock"),field:"picked_qty",align:"center"},{name:"bin_size",label:this.$t("warehouse.view_binset.bin_size"),field:"bin_size",align:"center"},{name:"bin_property",label:this.$t("warehouse.view_binset.bin_property"),field:"bin_property",align:"center"},{name:"create_time",label:this.$t("createtime"),field:"create_time",align:"center"},{name:"update_time",label:this.$t("updatetime"),field:"update_time",align:"center"},{name:"action",label:this.$t("action"),align:"right"}],filter:"",pagination:{page:1,rowsPerPage:"30"},options:[],moveForm:!1,movedata:{},error1:this.$t("inbound.view_sortstock.error1"),current:1,max:0,total:0,paginationIpt:1}},methods:{getList(){var t=this;s["a"].has("auth")&&Object(i["f"])(t.pathname+"?page="+t.current,{}).then((e=>{t.table_list=e.results,t.total=e.count,0===e.count||1===Math.ceil(e.count/30)?t.max=0:t.max=Math.ceil(e.count/30),"zh-hans"===s["a"].getItem("lang")&&t.table_list.forEach(((t,e)=>{"Damage"===t.bin_property?t.bin_property="破损":"Inspection"===t.bin_property?t.bin_property="质检":"Holding"===t.bin_property?t.bin_property="锁货":"Normal"===t.bin_property&&(t.bin_property="正常库位")})),t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},changePageEnter(t){Number(this.paginationIpt)<1?(this.current=1,this.paginationIpt=1):Number(this.paginationIpt)>this.max?(this.current=this.max,this.paginationIpt=this.max):this.current=Number(this.paginationIpt),this.getList()},getSearchList(){var t=this;s["a"].has("auth")&&(t.current=1,t.paginationIpt=1,Object(i["f"])(t.pathname+"?bin_name__icontains="+t.filter+"&page="+t.current,{}).then((e=>{t.table_list=e.results,t.total=e.count,0===e.count||1===Math.ceil(e.count/30)?t.max=0:t.max=Math.ceil(e.count/30),"zh-hans"===s["a"].getItem("lang")&&t.table_list.forEach(((t,e)=>{"Damage"===t.bin_property?t.bin_property="破损":"Inspection"===t.bin_property?t.bin_property="质检":"Holding"===t.bin_property?t.bin_property="锁货":"Normal"===t.bin_property&&(t.bin_property="正常库位")})),t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})})))},getListPrevious(){var t=this;s["a"].has("auth")&&Object(i["f"])(t.pathname_previous,{}).then((e=>{t.table_list=e.results,"zh-hans"===s["a"].getItem("lang")&&t.table_list.forEach(((t,e)=>{"Damage"===t.bin_property?t.bin_property="破损":"Inspection"===t.bin_property?t.bin_property="质检":"Holding"===t.bin_property?t.bin_property="锁货":"Normal"===t.bin_property&&(t.bin_property="正常库位")})),t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getListNext(){var t=this;s["a"].has("auth")&&Object(i["f"])(t.pathname_next,{}).then((e=>{t.table_list=e.results,"zh-hans"===s["a"].getItem("lang")&&t.table_list.forEach(((t,e)=>{"Damage"===t.bin_property?t.bin_property="破损":"Inspection"===t.bin_property?t.bin_property="质检":"Holding"===t.bin_property?t.bin_property="锁货":"Normal"===t.bin_property&&(t.bin_property="正常库位")})),t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},reFresh(){var t=this;t.getList()},BinMove(t){var e=this;e.moveForm=!0,e.movedata=t},MoveToBinCancel(){var t=this;t.moveForm=!1,t.movedata={}},MoveToBinSubmit(){var t=this;Object(i["i"])(t.pathname+t.movedata.id+"/",t.movedata).then((e=>{t.getList(),t.MoveToBinCancel(),t.$q.notify({message:"Bin Moving Success",icon:"check",color:"green"})})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},filterFn(t,e,a){var n=this;t.length<1?a():e((()=>{const e=t.toLowerCase();Object(i["f"])("binset/?bin_name__icontains="+e).then((t=>{var e=[];t.results.forEach((t=>{e.push(t.bin_name)})),r["a"].set("bin_name",e),n.options=r["a"].getItem("bin_name")})).catch((t=>{n.$q.notify({message:t.detail,icon:"close",color:"negative"})}))}))}},created(){var t=this;s["a"].has("openid")?t.openid=s["a"].getItem("openid"):(t.openid="",s["a"].set("openid","")),s["a"].has("login_name")?t.login_name=s["a"].getItem("login_name"):(t.login_name="",s["a"].set("login_name","")),s["a"].has("auth")?(t.authin="1",t.getList()):t.authin="0"},mounted(){var t=this;t.$q.platform.is.electron?t.height=String(t.$q.screen.height-290)+"px":t.height=t.$q.screen.height-290+"px"},updated(){},destroyed(){}},c=l,p=a("42e1"),d=a("b8b7"),_=a("eaac"),u=a("e7a9"),m=a("9c40"),b=a("05c0"),h=a("2c91"),g=a("27f9"),v=a("0016"),y=a("bd08"),f=a("db86"),k=a("3b16"),q=a("24e8"),x=a("f09f"),w=a("d847"),$=a("a370"),I=a("ddd8"),S=a("66e5"),C=a("4074"),Q=a("7f67"),N=a("eebe"),M=a.n(N),O=Object(p["a"])(c,n,o,!1,null,null,null);"function"===typeof d["default"]&&Object(d["default"])(O);e["default"]=O.exports;M()(O,"components",{QTable:_["a"],QBtnGroup:u["a"],QBtn:m["a"],QTooltip:b["a"],QSpace:h["a"],QInput:g["a"],QIcon:v["a"],QTr:y["a"],QTd:f["a"],QPagination:k["a"],QDialog:q["a"],QCard:x["a"],QBar:w["a"],QCardSection:$["a"],QSelect:I["a"],QItem:S["a"],QItemSection:C["a"]}),M()(O,"directives",{ClosePopup:Q["a"]})},"5d1c":function(t,e){},b8b7:function(t,e,a){"use strict";var n=a("5d1c"),o=a.n(n);e["default"]=o.a}}]);