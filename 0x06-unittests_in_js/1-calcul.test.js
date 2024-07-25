// 1-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return the sum of two rounded numbers', function() {
      assert.strictEqual(calculateNumber('SUM', 1.2, 2.8), 4);
    });

    it('should handle negative numbers', function() {
      assert.strictEqual(calculateNumber('SUM', -1.2, -2.8), -4);
    });

    it('should return the correct sum with both numbers already integers', function() {
      assert.strictEqual(calculateNumber('SUM', 2, 3), 5);
    });
  });

  describe('SUBTRACT', function() {
    it('should return the difference of two rounded numbers', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.7, 3.2), 3);
    });

    it('should handle negative numbers', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', -5.7, -3.2), -3);
    });

    it('should return the correct difference with both numbers already integers', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 5, 3), 2);
    });
  });

  describe('DIVIDE', function() {
    it('should return the result of dividing two rounded numbers', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 7.5, 2.5), 3);
    });

    it('should handle division by zero', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 7.5, 0), 'Error');
    });

    it('should handle negative numbers', function() {
      assert.strictEqual(calculateNumber('DIVIDE', -7.5, -2.5), 3);
    });

    it('should return the correct division with both numbers already integers', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 10, 2), 5);
    });
  });

  it('should throw an error for invalid type', function() {
    assert.throws(() => calculateNumber('INVALID', 1, 2), /Invalid type/);
  });
});
