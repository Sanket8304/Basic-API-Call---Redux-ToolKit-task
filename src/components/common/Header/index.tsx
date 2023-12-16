import React from "react";
import { Platform, StyleSheet, View, StyleProp, ViewStyle } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header as RNHeader, HeaderBackButton } from "@react-navigation/elements";

import { colors, fonts } from "../../../utils/theme";
import { HORIZONTAL_DIMENS, VERTICAL_DIMENS } from "../../../constants";
import { ArrowLeft } from "../../../assets/svgs/icons";

type Props = {
  screen?: string;
  title: string;
  headerRight?: any;
  headerStyle?: StyleProp<ViewStyle>;
  headerCustomeLeft?: any;
  headerLeft?: boolean;
  headerTitle?: any;
  headerTitleAlign?: any;
  search?: boolean;
};

const defaultProps = {
  bottomCurve: true,
};

const MobileHeader = (props: Props) => {
  const { title, headerLeft, headerCustomeLeft, headerRight, headerStyle, headerTitle, headerTitleAlign } = props;
  const navigation = useNavigation<any>();

  return (
    <View style={styles.headerStyle}>
      <RNHeader
        headerStyle={[styles.headerStyle, headerStyle]}
        title={title}
        headerTitle={headerTitle}
        headerTitleAlign={headerTitleAlign}
        headerTitleStyle={styles.headerTitleStyle}
        headerTintColor={colors.textBlack}
        headerLeft={() => {
          return headerLeft && !headerCustomeLeft ? (
            <HeaderBackButton
              labelVisible={false}
              onPress={navigation.goBack}
              tintColor={colors.black}
              style={styles.headerBackStyle}
              backImage={() => (
                <ArrowLeft fill={colors.black} width={HORIZONTAL_DIMENS._20} height={VERTICAL_DIMENS._20} />
              )}
            />
          ) : (
            headerCustomeLeft
          );
        }}
        headerRight={headerRight}
        headerRightContainerStyle={styles.headerRightContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: colors.white,
  },
  headerBackStyle: {
    paddingLeft: Platform.OS === "ios" ? HORIZONTAL_DIMENS._16 : HORIZONTAL_DIMENS._6,
  },
  headerRightContainer: {
    paddingRight: HORIZONTAL_DIMENS._16,
    justifyContent: "center",
  },
  headerTitleStyle: {
    fontFamily: fonts.Open_Sans.Bold,
    fontWeight: "600",
    fontSize: 20,
    color: colors.textBlack,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.grey200,
    marginHorizontal: HORIZONTAL_DIMENS._16,
    marginBottom: VERTICAL_DIMENS._10,
    height: VERTICAL_DIMENS._36,
    paddingHorizontal: HORIZONTAL_DIMENS._8,
    borderRadius: 10,
  },
  searchInputBox: {
    flex: 1,
    color: colors.commonTextBlack,
    height: VERTICAL_DIMENS._46,
    paddingHorizontal: HORIZONTAL_DIMENS._7,
    fontSize: 13,
  },
});

MobileHeader.defaultProps = defaultProps;
export default MobileHeader;
