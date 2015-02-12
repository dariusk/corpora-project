# corpora-project

A tool to grab the latest [Corpora Project](https://github.com/dariusk/corpora/) data locally and access it.

## Getting Started
Install the module with: `npm install corpora-project`

```javascript
var corpora = require('corpora-project');
corpora.getFile('animals', 'common');
```

## Documentation
Using the module is pretty easy. If you want to access a corpora file called `nouns.json` in the `words` directory, just call `getCategories('words', 'nouns')`.

See the [Corpora Project](https://github.com/dariusk/corpora/data) for a list of categories (directories) and files.

In more detail:

```javascript
var corpora = require('corpora-project');

// List all corpora categories
corpora.getCategories(); // ["animals", "archetypes", ...]

// List all files in a category
corpora.getFiles('animals'); // ["birds_antarctica", "birds_uk", "common", ...]

// Get the data from a file
corpora.getFile('animals', 'common');

// returns this object:
/*
{
  "animals":
    [
      "aardvark",
      "alligator",
      "alpaca",
      //...
      "zebra"
    ]
}
*/
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## License
Copyright (c) 2015 Kazemi, Darius  
Licensed under the MIT license.
