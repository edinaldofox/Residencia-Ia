var indexLoad = require('../Loads/indexLoad.js');

module.exports = {

    index: function (req, res) {

        //User.create({name: 'Pedro felipe', email: 'luis3@mail.com', username:'pablo3', password: '123'}).exec(function createCB(err, created){
        //    console.log('Created Use with name: ' + created.name);
        //});
        //Alert.create({title: 'Lorem Ipsum', description: 'Lorem é apenas um texto sem significado apenas para testes.'}).exec(function createCB(err, created){
        //    console.log('Created Alert with title: ' + created.title);
        //});
        //Message.create({title: 'Lorem Ipsum', description: 'Lorem é apenas um texto sem significado apenas para testes.'}).exec(function createCB(err, created){
        //    console.log('Created Message with title: ' + created.title);
        //});
        //Schedules.create({title: 'Lorem Ipsum', description: 'Lorem é apenas um texto sem significado apenas para testes.'}).exec(function createCB(err, created){
        //    console.log('Created Schedules with title: ' + created.title);
        //});
        return indexLoad.load(res);
    },

    icon: function (req, res) {
        return res.view('icon');
    }

};
