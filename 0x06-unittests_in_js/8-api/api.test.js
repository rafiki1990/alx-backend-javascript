const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');

const { expect } = chai;
chai.use(chaiHttp);

describe('GET /', function() {
  it('should return a status code of 200', function(done) {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should return the correct message', function(done) {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        if (err) done(err);
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });

  // You can add more tests if needed
});
