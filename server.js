var config = require("./config.json"),
	express = require("express"),
	favicon = require("serve-favicon"),
	logger = require("morgan"),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	methodOverride = require('method-override'),
	routes = require("./routes.js"),
	dbs = require("./libs/connectDbs.js"),
	app = express(),
	router = express.Router(),
	errorhandler = require("errorhandler");

config.server.port = process.env.PORT || config.server.port;
config.server.public_dir = process.env.PUBLIC_DIR || config.server.public_dir;

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('combined'));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended : true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());
//app.use(express.methodOverride());

//app.use(app.router);

app.use(express["static"](config.server.public_dir));


if ("development" === app.get("env")) {
	app.use(errorhandler({
		dumpException : true,
		showStack     : true
	}));
}

dbs.connect(config.dbs, function (errs, clients) {
	var db;
	if (errs) {
		for (db in errs) {
			console.log("Error: db[" + db + "] " + errs[db]);
		}
	} else {
		routes.load(app, clients);
		app.listen(config.server.port);
		console.log("App listening on port: " + config.server.port);
	}
});