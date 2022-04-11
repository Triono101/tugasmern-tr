const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connection Success!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
