/*
 * hippo data
 *
 * Author(s):  Jonathan "Yoni" Knoll
 * Version:    0.4.0
 * Date:       2016-11-04
 *
 */


module.exports = function(grunt, dir) {

  var path = require('path');
  var _ = require('lodash');
  
  var pkg = grunt.file.readJSON(path.normalize(__dirname + '/..') + '/package.json');
  var root = path.normalize(path.relative(process.cwd(), __dirname) + '/' + path.relative(__filename, __dirname));

  function addConfig(section, config) {
    var gruntConfig = grunt.config(section) || {};
    grunt.config(section, _.extend(gruntConfig, config));
  }

  grunt.registerTask('load-data', 'Copy Hippo Data\'s data to your app', function(dest) {
    var dataFiles = grunt.file.expand([root + '/data/*.json']);

    var data = {
      last_modified: new Date(),
      source: pkg.name,
      version: pkg.version,
      files: []
    };

    dataFiles.forEach(function(f) {
      var nf = f.replace('node_modules', dest);
      grunt.file.copy(f, nf);
      data.files.push(nf);
    });

    grunt.file.write(dest + '/hippo-data/hippo-data.json', JSON.stringify(data, null, 2));
    
  });

  addConfig('hippo', {
    src: [ './' ]
  });

  console.log('\n');

};