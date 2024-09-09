const mongoose = require('mongoose');

// Define MongoDB URL
const mongoURL = 'mongodb://127.0.0.1/hotel';

// Set up Mongoose connection
mongoose.connect(mongoURL, {
 
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



