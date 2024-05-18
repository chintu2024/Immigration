import React, { Fragment, useEffect, useState } from "react";
import MainAboutStyle from "./MainAboutStyle";
import Typography from "src/Common/Typography";
import Images from "src/Common/Images";
import { Controller, Scene } from "react-scrollmagic-r18";

interface Props {}

const MainAbout = (props: Props) => {
  const colors = ["color1", "color2", "color3", "color4", "color5"];
  return (
    <MainAboutStyle>
      <div className="container">
        <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
          {[...Array(5)].map((item, index) => (
            <Scene classToggle="scroll2" pin key={index}>
              <div>
                <div className="maindivtext"></div>
                <div className={`aboutFirst ${colors[index]}`}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="InfoSection_shadow"></div>
                      <Typography
                        as="h3"
                        _color="#fff"
                        _fontSize={["20px", "32px"]}
                        _fontWeight={[400, 400]}
                        _lineHeight={["14px", "35px"]}
                        className="mainTitle text-uppercase mb-4"
                      >
                        <Images
                          src={"images/bannerColor.svg"}
                          alt={"images"}
                          width={77}
                          height={27}
                        ></Images>
                        IMMIGRATION
                      </Typography>
                      <Typography
                        as="p"
                        _color="#fff"
                        _fontSize={["20px", "38px"]}
                        _fontWeight={[400, 400]}
                        _lineHeight={["40px", "52px"]}
                        className="mb-4"
                      >
                        Making immigration easier, step by step
                      </Typography>
                      <Typography
                        as="p"
                        _color="#fff"
                        _fontSize={["14px", "16px"]}
                        _fontWeight={[400, 400]}
                        _lineHeight={["14px", "32px"]}
                        className="mb-4"
                      >
                        Explore more than 100 immigration possibilities to
                        Canada for skilled workers, international students, and
                        entrepreneurs. Consider relocating with your loved ones
                        to Canada in the year 2024.
                      </Typography>
                    </div>
                    <div className="col-md-5 offset-md-1">
                      <Typography
                        as="h3"
                        _color="#fff"
                        _fontSize={["20px", "32px"]}
                        _fontWeight={[400, 400]}
                        _lineHeight={["14px", "35px"]}
                        className="mb-4"
                      >
                        Explore your best option to immigration in Canada.
                      </Typography>
                      <div className="linkTab">
                        <ul>
                          {[...Array(4)].map((item, index) => (
                            <li key={index}>
                              <a href="javascript:viod(0)">
                                High-skilled workers Visa
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="AppyImmigration">
                        <a href="javascript:viod(0)">Apply for immigration</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Scene>
          ))}
        </Controller>
      </div>
    </MainAboutStyle>
  );
};

export default MainAbout;
