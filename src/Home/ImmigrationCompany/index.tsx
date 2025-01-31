import Link from "next/link";
import React, { useEffect, useState } from "react";
import Images from "src/Common/Images";
import Typography from "src/Common/Typography";
import { homeimages, numberHome } from "../HomeData";
import Count from "./count";
import ImmigrationStyle from "./ImmigrationStyle";

interface Props {
  data?: any;
}

const index = (props: Props) => {
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
                  {homeimages.map((item, index) => (
                    <li key={index}>
                      <Images
                        src={item.images}
                        alt={"images"}
                        width={48}
                        height={48}
                      ></Images>
                    </li>
                  ))}

                  <li>
                    <Link href="/testimonials">
                    <Images
                      src={"images/Groupadd.png"}
                      alt={"images"}
                      width={48}
                      height={48}
                    ></Images>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {props.data.data.PageContent.slice(0,1).map((item:any, index:any) => (
          <div className="col-md-6" key={index}>
            <Typography
              as="h2"
              _color="#28003B"
              _fontSize={["20px", "40px"]}
              _fontWeight={[700, 700]}
              _lineHeight={["30px", "50px"]}
              className="text-uppercase"
            >
              {item.product_title}
            </Typography>
            <Typography
              as="div"
              _color="#28003B"
              _fontSize={["20px", "18px"]}
              _fontWeight={[400, 400]}
              _lineHeight={["30px", "32px"]}
              className="mt-3"
            >
              <div
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
              {/* {props.data.response.desc} */}
            </Typography>
            <div className="row">
              {numberHome.map((item, index) => (
                <div className="col-md-6" key={item.id}>
                  <Count countNumber={item.number} countText={item.title} />
                </div>
              ))}
            </div>
            <div className="seeBtn">
              <a href={item.url}>
                See what you get with Elaar
                <img src="images/Arrows-arrow-up-down.svg" alt="images" />
              </a>
            </div>
          </div>
          ))}
        </div>
      </div>
    </ImmigrationStyle>
  );
};

export default index;
