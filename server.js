#!/usr/bin/env node
var prerender = require('./lib');

var server = prerender({
  followRedirects: true,
});

server.use(prerender.setLocaleCookie());
//server.use(prerender.sendPrerenderHeader());
// server.use(prerender.blockResources());
//server.use(prerender.removeScriptTags());
//server.use(prerender.httpHeaders());

server.start();
