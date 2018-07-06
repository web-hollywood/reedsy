var assert = require('assert');
var Operation = require('../index').Operation;

describe('Operation', function() {
  describe('apply', function() {
    it('should return aFOObcdefg when the operation is [{ move: 1 }, { insert: "FOO" }] on abcdefg', function() {
      const op1 = new Operation([{ move: 1 }, { insert: "FOO" }]);
	  const result = op1.apply("abcdefg");
	  
	  assert.equal(result, "aFOObcdefg");
    });
	
	it('should return abcBARdefg when the operation is [{ move: 3 }, { insert: "BAR" }] on abcdefg', function() {
      const op1 = new Operation([{ move: 3 }, { insert: "BAR" }]);
	  const result = op1.apply("abcdefg");
	  
	  assert.equal(result, "abcBARdefg");
    });
  });
});

describe('Operation', function() {
  describe('combine & apply', function() {
    it('should return aFOObcBARdefg when the operation is [{ move: 1 }, { insert: \'FOO\' }, { move: 2}, { insert: \'BAR\' } ] on abcdefg', function() {
      const op1 = new Operation([{ move: 1 }, { insert: "FOO" }]);
	  const op2 = new Operation([{ move: 3 }, { insert: "BAR" }]);
	  op1.combine(op2);
	  
	  const result = op1.apply("abcdefg");
	  
	  assert.equal(result, "aFOObcdBARefg");
    });
  });
});