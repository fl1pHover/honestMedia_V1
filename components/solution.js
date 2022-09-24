import { Box, Stack } from "@chakra-ui/react";
import React from "react";

import SectionHeader from "../components/utils/sectionHeader";

import MainCircleLink from "./utils/mainLink";

import SolutionCard from "./utils/solutionCard";

import SectionLayout from "./layout/sectionLayout";

const Solution = () => {
     return (
          <SectionLayout>
               <Stack direction={{ base: "column", md: "row" }} mb="40px">
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
     );
};

export default Solution;
