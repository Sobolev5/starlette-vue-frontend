var webpack = require('webpack');

module.exports = {
  productionSourceMap: false,
	configureWebpack: {
		plugins: [
			new webpack.ProvidePlugin({
				$: "jquery",
				jQuery: "jquery",
				'window.jQuery': 'jquery',
			})
		],
	},	
  devServer: {
    disableHostCheck: true,
		port: 8080,
  },

}