import styled from "styled-components";
import theme from "styles/themeColor";

const FromStyle = styled.div`
  background-color: ${theme.colors.manu};
  padding: 30px 0px;
  border-radius: 0px 0px 62px 62px;
  margin-top: 40px;
  .peopleHead {
    background-color: #343436;
    display: flex;
    border-radius: 0px 0px 32px 32px;
    margin-top: 100px;
    .peopleTel {
      display: flex;
      color: #fff;
      font-size: 14px;
      img {
        margin-right: 10px;
      }
    }
  }
  .subtitle {
    margin-top: -10px;
  }
  .formText {
    padding-right: 80px;
  }
  .peopleDetails {
    padding: 15px;
  }
  .form-control {
    color: #5e7384;
    font-size: 14px;
    border: 0;
    padding: 0 16px;
    display: block;
    width: 100%;
    height: 56px;
    background-color: transparent;
    -webkit-transition: 0.2s ease all;
    transition: 0.2s ease all;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif !important;
    border-radius: 8px;
    background: #fff;
    :focus {
      outline: none;
    }
  }
  .submitBtn{
    margin-top: 20px;
    border: none;
    max-width: 200px;
    width: 100%;
    padding: 10px 0px;
    font-size: 18px;
    border-radius: 4px;
    color: #fff;
    background-color: #fe0002;
  }
`;

export default FromStyle;
