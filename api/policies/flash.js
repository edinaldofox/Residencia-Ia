
module.exports = function(req, res, next) {

    req.flash = null;

    if(req.session.flash) {

        req.flash = req.session.flash;
        delete req.session.flash;
    }

    next();
};