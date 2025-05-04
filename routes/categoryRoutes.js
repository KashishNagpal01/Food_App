const express = require("express");
const {
  createCategoryController,
  getAllCategoriesController,
  updateCategoryController,
  deleteCategoryController,
} = require("../controllers/categoryController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();
//CREATE CATEGORY
router.post("/create", authMiddleware, createCategoryController);
//GET ALL CATEGORIES
router.get("/getAll", getAllCategoriesController);
//UPDATE CATEGORY
router.put("/update/:id", authMiddleware, updateCategoryController);
//DELETE CATEGORY
router.delete("/delete/:id", authMiddleware, deleteCategoryController);
module.exports = router;
