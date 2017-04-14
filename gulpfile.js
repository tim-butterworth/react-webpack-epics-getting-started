var _ = require('lodash');
var gulp = require('gulp');
var webpack = require('webpack-stream');
var jasmineBrowser = require('gulp-jasmine-browser');
var webpackConfig = require('./webpack.config.js')
var debug = require('gulp-debug');
var connect = require('gulp-connect')

gulp.task('webpack', function() {
    return gulp.src('src/entry.js')
	.pipe(webpack(webpackConfig))
	.pipe(gulp.dest('./dist'));
});


gulp.task('watch', function() {
    return gulp.watch(['src/entry.js'], ['webpack'])
});

gulp.task('webserver', function() {
  connect.server({
      livereload: true,
      root: 'dist',
      port: 3001
  });
});

gulp.task('test', function() {
    var JasminePlugin = require('gulp-jasmine-browser/webpack/jasmine-plugin');
    var plugin = new JasminePlugin();
    
    return gulp.src(['spec/**/*.js'])
	.pipe(webpack(_.merge(
	    _.omit(webpackConfig, ["output", "entry"]),
	    {watch: true, output: {filename: 'spec.js'}, plugins: [plugin]}
	)))
	.pipe(jasmineBrowser.specRunner())
	.pipe(jasmineBrowser.server({whenReady: plugin.whenReady}));
});

gulp.task('default', ['webpack']);
gulp.task('dev', ['webpack', 'webserver', 'watch']);
