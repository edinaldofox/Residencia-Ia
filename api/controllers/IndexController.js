module.exports = {

    index: function (req, res) {
        return res.view('homepage');
    },

    icon: function (req, res) {
        return res.view('icon');
    }

};
