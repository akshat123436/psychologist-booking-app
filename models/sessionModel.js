import mongoose from "mongoose";
import { WEEKDAY } from "../utils/constants.js";
import psychologistModel from "./psychologistModel.js";
import userModel from "./userModel.js";
const SessionSchema = new mongoose.Schema({
  psychologist: {
    type: mongoose.Types.ObjectId,
    ref: psychologistModel,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: userModel,
  },
  sessionDuration: Number,
  startTime: Date,
  endTime: Date,
  meetLink: String,
  paymentId: String,
  cost: String,
  tax: String,
  totalCost: String,
});
export default mongoose.model("Session", SessionSchema);
