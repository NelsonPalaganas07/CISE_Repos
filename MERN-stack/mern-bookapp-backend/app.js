const express = require('express');
const connectDB = require('./db'); // Adjust the path based on your project structure
const routes = require('./routes/api/books');
const app = express();

app.use(express.json());
app.use('/api/books', routes);

async function startApp() {
  try {
    // Connect to the MongoDB database
    await connectDB();

    // Your application logic goes here
    app.get('/', (req, res) => res.send('Hello world! Testing MongoDB with the help of chatGPT'));
    
    const PORT = process.env.PORT || 8082;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting the app:', error);
    process.exit(1);
  }
}

startApp();

// const express = require('express');
// const connectDB = require('./db'); // Import the connection object from db.js
// const routes = require('./routes/api/books'); // Assuming this is your routes file
// const app = express();

// // Middleware
// app.use(express.json());

// // Use API routes
// app.use('/api/books', routes); // Adjust the route as needed

// // Connect to the MongoDB database
// connectDB()
//   .then(() => {
//     // Start the Express server
//     const port = process.env.PORT || 8082;
//     app.listen(port, () => {
//       console.log(`Server running on port ${port}`);
//     });
//   })
//   .catch(error => {
//     console.error('Error starting the app:', error);
//     process.exit(1);
//   });