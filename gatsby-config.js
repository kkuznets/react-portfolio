require('dotenv').config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    title: 'Kirill Kuznetsov',
    subtitle: 'Full stack developer.',
    email: 'hello@kkuznets.dev',
    copyright:
      'Build with <a target="_blank" rel="noopener noreferrer" href="https://www.gatsbyjs.org/">GatsbyJS</a> and <a target="_blank" rel="noopener noreferrer" href="https://wordpress.org/">WordPress</a>. The code is open source and available at <a target="_blank" rel="noopener noreferrer" href="https://github.com/kkuznets/react-portfolio">Github</a>.',
    siteUrl: 'https://camiloholguin.me',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-sass',
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'camiloholguin.live',
        protocol: 'https',
        hostingWPCOM: false,
        auth: {
          jwt_user: process.env.JWT_USER,
          jwt_pass: process.env.JWT_PASSWORD,
        },
        verboseOutput: false,
        cuncurrentRequest: 10,
        useACF: true,
        acfOptionPageIds: [],
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: 'tomato',
        showSpinner: true,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Portfolio',
        short_name: 'Portfolio',
        start_url: '/',
        background_color: '#f1404b',
        theme_color: '#f1404b',
        display: 'minimal-ui',
        icon: 'src/icons/icon-196x196.png',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
  ],
};
