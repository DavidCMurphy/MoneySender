"use strict";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const redux_1 = require("redux");
const Epics_1 = require("./Send/Epics");
const Reducers_1 = __importDefault(require("./Send/Reducers"));
const Error_1 = __importDefault(require("./Error"));
const Reducers_2 = __importDefault(require("./Account/Reducers"));
const redux_logger_1 = __importDefault(require("redux-logger"));
const redux_observable_1 = require("redux-observable");
const react_native_1 = require("react-native");
const SendFormComponent_1 = __importDefault(require("./Send/SendFormComponent"));
const AccountDetailsComponent_1 = __importDefault(require("./Account/AccountDetailsComponent"));
const colors_1 = require("./Themes/colors");
const react_redux_1 = require("react-redux");
exports.currency = "£";
const rootEpic = redux_observable_1.combineEpics(Epics_1.SendMoneyEpic, Epics_1.FailedSendEpic, Error_1.default);
const rootReducer = redux_1.combineReducers({ send: Reducers_1.default, account: Reducers_2.default });
const epicMiddleware = redux_observable_1.createEpicMiddleware();
const combination = __DEV__
    ? redux_1.compose(redux_1.applyMiddleware(epicMiddleware, redux_logger_1.default))
    : redux_1.applyMiddleware(epicMiddleware);
