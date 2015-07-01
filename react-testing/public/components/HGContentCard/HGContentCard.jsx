var React = require('react'),
	HgContentCardPropTypes = require('./HgContentCardPropTypes');

require('./_hg-content-card.less');

var HgContentCard = React.createClass({

	propTypes: HgContentCardPropTypes.schema,

	getDefaultProps: function() {
		return HgContentCardPropTypes.getDefaultProps();
	},

	getInitialState: function () {
		return this.props;
	},

	handleCardClick: function(){
		if( this.props.onClick ) this.props.onClick();
	},

	componentWillMount: function(){
		if(  this.props.onClick  && typeof this.props.onClick !== 'function' ){
			 throw "Error: onClick must be a function.";
		}
	},

	render: function () {
		if (this.state.cardJson === null) return null;
		var contentType = (this.state.cardJson.types)
			? this.state.cardJson.types[0].replace("http://schema.org/", "").toLowerCase()
			: "none";
		var contentTypeClass =  "h3-content-type-" + contentType;
		var cardClass = "hg3-content-card ";
		var hasPromoImage = (this.state.cardJson.properties.promoImage) && this.state.cardJson.properties.promoImage !== null;
		var promoImagePath = (hasPromoImage)
			? this.state.cardJson.properties.promoImage[0]
			: "/public/images/" + contentType + "_icon.png";
		var promoImageClass = (hasPromoImage)
			? "hg3-promo-image"
			: "hg3-promo-image-default";
		var title = (this.state.cardJson.properties.title)
			? this.state.cardJson.properties.title[0]
			: "";
		var blurb = (this.state.cardJson.properties.blurb)
			? this.state.cardJson.properties.blurb[0]
			: "";
		var providerNameLabel = (this.state.cardJson.properties.providerName)
			? (<div className="card-provider-name"><span className="hg3-i hg3-i-user"></span>&nbsp; {this.state.cardJson.properties.providerName[0]} Added</div>)
			: null;
		var contentCard = (this.state.cardJson != null )
			? (
				<div className='hg3-content-card' onClick={this.handleCardClick} itemScope itemType="http://schema.org/Article" >
					<div className={promoImageClass}>
						<img src={promoImagePath} itemProp="promoImage" />
					</div>

					{providerNameLabel}

					<div className="content-area">
						<div className={contentTypeClass}></div>
						<h4 className="title" itemProp="title"> {title}</h4>
						<p className="blurb" itemProp="blurb">{blurb}</p>
					</div>
					<div className="hg3-card-footer"></div>
				</div>
				)
			: null;
		return contentCard;
	}
});

module.exports = HgContentCard;