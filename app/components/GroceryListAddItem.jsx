var React = require('react');
var action = require('./../actions/CroceryItemActionCeator.jsx');

module.exports = React.createClass({
    getInitialState: function(){
        return {value:""}
    },
    handleInputName: function(e){
        this.setState({
            value: e.target.value
        });
    },
    addItem: function(e){
        e.preventDefault();
        //console.log("Adding item!" + this.state.value);
        action.add({
            name: this.state.value
        });
        this.setState({
            value: ""
        });
    },
    render: function(){
        return (
            <div className="grocery-addItem">
                <form onSubmit= {this.addItem}>
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handleInputName}
                    />
                    <button> Add Item </button>
                </form>
            </div>
        )
    }
});