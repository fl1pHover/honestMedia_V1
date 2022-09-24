import { Box, Image, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

import MainCircleLink from "./utils/mainLink";
import SectionHeader from "../components/utils/sectionHeader";

import SectionLayout from "./layout/sectionLayout";

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

const Projects = () => {
     return (
          <>
               <SectionLayout>
                    <Stack direction={{ base: "column", md: "row" }}>
                         <SectionHeader
                              miniTitle="OUR LATEST PROJECTS"
                              headerTitle="We Work to Craft Solid Products and Services For You"
                         />
                         <Box
                              display="flex"
                              alignItems="flex-end"
                              align-content="flex-end"
                              position="relative"
                              mb="10px"
                         >
                              <MainCircleLink href="/">
                                   View all cases
                              </MainCircleLink>
                         </Box>
                    </Stack>
                    <Box h="30px" />
                    <Box>
                         <Project
                              href="/"
                              id="1"
                              src="/images/projects/case1.jpg"
                              title="Development | Technology"
                              header="Technology Process"
                         />
                         <Project
                              href="/"
                              id="2"
                              src="/images/projects/case2.jpg"
                              title="Technology"
                              header="UI for Music Website"
                         />
                         <Project
                              href="/"
                              id="3"
                              src="/images/projects/case3.jpg"
                              title="Development | Design"
                              header="Website for Agency"
                         />
                    </Box>
               </SectionLayout>
          </>
     );
};

export default Projects;
