import React from "react";
import Images from "src/Common/Images";
import Typography from "src/Common/Typography";
import styled from "styled-components";

interface Props {}

const AboutText = (props: Props) => {
  return (
    <AboutTextStyle>
      <div className="container">
        <div className="row boxBorder1">
          <div className="col-md-6 boxBorder">
            <Typography
              as="p"
              _color="#000"
              _fontSize={["12px", "14px"]}
              _fontWeight={[600, 600]}
              _lineHeight={["20px", "25px"]}
              className=""
            >
              About us
            </Typography>
            <Typography
              as="h2"
              _color="#000"
              _fontSize={["12px", "42px"]}
              _fontWeight={[700, 700]}
              _lineHeight={["20px", "54px"]}
              className=""
            >
              We make the complex simple!
            </Typography>
            <Typography
              as="p"
              _color="#000"
              _fontSize={["12px", "18px"]}
              _fontWeight={[400, 400]}
              _lineHeight={["20px", "38px"]}
              className=""
            >
              ELAAR Immigration Consulting Inc. is a full-service Canada Immigration firm located in beautiful Vancouver, British Columbia, on the west coast of Canada. Our goal is to simplify the process for immigrants while meeting their needs and wants.Team ELAAR comprises professionals with the experience, knowledge, and expertise to ensure every step of the immigration process is handled professionally and promptly. Despite its challenges, the industry we work in changes lives. With hundreds of options available, we are ready to provide our clients with the options they need, whether they wish to come to Canada to work, study, visit, or establish a thriving business.
            </Typography>
          </div>
          <div className="col-md-6 boxBorder2">
          {[...Array(2)].map((item, index )=> (
                        <div className="mission" key={index}>
                        <Images src={"images/about/mission.svg"} alt={"images"} width={41} height={39}></Images>
                        <div>
                        <Typography
                      as="h2"
                      _color="#000"
                      _fontSize={["12px", "22px"]}
                      _fontWeight={[700, 700]}
                      _lineHeight={["20px", "42px"]}
                      className=""
                    >
                      Our Mission
                    </Typography>
                    <Typography
                      as="h2"
                      _color="#000"
                      _fontSize={["12px", "16px"]}
                      _fontWeight={[400, 400]}
                      _lineHeight={["20px", "28px"]}
                      className=""
                    >
                      Our process is customized for people, not numbers. We at ELAAR believe in making Canada Immigration a respectful, positive journey for everyone. We respond to your unique needs as we explore all options to develop a personalized, professional strategy from a complete suite of immigration services. Our sole focus is delivering end-to-end immigration solutions that respect your values.
                    </Typography>
                        </div>
                    </div>
    ))}
          </div>
        </div>
      </div>
    </AboutTextStyle>
  );
};

export default AboutText;

export const AboutTextStyle = styled.section`
  margin-top: 50px;
  .boxBorder1{
  }
  .boxBorder{
    border-right: 1px dashed #D7D7D7;
    border-bottom: 1px dashed #D7D7D7;
    padding: 0px 30px 20px 0px;
  }
  .boxBorder2{
    border-bottom: 1px dashed #D7D7D7;
    padding: 0px;
  }
  .mission{
    display: flex;
    align-items: flex-start;
    gap: 14px;
    padding: 0px 10px 30px 10px;
    :nth-child(1){
    border-bottom: 1px dashed #D7D7D7;}
    :nth-child(2){
        padding-top: 30px;
    }
  }
`;
