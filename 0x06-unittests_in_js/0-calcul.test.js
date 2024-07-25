// 0-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return 4 when inputs are 1.4 and 3.6', function() {
    assert.strictEqual(calculateNumber(1.4, 3.6), 5);
  });

  it('should return 5 when inputs are 1.5 and 3.4', function() {
    assert.strictEqual(calculateNumber(1.5, 3.4), 5);
  });

  it('should return 0 when inputs are 0.1 and 0.3', function() {
    assert.strictEqual(calculateNumber(0.1, 0.3), 0);
  });

  it('should return -2 when inputs are -1.4 and -0.6', function() {
    assert.strictEqual(calculateNumber(-1.4, -0.6), -2);
  });

  it('should return 0 when inputs are -0.4 and 0.4', function() {
    assert.strictEqual(calculateNumber(-0.4, 0.4), 0);
  });
});
