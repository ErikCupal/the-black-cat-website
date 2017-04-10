import { Configuration } from 'webpack'
import webpack from 'webpack'

export const publicPath = '/js/'

const config: Configuration = {

  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    'babel-polyfill',

    './src/client/index.tsx',
  ],

  output: {
    filename: 'app.js',
    publicPath,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'imports-loader?React=react',
          },
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  'latest',
                  {
                    modules: false,
                  },
                ],
                'stage-0',
                'react',
              ],
              plugins: [
                'react-hot-loader/babel',
              ],
            },
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: ['node_modules'],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  devtool: 'eval-source-map',
}

export default config