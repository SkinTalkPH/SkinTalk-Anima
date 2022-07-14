import React from "react";
import styled from "styled-components";
import { PoppinsMediumBlack20px, PoppinsExtraExtraBoldBlack20px } from "../../styledMixins";
import { useAuth0 } from "@auth0/auth0-react";

class Header extends React.Component {
  render() {
    const { skintalkPhLogo, dashboard, history } = this.props;

    return (
      <Header1>
        <OverlapGroup>
          <SkinTalkPHLogo src={skintalkPhLogo} />
          <Dashboard>{dashboard}</Dashboard>
          <History>{history}</History>
          <ProfilePicture></ProfilePicture>
        </OverlapGroup>
      </Header1>
    );
  }
}

const Header1 = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 1444px;
`;

const OverlapGroup = styled.div`
  height: 90px;
  display: flex;
  padding: 0 131px;
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
  ${PoppinsMediumBlack20px}
  min-height: 30px;
  margin-left: 208px;
  min-width: 113px;
  letter-spacing: 0;
`;

const History = styled.div`
  ${PoppinsExtraExtraBoldBlack20px}
  min-height: 30px;
  margin-left: 69px;
  min-width: 76px;
  letter-spacing: 0;
`;

const ProfilePicture = styled.div`
  width: 52px;
  height: 52px;
  margin-left: 317px;
  background-color: var(--black);
  border-radius: 26px;
`;

export default Header;