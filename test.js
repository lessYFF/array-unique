'use strict';

var should = require('should');
var unique = require('./');

describe('unique', function() {
  it('should return the unique array:', function() {
    unique([1,2,2,3,4]).should.eql([1,2,3,4]);
    unique([1,2,3,[4,3]]).should.eql([1,2,3,4]);
  });

  it('should return the unique array by key of x:', function() {
    unique([{ x:1, y:2 }, { x:1, y:1 }, { x:2 }], 'x').should.eql([{ x:1, y:1 }, { x:1, y:1 }, { x:2 }]);
  });
});