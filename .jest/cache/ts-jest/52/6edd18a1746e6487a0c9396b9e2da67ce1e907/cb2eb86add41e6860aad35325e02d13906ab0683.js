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
        return (react_1.default.createElement(SharedStyles_1.Container, null,
            react_1.default.createElement(SharedStyles_1.InnerContainer, null,
                react_1.default.createElement(SharedStyles_1.SectionTitle, null, "Send money"),
                react_1.default.createElement(FormInputComponent_1.default, { form: name, onChange: name => this.setState({ name }) }),
                react_1.default.createElement(FormInputComponent_1.default, { form: emailAddress, onChange: emailAddress => this.setState({ emailAddress }) }),
                react_1.default.createElement(FormInputComponent_1.default, { form: amount, onChange: amount => this.setState({ amount }) }),
                react_1.default.createElement(react_native_1.View, { style: { flex: 1 } }),
                react_1.default.createElement(SendButton, { disabled: this.props.isLoading, onPress: this.sendForm }, this.props.isLoading ? (react_1.default.createElement(react_native_1.ActivityIndicator, { animating: true, color: "white" })) : (react_1.default.createElement(SendButtonTitle, null, "Send"))))));
    }
}
const mapDispatchToProps = dispatch => ({
    send: (transaction) => dispatch({ type: ActionTypes_1.TypeKeys.SEND_MONEY, transaction })
});
const mapStateToProps = (state) => ({
    isLoading: state.send.loading
});
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(SendFormComponent);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2RhdmlkbXVycGh5L0Rlc2t0b3AvTW9uZXlTZW5kZXIvc3JjL1NlbmQvU2VuZEZvcm1Db21wb25lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLCtDQUF5QztBQUN6QywrQ0FBaUU7QUFDakUsOEVBQXFFO0FBQ3JFLHNFQUE4QztBQUM5Qyw2Q0FBMEM7QUFDMUMseURBSWdDO0FBQ2hDLDZDQUFzQztBQUV0QyxnREFBMEM7QUFFMUMsbUNBQTBEO0FBRTFELE1BQU0sVUFBVSxHQUFHLGdCQUFNLENBQUMsZ0JBQWdCLENBQUE7c0JBQ3BCLGVBQU0sQ0FBQyxJQUFJOzs7Ozs7Q0FNaEMsQ0FBQztBQUNGLE1BQU0sZUFBZSxHQUFHLGdCQUFNLENBQUMsSUFBSSxDQUFBOzs7O0NBSWxDLENBQUM7QUFnQkYsTUFBTSxpQkFBa0IsU0FBUSxpQkFHL0I7SUFIRDs7UUFJRSxVQUFLLEdBQWtCO1lBQ3JCLElBQUksRUFBRSxnQkFBUSxFQUFFO1lBQ2hCLFlBQVksRUFBRSxpQkFBUyxFQUFFO1lBQ3pCLE1BQU0sRUFBRSxrQkFBVSxFQUFFO1NBQ3JCLENBQUM7UUFFRixhQUFRLEdBQUcsR0FBRyxFQUFFO1lBQ2QsdUJBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUVuQixNQUFNLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ2xELElBQ0UsSUFBSSxDQUFDLEtBQUs7Z0JBQ1YsSUFBSSxDQUFDLE9BQU87Z0JBQ1osWUFBWSxDQUFDLEtBQUs7Z0JBQ2xCLFlBQVksQ0FBQyxPQUFPO2dCQUNwQixNQUFNLENBQUMsS0FBSztnQkFDWixNQUFNLENBQUMsT0FBTyxFQUNkO2dCQUNBLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO29CQUNkLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSztvQkFDaEIsS0FBSyxFQUFFLFlBQVksQ0FBQyxLQUFLO29CQUN6QixNQUFNLEVBQUUsTUFBTSxDQUFDLEtBQUs7aUJBQ3JCLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLENBQUM7b0JBQ1osSUFBSSxvQkFBTyxJQUFJLElBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFFO29CQUN2RCxZQUFZLG9CQUNQLFlBQVksSUFDZixPQUFPLEVBQUUsWUFBWSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQ3JEO29CQUNELE1BQU0sb0JBQU8sTUFBTSxJQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRTtpQkFDaEUsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLENBQUM7SUFnQ0osQ0FBQztJQTlCQyxNQUFNO1FBQ0osTUFBTSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNsRCxPQUFPLENBQ0wsOEJBQUMsd0JBQVM7WUFDUiw4QkFBQyw2QkFBYztnQkFDYiw4QkFBQywyQkFBWSxxQkFBMEI7Z0JBQ3ZDLDhCQUFDLDRCQUFrQixJQUNqQixJQUFJLEVBQUUsSUFBSSxFQUNWLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUN6QztnQkFDRiw4QkFBQyw0QkFBa0IsSUFDakIsSUFBSSxFQUFFLFlBQVksRUFDbEIsUUFBUSxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFlBQVksRUFBRSxDQUFDLEdBQ3pEO2dCQUNGLDhCQUFDLDRCQUFrQixJQUNqQixJQUFJLEVBQUUsTUFBTSxFQUNaLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUM3QztnQkFDRiw4QkFBQyxtQkFBSSxJQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBSTtnQkFDNUIsOEJBQUMsVUFBVSxJQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsSUFDL0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQ3RCLDhCQUFDLGdDQUFpQixJQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sR0FBSSxDQUN2RCxDQUFDLENBQUMsQ0FBQyxDQUNGLDhCQUFDLGVBQWUsZUFBdUIsQ0FDeEMsQ0FDVSxDQUNFLENBQ1AsQ0FDYixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBRUQsTUFBTSxrQkFBa0IsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdEMsSUFBSSxFQUFFLENBQUMsV0FBd0IsRUFBbUIsRUFBRSxDQUNsRCxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsc0JBQVEsQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLENBQUM7Q0FDdkQsQ0FBQyxDQUFDO0FBRUgsTUFBTSxlQUFlLEdBQUcsQ0FBQyxLQUFZLEVBQWlCLEVBQUUsQ0FBQyxDQUFDO0lBQ3hELFNBQVMsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU87Q0FDOUIsQ0FBQyxDQUFDO0FBRUgsa0JBQWUscUJBQU8sQ0FDcEIsZUFBZSxFQUNmLGtCQUFrQixDQUNuQixDQUFDLGlCQUFpQixDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2RhdmlkbXVycGh5L0Rlc2t0b3AvTW9uZXlTZW5kZXIvc3JjL1NlbmQvU2VuZEZvcm1Db21wb25lbnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFZpZXcsIEFjdGl2aXR5SW5kaWNhdG9yLCBLZXlib2FyZCB9IGZyb20gXCJyZWFjdC1uYXRpdmVcIjtcbmltcG9ydCBGb3JtSW5wdXRDb21wb25lbnQsIHsgRm9ybUlucHV0IH0gZnJvbSBcIi4vRm9ybUlucHV0Q29tcG9uZW50XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50cy9uYXRpdmVcIjtcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gXCIuLi9UaGVtZXMvY29sb3JzXCI7XG5pbXBvcnQge1xuICBTZWN0aW9uVGl0bGUsXG4gIENvbnRhaW5lcixcbiAgSW5uZXJDb250YWluZXJcbn0gZnJvbSBcIi4uL1RoZW1lcy9TaGFyZWRTdHlsZXNcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSBcIi4uL0FwcFwiO1xuaW1wb3J0IHsgVHlwZUtleXMgfSBmcm9tIFwiLi4vQWN0aW9uVHlwZXNcIjtcbmltcG9ydCB7IFRyYW5zYWN0aW9uLCBTZW5kTW9uZXlBY3Rpb24gfSBmcm9tIFwiLi9SZWR1Y2Vyc1wiO1xuaW1wb3J0IHsgbmFtZUZvcm0sIGVtYWlsRm9ybSwgYW1vdW50Rm9ybSB9IGZyb20gXCIuL0Zvcm1zXCI7XG5cbmNvbnN0IFNlbmRCdXR0b24gPSBzdHlsZWQuVG91Y2hhYmxlT3BhY2l0eWBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuYmx1ZX07XG4gIGhlaWdodDogNDhweDtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG5gO1xuY29uc3QgU2VuZEJ1dHRvblRpdGxlID0gc3R5bGVkLlRleHRgXG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogU3lzdGVtO1xuYDtcblxuaW50ZXJmYWNlIFNlbmRGb3JtU3RhdGUge1xuICBuYW1lOiBGb3JtSW5wdXQ7XG4gIGVtYWlsQWRkcmVzczogRm9ybUlucHV0O1xuICBhbW91bnQ6IEZvcm1JbnB1dDtcbn1cblxuaW50ZXJmYWNlIFNlbmRGb3JtUHJvcHMge1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBTZW5kRGlzcGF0Y2hQcm9wcyB7XG4gIHNlbmQ6ICh0cmFuc2F0aW9uOiBUcmFuc2FjdGlvbikgPT4gU2VuZE1vbmV5QWN0aW9uO1xufVxuXG5jbGFzcyBTZW5kRm9ybUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudDxcbiAgU2VuZEZvcm1Qcm9wcyAmIFNlbmREaXNwYXRjaFByb3BzLFxuICBTZW5kRm9ybVN0YXRlXG4+IHtcbiAgc3RhdGU6IFNlbmRGb3JtU3RhdGUgPSB7XG4gICAgbmFtZTogbmFtZUZvcm0oKSxcbiAgICBlbWFpbEFkZHJlc3M6IGVtYWlsRm9ybSgpLFxuICAgIGFtb3VudDogYW1vdW50Rm9ybSgpXG4gIH07XG5cbiAgc2VuZEZvcm0gPSAoKSA9PiB7XG4gICAgS2V5Ym9hcmQuZGlzbWlzcygpO1xuXG4gICAgY29uc3QgeyBuYW1lLCBlbWFpbEFkZHJlc3MsIGFtb3VudCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoXG4gICAgICBuYW1lLnZhbHVlICYmXG4gICAgICBuYW1lLmlzVmFsaWQgJiZcbiAgICAgIGVtYWlsQWRkcmVzcy52YWx1ZSAmJlxuICAgICAgZW1haWxBZGRyZXNzLmlzVmFsaWQgJiZcbiAgICAgIGFtb3VudC52YWx1ZSAmJlxuICAgICAgYW1vdW50LmlzVmFsaWRcbiAgICApIHtcbiAgICAgIHRoaXMucHJvcHMuc2VuZCh7XG4gICAgICAgIG5hbWU6IG5hbWUudmFsdWUsXG4gICAgICAgIGVtYWlsOiBlbWFpbEFkZHJlc3MudmFsdWUsXG4gICAgICAgIGFtb3VudDogYW1vdW50LnZhbHVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG5hbWU6IHsgLi4ubmFtZSwgaXNWYWxpZDogbmFtZS52YWxpZGF0aW9uKG5hbWUudmFsdWUpIH0sXG4gICAgICAgIGVtYWlsQWRkcmVzczoge1xuICAgICAgICAgIC4uLmVtYWlsQWRkcmVzcyxcbiAgICAgICAgICBpc1ZhbGlkOiBlbWFpbEFkZHJlc3MudmFsaWRhdGlvbihlbWFpbEFkZHJlc3MudmFsdWUpXG4gICAgICAgIH0sXG4gICAgICAgIGFtb3VudDogeyAuLi5hbW91bnQsIGlzVmFsaWQ6IGFtb3VudC52YWxpZGF0aW9uKGFtb3VudC52YWx1ZSkgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5hbWUsIGVtYWlsQWRkcmVzcywgYW1vdW50IH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8SW5uZXJDb250YWluZXI+XG4gICAgICAgICAgPFNlY3Rpb25UaXRsZT5TZW5kIG1vbmV5PC9TZWN0aW9uVGl0bGU+XG4gICAgICAgICAgPEZvcm1JbnB1dENvbXBvbmVudFxuICAgICAgICAgICAgZm9ybT17bmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtuYW1lID0+IHRoaXMuc2V0U3RhdGUoeyBuYW1lIH0pfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEZvcm1JbnB1dENvbXBvbmVudFxuICAgICAgICAgICAgZm9ybT17ZW1haWxBZGRyZXNzfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2VtYWlsQWRkcmVzcyA9PiB0aGlzLnNldFN0YXRlKHsgZW1haWxBZGRyZXNzIH0pfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEZvcm1JbnB1dENvbXBvbmVudFxuICAgICAgICAgICAgZm9ybT17YW1vdW50fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2Ftb3VudCA9PiB0aGlzLnNldFN0YXRlKHsgYW1vdW50IH0pfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3sgZmxleDogMSB9fSAvPlxuICAgICAgICAgIDxTZW5kQnV0dG9uIGRpc2FibGVkPXt0aGlzLnByb3BzLmlzTG9hZGluZ30gb25QcmVzcz17dGhpcy5zZW5kRm9ybX0+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5pc0xvYWRpbmcgPyAoXG4gICAgICAgICAgICAgIDxBY3Rpdml0eUluZGljYXRvciBhbmltYXRpbmc9e3RydWV9IGNvbG9yPXtcIndoaXRlXCJ9IC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8U2VuZEJ1dHRvblRpdGxlPlNlbmQ8L1NlbmRCdXR0b25UaXRsZT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9TZW5kQnV0dG9uPlxuICAgICAgICA8L0lubmVyQ29udGFpbmVyPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBzZW5kOiAodHJhbnNhY3Rpb246IFRyYW5zYWN0aW9uKTogU2VuZE1vbmV5QWN0aW9uID0+XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBUeXBlS2V5cy5TRU5EX01PTkVZLCB0cmFuc2FjdGlvbiB9KVxufSk7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogU3RhdGUpOiBTZW5kRm9ybVByb3BzID0+ICh7XG4gIGlzTG9hZGluZzogc3RhdGUuc2VuZC5sb2FkaW5nXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHNcbikoU2VuZEZvcm1Db21wb25lbnQpO1xuIl0sInZlcnNpb24iOjN9