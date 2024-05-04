import styled from "styled-components";

const CheckEligibilityStyle = styled.section`
background-color: #C6D6F7;
margin-top: 40px;
padding: 80px 0px;
position: relative;
z-index: 1;
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
    .textSticky{
    position: sticky;
    top: 0px;
}
`;

export default CheckEligibilityStyle;