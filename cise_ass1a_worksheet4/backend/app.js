const express = require('express');
const connectDB = require('./db');
// const cors = require('cors');

// routes
const speed = require('./routes/api/speed');

const app = express();

// Connect Database
connectDB();

// cors
// app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Creating Backend for SPEED!'));

// use Routes
app.use('/api/speed', speed);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server running on port ${port}`));