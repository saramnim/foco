import mongoose from "mongoose";
import "dotenv/config";

const dbConnect = () => {
  if (process.env.MONGODB_URL === undefined) {
    throw new Error("MONGODB_URI를 설정해주세요");
  }
  mongoose.connect(process.env.MONGODB_URL, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to database successfully");
    }
  });
  mongoose.set("strictQuery", true);
};

export { dbConnect };
