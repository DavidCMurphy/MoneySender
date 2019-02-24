/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React from "react";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { SendMoneyEpic, FailedSendEpic } from "./Send/Epics";
import send from "./Send/Reducers";
import ErrorEpic from "./Error";
import account from "./Account/Reducers";
import logger from "redux-logger";
import { createEpicMiddleware, combineEpics } from "redux-observable";
import { View } from "react-native";
import SendFormComponent from "./Send/SendFormComponent";
import AccountDetailsComponent from "./Account/AccountDetailsComponent";
import { colors } from "./Themes/colors";
import { Provider } from "react-redux";
export const currency = "£";
const rootEpic = combineEpics(SendMoneyEpic, FailedSendEpic, ErrorEpic);
const rootReducer = combineReducers({ send, account });
const epicMiddleware = createEpicMiddleware();
const combination = __DEV__
    ? compose(applyMiddleware(epicMiddleware, logger))
    : applyMiddleware(epicMiddleware);
const store = createStore(rootReducer, combination);
epicMiddleware.run(rootEpic);
export default () => {
    return (React.createElement(Provider, { store: store },
        React.createElement(View, { style: {
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white"
            } },
            React.createElement(View, { style: { width: "100%", height: "80%", flexDirection: "row" } },
                React.createElement(SendFormComponent, null),
                React.createElement(View, { style: {
                        height: "100%",
                        width: 1,
                        backgroundColor: colors.lightGrey
                    } }),
                React.createElement(AccountDetailsComponent, null)))));
};
//# sourceMappingURL=App.js.map