exports.dependency_loggedOut_app = function(req, res, next) {

     next();

}

exports.logged_app = function(req, res, next) {

    if (req.mySession.admin) {

        next();

    }else{

        res.redirect('/login');

    }

}

exports.dependency_loggedIn_app = function(req, res, next) {

  sql_login_verif = "SELECT * FROM t_configs WHERE config_active = 1;";
	db.query(sql_login_verif, function(err, rows, fields) {
    req.config = rows;
    next();
  });

}
