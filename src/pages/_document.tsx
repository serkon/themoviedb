import React from 'react';
import NextDocument, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';

class Document extends NextDocument {

  // { shouldShow: boolean, html: string; }
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return {
      ...initialProps,
      // shouldShow: true

    };
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <style>
            {`#__next {
                display: flex;
                flex-direction: column;
                min-height: 100%;
                flex-grow: 1;
              }
            `}
          </style>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

}

export default Document;
