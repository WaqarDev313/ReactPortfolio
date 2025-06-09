import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaWhatsapp,
  FaNodeJs,
} from "react-icons/fa";
import { SiPhp, SiHtml5, SiJavascript, SiLaravel, SiFlutter } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      {/* Social Media Links */}
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-2">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          {/* <span className="bannerIcon">
            <FaTwitter />
          </span> */}
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
          <span className="bannerIcon">
            <FaWhatsapp />
          </span>
        </div>
      </div>

      {/* Skills Section */}
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-2">
          <span className="bannerIcon">
            <FaReact />
          </span>
          {/* <span className="bannerIcon">
            <SiPhp />
          </span>
          <span className="bannerIcon">
            <SiHtml5 />
          </span> */}
          {/* <span className="bannerIcon">
            <SiJavascript />
          </span> */}
          <span className="bannerIcon">
            <FaNodeJs />
          </span>
          <span className="bannerIcon">
            <SiLaravel />
          </span>
          <span className="bannerIcon">
            <SiFlutter />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
