// var assert = require('assert'); // node 默认断言库
// var chai = require('chai');
// var expect = chai.expect;


// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       // assert.equal([1, 2, 3].indexOf(3), -1);
//       expect(2).to.equal(2); 
//     });
//     it('double done', function(done) {
//       // Calling `done()` twice is an error
//       setImmediate(done);
//       // setImmediate(done);
//     });
//   });
// });

describe('A spec suite', function() {
  it('contains a passing spec', function() {
      console.log("Hello Karma");
  });
});