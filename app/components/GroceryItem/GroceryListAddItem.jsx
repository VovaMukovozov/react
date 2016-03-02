var React = require('react'),
    InputForm = require('./../General/FormInput.jsx'),
    Action = require('./../../actions/CroceryItemActionCeator.jsx');

module.exports = React.createClass({

    getInitialState: function(){
        return {
            canSubmit: false
        }
    },

    enableButton: function () {
        this.setState({
            canSubmit: true
        });
    },
    disableButton: function () {
        this.setState({
            canSubmit: false
        });ref="form"
    },

    submit: function(data){

        Action.add({
            name: data.item
        });

        this.refs.form.reset();
    },
    render: function(){
        return (
            <div className="grocery-addItem">
                <Formsy.Form ref="form" onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
                    <InputForm name="item" inputClassName="u-full-width" validations="isExisty" validationError="This is not a valid item" required/>
                    <button type="submit" disabled={!this.state.canSubmit} >Add Item</button>
                </Formsy.Form>
            </div>
        )
    }
});