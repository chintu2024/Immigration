import React from "react";
import ProductRightStyle from "./ProductRightStyle";
import Typography from "src/Common/Typography";
import { Calendar } from "react-feather";
import Images from "src/Common/Images";

interface Props {}

const ProductRight = (props: Props) => {
  return (
    <ProductRightStyle>
      <div className="keyWord">
        <Typography
          as="h2"
          _color="#000"
          _fontSize={["20px", "24px"]}
          _fontWeight={[600, 600]}
          _lineHeight={["36px", "38px"]}
          className="mb-2"
        >
          Work
        </Typography>
        <ul className="keywordName">
          <li>Canadian Citizenship</li>
          <li>Canadian Study Permit</li>
          <li>Express Entry</li>
          <li>Immigrants</li>
        </ul>
        <Images
          src={"images/p4.jpg"}
          alt={"images"}
          width={"100%"}
          className="mt-4"
        ></Images>
        <Typography
          as="h2"
          _color="#000"
          _fontSize={["20px", "24px"]}
          _fontWeight={[600, 600]}
          _lineHeight={["36px", "38px"]}
          className="mb-2 mt-4"
        >
          Recent Posts
        </Typography>
        {[...Array(4)].map((item, index) => (
          <div className="recentPost" key={index}>
            <Typography
              as="p"
              _color="#000"
              _fontSize={["14px", "16px"]}
              _fontWeight={[400, 400]}
              _lineHeight={["22px", "22px"]}
              className="mb-2"
            >
              Canada Launches New Open Work Permit for Hong Kong Residents
            </Typography>
            <Typography
              as="p"
              _color="#5E7384"
              _fontSize={["12px", "14px"]}
              _fontWeight={[400, 400]}
              _lineHeight={["22px", "22px"]}
              className="mb-2 calender"
            >
              <Calendar />
              August 28 2022
            </Typography>
          </div>
        ))}
      </div>
      <Images
        src={"images/p4.jpg"}
        alt={"images"}
        width={"100%"}
        className="mt-4"
      ></Images>
      <div className="mt-4 workForm">
        <Typography
          as="h2"
          _color="#000"
          _fontSize={["20px", "24px"]}
          _fontWeight={[600, 600]}
          _lineHeight={["36px", "38px"]}
          className="mb-2"
        >
          Work
        </Typography>
        <Typography
          as="p"
          _color="#2D3840"
          _fontSize={["12px", "14px"]}
          _fontWeight={[600, 600]}
          _lineHeight={["20px", "22px"]}
          className="mb-2"
        >
          Want to work ? Avail our Job Services
        </Typography>
      </div>
      <div className="productTxt">
        <Typography
          as="p"
          _color="#040404"
          _fontSize={["16px", "20px"]}
          _fontWeight={[600, 600]}
          _lineHeight={["20px", "20px"]}
          className="mt-3 "
        >
          Don’t know what to do?
        </Typography>
        <Typography
          as="p"
          _color="#ED1C24"
          _fontSize={["12px", "14px"]}
          _fontWeight={[600, 600]}
          _lineHeight={["20px", "22px"]}
          className="mt-1"
        >
          Don’t know what to do?
        </Typography>
      </div>
    </ProductRightStyle>
  );
};

export default ProductRight;
