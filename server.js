// Importing the required modules
const express = require('express'); // Import the Express framework
const app = express(); // Create an instance of the Express application
const bodyParser = require('body-parser'); // Import body-parser to parse incoming request bodies
const db = require('./db'); // Import the database setup file (make sure this sets up your database connection properly)
const Person = require('./Model/person'); // Import the Person model from the Model directory
const userRoutes = require('./Routes/userRoutes')

// Middleware
app.use(bodyParser.json()); // Use body-parser middleware to parse JSON request bodies

// Define routes

// Route for the root path ('/')
app.get('/', (req, res) => {
  res.send('Welcome to my server'); // Send a welcome message to clients accessing the root path
});

// Route for the '/admin' path
app.get('/admin', (req, res) => {
  res.send('Welcome admin'); // Send a welcome message specifically for admin users
});


// Route for handling GET requests to '/user'
app.get('/user', async (req, res) => {
  try {
    const data = await Person.find(); // Fetch all person records from the database and wait for the operation to complete
    console.log('Data fetched:', data); // Log the fetched data to the console for debugging
    res.status(200).json(data); // Send a JSON response with status 200 (OK) and include the fetched data
  } catch (err) {
    console.log('Error fetching data:', err); // Log any errors that occur during the fetch operation
    res.status(500).json({ error: 'Internal server error' }); // Send a JSON response with status 500 (Internal Server Error) and include an error message
  }
});
app.use('/user',userRoutes);
// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000'); // Log a message indicating that the server has started successfully
});


// comments added for testing purpose
