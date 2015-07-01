////////////////////////////////////////////////////////////////////////////////
// Exercise:
//
// - render the data as tabs, with their `name` as the label in the tab
//   and their `description` inside the tab panel
// - make it so that you can click a tab label and the panel renders
//   the correct content
// - make sure the active tab has the active styles
////////////////////////////////////////////////////////////////////////////////
var React = require('react');
var assign = require('object-assign');

var DATA = [
  { id: 1, name: 'USA', description: 'Land of the Free, Home of the brave' },
  { id: 2, name: 'Brazil', description: 'Sunshine, beaches, and Carnival' },
  { id: 3, name: 'Russia', description: 'World Cup 2018!' },
];

var styles = {};

styles.tab = {
  display: 'inline-block',
  padding: 10,
  margin: 10,
  borderBottom: '4px solid',
  borderBottomColor: '#ccc',
  cursor: 'pointer'
};

styles.activeTab = assign({}, styles.tab, {
  borderBottomColor: '#000'
});

styles.panel = {
  padding: 10
};

var Tabs = React.createClass({
  handleClick(){

  },
  render () {
    return (
      <div className="Tabs">
        //<div className="Tab" style={styles.tab}>
        //   Inactive
        // </div>
        // <div className="Tab" style={styles.activeTab}>
        //   Active
        // </div>
        // <div className="TabPanels" style={styles.panel}>
        //   Panel
        // </div>
          {DATA.map(function(){
            <Tab onClick={this.handleClick} style={styles.tab} />
          })}
      </div>
    );
  }
});

var Tab = React.createClass({
  handleClick(){
    this.props.onClick();
  },
  render(){
      <div className="Tab" style={this.prop.style} onClick={this.handleClick()}>
          Inactive
      </div>
  }
});

var App = React.createClass({
  render () {
    return (
      <div>
        <h1>Countries</h1>
        <Tabs data={this.props.countries}/>
      </div>
    );
  }
});

React.render(<App countries={DATA}/>, document.getElementById('app'), function () {
  require('./tests').run();
});
