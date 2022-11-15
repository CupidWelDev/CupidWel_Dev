import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@mui/styles";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          {/*기본 셋팅*/}
          <meta charSet="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          {/*<meta*/}
          {/*  name="viewport"*/}
          {/*  content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"*/}
          {/*/>*/}
          <meta name="description" content="Description" />
          <meta name="keywords" content="Keywords" />
          <meta name="theme-color" content="#FC5230" />

          <link rel="manifest" href="/manifest.json" />

          {/*favicons img*/}
          <link
            href="images/favicons/favicon-16x16.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
          />
          <link
            href="images/favicons/favicon-32x32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <link rel="apple-touch-icon" href="images/icons/icon-192x192.png" />

          {/*스플레쉬 이미지*/}
          <link
            href="images/splashscreens/iphone5_splash.png"
            media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="images/splashscreens/iphone6_splash.png"
            media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="images/splashscreens/iphoneplus_splash.png"
            media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"
          />
          <link
            href="images/splashscreens/iphonex_splash.png"
            media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"
          />
          <link
            href="images/splashscreens/iphonexr_splash.png"
            media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="images/splashscreens/iphonexsmax_splash.png"
            media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"
          />
          <link
            href="images/splashscreens/ipad_splash.png"
            media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="images/splashscreens/ipadpro1_splash.png"
            media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="images/splashscreens/ipadpro3_splash.png"
            media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="images/splashscreens/ipadpro2_splash.png"
            media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />

          <meta name="msapplication-TileColor" content="#FF98BA" />
        </Head>
        <body className="scrollbar-hide bg-red-100 lg:bg-[url('/bgImg.svg')]">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// MyDocument.getInitialProps = async (ctx) => {
//   const materialSheets = new ServerStyleSheets();
//   const originalRenderPage = ctx.renderPage;
//
//   ctx.renderPage = () =>
//     originalRenderPage({
//       enhanceApp: (App) => (props) =>
//         materialSheets.collect(<App {...props} />),
//     });
//
//   const initialProps = await Document.getInitialProps(ctx);
//   return {
//     ...initialProps,
//     styles: <>{initialProps.styles}</>,
//   };
// };
