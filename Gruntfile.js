/*
 * hippo data Gruntfile
 *
 * Author(s):  Jonathan "Yoni" Knoll
 * Version:    0.2.0
 * Date:       2016-11-04
 *
 */

module.exports = function(grunt) {
  
  grunt.loadTasks('tasks');

  grunt.registerTask('build', function() {
    grunt.file.write('VERSION', grunt.config('pkg').version);
  });

  grunt.registerTask('default', 'load-data');

};
