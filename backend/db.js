const mongoose = require("mongoose");

async function connect() {
    try{
        console.log("trying to connect");
        await mongoose.connect("mongodb+srv://PlantKeeperAdmin:IT2830sp24@plantkeeper.oxfsbmq.mongodb.net/?retryWrites=true&w=majority&appName=PlantKeeper");
        console.log("Connected to DB");
    }
    catch (error){
        console.log(error);
    }
}

connect();

module.exports = mongoose;