
module.exports = {

    list: function (req, res) {

        return res.view('alert/list');
    },

    table: function (req, res) {

        var data = {};

        Alert.count().exec(function countCB(error, found) {

            data.recordsTotal    = found;
            data.recordsFiltered = found;

            Alert.find(req.queryModel, function(erro, rows) {
                data.data = rows;

                return res.json(data);
            });

        });

    }

};
