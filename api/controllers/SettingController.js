
module.exports = {

    list: function (req, res) {

        return res.view('setting/list', {req:req});
    }

};
