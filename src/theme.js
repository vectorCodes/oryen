const brandColor = {
  50: "#dff2ee",
  100: "#b0dfd2",
  200: "#7dcbb6",
  300: "#48b69a",
  400: "#1aa685",
  500: "#009672",
  600: "#008966",
  700: "#007958",
  800: "#00694a",
  900: "#004d30",
};

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: brandColor,
    secondary: {
      50: "#e0f0f7",
      100: "#c0d9df",
      200: "#9fbdc6",
      300: "#7da2ad",
      400: "#638d9a",
      500: "#487a88",
      600: "#3d6b77",
      700: "#2f5762",
      800: "#22444e",
      900: "#122f37",
    },
  },
});

export default theme;
