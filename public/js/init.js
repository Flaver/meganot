define(function (require) {
	requirejs.config({
		paths    : {
			jquery                : [
				'http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min',
				//If the CDN location fails, load from this location
				'vendor/jquery-1.11.2.min'
			],
			backbone              : 'vendor/backbone.min',
			marionette            : 'vendor/backbone.marionette.min',
			underscore            : 'vendor/underscore-min',
			sha1                  : 'vendor/sha1',
			plugins               : 'plugins',
			runtime               : 'vendor/runtime',
			'backbone.marionette' : 'vendor/backbone.marionette'
		},
		shim     : {
			backbone: {
				deps: ['underscore', 'jquery'],
				exports: 'Backbone'
			},
			marionette : {
				deps : ['backbone'],
				exports : 'Backbone.Marionette'
			},
			'sha1' : {
				exports : 'jsSHA'
			}
		},
		deps     : ['jquery', 'underscore', 'backbone', 'sha1', 'runtime', 'marionette'],
		callback : function () {
			require(['spa/main']);
		}
	});
});