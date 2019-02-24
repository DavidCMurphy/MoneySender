var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { SendMoneyEpic, FailedSendEpic, errorTitle, errorMessage } from "../Send/Epics";
import { ActionsObservable } from "redux-observable";
import { TypeKeys } from "../ActionTypes";
import { of } from "rxjs";
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
    it(`send should submit successfully`, () => __awaiter(this, void 0, void 0, function* () {
        const transaction = {
            name: "",
            email: "",
            amount: "100"
        };
        const action = {
            type: TypeKeys.SEND_MONEY,
            transaction
        };
        const actionObservable = new ActionsObservable(of(action));
        const result = SendMoneyEpic(actionObservable, store);
        const actions = yield result.toPromise();
        expect(actions).toEqual({ type: TypeKeys.SEND_MONEY_SUCCESS, transaction });
    }));
    it(`send should fail because you dont have enough money`, () => __awaiter(this, void 0, void 0, function* () {
        const transaction = {
            name: "",
            email: "",
            amount: "1000000"
        };
        const action = {
            type: TypeKeys.SEND_MONEY,
            transaction
        };
        const actionObservable = new ActionsObservable(of(action));
        const result = SendMoneyEpic(actionObservable, store);
        const actions = yield result.toPromise();
        expect(actions).toEqual({
            type: TypeKeys.SEND_MONEY_FAIL
        });
    }));
    it(`send should show an error message when the request does fail`, () => __awaiter(this, void 0, void 0, function* () {
        const action = {
            type: TypeKeys.SEND_MONEY_FAIL,
        };
        const actionObservable = new ActionsObservable(of(action));
        const result = FailedSendEpic(actionObservable);
        const actions = yield result.toPromise();
        expect(actions).toEqual({
            type: TypeKeys.SHOW_ERROR,
            title: errorTitle,
            message: errorMessage
        });
    }));
});
//# sourceMappingURL=FormEpicTests.js.map