import React, { useEffect } from "react";
import styled from "styled-components";
import Typography from "../Typography";
interface Props {
  Title?: string;
  according?: boolean;
  des?: any;
}

const Faq = (props: Props) => {
  useEffect(() => {
    let controller = document.getElementsByClassName("accordingTitle");
    let tableData = document.getElementsByClassName("productDetailsTable");
    for (let i = 0; i < controller.length; i++) {
      tableData[i].classList.add("tablenone");
      tableData[0].classList.remove("tablenone");

      controller[i].classList.add("icon");
      controller[0].classList.remove("icon");

      controller[i].addEventListener("click", () => {
        for (let j = 0; j < tableData.length; j++) {
          tableData[j].classList.add("tablenone");
          tableData[i].classList.remove("tablenone");
          controller[j].classList.add("icon");
          controller[i].classList.remove("icon");
        }
      });
    }
  }, []);
  return (
    <StyleFaq>
      <div className="according">
        <Typography
          as="h5"
          _color="#2D3840"
          _fontSize={["16px", "18px"]}
          _fontWeight={[600, 600]}
          _lineHeight={["20px","30px"]}
          // _letterSpacing={["0.06em", "0.12em"]}
          className="accordingTitle faqTitle"
        >
          {props.Title}
        </Typography>
        {props.according && (
          <div
          className="productDetailsTable"
          dangerouslySetInnerHTML={{ __html: props.des }}
        />
        )}
      </div>
    </StyleFaq>
  );
};
export default Faq;

const StyleFaq = styled.div`
  .accordingTitle {
    cursor: pointer;
    /* padding: 0px 0px 15px; */
    position: relative;
    &:before {
      content: "";
      background: url(../images/plus.svg) no-repeat;
      position: absolute;
      right: 16px;
      top: 0px;
      width: 28px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &.icon {
      &:before {
        content: "";
        background: url(../images/minus.svg) no-repeat;
        position: absolute;
        right: 16px;
        top: 0px;
        width: 28px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .productDetailsTable{
    padding-top: 15px;
  }
  .according {
    border: 1px solid #d2dae0;
    /* border-radius: 16px; */
    background-color: #fff;
    margin-bottom: 5px;
    padding: 10px 20px;
    position: relative;
  }
  .according::before{
    position: absolute;
    /* background: url(/images/chevrons-chevrons-right.png) no-repeat; */
    width: 30px;
    height: 20px;
    top: 0px;
    left: 0px;
    content: "";
  }
  .faqTitle {
    margin: 0px;
  }
  .productDetailsTable {
    /* padding: 0 16px; */
    margin-bottom: 16px;
  }
  .tablenone {
    display: none;
  }
`;
