import React from "react";
import VideoStyle from "./VideoStyle";
import Images from "src/Common/Images";
import Typography from "src/Common/Typography";

interface Props {}

const VideoIndex = (props: Props) => {
  return (
    <VideoStyle>
      <div className="videoSec">
        <div className="videoImagee">
        <Images src={"images/video.png"} alt={"video"} width={"100%"}></Images>
        <Images src={"images/videoarrow.png"} alt={"videoArrow"} width={48} height={48} className="videoarrow"></Images>
        </div>
        <Typography
          as="p"
          _color="#000"
          _fontSize={["14px", "22px"]}
          _fontWeight={[700, 700]}
          _lineHeight={["20px", "35px"]}
          className="mt-3"
        >
          Anisha Naidu
        </Typography>
        <Typography
          as="p"
          _color="#000"
          _fontSize={["14px", "16px"]}
          _fontWeight={[400, 400]}
          _lineHeight={["20px", "35px"]}
          className="mt-1"
        >Canada PR Visa
        </Typography>
      </div>
    </VideoStyle>
  );
};

export default VideoIndex;
