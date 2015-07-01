
var HgContentCardPropTypes = {
    schema: {
        cardJson: React.PropTypes.object,
        onClick: React.PropTypes.func
    },
    getDefaultProps: function() {
        return {
            cardJson: null
        };
    }
};

module.exports = HgContentCardPropTypes;