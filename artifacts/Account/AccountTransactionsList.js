import React from "react";
import { View, FlatList } from "react-native";
import { connect } from "react-redux";
import { colors } from "../Themes/colors";
import styled from "styled-components/native";
import TransactionItem from "./TransactionItem";
const TransactionsListTitle = styled.Text `
  font-weight: bold;
  font-size: 16px;
  font-family: Alverata;
  color: ${colors.title};
  margin-bottom: 20px;
`;
const AccountTransactionsList = (props) => {
    return (React.createElement(View, { style: { flex: 1 } },
        React.createElement(TransactionsListTitle, null, "Transactions"),
        React.createElement(FlatList, { style: { flex: 1 }, data: props.transactions, renderItem: ({ item }) => React.createElement(TransactionItem, Object.assign({}, item)), keyExtractor: (_, index) => String(index) })));
};
const mapStateToProps = (state) => ({
    transactions: state.account.transations
});
export default connect(mapStateToProps)(AccountTransactionsList);
//# sourceMappingURL=AccountTransactionsList.js.map