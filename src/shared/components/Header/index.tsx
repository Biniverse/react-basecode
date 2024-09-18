import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

const Header = () => {
  const BEEFY_GITHUB_URL = "https://github.com/beefysalad";
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box zIndex='1' w='full' position='fixed' top='0' left='0' boxShadow='lg'>
        <Flex alignItems='center' px={{ base: "3", md: "5", lg: "8" }} py='3'>
          <Box>
            <Heading size='md'>
              <HStack>
                <Link
                  href={BEEFY_GITHUB_URL}
                  target='_blank'
                  _hover={{ underline: "none" }}
                >
                  Trek
                </Link>
              </HStack>
            </Heading>
          </Box>

          <Spacer />
          <ColorModeSwitcher />
          <IconButton
            aria-label='open menu'
            icon={<BiMenu />}
            variant='ghost'
            onClick={onOpen}
          />
        </Flex>
      </Box>

      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <HStack>
              <Heading size='md'>Trek</Heading>
            </HStack>
          </DrawerHeader>
          <DrawerBody></DrawerBody>
          <DrawerFooter>
            <IconButton
              aria-label='close menu'
              icon={<AiOutlineClose />}
              variant='ghost'
              onClick={onClose}
            />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
