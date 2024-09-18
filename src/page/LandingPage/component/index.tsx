import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";

export const LandingPage = () => {
  const { id } = useParams();
  return (
    <Box>
      <Box as={Flex} flexDirection={"row"} justifyContent={"center"}>
        <Heading>Landing page {id}</Heading>
      </Box>
    </Box>
  );
};
