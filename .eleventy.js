module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");

  // photos
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("src/fonts");
  // eleventyConfig.addCollection("photos", function (collection) {
  //   return collection.getFilteredByGlob("photos/*.jpg"); // Adjust the glob pattern as needed
  // });
  return {
    dir: {
      output: "docs"
    }
  }

};