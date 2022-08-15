import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/alohe/emojicloud/emojicloud.css"
          />
          <meta
            name="description"
            content="culinar.in is restaurant recommendation app powered by machine learning."
          />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <body className="min-h-screen bg-bgBlue">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
