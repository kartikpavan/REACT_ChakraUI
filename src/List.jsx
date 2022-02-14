import React, { useEffect, useState } from "react";
import data from "./Data";
import {
  Box,
  Image,
  Text,
  SimpleGrid,
  Badge,
  Flex,
  Button,
  Center,
  Grid,
  GridItem,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";
import { MdStar, MdPhoneEnabled, MdMail } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";

function List() {
  const [alert, setAlert] = useState(false);

  const clickHandler = () => {
    setAlert(true);
  };

  return (
    <div>
      {alert ? (
        <Alert status="success">
          <AlertIcon />
          <Box flex="1">
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription display="block">
              Thank You for showing intrest. We will get back to you within the
              next 48 hours.
            </AlertDescription>
          </Box>
          <CloseButton
            position="absolute"
            right="8px"
            top="8px"
            onClick={() => setAlert(false)}
          />
        </Alert>
      ) : null}

      <SimpleGrid minChildWidth="600px" spacingX="10px" spacingY="10px">
        {data.map((item, index) => {
          const { status, interior, title, price, rating } = item;
          return (
            <Box
              key={index}
              maxW="md"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              m="6"
              ml="20"
              p="5"
            >
              <Image
                src="https://bit.ly/2Z4KKcF"
                alt="Rear view"
                borderRadius="lg"
              ></Image>
              <Flex my="2">
                <Badge colorScheme="blue" px="2">
                  {status}
                </Badge>
                <Text fontWeight="bold" color="#787878" ml="3">
                  {interior}
                </Text>
              </Flex>
              <Text
                fontSize="1.5rem"
                fontFamily="Helvetica"
                fontWeight="semibold"
                color="black"
                lineHeight="short"
              >
                {title}
              </Text>
              <Text fontWeight="light" fontSize="1.20rem" mt="2">
                ${price}
              </Text>
              <Flex mt="2">
                <Box as={MdStar} mt="0.5" color="orange.400" />
                <Text ml={1} fontSize="sm">
                  <b>{rating}</b> (190)
                </Text>
              </Flex>
              <Flex mt="1" align="end" py="1">
                <button>
                  {" "}
                  <Center
                    as="button"
                    w="40px"
                    h="33px"
                    bg="teal"
                    color="white"
                    borderRadius="md"
                  >
                    <MdPhoneEnabled />
                  </Center>
                </button>

                <Center
                  as="button"
                  w="40px"
                  h="33px"
                  bg="teal"
                  color="white"
                  ml="2"
                  borderRadius="md"
                >
                  <MdMail />
                </Center>
                <Button
                  borderRadius="md"
                  colorScheme="teal"
                  mt="1"
                  size="sm"
                  variant="outline"
                  rightIcon={<AiOutlineArrowRight />}
                  ml="2"
                  onClick={clickHandler}
                >
                  Book Now
                </Button>
              </Flex>
            </Box>
          );
        })}
      </SimpleGrid>
    </div>
  );
}

export default List;
