
module.exports = {

    list: function (req, res) {

        return res.view('schedule/list', {req:req});
    },

    table: function (req, res) {

        var data = {};

        Schedules.count().exec(function countCB(error, found) {

            data.recordsTotal    = found;
            data.recordsFiltered = found;

            Schedules.find(req.queryModel, function(erro, rows) {
                data.data = rows;

                return res.json(data);
            });

        });

    }

};
