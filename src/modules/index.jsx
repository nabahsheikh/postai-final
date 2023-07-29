import Error from "./404";
// PUBLIC ROUTES
import Home from "./public/home";
import PrivacyPolicy from "./public/privacyPolicy";
// AUTH ROUTES
import Login from "./auth/login";
// PRIVATE ROUTES
import Dashboard from "./private/dashboard";
import GeneratedPosts from "./private/GeneratedPosts";
import GeneratedCaptions from "./private/GeneratedCaptions";
import UserPosts from "./private/userPosts";

export {
  Error,
  Home,
  Login,
  Dashboard,
  GeneratedPosts,
  GeneratedCaptions,
  PrivacyPolicy,
  UserPosts,
};
