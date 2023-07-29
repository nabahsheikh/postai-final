import React, { useEffect, useState } from "react";
import { Header, PageSelectModal } from "../../components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { lOGIN_ROUTE } from "../../constants";
import { getCurrentPageAccessToken } from "../../services/utils";

function PrivateSharedLayout({ children }) {
  const navigate = useNavigate();
  const authenticated = useSelector(({ user }) => user.isAuthenticated);
  useEffect(() => {
    if (!authenticated) {
      navigate(lOGIN_ROUTE);
    }
  }, [authenticated]);
  //STATES
  const [pageModalOpen, setPageModal] = useState(true);

  //CONST VALS
  const token = getCurrentPageAccessToken();

  //HANDLERS
  const pageModalpreviewHandler = () => {
    setPageModal(!pageModalOpen);
  };
  return (
    <section className="dashboard-wrapper">
      <Header />
      {children}
      {!token && (
        <PageSelectModal
          open={pageModalOpen}
          handleClose={pageModalpreviewHandler}
        />
      )}
    </section>
  );
}

export default PrivateSharedLayout;
