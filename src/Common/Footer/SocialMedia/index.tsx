import React from "react";
import Images from "src/Common/Images";

interface Props {
  socialink?: any;
}

const SocialMedia = (props: Props) => {
  return (
    <div className="col-md-6">
      <div className="d-flex pt-4 socialMedia">
        {props.socialink.response.insta && (
          <a href={props.socialink.response.insta} target="black">
            <Images
              src={"/images/instagram.svg"}
              alt={"instafram"}
              width={24}
              height={24}
            ></Images>
          </a>
        )}

        {props.socialink.response.facebook && (
          <a href={props.socialink.response.facebook} target="black">
            <Images
              src={"/images/facebook.svg"}
              alt={"facebook"}
              width={24}
              height={24}
            ></Images>
          </a>
        )}
        {props.socialink.response.linkedin &&
        <a href={props.socialink.response.linkedin} target="black">
          <Images
            src={"/images/linkdin.svg"}
            alt={"linkdin"}
            width={24}
            height={24}
          ></Images>
        </a>
        }
        {props.socialink.response.youtube &&
        <a href={props.socialink.response.youtube} target="black">
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
