import React, { useEffect, useState } from "react";
import InspirationStyle from "./InspirationStyle";
import Typography from "src/Common/Typography";
import Images from "src/Common/Images";
import VideoIndex from "./Video";

interface Props {
  data?: any;
  footerdata?: any;
  hrcall?: boolean;
  clientneed?:any;
}

const Inspiration = (props: Props) => {
  const [clientVideo, setClientVideo] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/clients`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const fetchedData = await res.json();

        setClientVideo(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <InspirationStyle>
      <div className="container">
        {props.clientneed && <div className="row">
          {clientVideo && (
            <div className="col-md-12">
              <Typography
                as="h2"
                _color="#28003B"
                _fontSize={["14px", "32px"]}
                _fontWeight={[600, 600]}
                _lineHeight={["14px", "24px"]}
                className="title2"
              >
                Looking for an Inspiration?
              </Typography>
              <Typography
                as="p"
                _color="#000"
                _fontSize={["14px", "16px"]}
                _fontWeight={[400, 400]}
                _lineHeight={["14px", "30px"]}
                className="mt-3"
              >
                Check these testimonials from esteemed members of Elaar family
                to know how we helped them get a Visa
              </Typography>
            </div>
          )}
          <VideoIndex clientVideo={clientVideo} />
        </div>}
        <div className="col-md-12">
          {/* <Typography
              as="h3"
              _color="#28003B"
              _fontSize={["14px", "32px"]}
              _fontWeight={[600, 600]}
              _lineHeight={["35px", "44px"]}
              className="maintitla"
            >
              Indias No.1 Immigration & Study Visa Consultant
            </Typography> */}
          <Typography
            as="div"
            _color="#28003B"
            _fontSize={["14px", "16px"]}
            _fontWeight={[400, 400]}
            _lineHeight={["35px", "30px"]}
            className="maintitla"
          >
            <div dangerouslySetInnerHTML={{ __html: props.footerdata }} />
          </Typography>
        </div>
        {props.hrcall && (
          <div className="row">
            <div className="col-md-5 mt-5">
              <Images
                src={"images/imm.png"}
                alt={"images"}
                width={"100%"}
                className="immImages"
              ></Images>
            </div>
            <div className="col-md-7 destoppd">
              <Images
                src={"images/bannerColor.svg"}
                alt={"images"}
                width={77}
                height={27}
                className="pt-3"
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
              </Typography>
              <Typography
                as="h3"
                _color="#28003B"
                _fontSize={["14px", "16px"]}
                _fontWeight={[400, 400]}
                _lineHeight={["35px", "30px"]}
                className="mt-4"
              >
                Take the definitive assessment provided on the following page
                and schedule a complimentary consultation call with us. Allow us
                to help you gain clarity on your immigration options available.
              </Typography>
              <div className="callBtn">
                <a href="javascript:void(0)">
                  Book A Consultion{" "}
                  <img src="images/whiteArrow.svg" alt="images" />
                </a>
                <a href="javascript:void(0)">
                  Check Eligibity{" "}
                  <img src="images/whiteArrow.svg" alt="images" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </InspirationStyle>
  );
};

export default Inspiration;
