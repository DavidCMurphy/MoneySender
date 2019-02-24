"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const native_1 = __importDefault(require("styled-components/native"));
const colors_1 = require("../Themes/colors");
const FormTitle = native_1.default.Text `
  font-size: 15px;
  font-family: System;
  color: ${colors_1.colors.title}
`;
const ErrorTitle = native_1.default.Text `
  font-size: 15px;
  font-family: System;
  color: ${colors_1.colors.red};
  margin-top: 10px;
`;
const FormInputPrefix = native_1.default.Text `
  font-size: 20px;
  color: ${colors_1.colors.title};
`;
const FormInput = native_1.default.TextInput `
    height: 42px;
    width: 100%;
    font-size: 20px;
    color: ${colors_1.colors.title};
`;
const FormInputContainer = native_1.default.View `
    width: 100%;
    margin-top: 36px;
`;
const FormTextInputContainer = native_1.default.View `
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-color: ${(props) => {
    if (props.modifying == true) {
        return colors_1.colors.blue;
    }
    if (props.isValid == false) {
        return colors_1.colors.red;
    }
    return colors_1.colors.lightGrey;
}};
`;
class FormInputComponent extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            isFocused: false
        };
    }
    render() {
        const { validation, value, isValid, prefix } = this.props.form;
        return react_1.default.createElement(FormInputContainer, null,
            react_1.default.createElement(FormTitle, null, this.props.form.title),
            react_1.default.createElement(FormTextInputContainer, { isValid: isValid, modifying: this.state.isFocused },
                react_1.default.createElement(FormInputPrefix, null, prefix),
                react_1.default.createElement(FormInput, { value: value, onFocus: () => this.setState({ isFocused: true }), onBlur: () => {
                        this.setState({ isFocused: false });
                        this.props.onChange(Object.assign({}, this.props.form, { isValid: validation(value) }));
                    }, onChangeText: (text) => {
                        this.props.onChange(Object.assign({}, this.props.form, { value: text, isValid: validation(text) }));
                    } })),
            (this.props.form.isValid === false) && !this.state.isFocused &&
                react_1.default.createElement(ErrorTitle, null, this.props.form.errorString));
    }
}
exports.default = FormInputComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2RhdmlkbXVycGh5L0Rlc2t0b3AvTW9uZXlTZW5kZXIvc3JjL1NlbmQvRm9ybUlucHV0Q29tcG9uZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBd0M7QUFDeEMsc0VBQTZDO0FBQzdDLDZDQUF5QztBQUV6QyxNQUFNLFNBQVMsR0FBRyxnQkFBTSxDQUFDLElBQUksQ0FBQTs7O1dBR2pCLGVBQU0sQ0FBQyxLQUFNO0NBQ3hCLENBQUE7QUFDRCxNQUFNLFVBQVUsR0FBRyxnQkFBTSxDQUFDLElBQUksQ0FBQTs7O1dBR2xCLGVBQU0sQ0FBQyxHQUFJOztDQUV0QixDQUFBO0FBRUQsTUFBTSxlQUFlLEdBQUcsZ0JBQU0sQ0FBQyxJQUFJLENBQUE7O1dBRXZCLGVBQU0sQ0FBQyxLQUFNO0NBQ3hCLENBQUE7QUFFRCxNQUFNLFNBQVMsR0FBRyxnQkFBTSxDQUFDLFNBQVMsQ0FBd0M7Ozs7YUFJNUQsZUFBTSxDQUFDLEtBQU07Q0FDMUIsQ0FBQTtBQUNELE1BQU0sa0JBQWtCLEdBQUcsZ0JBQU0sQ0FBQyxJQUFJLENBQUE7OztDQUdyQyxDQUFBO0FBQ0QsTUFBTSxzQkFBc0IsR0FBRyxnQkFBTSxDQUFDLElBQUksQ0FBd0M7Ozs7a0JBSS9ELENBQUMsS0FBSyxFQUFFLEVBQUU7SUFDM0IsSUFBSSxLQUFLLENBQUMsU0FBUyxJQUFJLElBQUksRUFBRTtRQUMzQixPQUFPLGVBQU0sQ0FBQyxJQUFJLENBQUE7S0FDbkI7SUFDRCxJQUFJLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxFQUFFO1FBQzFCLE9BQU8sZUFBTSxDQUFDLEdBQUcsQ0FBQTtLQUNsQjtJQUNELE9BQU8sZUFBTSxDQUFDLFNBQVMsQ0FBQTtBQUN6QixDQUFFO0NBQ0QsQ0FBQTtBQXFCRCxNQUFxQixrQkFBbUIsU0FBUSxpQkFBb0M7SUFBcEY7O1FBRUksVUFBSyxHQUFHO1lBQ04sU0FBUyxFQUFFLEtBQUs7U0FDakIsQ0FBQTtJQTBCTCxDQUFDO0lBeEJHLE1BQU07UUFDSixNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUE7UUFDOUQsT0FBTyw4QkFBQyxrQkFBa0I7WUFDeEIsOEJBQUMsU0FBUyxRQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBZTtZQUNqRCw4QkFBQyxzQkFBc0IsSUFBQyxPQUFPLEVBQUcsT0FBTyxFQUFHLFNBQVMsRUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVM7Z0JBQzNFLDhCQUFDLGVBQWUsUUFDYixNQUFNLENBQ1M7Z0JBQ25CLDhCQUFDLFNBQVMsSUFDTixLQUFLLEVBQUcsS0FBSyxFQUNiLE9BQU8sRUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQ2xELE1BQU0sRUFBRyxHQUFHLEVBQUU7d0JBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFBO3dCQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsbUJBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBRSxLQUFLLENBQUUsSUFBRyxDQUFBO29CQUMzRSxDQUFDLEVBQ0QsWUFBWSxFQUFHLENBQUMsSUFBSSxFQUFFLEVBQUU7d0JBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxtQkFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUUsSUFBSSxDQUFFLElBQUcsQ0FBQTtvQkFDdkYsQ0FBQyxHQUNELENBQ3dCO1lBQzFCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTO2dCQUMxRCw4QkFBQyxVQUFVLFFBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFnQixDQUN6QyxDQUFBO0lBQ3hCLENBQUM7Q0FDSjtBQTlCRCxxQ0E4QkMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2RhdmlkbXVycGh5L0Rlc2t0b3AvTW9uZXlTZW5kZXIvc3JjL1NlbmQvRm9ybUlucHV0Q29tcG9uZW50LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzL25hdGl2ZSdcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uL1RoZW1lcy9jb2xvcnMnXG5cbmNvbnN0IEZvcm1UaXRsZSA9IHN0eWxlZC5UZXh0YFxuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBTeXN0ZW07XG4gIGNvbG9yOiAkeyBjb2xvcnMudGl0bGUgfVxuYFxuY29uc3QgRXJyb3JUaXRsZSA9IHN0eWxlZC5UZXh0YFxuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBTeXN0ZW07XG4gIGNvbG9yOiAkeyBjb2xvcnMucmVkIH07XG4gIG1hcmdpbi10b3A6IDEwcHg7XG5gXG5cbmNvbnN0IEZvcm1JbnB1dFByZWZpeCA9IHN0eWxlZC5UZXh0YFxuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAkeyBjb2xvcnMudGl0bGUgfTtcbmBcblxuY29uc3QgRm9ybUlucHV0ID0gc3R5bGVkLlRleHRJbnB1dDx7bW9kaWZ5aW5nOiBib29sZWFuLCBpc1ZhbGlkOiBib29sZWFufT5gXG4gICAgaGVpZ2h0OiA0MnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogJHsgY29sb3JzLnRpdGxlIH07XG5gXG5jb25zdCBGb3JtSW5wdXRDb250YWluZXIgPSBzdHlsZWQuVmlld2BcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAzNnB4O1xuYFxuY29uc3QgRm9ybVRleHRJbnB1dENvbnRhaW5lciA9IHN0eWxlZC5WaWV3PHttb2RpZnlpbmc6IGJvb2xlYW4sIGlzVmFsaWQ6IGJvb2xlYW59PmBcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuICBib3JkZXItY29sb3I6ICR7IChwcm9wcykgPT4ge1xuICBpZiAocHJvcHMubW9kaWZ5aW5nID09IHRydWUpIHtcbiAgICByZXR1cm4gY29sb3JzLmJsdWVcbiAgfVxuICBpZiAocHJvcHMuaXNWYWxpZCA9PSBmYWxzZSkge1xuICAgIHJldHVybiBjb2xvcnMucmVkXG4gIH1cbiAgcmV0dXJuIGNvbG9ycy5saWdodEdyZXlcbn0gfTtcbmBcblxuZXhwb3J0IGludGVyZmFjZSBGb3JtSW5wdXQge1xuICB0aXRsZTogc3RyaW5nXG4gIGtleTogc3RyaW5nXG4gIGlzVmFsaWQ/OiBib29sZWFuXG4gIHZhbHVlPzogc3RyaW5nXG4gIHByZWZpeD86IHN0cmluZ1xuICBlcnJvclN0cmluZzogc3RyaW5nXG4gIHZhbGlkYXRpb246ICh2YWx1ZT86IHN0cmluZykgPT4gYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgRm9ybVByb3BzIHtcbiAgZm9ybTogRm9ybUlucHV0XG4gIG9uQ2hhbmdlOiAodmFsdWU6IEZvcm1JbnB1dCkgPT4gdm9pZFxufVxuXG5pbnRlcmZhY2UgRm9ybUlucHV0U3RhdGUge1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUlucHV0Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50PEZvcm1Qcm9wcywgRm9ybUlucHV0U3RhdGU+IHtcblxuICAgIHN0YXRlID0ge1xuICAgICAgaXNGb2N1c2VkOiBmYWxzZVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHsgdmFsaWRhdGlvbiwgdmFsdWUsIGlzVmFsaWQsIHByZWZpeCB9ID0gdGhpcy5wcm9wcy5mb3JtXG4gICAgICByZXR1cm4gPEZvcm1JbnB1dENvbnRhaW5lcj5cbiAgICAgICAgPEZvcm1UaXRsZT57IHRoaXMucHJvcHMuZm9ybS50aXRsZSB9PC8gRm9ybVRpdGxlPlxuICAgICAgICA8Rm9ybVRleHRJbnB1dENvbnRhaW5lciBpc1ZhbGlkPXsgaXNWYWxpZCB9IG1vZGlmeWluZz17IHRoaXMuc3RhdGUuaXNGb2N1c2VkIH0+XG4gICAgICAgICA8Rm9ybUlucHV0UHJlZml4PlxuICAgICAgICAgIHsgcHJlZml4IH1cbiAgICAgICAgPC8gRm9ybUlucHV0UHJlZml4PlxuICAgICAgICA8Rm9ybUlucHV0XG4gICAgICAgICAgICB2YWx1ZT17IHZhbHVlIH1cbiAgICAgICAgICAgIG9uRm9jdXM9eyAoKSA9PiB0aGlzLnNldFN0YXRlKHsgaXNGb2N1c2VkOiB0cnVlIH0pIH1cbiAgICAgICAgICAgIG9uQmx1cj17ICgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRm9jdXNlZDogZmFsc2UgfSlcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7IC4uLnRoaXMucHJvcHMuZm9ybSwgaXNWYWxpZDogdmFsaWRhdGlvbiggdmFsdWUgKSB9KVxuICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICBvbkNoYW5nZVRleHQ9eyAodGV4dCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHsgLi4udGhpcy5wcm9wcy5mb3JtLCB2YWx1ZTogdGV4dCwgaXNWYWxpZDogdmFsaWRhdGlvbiggdGV4dCApIH0pXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPC8gRm9ybVRleHRJbnB1dENvbnRhaW5lcj5cbiAgICAgICAgeyAodGhpcy5wcm9wcy5mb3JtLmlzVmFsaWQgPT09IGZhbHNlKSAmJiAhdGhpcy5zdGF0ZS5pc0ZvY3VzZWQgJiZcbiAgICAgICAgICAgIDxFcnJvclRpdGxlPnsgdGhpcy5wcm9wcy5mb3JtLmVycm9yU3RyaW5nIH08LyBFcnJvclRpdGxlPiB9XG4gICAgICA8LyBGb3JtSW5wdXRDb250YWluZXI+XG4gICAgfVxufSJdLCJ2ZXJzaW9uIjozfQ==