import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { initSuperflow } from '@usesuperflow/client'

export default function App({ Component, pageProps }: AppProps) {
  initSuperflow('nfLcY0Nb3xXI35zmi5zh', { projectId: '5160527548617664' });
  return <Component {...pageProps} />
}
