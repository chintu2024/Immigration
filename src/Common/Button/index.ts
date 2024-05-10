import styled, { css } from "styled-components";

interface Button {
  variant?: any; // primary, primaryOutline, secondary, secondaryOutline ,primaryWhite, primaryWhiteOutline
  size?: any; // large, medium, small, extraSmall
  btnWidth?: any;
  fontWeight?: any;
  themeColor?: any;
  bdrRadius?: any;
  fontsize?: any;
  height?: any;
}

const ImButton = styled.button<Button>`
  border: 0;
  width: ${(props) => (props.btnWidth ? props.btnWidth : "auto")};
  vertical-align: center;
  cursor: pointer;
  display: flex;
  font-size: ${(props) => (props.fontsize ? props.fontsize : "16px")};
  justify-content: center;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "600")};
  align-items: center;
  border-radius: ${(props) => (props.bdrRadius ? props.bdrRadius : "4px")};
  height: ${(props) => (props.height ? props.height : "50px")};
  &:hover {
    opacity: 0.9;
  }
  ${(props) =>
    props.variant === "primary" &&
    css`
      border: 0px solid ${props.themeColor?.colors?.main};
      color: ${props.themeColor?.colors?.white};
      background-color: ${props.themeColor?.colors?.black};
    `}

  ${(props) =>
    props.variant === "primaryOutline" &&
    css`
      border: 1px solid ${props.themeColor?.colors?.brand_primary?.main};
      color: ${props.themeColor?.colors?.brand_primary?.main};
      background-color: ${props.themeColor?.colors?.white};
    `}

    ${(props) =>
    props.size === "large" &&
    css`
      height: 60px;
      padding: 16px 25px;
      font-size: 20px;
      line-height: 32px;
    `}

  ${(props) =>
    props.size === "medium" &&
    css`
      height: 48px;
      padding: 10px 24px;
      font-size: 16px;
      line-height: 26px;
    `}


  ${(props) =>
    props.size === "small" &&
    css`
      height: 39px;
      padding: 10px 16px;
      font-size: 14px;
      font-weight: 600;
      line-height: 28px;
    `}

    ${(props) =>
    props.size === "extraSmall" &&
    css`
      height: 30px;
      padding: 5px 12px;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
    `}
`;

export { ImButton };
