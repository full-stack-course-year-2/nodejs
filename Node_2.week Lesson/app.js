const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const postApi = require('./postsApi');
const userApi = require('./userApi');
//console.log(app)
//middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/postApi', postApi);
app.use('/userApi', userApi);

app.listen(3004);
