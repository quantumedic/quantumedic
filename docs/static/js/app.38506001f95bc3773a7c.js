webpackJsonp([12],{"4vlr":function(t,n){},GXkQ:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i,o,c,a,r,u,s=e("7+uW"),_=e("NYxO"),l=e("Dd8w"),f=e.n(l),C=e("//Fk"),I=e.n(C),d=e("mtWM"),A=e.n(d),S=window.localStorage,T={get:function(t){return S.getItem(t)},set:function(t,n){S.setItem("uid",t),S.setItem("token",n)},clean:function(){S.removeItem("uid"),S.removeItem("token")}},E=function(t){return 200===t.status&&function(t){switch(t.data.code){case 200:return t;case 404:return T.clean(),window.location.href=window.location.origin,I.a.reject(t.data.msg);default:return window.alert(t.data.msg),I.a.reject(t.data)}}(t)},g=(i="http://api.yeejuan.com",function(t){var n=A.a.create({baseURL:i+t});return n.interceptors.request.use(function(t){return T.get("uid")&&(t.headers.common.Authorization="uid="+T.get("uid")+";token="+T.get("token")),t},function(t){return I.a.reject(t)}),n.interceptors.response.use(function(t){return E(t)},function(t){return I.a.reject(t)}),n}),N=function(){return g("/account")},m=function(){return g("/doc")},G=function(){return g("/tag")},h=function(){return g("/search")},R=function(t){return N().post("/register",t)},v=function(t){return N().post("/login",t)},O=function(t,n,e){t.then(function(t){var i=t.data.result.token,o=t.data.result.uid;n("ACCOUNT_SIGN_IN",{token:i,uid:o}),e&&e()},function(t){n("ACCOUNT_SIGN_ERROR",{err:t})})},p={actions:{signup:function(t,n){var e=t.commit,i=n.info,o=n.success;O(R(i),e,o)},signin:function(t,n){var e=t.commit,i=n.info,o=n.success;e("SUBMITTING_ACCOUNT_INFO"),O(v(i),e,o)},signout:function(t,n){(0,t.commit)("ACCOUNT_SIGN_OUT"),n&&n()}}},L=e("bOdI"),U=e.n(L),b={state:{submitting:!1,ifLogged:T.get("uid")&&!0},mutations:(o={},U()(o,"SUBMITTING_ACCOUNT_INFO",function(t,n){t.submitting=!0,t.ifLogged=!1}),U()(o,"ACCOUNT_SIGN_IN",function(t,n){T.set(n.uid,n.token),console.log(n),t.ifLogged=!0,t.submitting=!1}),U()(o,"ACCOUNT_SIGN_ERROR",function(t,n){t.ifLogged=!1,t.submitting=!1}),U()(o,"ACCOUNT_SIGN_OUT",function(t){t.ifLogged=!1,T.clean(),T.submitting=!1}),o)},F=f()({},p,b),D=function(){return N().get("/info")},H=function(t){return N().put("/info",t)},Q={actions:{getAccount:function(t){var n=t.commit;D().then(function(t){var e=t.data.result;n("GET_ACCOUNT_INFO",{info:e})},function(t){n("GET_ACCOUNT_INFO_ERROR",{err:t})})},updateAccount:function(t,n){var e=t.commit,i=n.info,o=n.success;e("UPDATING_ACCOUNT"),H(i).then(function(t){var n=t.data.result;e("UPDATING_ACCOUNT_SUCCESS",{info:n}),o&&o()},function(t){e("UPDATING_ACCOUNT_FAIL",{err:t})})}}},M={state:{user_info:{},updating:!1},mutations:(c={},U()(c,"GET_ACCOUNT_INFO",function(t,n){t.user_info=n.info}),U()(c,"GET_ACCOUNT_INFO_ERROR",function(t,n){t.user_info={}}),U()(c,"UPDATING_ACCOUNT",function(t,n){t.updating=!0}),U()(c,"UPDATING_ACCOUNT_SUCCESS",function(t,n){t.user_info=n.info,t.updating=!1}),U()(c,"UPDATING_ACCOUNT_FAIL",function(t,n){t.updating=!1}),c)},w=f()({},Q,M),k=function(t,n){return m().get("",{params:{id:t,draft:n}})},y=function(t){return m().put("",t)},x=function(t){return m().post("",{tag_id:t})},P=function(t,n){return G().get("/list",{params:{level:t,ids:n}})},V=function(t,n){return n?m().delete("/collect",{params:{id:t}}):m().put("/collect",{id:t})},q=function(t){return m().delete("",{params:{id:t}})},B={actions:{createNewArticle:function(t,n){t.commit;var e=n.tag,i=n.success;x(e).then(function(t){var n=t.data.result;i&&i(n)},function(t){console.log(t)})},getArticleDetail:function(t,n){var e=t.commit,i=n.id,o=n.draft,c=n.success;e("REQUESTING_ARITCLE"),k(i,o).then(function(t){var n=t.data.result;e("REQUESTING_ARITCLE_SUCCESS",{detail:n}),c&&c()},function(t){e("REQUESTING_ARITCLE_FAIL",{err:t})})},editArticleInfo:function(t,n){var e=t.commit,i=n.info,o=n.success;e("EDITING_ARTICLE"),y(i).then(function(t){var n=t.data.result;e("EDITING_ARTICLE_SUCCESS",{detail:n}),o&&o()},function(t){e("EDITING_ARTICLE_FAIL",{err:t})})},getArticleTags:function(t,n){var e=t.commit,i=n.level,o=n.ids,c=n.success;P(i,o).then(function(t){var n=t.data.result;e("REQUESTING_ARITCLE_TAGS",{level:i,list:n}),c&&c()},function(t){e("REQUESTING_ARITCLE_TAGS_FAIL",{err:t})})},collectArticle:function(t,n){var e=t.commit,i=n.id,o=n.collected;n.success;e("COLLECTING_ARTICLE"),V(i,o).then(function(t){!0===t.data.result&&e("COLLECTING_ARTICLE_SUCCESS")},function(t){e("COLLECTING_ARTICLE_FAIL",{err:t})})},removeArticle:function(t,n){var e=t.commit,i=n.id,o=n.success;e("REMOVING_ARTICLE"),q(i).then(function(t){!0===t.data.result&&(e("REMOVING_ARTICLE_SUCCESS"),o&&o())},function(t){e("REMOVING_ARTICLE_FAIL",{err:t})})}}},j={state:{requesting:!1,article_unexistance:!1,article_detail:{author:{},editors:[],tags:[],last_update_author:{}},tag_list:[],editing:!1,removing:!1},mutations:(a={},U()(a,"REQUESTING_ARITCLE",function(t,n){t.requesting=!0,t.article_unexistance=!1}),U()(a,"REQUESTING_ARITCLE_SUCCESS",function(t,n){t.article_detail=n.detail,t.requesting=!1,t.article_unexistance=!1}),U()(a,"REQUESTING_ARITCLE_FAIL",function(t,n){t.requesting=!1,t.article_unexistance=!0}),U()(a,"EDITING_ARTICLE",function(t,n){t.editing=!0}),U()(a,"EDITING_ARTICLE_SUCCESS",function(t,n){t.article_detail=n.detail,t.editing=!1}),U()(a,"EDITING_ARTICLE_FAIL",function(t,n){t.editing=!1}),U()(a,"REQUESTING_ARITCLE_TAGS",function(t,n){t.tag_list=n.list}),U()(a,"REQUESTING_ARITCLE_TAGS_FAIL",function(t,n){console.log(n.err)}),U()(a,"COLLECTING_ARTICLE",function(t,n){t.collecting=!0}),U()(a,"COLLECTING_ARTICLE_SUCCESS",function(t,n){t.article_detail.collected=!t.article_detail.collected,t.collecting=!1}),U()(a,"COLLECTING_ARTICLE_FAIL",function(t,n){t.collecting=!1}),U()(a,"REMOVING_ARTICLE",function(t,n){t.removing=!0}),U()(a,"REMOVING_ARTICLE_SUCCESS",function(t,n){t.removing=!1}),U()(a,"REMOVING_ARTICLE_FAIL",function(t,n){t.removing=!1}),a)},X=f()({},B,j),$=function(t){return G().get("",{params:{id:t}})},z=function(t){return G().post("",t)},J=function(t){return G().get("/docs",{params:{id:t}})},W=function(t,n){return n?G().delete("favor",{params:{id:t}}):G().put("/favor",{id:t})},K={actions:{getTagDetail:function(t,n){var e=t.commit,i=n.id,o=n.success;e("REQUESTING_TAG"),$(i).then(function(t){var n=t.data.result;e("REQUESTING_TAG_SUCCESS",{detail:n}),o&&o()},function(t){e("REQUESTING_TAG_FAIL",{err:t})})},getTagDocs:function(t,n){var e=t.commit,i=n.id;n.success;e("REQUESTING_TAG_DOCS"),J(i).then(function(t){var n=t.data.result;e("REQUESTING_TAG_DOCS_SUCCESS",{list:n})},function(t){e("REQUESTING_TAG_DOCS_FAIL",{err:t})})},createTag:function(t,n){var e=t.commit,i=n.info,o=n.success;e("SUBMITTING_TAG"),z(i).then(function(t){var n=t.data.result;e("TAG_OPERATION_SUCCESS"),o&&o(n)},function(t){e("TAG_OPERATION_FAIL",{err:t})})},favorTag:function(t,n){var e=t.commit,i=n.id,o=n.favored;e("FAVORING_TAG"),W(i,o).then(function(t){!0===t.data.result&&e("FAVORING_TAG_SUCCESS")},function(t){e("FAVORING_TAG_FAIL",{err:t})})}}},Y={state:{requesting:!1,tag_detail:{parents:[],children:[]},tag_unexistance:!1,requesting_docs:!1,tag_docs:[],submitting_tag:!1,favoring:!1},mutations:(r={},U()(r,"REQUESTING_TAG",function(t,n){t.tag_docs=[],t.requesting=!0,t.tag_unexistance=!1}),U()(r,"REQUESTING_TAG_SUCCESS",function(t,n){t.tag_detail=n.detail,t.tag_unexistance=!1,t.requesting=!1}),U()(r,"REQUESTING_TAG_FAIL",function(t,n){t.tag_unexistance=!0,t.requesting=!1}),U()(r,"REQUESTING_TAG_DOCS",function(t,n){t.requesting_docs=!0}),U()(r,"REQUESTING_TAG_DOCS_SUCCESS",function(t,n){t.tag_docs=n.list,t.requesting_docs=!1}),U()(r,"REQUESTING_TAG_DOCS_FAIL",function(t,n){t.requesting_docs=!1}),U()(r,"SUBMITTING_TAG",function(t,n){t.submitting_tag=!0}),U()(r,"TAG_OPERATION_SUCCESS",function(t,n){t.submitting_tag=!1}),U()(r,"TAG_OPERATION_FAIL",function(t,n){t.submitting_tag=!1}),U()(r,"FAVORING_TAG",function(t,n){t.favoring=!0}),U()(r,"FAVORING_TAG_SUCCESS",function(t,n){t.tag_detail.favored=!t.tag_detail.favored,t.favoring=!1}),U()(r,"FAVORING_TAG_FAIL",function(t,n){t.favoring=!1}),r)},Z=f()({},K,Y),tt=function(t){return h().get("/docs",{params:{keyword:t}})},nt=function(){return h().get("/tags")},et=function(){return h().get("/contributions")},it=function(){return h().get("/collections")},ot={actions:{searchDocsByCondition:function(t,n){var e=t.commit,i=n.keyword;e("SEARCHING_DOCS"),tt(i).then(function(t){var n=t.data.result;e("SEARCHING_DOCS_SUCCESS",{list:n})},function(t){e("SEARCHING_DOCS_FAIL",{err:t})})},getAllTags:function(t){var n=t.commit;n("SEARCHING_TAGS"),nt().then(function(t){var e=t.data.result;n("SEARCHING_TAGS_SUCCESS",{list:e})},function(t){n("SEARCHING_TAGS_FAIL",{err:t})})},searchMyContributions:function(t){var n=t.commit;n("SEARCHING_CONTRIBUTIONS"),et().then(function(t){var e=t.data.result;n("SEARCHING_CONTRIBUTIONS_SUCCESS",{list:e})},function(t){n("SEARCHING_CONTRIBUTIONS_FAIL",{err:t})})},searchMyCollections:function(t){var n=t.commit;n("SEARCHING_COLLECTIONS"),it().then(function(t){var e=t.data.result;n("SEARCHING_COLLECTIONS_SUCCESS",{list:e})},function(t){n("SEARCHING_COLLECTIONS_FAIL",{err:t})})}}},ct={state:{searching:!1,search_result:{docs:[],tags:[]},tag_list:[],contribution_list:[],collection_list:[]},mutations:(u={},U()(u,"SEARCHING_DOCS",function(t,n){t.searching=!0}),U()(u,"SEARCHING_DOCS_SUCCESS",function(t,n){t.search_result=n.list,t.searching=!1}),U()(u,"SEARCHING_DOCS_FAIL",function(t,n){t.searching=!1}),U()(u,"SEARCHING_TAGS",function(t,n){t.searching=!0}),U()(u,"SEARCHING_TAGS_SUCCESS",function(t,n){t.tag_list=n.list,t.searching=!1}),U()(u,"SEARCHING_TAGS_FAIL",function(t,n){t.searching=!1}),U()(u,"SEARCHING_CONTRIBUTIONS",function(t,n){t.searching=!0}),U()(u,"SEARCHING_CONTRIBUTIONS_SUCCESS",function(t,n){t.contribution_list=n.list,t.searching=!1}),U()(u,"SEARCHING_CONTRIBUTIONS_FAIL",function(t,n){t.searching=!1}),U()(u,"SEARCHING_COLLECTIONS",function(t,n){t.searching=!0}),U()(u,"SEARCHING_COLLECTIONS_SUCCESS",function(t,n){t.collection_list=n.list,t.searching=!1}),U()(u,"SEARCHING_COLLECTIONS_FAIL",function(t,n){t.searching=!1}),u)},at=f()({},ot,ct);s.a.use(_.a);var rt=new _.a.Store({modules:{AuthModule:F,AccountModule:w,ArticleModule:X,TagModule:Z,SearchModule:at}}),ut={computed:f()({},Object(_.c)({ifLogged:function(t){return t.AuthModule.ifLogged},user_info:function(t){return t.AccountModule.user_info}})),methods:f()({},Object(_.b)({getAccount:"getAccount",signout:"signout"}),{logout:function(){var t=this;this.signout(function(){t.$router.push({name:"home"})})},init:function(){this.ifLogged&&this.getAccount()}}),mounted:function(){this.init()},watch:{ifLogged:"init"}},st={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container-fluid navbar-fixed-top handbook-header"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-3 small navbar-menu"},[e("router-link",{attrs:{to:{name:"home"}}},[t._v("首页")])],1),t._v(" "),t.ifLogged?e("div",{staticClass:"col-xs-9 text-right small navbar-menu"},[e("router-link",{attrs:{to:{name:"account",params:{tab:"profile"}}}},[e("i",{staticClass:"fa fa-user-circle-o"}),t._v("\n\t\t\t\t"+t._s(t.user_info.username)+"\n\t\t\t")]),t._v(" "),e("router-link",{attrs:{to:{name:"collection"}}},[t._v("收藏")]),t._v(" "),e("router-link",{attrs:{to:{name:"contribution"}}},[t._v("我的贡献")]),t._v(" "),e("a",{on:{click:t.logout}},[t._v("退出")])],1):e("div",{staticClass:"col-xs-9 text-right small navbar-menu"},[e("router-link",{attrs:{to:{name:"account",params:{tab:"login"}}}},[t._v("\n\t\t\t\t登录/注册\n\t\t\t")])],1)])])},staticRenderFns:[]};var _t={name:"App",store:rt,components:{HeaderBar:e("VU/8")(ut,st,!1,function(t){e("4vlr")},"data-v-10f69591",null).exports}},lt={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("header-bar"),this._v(" "),n("div",{staticClass:"container"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)],1)},staticRenderFns:[]};var ft=e("VU/8")(_t,lt,!1,function(t){e("T0bn")},null,null).exports,Ct=e("/ocq");s.a.use(Ct.a);var It=new Ct.a({mode:"history",scrollBehavior:function(t,n,e){if(e)return e;var i={};return t.hash&&(i.selector=t.hash),t.matched.some(function(t){return t.meta.scrollToTop})&&(i.x=0,i.y=0),i},routes:[{path:"/",name:"home",component:function(t){return e.e(4).then(function(){var n=[e("Qt9A")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/search",name:"search",component:function(t){return e.e(2).then(function(){var n=[e("ar59")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/account/:tab",name:"account",component:function(t){return Promise.all([e.e(0),e.e(10)]).then(function(){var n=[e("FGjL")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/contributions",name:"contribution",component:function(t){return e.e(8).then(function(){var n=[e("2k13")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/collections",name:"collection",component:function(t){return e.e(9).then(function(){var n=[e("ZXS0")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/edit/:id",name:"edit",component:function(t){return Promise.all([e.e(0),e.e(5)]).then(function(){var n=[e("KM4z")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/doc/:id",name:"doc",component:function(t){return Promise.all([e.e(0),e.e(3)]).then(function(){var n=[e("pvNT")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/tag/:id",name:"tag",component:function(t){return Promise.all([e.e(0),e.e(1)]).then(function(){var n=[e("VrAg")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/tags",name:"tags",component:function(t){return Promise.all([e.e(0),e.e(6)]).then(function(){var n=[e("3AVo")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/add/:id",name:"add",component:function(t){return Promise.all([e.e(0),e.e(7)]).then(function(){var n=[e("cO2l")];t.apply(null,n)}.bind(this)).catch(e.oe)}}]}),dt=e("9JMe");e("GXkQ");s.a.config.productionTip=!1,Object(dt.sync)(rt,It),new s.a({el:"#app",router:It,components:{App:ft},template:"<App/>"}),window.router=It},T0bn:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.38506001f95bc3773a7c.js.map