import React from "react";
import Images from "src/Common/Images";
import styled from "styled-components";
import { onlineData } from "./onlineData";

interface Props {}

const OnlineText = (props: Props) => {
  return (
    <OnlineTextStyle>
      <div className="onlineImages">
        <Images
          src={"images/about/a1.png"}
          alt={"about"}
          width={"100%"}
        ></Images>
        <div className="onlineText">
          <ul>
            {onlineData.map((item, index) => (
              <li key={index}>
                <img src={item.images} alt="images" width={30} height={30} />
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </OnlineTextStyle>
  );
};

export default OnlineText;

export const OnlineTextStyle = styled.div`
  .onlineImages {
    border-radius: 22px;
    position: relative;
    padding-right: 18px;
    img {
      border-radius: 22px;
      vertical-align: middle;
      margin-right: 10px;
    }
  }
  .onlineText {
    ul {
      list-style: none;
      position: absolute;
      bottom: 20px;
      li {
        background: #fff;
        padding: 4px 15px;
        margin: 0px;
        display: inline-block;
        align-items: center;
        gap: 10px;
        border-radius: 25px;
        margin-top: 10px;
      }
    }
  }
`;
