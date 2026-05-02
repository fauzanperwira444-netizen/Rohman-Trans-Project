const express = require('express');
const router = express.Router();

const { createBooking } = require('../controllers/bookingController');
const verifyToken = require('../middleware/authMiddleware');

router.post('/', verifyToken, createBooking);
router.get('/', verifyToken, getMyBookings);

module.exports = router;