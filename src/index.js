const express = require("express");
const { PORT } = require("./config/serverConfig");
require("dotenv").config();

const setupAndStartService = async () => {
  //
  const app = express();
  const PORT = 3000;

  app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
    console.log(process.env);
  });
};
setupAndStartService();
