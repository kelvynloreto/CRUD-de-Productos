const express = require("express");
const db = require("./tools/database");
const initModels = require("./models/initModels");
const { port } = require("./config");
const productsRouter = require('./products/products.router')


const app = express();

app.use(express.json());

db.authenticate()
  .then(() => console.log("Database authentication succesfully"))
  .catch((err) => console.log(err));

db.sync()
  .then(() => console.log("Database synced"))
  .catch((err) => console.log(err));

initModels();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server OK" });
});

app.use('/products' , productsRouter)
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
