/*
 * hippo data
 *
 * Author(s):  Jonathan "Yoni" Knoll
 * Version:    0.3.1
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

  var root = path.normalize(path.relative(process.cwd(), __dirname) + '/' + path.relative(__filename, __dirname));

  grunt.registerTask('load-data', function() {
    var data = {
      last_modified: new Date(),
      source: pkg.name,
      version: pkg.version,
      files: grunt.file.expand([root + '/data/*.json'])
    };
    grunt.file.write('hippo-data.json', JSON.stringify(data, null, 2));
  });

  addConfig('hippo', {
    src: [ './' ]
  });

  console.log('\n');
  // console.log(grunt);

};