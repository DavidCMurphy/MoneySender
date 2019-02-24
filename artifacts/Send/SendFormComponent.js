import React, { Component } from "react";
import { View, ActivityIndicator, Keyboard } from "react-native";
import FormInputComponent from "./FormInputComponent";
import styled from "styled-components/native";
import { colors } from "../Themes/colors";
import { SectionTitle, Container, InnerContainer } from "../Themes/SharedStyles";
import { connect } from "react-redux";
import { TypeKeys } from "../ActionTypes";
import { nameForm, emailForm, amountForm } from "./Forms";
const SendButton = styled.TouchableOpacity `
  background-color: ${colors.blue};
  height: 48px;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
const SendButtonTitle = styled.Text `
  color: white;
  font-size: 15px;
  font-family: System;
`;
class SendFormComponent extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            name: nameForm(),
            emailAddress: emailForm(),
            amount: amountForm()
        };
        this.sendForm = () => {
            Keyboard.dismiss();
            const { name, emailAddress, amount } = this.state;
            if (name.value &&
                name.isValid &&
                emailAddress.value &&
                emailAddress.isValid &&
                amount.value &&
                amount.isValid) {
                this.props.send({
                    name: name.value,
                    email: emailAddress.value,
                    amount: amount.value
                });
            }
            else {
                this.setState({
                    name: Object.assign({}, name, { isValid: name.validation(name.value) }),
                    emailAddress: Object.assign({}, emailAddress, { isValid: emailAddress.validation(emailAddress.value) }),
                    amount: Object.assign({}, amount, { isValid: amount.validation(amount.value) })
                });
            }
        };
    }
    render() {
        const { name, emailAddress, amount } = this.state;
        return (React.createElement(Container, null,
            React.createElement(InnerContainer, null,
                React.createElement(SectionTitle, null, "Send money"),
                React.createElement(FormInputComponent, { form: name, onChange: name => this.setState({ name }) }),
                React.createElement(FormInputComponent, { form: emailAddress, onChange: emailAddress => this.setState({ emailAddress }) }),
                React.createElement(FormInputComponent, { form: amount, onChange: amount => this.setState({ amount }) }),
                React.createElement(View, { style: { flex: 1 } }),
                React.createElement(SendButton, { disabled: this.props.isLoading, onPress: this.sendForm }, this.props.isLoading ? (React.createElement(ActivityIndicator, { animating: true, color: "white" })) : (React.createElement(SendButtonTitle, null, "Send"))))));
    }
}
const mapDispatchToProps = dispatch => ({
    send: (transaction) => dispatch({ type: TypeKeys.SEND_MONEY, transaction })
});
const mapStateToProps = (state) => ({
    isLoading: state.send.loading
});
export default connect(mapStateToProps, mapDispatchToProps)(SendFormComponent);
//# sourceMappingURL=SendFormComponent.js.map