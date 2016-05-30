
var request = require('supertest'),
    request = request('http://localhost:1337'),
    sails = require('sails');

describe('SettingController', function() {

    describe('GET /setting/list', function() {

        it('respond with html', function(done) {

            request.get("/setting/list")
                .expect(200)
                .end(function(err, res) {
                    if (err) return done(err);
                    done();
                });
        });
    });

});