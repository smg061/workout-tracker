const express = require("express");
const path = require("path");
const app = express();
const routes = require("./controllers");
const PORT = process.env.PORT || 3001
const connectToDb = require("./config/mongoose");


app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);


const db = require('./models');


connectToDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server Listening on port ${PORT}`);
  });
});
