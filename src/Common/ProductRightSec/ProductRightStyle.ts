import styled from "styled-components";

const ProductRightStyle = styled.div`
margin-left: 30px;
  .keyWord {
    border: 1px solid #ececec;
    padding: 25px;
  }
  .keywordName {
    list-style: none;
    padding-left: 0px;
    li {
      background-color: #f5f8fa;
      color: #6e7682;
      display: inline-block;
      margin: 5px 0px;
      /* border-bottom: 1px solid #d7d4d4; */
      border-radius: 25px;
      font-weight: 400;
      a{
        padding: 15px;
        display:block;
      }
    }
  }
  .calender {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .recentPost {
    position: relative;
    padding-left: 30px;
    border-bottom: 1px solid #ececec;
    padding-bottom: 20px;
    padding-top: 20px;
  }
  .recentPost:last-child {
    border: none;
  }
  .recentPost::before {
    content: "";
    position: absolute;
    background: url(/images/Chevrons-chevron-right.png) no-repeat;
    width: 24px;
    height: 24px;
    left: 0px;
  }
  .workForm {
    border: 1px solid #ececec;
    padding: 25px;
    border-radius: 4px;
  }
  .productTxt {
    margin-left: auto;
    max-width: 329px;
  }
`;

export default ProductRightStyle;
