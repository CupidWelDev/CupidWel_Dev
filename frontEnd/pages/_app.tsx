import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import CssBaseline from "@mui/material/CssBaseline";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 20 * 1000, // 리패칭 시간
      cacheTime: 10 * 60 * 1000, // 캐싱처리 시간
    },
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <CssBaseline />
        <Component {...pageProps} />
      </Layout>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
