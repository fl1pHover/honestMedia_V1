import React from "react";
import { Grid, GridItem, Text, Stack } from "@chakra-ui/react";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Counting = ({ end, children, thousand }) => {
     return (
          <GridItem w="100%">
               <Stack
                    direction="row"
                    alignItems="center"
                    text-align="flex-end"
                    justifyContent="center"
               >
                    <CountUp end={end} duration={1} redraw={false}>
                         {({ countUpRef, start }) => (
                              <VisibilitySensor onChange={start} delayedCall>
                                   <Text
                                        fontSize="130px"
                                        fontWeight="bold"
                                        lineHeight="1.2"
                                        className="stroke__text"
                                        opacity="0.5"
                                        ref={countUpRef}
                                   />
                              </VisibilitySensor>
                         )}
                    </CountUp>
                    <Text
                         fontSize="130px"
                         fontWeight="bold"
                         lineHeight="1.2"
                         className="stroke__text"
                         opacity="0.5"
                         marginInlineStart={0}
                    >
                         {thousand}
                    </Text>
                    <Text
                         fontSize="18px"
                         fontWeight="bold"
                         color="white"
                         textTransform="none"
                         pos="relative"
                         left="-10%"
                         pt={4}
                    >
                         {children}
                    </Text>
               </Stack>
          </GridItem>
     );
};

const CountUpComp = () => {
     return (
          <>
               <Grid
                    templateColumns={{
                         base: "repeat(1,1fr)",
                         md: "repeat(2,1fr)",
                         xl: "repeat(4,1fr)",
                    }}
                    gap={6}
               >
                    <Counting end="10">
                         Years of <br /> Experience
                    </Counting>

                    <Counting end="18">
                         Skilled <br /> Professional
                    </Counting>
                    <Counting end="32">
                         Visited <br /> Conference
                    </Counting>

                    <Counting end="1" thousand="K">
                         Projects <br /> WorldWide
                    </Counting>
               </Grid>
          </>
     );
};

export default CountUpComp;
