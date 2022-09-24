import Head from "next/head";

import {
     Heading,
     Stack,
     Center,
     Box,
     Text,
     Container,
     Link,
     Grid,
     GridItem,
     изт,
} from "@chakra-ui/react";
import NextLink from "next/link";

// Main Circle Links
import MainCircleLink from "../components/utils/mainLink";

// Mainsection Layout
import SectionHeader from "../components/utils/sectionHeader";

//SolutionCard
import SolutionCard from "../components/utils/solutionCard";

import SectionLayout from "../components/layout/sectionLayout";

import BusinessPartner from "../components/businessPartner";

import Marquees from "../components/utils/marquee";

import Project from "../components/utils/projects";

import CountUpComp from "../components/countup";

import Review from "../components/review";

import ContactBanner from "../components/contactBanner";

import Profiles from "../components/profileCard";

// Sidebar Info Links
const SideLink = ({ href, children }) => {
     return (
          <NextLink href={href} passHref>
               <Link _hover={{ textDecor: "none" }}>{children}</Link>
          </NextLink>
     );
};

export default function Home() {
     return (
          <Box as="main">
               {/* Center all of container */}
               <Center as="section" className="name" position="relative">
                    {/* Header Container */}
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
                                             With every single one of our
                                             clients, we bring forth a deep
                                             passion for creative problem
                                             solving — which is what we deliver.
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
               </Center>

               <Center as="section" id="solution" my="7em">
                    <SectionLayout>
                         <Stack
                              direction={{ base: "column", md: "row" }}
                              mb="40px"
                         >
                              <SectionHeader
                                   miniTitle="WHAT WE OFFER"
                                   headerTitle="Unlock Revenue Growth for Your Business"
                              />
                              <Box
                                   display="flex"
                                   alignItems="flex-end"
                                   align-content="flex-end"
                                   position="relative"
                                   mb="10px"
                              >
                                   <MainCircleLink href="/">
                                        View all services
                                   </MainCircleLink>
                              </Box>
                         </Stack>
                         <Box>
                              <SolutionCard my="30px" />
                         </Box>
                    </SectionLayout>
               </Center>

               <Center>
                    <SectionLayout>
                         <BusinessPartner />
                    </SectionLayout>
               </Center>

               <Box h="50px" />

               <Marquees />

               <Box h="50px" />

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

               <Box bgColor="mainBlack" width="100vw" overflow="hidden">
                    <Box h="120px" />
                    <SectionLayout>
                         <SectionHeader
                              miniTitle="MEET OUR PROFESSIONALS"
                              headerTitle="Team that Builds Ideas Driven by the Future"
                         />
                         <Profiles />
                    </SectionLayout>
                    <Box h="120px" />
               </Box>

               <SectionLayout>
                    <CountUpComp />
                    <Box h="100px" />
                    <Review />
                    <Box h="100px" position="relative" />
                    <ContactBanner href="/" />
                    <Box h="100px" />
               </SectionLayout>
          </Box>
     );
}
