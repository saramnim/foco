import { Schema } from "mongoose";
import { shortId } from "./types/short-id";

const UserSchema = new Schema(
  {
    shortId,
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    country : {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: false,
      default: "basic-user",
    },
  },
  {
    collection: "users",
    timestamps: true,
  }
);

export { UserSchema };
