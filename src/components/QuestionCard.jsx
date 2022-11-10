import React from "react";
import { Box, HStack, Text, Button, Image, Stack } from "@chakra-ui/react";

const QuestionCard = () => {
  return (
    <HStack
      bgGradient={"linear(to-r,secondary.900,secondary.700)"}
      rounded={"sm"}
      p={6}
      spacing={6}
    >
      <Box>
        <Image src="/assets/logo_icon.png" />
      </Box>
      <Stack spacing={5}>
        <Text textColor={"white"} fontWeight="bold" fontSize={"3xl"}>
          Still got questions?
        </Text>
        <Button colorScheme={"brand"} rounded="lg">
          More Details
        </Button>
      </Stack>
    </HStack>
  );
};

export default QuestionCard;
