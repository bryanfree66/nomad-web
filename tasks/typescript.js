module.exports = function(grunt) {   
 
	grunt.loadNpmTasks('grunt-typescript');
	   
	grunt.config('typescript', {
        'base': {
            'src': 'src/typescript/**/*.ts',
            'dest': 'arc/scripts/',
            'options':{
                'module': 'amd',
                'target': 'es5',
                'basepath': 'src/typescript',
                'sourceMap': true,
                'declaration': true
            }
        }
    });
};