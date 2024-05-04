import styled from "styled-components";

const ImmigrationStyle = styled.section`
  margin: 60px 0px;
  .ImmigrationDiv {
    background: linear-gradient(150.19deg, #fac3b9 6.88%, #c8bcda 100%);
    text-align: right;
    border-radius: 162px 162px 0px 162px;
    position: relative;
  }
  .satisfied {
    position: absolute;
    bottom: 85px;
    box-shadow: 0px 4px 22px 0px #b7b5b540;
    background-color: #fff;
    padding: 25px;
    left: -64px;
    border-radius: 18px;
    ul {
      padding-left: 0px;
      margin: auto;
      margin-right: 62px;
      padding-top: 12px;
      li {
        display: inline-block;
        margin-right: -20px;
      }
    }
    img {
      border-radius: 50%;
      border: 4px solid #fff;
    }
  }
  .numberSec {
    margin-top: 55px;
    .numberText {
      span {
        background: -webkit-linear-gradient(180deg, #682870 0%, #923157 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
}
    .seeBtn {
      display: flex;
      align-items: center;
      a {
      display: flex;
      background-color: #000000;
      color: #fff;
      height: 45px;
      padding: 0px 20px;
      align-items: center;
      margin-top: 28px;
      border-radius: 12px;
      :hover{
        opacity: 0.7;
      }
    }
    }
`;

export default ImmigrationStyle;
