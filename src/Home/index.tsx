import React from "react";
import styled from "styled-components";
import Banner from "./Banner";
import ImmigrationIndex from "./ImmigrationCompany";
import MainAbout from "./MainAbout";
import CheckEligibilityIndex from "./CheckEligibility";
import ProcessIndex from "./Process";
import LatestUpdateIndex from "./LatestUpdate";
import Inspiration from "./Inspiration";
interface Props {
  data?: any;
}

const Home = (props: Props) => {
  return (
    <StyleHome>
      <Banner />
      <ImmigrationIndex data={props.data} />
      <MainAbout />
      <CheckEligibilityIndex />
      <ProcessIndex />
      <LatestUpdateIndex />
      <Inspiration footerdata={props.data.response.footer} />
    </StyleHome>
  );
};
export default Home;

export const StyleHome = styled.section``;
