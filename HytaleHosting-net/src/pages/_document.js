import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
        <meta name="google-site-verification" content="_Cwr_Uky_sktoCdYLP9RzljpOri2LHmQ3MzStx_zjAY"/>
          <meta charset="UTF-8"/>
          <title>Hytale Server Hosting | HytaleHosting.org</title>
          <meta name="description" content="Create your server today with Hytale Hosting. We're proud to provide maximum uptime and 24/7 customer support to our HyTale server hosting customers!"/>
          <meta name="keywords" content="hytale hosting, hytale server hosting, hytale host, hytale server host, free hytale hosting, best hytale hosting, cheapest hytale hosting"/>
          <link rel="canonical" href="https://hytalehosting.org"/>
          <meta name="robots" content="all"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta name="og:type" content="website"/>
          <meta name="og:url" content="https://hytalehosting.org"/>
          <meta name="og:site_name" content="HytaleHosting"/>
          <meta name="og:description" content="Create your server today with Hytale Hosting. We're proud to provide maximum uptime and 24/7 customer support to our HyTale server hosting customers!"/>
          <meta name="og:keywords" content="hytale hosting, hytale server hosting, hytale host, hytale server host, free hytale hosting, best hytale hosting, cheapest hytale hosting"/>
          <meta name="og:image" content="/logo-small.png"/>
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:title" content="Hytale Server Hosting | Hytale Hosting"/>
          <meta name="twitter:creator" content="HytaleHosting"/>
          <meta name="twitter:site" content="https://hytalehosting.org/"/>
          <meta name="msapplication-TileColor" content="#ffffff"/>
          <meta name="msapplication-TileImage" content="img/ms-icon-144x144.png"/>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
