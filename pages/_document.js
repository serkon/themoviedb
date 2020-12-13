import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

class Document extends NextDocument {
    static async getInitialProps(ctx) {
        const initialProps = await NextDocument.getInitialProps(ctx);

        // Determine if class name should be added
        return {
            ...initialProps,
            shouldShow: true
        };
    }

    render() {
        return (
            <Html>
                <Head>
                    <style>
                        {
                            `#__next {
                                height: ${this.props.shouldShow ? '100%' : '0'}
                            }
                        `}
                    </style>
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