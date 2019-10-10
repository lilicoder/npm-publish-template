"use strict";

const path = require("path");
const getCSSModuleLocalIdent = require("react-dev-utils/getCSSModuleLocalIdent");
const postcssNormalize = require("postcss-normalize");

// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

// This is the production and development configuration.
// It is focused on developer experience, fast rebuilds, and a minimal bundle.
module.exports = function(webpackEnv) {
  const getStyleLoaders = (cssOptions, preProcessor) => {
    const loaders = [
      require.resolve("style-loader"),
      {
        loader: require.resolve("css-loader"),
        options: cssOptions
      },
      {
        loader: require.resolve("postcss-loader"),
        options: {
          ident: "postcss",
          plugins: () => [
            require("postcss-flexbugs-fixes"),
            require("postcss-preset-env")({
              autoprefixer: {
                flexbox: "no-2009"
              },
              stage: 3
            }),
            postcssNormalize()
          ],
          sourceMap: false
        }
      }
    ].filter(Boolean);
    if (preProcessor) {
      loaders.push(
        {
          loader: require.resolve("resolve-url-loader"),
          options: {
            sourceMap: false
          }
        },
        {
          loader: require.resolve(preProcessor),
          options: {
            sourceMap: false
          }
        }
      );
    }
    return loaders;
  };
  return {
    entry: { index: "./src/components/index.js" },
    output: {
      path: path.resolve(__dirname, "publish"),
      filename: "card.js"
    },
    module: {
      strictExportPresence: true,
      rules: [
        { parser: { requireEnsure: false } },
        {
          oneOf: [
            {
              test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
              loader: require.resolve("url-loader"),
              options: {
                limit: 10000,
                name: "static/media/[name].[hash:8].[ext]"
              }
            },
            {
              test: /\.(js|mjs|jsx|ts|tsx)$/,
              loader: require.resolve("babel-loader"),
              options: {
                customize: require.resolve(
                  "babel-preset-react-app/webpack-overrides"
                ),

                plugins: [
                  [
                    require.resolve("babel-plugin-named-asset-import"),
                    {
                      loaderMap: {
                        svg: {
                          ReactComponent:
                            "@svgr/webpack?-svgo,+titleProp,+ref![path]"
                        }
                      }
                    }
                  ]
                ],
                cacheDirectory: true,
                cacheCompression: false,
                compact: true
              }
            },
            {
              test: cssRegex,
              exclude: cssModuleRegex,
              use: getStyleLoaders({
                importLoaders: 1,
                sourceMap: false
              }),
              sideEffects: true
            },
            {
              test: cssModuleRegex,
              use: getStyleLoaders({
                importLoaders: 1,
                sourceMap: false,
                modules: true,
                getLocalIdent: getCSSModuleLocalIdent
              })
            },

            {
              test: lessRegex,
              exclude: lessModuleRegex,
              use: getStyleLoaders(
                {
                  importLoaders: 2,
                  sourceMap: false
                },
                "less-loader"
              ),
              sideEffects: true
            },
            // Adds support for CSS Modules, but using SASS
            // using the extension .module.scss or .module.sass
            {
              test: lessModuleRegex,
              use: getStyleLoaders(
                {
                  importLoaders: 2,
                  sourceMap: false,
                  modules: true,
                  getLocalIdent: getCSSModuleLocalIdent
                },
                "less-loader"
              )
            },
            {
              loader: require.resolve("file-loader"),
              exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
              options: {
                name: "static/media/[name].[hash:8].[ext]"
              }
            }
          ]
        }
      ]
    }
  };
};
