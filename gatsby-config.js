/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "theWebre",
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/austinwebre`,
      },
      {
        name: `Github`,
        url: `https://github.com/awebre`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        // basePath defaults to `/`
        basePath: `/blog`,
      },
    },
    {
      resolve: `gatsby-theme-material-ui`,
    },
  ],
}
