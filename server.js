import "dotenv/config";
import express from "express";
const app = express();
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

const PORT = process.env.PORT || 8000;

// middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// mongodb connect
import { dbConnect } from "./src/config/dbConfig.js";
dbConnect();

// routers
import adminRouter from "./src/routes/adminRouter.js";

app.use("/api/v1/admin", adminRouter);

app.get("/", (req, res) => {
  res.json({
    message: "you have reached the admin api",
  });
});

// error handling
app.get("/", (err, req, res, next) => {
  console.log(err);

  res.status(err.status || 500);
  res.json({
    status: "error",
    message: err.message,
  });
});

// bound app with the port to serve on internet
app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Server is running on PORT - ${PORT}`);
});
