import styled from "styled-components";
import theme from "styles/themeColor";

const InspirationStyle = styled.section`
  padding: 50px 0px;
  background-color: #fff;
  position: relative;
  z-index: 1;
  .title {
    position: relative;
    img {
      position: absolute;
      right: 213px;
      bottom: 47px;
    }
  }
  .title2 {
    position: relative;
    img {
      position: absolute;
      left: -9px;
      bottom: -9px;
    }
  }
  .destoppd {
    margin-top: 3rem !important;
    padding-left: 50px;
  }
  .maintitla {
    margin-top: 50px;
    margin-bottom: 30px;
  }
  .immImages {
    border-radius: 0px 0px 60px 60px;
  }
  .callBtn {
    display: flex;
    gap: 20px;
    margin-top: 30px;
    a {
      background-color: #fb3d44;
      color: #ffffff;
      padding: 19px 20px;
      border-radius: 8px;
      font-size: 16px;
      max-width: 240px;
      width: 100%;
      text-align: center;
      :hover {
        opacity: 0.8;
      }
    }
  }
`;
export default InspirationStyle;
