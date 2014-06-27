'use strict';

describe('app', function() {
  describe('when visiting the home page', function() {
    beforeEach(function() {
      visit('/');
    });

    it('lets the user move from index to numbers', function() {
      click('button[name="numbers"] a');
      andThen(function() {
        expect(currentRouteName()).to.eql('numbers');
        expect(currentPath()).to.eql('numbers');
        expect(currentURL()).to.eql('/numbers');
      });
    });
    it('lets the user stay on index after clicking home button', function() {
      click('button[name="home"] a');
      andThen(function() {
        expect(currentRouteName()).to.eql('index');
        expect(currentPath()).to.eql('index');
        expect(currentURL()).to.eql('/');
      });
    });
  });
  describe('when visiting the numbers page', function() {
    beforeEach(function() {
      visit('/numbers');
    });

    it('lets the user add a new number', function() {
      click('button[name="add"] a');
      fillIn('input[name="numberName"]', 'three');
      fillIn('input[name="anotherLanguage"]', 'tres');
      fillIn('input[name="url"]', 'http://en.wikipedia.org/wiki/3_(number)');
      click('button[name="numbers"] a');
      andThen(function() {
        expect(currentURL()).to.eql('/numbers');
        expect(find('button[name="three"] a').length).to.eql(1);
      });
    });
  });
    describe('when visiting the additions page', function() {
    beforeEach(function() {
      visit('/additions');
    });

    it.skip('lets the user save a new number', function() {
      click('button[name="add"] a');
      fillIn('input[name="numberName"]', 'three');
      fillIn('input[name="anotherLanguage"]', 'tres');
      fillIn('input[name="url"]', 'http://en.wikipedia.org/wiki/3_(number)');
      click('button[name="save"] a');
      andThen(function() {
        expect(find('record[numberName="three"] a').to.exist);
      });
    });
  });
    describe('when visiting a numberPage', function() {
    beforeEach(function() {
      visit('/numbers');
    });

    it('lets the user delete a number', function() {
      var buttonCount = (find('button a').length);
      visit('/number/:id');
      click('button[name="delete"] a');
      andThen(function() {
        expect(currentRouteName()).to.eql('numbers');
        expect(currentPath()).to.eql('numbers');
        expect(currentURL()).to.eql('/numbers');
        expect(find('button a').length).to.eql(buttonCount - 1);
      });
    });
  });
});

