import { AppComponent } from 'next/dist/next-server/lib/router/router'
import Head from 'next/head'

import { PreviewTrigger } from '../components/cms/PreviewTrigger'

import '../styles/global.scss'

const App: AppComponent = ({ Component, pageProps }) => (
  <>
    <Head>
      {/* Mobile size & bar colors */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="viewport" content="width=device-width, initial-scale=0.9" />
      <meta name="theme-color" content="#111" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />

      {/* Font Awesome */}
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/solid.css"
        integrity="sha384-QokYePQSOwpBDuhlHOsX0ymF6R/vLk/UQVz3WHa6wygxI5oGTmDTv8wahFOSspdm"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/regular.css"
        integrity="sha384-FKw7x8fCxuvzBwOJmhTJJsKzBl8dnN9e2R4+pXRfYoHivikuHkzWyhKWDSMcGNK8"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/fontawesome.css"
        integrity="sha384-vd1e11sR28tEK9YANUtpIOdjGW14pS87bUBuOIoBILVWLFnS+MCX9T6MMf0VdPGq"
        crossOrigin="anonymous"
      />
    </Head>
    <PreviewTrigger
      isPreview={Boolean(pageProps?.subscription?.preview)}
      previewUrl={(loc) => `${loc.origin}/api/preview?slug=${loc.pathname}`}
      exitUrl={(loc) => `${loc.origin}/api/exit-preview?slug=${loc.pathname}`}
    />
    <Component {...pageProps}></Component>
  </>
)

export default App
