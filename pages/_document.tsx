import Document, { Head, Html, Main, NextScript } from 'next/document'

import { GA_TRACKING_ID } from '../util/gtag'

export default class extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          {/* Montserrat Font */}
          {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={'true'}
          /> */}
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          {/* Font Awesome */}
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.15.2/css/all.css"
            integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu"
            crossOrigin="anonymous"
          />

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

          {/* LinkedIn */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                _linkedin_partner_id = "3206268";
                window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(){var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";
              b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);})();
            `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src="https://px.ads.linkedin.com/collect/?pid=3206268&fmt=gif"
            />
          </noscript>

          {/* Twitter */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(e,t,n,s,u,a){
                  e.twq || (
                    s = e.twq = function(){
                      s.exe
                        ? s.exe.apply(s,arguments)
                        : s.queue.push(arguments);
                    },
                    s.version='1.1',
                    s.queue=[],
                    u=t.createElement(n),
                    u.async=!0,
                    u.src='//static.ads-twitter.com/uwt.js',
                    a=t.getElementsByTagName(n)[0],
                    a.parentNode.insertBefore(u,a)
                  )
                }(window,document,'script');
                // Insert Twitter Pixel ID and Standard Event data below
                twq('init','o61ik');
                twq('track','PageView');
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
