const mongoose = require('mongoose');
require('dotenv').config();

// Define MongoDB URL
const mongoURL = process.env.DB_URL;

// Set up Mongoose connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Default connection
const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB');
});

db.on('error', (err) => {
    console.error('Failed to connect to MongoDB:', err);
});

module.exports = db;
