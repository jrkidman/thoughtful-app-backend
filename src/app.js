require('dotenv').config()
var cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const promptRouter = require('./routes/promptRouter');
const userRouter = require('./routes/userRouter');

const port = process.env.PORT;

const app = express();

//enable Mongo



//mongoose connection
mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING)
.then(()=> console.log('connected to database successfully'))
.catch(()=> console.log('unable to connect to database'))

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
}));


// to parse json to req.body
app.use(bodyParser.json());


// express middleware:
// a function that runs in the middle of our requests.  so, after the server receives the request but before the express server sends a response

//userRoutes
app.use(userRouter);

//promptRoutes
app.use(promptRouter)



app.listen(4000, () => console.log('Thoughtful app server is listening for requests'));