import React from "react";
import styled from "styled-components";
import { PoppinsNormalMineShaft16px } from "../../styledMixins";


class Footer extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <Footer1 className={`footer ${className || ""}`}>
        <OverlapGroup2 className="overlap-group2">
          <SkinTalkPhilippines className="skin-talk-philippines">
            SkinTalk Philippines © 2022. All Rights Reserved.
          </SkinTalkPhilippines>
          <TermsOfService className="terms-of-service">Terms of Service</TermsOfService>
        </OverlapGroup2>
      </Footer1>
    );
  }
}

const Footer1 = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 1444px;

  &.footer.footer-1 {
    margin-top: 544px;
  }

  &.footer.footer-2 {
    margin-top: 153px;
    margin-left: 4px;
  }
`;

const OverlapGroup2 = styled.div`
  ${PoppinsNormalMineShaft16px}
  height: 100px;
  display: flex;
  padding: 32px 181px;
  align-items: center;
  min-width: 1440px;
  background-color: var(--alto);
`;

const SkinTalkPhilippines = styled.p`
  width: 420px;
  min-height: 26px;
  margin-bottom: 0.04px;
  letter-spacing: 0;
`;

const TermsOfService = styled.div`
  width: 148px;
  min-height: 26px;
  align-self: flex-end;
  margin-left: 510px;
  text-align: right;
  letter-spacing: 0;
`;

export default Footer;
