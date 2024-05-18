import React from "react";
import Typography from "src/Common/Typography";
import styled from "styled-components";

interface Props {
  number?: any;
  title?: any;
}

const NumberIndex = (props: Props) => {
  return (
    <NumberStyle>
      <div className="numbeDiv">
        <Typography
          as="h2"
          _color="#000"
          _fontSize={["30px", "42px"]}
          _fontWeight={[800, 800]}
          _lineHeight={["40px", "35px"]}
          className=""
        >
          {props.number}
        </Typography>
        <Typography
          as="p"
          _color="#000"
          _fontSize={["14px", "18px"]}
          _fontWeight={[400, 400]}
          _lineHeight={["40px", "40px"]}
          className=""
        >
          {props.title}
        </Typography>
      </div>
    </NumberStyle>
  );
};

export default NumberIndex;

export const NumberStyle = styled.div`
  .numbeDiv {
    background: url(images/about/year.svg) no-repeat;
    background-size: 100%;
    height: 90px;
    margin-top: 50px;
    padding: 24px 0px 10px 28px;
  }
`;
