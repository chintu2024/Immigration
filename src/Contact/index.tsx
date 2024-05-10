import React from "react";
import ContactStyle from "./ContactStyle";
import LayOut from "src/Common/Layout";
import Address from "./address";
import Inquiry from "./inquiry";
import ContactBanner from "src/Common/PagesBanner/Banner";

interface Props {}

const ContactPage = (props: Props) => {
  return (
    <LayOut>
      <ContactStyle>
        <ContactBanner
          title={"Contact us for inquiries"}
          dis={"Get our all info and also can message us directly from here"}
          breadcrumb={" Contact Us"}
        />
        <section>
          <div className="container">
            <div className="row">
              {[...Array(3)].map((item, index) => (
                <div className="col-md-3 mx-auto text-center" key={index}>
                  <Address />
                </div>
              ))}
            </div>
          </div>
        </section>
        <Inquiry />
      </ContactStyle>
    </LayOut>
  );
};

export default ContactPage;
