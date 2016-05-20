
module.exports = {

    list: function (req, res) {

        return res.view('user/list', {req:req});
    },

    table: function (req, res) {

        var data = {};

        User.count().exec(function countCB(error, found) {

            data.recordsTotal    = found;
            data.recordsFiltered = found;

            User.find(req.queryModel, function(erro, rows) {

                data.data = rows;

                return res.json(data);
            });

        });

    }

};
