(function() {
  define(["spa/templates"], function(templates) {
    var Music;
    Music = Backbone.Marionette.ItemView.extend({
      template: function() {
        return window.JST["music/main.jade"]({
          'testvar': 53210
        });
      }
    });
    return Music;
  });

}).call(this);
