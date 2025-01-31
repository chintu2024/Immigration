import styled from "styled-components";
import theme from "styles/themeColor";

const MainAboutStyle = styled.section`
  .maindivtext {
    height: 100px;
    width: 100%;
  }
  .scrollmagic-pin-spacer {
    margin-bottom: 40px !important;
    .aboutFirst {
      border-radius: 22px;
      position: relative;
      padding: 80px 60px;
      overflow: hidden;
      z-index: 1;
      /* margin: 40px 0px; */
      transition: all 1s ease-in-out;
    }
    .color1 {
      background-color: ${theme.colors.back1};
    }
    .color2 {
      background-color: ${theme.colors.back2};
    }
    .color3 {
      background-color: ${theme.colors.back3};
    }
    .color4 {
      background-color: ${theme.colors.back4};
    }
    .color5 {
      background-color: ${theme.colors.back5};
    }
    .color6 {
      background-color: ${theme.colors.back6};
    }
    .color7 {
      background-color: ${theme.colors.back7};
    }
    .color8 {
      background-color: ${theme.colors.back8};
    }
    :nth-child(1) .scroll2 .aboutFirst {
      margin: 0px 25px !important;
      transition: all 1s ease-in-out;
    }
    :nth-child(2) .scroll2 .aboutFirst {
      margin: 10px 20px !important;
    }
    :nth-child(3) .scroll2 .aboutFirst {
      margin: 20px 15px !important;
    }
    :nth-child(4) .scroll2 .aboutFirst {
      margin: 30px 10px !important;
    }
    :nth-child(5) .scroll2 .aboutFirst {
      margin: 40px 5px !important;
    }
    :nth-child(6) .scroll2 .aboutFirst {
      margin: 50px 0px !important;
    }
    :nth-child(7) .scroll2 .aboutFirst {
      margin: 60px 0px !important;
    }
    :nth-child(8) .scroll2 .aboutFirst {
      margin: 70px 0px !important;
    }
    .InfoSection_shadow {
      position: absolute;
      inset: -0.625rem 45% -0.625rem -10%;
      z-index: -1;
      transform: skewX(-14deg);
      transform-origin: 100% 0;
      background: #d4d4d4;
      opacity: 0.5;
      mix-blend-mode: multiply;
    }
  }
  .mainTitle {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .linkTab {
    ul {
      padding-left: 0px;
      list-style: none;
      li {
        border-bottom: 1px solid #fff;
        padding-bottom: 8px;
        max-width: 340px;
        position: relative;
        padding-left: 24px;
        margin-bottom: 15px;
        ::before {
          content: "";
          background-image: url(/images/mainAboutArrow.svg);
          background-repeat: no-repeat;
          width: 40px;
          position: absolute;
          height: 14px;
          top: 6px;
          left: 0px;
          background-size: 16px;
        }
        a {
          color: ${theme.colors.white};
          font-size: 18px;
          letter-spacing: 1px;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          display: -webkit-box;
          white-space: normal;
          overflow: hidden;
          :hover {
            opacity: 0.8;
          }
        }
      }
    }
  }
  .AppyImmigration {
    width: 199px;
    display: flex;
    margin-top: 30px;
    a {
      color: #ffffff;
      border: 1px solid #ffffff;
      display: block;
      border-radius: 25px;
      width: 100%;
      text-align: center;
      padding: 10px 0px;
      :hover {
        opacity: 0.8;
      }
    }
  }
`;

export default MainAboutStyle;
