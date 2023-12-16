// colors used throught all UI components
// Colors.ts
interface ColorTheme {
  [key: string]: any;
  // Add more properties here
}

interface Colors {
  [key: string]: any;
}

export const colors: Colors = {
  white: "#ffffff",
  black: "#000000",
  textBlack: "#1D1E20",
  error: "#D53631",
};

// Fonts used throught all UI components
export const fonts = {
  Open_Sans: {
    Regular: "OpenSans-Regular",
    Light: "OpenSans-Light",
    Medium: "OpenSans-Medium",
    Bold: "OpenSans-Bold",
    SemiBold: "OpenSans-SemiBold",
    ExtraBold: "OpenSans-ExtraBold",
    Italic: "OpenSans-Italic",
  },
};

export const headerHeight = 85;
export const headerHeightMobile = 66;
export const scrollableHeaderHeight = 65;
