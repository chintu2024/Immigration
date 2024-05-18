import React from "react";
import Typography from "src/Common/Typography";
import styled from "styled-components";

interface Props {}

const ImmigrationText = (props: Props) => {
  return (
    <ImmigrationTextStyle>
      <Typography
        as="h2"
        _color="#000"
        _fontSize={["26px", "32px"]}
        _fontWeight={[400, 400]}
        _lineHeight={["35px", "40px"]}
        className="titleTag"
      >
        Immigration Consulting From <span>Experienced Agents</span>
      </Typography>

      <Typography
        as="p"
        _color="#000"
        _fontSize={["26px", "18px"]}
        _fontWeight={[400, 400]}
        _lineHeight={["35px", "32px"]}
        className="py-5"
      >
        ELAAR Immigration Consulting Inc. is a full-service Canada Immigration
        firm located in beautiful Vancouver, British Columbia, on the west coast
        of Canada. Our goal is to simplify the process for immigrants while
        meeting their needs and wants.
      </Typography>
      <div className="letBtn">
        <a href="javascript:void(0)">Lets Talk</a>
      </div>
    </ImmigrationTextStyle>
  );
};

export default ImmigrationText;

export const ImmigrationTextStyle = styled.div`
  padding-left: 30px;
  .titleTag {
    margin-top: 40px;
    span {
      font-weight: 800;
    }
  }
  .letBtn {
    width: 204px;
    height: 60px;
    a {
      background-color: #000;
      color: #fff;
      display: block;
      text-align: center;
      padding: 19px 0px;
      :hover {
        opacity: 0.8;
      }
    }
  }
`;
