import mongoose from "mongoose";
import colors from 'colors'
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};
export default connectDb;