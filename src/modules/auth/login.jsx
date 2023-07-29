import React from "react";
import { Images } from "../../theme";
import "./auth.scss";
import { createFromIconfontCN } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import {
  getLongTimeAccessTokenRequest,
  userLoginSuccess,
} from "../../redux/slicers/user";
import { CopyrightOutlined } from "@ant-design/icons";
import { DASHBOARD_ROUTE } from "../../constants";
import FacebookLogin from "react-facebook-login";
import { useCustomDispatch } from "../../helpers/useCustomDispatch";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const Login = () => {
  //CONST VALS
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const IconFont = createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
  });

  //CUSTOM DISPATCH
  const [getLongAccessToken, longTokenLoader] = useCustomDispatch(
    getLongTimeAccessTokenRequest
  );

  //HANDLERS
  const responseFacebook = (response) => {
    if (response.accessToken) {
      dispatch(userLoginSuccess(response));
      const queryParams = {
        grant_type: "fb_exchange_token",
        client_id: "897823524852106",
        client_secret: "700aff2cd8ac77ecf27d566f1e986feb",
        fb_exchange_token: response.accessToken,
      };
      getLongAccessToken({
        queryParams,
        logic: (res) => {
          navigate(DASHBOARD_ROUTE);
        },
      });
    }
  };

  return (
    <div className="auth-box">
      <img src={Images.LoginBG} alt="" className="login-bg" />
      <div className="login-content-wrapper">
        <div className="login-options">
          <h4>
            Welcome To PostAi
            <br />
            Start Posting With <img src={Images.HeaderLogo} /> <br /> Today.
          </h4>
          {longTokenLoader ? (
            <ClipLoader size={30} color="#1877f2" />
          ) : (
            <FacebookLogin
              appId={process.env.FB_APP_ID}
              autoLoad={true}
              fields="name,email,picture"
              callback={responseFacebook}
              icon={<IconFont type="icon-facebook" />}
              scope="pages_read_user_content,pages_show_list,pages_read_engagement,pages_manage_posts,pages_manage_metadata"
              cssClass="fb-login-btn"
            />
          )}
          <div
            className="fb-like"
            data-share="true"
            data-width="450"
            data-show-faces="true"
          ></div>
        </div>
        <div className="copyrights">
          <span className="copyright-wrapper">
            <CopyrightOutlined />
            <p>Copyrights By</p>
            <img src={Images.LogoBlack} className="copyrights-logo" />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Login;
