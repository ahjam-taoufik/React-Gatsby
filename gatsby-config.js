/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    
  ],
 siteMetadata :{
   title : 'web site aljiwar ',
   description : 'this is site web for Association ALJIWAR',
   copyright: 'copyright 2022 aljiwar'
 }


}
