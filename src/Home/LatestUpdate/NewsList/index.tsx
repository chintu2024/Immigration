import React from "react";
import NewsListStyle from "./NewsListStyle";
import Typography from "src/Common/Typography";
import Images from "src/Common/Images";
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
      {props.blog?.response.slice(-2).map((item: any, index: any) => {
        const formattedDate = formatDate(item.added_on);
        return (
          <div className="newsList" key={index}>
            <div>
              <Link
                href={`blog/${item.slug.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <Typography
                  as="p"
                  _color="#28003B"
                  _fontSize={["14px", "24px"]}
                  _fontWeight={[600, 600]}
                  _lineHeight={["14px", "35px"]}
                  className="mb-3"
                >
                  {item.title}
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
            <Link
              href={`blog/${item.slug.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <Images
                src={`${process.env.NEXT_PUBLIC_Images_URL}${item.image}`}
                alt={"images"}
                width={110}
                height={114}
              />
            </Link>
          </div>
        );
      })}
    </NewsListStyle>
  );
};

export default NewsList;
