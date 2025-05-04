const resturantModel = require("../models/resturantModel");

const createResturantController = async (req, res) => {
  try {
    const {
      title,
      imageUrl,
      dishes,
      time,
      pickup,
      delivery,
      isOpen,
      logoUrl,
      rating,
      ratingCount,
      code,
      coords,
    } = req.body;
    //Validation
    if (!title || !coords) {
      return res.status(500).send({
        success: false,
        message: "Please Provide title and address",
      });
    }
    const newResturant = new resturantModel({
      title,
      imageUrl,
      dishes,
      time,
      pickup,
      delivery,
      isOpen,
      logoUrl,
      rating,
      ratingCount,
      code,
      coords,
    });
    newResturant.save();
    res.status(201).send({
      success: true,
      message: "Resturant created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while creating resturant",
      error,
    });
  }
};
const getResturantsController = async (req, res) => {
  try {
    const resturants = await resturantModel.find({});
    if (!resturants) {
      return res.status(404).send({
        success: false,
        message: "No Resturant found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Resturants fetched successfully",
      totalCount: resturants.length,
      resturants,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting resturants",
      error,
    });
  }
};
const getResturantByIdController = async (req, res) => {
  try {
    const resturantId = req.params.id;
    if (!resturantId) {
      return res.status(400).send({
        success: false,
        message: "Please provide resturant id",
      });
    }
    const resturant = await resturantModel.findById({ _id: resturantId });
    if (!resturant) {
      return res.status(404).send({
        success: false,
        message: "Resturant not found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Resturant fetched successfully",
      resturant,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting resturant by id",
      error,
    });
  }
};
const deleteResturantController = async (req, res) => {
  try {
    const resturantId = req.params.id;
    if (!resturantId) {
      return res.status(400).send({
        success: false,
        message: "Please provide resturant id",
      });
    }
    const resturant = await resturantModel.findByIdAndDelete({
      _id: resturantId,
    });
    if (!resturant) {
      return res.status(404).send({
        success: false,
        message: "Resturant not found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Resturant deleted successfully",
    });
  } catch (error) {}
};
module.exports = {
  createResturantController,
  getResturantsController,
  getResturantByIdController,
  deleteResturantController,
};
