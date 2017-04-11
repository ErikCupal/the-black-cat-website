const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

const server = (debug) => ({

  target: 'node',

  entry: [
    './src/server/index.tsx',
  ],

  output: {
    filename: 'server.js',
    path: debug
      ? path.resolve(__dirname, './build/development/')
      : path.resolve(__dirname, './build/production/')
  },

  devtool: 'source-map',

  externals: [nodeExternals()],

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: ['node_modules'],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'imports-loader?React=react'
          },
          {
            loader: 'babel-loader',
            options: {
              "plugins": [
                // ES Next
                "babel-plugin-syntax-trailing-function-commas",
                "babel-plugin-transform-class-properties",
                "babel-plugin-transform-export-extensions",
                "babel-plugin-transform-object-rest-spread",
                // React
                "babel-plugin-syntax-jsx",
                "babel-plugin-transform-react-jsx",
                "babel-plugin-transform-react-display-name"
              ]
            }
          },
          {
            loader: 'ts-loader'
          }
        ]
      },
    ]
  },

  plugins: debug
    ? []
    : [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      })
    ]
})

const client = () => ({
  entry: [
    'babel-polyfill',
    './src/client/index.tsx',
  ],

  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build/production/')
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'imports-loader?React=react'
          },
          {
            loader: 'babel-loader',
            options: {
              'presets': [
                [
                  'latest',
                  {
                    'modules': false
                  }
                ],
                'stage-0',
                'react'
              ]
            }
          },
          {
            loader: 'ts-loader'
          }
        ]
      },
    ]
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: ['node_modules'],
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    })
  ],
})

const getDevelopment = () => server(true)

const getProduction = () => ([
  server(false),
  client(),
])

module.exports = (env = {}) => {
  const debug = env.NODE_ENV !== 'production'

  switch (debug) {
    case false:
      return getProduction()
    default:
      return getDevelopment()
  }
}