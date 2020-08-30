require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

server.use(express.json());
server.use(routes);

server.listen(process.env.PORT || 3333, () => {
  console.log('Server running on port 3333');
});