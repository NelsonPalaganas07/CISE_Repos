const { MongoClient, ServerApiVersion } = require('mongodb');
const config = require('config');

const uri = config.get('mongoURI');

async function connectDB() {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    // You can return the client if you need to interact with the database elsewhere
    return client;
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  }
}

module.exports = connectDB;