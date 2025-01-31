import Link from "next/link";
import React from "react";
import Images from "src/Common/Images";
import LayOut from "src/Common/Layout";
import ProductRight from "src/Common/ProductRightSec";
import Typography from "src/Common/Typography";
import styled from "styled-components";

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

const BlogList = (props: Props) => {
  return (
    <BlogListStyle>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Typography
              as="h4"
              _color="#000"
              _fontSize={["14px", "48px"]}
              _fontWeight={[700, 700]}
              _lineHeight={["14px", "50px"]}
              className=""
            >
              Elaar Blog
            </Typography>
            <Typography
              as="p"
              _color="#000"
              _fontSize={["14px", "24px"]}
              _fontWeight={[400, 400]}
              _lineHeight={["14px", "50px"]}
              className="pb-4"
            >
              Social media best practices for brands and agencies
            </Typography>
          </div>
          <div className="col-md-12 protMr">
            <div className="row">
              {props.blog.data.map((item: any, index: any) => {
                const formattedDate = formatDate(item.created_at);
                return (
                  <div className="col-md-4" key={index}>
                    <div className="blogList">
                      <Link
                        href={`blog/${item.slug.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        <Images
                          src={`${process.env.NEXT_PUBLIC_Images_URL}/public/images/${item.image}`}
                          alt={"images"}
                          width={"100%"}
                          height={300}
                        ></Images>
                      </Link>
                      <Link
                        href={`blog/${item.slug.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        <Typography
                          as="h4"
                          _color="#000"
                          _fontSize={["14px", "24px"]}
                          _fontWeight={[400, 700]}
                          _lineHeight={["14px", "35px"]}
                          className="pt-3"
                        >
                          {item.title}
                        </Typography>
                      </Link>
                      <Typography
                        as="h4"
                        _color="#5E7384"
                        _fontSize={["14px", "14px"]}
                        _fontWeight={[400, 700]}
                        _lineHeight={["14px", "32px"]}
                        className=""
                      >
                        {formattedDate}
                      </Typography>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* <div className="col-md-4">
            <ProductRight productRight={false} />
          </div> */}
        </div>
      </div>
    </BlogListStyle>
  );
};

export default BlogList;

export const BlogListStyle = styled.section`
  margin-top: 50px;
  margin-bottom: 50px;
  .blogList {
    margin-bottom: 20px;
    img{
      object-fit: cover;
    }
  }
  .blogList img{
    object-fit: cover;
  }
  .protMr {
    padding-right: 43px;
  }
`;
