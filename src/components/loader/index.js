import React from "react";
import { PuffLoader } from "react-spinners";
import { Colors } from "../../theme";

const Loader = ({ color = Colors.white, size = 80 }) => {
  return (
    <div
      className="loader"
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <PuffLoader size={size} color={color} />
    </div>
  );
};

export default Loader;
