import React, { Children } from "react";
import { Container, Box } from "@chakra-ui/react";

const SectionLayout = ({ children }) => {
     return (
          <Container
               variant={{
                    base: "base__container",
                    sm: "sm__container",
                    md: "md__container",
                    xl: "main__container",
               }}
          >
               <Box h="100px" />
               {children}
          </Container>
     );
};

export default SectionLayout;
