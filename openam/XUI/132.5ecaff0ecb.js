(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[132,312,398],{1168:function(e,t,a){var n=a(62);e.exports=(n["default"]||n).template({1:function(e,t,a,n,l){var r;return"alert-"+e.escapeExpression((r=null!=(r=a.type||(null!=t?t.type:t))?r:a.helperMissing,"function"===typeof r?r.call(null!=t?t:e.nullContext||{},{name:"type",hash:{},data:l}):r))},3:function(e,t,a,n,l){return'<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">×</span><span class="sr-only">'+e.escapeExpression((a.t||t&&t.t||a.helperMissing).call(null!=t?t:e.nullContext||{},"console.common.form.close",{name:"t",hash:{},data:l}))+"</span></button>"},5:function(e,t,a,n,l){return'            <i class="fa fa-check-circle-o"></i>\n'},7:function(e,t,a,n,l){return'            <i class="fa fa-exclamation-circle"></i>\n'},compiler:[7,">= 4.0.0"],main:function(e,t,a,n,l){var r,o=null!=t?t:e.nullContext||{},i=a.helperMissing;return'\x3c!--\n  Copyright 2015-2017 ForgeRock AS. All Rights Reserved\n \n  Use of this code requires a commercial software license with ForgeRock AS.\n  or with one of its affiliates. All use shall be exclusively subject\n  to such license between the licensee and ForgeRock AS.\n--\x3e\n<div class="alert '+(null!=(r=a["if"].call(o,null!=t?t.type:t,{name:"if",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l}))?r:"")+'" role="alert">\n    <div class="media">\n        '+(null!=(r=a["if"].call(o,null!=t?t.dismissable:t,{name:"if",hash:{},fn:e.program(3,l,0),inverse:e.noop,data:l}))?r:"")+'\n        <div class="media-left" href="#">\n'+(null!=(r=(a.equals||t&&t.equals||i).call(o,null!=t?t.type:t,"success",{name:"equals",hash:{},fn:e.program(5,l,0),inverse:e.program(7,l,0),data:l}))?r:"")+'        </div>\n        <div class="media-body">\n            '+e.escapeExpression((a.t||t&&t.t||i).call(o,null!=t?t.text:t,{name:"t",hash:{},data:l}))+"\n        </div>\n    </div>\n</div>\n"},useData:true})},1263:function(e,t,a){var n=a(62);e.exports=(n["default"]||n).template({1:function(e,t,a,n,l,r,o){var i,u,s=null!=t?t:e.nullContext||{},c=a.helperMissing,d="function",f=e.escapeExpression;return'                    <tr data-module-name="'+f((u=null!=(u=a._id||(null!=t?t._id:t))?u:c,typeof u===d?u.call(s,{name:"_id",hash:{},data:l}):u))+'" data-module-type="'+f((u=null!=(u=a.type||(null!=t?t.type:t))?u:c,typeof u===d?u.call(s,{name:"type",hash:{},data:l}):u))+'" data-module-chains="'+f((u=null!=(u=a.chains||(null!=t?t.chains:t))?u:c,typeof u===d?u.call(s,{name:"chains",hash:{},data:l}):u))+'">\n                        <td class="select-row-cell"><input data-select-module type="checkbox" '+(null!=(i=a["if"].call(s,null!=t?t.chains:t,{name:"if",hash:{},fn:e.program(2,l,0,r,o),inverse:e.noop,data:l}))?i:"")+'/></td>\n                        <td class="wordwrap">\n                            <a href="'+f((a.routeTo||t&&t.routeTo||c).call(s,"realmsAuthenticationModuleEdit",null!=o[1]?o[1].realmPath:o[1],null!=t?t.type:t,null!=t?t._id:t,{name:"routeTo",hash:{},data:l}))+'" title="'+f((a.t||t&&t.t||c).call(s,"common.form.edit",{name:"t",hash:{},data:l}))+'" '+(null!=(i=a["if"].call(s,null!=t?t.chains:t,{name:"if",hash:{},fn:e.program(4,l,0,r,o),inverse:e.noop,data:l}))?i:"")+">"+f((u=null!=(u=a._id||(null!=t?t._id:t))?u:c,typeof u===d?u.call(s,{name:"_id",hash:{},data:l}):u))+"</a>\n                        </td>\n                        <td>"+f((u=null!=(u=a.typeDescription||(null!=t?t.typeDescription:t))?u:c,typeof u===d?u.call(s,{name:"typeDescription",hash:{},data:l}):u))+'</td>\n\n                        <td class="wordwrap">\n'+(null!=(i=a.each.call(s,null!=t?t.chains:t,{name:"each",hash:{},fn:e.program(6,l,0,r,o),inverse:e.noop,data:l}))?i:"")+'                        </td>\n                        <td class="fr-col-btn-2">\n                            <div class="btn-group">\n                                <a class="btn btn-link" '+(null!=(i=a["if"].call(s,null!=t?t.chains:t,{name:"if",hash:{},fn:e.program(8,l,0,r,o),inverse:e.noop,data:l}))?i:"")+' href="'+f((a.routeTo||t&&t.routeTo||c).call(s,"realmsAuthenticationModuleEdit",null!=o[1]?o[1].realmPath:o[1],null!=t?t.type:t,null!=t?t._id:t,{name:"routeTo",hash:{},data:l}))+'"  title="'+f((a.t||t&&t.t||c).call(s,"common.form.edit",{name:"t",hash:{},data:l}))+'"><i class="fa fa-pencil"></i></a>\n                                <button type="button" class="btn btn-link" data-delete-module '+(null!=(i=a["if"].call(s,null!=t?t.chains:t,{name:"if",hash:{},fn:e.program(2,l,0,r,o),inverse:e.noop,data:l}))?i:"")+'>\n                                    <i class="fa fa-close" '+(null!=(i=a.unless.call(s,null!=t?t.chains:t,{name:"unless",hash:{},fn:e.program(10,l,0,r,o),inverse:e.noop,data:l}))?i:"")+"></i>\n                                </button>\n                            </div>\n                        </td>\n                    </tr>\n"},2:function(e,t,a,n,l){return"disabled"},4:function(e,t,a,n,l){return'class="check-before-edit"'},6:function(e,t,a,n,l,r,o){var i=e.escapeExpression;return'                            <a href="'+i((a.routeTo||t&&t.routeTo||a.helperMissing).call(null!=t?t:e.nullContext||{},"realmsAuthenticationChainEdit",null!=o[2]?o[2].realmPath:o[2],t,{name:"routeTo",hash:{},data:l}))+'">'+i(e.lambda(t,t))+"</a><br>\n"},8:function(e,t,a,n,l){return"data-check-before-edit"},10:function(e,t,a,n,l){return'title="'+e.escapeExpression((a.t||t&&t.t||a.helperMissing).call(null!=t?t:e.nullContext||{},"common.form.delete",{name:"t",hash:{},data:l}))+'"'},compiler:[7,">= 4.0.0"],main:function(e,t,a,n,l,r,o){var i,u=null!=t?t:e.nullContext||{},s=a.helperMissing,c=e.escapeExpression;return(null!=(i=e.invokePartial(n["headers/_Title"],t,{name:"headers/_Title",hash:{title:"console.authentication.modules.title"},data:l,helpers:a,partials:n,decorators:e.decorators}))?i:"")+'\n<p class="page-description">'+c((a.t||t&&t.t||s).call(u,"console.authentication.modules.description",{name:"t",hash:{},data:l}))+'</p>\n<div class="btn-toolbar page-toolbar">\n    <a class="btn btn-primary" href="'+c((a.routeTo||t&&t.routeTo||s).call(u,"realmsAuthenticationModuleNew",null!=t?t.realmPath:t,{name:"routeTo",hash:{},data:l}))+'">\n        <i class="fa fa-plus"></i> '+c((a.t||t&&t.t||s).call(u,"console.authentication.modules.addModule",{name:"t",hash:{},data:l}))+'\n    </a>\n    <button disabled class="btn btn-default" data-delete-modules type="button"><i class="fa fa-times"></i> '+c((a.t||t&&t.t||s).call(u,"common.form.delete",{name:"t",hash:{},data:l}))+'</button>\n</div>\n\n<div class="panel panel-default">\n    <div class="panel-body">\n        <div class="table-container">\n            <table class="table">\n                <thead>\n                    <tr>\n                        <th class="select-all-header-cell"></th>\n                        <th>'+c((a.t||t&&t.t||s).call(u,"console.authentication.modules.moduleName",{name:"t",hash:{},data:l}))+"</th>\n                        <th>"+c((a.t||t&&t.t||s).call(u,"console.authentication.modules.moduleType",{name:"t",hash:{},data:l}))+"</th>\n                        <th>"+c((a.t||t&&t.t||s).call(u,"console.authentication.modules.chain",{name:"t",hash:{},data:l}))+'</th>\n                        <th class="fr-col-btn-2"/>\n                    </tr>\n                </thead>\n                <tbody>\n'+(null!=(i=a.each.call(u,null!=t?t.formData:t,{name:"each",hash:{},fn:e.program(1,l,0,r,o),inverse:e.noop,data:l}))?i:"")+"                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n"},usePartial:true,useData:true,useDepths:true})},1398:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=function(){function e(e,t){var a=[];var n=true;var l=false;var r=void 0;try{for(var o=e[Symbol.iterator](),i;!(n=(i=o.next()).done);n=true){a.push(i.value);if(t&&a.length===t)break}}catch(e){l=true;r=e}finally{try{!n&&o["return"]&&o["return"]()}finally{if(l)throw r}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();a(1531);var l=a(6);var r=T(l);var o=a(19);var i=T(o);var u=a(114);var s=T(u);var c=a(1168);var d=T(c);var f=a(868);var h=T(f);var m=a(1558);var p=T(m);var v=a(2020);var g=T(v);var y=a(1533);var b=T(y);var A=a(560);var _=T(A);var C=a(1263);var P=T(C);function T(e){return e&&e.__esModule?e:{default:e}}function M(e){return(0,i.default)(e).closest("tr").data()}function w(e,t){return Promise.all((0,h.default)(t).map(function(t){return p.default.authentication.modules.remove(e,t.moduleName,t.moduleType)}))}var x=s.default.extend({template:P.default,events:{"change [data-select-module]":"moduleSelected","click [data-delete-module]":"onDeleteSingle","click [data-delete-modules]":"onDeleteMultiple","click [data-check-before-edit]":"editModule"},partials:{"alerts/_Alert":d.default},data:{},moduleSelected:function e(t){var a=this.$el.find("input[type=checkbox]").is(":checked"),n=(0,i.default)(t.currentTarget).closest("tr"),l=(0,i.default)(t.currentTarget).is(":checked");this.$el.find("[data-delete-modules]").prop("disabled",!a);l?n.addClass("selected"):n.removeClass("selected")},editModule:function e(t){t.preventDefault();var a=(0,i.default)(t.currentTarget).closest("tr").data(),n=t.currentTarget.href;(0,g.default)(a.moduleName,a.moduleChains,n)},onDeleteSingle:function e(t){t.preventDefault();b.default.showConfirmationBeforeDeleting({type:i.default.t("console.authentication.common.module")},r.default.bind(this.deleteModule,this,t))},onDeleteMultiple:function e(t){t.preventDefault();var a=this.$el.find("input[type=checkbox]:checked");b.default.showConfirmationBeforeDeleting({message:i.default.t("console.authentication.modules.confirmDeleteSelected",{count:a.length})},r.default.bind(this.deleteModules,this,t,a))},deleteModule:function e(t){var a=this,n=t.currentTarget,l=M(n);(0,i.default)(n).prop("disabled",true);w(this.data.realmPath,l).then(function(){a.render(a.data.args)},function(e){_.default.addMessage({type:_.default.TYPE_DANGER,response:e});(0,i.default)(n).prop("disabled",false)})},deleteModules:function e(t,a){var n=this,l=t.currentTarget,o=(0,r.default)(a).toArray().map(M).value();(0,i.default)(l).prop("disabled",true);w(this.data.realmPath,o).then(function(){n.render([n.data.realmPath])},function(e){_.default.addMessage({type:_.default.TYPE_DANGER,response:e});(0,i.default)(l).prop("disabled",false)})},render:function e(t,a){var l=this,o,i;this.data.args=t;this.data.realmPath=t[0];o=p.default.authentication.chains.all(this.data.realmPath);i=p.default.authentication.modules.all(this.data.realmPath);Promise.all([o,i]).then(function(e){var t=n(e,2),o=t[0],i=t[1];r.default.each(i,function(e){r.default.each(o.values.result,function(t){r.default.each(t.authChainConfiguration,function(a){if(a.module===e._id){e.chains=e.chains||[];e.chains.push(t._id)}})});e.chains=r.default.uniq(e.chains)});l.data.formData=i;l.parentRender(function(){a&&a()})},function(e,t){_.default.addMessage({type:_.default.TYPE_DANGER,response:e||t});l.parentRender(function(){a&&a()})})}});t.default=x},1526:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=i;var n=a(61);var l=a(655);var r=o(l);function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,n.t)("common.form.delete");r.default.confirm({type:r.default.TYPE_DANGER,title:(0,n.t)("common.form.confirm")+" "+a,message:e.message?e.message:(0,n.t)("console.common.confirmDeleteText",{type:e.type}),btnOKLabel:a,btnOKClass:"btn-danger",callback:function e(a){a&&t&&t()}})}},1533:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=a(1537);var l=s(n);var r=a(1536);var o=s(r);var i=a(1526);var u=s(i);function s(e){return e&&e.__esModule?e:{default:e}}var c={};c.showConfirmationBeforeDeleting=function(e,t){(0,l.default)("FormHelper.showConfirmationBeforeDeleting","org/forgerock/openam/ui/admin/utils/form/showConfirmationBeforeAction");return(0,u.default)(e,t)};c.setActiveTab=function(e,t){(0,l.default)("FormHelper.setActiveTab","org/forgerock/openam/ui/admin/utils/form/setActiveTab");return(0,o.default)(e,t)};t.default=c},1536:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=function(e){e&&e.activeTabId&&e.$el.find('.nav-tabs a[href="'+e.activeTabId+'"]').tab("show")}},1537:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=n;function n(e,t){console.warn(e+" is marked as deprecated. \nPlease use "+t)}},1558:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=function(){function e(e,t){var a=[];var n=true;var l=false;var r=void 0;try{for(var o=e[Symbol.iterator](),i;!(n=(i=o.next()).done);n=true){a.push(i.value);if(t&&a.length===t)break}}catch(e){l=true;r=e}finally{try{!n&&o["return"]&&o["return"]()}finally{if(l)throw r}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();var l=a(6);var r=a(19);var o=b(r);var i=a(169);var u=b(i);var s=a(27);var c=b(s);var d=a(168);var f=b(d);var h=a(866);var m=b(h);var p=a(865);var v=b(p);var g=a(867);var y=b(g);function b(e){return e&&e.__esModule?e:{default:e}}var A=new u.default(""+c.default.host+c.default.context+"/json");A.authentication={get:function e(t){return y.default.schemaWithValues(A,(0,f.default)("/realm-config/authentication",{realm:t}))},update:function e(t,a){return A.serviceCall({url:(0,f.default)("/realm-config/authentication",{realm:t}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"PUT",data:JSON.stringify(a)})},chains:{all:function e(t){return Promise.all([A.serviceCall({url:(0,f.default)("/realm-config/authentication/chains?_queryFilter=true",{realm:t}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}}),A.serviceCall({url:(0,f.default)("/realm-config/authentication",{realm:t}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}})]).then(function(e){var t=n(e,2),a=t[0],r=t[1];(0,l.each)(a.result,function(e){if(e._id===r.adminAuthModule){e.defaultConfig=e.defaultConfig||{};e.defaultConfig.adminAuthModule=true}if(e._id===r.orgConfig){e.defaultConfig=e.defaultConfig||{};e.defaultConfig.orgConfig=true}});return{values:a}})},create:function e(t,a){return A.serviceCall({url:(0,f.default)("/realm-config/authentication/chains?_action=create",{realm:t}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST",data:JSON.stringify(a)})},get:function e(t,a){var r;return Promise.all([A.serviceCall({url:(0,f.default)("/realm-config/authentication",{realm:t}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}}),A.serviceCall({url:(0,f.default)("/realm-config/authentication/chains/"+a,{realm:t}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}}),A.serviceCall({url:(0,f.default)("/realm-config/authentication/modules?_queryFilter=true",{realm:t}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}})]).then(function(e){var t=n(e,3),a=t[0],o=t[1],i=t[2];o._id===a.adminAuthModule&&(o.adminAuthModule=true);o._id===a.orgConfig&&(o.orgConfig=true);o.authChainConfiguration=o.authChainConfiguration||[];(0,l.each)(o.authChainConfiguration,function(e){r=(0,l.find)(i.result,{_id:e.module});r&&(e.type=r.type)});return{chainData:o,modulesData:(0,l.sortBy)(i.result,"_id")}})},remove:function e(t,a){return A.serviceCall({url:(0,f.default)("/realm-config/authentication/chains/"+a,{realm:t}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"DELETE"})},update:function e(t,a,n){return A.serviceCall({url:(0,f.default)("/realm-config/authentication/chains/"+a,{realm:t}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"PUT",data:JSON.stringify(n)})}},modules:{all:function e(t){return A.serviceCall({url:(0,f.default)("/realm-config/authentication/modules?_queryFilter=true",{realm:t}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}}).then(function(e){var t=e.result;return(0,l.sortBy)(t,"_id")})},create:function e(t,a,n){return A.serviceCall({url:(0,f.default)("/realm-config/authentication/modules/"+n+"?_action=create",{realm:t}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST",data:JSON.stringify(a)})},get:function e(t,a,l){function r(){return A.serviceCall({url:(0,f.default)("/realm-config/authentication/modules/"+l+"/"+a,{realm:t}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}})}return Promise.all([this.schema(t,l),r(),this.types.get(t,l)]).then(function(e){var t=n(e,3),a=t[0],l=t[1],r=t[2];return{name:r.name,schema:a,values:new v.default(l)}})},exists:function e(t,a){var n=o.default.Deferred(),l="_queryFilter="+encodeURIComponent('_id eq "'+a+'"')+"&_fields=_id",r=A.serviceCall({url:(0,f.default)("/realm-config/authentication/modules?"+l,{realm:t}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}});r.then(function(e){n.resolve(e.result.length>0)});return n},remove:function e(t,a,n){return A.serviceCall({url:(0,f.default)("/realm-config/authentication/modules/"+n+"/"+a,{realm:t}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"DELETE"})},update:function e(t,a,n,l){return A.serviceCall({url:(0,f.default)("/realm-config/authentication/modules/"+n+"/"+a,{realm:t}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"PUT",data:l}).then(function(e){return new v.default(e)})},types:{all:function e(t){return A.serviceCall({url:(0,f.default)("/realm-config/authentication/modules?_action=getAllTypes",{realm:t}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"}).then(function(e){var t=e.result;return(0,l.sortBy)(t,"name")})},get:function e(t,a){return A.authentication.modules.types.all(t).then(function(e){return(0,l.find)(e,{_id:a})})}},schema:function e(t,a){return A.serviceCall({url:(0,f.default)("/realm-config/authentication/modules/"+a+"?_action=schema",{realm:t}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"}).then(function(e){return new m.default(e)})}}};t.default=A},2020:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=function(e,t,a){o.default.show({title:l.default.t("console.authentication.modules.inUse.title"),message:l.default.t("console.authentication.modules.inUse.message",{moduleName:e,usedChains:t}),data:{link:a},buttons:[{label:l.default.t("common.form.cancel"),cssClass:"btn-default",action:u},{label:l.default.t("common.form.yes"),cssClass:"btn-primary",action:s}]})};var n=a(19);var l=i(n);var r=a(655);var o=i(r);function i(e){return e&&e.__esModule?e:{default:e}}function u(e){e.close()}function s(e){window.location.href=e.options.data.link;e.close()}}}]);
//# sourceMappingURL=132.5ecaff0ecb.js.map