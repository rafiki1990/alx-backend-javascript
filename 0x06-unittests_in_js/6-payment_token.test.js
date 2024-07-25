const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('should return a resolved promise with data when success is true', function(done) {
    getPaymentTokenFromAPI(true).then(response => {
      try {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Call done() to indicate the test is complete
      } catch (error) {
        done(error); // Pass the error to done() to fail the test
      }
    }).catch(done); // Handle any rejection or unexpected errors
  });

  it('should return undefined when success is false', function(done) {
    getPaymentTokenFromAPI(false).then(response => {
      try {
        expect(response).to.be.undefined;
        done(); // Call done() to indicate the test is complete
      } catch (error) {
        done(error); // Pass the error to done() to fail the test
      }
    }).catch(done); // Handle any rejection or unexpected errors
  });
});
