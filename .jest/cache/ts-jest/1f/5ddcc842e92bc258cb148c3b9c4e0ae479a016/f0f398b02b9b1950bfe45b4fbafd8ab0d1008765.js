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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2RhdmlkbXVycGh5L0Rlc2t0b3AvTW9uZXlTZW5kZXIvc3JjL19fdGVzdHNfXy9Gb3JtRXBpY1Rlc3RzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDckQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHMUIsUUFBUSxDQUFDLDJDQUEyQyxFQUFFLEdBQUcsRUFBRTtJQUN6RCxpQkFBaUI7SUFDakIsTUFBTSxLQUFLLEdBQUc7UUFDWixLQUFLLEVBQUU7WUFDTCxPQUFPLEVBQUU7Z0JBQ1AsY0FBYyxFQUFFLElBQUk7Z0JBQ3BCLFNBQVMsRUFBRSxDQUFDO2FBQ2I7U0FDRjtLQUNGLENBQUM7SUFFRixFQUFFLENBQUMsaUNBQWlDLEVBQUUsR0FBUyxFQUFFO1FBQy9DLE1BQU0sV0FBVyxHQUFnQjtZQUMvQixJQUFJLEVBQUUsRUFBRTtZQUNSLEtBQUssRUFBRSxFQUFFO1lBQ1QsTUFBTSxFQUFFLEtBQUs7U0FDZCxDQUFDO1FBRUYsTUFBTSxNQUFNLEdBQW9CO1lBQzlCLElBQUksRUFBRSxRQUFRLENBQUMsVUFBVTtZQUN6QixXQUFXO1NBQ1osQ0FBQztRQUVGLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxpQkFBaUIsQ0FBWSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN0RSxNQUFNLE1BQU0sR0FBRyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsS0FBWSxDQUFDLENBQUM7UUFDN0QsTUFBTSxPQUFPLEdBQUcsTUFBTSxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFekMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsa0JBQWtCLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUM5RSxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHFEQUFxRCxFQUFFLEdBQVMsRUFBRTtRQUNuRSxNQUFNLFdBQVcsR0FBZ0I7WUFDL0IsSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUUsRUFBRTtZQUNULE1BQU0sRUFBRSxTQUFTO1NBQ2xCLENBQUM7UUFFRixNQUFNLE1BQU0sR0FBb0I7WUFDOUIsSUFBSSxFQUFFLFFBQVEsQ0FBQyxVQUFVO1lBQ3pCLFdBQVc7U0FDWixDQUFDO1FBRUYsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLGlCQUFpQixDQUFZLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLE1BQU0sTUFBTSxHQUFHLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFZLENBQUMsQ0FBQztRQUM3RCxNQUFNLE9BQU8sR0FBRyxNQUFNLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN6QyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ3RCLElBQUksRUFBRSxRQUFRLENBQUMsZUFBZTtTQUMvQixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDhEQUE4RCxFQUFFLEdBQVMsRUFBRTtRQUM1RSxNQUFNLE1BQU0sR0FBd0I7WUFDbEMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxlQUFlO1NBQy9CLENBQUM7UUFFRixNQUFNLGdCQUFnQixHQUFHLElBQUksaUJBQWlCLENBQVksRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDdEUsTUFBTSxNQUFNLEdBQUcsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDaEQsTUFBTSxPQUFPLEdBQUcsTUFBTSxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDekMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUN0QixJQUFJLEVBQUUsUUFBUSxDQUFDLFVBQVU7WUFDekIsS0FBSyxFQUFFLFVBQVU7WUFDakIsT0FBTyxFQUFFLFlBQVk7U0FDdEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZG11cnBoeS9EZXNrdG9wL01vbmV5U2VuZGVyL3NyYy9fX3Rlc3RzX18vRm9ybUVwaWNUZXN0cy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VuZE1vbmV5RXBpYywgRmFpbGVkU2VuZEVwaWMgLGVycm9yVGl0bGUsIGVycm9yTWVzc2FnZSB9IGZyb20gXCIuLi9TZW5kL0VwaWNzXCI7XG5pbXBvcnQgeyBTZW5kTW9uZXlBY3Rpb24sIFRyYW5zYWN0aW9uLCBTZW5kTW9uZXlBY3Rpb25GYWlsIH0gZnJvbSBcIi4uL1NlbmQvUmVkdWNlcnNcIjtcbmltcG9ydCB7IEFjdGlvbnNPYnNlcnZhYmxlIH0gZnJvbSBcInJlZHV4LW9ic2VydmFibGVcIjtcbmltcG9ydCB7IFR5cGVLZXlzIH0gZnJvbSBcIi4uL0FjdGlvblR5cGVzXCI7XG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBBbnlBY3Rpb24gfSBmcm9tIFwicmVkdXhcIjtcblxuZGVzY3JpYmUoXCJGb3JtIHZhbGlkYXRpb24gc2hvdWxkIGZ1bmN0aW9uIGNvcnJlY3RseVwiLCAoKSA9PiB7XG4gIC8vIG1vY2sgdGhlIHN0b3JlXG4gIGNvbnN0IHN0b3JlID0ge1xuICAgIHZhbHVlOiB7XG4gICAgICBhY2NvdW50OiB7XG4gICAgICAgIHRvdGFsQXZhaWxhYmxlOiAxMDAwLFxuICAgICAgICB0b3RhbFNlbnQ6IDBcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgaXQoYHNlbmQgc2hvdWxkIHN1Ym1pdCBzdWNjZXNzZnVsbHlgLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgdHJhbnNhY3Rpb246IFRyYW5zYWN0aW9uID0ge1xuICAgICAgbmFtZTogXCJcIixcbiAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgYW1vdW50OiBcIjEwMFwiXG4gICAgfTtcblxuICAgIGNvbnN0IGFjdGlvbjogU2VuZE1vbmV5QWN0aW9uID0ge1xuICAgICAgdHlwZTogVHlwZUtleXMuU0VORF9NT05FWSxcbiAgICAgIHRyYW5zYWN0aW9uXG4gICAgfTtcblxuICAgIGNvbnN0IGFjdGlvbk9ic2VydmFibGUgPSBuZXcgQWN0aW9uc09ic2VydmFibGU8QW55QWN0aW9uPihvZihhY3Rpb24pKTtcbiAgICBjb25zdCByZXN1bHQgPSBTZW5kTW9uZXlFcGljKGFjdGlvbk9ic2VydmFibGUsIHN0b3JlIGFzIGFueSk7XG4gICAgY29uc3QgYWN0aW9ucyA9IGF3YWl0IHJlc3VsdC50b1Byb21pc2UoKTtcblxuICAgIGV4cGVjdChhY3Rpb25zKS50b0VxdWFsKHsgdHlwZTogVHlwZUtleXMuU0VORF9NT05FWV9TVUNDRVNTLCB0cmFuc2FjdGlvbiB9KTtcbiAgfSk7XG5cbiAgaXQoYHNlbmQgc2hvdWxkIGZhaWwgYmVjYXVzZSB5b3UgZG9udCBoYXZlIGVub3VnaCBtb25leWAsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB0cmFuc2FjdGlvbjogVHJhbnNhY3Rpb24gPSB7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgZW1haWw6IFwiXCIsXG4gICAgICBhbW91bnQ6IFwiMTAwMDAwMFwiXG4gICAgfTtcblxuICAgIGNvbnN0IGFjdGlvbjogU2VuZE1vbmV5QWN0aW9uID0ge1xuICAgICAgdHlwZTogVHlwZUtleXMuU0VORF9NT05FWSxcbiAgICAgIHRyYW5zYWN0aW9uXG4gICAgfTtcblxuICAgIGNvbnN0IGFjdGlvbk9ic2VydmFibGUgPSBuZXcgQWN0aW9uc09ic2VydmFibGU8QW55QWN0aW9uPihvZihhY3Rpb24pKTtcbiAgICBjb25zdCByZXN1bHQgPSBTZW5kTW9uZXlFcGljKGFjdGlvbk9ic2VydmFibGUsIHN0b3JlIGFzIGFueSk7XG4gICAgY29uc3QgYWN0aW9ucyA9IGF3YWl0IHJlc3VsdC50b1Byb21pc2UoKTtcbiAgICBleHBlY3QoYWN0aW9ucykudG9FcXVhbCh7XG4gICAgICB0eXBlOiBUeXBlS2V5cy5TRU5EX01PTkVZX0ZBSUxcbiAgICB9KTtcbiAgfSk7XG5cbiAgaXQoYHNlbmQgc2hvdWxkIHNob3cgYW4gZXJyb3IgbWVzc2FnZSB3aGVuIHRoZSByZXF1ZXN0IGRvZXMgZmFpbGAsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBhY3Rpb246IFNlbmRNb25leUFjdGlvbkZhaWwgPSB7XG4gICAgICB0eXBlOiBUeXBlS2V5cy5TRU5EX01PTkVZX0ZBSUwsXG4gICAgfTtcblxuICAgIGNvbnN0IGFjdGlvbk9ic2VydmFibGUgPSBuZXcgQWN0aW9uc09ic2VydmFibGU8QW55QWN0aW9uPihvZihhY3Rpb24pKTtcbiAgICBjb25zdCByZXN1bHQgPSBGYWlsZWRTZW5kRXBpYyhhY3Rpb25PYnNlcnZhYmxlKTtcbiAgICBjb25zdCBhY3Rpb25zID0gYXdhaXQgcmVzdWx0LnRvUHJvbWlzZSgpO1xuICAgIGV4cGVjdChhY3Rpb25zKS50b0VxdWFsKHtcbiAgICAgIHR5cGU6IFR5cGVLZXlzLlNIT1dfRVJST1IsXG4gICAgICB0aXRsZTogZXJyb3JUaXRsZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yTWVzc2FnZVxuICAgIH0pO1xuICB9KTtcbn0pO1xuIl0sInZlcnNpb24iOjN9