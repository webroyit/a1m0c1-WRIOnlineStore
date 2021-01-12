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
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,      // Subunits of the currency
        currency: "usd"
    });
    
    // Ok - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

const PORT = process.env.PORT || 1000;
app.listen(PORT, console.log(`Server running in ${PORT}`));