const express = require("express");
const { testUserController } = require("../controllers/testController");

//router Object
const router = express.Router();

//routes GET | POST | DELETE | UPDATE
router.get("/test-user", testUserController);
module.exports = router;
