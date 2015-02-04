this["JST"] = this["JST"] || {};

this["JST"]["hello.jade"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<h1>Hello App!</h1>");;return buf.join("");
};

this["JST"]["layout.jade"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"app\"><div id=\"menu\"></div><div id=\"content\"></div></div>");;return buf.join("");
};

this["JST"]["login.jade"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"login form\"><div class=\"message\"></div><form class=\"form-horizontal\"><div class=\"control-group\"><label for=\"inputUsername\" class=\"control-label\">Username</label><div class=\"controls\"><input type=\"text\" id=\"inputUsername\" placeholder=\"Username\" class=\"input username\"/></div></div><div class=\"control-group\"><label for=\"inputPassword\" class=\"control-label\">Password</label><div class=\"controls\"><input type=\"password\" id=\"inputPassword\" placeholder=\"Password\" class=\"input password\"/></div></div><div class=\"control-group\"><div class=\"controls\"><button type=\"submit\" class=\"btn login\">Login</button></div></div></form></div>");;return buf.join("");
};

this["JST"]["menu.jade"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"navbar\"><div class=\"navbar-inner\"><a href=\"#\" class=\"brand\">User Manager</a><ul class=\"nav\"><li class=\"active\"><a href=\"#/home\">Home</a></li><li><a href=\"#/music\">Music</a></li><li><a href=\"#/login\">Login</a></li></ul></div></div>");;return buf.join("");
};

this["JST"]["music/main.jade"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (testvar) {
buf.push("<h1>" + (jade.escape(null == (jade_interp = testvar) ? "" : jade_interp)) + "Music in jade2</h1>");}.call(this,"testvar" in locals_for_with?locals_for_with.testvar:typeof testvar!=="undefined"?testvar:undefined));;return buf.join("");
};