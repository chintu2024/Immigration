import React from "react";
import Images from "src/Common/Images";
import styled from "styled-components";

interface Props {}

const ClientLogo = (props: Props) => {
  return (
    <ClientLogoStyle>
      <Images src={"images/about/logo1.png"} alt={"logo"}></Images>
      <Images src={"images/about/logo2.png"} alt={"logo"}></Images>
      <Images src={"images/about/logo3.png"} alt={"logo"}></Images>
      <Images src={"images/about/logo4.png"} alt={"logo"}></Images>
    </ClientLogoStyle>
  );
};

export default ClientLogo;
export const ClientLogoStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
