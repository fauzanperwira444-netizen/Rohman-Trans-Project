const db = require('../config/db');

const createBooking = (req, res) => {
  const { user_id, service_id, total_harga } = req.body;

  const sql = `
    INSERT INTO bookings (user_id, service_id, status, total_harga)
    VALUES (?, ?, 'pending', ?)
  `;

  db.query(sql, [user_id, service_id, total_harga], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json({
      message: "Booking berhasil",
      booking_id: result.insertId
    });
  });
};

module.exports = { createBooking };