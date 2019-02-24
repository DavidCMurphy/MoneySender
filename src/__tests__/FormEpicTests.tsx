import { SendMoneyEpic, FailedSendEpic ,errorTitle, errorMessage } from "../Send/Epics";
import { SendMoneyAction, Transaction, SendMoneyActionFail } from "../Send/Reducers";
import { ActionsObservable } from "redux-observable";
import { TypeKeys } from "../ActionTypes";
import { of } from "rxjs";
import { AnyAction } from "redux";

describe("Form validation should function correctly", () => {
  // mock the store
  const store = {
    value: {
      account: {
        totalAvailable: 1000,
        totalSent: 0
      }
    }
  };

  it(`send should submit successfully`, async () => {
    const transaction: Transaction = {
      name: "",
      email: "",
      amount: "100"
    };

    const action: SendMoneyAction = {
      type: TypeKeys.SEND_MONEY,
      transaction
    };

    const actionObservable = new ActionsObservable<AnyAction>(of(action));
    const result = SendMoneyEpic(actionObservable, store as any);
    const actions = await result.toPromise();

    expect(actions).toEqual({ type: TypeKeys.SEND_MONEY_SUCCESS, transaction });
  });

  it(`send should fail because you dont have enough money`, async () => {
    const transaction: Transaction = {
      name: "",
      email: "",
      amount: "1000000"
    };

    const action: SendMoneyAction = {
      type: TypeKeys.SEND_MONEY,
      transaction
    };

    const actionObservable = new ActionsObservable<AnyAction>(of(action));
    const result = SendMoneyEpic(actionObservable, store as any);
    const actions = await result.toPromise();
    expect(actions).toEqual({
      type: TypeKeys.SEND_MONEY_FAIL
    });
  });

  it(`send should show an error message when the request does fail`, async () => {
    const action: SendMoneyActionFail = {
      type: TypeKeys.SEND_MONEY_FAIL,
    };

    const actionObservable = new ActionsObservable<AnyAction>(of(action));
    const result = FailedSendEpic(actionObservable);
    const actions = await result.toPromise();
    expect(actions).toEqual({
      type: TypeKeys.SHOW_ERROR,
      title: errorTitle,
      message: errorMessage
    });
  });
});
