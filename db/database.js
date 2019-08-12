import mysql from "mysql";

const con = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "products",
  debug: true
});

function executeQuery(sql, callback) {
  con.getConnection((err, connection) => {
    if (err) {
      return callback(err, null);
    } else {
      if (connection) {
        connection.query(sql, function(error, results, fields) {
          connection.release();
          if (error) {
            return callback(error, null);
          }
          return callback(null, results);
        });
      }
    }
  });
}

function query(sql, callback) {
  executeQuery(sql, function(err, data) {
    if (err) {
      return callback(err);
    }
    callback(null, data);
  });
}

module.exports = {
  query: query
};
