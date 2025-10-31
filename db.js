// db.js
// Where to configure Node ↔ MySQL connection
var mysql = require('mysql2');

// Create a connection pool (connect to MySQL)
// This is the "key" for Node.js to access the DB.
var pool = mysql.createPool({
  host: 'localhost',
  user: 'peter',           // ✅ matches the user in setup.sh
  password: 'password',    // ✅ matches the password in setup.sh
  database: 'JoinUs',      // ✅ database name to connect to
  connectionLimit: 10     //  ✅ up to 10 simultaneous connections
});

// ✅ Export pool so other files can use it
module.exports = pool;



