import React, { useState } from "react";
import {
  DashboardContent,
  PageSelectModal,
  SideBar,
} from "../../../components";
import "./styles.scss";
import { getCurrentPageAccessToken } from "../../../services/utils";
const Dashboard = () => {
  return (
    <section className="dashboard">
      <SideBar />
      <DashboardContent />
    </section>
  );
};

export default Dashboard;
