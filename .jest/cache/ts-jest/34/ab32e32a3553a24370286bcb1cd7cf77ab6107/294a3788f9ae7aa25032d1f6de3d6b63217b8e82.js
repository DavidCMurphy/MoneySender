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
    const createStoreFixture = () => ({
        getState: jest.fn()
    });
    it(``, () => __awaiter(this, void 0, void 0, function* () {
        // Given
        const store = createStoreFixture();
        store.getState.mockReturnValue({
            account: {
                totalAvailable: 1000,
                totalSent: 0
            }
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2RhdmlkbXVycGh5L0Rlc2t0b3AvTW9uZXlTZW5kZXIvc3JjL19fdGVzdHNfXy9Gb3JtRXBpY1Rlc3RzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRVEsMERBQW9DO0FBRXBDLHVEQUFvRDtBQUNwRCxnREFBeUM7QUFDekMsK0JBQXlCO0FBR3pCLFFBQVEsQ0FBQywyQ0FBMkMsRUFBRSxHQUFHLEVBQUU7SUFFdkQsTUFBTSxrQkFBa0IsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzlCLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO0tBQ3RCLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBUyxFQUFFO1FBQ2QsUUFBUTtRQUNSLE1BQU0sS0FBSyxHQUFHLGtCQUFrQixFQUFFLENBQUE7UUFDbEMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUM7WUFDM0IsT0FBTyxFQUFFO2dCQUNMLGNBQWMsRUFBRSxJQUFJO2dCQUNwQixTQUFTLEVBQUUsQ0FBQzthQUNmO1NBQ0osQ0FBQyxDQUFBO1FBRUYsTUFBTSxNQUFNLEdBQW9CO1lBQzVCLElBQUksRUFBRSxzQkFBUSxDQUFDLFVBQVU7WUFDekIsV0FBVyxFQUFFO2dCQUNULElBQUksRUFBRSxFQUFFO2dCQUNSLEtBQUssRUFBRSxFQUFFO2dCQUNULE1BQU0sRUFBRSxHQUFHO2FBQ2Q7U0FDSixDQUFBO1FBRUQsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLG9DQUFpQixDQUFZLFNBQUUsQ0FBRSxNQUFNLENBQUUsQ0FBQyxDQUFBO1FBRXZFLE9BQU87UUFDUCxNQUFNLE1BQU0sR0FBRyxlQUFRLENBQUMsZ0JBQWdCLEVBQUUsS0FBWSxDQUFFLENBQUE7UUFFeEQsT0FBTztRQUNQLE1BQU0sT0FBTyxHQUFHLE1BQU0sTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBRXhDLE9BQU8sQ0FBQyxHQUFHLENBQUUsT0FBTyxDQUFFLENBQUE7SUFDMUIsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQyxDQUFBIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZG11cnBoeS9EZXNrdG9wL01vbmV5U2VuZGVyL3NyYy9fX3Rlc3RzX18vRm9ybUVwaWNUZXN0cy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbiAgICAgICAgaW1wb3J0IFNlbmRFcGljIGZyb20gJy4uL1NlbmQvRXBpY3MnXG4gICAgICAgIGltcG9ydCB7IFNlbmRNb25leUFjdGlvbiB9IGZyb20gJy4uL1NlbmQvUmVkdWNlcnMnXG4gICAgICAgIGltcG9ydCB7IEFjdGlvbnNPYnNlcnZhYmxlIH0gZnJvbSAncmVkdXgtb2JzZXJ2YWJsZSdcbiAgICAgICAgaW1wb3J0IHsgVHlwZUtleXMgfSBmcm9tICcuLi9BY3Rpb25UeXBlcydcbiAgICAgICAgaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJ1xuaW1wb3J0IHsgQW55QWN0aW9uIH0gZnJvbSAncmVkdXgnO1xuXG4gICAgICAgIGRlc2NyaWJlKCdGb3JtIHZhbGlkYXRpb24gc2hvdWRsIGZ1bmN0aW9uIGNvcnJlY3RseScsICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgY3JlYXRlU3RvcmVGaXh0dXJlID0gKCkgPT4gKHtcbiAgICAgICAgICAgICAgICBnZXRTdGF0ZTogamVzdC5mbigpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpdChgYCwgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEdpdmVuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZUZpeHR1cmUoKVxuICAgICAgICAgICAgICAgIHN0b3JlLmdldFN0YXRlLm1vY2tSZXR1cm5WYWx1ZSh7XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsQXZhaWxhYmxlOiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxTZW50OiAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aW9uOiBTZW5kTW9uZXlBY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFR5cGVLZXlzLlNFTkRfTU9ORVksXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogJzAnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBhY3Rpb25PYnNlcnZhYmxlID0gbmV3IEFjdGlvbnNPYnNlcnZhYmxlPEFueUFjdGlvbj4ob2YoIGFjdGlvbiApKVxuXG4gICAgICAgICAgICAgICAgLy8gV2hlblxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFNlbmRFcGljKGFjdGlvbk9ic2VydmFibGUsIHN0b3JlIGFzIGFueSApXG5cbiAgICAgICAgICAgICAgICAvLyBUaGVuXG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aW9ucyA9IGF3YWl0IHJlc3VsdC50b1Byb21pc2UoKVxuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coIGFjdGlvbnMgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KSJdLCJ2ZXJzaW9uIjozfQ==