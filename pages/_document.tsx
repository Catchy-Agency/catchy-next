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
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Open+Sans:wght@400;700&display=swap"
            rel="stylesheet"
          />
          {/* Font Awesome */}
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.15.2/css/all.css"
            integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu"
            crossOrigin="anonymous"
          />

          {/* Cooki Eyes */}
          <script
            id="cookieyes"
            type="text/javascript"
            src="https://cdn-cookieyes.com/client_data/6d54aa79ad27159ee90827eb/script.js"
            async
          />

          {/* Google Tag Manager (first half) */}
          {/* eslint-disable @next/next/next-script-for-ga */}
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
              (function (w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
                var f = d.getElementsByTagName(s)[0],
                  j = d.createElement(s),
                  dl = l != "dataLayer" ? "&l=" + l : "";
                j.async = true;
                j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
                f.parentNode.insertBefore(j, f);
              })(window, document, "script", "dataLayer", "GTM-WTSH8X9");
            `,
            }}
          /> */}

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
          <script />

          {/* LinkedIn */}
          {/* <script
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
          </noscript> */}

          {/* Twitter */}
          {/* <script
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
          /> */}
        </Head>
        <body className="has-navbar-fixed-top">
          {/* Google Tag Manager (second half) */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WTSH8X9" height="0" width="0" style="display: none; visibility: hidden;" />`,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
