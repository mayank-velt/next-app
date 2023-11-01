import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { initSuperflow } from '@usesuperflow/client'

export default function App({ Component, pageProps }: AppProps) {
  initSuperflow('SoNazk1CobX8QnhENUBL', { projectId: '7406212340077586' });
  return <Component {...pageProps} />
}
