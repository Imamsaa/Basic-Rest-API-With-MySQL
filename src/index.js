import express from "express";
import userRouter from "./routes/users.js";
import middlewareLogsRequest from "./middleware/logs.js";

const app = express();

app.use(middlewareLogsRequest);
app.use(express.json());
app.use("/users", userRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});