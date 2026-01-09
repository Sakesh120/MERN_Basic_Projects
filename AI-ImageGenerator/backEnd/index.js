import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.send("helllo");
});
app.listen(3000);
