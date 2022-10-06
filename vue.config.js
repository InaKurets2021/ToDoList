module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  filenameHashing: true,
  productionSourceMap: false,
};