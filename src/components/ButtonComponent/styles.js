// @flow
import { StyleSheet } from "aphrodite";
import { Colors } from "../../theme";

export default StyleSheet.create({
  buttonStyle: {
    position: "relative",
    textAlign: "center",
    backgroundColor: Colors.theme,
    color: Colors.white,
    minWidth: 145,
    padding: "7px 10px",
    border: `2px solid ${Colors.theme}`,
    fontSize: 15,
    borderRadius: 8,
    fontWeight: 400,
    transition: "0.4s all",
    cursor: "pointer",
    "@media (max-width: 763px)": {
      fontSize: 13,
    },
    ":hover": {
      backgroundColor: Colors.theme2,
      border: `2px solid ${Colors.theme2}`,
    },
    ":disabled": {
      cursor: "auto",
      backgroundColor: Colors.themelight,
      border: `2px solid ${Colors.themelight}`,
    },
  },
});
