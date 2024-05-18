import React from "react";
import styled from "styled-components";

interface SkeletonProps {
  sHeight?: string;
  sWidth?: string;
  className?: string;
  children?: React.ReactNode;
}

const Skeleton: React.FC<SkeletonProps> = ({ sHeight, sWidth, className, children }) => {
  return (
    <SkeletonStyle sHeight={sHeight} sWidth={sWidth} className={className}>
      <div className="react-loading-skeleton">{children}</div>
    </SkeletonStyle>
  );
};

export default Skeleton;

const SkeletonStyle = styled.div<SkeletonProps>`
  @keyframes react-loading-skeleton {
    to {
      transform: translateX(100%);
    }
  }
  .react-loading-skeleton {
    --base-color: #ebebeb;
    --highlight-color: #f5f5f5;
    --animation-duration: 1.5s;
    --animation-direction: normal;
    --pseudo-element-display: block;
    background-color: var(--base-color);
    width: 100%;
    border-radius: 0.25rem;
    display: block;
    line-height: 1;
    position: relative;
    overflow: hidden;
    z-index: 1;
    min-height: 4px;
    font-size: 1px;
    height: ${(props) => (props.sHeight ? props.sHeight : "auto")};
    width: ${(props) => (props.sWidth ? props.sWidth : "auto")};
  }
  .react-loading-skeleton:after {
    content: " ";
    display: var(--pseudo-element-display);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-repeat: no-repeat;
    background-image: linear-gradient(90deg, var(--base-color), var(--highlight-color), var(--base-color));
    transform: translateX(-100%);
    animation-name: react-loading-skeleton;
    animation-direction: var(--animation-direction);
    animation-duration: var(--animation-duration);
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }
`;
