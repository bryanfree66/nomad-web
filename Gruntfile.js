module.exports = function(grunt){
	grunt.loadTasks('tasks');
	
	grunt.registerTask("default", ["babel", "uglify"]);
}