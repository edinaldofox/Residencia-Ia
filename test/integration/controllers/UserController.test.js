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
                .end(function(err, res) {
                    if (err) return done(err);
                    done();
                });
        });
    });

    describe('GET /user/create', function() {

        it('respond with html', function(done) {

            request.get("/user/create")
                .expect(200)
                .end(function(err, res) {
                    if (err) return done(err);
                    done();
                });
        });
    });

    describe('/user/create', function() {

        it('posts a new user to /user/create', function(done) {

            request.post("/user/create")
                .field('name', 'churupita')
                .field('email', 'email@email.com')
                .field('phone1', '88976357')
                .field('phone2', '88976657')
                .field('username', 'mma_tur')
                .field('password', '123')
                .field('repeat_password', '123')
                .field('active', 'true')
                .expect(302)
                .end(function(err, res) {
                    if (err) throw err;

                    done();
                });
        });
    });

    describe('/user/edit', function() {

        it('posts a update user to /user/edit', function(done) {

            User.find({name: 'churupita'}).exec(function (err, rows){
                if (err) throw err;

                request.post("/user/edit")
                    .field('id', rows[0].id)
                    .field('name', 'churupita12')
                    .field('email', 'email12@email.com')
                    .field('phone1', '88912567')
                    .field('phone2', '85676657')
                    .field('active', 'false')
                    .expect(302)
                    .end(function(err, res) {
                        if (err) throw err;

                        done();
                    });
            });
        });
    });

    after(function() {
        User.destroy({name: 'churupita12'}).exec(function (err){
            if (err) throw err;
        });
    });


});