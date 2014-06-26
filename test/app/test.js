'use strict';

describe('app', function() {
  it('lets the user move between templates', function() {
    visit('/');
    click('button[name="numbers"] a');
    andThen(function() {
      expect(currentRouteName()).to.eql('numbers');
      expect(currentPath()).to.eql('numbers');
      expect(currentURL()).to.eql('/numbers');
    });
  });
  it('will have more tests');
});
