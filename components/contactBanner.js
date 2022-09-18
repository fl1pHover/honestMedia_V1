import React from "react";
import NextLink from "next/link";
import { Box, Link, Center, Text, Stack } from "@chakra-ui/react";

const ContactBanner = ({ href }) => {
     return (
          <>
               <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
               >
                    <Text textStyle="bigText">
                         Get in
                         <span className="stroke__text"> Touch</span>
                    </Text>
                    <Box
                         h="200px"
                         w="200px"
                         display="grid"
                         placeItems="center"
                         backgroundColor="#303030"
                         borderRadius="50%"
                         transition="0.4s ease"
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
