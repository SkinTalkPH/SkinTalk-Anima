import React from "react";
import styled from "styled-components";
import { PoppinsMediumBlack20px, PoppinsExtraExtraBoldBlack20px } from "../../styledMixins";


class Header2 extends React.Component {
  render() {
    const { skintalkPhLogo, dashboard, history } = this.props;

    return (
      <Header>
        <SkinTalkPHLogo src={skintalkPhLogo} />
        <Dashboard>{dashboard}</Dashboard>
        <History>{history}</History>
        <ProfilePicture></ProfilePicture>
      </Header>
    );
  }
}

const Header = styled.div`
  height: 90px;
  display: flex;
  padding: 0 219px;
  justify-content: flex-end;
  align-items: center;
  min-width: 1440px;
  background-color: var(--white);
  box-shadow: 0px 4px 4px #00000040;
`;

const SkinTalkPHLogo = styled.img`
  width: 255px;
  height: 37px;
  margin-top: 1px;
  object-fit: cover;
`;

const Dashboard = styled.div`
  ${PoppinsExtraExtraBoldBlack20px}
  min-height: 30px;
  margin-left: 77px;
  min-width: 116px;
  letter-spacing: 0;
`;

const History = styled.div`
  ${PoppinsMediumBlack20px}
  min-height: 30px;
  margin-left: 66px;
  min-width: 70px;
  letter-spacing: 0;
`;

const ProfilePicture = styled.div`
  width: 52px;
  height: 52px;
  margin-left: 323px;
  background-color: var(--black);
  border-radius: 26px;
`;

export default Header2;
