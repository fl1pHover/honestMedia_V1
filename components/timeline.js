import React, { Children } from "react";
import { Box, Stack, Text } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation } from "swiper";

import SectionHeader from "../components/utils/sectionHeader";
import SectionLayout from "./layout/sectionLayout";

const awarddb = [
     {
          year: "2015",
          awardTitle: "Web design",
          awardName: ["Website of the Day", "Mobile exelence"],
          awardTitle2: "CSS Design",
          awardName2: ["CSS of the Day", "CSS Mobile exelence"],
     },
     {
          year: "2016",
          awardTitle: "Web design",
          awardName: ["Honorable mention", "asdf"],
     },
     {
          year: "2017",
          awardTitle: "Web design",
          awardName: ["fghghjkg, sda", "asdf"],
     },
     {
          year: "2018",
          awardTitle: "Web design",
          awardName: ["Website of the Day", "Mobile exelence"],
          awardTitle2: "CSS Design",
          awardName2: ["CSS of the Day", "CSS Mobile exelence"],
     },
     {
          year: "2019",
          awardTitle: "Web design",
          awardName: ["Honorable mention", "asdf"],
     },
     {
          year: "2020",
          awardTitle: "Web design",
          awardName: ["fghghjkg, sda", "asdf"],
     },
];
const TimelineItem = () => {
     return (
          <>
               <Swiper
                    sliderPerView={4}
                    modules={[Navigation]}
                    navigation={true}
                    breakpoints={{
                         270: {
                              slidesPerView: 1,
                         },
                         790: {
                              slidesPerView: 2,
                         },
                         1200: {
                              slidesPerView: 3,
                         },
                         1280: {
                              slidesPerView: 4,
                         },
                    }}
               >
                    {awarddb.map(({ ...props }, index) => {
                         return (
                              <SwiperSlide key={index}>
                                   <Stack directio="column">
                                        <Text
                                             fontSize="30px"
                                             color="mainOrange"
                                             className="timeline__time"
                                             pb="25px"
                                        >
                                             {props.year}
                                        </Text>
                                        <Box>
                                             <Box mt="30px">
                                                  <Text
                                                       textStyle="quote"
                                                       fontWeight="bold"
                                                  >
                                                       {props.awardTitle}
                                                  </Text>
                                                  {props.awardName &&
                                                       props.awardName.map(
                                                            (a, i) => {
                                                                 return (
                                                                      <Text
                                                                           fontSize="18px"
                                                                           opacity="0.8"
                                                                           textTransform="none"
                                                                           my="10px"
                                                                           key={
                                                                                i
                                                                           }
                                                                      >
                                                                           {a}
                                                                      </Text>
                                                                 );
                                                            }
                                                       )}
                                             </Box>
                                             <Box mt="15px">
                                                  <Text
                                                       textStyle="quote"
                                                       fontWeight="bold"
                                                  >
                                                       {props.awardTitle2}
                                                  </Text>
                                                  {props.awardName2 &&
                                                       props.awardName2.map(
                                                            (a, i) => {
                                                                 return (
                                                                      <Text
                                                                           fontSize="18px"
                                                                           opacity="0.8"
                                                                           textTransform="none"
                                                                           my="10px"
                                                                           key={
                                                                                i
                                                                           }
                                                                      >
                                                                           {a}
                                                                      </Text>
                                                                 );
                                                            }
                                                       )}
                                             </Box>
                                        </Box>
                                   </Stack>
                              </SwiperSlide>
                         );
                    })}
               </Swiper>
          </>
     );
};
const Timeline = () => {
     return (
          <SectionLayout>
               <Box
                    mr={{ base: "0", xl: "-30%" }}
                    pb="50px"
                    // w="410px"
               >
                    <SectionHeader
                         miniTitle="OUR LATEST PROJECTS"
                         headerTitle="We Work to Craft Solid Products and Services For You"
                    />
                    <Box h="50px" />

                    <TimelineItem />
               </Box>
          </SectionLayout>
     );
};

export default Timeline;
