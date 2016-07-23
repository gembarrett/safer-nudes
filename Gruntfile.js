module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      scripts: {
        files: 'src/logic/*.js',
        tasks: ['uglify']
      },
      styles: {
        files: 'src/styles/*.scss',
        tasks: ['sass']
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed',
        },
        files: {'dest/css/app.min.css': 'src/styles/app.scss'},
      }
    },
    uglify: {
      logic: {
        files: [{
          cwd: './',
          src: 'src/logic/*.js',
          dest: 'dest/js/app.min.js'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);

};