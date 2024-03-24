import Layout from "@/Components/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Soheil khatar</title>
      </Head>
      <ToastContainer
        position="top-right"
        delay={5000}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
