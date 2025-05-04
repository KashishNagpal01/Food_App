const foodModel = require("../models/foodModel");
const orderModel = require("../models/orderModel");

//CREATE FOOD
const createFoodController = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      imageUrl,
      foodTags,
      category,
      code,
      isAvailable,
      resturant,
      rating,
    } = req.body;
    if (!title || !description || !price || !resturant) {
      return res.status(500).send({
        success: false,
        message: "Please Provide all fields",
      });
    }
    const newFood = new foodModel({
      title,
      description,
      price,
      imageUrl,
      foodTags,
      category,
      code,
      isAvailable,
      resturant,
      rating,
    });
    await newFood.save();
    res.status(201).send({
      success: true,
      message: "New Food item created",
      newFood,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in create food API",
      error,
    });
  }
};
//GET ALL FOOD
const getAllFoodsController = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    if (!foods) {
      return res.status(404).send({
        success: false,
        message: "No food item was found",
      });
    }
    res.status(200).send({
      success: true,
      totalCount: foods.length,
      foods,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getFoods API",
      error,
    });
  }
};
//GET SINGLE FOOD
const getFoodByIdController = async (req, res) => {
  try {
    const foodId = req.params.id;
    if (!foodId) {
      return res.status(404).send({
        success: false,
        message: "Please Provide food id",
      });
    }
    const food = await foodModel.findById(foodId);
    if (!food) {
      return res.status(404).send({
        success: false,
        message: "No Food found with this ID",
      });
    }
    res.status(200).send({
      success: true,
      food,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getSingleFood API",
      error,
    });
  }
};
//GET FOOD BY RESTURANT
const getFoodByResController = async (req, res) => {
  try {
    const resId = req.params.resturant;
    if (!resId) {
      return res.status(404).send({
        success: false,
        message: "Please Provide resturant id",
      });
    }
    const food = await foodModel.find({ resturant: resId });
    if (!food) {
      return res.status(404).send({
        success: false,
        message: "No Food found with this ID",
      });
    }
    res.status(200).send({
      success: true,
      food,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getFoodByResturant API",
      error,
    });
  }
};
//UPDATE FOOD CONTROLLER
const updateFoodController = async (req, res) => {
  try {
    const foodId = req.params.id;
    const food = await foodModel.findById(foodId);
    if (!food) {
      return res.status(404).send({
        success: false,
        message: "No Food Item found with this id",
      });
    }
    const {
      title,
      description,
      price,
      imageUrl,
      foodTags,
      category,
      code,
      isAvailable,
      resturant,
      rating,
    } = req.body;
    const updatedFood = await foodModel.findByIdAndUpdate(
      foodId,
      {
        title,
        description,
        price,
        imageUrl,
        foodTags,
        category,
        code,
        isAvailable,
        resturant,
        rating,
      },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Food item updated successfully",
      updatedFood,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Update food item API",
      error,
    });
  }
};
//Delete Food Controller
const deleteFoodController = async (req, res) => {
  try {
    const foodId = req.params.id;
    const food = await foodModel.findById(foodId);
    if (!food) {
      return res.status(404).send({
        success: false,
        message: "No Food Item found with this ID",
      });
    }
    await foodModel.findByIdAndDelete(foodId);
    res.status(200).send({
      success: true,
      message: "Food item Deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Delete Food API",
      error,
    });
  }
};
//Place Order controller
const placeOrderController = async (req, res) => {
  try {
    const { cart } = req.body;
    if (!cart) {
      return res.status(500).send({
        success: false,
        message: "Please Provide Cart Items To place Order",
      });
    }
    let total = 0;
    cart.map((i) => {
      total += i.price;
    });
    const newOrder = new orderModel({
      foods: cart,
      payment: total,
      buyer: req.body.id,
    });
    await newOrder.save();
    res.status(200).send({
      success: true,
      message: "Order Placed Successfully",
      orderDetails: newOrder,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Place Order API",
      error,
    });
  }
};
//update Order Status
const updateOrderStatusController = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (!status) {
      return res.status(500).send({
        success: false,
        message: "Please provide order status",
      });
    }
    const updatedOrder = await orderModel.findByIdAndUpdate(
      id,
      { Status: status },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Order status updated successfully",
      updatedOrder,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in updating order status API",
    });
  }
};
module.exports = {
  createFoodController,
  getAllFoodsController,
  getFoodByIdController,
  getFoodByResController,
  updateFoodController,
  deleteFoodController,
  placeOrderController,
  updateOrderStatusController,
};
