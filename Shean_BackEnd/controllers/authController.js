const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'emailkamu@gmail.com',
    pass: 'app-password'
  }
});

// REGISTER
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Semua field wajib diisi"
      });
    }

    // CEK EMAIL DULU (DI SINI POSISINYA)
    const checkEmail = "SELECT id FROM users WHERE email = ?";
    db.query(checkEmail, [email], async (err, result) => {
      if (err) return res.status(500).json(err);

      if (result.length > 0) {
        return res.status(400).json({
          message: "Email sudah terdaftar"
        });
      }

      // CEK PASSWORD SAMA
      if (password !== confirmPassword) {
        return res.status(400).json({
          message: "Password tidak sama"
        });
      }

      // VALIDASI PASSWORD
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,20}$/;

      if (!passwordRegex.test(password)) {
        return res.status(400).json({
          message: "Password 8-20 karakter, harus ada huruf & angka, hanya boleh . _ !"
        });
      }

      // HASH PASSWORD
      const hashedPassword = await bcrypt.hash(password, 10);

      // TOKEN
      const crypto = require('crypto');
      const verificationToken = crypto.randomBytes(32).toString('hex');

      // INSERT USER
      const sqlUser = `
      INSERT INTO users (email, password, verification_token, is_verified) VALUES (?, ?, ?, false)`;
      db.query(sqlUser, [email, hashedPassword, verificationToken], (err, result) => {
        if (err) return res.status(500).json(err);

        const userId = result.insertId;

        // KIRIM EMAIL
        transporter.sendMail({
          from: 'emailkamu@gmail.com',
          to: email,
          subject: 'Verifikasi Email',
          text: `Kode verifikasi kamu: ${token}`
        });

        // INSERT PROFILE
        const sqlProfile = "INSERT INTO user_profiles (user_id, nama) VALUES (?, ?)";
        db.query(sqlProfile, [userId, name], (err2) => {
          if (err2) return res.status(500).json(err2);

          res.json({
            message: "Register berhasil",
            userId
          });
        });
      });
    });

  } catch (error) {
    res.status(500).json(error);
  }
};

// LOGIN
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email & password wajib" });
    }

    const sql = "SELECT * FROM users WHERE email = ?";
    db.query(sql, [email], async (err, result) => {
      if (err) return res.status(500).json(err);

      if (result.length === 0) {
        return res.status(404).json({ message: "User tidak ditemukan" });
      }

      const user = result[0];
      if (!user.is_verified) { // block login klo blm verifikasi
        return res.status(403).json({
          message: "Email belum diverifikasi"
        });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Password salah" });
      }

      const jwtToken = jwt.sign(
        { id: user.id },
        "rahasia_lho_ya",
        { expiresIn: "1d" }
      );

      res.json({
        message: "Login berhasil",
        token: jwtToken
      });
    });

  } catch (error) {
    res.status(500).json(error);
  }
};

// VERIFIKASI EMAIL
const verifyEmail = (req, res) => {
  const { token } = req.body;

  const sql = "SELECT * FROM users WHERE verification_token = ?";
  db.query(sql, [token], (err, result) => {
    if (err) return res.status(500).json(err);

    if (result.length === 0) {
      return res.status(400).json({ message: "Token tidak valid" });
    }

    const user = result[0];

    db.query(
      "UPDATE users SET is_verified = true, verification_token = NULL WHERE id = ?",
      [user.id],
      (err2) => {
        if (err2) return res.status(500).json(err2);

        res.json({ message: "Email berhasil diverifikasi" });
      }
    );
  });
};

module.exports = { register, login, verifyEmail };