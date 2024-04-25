const morgan = require("morgan");
const express = require("express");
const User = require("./models/user");
const cors=require("cors");

//corsOptions for help with post methods
const corsOptions ={
   origin:'*', 
   credentials:true,            
   optionSuccessStatus:200,
}


 
const app = express();

//use settings in our app
app.use(cors(corsOptions));

// Middleware that parses HTTP requests with JSON body
app.use(express.json());
 
// Shows HTTP requests in the console
app.use(morgan("dev"));

app.use(cors());

// Create endpoint http://localhost:8000/api/users
app.use("/api/users", require("./api/users"));

const port = 8000;
app.listen(port, () => console.log(`Server listening on port ${port}`));

module.exports = app;