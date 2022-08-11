import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;700&display=swap" rel="stylesheet" />
        </Head>
        <body className='min-h-screen bg-bgBlue'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document