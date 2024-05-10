import React from "react";
import theme from "styles/themeColor";
import { ImButton } from "../Button";
import MeneStyle from "./MenuStyle";
import Images from "../Images";
import styled from "styled-components";

interface Props {}

const Menu = (props: Props) => {
  return (
    <>
      <MeneStyle>
        <div className="menubarColor">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                {/* <Images src={'images/logo.svg'} alt={'logo'}></Images> */}
              </div>
              <div className="col-md-8">
                <div className="contactDetails">
                  <ul>
                    <li>
                      <div className="call">
                        <Images
                          src={"images/devices-call.svg"}
                          alt={"call"}
                          width={"24"}
                          height={"24"}
                        />
                        <a href="tel:+1604496-0735">+1(604) 496-0735</a>
                      </div>
                    </li>
                    <li>
                      <div className="call">
                        <Images
                          src={"images/messaging-mail.svg"}
                          alt={"email"}
                          width={"24"}
                          height={"24"}
                        />
                        <a href="mailto:info@elaarimmigration.ca">
                          info@elaarimmigration.ca
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="line"></div>
                    </li>
                    <li className="logInsec">
                      <Images
                        src={"images/logIn.svg"}
                        alt={"log in"}
                        width={24}
                        height={24}
                      />
                      &nbsp;
                      <a href="#">Login</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MeneStyle>
      <MeneStyle>
       <div className="menuBar">
        <div className="wrapper">
      <div className="logo"><a href="#">
        <Images src={"images/logo.svg"} alt={'logo'}></Images>
        </a></div>
      <input type="radio" name="slider" id="menu-btn"/>
      <input type="radio" name="slider" id="close-btn"/>
      <ul className="nav-links">
        <label htmlFor="close-btn" className="btn close-btn">dd</label>
        <li>
          <a href="#" className="desktop-item immigration">Immigration</a>
          <input type="radio" name="menubtn" id="showMega"/>
          <label htmlFor="showMega" className="mobile-item">Mega Menu</label>
          <div className="mega-box">
            <div className="content">
              <div className="col-md-3">
                  <p>ddhs</p>
              </div>
              <div className="col-md-3">
                <header>Design Services</header>
                <ul className="mega-links">
                  <li><a href="#">Graphics</a></li>
                  <li><a href="#">Vectors</a></li>
                  <li><a href="#">Business cards</a></li>
                  <li><a href="#">Custom logo</a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <header>Email Services</header>
                <ul className="mega-links">
                  <li><a href="#">Personal Email</a></li>
                  <li><a href="#">Business Email</a></li>
                  <li><a href="#">Mobile Email</a></li>
                  <li><a href="#">Web Marketing</a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <header>Security services</header>
                <ul className="mega-links">
                  <li><a href="#">Site Seal</a></li>
                  <li><a href="#">VPS Hosting</a></li>
                  <li><a href="#">Privacy Seal</a></li>
                  <li><a href="#">Website design</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li className="business">
          <a href="#" className="desktop-item">Business</a>
          <input type="radio" name="menubtn" id="showMega2"/>
          <label htmlFor="showMega2" className="mobile-item">Mega Menu2</label>
          <div className="mega-box">
            <div className="content">
              <div className="col-md-3">
                  <p>ddhs</p>
              </div>
              <div className="col-md-3">
                <header>Design Services</header>
                <ul className="mega-links">
                  <li><a href="#">Graphics</a></li>
                  <li><a href="#">Vectors</a></li>
                  <li><a href="#">Business cards</a></li>
                  <li><a href="#">Custom logo</a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <header>Email Services</header>
                <ul className="mega-links">
                  <li><a href="#">Personal Email</a></li>
                  <li><a href="#">Business Email</a></li>
                  <li><a href="#">Mobile Email</a></li>
                  <li><a href="#">Web Marketing</a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <header>Security services</header>
                <ul className="mega-links">
                  <li><a href="#">Site Seal</a></li>
                  <li><a href="#">VPS Hosting</a></li>
                  <li><a href="#">Privacy Seal</a></li>
                  <li><a href="#">Website design</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li><a href="#">work</a></li>
        <li><a href="#">Visit</a></li>
        <li><a href="#">study</a></li>
        <li>
        <ImButton
                  as={"button"}
                  variant="primary"
                  btnWidth="203px"
                  themeColor={theme}
                  bdrRadius="0px"
                >
                  FREE Evaluation <img src="images/arrows-arrow-up-right.svg" />
                </ImButton>
        </li>
      </ul>
      <label htmlFor="menu-btn" className="btn menu-btn">dgjfgdjg</label>
    </div>
        </div>
      </MeneStyle>
    </>
  );
};

export default Menu;

export const Menu2 = styled.section`
  position: sticky;
  top: -1px;
  z-index: 100000;
  background-color: #ffff;
`;
