const db = require("../db");

// Create a model from the schema
const User = db.model("User", {
    uname: String,
    pass: String,
    plants: { type : Array , "default" : [] },
    tasks: { type : Array , "default" : [] },
});

module.exports = User;