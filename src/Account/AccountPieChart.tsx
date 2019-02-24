import React from 'react'
import { PieChart } from 'react-native-svg-charts'
import { connect } from 'react-redux'
import { State } from '../App'
import { colors } from '../Themes/colors'

interface PieProps {
    total: number
    spent: number
}

const AccountPieChart = (props: PieProps) => {
        return (
            <PieChart
                style={ { height: 64, width: 64 } }
                data={[{ value: props.spent, svg: { fill: colors.lightGrey }, key: 0 },
                { value: props.total, svg: { fill: colors.orange }, key: 1 }]}
            />
        )
}

const mapStateToProps = (state: State): PieProps => ({
    total: state.account.totalAvailable,
    spent: state.account.totalSent
})

export default connect(mapStateToProps)(AccountPieChart)