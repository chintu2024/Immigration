import React from "react";
import Authour from "src/Common/Authour";
import Images from "src/Common/Images";
import Share from "src/Common/Share";
import Typography from "src/Common/Typography";
import NewsLeft from "src/News/NewsLeft";
import styled from "styled-components";

interface Props {
  data?: any;
  shareUrl?: any;
}

const NewsDetailsPages = (props: Props) => {
  // console.log("newsdata", props.data);
  return (
    <NewsDetailsPagesStyle>
      <div className="container py-4">
        <div className="row">
          <div className="col-md-8">
            <div className="newsDetails">
              <Typography
                as="h4"
                _color="#000"
                _fontSize={["14px", "46px"]}
                _fontWeight={[600, 600]}
                _lineHeight={["14px", "55px"]}
                className=""
              >
                {props.data.title}
              </Typography>
              <div className="newAuthor">
                <div className="author">
                  <Authour author={props.data} />
                </div>
                <div className="share">
                  <Share shareUrl={props.shareUrl} />
                </div>
              </div>
              {props.data.pageContent.map((item: any, index: any) => {
                return (
                  <div key={index}>
                    {item.product_title && (
                      <Typography
                        as="h2"
                        _color="#000"
                        _fontSize={["20px", "24px"]}
                        _fontWeight={[600, 600]}
                        _lineHeight={["36px", "38px"]}
                        className="mb-2"
                      >
                        {item.product_title}
                      </Typography>
                    )}
                    <div
                      className="mt-2"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                    {item.image && (
                      <div className="text-center productImages">
                        <Images
                          src={`${process.env.NEXT_PUBLIC_Images_URL}/public/images/${item.image}`}
                          alt={"images"}
                          className="mt-4"
                        />
                      </div>
                    )}

                    {item.url && (
                      <div
                        className="mt-5 video"
                        dangerouslySetInnerHTML={{ __html: item.url }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-md-4">
            <div className="NewsLeft">
              <NewsLeft />
            </div>
          </div>
        </div>
      </div>
    </NewsDetailsPagesStyle>
  );
};

export default NewsDetailsPages;

export const NewsDetailsPagesStyle = styled.section`
  background: #fffbf2;
  .NewsLeft {
    padding-left: 60px;
  }
  .listCar {
    white-space: nowrap;
    width: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 10px;
    overflow-x: auto !important;
    scrollbar-color: #fffbf2 !important;
    margin: 10px 0px;
    padding-bottom: 10px;
  }
  .listCar::-webkit-scrollbar {
    width: 30px;
    height: 12px;
    background-color: #fffbf2;
  }
  .listcat {
    border-radius: 25px;
    padding: 3px 8px;
    font-size: 14px;
  }
  .newAuthor {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0px 40px 0px;
  }
  .newsText {
    h1 {
      margin: 15px 0px;
    }
    h2 {
      margin: 15px 0px;
    }
    h3 {
      margin: 15px 0px;
    }
    h4 {
      margin: 15px 0px;
    }
    h5 {
      margin: 15px 0px;
    }
    p {
      font-size: 18px;
      line-height: 36px;
    }
  }
  .share {
    display: flex;
    gap: 5px;
    svg {
      border-radius: 50%;
    }
  }
  .productImages img {
    max-width: 900px;
  }
  .video {
    text-align: center;
  }
`;
