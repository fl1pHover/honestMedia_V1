import { CloseIcon, HamburgerIcon, Search2Icon } from "@chakra-ui/icons";
import {
     Box,
     Center,
     IconButton,
     Image,
     Input,
     Link,
     ListItem,
     Stack,
     Text,
     UnorderedList,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React, { useState } from "react";

import { ChevronDownIcon } from "@chakra-ui/icons";

import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import SectionLayout from "./layout/sectionLayout";

const footerIcon = [
     {
          href: "/",
          icons: <FaFacebookF />,
     },
     { href: "/", icons: <AiFillInstagram /> },
     { href: "/", icons: <FaLinkedinIn /> },
];

const variants = {
     open: { opacity: 1, x: 0 },
     closed: { opacity: 0, x: "-100%" },
};

const LinkItem = ({ href, path, target, children, text, ...props }) => {
     const active = path === href;

     return (
          <NextLink href={href} passHref scroll={false}>
               <Link
                    p={2}
                    color="white"
                    target={target}
                    textTransform="uppercase"
                    fontWeight="bold"
                    _hover={{
                         textDecoration: "none",
                         color: "mainOrange",
                    }}
                    {...props}
               >
                    <Stack direction="row" alignItems="center">
                         <Text textStyle="title" color="inherit">
                              {text}
                         </Text>
                         {children}
                    </Stack>
               </Link>
          </NextLink>
     );
};

const Navbar = (props) => {
     const { path } = props;

     const [sidebar, setSidebar] = useState(false);
     const [mobilebar, setMobilebar] = useState(false);

     const showSidebar = () => setSidebar(!sidebar);
     const showMobilebar = () => setMobilebar(!mobilebar);

     return (
          <>
               <Box display={{ base: "block", xl: "none" }} py="25px">
                    <SectionLayout>
                         <Stack direction="row" justifyContent="space-between">
                              <Box w="25%" textAlign="left">
                                   <HamburgerIcon
                                        fontSize="25px"
                                        fontWeight="bold"
                                        color="white"
                                        onClick={showMobilebar}
                                        cursor="pointer"
                                   />
                              </Box>
                              <Box w="50%" textAlign="center">
                                   Bili
                              </Box>
                              <Box w="25%" textAlign="right">
                                   {""}
                              </Box>
                         </Stack>
                    </SectionLayout>
                    <Box
                         pos="fixed"
                         width={{ base: "85%", sm: "400px" }}
                         left="0"
                         top="0"
                         p="30px"
                         bg="bgGrey"
                         height="100vh"
                         mr="30px"
                         className={
                              mobilebar ? "mobilebar" : "mobilebar activeMobile"
                         }
                         zIndex="101"
                    >
                         <Stack
                              className="menu__btn-mobile"
                              onClick={showMobilebar}
                              cursor="pointer"
                         >
                              <span></span>
                              <span></span>
                              <span></span>
                         </Stack>
                         <Center>
                              <Text textStyle="mainMediumHeader">Bili</Text>
                         </Center>
                         <Box h="30px" />
                         <Stack direction="column">
                              <Text>asdasd</Text>
                              <Text>asdasd</Text>
                              <Text>asdasd</Text>
                              <Text>asdasd</Text>
                         </Stack>
                    </Box>
               </Box>
               <Box pos="relative" className="rel" zIndex="100">
                    <Box
                         id="navbar"
                         as="nav"
                         height="100px"
                         px="50px"
                         display={{ base: "none", xl: "block" }}
                    >
                         <Stack
                              direction="row"
                              justifyContent="space-between"
                              alignItems="center"
                              height="100%"
                         >
                              <Image
                                   boxSize="53px"
                                   objectFit="contain"
                                   src="../images/logo-1.png"
                                   alt="logo"
                              />
                              <Stack direction="row" gap={10}>
                                   <LinkItem href="/" path={path} text="Home">
                                        <ChevronDownIcon />
                                   </LinkItem>
                                   <LinkItem
                                        href="/portfolio"
                                        path={path}
                                        text="Portfolio"
                                   >
                                        <ChevronDownIcon />
                                   </LinkItem>
                                   <LinkItem
                                        href="/second"
                                        path={path}
                                        text="lorem"
                                   >
                                        <ChevronDownIcon />
                                   </LinkItem>
                              </Stack>
                              <Stack
                                   direction="row"
                                   alignItems="center"
                                   spacing={5}
                              >
                                   <IconButton
                                        aria-label="Menu"
                                        icon={<Search2Icon />}
                                        borderRadius="50%"
                                        fontSize="18px"
                                        bg="tranparent"
                                        _hover={{
                                             bgColor: "transparent",
                                        }}
                                   />
                                   <Center
                                        className="menu__btn"
                                        onClick={showSidebar}
                                   >
                                        <Stack
                                             position="relative"
                                             className="menu__btn-wrap"
                                             overflow="hidden"
                                        >
                                             {/* <span></span> */}
                                             <span></span>
                                             <span></span>
                                             <span></span>
                                        </Stack>
                                   </Center>
                              </Stack>
                         </Stack>
                    </Box>

                    <Box
                         pos="fixed"
                         width="480px"
                         right="0"
                         p="50px"
                         bg="mainBlack"
                         height="100vh"
                         className={sidebar ? "sidebar" : "sidebar active"}
                         zIndex="101"
                    >
                         <IconButton
                              aria-label="Menu"
                              icon={<CloseIcon />}
                              borderRadius="50%"
                              w="60px"
                              h="60px"
                              bg="mainGrey"
                              fontSize="15px"
                              pos="absolute"
                              transform="translate(-140px, -25px)"
                              transition="0.1s ease"
                              _hover={{
                                   fontSize: "18px",
                              }}
                              onClick={showSidebar}
                         />

                         <Image
                              src="./images/logo-1.png"
                              alt="logo"
                              width="50px"
                              mt="50px"
                              mb="25px"
                         />
                         <Text
                              textStyle="quote"
                              lineHeight="1.4"
                              fontWeight="bold"
                              my={10}
                         >
                              Unique Digital Ideas for Successful Business
                         </Text>
                         <Box my={7}>
                              <Text textStyle="title" mb={3}>
                                   Contact us
                              </Text>
                              <UnorderedList lineHeight="2">
                                   <ListItem>
                                        27 Division St, New York, NY 10002
                                   </ListItem>
                                   <ListItem>+1 800 123 456 78</ListItem>
                                   <ListItem>bili@mail.com</ListItem>
                              </UnorderedList>
                         </Box>
                         <Box my={10}>
                              <Text textStyle="title" mb={3}>
                                   Subscribe
                              </Text>
                              <Input
                                   variant="flushed"
                                   focusBorderColor="none"
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
                                   Our expertise, as well as our passion for web
                                   design, sets us apart from other agencies.
                              </Text>
                              <Stack
                                   direction="row"
                                   mt="50px"
                                   className="profile__social"
                                   gap={3}
                              >
                                   {footerIcon.map(({ ...props }, index) => {
                                        return (
                                             <NextLink
                                                  href="/"
                                                  passHref
                                                  key={index}
                                             >
                                                  <Link
                                                       fontSize="20px"
                                                       _hover={{
                                                            color: "mainOrange",
                                                       }}
                                                  >
                                                       {props.icons}
                                                  </Link>
                                             </NextLink>
                                        );
                                   })}
                              </Stack>
                         </Box>
                    </Box>
               </Box>
          </>
     );
};

export default Navbar;
