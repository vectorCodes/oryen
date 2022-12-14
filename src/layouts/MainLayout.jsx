import React from "react";
import { Box, Flex, Stack } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <Flex height="100vh" overflow="auto" bg="#12242d">
      <Box
        w="64"
        display={{
          base: "none",
          lg: "flex",
        }}
      >
        <Sidebar />
      </Box>
      <Box w="full">
        <Navbar />
        <Stack p={{ base: 4, lg: 6 }} spacing={4}>
          {children}
        </Stack>
      </Box>
      <Box position={"fixed"} bottom={{ base: -1, lg: 0 }} w="full">
        <Footer />
      </Box>
    </Flex>
  );
};

export default MainLayout;
