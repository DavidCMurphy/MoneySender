import { ofType } from "redux-observable";
import { TypeKeys } from "../../ActionTypes";
import { of } from "rxjs";
import { mergeMap, delay } from "rxjs/operators";
export const errorTitle = "Error";
export const errorMessage = "Insufficient funds";
export const SendMoneyEpic = (action, store) => action.pipe(ofType(TypeKeys.SEND_MONEY), mergeMap((action$) => {
    const state = store.value;
    const total = state.account.totalAvailable;
    const amount = +action$.transaction.amount;
    return total - amount >= 0
        ? of({
            type: TypeKeys.SEND_MONEY_SUCCESS,
            transaction: action$.transaction
        })
        : of({ type: TypeKeys.SEND_MONEY_FAIL });
}), delay(3000));
export const FailedSendEpic = (action) => action.pipe(ofType(TypeKeys.SEND_MONEY_FAIL), mergeMap(() => of({
    type: TypeKeys.SHOW_ERROR,
    title: "Error",
    message: "Insufficient funds"
})));
//# sourceMappingURL=index.js.map