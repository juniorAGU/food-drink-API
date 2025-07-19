const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


// Load your JSON file as data
const foodData = require('./work.json');

app.use(express.static('images'));

// Define your route
app.get('/foods', function(req, res) {
  res.json(foodData); // Serve the contents of your JSON file
});
app.get('/drinks', function(req, res) {
  res.json(foodData); // Serve the contents of your JSON file
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
