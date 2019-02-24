import { TypeKeys } from '../../ActionTypes'
import { SendMoneyActionSuccess, Transaction } from '../../Send/Reducers'

export interface AccountState {
    totalSent: number
    totalAvailable: number
    transations: Transaction[]
}

export const defaultAccountState = () => ({ totalSent: 0, totalAvailable: 10000, transations: [] })

type Types = SendMoneyActionSuccess

export default (state: AccountState = defaultAccountState(),
    action: Types): AccountState => {
    switch(action.type) {
        case TypeKeys.SEND_MONEY_SUCCESS:
            const amount = (+action.transaction.amount)
            return { ...state,
                totalAvailable: state.totalAvailable - amount,
                totalSent: state.totalSent + amount,
                transations: [ ...state.transations, action.transaction ] }
        default:
            return state
    }

}