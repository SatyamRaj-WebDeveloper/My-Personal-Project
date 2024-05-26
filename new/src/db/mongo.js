const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/firstConnection")
    .then(()=>console.log("Connection Successful"))
    .catch((err)=>console.log("could not connect"))

