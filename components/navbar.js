import React from "react";
import {
     Box,
     Stack,
     Image,
     Link,
     Icon,
     Center,
     useColorModeValue,
     Button,
     IconButton,
} from "@chakra-ui/react";
import { Search2Icon, HamburgerIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

const LinkItem = ({ href, path, target, children, ...props }) => {
     const active = path === href;

     return (
          <NextLink href={href} passHref scroll={false}>
               <Link
                    p={2}
                    color={active ? "#202023" : "mainOrange"}
                    target={target}
                    textTransform="uppercase"
                    fontWeight="bold"
                    {...props}
               >
                    {children}
               </Link>
          </NextLink>
     );
};

const Navbar = (props) => {
     const { path } = props;

     return (
          <Box pos="relative" className="rel">
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
                         <Box>
                              <LinkItem href="/" path={path}>
                                   Home
                              </LinkItem>
                              <LinkItem href="/portfolio" path={path}>
                                   Portfolio
                              </LinkItem>
                         </Box>
                         <Stack direction="row" alignItems="center" spacing={5}>
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
                              <IconButton
                                   aria-label="Menu"
                                   icon={<HamburgerIcon />}
                                   borderRadius="50%"
                                   w="60px"
                                   h="60px"
                                   fontSize="25px"
                              />
                         </Stack>
                    </Stack>
               </Box>
          </Box>
     );
};

export default Navbar;
