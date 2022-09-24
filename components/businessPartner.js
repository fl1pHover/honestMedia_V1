import React from "react";
import SectionLayout from "./layout/sectionLayout";
import { Center, Text, Box, Stack, Image } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import LinkBusinessLogo from "./utils/businessLogos";

const BusinessPartner = () => {
     const settings = {
          dots: false,
          infinite: false,
          accessibility: false,
          arrows: false,
          centerMode: false,
          touchMove: false,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 3,
     };
     return (
          <SectionLayout>
               <Stack direction="column">
                    <Center>
                         <Text textStyle="title">
                              OVER 1K+ SOFTWARE BUSINESSES GROWING WITH BILI
                         </Text>
                    </Center>

                    <Box py={10}>
                         <Swiper
                              slidesPerView={6}
                              spaceBetween={10}
                              breakpoints={{
                                   640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                   },
                                   768: {
                                        slidesPerView: 4,
                                        spaceBetween: 40,
                                   },
                                   1024: {
                                        slidesPerView: 5,
                                        spaceBetween: 50,
                                   },
                              }}
                              className="mySwiper"
                         >
                              <SwiperSlide>
                                   <LinkBusinessLogo
                                        href="/"
                                        src="/images/logos/partner_1.png"
                                        alt=""
                                   />
                              </SwiperSlide>
                              <SwiperSlide>
                                   <LinkBusinessLogo
                                        href="/"
                                        src="/images/logos/partner_2.png"
                                        alt=""
                                   />
                              </SwiperSlide>
                              <SwiperSlide>
                                   <LinkBusinessLogo
                                        href="/"
                                        src="/images/logos/partner_3.png"
                                        alt=""
                                   />
                              </SwiperSlide>
                              <SwiperSlide>
                                   <LinkBusinessLogo
                                        href="/"
                                        src="/images/logos/partner_4.png"
                                        alt=""
                                   />
                              </SwiperSlide>
                              <SwiperSlide>
                                   <LinkBusinessLogo
                                        href="/"
                                        src="/images/logos/partner_1.png"
                                        alt=""
                                   />
                              </SwiperSlide>
                              <SwiperSlide>
                                   <LinkBusinessLogo
                                        href="/"
                                        src="/images/logos/partner_2.png"
                                        alt=""
                                   />
                              </SwiperSlide>
                         </Swiper>
                    </Box>
               </Stack>
          </SectionLayout>
     );
};

export default BusinessPartner;
