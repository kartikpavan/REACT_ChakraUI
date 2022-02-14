import React from "react";
import { Box, Button, Heading, Spacer, Flex } from "@chakra-ui/react";

function navbar() {
  return (
    <div>
      <Flex p="2" bg="#1D4044" px="4">
        <Box>
          <Heading size="md" fontSize="1.75rem" color="#fff">
            Maxin Properties
          </Heading>
        </Box>
        <Spacer />
        <Box>
          <Button size="md" colorScheme="teal" mr="4">
            Sign Up
          </Button>
          <Button size="md">Log In</Button>
        </Box>
      </Flex>
    </div>
  );
}

export default navbar;
