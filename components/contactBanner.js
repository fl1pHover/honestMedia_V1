import React from "react";
import NextLink from "next/link";
import { Box, Link, Center, Text, Stack } from "@chakra-ui/react";

const ContactBanner = ({ href }) => {
     return (
          <>
               <Stack
                    direction={{ base: "column", xl: "row" }}
                    justifyContent="space-between"
                    alignItems="flex-start"
               >
                    <Text textStyle="bigText" lineHeight="1.3">
                         Get in
                         <span className="stroke__text"> Touch</span>
                    </Text>
                    <Box
                         height={{ base: "auto", xl: "200px" }}
                         width={{ base: "auto", xl: "200px" }}
                         px={{ base: "40px", xl: "0" }}
                         py={{ base: "15px", xl: "0" }}
                         display="grid"
                         placeItems="center"
                         backgroundColor="#303030"
                         borderRadius={{ base: "30px", xl: "50%" }}
                         transition="0.4s ease"
                         whiteSpace="nowrap"
                         textAlign="left"
                         _hover={{
                              backgroundColor: "mainOrange",
                         }}
                    >
                         <NextLink href={href} passHref>
                              <Link>
                                   <Text textStyle="title" color="white">
                                        send us message
                                   </Text>
                              </Link>
                         </NextLink>
                    </Box>
               </Stack>
          </>
     );
};

export default ContactBanner;
