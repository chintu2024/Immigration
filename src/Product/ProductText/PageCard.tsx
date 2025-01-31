import Link from "next/link";
import React from "react";
import Typography from "src/Common/Typography";
import styled from "styled-components";
import theme from "styles/themeColor";

interface Props {
  data?: any;
}

const PageCard = (props: Props) => {
  // console.log("pageCardData", props.data);
  return (
    <StylePagecard>
        {props.data?.PcardTitle &&  <div className="mainDivCard" id={`maincar${props.data?.category_id}`}>
        <Typography
          as="h2"
          _color="#fff"
          _fontSize={["20px", "32px"]}
          _fontWeight={[600, 600]}
          _lineHeight={["36px", "33px"]}
          className="mainTitle mb-2 mt-3"
        >
          <img src={`${process.env.NEXT_PUBLIC_Images_URL}/public/images/${props.data?.category_image}`}></img> {props.data?.PcardTitle}
        </Typography>
        <Typography
          as="div"
          _color="#fff"
          _fontSize={["20px", "22px"]}
          _fontWeight={[400, 400]}
          _lineHeight={["36px", "36px"]}
          className="mainTitle my-3"
        >
           
          <div dangerouslySetInnerHTML={{ __html: props.data?.pageCardDescription }} />
          </Typography>
        <div className="mainCatUl">
          <div className="row mainRow">
          {props.data.pageCard
            .map((item: any, index: any) => {
              return (
                <div className="col-md-4" key={index}>
                <ul>
                <li>
                <Link href={item.url || "javascript.void(0)"}>{item.keyword}</Link>
              </li>
              </ul>
              </div>
                );
            })}
          </div>
        </div>
        <div className="InfoSection_shadow"></div>
      </div>
      }
    </StylePagecard>
  );
};

export default PageCard;

export const StylePagecard = styled.div`
 #maincar17{
    background-color: ${theme.colors.back1};
  }
  #maincar18{
    background-color: ${theme.colors.back2};
  }
  #maincar19{
    background-color: ${theme.colors.back3};
  }
  #maincar21{
    background-color: ${theme.colors.back4};
  }
  #maincar20{
    background-color: ${theme.colors.back5};
  }
  #maincar22{
    background-color: ${theme.colors.back6};
  }
  #maincar23{
    background-color: ${theme.colors.back7};
  }
  .mainDivCard {
    background: #D52B1E;
    position: relative;
    overflow: hidden;
    z-index: 10;
    margin-bottom: 30px;
    margin-top: 60px;
    border-radius: 22px;
    padding: 40px 60px;
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
    .mainTitle {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .mainCatUl {
      ul {
        padding-left: 0px;
        list-style: none;
        padding-top: 10px;
        margin: 0px;
        li {
          position: relative;
          padding-left: 31px;
          padding-bottom: 12px;
          border-bottom: 1px solid #fff;
          :after {
            content: "";
            position: absolute;
            background-image: url(/images/mainAboutArrow.svg);
            background-repeat: no-repeat;
            left: 0px;
            width: 20px;
            height: 20px;
            top: 5px;
            background-size: 15px;
          }
          a {
            color: #fff;
            display: block;
            font-size: 18px;
            line-height: 22px;
            -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          display: -webkit-box;
          white-space: normal;
          overflow: hidden;
            :hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
  .mainRow{
    margin: 40px 0px;
  }

`;
