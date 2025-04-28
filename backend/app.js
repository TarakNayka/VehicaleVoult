const express = require("express");
const app= express();

const cors = require("cors");

require("dotenv").config();
require("./conn/conn");

const user= require("./routes/user")
const Cars = require("./routes/car")
const Favourite =  require("./routes/favourite")
const Cart = require("./routes/cart")
const Order = require("./routes/order")



app.use(cors());
app.use(express.json());
//routes
app.use("/api/v1",user);
app.use("/api/v1",Cars);
app.use("/api/v1",Favourite);
app.use("/api/v1",Cart);
app.use("/api/v1", Order);
//creat port
// create port
app.listen(process.env.PORT,() => {
    console.log(`server started ${process.env.PORT}`);

})