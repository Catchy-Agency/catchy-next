import { AppComponent } from 'next/dist/next-server/lib/router/router'
import { PreviewTrigger } from '../components/PreviewTrigger'

import '../styles/main.css'

const App: AppComponent = ({ Component, pageProps }) => (
  <>
    <PreviewTrigger
      isPreview={Boolean(pageProps?.subscription?.preview)}
      previewUrl={(loc) => `${loc.origin}/api/preview?slug=${loc.pathname}`}
      exitUrl={(loc) => `${loc.origin}/api/exit-preview?slug=${loc.pathname}`}
      component={(isPreview, togglePreview) =>
        isPreview ? (
          <div className="inline-block fixed right-2 bottom-2 py-2 px-4 text-md font-medium bg-blue-200 bg-opacity-80">
            Preview Mode &nbsp;
            <button
              className="py-1 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={togglePreview}
            >
              Exit
            </button>
          </div>
        ) : null
      }
    />
    <Component {...pageProps}></Component>
  </>
)

export default App
