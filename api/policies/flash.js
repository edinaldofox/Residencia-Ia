
module.exports = function(req, res, next) {

    res.flash = null;

    if(req.session.flash) {

        res.flash = req.session.flash;
        delete req.session.flash;
    }

    next();
};