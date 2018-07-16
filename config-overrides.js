const {rewireWorkboxGenerate} = require('react-app-rewire-workbox');
const path = require('path');

module.exports = function override(config, env) {
  if (env === "production") {
    console.log("Production build - Adding Workbox for PWAs");
    // Extend the default injection config with required swSrc
    config = rewireWorkboxGenerate()(config, env);
  }

  return config;
};