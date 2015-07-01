/*









'"Simplicity is the ultimate sophistication." - Leonardo da Vinci'

























"Simple - Atomic. Not compound. vs Complicated"


"Easy - Near at hand. vs Hard"





















"Simple"

" One role"
" One task"
" One concept"
" One dimension"

" Not one instance"
" Not one operation"

" Simple is about the lack of interleaving."
" It is not about counting."



" Simple is Objective."












"Easy"

" Near at hand, as in easy to get."
" Near to our current understanding."
" Familiar."
" Near to our capabilities."



"Easy is Relative."
















"When simple is not familiar, simple is not easy."

"Something complicated that's familiar will never be simple."

"Something simple that's not familiar can become easy with practice study."






















"We often choose what's initially easy and complicated, over what's simple and hard, and over time the complicated grows, until it's no longer easy."























"The most complicated thing in software is mutable state. This is what React attempts to simplify."



"https://twitter.com/teozaurus/status/518071391959388160"

















"What is not easy about React?"
" It's not jQuery."
" Lots of unfamiliar JavaScript."
" Familiar tools aren't ideal."
" Appropriate tools aren't familiar."

" New concepts take time to absorb."
























'"Simplicity is prerequisite for reliability." - Edsger W Dijkstra'






















"- What state is there?"
"- When does it change?"



















"Coming from jQuery"
"------------------"

var $input = $('<input/>');
var $results = $('<ul/>');
$input.on('keyup', debounce(function (event) {
  $.getJSON(url, function (data) {
    var html = '';
    data.results.forEach(function (result) {
      var li = $('<li/>');
      var html = '<h2>' +
                    result.title +
                 '  <button data-id="'+result.id+'" class="remove">' +
                 '    remove' +
                 '  </button>' +
                 '</h2>' +
                 '<p>Posted <span class="timeAgo"></span></p>' +
                 '<p>'+result.description+'</p>';
                 '<div class="modal" style="display: none">' +
                 '  Are you sure sure?' +
                 '  <button class="no">No</button> ' +
                 '  <button class="yes">Yes</button>' +
                 '</div>';
      $li.html(html);
      setInterval(function () {
        $li.find('.timeAgo').html(timeAgo(result.posted_at));
      }, 1000);
    });
    $results.html(html);

    $results.find('.remove').on('click', function (event) {
      var $el = $(event.target);
      var $dialog = $el.find('.modal').dialog();

      $el.find('.no').on('click', function () {
        $dialog.dialog('close');
      });

      $el.find('.yes').on('click', function () {
        $.post(deleteUrl+'/'+$el.data('id'));
        $dialog.dialog('close');
        $el.parent().remove();
      });
    });
  });
}), 500);

$('#app').append($input).append($results);




"- the DOM is a global, mutable data structure that you have to manage."

"- multiple steps of data transformation, query of the transformed data, and more transformation are required to create the UI."

""

"- extremely imperative, have to set up every instance of every
  'component'"

"- `jQuery.fn` is how you would 'componentize' things, but they aren't composable, can't do a `.dialog` inside of a `.customThing` ad-hoc, the `dialog` has to expect the `.customThing`."

"- have to manage the state of those instances over time"

"- knowing when and how to teardown is difficult (memory leak!)"

"- XSS bugs all over the place"




















"Lets talk about functions, pure functions to be exact:"

"- will always return the same value given the same input"
"- has no side-effects"


var add = (x, y) => x + y;


"Can be used either as part of a new function's definition"
var double = (x) => add(x, x);


"or used to pass in arguments to the function"
double(add(x, y), z);


"or even passed INTO a function"
var double = (adder, value) => adder(value);
















"Functions are simple."

"Functions are composable."

"Functions composed of other functions are themselves simple."


"Functions have no mutable state."



















"React components are literally functions that return a description of UI that will get rendered."



var React = require('react');

var input = React.DOM.input({type: 'password'});
React.render(input, document.body);




var React = require('react');

var { div, h1, p } = React.DOM;
var element = div({ className: 'App' },
                   h1(null, 'Hello!'),
                   p(null, "Isn't this easy?")
                 );
React.render(element, document.body);

















"Lets get back to some math. We can create our own types of components in React:"


var Add = React.createClass({
  render () {
    var sum = this.props.x + this.props.y;
    return React.DOM.span({}, sum);
  }
});


// don't worry about this fn
Add = React.createFactory(Add);

var element = Add({ x: 2, y: 3 }); // <span>5</span>



var Double = React.createClass({
  render () {
    return React.createElement(Add({
      x: this.props.value,
      y: this.props.value
    }));
  }
});

Double = React.createFactory(Double);
var element = Double({ value: 2 }); // <span>4</span>


"Just functions. Two differences with 'normal' functions:"

"- named `props` instead of `arguments`"
"- return a description of UI to be rendered later"






















"JSX is an XML variant for writing React components. But since React components are just functions, JSX is really just a different way to call functions."


var React = require('react');
var { div, h1, p } = React.DOM;

var element = div({ className: "App" },
                h1({ className: "Title" }, 'Hello!'),
                p(null, 'Pork Carnitas street tacos are the best')
              );


var element = <div className="App">
                <h1 className="Title">Hello From JSX!</h1>
                <p>Pork Carnitas street tacos are the best</p>
              </div>;



React.render(element, document.body);



















"Because React is just JavaScript functions, you don't have to rely on and learn the framework's reinvention of the wheel for stuff like indexes or 'filters' and 'helpers'." 



"Say you want a bunch of month options that render like this, using a custom option tag that adds the right class to the option tag for you."

<option class="fancy">March (03)</option>












<!-- angular -->
<fancy-option ng-repeat="month in months">
  {{month}} ({{$index | padMonth}})
</fancy-option>

"Things you have to learn to make this work:"
"- ng-repeat"
"- `month in months` DSL"
"- a wild `$index` appears"
"- that `|` is called a filter so you can google to learn..."
"- ... how to create a filter"
"- how to create a custom directive (got your cheat sheet handy?)"
"- if anybody else on the team has created a `fancy-option`."






// React
var options = months.map((month, index) => (
  <FancyOption>
    {month} ({ padMonth(index) })
  </FancyOption>
));

"Things you have to know:"
"- JavaScript"
"- `React.createClass`"















"Exercise!"

*/


