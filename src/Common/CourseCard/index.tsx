import React from "react";
import Images from "../Images";
import Typography from "../Typography";
import StyleCourseCard from "./StyleCourseCard";

interface Props {
  item?: any;
}

const CourseCard = (props: Props) => {
  return (
    <StyleCourseCard>
      <div className="card">
        <Images
          src={props.item.Images}
          alt={"images"}
          width="100%"
          height={205}
        ></Images>
        <div className="cardText">
          <Typography
            as="p"
            _color="#000"
            _fontSize={["22px", "28px"]}
            _fontWeight={[600, 600]}
            _lineHeight={["20px", "28px"]}
            _letterspacing={["0.2px", "0.2px"]}
            className="mt-2 cardTtile"
          >
            {props.item.title}
          </Typography>
          <Typography
            as="p"
            _color="#000"
            _fontSize={["16px", "18px"]}
            _fontWeight={[400, 400]}
            _lineHeight={["24px", "30px"]}
            className="mt-2 mb-3"
          >
            {props.item.subTitle}
          </Typography>
          <ul className="pageList">
            {props.item.link.slice(0, 6).map((item: any, index: any) => (
              <li key={index}>
                <a href="javascript void(0)">{item.linkData}</a>
              </li>
            ))}
          </ul>
          <div className="applyBtn">
            <a href="">Apply Student Visa</a>
          </div>
        </div>
      </div>
    </StyleCourseCard>
  );
};

export default CourseCard;
