const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const {errorHandler} = require('./middleware/errorMiddleware');
const newsletterRoutes = require("./routes/newsletterRoutes");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use("/api/newsletter", newsletterRoutes);

app.get('/', (req, res) => {
    res.status(200).json({status: 'UP', message: 'Backend is running...'});
});


app.use(errorHandler);

module.exports = app;