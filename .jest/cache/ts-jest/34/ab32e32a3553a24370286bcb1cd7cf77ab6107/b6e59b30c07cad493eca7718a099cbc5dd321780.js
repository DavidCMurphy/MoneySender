"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Epics_1 = __importStar(require("../Send/Epics"));
const redux_observable_1 = require("redux-observable");
const ActionTypes_1 = require("../ActionTypes");
const rxjs_1 = require("rxjs");
describe('Form validation shoudl function correctly', () => {
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
            name: '',
            email: '',
            amount: '100'
        };
        const action = {
            type: ActionTypes_1.TypeKeys.SEND_MONEY,
            transaction
        };
        const actionObservable = new redux_observable_1.ActionsObservable(rxjs_1.of(action));
        const result = Epics_1.default(actionObservable, store);
        const actions = yield result.toPromise();
        expect(actions).toEqual({ type: ActionTypes_1.TypeKeys.SEND_MONEY_SUCCESS, transaction });
    }));
    it(`send should fail because you dont have enough money`, () => __awaiter(this, void 0, void 0, function* () {
        const transaction = {
            name: '',
            email: '',
            amount: '1000000'
        };
        const action = {
            type: ActionTypes_1.TypeKeys.SEND_MONEY,
            transaction
        };
        const actionObservable = new redux_observable_1.ActionsObservable(rxjs_1.of(action));
        const result = Epics_1.default(actionObservable, store);
        const actions = yield result.toPromise();
        console.log(actions);
        expect(actions).toEqual([{ type: ActionTypes_1.TypeKeys.SEND_MONEY_FAIL, transaction },
            { type: ActionTypes_1.TypeKeys.SHOW_ERROR, title: Epics_1.errorTitle, message: Epics_1.errorMessage }]);
    }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2RhdmlkbXVycGh5L0Rlc2t0b3AvTW9uZXlTZW5kZXIvc3JjL19fdGVzdHNfXy9Gb3JtRXBpY1Rlc3RzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLHVEQUFtRTtBQUVuRSx1REFBb0Q7QUFDcEQsZ0RBQXlDO0FBQ3pDLCtCQUF5QjtBQUdqQixRQUFRLENBQUMsMkNBQTJDLEVBQUUsR0FBRyxFQUFFO0lBRXZELGlCQUFpQjtJQUNqQixNQUFNLEtBQUssR0FBRztRQUNWLEtBQUssRUFBRTtZQUNILE9BQU8sRUFBRTtnQkFDTCxjQUFjLEVBQUUsSUFBSTtnQkFDcEIsU0FBUyxFQUFFLENBQUM7YUFDZjtTQUNKO0tBQ0osQ0FBQTtJQUVELEVBQUUsQ0FBQyxpQ0FBaUMsRUFBRSxHQUFTLEVBQUU7UUFDN0MsTUFBTSxXQUFXLEdBQWdCO1lBQ3pCLElBQUksRUFBRSxFQUFFO1lBQ1IsS0FBSyxFQUFFLEVBQUU7WUFDVCxNQUFNLEVBQUUsS0FBSztTQUNwQixDQUFBO1FBRUQsTUFBTSxNQUFNLEdBQW9CO1lBQzVCLElBQUksRUFBRSxzQkFBUSxDQUFDLFVBQVU7WUFDekIsV0FBVztTQUNkLENBQUE7UUFFRCxNQUFNLGdCQUFnQixHQUFHLElBQUksb0NBQWlCLENBQVksU0FBRSxDQUFFLE1BQU0sQ0FBRSxDQUFDLENBQUE7UUFDdkUsTUFBTSxNQUFNLEdBQUcsZUFBUSxDQUFDLGdCQUFnQixFQUFFLEtBQVksQ0FBRSxDQUFBO1FBQ3hELE1BQU0sT0FBTyxHQUFHLE1BQU0sTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBRXhDLE1BQU0sQ0FBRSxPQUFPLENBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsc0JBQVEsQ0FBQyxrQkFBa0IsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFBO0lBQ2pGLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMscURBQXFELEVBQUUsR0FBUyxFQUFFO1FBQ2pFLE1BQU0sV0FBVyxHQUFnQjtZQUN6QixJQUFJLEVBQUUsRUFBRTtZQUNSLEtBQUssRUFBRSxFQUFFO1lBQ1QsTUFBTSxFQUFFLFNBQVM7U0FDeEIsQ0FBQTtRQUVELE1BQU0sTUFBTSxHQUFvQjtZQUM1QixJQUFJLEVBQUUsc0JBQVEsQ0FBQyxVQUFVO1lBQ3pCLFdBQVc7U0FDZCxDQUFBO1FBRUQsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLG9DQUFpQixDQUFZLFNBQUUsQ0FBRSxNQUFNLENBQUUsQ0FBQyxDQUFBO1FBQ3ZFLE1BQU0sTUFBTSxHQUFHLGVBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFZLENBQUUsQ0FBQTtRQUN4RCxNQUFNLE9BQU8sR0FBRyxNQUFNLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQTtRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3BCLE1BQU0sQ0FBRSxPQUFPLENBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxzQkFBUSxDQUFDLGVBQWUsRUFBRSxXQUFXLEVBQUU7WUFDdEUsRUFBRSxJQUFJLEVBQUUsc0JBQVEsQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLGtCQUFVLEVBQUUsT0FBTyxFQUFFLG9CQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDakYsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQyxDQUFBIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZG11cnBoeS9EZXNrdG9wL01vbmV5U2VuZGVyL3NyYy9fX3Rlc3RzX18vRm9ybUVwaWNUZXN0cy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCBTZW5kRXBpYywgeyBlcnJvclRpdGxlLCBlcnJvck1lc3NhZ2UgfSAgZnJvbSAnLi4vU2VuZC9FcGljcydcbmltcG9ydCB7IFNlbmRNb25leUFjdGlvbiwgVHJhbnNhY3Rpb24gfSBmcm9tICcuLi9TZW5kL1JlZHVjZXJzJ1xuaW1wb3J0IHsgQWN0aW9uc09ic2VydmFibGUgfSBmcm9tICdyZWR1eC1vYnNlcnZhYmxlJ1xuaW1wb3J0IHsgVHlwZUtleXMgfSBmcm9tICcuLi9BY3Rpb25UeXBlcydcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcydcbmltcG9ydCB7IEFueUFjdGlvbiB9IGZyb20gJ3JlZHV4JztcblxuICAgICAgICBkZXNjcmliZSgnRm9ybSB2YWxpZGF0aW9uIHNob3VkbCBmdW5jdGlvbiBjb3JyZWN0bHknLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIC8vIG1vY2sgdGhlIHN0b3JlXG4gICAgICAgICAgICBjb25zdCBzdG9yZSA9IHtcbiAgICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbEF2YWlsYWJsZTogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsU2VudDogMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpdChgc2VuZCBzaG91bGQgc3VibWl0IHN1Y2Nlc3NmdWxseWAsIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbjogVHJhbnNhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogJzEwMCdcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBhY3Rpb246IFNlbmRNb25leUFjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogVHlwZUtleXMuU0VORF9NT05FWSxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBhY3Rpb25PYnNlcnZhYmxlID0gbmV3IEFjdGlvbnNPYnNlcnZhYmxlPEFueUFjdGlvbj4ob2YoIGFjdGlvbiApKVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFNlbmRFcGljKGFjdGlvbk9ic2VydmFibGUsIHN0b3JlIGFzIGFueSApXG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aW9ucyA9IGF3YWl0IHJlc3VsdC50b1Byb21pc2UoKVxuXG4gICAgICAgICAgICAgICAgZXhwZWN0KCBhY3Rpb25zICkudG9FcXVhbCh7IHR5cGU6IFR5cGVLZXlzLlNFTkRfTU9ORVlfU1VDQ0VTUywgdHJhbnNhY3Rpb24gfSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGl0KGBzZW5kIHNob3VsZCBmYWlsIGJlY2F1c2UgeW91IGRvbnQgaGF2ZSBlbm91Z2ggbW9uZXlgLCBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb246IFRyYW5zYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6ICcxMDAwMDAwJ1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvbjogU2VuZE1vbmV5QWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBUeXBlS2V5cy5TRU5EX01PTkVZLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvbk9ic2VydmFibGUgPSBuZXcgQWN0aW9uc09ic2VydmFibGU8QW55QWN0aW9uPihvZiggYWN0aW9uICkpXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gU2VuZEVwaWMoYWN0aW9uT2JzZXJ2YWJsZSwgc3RvcmUgYXMgYW55IClcbiAgICAgICAgICAgICAgICBjb25zdCBhY3Rpb25zID0gYXdhaXQgcmVzdWx0LnRvUHJvbWlzZSgpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aW9ucylcbiAgICAgICAgICAgICAgICBleHBlY3QoIGFjdGlvbnMgKS50b0VxdWFsKFt7IHR5cGU6IFR5cGVLZXlzLlNFTkRfTU9ORVlfRkFJTCwgdHJhbnNhY3Rpb24gfSxcbiAgICAgICAgICAgICAgICAgICAgeyB0eXBlOiBUeXBlS2V5cy5TSE9XX0VSUk9SLCB0aXRsZTogZXJyb3JUaXRsZSwgbWVzc2FnZTogZXJyb3JNZXNzYWdlIH1dKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KSJdLCJ2ZXJzaW9uIjozfQ==