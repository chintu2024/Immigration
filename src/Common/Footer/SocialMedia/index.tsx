import React from "react";
import Images from "src/Common/Images";

interface Props {
  socialink?: any;
}

const SocialMedia = (props: Props) => {
  return (
    <div className="col-md-6">
      <div className="d-flex pt-4 socialMedia">
        {props.socialink.data.instagram && (
          <a href={props.socialink.data.instagram} target="black">
            <Images
              src={"/images/instagram.svg"}
              alt={"instafram"}
              width={24}
              height={24}
            ></Images>
          </a>
        )}

        {props.socialink.data.facebook && (
          <a href={props.socialink.data.facebook} target="black">
            <Images
              src={"/images/facebook.svg"}
              alt={"facebook"}
              width={24}
              height={24}
            ></Images>
          </a>
        )}
        {props.socialink.data.linkdin &&
        <a href={props.socialink.data.linkdin} target="black">
          <Images
            src={"/images/linkdin.svg"}
            alt={"linkdin"}
            width={24}
            height={24}
          ></Images>
        </a>
        }
        {props.socialink.data.youtube &&
        <a href={props.socialink.data.youtube} target="black">
          <Images
            src={"/images/youtube.svg"}
            alt={"youtube"}
            width={24}
            height={24}
          ></Images>
        </a>
        }
      </div>
    </div>
  );
};

export default SocialMedia;
