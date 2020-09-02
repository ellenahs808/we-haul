if (process.env.NODE_ENV === "production") {
  module.exports = require("./keys_prod_front");
} else {
  module.exports = require("./keys_dev_front");
}
