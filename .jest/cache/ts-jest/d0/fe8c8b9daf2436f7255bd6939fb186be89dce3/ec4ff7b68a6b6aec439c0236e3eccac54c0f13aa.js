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
const react_native_1 = require("react-native");
const FormInputComponent_1 = __importDefault(require("./FormInputComponent"));
const native_1 = __importDefault(require("styled-components/native"));
const colors_1 = require("../Themes/colors");
const SharedStyles_1 = require("../Themes/SharedStyles");
const react_redux_1 = require("react-redux");
const ActionTypes_1 = require("../ActionTypes");
const Forms_1 = require("./Forms");
const SendButton = native_1.default.TouchableOpacity `
    background-color: ${colors_1.colors.blue};
    height: 48px;
    border-radius: 24px;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`;
const SendButtonTitle = native_1.default.Text `
    color: white;
    font-size: 15px;
    font-family: System;
`;
class SendFormComponent extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            name: Forms_1.nameForm(),
            emailAddress: Forms_1.emailForm(),
            amount: Forms_1.amountForm()
        };
        this.sendForm = () => {
            react_native_1.Keyboard.dismiss();
            let { name, emailAddress, amount } = this.state;
            if (name.value && name.isValid &&
                emailAddress.value && emailAddress.isValid &&
                amount.value && amount.isValid) {
                this.props.send({ name: name.value, email: emailAddress.value, amount: amount.value });
            }
            else {
                this.setState({ name: Object.assign({}, name, { isValid: name.validation(name.value) }),
                    emailAddress: Object.assign({}, emailAddress, { isValid: emailAddress.validation(emailAddress.value) }),
                    amount: Object.assign({}, amount, { isValid: amount.validation(amount.value) }) });
            }
        };
    }
    render() {
        const { name, emailAddress, amount } = this.state;
        return react_1.default.createElement(SharedStyles_1.Container, null,
            react_1.default.createElement(SharedStyles_1.InnerContainer, null,
                react_1.default.createElement(SharedStyles_1.SectionTitle, null, "Send money"),
                react_1.default.createElement(FormInputComponent_1.default, { form: name, onChange: (name) => this.setState({ name }) }),
                react_1.default.createElement(FormInputComponent_1.default, { form: emailAddress, onChange: (emailAddress) => this.setState({ emailAddress }) }),
                react_1.default.createElement(FormInputComponent_1.default, { form: amount, onChange: (amount) => this.setState({ amount }) }),
                react_1.default.createElement(react_native_1.View, { style: { flex: 1 } }),
                react_1.default.createElement(SendButton, { disabled: this.props.isLoading, onPress: this.sendForm }, (this.props.isLoading)
                    ? react_1.default.createElement(react_native_1.ActivityIndicator, { animating: true, color: 'white' })
                    : (react_1.default.createElement(SendButtonTitle, null, "Send")))));
    }
}
const mapDispatchToProps = (dispatch) => ({
    send: (transaction) => dispatch({ type: ActionTypes_1.TypeKeys.SEND_MONEY, transaction })
});
const mapStateToProps = (state) => ({
    isLoading: state.send.loading
});
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(SendFormComponent);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2RhdmlkbXVycGh5L0Rlc2t0b3AvTW9uZXlTZW5kZXIvc3JjL1NlbmQvU2VuZEZvcm1Db21wb25lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLCtDQUF5QztBQUN6QywrQ0FBZ0U7QUFDaEUsOEVBQW9FO0FBQ3BFLHNFQUE2QztBQUM3Qyw2Q0FBeUM7QUFDekMseURBQWdGO0FBQ2hGLDZDQUFxQztBQUVyQyxnREFBeUM7QUFFekMsbUNBQXlEO0FBRXpELE1BQU0sVUFBVSxHQUFHLGdCQUFNLENBQUMsZ0JBQWdCLENBQUE7d0JBQ2pCLGVBQU0sQ0FBQyxJQUFLOzs7Ozs7Q0FNcEMsQ0FBQTtBQUNELE1BQU0sZUFBZSxHQUFHLGdCQUFNLENBQUMsSUFBSSxDQUFBOzs7O0NBSWxDLENBQUE7QUFnQkQsTUFBTSxpQkFBa0IsU0FBUSxpQkFBMkQ7SUFBM0Y7O1FBRUUsVUFBSyxHQUFrQjtZQUNyQixJQUFJLEVBQUUsZ0JBQVEsRUFBRTtZQUNoQixZQUFZLEVBQUUsaUJBQVMsRUFBRTtZQUN6QixNQUFNLEVBQUUsa0JBQVUsRUFBRTtTQUNyQixDQUFBO1FBRUQsYUFBUSxHQUFHLEdBQUcsRUFBRTtZQUVkLHVCQUFRLENBQUMsT0FBTyxFQUFFLENBQUE7WUFFbEIsSUFBSSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtZQUMvQyxJQUFLLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE9BQU87Z0JBQzNCLFlBQVksQ0FBQyxLQUFLLElBQUksWUFBWSxDQUFDLE9BQU87Z0JBQzFDLE1BQU0sQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRztnQkFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFFLENBQUE7YUFDekY7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksb0JBQU8sSUFBSSxJQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUUsR0FBRTtvQkFDdkUsWUFBWSxvQkFBTyxZQUFZLElBQUUsT0FBTyxFQUFFLFlBQVksQ0FBQyxVQUFVLENBQUUsWUFBWSxDQUFDLEtBQUssQ0FBRSxHQUFFO29CQUN6RixNQUFNLG9CQUFPLE1BQU0sSUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBRSxNQUFNLENBQUMsS0FBSyxDQUFFLEdBQUUsRUFBRSxDQUFDLENBQUE7YUFDdkU7UUFDSCxDQUFDLENBQUE7SUE2QkgsQ0FBQztJQTNCQyxNQUFNO1FBQ0osTUFBTSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtRQUNqRCxPQUFPLDhCQUFDLHdCQUFTO1lBQ2YsOEJBQUMsNkJBQWM7Z0JBQ2YsOEJBQUMsMkJBQVkscUJBQTJCO2dCQUN4Qyw4QkFBQyw0QkFBa0IsSUFDakIsSUFBSSxFQUFHLElBQUksRUFDWCxRQUFRLEVBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFLO2dCQUNuRCw4QkFBQyw0QkFBa0IsSUFDakIsSUFBSSxFQUFHLFlBQVksRUFDbkIsUUFBUSxFQUFHLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsWUFBWSxFQUFFLENBQUMsR0FBSztnQkFDbkUsOEJBQUMsNEJBQWtCLElBQ2pCLElBQUksRUFBRyxNQUFNLEVBQ2IsUUFBUSxFQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsR0FBSztnQkFDdkQsOEJBQUMsbUJBQUksSUFBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEdBQUk7Z0JBQzVCLDhCQUFDLFVBQVUsSUFDVCxRQUFRLEVBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQy9CLE9BQU8sRUFBRyxJQUFJLENBQUMsUUFBUSxJQUNuQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO29CQUN4QixDQUFDLENBQUMsOEJBQUMsZ0NBQWlCLElBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxHQUFJO29CQUN4RCxDQUFDLENBQUMsQ0FBQyw4QkFBQyxlQUFlLGVBRUEsQ0FBQyxDQUNSLENBQ0UsQ0FDUCxDQUFBO0lBQ2YsQ0FBQztDQUNGO0FBRUQsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4QyxJQUFJLEVBQUUsQ0FBQyxXQUF3QixFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsc0JBQVEsQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLENBQUM7Q0FDekYsQ0FBQyxDQUFBO0FBRUYsTUFBTSxlQUFlLEdBQUcsQ0FBQyxLQUFZLEVBQWlCLEVBQUUsQ0FBQyxDQUFDO0lBQ3hELFNBQVMsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU87Q0FDOUIsQ0FBQyxDQUFBO0FBRUYsa0JBQWUscUJBQU8sQ0FBQyxlQUFlLEVBQUUsa0JBQWtCLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZG11cnBoeS9EZXNrdG9wL01vbmV5U2VuZGVyL3NyYy9TZW5kL1NlbmRGb3JtQ29tcG9uZW50LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVmlldywgQWN0aXZpdHlJbmRpY2F0b3IsIEtleWJvYXJkIH0gZnJvbSAncmVhY3QtbmF0aXZlJ1xuaW1wb3J0IEZvcm1JbnB1dENvbXBvbmVudCwgeyBGb3JtSW5wdXQgfSBmcm9tICcuL0Zvcm1JbnB1dENvbXBvbmVudCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMvbmF0aXZlJ1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vVGhlbWVzL2NvbG9ycydcbmltcG9ydCB7IFNlY3Rpb25UaXRsZSwgQ29udGFpbmVyLCBJbm5lckNvbnRhaW5lciB9IGZyb20gJy4uL1RoZW1lcy9TaGFyZWRTdHlsZXMnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4uL0FwcCdcbmltcG9ydCB7IFR5cGVLZXlzIH0gZnJvbSAnLi4vQWN0aW9uVHlwZXMnXG5pbXBvcnQgeyBUcmFuc2FjdGlvbiwgU2VuZE1vbmV5QWN0aW9uIH0gZnJvbSAnLi9SZWR1Y2VycydcbmltcG9ydCB7IG5hbWVGb3JtLCBlbWFpbEZvcm0sIGFtb3VudEZvcm0gfSBmcm9tICcuL0Zvcm1zJ1xuXG5jb25zdCBTZW5kQnV0dG9uID0gc3R5bGVkLlRvdWNoYWJsZU9wYWNpdHlgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsgY29sb3JzLmJsdWUgfTtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5gXG5jb25zdCBTZW5kQnV0dG9uVGl0bGUgPSBzdHlsZWQuVGV4dGBcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBTeXN0ZW07XG5gXG5cbmludGVyZmFjZSBTZW5kRm9ybVN0YXRlIHtcbiAgICBuYW1lOiBGb3JtSW5wdXRcbiAgICBlbWFpbEFkZHJlc3M6IEZvcm1JbnB1dFxuICAgIGFtb3VudDogRm9ybUlucHV0XG59XG5cbmludGVyZmFjZSBTZW5kRm9ybVByb3BzIHtcbiAgaXNMb2FkaW5nOiBib29sZWFuXG59XG5cbmludGVyZmFjZSBTZW5kRGlzcGF0Y2hQcm9wcyB7XG4gIHNlbmQ6ICh0cmFuc2F0aW9uOiBUcmFuc2FjdGlvbikgPT4gU2VuZE1vbmV5QWN0aW9uXG59XG5cbmNsYXNzIFNlbmRGb3JtQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50PFNlbmRGb3JtUHJvcHMgJiBTZW5kRGlzcGF0Y2hQcm9wcywgU2VuZEZvcm1TdGF0ZT4ge1xuXG4gIHN0YXRlOiBTZW5kRm9ybVN0YXRlID0ge1xuICAgIG5hbWU6IG5hbWVGb3JtKCksXG4gICAgZW1haWxBZGRyZXNzOiBlbWFpbEZvcm0oKSxcbiAgICBhbW91bnQ6IGFtb3VudEZvcm0oKVxuICB9XG5cbiAgc2VuZEZvcm0gPSAoKSA9PiB7XG5cbiAgICBLZXlib2FyZC5kaXNtaXNzKClcblxuICAgIGxldCB7IG5hbWUsIGVtYWlsQWRkcmVzcywgYW1vdW50IH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKCBuYW1lLnZhbHVlICYmIG5hbWUuaXNWYWxpZCAmJlxuICAgICAgICBlbWFpbEFkZHJlc3MudmFsdWUgJiYgZW1haWxBZGRyZXNzLmlzVmFsaWQgJiZcbiAgICAgICAgYW1vdW50LnZhbHVlICYmIGFtb3VudC5pc1ZhbGlkICkge1xuICAgICAgdGhpcy5wcm9wcy5zZW5kKCB7IG5hbWU6IG5hbWUudmFsdWUsIGVtYWlsOiBlbWFpbEFkZHJlc3MudmFsdWUsIGFtb3VudDogYW1vdW50LnZhbHVlIH0gKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbmFtZTogeyAuLi5uYW1lLCBpc1ZhbGlkOiBuYW1lLnZhbGlkYXRpb24oIG5hbWUudmFsdWUgKSB9LFxuICAgICAgICBlbWFpbEFkZHJlc3M6IHsgLi4uZW1haWxBZGRyZXNzLCBpc1ZhbGlkOiBlbWFpbEFkZHJlc3MudmFsaWRhdGlvbiggZW1haWxBZGRyZXNzLnZhbHVlICkgfSxcbiAgICAgICAgYW1vdW50OiB7IC4uLmFtb3VudCwgaXNWYWxpZDogYW1vdW50LnZhbGlkYXRpb24oIGFtb3VudC52YWx1ZSApIH0gfSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBuYW1lLCBlbWFpbEFkZHJlc3MsIGFtb3VudCB9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiA8Q29udGFpbmVyPlxuICAgICAgPElubmVyQ29udGFpbmVyPlxuICAgICAgPFNlY3Rpb25UaXRsZT5TZW5kIG1vbmV5PC8gU2VjdGlvblRpdGxlPlxuICAgICAgPEZvcm1JbnB1dENvbXBvbmVudFxuICAgICAgICBmb3JtPXsgbmFtZSB9XG4gICAgICAgIG9uQ2hhbmdlPXsgKG5hbWUpID0+IHRoaXMuc2V0U3RhdGUoeyBuYW1lIH0pIH0gLz5cbiAgICAgIDxGb3JtSW5wdXRDb21wb25lbnRcbiAgICAgICAgZm9ybT17IGVtYWlsQWRkcmVzcyB9XG4gICAgICAgIG9uQ2hhbmdlPXsgKGVtYWlsQWRkcmVzcykgPT4gdGhpcy5zZXRTdGF0ZSh7IGVtYWlsQWRkcmVzcyB9KSB9IC8+XG4gICAgICA8Rm9ybUlucHV0Q29tcG9uZW50XG4gICAgICAgIGZvcm09eyBhbW91bnQgfVxuICAgICAgICBvbkNoYW5nZT17IChhbW91bnQpID0+IHRoaXMuc2V0U3RhdGUoeyBhbW91bnQgfSkgfSAvPlxuICAgICAgPFZpZXcgc3R5bGU9e3sgZmxleDogMSB9fSAvPlxuICAgICAgPFNlbmRCdXR0b25cbiAgICAgICAgZGlzYWJsZWQ9eyB0aGlzLnByb3BzLmlzTG9hZGluZyB9XG4gICAgICAgIG9uUHJlc3M9eyB0aGlzLnNlbmRGb3JtIH0+XG4gICAgICAgICAgeyAodGhpcy5wcm9wcy5pc0xvYWRpbmcpXG4gICAgICAgICAgPyA8QWN0aXZpdHlJbmRpY2F0b3IgYW5pbWF0aW5nPXt0cnVlfSBjb2xvcj17J3doaXRlJ30gLz5cbiAgICAgICAgICA6ICg8U2VuZEJ1dHRvblRpdGxlPlxuICAgICAgICAgICAgU2VuZFxuICAgICAgICAgIDwvIFNlbmRCdXR0b25UaXRsZT4pIH1cbiAgICAgICAgPC8gU2VuZEJ1dHRvbj5cbiAgICAgIDwvIElubmVyQ29udGFpbmVyPlxuICAgIDwvIENvbnRhaW5lcj5cbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIHNlbmQ6ICh0cmFuc2FjdGlvbjogVHJhbnNhY3Rpb24pID0+IGRpc3BhdGNoKHsgdHlwZTogVHlwZUtleXMuU0VORF9NT05FWSwgdHJhbnNhY3Rpb24gfSlcbn0pXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogU3RhdGUpOiBTZW5kRm9ybVByb3BzID0+ICh7XG4gIGlzTG9hZGluZzogc3RhdGUuc2VuZC5sb2FkaW5nXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTZW5kRm9ybUNvbXBvbmVudCkiXSwidmVyc2lvbiI6M30=