var request = require('supertest'),
    request = request('http://localhost:1337'),
    sails = require('sails');

describe('ScheduleController', function() {

    describe('GET /schedule/list', function() {

        it('respond with html', function(done) {

            request.get("/user/list")
                .expect(200)
                .end(done);
        });
    });

    describe('GET /schedule/table', function() {

        it('respond with html', function(done) {

            request.get("/user/table")
                .expect(200)
                .end(done);
        });
    });

});