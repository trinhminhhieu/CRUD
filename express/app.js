const express = require('express')
const app = express()
const bodyParser = require('body-parser'); 


app.use(express.json())
app.use(bodyParser.json());

//import all users
const users = require('./router/routers')

app.use('/api/v1', users)


module.exports = app


// import * as jwt from 'jsonwebtoken';

// const expiresIn = parseInt('86400');
// const token = jwt.sign(user.toObject(), process.env.APP_KEY, {
//   expiresIn // in seconds
// });