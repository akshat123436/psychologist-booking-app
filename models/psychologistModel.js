import mongoose from "mongoose";
import { WEEKDAY } from "../utils/constants.js";
const PsychologistSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    qualifications: [String],
    ratePerMinute: Number,
    availabilityDays: [
      {
        type: String,
        enum: Object.values(WEEKDAY),
      },
    ],
    about: String,
    isOccupied: {
      type: Boolean,
      default: false,
    },
    minimumDuration: Number,
    maximumDuration: Number,
  },
  { timestamps: true }
);
export default mongoose.model("Psychologist", PsychologistSchema);
