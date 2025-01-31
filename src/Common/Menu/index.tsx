import React, { useEffect, useRef, useState } from "react";
import theme from "styles/themeColor";
import { ImButton } from "../Button";
import MeneStyle from "./MenuStyle";
import Images from "../Images";
import styled from "styled-components";
import Submenu from "./submenu";
import Link from "next/link";
import SubMenu2 from "./SubMenu2";

interface Props {
  category?: any;
}

const Menu = (props: Props) => {
  const showMega = [
    "showMega1", "showMega2", "showMega3", "showMega4", "showMega5",
    "showMega6", "showMega7", "showMega8", "showMega9", "showMega10"
  ];

  const [menutoggale, Setmenutoggale] = useState(false);
  const [link, Setlink] = useState<string | null>(null); // Initialize link state properly
  const reversedCategories = props.category?.data.slice() || [];
  const radioButtonRef = useRef<HTMLInputElement>(null);
  const urlSl = "/"
  // const [data, setData] = useState<any | null>(null); // Initialize data state properly
  const categoryId: any = link;
// console.log("reversedCategories",reversedCategories)

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
                <ul className="nav-ul">
                  <label htmlFor="close-btn" className="btn close-btn">
                  <img src="images/menuclose.png" alt="" />
                  </label>
                  {reversedCategories.map((item: any, index: any) =>{
                    return (
                    <li key={index} className={`${showMega[index]}`} onMouseOver={() => Setmenutoggale(false)}>
                      {item.navi != false &&
                        <>
                          {/* <Link href={`../${item.slug.toLowerCase().replace(/\s+/g, "-")}`} onClick={() => Setlink(item.id)} className="desktop-item"> */}
                          <Link href={`../${item.slug}`} onClick={() => Setlink(item.id)} className="desktop-item">
                            {item.name}
                          </Link>
                          <input type="radio" ref={radioButtonRef} name="menubtn" id={`${showMega[index]}`} />
                          <label htmlFor={`${showMega[index]}`} className="mobile-item">
                            {item.name}
                          </label>
                          {/* <Submenu id={item.id} index={index} setmenutoggale={Setmenutoggale} menutoggale={menutoggale} /> */}
                          <SubMenu2 id={item.id} index={index} setmenutoggale={Setmenutoggale} menutoggale={menutoggale} />
                        </>}
                    </li>
                  )})}
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
                <img src="images/menuopen.png" alt="" />
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
