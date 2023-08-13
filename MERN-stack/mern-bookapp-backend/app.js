// const express = require('express');
// const connectDB = require('./db'); // Adjust the path based on your project structure
// const routes = require('./routes/api/books');
// const app = express();
// const cors = require('cors');

// app.use(express.json());
// app.use('/api/books', routes);

// async function startApp() {
//   try {
//     // Connect to the MongoDB database
//     await connectDB();

//     // Your application logic goes here
//     app.get('/', (req, res) => res.send('Hello world! Testing MongoDB with the help of chatGPT'));
    
//     const PORT = process.env.PORT || 8082;
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   } catch (error) {
//     console.error('Error starting the app:', error);
//     process.exit(1);
//   }
// }

// startApp();

const express = require('express');
const connectDB = require('./db');
const cors = require('cors');

// routes
const books = require('./routes/api/books');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/books', books);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));