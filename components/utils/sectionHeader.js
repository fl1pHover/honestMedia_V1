import React, { Children } from "react";
import { Box, Container, Text, Stack } from "@chakra-ui/react";
import MainCircleLink from "./mainLink";

const MainSection = ({ miniTitle, headerTitle }) => {
     return (
          <>
               <Box width="100%">
                    <Text textStyle="title">{miniTitle}</Text>
                    <Stack
                         direction={{ base: "column", md: "row" }}
                         justifyContent="space-between"
                         mt={2}
                    >
                         <Text
                              textStyle="mainMediumHeader"
                              width={{
                                   base: "100%",
                                   sm: "70%",
                                   md: "70%",
                                   lg: "70%",
                                   xl: "60%",
                              }}
                         >
                              {headerTitle}
                         </Text>
                    </Stack>
               </Box>
          </>
     );
};

export default MainSection;
