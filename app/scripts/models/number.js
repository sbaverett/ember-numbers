module.exports = function(EmberNumbers) {
  EmberNumbers.Number = DS.Model.extend({
    anotherLanguage: DS.attr('string'),
    url: DS.attr('string'),
    numberName: DS.attr('string')
  });

  EmberNumbers.Number.FIXTURES = [{
    id: 1,
    anotherLanguage: 'uno',
    url: 'http://en.wikipedia.org/wiki/1_(number)',
    numberName: 'one'
  }];
};

