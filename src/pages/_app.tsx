import "@/styles/globals.css";
import { initFlowbite } from "flowbite";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="absolute z-[12500]">
        <ToastContainer
          position="top-right"
          theme="light"
          pauseOnHover={true}
          className="absolute z-[999999]"
        />
      </div>
      <Component {...pageProps} />
    </>
  );
}
