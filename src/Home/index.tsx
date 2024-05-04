import React from "react";
import styled from "styled-components";
import Banner from "./Banner";
import ImmigrationIndex from "./ImmigrationCompany";
import MainAbout from "./MainAbout";
import CheckEligibilityIndex from "./CheckEligibility";
import ProcessIndex from "./Process";
import LatestUpdateIndex from "./LatestUpdate";
import Inspiration from "./Inspiration";
interface Props {};

const Home = (props: Props) => {
  return (
    <StyleHome>
      <Banner/>
      <ImmigrationIndex/>
      <MainAbout/>
      <CheckEligibilityIndex/>
      <ProcessIndex/>
      <LatestUpdateIndex/>
      <Inspiration/>
    </StyleHome>
  );
};
export default Home;

export const StyleHome = styled.section`

`;

