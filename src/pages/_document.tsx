import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <script
          id='superflowToolbarScript'
          data-sf-platform='manual'
          async
          src='https://cdn.jsdelivr.net/npm/@usesuperflow/toolbar/superflow.min.js?apiKey=3HGAiD07fiP4rypdYvEn&projectId=7406212340077586'
        ></script>
        <NextScript />
      </body>
    </Html>
  )
}
