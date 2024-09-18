import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export const Home = () => {
  return (
    <Box as={Flex} flexDirection={"row"} justifyContent={"center"}>
      <Heading>HOME</Heading>
    </Box>
  );
};
