import express from "express";
import middlewareLogsRequest from "./middleware/logs.js";
import dotenv from "dotenv";
dotenv.config();
import userRouter from "./routes/users.js";
import upload from "./middleware/multer.js";

const app = express();

app.use(middlewareLogsRequest);
app.use(express.json());
app.use("/users", userRouter);
app.use("/assets", express.static("public/images"));
app.post("/upload", upload.single("photo"), (req, res) => {
  res.send("File uploaded successfully");
});

app.use((err, req, res, next) => {
  res.json({ message: err.message });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});