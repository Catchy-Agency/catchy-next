import '../styles/formula-arrows.scss';
import '../styles/global.scss';
import '../styles/nprogress.scss';

import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

import { AppComponent } from 'next/dist/shared/lib/router/router';
import { PreviewTrigger } from '../components/cms/PreviewTrigger';
import { pageview } from '../util/gtag';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeError', () => NProgress.done());
Router.events.on('routeChangeComplete', (path: string) => {
  NProgress.done();
  pageview(path);
});

const App: AppComponent = ({ Component, pageProps }) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const isPreview = Boolean(pageProps?.subscription?.preview);
  return (
    <>
      <Head>
        {/* Mobile size & bar colors */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#111" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </Head>
      <PreviewTrigger
        isPreview={isPreview}
        previewUrl={(loc) => `${loc.origin}/api/preview?slug=${loc.pathname}`}
        exitUrl={(loc) => `${loc.origin}/api/exit-preview?slug=${loc.pathname}`}
      />
      <Component {...pageProps} />
    </>
  );
};

export default App;
