var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry:'./client/main',
	output:{
		path:path.join(__dirname,'static'),
		filename:'bundle.js'
	},
	module:{
		loaders:[
			  {
        test: /\.js$/,
        loaders: ['babel-loader?presets[]=es2015&presets[]=react'],
        include: path.join(__dirname,'client')
      }
		]
	}
}