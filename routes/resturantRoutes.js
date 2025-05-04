const express = require("express");
const {
  createResturantController,
  getResturantsController,
  getResturantByIdController,
  deleteResturantController,
} = require("../controllers/resturantController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();
//CREATE | POST
router.post("/create", authMiddleware, createResturantController);
//GET ALL RESTURANTS | GET
router.get("/getAll", getResturantsController);
//GET RESTURANT BY ID | GET
router.get("/:id", getResturantByIdController);
//DELETE RESTURANT
router.delete("/delete/:id", authMiddleware, deleteResturantController);
module.exports = router;
