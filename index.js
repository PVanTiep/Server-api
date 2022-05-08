const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const dotenv = require("dotenv");
const dataRoute= require("./routes/data");
const deviceRoute= require("./routes/device");
const ledRoute= require("./routes/led");

dotenv.config();
//Connect database
// mongoose.connect(('mongodb+srv://admin:0923028413@lab4-nhom13.j7xtk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
//     {useNewUrlParser:true},
//     {useUnifiedTopology: true},
//     ()=>{console.log("Connected to database");
// });
mongoose.connect('mongodb+srv://admin:0923028413@lab4-nhom13.j7xtk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database connected successfully!');
  })
  .catch((err) => {
    console.log('Error connecting with error code:', err);
});
app.use(bodyParser.json({limit:"50mb"}));
app.use(helmet());
app.use(cors());
app.use(morgan("common"));

//routers
app.use("/v1/data", dataRoute);
app.use("/v1/device", deviceRoute);
app.use("/v1/led", ledRoute);
const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log("Server is running...");
});
//haha