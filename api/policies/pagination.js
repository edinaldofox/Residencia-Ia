/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function pagination(req, res, next) {

  limit = 10;
  req.queryModel = {};
  req.queryModel.skip = parseInt(req.query.start);


  if(req.query.length) {
    limit = req.query.length;
  }

  req.queryModel.limit = parseInt(limit);

  // Configuration for Order by DataTables
  if ( req.query.order !== undefined ) {

    var columnName = null;
    var dir = null;

    for ( var i = 0; i < req.query.order.length; i++ ) {

      columnName = req.query.columns[req.query.order[i].column].data;
      dir = req.query.order[i].dir;
      req.queryModel.sort = columnName + " " + dir;

    }

  }

  next();
};
