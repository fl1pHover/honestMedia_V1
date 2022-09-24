import React from "react";
import NextLink from "next/link";
import { Link, Box, Text, Stack, Image } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import SectionLayout from "./layout/sectionLayout";
import SectionHeader from "./utils/sectionHeader";

const ProfileCard = ({ href, fbHref, iglHref, linkedHref, name, role }) => {
     return (
          <>
               {/* <NextLink href={href} passHref>
                    <Link
                         textStyle="mainLink"
                         _hover={{
                              textDecoration: "none",
                         }}
                    > */}
               <Box
                    display="flex"
                    className="profile__card"
                    bgSize="cover"
                    bgPosition="center"
                    height={{ base: "400px", sm: "350px" }}
                    width="90%"
                    // w="410px"
               >
                    <Image
                         src="/images/pro/pro3.jpg"
                         objectFit="cover"
                         alt="profile picture"
                         pos="absolute"
                         top="0"
                         left="0"
                         height="100%"
                         width="100%"
                         className="profile__picture"
                    />
                    <Box
                         pb="3em"
                         pl="3em"
                         display="flex"
                         flexDirection="column"
                         justifyContent="flex-end"
                         textAlign="left"
                         zIndex="1"
                         className="profile__info"
                    >
                         <Text
                              as="h4"
                              fontSize="24px"
                              fontWeight="bold"
                              textTransform="none"
                              className="profile__name"
                         >
                              {name}
                         </Text>
                         <Text
                              as="h6"
                              textStyle="title"
                              textTransform="none"
                              color="white"
                              className="profile__role"
                         >
                              {role}
                         </Text>
                         <Stack
                              direction="row"
                              mt="20px"
                              className="profile__social"
                         >
                              <NextLink href={fbHref} passHref>
                                   <Link
                                        fontSize="20px"
                                        _hover={{
                                             color: "mainOrange",
                                        }}
                                   >
                                        <FaFacebookF />
                                   </Link>
                              </NextLink>
                              <NextLink href={iglHref} passHref>
                                   <Link
                                        fontSize="20px"
                                        _hover={{
                                             color: "mainOrange",
                                        }}
                                   >
                                        <AiFillInstagram />
                                   </Link>
                              </NextLink>
                              <NextLink href={linkedHref} passHref>
                                   <Link
                                        fontSize="20px"
                                        _hover={{
                                             color: "mainOrange",
                                        }}
                                   >
                                        <FaLinkedinIn />
                                   </Link>
                              </NextLink>
                         </Stack>
                    </Box>
               </Box>
               {/* </Link>
               </NextLink> */}
          </>
     );
};

// import required modules

import { Pagination } from "swiper";

const Profiles = () => {
     return (
          <SectionLayout>
               <SectionHeader
                    miniTitle="MEET OUR PROFESSIONALS"
                    headerTitle="Team that Builds Ideas Driven by the Future"
               />
               <Box mr={{ base: "0", xl: "-30%" }} pb="50px">
                    <Swiper
                         slidesPerView={4}
                         pagination={true}
                         modules={[Pagination]}
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
                         className="mySwiper profileSwiper"
                    >
                         <SwiperSlide>
                              <ProfileCard
                                   href=""
                                   fbHref="/"
                                   iglHref="/"
                                   linkedHref="/"
                                   name="Tiffany"
                                   role="Developer"
                              />
                         </SwiperSlide>
                         <SwiperSlide>
                              <ProfileCard
                                   href="/"
                                   fbHref="/"
                                   iglHref="/"
                                   linkedHref="/"
                                   name="Tiffany"
                                   role="Developer"
                              />
                         </SwiperSlide>
                         <SwiperSlide>
                              <ProfileCard
                                   href="/"
                                   fbHref="/"
                                   iglHref="/"
                                   linkedHref="/"
                                   name="Tiffany"
                                   role="Developer"
                              />
                         </SwiperSlide>
                         <SwiperSlide>
                              <ProfileCard
                                   href="/"
                                   fbHref="/"
                                   iglHref="/"
                                   linkedHref="/"
                                   name="Tiffany"
                                   role="Developer"
                              />
                         </SwiperSlide>
                         <SwiperSlide>
                              <ProfileCard
                                   href="/"
                                   fbHref="/"
                                   iglHref="/"
                                   linkedHref="/"
                                   name="Tiffany"
                                   role="Developer"
                              />
                         </SwiperSlide>
                         <SwiperSlide>
                              <ProfileCard
                                   href="/"
                                   fbHref="/"
                                   iglHref="/"
                                   linkedHref="/"
                                   name="Tiffany"
                                   role="Developer"
                              />
                         </SwiperSlide>
                         <SwiperSlide>
                              <ProfileCard
                                   href="/"
                                   fbHref="/"
                                   iglHref="/"
                                   linkedHref="/"
                                   name="Tiffany"
                                   role="Developer"
                              />
                         </SwiperSlide>
                    </Swiper>
               </Box>
          </SectionLayout>
     );
};

export default Profiles;
