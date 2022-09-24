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

import SectionLayout from "../components/layout/sectionLayout";

import WebHeader from "../components/header";

import Solution from "../components/solution";

import Projects from "../components/projects";

import BusinessPartner from "../components/businessPartner";

import Marquees from "../components/utils/marquee";

import TimeLine from "../components/timeline";

import Project from "../components/utils/project";

import CountUpComp from "../components/countup";

import Review from "../components/review";

import ContactBanner from "../components/contactBanner";

import Profiles from "../components/profileCard";

export default function Home() {
     return (
          <Box as="main">
               {/* Center all of container */}
               <Box
                    as="section"
                    id="header"
                    className="name"
                    position="relative"
               >
                    <WebHeader />
               </Box>

               <Box
                    as="section"
                    id="solution"
                    my={{ base: "4em", md: "6em", lg: "8em" }}
               >
                    <Solution />
               </Box>

               {/*Spaces  */}
               <Box h={{ base: "1em", md: "1.5em", lg: "2em" }} />
               {/*Spaces  */}

               <Box as="section" id="business__partners">
                    <BusinessPartner />
               </Box>

               {/*Spaces  */}
               <Box h="50px" />
               {/*Spaces  */}

               <Box as="section" id="marquees">
                    <Marquees />
               </Box>

               <Box as="section" id="timeline">
                    <TimeLine />
               </Box>

               {/*Spaces  */}
               <Box h={{ base: "1em", md: "1.5em", lg: "2em" }} />
               {/*Spaces  */}

               <Box as="section" id="product__solution">
                    <Projects />
               </Box>

               {/*Spaces  */}
               <Box h={{ base: "1em", md: "1.5em", lg: "2em" }} />
               {/*Spaces  */}

               <Box bgColor="mainBlack" width="100vw" overflow="hidden">
                    <Box h={{ base: "4em", md: "6em", lg: "8em" }} />
                    <Profiles />
                    <Box h={{ base: "3em", md: "5em", lg: "6em" }} />
               </Box>

               <SectionLayout>
                    <Box h={{ base: "3em", md: "5em", lg: "6em" }} />
                    <CountUpComp />
                    <Box h={{ base: "3em", md: "5em", lg: "6em" }} />
                    <Review />
                    <Box h={{ base: "3em", md: "5em", lg: "6em" }} />
                    <ContactBanner href="/" />
                    <Box h={{ base: "4em", md: "6em", lg: "8em" }} />
               </SectionLayout>
          </Box>
     );
}
