const express = require('express');
const router = express.Router(); 
const Person = require('./../Model/person');
const {jwtAuthMiddleware, generateToken} = require('./../jwt');

router.post('/signup', async (req, res) => {
    try {
      const data = req.body; // Extract the request body, which should include { name, age, email }
      const newPerson = new Person(data); // Create a new Person instance with the extracted data
  
      const response = await newPerson.save(); // Save the new person to the database and wait for the operation to complete
      console.log('Data saved:', response); // Log the response to the console for debugging
      const payload = {
        name: response.name,
        age: response.age
    }

    console.log(JSON.stringify(payload));
        const token = generateToken(payload);
        console.log("Token is : ", token);
      res.status(200).json({response: response,token: token}); // Send a JSON response with status 200 (OK) and include the saved data
    } catch (error) {
      console.log('Error saving data:', error); // Log any errors that occur during the save operation
      res.status(500).json({ error: 'Internal server error' }); // Send a JSON response with status 500 (Internal Server Error) and include an error message
    }
  });
  
  // Route for handling GET requests to '/user'
  router.get('/', async (req, res) => {
    try {
      const data = await Person.find(); // Fetch all person records from the database and wait for the operation to complete
      console.log('Data fetched:', data); // Log the fetched data to the console for debugging
      res.status(200).json(data); // Send a JSON response with status 200 (OK) and include the fetched data
    } catch (err) {
      console.log('Error fetching data:', err); // Log any errors that occur during the fetch operation
      res.status(500).json({ error: 'Internal server error' }); // Send a JSON response with status 500 (Internal Server Error) and include an error message
    }
  });

  module.exports = router;
  // test 
