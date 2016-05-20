
module.exports = {

    list: function (req, res) {

        return res.view('message/list', {req:req});
    },
    table: function (req, res) {

        var data = {};

        Message.count().exec(function countCB(error, found) {

            data.recordsTotal    = found;
            data.recordsFiltered = found;

            Message.find(req.queryModel, function(erro, rows) {
                data.data = rows;

                return res.json(data);
            });

        });

    }

};
