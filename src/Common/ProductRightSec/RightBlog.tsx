import React from "react";
import Typography from "../Typography";
import { Calendar } from "react-feather";
import Link from "next/link";

interface Props {
  blog?: any;
}

const RightBlog = (props: Props) => {
  return (
    <>
      {props.blog?.response.slice(0, 3).map((item: any, index: any) => (
        <div className="recentPost" key={index}>
          <Link
            href={`/blog/${item.title
              .toLowerCase()
              .replace(/\s+/g, "-")}-${item._id} `}
          >
            <Typography
              as="p"
              _color="#000"
              _fontSize={["14px", "16px"]}
              _fontWeight={[400, 400]}
              _lineHeight={["22px", "22px"]}
              className="mb-2"
            >
              {item.title}
            </Typography>
          </Link>
          <Typography
            as="p"
            _color="#5E7384"
            _fontSize={["12px", "14px"]}
            _fontWeight={[400, 400]}
            _lineHeight={["22px", "22px"]}
            className="mb-2 calender"
          >
            <Calendar />
            {item.added_on}
          </Typography>
        </div>
      ))}
    </>
  );
};

export default RightBlog;
