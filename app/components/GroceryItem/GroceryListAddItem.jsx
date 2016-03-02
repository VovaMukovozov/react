var React = require('react'),
    InputForm = require('./../General/FormInput.jsx'),
    Action = require('./../../actions/CroceryItemActionCeator.jsx'),
    Modal = require('react-modal');

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : '50%',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

module.exports = React.createClass({

    getInitialState: function(){
        return {
            canSubmit: false,
            modalIsOpen: false
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
        this.closeModal();
    },

    openModal: function() {
        this.setState({modalIsOpen: true});
    },

    closeModal: function() {
        this.setState({modalIsOpen: false});
    },

    render: function() {
        return (
            <div>
                <button onClick={this.openModal}>Add Item</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles} >

                    <div className="grocery-addItem">
                        <Formsy.Form ref="form" onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
                         <InputForm name="item" inputClassName="u-full-width" validations="isExisty" validationError="This is not a valid item" required/>
                            <button type="submit" disabled={!this.state.canSubmit} >Add Item</button>
                            <button onClick={this.closeModal}>close</button>
                        </Formsy.Form>
                    </div>
                </Modal>
            </div>
        );
    }

});