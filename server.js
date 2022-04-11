const express = require("express");
require("dotenv").config({ path: "./.env" });
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

if(process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, '/client/build')));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Api Running");
  });
}

  app.listen(PORT, function(){
    console.log(`Server is running on port ${PORT}`, app.settings.env);
  });