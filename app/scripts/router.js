'use strict';

module.exports = function(EmberNumbers) {

  EmberNumbers.Router.map(function() {
    this.route('numbers');
    this.route('additions');
    this.route('number');
  });

};




// App.NumbersRoute = Ember.Route.extend({
//   model: function() {
//     return this.store.find('number');
//   }
// });
