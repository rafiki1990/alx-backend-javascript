const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const calculateTotal = require('./4-payment');

describe('calculateTotal', function() {
  let calculateNumberStub;
  let consoleLogSpy;

  beforeEach(function() {
    // Stub Utils.calculateNumber to always return 10
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on console.log
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    // Restore the stub and spy
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('should call Utils.calculateNumber with type = SUM, a = 100, b = 20', function() {
    calculateTotal(100, 20);

    // Verify that the stub was called with the correct arguments
    expect(calculateNumberStub.calledOnceWith('SUM', 100, 20)).to.be.true;
  });

  it('should log "The total is: 10"', function() {
    calculateTotal(100, 20);

    // Verify that console.log was called with the correct message
    expect(consoleLogSpy.calledOnceWith('The total is: 10')).to.be.true;
  });
});
