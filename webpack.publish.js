"use strict";

const path = require("path");

var fs = require("fs");
const getCSSModuleLocalIdent = require("react-dev-utils/getCSSModuleLocalIdent");
const postcssNormalize = require("postcss-normalize");
// const webpack = require("webpack");
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

var nodeModules = {};
//过滤node_modules中的所有模块
fs.readdirSync("node_modules")
  .filter(function(x) {
    return [".bin"].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = "commonjs " + mod;
  });

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
    mode: "production",
    entry: {
      index: "./publish.js"
      // vendor: ["react", "react-dom", "react-router"]
    },
    output: {
      path: path.resolve(__dirname, "publish"),
      filename: "[name].js",
      chunkFilename: "[name].bundle.js",
      library: "iot",
      libraryTarget: "commonjs2"
    },
    module: {
      strictExportPresence: true,
      rules: [
        { parser: { requireEnsure: false } },
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          enforce: "pre",
          use: [
            {
              options: {
                cache: true,
                formatter: require.resolve("react-dev-utils/eslintFormatter"),
                eslintPath: require.resolve("eslint"),
                resolvePluginsRelativeTo: __dirname
              },
              loader: require.resolve("eslint-loader")
            }
          ]
        },
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
              test: /\.(js|mjs)$/,
              exclude: /@babel(?:\/|\\{1,2})runtime/,
              loader: require.resolve("babel-loader"),
              options: {
                babelrc: false,
                configFile: false,
                compact: false,
                presets: [
                  [
                    require.resolve("babel-preset-react-app/dependencies"),
                    { helpers: true }
                  ]
                ],
                cacheDirectory: true,
                cacheCompression: false,
                sourceMaps: false
              }
            },
            {
              test: cssRegex,
              exclude: cssModuleRegex,
              use: getStyleLoaders({
                importLoaders: 1,
                sourceMap: false
              })
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
              )
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
    },
    externals: nodeModules
    // optimization: {
    //   splitChunks: {
    //     cacheGroups: {
    //       vendor: {
    //         test: /[\\/]node_modules[\\/]/,
    //         name: "vendors",
    //         chunks: "all"
    //       }
    //     }
    //   }
    // },
    // externals: [
    //   "react",
    //   "react-dom",
    //   "react-router",
    //   "tinper-bee",
    //   "rc-form",
    //   "react-beautiful-dnd"
    // ]
  };
};
