const express = require('express');
const cors = require('cors');
const path = require('path'); //  Importing the 'path' module

const app = express();
const PORT = process.env.PORT || 3000;

// Allow all origins (can be customized for security)
app.use(cors());

const foodData = require('./work.json');

//  Serve static files correctly from 't/images' folder
app.use(express.static(path.join(__dirname, 't/images')));

app.get('/', (req, res) => {
  res.send('🍽️ Welcome to the Food & Drink API');
});

app.get('/foods', (req, res) => {
  res.json(foodData);
});

app.get('/drinks', (req, res) => {
  res.json(foodData);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3000;


// // Load your JSON file as data
// const foodData = require('./work.json');

// app.use(express.static('images'));

// // Define your route
// app.get('/foods', function(req, res) {
//   res.json(foodData); // Serve the contents of your JSON file
// });
// app.get('/drinks', function(req, res) {
//   res.json(foodData); // Serve the contents of your JSON file
// });


// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
