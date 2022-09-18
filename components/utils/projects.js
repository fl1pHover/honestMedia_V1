import React from "react";
import { Stack, Text, Box, Link, Center, Image } from "@chakra-ui/react";
import NextLink from "next/link";
//
const Project = ({ id, title, header, src, href }) => {
     return (
          <>
               <NextLink href={href} passHref>
                    <Link
                         _hover={{
                              textDecoration: "none",
                         }}
                         className="project stroke__hover"
                    >
                         <Stack
                              direction="row"
                              alignItems="center"
                              pos="relative"
                              mb="30px"
                         >
                              <Text
                                   as="h1"
                                   textStyle="bigText_1"
                                   className="stroke__text"
                                   mr={{ base: "20px", md: "100px" }}
                              >
                                   0{id}/
                              </Text>
                              <Box>
                                   <Box h={{ base: "40px", md: "60px" }} />
                                   <Text textStyle="title" color="white">
                                        {title}
                                   </Text>
                                   <Text textStyle="mainMediumHeader_1" pt={2}>
                                        {header}
                                   </Text>
                              </Box>
                              <Image
                                   src={src}
                                   alt="case photo"
                                   className="project__image"
                              />
                         </Stack>
                    </Link>
               </NextLink>
          </>
     );
};

export default Project;
