var bcrypt = require('bcrypt');

module.exports = {
    tableName: 'user',
    //types: {
    //    password: function(password) {
    //        return password === this.repeat_password;
    //    }
    //},
    attributes: {
        name: {
            type: 'string',
            required: true
        },
        email: {
            type: 'email',
            unique: true,
            required: true
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
        //repeat_password: {
        //    type: 'string',
        //},
        active: {
            type: 'boolean',
            required: true,
            defaultsTo: true
        }
    },

    validationMessages: {
        name: {
            required: 'Nome é obrigatorio',
        },
        username: {
            required: 'Login é obrigatorio',
            unique: 'Login já cadastrado'
        },
        email: {
            required: 'Email é obrigatorio',
            email: 'Provide valid email address',
            unique: 'Email já cadastrado'
        },

    },

    beforeValidate: function (values, cb) {

        if (values.password !== values.repeat_password) {
            return cb({erro:['Senhas não coincidem']});
        }
        cb();
    },

    beforeCreate: function (values, cb) {



        bcrypt.hash(values.password, 10, function(err, hash) {
            if(err) return cb(err);
            values.password = hash;
            values.repeat_password = hash;
            cb();
        });
    }
};