import React from "react";
import Footer from "../Footer";
import styled from "styled-components";
import { PoppinsNormalBlack18px, ValignTextMiddle } from "../../styledMixins";
import { useAuth0 } from "@auth0/auth0-react";
import "./Home.css";

class Home extends React.Component {
  render() {
    const { skintalkphLogo, login, text1, text2, image } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="home screen">
          <Header>
            <SkinTalkPHLogo src={skintalkphLogo} />
            <OverlapGroup>
              <Login>
              {isAuthenticated && (
                {login}
              )}
              </Login>
            </OverlapGroup>
          </Header>
          <Container>
            <TextContainer>
              <Text>{text1}</Text>
              <Text1>{text2}</Text1>
            </TextContainer>
          </Container>
          <Container1>
            <Image src={image} />
          </Container1>
          <Footer />
        </div>
      </div>
    );
  }
}

const Header = styled.div`
  height: 100px;
  display: flex;
  padding: 0 179px;
  justify-content: flex-end;
  align-items: center;
  min-width: 1440px;
  background-color: var(--white);
  box-shadow: 0px 4px 4px #00000040;
`;

const SkinTalkPHLogo = styled.img`
  width: 249px;
  height: 37px;
  margin-top: 1px;
  object-fit: cover;
`;

const OverlapGroup = styled.div`
  height: 52px;
  margin-left: 710px;
  display: flex;
  padding: 13px 15.9px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 121px;
  background-color: var(--mine-shaft);
  border-radius: 10px;
`;

const Login = styled.div`
  ${ValignTextMiddle}
  width: 88px;
  height: 25px;
  font-family: var(--font-family-poppins);
  font-weight: 700;
  color: var(--white);
  font-size: var(--font-size-m);
  text-align: center;
  letter-spacing: 0;
`;

const Container = styled.div`
  height: 157px;
  margin-top: 68px;
  display: flex;
  align-items: flex-start;
  min-width: 1444px;
`;

const TextContainer = styled.div`
  width: 1440px;
  display: flex;
  flex-direction: column;
  padding: 14px 378px;
  align-items: flex-end;
  min-height: 157px;
  background-color: var(--desert-storm);
`;

const Text = styled.h1`
  min-height: 96px;
  min-width: 683px;
  font-family: var(--font-family-poppins);
  font-weight: 900;
  color: var(--mine-shaft);
  font-size: var(--font-size-xxxxxl);
  letter-spacing: 0;
`;

const Text1 = styled.div`
  ${PoppinsNormalBlack18px}
  min-height: 27px;
  align-self: center;
  min-width: 328px;
  letter-spacing: 0;
`;

const Container1 = styled.div`
  height: 739px;
  display: flex;
  padding: 16px 236px;
  align-items: flex-start;
  min-width: 1440px;
  background-color: var(--desert-storm);
`;

const Image = styled.img`
  width: 968px;
  height: 698px;
  object-fit: cover;
`;

export default Home;
