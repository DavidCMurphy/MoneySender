import React, { Component } from "react";
import styled from "styled-components/native";
import { colors } from "../Themes/colors";
const FormTitle = styled.Text `
  font-size: 15px;
  font-family: System;
  color: ${colors.title};
`;
const ErrorTitle = styled.Text `
  font-size: 15px;
  font-family: System;
  color: ${colors.red};
  margin-top: 10px;
`;
const FormInputPrefix = styled.Text `
  font-size: 20px;
  color: ${colors.title};
`;
const FormTextInput = styled.TextInput `
  height: 42px;
  width: 100%;
  font-size: 20px;
  color: ${colors.title};
`;
const FormInputContainer = styled.View `
  width: 100%;
  margin-top: 36px;
`;
const underLineColor = (props) => {
    if (props.modifying == true) {
        return colors.blue;
    }
    if (props.isValid == false) {
        return colors.red;
    }
    return colors.lightGrey;
};
const FormTextInputContainer = styled.View `
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-color: ${underLineColor};
`;
export default class FormInputComponent extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            isFocused: false
        };
    }
    render() {
        const { validation, value, isValid, prefix } = this.props.form;
        return (React.createElement(FormInputContainer, null,
            React.createElement(FormTitle, null, this.props.form.title),
            React.createElement(FormTextInputContainer, { isValid: isValid, modifying: this.state.isFocused },
                React.createElement(FormInputPrefix, null, prefix),
                React.createElement(FormTextInput, { value: value, onFocus: () => this.setState({ isFocused: true }), onBlur: () => {
                        this.setState({ isFocused: false });
                        this.props.onChange(Object.assign({}, this.props.form, { isValid: validation(value) }));
                    }, onChangeText: text => {
                        this.props.onChange(Object.assign({}, this.props.form, { value: text, isValid: validation(text) }));
                    } })),
            this.props.form.isValid === false && !this.state.isFocused && (React.createElement(ErrorTitle, null, this.props.form.errorString))));
    }
}
//# sourceMappingURL=FormInputComponent.js.map