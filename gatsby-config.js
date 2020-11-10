/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Carrigtwohill Baptist Group`,
    siteUrl: `https://carrigtwohillbaptist.ie/`,
    description: ``, // TODO
    author: ``, // TODO
  },
  plugins: [
      `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
