import mongoose from "mongoose";

export const dbConnect = () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = mongoose.connect(process.env.MONGO_CLIENT);

    conn && console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
  }
};
