import React from "react";
import ImmigrationStyle from "./ImmigrationStyle";
import Images from "src/Common/Images";
import Typography from "src/Common/Typography";
import { numberHome } from "../HomeData";

interface Props {}

function ImmigrationIndex({}: Props) {
  return (
    <ImmigrationStyle>
      <div className="container">
        <div className="row">
          <div className="col-md-6 imagesSection">
            <div className="ImmigrationDiv">
              <Images src={"images/immigrationMan.png"} alt={"images"}></Images>
              <div className="satisfied">
                <Typography
                  as="p"
                  _color="#304656"
                  _fontSize={["14px", "18px"]}
                  _fontWeight={[600, 600]}
                  _lineHeight={["14px", "35px"]}
                  className=""
                >
                  120k+ Satisfied Client
                </Typography>
                <ul>
                  {[...Array(2)].map((item, index) => (
                    <li key={index}>
                      <Images
                        src={"images/ellipse310.png"}
                        alt={"images"}
                        width={48}
                        height={48}
                      ></Images>
                    </li>
                  ))}

                  <li>
                    <Images
                      src={"images/Groupadd.png"}
                      alt={"images"}
                      width={48}
                      height={48}
                    ></Images>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <Typography
              as="h3"
              _color="#28003B"
              _fontSize={["20px", "40px"]}
              _fontWeight={[700, 700]}
              _lineHeight={["30px", "50px"]}
              className="text-uppercase"
            >
              Not Just <br />
              Traditional <br />
              Immigration Company
            </Typography>
            <Typography
              as="p"
              _color="#28003B"
              _fontSize={["20px", "18px"]}
              _fontWeight={[400, 400]}
              _lineHeight={["30px", "32px"]}
              className="mt-3"
            >
              ELAAR Immigration Consulting Inc. is a full-service Canada
              Immigration firm located in beautiful Vancouver, British Columbia,
              on the west coast of Canada. Our goal is to simplify the process
              for immigrants while meeting their needs and wants.
            </Typography>
            <div className="row">
              {numberHome.map((item, index) => (
                <div className="col-md-6" key={item.id}>
                  <div className="numberSec">
                    <Typography
                      as="p"
                      _color="#000"
                      _fontSize={["20px", "42px"]}
                      _fontWeight={[700, 700]}
                      _lineHeight={["30px", "32px"]}
                      className="numberText mt-4"
                    >
                      {item.number}
                      <span>+</span>
                    </Typography>
                    <Typography
                      as="p"
                      _color="#28003B"
                      _fontSize={["20px", "18px"]}
                      _fontWeight={[400, 400]}
                      _lineHeight={["30px", "32px"]}
                      className="mt-3"
                    >
                      {item.title}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
            <div className="seeBtn">
              <a href="javascript:viod(0)">
                See what you get with Elaar
                <img src="images/Arrows-arrow-up-down.svg" alt="images" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </ImmigrationStyle>
  );
}

export default ImmigrationIndex;
