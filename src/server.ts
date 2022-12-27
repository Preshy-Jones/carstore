import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose, { ConnectOptions } from "mongoose";
import { errorHandler, notFoundHandler } from "./middlewares";
import corsOptions from "./config/corsOptions";
import cors from "cors"
const app = express();


dotenv.config();



app.use(cors(corsOptions));
app.use(express.json());



app.use(notFoundHandler);
app.use(errorHandler);


app.use("/", require("./routes"));




const mongooseConnect = async () => {
  // console.log(process.env.DB_CONNECT);

  try {
    await mongoose.connect(process.env.DB_CONNECT!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    } as ConnectOptions);
    console.log("connected to mongodb");
  } catch (error) {
    console.log(error);
  }
};

mongooseConnect();

const port = process.env.PORT || 8008;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
