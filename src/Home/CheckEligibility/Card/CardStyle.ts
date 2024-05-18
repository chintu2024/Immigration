import styled from "styled-components";
import theme from "styles/themeColor";

const CardStyle = styled.div`
  .cardDiv {
    background-color: #ffffff;
    margin-bottom: 20px;
    padding: 40px 20px;
    border-radius: 22px;
    text-align: center;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    h3 {
      transition: all 0.3s ease-in-out;
    }
    p {
      transition: all 0.3s ease-in-out;
    }
    a {
      transition: all 0.3s ease-in-out;
    }
    img {
      transition: all 0.3s ease-in-out;
    }
    :hover {
      background-color: ${theme.colors.btn};
      color: #fff;
      a {
        color: #fff;
      }
      h3 {
        color: #fff;
      }
      p {
        color: #fff;
      }
      img {
        filter: invert(1);
      }
    }
  }
  .checkText {
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    white-space: normal;
    overflow: hidden;
  }
  .checkBtn {
    margin-top: 20px;
    a {
      font-size: 16px;
      font-weight: 500;
      :hover {
        opacity: 0.9;
      }
    }
  }
`;

export default CardStyle;
