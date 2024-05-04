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
      margin-left: -112px;
      bottom: -11px;
    }
  }
  .immImages {
    border-radius: 0px 0px 60px 60px;
  }
  .callBtn {
    display: flex;
    gap: 20px;
    margin-top: 30px;
    a {
      background-color: ${theme.colors.btn};
      color: ${theme.colors.white};
      padding: 10px 20px;
      border-radius: 8px;
      font-size: 16px;
      :hover{
        opacity: 0.8;
      }
    }
  }
`;
export default InspirationStyle;
