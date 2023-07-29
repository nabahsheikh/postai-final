import React from "react";
import { css } from "aphrodite";
import styles from "./styles";
import { AppStyles, Images } from "../../theme";
import { DASHBOARD_ROUTE, HOME_ROUTE, WEB_STRINGS } from "../../constants";
import { ButtonComponent } from "../../components";

const Error = () => {
  const { ErrorPage } = WEB_STRINGS;
  return (
    <div
      className={css([
        styles.Error,
        AppStyles.flexBox,
        AppStyles.justifyCenter,
        AppStyles.alignItemsCenter,
      ])}
    >
      <div
        className={css(styles.ErrorBg)}
        style={{
          backgroundImage: `url(${Images.ErrorBackground2})`,
        }}
      />
      <div style={{ width: 700, maxWidth: "100%" }}>
        <h2 className={`poppin-font ${css(styles.Title)}`}>
          {ErrorPage.title}
        </h2>
        <h4 className={css(styles.SubTitle)}>{ErrorPage.subtitle}</h4>
        <p className={css(styles.Detail)}>{ErrorPage.description}</p>
        {/* <Link to="/" className={css([AppStyles.mTop25, AppStyles.bl])}> */}
        <ButtonComponent
          className={css(AppStyles.mTop25)}
          text={ErrorPage.button}
          isLink={true}
          link={DASHBOARD_ROUTE}
        />
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Error;
