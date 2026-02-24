import express from "express";

const app = express();


app.get("/", (req, res) => {
    res.json({message: "Hello Get Method"});
});

app.post("/", (req, res) => {
    res.send("Hello Post Method");
});

app.use("/", (req, res, next) => {
    res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});