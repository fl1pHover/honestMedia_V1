import React from "react";
import {
     Grid,
     GridItem,
     Box,
     Link,
     Center,
     Text,
     textDecoration,
} from "@chakra-ui/react";
import NextLink from "next/link";

const LinkSolutionCard = ({
     href,
     children,
     backgroundImage,
     cardMb,
     cardMt,
}) => {
     return (
          <GridItem
               w="100%"
               // bgImage="/images/cards/card_1.jpg"
               bgImage={backgroundImage}
               display="grid"
               placeItems="center"
               bgRepeat="no-repeat"
               textAlign="center"
               objectFit="cover"
               bgSize="cover"
               // mb="100px"
               mb={cardMb}
               mt={cardMt}
               className="gridImage"
          >
               <NextLink href={href} passHref scroll={false}>
                    <Link
                         fontWeight="bold"
                         w="full"
                         h="full"
                         _hover={{ textDecoration: "none" }}
                         className="solutionCard"
                         zIndex="1"
                    >
                         <Box pt="190px" pb="172px" textStyle="cardTitle">
                              <Center>
                                   <Text as="h3">{children}</Text>
                              </Center>
                         </Box>
                    </Link>
               </NextLink>
          </GridItem>
     );
};

const SolutionCard = ({ children }) => {
     return (
          <>
               <Grid
                    templateColumns={{
                         base: "repeat(1, 1fr)",
                         md: "repeat(3, 1fr)",
                    }}
                    gap="40px"
               >
                    <LinkSolutionCard
                         href="/asd"
                         backgroundImage="/images/cards/card_1.jpg"
                         cardMt="0"
                         cardMb={{ base: "0px", md: "100px" }}
                    >
                         Mobile Solutions
                    </LinkSolutionCard>
                    <LinkSolutionCard
                         href="/"
                         backgroundImage="/images/cards/card_2.jpg"
                         cardMt={{ base: "0px", md: "50px" }}
                         cardMb={{ base: "0px", md: "50px" }}
                    >
                         Web Solutions
                    </LinkSolutionCard>
                    <LinkSolutionCard
                         href="/"
                         backgroundImage="/images/cards/card_3.jpg"
                         cardMt={{ base: "0px", md: "100px" }}
                         cardMb="0px"
                    >
                         Custom Solutions
                    </LinkSolutionCard>
               </Grid>
          </>
     );
};

export default SolutionCard;
