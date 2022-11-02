import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import CssBaseline from "@mui/material/CssBaseline";
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <CssBaseline />
      <Component {...pageProps} />
    </Layout>
  );
}
