const express = require("express");
const {
  createFoodController,
  getAllFoodsController,
  getFoodByIdController,
  getFoodByResController,
  updateFoodController,
  deleteFoodController,
  placeOrderController,
  updateOrderStatusController,
} = require("../controllers/foodController");
const adminMiddleware = require("../middlewares/adminMiddleware");

const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();
//CREATE FOOD
router.post("/create", authMiddleware, createFoodController);
//GET ALL FOOD
router.get("/getAll", getAllFoodsController);
//GET SINGLE FOOD
router.get("/get/:id", getFoodByIdController);
//GET FOOD BY RESTURANT
router.get("/getByResturant/:resturant", getFoodByResController);
//UPDATE FOOD
router.put("/update/:id", authMiddleware, updateFoodController);
//Delete Food
router.delete("/delete/:id", authMiddleware, deleteFoodController);
//ORDER FOOD
router.post("/placeOrder", authMiddleware, placeOrderController);
//ORDER STATUS
router.post(
  "/orderStatus/:id",
  authMiddleware,
  adminMiddleware,
  updateOrderStatusController
);
module.exports = router;
