/*
 * hippo data Gruntfile
 *
 * Author(s):  Jonathan "Yoni" Knoll
 * Version:    0.4.1
 * Date:       2016-11-04
 *
 */

module.exports = function(grunt) {
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json')
  });

  grunt.loadTasks('tasks');

  grunt.registerTask('build', function() {
    grunt.file.write('VERSION', grunt.config('pkg').version);
  });

  grunt.registerTask('default', function() {
    console.log('Hi!');
  });

};
