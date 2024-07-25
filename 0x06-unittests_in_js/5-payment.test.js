const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const calculateTotal = require('./5-payment');

describe('calculateTotal', function() {
  let consoleLogSpy;

  beforeEach(function() {
    // Spy on console.log
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    // Restore the spy
    consoleLogSpy.restore();
  });

  it('should log "The total is: 120" when called with 100 and 20', function() {
    calculateTotal(100, 20);

    // Verify that console.log was called with the correct message
    expect(consoleLogSpy.calledOnceWith('The total is: 120')).to.be.true;
  });

  it('should log "The total is: 20" when called with 10 and 10', function() {
    calculateTotal(10, 10);

    // Verify that console.log was called with the correct message
    expect(consoleLogSpy.calledOnceWith('The total is: 20')).to.be.true;
  });
});
