import React from "react";
import VideoStyle from "./VideoStyle";
import Images from "src/Common/Images";
import Typography from "src/Common/Typography";

interface Props {
  clientVideo?:any;
}

const VideoIndex = (props: Props) => {
  console.log("video",props.clientVideo)
  return (
    <>
    <div className="row">
    {props.clientVideo?.response.map((item:any, index:any) => (
      <div className="col-md-4" key={index}>
      <VideoStyle>
        <div className="videoSec">
        <div dangerouslySetInnerHTML={{ __html: item.youtube_video_link }} />
        <Typography
          as="p"
          _color="#000"
          _fontSize={["14px", "22px"]}
          _fontWeight={[700, 700]}
          _lineHeight={["20px", "35px"]}
          className="mt-2 videoTitle"
        >
          {item.youtube_video_title}
        </Typography>
        {/* <Typography
          as="p"
          _color="#000"
          _fontSize={["14px", "16px"]}
          _fontWeight={[400, 400]}
          _lineHeight={["20px", "13px"]}
          className="mt-0"
        >
          Canada PR Visa
        </Typography> */}
      </div>
      </VideoStyle>
      </div>
      ))}
       </div>
    </>
  );
};

export default VideoIndex;
