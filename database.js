import mongoose from 'mongoose';

const MONGO_DB_NAME = 'e-commerce';
const MONGO_URL = 'mongodb+srv://Torrente:minecra1234@cluster0.myhkmuj.mongodb.net/';

const connectionConfig = { dbName: MONGO_DB_NAME, autoIndex: true };
mongoose.set('strictQuery', true);
const connection = await mongoose.connect(MONGO_URL, connectionConfig);

if (connection) {
  console.log('Connection with mongo database successfully');
} else {
  console.error('Error to connect with mongo database');
}
