const express = require("express");
const {
  getUserController,
  updateUserController,
  resetPasswordController,
  updatePassword,
  updatePasswordController,
  deleteUserController,
} = require("../controllers/UserController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();
//routes
//GET USER || GET
router.get("/getUser", authMiddleware, getUserController);
//UPDATE USER || UPDATE
router.put("/updateUser", authMiddleware, updateUserController);
//RESET PASSWORD || POST
router.post("/resetPassword", authMiddleware, resetPasswordController);
//UPDATE PASSWORD || POST
router.post("/updatePassword", authMiddleware, updatePasswordController);
//DELETE USER || DELETE
router.delete("/deleteUser/:id", authMiddleware, deleteUserController);

module.exports = router;
