import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

interface SlideProps {
  left?: any;
  right?: any;
  children: ReactNode;
}

const Slide = (props: SlideProps) => {
  return (
    <Wrapper left={props.left} right={props.right}>
      {props.children}
    </Wrapper>
  );
};
const Wrapper = styled.div<{ left: any; right: any }>`
  ${(props) =>
    props.left &&
    css`
      animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      @keyframes slide-left {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(0);
        }
      }
    `}

  ${(props) =>
    props.right &&
    css`
      animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      @keyframes slide-right {
        0% {
          transform: translateX(100%);
        }
        100% {
          transform: translateX(0);
        }
      }
    `}
`;
export default Slide;
