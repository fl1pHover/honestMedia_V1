import { Box, Center, Container, Stack, Link, Text } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

// Sidebar Info Links
const SideLink = ({ href, children }) => {
     return (
          <NextLink href={href} passHref>
               <Link _hover={{ textDecor: "none" }}>{children}</Link>
          </NextLink>
     );
};

import MainCircleLink from "./utils/mainLink";

const WebHeader = () => {
     return (
          <Container variant="main__container" pr="30px">
               {/* YTop Sized Box */}
               <Box h="15em"></Box>

               {/* Side Contact info */}
               <Stack
                    position="absolute"
                    direction="row"
                    textStyle="mainMediumText"
                    className="header__side-info"
                    whiteSpace="nowrap"
               >
                    <SideLink href="/">+976 999 999 99</SideLink>

                    <Box h={{ base: "3em", md: "10em" }}></Box>

                    <SideLink href="/">random@gmail.com</SideLink>
               </Stack>

               {/* Main Big Header */}
               <Stack
                    as="header"
                    direction="column"
                    display="flex"
                    justifyContent="center"
                    // maxW="100%"
               >
                    <Box
                         as="h1"
                         textStyle="mainBiggerHeader"
                         textAlign="center"
                    >
                         Develop
                    </Box>
                    <Stack direction={{ base: "column", xl: "row" }}>
                         <Box
                              as="h1"
                              textStyle="mainBiggerHeader"
                              textAlign="center"
                              whiteSpace="nowrap"
                         >
                              the Digital
                         </Box>
                         <Center maxW="450px" mx="auto">
                              <Text
                                   textStyle="mainMediumText"
                                   width="450px"
                                   mt={{ base: "2em", xl: "25px" }}
                                   ml={{ base: "0", xl: "40px" }}
                              >
                                   With every single one of our clients, we
                                   bring forth a deep passion for creative
                                   problem solving — which is what we deliver.
                              </Text>
                         </Center>
                    </Stack>
                    <Text
                         as="h1"
                         textStyle="mainBiggerHeader"
                         textAlign="center"
                    >
                         Universe
                    </Text>
               </Stack>

               <Box
                    position="absolute"
                    left="0"
                    bottom="2em"
                    ml={{ base: "20px", sm: "50px" }}
               >
                    <MainCircleLink
                         position="absolute"
                         left="0"
                         bottom="2em"
                         href="/"
                    >
                         Get in touch
                    </MainCircleLink>
               </Box>

               {/* Bottom Sized Box */}
               <Box h="10em"></Box>
          </Container>
     );
};

export default WebHeader;
