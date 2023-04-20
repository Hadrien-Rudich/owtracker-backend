const express = require("express");
const app = express();

app.use(express.json());

require("dotenv").config();

app.use(express.urlencoded({ extended: false }));

const mapRouter = require("./routes/maps");
const heroRouter = require("./routes/heroes");
const userRouter = require("./routes/users");
const historyRouter = require("./routes/history");
const profileRouter = require("./routes/profiles");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/maps", mapRouter);
app.use("/heroes", heroRouter);
app.use("/user", userRouter);
app.use("/history", historyRouter);
app.use("/profiles", profileRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
