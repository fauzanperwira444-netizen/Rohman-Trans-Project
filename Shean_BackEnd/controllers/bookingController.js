const db = require('../config/db');

const createBooking = (req, res) => {
  const user_id = req.user.id; // JWT
  const { service_id, total_harga } = req.body;

  if (!service_id || !total_harga) {
    return res.status(400).json({ message: "Data tidak lengkap" });
  }

  const sql = `
    INSERT INTO bookings (user_id, service_id, status, total_harga)
    VALUES (?, ?, 'pending', ?)
  `;

  db.query(sql, [user_id, service_id, total_harga], (err, result) => {
    if (err) {
      console.log("DB ERROR:", err);
      return res.status(500).json({ error: err.message });
    }

    res.json({
      message: "Booking berhasil",
      bookingId: result.insertId
    });
  });
};

module.exports = { createBooking };