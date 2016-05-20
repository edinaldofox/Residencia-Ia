var indexLoad = require('../Loads/indexLoad.js');
var hook = require('sails').config;
module.exports = {

    index: function (req, res) {
        //console.log(hook.hooks);
        //console.log(hook.hooks.myBasicHook);
        //console.log(hook.hooks.userhooks.myBasicHook);
        /**
         * create data
         **/
        //User.create({name: 'Pedro felipe1', email: 'luis1@mail.com', foneOne: '1235-9154', foneTwo: '8789-8484', username:'pablo1', password: '123'}).exec(function createCB(err, created){
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
    }

};
