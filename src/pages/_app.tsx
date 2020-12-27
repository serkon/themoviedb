import React, { useState } from 'react';
import { AppProps } from 'next/app';

import 'src/scss/app.scss'
import { AppContext } from 'src/providers/app.context';
import { Layout } from 'src/components/layout/layout.module'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [store, setStore] = useState({
    search: [],
  });
  return (
    <AppContext.Provider value={{ store, setStore }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  )
}

export default App;
