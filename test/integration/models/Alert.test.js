describe('AlertModel', function() {

    describe('#find()', function() {
        it('should check find function', function (done) {
            Alert.find()
                .then(function(results) {
                    // some tests
                    done();
                })
                .catch(done);
        });
    });

});