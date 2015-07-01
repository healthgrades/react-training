

var React = require('react');

var { div, h1, p } = React.DOM;
var element = div({ className: 'App' },
                   h1(null, 'Hello!'),
                   p(null, "Ain't this easy?")
                 );
React.render(element, document.body);


