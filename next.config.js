const fetch = require('isomorphic-unfetch');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

module.exports = withCSS(
  withSass({
    // 用于export静态页面
    exportTrailingSlash: true,
    exportPathMap: async function() {
      const paths = {
        '/': { page: '/' },
        '/about': { page: '/about' }
      };
      const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
      const data = await res.json();
      const shows = data.map(entry => entry.show);

      shows.forEach(show => {
        paths[`/show/${show.id}`] = {
          page: '/show/[id]',
          query: { id: show.id }
        };
      });

      return paths;
    },
    // scss 配置
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 2,
      localIdentName: '[name]__[local]__[hash:base64:5]'
    }
  })
);
