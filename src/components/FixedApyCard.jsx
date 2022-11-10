import React from "react";
import {
  Box,
  Stack,
  Text,
  SimpleGrid,
  HStack,
  Spacer,
  Image,
} from "@chakra-ui/react";
import { TiTick } from "react-icons/ti";

const FixedApyCard = ({ label, percent, description }) => {
  return (
    <HStack
      p={{ base: 2, lg: 4 }}
      pb={6}
      borderWidth="1px"
      borderColor="brand.500"
      position="relative"
    >
      <Stack spacing={0}>
        <HStack spacing={1} bg="transparent" rounded={"sm"} p={2}>
          <Box bg="brand.400" textColor={"black"} rounded="full">
            <TiTick />
          </Box>
          <Text textColor={"brand.400"} fontSize="sm">
            {label}
          </Text>
        </HStack>
        <Text
          fontWeight={"bold"}
          fontSize={{ base: "xl", lg: "3xl" }}
          textColor={"white"}
        >
          {percent}
        </Text>
        <Text textColor={"white"}>{description}</Text>
        <Box position={"absolute"} top={{ base: -2, lg: 2 }} left={-7}>
          <Image src="/assets/fixed_glow.png" />
        </Box>
      </Stack>

      <Box position={"absolute"} right={0} top={{ base: 2, lg: -5 }}>
        <Image src="/assets/circle.png" w={{ base: "28", lg: "auto" }} />
      </Box>
    </HStack>
  );
};

export default FixedApyCard;
