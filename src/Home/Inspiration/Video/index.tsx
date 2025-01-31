import React from "react";
import VideoStyle from "./VideoStyle";
import Images from "src/Common/Images";
import Typography from "src/Common/Typography";

interface Props {
  clientVideo?:any;
}

const VideoIndex = (props: Props) => {
  console.log("clientVideo",props.clientVideo)
  return (
    <>
    <div className="row">
    {props.clientVideo?.data.slice(0,3).map((item:any, index:any) => (
      <div className="col-md-4" key={index}>
      <VideoStyle>
        <div className="videoSec">
        <div dangerouslySetInnerHTML={{ __html: item.video_link }} />
        <Typography
          as="p"
          _color="#000"
          _fontSize={["14px", "22px"]}
          _fontWeight={[700, 700]}
          _lineHeight={["20px", "35px"]}
          className="mt-2 videoTitle"
        >
          {item.title}
        </Typography>
        <Typography
          as="p"
          _color="#000"
          _fontSize={["14px", "16px"]}
          _fontWeight={[400, 400]}
          _lineHeight={["20px", "24px"]}
          className="text_rap mt-0"
        >
          {item.tag_desc}
        </Typography>
      </div>
      </VideoStyle>
      </div>
      ))}
       </div>
    </>
  );
};

export default VideoIndex;
