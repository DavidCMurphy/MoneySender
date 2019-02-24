import { TypeKeys } from '../../ActionTypes';
export const defaultSendState = () => ({ loading: false });
export default (state = defaultSendState(), action) => {
    switch (action.type) {
        case TypeKeys.SEND_MONEY:
            return Object.assign({}, state, { loading: true });
        case TypeKeys.SEND_MONEY_SUCCESS:
            return Object.assign({}, state, { loading: false });
        case TypeKeys.SEND_MONEY_FAIL:
            return Object.assign({}, state, { loading: false });
        default:
            return state;
    }
};
//# sourceMappingURL=index.js.map