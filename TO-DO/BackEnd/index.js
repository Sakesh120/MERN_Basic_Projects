import express, { urlencoded } from "express";
import { collectionname, connection } from "./dbconfig.js";
import cors from "cors";
import { ObjectId } from "mongodb";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
const app = express();

app.use(
  cors({
    origin: " http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

app.post("/signup", async (req, res) => {
  const userdata = req.body;
  console.log(userdata);
  if (userdata.email && userdata.password) {
    const db = await connection();
    const collection = db.collection("users");
    const result = await collection.insertOne(userdata);
    if (result) {
      jwt.sign(userdata, "Google", { expiresIn: "10d" }, (error, token) => {
        res.send({
          success: true,
          msg: "signup done",
          token,
        });
      });
    }
  } else {
    res.send({
      success: false,
      msg: "signup not done",
    });
  }
});

app.post("/login", async (req, res) => {
  const userdata = req.body;
  console.log(userdata);
  if (userdata.email && userdata.password) {
    const db = await connection();
    const collection = db.collection("users");
    const result = await collection.findOne({
      email: userdata.email,
      password: userdata.password,
    });
    if (result) {
      jwt.sign(userdata, "Google", { expiresIn: "10d" }, (error, token) => {
        res.send({
          success: true,
          msg: "login done",
          token,
        });
      });
    } else {
      res.send({
        success: false,
        msg: "user Not found",
      });
    }
  } else {
    res.send({
      success: false,
      msg: "login not done",
    });
  }
});

app.post("/add-task", verifyJWTToken, async (req, res) => {
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

app.get("/tasks", verifyJWTToken, async (req, res) => {
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

app.get("/task/:id", verifyJWTToken, async (req, res) => {
  const id = req.params.id;
  const db = await connection();
  const collection = db.collection(collectionname);
  const result = await collection.findOne({ _id: new ObjectId(id) });
  if (result) {
    res.send({
      message: "task fetched fetched",
      success: true,
      data: result,
    });
  } else {
    res.send({
      message: "error in fetching ",
      success: false,
    });
  }
});

app.put("/updateTask", verifyJWTToken, async (req, res) => {
  const db = await connection();
  const collection = db.collection(collectionname);
  const { _id, ...rest } = req.body;
  const update = { $set: rest };
  const result = await collection.updateOne({ _id: new ObjectId(_id) }, update);

  if (result) {
    res.send({
      message: "task uodated",
      success: true,
      data: result,
    });
  } else {
    res.send({
      message: "try after some time ",
      success: false,
    });
  }
});

app.delete("/delete/:id", verifyJWTToken, async (req, res) => {
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

app.delete("/delete-multiple", verifyJWTToken, async (req, res) => {
  const ids = req.body;
  console.log(ids);
  const deleteTaskIds = ids.map((item) => new ObjectId(item));
  const db = await connection();
  const collection = db.collection(collectionname);
  const result = await collection.deleteMany({ _id: { $in: deleteTaskIds } });
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

function verifyJWTToken(req, res, next) {
  // console.log("verifyJWTToken", req.cookies["token"]);
  const token = req.cookies["token"];
  jwt.verify(token, "Google", (error, decoded) => {
    if (error) {
      return res.send({
        msg: "invalid Token",
        success: false,
      });
    }
    next();
  });
}

app.listen(3200);
