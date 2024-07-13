import styled from "styled-components";
import theme from "styles/themeColor";

const MeneStyle = styled.section`
  .menubarColor {
    background-color: ${theme.colors.menubar};
    a {
      color: ${theme.colors.white};
    }
    .line {
      background-color: #a7a3a3;
      width: 2px;
      height: 24px;
    }
    .logInsec {
      display: flex;
      align-items: center;
    }
  }

  .contactDetails {
    display: flex;
    position: relative;
    height: 100%;
    align-items: center;
    justify-content: end;
    ul {
      display: flex;
      align-items: center;
      line-height: 45px;
      margin: 0px;
      .call {
        display: flex;
        align-items: center;
        img {
          padding-right: 5px;
        }
      }
      list-style: none;
      li {
        display: inline-block;
        padding-left: 15px;
      }
    }
  }
  .menuBar .logo img {
    height: 69px;
    margin-bottom: -18px;
  }
  .menuBar .wrapper {
    position: relative;
    max-width: 1200px;
    padding: 0px 30px;
    height: 70px;
    line-height: 45px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .wrapper .logo a {
    color: #f2f2f2;
    font-size: 30px;
    font-weight: 600;
    text-decoration: none;
  }
  .wrapper .nav-links {
    display: inline-flex;
    margin: 0px;
    height: 100%;
    align-items: center;
  }
  .nav-links li {
    list-style: none;
    margin-left: 10px;
  }
  .nav-links li a {
    color: #000;
    text-decoration: none;
    font-size: 18px;
    font-weight: 400;
    padding: 24px 15px;
    /* border-radius: 5px; */
    transition: all 0.3s ease;
  }

  /* .nav-links >li >a:hover {
    background: #f44e1c;
    color: #000;
  } */
  .nav-links .showMega1:hover {
    background-color: ${theme.colors.back1};
  }
  .nav-links .showMega2:hover {
    background-color: ${theme.colors.back2};
  }
  .nav-links .showMega3:hover {
    background-color: ${theme.colors.back3};
  }
  .nav-links .showMega4:hover {
    background-color: ${theme.colors.back4};
  }
  .nav-links .showMega5:hover {
    background-color: ${theme.colors.back5};
  }
  .nav-links .showMega5:hover a{
    color: #fff;
  }
  .nav-links .mobile-item {
    display: none;
  }
  .nav-links .drop-menu {
    position: absolute;
    background: #242526;
    width: 180px;
    line-height: 45px;
    top: 85px;
    opacity: 0;
    visibility: hidden;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
  .nav-links li:hover .drop-menu,
  .nav-links li:hover .mega-box {
    transition: all 0.3s ease;
    top: 55px;
    opacity: 1;
    visibility: visible;
  }
  .drop-menu li a {
    width: 100%;
    display: block;
    padding: 0 0 0 15px;
    font-weight: 400;
    border-radius: 0px;
  }
  .mega-box {
    position: absolute;
    left: 0;
    max-width: 1200px;
    width: 100%;
    padding: 0 30px;
    top: 85px;
    opacity: 0;
    visibility: hidden;
    z-index: 10000000;
  }
  .menuHide {
    opacity: 0 !important;
    visibility: hidden !important;
  }

  .mega-box .content {
    background: #f44e1c;
    padding: 60px 60px;
    display: flex;
    flex-wrap: wrap;
    /* width: 100%; */
    justify-content: left;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
    /* gap: 12px; */
    /* width: calc(100% - 40px); */
    margin-top: 16px;
  }
  .nav-links >li {
    padding: 13px 0px;
}
  .mega-box .content.back1{
    background-color: ${theme.colors.back1};
  }
  .mega-box .content.back2{
    background-color: ${theme.colors.back2};
  }
  .mega-box .content.back3{
    background-color: ${theme.colors.back3};
  }
  .mega-box .content.back4{
    background-color: ${theme.colors.back4};
  }
  .mega-box .content.back5{
    background-color: ${theme.colors.back5};
  }
  .mega-box .content.back5 a{
    background-color: ${theme.colors.back5};
    color: #fff;
  }
  .mega-box .content.back5 .col-md-3 header {
    color: #fff;
}
  .mega-box .content .col-md-3 {
    width: calc(25% - 30px);
    padding: 0px 15px;
  }
  .content .col-md-3 header {
    color: #000;
    font-size: 20px;
    font-weight: 500;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
    padding-left: 36px;
    padding-right: 20px;
    border-bottom: 1px solid #000000
  }
  .content .col-md-3:nth-child(2) header::before{
    content: "";
    background: url(/images/icon/eos-icons_service-instance-outlined.svg) no-repeat;
    position: absolute;
    width: 24px;
    height: 24px;
    left: 0px;
    top: 9px;
  }
  .content .col-md-3:nth-child(3) header::before{
    content: "";
    background: url(/images/icon/files-file-text.svg) no-repeat;
    position: absolute;
    width: 24px;
    height: 24px;
    left: 0px;
    top: 9px;
  }
  .content .col-md-3 header::after{
    content: "";
    background: url(/images/icon/arrow.svg) no-repeat;
    position: absolute;
    width: 28px;
    height: 28px;
    right: 0px;
    top: 17px;
  }
  .content .col-md-3 .mega-links {
    /* margin-left: -40px; */
    /* border-left: 1px solid rgba(255, 255, 255, 0.09); */
    padding-left: 0px;
    margin-top: 18px;
  }
  .col-md-3 .mega-links li{
    margin-left: 0px;
    position: relative;
    padding-left: 26px;
    margin-bottom: 10px;
  }
  .col-md-3 .mega-links li a:hover{
    text-decoration: underline;
  }
  .mega-links li::before{
    background: url(/images/icon/small-arrow.svg) no-repeat;
    position: absolute;
    width: 16px;
    height: 16px;
    left: 0px;
    top: 3px;
    content: "";
  }
  .col-md-3 .mega-links li a {
    padding: 0px;
    color: #000;
    font-size: 17px;
    display: block;
    line-height: 22px;
  }
  .col-md-3 .mega-links li a:hover {
    color: #000;
  }
  .wrapper .btn {
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    display: none;
  }
  .wrapper .btn.close-btn {
    position: absolute;
    right: 30px;
    top: 10px;
  }
  .menuLink{
    padding-left: 0px;
  }
  .menuLink li{
    border-bottom: 1px solid #000;
    position: relative;
    margin-left: 0px;
    margin-bottom: 10px;
  }
  .menuLink li::after{
    content: "";
    background: url(/images/icon/arrow.svg) no-repeat;
    position: absolute;
    width: 24px;
    height: 24px;
    right: 0px;
    top: 17px;
  }
  .menuLink a{
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0px 0px !important;
  }
  .nav-links .nav-ul{
    display: flex;
  }
  @media screen and (max-width: 970px) {
    .wrapper .btn {
      display: block;
    }
    .menuHide {
    opacity: 1 !important;
    visibility: visible !important;
  }
    .contactDetails ul .call.email{
      display: none;
    }
    .nav-links .nav-ul{
    display: block;
    padding-left: 0px;
    overflow: scroll;
    height: calc(100vh - 390px);
  }
  .nav-links .nav-ul::-webkit-scrollbar{
    background-color: #fff;
    width: 11px;
  }
    .mega-box{
      padding: 0px !important;
    }
    .wrapper .nav-links {
      position: fixed;
      height: 100vh;
      width: 100%;
      max-width: 350px;
      top: 0;
      left: -100%;
      background: #242526;
      display: block;
      padding: 50px 10px;
      line-height: 50px;
      overflow-y: auto;
      box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.18);
      transition: all 0.3s ease;
    }
    /* custom scroll bar */
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background: #242526;
    }
    ::-webkit-scrollbar-thumb {
      background: #3a3b3c;
    }
    #menu-btn:checked ~ .nav-links {
      left: 0%;
    }
    /* #menu-btn:checked ~ .btn.menu-btn {
      display: none;
    }
    #close-btn:checked ~ .btn.menu-btn {
      display: block;
    } */
      .btn.menu-btn{color:#000;}
    .nav-links >li {
      margin: 0px 3px;
      padding: 0px 0px;
    }
    .nav-links li a {
      padding: 0 20px;
      display: flex;
      font-size: 14px !important;
      line-height: 34px;
    }
    .nav-links .drop-menu {
      position: static;
      opacity: 1;
      top: 65px;
      visibility: visible;
      padding-left: 20px;
      width: 100%;
      max-height: 0px;
      overflow: hidden;
      box-shadow: none;
      transition: all 0.3s ease;
    }
    #showDrop:checked ~ .drop-menu,
    #showMega1:checked ~ .mega-box,
    #showMega2:checked ~ .mega-box,
    #showMega3:checked ~ .mega-box,
    #showMega4:checked ~ .mega-box,
    #showMega5:checked ~ .mega-box,
    #showMega6:checked ~ .mega-box,
    #showMega7:checked ~ .mega-box,
    #showMega8:checked ~ .mega-box,
    #showMega9:checked ~ .mega-box,
    #showMega10:checked ~ .mega-box {
      max-height: 100%;
    }
    .nav-links .desktop-item {
      display: none;
    }
    .nav-links .mobile-item {
      display: block;
        color: #f2f2f2;
        font-size: 16px;
        font-weight: 500;
        padding-left: 4px;
        cursor: pointer;
        border-radius: 5px;
        line-height: 40px;
      /* transition: all 0.3s ease; */
    }
    .drop-menu li {
      margin: 0;
    }
    .drop-menu li a {
      border-radius: 5px;
      font-size: 18px;
    }
    .mega-box {
      position: static;
      top: 65px;
      opacity: 1;
      visibility: visible;
      padding: 0 20px;
      max-height: 0px;
      overflow: hidden;
      /* transition: all 0.3s ease; */
      z-index: 10000000;
    }
    .mega-box .content {
      box-shadow: none;
      flex-direction: column;
      padding: 6px 11px 0 0px;
      margin-top: 0px;
    }
    .mega-box .content .col-md-3 {
      width: 100%;
      margin-bottom: 15px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
    }
    .mega-box .content .col-md-3:nth-child(1),
    .mega-box .content .col-md-3:nth-child(2) {
      border-top: 0px;
    }
    .content .col-md-3 .mega-links {
      border-left: 0px;
      padding-left: 15px;
    }
    .col-md-3 .mega-links li {
      margin: 0;
    }
    .content .col-md-3 header {
      font-size: 16px;
    }
  }
  .menuBar input {
    display: none;
  }
  #menu-btn:checked ~ .nav-links.menuslideOff{
    left: -100%;
  }
`;

export default MeneStyle;
