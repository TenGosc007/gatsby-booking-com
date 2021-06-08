module.exports = {
  siteMetadata: {
    title: "My Gatsby Site redux ts sass",
    description: "This is my site",
    icon: "src/assets/favicon.ico",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-sass",
    "react-multi-carousel",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `booking.com`,
        start_url: `/`,
        icon: `src/assets/favicon.png`,
      },
    },
    "moment",
  ],
};
