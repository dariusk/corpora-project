'use strict';

var corpora = require('../lib/corpora.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['awesome'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'basic tests': function(test) {
    test.expect(7);
    // tests here
    test.equal(typeof(corpora), 'object', 'should return an object');
    test.ok(corpora.getCategories().length, 'should return an array (object w length)');
    test.equal(typeof(corpora.getCategories()[0]), 'string', 'should be a string');
    var files = corpora.getFiles('animals');
    test.ok(files.length, 'should return an array (object w length)');
    test.equal(typeof(files[0].name), 'string', 'should be a string');
    test.equal(typeof(files[0].get), 'function', 'should have a `get` function');
    var file = corpora.getFile('animals', 'common');
    test.equal(typeof(file), 'object', 'should return an object');
    test.done();
  },
  'nested directory tests': function(test) {
    test.expect(4);
    test.ok(corpora.getCategories('words').length, 'should return an array (object w length)');
    var files = corpora.getFiles('words/word_clues');
    test.equal(typeof(files[0].name), 'string', 'should be a string');
    test.equal(typeof(files[0].get), 'function', 'should have a `get` function');
    var file = corpora.getFile('words/word_clues', 'clues_five');
    test.equal(typeof(file), 'object', 'should return an object');
    test.done();
  }
};
