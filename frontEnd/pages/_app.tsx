import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import CssBaseline from "@mui/material/CssBaseline";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 20 * 1000, // 리패칭 시간
      cacheTime: 10 * 60 * 1000, // 캐싱처리 시간
    },
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="font-sans">
        <Layout>
          <CssBaseline />
          <Component {...pageProps} />
        </Layout>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
