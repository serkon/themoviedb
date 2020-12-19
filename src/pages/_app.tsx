import '~/src/scss/app.scss'
import { Layout } from '~/src/components/layout/layout.module'
import { AppProps } from 'next/app';
import { AppProvider } from '../providers/app.provider';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  )
}

export default App;
