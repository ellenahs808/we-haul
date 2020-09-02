const axios = require("axios");
const { googleMapsKey } = require("../frontend/src/config/keys_dev_front");

module.exports = {
  parseAddress: (address) => {
    const addr = address.split(" ").join("+");

    return axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${addr}&key=${googleMapsKey}`
    );
  },
};
