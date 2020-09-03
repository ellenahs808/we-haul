const Validator = require('validator');
const validText = require('./valid-text');


module.exports = function validateJobInput(dat) {
  const errors = {};
  const data = { ...dat }; // Clone so we don't manipulate arguments

  data.type = validText(data.type) ? data.type : '';
  data.body = validText(data.body) ? data.body : '';
  data.startAddress = validText(data.startAddress) ? data.startAddress : '';
  data.endAddress = validText(data.endAddress) ? data.endAddress : "";
  data.details = validText(data.details) ? data.details : '';

  if (Validator.isEmpty(data.type)) {
    errors.text = 'Please select a vehicle type.';
  }

  if (Validator.isEmpty(data.details)) {
    errors.text = 'Request detail is required.';
  }

  if (!Validator.isLength(data.details, { min: 15, max: 200 })) {
    errors.text = 'Request moving detail should be at least 15 characters.';
  }

  // if (Validator.isEmpty(data.startAddress)) {
  //   errors.text = 'Start address is required.';
  // }

  //  if (Validator.isEmpty(data.endAddress)) {
  //    errors.text = "Destination address is required.";
  //  }

  if (Validator.isEmpty(data.details)) {
    errors.text = 'Moving details are required.';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};