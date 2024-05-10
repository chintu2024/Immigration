import React from "react";
import InquiryStyle from "./InquiryStyle";
import Images from "src/Common/Images";
import Typography from "src/Common/Typography";
import Form from "./form";

interface Props {}

const Inquiry = (props: Props) => {
  return (
    <InquiryStyle>
      <div className="container">
        <div className="inquiryDeiv">
          <div className="row">
            <div className="col-md-6">
              <div className="inquiryText">
                <Images
                  src={"images/bannerColor.svg"}
                  alt={"images"}
                  width={77}
                  height={27}
                ></Images>
                <Typography
                  as="h2"
                  _color="#000"
                  _fontSize={["50px", "57px"]}
                  _fontWeight={[700, 700]}
                  _lineHeight={["35px", "62px"]}
                  className=""
                >
                  Have inquiries? Reach out via message
                </Typography>
                <div className="text-center">
                  <Images
                    src={"images/contact/inquiryTextimg.svg"}
                    alt={"images"}
                    width={251}
                    height={222}
                    className="mt-3"
                  ></Images>
                </div>
              </div>
            </div>
            <div className="col-md-5 mr-auto">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </InquiryStyle>
  );
};

export default Inquiry;
