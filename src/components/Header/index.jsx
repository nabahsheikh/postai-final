import { Popover } from "antd";
import React from "react";
import { Images } from "../../theme";
import { useDispatch, useSelector } from "react-redux";
import { QuestionCircleFilled, BellOutlined } from "@ant-design/icons";

import "./styles.scss";
import { userSignOutRequest } from "../../redux/slicers/user";
import { useNavigate } from "react-router-dom";
import MenuDrawer from "../MenuDrawer";
import { useState } from "react";
import { toastAlert } from "../../services/utils";
import { ALERT_TYPES } from "../../constants";

const Header = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.user);
  console.log(data, "Data");
  const handleLogout = () => {
    dispatch(userSignOutRequest());
    toastAlert("Logout Successfull", ALERT_TYPES.success);
  };
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="main-header">
      <img
        src={Images.HeaderLogo}
        alt=""
        className="header-logo"
        onClick={() => navigate("/dashboard")}
      />
      <img
        src={Images.LogoWhite}
        alt=""
        className="header-logo-resp"
        onClick={() => navigate("/dashboard")}
      />
      <span className="header-account">
        <div className="header-options">
          <QuestionCircleFilled className="header-icons" />
          <BellOutlined className="header-icons" />
        </div>
        <Popover
          trigger="click"
          placement="bottomRight"
          className="account-popover"
          content={
            <div className="popover-content">
              <p className="popover-options">My Account</p>
              <p className="popover-options" onClick={handleLogout}>
                Logout
              </p>
            </div>
          }
          getPopupContainer={(trigger) => trigger.parentElement}
        >
          <img src={data?.thumb} alt="" className="header-img" />
          <p>
            {data?.name} <img src={Images.DownArrow} />
          </p>
        </Popover>
      </span>
      <img
        src={Images.MenuIcon}
        className="menu-icon"
        onClick={() => setMenuOpen(true)}
      />
      <MenuDrawer open={menuOpen} handleClose={() => setMenuOpen(false)} />
    </div>
  );
};

export default Header;
