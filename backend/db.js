const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://PlantKeeperAdmin:IT2830sp24@plantkeeper.oxfsbmq.mongodb.net/?retryWrites=true&w=majority&appName=PlantKeeper");
module.exports = mongoose;