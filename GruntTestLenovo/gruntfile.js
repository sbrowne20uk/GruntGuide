/// <binding AfterBuild='dev' />
/// YOUTUBE https://www.youtube.com/watch?v=JMkMTt2-pm0
/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Task
        uglify: {
            build: {
                src: 'src/js/*.js',
                dest: 'js/script.min.js'
            },
            dev: {
                options: {
                    beauty: true, // formats nicely to easy to read
                    mangle: false,
                    compress: false,
                    preserveComments: 'all'
                },
                src: 'src/js/*.js',
                dest: 'js/script.min.js'
            }
        },
        sass: {
            build: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'css/styles.css': 'src/scss/application.scss'
                }
            },
            dev: {
                options: {
                    outputStyle: 'expanded'
                },
                files: {
                    'css/styles.css': 'src/scss/application.scss'
                }
            }
        },
        watch: {
            js: {
                files: ['src/js/*.js'],
                tasks : ['uglify:dev']
            },
            css: {
                files: ['src/scss/**/*.scss'],
                tasks: ['sass:dev']
            }
        }
    });

    //
    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');
    // Need this first in CMD: C:\Users\steve\Documents\Visual Studio 2015\Projects\GruntTestLenovo\GruntTestLenovo>npm install grunt-contrib-watch --save-dev
    grunt.loadNpmTasks('grunt-contrib-watch');// Will update the css file automatically when scss changes 36 mins

    // Register task(s)
    grunt.registerTask('default', ['uglify:build', 'sass:dev']); // When type Grunt in CMD (C:\Users\steve\Documents\Visual Studio 2015\Projects\GruntTestLenovo\GruntTestLenovo>grunt)
    grunt.registerTask('build', ['uglify:build']); // CMD (C:\Users\steve\Documents\Visual Studio 2015\Projects\GruntTestLenovo\GruntTestLenovo>grunt build)
    grunt.registerTask('dev', ['uglify:dev']);

};

// For Sass need to install the plugin  C:\Users\steve\Documents\Visual Studio 2015\Projects\GruntTestLenovo\GruntTestLenovo>npm install grunt-sass --save-dev ....which will add dependency in packages.json