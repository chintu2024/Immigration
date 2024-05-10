import React from "react";
import Images from "src/Common/Images";
import Typography from "src/Common/Typography";
import styled from "styled-components";

interface Props {}

const Address = (props: Props) => {
  return (
    <AddressStyle>
      <Images
        src={"images/contact/address.svg"}
        alt={"location"}
        width={60}
        height={60}
      ></Images>
      <Typography
        as="h2"
        _color="#0D0C0C"
        _fontSize={["50px", "22px"]}
        _fontWeight={[700, 700]}
        _lineHeight={["35px", "54px"]}
        className=""
      >
        Metro Vancouver Area
      </Typography>
      <Typography
        as="p"
        _color="#0D0C0C"
        _fontSize={["50px", "18px"]}
        _fontWeight={[400, 400]}
        _lineHeight={["35px", "24px"]}
        className=""
      >
        #205-14980 104 Ave, Surrey, BC V3R 1M9
      </Typography>
    </AddressStyle>
  );
};

export default Address;

export const AddressStyle = styled.div`
  margin-top: 50px;
`;
