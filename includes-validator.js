const libphone = require('libphonenumber-js');

const includes = {};

includes.phoneRegxs = [/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/];

includes.emailRegxs = [/[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_.]+/];


includes.number = (data, { countries } = { countries: ['US', 'IN'] }) => {
  // List of ISO country codes: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2

  let exists = false;
  includes.phoneRegxs.forEach((regx) => {
    exists = regx.test(data);
  });
  countries.forEach((countryCode) => {
    const len = libphone.findNumbers(data, countryCode, { v2: true }).length;
    if (len > 0) {
      exists = true;
    }
  });
  return exists;
};


includes.email = (data) => {
  let exists = false;
  includes.emailRegxs.forEach((regx) => {
    exists = regx.test(data);
  });
  return exists;
};


// Export the Includes object for **Node.js**, with
// backwards-compatibility for their old module API.
if (typeof module !== 'undefined' && module.exports) {
  exports = includes;
  module.exports = includes;
} else {
  exports.includes = includes;
}
