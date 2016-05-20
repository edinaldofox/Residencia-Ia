var request = require('supertest'),
    request = request('http://localhost:1337'),
    sails = require('sails');

describe('MessageController', function() {

    describe('GET /message/list', function() {

        it('respond with html', function(done) {

            request.get("/user/list")
                .expect(200)
                .end(done);
        });
    });

    describe('GET /message/table', function() {

        it('respond with html', function(done) {

            request.get("/message/table")
                .expect(200)
                .end(done);
        });
    });

});