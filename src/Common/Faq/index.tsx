import React, { useEffect } from "react";
import styled from "styled-components";
import Typography from "../Typography";
interface Props {
  Title?: string;
  according?: boolean;
  data?: any;
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
          _fontSize={["16px", "16px"]}
          _fontWeight={[600, 600]}
          // _letterSpacing={["0.06em", "0.12em"]}
          className="accordingTitle faqTitle"
        >
          {props.Title}
        </Typography>
        {props.according && (
          <div className="productDetailsTable">
            <Typography
              as="p"
              _color="#2D3840"
              _fontSize={["14px", "14px"]}
              _fontWeight={[400, 400]}
              // _letterSpacing={["0.06em", "0.12em"]}
              className="faqP"
            >
              {props.data}
            </Typography>
          </div>
        )}
      </div>
    </StyleFaq>
  );
};
export default Faq;

const StyleFaq = styled.div`
  .accordingTitle {
    cursor: pointer;
    padding: 0px 0px 15px;
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
  .according {
    border-bottom: 1px solid #d2dae0;
    /* border-radius: 16px; */
    margin-bottom: 20px;
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
