const categoryModel = require("../models/categoryModel");

// CREATE CATEGORY
const createCategoryController = async (req, res) => {
  try {
    const { title, imageUrl } = req.body;
    if (!title) {
      return res.status(500).send({
        success: false,
        message: "Please Provide category Title",
      });
    }
    const newCategory = new categoryModel({ title, imageUrl });
    await newCategory.save();
    res.status(201).send({
      success: true,
      message: "Category created",
      newCategory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in create Category API",
      error,
    });
  }
};
//GET ALL CATEGORIES
const getAllCategoriesController = async (req, res) => {
  try {
    const categories = await categoryModel.find({});
    if (!categories) {
      return res.status(404).send({
        succes: false,
        message: "No category found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Categories fetched successfully",
      totalCount: categories.length,
      categories,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting Categories",
      error,
    });
  }
};
//UPDATE CATEGORY
const updateCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, imageUrl } = req.body;
    const updateCategory = await categoryModel.findByIdAndUpdate(id, {
      title,
      imageUrl,
    });
    if (!updateCategory) {
      return res.status(500).send({
        success: false,
        message: "No category found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Category updated",
    });
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
      message: "Error while updating Category",
      error,
    });
  }
};
//DELETE CATEGORY
const deleteCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(500).send({
        success: false,
        message: "Please Provide category id",
      });
    }
    await categoryModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting category",
    });
  }
};
module.exports = {
  createCategoryController,
  getAllCategoriesController,
  updateCategoryController,
  deleteCategoryController,
};
