const { CityService } = require("../services/index");

const cityService = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      sucess: true,
      message: "sucessfully created a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      sucess: false,
      message: "not able to create a city",
      err: error,
    });
  }
};
// delete - /city/:id
const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: response,
      sucess: true,
      message: "sucessfully deleted a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      sucess: false,
      message: "not able to delete the city",
      err: error,
    });
  }
};
// Get - /city/:id
const get = async (req, res) => {
  try {
    const response = await cityService.getCity(req.params.id);
    return res.status(200).json({
      data: response,
      sucess: true,
      message: "sucessfully fetch a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      sucess: false,
      message: "not able to get the city",
      err: error,
    });
  }
};
// patch - /city/:id
const update = async (req, res) => {
  try {
    const response = await cityService.updateCity(req.params.id, req.body);
    return res.status(200).json({
      data: response,
      sucess: true,
      message: "sucessfully update the city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      sucess: false,
      message: "not able to update the city",
      err: error,
    });
  }
};

module.exports = { create, destroy, get, update };
