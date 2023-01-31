const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");

connectDB();
app.use(cookieParser());
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", require("./routes/user.routes"));
app.use("/api/user/msg", require("./routes/msg.routes"));
app.use("/api/admin/upload", require("./routes/adminUpload.routes"));

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
