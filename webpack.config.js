module.exports = {
    output: {
	filename: 'index.js',
	path: __dirname + '/dist'
    },
    module: {
	loaders: [
	    {
		test: /.jsx?$/,
		loader: 'babel-loader',
		exclude: /node_modules/,
		query: {
		    presets: ['es2015', 'react']
		}
	    }
	]
    }
}
