(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[72,220],{1164:function(e,t,r){var a=r(62);e.exports=(a["default"]||a).template({compiler:[7,">= 4.0.0"],main:function(e,t,r,a,n){return'<a class="btn info-button visible-lg-inline-block visible-md-inline-block visible-sm-inline-block" tabindex="0" data-toggle="popoverclickaway">\n    <i class="fa fa-info-circle"></i>\n</a>\n'},useData:true})},1338:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=r(570);var n=r(61);var s=r(1);var o=g(s);var u=r(1763);var i=g(u);var l=r(1762);var c=g(l);var d=r(1760);var f=g(d);var v=r(1529);var p=g(v);var h=r(1522);var m=g(h);var y=r(1521);var b=g(y);function g(e){return e&&e.__esModule?e:{default:e}}var _=function e(t){var r=t.router;var s=decodeURIComponent(r.params[1]);return o.default.createElement("div",null,o.default.createElement(p.default,{icon:"address-card",title:s,type:(0,n.t)("console.identities.users.edit.type")}),o.default.createElement(a.Tabs,{animation:true,defaultActiveKey:1,id:"editUser",mountOnEnter:true,unmountOnExit:true},o.default.createElement(a.Tab,{eventKey:1,title:(0,n.t)("console.identities.users.edit.tabs.0")},o.default.createElement(i.default,null)),o.default.createElement(a.Tab,{eventKey:2,title:(0,n.t)("console.identities.users.edit.tabs.1")},o.default.createElement(f.default,null)),o.default.createElement(a.Tab,{eventKey:3,title:(0,n.t)("console.identities.users.edit.tabs.2")},o.default.createElement(c.default,null))))};_.propTypes={router:b.default};t.default=(0,m.default)(_)},1521:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=r(1);var n=u(a);var s=r(0);var o=u(s);function u(e){return e&&e.__esModule?e:{default:e}}var i=o.default.shape({params:o.default.array.isRequired});t.default=i},1523:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=function e(t){if(t){var r=t.sizePerPage,a=t.pagedResultsOffset,n=t.sortKey,s=t.sortDirection;var o=a?"&_pagedResultsOffset="+a:"";var u="&_pageSize="+r;var i=n&&s?"&_sortKeys="+encodeURIComponent(s)+n:"";return""+o+u+i}return""};t.default=a},1524:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=function e(t){return t?"&_fields="+t.join(","):""};t.default=a},1525:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});r(1539);var a=r(6);var n=w(a);var s=r(19);var o=w(s);var u=r(159);var i=w(u);var l=r(1538);var c=w(l);var d=r(1164);var f=w(d);var v=r(1541);var p=w(v);var h=r(866);var m=w(h);var y=r(865);var b=w(y);var g=r(1531);var _=w(g);function w(e){return e&&e.__esModule?e:{default:e}}function P(e){var t=(0,f.default)();(0,o.default)(e).find(".help-block:not(.errormsg)").addClass("hidden-lg hidden-md hidden-sm").each(function(e,r){var a=(0,o.default)(t);a.popoverclickaway({container:"#content",html:true,placement:"auto top",content:r.innerHTML}).click(function(e){e.preventDefault()});(0,o.default)(r).parent().append(a)})}function E(e){(0,o.default)(e).find("input:password").attr("placeholder",o.default.t("common.form.passwordPlaceholder"))}_.default.define("enum_plugin",function(e){var t=this,r=arguments;var a=e.schema;var s=n.default.indexOf(a.enum,"");var o=s>-1;var u=function e(){var a=function e(t){return!t||8!==t.keyCode};t.deleteSelection=function(){var e=t.deleteSelection;return function(n){if(a(n))return e.apply(t,r);return false}}()};var i=function e(){t.plugins.settings["dropdown_header"]={title:a.options.enum_titles[s]};t.require("dropdown_header");t.setup=function(){var e=t.setup;return function(){e.apply(t,r);t.$dropdown.on("mousedown",".selectize-dropdown-header",function(){t.setValue("");t.close();t.blur();return false})}}()};o?i():u()});function S(e,t){var r=t.schema,a=t.values,n=t.hideInheritance,s=void 0!==n&&n;var o=6;var u=4;c.default.plugins.selectize.enable=true;c.default.plugins.selectize.plugins=function(e){return[{name:"enum_plugin",options:{schema:e}}]};c.default.defaults.themes.openam=p.default.getTheme(o,u);var i=r.toFlatWithInheritanceMeta(a);var l=a.removeInheritance();i=i.raw;l=l.raw;var d=new c.default(e[0],{disable_collapse:true,disable_edit_json:true,disable_properties:true,hide_inheritance:s,iconlib:"fontawesome4",schema:i,theme:"openam"});P(e);E(e);d.setValue(l);return d}var A=i.default.View.extend({className:"jsoneditor-block",initialize:function e(t){if(!(t.schema instanceof m.default))throw new TypeError('[JSONEditorView] "schema" argument is not an instance of JSONSchema.');if(!(t.values instanceof b.default))throw new TypeError('[JSONEditorView] "values" argument is not an instance of JSONValues.');this.options=n.default.defaults(t,{displayTitle:true})},toggleInheritance:function e(t,r,a){this.options.values=this.options.values.extend(this.getData());this.options.values=this.options.values.addValueForPath([t,"inherited"],a);this.options.values=this.options.values.addValueForPath([t,"value"],r);this.render()},render:function e(){this.$el.empty();var t=n.default.get(this.jsonEditor,"watchlist");this.jsonEditor=S(this.$el,this.options);this.jsonEditor.watchlist=t;this.options.displayTitle||this.$el.find("[data-header]").parent().hide();return this},isValid:function e(){return 0===this.jsonEditor.validate().length},getData:function e(){var t=new b.default(this.jsonEditor.getValue());this.options.schema.hasDefaultProperties()&&(t=t.pick(this.options.schema.raw.defaultProperties));t=t.nullifyEmptyPasswords(this.options.schema.getPasswordKeys());t=t.addInheritance(this.options.values.raw);return t.raw},setData:function e(t){this.options.values=this.options.values.extend(t)},watch:function e(t,r){this.jsonEditor.watch(t,r)},destroy:function e(){var t=this;var r=n.default.keys(this.jsonEditor.watchlist);n.default.forEach(r,function(e){t.jsonEditor.unwatch(e)});this.jsonEditor.destroy();this.jsonEditor=null}});t.default=A},1528:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=r(6);var n=v(a);var s=r(159);var o=v(s);var u=r(1525);var i=v(u);var l=r(866);var c=v(l);var d=r(865);var f=v(d);function v(e){return e&&e.__esModule?e:{default:e}}function p(e){e&&setTimeout(e,0)}var h=o.default.View.extend({initialize:function e(t){if(!(t.schema instanceof c.default))throw new TypeError('[FlatJSONSchemaView] "schema" argument is not an instance of JSONSchema.');if(!(t.values instanceof f.default))throw new TypeError('[FlatJSONSchemaView] "values" argument is not an instance of JSONValues.');this.options=n.default.defaults(t,{showOnlyRequiredAndEmpty:false})},render:function e(){var t=this.options.schema;var r=true;if(this.options.showOnlyRequiredAndEmpty){var a=this.options.schema.getRequiredPropertyKeys();var s=this.options.values.getEmptyValueKeys(t);var o=n.default.intersection(a,s);t=t.removeUnrequiredNonDefaultProperties().addDefaultProperties(o);r=!n.default.isEmpty(o)}this.subview=new i.default({displayForm:r,hideInheritance:this.options.hideInheritance,displayTitle:false,el:this.$el,schema:t,values:this.options.values}).render();p(this.options.onRendered);return this},isValid:function e(){return!this.subview||this.subview.isValid()},getData:function e(){if(this.subview){var t;return(t=this.subview).getData.apply(t,arguments)}},setData:function e(t){if(this.subview){this.options.values=this.options.values.extend(t);return this.subview.setData(t)}},watch:function e(t,r){this.subview&&this.subview.watch(t,r)},destroy:function e(){if(this.subview){this.subview.destroy();this.subview=null}}});t.default=h},1545:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=r(1);var n=u(a);var s=r(7);var o=u(s);function u(e){return e&&e.__esModule?e:{default:e}}var i=function e(t,r,a){return n.default.createElement("span",{className:(0,o.default)({"am-table-icon-cell":true,"am-table-icon-cell-editable":r})},n.default.createElement("span",{className:"fa-stack fa-lg am-table-icon-cell-stack"},n.default.createElement("i",{className:"fa fa-circle fa-stack-2x text-primary"}),n.default.createElement("i",{className:"fa "+t+" fa-stack-1x fa-inverse"}))," ",n.default.createElement("span",null,a))};var l=function e(t){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(e){return i(t,r,e)}};t.default=l},1559:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=r(570);var n=r(61);var s=r(0);var o=l(s);var u=r(1);var i=l(u);function l(e){return e&&e.__esModule?e:{default:e}}var c=function e(t){var r=t.disabled,s=t.onSaveClick;return i.default.createElement(a.Clearfix,null,i.default.createElement("div",{className:"pull-right"},i.default.createElement(a.Button,{bsStyle:"primary",disabled:r,onClick:s},(0,n.t)("common.form.saveChanges"))))};c.defaultProps={disabled:false};c.propTypes={disabled:o.default.bool,onSaveClick:o.default.func.isRequired};t.default=c},1583:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.getSchema=y;t.getInitialState=b;t.getAll=g;t.remove=_;t.getByUsernameStartsWith=w;t.get=P;t.update=E;t.create=S;var a=r(6);var n=r(169);var s=p(n);var o=r(27);var u=p(o);var i=r(1524);var l=p(i);var c=r(1523);var d=p(c);var f=r(168);var v=p(f);function p(e){return e&&e.__esModule?e:{default:e}}var h=new s.default(""+u.default.host+u.default.context+"/json");function m(e){return h.serviceCall({url:(0,v.default)("/users?_action=template",{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=4.1"},type:"POST"})}function y(e){return h.serviceCall({url:(0,v.default)("/users?_action=schema",{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=4.1"},type:"POST"})}function b(e){return Promise.all([y(e),m(e)]).then(function(e){return{schema:e[0],values:e[1]}})}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var r=(0,d.default)(t.pagination);var a=(0,l.default)(t.fields);return h.serviceCall({url:(0,v.default)("/users?_queryFilter=true"+r+a,{realm:e}),headers:{"Accept-API-Version":"protocol=2.1,resource=4.0"}})}function _(e,t){var r=(0,a.map)(t,function(t){return h.serviceCall({url:(0,v.default)("/users/"+encodeURIComponent(t),{realm:e}),headers:{"Accept-API-Version":"protocol=2.1,resource=4.0"},type:"DELETE",errorsHandlers:{Forbidden:{status:403}}})});return Promise.all(r)}function w(e,t){return h.serviceCall({url:(0,v.default)("/users?_queryId="+encodeURIComponent(t)+"*",{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}}).then(function(e){return e.result})}function P(e,t){return h.serviceCall({url:(0,v.default)("/users/"+encodeURIComponent(t),{realm:e}),headers:{"Accept-API-Version":"protocol=2.1,resource=4.0"}})}function E(e,t,r){var n=function e(t){return(0,a.omitBy)(t,function(e,t){return(0,a.startsWith)(t,"_")})};return h.serviceCall({url:(0,v.default)("/users/"+encodeURIComponent(r),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=4.0","If-Match":"*"},data:JSON.stringify(n(t))})}function S(e,t,r){return h.serviceCall({url:(0,v.default)("/users/"+encodeURIComponent(r),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.1,resource=4.0","If-None-Match":"*"},data:JSON.stringify(t)})}},1594:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.getSchema=m;t.get=y;t.getAll=b;t.remove=g;t.create=_;t.update=w;var a=r(6);var n=r(169);var s=p(n);var o=r(27);var u=p(o);var i=r(1524);var l=p(i);var c=r(1523);var d=p(c);var f=r(168);var v=p(f);function p(e){return e&&e.__esModule?e:{default:e}}var h=new s.default(""+u.default.host+u.default.context+"/json");function m(e){return h.serviceCall({url:(0,v.default)("/groups?_action=schema",{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"POST"})}function y(e,t){return h.serviceCall({url:(0,v.default)("/groups/"+encodeURIComponent(t),{realm:e}),headers:{"Accept-API-Version":"protocol=2.1,resource=4.0"}})}function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var r=(0,d.default)(t.pagination);var a=(0,l.default)(t.fields);return h.serviceCall({url:(0,v.default)("/groups?_queryFilter=true"+r+a,{realm:e}),headers:{"Accept-API-Version":"protocol=2.1,resource=4.0"}})}function g(e,t){var r=(0,a.map)(t,function(t){return h.serviceCall({url:(0,v.default)("/groups/"+encodeURIComponent(t),{realm:e}),headers:{"Accept-API-Version":"protocol=2.1,resource=4.0"},type:"DELETE"})});return Promise.all(r)}function _(e,t){return h.serviceCall({url:(0,v.default)("/groups/"+encodeURIComponent(t),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.1,resource=4.0","If-None-Match":"*"},data:"{}"})}function w(e,t,r){var n=function e(t){return(0,a.omit)(t,["dn","objectclass"])};var s=function e(t){return(0,a.omitBy)(t,function(e,t){return(0,a.startsWith)(t,"_")})};return h.serviceCall({url:(0,v.default)("/groups/"+encodeURIComponent(r),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.1,resource=4.0","If-Match":"*"},data:JSON.stringify(s(n(t)))})}},1606:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.getSchema=d;t.get=f;t.update=v;t.remove=p;t.getAllTypes=h;t.getAllInstances=m;t.getCreatables=y;t.getTemplate=b;t.create=g;var a=r(169);var n=l(a);var s=r(27);var o=l(s);var u=r(168);var i=l(u);function l(e){return e&&e.__esModule?e:{default:e}}var c=new n.default(""+o.default.host+o.default.context+"/json");function d(e,t,r){return c.serviceCall({url:(0,i.default)("/users/"+r+"/services/"+t+"?_action=schema",{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"})}function f(e,t,r){return c.serviceCall({url:(0,i.default)("/users/"+r+"/services/"+t,{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}})}function v(e,t,r,a){return c.serviceCall({url:(0,i.default)("/users/"+r+"/services/"+t,{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},data:a.toJSON()})}function p(e,t,r){return c.serviceCall({url:(0,i.default)("/users/"+t+"/services?_action=unassignServices",{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST",data:JSON.stringify({serviceNames:r})})}function h(e,t){return c.serviceCall({url:(0,i.default)("/users/"+t+"/services?_action=getAllTypes",{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"})}function m(e,t){return c.serviceCall({url:(0,i.default)("/users/"+t+"/services?_action=nextdescendents",{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST",errorsHandlers:{internalServerError:{status:500}}})}function y(e,t){return c.serviceCall({url:(0,i.default)("/users/"+t+"/services?_action=getCreatableTypes",{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST",errorsHandlers:{internalServerError:{status:500}}})}function b(e,t,r){return c.serviceCall({url:(0,i.default)("/users/"+encodeURIComponent(r)+"/services/"+encodeURIComponent(t)+"?_action=template",{realm:e}),headers:{"Accept-API-Version":"protocol=2.1,resource=1.0"},type:"POST"})}function g(e,t,r,a){return c.serviceCall({url:(0,i.default)("/users/"+encodeURIComponent(t)+"/services/"+encodeURIComponent(r),{realm:e}),headers:{"Accept-API-Version":"protocol=2.1,resource=1.0"},type:"POST",data:JSON.stringify(a)})}},1759:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};var n=r(570);var s=r(6);var o=r(61);var u=r(656);var i=r(0);var l=b(i);var c=r(1);var d=b(c);var f=r(73);var v=b(f);var p=r(1545);var h=b(p);var m=r(1547);var y=b(m);function b(e){return e&&e.__esModule?e:{default:e}}var g=function e(t,r){return(0,h.default)("fa-plug")(r.name)};var _=function e(t){var r=(0,s.map)(t.creatables,function(e){return{href:"#"+v.default.getLink(v.default.configuration.routes.realmsIdentitiesUsersServicesNew,(0,s.map)([t.realm,t.userId,e._id],encodeURIComponent)),title:e.name}});return d.default.createElement(n.Panel,{className:"fr-panel-tab"},d.default.createElement(n.Panel.Body,null,d.default.createElement(y.default,a({},(0,s.omit)(t,"children"),{addButton:{menuItems:r,title:(0,o.t)("console.identities.users.edit.services.list.callToAction.button")},description:(0,o.t)("console.identities.users.edit.services.list.callToAction.description"),title:(0,o.t)("console.identities.users.edit.services.list.callToAction.title")}),d.default.createElement(u.TableHeaderColumn,{dataField:"_id",dataFormat:g,dataSort:true},(0,o.t)("console.identities.users.edit.services.list.grid.0")))))};_.propTypes={creatables:l.default.arrayOf(l.default.object).isRequired,realm:l.default.string.isRequired,userId:l.default.string.isRequired};t.default=_},1760:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=function(){function e(e,t){var r=[];var a=true;var n=false;var s=void 0;try{for(var o=e[Symbol.iterator](),u;!(a=(u=o.next()).done);a=true){r.push(u.value);if(t&&r.length===t)break}}catch(e){n=true;s=e}finally{try{!a&&o["return"]&&o["return"]()}finally{if(n)throw s}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||false;a.configurable=true;"value"in a&&(a.writable=true);Object.defineProperty(e,a.key,a)}}return function(t,r,a){r&&e(t.prototype,r);a&&e(t,a);return t}}();var s=r(3);var o=r(6);var u=r(61);var i=r(0);var l=j(i);var c=r(1);var d=j(c);var f=r(1606);var v=r(209);var p=r(210);var h=r(206);var m=r(1527);var y=j(m);var b=r(1759);var g=j(b);var _=r(560);var w=j(_);var P=r(73);var E=j(P);var S=r(1526);var A=j(S);var O=r(1522);var C=j(O);var I=r(1521);var T=j(I);function j(e){return e&&e.__esModule?e:{default:e}}function V(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function R(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function M(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var k=function(e){M(t,e);function t(){V(this,t);var e=R(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));e.state={isFetching:true};e.handleEdit=e.handleEdit.bind(e);e.handleDelete=e.handleDelete.bind(e);return e}n(t,[{key:"componentDidMount",value:function e(){var t=this;var r=this.props.router.params[0];var n=this.props.router.params[1];Promise.all([(0,f.getAllInstances)(r,n),(0,f.getAllTypes)(r,n),(0,f.getCreatables)(r,n)]).then(function(e){var r=a(e,3),s=r[0],o=r[1],u=r[2];t.setState({isFetching:false});t.props.setInstances(s.result,n);t.props.setTypes(o.result,n);t.props.setCreatables(u.result,n)},function(e){t.setState({isFetching:false});w.default.addMessage({response:e,type:w.default.TYPE_DANGER})})}},{key:"handleEdit",value:function e(t){var r=t._id;var a=this.props.router.params[0];var n=this.props.router.params[1];E.default.routeTo(E.default.configuration.routes.realmsIdentitiesUsersServicesEdit,{args:(0,o.map)([a,n,r],encodeURIComponent),trigger:true})}},{key:"handleDelete",value:function e(t){var r=this;var a=(0,o.map)(t,"_id");var n=this.props.router.params[0];var s=this.props.router.params[1];(0,A.default)({message:(0,u.t)("console.identities.users.edit.services.confirmDeleteSelected",{count:a.length})},function(){(0,f.remove)(n,s,a).then(function(){w.default.messages.displayMessageFromConfig("changesSaved");(0,o.forEach)(a,function(e){r.props.removeInstance(e,s)});(0,f.getCreatables)(n,s).then(function(e){r.props.setCreatables(e.result,s)},function(e){w.default.addMessage({response:e,type:w.default.TYPE_DANGER})})},function(e){w.default.addMessage({response:e,type:w.default.TYPE_DANGER})})})}},{key:"render",value:function e(){var t=this.props.router.params[0];var r=this.props.router.params[1];return d.default.createElement(g.default,{creatables:this.props.creatables,isFetching:this.state.isFetching,items:this.props.instances,onDelete:this.handleDelete,onRowClick:this.handleEdit,realm:t,userId:r})}}]);return t}(c.Component);k.propTypes={creatables:l.default.arrayOf(l.default.object),instances:l.default.arrayOf(l.default.object),removeInstance:l.default.func.isRequired,router:T.default,setCreatables:l.default.func.isRequired,setInstances:l.default.func.isRequired,setTypes:l.default.func.isRequired};k=(0,y.default)(k,function(e,t){var r=t.router.params[1];var a=(0,o.get)(e.remote.config.realm.identities.users.services.types,r);var n=(0,o.get)(e.remote.config.realm.identities.users.services.instances,r);var s=(0,o.map)(n,function(e){e.name=(0,o.result)((0,o.find)(a,{_id:e._id}),"name");return e});return{creatables:(0,o.get)(e.remote.config.realm.identities.users.services.creatables,r),instances:s}},function(e){return{removeInstance:(0,s.bindActionCreators)(v.removeInstance,e),setCreatables:(0,s.bindActionCreators)(p.setCreatables,e),setInstances:(0,s.bindActionCreators)(v.setInstances,e),setTypes:(0,s.bindActionCreators)(h.setTypes,e)}});k=(0,C.default)(k);t.default=k},1761:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.getSchema=d;t.get=f;t.update=v;var a=r(169);var n=l(a);var s=r(27);var o=l(s);var u=r(168);var i=l(u);function l(e){return e&&e.__esModule?e:{default:e}}var c=new n.default(""+o.default.host+o.default.context+"/json");function d(e,t){return c.serviceCall({url:(0,i.default)("/users/"+encodeURIComponent(t)+"/groups?_action=schema",{realm:e}),type:"POST",headers:{"Accept-API-Version":"protocol=2.1,resource=1.0"}})}function f(e,t){return c.serviceCall({url:(0,i.default)("/users/"+encodeURIComponent(t)+"/groups?_queryFilter=true",{realm:e}),headers:{"Accept-API-Version":"protocol=2.1,resource=1.0"}})}function v(e,t,r){return c.serviceCall({url:(0,i.default)("/users/"+encodeURIComponent(t)+"/groups?_action=updateMemberships",{realm:e}),type:"POST",headers:{"Accept-API-Version":"protocol=2.1,resource=1.0"},data:JSON.stringify({groups:r})})}},1762:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=function(){function e(e,t){var r=[];var a=true;var n=false;var s=void 0;try{for(var o=e[Symbol.iterator](),u;!(a=(u=o.next()).done);a=true){r.push(u.value);if(t&&r.length===t)break}}catch(e){n=true;s=e}finally{try{!a&&o["return"]&&o["return"]()}finally{if(n)throw s}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||false;a.configurable=true;"value"in a&&(a.writable=true);Object.defineProperty(e,a.key,a)}}return function(t,r,a){r&&e(t.prototype,r);a&&e(t,a);return t}}();var s=r(6);var o=r(570);var u=r(61);var i=r(1);var l=O(i);var c=r(1594);var d=r(1761);var f=r(1559);var v=O(f);var p=r(1528);var h=O(p);var m=r(866);var y=O(m);var b=r(865);var g=O(b);var _=r(560);var w=O(_);var P=r(1522);var E=O(P);var S=r(1521);var A=O(S);function O(e){return e&&e.__esModule?e:{default:e}}function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function I(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function T(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var j=function(e){T(t,e);function t(e){C(this,t);var r=I(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.setRef=r.setRef.bind(r);r.handleSave=r.handleSave.bind(r);return r}n(t,[{key:"componentDidMount",value:function e(){var t=this;var r=this.props.router.params[0];var n=this.props.router.params[1];Promise.all([(0,d.getSchema)(r,n),(0,d.get)(r,n),(0,c.getAll)(r)]).then(function(e){var r=a(e,3),n=r[0],s=r[1],o=r[2];var u=s.result.map(function(e){return e.groupname});var i=t.addGroupsSelectionToTheSchema(n,o.result);t.jsonSchemaView=new h.default({schema:new y.default(i),values:new g.default({groups:u})});t.element.appendChild(t.jsonSchemaView.render().el)})}},{key:"addGroupsSelectionToTheSchema",value:function e(t,r){var a=(0,s.cloneDeep)(t);var n=(0,s.get)(a,"properties.groups.items");if(n){var o=(0,s.reduce)(r,function(e,t){e.enum.push(t._id);e.options.enum_titles.push(t.cn[0]);return e},{enum:[],options:{enum_titles:[]}});(0,s.assign)(n,o)}else console.error("[EditUserGroups] Unable to add available groups to 'groups' property.");return a}},{key:"handleSave",value:function e(){if(!this.jsonSchemaView.subview.isValid()){w.default.addMessage({message:(0,u.t)("common.form.validation.errorsNotSaved"),type:w.default.TYPE_DANGER});return}var t=this.props.router.params[0];var r=this.props.router.params[1];var a=new g.default(this.jsonSchemaView.subview.getData());(0,d.update)(t,r,a.raw.groups).then(function(){w.default.addMessage({message:(0,u.t)("config.messages.AppMessages.changesSaved")})},function(e){w.default.addMessage({response:e,type:w.default.TYPE_DANGER})})}},{key:"setRef",value:function e(t){this.element=t}},{key:"render",value:function e(){return l.default.createElement(o.Panel,{className:"fr-panel-tab"},l.default.createElement(o.Panel.Body,null,l.default.createElement("div",{ref:this.setRef})),l.default.createElement(o.Panel.Footer,null,l.default.createElement(v.default,{onSaveClick:this.handleSave})))}}]);return t}(i.Component);j.propTypes={router:A.default};t.default=(0,E.default)(j)},1763:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=function(){function e(e,t){var r=[];var a=true;var n=false;var s=void 0;try{for(var o=e[Symbol.iterator](),u;!(a=(u=o.next()).done);a=true){r.push(u.value);if(t&&r.length===t)break}}catch(e){n=true;s=e}finally{try{!a&&o["return"]&&o["return"]()}finally{if(n)throw s}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||false;a.configurable=true;"value"in a&&(a.writable=true);Object.defineProperty(e,a.key,a)}}return function(t,r,a){r&&e(t.prototype,r);a&&e(t,a);return t}}();var s=r(570);var o=r(1);var u=A(o);var i=r(61);var l=r(6);var c=r(1583);var d=r(1559);var f=A(d);var v=r(1528);var p=A(v);var h=r(866);var m=A(h);var y=r(865);var b=A(y);var g=r(560);var _=A(g);var w=r(1522);var P=A(w);var E=r(1521);var S=A(E);function A(e){return e&&e.__esModule?e:{default:e}}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function I(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var T=function e(t,r){return(0,l.mapValues)(t,function(e,t){if("string"===r.properties[t].type&&""===e)return[];return e})};var j=function e(t,r){return(0,l.mapValues)(t,function(e,t){var a=r.properties[t];if(a&&"string"===a.type&&(0,l.isArray)(e))return e[0];return e})};var V=function e(t,r){return(0,l.reduce)(t,function(e,t,a){var n=r.properties[a];n&&(e[a]=t);return e},{})};var R=function(e){I(t,e);function t(e){O(this,t);var r=C(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.setRef=r.setRef.bind(r);r.handleSave=r.handleSave.bind(r);return r}n(t,[{key:"componentDidMount",value:function e(){var t=this;var r=this.props.router.params[0];var n=this.props.router.params[1];Promise.all([(0,c.getSchema)(r),(0,c.get)(r,n)]).then(function(e){var r=a(e,2),n=r[0],s=r[1];t.schema=new m.default(n);t.jsonSchemaView=new p.default({schema:t.schema,values:new b.default(j(s,n))});t.element.appendChild(t.jsonSchemaView.render().el)})}},{key:"handleSave",value:function e(){if(!this.jsonSchemaView.subview.isValid()){_.default.addMessage({message:(0,i.t)("common.form.validation.errorsNotSaved"),type:_.default.TYPE_DANGER});return}var t=new b.default(this.jsonSchemaView.subview.getData());var r=t.removeNullPasswords(this.schema);var a=V(r.raw,this.schema.raw);var n=T(a,this.schema.raw);delete n.dn;var s=this.props.router.params[0];var o=this.props.router.params[1];(0,c.update)(s,n,o).then(function(){_.default.addMessage({message:(0,i.t)("config.messages.AppMessages.changesSaved")})},function(e){_.default.addMessage({response:e,type:_.default.TYPE_DANGER})})}},{key:"setRef",value:function e(t){this.element=t}},{key:"render",value:function e(){return u.default.createElement(s.Panel,{className:"fr-panel-tab"},u.default.createElement(s.Panel.Body,null,u.default.createElement("div",{ref:this.setRef})),u.default.createElement(s.Panel.Footer,null,u.default.createElement(f.default,{onSaveClick:this.handleSave})))}}]);return t}(o.Component);R.propTypes={router:S.default};t.default=(0,P.default)(R)}}]);
//# sourceMappingURL=72.907dfcc912.js.map