const store = redux_1.createStore(rootReducer, combination);
epicMiddleware.run(rootEpic);
exports.default = () => {
    return (react_1.default.createElement(react_redux_1.Provider, { store: store },
        react_1.default.createElement(react_native_1.View, { style: {
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white"
            } },
            react_1.default.createElement(react_native_1.View, { style: { width: "100%", height: "80%", flexDirection: "row" } },
                react_1.default.createElement(SendFormComponent_1.default, null),
                react_1.default.createElement(react_native_1.View, { style: {
                        height: "100%",
                        width: 1,
                        backgroundColor: colors_1.colors.lightGrey
                    } }),
                react_1.default.createElement(AccountDetailsComponent_1.default, null)))));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2RhdmlkbXVycGh5L0Rlc2t0b3AvTW9uZXlTZW5kZXIvc3JjL0FwcC50c3giLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7O0dBT0c7Ozs7O0FBRUgsa0RBQTBCO0FBQzFCLGlDQU1lO0FBQ2Ysd0NBQTZEO0FBQzdELCtEQUFrRDtBQUNsRCxvREFBZ0M7QUFDaEMsa0VBQTJEO0FBQzNELGdFQUFrQztBQUNsQyx1REFBc0U7QUFDdEUsK0NBQW9DO0FBQ3BDLGlGQUF5RDtBQUN6RCxnR0FBd0U7QUFDeEUsNENBQXlDO0FBQ3pDLDZDQUF1QztBQUUxQixRQUFBLFFBQVEsR0FBRyxHQUFHLENBQUM7QUFPNUIsTUFBTSxRQUFRLEdBQUcsK0JBQVksQ0FBRSxxQkFBYSxFQUFFLHNCQUFjLEVBQUcsZUFBUyxDQUFDLENBQUM7QUFDMUUsTUFBTSxXQUFXLEdBQUcsdUJBQWUsQ0FBQyxFQUFFLElBQUksRUFBSixrQkFBSSxFQUFFLE9BQU8sRUFBUCxrQkFBTyxFQUFFLENBQUMsQ0FBQztBQUN2RCxNQUFNLGNBQWMsR0FBRyx1Q0FBb0IsRUFBRSxDQUFDO0FBQzlDLE1BQU0sV0FBVyxHQUFHLE9BQU87SUFDekIsQ0FBQyxDQUFDLGVBQU8sQ0FBQyx1QkFBZSxDQUFDLGNBQWMsRUFBRSxzQkFBTSxDQUFDLENBQUM7SUFDbEQsQ0FBQyxDQUFDLHVCQUFlLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDcEMsTUFBTSxLQUFLLEdBQWlCLG1CQUFXLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQ2xFLGNBQWMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFN0Isa0JBQWUsR0FBRyxFQUFFO0lBQ2xCLE9BQU8sQ0FDTCw4QkFBQyxzQkFBUSxJQUFDLEtBQUssRUFBRSxLQUFLO1FBQ3BCLDhCQUFDLG1CQUFJLElBQ0gsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxDQUFDO2dCQUNQLFVBQVUsRUFBRSxRQUFRO2dCQUNwQixjQUFjLEVBQUUsUUFBUTtnQkFDeEIsZUFBZSxFQUFFLE9BQU87YUFDekI7WUFFRCw4QkFBQyxtQkFBSSxJQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFO2dCQUNqRSw4QkFBQywyQkFBaUIsT0FBRztnQkFDckIsOEJBQUMsbUJBQUksSUFDSCxLQUFLLEVBQUU7d0JBQ0wsTUFBTSxFQUFFLE1BQU07d0JBQ2QsS0FBSyxFQUFFLENBQUM7d0JBQ1IsZUFBZSxFQUFFLGVBQU0sQ0FBQyxTQUFTO3FCQUNsQyxHQUNEO2dCQUNGLDhCQUFDLGlDQUF1QixPQUFHLENBQ3RCLENBQ0YsQ0FDRSxDQUNaLENBQUM7QUFDSixDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2RhdmlkbXVycGh5L0Rlc2t0b3AvTW9uZXlTZW5kZXIvc3JjL0FwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTYW1wbGUgUmVhY3QgTmF0aXZlIEFwcFxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZVxuICpcbiAqIEBmb3JtYXRcbiAqIEBmbG93XG4gKiBAbGludC1pZ25vcmUtZXZlcnkgWFBMQVRKU0NPUFlSSUdIVDFcbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBjcmVhdGVTdG9yZSxcbiAgYXBwbHlNaWRkbGV3YXJlLFxuICBjb21wb3NlLFxuICBTdG9yZSxcbiAgY29tYmluZVJlZHVjZXJzXG59IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgU2VuZE1vbmV5RXBpYywgRmFpbGVkU2VuZEVwaWMgfSBmcm9tIFwiLi9TZW5kL0VwaWNzXCI7XG5pbXBvcnQgc2VuZCwgeyBTZW5kU3RhdGUgfSBmcm9tIFwiLi9TZW5kL1JlZHVjZXJzXCI7XG5pbXBvcnQgRXJyb3JFcGljIGZyb20gXCIuL0Vycm9yXCI7XG5pbXBvcnQgYWNjb3VudCwgeyBBY2NvdW50U3RhdGUgfSBmcm9tIFwiLi9BY2NvdW50L1JlZHVjZXJzXCI7XG5pbXBvcnQgbG9nZ2VyIGZyb20gXCJyZWR1eC1sb2dnZXJcIjtcbmltcG9ydCB7IGNyZWF0ZUVwaWNNaWRkbGV3YXJlLCBjb21iaW5lRXBpY3MgfSBmcm9tIFwicmVkdXgtb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJyZWFjdC1uYXRpdmVcIjtcbmltcG9ydCBTZW5kRm9ybUNvbXBvbmVudCBmcm9tIFwiLi9TZW5kL1NlbmRGb3JtQ29tcG9uZW50XCI7XG5pbXBvcnQgQWNjb3VudERldGFpbHNDb21wb25lbnQgZnJvbSBcIi4vQWNjb3VudC9BY2NvdW50RGV0YWlsc0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSBcIi4vVGhlbWVzL2NvbG9yc1wiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuZXhwb3J0IGNvbnN0IGN1cnJlbmN5ID0gXCLCo1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcbiAgYWNjb3VudDogQWNjb3VudFN0YXRlO1xuICBzZW5kOiBTZW5kU3RhdGU7XG59XG5cbmNvbnN0IHJvb3RFcGljID0gY29tYmluZUVwaWNzKCBTZW5kTW9uZXlFcGljLCBGYWlsZWRTZW5kRXBpYyAsIEVycm9yRXBpYyk7XG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7IHNlbmQsIGFjY291bnQgfSk7XG5jb25zdCBlcGljTWlkZGxld2FyZSA9IGNyZWF0ZUVwaWNNaWRkbGV3YXJlKCk7XG5jb25zdCBjb21iaW5hdGlvbiA9IF9fREVWX19cbiAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZShlcGljTWlkZGxld2FyZSwgbG9nZ2VyKSlcbiAgOiBhcHBseU1pZGRsZXdhcmUoZXBpY01pZGRsZXdhcmUpO1xuY29uc3Qgc3RvcmU6IFN0b3JlPFN0YXRlPiA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBjb21iaW5hdGlvbik7XG5lcGljTWlkZGxld2FyZS5ydW4ocm9vdEVwaWMpO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8Vmlld1xuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGZsZXg6IDEsXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIlxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8VmlldyBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCI4MCVcIiwgZmxleERpcmVjdGlvbjogXCJyb3dcIiB9fT5cbiAgICAgICAgICA8U2VuZEZvcm1Db21wb25lbnQgLz5cbiAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgd2lkdGg6IDEsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmxpZ2h0R3JleVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxBY2NvdW50RGV0YWlsc0NvbXBvbmVudCAvPlxuICAgICAgICA8L1ZpZXc+XG4gICAgICA8L1ZpZXc+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn07XG4iXSwidmVyc2lvbiI6M30=