import React from "react";
import {
  SectionTitle,
  Container,
  InnerContainer
} from "../Themes/SharedStyles";
import AccountPieChart from "./AccountPieChart";
import styled from "styled-components/native";
import { connect } from "react-redux";
import { State, currency } from "../App";
import AccountTransactionsList from "./AccountTransactionsList";

const PieContainer = styled.View`
  margin-top: 70px;
  margin-bottom: 70px;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
`;
const PieAccountText = styled.Text`
  font-size: 16px;
`;

const PieTextContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

interface AccountDetailsProps {
  totalSent: number;
  totalAvailable: number;
}

const AccountDetailsComponent = (props: AccountDetailsProps) => {
  return (
    <Container>
      <InnerContainer>
        <SectionTitle>My account</SectionTitle>
        <PieContainer>
          <PieTextContainer>
            <PieAccountText>{`${currency} ${props.totalSent}`}</PieAccountText>
            <PieAccountText>total sent</PieAccountText>
          </PieTextContainer>
          <AccountPieChart />
          <PieTextContainer>
            <PieAccountText>
              {`${currency} ${props.totalAvailable}`}
            </PieAccountText>
            <PieAccountText>total available</PieAccountText>
          </PieTextContainer>
        </PieContainer>
        <AccountTransactionsList />
      </InnerContainer>
    </Container>
  );
};

const mapStateToProps = (state: State): AccountDetailsProps => ({
  totalSent: state.account.totalSent,
  totalAvailable: state.account.totalAvailable
});

export default connect(mapStateToProps)(AccountDetailsComponent);
