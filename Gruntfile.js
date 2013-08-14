module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
      dist: {
        options: {
          yuicompress: true
        },
        files: {
          'src/styles/common.css': 'src/styles/common.less'
        }
      }
    },

    copy: {
      dist: {
        files: [{
          expand: true,
          flatten: true,
          src: ['src/styles/common.css'],
          dest: 'dist/',
          filter: 'isFile'
        }]
      }
    },

    requirejs: {
      dist: {
        options: {
          baseUrl: 'src/scripts',
          mainConfigFile: 'src/scripts/boot.js',
          name: 'boot',
          out: 'dist/scripts.build.js',
          preserveLicenseComments: false,
          paths: {
            requireLib: 'vendor/require/require'
          },
          include: 'requireLib'
        }
      }
    }
 
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-requirejs');


  grunt.registerTask('default', ['less', 'copy', 'requirejs']);
};