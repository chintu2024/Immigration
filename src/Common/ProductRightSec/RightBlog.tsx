import React from "react";
import Typography from "../Typography";
import { Calendar } from "react-feather";
import Link from "next/link";

interface Props {
  blog?: any;
}
export const formatDate = (timestamp: any) => {
  const date = new Date(timestamp);
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  return `${day}-${month}-${year}`;
}
const RightBlog = (props: Props) => {
  return (
    <>
      {props.blog?.response.slice(0, 3).map((item: any, index: any) => {
      const formattedDate = formatDate(item.added_on);
      return(
        <div className="recentPost" key={index}>
          <Link
            href={`/blog/${item.slug  
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
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
            {formattedDate}
          </Typography>
        </div>
      )
    })}
    </>
  );
};

export default RightBlog;
