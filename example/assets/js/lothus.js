"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function routeHasParameters(t){var e=t.split("/"),i=!1;return e.forEach(function(t){":"===t.substr(0,1)&&(i=!0)}),i}function changePageTitle(t,e){e=e||document,e.title=t||e.title}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},_createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(t){if(void 0===t||null===t)throw new TypeError("Cannot convert first argument to object");for(var e=Object(t),i=1;i<arguments.length;i++){var n=arguments[i];if(void 0!==n&&null!==n){n=Object(n);for(var r=Object.keys(Object(n)),s=0,o=r.length;s<o;s++){var u=r[s],a=Object.getOwnPropertyDescriptor(n,u);void 0!==a&&a.enumerable&&(e[u]=n[u])}}}return e}});var Lothus=function(){function t(e){_classCallCheck(this,t),this.events={},this.dataBinder=rivets,this.router=new Navigo(null,(!1)),this._document=e||document,this._providers={},this._originalProviders={},this._routes={},this._lastRoute,this._lastProvider,this._defaultRoute}return _createClass(t,[{key:"init",value:function(){var t=this;return new Promise(function(e){var i=t._document.querySelectorAll("page[name][route]"),n=t._document.querySelectorAll("page[name][route][default]"),r={};if(!n.length||n.length>1)throw new Error("An unique default page is necessary. "+n.length+" indicated");n=n[0],i.forEach(function(e){var i=t._getOptions(e);e.attributes.regexRoute;t._routes[i.name]=i;var s=e.attributes.name.value,o=e.attributes.route.value;if(r[o]={as:s,uses:function(e){var n=t;if(e=e||{},i.dataProvider)t._providers[i.dataProvider]||(t._providers[i.dataProvider]={}),t.provider(i.dataProvider,{_params:e});else{var r="__for_"+s;t.provider(r,{_params:e}),i.dataProvider=r}t._handleRoute(i).then(function(t){changePageTitle(t.title,n._document),n._document.querySelectorAll("page[name][route]").forEach(function(e){e.style.display=e.attributes.name.value!==t.name?"none":""})})}},e===n){if(routeHasParameters(o))throw new Error("Default route must not have parameters.");t._defaultRoute=s}}),t.router.on(r),t._applyEvents(),t._initRouter(),e()})}},{key:"provider",value:function(t,e){if("object"!==("undefined"==typeof e?"undefined":_typeof(e)))throw new Error("Data providers can only be objects");this._providers[t]||(this._providers[t]={});var i=Object.assign(this._providers[t],e);if(!this._originalProviders[t]){this._originalProviders[t]={};for(var n in i)i.hasOwnProperty(n)&&(this._originalProviders[t][n]=i[n])}this._providers[t]=i}},{key:"_applyEvents",value:function(){var t=this;window.onhashchange=function(){window.history.pushState&&window.history.pushState(null,null,window.location.href),t._initRouter()}}},{key:"_initRouter",value:function(){this.router.resolve(),""!==window.location.hash&&"#"!==window.location.hash||this._renderDefaultRoute()}},{key:"_renderDefaultRoute",value:function(){window.location.hash="#"+this._routes[this._defaultRoute].route}},{key:"_render",value:function(t){if(t&&t.dataProvider){var e=this._providers[t.dataProvider];this._lastProvider=t.dataProvider,this.dataBinder.bind(this._document.querySelector('page[name="'+t.name+'"]'),e)}}},{key:"_getOptions",value:function(t){var e={name:t.attributes.name.value,route:t.attributes.route.value,clone:t.cloneNode(!0)};if(t.attributes["data-provider"]&&(e.dataProvider=t.attributes["data-provider"].value),t.attributes.origin&&(e.origin=t.attributes.origin.value),t.attributes.title&&(e.title=t.attributes.title.value),t.attributes.onload){if(!this.events[t.attributes.onload.value])throw new Error("Event for "+t.attributes.route.value+"::onload not found: "+t.attributes.onload.value);e.onload=t.attributes.onload.value}if(t.attributes.onunload){if(!this.events[t.attributes.onunload.value])throw new Error("Event for "+t.attributes.route.value+"::onunload not found: "+t.attributes.onunload.value);e.onunload=t.attributes.onunload.value}return e}},{key:"_handleRoute",value:function(t){var e=this;return new Promise(function(i){var n=t;window.location.href;e._handleEvent(n).onunload(),n.origin?!function(){var t=e;importTemplate(n.origin).then(function(e){t._document.querySelector('page[name="'+n.name+'"]').innerHTML=e.body.innerHTML,t._render(n),t._handleEvent(n).onload()})}():(e._render(n),e._handleEvent(n).onload()),i(n)})}},{key:"_handleEvent",value:function(t){var e=this,i=this._document.querySelector('page[name="'+t.name+'"]');return{onload:function(){t.onload&&e.events[t.onload].bind(i,e._providers[t.dataProvider]._params).call()},onunload:function(){if(e._lastRoute){e._routes[e._lastRoute].onunload&&e.events[e._routes[e._lastRoute].onunload].call();var i=e._routes[e._lastRoute];e._document.querySelector('page[name="'+i.name+'"]').innerHTML=i.clone.innerHTML}e._lastProvider&&(e._providers[e._lastProvider]=e._originalProviders[e._lastProvider]),e._lastRoute=t.name}}}}]),t}();if("object"===("undefined"==typeof module?"undefined":_typeof(module))?module.exports=Lothus:"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&(exports.Lothus=Lothus),function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Navigo",[],e):"object"==typeof exports?exports.Navigo=e():t.Navigo=e()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e){function i(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}function n(t){return t instanceof RegExp?t:t.replace(/\/+$/,"").replace(/^\/+/,"/")}function r(t,e){return 0===e.length?null:t?t.slice(1,t.length).reduce(function(t,i,n){return null===t&&(t={}),t[e[n]]=i,t},null):null}function s(t){var e,i=[];return e=t instanceof RegExp?t:new RegExp(n(t).replace(c,function(t,e,n){return i.push(n),f}).replace(p,v)+b),{regexp:e,paramNames:i}}function o(t){var e=arguments.length<=1||void 0===arguments[1]?[]:arguments[1];return e.map(function(e){var i=s(e.route),n=i.regexp,o=i.paramNames,u=t.match(n),a=r(u,o);return!!u&&{match:u,route:e,params:a}}).filter(function(t){return t})}function u(t,e){return o(t,e)[0]||!1}function a(t,e){var i=o(t,e.filter(function(t){var e=n(t.route);return""!==e&&"*"!==e})),r=n(t);return i.length>0?i.map(function(e){return n(t.substr(0,e.match.index))}).reduce(function(t,e){return e.length<t.length?e:t},r):r}function l(){return!("undefined"==typeof window||!window.history||!window.history.pushState)}function h(t,e){this._routes=[],this.root=e&&t?t.replace(/\/$/,"/#"):t||null,this._useHash=e,this._paused=!1,this._destroyed=!1,this._lastRouteResolved=null,this._ok=!e&&l(),this._listen(),this.updatePageLinks()}var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};Object.defineProperty(e,"__esModule",{value:!0});var c=/([:*])(\w+)/g,p=/\*/g,f="([^/]+)",v="(?:.*)",b="(?:/|$)";h.prototype={helpers:{match:u,root:a,clean:n},navigate:function(t,e){var i;return t=t||"",this._ok?(i=(e?"":this._getRoot()+"/")+n(t),i=i.replace(/([^:])(\/{2,})/g,"$1/"),history[this._paused?"replaceState":"pushState"]({},"",i),this.resolve()):"undefined"!=typeof window&&(window.location.href=window.location.href.replace(/#(.*)$/,"")+"#"+t),this},on:function(){if(arguments.length>=2)this._add(arguments.length<=0?void 0:arguments[0],arguments.length<=1?void 0:arguments[1]);else if("object"===d(arguments.length<=0?void 0:arguments[0]))for(var t in arguments.length<=0?void 0:arguments[0])this._add(t,(arguments.length<=0?void 0:arguments[0])[t]);else"function"==typeof(arguments.length<=0?void 0:arguments[0])&&this._add("",arguments.length<=0?void 0:arguments[0]);return this},resolve:function(t){var e,n,r=(t||this._cLoc()).replace(this._getRoot(),"");return!this._paused&&r!==this._lastRouteResolved&&(this._useHash&&(r=r.replace(/^\/#/,"/")),n=u(r,this._routes),!!n&&(this._lastRouteResolved=r,e=n.route.handler,n.route.route instanceof RegExp?e.apply(void 0,i(n.match.slice(1,n.match.length))):e(n.params),n))},destroy:function(){this._routes=[],this._destroyed=!0,clearTimeout(this._listenningInterval),"undefined"!=typeof window?window.onpopstate=null:null},updatePageLinks:function(){var t=this;"undefined"!=typeof document&&this._findLinks().forEach(function(e){e.hasListenerAttached||(e.addEventListener("click",function(i){var r=e.getAttribute("href");t._destroyed||(i.preventDefault(),t.navigate(n(r)))}),e.hasListenerAttached=!0)})},generate:function(t){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return this._routes.reduce(function(i,n){var r;if(n.name===t){i=n.route;for(r in e)i=i.replace(":"+r,e[r])}return i},"")},link:function(t){return this._getRoot()+t},pause:function(t){this._paused=t},disableIfAPINotAvailable:function(){l()||this.destroy()},_add:function(t){var e=arguments.length<=1||void 0===arguments[1]?null:arguments[1];return"object"===("undefined"==typeof e?"undefined":d(e))?this._routes.push({route:t,handler:e.uses,name:e.as}):this._routes.push({route:t,handler:e}),this._add},_getRoot:function(){return null!==this.root?this.root:(this.root=a(this._cLoc(),this._routes),this.root)},_listen:function(){var t=this;this._ok?window.onpopstate=function(){t.resolve()}:!function(){var e=t._cLoc(),i=void 0,n=void 0;(n=function(){i=t._cLoc(),e!==i&&(e=i,t.resolve()),t._listenningInterval=setTimeout(n,200)})()}()},_cLoc:function(){return"undefined"!=typeof window?window.location.href:""},_findLinks:function(){return[].slice.call(document.querySelectorAll("[data-navigo]"))}},e["default"]=h,t.exports=e["default"]}])}),"undefined"==typeof exports)var exports={};Object.defineProperty(exports,"__esModule",{value:!0});var importTemplate=function(t){return new Promise(function(e,i){var n=document.createElement("link");n.setAttribute("href",t),n.setAttribute("rel","import"),n.onload=function(t){e(this["import"])},n.onerror=function(t){i(i(t))},document.head.appendChild(n)})};exports.importTemplate=importTemplate,function(){function t(t,i,n,r){return new e(t,i,n,r)}function e(t,e,n,r){this.options=r||{},this.options.adapters=this.options.adapters||{},this.obj=t,this.keypath=e,this.callback=n,this.objectPath=[],this.parse(),i(this.target=this.realize())&&this.set(!0,this.key,this.target,this.callback)}function i(t){return"object"==typeof t&&null!==t}function n(t){throw new Error("[sightglass] "+t)}t.adapters={},e.tokenize=function(t,e,i){var n,r,s=[],o={i:i,path:""};for(n=0;n<t.length;n++)r=t.charAt(n),~e.indexOf(r)?(s.push(o),o={i:r,path:""}):o.path+=r;return s.push(o),s},e.prototype.parse=function(){var i,r,s=this.interfaces();s.length||n("Must define at least one adapter interface."),~s.indexOf(this.keypath[0])?(i=this.keypath[0],r=this.keypath.substr(1)):("undefined"==typeof(i=this.options.root||t.root)&&n("Must define a default root adapter."),r=this.keypath),this.tokens=e.tokenize(r,s,i),this.key=this.tokens.pop()},e.prototype.realize=function(){var t,e=this.obj,n=!1;return this.tokens.forEach(function(r,s){i(e)?("undefined"!=typeof this.objectPath[s]?e!==(t=this.objectPath[s])&&(this.set(!1,r,t,this.update.bind(this)),this.set(!0,r,e,this.update.bind(this)),this.objectPath[s]=e):(this.set(!0,r,e,this.update.bind(this)),this.objectPath[s]=e),e=this.get(r,e)):(n===!1&&(n=s),(t=this.objectPath[s])&&this.set(!1,r,t,this.update.bind(this)))},this),n!==!1&&this.objectPath.splice(n),e},e.prototype.update=function(){var t,e;(t=this.realize())!==this.target&&(i(this.target)&&this.set(!1,this.key,this.target,this.callback),i(t)&&this.set(!0,this.key,t,this.callback),e=this.value(),this.target=t,this.value()!==e&&this.callback())},e.prototype.value=function(){return i(this.target)?this.get(this.key,this.target):void 0},e.prototype.setValue=function(t){i(this.target)&&this.adapter(this.key).set(this.target,this.key.path,t)},e.prototype.get=function(t,e){return this.adapter(t).get(e,t.path)},e.prototype.set=function(t,e,i,n){var r=t?"observe":"unobserve";this.adapter(e)[r](i,e.path,n)},e.prototype.interfaces=function(){var e=Object.keys(this.options.adapters);return Object.keys(t.adapters).forEach(function(t){~e.indexOf(t)||e.push(t)}),e},e.prototype.adapter=function(e){return this.options.adapters[e.i]||t.adapters[e.i]},e.prototype.unobserve=function(){var t;this.tokens.forEach(function(e,i){(t=this.objectPath[i])&&this.set(!1,e,t,this.update.bind(this))},this),i(this.target)&&this.set(!1,this.key,this.target,this.callback)},"undefined"!=typeof module&&module.exports?module.exports=t:"function"==typeof define&&define.amd?define([],function(){return this.sightglass=t}):this.sightglass=t}.call(this),function(){var t,e,i,n,r=function(t,e){return function(){return t.apply(e,arguments)}},s=[].slice,o={}.hasOwnProperty,u=function(t,e){function i(){this.constructor=t}for(var n in e)o.call(e,n)&&(t[n]=e[n]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},a=[].indexOf||function(t){for(var e=0,i=this.length;i>e;e++)if(e in this&&this[e]===t)return e;return-1};t={options:["prefix","templateDelimiters","rootInterface","preloadData","handler","executeFunctions"],extensions:["binders","formatters","components","adapters"],"public":{binders:{},components:{},formatters:{},adapters:{},prefix:"rv",templateDelimiters:["{","}"],rootInterface:".",preloadData:!0,executeFunctions:!1,iterationAlias:function(t){return"%"+t+"%"},handler:function(t,e,i){return this.call(t,e,i.view.models)},configure:function(e){var i,n,r,s;null==e&&(e={});for(r in e)if(s=e[r],"binders"===r||"components"===r||"formatters"===r||"adapters"===r)for(n in s)i=s[n],t[r][n]=i;else t["public"][r]=s},bind:function(e,i,n){var r;return null==i&&(i={}),null==n&&(n={}),r=new t.View(e,i,n),r.bind(),r},init:function(e,i,n){var r,s,o;if(null==n&&(n={}),null==i&&(i=document.createElement("div")),e=t["public"].components[e],s=e.template.call(this,i),s instanceof HTMLElement){for(;i.firstChild;)i.removeChild(i.firstChild);i.appendChild(s)}else i.innerHTML=s;return r=e.initialize.call(this,i,n),o=new t.View(i,r),o.bind(),o}}},window.jQuery||window.$?(n="on"in jQuery.prototype?["on","off"]:["bind","unbind"],e=n[0],i=n[1],t.Util={bindEvent:function(t,i,n){return jQuery(t)[e](i,n)},unbindEvent:function(t,e,n){return jQuery(t)[i](e,n)},getInputValue:function(t){var e;return e=jQuery(t),"checkbox"===e.attr("type")?e.is(":checked"):e.val()}}):t.Util={bindEvent:function(){return"addEventListener"in window?function(t,e,i){return t.addEventListener(e,i,!1)}:function(t,e,i){return t.attachEvent("on"+e,i)}}(),unbindEvent:function(){return"removeEventListener"in window?function(t,e,i){return t.removeEventListener(e,i,!1)}:function(t,e,i){return t.detachEvent("on"+e,i)}}(),getInputValue:function(t){var e,i,n,r;if("checkbox"===t.type)return t.checked;if("select-multiple"===t.type){for(r=[],i=0,n=t.length;n>i;i++)e=t[i],e.selected&&r.push(e.value);return r}return t.value}},t.TypeParser=function(){function t(){}return t.types={primitive:0,keypath:1},t.parse=function(t){return/^'.*'$|^".*"$/.test(t)?{type:this.types.primitive,value:t.slice(1,-1)}:"true"===t?{type:this.types.primitive,value:!0}:"false"===t?{type:this.types.primitive,value:!1}:"null"===t?{type:this.types.primitive,value:null}:"undefined"===t?{type:this.types.primitive,value:void 0}:""===t?{type:this.types.primitive,value:void 0}:isNaN(Number(t))===!1?{type:this.types.primitive,value:Number(t)}:{type:this.types.keypath,value:t}},t}(),t.TextTemplateParser=function(){function t(){}return t.types={text:0,binding:1},t.parse=function(t,e){var i,n,r,s,o,u,a;for(u=[],s=t.length,i=0,n=0;s>n;){if(i=t.indexOf(e[0],n),0>i){u.push({type:this.types.text,value:t.slice(n)});break}if(i>0&&i>n&&u.push({type:this.types.text,value:t.slice(n,i)}),n=i+e[0].length,i=t.indexOf(e[1],n),0>i){o=t.slice(n-e[1].length),r=u[u.length-1],(null!=r?r.type:void 0)===this.types.text?r.value+=o:u.push({type:this.types.text,value:o});break}a=t.slice(n,i).trim(),u.push({type:this.types.binding,value:a}),n=i+e[1].length}return u},t}(),t.View=function(){function e(e,i,n){var s,o,u,a,l,h,d,c,p,f,v,b,y;for(this.els=e,this.models=i,null==n&&(n={}),this.update=r(this.update,this),this.publish=r(this.publish,this),this.sync=r(this.sync,this),this.unbind=r(this.unbind,this),this.bind=r(this.bind,this),this.select=r(this.select,this),this.traverse=r(this.traverse,this),this.build=r(this.build,this),this.buildBinding=r(this.buildBinding,this),this.bindingRegExp=r(this.bindingRegExp,this),this.options=r(this.options,this),this.els.jquery||this.els instanceof Array||(this.els=[this.els]),p=t.extensions,l=0,d=p.length;d>l;l++){if(o=p[l],this[o]={},n[o]){f=n[o];for(s in f)u=f[s],this[o][s]=u}v=t["public"][o];for(s in v)u=v[s],null==(a=this[o])[s]&&(a[s]=u)}for(b=t.options,h=0,c=b.length;c>h;h++)o=b[h],this[o]=null!=(y=n[o])?y:t["public"][o];this.build()}return e.prototype.options=function(){var e,i,n,r,s;for(i={},s=t.extensions.concat(t.options),n=0,r=s.length;r>n;n++)e=s[n],i[e]=this[e];return i},e.prototype.bindingRegExp=function(){return new RegExp("^"+this.prefix+"-")},e.prototype.buildBinding=function(e,i,n,r){var s,o,u,a,l,h,d;return l={},d=function(){var t,e,i,n;for(i=r.match(/((?:'[^']*')*(?:(?:[^\|']*(?:'[^']*')+[^\|']*)+|[^\|]+))|^$/g),n=[],t=0,e=i.length;e>t;t++)h=i[t],n.push(h.trim());return n}(),s=function(){var t,e,i,n;for(i=d.shift().split("<"),n=[],t=0,e=i.length;e>t;t++)o=i[t],n.push(o.trim());return n}(),a=s.shift(),l.formatters=d,(u=s.shift())&&(l.dependencies=u.split(/\s+/)),this.bindings.push(new t[e](this,i,n,a,l))},e.prototype.build=function(){var e,i,n,r,s;for(this.bindings=[],i=function(e){return function(n){var r,s,o,u,a,l,h,d,c,p,f,v,b;if(3===n.nodeType){if(a=t.TextTemplateParser,(o=e.templateDelimiters)&&(d=a.parse(n.data,o)).length&&(1!==d.length||d[0].type!==a.types.text)){for(c=0,f=d.length;f>c;c++)h=d[c],l=document.createTextNode(h.value),n.parentNode.insertBefore(l,n),1===h.type&&e.buildBinding("TextBinding",l,null,h.value);n.parentNode.removeChild(n)}}else 1===n.nodeType&&(r=e.traverse(n));if(!r)for(b=function(){var t,e,i,r;for(i=n.childNodes,r=[],t=0,e=i.length;e>t;t++)u=i[t],r.push(u);return r}(),p=0,v=b.length;v>p;p++)s=b[p],i(s)}}(this),s=this.els,n=0,r=s.length;r>n;n++)e=s[n],i(e);this.bindings.sort(function(t,e){var i,n;return((null!=(i=e.binder)?i.priority:void 0)||0)-((null!=(n=t.binder)?n.priority:void 0)||0)})},e.prototype.traverse=function(e){var i,n,r,s,o,u,a,l,h,d,c,p,f,v,b,y;for(s=this.bindingRegExp(),o="SCRIPT"===e.nodeName||"STYLE"===e.nodeName,v=e.attributes,d=0,p=v.length;p>d;d++)if(i=v[d],s.test(i.name)){if(l=i.name.replace(s,""),!(r=this.binders[l])){b=this.binders;for(u in b)h=b[u],"*"!==u&&-1!==u.indexOf("*")&&(a=new RegExp("^"+u.replace(/\*/g,".+")+"$"),a.test(l)&&(r=h))}r||(r=this.binders["*"]),r.block&&(o=!0,n=[i])}for(y=n||e.attributes,c=0,f=y.length;f>c;c++)i=y[c],s.test(i.name)&&(l=i.name.replace(s,""),this.buildBinding("Binding",e,l,i.value));return o||(l=e.nodeName.toLowerCase(),this.components[l]&&!e._bound&&(this.bindings.push(new t.ComponentBinding(this,e,l)),o=!0)),o},e.prototype.select=function(t){var e,i,n,r,s;for(r=this.bindings,s=[],i=0,n=r.length;n>i;i++)e=r[i],t(e)&&s.push(e);return s},e.prototype.bind=function(){var t,e,i,n;for(n=this.bindings,e=0,i=n.length;i>e;e++)t=n[e],t.bind()},e.prototype.unbind=function(){var t,e,i,n;for(n=this.bindings,e=0,i=n.length;i>e;e++)t=n[e],t.unbind()},e.prototype.sync=function(){var t,e,i,n;for(n=this.bindings,e=0,i=n.length;i>e;e++)t=n[e],"function"==typeof t.sync&&t.sync()},e.prototype.publish=function(){var t,e,i,n;for(n=this.select(function(t){var e;return null!=(e=t.binder)?e.publishes:void 0}),e=0,i=n.length;i>e;e++)t=n[e],t.publish()},e.prototype.update=function(t){var e,i,n,r,s,o;null==t&&(t={});for(i in t)n=t[i],this.models[i]=n;for(o=this.bindings,r=0,s=o.length;s>r;r++)e=o[r],"function"==typeof e.update&&e.update(t)},e}(),t.Binding=function(){function e(t,e,i,n,s){this.view=t,this.el=e,this.type=i,this.keypath=n,this.options=null!=s?s:{},this.getValue=r(this.getValue,this),this.update=r(this.update,this),this.unbind=r(this.unbind,this),this.bind=r(this.bind,this),this.publish=r(this.publish,this),this.sync=r(this.sync,this),this.set=r(this.set,this),this.eventHandler=r(this.eventHandler,this),this.formattedValue=r(this.formattedValue,this),this.parseTarget=r(this.parseTarget,this),this.observe=r(this.observe,this),this.setBinder=r(this.setBinder,this),this.formatters=this.options.formatters||[],this.dependencies=[],this.formatterObservers={},this.model=void 0,this.setBinder()}return e.prototype.setBinder=function(){var t,e,i,n;if(!(this.binder=this.view.binders[this.type])){n=this.view.binders;for(t in n)i=n[t],"*"!==t&&-1!==t.indexOf("*")&&(e=new RegExp("^"+t.replace(/\*/g,".+")+"$"),e.test(this.type)&&(this.binder=i,this.args=new RegExp("^"+t.replace(/\*/g,"(.+)")+"$").exec(this.type),this.args.shift()))}return this.binder||(this.binder=this.view.binders["*"]),this.binder instanceof Function?this.binder={routine:this.binder}:void 0},e.prototype.observe=function(e,i,n){return t.sightglass(e,i,n,{root:this.view.rootInterface,adapters:this.view.adapters})},e.prototype.parseTarget=function(){var e;return e=t.TypeParser.parse(this.keypath),0===e.type?this.value=e.value:(this.observer=this.observe(this.view.models,this.keypath,this.sync),this.model=this.observer.target)},e.prototype.formattedValue=function(e){var i,n,r,o,u,a,l,h,d,c,p,f,v,b,y;for(b=this.formatters,o=c=0,f=b.length;f>c;o=++c){for(u=b[o],r=u.match(/[^\s']+|'([^']|'[^\s])*'|"([^"]|"[^\s])*"/g),a=r.shift(),u=this.view.formatters[a],r=function(){var e,i,s;for(s=[],e=0,i=r.length;i>e;e++)n=r[e],s.push(t.TypeParser.parse(n));return s}(),h=[],i=p=0,v=r.length;v>p;i=++p)n=r[i],h.push(0===n.type?n.value:((d=this.formatterObservers)[o]||(d[o]={}),(l=this.formatterObservers[o][i])?void 0:(l=this.observe(this.view.models,n.value,this.sync),this.formatterObservers[o][i]=l),l.value()));(null!=u?u.read:void 0)instanceof Function?e=(y=u.read).call.apply(y,[this.model,e].concat(s.call(h))):u instanceof Function&&(e=u.call.apply(u,[this.model,e].concat(s.call(h))))}return e},e.prototype.eventHandler=function(t){var e,i;return i=(e=this).view.handler,function(n){return i.call(t,this,n,e)}},e.prototype.set=function(e){var i;return e=e instanceof Function&&!this.binder["function"]&&t["public"].executeFunctions?this.formattedValue(e.call(this.model)):this.formattedValue(e),null!=(i=this.binder.routine)?i.call(this,this.el,e):void 0},e.prototype.sync=function(){var t,e;return this.set(function(){var i,n,r,s,o,u,a;if(this.observer){if(this.model!==this.observer.target){for(o=this.dependencies,i=0,r=o.length;r>i;i++)e=o[i],e.unobserve();if(this.dependencies=[],null!=(this.model=this.observer.target)&&(null!=(u=this.options.dependencies)?u.length:void 0))for(a=this.options.dependencies,n=0,s=a.length;s>n;n++)t=a[n],e=this.observe(this.model,t,this.sync),this.dependencies.push(e)}return this.observer.value()}return this.value}.call(this))},e.prototype.publish=function(){var t,e,i,n,r,o,u,a,l;if(this.observer){for(n=this.getValue(this.el),u=this.formatters.slice(0).reverse(),r=0,o=u.length;o>r;r++)e=u[r],t=e.split(/\s+/),i=t.shift(),(null!=(a=this.view.formatters[i])?a.publish:void 0)&&(n=(l=this.view.formatters[i]).publish.apply(l,[n].concat(s.call(t))));return this.observer.setValue(n)}},e.prototype.bind=function(){var t,e,i,n,r,s,o;if(this.parseTarget(),null!=(r=this.binder.bind)&&r.call(this,this.el),null!=this.model&&(null!=(s=this.options.dependencies)?s.length:void 0))for(o=this.options.dependencies,i=0,n=o.length;n>i;i++)t=o[i],e=this.observe(this.model,t,this.sync),this.dependencies.push(e);return this.view.preloadData?this.sync():void 0},e.prototype.unbind=function(){var t,e,i,n,r,s,o,u,a,l;for(null!=(o=this.binder.unbind)&&o.call(this,this.el),null!=(u=this.observer)&&u.unobserve(),a=this.dependencies,r=0,s=a.length;s>r;r++)n=a[r],n.unobserve();this.dependencies=[],l=this.formatterObservers;for(i in l){e=l[i];for(t in e)n=e[t],n.unobserve()}return this.formatterObservers={}},e.prototype.update=function(t){var e,i;return null==t&&(t={}),this.model=null!=(e=this.observer)?e.target:void 0,null!=(i=this.binder.update)?i.call(this,t):void 0},e.prototype.getValue=function(e){return this.binder&&null!=this.binder.getValue?this.binder.getValue.call(this,e):t.Util.getInputValue(e)},e}(),t.ComponentBinding=function(e){function i(e,i,n){var s,o,u,l,h,d,c,p;for(this.view=e,this.el=i,this.type=n,this.unbind=r(this.unbind,this),this.bind=r(this.bind,this),this.locals=r(this.locals,this),this.component=this.view.components[this.type],this["static"]={},this.observers={},this.upstreamObservers={},o=e.bindingRegExp(),c=this.el.attributes||[],h=0,d=c.length;d>h;h++)s=c[h],o.test(s.name)||(u=this.camelCase(s.name),l=t.TypeParser.parse(s.value),a.call(null!=(p=this.component["static"])?p:[],u)>=0?this["static"][u]=s.value:0===l.type?this["static"][u]=l.value:this.observers[u]=s.value)}return u(i,e),i.prototype.sync=function(){},i.prototype.update=function(){},i.prototype.publish=function(){},i.prototype.locals=function(){var t,e,i,n,r,s;i={},r=this["static"];for(t in r)n=r[t],i[t]=n;s=this.observers;for(t in s)e=s[t],i[t]=e.value();return i},i.prototype.camelCase=function(t){return t.replace(/-([a-z])/g,function(t){return t[1].toUpperCase()})},i.prototype.bind=function(){var e,i,n,r,s,o,u,a,l,h,d,c,p,f,v,b,y,g,m,w;if(!this.bound){f=this.observers;for(i in f)n=f[i],this.observers[i]=this.observe(this.view.models,n,function(t){return function(e){return function(){return t.componentView.models[e]=t.observers[e].value()}}}(this).call(this,i));this.bound=!0}if(null!=this.componentView)this.componentView.bind();else{for(this.el.innerHTML=this.component.template.call(this),u=this.component.initialize.call(this,this.el,this.locals()),this.el._bound=!0,o={},v=t.extensions,h=0,c=v.length;c>h;h++){if(s=v[h],o[s]={},this.component[s]){b=this.component[s];for(e in b)a=b[e],o[s][e]=a}y=this.view[s];for(e in y)a=y[e],null==(l=o[s])[e]&&(l[e]=a)}for(g=t.options,d=0,p=g.length;p>d;d++)s=g[d],o[s]=null!=(m=this.component[s])?m:this.view[s];this.componentView=new t.View(Array.prototype.slice.call(this.el.childNodes),u,o),this.componentView.bind(),w=this.observers;for(i in w)r=w[i],this.upstreamObservers[i]=this.observe(this.componentView.models,i,function(t){return function(e,i){return function(){return i.setValue(t.componentView.models[e])}}}(this).call(this,i,r))}},i.prototype.unbind=function(){var t,e,i,n,r;i=this.upstreamObservers;for(t in i)e=i[t],e.unobserve();n=this.observers;for(t in n)e=n[t],e.unobserve();return null!=(r=this.componentView)?r.unbind.call(this):void 0},i}(t.Binding),t.TextBinding=function(t){function e(t,e,i,n,s){this.view=t,this.el=e,this.type=i,this.keypath=n,this.options=null!=s?s:{},this.sync=r(this.sync,this),this.formatters=this.options.formatters||[],this.dependencies=[],this.formatterObservers={}}return u(e,t),e.prototype.binder={routine:function(t,e){return t.data=null!=e?e:""}},e.prototype.sync=function(){return e.__super__.sync.apply(this,arguments)},e}(t.Binding),t["public"].binders.text=function(t,e){return null!=t.textContent?t.textContent=null!=e?e:"":t.innerText=null!=e?e:""},t["public"].binders.html=function(t,e){return t.innerHTML=null!=e?e:""},t["public"].binders.show=function(t,e){return t.style.display=e?"":"none"},t["public"].binders.hide=function(t,e){return t.style.display=e?"none":""},t["public"].binders.enabled=function(t,e){return t.disabled=!e},t["public"].binders.disabled=function(t,e){return t.disabled=!!e},t["public"].binders.checked={publishes:!0,priority:2e3,bind:function(e){return t.Util.bindEvent(e,"change",this.publish)},unbind:function(e){return t.Util.unbindEvent(e,"change",this.publish)},routine:function(t,e){var i;return t.checked="radio"===t.type?(null!=(i=t.value)?i.toString():void 0)===(null!=e?e.toString():void 0):!!e}},t["public"].binders.unchecked={publishes:!0,priority:2e3,bind:function(e){return t.Util.bindEvent(e,"change",this.publish)},unbind:function(e){return t.Util.unbindEvent(e,"change",this.publish)},routine:function(t,e){var i;return t.checked="radio"===t.type?(null!=(i=t.value)?i.toString():void 0)!==(null!=e?e.toString():void 0):!e}},t["public"].binders.value={publishes:!0,priority:3e3,bind:function(e){return"INPUT"!==e.tagName||"radio"!==e.type?(this.event="SELECT"===e.tagName?"change":"input",t.Util.bindEvent(e,this.event,this.publish)):void 0},unbind:function(e){return"INPUT"!==e.tagName||"radio"!==e.type?t.Util.unbindEvent(e,this.event,this.publish):void 0},routine:function(t,e){var i,n,r,s,o,u,l;if("INPUT"===t.tagName&&"radio"===t.type)return t.setAttribute("value",e);if(null!=window.jQuery){if(t=jQuery(t),(null!=e?e.toString():void 0)!==(null!=(s=t.val())?s.toString():void 0))return t.val(null!=e?e:"")}else if("select-multiple"===t.type){if(null!=e){for(l=[],n=0,r=t.length;r>n;n++)i=t[n],l.push(i.selected=(o=i.value,a.call(e,o)>=0));return l}}else if((null!=e?e.toString():void 0)!==(null!=(u=t.value)?u.toString():void 0))return t.value=null!=e?e:""}},t["public"].binders["if"]={block:!0,priority:4e3,bind:function(t){var e,i;return null==this.marker?(e=[this.view.prefix,this.type].join("-").replace("--","-"),i=t.getAttribute(e),this.marker=document.createComment(" rivets: "+this.type+" "+i+" "),this.bound=!1,t.removeAttribute(e),t.parentNode.insertBefore(this.marker,t),t.parentNode.removeChild(t)):void 0},unbind:function(){return this.nested?(this.nested.unbind(),this.bound=!1):void 0},routine:function(e,i){var n,r,s,o;if(!!i==!this.bound){if(i){s={},o=this.view.models;for(n in o)r=o[n],s[n]=r;return(this.nested||(this.nested=new t.View(e,s,this.view.options()))).bind(),this.marker.parentNode.insertBefore(e,this.marker.nextSibling),this.bound=!0}return e.parentNode.removeChild(e),this.nested.unbind(),this.bound=!1}},update:function(t){var e;return null!=(e=this.nested)?e.update(t):void 0}},t["public"].binders.unless={block:!0,priority:4e3,bind:function(e){return t["public"].binders["if"].bind.call(this,e)},unbind:function(){return t["public"].binders["if"].unbind.call(this)},routine:function(e,i){return t["public"].binders["if"].routine.call(this,e,!i)},update:function(e){return t["public"].binders["if"].update.call(this,e)}},t["public"].binders["on-*"]={"function":!0,priority:1e3,unbind:function(e){return this.handler?t.Util.unbindEvent(e,this.args[0],this.handler):void 0},routine:function(e,i){return this.handler&&t.Util.unbindEvent(e,this.args[0],this.handler),t.Util.bindEvent(e,this.args[0],this.handler=this.eventHandler(i))}},t["public"].binders["each-*"]={block:!0,priority:4e3,bind:function(t){var e,i,n,r,s;if(null==this.marker)e=[this.view.prefix,this.type].join("-").replace("--","-"),this.marker=document.createComment(" rivets: "+this.type+" "),this.iterated=[],t.removeAttribute(e),t.parentNode.insertBefore(this.marker,t),t.parentNode.removeChild(t);else for(s=this.iterated,n=0,r=s.length;r>n;n++)i=s[n],i.bind()},unbind:function(){var t,e,i,n;if(null!=this.iterated)for(n=this.iterated,e=0,i=n.length;i>e;e++)t=n[e],t.unbind()},routine:function(e,i){var n,r,s,o,u,a,l,h,d,c,p,f,v,b,y,g,m,w,_,k;if(l=this.args[0],i=i||[],this.iterated.length>i.length)for(w=Array(this.iterated.length-i.length),f=0,y=w.length;y>f;f++)s=w[f],p=this.iterated.pop(),p.unbind(),this.marker.parentNode.removeChild(p.els[0]);for(o=v=0,g=i.length;g>v;o=++v)if(a=i[o],
r={index:o},r[t["public"].iterationAlias(l)]=o,r[l]=a,null==this.iterated[o]){_=this.view.models;for(u in _)a=_[u],null==r[u]&&(r[u]=a);d=this.iterated.length?this.iterated[this.iterated.length-1].els[0]:this.marker,h=this.view.options(),h.preloadData=!0,c=e.cloneNode(!0),p=new t.View(c,r,h),p.bind(),this.iterated.push(p),this.marker.parentNode.insertBefore(c,d.nextSibling)}else this.iterated[o].models[l]!==a&&this.iterated[o].update(r);if("OPTION"===e.nodeName)for(k=this.view.bindings,b=0,m=k.length;m>b;b++)n=k[b],n.el===this.marker.parentNode&&"value"===n.type&&n.sync()},update:function(t){var e,i,n,r,s,o,u;e={};for(i in t)n=t[i],i!==this.args[0]&&(e[i]=n);for(u=this.iterated,s=0,o=u.length;o>s;s++)r=u[s],r.update(e)}},t["public"].binders["class-*"]=function(t,e){var i;return i=" "+t.className+" ",!e==(-1!==i.indexOf(" "+this.args[0]+" "))?t.className=e?""+t.className+" "+this.args[0]:i.replace(" "+this.args[0]+" "," ").trim():void 0},t["public"].binders["*"]=function(t,e){return null!=e?t.setAttribute(this.type,e):t.removeAttribute(this.type)},t["public"].formatters.call=function(){var t,e;return e=arguments[0],t=2<=arguments.length?s.call(arguments,1):[],e.call.apply(e,[this].concat(s.call(t)))},t["public"].adapters["."]={id:"_rv",counter:0,weakmap:{},weakReference:function(t){var e,i,n;return t.hasOwnProperty(this.id)||(e=this.counter++,Object.defineProperty(t,this.id,{value:e})),(i=this.weakmap)[n=t[this.id]]||(i[n]={callbacks:{}})},cleanupWeakReference:function(t,e){return Object.keys(t.callbacks).length||t.pointers&&Object.keys(t.pointers).length?void 0:delete this.weakmap[e]},stubFunction:function(t,e){var i,n,r;return n=t[e],i=this.weakReference(t),r=this.weakmap,t[e]=function(){var e,s,o,u,a,l,h,d,c,p;u=n.apply(t,arguments),h=i.pointers;for(o in h)for(s=h[o],p=null!=(d=null!=(c=r[o])?c.callbacks[s]:void 0)?d:[],a=0,l=p.length;l>a;a++)(e=p[a])();return u}},observeMutations:function(t,e,i){var n,r,s,o,u,l;if(Array.isArray(t)){if(s=this.weakReference(t),null==s.pointers)for(s.pointers={},r=["push","pop","shift","unshift","sort","reverse","splice"],u=0,l=r.length;l>u;u++)n=r[u],this.stubFunction(t,n);if(null==(o=s.pointers)[e]&&(o[e]=[]),a.call(s.pointers[e],i)<0)return s.pointers[e].push(i)}},unobserveMutations:function(t,e,i){var n,r,s;return Array.isArray(t)&&null!=t[this.id]&&(r=this.weakmap[t[this.id]])&&(s=r.pointers[e])?((n=s.indexOf(i))>=0&&s.splice(n,1),s.length||delete r.pointers[e],this.cleanupWeakReference(r,t[this.id])):void 0},observe:function(t,e,i){var n,r,s;return n=this.weakReference(t).callbacks,null==n[e]&&(n[e]=[],r=Object.getOwnPropertyDescriptor(t,e),(null!=r?r.get:void 0)||(null!=r?r.set:void 0)||(s=t[e],Object.defineProperty(t,e,{enumerable:!0,get:function(){return s},set:function(i){return function(r){var o,u,a,l,h;if(r!==s&&(i.unobserveMutations(s,t[i.id],e),s=r,u=i.weakmap[t[i.id]])){if(n=u.callbacks,n[e])for(h=n[e],a=0,l=h.length;l>a;a++)(o=h[a])();return i.observeMutations(r,t[i.id],e)}}}(this)}))),a.call(n[e],i)<0&&n[e].push(i),this.observeMutations(t[e],t[this.id],e)},unobserve:function(t,e,i){var n,r,s;return(s=this.weakmap[t[this.id]])&&(n=s.callbacks[e])?((r=n.indexOf(i))>=0&&(n.splice(r,1),n.length||delete s.callbacks[e]),this.unobserveMutations(t[e],t[this.id],e),this.cleanupWeakReference(s,t[this.id])):void 0},get:function(t,e){return t[e]},set:function(t,e,i){return t[e]=i}},t.factory=function(e){return t.sightglass=e,t["public"]._=t,t["public"]},"object"==typeof("undefined"!=typeof module&&null!==module?module.exports:void 0)?module.exports=t.factory(require("sightglass")):"function"==typeof define&&define.amd?define(["sightglass"],function(e){return this.rivets=t.factory(e)}):this.rivets=t.factory(sightglass)}.call(this);