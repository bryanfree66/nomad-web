module.exports = function(grunt) {   
 
	grunt.loadNpmTasks('grunt-babel');

	grunt.initConfig({
		babel: {
			options: {
				sourceMap: true,
				presets: ['es2015']
			},
			dist: {
				files: {
					'dist/index.js': 'src/index.js'
				}
			}
		}
	});
};