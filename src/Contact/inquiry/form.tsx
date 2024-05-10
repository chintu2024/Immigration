import React from "react";
import { TextArea, TextInput } from "src/Common/TextInput";
import Typography from "src/Common/Typography";
import styled from "styled-components";

interface Props {}

const Form = (props: Props) => {
  return (
    <FormStyle>
      <div className="row">
        <div className="col-md-12">
          <TextInput
            name="name"
            // value={""}
            type="text"
            label="Name *"
            variant="label"
            height="40px"
            // maxlength={dropValue.code !== "+91" ? "16" : "10"}
            // error={Boolean(touched.mobile && errors.mobile)}
            // disabled={dropValue.code !== "+91" ? false : true}
          />
        </div>
        <div className="col-md-6 mt-4">
          <TextInput
            name="name"
            // value={""}
            type="number"
            label="Mobile Number *"
            variant="label"
            height="40px"
            // maxlength={dropValue.code !== "+91" ? "16" : "10"}
            // error={Boolean(touched.mobile && errors.mobile)}
            // disabled={dropValue.code !== "+91" ? false : true}
          />
        </div>
        <div className="col-md-6 mt-4">
          <TextInput
            name="name"
            // value={""}
            type="email"
            label="Email *"
            variant="label"
            height="40px"
            // maxlength={dropValue.code !== "+91" ? "16" : "10"}
            // error={Boolean(touched.mobile && errors.mobile)}
            // disabled={dropValue.code !== "+91" ? false : true}
          />
        </div>
        <div className="col-md-6 mt-4">
          <select name="cars" id="cars" className="form-control">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="col-md-6 mt-4">
          <select name="cars" id="cars" className="form-control">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="col-md-12 mt-4 textarea">
          <TextArea variant={"label"} label={"Message"} />
        </div>
        <div className="col-md-12 mt-4">
          <input type="submit" value="Send Message" className="submitBtn" />
        </div>
      </div>
    </FormStyle>
  );
};

export default Form;

export const FormStyle = styled.div`
  .form-control {
    color: #5e7384;
    font-size: 14px;
    border: 0;
    padding: 0 16px;
    display: block;
    width: 100%;
    height: 56px;
    background-color: transparent;
    -webkit-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
    transition: 0.2s ease all;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif !important;
    border-radius: 8px;
    border: 1px solid #d2dae0;
    background: #fff;
  }

  .submitBtn {
    background-color: #000000;
    color: #fff;
    font-size: 20px;
    /* line-height: 28; */
    width: 100%;
    height: 55px;
  }
`;
