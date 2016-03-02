/** @jsx React.DOM */
var React = require('react'),
    Formsy = require('formsy-react');
module.exports = React.createClass({

    // Add the Formsy Mixin
    mixins: [Formsy.Mixin],

    changeValue: function (event) {
        this.setValue(event.currentTarget.value);
    },
    render: function () {

        var className = 'form-group' + (this.props.className || ' six columns ') + (this.showRequired() ? 'required' : this.showError() ? 'error' : null);
        var inputClassName = 'form-group ' + (this.props.inputClassName || ' ') + (this.showRequired() ? ' required ' : this.showError() ? ' validator-error ' : ' ');

        var errorMessage = this.getErrorMessage();

        return (
            <div className="row">
                <div className={className}>
                    <label htmlFor={this.props.name}>{this.props.title}</label>
                    <input
                        className={inputClassName}
                        type={this.props.type || 'text'}
                        name={this.props.name}
                        onChange={this.changeValue}
                        value={this.getValue()}
                        checked={this.props.type === 'checkbox' && this.getValue() ? 'checked' : null}
                    />
                    <span className='validation-error'>{errorMessage}</span>
                </div>
            </div>
        );
    }
});