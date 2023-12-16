import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView, StatusBar } from "react-native";

import { colors } from "../../utils/theme";
import MobileHeader from "../../components/common/Header";
import Home from "../../screens/home";
import ImageDetailScreen from "../../screens/imageDetailScreen";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const safeAreaProvider = {
    flex: 1,
    backgroundColor: colors.white,
  };

  return (
    <React.Fragment>
      <StatusBar barStyle={"light-content"} backgroundColor={colors.white} />
      <SafeAreaView style={safeAreaProvider}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            orientation: "portrait",
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              header: () => <MobileHeader title={"Home"} headerTitleAlign={"center"} />,
            }}
          />

          <Stack.Screen
            name="ImageDetailScreen"
            component={ImageDetailScreen}
            options={{
              header: () => <MobileHeader headerLeft title={"Image Detail"} headerTitleAlign={"center"} />,
            }}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </React.Fragment>
  );
};

export default AppStack;
