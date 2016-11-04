/*
 * hippo data
 *
 * Author(s):  Jonathan "Yoni" Knoll
 * Version:    0.2.0
 * Date:       2016-11-04
 *
 */


module.exports = function(grunt) {

  var path = require('path');
  var _ = require('lodash');
  var pkg = grunt.file.readJSON('./package.json');


  function addConfig(section, config) {
    var gruntConfig = grunt.config(section) || {};
    grunt.config(section, _.extend(gruntConfig, config));
  }

  addConfig('pkg', pkg);

  grunt.registerTask('load-data', function() {
    var data = {
      source: pkg.name,
      version: pkg.version,
      files: grunt.file.expand(['data/*.json'])
    };

    grunt.file.write('hippo-data.json', JSON.stringify(data, null, 2));

  });

  addConfig('hippo', {
    src: [ path.relative(__filename, __dirname) ]
  });

  console.log('\n');

};