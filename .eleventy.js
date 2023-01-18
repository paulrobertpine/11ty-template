// see https://dev.to/giulia_chiola/add-html-classes-to-11ty-markdown-content-18ic
const markdownIt = require("markdown-it")
const markdownItAttrs = require("markdown-it-attrs")

const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: true,
}

const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs)

module.exports = function (eleventyConfig) {
  eleventyConfig.setLibrary("md", markdownLib)
  eleventyConfig.addWatchTarget("./src/sass")
  eleventyConfig.addPassthroughCopy("./src/css")
  eleventyConfig.addPassthroughCopy("./src/img")
  eleventyConfig.addPassthroughCopy({
    "./node_modules/alpinejs/dist/cdn.js": "./js/alpine.js",
  })

  return {
    // pathPrefix: "/public/",
    dir: {
      input: "src",
      output: "public",
    },
  }
}
