(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[77,220,316],{1164:function(e,t,r){var a=r(62);e.exports=(a["default"]||a).template({compiler:[7,">= 4.0.0"],main:function(e,t,r,a,n){return'<a class="btn info-button visible-lg-inline-block visible-md-inline-block visible-sm-inline-block" tabindex="0" data-toggle="popoverclickaway">\n    <i class="fa fa-info-circle"></i>\n</a>\n'},useData:true})},1267:function(e,t,r){var a=r(62);e.exports=(a["default"]||a).template({compiler:[7,">= 4.0.0"],main:function(e,t,r,a,n){var o;return(null!=(o=e.invokePartial(a["headers/_TitleWithSubAndIcon"],t,{name:"headers/_TitleWithSubAndIcon",hash:{icon:"circle-o-notch",type:"console.applications.federation.circlesoftrust.edit.type",title:null!=t?t.id:t},data:n,helpers:r,partials:a,decorators:e.decorators}))?o:"")+'\n<div class="panel panel-default">\n    <div class="panel-body ">\n        <form data-json-form></form>\n    </div>\n    <div class="panel-footer clearfix">\n'+(null!=(o=e.invokePartial(a["form/_JSONSchemaFooter"],t,{name:"form/_JSONSchemaFooter",data:n,indent:"        ",helpers:r,partials:a,decorators:e.decorators}))?o:"")+"    </div>\n</div>\n"},usePartial:true,useData:true})},1343:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=function(){function e(e,t){var r=[];var a=true;var n=false;var o=void 0;try{for(var i=e[Symbol.iterator](),s;!(a=(s=i.next()).done);a=true){r.push(s.value);if(t&&r.length===t)break}}catch(e){n=true;o=e}finally{try{!a&&i["return"]&&i["return"]()}finally{if(n)throw o}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||false;a.configurable=true;"value"in a&&(a.writable=true);Object.defineProperty(e,a.key,a)}}return function(t,r,a){r&&e(t.prototype,r);a&&e(t,a);return t}}();var o=r(6);var i=r(61);var s=r(1607);var u=r(1772);var l=r(1771);var c=r(114);var d=O(c);var f=r(1528);var v=O(f);var p=r(1533);var h=O(p);var m=r(866);var w=O(m);var y=r(865);var g=O(y);var b=r(560);var _=O(b);var P=r(73);var A=O(P);var E=r(1267);var S=O(E);function O(e){return e&&e.__esModule?e:{default:e}}function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function D(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function I(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var M=function e(t,r){return(0,o.map)(t,function(e){return e._id+"|"+r})};var k=function e(t,r,a){var n=(0,o.cloneDeep)(t);var i=(0,o.get)(n,"properties.trustedProviders.items");if(i){var s=[].concat(I(M(r,"saml2")),I(M(a,"wsfed")));i.enum=s;i.options={enum_titles:s}}return n};var V=function(e){D(t,e);function t(){j(this,t);var e=T(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));e.template=S.default;e.events={"click [data-delete]":"onDelete","click [data-save]":"onSave"};return e}n(t,[{key:"render",value:function e(t){var r=this;var n=a(t,2),o=n[0],i=n[1];this.data={id:i,headerActions:[{actionPartial:"form/_Button",data:"delete",title:"common.form.delete",icon:"fa-times"}]};this.realm=o;Promise.all([(0,s.getSchema)(o),(0,s.get)(o,i),(0,u.getAll)(o,l.SAML2),(0,u.getAll)(o,l.WS_FED)]).then(function(e){var t=a(e,4),r=t[0],n=t[1],o=t[2],i=t[3];var s=k(r,o.result,i.result);return{schema:new w.default(s),values:new g.default(n)}}).then(function(e){var t=e.schema,a=e.values;r.schema=t;r.values=a;r.parentRender(function(){var e=new v.default({hideInheritance:true,schema:t,values:a});r.view=e;r.view.setElement("[data-json-form]");r.view.render()})})}},{key:"onSave",value:function e(){if(!this.view.isValid()){_.default.addMessage({message:(0,i.t)("common.form.validation.errorsNotSaved"),type:_.default.TYPE_DANGER});return}this.values=this.view.getData();(0,s.update)(this.realm,this.values,this.data.id).then(function(){_.default.addMessage({message:(0,i.t)("config.messages.AppMessages.changesSaved")})},function(e){_.default.addMessage({response:e,type:_.default.TYPE_DANGER})})}},{key:"onDelete",value:function e(){var t=this;h.default.showConfirmationBeforeDeleting({message:(0,i.t)("console.common.confirmDeleteItem")},function(){(0,s.remove)(t.realm,[t.data.id]).then(function(){_.default.addMessage({message:(0,i.t)("config.messages.AppMessages.changesSaved")});A.default.routeTo(A.default.configuration.routes.realmsApplicationsFederation,{args:[encodeURIComponent(t.realm)],trigger:true})},function(e,t){_.default.addMessage({response:t,type:_.default.TYPE_DANGER})})})}}]);return t}(d.default);t.default=V},1525:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});r(1539);var a=r(6);var n=_(a);var o=r(19);var i=_(o);var s=r(159);var u=_(s);var l=r(1538);var c=_(l);var d=r(1164);var f=_(d);var v=r(1541);var p=_(v);var h=r(866);var m=_(h);var w=r(865);var y=_(w);var g=r(1531);var b=_(g);function _(e){return e&&e.__esModule?e:{default:e}}function P(e){var t=(0,f.default)();(0,i.default)(e).find(".help-block:not(.errormsg)").addClass("hidden-lg hidden-md hidden-sm").each(function(e,r){var a=(0,i.default)(t);a.popoverclickaway({container:"#content",html:true,placement:"auto top",content:r.innerHTML}).click(function(e){e.preventDefault()});(0,i.default)(r).parent().append(a)})}function A(e){(0,i.default)(e).find("input:password").attr("placeholder",i.default.t("common.form.passwordPlaceholder"))}b.default.define("enum_plugin",function(e){var t=this,r=arguments;var a=e.schema;var o=n.default.indexOf(a.enum,"");var i=o>-1;var s=function e(){var a=function e(t){return!t||8!==t.keyCode};t.deleteSelection=function(){var e=t.deleteSelection;return function(n){if(a(n))return e.apply(t,r);return false}}()};var u=function e(){t.plugins.settings["dropdown_header"]={title:a.options.enum_titles[o]};t.require("dropdown_header");t.setup=function(){var e=t.setup;return function(){e.apply(t,r);t.$dropdown.on("mousedown",".selectize-dropdown-header",function(){t.setValue("");t.close();t.blur();return false})}}()};i?u():s()});function E(e,t){var r=t.schema,a=t.values,n=t.hideInheritance,o=void 0!==n&&n;var i=6;var s=4;c.default.plugins.selectize.enable=true;c.default.plugins.selectize.plugins=function(e){return[{name:"enum_plugin",options:{schema:e}}]};c.default.defaults.themes.openam=p.default.getTheme(i,s);var u=r.toFlatWithInheritanceMeta(a);var l=a.removeInheritance();u=u.raw;l=l.raw;var d=new c.default(e[0],{disable_collapse:true,disable_edit_json:true,disable_properties:true,hide_inheritance:o,iconlib:"fontawesome4",schema:u,theme:"openam"});P(e);A(e);d.setValue(l);return d}var S=u.default.View.extend({className:"jsoneditor-block",initialize:function e(t){if(!(t.schema instanceof m.default))throw new TypeError('[JSONEditorView] "schema" argument is not an instance of JSONSchema.');if(!(t.values instanceof y.default))throw new TypeError('[JSONEditorView] "values" argument is not an instance of JSONValues.');this.options=n.default.defaults(t,{displayTitle:true})},toggleInheritance:function e(t,r,a){this.options.values=this.options.values.extend(this.getData());this.options.values=this.options.values.addValueForPath([t,"inherited"],a);this.options.values=this.options.values.addValueForPath([t,"value"],r);this.render()},render:function e(){this.$el.empty();var t=n.default.get(this.jsonEditor,"watchlist");this.jsonEditor=E(this.$el,this.options);this.jsonEditor.watchlist=t;this.options.displayTitle||this.$el.find("[data-header]").parent().hide();return this},isValid:function e(){return 0===this.jsonEditor.validate().length},getData:function e(){var t=new y.default(this.jsonEditor.getValue());this.options.schema.hasDefaultProperties()&&(t=t.pick(this.options.schema.raw.defaultProperties));t=t.nullifyEmptyPasswords(this.options.schema.getPasswordKeys());t=t.addInheritance(this.options.values.raw);return t.raw},setData:function e(t){this.options.values=this.options.values.extend(t)},watch:function e(t,r){this.jsonEditor.watch(t,r)},destroy:function e(){var t=this;var r=n.default.keys(this.jsonEditor.watchlist);n.default.forEach(r,function(e){t.jsonEditor.unwatch(e)});this.jsonEditor.destroy();this.jsonEditor=null}});t.default=S},1526:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=s;var a=r(61);var n=r(655);var o=i(n);function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,a.t)("common.form.delete");o.default.confirm({type:o.default.TYPE_DANGER,title:(0,a.t)("common.form.confirm")+" "+r,message:e.message?e.message:(0,a.t)("console.common.confirmDeleteText",{type:e.type}),btnOKLabel:r,btnOKClass:"btn-danger",callback:function e(r){r&&t&&t()}})}},1528:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=r(6);var n=v(a);var o=r(159);var i=v(o);var s=r(1525);var u=v(s);var l=r(866);var c=v(l);var d=r(865);var f=v(d);function v(e){return e&&e.__esModule?e:{default:e}}function p(e){e&&setTimeout(e,0)}var h=i.default.View.extend({initialize:function e(t){if(!(t.schema instanceof c.default))throw new TypeError('[FlatJSONSchemaView] "schema" argument is not an instance of JSONSchema.');if(!(t.values instanceof f.default))throw new TypeError('[FlatJSONSchemaView] "values" argument is not an instance of JSONValues.');this.options=n.default.defaults(t,{showOnlyRequiredAndEmpty:false})},render:function e(){var t=this.options.schema;var r=true;if(this.options.showOnlyRequiredAndEmpty){var a=this.options.schema.getRequiredPropertyKeys();var o=this.options.values.getEmptyValueKeys(t);var i=n.default.intersection(a,o);t=t.removeUnrequiredNonDefaultProperties().addDefaultProperties(i);r=!n.default.isEmpty(i)}this.subview=new u.default({displayForm:r,hideInheritance:this.options.hideInheritance,displayTitle:false,el:this.$el,schema:t,values:this.options.values}).render();p(this.options.onRendered);return this},isValid:function e(){return!this.subview||this.subview.isValid()},getData:function e(){if(this.subview){var t;return(t=this.subview).getData.apply(t,arguments)}},setData:function e(t){if(this.subview){this.options.values=this.options.values.extend(t);return this.subview.setData(t)}},watch:function e(t,r){this.subview&&this.subview.watch(t,r)},destroy:function e(){if(this.subview){this.subview.destroy();this.subview=null}}});t.default=h},1533:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=r(1537);var n=l(a);var o=r(1536);var i=l(o);var s=r(1526);var u=l(s);function l(e){return e&&e.__esModule?e:{default:e}}var c={};c.showConfirmationBeforeDeleting=function(e,t){(0,n.default)("FormHelper.showConfirmationBeforeDeleting","org/forgerock/openam/ui/admin/utils/form/showConfirmationBeforeAction");return(0,u.default)(e,t)};c.setActiveTab=function(e,t){(0,n.default)("FormHelper.setActiveTab","org/forgerock/openam/ui/admin/utils/form/setActiveTab");return(0,i.default)(e,t)};t.default=c},1536:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=function(e){e&&e.activeTabId&&e.$el.find('.nav-tabs a[href="'+e.activeTabId+'"]').tab("show")}},1537:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=a;function a(e,t){console.warn(e+" is marked as deprecated. \nPlease use "+t)}},1607:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.getAll=v;t.remove=p;t.update=h;t.get=m;t.getSchema=w;t.create=y;t.getInitialState=g;var a=r(6);var n=r(169);var o=c(n);var i=r(27);var s=c(i);var u=r(168);var l=c(u);function c(e){return e&&e.__esModule?e:{default:e}}var d=new o.default(""+s.default.host+s.default.context+"/json");var f="/realm-config/federation/circlesoftrust";function v(e){return d.serviceCall({url:(0,l.default)(f+"?_queryFilter=true",{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"}})}function p(e,t){var r=(0,a.map)(t,function(t){return d.serviceCall({url:(0,l.default)(f+"/"+encodeURIComponent(t),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"DELETE"})});return Promise.all(r)}function h(e,t,r){return d.serviceCall({url:(0,l.default)(f+"/"+encodeURIComponent(r),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},data:JSON.stringify((0,a.omit)(t,"_rev"))})}function m(e,t){return d.serviceCall({url:(0,l.default)(f+"/"+encodeURIComponent(t),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},suppressSpinner:true})}function w(e){return d.serviceCall({url:(0,l.default)(f+"?_action=schema",{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"POST"})}function y(e,t,r){return d.serviceCall({url:(0,l.default)(f+"/"+encodeURIComponent(r),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0","If-None-Match":"*"},data:JSON.stringify(t)})}function g(e){function t(){return d.serviceCall({url:(0,l.default)(f+"?_action=template",{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"})}return Promise.all([w(e),t()]).then(function(e){return{schema:e[0],values:e[1]}})}},1771:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=t.SAML2="saml2";var n=t.WS_FED="ws"},1772:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.getAll=d;var a=r(169);var n=l(a);var o=r(27);var i=l(o);var s=r(168);var u=l(s);function l(e){return e&&e.__esModule?e:{default:e}}var c=new n.default(""+i.default.host+i.default.context+"/json");function d(e,t){return c.serviceCall({url:(0,u.default)("/realm-config/federation/entityproviders/"+t+"?_queryFilter=true",{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"}})}}}]);
//# sourceMappingURL=77.94a52b0e0b.js.map