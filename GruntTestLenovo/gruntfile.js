/// YOUTUBE https://www.youtube.com/watch?v=JMkMTt2-pm0

https://www.youtube.com/watch?v=JMkMTt2-pm0
/****************************************************
    Steps to use Grunt: Grunt does things like concatinating js and css files, minimises

--Install node.js (https://nodejs.org) - javascript runtime, npm (node package manager) is installed aswell which lets you insyall other packages which work with node
--Install grunt-cli : Do this by npm install -g grunt-cli (any path in cmd, the -g means global)
--Create package.json - This will be installed in every project this is node thing not a grunt thing, it has all the dependencies, to create this, CD in cmd to your root project directory and type 'npm init', type in the various options, only name (dont use grunt!),version, desc essential
--Install grunt - npm install grunt --save-dev (in cmd project root level again), will update package.json with dependency, this also adds the node_modules folder (do not touch this)
--Install plugins
--Create gruntfile.js file - right click in VS project > add new Item > Grunt configuration file

To uglify (minimise): npm install grunt-contrib-uglify --save-dev (cmd project root) this will update package.json,then in gruntfile add task and grunt.loadNpmTasks('grunt-contrib-uglify'); at the end

Example for watch:
    https://www.npmjs.com/package/grunt-contrib-watch
npm install grunt-contrib-watch --save-dev
grunt.loadNpmTasks('grunt-contrib-watch');

    Sass:
npm install grunt-sass --save-dev
********************************************************/

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