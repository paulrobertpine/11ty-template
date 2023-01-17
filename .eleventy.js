// see https://dev.to/giulia_chiola/add-html-classes-to-11ty-markdown-content-18ic
const markdownIt = require("markdown-it")
const markdownItAttrs = require("markdown-it-attrs")

const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: true,
}

const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs)

module.exports = function (config) {
  config.setLibrary("md", markdownLib)
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
