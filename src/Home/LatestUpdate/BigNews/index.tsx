import React from "react";
import BigNewsStyle from "./BigNewsStyle";
import Images from "src/Common/Images";
import Typography from "src/Common/Typography";
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

const BigNews = (props: Props) => {
  return (
    <BigNewsStyle>
      {props.blog?.response.slice(0, 1).map((item: any, index: any) => {
        const formattedDate = formatDate(item.added_on);
        return (
          <div className="ImagesSec" key={index}>
            <Link
              href={`blog/${item.slug.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <Images
                src={`${process.env.NEXT_PUBLIC_Images_URL}${item.image}`}
                alt={"latest New"}
                width={"100%"}
                height={310}
              />
            </Link>
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
            <Link
              href={`blog/${item.slug.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <Typography
                as="div"
                _color="#000"
                _fontSize={["20px", "24px"]}
                _fontWeight={[400, 400]}
                _lineHeight={["30px", "34px"]}
                className="mb-1"
              >
                <h4 dangerouslySetInnerHTML={{ __html: item.title }} />
              </Typography>
            </Link>
            <Typography
              as="h4"
              _color="#000"
              _fontSize={["12px", "14px"]}
              _fontWeight={[400, 400]}
              _lineHeight={["30px", "34px"]}
              className="text-uppercase"
            >
              {formattedDate}
            </Typography>
          </div>
        );
      })}
    </BigNewsStyle>
  );
};

export default BigNews;
