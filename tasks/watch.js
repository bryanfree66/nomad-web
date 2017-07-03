module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.config('watch', {
        'js': {
            'files': [
                'src/**/*.js'
            ],
            'tasks': ['jshint'],
            'options': {
                'spawn': true
            }
        }
    });

};