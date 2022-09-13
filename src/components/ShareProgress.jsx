import React from "react";
import { useEffect, useState } from "react";
import { EmailShareButton, FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton, WhatsappShareButton, WhatsappIcon } from "react-share";
import EmailIcon from "react-share/lib/EmailIcon";
import dateTransform from "../utils/dateTransform";

const URL = "https://abrazar.netlify.app/";

const ShareProgress = ({ progress }) => {
  const [formatedProgress, setFormatedProgress] = useState("");

  const formatProgressToShare = (progress) => {
    return progress.map((item) => (item[0] !== "seconds" ? `${item[1]} ${dateTransform[item[0]]}` : "")).join(", ");
  };

  useEffect(() => {
    progress && setFormatedProgress(formatProgressToShare(progress));
  }, [progress]);

  return (
    <div>
      <EmailShareButton url="" subject="Quiero compartirte mi progreso" body={`Hola, quiero compartirte que llevo ${formatedProgress}`}>
        <EmailIcon size={40} round={true} />
      </EmailShareButton>
      <FacebookShareButton url={URL} quote={`Hola, quiero compartirte que llevo ${formatedProgress}`}>
        <FacebookIcon size={40} round={true} />
      </FacebookShareButton>
      <TwitterShareButton url={URL} title={`Hola, quiero compartirte que llevo ${formatedProgress}`}>
        <TwitterIcon size={40} round={true} />
      </TwitterShareButton>
      <WhatsappShareButton url={URL} title={`Hola, quiero compartirte que llevo ${formatedProgress}`}>
        <WhatsappIcon size={40} round={true} />
      </WhatsappShareButton>
    </div>
  );
};

export default ShareProgress;
