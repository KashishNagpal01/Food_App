const mongoose = require("mongoose");
const colors = require("colors");
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to DB ${mongoose.connection.host}`.bgCyan);
  } catch (error) {
    console.log("Db error:", error);
  }
};
module.exports = connectDb;
