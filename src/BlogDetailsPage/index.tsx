import React, { useState } from "react";
import Images from "src/Common/Images";
import LayOut from "src/Common/Layout";
import ContactBanner from "src/Common/PagesBanner/Banner";
import ProductRight from "src/Common/ProductRightSec";
import Typography from "src/Common/Typography";
import styled from "styled-components";

interface Props {
  data?: any;
}
export const formatDate = (timestamp: any) => {
  const date = new Date(timestamp);
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  return `${day}-${month}-${year}`;
}
const BlogDetailsPage = (props: Props) => {
  const formattedDate = formatDate(props.data.added_on);
  return (
    <BlogDetailsPageStyle>
      <div className="blogbanner">
        <Images
          src={`${process.env.NEXT_PUBLIC_Images_URL}${props.data.image}`}
          alt={"banner"}
          width={"100%"}
        ></Images>
        <div className="container">
          <div className="row">
            <div className="col-md-8 protMr">
              <div className="blogText">
                <Typography
                  as="h1"
                  _color="#000"
                  _fontSize={["30px", "42px"]}
                  _fontWeight={[600, 600]}
                  _lineHeight={["40px", "54px"]}
                  className=""
                >
                  {props.data.title}
                </Typography>
                <Typography
                  as="p"
                  _color="#5E7384"
                  _fontSize={["30px", "14px"]}
                  _fontWeight={[600, 600]}
                  _lineHeight={["40px", "30px"]}
                  className="py-3"
                >
                  Published on:{formattedDate} by {props.data.author}
                </Typography>
                <Typography
                  as="div"
                  _color="#000"
                  _fontSize={["30px", "16px"]}
                  _fontWeight={[600, 600]}
                  _lineHeight={["40px", "24px"]}
                  className="py-3"
                >
                  <div
                    dangerouslySetInnerHTML={{ __html: props.data.content }}
                  />
                </Typography>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <ProductRight productRight={"true"} />
            </div>
          </div>
        </div>
      </div>
    </BlogDetailsPageStyle>
  );
};

export default BlogDetailsPage;
export const BlogDetailsPageStyle = styled.section`
  margin-bottom: 30px;
  .blogbanner {
    border-radius: 0px 0px 62px 62px;
    overflow: hidden;
  }
  .protMr {
    padding-right: 43px;
  }
  .blogText {
    padding: 30px 20px;
    background-color: #fff;
    margin-top: -101px;
  }
  .protMr p , .protMr h1, .protMr h2,.protMr h3,.protMr h4, .protMr h5,.protMr h6{
    padding-bottom: 15px;
  }
  img{
    width: 100%;
  }
  iframe{
    width: 100%;
  }
`;
