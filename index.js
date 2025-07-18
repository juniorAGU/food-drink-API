const express = require('express');
const app = express();
const PORT = 3000;

// Load your JSON file as data
const foodData = require('./work.json');

// Define your route
app.get('/foods', function(req, res) {
  res.json(foodData); // Serve the contents of your JSON file
});
app.get('/drinks', function(req, res) {
  res.json(foodData); // Serve the contents of your JSON file
});


// Start the server
app.listen(PORT, function() {
  console.log(`Server is running at http://localhost:${PORT}`);
});