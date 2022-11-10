import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Box, Link, Text } from "@chakra-ui/react";
import { Navigation } from "swiper";

const SwiperItem = (id) => {
     return (
          <Link href={`/lorem/${id}`}>
               <Box height={"178px"} background="grey" rounded={5}>
                    Slide 1
               </Box>
          </Link>
     );
};

const SwiperWrapper = () => {
     return (
          <Box mx={10} pt={"10vh"}>
               <Box mt={3}>
                    <Text textStyle={"mainMediumText"}>Lorem, ipsum.</Text>
                    <Swiper
                         slidesPerView={6}
                         spaceBetween={10}
                         navigation={true}
                         modules={[Navigation]}
                         className="mySwiper"
                    >
                         <SwiperSlide>
                              <SwiperItem id="asd" />
                         </SwiperSlide>
                         <SwiperSlide>
                              <SwiperItem id="asd" />
                         </SwiperSlide>
                         <SwiperSlide>
                              <SwiperItem id="asd" />
                         </SwiperSlide>
                         <SwiperSlide>
                              <SwiperItem id="asd" />
                         </SwiperSlide>
                         <SwiperSlide>
                              <SwiperItem id="asd" />
                         </SwiperSlide>
                         <SwiperSlide>
                              <SwiperItem id="asd" />
                         </SwiperSlide>
                         <SwiperSlide>
                              <SwiperItem id="asd" />
                         </SwiperSlide>
                         <SwiperSlide>
                              <SwiperItem id="asd" />
                         </SwiperSlide>
                    </Swiper>
               </Box>

               <Box pt={"50px"} mt={3}>
                    <Text textStyle={"mainMediumText"}>Lorem, ipsum.</Text>
                    <Swiper
                         slidesPerView={6}
                         spaceBetween={10}
                         navigation={true}
                         modules={[Navigation]}
                         className="mySwiper"
                    >
                         <SwiperSlide>
                              <SwiperItem id="asd" />
                         </SwiperSlide>
                         <SwiperSlide>
                              <SwiperItem id="asd" />
                         </SwiperSlide>
                         <SwiperSlide>
                              <SwiperItem id="asd" />
                         </SwiperSlide>
                         <SwiperSlide>
                              <SwiperItem id="asd" />
                         </SwiperSlide>
                         <SwiperSlide>
                              <SwiperItem id="asd" />
                         </SwiperSlide>
                         <SwiperSlide>
                              <SwiperItem id="asd" />
                         </SwiperSlide>
                         <SwiperSlide>
                              <SwiperItem id="asd" />
                         </SwiperSlide>
                         <SwiperSlide>
                              <SwiperItem id="asd" />
                         </SwiperSlide>
                    </Swiper>
               </Box>
               <Box pt={"50px"} mt={3}>
                    <Text textStyle={"mainMediumText"}>Lorem, ipsum.</Text>
                    <Swiper
                         slidesPerView={6}
                         spaceBetween={10}
                         navigation={true}
                         modules={[Navigation]}
                         className="mySwiper"
                    >
                         <SwiperSlide>
                              <SwiperItem id="asd" />
                         </SwiperSlide>
                         <SwiperSlide>
                              <SwiperItem id="asd" />
                         </SwiperSlide>
                         <SwiperSlide>
                              <SwiperItem id="asd" />
                         </SwiperSlide>
                         <SwiperSlide>
                              <SwiperItem id="asd" />
                         </SwiperSlide>
                         <SwiperSlide>
                              <SwiperItem id="asd" />
                         </SwiperSlide>
                         <SwiperSlide>
                              <SwiperItem id="asd" />
                         </SwiperSlide>
                         <SwiperSlide>
                              <SwiperItem id="asd" />
                         </SwiperSlide>
                         <SwiperSlide>
                              <SwiperItem id="asd" />
                         </SwiperSlide>
                    </Swiper>
               </Box>
          </Box>
     );
};

export default SwiperWrapper;
