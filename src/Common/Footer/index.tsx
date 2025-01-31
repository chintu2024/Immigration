import React, { useEffect, useState } from "react";
import Images from "../Images";
import Typography from "../Typography";
import StyleFooter from "./StyleFooter";
import SocialMedia from "./SocialMedia";

interface Props {}

const Footer = (props: Props) => {
  const [socialMedia, setSocialMedia] = useState(null);
  useEffect(() => {
    let titleBtn: HTMLCollectionOf<Element> =
      document.getElementsByClassName("titleBtn");
    let footerUl: HTMLCollectionOf<Element> =
      document.getElementsByClassName("footerUl");

    for (let i = 0; i < titleBtn.length; i++) {
      (footerUl[i] as HTMLElement).classList.add("phoneNone");
      (footerUl[0] as HTMLElement).classList.remove("phoneNone");

      titleBtn[i].addEventListener("click", () => {
        for (let j = 0; j < footerUl.length; j++) {
          (footerUl[j] as HTMLElement).classList.add("phoneNone");
          (footerUl[i] as HTMLElement).classList.remove("phoneNone");
          (titleBtn[j] as HTMLElement).classList.remove("active");
          (titleBtn[i] as HTMLElement).classList.add("active");
        }
      });
    }
  }, []);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/social-media`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const fetchedData = await res.json();

        setSocialMedia(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } 
    };

    fetchData();
  }, []);
  return (
    <StyleFooter>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Typography
              as="h3"
              _color="#fff"
              _fontSize={["20px", "22px"]}
              _fontWeight={[600, 600]}
              _lineHeight={["28px", "28px"]}
              className="mb-3 titleBtn active"
            >
              Trending Programs
            </Typography>
            <ul className="footerUl">
              <li>
                <a href="javascript:void(0)">
                  Popular Course Program in Canada
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">Permanent Resident Visa (PRS)</a>
              </li>
              <li>
                <a href="javascript:void(0)">Foreign entrepreneurs Visa</a>
              </li>
              <li>
                <a href="javascript:void(0)">Permanent Resident Visa (PRS)</a>
              </li>
              <li>
                <a href="javascript:void(0)">Post graduation work permits</a>
              </li>
              <li>
                <a href="javascript:void(0)">Employer Specific Work Visa</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <Typography
              as="h3"
              _color="#fff"
              _fontSize={["20px", "22px"]}
              _fontWeight={[600, 600]}
              _lineHeight={["28px", "28px"]}
              className="mb-3 titleBtn"
            >
              Immigration
            </Typography>
            <ul className="footerUl">
              <li>
                <a href="javascript:void(0)">Express Entry</a>
              </li>
              <li>
                <a href="javascript:void(0)">BC PNP Program</a>
              </li>
              <li>
                <a href="javascript:void(0)">Provincial Nominee Program</a>
              </li>
              <li>
                <a href="javascript:void(0)">Business Immigration</a>
              </li>
              <li>
                <a href="javascript:void(0)">Caregiver Programs</a>
              </li>
              <li>
                <a href="javascript:void(0)">Atlantic Immigration</a>
              </li>
              <li>
                <a href="javascript:void(0)">Quebec Immigration</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <Typography
              as="h3"
              _color="#fff"
              _fontSize={["20px", "22px"]}
              _fontWeight={[600, 600]}
              _lineHeight={["28px", "28px"]}
              className="mb-3 titleBtn"
            >
              Visa
            </Typography>
            <ul className="footerUl">
              <li>
                <a href="javascript:void(0)">Express Entry</a>
              </li>
              <li>
                <a href="javascript:void(0)">BC PNP Program</a>
              </li>
              <li>
                <a href="javascript:void(0)">Provincial Nominee Program</a>
              </li>
            </ul>
            <Typography
              as="h3"
              _color="#fff"
              _fontSize={["20px", "22px"]}
              _fontWeight={[600, 600]}
              _lineHeight={["28px", "28px"]}
              className="mb-3 titleBtn"
            >
              Study
            </Typography>
            <ul className="footerUl">
              <li>
                <a href="javascript:void(0)">Express Entry</a>
              </li>
              <li>
                <a href="javascript:void(0)">BC PNP Program</a>
              </li>
              <li>
                <a href="javascript:void(0)">Provincial Nominee Program</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <Typography
              as="h3"
              _color="#fff"
              _fontSize={["16px", "16px"]}
              _fontWeight={[600, 600]}
              _lineHeight={["28px", "28px"]}
              className="mb-3 titleBtn"
            >
              Our Cities
            </Typography>
            <ul className="footerUl">
              <li>Greater Vancouver</li>
              <li>#205-14980 104 Ave, Surrey, BC V3R 1M9</li>
            </ul>
            <Typography
              as="h3"
              _color="#fff"
              _fontSize={["16px", "16px"]}
              _fontWeight={[600, 600]}
              _lineHeight={["28px", "28px"]}
              className="mb-3 titleBtn"
            >
              Kamloops
            </Typography>
            <ul className="footerUl">
              <li>#1-237 6th Avenue, Kamloops, BC V2C 2B3</li>
            </ul>
            <Typography
              as="h3"
              _color="#fff"
              _fontSize={["16px", "16px"]}
              _fontWeight={[600, 600]}
              _lineHeight={["28px", "28px"]}
              className="mb-3 titleBtn"
            >
              Yukon
            </Typography>
            <ul className="footerUl">
              <li>320 Keno Way, Whitehorse, YT Y1A 0S8</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Typography
              as="h3"
              _color="#fff"
              _fontSize={["16px", "16px"]}
              _fontWeight={[400, 400]}
              _lineHeight={["28px", "28px"]}
              className="pt-4"
            >
              © 2024 Elaar Immigration Consulting Inc. All rights reserved
            </Typography>
          </div>
          {socialMedia && 
          <SocialMedia socialink={socialMedia}/>}
        </div>
      </div>
    </StyleFooter>
  );
};

export default Footer;
