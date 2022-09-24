import React from "react";
import NextLink from "next/link";

import SectionLayout from "./layout/sectionLayout";
import {
     Stack,
     Text,
     Grid,
     GridItem,
     Box,
     Image,
     Input,
} from "@chakra-ui/react";
import Link from "next/link";

import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AddIcon } from "@chakra-ui/icons";

const footerIcon = [
     {
          href: "/",
          icons: "<FaFacebookF />",
     },
     { href: "/", icons: "<AiFillInstagram />" },
     { href: "/", icons: "<FaLinkedinIn />" },
];

const FooterLink = ({ linkText, href }) => {
     return (
          <NextLink href={href} passHref className="footer__service">
               <Link>
                    <Stack direction="row" alignItems="center">
                         <AddIcon className="plus__icon" />
                         <Text fontSize="18px" fontWeight="bold" color="white">
                              {linkText}
                         </Text>
                    </Stack>
               </Link>
          </NextLink>
     );
};

const Footer = () => {
     return (
          <>
               <Box backgroundColor="mainBlack" py="25px">
                    <SectionLayout>
                         <Box h={{ base: "2em", md: "3em", lg: "4em" }} />
                         <Grid
                              templateColumns={{
                                   base: "repeat(1,1fr)",
                                   lg: "repeat(8,1fr)",
                              }}
                         >
                              <GridItem colSpan={1}>
                                   <Image
                                        src="./images/logo-1.png"
                                        alt="logo"
                                   />
                              </GridItem>
                              <GridItem colSpan={2}>
                                   <Text
                                        textStyle="mainMediumText"
                                        fontWeight="bold"
                                        mb="1.3em"
                                   >
                                        Services
                                   </Text>
                                   <Box lineHeight="2">
                                        <FooterLink
                                             href="/"
                                             linkText="UI/UX Experience"
                                        />
                                        <FooterLink
                                             href="/"
                                             linkText="Digital Marking"
                                        />
                                        <FooterLink
                                             href="/"
                                             linkText="Web Development"
                                        />
                                        <FooterLink
                                             href="/"
                                             linkText="Product Design"
                                        />
                                   </Box>
                              </GridItem>
                              <GridItem colSpan={2}>
                                   <Text
                                        textStyle="mainMediumText"
                                        fontWeight="bold"
                                        mb="1.3em"
                                   >
                                        Subscribe
                                   </Text>
                                   <Box lineHeight="2">
                                        <Text fontSize="18px">
                                             27 Division St, New York, NY
                                        </Text>
                                        <Text fontSize="18px">10002</Text>
                                        <Text fontSize="18px">
                                             +1 800 123 456 789
                                        </Text>
                                        <Text fontSize="18px">
                                             bili@mail.com
                                        </Text>
                                   </Box>
                              </GridItem>
                              <GridItem colSpan={3}>
                                   <Text
                                        textStyle="mainMediumText"
                                        fontWeight="bold"
                                        mb="1em"
                                   >
                                        Contacts
                                   </Text>
                                   <Box>
                                        <Input
                                             variant="flushed"
                                             focusBorderColor="none"
                                             placeholder="extra small size"
                                             w="100%"
                                             backgroundColor="transparent"
                                             borderBottomColor="mainGrey"
                                             placeholder="Get news & Updates"
                                             color="white"
                                             fontSize="18px"
                                             fontWeight="bold"
                                             mb="30px"
                                        />
                                        <Text fontSize="14px" color="titleGrey">
                                             Our expertise, as well as our
                                             passion for web design, sets us
                                             apart from other agencies.
                                        </Text>
                                        <Stack
                                             direction="row"
                                             mt="20px"
                                             className="profile__social"
                                        >
                                             {footerIcon.map(
                                                  ({ ...props }, index) => {
                                                       return (
                                                            <NextLink
                                                                 href={
                                                                      props.href
                                                                 }
                                                                 passHref
                                                                 key={index}
                                                            >
                                                                 <Link
                                                                      fontSize="20px"
                                                                      _hover={{
                                                                           color: "mainOrange",
                                                                      }}
                                                                 >
                                                                      <a>
                                                                           {
                                                                                props.icon
                                                                           }
                                                                      </a>
                                                                 </Link>
                                                            </NextLink>
                                                       );
                                                  }
                                             )}
                                             {/* <NextLink href="/" passHref>
                                             <Link
                                                  fontSize="20px"
                                                  _hover={{
                                                       color: "mainOrange",
                                                  }}
                                             >
                                                  <FaFacebookF />
                                             </Link>
                                        </NextLink>
                                        <NextLink href="/" passHref>
                                             <Link
                                                  fontSize="20px"
                                                  _hover={{
                                                       color: "mainOrange",
                                                  }}
                                             >
                                                  <AiFillInstagram />
                                             </Link>
                                        </NextLink>
                                        <NextLink href="/" passHref>
                                             <Link
                                                  fontSize="20px"
                                                  _hover={{
                                                       color: "mainOrange",
                                                  }}
                                             >
                                                  <FaLinkedinIn />
                                             </Link>
                                        </NextLink> */}
                                        </Stack>
                                   </Box>
                              </GridItem>
                         </Grid>
                         <Box h={{ base: "2em", md: "3em", lg: "4em" }} />
                    </SectionLayout>
               </Box>
               <Box
                    border="1px"
                    borderColor="mainGrey"
                    py="30px"
                    borderLeft="none"
                    backgroundColor="mainBlack"
               >
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
                                        Copyright © 2022 Lorem ipsum dolor sit
                                        amet. All Rights Reserved
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
                                   </Stack>
                              </GridItem>
                         </Grid>
                    </SectionLayout>
               </Box>
          </>
     );
};

export default Footer;
