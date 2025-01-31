import React from "react";
import ContactBanner from "src/Common/PagesBanner/Banner";
import Typography from "src/Common/Typography";
import styled from "styled-components";

interface Props {
  data?: any;
}

const TestimonalsIndex = (props: Props) => {
  console.log("data", props.data)
  return (
    <TestimonalsStyle>
      <ContactBanner
        title={"Transforming Visions into Reality"}
        dis={
          "Our mission is to empower every family to navigate the immigration system more confidently, rapidly, and affordably."
        }
        breadcrumb={"testimonals"}
      />
      <div className="testimonal">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Typography
                as="h2"
                _color="#000"
                _fontSize={["24px", "40px"]}
                _fontWeight={[700, 700]}
                _lineHeight={["36px", "40px"]}
                className="mt-5 text-center"
              >
                You're in a good hand
              </Typography>
            </div>
            {props.data.data.map((item: any, index: any) => (
              <div className="col-md-6 mb-4" key={index}>
                <div className="testimonalsBox">
                  <div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.video_link,
                      }}
                    />
                    <Typography
                      as="h5"
                      _color="#000"
                      _fontSize={["24px", "32px"]}
                      _fontWeight={[700, 700]}
                      _lineHeight={["36px", "44px"]}
                      className="my-4 testimonalTitle"
                    >
                      {item.title}
                    </Typography>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.content,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TestimonalsStyle>
  );
};
export default TestimonalsIndex;
export const TestimonalsStyle = styled.section`
.bannerText{
  font-size: 50px;
}
  .testimonalsBox {
    margin: 20px 0px;
    /* display: flex; */
    height: calc(100% - 60px);
    position: relative;
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 12px;
    iframe {
      width: 100%;
      height: 350px;
    }
    p {
      font-size: 18px;
      line-height: 28px;
    }
    .testimonalTitle {
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      white-space: normal;
      overflow: hidden;
    }
  }
`;
