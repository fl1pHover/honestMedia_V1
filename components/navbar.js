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
                         <Stack direction="row" alignItems="center" spacing={8}>
                              <Icon as={Search2Icon} w={5} h={5} />
                              <Icon as={Search2Icon} w={5} h={5} />

                              <Button leftIcon={<Search2Icon />}>
                                   {" "}
                                   <Center
                                        p={4}
                                        bgColor="mainGrey"
                                        rounded="50%"
                                   >
                                        <Icon as={HamburgerIcon} w={6} h={6} />
                                   </Center>
                              </Button>
                         </Stack>
                    </Stack>
               </Box>
          </Box>
     );
};

export default Navbar;
