module.exports = function(grunt) {   
 
	grunt.loadNpmTasks('grunt-tslint'); 
	   
	grunt.config('tslint', {
		'options': {    
			'configuration': 'tslint.json',
            'force': true,
            'fix' : false
        },
		'files': {
			'src': [
                "src/app.ts"
            ]
		}  
	});
};