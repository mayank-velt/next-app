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
          src='https://cdn.jsdelivr.net/npm/@usesuperflow/toolbar-staging/superflow.min.js?apiKey=nfLcY0Nb3xXI35zmi5zh&projectId=5160527548617664'
        ></script>
		{/* <script id="superflowToolbarScript" data-sf-platform="other-manual" async src="https://cdn.jsdelivr.net/npm/@usesuperflow/toolbar-staging/superflow.min.js?apiKey=jpxGj4CYeU3c488r2fRC&projectId=7060838922492968"></script>
        <NextScript /> */}
      </body>
    </Html>
  )
}
