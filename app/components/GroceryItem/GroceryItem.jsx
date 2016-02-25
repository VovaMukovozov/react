var React = require('react');
var action = require('./../../actions/CroceryItemActionCeator.jsx');

module.exports = React.createClass({
    togglePurchased: function(e) {
        e.preventDefault();

        if (this.props.item.purchased) {
            action.unbuy(this.props.item);
        } else {
            action.buy(this.props.item);
        }
    },

    delete: function(e) {
        e.preventDefault();
        action.delete(this.props.item);
    },

    render: function() {
        return (
            <div className="grocery-item row">
                <div className="six columns">
                    <h4 className={this.props.item.purchased ? "striketrough" : ""}>{this.props.item.name}</h4>
                </div>

                <form className="three columns" onSubmit={this.togglePurchased}>
                    <button className={this.props.item.purchased ? " " : "button-primary"}>
                        {this.props.item.purchased ? "Unbuy" : "Buy"}
                    </button>
                </form>

                <form className="three columns" onSubmit={this.delete}>
                    <button> &times; </button>
                </form>
            </div>
        )
    }
});