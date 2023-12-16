import { StyleSheet } from "react-native";
import { HORIZONTAL_DIMENS, VERTICAL_DIMENS } from "../../constants";
import { colors } from "../../utils/theme";

export default StyleSheet.create({
  //common
  flexDirectionRow: {
    flexDirection: "row",
  },
  marginTop: {
    marginTop: VERTICAL_DIMENS._10,
  },

  //screen component
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: HORIZONTAL_DIMENS._16,
  },
  deviceImage: {
    flex: 1,
    borderRadius: 16,
  },
  imageDetailContainer: {
    flexDirection: "row",
    marginTop: VERTICAL_DIMENS._10,
    justifyContent: "space-between",
  },
  textContainer: {
    width: HORIZONTAL_DIMENS._150,
    flexDirection: "row",
  },
  titleText: {
    color: colors.textBlack,
    fontSize: 14,
    fontWeight: "500",
    marginBottom: VERTICAL_DIMENS._5,
  },
  text1: {
    flex: 1,
    color: colors.textBlack,
    fontSize: 14,
    marginBottom: VERTICAL_DIMENS._5,
    textAlign: "left",
  },
  text: {
    color: colors.textBlack,
    fontSize: 14,
    marginBottom: VERTICAL_DIMENS._5,
    textAlign: "left",
  },
});
