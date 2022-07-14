import React from "react";
import Header2 from "../Header2";
import Footer from "../Footer";
import styled from "styled-components";
import {
  PoppinsNormalBlack18px,
  PoppinsExtraExtraBoldBlack48px,
  Border05pxBlack,
  PoppinsBoldBlack16px,
  PoppinsExtraExtraBoldBlack40px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./Dashboard.css";
import { postShdacne } from "../../service/rapid-api";


class Dashboard extends React.Component {
  render() {
    const {
      skintalkPhLogo,
      dashboard,
      text2,
      text1,
      text3,
      valuecode,
      acne_Grade_Api,
      comedone_Api,
      text5,
      papulopustular_Api,
      text6,
      text4,
      history,
      nodulocystic_Api,
      text7,
      headerProps,
      headerProps2,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="dashboard screen">
          <Header2
            skintalkPhLogo={headerProps.skintalkPhLogo}
            dashboard={headerProps.dashboard}
            history={headerProps.history}
          />
          <ColumnContainer>
            <Column>
              <Column1>
                <Image src={skintalkPhLogo} />
              </Column1>
              <Row>
                <OverlapGroup>
                  <Text>{dashboard}</Text>
                </OverlapGroup>
              </Row>
            </Column>
            <Column2>
              <OverlapGroup1>
                <Text1>{text2}</Text1>
                <OverlapGroup11>
                  <ValueCode>{text1}</ValueCode>
                </OverlapGroup11>
              </OverlapGroup1>
              <OverlapGroup2>
                <Text2>{text3}</Text2>
              </OverlapGroup2>
              <OverlapGroup3>
                <Text3>{valuecode}</Text3>
                <OverlapGroup4>
                  <AcneGradeAPI>{acne_Grade_Api}</AcneGradeAPI>
                </OverlapGroup4>
              </OverlapGroup3>
              <OverlapGroupContainer>
                <OverlapGroup41>
                  <Card></Card>
                  <ComedoneAPI>{comedone_Api}</ComedoneAPI>
                  <Text4>{text5}</Text4>
                </OverlapGroup41>
                <OverlapGroup41>
                  <Column3></Column3>
                  <PapulopustularAPI>{papulopustular_Api}</PapulopustularAPI>
                  <Text5>{text6}</Text5>
                </OverlapGroup41>
              </OverlapGroupContainer>
              <OverlapGroupContainer>
                <OverlapGroup41>
                  <Card1></Card1>
                  <NodulocysticAPI>{text4}</NodulocysticAPI>
                  <Text6>{history}</Text6>
                </OverlapGroup41>
                <OverlapGroup41>
                  <Column4></Column4>
                  <ScarAPI>{nodulocystic_Api}</ScarAPI>
                  <Text7>{text7}</Text7>
                </OverlapGroup41>
              </OverlapGroupContainer>
            </Column2>
          </ColumnContainer>
          <Footer className={headerProps2.className} />
        </div>
      </div>
    );
  }
}

const ColumnContainer = styled.div`
  height: 530px;
  margin-top: 151px;
  margin-left: 10px;
  display: flex;
  align-items: flex-start;
  min-width: 860px;
`;

const Column = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 530px;
  background-color: var(--desert-storm);
`;

const Column1 = styled.div`
  height: 454px;
  display: flex;
  padding: 0 28.5px;
  align-items: center;
  min-width: 380px;
  background-color: var(--desert-storm);
`;

const Image = styled.img`
  width: 323px;
  height: 400px;
  object-fit: cover;
`;

const Row = styled.div`
  height: 76px;
  display: flex;
  padding: 10.9px 28.5px;
  align-items: flex-end;
  min-width: 380px;
  background-color: var(--desert-storm);
`;

const OverlapGroup = styled.div`
  height: 53px;
  display: flex;
  padding: 16.3px 109.3px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 323px;
  background-color: #e8e6e6;
  border-radius: 10px;
`;

const Text = styled.div`
  ${ValignTextMiddle}
  ${PoppinsNormalBlack18px}
            width: 103px;
  height: 20px;
  margin-bottom: 0;
  letter-spacing: 0;
`;

const Column2 = styled.div`
  width: 480px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 530px;
  background-color: var(--mine-shaft);
`;

const OverlapGroup1 = styled.div`
  height: 70px;
  display: flex;
  padding: 13.5px 21.3px;
  align-items: center;
  min-width: 480px;
  background-color: var(--desert-storm);
`;

const Text1 = styled.p`
  width: 288px;
  min-height: 19px;
  margin-top: 1.69px;
  font-family: var(--font-family-poppins);
  font-weight: 400;
  color: var(--black);
  font-size: var(--font-size-m);
  letter-spacing: 0;
`;

const OverlapGroup11 = styled.div`
  ${Border05pxBlack}
  height: 42px;
  align-self: flex-end;
  margin-left: 10px;
  display: flex;
  padding: 14.7px 40px;
  align-items: flex-start;
  min-width: 140px;
  background-color: var(--white);
  border-radius: 10px;
`;

const ValueCode = styled.div`
  ${ValignTextMiddle}
  width: 58px;
  height: 12px;
  font-family: var(--font-family-poppins-extrabold);
  font-weight: 800;
  color: var(--black);
  font-size: var(--font-size-m);
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup2 = styled.div`
  height: 70px;
  display: flex;
  padding: 13.1px 21.3px;
  align-items: flex-end;
  min-width: 480px;
  background-color: var(--desert-storm);
`;

const Text2 = styled.div`
  ${ValignTextMiddle}
  ${PoppinsExtraExtraBoldBlack40px}
            width: 170px;
  height: 44px;
  letter-spacing: 0;
`;

const OverlapGroup3 = styled.div`
  height: 70px;
  display: flex;
  padding: 14px 31.4px;
  align-items: center;
  min-width: 480px;
  background-color: var(--desert-storm);
`;

const Text3 = styled.div`
  ${ValignTextMiddle}
  width: 130px;
  height: 17px;
  margin-top: 1px;
  font-family: var(--font-family-poppins);
  font-weight: 700;
  color: var(--black);
  font-size: var(--font-size-xl);
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup4 = styled.div`
  ${Border05pxBlack}
  align-self: flex-end;
  margin-left: 10px;
  display: flex;
  padding: 0 18.5px;
  align-items: flex-start;
  min-width: 53px;
  background-color: var(--white);
  border-radius: 10px;
`;

const AcneGradeAPI = styled.div`
  ${ValignTextMiddle}
  width: 15px;
  height: 40px;
  margin-top: -0.5px;
  font-family: var(--font-family-poppins-extrabold);
  font-weight: 800;
  color: var(--black);
  font-size: var(--font-size-xxl);
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroupContainer = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 480px;
`;

const OverlapGroup41 = styled.div`
  width: 240px;
  height: 160px;
  position: relative;
  background-color: var(--desert-storm);
`;

const Card = styled.div`
  ${Border05pxBlack}
  position: absolute;
  width: 208px;
  height: 140px;
  top: 10px;
  left: 16px;
  background-color: var(--white);
  border-radius: 20px;
`;

const ComedoneAPI = styled.div`
  ${ValignTextMiddle}
  ${PoppinsExtraExtraBoldBlack48px}
            position: absolute;
  width: 170px;
  height: 42px;
  top: 42px;
  left: 35px;
  text-align: center;
  letter-spacing: 0;
`;

const Text4 = styled.div`
  ${ValignTextMiddle}
  ${PoppinsBoldBlack16px}
            position: absolute;
  width: 127px;
  height: 19px;
  top: 106px;
  left: 57px;
  text-align: center;
  letter-spacing: 0;
`;

const Column3 = styled.div`
  ${Border05pxBlack}
  position: absolute;
  width: 209px;
  height: 139px;
  top: 10px;
  left: 16px;
  background-color: var(--white);
  border-radius: 20px;
`;

const PapulopustularAPI = styled.div`
  ${ValignTextMiddle}
  ${PoppinsExtraExtraBoldBlack48px}
            position: absolute;
  width: 170px;
  height: 41px;
  top: 41px;
  left: 35px;
  text-align: center;
  letter-spacing: 0;
`;

const Text5 = styled.div`
  ${ValignTextMiddle}
  ${PoppinsBoldBlack16px}
            position: absolute;
  width: 134px;
  height: 19px;
  top: 105px;
  left: 55px;
  text-align: center;
  letter-spacing: 0;
`;

const Card1 = styled.div`
  ${Border05pxBlack}
  position: absolute;
  width: 208px;
  height: 140px;
  top: 8px;
  left: 16px;
  background-color: var(--white);
  border-radius: 20px;
`;

const NodulocysticAPI = styled.div`
  ${ValignTextMiddle}
  ${PoppinsExtraExtraBoldBlack48px}
            position: absolute;
  width: 170px;
  height: 42px;
  top: 38px;
  left: 35px;
  text-align: center;
  letter-spacing: 0;
`;

const Text6 = styled.div`
  ${ValignTextMiddle}
  ${PoppinsBoldBlack16px}
            position: absolute;
  width: 128px;
  height: 19px;
  top: 102px;
  left: 57px;
  text-align: center;
  letter-spacing: 0;
`;

const Column4 = styled.div`
  ${Border05pxBlack}
  position: absolute;
  width: 209px;
  height: 140px;
  top: 8px;
  left: 15px;
  background-color: var(--white);
  border-radius: 20px;
`;

const ScarAPI = styled.div`
  ${ValignTextMiddle}
  ${PoppinsExtraExtraBoldBlack48px}
            position: absolute;
  width: 170px;
  height: 42px;
  top: 42px;
  left: 34px;
  text-align: center;
  letter-spacing: 0;
`;

const Text7 = styled.div`
  ${ValignTextMiddle}
  ${PoppinsBoldBlack16px}
            position: absolute;
  width: 128px;
  height: 19px;
  top: 102px;
  left: 56px;
  text-align: center;
  letter-spacing: 0;
`;

export default Dashboard;
