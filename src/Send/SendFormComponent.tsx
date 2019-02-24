import React, { Component } from "react";
import { View, ActivityIndicator, Keyboard } from "react-native";
import FormInputComponent, { FormInput } from "./FormInputComponent";
import styled from "styled-components/native";
import { colors } from "../Themes/colors";
import {
  SectionTitle,
  Container,
  InnerContainer
} from "../Themes/SharedStyles";
import { connect } from "react-redux";
import { State } from "../App";
import { TypeKeys } from "../ActionTypes";
import { Transaction, SendMoneyAction } from "./Reducers";
import { nameForm, emailForm, amountForm } from "./Forms";

const SendButton = styled.TouchableOpacity`
  background-color: ${colors.blue};
  height: 48px;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
const SendButtonTitle = styled.Text`
  color: white;
  font-size: 15px;
  font-family: System;
`;

interface SendFormState {
  name: FormInput;
  emailAddress: FormInput;
  amount: FormInput;
}

interface SendFormProps {
  isLoading: boolean;
}

interface SendDispatchProps {
  send: (transation: Transaction) => SendMoneyAction;
}

class SendFormComponent extends Component<
  SendFormProps & SendDispatchProps,
  SendFormState
> {
  state: SendFormState = {
    name: nameForm(),
    emailAddress: emailForm(),
    amount: amountForm()
  };

  sendForm = () => {
    Keyboard.dismiss();

    const { name, emailAddress, amount } = this.state;
    if (
      name.value &&
      name.isValid &&
      emailAddress.value &&
      emailAddress.isValid &&
      amount.value &&
      amount.isValid
    ) {
      this.props.send({
        name: name.value,
        email: emailAddress.value,
        amount: amount.value
      });
    } else {
      this.setState({
        name: { ...name, isValid: name.validation(name.value) },
        emailAddress: {
          ...emailAddress,
          isValid: emailAddress.validation(emailAddress.value)
        },
        amount: { ...amount, isValid: amount.validation(amount.value) }
      });
    }
  };

  render() {
    const { name, emailAddress, amount } = this.state;
    return (
      <Container>
        <InnerContainer>
          <SectionTitle>Send money</SectionTitle>
          <FormInputComponent
            form={name}
            onChange={name => this.setState({ name })}
          />
          <FormInputComponent
            form={emailAddress}
            onChange={emailAddress => this.setState({ emailAddress })}
          />
          <FormInputComponent
            form={amount}
            onChange={amount => this.setState({ amount })}
          />
          <View style={{ flex: 1 }} />
          <SendButton disabled={this.props.isLoading} onPress={this.sendForm}>
            {this.props.isLoading ? (
              <ActivityIndicator animating={true} color={"white"} />
            ) : (
              <SendButtonTitle>Send</SendButtonTitle>
            )}
          </SendButton>
        </InnerContainer>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  send: (transaction: Transaction): SendMoneyAction =>
    dispatch({ type: TypeKeys.SEND_MONEY, transaction })
});

const mapStateToProps = (state: State): SendFormProps => ({
  isLoading: state.send.loading
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SendFormComponent);
