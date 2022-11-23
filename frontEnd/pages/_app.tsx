import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import CssBaseline from "@mui/material/CssBaseline";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect } from "react";
import { openDB } from "@libs/IndexedDB";
import * as util from "util";

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
    //indexedDB open
    openDB();
    //  PWA SW connect
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          // 업데이트 발견
          registration.addEventListener("updatefound", () => {
            // 설치 중인 새로운 서비스 워커
            const newServiceWorker = registration.installing;
            console.log("업데이트 찾음");

            newServiceWorker?.addEventListener("statechange", (event) => {
              // @ts-ignore
              const state = event?.target?.state;
              console.log("state: " + state);
              if (state === "installed") {
                console.log("sw_installed");
              } else {
                console.log(state);
              }
            });
          });
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
