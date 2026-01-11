const mongoose = require("mongoose");
const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL);
    console.log("DB connected!");
  } catch (error) {
    console.log("DB connection failed", error.message);
  }
};

module.exports = dbConnect;
