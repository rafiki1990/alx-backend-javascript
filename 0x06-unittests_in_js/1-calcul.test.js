// test/1-calcul.test.js
const assert = require('assert');
const calculateNumber = require('../1-calcul');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 5 when inputs are 1.4 and 3.6', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 3.6), 5);
    });

    it('should return 0 when inputs are -0.4 and 0.4', function() {
      assert.strictEqual(calculateNumber('SUM', -0.4, 0.4), 0);
    });
  });

  describe('SUBTRACT', function() {
    it('should return -2 when inputs are 1.4 and 3.6', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 3.6), -2);
    });

    it('should return 0 when inputs are 2.4 and 2.4', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.4, 2.4), 0);
    });
  });

  describe('DIVIDE', function() {
    it('should return 0.5 when inputs are 1.4 and 3.6', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 3.6), 0.5);
    });

    it('should return Error when second input rounds to 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.4), 'Error');
    });

    it('should return 2 when inputs are 4.4 and 1.6', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 4.4, 1.6), 2);
    });
  });

  it('should throw an error for invalid type', function() {
    assert.throws(() => {
      calculateNumber('MULTIPLY', 1.4, 3.6);
    }, /Invalid type/);
  });
});
