import {
  Box,
  Flex,
  Text,
  VStack,
  useColorModeValue,
  Code,
} from "@chakra-ui/react";

interface FooterProps {
  children?: React.ReactNode;
}
const Footer = ({ children }: FooterProps) => {
  const color = useColorModeValue("black", "#64ffda");
  return (
    <Box
      w='100%'
      h='100px'
      mt={50}
      as={Flex}
      flexDirection={"column"}
      justifyContent={"space-between"}
      boxShadow={"lg"}
    >
      <Flex justifyContent={"center"}>
        <VStack mt='30px' textAlign={"center"}>
          <Text fontSize={"xs"} mt={"10"}>
            Copyright © Saladu 2024
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
};
export default Footer;
