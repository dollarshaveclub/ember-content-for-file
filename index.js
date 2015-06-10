/* jshint node: true */
'use strict';

var fs = require('fs');
var path = require('path');

module.exports = {
  name: 'ember-content-for-file',

  contentFor: function (key) {

    // If key is not prepended with `file:`
    // we don't care about
    if ( key.indexOf('file:') !== 0 ) {
      return;
    }

    // Fetch the project root and create the filePath.
    var root = this.project.root;
    key = key.split('file:')[1];
    var filePath = path.join(root, key);

    // Read file in and return it.
    if(fs.existsSync(filePath)) {
      return fs.readFileSync(filePath).toString('utf-8');
    }

  }

};
