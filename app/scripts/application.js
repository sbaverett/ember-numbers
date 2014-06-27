'use strict';

var EmberNumbers = Ember.Application.create();

EmberNumbers.ApplicationAdapter = DS.FixtureAdapter;

require('./router')(EmberNumbers);
require('./models/number')(EmberNumbers);
