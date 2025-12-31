import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send({
    message: "Basic Api",
    success: true,
  });
});

app.listen(3200);
