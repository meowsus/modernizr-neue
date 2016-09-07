"use strict";importScripts("/lib/serviceworker-cache-polyfill.js/index.js");var CACHE_VERSION="1473231797407",CURRENT_CACHES={prefetch:"prefetch-cache-v"+CACHE_VERSION};self.addEventListener("install",function(e){var n=["/download","/download/index.html","/css/main.css","/css/builder.css","/js/prod.js","/lib/r.js/dist/r.js","/js/lodash.custom.js","/lib/modernizr/lib/build.js","/img/logo.svg","/img/menu.svg"];e.waitUntil(caches.open(CURRENT_CACHES.prefetch).then(function(e){return e.addAll(n.map(function(e){return new Request(e,{mode:"no-cors"})}))})["catch"](function(e){console.error("Pre-fetching failed:"),console.log(e)}))}),self.addEventListener("activate",function(e){var n=Object.keys(CURRENT_CACHES).map(function(e){return CURRENT_CACHES[e]});e.waitUntil(caches.keys().then(function(e){return Promise.all(e.map(function(e){if(n.indexOf(e)==-1)return caches["delete"](e)}))}))}),self.addEventListener("fetch",function(e){e.respondWith(caches.match(e.request).then(function(n){return n?n:(console.log(e.request.url),fetch(e.request).then(function(e){return console.log("Response from network is:",e),e})["catch"](function(e){throw console.error("Fetching failed:",e),e}))}))});
//# sourceMappingURL=serviceworker.js.map