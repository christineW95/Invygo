// Import your mocks here
import React from "react";

import "react-native-gesture-handler/jestSetup";

jest.mock("react-native-reanimated", () => {
  const Reanimated = require("react-native-reanimated/mock");

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});
jest.mock("@expo/vector-icons", () => {
  return () => "";
});
jest.mock("expo-font", () => {
  return () => "";
});
jest.mock("expo-splash-screen", () => {
  return () => "";
});
jest.mock("react-dom");

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");
jest.mock("@react-navigation/drawer", () => {
  return {
    current: "",
    createDrawerNavigator: jest.fn().mockReturnValue({
      Navigator: (children = <></>) => <>{children}</>,
      Screen: (children = <></>) => <>{children}</>,
      drawerContent: (children = <></>) => <>{children}</>,
      initialRouteName: "",
      screenOptions: {},
      children: {},
    }),
  };
});
jest.mock("react-native/Libraries/Utilities/Platform", () => {
  const platform = jest.requireActual(
    "react-native/Libraries/Utilities/Platform"
  );
  return {
    ...platform,
    constants: {
      ...platform.constants,
      reactNativeVersion: {
        major: 0,
        minor: 65,
        patch: 1,
      },
    },
  };
});

jest.mock("react-native-gesture-handler", () => {
  // eslint-disable-next-line global-require
  const View = require("react-native/Libraries/Components/View/View");
  return {
    Swipeable: View,
    DrawerLayout: View,
    State: {},
    ScrollView: View,
    Slider: View,
    Switch: View,
    TextInput: View,
    ToolbarAndroid: View,
    ViewPagerAndroid: View,
    DrawerLayoutAndroid: View,
    WebView: View,
    NativeViewGestureHandler: View,
    TapGestureHandler: View,
    FlingGestureHandler: View,
    ForceTouchGestureHandler: View,
    LongPressGestureHandler: View,
    PanGestureHandler: View,
    PinchGestureHandler: View,
    RotationGestureHandler: View,
    /* Buttons */
    RawButton: View,
    BaseButton: View,
    RectButton: View,
    BorderlessButton: View,
    /* Other */
    FlatList: View,
    gestureHandlerRootHOC: jest.fn(),
    Directions: {},
  };
});
jest.mock("react-native", () => {
  const RN = jest.requireActual("react-native");
  RN.NativeModules.CustomApiCallModule = {
    getRequestNoRedirectionsWithUrl: jest.fn(),
  };
  RN.NativeModules.SettingsManager = {
    settings: { AppleLocale: "en-US", AppleLanguages: ["en-US"] },
  };
  RN.NativeModules.ExitAppModule = {
    exitApp: jest.fn(),
  };
  RN.Platform = { OS: "ios" };
  RN.Dimensions = {
    get: () => ({ height: 100, width: 100 }),
  };

  return RN;
});
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");
jest.mock("react-native/Libraries/EventEmitter/NativeEventEmitter");
jest.mock("@react-navigation/native", () => {
  return {
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
    useRoute: () => ({
      params: {},
    }),
  };
});
jest.mock("@react-navigation/native", () => {
  return {
    ...jest.requireActual("@react-navigation/native"),
    current: {},
    useNavigation: () => ({
      navigate: jest.fn(),
      goBack: jest.fn(),
      addListener: jest.fn(),
      dispatch: jest.fn(),
    }),
    useIsFocused: jest.fn(),
    useNavigationContainerRef: jest.fn(() => ({ current: {} })),
    useFocusEffect: jest.fn(),
    useRoute: jest.fn(),
  };
});
jest.mock("@react-navigation/native-stack", () => {
  return {
    ...jest.requireActual("@react-navigation/native-stack"),

    useNavigation: () => ({
      navigate: jest.fn(),
      goBack: jest.fn(),
      addListener: jest.fn(),
      dispatch: jest.fn(),
    }),
    useNavigationContainerRef: jest.fn(() => ({ current: {} })),
    useFocusEffect: jest.fn(),
    useRoute: jest.fn(),
  };
});

jest.mock("@react-navigation/core", () => {
  return {
    ...jest.requireActual("@react-navigation/core"),
    useNavigationState: jest.fn(),
    useRoute: () => ({
      params: {},
    }),
    useNavigation: () => ({
      navigate: jest.fn(),
      goBack: jest.fn(),
      addListener: jest.fn(),
      dispatch: jest.fn(),
    }),
    useFocusEffect: jest.fn(),
  };
});

jest.mock("react", () => {
  const originReact = jest.requireActual("react");
  const mUseRef = jest.fn();
  return {
    ...originReact,
    useRef: mUseRef,
  };
});

jest.mock(
  "react-native/Libraries/Components/Touchable/TouchableOpacity",
  () => "TouchableOpacity"
);
