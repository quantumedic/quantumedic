webpackJsonp([8],{"2k13":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("Dd8w"),a=n.n(s),i=n("NYxO"),r={computed:a()({},Object(i.c)({list:function(t){return t.SearchModule.contribution_list}})),methods:a()({},Object(i.b)({searchMyContributions:"searchMyContributions"}),{search:function(){this.searchMyContributions()}}),created:function(){this.search()}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.list,function(e){return n("div",[n("h4",[t._v("\n\t\t\t"+t._s(e.title?e.title:"未命名草稿")+"\n\t\t\t"),n("router-link",{staticClass:"small",attrs:{to:{name:"edit",params:{id:e.id}}}},[t._v("\n\t\t\t\t编辑\n\t\t\t")])],1),t._v(" "),n("p",{staticClass:"small"},t._l(e.tags,function(e){return n("router-link",{key:e.id,staticClass:"tag",attrs:{to:{name:"tag",params:{id:e.id}}}},[t._v("\n\t\t\t\t"+t._s(e.name)+"\n\t\t\t")])})),t._v(" "),e.abstract?n("p",[t._v(t._s(e.abstract))]):t._e(),t._v(" "),n("p",{staticClass:"text-muted text-right small"},[t._v("\n\t\t\t"+t._s(e.update_time)+"\n\t\t")]),t._v(" "),n("hr")])}))},staticRenderFns:[]},l=n("VU/8")(r,c,!1,null,null,null);e.default=l.exports}});
//# sourceMappingURL=8.53628ceea5dad1c6b711.js.map