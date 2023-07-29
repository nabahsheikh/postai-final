import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";

function SideBarOptions({ name, image, to,handleClick }) {
  const navigate = useNavigate();
  return (
    <div className="sidebar-option"  onClick={handleClick}>
      <img src={image} alt="" />
      <p>{name}</p>
    </div>
  );
}

export default SideBarOptions;
