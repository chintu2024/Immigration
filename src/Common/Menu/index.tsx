import React from "react";
import theme from "styles/themeColor";
import { ImButton } from "../Button";
import Images from "../Images";
import MeneStyle from "./MenuStyle";

interface Props {}

const Menu = (props: Props) => {
  return (
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
                    ></Images>
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
                    ></Images>
                    <a href="mailto:info@elaarimmigration.ca">
                      info@elaarimmigration.ca
                    </a>
                  </div>
                </li>
                <li>
                  <div className="line"></div>
                </li>
                <li className="logInsec">
                  <Images src={"images/logIn.svg"} alt={"log in"} width={24} height={24}></Images>&nbsp;
                  <a href="#">
                      Login
                    </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="menuBar">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
               {/* <Images src={'images/logo.svg'} alt={'logo'}></Images> */}
            </div>
            <div className="col-md-9">
              <div className="menuStyle">
                <div className="menucss">
                  <ul className="first-ul">
                    <li>
                      <a href={"javascript:void(0)"}>VISIT</a>
                    </li>
                    <li>
                      <a href={"javascript:void(0)"}>STUDY</a>
                    </li>
                    <li className="active has-sub">
                      <span className="submenu-button"></span>
                      <a href={"javascript:void(0)"}>WORK</a>
                      <ul>
                        <li className="has-sub">
                          <span className="submenu-button"></span>
                          <a href={"javascript:void(0)"}>product</a>
                          <ul id="myDiv">
                            <li>
                              <span className="submenu-button"></span>
                              <a href={"javascript:void(0)"}>product</a>
                            </li>
                          </ul>
                        </li>
                        <li className="has-sub">
                          <a href={"javascript:void(0)"}>product2</a>
                          <ul id="myDiv">
                            <li>
                              <a href={"javascript:void(0)"}>product2</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="active has-sub">
                      <span className="submenu-button"></span>
                      <a href={"javascript:void(0)"}>IMMIGRATION</a>
                      <ul>
                        <li className="has-sub">
                          <span className="submenu-button"></span>
                          <a href={"javascript:void(0)"}>page</a>
                          <ul id="myDiv">
                            <li>
                              <a href={"javascript:void(0)"}>page 2</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">BUSINESS</a>
                    </li>
                  </ul>
                </div>
                <ImButton as={"button"} variant="primary" btnWidth="203px" themeColor={theme} bdrRadius="0px">FREE Evaluation <img src="images/arrows-arrow-up-right.svg"/></ImButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MeneStyle>
  );
};

export default Menu;
