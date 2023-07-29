import React, { useEffect } from "react";
import { Header } from "../../components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DASHBOARD_ROUTE } from "../../constants";
function AuthSharedLayout({ children }) {
  const navigate = useNavigate();
  const authenticated = useSelector(({ user }) => user.isAuthenticated);
  useEffect(() => {
    if (authenticated) {
      navigate(DASHBOARD_ROUTE);
    }
  }, [authenticated]);

  return (
    <section className="auth-wrapper">
      {children}
    </section>
  );
}

export default AuthSharedLayout;
