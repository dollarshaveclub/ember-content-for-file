# Ember-content-for-file

## Usage

Usage is simple. Inside of your `index.html` of your Ember app, use _ember-content-for-file_ like so:

```html-jinjna
<!DOCTYPE html>
<html>
<head>
  <title>Hello, World.</title>

  <!-- Injected CSS files -->
  <style type="text/css">
    {{ content-for 'file:path/to/file.css' }}
    {{ content-for 'file:path/to/foo.css' }}
    {{ content-for 'file:path/to/bar.css' }}
  </style>

</head>
<body>

  <!-- Injected JS files -->
  <script>
    {{ content-for 'file:path/to/file.js' }}
    {{ content-for 'file:path/to/foo.js' }}
    {{ content-for 'file:path/to/bar.js' }}
  </script>

</body>
</html>
```

_ember-content-for-file_ looks for `content-for` functions which are passed a type prepended with `file:`. This signals to look for the file at that path, and if found, return its contents.

Simple and useful.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
