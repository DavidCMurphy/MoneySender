import { TypeKeys } from '../../ActionTypes'

export const defaultSendState = () => ({ loading: false })

export interface SendState {
    loading: boolean
}

export interface Transaction {
    name: string
    email: string
    amount: string
}

export interface SendMoneyAction {
    type: TypeKeys.SEND_MONEY
    transaction: Transaction
}

export interface SendMoneyActionSuccess {
    type: TypeKeys.SEND_MONEY_SUCCESS
    transaction: Transaction
}

export interface SendMoneyActionFail {
    type: TypeKeys.SEND_MONEY_FAIL
}

type Types = SendMoneyAction
| SendMoneyActionSuccess
| SendMoneyActionFail

export default (state: SendState = defaultSendState(), action: Types): SendState => {
    switch(action.type) {
        case TypeKeys.SEND_MONEY:
            return { ...state, loading: true }
        case TypeKeys.SEND_MONEY_SUCCESS:
            return { ...state, loading: false }
        case TypeKeys.SEND_MONEY_FAIL:
            return { ...state, loading: false }
        default:
            return state
    }

}