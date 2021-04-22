import Document, { Head, Html, Main, NextScript } from 'next/document'

import { GA_TRACKING_ID } from '../util/gtag'

export default class extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          {/* Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}');
            `,
            }}
          />
        </Head>
        <body className="has-navbar-fixed-top">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
