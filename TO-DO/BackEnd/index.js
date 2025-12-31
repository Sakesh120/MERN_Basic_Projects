import express, { urlencoded } from "express";
import { collectionname, connection } from "./dbconfig.js";
const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.post("/add-task", async (req, res) => {
  const db = await connection();
  const collection = db.collection(collectionname);
  const result = await collection.insertOne(req.body);
  if (result) {
    res.send({
      message: "new task added successfully",
      success: true,
      data: result,
    });
  } else {
    res.send({
      message: "something went wrong",
      success: false,
    });
  }
});

app.listen(3200);
