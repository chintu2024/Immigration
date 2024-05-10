import React from "react";
import ProcessStyle from "./ProcessStyle";
import Typography from "src/Common/Typography";
import Images from "src/Common/Images";
import { processData } from "../HomeData";
import FormIndex from "./Form/Index";

interface Props {}

const ProcessIndex = (props: Props) => {
  return (
    <ProcessStyle>
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-2 mx-auto">
            <Typography
              as="p"
              _color="#28003B"
              _fontSize={["20px", "36px"]}
              _fontWeight={[600, 600]}
              _lineHeight={["30px", "45px"]}
              className="processTitle text-center"
            >
              We make your journey stress free by using our experience and
              extensive knowledge.
              <Images
                src={"images/logotick2.svg"}
                alt={"logo tick"}
                width={114}
                height={18}
              ></Images>
            </Typography>
            <div className="row">
              {processData.map((item, index) => (
                <div className="col-md-4 mx-auto" key={index}>
                  <div className="processDiv">
                    {item.id && (
                      <Typography
                        as="p"
                        _color="#fff"
                        _fontSize={["16px", "16px"]}
                        _fontWeight={[600, 600]}
                        _lineHeight={["20px", "24px"]}
                        className="processNumber text-center"
                      >
                        {item.id}
                      </Typography>
                    )}
                    {item.img && (
                      <Images
                        src={
                          "images/material-symbols-light_rocket-launch-outline.png"
                        }
                        alt={"images"}
                        width={48}
                        height={48}
                        className="procesImage"
                      ></Images>
                    )}
                    <Typography
                      as="h5"
                      _color="#000"
                      _fontSize={["16px", "18px"]}
                      _fontWeight={[600, 600]}
                      _lineHeight={["30px", "45px"]}
                      className=" my-2 text-center"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      as="h5"
                      _color="#000"
                      _fontSize={["16px", "16px"]}
                      _fontWeight={[400, 400]}
                      _lineHeight={["30px", "28px"]}
                      className="processtext text-center"
                    >
                      {item.description}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-12">
            <FormIndex />
          </div>
        </div>
      </div>
    </ProcessStyle>
  );
};

export default ProcessIndex;
