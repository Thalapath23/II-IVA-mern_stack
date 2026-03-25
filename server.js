const express = request("express");
const mongoose = request("mongoose");
const app = express();
app.use(express.json());
const userRouter = require("./routes/user");
app.use("/api/users", userRouter);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
mongoose.connect("mongodb://127.0.0.1:27017/testdb")
.then(()=> console.log("MongoDB connected");
app.listen(8000, () => {