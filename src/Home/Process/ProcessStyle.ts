import styled from "styled-components";

const ProcessStyle = styled.section`
  background-color: #dde6e8;
  padding: 80px 0px;
  position: relative;
  z-index: 1;
  .processTitle {
    position: relative;
    img {
      position: absolute;
      bottom: -7px;
      right: 50%;
    }
  }
  .processDiv {
    margin-top: 40px;
    text-align: center;
    .processNumber {
      max-width: 48px;
      margin: auto;
      background-color: #000;
      color: #fff;
      border-radius: 50%;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      :hover{
        background-color: #fe0002;
      }
    }
    .processtext {
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      white-space: normal;
      overflow: hidden;
    }
  }
`;

export default ProcessStyle;
