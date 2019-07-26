var webpackConfig = require('./build/webpack.dev.js')

module.exports = function(config) {
	config.set({
		frameworks: ['mocha'],

		files: ['tests/**/*.spec.js'],

		preprocessors: {
			'**/*.spec.js': ['webpack', 'sourcemap']
		},

		webpack: webpackConfig,

		reporters: ['spec', 'coverage'],

		coverageReporter: {
			dir: './coverage',
			reporters: [{ type: 'lcov', subdir: '.' }, { type: 'text-summary' }]
		},

		browsers: ['ChromeHeadless']
	})
}
