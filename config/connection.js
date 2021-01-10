// Set up MySQL connection.
let mysql = require("mysql");

if (process.env.JAWSDB_URL){
  connection = mysql,mysql.createConnection(process.env.JAWSDB_URL);
} else {
  let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "lunaluna",
    database: "burger_db"
  });
};


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
