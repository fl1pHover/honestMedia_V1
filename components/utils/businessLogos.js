import React from "react";
import { Image, Link, Center } from "@chakra-ui/react";
import NextLink from "next/link";

const LinkBusinessLogo = ({ href, src, alt }) => {
     return (
          <>
               <Center>
                    <NextLink href={href} passHref scroll={false}>
                         <Link
                              fontWeight="bold"
                              className="solutionCard"
                              zIndex="1"
                         >
                              <Image
                                   src={src}
                                   alt={alt}
                                   w="full"
                                   h="50px"
                                   objectFit="contain"
                                   userSelect="unset"
                                   className="asd"
                              />
                         </Link>
                    </NextLink>
               </Center>
          </>
     );
};

export default LinkBusinessLogo;
