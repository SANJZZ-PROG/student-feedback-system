const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("backend server is working");
});

app.use("/api/auth", require("./routes/authroutes"));
app.use("/api/feedback", require("./routes/feedbackroutes"));
app.use("/api/users", require("./routes/userroutes"));

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () => {
      console.log('server running on port ${process.env.PORT}');

    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
  
