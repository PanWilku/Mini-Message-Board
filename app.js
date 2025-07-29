const express = require("express");
require("dotenv").config();
const path = require("path");
const indexRouter = require("./routes/indexRoute");
const { newMessageRouter } = require("./routes/newMessageRouter");
const mongoose = require("mongoose");


mongoose.connect(process.env.MONGODB_URI,)
.then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("MongoDB connection error:", error);
});

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));


app.use("/", indexRouter);
app.use(newMessageRouter);


app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});