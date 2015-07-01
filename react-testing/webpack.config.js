var path = require('path'),
	fs = require('fs'),
	//webpackServersideBundlePlugin = require('./public/js/build/webpackServersideBundlePlugin'),
	statsDumpPlugin = require('./public/vendor/webpackStatsDumpPlugin'),
	//HtmlWebpackPlugin = require('html-webpack-plugin'),
	webpack = require('webpack');
	//ExtractTextPlugin = require('extract-text-webpack-plugin');

// var isProdBuild = process.argv.indexOf('-p') !== -1;
// console.log('isProdBuild ', isProdBuild);

// var defineEnvironmentVariables = new webpack.DefinePlugin( {
// 	__DEBUG__: JSON.stringify(!isProdBuild ? true : false),
// 	__RELEASE__: JSON.stringify(isProdBuild ? true : false),
// 	'process.env': { //this is for React!
// 		NODE_ENV: JSON.stringify(isProdBuild ? 'production' : 'debug')
// 	}
// });

/* use "eval-source-map" in dev for faster compiles */
var devtool = 'eval-source-map';
//devtool = "source-map";

try {
	fs.unlinkSync('./public/bundles/hot.js');
} catch (e) {/*yoshi: It is the Node Way to not check that a file exists, but to handle the error. */ }

module.exports = {
	entry: {
		// Start your entry points here		
		test: "./public/components/App.jsx",	
		specs: "./public/specs.js",
	},
	output: {
		path: './public/bundles',
		filename: '[name].bundle.js',
		publicPath: 'http://localhost:3000/public/bundles' //webpack dev server config
	},
	target: 'web',
	debug: true,
	devtool: devtool,
	resolve: {
		extensions: ['', '.jsx', '.webpack.js', '.web.js', '.js'],
		//modulesDirectories: ['bower_components', 'node_modules', 'vendor'],
		root: path.join(__dirname, './')
	},
	module: {
		preLoaders: [
			// { test: /\.js$/, exclude: /(bootstrap.config|node_modules)/, loader: "jshint-loader" }
		],
		loaders: [
			{ test: require.resolve('react'), loader: 'expose?React' },
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			{ test: /\.less$/, loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version", "iOS 7", "iOS 8", "Android 4"]}!less-loader'},
			{ test: /\.jsx$/, exclude: /(bootstrap.config|node_modules)/, loader: 'jsx-loader?harmony' },			
			{ test: /\.cshtml$/, exclude: /(bootstrap.config|node_modules)/, loader: 'jsx-loader?harmony' },
			{ test: /\.woff(2?)$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
			{ test: /\.(ttf|eot|svg)$/, loader: 'file-loader' },
			{ test: /\.png$/, loader: 'url-loader?mimetype=image/png' }
		]
	},
	plugins: [
		statsDumpPlugin
		//defineEnvironmentVariables,
		//webpackServersideBundlePlugin
	]
};