import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB is connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error.message);
    res.sttsus(500).json({Error: `${error.message}`})
    process.exit(1)
  }
}