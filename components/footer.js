import React from "react";
import SectionLayout from "./layout/sectionLayout";
import { Stack, Text } from "@chakra-ui/react";

const Footer = () => {
     return (
          <SectionLayout>
               <Stack direction={{ base: "column", md: "row" }} w="50%">
                    <Text
                         textStyle="title"
                         textTransform="none"
                         fontWeight="normal"
                    >
                         Copyright © 2022 Lorem ipsum dolor sit amet.
                    </Text>

                    <Stack
                         direction="row"
                         justifyContent="space-between"
                         w="full"
                    >
                         <Text
                              textStyle="title"
                              textTransform="none"
                              fontWeight="normal"
                         >
                              Privacy Policy
                         </Text>{" "}
                         <Text
                              textStyle="title"
                              textTransform="none"
                              fontWeight="normal"
                         >
                              Terms of Use
                         </Text>
                    </Stack>
               </Stack>
          </SectionLayout>
     );
};

export default Footer;
