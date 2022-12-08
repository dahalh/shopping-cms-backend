import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      default: "inactive",
    },
    fName: {
      type: String,
      required: true,
      trim: true,
      maxLength: [20, "Cannot be more than 20 characters"],
    },
    lName: {
      type: String,
      required: true,
      trim: true,
      maxLength: [20, "Cannot be more than 20 characters"],
    },
    dob: {
      type: Date,
      default: null,
    },
    email: {
      type: String,
      unique: true,
      index: 1,
      required: true,
      trim: true,
      maxLength: [50, "Cannot be more than 50 characters"],
    },
    emailValidationCode: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      minLength: [10, "Phone number has to be 10 digits"],
      maxLength: [10, "Phone number has to be 10 digits"],
    },
    address: {
      type: String,
      default: "n/a",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Admin", AdminSchema);
