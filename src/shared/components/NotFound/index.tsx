import React from "react";
import { Box, Heading, Text, Button, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <Center flexDirection='column'>
      <Box textAlign='center'>
        <Heading as='h1' size='2xl'>
          404
        </Heading>
        <Text fontSize='xl'>
          Oops! The page you are looking for does not exist.
        </Text>
        <Link to='/'>Go back Home</Link>
      </Box>
    </Center>
  );
};
