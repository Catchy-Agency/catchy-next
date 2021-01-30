import { AppComponent } from 'next/dist/next-server/lib/router/router'
import { PreviewTrigger } from '../components/PreviewTrigger'

import '../styles/main.css'

const App: AppComponent = ({ Component, pageProps }) => (
  <>
    <PreviewTrigger
      isPreviewMode={Boolean(pageProps?.subscription?.preview)}
      previewURL={(loc) => `${loc.origin}/api/preview?path=${loc.pathname}`}
      exitURL={(loc) => `${loc.origin}/api/exit-preview?path=${loc.pathname}`}
    >
      <div>THIS IS PREVIEW MODE</div>
    </PreviewTrigger>
    <Component {...pageProps}></Component>
  </>
)

export default App
