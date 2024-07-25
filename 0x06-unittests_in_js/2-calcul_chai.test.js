// 2-calcul_chai.test.js

const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return the sum of two rounded numbers', function() {
      expect(calculateNumber('SUM', 1.2, 2.8)).to.equal(4);
    });

    it('should handle negative numbers', function() {
      expect(calculateNumber('SUM', -1.2, -2.8)).to.equal(-4);
    });

    it('should return the correct sum with both numbers already integers', function() {
      expect(calculateNumber('SUM', 2, 3)).to.equal(5);
    });
  });

  describe('SUBTRACT', function() {
    it('should return the difference of two rounded numbers', function() {
      expect(calculateNumber('SUBTRACT', 5.7, 3.2)).to.equal(3);
    });

    it('should handle negative numbers', function() {
      expect(calculateNumber('SUBTRACT', -5.7, -3.2)).to.equal(-3);
    });

    it('should return the correct difference with both numbers already integers', function() {
      expect(calculateNumber('SUBTRACT', 5, 3)).to.equal(2);
    });
  });

  describe('DIVIDE', function() {
    it('should return the result of dividing two rounded numbers', function() {
      expect(calculateNumber('DIVIDE', 7.5, 2.5)).to.equal(3);
    });

    it('should handle division by zero', function() {
      expect(calculateNumber('DIVIDE', 7.5, 0)).to.equal('Error');
    });

    it('should handle negative numbers', function() {
      expect(calculateNumber('DIVIDE', -7.5, -2.5)).to.equal(3);
    });

    it('should return the correct division with both numbers already integers', function() {
      expect(calculateNumber('DIVIDE', 10, 2)).to.equal(5);
    });
  });

  it('should throw an error for invalid type', function() {
    expect(() => calculateNumber('INVALID', 1, 2)).to.throw('Invalid type');
  });
});
