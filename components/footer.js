import React from "react";
import SectionLayout from "./layout/sectionLayout";
import { Stack, Text, Grid, GridItem, Box } from "@chakra-ui/react";

const Footer = () => {
     return (
          <Box backgroundColor="mainBlack" py="25px">
               <SectionLayout>
                    <Grid
                         templateColumns={{
                              base: "repeat(1,1fr)",
                              lg: "repeat(2,1fr)",
                         }}
                    >
                         <GridItem mb={{ base: "20px", lg: "0" }}>
                              <Text
                                   textStyle="title"
                                   textTransform="none"
                                   fontWeight="normal"
                                   textAlign="center"
                              >
                                   Copyright © 2022 Lorem ipsum dolor sit amet.
                                   All Rights Reserved
                              </Text>
                         </GridItem>

                         <GridItem>
                              <Stack
                                   direction="row"
                                   justifyContent="space-evenly"
                              >
                                   <Text
                                        textStyle="title"
                                        textTransform="none"
                                        fontWeight="normal"
                                   >
                                        Terms of Use
                                   </Text>
                                   <Text
                                        textStyle="title"
                                        textTransform="none"
                                        fontWeight="normal"
                                   >
                                        Privacy Policy
                                   </Text>
                              </Stack>
                         </GridItem>
                    </Grid>
               </SectionLayout>
          </Box>
     );
};

export default Footer;
