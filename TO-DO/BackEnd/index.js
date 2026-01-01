import express, { urlencoded } from "express";
import { collectionname, connection } from "./dbconfig.js";
import cors from "cors";
import { ObjectId } from "mongodb";
const app = express();

app.use(cors());
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

app.get("/tasks", async (req, res) => {
  const db = await connection();
  const collection = db.collection(collectionname);
  const result = await collection.find().toArray();
  if (result) {
    res.send({
      message: "task list fetched",
      success: true,
      data: result,
    });
  } else {
    res.send({
      message: "error agaya oye",
      success: false,
    });
  }
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const db = await connection();
  const collection = db.collection(collectionname);
  const result = await collection.deleteOne({ _id: new ObjectId(id) });
  if (result) {
    res.send({
      message: "task  deleted",
      success: true,
      data: result,
    });
  } else {
    res.send({
      message: "error agaya oye try later",
      success: false,
    });
  }
});

app.listen(3200);
