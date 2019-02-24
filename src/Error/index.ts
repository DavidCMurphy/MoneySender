import { Action } from "redux";
import { Alert } from "react-native";
import { ofType, ActionsObservable } from "redux-observable";
import { TypeKeys } from "../ActionTypes";
import { of } from "rxjs";
import { mergeMap } from "rxjs/operators";

export interface ErrorAction {
  type: TypeKeys.SHOW_ERROR;
  title: string;
  message: string;
}

export default (action: ActionsObservable<Action>) =>
  action.pipe(
    ofType(TypeKeys.SHOW_ERROR),
    mergeMap((action$: ErrorAction) => {
      Alert.alert(
        action$.title,
        action$.message,
        [{ text: "Ok", style: "cancel" }],
        { cancelable: true }
      );
      return of();
    })
  );
