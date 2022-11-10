import React, { useState } from "react";
import {
  Center,
  Text,
  Box,
  HStack,
  Stack,
  Image,
  Fade,
  Spacer,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import { SidebarItems } from "../constants/sidebar-items";

const SidebarItem = ({ icon, label, active, extended }) => {
  return (
    <Box
      px={4}
      py={4}
      userSelect={"none"}
      cursor={"pointer"}
      _hover={{
        color: "brand.500",
      }}
    >
      <HStack color={active ? "brand.300" : "brand.600"} fontWeight="semibold">
        <Box>{icon}</Box>
        <Text>{label}</Text>
        <Spacer />
        {extended && (
          <Box>
            <FiChevronDown />
          </Box>
        )}
      </HStack>
    </Box>
  );
};

const Sidebar = () => {
  const [opened, setOpened] = useState(-1);
  const sections = Object.keys(SidebarItems);

  return (
    <Box
      h="100vh"
      overflow="auto"
      borderRightWidth="1px"
      borderColor="secondary.700"
    >
      <Center
        p={4}
        borderBottomWidth="1px"
        borderColor="secondary.700"
        shadow="lg"
      >
        <Image w="24" src="/assets/logo.png" alt="Oryen" />
      </Center>
      <Stack spacing={6}>
        {sections.map((section, sectionIndex) => {
          return (
            <Box key={section}>
              {section && (
                <Text color="brand.400" fontWeight="bold" px={4} fontSize={12}>
                  {section}
                </Text>
              )}
              {SidebarItems[section].map((item, itemIndex) => {
                return (
                  <>
                    <Box
                      key={item.label}
                      onClick={() => {
                        if (opened === item.label) {
                          setOpened("");
                        } else {
                          setOpened(item.label);
                        }
                      }}
                    >
                      <SidebarItem
                        active={sectionIndex === 0 && itemIndex === 0}
                        key={item.label}
                        {...item}
                      />
                    </Box>
                    {item.extended && opened === item.label && (
                      <Fade in={opened === item.label}>
                        <Box ml={2}>
                          {item.extended.map((subItem) => {
                            return (
                              <SidebarItem key={subItem.label} {...subItem} />
                            );
                          })}
                        </Box>
                      </Fade>
                    )}
                  </>
                );
              })}
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Sidebar;
