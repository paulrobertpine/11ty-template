module.exports = function (config) {
  config.addWatchTarget("./src/sass")
  config.addPassthroughCopy("./src/css")
  config.addPassthroughCopy("./src/img")

  return {
    dir: {
      input: "src",
      output: "public",
    },
  }
}
