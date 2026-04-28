const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // sesuaikan (kalau ada password phpMyAdmin)
  database: 'rohman_db'
});

db.connect((err) => {
  if (err) {
    console.error('DB Error:', err);
    return;
  }
  console.log('Database connected');
});

module.exports = db;