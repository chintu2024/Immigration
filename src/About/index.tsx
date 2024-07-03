import React from "react";
import ContactBanner from "src/Common/PagesBanner/Banner";
import LayOut from "src/Common/Layout";
import Inspiration from "src/Home/Inspiration";
import AboutText from "./AboutText";
import NumberIndex from "./Number";
import { numberData } from "./Number/NumberData";
import Services from "./Services";
import OnlineText from "./OnlineText";
import ImmigrationText from "./ImmigrationText";
import Typography from "src/Common/Typography";
import ClientLogo from "./ClientLogo";

interface Props {}

const AboutIndex = (props: Props) => {
  return (
    <LayOut>
      <ContactBanner
        title={"We’r top rated company"}
        dis={
          "Our mission is to empower every family to navigate the immigration system more confidently, rapidly, and affordably."
        }
        breadcrumb={"About us"}
      />
      <AboutText />
      {numberData && (
        <section>
          <div className="container">
            <div className="row">
              {numberData.map((item, index) => (
                <div className="col-md-3" key={index}>
                  <NumberIndex number={item.number} title={item.title} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Services />
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <OnlineText />
            </div>
            <div className="col-md-6">
              <ImmigrationText />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Typography
                as="h2"
                _color="#082F4A"
                _fontSize={["50px", "16px"]}
                _fontWeight={[400, 400]}
                _lineHeight={["35px", "30px"]}
                className=""
              >
                We are helping 1000s Indian to achieve their dream of living,
                working, or studying in the Canada.
              </Typography>
            </div>
            <div className="col-md-7 offset-md-1">
              <ClientLogo />
            </div>
          </div>
        </div>
      </section>
      <Inspiration/> 
    </LayOut>
  );
};

export default AboutIndex;
