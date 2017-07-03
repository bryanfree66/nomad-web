module.exports = function(grunt) {   
 
	grunt.loadNpmTasks('grunt-typescript');
	   
	grunt.config('typescript', {
        'base': {
            'src': 'typescript/**/*.ts',
            'dest': '.',
            'options':{
                'module': 'amd',
                'target': 'es5',
                'basepath': 'typescript',
                'sourceMap': true,
                'declaration': true
            }
        }
    });
};