import styled from "styled-components";

const InpWrapper = styled.div`
  position: relative;
  border: 1px solid #d2dae0;
  border-radius: 8px;

  /* margin-bottom: 10p x; */

  background: #fff;
  &.textarea {
    height: 110px;
  }
  input,
  textarea {
    color: #5e7384;
    font-size: 14px;
    border: 0;
    padding: 0 16px;
    display: block;
    width: 100%;
    height: 56px;
    background-color: transparent;
    transition: 0.2s ease all;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif !important;
    border-radius: 8px;
    &:focus {
      outline: 0;
    }
    &:not(.placeholder):focus {
      padding-top: 14px;
    }
    &:focus ~ label {
      top: 7px;
      font-size: 12px;
      color: #5e7384;
    }
  }
  textarea {
    height: 110px;
    padding-top: 14px;
    resize: none;
    font-family: "Roboto";
    line-height: 20px;
    &:not(.placeholder):focus {
      padding-top: 28px;
    }
  }
  &.open textarea {
    padding-top: 28px;
  }
  label {
    color: #5e7384;
    font-size: 14px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 16px;
    top: 28px;
    height: 20px;
    line-height: 3px;
    transition: 0.2s ease all;
  }
  &.open {
    label {
      top: 7px;
      font-size: 12px;
      color: #5e7384;
    }
    input:focus ~ label {
      color: #5e7384;
    }
    input:not(.placeholder) {
      padding-top: 14px;
    }
  }
  &.error {
    background-color: rgba(249, 216, 219, 0.4);
    border-color: #e03c4c;
    label,
    input,
    input:focus ~ label {
      color: #ec606e;
    }
  }
  &.disabled {
    background-color: rgba(203, 213, 225, 0.4);
    border-color: #cbd5e1;
    label,
    input,
    input:focus ~ label {
      color: #627085;
    }
  }
  &.lefticon input {
    padding-left: 56px;
  }
  &.lefticon {
    position: relative;
    label {
      left: 44px;
    }
  }
  &.righticon input {
    padding-right: 56px;
  }
  &.righticon {
    position: relative;
    label {
      right: 56px;
    }
  }
  .inpIconrgt,
  .inpIconlft {
    position: absolute;
    right: 15px;
    top: 50%;
    height: 18px;
    width: 18px;
    margin-top: -9px;
    text-align: center;
  }
  .inpIconlft {
    right: auto;
    left: 16px;
  }
`;

export default InpWrapper;
