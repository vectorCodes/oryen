import React from "react";
import { Box, HStack, Button, Image, Text, Spacer } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <HStack
      py="11px"
      px={{ base: "4", lg: "6" }}
      w="full"
      spacing={6}
      borderBottomWidth="1px"
      borderColor={"secondary.700"}
    >
      <Box w={"10"} textColor="brand.400" cursor={"pointer"}>
        <GiHamburgerMenu />
      </Box>
      <Spacer />
      <HStack>
        <Box>
          <Image src="/assets/logo_icon.png" w={"5"} />
        </Box>
        <Text textColor={"white"} fontWeight="bold">
          $0.003
        </Text>
      </HStack>
      <Button
        w={{ base: "40", lg: "56" }}
        rounded={"xl"}
        size="md"
        textColor={"white"}
        bgGradient="linear(to-r, brand.800,brand.400,brand.400,brand.800)"
        _hover={{
          bgGradient: "linear(to-r, brand.800,brand.300, brand.300,brand.800)",
        }}
        _active={{
          opacity: 0.8,
        }}
      >
        Connect Wallet
      </Button>
    </HStack>
  );
};

export default Navbar;
