import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleroutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/vi/post", postRoutes);
app.use("/api/vi/dalle", dalleRoutes);

app.get("/", async (req, res) => {
  res.send("Hello from DALL-E AI  API");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () =>
      console.log("Server has started on port http://localhost:8080")
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
