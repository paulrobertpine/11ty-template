module.exports = function (config) {
  config.addWatchTarget("./src/sass")
  config.addPassthroughCopy("./src/css")
  config.addPassthroughCopy("./src/img")
  config.addPassthroughCopy({
    "./node_modules/alpinejs/dist/cdn.js": "./js/alpine.js",
  })

  return {
    dir: {
      input: "src",
      output: "public",
    },
  }
}
