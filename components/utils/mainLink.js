import React from "react";
import { Box, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const MainCircleLink = ({ children, href }) => {
     return (
          <>
               <Box
                    className="mainLink"
                    // position="absolute"
                    // left="0"
                    // bottom="2em"
                    // ml={{ base: "20px", xl: "40px" }}
                    marginTop={5}
               >
                    <NextLink href={href} passHref>
                         <Link
                              textStyle="mainLink"
                              _hover={{
                                   textDecoration: "none",
                              }}
                         >
                              {children}
                         </Link>
                    </NextLink>
               </Box>
          </>
     );
};

export default MainCircleLink;
