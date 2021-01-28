import { AppComponent } from 'next/dist/next-server/lib/router/router'

import '../styles/main.css'

// TODO extract to component
if (typeof window !== 'undefined') {
  let index = 0
  const keyword = 'preview'
  const end = keyword.length - 1
  document.addEventListener('keydown', (e) => {
    if (index === end) {
      // Win condition
      index = 0
      const origin = window.location.origin
      const path = window.location.pathname
      const dest = `${origin}/api/preview?path=${path}`
      window.location.replace(dest)
    } else if (keyword[index] === e.key) {
      // Step forward
      index++
    } else {
      // Lose
      index = 0
    }
  })
}

const App: AppComponent = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps}></Component>
  </>
)

export default App
