import  mongoose from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config()
import express from "express";
import userRoutes from "./routes/user.js";
const connectionParams = {
  useNewUrlParser:true,
  useUnifiedTopology:true
}

mongoose.connect(process.env.DATABASE_URL,connectionParams)
.then(()=>{
  console.log('Connection Created')
}).catch((err)=>console.log('no connection'))


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.get("/", (req, res) => {
  res.json("Hello World");
});
app.use("/user/", userRoutes);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
