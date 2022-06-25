import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "Sf-Regular",
    body: "Sf-Regular",
  },
  styles: {
    global: {
      "html, body": {
        background: "#000",
        overflowX: "hidden",
        overflowY: "hidden",
      },
    },
  },
});
