import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { currency } from "../App";
import { colors } from "../Themes/colors";
const TransactonTitleText = styled.Text `
  font-size: 16px;
  margin-bottom: 5px;
`;
const TransactonEmailText = styled.Text `
  font-size: 12px;
`;
const TransactonAmountText = styled.Text `
  font-size: 16px;
  font-weight: 600;
`;
const TransactionContainer = styled.View `
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  height: 54px;
  border-bottom-color: ${colors.lightGrey};
`;
export default (props) => {
    return (React.createElement(TransactionContainer, null,
        React.createElement(View, null,
            React.createElement(TransactonTitleText, null, props.name),
            React.createElement(TransactonEmailText, null, props.email)),
        React.createElement(View, { style: { flex: 1 } }),
        React.createElement(TransactonAmountText, null, `${currency} ${props.amount}`)));
};
//# sourceMappingURL=TransactionItem.js.map