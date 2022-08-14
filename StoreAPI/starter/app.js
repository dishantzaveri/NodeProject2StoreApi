require('dotenv').config()

const express = require('express');
const app = express();

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Welcome!</h1>');
}).listen(3000, () => {
    console.log('Server is running on port 3000');
}
);