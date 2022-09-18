import "../styles/globals.scss";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout";
import theme from "../lib/theme";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
     return (
          <ChakraProvider theme={theme}>
               <Layout>
                    <AnimatePresence>
                         <Component {...pageProps} />
                    </AnimatePresence>
               </Layout>
          </ChakraProvider>
     );
}

export default MyApp;
