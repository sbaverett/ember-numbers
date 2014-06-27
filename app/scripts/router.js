'use strict';

module.exports = function(EmberNumbers) {

  EmberNumbers.Router.map(function() {
    this.route('numbers');
    this.route('additions');
    this.route('number', { path: '/number/:id'});
  });

  EmberNumbers.AdditionsRoute = Ember.Route.extend({
    model: function() {
      return this.store.createRecord('number').save();
    }
  });

  EmberNumbers.NumbersRoute = Ember.Route.extend({
    model: function() {
      return this.store.find('number');
    }
  });

};




