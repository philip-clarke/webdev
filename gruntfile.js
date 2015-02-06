module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      my_target: {
        files: {
            '_/js/script.js': ['_/components/js/script.js']
        }
      }
    },
    compass: {
        dev: {
            options: {
                config: 'config.rb'
            }
        }
    },
    watch: {
        options: {livereload: true},
        scripts: {
            files: ['_/components/js/*.js'],
            tasks: ['uglify']
        },
        html: {
            files: ['*.html'],
        },
        sass: {
            files: ['_/components/sass/*.scss'],
            tasks: ['compass:dev']
        }
    }
  })
  grunt.registerTask('default', ['watch']);
};
