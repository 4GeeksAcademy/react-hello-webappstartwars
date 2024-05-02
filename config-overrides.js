const { override, addWebpackModuleRule } = require('customize-cra');
module.exports = override(
  addWebpackModuleRule({
    test: /\.(mp3)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'audio/',
        },
      },
    ],
  })
);