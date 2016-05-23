describe('ScheduleModel', function() {

    describe('#find()', function() {
        it('should check find function', function (done) {
            Schedules.find()
                .then(function(results) {
                    // some tests
                    done();
                })
                .catch(done);
        });
    });

});