import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";

//App config

const app = express();
const port = process.env.PORT || 4005;
connectDB();
connectCloudinary();
//middlewares
app.use(express.json());
app.use(cors());

//api endpoint
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.get("/", (req, res) => {
  res.send("API Working");
});
app.listen(port, () => console.log("server started on port"));
