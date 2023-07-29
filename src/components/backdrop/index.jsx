import React from "react";
import "./styles.scss";

const BackDrop = ({ zIndex = 999, handle = () => {} }) => {
  return (
    <section
      className="backdrop"
      style={{ zIndex: zIndex }}
      onClick={handle}
    ></section>
  );
};

export default BackDrop;
