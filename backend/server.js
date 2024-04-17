const morgan = require("morgan");
const express = require("express");
 
const app = express();

// Middleware that parses HTTP requests with JSON body
app.use(express.json());
 
// Shows HTTP requests in the console
app.use(morgan("dev"));

app.get("/hello", (req, res) => {
    res.send("Hello From the backend");
})

const port = 8000;
app.listen(port, () => console.log(`Server listening on port ${port}`));

module.exports = app;