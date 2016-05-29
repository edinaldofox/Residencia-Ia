var request = require('supertest'),
    request = request('http://localhost:1337'),
    sails = require('sails');

describe('UserController', function() {

    describe('GET /user/list', function() {

        it('respond with html', function(done) {

            request.get("/user/list")
                .expect(200)
                .end(done);
        });
    });

    describe('GET /user/table', function() {

        it('respond with html', function(done) {

            request.get("/user/table")
                .expect(200)
                .end(done);
        });
    });

    describe('GET /user/create', function() {

        it('respond with html', function(done) {

            request.get("/user/create")
                .expect(200)
                .end(done);
        });
    });

});