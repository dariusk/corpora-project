/*
 * corpora
 * https://github.com/dkazemi/corpora-node
 *
 * Copyright (c) 2015 Kazemi, Darius
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs');
var path = __dirname.replace(/lib$/,'');

var _categories = function(directory) {
  directory = directory || '';
  return fs.readdirSync(path + 'node_modules/corpora/data/' + directory)
    .filter(function(item) {
      // only include the item if it has no .json extension
      return !item.match('.json');
    })
    .map(function(dirname) {
      return {
        name: dirname,
        files: fs.readdirSync(path + 'node_modules/corpora/data/'+directory+'/'+dirname).map(function(filename) {
          return {
            name: filename.replace('.json',''),
            // assume it's a directory if it's not a json file
            isDirectory: !filename.match('.json'),
            get: function() {
              return JSON.parse(fs.readFileSync(path + 'node_modules/corpora/data/'+directory+'/'+dirname+'/'+filename));
            }
          };
        })
      };
    });
}

module.exports = {
  getCategories: function(category) {
    category = category || '';
    return _categories(category).map(function(el) {
      return el.name;
    });
  },
  getFiles: function(path) {
    var directory = path.match(/.*\//) ? path.match(/.*\//)[0] : '';
    var category = path.match(/[a-zA-Z_-]+$/)[0];
    return _categories(directory).filter(function(el) {
      return el.name === category;
    })[0].files
      .filter(function(el) {
        return !el.isDirectory;
      });
  },
  getFile: function(category, filename) {
    return this.getFiles(category).filter(function(el) {
      return el.name === filename;
    })[0].get();
  }
};
