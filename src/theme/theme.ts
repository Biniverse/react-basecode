import { Drawer, extendTheme, type ThemeConfig } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
const BACKGROUND_COLORS = {
  LIGHT: "gray.50",
  DARK: "rgb(42, 43, 43)",
};
const theme = extendTheme(config, {
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        color: mode("gray.800", "#ccd6f6")(props),
        bg: mode(BACKGROUND_COLORS.LIGHT, BACKGROUND_COLORS.DARK)(props),
      },
    }),
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Inter', sans-serif`,
    mono: "Menlo, monospace",
  },
  components: {
    Input: {
      variants: {
        filled: (props: StyleFunctionProps) => ({
          field: {
            borderRadius: "md",
            _focus: {
              borderColor: "teal.500",
            },
            bg: mode("gray.300", "whiteAlpha.200")(props),
          },
        }),
      },
    },
    Textarea: {
      variants: {
        filled: (props: StyleFunctionProps) => ({
          borderRadius: "md",
          _focus: {
            borderColor: "teal.500",
          },
          bg: mode("gray.200", "whiteAlpha.200")(props),
        }),
      },
    },
    Drawer: {
      baseStyle: (props: StyleFunctionProps) => ({
        dialog: {
          bg: mode(BACKGROUND_COLORS.LIGHT, BACKGROUND_COLORS.DARK)(props),
        },
      }),
    },
  },
});

export default theme;
