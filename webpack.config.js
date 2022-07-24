// https://dev.to/kazushikonosu/use-webpack-with-hugo-to-manage-assets-for-your-static-website-2172

const DISTDIR = 'assets/dist'
const path = require('path')
const cssnano = require('cssnano')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')

module.exports = env => {
  const isProduction = Boolean(env && env.production)
  console.log('Production: ', isProduction)

  return {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    entry: path.resolve(__dirname, 'src/js/bundle.js'),
    output: {
      path: path.resolve(__dirname, 'static/'),
      filename: `${DISTDIR}/${isProduction ? '[contenthash].' : ''}bundle.js`,
      publicPath: '/'
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: `${DISTDIR}/${isProduction ? '[contenthash].' : ''}bundle.css`
      }),
      new WebpackManifestPlugin({
        fileName: '../data/manifest.json'
      })
    ],
    devServer: {
      port: 1314,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                sourceMap: !isProduction
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: !isProduction,
                postcssOptions: isProduction ? {
                  plugins: [
                    cssnano()
                    // autoprefixer({ grid: true })
                  ]
                } : {}
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: !isProduction
              }
            }
          ]
        },
        {
          test: /\.(svg|ttf|woff|woff2|eot)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: `${DISTDIR}/fonts/`,
                sourceMap: !isProduction
              }
            }
          ]
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: `${DISTDIR}/`,
                sourceMap: !isProduction
              }
            }
          ]
        }
      ]
    }
  }
}
