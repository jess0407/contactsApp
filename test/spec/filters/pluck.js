'use strict';

describe('Filter: pluck', function () {

  // load the filter's module
  beforeEach(module('contactsAppApp'));

  // initialize a new instance of the filter before each test
  var pluck;
  beforeEach(inject(function ($filter) {
    pluck = $filter('pluck');
  }));

  it('should return the input prefixed with "pluck filter:"', function () {
    var text = 'angularjs';
    expect(pluck(text)).toBe('pluck filter: ' + text);
  });

});
