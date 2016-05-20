/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function notices(req, res, next) {

  Message.find({ where: { active: true }, limit: 3}, function(erro, rows) {
    req.session.messages = rows;
    next();
  });

};
