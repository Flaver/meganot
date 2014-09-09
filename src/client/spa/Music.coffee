define ["spa/templates"], (templates) ->
		Music = Backbone.Marionette.ItemView.extend
			template: () ->
				return window.JST["music/main.jade"]  'testvar': 53210
		return Music