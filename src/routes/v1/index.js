const express = require("express");
const CityController = require("../../controllers/city-controller");

const router = express.Router();
router.post("/city", CityController.create);
route.delete("/city/:id", CityController.destroy);
route.get("/city/:id", CityController.get);
route.patch("/city/:id", CityController.update);
module.exports = router;
