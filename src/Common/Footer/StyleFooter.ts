import styled from "styled-components";
import theme from "styles/themeColor";

const StyleFooter = styled.footer`
  background-color: #242424;
  padding: 30px 0px;
  position: relative;
  .footerUl {
    list-style: none;
    padding-left: 0px;
  }
  .footerUl li {
    padding: 8px 0px;
    color: ${theme.colors.footerText};
    font-size: 14px;
  }
  .footerUl li a {
    color: ${theme.colors.footerText};
    font-size: 14px;
  }
  .footerUl li a:hover {
    color: ${theme.colors.brand_primary.main};
  }
  .line {
    position: absolute;
    width: 100%;
    left: 0px;
    background-color: #626161;
    height: 1px;
    margin-bottom: 10px;
  }
  .socialMedia {
    justify-content: end;
    gap: 24px;
  }
  @media screen and (max-width: 760px) {
    .phoneNone {
      display: none;
    }
    .titleBtn {
      cursor: pointer;
      position: relative;
      background-image: url(images/footerArrow.svg);
      background-repeat: no-repeat;
      background-position: right;
    }
    .active {
      background-image: url(images/footerWhiteArrow.svg);
    }
  }
`;

export default StyleFooter;
