import React, { ReactNode } from "react";
import styled, { keyframes } from "styled-components";

interface Props {
  duration: any;
  delay: any;
  children: ReactNode;
}
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const FadeIn = (props: Props) => {
  return (
    <Wrapper
    // style={{
    //   animationDuration: props.duration + "ms",
    //   animationDelay: props.delay + "ms",
    // }}
  >
    {props.children}
  </Wrapper>
  );
};
const Wrapper = styled.div`
  @media only screen and (max-width: 760px){
    animation-name: ${fadeIn};
    animation-fill-mode: backwards;
  }
`;
export default FadeIn;
