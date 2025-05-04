const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "user name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    address: {
      type: Array,
    },
    phone: {
      type: String,
      required: [true, "phone number is required"],
    },
    userType: {
      type: String,
      required: [true, "user type is required"],
      default: "client",
      enum: ["client", "admin", "vendor", "driver"],
    },
    profile: {
      type: String,
      default:
        "https://www.google.com/imgres?q=user%20image&imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F019%2F879%2F186%2Fnon_2x%2Fuser-icon-on-transparent-background-free-png.png&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-png%2Fuser&docid=PeogAm48EHJipM&tbnid=-lTR1n_YC1teAM&vet=12ahUKEwj23JKuoeOLAxVSZSoJHQL7AssQM3oECFIQAA..i&w=1616&h=980&hcb=2&ved=2ahUKEwj23JKuoeOLAxVSZSoJHQL7AssQM3oECFIQAA",
    },
    answer: {
      type: String,
      required: [true, "Answer is Required"],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", userSchema);
