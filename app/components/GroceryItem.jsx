var React = require('react');
var action = require('./../actions/CroceryItemActionCeator.jsx');

module.exports = React.createClass({
    delete: function(e){
        e.preventDefault();
        action.delete(this.props.item);
    },

    render: function(){
        return (
            <div>
                <div>
                    <h4 className={this.props.item.purchased ? "striketrough" : ""}>{this.props.item.name}</h4>
                </div>

                <form className="three columns" onSubmit={this.delete}>
                    <button> &times; </button>
                </form>
            </div>
        )
    }
});