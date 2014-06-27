'use strict';

describe('app', function() {
  it('lets the user move from index to numbers', function() {
    visit('/');
    click('button[name="numbers"] a');
    andThen(function() {
      expect(currentRouteName()).to.eql('numbers');
      expect(currentPath()).to.eql('numbers');
      expect(currentURL()).to.eql('/numbers');
    });
  });
  it('lets the user stay on index after clicking home button', function() {
    visit('/');
    click('button[name="home"] a');
    andThen(function() {
      expect(currentRouteName()).to.eql('index');
      expect(currentPath()).to.eql('index');
      expect(currentURL()).to.eql('/');
    });
  });
});
