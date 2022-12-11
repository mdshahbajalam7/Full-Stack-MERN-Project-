import express from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

// all routes there
import PostRoutes from "./routes/post.js";

const app = express();

app.use(bodyparser.json({ limit: "30mb", extended: true }));
app.use(bodyparser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.use("/posts", PostRoutes);

// mongodb+srv://Chand700:<password>@cluster0.6idzork.mongodb.net/?retryWrites=true&w=majority
const CONNECTION_URL =
// "mongodb+srv://Chand700:Alam700@cluster0.6idzork.mongodb.net/?retryWrites=true&w=majority"
// "mongodb+srv://Chand700:Alam700@cluster0.6idzork.mongodb.net/?retryWrites=true&w=majority"
"mongodb+srv://Chand700:Alam700@cluster0.ye4oon3.mongodb.net/Doctor?retryWrites=true&w=majority"
// "mongodb+srv://mdshahbajalam:mdshahbajalam700@cluster0.6idzork.mongodb.net/?retryWrites=true&w=majority"
//   "mongodb+srv://mdshahbajalam:mdshahbajalam700@cluster0.ye4oon3.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
        console.log("connection successfully");
      console.log(`server running on port  ${PORT}`);
    })
  )
  .catch((err) => console.log(err));
// mongoose.set("strictQuery", false);
// mongoose.set("useFindAndModify", false);
