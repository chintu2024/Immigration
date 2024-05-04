import React from "react";
import CheckEligibilityStyle from "./CheckEligibilityStyle";
import Typography from "src/Common/Typography";
import CardIndex from "./Card";
import { checkEligibility } from "../HomeData";

interface Props {}

const CheckEligibilityIndex = (props: Props) => {
  return (
    <CheckEligibilityStyle>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="textSticky">
              <Typography
                as="p"
                _color="#304656"
                _fontSize={["14px", "40px"]}
                _fontWeight={[600, 600]}
                _lineHeight={["14px", "55px"]}
                className=""
              >
                Check Your <br />
                Eligibility
              </Typography>
              <Typography
                as="p"
                _color="#28003B"
                _fontSize={["14px", "16px"]}
                _fontWeight={[600, 600]}
                _lineHeight={["14px", "30px"]}
                className="my-3"
              >
                Before applying, it is necessary to verify that you meet all the
                requirements set by the Canadian government. This includes
                having the necessary education, work experience, language
                proficiency, and health and character requirements. Each
                immigration program has its own set of eligibility criteria, so
                it is important to thoroughly research and understand which
                program you are applying for
              </Typography>
              <div className="seeBtn">
                <a href="javascript:viod(0)">
                  Find the right visa for you
                  <img src="images/arrows-arrow-up-right.svg" alt="images" />
                </a>
              </div>
            </div>
          </div>
          {checkEligibility.length>1 && <div className="col-md-6 offset-md-1">
            <div className="row">
              {checkEligibility.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <CardIndex images={item.images} title={item.title} description={item.description}/>
                </div>
              ))}
            </div>
          </div>}
        </div>
      </div>
    </CheckEligibilityStyle>
  );
};

export default CheckEligibilityIndex;
