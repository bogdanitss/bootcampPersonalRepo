(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[145],{1317:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:true});var r=t(606);var n=t(114);var l=_(n);var s=t(37);var u=_(s);var i=t(27);var d=_(i);var o=t(59);var f=_(o);var v=t(170);var c=_(v);var g=t(171);var m=_(g);var p=t(604);var h=_(p);var w=t(73);var E=_(w);function _(a){return a&&a.__esModule?a:{default:a}}function S(a){u.default.setProperty("loggedUser",null);f.default.sendEvent(d.default.EVENT_CHANGE_VIEW,{args:a,route:E.default.configuration.routes.login})}var T=l.default.extend({template:"openam/SwitchRealmsTemplate",baseTemplate:"common/LoginBaseTemplate",data:{},events:{"click [data-switch-realms]":"onSwitchRealmsHandler"},partials:{"alerts/_Alert":"alerts/_Alert"},render:function a(){var e=this;this.data.fragmentParamString=(0,c.default)();this.data.args=[this.data.fragmentParamString];(0,m.default)()?(0,r.isSessionValid)().then(function(){return e.parentRender()},function(){return S(e.data.args)}):S(this.data.args)},onSwitchRealmsHandler:function a(e){var t=this;e.preventDefault();var r=function a(){f.default.sendEvent(d.default.EVENT_CHANGE_VIEW,{args:t.data.args,route:E.default.configuration.routes.login})};(0,h.default)().then(r,r)}});e.default=new T}}]);
//# sourceMappingURL=145.e1d25fae63.js.map