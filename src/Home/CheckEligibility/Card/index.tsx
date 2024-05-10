import React from "react";
import CardStyle from "./CardStyle";
import Images from "src/Common/Images";
import Typography from "src/Common/Typography";

interface Props {
  images?: any;
  title?: any;
  description?: any;
}

const CardIndex = (props: Props) => {
  return (
    <CardStyle>
      <div className="cardDiv">
        <Images
          src={props.images}
          alt={"check aligibility"}
          width={146}
          height={141}
        ></Images>
        <Typography
          as="h3"
          _color="#000"
          _fontSize={["14px", "20px"]}
          _fontWeight={[600, 600]}
          _lineHeight={["14px", "30px"]}
          className="my-3"
        >
          {props.title}
        </Typography>
        <Typography
          as="p"
          _color="#304656"
          _fontSize={["14px", "16px"]}
          _fontWeight={[400, 400]}
          _lineHeight={["14px", "25px"]}
          className="my-2 checkText"
        >
          {props.description}
        </Typography>
        <div className="checkBtn">
          <a href="javascript:void(0)">
            {" "}
            Check Score{" "}
            <img
              src="images/card-arrow.svg"
              alt="arrow"
              width="14"
              height="10"
            />{" "}
          </a>
        </div>
      </div>
    </CardStyle>
  );
};

export default CardIndex;
