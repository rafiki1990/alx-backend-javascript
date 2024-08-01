// 8-api/api.test.js

const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  let server;

  // Start the server before tests
  before((done) => {
    server = require('./api'); // Import the server
    done();
  });

  // Stop the server after tests
  after((done) => {
    server.close(done);
  });

  it('should return status code 200', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct response message', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
