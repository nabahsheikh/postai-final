import React from "react";
import PropTypes from "prop-types";
import Ripples from "react-ripples";
import { Colors, AppStyles } from "../../theme";
import { BeatLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { css } from "aphrodite";
import styles from "./styles";
const ButtonComponent = ({
  text = "",
  onClick,
  disabled,
  isLoading,
  className = "",
  isCapitalize = false,
  isLink = false,
  ripple = true,
  link = "",
}) => {
  const linkSec = () => (
    <>
      {isLink && !disabled ? (
        <Link
          to={link}
          className={`${className} ${css([
            styles.buttonStyle,
            isCapitalize && AppStyles.uppercase,
          ])} `}
        >
          {innerSec()}
        </Link>
      ) : (
        <button
          type="submit"
          disabled={disabled || isLoading}
          onClick={onClick}
          className={`${className} ${css([
            styles.buttonStyle,
            isCapitalize && AppStyles.uppercase,
          ])} `}
        >
          {innerSec()}
        </button>
      )}
    </>
  );
  const innerSec = () => (
    <>
      {isLoading ? (
        <BeatLoader
          className={css([styles.loadingOverlay])}
          size={8}
          color={Colors.white}
        />
      ) : (
        text
      )}
    </>
  );
  return ripple && !disabled ? (
    <Ripples className={className}>{linkSec()}</Ripples>
  ) : (
    linkSec()
  );
};

ButtonComponent.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
  ripple: PropTypes.bool,
  isCapitalize: PropTypes.bool,
  isLink: PropTypes.bool,
  link: PropTypes.string,
};
export default ButtonComponent;
