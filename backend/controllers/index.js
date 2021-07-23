var mysql = require('mysql')

function fetch(req, res) {
  var request = req.body
  var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: 'matrix'
  });

  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM matrix WHERE id BETWEEN "+ request.id +" AND " + (request.id + 9) + "", function (err, result) {
      if (err) throw err;
      res.send(result)
    });
  });
}

module.exports = fetch
