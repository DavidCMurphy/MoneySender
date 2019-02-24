"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SharedStyles_1 = require("../Themes/SharedStyles");
const AccountPieChart_1 = __importDefault(require("./AccountPieChart"));
const native_1 = __importDefault(require("styled-components/native"));
const react_redux_1 = require("react-redux");
const App_1 = require("../App");
const AccountTransactionsList_1 = __importDefault(require("./AccountTransactionsList"));
const PieContainer = native_1.default.View `
  margin-top: 70px;
  margin-bottom: 70px;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
`;
const PieAccountText = native_1.default.Text `
  font-size: 16px;
`;
const PieTextContainer = native_1.default.View `
  align-items: center;
  justify-content: center;
`;
const AccountDetailsComponent = (props) => {
    return (react_1.default.createElement(SharedStyles_1.Container, null,
        react_1.default.createElement(SharedStyles_1.InnerContainer, null,
            react_1.default.createElement(SharedStyles_1.SectionTitle, null, "My account"),
            react_1.default.createElement(PieContainer, null,
                react_1.default.createElement(PieTextContainer, null,
                    react_1.default.createElement(PieAccountText, null, `${App_1.currency} ${props.totalSent}`),
                    react_1.default.createElement(PieAccountText, null, "total sent")),
                react_1.default.createElement(AccountPieChart_1.default, null),
                react_1.default.createElement(PieTextContainer, null,
                    react_1.default.createElement(PieAccountText, null, `${App_1.currency} ${props.totalAvailable}`),
                    react_1.default.createElement(PieAccountText, null, "total available"))),
            react_1.default.createElement(AccountTransactionsList_1.default, null))));
};
const mapStateToProps = (state) => ({
    totalSent: state.account.totalSent,
    totalAvailable: state.account.totalAvailable
});
exports.default = react_redux_1.connect(mapStateToProps)(AccountDetailsComponent);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2RhdmlkbXVycGh5L0Rlc2t0b3AvTW9uZXlTZW5kZXIvc3JjL0FjY291bnQvQWNjb3VudERldGFpbHNDb21wb25lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQTBCO0FBQzFCLHlEQUlnQztBQUNoQyx3RUFBZ0Q7QUFDaEQsc0VBQThDO0FBQzlDLDZDQUFzQztBQUN0QyxnQ0FBeUM7QUFDekMsd0ZBQWdFO0FBRWhFLE1BQU0sWUFBWSxHQUFHLGdCQUFNLENBQUMsSUFBSSxDQUFBOzs7Ozs7O0NBTy9CLENBQUM7QUFDRixNQUFNLGNBQWMsR0FBRyxnQkFBTSxDQUFDLElBQUksQ0FBQTs7Q0FFakMsQ0FBQztBQUVGLE1BQU0sZ0JBQWdCLEdBQUcsZ0JBQU0sQ0FBQyxJQUFJLENBQUE7OztDQUduQyxDQUFDO0FBT0YsTUFBTSx1QkFBdUIsR0FBRyxDQUFDLEtBQTBCLEVBQUUsRUFBRTtJQUM3RCxPQUFPLENBQ0wsOEJBQUMsd0JBQVM7UUFDUiw4QkFBQyw2QkFBYztZQUNiLDhCQUFDLDJCQUFZLHFCQUEwQjtZQUN2Qyw4QkFBQyxZQUFZO2dCQUNYLDhCQUFDLGdCQUFnQjtvQkFDZiw4QkFBQyxjQUFjLFFBQUUsR0FBRyxjQUFRLElBQUksS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFrQjtvQkFDbkUsOEJBQUMsY0FBYyxxQkFBNEIsQ0FDMUI7Z0JBQ25CLDhCQUFDLHlCQUFlLE9BQUc7Z0JBQ25CLDhCQUFDLGdCQUFnQjtvQkFDZiw4QkFBQyxjQUFjLFFBQ1osR0FBRyxjQUFRLElBQUksS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUN2QjtvQkFDakIsOEJBQUMsY0FBYywwQkFBaUMsQ0FDL0IsQ0FDTjtZQUNmLDhCQUFDLGlDQUF1QixPQUFHLENBQ1osQ0FDUCxDQUNiLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixNQUFNLGVBQWUsR0FBRyxDQUFDLEtBQVksRUFBdUIsRUFBRSxDQUFDLENBQUM7SUFDOUQsU0FBUyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUztJQUNsQyxjQUFjLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFjO0NBQzdDLENBQUMsQ0FBQztBQUVILGtCQUFlLHFCQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvZGF2aWRtdXJwaHkvRGVza3RvcC9Nb25leVNlbmRlci9zcmMvQWNjb3VudC9BY2NvdW50RGV0YWlsc0NvbXBvbmVudC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgU2VjdGlvblRpdGxlLFxuICBDb250YWluZXIsXG4gIElubmVyQ29udGFpbmVyXG59IGZyb20gXCIuLi9UaGVtZXMvU2hhcmVkU3R5bGVzXCI7XG5pbXBvcnQgQWNjb3VudFBpZUNoYXJ0IGZyb20gXCIuL0FjY291bnRQaWVDaGFydFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHMvbmF0aXZlXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBTdGF0ZSwgY3VycmVuY3kgfSBmcm9tIFwiLi4vQXBwXCI7XG5pbXBvcnQgQWNjb3VudFRyYW5zYWN0aW9uc0xpc3QgZnJvbSBcIi4vQWNjb3VudFRyYW5zYWN0aW9uc0xpc3RcIjtcblxuY29uc3QgUGllQ29udGFpbmVyID0gc3R5bGVkLlZpZXdgXG4gIG1hcmdpbi10b3A6IDcwcHg7XG4gIG1hcmdpbi1ib3R0b206IDcwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbmA7XG5jb25zdCBQaWVBY2NvdW50VGV4dCA9IHN0eWxlZC5UZXh0YFxuICBmb250LXNpemU6IDE2cHg7XG5gO1xuXG5jb25zdCBQaWVUZXh0Q29udGFpbmVyID0gc3R5bGVkLlZpZXdgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYDtcblxuaW50ZXJmYWNlIEFjY291bnREZXRhaWxzUHJvcHMge1xuICB0b3RhbFNlbnQ6IG51bWJlcjtcbiAgdG90YWxBdmFpbGFibGU6IG51bWJlcjtcbn1cblxuY29uc3QgQWNjb3VudERldGFpbHNDb21wb25lbnQgPSAocHJvcHM6IEFjY291bnREZXRhaWxzUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPElubmVyQ29udGFpbmVyPlxuICAgICAgICA8U2VjdGlvblRpdGxlPk15IGFjY291bnQ8L1NlY3Rpb25UaXRsZT5cbiAgICAgICAgPFBpZUNvbnRhaW5lcj5cbiAgICAgICAgICA8UGllVGV4dENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxQaWVBY2NvdW50VGV4dD57YCR7Y3VycmVuY3l9ICR7cHJvcHMudG90YWxTZW50fWB9PC9QaWVBY2NvdW50VGV4dD5cbiAgICAgICAgICAgIDxQaWVBY2NvdW50VGV4dD50b3RhbCBzZW50PC9QaWVBY2NvdW50VGV4dD5cbiAgICAgICAgICA8L1BpZVRleHRDb250YWluZXI+XG4gICAgICAgICAgPEFjY291bnRQaWVDaGFydCAvPlxuICAgICAgICAgIDxQaWVUZXh0Q29udGFpbmVyPlxuICAgICAgICAgICAgPFBpZUFjY291bnRUZXh0PlxuICAgICAgICAgICAgICB7YCR7Y3VycmVuY3l9ICR7cHJvcHMudG90YWxBdmFpbGFibGV9YH1cbiAgICAgICAgICAgIDwvUGllQWNjb3VudFRleHQ+XG4gICAgICAgICAgICA8UGllQWNjb3VudFRleHQ+dG90YWwgYXZhaWxhYmxlPC9QaWVBY2NvdW50VGV4dD5cbiAgICAgICAgICA8L1BpZVRleHRDb250YWluZXI+XG4gICAgICAgIDwvUGllQ29udGFpbmVyPlxuICAgICAgICA8QWNjb3VudFRyYW5zYWN0aW9uc0xpc3QgLz5cbiAgICAgIDwvSW5uZXJDb250YWluZXI+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFN0YXRlKTogQWNjb3VudERldGFpbHNQcm9wcyA9PiAoe1xuICB0b3RhbFNlbnQ6IHN0YXRlLmFjY291bnQudG90YWxTZW50LFxuICB0b3RhbEF2YWlsYWJsZTogc3RhdGUuYWNjb3VudC50b3RhbEF2YWlsYWJsZVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShBY2NvdW50RGV0YWlsc0NvbXBvbmVudCk7XG4iXSwidmVyc2lvbiI6M30=