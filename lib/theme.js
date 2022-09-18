import { extendTheme } from "@chakra-ui/react";
import "@fontsource/dm-sans";

// import { mode } from "@chakra-ui/theme-tools";

const styles = {
     // global: (props) => ({
     //      body: {
     //           bg: mode("#000000", "#ececec")(props),
     //           color: mode("#ececec", "#000000")(props),
     //      },
     // }),
     global: {
          body: {
               bg: "#181818",
               color: "#fff",
          },
     },
     // global: {
     //      body: {
     //           backgroundColor: "#ececec",
     //      },
     // },
};

// // const breakpoints = {
// //      sm: "340px",
// //      md: "788px",
// //      lg: "960px",
// //      xl: "1400px",
// //      "2xl": "1900px",
// // };

// const components = {};

const fonts = {
     heading: "DM Sans",
     body: "DM Sans",
};

const colors = {
     mainGrey: "#272728",
     bgGrey: "#181818",
     mainOrange: "#FF7425",
     titleGrey: "#888888",
};

// const config = {
//      initialColorMode: "dark",
//      useSystemColorMode: true,
// };

const components = {
     // Heading: {
     //      variants: {
     //           "section-title": {
     //                textDecoration: "underline",
     //                fontSize: 20,
     //                textUnderlineOffset: 6,
     //                textDecorationColor: "#525252",
     //                textDecorationThickness: 4,
     //                marginTop: 3,
     //                marginBottom: 4,
     //           },
     //      },
     // },
     // Link: {
     //      baseStyle: (props) => ({
     //           color: mode("#3d7aed", "#ff63c3")(props),
     //           textUnderlineOffset: 3,
     //      }),
     // },
     // Heading: {
     //      variants: {
     //           lead: {
     //                fontWeight: "bold",
     //           },
     //      },
     //      sizes: {
     //           // "main-heading": {
     //           //      fontSize: "calc(1rem + 3vw)",
     //           // },
     //           second: {
     //                fontSize: ["60px", "160px"],
     //           },
     //      },
     // },

     Container: {
          variants: {
               main__container: {
                    width: "calc(90% + 30px)",
                    maxWidth: "1230px",
               },
               md__container: {
                    width: "calc(85% + 30px)",
                    maxWidth: "1024px",
               },
               sm__container: {
                    width: "calc(80% + 30px)",
                    maxWidth: "767px",
               },
               base__container: {
                    width: "calc(90% + 30px)",
               },
          },
     },
};

const textStyles = {
     // bannerWord: {
     //      color: "red",
     //      fontSize: ["calc(14px + 1.4vw)", "28px"],
     // },
     mainBiggerHeader: {
          fontWeight: "bold",
          // fontSize: ["11vw", "11vw", "160px"],
          fontSize: [{ base: "11vw", xl: "160px" }],
          letterSpacing: "3px",
          lineHeight: "1em",
     },
     mainMediumHeader: {
          fontWeight: "bold",
          fontSize: [{ base: "31px", xl: "36px" }],
          color: "white",
     },

     mainMediumHeader_1: {
          fontWeight: "bold",
          fontSize: [{ base: "31px", md: "42px" }],
          color: "white",
          lineHeight: "1.2",
     },

     mainMediumText: {
          fontSize: [{ base: "1em", xl: "20px" }],
     },

     // Circletei Link
     mainLink: {
          fontSize: "16px",
          fontWeight: "bold",
          color: "red",
          textTransform: "uppercase",
          letterSpacing: "1px",
          whiteSpace: "nowrap",
     },
     title: {
          fontSize: "14px",
          fontWeight: "bold",
          color: "titleGrey",
          textTransform: "uppercase",
          letterSpacing: "1px",
     },

     cardTitle: {
          fontSize: "30px",

          color: "white",
          _hover: {
               textDecoration: "none",
          },
     },

     bigText: {
          fontSize: [{ base: "30px", md: "80px", lg: "144px" }],
          fontWeight: "bold",
     },

     bigText_1: {
          fontSize: [{ base: "30px", md: "144px" }],
          fontWeight: "bold",
     },

     quote: {
          fontSize: [{ base: "20px", md: "22px", lg: "24px" }],
          lineHeight: "2",
     },
};

const theme = extendTheme({
     // config,
     styles,
     // components,
     // fonts,
     textStyles,
     components,
     colors,
});
export default theme;
