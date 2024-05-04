import React from "react";
import InspirationStyle from "./InspirationStyle";
import Typography from "src/Common/Typography";
import Images from "src/Common/Images";
import VideoIndex from "./Video";

interface Props {}

const Inspiration = (props: Props) => {
  return (
    <InspirationStyle>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Typography
              as="h2"
              _color="#28003B"
              _fontSize={["14px", "32px"]}
              _fontWeight={[600, 600]}
              _lineHeight={["14px", "24px"]}
              className="title"
            >
              Looking for  an Inspiration?
              <Images
                src={"images/logotick.png"}
                alt={"images"}
                width={114}
                height={18}
              ></Images>
            </Typography>
            <Typography
              as="p"
              _color="#000"
              _fontSize={["14px", "16px"]}
              _fontWeight={[400, 400]}
              _lineHeight={["14px", "30px"]}
              className="mt-3"
            >
              Check these testimonials from esteemed members of Elaar family  to
              know how we helped them get a Visa
            </Typography>
          </div>
          {[...Array(3)].map((item, index) => (
            <div className="col-md-4" key={index}>
              <VideoIndex />
            </div>
          ))}
          <div className="col-md-12">
            <Typography
              as="h3"
              _color="#28003B"
              _fontSize={["14px", "32px"]}
              _fontWeight={[600, 600]}
              _lineHeight={["35px", "44px"]}
              className="my-4"
            >
              India's No.1 Immigration & Study Visa Consultant
            </Typography>
            <Typography
              as="h3"
              _color="#28003B"
              _fontSize={["14px", "16px"]}
              _fontWeight={[400, 400]}
              _lineHeight={["35px", "30px"]}
              className=""
            >
              Your immigration journey is special, and our aim is to simplify it
              as much as possible for you. Drawing from our personal experiences
              of immigrating to Canada, we understand the intricacies involved.
              Complementing this personal touch, we bring our licensing,
              training, and certification as Regulated Canadian Immigration
              Consultants to assist others in their journey to Canada. Canada
              stands as a popular destination for immigrants from India,
              offering a high standard of living, excellent healthcare system,
              and rich cultural heritage. If you're considering immigrating to
              Canada from India, there are several immigration services ready to
              assist you throughout the process. Canada also offers a range of
              Provincial Nominee Programs (PNPs), which are designed to fill
              employment gaps in certain provinces. These programs allow
              provinces to nominate immigrants who have specific skills and
              experience as per the need and requirement in those provinces.
              Provincial Nominee Programs provide a fast-track for immigration
              to Canada.
            </Typography>
          </div>
          <div className="col-md-5 mt-5">
            <Images
              src={"images/imm.png"}
              alt={"images"}
              width={"100%"}
              className="immImages"
            ></Images>
          </div>
          <div className="col-md-7 mt-5">
            <Images
              src={"images/bannerColor.svg"}
              alt={"images"}
              width={77}
              height={27}
            ></Images>
            <Typography
              as="h2"
              _color="#28003B"
              _fontSize={["14px", "42px"]}
              _fontWeight={[600, 600]}
              _lineHeight={["14px", "50px"]}
              className="title"
            >
              What are your immigration options?
              <Images
                src={"images/logotick.png"}
                alt={"images"}
                width={114}
                height={18}
              ></Images>
            </Typography>
            <Typography
              as="h3"
              _color="#28003B"
              _fontSize={["14px", "16px"]}
              _fontWeight={[400, 400]}
              _lineHeight={["35px", "30px"]}
              className="mt-4"
            >
              Take the definitive assessment provided on the following page and
              schedule a complimentary consultation call with us. Allow us to 
              help you gain clarity on your immigration options available.
            </Typography>
            <div className="callBtn">
              <a href="javascript:void(0)">
                Book A Consultion{" "}
                <img src="images/whiteArrow.svg" alt="images" />
              </a>
              <a href="javascript:void(0)">
                Check Eligibity <img src="images/whiteArrow.svg" alt="images" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </InspirationStyle>
  );
};

export default Inspiration;
