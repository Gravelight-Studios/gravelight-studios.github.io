/**
 * Add Eleventy collections here
 * https://www.11ty.dev/docs/collections/
*/

export default {

  /**
   * Pages
   */
  pages: async function (eleventyConfig) {
    eleventyConfig.addCollection("pages", function(collectionApi) {
      return collectionApi.getFilteredByGlob("src/content/pages/**/*.md");
    });
  },

  /**
   * Projects
   */
  projects: async function (eleventyConfig) {
    eleventyConfig.addCollection("projects", function(collectionApi) {
      return collectionApi.getFilteredByGlob("src/content/projects/**/*.md");
    });
  }
}
