import React from "react";
import { Center, HStack, Stack, Text } from "@chakra-ui/react";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter, FaTelegram, FaDiscord } from "react-icons/fa";

const ConnectCard = () => {
  return (
    <Stack
      bgGradient={"linear(to-r,secondary.800,secondary.900)"}
      p={6}
      rounded="sm"
      spacing={6}
    >
      <Center>
        <Text textColor={"white"} fontWeight="bold" fontSize={"2xl"}>
          Connect with us
        </Text>
      </Center>
      <Center>
        <HStack textColor={"white"} spacing={6}>
          <RiFacebookCircleFill size={25} />
          <FiInstagram size={25} />
          <FaTwitter size={25} />
          <FaTelegram size={25} />
          <FaDiscord size={25} />
        </HStack>
      </Center>
    </Stack>
  );
};

export default ConnectCard;
