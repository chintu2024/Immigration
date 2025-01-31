import React from 'react'
import { Facebook, Linkedin } from 'react-feather';
import {FacebookIcon, FacebookShareButton,LinkedinIcon,LinkedinShareButton,TwitterShareButton, WhatsappIcon, WhatsappShareButton, XIcon} from "react-share";

interface Props {
    shareUrl?:any;
}

const Share = (props: Props) => {
  return (
    <>
    <FacebookShareButton url={props.shareUrl} title="test">
        <FacebookIcon size={32}/>
    </FacebookShareButton>
    <LinkedinShareButton url={props.shareUrl}>
        <LinkedinIcon size={32}/>
    </LinkedinShareButton>
    <TwitterShareButton url={props.shareUrl}>
        <XIcon size={32}/>
    </TwitterShareButton>
    <WhatsappShareButton url={props.shareUrl}>
        <WhatsappIcon size={32}/>
    </WhatsappShareButton>
    </>
  )
}

export default Share