import React from "react";
import Images from "src/Common/Images";
import Typography from "src/Common/Typography";
import styled from "styled-components";

interface Props {}

const Services = (props: Props) => {
  return (
    <ServicesStyle>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Typography
              as="h2"
              _color="#28003B"
              _fontSize={["50px", "48px"]}
              _fontWeight={[700, 700]}
              _lineHeight={["35px", "55px"]}
              className=""
            >
              Provide quality Services.
            </Typography>
          </div>
          <div className="col-md-6 offset-md-2">
            <Typography
              as="h2"
              _color="#28003B"
              _fontSize={["50px", "20px"]}
              _fontWeight={[400, 400]}
              _lineHeight={["35px", "38px"]}
              className=""
            >
              We manage the entire process from beginning to end and present our
              clients in the best possible light
            </Typography>
            <a href="javascript:viod(0)" className="seeAllBtn">
              See All Services{" "}
              <img
                src="images/about/arrows-arrow right.svg"
                width={"28px"}
                height={"28px"}
              />
            </a>
          </div>
        </div>
        <div className="row">
          {[...Array(3)].map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="servicesDetails">
                <div className="servciesImages">
                  <a href="javascript:void(0)">
                    <Images
                      src={"images/p4.jpg"}
                      alt={"images"}
                      width={"100%"}
                    />
                    <div className="imagesShow"></div>
                    <div className="text">
                      <Typography
                        as="h2"
                        _color="#fff"
                        _fontSize={["50px", "24px"]}
                        _fontWeight={[600, 600]}
                        _lineHeight={["35px", "38px"]}
                        className=""
                      >
                        Immigration text study
                      </Typography>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ServicesStyle>
  );
};

export default Services;

export const ServicesStyle = styled.section`
  background-color: #dde6e8;
  margin-top: 50px;
  padding: 50px 0px;
  .seeAllBtn {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 800;
  }
  .servicesDetails {
    margin-top: 30px;
    .servciesImages {
      position: relative;
      overflow: hidden;
      border-radius: 22px;
      img {
        border-radius: 22px;
        transition: all 1s ease-out;
        border-radius: 22px;
        display: block;
      }
      .imagesShow {
        background-color: black;
        position: absolute;
        top: 0px;
        width: 100%;
        height: 100%;
        border-radius: 22px;
        opacity: 0.3;
      }
      .text {
        position: absolute;
        left: 20px;
        transform: translate(0px, -30%);
        top: 70%;
        color: #fff;
        z-index: 1000000000;
        transition: all 1s ease-out;
      }
    }
  }
  .servicesDetails:hover .text {
    top: 60%;
  }

  .servicesDetails:hover .servciesImages img {
    transform: scale(1.1);
  }
`;
