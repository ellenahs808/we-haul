const axios = require("axios");
const { googleMapsKey } = require("../frontend/src/config/keys");

module.exports = {
  parseAddress: (address1, address2) => {
    const startAddr = address1.split(" ").join("+");
    const endAddr = address2.split(" ").join("+");

    return axios.get(
      `https://maps.googleapis.com/maps/api/directions/json?origin=${startAddr}&destination=${endAddr}&key=${googleMapsKey}`
    );
  },
};
