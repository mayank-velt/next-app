import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// import TagManager from 'react-gtm-module'

// const tagManagerArgs = {
// 	gtmId: 'GTM-5H3LGT3T' // Replace with your GTM ID
//   };
  

export default function App({ Component, pageProps }: AppProps) {
//   TagManager.initialize(tagManagerArgs);
  return <Component {...pageProps} />
}
