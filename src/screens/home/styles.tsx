import { StyleSheet } from "react-native";
import { HORIZONTAL_DIMENS, VERTICAL_DIMENS } from "../../constants";
import { colors } from "../../utils/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  imageFlatlistStyle: {
    padding: HORIZONTAL_DIMENS._16,
  },
  imageContainer: {
    marginBottom: VERTICAL_DIMENS._20,
  },
  listTitleText: {
    color: colors.textBlack,
    fontSize: 14,
    fontWeight: "500",
    marginBottom: VERTICAL_DIMENS._5,
  },
  imageTile: {
    borderRadius: 16,
    backgroundColor: colors.white,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    elevation: 1,
  },
  deviceImage: {
    height: VERTICAL_DIMENS._200,
    borderRadius: 16,
  },
});
