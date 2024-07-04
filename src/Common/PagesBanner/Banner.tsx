import React from "react";
import Typography from "src/Common/Typography";
import styled from "styled-components";

interface Props {
  title: any;
  dis: any;
  breadcrumb: any;
}

const ContactBanner = (props: Props) => {
  return (
    <ContactBannerStyle>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Typography
              as="h2"
              _color="#28003B"
              _fontSize={["50px", "76px"]}
              _fontWeight={[800, 800]}
              _lineHeight={["35px", "97px"]}
              className="pl-3 py-5 bannerText"
            >
              {props.title}
            </Typography>
          </div>
          <div className="col-md-5 offset-md-1">
            <Typography
              as="p"
              _color="#fff"
              _fontSize={["30px", "22px"]}
              _fontWeight={[400, 400]}
              _lineHeight={["40px", "34px"]}
              className="py-5"
            >
              {props.dis}
            </Typography>
            <Typography
              as="p"
              _color="#8B8B89"
              _fontSize={["30px", "22px"]}
              _fontWeight={[400, 400]}
              _lineHeight={["40px", "34px"]}
              className="bradCrum"
            >
              Home / <span>{props.breadcrumb}</span>
            </Typography>
          </div>
        </div>
      </div>
    </ContactBannerStyle>
  );
};

export default ContactBanner;
export const ContactBannerStyle = styled.div`
  background: url(images/contact/contactBanner.jpg) no-repeat;
  background-size: cover;
  border-radius: 0px 0px 62px 62px;
  padding: 80px 0px;

  .bannerText {
    background: url(images/contact/textbg.svg) no-repeat;
    background-position: center;
    background-size: 100%;
    /* background-color: #fff;
    border-radius: 28px; */
    position: relative;
  }
  /* .bannerText:after{
    content: "";
  } */
  .bradCrum {
    text-decoration: underline;
    padding-top: 30px;
  }
  .bradCrum span {
    color: #fff;
  }
`;
