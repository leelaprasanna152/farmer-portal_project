
const fs = require('fs');
const path = require('path');
const express = require("express");
const mongoose = require("mongoose");
const usersRoutes = require("./routes/users-routes");
const bodyParser=require('body-parser');
const productsRoutes = require("./routes/products-routes");
const HttpError = require('./models/http-error');

const app = express()
const port = 4000;


mongoose.connect('mongodb+srv://leela:qwerty123456@cluster0.et7jq.mongodb.net/master?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>console.log("connected to db"))
.catch((err)=>console.log(err))

app.use(bodyParser.json());
app.use(express.json());


app.use('/user',usersRoutes);
app.use('/product',productsRoutes);

app.use((req, res, next) => {
    const error = new HttpError('Could not find this route.', 404);
    throw error;
});

app.use('/uploads/images', express.static(path.join('uploads', 'images')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')

  next();
});

app.use((error, req, res, next) => {
    if (req.file) {
      fs.unlink(req.file.path, (err) => {
        console.log(err);
      });
    }
    if (res.headerSent) {
      return next(error);
    }
    res.status(error.code || 500);
    res.json({ message: error.message || 'An unknown error occurred!' });
  });
  

app.listen(port,()=>{
    console.log(`server started and running at ${port}`);
});
app.use('/home',(req,res)=>{
    res.send("welcome to sub")
})
