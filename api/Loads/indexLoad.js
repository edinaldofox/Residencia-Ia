
var list = {}
var resp = null;

exports.load = function (res) {
    resp = res;
    list.script = "index";
    exports.countMensage();
}

exports.countMensage = function () {

    Message.count({ where: { active: true }}).exec(function countCB(error, found) {

        // Don't forget to handle your errors

        list.countMensage = found;

        exports.countSchedules();

    });

}

exports.countSchedules = function () {

    Schedules.count({ where: { active: true }}).exec(function countCB(error, found) {

        // Don't forget to handle your errors

        list.countSchedules = found;

        exports.countAlert();
    });

}

exports.countAlert = function () {

    Alert.count({ where: { active: true }}).exec(function countCB(error, found) {

        // Don't forget to handle your errors

        list.countAlert = found;

        exports.countUsers();
    });

}

exports.countUsers = function () {

    User.count({ where: { active: true }}).exec(function countCB(error, found) {

        // Don't forget to handle your errors
        list.countUsers = found;

        return resp.view('homepage', list);
    });

}