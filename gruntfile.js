/**
 * Created by chamara on 4/28/14.
 */

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean :{
            build: {
                src: ["dist/"]
            }
        },

        concat: {
            options: {
                separator: ';'
            },
            source:{
                    src: [
                        'app/main/*.js',
                        'app/common/module/**/*.js',
                        'app/common/**/*.js'
                    ],
                    dest: 'dist/<%= pkg.output %>.js'
            },
            library:{
                src: [
                    'libs/dev/jquery-2.1.0.js',
                    'libs/dev/handlebars-v1.3.0.js',
                    'libs/dev/ember-1.5.1.js'
                ],
                dest: 'dist/lib.js'
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.output %>.min.js': ['<%= concat.source.dest %>']
                }
            }
        },

        copy: {
            all:{
                files: [
                    {
                        expand: true,           // Enable dynamic expansion.
                        cwd: 'app/main/',       // Src matches are relative to this path.
                        src: ['**/index.html'], // Actual pattern(s) to match.
                        dest: 'dist/'           // Destination path prefix.
                    },
                    {
                        expand: true,
                        cwd: 'app/assets/fonts/',
                        src: ['**'],
                        dest: 'dist/fonts/'
                    },
                    {
                        expand: true,
                        cwd: 'app/assets/img/',
                        src: ['**/*'],
                        dest: 'dist/img/'
                    }
                ]
            }
        },

        jshint: {
            files: ['Gruntfile.js', 'app/common/**/*.js', 'app/main/*.js', 'tests/**/*.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },

        htmlhint: {
            build: {
                options: {
                    'tag-pair': true,
                    'tagname-lowercase': true,
                    'attr-lowercase': true,
                    'attr-value-double-quotes': true,
                    'doctype-first': true,
                    'spec-char-escape': true,
                    'id-unique': true,
                    'head-script-disabled': true,
                    'style-disabled': true
                },
                src: ['app/common/main/index.html']
            }
        },

        watch: {
            html: {
                files: ['index.html'],
                tasks: ['htmlhint']
            }
        },

        cssc: {
            build: {
                options: {
                    consolidateViaDeclarations: true,
                    consolidateViaSelectors:    true,
                    consolidateMediaQueries:    true
                },
                files: {
                    'dist/css/main.css': 'dist/css/main.css'
                }
            }
        },

        cssmin: {
            build: {
                src: 'dist/css/main.css',
                dest: 'dist/css/main.css'
            }
        },

        sass: {
            build: {
                files: {
                    'dist/css/main.css': 'app/assets/sass/main.scss'
                }
            }
        },

        emberTemplates : {
            compile : {
                options : {
                    templateName : function(sourceFile) {
                        return sourceFile.substring(sourceFile
                            .lastIndexOf('/') + 1,
                            sourceFile.length);
                    }
                },
                files : {
                    'dist/templates_main.js' : [
                        'app/main/*.hbs',
                        'app/common/module/login/*.hbs'
                    ]
                }
            }
        },

        connect: {
            server: {
                options: {
                    keepalive:true,
                    port: 9000,
                    base: 'dist',
                    hostname: 'localhost'
                }
            },
            coverage:{
                options: {
                    keepalive:true,
                    port: 9001,
                    base: 'reports/coverage',
                    hostname: 'localhost'
                }
            }
        },

        jasmine : {
            coverage: {
                src: [
                    'app/main/*.js',
                    'app/common/module/**/*.js'],
                options: {
                    vendor: [
                        'libs/dev/jquery-2.1.0.js',
                        'libs/dev/handlebars-v1.3.0.js',
                        'libs/dev/ember-1.5.1.js'
                    ],
                    specs: 'tests/specs/common/module/**/*Spec.js',
                    template: require('grunt-template-jasmine-istanbul'),
                    templateOptions: {
                        coverage: 'reports/coverage.json',
                        report: [
                            {
                                type: 'html',
                                options: {
                                    dir: 'reports/html'
                                }
                            },
                            {
                                type: 'text-summary'
                            }
                        ]
//                        template: require('grunt-template-jasmine-requirejs'),
//                        templateOptions: {
//                            requireConfig: {
//                                baseUrl: '.grunt/grunt-contrib-jasmine/<%= meta.src.main %>/js/'
//                            }
//                        }
                    }
                }
            }
        }
    });

    // Load the plugin
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-ember-templates');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-cssc');
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-ember-handlebars');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    // Default task(s).
    grunt.registerTask('default', ['clean', 'jshint', 'htmlhint', 'copy' , 'concat', 'uglify', 'emberTemplates', 'buildcss']);

    grunt.registerTask('buildcss',  ['sass', 'cssc', 'cssmin']);

    grunt.registerTask('run', ['default', 'connect:server']);

    grunt.registerTask('test:coverage', ['jasmine:coverage', 'connect:coverage']);

};
