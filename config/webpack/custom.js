const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: [
	        MiniCssExtractPlugin.loader,
	        "style-loader",
	        "css-loader"
	       ]
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader:"file-loader",
        options:{
          name:'[name].[ext]',
          outputPath:'assets/images/'
          //the images will be emited to dist/assets/images/ folder
        }
      }    
    ],
  }
}