const yaml = require("js-yaml");

// enable yaml, necessary for for netlify cms admin
module.exports = eleventyConfig => {
    eleventyConfig.addDataExtension("yaml", contents => yaml.safeLoad(contents));
  };