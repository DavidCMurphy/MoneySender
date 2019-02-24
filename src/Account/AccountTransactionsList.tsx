import React from "react";
import { View, FlatList } from "react-native";
import { connect } from "react-redux";
import { State } from "../App";
import { colors } from "../Themes/colors";
import { Transaction } from "../Send/Reducers";
import styled from "styled-components/native";
import TransactionItem from "./TransactionItem";

const TransactionsListTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
  font-family: Alverata;
  color: ${colors.title};
  margin-bottom: 20px;
`;

interface TransactionListProps {
  transactions: Transaction[];
}

const AccountTransactionsList = (props: TransactionListProps) => {
  return (
    <View style={{ flex: 1 }}>
      <TransactionsListTitle>Transactions</TransactionsListTitle>
      <FlatList
        style={{ flex: 1 }}
        data={props.transactions}
        renderItem={({ item }) => <TransactionItem {...item} />}
        keyExtractor={(_, index) => String(index)}
      />
    </View>
  );
};

const mapStateToProps = (state: State): TransactionListProps => ({
  transactions: state.account.transations
});

export default connect(mapStateToProps)(AccountTransactionsList);
