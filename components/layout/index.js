import React, { Children } from "react";
import Head from "next/head";
import Navbar from "../navbar";
import Footer from "../footer";

const Layout = ({ children }) => {
     return (
          <>
               <Head>
                    <title>Honest Media</title>
                    <meta
                         name="description"
                         content="Generated by create next app"
                    />
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <Navbar />
               {children}
               <div className="body__lines">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
               </div>
               <Footer />
          </>
     );
};

export default Layout;
