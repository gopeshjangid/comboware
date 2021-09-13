const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const webpack = require("webpack");
const path = require("path");

module.exports = withPlugins([[withSass], [withImages], [withCSS]], {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
  serverRuntimeConfig: {
    API_BASE : process.env.REACT_APP_API_BASE_URL
  },
  publicRuntimeConfig: {
    API_BASE : process.env.REACT_APP_API_BASE_URL,
    NEXT_PUBLIC_API_BASE_URL : process.env.NEXT_PUBLIC_API_BASE_URL,
    clientId: "1077191744235-vvnii937rft8kf0j69dde29o0ngtm7a3.apps.googleusercontent.com"
  },
  
});
