const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");

const setupAndStartService = async () => {
  // create the express objects
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  const PORT = 3000;

  app.listen(PORT, async () => {
    console.log(`server started at ${PORT}`);
  });
};
setupAndStartService();
