
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const dotenv = require('dotenv');
dotenv.config();

//db
mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("db connected"));

mongoose.connection.on("error",err=>{
    console.log(`DB connection error:${err.message}`);
})

// bring in routes
const postRoutes = require('./routes/post');

const myOwnMiddleware = (req,res,next)=>{
    console.log("middleware added");
    next();
}

//middleware
app.use(morgan("dev"));
//app.use(myOwnMiddleware);
app.use(bodyParser.json());
app.use(expressValidator());
app.use('/',postRoutes);

const port = process.env.PORT || 8080;
app.listen(port, ()=>{
    console.log(`A node js API is listening on port: ${port}`);
});