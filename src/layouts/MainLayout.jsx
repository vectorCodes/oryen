import React from "react";
import { Box, Flex, Stack } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <Flex height="100vh" overflow="hidden" bg="#12242d">
      <Box w="64">
        <Sidebar />
      </Box>
      <Box w="full">
        <Navbar />
        <Stack p={6} spacing={4}>
          {children}
        </Stack>
      </Box>
      <Box position={"fixed"} bottom={0} w="full">
        <Footer />
      </Box>
    </Flex>
  );
};

export default MainLayout;
