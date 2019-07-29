const express = require('express');
const bodyParser = require('body-parser');
const product_route = require('./routes/products.routes');
const mongoose = require('mongoose');
const app = express();
const connection_string = "mongodb+srv://vinayjadhav:vinay_123@cluster0-wanqp.mongodb.net/productstutorial?retryWrites=true&w=majority";


let dev_db_url = connection_string;
let mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Using body parser by all incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


let port = 5000;
app.use('/products',product_route);
app.listen(port, () => {
    console.log('Server is running on - http://localhost:5000');
});