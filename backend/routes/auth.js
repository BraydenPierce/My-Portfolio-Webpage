const dbo = require("../db/conn"); // This will help us connect to the database
const crypto = require("crypto"); // required for password hashing
const express = require("express");
// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will
// take control of requests starting with path /record.
const router = express.Router();

// Route to show all records. For testing
router.route("/users").get(async (req, res) => {
  try {
    console.log("In users get route");
    let db_connect = dbo.getDb("portfolio");
    const result = await db_connect.collection("creds").find({}).toArray();
    res.json(result);
  } catch (err) {
    throw err;
  }
});

// Route to register a user into the database.
// Sets sessions, returns json
router.route("/users/register").post(async (req, res) => {
  try {
    console.log("In users register post route"); // For testing
    let status = "";
    let db_connect = dbo.getDb();
    const salt = crypto.randomBytes(16).toString("hex");
    let myobj = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      salt: salt,
      accType: "User",
    };

    // Password hashing
    const hash = crypto
      .pbkdf2Sync(myobj.password, myobj.salt, 10000, 64, "sha256")
      .toString("hex");
    myobj.password = hash;

    await db_connect.collection("creds").insertOne(myobj);

    // Session setting
    if (!req.session.username) {
      req.session.username = myobj.username;
      req.session.email = myobj.email;
      req.session.password = myobj.password;
      req.session.accType = myobj.accType;
      status = "Session Set";
    } else {
      status = "Session already existed";
    }
    res.json({
      status: "register good",
      session: status,
      accType: myobj.accType,
    });
  } catch (err) {
    throw err;
  }
});

// Route to login a user from the database.
// Sets sessions, returns json
router.route("/users/login").post(async (req, res) => {
  try {
    console.log("In users login post route"); // For testing
    let status = "";
    let db_connect = dbo.getDb();
    const userReq = await db_connect.collection("creds").findOne({
      username: req.body.username,
    });

    if (!userReq) {
      return res.json({
        status: "login bad - user not found",
      });
    }

    // Hashes entered password with database returned salt
    const hash = crypto
      .pbkdf2Sync(req.body.password, userReq.salt, 10000, 64, "sha256")
      .toString("hex");

    if (userReq.password == hash) {
      // Session setting
      if (!req.session.username) {
        req.session.username = userReq.username;
        req.session.password = userReq.password;
        req.session.accType = userReq.accType;
        status = "Session Set";
      } else {
        status = "Session already existed";
      }

      res.json({
        status: "login good",
        session: status,
        accType: userReq.accType,
      });
    } else {
      console.log("Pasword doesnt match");
      res.json({
        status: "login bad",
      });
      return;
    }
  } catch (err) {
    console.log("Password doesn't match");
    res.json({
      status: "login error",
      error: err.message,
    });
  }
});

// Checks for an exisiting session. returns: true w/user info, or false.
router.route("/users/session").get(async (req, res) => {
  try {
    console.log("In users session get route"); // For testing
    if (req.session.username) {
      res.json({
        isLoggedIn: true,
        username: req.session.username,
        accType: req.session.accType,
      });
    } else {
      res.json({
        isLoggedIn: false,
      });
    }
  } catch (err) {
    res.json({
      isLoggedIn: false,
      error: err.message,
    });
  }
});

router.route("/users/logout").post(async (req, res) => {
  try {
    console.log("In users logout post route"); // For testing
    // Try to destroy session with inline function
    req.session.destroy((err) => {
      if (err) {
        return res.json({ status: "logout failed", error: err.message });
      }

      res.clearCookie("connect.sid");
      res.json({ status: "logout successful" });
    });
  } catch (err) {
    res.json({ status: "logout failed", error: err.message });
  }
});

module.exports = router;
