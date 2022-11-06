const weatherApi = require('../services/openweathermapServiceAPI');
exports.index = async (req, res) => {
  res.send(await weatherApi.getWeather());
};
exports.show = async (req, res) => {};
exports.store = async (req, res) => {};
exports.update = async (req, res) => {};
exports.delete = async (req, res) => {};
