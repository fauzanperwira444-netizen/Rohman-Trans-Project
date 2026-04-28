const express = require('express');
const app = express();

const bookingRoutes = require('./routes/bookingRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(express.json());

app.use('/api/bookings', bookingRoutes);
app.use('/api/auth', authRoutes);

app.listen(3000, () => {
  console.log('Server jalan di port 3000');
  console.log("authRoutes:", authRoutes);
});