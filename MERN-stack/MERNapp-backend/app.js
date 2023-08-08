const express = require('express');
const connectDB = require('./db'); // Adjust the path based on your project structure

const app = express();

async function startApp() {
  try {
    // Connect to the MongoDB database
    const client = await connectDB();

    // Your application logic goes here
    app.get('/', (req, res) => res.send('Hello world! Testing nodemon with the help of chatGPT'));

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