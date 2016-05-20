
var request = require('supertest'),
    request = request('http://localhost:1337'),
    sails = require('sails');

describe('IndexController', function() {

    describe('GET /', function() {

        it('respond with html', function(done) {

            request.get("/user/list")
                .expect(200)
                .end(done);
        });
    });

    describe("GET index", function() {

        it("should be successful", function(done) {
            request.get("/")
                .expect(200)
                .end(done);
        });
    });

});