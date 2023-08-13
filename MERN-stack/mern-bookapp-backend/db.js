// const { MongoClient } = require('mongodb');
// const config = require('config');

// const uri = config.get('mongoURI');

// async function connectDB() {
//   try {
//     const client = new MongoClient(uri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     await client.connect();
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('Failed to connect to MongoDB:', error);
//     throw error;
//   }
// }

// module.exports = connectDB;

const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;