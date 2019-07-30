/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "tutoriald",
    descritption: "just some shitwf",
    author: "Mrinmoy",
    data: { name: "Sudhakar", age: 25 },
  },
  plugins: [`gatsby-plugin-sass`, `gatsby-plugin-styled-components`],
}
