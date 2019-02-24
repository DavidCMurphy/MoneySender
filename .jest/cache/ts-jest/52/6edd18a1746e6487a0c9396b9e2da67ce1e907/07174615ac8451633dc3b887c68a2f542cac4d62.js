"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("react-native");
const Reducers_1 = __importStar(require("../Account/Reducers"));
const Reducers_2 = __importStar(require("../Send/Reducers"));
const ActionTypes_1 = require("../ActionTypes");
const transaction = {
    name: "David",
    email: "David.conor.m@gmail.com",
    amount: "100"
};
describe("Account reducer should function correctly", () => {
    it("should add a transaction to our list", () => {
        const account = Reducers_1.default(Reducers_1.defaultAccountState(), {
            type: ActionTypes_1.TypeKeys.SEND_MONEY_SUCCESS,
            transaction
        });
        expect(account.transations).toEqual([transaction]);
    });
    it("should add ammount to our send total", () => {
        const state = Reducers_1.defaultAccountState();
        const account = Reducers_1.default(state, {
            type: ActionTypes_1.TypeKeys.SEND_MONEY_SUCCESS,
            transaction
        });
        expect(account.totalSent).toEqual(state.totalSent + +transaction.amount);
    });
    it("should remove ammount from out total", () => {
        const state = Reducers_1.defaultAccountState();
        const account = Reducers_1.default(state, {
            type: ActionTypes_1.TypeKeys.SEND_MONEY_SUCCESS,
            transaction
        });
        expect(account.totalAvailable).toEqual(state.totalAvailable - +transaction.amount);
    });
});
describe("ASend reducer should function correctly", () => {
    it("should stop loading on success", () => {
        const send = Reducers_2.default(Reducers_2.defaultSendState(), {
            type: ActionTypes_1.TypeKeys.SEND_MONEY_SUCCESS,
            transaction
        });
        expect(send.loading).toEqual(false);
    });
    it("should start loading on send", () => {
        const send = Reducers_2.default(Reducers_2.defaultSendState(), {
            type: ActionTypes_1.TypeKeys.SEND_MONEY,
            transaction
        });
        expect(send.loading).toEqual(true);
    });
    it("should stop loading on fail", () => {
        const send = Reducers_2.default(Reducers_2.defaultSendState(), {
            type: ActionTypes_1.TypeKeys.SEND_MONEY_FAIL
        });
        expect(send.loading).toEqual(false);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2RhdmlkbXVycGh5L0Rlc2t0b3AvTW9uZXlTZW5kZXIvc3JjL19fdGVzdHNfXy9Gb3JtUmVkdWNlclRlc3RzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx3QkFBc0I7QUFDdEIsZ0VBQTBFO0FBQzFFLDZEQUFpRTtBQUNqRSxnREFBMEM7QUFFMUMsTUFBTSxXQUFXLEdBQUc7SUFDbEIsSUFBSSxFQUFFLE9BQU87SUFDYixLQUFLLEVBQUUseUJBQXlCO0lBQ2hDLE1BQU0sRUFBRSxLQUFLO0NBQ2QsQ0FBQztBQUVGLFFBQVEsQ0FBQywyQ0FBMkMsRUFBRSxHQUFHLEVBQUU7SUFDekQsRUFBRSxDQUFDLHNDQUFzQyxFQUFFLEdBQUcsRUFBRTtRQUM5QyxNQUFNLE9BQU8sR0FBRyxrQkFBYyxDQUFDLDhCQUFtQixFQUFFLEVBQUU7WUFDcEQsSUFBSSxFQUFFLHNCQUFRLENBQUMsa0JBQWtCO1lBQ2pDLFdBQVc7U0FDWixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsc0NBQXNDLEVBQUUsR0FBRyxFQUFFO1FBQzlDLE1BQU0sS0FBSyxHQUFHLDhCQUFtQixFQUFFLENBQUM7UUFDcEMsTUFBTSxPQUFPLEdBQUcsa0JBQWMsQ0FBQyxLQUFLLEVBQUU7WUFDcEMsSUFBSSxFQUFFLHNCQUFRLENBQUMsa0JBQWtCO1lBQ2pDLFdBQVc7U0FDWixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNFLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHNDQUFzQyxFQUFFLEdBQUcsRUFBRTtRQUM5QyxNQUFNLEtBQUssR0FBRyw4QkFBbUIsRUFBRSxDQUFDO1FBQ3BDLE1BQU0sT0FBTyxHQUFHLGtCQUFjLENBQUMsS0FBSyxFQUFFO1lBQ3BDLElBQUksRUFBRSxzQkFBUSxDQUFDLGtCQUFrQjtZQUNqQyxXQUFXO1NBQ1osQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLENBQ3BDLEtBQUssQ0FBQyxjQUFjLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUMzQyxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVILFFBQVEsQ0FBQyx5Q0FBeUMsRUFBRSxHQUFHLEVBQUU7SUFDdkQsRUFBRSxDQUFDLGdDQUFnQyxFQUFFLEdBQUcsRUFBRTtRQUN4QyxNQUFNLElBQUksR0FBRyxrQkFBVyxDQUFDLDJCQUFnQixFQUFFLEVBQUU7WUFDM0MsSUFBSSxFQUFFLHNCQUFRLENBQUMsa0JBQWtCO1lBQ2pDLFdBQVc7U0FDWixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSxHQUFHLEVBQUU7UUFDdEMsTUFBTSxJQUFJLEdBQUcsa0JBQVcsQ0FBQywyQkFBZ0IsRUFBRSxFQUFFO1lBQzNDLElBQUksRUFBRSxzQkFBUSxDQUFDLFVBQVU7WUFDekIsV0FBVztTQUNaLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDZCQUE2QixFQUFFLEdBQUcsRUFBRTtRQUNyQyxNQUFNLElBQUksR0FBRyxrQkFBVyxDQUFDLDJCQUFnQixFQUFFLEVBQUU7WUFDM0MsSUFBSSxFQUFFLHNCQUFRLENBQUMsZUFBZTtTQUMvQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZG11cnBoeS9EZXNrdG9wL01vbmV5U2VuZGVyL3NyYy9fX3Rlc3RzX18vRm9ybVJlZHVjZXJUZXN0cy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwicmVhY3QtbmF0aXZlXCI7XG5pbXBvcnQgQWNjb3VudFJlZHVjZXIsIHsgZGVmYXVsdEFjY291bnRTdGF0ZSB9IGZyb20gXCIuLi9BY2NvdW50L1JlZHVjZXJzXCI7XG5pbXBvcnQgU2VuZFJlZHVjZXIsIHsgZGVmYXVsdFNlbmRTdGF0ZSB9IGZyb20gXCIuLi9TZW5kL1JlZHVjZXJzXCI7XG5pbXBvcnQgeyBUeXBlS2V5cyB9IGZyb20gXCIuLi9BY3Rpb25UeXBlc1wiO1xuXG5jb25zdCB0cmFuc2FjdGlvbiA9IHtcbiAgbmFtZTogXCJEYXZpZFwiLFxuICBlbWFpbDogXCJEYXZpZC5jb25vci5tQGdtYWlsLmNvbVwiLFxuICBhbW91bnQ6IFwiMTAwXCJcbn07XG5cbmRlc2NyaWJlKFwiQWNjb3VudCByZWR1Y2VyIHNob3VsZCBmdW5jdGlvbiBjb3JyZWN0bHlcIiwgKCkgPT4ge1xuICBpdChcInNob3VsZCBhZGQgYSB0cmFuc2FjdGlvbiB0byBvdXIgbGlzdFwiLCAoKSA9PiB7XG4gICAgY29uc3QgYWNjb3VudCA9IEFjY291bnRSZWR1Y2VyKGRlZmF1bHRBY2NvdW50U3RhdGUoKSwge1xuICAgICAgdHlwZTogVHlwZUtleXMuU0VORF9NT05FWV9TVUNDRVNTLFxuICAgICAgdHJhbnNhY3Rpb25cbiAgICB9KTtcbiAgICBleHBlY3QoYWNjb3VudC50cmFuc2F0aW9ucykudG9FcXVhbChbdHJhbnNhY3Rpb25dKTtcbiAgfSk7XG5cbiAgaXQoXCJzaG91bGQgYWRkIGFtbW91bnQgdG8gb3VyIHNlbmQgdG90YWxcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZGVmYXVsdEFjY291bnRTdGF0ZSgpO1xuICAgIGNvbnN0IGFjY291bnQgPSBBY2NvdW50UmVkdWNlcihzdGF0ZSwge1xuICAgICAgdHlwZTogVHlwZUtleXMuU0VORF9NT05FWV9TVUNDRVNTLFxuICAgICAgdHJhbnNhY3Rpb25cbiAgICB9KTtcbiAgICBleHBlY3QoYWNjb3VudC50b3RhbFNlbnQpLnRvRXF1YWwoc3RhdGUudG90YWxTZW50ICsgK3RyYW5zYWN0aW9uLmFtb3VudCk7XG4gIH0pO1xuXG4gIGl0KFwic2hvdWxkIHJlbW92ZSBhbW1vdW50IGZyb20gb3V0IHRvdGFsXCIsICgpID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGRlZmF1bHRBY2NvdW50U3RhdGUoKTtcbiAgICBjb25zdCBhY2NvdW50ID0gQWNjb3VudFJlZHVjZXIoc3RhdGUsIHtcbiAgICAgIHR5cGU6IFR5cGVLZXlzLlNFTkRfTU9ORVlfU1VDQ0VTUyxcbiAgICAgIHRyYW5zYWN0aW9uXG4gICAgfSk7XG4gICAgZXhwZWN0KGFjY291bnQudG90YWxBdmFpbGFibGUpLnRvRXF1YWwoXG4gICAgICBzdGF0ZS50b3RhbEF2YWlsYWJsZSAtICt0cmFuc2FjdGlvbi5hbW91bnRcbiAgICApO1xuICB9KTtcbn0pO1xuXG5kZXNjcmliZShcIkFTZW5kIHJlZHVjZXIgc2hvdWxkIGZ1bmN0aW9uIGNvcnJlY3RseVwiLCAoKSA9PiB7XG4gIGl0KFwic2hvdWxkIHN0b3AgbG9hZGluZyBvbiBzdWNjZXNzXCIsICgpID0+IHtcbiAgICBjb25zdCBzZW5kID0gU2VuZFJlZHVjZXIoZGVmYXVsdFNlbmRTdGF0ZSgpLCB7XG4gICAgICB0eXBlOiBUeXBlS2V5cy5TRU5EX01PTkVZX1NVQ0NFU1MsXG4gICAgICB0cmFuc2FjdGlvblxuICAgIH0pO1xuICAgIGV4cGVjdChzZW5kLmxvYWRpbmcpLnRvRXF1YWwoZmFsc2UpO1xuICB9KTtcblxuICBpdChcInNob3VsZCBzdGFydCBsb2FkaW5nIG9uIHNlbmRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHNlbmQgPSBTZW5kUmVkdWNlcihkZWZhdWx0U2VuZFN0YXRlKCksIHtcbiAgICAgIHR5cGU6IFR5cGVLZXlzLlNFTkRfTU9ORVksXG4gICAgICB0cmFuc2FjdGlvblxuICAgIH0pO1xuICAgIGV4cGVjdChzZW5kLmxvYWRpbmcpLnRvRXF1YWwodHJ1ZSk7XG4gIH0pO1xuXG4gIGl0KFwic2hvdWxkIHN0b3AgbG9hZGluZyBvbiBmYWlsXCIsICgpID0+IHtcbiAgICBjb25zdCBzZW5kID0gU2VuZFJlZHVjZXIoZGVmYXVsdFNlbmRTdGF0ZSgpLCB7XG4gICAgICB0eXBlOiBUeXBlS2V5cy5TRU5EX01PTkVZX0ZBSUxcbiAgICB9KTtcbiAgICBleHBlY3Qoc2VuZC5sb2FkaW5nKS50b0VxdWFsKGZhbHNlKTtcbiAgfSk7XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==