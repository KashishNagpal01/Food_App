const express = require("express");
const {
  registerController,
  loginController,
} = require("../controllers/authController");
const router = express.Router();
//Register || POST
router.post("/register", registerController);
//Login || POST
router.post("/login", loginController);
module.exports = router;
