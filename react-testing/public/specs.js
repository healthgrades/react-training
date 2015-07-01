require('lodash');
require('lodash-contrib/_.object.builders');
require('lodash-contrib/_.object.selectors');
require('lodash-contrib/common-js/_.array.builders')(_);
require('lodash-contrib/common-js/_.util.existential')(_);
require('lodash-contrib/_.util.operators');

window.jQuery = require('./vendor/jquery/jquery-1.10.2.min.js');

var specs = require.context('./components/', /*look in subdirectories*/ true, /.spec\.js(x?)$/);
var componentsKeys = specs.keys();
componentsKeys.forEach(specs);

console.log('Loading spec files: ', componentsKeys);
