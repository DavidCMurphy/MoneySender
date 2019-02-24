/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from "react";
import {
  createStore,
  applyMiddleware,
  compose,
  Store,
  combineReducers
} from "redux";
import { SendMoneyEpic, FailedSendEpic } from "./Send/Epics";
import send, { SendState } from "./Send/Reducers";
import ErrorEpic from "./Error";
import account, { AccountState } from "./Account/Reducers";
import logger from "redux-logger";
import { createEpicMiddleware, combineEpics } from "redux-observable";
import { View } from "react-native";
import SendFormComponent from "./Send/SendFormComponent";
import AccountDetailsComponent from "./Account/AccountDetailsComponent";
import { colors } from "./Themes/colors";
import { Provider } from "react-redux";

export const currency = "£";

export interface State {
  account: AccountState;
  send: SendState;
}

const rootEpic = combineEpics( SendMoneyEpic, FailedSendEpic , ErrorEpic);
const rootReducer = combineReducers({ send, account });
const epicMiddleware = createEpicMiddleware();
const combination = __DEV__
  ? compose(applyMiddleware(epicMiddleware, logger))
  : applyMiddleware(epicMiddleware);
const store: Store<State> = createStore(rootReducer, combination);
epicMiddleware.run(rootEpic);

export default () => {
  return (
    <Provider store={store}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white"
        }}
      >
        <View style={{ width: "100%", height: "80%", flexDirection: "row" }}>
          <SendFormComponent />
          <View
            style={{
              height: "100%",
              width: 1,
              backgroundColor: colors.lightGrey
            }}
          />
          <AccountDetailsComponent />
        </View>
      </View>
    </Provider>
  );
};
