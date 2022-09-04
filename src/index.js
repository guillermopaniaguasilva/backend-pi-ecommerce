const express = require('express');
const bodyParser = require('body-parser');
const { API } = require('../config/config');
const productsRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');
const connectDB = require('./connectDB');

const app = express();
const PORT = API.port;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/products', productsRoutes);
app.use('/api/cart', cartRoutes);

connectDB();

app.listen(PORT, () => {
  console.info(`Listening on port: ${PORT}.`);
});
