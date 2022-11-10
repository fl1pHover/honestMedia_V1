import { Box, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

const ScrollTop = () => {
     const [scrolled, setScrolled] = useState(false);

     useEffect(() => {
          const handleScroll = () => {
               setScrolled(window.scrollY > 200);
               // else !setSticky(window.scrollY > 0);
          };
          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
     });

     const top = () => {
          window.scrollTo(0, 0);
     };
     return (
          <Box pos={"fixed"} bottom="70px" right={"50px"} zIndex="999">
               <Button
                    classname={!scrolled ? "hidden scroll__top" : "scroll__top"}
                    opacity={!scrolled ? "0" : "1"}
                    // display={!scrolled ? "none" : "block"}
                    transition="0.3s ease"
                    transform={
                         !scrolled ? "translateY(100px)" : "translateY(0px)"
                    }
                    onClick={top}
                    boxShadow="base"
                    rounded="50%"
                    width="60px"
                    height="60px"
                    bg={"mainGrey"}
                    _hover={{
                         bgColor: "mainBlue",
                    }}
               >
                    <HiArrowUp color="white" fontSize={"50px"} />
               </Button>
          </Box>
     );
};

export default ScrollTop;
