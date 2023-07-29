import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Images } from "../../theme";
import SideBarOptions from "../SideBarOptions";
import { CopyrightOutlined } from "@ant-design/icons";

import "./styles.scss";
import PostGenerationModal from "../PostGenerationModal";
import CaptionGenerationModal from "../CaptionGenerationModal";
import CustomizedInputModal from "../CustomizedInputModal";
import { PRIVACY_POLICY_ROUTE } from "../../constants";
import { getCurrentUserId } from "../../services/utils";
function SideBar() {
  const [postModalOpen, setPostModalOpen] = useState(false);
  const [customModalOpen, setCustomModalOpen] = useState(false);
  const [captionModalOpen, setCaptionModalOpen] = useState(false);
  const navigate = useNavigate();
  console.log(getCurrentUserId());
  return (
    <div className="sidebar-wrapper">
      <span className="sidebar-options-wrapper">
        <SideBarOptions
          name="Post Generation"
          image={Images.Post}
          handleClick={() => setPostModalOpen(true)}
        />
        <hr />
        <SideBarOptions
          name="Caption Generation"
          image={Images.Caption}
          handleClick={() => setCaptionModalOpen(true)}
        />
        <hr />
        <SideBarOptions
          name="Post Analytics"
          image={Images.Analytics}
          handleClick={() => navigate("/user-posts")}
        />
        <hr />
        <SideBarOptions
          name="Scheduled Posts"
          image={Images.Scheduled}
          handleClick={() => navigate("/scheduled-posts")}
        />
      </span>
      <span className="sidebar-links">
        <Link>Terms of Services</Link>
        <Link to={PRIVACY_POLICY_ROUTE}>Privacy Policy</Link>
        <Link>Contact Us</Link>
        <Link>About Us</Link>

        <span className="copyright-wrapper">
          <CopyrightOutlined />
          <p>Copyrights By</p>
          <img src={Images.LogoBlack} className="copyrights-logo" />
        </span>
      </span>
      <PostGenerationModal
        open={postModalOpen}
        handleClose={() => setPostModalOpen(false)}
        handleCustom={() => {
          setPostModalOpen(false);
          setCustomModalOpen(true);
        }}
      />
      <CustomizedInputModal
        open={customModalOpen}
        handleClose={() => setCustomModalOpen(false)}
      />
      <CaptionGenerationModal
        open={captionModalOpen}
        handleClose={() => setCaptionModalOpen(false)}
      />
    </div>
  );
}

export default SideBar;
