import { TypeKeys } from '../../ActionTypes';
export const defaultAccountState = () => ({ totalSent: 0, totalAvailable: 10000, transations: [] });
export default (state = defaultAccountState(), action) => {
    switch (action.type) {
        case TypeKeys.SEND_MONEY_SUCCESS:
            const amount = (+action.transaction.amount);
            return Object.assign({}, state, { totalAvailable: state.totalAvailable - amount, totalSent: state.totalSent + amount, transations: [...state.transations, action.transaction] });
        default:
            return state;
    }
};
//# sourceMappingURL=index.js.map