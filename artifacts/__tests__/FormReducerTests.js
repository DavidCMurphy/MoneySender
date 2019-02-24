import "react-native";
import AccountReducer, { defaultAccountState } from "../Account/Reducers";
import SendReducer, { defaultSendState } from "../Send/Reducers";
import { TypeKeys } from "../ActionTypes";
const transaction = {
    name: "David",
    email: "David.conor.m@gmail.com",
    amount: "100"
};
describe("Account reducer should function correctly", () => {
    it("should add a transaction to our list", () => {
        const account = AccountReducer(defaultAccountState(), {
            type: TypeKeys.SEND_MONEY_SUCCESS,
            transaction
        });
        expect(account.transations).toEqual([transaction]);
    });
    it("should add ammount to our send total", () => {
        const state = defaultAccountState();
        const account = AccountReducer(state, {
            type: TypeKeys.SEND_MONEY_SUCCESS,
            transaction
        });
        expect(account.totalSent).toEqual(state.totalSent + +transaction.amount);
    });
    it("should remove ammount from out total", () => {
        const state = defaultAccountState();
        const account = AccountReducer(state, {
            type: TypeKeys.SEND_MONEY_SUCCESS,
            transaction
        });
        expect(account.totalAvailable).toEqual(state.totalAvailable - +transaction.amount);
    });
});
describe("ASend reducer should function correctly", () => {
    it("should stop loading on success", () => {
        const send = SendReducer(defaultSendState(), {
            type: TypeKeys.SEND_MONEY_SUCCESS,
            transaction
        });
        expect(send.loading).toEqual(false);
    });
    it("should start loading on send", () => {
        const send = SendReducer(defaultSendState(), {
            type: TypeKeys.SEND_MONEY,
            transaction
        });
        expect(send.loading).toEqual(true);
    });
    it("should stop loading on fail", () => {
        const send = SendReducer(defaultSendState(), {
            type: TypeKeys.SEND_MONEY_FAIL
        });
        expect(send.loading).toEqual(false);
    });
});
//# sourceMappingURL=FormReducerTests.js.map