import React, { Fragment, useEffect, useState } from "react";
import MainAboutStyle from "./MainAboutStyle";
import Typography from "src/Common/Typography";
import Images from "src/Common/Images";
import { Controller, Scene } from "react-scrollmagic-r18";
import Link from "next/link";

interface Props {
  homepagecard?:any;
}

const MainAbout = (props: Props) => {
  const colors = ["color1", "color2", "color3", "color4", "color5"];
  console.log("home page data", props.homepagecard)
  return (
    <MainAboutStyle>
      <div className="container">
        <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
          {props.homepagecard.map((item:any, index:any) => (
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
                        {item.title1}
                      </Typography>
                      <Typography
                        as="p"
                        _color="#fff"
                        _fontSize={["14px", "16px"]}
                        _fontWeight={[400, 400]}
                        _lineHeight={["14px", "32px"]}
                        className="mb-4"
                      >
                        {item.description}
                      </Typography>
                    </div>
                    <div className="col-md-5 offset-md-1">
                      <Typography
                        as="h3"
                        _color="#fff"
                        _fontSize={["20px", "32px"]}
                        _fontWeight={[400, 400]}
                        _lineHeight={["14px", "40px"]}
                        className="mb-4"
                      >
                       {item.title2}
                      </Typography>
                      <div className="linkTab">
                        <ul>
                            {item.homecat1text &&<li>
                              <Link href={item.homecat1url}>
                                {item.homecat1text}
                              </Link>
                            </li>}
                            {item.homecat2text &&<li>
                              <Link href={item.homecat2url}>
                                {item.homecat2text}
                              </Link>
                            </li>}
                            {item.homecat3text && <li>
                              <Link href={item.homecat3url}>
                                {item.homecat3text}
                              </Link>
                            </li>}
                            {item.homecat4text && <li>
                              <Link href={item.homecat4url}>
                                {item.homecat4text}
                              </Link>
                            </li>}
                        </ul>
                      </div>
                      <div className="AppyImmigration">
                        <Link href="/contact">
                        Apply for immigration
                        </Link>
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
