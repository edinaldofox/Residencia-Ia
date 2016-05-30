
var request = require('supertest'),
    request = request('http://localhost:1337'),
    sails = require('sails');

describe('IndexController', function() {

    describe('GET /', function() {

        it('respond with html', function(done) {

            request.get("/user/list")
                .expect(200)
                .end(function(err, res) {
                    if (err) return done(err);
                    done();
                });
        });
    });

    describe("GET index", function() {

        it("should be successful", function(done) {
            request.get("/")
                .expect(200)
                .end(function(err, res) {
                    if (err) return done(err);
                    done();
                });
        });
    });

});