import { Button, Drawer } from "antd";
import React from "react";
import { Images } from "../../theme";
import { CopyrightOutlined } from "@ant-design/icons";

import "./styles.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userSignOutRequest } from "../../redux/slicers/user";
function MenuDrawer({ open, handleClose }) {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(userSignOutRequest());
  };
  return (
    <Drawer
      open={open}
      onClose={handleClose}
      placement="top"
      closeIcon={false}
      className="menu-drawer"
      height={420}
    >
      <div className="menu-user-info">
        <img src={Images.User} className="menu-image" />
        <h3>CS-021</h3>
      </div>
      <div className="menu-link">
        <Link>Terms of Services</Link>
        <Link>Privacy Policy</Link>
        <Link>Contact Us</Link>
        <Link>About Us</Link>
      </div>
      <Button type="primary" className="log-out-btn" onClick={handleLogOut}>
        Logout
      </Button>
      <div className="copyrights">
        <span className="copyright-wrapper">
          <CopyrightOutlined style={{ color: "#fff" }} />
          <p>Copyrights By</p>
          <img src={Images.LogoWhite} className="copyrights-logo" />
        </span>
      </div>
    </Drawer>
  );
}

export default MenuDrawer;
