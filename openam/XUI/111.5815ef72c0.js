(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[111,314],{1265:function(e,r,t){var n=t(62);e.exports=(n["default"]||n).template({compiler:[7,">= 4.0.0"],main:function(e,r,t,n,a){var o;return(null!=(o=e.invokePartial(n["headers/_TitleWithSubAndIcon"],r,{name:"headers/_TitleWithSubAndIcon",hash:{icon:"list-alt",type:"console.applications.oauth2.groups.edit.type",title:null!=r?r.id:r},data:a,helpers:t,partials:n,decorators:e.decorators}))?o:"")+"\n<form data-json-form></form>\n"},usePartial:true,useData:true})},1377:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:true});var n=function(){function e(e,r){var t=[];var n=true;var a=false;var o=void 0;try{for(var u=e[Symbol.iterator](),i;!(n=(i=u.next()).done);n=true){t.push(i.value);if(r&&t.length===r)break}}catch(e){a=true;o=e}finally{try{!n&&u["return"]&&u["return"]()}finally{if(a)throw o}}return t}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();var a=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}return function(r,t,n){t&&e(r.prototype,t);n&&e(r,n);return r}}();var o=t(1534);var u=t(1530);var i=t(114);var l=y(i);var s=t(1571);var c=y(s);var f=t(866);var p=y(f);var d=t(865);var v=y(d);var m=t(73);var g=y(m);var h=t(1265);var _=y(h);function y(e){return e&&e.__esModule?e:{default:e}}function A(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function T(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!==typeof r&&"function"!==typeof r?e:r}function b(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}var O=function(e){b(r,e);function r(){A(this,r);return T(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}a(r,[{key:"render",value:function e(r){var t=this;var a=n(r,2),i=a[0],l=a[1];var s=new c.default({data:{id:l,headerActions:[{actionPartial:"form/_Button",data:"delete",title:"common.form.delete",icon:"fa-times"}]},listRoute:g.default.configuration.routes.realmsApplicationsOAuth2,listRouteArgs:[encodeURIComponent(i)],template:_.default,getInstance:function e(){return Promise.all([(0,o.getSchema)(i,u.OAUTH2_CLIENT),(0,o.get)(i,u.OAUTH2_CLIENT,l)]).then(function(e){var r=n(e,2),t=r[0],a=r[1];return{schema:new p.default(t),values:new v.default(a)}})},updateInstance:function e(r){return(0,o.update)(i,u.OAUTH2_CLIENT,JSON.parse(r),l)},deleteInstance:function e(){return(0,o.remove)(i,u.OAUTH2_CLIENT,[l])}});this.parentRender(function(){t.$el.append(s.render().$el)})}}]);return r}(l.default);r.default=O},1523:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:true});var n=function e(r){if(r){var t=r.sizePerPage,n=r.pagedResultsOffset,a=r.sortKey,o=r.sortDirection;var u=n?"&_pagedResultsOffset="+n:"";var i="&_pageSize="+t;var l=a&&o?"&_sortKeys="+encodeURIComponent(o)+a:"";return""+u+i+l}return""};r.default=n},1524:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:true});var n=function e(r){return r?"&_fields="+r.join(","):""};r.default=n},1530:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:true});var n=r.JAVA_AGENT="J2EEAgent";var a=r.OAUTH2_CLIENT="OAuth2Client";var o=r.REMOTE_CONSENT_AGENT="RemoteConsentAgent";var u=r.SOAP_STS_AGENT="SoapSTSAgent";var i=r.SOFTWARE_PUBLISHER="SoftwarePublisher";var l=r.WEB_AGENT="WebAgent";var s=r.TRUSTED_JWT_ISSUER="TrustedJwtIssuer"},1534:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:true});r.getAll=g;r.get=h;r.getSchema=_;r.remove=y;r.getInitialState=A;r.create=T;r.update=b;var n=t(6);var a=t(169);var o=v(a);var u=t(27);var i=v(u);var l=t(1524);var s=v(l);var c=t(1523);var f=v(c);var p=t(168);var d=v(p);function v(e){return e&&e.__esModule?e:{default:e}}var m=new o.default(""+i.default.host+i.default.context+"/json");function g(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};var n=(0,f.default)(t.pagination);var a=(0,s.default)(t.fields);return m.serviceCall({url:(0,d.default)("/realm-config/agents/groups/"+r+"?_queryFilter=true"+n+a,{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"}})}function h(e,r,t){return m.serviceCall({url:(0,d.default)("/realm-config/agents/groups/"+r+"/"+encodeURIComponent(t),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"}})}function _(e,r){return m.serviceCall({url:(0,d.default)("/realm-config/agents/groups/"+r+"?_action=schema",{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"POST"})}function y(e,r,t){var a=(0,n.map)(t,function(t){return m.serviceCall({url:(0,d.default)("/realm-config/agents/groups/"+r+"/"+encodeURIComponent(t),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"DELETE"})});return Promise.all(a)}function A(e,r){function t(){return m.serviceCall({url:(0,d.default)("/realm-config/agents/groups/"+r+"?_action=template",{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"})}return Promise.all([_(e,r),t()]).then(function(e){return{schema:e[0],values:e[1]}})}function T(e,r,t,n){return m.serviceCall({url:(0,d.default)("/realm-config/agents/groups/"+r+"/"+encodeURIComponent(n),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0","If-None-Match":"*"},data:JSON.stringify(t),suppressSpinner:true,errorsHandlers:{incorrectRevisionError:{status:412}}})}function b(e,r,t,a){return m.serviceCall({url:(0,d.default)("/realm-config/agents/groups/"+r+"/"+encodeURIComponent(a),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},data:JSON.stringify((0,n.omit)(t,"_rev"))})}}}]);
//# sourceMappingURL=111.5815ef72c0.js.map