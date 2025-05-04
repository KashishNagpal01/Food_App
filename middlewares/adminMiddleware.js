const userModel = require("../models/userModel");
module.exports = async (req, res, next) => {
  try {
    const userId = req.body.id;
    const user = await userModel.findById(userId);
    if (user.userType !== "admin") {
      return res.status(401).send({
        success: false,
        message: "User must have Admin access",
      });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Unauthorized Access",
      error,
    });
  }
};
