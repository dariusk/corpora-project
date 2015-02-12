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

var _categories = fs.readdirSync(path + 'node_modules/corpora/data/')
  .map(function(dirname) {
    return {
      name: dirname,
      files: fs.readdirSync(path + 'node_modules/corpora/data/'+dirname).map(function(filename) {
        return {
          name: filename.replace('.json',''),
          get: function() {
            return JSON.parse(fs.readFileSync(path + 'node_modules/corpora/data/'+dirname+'/'+filename));
          }
        };
      })
    };
  });

module.exports = {
  getCategories: function() {
    return _categories.map(function(el) {
      return el.name;
    });
  },
  getFiles: function(category) {
    return _categories.filter(function(el) {
      return el.name === category;
    })[0].files;
  },
  getFile: function(category, filename) {
    return this.getFiles(category).filter(function(el) {
      return el.name === filename;
    })[0].get();
  }
};
