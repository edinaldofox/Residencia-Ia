var bcrypt = require('bcrypt');

module.exports = {
    tableName: 'user',
    attributes: {
        name: {
            type: 'string',
            required: true
        },
        email: {
            type: 'email',
            unique: true
        },
        foneOne: {
            type: 'string'
        },
        foneTwo: {
            type: 'string'
        },
        username: {
            type: 'string',
            unique: true,
            required: true
        },
        password: {
            type: 'string',
            required: true
        },
        active: {
            type: 'boolean',
            required: true,
            defaultsTo: true
        }
    },

    beforeCreate: function (values, cb) {

        bcrypt.hash(values.password, 10, function(err, hash) {
            if(err) return cb(err);
            values.password = hash;
            cb();
        });
    }
};