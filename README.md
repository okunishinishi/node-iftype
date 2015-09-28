iftype
==========

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]

[bd_repo_url]: https://github.com/okunishinishi/node-iftype
[bd_travis_url]: http://travis-ci.org/okunishinishi/node-iftype
[bd_travis_shield_url]: http://img.shields.io/travis/okunishinishi/node-iftype.svg?style=flat
[bd_license_url]: https://github.com/okunishinishi/node-iftype/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/okunishinishi/node-iftype
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/okunishinishi/node-iftype.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/node-iftype.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/okunishinishi/node-iftype
[bd_gemnasium_shield_url]: https://gemnasium.com/okunishinishi/node-iftype.svg
[bd_npm_url]: http://www.npmjs.org/package/iftype
[bd_npm_shield_url]: http://img.shields.io/npm/v/iftype.svg?style=flat
[bd_bower_badge_url]: https://img.shields.io/bower/v/iftype.svg?style=flat

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Check types

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>


<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/readme/01.Installation.md.hbs" Start -->

<a name="section-doc-readme-01-installation-md"></a>
Installation
-----

```bash
$ npm install iftype --save
```

<!-- Section from "doc/readme/01.Installation.md.hbs" End -->

<!-- Section from "doc/readme/02.Usage.md.hbs" Start -->

<a name="section-doc-readme-02-usage-md"></a>
Usage
---------

```javascript
var iftype = require('iftype');

//----------------------------
// Check if type is string
//----------------------------
iftype(123).is("string"); // => false
iftype(function foo(){}).is("string"); // => false
iftype(["foo", "bar"]).is("string"); // => false
iftype("bar").is("string"); // => true


//----------------------------
// Check if type is number
//----------------------------
iftype(123).is("number"); // => true
iftype(function foo(){}).is("number"); // => false
iftype(["foo", "bar"]).is("number"); // => false
iftype("bar").is("number"); // => false


//----------------------------
// Check if type is object
//----------------------------
iftype(123).is("object"); // => false
iftype(function foo(){}).is("object"); // => false
iftype(["foo", "bar"]).is("object"); // => true
iftype("bar").is("object"); // => false


//----------------------------
// Check if type is array
//----------------------------
iftype(123).is("array"); // => false
iftype(function foo(){}).is("array"); // => false
iftype(["foo", "bar"]).is("array"); // => true
iftype("bar").is("array"); // => false


//----------------------------
// Check if type is function
//----------------------------
iftype(123).is("function"); // => false
iftype(function foo(){}).is("function"); // => true
iftype(["foo", "bar"]).is("function"); // => false
iftype("bar").is("function"); // => false



```

<!-- Section from "doc/readme/02.Usage.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/okunishinishi/node-iftype/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------


<!-- Links End -->
