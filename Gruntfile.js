'use strict';


module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt)
    require('time-grunt')(grunt)

    var config = {
        src: 'src',
        dist: 'dist'
    }


    //任务配置，所有插件的配置信息
    grunt.initConfig({
        //project setting
        config: config,

        pkg: grunt.file.readJSON('package.json'),

        copy: {
            dist: {
                //files 数组形式
                // files: [{
                //     src: '<%= config.src %>/index.html',
                //     dest: '<%= config.dist %>/index.html'
                // }, {
                //     src: '<%= config.src %>/js/index.js',
                //     dest: '<%= config.dist %>/js/index.js'
                // }],
                //未能成功执行
                // files: {
                //     '<%= config.src %>/index.html': ['<%= config.dist %>/index.html']
                //     // '<%= config.src %>/js/index.js': '<%= config.dist %>/js/index.js'
                // }

                files: [{
                    expand: true,
                    cwd: '<%= config.src %>/',
                    src: ['**/*.*'],
                    dest: '<%= config.dist %>/'
                    // ext: '.min.html'
                }]
            }

        },
        clean: {
            dist: {
                src: ['<%= config.dist %>/**']
            }
        },
        filerev: {
            rename: {
                files: [{
                    src: ['<%= config.dist %>/**/*.js',
                        '<%= config.dist %>/**/*.css',
                        '!<%= config.dist %>/**/*.html',
                        '!<%= config.dist %>/**/*.{png,jpg,jpeg}'
                    ]
                }]
            }
        },

        // useminPrepare: {
        //     dist: {
        //         files: [{
        //             src: '<%= config.dist %>/**/*.html'
        //         }]
        //     }
        // },

        usemin: {
            html: {
                files: [{
                    src: '<%= config.dist %>/**/*.html'
                }]
            }
        },








    });

    grunt.registerTask('default', ['clean', 'copy', 'filerev', 'usemin']);


}