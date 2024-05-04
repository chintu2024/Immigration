import React from "react";
import FromStyle from "./FormStyle";
import Images from "src/Common/Images";
import Typography from "src/Common/Typography";
import { TextInput } from "src/Common/TextInput";

interface Props {}

const FormIndex = (props: Props) => {
  return (
    <FromStyle>
      <div className="row">
        <div className="col-md-6">
          <div className="formText">
            <Images
              src={"images/bannerColor.svg"}
              alt={"images"}
              width={77}
              height={27}
            ></Images>
            <Typography
              as="p"
              _color="#fff"
              _fontSize={["20px", "36px"]}
              _fontWeight={[600, 600]}
              _lineHeight={["30px", "45px"]}
              className="my-2"
            >
              Let’s talk about
            </Typography>
            <Typography
              as="p"
              _color="#64A3F0"
              _fontSize={["20px", "36px"]}
              _fontWeight={[600, 600]}
              _lineHeight={["30px", "45px"]}
              className=""
            >
              expert consultation
            </Typography>
            <Typography
              as="p"
              _color="#fff"
              _fontSize={["14px", "16px"]}
              _fontWeight={[400, 400]}
              _lineHeight={["20px", "24px"]}
              className="my-3"
            >
              Get in touch with our professional and experienced RCIC to
              evaluate your chances of immigrating to Canada, successfully.
            </Typography>
            <div className="peopleHead">
              <Images src={"images/people.png"} alt={"people"}></Images>
              <div className="peopleDetails">
                <Typography
                  as="p"
                  _color="#fff"
                  _fontSize={["14px", "16px"]}
                  _fontWeight={[600, 600]}
                  _lineHeight={["20px", "24px"]}
                  className=""
                >
                  Josephine Wichman
                </Typography>
                <Typography
                  as="p"
                  _color="#A08DA8"
                  _fontSize={["12px", "14px"]}
                  _fontWeight={[400, 400]}
                  _lineHeight={["18px", "20px"]}
                  className="my-2"
                >
                  Head of Sales
                </Typography>
                <a href="javascript:void(0)" className="peopleTel">
                  <Images
                    src={"images/devices-call.svg"}
                    alt={"images"}
                    width={24}
                    height={24}
                  ></Images>{" "}
                  +1(604) 496-0735
                </a>
                <a href="javascript:void(0)" className="peopleTel">
                  <Images
                    src={"images/messaging-mail.svg"}
                    alt={"images"}
                    width={24}
                    height={24}
                  ></Images>{" "}
                  info@elaarimmigration.ca
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="formInput">
            <div className="row">
              <div className="col-md-12">
                <Typography
                  as="p"
                  _color="#fff"
                  _fontSize={["14px", "16px"]}
                  _fontWeight={[400, 400]}
                  _lineHeight={["30px", "45px"]}
                  className="my-1"
                >
                  Name
                </Typography>
                <TextInput
                  name="name"
                  // value={""}
                  type="text"
                  label="Name"
                  variant="label"
                  height="40px"
                  // maxlength={dropValue.code !== "+91" ? "16" : "10"}
                  // error={Boolean(touched.mobile && errors.mobile)}
                  // disabled={dropValue.code !== "+91" ? false : true}
                />
              </div>
              <div className="col-md-6">
              <Typography
                  as="p"
                  _color="#fff"
                  _fontSize={["14px", "16px"]}
                  _fontWeight={[400, 400]}
                  _lineHeight={["30px", "45px"]}
                  className="my-1"
                >
                  Contact Number
                </Typography>
                <TextInput
                  name="mobile"
                  // value={""}
                  type="text"
                  label="Mobile"
                  height="40px"
                  variant="label"
                 />
              </div>
              <div className="col-md-6">
              <Typography
                  as="p"
                  _color="#fff"
                  _fontSize={["14px", "16px"]}
                  _fontWeight={[400, 400]}
                  _lineHeight={["30px", "45px"]}
                  className="my-1"
                >
                  Email id
                </Typography>
                <TextInput
                  name="mobile"
                  // value={""}
                  type="email"
                  label="Email"
                  variant="label"
                  height="40px"
                 />
              </div>
              <div className="col-md-12">
              <Typography
                  as="p"
                  _color="#fff"
                  _fontSize={["14px", "16px"]}
                  _fontWeight={[400, 400]}
                  _lineHeight={["30px", "45px"]}
                  className="my-1"
                >
                  Select Program
                </Typography>
                <select name="cars" id="cars" className="form-control">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
              </div>
            </div>
          </div>
          <div className="box-col-md-12">
            
          </div>
        </div>
      </div>
    </FromStyle>
  );
};

export default FormIndex;
