import React from "react";
import { Stack, Text, SimpleGrid } from "@chakra-ui/react";

const MarketCard = () => {
  return (
    <SimpleGrid
      p="4"
      css={{
        borderStyle: "solid",
        borderWidth: "1.5px",
        borderImageSlice: 1,
        borderImageSource:
          "linear-gradient(to right, #00694a, #48b69a, #00694a)",
      }}
      borderColor="brand.700"
      columns={[1, 1, 2, 4]}
      textColor="brand.400"
    >
      <Stack spacing={0}>
        <Text>Marketcap</Text>
        <Text
          fontWeight={"bold"}
          textColor="white"
          fontSize={{ base: "2xl", lg: "3xl" }}
        >
          $11.97M
        </Text>
      </Stack>
      <Stack spacing={0}>
        <Text>Marketcap</Text>
        <Text
          fontWeight={"bold"}
          textColor="white"
          fontSize={{ base: "2xl", lg: "3xl" }}
        >
          38.35B
        </Text>
      </Stack>
      <Stack spacing={0}>
        <Text>Marketcap</Text>
        <Text
          fontWeight={"bold"}
          textColor="white"
          fontSize={{ base: "2xl", lg: "3xl" }}
        >
          82K
        </Text>
      </Stack>
      <Stack spacing={0}>
        <Text>Marketcap</Text>
        <Text
          fontWeight={"bold"}
          textColor="white"
          fontSize={{ base: "2xl", lg: "3xl" }}
        >
          $0.0003
        </Text>
      </Stack>
    </SimpleGrid>
  );
};

export default MarketCard;
