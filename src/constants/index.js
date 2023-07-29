import {
  Login,
  Home,
  Dashboard,
  GeneratedPosts,
  GeneratedCaptions,
  PrivacyPolicy,
  UserPosts,
} from "../modules";
import { Images } from "../theme";

export const ALERT_TIMEOUT = 3000;
export const DEV_ENV = "dev";
export const PROD_ENV = "prod";
export const API_LOG = process.env.REACT_APP_ENV === DEV_ENV;
export const API_TIMEOUT = 30000000000;

export const ERROR_MESSAGES = {
  INTERNET_ERROR: "Please connect to the working internet",
  SESSION_EXPIRED_ERROR: "Session expired, Please login again",
  SOMETHING_WRONG: "Something went wrong",
  FAILED_TO_FETCH: "Failed to fetch, try to refresh the page",
};

export const SUCCESS_MESSAGES = {
  CONTACTUS_FORM: "Form Submitted Successfully",
  LOGIN: "Login Successfully",
  LOGOUT: "Logout Successfully",
  APPOINMENT_FORM: "Request send successfully",
  CANCEL_APPOINMENT: "Appoinment cancelled successfully",
  CREATE_PATIENT: "Patient Created Successfully",
  UPDATE_PATIENT: "Patient Updated Successfully",
  DELETE_PATIENT: "Patient Deleted Successfully",
  APPOINMENT_REVIEW: "Review Submitted Successfully",
};
export const ACCESS_TYPES = {
  AUTH: "auth",
  PRIVATE: "private",
  PUBLIC: "public",
};
export const ALERT_POSITIONS = {
  topRight: "top-right",
  topLeft: "top-left",
  topCenter: "top-center",
  bottomRight: "bottom-right",
  bottomLeft: "bottom-left",
  bottomCenter: "bottom-center",
};
export const ALERT_THEMES = {
  dark: "dark",
  colored: "colored",
  light: "light",
};
export const ALERT_TYPES = {
  info: "info",
  success: "success",
  error: "error",
  warning: "warning",
  default: "default",
};
// PUBLIC ROUTES
export const PRIVACY_POLICY_ROUTE = "/privacy-policy";
// AUTH ROUTES
export const lOGIN_ROUTE = "/";
// PRIVATE ROUTES
export const DASHBOARD_ROUTE = "/dashboard";
export const GENERATED_POSTS_ROUTE = "/generated-posts";
export const SCHEDULED_POSTS_ROUTE = "/scheduled-posts";
export const CUSTOMIZED_POSTS_ROUTE = "/customized-posts";
export const GENERATED_CAPTIONS_ROUTE = "/generated-captions";
export const USER_POSTS = "/user-posts";

export const PAGE_ROUTES = [
  // PUBLIC ROUTES
  {
    route: PRIVACY_POLICY_ROUTE,
    access: ACCESS_TYPES.PUBLIC,
    component: <PrivacyPolicy />,
  },
  // AUTH ROUTES
  {
    route: lOGIN_ROUTE,
    title: "Login",
    description: "",
    access: ACCESS_TYPES.AUTH,
    component: <Login />,
  },
  // PRIVATE ROUTE
  {
    route: DASHBOARD_ROUTE,
    title: "Dashboard",
    description: "",
    access: ACCESS_TYPES.PRIVATE,
    component: <Dashboard />,
  },
  {
    route: GENERATED_POSTS_ROUTE,
    title: "Generated Posts",
    description: "",
    access: ACCESS_TYPES.PRIVATE,
    component: <GeneratedPosts />,
  },
  {
    route: SCHEDULED_POSTS_ROUTE,
    title: "Scheduled Posts",
    description: "",
    access: ACCESS_TYPES.PRIVATE,
    component: <GeneratedPosts />,
  },
  {
    route: CUSTOMIZED_POSTS_ROUTE,
    title: "Customized Posts",
    description: "",
    access: ACCESS_TYPES.PRIVATE,
    component: <GeneratedPosts />,
  },
  {
    route: GENERATED_CAPTIONS_ROUTE,
    title: "Generated Captions",
    description: "",
    access: ACCESS_TYPES.PRIVATE,
    component: <GeneratedCaptions />,
  },
  {
    route: USER_POSTS,
    title: "User Posts",
    description: "",
    access: ACCESS_TYPES.PRIVATE,
    component: <UserPosts />,
  },
];
export const WEB_STRINGS = {
  ErrorPage: {
    title: "404",
    subtitle: "Oops! Page not found",
    description:
      "The page you are looking was doesn't exsist. You may have mistyped the address or the page may have been moved",
    button: "Back to Home",
  },
};

export const POST_DATA = [
  {
    id: 1,
    hashtag: "Travelling",
    image:
      "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus augue vel magna viverra maximus sed id felis.",
  },
  {
    id: 2,
    hashtag: "Food",
    image:
      "https://images.pexels.com/photos/21787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus augue vel magna viverra maximus sed id felis.",
  },
  {
    id: 3,
    hashtag: "Cricket",
    image:
      "https://images.pexels.com/photos/22787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus augue vel magna viverra maximus sed id felis.",
  },
  {
    id: 4,
    hashtag: "Trekking",
    image:
      "https://images.pexels.com/photos/23787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus augue vel magna viverra maximus sed id felis.",
  },
  {
    id: 5,
    hashtag: "Birthday",
    image:
      "https://images.pexels.com/photos/23377/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus augue vel magna viverra maximus sed id felis.",
  },
  {
    id: 6,
    hashtag: "Education",
    image:
      "https://images.pexels.com/photos/25787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus augue vel magna viverra maximus sed id felis.",
  },
  {
    id: 7,
    hashtag: "Travelling",
    image:
      "https://images.pexels.com/photos/26787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus augue vel magna viverra maximus sed id felis.",
  },
  {
    id: 8,
    hashtag: "Food",
    image:
      "https://images.pexels.com/photos/27787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus augue vel magna viverra maximus sed id felis.",
  },
  {
    id: 9,
    hashtag: "Cricket",
    image:
      "https://images.pexels.com/photos/28787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus augue vel magna viverra maximus sed id felis.",
  },
  {
    id: 10,
    hashtag: "Trekking",
    image:
      "https://images.pexels.com/photos/29787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus augue vel magna viverra maximus sed id felis.",
  },
  {
    id: 11,
    hashtag: "Birthday",
    image:
      "https://images.pexels.com/photos/20687/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus augue vel magna viverra maximus sed id felis.",
  },
  {
    id: 12,
    hashtag: "Education",
    image:
      "https://images.pexels.com/photos/27187/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus augue vel magna viverra maximus sed id felis.",
  },
];
export const CAPTION_DATA = [
  {
    id: 1,
    caption: "Enjoy the game and chase your dreams. Dreams do come true!",
  },
  {
    id: 2,
    caption: "Make me umpire, my favorite team will never lose any match.",
  },
  {
    id: 3,
    caption:
      "No cricket team in the world depends on one or two players.The team always plays to win.",
  },
  {
    id: 4,
    caption: "You don’t play for the crowd; you play the crowd.",
  },
  {
    id: 5,
    caption: "Enjoy the game and chase your dreams. Dreams do come true!",
  },
  {
    id: 6,
    caption: "Make me umpire, my favorite team will never lose any match.",
  },
  {
    id: 7,
    caption:
      "No cricket team in the world depends on one or two players.The team always plays to win.",
  },
  {
    id: 8,
    caption: "You don’t play for the crowd; you play the crowd.",
  },
];
