import React from "react";
import { Box, Text, HStack, Spacer, Image } from "@chakra-ui/react";

const LiquidityCard = ({ title, percent, price }) => {
  return (
    <HStack
      px={4}
      py={2}
      borderWidth="1px"
      borderColor={"brand.500"}
      alignItems="flex-start"
      position={"relative"}
    >
      <Box>
        <Text textColor={"brand.400"}>{title}</Text>
        <Text fontWeight={"bold"} textColor="white" fontSize={"2xl"}>
          ${price}
        </Text>
      </Box>
      <Spacer />
      <Text textColor={"red"}>{percent}</Text>
      <Box position={"absolute"} top={-4} left={-3}>
        <Image src="/assets/single_glow.png" w={"28"} />
      </Box>
    </HStack>
  );
};

export default LiquidityCard;
