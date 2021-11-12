const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const webpack = require("webpack");
const path = require("path");
const withVideos = require('next-videos')

module.exports = withVideos();
module.exports = withPlugins([[withSass], [withImages], [withCSS]], {
  webpack(config, { isServer, webpack }) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
  serverRuntimeConfig: {
    API_BASE : process.env.REACT_APP_API_BASE_URL
  },
  publicRuntimeConfig: {
    API_BASE : process.env.REACT_APP_API_BASE_URL,
    NEXT_PUBLIC_API_BASE_URL : process.env.NEXT_PUBLIC_API_BASE_URL,
    clientId: process.env.NODE_ENV === 'production' ? process.env.CLIENT_ID_PROD  : process.env.CLIENT_ID_DEV,
    API_BASE_URL: process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_PROD_API_BASE_URL  : process.env.NEXT_PUBLIC_API_BASE_URL,
    ENV : process.env.NODE_ENV,
    PAYPAL_CLIENT_ID :process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
  },
  env : {
    clientId: process.env.NODE_ENV === 'production' ? process.env.CLIENT_ID_PROD  : process.env.CLIENT_ID_DEV,
    API_BASE_URL: process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_PROD_API_BASE_URL  : process.env.NEXT_PUBLIC_API_BASE_URL
  }
  
});
