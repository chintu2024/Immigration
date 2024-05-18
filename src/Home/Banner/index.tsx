import React from "react";
import BannerStyle from "./BannerStyle";
import Images from "src/Common/Images";
import Typography from "src/Common/Typography";
import ImLink from "src/Common/ImLink";
import Slider from "react-slick";
import { SlickStyles } from "styles/slickStyle";

interface Props {}

const Banner = (props: Props) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    centerPadding: "0px",
    autoplaySpeed: 2000,
  };
  return (
    <BannerStyle>
      <SlickStyles>
        <Slider {...settings}>
          <div className="bannerBg">
            <Images
              src={"images/banner1.png"}
              alt={"images"}
              width={"100%"}
              height={"auto"}
              className="bannerImages"
            ></Images>
            <div className="container">
              <div className="row">
                <div className="col-md-6 offset-md-6">
                  <Images
                    src={"images/bannerColor.svg"}
                    alt={"images"}
                    width={77}
                    height={27}
                  ></Images>
                  <Typography
                    as="p"
                    _color="#fff"
                    _fontSize={["14px", "46px"]}
                    _fontWeight={[400, 800]}
                    _lineHeight={["20px", "56px"]}
                    className="mt-2 title"
                  >
                    Our Simple Approach To Immigration Process
                    <Images
                      src={"images/logotick.svg"}
                      alt={"images"}
                      width={114}
                      height={18}
                      className="logoImages"
                    ></Images>
                  </Typography>
                  <Typography
                    as="p"
                    _color="#fff"
                    _fontSize={["14px", "16px"]}
                    _fontWeight={[400, 400]}
                    _lineHeight={["20px", "28px"]}
                    className="mt-4"
                  >
                    Our specialized experts in immigration affairs will lead you
                    through each stage to guarantee a smooth process, providing
                    tailored options for Business, Study, and Family and
                    Economic Immigration.
                  </Typography>
                  <div className="BookingBtn">
                    <a href="javascript:viod(0);">
                      Book a Consultion{" "}
                      <img src="images/arrows-arrow-up-right.svg" width={30} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bannerBg">
            <div className="container">
              <div className="row">
                <div className="col-md-6 offset-md-6">
                  <Images
                    src={"images/bannerColor.svg"}
                    alt={"images"}
                    width={77}
                    height={27}
                  ></Images>
                  <Typography
                    as="p"
                    _color="#fff"
                    _fontSize={["14px", "46px"]}
                    _fontWeight={[400, 800]}
                    _lineHeight={["20px", "56px"]}
                    className="mt-2 title"
                  >
                    Our Simple Approach To Immigration Process
                    <Images
                      src={"images/logotick.png"}
                      alt={"images"}
                      width={114}
                      height={18}
                      className="logoImages"
                    ></Images>
                  </Typography>
                  <Typography
                    as="p"
                    _color="#fff"
                    _fontSize={["14px", "16px"]}
                    _fontWeight={[400, 400]}
                    _lineHeight={["20px", "28px"]}
                    className="mt-4"
                  >
                    Our specialized experts in immigration affairs will lead you
                    through each stage to guarantee a smooth process, providing
                    tailored options for Business, Study, and Family and
                    Economic Immigration.
                  </Typography>
                  <div className="BookingBtn">
                    <a href="javascript:viod(0);">
                      Book a Consultion{" "}
                      <img src="images/arrows-arrow-up-right.svg" width={30} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bannerBg">
            <div className="container">
              <div className="row">
                <div className="col-md-6 offset-md-6">
                  <Images
                    src={"images/bannerColor.svg"}
                    alt={"images"}
                    width={77}
                    height={27}
                  ></Images>
                  <Typography
                    as="p"
                    _color="#fff"
                    _fontSize={["14px", "46px"]}
                    _fontWeight={[400, 800]}
                    _lineHeight={["20px", "56px"]}
                    className="mt-2 title"
                  >
                    Our Simple Approach To Immigration Process
                    <Images
                      src={"images/logotick.png"}
                      alt={"images"}
                      width={114}
                      height={18}
                      className="logoImages"
                    ></Images>
                  </Typography>
                  <Typography
                    as="p"
                    _color="#fff"
                    _fontSize={["14px", "16px"]}
                    _fontWeight={[400, 400]}
                    _lineHeight={["20px", "28px"]}
                    className="mt-4"
                  >
                    Our specialized experts in immigration affairs will lead you
                    through each stage to guarantee a smooth process, providing
                    tailored options for Business, Study, and Family and
                    Economic Immigration.
                  </Typography>
                  <div className="BookingBtn">
                    <a href="javascript:viod(0);">
                      Book a Consultion{" "}
                      <img src="images/arrows-arrow-up-right.svg" width={30} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </SlickStyles>
    </BannerStyle>
  );
};
export default Banner;
