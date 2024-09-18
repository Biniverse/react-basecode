import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { Router, RouterProvider } from "react-router-dom";
import { router } from "../routes/routes";
import { AppLayout } from "../layout/AppLayout";
import theme from "../theme/theme";

interface AppProviderProps {
  children: React.ReactNode;
}
export const AppProvider = () => {
  return (
    <ChakraProvider theme={theme}>
      <AppLayout>
        <RouterProvider router={router} />
      </AppLayout>
    </ChakraProvider>
  );
};
