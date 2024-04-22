const morgan = require("morgan");
const express = require("express");
const User = require("./models/user");
 
const app = express();

// Middleware that parses HTTP requests with JSON body
app.use(express.json());
 
// Shows HTTP requests in the console
app.use(morgan("dev"));

app.get("/hello", (req, res) => {
    res.send("Hello From the backend");
})

app.get("/:uname", (req, res) => {

    // sample code for creating a new user
    // const user = new User({
    //     uname: req.params.uname,
    //     pass: "123",
    //     plants: [],
    //     tasks: []
    // })

    // user.save()
    // .then(function (models) {
    //     console.log(models);
    //   })
    //   .catch(function (err) {
    //     console.log(err);
    //   });

    // User.findOne({uname: {$eq : req.params.uname}})
    // .then((found) => {
    //     res.json(found);
    // })
    // .catch(function (err) {
    //   console.log(err);
    // });
    
})

const port = 8000;
app.listen(port, () => console.log(`Server listening on port ${port}`));

module.exports = app;