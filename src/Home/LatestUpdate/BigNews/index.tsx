import React from "react";
import BigNewsStyle from "./BigNewsStyle";
import Images from "src/Common/Images";
import Typography from "src/Common/Typography";

interface Props {}

const BigNews = (props: Props) => {
  return (
    <BigNewsStyle>
      <div className="ImagesSec">
        <Images
          src={"images/news.png"}
          alt={"latest New"}
          width={"100%"}
        ></Images>
        <Typography
          as="span"
          _color="#fff"
          _fontSize={["14px", "14px"]}
          _fontWeight={[400, 400]}
          _lineHeight={["14px", "24px"]}
          className="mt-3 mb-1 text-uppercase newsTag"
        >
          EXPRESS ENTRY
        </Typography>

        <Typography
          as="h4"
          _color="#000"
          _fontSize={["20px", "24px"]}
          _fontWeight={[400, 400]}
          _lineHeight={["30px", "34px"]}
          className="mb-1"
        >
          Canada Welcomed Over 1 Million International Students in 2023: A
          Comprehensive Analysis
        </Typography>
        <Typography
          as="h4"
          _color="#000"
          _fontSize={["12px", "14px"]}
          _fontWeight={[400, 400]}
          _lineHeight={["30px", "34px"]}
          className=" text-uppercase"
        >
          FEBRUARY 2, 2024
        </Typography>
      </div>
    </BigNewsStyle>
  );
};

export default BigNews;
