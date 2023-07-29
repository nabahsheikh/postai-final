// @flow
import { StyleSheet } from "aphrodite";
import { Colors, AppStyles } from "../../theme";

export default StyleSheet.create({
  Error: {
    textAlign: "center",
    width: "100%",
    height: "100vh",
    backgroundColor: "#003bb3",
  },
  ErrorBg: {
    height: "100%",
    width: "100%",
    position: "absolute",
    // opacity: 0.4,
    pointerEvents: "none",
  },
  Title: {
    fontSize: "28vh",
    letterSpacing: 5,
    textShadow: `8px 0 0 ${Colors.white}`,
    color: Colors.white,
    fontWeight: "bolder",
    lineHeight: "0.1em",
    "@media (max-width: 1194px)": {
      fontSize: 250,
    },
    "@media (max-width: 763px)": {
      fontSize: 120,
    },
  },
  SubTitle: {
    fontSize: "1.4em",
    textTransform: "uppercase",
    marginBottom: 16,
    color: Colors.offWhite4,
    fontWeight: 600,
    padding: "5px 25px",
    "@media (max-width: 763px)": {
      fontSize: 17,
    },
  },
  Detail: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: "lighter",
    marginBottom: 10,
    "@media (max-width: 763px)": {
      fontSize: 13,
    },
  },
});
