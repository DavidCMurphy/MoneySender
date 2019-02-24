import { Action } from "redux";
import { ofType, ActionsObservable, StateObservable } from "redux-observable";
import { TypeKeys } from "../../ActionTypes";
import {
  SendMoneyAction,
  SendMoneyActionSuccess,
  SendMoneyActionFail
} from "../Reducers";
import { of, Observable } from "rxjs";
import { mergeMap, delay } from "rxjs/operators";
import { ErrorAction } from "../../Error";
import { State } from "../../App";

export const errorTitle = "Error";
export const errorMessage = "Insufficient funds";

export const SendMoneyEpic = (
  action: ActionsObservable<Action>,
  store: StateObservable<State>
) =>
  action.pipe(
    ofType(TypeKeys.SEND_MONEY),
    mergeMap(
      (action$: SendMoneyAction
        ): Observable<SendMoneyActionSuccess | SendMoneyActionFail> => {
        const state = store.value;
        const total = state.account.totalAvailable;
        const amount = +action$.transaction.amount;
        return total - amount >= 0
          ? of<SendMoneyActionSuccess>({
              type: TypeKeys.SEND_MONEY_SUCCESS,
              transaction: action$.transaction
            })
          : of<SendMoneyActionFail>({ type: TypeKeys.SEND_MONEY_FAIL })
      }
    ),
    delay(3000)
  );

export const FailedSendEpic = (action: ActionsObservable<Action>) =>
  action.pipe(
    ofType(TypeKeys.SEND_MONEY_FAIL),
    mergeMap(
      (): Observable<ErrorAction> =>
        of<ErrorAction>({
          type: TypeKeys.SHOW_ERROR,
          title: "Error",
          message: "Insufficient funds"
        })
    )
  );
