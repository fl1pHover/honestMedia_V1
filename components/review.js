import React from "react";
import NextLink from "next/link";
import { Stack, Image, Text, Box } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PersonalReview = ({ image, name, job, quote }) => {
     return (
          <Stack direction={{ base: "column", md: "row" }}>
               <Stack
                    direction={{ base: "row", md: "column" }}
                    width={{ base: "100%", md: "30%" }}
                    alignItems="center"
               >
                    <Image
                         src={image}
                         w={{ base: "100px", md: "170px" }}
                         h={{ base: "100px", md: "170px" }}
                         mr={{ base: "30px", md: "0px" }}
                         borderRadius="50%"
                         mb={{ md: "30px" }}
                    />
                    <Box>
                         <Text fontSize="24px" fontWeight="bold">
                              {name}
                         </Text>
                         <Text textStyle="title" color="mainOrange">
                              {job}
                         </Text>
                    </Box>
               </Stack>
               <Stack direction="column" width={{ base: "100%", md: "70%" }}>
                    <Text as="h4" textStyle="quote">
                         {quote}
                    </Text>
               </Stack>
          </Stack>
     );
};

// import required modules
import { Navigation } from "swiper";
import { Pagination } from "swiper";

const Review = () => {
     return (
          <Box pos="relative" padding-bottom="100px">
               <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    navigation={false}
                    pagination={true}
                    loop={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
               >
                    <SwiperSlide>
                         <PersonalReview
                              image="/images/pro/pro1.jpg"
                              name="Megan Olson"
                              job="Client of Agency"
                              quote="Lorem ipsum dolor sit amet consectetur adipisicing
                         elit. Molestiae atque aperiam, rerum pariatur ea saepe
                         nemo. Error ex et dolor reprehenderit amet similique,
                         quos"
                         />
                    </SwiperSlide>
                    <SwiperSlide>
                         <PersonalReview
                              image="/images/pro/pro2.jpg"
                              name="Monica Regan"
                              job="Client of Agency"
                              quote="Lorem ipsum dolor sit amet consectetur adipisicing
                         elit. Molestiae atque aperiam, rerum pariatur ea saepe
                         nemo. Error ex et dolor reprehenderit amet similique,
                         quos"
                         />
                    </SwiperSlide>
               </Swiper>
          </Box>
     );
};

export default Review;
