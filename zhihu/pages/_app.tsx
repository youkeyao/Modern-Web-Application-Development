import '../styles/globals.css'

import Head from 'next/head'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then((registration) => {
            console.log("SW registered: ", registration);
          })
          .catch((registrationError) => {
            console.log("SW registration failed: ", registrationError);
          });
      });
    }
  }, []);
  return (
    <>
      <Head>
        <title>知乎</title>
        <meta name="theme-color" content="#001f3f" />
        <meta name="author" content="游克垚" />
        <meta name="description" property="og:description" content="知乎，中文互联网高质量的问答社区和创作者聚集的原创内容平台。" />
        <link rel="preload" as="style" href="https://use.fontawesome.com/releases/v5.11.1/css/all.css"/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="apple-touch-icon"
          href="https://static.zhihu.com/heifetz/assets/apple-touch-icon-152.a53ae37b.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="512x512"
          href="https://placehold.co/512x512.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="https://static.zhihu.com/heifetz/assets/apple-touch-icon-152.a53ae37b.png"
        ></link>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp