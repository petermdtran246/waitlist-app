// seed.js
// Create fake data and put it in MySQL
const { faker } = require('@faker-js/faker');
const pool = require('./db'); // 👉 use "key" from db.js

// Create 500 fake users
let data = [];
for (let i = 0; i < 500; i++) {
  data.push([faker.internet.email(), faker.date.past()]);
}

// SQL statement to insert
const q = 'INSERT INTO users (email, created_at) VALUES ?';

// Send query to MySQL via pool
pool.query(q, [data], function (err, result) {
  if (err) throw err;
  console.log(`✅ Inserted ${result.affectedRows} users`);
  pool.end(); // close connection when done
});



