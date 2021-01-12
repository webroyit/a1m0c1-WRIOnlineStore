const {stripeSecretKey} = require('./config.js');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(stripeSecretKey);

// App Config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());        // Send or pass data in json format

// API routes
app.get('/', (request, response) => response.status(200).send('WRI Online Store'));

const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`Server running in ${PORT}`));