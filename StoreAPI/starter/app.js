require('dotenv').config()

const express = require('express');
const app = express();

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Welcome!</h1><a href ="/api/v1/products">products route</a>');
})

// app.use('/api/v1/products', require('./routes/products'));

const connectDB =
    require('./db/connect');

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log('connected to mongoose');
        app.listen(port, console.log(`Server is running on port ${port}`));

    } catch (e) {
        console.log(e);
    }
}

start();