var React = require('react')
  HGContentCard = require('./HGContentCard/HGContentCard'),
  HGDoctorCard = require('./HGDoctorCard/HGDoctorCard'),
  doctors = require('./doctors.js')
  cards = require('./cards.js');



var App = React.createClass({
  PropTypes: {
  	message: React.PropTypes.string
  },
  handleClick (title) {
    alert("Read more about " + title);
  },
  handleDoctorClick (phone) {
    alert("phone doc " + phone);
  },
  render () {
    var app = this;
    return (
      <div>
        <h1>{this.props.message}</h1>
        { 
          cards.map(function(card){
            return (<HGContentCard cardJson={card} onClick={app.handleClick.bind(null, card.properties.title)}/>)
          })
        }

               
      </div>
    )
  }
});

// { doctors.map(function(doctor){ return (<HGDoctorCard doctor={doctor} onClick={app.handleDoctorClick.bind(null, doctor.phone)}/>) }) }


React.render(<App message="React Unit Testing Demo!"/>, document.getElementById('container'));

module.exports = App;
