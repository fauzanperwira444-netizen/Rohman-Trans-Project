const db = require('../config/db');
const bcrypt = require('bcrypt');

// REGISTER
const register = async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

  db.query(sql, [name, email, hashedPassword], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json({
      message: "Register berhasil",
      userId: result.insertId
    });
  });
};

module.exports = { register };