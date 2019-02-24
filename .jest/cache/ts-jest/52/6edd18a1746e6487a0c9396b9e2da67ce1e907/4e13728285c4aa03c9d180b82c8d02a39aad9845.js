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
describe('Form validation should function correctly', () => {
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
        expect(actions).toEqual({ type: ActionTypes_1.TypeKeys.SHOW_ERROR, title: Epics_1.errorTitle, message: Epics_1.errorMessage });
    }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2RhdmlkbXVycGh5L0Rlc2t0b3AvTW9uZXlTZW5kZXIvc3JjL19fdGVzdHNfXy9Gb3JtRXBpY1Rlc3RzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFtRTtBQUVuRSx1REFBb0Q7QUFDcEQsZ0RBQXlDO0FBQ3pDLCtCQUF5QjtBQUdqQixRQUFRLENBQUMsMkNBQTJDLEVBQUUsR0FBRyxFQUFFO0lBRXZELGlCQUFpQjtJQUNqQixNQUFNLEtBQUssR0FBRztRQUNWLEtBQUssRUFBRTtZQUNILE9BQU8sRUFBRTtnQkFDTCxjQUFjLEVBQUUsSUFBSTtnQkFDcEIsU0FBUyxFQUFFLENBQUM7YUFDZjtTQUNKO0tBQ0osQ0FBQTtJQUVELEVBQUUsQ0FBQyxpQ0FBaUMsRUFBRSxHQUFTLEVBQUU7UUFDN0MsTUFBTSxXQUFXLEdBQWdCO1lBQ3pCLElBQUksRUFBRSxFQUFFO1lBQ1IsS0FBSyxFQUFFLEVBQUU7WUFDVCxNQUFNLEVBQUUsS0FBSztTQUNwQixDQUFBO1FBRUQsTUFBTSxNQUFNLEdBQW9CO1lBQzVCLElBQUksRUFBRSxzQkFBUSxDQUFDLFVBQVU7WUFDekIsV0FBVztTQUNkLENBQUE7UUFFRCxNQUFNLGdCQUFnQixHQUFHLElBQUksb0NBQWlCLENBQVksU0FBRSxDQUFFLE1BQU0sQ0FBRSxDQUFDLENBQUE7UUFDdkUsTUFBTSxNQUFNLEdBQUcsZUFBUSxDQUFDLGdCQUFnQixFQUFFLEtBQVksQ0FBRSxDQUFBO1FBQ3hELE1BQU0sT0FBTyxHQUFHLE1BQU0sTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBRXhDLE1BQU0sQ0FBRSxPQUFPLENBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsc0JBQVEsQ0FBQyxrQkFBa0IsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFBO0lBQ2pGLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMscURBQXFELEVBQUUsR0FBUyxFQUFFO1FBQ2pFLE1BQU0sV0FBVyxHQUFnQjtZQUN6QixJQUFJLEVBQUUsRUFBRTtZQUNSLEtBQUssRUFBRSxFQUFFO1lBQ1QsTUFBTSxFQUFFLFNBQVM7U0FDeEIsQ0FBQTtRQUVELE1BQU0sTUFBTSxHQUFvQjtZQUM1QixJQUFJLEVBQUUsc0JBQVEsQ0FBQyxVQUFVO1lBQ3pCLFdBQVc7U0FDZCxDQUFBO1FBRUQsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLG9DQUFpQixDQUFZLFNBQUUsQ0FBRSxNQUFNLENBQUUsQ0FBQyxDQUFBO1FBQ3ZFLE1BQU0sTUFBTSxHQUFHLGVBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFZLENBQUUsQ0FBQTtRQUN4RCxNQUFNLE9BQU8sR0FBRyxNQUFNLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQTtRQUN4QyxNQUFNLENBQUUsT0FBTyxDQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLHNCQUFRLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxrQkFBVSxFQUFFLE9BQU8sRUFBRSxvQkFBWSxFQUFFLENBQUMsQ0FBQTtJQUN0RyxDQUFDLENBQUEsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFDLENBQUEiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2RhdmlkbXVycGh5L0Rlc2t0b3AvTW9uZXlTZW5kZXIvc3JjL19fdGVzdHNfXy9Gb3JtRXBpY1Rlc3RzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VuZEVwaWMsIHsgZXJyb3JUaXRsZSwgZXJyb3JNZXNzYWdlIH0gIGZyb20gJy4uL1NlbmQvRXBpY3MnXG5pbXBvcnQgeyBTZW5kTW9uZXlBY3Rpb24sIFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vU2VuZC9SZWR1Y2VycydcbmltcG9ydCB7IEFjdGlvbnNPYnNlcnZhYmxlIH0gZnJvbSAncmVkdXgtb2JzZXJ2YWJsZSdcbmltcG9ydCB7IFR5cGVLZXlzIH0gZnJvbSAnLi4vQWN0aW9uVHlwZXMnXG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnXG5pbXBvcnQgeyBBbnlBY3Rpb24gfSBmcm9tICdyZWR1eCc7XG5cbiAgICAgICAgZGVzY3JpYmUoJ0Zvcm0gdmFsaWRhdGlvbiBzaG91bGQgZnVuY3Rpb24gY29ycmVjdGx5JywgKCkgPT4ge1xuXG4gICAgICAgICAgICAvLyBtb2NrIHRoZSBzdG9yZVxuICAgICAgICAgICAgY29uc3Qgc3RvcmUgPSB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxBdmFpbGFibGU6IDEwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbFNlbnQ6IDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXQoYHNlbmQgc2hvdWxkIHN1Ym1pdCBzdWNjZXNzZnVsbHlgLCBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb246IFRyYW5zYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6ICcxMDAnXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aW9uOiBTZW5kTW9uZXlBY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFR5cGVLZXlzLlNFTkRfTU9ORVksXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aW9uT2JzZXJ2YWJsZSA9IG5ldyBBY3Rpb25zT2JzZXJ2YWJsZTxBbnlBY3Rpb24+KG9mKCBhY3Rpb24gKSlcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBTZW5kRXBpYyhhY3Rpb25PYnNlcnZhYmxlLCBzdG9yZSBhcyBhbnkgKVxuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvbnMgPSBhd2FpdCByZXN1bHQudG9Qcm9taXNlKClcblxuICAgICAgICAgICAgICAgIGV4cGVjdCggYWN0aW9ucyApLnRvRXF1YWwoeyB0eXBlOiBUeXBlS2V5cy5TRU5EX01PTkVZX1NVQ0NFU1MsIHRyYW5zYWN0aW9uIH0pXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpdChgc2VuZCBzaG91bGQgZmFpbCBiZWNhdXNlIHlvdSBkb250IGhhdmUgZW5vdWdoIG1vbmV5YCwgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uOiBUcmFuc2FjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiAnMTAwMDAwMCdcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBhY3Rpb246IFNlbmRNb25leUFjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogVHlwZUtleXMuU0VORF9NT05FWSxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBhY3Rpb25PYnNlcnZhYmxlID0gbmV3IEFjdGlvbnNPYnNlcnZhYmxlPEFueUFjdGlvbj4ob2YoIGFjdGlvbiApKVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFNlbmRFcGljKGFjdGlvbk9ic2VydmFibGUsIHN0b3JlIGFzIGFueSApXG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aW9ucyA9IGF3YWl0IHJlc3VsdC50b1Byb21pc2UoKVxuICAgICAgICAgICAgICAgIGV4cGVjdCggYWN0aW9ucyApLnRvRXF1YWwoeyB0eXBlOiBUeXBlS2V5cy5TSE9XX0VSUk9SLCB0aXRsZTogZXJyb3JUaXRsZSwgbWVzc2FnZTogZXJyb3JNZXNzYWdlIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pIl0sInZlcnNpb24iOjN9