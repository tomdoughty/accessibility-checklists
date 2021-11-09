const pluginSass = require('eleventy-plugin-sass');
const pluginBabel = require('eleventy-plugin-babel');

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(pluginSass, {
    watch: 'src/assets/sass/main.scss',
  });

  eleventyConfig.addPlugin(pluginBabel, {
    outputDir: 'dist',
    uglify: true,
    watch: 'src/assets/javascript/main.js',
  });

  const getResponsibilitiesList = (collection) => [
    ...new Set(collection
      .getAll()
      .reduce((tags, item) => [...tags, ...item.data.responsibilities || []], [])
      .map(tag => tag.toLowerCase())
    )
  ]

  const getChecks = (collection) => collection
    .getAll()
    .filter((item) => Boolean(item.data.sc));

  eleventyConfig.addCollection('responsibilitiesList', (collection) => getResponsibilitiesList(collection));

  eleventyConfig.addCollection('responsibilities', (collection) => {
    const checks = getChecks(collection);
    const responsibilitiesList = getResponsibilitiesList(collection);
    return responsibilitiesList.reduce((responsibilities, key) => ({
      ...responsibilities,
      [key]: checks
        .filter((check) => check.data.responsibilities
          .map((responsibility) => responsibility.toLowerCase())
          .includes(key))
    }), {})
  });

  eleventyConfig.addCollection('checks', (collection) => getChecks(collection));

  eleventyConfig.addNunjucksFilter('joinData', (arr = []) => {
    try {
      return arr
        .map((str) => str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()))
        .join(', ')
    } catch (error) {
      return ''
    } 
  });

  eleventyConfig.addNunjucksFilter('console', (obj) => console.log(obj));

  return {
    dir: {
      includes: 'includes',
      input: 'src',
      output: 'dist',
    },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
  };
};
