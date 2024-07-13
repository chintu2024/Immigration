import React, { useEffect, useRef, useState } from "react";
import theme from "styles/themeColor";
import { ImButton } from "../Button";
import MeneStyle from "./MenuStyle";
import Images from "../Images";
import styled from "styled-components";
import Submenu from "./submenu";
import Link from "next/link";

interface Props {
  category?: any;
}

const Menu = (props: Props) => {
  const showMega = [
    "showMega1", "showMega2", "showMega3", "showMega4", "showMega5",
    "showMega6", "showMega7", "showMega8", "showMega9", "showMega10"
  ];
  const [menutoggale , Setmenutoggale] = useState(false)
  // Ensure the response array is safely reversed
  const reversedCategories = props.category?.response.slice().reverse() || [];
  const radioButtonRef = useRef(null);
  const radioButton = radioButtonRef.current;
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
                          src={"/images/devices-call.svg"}
                          alt={"call"}
                          width={"24"}
                          height={"24"}
                        />
                        <a href="tel:+1604496-0735">+1(604) 496-0735</a>
                      </div>
                    </li>
                    <li>
                      <div className="call email">
                        <Images
                          src={"/images/messaging-mail.svg"}
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
                        src={"/images/logIn.svg"}
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
      <Menu2>
        <MeneStyle>
          <div className="menuBar">
            <div className="wrapper">
              <div className="logo">
                <Link href="https://elaarimmigration.in/">
                  <Images src={"/images/logo.svg"} alt={'logo'}></Images>
                </Link>
              </div>
              <input type="radio" name="slider" id="menu-btn" />
              <input type="radio" name="slider" id="close-btn" />
              <div className={menutoggale === true ? "nav-links menuslideOff" : "nav-links"}>
              <ul className="nav-ul ">
                <label htmlFor="close-btn" className="btn close-btn">
                  dd
                </label>
                {reversedCategories.map((item: any, index: any) => (
                  <li key={index} className={`${showMega[index]}`} onMouseOver={() => Setmenutoggale(false)}>
                    {item.navi === "true" &&
                    <>
                    <Link href={`../${item.category.toLowerCase().replace(/\s+/g, "-")}`} className="desktop-item">
                      {item.category}
                    </Link>
                    <input type="radio" ref={radioButtonRef} name="menubtn" id={`${showMega[index]}`} />
                    <label htmlFor={`${showMega[index]}`} className="mobile-item">
                      {item.category}
                    </label>
                    <Submenu id={item._id} index={index} setmenutoggale={Setmenutoggale} menutoggale={menutoggale}/>
                    </>}
                  </li>
                ))}
                <li>
                  <ImButton
                    as={"button"}
                    variant="primary"
                    btnWidth="203px"
                    themeColor={theme}
                    bdrRadius="0px"
                  >
                    FREE Evaluation{" "}
                    <img src="/images/arrows-arrow-up-right.svg" />
                  </ImButton>
                </li>
              </ul>
              </div>
              <label htmlFor="menu-btn" className="btn menu-btn" onClick={() => Setmenutoggale(false)}>
                dgjfgdjg
              </label>
            </div>
          </div>
        </MeneStyle>
      </Menu2>
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
