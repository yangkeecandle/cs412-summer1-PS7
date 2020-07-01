const app = require('../app')
const chai = require('chai');
const mocha = require('mocha');
const chaiHttp = require('chai-http'); //has a dependency on mocha
const {expect} = chai;
const {describe} = mocha;

chai.use(chaiHttp);

describe('WX API', () => {
    it('should return 200 success code', function (done) {
        chai.request(app)
            .get('/')
            .end((err, response) => {
                expect(response).to.have.status(200);
                // expect(response.body.message).not.to.include(0,"fred");
                done();
            })
    });

    it('should be in EJS', function (done) {
        chai.request(app)
            .get('/')
            .end((err, response) => {
                expect(response).to.be.html
                done();
            })
    })

    it('should not be empty', function (done) {
        chai.request(app)
            .get('/')
            .end((err, response) => {
                expect(response).not.be.empty
                done();
            })
    })
})