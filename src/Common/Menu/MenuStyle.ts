import styled from "styled-components";
import theme from "styles/themeColor";

const MeneStyle = styled.section`
.menubarColor{
  background-color: ${theme.colors.menubar};
  a{
    color: ${theme.colors.white};
  }
  .line{
    background-color: #A7A3A3;
    width: 2px;
    height: 24px;
  }
  .logInsec{
    display: flex;
    align-items: center;
  }
}
.contactDetails{
    display: flex;
    position: relative;
    height: 100%;
    align-items: center;
    justify-content: end;
    ul{
        display: flex;
    align-items: center;
        .call{
            display: flex;
            align-items: center;
            img{
                padding-right: 5px;
            }
        }
        list-style: none;
        li{
        display: inline-block;
        padding-left: 15px ;
        }
    }
}


 /*nav css start*/
.menuBar{
    padding: 15px 0px;
    .menuStyle{
        display: flex;
        align-items: center;
        justify-content: end;
        position: relative;
        height: 100%;
    }
    button{
        padding: 5px 0px;
        box-shadow: 0px 4px 4px 0px #8F8A8A40;
    }
}
  .menucss,
  .menucss ul,
  .menucss ul li,
  .menucss ul li a,
  .menucss #menu-button {
    margin: 0;
    padding: 0;
    border: 0;
    list-style: none;
    line-height: 1;
    display: block;
    position: relative;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .menucss #menu-button {
    display: none;
  }
  .menucss {
    background: none; /*main background color*/
    float: left;
    margin: 0px 0 0;
  }
  .menucss > ul > li {
    float: left;
    background: no-repeat left center;
    margin-right: 5px;
  }
  .menucss.align-center > ul {
    font-size: 0;
    text-align: center;
  }
  .menucss.align-center > ul > li {
    display: inline-block;
    float: none;
  }
  .menucss.align-center ul ul {
    text-align: left;
  }
  .menucss.align-right > ul > li {
    float: right;
  }
  .menucss > ul > li > a {
    border-radius: 0px;
    color: ${theme.colors.manu};
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0;
    margin: 0 0 0;
    padding: 10px 0px;
    padding-right: 30px;
    padding-bottom: 15px;
    text-decoration: none;
    text-transform: uppercase;
  }

  .menucss > ul > li.has-sub > a::after {
    content: "";
    border-width: 1px;
    border-style: solid;
    border-color: transparent black black transparent;
    display: block;
    width: 8px;
    height: 8px;
    position: absolute;
    right: 8px;
    top: 11px;
    transform: rotate(45deg);
  }
  .menucss > ul > li.has-sub > a::before {
    border-width: 1px;
    border-style: solid;
    border-color: black transparent transparent black;
    content: "";
    display: none;
    width: 8px;
    height: 8px;
    position: absolute;
    right: 8px;
    top: 11px;
    transform: rotate(45deg);
  }
  .menucss > ul > li.has-sub:hover > a::after {
    display: none;
  }
  .menucss > ul > li.has-sub:hover > a:before {
    display: block;
  }
  .menucss ul ul {
    position: absolute;
    left: -9999px;
    z-index: 999999;
    box-shadow: 0px 0px 10px 0px transparent;
  }
  .menucss.align-right ul ul {
    text-align: right;
  }
  .menucss li:hover > ul {
    left: auto;
  }
  .menucss.align-right li:hover > ul {
    left: auto;
    right: 0;
  }
  .menucss li:hover > ul > li {
  }
  .menucss ul ul ul {
    margin-left: 100%;
    top: 0;
  }
  .menucss.align-right ul ul ul {
    margin-left: 0;
    margin-right: 100%;
  }
  .menucss ul ul li a {
    border-bottom: 1px solid rgba(150, 150, 150, 0.15);
    border-top: 0 !important;
    padding: 11px 23px;
    width: 230px;
    font-size: 14px;
    text-decoration: none;
    color: ${theme.colors.white};
    font-weight: 400;
    background-color: ${theme.colors.brand_primary.main};
    line-height: 18px;
  }
  .menucss ul ul li:last-child > a,
  .menucss ul ul li.last-item > a {
    border-bottom: 0;
  }
  .menucss ul ul li:hover > a,
  .menucss ul ul li a:hover {
    color: ${theme.colors.white}; /* dropdwon menu hover color */
    background: ${theme.colors.brand_primary[500]}; /*dropdwon menu hover tab bg */
  }
  .menucss ul ul li.has-sub > a:after {
    content: "";
    border-width: 1px;
    border-style: solid;
    border-color: transparent ${theme.colors.white} ${theme.colors.white} transparent;
    display: block;
    width: 8px;
    height: 8px;
    position: absolute;
    right: 10px;
    top: 12px;
    transform: rotate(45deg);
  }
  .menucss ul ul li.has-sub > a:before {
    border-width: 1px;
    border-style: solid;
    display: none;
    border-color: ${theme.colors.white} ${theme.colors.white} transparent transparent;
    content: "";
    width: 8px;
    height: 8px;
    position: absolute;
    right: 10px;
    top: 16px;
    transform: rotate(45deg);
  }
  .menucss ul ul li.has-sub:hover > a:after {
    display: none;
  }
  .menucss ul ul li.has-sub:hover > a:before {
    display: block;
  }
  .menucss ul ul li {
    height: 0;
  }
  .menucss li:hover > ul > li {
    height: auto;
  }
  /*Start Responsive menu color css*/

  .menucss #menu-button {
    color: #fff; /*responsive main tab color*/
  }
  .menucss #menu-button:after {
    border-top: 2px solid #fff; /*responaive right icon color*/
    border-bottom: 2px solid #fff; /*responaive right icon color*/
  }
  .menucss #menu-button:before {
    background: #fff; /*responaive right icon color*/
  }
  .menucss #menu-button.menu-opened:after {
    background: #fff; /*responaive right icon color*/
  }
  .menucss #menu-button.menu-opened:before {
    background: #fff; /*responaive right icon color*/
  }
  .menucss .submenu-button {
  }
  .menucss .submenu-button.submenu-opened {
    background: black; /*responaive bg open*/
  }
  .menucss .submenu-button:after {
    background: #fff; /*responaive right icon color*/
  }
  .menucss .submenu-button.submenu-opened:after {
    background: #000; /*responaive right icon bg hover color*/
  }
  .menucss .submenu-button:before {
    background: #fff; /*responaive right icon color*/
  }
  /*End Responsive menu css*/
  @media screen and (max-width: 1020px) {
    .menucss > ul > li {
      float: inherit;
      background: no-repeat left center;
      margin-right: 0;
    }
    .menucss {
      float: inherit;
    }
    .menucss ul ul {
      position: relative;
    }
    .menucss ul ul li a {
      width: 100%;
    }
    .menucss ul ul ul {
      margin-left: 0%;
    }
    .menucss > ul > li > a {
      font-size: 16px;
      padding: 9px 17px;
      border-width: 0px 0px 1px;
      border-style: solid;
      border-color: black;
      height: 50px;
      line-height: 32px;
    }
    .menucss ul li ul ul li a {
      background-color: black;
    }
    .menucss > ul > li.has-sub > a::after {
      right: 10px;
      top: 16px;
    }
    .menucss > ul > li.has-sub > a::before {
      right: 10px;
      top: 22px;
    }
    .menucss ul ul li.has-sub > a:before {
      transform: rotate(-45deg);
    }
    .submenu-button {
      position: absolute;
      z-index: 9999;
      right: 0;
      top: 0;
      display: block;
      height: 33px;
      width: 46px;
      cursor: pointer;
      display: flex;
      place-items: center;
    }
  }
`;

export default MeneStyle