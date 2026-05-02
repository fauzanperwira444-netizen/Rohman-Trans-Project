const express = require('express');
const app = express();

const db = require('./config/db');
const bookingRoutes = require('./routes/bookingRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(express.json());

// routes
app.use('/api/bookings', bookingRoutes);
app.use('/api/auth', authRoutes);

// test root
app.get('/', (req, res) => {
  res.send('Backend jalan');
});

app.listen(3000, () => {
  console.log('Server jalan di port 3000');
});