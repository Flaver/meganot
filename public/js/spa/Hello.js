define([
	"spa/templates"
	],
	function(templates){
		var Hello = Backbone.Marionette.ItemView.extend({
			template: function(){
				return window.JST["hello.jade"];
			}
		});
		return Hello;
	});