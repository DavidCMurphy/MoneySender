import React from 'react';
import { PieChart } from 'react-native-svg-charts';
import { connect } from 'react-redux';
import { colors } from '../Themes/colors';
const AccountPieChart = (props) => {
    return (React.createElement(PieChart, { style: { height: 64, width: 64 }, data: [{ value: props.spent, svg: { fill: colors.lightGrey }, key: 0 },
            { value: props.total, svg: { fill: colors.orange }, key: 1 }] }));
};
const mapStateToProps = (state) => ({
    total: state.account.totalAvailable,
    spent: state.account.totalSent
});
export default connect(mapStateToProps)(AccountPieChart);
//# sourceMappingURL=AccountPieChart.js.map