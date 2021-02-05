import { AppComponent } from 'next/dist/next-server/lib/router/router'
import { PreviewTrigger } from '../components/cms/PreviewTrigger'

import '../styles/global.scss'

const App: AppComponent = ({ Component, pageProps }) => (
  <>
    <PreviewTrigger
      isPreview={Boolean(pageProps?.subscription?.preview)}
      previewUrl={(loc) => `${loc.origin}/api/preview?slug=${loc.pathname}`}
      exitUrl={(loc) => `${loc.origin}/api/exit-preview?slug=${loc.pathname}`}
    />
    <Component {...pageProps}></Component>
  </>
)

export default App
