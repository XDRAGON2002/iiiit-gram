import express from "express";
import userRoutes from "./routes/user.js";

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
