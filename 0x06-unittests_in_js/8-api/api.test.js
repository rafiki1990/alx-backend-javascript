const request = require('request');
const chai = require('chai');
const expect = chai.expect;
const server = require('./api'); // Make sure this path is correct based on your folder structure

describe('GET /', function() {
  it('should return status code 200', function(done) {
    request.get('http://localhost:7865/', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', function(done) {
    request.get('http://localhost:7865/', function(error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  // Add other tests here if needed
});
