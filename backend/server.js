const express = require("express");
const app = express();
const cors = require("cors");

// Used to store cookies with Mongo
const session = require("express-session");
const MongoStore = require("connect-mongo").default;

require("dotenv").config({ path: "./config.env" });

const port = process.env.PORT;
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(
  session({
    secret: "hugeTeeth",
    saveUninitialized: false, // don't create sessions until something is stored
    resave: false, // don't save session if unmodified
    store: MongoStore.create({
      mongoUrl: process.env.ATLAS_URI,
      collectionName: "sessions",
    }),
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 1 day
  }),
);

// Get MongoDB driver connection
const dbo = require("./db/conn");

// API's
app.use(require("./routes/auth"));

// For testing
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
  dbo.connectToServer(function (err) {
    if (err) {
      console.err(err);
    }
  });
  console.log(`Server is running on port ${port}`);
});
