var id = null
describe('UserModel', function() {

    describe('#find()', function() {
        it('should check find function', function (done) {
            User.find()
                .then(function(results) {
                    // some tests
                    done();
                })
                .catch(done);
        });
    });

    describe('#save()', function() {
        it('should save without error', function(done) {

            var data = {
                name: 'Pedro22 felipe1222',
                email: 'luis11231@mail.com',
                foneOne: '1235-9154',
                foneTwo: '8789-8484',
                username:'pablo11212412',
                password: '123',
                repeat_password: '123'
            };
            User.create(data).exec(function createCB(err, created){
                if (err) throw err;
                id = created.id;

                done();
            });
        });
    });

    describe('#update()', function() {
        it('should update without error', function(done) {

            var data = {
                name: 'Pedro felipe',
                email: 'luis_pedro@mail.com',
                foneOne: '1235-9154',
                foneTwo: '8789-8484'
            };
            User.update({id: id}, data).exec(function createCB(err, created){
                if (err) throw err;
                done();
            });
        });
    });

    after(function() {
        User.destroy({id:id}).exec(function (err){
            if (err) throw err;
        });
    });

});