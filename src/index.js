import express from "express";
import middlewareLogsRequest from "./middleware/logs.js";
import dotenv from "dotenv";
dotenv.config();
import userRouter from "./routes/users.js";

const app = express();

app.use(middlewareLogsRequest);
app.use(express.json());
app.use("/users", userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});