var React = require('react'),
	HgDoctorCardPropTypes = require('./HgDoctorCardPropTypes');

require('./_hg-doctor-card.less');

var HgDoctorCard = React.createClass({

	propTypes: HgDoctorCardPropTypes.schema,

	getDefaultProps: function() {
		return HgDoctorCardPropTypes.getDefaultProps();
	},

	handleCardClick: function(){
		if( this.props.onClick ) this.props.onClick();
	},

	render: function () {
		if (this.props.doctor === null) return null;

		var doctor = this.props.doctor;

		return (
				<div className='hg3-doctor-card' onClick={this.handleCardClick} >
					<div className="provider-image">
						<img src={ doctor.image || "/public/images/default-doc.jpg"} />
					</div>

					<div className="provider-info clrfix">
						<div className="provider-name">{doctor.name}</div>
						<div className="provider-specialty">{doctor.specialty}</div>
						<div className="provider-address">{doctor.address},<br/>{doctor.cityState}</div>
					</div>
					<div className="content-area">
						<p className="about-me">{doctor.aboutMe}</p>
					</div>
					<div className="hg3-card-footer">
						<div className="provider-phone" >{doctor.phone}</div>
					</div>
				</div>
			)
	}
});

module.exports = HgDoctorCard;