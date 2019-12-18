const config = require("./data/config");

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription
  },
  plugins: [
    "gatsby-plugin-catch-links",
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts`
      }
    }
  ]
};
