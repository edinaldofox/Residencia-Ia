
var sails = require('sails');

before(function(done) {

    // Increase the Mocha timeout so that Sails has enough time to lift.
    this.timeout(5000);

    sails.lift({
        // configuration for testing purposes
    }, function(err, server) {
        if (err) return done(err);
        // here you can load fixtures, etc.
        done(err, server);
    });
});

after(function(done) {
    // here you can clear fixtures, etc.
    sails.lower(done);
});

//var Sails = require('sails');
//var _ = require('lodash')
//
//global.DOMAIN = 'http://localhost';
//global.PORT = 1337;
//global.HOST = DOMAIN + ':' + PORT;
//
//before(function(callback) {
//    this.timeout(7000);
//
//    var configs = {
//        log: {
//            level: 'info'
//        },
//        //connections: {
//        //    memory: {
//        //        // lets use memory tests ...
//        //        adapter   : 'sails-memory'
//        //    }
//        //},
//        models: {
//            connection: 'memory'
//        },
//        port: PORT,
//        environment: 'test',
//
//        // @TODO needs suport to csrf token
//        csrf: false,
//
//        // we dont need this configs in API test
//        hooks: {
//            grunt: false,
//            socket: false,
//            pubsub: false
//        }
//    };
//
//    Sails.load(configs, function(err, sails) {
//        if (err) {
//            console.error(err);
//            return callback(err);
//        }
//
//        console.log('rodo!')
//        // here you can load fixtures, etc.
//        callback(err, sails);
//    });
//});
//
//after(function(done) {
//    // here you can clear fixtures, etc.
//    sails.lower(done);
//});