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
    NEXT_PUBLIC_API_BASE_URL : process.env.NEXT_PUBLIC_API_BASE_URL
  },
  env : {
    clientId: process.env.NODE_ENV === 'production' ? process.env.CLIENT_ID_PROD  : process.env.CLIENT_ID_DEV,
    API_BASE_URL: process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_PROD_API_BASE_URL  : process.env.NEXT_PUBLIC_API_BASE_URL
  }
  
});
