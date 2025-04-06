import mongoose from 'mongoose';
import 'dotenv/config';

const testConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      // Remove the deprecated options
      // useNewUrlParser: true, // No longer needed
      // useUnifiedTopology: true, // No longer needed
    });
    console.log("Connected to MongoDB Atlas!");
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error.message);
  } finally {
    mongoose.connection.close();
  }
};

testConnection();