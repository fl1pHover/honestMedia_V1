import React from "react";
import Marquee from "react-fast-marquee";
import { Text, Box, Image } from "@chakra-ui/react";
const StrokeMarquee = () => {
     return (
          <Marquee
               speed="80"
               gradientColor={[24, 24, 24]}
               gradientWidth="400px"
          >
               <Text textStyle="bigText" gap="1em">
                    <span className="stroke__text">
                         eCommerse _ Marketing _SEO&nbsp;
                    </span>
               </Text>
          </Marquee>
     );
};

const Marquees = ({ marqueeColor }) => {
     return (
          <>
               <Marquee
                    speed="70"
                    gradientColor={[24, 24, 24]}
                    gradientWidth="400px"
               >
                    <Text textStyle="bigText" gap="1em" userSelect="unset">
                         <span>
                              _ Branding Strategy _ Photography Web Development
                              _ UI/UX&nbsp;
                         </span>
                    </Text>
               </Marquee>
               <StrokeMarquee />
          </>
     );
};

export default Marquees;
