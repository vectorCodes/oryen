import React from "react";
import { Button, Image, Spacer, HStack, Heading } from "@chakra-ui/react";

const Footer = () => {
  return (
    <HStack p={4} spacing={6} bg="secondary.900" w="full" opacity={0.8}>
      <Image src="/assets/logo.png" w={"24"} />
      <Spacer />
      <HStack>
        <Image src="/assets/logo_icon.png" w="6" />
        <Heading color="white" size="md">
          $0.5443
        </Heading>
      </HStack>
      <Button
        w={"56"}
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

export default Footer;
