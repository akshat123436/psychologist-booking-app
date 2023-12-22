import morgan from "morgan";
import express from "express";
import mongoose from "mongoose";

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/api/v1", (req, res) => {
  res.send("Hello");
});

const port = process.env.PORT || 5100;
try {
  await mongoose.connect(
    process.env.MONGO_URL || "mongodb://localhost:27017/psychologist"
  );
  app.listen(port, () => {
    console.log(`server running on port : ${port}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
