# verb-log [![NPM version](https://badge.fury.io/js/verb-log.svg)](http://badge.fury.io/js/verb-log)

> Logging for Verb.

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i verb-log --save
```

## Usage

```js
var verb = require('verb');
var log = require('verb-log');

verb.task('default', function () {
  verb.src('*.md')
    .pipe(verb.dest('foo'))
    .on('err', log);
});
```

## Related projects

* [assemble](http://assemble.io): Static site generator for Grunt.js, Yeoman and Node.js. Used by Zurb Foundation, Zurb Ink, H5BP/Effeckt,… [more](http://assemble.io)
* [time-stamp](https://github.com/jonschlinkert/time-stamp): Get a formatted timestamp.
* [template](https://github.com/jonschlinkert/template): Render templates using any engine. Supports, layouts, pages, partials and custom template types. Use template… [more](https://github.com/jonschlinkert/template)
* [verb](https://github.com/assemble/verb): Documentation generator for GitHub projects. Extremely powerful, easy to use, can generate anything from API… [more](https://github.com/assemble/verb)

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/verb-log/issues/new)

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2015 Jon Schlinkert
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on May 27, 2015._