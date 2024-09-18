import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import Footer from "../shared/components/Footer";
import Header from "../shared/components/Header";

interface AppLayoutProps {
  children: React.ReactNode;
}
export const AppLayout = ({ children }: AppLayoutProps) => {
  const location = window.location.pathname;
  const isHome = location === "/";
  return (
    <>
      {isHome ? null : <Header />}
      <Container
        as={Flex}
        gap='5'
        flexDirection='column'
        justifyContent='start'
        alignItems='center'
        maxW='container.2xl'
        minH='100vh'
        px={{ base: "4", md: "0" }}
        py={{ base: "2", md: "0" }}
      >
        <Flex pt='150' flexDirection='column' w='full' h='full' flexGrow='1'>
          {children}
        </Flex>
        <Footer />
      </Container>
    </>
  );
};
