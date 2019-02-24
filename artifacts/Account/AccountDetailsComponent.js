import React from "react";
import { SectionTitle, Container, InnerContainer } from "../Themes/SharedStyles";
import AccountPieChart from "./AccountPieChart";
import styled from "styled-components/native";
import { connect } from "react-redux";
import { currency } from "../App";
import AccountTransactionsList from "./AccountTransactionsList";
const PieContainer = styled.View `
  margin-top: 70px;
  margin-bottom: 70px;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
`;
const PieAccountText = styled.Text `
  font-size: 16px;
`;
const PieTextContainer = styled.View `
  align-items: center;
  justify-content: center;
`;
const AccountDetailsComponent = (props) => {
    return (React.createElement(Container, null,
        React.createElement(InnerContainer, null,
            React.createElement(SectionTitle, null, "My account"),
            React.createElement(PieContainer, null,
                React.createElement(PieTextContainer, null,
                    React.createElement(PieAccountText, null, `${currency} ${props.totalSent}`),
                    React.createElement(PieAccountText, null, "total sent")),
                React.createElement(AccountPieChart, null),
                React.createElement(PieTextContainer, null,
                    React.createElement(PieAccountText, null, `${currency} ${props.totalAvailable}`),
                    React.createElement(PieAccountText, null, "total available"))),
            React.createElement(AccountTransactionsList, null))));
};
const mapStateToProps = (state) => ({
    totalSent: state.account.totalSent,
    totalAvailable: state.account.totalAvailable
});
export default connect(mapStateToProps)(AccountDetailsComponent);
//# sourceMappingURL=AccountDetailsComponent.js.map