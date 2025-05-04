const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const connectDb = require("./config/db");
require("dotenv").config();
connectDb();
//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
//routes
app.use("/api/v1/test", require("./routes/testRoute"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/resturant", require("./routes/resturantRoutes"));
app.use("/api/v1/category", require("./routes/categoryRoutes"));
app.use("/api/v1/food", require("./routes/foodRoutes"));
// app.get("/", (req, res) => {
//   return res.status(200).send("<h1>Welcome to app server<h1>");
// });
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("listening".bgMagenta);
});
