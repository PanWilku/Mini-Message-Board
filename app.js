const express = require("express");
const path = require("path");
const indexRouter = require("./routes/indexRoute");
const { newMessageRouter } = require("./routes/newMessageRouter");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));


app.use("/", indexRouter);
app.use(newMessageRouter);


app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});