import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(`${process.env.MONGO_URI}/Foodie-Express-Database`)
    .then(() => console.log("DB Connected"));
};
