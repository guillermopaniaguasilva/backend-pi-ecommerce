const mongoose = require('mongoose');
const { mongoDB, API } = require('../config/config');

const connectMongoDB = () =>
  mongoose.connect(
    `mongodb+srv://${mongoDB.user}:${mongoDB.password}@cluster0.nr6qtff.mongodb.net/ecommerce?retryWrites=true&w=majority`,
    () => console.log('Connected to MongoDB...')
  );

let connectDB;

switch (API.database) {
  case 'firestore':
    connectDB = () => {};
    break;
  case 'mongodb':
  default:
    connectDB = connectMongoDB;
    break;
}

module.exports = connectDB;
