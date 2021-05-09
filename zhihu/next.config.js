const path = require("path");
const WorkboxPlugin = require("workbox-webpack-plugin");

const publicPath = path.join(__dirname, "public");

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new WorkboxPlugin.GenerateSW({
        swDest: path.join(publicPath, "service-worker"),
        maximumFileSizeToCacheInBytes: 2097152 * 10,
        modifyURLPrefix: {
          "static/": "_next/static/",
          "public/": "/",
        },
        exclude: [
          "build-manifest.json",
          "react-loadable-manifest.json",
          "pages/*",
          "pages/index.js",
          "pages/[id].js",
          "pages/me.js",
          "pages/api/feeds.js",
          "pages/api/getData.js",
          "pages/_app.js",
          "pages/_document.js",
          "pages/_error.js",
          "init-server.js.js",
          "on-error-server.js.js",
          "pages-manifest",
          "font-manifest",
          "init-server.js",
        ],
        runtimeCaching: [
          {
            urlPattern: /^https?.*/,
            handler: "NetworkFirst",
            options: {
              cacheName: "offlineCache",
              expiration: {
                maxEntries: 200,
              },
            },
          },
        ],
        clientsClaim: true,
        skipWaiting: true,
        cleanupOutdatedCaches: true,
      })
    );

    return config;
  },
};
