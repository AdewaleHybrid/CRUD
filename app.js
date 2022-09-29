const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const cors = require("cors")

// ..........Middleware......
app.use(express.json());
app.use(cors());

// ROUTES
// import routes
const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);

app.get("/", (req, res) => {
  // res.send("Home Page");
});

// CONNECT DATABASE
mongoose
  .connect(process.env.DATABASE_CONNECTION)
  .then(() => {
    console.log(`database connected succesfully`);
  })
  .catch((err) => {
    console.log(err);
  });
//CONNECT TO SERVER
app.listen(7000);
