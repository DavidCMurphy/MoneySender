"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Epics_1 = __importDefault(require("../Send/Epics"));
const redux_observable_1 = require("redux-observable");
const ActionTypes_1 = require("../ActionTypes");
const rxjs_1 = require("rxjs");
describe('Form validation shoudl function correctly', () => {
    it(``, () => __awaiter(this, void 0, void 0, function* () {
        // Given
        const store = {
            value: {
                account: {
                    totalAvailable: 1000,
                    totalSent: 0
                }
            }
        };
        const action = {
            type: ActionTypes_1.TypeKeys.SEND_MONEY,
            transaction: {
                name: '',
                email: '',
                amount: '0'
            }
        };
        const actionObservable = new redux_observable_1.ActionsObservable(rxjs_1.of(action));
        // When
        const result = Epics_1.default(actionObservable, store);
        // Then
        const actions = yield result.toPromise();
        console.log(actions);
    }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2RhdmlkbXVycGh5L0Rlc2t0b3AvTW9uZXlTZW5kZXIvc3JjL19fdGVzdHNfXy9Gb3JtRXBpY1Rlc3RzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRVEsMERBQW9DO0FBRXBDLHVEQUFvRDtBQUNwRCxnREFBeUM7QUFDekMsK0JBQXlCO0FBR3pCLFFBQVEsQ0FBQywyQ0FBMkMsRUFBRSxHQUFHLEVBQUU7SUFHdkQsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFTLEVBQUU7UUFDZCxRQUFRO1FBQ1IsTUFBTSxLQUFLLEdBQUc7WUFDVixLQUFLLEVBQUU7Z0JBQ0gsT0FBTyxFQUFFO29CQUNMLGNBQWMsRUFBRSxJQUFJO29CQUNwQixTQUFTLEVBQUUsQ0FBQztpQkFDZjthQUNKO1NBQ0osQ0FBQTtRQUVELE1BQU0sTUFBTSxHQUFvQjtZQUM1QixJQUFJLEVBQUUsc0JBQVEsQ0FBQyxVQUFVO1lBQ3pCLFdBQVcsRUFBRTtnQkFDVCxJQUFJLEVBQUUsRUFBRTtnQkFDUixLQUFLLEVBQUUsRUFBRTtnQkFDVCxNQUFNLEVBQUUsR0FBRzthQUNkO1NBQ0osQ0FBQTtRQUVELE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxvQ0FBaUIsQ0FBWSxTQUFFLENBQUUsTUFBTSxDQUFFLENBQUMsQ0FBQTtRQUV2RSxPQUFPO1FBQ1AsTUFBTSxNQUFNLEdBQUcsZUFBUSxDQUFDLGdCQUFnQixFQUFFLEtBQVksQ0FBRSxDQUFBO1FBRXhELE9BQU87UUFDUCxNQUFNLE9BQU8sR0FBRyxNQUFNLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQTtRQUV4QyxPQUFPLENBQUMsR0FBRyxDQUFFLE9BQU8sQ0FBRSxDQUFBO0lBQzFCLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvZGF2aWRtdXJwaHkvRGVza3RvcC9Nb25leVNlbmRlci9zcmMvX190ZXN0c19fL0Zvcm1FcGljVGVzdHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuXG4gICAgICAgIGltcG9ydCBTZW5kRXBpYyBmcm9tICcuLi9TZW5kL0VwaWNzJ1xuICAgICAgICBpbXBvcnQgeyBTZW5kTW9uZXlBY3Rpb24gfSBmcm9tICcuLi9TZW5kL1JlZHVjZXJzJ1xuICAgICAgICBpbXBvcnQgeyBBY3Rpb25zT2JzZXJ2YWJsZSB9IGZyb20gJ3JlZHV4LW9ic2VydmFibGUnXG4gICAgICAgIGltcG9ydCB7IFR5cGVLZXlzIH0gZnJvbSAnLi4vQWN0aW9uVHlwZXMnXG4gICAgICAgIGltcG9ydCB7IG9mIH0gZnJvbSAncnhqcydcbmltcG9ydCB7IEFueUFjdGlvbiB9IGZyb20gJ3JlZHV4JztcblxuICAgICAgICBkZXNjcmliZSgnRm9ybSB2YWxpZGF0aW9uIHNob3VkbCBmdW5jdGlvbiBjb3JyZWN0bHknLCAoKSA9PiB7XG5cblxuICAgICAgICAgICAgaXQoYGAsIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBHaXZlblxuICAgICAgICAgICAgICAgIGNvbnN0IHN0b3JlID0ge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsQXZhaWxhYmxlOiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsU2VudDogMFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aW9uOiBTZW5kTW9uZXlBY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFR5cGVLZXlzLlNFTkRfTU9ORVksXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogJzAnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBhY3Rpb25PYnNlcnZhYmxlID0gbmV3IEFjdGlvbnNPYnNlcnZhYmxlPEFueUFjdGlvbj4ob2YoIGFjdGlvbiApKVxuXG4gICAgICAgICAgICAgICAgLy8gV2hlblxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFNlbmRFcGljKGFjdGlvbk9ic2VydmFibGUsIHN0b3JlIGFzIGFueSApXG5cbiAgICAgICAgICAgICAgICAvLyBUaGVuXG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aW9ucyA9IGF3YWl0IHJlc3VsdC50b1Byb21pc2UoKVxuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coIGFjdGlvbnMgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KSJdLCJ2ZXJzaW9uIjozfQ==