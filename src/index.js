const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const ApiRoutes = require("./routes/index");

const setupAndStartService = async () => {
  // create the express objects
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", ApiRoutes);
  //const PORT = 3000;

  app.listen(PORT, async () => {
    console.log(`server started at ${PORT}`);
  });
};
setupAndStartService();
