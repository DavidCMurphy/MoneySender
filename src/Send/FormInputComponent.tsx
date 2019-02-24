import React, { Component } from "react";
import styled from "styled-components/native";
import { colors } from "../Themes/colors";

const FormTitle = styled.Text`
  font-size: 15px;
  font-family: System;
  color: ${colors.title};
`;

const ErrorTitle = styled.Text`
  font-size: 15px;
  font-family: System;
  color: ${colors.red};
  margin-top: 10px;
`;

const FormInputPrefix = styled.Text`
  font-size: 20px;
  color: ${colors.title};
`;

const FormTextInput = styled.TextInput<{ modifying: boolean; isValid: boolean }>`
  height: 42px;
  width: 100%;
  font-size: 20px;
  color: ${colors.title};
`;

const FormInputContainer = styled.View`
  width: 100%;
  margin-top: 36px;
`;

const underLineColor = (props: { modifying: boolean, isValid: Boolean }) => {
  if (props.modifying == true) {
    return colors.blue;
  }
  if (props.isValid == false) {
    return colors.red;
  }
  return colors.lightGrey;
}

const FormTextInputContainer = styled.View<{
  modifying: boolean;
  isValid: boolean;
}>`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-color: ${ underLineColor };
`;

export interface FormInput {
  title: string;
  key: string;
  isValid?: boolean;
  value?: string;
  prefix?: string;
  errorString: string;
  validation: (value?: string) => boolean;
}

interface FormProps {
  form: FormInput;
  onChange: (value: FormInput) => void;
}

interface FormInputState {
  isFocused: boolean;
}

export default class FormInputComponent extends Component<
  FormProps,
  FormInputState
> {
  state = {
    isFocused: false
  };

  render() {
    const { validation, value, isValid, prefix } = this.props.form;
    return (
      <FormInputContainer>
        <FormTitle>{this.props.form.title}</FormTitle>
        <FormTextInputContainer
          isValid={isValid}
          modifying={this.state.isFocused}
        >
          <FormInputPrefix>{prefix}</FormInputPrefix>
          <FormTextInput
            value={value}
            onFocus={() => this.setState({ isFocused: true })}
            onBlur={() => {
              this.setState({ isFocused: false });
              this.props.onChange({
                ...this.props.form,
                isValid: validation(value)
              });
            }}
            onChangeText={text => {
              this.props.onChange({
                ...this.props.form,
                value: text,
                isValid: validation(text)
              });
            }}
          />
        </FormTextInputContainer>
        {this.props.form.isValid === false && !this.state.isFocused && (
          <ErrorTitle>{this.props.form.errorString}</ErrorTitle>
        )}
      </FormInputContainer>
    );
  }
}
