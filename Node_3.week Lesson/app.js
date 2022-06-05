const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userApi = require('./userApi');

mongoose.connect('mongodb://localhost:27017/users', { useNewUrlParser: true });


app.use(cors());
app.use(bodyParser.json());
app.use('/api', userApi);

app.listen(3004);
