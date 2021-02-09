import { AppComponent } from 'next/dist/next-server/lib/router/router'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'

import { PreviewTrigger } from '../components/cms/PreviewTrigger'

import '../styles/global.scss'
import '../styles/nprogress.scss'
import '../styles/formula-arrows.scss'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeError', () => NProgress.done())
Router.events.on('routeChangeComplete', (_url) => {
  NProgress.done()
  // pageview(url) TODO
})

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
        href="https://use.fontawesome.com/releases/v5.15.2/css/all.css"
        integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu"
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
