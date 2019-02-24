"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_observable_1 = require("redux-observable");
const ActionTypes_1 = require("../../ActionTypes");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
exports.default = (action, store) => action.pipe(redux_observable_1.ofType(ActionTypes_1.TypeKeys.SEND_MONEY), operators_1.mergeMap((action$) => {
    let state = store.value;
    let total = state.account.totalAvailable;
    let amount = +action$.transaction.amount;
    return ((total - amount) >= 0)
        ? rxjs_1.of({ type: ActionTypes_1.TypeKeys.SEND_MONEY_SUCCESS, transaction: action$.transaction })
        : rxjs_1.concat(rxjs_1.of({ type: ActionTypes_1.TypeKeys.SEND_MONEY_FAIL }), rxjs_1.of({ type: ActionTypes_1.TypeKeys.SHOW_ERROR, title: 'Error', message: 'Insufficient funds' }));
}), operators_1.delay(5000));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2RhdmlkbXVycGh5L0Rlc2t0b3AvTW9uZXlTZW5kZXIvc3JjL1NlbmQvRXBpY3MvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7O0FBQ0EsdURBQTZFO0FBQzdFLG1EQUE0QztBQUU1QywrQkFBNkM7QUFDN0MsOENBQWdEO0FBSWhELGtCQUFlLENBQUMsTUFBaUMsRUFBRSxLQUE2QixFQUFHLEVBQUUsQ0FDbkYsTUFBTSxDQUFDLElBQUksQ0FDVCx5QkFBTSxDQUFDLHNCQUFRLENBQUMsVUFBVSxDQUFDLEVBQzNCLG9CQUFRLENBQUMsQ0FBQyxPQUF3QixFQUEwRSxFQUFFO0lBQzFHLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUE7SUFDdkIsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUE7SUFDeEMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQTtJQUN4QyxPQUFPLENBQUUsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxTQUFFLENBQXlCLEVBQUUsSUFBSSxFQUFFLHNCQUFRLENBQUMsa0JBQWtCLEVBQUUsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyRyxDQUFDLENBQUMsYUFBTSxDQUFFLFNBQUUsQ0FBc0IsRUFBRSxJQUFJLEVBQUUsc0JBQVEsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxFQUNuRSxTQUFFLENBQWMsRUFBRSxJQUFJLEVBQUUsc0JBQVEsQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQyxDQUFFLENBQUE7QUFDbkcsQ0FBQyxDQUNGLEVBQ0QsaUJBQUssQ0FBQyxJQUFJLENBQUMsQ0FDWixDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZG11cnBoeS9EZXNrdG9wL01vbmV5U2VuZGVyL3NyYy9TZW5kL0VwaWNzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IG9mVHlwZSwgQWN0aW9uc09ic2VydmFibGUsIFN0YXRlT2JzZXJ2YWJsZSB9IGZyb20gJ3JlZHV4LW9ic2VydmFibGUnXG5pbXBvcnQgeyBUeXBlS2V5cyB9IGZyb20gJy4uLy4uL0FjdGlvblR5cGVzJ1xuaW1wb3J0IHsgU2VuZE1vbmV5QWN0aW9uLCBTZW5kTW9uZXlBY3Rpb25TdWNjZXNzLCBTZW5kTW9uZXlBY3Rpb25GYWlsIH0gZnJvbSAnLi4vUmVkdWNlcnMnXG5pbXBvcnQgeyBvZiwgY29uY2F0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcydcbmltcG9ydCB7IG1lcmdlTWFwLCBkZWxheSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xuaW1wb3J0IHsgRXJyb3JBY3Rpb24gfSBmcm9tICcuLi8uLi9FcnJvcidcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vLi4vQXBwJ1xuXG5leHBvcnQgZGVmYXVsdCAoYWN0aW9uOiBBY3Rpb25zT2JzZXJ2YWJsZTxBY3Rpb24+LCBzdG9yZTogU3RhdGVPYnNlcnZhYmxlPFN0YXRlPiApID0+XG4gIGFjdGlvbi5waXBlKFxuICAgIG9mVHlwZShUeXBlS2V5cy5TRU5EX01PTkVZKSxcbiAgICBtZXJnZU1hcCgoYWN0aW9uJDogU2VuZE1vbmV5QWN0aW9uKTogT2JzZXJ2YWJsZTxTZW5kTW9uZXlBY3Rpb25TdWNjZXNzIHwgRXJyb3JBY3Rpb24gfCBTZW5kTW9uZXlBY3Rpb25GYWlsPiA9PiB7XG4gICAgICAgIGxldCBzdGF0ZSA9IHN0b3JlLnZhbHVlXG4gICAgICAgIGxldCB0b3RhbCA9IHN0YXRlLmFjY291bnQudG90YWxBdmFpbGFibGVcbiAgICAgICAgbGV0IGFtb3VudCA9ICthY3Rpb24kLnRyYW5zYWN0aW9uLmFtb3VudFxuICAgICAgICByZXR1cm4gKCAodG90YWwgLSBhbW91bnQpID49IDApXG4gICAgICAgID8gb2Y8U2VuZE1vbmV5QWN0aW9uU3VjY2Vzcz4oeyB0eXBlOiBUeXBlS2V5cy5TRU5EX01PTkVZX1NVQ0NFU1MsIHRyYW5zYWN0aW9uOiBhY3Rpb24kLnRyYW5zYWN0aW9uIH0pXG4gICAgICAgIDogY29uY2F0KCBvZjxTZW5kTW9uZXlBY3Rpb25GYWlsPih7IHR5cGU6IFR5cGVLZXlzLlNFTkRfTU9ORVlfRkFJTCB9KSxcbiAgICAgICAgICBvZjxFcnJvckFjdGlvbj4oeyB0eXBlOiBUeXBlS2V5cy5TSE9XX0VSUk9SLCB0aXRsZTogJ0Vycm9yJywgbWVzc2FnZTogJ0luc3VmZmljaWVudCBmdW5kcycgfSkgKVxuICAgICAgfVxuICAgICksXG4gICAgZGVsYXkoNTAwMClcbiAgKTsiXSwidmVyc2lvbiI6M30=