import React from "react";
import NewsListStyle from "./NewsListStyle";
import Typography from "src/Common/Typography";
import Images from "src/Common/Images";

interface Props {}

const NewsList = (props: Props) => {
  return (
    <NewsListStyle>
      <Typography
        as="p"
        _color="#28003B"
        _fontSize={["14px", "20px"]}
        _fontWeight={[600, 600]}
        _lineHeight={["14px", "30px"]}
        className="mb-3"
      >
        Elaar Guidance
      </Typography>
      {[...Array(3)].map((item, index) => (
        <div className="newsList" key={index}>
          <div>
            <Typography
              as="p"
              _color="#28003B"
              _fontSize={["14px", "24px"]}
              _fontWeight={[600, 600]}
              _lineHeight={["14px", "35px"]}
              className="mb-3"
            >
              Canada’s Start-Up Visa Immigration: A Shift in November Numbers
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
          <Images
            src={"images/listnews.png"}
            alt={"images"}
            width={110}
            height={114}
          ></Images>
        </div>
      ))}
    </NewsListStyle>
  );
};

export default NewsList;
