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
					'dist/source/app.js': 'app/scripts/app.js'
				}
			}
		}
	});
};