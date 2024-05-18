import styled from "styled-components";

const VideoStyle = styled.div`
  .videoSec {
    margin-top: 20px;
  }
  .videoImagee {
    position: relative;
  }
  .videoarrow {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  iframe{
    width: 100% !important;
    height: 245px !important;
    border-radius: 12px;
  }
  .videoTitle{
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    white-space: normal;
    overflow: hidden;
  }
`;

export default VideoStyle;
