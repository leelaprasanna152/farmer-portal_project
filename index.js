const express = require("express");
const mongoose = require("mongoose");
const usersRoutes = require("./routes/users-routes");
const bodyParser=require('body-parser');
const productsRoutes = require("./routes/products-routes");


const app = express()
const port = 4000;


mongoose.connect('mongodb+srv://leela:qwerty123456@cluster0.et7jq.mongodb.net/master?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>console.log("connected to db"))
.catch((err)=>console.log(err))

app.use(bodyParser.json());
app.use(express.json());


app.use('/user',usersRoutes);
app.use('/product',productsRoutes);


app.listen(port,()=>{
    console.log(`server started and running at ${port}`);
});
app.use('/home',(req,res)=>{
    res.send("welcome to sub")
})