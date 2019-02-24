import React from "react";
import { View } from "react-native";
import { Transaction } from "../Send/Reducers";
import styled from "styled-components/native";
import { currency } from "../App";
import { colors } from "../Themes/colors";

const TransactonTitleText = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
`;

const TransactonEmailText = styled.Text`
  font-size: 12px;
`;

const TransactonAmountText = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;

const TransactionContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  height: 54px;
  border-bottom-color: ${colors.lightGrey};
`;

export default (props: Transaction) => {
  return (
    <TransactionContainer>
      <View>
        <TransactonTitleText>{props.name}</TransactonTitleText>
        <TransactonEmailText>{props.email}</TransactonEmailText>
      </View>
      <View style={{ flex: 1 }} />
      <TransactonAmountText>
        {`${currency} ${props.amount}`}
      </TransactonAmountText>
    </TransactionContainer>
  );
};
